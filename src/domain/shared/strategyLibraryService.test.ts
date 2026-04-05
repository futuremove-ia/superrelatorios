import { describe, it, expect, beforeEach, vi } from "vitest";
import { StrategyLibraryService } from "./strategyLibraryService";

describe("StrategyLibraryService", () => {
  let service: StrategyLibraryService;

  beforeEach(() => {
    // Create fresh instance for each test
    service = new StrategyLibraryService();
  });

  describe("detectBusinessContext", () => {
    it("should detect finance domain from financial data", () => {
      const financialData = [
        { receita: 100000, lucro: 15000, caixa: 50000 },
        { receita: 120000, lucro: 18000, caixa: 45000 },
      ];

      const context = service.detectBusinessContext(financialData);

      expect(context.domain).toBe("finance");
      expect(context.dataCharacteristics.hasFinancialData).toBe(true);
    });

    it("should detect sales domain from sales data", () => {
      const salesData = [
        { venda: 5000, cliente: "João", conversão: 0.15 },
        { venda: 7500, cliente: "Maria", conversão: 0.12 },
      ];

      const context = service.detectBusinessContext(salesData);

      expect(context.domain).toBe("sales");
      expect(context.dataCharacteristics.hasSalesData).toBe(true);
    });

    it("should default to general for mixed data", () => {
      const mixedData = [{ nome: "Produto A", quantidade: 100, preço: 50 }];

      const context = service.detectBusinessContext(mixedData);

      expect(context.domain).toBe("general");
    });
  });

  describe("getRelevantKPIs", () => {
    it("should return finance KPIs for finance domain", () => {
      const context = {
        domain: "finance" as const,
        dataCharacteristics: {
          hasFinancialData: true,
          hasSalesData: false,
          hasOperationalData: false,
          hasMarketingData: false,
        },
      };

      const kpis = service.getRelevantKPIs(context);

      expect(kpis.length).toBeGreaterThan(0);
      expect(kpis.some((kpi) => kpi.domain === "finance")).toBe(true);
      expect(kpis.some((kpi) => kpi.code === "NET_PROFIT_MARGIN")).toBe(true);
    });

    it("should include finance KPIs for all domains (core business)", () => {
      const salesContext = {
        domain: "sales" as const,
        dataCharacteristics: {
          hasFinancialData: false,
          hasSalesData: true,
          hasOperationalData: false,
          hasMarketingData: false,
        },
      };

      const kpis = service.getRelevantKPIs(salesContext);

      expect(kpis.some((kpi) => kpi.domain === "sales")).toBe(true);
      expect(kpis.some((kpi) => kpi.domain === "finance")).toBe(true);
    });
  });

  describe("getKnownChallenges", () => {
    it("should return cash flow challenges for finance KPIs", () => {
      const kpiCodes = ["NET_PROFIT_MARGIN", "CASH_BURN_RATE", "RUNWAY"];

      const challenges = service.getKnownChallenges(kpiCodes);

      expect(challenges.length).toBeGreaterThan(0);
      expect(challenges.some((c) => c.code === "CASH_FLOW_CRUNCH")).toBe(true);
    });

    it("should return sales challenges for sales KPIs", () => {
      const kpiCodes = ["SALES_CONVERSION", "CUSTOMER_ACQUISITION_COST"];

      const challenges = service.getKnownChallenges(kpiCodes);

      expect(challenges.length).toBeGreaterThan(0);
      expect(challenges.some((c) => c.code === "SALES_INEFFICIENCY")).toBe(
        true,
      );
    });

    it("should return empty for unknown KPIs", () => {
      const kpiCodes = ["UNKNOWN_KPI", "ANOTHER_UNKNOWN"];

      const challenges = service.getKnownChallenges(kpiCodes);

      expect(challenges.length).toBe(0);
    });
  });

  describe("enrichPrompt", () => {
    it("should enrich prompt with strategic context", () => {
      const basePrompt = "Analyze the data";
      const context = {
        domain: "finance" as const,
        dataCharacteristics: {
          hasFinancialData: true,
          hasSalesData: false,
          hasOperationalData: false,
          hasMarketingData: false,
        },
      };

      const enrichedPrompt = service.enrichPrompt(basePrompt, context);

      expect(enrichedPrompt).toContain(basePrompt);
      expect(enrichedPrompt).toContain("ESPECIALIZAÇÃO:");
      expect(enrichedPrompt).toContain("Consultor Financeiro Senior");
      expect(enrichedPrompt).toContain("KPIs RELEVANTES PARA ANÁLISE:");
      expect(enrichedPrompt).toContain("NET_PROFIT_MARGIN");
    });

    it("should use general specialist for general domain", () => {
      const basePrompt = "Analyze the data";
      const context = {
        domain: "general" as const,
        dataCharacteristics: {
          hasFinancialData: false,
          hasSalesData: false,
          hasOperationalData: false,
          hasMarketingData: false,
        },
      };

      const enrichedPrompt = service.enrichPrompt(basePrompt, context);

      expect(enrichedPrompt).toContain("Analista de Negócios Senior");
    });
  });
});
