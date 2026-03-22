// Common types used across domain layers

export interface BaseDomainEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseEntity {
  id: string;
  created_at: Date;
  updated_at: Date;
}

export interface PaginationOptions {
  readonly page: number;
  readonly limit: number;
  readonly sortBy?: string;
  readonly sortOrder?: 'asc' | 'desc';
}

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
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

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
  success: boolean;
}

export interface ErrorDetails {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export interface AuditLog {
  id: string;
  entity: string;
  entityId: string;
  action: 'create' | 'update' | 'delete' | 'view';
  userId: string;
  timestamp: Date;
  changes?: any;
}

export interface CacheOptions {
  ttl?: number; // Time to live in seconds
  key: string;
  tags?: string[];
}

export interface EventPayload {
  type: string;
  data: any;
  timestamp: Date;
  userId?: string;
  entityId?: string;
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
