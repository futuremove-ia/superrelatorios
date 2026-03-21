import { ExtractedKPI } from './kpiExtractionService';

/**
 * KPI da biblioteca estratégica
 */
export interface StrategyKPI {
  code: string;
  title: string;
  description: string;
  calculationFormula: string;
  unit: string;
  domain: 'finance' | 'marketing' | 'sales' | 'ops';
  severity?: {
    critical: { min: number; max: number };
    warning: { min: number; max: number };
    good: { min: number; max: number };
  };
}

/**
 * Desafio estratégico da biblioteca
 */
export interface StrategyChallenge {
  code: string;
  title: string;
  description: string;
  domain: string;
  severity: number;
  symptoms: string[];
  relatedKpiCodes: string[];
  mainKpi: string;
  thresholds: {
    critical: { min: number; max: number };
    warning: { min: number; max: number };
    good: { min: number; max: number };
  };
}

/**
 * Contexto de negócio detectado
 */
export interface BusinessContext {
  domain: 'finance' | 'marketing' | 'sales' | 'ops' | 'general';
  industry?: string;
  companySize?: 'small' | 'medium' | 'large';
  dataCharacteristics: {
    hasFinancialData: boolean;
    hasSalesData: boolean;
    hasOperationalData: boolean;
    hasMarketingData: boolean;
  };
}

/**
 * Serviço para conectar a biblioteca estratégica com a IA
 */
export class StrategyLibraryService {
  private static instance: StrategyLibraryService;
  
  // Cache de KPIs e desafios (simulado - viria do banco)
  private kpiCache: Map<string, StrategyKPI> = new Map();
  private challengeCache: Map<string, StrategyChallenge> = new Map();

  static getInstance(): StrategyLibraryService {
    if (!StrategyLibraryService.instance) {
      StrategyLibraryService.instance = new StrategyLibraryService();
    }
    return StrategyLibraryService.instance;
  }

  constructor() {
    this.initializeLibrary();
  }

  /**
   * Inicializa a biblioteca com dados estratégicos
   */
  private initializeLibrary() {
    // KPIs Financeiros
    this.addKPI({
      code: 'NET_PROFIT_MARGIN',
      title: 'Margem de Lucro Líquida',
      description: '(Lucro Líquido / Receita Bruta) * 100 - A métrica definitiva de saúde do negócio',
      calculationFormula: '(Lucro Líquido / Receita Bruta) * 100',
      unit: '%',
      domain: 'finance',
      severity: {
        critical: { min: 0, max: 5 },
        warning: { min: 5, max: 10 },
        good: { min: 10, max: 100 }
      }
    });

    this.addKPI({
      code: 'CASH_BURN_RATE',
      title: 'Taxa de Queima de Caixa',
      description: 'Média de saídas de caixa operacionais negativas - Velocidade de consumo de capital',
      calculationFormula: 'SUM(Saídas Operacionais Negativas)',
      unit: 'R$',
      domain: 'finance',
      severity: {
        critical: { min: 10000, max: Infinity },
        warning: { min: 5000, max: 10000 },
        good: { min: 0, max: 5000 }
      }
    });

    this.addKPI({
      code: 'RUNWAY',
      title: 'Runway (Meses de Sobrevivência)',
      description: 'Saldo Total de Caixa / Burn Rate - Meses de sobrevivência sem nova receita',
      calculationFormula: 'Saldo Caixa / Burn Rate Mensal',
      unit: 'meses',
      domain: 'finance',
      severity: {
        critical: { min: 0, max: 3 },
        warning: { min: 3, max: 6 },
        good: { min: 6, max: 24 }
      }
    });

    // KPIs de Vendas
    this.addKPI({
      code: 'SALES_CONVERSION',
      title: 'Taxa de Conversão de Vendas',
      description: '(Vendas Fechadas / Leads) * 100 - Eficiência do funil de vendas',
      calculationFormula: '(Vendas Fechadas / Total Leads) * 100',
      unit: '%',
      domain: 'sales',
      severity: {
        critical: { min: 0, max: 5 },
        warning: { min: 5, max: 15 },
        good: { min: 15, max: 100 }
      }
    });

    this.addKPI({
      code: 'CUSTOMER_ACQUISITION_COST',
      title: 'Custo de Aquisição de Cliente',
      description: '(Investimento Mkt + Vendas) / Novos Clientes - Eficiência do motor de crescimento',
      calculationFormula: '(Investimento Mkt + Vendas) / Novos Clientes',
      unit: 'R$',
      domain: 'marketing',
      severity: {
        critical: { min: 500, max: Infinity },
        warning: { min: 200, max: 500 },
        good: { min: 0, max: 200 }
      }
    });

    // Desafios Estratégicos
    this.addChallenge({
      code: 'CASH_FLOW_CRUNCH',
      title: 'Crise de Liquidez',
      description: 'Crise de liquidez que ameaça a sobrevivência do negócio. O ciclo financeiro está descasado.',
      domain: 'finance',
      severity: 5,
      symptoms: [
        'Runway < 3 meses - Risco de insolvência',
        'Ciclo financeiro descasado (pagamentos > recebimentos)',
        'Margem líquida < 5% - Sem geração de caixa',
        'Dependência de empréstimos para pagar fornecedores'
      ],
      relatedKpiCodes: ['CASH_BURN_RATE', 'RUNWAY', 'NET_PROFIT_MARGIN'],
      mainKpi: 'RUNWAY',
      thresholds: {
        critical: { min: 0, max: 1 },
        warning: { min: 1, max: 3 },
        good: { min: 3, max: 24 }
      }
    });

    this.addChallenge({
      code: 'SALES_INEFFICIENCY',
      title: 'Ineficiência Comercial',
      description: 'Funil de vendas com baixa conversão e alto custo de aquisição.',
      domain: 'sales',
      severity: 4,
      symptoms: [
        'Taxa de conversão < 10%',
        'CAC elevado em relação ao LTV',
        'Ciclo de vendas muito longo',
        'Pipeline sem previsibilidade'
      ],
      relatedKpiCodes: ['SALES_CONVERSION', 'CUSTOMER_ACQUISITION_COST'],
      mainKpi: 'SALES_CONVERSION',
      thresholds: {
        critical: { min: 0, max: 5 },
        warning: { min: 5, max: 15 },
        good: { min: 15, max: 100 }
      }
    });
  }

