import { describe, it, expect } from "vitest";
import { detectDomain, getKPIsForDomain } from "./domainDetector";

describe("DomainDetector", () => {
  describe("detectDomain", () => {
    it("should detect finance domain from headers", () => {
      const headers = [
        "data",
        "descricao",
        "valor",
        "credito",
        "debito",
        "saldo",
      ];
      const result = detectDomain(headers, []);
      expect(result.domain).toBe("finance");
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it("should detect commercial domain from headers", () => {
      const headers = [
        "cliente",
        "venda",
        "produto",
        "ticket",
        "conversao",
        "leads",
      ];
      const result = detectDomain(headers, []);
      expect(result.domain).toBe("commercial");
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it("should detect marketing domain from headers", () => {
      const headers = [
        "campanha",
        "clique",
        "impressao",
        "custo",
        "roi",
        "conversao",
      ];
      const result = detectDomain(headers, []);
      expect(result.domain).toBe("marketing");
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it("should detect operations domain from headers", () => {
      const headers = [
        "produtividade",
        "eficiencia",
        "ciclo",
        "defeito",
        "capacidade",
      ];
      const result = detectDomain(headers, []);
      expect(result.domain).toBe("operations");
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it("should detect people domain from headers", () => {
      const headers = [
        "funcionario",
        "turnover",
        "headcount",
        "folha",
        "contratar",
      ];
      const result = detectDomain(headers, []);
      expect(result.domain).toBe("people");
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it("should return unknown for unrecognized headers", () => {
      const headers = ["foo", "bar", "baz"];
      const result = detectDomain(headers, []);
      expect(result.domain).toBe("unknown");
    });

    it("should use blueprint as fallback", () => {
      const headers = ["codigo", "descricao", "referencia"];
      const blueprint = { industry_sector: "retail" };
      const result = detectDomain(headers, [], blueprint);
      expect(result.domain).toBe("commercial");
    });
  });

  describe("getKPIsForDomain", () => {
    it("should return KPIs for finance domain", () => {
      const kpis = getKPIsForDomain("finance");
      expect(kpis).toContain("REVENUE_MONTHLY");
      expect(kpis).toContain("EBITDA");
    });

    it("should return KPIs for commercial domain", () => {
      const kpis = getKPIsForDomain("commercial");
      expect(kpis).toContain("CAC");
      expect(kpis).toContain("LTV");
    });

    it("should return KPIs for marketing domain", () => {
      const kpis = getKPIsForDomain("marketing");
      expect(kpis).toContain("ROI");
      expect(kpis).toContain("CAC_MARKETING");
    });

    it("should return KPIs for operations domain", () => {
      const kpis = getKPIsForDomain("operations");
      expect(kpis).toContain("PRODUCTIVITY_INDEX");
      expect(kpis).toContain("EFFICIENCY_RATIO");
    });

    it("should return KPIs for people domain", () => {
      const kpis = getKPIsForDomain("people");
      expect(kpis).toContain("TURNOVER_RATE");
      expect(kpis).toContain("HEADCOUNT");
    });
  });
});
