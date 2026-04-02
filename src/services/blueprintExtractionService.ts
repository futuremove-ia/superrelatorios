import { supabase } from "@/lib/supabase";
import { mapUserDataToKPIFields } from "../domain/metrics/engine/dataMapper";
import type { Sector, BusinessModel } from "../domain/metrics/engine/types";

export type CompanyStage =
  | "pre_revenue"
  | "early_stage"
  | "growth"
  | "scale_up"
  | "mature"
  | "turnaround";

export type ChangeType = "extraction" | "manual" | "ai_correction" | "import";
export type ValidationStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "auto_approved";

export interface ExtractedField<T = unknown> {
  value: T;
  confidence: number;
  source: string;
  sourceElement?: string;
  sourcePage?: number;
  method: "explicit" | "inferred" | "calculated" | "ai_extracted";
}

export interface BlueprintExtractionResult {
  organizationId: string;
  documentId: string;
  extractedAt: Date;
  fields: BlueprintFields;
  confidence: number;
  warnings: string[];
  errors: string[];
  metadata: {
    extractionTimeMs: number;
    fieldsScanned: number;
    fieldsExtracted: number;
    sectorsDetected: string[];
  };
}

export interface BlueprintFields {
  legalName?: ExtractedField<string>;
  tradeName?: ExtractedField<string>;
  foundingYear?: ExtractedField<number>;
  businessModel?: ExtractedField<BusinessModel>;
  companyStage?: ExtractedField<CompanyStage>;
  industrySector?: ExtractedField<Sector>;
  employeeCountRange?: ExtractedField<string>;
  annualRevenueRange?: ExtractedField<string>;
  valueProposition?: ExtractedField<string>;
  targetMarket?: ExtractedField<string>;
  geographicCoverage?: ExtractedField<string>;
  marketPosition?: ExtractedField<string>;
  fundingStage?: ExtractedField<string>;
  pricingModel?: ExtractedField<string>;
  knownChallenges?: ExtractedField<string[]>;
  coreValues?: ExtractedField<string[]>;
}

export interface DataVersion {
  id: string;
  organizationId: string;
  fieldName: string;
  tableName: string;
  recordId: string;
  oldValue: unknown;
  newValue: unknown;
  changeType: ChangeType;
  sourceDocumentId?: string;
  verifiedBy?: string;
  verifiedAt?: Date;
  validationStatus: ValidationStatus;
  confidenceScore: number;
  changeReason?: string;
  createdAt: Date;
}

export interface ValidationRequest {
  fieldName: string;
  tableName: string;
  recordId: string;
  oldValue: unknown;
  newValue: unknown;
  changePercent?: number;
  confidenceScore: number;
  requiresUserConfirmation: boolean;
  reason: string;
  suggestedAction?: "approve" | "reject" | "review";
}

export interface ValidationResult {
  approved: boolean;
  validatedBy?: string;
  validatedAt?: Date;
  notes?: string;
}

const BUSINESS_MODEL_PATTERNS: Record<string, BusinessModel> = {
  saas: "subscription",
  "software as a service": "subscription",
  assinatura: "subscription",
  subscription: "subscription",
  transacional: "transaction",
  transaction: "transaction",
  "por transação": "transaction",
  projeto: "transaction",
  project: "transaction",
  "por projeto": "transaction",
  retainer: "transaction",
  mensal: "transaction",
  freemium: "transaction",
  híbrido: "transaction",
  hybrid: "transaction",
  b2b: "b2b",
  b2c: "b2c",
  "business to business": "b2b",
  "business to consumer": "b2c",
  marketplace: "marketplace",
  produto: "b2b",
  product: "b2b",
  serviços: "b2b",
  services: "b2b",
};

const COMPANY_STAGE_PATTERNS: Record<string, CompanyStage> = {
  "pré-receita": "pre_revenue",
  "pre-revenue": "pre_revenue",
  "pré-revenue": "pre_revenue",
  "early stage": "early_stage",
  início: "early_stage",
  crescimento: "growth",
  growth: "growth",
  escala: "scale_up",
  "scale up": "scale_up",
  "scale-up": "scale_up",
  matura: "mature",
  mature: "mature",
  turnaround: "turnaround",
  recuperação: "turnaround",
};

