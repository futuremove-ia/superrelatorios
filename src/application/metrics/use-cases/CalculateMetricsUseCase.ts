import { MetricsEntity, FinancialData, SalesData, KPIValue } from '../../../domain/metrics';
import { IMetricsCalculator, IMetricsRepository } from '../../../domain/metrics';
import { CreateMetricsDTO, MetricsDTO } from '../dtos';
import { MetricsMapper } from '../mappers/MetricsMapper';

/**
 * Use Case for calculating and storing metrics
 * Orchestrates the calculation and persistence of business metrics
 */

export class CalculateMetricsUseCase {
  constructor(
    private readonly metricsCalculator: IMetricsCalculator,
    private readonly metricsRepository: IMetricsRepository
  ) {}

  async execute(data: CreateMetricsDTO): Promise<MetricsDTO> {
    // Validate inputs
    const validation = this.metricsCalculator.validateInputs({
      ...data.financialData,
      ...data.salesData
    });

    if (!validation.isValid) {
      throw new Error(`Invalid inputs: ${validation.errors.join(', ')}`);
    }

    // Calculate metrics
    const metricsEntity = await this.metricsCalculator.calculateAll(
      data.period,
      data.financialData,
      data.salesData
    );

    // Save to repository
    const savedMetrics = await this.metricsRepository.save(metricsEntity);

    // Map to DTO
    return {
      id: savedMetrics.id,
      period: savedMetrics.period,
      kpis: {
        netProfitMargin: {
          value: savedMetrics.kpis.netProfitMargin.value,
          unit: savedMetrics.kpis.netProfitMargin.unit,
          threshold: savedMetrics.kpis.netProfitMargin.threshold,
          trend: savedMetrics.kpis.netProfitMargin.trend,
          status: this.getKPIStatus(savedMetrics.kpis.netProfitMargin),
          color: this.getKPIColor(savedMetrics.kpis.netProfitMargin),
        },
        cashBurnRate: {
          value: savedMetrics.kpis.cashBurnRate.value,
          unit: savedMetrics.kpis.cashBurnRate.unit,
          threshold: savedMetrics.kpis.cashBurnRate.threshold,
          trend: savedMetrics.kpis.cashBurnRate.trend,
          status: this.getKPIStatus(savedMetrics.kpis.cashBurnRate),
          color: this.getKPIColor(savedMetrics.kpis.cashBurnRate),
        },
        runway: {
          value: savedMetrics.kpis.runway.value,
          unit: savedMetrics.kpis.runway.unit,
          threshold: savedMetrics.kpis.runway.threshold,
          trend: savedMetrics.kpis.runway.trend,
          status: this.getKPIStatus(savedMetrics.kpis.runway),
          color: this.getKPIColor(savedMetrics.kpis.runway),
        },
        salesConversion: {
          value: savedMetrics.kpis.salesConversion.value,
          unit: savedMetrics.kpis.salesConversion.unit,
          threshold: savedMetrics.kpis.salesConversion.threshold,
          trend: savedMetrics.kpis.salesConversion.trend,
          status: this.getKPIStatus(savedMetrics.kpis.salesConversion),
          color: this.getKPIColor(savedMetrics.kpis.salesConversion),
        },
        customerAcquisitionCost: {
          value: savedMetrics.kpis.customerAcquisitionCost.value,
          unit: savedMetrics.kpis.customerAcquisitionCost.unit,
          threshold: savedMetrics.kpis.customerAcquisitionCost.threshold,
          trend: savedMetrics.kpis.customerAcquisitionCost.trend,
          status: this.getKPIStatus(savedMetrics.kpis.customerAcquisitionCost),
          color: this.getKPIColor(savedMetrics.kpis.customerAcquisitionCost),
        },
      },
      calculatedAt: savedMetrics.calculatedAt.toISOString(),
    };
  }

  async executeBatch(dataArray: CreateMetricsDTO[]): Promise<MetricsDTO[]> {
    const results: MetricsDTO[] = [];

    for (const data of dataArray) {
      try {
        const result = await this.execute(data);
        results.push(result);
      } catch (error) {
        console.error(`Failed to calculate metrics for period ${data.period}:`, error);
        // Continue processing other items
      }
    }

    return results;
  }

  private getKPIStatus(kpi: KPIValue): 'critical' | 'warning' | 'good' {
    const { value, threshold } = kpi;
    
    if (value <= threshold.critical) {
      return 'critical';
    }
    
    if (value <= threshold.warning) {
      return 'warning';
    }
    
    return 'good';
  }

  private getKPIColor(kpi: KPIValue): string {
    const status = this.getKPIStatus(kpi);
    
    switch (status) {
      case 'critical':
        return '#ef4444'; // red-500
      case 'warning':
        return '#f59e0b'; // amber-500
      case 'good':
        return '#10b981'; // emerald-500
      default:
        return '#6b7280'; // gray-500
    }
  }
}
