export type OnboardingFlow = "instant" | "strategic" | "cloud" | "demo";

export type OnboardingStep =
  | "login"
  | "signup"
  | "welcome"
  | "company_info"
  | "industry_select"
  | "data_goals"
  | "first_data_import"
  | "sample_data"
  | "completed";

export type OnboardingStatus =
  | "not_started"
  | "in_progress"
  | "completed"
  | "skipped"
  | "paused";

export type CompanySize = "micro" | "small" | "medium" | "large" | "enterprise";

export type Industry =
  | "retail"
  | "manufacturing"
  | "services"
  | "technology"
  | "healthcare"
  | "education"
  | "construction"
  | "food"
  | "transportation"
  | "agriculture"
  | "finance"
  | "other";

export type DataSource =
  | "manual"
  | "spreadsheet"
  | "erp"
  | "accounting_software"
  | "bank_api"
  | "crm"
  | "other";

export interface CompanyInfo {
  name: string;
  size: CompanySize;
  logoUrl?: string;
  timezone?: string;
  currency?: string;
}

export interface IndustryConfig {
  industry: Industry;
  defaultKPIs: string[];
  defaultThresholds: Record<string, { critical: number; warning: number }>;
  recommendedPeriodicity: "weekly" | "biweekly" | "monthly";
}

export interface DataGoals {
  primaryObjectives: string[];
  priorityKPIs: string[];
  periodicity: "weekly" | "biweekly" | "monthly" | "quarterly";
  dataSource: DataSource;
  hasExistingData: boolean;
}

export interface FirstDataImport {
  fileName: string;
  fileType: string;
  rowCount: number;
  importedAt: Date;
  status: "pending" | "processing" | "completed" | "failed";
  errorMessage?: string;
}

export interface OnboardingState {
  id: string;
  userId: string;
  organizationId?: string;
  currentStep: OnboardingStep;
  status: OnboardingStatus;
  door?: OnboardingFlow;
  startedAt?: Date;
  completedAt?: Date;
  lastUpdatedAt?: Date;
  stepData: OnboardingStepData;
  completedSteps: OnboardingStep[];
  skippedSteps: OnboardingStep[];
}

export interface OnboardingStepData {
  companyInfo?: CompanyInfo;
  industryConfig?: IndustryConfig;
  dataGoals?: DataGoals;
  firstDataImport?: FirstDataImport;
  welcomeAcknowledged?: boolean;
  tourDismissed?: boolean;
}

