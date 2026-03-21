import { AlertEntity, MetricsEntity } from '../entities';

/**
 * Service interface for Alert management
 * Core business logic for alert processing
 */

export interface IAlertService {
  /**
   * Check all KPIs against thresholds and generate alerts
   */
  checkThresholds(metrics: MetricsEntity): AlertEntity[];

  /**
   * Check specific KPI against threshold
   */
  checkKPI(kpiCode: string, value: number, threshold: any): AlertEntity | null;

  /**
   * Acknowledge alert (mark as seen)
   */
  acknowledgeAlert(alertId: string): Promise<AlertEntity>;

  /**
   * Resolve alert (mark as fixed)
   */
  resolveAlert(alertId: string): Promise<AlertEntity>;

  /**
   * Get active alerts count by level
   */
  getActiveAlertsCount(): Promise<{
    critical: number;
    warning: number;
    info: number;
    total: number;
  }>;

  /**
   * Check if alert should be triggered
   */
  shouldTriggerAlert(
    currentValue: number,
    threshold: number,
    level: 'critical' | 'warning' | 'info'
  ): boolean;
}
