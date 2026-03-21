import { OperationsMetricsEntity } from '../entities/OperationsMetricsEntity';

export interface IOperationsRepository {
  save(metrics: OperationsMetricsEntity): Promise<OperationsMetricsEntity>;
  findById(id: string): Promise<OperationsMetricsEntity | null>;
  findByPeriod(period: string): Promise<OperationsMetricsEntity[]>;
  findLatest(): Promise<OperationsMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<OperationsMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<OperationsMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
