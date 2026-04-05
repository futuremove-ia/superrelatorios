import { detectDomain } from "../domainDetector";
import { mapColumnToKPIs, getAllKPIsForDomain } from "../columnMappingEngine";
import type {
  Domain,
  UniversalDocumentType,
  UniversalParsedData,
  UniversalDetectedColumn,
  KPIMapping,
  FinancialRow,
} from "@/types/financial-parser";

const DATE_FORMATS = [
  "DD/MM/YYYY",
  "DD-MM-YYYY",
  "YYYY-MM-DD",
  "MM/DD/YYYY",
  "YYYY/MM/DD",
  "DD.MM.YYYY",
];

const normalizeDate = (value: string): string | null => {
  const patterns = [
    {
      regex: /(\d{1,2})[/-](\d{1,2})[/-](\d{4})/,
      parse: (m: RegExpMatchArray) => {
        if (m[3].length === 4)
          return `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
        return `${m[3].padStart(4, "20")}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
      },
    },
    {
      regex: /(\d{4})[/-](\d{1,2})[/-](\d{1,2})/,
      parse: (m: RegExpMatchArray) =>
        `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`,
    },
  ];

  for (const { regex, parse } of patterns) {
    const match = value.match(regex);
    if (match) {
      return parse(match);
    }
  }
  return null;
};

const normalizeMoney = (value: string): number | null => {
  const cleaned = value.replace(/[R$\s.,]/g, "").replace(",", ".");
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
};

const normalizePercentage = (value: string): number | null => {
  const num = parseFloat(value.replace("%", "").replace(",", "."));
  return isNaN(num) ? null : num;
};

const normalizeQuantity = (value: string): number | null => {
  const num = parseFloat(value.replace(",", "."));
  return isNaN(num) ? null : num;
};

interface BlueprintContext {
  industry_sector?: string;
  business_model?: string;
  company_stage?: string;
  employee_count_range?: string;
}

interface ParseDataInput {
  headers: string[];
  rows: Record<string, any>[];
  documentType?: UniversalDocumentType;
}

interface ParseResult {
  success: boolean;
  data?: UniversalParsedData;
  errors: string[];
  warnings: string[];
}

export interface UniversalParserOptions {
  autoMapColumns?: boolean;
  dateFormat?: string;
}

export class UniversalParserService {
  private options: UniversalParserOptions;

  constructor(options: UniversalParserOptions = {}) {
    this.options = {
      autoMapColumns: true,
      ...options,
    };
  }

  detectDomain(
    headers: string[],
    sampleData: Record<string, any>[],
    blueprint?: BlueprintContext,
  ) {
    return detectDomain(headers, sampleData, blueprint);
  }

  async parseData(
    input: ParseDataInput,
    blueprint?: BlueprintContext,
  ): Promise<ParseResult> {
    const { headers, rows, documentType } = input;
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!headers || headers.length === 0) {
      return { success: false, errors: ["No headers provided"], warnings: [] };
    }

    if (!rows || rows.length === 0) {
      return {
        success: false,
        errors: ["No data rows provided"],
        warnings: [],
      };
    }

    const domainResult = this.detectDomain(headers, rows, blueprint);
    const domain =
      domainResult.domain === "unknown"
        ? "commercial"
        : (domainResult.domain as Domain);

    if (domainResult.domain === "unknown") {
      warnings.push(
        "Could not detect domain automatically. Using commercial as default.",
      );
    }

    const detectedColumns = this.detectColumns(headers, rows, domain);
    const kpiMappings = this.mapColumns(detectedColumns, domain);

    const unmappedColumns = detectedColumns.filter(
      (c) => c.possibleMappings.length === 0,
    );
    if (unmappedColumns.length > 0) {
      warnings.push(
        `${unmappedColumns.length} columns could not be mapped to KPIs`,
      );
    }

    const parsedData: UniversalParsedData = {
      documentType: documentType || "unknown",
      domain,
      confidence: domainResult.confidence,
      rawData: rows as FinancialRow[],
      headers,
      detectedColumns,
      kpiMappings,
      warnings,
      metadata: {
        rowCount: rows.length,
        blueprintContext: blueprint
          ? {
              industrySector: blueprint.industry_sector,
              businessModel: blueprint.business_model,
              companyStage: blueprint.company_stage,
            }
          : undefined,
      },
    };

