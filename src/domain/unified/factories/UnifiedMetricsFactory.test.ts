import { describe, it, expect, beforeEach } from 'vitest';
import { 
  UnifiedMetricsEntity, 
  UnifiedKPIValue,
  UnifiedMetricsCollection,
  CrossDomainRelationship,
  DomainType
} from '../interfaces/UnifiedMetricsEntity';
import { UnifiedMetricsFactory } from './UnifiedMetricsFactory';

describe('UnifiedMetricsFactory', () => {
  const mockKPIValue: UnifiedKPIValue = {
    value: 15,
    unit: '%',
    threshold: { critical: 5, warning: 10, good: 15 },
    trend: 'up',
    previousValue: 12,
    change: 25,
    confidence: 0.95,
    lastUpdated: new Date('2024-01-15T10:00:00Z'),
    domain: 'financial' as DomainType
  };

  describe('create', () => {
    it('should create a UnifiedMetricsEntity with all required fields', () => {
      // Arrange
      const kpis = {
        netProfitMargin: mockKPIValue,
        cashBurnRate: { ...mockKPIValue, value: 5000, unit: 'R$' }
      };

      // Act
      const result = UnifiedMetricsFactory.create('financial', kpis);

      // Assert
      expect(result).toBeDefined();
      expect(result.id).toBeTruthy();
      expect(result.domain).toBe('financial');
      expect(result.period).toBe('current');
      expect(result.kpis).toEqual(kpis);
      expect(result.calculatedAt).toBeInstanceOf(Date);
    });

    it('should generate UUID when no ID provided', () => {
      // Arrange
      const kpis = { netProfitMargin: mockKPIValue };

      // Act
      const result = UnifiedMetricsFactory.create('financial', kpis);

      // Assert
      expect(result.id).toBeTruthy();
      expect(result.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
    });

    it('should use provided ID when given', () => {
      // Arrange
      const customId = 'custom-id-123';
      const kpis = { netProfitMargin: mockKPIValue };

      // Act
      const result = UnifiedMetricsFactory.create('financial', kpis, customId, '2024-01');

      // Assert
      expect(result.id).toBe(customId);
      expect(result.period).toBe('2024-01');
    });

    it('should validate domain type', () => {
      // Arrange
      const kpis = { netProfitMargin: mockKPIValue };

      // Act & Assert
      expect(() => {
        UnifiedMetricsFactory.create('invalid' as DomainType, kpis);
      }).toThrow('Invalid domain type');
    });

    it('should validate KPIs object is not empty', () => {
      // Act & Assert
      expect(() => {
        UnifiedMetricsFactory.create('financial', {});
      }).toThrow('At least one KPI is required');
    });

    it('should use current period when not specified', () => {
      // Arrange
      const kpis = { netProfitMargin: mockKPIValue };

      // Act
      const result = UnifiedMetricsFactory.create('financial', kpis);

      // Assert
      expect(result.period).toBe('current');
    });
  });

  describe('createFromRawData', () => {
    it('should create entity from raw financial data', () => {
      // Arrange
      const rawData = {
        netProfit: 15000,
        revenue: 100000,
        monthlyNegativeCashFlow: 5000,
        totalCash: 30000
      };

      // Act
      const result = UnifiedMetricsFactory.createFromRawData('financial', rawData);

      // Assert
      expect(result.domain).toBe('financial');
      expect(result.kpis.netProfitMargin.value).toBe(15);
      expect(result.kpis.cashBurnRate.value).toBe(5000);
      expect(result.kpis.runway.value).toBe(6);
      expect(result.kpis.netProfitMargin.unit).toBe('%');
      expect(result.kpis.cashBurnRate.unit).toBe('R$');
      expect(Object.keys(result.kpis)).toHaveLength(3); // Only 3 KPIs should be created
    });

    it('should create entity from raw commercial data', () => {
      // Arrange
      const rawData = {
        leads: 100,
        opportunities: 30,
        closedDeals: 10,
        newCustomers: 8,
        marketingSpend: 2000,
        salesSpend: 1500
      };

      // Act
      const result = UnifiedMetricsFactory.createFromRawData('commercial', rawData);

      // Assert
      expect(result.domain).toBe('commercial');
      expect(result.kpis.salesConversion.value).toBe(10);
      expect(result.kpis.customerAcquisitionCost.value).toBe(437.5);
      expect(result.kpis.salesConversion.unit).toBe('%');
    });

    it('should handle missing raw data gracefully', () => {
      // Act
      const result = UnifiedMetricsFactory.createFromRawData('financial', {});

      // Assert
      expect(result.domain).toBe('financial');
      expect(Object.keys(result.kpis)).toHaveLength(0);
    });

    it('should validate raw data type', () => {
      // Act & Assert
      expect(() => {
        UnifiedMetricsFactory.createFromRawData('financial', null as any);
      }).toThrow('Raw data must be an object');
    });
  });

  describe('createCrossDomain', () => {
    it('should create cross-domain collection from multiple domains', () => {
      // Arrange
      const financialKPIs = {
        netProfitMargin: { ...mockKPIValue, value: 15 }
      };
      const commercialKPIs = {
        salesConversion: { ...mockKPIValue, value: 20 }
      };
      const operationsKPIs = {
        operationalEfficiency: { ...mockKPIValue, value: 85 }
      };

      const domainMetrics = {
        financial: UnifiedMetricsFactory.create('financial', financialKPIs),
        commercial: UnifiedMetricsFactory.create('commercial', commercialKPIs),
        operations: UnifiedMetricsFactory.create('operations', operationsKPIs)
      };

      // Act
      const result = UnifiedMetricsFactory.createCrossDomain(domainMetrics, '2024-01');

      // Assert
      expect(result.period).toBe('2024-01');
      expect(result.metrics).toEqual(domainMetrics);
      expect(result.healthScore).toBeGreaterThan(0);
      expect(result.healthScore).toBeLessThanOrEqual(100);
      expect(result.calculatedAt).toBeInstanceOf(Date);
    });

    it('should calculate health score correctly', () => {
      // Arrange
      const goodKPIs = { 
        netProfitMargin: { 
          ...mockKPIValue, 
          value: 15,
          threshold: { critical: 5, warning: 10, good: 15 }
        } 
      }; // good
      const warningKPIs = { 
        salesConversion: { 
          ...mockKPIValue, 
          value: 12,
          threshold: { critical: 5, warning: 15, good: 25 }
        } 
      }; // warning
      const criticalKPIs = { 
        operationalEfficiency: { 
          ...mockKPIValue, 
          value: 40,
          threshold: { critical: 60, warning: 75, good: 85 }
        } 
      }; // critical

      const domainMetrics = {
        financial: UnifiedMetricsFactory.create('financial', goodKPIs),
        commercial: UnifiedMetricsFactory.create('commercial', warningKPIs),
        operations: UnifiedMetricsFactory.create('operations', criticalKPIs)
      };

      // Act
      const result = UnifiedMetricsFactory.createCrossDomain(domainMetrics, '2024-01');

      // Assert
      expect(result.healthScore).toBeLessThan(80); // Should be lower due to critical KPI
      expect(result.healthScore).toBeGreaterThan(30); // But not too low
      
      // Calculate expected score manually: (good: 100 + warning: 60 + critical: 20) / 3 = 60
      expect(result.healthScore).toBe(60);
    });

    it('should handle empty domain metrics', () => {
      // Act
      const result = UnifiedMetricsFactory.createCrossDomain({}, '2024-01');

      // Assert
      expect(result.period).toBe('2024-01');
      expect(result.metrics).toEqual({});
      expect(result.healthScore).toBe(0);
    });

    it('should create cross-domain relationships', () => {
      // Arrange
      const domainMetrics = {
        financial: UnifiedMetricsFactory.create('financial', {
          netProfitMargin: { ...mockKPIValue, value: 15 }
        }),
        commercial: UnifiedMetricsFactory.create('commercial', {
          salesConversion: { ...mockKPIValue, value: 20 }
        })
      };

      // Act
      const result = UnifiedMetricsFactory.createCrossDomain(domainMetrics, '2024-01');

      // Assert
      expect(result.relationships).toBeDefined();
      expect(result.relationships.length).toBeGreaterThan(0);
      
      const financialToCommercial = result.relationships.find(
        r => r.sourceDomain === 'financial' && r.targetDomain === 'commercial'
      );
      expect(financialToCommercial).toBeDefined();
      expect(financialToCommercial?.relationship).toBe('influences');
    });
  });

  describe('validateKPIValue', () => {
    it('should validate good KPI value', () => {
      // Arrange
      const kpiValue = { ...mockKPIValue, value: 15 };

      // Act
      const result = UnifiedMetricsFactory.validateKPIValue('netProfitMargin', kpiValue);

      // Assert
      expect(result.isValid).toBe(true);
      expect(result.status).toBe('good');
      expect(result.errors).toHaveLength(0);
    });

    it('should validate warning KPI value', () => {
      // Arrange
      const kpiValue = { ...mockKPIValue, value: 8 };

      // Act
      const result = UnifiedMetricsFactory.validateKPIValue('netProfitMargin', kpiValue);

      // Assert
      expect(result.isValid).toBe(true);
      expect(result.status).toBe('warning');
      expect(result.warnings.length).toBeGreaterThan(0);
    });

    it('should validate critical KPI value', () => {
      // Arrange
      const kpiValue = { ...mockKPIValue, value: 3 };

      // Act
      const result = UnifiedMetricsFactory.validateKPIValue('netProfitMargin', kpiValue);

      // Assert
      expect(result.isValid).toBe(false);
      expect(result.status).toBe('critical');
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.recommendations.length).toBeGreaterThan(0);
    });

    it('should handle unknown KPI codes', () => {
      // Arrange
      const kpiValue = { 
        ...mockKPIValue, 
        value: 50,
        threshold: undefined // Remove threshold to trigger unknown KPI logic
      };

      // Act
      const result = UnifiedMetricsFactory.validateKPIValue('unknownKPI', kpiValue);

      // Assert
      expect(result.isValid).toBe(true);
      expect(result.status).toBe('good'); // Default to good for unknown KPIs
      expect(result.warnings.length).toBeGreaterThan(0); // Should have at least one warning
      expect(result.warnings).toContain('Unknown KPI code: unknownKPI');
    });

    it('should validate negative values where appropriate', () => {
      // Arrange
      const kpiValue = { 
        ...mockKPIValue, 
        value: -5,
        threshold: { critical: 100, warning: 50, good: 0 } // Use very high thresholds to ensure domain validation triggers
      };

      // Act
      const result = UnifiedMetricsFactory.validateKPIValue('netProfitMargin', kpiValue);

      // Assert
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Negative profit margin detected');
    });
  });

  describe('calculateTrend', () => {
    it('should calculate upward trend', () => {
      // Act
      const result = UnifiedMetricsFactory.calculateTrend(15, 12);

      // Assert
      expect(result.trend).toBe('up');
      expect(result.change).toBe(25);
    });

    it('should calculate downward trend', () => {
      // Act
      const result = UnifiedMetricsFactory.calculateTrend(10, 15);

      // Assert
      expect(result.trend).toBe('down');
      expect(result.change).toBe(-33.33);
    });

    it('should calculate stable trend', () => {
      // Act
      const result = UnifiedMetricsFactory.calculateTrend(15, 15);

      // Assert
      expect(result.trend).toBe('stable');
      expect(result.change).toBe(0);
    });

    it('should handle missing previous value', () => {
      // Act
      const result = UnifiedMetricsFactory.calculateTrend(15, undefined);

      // Assert
      expect(result.trend).toBe('stable');
      expect(result.change).toBeUndefined();
    });

    it('should handle zero previous value', () => {
      // Act
      const result = UnifiedMetricsFactory.calculateTrend(15, 0);

      // Assert
      expect(result.trend).toBe('up');
      expect(result.change).toBe(Infinity);
    });
  });

  describe('mergeEntities', () => {
    it('should merge two entities of the same domain', () => {
      // Arrange
      const entity1 = UnifiedMetricsFactory.create('financial', {
        netProfitMargin: mockKPIValue
      });
      const entity2 = UnifiedMetricsFactory.create('financial', {
        cashBurnRate: { ...mockKPIValue, value: 5000, unit: 'R$' }
      });

      // Act
      const result = UnifiedMetricsFactory.mergeEntities(entity1, entity2);

      // Assert
      expect(result.domain).toBe('financial');
      expect(result.kpis.netProfitMargin).toBeDefined();
      expect(result.kpis.cashBurnRate).toBeDefined();
      expect(Object.keys(result.kpis)).toHaveLength(2);
    });

    it('should handle conflicting KPIs by using the latest', () => {
      // Arrange
      const entity1 = UnifiedMetricsFactory.create('financial', {
        netProfitMargin: { ...mockKPIValue, value: 10 }
      });
      const entity2 = UnifiedMetricsFactory.create('financial', {
        netProfitMargin: { ...mockKPIValue, value: 15 }
      });

      // Act
      const result = UnifiedMetricsFactory.mergeEntities(entity1, entity2);

      // Assert
      expect(result.kpis.netProfitMargin.value).toBe(15); // Latest value
    });

    it('should validate domains match', () => {
      // Arrange
      const entity1 = UnifiedMetricsFactory.create('financial', { netProfitMargin: mockKPIValue });
      const entity2 = UnifiedMetricsFactory.create('commercial', { salesConversion: mockKPIValue });

      // Act & Assert
      expect(() => {
        UnifiedMetricsFactory.mergeEntities(entity1, entity2);
      }).toThrow('Cannot merge entities from different domains');
    });
  });
});
