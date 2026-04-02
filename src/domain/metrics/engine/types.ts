export type Sector =
  | "technology"
  | "retail"
  | "healthcare"
  | "manufacturing"
  | "services"
  | "finance"
  | "food"
  | "logistics"
  | "construction"
  | "education"
  | "real_estate"
  | "media";

export type Niche =
  | "saas"
  | "ecommerce"
  | "physical"
  | "omnichannel"
  | "hospital"
  | "clinic"
  | "insurance"
  | "discrete"
  | "process"
  | "consulting"
  | "support"
  | "banking"
  | "fintech"
  | "credit"
  | "restaurant"
  | "delivery"
  | "3pl"
  | "lastmile"
  | "freight"
  | "warehousing"
  | "residential"
  | "commercial"
  | "industrial";

export type BusinessModel =
  | "b2b"
  | "b2c"
  | "b2b2c"
  | "marketplace"
  | "subscription"
  | "transaction";

export type Domain =
  | "finance"
  | "sales"
  | "marketing"
  | "operations"
  | "hr"
  | "strategy";

export type Unit =
  | "currency"
  | "percent"
  | "ratio"
  | "count"
  | "score"
  | "days"
  | "hours"
  | "minutes"
  | "seconds";

export type InputType = "cumulative" | "non_cumulative";

export type GroupDataPeriod =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "yearly"
  | "project";

export type TotalAggregation =
  | "sum_of_values"
  | "average_of_values"
  | "last_value"
  | "all_time"
  | "ytd_as_of";

export type TrendDirection =
  | "higher_is_better"
  | "lower_is_better"
  | "no_trend";

export type CalculationStatus =
  | "success"
  | "insufficient_data"
  | "invalid_input"
  | "division_by_zero"
  | "overflow"
  | "not_applicable"
  | "pending";

export type ConfidenceLevel = "high" | "medium" | "low" | "unknown";

export interface LibraryKPI {
  id: string;
  code: string;
  title: string;
  description: string | null;
  calculation_formula: string | null;
  unit: Unit;
  domain: Domain;
  sector: Sector | null;
  niche: Niche | null;
  business_model: BusinessModel | null;
  trend_direction: TrendDirection;
  input_type: InputType;
  group_data_period: GroupDataPeriod;
  total_is: TotalAggregation;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface KPIThreshold {
  critical: number;
  warning: number;
  good: number;
}

export interface KPIResult {
  code: string;
  title: string;
  value: number | null;
  unit: Unit;
  status: "critical" | "warning" | "good" | "unknown";
  trend: "up" | "down" | "stable" | "unknown";
  confidence: ConfidenceLevel;
  calculationStatus: CalculationStatus;
  previousValue?: number;
  change?: number;
  threshold?: KPIThreshold;
  calculatedAt: Date;
  error?: string;
  warnings: string[];
}

export interface KPIResultSet {
  kpis: KPIResult[];
  metadata: {
    sector?: Sector;
    niche?: Niche;
    businessModel?: BusinessModel;
    period: GroupDataPeriod;
    calculatedAt: Date;
    calculationTimeMs: number;
  };
}
