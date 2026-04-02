export type {
  Sector,
  Niche,
  BusinessModel,
  Domain,
  Unit,
  InputType,
  GroupDataPeriod,
  TotalAggregation,
  TrendDirection,
  CalculationStatus,
  ConfidenceLevel,
  LibraryKPI,
  KPIThreshold,
  KPIResult,
  KPIResultSet,
} from "./types";

export { KPICalculationEngine, createCalculationEngine } from "./calculator";
export type { CalculationContext, CalculationOptions } from "./calculator";

export * from "./formulas";
export * from "./dataMapper";
