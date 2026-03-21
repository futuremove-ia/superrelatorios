import { MetricsEntity, FinancialData, SalesData } from '../entities';

/**
 * Service interface for KPI calculations
 * Core business logic for metric calculations
 */

export interface IMetricsCalculator {
  /**
   * Calculate Net Profit Margin
   * Formula: (Net Profit / Revenue) * 100
   */
  calculateNetProfitMargin(data: FinancialData): number;

  /**
   * Calculate Cash Burn Rate
   * Formula: Monthly Negative Cash Flow
   */
  calculateCashBurnRate(data: FinancialData): number;

  /**
   * Calculate Runway
   * Formula: Total Cash / Monthly Burn Rate
   */
  calculateRunway(data: FinancialData): number;

  /**
   * Calculate Sales Conversion Rate
   * Formula: (Closed Deals / Leads) * 100
   */
  calculateSalesConversion(data: SalesData): number;

  /**
   * Calculate Customer Acquisition Cost
   * Formula: (Marketing + Sales Spend) / New Customers
   */
  calculateCustomerAcquisitionCost(data: SalesData): number;

  /**
   * Calculate all KPIs from raw data
   */
  calculateAll(
    period: string,
    financialData: FinancialData,
    salesData: SalesData
  ): Promise<MetricsEntity>;

  /**
   * Validate calculation inputs
   */
  validateInputs(data: FinancialData & SalesData): {
    isValid: boolean;
    errors: string[];
  };
}
