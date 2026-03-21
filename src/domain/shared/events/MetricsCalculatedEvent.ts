import { MetricsEntity } from '../../metrics/entities';

/**
 * Domain Event fired when metrics are calculated
 * Used for event-driven architecture and notifications
 */

export interface MetricsCalculatedEvent {
  readonly id: string;
  readonly eventType: 'METRICS_CALCULATED';
  readonly timestamp: Date;
  readonly metrics: MetricsEntity;
  readonly source: string;
  readonly metadata: {
    calculationTime: number;
    dataPoints: number;
    kpisCalculated: string[];
  };
}

export class MetricsCalculatedEventFactory {
  static create(
    metrics: MetricsEntity,
    source: string = 'automatic',
    metadata?: Partial<MetricsCalculatedEvent['metadata']>
  ): MetricsCalculatedEvent {
    return {
      id: crypto.randomUUID(),
      eventType: 'METRICS_CALCULATED',
      timestamp: new Date(),
      metrics,
      source,
      metadata: {
        calculationTime: 0,
        dataPoints: Object.keys(metrics.kpis).length,
        kpisCalculated: Object.keys(metrics.kpis),
        ...metadata,
      },
    };
  }
}
