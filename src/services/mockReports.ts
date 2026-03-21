import { Report, ReportTemplate, ReportBlock } from '@/types/reports';
import { TrendingUp, ShoppingCart, DollarSign, Activity, Users } from 'lucide-react';

// Help helper for icons if needed (mock icons as strings for now or compatible type)

// Mock data for reports
export const mockReports: Report[] = [
  {
    id: '1',
    title: 'Relatório Executivo Q4 2024',
    subtitle: 'Análise trimestral de performance',
    category: 'Executivo',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    status: 'completed',
    description: 'Relatório completo de performance do Q4 2024.',
    templateId: 'executive-strategic',
    blocks: [
      { id: '1-1', type: 'HERO', layout: { w: 12 }, content: { title: 'Performance Q4', body: 'O quarto trimestre apresentou um crescimento sólido de faturamento, impulsionado pela Black Friday e campanhas de fim de ano.', settings: {} } },
      { id: '1-2', type: 'KPI_GRID', layout: { w: 12 }, content: { title: 'Principais Indicadores', settings: { columns: 3, trends: { 'Faturamento': 18, 'Novos Clientes': 12, 'CAC': -8 } }, data: { 'Faturamento': 'R$ 450.000', 'Novos Clientes': '1.240', 'CAC': 'R$ 45,20' } } },
      { id: '1-3', type: 'CHART', layout: { w: 12 }, content: { 
          title: 'Distribuição de Faturamento Mensal', 
          settings: { chartType: 'bar', height: 300 },
          data: [
            { name: 'Out', value: 120000 },
            { name: 'Nov', value: 185000 },
            { name: 'Dez', value: 145000 },
          ]
        } 
      },
      { id: '1-4', type: 'AI_INSIGHT', layout: { w: 12 }, content: { title: 'Oportunidade Detectada', body: 'Seu faturamento em Novembro foi 54% acima da média. Analisando o comportamento, os clientes que compraram na Black Friday possuem um LTV 20% maior. Vale a pena criar uma campanha de retenção específica para este grupo.', settings: {} } }
    ],
    rawData: { 
      revenue: 450000, 
      growth: 15.5, 
      customers: 1250,
      diagnostic: {
        diagnostic: {
          title: 'Retenção de Clientes Black Friday',
          description: 'Clientes adquiridos durante a Black Friday possuem alto LTV mas baixa taxa de segunda compra (re-purchase).',
          causes: [
            'Falta de oferta segmentada pós-evento',
            'Comportamento oportunista de descontos'
          ],
          implications: [
            'Churn elevado no primeiro trimestre',
            'Desperdício de investimento em aquisição (CAC)'
          ]
        },
        suggestedPriority: {
          title: 'Campanha de Retenção Q1',
          explanation: 'Criar uma oferta de reativação específica para o grupo Black Friday antes do final de Janeiro.',
          level: 'high',
          score: {
            impact: 8,
            urgency: 9,
            effort: 3,
            confidence: 8,
            calculatedValue: 192
          }
        }
      }
    }
  },
  {
    id: '2',
    title: 'Análise de Vendas - Janeiro',
    category: 'Vendas',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-12',
    status: 'draft',
    description: 'Relatório mensal de performance de vendas com detalhamento por região e produto.',
    templateId: 'sales-monthly',
    blocks: [],
    rawData: {
      sales: 125000,
      deals: 45,
      conversion: 8.2
    }
  },
  {
    id: '3',
    title: 'Relatório Financeiro - Dezembro',
    category: 'Financeiro',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-08',
    status: 'shared',
    description: 'Balanço financeiro completo do mês de dezembro com análises de receitas e despesas.',
    templateId: 'financial-monthly',
    blocks: [],
    rawData: {
      revenue: 380000,
      expenses: 240000,
      profit: 140000
    }
  }
];

