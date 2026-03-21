import { AIAnalysisResult } from './aiService';

/**
 * KPI extraído da análise da IA
 */
export interface ExtractedKPI {
  code: string;                    // Código do KPI (ex: 'NET_MARGIN', 'CASH_FLOW')
  value: number;                   // Valor numérico
  unit: 'percentage' | 'currency' | 'days' | 'ratio' | 'count' | 'monetary';
  benchmarkValue?: number;         // Valor de referência/benchmark
  deltaPercentage?: number;        // Variação % vs período anterior
  confidence: number;              // 0-1 confiança da extração
  source: 'table' | 'text' | 'chart' | 'calculated'; // Origem no relatório
  sourceBlockIndex?: number;       // Índice do bloco no relatório
}

/**
 * Mapeamento de nomes comuns de KPIs para códigos padronizados
 */
const KPI_NAME_MAPPINGS: Record<string, string> = {
  // Margens
  'margem líquida': 'NET_MARGIN',
  'margem bruta': 'GROSS_MARGIN',
  'margem de contribuição': 'CONTRIB_MARGIN',
  'markup': 'MARKUP',
  
  // Financeiro
  'caixa': 'CASH_FLOW',
  'fluxo de caixa': 'CASH_FLOW',
  'prazo médio de recebimento': 'RECEIVABLES_DAYS',
  'pmr': 'RECEIVABLES_DAYS',
  'dso': 'RECEIVABLES_DAYS',
  'custo de aquisição': 'CUSTOMER_ACQ_COST',
  'cac': 'CUSTOMER_ACQ_COST',
  'ticket médio': 'AVG_TICKET',
  'gmv': 'GMV',
  
  // Vendas
  'taxa de conversão': 'SALES_CONVERSION',
  'conversão': 'SALES_CONVERSION',
  'churn': 'CHURN_RATE',
  'taxa de churn': 'CHURN_RATE',
  'retenção': 'RETENTION_RATE',
  'ltv': 'LTV',
  'lifetime value': 'LTV',
  
  // Operações
  'giro de estoque': 'INVENTORY_TURNOVER',
  'produtividade': 'REVENUE_PER_EMP',
  'despesas fixas': 'FIXED_COSTS',
  'custo fixo': 'FIXED_COSTS',
  
  // Pessoas
  'turnover': 'EMPLOYEE_TURNOVER',
  'receita por funcionário': 'REVENUE_PER_EMP',
};

/**
 * Extrai KPIs do resultado da análise da IA
 * Busca em blocos de tabela, texto e descrições
 */
export const extractKPIsFromAIResult = (
  aiResult: AIAnalysisResult,
  options: { minConfidence?: number } = {}
): ExtractedKPI[] => {
  const { minConfidence = 0.6 } = options;
  const kpis: ExtractedKPI[] = [];

  if (!aiResult?.blocks) {
    return kpis;
  }

  aiResult.blocks.forEach((block, blockIndex) => {
    // Extrair de dados estruturados (tabelas)
    if (block.data && Array.isArray(block.data)) {
      const tableKPIs = extractFromTableData(block.data, blockIndex);
      kpis.push(...tableKPIs);
    }

    // Extrair de descrições textuais
    if (block.description) {
      const textKPIs = extractFromText(block.description, blockIndex);
      kpis.push(...textKPIs);
    }

    // Extrair do título
    if (block.title) {
      const titleKPIs = extractFromText(block.title, blockIndex);
      kpis.push(...titleKPIs);
    }
  });

  // Remover duplicados (mesmo código, manter o de maior confiança)
  const uniqueKPIs = deduplicateKPIs(kpis);

  // Filtrar por confiança mínima
  return uniqueKPIs.filter(kpi => kpi.confidence >= minConfidence);
};

/**
 * Extrai KPIs de dados tabulares
 */
const extractFromTableData = (
  data: any[],
  blockIndex: number
): ExtractedKPI[] => {
  const kpis: ExtractedKPI[] = [];

  if (!data.length) return kpis;

  const firstRow = data[0];
  const columns = Object.keys(firstRow);

  // Procurar colunas que parecem KPIs
  columns.forEach(col => {
    const colLower = col.toLowerCase();
    const kpiCode = findKPICode(colLower);
    
    if (kpiCode) {
      // Extrair valores das linhas
      data.forEach((row, rowIndex) => {
        const value = parseNumericValue(row[col]);
        if (value !== null && !isNaN(value)) {
          // Tentar extrair benchmark da mesma linha
          const benchmarkCol = columns.find(c => 
            c.toLowerCase().includes('benchmark') || 
            c.toLowerCase().includes('meta') ||
            c.toLowerCase().includes('referência')
          );
          const benchmarkValue = benchmarkCol ? parseNumericValue(row[benchmarkCol]) : undefined;

          // Tentar extrair variação
          const deltaCol = columns.find(c =>
            c.toLowerCase().includes('variação') ||
            c.toLowerCase().includes('delta') ||
            c.toLowerCase().includes('trend')
          );
          const deltaValue = deltaCol ? parseNumericValue(row[deltaCol]) : undefined;

          kpis.push({
            code: kpiCode,
            value,
            unit: inferUnit(colLower, value),
            benchmarkValue: benchmarkValue || undefined,
            deltaPercentage: deltaValue,
            confidence: 0.85, // Dados tabulares têm alta confiança
            source: 'table',
            sourceBlockIndex: blockIndex
          });
        }
      });
    }
  });

  return kpis;
};

