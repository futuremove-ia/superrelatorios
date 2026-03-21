import { BaseDomainEntity, BaseKPIValue } from '../../core/BusinessDomain';

export interface OperationsMetricsEntity extends BaseDomainEntity {
  readonly domain: 'operations';
  readonly kpis: {
    operationalEfficiency: KPIValue;
    qualityRate: KPIValue;
    throughput: KPIValue;
    capacityUtilization: KPIValue;
    operationalCost: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'operations';
}

export interface OperationsData {
  readonly totalOutput: number;
  readonly defectiveUnits: number;
  readonly availableCapacity: number;
  readonly usedCapacity: number;
  readonly operationalExpenses: number;
  readonly productionTime: number; // hours
  readonly downtime: number; // hours
  readonly workforce: number;
}

export class OperationsMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    operationalEfficiency: KPIValue;
    qualityRate: KPIValue;
    throughput: KPIValue;
    capacityUtilization: KPIValue;
    operationalCost: KPIValue;
  }): OperationsMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'operations',
      kpis: {
        operationalEfficiency: data.operationalEfficiency,
        qualityRate: data.qualityRate,
        throughput: data.throughput,
        capacityUtilization: data.capacityUtilization,
        operationalCost: data.operationalCost,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    operationsData: OperationsData
  ): OperationsMetricsEntity {
    const operationalEfficiency = this.calculateOperationalEfficiency(operationsData);
    const qualityRate = this.calculateQualityRate(operationsData);
    const throughput = this.calculateThroughput(operationsData);
    const capacityUtilization = this.calculateCapacityUtilization(operationsData);
    const operationalCost = this.calculateOperationalCost(operationsData);

    return this.create({
      period,
      operationalEfficiency,
      qualityRate,
      throughput,
      capacityUtilization,
      operationalCost,
    });
  }

  private static calculateOperationalEfficiency(data: OperationsData): KPIValue {
    // Efficiency = (Actual Output / Expected Output) * 100
    const expectedOutput = (data.availableCapacity * data.productionTime) / (data.productionTime + data.downtime);
    const value = expectedOutput > 0 ? (data.totalOutput / expectedOutput) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 60, warning: 75, good: 85 },
      trend: 'stable',
      domain: 'operations',
    };
  }

  private static calculateQualityRate(data: OperationsData): KPIValue {
    const value = data.totalOutput > 0 ? ((data.totalOutput - data.defectiveUnits) / data.totalOutput) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 85, warning: 90, good: 95 },
      trend: 'stable',
      domain: 'operations',
    };
  }

  private static calculateThroughput(data: OperationsData): KPIValue {
    const productiveTime = data.productionTime - data.downtime;
    const value = productiveTime > 0 ? data.totalOutput / productiveTime : 0;
    
    return {
      value,
      unit: 'unidades/hora',
      threshold: { critical: 50, warning: 100, good: 200 },
      trend: 'stable',
      domain: 'operations',
    };
  }

  private static calculateCapacityUtilization(data: OperationsData): KPIValue {
    const value = data.availableCapacity > 0 ? (data.usedCapacity / data.availableCapacity) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 60, warning: 75, good: 85 },
      trend: 'stable',
      domain: 'operations',
    };
  }

  private static calculateOperationalCost(data: OperationsData): KPIValue {
    const costPerUnit = data.totalOutput > 0 ? data.operationalExpenses / data.totalOutput : 0;
    const costPerEmployee = data.workforce > 0 ? data.operationalExpenses / data.workforce : 0;
    
    // Use cost per employee as the main metric
    const value = costPerEmployee;
    
    return {
      value,
      unit: 'R$/funcionário',
      threshold: { critical: 10000, warning: 7000, good: 5000 },
      trend: 'stable',
      domain: 'operations',
    };
  }
}
