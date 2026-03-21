import { describe, it, expect, beforeEach } from 'vitest';
import { 
  DomainRegistry, 
  DomainType, 
  DomainPriority,
  CROSS_DOMAIN_RELATIONSHIPS 
} from '../../domain/core/BusinessDomain';
import { initializeDomains } from '../../domain/registry/DomainRegistry';

describe('Multi-Domain Architecture', () => {
  beforeEach(() => {
    // Reset registry before each test
    DomainRegistry['domains'].clear();
    initializeDomains();
  });

  describe('Domain Registry', () => {
    it('should register all 7 domains', () => {
      const allDomains = DomainRegistry.getAll();
      expect(allDomains).toHaveLength(7);
    });

    it('should have correct domain priorities', () => {
      const coreDomains = DomainRegistry.getCoreDomains();
      const supportDomains = DomainRegistry.getSupportDomains();
      const contextDomains = DomainRegistry.getContextDomains();

      expect(coreDomains).toHaveLength(4);
      expect(supportDomains).toHaveLength(2);
      expect(contextDomains).toHaveLength(1);
    });

    it('should have all required core domains', () => {
      const coreDomains = DomainRegistry.getCoreDomains();
      const coreDomainTypes = coreDomains.map(d => d.type);

      expect(coreDomainTypes).toContain('financial');
      expect(coreDomainTypes).toContain('commercial');
      expect(coreDomainTypes).toContain('operations');
      expect(coreDomainTypes).toContain('strategy');
    });

    it('should have all required support domains', () => {
      const supportDomains = DomainRegistry.getSupportDomains();
      const supportDomainTypes = supportDomains.map(d => d.type);

      expect(supportDomainTypes).toContain('human-resources');
      expect(supportDomainTypes).toContain('customer-support');
    });

    it('should have logistics as context domain', () => {
      const contextDomains = DomainRegistry.getContextDomains();
      const contextDomainTypes = contextDomains.map(d => d.type);

      expect(contextDomainTypes).toContain('logistics');
    });
  });

  describe('Cross-Domain Relationships', () => {
    it('should have defined cross-domain relationships', () => {
      expect(CROSS_DOMAIN_RELATIONSHIPS.length).toBeGreaterThan(0);
    });

    it('should have financial influencing commercial and operations', () => {
      const financialInfluences = CROSS_DOMAIN_RELATIONSHIPS.filter(
        r => r.sourceDomain === 'financial' && r.relationship === 'influences'
      );

      expect(financialInfluences.some(r => r.targetDomain === 'commercial')).toBe(true);
      expect(financialInfluences.some(r => r.targetDomain === 'operations')).toBe(true);
    });

    it('should have strategy influencing core domains', () => {
      const strategyInfluences = CROSS_DOMAIN_RELATIONSHIPS.filter(
        r => r.sourceDomain === 'strategy' && r.relationship === 'influences'
      );

      expect(strategyInfluences.some(r => r.targetDomain === 'financial')).toBe(true);
      expect(strategyInfluences.some(r => r.targetDomain === 'commercial')).toBe(true);
      expect(strategyInfluences.some(r => r.targetDomain === 'operations')).toBe(true);
    });

    it('should have operations influencing customer support', () => {
      const operationsInfluence = CROSS_DOMAIN_RELATIONSHIPS.find(
        r => r.sourceDomain === 'operations' && r.targetDomain === 'customer-support'
      );

      expect(operationsInfluence).toBeDefined();
      expect(operationsInfluence?.relationship).toBe('influences');
      expect(operationsInfluence?.strength).toBe('strong');
    });
  });

  describe('Domain Metadata', () => {
    it('should have valid metadata for all domains', () => {
      const allDomains = DomainRegistry.getAll();

      allDomains.forEach(domain => {
        expect(domain.type).toBeDefined();
        expect(domain.priority).toBeDefined();
        expect(domain.name).toBeDefined();
        expect(domain.description).toBeDefined();
        expect(domain.version).toBeDefined();

        expect(typeof domain.type).toBe('string');
        expect(['core', 'support', 'context']).toContain(domain.priority);
        expect(typeof domain.name).toBe('string');
        expect(typeof domain.description).toBe('string');
        expect(typeof domain.version).toBe('string');
      });
    });

    it('should have meaningful domain names', () => {
      const allDomains = DomainRegistry.getAll();

      allDomains.forEach(domain => {
        expect(domain.name.length).toBeGreaterThan(0);
        expect(domain.description.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Domain Type Safety', () => {
    it('should only allow valid domain types', () => {
      const validTypes: DomainType[] = [
        'financial', 'commercial', 'operations', 'strategy',
        'human-resources', 'customer-support', 'logistics'
      ];

      const allDomains = DomainRegistry.getAll();
      const domainTypes = allDomains.map(d => d.type);

      domainTypes.forEach(type => {
        expect(validTypes).toContain(type);
      });
    });

    it('should have unique domain types', () => {
      const allDomains = DomainRegistry.getAll();
      const domainTypes = allDomains.map(d => d.type);
      const uniqueTypes = [...new Set(domainTypes)];

      expect(domainTypes).toHaveLength(uniqueTypes.length);
    });
  });
});
