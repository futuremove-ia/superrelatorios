import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Database, 
  BarChart3, 
  Lightbulb, 
  Target,
  ListChecks,
  TrendingUp,
  AlertTriangle,
  Zap
} from 'lucide-react';

// Import all domain-specific cards
import { 
  DataFileCard, 
  DataColumnCard 
} from '@/components/cards/data';
import { 
  ReportCard, 
  ReportBlockCard, 
  TemplateCard 
} from '@/components/cards/reports';
import { 
  EnhancedKPICard, 
  DomainMetricsCard 
} from '@/components/cards/metrics';
import { 
  DiagnosticCard, 
  InsightCard 
} from '@/components/cards/insights';
import { 
  OpportunityCard, 
  RiskCard, 
  PriorityCard,
  ChallengeCard,
  LeverCard,
  GoalTrackerCard
} from '@/components/cards/strategy';
import { 
  ActionItemCard, 
  ActionPlanSummaryCard 
} from '@/components/cards/actions';

export function DomainCardsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cards do Domínio</h1>
        <p className="text-muted-foreground mt-2">
          Cards simplificados com variantes compact e default para melhor UX
        </p>
      </div>

      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="data">Dados</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
          <TabsTrigger value="metrics">Métricas</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="strategy">Estratégia</TabsTrigger>
          <TabsTrigger value="actions">Ações</TabsTrigger>
          <TabsTrigger value="library">Biblioteca</TabsTrigger>
        </TabsList>

        {/* Variants Tab - Shows Compact vs Default */}
        <TabsContent value="variants" className="mt-6 space-y-8">
          <div className="grid gap-8">
            {/* PriorityCard Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">PriorityCard - Compact vs Default</h3>
              <p className="text-sm text-muted-foreground">
                O compact variant remove métricas detalhadas e mostra apenas informações essenciais.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;compact&quot;</span>
                  <PriorityCard 
                    priority={{
                      id: '1',
                      title: 'Reduzir Tempo de Onboarding',
                      explanation: 'Clientes abandonam devido à complexidade.',
                      level: 'high',
                      score: { calculatedValue: 72, impact: 9, urgency: 8, effort: 6, confidence: 8 },
                      status: 'suggested',
                      relatedDiagnostic: 'Churn no primeiro mês',
                      suggestedActions: ['Simplificar fluxo', 'Tutorial interativo']
                    }}
                    variant="compact"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;default&quot;</span>
                  <PriorityCard 
                    priority={{
                      id: '2',
                      title: 'Reduzir Tempo de Onboarding',
                      explanation: 'Clientes estão abandonando durante o onboarding devido à complexidade.',
                      level: 'high',
                      score: { calculatedValue: 72, impact: 9, urgency: 8, effort: 6, confidence: 8 },
                      status: 'suggested',
                      relatedDiagnostic: 'Churn no primeiro mês',
                      suggestedActions: ['Simplificar fluxo', 'Tutorial interativo', 'Checklist gamificado']
                    }}
                  />
                </div>
              </div>
            </div>

            {/* RiskCard Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">RiskCard - Compact vs Default</h3>
              <p className="text-sm text-muted-foreground">
                O compact variant simplifica métricas de risco e oculta o plano de mitigação.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;compact&quot;</span>
                  <RiskCard 
                    risk={{
                      id: '1',
                      title: 'Concorrência Agressiva no Mid-Market',
                      description: 'Concorrente X reduziu preços em 30%.',
                      probability: 65,
                      impact: 8,
                      severity: 'high',
                      category: 'commercial',
                      relatedKPIs: ['Churn Rate', 'Win Rate'],
                      mitigationPlan: { actions: ['Análise de pricing'], owner: 'João Silva', dueDate: '2024-04-15' },
                      status: 'identified'
                    }}
                    variant="compact"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;default&quot;</span>
                  <RiskCard 
                    risk={{
                      id: '2',
                      title: 'Concorrência Agressiva no Segmento Mid-Market',
                      description: 'Concorrente X reduziu preços em 30% e está capturando nossa base de clientes.',
                      probability: 65,
                      impact: 8,
                      severity: 'high',
                      category: 'commercial',
                      relatedKPIs: ['Churn Rate', 'Win Rate', 'NPS'],
                      mitigationPlan: { actions: ['Análise de pricing', 'Value proposition review', 'Campanha retenção'], owner: 'João Silva', dueDate: '2024-04-15' },
                      status: 'identified'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ActionItemCard Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ActionItemCard - Compact vs Default</h3>
              <p className="text-sm text-muted-foreground">
                O compact variant foca apenas em status e assignee para listas de ações.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;compact&quot;</span>
                  <ActionItemCard 
                    action={{
                      id: '1',
                      title: 'Implementar novo fluxo de onboarding',
                      description: 'Redesenhar o processo.',
                      status: 'in_progress',
                      priority: 'high',
                      dueDate: '2024-04-15',
                      assignedTo: { name: 'Maria Santos', avatar: '' },
                      estimatedEffort: 40,
                      actualEffort: 16,
                      quickWin: true,
                      dependencies: ['Design review'],
                      relatedPriority: 'Reduzir Tempo de Onboarding',
                      impact: { metric: 'TTV', expected: 40, achieved: 15 }
                    }}
                    variant="compact"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;default&quot;</span>
                  <ActionItemCard 
                    action={{
                      id: '2',
                      title: 'Implementar novo fluxo de onboarding',
                      description: 'Redesenhar o processo de onboarding com foco em reduzir o TTV.',
                      status: 'in_progress',
                      priority: 'high',
                      dueDate: '2024-04-15',
                      assignedTo: { name: 'Maria Santos', avatar: '' },
                      estimatedEffort: 40,
                      actualEffort: 16,
                      quickWin: true,
                      dependencies: ['Design review', 'Stakeholder approval'],
                      relatedPriority: 'Reduzir Tempo de Onboarding',
                      impact: { metric: 'TTV', expected: 40, achieved: 15 }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* EnhancedKPICard Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">EnhancedKPICard - Compact vs Default</h3>
              <p className="text-sm text-muted-foreground">
                O compact variant remove o gauge e sparkline, focando apenas no valor e trend.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;compact&quot;</span>
                  <EnhancedKPICard 
                    kpi={{
                      id: '1',
                      code: 'KPI_FIN_001',
                      title: 'Net Profit Margin',
                      value: 15.8,
                      unit: '%',
                      domain: 'finance',
                      trend: { direction: 'up', percentage: 2.3, period: 'mês anterior' },
                      benchmark: { target: 18, good: 15, warning: 12, current: 'good' },
                      sparklineData: [12.5, 13.2, 12.8, 14.1, 13.9, 15.2, 15.8],
                      lastUpdated: '2024-03-15',
                      dataSource: 'ERP'
                    }}
                    variant="compact"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-muted-foreground font-medium">variant=&quot;default&quot;</span>
                  <EnhancedKPICard 
                    kpi={{
                      id: '2',
                      code: 'KPI_FIN_001',
                      title: 'Net Profit Margin',
                      value: 15.8,
                      unit: '%',
                      domain: 'finance',
                      trend: { direction: 'up', percentage: 2.3, period: 'mês anterior' },
                      benchmark: { target: 18, good: 15, warning: 12, current: 'good' },
                      sparklineData: [12.5, 13.2, 12.8, 14.1, 13.9, 15.2, 15.8],
                      lastUpdated: '2024-03-15',
                      dataSource: 'ERP'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Data Tab */}
        <TabsContent value="data" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">DataFileCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para exibir arquivos de dados com status de validação, mapeamento de colunas e estatísticas.
              </p>
              <DataFileCard 
                file={{
                  id: '1',
                  name: 'vendas_q1_2024.csv',
                  type: 'csv',
                  size: 2457600,
                  rowCount: 15420,
                  columnCount: 12,
                  validationStatus: 'valid',
                  mappedColumns: 10,
                  totalColumns: 12,
                  uploadDate: '2024-03-15T10:30:00Z',
                  source: 'ERP'
                }}
              />
              <DataFileCard 
                file={{
                  id: '2',
                  name: 'clientes.xlsx',
                  type: 'excel',
                  size: 1024000,
                  rowCount: 850,
                  columnCount: 8,
                  validationStatus: 'warning',
                  errors: [{ row: 42, column: 'email', message: 'Email inválido' }],
                  mappedColumns: 6,
                  totalColumns: 8,
                  uploadDate: '2024-03-14T14:20:00Z'
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">DataColumnCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para visualização de colunas individuais com métricas de qualidade e mapeamento.
              </p>
              <DataColumnCard 
                column={{
                  name: 'revenue',
                  type: 'numeric',
                  mappedTo: 'KPI_FIN_001',
                  quality: { completeness: 98, uniqueness: 100, validity: 95 },
                  sampleValues: ['R$ 1.250,00', 'R$ 890,50', 'R$ 3.450,00'],
                  stats: { min: 150, max: 15000, mean: 3250, median: 2800, uniqueCount: 15420 }
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ReportCard</h3>
              <p className="text-sm text-muted-foreground">
                Card rico para exibição de relatórios com preview, status e insights.
              </p>
              <ReportCard 
                report={{
                  id: '1',
                  title: 'Análise de Vendas Q1',
                  subtitle: 'Performance trimestral e projeções',
                  category: 'Financeiro',
                  status: 'completed',
                  blockCount: 8,
                  aiInsights: 5,
                  createdAt: '2024-03-01T10:00:00Z',
                  updatedAt: '2024-03-10T15:30:00Z',
                  dataSourceName: 'vendas_q1_2024.csv',
                  templateName: 'Sales Analysis'
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">TemplateCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para templates de relatórios com match score e KPIs esperados.
              </p>
              <TemplateCard 
                template={{
                  id: '1',
                  name: 'Análise Financeira Completa',
                  code: 'FIN_FULL',
                  industry: 'financeiro',
                  category: 'Financeiro',
                  description: 'Template completo para análise financeira com KPIs de receita, custos e lucratividade.',
                  rating: 4.5,
                  ratingCount: 128,
                  usageCount: 452,
                  tags: ['financeiro', 'kpi', 'dashboard'],
                  expectedKPIs: ['revenue', 'margin', 'ebitda', 'cash_flow'],
                  matchScore: 87,
                  isSystem: true
                }}
                variant="recommendation"
              />
            </div>
          </div>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">EnhancedKPICard</h3>
              <p className="text-sm text-muted-foreground">
                KPI card avançado com sparkline, benchmark gauge e trend indicator.
              </p>
              <EnhancedKPICard 
                kpi={{
                  id: '1',
                  code: 'KPI_FIN_001',
                  title: 'Net Profit Margin',
                  value: 15.8,
                  unit: '%',
                  domain: 'finance',
                  trend: { direction: 'up', percentage: 2.3, period: 'mês anterior' },
                  benchmark: { target: 18, good: 15, warning: 12, current: 'good' },
                  sparklineData: [12.5, 13.2, 12.8, 14.1, 13.9, 15.2, 15.8],
                  lastUpdated: '2024-03-15',
                  dataSource: 'ERP'
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">DomainMetricsCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para visão agregada de métricas por domínio com health score.
              </p>
              <DomainMetricsCard 
                domain={{
                  name: 'Financeiro',
                  icon: TrendingUp,
                  color: 'bg-green-500',
                  metrics: 16,
                  healthScore: 85,
                  criticalCount: 0,
                  trend: 8,
                  status: 'on-track'
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">DiagnosticCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para diagnósticos AI com causas, implicações e severity.
              </p>
              <DiagnosticCard 
                diagnostic={{
                  id: '1',
                  title: 'Churn Rate Elevado',
                  description: 'Taxa de cancelamento acima do benchmark do setor em 23%.',
                  severity: 'high',
                  confidence: 78,
                  causes: [
                    { description: 'Preço 15% acima da concorrência', evidence: 'Comparativo mercado', relatedKPI: 'CAC' },
                    { description: 'Tempo de resposta do suporte > 24h', evidence: 'Tickets abertos', relatedKPI: 'CSAT' }
                  ],
                  implications: [
                    'Perda estimada de R$ 450K ARR',
                    'Impacto negativo no NRR',
                    'Aumento do CAC para repor clientes'
                  ],
                  detectedAt: '2024-03-15T10:30:00Z',
                  affectedDomains: ['Comercial', 'Suporte']
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">InsightCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para insights AI com confidence score e dados de suporte.
              </p>
              <InsightCard 
                insight={{
                  id: '1',
                  type: 'trend',
                  title: 'Crescimento Acelerado no Segmento Enterprise',
                  description: 'Detectamos um aumento de 34% no fechamento de deals enterprise nas últimas 4 semanas.',
                  confidence: 85,
                  supportingData: [
                    { metric: 'Deals fechados', value: 42, change: 34 },
                    { metric: 'Ticket médio', value: 45000, change: 12 }
                  ],
                  chartType: 'line',
                  generatedAt: '2024-03-15T10:30:00Z',
                  isNew: true
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Strategy Tab */}
        <TabsContent value="strategy" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">OpportunityCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para oportunidades identificadas com impacto financeiro e esforço.
              </p>
              <OpportunityCard 
                opportunity={{
                  id: '1',
                  title: 'Upsell para Clientes SMB',
                  description: 'Identificamos 45 clientes SMB com potencial para upgrade para plano Pro.',
                  category: 'revenue',
                  impact: { financial: 180000, percentage: 25, metric: 'MRR' },
                  effort: 'medium',
                  confidence: 82,
                  quickWin: true,
                  relatedActions: ['Campanha email', 'Oferta especial', 'Demo produto'],
                  timeframe: '30 dias'
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">RiskCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para riscos com probabilidade, impacto e plano de mitigação.
              </p>
              <RiskCard 
                risk={{
                  id: '1',
                  title: 'Concorrência Agressiva no Segmento Mid-Market',
                  description: 'Concorrente X reduziu preços em 30% e está capturando nossa base de clientes.',
                  probability: 65,
                  impact: 8,
                  severity: 'high',
                  category: 'commercial',
                  relatedKPIs: ['Churn Rate', 'Win Rate', 'NPS'],
                  mitigationPlan: {
                    actions: ['Análise de pricing', 'Value proposition review', 'Campanha retenção'],
                    owner: 'João Silva',
                    dueDate: '2024-04-15'
                  },
                  status: 'identified'
                }}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">PriorityCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para prioridades com score breakdown (impact x urgency / effort).
              </p>
              <PriorityCard 
                priority={{
                  id: '1',
                  title: 'Reduzir Tempo de Onboarding',
                  explanation: 'Clientes estão abandonando durante o onboarding devido à complexidade.',
                  level: 'high',
                  score: {
                    calculatedValue: 72,
                    impact: 9,
                    urgency: 8,
                    effort: 6,
                    confidence: 8
                  },
                  status: 'suggested',
                  relatedDiagnostic: 'Churn no primeiro mês',
                  suggestedActions: ['Simplificar fluxo', 'Tutorial interativo', 'Checklist gamificado']
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Actions Tab */}
        <TabsContent value="actions" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ActionItemCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para itens de ação com status, prioridade, assignee e tracking de esforço.
              </p>
              <ActionItemCard 
                action={{
                  id: '1',
                  title: 'Implementar novo fluxo de onboarding',
                  description: 'Redesenhar o processo de onboarding com foco em reduzir o TTV.',
                  status: 'in_progress',
                  priority: 'high',
                  dueDate: '2024-04-15',
                  assignedTo: { name: 'Maria Santos', avatar: '' },
                  estimatedEffort: 40,
                  actualEffort: 16,
                  quickWin: true,
                  dependencies: ['Design review', 'Stakeholder approval'],
                  relatedPriority: 'Reduzir Tempo de Onboarding',
                  impact: { metric: 'TTV', expected: 40, achieved: 15 }
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ActionPlanSummaryCard</h3>
              <p className="text-sm text-muted-foreground">
                Card de resumo do plano de ação com progresso geral e impacto estimado.
              </p>
              <ActionPlanSummaryCard 
                plan={{
                  id: '1',
                  title: 'Redução de Churn - Q1 2024',
                  description: 'Plano estratégico para reduzir a taxa de churn em 15% no primeiro trimestre.',
                  totalActions: 12,
                  completedActions: 5,
                  inProgressActions: 4,
                  blockedActions: 0,
                  totalEstimatedImpact: 450000,
                  achievedImpact: 125000,
                  status: 'active',
                  lastActivity: '2024-03-15T10:30:00Z',
                  startDate: '2024-01-15',
                  endDate: '2024-03-31'
                }}
              />
            </div>
          </div>
        </TabsContent>

        {/* Library Tab */}
        <TabsContent value="library" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ChallengeCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para desafios da biblioteca estratégica com sintomas e KPIs relacionados.
              </p>
              <ChallengeCard 
                challenge={{
                  id: '1',
                  code: 'CH_SAL_001',
                  title: 'Baixa Conversão de Leads',
                  description: 'Taxa de conversão de leads para oportunidades abaixo do benchmark.',
                  domain: 'sales',
                  severity: 4,
                  symptoms: [
                    'MQL para SQL < 15%',
                    'Tempo de resposta > 24h',
                    'Lead scoring inefetivo'
                  ],
                  relatedKPIs: [
                    { code: 'KPI_SAL_001', name: 'Lead Conversion Rate', currentValue: 12, threshold: 20 },
                    { code: 'KPI_SAL_002', name: 'Time to First Contact', currentValue: 28, threshold: 24 }
                  ]
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">LeverCard</h3>
              <p className="text-sm text-muted-foreground">
                Card para alavancas estratégicas com impacto, complexidade e ações incluídas.
              </p>
              <LeverCard 
                lever={{
                  id: '1',
                  code: 'LEV_FIN_001',
                  title: 'Otimização de Pricing',
                  description: 'Revisão e ajuste de estratégia de precificação baseada em valor.',
                  category: 'financeiro',
                  impactLevel: 'high',
                  complexity: 'medium',
                  typicalTimeframeDays: 60,
                  targetKPI: { code: 'KPI_FIN_001', name: 'Gross Margin', expectedImprovement: 8 },
                  actions: [
                    { id: '1', title: 'Análise de elasticidade', priorityScore: 9 },
                    { id: '2', title: 'Benchmark competitivo', priorityScore: 8 },
                    { id: '3', title: 'Teste A/B de novos preços', priorityScore: 8 }
                  ],
                  isActive: true
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">GoalTrackerCard</h3>
            <p className="text-sm text-muted-foreground">
              Card de acompanhamento de metas com timeline, progresso e histórico.
            </p>
            <GoalTrackerCard 
              goal={{
                id: '1',
                code: 'G_CHURN_001',
                title: 'Reduzir Churn em 15%',
                description: 'Reduzir a taxa mensal de churn de 4.2% para 3.6%.',
                targetType: 'decrease',
                progress: 67,
                suggestedTimeframeDays: 90,
                startedAt: '2024-01-15T10:00:00Z',
                history: [
                  { date: '2024-01-15', progress: 0 },
                  { date: '2024-02-01', progress: 15 },
                  { date: '2024-02-15', progress: 32 },
                  { date: '2024-03-01', progress: 48 },
                  { date: '2024-03-15', progress: 67 }
                ]
              }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DomainCardsSection;
