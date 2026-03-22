import { BaseDomainEntity } from '../shared/types';
import { KPIValue } from '../../metrics/value-objects/KPIValue';
import { Threshold } from '../../metrics/value-objects/Threshold';

export type DomainType = 'financial' | 'marketing' | 'sales' | 'operations' | 'strategy' | 'customer-support' | 'logistics' | 'human-resources' | 'analytics' | 'commercial';

export interface UnifiedMetricsEntity extends BaseDomainEntity {
  domain: DomainType;
  period: string;
  kpis: Record<string, KPIValue>;
  metadata?: {
    source?: string;
    lastUpdated?: string;
    confidence?: number;
  };
}

export interface UnifiedMetricsFilter {
  domains?: DomainType[];
  periods?: string[];
  kpiCodes?: string[];
  thresholdType?: 'critical' | 'warning' | 'good';
}

export interface UnifiedMetricsSummary {
  totalKPIs: number;
  criticalCount: number;
  warningCount: number;
  goodCount: number;
  overallHealth: 'critical' | 'warning' | 'good';
  lastUpdated: string;
}

export interface UnifiedMetricsCreateRequest {
  domain: DomainType;
  period: string;
  kpis: Record<string, {
    value: number;
    unit: string;
    threshold?: Threshold;
  }>;
}

export interface UnifiedMetricsUpdateRequest {
  id: string;
  kpis?: Partial<Record<string, KPIValue>>;
  metadata?: UnifiedMetricsEntity['metadata'];
}

export interface UnifiedMetricsQuery {
  filter?: UnifiedMetricsFilter;
  pagination?: {
    page: number;
    limit: number;
  };
  sorting?: {
    field: string;
    direction: 'asc' | 'desc';
  };
}
