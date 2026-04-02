export interface KPIData {
  code: string;
  name: string;
  value: number;
  unit: string;
  threshold?: {
    critical: number;
    warning: number;
  };
  trend?: "up" | "down" | "stable";
  previousValue?: number;
  change?: number;
  category?: "financial" | "marketing" | "sales" | "operational";
  status?: "good" | "warning" | "critical" | "unknown";
  benchmark?: number;
}

export type ChallengeSeverity =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "warning"
  | "info";

export interface Challenge {
  id: string;
  name: string;
  description: string;
  severity: ChallengeSeverity;
  detectedKPIs: string[];
  confidence: number;
  domain?: string;
  diagnosisCode?: string;
  timeframe?: string;
}

export interface DetectionResult {
  challenges: Challenge[];
  overallHealth:
    | "critical"
    | "warning"
    | "attention"
    | "healthy"
    | "excellent"
    | "good";
  summary: string;
}

export type RuleOperator = "<" | "<=" | ">" | ">=" | "==";

export interface DetectionRuleConfig {
  kpi: string;
  operator: RuleOperator;
  value: number;
  weight: number;
}

export interface DetectionRule {
  id: string;
  name: string;
  description: string;
  domain: string;
  severity: ChallengeSeverity;
  kpis: string[];
  rules: DetectionRuleConfig[];
  diagnosis_code?: string;
  timeframe?: string;
}

export interface Opportunity {
  id: string;
  name: string;
  description: string;
  confidence: number;
  domain: string;
  suggestedLevers: string[];
  potentialImpact: string;
  kpis: string[];
}

export interface OpportunityRule {
  id: string;
  name: string;
  description: string;
  domain: string;
  kpis: string[];
  rules: DetectionRuleConfig[];
  suggested_levers: string[];
  potential_impact: string;
}

export interface ActionLever {
  id: string;
  title: string;
  description: string;
  challenge: string;
  priority: number;
  complexity: "low" | "medium" | "high";
  estimatedTime: string;
  impact: "low" | "medium" | "high";
  kpis: string[];
}
