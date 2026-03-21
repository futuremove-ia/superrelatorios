import { BaseDomainEntity, BaseKPIValue } from '../../core/BusinessDomain';

export interface LogisticsMetricsEntity extends BaseDomainEntity {
  readonly domain: 'logistics';
  readonly kpis: {
    deliveryTime: KPIValue;
    costPerDelivery: KPIValue;
    deliveryAccuracy: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'logistics';
}

export interface LogisticsData {
  readonly totalDeliveries: number;
  readonly successfulDeliveries: number;
  readonly onTimeDeliveries: number;
  readonly totalDeliveryTime: number; // hours
  readonly totalDeliveryCost: number;
  readonly returnedDeliveries: number;
}

export class LogisticsMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    deliveryTime: KPIValue;
    costPerDelivery: KPIValue;
    deliveryAccuracy: KPIValue;
  }): LogisticsMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'logistics',
      kpis: {
        deliveryTime: data.deliveryTime,
        costPerDelivery: data.costPerDelivery,
        deliveryAccuracy: data.deliveryAccuracy,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    logisticsData: LogisticsData
  ): LogisticsMetricsEntity {
    const deliveryTime = this.calculateDeliveryTime(logisticsData);
    const costPerDelivery = this.calculateCostPerDelivery(logisticsData);
    const deliveryAccuracy = this.calculateDeliveryAccuracy(logisticsData);

    return this.create({
      period,
      deliveryTime,
      costPerDelivery,
      deliveryAccuracy,
    });
  }

  private static calculateDeliveryTime(data: LogisticsData): KPIValue {
    const value = data.successfulDeliveries > 0 ? data.totalDeliveryTime / data.successfulDeliveries : 0;
    
    return {
      value,
      unit: 'horas',
      threshold: { critical: 48, warning: 24, good: 12 },
      trend: 'stable',
      domain: 'logistics',
    };
  }

  private static calculateCostPerDelivery(data: LogisticsData): KPIValue {
    const value = data.totalDeliveries > 0 ? data.totalDeliveryCost / data.totalDeliveries : 0;
    
    return {
      value,
      unit: 'R$/entrega',
      threshold: { critical: 50, warning: 30, good: 20 },
      trend: 'stable',
      domain: 'logistics',
    };
  }

  private static calculateDeliveryAccuracy(data: LogisticsData): KPIValue {
    const accurateDeliveries = data.successfulDeliveries - data.returnedDeliveries;
    const value = data.totalDeliveries > 0 ? (accurateDeliveries / data.totalDeliveries) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 85, warning: 90, good: 95 },
      trend: 'stable',
      domain: 'logistics',
    };
  }
}
