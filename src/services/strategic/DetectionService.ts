import {
  KPIData,
  Challenge,
  DetectionResult,
  DetectionRule,
  Opportunity,
  OpportunityRule,
} from "@/types/strategic";

export type RiskSeverity = "low" | "medium" | "high" | "critical";
export type RiskDomain =
  | "finance"
  | "commercial"
  | "operations"
  | "marketing"
  | "people"
  | "strategy";

export interface KPIDefinition {
  code: string;
  name: string;
  unit: string;
  domain: RiskDomain;
  lowerIsBetter?: boolean;
}

export const KPI_DEFINITIONS: Record<string, KPIDefinition> = {
  "TECH-MRR-001": {
    code: "TECH-MRR-001",
    name: "Monthly Recurring Revenue",
    unit: "currency",
    domain: "finance",
  },
  "TECH-CHURN-001": {
    code: "TECH-CHURN-001",
    name: "Churn Rate",
    unit: "percent",
    domain: "commercial",
    lowerIsBetter: true,
  },
  "TECH-CAC-001": {
    code: "TECH-CAC-001",
    name: "Customer Acquisition Cost",
    unit: "currency",
    domain: "marketing",
    lowerIsBetter: true,
  },
  "TECH-LTV-001": {
    code: "TECH-LTV-001",
    name: "Lifetime Value",
    unit: "currency",
    domain: "commercial",
  },
  "TECH-LTVCAC-001": {
    code: "TECH-LTVCAC-001",
    name: "LTV:CAC Ratio",
    unit: "ratio",
    domain: "commercial",
  },
  "TECH-NRR-001": {
    code: "TECH-NRR-001",
    name: "Net Revenue Retention",
    unit: "percent",
    domain: "commercial",
  },
  "TECH-DAU-001": {
    code: "TECH-DAU-001",
    name: "Daily Active Users",
    unit: "count",
    domain: "operations",
  },
  "TECH-MAU-001": {
    code: "TECH-MAU-001",
    name: "Monthly Active Users",
    unit: "count",
    domain: "operations",
  },
  "TECH-NPS-001": {
    code: "TECH-NPS-001",
    name: "Net Promoter Score",
    unit: "score",
    domain: "strategy",
  },
  "FIN-NPM-001": {
    code: "FIN-NPM-001",
    name: "Net Profit Margin",
    unit: "percent",
    domain: "finance",
  },
  "FIN-EBITDA-001": {
    code: "FIN-EBITDA-001",
    name: "EBITDA Margin",
    unit: "percent",
    domain: "finance",
  },
  "FIN-CASH-FLOW": {
    code: "FIN-CASH-FLOW",
    name: "Operating Cash Flow",
    unit: "currency",
    domain: "finance",
  },
  "FIN-NPL-001": {
    code: "FIN-NPL-001",
    name: "Non-Performing Loans",
    unit: "percent",
    domain: "finance",
    lowerIsBetter: true,
  },
  "FIN-NIM-001": {
    code: "FIN-NIM-001",
    name: "Net Interest Margin",
    unit: "percent",
    domain: "finance",
  },
  "FIN-ROE-001": {
    code: "FIN-ROE-001",
    name: "Return on Equity",
    unit: "percent",
    domain: "finance",
  },
  "FIN-QUICK-RATIO": {
    code: "FIN-QUICK-RATIO",
    name: "Quick Ratio",
    unit: "ratio",
    domain: "finance",
  },
  "FIN-ACCOUNTS-REC": {
    code: "FIN-ACCOUNTS-REC",
    name: "Days Sales Outstanding",
    unit: "days",
    domain: "finance",
    lowerIsBetter: true,
  },
  "RET-REVENUE": {
    code: "RET-REVENUE",
    name: "Revenue",
    unit: "currency",
    domain: "finance",
  },
  "RET-CONVERSION-001": {
    code: "RET-CONVERSION-001",
    name: "Conversion Rate",
    unit: "percent",
    domain: "commercial",
  },
  "RET-AOV-001": {
    code: "RET-AOV-001",
    name: "Average Order Value",
    unit: "currency",
    domain: "commercial",
  },
  "RET-ATV-001": {
    code: "RET-ATV-001",
    name: "Average Transaction Value",
    unit: "currency",
    domain: "commercial",
  },
  "RET-RETURN-RATE": {
    code: "RET-RETURN-RATE",
    name: "Return Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
  "RET-INVENTORY-TURNS": {
    code: "RET-INVENTORY-TURNS",
    name: "Inventory Turns",
    unit: "ratio",
    domain: "operations",
  },
  "FOOD-AVG-CHECK": {
    code: "FOOD-AVG-CHECK",
    name: "Average Check",
    unit: "currency",
    domain: "commercial",
  },
  "FOOD-LABOR-COST": {
    code: "FOOD-LABOR-COST",
    name: "Labor Cost Percentage",
    unit: "percent",
    domain: "people",
    lowerIsBetter: true,
  },
  "FOOD-WASTE-RATE": {
    code: "FOOD-WASTE-RATE",
    name: "Waste Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
  "MFG-FPY-001": {
    code: "MFG-FPY-001",
    name: "First Pass Yield",
    unit: "percent",
    domain: "operations",
  },
  "MFG-DEFECT-RATE": {
    code: "MFG-DEFECT-RATE",
    name: "Defect Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
  "MFG-DOWNTIME": {
    code: "MFG-DOWNTIME",
    name: "Downtime Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
  "MFG-OEE-001": {
    code: "MFG-OEE-001",
    name: "Overall Equipment Effectiveness",
    unit: "percent",
    domain: "operations",
  },
  "SERV-RENEWAL-RATE": {
    code: "SERV-RENEWAL-RATE",
    name: "Contract Renewal Rate",
    unit: "percent",
    domain: "commercial",
  },
  "SERV-UTILIZATION": {
    code: "SERV-UTILIZATION",
    name: "Resource Utilization",
    unit: "percent",
    domain: "operations",
  },
  "SERV-TICKET-ESCAL": {
    code: "SERV-TICKET-ESCAL",
    name: "Ticket Escalation Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
  "HEALTH-READMISSION": {
    code: "HEALTH-READMISSION",
    name: "Readmission Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
  "HEALTH-OCCUPANCY": {
    code: "HEALTH-OCCUPANCY",
    name: "Bed Occupancy Rate",
    unit: "percent",
    domain: "operations",
  },
  "HEALTH-NPS-001": {
    code: "HEALTH-NPS-001",
    name: "Patient Satisfaction Score",
    unit: "score",
    domain: "strategy",
  },
  "LOG-ON-TIME": {
    code: "LOG-ON-TIME",
    name: "On-Time Delivery Rate",
    unit: "percent",
    domain: "operations",
  },
  "LOG-OTIF-001": {
    code: "LOG-OTIF-001",
    name: "On-Time In-Full",
    unit: "percent",
    domain: "operations",
  },
  "CONTRACT-PROFIT": {
    code: "CONTRACT-PROFIT",
    name: "Project Profit Margin",
    unit: "percent",
    domain: "finance",
  },
  "EDU-ATTENDANCE-001": {
    code: "EDU-ATTENDANCE-001",
    name: "Attendance Rate",
    unit: "percent",
    domain: "operations",
  },
  "EDU-DROPOUT-001": {
    code: "EDU-DROPOUT-001",
    name: "Dropout Rate",
    unit: "percent",
    domain: "operations",
    lowerIsBetter: true,
  },
};

class DetectionService {
  private static instance: DetectionService;

  static getInstance(): DetectionService {
    if (!DetectionService.instance) {
      DetectionService.instance = new DetectionService();
    }
    return DetectionService.instance;
  }

  private detectionRules: DetectionRule[] = [
    {
      id: "CASH_FLOW_CRUNCH",
      name: "Crise de Liquidez Operacional",
      description:
        "O dinheiro não chega ao fim do mês - burn rate superior à geração de caixa",
      domain: "finance",
      severity: "critical",
      kpis: ["FIN-CASH-FLOW"],
      rules: [{ kpi: "FIN-CASH-FLOW", operator: "<", value: 0, weight: 1.0 }],
      diagnosis_code: "DIAG_CASH_CRUNCH",
      timeframe: "IMMEDIATE",
    },
    {
      id: "HIGH_CHURN",
      name: "Perda Acelerada de Clientes",
      description: "Taxa de churn acima do sustentável (>5%/mês)",
      domain: "commercial",
      severity: "critical",
      kpis: ["TECH-CHURN-001"],
      rules: [{ kpi: "TECH-CHURN-001", operator: ">", value: 5, weight: 1.0 }],
      diagnosis_code: "DIAG_CUSTOMER_CHURN",
      timeframe: "IMMEDIATE",
    },
    {
      id: "INEFFICIENT_SALES",
      name: "Máquina Comercial Ineficiente",
      description: "Esforço de vendas alto para pouco retorno - LTV/CAC baixo",
      domain: "commercial",
      severity: "high",
      kpis: ["TECH-LTVCAC-001", "TECH-CAC-001"],
      rules: [
        { kpi: "TECH-LTVCAC-001", operator: "<", value: 1.5, weight: 0.6 },
        { kpi: "TECH-CAC-001", operator: ">", value: 1000, weight: 0.4 },
      ],
      diagnosis_code: "DIAG_SALES_INEFFICIENCY",
      timeframe: "SHORT_TERM",
    },
    {
      id: "MARGIN_COMPRESSION",
      name: "Compressão de Margens",
      description: "Margens operando em nível crítico (<5% líquido)",
      domain: "finance",
      severity: "high",
      kpis: ["FIN-NPM-001"],
      rules: [{ kpi: "FIN-NPM-001", operator: "<", value: 5, weight: 1.0 }],
      diagnosis_code: "DIAG_MARGIN_COMPRESSION",
      timeframe: "SHORT_TERM",
    },
    {
      id: "FIXED_COST_BURDEN",
      name: "Estrutura de Custos Fixos Pesada",
      description: "Custos fixos comprometendo a operação",
      domain: "finance",
      severity: "medium",
      kpis: ["FIN-CASH-FLOW", "FIN-EBITDA-001"],
      rules: [{ kpi: "FIN-EBITDA-001", operator: "<", value: 10, weight: 1.0 }],
      diagnosis_code: "DIAG_HIGH_FIXED_COSTS",
      timeframe: "MEDIUM_TERM",
    },
    {
      id: "LATE_RECEIVABLES",
      name: "Ciclo de Recebimento Longo",
      description: "PMR (>60 dias) afeta capital de giro",
      domain: "finance",
      severity: "high",
      kpis: ["FIN-ACCOUNTS-REC"],
      rules: [
        { kpi: "FIN-ACCOUNTS-REC", operator: ">", value: 60, weight: 1.0 },
      ],
      diagnosis_code: "DIAG_LATE_RECEIVABLES",
      timeframe: "SHORT_TERM",
    },
    {
      id: "HIGH_ACQUISITION_COST",
      name: "Custo de Aquisição Elevado",
      description:
        "CAC acima do sustentável (não consegue payback em 12 meses)",
      domain: "marketing",
      severity: "high",
      kpis: ["TECH-LTVCAC-001"],
      rules: [{ kpi: "TECH-LTVCAC-001", operator: "<", value: 3, weight: 1.0 }],
      diagnosis_code: "DIAG_HIGH_CAC",
      timeframe: "SHORT_TERM",
    },
    {
      id: "OPERATIONAL_DELAYS",
      name: "Atrasos Operacionais Sistêmicos",
      description: "Entregas/prazos comprometidos",
      domain: "operations",
      severity: "medium",
      kpis: ["LOG-ON-TIME", "SERV-TICKET-ESCAL"],
      rules: [
        { kpi: "LOG-ON-TIME", operator: "<", value: 80, weight: 0.6 },
        { kpi: "SERV-TICKET-ESCAL", operator: ">", value: 20, weight: 0.4 },
      ],
      diagnosis_code: "DIAG_DELIVERY_DELAY",
      timeframe: "MEDIUM_TERM",
    },
    {
      id: "LOW_PRODUCTIVITY",
      name: "Baixa Produtividade",
      description: "Receita por funcionário abaixo do benchmark",
      domain: "people",
      severity: "medium",
      kpis: ["SERV-UTILIZATION"],
      rules: [
        { kpi: "SERV-UTILIZATION", operator: "<", value: 60, weight: 1.0 },
      ],
      diagnosis_code: "DIAG_TEAM_INEFFICIENCY",
      timeframe: "MEDIUM_TERM",
    },
    {
      id: "GROWTH_STAGNATION",
      name: "Crescimento Estagnado",
      description: "Receita estagnada ou em declínio",
      domain: "strategy",
      severity: "high",
      kpis: ["TECH-MRR-001", "RET-REVENUE"],
      rules: [{ kpi: "TECH-MRR-001", operator: "==", value: 0, weight: 1.0 }],
      diagnosis_code: "DIAG_GROWTH_STAGNATION",
      timeframe: "SHORT_TERM",
    },
    {
      id: "INVENTORY_STAGNATION",
      name: "Estoque Parado",
      description: "Giro de estoque baixo, capital imobilizado",
      domain: "operations",
      severity: "medium",
      kpis: ["RET-INVENTORY-TURNS", "MFG-OEE-001"],
      rules: [
        { kpi: "RET-INVENTORY-TURNS", operator: "<", value: 4, weight: 0.6 },
        { kpi: "MFG-OEE-001", operator: "<", value: 70, weight: 0.4 },
      ],
      diagnosis_code: "DIAG_STOCK_STAGNATION",
      timeframe: "MEDIUM_TERM",
    },
    {
      id: "FOOD_WASTE",
      name: "Desperdício Alimentar",
      description: "Taxa de desperdício elevada",
      domain: "operations",
      severity: "medium",
      kpis: ["FOOD-WASTE-RATE"],
      rules: [
        { kpi: "FOOD-WASTE-RATE", operator: ">", value: 10, weight: 1.0 },
      ],
      diagnosis_code: "DIAG_WASTE",
      timeframe: "SHORT_TERM",
    },
    {
      id: "LABOR_COST_HIGH",
      name: "Custo de Mão de Obra Elevado",
      description: "Percentual de mão de obra acima do sustentável",
      domain: "people",
      severity: "medium",
      kpis: ["FOOD-LABOR-COST"],
      rules: [
        { kpi: "FOOD-LABOR-COST", operator: ">", value: 35, weight: 1.0 },
      ],
      diagnosis_code: "DIAG_HIGH_LABOR_COST",
      timeframe: "MEDIUM_TERM",
    },
    {
      id: "QUALITY_ISSUES",
      name: "Problemas de Qualidade",
      description: "Taxa de defeitos/refações elevada",
      domain: "operations",
      severity: "high",
      kpis: ["MFG-DEFECT-RATE", "MFG-FPY-001"],
      rules: [
        { kpi: "MFG-DEFECT-RATE", operator: ">", value: 5, weight: 0.6 },
        { kpi: "MFG-FPY-001", operator: "<", value: 90, weight: 0.4 },
      ],
      diagnosis_code: "DIAG_QUALITY_ISSUES",
      timeframe: "SHORT_TERM",
    },
    {
      id: "CUSTOMER_SATISFACTION_LOW",
      name: "Baixa Satisfação do Cliente",
      description: "NPS ou CSAT em nível crítico",
      domain: "strategy",
      severity: "high",
      kpis: ["TECH-NPS-001", "HEALTH-NPS-001", "SERV-CSAT-001"],
      rules: [{ kpi: "TECH-NPS-001", operator: "<", value: 20, weight: 1.0 }],
      diagnosis_code: "DIAG_SATISFACTION_LOW",
      timeframe: "IMMEDIATE",
    },
  ];

  private opportunityRules: OpportunityRule[] = [
    {
      id: "OPP_UPSELL_BASE",
      name: "Oportunidade de Upsell na Base",
      description: "Alta retenção com zero expansão de receita",
      domain: "commercial",
      kpis: ["TECH-CHURN-001", "TECH-NRR-001"],
      rules: [
        { kpi: "TECH-CHURN-001", operator: "<=", value: 3, weight: 0.5 },
        { kpi: "TECH-NRR-001", operator: "<=", value: 100, weight: 0.5 },
      ],
      suggested_levers: ["LEV_UPSELL", "LEV_CROSS_SELL"],
      potential_impact: "Aumento de 25-40% no LTV",
    },
    {
      id: "OPP_PRICING_POWER",
      name: "Poder de Precificação",
      description: "Margem alta + alta retenção = pode aumentar preço",
      domain: "commercial",
      kpis: ["FIN-NPM-001", "TECH-CHURN-001", "TECH-NPS-001"],
      rules: [
        { kpi: "FIN-NPM-001", operator: ">=", value: 20, weight: 0.4 },
        { kpi: "TECH-CHURN-001", operator: "<=", value: 3, weight: 0.3 },
        { kpi: "TECH-NPS-001", operator: ">=", value: 40, weight: 0.3 },
      ],
      suggested_levers: ["LEV_PRICE_INCREASE", "LEV_PREMIUM_SEGMENT"],
      potential_impact: "Aumento de 10-20% na receita",
    },
    {
      id: "OPP_REFERRAL_PROGRAM",
      name: "Programa de Indicações",
      description: "NPS alto com taxa de indicação baixa",
      domain: "marketing",
      kpis: ["TECH-NPS-001"],
      rules: [{ kpi: "TECH-NPS-001", operator: ">=", value: 40, weight: 1.0 }],
      suggested_levers: ["LEV_REFERRAL_PROGRAM", "LEV_DIGITAL_CHANNEL"],
      potential_impact: "Redução de 30-40% no CAC",
    },
    {
      id: "OPP_RECEIVABLES_ACCELERATION",
      name: "Aceleração de Recebíveis",
      description: "PMR alto com clientes de baixo risco",
      domain: "finance",
      kpis: ["FIN-ACCOUNTS-REC", "TECH-CHURN-001"],
      rules: [
        { kpi: "FIN-ACCOUNTS-REC", operator: ">=", value: 30, weight: 0.6 },
        { kpi: "TECH-CHURN-001", operator: "<=", value: 5, weight: 0.4 },
      ],
      suggested_levers: ["LEV_RECEIVABLES_ACCELERATION", "LEV_CASH_CYCLE"],
      potential_impact: "Liberação de 15-25% do capital de giro",
    },
    {
      id: "OPP_PRODUCTIVITY_SCALE",
      name: "Escalar sem Contratar",
      description: "Produtividade acima da média permite crescer sem headcount",
      domain: "people",
      kpis: ["SERV-UTILIZATION"],
      rules: [
        { kpi: "SERV-UTILIZATION", operator: ">=", value: 80, weight: 1.0 },
      ],
      suggested_levers: ["LEV_AUTOMATION", "LEV_TEAM_PRODUCTIVITY"],
      potential_impact: "Crescimento de 20-30% sem aumento de headcount",
    },
    {
      id: "OPP_TICKET_EXPANSION",
      name: "Aumento de Ticket Médio",
      description: "Ticket atual abaixo do potencial",
      domain: "commercial",
      kpis: ["RET-AOV-001", "TECH-CHURN-001"],
      rules: [
        { kpi: "RET-AOV-001", operator: ">", value: 0, weight: 0.5 },
        { kpi: "TECH-CHURN-001", operator: "<=", value: 5, weight: 0.5 },
      ],
      suggested_levers: ["LEV_TICKET_INCREASE", "LEV_UPSELL"],
      potential_impact: "Aumento de 20-40% no ticket médio",
    },
    {
      id: "OPP_RECURRING_REVENUE",
      name: "Receita Recorrente",
      description: "Potencial de migrar para modelo de assinatura",
      domain: "strategy",
      kpis: ["SERV-RENEWAL-RATE"],
      rules: [
        { kpi: "SERV-RENEWAL-RATE", operator: ">=", value: 80, weight: 1.0 },
      ],
      suggested_levers: ["LEV_RECURRING_MODEL", "LEV_SUBSCRIPTION_MODEL"],
      potential_impact: "Previsibilidade + aumento de LTV",
    },
    {
      id: "OPP_CHANNEL_OPTIMIZATION",
      name: "Otimização de Canal",
      description: "Algum canal com performance acima da média subutilizado",
      domain: "marketing",
      kpis: ["TECH-LTVCAC-001"],
      rules: [
        { kpi: "TECH-LTVCAC-001", operator: ">=", value: 3, weight: 1.0 },
      ],
      suggested_levers: ["LEV_CHANNEL_INVEST", "LEV_DIGITAL_CHANNEL"],
      potential_impact: "Redução de 30% no CAC",
    },
    {
      id: "OPP_RETENTION_LEVERAGE",
      name: "Alavancagem de Retenção",
      description: "Alta retenção como vantagem competitiva",
      domain: "commercial",
      kpis: ["TECH-CHURN-001"],
      rules: [{ kpi: "TECH-CHURN-001", operator: "<=", value: 2, weight: 1.0 }],
      suggested_levers: ["LEV_REFERRAL_PROGRAM", "LEV_RETENTION"],
      potential_impact: "Programa de referral orgânico",
    },
    {
      id: "OPP_PROJECT_MARGIN",
      name: "Melhoria de Margem de Projeto",
      description: "Margem de projeto abaixo do potencial",
      domain: "finance",
      kpis: ["CONTRACT-PROFIT"],
      rules: [
        { kpi: "CONTRACT-PROFIT", operator: "<", value: 20, weight: 1.0 },
      ],
      suggested_levers: ["LEV_COST_REDUCTION", "LEV_PRICE_INCREASE"],
      potential_impact: "Aumento de 5-10pp na margem",
    },
    {
      id: "OPP_ON_TIME_DELIVERY",
      name: "Excelência em Entregas",
      description: "Entregas no prazo como diferencial",
      domain: "operations",
      kpis: ["LOG-ON-TIME", "LOG-OTIF-001"],
      rules: [
        { kpi: "LOG-ON-TIME", operator: ">=", value: 95, weight: 0.5 },
        { kpi: "LOG-OTIF-001", operator: ">=", value: 90, weight: 0.5 },
      ],
      suggested_levers: ["LEV_CHANNEL_INVEST", "LEV_REFERRAL_PROGRAM"],
      potential_impact: "Diferencial competitivo + retenção",
    },
    {
      id: "OPP_FOOD_TURNOVER",
      name: "Giro de Mesa",
      description: "Alto giro de mesas como oportunidade",
      domain: "operations",
      kpis: ["FOOD-AVG-CHECK"],
      rules: [{ kpi: "FOOD-AVG-CHECK", operator: ">", value: 0, weight: 1.0 }],
      suggested_levers: ["LEV_TICKET_INCREASE", "LEV_UPSELL"],
      potential_impact: "Aumento de 15-25% no ticket",
    },
    {
      id: "OPP_PATIENT_SATISFACTION",
      name: "Satisfação de Pacientes",
      description: "Alta satisfação como diferencial",
      domain: "strategy",
      kpis: ["HEALTH-NPS-001"],
      rules: [
        { kpi: "HEALTH-NPS-001", operator: ">=", value: 70, weight: 1.0 },
      ],
      suggested_levers: ["LEV_REFERRAL_PROGRAM", "LEV_RETENTION"],
      potential_impact: "Crescimento via indicação",
    },
    {
      id: "OPP_HEALTH_OCCUPANCY",
      name: "Ocupação Hospitalar",
      description: "Alta ocupação como eficiência",
      domain: "operations",
      kpis: ["HEALTH-OCCUPANCY"],
      rules: [
        { kpi: "HEALTH-OCCUPANCY", operator: ">=", value: 80, weight: 1.0 },
      ],
      suggested_levers: ["LEV_PRICE_INCREASE", "LEV_CHANNEL_INVEST"],
      potential_impact: "Melhoria de receita",
    },
    {
      id: "OPP_QUALITY_EXCELLENCE",
      name: "Excelência de Qualidade",
      description: "Baixa taxa de defeitos como vantagem",
      domain: "operations",
      kpis: ["MFG-DEFECT-RATE", "MFG-FPY-001"],
      rules: [
        { kpi: "MFG-DEFECT-RATE", operator: "<=", value: 2, weight: 0.5 },
        { kpi: "MFG-FPY-001", operator: ">=", value: 95, weight: 0.5 },
      ],
      suggested_levers: ["LEV_PRICING_POWER", "LEV_REFERRAL_PROGRAM"],
      potential_impact: "Precificação premium",
    },
    {
      id: "OPP_OEE_OPTIMIZATION",
      name: "Otimização de OEE",
      description: "OEE alto como eficiência",
      domain: "operations",
      kpis: ["MFG-OEE-001"],
      rules: [{ kpi: "MFG-OEE-001", operator: ">=", value: 85, weight: 1.0 }],
      suggested_levers: ["LEV_AUTOMATION", "LEV_CHANNEL_INVEST"],
      potential_impact: "Aumento de capacidade",
    },
    {
      id: "OPP_ATTENDANCE_RATE",
      name: "Taxa de Frequência",
      description: "Alta frequência como eficiência",
      domain: "operations",
      kpis: ["EDU-ATTENDANCE-001"],
      rules: [
        { kpi: "EDU-ATTENDANCE-001", operator: ">=", value: 90, weight: 1.0 },
      ],
      suggested_levers: ["LEV_CHANNEL_INVEST", "LEV_REFERRAL_PROGRAM"],
      potential_impact: "Reputação + retenção",
    },
    {
      id: "OPP_LOW_CHURN",
      name: "Baixo Churn como Vantagem",
      description: "Churn muito baixo = base sólida para crescimento",
      domain: "commercial",
      kpis: ["TECH-CHURN-001"],
      rules: [{ kpi: "TECH-CHURN-001", operator: "<=", value: 1, weight: 1.0 }],
      suggested_levers: [
        "LEV_UPSELL",
        "LEV_CROSS_SELL",
        "LEV_REFERRAL_PROGRAM",
      ],
      potential_impact: "Expansão de receita na base",
    },
    {
      id: "OPP_HIGH_NRR",
      name: "Alta Expansão de Receita",
      description:
        "Net Revenue Retention > 100% = crescimento sem novos clientes",
      domain: "commercial",
      kpis: ["TECH-NRR-001"],
      rules: [{ kpi: "TECH-NRR-001", operator: ">", value: 110, weight: 1.0 }],
      suggested_levers: ["LEV_UPSELL", "LEV_CROSS_SELL"],
      potential_impact: "Crescimento composto",
    },
    {
      id: "OPP_CASH_POSITIVE",
      name: "Caixa Positivo",
      description: "Fluxo de caixa operacional positivo = flexibilidade",
      domain: "finance",
      kpis: ["FIN-CASH-FLOW"],
      rules: [{ kpi: "FIN-CASH-FLOW", operator: ">", value: 0, weight: 1.0 }],
      suggested_levers: ["LEV_GEOGRAPHIC_EXPANSION", "LEV_CHANNEL_INVEST"],
      potential_impact: "Investimento em crescimento",
    },
  ];

  detectSymptoms(kpis: KPIData[]): DetectionResult {
    const detectedChallenges: Challenge[] = [];

    for (const rule of this.detectionRules) {
      const score = this.calculateRuleScore(rule, kpis);

      if (score >= 0.5) {
        const severity = this.calculateSeverity(score);

        detectedChallenges.push({
          id: rule.id,
          name: rule.name,
          description: rule.description,
          severity,
          detectedKPIs: rule.kpis,
          confidence: score,
          domain: rule.domain,
          diagnosisCode: rule.diagnosis_code,
          timeframe: rule.timeframe,
        });
      }
    }

    const overallHealth = this.calculateOverallHealth(detectedChallenges);
    const summary = this.generateSummary(detectedChallenges, overallHealth);

    return {
      challenges: detectedChallenges,
      overallHealth,
      summary,
    };
  }

  detectOpportunities(kpis: KPIData[]): Opportunity[] {
    const detectedOpportunities: Opportunity[] = [];

    for (const rule of this.opportunityRules) {
      const score = this.calculateOpportunityScore(rule, kpis);

      if (score >= 0.5) {
        detectedOpportunities.push({
          id: rule.id,
          name: rule.name,
          description: rule.description,
          confidence: score,
          domain: rule.domain,
          suggestedLevers: rule.suggested_levers,
          potentialImpact: rule.potential_impact,
          kpis: rule.kpis,
        });
      }
    }

    return detectedOpportunities.sort((a, b) => b.confidence - a.confidence);
  }

  private calculateRuleScore(rule: DetectionRule, kpis: KPIData[]): number {
    let totalScore = 0;
    let totalWeight = 0;

    for (const ruleConfig of rule.rules) {
      const kpiData = kpis.find(
        (k) =>
          k.code === ruleConfig.kpi ||
          k.code.replace(/_/g, "-").toUpperCase() ===
            ruleConfig.kpi.toUpperCase(),
      );

      if (kpiData && kpiData.value !== undefined) {
        const value = Number(kpiData.value);
        if (!isNaN(value)) {
          let matches = false;

          switch (ruleConfig.operator) {
            case "<":
              matches = value < ruleConfig.value;
              break;
            case "<=":
              matches = value <= ruleConfig.value;
              break;
            case ">":
              matches = value > ruleConfig.value;
              break;
            case ">=":
              matches = value >= ruleConfig.value;
              break;
            case "==":
              matches = value === ruleConfig.value;
              break;
          }

          if (matches) {
            totalScore += ruleConfig.weight;
          }
          totalWeight += ruleConfig.weight;
        }
      }
    }

    return totalWeight > 0 ? totalScore / totalWeight : 0;
  }

  private calculateOpportunityScore(
    rule: OpportunityRule,
    kpis: KPIData[],
  ): number {
    let totalScore = 0;
    let totalWeight = 0;

    for (const ruleConfig of rule.rules) {
      const kpiData = kpis.find(
        (k) =>
          k.code === ruleConfig.kpi ||
          k.code.replace(/_/g, "-").toUpperCase() ===
            ruleConfig.kpi.toUpperCase(),
      );

      if (kpiData && kpiData.value !== undefined) {
        const value = Number(kpiData.value);
        if (!isNaN(value)) {
          let matches = false;

          switch (ruleConfig.operator) {
            case "<":
              matches = value < ruleConfig.value;
              break;
            case "<=":
              matches = value <= ruleConfig.value;
              break;
            case ">":
              matches = value > ruleConfig.value;
              break;
            case ">=":
              matches = value >= ruleConfig.value;
              break;
          }

          if (matches) {
            totalScore += ruleConfig.weight;
          }
          totalWeight += ruleConfig.weight;
        }
      }
    }

    return totalWeight > 0 ? totalScore / totalWeight : 0;
  }

  private calculateSeverity(score: number): RiskSeverity {
    if (score >= 0.9) return "critical";
    if (score >= 0.7) return "high";
    if (score >= 0.5) return "medium";
    return "low";
  }

  private calculateOverallHealth(
    challenges: Challenge[],
  ): "critical" | "warning" | "attention" | "healthy" | "excellent" {
    if (challenges.length === 0) return "excellent";

    const criticalCount = challenges.filter(
      (c) => c.severity === "critical",
    ).length;
    const highCount = challenges.filter((c) => c.severity === "high").length;

    if (criticalCount >= 2) return "critical";
    if (criticalCount >= 1 || highCount >= 3) return "warning";
    if (highCount >= 1 || challenges.length >= 3) return "attention";

    return "healthy";
  }

  private generateSummary(challenges: Challenge[], health: string): string {
    if (challenges.length === 0) {
      return "Nenhum desafio crítico detectado. Empresa em situação estável.";
    }

    const critical = challenges.filter((c) => c.severity === "critical");
    const high = challenges.filter((c) => c.severity === "high");

    let summary = `${challenges.length} desafio(s) detectado(s). `;

    if (critical.length > 0) {
      summary += `ATENÇÃO CRÍTICA: ${critical.map((c) => c.name).join(", ")}. `;
    }

    if (high.length > 0) {
      summary += `Alto impacto: ${high.map((c) => c.name).join(", ")}.`;
    }

    return summary;
  }

  getRiskRules(): DetectionRule[] {
    return this.detectionRules;
  }

  getOpportunityRules(): OpportunityRule[] {
    return this.opportunityRules;
  }

  getKPIDefinitions(): Record<string, KPIDefinition> {
    return KPI_DEFINITIONS;
  }
}

export const detectionService = DetectionService.getInstance();

export const detectSymptoms = (kpis: KPIData[]): DetectionResult => {
  return detectionService.detectSymptoms(kpis);
};

export const detectOpportunities = (kpis: KPIData[]): Opportunity[] => {
  return detectionService.detectOpportunities(kpis);
};
