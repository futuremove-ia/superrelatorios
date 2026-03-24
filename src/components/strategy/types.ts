/**
 * SuperRelatórios - Strategy Component Types
 * Tipos para os componentes estratégicos
 */

import { KPI, Challenge, Goal, Lever, Action, StrategicTemplate } from '@/types/strategy';

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
  showRelatedKPIs?: boolean;
  onAction?: (challenge: Challenge) => void;
  className?: string;
}

export interface GoalTrackerProps {
  goal: Goal;
  progress?: number;
  timeframe?: number;
  showProgressBar?: boolean;
  showTimeframe?: boolean;
  showSuccessDefinition?: boolean;
  onProgressUpdate?: (progress: number) => void;
  onComplete?: () => void;
  className?: string;
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
  onActionPause?: (actionId: string) => void;
  onActionAbandon?: (actionId: string) => void;
  showEffort?: boolean;
  showQuickWin?: boolean;
  showStepByStep?: boolean;
  className?: string;
}

export interface TemplatePickerProps {
  templates?: StrategicTemplate[];
  selectedTemplate?: string;
  onTemplateSelect?: (templateId: string) => void;
  onTemplateUse?: (templateId: string) => void;
  showUsage?: boolean;
  showRating?: boolean;
  industry?: string;
  category?: string;
  allowCustom?: boolean;
  className?: string;
}
