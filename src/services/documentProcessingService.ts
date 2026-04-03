import { supabase } from "@/lib/supabase";
import { unstructuredClient, UnstructuredElement } from "./unstructuredService";
import {
  DataExtractionParser,
  DataExtractionOptions,
  ParsedDocumentData,
} from "./dataExtractionParser";
import {
  KPICalculationEngine,
  CalculationContext,
  getFormulasBySector,
} from "../domain/metrics/engine";
import { mapUserDataToKPIFields } from "../domain/metrics/engine/dataMapper";
import type { Sector, KPIResult } from "../domain/metrics/engine/types";
import {
  blueprintExtractionService,
  BlueprintExtractionResult,
  extractBlueprintFromDocument,
} from "./blueprintExtractionService";
import {
  dataVersioningService,
  createDataVersion,
  getVersionHistory,
} from "./dataVersioningService";

export type ExtractionStrategy = "auto" | "hi_res" | "fast";

export interface DocumentProcessingResult {
  documentId: string;
  organizationId: string;
  success: boolean;
  parsedData: ParsedDocumentData | null;
  blueprint: BlueprintExtractionResult | null;
  kpis: KPIResult[];
  versionChanges: number;
  validationPending: number;
  errors: string[];
  warnings: string[];
}

export interface ProcessDocumentOptions extends DataExtractionOptions {
  organizationId: string;
  documentId: string;
  storagePath?: string;
  fileUrl?: string;
  sector?: Sector;
  autoSave?: boolean;
  extractBlueprint?: boolean;
  autoVersion?: boolean;
}

export class DocumentProcessingService {
  private parser: DataExtractionParser;

  constructor(options?: DataExtractionOptions) {
    this.parser = new DataExtractionParser(options);
  }

