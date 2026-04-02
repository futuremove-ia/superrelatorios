import { ExtractedKPI } from "../types/extraction";

export interface StrategyTemplate {
  id: string;
  name: string;
  description: string;
  challenge: string;
  objective: string;
  actionLevers: ActionLever[];
  priority: number;
  complexity: "low" | "medium" | "high";
  estimatedTime: string;
  expectedImpact: string;
}

export interface ActionLever {
  id: string;
  title: string;
  description: string;
  category: "financial" | "operational" | "marketing" | "sales" | "strategic";
  priority: number;
  complexity: "low" | "medium" | "high";
  estimatedTime: string;
  resources: string[];
  expectedImpact: "low" | "medium" | "high";
  kpis: string[];
  steps: ActionStep[];
}

export interface ActionStep {
  id: string;
  title: string;
  description: string;
  category: "analysis" | "planning" | "execution" | "monitoring";
  estimatedTime: string;
  dependencies?: string[];
  deliverables: string[];
  successCriteria: string[];
}

export interface StrategyRecommendation {
  template: StrategyTemplate;
  customization: {
    industry?: string;
    companySize?: "small" | "medium" | "large";
    specificChallenges?: string[];
    availableResources?: string[];
  };
  confidence: number;
  reasoning: string;
}

class StrategyLibraryService {
  private static instance: StrategyLibraryService;
  private templates: StrategyTemplate[] = [];

  static getInstance(): StrategyLibraryService {
    if (!StrategyLibraryService.instance) {
      StrategyLibraryService.instance = new StrategyLibraryService();
    }
    return StrategyLibraryService.instance;
  }

  constructor() {
    this.initializeTemplates();
  }

  private initializeTemplates(): void {
    this.templates = [
      {
        id: "cash_flow_crunch_recovery",
        name: "Recuperação de Fluxo de Caixa",
        description:
          "Plano estratégico para resolver problemas de fluxo de caixa",
        challenge: "CASH_FLOW_CRUNCH",
        objective: "CASH_SAFETY_NET",
        actionLevers: [
          {
            id: "immediate_cash_conservation",
            title: "Conservação Imediata de Caixa",
            description:
              "Reduzir despesas não essenciais e otimizar fluxo de caixa",
            category: "financial",
            priority: 1,
            complexity: "medium",
            estimatedTime: "1-2 semanas",
            resources: ["Controller", "Planilha financeira", "Acesso bancário"],
            expectedImpact: "high",
            kpis: ["RUNWAY", "BURN_RATE", "DAYS_TO_RECEIVE"],
            steps: [
              {
                id: "analyze_expenses",
                title: "Análise de Despesas",
                description:
                  "Mapear todas as despesas e categorizar por essencialidade",
                category: "analysis",
                estimatedTime: "2-3 dias",
                deliverables: [
                  "Mapa de despesas detalhado",
                  "Categorização por prioridade",
                ],
                successCriteria: [
                  "100% das despesas mapeadas",
                  "Categorias definidas",
                ],
              },
              {
                id: "implement_cost_reduction",
                title: "Implementar Redução de Custos",
                description: "Executar plano de redução de custos imediato",
                category: "execution",
                estimatedTime: "1 semana",
                dependencies: ["analyze_expenses"],
                deliverables: [
                  "Plano executado",
                  "Economia mensal documentada",
                ],
                successCriteria: [
                  "Redução de 15-30% nos custos",
                  "Plano mantido por 3 meses",
                ],
              },
            ],
          },
          {
            id: "accelerate_receivables",
            title: "Acelerar Recebíveis",
            description: "Reduzir prazo médio de recebimento de clientes",
            category: "financial",
            priority: 2,
            complexity: "medium",
            estimatedTime: "2-3 semanas",
            resources: ["Equipe de vendas", "Sistema de cobrança", "Jurídico"],
            expectedImpact: "high",
            kpis: ["DAYS_TO_RECEIVE", "RUNWAY"],
            steps: [
              {
                id: "review_current_terms",
                title: "Revisar Condições Atuais",
                description:
                  "Analisar prazos e condições de pagamento vigentes",
                category: "analysis",
                estimatedTime: "2-3 dias",
                deliverables: [
                  "Relatório de condições atuais",
                  "Identificação de gargalos",
                ],
                successCriteria: [
                  "100% dos contratos analisados",
                  "Gargalos identificados",
                ],
              },
            ],
          },
        ],
        priority: 1,
        complexity: "high",
        estimatedTime: "4-6 semanas",
        expectedImpact: "Alta melhora na saúde financeira",
      },
      {
        id: "sales_machine_optimization",
        name: "Otimização da Máquina de Vendas",
        description: "Transformar o processo de vendas em máquina eficiente",
        challenge: "INEFFICIENT_SALES_MACHINE",
        objective: "PROFIT_MAXIMIZER",
        actionLevers: [
          {
            id: "sales_process_redesign",
            title: "Redesenho do Processo de Vendas",
            description: "Reestruturar completamente o funil de vendas",
            category: "sales",
            priority: 1,
            complexity: "high",
            estimatedTime: "3-4 semanas",
            resources: ["Consultor de vendas", "CRM", "Equipe comercial"],
            expectedImpact: "high",
            kpis: ["LTV_CAC_RATIO", "SALES_CYCLE_DAYS", "CAC"],
            steps: [
              {
                id: "map_current_process",
                title: "Mapear Processo Atual",
                description: "Documentar o processo de vendas do início ao fim",
                category: "analysis",
                estimatedTime: "1 semana",
                deliverables: [
                  "Processo documentado",
                  "Pontos de gargalo identificados",
                ],
                successCriteria: [
                  "Processo 100% mapeado",
                  "Ineficiências documentadas",
                ],
              },
            ],
          },
        ],
        priority: 2,
        complexity: "high",
        estimatedTime: "6-8 semanas",
        expectedImpact: "Aumento significativo na eficiência comercial",
      },
    ];
  }