const SECTOR_PATTERNS: Record<string, Sector> = {
  tecnologia: "technology",
  technology: "technology",
  tech: "technology",
  varejo: "retail",
  retail: "retail",
  comércio: "retail",
  saúde: "healthcare",
  health: "healthcare",
  hospital: "healthcare",
  clínica: "healthcare",
  manufatura: "manufacturing",
  manufacturing: "manufacturing",
  indústria: "manufacturing",
  serviços: "services",
  services: "services",
  financeiro: "finance",
  finance: "finance",
  banco: "finance",
  alimentação: "food",
  food: "food",
  restaurante: "food",
  logística: "logistics",
  logistics: "logistics",
  construção: "construction",
  construction: "construction",
  educação: "education",
  education: "education",
  imóveis: "real_estate",
  "real estate": "real_estate",
  imobiliário: "real_estate",
  mídia: "media",
  media: "media",
  streaming: "media",
};

const REVENUE_RANGE_PATTERNS: Record<string, string> = {
  "ate 100k": "0-100k",
  "ate 100 mil": "0-100k",
  "ate r$ 100.000": "0-100k",
  "0 a 100k": "0-100k",
  "ate 250k": "100k-250k",
  "ate 250 mil": "100k-250k",
  "ate r$ 250.000": "100k-250k",
  "100 a 250k": "100k-250k",
  "100k a 250k": "100k-250k",
  "ate 500k": "250k-500k",
  "ate 500 mil": "250k-500k",
  "ate r$ 500.000": "250k-500k",
  "250 a 500k": "250k-500k",
  "250k a 500k": "250k-500k",
  "ate 1m": "500k-1m",
  "ate 1mi": "500k-1m",
  "ate 1 milhão": "500k-1m",
  "ate r$ 1.000.000": "500k-1m",
  "500k a 1m": "500k-1m",
  "500 a 1m": "500k-1m",
  "500k a 1mi": "500k-1m",
  "ate 2.5m": "1m-2.5m",
  "ate 2.5mi": "1m-2.5m",
  "ate 2,5m": "1m-2.5m",
  "ate 2,5mi": "1m-2.5m",
  "ate 2,5 milhões": "1m-2.5m",
  "1 a 2.5m": "1m-2.5m",
  "1m a 2.5m": "1m-2.5m",
  "1 a 2,5m": "1m-2.5m",
  "1m a 2,5m": "1m-2.5m",
  "ate 5m": "2.5m-5m",
  "ate 5mi": "2.5m-5m",
  "ate 5 milhões": "2.5m-5m",
  "ate r$ 5.000.000": "2.5m-5m",
  "2.5 a 5m": "2.5m-5m",
  "2.5m a 5m": "2.5m-5m",
  "2,5 a 5m": "2.5m-5m",
  "2,5m a 5m": "2.5m-5m",
  "ate 10m": "5m-10m",
  "ate 10mi": "5m-10m",
  "ate 10 milhões": "5m-10m",
  "ate r$ 10.000.000": "5m-10m",
  "5 a 10m": "5m-10m",
  "5m a 10m": "5m-10m",
  "5m a 10mi": "5m-10m",
  "ate 25m": "10m-25m",
  "ate 25mi": "10m-25m",
  "ate 25 milhões": "10m-25m",
  "ate r$ 25.000.000": "10m-25m",
  "10 a 25m": "10m-25m",
  "10m a 25m": "10m-25m",
  "10m a 25mi": "10m-25m",
  "ate 50m": "25m-50m",
  "ate 50mi": "25m-50m",
  "ate 50 milhões": "25m-50m",
  "ate r$ 50.000.000": "25m-50m",
  "25 a 50m": "25m-50m",
  "25m a 50m": "25m-50m",
  "25m a 50mi": "25m-50m",
  "mais de 50m": "acima_50m",
  "mais de 50mi": "acima_50m",
  "mais de 50 milhões": "acima_50m",
  "acima de 50m": "acima_50m",
  "acima de 50mi": "acima_50m",
  "acima de 50 milhões": "acima_50m",
  "above 50m": "acima_50m",
};

