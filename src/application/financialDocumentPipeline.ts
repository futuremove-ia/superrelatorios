import { supabase } from "@/lib/supabase";
import { createFinancialParser } from "@/domain/financial/financialDataParserService";
import {
  unstructuredClient,
  type UnstructuredElement,
} from "@/domain/shared/unstructuredService";
import type {
  ParsingResult,
  ParsedFinancialData,
  FinancialMetric,
  FinancialUploadOptions,
} from "@/types/financial-parser";

export interface FinancialDocumentPipelineOptions {
  organizationId: string;
  userId: string;
  strategy?: "auto" | "hi_res" | "fast";
  onProgress?: (progress: number, message: string) => void;
}

export interface FinancialDocumentPipelineResult {
  success: boolean;
  documentType: string;
  tableData?: ParsedFinancialData;
  metrics?: FinancialMetric[];
  elements: UnstructuredElement[];
  errors: string[];
  warnings: string[];
  processingTime: number;
}

const EXTRACTION_STRATEGIES = {
  auto: "Automatically select the best strategy",
  hi_res: "High resolution - best for complex layouts",
  fast: "Fast - best for simple documents",
} as const;

export class FinancialDocumentPipeline {
  private organizationId: string;
  private userId: string;
  private strategy: "auto" | "hi_res" | "fast";
  private onProgress?: (progress: number, message: string) => void;

  constructor(options: FinancialDocumentPipelineOptions) {
    this.organizationId = options.organizationId;
    this.userId = options.userId;
    this.strategy = options.strategy || "auto";
    this.onProgress = options.onProgress;
  }

