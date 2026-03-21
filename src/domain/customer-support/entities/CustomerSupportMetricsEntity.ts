import { BaseDomainEntity, BaseKPIValue } from '../../core/BusinessDomain';

export interface CustomerSupportMetricsEntity extends BaseDomainEntity {
  readonly domain: 'customer-support';
  readonly kpis: {
    netPromoterScore: KPIValue;
    averageResponseTime: KPIValue;
    resolutionRate: KPIValue;
    customerSatisfaction: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'customer-support';
}

export interface CustomerSupportData {
  readonly totalTickets: number;
  readonly resolvedTickets: number;
  readonly firstResponseTickets: number;
  readonly totalResponseTime: number; // minutes
  readonly promoters: number;
  readonly detractors: number;
  readonly neutrals: number;
  readonly satisfactionResponses: number;
  readonly satisfactionScore: number; // 0-100
}

export class CustomerSupportMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    netPromoterScore: KPIValue;
    averageResponseTime: KPIValue;
    resolutionRate: KPIValue;
    customerSatisfaction: KPIValue;
  }): CustomerSupportMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'customer-support',
      kpis: {
        netPromoterScore: data.netPromoterScore,
        averageResponseTime: data.averageResponseTime,
        resolutionRate: data.resolutionRate,
        customerSatisfaction: data.customerSatisfaction,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    supportData: CustomerSupportData
  ): CustomerSupportMetricsEntity {
    const netPromoterScore = this.calculateNetPromoterScore(supportData);
    const averageResponseTime = this.calculateAverageResponseTime(supportData);
    const resolutionRate = this.calculateResolutionRate(supportData);
    const customerSatisfaction = this.calculateCustomerSatisfaction(supportData);

    return this.create({
      period,
      netPromoterScore,
      averageResponseTime,
      resolutionRate,
      customerSatisfaction,
    });
  }

  private static calculateNetPromoterScore(data: CustomerSupportData): KPIValue {
    const totalResponses = data.promoters + data.detractors + data.neutrals;
    const value = totalResponses > 0 ? ((data.promoters - data.detractors) / totalResponses) * 100 : 0;
    
    return {
      value,
      unit: 'pontos',
      threshold: { critical: -20, warning: 0, good: 30 },
      trend: 'stable',
      domain: 'customer-support',
    };
  }

  private static calculateAverageResponseTime(data: CustomerSupportData): KPIValue {
    const value = data.firstResponseTickets > 0 ? data.totalResponseTime / data.firstResponseTickets : 0;
    
    return {
      value,
      unit: 'minutos',
      threshold: { critical: 240, warning: 120, good: 60 },
      trend: 'stable',
      domain: 'customer-support',
    };
  }

  private static calculateResolutionRate(data: CustomerSupportData): KPIValue {
    const value = data.totalTickets > 0 ? (data.resolvedTickets / data.totalTickets) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 60, warning: 80, good: 90 },
      trend: 'stable',
      domain: 'customer-support',
    };
  }

  private static calculateCustomerSatisfaction(data: CustomerSupportData): KPIValue {
    const value = data.satisfactionResponses > 0 ? data.satisfactionScore : 0;
    
    return {
      value,
      unit: 'pontos',
      threshold: { critical: 60, warning: 75, good: 85 },
      trend: 'stable',
      domain: 'customer-support',
    };
  }
}
