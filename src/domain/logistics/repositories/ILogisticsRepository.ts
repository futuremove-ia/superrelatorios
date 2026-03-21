import { LogisticsMetricsEntity } from '../entities/LogisticsMetricsEntity';

export interface ILogisticsRepository {
  save(metrics: LogisticsMetricsEntity): Promise<LogisticsMetricsEntity>;
  findById(id: string): Promise<LogisticsMetricsEntity | null>;
  findByPeriod(period: string): Promise<LogisticsMetricsEntity[]>;
  findLatest(): Promise<LogisticsMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<LogisticsMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<LogisticsMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