  private addKPI(kpi: StrategyKPI) {
    this.kpiCache.set(kpi.code, kpi);
  }

  private addChallenge(challenge: StrategyChallenge) {
    this.challengeCache.set(challenge.code, challenge);
  }

  /**
   * Detecta o contexto de negócio baseado nos dados
   */
  detectBusinessContext(data: unknown[]): BusinessContext {
    const context: BusinessContext = {
      domain: 'general',
      dataCharacteristics: {
        hasFinancialData: false,
        hasSalesData: false,
        hasOperationalData: false,
        hasMarketingData: false
      }
    };

    // Análise simples dos dados para detectar domínio
    const dataString = JSON.stringify(data).toLowerCase();
    
    // Verificar sales primeiro (prioridade maior)
    if (dataString.includes('venda') || dataString.includes('cliente') || 
        dataString.includes('lead') || dataString.includes('fechamento') ||
        dataString.includes('negócio') || dataString.includes('proposta') ||
        dataString.includes('contrato') || dataString.includes('comissão')) {
      context.domain = 'sales';
      context.dataCharacteristics.hasSalesData = true;
      return context;
    }

    // Verificar finance depois
    if (dataString.includes('receita') || dataString.includes('lucro') || 
        dataString.includes('caixa') || dataString.includes('custo') ||
        dataString.includes('margem') || dataString.includes('fluxo') ||
        dataString.includes('banco') || dataString.includes('pagamento') ||
        dataString.includes('faturamento') || dataString.includes('dívida') ||
        dataString.includes('patrimônio') || dataString.includes('balanço') ||
        dataString.includes('dre') || dataString.includes('cash flow') ||
        dataString.includes('burn rate')) {
      context.domain = 'finance';
      context.dataCharacteristics.hasFinancialData = true;
      return context;
    }

    // Verificar marketing
    if (dataString.includes('marketing') || dataString.includes('campanha') || 
        dataString.includes('tráfego') || dataString.includes('anúncio') ||
        dataString.includes('google') || dataString.includes('facebook') ||
        dataString.includes('instagram') || dataString.includes('email marketing') ||
        dataString.includes('ctr') || dataString.includes('cpc') ||
        dataString.includes('cpa') || dataString.includes('roi')) {
      context.domain = 'marketing';
      context.dataCharacteristics.hasMarketingData = true;
      return context;
    }

    // Verificar operações
    if (dataString.includes('produção') || dataString.includes('estoque') || 
        dataString.includes('operacional') || dataString.includes('eficiência') ||
        dataString.includes('fornecedor') || dataString.includes('logística') ||
        dataString.includes('armazém') || dataString.includes('entrega') ||
        dataString.includes('qualidade') || dataString.includes('produtividade') ||
        dataString.includes('funcionário') || dataString.includes('turnover') ||
        dataString.includes('capacity')) {
      context.domain = 'ops';
      context.dataCharacteristics.hasOperationalData = true;
      return context;
    }

    return context;
  }

