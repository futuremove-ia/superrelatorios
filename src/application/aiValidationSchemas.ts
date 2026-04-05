import { z } from "zod";

export const BusinessModelEnum = z.enum([
  "b2b",
  "b2c",
  "b2b2c",
  "marketplace",
  "saas",
  "services",
  "product",
  "hybrid",
]);
export type BusinessModel = z.infer<typeof BusinessModelEnum>;

export const CompanyStageEnum = z.enum([
  "pre_revenue",
  "early_stage",
  "growth",
  "scale_up",
  "mature",
  "turnaround",
]);
export type CompanyStage = z.infer<typeof CompanyStageEnum>;

export const IndustrySectorEnum = z.enum([
  "technology",
  "retail",
  "healthcare",
  "manufacturing",
  "services",
  "finance",
  "food",
  "logistics",
  "construction",
  "education",
  "real_estate",
  "media",
]);
export type IndustrySector = z.infer<typeof IndustrySectorEnum>;

export const EmployeeCountRangeEnum = z.enum([
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
]);
export type EmployeeCountRange = z.infer<typeof EmployeeCountRangeEnum>;

export const RevenueRangeEnum = z.enum([
  "ate_500k",
  "500k_2m",
  "2m_10m",
  "10m_50m",
  "acima_50m",
]);
export type RevenueRange = z.infer<typeof RevenueRangeEnum>;

export const GeographicCoverageEnum = z.enum([
  "local",
  "regional",
  "national",
  "latam",
  "global",
]);
export type GeographicCoverage = z.infer<typeof GeographicCoverageEnum>;

export const MarketPositionEnum = z.enum([
  "leader",
  "challenger",
  "follower",
  "niche",
]);
export type MarketPosition = z.infer<typeof MarketPositionEnum>;

export const FundingStageEnum = z.enum([
  "bootstrapped",
  "pre_seed",
  "seed",
  "series_a",
  "series_b",
  "series_c_plus",
  "profitable",
]);
export type FundingStage = z.infer<typeof FundingStageEnum>;

export const PricingModelEnum = z.enum([
  "subscription",
  "transactional",
  "project",
  "retainer",
  "freemium",
  "hybrid",
]);
export type PricingModel = z.infer<typeof PricingModelEnum>;

export const BlueprintSchema = z.object({
  legal_name: z.string().nullable(),
  trade_name: z.string().nullable(),
  founding_year: z.number().nullable(),
  business_model: BusinessModelEnum.nullable(),
  company_stage: CompanyStageEnum.nullable(),
  industry_sector: IndustrySectorEnum.nullable(),
  employee_count_range: EmployeeCountRangeEnum.nullable(),
  annual_revenue_range: RevenueRangeEnum.nullable(),
  value_proposition: z.string().nullable(),
  target_market: z.string().nullable(),
  geographic_coverage: GeographicCoverageEnum.nullable(),
  market_position: MarketPositionEnum.nullable(),
  funding_stage: FundingStageEnum.nullable(),
  pricing_model: PricingModelEnum.nullable(),
  known_challenges: z.array(z.string()).nullable(),
  core_values: z.array(z.string()).nullable(),
  confidence_per_field: z.record(z.number()).nullable(),
  extraction_notes: z.string().nullable(),
});
export type Blueprint = z.infer<typeof BlueprintSchema>;

export const KPIExtractedSchema = z.object({
  code: z.string(),
  value: z.number(),
  unit: z.string(),
  period: z.string().optional(),
  confidence: z.number().min(0).max(1),
  source_text: z.string().optional(),
  source_type: z.enum(["table", "text", "calculated"]),
});

export const KPIExtractionResponseSchema = z.object({
  extracted: z.array(KPIExtractedSchema),
  period_detected: z.string().optional(),
  period_start: z.string().optional(),
  period_end: z.string().optional(),
  unrecognized: z.array(z.string()),
  data_quality_notes: z.string(),
});
export type KPIExtractionResponse = z.infer<typeof KPIExtractionResponseSchema>;

export const DiagnosticSchema = z.object({
  title: z.string().max(60),
  description: z.string(),
  causes: z.array(z.string()),
  implications: z.array(z.string()),
});

export const PriorityScoreSchema = z.object({
  impact: z.number().min(1).max(10),
  urgency: z.number().min(1).max(10),
  effort: z.number().min(1).max(10),
  confidence: z.number().min(1).max(10),
  calculatedValue: z.number(),
});

export const SuggestedPrioritySchema = z.object({
  title: z.string(),
  explanation: z.string(),
  level: z.enum(["low", "medium", "high", "critical"]),
  score: PriorityScoreSchema,
  first_step: z.string(),
});

export const DiagnosticResponseSchema = z.object({
  diagnostic: DiagnosticSchema,
  suggestedPriority: SuggestedPrioritySchema,
});
export type DiagnosticResponse = z.infer<typeof DiagnosticResponseSchema>;

export const KPIValueSchema = z.object({
  label: z.string(),
  value: z.string(),
  status: z.enum(["good", "warning", "critical", "unknown"]),
  trend: z.enum(["up", "down", "stable"]).optional(),
  delta: z.string().optional(),
});

export const BlockSchema = z.object({
  type: z.string(),
  title: z.string(),
  description: z.string().optional(),
  data: z.unknown(),
  settings: z.record(z.unknown()).optional(),
});

