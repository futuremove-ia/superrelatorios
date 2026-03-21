import { Diagnostic, Priority, Action, ActionPlan } from '@/types/business';

export const mockDiagnostics: Diagnostic[] = [
  {
    id: 'diag-001',
    reportId: 'rep-001',
    title: 'Churn em Clientes de Médio Porte',
    description: 'Aumento de 15% no cancelamento de clientes com MRR entre R$ 500 e R$ 2000 nos últimos 3 meses.',
    causes: [
      'Falta de onboarding proativo para o plano intermediário',
      'Gap de funcionalidade comparado a concorrentes diretos',
      'Demora no atendimento de tickets críticos'
    ],
    implications: [
      'Perda estimada de R$ 12k de faturamento recorrente mensal',
      'Impacto negativo na confiança da marca',
      'Aumento do CAC global para compensar a perda'
    ],
    createdAt: new Date().toISOString()
  }
];

export const mockPriorities: Priority[] = [
  {
    id: 'prio-001',
    diagnosticId: 'diag-001',
    title: 'Automatizar Onboarding Intermediário',
    explanation: 'A automação reduzirá o tempo de primeiro valor para novos clientes do plano médio, atacando a causa principal do churn inicial.',
    level: 'high',
    score: {
      impact: 9,
      urgency: 8,
      effort: 4,
      confidence: 7,
      calculatedValue: 126 // (9 * 8 * 7) / 4 = 504 / 4 = 126
    },
    status: 'suggested',
    createdAt: new Date().toISOString()
  },
  {
    id: 'prio-002',
    diagnosticId: 'diag-001',
    title: 'Campanha de Reativação Black Friday',
    explanation: 'Clientes inativos há mais de 30 dias após a primeira compra possuem 80% de chance de churn permanente.',
    level: 'high',
    score: {
      impact: 8,
      urgency: 9,
      effort: 3,
      confidence: 8,
      calculatedValue: 192
    },
    status: 'suggested',
    createdAt: new Date().toISOString()
  },
  {
    id: 'prio-003',
    diagnosticId: 'diag-001',
    title: 'Otimização de Checkout Mobile',
    explanation: 'A taxa de abandono no mobile é 40% superior ao desktop. Pequenos ajustes no tempo de carregamento podem recuperar R$ 5k/mês.',
    level: 'medium',
    score: {
      impact: 7,
      urgency: 6,
      effort: 5,
      confidence: 9,
      calculatedValue: 75
    },
    status: 'validated',
    createdAt: new Date().toISOString()
  }
];

export const mockActions: Action[] = [
  {
    id: 'act-001',
    priorityId: 'prio-001',
    title: 'Desenhar Fluxo de E-mails de Onboarding',
    description: 'Criar sequência de 5 e-mails focados em ativação de funcionalidades chave.',
    status: 'in_progress',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'act-002',
    priorityId: 'prio-003',
    title: 'Reduzir tamanho das imagens da Home',
    description: 'Comprimir ativos visuais para melhorar o LCP em dispositivos mobile.',
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'act-003',
    priorityId: 'prio-003',
    title: 'Remover scripts de terceiros não utilizados',
    description: 'Limpeza de tags de rastreamento legadas que atrasam a interatividade.',
    status: 'completed',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const mockActionPlan: ActionPlan = {
  id: 'plan-001',
  title: 'Retenção Q2 - Clientes Médios',
  description: 'Plano focado em estabilizar o churn da base intermediária.',
  actions: mockActions,
  status: 'active',
  createdAt: new Date().toISOString()
};
