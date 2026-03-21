import { BaseDomainEntity, BaseKPIValue } from '../../core/BusinessDomain';

export interface CommercialMetricsEntity extends BaseDomainEntity {
  readonly domain: 'commercial';
  readonly kpis: {
    salesConversion: KPIValue;
    customerAcquisitionCost: KPIValue;
    customerLifetimeValue: KPIValue;
    churnRate: KPIValue;
    averageTicket: KPIValue;
    pipelineVelocity: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'commercial';
}

export interface CommercialData {
  readonly leads: number;
  readonly opportunities: number;
  readonly closedDeals: number;
  readonly newCustomers: number;
  readonly lostCustomers: number;
  readonly marketingSpend: number;
  readonly salesSpend: number;
  readonly totalRevenue: number;
  readonly averageSalesCycle: number; // days
  readonly pipelineValue: number;
}

export class CommercialMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    salesConversion: KPIValue;
    customerAcquisitionCost: KPIValue;
    customerLifetimeValue: KPIValue;
    churnRate: KPIValue;
    averageTicket: KPIValue;
    pipelineVelocity: KPIValue;
  }): CommercialMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'commercial',
      kpis: {
        salesConversion: data.salesConversion,
        customerAcquisitionCost: data.customerAcquisitionCost,
        customerLifetimeValue: data.customerLifetimeValue,
        churnRate: data.churnRate,
        averageTicket: data.averageTicket,
        pipelineVelocity: data.pipelineVelocity,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    commercialData: CommercialData
  ): CommercialMetricsEntity {
    const salesConversion = this.calculateSalesConversion(commercialData);
    const customerAcquisitionCost = this.calculateCustomerAcquisitionCost(commercialData);
    const customerLifetimeValue = this.calculateCustomerLifetimeValue(commercialData);
    const churnRate = this.calculateChurnRate(commercialData);
    const averageTicket = this.calculateAverageTicket(commercialData);
    const pipelineVelocity = this.calculatePipelineVelocity(commercialData);

    return this.create({
      period,
      salesConversion,
      customerAcquisitionCost,
      customerLifetimeValue,
      churnRate,
      averageTicket,
      pipelineVelocity,
    });
  }

  private static calculateSalesConversion(data: CommercialData): KPIValue {
    const value = (data.closedDeals / data.leads) * 100;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 5, warning: 15, good: 25 },
      trend: 'stable',
      domain: 'commercial',
    };
  }

  private static calculateCustomerAcquisitionCost(data: CommercialData): KPIValue {
    const value = (data.marketingSpend + data.salesSpend) / data.newCustomers;
    
    return {
      value,
      unit: 'R$',
      threshold: { critical: 500, warning: 200, good: 100 },
      trend: 'stable',
      domain: 'commercial',
    };
  }

  private static calculateCustomerLifetimeValue(data: CommercialData): KPIValue {
    // Simplified LTV calculation: (Average Revenue per Customer * Average Customer Lifetime)
    const avgRevenuePerCustomer = data.totalRevenue / (data.newCustomers + data.lostCustomers);
    const avgCustomerLifetime = 12; // months (simplified)
    const value = avgRevenuePerCustomer * avgCustomerLifetime;
    
    return {
      value,
      unit: 'R$',
      threshold: { critical: 1000, warning: 3000, good: 5000 },
      trend: 'stable',
      domain: 'commercial',
    };
  }

  private static calculateChurnRate(data: CommercialData): KPIValue {
    const totalCustomers = data.newCustomers + data.lostCustomers;
    const value = totalCustomers > 0 ? (data.lostCustomers / totalCustomers) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 15, warning: 10, good: 5 },
      trend: 'stable',
      domain: 'commercial',
    };
  }

  private static calculateAverageTicket(data: CommercialData): KPIValue {
    const value = data.totalRevenue / data.closedDeals;
    
    return {
      value,
      unit: 'R$',
      threshold: { critical: 500, warning: 1000, good: 2000 },
      trend: 'stable',
      domain: 'commercial',
    };
  }

  private static calculatePipelineVelocity(data: CommercialData): KPIValue {
    // Pipeline velocity = (Pipeline Value * Conversion Rate) / Sales Cycle
    const conversionRate = data.closedDeals / data.opportunities;
    const value = (data.pipelineValue * conversionRate) / data.averageSalesCycle;
    
    return {
      value,
      unit: 'R$/dia',
      threshold: { critical: 100, warning: 500, good: 1000 },
      trend: 'stable',
      domain: 'commercial',
    };
  }
}
