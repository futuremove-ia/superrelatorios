import { 
  UnifiedMetricsEntity, 
  UnifiedKPIValue,
  UnifiedMetricsCollection,
  CrossDomainRelationship,
  KPIValidationResult,
  DomainType 
} from '../interfaces/UnifiedMetricsEntity';
import { BaseKPIValue, Threshold } from '../../core/BusinessDomain';

/**
 * Unified Metrics Factory - Creates and manages unified metrics entities
 * 
 * This factory follows the Factory pattern to create unified metrics entities
 * from various data sources while maintaining consistency and validation.
 * It serves as the central point for creating all domain metrics in a unified way.
 * 
 * @example
 * ```typescript
 * const financialMetrics = UnifiedMetricsFactory.create('financial', {
 *   netProfitMargin: { value: 15, unit: '%', threshold: { critical: 5, warning: 10, good: 15 }, trend: 'up' }
 * });
 * ```
 */
export class UnifiedMetricsFactory {
  /**
   * Default thresholds for common KPIs
   * These can be overridden by specific domain requirements
   */
  private static readonly DEFAULT_THRESHOLDS: Record<string, Threshold> = {
    netProfitMargin: { critical: 5, warning: 10, good: 15 },
    cashBurnRate: { critical: 10000, warning: 5000, good: 0 },
    runway: { critical: 3, warning: 6, good: 12 },
    salesConversion: { critical: 5, warning: 15, good: 25 },
    customerAcquisitionCost: { critical: 500, warning: 200, good: 100 },
    operationalEfficiency: { critical: 60, warning: 75, good: 85 },
    qualityRate: { critical: 85, warning: 90, good: 95 },
    throughput: { critical: 100, warning: 200, good: 300 },
    capacityUtilization: { critical: 60, warning: 75, good: 85 },
    okrProgress: { critical: 30, warning: 60, good: 80 },
    initiativeCompletion: { critical: 30, warning: 60, good: 80 },
    strategicAlignment: { critical: 30, warning: 60, good: 80 },
    executionRate: { critical: 50, warning: 75, good: 90 }
  };

  /**
   * Cross-domain relationships for unified analytics
   * Defines how different domains influence each other
   */
  private static readonly CROSS_DOMAIN_RELATIONSHIPS: CrossDomainRelationship[] = [
    {
      sourceDomain: 'financial',
      targetDomain: 'commercial',
      relationship: 'influences',
      strength: 'strong',
      kpiMappings: [
        { sourceKPI: 'netProfitMargin', targetKPI: 'salesConversion', impact: 0.3, confidence: 0.8 },
        { sourceKPI: 'cashBurnRate', targetKPI: 'customerAcquisitionCost', impact: -0.4, confidence: 0.9 }
      ]
    },
    {
      sourceDomain: 'financial',
      targetDomain: 'operations',
      relationship: 'influences',
      strength: 'strong',
      kpiMappings: [
        { sourceKPI: 'netProfitMargin', targetKPI: 'operationalEfficiency', impact: 0.2, confidence: 0.7 },
        { sourceKPI: 'cashBurnRate', targetKPI: 'capacityUtilization', impact: -0.3, confidence: 0.8 }
      ]
    },
    {
      sourceDomain: 'commercial',
      targetDomain: 'operations',
      relationship: 'influences',
      strength: 'moderate',
      kpiMappings: [
        { sourceKPI: 'salesConversion', targetKPI: 'throughput', impact: 0.4, confidence: 0.8 }
      ]
    },
    {
      sourceDomain: 'operations',
      targetDomain: 'customer-support',
      relationship: 'influences',
      strength: 'strong',
      kpiMappings: [
        { sourceKPI: 'qualityRate', targetKPI: 'netPromoterScore', impact: 0.5, confidence: 0.9 }
      ]
    }
  ];

  /**
   * Creates a UnifiedMetricsEntity with the specified domain and KPIs
   * 
   * @param domain - The domain type for this metrics entity
   * @param kpis - Object containing KPI codes and their values
   * @param id - Optional custom ID (will generate UUID if not provided)
   * @param period - Optional period (defaults to 'current')
   * @returns UnifiedMetricsEntity instance
   * 
   * @throws {Error} When domain type is invalid or no KPIs provided
   */
  static create(
    domain: DomainType,
    kpis: Record<string, UnifiedKPIValue>,
    id?: string,
    period: string = 'current'
  ): UnifiedMetricsEntity {
    // Validate inputs
    this.validateDomain(domain);
    this.validateKPIs(kpis);

    // Create entity
    return {
      id: id || crypto.randomUUID(),
      domain,
      period,
      kpis: this.enhanceKPIs(kpis),
      calculatedAt: new Date()
    };
  }

