import { ICacheProvider } from '../cache';
import { 
  KPIMetric, 
  ImpactCalculation, 
  CompositeKPI, 
  CrossDomainHealth 
} from '../../domain/analytics';

export interface CrossDomainCacheOptions {
  ttl?: number; // Time to live in seconds
  maxSize?: number; // Maximum number of items
}

export class CrossDomainCache {
  private cache: ICacheProvider;
  private readonly defaultTTL = 3600; // 1 hour
  private readonly defaultMaxSize = 1000;

  constructor(cache: ICacheProvider, options: CrossDomainCacheOptions = {}) {
    this.cache = cache;
  }

  // Cache KPI metrics
  async cacheKPIMetrics(
    period: string, 
    kpis: KPIMetric[], 
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `kpi_metrics:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, kpis, { ttl });
  }

  async getCachedKPIMetrics(period: string): Promise<KPIMetric[] | null> {
    const key = `kpi_metrics:${period}`;
    return await this.cache.get(key) as KPIMetric[] | null;
  }

  // Cache impact calculations
  async cacheImpactCalculations(
    period: string,
    impacts: ImpactCalculation[],
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `impact_calculations:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, impacts, { ttl });
  }

  async getCachedImpactCalculations(period: string): Promise<ImpactCalculation[] | null> {
    const key = `impact_calculations:${period}`;
    return await this.cache.get(key) as ImpactCalculation[] | null;
  }

  // Cache composite KPIs
  async cacheCompositeKPIs(
    period: string,
    composites: CompositeKPI[],
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `composite_kpis:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, composites, { ttl });
  }

  async getCachedCompositeKPIs(period: string): Promise<CompositeKPI[] | null> {
    const key = `composite_kpis:${period}`;
    return await this.cache.get(key) as CompositeKPI[] | null;
  }

  // Cache cross-domain health
  async cacheCrossDomainHealth(
    period: string,
    health: CrossDomainHealth,
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `cross_domain_health:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, health, { ttl });
  }

  async getCachedCrossDomainHealth(period: string): Promise<CrossDomainHealth | null> {
    const key = `cross_domain_health:${period}`;
    return await this.cache.get(key) as CrossDomainHealth | null;
  }

  // Cache complete analytics snapshot
  async cacheAnalyticsSnapshot(
    period: string,
    analytics: {
      kpis: KPIMetric[];
      impacts: ImpactCalculation[];
      composites: CompositeKPI[];
      health: CrossDomainHealth;
    },
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `analytics_snapshot:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, analytics, { ttl });
  }

  async getCachedAnalyticsSnapshot(period: string): Promise<{
    kpis: KPIMetric[];
    impacts: ImpactCalculation[];
    composites: CompositeKPI[];
    health: CrossDomainHealth;
  } | null> {
    const key = `analytics_snapshot:${period}`;
    return await this.cache.get(key) as any;
  }

  // Cache domain-specific metrics
  async cacheDomainMetrics(
    domain: string,
    period: string,
    metrics: KPIMetric[],
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `domain_metrics:${domain}:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, metrics, { ttl });
  }

  async getCachedDomainMetrics(
    domain: string,
    period: string
  ): Promise<KPIMetric[] | null> {
    const key = `domain_metrics:${domain}:${period}`;
    return await this.cache.get(key) as KPIMetric[] | null;
  }

  // Cache impact predictions
  async cacheImpactPredictions(
    sourceKpi: string,
    sourceDomain: string,
    predictions: Array<{
      kpi: KPIMetric;
      impact: number;
      path: string[];
      confidence: number;
    }>,
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `impact_predictions:${sourceDomain}:${sourceKpi}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, predictions, { ttl });
  }

  async getCachedImpactPredictions(
    sourceKpi: string,
    sourceDomain: string
  ): Promise<Array<{
    kpi: KPIMetric;
    impact: number;
    path: string[];
    confidence: number;
  }> | null> {
    const key = `impact_predictions:${sourceDomain}:${sourceKpi}`;
    return await this.cache.get(key) as any;
  }

  // Cache composite KPI by ID
  async cacheCompositeKPI(
    compositeId: string,
    period: string,
    composite: CompositeKPI,
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `composite_kpi:${compositeId}:${period}`;
    const ttl = options.ttl || this.defaultTTL;
    
    await this.cache.set(key, composite, { ttl });
  }

  async getCachedCompositeKPI(
    compositeId: string,
    period: string
  ): Promise<CompositeKPI | null> {
    const key = `composite_kpi:${compositeId}:${period}`;
    return await this.cache.get(key) as CompositeKPI | null;
  }

  // Cache relationship strength data
  async cacheRelationshipStrength(
    sourceDomain: string,
    targetDomain: string,
    strength: 'weak' | 'moderate' | 'strong',
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const key = `relationship_strength:${sourceDomain}:${targetDomain}`;
    const ttl = options.ttl || this.defaultTTL * 24; // 24 hours for relationship data
    
    await this.cache.set(key, strength, { ttl });
  }

  async getCachedRelationshipStrength(
    sourceDomain: string,
    targetDomain: string
  ): Promise<'weak' | 'moderate' | 'strong' | null> {
    const key = `relationship_strength:${sourceDomain}:${targetDomain}`;
    return await this.cache.get(key) as 'weak' | 'moderate' | 'strong' | null;
  }

  // Batch operations for multiple periods
  async cacheMultiplePeriods(
    data: Array<{
      period: string;
      kpis: KPIMetric[];
      impacts: ImpactCalculation[];
      composites: CompositeKPI[];
      health: CrossDomainHealth;
    }>,
    options: CrossDomainCacheOptions = {}
  ): Promise<void> {
    const promises = data.map(async (item) => {
      await this.cacheAnalyticsSnapshot(item.period, item, options);
    });

    await Promise.all(promises);
  }

  async getCachedMultiplePeriods(
    periods: string[]
  ): Promise<Array<{
    period: string;
    kpis: KPIMetric[];
    impacts: ImpactCalculation[];
    composites: CompositeKPI[];
    health: CrossDomainHealth;
  } | null>> {
    const promises = periods.map(async (period) => {
      const snapshot = await this.getCachedAnalyticsSnapshot(period);
      return snapshot ? { period, ...snapshot } : null;
    });

    const results = await Promise.all(promises);
    return results.filter(result => result !== null) as Array<{
      period: string;
      kpis: KPIMetric[];
      impacts: ImpactCalculation[];
      composites: CompositeKPI[];
      health: CrossDomainHealth;
    }>;
  }

  // Invalidate cache for a specific period
  async invalidatePeriod(period: string): Promise<void> {
    const keys = [
      `kpi_metrics:${period}`,
      `impact_calculations:${period}`,
      `composite_kpis:${period}`,
      `cross_domain_health:${period}`,
      `analytics_snapshot:${period}`,
    ];

    await Promise.all(keys.map(key => this.cache.delete(key)));
  }

  // Invalidate cache for a specific domain
  async invalidateDomain(domain: string): Promise<void> {
    // This would require a scan of keys or a separate index
    // For now, we'll clear the entire cache for simplicity
    await this.cache.clear();
  }

  // Get cache statistics
  async getCacheStats(): Promise<{
    totalItems: number;
    memoryUsage: number;
    hitRate: number;
    missRate: number;
  }> {
    const stats = await this.cache.getStats();
    
    return {
      totalItems: stats.totalItems,
      memoryUsage: stats.memoryUsage,
      hitRate: stats.hitRate,
      missRate: stats.missRate,
    };
  }

  // Clear all cross-domain cache
  async clearCache(): Promise<void> {
    await this.cache.clear();
  }

  // Health check for cache
  async healthCheck(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    issues: string[];
  }> {
    try {
      const stats = await this.getCacheStats();
      const issues: string[] = [];

      // Check memory usage
      if (stats.memoryUsage > 100 * 1024 * 1024) { // 100MB
        issues.push('High memory usage');
      }

      // Check hit rate
      if (stats.hitRate < 50) {
        issues.push('Low cache hit rate');
      }

      // Check total items
      if (stats.totalItems > this.defaultMaxSize) {
        issues.push('Cache size exceeds limit');
      }

      let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';
      if (issues.length > 2) {
        status = 'unhealthy';
      } else if (issues.length > 0) {
        status = 'degraded';
      }

      return { status, issues };
    } catch (error) {
      return {
        status: 'unhealthy',
        issues: [`Cache health check failed: ${error}`]
      };
    }
  }
}