/**
 * Extrai KPIs de texto usando regex e padrões
 */
const extractFromText = (
  text: string,
  blockIndex: number
): ExtractedKPI[] => {
  const kpis: ExtractedKPI[] = [];

  if (!text) return kpis;

  const textLower = text.toLowerCase();

  // Padrões de extração regex
  const patterns = [
    // Padrão: "Margem líquida de 15%"
    {
      regex: /(margem líquida|margem bruta|markup|churn|cac|ticket médio).*?de\s+([\d.,]+)\s*%?/i,
      unit: 'percentage' as const,
      confidence: 0.75
    },
    // Padrão: "15% de margem"
    {
      regex: /([\d.,]+)\s*%\s+de\s+(margem|churn|retenção|conversão)/i,
      unit: 'percentage' as const,
      confidence: 0.70
    },
    // Padrão: "R$ 50.000 em vendas"
    {
      regex: /r?\$\s*([\d.,]+)\s*(mil|k|milhões?|mi|bilhões?|bi)?/i,
      unit: 'monetary' as const,
      confidence: 0.65
    },
    // Padrão: "50 dias" ou "prazo de 30 dias"
    {
      regex: /(\d+)\s+dias?/i,
      unit: 'days' as const,
      confidence: 0.60
    },
    // Padrão: "aumento de 10%" ou "cresceu 15%"
    {
      regex: /(aumento|crescimento|subiu|cresceu|variação)\s+(de\s+)?([\d.,]+)\s*%/i,
      unit: 'percentage' as const,
      confidence: 0.60,
      isDelta: true
    },
    // Padrão: "queda de 5%" ou "diminuiu 8%"
    {
      regex: /(queda|diminuição|redução|caiu|diminuiu)\s+(de\s+)?([\d.,]+)\s*%/i,
      unit: 'percentage' as const,
      confidence: 0.60,
      isDelta: true,
      isNegative: true
    }
  ];

  patterns.forEach(pattern => {
    const matches = textLower.match(pattern.regex);
    if (matches) {
      const value = parseNumericValue(matches[2] || matches[3] || matches[1]);
      if (value !== null) {
        // Tentar identificar o KPI do contexto
        const contextWindow = textLower.substring(
          Math.max(0, textLower.indexOf(matches[0]) - 50),
          Math.min(textLower.length, textLower.indexOf(matches[0]) + matches[0].length + 50)
        );
        
        const kpiCode = findKPICode(contextWindow) || 'UNKNOWN';
        
        let finalValue = value;
        let deltaValue: number | undefined;

        // Se é delta, o valor principal pode estar em outro lugar
        if (pattern.isDelta) {
          deltaValue = pattern.isNegative ? -value : value;
          // Tentar achar o valor base no contexto
          const valueMatch = contextWindow.match(/(\d+[.,]?\d*)\s*%/);
          if (valueMatch && parseNumericValue(valueMatch[1]) !== value) {
            finalValue = parseNumericValue(valueMatch[1]) || value;
          }
        }

        if (kpiCode !== 'UNKNOWN') {
          kpis.push({
            code: kpiCode,
            value: finalValue,
            unit: pattern.unit,
            deltaPercentage: deltaValue,
            confidence: pattern.confidence,
            source: 'text',
            sourceBlockIndex: blockIndex
          });
        }
      }
    }
  });

  return kpis;
};

/**
 * Encontra o código padronizado de um KPI pelo nome/descrição
 */
const findKPICode = (text: string): string | null => {
  const textLower = text.toLowerCase();
  
  for (const [name, code] of Object.entries(KPI_NAME_MAPPINGS)) {
    if (textLower.includes(name)) {
      return code;
    }
  }
  
  // Tentar match parcial
  for (const [name, code] of Object.entries(KPI_NAME_MAPPINGS)) {
    const nameWords = name.split(' ');
    const matchCount = nameWords.filter(word => textLower.includes(word)).length;
    if (matchCount >= Math.ceil(nameWords.length * 0.7)) { // 70% das palavras
      return code;
    }
  }
  
  return null;
};

/**
 * Tenta converter um valor para número
 */
const parseNumericValue = (value: any): number | null => {
  if (value === null || value === undefined) return null;
  
  if (typeof value === 'number') return value;
  
  if (typeof value === 'string') {
    // Remover símbolos de moeda, porcentagem, etc.
    const cleaned = value
      .replace(/r?\$\s*/gi, '')
      .replace(/%/g, '')
      .replace(/\s+/g, '')
      .replace(/\./g, '')
      .replace(/,/g, '.')
      .trim();
    
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  }
  
  return null;
};

