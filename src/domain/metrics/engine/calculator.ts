import {
  KPIResult,
  KPIResultSet,
  Sector,
  BusinessModel,
  GroupDataPeriod,
  CalculationStatus,
  ConfidenceLevel,
  LibraryKPI,
} from "./types";
import { getFormula, KPI_FORMULAS, getFormulasBySector } from "./formulas";
import {
  mapUserDataToKPIFields,
  mapDataForKPI,
  MappedData,
} from "./dataMapper";

export interface CalculationOptions {
  sector?: Sector;
  businessModel?: BusinessModel;
  period?: GroupDataPeriod;
  includeAllSectors?: boolean;
  parallel?: boolean;
}

export interface CalculationContext {
  organizationId: string;
  sector?: Sector;
  businessModel?: BusinessModel;
  period: GroupDataPeriod;
  startDate?: Date;
  endDate?: Date;
}

export interface CalculationContext {
  organizationId: string;
  sector?: Sector;
  businessModel?: BusinessModel;
  period: GroupDataPeriod;
  startDate?: Date;
  endDate?: Date;
}

const determineStatus = (
  value: number | null,
  thresholds?: { critical: number; warning: number; good: number },
  trendDirection?: "higher_is_better" | "lower_is_better" | "no_trend",
): "critical" | "warning" | "good" | "unknown" => {
  if (value === null || !thresholds) return "unknown";

  const { critical, warning, good } = thresholds;

  if (trendDirection === "higher_is_better") {
    if (value >= good) return "good";
    if (value >= warning) return "warning";
    return "critical";
  }

  if (trendDirection === "lower_is_better") {
    if (value <= good) return "good";
    if (value <= warning) return "warning";
    return "critical";
  }

  return "unknown";
};

const determineTrend = (
  current: number | null,
  previous: number | null,
): "up" | "down" | "stable" | "unknown" => {
  if (current === null || previous === null || previous === 0) return "unknown";

  const changePercent = ((current - previous) / previous) * 100;

  if (changePercent > 5) return "up";
  if (changePercent < -5) return "down";
  return "stable";
};

const mapCalculationStatusToConfidence = (
  status: CalculationStatus,
): ConfidenceLevel => {
  switch (status) {
    case "success":
      return "high";
    case "insufficient_data":
    case "pending":
      return "low";
    case "division_by_zero":
    case "invalid_input":
    case "overflow":
      return "medium";
    case "not_applicable":
      return "unknown";
    default:
      return "unknown";
  }
};

export class KPICalculationEngine {
  private context: CalculationContext;
  private options: CalculationOptions;
  private kpiLibrary: Map<string, LibraryKPI>;

  constructor(
    context: CalculationContext,
    options: CalculationOptions = {},
    kpiLibrary: LibraryKPI[] = [],
  ) {
    this.context = {
      ...context,
      period: context.period || "monthly",
    };
    this.options = options;
    this.kpiLibrary = new Map(kpiLibrary.map((kpi) => [kpi.code, kpi]));
  }

  calculateSingle(
    kpiCode: string,
    rawData: Record<string, number | number[]>,
  ): KPIResult {
    const startTime = Date.now();
    const formula = getFormula(kpiCode);
    const libraryKPI = this.kpiLibrary.get(kpiCode);

    if (!formula) {
      return this.createErrorResult(
        kpiCode,
        "not_applicable",
        `Fórmula não encontrada para ${kpiCode}`,
        libraryKPI?.title || kpiCode,
      );
    }

    const mappedData = mapUserDataToKPIFields(rawData, this.context.sector);

    const kpiData = mapDataForKPI(
      mappedData,
      formula.requiredFields.map((f) => f.name),
    );

    const requiredFieldNames = formula.requiredFields.map((f) => f.name);
    const hasRequiredData = requiredFieldNames.every(
      (field) => kpiData[field] !== undefined,
    );

    if (!hasRequiredData) {
      const missing = requiredFieldNames.filter(
        (f) => kpiData[f] === undefined,
      );
      return this.createInsufficientDataResult(
        kpiCode,
        missing,
        libraryKPI?.title || formula.description,
      );
    }

    const result = formula.calculation(kpiData);
    const confidence = formula.getConfidence(kpiData);
    const thresholds = formula.getThresholds?.();

    const status = determineStatus(
      result.value,
      thresholds,
      libraryKPI?.trend_direction as
        | "higher_is_better"
        | "lower_is_better"
        | "no_trend",
    );

    const trend = "unknown";

    return {
      code: kpiCode,
      title: libraryKPI?.title || formula.description,
      value: result.value,
      unit: libraryKPI?.unit || "percent",
      status,
      trend,
      confidence,
      calculationStatus: result.status,
      calculatedAt: new Date(),
      error: result.error,
      warnings: [...mappedData.warnings, ...result.warnings],
    };
  }

  calculateMultiple(
    kpiCodes: string[],
    rawData: Record<string, number | number[]>,
  ): KPIResultSet {
    const startTime = Date.now();
    const results: KPIResult[] = [];

    for (const kpiCode of kpiCodes) {
      const result = this.calculateSingle(kpiCode, rawData);
      results.push(result);
    }

    return {
      kpis: results,
      metadata: {
        sector: this.context.sector,
        businessModel: this.context.businessModel,
        period: this.context.period,
        calculatedAt: new Date(),
        calculationTimeMs: Date.now() - startTime,
      },
    };
  }

