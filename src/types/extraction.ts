export interface ExtractedKPI {
  code: string;
  name: string;
  value: number;
  unit: string;
  status: 'critical' | 'warning' | 'good';
  trend: 'up' | 'down' | 'stable';
  previousValue?: number;
  change?: number;
  confidence: number;
  extractedAt: Date;
  source: string;
}

export interface ExtractionConfig {
  industry?: string;
  companySize?: 'small' | 'medium' | 'large';
  region?: string;
  period?: string;
}

export interface ExtractionResult {
  kpis: ExtractedKPI[];
  summary: {
    total: number;
    critical: number;
    warning: number;
    good: number;
  };
  confidence: number;
  processingTime: number;
  errors: string[];
}
