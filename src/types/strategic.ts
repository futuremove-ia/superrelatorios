export interface KPIData {
  code: string;
  name: string;
  value: number;
  unit: string;
  threshold: {
    critical: number;
    warning: number;
  };
  trend: 'up' | 'down' | 'stable';
  previousValue?: number;
  change?: number;
  category: 'financial' | 'marketing' | 'sales' | 'operational';
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  severity: 'critical' | 'warning' | 'info';
  detectedKPIs: string[];
  confidence: number;
}

export interface DetectionResult {
  challenges: Challenge[];
  overallHealth: 'critical' | 'warning' | 'good';
  summary: string;
}

export interface DetectionRule {
  id: string;
  name: string;
  description: string;
  kpis: string[];
  rules: Array<{
    kpi: string;
    operator: '<=' | '>=' | '<=' | '>' | '<' | '=';
    value: number;
    weight: number;
  }>;
}

export interface ActionLever {
  id: string;
  title: string;
  description: string;
  challenge: string;
  priority: number;
  complexity: 'low' | 'medium' | 'high';
  estimatedTime: string;
  impact: 'low' | 'medium' | 'high';
  kpis: string[];
}
