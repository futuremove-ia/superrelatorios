import { describe, it, expect, beforeEach } from 'vitest';
import { MetricsEntity, MetricsEntityFactory, FinancialData, SalesData } from '../../../../../domain/metrics/entities';

describe('MetricsEntity', () => {
  describe('MetricsEntityFactory', () => {
    it('should create metrics entity with all required fields', () => {
      const metricsData = {
        period: '2024-01',
        netProfitMargin: {
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable' as const,
        },
        cashBurnRate: {
          value: 5000,
          unit: 'R$',
          threshold: { critical: 10000, warning: 5000, good: 0 },
          trend: 'down' as const,
        },
        runway: {
          value: 6,
          unit: 'meses',
          threshold: { critical: 3, warning: 6, good: 12 },
          trend: 'stable' as const,
        },
        salesConversion: {
          value: 20,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'up' as const,
        },
        customerAcquisitionCost: {
          value: 150,
          unit: 'R$',
          threshold: { critical: 500, warning: 200, good: 100 },
          trend: 'down' as const,
        },
      };

      const result = MetricsEntityFactory.create(metricsData);

      expect(result).toHaveProperty('id');
      expect(result.period).toBe('2024-01');
      expect(result.kpis.netProfitMargin.value).toBe(15);
      expect(result.kpis.cashBurnRate.value).toBe(5000);
      expect(result.kpis.runway.value).toBe(6);
      expect(result.kpis.salesConversion.value).toBe(20);
      expect(result.kpis.customerAcquisitionCost.value).toBe(150);
      expect(result).toHaveProperty('calculatedAt');
      expect(result.calculatedAt).toBeInstanceOf(Date);
    });

    it('should generate UUID when no ID provided', () => {
      const metricsData = {
        period: '2024-01',
        netProfitMargin: {
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable' as const,
        },
        cashBurnRate: {
          value: 5000,
          unit: 'R$',
          threshold: { critical: 10000, warning: 5000, good: 0 },
          trend: 'down' as const,
        },
        runway: {
          value: 6,
          unit: 'meses',
          threshold: { critical: 3, warning: 6, good: 12 },
          trend: 'stable' as const,
        },
        salesConversion: {
          value: 20,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'up' as const,
        },
        customerAcquisitionCost: {
          value: 150,
          unit: 'R$',
          threshold: { critical: 500, warning: 200, good: 100 },
          trend: 'down' as const,
        },
      };

      const result = MetricsEntityFactory.create(metricsData);

      // Verificar que um ID válido foi gerado
      expect(result.id).toBeTruthy();
      expect(typeof result.id).toBe('string');
      expect(result.id.length).toBeGreaterThan(0);
      
      // Verificar estrutura básica do UUID (formato com hífens)
      expect(result.id).toContain('-');
      const parts = result.id.split('-');
      expect(parts.length).toBe(5);
    });

    it('should use provided ID when given', () => {
      const metricsData = {
        id: 'test-id-123',
        period: '2024-01',
        netProfitMargin: {
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable' as const,
        },
        cashBurnRate: {
          value: 5000,
          unit: 'R$',
          threshold: { critical: 10000, warning: 5000, good: 0 },
          trend: 'down' as const,
        },
        runway: {
          value: 6,
          unit: 'meses',
          threshold: { critical: 3, warning: 6, good: 12 },
          trend: 'stable' as const,
        },
        salesConversion: {
          value: 20,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'up' as const,
        },
        customerAcquisitionCost: {
          value: 150,
          unit: 'R$',
          threshold: { critical: 500, warning: 200, good: 100 },
          trend: 'down' as const,
        },
      };

      const result = MetricsEntityFactory.create(metricsData);

      expect(result.id).toBe('test-id-123');
    });
  });

  describe('createFromRawData', () => {
    let financialData: FinancialData;
    let salesData: SalesData;

    beforeEach(() => {
      financialData = {
        netProfit: 15000,
        revenue: 100000,
        monthlyNegativeCashFlow: 5000,
        totalCash: 30000,
      };

      salesData = {
        closedDeals: 20,
        leads: 100,
        marketingSpend: 5000,
        salesSpend: 3000,
        newCustomers: 40,
      };
    });

    it('should calculate net profit margin correctly', () => {
      const result = MetricsEntityFactory.createFromRawData('2024-01', financialData, salesData);

      expect(result.kpis.netProfitMargin.value).toBe(15);
      expect(result.kpis.netProfitMargin.unit).toBe('%');
    });

    it('should calculate cash burn rate correctly', () => {
      const result = MetricsEntityFactory.createFromRawData('2024-01', financialData, salesData);

      expect(result.kpis.cashBurnRate.value).toBe(5000);
      expect(result.kpis.cashBurnRate.unit).toBe('R$');
    });

    it('should calculate runway correctly', () => {
      const result = MetricsEntityFactory.createFromRawData('2024-01', financialData, salesData);

      expect(result.kpis.runway.value).toBe(6);
      expect(result.kpis.runway.unit).toBe('meses');
    });

    it('should calculate sales conversion correctly', () => {
      const result = MetricsEntityFactory.createFromRawData('2024-01', financialData, salesData);

      expect(result.kpis.salesConversion.value).toBe(20);
      expect(result.kpis.salesConversion.unit).toBe('%');
    });

    it('should calculate customer acquisition cost correctly', () => {
      const result = MetricsEntityFactory.createFromRawData('2024-01', financialData, salesData);

      expect(result.kpis.customerAcquisitionCost.value).toBe(200);
      expect(result.kpis.customerAcquisitionCost.unit).toBe('R$');
    });

    it('should set all trends to stable by default', () => {
      const result = MetricsEntityFactory.createFromRawData('2024-01', financialData, salesData);

      expect(result.kpis.netProfitMargin.trend).toBe('stable');
      expect(result.kpis.cashBurnRate.trend).toBe('stable');
      expect(result.kpis.runway.trend).toBe('stable');
      expect(result.kpis.salesConversion.trend).toBe('stable');
      expect(result.kpis.customerAcquisitionCost.trend).toBe('stable');
    });
  });
});
