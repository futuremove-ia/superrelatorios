import { KPIMetric } from '../analytics';
import { CrossDomainHealth } from '../analytics';

export interface DecisionInsight {
  id: string;
  type: 'trend' | 'anomaly' | 'opportunity' | 'risk';
  title: string;
  description: string;
  metrics: string[];
  impact: number; // 0-100
  confidence: number; // 0-100
  severity: 'low' | 'medium' | 'high' | 'critical';
  generatedAt: Date;
  domain: string;
  value: number;
  crossDomainData?: {
    impacts: any[];
    health: CrossDomainHealth;
    composites: any[];
  };
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'cost_reduction' | 'revenue_growth' | 'efficiency' | 'risk_mitigation';
  targetValue: number;
  currentValue: number;
  gap: number;
  timeframe: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  insights: string[];
  domain: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  type: 'smart_goal';
  target: {
    value: number;
    unit: string;
    deadline: Date;
  };
  baseline: {
    value: number;
    unit: string;
    date: Date;
  };
  progress: number; // 0-100
  status: 'not_started' | 'in_progress' | 'completed' | 'delayed';
  challenges: string[];
  domain: string;
}

export interface Lever {
  id: string;
  title: string;
  description: string;
  type: 'process' | 'technology' | 'people' | 'strategy';
  impact: number; // 0-100
  effort: number; // 0-100
  roi: number;
  dependencies: string[];
  owner: string;
  timeframe: string;
  domain: string;
}

export interface Action {
  id: string;
  title: string;
  description: string;
  type: 'immediate' | 'short_term' | 'medium_term' | 'long_term';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'planned' | 'in_progress' | 'completed' | 'blocked' | 'cancelled';
  assignee: string;
  dueDate: Date;
  estimatedHours: number;
  actualHours?: number;
  dependencies: string[];
  expectedOutcome: string;
  metrics: string[];
  domain: string;
  steps: ActionStep[];
}

export interface ActionStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  assignee?: string;
  estimatedHours: number;
  actualHours?: number;
  dueDate?: Date;
}

export class DecisionEngine {
  /**
   * Analyze KPIs and generate intelligent insights
   */
  static analyze(kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // 1. Trend Analysis
    const trendInsights = this.analyzeTrends(kpis);
    insights.push(...trendInsights);
    
    // 2. Anomaly Detection
    const anomalyInsights = this.detectAnomalies(kpis);
    insights.push(...anomalyInsights);
    
    // 3. Opportunity Identification
    const opportunityInsights = this.identifyOpportunities(kpis);
    insights.push(...opportunityInsights);
    
    // 4. Risk Assessment
    const riskInsights = this.assessRisks(kpis);
    insights.push(...riskInsights);
    
    return insights.sort((a, b) => (b.impact * b.confidence) - (a.impact * a.confidence));
  }
  
  /**
   * Prioritize insights based on impact and confidence
   */
  static prioritize(insights: DecisionInsight[]): PrioritizedAction[] {
    return insights.map(insight => {
      const score = this.calculateScore(insight);
      const priority = this.determinePriority(score);
      
      return {
        insight,
        score,
        priority,
        urgency: this.calculateUrgency(insight)
      };
    }).sort((a, b) => b.score - a.score);
  }
  
  /**
   * Generate challenges from insights
   */
  static generateChallenges(insights: DecisionInsight[]): Challenge[] {
    const challenges: Challenge[] = [];
    
    // Group insights by domain and type
    const groupedInsights = this.groupInsights(insights);
    
    // Generate challenges for each group
    Object.entries(groupedInsights).forEach(([domain, domainInsights]) => {
      const challenge = this.createChallengeFromInsights(domain, domainInsights);
      if (challenge) {
        challenges.push(challenge);
      }
    });
    
    return challenges.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }
  
