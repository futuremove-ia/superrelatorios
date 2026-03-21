import { BaseDomainEntity, BaseKPIValue } from '../../core/BusinessDomain';

export interface StrategyMetricsEntity extends BaseDomainEntity {
  readonly domain: 'strategy';
  readonly kpis: {
    okrProgress: KPIValue;
    initiativeCompletion: KPIValue;
    strategicAlignment: KPIValue;
    executionRate: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'strategy';
}

export interface StrategyData {
  readonly totalOKRs: number;
  readonly completedOKRs: number;
  readonly totalInitiatives: number;
  readonly completedInitiatives: number;
  readonly alignedDepartments: number;
  readonly totalDepartments: number;
  readonly plannedMilestones: number;
  readonly achievedMilestones: number;
}

export class StrategyMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    okrProgress: KPIValue;
    initiativeCompletion: KPIValue;
    strategicAlignment: KPIValue;
    executionRate: KPIValue;
  }): StrategyMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'strategy',
      kpis: {
        okrProgress: data.okrProgress,
        initiativeCompletion: data.initiativeCompletion,
        strategicAlignment: data.strategicAlignment,
        executionRate: data.executionRate,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    strategyData: StrategyData
  ): StrategyMetricsEntity {
    const okrProgress = this.calculateOKRProgress(strategyData);
    const initiativeCompletion = this.calculateInitiativeCompletion(strategyData);
    const strategicAlignment = this.calculateStrategicAlignment(strategyData);
    const executionRate = this.calculateExecutionRate(strategyData);

    return this.create({
      period,
      okrProgress,
      initiativeCompletion,
      strategicAlignment,
      executionRate,
    });
  }

  private static calculateOKRProgress(data: StrategyData): KPIValue {
    const value = data.totalOKRs > 0 ? (data.completedOKRs / data.totalOKRs) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 30, warning: 60, good: 80 },
      trend: 'stable',
      domain: 'strategy',
    };
  }

  private static calculateInitiativeCompletion(data: StrategyData): KPIValue {
    const value = data.totalInitiatives > 0 ? (data.completedInitiatives / data.totalInitiatives) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 40, warning: 70, good: 90 },
      trend: 'stable',
      domain: 'strategy',
    };
  }

  private static calculateStrategicAlignment(data: StrategyData): KPIValue {
    const value = data.totalDepartments > 0 ? (data.alignedDepartments / data.totalDepartments) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 50, warning: 75, good: 90 },
      trend: 'stable',
      domain: 'strategy',
    };
  }

  private static calculateExecutionRate(data: StrategyData): KPIValue {
    const value = data.plannedMilestones > 0 ? (data.achievedMilestones / data.plannedMilestones) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 50, warning: 75, good: 95 },
      trend: 'stable',
      domain: 'strategy',
    };
  }
}
