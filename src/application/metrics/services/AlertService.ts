import { AlertEntity } from '../../../domain/metrics';
import { IAlertService, IMetricsRepository } from '../../../domain/metrics';
import { AlertDTO, AlertSummaryDTO, CreateAlertDTO } from '../dtos';
import { CheckAlertsUseCase } from '../use-cases';

/**
 * Application Service for Alerts
 * High-level service that orchestrates alert use cases
 */

export class AlertService {
  private readonly checkAlertsUseCase: CheckAlertsUseCase;

  constructor(
    private readonly alertService: IAlertService,
    private readonly metricsRepository: IMetricsRepository
  ) {
    this.checkAlertsUseCase = new CheckAlertsUseCase(
      alertService,
      metricsRepository
    );
  }

  /**
   * Check latest metrics for alerts
   */
  async checkLatestMetrics(): Promise<AlertDTO[]> {
    return this.checkAlertsUseCase.checkLatestMetrics();
  }

  /**
   * Check specific metrics for alerts
   */
  async checkMetricsById(metricsId: string): Promise<AlertDTO[]> {
    return this.checkAlertsUseCase.checkMetricsById(metricsId);
  }

  /**
   * Acknowledge an alert
   */
  async acknowledgeAlert(alertId: string): Promise<AlertDTO> {
    return this.checkAlertsUseCase.acknowledgeAlert(alertId);
  }

  /**
   * Resolve an alert
   */
  async resolveAlert(alertId: string): Promise<AlertDTO> {
    return this.checkAlertsUseCase.resolveAlert(alertId);
  }

  /**
   * Get active alerts
   */
  async getActiveAlerts(): Promise<AlertDTO[]> {
    return this.checkAlertsUseCase.getActiveAlerts();
  }

  /**
   * Get alerts summary
   */
  async getAlertsSummary(): Promise<AlertSummaryDTO> {
    return this.checkAlertsUseCase.getAlertsSummary();
  }

  /**
   * Check and notify alerts
   */
  async checkAndNotify(): Promise<{
    alerts: AlertDTO[];
    notificationsSent: number;
  }> {
    return this.checkAlertsUseCase.checkAndNotify();
  }

  /**
   * Create manual alert
   */
  async createManualAlert(data: CreateAlertDTO): Promise<AlertDTO> {
    // Note: This would use the alert repository directly
    // For MVP, we'll create a basic alert entity
    const alert = AlertEntityFactory.critical(
      data.kpi,
      data.title,
      data.description,
      data.currentValue,
      data.threshold,
      data.recommendation
    );

    return MetricsMapper.alertToDTO(alert);
  }

  /**
   * Get alerts by KPI
   */
  async getAlertsByKPI(kpiCode: string): Promise<AlertDTO[]> {
    // Note: This would query the alert repository
    // For MVP, return empty array
    return [];
  }
}

// Import needed for manual alert creation
import { AlertEntityFactory } from '../../../domain/metrics';
import { MetricsMapper } from '../mappers/MetricsMapper';
