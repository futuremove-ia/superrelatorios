import { AIAnalysisResult } from "./aiService";

/**
 * KPI extraído da análise da IA
 */
export interface ExtractedKPI {
  code: string; // Código do KPI (ex: 'NET_MARGIN', 'CASH_FLOW')
  value: number; // Valor numérico
  unit: "percentage" | "currency" | "days" | "ratio" | "count" | "monetary";
  benchmarkValue?: number; // Valor de referência/benchmark
  deltaPercentage?: number; // Variação % vs período anterior
  confidence: number; // 0-1 confiança da extração
  source: "table" | "text" | "chart" | "calculated"; // Origem no relatório
  sourceBlockIndex?: number; // Índice do bloco no relatório
}

/**
 * Mapeamento de nomes comuns de KPIs para códigos padronizados
 * Inclui variações em português, inglês e español
 */
const KPI_NAME_MAPPINGS: Record<string, string> = {
  // === FINANCEIRO / MARGENS ===
  "margem líquida": "NET_PROFIT_MARGIN",
  "margem bruta": "GROSS_MARGIN",
  "margem de contribuição": "CONTRIBUTION_MARGIN",
  "margem ebitda": "EBITDA_MARGIN",
  markup: "MARKUP",
  "margem operacional": "OPERATING_MARGIN",
  "net margin": "NET_PROFIT_MARGIN",
  "gross margin": "GROSS_MARGIN",
  "contribution margin": "CONTRIBUTION_MARGIN",

  // === FLUXO DE CAIXA ===
  caixa: "CASH_FLOW",
  "fluxo de caixa": "CASH_FLOW",
  "fluxo de caixa operacional": "OPERATING_CASH_FLOW",
  "free cash flow": "FREE_CASH_FLOW",
  fcf: "FREE_CASH_FLOW",
  "burn rate": "BURN_RATE",
  "queima de caixa": "BURN_RATE",
  runway: "RUNWAY_MONTHS",
  "pista de decolagem": "RUNWAY_MONTHS",
  "capital de giro": "WORKING_CAPITAL",

  // === PRAZOS (DIAS) ===
  "prazo médio de recebimento": "DAYS_TO_RECEIVE",
  "prazo médio de pagamento": "DAYS_TO_PAY",
  "prazo médio de estoque": "INVENTORY_DAYS",
  pmr: "DAYS_TO_RECEIVE",
  dso: "DAYS_TO_RECEIVE",
  dpo: "DAYS_TO_PAY",
  dio: "INVENTORY_DAYS",
  "ciclo de caixa": "CASH_CONVERSION_CYCLE",
  "days sales outstanding": "DAYS_TO_RECEIVE",
  "days payable outstanding": "DAYS_TO_PAY",
  "days inventory outstanding": "INVENTORY_DAYS",

  // === COMERCIAL / VENDAS ===
  "custo de aquisição": "CAC",
  cac: "CAC",
  "customer acquisition cost": "CAC",
  "ticket médio": "AVG_TICKET",
  "average ticket": "AVG_TICKET",
  gmv: "GMV",
  "gross merchandise value": "GMV",
  receita: "REVENUE",
  vendas: "REVENUE",
  faturamento: "REVENUE",
  revenue: "REVENUE",
  crescimento: "REVENUE_GROWTH",
  "crescimento de receita": "REVENUE_GROWTH",
  "revenue growth": "REVENUE_GROWTH",

  // === TAXA DE CONVERSÃO E CHURN ===
  "taxa de conversão": "SALES_CONVERSION",
  conversão: "SALES_CONVERSION",
  "conversion rate": "SALES_CONVERSION",
  churn: "CHURN_RATE",
  "taxa de churn": "CHURN_RATE",
  "churn rate": "CHURN_RATE",
  "taxa de cancelamento": "CHURN_RATE",
  retenção: "RETENTION_RATE",
  "retention rate": "RETENTION_RATE",
  "taxa de retenção": "RETENTION_RATE",

  // === LTV E RELAÇÃO LTV/CAC ===
  ltv: "LTV",
  "lifetime value": "LTV",
  "customer lifetime value": "LTV",
  "valor lifetime": "LTV",
  "ltv cac": "LTV_CAC_RATIO",
  "ltv/cac": "LTV_CAC_RATIO",
  "relação ltv cac": "LTV_CAC_RATIO",

  // === CICLO DE VENDAS ===
  "ciclo de vendas": "SALES_CYCLE_DAYS",
  "sales cycle": "SALES_CYCLE_DAYS",
  "dias para fechar": "SALES_CYCLE_DAYS",

  // === PIPELINE ===
  pipeline: "PIPELINE_VALUE",
  "valor do pipeline": "PIPELINE_VALUE",
  "cobertura de pipeline": "PIPELINE_COVERAGE",
  "pipeline coverage": "PIPELINE_COVERAGE",

  // === TAXA DE GANHO/PERDA ===
  "taxa de ganho": "WIN_RATE",
  "win rate": "WIN_RATE",
  "taxa de ganho de negócio": "WIN_RATE",
  "taxa de perda": "LOSS_RATE",
  "loss rate": "LOSS_RATE",

  // === VENDAS POR FUNCIONÁRIO ===
  "vendas por vendedor": "SALES_PER_EMPLOYEE",
  "sales per employee": "SALES_PER_EMPLOYEE",
  produtividade: "PRODUCTIVITY_PER_EMPLOYEE",
  "produtividade por funcionário": "PRODUCTIVITY_PER_EMPLOYEE",

  // === ATINGIMENTO DE META ===
  "atingimento de meta": "QUOTA_ATTAINMENT",
  "quota attainment": "QUOTA_ATTAINMENT",
  meta: "QUOTA_ATTAINMENT",

  // === OPERAÇÕES ===
  "giro de estoque": "INVENTORY_TURNOVER",
  "inventory turnover": "INVENTORY_TURNOVER",
  giro: "INVENTORY_TURNOVER",
  "despesas fixas": "FIXED_COST_RATIO",
  "custo fixo": "FIXED_COST_RATIO",
  "fixed costs": "FIXED_COST_RATIO",
  "custo variável": "VARIABLE_COST_RATIO",
  "variable costs": "VARIABLE_COST_RATIO",

  // === ENDIVIDAMENTO ===
  endividamento: "DEBT_TO_EQUITY",
  "debt to equity": "DEBT_TO_EQUITY",
  "liquidez corrente": "CURRENT_RATIO",
  "current ratio": "CURRENT_RATIO",
  "liquidez seca": "QUICK_RATIO",
  "quick ratio": "QUICK_RATIO",

  // === РЕЖ ===
  roa: "ROA",
  "return on assets": "ROA",
  "retorno sobre ativos": "ROA",
  roe: "ROE",
  "return on equity": "ROE",
  "retorno sobre patrimônio": "ROE",
  roic: "ROIC",
  "return on invested capital": "ROIC",

  // === TRIBUTÁRIO ===
  "carga tributária": "TAX_EFFECTIVE_RATE",
  "taxa efetiva": "TAX_EFFECTIVE_RATE",
  "tax effective rate": "TAX_EFFECTIVE_RATE",
  simples: "SIMPLES_ALIQUOTA",
  "alíquota simples": "SIMPLES_ALIQUOTA",

  // === PESSOAS ===
  turnover: "EMPLOYEE_TURNOVER",
  "taxa de turnover": "EMPLOYEE_TURNOVER",
  "employee turnover": "EMPLOYEE_TURNOVER",
  "receita por funcionário": "PRODUCTIVITY_PER_EMPLOYEE",
  "receita por employee": "PRODUCTIVITY_PER_EMPLOYEE",
  "folha de pagamento": "LABOR_COST_PCT",
  "custo de pessoal": "LABOR_COST_PCT",
  "labor cost": "LABOR_COST_PCT",

  // === BENCHMARKS ===
  benchmark: "BENCHMARK",
  "meta target": "BENCHMARK",
  "target goal": "BENCHMARK",

  // === VARIANTES INGLESAS ===
  "net profit": "NET_PROFIT_MARGIN",
  "profit margin": "NET_PROFIT_MARGIN",
  "cash flow": "CASH_FLOW",
  "working capital": "WORKING_CAPITAL",
  "receivable days": "DAYS_TO_RECEIVE",
  "payable days": "DAYS_TO_PAY",
  "inventory days": "INVENTORY_DAYS",
  "cash conversion cycle": "CASH_CONVERSION_CYCLE",
  "average order value": "AVG_TICKET",
  aov: "AVG_TICKET",
  "customer churn": "CHURN_RATE",
  "monthly recurring revenue": "MRR",
  mrr: "MRR",
  "annual recurring revenue": "ARR",
  arr: "ARR",
  "net revenue retention": "NET_REVENUE_RETENTION",
  nrr: "NET_REVENUE_RETENTION",
};

