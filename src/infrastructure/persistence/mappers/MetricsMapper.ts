import { MetricsEntity, KPIValue, AlertEntity } from '../../../domain/metrics';

/**
 * Database mapper for MetricsEntity
 * Handles conversion between Domain Entities and Database records
 * Follows Clean Architecture principles
 */

export interface MetricsDatabaseRecord {
  id: string;
  period: string;
  net_profit_margin: number;
  cash_burn_rate: number;
  runway_months: number;
  sales_conversion_rate: number;
  customer_acquisition_cost: number;
  calculated_at: string;
  created_at: string;
  updated_at: string;
}

export interface AlertDatabaseRecord {
  id: string;
  kpi_code: string;
  level: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  recommendation?: string;
  current_value: number;
  threshold_value: number;
  triggered_at: string;
  acknowledged_at?: string;
  resolved_at?: string;
  created_at: string;
  updated_at: string;
}

export class MetricsMapper {
  /**
   * Convert Domain Entity to Database Record
   */
  static toDatabase(entity: MetricsEntity): Omit<MetricsDatabaseRecord, 'created_at' | 'updated_at'> {
    return {
      id: entity.id,
      period: entity.period,
      net_profit_margin: entity.kpis.netProfitMargin.value,
      cash_burn_rate: entity.kpis.cashBurnRate.value,
      runway_months: entity.kpis.runway.value,
      sales_conversion_rate: entity.kpis.salesConversion.value,
      customer_acquisition_cost: entity.kpis.customerAcquisitionCost.value,
      calculated_at: entity.calculatedAt.toISOString(),
    };
  }

  /**
   * Convert Database Record to Domain Entity
   */
  static fromDatabase(record: MetricsDatabaseRecord): MetricsEntity {
    return {
      id: record.id,
      period: record.period,
      kpis: {
        netProfitMargin: this.createKPIValue(
          record.net_profit_margin,
          '%',
          { critical: 5, warning: 10, good: 15 }
        ),
        cashBurnRate: this.createKPIValue(
          record.cash_burn_rate,
          'R$',
          { critical: 10000, warning: 5000, good: 0 }
        ),
        runway: this.createKPIValue(
          record.runway_months,
          'meses',
          { critical: 3, warning: 6, good: 12 }
        ),
        salesConversion: this.createKPIValue(
          record.sales_conversion_rate,
          '%',
          { critical: 5, warning: 15, good: 25 }
        ),
        customerAcquisitionCost: this.createKPIValue(
          record.customer_acquisition_cost,
          'R$',
          { critical: 500, warning: 200, good: 100 }
        ),
      },
      calculatedAt: new Date(record.calculated_at),
    };
  }

  /**
   * Convert multiple Database Records to Domain Entities
   */
  static fromDatabaseArray(records: MetricsDatabaseRecord[]): MetricsEntity[] {
    return records.map(record => this.fromDatabase(record));
  }

  /**
   * Create KPIValue with default threshold
   */
  private static createKPIValue(
    value: number,
    unit: string,
    threshold: { critical: number; warning: number; good: number }
  ): KPIValue {
    return {
      value,
      unit,
      threshold,
      trend: 'stable', // Default trend, would be calculated based on historical data
    };
  }

  /**
   * Convert Alert Entity to Database Record
   */
  static alertToDatabase(alert: AlertEntity): Omit<AlertDatabaseRecord, 'created_at' | 'updated_at'> {
    return {
      id: alert.id,
      kpi_code: alert.kpi,
      level: alert.level,
      title: alert.title,
      description: alert.description,
      recommendation: alert.recommendation,
      current_value: alert.currentValue,
      threshold_value: alert.threshold,
      triggered_at: alert.triggeredAt.toISOString(),
      acknowledged_at: alert.acknowledgedAt?.toISOString(),
      resolved_at: alert.resolvedAt?.toISOString(),
    };
  }

  /**
   * Convert Database Record to Alert Entity
   */
  static alertFromDatabase(record: AlertDatabaseRecord): AlertEntity {
    return {
      id: record.id,
      kpi: record.kpi_code,
      level: record.level,
      title: record.title,
      description: record.description,
      recommendation: record.recommendation || '',
      currentValue: record.current_value,
      threshold: record.threshold_value,
      triggeredAt: new Date(record.triggered_at),
      acknowledgedAt: record.acknowledged_at ? new Date(record.acknowledged_at) : undefined,
      resolvedAt: record.resolved_at ? new Date(record.resolved_at) : undefined,
    };
  }

  /**
   * Convert multiple Database Records to Alert Entities
   */
  static alertsFromDatabaseArray(records: AlertDatabaseRecord[]): AlertEntity[] {
    return records.map(record => this.alertFromDatabase(record));
  }
}
