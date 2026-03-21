import { 
  UnifiedMetricsEntity, 
  DomainType,
  UnifiedKPIValue 
} from '../interfaces/UnifiedMetricsEntity';
import { UnifiedMetricsRepository } from '../../../infrastructure/persistence/repositories/UnifiedMetricsRepository';
import { UnifiedMetricsFactory } from '../factories/UnifiedMetricsFactory';

/**
 * Unified Metrics Service - Single service for all domain metrics operations
 * 
 * This service consolidates all domain-specific services into a single,
 * unified business logic layer following Clean Architecture principles. It handles
 * all high-level metrics operations, business rules, and orchestrations.
 * 
 * @example
 * ```typescript
 * const service = new UnifiedMetricsService(repository);
 * await service.saveMetrics(unifiedEntity);
 * const healthSummary = await service.getMetricsHealthSummary('2024-01');
 * ```
 */
export class UnifiedMetricsService {
  constructor(private readonly repository: UnifiedMetricsRepository) {}

  /**
   * Saves a metrics entity
   * 
   * @param entity - The metrics entity to save
   * @returns The saved entity
   * @throws Error when save operation fails
   */
  async saveMetrics(entity: UnifiedMetricsEntity): Promise<UnifiedMetricsEntity> {
    try {
      // Business validation before saving
      this.validateEntity(entity);
      
      return await this.repository.save(entity);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to save metrics');
    }
  }

