import { describe, it, expect, beforeEach } from 'vitest';
import { 
  CrossDomainAnalyzer,
  KPIMetric,
  ImpactCalculation,
  CompositeKPI,
  CrossDomainHealth 
} from '../../../domain/analytics/CrossDomainAnalyzer';
import { DomainType } from '../../../domain/core/BusinessDomain';

describe('CrossDomainAnalyzer', () => {
  const sampleKPIs: KPIMetric[] = [
    {
      domain: 'financial',
      kpiCode: 'netProfitMargin',
      value: 15,
      previousValue: 12,
      change: 25
    },
    {
      domain: 'commercial',
      kpiCode: 'salesConversion',
      value: 20,
      previousValue: 18,
      change: 11.1
    },
    {
      domain: 'operations',
      kpiCode: 'operationalEfficiency',
      value: 85,
      previousValue: 80,
      change: 6.25
    },
    {
      domain: 'strategy',
      kpiCode: 'okrProgress',
      value: 75,
      previousValue: 70,
      change: 7.14
    }
  ];

  describe('calculateImpact', () => {
    it('should calculate impact between related domains', () => {
      const sourceKPI = sampleKPIs[0]; // financial
      const targetKPI = sampleKPIs[1]; // commercial
      const change = 10;

      const result = CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, change);

      expect(result.sourceKPI).toBe('netProfitMargin');
      expect(result.targetKPI).toBe('salesConversion');
      expect(result.sourceDomain).toBe('financial');
      expect(result.targetDomain).toBe('commercial');
      expect(result.relationship.relationship).toBe('influences');
      expect(result.relationship.strength).toBe('strong');
      expect(result.impact).toBeGreaterThan(0);
      expect(result.confidence).toBeGreaterThan(0);
      expect(result.confidence).toBeLessThanOrEqual(1);
    });

    it('should return low impact for unrelated domains', () => {
      const sourceKPI: KPIMetric = {
        domain: 'logistics',
        kpiCode: 'deliveryTime',
        value: 24,
        previousValue: 20,
        change: 20
      };
      const targetKPI: KPIMetric = {
        domain: 'strategy',
        kpiCode: 'okrProgress',
        value: 75,
        previousValue: 70,
        change: 7.14
      };

      const result = CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, 10);

      expect(result.impact).toBe(0);
      expect(result.confidence).toBeLessThan(0.5);
    });

    it('should use different methodologies based on relationship strength', () => {
      const sourceKPI = sampleKPIs[0]; // financial
      const targetKPI = sampleKPIs[1]; // commercial
      const change = 10;

      const result = CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, change);

      // Strong relationship should use exponential methodology
      expect(result.methodology).toBe('exponential');
    });
  });

  describe('calculateCompositeKPI', () => {
    it('should calculate composite KPI across multiple domains', () => {
      const result = CrossDomainAnalyzer.calculateCompositeKPI(
        sampleKPIs,
        'weighted_average'
      );

      expect(result.domains).toContain('financial');
      expect(result.domains).toContain('commercial');
      expect(result.domains).toContain('operations');
      expect(result.domains).toContain('strategy');
      expect(result.value).toBeGreaterThan(0);
      expect(result.threshold).toBeDefined();
      expect(result.trend).toBeDefined();
    });

    it('should handle empty KPI list gracefully', () => {
      const result = CrossDomainAnalyzer.calculateCompositeKPI([], 'weighted_average');

      expect(result.value).toBe(0);
      expect(result.domains).toHaveLength(0);
      expect(result.kpis).toHaveLength(0);
    });
  });

  describe('analyzeCrossDomainHealth', () => {
    it('should analyze overall health across domains', () => {
      const result = CrossDomainAnalyzer.analyzeCrossDomainHealth(sampleKPIs);

      expect(result.overallScore).toBeGreaterThanOrEqual(0);
      expect(result.overallScore).toBeLessThanOrEqual(100);
      expect(result.domainScores.size).toBe(4);
      expect(result.criticalRelationships).toBeDefined();
      expect(result.recommendations).toBeDefined();
    });

    it('should identify critical relationships', () => {
      const result = CrossDomainAnalyzer.analyzeCrossDomainHealth(sampleKPIs);

      result.criticalRelationships.forEach(rel => {
        expect(rel.relationship).toBeDefined();
        expect(rel.health).toBeGreaterThanOrEqual(0);
        expect(rel.health).toBeLessThanOrEqual(100);
        expect(['low', 'medium', 'high']).toContain(rel.risk);
      });
    });

    it('should generate meaningful recommendations', () => {
      const result = CrossDomainAnalyzer.analyzeCrossDomainHealth(sampleKPIs);

      expect(result.recommendations.length).toBeGreaterThan(0);
      result.recommendations.forEach(rec => {
        expect(rec.length).toBeGreaterThan(0);
      });
    });

    it('should handle low-performing domains', () => {
      const lowPerformingKPIs: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 5,
          previousValue: 8,
          change: -37.5
        },
        {
          domain: 'commercial',
          kpiCode: 'salesConversion',
          value: 10,
          previousValue: 15,
          change: -33.3
        }
      ];

      const result = CrossDomainAnalyzer.analyzeCrossDomainHealth(lowPerformingKPIs);

      expect(result.overallScore).toBeLessThan(50);
      expect(result.recommendations.some(r => r.includes('Crítico'))).toBe(true);
    });
  });

  describe('predictCascadeImpact', () => {
    it('should predict cascade impacts across domains', () => {
      const initialChange = {
        kpi: sampleKPIs[0], // financial netProfitMargin
        change: 10
      };

      const results = CrossDomainAnalyzer.predictCascadeImpact(initialChange, sampleKPIs, 2);

      expect(results.length).toBeGreaterThan(0);
      results.forEach(result => {
        expect(result.kpi).toBeDefined();
        expect(result.impact).toBeDefined();
        expect(result.path).toBeDefined();
        expect(result.confidence).toBeGreaterThanOrEqual(0);
        expect(result.confidence).toBeLessThanOrEqual(1);
      });
    });

    it('should limit prediction depth', () => {
      const initialChange = {
        kpi: sampleKPIs[0],
        change: 10
      };

      const shallowResults = CrossDomainAnalyzer.predictCascadeImpact(initialChange, sampleKPIs, 1);
      const deepResults = CrossDomainAnalyzer.predictCascadeImpact(initialChange, sampleKPIs, 3);

      expect(deepResults.length).toBeGreaterThanOrEqual(shallowResults.length);
    });

    it('should sort results by impact magnitude', () => {
      const initialChange = {
        kpi: sampleKPIs[0],
        change: 10
      };

      const results = CrossDomainAnalyzer.predictCascadeImpact(initialChange, sampleKPIs, 2);

      for (let i = 1; i < results.length; i++) {
        expect(Math.abs(results[i-1].impact)).toBeGreaterThanOrEqual(Math.abs(results[i].impact));
      }
    });
  });

  describe('edge cases', () => {
    it('should handle KPIs without previous values', () => {
      const kpisWithoutHistory: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 15
        },
        {
          domain: 'commercial',
          kpiCode: 'salesConversion',
          value: 20
        }
      ];

      expect(() => {
        CrossDomainAnalyzer.analyzeCrossDomainHealth(kpisWithoutHistory);
      }).not.toThrow();
    });

    it('should handle unknown domain relationships', () => {
      const sourceKPI: KPIMetric = {
        domain: 'logistics',
        kpiCode: 'deliveryTime',
        value: 24
      };
      const targetKPI: KPIMetric = {
        domain: 'human-resources',
        kpiCode: 'employeeProductivity',
        value: 85
      };

      const result = CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, 10);

      expect(result.relationship.relationship).toBe('correlates_with');
      expect(result.relationship.strength).toBe('weak');
    });

    it('should handle zero values gracefully', () => {
      const zeroKPIs: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 0,
          previousValue: 0
        },
        {
          domain: 'commercial',
          kpiCode: 'salesConversion',
          value: 0,
          previousValue: 0
        }
      ];

      expect(() => {
        CrossDomainAnalyzer.analyzeCrossDomainHealth(zeroKPIs);
      }).not.toThrow();
    });
  });

  describe('confidence calculation', () => {
    it('should calculate higher confidence for strong relationships', () => {
      const sourceKPI = sampleKPIs[0]; // financial
      const targetKPI = sampleKPIs[1]; // commercial
      const change = 10;

      const result = CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, change);

      // Strong relationship should have higher confidence
      expect(result.confidence).toBeGreaterThan(0.7);
    });

    it('should calculate lower confidence for weak relationships', () => {
      const sourceKPI: KPIMetric = {
        domain: 'logistics',
        kpiCode: 'deliveryTime',
        value: 24,
        previousValue: 20
      };
      const targetKPI: KPIMetric = {
        domain: 'human-resources',
        kpiCode: 'employeeProductivity',
        value: 85,
        previousValue: 80
      };

      const result = CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, 10);

      // Weak relationship should have lower confidence
      expect(result.confidence).toBeLessThan(0.5);
    });
  });
});
