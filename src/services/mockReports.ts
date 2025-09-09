export interface Report {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'completed' | 'shared';
  thumbnail?: string;
  description: string;
  template: string;
  data: any;
}

export interface ReportTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  structure: {
    title: string;
    sections: string[];
  };
}

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
    description: 'Relatório completo de performance do Q4 2024 com análises de vendas, custos e projeções.',
    template: 'executive-quarterly',
    data: {
      revenue: 450000,
      growth: 15.5,
      customers: 1250
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
    template: 'sales-monthly',
    data: {
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
    template: 'financial-monthly',
    data: {
      revenue: 380000,
      expenses: 240000,
      profit: 140000
    }
  }
];

// Mock data for templates
export const mockTemplates: ReportTemplate[] = [
  {
    id: 'executive-quarterly',
    name: 'Relatório Executivo Trimestral',
    category: 'Executivo',
    description: 'Relatório completo para apresentação à diretoria com KPIs principais',
    icon: 'TrendingUp',
    structure: {
      title: 'Relatório Executivo',
      sections: ['Resumo Executivo', 'Destaques', 'Análise de Performance', 'Projeções', 'Próximos Passos']
    }
  },
  {
    id: 'sales-monthly',
    name: 'Relatório de Vendas Mensal',
    category: 'Vendas',
    description: 'Análise detalhada da performance comercial mensal',
    icon: 'ShoppingCart',
    structure: {
      title: 'Relatório de Vendas',
      sections: ['Resumo Executivo', 'Metas vs Realizado', 'Pipeline', 'Análise Regional']
    }
  },
  {
    id: 'financial-monthly',
    name: 'Relatório Financeiro Mensal',
    category: 'Financeiro',
    description: 'Balanço financeiro e análise de resultados mensais',
    icon: 'DollarSign',
    structure: {
      title: 'Relatório Financeiro',
      sections: ['Resumo Executivo', 'Receitas', 'Despesas', 'Fluxo de Caixa', 'Indicadores']
    }
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
      template: data.template || 'basic',
      data: data.data || {}
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

  deleteReport: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    // In a real app, this would make an API call
  }
};