  /**
   * Obtém KPIs relevantes baseado no contexto
   */
  getRelevantKPIs(context: BusinessContext): StrategyKPI[] {
    const relevantKPIs: StrategyKPI[] = [];

    // KPIs do domínio principal
    for (const kpi of this.kpiCache.values()) {
      if (kpi.domain === context.domain || kpi.domain === 'finance') {
        relevantKPIs.push(kpi);
      }
    }

    // Limitar a 5 KPIs mais relevantes
    return relevantKPIs.slice(0, 5);
  }

  /**
   * Obtém desafios conhecidos baseados nos KPIs
   */
  getKnownChallenges(kpiCodes: string[]): StrategyChallenge[] {
    const relevantChallenges: StrategyChallenge[] = [];

    for (const challenge of this.challengeCache.values()) {
      // Verificar se os KPIs do desafio estão presentes
      const hasRelevantKPI = challenge.relatedKpiCodes.some(kpi => 
        kpiCodes.includes(kpi)
      );
      
      if (hasRelevantKPI) {
        relevantChallenges.push(challenge);
      }
    }

    // Ordenar por severidade
    return relevantChallenges.sort((a, b) => b.severity - a.severity);
  }

  /**
   * Enriquece o prompt com contexto estratégico
   */
  enrichPrompt(basePrompt: string, context: BusinessContext): string {
    const relevantKPIs = this.getRelevantKPIs(context);
    const knownChallenges = this.getKnownChallenges(relevantKPIs.map(k => k.code));

    const domainSpecialist = this.getDomainSpecialist(context.domain);
    const kpiContext = this.formatKPIsForPrompt(relevantKPIs);
    const challengesContext = this.formatChallengesForPrompt(knownChallenges);

    return `
${basePrompt}

ESPECIALIZAÇÃO: ${domainSpecialist}

KPIs RELEVANTES PARA ANÁLISE:
${kpiContext}

DESAFIOS CONHECIDOS NESTE DOMÍNIO:
${challengesContext}

IMPORTANTE: Use estes KPIs e desafios como referência para sua análise. Foque em métricas que realmente importam para o negócio.
    `.trim();
  }

  private getDomainSpecialist(domain: string): string {
    const specialists = {
      finance: 'Consultor Financeiro Senior especializado em análise de saúde financeira e fluxo de caixa',
      sales: 'Especialista em Vendas e Performance Comercial com foco em otimização de funil',
      marketing: 'Estrategista de Marketing Digital especializado em métricas de aquisição e retenção',
      ops: 'Consultor Operacional especializado em eficiência produtiva e otimização de processos',
      general: 'Analista de Negócios Senior com visão holística da empresa'
    };

    return specialists[domain as keyof typeof specialists] || specialists.general;
  }

  private formatKPIsForPrompt(kpis: StrategyKPI[]): string {
    return kpis.map(kpi => 
      `- ${kpi.title} (${kpi.code}): ${kpi.description}`
    ).join('\n');
  }

  private formatChallengesForPrompt(challenges: StrategyChallenge[]): string {
    return challenges.map(challenge => 
      `- ${challenge.title}: ${challenge.description}`
    ).join('\n');
  }
}

// Export singleton instance
export const strategyLibraryService = StrategyLibraryService.getInstance();
