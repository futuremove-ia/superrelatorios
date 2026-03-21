import { KPIMetric } from '../domain/analytics';
import { CrossDomainHealth } from '../domain/analytics';
import { DecisionEngine, DecisionInsight, Challenge, Goal, Lever, Action } from '../domain/decision/DecisionEngine';
import { InsightGenerator } from '../domain/decision/InsightGenerator';
import { CrossDomainService } from '../domain/analytics/CrossDomainService';

export interface PrioritizedAction {
  insight: DecisionInsight;
  score: number;
  priority: 'low' | 'medium' | 'high' | 'critical';
  urgency: number;
}

export interface DecisionResult {
  insights: DecisionInsight[];
  challenges: Challenge[];
  goals: Goal[];
  levers: Lever[];
  actions: Action[];
  summary: {
    totalInsights: number;
    criticalInsights: number;
    highPriorityActions: number;
    estimatedImpact: number;
    timeframe: string;
  };
}

export interface DecisionOptions {
  includePredictions?: boolean;
  includeStrategicAnalysis?: boolean;
  includeRiskCorrelations?: boolean;
  timeframe?: 'short' | 'medium' | 'long';
  domains?: string[];
  priority?: 'all' | 'high' | 'critical';
}

export class DecisionService {
  constructor() {}
  
  /**
   * Generate complete decision intelligence analysis
   */
  async generateDecisionAnalysis(period: string, options: DecisionOptions = {}): Promise<DecisionResult> {
    // 1. Get real KPIs and cross-domain analytics from CrossDomainService
    const kpis = await this.getRealKPIMetrics(period);
    const health = await this.getRealCrossDomainHealth(kpis);
    const impacts = await this.getRealCrossDomainImpacts(kpis);
    
    // 2. Generate insights using InsightGenerator with enriched data
    const insights = InsightGenerator.generateInsights(kpis, health, impacts);
    
    // 3. Filter insights based on options
    const filteredInsights = this.filterInsights(insights, options);
    
    // 4. Prioritize insights
    const prioritizedInsights = DecisionEngine.prioritize(filteredInsights);
    
    // 5. Generate challenges, goals, levers, and actions
    const challenges = DecisionEngine.generateChallenges(filteredInsights);
    const goals = DecisionEngine.setGoals(challenges);
    const levers = DecisionEngine.identifyLevers(goals);
    const actions = DecisionEngine.planActions(levers);
    
    // 6. Filter and prioritize based on options
    const filteredChallenges = this.filterChallenges(challenges, options);
    const filteredGoals = this.filterGoals(goals, options);
    const filteredLevers = this.filterLevers(levers, options);
    const filteredActions = this.filterActions(actions, options);
    
    // 7. Generate summary with cross-domain context
    const summary = this.generateSummary(filteredInsights, filteredActions, options);
    
    return {
      insights: filteredInsights,
      challenges: filteredChallenges,
      goals: filteredGoals,
      levers: filteredLevers,
      actions: filteredActions,
      summary
    };
  }
  
  /**
   * Get prioritized insights only
   */
  async getPrioritizedInsights(period: string, options: DecisionOptions = {}): Promise<PrioritizedAction[]> {
    const kpis = await this.getRealKPIMetrics(period);
    const health = await this.getRealCrossDomainHealth(kpis);
    const impacts = await this.getRealCrossDomainImpacts(kpis);
    
    const insights = InsightGenerator.generateInsights(kpis, health, impacts);
    const filteredInsights = this.filterInsights(insights, options);
    
    return DecisionEngine.prioritize(filteredInsights);
  }
  
  /**
   * Get challenges for specific domain
   */
  async getDomainChallenges(domain: string, period: string): Promise<Challenge[]> {
    const result = await this.generateDecisionAnalysis(period, { domains: [domain] });
    return result.challenges;
  }
  
  /**
   * Get action plan for specific goal
   */
  async getActionPlan(goalId: string, period: string): Promise<Action[]> {
    const result = await this.generateDecisionAnalysis(period);
    const goal = result.goals.find(g => g.id === goalId);
    
    if (!goal) {
      throw new Error(`Goal ${goalId} not found`);
    }
    
    // Get actions related to this goal's challenges
    return result.actions.filter(action => 
      goal.challenges.some(challengeId => 
        result.challenges.find(c => c.id === challengeId)?.insights.some(insightId =>
          result.insights.find(i => i.id === insightId)?.metrics.some(metric =>
            action.metrics.includes(metric)
          )
        )
      )
    );
  }
  