/**
 * Carrega mapeamentos adicionais do banco de dados
 * Executado uma vez na inicialização do serviço
 */
export async function loadKPIMappingsFromDB(): Promise<void> {
  try {
    const { createClient } = await import("@/lib/supabase");
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL || "",
      import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    );

    const { data, error } = await supabase
      .from("library_kpis")
      .select("code, title")
      .eq("is_active", true);

    if (error) {
      console.warn(
        "[kpiExtractionService] Erro ao carregar mapeamentos do banco:",
        error.message,
      );
      return;
    }

    if (data && data.length > 0) {
      data.forEach((kpi) => {
        if (kpi.code && kpi.title) {
          const titleLower = kpi.title.toLowerCase();
          if (!KPI_NAME_MAPPINGS[titleLower]) {
            KPI_NAME_MAPPINGS[titleLower] = kpi.code;
          }

          // Adicionar variações comuns
          if (titleLower.includes("margem")) {
            const shortName = titleLower.replace("margem ", "");
            KPI_NAME_MAPPINGS[shortName] = kpi.code;
          }
          if (titleLower.includes("taxa de")) {
            const withoutTaxa = titleLower.replace("taxa de ", "");
            KPI_NAME_MAPPINGS[withoutTaxa] = kpi.code;
          }
          if (titleLower.includes("prazo médio de")) {
            const shortPrazos = titleLower.replace("prazo médio de ", "");
            KPI_NAME_MAPPINGS[shortPrazos] = kpi.code;
          }
          if (titleLower.includes("custo de")) {
            const withoutCusto = titleLower.replace("custo de ", "");
            KPI_NAME_MAPPINGS[withoutCusto] = kpi.code;
          }
          if (titleLower.includes("retorno sobre")) {
            const withoutReturn = titleLower.replace("retorno sobre ", "");
            KPI_NAME_MAPPINGS[withoutReturn] = kpi.code;
          }
        }
      });

      console.log(
        `[kpiExtractionService] Carregados ${data.length} KPIs do banco`,
      );
    }
  } catch (error) {
    console.warn(
      "[kpiExtractionService] Erro ao conectar com banco, usando mapeamentos locais",
    );
  }
}