  /**
   * Set SMART goals from challenges
   */
  static setGoals(challenges: Challenge[]): Goal[] {
    return challenges.map(challenge => ({
      id: `goal-${challenge.id}`,
      title: `Alcançar ${challenge.title}`,
      description: `Objetivo SMART para ${challenge.description.toLowerCase()}`,
      type: 'smart_goal',
      target: {
        value: challenge.targetValue,
        unit: this.getUnitByCategory(challenge.category),
        deadline: this.addDays(new Date(), this.parseTimeframe(challenge.timeframe))
      },
      baseline: {
        value: challenge.currentValue,
        unit: this.getUnitByCategory(challenge.category),
        date: new Date()
      },
      progress: 0,
      status: 'not_started',
      challenges: [challenge.id],
      domain: challenge.domain
    }));
  }
  
  /**
   * Identify levers to achieve goals
   */
  static identifyLevers(goals: Goal[]): Lever[] {
    const levers: Lever[] = [];
    
    goals.forEach(goal => {
      const goalLevers = this.generateLeversForGoal(goal);
      levers.push(...goalLevers);
    });
    
    return levers.sort((a, b) => (b.impact * b.roi) - (a.impact * a.roi));
  }
  
  /**
   * Plan concrete actions from levers
   */
  static planActions(levers: Lever[]): Action[] {
    const actions: Action[] = [];
    
    levers.forEach(lever => {
      const leverActions = this.generateActionsForLever(lever);
      actions.push(...leverActions);
    });
    
    return actions.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }
  
  // Private helper methods
  
  private static analyzeTrends(kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Group KPIs by domain
    const domainGroups = this.groupKPIsByDomain(kpis);
    
    Object.entries(domainGroups).forEach(([domain, domainKPIs]) => {
      const trends = this.calculateTrends(domainKPIs);
      
      trends.forEach(trend => {
        if (Math.abs(trend.change) > 10) { // Significant change
          insights.push({
            id: `trend-${domain}-${trend.kpiCode}`,
            type: 'trend',
            title: `${trend.direction === 'up' ? 'Aumento' : 'Queda'} de ${trend.kpiCode}`,
            description: `${trend.kpiCode} no domínio ${domain} está ${trend.direction === 'up' ? 'aumentando' : 'caindo'} ${trend.change.toFixed(1)}%`,
            metrics: [trend.kpiCode],
            impact: Math.abs(trend.change),
            confidence: 85,
            severity: this.determineSeverity(Math.abs(trend.change)) as any,
            generatedAt: new Date(),
            domain,
            value: Math.abs(trend.change)
          });
        }
      });
    });
    
    return insights;
  }
  
  private static detectAnomalies(kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Simple anomaly detection based on thresholds
    kpis.forEach(kpi => {
      if (kpi.previousValue) {
        const change = Math.abs((kpi.value - kpi.previousValue) / kpi.previousValue * 100);
        
        if (change > 50) { // 50% change is significant
          insights.push({
            id: `anomaly-${kpi.kpiCode}`,
            type: 'anomaly',
            title: `Variação anômala detectada`,
            description: `${kpi.kpiCode} apresentou variação anômala de ${change.toFixed(1)}%`,
            metrics: [kpi.kpiCode],
            impact: change,
            confidence: 90,
            severity: 'high',
            generatedAt: new Date(),
            domain: kpi.domain,
            value: change
          });
        }
      }
    });
    
    return insights;
  }
  
  private static identifyOpportunities(kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Look for improvement opportunities
    kpis.forEach(kpi => {
      if (kpi.domain === 'commercial' && kpi.kpiCode === 'salesConversion') {
        if (kpi.value < 25) { // Room for improvement
          insights.push({
            id: `opportunity-${kpi.kpiCode}`,
            type: 'opportunity',
            title: 'Oportunidade de melhoria na conversão',
            description: `Taxa de conversão atual de ${kpi.value}% pode ser otimizada para 25%+`,
            metrics: [kpi.kpiCode],
            impact: 25 - kpi.value,
            confidence: 75,
            severity: 'medium',
            generatedAt: new Date(),
            domain: kpi.domain,
            value: kpi.value
          });
        }
      }
      
      if (kpi.domain === 'financial' && kpi.kpiCode === 'netProfitMargin') {
        if (kpi.value > 20) { // High profitability
          insights.push({
            id: `opportunity-${kpi.kpiCode}`,
            type: 'opportunity',
            title: 'Oportunidade de expansão',
            description: `Margem de lucro elevada (${kpi.value}%) indica potencial para expansão`,
            metrics: [kpi.kpiCode],
            impact: kpi.value - 15,
            confidence: 80,
            severity: 'high',
            generatedAt: new Date(),
            domain: kpi.domain,
            value: kpi.value
          });
        }
      }
    });
    
    return insights;
  }
  
