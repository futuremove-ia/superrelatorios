/**
 * Core domain types for multi-domain architecture
 * Defines the foundation for all business domains
 */

export type DomainType = 
  | 'financial'
  | 'commercial' 
  | 'operations'
  | 'strategy'
  | 'human-resources'
  | 'customer-support'
  | 'logistics';

export type DomainPriority = 'core' | 'support' | 'context';

export interface DomainMetadata {
  readonly type: DomainType;
  readonly priority: DomainPriority;
  readonly name: string;
  readonly description: string;
  readonly version: string;
}

export interface BaseKPIValue {
  readonly value: number;
  readonly unit: string;
  readonly threshold: Threshold;
  readonly trend: 'up' | 'down' | 'stable';
  readonly domain: DomainType;
}

export interface Threshold {
  readonly critical: number;
  readonly warning: number;
  readonly good: number;
}

export interface BaseDomainEntity {
  readonly id: string;
  readonly period: string;
  readonly domain: DomainType;
  readonly calculatedAt: Date;
}

export interface CrossDomainRelationship {
  readonly sourceDomain: DomainType;
  readonly targetDomain: DomainType;
  readonly relationship: 'influences' | 'depends_on' | 'correlates_with';
  readonly strength: 'weak' | 'moderate' | 'strong';
}

// Domain Registry for managing all domains
export class DomainRegistry {
  private static domains = new Map<DomainType, DomainMetadata>();
  
  static register(metadata: DomainMetadata): void {
    this.domains.set(metadata.type, metadata);
  }
  
  static get(type: DomainType): DomainMetadata | undefined {
    return this.domains.get(type);
  }
  
  static getAll(): DomainMetadata[] {
    return Array.from(this.domains.values());
  }
  
  static getCoreDomains(): DomainMetadata[] {
    return this.getAll().filter(d => d.priority === 'core');
  }
  
  static getSupportDomains(): DomainMetadata[] {
    return this.getAll().filter(d => d.priority === 'support');
  }
  
  static getContextDomains(): DomainMetadata[] {
    return this.getAll().filter(d => d.priority === 'context');
  }
}

// Cross-domain relationships
export const CROSS_DOMAIN_RELATIONSHIPS: CrossDomainRelationship[] = [
  // Financial influences all domains
  { sourceDomain: 'financial', targetDomain: 'commercial', relationship: 'influences', strength: 'strong' },
  { sourceDomain: 'financial', targetDomain: 'operations', relationship: 'influences', strength: 'strong' },
  { sourceDomain: 'financial', targetDomain: 'human-resources', relationship: 'influences', strength: 'moderate' },
  
  // Commercial influences operations
  { sourceDomain: 'commercial', targetDomain: 'operations', relationship: 'influences', strength: 'moderate' },
  
  // Operations influences customer support
  { sourceDomain: 'operations', targetDomain: 'customer-support', relationship: 'influences', strength: 'strong' },
  
  // Human Resources influences all domains
  { sourceDomain: 'human-resources', targetDomain: 'commercial', relationship: 'influences', strength: 'moderate' },
  { sourceDomain: 'human-resources', targetDomain: 'operations', relationship: 'influences', strength: 'moderate' },
  
  // Strategy influences all domains
  { sourceDomain: 'strategy', targetDomain: 'financial', relationship: 'influences', strength: 'strong' },
  { sourceDomain: 'strategy', targetDomain: 'commercial', relationship: 'influences', strength: 'strong' },
  { sourceDomain: 'strategy', targetDomain: 'operations', relationship: 'influences', strength: 'strong' },
  
  // Logistics context domain
  { sourceDomain: 'logistics', targetDomain: 'operations', relationship: 'influences', strength: 'moderate' },
  { sourceDomain: 'logistics', targetDomain: 'customer-support', relationship: 'influences', strength: 'moderate' },
];
