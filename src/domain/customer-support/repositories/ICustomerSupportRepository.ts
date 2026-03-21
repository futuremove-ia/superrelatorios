import { CustomerSupportMetricsEntity } from '../entities/CustomerSupportMetricsEntity';

export interface ICustomerSupportRepository {
  save(metrics: CustomerSupportMetricsEntity): Promise<CustomerSupportMetricsEntity>;
  findById(id: string): Promise<CustomerSupportMetricsEntity | null>;
  findByPeriod(period: string): Promise<CustomerSupportMetricsEntity[]>;
  findLatest(): Promise<CustomerSupportMetricsEntity | null>;
  findByDateRange(startDate: Date, endDate: Date): Promise<CustomerSupportMetricsEntity[]>;
  getHistory(kpiCode: string, limit?: number): Promise<CustomerSupportMetricsEntity[]>;
  delete(id: string): Promise<void>;
  getCount(): Promise<number>;
}
