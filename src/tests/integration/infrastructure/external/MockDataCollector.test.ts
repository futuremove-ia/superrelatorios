import { describe, it, expect, beforeEach } from 'vitest';
import { MockDataCollector } from '../../../../infrastructure/external/data-collector/MockDataCollector';

describe('MockDataCollector', () => {
  let collector: MockDataCollector;

  beforeEach(() => {
    collector = new MockDataCollector({
      seed: 12345, // Fixed seed for consistent tests
      variability: 0.1,
      seasonality: true,
      growthRate: 0.05,
    });
  });

  describe('data collection', () => {
    it('should collect data for a specific period', async () => {
      const data = await collector.collectData('2024-01');

      expect(data.period).toBe('2024-01');
      expect(data.source).toBe('mock');
      expect(data.collectedAt).toBeInstanceOf(Date);

      // Validate financial data
      expect(data.financialData.revenue).toBeGreaterThan(0);
      expect(data.financialData.totalCash).toBeGreaterThan(0);
      expect(data.financialData.monthlyNegativeCashFlow).toBeGreaterThan(0);

      // Validate sales data
      expect(data.salesData.leads).toBeGreaterThan(0);
      expect(data.salesData.closedDeals).toBeGreaterThan(0);
      expect(data.salesData.newCustomers).toBeGreaterThan(0);
      expect(data.salesData.marketingSpend).toBeGreaterThan(0);
      expect(data.salesData.salesSpend).toBeGreaterThan(0);

      // Business logic validation
      expect(data.salesData.closedDeals).toBeLessThanOrEqual(data.salesData.leads);
      expect(data.salesData.newCustomers).toBeLessThanOrEqual(data.salesData.closedDeals);
    });

    it('should collect data for multiple periods', async () => {
      const data = await collector.collectDataRange('2024-01', '2024-03');

      expect(data).toHaveLength(3);
      expect(data[0].period).toBe('2024-01');
      expect(data[1].period).toBe('2024-02');
      expect(data[2].period).toBe('2024-03');

      // Check growth trend (allowing for variability - just check positive growth)
      expect(data[1].financialData.revenue).toBeGreaterThan(80000);
      expect(data[2].financialData.revenue).toBeGreaterThan(80000);
    });

    it('should generate historical data', async () => {
      const data = await collector.generateHistoricalData(6);

      expect(data).toHaveLength(7); // Including current month
      
      // Check chronological order
      for (let i = 1; i < data.length; i++) {
        const prevPeriod = parseInt(data[i - 1].period.replace('-', ''));
        const currPeriod = parseInt(data[i].period.replace('-', ''));
        expect(currPeriod).toBeGreaterThan(prevPeriod);
      }
    });
  });

  describe('scenario generation', () => {
    it('should generate healthy scenario data', async () => {
      const data = await collector.generateScenarioData('healthy', '2024-01');

      // Strong financial metrics
      expect(data.financialData.netProfit).toBeGreaterThan(20000);
      expect(data.financialData.revenue).toBeGreaterThan(100000);
      expect(data.financialData.monthlyNegativeCashFlow).toBeLessThan(5000);
      expect(data.financialData.totalCash).toBeGreaterThan(40000);

      // Strong sales metrics
      expect(data.salesData.closedDeals).toBeGreaterThan(25);
      const conversionRate = (data.salesData.closedDeals / data.salesData.leads) * 100;
      expect(conversionRate).toBeGreaterThan(20);
    });

    it('should generate warning scenario data', async () => {
      const data = await collector.generateScenarioData('warning', '2024-01');

      // Concerning financial metrics
      expect(data.financialData.netProfit).toBeLessThan(10000);
      expect(data.financialData.revenue).toBeLessThan(100000);
      expect(Math.abs(data.financialData.monthlyNegativeCashFlow)).toBeGreaterThan(5000);
      expect(data.financialData.totalCash).toBeLessThan(30000);

      // Concerning sales metrics
      expect(data.salesData.closedDeals).toBeLessThan(20);
      const conversionRate = (data.salesData.closedDeals / data.salesData.leads) * 100;
      expect(conversionRate).toBeLessThan(20);
    });

    it('should generate critical scenario data', async () => {
      const data = await collector.generateScenarioData('critical', '2024-01');

      // Critical financial metrics
      expect(data.financialData.netProfit).toBeLessThan(0);
      expect(data.financialData.revenue).toBeLessThan(80000);
      expect(Math.abs(data.financialData.monthlyNegativeCashFlow)).toBeGreaterThan(10000);
      expect(data.financialData.totalCash).toBeLessThan(20000);

      // Critical sales metrics
      expect(data.salesData.closedDeals).toBeLessThan(10);
      const conversionRate = (data.salesData.closedDeals / data.salesData.leads) * 100;
      expect(conversionRate).toBeLessThan(15);
    });
  });

  describe('data validation', () => {
    it('should validate healthy data', async () => {
      const data = await collector.generateScenarioData('healthy', '2024-01');
      const validation = collector.validateData(data);

      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('should validate warning data', async () => {
      const data = await collector.generateScenarioData('warning', '2024-01');
      const validation = collector.validateData(data);

      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('should validate critical data', async () => {
      const data = await collector.generateScenarioData('critical', '2024-01');
      const validation = collector.validateData(data);

      expect(validation.isValid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('should detect invalid data', async () => {
      const invalidData = {
        period: '2024-01',
        financialData: {
          netProfit: 1000,
          revenue: -500, // Invalid: negative revenue
          monthlyNegativeCashFlow: 1000,
          totalCash: 2000,
        },
        salesData: {
          closedDeals: 150, // Invalid: more than leads
          leads: 100,
          marketingSpend: 1000,
          salesSpend: 500,
          newCustomers: 200, // Invalid: more than closed deals
        },
        collectedAt: new Date(),
        source: 'mock' as const,
      };

      const validation = collector.validateData(invalidData);

      expect(validation.isValid).toBe(false);
      expect(validation.errors.length).toBeGreaterThan(0);
      expect(validation.errors).toContain('Revenue must be positive');
      expect(validation.errors).toContain('Closed deals cannot exceed leads');
    });

    it('should generate warnings for unusual data', async () => {
      const unusualData = {
        period: '2024-01',
        financialData: {
          netProfit: 80000, // 80% profit margin - unusual
          revenue: 100000,
          monthlyNegativeCashFlow: 1000,
          totalCash: 200000,
        },
        salesData: {
          closedDeals: 60, // 60% conversion - unusual
          leads: 100,
          marketingSpend: 1000,
          salesSpend: 500,
          newCustomers: 50,
        },
        collectedAt: new Date(),
        source: 'mock' as const,
      };

      const validation = collector.validateData(unusualData);

      expect(validation.isValid).toBe(true);
      expect(validation.warnings.length).toBeGreaterThan(0);
    });
  });

  describe('consistency and reproducibility', () => {
    it('should generate consistent data with same seed', async () => {
      const collector1 = new MockDataCollector({ seed: 12345 });
      const collector2 = new MockDataCollector({ seed: 12345 });

      const data1 = await collector1.collectData('2024-01');
      const data2 = await collector2.collectData('2024-01');

      expect(data1.financialData.revenue).toBe(data2.financialData.revenue);
      expect(data1.salesData.closedDeals).toBe(data2.salesData.closedDeals);
    });

    it('should generate different data with different seeds', async () => {
      const collector1 = new MockDataCollector({ seed: 12345 });
      const collector2 = new MockDataCollector({ seed: 67890 });

      const data1 = await collector1.collectData('2024-01');
      const data2 = await collector2.collectData('2024-01');

      // Should be different (though could occasionally be the same by chance)
      expect(data1.financialData.revenue !== data2.financialData.revenue).toBe(true);
    });

    it('should respect variability configuration', async () => {
      const lowVariability = new MockDataCollector({ seed: 12345, variability: 0.01 });
      const highVariability = new MockDataCollector({ seed: 12345, variability: 0.5 });

      const lowData = await lowVariability.collectData('2024-01');
      const highData = await highVariability.collectData('2024-01');

      // High variability should produce more variation from base values
      expect(Math.abs(highData.financialData.revenue - 100000)).toBeGreaterThan(
        Math.abs(lowData.financialData.revenue - 100000)
      );
    });
  });

  describe('seasonality', () => {
    it('should apply seasonality when enabled', async () => {
      const seasonalCollector = new MockDataCollector({ 
        seed: 12345, 
        seasonality: true 
      });
      const nonSeasonalCollector = new MockDataCollector({ 
        seed: 12345, 
        seasonality: false 
      });

      // Q4 vs Q1
      const q4Data = await seasonalCollector.collectData('2024-12');
      const q1Data = await seasonalCollector.collectData('2024-03');
      const nonSeasonalQ4Data = await nonSeasonalCollector.collectData('2024-12');

      // Seasonal data should show Q4 stronger than Q1
      expect(q4Data.financialData.revenue).toBeGreaterThan(q1Data.financialData.revenue);
      
      // Non-seasonal data should be closer to base values
      expect(Math.abs(nonSeasonalQ4Data.financialData.revenue - 100000)).toBeLessThan(
        Math.abs(q4Data.financialData.revenue - 100000)
      );
    });
  });

  describe('statistics', () => {
    it('should return statistics', () => {
      const stats = collector.getStatistics();

      expect(stats).toHaveProperty('totalCollected');
      expect(stats).toHaveProperty('averageRevenue');
      expect(stats).toHaveProperty('averageProfitMargin');
      expect(stats).toHaveProperty('averageConversionRate');
      expect(stats).toHaveProperty('dataPoints');

      // Should be zero initially
      expect(stats.totalCollected).toBe(0);
      expect(stats.dataPoints).toBe(0);
    });
  });
});
