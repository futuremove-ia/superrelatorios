/**
 * SuperRelatórios - Strategy Types
 * Tipos para as bibliotecas estratégicas do sistema
 */

// =====================================================
// KPI Master Library Types
// =====================================================

export interface KPI {
  id: string;
  code: string;
  title: string;
  description?: string;
  calculation_formula?: string;
  unit: string;
  domain: 'finance' | 'sales' | 'marketing' | 'operations' | 'hr' | 'strategy';
  benchmark_target?: number;
  benchmark_good?: number;
  benchmark_warning?: number;
  trend_direction: 'higher_is_better' | 'lower_is_better' | 'no_trend';
  input_type: 'cumulative' | 'non_cumulative';
  group_data_period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  total_is: 'sum_of_values' | 'average_of_values' | 'last_value' | 'all_time' | 'ytd_as_of';
  is_active: boolean;
  source_system?: string;
  migration_notes?: string;
  created_at: string;
  updated_at: string;
}

// =====================================================
// Library Challenges Types
// =====================================================

export interface Challenge {
  id: string;
  code: string;
  title: string;
  description?: string;
  domain: string;
  severity_default: number; // 1-5
  symptoms?: string[]; // Array de sintomas detectáveis
  related_kpi_codes?: string[]; // KPIs relacionados
  metric_tree_config?: any; // Configuração da árvore de métricas
  created_at: string;
}

// =====================================================
// Library Goals Types
// =====================================================

export interface Goal {
  id: string;
  code: string;
  title: string;
  description?: string;
  success_definition?: string;
  calculation_logic_ref?: string;
  target_type: 'increase' | 'decrease' | 'maintain';
  suggested_timeframe_days: number;
  created_at: string;
}

// =====================================================
// Library Levers Types
// =====================================================

export interface Lever {
  id: string;
  code: string;
  title: string;
  description?: string;
  category: 'financeiro' | 'vendas' | 'operacoes' | 'pessoas' | 'relacionamento' | 'marketing';
  target_kpi_code?: string;
  impact_level: 'high' | 'medium' | 'low';
  implementation_complexity: 'high' | 'medium' | 'low';
  typical_timeframe_days: number;
  expected_impact_description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// =====================================================
// Library Actions Types
// =====================================================

export interface Action {
  id: string;
  code: string;
  lever_id: string;
  title: string;
  description: string;
  step_by_step?: any[]; // Array de passos
  estimated_effort_hours: number;
  required_resources?: string;
  success_metrics?: string;
  priority_score: number; // 1-5
  quick_win: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  
  // Joined fields from queries
  library_levers?: {
    id: string;
    code: string;
    title: string;
    category: string;
    target_kpi_code?: string;
  };
}

// =====================================================
// Strategic Templates Types
// =====================================================

export interface StrategicTemplate {
  id: string;
  organization_id?: string;
  name: string;
  code: string;
  description?: string;
  industry: string;
  category: string;
  subcategory?: string;
  file_structure: any; // JSON com estrutura esperada
  ai_prompt_template?: string;
  analysis_focus?: string[]; // Áreas de foco da análise
  expected_kpis?: any[]; // KPIs esperados
  default_challenges?: string[]; // Desafios comuns
  suggested_levers?: string[]; // Alavancas típicas
  tags?: string[];
  sample_file_url?: string;
  documentation_url?: string;
  version: string;
  parent_template_id?: string;
  usage_count: number;
  rating: number; // 0-5
  rating_count: number;
  is_public: boolean;
  is_active: boolean;
  is_system: boolean;
  created_by?: string;
  updated_by?: string;
  created_at: string;
  updated_at: string;
}

// =====================================================
// User Strategy Focus Types
// =====================================================

export interface StrategyFocus {
  id: string;
  organization_id: string;
  challenge_id: string;
  goal_id: string;
  status: 'active' | 'achieved' | 'paused';
  started_at: string;
  achieved_at?: string;
  context_notes?: string;
  progress_percentage: number;
  last_calculated_at: string;
  
  // Joined fields
  library_challenges?: Challenge;
  library_goals?: Goal;
}

// =====================================================
// User Action History Types
// =====================================================

export interface UserActionHistory {
  id: string;
  organization_id: string;
  user_id?: string;
  action_id: string;
  challenge_id?: string;
  goal_id?: string;
  status: 'suggested' | 'accepted' | 'in_progress' | 'completed' | 'abandoned' | 'failed';
  started_at?: string;
  completed_at?: string;
  notes?: string;
  results_summary?: string;
  kpi_before?: any; // JSON
  kpi_after?: any; // JSON
  effectiveness_rating?: number; // 1-5
  created_at: string;
  updated_at: string;
  
