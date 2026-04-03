import type { Domain, UniversalDocumentType } from "@/types/financial-parser";

export type DataType =
  | "currency"
  | "percent"
  | "count"
  | "number"
  | "date"
  | "text";

export interface SemanticField {
  code: string;
  name: string;
  nameEn: string;
  type: DataType;
  aliases: string[];
  domain: Domain;
  category: string;
}

export interface DomainSemanticConfig {
  domain: Domain;
  documentTypes: UniversalDocumentType[];
  fields: SemanticField[];
  keywords: string[];
}

const createField = (
  code: string,
  name: string,
  nameEn: string,
  type: DataType,
  aliases: string[],
  domain: Domain,
  category: string,
): SemanticField => ({ code, name, nameEn, type, aliases, domain, category });

export const SEMANTIC_DOMAINS: Record<Domain, DomainSemanticConfig> = {
  finance: {
    domain: "finance",
    documentTypes: ["bank_statement", "dre", "cash_flow", "balance_sheet"],
    keywords: [
      "data",
      "dt",
      "transação",
      "transaction",
      "valor",
      "amount",
      "crédito",
      "credit",
      "debito",
      "saldo",
      "balance",
      "receita",
      "revenue",
      "despesa",
      "expense",
      "lucro",
      "profit",
      "ebitda",
    ],
    fields: [
      createField(
        "REVENUE_MONTHLY",
        "Receita Mensal",
        "Monthly Revenue",
        "currency",
        ["receita", "vendas", "faturamento", "sales", "revenue"],
        "finance",
        "revenue",
      ),
      createField(
        "EXPENSE_MONTHLY",
        "Despesa Mensal",
        "Monthly Expense",
        "currency",
        ["despesa", "custo", "gasto", "expense", "cost"],
        "finance",
        "expense",
      ),
      createField(
        "GROSS_MARGIN",
        "Margem Bruta",
        "Gross Margin",
        "percent",
        ["margem_bruta", "lucro_bruto", "gross_margin"],
        "finance",
        "profit",
      ),
      createField(
        "NET_MARGIN",
        "Margem Líquida",
        "Net Margin",
        "percent",
        ["margem_liquida", "lucro_liquido", "net_margin"],
        "finance",
        "profit",
      ),
      createField(
        "EBITDA",
        "EBITDA",
        "EBITDA",
        "currency",
        ["ebitda", "lucro_operacional"],
        "finance",
        "profit",
      ),
      createField(
        "CURRENT_RATIO",
        "Liquidez Corrente",
        "Current Ratio",
        "number",
        ["liquidez_corrente", "current_ratio"],
        "finance",
        "liquidity",
      ),
      createField(
        "QUICK_RATIO",
        "Liquidez Seca",
        "Quick Ratio",
        "number",
        ["liquidez_seca", "quick_ratio"],
        "finance",
        "liquidity",
      ),
      createField(
        "DEBT_TO_EQUITY",
        "Endividamento",
        "Debt to Equity",
        "number",
        ["endividamento", "divida", "leverage", "debt_to_equity"],
        "finance",
        "solvency",
      ),
      createField(
        "CASH_FLOW",
        "Fluxo de Caixa",
        "Cash Flow",
        "currency",
        ["fluxo_caixa", "cash_flow"],
        "finance",
        "liquidity",
      ),
      createField(
        "ACCOUNTS_RECEIVABLE",
        "Contas a Receber",
        "Accounts Receivable",
        "currency",
        ["contas_receber", "receivables", "clients"],
        "finance",
        "asset",
      ),
      createField(
        "ACCOUNTS_PAYABLE",
        "Contas a Pagar",
        "Accounts Payable",
        "currency",
        ["contas_pagar", "payables", "suppliers"],
        "finance",
        "liability",
      ),
    ],
  },
  commercial: {
    domain: "commercial",
    documentTypes: [
      "sales_report",
      "crm_export",
      "pipeline_data",
      "revenue_report",
    ],
    keywords: [
      "cliente",
      "customer",
      "venda",
      "sale",
      "produto",
      "product",
      "ticket",
      "conversão",
      "conversion",
      "lead",
      "opportunity",
      "pipeline",
      "estágio",
      "stage",
    ],
    fields: [
      createField(
        "CAC",
        "Custo de Aquisição",
        "Customer Acquisition Cost",
        "currency",
        ["cac", "custo_aquisicao", "acquisition_cost"],
        "commercial",
        "acquisition",
      ),
      createField(
        "LTV",
        "Lifetime Value",
        "Lifetime Value",
        "currency",
        ["ltv", "lifetime_value", "valor_vida"],
        "commercial",
        "retention",
      ),
      createField(
        "LTV_CAC_RATIO",
        "Relação LTV/CAC",
        "LTV/CAC Ratio",
        "number",
        ["ltv_cac", "ratio"],
        "commercial",
        "efficiency",
      ),
      createField(
        "CHURN_RATE",
        "Taxa de Cancelamento",
        "Churn Rate",
        "percent",
        ["churn", "cancelamento", "perda", "cancellation"],
        "commercial",
        "retention",
      ),
      createField(
        "AVG_TICKET",
        "Ticket Médio",
        "Average Ticket",
        "currency",
        ["ticket_medio", "avg_ticket", "ticket"],
        "commercial",
        "revenue",
      ),
      createField(
        "SALES_CONVERSION",
        "Taxa de Conversão",
        "Sales Conversion",
        "percent",
        ["conversao", "fechamento", "conversion", "win_rate"],
        "commercial",
        "conversion",
      ),
      createField(
        "SALES_CYCLE_DAYS",
        "Ciclo de Vendas",
        "Sales Cycle",
        "number",
        ["ciclo_venda", "sales_cycle", "cycle_days"],
        "commercial",
        "timing",
      ),
      createField(
        "PIPELINE_VALUE",
        "Valor do Pipeline",
        "Pipeline Value",
        "currency",
        ["pipeline", "oportunidade", "opportunity_value"],
        "commercial",
        "pipeline",
      ),
      createField(
        "CUSTOMER_COUNT",
        "Número de Clientes",
        "Customer Count",
        "count",
        ["clientes", "customers", "customer_count"],
        "commercial",
        "customer",
      ),
      createField(
        "NEW_CUSTOMERS",
        "Novos Clientes",
        "New Customers",
        "count",
        ["novos_clientes", "new_customers", "acquisition"],
        "commercial",
        "growth",
      ),
      createField(
        "DEALS_WON",
        "Negócios Fechados",
        "Deals Won",
        "count",
        ["negocios_fechados", "deals_won", "wins"],
        "commercial",
        "conversion",
      ),
    ],
  },
  marketing: {
    domain: "marketing",
    documentTypes: [
      "campaign_report",
      "analytics_export",
      "ad_spend_report",
      "lead_report",
    ],
    keywords: [
      "campanha",
      "campaign",
      "clique",
      "click",
      "impressão",
      "impression",
      "custo",
      "cost",
      "spend",
      "roi",
      "lead",
      "conversão",
      "canal",
      "channel",
    ],
    fields: [
      createField(
        "CAC_MARKETING",
        "CAC Marketing",
        "Marketing CAC",
        "currency",
        ["cac_marketing", "marketing_cac"],
        "marketing",
        "acquisition",
      ),
      createField(
        "ROI",
        "Retorno sobre Investimento",
        "Return on Investment",
        "percent",
        ["roi", "retorno", "return_investment"],
        "marketing",
        "return",
      ),
      createField(
        "LEAD_CONVERSION",
        "Conversão de Leads",
        "Lead Conversion",
        "percent",
        ["lead_conversao", "conversao_lead", "lead_conversion"],
        "marketing",
        "conversion",
      ),
      createField(
        "COST_PER_LEAD",
        "Custo por Lead",
        "Cost per Lead",
        "currency",
        ["custo_lead", "cpl", "cost_per_lead"],
        "marketing",
        "cost",
      ),
      createField(
        "CAMPAIGN_ROI",
        "ROI de Campanha",
        "Campaign ROI",
        "percent",
        ["campanha_roi", "campaign_roi"],
        "marketing",
        "return",
      ),
      createField(
        "EMAIL_OPEN_RATE",
        "Taxa de Abertura",
        "Email Open Rate",
        "percent",
        ["abertura_email", "open_rate", "email_open"],
        "marketing",
        "engagement",
      ),
      createField(
        "CLICK_THROUGH_RATE",
        "Taxa de Clique",
        "Click Through Rate",
        "percent",
        ["clique_ctr", "click_rate", "ctr"],
        "marketing",
        "engagement",
      ),
      createField(
        "IMPRESSIONS",
        "Impressões",
        "Impressions",
        "count",
        ["impressoes", "impressions", "views"],
        "marketing",
        "reach",
      ),
      createField(
        "CLICKS",
        "Cliques",
        "Clicks",
        "count",
        ["cliques", "clicks"],
        "marketing",
        "engagement",
      ),
      createField(
        "AD_SPEND",
        "Gasto com Anúncios",
        "Ad Spend",
        "currency",
        ["gasto_anuncio", "ad_spend", "marketing_spend"],
        "marketing",
        "cost",
      ),
    ],
  },
  operations: {
    domain: "operations",
    documentTypes: [
      "productivity_report",
      "operations_kpi",
      "capacity_report",
      "quality_report",
    ],
    keywords: [
      "produtividade",
      "productivity",
      "eficiência",
      "efficiency",
      "ciclo",
      "cycle",
      "defeito",
      "defect",
      "quality",
      "capacidade",
      "capacity",
    ],
    fields: [
      createField(
        "PRODUCTIVITY_INDEX",
        "Índice de Produtividade",
        "Productivity Index",
        "number",
        ["produtividade", "productivity_index"],
        "operations",
        "productivity",
      ),
      createField(
        "EFFICIENCY_RATIO",
        "Índice de Eficiência",
        "Efficiency Ratio",
        "percent",
        ["eficiencia", "efficiency_ratio"],
        "operations",
        "efficiency",
      ),
      createField(
        "CYCLE_TIME_DAYS",
        "Tempo de Ciclo",
        "Cycle Time",
        "number",
        ["tempo_ciclo", "cycle_time", "lead_time"],
        "operations",
        "timing",
      ),
      createField(
        "DEFECT_RATE",
        "Taxa de Defeitos",
        "Defect Rate",
        "percent",
        ["defeito", "defect_rate", "qualidade"],
        "operations",
        "quality",
      ),
      createField(
        "CAPACITY_UTILIZATION",
        "Utilização de Capacidade",
        "Capacity Utilization",
        "percent",
        ["capacidade", "capacity_utilization", "utilizacao"],
        "operations",
        "capacity",
      ),
      createField(
        "OEE",
        "OEE",
        "Overall Equipment Effectiveness",
        "percent",
        ["oee", "overall_equipment"],
        "operations",
        "efficiency",
      ),
      createField(
        "FIRST_PASS_YIELD",
        "Primeira Passada",
        "First Pass Yield",
        "percent",
        ["fpy", "first_pass_yield", "rendimento_primeira"],
        "operations",
        "quality",
      ),
      createField(
        "DOWNTIME_HOURS",
        "Horas de Parada",
        "Downtime Hours",
        "number",
        ["parada", "downtime_hours"],
        "operations",
        "availability",
      ),
      createField(
        "TOTAL_PRODUCED",
        "Total Produzido",
        "Total Produced",
        "count",
        ["produzido", "total_produced", "output"],
        "operations",
        "volume",
      ),
    ],
  },
  people: {
    domain: "people",
    documentTypes: [
      "payroll_report",
      "headcount_report",
      "turnover_report",
      "hiring_report",
    ],
    keywords: [
      "funcionário",
      "employee",
      "colaborador",
      "turnover",
      "rotatividade",
      "headcount",
      "folha",
      "payroll",
      "contratar",
      "hiring",
    ],
    fields: [
      createField(
        "TURNOVER_RATE",
        "Taxa de Turnover",
        "Turnover Rate",
        "percent",
        ["turnover", "rotatividade", "turnover_rate"],
        "people",
        "retention",
      ),
      createField(
        "HEADCOUNT",
        "Número de Funcionários",
        "Headcount",
        "count",
        ["headcount", "funcionarios", "colaboradores", "employees"],
        "people",
        "headcount",
      ),
      createField(
        "PRODUCTIVITY_PER_EMP",
        "Produtividade por Funcionário",
        "Productivity per Employee",
        "number",
        ["produtividade_funcionario", "productivity_per_emp"],
        "people",
        "productivity",
      ),
      createField(
        "PAYROLL_RATIO",
        "Proporção de Folha",
        "Payroll Ratio",
        "percent",
        ["folha_pagamento", "payroll_ratio", "despesa_pessoal"],
        "people",
        "cost",
      ),
      createField(
        "AVG_TENURE_YEARS",
        "Tempo Médio de Casa",
        "Average Tenure",
        "number",
        ["tempo_casa", "avg_tenure", "antiguedade"],
        "people",
        "retention",
      ),
      createField(
        "HIRING_COST_PER_HIRE",
        "Custo por Contratação",
        "Hiring Cost",
        "currency",
        [
          "contratacao",
          "contratação",
          "contratar",
          "hiring",
          "cost_per_hire",
          "contrat",
        ],
        "people",
        "cost",
      ),
      createField(
        "COST_PER_EMPLOYEE",
        "Custo por Colaborador",
        "Cost per Employee",
        "currency",
        ["custo_colaborador", "cost_per_employee"],
        "people",
        "cost",
      ),
      createField(
        "NEW_HIRES",
        "Novas Contratações",
        "New Hires",
        "count",
        ["novas_contratacoes", "new_hires", "hires"],
        "people",
        "growth",
      ),
      createField(
        "OPEN_POSITIONS",
        "Posições Abertas",
        "Open Positions",
        "count",
        ["posicoes_abertas", "open_positions", "vacancies"],
        "people",
        "staffing",
      ),
    ],
  },
  strategy: {
    domain: "strategy",
    documentTypes: [],
    keywords: [
      "estratégico",
      "strategic",
      "meta",
      "goal",
      "objective",
      "projeção",
      "projection",
      "forecast",
    ],
    fields: [
      createField(
        "GROWTH_RATE",
        "Taxa de Crescimento",
        "Growth Rate",
        "percent",
        ["taxa_crescimento", "growth_rate", "crescimento"],
        "strategy",
        "growth",
      ),
      createField(
        "MARKET_SHARE",
        "Participação de Mercado",
        "Market Share",
        "percent",
        ["market_share", "participacao_mercado"],
        "strategy",
        "position",
      ),
      createField(
        "NET_PROMOTER_SCORE",
        "NPS",
        "Net Promoter Score",
        "number",
        ["nps", "net_promoter_score"],
        "strategy",
        "satisfaction",
      ),
    ],
  },
};

