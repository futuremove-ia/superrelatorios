import { useState, useCallback } from "react";
import {
  KPICalculationEngine,
  CalculationContext,
  getFormulasBySector,
  mapUserDataToKPIFields,
  KPI_FORMULAS,
} from "../domain/metrics/engine";
import type { Sector, KPIResult } from "../domain/metrics/engine/types";

export interface FirstWinData {
  sector: Sector | null;
  confidence: number;
  suggestedKPIs: KPIResult[];
  rawData: Record<string, number | number[]>;
  availableFields: string[];
  missingFields: string[];
  insights: string[];
}

export interface FirstWinState {
  isAnalyzing: boolean;
  data: FirstWinData | null;
  error: string | null;
  hasAnalyzed: boolean;
}

const SECTOR_INDICATORS: Record<Sector, string[]> = {
  technology: [
    "mrr",
    "arr",
    "churn",
    "cac",
    "ltv",
    "arpu",
    "subscribers",
    "users",
    "sessions",
  ],
  retail: [
    "revenue",
    "sales",
    "orders",
    "customers",
    "products",
    "inventory",
    "margin",
    "atv",
  ],
  healthcare: [
    "patients",
    "appointments",
    "treatments",
    "beds",
    "occupancy",
    "revenue",
    "costs",
  ],
  manufacturing: [
    "production",
    "units",
    "efficiency",
    "inventory",
    "materials",
    "quality",
    "defects",
  ],
  services: [
    "hours",
    "projects",
    "clients",
    "utilization",
    "revenue",
    "tickets",
    "resolution",
  ],
  finance: [
    "revenue",
    "loans",
    "interest",
    "deposits",
    "assets",
    "clients",
    "npl",
    "nim",
  ],
  food: [
    "revenue",
    "orders",
    "customers",
    "tickets",
    "tables",
    "covers",
    "inventory",
  ],
  logistics: [
    "shipments",
    "deliveries",
    "routes",
    "vehicles",
    "fuel",
    "cost",
    "time",
  ],
  construction: [
    "projects",
    "budget",
    "costs",
    "revenue",
    "progress",
    "resources",
    "safety",
  ],
  education: [
    "students",
    "enrollment",
    "courses",
    "teachers",
    "attendance",
    "completion",
  ],
  real_estate: [
    "properties",
    "occupancy",
    "rent",
    "revenue",
    "costs",
    "tenants",
    "leases",
  ],
  media: [
    "views",
    "subscribers",
    "engagement",
    "ad_revenue",
    "sessions",
    "content",
  ],
};

const detectSectorFromData = (
  headers: string[],
  sampleData: Record<string, unknown>[],
): { sector: Sector | null; confidence: number } => {
  const normalizedHeaders = headers.map((h) =>
    h.toLowerCase().replace(/[^a-z0-9]/g, ""),
  );

  const scores: Record<Sector, number> = {
    technology: 0,
    retail: 0,
    healthcare: 0,
    manufacturing: 0,
    services: 0,
    finance: 0,
    food: 0,
    logistics: 0,
    construction: 0,
    education: 0,
    real_estate: 0,
    media: 0,
  };

  for (const [sector, indicators] of Object.entries(SECTOR_INDICATORS)) {
    for (const indicator of indicators) {
      for (const header of normalizedHeaders) {
        if (header.includes(indicator) || indicator.includes(header)) {
          scores[sector as Sector] += 1;
        }
      }
    }
  }

  let bestSector: Sector | null = null;
  let bestScore = 0;
  let totalMatches = 0;

  for (const [sector, score] of Object.entries(scores)) {
    if (score > bestScore) {
      bestScore = score;
      bestSector = sector as Sector;
    }
    totalMatches += score;
  }

  const confidence = totalMatches > 0 ? bestScore / totalMatches : 0;

  return { sector: bestSector, confidence };
};

const generateInsights = (
  results: KPIResult[],
  sector: Sector | null,
): string[] => {
  const insights: string[] = [];

  if (!sector) return insights;

  for (const result of results) {
    if (result.calculationStatus !== "success" || result.value === null)
      continue;

    if (result.status === "good") {
      insights.push(
        `✓ ${result.title}: ${result.value}${result.unit === "percent" ? "%" : ""}`,
      );
    } else if (result.status === "warning") {
      insights.push(
        `⚠ ${result.title}: ${result.value}${result.unit === "percent" ? "%" : ""}`,
      );
    } else if (result.status === "critical") {
      insights.push(
        `🔴 ${result.title}: ${result.value}${result.unit === "percent" ? "%" : ""}`,
      );
    }
  }

  if (insights.length === 0 && results.length > 0) {
    insights.push(`📊 ${results.length} indicadores calculados`);
  }

  return insights;
};

