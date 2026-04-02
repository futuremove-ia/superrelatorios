export type { ExtractedKPI } from "@/services/kpiExtractionService";

export interface ExtractionConfig {
  industry?: string;
  companySize?: "small" | "medium" | "large";
  region?: string;
  period?: string;
}

export interface ExtractionResult {
  kpis: import("@/services/kpiExtractionService").ExtractedKPI[];
  summary: { total: number; critical: number; warning: number; good: number };
  confidence: number;
  processingTime: number;
  errors: string[];
}
