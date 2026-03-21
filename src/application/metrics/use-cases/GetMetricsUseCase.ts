import { MetricsEntity } from '../../../domain/metrics';
import { IMetricsRepository } from '../../../domain/metrics';
import { MetricsDTO, MetricsSummaryDTO } from '../dtos';
import { MetricsMapper } from '../mappers/MetricsMapper';

/**
 * Use Case for retrieving metrics
 * Handles different query scenarios for metrics data
 */

export class GetMetricsUseCase {
  constructor(
    private readonly metricsRepository: IMetricsRepository
  ) {}

  async getLatest(): Promise<MetricsDTO | null> {
    const metrics = await this.metricsRepository.findLatest();
    
    if (!metrics) {
      return null;
    }

    return MetricsMapper.toDTO(metrics);
  }

  async getById(id: string): Promise<MetricsDTO | null> {
    const metrics = await this.metricsRepository.findById(id);
    
    if (!metrics) {
      return null;
    }

    return MetricsMapper.toDTO(metrics);
  }

  async getByPeriod(period: string): Promise<MetricsDTO[]> {
    const metricsList = await this.metricsRepository.findByPeriod(period);
    return MetricsMapper.toDTOs(metricsList);
  }

  async getByDateRange(startDate: Date, endDate: Date): Promise<MetricsDTO[]> {
    const metricsList = await this.metricsRepository.findByDateRange(startDate, endDate);
    return MetricsMapper.toDTOs(metricsList);
  }

  async getHistory(kpiCode: string, limit: number = 10): Promise<MetricsDTO[]> {
    const metricsList = await this.metricsRepository.getHistory(kpiCode, limit);
    return MetricsMapper.toDTOs(metricsList);
  }

  async getSummary(): Promise<MetricsSummaryDTO> {
    const latest = await this.metricsRepository.findLatest();
    
    if (!latest) {
      return {
        totalMetrics: 0,
        criticalCount: 0,
        warningCount: 0,
        goodCount: 0,
        lastUpdated: new Date().toISOString(),
      };
    }

    const kpis = Object.values(latest.kpis);
    const criticalCount = kpis.filter(kpi => kpi.value <= kpi.threshold.critical).length;
    const warningCount = kpis.filter(kpi => 
      kpi.value > kpi.threshold.critical && kpi.value <= kpi.threshold.warning
    ).length;
    const goodCount = kpis.filter(kpi => kpi.value > kpi.threshold.warning).length;

    return {
      totalMetrics: kpis.length,
      criticalCount,
      warningCount,
      goodCount,
      lastUpdated: latest.calculatedAt.toISOString(),
    };
  }
}
