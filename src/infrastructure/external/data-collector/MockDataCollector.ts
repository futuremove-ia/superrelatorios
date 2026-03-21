import { FinancialData, SalesData } from '../../../domain/metrics';

/**
 * Mock data collector for MVP demonstration
 * Generates realistic business data for testing and development
 * Follows Clean Architecture principles
 */

export interface DataCollectionConfig {
  seed?: number;
  variability?: number; // 0-1, how much data should vary
  seasonality?: boolean;
  growthRate?: number; // Monthly growth rate
}

export interface CollectedData {
  period: string;
  financialData: FinancialData;
  salesData: SalesData;
  collectedAt: Date;
  source: 'mock';
}

export class MockDataCollector {
  private config: DataCollectionConfig;
  private random: (min: number, max: number) => number;

  constructor(config: DataCollectionConfig = {}) {
    this.config = {
      seed: config.seed || Date.now(),
      variability: config.variability || 0.2,
      seasonality: config.seasonality !== false,
      growthRate: config.growthRate || 0.05,
    };

    // Seeded random number generator for consistent results
    this.random = this.createSeededRandom(this.config.seed!);
  }

  /**
   * Collect data for a specific period
   */
  async collectData(period: string): Promise<CollectedData> {
    const [year, month] = period.split('-').map(Number);
    const monthIndex = month - 1;

    // Base values with realistic business metrics
    const baseRevenue = 100000; // $100k monthly revenue
    const baseNetProfit = 15000; // $15k monthly profit
    const baseCashFlow = -5000; // $5k monthly burn
    const baseTotalCash = 30000; // $30k cash reserve
    const baseLeads = 100; // 100 leads per month
    const baseClosedDeals = 20; // 20 deals per month
    const baseMarketingSpend = 5000; // $5k marketing spend
    const baseSalesSpend = 3000; // $3k sales spend
    const baseNewCustomers = 40; // 40 new customers per month

    // Apply seasonality (Q4 is typically stronger)
    const seasonalityFactor = this.config.seasonality 
      ? this.getSeasonalityFactor(monthIndex)
      : 1;

    // Apply growth over time
    const monthsSinceStart = (year - 2024) * 12 + monthIndex;
    const growthFactor = Math.pow(1 + this.config.growthRate!, monthsSinceStart);

    // Apply random variability
    const variabilityFactor = 1 + (this.random(-this.config.variability!, this.config.variability!));

    const combinedFactor = seasonalityFactor * growthFactor * variabilityFactor;

    // Generate realistic data with some business logic
    const revenue = Math.round(baseRevenue * combinedFactor);
    const netProfit = Math.round(baseNetProfit * combinedFactor * this.random(0.8, 1.2));
    const monthlyNegativeCashFlow = Math.round(Math.abs(baseCashFlow * combinedFactor * this.random(0.7, 1.3)));
    const totalCash = Math.round(baseTotalCash * combinedFactor * this.random(0.9, 1.1));

    // Sales metrics with realistic conversion rates
    const leads = Math.round(baseLeads * combinedFactor * this.random(0.8, 1.2));
    const closedDeals = Math.round(leads * this.random(0.15, 0.25)); // 15-25% conversion
    const marketingSpend = Math.round(baseMarketingSpend * combinedFactor * this.random(0.8, 1.2));
    const salesSpend = Math.round(baseSalesSpend * combinedFactor * this.random(0.8, 1.2));
    const newCustomers = Math.round(closedDeals * this.random(0.8, 1.2)); // Some deals might be existing customers

    const financialData: FinancialData = {
      netProfit,
      revenue,
      monthlyNegativeCashFlow,
      totalCash,
    };

    const salesData: SalesData = {
      closedDeals,
      leads,
      marketingSpend,
      salesSpend,
      newCustomers,
    };

    return {
      period,
      financialData,
      salesData,
      collectedAt: new Date(),
      source: 'mock',
    };
  }

