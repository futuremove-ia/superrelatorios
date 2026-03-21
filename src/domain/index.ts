// Core domain types and utilities
export * from './core';

// Individual domains (with explicit exports to avoid conflicts)
export type { FinancialData, FinancialMetricsEntity } from './financial';
export { FinancialMetricsEntityFactory } from './financial';
export type { CommercialData, CommercialMetricsEntity } from './commercial';
export { CommercialMetricsEntityFactory } from './commercial';
export type { OperationsData, OperationsMetricsEntity } from './operations';
export { OperationsMetricsEntityFactory } from './operations';
export type { StrategyData, StrategyMetricsEntity } from './strategy';
export { StrategyMetricsEntityFactory } from './strategy';
export type { HumanResourcesData, HumanResourcesMetricsEntity } from './human-resources';
export { HumanResourcesMetricsEntityFactory } from './human-resources';
export type { CustomerSupportData, CustomerSupportMetricsEntity } from './customer-support';
export { CustomerSupportMetricsEntityFactory } from './customer-support';
export type { LogisticsData, LogisticsMetricsEntity } from './logistics';
export { LogisticsMetricsEntityFactory } from './logistics';

// Domain repositories
export type { IFinancialRepository } from './financial';
export type { ICommercialRepository } from './commercial';
export type { IOperationsRepository } from './operations';
export type { IStrategyRepository } from './strategy';
export type { IHumanResourcesRepository } from './human-resources';
export type { ICustomerSupportRepository } from './customer-support';
export type { ILogisticsRepository } from './logistics';

// Cross-domain analytics
export * from './analytics';

// Domain registry
export * from './registry';

// Legacy metrics (for backward compatibility)
export * from './metrics';
