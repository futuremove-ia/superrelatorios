import { 
  DomainType, 
  CrossDomainRelationship, 
  CROSS_DOMAIN_RELATIONSHIPS 
} from '../core/BusinessDomain';

export interface KPIMetric {
  domain: DomainType;
  kpiCode: string;
  value: number;
  previousValue?: number;
  change?: number; // percentage change
}

export interface ImpactCalculation {
  sourceKPI: string;
  targetKPI: string;
  sourceDomain: DomainType;
  targetDomain: DomainType;
  relationship: CrossDomainRelationship;
  impact: number; // percentage impact
  confidence: number; // 0-1 confidence score
  methodology: 'linear' | 'exponential' | 'weighted';
}

export interface CompositeKPI {
  id: string;
  name: string;
  description: string;
  domains: DomainType[];
  kpis: string[];
  formula: string;
  value: number;
  threshold: { critical: number; warning: number; good: number };
  trend: 'up' | 'down' | 'stable';
}

export interface CrossDomainHealth {
  overallScore: number; // 0-100
  domainScores: Map<DomainType, number>;
  criticalRelationships: Array<{
    relationship: CrossDomainRelationship;
    health: number;
    risk: 'low' | 'medium' | 'high';
  }>;
  recommendations: string[];
}

export class CrossDomainAnalyzer {
  private static readonly IMPACT_WEIGHTS = {
    strong: 0.8,
    moderate: 0.5,
    weak: 0.2,
  };

  private static readonly DOMAIN_WEIGHTS = {
    financial: 0.3,
    commercial: 0.25,
    operations: 0.2,
    strategy: 0.15,
    'human-resources': 0.05,
    'customer-support': 0.03,
    logistics: 0.02,
  };

  /**
   * Calculate impact between KPIs across domains
   */
  static calculateImpact(
    sourceKPI: KPIMetric,
    targetKPI: KPIMetric,
    change: number
  ): ImpactCalculation {
    const relationship = this.findRelationship(sourceKPI.domain, targetKPI.domain);
    
    if (!relationship) {
      return {
        sourceKPI: sourceKPI.kpiCode,
        targetKPI: targetKPI.kpiCode,
        sourceDomain: sourceKPI.domain,
        targetDomain: targetKPI.domain,
        relationship: { 
          sourceDomain: sourceKPI.domain, 
          targetDomain: targetKPI.domain, 
          relationship: 'correlates_with' as const, 
          strength: 'weak' as const 
        },
        impact: 0,
        confidence: 0.1,
        methodology: 'linear'
      };
    }

    const weight = this.IMPACT_WEIGHTS[relationship.strength];
    const methodology = this.determineMethodology(relationship);
    const impact = this.applyMethodology(change, weight, methodology);
    const confidence = this.calculateConfidence(relationship, sourceKPI, targetKPI);

    return {
      sourceKPI: sourceKPI.kpiCode,
      targetKPI: targetKPI.kpiCode,
      sourceDomain: sourceKPI.domain,
      targetDomain: targetKPI.domain,
      relationship,
      impact,
      confidence,
      methodology
    };
  }

  /**
   * Calculate composite KPI across multiple domains
   */
  static calculateCompositeKPI(
    kpis: KPIMetric[],
    formula: string
  ): CompositeKPI {
    const domains = [...new Set(kpis.map(k => k.domain))];
    const kpiCodes = kpis.map(k => k.kpiCode);
    
    // Simple weighted average for now - can be enhanced with complex formulas
    let totalWeight = 0;
    let weightedSum = 0;

    kpis.forEach(kpi => {
      const weight = this.DOMAIN_WEIGHTS[kpi.domain];
      weightedSum += kpi.value * weight;
      totalWeight += weight;
    });

    const value = totalWeight > 0 ? weightedSum / totalWeight : 0;
    const trend = this.calculateTrend(kpis);

    return {
      id: `composite_${Date.now()}`,
      name: 'Cross-Domain Health Score',
      description: 'Overall health across all business domains',
      domains,
      kpis: kpiCodes,
      formula,
      value,
      threshold: { critical: 30, warning: 60, good: 80 },
      trend
    };
  }

