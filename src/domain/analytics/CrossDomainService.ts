import { 
  KPIMetric, 
  ImpactCalculation, 
  CompositeKPI, 
  CrossDomainHealth,
  CrossDomainAnalyzer 
} from './CrossDomainAnalyzer';
import { PredefinedCompositeKPIs } from './CompositeKPIs';
import { DomainType } from '../core/BusinessDomain';

export interface CrossDomainAnalysisRequest {
  kpis: KPIMetric[];
  targetDomains?: DomainType[];
  analysisType: 'impact' | 'health' | 'composite' | 'prediction';
  changeScenario?: {
    kpiCode: string;
    domain: DomainType;
    change: number;
  };
}

export interface CrossDomainAnalysisResult {
  id: string;
  timestamp: Date;
  request: CrossDomainAnalysisRequest;
  impacts?: ImpactCalculation[];
  health?: CrossDomainHealth;
  compositeKPIs?: CompositeKPI[];
  predictions?: Array<{
    kpi: KPIMetric;
    impact: number;
    path: string[];
    confidence: number;
  }>;
  summary: {
    totalKPIs: number;
    domainsAnalyzed: DomainType[];
    overallScore?: number;
    criticalIssues: string[];
    recommendations: string[];
  };
}

export class CrossDomainService {
  /**
   * Perform comprehensive cross-domain analysis
   */
  static async analyze(request: CrossDomainAnalysisRequest): Promise<CrossDomainAnalysisResult> {
    const analysisId = `analysis_${Date.now()}`;
    const timestamp = new Date();

    let impacts: ImpactCalculation[] | undefined;
    let health: CrossDomainHealth | undefined;
    let compositeKPIs: CompositeKPI[] | undefined;
    let predictions: Array<{
      kpi: KPIMetric;
      impact: number;
      path: string[];
      confidence: number;
    }> | undefined;

    // Perform analysis based on type
    switch (request.analysisType) {
      case 'impact':
        impacts = this.analyzeImpacts(request.kpis);
        break;
      case 'health':
        health = this.analyzeHealth(request.kpis);
        break;
      case 'composite':
        compositeKPIs = this.analyzeCompositeKPIs(request.kpis);
        break;
      case 'prediction':
        predictions = [];
        if (request.changeScenario) {
          const initialKPI = request.kpis.find(
            k => k.domain === request.changeScenario!.domain && 
                 k.kpiCode === request.changeScenario!.kpiCode
          );
          if (initialKPI) {
            predictions = this.predictImpacts(initialKPI, request.changeScenario.change, request.kpis);
          }
        }
        break;
    }

    // Generate summary
    const summary = this.generateSummary(request, impacts, health, compositeKPIs, predictions);

    return {
      id: analysisId,
      timestamp,
      request,
      impacts,
      health,
      compositeKPIs,
      predictions,
      summary
    };
  }

  /**
   * Get real-time cross-domain insights
   */
  static async getRealtimeInsights(kpis: KPIMetric[]): Promise<{
    alerts: Array<{
      type: 'critical' | 'warning' | 'info';
      message: string;
      domains: DomainType[];
      affectedKPIs: string[];
    }>;
    opportunities: Array<{
      type: 'growth' | 'efficiency' | 'cost_reduction';
      description: string;
      potentialImpact: number;
      domains: DomainType[];
    }>;
    trends: Array<{
      domain: DomainType;
      trend: 'improving' | 'declining' | 'stable';
      keyDrivers: string[];
    }>;
  }> {
    const health = this.analyzeHealth(kpis);
    const impacts = this.analyzeImpacts(kpis);

    const alerts = this.generateAlerts(health, impacts);
    const opportunities = this.identifyOpportunities(kpis, health);
    const trends = this.analyzeTrends(kpis);

    return { alerts, opportunities, trends };
  }