  async processFile(file: File): Promise<FinancialDocumentPipelineResult> {
    const startTime = Date.now();
    const errors: string[] = [];
    const warnings: string[] = [];
    let elements: UnstructuredElement[] = [];
    let tableData: ParsedFinancialData | undefined;
    let metrics: FinancialMetric[] = [];

    try {
      this.onProgress?.(10, "Fazendo upload do arquivo...");

      const fileName = `uploads/${this.organizationId}/${Date.now()}-${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("documents")
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(`Erro no upload: ${uploadError.message}`);
      }

      this.onProgress?.(30, "Extraindo conteúdo do documento...");

      const fileUrl = await this.getSignedUrl(fileName);
      elements = await unstructuredClient.extractElements(fileUrl, {
        strategy: this.strategy,
        extractTableAsHtml: true,
        includeImageBase64: false,
      });

      if (elements.length === 0) {
        throw new Error("Nenhum conteúdo extraído do documento");
      }

      this.onProgress?.(50, "Detectando tabelas...");

      const tableElements = this.extractTableElements(elements);

      if (tableElements.length === 0) {
        warnings.push(
          "Nenhuma tabela detectada no documento. Tentando processar como texto...",
        );
      }

      this.onProgress?.(70, "Processando dados financeiros...");

      const financialResult = await this.processTableData(tableElements);

      if (financialResult.success && financialResult.data) {
        tableData = financialResult.data;
        metrics = financialResult.metrics || [];
      } else if (financialResult.errors.length > 0) {
        errors.push(...financialResult.errors.map((e) => e.message));
      }

      this.onProgress?.(90, "Finalizando...");

      const processingTime = Date.now() - startTime;

      this.onProgress?.(100, "Concluído!");

      return {
        success: errors.length === 0 && tableData !== undefined,
        documentType: tableData?.documentType || "unknown",
        tableData,
        metrics,
        elements,
        errors,
        warnings: [...warnings, ...financialResult.warnings],
        processingTime,
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      return {
        success: false,
        documentType: "unknown",
        elements,
        errors: [message],
        warnings,
        processingTime: Date.now() - startTime,
      };
    }
  }

  async processStorageFile(
    storagePath: string,
  ): Promise<FinancialDocumentPipelineResult> {
    const startTime = Date.now();
    const errors: string[] = [];
    const warnings: string[] = [];
    let elements: UnstructuredElement[] = [];
    let tableData: ParsedFinancialData | undefined;
    let metrics: FinancialMetric[] = [];

    try {
      this.onProgress?.(20, "Extraindo conteúdo do documento...");

      elements = await unstructuredClient.extractFromStorage(
        storagePath,
        this.organizationId,
      );

      if (elements.length === 0) {
        throw new Error("Nenhum conteúdo extraído do documento");
      }

      this.onProgress?.(50, "Detectando tabelas...");

      const tableElements = this.extractTableElements(elements);

      if (tableElements.length === 0) {
        warnings.push("Nenhuma tabela detectada no documento.");
      }

      this.onProgress?.(70, "Processando dados financeiros...");

      const financialResult = await this.processTableData(tableElements);

      if (financialResult.success && financialResult.data) {
        tableData = financialResult.data;
        metrics = financialResult.metrics || [];
      }

      const processingTime = Date.now() - startTime;

      this.onProgress?.(100, "Concluído!");

      return {
        success: errors.length === 0,
        documentType: tableData?.documentType || "unknown",
        tableData,
        metrics,
        elements,
        errors,
        warnings: [...warnings, ...financialResult.warnings],
        processingTime,
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      return {
        success: false,
        documentType: "unknown",
        elements,
        errors: [message],
        warnings,
        processingTime: Date.now() - startTime,
      };
    }
  }

  private async getSignedUrl(storagePath: string): Promise<string> {
    const { data, error } = await supabase.storage
      .from("documents")
      .createSignedUrl(storagePath, 3600);

    if (error || !data?.signedUrl) {
      throw new Error(`Erro ao obter URL: ${error?.message}`);
    }

    return data.signedUrl;
  }

  private extractTableElements(
    elements: UnstructuredElement[],
  ): UnstructuredElement[] {
    const tables: UnstructuredElement[] = [];

    for (const element of elements) {
      if (element.type === "Table" && element.metadata?.table_as_json) {
        tables.push(element);
      }
    }

    if (tables.length === 0) {
      for (const element of elements) {
        if (element.type === "Table" && element.text) {
          tables.push(element);
        }
      }
    }

    return tables;
  }

  private async processTableData(
    tableElements: UnstructuredElement[],
  ): Promise<ParsingResult> {
    if (tableElements.length === 0) {
      return {
        success: false,
        errors: [{ code: "NO_TABLES", message: "Nenhuma tabela encontrada" }],
        warnings: [],
      };
    }

    const allRows: Record<string, unknown>[] = [];

    for (const tableElement of tableElements) {
      if (tableElement.metadata?.table_as_json) {
        try {
          const tableJson = JSON.parse(tableElement.metadata.table_as_json);
          if (Array.isArray(tableJson)) {
            allRows.push(...tableJson);
          }
        } catch {
          const parsed = this.parseTextTable(tableElement.text);
          allRows.push(...parsed);
        }
      } else if (tableElement.text) {
        const parsed = this.parseTextTable(tableElement.text);
        allRows.push(...parsed);
      }
    }

    if (allRows.length === 0) {
      return {
        success: false,
        errors: [
          { code: "EMPTY_TABLE", message: "Tabelas vazias ou inválidas" },
        ],
        warnings: [],
      };
    }

    const headers = allRows.length > 0 ? Object.keys(allRows[0]) : [];
    const parsedData: ParsedFinancialData = {
      documentType: "unknown",
      rawData: allRows,
      headers,
      detectedColumns: [],
      warnings: [],
      metadata: {
        rowCount: allRows.length,
      },
    };

    const parserOptions: FinancialUploadOptions = {
      organizationId: this.organizationId,
      userId: this.userId,
      autoMapColumns: true,
    };

    const parser = createFinancialParser(parserOptions);

    return parser.parse(new File([], "dummy"));
  }

  private parseTextTable(text: string): Record<string, unknown>[] {
    const lines = text.split("\n").filter((line) => line.trim());
    if (lines.length < 2) return [];

    const headers = lines[0]
      .split(/[\t|,]/)
      .map((h) => h.trim())
      .filter((h) => h);

    const rows: Record<string, unknown>[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(/[\t|,]/).map((v) => v.trim());
      const row: Record<string, unknown> = {};

      headers.forEach((header, index) => {
        row[header] = values[index] || "";
      });

      if (Object.values(row).some((v) => v !== "")) {
        rows.push(row);
      }
    }

    return rows;
  }
}

export function createFinancialDocumentPipeline(
  options: FinancialDocumentPipelineOptions,
): FinancialDocumentPipeline {
  return new FinancialDocumentPipeline(options);
}

export async function processFinancialDocument(
  file: File,
  organizationId: string,
  userId: string,
  onProgress?: (progress: number, message: string) => void,
): Promise<FinancialDocumentPipelineResult> {
  const pipeline = new FinancialDocumentPipeline({
    organizationId,
    userId,
    strategy: "auto",
    onProgress,
  });

  return pipeline.processFile(file);
}
