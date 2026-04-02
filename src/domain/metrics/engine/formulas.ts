import {
  LibraryKPI,
  KPIResult,
  CalculationStatus,
  ConfidenceLevel,
  Sector,
  GroupDataPeriod,
} from "./types";

export type FormulaType =
  | "simple_ratio"
  | "percentage"
  | "aggregation"
  | "derived"
  | "conditional";

export interface FormulaParameter {
  name: string;
  description: string;
  required: boolean;
}

export interface KPIFormula {
  code: string;
  type: FormulaType;
  description: string;
  calculation: (params: Record<string, number | number[]>) => CalculationResult;
  requiredFields: FormulaParameter[];
  getDependencies?: () => string[];
  getConfidence: (params: Record<string, number | number[]>) => ConfidenceLevel;
  getThresholds?: () => { critical: number; warning: number; good: number };
}

export interface CalculationResult {
  value: number | null;
  status: CalculationStatus;
  error?: string;
  warnings: string[];
}

export interface SectorKPIConfig {
  sector: Sector;
  formulas: Record<string, KPIFormula>;
}

const createSafeDivision = (
  numerator: number,
  denominator: number,
  fallback = 0,
  multiplier = 100,
): CalculationResult => {
  if (denominator === 0) {
    return {
      value: null,
      status: "division_by_zero",
      error: `Divisor é zero: ${numerator} / ${denominator}`,
      warnings: [],
    };
  }
  if (!isFinite(numerator) || !isFinite(denominator)) {
    return {
      value: null,
      status: "overflow",
      error: "Valor muito grande para cálculo",
      warnings: [],
    };
  }
  const value = (numerator / denominator) * multiplier;
  if (isNaN(value) || !isFinite(value)) {
    return {
      value: null,
      status: "invalid_input",
      error: "Resultado inválido",
      warnings: [],
    };
  }
  return { value, status: "success", warnings: [] };
};

const createAggregation = (
  values: number[],
  type: "sum" | "average" | "last" | "min" | "max",
): CalculationResult => {
  if (!values || values.length === 0) {
    return {
      value: null,
      status: "insufficient_data",
      error: "Sem dados para agregação",
      warnings: [],
    };
  }

  const validValues = values.filter((v) => isFinite(v) && v !== null);
  if (validValues.length === 0) {
    return {
      value: null,
      status: "insufficient_data",
      error: "Sem valores válidos para agregação",
      warnings: [],
    };
  }

  let value: number;
  const warnings: string[] = [];

  if (validValues.length < values.length) {
    warnings.push(
      `${values.length - validValues.length} valores inválidos foram ignorados`,
    );
  }

  switch (type) {
    case "sum":
      value = validValues.reduce((a, b) => a + b, 0);
      break;
    case "average":
      value = validValues.reduce((a, b) => a + b, 0) / validValues.length;
      break;
    case "last":
      value = validValues[validValues.length - 1];
      break;
    case "min":
      value = Math.min(...validValues);
      break;
    case "max":
      value = Math.max(...validValues);
      break;
  }

  return { value, status: "success", warnings };
};

const getConfidenceFromDataCompleteness = (
  requiredFields: string[],
  providedFields: Record<string, number | number[]>,
): ConfidenceLevel => {
  const providedCount = requiredFields.filter(
    (f) => providedFields[f] !== undefined && providedFields[f] !== null,
  ).length;

  const ratio = providedCount / requiredFields.length;

  if (ratio >= 0.9) return "high";
  if (ratio >= 0.6) return "medium";
  if (ratio >= 0.3) return "low";
  return "unknown";
};