/**
 * Extrai KPIs do resultado da análise da IA
 * Busca em blocos de tabela, texto e descrições
 */
export const extractKPIsFromAIResult = (
  aiResult: AIAnalysisResult,
  options: { minConfidence?: number } = {},
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
  return uniqueKPIs.filter((kpi) => kpi.confidence >= minConfidence);
};

/**
 * Extrai KPIs de dados tabulares
 */
const extractFromTableData = (
  data: Array<Record<string, unknown>>,
  blockIndex: number,
): ExtractedKPI[] => {
  const kpis: ExtractedKPI[] = [];

  if (!data.length) return kpis;

  const firstRow = data[0];
  const columns = Object.keys(firstRow);

  // Procurar colunas que parecem KPIs
  columns.forEach((col) => {
    const colLower = col.toLowerCase();
    const kpiCode = findKPICode(colLower);

    if (kpiCode) {
      // Extrair valores das linhas
      data.forEach((row, rowIndex) => {
        const value = parseNumericValue(row[col]);
        if (value !== null && !isNaN(value)) {
          // Tentar extrair benchmark da mesma linha
          const benchmarkCol = columns.find(
            (c) =>
              c.toLowerCase().includes("benchmark") ||
              c.toLowerCase().includes("meta") ||
              c.toLowerCase().includes("referência"),
          );
          const benchmarkValue = benchmarkCol
            ? parseNumericValue(row[benchmarkCol])
            : undefined;

          // Tentar extrair variação
          const deltaCol = columns.find(
            (c) =>
              c.toLowerCase().includes("variação") ||
              c.toLowerCase().includes("delta") ||
              c.toLowerCase().includes("trend"),
          );
          const deltaValue = deltaCol
            ? parseNumericValue(row[deltaCol])
            : undefined;

          kpis.push({
            code: kpiCode,
            value,
            unit: inferUnit(colLower, value),
            benchmarkValue: benchmarkValue || undefined,
            deltaPercentage: deltaValue,
            confidence: 0.85, // Dados tabulares têm alta confiança
            source: "table",
            sourceBlockIndex: blockIndex,
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
const extractFromText = (text: string, blockIndex: number): ExtractedKPI[] => {
  const kpis: ExtractedKPI[] = [];

  if (!text) return kpis;

  const textLower = text.toLowerCase();

  // Padrões de extração regex
  const patterns = [
    // Padrão: "Margem líquida de 15%"
    {
      regex:
        /(margem líquida|margem bruta|markup|churn|cac|ticket médio).*?de\s+([\d.,]+)\s*%?/i,
      unit: "percentage" as const,
      confidence: 0.75,
    },
    // Padrão: "15% de margem"
    {
      regex: /([\d.,]+)\s*%\s+de\s+(margem|churn|retenção|conversão)/i,
      unit: "percentage" as const,
      confidence: 0.7,
    },
    // Padrão: "R$ 50.000 em vendas"
    {
      regex: /r?\$\s*([\d.,]+)\s*(mil|k|milhões?|mi|bilhões?|bi)?/i,
      unit: "monetary" as const,
      confidence: 0.65,
    },
    // Padrão: "50 dias" ou "prazo de 30 dias"
    {
      regex: /(\d+)\s+dias?/i,
      unit: "days" as const,
      confidence: 0.6,
    },
    // Padrão: "aumento de 10%" ou "cresceu 15%"
    {
      regex:
        /(aumento|crescimento|subiu|cresceu|variação)\s+(de\s+)?([\d.,]+)\s*%/i,
      unit: "percentage" as const,
      confidence: 0.6,
      isDelta: true,
    },
    // Padrão: "queda de 5%" ou "diminuiu 8%"
    {
      regex:
        /(queda|diminuição|redução|caiu|diminuiu)\s+(de\s+)?([\d.,]+)\s*%/i,
      unit: "percentage" as const,
      confidence: 0.6,
      isDelta: true,
      isNegative: true,
    },
  ];

  patterns.forEach((pattern) => {
    const matches = textLower.match(pattern.regex);
    if (matches) {
      const value = parseNumericValue(matches[2] || matches[3] || matches[1]);
      if (value !== null) {
        // Tentar identificar o KPI do contexto
        const contextWindow = textLower.substring(
          Math.max(0, textLower.indexOf(matches[0]) - 50),
          Math.min(
            textLower.length,
            textLower.indexOf(matches[0]) + matches[0].length + 50,
          ),
        );

        const kpiCode = findKPICode(contextWindow) || "UNKNOWN";

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

        if (kpiCode !== "UNKNOWN") {
          kpis.push({
            code: kpiCode,
            value: finalValue,
            unit: pattern.unit,
            deltaPercentage: deltaValue,
            confidence: pattern.confidence,
            source: "text",
            sourceBlockIndex: blockIndex,
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
    const nameWords = name.split(" ");
    const matchCount = nameWords.filter((word) =>
      textLower.includes(word),
    ).length;
    if (matchCount >= Math.ceil(nameWords.length * 0.7)) {
      // 70% das palavras
      return code;
    }
  }

  return null;
};

/**
 * Tenta converter um valor para número
 */
const parseNumericValue = (value: unknown): number | null => {
  if (value === null || value === undefined) return null;

  if (typeof value === "number") return value;

  if (typeof value === "string") {
    // Remover símbolos de moeda, porcentagem, etc.
    const cleaned = value
      .replace(/r?\$\s*/gi, "")
      .replace(/%/g, "")
      .replace(/\s+/g, "")
      .replace(/\./g, "")
      .replace(/,/g, ".")
      .trim();

    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  }

  return null;
};

/**
 * Inferir unidade baseado no nome da coluna e valor
 */
const inferUnit = (columnName: string, value: number): ExtractedKPI["unit"] => {
  const col = columnName.toLowerCase();

  if (
    col.includes("%") ||
    col.includes("percent") ||
    col.includes("margem") ||
    col.includes("taxa")
  ) {
    return "percentage";
  }
  if (col.includes("dia") || col.includes("day") || col.includes("prazo")) {
    return "days";
  }
  if (
    col.includes("custo") ||
    col.includes("valor") ||
    col.includes("receita") ||
    col.includes("faturamento")
  ) {
    if (value < 100) return "ratio";
    if (value < 1000) return "monetary";
    return "currency";
  }
  if (
    col.includes("quantidade") ||
    col.includes("count") ||
    col.includes("número")
  ) {
    return "count";
  }

  // Inferir do valor
  if (value >= 0 && value <= 100 && !col.includes("valor")) {
    return "percentage";
  }
  if (value > 365) {
    return "currency";
  }

  return "ratio";
};

/**
 * Remove KPIs duplicados, mantendo o de maior confiança
 */
const deduplicateKPIs = (kpis: ExtractedKPI[]): ExtractedKPI[] => {
  const kpiMap = new Map<string, ExtractedKPI>();

  kpis.forEach((kpi) => {
    const existing = kpiMap.get(kpi.code);
    if (!existing || kpi.confidence > existing.confidence) {
      kpiMap.set(kpi.code, kpi);
    }
  });

  return Array.from(kpiMap.values());
};

interface AIDiagnostic {
  title?: string;
  description?: string;
  challenge?: string;
  priority?: string;
  impact?: string;
}

interface EnrichedDiagnostic {
  challenge_code: string;
  suggested_lever_code?: string;
  severity: string;
}

/**
 * Enriquece o diagnóstico da IA com códigos padronizados
 */
export const enrichDiagnosticWithCodes = (
  diagnostic: AIDiagnostic,
): EnrichedDiagnostic => {
  const title = diagnostic?.title?.toLowerCase() || "";
  const description = diagnostic?.description?.toLowerCase() || "";
  const fullText = `${title} ${description}`;

  // Mapeamento de palavras-chave para challenge codes
  const challengeMappings: Record<string, { code: string; severity: string }> =
    {
      caixa: { code: "CASH_SHORTAGE", severity: "critical" },
      dinheiro: { code: "CASH_SHORTAGE", severity: "critical" },
      margem: { code: "LOW_PROFITABILITY", severity: "high" },
      lucro: { code: "LOW_PROFITABILITY", severity: "high" },
      churn: { code: "CUSTOMER_LOSS", severity: "high" },
      cancelamento: { code: "CUSTOMER_LOSS", severity: "high" },
      conversão: { code: "LOW_SALES_CONVERSION", severity: "medium" },
      vendas: { code: "LOW_SALES_CONVERSION", severity: "medium" },
      estoque: { code: "STOCK_STAGNATION", severity: "medium" },
      despesa: { code: "HIGH_FIXED_COSTS", severity: "medium" },
      "custo fixo": { code: "HIGH_FIXED_COSTS", severity: "medium" },
      recebimento: { code: "LATE_RECEIVABLES", severity: "medium" },
      cac: { code: "HIGH_ACQUISITION_COST", severity: "medium" },
      aquisição: { code: "HIGH_ACQUISITION_COST", severity: "medium" },
      demora: { code: "DELIVERY_DELAY", severity: "low" },
      prazo: { code: "DELIVERY_DELAY", severity: "low" },
    };

  // Encontrar o desafio mais relevante
  let bestMatch: { code: string; severity: string } | null = null;
  let bestScore = 0;

  for (const [keyword, mapping] of Object.entries(challengeMappings)) {
    const occurrences = (fullText.match(new RegExp(keyword, "gi")) || [])
      .length;
    if (occurrences > bestScore) {
      bestScore = occurrences;
      bestMatch = mapping;
    }
  }

  // Mapeamento desafio → alavanca sugerida
  const leverSuggestions: Record<string, string> = {
    CASH_SHORTAGE: "LEV_CASH_CYCLE",
    LOW_PROFITABILITY: "LEV_PRICE",
    CUSTOMER_LOSS: "LEV_RETENTION",
    LOW_SALES_CONVERSION: "LEV_CONVERSION",
    STOCK_STAGNATION: "LEV_STOCK_TURN",
    HIGH_FIXED_COSTS: "LEV_FIXED_COST",
    LATE_RECEIVABLES: "LEV_CASH_CYCLE",
    HIGH_ACQUISITION_COST: "LEV_ACQ_EFF",
    DELIVERY_DELAY: "LEV_WASTE",
  };

  const challenge_code = bestMatch?.code || "LOW_PROFITABILITY";
  const severity = bestMatch?.severity || "medium";
  const suggested_lever_code = leverSuggestions[challenge_code];

  return {
    challenge_code,
    suggested_lever_code,
    severity,
  };
};
