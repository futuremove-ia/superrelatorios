import { MetricsEntity, KPIValue, AlertEntity } from '../../../domain/metrics';
import { MetricsDTO, KPIDTO, AlertDTO, ThresholdDTO } from '../dtos';

/**
 * Mapper for converting between Domain Entities and DTOs
 * Follows Clean Architecture principles for layer separation
 */

export class MetricsMapper {
  static toDTO(entity: MetricsEntity): MetricsDTO {
    return {
      id: entity.id,
      period: entity.period,
      kpis: {
        netProfitMargin: this.kpiToDTO(entity.kpis.netProfitMargin),
        cashBurnRate: this.kpiToDTO(entity.kpis.cashBurnRate),
        runway: this.kpiToDTO(entity.kpis.runway),
        salesConversion: this.kpiToDTO(entity.kpis.salesConversion),
        customerAcquisitionCost: this.kpiToDTO(entity.kpis.customerAcquisitionCost),
      },
      calculatedAt: entity.calculatedAt.toISOString(),
    };
  }

  static toDTOs(entities: MetricsEntity[]): MetricsDTO[] {
    return entities.map(entity => this.toDTO(entity));
  }

  private static kpiToDTO(kpi: KPIValue): KPIDTO {
    return {
      value: kpi.value,
      unit: kpi.unit,
      threshold: this.thresholdToDTO(kpi.threshold),
      trend: kpi.trend,
      status: this.getKPIStatus(kpi),
      color: this.getKPIColor(kpi),
    };
  }

  private static thresholdToDTO(threshold: any): ThresholdDTO {
    return {
      critical: threshold.critical,
      warning: threshold.warning,
      good: threshold.good,
    };
  }

  private static getKPIStatus(kpi: KPIValue): 'critical' | 'warning' | 'good' {
    const { value, threshold } = kpi;
    
    if (value <= threshold.critical) {
      return 'critical';
    }
    
    if (value <= threshold.warning) {
      return 'warning';
    }
    
    return 'good';
  }

  private static getKPIColor(kpi: KPIValue): string {
    const status = this.getKPIStatus(kpi);
    
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

  static alertToDTO(alert: AlertEntity): AlertDTO {
    return {
      id: alert.id,
      kpi: alert.kpi,
      level: alert.level,
      title: alert.title,
      description: alert.description,
      recommendation: alert.recommendation,
      currentValue: alert.currentValue,
      threshold: alert.threshold,
      triggeredAt: alert.triggeredAt.toISOString(),
      acknowledgedAt: alert.acknowledgedAt?.toISOString(),
      resolvedAt: alert.resolvedAt?.toISOString(),
    };
  }

  static alertsToDTOs(alerts: AlertEntity[]): AlertDTO[] {
    return alerts.map(alert => this.alertToDTO(alert));
  }
}
