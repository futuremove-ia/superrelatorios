import { CompositeKPI } from './CrossDomainAnalyzer';
import { DomainType } from '../core/BusinessDomain';

export class PredefinedCompositeKPIs {
  static readonly BUSINESS_HEALTH: CompositeKPI = {
    id: 'business_health',
    name: 'Business Health Score',
    description: 'Overall health of the business across all domains',
    domains: ['financial', 'commercial', 'operations', 'strategy'],
    kpis: ['netProfitMargin', 'salesConversion', 'operationalEfficiency', 'okrProgress'],
    formula: 'weighted_average(financial:0.4, commercial:0.3, operations:0.2, strategy:0.1)',
    value: 0,
    threshold: { critical: 30, warning: 60, good: 80 },
    trend: 'stable'
  };

  static readonly GROWTH_POTENTIAL: CompositeKPI = {
    id: 'growth_potential',
    name: 'Growth Potential Score',
    description: 'Potential for sustainable growth based on current metrics',
    domains: ['commercial', 'operations', 'human-resources'],
    kpis: ['customerLifetimeValue', 'throughput', 'employeeProductivity'],
    formula: 'weighted_average(commercial:0.4, operations:0.35, human-resources:0.25)',
    value: 0,
    threshold: { critical: 40, warning: 65, good: 85 },
    trend: 'stable'
  };

  static readonly OPERATIONAL_EXCELLENCE: CompositeKPI = {
    id: 'operational_excellence',
    name: 'Operational Excellence Score',
    description: 'Efficiency and quality of operations',
    domains: ['operations', 'logistics', 'customer-support'],
    kpis: ['operationalEfficiency', 'deliveryAccuracy', 'resolutionRate'],
    formula: 'weighted_average(operations:0.5, logistics:0.3, customer-support:0.2)',
    value: 0,
    threshold: { critical: 35, warning: 65, good: 85 },
    trend: 'stable'
  };

  static readonly FINANCIAL_STABILITY: CompositeKPI = {
    id: 'financial_stability',
    name: 'Financial Stability Score',
    description: 'Financial health and sustainability',
    domains: ['financial', 'commercial'],
    kpis: ['netProfitMargin', 'runway', 'customerAcquisitionCost'],
    formula: 'weighted_average(financial:0.7, commercial:0.3)',
    value: 0,
    threshold: { critical: 25, warning: 55, good: 80 },
    trend: 'stable'
  };

  static readonly CUSTOMER_EXPERIENCE: CompositeKPI = {
    id: 'customer_experience',
    name: 'Customer Experience Score',
    description: 'Overall customer satisfaction and experience',
    domains: ['commercial', 'customer-support'],
    kpis: ['churnRate', 'netPromoterScore', 'customerSatisfaction'],
    formula: 'weighted_average(commercial:0.4, customer-support:0.6)',
    value: 0,
    threshold: { critical: 30, warning: 60, good: 85 },
    trend: 'stable'
  };

  static readonly STRATEGIC_ALIGNMENT: CompositeKPI = {
    id: 'strategic_alignment',
    name: 'Strategic Alignment Score',
    description: 'Alignment between strategy and execution',
    domains: ['strategy', 'human-resources', 'operations'],
    kpis: ['okrProgress', 'strategicAlignment', 'capacityUtilization'],
    formula: 'weighted_average(strategy:0.5, human-resources:0.3, operations:0.2)',
    value: 0,
    threshold: { critical: 35, warning: 65, good: 85 },
    trend: 'stable'
  };

  static getAll(): CompositeKPI[] {
    return [
      this.BUSINESS_HEALTH,
      this.GROWTH_POTENTIAL,
      this.OPERATIONAL_EXCELLENCE,
      this.FINANCIAL_STABILITY,
      this.CUSTOMER_EXPERIENCE,
      this.STRATEGIC_ALIGNMENT
    ];
  }

  static getById(id: string): CompositeKPI | undefined {
    return this.getAll().find(kpi => kpi.id === id);
  }

  static getByDomains(domains: DomainType[]): CompositeKPI[] {
    return this.getAll().filter(kpi => 
      kpi.domains.some(domain => domains.includes(domain))
    );
  }

  static getCoreKPIs(): CompositeKPI[] {
    return this.getByDomains(['financial', 'commercial', 'operations', 'strategy']);
  }

  static getSupportKPIs(): CompositeKPI[] {
    return this.getByDomains(['human-resources', 'customer-support']);
  }

  static getContextKPIs(): CompositeKPI[] {
    return this.getByDomains(['logistics']);
  }
}