// Mock data for templates
export const mockTemplates: ReportTemplate[] = [
  {
    id: 'executive-strategic',
    name: 'Relatório Executivo Estratégico',
    category: 'Executivo',
    description: 'Visão holística do negócio com KPIs críticos e análise de IA.',
    icon: 'TrendingUp',
    defaultBlocks: [
      { id: 'b1', type: 'HERO', layout: { w: 12 }, content: { title: 'Resumo Executivo', body: 'Análise consolidada da saúde operacional e financeira.', settings: {} } },
      { id: 'b2', type: 'KPI_GRID', layout: { w: 12 }, content: { title: 'Métricas de Performance', settings: { columns: 3, trends: { 'Receita': 12, 'Clientes': 5, 'Margem': -2 } }, data: { 'Receita': 'R$ 1.2M', 'Clientes': '450', 'Margem': '24%' } } },
      { id: 'b3', type: 'AI_INSIGHT', layout: { w: 12 }, content: { title: 'Análise Preditiva IA', body: 'Detectamos uma tendência de crescimento sustentável nos canais digitais. Recomendamos realocar 15% do orçamento offline para otimizar o ROI no próximo trimestre.', settings: { variant: 'premium' } } },
      { id: 'b4', type: 'CHART', layout: { w: 12 }, content: { 
          title: 'Histórico de Faturamento', 
          description: 'Evolução mensal dos últimos 6 meses',
          settings: { chartType: 'area', height: 350 },
          data: [
            { name: 'Jul', value: 4000 },
            { name: 'Ago', value: 3000 },
            { name: 'Set', value: 2000 },
            { name: 'Out', value: 2780 },
            { name: 'Nov', value: 1890 },
            { name: 'Dez', value: 2390 },
          ]
        } 
      },
      { id: 'b5', type: 'ACTION_PLAN', layout: { w: 12 }, content: { title: 'Plano de Ação Estratégico', settings: {}, data: [
        'Aumentar investimento em SEO para o funil de topo',
        'Contratar 2 novos analistas para o time de CS',
        'Revisar custos de infraestrutura em cloud'
      ] } }
    ]
  },
  {
    id: 'financial-standard',
    name: 'Dashboard Financeiro',
    category: 'Financeiro',
    description: 'Análise de fluxo de caixa, DRE e indicadores de liquidez.',
    icon: 'DollarSign',
    defaultBlocks: [
      { id: 'f1', type: 'HERO', layout: { w: 12 }, content: { title: 'Balanço Geral', settings: {} } },
      { id: 'f2', type: 'KPI_GRID', layout: { w: 12 }, content: { title: 'Fluxo de Caixa', settings: { columns: 2 } } },
      { id: 'f3', type: 'TABLE', layout: { w: 12 }, content: { title: 'Detalhamento de Despesas', settings: {} } }
    ]
  },
  {
    id: 'marketing-conversion',
    name: 'Funil de Marketing & Conversão',
    category: 'Marketing',
    description: 'Performance de canais, ROAS e eficiência do funil de vendas.',
    icon: 'Megaphone',
    defaultBlocks: [
      { id: 'm1', type: 'HERO', layout: { w: 12 }, content: { title: 'Performance de Marketing', body: 'Análise detalhada do retorno sobre investimento em mídia e conversão por canal.', settings: {} } },
      { id: 'm2', type: 'KPI_GRID', layout: { w: 12 }, content: { title: 'Métricas de Aquisição', settings: { columns: 3 }, data: { 'CPA': 'R$ 12,50', 'ROAS': '4.5x', 'Tráfego': '45.2k' } } },
      { id: 'm3', type: 'CHART_DONNUT', layout: { w: 12 }, content: { 
          title: 'Origem de Tráfego', 
          settings: { height: 300 },
          data: [
            { name: 'Google Ads', value: 4500 },
            { name: 'Meta Ads', value: 3200 },
            { name: 'Orgânico', value: 2100 },
            { name: 'E-mail', value: 800 },
          ]
        } 
      },
      { id: 'm4', type: 'CALLOUT', layout: { w: 12 }, content: { title: 'Insight de Canal', body: 'O canal Meta Ads apresentou o menor CPA do período. Recomendamos aumentar o orçamento em 20% para a próxima semana.', settings: { variant: 'insight' } } }
    ]
  },
  {
    id: 'hr-people-analytics',
    name: 'People Analytics & RH',
    category: 'RH',
    description: 'Indicadores de retenção, satisfação (eNPS) e evolução do time.',
    icon: 'Users',
    defaultBlocks: [
      { id: 'h1', type: 'HERO', layout: { w: 12 }, content: { title: 'Diagnóstico de Capital Humano', body: 'Visão geral da saúde organizacional e métricas de retenção.', settings: {} } },
      { id: 'h2', type: 'KPI_GRID', layout: { w: 12 }, content: { title: 'Indicadores Pessoas', settings: { columns: 3 }, data: { 'Turnover': '2.1%', 'eNPS': '74', 'Headcount': '42' } } },
      { id: 'h3', type: 'BENCHMARK_COMPARISON', layout: { w: 12 }, content: { 
          title: 'Benchmark de Satisfação', 
          settings: {},
          data: [
            { label: 'eNPS', value: 74, benchmark: 70, percent: 105 },
            { label: 'Retenção', value: 97.9, benchmark: 95, percent: 103 },
          ]
        } 
      },
      { id: 'h4', type: 'MARKDOWN', layout: { w: 12 }, content: { title: 'Resumo Qualitativo', body: 'O clima organizacional permanece estável. O principal motivo de saída relatado nas entrevistas de desligamento foi a busca por novos desafios técnicos.', settings: {} } }
    ]
  },
  {
    id: 'ops-efficiency',
    name: 'Eficiência Operacional & Logística',
    category: 'Operações',
    description: 'Monitoramento de prazos, qualidade e custos logísticos.',
    icon: 'Activity',
    defaultBlocks: [
      { id: 'o1', type: 'HERO', layout: { w: 12 }, content: { title: 'Monitor de Operações', body: 'Análise de produtividade e eficiência da cadeia logística.', settings: {} } },
      { id: 'o2', type: 'KPI_GRID', layout: { w: 12 }, content: { title: 'KPIs Operacionais', settings: { columns: 3 }, data: { 'OTIF': '94%', 'Lead Time': '4.2 dias', 'Custo Log.': 'R$ 15,2k' } } },
      { id: 'o3', type: 'CHART_BAR_HORIZONTAL', layout: { w: 12 }, content: { 
          title: 'Atrasos por Transportadora', 
          settings: { height: 350 },
          data: [
            { name: 'Transportadora A', value: 12 },
            { name: 'Transportadora B', value: 45 },
            { name: 'Transportadora C', value: 28 },
            { name: 'Correios', value: 18 },
          ]
        } 
      }
    ]
  }
];

// Service functions
export const reportsService = {
  getAllReports: async (): Promise<Report[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockReports;
  },

  getReportById: async (id: string): Promise<Report | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockReports.find(report => report.id === id) || null;
  },

  getTemplates: async (): Promise<ReportTemplate[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockTemplates;
  },

  createReport: async (data: Partial<Report>): Promise<Report> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const newReport: Report = {
      id: Date.now().toString(),
      title: data.title || 'Novo Relatório',
      category: data.category || 'Geral',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      status: 'draft',
      description: data.description || '',
      templateId: data.templateId || 'basic',
      blocks: data.blocks || [],
      rawData: data.rawData || {}
    };
    return newReport;
  },

  updateReport: async (id: string, data: Partial<Report>): Promise<Report> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    const existingReport = mockReports.find(r => r.id === id);
    if (!existingReport) throw new Error('Report not found');
    
    return {
      ...existingReport,
      ...data,
      updatedAt: new Date().toISOString().split('T')[0]
    };
  },

  deleteReport: async (_id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    // In a real app, this would make an API call
  }
};