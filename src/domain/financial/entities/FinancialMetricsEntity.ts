import { BaseDomainEntity, BaseKPIValue, DomainType } from '../../core/BusinessDomain';

export interface FinancialMetricsEntity extends BaseDomainEntity {
  readonly domain: 'financial';
  readonly kpis: {
    netProfitMargin: KPIValue;
    cashBurnRate: KPIValue;
    runway: KPIValue;
    grossMargin: KPIValue;
    operatingMargin: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'financial';
}

export interface FinancialData {
  readonly netProfit: number;
  readonly revenue: number;
  readonly grossProfit: number;
  readonly operatingExpense: number;
  readonly monthlyNegativeCashFlow: number;
  readonly totalCash: number;
}

export class FinancialMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    netProfitMargin: KPIValue;
    cashBurnRate: KPIValue;
    runway: KPIValue;
    grossMargin: KPIValue;
    operatingMargin: KPIValue;
  }): FinancialMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'financial',
      kpis: {
        netProfitMargin: data.netProfitMargin,
        cashBurnRate: data.cashBurnRate,
        runway: data.runway,
        grossMargin: data.grossMargin,
        operatingMargin: data.operatingMargin,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    financialData: FinancialData
  ): FinancialMetricsEntity {
    const netProfitMargin = this.calculateNetProfitMargin(financialData);
    const cashBurnRate = this.calculateCashBurnRate(financialData);
    const runway = this.calculateRunway(financialData);
    const grossMargin = this.calculateGrossMargin(financialData);
    const operatingMargin = this.calculateOperatingMargin(financialData);

    return this.create({
      period,
      netProfitMargin,
      cashBurnRate,
      runway,
      grossMargin,
      operatingMargin,
    });
  }

  private static calculateNetProfitMargin(data: FinancialData): KPIValue {
    const value = (data.netProfit / data.revenue) * 100;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 5, warning: 10, good: 15 },
      trend: 'stable',
      domain: 'financial',
    };
  }

  private static calculateCashBurnRate(data: FinancialData): KPIValue {
    const value = Math.abs(data.monthlyNegativeCashFlow);
    
    return {
      value,
      unit: 'R$',
      threshold: { critical: 10000, warning: 5000, good: 0 },
      trend: 'stable',
      domain: 'financial',
    };
  }

  private static calculateRunway(data: FinancialData): KPIValue {
    const value = data.totalCash / Math.abs(data.monthlyNegativeCashFlow);
    
    return {
      value,
      unit: 'meses',
      threshold: { critical: 3, warning: 6, good: 12 },
      trend: 'stable',
      domain: 'financial',
    };
  }

  private static calculateGrossMargin(data: FinancialData): KPIValue {
    const value = (data.grossProfit / data.revenue) * 100;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 20, warning: 30, good: 40 },
      trend: 'stable',
      domain: 'financial',
    };
  }

  private static calculateOperatingMargin(data: FinancialData): KPIValue {
    const value = ((data.revenue - data.operatingExpense) / data.revenue) * 100;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 5, warning: 10, good: 15 },
      trend: 'stable',
      domain: 'financial',
    };
  }
}