  private static assessRisks(kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Risk assessment based on KPI thresholds
    kpis.forEach(kpi => {
      let riskLevel = 'low';
      let riskDescription = '';
      
      if (kpi.domain === 'financial') {
        if (kpi.kpiCode === 'netProfitMargin' && kpi.value < 5) {
          riskLevel = 'critical';
          riskDescription = 'Margem de lucro criticamente baixa';
        }
        if (kpi.kpiCode === 'cashBurnRate' && kpi.value > 10000) {
          riskLevel = 'high';
          riskDescription = 'Alta taxa de queima de caixa';
        }
      }
      
      if (kpi.domain === 'commercial') {
        if (kpi.kpiCode === 'salesConversion' && kpi.value < 10) {
          riskLevel = 'critical';
          riskDescription = 'Taxa de conversão muito baixa';
        }
        if (kpi.kpiCode === 'churnRate' && kpi.value > 15) {
          riskLevel = 'high';
          riskDescription = 'Alta taxa de churn';
        }
      }
      
      if (riskLevel !== 'low') {
        insights.push({
          id: `risk-${kpi.kpiCode}`,
          type: 'risk',
          title: `Risco identificado: ${riskDescription}`,
          description: `${kpi.kpiCode} em ${kpi.value} indica ${riskDescription}`,
          metrics: [kpi.kpiCode],
          impact: this.calculateRiskImpact(kpi),
          confidence: 85,
          severity: riskLevel as any,
          generatedAt: new Date(),
          domain: kpi.domain,
          value: kpi.value
        });
      }
    });
    
    return insights;
  }
  
  private static calculateScore(insight: DecisionInsight): number {
    return (insight.impact * insight.confidence) / 100;
  }
  
  private static determinePriority(score: number): 'low' | 'medium' | 'high' | 'critical' {
    if (score >= 80) return 'critical';
    if (score >= 60) return 'high';
    if (score >= 40) return 'medium';
    return 'low';
  }
  
  private static calculateUrgency(insight: DecisionInsight): number {
    // Urgency based on severity and recency
    const severityWeight = { critical: 4, high: 3, medium: 2, low: 1 };
    const recencyWeight = this.calculateRecencyWeight(insight.generatedAt);
    
    return (severityWeight[insight.severity] * 0.7) + (recencyWeight * 0.3);
  }
  
  private static calculateRecencyWeight(generatedAt: Date): number {
    const hoursOld = (Date.now() - generatedAt.getTime()) / (1000 * 60 * 60);
    if (hoursOld < 1) return 1;
    if (hoursOld < 24) return 0.8;
    if (hoursOld < 168) return 0.6;
    return 0.4;
  }
  
  private static determineSeverity(change: number): 'low' | 'medium' | 'high' | 'critical' {
    if (change >= 50) return 'critical';
    if (change >= 30) return 'high';
    if (change >= 15) return 'medium';
    return 'low';
  }
  
  private static groupInsights(insights: DecisionInsight[]): Record<string, DecisionInsight[]> {
    return insights.reduce((groups, insight) => {
      if (!groups[insight.domain]) {
        groups[insight.domain] = [];
      }
      groups[insight.domain].push(insight);
      return groups;
    }, {} as Record<string, DecisionInsight[]>);
  }
  
