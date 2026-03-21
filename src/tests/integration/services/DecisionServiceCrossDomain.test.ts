import { describe, it, expect, beforeEach } from 'vitest';
import { DecisionService } from '../../../services/DecisionService';

describe('DecisionService - CrossDomain Integration', () => {
  let decisionService: DecisionService;

  beforeEach(() => {
    decisionService = new DecisionService();
  });

  describe('getCrossDomainInsights', () => {
    it('should return cross-domain insights from CrossDomainService', async () => {
      const insights = await decisionService.getCrossDomainInsights('2024-01');

      expect(insights).toHaveProperty('alerts');
      expect(insights).toHaveProperty('opportunities');
      expect(insights).toHaveProperty('trends');

      expect(insights.alerts).toBeInstanceOf(Array);
      expect(insights.opportunities).toBeInstanceOf(Array);
      expect(insights.trends).toBeInstanceOf(Array);

      // Verify structure of alerts
      insights.alerts.forEach(alert => {
        expect(alert).toHaveProperty('type');
        expect(alert).toHaveProperty('message');
        expect(alert).toHaveProperty('domains');
        expect(alert).toHaveProperty('affectedKPIs');
        expect(['critical', 'warning', 'info']).toContain(alert.type);
      });

      // Verify structure of opportunities
      insights.opportunities.forEach(opp => {
        expect(opp).toHaveProperty('type');
        expect(opp).toHaveProperty('description');
        expect(opp).toHaveProperty('potentialImpact');
        expect(opp).toHaveProperty('domains');
        expect(['growth', 'efficiency', 'cost_reduction']).toContain(opp.type);
        expect(typeof opp.potentialImpact).toBe('number');
      });

      // Verify structure of trends
      insights.trends.forEach(trend => {
        expect(trend).toHaveProperty('domain');
        expect(trend).toHaveProperty('trend');
        expect(trend).toHaveProperty('keyDrivers');
        expect(['improving', 'declining', 'stable']).toContain(trend.trend);
        expect(trend.keyDrivers).toBeInstanceOf(Array);
      });
    });
  });

  describe('analyzeDecisionScenarios', () => {
    it('should analyze decision scenarios with cross-domain predictions', async () => {
      const scenarios = [
        {
          name: 'Aumentar Vendas em 20%',
          change: { kpiCode: 'salesConversion', domain: 'commercial', change: 20 },
          description: 'Aumentar conversão de vendas em 20%'
        },
        {
          name: 'Reduzir Custos em 15%',
          change: { kpiCode: 'cashBurnRate', domain: 'financial', change: -15 },
          description: 'Reduzir taxa de queima de caixa em 15%'
        }
      ];

      const results = await decisionService.analyzeDecisionScenarios(scenarios);

      expect(results).toHaveLength(2);

      results.forEach(result => {
        expect(result).toHaveProperty('scenario');
        expect(result).toHaveProperty('impacts');
        expect(result).toHaveProperty('overallRisk');
        expect(result).toHaveProperty('recommendation');

        expect(['low', 'medium', 'high']).toContain(result.overallRisk);
        expect(typeof result.recommendation).toBe('string');

        // Verify impacts structure
        result.impacts.forEach(impact => {
          expect(impact).toHaveProperty('kpi');
          expect(impact).toHaveProperty('domain');
          expect(impact).toHaveProperty('impact');
          expect(impact).toHaveProperty('confidence');
          expect(impact).toHaveProperty('path');
          expect(typeof impact.confidence).toBe('number');
          expect(impact.confidence).toBeGreaterThanOrEqual(0);
          expect(impact.confidence).toBeLessThanOrEqual(1);
          expect(impact.path).toBeInstanceOf(Array);
        });
      });
    });

    it('should handle scenarios with invalid KPIs gracefully', async () => {
      const scenarios = [
        {
          name: 'Cenário Inválido',
          change: { kpiCode: 'nonExistentKPI', domain: 'financial', change: 10 },
          description: 'Teste com KPI inexistente'
        }
      ];

      const results = await decisionService.analyzeDecisionScenarios(scenarios);

      // Should return empty array for invalid scenarios
      expect(results).toHaveLength(0);
    });

    it('should calculate risk levels correctly', async () => {
      const scenarios = [
        {
          name: 'Cenário de Alto Impacto',
          change: { kpiCode: 'netProfitMargin', domain: 'financial', change: 50 },
          description: 'Mudança significativa na margem de lucro'
        }
      ];

      const results = await decisionService.analyzeDecisionScenarios(scenarios);

      expect(results).toHaveLength(1);
      const result = results[0];
      
      // Risk should be calculated based on impacts and confidence
      expect(['low', 'medium', 'high']).toContain(result.overallRisk);
      expect(result.recommendation).toContain(result.scenario);
    });
  });

  describe('getDomainRelationshipMap', () => {
    it('should return domain relationship map', () => {
      const relationshipMap = decisionService.getDomainRelationshipMap();

      expect(relationshipMap).toHaveProperty('domains');
      expect(relationshipMap).toHaveProperty('relationships');

      expect(relationshipMap.domains).toBeInstanceOf(Array);
      expect(relationshipMap.relationships).toBeInstanceOf(Array);

      // Verify domains include expected ones
      expect(relationshipMap.domains).toContain('financial');
      expect(relationshipMap.domains).toContain('commercial');
      expect(relationshipMap.domains).toContain('operations');

      // Verify relationship structure
      relationshipMap.relationships.forEach(rel => {
        expect(rel).toHaveProperty('source');
        expect(rel).toHaveProperty('target');
        expect(rel).toHaveProperty('strength');
        expect(rel).toHaveProperty('type');
        expect(['weak', 'moderate', 'strong']).toContain(rel.strength);
        expect(['influences', 'depends_on', 'correlates_with']).toContain(rel.type);
      });
    });
  });

  describe('Integration with CrossDomainService', () => {
    it('should use CrossDomainService for health analysis', async () => {
      const analysis = await decisionService.generateDecisionAnalysis('2024-01');

      expect(analysis.insights).toBeInstanceOf(Array);
      expect(analysis.challenges).toBeInstanceOf(Array);
      expect(analysis.goals).toBeInstanceOf(Array);
      expect(analysis.levers).toBeInstanceOf(Array);
      expect(analysis.actions).toBeInstanceOf(Array);

      // Should have insights from available domains
      const domains = new Set(analysis.insights.map(i => i.domain));
      expect(domains.has('financial')).toBe(true);
      expect(domains.has('commercial')).toBe(true);
      // Operations and strategy may not have insights depending on KPI data
    });

    it('should enrich insights with cross-domain context', async () => {
      const analysis = await decisionService.generateDecisionAnalysis('2024-01');

      // Insights should have cross-domain context
      analysis.insights.forEach(insight => {
        expect(insight).toHaveProperty('domain');
        expect(insight).toHaveProperty('metrics');
        expect(insight.metrics).toBeInstanceOf(Array);
      });

      // Should have insights from domains with KPIs
      const uniqueDomains = new Set(analysis.insights.map(i => i.domain));
      expect(uniqueDomains.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Scenario Analysis Edge Cases', () => {
    it('should handle empty scenarios array', async () => {
      const results = await decisionService.analyzeDecisionScenarios([]);
      expect(results).toHaveLength(0);
    });

    it('should handle scenarios with zero change', async () => {
      const scenarios = [
        {
          name: 'Sem Mudança',
          change: { kpiCode: 'salesConversion', domain: 'commercial', change: 0 },
          description: 'Cenário sem mudança'
        }
      ];

      const results = await decisionService.analyzeDecisionScenarios(scenarios);
      expect(results).toHaveLength(1);
      
      const result = results[0];
      expect(result.scenario).toBe('Sem Mudança');
      expect(result.impacts).toBeInstanceOf(Array);
    });

    it('should generate appropriate recommendations based on risk', async () => {
      const scenarios = [
        {
          name: 'Cenário Teste',
          change: { kpiCode: 'operationalEfficiency', domain: 'operations', change: 5 },
          description: 'Pequena melhoria operacional'
        }
      ];

      const results = await decisionService.analyzeDecisionScenarios(scenarios);
      expect(results).toHaveLength(1);

      const result = results[0];
      expect(result.recommendation).toContain('Cenário Teste');
      expect(typeof result.recommendation).toBe('string');
      expect(result.recommendation.length).toBeGreaterThan(10);
    });
  });

  describe('Performance and Scalability', () => {
    it('should handle multiple scenarios efficiently', async () => {
      const scenarios = [];
      for (let i = 0; i < 5; i++) {
        scenarios.push({
          name: `Cenário ${i + 1}`,
          change: { kpiCode: 'salesConversion', domain: 'commercial', change: 10 * (i + 1) },
          description: `Descrição do cenário ${i + 1}`
        });
      }

      const startTime = Date.now();
      const results = await decisionService.analyzeDecisionScenarios(scenarios);
      const endTime = Date.now();

      expect(results).toHaveLength(5);
      expect(endTime - startTime).toBeLessThan(5000); // Should complete within 5 seconds
    });
  });
});
