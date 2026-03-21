import { StrategyMetricsEntity } from '../entities/StrategyMetricsEntity';

export interface IStrategyRepository {
  save(metrics: StrategyMetricsEntity): Promise<StrategyMetricsEntity>;
  findById(id: string): Promise<StrategyMetricsEntity | null>;
  findByPeriod(period: string): Promise<StrategyMetricsEntity[]>;
  findLatest(): Promise<StrategyMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<StrategyMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<StrategyMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