const EMPLOYEE_COUNT_PATTERNS: Record<string, string> = {
  "1": "1-10",
  "ate 10": "1-10",
  "ate 10 funcionarios": "1-10",
  "ate 10 colaboradores": "1-10",
  "ate 10 empregados": "1-10",
  "até 10": "1-10",
  "até 10 funcionarios": "1-10",
  "até 10 colaboradores": "1-10",
  "até 10 empregados": "1-10",
  "ate 50": "11-50",
  "ate 50 funcionarios": "11-50",
  "ate 50 colaboradores": "11-50",
  "até 50": "11-50",
  "até 50 funcionarios": "11-50",
  "até 50 colaboradores": "11-50",
  "até 50 empregados": "11-50",
  "ate 200": "51-200",
  "ate 200 funcionarios": "51-200",
  "ate 200 colaboradores": "51-200",
  "até 200": "51-200",
  "até 200 funcionarios": "51-200",
  "até 200 colaboradores": "51-200",
  "até 200 empregados": "51-200",
  "ate 500": "201-500",
  "ate 500 funcionarios": "201-500",
  "ate 500 colaboradores": "201-500",
  "até 500": "201-500",
  "até 500 funcionarios": "201-500",
  "até 500 colaboradores": "201-500",
  "até 500 empregados": "201-500",
  "mais de 100": "51-100",
  "mais de 100 funcionarios": "51-100",
  "mais de 100 colaboradores": "51-100",
  "mais de 100 empregados": "51-100",
  "mais de 500": "500+",
  "mais de 500 funcionarios": "500+",
  "mais de 500 colaboradores": "500+",
  "mais de 500 empregados": "500+",
  "acima de 100": "51-100",
  "acima de 500": "500+",
};

const GEOGRAPHIC_PATTERNS: Record<string, string> = {
  local: "local",
  cidade: "local",
  regional: "regional",
  estado: "regional",
  nacional: "national",
  national: "national",
  brasil: "national",
  latam: "latam",
  "américa latina": "latam",
  "latin america": "latam",
  global: "global",
  internacional: "global",
  worldwide: "global",
};

const extractByPattern = (
  text: string,
  patterns: Record<string, unknown>,
): { value: unknown; confidence: number } | null => {
  const lowerText = text.toLowerCase();

  for (const [pattern, value] of Object.entries(patterns)) {
    if (lowerText.includes(pattern.toLowerCase())) {
      return { value, confidence: 0.9 };
    }
  }

  return null;
};

const extractYear = (
  text: string,
): { value: number; confidence: number } | null => {
  const yearPatterns = [
    /(?:fundada|fundado|criada|criado|estabelecida|desde)\s+(?:em\s+)?(\d{4})/i,
    /(\d{4})/g,
    /(?:desde|since)\s+(\d{4})/i,
  ];

  for (const pattern of yearPatterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      const year = parseInt(match[1], 10);
      if (year >= 1900 && year <= new Date().getFullYear()) {
        return { value: year, confidence: 0.85 };
      }
    }
  }

  return null;
};

const extractRevenue = (
  text: string,
): { value: string; confidence: number } | null => {
  const revenuePatterns = [
    /(?:receita|faturamento|annual revenue|revenue)\s*(?:de\s*)?(?:r?\$)?\s*(\d+(?:\.\d+)?)\s*(?:milhoes?|mm?|m\b|mil|m)/gi,
    /(?:receita|faturamento|annual revenue|revenue)\s*(?:de\s*)?(?:r?\$)?\s*(\d+(?:\.\d+)?)/gi,
  ];

  for (const pattern of revenuePatterns) {
    const matches = [...text.matchAll(pattern)];
    if (matches.length > 0) {
      const lastMatch = matches[matches.length - 1];
      const value = parseFloat(lastMatch[1].replace(/\./g, ""));

      let range: string;
      if (value <= 500) range = "ate_500k";
      else if (value <= 2000) range = "500k_2m";
      else if (value <= 10000) range = "2m_10m";
      else if (value <= 50000) range = "10m_50m";
      else range = "acima_50m";

      return { value: range, confidence: 0.8 };
    }
  }

  const rangeResult = extractByPattern(text, REVENUE_RANGE_PATTERNS);
  return rangeResult as { value: string; confidence: number } | null;
};

