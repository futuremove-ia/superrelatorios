import { BusinessContext, StrategyKPI, StrategyChallenge } from './strategyLibraryService';
import { strategyLibraryService } from './strategyLibraryService';

/**
 * Serviço para detectar contexto de negócio e mapear dados para KPIs estratégicos
 */
export class ContextDetectorService {
  private static instance: ContextDetectorService;

  static getInstance(): ContextDetectorService {
    if (!ContextDetectorService.instance) {
      ContextDetectorService.instance = new ContextDetectorService();
    }
    return ContextDetectorService.instance;
  }

  /**
   * Detecta o domínio de negócio baseado nos dados
   */
  detectDomain(data: unknown[]): 'finance' | 'marketing' | 'sales' | 'ops' | 'general' {
    const dataString = JSON.stringify(data).toLowerCase();
    
    // Palavras-chave por domínio
    const domainKeywords = {
      finance: [
        'receita', 'lucro', 'caixa', 'custo', 'despesa', 'margem', 'fluxo',
        'banco', 'pagamento', 'faturamento', 'dívida', 'investimento',
        'patrimônio', 'balanço', 'dre', 'cash flow', 'burn rate'
      ],
      sales: [
        'venda', 'cliente', 'lead', 'conversão', 'negócio', 'proposta',
        'fechamento', 'pipeline', 'funil', 'oportunidade', 'contrato',
        'ticket médio', 'vendedor', 'meta', 'comissão'
      ],
      marketing: [
        'marketing', 'campanha', 'tráfego', 'conversão', 'lead',
        'mídia', 'anúncio', 'google', 'facebook', 'instagram',
        'email marketing', 'ctr', 'cpc', 'cpa', 'roi'
      ],
      ops: [
        'produção', 'estoque', 'operacional', 'eficiência', 'processo',
        'fornecedor', 'logística', 'armazém', 'entrega', 'qualidade',
        'produtividade', 'funcionário', 'turnover', 'capacity'
      ]
    };

    // Contar palavras-chave por domínio
    const domainScores: Record<string, number> = {};
    
    for (const [domain, keywords] of Object.entries(domainKeywords)) {
      domainScores[domain] = keywords.reduce((score, keyword) => {
        const regex = new RegExp(keyword, 'gi');
        const matches = dataString.match(regex);
        return score + (matches ? matches.length : 0);
      }, 0);
    }

    // Encontrar domínio com maior score
    let maxScore = 0;
    let detectedDomain = 'general';
    
    for (const [domain, score] of Object.entries(domainScores)) {
      if (score > maxScore) {
        maxScore = score;
        detectedDomain = domain as keyof typeof domainScores;
      }
    }

    // Threshold mínimo para considerar domínio detectado
    if (maxScore < 2) {
      detectedDomain = 'general';
    }

    return detectedDomain as 'finance' | 'marketing' | 'sales' | 'ops' | 'general';
  }

  /**
   * Mapeia dados brutos para códigos de KPI relevantes
   */
  mapDataToKPIs(data: unknown[]): string[] {
    const dataString = JSON.stringify(data).toLowerCase();
    const relevantKPIs: string[] = [];

    // Mapeamento de palavras-chave para KPIs
    const kpiMappings: Record<string, string[]> = {
      'NET_PROFIT_MARGIN': ['lucro', 'margem', 'lucratividade', 'rentabilidade'],
      'CASH_BURN_RATE': ['burn', 'queima', 'despesa', 'custo mensal'],
      'RUNWAY': ['runway', 'sobrevivência', 'meses', 'caixa'],
      'SALES_CONVERSION': ['conversão', 'taxa', 'venda', 'fechamento'],
      'CUSTOMER_ACQUISITION_COST': ['cac', 'aquisição', 'custo cliente', 'investimento']
    };

    for (const [kpiCode, keywords] of Object.entries(kpiMappings)) {
      const hasKeyword = keywords.some(keyword => dataString.includes(keyword));
      if (hasKeyword) {
        relevantKPIs.push(kpiCode);
      }
    }

    return relevantKPIs;
  }

  /**
   * Seleciona desafios relevantes baseado nos KPIs detectados
   */
  selectChallenges(kpiCodes: string[]): StrategyChallenge[] {
    return strategyLibraryService.getKnownChallenges(kpiCodes);
  }

