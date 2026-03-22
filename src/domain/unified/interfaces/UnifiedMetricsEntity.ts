import { BaseDomainEntity } from '../shared/types';
import { Threshold } from '../../metrics/value-objects/Threshold';

export type DomainType = 'financial' | 'marketing' | 'sales' | 'operational' | 'customer-success' | 'hr' | 'it' | 'analytics' | 'commercial';

export interface UnifiedMetricsEntity extends BaseDomainEntity {
  id: string;
  code: string;
  name: string;
  value: number;
  unit: string;
  threshold: Threshold;
  category: string;
  timestamp: Date;
  metadata?: {
    source?: string;
    confidence?: number;
    lastUpdated?: string;
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
  period: string;
  lastUpdated: string;
}

export interface KPICode {
  code: string;
  name: string;
  description: string;
  unit: string;
  domain: DomainType;
  calculationFormula?: string;
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