  /**
   * Analyze cross-domain health
   */
  static analyzeCrossDomainHealth(kpis: KPIMetric[]): CrossDomainHealth {
    const domainScores = new Map<DomainType, number>();
    const domainGroups = this.groupKPIsByDomain(kpis);

    // Calculate individual domain scores
    domainGroups.forEach((domainKPIs, domain) => {
      domainScores.set(domain, this.calculateDomainScore(domainKPIs));
    });

    // Calculate overall score
    const overallScore = this.calculateOverallScore(domainScores);

    // Analyze critical relationships
    const criticalRelationships = this.analyzeCriticalRelationships(kpis, domainScores);

    // Generate recommendations
    const recommendations = this.generateRecommendations(domainScores, criticalRelationships);

    return {
      overallScore,
      domainScores,
      criticalRelationships,
      recommendations
    };
  }

  /**
   * Predict impact of changes across domains
   */
  static predictCascadeImpact(
    initialChange: { kpi: KPIMetric; change: number },
    allKPIs: KPIMetric[],
    maxDepth: number = 3
  ): Array<{
    kpi: KPIMetric;
    impact: number;
    path: string[];
    confidence: number;
  }> {
    const results: Array<{
      kpi: KPIMetric;
      impact: number;
      path: string[];
      confidence: number;
    }> = [];

    const visited = new Set<string>();
    const queue: Array<{
      kpi: KPIMetric;
      impact: number;
      path: string[];
      confidence: number;
      depth: number;
    }> = [
      {
        kpi: initialChange.kpi,
        impact: initialChange.change,
        path: [initialChange.kpi.kpiCode],
        confidence: 1.0,
        depth: 0
      }
    ];

    while (queue.length > 0) {
      const current = queue.shift()!;
      const key = `${current.kpi.domain}-${current.kpi.kpiCode}`;

      if (visited.has(key) || current.depth >= maxDepth) {
        continue;
      }

      visited.add(key);

      // Find all relationships from current KPI's domain
      const relationships = CROSS_DOMAIN_RELATIONSHIPS.filter(
        r => r.sourceDomain === current.kpi.domain
      );

      for (const relationship of relationships) {
        const targetDomainKPIs = allKPIs.filter(k => k.domain === relationship.targetDomain);
        
        for (const targetKPI of targetDomainKPIs) {
          const impact = this.calculateImpact(current.kpi, targetKPI, current.impact);
          const totalImpact = current.impact * impact.impact;
          const totalConfidence = current.confidence * impact.confidence;

          results.push({
            kpi: targetKPI,
            impact: totalImpact,
            path: [...current.path, targetKPI.kpiCode],
            confidence: totalConfidence
          });

          queue.push({
            kpi: targetKPI,
            impact: totalImpact,
            path: [...current.path, targetKPI.kpiCode],
            confidence: totalConfidence,
            depth: current.depth + 1
          });
        }
      }
    }

    return results.sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact));
  }

  private static findRelationship(sourceDomain: DomainType, targetDomain: DomainType): CrossDomainRelationship | null {
    return CROSS_DOMAIN_RELATIONSHIPS.find(
      r => r.sourceDomain === sourceDomain && r.targetDomain === targetDomain
    ) || null;
  }

  private static determineMethodology(relationship: CrossDomainRelationship): 'linear' | 'exponential' | 'weighted' {
    // Different methodologies based on relationship type and strength
    if (relationship.strength === 'strong') {
      return 'exponential';
    } else if (relationship.relationship === 'correlates_with') {
      return 'weighted';
    }
    return 'linear';
  }

  private static applyMethodology(
    change: number, 
    weight: number, 
    methodology: 'linear' | 'exponential' | 'weighted'
  ): number {
    switch (methodology) {
      case 'linear':
        return change * weight;
      case 'exponential':
        return Math.sign(change) * Math.pow(Math.abs(change), 1.5) * weight;
      case 'weighted':
        return change * weight * (1 + Math.abs(change) / 100);
      default:
        return change * weight;
    }
  }

  private static calculateConfidence(
    relationship: CrossDomainRelationship,
    sourceKPI: KPIMetric,
    targetKPI: KPIMetric
  ): number {
    let confidence = 0.5; // Base confidence

    // Adjust based on relationship strength
    switch (relationship.strength) {
      case 'strong': confidence += 0.3; break;
      case 'moderate': confidence += 0.1; break;
      case 'weak': confidence -= 0.1; break;
    }

    // Adjust based on data availability
    if (sourceKPI.previousValue && targetKPI.previousValue) {
      confidence += 0.2;
    }

    return Math.min(0.95, Math.max(0.1, confidence));
  }

  private static groupKPIsByDomain(kpis: KPIMetric[]): Map<DomainType, KPIMetric[]> {
    const groups = new Map<DomainType, KPIMetric[]>();
    
    kpis.forEach(kpi => {
      if (!groups.has(kpi.domain)) {
        groups.set(kpi.domain, []);
      }
      groups.get(kpi.domain)!.push(kpi);
    });

    return groups;
  }

  private static calculateDomainScore(kpis: KPIMetric[]): number {
    if (kpis.length === 0) return 0;

    // Simple average of normalized KPI values (0-100 scale)
    const total = kpis.reduce((sum, kpi) => {
      // Normalize KPI value to 0-100 scale (simplified)
      const normalized = Math.min(100, Math.max(0, kpi.value));
      return sum + normalized;
    }, 0);

    return total / kpis.length;
  }

  private static calculateOverallScore(domainScores: Map<DomainType, number>): number {
    let weightedSum = 0;
    let totalWeight = 0;

    domainScores.forEach((score, domain) => {
      const weight = this.DOMAIN_WEIGHTS[domain];
      weightedSum += score * weight;
      totalWeight += weight;
    });

    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  }

  private static analyzeCriticalRelationships(
    kpis: KPIMetric[],
    domainScores: Map<DomainType, number>
  ): Array<{
    relationship: CrossDomainRelationship;
    health: number;
    risk: 'low' | 'medium' | 'high';
  }> {
    const critical: Array<{
      relationship: CrossDomainRelationship;
      health: number;
      risk: 'low' | 'medium' | 'high';
    }> = [];

    CROSS_DOMAIN_RELATIONSHIPS.forEach(relationship => {
      const sourceScore = domainScores.get(relationship.sourceDomain) || 0;
      const targetScore = domainScores.get(relationship.targetDomain) || 0;

      // Health is average of both domains
      const health = (sourceScore + targetScore) / 2;

      // Risk based on relationship strength and health
      let risk: 'low' | 'medium' | 'high' = 'low';
      if (relationship.strength === 'strong' && health < 40) {
        risk = 'high';
      } else if (relationship.strength === 'moderate' && health < 50) {
        risk = 'medium';
      }

      critical.push({ relationship, health, risk });
    });

    return critical;
  }

  private static generateRecommendations(
    domainScores: Map<DomainType, number>,
    criticalRelationships: Array<{
      relationship: CrossDomainRelationship;
      health: number;
      risk: 'low' | 'medium' | 'high';
    }>
  ): string[] {
    const recommendations: string[] = [];

    // Domain-specific recommendations
    domainScores.forEach((score, domain) => {
      if (score < 30) {
        recommendations.push(`Crítico: Domínio ${domain} precisa de atenção imediata (score: ${score.toFixed(1)})`);
      } else if (score < 60) {
        recommendations.push(`Atenção: Domínio ${domain} abaixo do ideal (score: ${score.toFixed(1)})`);
      }
    });

    // Relationship-specific recommendations
    criticalRelationships
      .filter(r => r.risk === 'high')
      .forEach(r => {
        recommendations.push(
          `Alto risco: Relacionamento ${r.relationship.sourceDomain} → ${r.relationship.targetDomain} precisa de intervenção`
        );
      });

    return recommendations;
  }

  private static calculateTrend(kpis: KPIMetric[]): 'up' | 'down' | 'stable' {
    if (kpis.length === 0) return 'stable';

    let increases = 0;
    let decreases = 0;

    kpis.forEach(kpi => {
      if (kpi.previousValue !== undefined) {
        if (kpi.value > kpi.previousValue) increases++;
        else if (kpi.value < kpi.previousValue) decreases++;
      }
    });

    const total = increases + decreases;
    if (total === 0) return 'stable';

    const increaseRatio = increases / total;
    if (increaseRatio > 0.6) return 'up';
    if (increaseRatio < 0.4) return 'down';
    return 'stable';
  }
}