  /**
   * Get domain relationship map
   */
  static getRelationshipMap(): {
    domains: DomainType[];
    relationships: Array<{
      source: DomainType;
      target: DomainType;
      strength: 'weak' | 'moderate' | 'strong';
      type: 'influences' | 'depends_on' | 'correlates_with';
    }>;
  } {
    // This would come from the CROSS_DOMAIN_RELATIONSHIPS constant
    // For now, returning a simplified structure
    return {
      domains: ['financial', 'commercial', 'operations', 'strategy', 'human-resources', 'customer-support', 'logistics'],
      relationships: [
        { source: 'financial', target: 'commercial', strength: 'strong', type: 'influences' },
        { source: 'financial', target: 'operations', strength: 'strong', type: 'influences' },
        { source: 'operations', target: 'customer-support', strength: 'strong', type: 'influences' },
        { source: 'strategy', target: 'financial', strength: 'strong', type: 'influences' },
        { source: 'strategy', target: 'commercial', strength: 'strong', type: 'influences' },
        { source: 'strategy', target: 'operations', strength: 'strong', type: 'influences' },
        { source: 'human-resources', target: 'commercial', strength: 'moderate', type: 'influences' },
        { source: 'human-resources', target: 'operations', strength: 'moderate', type: 'influences' },
        { source: 'logistics', target: 'operations', strength: 'moderate', type: 'influences' },
        { source: 'logistics', target: 'customer-support', strength: 'moderate', type: 'influences' },
      ]
    };
  }