export function getAllSemanticFields(): SemanticField[] {
  return Object.values(SEMANTIC_DOMAINS).flatMap((config) => config.fields);
}

export function findSemanticField(
  domain: Domain,
  columnName: string,
): SemanticField | null {
  const config = SEMANTIC_DOMAINS[domain];
  if (!config) return null;

  const normalized = columnName.toLowerCase().replace(/[_\-\s]/g, "");

  for (const field of config.fields) {
    if (field.code.toLowerCase() === normalized) return field;

    for (const alias of field.aliases) {
      const aliasNormalized = alias.toLowerCase().replace(/[_\-\s]/g, "");
      if (
        normalized.includes(aliasNormalized) ||
        aliasNormalized.includes(normalized)
      ) {
        return field;
      }
    }
  }

  return null;
}

export function getSemanticConfig(domain: Domain): DomainSemanticConfig | null {
  return SEMANTIC_DOMAINS[domain] || null;
}

export function detectDomainFromText(text: string): Domain | null {
  const textLower = text.toLowerCase();
  let bestDomain: Domain | null = null;
  let bestScore = 0;

  for (const [domain, config] of Object.entries(SEMANTIC_DOMAINS)) {
    const score = config.keywords.filter((kw) =>
      textLower.includes(kw.toLowerCase()),
    ).length;
    if (score > bestScore) {
      bestScore = score;
      bestDomain = domain as Domain;
    }
  }

  return bestDomain;
}

