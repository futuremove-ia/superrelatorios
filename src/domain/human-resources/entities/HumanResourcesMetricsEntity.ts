import { BaseDomainEntity, BaseKPIValue } from '../../core/BusinessDomain';

export interface HumanResourcesMetricsEntity extends BaseDomainEntity {
  readonly domain: 'human-resources';
  readonly kpis: {
    employeeProductivity: KPIValue;
    turnoverRate: KPIValue;
    engagementScore: KPIValue;
    costPerEmployee: KPIValue;
  };
}

export interface KPIValue extends BaseKPIValue {
  readonly domain: 'human-resources';
}

export interface HumanResourcesData {
  readonly totalEmployees: number;
  readonly newHires: number;
  readonly terminatedEmployees: number;
  readonly totalRevenue: number;
  readonly payrollCosts: number;
  readonly trainingCosts: number;
  readonly benefitsCosts: number;
  readonly engagementSurveyScore: number; // 0-100
  readonly totalWorkHours: number;
}

export class HumanResourcesMetricsEntityFactory {
  static create(data: {
    id?: string;
    period: string;
    employeeProductivity: KPIValue;
    turnoverRate: KPIValue;
    engagementScore: KPIValue;
    costPerEmployee: KPIValue;
  }): HumanResourcesMetricsEntity {
    return {
      id: data.id || crypto.randomUUID(),
      period: data.period,
      domain: 'human-resources',
      kpis: {
        employeeProductivity: data.employeeProductivity,
        turnoverRate: data.turnoverRate,
        engagementScore: data.engagementScore,
        costPerEmployee: data.costPerEmployee,
      },
      calculatedAt: new Date(),
    };
  }

  static createFromRawData(
    period: string,
    hrData: HumanResourcesData
  ): HumanResourcesMetricsEntity {
    const employeeProductivity = this.calculateEmployeeProductivity(hrData);
    const turnoverRate = this.calculateTurnoverRate(hrData);
    const engagementScore = this.calculateEngagementScore(hrData);
    const costPerEmployee = this.calculateCostPerEmployee(hrData);

    return this.create({
      period,
      employeeProductivity,
      turnoverRate,
      engagementScore,
      costPerEmployee,
    });
  }

  private static calculateEmployeeProductivity(data: HumanResourcesData): KPIValue {
    // Revenue per employee work hour
    const revenuePerHour = data.totalWorkHours > 0 ? data.totalRevenue / data.totalWorkHours : 0;
    
    return {
      value: revenuePerHour,
      unit: 'R$/hora',
      threshold: { critical: 50, warning: 100, good: 200 },
      trend: 'stable',
      domain: 'human-resources',
    };
  }

  private static calculateTurnoverRate(data: HumanResourcesData): KPIValue {
    const averageEmployees = (data.totalEmployees + data.totalEmployees - data.newHires + data.terminatedEmployees) / 2;
    const value = averageEmployees > 0 ? (data.terminatedEmployees / averageEmployees) * 100 : 0;
    
    return {
      value,
      unit: '%',
      threshold: { critical: 20, warning: 15, good: 10 },
      trend: 'stable',
      domain: 'human-resources',
    };
  }

  private static calculateEngagementScore(data: HumanResourcesData): KPIValue {
    const value = data.engagementSurveyScore;
    
    return {
      value,
      unit: 'pontos',
      threshold: { critical: 40, warning: 60, good: 80 },
      trend: 'stable',
      domain: 'human-resources',
    };
  }

  private static calculateCostPerEmployee(data: HumanResourcesData): KPIValue {
    const totalHRCosts = data.payrollCosts + data.trainingCosts + data.benefitsCosts;
    const value = data.totalEmployees > 0 ? totalHRCosts / data.totalEmployees : 0;
    
    return {
      value,
      unit: 'R$/funcionário',
      threshold: { critical: 15000, warning: 10000, good: 7000 },
      trend: 'stable',
      domain: 'human-resources',
    };
  }
}
