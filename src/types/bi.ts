/**
 * SuperRelatórios v2.0 - Business Intelligence Domain Types
 * Defines the core structure for Business Metrics, Dimensions, Benchmarks, and Areas.
 */

export type BusinessAreaId = 
  | 'STRATEGY' 
  | 'MANAGEMENT' 
  | 'FINANCE' 
  | 'SALES' 
  | 'MARKETING' 
  | 'OPERATIONS' 
  | 'LOGISTICS' 
  | 'CUSTOMER_SERVICE' 
  | 'HR';

export interface BusinessArea {
  id: BusinessAreaId;
  nameKey: string; // Translation key
  descriptionKey: string;
  icon: string;
}

export interface BusinessDimension {
  id: string;
  nameKey: string;
  descriptionKey: string;
}

export interface BusinessMetric {
  id: string;
  areaId: BusinessAreaId;
  nameKey: string;
  descriptionKey: string;
  unit: 'currency' | 'percentage' | 'number' | 'ratio' | 'time';
  format: string; // e.g., 'R$ 0,0.00'
  calculationLogicKey?: string; // How it's calculated
  standardBenchmarks?: {
    low: number;
    target: number;
    high: number;
  };
}

export interface BusinessBenchmark {
  id: string;
  metricId: string;
  industry?: string; // Optional: market-specific benchmark
  value: number;
  type: 'market' | 'internal_historical' | 'internal_goal';
  updatedAt: string;
}

export interface BusinessAnalysis {
  id: string;
  nameKey: string;
  descriptionKey: string;
  recommendedMetrics: string[]; // Array of metric IDs
  suggestedBlocks: string[]; // Block types
}