  /**
   * Gets metrics by ID
   * 
   * @param id - The entity ID
   * @returns The metrics entity or null if not found
   */
  async getMetricsById(id: string): Promise<UnifiedMetricsEntity | null> {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get metrics by ID');
    }
  }

  /**
   * Gets metrics by domain
   * 
   * @param domain - The domain type
   * @param options - Optional filtering options
   * @returns Array of metrics entities
   */
  async getMetricsByDomain(
    domain: DomainType, 
    options?: {
      startPeriod?: string;
      endPeriod?: string;
    }
  ): Promise<UnifiedMetricsEntity[]> {
    try {
      return await this.repository.findByDomain(domain, options);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get metrics by domain');
    }
  }

  /**
   * Gets cross-domain metrics for a period
   * 
   * @param period - The period to search for
   * @returns Array of metrics entities from all domains
   */
  async getCrossDomainMetrics(period: string): Promise<UnifiedMetricsEntity[]> {
    try {
      return await this.repository.findCrossDomain(period);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get cross-domain metrics');
    }
  }

  /**
   * Gets latest metrics by domain
   * 
   * @param domain - The domain type
   * @returns The latest metrics entity or null if not found
   */
  async getLatestMetricsByDomain(domain: DomainType): Promise<UnifiedMetricsEntity | null> {
    try {
      return await this.repository.getLatestByDomain(domain);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get latest metrics');
    }
  }

  /**
   * Deletes metrics by ID
   * 
   * @param id - The entity ID to delete
   * @returns True if deleted successfully, false if not found
   */
  async deleteMetrics(id: string): Promise<boolean> {
    try {
      return await this.repository.delete(id);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to delete metrics');
    }
  }

  /**
   * Updates metrics entity
   * 
   * @param entity - The entity to update
   * @returns The updated entity
   */
  async updateMetrics(entity: UnifiedMetricsEntity): Promise<UnifiedMetricsEntity> {
    try {
      // Business validation before updating
      this.validateEntity(entity);
      
      return await this.repository.update(entity);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to update metrics');
    }
  }

  /**
   * Gets comprehensive health summary for cross-domain metrics
   * 
   * @param period - The period to analyze
   * @returns Health summary with overall status and domain breakdown
   */
  async getMetricsHealthSummary(period: string): Promise<{
    period: string;
    totalDomains: number;
    healthScore: number;
    domainBreakdown: Record<DomainType, {
      healthScore: number;
      kpiCount: number;
      status: 'critical' | 'warning' | 'good' | 'unknown';
    }>;
    overallStatus: 'critical' | 'warning' | 'good' | 'unknown';
  }> {
    try {
      const entities = await this.repository.findCrossDomain(period);
      
      if (entities.length === 0) {
        return {
          period,
          totalDomains: 0,
          healthScore: 0,
          domainBreakdown: {} as Record<DomainType, {
            healthScore: number;
            kpiCount: number;
            status: 'critical' | 'warning' | 'good' | 'unknown';
          }>,
          overallStatus: 'unknown'
        };
      }

      const domainBreakdown: Record<DomainType, {
        healthScore: number;
        kpiCount: number;
        status: 'critical' | 'warning' | 'good' | 'unknown';
      }> = {} as Record<DomainType, {
        healthScore: number;
        kpiCount: number;
        status: 'critical' | 'warning' | 'good' | 'unknown';
      }>;
      let totalHealthScore = 0;
      let domainCount = 0;

      for (const entity of entities) {
        const healthScore = this.calculateEntityHealthScore(entity);
        const status = this.getHealthStatus(healthScore);
        
        domainBreakdown[entity.domain] = {
          healthScore,
          kpiCount: Object.keys(entity.kpis).length,
          status
        };
        
        totalHealthScore += healthScore;
        domainCount++;
      }

      const averageHealthScore = domainCount > 0 ? totalHealthScore / domainCount : 0;
      const overallStatus = this.getHealthStatus(averageHealthScore);

      return {
        period,
        totalDomains: domainCount,
        healthScore: Math.round(averageHealthScore),
        domainBreakdown,
        overallStatus
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get metrics health summary');
    }
  }

  /**
   * Gets metrics trends for a domain across multiple periods
   * 
   * @param domain - The domain type
   * @param periods - Array of periods to analyze
   * @returns Trend analysis with current/previous values and changes
   */
  async getMetricsTrends(
    domain: DomainType, 
    periods: string[]
  ): Promise<{
    domain: DomainType;
    periods: string[];
    trends: Record<string, {
      current: number;
      previous: number;
      change: number;
      direction: 'up' | 'down' | 'stable';
    }>;
  }> {
    try {
      const entities = await this.repository.findByPeriods(periods);
      const domainEntities = entities.filter(e => e.domain === domain);
      
      const trends: Record<string, {
        current: number;
        previous: number;
        change: number;
        direction: 'up' | 'down' | 'stable';
      }> = {};

      // Sort entities by period
      domainEntities.sort((a, b) => a.period.localeCompare(b.period));

      for (let i = 1; i < domainEntities.length; i++) {
        const current = domainEntities[i];
        const previous = domainEntities[i - 1];

        for (const [kpiCode, currentKpi] of Object.entries(current.kpis)) {
          const previousKpi = previous.kpis[kpiCode];
          
          if (previousKpi) {
            const change = this.calculatePercentageChange(previousKpi.value, currentKpi.value);
            const direction = this.getTrendDirection(change);

            trends[kpiCode] = {
              current: currentKpi.value,
              previous: previousKpi.value,
              change: Math.round(change * 100) / 100,
              direction
            };
          }
        }
      }

      return {
        domain,
        periods,
        trends
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get metrics trends');
    }
  }

  /**
   * Gets domain summary statistics
   * 
   * @param domain - The domain type
   * @param startPeriod - Start period for analysis
   * @param endPeriod - End period for analysis
   * @returns Domain summary with record counts and periods
   */
  async getDomainSummary(
    domain: DomainType,
    startPeriod: string,
    endPeriod: string
  ): Promise<{
    totalRecords: number;
    periods: string[];
    latestPeriod: string | null;
  }> {
    try {
      return await this.repository.getDomainSummary(domain, startPeriod, endPeriod);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to get domain summary');
    }
  }

  // Private helper methods

  /**
   * Validates a metrics entity before save/update operations
   * 
   * @param entity - The entity to validate
   * @throws Error when validation fails
   */
  private validateEntity(entity: UnifiedMetricsEntity): void {
    if (!entity.id) {
      throw new Error('Entity ID is required');
    }

    if (!entity.domain) {
      throw new Error('Entity domain is required');
    }

    if (!entity.period) {
      throw new Error('Entity period is required');
    }

    if (!entity.kpis || Object.keys(entity.kpis).length === 0) {
      throw new Error('Entity must have at least one KPI');
    }

    // Validate each KPI
    for (const [kpiCode, kpi] of Object.entries(entity.kpis)) {
      if (typeof kpi.value !== 'number' || isNaN(kpi.value)) {
        throw new Error(`KPI ${kpiCode} must have a valid numeric value`);
      }

      if (!kpi.threshold) {
        throw new Error(`KPI ${kpiCode} must have threshold values`);
      }
    }
  }

  /**
   * Calculates health score for a metrics entity
   * 
   * @param entity - The metrics entity
   * @returns Health score (0-100)
   */
  private calculateEntityHealthScore(entity: UnifiedMetricsEntity): number {
    const kpis = Object.values(entity.kpis);
    
    if (kpis.length === 0) {
      return 0;
    }

    let totalScore = 0;
    let validKpis = 0;

    for (const kpi of kpis) {
      // Validate KPI value against thresholds
      const validation = UnifiedMetricsFactory.validateKPIValue(
        Object.keys(entity.kpis).find(key => entity.kpis[key] === kpi) || '',
        kpi
      );

      if (validation.isValid) {
        if (validation.status === 'good') {
          totalScore += 100;
        } else if (validation.status === 'warning') {
          totalScore += 50;
        } else {
          totalScore += 25;
        }
        validKpis++;
      }
    }

    return validKpis > 0 ? Math.round(totalScore / validKpis) : 0;
  }

  /**
   * Determines health status based on score
   * 
   * @param score - Health score (0-100)
   * @returns Health status
   */
  private getHealthStatus(score: number): 'critical' | 'warning' | 'good' | 'unknown' {
    if (score >= 80) {
      return 'good';
    } else if (score >= 50) {
      return 'warning';
    } else if (score > 0) {
      return 'critical';
    }
    return 'unknown';
  }

  /**
   * Calculates percentage change between two values
   * 
   * @param previous - Previous value
   * @param current - Current value
   * @returns Percentage change
   */
  private calculatePercentageChange(previous: number, current: number): number {
    if (previous === 0) {
      return current > 0 ? 100 : 0;
    }
    return ((current - previous) / Math.abs(previous)) * 100;
  }

  /**
   * Determines trend direction based on percentage change
   * 
   * @param change - Percentage change
   * @returns Trend direction
   */
  private getTrendDirection(change: number): 'up' | 'down' | 'stable' {
    if (Math.abs(change) < 0.5) {
      return 'stable';
    } else if (change > 0) {
      return 'up';
    }
    return 'down';
  }
}
