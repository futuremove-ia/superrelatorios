import { 
  BaseDomainEntity, 
  BaseKPIValue, 
  DomainType, 
  Threshold 
} from '../../core/BusinessDomain';

// Re-export DomainType for use in other modules
export type { DomainType };

/**
 * Unified Metrics Entity - Single source of truth for all domain metrics
 * 
 * This entity consolidates all domain-specific metrics into a single, coherent
 * structure following Clean Architecture principles. It serves as the central
 * domain model for all KPI data across the entire system.
 * 
 * @example
 * ```typescript
 * const financialMetrics = UnifiedMetricsFactory.create('financial', {
 *   netProfitMargin: { value: 15, unit: '%', threshold: { critical: 5, warning: 10, good: 15 } },
 *   cashBurnRate: { value: 5000, unit: 'R$', threshold: { critical: 10000, warning: 5000, good: 0 } }
 * });
 * ```
 */
export interface UnifiedMetricsEntity extends BaseDomainEntity {
  /**
   * Domain type for this metrics entity
   * Determines which business domain this metric belongs to
   */
  readonly domain: DomainType;

  /**
   * Collection of KPI values for this domain
   * Key-value mapping where key is the KPI code and value is the KPI data
   */
  readonly kpis: Record<string, UnifiedKPIValue>;
}

/**
 * Enhanced KPI Value interface extending the base KPI value
 * 
 * Provides additional properties for historical comparison and trend analysis
 * while maintaining compatibility with the base KPI value interface.
 */
export interface UnifiedKPIValue extends BaseKPIValue {
  /**
   * Previous period value for trend calculation
   * Optional - may not be available for first period
   */
  readonly previousValue?: number;

  /**
   * Percentage change from previous period
   * Calculated as: ((current - previous) / previous) * 100
   * Optional - may not be available for first period
   */
  readonly change?: number;

  /**
   * Confidence score for the KPI value
   * 0-1 scale indicating reliability of the data
   * Used for decision-making priority
   */
  readonly confidence?: number;

  /**
   * Last updated timestamp for this specific KPI
   * May be different from the entity's calculatedAt
   */
  readonly lastUpdated?: Date;
}

/**
 * Unified metrics collection for cross-domain analysis
 * 
 * Represents a complete snapshot of all domain metrics for a specific period,
 * enabling cross-domain analytics and comprehensive business insights.
 */
export interface UnifiedMetricsCollection {
  /**
   * Period identifier (YYYY-MM format)
   */
  readonly period: string;

  /**
   * Collection of metrics by domain
   * Key is domain type, value is the domain's metrics entity
   */
  readonly metrics: Record<DomainType, UnifiedMetricsEntity>;

  /**
   * Cross-domain health score
   * Overall business health across all domains (0-100)
   */
  readonly healthScore: number;

  /**
   * Collection of cross-domain relationships and impacts
   * Used for advanced analytics and decision intelligence
   */
  readonly relationships: CrossDomainRelationship[];

  /**
   * Timestamp when this collection was calculated
   */
  readonly calculatedAt: Date;
}

/**
 * Cross-domain relationship for unified analytics
 * 
 * Defines how metrics in one domain influence or correlate with metrics
 * in another domain, enabling sophisticated cross-domain analysis.
 */
export interface CrossDomainRelationship {
  /**
   * Source domain that influences the target
   */
  readonly sourceDomain: DomainType;

  /**
   * Target domain that is influenced by the source
   */
  readonly targetDomain: DomainType;

  /**
   * Type of relationship between domains
   */
  readonly relationship: 'influences' | 'depends_on' | 'correlates_with';

  /**
   * Strength of the relationship
   */
  readonly strength: 'weak' | 'moderate' | 'strong';

  /**
   * Specific KPIs involved in this relationship
   */
  readonly kpiMappings: Array<{
    readonly sourceKPI: string;
    readonly targetKPI: string;
    readonly impact: number; // Percentage impact
    readonly confidence: number; // 0-1 confidence score
  }>;
}

/**
 * Validation result for KPI values
 * 
 * Provides comprehensive validation information including
 * status, errors, and warnings for KPI values.
 */
export interface KPIValidationResult {
  /**
   * Whether the KPI value is valid
   */
  readonly isValid: boolean;

  /**
   * Status of the KPI value
   */
  readonly status: 'critical' | 'warning' | 'good';

  /**
   * List of validation errors
   */
  readonly errors: string[];

  /**
   * List of validation warnings
   */
  readonly warnings: string[];

  /**
   * Recommended actions based on validation
   */
  readonly recommendations: string[];
}

/**
 * Metrics aggregation options for different analysis needs
 * 
 * Defines how metrics should be aggregated for various
 * business scenarios and reporting requirements.
 */
export type MetricsAggregation = 
  | 'sum'           // Sum all values
  | 'average'       // Calculate average
  | 'weighted_avg'  // Weighted average based on importance
  | 'median'        // Median value
  | 'min'           // Minimum value
  | 'max';          // Maximum value

/**
 * Time period options for metrics analysis
 * 
 * Defines the time periods for which metrics can be calculated
 * and analyzed.
 */
export type TimePeriod = 
  | 'daily'         // Daily metrics
  | 'weekly'        // Weekly aggregation
  | 'monthly'       // Monthly aggregation (default)
  | 'quarterly'     // Quarterly aggregation
  | 'yearly';       // Yearly aggregation

/**
 * Metrics comparison types for trend analysis
 * 
 * Defines how metrics should be compared for trend
 * analysis and performance evaluation.
 */
export type MetricsComparison = 
  | 'period_over_period'    // Compare with previous period
  | 'year_over_year'        // Compare with same period last year
  | 'budget_vs_actual'      // Compare budget vs actual
  | 'target_vs_actual';     // Compare target vs actual
