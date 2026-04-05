import type { Domain, KPIMapping } from "@/types/financial-parser";
import {
  findSemanticField,
  getSemanticConfig,
} from "@/domain/shared/semanticTaxonomy";

export interface ColumnPattern {
  kpiCode: string;
  kpiName: string;
  patterns: RegExp[];
  category: string;
}

export function mapColumnToKPIs(
  columnName: string,
  domain: Domain,
): KPIMapping[] {
  if (!columnName || !domain) return [];

  const field = findSemanticField(domain, columnName);
  if (!field) return [];

  return [
    {
      kpiCode: field.code,
      kpiName: field.name,
      confidence: 0.9,
      category: field.category as KPIMapping["category"],
    },
  ];
}

export function getColumnPatternsForDomain(
  domain: Domain,
): Record<string, RegExp[]> {
  const config = getSemanticConfig(domain);
  if (!config) return {};

  const result: Record<string, RegExp[]> = {};
  for (const field of config.fields) {
    const aliasesPattern = field.aliases.map((alias) => new RegExp(alias, "i"));
    result[field.code] = aliasesPattern;
  }
  return result;
}

export function getAllKPIsForDomain(
  domain: Domain,
): { kpiCode: string; kpiName: string; category: string }[] {
  const config = getSemanticConfig(domain);
  if (!config) return [];

  return config.fields.map((f) => ({
    kpiCode: f.code,
    kpiName: f.name,
    category: f.category,
  }));
}