const extractEmployeeCount = (
  text: string,
): { value: string; confidence: number } | null => {
  const employeePatterns = [
    /(?:funcionários|employees|colaboradores)\s*(?:de\s*)?(\d+)\s*(?:a|até|-)\s*(\d+)?/gi,
    /(?:funcionários|employees|colaboradores)\s*(?:entre\s*)?(\d+)\s*e\s*(\d+)/gi,
    /(\d+)\s*(?:funcionários|employees|colaboradores)/gi,
  ];

  for (const pattern of employeePatterns) {
    const match = text.match(pattern);
    if (match) {
      const count = parseInt(match[1] || match[2], 10);
      let range: string;
      if (count <= 10) range = "1-10";
      else if (count <= 50) range = "11-50";
      else if (count <= 200) range = "51-200";
      else if (count <= 500) range = "201-500";
      else range = "500+";
      return { value: range, confidence: 0.75 };
    }
  }

  const rangeResult = extractByPattern(text, EMPLOYEE_COUNT_PATTERNS);
  return rangeResult as { value: string; confidence: number } | null;
};

const extractExplicitValue = (
  text: string,
  fieldName: string,
): { value: string; confidence: number } | null => {
  const patterns: Record<string, RegExp> = {
    legalName:
      /(?:razão social|legal name|denominação social)\s*[:]?\s*([A-Za-zÀ-ÖØ-öø-ÿ\s]+?)(?:\n|,|$)/i,
    tradeName:
      /(?:nome fantasia|trade name|fantasia)\s*[:]?\s*([A-Za-zÀ-ÖØ-öø-ÿ\s]+?)(?:\n|,|$)/i,
    valueProposition:
      /(?:proposta de valor|value proposition)\s*[:]?\s*([^\n]+)/i,
    targetMarket:
      /(?:mercado-alvo|target market|mercado objetivo)\s*[:]?\s*([^\n]+)/i,
  };

  const pattern = patterns[fieldName];
  if (!pattern) return null;

  const match = text.match(pattern);
  if (match && match[1]) {
    return { value: match[1].trim(), confidence: 0.95 };
  }

  return null;
};

export class BlueprintExtractionService {
  private static instance: BlueprintExtractionService;

  static getInstance(): BlueprintExtractionService {
    if (!BlueprintExtractionService.instance) {
      BlueprintExtractionService.instance = new BlueprintExtractionService();
    }
    return BlueprintExtractionService.instance;
  }

