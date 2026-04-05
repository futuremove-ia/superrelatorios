import { describe, it, expect } from "vitest";
import {
  mapColumnToKPIs,
  getColumnPatternsForDomain,
  getAllKPIsForDomain,
} from "./columnMappingEngine";
import type { Domain } from "@/types/financial-parser";

describe("ColumnMappingEngine", () => {
  describe("mapColumnToKPIs", () => {
    it('should map "receita" to revenue KPIs for finance domain', () => {
      const mappings = mapColumnToKPIs("receita", "finance");
      expect(mappings.length).toBeGreaterThan(0);
      expect(mappings.some((m) => m.kpiCode === "REVENUE_MONTHLY")).toBe(true);
    });

    it('should map "cliente" to commercial KPIs', () => {
      const mappings = mapColumnToKPIs("cliente", "commercial");
      expect(mappings.length).toBeGreaterThan(0);
    });

    it('should map "campanha" to marketing KPIs', () => {
      const mappings = mapColumnToKPIs("campanha", "marketing");
      expect(mappings.length).toBeGreaterThan(0);
      expect(mappings.some((m) => m.kpiCode === "CAMPAIGN_ROI")).toBe(true);
    });

    it('should map "produtividade" to operations KPIs', () => {
      const mappings = mapColumnToKPIs("produtividade", "operations");
      expect(mappings.length).toBeGreaterThan(0);
      expect(mappings.some((m) => m.kpiCode === "PRODUCTIVITY_INDEX")).toBe(
        true,
      );
    });

    it('should map "funcionario" to people KPIs', () => {
      const mappings = mapColumnToKPIs("funcionario", "people");
      expect(mappings.length).toBeGreaterThan(0);
      expect(mappings.some((m) => m.kpiCode === "HEADCOUNT")).toBe(true);
    });

    it("should return empty for unknown column", () => {
      const mappings = mapColumnToKPIs("xyz123", "commercial");
      expect(mappings).toHaveLength(0);
    });

    it("should handle case insensitive matching", () => {
      const mappings = mapColumnToKPIs("RECEITA", "finance");
      expect(mappings.length).toBeGreaterThan(0);
    });

    it("should handle accented characters", () => {
      const mappings = mapColumnToKPIs("contratação", "people");
      expect(mappings.length).toBeGreaterThan(0);
    });

    it("should handle empty column name", () => {
      const mappings = mapColumnToKPIs("", "commercial");
      expect(mappings).toHaveLength(0);
    });

    it("should handle null domain gracefully", () => {
      const mappings = mapColumnToKPIs("receita", "unknown" as Domain);
      expect(mappings).toHaveLength(0);
    });
  });

  describe("getColumnPatternsForDomain", () => {
    it("should return patterns for finance domain", () => {
      const patterns = getColumnPatternsForDomain("finance");
      expect(patterns).toBeDefined();
      expect(Object.keys(patterns).length).toBeGreaterThan(0);
    });

    it("should return patterns for commercial domain", () => {
      const patterns = getColumnPatternsForDomain("commercial");
      expect(patterns).toBeDefined();
    });

    it("should return empty for unknown domain", () => {
      const patterns = getColumnPatternsForDomain("unknown" as Domain);
      expect(Object.keys(patterns).length).toBe(0);
    });
  });

  describe("getAllKPIsForDomain", () => {
    it("should return all KPIs for commercial domain", () => {
      const kpis = getAllKPIsForDomain("commercial");
      expect(kpis.length).toBeGreaterThan(0);
      expect(kpis.some((k) => k.kpiCode === "CAC")).toBe(true);
    });

    it("should include kpiName and category for each KPI", () => {
      const kpis = getAllKPIsForDomain("marketing");
      if (kpis.length > 0) {
        expect(kpis[0]).toHaveProperty("kpiCode");
        expect(kpis[0]).toHaveProperty("kpiName");
        expect(kpis[0]).toHaveProperty("category");
      }
    });
  });
});
