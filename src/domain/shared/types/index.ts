// Common types used across domain layers

export interface PaginationOptions {
  readonly page: number;
  readonly limit: number;
  readonly sortBy?: string;
  readonly sortOrder?: 'asc' | 'desc';
}

export interface DateRange {
  readonly startDate: Date;
  readonly endDate: Date;
}

export interface ValidationResult {
  readonly isValid: boolean;
  readonly errors: string[];
  readonly warnings: string[];
}

export interface TimeSeriesData<T> {
  readonly period: string;
  readonly value: T;
  readonly timestamp: Date;
}

export type KPICode = 
  | 'netProfitMargin'
  | 'cashBurnRate' 
  | 'runway'
  | 'salesConversion'
  | 'customerAcquisitionCost';

export type AlertLevel = 'critical' | 'warning' | 'info';
export type TrendDirection = 'up' | 'down' | 'stable';
