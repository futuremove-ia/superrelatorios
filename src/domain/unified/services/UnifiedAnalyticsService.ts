import { 
  UnifiedMetricsEntity, 
  DomainType,
  UnifiedKPIValue 
} from '../interfaces/UnifiedMetricsEntity';
import { UnifiedMetricsService } from './UnifiedMetricsService';

/**
 * Unified Analytics Service - Advanced analytics and insights for unified metrics
 * 
 * This service provides sophisticated analytics capabilities including trend analysis,
 * anomaly detection, predictive insights, and comprehensive dashboards. It leverages
 * the unified metrics data to generate actionable business intelligence.
 * 
 * @example
 * ```typescript
 * const service = new UnifiedAnalyticsService(metricsService);
 * const dashboard = await service.getComprehensiveDashboard('2024-01');
 * const anomalies = await service.getAnomalyDetection('2024-01');
 * ```
 */
export class UnifiedAnalyticsService {
  constructor(private readonly metricsService: UnifiedMetricsService) {}

  /**
   * Generates a comprehensive dashboard with all domains and insights
   * 
   * @param period - The period to analyze
   * @returns Comprehensive dashboard data
   */
  async getComprehensiveDashboard(period: string): Promise<{
    period: string;
    overview: {
      totalDomains: number;
      totalKPIs: number;
      overallHealth: number;
      overallStatus: 'critical' | 'warning' | 'good' | 'unknown';
    };
    domains: Record<DomainType, {
      healthScore: number;
      kpiCount: number;
      status: 'critical' | 'warning' | 'good' | 'unknown';
      topKPIs: Array<{
        code: string;
        value: number;
        unit: string;
        status: 'critical' | 'warning' | 'good';
      }>;
    }>;
    insights: Array<{
      type: 'health' | 'performance' | 'trend';
      severity: 'critical' | 'warning' | 'info' | 'success';
      message: string;
    }>;
  }> {
    try {
      const entities = await this.metricsService.getCrossDomainMetrics(period);
      const healthSummary = await this.metricsService.getMetricsHealthSummary(period);

      const domains: Record<DomainType, {
      healthScore: number;
      kpiCount: number;
      status: 'critical' | 'warning' | 'good' | 'unknown';
      topKPIs: Array<{
        code: string;
        value: number;
        unit: string;
        status: 'critical' | 'warning' | 'good';
      }>;
    }> = {} as Record<DomainType, {
      healthScore: number;
      kpiCount: number;
      status: 'critical' | 'warning' | 'good' | 'unknown';
      topKPIs: Array<{
        code: string;
        value: number;
        unit: string;
        status: 'critical' | 'warning' | 'good';
      }>;
    }>;
      let totalKPIs = 0;

      // Process each domain
      for (const entity of entities) {
        const topKPIs = this.getTopKPIs(entity);
        domains[entity.domain] = {
          healthScore: healthSummary.domainBreakdown[entity.domain]?.healthScore || 0,
          kpiCount: Object.keys(entity.kpis).length,
          status: healthSummary.domainBreakdown[entity.domain]?.status || 'unknown',
          topKPIs
        };
        totalKPIs += Object.keys(entity.kpis).length;
      }

      const insights = this.generateDashboardInsights(healthSummary, entities);

      return {
        period,
        overview: {
          totalDomains: entities.length,
          totalKPIs,
          overallHealth: healthSummary.healthScore,
          overallStatus: healthSummary.overallStatus
        },
        domains,
        insights
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to generate comprehensive dashboard');
    }
  }

  /**
   * Compares multiple domains side by side
   * 
   * @param domains - Array of domain types to compare
   * @param period - The period to analyze
   * @returns Domain comparison analysis
   */
  async getDomainComparison(
    domains: DomainType[], 
    period: string
  ): Promise<{
    period: string;
    domains: Array<{
      name: DomainType;
      healthScore: number;
      kpiCount: number;
      topPerformers: Array<{
        code: string;
        value: number;
        status: 'critical' | 'warning' | 'good';
      }>;
      concerns: Array<{
        code: string;
        value: number;
        status: 'critical' | 'warning' | 'good';
      }>;
    }>;
    insights: Array<{
      type: 'comparison' | 'performance';
      severity: 'critical' | 'warning' | 'info' | 'success';
      message: string;
    }>;
  }> {
    try {
      const entities = await this.metricsService.getCrossDomainMetrics(period);
      const filteredEntities = entities.filter(e => domains.includes(e.domain));

      const domainAnalysis = filteredEntities.map(entity => {
        const topPerformers = this.getTopPerformers(entity);
        const concerns = this.getConcerns(entity);

        return {
          name: entity.domain,
          healthScore: this.calculateEntityHealthScore(entity),
          kpiCount: Object.keys(entity.kpis).length,
          topPerformers,
          concerns
        };
      });

      const insights = this.generateComparisonInsights(domainAnalysis);

      return {
        period,
        domains: domainAnalysis,
        insights
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to generate domain comparison');
    }
  }

  /**
   * Analyzes performance trends across domains
   * 
   * @param domains - Array of domain types to analyze
   * @param periods - Array of periods to analyze
   * @returns Performance trends analysis
   */
  async getPerformanceTrends(
    domains: DomainType[], 
    periods: string[]
  ): Promise<{
    periods: string[];
    domainTrends: Record<DomainType, {
      overallTrend: 'improving' | 'declining' | 'stable';
      keyChanges: Array<{
        kpi: string;
        change: number;
        direction: 'up' | 'down' | 'stable';
        impact: 'positive' | 'negative' | 'neutral';
      }>;
    }>;
    insights: Array<{
      type: 'trend';
      severity: 'critical' | 'warning' | 'info' | 'success';
      message: string;
    }>;
  }> {
    try {
      const domainTrends: Record<DomainType, {
      overallTrend: 'improving' | 'declining' | 'stable';
      keyChanges: Array<{
        kpi: string;
        change: number;
        direction: 'up' | 'down' | 'stable';
        impact: 'positive' | 'negative' | 'neutral';
      }>;
    }> = {} as Record<DomainType, {
      overallTrend: 'improving' | 'declining' | 'stable';
      keyChanges: Array<{
        kpi: string;
        change: number;
        direction: 'up' | 'down' | 'stable';
        impact: 'positive' | 'negative' | 'neutral';
      }>;
    }>;

      for (const domain of domains) {
        const trends = await this.metricsService.getMetricsTrends(domain, periods);
        domainTrends[domain] = this.analyzeDomainTrends(trends);
      }

      const insights = this.generateTrendInsights(domainTrends);

      return {
        periods,
        domainTrends,
        insights
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to analyze performance trends');
    }
  }

  /**
   * Detects anomalies in metrics data
   * 
   * @param period - The period to analyze
   * @returns Anomaly detection results
   */
  async getAnomalyDetection(period: string): Promise<{
    period: string;
    anomalies: Array<{
      domain: DomainType;
      kpi: string;
      value: number;
      expectedRange: { min: number; max: number };
      severity: 'critical' | 'warning' | 'info';
      description: string;
    }>;
    insights: Array<{
      type: 'anomaly';
      severity: 'critical' | 'warning' | 'info' | 'success';
      message: string;
    }>;
  }> {
    try {
      const entities = await this.metricsService.getCrossDomainMetrics(period);
      const anomalies: any[] = [];

      for (const entity of entities) {
        const entityAnomalies = this.detectEntityAnomalies(entity);
        anomalies.push(...entityAnomalies);
      }

      const insights = this.generateAnomalyInsights(anomalies);

      return {
        period,
        anomalies,
        insights
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to detect anomalies');
    }
  }

  /**
   * Generates predictive insights based on historical trends
   * 
   * @param domain - The domain to analyze
   * @param periods - Historical periods to use for prediction
   * @returns Predictive insights
   */
  async getPredictiveInsights(
    domain: DomainType, 
    periods: string[]
  ): Promise<{
    domain: DomainType;
    predictions: Array<{
      kpi: string;
      currentValue: number;
      predictedValue: number;
      confidence: number;
      timeframe: string;
      trend: 'positive' | 'negative' | 'stable';
    }>;
    insights: Array<{
      type: 'prediction';
      severity: 'critical' | 'warning' | 'info' | 'success';
      message: string;
    }>;
  }> {
    try {
      const trends = await this.metricsService.getMetricsTrends(domain, periods);
      const predictions = this.generatePredictions(trends);
      const insights = this.generatePredictionInsights(predictions);

      return {
        domain,
        predictions,
        insights
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to generate predictive insights');
    }
  }

  // Private helper methods

  /**
   * Gets top KPIs from an entity
   */
  private getTopKPIs(entity: UnifiedMetricsEntity): Array<{
    code: string;
    value: number;
    unit: string;
    status: 'critical' | 'warning' | 'good';
  }> {
    return Object.entries(entity.kpis)
      .map(([code, kpi]) => ({
        code,
        value: kpi.value,
        unit: kpi.unit,
        status: this.getKPIStatus(kpi) as 'critical' | 'warning' | 'good'
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }

  /**
   * Gets top performing KPIs
   */
  private getTopPerformers(entity: UnifiedMetricsEntity): Array<{
    code: string;
    value: number;
    status: 'critical' | 'warning' | 'good';
  }> {
    return Object.entries(entity.kpis)
      .filter(([_, kpi]) => this.getKPIStatus(kpi) === 'good')
      .map(([code, kpi]) => ({
        code,
        value: kpi.value,
        status: 'good' as const
      }))
      .slice(0, 3);
  }

  /**
   * Gets concerning KPIs
   */
  private getConcerns(entity: UnifiedMetricsEntity): Array<{
    code: string;
    value: number;
    status: 'critical' | 'warning' | 'good';
  }> {
    return Object.entries(entity.kpis)
      .filter(([_, kpi]) => this.getKPIStatus(kpi) !== 'good')
      .map(([code, kpi]) => ({
        code,
        value: kpi.value,
        status: this.getKPIStatus(kpi) as 'critical' | 'warning' | 'good'
      }))
      .slice(0, 3);
  }

  /**
   * Gets KPI status based on thresholds
   */
  private getKPIStatus(kpi: UnifiedKPIValue): 'critical' | 'warning' | 'good' {
    if (!kpi.threshold) return 'good';

    const { critical, warning, good } = kpi.threshold;
    
    // For burn/cost KPIs, lower is better (inverted logic)
    if (kpi.unit === 'R$' && (kpi.threshold?.good === 0 || kpi.threshold?.warning === 0)) {
      // Burn/cost KPI logic: lower values are better
      if (kpi.value >= critical) return 'critical';
      if (kpi.value >= warning) return 'warning';
      if (kpi.value <= good) return 'good';
      return 'warning';
    }
    
    // Normal KPI logic: higher values are better
    if (kpi.value <= critical) return 'critical';
    if (kpi.value <= warning) return 'warning';
    if (kpi.value >= good) return 'good';
    
    return 'warning';
  }

  /**
   * Calculates health score for an entity
   */
  private calculateEntityHealthScore(entity: UnifiedMetricsEntity): number {
    const kpis = Object.values(entity.kpis);
    if (kpis.length === 0) return 0;

    let totalScore = 0;
    for (const kpi of kpis) {
      const status = this.getKPIStatus(kpi);
      if (status === 'good') totalScore += 100;
      else if (status === 'warning') totalScore += 50;
      else totalScore += 25;
    }

    return Math.round(totalScore / kpis.length);
  }

  /**
   * Generates dashboard insights
   */
  private generateDashboardInsights(
    healthSummary: any, 
    entities: UnifiedMetricsEntity[]
  ): Array<any> {
    const insights: any[] = [];

    if (entities.length === 0) {
      insights.push({
        type: 'health',
        severity: 'warning',
        message: `No metrics data available for period ${healthSummary.period}`
      });
      return insights;
    }

    // Overall health insight
    if (healthSummary.overallStatus === 'good') {
      insights.push({
        type: 'health',
        severity: 'success',
        message: `Overall business health is good with ${healthSummary.healthScore}% score`
      });
    } else if (healthSummary.overallStatus === 'warning') {
      insights.push({
        type: 'health',
        severity: 'warning',
        message: `Business health needs attention with ${healthSummary.healthScore}% score`
      });
    } else {
      insights.push({
        type: 'health',
        severity: 'critical',
        message: `Critical business health issues detected with ${healthSummary.healthScore}% score`
      });
    }

    return insights;
  }

  /**
   * Generates comparison insights
   */
  private generateComparisonInsights(domainAnalysis: any[]): Array<any> {
    const insights: any[] = [];

    if (domainAnalysis.length === 1) {
      insights.push({
        type: 'comparison',
        severity: 'info',
        message: `Single domain analysis: ${domainAnalysis[0].name} domain performance`
      });
    } else {
      const bestPerformer = domainAnalysis.reduce((best, current) => 
        current.healthScore > best.healthScore ? current : best
      );

      insights.push({
        type: 'comparison',
        severity: 'info',
        message: `${bestPerformer.name} domain is performing best with ${bestPerformer.healthScore}% health score`
      });
    }

    return insights;
  }

  /**
   * Analyzes domain trends
   */
  private analyzeDomainTrends(trends: any): {
    overallTrend: 'improving' | 'declining' | 'stable';
    keyChanges: any[];
  } {
    const trendValues = Object.values(trends.trends || {});
    
    if (trendValues.length === 0) {
      return {
        overallTrend: 'stable',
        keyChanges: []
      };
    }

    // Check if this is an empty trends scenario
    const hasEmptyTrends = trendValues.every((t: any) => 
      !t.current || !t.change || t.change === 0
    );

    if (hasEmptyTrends) {
      return {
        overallTrend: 'stable',
        keyChanges: []
      };
    }

    const keyChanges = Object.entries(trends.trends || {}).map(([kpi, trend]: [string, any]) => ({
      kpi,
      change: trend.change,
      direction: trend.direction,
      impact: this.getChangeImpact(trend, kpi)
    }));

    // Calculate overall trend based on impacts
    const positiveChanges = keyChanges.filter((t: any) => 
      t.impact === 'positive'
    ).length;
    const negativeChanges = keyChanges.filter((t: any) => 
      t.impact === 'negative'
    ).length;

    let overallTrend: 'improving' | 'declining' | 'stable';
    if (positiveChanges > negativeChanges) {
      overallTrend = 'improving';
    } else if (negativeChanges > positiveChanges) {
      overallTrend = 'declining';
    } else {
      overallTrend = 'stable';
    }

    return { overallTrend, keyChanges };
  }

  /**
   * Gets change impact based on direction and KPI type
   */
  private getChangeImpact(trend: any, kpiCode: string): 'positive' | 'negative' | 'neutral' {
    // For burn/cost KPIs, down is positive (less cost)
    // For margin/rate KPIs, up is positive (better performance)
    // For other KPIs, up is generally positive
    
    if (trend.direction === 'stable') return 'neutral';
    
    // Check if this is a cost/burn KPI (where down is good)
    if (kpiCode.toLowerCase().includes('burn') || kpiCode.toLowerCase().includes('cost')) {
      return trend.direction === 'down' ? 'positive' : 'negative';
    }
    
    // Default: up is positive
    return trend.direction === 'up' ? 'positive' : 'negative';
  }

  /**
   * Generates trend insights
   */
  private generateTrendInsights(domainTrends: Record<DomainType, any>): Array<any> {
    const insights: any[] = [];
    const trendValues = Object.values(domainTrends);

    if (trendValues.length === 0) {
      insights.push({
        type: 'trend',
        severity: 'info',
        message: 'No trend data available for analysis'
      });
      return insights;
    }

    const improvingDomains = trendValues.filter((t: any) => t.overallTrend === 'improving').length;
    const decliningDomains = trendValues.filter((t: any) => t.overallTrend === 'declining').length;
    const stableDomains = trendValues.filter((t: any) => t.overallTrend === 'stable').length;
    
    if (improvingDomains > 0) {
      insights.push({
        type: 'trend',
        severity: 'positive',
        message: `${improvingDomains} domains showing improving trends`
      });
    }
    
    if (decliningDomains > 0) {
      insights.push({
        type: 'trend',
        severity: 'warning',
        message: `${decliningDomains} domains showing declining trends`
      });
    }
    
    if (stableDomains > 0) {
      insights.push({
        type: 'trend',
        severity: 'info',
        message: `${stableDomains} domains showing stable trends`
      });
    }

    return insights;
  }

  /**
   * Detects anomalies in an entity
   */
  private detectEntityAnomalies(entity: UnifiedMetricsEntity): any[] {
    const anomalies: any[] = [];

    for (const [kpiCode, kpi] of Object.entries(entity.kpis)) {
      const anomaly = this.checkKPIAnomaly(kpiCode, kpi);
      if (anomaly) {
        anomalies.push(anomaly);
      }
    }

    return anomalies;
  }

  /**
   * Checks for anomalies in a specific KPI
   */
  private checkKPIAnomaly(kpiCode: string, kpi: UnifiedKPIValue): any | null {
    if (!kpi.threshold) return null;

    const { critical, warning, good } = kpi.threshold;
    
    // Check for critical anomalies based on KPI type
    if (kpiCode.toLowerCase().includes('margin') || kpiCode.toLowerCase().includes('rate')) {
      // For margin/rate KPIs, negative values are critical
      if (kpi.value < 0) {
        return {
          domain: kpi.domain,
          kpi: kpiCode,
          value: kpi.value,
          expectedRange: { min: critical, max: good },
          severity: 'critical',
          description: 'Negative value detected'
        };
      }
    }
    
    if (kpiCode.toLowerCase().includes('burn') || kpiCode.toLowerCase().includes('cost')) {
      // For burn/cost KPIs, extremely high values are critical
      // Special case: for burn/cost KPIs, good is often 0 (ideal), so we use different logic
      // Only flag as anomaly if value is more than 2x the critical threshold
      if (kpi.value > critical * 2) {
        return {
          domain: kpi.domain,
          kpi: kpiCode,
          value: kpi.value,
          expectedRange: { min: 0, max: critical },
          severity: 'critical',
          description: 'Value significantly above expected range'
        };
      }
    }
    
    // General anomaly check (skip for burn/cost KPIs as they have special logic)
    if (!kpiCode.toLowerCase().includes('burn') && !kpiCode.toLowerCase().includes('cost')) {
      if (kpi.value < critical * 0.5 || kpi.value > good * 2) {
        return {
          domain: kpi.domain,
          kpi: kpiCode,
          value: kpi.value,
          expectedRange: { min: critical, max: good },
          severity: 'critical',
          description: 'Value outside expected range'
        };
      }
    }

    return null;
  }

  /**
   * Generates anomaly insights
   */
  private generateAnomalyInsights(anomalies: any[]): Array<any> {
    const insights: any[] = [];

    if (anomalies.length === 0) {
      insights.push({
        type: 'anomaly',
        severity: 'success',
        message: 'No anomalies detected in metrics data'
      });
    } else {
      const criticalAnomalies = anomalies.filter(a => a.severity === 'critical').length;
      insights.push({
        type: 'anomaly',
        severity: 'critical',
        message: `${criticalAnomalies} critical anomalies detected in metrics data`
      });
    }

    return insights;
  }

  /**
   * Generates predictions based on trends
   */
  private generatePredictions(trends: any): any[] {
    const predictions: any[] = [];

    for (const [kpiCode, trend] of Object.entries(trends.trends || {})) {
      const trendData = trend as any;
      if (trendData.current !== undefined && trendData.change !== undefined) {
        const predictedValue = trendData.current * (1 + trendData.change / 100);
        
        // Determine trend direction based on KPI type
        let trendDirection: 'positive' | 'negative' | 'stable';
        if (trendData.direction === 'stable') {
          trendDirection = 'stable';
        } else if (kpiCode.toLowerCase().includes('burn') || kpiCode.toLowerCase().includes('cost')) {
          // For cost/burn KPIs, down is positive
          trendDirection = trendData.direction === 'down' ? 'positive' : 'negative';
        } else {
          // For other KPIs, up is positive
          trendDirection = trendData.direction === 'up' ? 'positive' : 'negative';
        }
        
        predictions.push({
          kpi: kpiCode,
          currentValue: trendData.current,
          predictedValue: Math.round(predictedValue * 100) / 100,
          confidence: 0.75, // Simplified confidence calculation
          timeframe: 'next_period',
          trend: trendDirection
        });
      }
    }

    return predictions;
  }

  /**
   * Generates prediction insights
   */
  private generatePredictionInsights(predictions: any[]): Array<any> {
    const insights: any[] = [];

    if (predictions.length === 0) {
      insights.push({
        type: 'prediction',
        severity: 'warning',
        message: 'Insufficient data for reliable predictions'
      });
    } else {
      const positivePredictions = predictions.filter(p => p.trend === 'positive').length;
      insights.push({
        type: 'prediction',
        severity: 'info',
        message: `${positivePredictions} KPIs predicted to improve in next period`
      });
    }

    return insights;
  }
}
