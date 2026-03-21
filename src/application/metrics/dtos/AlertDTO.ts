/**
 * Data Transfer Object for Alerts
 * Used for communication between layers
 */

export interface AlertDTO {
  readonly id: string;
  readonly kpi: string;
  readonly level: 'critical' | 'warning' | 'info';
  readonly title: string;
  readonly description: string;
  readonly recommendation: string;
  readonly currentValue: number;
  readonly threshold: number;
  readonly triggeredAt: string;
  readonly acknowledgedAt?: string;
  readonly resolvedAt?: string;
}

export interface CreateAlertDTO {
  readonly kpi: string;
  readonly level: 'critical' | 'warning' | 'info';
  readonly title: string;
  readonly description: string;
  readonly currentValue: number;
  readonly threshold: number;
  readonly recommendation?: string;
}

export interface AlertSummaryDTO {
  readonly total: number;
  readonly critical: number;
  readonly warning: number;
  readonly info: number;
  readonly acknowledged: number;
  readonly resolved: number;
  readonly active: number;
}

export interface AlertNotificationDTO {
  readonly alertId: string;
  readonly recipient: string;
  readonly channel: 'email' | 'sms' | 'dashboard';
  readonly sentAt: string;
  readonly status: 'pending' | 'sent' | 'failed';
}
