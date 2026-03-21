/**
 * Domain Entity for Business Metrics
 * Contains calculated KPIs and their metadata
 */

export interface MetricsEntity {
  readonly id: string;
  readonly period: string;
  readonly kpis: {
    netProfitMargin: KPIValue;
    cashBurnRate: KPIValue;
    runway: KPIValue;
    salesConversion: KPIValue;
    customerAcquisitionCost: KPIValue;
  };
  readonly calculatedAt: Date;
}

export interface KPIValue {
  readonly value: number;
  readonly unit: string;
  readonly threshold: Threshold;
  readonly trend: 'up' | 'down' | 'stable';
}

export interface Threshold {
  readonly critical: number;
  readonly warning: number;
  readonly good: number;
}

export interface FinancialData {
  readonly netProfit: number;
  readonly revenue: number;
  readonly monthlyNegativeCashFlow: number;
  readonly totalCash: number;
}

export interface SalesData {
  readonly closedDeals: number;
  readonly leads: number;
  readonly marketingSpend: number;
  readonly salesSpend: number;
  readonly newCustomers: number;
}

export class MetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    netProfitMargin: KPIValue;
    cashBurnRate: KPIValue;
    runway: KPIValue;
    salesConversion: KPIValue;
    customerAcquisitionCost: KPIValue;
  }): MetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      kpis: {
        netProfitMargin: data.netProfitMargin,
        cashBurnRate: data.cashBurnRate,
        runway: data.runway,
        salesConversion: data.salesConversion,
        customerAcquisitionCost: data.customerAcquisitionCost,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    financialData: FinancialData,
    salesData: SalesData
  ): MetricsEntity {
    // Calculate KPIs
    const netProfitMargin = this.calculateNetProfitMargin(financialData);
    const cashBurnRate = this.calculateCashBurnRate(financialData);
    const runway = this.calculateRunway(financialData);
    const salesConversion = this.calculateSalesConversion(salesData);
    const customerAcquisitionCost = this.calculateCustomerAcquisitionCost(salesData);

    return this.create({
      period,
      netProfitMargin,
      cashBurnRate,
      runway,
      salesConversion,
      customerAcquisitionCost,
    });
  }

  private static calculateNetProfitMargin(data: FinancialData): KPIValue {
    const value = (data.netProfit / data.revenue) * 100;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 5, warning: 10, good: 15 },
      trend: 'stable', // Would be calculated from historical data
    };
  }

  private static calculateCashBurnRate(data: FinancialData): KPIValue {
    const value = data.monthlyNegativeCashFlow;
    
    return {
      value,
      unit: 'R$',
      threshold: { critical: 10000, warning: 5000, good: 0 },
      trend: 'stable',
    };
  }

  private static calculateRunway(data: FinancialData): KPIValue {
    const value = data.totalCash / Math.abs(data.monthlyNegativeCashFlow);
    
    return {
      value,
      unit: 'meses',
      threshold: { critical: 3, warning: 6, good: 12 },
      trend: 'stable',
    };
  }

  private static calculateSalesConversion(data: SalesData): KPIValue {
    const value = (data.closedDeals / data.leads) * 100;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 5, warning: 15, good: 25 },
      trend: 'stable',
    };
  }

  private static calculateCustomerAcquisitionCost(data: SalesData): KPIValue {
    const value = (data.marketingSpend + data.salesSpend) / data.newCustomers;
    
    return {
      value,
      unit: 'R$',
      threshold: { critical: 500, warning: 200, good: 100 },
      trend: 'stable',
    };
  }
}
