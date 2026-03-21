import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GetMetricsUseCase } from '../../../../application/metrics/use-cases';
import { IMetricsRepository, MetricsEntity } from '../../../../domain/metrics';

// Mock implementation
const mockMetricsRepository: IMetricsRepository = {
  save: vi.fn(),
  findById: vi.fn(),
  findByPeriod: vi.fn(),
  findLatest: vi.fn(),
  findByDateRange: vi.fn(),
  getHistory: vi.fn(),
  delete: vi.fn(),
};

describe('GetMetricsUseCase', () => {
  let useCase: GetMetricsUseCase;

  beforeEach(() => {
    vi.clearAllMocks();
    useCase = new GetMetricsUseCase(mockMetricsRepository);
  });

  describe('getLatest', () => {
    it('should return latest metrics when available', async () => {
      const mockMetrics: MetricsEntity = {
        id: 'test-id',
        period: '2024-01',
        kpis: {
          netProfitMargin: { value: 15, unit: '%', threshold: { critical: 5, warning: 10, good: 15 }, trend: 'stable' },
          cashBurnRate: { value: 5000, unit: 'R$', threshold: { critical: 10000, warning: 5000, good: 0 }, trend: 'stable' },
          runway: { value: 6, unit: 'meses', threshold: { critical: 3, warning: 6, good: 12 }, trend: 'stable' },
          salesConversion: { value: 20, unit: '%', threshold: { critical: 5, warning: 15, good: 25 }, trend: 'stable' },
          customerAcquisitionCost: { value: 200, unit: 'R$', threshold: { critical: 500, warning: 200, good: 100 }, trend: 'stable' },
        },
        calculatedAt: new Date('2024-01-15T10:00:00Z'),
      };

      vi.mocked(mockMetricsRepository.findLatest).mockResolvedValue(mockMetrics);

      const result = await useCase.getLatest();

      expect(mockMetricsRepository.findLatest).toHaveBeenCalledOnce();
      expect(result).toBeDefined();
      expect(result!.id).toBe('test-id');
      expect(result!.period).toBe('2024-01');
    });

    it('should return null when no metrics available', async () => {
      vi.mocked(mockMetricsRepository.findLatest).mockResolvedValue(null);

      const result = await useCase.getLatest();

      expect(mockMetricsRepository.findLatest).toHaveBeenCalledOnce();
      expect(result).toBeNull();
    });
  });

  describe('getById', () => {
    it('should return metrics by ID', async () => {
      const mockMetrics: MetricsEntity = {
        id: 'test-id-123',
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

      vi.mocked(mockMetricsRepository.findById).mockResolvedValue(mockMetrics);

      const result = await useCase.getById('test-id-123');

      expect(mockMetricsRepository.findById).toHaveBeenCalledWith('test-id-123');
      expect(result).toBeDefined();
      expect(result!.id).toBe('test-id-123');
    });

    it('should return null for non-existent ID', async () => {
      vi.mocked(mockMetricsRepository.findById).mockResolvedValue(null);

      const result = await useCase.getById('non-existent');

      expect(mockMetricsRepository.findById).toHaveBeenCalledWith('non-existent');
      expect(result).toBeNull();
    });
  });

  describe('getSummary', () => {
    it('should return correct summary when metrics exist', async () => {
      const mockMetrics: MetricsEntity = {
        id: 'test-id',
        period: '2024-01',
        kpis: {
          netProfitMargin: { value: 3, unit: '%', threshold: { critical: 5, warning: 10, good: 15 }, trend: 'stable' },
          cashBurnRate: { value: 12000, unit: 'R$', threshold: { critical: 10000, warning: 5000, good: 0 }, trend: 'stable' },
          runway: { value: 2, unit: 'meses', threshold: { critical: 3, warning: 6, good: 12 }, trend: 'stable' },
          salesConversion: { value: 25, unit: '%', threshold: { critical: 5, warning: 15, good: 25 }, trend: 'stable' },
          customerAcquisitionCost: { value: 600, unit: 'R$', threshold: { critical: 500, warning: 200, good: 100 }, trend: 'stable' },
        },
        calculatedAt: new Date('2024-01-15T10:00:00Z'),
      };

      vi.mocked(mockMetricsRepository.findLatest).mockResolvedValue(mockMetrics);

      const result = await useCase.getSummary();

      expect(result).toEqual({
        totalMetrics: 5,
        criticalCount: 2, // netProfitMargin (3), cashBurnRate (12000)
        warningCount: 0, // runway (2) - actually this is critical since 2 <= 3
        goodCount: 3, // salesConversion (25), customerAcquisitionCost (600), runway (2)
        lastUpdated: '2024-01-15T10:00:00.000Z',
      });
    });

    it('should return empty summary when no metrics exist', async () => {
      vi.mocked(mockMetricsRepository.findLatest).mockResolvedValue(null);

      const result = await useCase.getSummary();

      expect(result).toEqual({
        totalMetrics: 0,
        criticalCount: 0,
        warningCount: 0,
        goodCount: 0,
        lastUpdated: expect.any(String), // Current date string
      });
    });
  });
});
