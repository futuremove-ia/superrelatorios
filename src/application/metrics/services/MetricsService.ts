import { MetricsEntity, FinancialData, SalesData } from '../../../domain/metrics';
import { IMetricsCalculator, IMetricsRepository } from '../../../domain/metrics';
import { CreateMetricsDTO, MetricsDTO, MetricsSummaryDTO } from '../dtos';
import { CalculateMetricsUseCase, GetMetricsUseCase } from '../use-cases';

/**
 * Application Service for Metrics
 * High-level service that orchestrates use cases
 */

export class MetricsService {
  private readonly calculateMetricsUseCase: CalculateMetricsUseCase;
  private readonly getMetricsUseCase: GetMetricsUseCase;

  constructor(
    private readonly metricsCalculator: IMetricsCalculator,
    private readonly metricsRepository: IMetricsRepository
  ) {
    this.calculateMetricsUseCase = new CalculateMetricsUseCase(
      metricsCalculator,
      metricsRepository
    );
    
    this.getMetricsUseCase = new GetMetricsUseCase(
      metricsRepository
    );
  }

  /**
   * Calculate and store metrics from raw data
   */
  async calculateMetrics(data: CreateMetricsDTO): Promise<MetricsDTO> {
    return this.calculateMetricsUseCase.execute(data);
  }

  /**
   * Calculate multiple metrics in batch
   */
  async calculateMetricsBatch(dataArray: CreateMetricsDTO[]): Promise<MetricsDTO[]> {
    return this.calculateMetricsUseCase.executeBatch(dataArray);
  }

  /**
   * Get the latest metrics
   */
  async getLatestMetrics(): Promise<MetricsDTO | null> {
    return this.getMetricsUseCase.getLatest();
  }

  /**
   * Get metrics by ID
   */
  async getMetricsById(id: string): Promise<MetricsDTO | null> {
    return this.getMetricsUseCase.getById(id);
  }

  /**
   * Get metrics by period
   */
  async getMetricsByPeriod(period: string): Promise<MetricsDTO[]> {
    return this.getMetricsUseCase.getByPeriod(period);
  }

  /**
   * Get metrics within date range
   */
  async getMetricsByDateRange(startDate: Date, endDate: Date): Promise<MetricsDTO[]> {
    return this.getMetricsUseCase.getByDateRange(startDate, endDate);
  }

  /**
   * Get metrics history for a specific KPI
   */
  async getMetricsHistory(kpiCode: string, limit?: number): Promise<MetricsDTO[]> {
    return this.getMetricsUseCase.getHistory(kpiCode, limit);
  }

  /**
   * Get metrics summary
   */
  async getMetricsSummary(): Promise<MetricsSummaryDTO> {
    return this.getMetricsUseCase.getSummary();
  }

  /**
   * Quick calculation from separate financial and sales data
   */
  async quickCalculate(
    period: string,
    financialData: FinancialData,
    salesData: SalesData
  ): Promise<MetricsDTO> {
    const data: CreateMetricsDTO = {
      period,
      financialData,
      salesData,
    };

    return this.calculateMetrics(data);
  }
}
