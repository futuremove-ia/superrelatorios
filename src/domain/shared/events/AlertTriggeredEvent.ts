import { AlertEntity } from '../../metrics/entities';

/**
 * Domain Event fired when an alert is triggered
 * Used for event-driven architecture and notifications
 */

export interface AlertTriggeredEvent {
  readonly id: string;
  readonly eventType: 'ALERT_TRIGGERED';
  readonly timestamp: Date;
  readonly alert: AlertEntity;
  readonly metadata: {
    triggeredBy: string;
    severity: 'critical' | 'warning' | 'info';
    escalationLevel: number;
    notificationChannels: string[];
  };
}

export class AlertTriggeredEventFactory {
  static create(
    alert: AlertEntity,
    triggeredBy: string = 'threshold_check',
    metadata?: Partial<AlertTriggeredEvent['metadata']>
  ): AlertTriggeredEvent {
    return {
      id: crypto.randomUUID(),
      eventType: 'ALERT_TRIGGERED',
      timestamp: new Date(),
      alert,
      metadata: {
        triggeredBy,
        severity: alert.level,
        escalationLevel: alert.level === 'critical' ? 1 : alert.level === 'warning' ? 2 : 3,
        notificationChannels: ['email', 'dashboard'],
        ...metadata,
      },
    };
  }
}