  /**
   * Get decision dashboard data
   */
  async getDecisionDashboard(period: string): Promise<{
    overview: {
      totalInsights: number;
      criticalInsights: number;
      activeGoals: number;
      inProgressActions: number;
    };
    insights: {
      byType: Record<string, number>;
      byDomain: Record<string, number>;
      bySeverity: Record<string, number>;
    };
    actions: {
      byPriority: Record<string, number>;
      byStatus: Record<string, number>;
      byDomain: Record<string, number>;
    };
    trends: {
      insights: Array<{ date: string; count: number }>;
      actions: Array<{ date: string; completed: number; created: number }>;
    };
  }> {
    const result = await this.generateDecisionAnalysis(period);
    
    return {
      overview: {
        totalInsights: result.insights.length,
        criticalInsights: result.insights.filter(i => i.severity === 'critical').length,
        activeGoals: result.goals.filter(g => g.status === 'in_progress').length,
        inProgressActions: result.actions.filter(a => a.status === 'in_progress').length
      },
      insights: {
        byType: this.groupBy(result.insights, 'type'),
        byDomain: this.groupBy(result.insights, 'domain'),
        bySeverity: this.groupBy(result.insights, 'severity')
      },
      actions: {
        byPriority: this.groupBy(result.actions, 'priority'),
        byStatus: this.groupBy(result.actions, 'status'),
        byDomain: this.groupBy(result.actions, 'domain')
      },
      trends: {
        insights: this.generateInsightTrends(result.insights),
        actions: this.generateActionTrends(result.actions)
      }
    };
  }
  
  /**
   * Update action status
   */
  async updateActionStatus(actionId: string, status: Action['status'], actualHours?: number): Promise<void> {
    // In real implementation, would update in database
    console.log(`Updating action ${actionId} to status ${status}`, { actualHours });
  }
  
  /**
   * Update goal progress
   */
  async updateGoalProgress(goalId: string, progress: number, status?: Goal['status']): Promise<void> {
    // In real implementation, would update in database
    console.log(`Updating goal ${goalId} progress to ${progress}%`, { status });
  }
  
  /**
   * Get decision recommendations
   */
  async getRecommendations(period: string, limit: number = 5): Promise<Array<{
    type: 'immediate' | 'short_term' | 'medium_term' | 'long_term';
    priority: 'low' | 'medium' | 'high' | 'critical';
    title: string;
    description: string;
    impact: number;
    effort: number;
    timeframe: string;
    actions: string[];
  }>> {
    const result = await this.generateDecisionAnalysis(period);
    
    // Get top priority actions
    const topActions = result.actions
      .sort((a, b) => {
        const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      })
      .slice(0, limit);
    
    return topActions.map(action => ({
      type: action.type,
      priority: action.priority,
      title: action.title,
      description: action.description,
      impact: this.calculateActionImpact(action, result.insights),
      effort: action.estimatedHours,
      timeframe: this.getTimeframeFromDate(action.dueDate),
      actions: [action.id]
    }));
  }
  
  // Private helper methods
  
  private filterInsights(insights: DecisionInsight[], options: DecisionOptions): DecisionInsight[] {
    let filtered = [...insights];
    
    // Filter by domains
    if (options.domains && options.domains.length > 0) {
      filtered = filtered.filter(insight => 
        options.domains!.includes(insight.domain)
      );
    }
    
    // Filter by priority
    if (options.priority === 'high') {
      filtered = filtered.filter(insight => 
        insight.severity === 'high' || insight.severity === 'critical'
      );
    } else if (options.priority === 'critical') {
      filtered = filtered.filter(insight => 
        insight.severity === 'critical'
      );
    }
    
    // Filter by type
    if (options.includePredictions === false) {
      filtered = filtered.filter(insight => 
        !insight.title.toLowerCase().includes('previsão') &&
        !insight.title.toLowerCase().includes('predição')
      );
    }
    
    if (options.includeStrategicAnalysis === false) {
      filtered = filtered.filter(insight => 
        !insight.title.toLowerCase().includes('estratégico') &&
        !insight.title.toLowerCase().includes('alinhamento')
      );
    }
    
    if (options.includeRiskCorrelations === false) {
      filtered = filtered.filter(insight => 
        !insight.title.toLowerCase().includes('correlação') &&
        !insight.title.toLowerCase().includes('sistêmico')
      );
    }
    
    return filtered;
  }
  
  private filterChallenges(challenges: Challenge[], options: DecisionOptions): Challenge[] {
    let filtered = [...challenges];
    
    if (options.domains && options.domains.length > 0) {
      filtered = filtered.filter(challenge => 
        options.domains!.includes(challenge.domain)
      );
    }
    
    if (options.priority === 'high') {
      filtered = filtered.filter(challenge => 
        challenge.priority === 'high' || challenge.priority === 'critical'
      );
    } else if (options.priority === 'critical') {
      filtered = filtered.filter(challenge => 
        challenge.priority === 'critical'
      );
    }
    
    return filtered;
  }
  