  async processDocument(
    options: ProcessDocumentOptions,
  ): Promise<DocumentProcessingResult> {
    const {
      organizationId,
      documentId,
      storagePath,
      fileUrl,
      autoSave = true,
      extractBlueprint = true,
      autoVersion = true,
    } = options;

    const errors: string[] = [];
    const warnings: string[] = [];
    let parsedData: ParsedDocumentData | null = null;
    let blueprint: BlueprintExtractionResult | null = null;
    let kpis: KPIResult[] = [];
    let versionChanges = 0;
    let validationPending = 0;

    try {
      let elements: UnstructuredElement[];

      if (storagePath) {
        elements = await unstructuredClient.extractFromStorage(
          storagePath,
          organizationId,
        );
      } else if (fileUrl) {
        elements = await unstructuredClient.extractElements(fileUrl, {
          strategy: (options.strategy as "auto" | "hi_res" | "fast") || "auto",
        });
      } else {
        throw new Error("Either storagePath or fileUrl must be provided");
      }

      if (elements.length === 0) {
        errors.push("Nenhum elemento extraído do documento");
        return {
          documentId,
          organizationId,
          success: false,
          parsedData: null,
          blueprint: null,
          kpis: [],
          versionChanges: 0,
          validationPending: 0,
          errors,
          warnings,
        };
      }

      parsedData = await this.parser.parse(
        elements,
        documentId,
        organizationId,
      );

      if (options.sector) {
        parsedData.sector = options.sector;
      }

      warnings.push(...parsedData.warnings);
      errors.push(...parsedData.errors);

      if (extractBlueprint) {
        try {
          blueprint = await extractBlueprintFromDocument(
            elements.map((el) => ({
              type: el.type,
              text: el.text,
              metadata: el.metadata,
            })),
            organizationId,
            documentId,
          );
          warnings.push(...blueprint.warnings);

          if (autoSave && blueprint) {
            await blueprintExtractionService.saveExtractedBlueprint(blueprint);
          }
        } catch (bpError) {
          const msg =
            bpError instanceof Error
              ? bpError.message
              : "Erro na extração de blueprint";
          warnings.push(`Blueprint: ${msg}`);
        }
      }

      if (parsedData.rawData.length > 0) {
        kpis = await this.calculateKPIs(parsedData, options.sector);
      }

      if (autoSave && parsedData) {
        await this.saveParsedData(parsedData);

        if (kpis.length > 0) {
          const savedKpiCount = await this.saveKPIsWithVersioning(
            organizationId,
            documentId,
            kpis,
            autoVersion,
          );
          versionChanges = savedKpiCount;
        }
      }

      validationPending = await dataVersioningService
        .getPendingValidations(organizationId)
        .then((q) => q.length);

      return {
        documentId,
        organizationId,
        success: errors.length === 0,
        parsedData,
        blueprint,
        kpis,
        versionChanges,
        validationPending,
        errors,
        warnings,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      errors.push(`Falha no processamento: ${errorMessage}`);

      return {
        documentId,
        organizationId,
        success: false,
        parsedData,
        blueprint: null,
        kpis: [],
        versionChanges: 0,
        validationPending: 0,
        errors,
        warnings,
      };
    }
  }

  async calculateKPIs(
    parsedData: ParsedDocumentData,
    forcedSector?: Sector,
  ): Promise<KPIResult[]> {
    const sector = forcedSector || parsedData.sector || "technology";

    if (!sector) {
      return [];
    }

    const numericData: Record<string, number | number[]> = {};

    for (const row of parsedData.rawData) {
      for (const [key, value] of Object.entries(row)) {
        if (typeof value === "number" && !isNaN(value)) {
          if (!numericData[key]) {
            numericData[key] = [];
          }
          if (Array.isArray(numericData[key])) {
            (numericData[key] as number[]).push(value);
          }
        }
      }
    }

    const context: CalculationContext = {
      organizationId: parsedData.organizationId,
      sector,
      businessModel: parsedData.businessModel || "subscription",
      period: "monthly",
    };

    const engine = new KPICalculationEngine(context, {}, []);

    const formulas = getFormulasBySector(sector);
    const kpiCodes = formulas.slice(0, 15).map((f) => f.code);

    const results = engine.calculateMultiple(kpiCodes, numericData);

    return results.kpis;
  }

  private async saveParsedData(data: ParsedDocumentData): Promise<void> {
    const { error } = await supabase.from("document_extractions").insert({
      document_id: data.documentId,
      organization_id: data.organizationId,
      sector: data.sector,
      business_model: data.businessModel,
      tables: JSON.stringify(data.tables),
      sections: JSON.stringify(data.sections),
      detected_fields: JSON.stringify(data.detectedFields),
      raw_data: JSON.stringify(data.rawData),
      metadata: JSON.stringify(data.metadata),
      extracted_at: data.extractedAt.toISOString(),
    });

    if (error) {
      console.error("Failed to save parsed data:", error);
      throw error;
    }
  }

  private async saveKPIs(
    organizationId: string,
    documentId: string,
    kpis: KPIResult[],
  ): Promise<void> {
    const kpiRecords = kpis
      .filter((k) => k.calculationStatus === "success" && k.value !== null)
      .map((k) => ({
        organization_id: organizationId,
        kpi_code: k.code,
        value: k.value,
        unit: k.unit,
        calculation_status: k.calculationStatus,
        confidence: k.confidence,
        document_id: documentId,
        reference_period: new Date().toISOString().slice(0, 7),
        period_start: new Date().toISOString(),
        period_end: new Date().toISOString(),
      }));

    if (kpiRecords.length === 0) return;

    const { error } = await supabase.from("user_metrics").insert(kpiRecords);

    if (error) {
      console.error("Failed to save KPIs:", error);
    }
  }

  private async saveKPIsWithVersioning(
    organizationId: string,
    documentId: string,
    kpis: KPIResult[],
    autoVersion: boolean = true,
  ): Promise<number> {
    const validKpis = kpis.filter(
      (k) => k.calculationStatus === "success" && k.value !== null,
    );
    if (validKpis.length === 0) return 0;

    const { data: existingMetrics } = await supabase
      .from("user_metrics")
      .select("id, kpi_code, value")
      .eq("organization_id", organizationId)
      .in(
        "kpi_code",
        validKpis.map((k) => k.code),
      );

    let versionCount = 0;

    for (const kpi of validKpis) {
      const existing = existingMetrics?.find((m) => m.kpi_code === kpi.code);
      const oldValue = existing?.value;
      const newValue = kpi.value;

      if (autoVersion && oldValue !== undefined && oldValue !== newValue) {
        try {
          await createDataVersion(
            organizationId,
            "user_metrics",
            existing?.id || "",
            "value",
            oldValue,
            newValue,
            {
              changeType: "extraction",
              sourceDocumentId: documentId,
              confidenceScore:
                kpi.confidence === "high"
                  ? 0.9
                  : kpi.confidence === "medium"
                    ? 0.6
                    : kpi.confidence === "low"
                      ? 0.3
                      : 0.5,
              changeReason: `KPI ${kpi.code} atualizado via extração de documento`,
            },
          );
          versionCount++;
        } catch (e) {
          console.warn(`Failed to create version for ${kpi.code}:`, e);
        }
      }
    }

    const kpiRecords = validKpis.map((k) => ({
      organization_id: organizationId,
      kpi_code: k.code,
      value: k.value,
      unit: k.unit,
      calculation_status: k.calculationStatus,
      confidence: k.confidence,
      document_id: documentId,
      reference_period: new Date().toISOString().slice(0, 7),
      period_start: new Date().toISOString(),
      period_end: new Date().toISOString(),
    }));

    if (kpiRecords.length > 0) {
      await supabase.from("user_metrics").upsert(kpiRecords, {
        onConflict: "organization_id,kpi_code,reference_period",
      });
    }

    return versionCount;
  }

  async reprocessWithSector(
    documentId: string,
    sector: Sector,
  ): Promise<DocumentProcessingResult> {
    const { data: extraction, error: fetchError } = await supabase
      .from("document_extractions")
      .select("*")
      .eq("document_id", documentId)
      .single();

    if (fetchError || !extraction) {
      return {
        documentId,
        organizationId: "",
        success: false,
        parsedData: null,
        blueprint: null,
        kpis: [],
        versionChanges: 0,
        validationPending: 0,
        errors: ["Documento não encontrado"],
        warnings: [],
      };
    }

    const parsedData: ParsedDocumentData = {
      documentId: extraction.document_id,
      organizationId: extraction.organization_id,
      sector,
      businessModel: extraction.business_model,
      extractedAt: new Date(extraction.extracted_at),
      tables: JSON.parse(extraction.tables || "[]"),
      sections: JSON.parse(extraction.sections || "[]"),
      detectedFields: JSON.parse(extraction.detected_fields || "[]"),
      rawData: JSON.parse(extraction.raw_data || "[]"),
      metadata: JSON.parse(extraction.metadata || "{}"),
      warnings: [],
      errors: [],
    };

    const kpis = await this.calculateKPIs(parsedData, sector);

    if (kpis.length > 0) {
      await this.saveKPIs(extraction.organization_id, documentId, kpis);
    }

    return {
      documentId,
      organizationId: extraction.organization_id,
      success: true,
      parsedData,
      blueprint: null,
      kpis,
      versionChanges: 0,
      validationPending: 0,
      errors: [],
      warnings: [],
    };
  }
}

export const documentProcessingService = new DocumentProcessingService();

export const processDocument = (
  options: ProcessDocumentOptions,
): Promise<DocumentProcessingResult> => {
  return documentProcessingService.processDocument(options);
};

export const reprocessDocumentWithSector = (
  documentId: string,
  sector: Sector,
): Promise<DocumentProcessingResult> => {
  return documentProcessingService.reprocessWithSector(documentId, sector);
};
