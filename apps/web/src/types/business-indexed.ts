/**
 * SuperRelatórios v2.0 Business Domain Types - INDEXED LIBRARY VERSION
 * Todos os textos são referências a bibliotecas - não há textos livres
 * Isso garante consistência, i18n e analytics precisos
 */

export type PriorityLevel = "high" | "medium" | "low";

// Domínios de negócio — Taxonomia PME/SMB v2.1
// 8 domínios ativos + 1 legado (sales → migrado para commercial)
export type Domain =
  | "finance" // Financeiro: caixa, runway, lucro
  | "commercial" // Comercial: vendas, pipeline, proposta
  | "marketing" // Marketing: aquisição, marca, conteúdo
  | "operations" // Operações: processos, eficiência, cadeia
  | "people" // Pessoas: RH, cultura, retenção de talentos
  | "strategy" // Estratégia: posicionamento, crescimento
  | "technology" // Tecnologia: stack, automação, dados [NOVO]
  | "customers" // Clientes: CX, churn, NPS, suporte [NOVO]
  | "sales"; // Legado: migrar para 'commercial'

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

// ============================================================
// BIBLIOTECAS INDEXADAS (REFERÊNCIAS)
// ============================================================

/** Biblioteca de Diagnósticos - Cada diagnóstico é um código único */
export interface LibraryDiagnosis {
  id: string;
  code: string; // 'CONVERSAO_VENDAS_QUEDA'
  technicalTerm: string; // 'Queda na Taxa de Conversão'
  technicalTermEn: string; // 'Sales Conversion Rate Decline'
  technicalTermEs: string; // 'Caída en Tasa de Conversión'

  // Causa-raiz (padrão)
  cause: string;
  causeEn: string;
  causeEs: string;

  // Efeito no negócio
  effect: string;
  effectEn: string;
  effectEs: string;

  // Explicação do porquê
  why: string;
  whyEn: string;
  whyEs: string;

  // Ligações
  challengeCode: string;
  domain: Domain;
  severityDefault: "low" | "medium" | "high" | "critical";

  // Detecção
  symptomCodes: string[]; // ['VISITAS_ALTA', 'CONVERSAO_BAIXA']

  // Alavancas sugeridas
  suggestedLeverCodes: string[]; // ['OTIMIZAR_LANDING', 'REDUZIR_FORM']

  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/** Biblioteca de Impactos - Padroniza "+25% na conversão" */
export interface LibraryImpact {
  id: string;
  code: string; // 'AUMENTO_25_CONVERSAO'

  // Descrições multilíngue
  description: string; // '+25% na conversão'
  descriptionEn: string; // '+25% conversion'
  descriptionEs: string; // '+25% en conversión'

  // Métrica alvo
  targetKpiCode: string;

  // Valor estruturado
  impactType: "percentage" | "absolute" | "currency";
  impactValue: number; // 25.00 para +25%
  impactDirection: "increase" | "decrease";

  // Categoria
  category: "revenue" | "cost" | "efficiency" | "quality";

  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/** Biblioteca de Timeframes - Padroniza "30 dias" */
export interface LibraryTimeframe {
  id: string;
  code: string; // 'PRAZO_30_DIAS'

  // Labels
  label: string; // '30 dias'
  labelEn: string; // '30 days'
  labelEs: string; // '30 días'

  // Valor em dias
  days: number;

  // Categoria
  category: "immediate" | "short_term" | "medium_term" | "long_term";

  // Range
  minDays?: number;
  maxDays?: number;

  isActive: boolean;
  createdAt: string;
}

/** Biblioteca de Complexidades - Padroniza 'low'|'medium'|'high' */
export interface LibraryComplexity {
  id: string;
  code: string; // 'BAIXA', 'MEDIA', 'ALTA'

  label: string; // 'Baixa'
  labelEn: string; // 'Low'
  labelEs: string; // 'Baja'

  description: string; // 'Implementação simples...'
  descriptionEn: string;
  descriptionEs: string;

  typicalEffortHours: number; // 4, 16, 40 horas

  isActive: boolean;
  createdAt: string;
}

// ============================================================
// ENTIDADES DO RADAR (AGORA COM REFERÊNCIAS INDEXADAS)
// ============================================================

/** Risco - Alerta de perda ou ameaça vital */
export interface Risk {
  id: string;
  title: string; // Pode ser custom ou da biblioteca
  severity: "critical" | "high" | "medium";
  timeToBreathe: string; // "15 dias" - calculado do timeframe_code
  domain: Domain;
  metrics: string[]; // IDs/codes das métricas impactadas
}

/** Oportunidade - Alerta de ganho ou potencial */
export interface Opportunity {
  id: string;
  title: string;
  potentialProfit: string; // ex: "+R$ 50K/mês" - vem do library_impact
  confidence: number; // 0-100%
  domain: Domain;
  levers: Lever[];
}

/** Diagnóstico técnico (causa raiz) - AGORA INDEXADO */
export interface Diagnosis {
  id: string;
  code: string; // 'CONVERSAO_VENDAS_QUEDA'

  // Tudo vem da biblioteca
  technicalTerm: string;
  cause: string;
  effect: string;
  why: string;