export interface DomainDisplayConfig {
  code: Domain;
  label: string;
  labelPlural: string;
  description: string;
  icon: string;
  userAliases: string[];
}

export const DOMAIN_DISPLAY_CONFIG: DomainDisplayConfig[] = [
  {
    code: "finance",
    label: "Financeiro",
    labelPlural: "Dados Financeiros",
    description: "Receitas, despesas, fluxo de caixa, lucratividade",
    icon: "💰",
    userAliases: ["financeiro", "finança", "contas", "caixa", "banco"],
  },
  {
    code: "commercial",
    label: "Vendas",
    labelPlural: "Dados de Vendas",
    description: "Clientes, pedidos, conversão, ticket médio",
    icon: "📈",
    userAliases: [
      "vendas",
      "comercial",
      "cliente",
      "clientes",
      "produtos",
      "serviços",
      "pedidos",
      "ecommerce",
    ],
  },
  {
    code: "marketing",
    label: "Marketing",
    labelPlural: "Dados de Marketing",
    description: "Campanhas, leads, ROI, tráfego",
    icon: "📣",
    userAliases: ["marketing", "mídia", "publicidade", "campanhas", "leads"],
  },
  {
    code: "operations",
    label: "Operações",
    labelPlural: "Dados Operacionais",
    description: "Produtividade, eficiência, qualidade",
    icon: "⚙️",
    userAliases: [
      "operações",
      "operacional",
      "logística",
      "entrega",
      "produção",
      "estoque",
      "armazém",
    ],
  },
  {
    code: "people",
    label: "Pessoas",
    labelPlural: "Dados de Pessoas",
    description: "Funcionários, turnover, folha de pagamento",
    icon: "👥",
    userAliases: [
      "pessoas",
      "rh",
      "recursos humanos",
      "funcionários",
      "colaboradores",
      "equipe",
    ],
  },
  {
    code: "strategy",
    label: "Estratégico",
    labelPlural: "Dados Estratégicos",
    description: "Metas, projeções, indicadores estratégicos",
    icon: "🎯",
    userAliases: ["estratégico", "estrategia", "metas", "objetivos", "kpis"],
  },
];

export function getDisplayConfig(
  domain: Domain,
): DomainDisplayConfig | undefined {
  return DOMAIN_DISPLAY_CONFIG.find((d) => d.code === domain);
}

export function findDomainByUserAlias(userInput: string): Domain | null {
  const normalized = userInput.toLowerCase().trim();

  for (const config of DOMAIN_DISPLAY_CONFIG) {
    if (
      config.label.toLowerCase() === normalized ||
      config.labelPlural.toLowerCase().includes(normalized) ||
      config.userAliases.some((alias) => alias.toLowerCase() === normalized)
    ) {
      return config.code;
    }
  }

  return null;
}

export function getAllDisplayLabels(): { value: string; label: string }[] {
  return DOMAIN_DISPLAY_CONFIG.map((d) => ({
    value: d.code,
    label: d.label,
  }));
}