  async getRecommendations(
    kpis: ExtractedKPI[],
    customization?: StrategyRecommendation["customization"],
  ): Promise<StrategyRecommendation[]> {
    const recommendations: StrategyRecommendation[] = [];

    for (const template of this.templates) {
      const match = this.evaluateTemplateMatch(template, kpis, customization);

      if (match.confidence >= 0.6) {
        recommendations.push({
          template,
          customization: customization || {},
          confidence: match.confidence,
          reasoning: match.reasoning,
        });
      }
    }

    return recommendations.sort((a, b) => b.confidence - a.confidence);
  }

  private evaluateTemplateMatch(
    template: StrategyTemplate,
    kpis: ExtractedKPI[],
    customization?: StrategyRecommendation["customization"],
  ): { confidence: number; reasoning: string } {
    let confidence = 0;
    const reasons: string[] = [];

    // Check KPI alignment
    const relevantKPIs = kpis.filter((kpi) =>
      template.actionLevers.some((lever) => lever.kpis.includes(kpi.code)),
    );
    if (relevantKPIs.length > 0) {
      confidence += 0.4;
      reasons.push(`${relevantKPIs.length} KPIs relevantes encontrados`);
    }

    // Check challenge alignment
    if (this.hasChallengeSymptoms(kpis, template.challenge)) {
      confidence += 0.3;
      reasons.push("Sintomas do desafio presentes");
    }

    // Check customization fit
    if (customization) {
      if (this.matchesIndustry(template, customization.industry)) {
        confidence += 0.2;
        reasons.push("Alinhamento com indústria");
      }

      if (this.matchesCompanySize(template, customization.companySize)) {
        confidence += 0.1;
        reasons.push("Adequado para porte da empresa");
      }
    }

    return {
      confidence: Math.min(1.0, confidence),
      reasoning: reasons.join("; "),
    };
  }

  private hasChallengeSymptoms(
    kpis: ExtractedKPI[],
    challenge: string,
  ): boolean {
    const challengeSymptoms: Record<string, string[]> = {
      CASH_FLOW_CRUNCH: ["RUNWAY", "BURN_RATE", "DAYS_TO_RECEIVE"],
      INEFFICIENT_SALES_MACHINE: ["LTV_CAC_RATIO", "SALES_CYCLE_DAYS", "CAC"],
      COMMODITY_TRAP: ["NET_PROFIT_MARGIN", "CONTRIBUTION_MARGIN"],
    };

    const relevantCodes = challengeSymptoms[challenge] || [];
    return relevantCodes.some((code) =>
      kpis.some((kpi) => kpi.code === code && kpi.status === "critical"),
    );
  }

  private matchesIndustry(
    template: StrategyTemplate,
    industry?: string,
  ): boolean {
    // Simplified industry matching logic
    return true; // TODO: Implement sophisticated industry matching
  }

  private matchesCompanySize(
    template: StrategyTemplate,
    size?: string,
  ): boolean {
    // Simplified size matching logic
    return true; // TODO: Implement sophisticated size matching
  }

  async getTemplate(id: string): Promise<StrategyTemplate | null> {
    return this.templates.find((template) => template.id === id) || null;
  }

  async getAllTemplates(): Promise<StrategyTemplate[]> {
    return [...this.templates];
  }
}

export default StrategyLibraryService;
export type {
  StrategyTemplate,
  ActionLever,
  ActionStep,
  StrategyRecommendation,
};
