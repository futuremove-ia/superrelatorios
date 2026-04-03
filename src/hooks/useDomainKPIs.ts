import { useMemo } from "react";
import type { Domain } from "@/types/financial-parser";
import { getAllKPIsForDomain } from "@/services/columnMappingEngine";

export interface DomainKPI {
  kpiCode: string;
  kpiName: string;
  category: string;
}

interface UseDomainKPIsResult {
  kpis: DomainKPI[];
  getKPICategories: () => string[];
}

export function useDomainKPIs(domain: Domain): UseDomainKPIsResult {
  const kpis = useMemo(() => {
    if (!domain) return [];
    return getAllKPIsForDomain(domain);
  }, [domain]);

  const getKPICategories = (): string[] => {
    const categories = new Set(kpis.map((k) => k.category));
    return Array.from(categories);
  };

  return {
    kpis,
    getKPICategories,
  };
}
