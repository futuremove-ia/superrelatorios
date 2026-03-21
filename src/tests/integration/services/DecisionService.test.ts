import { describe, it, expect, beforeEach } from 'vitest';
import { DecisionService } from '../../../services/DecisionService';

describe('DecisionService', () => {
  let decisionService: DecisionService;

  beforeEach(() => {
    decisionService = new DecisionService();
  });

  describe('generateDecisionAnalysis', () => {
    it('should generate complete decision analysis', async () => {
      const result = await decisionService.generateDecisionAnalysis('2024-01');

      expect(result).toHaveProperty('insights');
      expect(result).toHaveProperty('challenges');
      expect(result).toHaveProperty('goals');
      expect(result).toHaveProperty('levers');
      expect(result).toHaveProperty('actions');
      expect(result).toHaveProperty('summary');

      expect(result.insights).toBeInstanceOf(Array);
      expect(result.challenges).toBeInstanceOf(Array);
      expect(result.goals).toBeInstanceOf(Array);
      expect(result.levers).toBeInstanceOf(Array);
      expect(result.actions).toBeInstanceOf(Array);

      expect(result.summary).toHaveProperty('totalInsights');
      expect(result.summary).toHaveProperty('criticalInsights');
      expect(result.summary).toHaveProperty('highPriorityActions');
      expect(result.summary).toHaveProperty('estimatedImpact');
      expect(result.summary).toHaveProperty('timeframe');
    });

    it('should filter insights by options', async () => {
      const options = {
        priority: 'critical' as const,
        domains: ['financial']
      };

      const result = await decisionService.generateDecisionAnalysis('2024-01', options);

      // Should only include critical insights from financial domain
      result.insights.forEach(insight => {
        expect(insight.severity).toBe('critical');
        expect(insight.domain).toBe('financial');
      });
    });

    it('should filter by timeframe', async () => {
      const options = {
        timeframe: 'short' as const
      };

      const result = await decisionService.generateDecisionAnalysis('2024-01', options);

      // Actions should be within short timeframe (7 days)
      result.actions.forEach(action => {
        const daysUntilDue = (action.dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
        expect(daysUntilDue).toBeLessThanOrEqual(7);
      });
    });
  });

  describe('getPrioritizedInsights', () => {
    it('should return prioritized insights', async () => {
      const insights = await decisionService.getPrioritizedInsights('2024-01');

      expect(insights).toBeInstanceOf(Array);
      
      if (insights.length > 1) {
        // Should be sorted by score (descending)
        for (let i = 0; i < insights.length - 1; i++) {
          expect(insights[i].score).toBeGreaterThanOrEqual(insights[i + 1].score);
        }
      }

      insights.forEach(prioritizedAction => {
        expect(prioritizedAction).toHaveProperty('insight');
        expect(prioritizedAction).toHaveProperty('score');
        expect(prioritizedAction).toHaveProperty('priority');
        expect(prioritizedAction).toHaveProperty('urgency');
      });
    });

    it('should filter insights by priority', async () => {
      const options = {
        priority: 'critical' as const
      };

      const insights = await decisionService.getPrioritizedInsights('2024-01', options);

      insights.forEach(prioritizedAction => {
        expect(prioritizedAction.priority).toBe('critical');
      });
    });
  });

  describe('getDomainChallenges', () => {
    it('should return challenges for specific domain', async () => {
      const challenges = await decisionService.getDomainChallenges('financial', '2024-01');

      expect(challenges).toBeInstanceOf(Array);
      
      challenges.forEach(challenge => {
        expect(challenge).toHaveProperty('id');
        expect(challenge).toHaveProperty('title');
        expect(challenge).toHaveProperty('description');
        expect(challenge).toHaveProperty('category');
        expect(challenge).toHaveProperty('targetValue');
        expect(challenge).toHaveProperty('currentValue');
        expect(challenge).toHaveProperty('gap');
        expect(challenge).toHaveProperty('timeframe');
        expect(challenge).toHaveProperty('priority');
        expect(challenge).toHaveProperty('insights');
        expect(challenge).toHaveProperty('domain');
        expect(challenge.domain).toBe('financial');
      });
    });
  });

  describe('getActionPlan', () => {
    it('should return action plan for specific goal', async () => {
      // First get a goal ID from the analysis
      const analysis = await decisionService.generateDecisionAnalysis('2024-01');
      const goalId = analysis.goals[0]?.id;

      if (goalId) {
        const actions = await decisionService.getActionPlan(goalId, '2024-01');

        expect(actions).toBeInstanceOf(Array);
        
        actions.forEach(action => {
          expect(action).toHaveProperty('id');
          expect(action).toHaveProperty('title');
          expect(action).toHaveProperty('description');
          expect(action).toHaveProperty('type');
          expect(action).toHaveProperty('priority');
          expect(action).toHaveProperty('status');
          expect(action).toHaveProperty('assignee');
          expect(action).toHaveProperty('dueDate');
          expect(action).toHaveProperty('estimatedHours');
          expect(action).toHaveProperty('dependencies');
          expect(action).toHaveProperty('expectedOutcome');
          expect(action).toHaveProperty('metrics');
          expect(action).toHaveProperty('domain');
          expect(action).toHaveProperty('steps');
        });
      }
    });

    it('should throw error for invalid goal ID', async () => {
      await expect(decisionService.getActionPlan('invalid-goal-id', '2024-01'))
        .rejects.toThrow('Goal invalid-goal-id not found');
    });
  });

  describe('getDecisionDashboard', () => {
    it('should return dashboard data', async () => {
      const dashboard = await decisionService.getDecisionDashboard('2024-01');

      expect(dashboard).toHaveProperty('overview');
      expect(dashboard).toHaveProperty('insights');
      expect(dashboard).toHaveProperty('actions');
      expect(dashboard).toHaveProperty('trends');

      expect(dashboard.overview).toHaveProperty('totalInsights');
      expect(dashboard.overview).toHaveProperty('criticalInsights');
      expect(dashboard.overview).toHaveProperty('activeGoals');
      expect(dashboard.overview).toHaveProperty('inProgressActions');

      expect(dashboard.insights).toHaveProperty('byType');
      expect(dashboard.insights).toHaveProperty('byDomain');
      expect(dashboard.insights).toHaveProperty('bySeverity');

      expect(dashboard.actions).toHaveProperty('byPriority');
      expect(dashboard.actions).toHaveProperty('byStatus');
      expect(dashboard.actions).toHaveProperty('byDomain');

      expect(dashboard.trends).toHaveProperty('insights');
      expect(dashboard.trends).toHaveProperty('actions');

      // Verify data types
      expect(typeof dashboard.overview.totalInsights).toBe('number');
      expect(typeof dashboard.overview.criticalInsights).toBe('number');
      expect(typeof dashboard.overview.activeGoals).toBe('number');
      expect(typeof dashboard.overview.inProgressActions).toBe('number');

      // Verify trend data structure
      expect(dashboard.trends.insights).toBeInstanceOf(Array);
      expect(dashboard.trends.actions).toBeInstanceOf(Array);
      
      dashboard.trends.insights.forEach(trend => {
        expect(trend).toHaveProperty('date');
        expect(trend).toHaveProperty('count');
      });

      dashboard.trends.actions.forEach(trend => {
        expect(trend).toHaveProperty('date');
        expect(trend).toHaveProperty('completed');
        expect(trend).toHaveProperty('created');
      });
    });
  });

  describe('getRecommendations', () => {
    it('should return recommendations', async () => {
      const recommendations = await decisionService.getRecommendations('2024-01', 3);

      expect(recommendations).toBeInstanceOf(Array);
      expect(recommendations.length).toBeLessThanOrEqual(3);

      recommendations.forEach(rec => {
        expect(rec).toHaveProperty('type');
        expect(rec).toHaveProperty('priority');
        expect(rec).toHaveProperty('title');
        expect(rec).toHaveProperty('description');
        expect(rec).toHaveProperty('impact');
        expect(rec).toHaveProperty('effort');
        expect(rec).toHaveProperty('timeframe');
        expect(rec).toHaveProperty('actions');

        expect(['immediate', 'short_term', 'medium_term', 'long_term']).toContain(rec.type);
        expect(['low', 'medium', 'high', 'critical']).toContain(rec.priority);
        expect(typeof rec.impact).toBe('number');
        expect(typeof rec.effort).toBe('number');
        expect(rec.actions).toBeInstanceOf(Array);
      });
    });

    it('should respect limit parameter', async () => {
      const recommendations = await decisionService.getRecommendations('2024-01', 2);
      expect(recommendations.length).toBeLessThanOrEqual(2);
    });
  });

  describe('update methods', () => {
    it('should update action status', async () => {
      // Should not throw
      await expect(decisionService.updateActionStatus('action-1', 'in_progress', 8))
        .resolves.not.toThrow();
    });

    it('should update goal progress', async () => {
      // Should not throw
      await expect(decisionService.updateGoalProgress('goal-1', 75, 'in_progress'))
        .resolves.not.toThrow();
    });
  });

  describe('end-to-end integration', () => {
    it('should complete full decision workflow', async () => {
      // Step 1: Generate analysis
      const analysis = await decisionService.generateDecisionAnalysis('2024-01');
      expect(analysis.insights.length).toBeGreaterThan(0);

      // Step 2: Get prioritized insights
      const prioritized = await decisionService.getPrioritizedInsights('2024-01');
      expect(prioritized.length).toBe(analysis.insights.length);

      // Step 3: Get dashboard
      const dashboard = await decisionService.getDecisionDashboard('2024-01');
      expect(dashboard.overview.totalInsights).toBe(analysis.insights.length);

      // Step 4: Get recommendations
      const recommendations = await decisionService.getRecommendations('2024-01');
      expect(recommendations.length).toBeGreaterThan(0);

      // Step 5: Update action status
      if (analysis.actions.length > 0) {
        await decisionService.updateActionStatus(analysis.actions[0].id, 'in_progress');
      }

      // Step 6: Update goal progress
      if (analysis.goals.length > 0) {
        await decisionService.updateGoalProgress(analysis.goals[0].id, 25);
      }

      // All steps should complete without errors
      expect(true).toBe(true);
    });
  });
});