  private static createChallengeFromInsights(domain: string, insights: DecisionInsight[]): Challenge | null {
    const riskInsights = insights.filter(i => i.type === 'risk');
    const opportunityInsights = insights.filter(i => i.type === 'opportunity');
    
    if (riskInsights.length === 0 && opportunityInsights.length === 0) {
      return null;
    }
    
    const primaryInsight = [...riskInsights, ...opportunityInsights][0];
    
    return {
      id: `challenge-${domain}`,
      title: this.generateChallengeTitle(primaryInsight),
      description: this.generateChallengeDescription(primaryInsight, insights),
      category: this.determineCategory(primaryInsight),
      targetValue: this.calculateTargetValue(primaryInsight),
      currentValue: this.calculateCurrentValue(primaryInsight),
      gap: this.calculateGap(primaryInsight),
      timeframe: '90 dias',
      priority: primaryInsight.severity,
      insights: insights.map(i => i.id),
      domain
    };
  }
  
  private static generateChallengeTitle(insight: DecisionInsight): string {
    if (insight.type === 'risk') {
      return `Mitigar ${insight.title}`;
    }
    if (insight.type === 'opportunity') {
      return `Aproveitar ${insight.title}`;
    }
    return `Endereçar ${insight.title}`;
  }
  
  private static generateChallengeDescription(insight: DecisionInsight, allInsights: DecisionInsight[]): string {
    return `Baseado na análise de ${allInsights.length} insights, ${insight.description.toLowerCase()}. Esta ação é crítica para a saúde do negócio.`;
  }
  
  private static determineCategory(insight: DecisionInsight): 'cost_reduction' | 'revenue_growth' | 'efficiency' | 'risk_mitigation' {
    if (insight.type === 'risk') return 'risk_mitigation';
    if (insight.domain === 'financial') return 'cost_reduction';
    if (insight.domain === 'commercial') return 'revenue_growth';
    return 'efficiency';
  }
  
  private static calculateTargetValue(insight: DecisionInsight): number {
    if (insight.type === 'risk') {
      return insight.metrics[0] === 'netProfitMargin' ? 15 : insight.value * 0.8;
    }
    if (insight.type === 'opportunity') {
      return insight.metrics[0] === 'salesConversion' ? 25 : insight.value * 1.2;
    }
    return insight.value * 1.1;
  }
  
  private static calculateCurrentValue(insight: DecisionInsight): number {
    return insight.value;
  }
  
  private static calculateGap(insight: DecisionInsight): number {
    const target = this.calculateTargetValue(insight);
    return Math.abs(target - insight.value);
  }
  
  private static getUnitByCategory(category: string): string {
    const units = {
      cost_reduction: 'R$',
      revenue_growth: 'R$',
      efficiency: '%',
      risk_mitigation: '%'
    };
    return units[category as keyof typeof units] || '%';
  }
  
  private static parseTimeframe(timeframe: string): number {
    const match = timeframe.match(/(\d+)/);
    return match ? parseInt(match[0]) : 90;
  }
  
  private static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  private static groupKPIsByDomain(kpis: KPIMetric[]): Record<string, KPIMetric[]> {
    return kpis.reduce((groups, kpi) => {
      if (!groups[kpi.domain]) {
        groups[kpi.domain] = [];
      }
      groups[kpi.domain].push(kpi);
      return groups;
    }, {} as Record<string, KPIMetric[]>);
  }
  
  private static calculateTrends(kpis: KPIMetric[]): Array<{kpiCode: string; direction: 'up' | 'down' | 'stable'; change: number}> {
    return kpis.map(kpi => {
      if (!kpi.previousValue) {
        return { kpiCode: kpi.kpiCode, direction: 'stable', change: 0 };
      }
      
      const change = ((kpi.value - kpi.previousValue) / kpi.previousValue) * 100;
      const direction = change > 5 ? 'up' : change < -5 ? 'down' : 'stable';
      
      return { kpiCode: kpi.kpiCode, direction, change };
    });
  }
  
  private static calculateRiskImpact(kpi: KPIMetric): number {
    // Calculate impact based on KPI type and deviation
    if (kpi.domain === 'financial') {
      if (kpi.kpiCode === 'netProfitMargin') {
        return Math.max(0, 100 - kpi.value) * 2; // Double weight for profit margin
      }
      if (kpi.kpiCode === 'cashBurnRate') {
        return Math.max(0, kpi.value / 100); // Percentage of burn rate
      }
    }
    
    if (kpi.domain === 'commercial') {
      if (kpi.kpiCode === 'salesConversion') {
        return Math.max(0, 25 - kpi.value) * 3; // Triple weight for conversion
      }
      if (kpi.kpiCode === 'churnRate') {
        return kpi.value * 2; // Double weight for churn
      }
    }
    
    return 50; // Default impact
  }
  
