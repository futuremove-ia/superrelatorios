/**
 * SuperRelatórios v2.0 Business Domain Types
 * Centered around Diagnostics, Assisted Prioritization, and Action Plans.
 */

export type PriorityLevel = 'high' | 'medium' | 'low';

export interface Diagnostic {
  id: string;
  reportId: string;
  title: string;
  description: string;
  causes: string[];
  implications: string[];
  createdAt: string;
}

export interface PriorityScore {
  impact: number;      // 1-10
  urgency: number;     // 1-10
  effort: number;      // 1-10
  confidence: number;  // 1-10
  calculatedValue: number; // (impact * urgency * confidence) / effort
}

export interface Priority {
  id: string;
  diagnosticId: string;
  title: string;
  explanation: string;
  level: PriorityLevel;
  score: PriorityScore;
  status: 'suggested' | 'validated' | 'dismissed';
  createdAt: string;
}

export interface Action {
  id: string;
  priorityId: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'blocked';
  dueDate?: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActionPlan {
  id: string;
  title: string;
  description: string;
  actions: Action[];
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
}
