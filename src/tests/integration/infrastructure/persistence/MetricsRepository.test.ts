import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MetricsRepository } from '../../../../infrastructure/persistence/repositories/MetricsRepository';
import { MetricsEntityFactory } from '../../../../domain/metrics/entities/MetricsEntity';

// Mock Supabase client
vi.mock('../../../../infrastructure/persistence/database/supabase-client', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe('MetricsRepository', () => {
  let repository: MetricsRepository;
  let mockSupabase: any;

  beforeEach(async () => {
    repository = new MetricsRepository();
    mockSupabase = vi.mocked(await import('../../../../infrastructure/persistence/database/supabase-client')).supabase;
    
    // Reset all mocks
    vi.clearAllMocks();
  });

  describe('save', () => {
    it('should save metrics successfully', async () => {
      const metrics = MetricsEntityFactory.create({
        id: 'test-id',
        period: '2024-01',
        netProfitMargin: {
          value: 20.0,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
        },
        cashBurnRate: {
          value: 5000.0,
          unit: 'R$',
          threshold: { critical: 20000, warning: 15000, good: 10000 },
          trend: 'down',
        },
        runway: {
          value: 10.0,
          unit: 'meses',
          threshold: { critical: 1, warning: 3, good: 6 },
          trend: 'stable',
        },
        salesConversion: {
          value: 15.5,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
        },
        customerAcquisitionCost: {
          value: 150.0,
          unit: 'R$',
          threshold: { critical: 500, warning: 300, good: 100 },
          trend: 'down',
        },
      });

      const mockResult = {
        data: {
          id: 'test-id',
          period: '2024-01',
          net_profit_margin: 20.0,
          cash_burn_rate: 5000.0,
          runway: 10.0,
          sales_conversion: 15.5,
          customer_acquisition_cost: 150.0,
          calculated_at: new Date().toISOString(),
        },
        error: null,
      };

      const mockUpsert = vi.fn().mockResolvedValue(mockResult);
      const mockSelect = vi.fn().mockReturnThis();
      const mockSingle = vi.fn().mockReturnThis();

      mockSupabase.from = vi.fn().mockReturnValue({
        upsert: mockUpsert,
        select: mockSelect,
        single: mockSingle,
      });

      const result = await repository.save(metrics);

      expect(result).toBeDefined();
      expect(result.id).toBe('test-id');
      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
    });

    it('should handle save errors', async () => {
      const metrics = MetricsEntityFactory.create({
        id: 'test-id',
        period: '2024-01',
        netProfitMargin: {
          value: 20.0,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
        },
        cashBurnRate: {
          value: 5000.0,
          unit: 'R$',
          threshold: { critical: 20000, warning: 15000, good: 10000 },
          trend: 'down',
        },
        runway: {
          value: 10.0,
          unit: 'meses',
          threshold: { critical: 1, warning: 3, good: 6 },
          trend: 'stable',
        },
        salesConversion: {
          value: 15.5,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
        },
        customerAcquisitionCost: {
          value: 150.0,
          unit: 'R$',
          threshold: { critical: 500, warning: 300, good: 100 },
          trend: 'down',
        },
      });

      const mockUpsert = vi.fn().mockResolvedValue({
        data: null,
        error: { message: 'Database error' },
      });

      mockSupabase.from = vi.fn().mockReturnValue({
        upsert: mockUpsert,
        select: vi.fn().mockReturnThis(),
        single: vi.fn().mockReturnThis(),
      });

      await expect(repository.save(metrics)).rejects.toThrow('Failed to save metrics: Database error');
    });
  });

  describe('findById', () => {
    it('should find metrics by id', async () => {
      const mockData = {
        id: 'test-id',
        period: '2024-01',
        net_profit_margin: 20.0,
        cash_burn_rate: 5000.0,
        runway: 10.0,
        sales_conversion: 15.5,
        customer_acquisition_cost: 150.0,
        calculated_at: new Date().toISOString(),
      };

      const mockSelect = vi.fn().mockReturnThis();
      const mockEq = vi.fn().mockReturnThis();
      const mockSingle = vi.fn().mockResolvedValue({ data: mockData, error: null });

      mockSupabase.from = vi.fn().mockReturnValue({
        select: mockSelect,
        eq: mockEq,
        single: mockSingle,
      });

      const result = await repository.findById('test-id');

      expect(result).toBeDefined();
      expect(result?.id).toBe('test-id');
      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
      expect(mockEq).toHaveBeenCalledWith('id', 'test-id');
    });

    it('should return null when not found', async () => {
      const mockSelect = vi.fn().mockReturnThis();
      const mockEq = vi.fn().mockReturnThis();
      const mockSingle = vi.fn().mockResolvedValue({ data: null, error: null });

      mockSupabase.from = vi.fn().mockReturnValue({
        select: mockSelect,
        eq: mockEq,
        single: mockSingle,
      });

      const result = await repository.findById('non-existent-id');

      expect(result).toBeNull();
    });
  });

  describe('findByPeriod', () => {
    it('should find metrics by period', async () => {
      const mockData = [
        {
          id: 'test-id-1',
          period: '2024-01',
          net_profit_margin: 20.0,
          calculated_at: new Date().toISOString(),
        },
        {
          id: 'test-id-2',
          period: '2024-01',
          net_profit_margin: 22.0,
          calculated_at: new Date().toISOString(),
        },
      ];

      const mockSelect = vi.fn().mockReturnThis();
      const mockEq = vi.fn().mockResolvedValue({ data: mockData, error: null });

      mockSupabase.from = vi.fn().mockReturnValue({
        select: mockSelect,
        eq: mockEq,
      });

      const result = await repository.findByPeriod('2024-01');

      expect(result).toHaveLength(2);
      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
      expect(mockEq).toHaveBeenCalledWith('period', '2024-01');
    });
  });

  describe('findLatest', () => {
    it('should find latest metrics', async () => {
      const mockData = [
        {
          id: 'test-id-1',
          period: '2024-01',
          calculated_at: '2024-01-15T10:00:00Z',
        },
        {
          id: 'test-id-2',
          period: '2024-02',
          calculated_at: '2024-02-15T10:00:00Z',
        },
      ];

      const mockSelect = vi.fn().mockReturnThis();
      const mockOrder = vi.fn().mockReturnThis();
      const mockLimit = vi.fn().mockResolvedValue({ data: mockData, error: null });

      mockSupabase.from = vi.fn().mockReturnValue({
        select: mockSelect,
        order: mockOrder,
        limit: mockLimit,
      });

      const result = await repository.findLatest();

      expect(result).toBeDefined();
      expect(result?.id).toBe('test-id-2');
      expect(mockOrder).toHaveBeenCalledWith('calculated_at', { ascending: false });
      expect(mockLimit).toHaveBeenCalledWith(1);
    });
  });

  describe('delete', () => {
    it('should delete metrics by id', async () => {
      const mockDelete = vi.fn().mockResolvedValue({ error: null });

      mockSupabase.from = vi.fn().mockReturnValue({
        delete: mockDelete,
        eq: vi.fn().mockReturnThis(),
      });

      await expect(repository.delete('test-id')).resolves.not.toThrow();
      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
    });

    it('should handle delete errors', async () => {
      const mockDelete = vi.fn().mockResolvedValue({ error: { message: 'Delete error' } });

      mockSupabase.from = vi.fn().mockReturnValue({
        delete: mockDelete,
        eq: vi.fn().mockReturnThis(),
      });

      await expect(repository.delete('test-id')).rejects.toThrow('Delete error');
    });
  });

  describe('getCount', () => {
    it('should get count of metrics', async () => {
      const mockCount = vi.fn().mockResolvedValue({ count: 42, error: null });

      mockSupabase.from = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnThis(),
        count: mockCount,
      });

      const result = await repository.getCount();

      expect(result).toBe(42);
      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
    });
  });
});