  /**
   * Creates a UnifiedMetricsEntity from raw domain data
   * 
   * @param domain - The domain type
   * @param rawData - Raw data object with domain-specific fields
   * @returns UnifiedMetricsEntity with calculated KPIs
   */
  static createFromRawData(domain: DomainType, rawData: any): UnifiedMetricsEntity {
    if (!rawData || typeof rawData !== 'object') {
      throw new Error('Raw data must be an object');
    }

    const kpis = this.calculateKPIsFromRawData(domain, rawData);
    
    // Allow empty KPIs for raw data creation (different from direct creation)
    if (Object.keys(kpis).length === 0) {
      // Create entity with empty KPIs but valid structure
      return {
        id: crypto.randomUUID(),
        domain,
        period: 'current',
        kpis: {},
        calculatedAt: new Date()
      };
    }
    
    return this.create(domain, kpis);
  }

  /**
   * Creates a cross-domain metrics collection from multiple domain entities
   * 
   * @param domainMetrics - Object with domain types as keys and entities as values
   * @param period - Period for this collection
   * @returns UnifiedMetricsCollection with cross-domain analysis
   */
  static createCrossDomain(
    domainMetrics: Record<DomainType, UnifiedMetricsEntity>,
    period: string
  ): UnifiedMetricsCollection {
    const healthScore = this.calculateHealthScore(domainMetrics);
    const relationships = this.createCrossDomainRelationships(domainMetrics);

    return {
      period,
      metrics: domainMetrics,
      healthScore,
      relationships,
      calculatedAt: new Date()
    };
  }

  /**
   * Validates a KPI value against its thresholds
   * 
   * @param kpiCode - The KPI code to validate
   * @param kpiValue - The KPI value to validate
   * @returns KPIValidationResult with validation details
   */
  static validateKPIValue(kpiCode: string, kpiValue: UnifiedKPIValue): KPIValidationResult {
    const threshold = kpiValue.threshold || this.DEFAULT_THRESHOLDS[kpiCode];
    const errors: string[] = [];
    const warnings: string[] = [];
    const recommendations: string[] = [];

    // Basic value validation
    if (typeof kpiValue.value !== 'number' || isNaN(kpiValue.value)) {
      errors.push('KPI value must be a valid number');
      return {
        isValid: false,
        status: 'critical',
        errors,
        warnings,
        recommendations: ['Provide a valid numeric value']
      };
    }

    // Domain-specific validations (always run first)
    if ((kpiCode.includes('margin') || kpiCode.includes('Margin')) && kpiValue.value < 0) {
      errors.push('Negative profit margin detected');
      recommendations.push('Review revenue and cost calculations');
    }

    if (kpiCode.includes('rate') && (kpiValue.value < 0 || kpiValue.value > 100)) {
      warnings.push('Rate values should typically be between 0-100');
    }

    // Threshold validation
    let status: 'critical' | 'warning' | 'good' = 'good';
    
    if (threshold) {
      if (kpiValue.value <= threshold.critical) {
        status = 'critical';
        errors.push(`KPI value ${kpiValue.value} is below critical threshold ${threshold.critical}`);
        recommendations.push(...this.getRecommendations(kpiCode, 'critical'));
      } else if (kpiValue.value <= threshold.warning) {
        status = 'warning';
        warnings.push(`KPI value ${kpiValue.value} is below warning threshold ${threshold.warning}`);
        recommendations.push(...this.getRecommendations(kpiCode, 'warning'));
      }
    } else {
      // For unknown KPIs, add warning but default to good
      warnings.push(`Unknown KPI code: ${kpiCode}`);
    }

    return {
      isValid: status !== 'critical',
      status,
      errors,
      warnings,
      recommendations
    };
  }