  private static generateLeversForGoal(goal: Goal): Lever[] {
    const levers: Lever[] = [];
    
    // Generate levers based on goal category
    if (goal.domain === 'commercial') {
      levers.push({
        id: 'marketing-optimization',
        title: 'Otimizar campanhas de marketing',
        description: 'Focar em campanhas de baixo custo e alta conversão',
        type: 'process',
        impact: 80,
        effort: 60,
        roi: 1.33,
        dependencies: ['marketing-team'],
        owner: 'marketing-manager',
        timeframe: '30-60 dias',
        domain: goal.domain
      });
      
      levers.push({
        id: 'sales-team-training',
        title: 'Treinar equipe de vendas',
        description: 'Capacitar equipe em técnicas de venda e negociação',
        type: 'people',
        impact: 60,
        effort: 40,
        roi: 1.5,
        dependencies: ['hr-department'],
        owner: 'sales-manager',
        timeframe: '60-90 dias',
        domain: goal.domain
      });
    }
    
    if (goal.domain === 'financial') {
      levers.push({
        id: 'cost-optimization',
        title: 'Otimizar estrutura de custos',
        description: 'Revisar e otimizar estrutura de custos fixos e variáveis',
        type: 'process',
        impact: 70,
        effort: 80,
        roi: 0.875,
        dependencies: ['finance-team'],
        owner: 'cfo',
        timeframe: '60-120 dias',
        domain: goal.domain
      });
    }
    
    return levers;
  }
  
  private static generateActionsForLever(lever: Lever): Action[] {
    const actions: Action[] = [];
    
    if (lever.id === 'marketing-optimization') {
      actions.push({
        id: 'action-1',
        title: 'Analisar canais atuais',
        description: 'Mapear todos os canais de marketing e analisar performance',
        type: 'short_term',
        priority: 'high',
        status: 'planned',
        assignee: 'marketing-analyst',
        dueDate: this.addDays(new Date(), 7),
        estimatedHours: 16,
        expectedOutcome: 'Identificar 2-3 canais de baixo desempenho',
        metrics: ['conversion_rate', 'cac', 'roas'],
        dependencies: [],
        steps: [
          { id: 'step-1', title: 'Coletar dados', description: 'Extrair dados de todos os canais', status: 'pending', estimatedHours: 4 },
          { id: 'step-2', title: 'Analisar performance', description: 'Calcular métricas por canal', status: 'pending', estimatedHours: 8 },
          { id: 'step-3', title: 'Gerar relatório', description: 'Criar relatório comparativo', status: 'pending', estimatedHours: 4 }
        ],
        domain: lever.domain
      });
      
      actions.push({
        id: 'action-2',
        title: 'Testar novas campanhas',
        description: 'Criar e testar 3 novas campanhas piloto',
        type: 'short_term',
        priority: 'high',
        status: 'planned',
        assignee: 'marketing-specialist',
        dueDate: this.addDays(new Date(), 14),
        estimatedHours: 24,
        expectedOutcome: 'Redução de CAC em 15%',
        metrics: ['conversion_rate', 'cac'],
        dependencies: [],
        steps: [
          { id: 'step-1', title: 'Definir público-alvo', description: 'Pesquisar e definir público', status: 'pending', estimatedHours: 4 },
          { id: 'step-2', title: 'Criar criativos', description: 'Desenvolver materiais', status: 'pending', estimatedHours: 12 },
          { id: 'step-3', title: 'Configurar campanhas', description: 'Setup nas plataformas', status: 'pending', estimatedHours: 6 },
          { id: 'step-4', title: 'Monitorar resultados', description: 'Acompanhar performance diária', status: 'pending', estimatedHours: 2 }
        ],
        domain: lever.domain
      });
    }
    
    return actions;
  }
}
