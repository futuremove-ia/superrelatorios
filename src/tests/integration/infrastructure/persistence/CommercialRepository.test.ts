import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CommercialRepository } from '../../../../infrastructure/persistence/repositories/CommercialRepository';
import { CommercialMetricsEntityFactory } from '../../../../domain/commercial/entities/CommercialMetricsEntity';

// Mock Supabase client
vi.mock('../../../../infrastructure/persistence/database/supabase-client', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe('CommercialRepository', () => {
  let repository: CommercialRepository;
  let mockSupabase: any;

  beforeEach(async () => {
    repository = new CommercialRepository();
    
    // Get mocked supabase
    const { supabase } = await import('../../../../infrastructure/persistence/database/supabase-client');
    mockSupabase = supabase as any;
    
    // Reset all mocks
    vi.clearAllMocks();
  });

  describe('save', () => {
    it('should save commercial metrics successfully', async () => {
      const metrics = CommercialMetricsEntityFactory.create({
        period: '2024-01',
        salesConversion: {
          value: 20,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'stable',
          domain: 'commercial',
        },
        customerAcquisitionCost: {
          value: 150,
          unit: 'R$',
          threshold: { critical: 500, warning: 200, good: 100 },
          trend: 'stable',
          domain: 'commercial',
        },
        customerLifetimeValue: {
          value: 3000,
          unit: 'R$',
          threshold: { critical: 1000, warning: 3000, good: 5000 },
          trend: 'stable',
          domain: 'commercial',
        },
        churnRate: {
          value: 8,
          unit: '%',
          threshold: { critical: 15, warning: 10, good: 5 },
          trend: 'stable',
          domain: 'commercial',
        },
        averageTicket: {
          value: 1500,
          unit: 'R$',
          threshold: { critical: 500, warning: 1000, good: 2000 },
          trend: 'stable',
          domain: 'commercial',
        },
        pipelineVelocity: {
          value: 800,
          unit: 'R$/dia',
          threshold: { critical: 100, warning: 500, good: 1000 },
          trend: 'stable',
          domain: 'commercial',
        },
      });

      const mockData = {
        id: 'test-id',
        period: '2024-01',
        sales_conversion_rate: 20,
        customer_acquisition_cost: 150,
        customer_lifetime_value: 3000,
        churn_rate: 8,
        average_ticket: 1500,
        pipeline_velocity: 800,
        calculated_at: new Date().toISOString(),
      };

      mockSupabase.from = vi.fn().mockReturnValue({
        upsert: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockData,
              error: null,
            }),
          }),
        }),
      });

      const result = await repository.save(metrics);

      expect(result).toBeDefined();
      expect(result.id).toBe('test-id');
      expect(result.period).toBe('2024-01');
      expect(result.kpis.salesConversion.value).toBe(20);
      expect(result.kpis.customerAcquisitionCost.value).toBe(150);
    });

    it('should handle save errors', async () => {
      const metrics = CommercialMetricsEntityFactory.create({
        period: '2024-01',
        salesConversion: {
          value: 20,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'stable',
          domain: 'commercial',
        },
        customerAcquisitionCost: {
          value: 150,
          unit: 'R$',
          threshold: { critical: 500, warning: 200, good: 100 },
          trend: 'stable',
          domain: 'commercial',
        },
        customerLifetimeValue: {
          value: 3000,
          unit: 'R$',
          threshold: { critical: 1000, warning: 3000, good: 5000 },
          trend: 'stable',
          domain: 'commercial',
        },
        churnRate: {
          value: 8,
          unit: '%',
          threshold: { critical: 15, warning: 10, good: 5 },
          trend: 'stable',
          domain: 'commercial',
        },
        averageTicket: {
          value: 1500,
          unit: 'R$',
          threshold: { critical: 500, warning: 1000, good: 2000 },
          trend: 'stable',
          domain: 'commercial',
        },
        pipelineVelocity: {
          value: 800,
          unit: 'R$/dia',
          threshold: { critical: 100, warning: 500, good: 1000 },
          trend: 'stable',
          domain: 'commercial',
        },
      });

      mockSupabase.from = vi.fn().mockReturnValue({
        upsert: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: null,
              error: { message: 'Database error' },
            }),
          }),
        }),
      });

      await expect(repository.save(metrics)).rejects.toThrow('Failed to save commercial metrics: Database error');
    });
  });

  describe('findById', () => {
    it('should find commercial metrics by id', async () => {
      const mockData = {
        id: 'test-id',
        period: '2024-01',
        sales_conversion_rate: 20,
        customer_acquisition_cost: 150,
        customer_lifetime_value: 3000,
        churn_rate: 8,
        average_ticket: 1500,
        pipeline_velocity: 800,
        calculated_at: new Date().toISOString(),
      };

      mockSupabase.from = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: mockData,
              error: null,
            }),
          }),
        }),
      });

      const result = await repository.findById('test-id');

      expect(result).toBeDefined();
      expect(result!.id).toBe('test-id');
      expect(result!.period).toBe('2024-01');
    });

    it('should return null when not found', async () => {
      mockSupabase.from = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({
              data: null,
              error: { code: 'PGRST116' },
            }),
          }),
        }),
      });

      const result = await repository.findById('non-existent-id');

      expect(result).toBeNull();
    });
  });

  describe('findByPeriod', () => {
    it('should find commercial metrics by period', async () => {
      const mockData = [
        {
          id: 'test-id-1',
          period: '2024-01',
          sales_conversion_rate: 20,
          customer_acquisition_cost: 150,
          customer_lifetime_value: 3000,
          churn_rate: 8,
          average_ticket: 1500,
          pipeline_velocity: 800,
          calculated_at: new Date().toISOString(),
        },
        {
          id: 'test-id-2',
          period: '2024-01',
          sales_conversion_rate: 22,
          customer_acquisition_cost: 140,
          customer_lifetime_value: 3200,
          churn_rate: 7,
          average_ticket: 1600,
          pipeline_velocity: 850,
          calculated_at: new Date().toISOString(),
        },
      ];

      mockSupabase.from = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            order: vi.fn().mockResolvedValue({
              data: mockData,
              error: null,
            }),
          }),
        }),
      });

      const result = await repository.findByPeriod('2024-01');

      expect(result).toHaveLength(2);
      expect(result[0].period).toBe('2024-01');
      expect(result[1].period).toBe('2024-01');
    });
  });

  describe('findLatest', () => {
    it('should find latest commercial metrics', async () => {
      const mockData = {
        id: 'latest-id',
        period: '2024-01',
        sales_conversion_rate: 20,
        customer_acquisition_cost: 150,
        customer_lifetime_value: 3000,
        churn_rate: 8,
        average_ticket: 1500,
        pipeline_velocity: 800,
        calculated_at: new Date().toISOString(),
      };

      mockSupabase.from = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockReturnValue({
            limit: vi.fn().mockReturnValue({
              single: vi.fn().mockResolvedValue({
                data: mockData,
                error: null,
              }),
            }),
          }),
        }),
      });

      const result = await repository.findLatest();

      expect(result).toBeDefined();
      expect(result!.period).toBe('2024-01');
    });

    it('should return null when no data exists', async () => {
      mockSupabase.from = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          order: vi.fn().mockReturnValue({
            limit: vi.fn().mockReturnValue({
              single: vi.fn().mockResolvedValue({
                data: null,
                error: { code: 'PGRST116' },
              }),
            }),
          }),
        }),
      });

      const result = await repository.findLatest();

      expect(result).toBeNull();
    });
  });

  describe('getCount', () => {
    it('should return count of commercial metrics', async () => {
      // Mock the entire chain
      const mockSelect = vi.fn();
      const mockCount = vi.fn().mockResolvedValue({
        count: 5,
        error: null,
      });
      
      mockSelect.mockReturnValue({
        count: mockCount,
      });
      
      mockSupabase.from.mockReturnValue({
        select: mockSelect,
      });

      const result = await repository.getCount();

      expect(result).toBe(5);
    });

    it('should return 0 when count fails', async () => {
      // Mock the entire chain
      const mockSelect = vi.fn();
      const mockCount = vi.fn().mockResolvedValue({
        count: null,
        error: { message: 'Count error' },
      });
      
      mockSelect.mockReturnValue({
        count: mockCount,
      });
      
      mockSupabase.from.mockReturnValue({
        select: mockSelect,
      });

      const result = await repository.getCount();

      expect(result).toBe(0);
    });
  });

  describe('delete', () => {
    it('should delete commercial metrics by id', async () => {
      mockSupabase.from = vi.fn().mockReturnValue({
        delete: vi.fn().mockReturnValue({
          eq: vi.fn().mockResolvedValue({
            error: null,
          }),
        }),
      });

      await expect(repository.delete('test-id')).resolves.not.toThrow();
    });

    it('should handle delete errors', async () => {
      mockSupabase.from = vi.fn().mockReturnValue({
        delete: vi.fn().mockReturnValue({
          eq: vi.fn().mockResolvedValue({
            error: { message: 'Delete error' },
          }),
        }),
      });

      await expect(repository.delete('test-id')).rejects.toThrow('Failed to delete commercial metrics: Delete error');
    });
  });
});
