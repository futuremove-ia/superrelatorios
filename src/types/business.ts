/**
 * SuperRelatórios v2.0 Business Domain Types
 * Centered around Diagnostics, Assisted Prioritization, and Action Plans.
 */

export type PriorityLevel = "high" | "medium" | "low";

// Domínios de negócio — Taxonomia PME/SMB v2.1
export type Domain =
  | "finance"
  | "commercial"
  | "marketing"
  | "operations"
  | "people"
  | "strategy"
  | "technology"
  | "customers"
  | "sales";

export interface DomainConfig {
  id: Domain;
  label: string;
  labelEn: string;
  labelEs: string;
  color: string;
  icon: string;
}

// Alavancas estratégicas (pontos de pressão)
export type LeverType =
  | "price"
  | "cost"
  | "volume"
  | "time"
  | "quality"
  | "process";

export interface Lever {
  type: LeverType;
  label: string;
  impact: "high" | "medium" | "low";
}

// Risco - Alerta de perda ou ameaça vital
export interface Risk {
  id: string;
  title: string;
  description: string;
  severity: "critical" | "high" | "medium";
  timeToBreathe: string; // tempo de fôlego (ex: "15 dias", "2 meses")
  domain: Domain;
  metrics: string[]; // IDs das métricas impactadas
}

// Oportunidade - Alerta de ganho ou potencial
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  potentialProfit: string; // ex: "+R$ 50K/mês"
  confidence: number; // 0-100%
  domain: Domain;
  levers: Lever[];
}

// Diagnóstico técnico (causa raiz)
export interface Diagnosis {
  id: string;
  technicalTerm: string; // termo técnico (ex: "Sales Conversion Rate Decline")
  cause: string; // causa raiz detalhada
  effect: string; // efeito no negócio
  why: string; // por que aconteceu
  dataSources: string[]; // fontes de dados que sustentam
}

// Recomendação da IA (o que fazer)
export interface Recommendation {
  id: string;
  title: string;
  description: string; // passo a passo
  expectedImpact: string; // ex: "+25% na conversão"
  timeframe: string; // ex: "30 dias"
  complexity: "low" | "medium" | "high";
  confidence: number; // 0-100%
  levers: Lever[];
}

// Item do Radar (card acionável completo)
export interface RadarItem {
  id: string;
  type: "risk" | "opportunity";
  priority: PriorityLevel;
  domain: Domain;
  urgency: "immediate" | "short_term" | "medium_term";
  // Entidades hierárquicas
  alert: Risk | Opportunity;
  diagnosis: Diagnosis;
  recommendation: Recommendation;
  // Metadados
  createdAt: string;
  expiresAt?: string;
  status: "active" | "acknowledged" | "in_action_plan" | "resolved";
}

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
  impact: number; // 1-10
  urgency: number; // 1-10
  effort: number; // 1-10
  confidence: number; // 1-10
  calculatedValue: number; // (impact * urgency * confidence) / effort
}

export interface Priority {
  id: string;
  diagnosticId: string;
  title: string;
  explanation: string;
  level: PriorityLevel;
  score: PriorityScore;
  status: "suggested" | "validated" | "dismissed";
  createdAt: string;
}

export interface Action {
  id: string;
  priorityId: string;
  title: string;
  description: string;
  status: "pending" | "in_progress" | "completed" | "blocked";
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
  status: "active" | "completed" | "archived";
  createdAt: string;
}
