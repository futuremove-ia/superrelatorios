import { describe, it, expect, beforeEach } from "vitest";
import {
  KPICalculationEngine,
  createCalculationEngine,
  CalculationContext,
  CalculationOptions,
} from "../../../../../domain/metrics/engine";
import { Sector, LibraryKPI } from "../../../../../domain/metrics/engine/types";

const mockLibraryKPI: LibraryKPI[] = [
  {
    id: "1",
    code: "TECH-MRR-001",
    title: "Monthly Recurring Revenue",
    description: "Receita recorrente mensal",
    calculation_formula: "mrr",
    unit: "currency",
    domain: "finance",
    sector: "technology",
    niche: "saas",
    business_model: "subscription",
    trend_direction: "higher_is_better",
    input_type: "non_cumulative",
    group_data_period: "monthly",
    total_is: "average_of_values",
    is_active: true,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "2",
    code: "TECH-CAC-001",
    title: "Customer Acquisition Cost",
    description: "Custo de aquisição de cliente",
    calculation_formula: "(marketing_spend + sales_spend) / new_customers",
    unit: "currency",
    domain: "finance",
    sector: "technology",
    niche: "saas",
    business_model: "subscription",
    trend_direction: "lower_is_better",
    input_type: "non_cumulative",
    group_data_period: "monthly",
    total_is: "average_of_values",
    is_active: true,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: "3",
    code: "TECH-CHURN-001",
    title: "Churn Rate",
    description: "Taxa de churn",
    calculation_formula: "churned_customers / customers",
    unit: "percent",
    domain: "operations",
    sector: "technology",
    niche: "saas",
    business_model: "subscription",
    trend_direction: "lower_is_better",
    input_type: "non_cumulative",
    group_data_period: "monthly",
    total_is: "average_of_values",
    is_active: true,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

const createTestContext = (
  overrides: Partial<CalculationContext> = {},
): CalculationContext => ({
  organizationId: "org-001",
  sector: "technology",
  businessModel: "subscription",
  period: "monthly",
  ...overrides,
});

const createTestEngine = (
  context: CalculationContext = createTestContext(),
  options: CalculationOptions = {},
  kpiLibrary: LibraryKPI[] = mockLibraryKPI,
): KPICalculationEngine => {
  return new KPICalculationEngine(context, options, kpiLibrary);
};

describe("KPICalculationEngine", () => {
  describe("constructor", () => {
    it("should create engine with default period when not provided", () => {
      const engine = new KPICalculationEngine(
        { organizationId: "org-001", period: "monthly" },
        {},
        [],
      );
      const ctx = engine.getContext();
      expect(ctx.period).toBe("monthly");
    });

    it("should initialize empty KPI library when not provided", () => {
      const engine = new KPICalculationEngine(
        { organizationId: "org-001", period: "monthly" },
        {},
        [],
      );
      expect(engine).toBeDefined();
    });
  });

  describe("calculateSingle", () => {
    describe("basic calculations", () => {
      it("should calculate MRR correctly with valid data", () => {
        const engine = createTestEngine();
        const rawData = { mrr: 100000 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBe(100000);
        expect(result.calculationStatus).toBe("success");
        expect(result.confidence).toBe("high");
        expect(result.unit).toBe("currency");
      });

      it("should calculate CAC correctly with valid data", () => {
        const engine = createTestEngine();
        const rawData = {
          marketing_spend: 10000,
          sales_spend: 5000,
          new_customers: 50,
        };

        const result = engine.calculateSingle("TECH-CAC-001", rawData);

        expect(result.value).toBe(300);
        expect(result.calculationStatus).toBe("success");
        expect(result.unit).toBe("currency");
      });

      it("should calculate Churn Rate correctly with valid data", () => {
        const engine = createTestEngine();
        const rawData = {
          churned_customers: 10,
          total_customers: 500,
        };

        const result = engine.calculateSingle("TECH-CHURN-001", rawData);

        expect(result.value).toBe(2);
        expect(result.calculationStatus).toBe("success");
        expect(result.unit).toBe("percent");
      });
    });

    describe("edge cases - division by zero", () => {
      it("should handle zero MRR", () => {
        const engine = createTestEngine();
        const rawData = { mrr: 0 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBe(0);
        expect(result.calculationStatus).toBe("success");
      });

      it("should handle zero customers in CAC calculation", () => {
        const engine = createTestEngine();
        const rawData = {
          marketing_spend: 10000,
          sales_spend: 5000,
          new_customers: 0,
        };

        const result = engine.calculateSingle("TECH-CAC-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("division_by_zero");
      });

      it("should handle zero total customers in churn calculation", () => {
        const engine = createTestEngine();
        const rawData = {
          churned_customers: 5,
          total_customers: 0,
        };

        const result = engine.calculateSingle("TECH-CHURN-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("division_by_zero");
      });
    });

    describe("edge cases - insufficient data", () => {
      it("should return insufficient_data when required fields are missing", () => {
        const engine = createTestEngine();
        const rawData = { marketing_spend: 10000 };

        const result = engine.calculateSingle("TECH-CAC-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
        expect(result.error).toContain("Dados insuficientes");
      });

      it("should return insufficient_data when all fields are missing", () => {
        const engine = createTestEngine();
        const rawData = {};

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
      });

      it("should handle partial data correctly for CAC", () => {
        const engine = createTestEngine();
        const rawData = { marketing_spend: 10000 };

        const result = engine.calculateSingle("TECH-CAC-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
      });
    });

    describe("edge cases - invalid input", () => {
      it("should handle NaN inputs", () => {
        const engine = createTestEngine();
        const rawData = { mrr: NaN };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
      });

      it("should handle Infinity inputs", () => {
        const engine = createTestEngine();
        const rawData = { mrr: Infinity };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
      });
    });

    describe("edge cases - formula not found", () => {
      it("should return not_applicable for unknown KPI code", () => {
        const engine = createTestEngine();
        const rawData = { mrr: 100000 };

        const result = engine.calculateSingle("UNKNOWN-KPI-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("not_applicable");
        expect(result.error).toContain("Fórmula não encontrada");
      });
    });

    describe("edge cases - null/undefined inputs", () => {
      it("should handle null values in raw data", () => {
        const engine = createTestEngine();
        const rawData = { mrr: null as unknown as number };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
      });

      it("should handle undefined values in raw data", () => {
        const engine = createTestEngine();
        const rawData = { mrr: undefined as unknown as number };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.value).toBeNull();
        expect(result.calculationStatus).toBe("insufficient_data");
      });
    });

    describe("edge cases - large numbers", () => {
      it("should handle very large numbers", () => {
        const engine = createTestEngine();
        const rawData = { mrr: 1e15 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.calculationStatus).toBe("success");
        expect(result.value).toBe(1e15);
      });

      it("should handle very small numbers", () => {
        const engine = createTestEngine();
        const rawData = { mrr: 0.0001 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.calculationStatus).toBe("success");
        expect(result.value).toBe(0.0001);
      });
    });

    describe("fallback behavior", () => {
      it("should use default unit when library KPI not found", () => {
        const engine = new KPICalculationEngine(createTestContext(), {}, []);
        const rawData = { mrr: 100000 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.unit).toBe("percent");
      });

      it("should use formula description as title when library KPI not found", () => {
        const engine = new KPICalculationEngine(createTestContext(), {}, []);
        const rawData = { mrr: 100000 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.title).toBeDefined();
      });

      it("should calculate without library KPI", () => {
        const engine = new KPICalculationEngine(createTestContext(), {}, []);
        const rawData = { mrr: 100000 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.calculationStatus).toBe("success");
        expect(result.value).toBe(100000);
      });
    });

    describe("status determination", () => {
      it("should return warning status when value is in warning range", () => {
        const engine = createTestEngine();
        const rawData = {
          marketing_spend: 10000,
          sales_spend: 5000,
          new_customers: 50,
        };

        const result = engine.calculateSingle("TECH-CAC-001", rawData);

        expect(result.status).toBe("warning");
      });

      it("should return good status when value meets threshold", () => {
        const engine = createTestEngine();
        const rawData = {
          churned_customers: 1,
          total_customers: 500,
        };

        const result = engine.calculateSingle("TECH-CHURN-001", rawData);

        expect(result.status).toBe("good");
      });
    });

    describe("warnings", () => {
      it("should include warnings from data mapping", () => {
        const engine = createTestEngine();
        const rawData = { mrr: 100000 };

        const result = engine.calculateSingle("TECH-MRR-001", rawData);

        expect(result.warnings).toBeDefined();
        expect(Array.isArray(result.warnings)).toBe(true);
      });
    });
  });

  describe("calculateMultiple", () => {
    it("should calculate multiple KPIs in sequence", () => {
      const engine = createTestEngine();
      const rawData = {
        mrr: 100000,
        marketing_spend: 10000,
        sales_spend: 5000,
        new_customers: 50,
        churned_customers: 10,
        total_customers: 500,
      };

      const result = engine.calculateMultiple(
        ["TECH-MRR-001", "TECH-CAC-001", "TECH-CHURN-001"],
        rawData,
      );

      expect(result.kpis).toHaveLength(3);
      expect(result.kpis[0].code).toBe("TECH-MRR-001");
      expect(result.kpis[1].code).toBe("TECH-CAC-001");
      expect(result.kpis[2].code).toBe("TECH-CHURN-001");
    });

    it("should include metadata in result", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const result = engine.calculateMultiple(["TECH-MRR-001"], rawData);

      expect(result.metadata).toBeDefined();
      expect(result.metadata.period).toBe("monthly");
      expect(result.metadata.sector).toBe("technology");
      expect(result.metadata.calculatedAt).toBeInstanceOf(Date);
      expect(result.metadata.calculationTimeMs).toBeGreaterThanOrEqual(0);
    });

    it("should handle mixed valid and invalid KPIs", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const result = engine.calculateMultiple(
        ["TECH-MRR-001", "UNKNOWN-KPI-001"],
        rawData,
      );

      expect(result.kpis).toHaveLength(2);
      expect(result.kpis[0].calculationStatus).toBe("success");
      expect(result.kpis[1].calculationStatus).toBe("not_applicable");
    });

    it("should calculate empty array gracefully", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const result = engine.calculateMultiple([], rawData);

      expect(result.kpis).toHaveLength(0);
      expect(result.metadata.calculationTimeMs).toBeGreaterThanOrEqual(0);
    });

    describe("edge cases", () => {
      it("should handle all KPIs with insufficient data", () => {
        const engine = createTestEngine();
        const rawData = {};

        const result = engine.calculateMultiple(
          ["TECH-MRR-001", "TECH-CAC-001"],
          rawData,
        );

        expect(result.kpis).toHaveLength(2);
        expect(
          result.kpis.every((k) => k.calculationStatus === "insufficient_data"),
        ).toBe(true);
      });
    });
  });

  describe("calculateAllForSector", () => {
    it("should return empty array when no sector specified and includeAllSectors is false", () => {
      const engine = createTestEngine({ sector: undefined });

      const result = engine.calculateAllForSector({});

      expect(result.kpis).toHaveLength(0);
    });

    it("should calculate all KPIs for specified sector when includeAllSectors is true", () => {
      const engine = createTestEngine(
        { sector: "technology" },
        { includeAllSectors: true },
      );

      const result = engine.calculateAllForSector({});

      expect(result.kpis).toBeDefined();
      expect(Array.isArray(result.kpis)).toBe(true);
    });
  });

  describe("calculateFromMappedData", () => {
    it("should calculate from pre-mapped data", () => {
      const engine = createTestEngine();
      const mappedData = {
        mapped: { mrr: 100000 },
        unmapped: {},
        aliasesResolved: {},
        confidence: 1,
        warnings: [],
        originalSector: "technology" as Sector,
      };

      const result = engine.calculateFromMappedData(mappedData as never, [
        "TECH-MRR-001",
      ]);

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result[0]?.value).toBe(100000);
    });
  });

  describe("getAvailableKPIs", () => {
    it("should return KPIs with readiness score", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const result = engine.getAvailableKPIs(rawData);

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(result[0]).toHaveProperty("code");
        expect(result[0]).toHaveProperty("title");
        expect(result[0]).toHaveProperty("readiness");
        expect(result[0].readiness).toBeGreaterThanOrEqual(0);
        expect(result[0].readiness).toBeLessThanOrEqual(1);
      }
    });

    it("should return empty array when no data provided", () => {
      const engine = createTestEngine();

      const result = engine.getAvailableKPIs({});

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should sort by readiness descending", () => {
      const engine = createTestEngine();
      const rawData = {
        mrr: 100000,
        marketing_spend: 10000,
        sales_spend: 5000,
        new_customers: 50,
        churned_customers: 10,
        total_customers: 500,
      };

      const result = engine.getAvailableKPIs(rawData);

      if (result.length > 1) {
        for (let i = 1; i < result.length; i++) {
          expect(result[i - 1].readiness).toBeGreaterThanOrEqual(
            result[i].readiness,
          );
        }
      }
    });
  });

  describe("getSuggestedNextSteps", () => {
    it("should suggest fields that are partially available", () => {
      const engine = createTestEngine();
      const rawData = { marketing_spend: 10000 };

      const result = engine.getSuggestedNextSteps(rawData);

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should return up to 5 suggestions", () => {
      const engine = createTestEngine();

      const result = engine.getSuggestedNextSteps({});

      expect(result.length).toBeLessThanOrEqual(5);
    });
  });

  describe("setContext", () => {
    it("should update context partially", () => {
      const engine = createTestEngine();

      engine.setContext({ sector: "retail" });

      const ctx = engine.getContext();
      expect(ctx.sector).toBe("retail");
      expect(ctx.period).toBe("monthly");
    });

    it("should handle undefined values in setContext", () => {
      const engine = createTestEngine();

      engine.setContext({ sector: "retail" });

      const ctx = engine.getContext();
      expect(ctx.sector).toBe("retail");
    });
  });

  describe("getContext", () => {
    it("should return a copy of context", () => {
      const engine = createTestEngine();

      const ctx1 = engine.getContext();
      const ctx2 = engine.getContext();

      expect(ctx1).not.toBe(ctx2);
      expect(ctx1).toEqual(ctx2);
    });

    it("should reflect changes made via setContext", () => {
      const engine = createTestEngine();

      const ctxBefore = engine.getContext();
      engine.setContext({ sector: "finance" });
      const ctxAfter = engine.getContext();

      expect(ctxBefore.sector).toBe("technology");
      expect(ctxAfter.sector).toBe("finance");
    });
  });

  describe("createCalculationEngine factory", () => {
    it("should create engine with factory function", () => {
      const engine = createCalculationEngine(
        { organizationId: "org-001", period: "monthly" },
        {},
        mockLibraryKPI,
      );

      expect(engine).toBeInstanceOf(KPICalculationEngine);
    });

    it("should create engine with default options", () => {
      const engine = createCalculationEngine({
        organizationId: "org-001",
        period: "monthly",
      });

      expect(engine).toBeInstanceOf(KPICalculationEngine);
    });
  });

  describe("integration tests - real scenarios", () => {
    describe("SaaS business metrics", () => {
      const saasData = {
        mrr: 50000,
        marketing_spend: 8000,
        sales_spend: 5000,
        new_customers: 40,
        total_customers: 500,
        churned_customers: 10,
      };

      it("should calculate MRR correctly", () => {
        const engine = createTestEngine({
          sector: "technology",
          businessModel: "subscription",
        });

        const result = engine.calculateSingle("TECH-MRR-001", saasData);
        expect(result.value).toBe(50000);
        expect(result.calculationStatus).toBe("success");
      });

      it("should calculate churn rate", () => {
        const engine = createTestEngine({
          sector: "technology",
          businessModel: "subscription",
        });

        const result = engine.calculateSingle("TECH-CHURN-001", saasData);
        expect(result.value).toBe(2);
        expect(result.calculationStatus).toBe("success");
      });

      it("should calculate CAC", () => {
        const engine = createTestEngine({
          sector: "technology",
          businessModel: "subscription",
        });

        const result = engine.calculateSingle("TECH-CAC-001", saasData);
        expect(result.value).toBe(325);
        expect(result.calculationStatus).toBe("success");
      });
    });
  });

  describe("performance tests", () => {
    it("should calculate 100 KPIs under 5 seconds", () => {
      const engine = createTestEngine();
      const rawData = {
        mrr: 100000,
        marketing_spend: 10000,
        sales_spend: 5000,
        new_customers: 50,
        total_customers: 500,
        churned_customers: 10,
      };

      const kpiCodes = Array(100).fill("TECH-MRR-001");
      const startTime = Date.now();
      const result = engine.calculateMultiple(kpiCodes, rawData);
      const duration = Date.now() - startTime;

      expect(result.kpis).toHaveLength(100);
      expect(duration).toBeLessThan(5000);
    });

    it("should handle rapid sequential calculations", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const iterations = 50;
      const startTime = Date.now();

      for (let i = 0; i < iterations; i++) {
        engine.calculateSingle("TECH-MRR-001", rawData);
      }

      const duration = Date.now() - startTime;
      expect(duration).toBeLessThan(2000);
    });
  });

  describe("error recovery", () => {
    it("should continue after one KPI fails", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const kpiCodes = ["TECH-MRR-001", "UNKNOWN-KPI-001", "TECH-MRR-001"];
      const result = engine.calculateMultiple(kpiCodes, rawData);

      expect(result.kpis).toHaveLength(3);
      expect(result.kpis[0].calculationStatus).toBe("success");
      expect(result.kpis[1].calculationStatus).toBe("not_applicable");
      expect(result.kpis[2].calculationStatus).toBe("success");
    });

    it("should maintain consistent results across multiple calls", () => {
      const engine = createTestEngine();
      const rawData = { mrr: 100000 };

      const result1 = engine.calculateSingle("TECH-MRR-001", rawData);
      const result2 = engine.calculateSingle("TECH-MRR-001", rawData);

      expect(result1.value).toBe(result2.value);
      expect(result1.calculationStatus).toBe(result2.calculationStatus);
    });
  });
});