export const useFirstWin = () => {
  const [state, setState] = useState<FirstWinState>({
    isAnalyzing: false,
    data: null,
    error: null,
    hasAnalyzed: false,
  });

  const analyze = useCallback(
    async (parsedData: {
      headers: string[];
      rows: Record<string, unknown>[];
    }) => {
      setState((prev) => ({ ...prev, isAnalyzing: true, error: null }));

      try {
        const { headers, rows } = parsedData;

        const sampleSize = Math.min(rows.length, 10);
        const sampleRows = rows.slice(0, sampleSize);

        const numericData: Record<string, number | number[]> = {};

        for (const header of headers) {
          const values = sampleRows
            .map((row) => row[header])
            .filter((v): v is number => typeof v === "number" && !isNaN(v));

          if (values.length > 0) {
            numericData[header.toLowerCase().replace(/\s+/g, "_")] =
              values.length === 1 ? values[0] : values;
          }
        }

        const { sector, confidence } = detectSectorFromData(
          headers,
          sampleRows,
        );

        if (!sector) {
          setState((prev) => ({
            ...prev,
            isAnalyzing: false,
            hasAnalyzed: true,
            data: null,
            error:
              "Não foi possível detectar o setor automaticamente. Selecione manualmente.",
          }));
          return;
        }

        const context: CalculationContext = {
          organizationId: "first-win",
          sector,
          businessModel: "subscription",
          period: "monthly",
        };

        const engine = new KPICalculationEngine(context, {}, []);

        const formulas = getFormulasBySector(sector);
        const kpiCodes = formulas.slice(0, 10).map((f) => f.code);

        const results = engine.calculateMultiple(kpiCodes, numericData);

        const successfulResults = results.kpis.filter(
          (kpi) => kpi.calculationStatus === "success",
        );

        const mappedData = mapUserDataToKPIFields(numericData, sector);

        const availableFields = Object.keys(mappedData.mapped);

        const allRequiredFields = new Set<string>();
        formulas.forEach((f) => {
          f.requiredFields.forEach((rf) => allRequiredFields.add(rf.name));
        });
        const missingFields = Array.from(allRequiredFields).filter(
          (f) => !availableFields.includes(f),
        );

        const insights = generateInsights(successfulResults, sector);

        const firstWinData: FirstWinData = {
          sector,
          confidence,
          suggestedKPIs: successfulResults,
          rawData: numericData,
          availableFields,
          missingFields,
          insights,
        };

        setState({
          isAnalyzing: false,
          data: firstWinData,
          error: null,
          hasAnalyzed: true,
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Erro ao analisar dados";
        setState({
          isAnalyzing: false,
          data: null,
          error: errorMessage,
          hasAnalyzed: true,
        });
      }
    },
    [],
  );

  const reset = useCallback(() => {
    setState({
      isAnalyzing: false,
      data: null,
      error: null,
      hasAnalyzed: false,
    });
  }, []);

  const setSectorManually = useCallback(
    (sector: Sector) => {
      if (!state.data?.rawData) return;

      const context: CalculationContext = {
        organizationId: "first-win",
        sector,
        businessModel: "subscription",
        period: "monthly",
      };

      const engine = new KPICalculationEngine(context, {}, []);
      const formulas = getFormulasBySector(sector);
      const kpiCodes = formulas.slice(0, 10).map((f) => f.code);

      const results = engine.calculateMultiple(kpiCodes, state.data.rawData);
      const successfulResults = results.kpis.filter(
        (kpi) => kpi.calculationStatus === "success",
      );
      const insights = generateInsights(successfulResults, sector);

      setState((prev) => ({
        ...prev,
        data: prev.data
          ? {
              ...prev.data,
              sector,
              confidence: 1,
              suggestedKPIs: successfulResults,
              insights,
            }
          : null,
      }));
    },
    [state.data],
  );

  return {
    ...state,
    analyze,
    reset,
    setSectorManually,
  };
};