  /**
   * Analisa a estrutura dos dados para características adicionais
   */
  analyzeDataStructure(data: unknown[]): {
    hasHeaders: boolean;
    rowCount: number;
    columnCount: number;
    dataTypes: string[];
    timeSeries: boolean;
  } {
    if (!data || data.length === 0) {
      return {
        hasHeaders: false,
        rowCount: 0,
        columnCount: 0,
        dataTypes: [],
        timeSeries: false
      };
    }

    const firstRow = data[0] as Record<string, unknown>;
    const headers = Object.keys(firstRow);
    
    // Detectar se primeira linha são headers
    const hasHeaders = headers.some(header => 
      typeof header === 'string' && 
      !/^\d+$/.test(header) && 
      header.length > 1
    );

    // Analisar tipos de dados
    const sampleRows = data.slice(0, Math.min(5, data.length));
    const dataTypes: string[] = [];
    
    for (const header of headers) {
      const values = sampleRows.map(row => (row as Record<string, unknown>)[header]);
      const types = values.map(value => this.detectDataType(value));
      const mostCommonType = this.getMostCommonType(types);
      dataTypes.push(mostCommonType);
    }

    // Detectar se é série temporal
    const timeSeries = headers.some(header => 
      header.toLowerCase().includes('data') ||
      header.toLowerCase().includes('date') ||
      header.toLowerCase().includes('mês') ||
      header.toLowerCase().includes('ano')
    );

    return {
      hasHeaders,
      rowCount: data.length,
      columnCount: headers.length,
      dataTypes,
      timeSeries
    };
  }

  private detectDataType(value: unknown): string {
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'boolean';
    if (typeof value === 'string') {
      // Verificar se é data
      if (!isNaN(Date.parse(value)) && value.includes('-')) return 'date';
      // Verificar se é moeda
      if (value.includes('R$') || value.includes('$')) return 'currency';
      // Verificar se é percentual
      if (value.includes('%')) return 'percentage';
      return 'text';
    }
    return 'object';
  }

  private getMostCommonType(types: string[]): string {
    const typeCounts: Record<string, number> = {};
    
    for (const type of types) {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    }

    let maxCount = 0;
    let mostCommonType = 'text';
    
    for (const [type, count] of Object.entries(typeCounts)) {
      if (count > maxCount) {
        maxCount = count;
        mostCommonType = type;
      }
    }

    return mostCommonType;
  }

  /**
   * Gera insights sobre a qualidade dos dados
   */
  analyzeDataQuality(data: unknown[]): {
    completeness: number;
    consistency: number;
    validity: number;
    issues: string[];
  } {
    if (!data || data.length === 0) {
      return {
        completeness: 0,
        consistency: 0,
        validity: 0,
        issues: ['Nenhum dado encontrado']
      };
    }

    const issues: string[] = [];
    let totalCells = 0;
    let filledCells = 0;
    let consistentTypes = 0;

    const firstRow = data[0] as Record<string, unknown>;
    const headers = Object.keys(firstRow);

    // Analisar cada coluna
    for (const header of headers) {
      const columnValues = data.map(row => (row as Record<string, unknown>)[header]);
      const nonNullValues = columnValues.filter(v => v !== null && v !== undefined && v !== '');
      
      totalCells += columnValues.length;
      filledCells += nonNullValues.length;

      // Verificar consistência de tipos
      if (nonNullValues.length > 1) {
        const types = nonNullValues.map(v => this.detectDataType(v));
        const mostCommonType = this.getMostCommonType(types);
        const consistentCount = types.filter(t => t === mostCommonType).length;
        consistentTypes += consistentCount;
      }

      // Verificar problemas específicos
      const nullRate = (columnValues.length - nonNullValues.length) / columnValues.length;
      if (nullRate > 0.5) {
        issues.push(`Coluna "${header}" tem ${(nullRate * 100).toFixed(1)}% de valores vazios`);
      }
    }

    const completeness = totalCells > 0 ? (filledCells / totalCells) * 100 : 0;
    const consistency = totalCells > 0 ? (consistentTypes / totalCells) * 100 : 0;
    const validity = Math.max(0, 100 - (issues.length * 10));

    return {
      completeness,
      consistency,
      validity,
      issues
    };
  }

  /**
   * Cria um contexto completo de negócio
   */
  createBusinessContext(data: unknown[]): BusinessContext {
    const domain = this.detectDomain(data);
    const kpiCodes = this.mapDataToKPIs(data);
    const challenges = this.selectChallenges(kpiCodes);
    const dataStructure = this.analyzeDataStructure(data);
    const dataQuality = this.analyzeDataQuality(data);

    return {
      domain,
      dataCharacteristics: {
        hasFinancialData: domain === 'finance' || kpiCodes.includes('NET_PROFIT_MARGIN'),
        hasSalesData: domain === 'sales' || kpiCodes.includes('SALES_CONVERSION'),
        hasOperationalData: domain === 'ops',
        hasMarketingData: domain === 'marketing' || kpiCodes.includes('CUSTOMER_ACQUISITION_COST')
      }
    };
  }
}

// Export singleton instance
export const contextDetectorService = ContextDetectorService.getInstance();
