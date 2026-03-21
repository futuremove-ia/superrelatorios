/**
 * Data Transfer Object for Metrics
 * Used for communication between layers
 */

export interface MetricsDTO {
  readonly id: string;
  readonly period: string;
  readonly kpis: {
    netProfitMargin: KPIDTO;
    cashBurnRate: KPIDTO;
    runway: KPIDTO;
    salesConversion: KPIDTO;
    customerAcquisitionCost: KPIDTO;
  };
  readonly calculatedAt: string;
}

export interface KPIDTO {
  readonly value: number;
  readonly unit: string;
  readonly threshold: ThresholdDTO;
  readonly trend: 'up' | 'down' | 'stable';
  readonly status: 'critical' | 'warning' | 'good';
  readonly color: string;
}

export interface ThresholdDTO {
  readonly critical: number;
  readonly warning: number;
  readonly good: number;
}

export interface CreateMetricsDTO {
  readonly period: string;
  readonly financialData: {
    readonly netProfit: number;
    readonly revenue: number;
    readonly monthlyNegativeCashFlow: number;
    readonly totalCash: number;
  };
  readonly salesData: {
    readonly closedDeals: number;
    readonly leads: number;
    readonly marketingSpend: number;
    readonly salesSpend: number;
    readonly newCustomers: number;
  };
}

export interface MetricsSummaryDTO {
  readonly totalMetrics: number;
  readonly criticalCount: number;
  readonly warningCount: number;
  readonly goodCount: number;
  readonly lastUpdated: string;
}
