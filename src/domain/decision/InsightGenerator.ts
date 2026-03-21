import { KPIMetric, ImpactCalculation } from '../analytics';
import { CrossDomainHealth } from '../analytics';
import { DecisionInsight } from './DecisionEngine';

export class InsightGenerator {
  /**
   * Generate intelligent insights from KPIs and cross-domain health
   */
  static generateInsights(kpis: KPIMetric[], health: CrossDomainHealth, impacts?: ImpactCalculation[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // 1. Cross-Domain Pattern Analysis
    const crossDomainInsights = this.analyzeCrossDomainPatterns(kpis, health);
    insights.push(...crossDomainInsights);
    
    // 2. Performance Benchmarking
    const benchmarkInsights = this.benchmarkPerformance(kpis);
    insights.push(...benchmarkInsights);
    
    // 3. Predictive Insights
    const predictiveInsights = this.generatePredictiveInsights(kpis, health);
    insights.push(...predictiveInsights);
    
    // 4. Strategic Opportunities
    const strategicInsights = this.identifyStrategicOpportunities(kpis, health);
    insights.push(...strategicInsights);
    
    // 5. Risk Correlations
    const riskInsights = this.analyzeRiskCorrelations(kpis, health);
    insights.push(...riskInsights);
    
    // 6. NEW: Impact-Based Insights (Cross-Domain Integration)
    if (impacts && impacts.length > 0) {
      const impactInsights = this.generateImpactBasedInsights(impacts, kpis);
      insights.push(...impactInsights);
    }
    
    // 7. NEW: Relationship-Driven Insights
    const relationshipInsights = this.generateRelationshipInsights(health, kpis);
    insights.push(...relationshipInsights);
    
    return insights.sort((a, b) => (b.impact * b.confidence) - (a.impact * a.confidence));
  }
  
  /**
   * Analyze cross-domain patterns and relationships
   */
  private static analyzeCrossDomainPatterns(kpis: KPIMetric[], health: CrossDomainHealth): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Analyze domain health correlations
    const domainScores = Array.from(health.domainScores.entries());
    const avgHealth = health.overallScore;
    
    // Find underperforming domains
    const underperformingDomains = domainScores.filter(([_, score]) => score < avgHealth - 10);
    
    underperformingDomains.forEach(([domain, score]) => {
      const domainKPIs = kpis.filter(kpi => kpi.domain === domain);
      const criticalKPIs = domainKPIs.filter(kpi => this.isCriticalKPI(kpi, score));
      
      if (criticalKPIs.length > 0) {
        insights.push({
          id: `cross-domain-${domain}-underperformance`,
          type: 'risk',
          title: `Baixo desempenho cross-domain em ${domain}`,
          description: `Domínio ${domain} com score ${score.toFixed(1)} está ${avgHealth - score > 20 ? 'significativamente' : 'moderadamente'} abaixo da média geral de ${avgHealth.toFixed(1)}. KPIs críticos afetados: ${criticalKPIs.map(kpi => kpi.kpiCode).join(', ')}.`,
          metrics: criticalKPIs.map(kpi => kpi.kpiCode),
          impact: Math.round((avgHealth - score) * 2),
          confidence: 85,
          severity: this.determineSeverity(avgHealth - score),
          generatedAt: new Date(),
          domain,
          value: score,
          crossDomainData: {
            impacts: [],
            health,
            composites: []
          }
        });
      }
    });
    
    // Find high-performing domains that can help others
    const highPerformingDomains = domainScores.filter(([_, score]) => score > avgHealth + 10);
    
    highPerformingDomains.forEach(([domain, score]) => {
      const domainKPIs = kpis.filter(kpi => kpi.domain === domain);
      const bestPractices = domainKPIs.filter(kpi => this.isBestPracticeKPI(kpi, score));
      
      if (bestPractices.length > 0) {
        insights.push({
          id: `cross-domain-${domain}-best-practices`,
          type: 'opportunity',
          title: `Melhores práticas em ${domain} podem ser replicadas`,
          description: `Domínio ${domain} com excelente performance (${score.toFixed(1)}) apresenta práticas que podem beneficiar outros domínios. KPIs de destaque: ${bestPractices.map(kpi => kpi.kpiCode).join(', ')}.`,
          metrics: bestPractices.map(kpi => kpi.kpiCode),
          impact: Math.round((score - avgHealth) * 1.5),
          confidence: 80,
          severity: 'medium',
          generatedAt: new Date(),
          domain,
          value: score,
          crossDomainData: {
            impacts: [],
            health,
            composites: []
          }
        });
      }
    });
    
    return insights;
  }
  