  /**
   * Collect data for multiple periods
   */
  async collectDataRange(startPeriod: string, endPeriod: string): Promise<CollectedData[]> {
    const results: CollectedData[] = [];
    const [startYear, startMonth] = startPeriod.split('-').map(Number);
    const [endYear, endMonth] = endPeriod.split('-').map(Number);

    let currentYear = startYear;
    let currentMonth = startMonth;

    while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
      const period = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
      const data = await this.collectData(period);
      results.push(data);

      // Move to next month
      currentMonth++;
      if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
      }
    }

    return results;
  }

  /**
   * Generate historical data for the last 12 months
   */
  async generateHistoricalData(months: number = 12): Promise<CollectedData[]> {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - months);

    const startPeriod = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}`;
    const endPeriod = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}`;

    return this.collectDataRange(startPeriod, endPeriod);
  }

  /**
   * Generate data with specific scenarios for testing
   */
  async generateScenarioData(scenario: 'healthy' | 'warning' | 'critical', period: string): Promise<CollectedData> {
    const baseData = await this.collectData(period);

    switch (scenario) {
      case 'healthy':
        // Strong metrics across the board
        return {
          ...baseData,
          financialData: {
            netProfit: 25000, // High profit
            revenue: 150000, // High revenue
            monthlyNegativeCashFlow: -2000, // Low burn
            totalCash: 50000, // High cash
          },
          salesData: {
            closedDeals: 30, // High conversion
            leads: 120,
            marketingSpend: 6000,
            salesSpend: 4000,
            newCustomers: 50,
          },
        };

      case 'warning':
        // Some metrics need attention
        return {
          ...baseData,
          financialData: {
            netProfit: 8000, // Lower profit
            revenue: 80000, // Lower revenue
            monthlyNegativeCashFlow: -8000, // Higher burn
            totalCash: 25000, // Lower cash
          },
          salesData: {
            closedDeals: 12, // Lower conversion
            leads: 100,
            marketingSpend: 5000,
            salesSpend: 3000,
            newCustomers: 20,
          },
        };

      case 'critical':
        // Critical situation
        return {
          ...baseData,
          financialData: {
            netProfit: -5000, // Loss
            revenue: 50000, // Low revenue
            monthlyNegativeCashFlow: -15000, // High burn
            totalCash: 10000, // Low cash
          },
          salesData: {
            closedDeals: 5, // Very low conversion
            leads: 80,
            marketingSpend: 4000,
            salesSpend: 2000,
            newCustomers: 8,
          },
        };

      default:
        return baseData;
    }
  }

  /**
   * Get data collection statistics
   */
  getStatistics(): {
    totalCollected: number;
    averageRevenue: number;
    averageProfitMargin: number;
    averageConversionRate: number;
    dataPoints: number;
  } {
    // In a real implementation, this would track actual statistics
    // For MVP, we'll return placeholder data
    return {
      totalCollected: 0,
      averageRevenue: 0,
      averageProfitMargin: 0,
      averageConversionRate: 0,
      dataPoints: 0,
    };
  }

  /**
   * Validate collected data
   */
  validateData(data: CollectedData): {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  } {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Financial data validation
    if (data.financialData.revenue <= 0) {
      errors.push('Revenue must be positive');
    }

    if (data.financialData.totalCash <= 0) {
      errors.push('Total cash must be positive');
    }

    if (Math.abs(data.financialData.netProfit) > data.financialData.revenue) {
      warnings.push('Net profit magnitude exceeds revenue');
    }

    // Sales data validation
    if (data.salesData.leads <= 0) {
      errors.push('Leads must be positive');
    }

    if (data.salesData.closedDeals > data.salesData.leads) {
      errors.push('Closed deals cannot exceed leads');
    }

    if (data.salesData.newCustomers > data.salesData.closedDeals) {
      warnings.push('New customers exceed closed deals');
    }

    // Business logic validation
    const conversionRate = (data.salesData.closedDeals / data.salesData.leads) * 100;
    if (conversionRate > 50) {
      warnings.push('Conversion rate seems unusually high');
    }

    const profitMargin = (data.financialData.netProfit / data.financialData.revenue) * 100;
    if (profitMargin > 50) {
      warnings.push('Profit margin seems unusually high');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Create seeded random number generator
   */
  private createSeededRandom(seed: number): (min: number, max: number) => number {
    let currentSeed = seed;

    return (min: number, max: number): number => {
      currentSeed = (currentSeed * 9301 + 49297) % 233280;
      const random = currentSeed / 233280;
      return min + random * (max - min);
    };
  }

  /**
   * Get seasonality factor for month
   */
  private getSeasonalityFactor(monthIndex: number): number {
    // Q4 (Oct-Dec) typically stronger, Q1 (Jan-Mar) weaker
    const seasonalityFactors = [0.9, 0.85, 0.9, 0.95, 1.0, 1.05, 1.1, 1.05, 1.0, 1.15, 1.2, 1.25];
    return seasonalityFactors[monthIndex];
  }
}