export const KPI_FORMULAS: Record<string, KPIFormula> = {
  // TECHNOLOGY SECTOR
  "TECH-MRR-001": {
    code: "TECH-MRR-001",
    type: "simple_ratio",
    description: "Receita recorrente mensal de contratos SaaS",
    requiredFields: [
      { name: "mrr", description: "Monthly Recurring Revenue", required: true },
    ],
    calculation: (params) => {
      const mrr = params.mrr as number;
      if (mrr === undefined || !isFinite(mrr)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "MRR não fornecido",
          warnings: [],
        };
      }
      return { value: mrr, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["mrr"], params),
    getThresholds: () => ({ critical: 0, warning: 10000, good: 50000 }),
  },
  "TECH-CHURN-001": {
    code: "TECH-CHURN-001",
    type: "percentage",
    description: "Taxa de cancelamento de clientes",
    requiredFields: [
      {
        name: "churned_customers",
        description: "Clientes que cancelaram",
        required: true,
      },
      {
        name: "total_customers",
        description: "Total de clientes",
        required: true,
      },
    ],
    calculation: (params) => {
      const churned = params.churned_customers as number;
      const total = params.total_customers as number;
      return createSafeDivision(churned, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["churned_customers", "total_customers"],
        params,
      ),
    getThresholds: () => ({ critical: 15, warning: 8, good: 2 }),
  },
  "TECH-NRR-001": {
    code: "TECH-NRR-001",
    type: "percentage",
    description: "Retenção de receita líquida",
    requiredFields: [
      { name: "starting_mrr", description: "MRR inicial", required: true },
      { name: "churn_mrr", description: "MRR perdido", required: true },
      { name: "expansion_mrr", description: "MRR de expansão", required: true },
    ],
    calculation: (params) => {
      const start = params.starting_mrr as number;
      const churn = params.churn_mrr as number;
      const expansion = params.expansion_mrr as number;

      if (start === undefined || !isFinite(start) || start === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "MRR inicial não fornecido",
          warnings: [],
        };
      }

      const result = ((start - (churn || 0) + (expansion || 0)) / start) * 100;
      return createSafeDivision(
        start - (churn || 0) + (expansion || 0),
        start,
        100,
        100,
      );
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["starting_mrr"], params),
    getThresholds: () => ({ critical: 70, warning: 90, good: 110 }),
  },
  "TECH-CAC-001": {
    code: "TECH-CAC-001",
    type: "simple_ratio",
    description: "Custo de aquisição por cliente",
    requiredFields: [
      {
        name: "marketing_spend",
        description: "Gasto com marketing",
        required: true,
      },
      { name: "sales_spend", description: "Gasto com vendas", required: true },
      {
        name: "new_customers",
        description: "Novos clientes adquiridos",
        required: true,
      },
    ],
    calculation: (params) => {
      const marketing = (params.marketing_spend as number) || 0;
      const sales = (params.sales_spend as number) || 0;
      const customers = params.new_customers as number;

      const totalSpend = marketing + sales;
      return createSafeDivision(totalSpend, customers, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["marketing_spend", "new_customers"],
        params,
      ),
    getThresholds: () => ({ critical: 1000, warning: 500, good: 200 }),
  },
  "TECH-LTV-001": {
    code: "TECH-LTV-001",
    type: "derived",
    description: "Valor do ciclo de vida do cliente",
    requiredFields: [
      { name: "mrr", description: "Monthly Recurring Revenue", required: true },
      {
        name: "churn_rate",
        description: "Taxa de churn mensal",
        required: true,
      },
    ],
    calculation: (params) => {
      const mrr = params.mrr as number;
      const churnRate = params.churn_rate as number;

      if (mrr === undefined || !isFinite(mrr)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "MRR não fornecido",
          warnings: [],
        };
      }

      if (churnRate === undefined || !isFinite(churnRate) || churnRate === 0) {
        return {
          value: mrr * 24,
          status: "success",
          warnings: ["Taxa de churn não fornecida, usando默认值 de 24 meses"],
        };
      }

      const ltv = mrr / (churnRate / 100);
      return { value: ltv, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["mrr"], params),
    getThresholds: () => ({ critical: 500, warning: 2000, good: 10000 }),
  },
  "TECH-LTVCAC-001": {
    code: "TECH-LTVCAC-001",
    type: "simple_ratio",
    description: "Proporção LTV por CAC",
    requiredFields: [
      { name: "ltv", description: "Lifetime Value", required: true },
      { name: "cac", description: "Customer Acquisition Cost", required: true },
    ],
    calculation: (params) => {
      const ltv = params.ltv as number;
      const cac = params.cac as number;
      return createSafeDivision(ltv, cac, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["ltv", "cac"], params),
    getThresholds: () => ({ critical: 1, warning: 2, good: 3 }),
  },
  "TECH-DAU-001": {
    code: "TECH-DAU-001",
    type: "aggregation",
    description: "Usuários ativos diários",
    requiredFields: [
      {
        name: "daily_active_users",
        description: "Usuários ativos por dia",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.daily_active_users as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados diários não fornecidos",
          warnings: [],
        };
      }
      return createAggregation(values, "average");
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["daily_active_users"], params),
    getThresholds: () => ({ critical: 100, warning: 1000, good: 10000 }),
  },
  "TECH-MAU-001": {
    code: "TECH-MAU-001",
    type: "aggregation",
    description: "Usuários ativos mensais",
    requiredFields: [
      {
        name: "monthly_active_users",
        description: "Usuários ativos por mês",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.monthly_active_users as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados mensais não fornecidos",
          warnings: [],
        };
      }
      return createAggregation(values, "last");
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["monthly_active_users"], params),
    getThresholds: () => ({ critical: 500, warning: 5000, good: 50000 }),
  },
  "TECH-NPS-001": {
    code: "TECH-NPS-001",
    type: "simple_ratio",
    description: "Net Promoter Score",
    requiredFields: [
      { name: "promoters", description: "Promotores (9-10)", required: true },
      { name: "detractors", description: "Detratores (0-6)", required: true },
      {
        name: "total_responses",
        description: "Total de respostas",
        required: true,
      },
    ],
    calculation: (params) => {
      const promoters = params.promoters as number;
      const detractors = params.detractors as number;
      const total = params.total_responses as number;

      if (total === undefined || total === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Total de respostas não fornecido",
          warnings: [],
        };
      }

      const promoterPct = ((promoters || 0) / total) * 100;
      const detractorPct = ((detractors || 0) / total) * 100;
      const nps = promoterPct - detractorPct;

      return { value: nps, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["total_responses"], params),
    getThresholds: () => ({ critical: 0, warning: 30, good: 50 }),
  },
  "TECH-FIRST-RESPONSE": {
    code: "TECH-FIRST-RESPONSE",
    type: "aggregation",
    description: "Tempo médio de primeira resposta",
    requiredFields: [
      {
        name: "response_times",
        description: "Tempos de resposta em horas",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.response_times as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados de tempo não fornecidos",
          warnings: [],
        };
      }
      return createAggregation(values, "average");
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["response_times"], params),
    getThresholds: () => ({ critical: 24, warning: 8, good: 1 }),
  },

  // RETAIL SECTOR
  "RET-GMV-001": {
    code: "RET-GMV-001",
    type: "simple_ratio",
    description: "Valor bruto de mercadorias vendidas",
    requiredFields: [
      { name: "gmv", description: "Gross Merchandise Value", required: true },
    ],
    calculation: (params) => {
      const gmv = params.gmv as number;
      if (gmv === undefined || !isFinite(gmv)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "GMV não fornecido",
          warnings: [],
        };
      }
      return { value: gmv, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["gmv"], params),
    getThresholds: () => ({ critical: 0, warning: 50000, good: 200000 }),
  },
  "RET-AOV-001": {
    code: "RET-AOV-001",
    type: "simple_ratio",
    description: "Valor médio por pedido",
    requiredFields: [
      { name: "gmv", description: "Valor total das vendas", required: true },
      { name: "orders", description: "Número de pedidos", required: true },
    ],
    calculation: (params) => {
      const gmv = params.gmv as number;
      const orders = params.orders as number;
      return createSafeDivision(gmv, orders, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["gmv", "orders"], params),
    getThresholds: () => ({ critical: 50, warning: 100, good: 200 }),
  },
  "RET-CONVERSION-001": {
    code: "RET-CONVERSION-001",
    type: "percentage",
    description: "Taxa de conversão de visitantes",
    requiredFields: [
      { name: "orders", description: "Pedidos concluídos", required: true },
      { name: "visitors", description: "Visitantes únicos", required: true },
    ],
    calculation: (params) => {
      const orders = params.orders as number;
      const visitors = params.visitors as number;
      return createSafeDivision(orders, visitors, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["orders", "visitors"], params),
    getThresholds: () => ({ critical: 0.5, warning: 2, good: 5 }),
  },
  "RET-ATC-001": {
    code: "RET-ATC-001",
    type: "percentage",
    description: "Taxa de adicionar ao carrinho",
    requiredFields: [
      { name: "cart_adds", description: "Adições ao carrinho", required: true },
      { name: "visitors", description: "Visitantes únicos", required: true },
    ],
    calculation: (params) => {
      const cartAdds = params.cart_adds as number;
      const visitors = params.visitors as number;
      return createSafeDivision(cartAdds, visitors, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["cart_adds", "visitors"], params),
    getThresholds: () => ({ critical: 5, warning: 15, good: 30 }),
  },
  "RET-RETURN-RATE": {
    code: "RET-RETURN-RATE",
    type: "percentage",
    description: "Taxa de devolução",
    requiredFields: [
      { name: "returns", description: "Pedidos devolvidos", required: true },
      { name: "orders", description: "Total de pedidos", required: true },
    ],
    calculation: (params) => {
      const returns = params.returns as number;
      const orders = params.orders as number;
      return createSafeDivision(returns, orders, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["returns", "orders"], params),
    getThresholds: () => ({ critical: 30, warning: 15, good: 5 }),
  },
  "RET-INVENTORY-TURNS": {
    code: "RET-INVENTORY-TURNS",
    type: "simple_ratio",
    description: "Giro de estoque",
    requiredFields: [
      {
        name: "cogs",
        description: "Custo de mercadorias vendidas",
        required: true,
      },
      {
        name: "inventory_value",
        description: "Valor do estoque",
        required: true,
      },
    ],
    calculation: (params) => {
      const cogs = params.cogs as number;
      const inventory = params.inventory_value as number;
      return createSafeDivision(cogs, inventory, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["cogs", "inventory_value"], params),
    getThresholds: () => ({ critical: 2, warning: 4, good: 8 }),
  },
  "RET-SELL-THROUGH": {
    code: "RET-SELL-THROUGH",
    type: "percentage",
    description: "Taxa de conversão de estoque",
    requiredFields: [
      { name: "units_sold", description: "Unidades vendidas", required: true },
      {
        name: "units_received",
        description: "Unidades recebidas",
        required: true,
      },
    ],
    calculation: (params) => {
      const sold = params.units_sold as number;
      const received = params.units_received as number;
      return createSafeDivision(sold, received, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["units_sold", "units_received"],
        params,
      ),
    getThresholds: () => ({ critical: 30, warning: 60, good: 85 }),
  },
  "RET-OTP-001": {
    code: "RET-OTP-001",
    type: "simple_ratio",
    description: "Tempo entre pedido e retirada",
    requiredFields: [
      {
        name: "order_to_pickup_time",
        description: "Tempo em horas",
        required: true,
      },
    ],
    calculation: (params) => {
      const time = params.order_to_pickup_time as number;
      if (time === undefined || !isFinite(time)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Tempo não fornecido",
          warnings: [],
        };
      }
      return { value: time, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["order_to_pickup_time"], params),
    getThresholds: () => ({ critical: 4, warning: 2, good: 0.5 }),
  },
  "RET-ATV-001": {
    code: "RET-ATV-001",
    type: "simple_ratio",
    description: "Valor médio da transação",
    requiredFields: [
      { name: "revenue", description: "Receita total", required: true },
      {
        name: "transactions",
        description: "Número de transações",
        required: true,
      },
    ],
    calculation: (params) => {
      const revenue = params.revenue as number;
      const transactions = params.transactions as number;
      return createSafeDivision(revenue, transactions, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["revenue", "transactions"], params),
    getThresholds: () => ({ critical: 20, warning: 50, good: 100 }),
  },
  "RET-CUSTOMER-FREQ": {
    code: "RET-CUSTOMER-FREQ",
    type: "simple_ratio",
    description: "Frequência de visitas do cliente",
    requiredFields: [
      { name: "total_visits", description: "Total de visitas", required: true },
      {
        name: "unique_customers",
        description: "Clientes únicos",
        required: true,
      },
    ],
    calculation: (params) => {
      const visits = params.total_visits as number;
      const customers = params.unique_customers as number;
      return createSafeDivision(visits, customers, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["total_visits", "unique_customers"],
        params,
      ),
    getThresholds: () => ({ critical: 1, warning: 2, good: 4 }),
  },

  // HEALTHCARE SECTOR
  "HEALTH-OCCUPANCY": {
    code: "HEALTH-OCCUPANCY",
    type: "percentage",
    description: "Taxa de ocupação de leitos",
    requiredFields: [
      { name: "occupied_beds", description: "Leitos ocupados", required: true },
      { name: "total_beds", description: "Total de leitos", required: true },
    ],
    calculation: (params) => {
      const occupied = params.occupied_beds as number;
      const total = params.total_beds as number;
      return createSafeDivision(occupied, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["occupied_beds", "total_beds"],
        params,
      ),
    getThresholds: () => ({ critical: 50, warning: 75, good: 85 }),
  },
  "HEALTH-READMISSION": {
    code: "HEALTH-READMISSION",
    type: "percentage",
    description: "Taxa de readmissão",
    requiredFields: [
      {
        name: "readmissions",
        description: "Readmissões em 30 dias",
        required: true,
      },
      {
        name: "total_discharges",
        description: "Total de altas",
        required: true,
      },
    ],
    calculation: (params) => {
      const readmissions = params.readmissions as number;
      const total = params.total_discharges as number;
      return createSafeDivision(readmissions, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["readmissions", "total_discharges"],
        params,
      ),
    getThresholds: () => ({ critical: 20, warning: 10, good: 5 }),
  },
  "HEALTH-WAIT-TIME": {
    code: "HEALTH-WAIT-TIME",
    type: "aggregation",
    description: "Tempo médio de espera",
    requiredFields: [
      {
        name: "wait_times",
        description: "Tempos de espera em minutos",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.wait_times as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados de espera não fornecidos",
          warnings: [],
        };
      }
      return createAggregation(values, "average");
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["wait_times"], params),
    getThresholds: () => ({ critical: 120, warning: 45, good: 15 }),
  },
  "HEALTH-NPS-001": {
    code: "HEALTH-NPS-001",
    type: "simple_ratio",
    description: "Índice de satisfação do paciente",
    requiredFields: [
      { name: "promoters", description: "Promotores", required: true },
      { name: "detractors", description: "Detratores", required: true },
      {
        name: "total_responses",
        description: "Total de respostas",
        required: true,
      },
    ],
    calculation: (params) => {
      const promoters = params.promoters as number;
      const detractors = params.detractors as number;
      const total = params.total_responses as number;

      if (total === undefined || total === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Total de respostas não fornecido",
          warnings: [],
        };
      }

      const promoterPct = ((promoters || 0) / total) * 100;
      const detractorPct = ((detractors || 0) / total) * 100;
      const nps = promoterPct - detractorPct;

      return { value: nps, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["total_responses"], params),
    getThresholds: () => ({ critical: 0, warning: 30, good: 50 }),
  },
  "HEALTH-STAFF-UTIL": {
    code: "HEALTH-STAFF-UTIL",
    type: "percentage",
    description: "Taxa de utilização de staff",
    requiredFields: [
      {
        name: "staff_hours_worked",
        description: "Horas trabalhadas",
        required: true,
      },
      {
        name: "staff_hours_available",
        description: "Horas disponíveis",
        required: true,
      },
    ],
    calculation: (params) => {
      const worked = params.staff_hours_worked as number;
      const available = params.staff_hours_available as number;
      return createSafeDivision(worked, available, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["staff_hours_worked", "staff_hours_available"],
        params,
      ),
    getThresholds: () => ({ critical: 60, warning: 75, good: 90 }),
  },
  "HEALTH-REVENUE-PT": {
    code: "HEALTH-REVENUE-PT",
    type: "simple_ratio",
    description: "Receita por paciente",
    requiredFields: [
      { name: "total_revenue", description: "Receita total", required: true },
      {
        name: "total_patients",
        description: "Total de pacientes",
        required: true,
      },
    ],
    calculation: (params) => {
      const revenue = params.total_revenue as number;
      const patients = params.total_patients as number;
      return createSafeDivision(revenue, patients, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["total_revenue", "total_patients"],
        params,
      ),
    getThresholds: () => ({ critical: 100, warning: 500, good: 1000 }),
  },
  "HEALTH-CLAIMS-TIME": {
    code: "HEALTH-CLAIMS-TIME",
    type: "aggregation",
    description: "Tempo de processamento de klaims",
    requiredFields: [
      {
        name: "claims_processing_times",
        description: "Tempos em dias",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.claims_processing_times as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados não fornecidos",
          warnings: [],
        };
      }
      return createAggregation(values, "average");
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["claims_processing_times"], params),
    getThresholds: () => ({ critical: 30, warning: 14, good: 5 }),
  },
  "HEALTH-APPOINTMENT-YIELD": {
    code: "HEALTH-APPOINTMENT-YIELD",
    type: "percentage",
    description: "Taxa de comparecimento",
    requiredFields: [
      { name: "attended", description: "Consultas realizadas", required: true },
      { name: "scheduled", description: "Consultas agendadas", required: true },
    ],
    calculation: (params) => {
      const attended = params.attended as number;
      const scheduled = params.scheduled as number;
      return createSafeDivision(attended, scheduled, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["attended", "scheduled"], params),
    getThresholds: () => ({ critical: 60, warning: 80, good: 95 }),
  },

  // MANUFACTURING SECTOR
  "MFG-OEE-001": {
    code: "MFG-OEE-001",
    type: "derived",
    description: "Eficiência global do equipamento",
    requiredFields: [
      {
        name: "availability",
        description: "Disponibilidade %",
        required: true,
      },
      { name: "performance", description: "Performance %", required: true },
      { name: "quality", description: "Qualidade %", required: true },
    ],
    calculation: (params) => {
      const availability = (params.availability as number) || 0;
      const performance = (params.performance as number) || 0;
      const quality = (params.quality as number) || 0;

      if (availability === 0 && performance === 0 && quality === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados OEE não fornecidos",
          warnings: [],
        };
      }

      const oee =
        (availability / 100) * (performance / 100) * (quality / 100) * 100;
      return { value: oee, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["availability", "performance", "quality"],
        params,
      ),
    getThresholds: () => ({ critical: 50, warning: 65, good: 85 }),
  },
  "MFG-FPY-001": {
    code: "MFG-FPY-001",
    type: "percentage",
    description: "Taxa de primeira passagem",
    requiredFields: [
      {
        name: "first_pass_ok",
        description: "Unidades OK na primeira vez",
        required: true,
      },
      {
        name: "total_produced",
        description: "Total produzido",
        required: true,
      },
    ],
    calculation: (params) => {
      const fpy = params.first_pass_ok as number;
      const total = params.total_produced as number;
      return createSafeDivision(fpy, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["first_pass_ok", "total_produced"],
        params,
      ),
    getThresholds: () => ({ critical: 70, warning: 85, good: 95 }),
  },
  "MFG-DEFECT-RATE": {
    code: "MFG-DEFECT-RATE",
    type: "percentage",
    description: "Taxa de defeitos",
    requiredFields: [
      { name: "defects", description: "Unidades com defeito", required: true },
      {
        name: "total_produced",
        description: "Total produzido",
        required: true,
      },
    ],
    calculation: (params) => {
      const defects = params.defects as number;
      const total = params.total_produced as number;
      return createSafeDivision(defects, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["defects", "total_produced"], params),
    getThresholds: () => ({ critical: 10, warning: 5, good: 1 }),
  },
  "MFG-DOWNTIME": {
    code: "MFG-DOWNTIME",
    type: "percentage",
    description: "Taxa de parada não planejada",
    requiredFields: [
      {
        name: "downtime_hours",
        description: "Horas de parada",
        required: true,
      },
      {
        name: "planned_hours",
        description: "Horas planejadas",
        required: true,
      },
    ],
    calculation: (params) => {
      const downtime = params.downtime_hours as number;
      const planned = params.planned_hours as number;
      return createSafeDivision(downtime, planned, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["downtime_hours", "planned_hours"],
        params,
      ),
    getThresholds: () => ({ critical: 20, warning: 10, good: 3 }),
  },
  "MFG-CYCLE-TIME": {
    code: "MFG-CYCLE-TIME",
    type: "aggregation",
    description: "Tempo de ciclo",
    requiredFields: [
      {
        name: "cycle_times",
        description: "Tempos de ciclo em minutos",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.cycle_times as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dados de ciclo não fornecidos",
          warnings: [],
        };
      }
      return createAggregation(values, "average");
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["cycle_times"], params),
    getThresholds: () => ({ critical: 60, warning: 30, good: 10 }),
  },
  "MFG-INVENTORY-DAYS": {
    code: "MFG-INVENTORY-DAYS",
    type: "simple_ratio",
    description: "Dias de estoque",
    requiredFields: [
      {
        name: "inventory_value",
        description: "Valor do estoque",
        required: true,
      },
      { name: "daily_usage", description: "Uso diário", required: true },
    ],
    calculation: (params) => {
      const inventory = params.inventory_value as number;
      const daily = params.daily_usage as number;
      return createSafeDivision(inventory, daily, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["inventory_value", "daily_usage"],
        params,
      ),
    getThresholds: () => ({ critical: 90, warning: 45, good: 14 }),
  },
  "MFG-CAPACITY-UTIL": {
    code: "MFG-CAPACITY-UTIL",
    type: "percentage",
    description: "Utilização de capacidade",
    requiredFields: [
      { name: "actual_output", description: "Produção real", required: true },
      {
        name: "max_capacity",
        description: "Capacidade máxima",
        required: true,
      },
    ],
    calculation: (params) => {
      const actual = params.actual_output as number;
      const max = params.max_capacity as number;
      return createSafeDivision(actual, max, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["actual_output", "max_capacity"],
        params,
      ),
    getThresholds: () => ({ critical: 50, warning: 70, good: 85 }),
  },
  "MFG-SCRAP-RATE": {
    code: "MFG-SCRAP-RATE",
    type: "percentage",
    description: "Taxa de refugos",
    requiredFields: [
      { name: "scrap", description: "Refugos", required: true },
      {
        name: "total_produced",
        description: "Total produzido",
        required: true,
      },
    ],
    calculation: (params) => {
      const scrap = params.scrap as number;
      const total = params.total_produced as number;
      return createSafeDivision(scrap, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["scrap", "total_produced"], params),
    getThresholds: () => ({ critical: 10, warning: 5, good: 1 }),
  },

  // SERVICES SECTOR
  "SERV-BILLABLE-RATIO": {
    code: "SERV-BILLABLE-RATIO",
    type: "percentage",
    description: "Taxa de utilização faturável",
    requiredFields: [
      {
        name: "billable_hours",
        description: "Horas faturáveis",
        required: true,
      },
      { name: "total_hours", description: "Horas totais", required: true },
    ],
    calculation: (params) => {
      const billable = params.billable_hours as number;
      const total = params.total_hours as number;
      return createSafeDivision(billable, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["billable_hours", "total_hours"],
        params,
      ),
    getThresholds: () => ({ critical: 50, warning: 65, good: 80 }),
  },
  "SERV-PROJECT-MARGIN": {
    code: "SERV-PROJECT-MARGIN",
    type: "percentage",
    description: "Margem do projeto",
    requiredFields: [
      {
        name: "project_revenue",
        description: "Receita do projeto",
        required: true,
      },
      { name: "project_cost", description: "Custo do projeto", required: true },
    ],
    calculation: (params) => {
      const revenue = params.project_revenue as number;
      const cost = params.project_cost as number;
      if (revenue === undefined || !isFinite(revenue)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Receita não fornecida",
          warnings: [],
        };
      }
      if (revenue === 0) {
        return {
          value: null,
          status: "division_by_zero",
          error: "Receita zero",
          warnings: [],
        };
      }
      const margin = ((revenue - (cost || 0)) / revenue) * 100;
      return { value: margin, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["project_revenue"], params),
    getThresholds: () => ({ critical: 10, warning: 20, good: 35 }),
  },
  "SERV-UTILIZATION": {
    code: "SERV-UTILIZATION",
    type: "percentage",
    description: "Utilização de recursos",
    requiredFields: [
      {
        name: "utilized_hours",
        description: "Horas utilizadas",
        required: true,
      },
      {
        name: "available_hours",
        description: "Horas disponíveis",
        required: true,
      },
    ],
    calculation: (params) => {
      const utilized = params.utilized_hours as number;
      const available = params.available_hours as number;
      return createSafeDivision(utilized, available, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["utilized_hours", "available_hours"],
        params,
      ),
    getThresholds: () => ({ critical: 60, warning: 75, good: 90 }),
  },
  "SERV-BILLING-EFF": {
    code: "SERV-BILLING-EFF",
    type: "percentage",
    description: "Eficiência de faturamento",
    requiredFields: [
      { name: "billed_amount", description: "Valor faturado", required: true },
      {
        name: "potential_amount",
        description: "Valor potencial",
        required: true,
      },
    ],
    calculation: (params) => {
      const billed = params.billed_amount as number;
      const potential = params.potential_amount as number;
      return createSafeDivision(billed, potential, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["billed_amount", "potential_amount"],
        params,
      ),
    getThresholds: () => ({ critical: 70, warning: 85, good: 95 }),
  },
  "SERV-TICKET-ESCAL": {
    code: "SERV-TICKET-ESCAL",
    type: "percentage",
    description: "Taxa de escalação de tickets",
    requiredFields: [
      {
        name: "escalated_tickets",
        description: "Tickets escalados",
        required: true,
      },
      {
        name: "total_tickets",
        description: "Total de tickets",
        required: true,
      },
    ],
    calculation: (params) => {
      const escalated = params.escalated_tickets as number;
      const total = params.total_tickets as number;
      return createSafeDivision(escalated, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["escalated_tickets", "total_tickets"],
        params,
      ),
    getThresholds: () => ({ critical: 20, warning: 10, good: 3 }),
  },
  "SERV-CSAT-001": {
    code: "SERV-CSAT-001",
    type: "aggregation",
    description: "Satisfação do cliente",
    requiredFields: [
      {
        name: "satisfaction_scores",
        description: "Scores de satisfação (1-5)",
        required: true,
      },
    ],
    calculation: (params) => {
      const values = params.satisfaction_scores as number[];
      if (!values) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Scores não fornecidos",
          warnings: [],
        };
      }
      const result = createAggregation(values, "average");
      if (result.value !== null) {
        result.value = result.value * 20;
      }
      return result;
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["satisfaction_scores"], params),
    getThresholds: () => ({ critical: 40, warning: 70, good: 85 }),
  },
  "SERV-RENEWAL-RATE": {
    code: "SERV-RENEWAL-RATE",
    type: "percentage",
    description: "Taxa de renovação de contrato",
    requiredFields: [
      {
        name: "renewed_contracts",
        description: "Contratos renovados",
        required: true,
      },
      {
        name: "expiring_contracts",
        description: "Contratos a expirar",
        required: true,
      },
    ],
    calculation: (params) => {
      const renewed = params.renewed_contracts as number;
      const expiring = params.expiring_contracts as number;
      return createSafeDivision(renewed, expiring, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["renewed_contracts", "expiring_contracts"],
        params,
      ),
    getThresholds: () => ({ critical: 60, warning: 80, good: 95 }),
  },

  // FINANCE SECTOR
  "FIN-NPL-001": {
    code: "FIN-NPL-001",
    type: "percentage",
    description: "Empréstimos inadimplentes",
    requiredFields: [
      { name: "npl", description: "Valor inadimplente", required: true },
      {
        name: "total_loans",
        description: "Total de empréstimos",
        required: true,
      },
    ],
    calculation: (params) => {
      const npl = params.npl as number;
      const total = params.total_loans as number;
      return createSafeDivision(npl, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["npl", "total_loans"], params),
    getThresholds: () => ({ critical: 15, warning: 8, good: 3 }),
  },
  "FIN-NIM-001": {
    code: "FIN-NIM-001",
    type: "percentage",
    description: "Margem de juros líquida",
    requiredFields: [
      {
        name: "interest_income",
        description: "Receita de juros",
        required: true,
      },
      {
        name: "interest_expense",
        description: "Despesa de juros",
        required: true,
      },
      {
        name: "earning_assets",
        description: "Ativos geradores",
        required: true,
      },
    ],
    calculation: (params) => {
      const income = params.interest_income as number;
      const expense = params.interest_expense as number;
      const assets = params.earning_assets as number;

      if (assets === undefined || assets === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Ativos geradores não fornecidos",
          warnings: [],
        };
      }

      const netInterest = (income || 0) - (expense || 0);
      return createSafeDivision(netInterest, assets, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["interest_income", "earning_assets"],
        params,
      ),
    getThresholds: () => ({ critical: 1, warning: 3, good: 5 }),
  },
  "FIN-ROE-001": {
    code: "FIN-ROE-001",
    type: "percentage",
    description: "Retorno sobre patrimônio",
    requiredFields: [
      { name: "net_income", description: "Lucro líquido", required: true },
      { name: "equity", description: "Patrimônio líquido", required: true },
    ],
    calculation: (params) => {
      const income = params.net_income as number;
      const equity = params.equity as number;
      return createSafeDivision(income, equity, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["net_income", "equity"], params),
    getThresholds: () => ({ critical: 5, warning: 10, good: 15 }),
  },
  "FIN-EBITDA-001": {
    code: "FIN-EBITDA-001",
    type: "percentage",
    description: "Margem EBITDA",
    requiredFields: [
      { name: "ebitda", description: "EBITDA", required: true },
      { name: "revenue", description: "Receita", required: true },
    ],
    calculation: (params) => {
      const ebitda = params.ebitda as number;
      const revenue = params.revenue as number;
      return createSafeDivision(ebitda, revenue, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["ebitda", "revenue"], params),
    getThresholds: () => ({ critical: 5, warning: 15, good: 25 }),
  },
  "FIN-CASH-FLOW": {
    code: "FIN-CASH-FLOW",
    type: "simple_ratio",
    description: "Fluxo de caixa operacional",
    requiredFields: [
      { name: "cash_flow", description: "Fluxo de caixa", required: true },
    ],
    calculation: (params) => {
      const cashFlow = params.cash_flow as number;
      if (cashFlow === undefined || !isFinite(cashFlow)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Fluxo de caixa não fornecido",
          warnings: [],
        };
      }
      return { value: cashFlow, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["cash_flow"], params),
    getThresholds: () => ({ critical: 0, warning: 10000, good: 100000 }),
  },
  "FIN-QUICK-RATIO": {
    code: "FIN-QUICK-RATIO",
    type: "simple_ratio",
    description: "Liquidez imediata",
    requiredFields: [
      {
        name: "current_assets",
        description: "Ativos circulantes",
        required: true,
      },
      { name: "inventory", description: "Inventário", required: true },
      {
        name: "current_liabilities",
        description: "Passivos circulantes",
        required: true,
      },
    ],
    calculation: (params) => {
      const currentAssets = params.current_assets as number;
      const inventory = params.inventory as number;
      const liabilities = params.current_liabilities as number;

      if (liabilities === undefined || liabilities === 0) {
        return {
          value: null,
          status: "division_by_zero",
          error: "Passivos zero",
          warnings: [],
        };
      }

      const quickAssets = (currentAssets || 0) - (inventory || 0);
      return createSafeDivision(quickAssets, liabilities, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["current_assets", "current_liabilities"],
        params,
      ),
    getThresholds: () => ({ critical: 0.5, warning: 1, good: 2 }),
  },
  "FIN-ACCOUNTS-REC": {
    code: "FIN-ACCOUNTS-REC",
    type: "simple_ratio",
    description: "Prazo médio de recebimento",
    requiredFields: [
      { name: "receivables", description: "Recebíveis", required: true },
      { name: "credit_sales", description: "Vendas a crédito", required: true },
    ],
    calculation: (params) => {
      const receivables = params.receivables as number;
      const sales = params.credit_sales as number;

      if (sales === undefined || sales === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Vendas a crédito não fornecidas",
          warnings: [],
        };
      }

      return createSafeDivision(receivables, sales / 30, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["receivables", "credit_sales"],
        params,
      ),
    getThresholds: () => ({ critical: 60, warning: 45, good: 30 }),
  },

  // FOOD SECTOR
  "FOOD-TABLE-TURN": {
    code: "FOOD-TABLE-TURN",
    type: "simple_ratio",
    description: "Giro de mesas",
    requiredFields: [
      { name: "covers", description: "Total de covers", required: true },
      { name: "tables", description: "Número de mesas", required: true },
    ],
    calculation: (params) => {
      const covers = params.covers as number;
      const tables = params.tables as number;
      return createSafeDivision(covers, tables, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["covers", "tables"], params),
    getThresholds: () => ({ critical: 1, warning: 2, good: 4 }),
  },
  "FOOD-AVG-CHECK": {
    code: "FOOD-AVG-CHECK",
    type: "simple_ratio",
    description: "Ticket médio",
    requiredFields: [
      { name: "revenue", description: "Receita total", required: true },
      { name: "covers", description: "Total de covers", required: true },
    ],
    calculation: (params) => {
      const revenue = params.revenue as number;
      const covers = params.covers as number;
      return createSafeDivision(revenue, covers, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["revenue", "covers"], params),
    getThresholds: () => ({ critical: 20, warning: 40, good: 80 }),
  },
  "FOOD-FOOD-COST": {
    code: "FOOD-FOOD-COST",
    type: "percentage",
    description: "Custo de comida",
    requiredFields: [
      { name: "food_cost", description: "Custo de comida", required: true },
      {
        name: "food_revenue",
        description: "Receita de comida",
        required: true,
      },
    ],
    calculation: (params) => {
      const cost = params.food_cost as number;
      const revenue = params.food_revenue as number;
      return createSafeDivision(cost, revenue, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["food_cost", "food_revenue"], params),
    getThresholds: () => ({ critical: 40, warning: 30, good: 20 }),
  },
  "FOOD-LABOR-COST": {
    code: "FOOD-LABOR-COST",
    type: "percentage",
    description: "Custo de mão de obra",
    requiredFields: [
      {
        name: "labor_cost",
        description: "Custo de mão de obra",
        required: true,
      },
      { name: "revenue", description: "Receita total", required: true },
    ],
    calculation: (params) => {
      const labor = params.labor_cost as number;
      const revenue = params.revenue as number;
      return createSafeDivision(labor, revenue, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["labor_cost", "revenue"], params),
    getThresholds: () => ({ critical: 40, warning: 30, good: 20 }),
  },
  "FOOD-WASTE-RATE": {
    code: "FOOD-WASTE-RATE",
    type: "percentage",
    description: "Taxa de desperdício",
    requiredFields: [
      { name: "waste", description: "Desperdício em valor", required: true },
      { name: "food_cost", description: "Custo de comida", required: true },
    ],
    calculation: (params) => {
      const waste = params.waste as number;
      const cost = params.food_cost as number;
      return createSafeDivision(waste, cost, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["waste", "food_cost"], params),
    getThresholds: () => ({ critical: 15, warning: 8, good: 3 }),
  },
  "FOOD-DELIVERY-ETA": {
    code: "FOOD-DELIVERY-ETA",
    type: "percentage",
    description: "Precisão do tempo de entrega",
    requiredFields: [
      {
        name: "on_time_deliveries",
        description: "Entregas no prazo",
        required: true,
      },
      {
        name: "total_deliveries",
        description: "Total de entregas",
        required: true,
      },
    ],
    calculation: (params) => {
      const onTime = params.on_time_deliveries as number;
      const total = params.total_deliveries as number;
      return createSafeDivision(onTime, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["on_time_deliveries", "total_deliveries"],
        params,
      ),
    getThresholds: () => ({ critical: 70, warning: 85, good: 95 }),
  },

  // LOGISTICS SECTOR
  "LOG-OTIF-001": {
    code: "LOG-OTIF-001",
    type: "percentage",
    description: "Entrega no prazo e completa",
    requiredFields: [
      {
        name: "on_time_full",
        description: "Entregas no prazo e completas",
        required: true,
      },
      {
        name: "total_deliveries",
        description: "Total de entregas",
        required: true,
      },
    ],
    calculation: (params) => {
      const otif = params.on_time_full as number;
      const total = params.total_deliveries as number;
      return createSafeDivision(otif, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["on_time_full", "total_deliveries"],
        params,
      ),
    getThresholds: () => ({ critical: 80, warning: 90, good: 98 }),
  },
  "LOG-ON-TIME": {
    code: "LOG-ON-TIME",
    type: "percentage",
    description: "Taxa de entrega no prazo",
    requiredFields: [
      { name: "on_time", description: "Entregas no prazo", required: true },
      {
        name: "total_deliveries",
        description: "Total de entregas",
        required: true,
      },
    ],
    calculation: (params) => {
      const onTime = params.on_time as number;
      const total = params.total_deliveries as number;
      return createSafeDivision(onTime, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["on_time", "total_deliveries"],
        params,
      ),
    getThresholds: () => ({ critical: 85, warning: 92, good: 98 }),
  },
  "LOG-LOAD-FACTOR": {
    code: "LOG-LOAD-FACTOR",
    type: "percentage",
    description: "Fator de carga",
    requiredFields: [
      {
        name: "used_capacity",
        description: "Capacidade utilizada",
        required: true,
      },
      {
        name: "total_capacity",
        description: "Capacidade total",
        required: true,
      },
    ],
    calculation: (params) => {
      const used = params.used_capacity as number;
      const total = params.total_capacity as number;
      return createSafeDivision(used, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["used_capacity", "total_capacity"],
        params,
      ),
    getThresholds: () => ({ critical: 50, warning: 70, good: 85 }),
  },
  "LOG-COST-PER-MILE": {
    code: "LOG-COST-PER-MILE",
    type: "simple_ratio",
    description: "Custo por milha",
    requiredFields: [
      { name: "total_cost", description: "Custo total", required: true },
      { name: "total_mileage", description: "Milhas totais", required: true },
    ],
    calculation: (params) => {
      const cost = params.total_cost as number;
      const mileage = params.total_mileage as number;
      return createSafeDivision(cost, mileage, 0, 1);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["total_cost", "total_mileage"],
        params,
      ),
    getThresholds: () => ({ critical: 3, warning: 2, good: 1 }),
  },
  "LOG-WAREHOUSE-ACC": {
    code: "LOG-WAREHOUSE-ACC",
    type: "percentage",
    description: "Precisão do warehouse",
    requiredFields: [
      { name: "accurate_picks", description: "Picks acurados", required: true },
      { name: "total_picks", description: "Total de picks", required: true },
    ],
    calculation: (params) => {
      const accurate = params.accurate_picks as number;
      const total = params.total_picks as number;
      return createSafeDivision(accurate, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["accurate_picks", "total_picks"],
        params,
      ),
    getThresholds: () => ({ critical: 90, warning: 96, good: 99 }),
  },
  "LOG-PICK-ACCURACY": {
    code: "LOG-PICK-ACCURACY",
    type: "percentage",
    description: "Precisão de picking",
    requiredFields: [
      { name: "correct_picks", description: "Picks corretos", required: true },
      { name: "total_picks", description: "Total de picks", required: true },
    ],
    calculation: (params) => {
      const correct = params.correct_picks as number;
      const total = params.total_picks as number;
      return createSafeDivision(correct, total, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["correct_picks", "total_picks"],
        params,
      ),
    getThresholds: () => ({ critical: 90, warning: 96, good: 99 }),
  },

  // CONSTRUCTION SECTOR
  "CONTRACT-PROFIT": {
    code: "CONTRACT-PROFIT",
    type: "percentage",
    description: "Margem do projeto",
    requiredFields: [
      {
        name: "project_revenue",
        description: "Receita do projeto",
        required: true,
      },
      { name: "project_cost", description: "Custo do projeto", required: true },
    ],
    calculation: (params) => {
      const revenue = params.project_revenue as number;
      const cost = params.project_cost as number;
      if (revenue === undefined || !isFinite(revenue) || revenue === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Receita não fornecida",
          warnings: [],
        };
      }
      const margin = ((revenue - (cost || 0)) / revenue) * 100;
      return { value: margin, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["project_revenue"], params),
    getThresholds: () => ({ critical: 5, warning: 10, good: 20 }),
  },
  "CONTRACT-COST-VAR": {
    code: "CONTRACT-COST-VAR",
    type: "percentage",
    description: "Variação de custo",
    requiredFields: [
      { name: "actual_cost", description: "Custo real", required: true },
      { name: "budgeted_cost", description: "Custo orçado", required: true },
    ],
    calculation: (params) => {
      const actual = params.actual_cost as number;
      const budget = params.budgeted_cost as number;
      if (budget === undefined || budget === 0) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Orçamento não fornecido",
          warnings: [],
        };
      }
      const variance = ((actual - budget) / budget) * 100;
      return { value: variance, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["actual_cost", "budgeted_cost"],
        params,
      ),
    getThresholds: () => ({ critical: 20, warning: 10, good: 0 }),
  },
  "CONTRACT-SCHEDULE-VAR": {
    code: "CONTRACT-SCHEDULE-VAR",
    type: "simple_ratio",
    description: "Variação de cronograma",
    requiredFields: [
      { name: "actual_days", description: "Dias utilizados", required: true },
      { name: "planned_days", description: "Dias planejados", required: true },
    ],
    calculation: (params) => {
      const actual = params.actual_days as number;
      const planned = params.planned_days as number;
      if (planned === undefined || !isFinite(planned)) {
        return {
          value: null,
          status: "insufficient_data",
          error: "Dias planejados não fornecidos",
          warnings: [],
        };
      }
      const variance = actual - planned;
      return { value: variance, status: "success", warnings: [] };
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["actual_days", "planned_days"],
        params,
      ),
    getThresholds: () => ({ critical: 30, warning: 14, good: 0 }),
  },
  "CONTRACT-SAFETY-Rate": {
    code: "CONTRACT-SAFETY-Rate",
    type: "percentage",
    description: "Taxa de incidentes de segurança",
    requiredFields: [
      { name: "incidents", description: "Incidentes", required: true },
      { name: "work_hours", description: "Horas trabalhadas", required: true },
    ],
    calculation: (params) => {
      const incidents = params.incidents as number;
      const hours = params.work_hours as number;
      return createSafeDivision(incidents * 200000, hours, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(["incidents", "work_hours"], params),
    getThresholds: () => ({ critical: 5, warning: 3, good: 1 }),
  },
  "CONTRACT-CONTINGENCY": {
    code: "CONTRACT-CONTINGENCY",
    type: "percentage",
    description: "Uso de contingência",
    requiredFields: [
      {
        name: "contingency_used",
        description: "Contingência usada",
        required: true,
      },
      {
        name: "contingency_budget",
        description: "Orçamento de contingência",
        required: true,
      },
    ],
    calculation: (params) => {
      const used = params.contingency_used as number;
      const budget = params.contingency_budget as number;
      return createSafeDivision(used, budget, 0, 100);
    },
    getConfidence: (params) =>
      getConfidenceFromDataCompleteness(
        ["contingency_used", "contingency_budget"],
        params,
      ),
    getThresholds: () => ({ critical: 80, warning: 50, good: 20 }),
  },
};

export const getFormula = (code: string): KPIFormula | undefined => {
  return KPI_FORMULAS[code];
};

export const getFormulasBySector = (sector: string): KPIFormula[] => {
  const sectorPrefixes: Record<string, string[]> = {
    technology: ["TECH-"],
    retail: ["RET-"],
    healthcare: ["HEALTH-"],
    manufacturing: ["MFG-"],
    services: ["SERV-"],
    finance: ["FIN-"],
    food: ["FOOD-"],
    logistics: ["LOG-"],
    construction: ["CONTRACT-"],
    education: [],
    real_estate: [],
    media: [],
  };

  const prefixes = sectorPrefixes[sector] || [];
  return Object.values(KPI_FORMULAS).filter((f) =>
    prefixes.some((p) => f.code.startsWith(p)),
  );
};