  /**
   * Benchmark KPIs against industry standards and historical performance
   */
  private static benchmarkPerformance(kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    kpis.forEach(kpi => {
      const benchmark = this.getBenchmarkForKPI(kpi.kpiCode);
      if (benchmark) {
        const performance = this.calculatePerformanceRatio(kpi.value, benchmark);
        
        if (performance < 0.7) { // Significantly below benchmark
          insights.push({
            id: `benchmark-${kpi.kpiCode}-underperformance`,
            type: 'risk',
            title: `Performance abaixo do benchmark: ${kpi.kpiCode}`,
            description: `${kpi.kpiCode} está ${(1 - performance) * 100}% abaixo do benchmark de ${benchmark}. Indica necessidade de ação imediata.`,
            metrics: [kpi.kpiCode],
            impact: Math.round((1 - performance) * 100),
            confidence: 90,
            severity: performance < 0.5 ? 'critical' : 'high',
            generatedAt: new Date(),
            domain: kpi.domain,
            value: kpi.value
          });
        } else if (performance > 1.3) { // Significantly above benchmark
          insights.push({
            id: `benchmark-${kpi.kpiCode}-excellence`,
            type: 'opportunity',
            title: `Performance excepcional: ${kpi.kpiCode}`,
            description: `${kpi.kpiCode} está ${(performance - 1) * 100}% acima do benchmark de ${benchmark}. Pode servir de referência para outras áreas.`,
            metrics: [kpi.kpiCode],
            impact: Math.round((performance - 1) * 80),
            confidence: 85,
            severity: 'medium',
            generatedAt: new Date(),
            domain: kpi.domain,
            value: kpi.value
          });
        }
      }
    });
    
    return insights;
  }
  
  /**
   * Generate predictive insights based on trends and patterns
   */
  private static generatePredictiveInsights(kpis: KPIMetric[], health: CrossDomainHealth): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Analyze trends for predictions
    kpis.forEach(kpi => {
      if (kpi.previousValue) {
        const trend = (kpi.value - kpi.previousValue) / kpi.previousValue;
        const prediction = this.generatePrediction(kpi, trend);
        
        if (prediction.riskLevel === 'high' || prediction.opportunityLevel === 'high') {
          insights.push({
            id: `prediction-${kpi.kpiCode}`,
            type: prediction.riskLevel === 'high' ? 'risk' : 'opportunity',
            title: `Previsão: ${prediction.title}`,
            description: prediction.description,
            metrics: [kpi.kpiCode],
            impact: prediction.impact,
            confidence: Math.round(prediction.confidence * 100),
            severity: prediction.riskLevel === 'high' ? 'high' : 'medium',
            generatedAt: new Date(),
            domain: kpi.domain,
            value: kpi.value
          });
        }
      }
    });
    
    // Predict overall business health trajectory
    const healthTrend = this.calculateHealthTrend(health);
    if (Math.abs(healthTrend) > 0.1) {
      insights.push({
        id: 'prediction-health-trajectory',
        type: healthTrend < 0 ? 'risk' : 'opportunity',
        title: `Trajetória de saúde: ${healthTrend < 0 ? 'Declínio' : 'Melhoria'}`,
        description: `Análise preditiva indica ${healthTrend < 0 ? 'tendência de declínio' : 'melhoria contínua'} na saúde geral do negócio nos próximos 90 dias.`,
        metrics: ['overall_health'],
        impact: Math.round(Math.abs(healthTrend) * 100),
        confidence: 75,
        severity: Math.abs(healthTrend) > 0.2 ? 'high' : 'medium',
        generatedAt: new Date(),
        domain: 'overall',
        value: health.overallScore
      });
    }
    
