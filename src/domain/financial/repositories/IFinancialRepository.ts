import { FinancialMetricsEntity } from '../entities/FinancialMetricsEntity';

export interface IFinancialRepository {
  save(metrics: FinancialMetricsEntity): Promise<FinancialMetricsEntity>;
  findById(id: string): Promise<FinancialMetricsEntity | null>;
  findByPeriod(period: string): Promise<FinancialMetricsEntity[]>;
  findLatest(): Promise<FinancialMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<FinancialMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<FinancialMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
