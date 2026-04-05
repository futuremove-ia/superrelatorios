import type { Domain } from "@/types/financial-parser";
import {
  SEMANTIC_DOMAINS,
  detectDomainFromText,
} from "@/domain/shared/semanticTaxonomy";

export interface DomainDetectionResult {
  domain: Domain | "unknown";
  confidence: number;
  matchedPatterns: string[];
}

interface BlueprintContext {
  industry_sector?: string;
  business_model?: string;
  company_stage?: string;
  employee_count_range?: string;
}

const INDUSTRY_DOMAIN_MAP: Record<string, Domain> = {
  retail: "commercial",
  ecommerce: "commercial",
  manufacturing: "operations",
  technology: "commercial",
  healthcare: "operations",
  education: "people",
  finance: "finance",
  services: "commercial",
};

export function detectDomain(
  headers: string[],
  sampleData: Record<string, any>[],
  blueprint?: BlueprintContext,
): DomainDetectionResult {
  const allHeaders = [...headers, ...Object.keys(sampleData[0] || {})];
  const headersText = allHeaders.join(" ");

  const detectedDomain = detectDomainFromText(headersText);

  if (detectedDomain) {
    const config = SEMANTIC_DOMAINS[detectedDomain];
    const matchedPatterns = config.keywords.filter((kw) =>
      allHeaders.some((h) => h.toLowerCase().includes(kw.toLowerCase())),
    );

    return {
      domain: detectedDomain,
      confidence: 0.8,
      matchedPatterns,
    };
  }

  if (blueprint?.industry_sector) {
    const inferredDomain =
      INDUSTRY_DOMAIN_MAP[blueprint.industry_sector.toLowerCase()];
    if (inferredDomain) {
      return {
        domain: inferredDomain,
        confidence: 0.3,
        matchedPatterns: ["blueprint_inference"],
      };
    }
  }

  return {
    domain: "unknown",
    confidence: 0,
    matchedPatterns: [],
  };
}

export function getKPIsForDomain(domain: Domain): string[] {
  const config = SEMANTIC_DOMAINS[domain];
  if (!config) return [];

  return config.fields.map((f) => f.code);
}