export interface OnboardingContext {
  state: OnboardingState;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

export interface OnboardingProgress {
  totalSteps: number;
  completedSteps: number;
  currentStep: OnboardingStep;
  percentage: number;
  canGoBack: boolean;
  canSkip: boolean;
}

export interface OnboardingTransition {
  from: OnboardingStep;
  to: OnboardingStep;
  triggeredBy: "user_action" | "system" | "timeout";
  metadata?: Record<string, unknown>;
}

export interface SaveOnboardingStateOptions {
  userId: string;
  organizationId?: string;
  currentStep: OnboardingStep;
  status: OnboardingStatus;
  stepData: OnboardingStepData;
  completedSteps: OnboardingStep[];
  skippedSteps: OnboardingStep[];
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
  warnings?: Record<string, string>;
}

export const INDUSTRY_CONFIGS: Record<Industry, IndustryConfig> = {
  retail: {
    industry: "retail",
    defaultKPIs: ["revenue", "grossMargin", "inventoryTurnover", "salesGrowth"],
    defaultThresholds: {
      grossMargin: { critical: 15, warning: 25 },
      inventoryTurnover: { critical: 2, warning: 4 },
    },
    recommendedPeriodicity: "weekly",
  },
  manufacturing: {
    industry: "manufacturing",
    defaultKPIs: [
      "revenue",
      "grossMargin",
      "operatingMargin",
      "inventoryTurnover",
      "productionEfficiency",
    ],
    defaultThresholds: {
      grossMargin: { critical: 10, warning: 20 },
      operatingMargin: { critical: 5, warning: 10 },
    },
    recommendedPeriodicity: "monthly",
  },
  services: {
    industry: "services",
    defaultKPIs: [
      "revenue",
      "grossMargin",
      "customerAcquisitionCost",
      "customerLifetimeValue",
      "churnRate",
    ],
    defaultThresholds: {
      churnRate: { critical: 10, warning: 5 },
      customerAcquisitionCost: { critical: 500, warning: 300 },
    },
    recommendedPeriodicity: "monthly",
  },
  technology: {
    industry: "technology",
    defaultKPIs: [
      "revenue",
      "mrr",
      " ARR",
      "churnRate",
      "cac",
      "ltv",
      "burnRate",
    ],
    defaultThresholds: {
      churnRate: { critical: 8, warning: 5 },
      burnRate: { critical: 6, warning: 3 },
    },
    recommendedPeriodicity: "monthly",
  },
  healthcare: {
    industry: "healthcare",
    defaultKPIs: [
      "revenue",
      "grossMargin",
      "occupancyRate",
      "patientSatisfaction",
    ],
    defaultThresholds: {
      occupancyRate: { critical: 50, warning: 70 },
    },
    recommendedPeriodicity: "monthly",
  },
  education: {
    industry: "education",
    defaultKPIs: [
      "revenue",
      "enrollment",
      "retentionRate",
      "customerSatisfaction",
    ],
    defaultThresholds: {
      retentionRate: { critical: 60, warning: 80 },
    },
    recommendedPeriodicity: "monthly",
  },
  construction: {
    industry: "construction",
    defaultKPIs: ["revenue", "grossMargin", "projectProfitability", "cashFlow"],
    defaultThresholds: {
      projectProfitability: { critical: 5, warning: 10 },
    },
    recommendedPeriodicity: "monthly",
  },
  food: {
    industry: "food",
    defaultKPIs: ["revenue", "grossMargin", "foodCost", "inventoryTurnover"],
    defaultThresholds: {
      foodCost: { critical: 40, warning: 30 },
    },
    recommendedPeriodicity: "weekly",
  },
  transportation: {
    industry: "transportation",
    defaultKPIs: ["revenue", "grossMargin", "fleetUtilization", "fuelCost"],
    defaultThresholds: {
      fleetUtilization: { critical: 50, warning: 70 },
    },
    recommendedPeriodicity: "weekly",
  },
  agriculture: {
    industry: "agriculture",
    defaultKPIs: ["revenue", "grossMargin", "cropYield", "operationalCost"],
    defaultThresholds: {
      cropYield: { critical: 50, warning: 70 },
    },
    recommendedPeriodicity: "monthly",
  },
  finance: {
    industry: "finance",
    defaultKPIs: ["revenue", "netProfitMargin", "roe", "capitalAdequacy"],
    defaultThresholds: {
      netProfitMargin: { critical: 5, warning: 10 },
      roe: { critical: 5, warning: 10 },
    },
    recommendedPeriodicity: "monthly",
  },
  other: {
    industry: "other",
    defaultKPIs: ["revenue", "grossMargin", "netProfitMargin"],
    defaultThresholds: {
      grossMargin: { critical: 10, warning: 20 },
      netProfitMargin: { critical: 3, warning: 8 },
    },
    recommendedPeriodicity: "monthly",
  },
};

export const COMPANY_SIZE_OPTIONS: {
  value: CompanySize;
  label: string;
  employeeRange: string;
}[] = [
  { value: "micro", label: "Micro", employeeRange: "1-9 funcionários" },
  { value: "small", label: "Pequeno", employeeRange: "10-49 funcionários" },
  { value: "medium", label: "Médio", employeeRange: "50-249 funcionários" },
  { value: "large", label: "Grande", employeeRange: "250-999 funcionários" },
  {
    value: "enterprise",
    label: "Enterprise",
    employeeRange: "1000+ funcionários",
  },
];

export const INDUSTRY_OPTIONS: {
  value: Industry;
  label: string;
  icon: string;
}[] = [
  { value: "retail", label: "Varejo", icon: "🛒" },
  { value: "manufacturing", label: "Indústria/Fabricação", icon: "🏭" },
  { value: "services", label: "Serviços", icon: "💼" },
  { value: "technology", label: "Tecnologia", icon: "💻" },
  { value: "healthcare", label: "Saúde", icon: "🏥" },
  { value: "education", label: "Educação", icon: "📚" },
  { value: "construction", label: "Construção", icon: "🏗️" },
  { value: "food", label: "Alimentação", icon: "🍽️" },
  { value: "transportation", label: "Transporte", icon: "🚚" },
  { value: "agriculture", label: "Agricultura", icon: "🌾" },
  { value: "finance", label: "Financeiro", icon: "💰" },
  { value: "other", label: "Outro", icon: "📊" },
];

export const STEP_ORDER: OnboardingStep[] = [
  "welcome",
  "company_info",
  "industry_select",
  "data_goals",
  "first_data_import",
  "sample_data",
  "completed",
];

export const REQUIRED_STEPS: OnboardingStep[] = [
  "company_info",
  "industry_select",
];

export const OPTIONAL_STEPS: OnboardingStep[] = [
  "sample_data",
  "first_data_import",
];