  async extractFromDocument(
    elements: Array<{
      type: string;
      text: string;
      metadata?: Record<string, unknown>;
    }>,
    organizationId: string,
    documentId: string,
  ): Promise<BlueprintExtractionResult> {
    const startTime = Date.now();
    const warnings: string[] = [];
    const errors: string[] = [];
    const sectorsDetected: string[] = [];

    const allText = elements
      .filter((el) => el.text)
      .map((el) => el.text)
      .join("\n\n");

    const fields: BlueprintFields = {};
    let totalConfidence = 0;
    let fieldsExtracted = 0;

    const tradeNameResult = extractExplicitValue(allText, "tradeName");
    if (tradeNameResult) {
      fields.tradeName = {
        ...tradeNameResult,
        source: "explicit_text",
        method: "explicit",
      };
      totalConfidence += tradeNameResult.confidence;
      fieldsExtracted++;
    }

    const legalNameResult = extractExplicitValue(allText, "legalName");
    if (legalNameResult) {
      fields.legalName = {
        ...legalNameResult,
        source: "explicit_text",
        method: "explicit",
      };
      totalConfidence += legalNameResult.confidence;
      fieldsExtracted++;
    }

    const foundingYearResult = extractYear(allText);
    if (foundingYearResult) {
      fields.foundingYear = {
        ...foundingYearResult,
        source: "year_pattern",
        method: "inferred",
      };
      totalConfidence += foundingYearResult.confidence;
      fieldsExtracted++;
    }

    const businessModelResult = extractByPattern(
      allText,
      BUSINESS_MODEL_PATTERNS,
    );
    if (businessModelResult) {
      fields.businessModel = {
        ...(businessModelResult as {
          value: BusinessModel;
          confidence: number;
        }),
        source: "text_pattern",
        method: "inferred",
      };
      totalConfidence += (businessModelResult as { confidence: number })
        .confidence;
      fieldsExtracted++;
    }

    const companyStageResult = extractByPattern(
      allText,
      COMPANY_STAGE_PATTERNS,
    );
    if (companyStageResult) {
      fields.companyStage = {
        ...(companyStageResult as { value: CompanyStage; confidence: number }),
        source: "text_pattern",
        method: "inferred",
      };
      totalConfidence += (companyStageResult as { confidence: number })
        .confidence;
      fieldsExtracted++;
    }

    const sectorResult = extractByPattern(allText, SECTOR_PATTERNS);
    if (sectorResult) {
      fields.industrySector = {
        ...(sectorResult as { value: Sector; confidence: number }),
        source: "text_pattern",
        method: "inferred",
      };
      sectorsDetected.push((sectorResult as { value: string }).value as string);
      totalConfidence += (sectorResult as { confidence: number }).confidence;
      fieldsExtracted++;
    }

    const revenueResult = extractRevenue(allText);
    if (revenueResult) {
      fields.annualRevenueRange = {
        ...revenueResult,
        source: "financial_pattern",
        method: "calculated",
      };
      totalConfidence += revenueResult.confidence;
      fieldsExtracted++;
    }

    const employeeResult = extractEmployeeCount(allText);
    if (employeeResult) {
      fields.employeeCountRange = {
        ...employeeResult,
        source: "headcount_pattern",
        method: "inferred",
      };
      totalConfidence += employeeResult.confidence;
      fieldsExtracted++;
    }

    const geographicResult = extractByPattern(allText, GEOGRAPHIC_PATTERNS);
    if (geographicResult) {
      fields.geographicCoverage = {
        ...(geographicResult as { value: string; confidence: number }),
        source: "text_pattern",
        method: "inferred",
      };
      totalConfidence += (geographicResult as { confidence: number })
        .confidence;
      fieldsExtracted++;
    }

    const valuePropResult = extractExplicitValue(allText, "valueProposition");
    if (valuePropResult) {
      fields.valueProposition = {
        ...valuePropResult,
        source: "explicit_text",
        method: "explicit",
      };
      totalConfidence += valuePropResult.confidence;
      fieldsExtracted++;
    }

    const targetMarketResult = extractExplicitValue(allText, "targetMarket");
    if (targetMarketResult) {
      fields.targetMarket = {
        ...targetMarketResult,
        source: "explicit_text",
        method: "explicit",
      };
      totalConfidence += targetMarketResult.confidence;
      fieldsExtracted++;
    }

    if (fieldsExtracted === 0) {
      warnings.push(
        "Nenhum campo do blueprint foi possível extrair automaticamente",
      );
    }

    const confidence =
      fieldsExtracted > 0 ? totalConfidence / fieldsExtracted : 0;

    return {
      organizationId,
      documentId,
      extractedAt: new Date(),
      fields,
      confidence,
      warnings,
      errors,
      metadata: {
        extractionTimeMs: Date.now() - startTime,
        fieldsScanned: Object.keys(fields).length,
        fieldsExtracted,
        sectorsDetected,
      },
    };
  }

  async saveExtractedBlueprint(
    result: BlueprintExtractionResult,
  ): Promise<{ success: boolean; blueprintId?: string; error?: string }> {
    try {
      const { data, error } = await supabase
        .from("company_blueprints")
        .upsert(
          {
            organization_id: result.organizationId,
            document_id: result.documentId,
            trade_name: result.fields.tradeName?.value,
            legal_name: result.fields.legalName?.value,
            founding_year: result.fields.foundingYear?.value,
            business_model: result.fields.businessModel?.value,
            company_stage: result.fields.companyStage?.value,
            industry_sector: result.fields.industrySector?.value,
            employee_count_range: result.fields.employeeCountRange?.value,
            annual_revenue_range: result.fields.annualRevenueRange?.value,
            value_proposition: result.fields.valueProposition?.value,
            target_market: result.fields.targetMarket?.value,
            geographic_coverage: result.fields.geographicCoverage?.value,
            confidence_score: result.confidence,
            extraction_metadata: result.metadata,
            last_extracted_at: result.extractedAt.toISOString(),
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: "organization_id",
          },
        )
        .select("id")
        .single();

      if (error) throw error;

      return { success: true, blueprintId: data?.id };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      return { success: false, error: message };
    }
  }
}

export const blueprintExtractionService =
  BlueprintExtractionService.getInstance();

export const extractBlueprintFromDocument = async (
  elements: Array<{
    type: string;
    text: string;
    metadata?: Record<string, unknown>;
  }>,
  organizationId: string,
  documentId: string,
): Promise<BlueprintExtractionResult> => {
  return blueprintExtractionService.extractFromDocument(
    elements,
    organizationId,
    documentId,
  );
};