export const AnalysisResponseSchema = z.object({
  summary: z.string(),
  blocks: z.array(BlockSchema),
});
export type AnalysisResponse = z.infer<typeof AnalysisResponseSchema>;

export const RiskImpactSchema = z.object({
  description: z.string(),
  value: z.number(),
  type: z.enum(["percentage", "currency", "days"]),
  direction: z.enum(["increase", "decrease"]),
  category: z.enum(["cost", "revenue", "time", "risk"]),
});

export const DiagnosisDetailSchema = z.object({
  technical_term: z.string(),
  cause: z.string(),
  effect: z.string(),
  why: z.string().optional(),
});

export const RadarItemResponseSchema = z.object({
  type: z.enum(["risk", "opportunity"]),
  title: z.string().max(70),
  severity: z.enum(["low", "medium", "high", "critical"]),
  domain: z.string(),
  diagnosis_code: z.string(),
  diagnosis: DiagnosisDetailSchema,
  impact: RiskImpactSchema,
  timeframe_code: z.enum([
    "IMMEDIATE",
    "SHORT_TERM",
    "MEDIUM_TERM",
    "LONG_TERM",
  ]),
  complexity_code: z.enum(["LOW", "MEDIUM", "HIGH"]),
  suggested_lever_codes: z.array(z.string()),
  ai_confidence_score: z.number().min(0).max(1),
  priority_score: z.number().min(0).max(10),
});
export type RadarItemResponse = z.infer<typeof RadarItemResponseSchema>;

export const SWOTSimpleItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  evidencia: z.string().optional(),
  impacto: z.string().optional(),
  potencial: z.string().optional(),
  probabilidade: z.string().optional(),
});

export const SWOTResponseSchema = z.object({
  forcas: z.array(SWOTSimpleItemSchema),
  fraquezas: z.array(SWOTSimpleItemSchema),
  oportunidades: z.array(SWOTSimpleItemSchema),
  ameacas: z.array(SWOTSimpleItemSchema),
  balance_score: z.number(),
  acao_prioritaria: z.object({
    title: z.string(),
    descricao: z.string(),
    prazo: z.string(),
    kpi_impactado: z.string(),
  }),
  narrative: z.string(),
});
export type SWOTResponse = z.infer<typeof SWOTResponseSchema>;

export const OpportunityResponseSchema = z.object({
  opportunities: z.array(
    z.object({
      code: z.string(),
      title: z.string(),
      description: z.string(),
      evidence: z.string(),
      potential_impact: z.string(),
      suggested_levers: z.array(z.string()),
      timeframe: z.enum(["short_term", "medium_term", "long_term"]),
      confidence: z.number().min(0).max(1),
      domain: z.string(),
    }),
  ),
  summary: z.string(),
});
export type OpportunityResponse = z.infer<typeof OpportunityResponseSchema>;

export const ForecastResponseSchema = z.object({
  forecast_type: z.string(),
  horizon_days: z.number(),
  total_projected: z.number(),
  avg_daily: z.number(),
  min_projected: z.number(),
  max_projected: z.number(),
  daily_values: z.array(z.number()),
  confidence_score: z.number(),
  confidence_level: z.enum(["baixa", "media", "alta"]),
  forecast_method: z.string(),
  key_assumptions: z.array(z.string()),
  risk_factors: z.array(z.string()),
  alert_triggered: z.boolean(),
  alert_message: z.string().nullable(),
  narrative: z.string(),
});
export type ForecastResponse = z.infer<typeof ForecastResponseSchema>;

export const KnowledgeQueryResponseSchema = z.object({
  answer: z.string(),
  key_insight: z.string(),
  sources: z.array(
    z.object({
      period_key: z.string(),
      kpi_code: z.string(),
      value: z.number(),
      context: z.string(),
    }),
  ),
  trend: z.enum(["improving", "declining", "stable", "insufficient_data"]),
  recommendation: z.string(),
  data_sufficiency: z.enum(["sufficient", "partial", "insufficient"]),
});
export type KnowledgeQueryResponse = z.infer<
  typeof KnowledgeQueryResponseSchema
>;

export function validateGeminiResponse<T>(
  schema: z.ZodSchema<T>,
  response: string,
  fallback: T,
): { data: T; valid: boolean; error?: string } {
  try {
    const extracted = extractJSONFromResponse(response);
    const parsed = JSON.parse(extracted);
    const result = schema.safeParse(parsed);

    if (result.success) {
      return { data: result.data, valid: true };
    }

    const issues = result.error.issues.map(
      (i) => `${i.path.join(".")}: ${i.message}`,
    );
    console.warn("[Zod validation failed]", issues);

    return {
      data: fallback,
      valid: false,
      error: issues.join("; "),
    };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Parse error";
    console.warn("[JSON parse failed]", message);

    return {
      data: fallback,
      valid: false,
      error: message,
    };
  }
}

export function extractJSONFromResponse(response: string): string {
  const trimmed = response.trim();

  if (trimmed.startsWith("```json")) {
    return trimmed.replace(/^```json\n/, "").replace(/\n```$/, "");
  }

  if (trimmed.startsWith("```")) {
    return trimmed.replace(/^```\w*\n/, "").replace(/\n```$/, "");
  }

  const jsonMatch = trimmed.match(/\{[\s\S]*\}/);
  return jsonMatch ? jsonMatch[0] : trimmed;
}
