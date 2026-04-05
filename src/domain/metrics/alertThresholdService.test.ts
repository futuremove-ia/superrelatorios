import { describe, it, expect, beforeEach } from "vitest";
import {
  createAlertThresholdService,
  evaluateKPIsForAlerts,
} from "../alertThresholdService";
import type { AlertThreshold } from "@/types/alert";

describe("AlertThresholdService", () => {
  let service: ReturnType<typeof createAlertThresholdService>;

  beforeEach(() => {
    service = createAlertThresholdService("org-123");
  });

  describe("evaluateKPI", () => {
    it("should trigger critical alert when below critical threshold", () => {
      const result = service.evaluateKPI({
        kpiCode: "netProfitMargin",
        value: -5,
      });

      expect(result.triggered).toBe(true);
      expect(result.level).toBe("critical");
      expect(result.alert).toBeDefined();
      expect(result.alert?.level).toBe("critical");
    });

    it("should trigger warning alert when below warning threshold", () => {
      const result = service.evaluateKPI({
        kpiCode: "netProfitMargin",
        value: 3,
      });

      expect(result.triggered).toBe(true);
      expect(result.level).toBe("warning");
      expect(result.alert?.level).toBe("warning");
    });

    it("should trigger info alert when below info threshold", () => {
      const result = service.evaluateKPI({
        kpiCode: "netProfitMargin",
        value: 8,
      });

      expect(result.triggered).toBe(true);
      expect(result.level).toBe("info");
      expect(result.alert?.level).toBe("info");
    });

    it("should not trigger alert when within acceptable range", () => {
      const result = service.evaluateKPI({
        kpiCode: "netProfitMargin",
        value: 15,
      });

      expect(result.triggered).toBe(false);
      expect(result.level).toBeUndefined();
      expect(result.alert).toBeUndefined();
    });

    it("should trigger critical for high debt-to-equity (above threshold)", () => {
      const result = service.evaluateKPI({ kpiCode: "debtToEquity", value: 4 });

      expect(result.triggered).toBe(true);
      expect(result.level).toBe("critical");
    });

    it("should not trigger for unknown KPI", () => {
      const result = service.evaluateKPI({ kpiCode: "unknownKPI", value: 100 });

      expect(result.triggered).toBe(false);
      expect(result.message).toContain("não tem threshold configurado");
    });

    it("should handle liquidity ratios", () => {
      const criticalResult = service.evaluateKPI({
        kpiCode: "currentRatio",
        value: 0.3,
      });
      expect(criticalResult.triggered).toBe(true);
      expect(criticalResult.level).toBe("critical");

      const warningResult = service.evaluateKPI({
        kpiCode: "currentRatio",
        value: 0.8,
      });
      expect(warningResult.triggered).toBe(true);
      expect(warningResult.level).toBe("warning");
    });

    it("should handle efficiency KPIs like accounts receivable days", () => {
      const result = service.evaluateKPI({
        kpiCode: "accountsReceivableDays",
        value: 100,
      });

      expect(result.triggered).toBe(true);
      expect(result.level).toBe("critical");
    });

    it("should handle growth KPIs like churn rate", () => {
      const criticalResult = service.evaluateKPI({
        kpiCode: "customerChurnRate",
        value: 20,
      });
      expect(criticalResult.triggered).toBe(true);
      expect(criticalResult.level).toBe("critical");
    });
  });

  describe("evaluateMultipleKPIs", () => {
    it("should evaluate multiple KPIs and return results", () => {
      const kpis = [
        { kpiCode: "netProfitMargin", value: -5 },
        { kpiCode: "currentRatio", value: 0.3 },
        { kpiCode: "debtToEquity", value: 4 },
      ];

      const results = service.evaluateMultipleKPIs(kpis);

      expect(results.length).toBe(3);
      expect(results.filter((r) => r.triggered).length).toBe(3);
    });

    it("should return empty array for empty input", () => {
      const results = service.evaluateMultipleKPIs([]);
      expect(results).toEqual([]);
    });
  });

  describe("getThreshold", () => {
    it("should return threshold for known KPI", () => {
      const threshold = service.getThreshold("netProfitMargin");
      expect(threshold).toBeDefined();
      expect(threshold?.critical).toBe(0);
      expect(threshold?.warning).toBe(5);
    });

    it("should return undefined for unknown KPI", () => {
      const threshold = service.getThreshold("unknownKPI");
      expect(threshold).toBeUndefined();
    });
  });

  describe("disableThreshold", () => {
    it("should disable threshold for known KPI", () => {
      service.disableThreshold("netProfitMargin");
      const threshold = service.getThreshold("netProfitMargin");
      expect(threshold?.enabled).toBe(false);
    });
  });

  describe("enableThreshold", () => {
    it("should enable previously disabled threshold", () => {
      service.disableThreshold("netProfitMargin");
      service.enableThreshold("netProfitMargin");
      const threshold = service.getThreshold("netProfitMargin");
      expect(threshold?.enabled).toBe(true);
    });
  });

  describe("getAllThresholds", () => {
    it("should return all thresholds", () => {
      const thresholds = service.getAllThresholds();
      expect(thresholds.length).toBeGreaterThan(0);
    });
  });

  describe("getEnabledThresholds", () => {
    it("should return only enabled thresholds", () => {
      service.disableThreshold("netProfitMargin");
      const enabled = service.getEnabledThresholds();
      expect(
        enabled.find((t) => t.kpiCode === "netProfitMargin"),
      ).toBeUndefined();
    });
  });
});

describe("evaluateKPIsForAlerts", () => {
  it("should evaluate KPIs and trigger alerts", () => {
    const results = evaluateKPIsForAlerts("org-123", [
      { kpiCode: "netProfitMargin", value: -5 },
      { kpiCode: "cashRunway", value: 0.5 },
    ]);

    expect(results.length).toBe(2);
    expect(results.every((r) => r.triggered)).toBe(true);
  });

  it("should accept custom thresholds", () => {
    const customThresholds: Record<string, AlertThreshold> = {
      netProfitMargin: {
        kpiCode: "netProfitMargin",
        critical: -10,
        warning: -5,
        operator: "below",
        enabled: true,
      },
    };

    const results = evaluateKPIsForAlerts(
      "org-123",
      [{ kpiCode: "netProfitMargin", value: -7 }],
      customThresholds,
    );

    expect(results[0].triggered).toBe(true);
    expect(results[0].level).toBe("warning");
  });
});

describe("Edge Cases", () => {
  it("should treat null as zero and trigger appropriate alert", () => {
    const service = createAlertThresholdService("org-123");
    const result = service.evaluateKPI({
      kpiCode: "netProfitMargin",
      value: null as unknown as number,
    });
    expect(result.triggered).toBe(true);
  });

  it("should handle zero values correctly", () => {
    const service = createAlertThresholdService("org-123");
    const result = service.evaluateKPI({
      kpiCode: "netProfitMargin",
      value: 0,
    });
    expect(result.triggered).toBe(true);
    expect(result.level).toBe("warning");
  });

  it("should handle negative values correctly", () => {
    const service = createAlertThresholdService("org-123");
    const result = service.evaluateKPI({
      kpiCode: "netProfitMargin",
      value: -100,
    });
    expect(result.triggered).toBe(true);
    expect(result.level).toBe("critical");
  });
});
