import { Threshold, ThresholdFactory } from './Threshold';

export interface KPIValue {
  value: number;
  unit: string;
  threshold: Threshold;
  trend: 'up' | 'down' | 'stable';
  previousValue?: number;
  change?: number;
  lastUpdated?: Date;
  confidence?: number;
}

export interface KPIValueCreate {
  value: number;
  unit: string;
  threshold?: Threshold;
  trend?: 'up' | 'down' | 'stable';
}

export interface KPIValueUpdate {
  value?: number;
  unit?: string;
  threshold?: Threshold;
  trend?: 'up' | 'down' | 'stable';
  previousValue?: number;
  change?: number;
  confidence?: number;
}

export interface KPIValueValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class KPIValueFactory {
  static create(data: KPIValueCreate): KPIValue {
    const now = new Date();
    return {
      value: data.value,
      unit: data.unit,
      threshold: data.threshold || this.getDefaultThreshold(),
      trend: data.trend || 'stable',
      lastUpdated: now,
      confidence: 1.0
    };
  }

  // Legacy method for backward compatibility with tests
  static createLegacy(value: number, unit: string, threshold: Threshold, trend?: 'up' | 'down' | 'stable'): KPIValue {
    return this.create({ value, unit, threshold, trend });
  }

  static update(current: KPIValue, updates: KPIValueUpdate): KPIValue {
    const updated = { ...current, ...updates };
    
    // Calculate change if value changed
    if (updates.value !== undefined && updates.value !== current.value) {
      updated.previousValue = current.value;
      updated.change = ((updates.value - current.value) / current.value) * 100;
      updated.trend = updates.value > current.value ? 'up' : updates.value < current.value ? 'down' : 'stable';
      updated.lastUpdated = new Date();
    }

    return updated;
  }

  static validate(kpiValue: KPIValue): KPIValueValidation {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (typeof kpiValue.value !== 'number' || isNaN(kpiValue.value)) {
      errors.push('Value must be a valid number');
    }

    if (!kpiValue.unit || typeof kpiValue.unit !== 'string') {
      errors.push('Unit is required and must be a string');
    }

    if (kpiValue.confidence !== undefined && (kpiValue.confidence < 0 || kpiValue.confidence > 1)) {
      warnings.push('Confidence should be between 0 and 1');
    }

    if (kpiValue.threshold) {
      const thresholdValidation = ThresholdFactory.validate(kpiValue.threshold);
      errors.push(...thresholdValidation.errors);
      warnings.push(...thresholdValidation.warnings);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  static withTrend(base: KPIValue, trend: 'up' | 'down' | 'stable'): KPIValue {
    return {
      ...base,
      trend,
      lastUpdated: new Date()
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

  private static getDefaultThreshold(): Threshold {
    return {
      critical: 0,
      warning: 0,
      good: 0
    };
  }
}