/**
 * Inferir unidade baseado no nome da coluna e valor
 */
const inferUnit = (
  columnName: string,
  value: number
): ExtractedKPI['unit'] => {
  const col = columnName.toLowerCase();
  
  if (col.includes('%') || col.includes('percent') || col.includes('margem') || col.includes('taxa')) {
    return 'percentage';
  }
  if (col.includes('dia') || col.includes('day') || col.includes('prazo')) {
    return 'days';
  }
  if (col.includes('custo') || col.includes('valor') || col.includes('receita') || col.includes('faturamento')) {
    if (value < 100) return 'ratio';
    if (value < 1000) return 'monetary';
    return 'currency';
  }
  if (col.includes('quantidade') || col.includes('count') || col.includes('número')) {
    return 'count';
  }
  
  // Inferir do valor
  if (value >= 0 && value <= 100 && !col.includes('valor')) {
    return 'percentage';
  }
  if (value > 365) {
    return 'currency';
  }
  
  return 'ratio';
};

/**
 * Remove KPIs duplicados, mantendo o de maior confiança
 */
const deduplicateKPIs = (kpis: ExtractedKPI[]): ExtractedKPI[] => {
  const kpiMap = new Map<string, ExtractedKPI>();
  
  kpis.forEach(kpi => {
    const existing = kpiMap.get(kpi.code);
    if (!existing || kpi.confidence > existing.confidence) {
      kpiMap.set(kpi.code, kpi);
    }
  });
  
  return Array.from(kpiMap.values());
};

/**
 * Enriquece o diagnóstico da IA com códigos padronizados
 */
export const enrichDiagnosticWithCodes = (
  diagnostic: any
): { challenge_code: string; suggested_lever_code?: string; severity: string } => {
  const title = diagnostic?.title?.toLowerCase() || '';
  const description = diagnostic?.description?.toLowerCase() || '';
  const fullText = `${title} ${description}`;
  
  // Mapeamento de palavras-chave para challenge codes
  const challengeMappings: Record<string, { code: string; severity: string }> = {
    'caixa': { code: 'CASH_SHORTAGE', severity: 'critical' },
    'dinheiro': { code: 'CASH_SHORTAGE', severity: 'critical' },
    'margem': { code: 'LOW_PROFITABILITY', severity: 'high' },
    'lucro': { code: 'LOW_PROFITABILITY', severity: 'high' },
    'churn': { code: 'CUSTOMER_LOSS', severity: 'high' },
    'cancelamento': { code: 'CUSTOMER_LOSS', severity: 'high' },
    'conversão': { code: 'LOW_SALES_CONVERSION', severity: 'medium' },
    'vendas': { code: 'LOW_SALES_CONVERSION', severity: 'medium' },
    'estoque': { code: 'STOCK_STAGNATION', severity: 'medium' },
    'despesa': { code: 'HIGH_FIXED_COSTS', severity: 'medium' },
    'custo fixo': { code: 'HIGH_FIXED_COSTS', severity: 'medium' },
    'recebimento': { code: 'LATE_RECEIVABLES', severity: 'medium' },
    'cac': { code: 'HIGH_ACQUISITION_COST', severity: 'medium' },
    'aquisição': { code: 'HIGH_ACQUISITION_COST', severity: 'medium' },
    'demora': { code: 'DELIVERY_DELAY', severity: 'low' },
    'prazo': { code: 'DELIVERY_DELAY', severity: 'low' },
  };
  
  // Encontrar o desafio mais relevante
  let bestMatch: { code: string; severity: string } | null = null;
  let bestScore = 0;
  
  for (const [keyword, mapping] of Object.entries(challengeMappings)) {
    const occurrences = (fullText.match(new RegExp(keyword, 'gi')) || []).length;
    if (occurrences > bestScore) {
      bestScore = occurrences;
      bestMatch = mapping;
    }
  }
  
  // Mapeamento desafio → alavanca sugerida
  const leverSuggestions: Record<string, string> = {
    'CASH_SHORTAGE': 'LEV_CASH_CYCLE',
    'LOW_PROFITABILITY': 'LEV_PRICE',
    'CUSTOMER_LOSS': 'LEV_RETENTION',
    'LOW_SALES_CONVERSION': 'LEV_CONVERSION',
    'STOCK_STAGNATION': 'LEV_STOCK_TURN',
    'HIGH_FIXED_COSTS': 'LEV_FIXED_COST',
    'LATE_RECEIVABLES': 'LEV_CASH_CYCLE',
    'HIGH_ACQUISITION_COST': 'LEV_ACQ_EFF',
    'DELIVERY_DELAY': 'LEV_WASTE',
  };
  
  const challenge_code = bestMatch?.code || 'LOW_PROFITABILITY';
  const severity = bestMatch?.severity || 'medium';
  const suggested_lever_code = leverSuggestions[challenge_code];
  
  return {
    challenge_code,
    suggested_lever_code,
    severity
  };
};
