import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CalculateMetricsUseCase } from '../../../../application/metrics/use-cases';
import { IMetricsCalculator, IMetricsRepository, MetricsEntity } from '../../../../domain/metrics';
import { CreateMetricsDTO } from '../../../../application/metrics/dtos';

// Mock implementations
const mockMetricsCalculator: IMetricsCalculator = {
  validateInputs: vi.fn(),
  calculateNetProfitMargin: vi.fn(),
  calculateCashBurnRate: vi.fn(),
  calculateRunway: vi.fn(),
  calculateSalesConversion: vi.fn(),
  calculateCustomerAcquisitionCost: vi.fn(),
  calculateAll: vi.fn(),
};

const mockMetricsRepository: IMetricsRepository = {
  save: vi.fn(),
  findById: vi.fn(),
  findByPeriod: vi.fn(),
  findLatest: vi.fn(),
  findByDateRange: vi.fn(),
  getHistory: vi.fn(),
  delete: vi.fn(),
};

describe('CalculateMetricsUseCase', () => {
  let useCase: CalculateMetricsUseCase;

  beforeEach(() => {
    vi.clearAllMocks();
    useCase = new CalculateMetricsUseCase(mockMetricsCalculator, mockMetricsRepository);
  });

  describe('execute', () => {
    const validData: CreateMetricsDTO = {
      period: '2024-01',
      financialData: {
        netProfit: 15000,
        revenue: 100000,
        monthlyNegativeCashFlow: 5000,
        totalCash: 30000,
      },
      salesData: {
        closedDeals: 20,
        leads: 100,
        marketingSpend: 5000,
        salesSpend: 3000,
        newCustomers: 40,
      },
    };

    it('should calculate and save metrics successfully', async () => {
      // Setup mocks
      const mockValidation = { isValid: true, errors: [] };
      const mockMetricsEntity: MetricsEntity = {
        id: 'test-id',
        period: '2024-01',
        kpis: {
          netProfitMargin: { value: 15, unit: '%', threshold: { critical: 5, warning: 10, good: 15 }, trend: 'stable' },
          cashBurnRate: { value: 5000, unit: 'R$', threshold: { critical: 10000, warning: 5000, good: 0 }, trend: 'stable' },
          runway: { value: 6, unit: 'meses', threshold: { critical: 3, warning: 6, good: 12 }, trend: 'stable' },
          salesConversion: { value: 20, unit: '%', threshold: { critical: 5, warning: 15, good: 25 }, trend: 'stable' },
          customerAcquisitionCost: { value: 200, unit: 'R$', threshold: { critical: 500, warning: 200, good: 100 }, trend: 'stable' },
        },
        calculatedAt: new Date(),
      };

      vi.mocked(mockMetricsCalculator.validateInputs).mockReturnValue(mockValidation);
      vi.mocked(mockMetricsCalculator.calculateAll).mockResolvedValue(mockMetricsEntity);
      vi.mocked(mockMetricsRepository.save).mockResolvedValue(mockMetricsEntity);

      // Execute
      const result = await useCase.execute(validData);

      // Verify
      expect(mockMetricsCalculator.validateInputs).toHaveBeenCalledWith({
        netProfit: 15000,
        revenue: 100000,
        monthlyNegativeCashFlow: 5000,
        totalCash: 30000,
        closedDeals: 20,
        leads: 100,
        marketingSpend: 5000,
        salesSpend: 3000,
        newCustomers: 40,
      });

      expect(mockMetricsCalculator.calculateAll).toHaveBeenCalledWith(
        '2024-01',
        validData.financialData,
        validData.salesData
      );

      expect(mockMetricsRepository.save).toHaveBeenCalledWith(mockMetricsEntity);

      expect(result).toBeDefined();
      expect(result.id).toBe('test-id');
      expect(result.period).toBe('2024-01');
    });

    it('should throw error for invalid inputs', async () => {
      const mockValidation = { isValid: false, errors: ['Invalid revenue'] };
      vi.mocked(mockMetricsCalculator.validateInputs).mockReturnValue(mockValidation);

      const invalidData = {
        ...validData,
        financialData: { ...validData.financialData, revenue: -1000 },
      };

      await expect(useCase.execute(invalidData)).rejects.toThrow('Invalid inputs: Invalid revenue');
    });
  });

  describe('executeBatch', () => {
    it('should process multiple metrics successfully', async () => {
      const dataArray = [
        {
          period: '2024-01',
          financialData: { netProfit: 10000, revenue: 50000, monthlyNegativeCashFlow: 3000, totalCash: 20000 },
          salesData: { closedDeals: 10, leads: 50, marketingSpend: 2000, salesSpend: 1000, newCustomers: 20 },
        },
      ];

      const mockValidation = { isValid: true, errors: [] };
      const mockMetricsEntity: MetricsEntity = {
        id: 'test-id',
        period: '2024-01',
        kpis: {
          netProfitMargin: { value: 20, unit: '%', threshold: { critical: 5, warning: 10, good: 15 }, trend: 'stable' },
          cashBurnRate: { value: 3000, unit: 'R$', threshold: { critical: 10000, warning: 5000, good: 0 }, trend: 'stable' },
          runway: { value: 6.67, unit: 'meses', threshold: { critical: 3, warning: 6, good: 12 }, trend: 'stable' },
          salesConversion: { value: 20, unit: '%', threshold: { critical: 5, warning: 15, good: 25 }, trend: 'stable' },
          customerAcquisitionCost: { value: 150, unit: 'R$', threshold: { critical: 500, warning: 200, good: 100 }, trend: 'stable' },
        },
        calculatedAt: new Date(),
      };

      vi.mocked(mockMetricsCalculator.validateInputs).mockReturnValue(mockValidation);
      vi.mocked(mockMetricsCalculator.calculateAll).mockResolvedValue(mockMetricsEntity);
      vi.mocked(mockMetricsRepository.save).mockResolvedValue(mockMetricsEntity);

      const result = await useCase.executeBatch(dataArray);

      expect(result).toHaveLength(1);
      expect(mockMetricsCalculator.calculateAll).toHaveBeenCalledTimes(1);
      expect(mockMetricsRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should handle errors gracefully', async () => {
      const dataArray = [
        {
          period: '2024-01',
          financialData: { netProfit: -1000, revenue: -5000, monthlyNegativeCashFlow: -3000, totalCash: -20000 },
          salesData: { closedDeals: -10, leads: -50, marketingSpend: -2000, salesSpend: -1000, newCustomers: -20 },
        },
      ];

      const mockValidation = { isValid: false, errors: ['Invalid data'] };
      vi.mocked(mockMetricsCalculator.validateInputs).mockReturnValue(mockValidation);

      const result = await useCase.executeBatch(dataArray);

      expect(result).toHaveLength(0); // All should fail
      expect(mockMetricsCalculator.calculateAll).not.toHaveBeenCalled();
      expect(mockMetricsRepository.save).not.toHaveBeenCalled();
    });
  });
});
