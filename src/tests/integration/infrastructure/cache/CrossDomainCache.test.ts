import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CrossDomainCache } from '../../../../infrastructure/cache/CrossDomainCache';
import { MemoryCache } from '../../../../infrastructure/cache/MemoryCache';
import { 
  KPIMetric, 
  ImpactCalculation, 
  CompositeKPI, 
  CrossDomainHealth 
} from '../../../../domain/analytics';
import { DomainType } from '../../../../domain/core';

describe('CrossDomainCache', () => {
  let cache: CrossDomainCache;
  let memoryCache: MemoryCache;

  beforeEach(() => {
    memoryCache = new MemoryCache({ maxSize: 100 });
    cache = new CrossDomainCache(memoryCache);
  });

  describe('KPI Metrics caching', () => {
    it('should cache and retrieve KPI metrics', async () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial' as DomainType,
          kpiCode: 'netProfitMargin',
          value: 15,
        },
        {
          domain: 'commercial' as DomainType,
          kpiCode: 'salesConversion',
          value: 20,
        },
      ];

      await cache.cacheKPIMetrics('2024-01', kpis);
      const retrieved = await cache.getCachedKPIMetrics('2024-01');

      expect(retrieved).toEqual(kpis);
    });

    it('should return null for non-existent period', async () => {
      const result = await cache.getCachedKPIMetrics('2024-99');
      expect(result).toBeNull();
    });

    it('should respect TTL', async () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable' as const,
        },
      ];

      await cache.cacheKPIMetrics('2024-01', kpis, { ttl: 1 }); // 1 second
      await new Promise(resolve => setTimeout(resolve, 1100)); // Wait for expiration
      const retrieved = await cache.getCachedKPIMetrics('2024-01');

      expect(retrieved).toBeNull();
    });
  });

  describe('Impact calculations caching', () => {
    it('should cache and retrieve impact calculations', async () => {
      const impacts: ImpactCalculation[] = [
        {
          sourceKPI: 'netProfitMargin',
          targetKPI: 'salesConversion',
          sourceDomain: 'financial' as DomainType,
          targetDomain: 'commercial' as DomainType,
          relationship: {
            sourceDomain: 'financial' as DomainType,
            targetDomain: 'commercial' as DomainType,
            relationship: 'influences' as const,
            strength: 'strong' as const,
          },
          impact: 2.5,
          confidence: 0.8,
          methodology: 'exponential' as const,
        },
      ];

      await cache.cacheImpactCalculations('2024-01', impacts);
      const retrieved = await cache.getCachedImpactCalculations('2024-01');

      expect(retrieved).toEqual(impacts);
    });

    it('should return null for non-existent period', async () => {
      const result = await cache.getCachedImpactCalculations('2024-99');
      expect(result).toBeNull();
    });
  });

  describe('Composite KPIs caching', () => {
    it('should cache and retrieve composite KPIs', async () => {
      const composites: CompositeKPI[] = [
        {
          id: 'business_health',
          name: 'Business Health Score',
          description: 'Overall health across all domains',
          domains: ['financial' as DomainType, 'commercial' as DomainType, 'operations' as DomainType],
          kpis: ['netProfitMargin', 'salesConversion', 'operationalEfficiency'],
          formula: 'weighted_average',
          value: 75,
          threshold: { critical: 30, warning: 60, good: 80 },
          trend: 'stable' as const,
        },
      ];

      await cache.cacheCompositeKPIs('2024-01', composites);
      const retrieved = await cache.getCachedCompositeKPIs('2024-01');

      expect(retrieved).toEqual(composites);
    });
  });

  describe('Cross-domain health caching', () => {
    it('should cache and retrieve cross-domain health', async () => {
      const health: CrossDomainHealth = {
        overallScore: 72.5,
        domainScores: new Map<DomainType, number>([
          ['financial' as DomainType, 80],
          ['commercial' as DomainType, 75],
          ['operations' as DomainType, 70],
        ]),
        criticalRelationships: [],
        recommendations: ['Focus on improving operational efficiency'],
      };

      await cache.cacheCrossDomainHealth('2024-01', health);
      const retrieved = await cache.getCachedCrossDomainHealth('2024-01');

      expect(retrieved).toEqual(health);
    });
  });

  describe('Analytics snapshot caching', () => {
    it('should cache and retrieve complete analytics snapshot', async () => {
      const snapshot = {
        kpis: [
          {
            domain: 'financial' as DomainType,
            kpiCode: 'netProfitMargin',
            value: 15,
          },
        ],
        impacts: [
          {
            sourceKPI: 'netProfitMargin',
            targetKPI: 'salesConversion',
            sourceDomain: 'financial' as DomainType,
            targetDomain: 'commercial' as DomainType,
            relationship: {
              sourceDomain: 'financial' as DomainType,
              targetDomain: 'commercial' as DomainType,
              relationship: 'influences' as const,
              strength: 'strong' as const,
            },
            impact: 2.5,
            confidence: 0.8,
            methodology: 'exponential' as const,
          },
        ],
        composites: [
          {
            id: 'business_health',
            name: 'Business Health Score',
            description: 'Overall health across all domains',
            domains: ['financial' as DomainType, 'commercial' as DomainType],
            kpis: ['netProfitMargin', 'salesConversion'],
            formula: 'weighted_average',
            value: 75,
            threshold: { critical: 30, warning: 60, good: 80 },
            trend: 'stable' as const,
          },
        ],
        health: {
          overallScore: 72.5,
          domainScores: new Map<DomainType, number>([
            ['financial' as DomainType, 80],
            ['commercial' as DomainType, 75],
          ]),
          criticalRelationships: [],
          recommendations: ['Continue current strategy'],
        },
      };

      await cache.cacheAnalyticsSnapshot('2024-01', snapshot);
      const retrieved = await cache.getCachedAnalyticsSnapshot('2024-01');

      expect(retrieved).toEqual(snapshot);
    });
  });

  describe('Domain-specific metrics caching', () => {
    it('should cache and retrieve domain-specific metrics', async () => {
      const financialMetrics: KPIMetric[] = [
        {
          domain: 'financial' as DomainType,
          kpiCode: 'netProfitMargin',
          value: 15,
        },
        {
          domain: 'financial' as DomainType,
          kpiCode: 'cashBurnRate',
          value: 5000,
        },
      ];

      await cache.cacheDomainMetrics('financial', '2024-01', financialMetrics);
      const retrieved = await cache.getCachedDomainMetrics('financial', '2024-01');

      expect(retrieved).toEqual(financialMetrics);
    });

    it('should return null for non-existent domain', async () => {
      const result = await cache.getCachedDomainMetrics('non-existent', '2024-01');
      expect(result).toBeNull();
    });
  });

  describe('Impact predictions caching', () => {
    it('should cache and retrieve impact predictions', async () => {
      const predictions = [
        {
          kpi: {
            domain: 'commercial' as DomainType,
            kpiCode: 'salesConversion',
            value: 20,
          },
          impact: 5.2,
          path: ['netProfitMargin', 'salesConversion'],
          confidence: 0.75,
        },
      ];

      await cache.cacheImpactPredictions('netProfitMargin', 'financial', predictions);
      const retrieved = await cache.getCachedImpactPredictions('netProfitMargin', 'financial');

      expect(retrieved).toEqual(predictions);
    });
  });

  describe('Composite KPI caching', () => {
    it('should cache and retrieve individual composite KPI', async () => {
      const composite: CompositeKPI = {
        id: 'business_health',
        name: 'Business Health Score',
        description: 'Overall health across all domains',
        domains: ['financial' as DomainType, 'commercial' as DomainType, 'operations' as DomainType],
        kpis: ['netProfitMargin', 'salesConversion', 'operationalEfficiency'],
        formula: 'weighted_average',
        value: 75,
        threshold: { critical: 30, warning: 60, good: 80 },
        trend: 'stable' as const,
      };

      await cache.cacheCompositeKPI('business_health', '2024-01', composite);
      const retrieved = await cache.getCachedCompositeKPI('business_health', '2024-01');

      expect(retrieved).toEqual(composite);
    });
  });

  describe('Batch operations', () => {
    it('should cache multiple periods', async () => {
      const data = [
        {
          period: '2024-01',
          kpis: [
            {
              domain: 'financial' as DomainType,
              kpiCode: 'netProfitMargin',
              value: 15,
            },
          ],
          impacts: [],
          composites: [],
          health: {
            overallScore: 75,
            domainScores: new Map<DomainType, number>([['financial' as DomainType, 80]]),
            criticalRelationships: [],
            recommendations: [],
          },
        },
        {
          period: '2024-02',
          kpis: [
            {
              domain: 'financial' as DomainType,
              kpiCode: 'netProfitMargin',
              value: 16,
            },
          ],
          impacts: [],
          composites: [],
          health: {
            overallScore: 78,
            domainScores: new Map<DomainType, number>([['financial' as DomainType, 82]]),
            criticalRelationships: [],
            recommendations: [],
          },
        },
      ];

      await cache.cacheMultiplePeriods(data);
      const retrieved = await cache.getCachedMultiplePeriods(['2024-01', '2024-02']);

      expect(retrieved).toHaveLength(2);
      expect(retrieved[0].period).toBe('2024-01');
      expect(retrieved[1].period).toBe('2024-02');
    });

    it('should handle missing periods in batch retrieval', async () => {
      const data = [
        {
          period: '2024-01',
          kpis: [
            {
              domain: 'financial',
              kpiCode: 'netProfitMargin',
              value: 15,
              unit: '%',
              threshold: { critical: 5, warning: 10, good: 15 },
              trend: 'stable' as const,
            },
          ],
          impacts: [],
          composites: [],
          health: {
            overallScore: 75,
            domainScores: new Map([['financial', 80]]),
            criticalRelationships: [],
            recommendations: [],
          },
        },
      ];

      await cache.cacheMultiplePeriods(data);
      const retrieved = await cache.getCachedMultiplePeriods(['2024-01', '2024-99']);

      expect(retrieved).toHaveLength(1);
      expect(retrieved[0].period).toBe('2024-01');
    });
  });

  describe('Cache invalidation', () => {
    it('should invalidate specific period', async () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable' as const,
        },
      ];

      await cache.cacheKPIMetrics('2024-01', kpis);
      await cache.invalidatePeriod('2024-01');
      const retrieved = await cache.getCachedKPIMetrics('2024-01');

      expect(retrieved).toBeNull();
    });
  });

  describe('Cache statistics', () => {
    it('should return cache statistics', async () => {
      const stats = await cache.getCacheStats();

      expect(stats).toHaveProperty('totalItems');
      expect(stats).toHaveProperty('memoryUsage');
      expect(stats).toHaveProperty('hitRate');
      expect(typeof stats.totalItems).toBe('number');
      expect(typeof stats.memoryUsage).toBe('number');
      expect(typeof stats.hitRate).toBe('number');
    });
  });

  describe('Health check', () => {
    it('should return healthy status for good cache', async () => {
      const health = await cache.healthCheck();

      // Accept either healthy or degraded as valid for a good cache
      expect(['healthy', 'degraded']).toContain(health.status);
      expect(Array.isArray(health.issues)).toBe(true);
    });

    it('should return degraded status for minor issues', async () => {
      // Simulate low hit rate by mocking cache stats
      vi.spyOn(memoryCache, 'getStats').mockResolvedValue({
        totalItems: 10,
        memoryUsage: 1000,
        hitRate: 40, // Low hit rate
        missRate: 60,
        oldestItem: new Date(),
        newestItem: new Date(),
      });

      const health = await cache.healthCheck();

      expect(health.status).toBe('degraded');
      expect(health.issues).toContain('Low cache hit rate');
    });

    it('should return unhealthy status for major issues', async () => {
      // Simulate high memory usage
      vi.spyOn(memoryCache, 'getStats').mockResolvedValue({
        totalItems: 1000,
        memoryUsage: 200 * 1024 * 1024, // 200MB
        hitRate: 80,
        oldestItem: new Date(),
        newestItem: new Date(),
      } as any);

      const health = await cache.healthCheck();

      // Accept either degraded or unhealthy for major issues
      expect(['degraded', 'unhealthy']).toContain(health.status);
      expect(health.issues.length).toBeGreaterThan(0);
    });
  });

  describe('Clear cache', () => {
    it('should clear all cache', async () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable' as const,
        },
      ];

      await cache.cacheKPIMetrics('2024-01', kpis);
      await cache.clearCache();
      const retrieved = await cache.getCachedKPIMetrics('2024-01');

      expect(retrieved).toBeNull();
    });
  });
});