  /**
   * Calculates trend and change percentage between current and previous values
   * 
   * @param currentValue - Current KPI value
   * @param previousValue - Previous KPI value (optional)
   * @returns Object with trend and change percentage
   */
  static calculateTrend(
    currentValue: number,
    previousValue?: number
  ): { trend: 'up' | 'down' | 'stable'; change?: number } {
    if (previousValue === undefined) {
      return { trend: 'stable' };
    }

    if (previousValue === 0) {
      return { trend: 'up', change: Infinity };
    }

    const change = Math.round(((currentValue - previousValue) / previousValue) * 100 * 100) / 100; // Round to 2 decimal places
    
    let trend: 'up' | 'down' | 'stable';
    if (Math.abs(change) < 1) {
      trend = 'stable';
    } else if (change > 0) {
      trend = 'up';
    } else {
      trend = 'down';
    }

    return { trend, change };
  }

  /**
   * Merges two entities of the same domain
   * 
   * @param entity1 - First entity
   * @param entity2 - Second entity
   * @returns Merged entity with combined KPIs
   * 
   * @throws {Error} When entities are from different domains
   */
  static mergeEntities(
    entity1: UnifiedMetricsEntity,
    entity2: UnifiedMetricsEntity
  ): UnifiedMetricsEntity {
    if (entity1.domain !== entity2.domain) {
      throw new Error('Cannot merge entities from different domains');
    }

    const mergedKPIs = { ...entity1.kpis, ...entity2.kpis };
    
    return this.create(entity1.domain, mergedKPIs, entity1.id, entity1.period);
  }

  // Private helper methods

  private static validateDomain(domain: DomainType): void {
    const validDomains: DomainType[] = [
      'financial', 'commercial', 'operations', 'strategy', 
      'human-resources', 'customer-support', 'logistics'
    ];
    
    if (!validDomains.includes(domain)) {
      throw new Error('Invalid domain type');
    }
  }

  private static validateKPIs(kpis: Record<string, UnifiedKPIValue>): void {
    if (!kpis || Object.keys(kpis).length === 0) {
      throw new Error('At least one KPI is required');
    }
  }

  private static enhanceKPIs(kpis: Record<string, UnifiedKPIValue>): Record<string, UnifiedKPIValue> {
    const enhanced: Record<string, UnifiedKPIValue> = {};

    for (const [kpiCode, kpiValue] of Object.entries(kpis)) {
      enhanced[kpiCode] = {
        ...kpiValue,
        domain: (kpiValue.domain || 'financial') as DomainType, // Default domain
        confidence: kpiValue.confidence ?? 0.95,
        lastUpdated: kpiValue.lastUpdated || new Date()
      };
    }

    return enhanced;
  }

  private static calculateKPIsFromRawData(domain: DomainType, rawData: any): Record<string, UnifiedKPIValue> {
    const kpis: Record<string, UnifiedKPIValue> = {};

    // Return empty if no valid data
    if (!rawData || Object.keys(rawData).length === 0) {
      return kpis;
    }

    switch (domain) {
      case 'financial':
        if (rawData.revenue && rawData.netProfit !== undefined) {
          kpis.netProfitMargin = this.createKPIValue(
            this.calculateNetProfitMargin(rawData),
            '%',
            this.DEFAULT_THRESHOLDS.netProfitMargin
          );
        }
        if (rawData.monthlyNegativeCashFlow) {
          kpis.cashBurnRate = this.createKPIValue(
            rawData.monthlyNegativeCashFlow || 0,
            'R$',
            this.DEFAULT_THRESHOLDS.cashBurnRate
          );
        }
        if (rawData.totalCash && rawData.monthlyNegativeCashFlow) {
          kpis.runway = this.createKPIValue(
            this.calculateRunway(rawData),
            'meses',
            this.DEFAULT_THRESHOLDS.runway
          );
        }
        break;

      case 'commercial':
        if (rawData.leads && rawData.closedDeals) {
          kpis.salesConversion = this.createKPIValue(
            this.calculateSalesConversion(rawData),
            '%',
            this.DEFAULT_THRESHOLDS.salesConversion
          );
        }
        if (rawData.marketingSpend !== undefined && rawData.salesSpend !== undefined && rawData.newCustomers) {
          kpis.customerAcquisitionCost = this.createKPIValue(
            this.calculateCustomerAcquisitionCost(rawData),
            'R$',
            this.DEFAULT_THRESHOLDS.customerAcquisitionCost
          );
        }
        break;

      case 'operations':
        if (rawData.operationalEfficiency) {
          kpis.operationalEfficiency = this.createKPIValue(
            rawData.operationalEfficiency,
            '%',
            this.DEFAULT_THRESHOLDS.operationalEfficiency
          );
        }
        if (rawData.qualityRate) {
          kpis.qualityRate = this.createKPIValue(
            rawData.qualityRate,
            '%',
            this.DEFAULT_THRESHOLDS.qualityRate
          );
        }
        break;

      // Add other domains as needed
      default:
        break;
    }

    return kpis;
  }

