/**
 * Value Object for KPI Thresholds
 * Defines the boundary values for KPI status determination
 */

export interface Threshold {
  readonly critical: number;
  readonly warning: number;
  readonly good: number;
}

export class ThresholdFactory {
  static create(
    critical: number,
    warning: number,
    good: number
  ): Threshold {
    return {
      critical,
      warning,
      good,
    };
  }

  static financial(): Record<string, Threshold> {
    return {
      netProfitMargin: { critical: 5, warning: 10, good: 15 },
      cashBurnRate: { critical: 10000, warning: 5000, good: 0 },
      runway: { critical: 3, warning: 6, good: 12 },
    };
  }

  static sales(): Record<string, Threshold> {
    return {
      salesConversion: { critical: 5, warning: 15, good: 25 },
      customerAcquisitionCost: { critical: 500, warning: 200, good: 100 },
    };
  }

  static getAll(): Record<string, Threshold> {
    return {
      ...this.financial(),
      ...this.sales(),
    };
  }

  static getThreshold(kpiCode: string): Threshold | null {
    const all = this.getAll();
    return all[kpiCode] || null;
  }
}