  // Joined fields
  library_actions?: Action;
  library_levers?: Lever;
  library_challenges?: Challenge;
  library_goals?: Goal;
}

// =====================================================
// Progress History Types
// =====================================================

export interface ProgressHistory {
  id: string;
  user_strategy_focus_id: string;
  report_id?: string;
  progress_percentage: number;
  delta_from_previous: number;
  trend_direction: 'improving' | 'declining' | 'stable';
  calculated_result?: any; // Vetor de tendência completo
  calculated_at: string;
}

// =====================================================
// User Metrics Types
// =====================================================

export interface UserMetric {
  id: string;
  organization_id: string;
  report_id?: string;
  kpi_code: string;
  value: number;
  source_file_id?: string;
  recorded_at: string;
}

// =====================================================
// Strategic Dashboard Types
// =====================================================

export interface StrategicDashboard {
  organization_id: string;
  organization_name: string;
  focus_id: string;
  status: string;
  challenge_code: string;
  challenge_title: string;
  goal_code: string;
  goal_title: string;
  progress_percentage: number;
  started_at: string;
  suggested_timeframe_days: number;
  days_remaining: number;
  urgency_level: 'success' | 'warning' | 'danger';
}

// =====================================================
// Template Suggestion Types
// =====================================================

export interface TemplateSuggestion {
  template_id: string;
  template_name: string;
  match_score: number;
  match_reason: string;
}

// =====================================================
// Action Recommendation Types
// =====================================================

export interface ActionRecommendation {
  action_id: string;
  action_code: string;
  action_title: string;
  action_description: string;
  step_by_step: any[];
  lever_title: string;
  lever_category: string;
  priority: number;
  estimated_effort_hours: number;
  quick_win: boolean;
}

// =====================================================
// Challenge Detection Types
// =====================================================

export interface ChallengeDetection {
  challenge_id: string;
  confidence_score: number;
  detected_symptoms: string[];
}

// =====================================================
// Enums and Constants
// =====================================================

export const KPIS_DOMAINS = {
  FINANCE: 'finance',
  SALES: 'sales',
  MARKETING: 'marketing',
  OPERATIONS: 'operations',
  HR: 'hr',
  STRATEGY: 'strategy'
} as const;

export const CHALLENGE_DOMAINS = {
  FINANCE: 'finance',
  SALES: 'sales',
  MARKETING: 'marketing',
  OPERATIONS: 'ops',
  STRATEGY: 'strategy'
} as const;

export const LEVER_CATEGORIES = {
  FINANCEIRO: 'financeiro',
  VENDAS: 'vendas',
  OPERACOES: 'operacoes',
  PESSOAS: 'pessoas',
  RELACIONAMENTO: 'relacionamento',
  MARKETING: 'marketing'
} as const;

export const INDUSTRIES = {
  VAREJO: 'varejo',
  SERVICOS: 'servicos',
  MANUFATURA: 'manufatura',
  SAUDE: 'saude',
  EDUCACAO: 'educacao',
  FINANCEIRO: 'financeiro',
  TECNOLOGIA: 'tecnologia',
  CONSULTORIA: 'consultoria',
  ECOMMERCE: 'ecommerce'
} as const;

export const TEMPLATE_CATEGORIES = {
  FINANCEIRO: 'financeiro',
  VENDAS: 'vendas',
  OPERACIONAL: 'operacional',
  MARKETING: 'marketing',
  RH: 'rh'
} as const;

export const ACTION_STATUS = {
  SUGGESTED: 'suggested',
  ACCEPTED: 'accepted',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  ABANDONED: 'abandoned',
  FAILED: 'failed'
} as const;

export const STRATEGY_STATUS = {
  ACTIVE: 'active',
  ACHIEVED: 'achieved',
  PAUSED: 'paused'
} as const;

export const TREND_DIRECTIONS = {
  HIGHER_BETTER: 'higher_is_better',
  LOWER_BETTER: 'lower_is_better',
  NO_TREND: 'no_trend'
} as const;

export const IMPACT_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
} as const;

export const COMPLEXITY_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
} as const;

// =====================================================
// Utility Types
// =====================================================

export type KPIFilter = {
  domain?: string;
  is_active?: boolean;
  search?: string;
};

export type ChallengeFilter = {
  domain?: string;
  severity?: number;
  search?: string;
};

export type TemplateFilter = {
  industry?: string;
  category?: string;
  is_public?: boolean;
  search?: string;
};

export type ActionFilter = {
  lever_id?: string;
  quick_win?: boolean;
  priority?: number;
};

export type FileStructure = {
  required_columns: Array<{
    name: string;
    type: string;
    format?: string;
    description?: string;
  }>;
  optional_columns?: Array<{
    name: string;
    type: string;
    description?: string;
  }>;
  min_rows?: number;
  max_rows?: number;
  file_types?: string[];
  validation_rules?: Array<{
    field: string;
    rule: string;
    message: string;
  }>;
};

// =====================================================
// Response Types for API
// =====================================================

export interface StrategyLibraryResponse<T> {
  data: T[];
  error?: string;
  message?: string;
}

export interface StrategyResponse<T> {
  data: T;
  error?: string;
  message?: string;
}

// =====================================================
// Component Props Types
// =====================================================

export interface KPICardProps {
  kpi: KPI;
  value?: number;
  previousValue?: number;
  trend?: 'up' | 'down' | 'stable';
  showBenchmark?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export interface ChallengeCardProps {
  challenge: Challenge;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  showSymptoms?: boolean;
  onAction?: (challenge: Challenge) => void;
}

export interface GoalTrackerProps {
  goal: Goal;
  progress?: number;
  timeframe?: number;
  showProgressBar?: boolean;
  onProgressUpdate?: (progress: number) => void;
}

export interface LeverSelectorProps {
  levers: Lever[];
  selectedLever?: string;
  onLeverSelect?: (leverId: string) => void;
  showImpact?: boolean;
  showComplexity?: boolean;
}

export interface ActionChecklistProps {
  actions: Action[];
  completedActions?: string[];
  onActionComplete?: (actionId: string) => void;
  onActionStart?: (actionId: string) => void;
  showEffort?: boolean;
  showQuickWin?: boolean;
}

export interface TemplatePickerProps {
  templates: StrategicTemplate[];
  selectedTemplate?: string;
  onTemplateSelect?: (templateId: string) => void;
  showUsage?: boolean;
  showRating?: boolean;
  industry?: string;
}
