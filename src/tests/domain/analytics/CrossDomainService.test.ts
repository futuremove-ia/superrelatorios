import { describe, it, expect, beforeEach } from 'vitest';
import { 
  CrossDomainService,
  CrossDomainAnalysisRequest,
  CrossDomainAnalysisResult 
} from '../../../domain/analytics/CrossDomainService';
import { KPIMetric } from '../../../domain/analytics/CrossDomainAnalyzer';
import { DomainType } from '../../../domain/core/BusinessDomain';

describe('CrossDomainService', () => {
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
    }
  ];

  describe('analyze', () => {
    it('should perform impact analysis', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'impact'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.id).toBeDefined();
      expect(result.timestamp).toBeInstanceOf(Date);
      expect(result.request).toEqual(request);
      expect(result.impacts).toBeDefined();
      expect(result.summary.totalKPIs).toBe(3);
      expect(result.summary.domainsAnalyzed).toContain('financial');
      expect(result.summary.domainsAnalyzed).toContain('commercial');
      expect(result.summary.domainsAnalyzed).toContain('operations');
    });

    it('should perform health analysis', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'health'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.health).toBeDefined();
      expect(result.health.overallScore).toBeGreaterThanOrEqual(0);
      expect(result.health.overallScore).toBeLessThanOrEqual(100);
      expect(result.summary.overallScore).toBe(result.health.overallScore);
    });

    it('should perform composite KPI analysis', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'composite'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.compositeKPIs).toBeDefined();
      expect(result.compositeKPIs!.length).toBeGreaterThan(0);
    });

    it('should perform prediction analysis', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'prediction',
        changeScenario: {
          kpiCode: 'netProfitMargin',
          domain: 'financial',
          change: 10
        }
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.predictions).toBeDefined();
      expect(result.predictions!.length).toBeGreaterThan(0);
    });

    it('should handle empty KPI list gracefully', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: [],
        analysisType: 'health'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.summary.totalKPIs).toBe(0);
      expect(result.summary.domainsAnalyzed).toHaveLength(0);
    });
  });

  describe('getRealtimeInsights', () => {
    it('should generate alerts, opportunities, and trends', async () => {
      const insights = await CrossDomainService.getRealtimeInsights(sampleKPIs);

      expect(insights.alerts).toBeDefined();
      expect(insights.opportunities).toBeDefined();
      expect(insights.trends).toBeDefined();

      insights.alerts.forEach(alert => {
        expect(['critical', 'warning', 'info']).toContain(alert.type);
        expect(alert.message).toBeDefined();
        expect(alert.domains).toBeDefined();
        expect(alert.affectedKPIs).toBeDefined();
      });

      insights.opportunities.forEach(opp => {
        expect(['growth', 'efficiency', 'cost_reduction']).toContain(opp.type);
        expect(opp.description).toBeDefined();
        expect(opp.potentialImpact).toBeGreaterThan(0);
        expect(opp.domains).toBeDefined();
      });

      insights.trends.forEach(trend => {
        expect(['improving', 'declining', 'stable']).toContain(trend.trend);
        expect(trend.domain).toBeDefined();
        expect(trend.keyDrivers).toBeDefined();
      });
    });

    it('should generate critical alerts for low performance', async () => {
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
          value: 8,
          previousValue: 12,
          change: -33.3
        }
      ];

      const insights = await CrossDomainService.getRealtimeInsights(lowPerformingKPIs);

      expect(insights.alerts.some(alert => alert.type === 'critical')).toBe(true);
    });
  });

  describe('getRelationshipMap', () => {
    it('should return domain relationship structure', () => {
      const map = CrossDomainService.getRelationshipMap();

      expect(map.domains).toHaveLength(7);
      expect(map.relationships).toHaveLength(10);
      expect(map.domains).toContain('financial');
      expect(map.domains).toContain('commercial');
      expect(map.domains).toContain('operations');
      expect(map.domains).toContain('strategy');
      expect(map.domains).toContain('human-resources');
      expect(map.domains).toContain('customer-support');
      expect(map.domains).toContain('logistics');

      map.relationships.forEach(rel => {
        expect(map.domains).toContain(rel.source);
        expect(map.domains).toContain(rel.target);
        expect(['weak', 'moderate', 'strong']).toContain(rel.strength);
        expect(['influences', 'depends_on', 'correlates_with']).toContain(rel.type);
      });
    });

    it('should include financial to commercial relationship', () => {
      const map = CrossDomainService.getRelationshipMap();

      const finToCom = map.relationships.find(
        rel => rel.source === 'financial' && rel.target === 'commercial'
      );

      expect(finToCom).toBeDefined();
      expect(finToCom!.strength).toBe('strong');
      expect(finToCom!.type).toBe('influences');
    });
  });

  describe('summary generation', () => {
    it('should include critical issues in summary', async () => {
      const lowPerformingKPIs: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 5,
          previousValue: 8,
          change: -37.5
        }
      ];

      const request: CrossDomainAnalysisRequest = {
        kpis: lowPerformingKPIs,
        analysisType: 'health'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.summary.criticalIssues.length).toBeGreaterThan(0);
      expect(result.summary.recommendations.length).toBeGreaterThan(0);
    });

    it('should count domains correctly', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'impact'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.summary.domainsAnalyzed).toHaveLength(3);
      expect(result.summary.domainsAnalyzed).toContain('financial');
      expect(result.summary.domainsAnalyzed).toContain('commercial');
      expect(result.summary.domainsAnalyzed).toContain('operations');
    });
  });

  describe('edge cases', () => {
    it('should handle prediction without change scenario', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'prediction'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.predictions).toBeDefined();
      expect(result.predictions || []).toHaveLength(0);
    });

    it('should handle prediction with non-existent KPI', async () => {
      const request: CrossDomainAnalysisRequest = {
        kpis: sampleKPIs,
        analysisType: 'prediction',
        changeScenario: {
          kpiCode: 'nonExistentKPI',
          domain: 'financial',
          change: 10
        }
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.predictions).toBeDefined();
      // Should be empty array when KPI is not found
      expect(result.predictions || []).toHaveLength(0);
    });

    it('should handle KPIs without previous values', async () => {
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

      const request: CrossDomainAnalysisRequest = {
        kpis: kpisWithoutHistory,
        analysisType: 'health'
      };

      const result = await CrossDomainService.analyze(request);

      expect(result.summary.totalKPIs).toBe(2);
      expect(() => {
        CrossDomainService.getRealtimeInsights(kpisWithoutHistory);
      }).not.toThrow();
    });
  });
});
