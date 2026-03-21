import { HumanResourcesMetricsEntity } from '../entities/HumanResourcesMetricsEntity';

export interface IHumanResourcesRepository {
  save(metrics: HumanResourcesMetricsEntity): Promise<HumanResourcesMetricsEntity>;
  findById(id: string): Promise<HumanResourcesMetricsEntity | null>;
  findByPeriod(period: string): Promise<HumanResourcesMetricsEntity[]>;
  findLatest(): Promise<HumanResourcesMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<HumanResourcesMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<HumanResourcesMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