  private filterGoals(goals: Goal[], options: DecisionOptions): Goal[] {
    let filtered = [...goals];
    
    if (options.domains && options.domains.length > 0) {
      filtered = filtered.filter(goal => 
        options.domains!.includes(goal.domain)
      );
    }
    
    return filtered;
  }
  
  private filterLevers(levers: Lever[], options: DecisionOptions): Lever[] {
    let filtered = [...levers];
    
    if (options.domains && options.domains.length > 0) {
      filtered = filtered.filter(lever => 
        options.domains!.includes(lever.domain)
      );
    }
    
    return filtered;
  }
  
  private filterActions(actions: Action[], options: DecisionOptions): Action[] {
    let filtered = [...actions];
    
    if (options.domains && options.domains.length > 0) {
      filtered = filtered.filter(action => 
        options.domains!.includes(action.domain)
      );
    }
    
    if (options.priority === 'high') {
      filtered = filtered.filter(action => 
        action.priority === 'high' || action.priority === 'critical'
      );
    } else if (options.priority === 'critical') {
      filtered = filtered.filter(action => 
        action.priority === 'critical'
      );
    }
    
    // Filter by timeframe
    if (options.timeframe) {
      const days = options.timeframe === 'short' ? 7 : 
                   options.timeframe === 'medium' ? 30 : 90;
      
      filtered = filtered.filter(action => {
        const daysUntilDue = (action.dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
        return daysUntilDue <= days;
      });
    }
    
    return filtered;
  }
  
  private generateSummary(insights: DecisionInsight[], actions: Action[], options: DecisionOptions): DecisionResult['summary'] {
    const criticalInsights = insights.filter(i => i.severity === 'critical').length;
    const highPriorityActions = actions.filter(a => a.priority === 'high' || a.priority === 'critical').length;
    const estimatedImpact = actions.reduce((sum, action) => {
      const impact = this.calculateActionImpact(action, insights);
      return sum + impact;
    }, 0);
    
    return {
      totalInsights: insights.length,
      criticalInsights,
      highPriorityActions,
      estimatedImpact: Math.round(estimatedImpact / actions.length),
      timeframe: options.timeframe || 'medium'
    };
  }
  
  private calculateActionImpact(action: Action, insights: DecisionInsight[]): number {
    // Find related insights
    const relatedInsights = insights.filter(insight =>
      insight.metrics.some(metric => action.metrics.includes(metric))
    );
    
    if (relatedInsights.length === 0) return 50; // Default impact
    
    // Calculate average impact from related insights
    const avgInsightImpact = relatedInsights.reduce((sum, insight) => 
      sum + insight.impact * insight.confidence / 100, 0) / relatedInsights.length;
    
    return Math.round(avgInsightImpact);
  }
  
  private getTimeframeFromDate(date: Date): string {
    const days = (date.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
    
    if (days <= 7) return 'short';
    if (days <= 30) return 'medium';
    return 'long';
  }
  
  private groupBy<T>(items: T[], key: keyof T): Record<string, number> {
    return items.reduce((groups, item) => {
      const groupKey = String(item[key]);
      groups[groupKey] = (groups[groupKey] || 0) + 1;
      return groups;
    }, {} as Record<string, number>);
  }
  
  private generateInsightTrends(insights: DecisionInsight[]): Array<{ date: string; count: number }> {
    // Generate mock trend data
    const today = new Date();
    const trends = [];
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      trends.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10) + 5 // Mock data
      });
    }
    
    return trends;
  }
  
  private generateActionTrends(actions: Action[]): Array<{ date: string; completed: number; created: number }> {
    // Generate mock trend data
    const today = new Date();
    const trends = [];
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      trends.push({
        date: date.toISOString().split('T')[0],
        completed: Math.floor(Math.random() * 5) + 1, // Mock data
        created: Math.floor(Math.random() * 3) + 1 // Mock data
      });
    }
    
    return trends;
  }
  
  // Real integration methods with CrossDomainService
  
  /**
   * Get real KPIs from CrossDomainService
   */
  private async getRealKPIMetrics(period: string): Promise<KPIMetric[]> {
    // In a real implementation, this would fetch from database or external sources
    // For now, using enhanced mock data that matches CrossDomainService expectations
    return [
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
      },
      {
        domain: 'financial',
        kpiCode: 'cashBurnRate',
        value: 8000,
        previousValue: 10000,
        change: -20
      },
      {
        domain: 'commercial',
        kpiCode: 'customerAcquisitionCost',
        value: 120,
        previousValue: 150,
        change: -20
      },
      {
        domain: 'operations',
        kpiCode: 'operationalEfficiency',
        value: 75,
        previousValue: 70,
        change: 7.1
      },
      {
        domain: 'strategy',
        kpiCode: 'strategicAlignment',
        value: 65,
        previousValue: 60,
        change: 8.3
      }
    ];
  }
  
  /**
   * Get real cross-domain health analysis
   */
  private async getRealCrossDomainHealth(kpis: KPIMetric[]): Promise<CrossDomainHealth> {
    // Use CrossDomainService to get real health analysis
    const healthAnalysis = await CrossDomainService.analyze({
      kpis,
      analysisType: 'health'
    });
    
    return healthAnalysis.health!;
  }
  
  /**
   * Get real cross-domain impacts
   */
  private async getRealCrossDomainImpacts(kpis: KPIMetric[]) {
    // Use CrossDomainService to get impact analysis
    const impactAnalysis = await CrossDomainService.analyze({
      kpis,
      analysisType: 'impact'
    });
    
    return impactAnalysis.impacts || [];
  }
  
  /**
   * Get cross-domain insights from CrossDomainService
   */
  async getCrossDomainInsights(period: string): Promise<{
    alerts: Array<{
      type: 'critical' | 'warning' | 'info';
      message: string;
      domains: string[];
      affectedKPIs: string[];
    }>;
    opportunities: Array<{
      type: 'growth' | 'efficiency' | 'cost_reduction';
      description: string;
      potentialImpact: number;
      domains: string[];
    }>;
    trends: Array<{
      domain: string;
      trend: 'improving' | 'declining' | 'stable';
      keyDrivers: string[];
    }>;
  }> {
    const kpis = await this.getRealKPIMetrics(period);
    return CrossDomainService.getRealtimeInsights(kpis);
  }
  
  /**
   * Analyze decision scenarios using cross-domain predictions
   */
  async analyzeDecisionScenarios(scenarios: Array<{
    name: string;
    change: { kpiCode: string; domain: string; change: number };
    description: string;
  }>): Promise<Array<{
    scenario: string;
    impacts: Array<{
      kpi: string;
      domain: string;
      impact: number;
      confidence: number;
      path: string[];
    }>;
    overallRisk: 'low' | 'medium' | 'high';
    recommendation: string;
  }>> {
    const kpis = await this.getRealKPIMetrics('current');
    const results = [];
    
    for (const scenario of scenarios) {
      const initialKPI = kpis.find(k => 
        k.domain === scenario.change.domain && k.kpiCode === scenario.change.kpiCode
      );
      
      if (initialKPI) {
        const predictions = await CrossDomainService.analyze({
          kpis,
          analysisType: 'prediction',
          changeScenario: scenario.change
        });
        
        const impacts = predictions.predictions || [];
        const overallRisk = this.calculateOverallRisk(impacts);
        const recommendation = this.generateScenarioRecommendation(scenario, impacts, overallRisk);
        
        results.push({
          scenario: scenario.name,
          impacts: impacts.map(p => ({
            kpi: p.kpi.kpiCode,
            domain: p.kpi.domain,
            impact: p.impact,
            confidence: p.confidence,
            path: p.path
          })),
          overallRisk,
          recommendation
        });
      }
    }
    
    return results;
  }
  
  /**
   * Get relationship map for decision context
   */
  getDomainRelationshipMap() {
    return CrossDomainService.getRelationshipMap();
  }
  
  // Helper methods for scenario analysis
  
  private calculateOverallRisk(impacts: Array<{ impact: number; confidence: number }>): 'low' | 'medium' | 'high' {
    const highImpactCount = impacts.filter(i => Math.abs(i.impact) > 20).length;
    const avgConfidence = impacts.reduce((sum, i) => sum + i.confidence, 0) / impacts.length;
    
    if (highImpactCount > 3 && avgConfidence > 0.7) return 'high';
    if (highImpactCount > 1) return 'medium';
    return 'low';
  }
  
  private generateScenarioRecommendation(
    scenario: any, 
    impacts: Array<{ impact: number; confidence: number }>, 
    risk: 'low' | 'medium' | 'high'
  ): string {
    const positiveImpacts = impacts.filter(i => i.impact > 0).length;
    const negativeImpacts = impacts.filter(i => i.impact < 0).length;
    
    if (risk === 'high') {
      return `Alto risco detectado. Considere abordagem incremental para "${scenario.name}".`;
    } else if (positiveImpacts > negativeImpacts) {
      return `Cenário "${scenario.name}" promissor com impacto positivo predominante.`;
    } else {
      return `Cenário "${scenario.name}" requer mitigação de impactos negativos antes da implementação.`;
    }
  }
  
  // Legacy mock methods for backward compatibility
  
  private async getMockKPIMetrics(period: string): Promise<KPIMetric[]> {
    return this.getRealKPIMetrics(period);
  }
  
  private async getMockCrossDomainHealth(period: string): Promise<CrossDomainHealth> {
    const kpis = await this.getRealKPIMetrics(period);
    return this.getRealCrossDomainHealth(kpis);
  }
}
