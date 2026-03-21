import { CommercialMetricsEntity } from '../entities/CommercialMetricsEntity';

export interface ICommercialRepository {
  save(metrics: CommercialMetricsEntity): Promise<CommercialMetricsEntity>;
  findById(id: string): Promise<CommercialMetricsEntity | null>;
  findByPeriod(period: string): Promise<CommercialMetricsEntity[]>;
  findLatest(): Promise<CommercialMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<CommercialMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<CommercialMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