  private static createKPIValue(
    value: number,
    unit: string,
    threshold: Threshold
  ): UnifiedKPIValue {
    return {
      value,
      unit,
      threshold,
      trend: 'stable',
      domain: 'financial' as DomainType, // Will be overridden by enhanceKPIs
      confidence: 0.95,
      lastUpdated: new Date()
    };
  }

  private static calculateNetProfitMargin(rawData: any): number {
    const { netProfit = 0, revenue = 1 } = rawData;
    return revenue > 0 ? (netProfit / revenue) * 100 : 0;
  }

  private static calculateRunway(rawData: any): number {
    const { totalCash = 0, monthlyNegativeCashFlow = 1 } = rawData;
    // monthlyNegativeCashFlow is positive in the test data (5000), representing cash burn
    const cashBurn = Math.abs(monthlyNegativeCashFlow);
    return cashBurn > 0 ? totalCash / cashBurn : 0;
  }

  private static calculateSalesConversion(rawData: any): number {
    const { closedDeals = 0, leads = 1 } = rawData;
    return leads > 0 ? (closedDeals / leads) * 100 : 0;
  }

  private static calculateCustomerAcquisitionCost(rawData: any): number {
    const { marketingSpend = 0, salesSpend = 0, newCustomers = 1 } = rawData;
    const totalSpend = marketingSpend + salesSpend;
    return newCustomers > 0 ? totalSpend / newCustomers : 0;
  }

  private static calculateHealthScore(domainMetrics: Record<DomainType, UnifiedMetricsEntity>): number {
    const domains = Object.values(domainMetrics);
    if (domains.length === 0) return 0;

    let totalScore = 0;
    let kpiCount = 0;

    for (const entity of domains) {
      for (const [kpiCode, kpi] of Object.entries(entity.kpis)) {
        const validation = this.validateKPIValue(kpiCode, kpi);
        const score = validation.status === 'good' ? 100 : 
                     validation.status === 'warning' ? 60 : 20;
        totalScore += score;
        kpiCount++;
      }
    }

    return kpiCount > 0 ? Math.round(totalScore / kpiCount) : 0;
  }

  private static createCrossDomainRelationships(
    domainMetrics: Record<DomainType, UnifiedMetricsEntity>
  ): CrossDomainRelationship[] {
    const relationships: CrossDomainRelationship[] = [];
    const availableDomains = Object.keys(domainMetrics) as DomainType[];

    for (const relationship of this.CROSS_DOMAIN_RELATIONSHIPS) {
      if (availableDomains.includes(relationship.sourceDomain) && 
          availableDomains.includes(relationship.targetDomain)) {
        relationships.push(relationship);
      }
    }

    return relationships;
  }

  private static getRecommendations(kpiCode: string, status: 'critical' | 'warning'): string[] {
    const recommendations: Record<string, Record<string, string[]>> = {
      netProfitMargin: {
        critical: [
          'Review cost structure immediately',
          'Consider price adjustments',
          'Eliminate non-essential expenses'
        ],
        warning: [
          'Monitor profit margins closely',
          'Identify optimization opportunities'
        ]
      },
      cashBurnRate: {
        critical: [
          'Reduce expenses immediately',
          'Seek additional funding',
          'Accelerate revenue generation'
        ],
        warning: [
          'Monitor cash flow projections',
          'Implement cost-saving measures'
        ]
      },
      salesConversion: {
        critical: [
          'Review sales process',
          'Provide sales training',
          'Improve lead quality'
        ],
        warning: [
          'Analyze conversion bottlenecks',
          'Optimize sales funnel'
        ]
      }
    };

    return recommendations[kpiCode]?.[status] || [
      'Investigate underlying causes',
      'Develop improvement plan',
      'Monitor trends closely'
    ];
  }
}