  // Notas personalizadas (apenas para nuances)
  customNotes?: string;

  // Referência à biblioteca
  libraryRef: LibraryDiagnosis;
}

/** Recomendação da IA (o que fazer) - AGORA INDEXADA */
export interface Recommendation {
  id: string;

  // Referências à biblioteca
  actionCode: string; // Código da library_actions
  impactCode: string; // Código da library_impacts
  timeframeCode: string; // Código da library_timeframes
  complexityCode: string; // Código da library_complexities

  // Dados enriquecidos (vindos das bibliotecas)
  title: string; // Da library_actions
  description: string; // Da library_actions
  expectedImpact: string; // Da library_impacts
  timeframe: string; // Da library_timeframes
  complexity: "low" | "medium" | "high"; // Da library_complexities

  confidence: number; // 0-100%
  levers: Lever[];

  // Referências completas (para uso no frontend)
  libraryImpact: LibraryImpact;
  libraryTimeframe: LibraryTimeframe;
  libraryComplexity: LibraryComplexity;
}

/** Item do Radar (card acionável completo) - AGORA INDEXADO */
export interface RadarItem {
  id: string;
  type: "risk" | "opportunity";
  priority: PriorityLevel;
  domain: Domain;
  urgency: "immediate" | "short_term" | "medium_term";

  // Entidades hierárquicas (agora com códigos indexados)
  alert: Risk | Opportunity;
  diagnosis: Diagnosis;
  recommendation: Recommendation;

  // Códigos indexados (para persistência)
  diagnosisCode: string;
  impactCode: string;
  timeframeCode: string;
  complexityCode: string;

  // Metadados
  createdAt: string;
  expiresAt?: string;
  status: "active" | "acknowledged" | "in_action_plan" | "resolved";

  // Alavancas sugeridas (códigos)
  suggestedLeverCodes: string[];

  // Métricas vinculadas
  linkedMetricCodes: string[];

  // Confiança da IA
  aiConfidenceScore: number;
}

// ============================================================
// TIPOS LEGADOS (mantidos para compatibilidade)
// ============================================================

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

// ============================================================
// DTOs PARA API
// ============================================================

/** DTO para criar Radar Item (usando códigos indexados) */
export interface CreateRadarItemDTO {
  organizationId: string;
  type: "risk" | "opportunity";
  title: string;
  severity: "critical" | "high" | "medium";
  domain: Domain;

  // Referências obrigatórias
  diagnosisCode: string;
  impactCode: string;
  timeframeCode: string;
  complexityCode: string;

  // Opcionais
  urgencyCode?: string;
  detectedInReportId?: string;
  suggestedLeverCodes?: string[];
  linkedKpiCodes?: string[];
  customNotes?: string;
  aiConfidenceScore?: number;
}

/** DTO para resposta da API (com dados enriquecidos da biblioteca) */
export interface RadarItemResponse {
  id: string;
  type: "risk" | "opportunity";
  priority: PriorityLevel;
  domain: Domain;
  urgency: LibraryTimeframe; // Objeto completo
  alert: Risk | Opportunity;
  diagnosis: Diagnosis; // Com libraryRef completo
  recommendation: Recommendation; // Com referências completas
  status: string;
  createdAt: string;
  aiConfidenceScore: number;
}

// ============================================================
// DTOs & TIPOS MIGRADOS (Frontend)
// ============================================================

export interface DashboardSummary {
  active_items_count: number;
  critical_count: number;
  high_count: number;
  risks_count: number;
  opportunities_count: number;
  in_progress_count: number;
  latest_kpis: Record<
    string,
    { value: number; delta?: number; period: string }
  > | null;
}

export interface UpdateRadarItemStatusDTO {
  status:
    | "detected"
    | "acknowledged"
    | "in_progress"
    | "resolved"
    | "dismissed";
  customNotes?: string;
  resolutionSummary?: string;
  resolutionImpactValue?: number;
}

export interface RadarItemEnriched {
  id: string;
  organizationId: string;
  type: "risk" | "opportunity";
  title: string;
  status:
    | "detected"
    | "acknowledged"
    | "in_progress"
    | "resolved"
    | "dismissed";
  severity: "critical" | "high" | "medium" | "low";
  priorityScore: number;
  domain:
    | "finance"
    | "sales"
    | "marketing"
    | "operations"
    | "people"
    | "strategy"
    | "commercial";
  diagnosisCode: string;
  diagnosisTerm: string;
  diagnosisCause: string;
  diagnosisEffect: string;
  diagnosisWhy: string;
  impactCode: string;
  impactDescription: string;
  impactValue: number;
  impactType: string;
  impactDirection: string;
  impactCategory: string;
  timeframeCode: string;
  timeframeLabel: string;
  timeframeDays: number;
  timeframeCategory: string;
  complexityCode: string;
  complexityLabel: string;
  typicalEffortHours: number;
  aiConfidenceScore: number;
  aiModelVersion?: string;
  detectedAt: string;
  acknowledgedAt?: string;
  resolvedAt?: string;
  expiresAt?: string;
  suggestedLeverCodes: string[];
  linkedKpiCodes: string[];
}
