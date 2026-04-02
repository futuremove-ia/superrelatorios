import { createClient } from "@/lib/supabase";
import {
  organizationKPIService,
  type OrganizationKPI,
} from "./organizationKPIService";
import { kpiLibraryService, type KPI } from "./kpiLibraryService";
import {
  BUSINESS_MODELS,
  getKPIDescription,
  type BusinessModel,
} from "@/types/businessModels";

export interface DataPresence {
  totalKPIs: number;
  kpisWithData: number;
  totalDataPoints: number;
  byDomain: Record<string, number>;
  byKPI: Record<string, number>;
}

export interface RelevantKPI {
  code: string;
  title: string;
  domain: string;
  priority: number;
  reason: string;
  readiness_level: number;
  dataPoints: number;
  next_action: string;
  kpiDescription?: {
    whatIsIt: string;
    whyItMatters: string;
    howToImprove: string;
  };
}

export type MaturityLevel = 0 | 1 | 2 | 3 | 4;

export interface MaturityInfo {
  level: MaturityLevel;
  label: string;
  description: string;
  nextAction: string;
}

const PRIORITY_KPIS: Record<string, { priority: number; reason: string }> = {
  RUNWAY: { priority: 1, reason: "Vital para sobrevivência da empresa" },
  REVENUE: { priority: 1, reason: "Receita principal do negócio" },
  GM: { priority: 1, reason: "Margem bruta essencial para saúde financeira" },
  GROWTH: { priority: 1, reason: "Crescimento indica saúde do negócio" },
  EBITDA: { priority: 2, reason: "Lucro operacional" },
  CAC: { priority: 2, reason: "Custo de aquisição de cliente" },
  LTV: { priority: 2, reason: "Lifetime value do cliente" },
  CHURN: { priority: 2, reason: "Taxa de cancelamento crítica" },
};

const MODEL_RELEVANT_KPIS: Record<string, string[]> = {
  B2B: [
    "CAC",
    "LTV",
    "WIN_RATE",
    "SALES_CYCLE",
    "MRR",
    "LEAD_VELOCITY",
    "PIPELINE",
    "ARPU",
  ],
  B2C: [
    "AOV",
    "CONVERSION",
    "FOOT_TRAFFIC",
    "REPEAT_PURCHASE",
    "NPS",
    "BASKET_SIZE",
    "STORE_TRAFFIC",
    "GMV",
  ],
  B2B2C: [
    "GMV",
    "TAKE_RATE",
    "SELLER_COUNT",
    "BUYER_COUNT",
    "MATCH_RATE",
    "DISTRIBUTOR_MARGIN",
  ],
  MARKETPLACE: [
    "GMV",
    "TAKE_RATE",
    "MATCH_RATE",
    "CAC",
    "LTV",
    "SELLER_CHURN",
    "BUYER_CHURN",
    "FILL_RATE",
  ],
  SAAS: [
    "MRR",
    "ARR",
    "CHURN",
    "CAC",
    "LTV",
    "BURN_RATE",
    "NRR",
    "ARPU",
    "TRIAL_CONVERSION",
  ],
  SERVICES: [
    "UTILIZATION",
    "BILLABLE_HOURS",
    "PROJECT_MARGIN",
    "CLIENT_SATISFACTION",
    "AVG_PROJECT_VALUE",
  ],
};

const SECTOR_RELEVANT_KPIS: Record<string, string[]> = {
  SAAS: [
    "RUNWAY",
    "MRR",
    "CAC",
    "LTV",
    "CHURN",
    "NPS",
    "NET_REVENUE_RETENTION",
  ],
  ECOMMERCE: [
    "REVENUE",
    "GM",
    "CAC",
    "LTV",
    "AOV",
    "CONVERSION_RATE",
    "RETENTION",
  ],
  SERVICES: [
    "REVENUE",
    "UTILIZATION",
    "CAC",
    "LTV",
    "PROJECT_MARGIN",
    "CLIENT_SATISFACTION",
  ],
  MANUFACTURING: [
    "REVENUE",
    "GM",
    "OPEX",
    "INVENTORY_TURNOVER",
    "CAPACITY_UTILIZATION",
    "DEFECT_RATE",
  ],
  RETAIL: [
    "REVENUE",
    "GM",
    "SAME_STORE_GROWTH",
    "INVENTORY_TURNOVER",
    "AVG_TRANSACTION",
  ],
};

const COMPANY_SIZE_RELEVANT_KPIS: Record<string, string[]> = {
  STARTUP: [
    "RUNWAY",
    "REVENUE",
    "GROWTH",
    "CAC",
    "LTV",
    "BURN_RATE",
    "HEADCOUNT",
  ],
  SME: ["REVENUE", "GM", "EBITDA", "CASH_FLOW", "AR", "AP", "HEADCOUNT"],
  MID_MARKET: [
    "REVENUE",
    "GM",
    "EBITDA",
    "ROIC",
    "DEBT_RATIO",
    "WORKING_CAPITAL",
    "HEADCOUNT",
  ],
  ENTERPRISE: [
    "REVENUE",
    "GM",
    "EBITDA",
    "ROE",
    "DEBT_RATIO",
    "FREE_CASH_FLOW",
    "TOTAL_ASSETS",
  ],
};