    return insights;
  }
  
  /**
   * Identify strategic opportunities based on cross-domain analysis
   */
  private static identifyStrategicOpportunities(kpis: KPIMetric[], health: CrossDomainHealth): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Find strategic alignment opportunities
    const strategicKPIs = this.getStrategicKPIs(kpis);
    const alignmentScore = this.calculateStrategicAlignment(strategicKPIs);
    
    if (alignmentScore < 0.6) {
      insights.push({
        id: 'strategic-alignment-gap',
        type: 'opportunity',
        title: 'Oportunidade de alinhamento estratégico',
        description: `Score de alinhamento estratégico de ${(alignmentScore * 100).toFixed(1)}% indica espaço significativo para melhoria. Foco em KPIs estratégicos pode gerar impacto multiplicador.`,
        metrics: strategicKPIs.map(kpi => kpi.kpiCode),
        impact: Math.round((1 - alignmentScore) * 80),
        confidence: 80,
        severity: 'medium',
        generatedAt: new Date(),
        domain: 'strategic',
        value: alignmentScore
      });
    }
    
    // Identify growth opportunities
    const growthKPIs = kpis.filter(kpi => this.isGrowthKPI(kpi));
    const growthPotential = this.calculateGrowthPotential(growthKPIs);
    
    if (growthPotential > 0.3) {
      insights.push({
        id: 'growth-opportunity',
        type: 'opportunity',
        title: 'Potencial de crescimento identificado',
        description: `Análise indica potencial de crescimento de ${(growthPotential * 100).toFixed(1)}% baseado nos KPIs atuais. Foco em otimização pode gerar resultados significativos.`,
        metrics: growthKPIs.map(kpi => kpi.kpiCode),
        impact: Math.round(growthPotential * 100),
        confidence: 75,
        severity: 'medium',
        generatedAt: new Date(),
        domain: 'growth',
        value: growthPotential
      });
    }
    
    return insights;
  }
  
  /**
   * Analyze risk correlations across domains
   */
  private static analyzeRiskCorrelations(kpis: KPIMetric[], health: CrossDomainHealth): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Identify correlated risks
    const riskKPIs = kpis.filter(kpi => this.isRiskKPI(kpi));
    const correlations = this.calculateRiskCorrelations(riskKPIs);
    
    correlations.forEach(correlation => {
      if (correlation.strength > 0.7) {
        insights.push({
          id: `risk-correlation-${correlation.kpi1}-${correlation.kpi2}`,
          type: 'risk',
          title: `Correlação de risco identificada`,
          description: `Forte correlação (${(correlation.strength * 100).toFixed(1)}%) entre ${correlation.kpi1} e ${correlation.kpi2}. Problemas em um KPI provavelmente afetarão o outro.`,
          metrics: [correlation.kpi1, correlation.kpi2],
          impact: Math.round(correlation.strength * 80),
          confidence: 85,
          severity: 'high',
          generatedAt: new Date(),
          domain: correlation.domain,
          value: correlation.strength
        });
      }
    });
    
    // Identify systemic risks
    const systemicRiskScore = this.calculateSystemicRisk(kpis, health);
    if (systemicRiskScore > 0.6) {
      insights.push({
        id: 'systemic-risk',
        type: 'risk',
        title: 'Risco sistêmico detectado',
        description: `Score de risco sistêmico de ${(systemicRiskScore * 100).toFixed(1)}% indica vulnerabilidade generalizada. Requer atenção imediata e abordagem holística.`,
        metrics: riskKPIs.map(kpi => kpi.kpiCode),
        impact: Math.round(systemicRiskScore * 100),
        confidence: 80,
        severity: systemicRiskScore > 0.8 ? 'critical' : 'high',
        generatedAt: new Date(),
        domain: 'systemic',
        value: systemicRiskScore
      });
    }
    
    return insights;
  }
  
  // Helper methods
  
  private static isCriticalKPI(kpi: KPIMetric, domainScore: number): boolean {
    const criticalKPIs = {
      financial: ['netProfitMargin', 'cashBurnRate', 'revenue'],
      commercial: ['salesConversion', 'customerAcquisitionCost', 'churnRate'],
      operations: ['operationalEfficiency', 'inventoryTurnover'],
      marketing: ['marketingROI', 'leadConversion'],
      hr: ['employeeRetention', 'productivity'],
      strategy: ['strategicAlignment', 'innovationIndex'],
      risk: ['riskScore', 'complianceRate']
    };
    
    const domainCriticalKPIs = criticalKPIs[kpi.domain as keyof typeof criticalKPIs] || [];
    return domainCriticalKPIs.includes(kpi.kpiCode) && domainScore < 60;
  }
  
  private static isBestPracticeKPI(kpi: KPIMetric, domainScore: number): boolean {
    const bestPracticeThresholds = {
      financial: { netProfitMargin: 15, cashBurnRate: 5000 },
      commercial: { salesConversion: 20, customerAcquisitionCost: 100 },
      operations: { operationalEfficiency: 85, inventoryTurnover: 12 },
      marketing: { marketingROI: 300, leadConversion: 5 },
      hr: { employeeRetention: 85, productivity: 100000 },
      strategy: { strategicAlignment: 80, innovationIndex: 70 },
      risk: { riskScore: 30, complianceRate: 95 }
    };
    
    const thresholds = bestPracticeThresholds[kpi.domain as keyof typeof bestPracticeThresholds];
    if (!thresholds) return false;
    
    const threshold = thresholds[kpi.kpiCode as keyof typeof thresholds];
    if (!threshold) return false;
    
    return kpi.value > threshold && domainScore > 80;
  }
  
  private static getBenchmarkForKPI(kpiCode: string): number | null {
    const benchmarks: Record<string, number> = {
      // Financial benchmarks
      netProfitMargin: 10,
      cashBurnRate: 10000,
      revenue: 1000000,
      grossMargin: 40,
      operatingMargin: 15,
      
      // Commercial benchmarks
      salesConversion: 15,
      customerAcquisitionCost: 150,
      churnRate: 10,
      customerLifetimeValue: 1000,
      averageTicketValue: 100,
      
      // Operations benchmarks
      operationalEfficiency: 75,
      inventoryTurnover: 8,
      productionCapacity: 80,
      qualityRate: 95,
      
      // Marketing benchmarks
      marketingROI: 200,
      leadConversion: 3,
      brandAwareness: 50,
      marketShare: 5,
      
      // HR benchmarks
      employeeRetention: 80,
      productivity: 80000,
      trainingROI: 150,
      engagementScore: 70,
      
      // Strategy benchmarks
      strategicAlignment: 70,
      innovationIndex: 60,
      competitiveAdvantage: 70,
      marketPosition: 60,
      
      // Risk benchmarks
      riskScore: 40,
      complianceRate: 90,
      auditFindings: 5,
      securityIncidents: 2
    };
    
    return benchmarks[kpiCode] || null;
  }
  
  private static calculatePerformanceRatio(value: number, benchmark: number): number {
    return value / benchmark;
  }
  
  private static generatePrediction(kpi: KPIMetric, trend: number): {
    riskLevel: 'low' | 'medium' | 'high';
    opportunityLevel: 'low' | 'medium' | 'high';
    title: string;
    description: string;
    impact: number;
    confidence: number;
  } {
    const riskLevel = trend < -0.15 ? 'high' : trend < -0.05 ? 'medium' : 'low';
    const opportunityLevel = trend > 0.15 ? 'high' : trend > 0.05 ? 'medium' : 'low';
    
    const title = trend < -0.1 ? `Risco de declínio em ${kpi.kpiCode}` : 
                  trend > 0.1 ? `Oportunidade de crescimento em ${kpi.kpiCode}` : 
                  `Estabilidade em ${kpi.kpiCode}`;
    
    const description = trend < -0.1 ? 
      `Trend atual de ${(trend * 100).toFixed(1)}% indica risco significativo de declínio nos próximos 90 dias.` :
      trend > 0.1 ? 
      `Trend atual de ${(trend * 100).toFixed(1)}% indica oportunidade de crescimento nos próximos 90 dias.` :
      `Trend estável indica continuidade do desempenho atual.`;
    
    return {
      riskLevel,
      opportunityLevel,
      title,
      description,
      impact: Math.abs(trend) * 100,
      confidence: 0.7
    };
  }
  
  private static calculateHealthTrend(health: CrossDomainHealth): number {
    // Simplified health trend calculation
    // In real implementation, would use historical health data
    return (health.overallScore - 70) / 100; // Assuming 70 as baseline
  }
  
  private static getStrategicKPIs(kpis: KPIMetric[]): KPIMetric[] {
    const strategicKPIs = [
      'netProfitMargin', 'revenue', 'strategicAlignment', 'innovationIndex',
      'marketPosition', 'competitiveAdvantage', 'marketShare'
    ];
    
    return kpis.filter(kpi => strategicKPIs.includes(kpi.kpiCode));
  }
  
  private static calculateStrategicAlignment(strategicKPIs: KPIMetric[]): number {
    if (strategicKPIs.length === 0) return 0.5;
    
    const alignmentScores = strategicKPIs.map(kpi => {
      const benchmark = this.getBenchmarkForKPI(kpi.kpiCode);
      return benchmark ? Math.min(kpi.value / benchmark, 1.5) : 0.5;
    });
    
    return alignmentScores.reduce((sum, score) => sum + score, 0) / alignmentScores.length;
  }
  
  private static isGrowthKPI(kpi: KPIMetric): boolean {
    const growthKPIs = [
      'revenue', 'salesConversion', 'marketShare', 'customerLifetimeValue',
      'innovationIndex', 'marketPosition', 'brandAwareness'
    ];
    
    return growthKPIs.includes(kpi.kpiCode);
  }
  
  private static calculateGrowthPotential(growthKPIs: KPIMetric[]): number {
    if (growthKPIs.length === 0) return 0;
    
    const growthScores = growthKPIs.map(kpi => {
      const benchmark = this.getBenchmarkForKPI(kpi.kpiCode);
      return benchmark ? Math.max(0, (benchmark - kpi.value) / benchmark) : 0.2;
    });
    
    return growthScores.reduce((sum, score) => sum + score, 0) / growthScores.length;
  }
  
  private static isRiskKPI(kpi: KPIMetric): boolean {
    const riskKPIs = [
      'cashBurnRate', 'churnRate', 'riskScore', 'complianceRate',
      'securityIncidents', 'auditFindings', 'debtRatio'
    ];
    
    return riskKPIs.includes(kpi.kpiCode);
  }
  
  private static calculateRiskCorrelations(riskKPIs: KPIMetric[]): Array<{
    kpi1: string;
    kpi2: string;
    strength: number;
    domain: string;
  }> {
    // Simplified correlation calculation
    // In real implementation, would use statistical correlation
    const correlations = [];
    
    for (let i = 0; i < riskKPIs.length; i++) {
      for (let j = i + 1; j < riskKPIs.length; j++) {
        const kpi1 = riskKPIs[i];
        const kpi2 = riskKPIs[j];
        
        // Simulated correlation based on domain and KPI types
        let strength = 0.3; // Base correlation
        
        if (kpi1.domain === kpi2.domain) {
          strength += 0.3; // Same domain correlation
        }
        
        if ((kpi1.kpiCode.includes('cash') && kpi2.kpiCode.includes('burn')) ||
            (kpi1.kpiCode.includes('churn') && kpi2.kpiCode.includes('acquisition'))) {
          strength += 0.4; // Known correlations
        }
        
        if (strength > 0.7) {
          correlations.push({
            kpi1: kpi1.kpiCode,
            kpi2: kpi2.kpiCode,
            strength,
            domain: kpi1.domain
          });
        }
      }
    }
    
    return correlations;
  }
  
  private static calculateSystemicRisk(kpis: KPIMetric[], health: CrossDomainHealth): number {
    const riskKPIs = kpis.filter(kpi => this.isRiskKPI(kpi));
    const totalKPIs = kpis.length;
    
    if (totalKPIs === 0) return 0;
    
    const riskRatio = riskKPIs.length / totalKPIs;
    const healthRisk = (100 - health.overallScore) / 100;
    
    return (riskRatio * 0.6) + (healthRisk * 0.4);
  }
  
  // NEW METHODS FOR CROSS-DOMAIN INTEGRATION
  
  /**
   * Generate insights based on cross-domain impacts
   */
  private static generateImpactBasedInsights(impacts: ImpactCalculation[], kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Group impacts by source domain
    const impactsBySource = new Map<string, ImpactCalculation[]>();
    impacts.forEach(impact => {
      const key = impact.sourceDomain;
      if (!impactsBySource.has(key)) {
        impactsBySource.set(key, []);
      }
      impactsBySource.get(key)!.push(impact);
    });
    
    // Generate insights for high-impact relationships
    impactsBySource.forEach((domainImpacts, sourceDomain) => {
      const highImpacts = domainImpacts.filter(i => Math.abs(i.impact) > 15);
      
      if (highImpacts.length > 0) {
        const avgImpact = highImpacts.reduce((sum, i) => sum + Math.abs(i.impact), 0) / highImpacts.length;
        const avgConfidence = highImpacts.reduce((sum, i) => sum + i.confidence, 0) / highImpacts.length;
        
        insights.push({
          id: `impact-${sourceDomain}-${Date.now()}`,
          type: avgImpact > 0 ? 'opportunity' : 'risk',
          title: `Impacto Cross-Domain: ${sourceDomain} influenciando múltiplos domínios`,
          description: `Domínio ${sourceDomain} está gerando impacto médio de ${avgImpact.toFixed(1)}% em ${highImpacts.length} outros domínios com confiança de ${(avgConfidence * 100).toFixed(1)}%`,
          metrics: highImpacts.map(i => i.targetKPI),
          impact: Math.min(95, avgImpact * 2),
          confidence: avgConfidence * 100,
          severity: this.determineImpactSeverity(avgImpact, avgConfidence),
          generatedAt: new Date(),
          domain: sourceDomain,
          value: avgImpact,
          crossDomainData: {
            impacts: highImpacts.map(i => ({
              sourceKPI: i.sourceKPI,
              targetKPI: i.targetKPI,
              impact: i.impact,
              confidence: i.confidence
            })),
            health: {} as any,
            composites: []
          }
        });
      }
    });
    
    return insights;
  }
  
  /**
   * Generate insights based on critical relationships
   */
  private static generateRelationshipInsights(health: CrossDomainHealth, kpis: KPIMetric[]): DecisionInsight[] {
    const insights: DecisionInsight[] = [];
    
    // Analyze critical relationships from health data
    health.criticalRelationships.forEach(critical => {
      if (critical.risk === 'high') {
        const sourceKPIs = kpis.filter(kpi => kpi.domain === critical.relationship.sourceDomain);
        const targetKPIs = kpis.filter(kpi => kpi.domain === critical.relationship.targetDomain);
        
        insights.push({
          id: `relationship-${critical.relationship.sourceDomain}-${critical.relationship.targetDomain}-${Date.now()}`,
          type: 'risk',
          title: `Relacionamento Crítico: ${critical.relationship.sourceDomain} → ${critical.relationship.targetDomain}`,
          description: `Relacionamento ${critical.relationship.relationship} com força ${critical.relationship.strength} apresenta risco alto para o negócio. Saúde atual: ${critical.health.toFixed(1)}%`,
          metrics: [...sourceKPIs.map(k => k.kpiCode), ...targetKPIs.map(k => k.kpiCode)],
          impact: 85,
          confidence: 90,
          severity: 'high',
          generatedAt: new Date(),
          domain: critical.relationship.sourceDomain,
          value: critical.health,
          crossDomainData: {
            impacts: [{
              sourceKPI: sourceKPIs[0]?.kpiCode || 'unknown',
              targetKPI: targetKPIs[0]?.kpiCode || 'unknown',
              impact: critical.health - 50, // Distance from ideal
              confidence: 0.9
            }],
            health,
            composites: []
          }
        });
      }
    });
    
    return insights;
  }
  
  /**
   * Determine severity based on impact and confidence
   */
  private static determineImpactSeverity(impact: number, confidence: number): 'low' | 'medium' | 'high' | 'critical' {
    const weightedScore = Math.abs(impact) * confidence;
    
    if (weightedScore > 40) return 'critical';
    if (weightedScore > 25) return 'high';
    if (weightedScore > 15) return 'medium';
    return 'low';
  }
  
  private static determineSeverity(gap: number): 'low' | 'medium' | 'high' | 'critical' {
    if (gap >= 30) return 'critical';
    if (gap >= 20) return 'high';
    if (gap >= 10) return 'medium';
    return 'low';
  }
}
