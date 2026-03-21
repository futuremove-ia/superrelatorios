import { AlertEntity } from '../entities';

/**
 * Repository interface for Alert persistence
 * Follows Dependency Inversion Principle
 */

export interface IAlertRepository {
  /**
   * Save alert to persistence layer
   */
  save(alert: AlertEntity): Promise<AlertEntity>;

  /**
   * Find alert by ID
   */
  findById(id: string): Promise<AlertEntity | null>;

  /**
   * Find active (unresolved) alerts
   */
  findActive(): Promise<AlertEntity[]>;

  /**
   * Find alerts by KPI
   */
  findByKPI(kpiCode: string): Promise<AlertEntity[]>;

  /**
   * Find alerts within date range
   */
  findByDateRange(startDate: Date, endDate: Date): Promise<AlertEntity[]>;

  /**
   * Update alert status (acknowledge/resolve)
   */
  update(alert: AlertEntity): Promise<AlertEntity>;

  /**
   * Delete resolved alerts older than specified days
   */
  cleanupOldAlerts(daysOld: number): Promise<number>;

  /**
   * Get alert statistics
   */
  getStatistics(period?: string): Promise<{
    total: number;
    critical: number;
    warning: number;
    info: number;
    resolved: number;
    acknowledged: number;
  }>;
}
