import { Threshold } from './Threshold';

/**
 * Value Object for KPI measurements
 * Encapsulates KPI value with its metadata
 */

export interface KPIValue {
  readonly value: number;
  readonly unit: string;
  readonly threshold: Threshold;
  readonly trend: 'up' | 'down' | 'stable';
}

export class KPIValueFactory {
  static create(
    value: number,
    unit: string,
    threshold: Threshold,
    trend: 'up' | 'down' | 'stable' = 'stable'
  ): KPIValue {
    return {
      value,
      unit,
      threshold,
      trend,
    };
  }

  static withTrend(
    base: KPIValue,
    trend: 'up' | 'down' | 'stable'
  ): KPIValue {
    return {
      ...base,
      trend,
    };
  }

  static getStatus(kpiValue: KPIValue): 'critical' | 'warning' | 'good' {
    const { value, threshold } = kpiValue;
    
    if (value <= threshold.critical) {
      return 'critical';
    }
    
    if (value <= threshold.warning) {
      return 'warning';
    }
    
    return 'good';
  }

  static getColor(status: 'critical' | 'warning' | 'good'): string {
    switch (status) {
      case 'critical':
        return '#ef4444'; // red-500
      case 'warning':
        return '#f59e0b'; // amber-500
      case 'good':
        return '#10b981'; // emerald-500
      default:
        return '#6b7280'; // gray-500
    }
  }

  static getTrendIcon(trend: 'up' | 'down' | 'stable'): string {
    switch (trend) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      case 'stable':
        return '→';
      default:
        return '→';
    }
  }
}
