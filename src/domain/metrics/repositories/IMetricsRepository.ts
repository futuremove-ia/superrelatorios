import { MetricsEntity } from '../entities';

/**
 * Repository interface for Metrics persistence
 * Follows Dependency Inversion Principle
 */

export interface IMetricsRepository {
  /**
   * Save metrics to persistence layer
   */
  save(metrics: MetricsEntity): Promise<MetricsEntity>;

  /**
   * Find metrics by ID
   */
  findById(id: string): Promise<MetricsEntity | null>;

  /**
   * Find metrics by period
   */
  findByPeriod(period: string): Promise<MetricsEntity[]>;

  /**
   * Find latest metrics
   */
  findLatest(): Promise<MetricsEntity | null>;

  /**
   * Find metrics within date range
   */
  findByDateRange(startDate: Date, endDate: Date): Promise<MetricsEntity[]>;

  /**
   * Get metrics history for trend analysis
   */
  getHistory(kpiCode: string, limit?: number): Promise<MetricsEntity[]>;

  /**
   * Delete metrics by ID
   */
  delete(id: string): Promise<void>;
}
