import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MetricsRepository } from '../../../../infrastructure/persistence/repositories';
import { MetricsEntity, KPIValue } from '../../../../domain/metrics';
import { supabase } from '../../../../infrastructure/persistence/database/supabase-client';

// Mock Supabase client
vi.mock('../../../../infrastructure/persistence/database/supabase-client', () => ({
  supabase: {
    from: vi.fn(() => ({
      upsert: vi.fn(() => ({
        select: vi.fn(() => ({
          single: vi.fn()
        }))
      })),
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn()
        })),
        order: vi.fn(() => ({
          limit: vi.fn(() => ({
            single: vi.fn()
          }))
        })),
        gte: vi.fn(() => ({
          lte: vi.fn(() => ({
            order: vi.fn()
          }))
        }))
      })),
      delete: vi.fn(() => ({
        eq: vi.fn()
      }))
    }))
  }
}));

describe('MetricsRepository', () => {
  let repository: MetricsRepository;
  let mockSupabase: any;

  beforeEach(() => {
    vi.clearAllMocks();
    repository = new MetricsRepository();
    mockSupabase = supabase as any;
  });

  describe('save', () => {
    it('should save metrics successfully', async () => {
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

      const mockDbRecord = {
        id: 'test-id',
        period: '2024-01',
        net_profit_margin: 15,
        cash_burn_rate: 5000,
        runway_months: 6,
        sales_conversion_rate: 20,
        customer_acquisition_cost: 200,
        calculated_at: '2024-01-15T10:00:00.000Z',
        created_at: '2024-01-15T10:00:00.000Z',
        updated_at: '2024-01-15T10:00:00.000Z',
      };

      const mockChain = {
        upsert: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ data: mockDbRecord, error: null })
          })
        })
      };

      mockSupabase.from.mockReturnValue(mockChain);

      const result = await repository.save(mockMetrics);

      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
      expect(mockChain.upsert).toHaveBeenCalled();
      expect(result.id).toBe('test-id');
      expect(result.period).toBe('2024-01');
    });

    it('should handle save errors', async () => {
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
        calculatedAt: new Date(),
      };

      const mockChain = {
        upsert: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ 
              data: null, 
              error: { message: 'Database error' } 
            })
          })
        })
      };

      mockSupabase.from.mockReturnValue(mockChain);

      await expect(repository.save(mockMetrics)).rejects.toThrow('Failed to save metrics: Database error');
    });
  });

  describe('findById', () => {
    it('should find metrics by ID', async () => {
      const mockDbRecord = {
        id: 'test-id',
        period: '2024-01',
        net_profit_margin: 15,
        cash_burn_rate: 5000,
        runway_months: 6,
        sales_conversion_rate: 20,
        customer_acquisition_cost: 200,
        calculated_at: '2024-01-15T10:00:00.000Z',
        created_at: '2024-01-15T10:00:00.000Z',
        updated_at: '2024-01-15T10:00:00.000Z',
      };

      const mockChain = {
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ data: mockDbRecord, error: null })
          })
        })
      };

      mockSupabase.from.mockReturnValue(mockChain);

      const result = await repository.findById('test-id');

      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
      expect(result.id).toBe('test-id');
      expect(result.period).toBe('2024-01');
    });

    it('should return null when metrics not found', async () => {
      const mockChain = {
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ 
              data: null, 
              error: { code: 'PGRST116' } 
            })
          })
        })
      };

      mockSupabase.from.mockReturnValue(mockChain);

      const result = await repository.findById('non-existent');

      expect(result).toBeNull();
    });
  });

  describe('findLatest', () => {
    it('should find latest metrics', async () => {
      const mockDbRecord = {
        id: 'test-id',
        period: '2024-01',
        net_profit_margin: 15,
        cash_burn_rate: 5000,
        runway_months: 6,
        sales_conversion_rate: 20,
        customer_acquisition_cost: 200,
        calculated_at: '2024-01-15T10:00:00.000Z',
        created_at: '2024-01-15T10:00:00.000Z',
        updated_at: '2024-01-15T10:00:00.000Z',
      };

      const mockChain = {
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockReturnValue({
            limit: vi.fn().mockReturnValue({
              single: vi.fn().mockResolvedValue({ data: mockDbRecord, error: null })
            })
          })
        })
      };

      mockSupabase.from.mockReturnValue(mockChain);

      const result = await repository.findLatest();

      expect(mockSupabase.from).toHaveBeenCalledWith('metrics');
      expect(result.id).toBe('test-id');
    });

    it('should return null when no metrics exist', async () => {
      const mockChain = {
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockReturnValue({
            limit: vi.fn().mockReturnValue({
              single: vi.fn().mockResolvedValue({ 
                data: null, 
                error: { code: 'PGRST116' } 
              })
            })
          })
        })
      };

      mockSupabase.from.mockReturnValue(mockChain);

      const result = await repository.findLatest();

      expect(result).toBeNull();
    });
  });
});