    return { success: true, data: parsedData, errors, warnings };
  }

  async parseTextInput(
    textInput: string,
    blueprint?: BlueprintContext,
  ): Promise<ParseResult> {
    const lines = textInput.split("\n").filter((l) => l.trim());

    const parsedRows: Record<string, string>[] = [];
    let headers: string[] = [];

    for (const line of lines) {
      const parts = line.split(/[:;,]/).map((p) => p.trim());

      if (parts.length === 2) {
        const [key, value] = parts;
        if (!headers.includes(key.toLowerCase())) {
          headers.push(key.toLowerCase());
        }
        parsedRows.push({ [key]: value });
      } else {
        if (headers.length === 0) {
          headers = parts.map((h) => h.trim().toLowerCase());
        } else {
          const row: Record<string, string> = {};
          headers.forEach((h, i) => {
            row[h] = parts[i] || "";
          });
          parsedRows.push(row);
        }
      }
    }

    if (headers.length === 0 || parsedRows.length === 0) {
      return this.parseUnstructuredText(textInput, blueprint);
    }

    return this.parseData({ headers, rows: parsedRows }, blueprint);
  }

  async parseUnstructuredText(
    textInput: string,
    blueprint?: BlueprintContext,
  ): Promise<ParseResult> {
    const warnings: string[] = [
      "Processing unstructured text input - limited KPI mapping available",
    ];

    const extractedData = this.extractDataFromUnstructuredText(textInput);

    if (extractedData.headers.length === 0 || extractedData.rows.length === 0) {
      return {
        success: false,
        errors: ["Could not extract meaningful data from unstructured text"],
        warnings,
      };
    }

    return this.parseData(extractedData, blueprint);
  }

  private extractDataFromUnstructuredText(textInput: string): ParseDataInput {
    const lines = textInput.split("\n").filter((l) => l.trim());
    const extracted: Record<string, string>[] = [];
    const foundHeaders = new Set<string>();

    const datePattern =
      /(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}[/-]\d{1,2}[/-]\d{1,2})/;
    const moneyPattern = /R?\$?\s*[\d.,]+/;
    const percentagePattern = /[\d.,]+%/;

    const patterns = [
      { key: "data", pattern: datePattern, type: "date" },
      { key: "valor", pattern: moneyPattern, type: "money" },
      { key: "percentual", pattern: percentagePattern, type: "percentage" },
      { key: "quantidade", pattern: /\d+/, type: "quantity" },
      {
        key: "cliente",
        pattern: /(cliente|customer|cliente:)\s*/i,
        type: "text",
      },
      { key: "produto", pattern: /(produto|produto:)\s*/i, type: "text" },
      { key: "venda", pattern: /(venda|vendas:)\s*/i, type: "text" },
      {
        key: "descricao",
        pattern: /(descricao|descrição|texto|mensagem):\s*/i,
        type: "text",
      },
    ];

    for (const line of lines) {
      const row: Record<string, string> = {};

      for (const { key, pattern } of patterns) {
        const match = line.match(pattern);
        if (match) {
          row[key] = match[0];
          foundHeaders.add(key);
        }
      }

      if (Object.keys(row).length > 0) {
        extracted.push(row);
      }
    }

    const headers = Array.from(foundHeaders);

    if (headers.length === 0) {
      headers.push("texto", "conteudo");
      for (let i = 0; i < Math.min(lines.length, 10); i++) {
        extracted.push({ texto: lines[i], conteudo: lines[i] });
      }
    }

    const normalizedRows = this.normalizeExtractedData(headers, extracted);

    return { headers, rows: normalizedRows };
  }

  private normalizeExtractedData(
    headers: string[],
    rows: Record<string, string>[],
  ): Record<string, any>[] {
    return rows.map((row) => {
      const normalized: Record<string, any> = {};

      for (const header of headers) {
        const value = row[header];
        if (!value) {
          normalized[header] = null;
          continue;
        }

        const headerLower = header.toLowerCase();

        if (headerLower.includes("data") || headerLower.includes("date")) {
          normalized[header] = normalizeDate(value);
        } else if (
          headerLower.includes("valor") ||
          headerLower.includes("amount") ||
          headerLower.includes("valor") ||
          headerLower.includes("receita") ||
          headerLower.includes("despesa") ||
          headerLower.includes("custo")
        ) {
          normalized[header] = normalizeMoney(value);
        } else if (
          headerLower.includes("percent") ||
          headerLower.includes("taxa") ||
          headerLower.includes("rate")
        ) {
          normalized[header] = normalizePercentage(value);
        } else if (
          headerLower.includes("quantidade") ||
          headerLower.includes("qtd") ||
          headerLower.includes("quant")
        ) {
          normalized[header] = normalizeQuantity(value);
        } else {
          normalized[header] = value;
        }
      }

      return normalized;
    });
  }

  async parseCSVInput(
    csvInput: string,
    blueprint?: BlueprintContext,
  ): Promise<ParseResult> {
    const lines = csvInput.split("\n").filter((l) => l.trim());

    if (lines.length < 2) {
      return {
        success: false,
        errors: ["CSV must have headers and at least one row"],
        warnings: [],
      };
    }

    const headers = lines[0]
      .split(/[,;\t]/)
      .map((h) => h.trim().replace(/"/g, "").toLowerCase());
    const rows = lines.slice(1).map((line) => {
      const values = line
        .split(/[,;\t]/)
        .map((v) => v.trim().replace(/"/g, ""));
      const row: Record<string, string> = {};
      headers.forEach((h, i) => {
        row[h] = values[i] || "";
      });
      return row;
    });

    return this.parseData({ headers, rows }, blueprint);
  }

  async parseTSVInput(
    tsvInput: string,
    blueprint?: BlueprintContext,
  ): Promise<ParseResult> {
    return this.parseCSVInput(tsvInput.replace(/\t/g, ","), blueprint);
  }

  private detectColumns(
    headers: string[],
    rows: Record<string, any>[],
    domain: Domain,
  ): UniversalDetectedColumn[] {
    return headers.map((header, index) => {
      const sampleValues = rows.slice(0, 10).map((row) => row[header]);
      const type = this.detectColumnType(header, sampleValues);
      const possibleMappings = this.options.autoMapColumns
        ? mapColumnToKPIs(header, domain)
        : [];

      return {
        name: header,
        index,
        type,
        confidence: possibleMappings.length > 0 ? 0.8 : 0.2,
        possibleMappings,
        domain,
      };
    });
  }

  private detectColumnType(
    header: string,
    sampleValues: (string | number | null | undefined)[],
  ): UniversalDetectedColumn["type"] {
    const headerLower = header.toLowerCase();

    if (/data|date|dt|hora|time/i.test(headerLower)) return "date";
    if (
      /valor|amount|value|quantia|credito|debit|custo|receita|despesa/i.test(
        headerLower,
      )
    )
      return "amount";
    if (/percent|taxa|rate|%/i.test(headerLower)) return "percentage";
    if (/quantidade|qtd|qty|count|numero|quantity/i.test(headerLower))
      return "quantity";
    if (/descricao|description|historico|nome|title/i.test(headerLower))
      return "description";
    if (/categoria|category|tipo|grupo/i.test(headerLower)) return "category";

    const nonNullValues = sampleValues.filter((v) => v != null && v !== "");
    if (nonNullValues.length === 0) return "unknown";

    const isNumeric = nonNullValues.every((v) => !isNaN(Number(v)));
    if (isNumeric) return "amount";

    return "unknown";
  }

  private mapColumns(
    columns: UniversalDetectedColumn[],
    domain: Domain,
  ): KPIMapping[] {
    const mappings: KPIMapping[] = [];

    for (const column of columns) {
      if (column.possibleMappings.length > 0) {
        mappings.push(...column.possibleMappings);
      }
    }

    return mappings;
  }
}

export function createUniversalParser(
  options?: UniversalParserOptions,
): UniversalParserService {
  return new UniversalParserService(options);
}