  private static analyzeImpacts(kpis: KPIMetric[]): ImpactCalculation[] {
    const impacts: ImpactCalculation[] = [];

    // Calculate impacts between all KPI pairs across different domains
    for (let i = 0; i < kpis.length; i++) {
      for (let j = 0; j < kpis.length; j++) {
        if (i !== j && kpis[i].domain !== kpis[j].domain) {
          const change = kpis[i].previousValue 
            ? ((kpis[i].value - kpis[i].previousValue) / kpis[i].previousValue) * 100 
            : 0;

          const impact = this.calculateImpact(kpis[i], kpis[j], change);
          if (Math.abs(impact.impact) > 1) { // Only include significant impacts
            impacts.push(impact);
          }
        }
      }
    }

    return impacts.sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact));
  }

  private static analyzeHealth(kpis: KPIMetric[]): CrossDomainHealth {
    return CrossDomainAnalyzer.analyzeCrossDomainHealth(kpis);
  }

  private static analyzeCompositeKPIs(kpis: KPIMetric[]): CompositeKPI[] {
    const predefinedKPIs = PredefinedCompositeKPIs.getAll();
    const calculatedKPIs: CompositeKPI[] = [];

    predefinedKPIs.forEach(predefinedKPI => {
      // Find relevant KPIs for this composite
      const relevantKPIs = kpis.filter(kpi => 
        predefinedKPI.kpis.includes(kpi.kpiCode) &&
        predefinedKPI.domains.includes(kpi.domain)
      );

      if (relevantKPIs.length > 0) {
        // Calculate composite value (simplified)
        const totalWeight = predefinedKPI.domains.length;
        const weightedSum = relevantKPIs.reduce((sum, kpi) => {
          // Simple average for now - can be enhanced
          return sum + kpi.value;
        }, 0);

        calculatedKPIs.push({
          ...predefinedKPI,
          value: totalWeight / relevantKPIs.length,
          trend: 'stable' // Would be calculated from historical data
        });
      }
    });

    return calculatedKPIs;
  }

  private static predictImpacts(
    initialKPI: KPIMetric,
    change: number,
    allKPIs: KPIMetric[]
  ): Array<{
    kpi: KPIMetric;
    impact: number;
    path: string[];
    confidence: number;
  }> {
    return CrossDomainAnalyzer.predictCascadeImpact(
      { kpi: initialKPI, change },
      allKPIs
    );
  }

  private static calculateImpact(sourceKPI: KPIMetric, targetKPI: KPIMetric, change: number): ImpactCalculation {
    return CrossDomainAnalyzer.calculateImpact(sourceKPI, targetKPI, change);
  }

  private static generateSummary(
    request: CrossDomainAnalysisRequest,
    impacts?: ImpactCalculation[],
    health?: CrossDomainHealth,
    compositeKPIs?: CompositeKPI[],
    predictions?: Array<{
      kpi: KPIMetric;
      impact: number;
      path: string[];
      confidence: number;
    }>
  ): {
    totalKPIs: number;
    domainsAnalyzed: DomainType[];
    overallScore?: number;
    criticalIssues: string[];
    recommendations: string[];
  } {
    const domainsAnalyzed = [...new Set(request.kpis.map(k => k.domain))];
    const criticalIssues: string[] = [];
    const recommendations: string[] = [];

    // Add health-based issues and recommendations
    if (health) {
      criticalIssues.push(...health.recommendations.filter(r => r.includes('Crítico')));
      recommendations.push(...health.recommendations.filter(r => !r.includes('Crítico')));
    }

    // Add impact-based recommendations
    if (impacts) {
      const highImpacts = impacts.filter(i => Math.abs(i.impact) > 20);
      if (highImpacts.length > 0) {
        recommendations.push(`Atenção: ${highImpacts.length} impactos significativos detectados entre domínios`);
      }
    }

    return {
      totalKPIs: request.kpis.length,
      domainsAnalyzed,
      overallScore: health?.overallScore,
      criticalIssues,
      recommendations
    };
  }

  private static generateAlerts(
    health: CrossDomainHealth,
    impacts: ImpactCalculation[]
  ): Array<{
    type: 'critical' | 'warning' | 'info';
    message: string;
    domains: DomainType[];
    affectedKPIs: string[];
  }> {
    const alerts: Array<{
      type: 'critical' | 'warning' | 'info';
      message: string;
      domains: DomainType[];
      affectedKPIs: string[];
    }> = [];

    // Health-based alerts
    if (health.overallScore < 30) {
      alerts.push({
        type: 'critical',
        message: 'Saúde geral do negócio está em estado crítico',
        domains: Array.from(health.domainScores.keys()),
        affectedKPIs: []
      });
    } else if (health.overallScore < 60) {
      alerts.push({
        type: 'warning',
        message: 'Saúde geral do negócio precisa de atenção',
        domains: Array.from(health.domainScores.keys()),
        affectedKPIs: []
      });
    }

    // Impact-based alerts
    const highImpacts = impacts.filter(i => Math.abs(i.impact) > 25);
    if (highImpacts.length > 0) {
      alerts.push({
        type: 'warning',
        message: `${highImpacts.length} impactos cross-domain significativos detectados`,
        domains: [...new Set(highImpacts.map(i => i.targetDomain))],
        affectedKPIs: highImpacts.map(i => i.targetKPI)
      });
    }

    return alerts;
  }

  private static identifyOpportunities(
    kpis: KPIMetric[],
    health: CrossDomainHealth
  ): Array<{
    type: 'growth' | 'efficiency' | 'cost_reduction';
    description: string;
    potentialImpact: number;
    domains: DomainType[];
  }> {
    const opportunities: Array<{
      type: 'growth' | 'efficiency' | 'cost_reduction';
      description: string;
      potentialImpact: number;
      domains: DomainType[];
    }> = [];

    // Look for high-performing domains that could influence others
    health.domainScores.forEach((score, domain) => {
      if (score > 80) {
        opportunities.push({
          type: 'growth',
          description: `Domínio ${domain} com performance alta pode impulsionar outros domínios`,
          potentialImpact: 15,
          domains: [domain]
        });
      }
    });

    return opportunities;
  }

  private static analyzeTrends(kpis: KPIMetric[]): Array<{
    domain: DomainType;
    trend: 'improving' | 'declining' | 'stable';
    keyDrivers: string[];
  }> {
    const trends: Array<{
      domain: DomainType;
      trend: 'improving' | 'declining' | 'stable';
      keyDrivers: string[];
    }> = [];

    const domainGroups = new Map<DomainType, KPIMetric[]>();
    kpis.forEach(kpi => {
      if (!domainGroups.has(kpi.domain)) {
        domainGroups.set(kpi.domain, []);
      }
      domainGroups.get(kpi.domain)!.push(kpi);
    });

    domainGroups.forEach((domainKPIs, domain) => {
      let improving = 0;
      let declining = 0;
      const keyDrivers: string[] = [];

      domainKPIs.forEach(kpi => {
        if (kpi.previousValue !== undefined) {
          if (kpi.value > kpi.previousValue) {
            improving++;
            if (Math.abs(kpi.value - kpi.previousValue) > 10) {
              keyDrivers.push(kpi.kpiCode);
            }
          } else if (kpi.value < kpi.previousValue) {
            declining++;
            if (Math.abs(kpi.value - kpi.previousValue) > 10) {
              keyDrivers.push(kpi.kpiCode);
            }
          }
        }
      });

      let trend: 'improving' | 'declining' | 'stable';
      if (improving > declining) trend = 'improving';
      else if (declining > improving) trend = 'declining';
      else trend = 'stable';

      trends.push({ domain, trend, keyDrivers });
    });

    return trends;
  }
}
