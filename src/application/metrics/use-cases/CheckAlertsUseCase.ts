import { MetricsEntity, AlertEntity } from '../../../domain/metrics';
import { IAlertService, IMetricsRepository } from '../../../domain/metrics';
import { AlertDTO, AlertSummaryDTO } from '../dtos';
import { MetricsMapper } from '../mappers/MetricsMapper';

/**
 * Use Case for checking and managing alerts
 * Orchestrates alert checking and notification processes
 */

export class CheckAlertsUseCase {
  constructor(
    private readonly alertService: IAlertService,
    private readonly metricsRepository: IMetricsRepository
  ) {}

  async checkLatestMetrics(): Promise<AlertDTO[]> {
    const latestMetrics = await this.metricsRepository.findLatest();
    
    if (!latestMetrics) {
      return [];
    }

    const alerts = this.alertService.checkThresholds(latestMetrics);
    
    // Save alerts to repository
    const savedAlerts: AlertEntity[] = [];
    for (const alert of alerts) {
      // Note: In a real implementation, we would inject IAlertRepository
      // For now, we'll just return the DTOs
      savedAlerts.push(alert);
    }

    return MetricsMapper.alertsToDTOs(savedAlerts);
  }

  async checkMetricsById(metricsId: string): Promise<AlertDTO[]> {
    const metrics = await this.metricsRepository.findById(metricsId);
    
    if (!metrics) {
      throw new Error(`Metrics with ID ${metricsId} not found`);
    }

    const alerts = this.alertService.checkThresholds(metrics);
    return MetricsMapper.alertsToDTOs(alerts);
  }

  async acknowledgeAlert(alertId: string): Promise<AlertDTO> {
    const acknowledgedAlert = await this.alertService.acknowledgeAlert(alertId);
    return MetricsMapper.alertToDTO(acknowledgedAlert);
  }

  async resolveAlert(alertId: string): Promise<AlertDTO> {
    const resolvedAlert = await this.alertService.resolveAlert(alertId);
    return MetricsMapper.alertToDTO(resolvedAlert);
  }

  async getActiveAlerts(): Promise<AlertDTO[]> {
    const count = await this.alertService.getActiveAlertsCount();
    
    // Note: In a real implementation, we would query the alert repository
    // For now, we'll return empty array as placeholder
    return [];
  }

  async getAlertsSummary(): Promise<AlertSummaryDTO> {
    const count = await this.alertService.getActiveAlertsCount();
    
    return {
      total: count.total,
      critical: count.critical,
      warning: count.warning,
      info: count.info,
      acknowledged: 0, // Would come from repository
      resolved: 0, // Would come from repository
      active: count.total,
    };
  }

  async checkAndNotify(): Promise<{
    alerts: AlertDTO[];
    notificationsSent: number;
  }> {
    const alerts = await this.checkLatestMetrics();
    
    // Here we would trigger notifications
    const notificationsSent = alerts.length; // Simplified for MVP
    
    return {
      alerts,
      notificationsSent,
    };
  }
}