  calculateAllForSector(
    rawData: Record<string, number | number[]>,
  ): KPIResultSet {
    const sector = this.context.sector;

    if (!sector && !this.options.includeAllSectors) {
      return {
        kpis: [],
        metadata: {
          period: this.context.period,
          calculatedAt: new Date(),
          calculationTimeMs: 0,
        },
      };
    }

    const formulas = sector
      ? getFormulasBySector(sector)
      : Object.values(KPI_FORMULAS);

    const kpiCodes = formulas.map((f) => f.code);

    return this.calculateMultiple(kpiCodes, rawData);
  }

  calculateFromMappedData(
    mappedData: MappedData,
    kpiCodes: string[],
  ): KPIResult[] {
    const results: KPIResult[] = [];

    for (const kpiCode of kpiCodes) {
      const formula = getFormula(kpiCode);
      const libraryKPI = this.kpiLibrary.get(kpiCode);

      if (!formula) continue;

      const kpiData = mapDataForKPI(
        mappedData,
        formula.requiredFields.map((f) => f.name),
      );

      const requiredFieldNames = formula.requiredFields.map((f) => f.name);
      const hasRequiredData = requiredFieldNames.every(
        (field) => kpiData[field] !== undefined,
      );

      if (!hasRequiredData) {
        const missing = requiredFieldNames.filter(
          (f) => kpiData[f] === undefined,
        );
        results.push(
          this.createInsufficientDataResult(
            kpiCode,
            missing,
            libraryKPI?.title || formula.description,
          ),
        );
        continue;
      }

      const result = formula.calculation(kpiData);
      const thresholds = formula.getThresholds?.();

      const status = determineStatus(
        result.value,
        thresholds,
        libraryKPI?.trend_direction as
          | "higher_is_better"
          | "lower_is_better"
          | "no_trend",
      );

      results.push({
        code: kpiCode,
        title: libraryKPI?.title || formula.description,
        value: result.value,
        unit: libraryKPI?.unit || "percent",
        status,
        trend: "unknown",
        confidence: formula.getConfidence(kpiData),
        calculationStatus: result.status,
        calculatedAt: new Date(),
        error: result.error,
        warnings: [...mappedData.warnings, ...result.warnings],
      });
    }

    return results;
  }

  getAvailableKPIs(
    rawData: Record<string, number | number[]>,
  ): { code: string; title: string; readiness: number }[] {
    const sector = this.context.sector;
    const formulas = sector
      ? getFormulasBySector(sector)
      : Object.values(KPI_FORMULAS);

    const mappedData = mapUserDataToKPIFields(rawData, sector);

    return formulas
      .map((formula) => {
        const requiredFields = formula.requiredFields.map((f) => f.name);
        const availableFields = requiredFields.filter(
          (f) => mappedData.mapped[f] !== undefined,
        );
        const readiness =
          requiredFields.length > 0
            ? availableFields.length / requiredFields.length
            : 0;

        const libraryKPI = this.kpiLibrary.get(formula.code);

        return {
          code: formula.code,
          title: libraryKPI?.title || formula.description,
          readiness,
        };
      })
      .filter((kpi) => kpi.readiness > 0)
      .sort((a, b) => b.readiness - a.readiness);
  }

  getSuggestedNextSteps(
    rawData: Record<string, number | number[]>,
  ): { field: string; description: string; impact: string }[] {
    const availableKPIs = this.getAvailableKPIs(rawData);
    const suggestions: {
      field: string;
      description: string;
      impact: string;
    }[] = [];

    const sector = this.context.sector;
    const formulas = sector
      ? getFormulasBySector(sector)
      : Object.values(KPI_FORMULAS);

    const mappedData = mapUserDataToKPIFields(rawData, sector);

    for (const formula of formulas) {
      const requiredFields = formula.requiredFields.map((f) => f.name);
      const availableCount = requiredFields.filter(
        (f) => mappedData.mapped[f] !== undefined,
      ).length;

      if (availableCount > 0 && availableCount < requiredFields.length) {
        const missingField = requiredFields.find(
          (f) => mappedData.mapped[f] === undefined,
        );

        if (
          missingField &&
          !suggestions.find((s) => s.field === missingField)
        ) {
          const param = formula.requiredFields.find(
            (p) => p.name === missingField,
          );
          suggestions.push({
            field: missingField,
            description: param?.description || missingField,
            impact: formula.description,
          });
        }
      }
    }

    return suggestions.slice(0, 5);
  }

  private createErrorResult(
    code: string,
    status: CalculationStatus,
    error: string,
    title: string,
  ): KPIResult {
    return {
      code,
      title,
      value: null,
      unit: "percent",
      status: "unknown",
      trend: "unknown",
      confidence: "unknown",
      calculationStatus: status,
      calculatedAt: new Date(),
      error,
      warnings: [],
    };
  }

  private createInsufficientDataResult(
    code: string,
    missingFields: string[],
    title: string,
  ): KPIResult {
    return {
      code,
      title,
      value: null,
      unit: "percent",
      status: "unknown",
      trend: "unknown",
      confidence: "low",
      calculationStatus: "insufficient_data",
      calculatedAt: new Date(),
      error: `Dados insuficientes. Campos necessários: ${missingFields.join(", ")}`,
      warnings: [],
    };
  }

  setContext(context: Partial<CalculationContext>): void {
    this.context = { ...this.context, ...context };
  }

  getContext(): CalculationContext {
    return { ...this.context };
  }
}

export const createCalculationEngine = (
  context: CalculationContext,
  options: CalculationOptions = {},
  kpiLibrary: LibraryKPI[] = [],
): KPICalculationEngine => {
  return new KPICalculationEngine(context, options, kpiLibrary);
};
