import { describe, it, expect } from 'vitest';
import { DecisionEngine } from '../../../../domain/decision/DecisionEngine';
import { KPIMetric } from '../../../../domain/analytics';

describe('DecisionEngine', () => {
  describe('analyze', () => {
    it('should generate insights from KPIs', () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 12,
          previousValue: 10,
          change: 20
        },
        {
          domain: 'commercial',
          kpiCode: 'salesConversion',
          value: 18,
          previousValue: 15,
          change: 20
        }
      ];

      const insights = DecisionEngine.analyze(kpis);

      expect(insights.length).toBeGreaterThanOrEqual(3); // trend, anomaly, opportunity, risk (some may not be generated)
      expect(insights[0]).toHaveProperty('id');
      expect(insights[0]).toHaveProperty('type');
      expect(insights[0]).toHaveProperty('title');
      expect(insights[0]).toHaveProperty('description');
      expect(insights[0]).toHaveProperty('impact');
      expect(insights[0]).toHaveProperty('confidence');
      expect(insights[0]).toHaveProperty('severity');
      expect(insights[0]).toHaveProperty('generatedAt');
      expect(insights[0]).toHaveProperty('domain');
      expect(insights[0]).toHaveProperty('value');
    });

    it('should prioritize insights by impact and confidence', () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 5, // Low value, high impact
          previousValue: 10,
          change: -50
        },
        {
          domain: 'commercial',
          kpiCode: 'salesConversion',
          value: 30, // High value, opportunity
          previousValue: 20,
          change: 50
        }
      ];

      const insights = DecisionEngine.analyze(kpis);

      // Should be sorted by impact * confidence
      expect(insights[0].impact * insights[0].confidence).toBeGreaterThanOrEqual(
        insights[1].impact * insights[1].confidence
      );
    });
  });

  describe('prioritize', () => {
    it('should prioritize insights correctly', () => {
      const insights = [
        {
          id: 'insight-1',
          type: 'risk' as const,
          title: 'High risk',
          description: 'Critical risk',
          metrics: ['kpi1'],
          impact: 90,
          confidence: 95,
          severity: 'critical' as const,
          generatedAt: new Date(),
          domain: 'financial',
          value: 5
        },
        {
          id: 'insight-2',
          type: 'opportunity' as const,
          title: 'Medium opportunity',
          description: 'Good opportunity',
          metrics: ['kpi2'],
          impact: 60,
          confidence: 80,
          severity: 'medium' as const,
          generatedAt: new Date(),
          domain: 'commercial',
          value: 20
        }
      ];

      const prioritized = DecisionEngine.prioritize(insights);

      expect(prioritized).toHaveLength(2);
      expect(prioritized[0].score).toBeGreaterThan(prioritized[1].score);
      expect(prioritized[0].priority).toBe('critical');
      expect(prioritized[1].priority).toBe('medium');
    });
  });

  describe('generateChallenges', () => {
    it('should generate challenges from insights', () => {
      const insights = [
        {
          id: 'insight-1',
          type: 'risk' as const,
          title: 'Low profit margin',
          description: 'Profit margin is too low',
          metrics: ['netProfitMargin'],
          impact: 80,
          confidence: 90,
          severity: 'critical' as const,
          generatedAt: new Date(),
          domain: 'financial',
          value: 5
        }
      ];

      const challenges = DecisionEngine.generateChallenges(insights);

      expect(challenges).toHaveLength(1);
      expect(challenges[0]).toHaveProperty('id');
      expect(challenges[0]).toHaveProperty('title');
      expect(challenges[0]).toHaveProperty('description');
      expect(challenges[0]).toHaveProperty('category');
      expect(challenges[0]).toHaveProperty('targetValue');
      expect(challenges[0]).toHaveProperty('currentValue');
      expect(challenges[0]).toHaveProperty('gap');
      expect(challenges[0]).toHaveProperty('timeframe');
      expect(challenges[0]).toHaveProperty('priority');
      expect(challenges[0]).toHaveProperty('insights');
      expect(challenges[0]).toHaveProperty('domain');
    });
  });

  describe('setGoals', () => {
    it('should set SMART goals from challenges', () => {
      const challenges = [
        {
          id: 'challenge-1',
          title: 'Reduce costs',
          description: 'Reduce operational costs',
          category: 'cost_reduction' as const,
          targetValue: 100000,
          currentValue: 150000,
          gap: 50000,
          timeframe: '90 dias',
          priority: 'high' as const,
          insights: ['insight-1'],
          domain: 'financial'
        }
      ];

      const goals = DecisionEngine.setGoals(challenges);

      expect(goals).toHaveLength(1);
      expect(goals[0]).toHaveProperty('id');
      expect(goals[0]).toHaveProperty('title');
      expect(goals[0]).toHaveProperty('description');
      expect(goals[0]).toHaveProperty('type');
      expect(goals[0]).toHaveProperty('target');
      expect(goals[0]).toHaveProperty('baseline');
      expect(goals[0]).toHaveProperty('progress');
      expect(goals[0]).toHaveProperty('status');
      expect(goals[0]).toHaveProperty('challenges');
      expect(goals[0]).toHaveProperty('domain');
    });
  });

  describe('identifyLevers', () => {
    it('should identify levers to achieve goals', () => {
      const goals = [
        {
          id: 'goal-1',
          title: 'Increase sales conversion',
          description: 'Improve sales conversion rate',
          type: 'smart_goal' as const,
          target: {
            value: 25,
            unit: '%',
            deadline: new Date()
          },
          baseline: {
            value: 15,
            unit: '%',
            date: new Date()
          },
          progress: 0,
          status: 'not_started' as const,
          challenges: ['challenge-1'],
          domain: 'commercial'
        }
      ];

      const levers = DecisionEngine.identifyLevers(goals);

      expect(levers.length).toBeGreaterThan(0);
      expect(levers[0]).toHaveProperty('id');
      expect(levers[0]).toHaveProperty('title');
      expect(levers[0]).toHaveProperty('description');
      expect(levers[0]).toHaveProperty('type');
      expect(levers[0]).toHaveProperty('impact');
      expect(levers[0]).toHaveProperty('effort');
      expect(levers[0]).toHaveProperty('roi');
      expect(levers[0]).toHaveProperty('dependencies');
      expect(levers[0]).toHaveProperty('owner');
      expect(levers[0]).toHaveProperty('timeframe');
      expect(levers[0]).toHaveProperty('domain');
    });
  });

  describe('planActions', () => {
    it('should plan concrete actions from levers', () => {
      const levers = [
        {
          id: 'marketing-optimization',
          title: 'Optimize marketing campaigns',
          description: 'Improve marketing campaign performance',
          type: 'process' as const,
          impact: 80,
          effort: 60,
          roi: 1.33,
          dependencies: ['marketing-team'],
          owner: 'marketing-manager',
          timeframe: '30-60 dias',
          domain: 'commercial'
        }
      ];

      const actions = DecisionEngine.planActions(levers);

      expect(actions.length).toBeGreaterThan(0);
      expect(actions[0]).toHaveProperty('id');
      expect(actions[0]).toHaveProperty('title');
      expect(actions[0]).toHaveProperty('description');
      expect(actions[0]).toHaveProperty('type');
      expect(actions[0]).toHaveProperty('priority');
      expect(actions[0]).toHaveProperty('status');
      expect(actions[0]).toHaveProperty('assignee');
      expect(actions[0]).toHaveProperty('dueDate');
      expect(actions[0]).toHaveProperty('estimatedHours');
      expect(actions[0]).toHaveProperty('dependencies');
      expect(actions[0]).toHaveProperty('expectedOutcome');
      expect(actions[0]).toHaveProperty('metrics');
      expect(actions[0]).toHaveProperty('domain');
      expect(actions[0]).toHaveProperty('steps');
    });
  });

  describe('end-to-end flow', () => {
    it('should complete full decision flow', () => {
      const kpis: KPIMetric[] = [
        {
          domain: 'financial',
          kpiCode: 'netProfitMargin',
          value: 8, // Low profit margin
          previousValue: 12,
          change: -33
        },
        {
          domain: 'commercial',
          kpiCode: 'salesConversion',
          value: 12, // Low conversion
          previousValue: 15,
          change: -20
        }
      ];

      // Step 1: Analyze KPIs
      const insights = DecisionEngine.analyze(kpis);
      expect(insights.length).toBeGreaterThan(0);

      // Step 2: Prioritize insights
      const prioritizedInsights = DecisionEngine.prioritize(insights);
      expect(prioritizedInsights.length).toBe(insights.length);

      // Step 3: Generate challenges
      const challenges = DecisionEngine.generateChallenges(insights);
      expect(challenges.length).toBeGreaterThan(0);

      // Step 4: Set goals
      const goals = DecisionEngine.setGoals(challenges);
      expect(goals.length).toBe(challenges.length);

      // Step 5: Identify levers
      const levers = DecisionEngine.identifyLevers(goals);
      expect(levers.length).toBeGreaterThan(0);

      // Step 6: Plan actions
      const actions = DecisionEngine.planActions(levers);
      expect(actions.length).toBeGreaterThan(0);

      // Verify flow consistency
      expect(actions[0].domain).toBe(goals[0].domain);
      expect(goals[0].challenges).toContain(challenges[0].id);
      expect(challenges[0].insights.length).toBeGreaterThan(0);
      expect(insights.length).toBeGreaterThan(0);
    });
  });
});