export class RelevanceEngine {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || "",
    import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  );

  async calculateRelevance(
    organizationId: string,
    sector?: string,
    companySize?: string,
    businessModel?: string,
  ): Promise<RelevantKPI[]> {
    const kpis = await kpiLibraryService.getKPIs();
    const dataPresence = await this.getDataPresence(organizationId);
    const maturityLevel = this.getReadinessLevel(dataPresence.totalDataPoints);

    const relevantKPIs: RelevantKPI[] = [];
    const relevantBySector = sector ? SECTOR_RELEVANT_KPIS[sector] || [] : [];
    const relevantBySize = companySize
      ? COMPANY_SIZE_RELEVANT_KPIS[companySize] || []
      : [];
    const relevantByModel = businessModel
      ? MODEL_RELEVANT_KPIS[businessModel] || []
      : [];

    for (const kpi of kpis) {
      let priority = 999;
      let reason = "KPI disponível";

      const priorityInfo = PRIORITY_KPIS[kpi.code];
      if (priorityInfo) {
        priority = priorityInfo.priority;
        reason = priorityInfo.reason;
      }

      if (relevantByModel.includes(kpi.code)) {
        priority = Math.max(priority - 2, 1);
        reason = `Relevante para modelo ${businessModel}`;
      }

      if (relevantBySector.includes(kpi.code)) {
        priority = Math.max(priority - 1, 1);
        reason = `Relevante para setor ${sector}`;
      }

      if (relevantBySize.includes(kpi.code)) {
        priority = Math.max(priority - 1, 1);
        reason = `Relevante para porte ${companySize}`;
      }

      const dataPoints = dataPresence.byKPI[kpi.code] || 0;

      if (this.shouldIncludeKPI(maturityLevel, dataPoints, priority)) {
        const kpiDescription = businessModel
          ? getKPIDescription(businessModel, kpi.code)
          : undefined;

        relevantKPIs.push({
          code: kpi.code,
          title: kpi.title,
          domain: kpi.domain,
          priority,
          reason,
          readiness_level: maturityLevel,
          dataPoints,
          next_action: this.suggestNextAction(kpi.code),
          kpiDescription: kpiDescription
            ? {
                whatIsIt: kpiDescription.whatIsIt,
                whyItMatters: kpiDescription.whyItMatters,
                howToImprove: kpiDescription.howToImprove,
              }
            : undefined,
        });
      }
    }

    return relevantKPIs.sort((a, b) => a.priority - b.priority);
  }

  private shouldIncludeKPI(
    maturityLevel: MaturityLevel,
    dataPoints: number,
    priority: number,
  ): boolean {
    switch (maturityLevel) {
      case 0:
        return priority <= 1;
      case 1:
        return priority <= 3 && dataPoints > 0;
      case 2:
        return priority <= 5;
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  }

  async getDataPresence(organizationId: string): Promise<DataPresence> {
    const kpis =
      await organizationKPIService.getOrganizationKPIs(organizationId);

    const byDomain: Record<string, number> = {};
    const byKPI: Record<string, number> = {};

    for (const kpi of kpis) {
      if (kpi.kpi_library) {
        const domain = kpi.kpi_library.domain || "unknown";
        const code = kpi.kpi_library.code || "unknown";

        byDomain[domain] = (byDomain[domain] || 0) + 1;
        byKPI[code] = (byKPI[code] || 0) + 1;
      }
    }

    const uniqueKPIs = new Set(kpis.map((k) => k.kpi_id));

    return {
      totalKPIs: uniqueKPIs.size,
      kpisWithData: uniqueKPIs.size,
      totalDataPoints: kpis.length,
      byDomain,
      byKPI,
    };
  }

  getReadinessLevel(dataPoints: number): MaturityLevel {
    if (dataPoints === 0) return 0;
    if (dataPoints < 5) return 1;
    if (dataPoints < 20) return 2;
    if (dataPoints < 50) return 3;
    return 4;
  }

  getMaturityInfo(dataPoints: number): MaturityInfo {
    const level = this.getReadinessLevel(dataPoints);

    const levels: Record<MaturityLevel, MaturityInfo> = {
      0: {
        level: 0,
        label: "Iniciante",
        description: "Preciso de dados para começar",
        nextAction: "Adicione seu primeiro arquivo de dados",
      },
      1: {
        level: 1,
        label: "Básico",
        description: "Alguns dados básicos disponíveis",
        nextAction: "Continue adicionando dados para métricas principais",
      },
      2: {
        level: 2,
        label: "Em Desenvolvimento",
        description: " dados suficientes para análises úteis",
        nextAction: "Adicione mais períodos para ver tendências",
      },
      3: {
        level: 3,
        label: "Intermediário",
        description: "Boa base de dados para análise",
        nextAction: "Adicione mais KPIs para ter uma visão completa",
      },
      4: {
        level: 4,
        label: "Avançado",
        description: "Dados robustos para análise preditiva",
        nextAction: "Explore análises avançadas e previsões",
      },
    };

    return levels[level];
  }

  suggestNextAction(kpiCode: string): string {
    const actions: Record<string, string> = {
      RUNWAY: "Adicione projeção de fluxo de caixa mensal",
      REVENUE: "Adicione revenue mensal dos últimos 12 meses",
      GM: "Adicione dados de custo de vendas",
      CAC: "Adicione dados de marketing spend e novas aquisição",
      LTV: "Adicione dados de receita por cliente",
      CHURN: "Adicione dados de clientes ativos e cancelamentos",
      EBITDA: "Adicione dados de despesas operacionais",
      GROWTH: "Adicione dados de vendas comparando períodos",
    };

    return actions[kpiCode] || "Continue adicionando dados históricos";
  }
}

export const relevanceEngine = new RelevanceEngine();
