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

  static validate(threshold: Threshold): { isValid: boolean; errors: string[]; warnings: string[] } {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (typeof threshold.critical !== 'number' || threshold.critical < 0) {
      errors.push('Critical threshold must be a non-negative number');
    }

    if (typeof threshold.warning !== 'number' || threshold.warning < 0) {
      errors.push('Warning threshold must be a non-negative number');
    }

    if (typeof threshold.good !== 'number' || threshold.good < 0) {
      errors.push('Good threshold must be a non-negative number');
    }

    // Logical validation
    if (threshold.critical > threshold.warning) {
      errors.push('Critical threshold should be less than or equal to warning threshold');
    }

    if (threshold.warning > threshold.good) {
      errors.push('Warning threshold should be less than or equal to good threshold');
    }

    if (threshold.critical === threshold.warning && threshold.warning === threshold.good) {
      warnings.push('All thresholds are the same - consider differentiating them');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}
