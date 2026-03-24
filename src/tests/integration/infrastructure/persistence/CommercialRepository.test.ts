import { describe, it, expect, beforeEach, vi } from 'vitest';
import { CommercialRepository } from '../../../../infrastructure/persistence/repositories/CommercialRepository';
import { CommercialMetricsEntityFactory } from '../../../../domain/commercial/entities/CommercialMetricsEntity';

// Mock Supabase client
vi.mock('../../../../infrastructure/persistence/database/supabase-client', () => ({
  supabase: {
    from: vi.fn(),
    select: vi.fn(),
    insert: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    eq: vi.fn(),
    single: vi.fn(),
    upsert: vi.fn(),
    order: vi.fn(),
    limit: vi.fn(),
    gte: vi.fn(),
    lte: vi.fn(),
    count: vi.fn(),
  },
}));

describe('CommercialRepository', () => {
  let repository: CommercialRepository;
  let mockSupabase: any;

  beforeEach(async () => {
    // Get mocked supabase
    const { supabase } = vi.mocked(await import('../../../../infrastructure/persistence/database/supabase-client'));
    mockSupabase = supabase;
    
    // Reset all mocks
    vi.clearAllMocks();
    
    repository = new CommercialRepository();
  });

  describe('save', () => {
    it('should save commercial metrics successfully', async () => {
      const metrics = CommercialMetricsEntityFactory.create({
        id: 'test-id',
        period: '2024-01',
        salesConversion: {
          value: 15.5,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
          domain: 'commercial',
        },
        customerAcquisitionCost: {
          value: 150.0,
          unit: 'R$',
          threshold: { critical: 500, warning: 300, good: 100 },
          trend: 'down',
          domain: 'commercial',
        },
        customerLifetimeValue: {
          value: 1500.0,
          unit: 'R$',
          threshold: { critical: 500, warning: 800, good: 1200 },
          trend: 'stable',
          domain: 'commercial',
        },
        churnRate: {
          value: 5.2,
          unit: '%',
          threshold: { critical: 15, warning: 10, good: 5 },
          trend: 'down',
          domain: 'commercial',
        },
        averageTicket: {
          value: 350.0,
          unit: 'R$',
          threshold: { critical: 100, warning: 200, good: 300 },
          trend: 'up',
          domain: 'commercial',
        },
        pipelineVelocity: {
          value: 25.0,
          unit: 'dias',
          threshold: { critical: 60, warning: 45, good: 30 },
          trend: 'down',
          domain: 'commercial',
        },
      });

      const mockResult = {
        data: {
          id: 'test-id',
          period: '2024-01',
          sales_conversion_rate: 15.5,
          customer_acquisition_cost: 150.0,
          customer_lifetime_value: 1500.0,
          churn_rate: 5.2,
          average_ticket: 350.0,
          pipeline_velocity: 25.0,
          calculated_at: new Date().toISOString(),
        },
        error: null,
      };

      // Setup mock chain
      const mockUpsert = vi.fn().mockResolvedValue(mockResult);
      const mockSelect = vi.fn().mockReturnThis();
      const mockSingle = vi.fn().mockReturnThis();
      
      mockSupabase.from.mockReturnValue({
        upsert: mockUpsert,
        select: mockSelect,
        single: mockSingle,
      });

      const result = await repository.save(metrics);

      expect(result).toBeDefined();
      expect(result.id).toBe('test-id');
      expect(mockSupabase.from).toHaveBeenCalledWith('commercial_metrics');
    });

    it('should handle save errors', async () => {
      const metrics = CommercialMetricsEntityFactory.create({
        id: 'test-id',
        period: '2024-01',
        salesConversion: {
          value: 15.5,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
          domain: 'commercial',
        },
        customerAcquisitionCost: {
          value: 150.0,
          unit: 'R$',
          threshold: { critical: 500, warning: 300, good: 100 },
          trend: 'down',
          domain: 'commercial',
        },
        customerLifetimeValue: {
          value: 1500.0,
          unit: 'R$',
          threshold: { critical: 500, warning: 800, good: 1200 },
          trend: 'stable',
          domain: 'commercial',
        },
        churnRate: {
          value: 5.2,
          unit: '%',
          threshold: { critical: 15, warning: 10, good: 5 },
          trend: 'down',
          domain: 'commercial',
        },
        averageTicket: {
          value: 350.0,
          unit: 'R$',
          threshold: { critical: 100, warning: 200, good: 300 },
          trend: 'up',
          domain: 'commercial',
        },
        pipelineVelocity: {
          value: 25.0,
          unit: 'dias',
          threshold: { critical: 60, warning: 45, good: 30 },
          trend: 'down',
          domain: 'commercial',
        },
      });

      mockSupabase.from.mockReturnValue({
        upsert: vi.fn().mockResolvedValue({
          data: null,
          error: { message: 'Database error' },
        }),
        select: vi.fn().mockReturnThis(),
        single: vi.fn().mockReturnThis(),
      });

      await expect(repository.save(metrics)).rejects.toThrow('Failed to save commercial metrics: Database error');
    });
  });

  describe('findById', () => {
    it('should find commercial metrics by id', async () => {
      const mockData = {
        id: 'test-id',
        period: '2024-01',
        sales_conversion_rate: 15.5,
        customer_acquisition_cost: 150.0,
        customer_lifetime_value: 1500.0,
        churn_rate: 5.2,
        average_ticket: 350.0,
        pipeline_velocity: 25.0,
        calculated_at: new Date().toISOString(),
      };

      mockSupabase.from.mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: mockData, error: null }),
      });

      const result = await repository.findById('test-id');

      expect(result).toBeDefined();
      expect(result?.id).toBe('test-id');
      expect(mockSupabase.from).toHaveBeenCalledWith('commercial_metrics');
    });

    it('should return null when not found', async () => {
      mockSupabase.from.mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: null, error: null }),
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
          sales_conversion_rate: 15.5,
          calculated_at: new Date().toISOString(),
        },
        {
          id: 'test-id-2',
          period: '2024-01',
          sales_conversion_rate: 18.2,
          calculated_at: new Date().toISOString(),
        },
      ];

      mockSupabase.from.mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockResolvedValue({ data: mockData, error: null }),
        order: vi.fn().mockReturnThis(),
      });

      const result = await repository.findByPeriod('2024-01');

      expect(result).toHaveLength(2);
      expect(mockSupabase.from).toHaveBeenCalledWith('commercial_metrics');
    });
  });

  describe('findLatest', () => {
    it('should find latest commercial metrics', async () => {
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

      mockSupabase.from.mockReturnValue({
        select: vi.fn().mockReturnThis(),
        order: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: mockData[1], error: null }),
      });

      const result = await repository.findLatest();

      expect(result).toBeDefined();
      expect(result?.id).toBe('test-id-2');
    });
  });

  describe('delete', () => {
    it('should delete commercial metrics by id', async () => {
      mockSupabase.from.mockReturnValue({
        delete: vi.fn().mockReturnThis(),
        eq: vi.fn().mockResolvedValue({ error: null }),
      });

      await expect(repository.delete('test-id')).resolves.not.toThrow();
      expect(mockSupabase.from).toHaveBeenCalledWith('commercial_metrics');
    });

    it('should handle delete errors', async () => {
      mockSupabase.from.mockReturnValue({
        delete: vi.fn().mockReturnThis(),
        eq: vi.fn().mockResolvedValue({ error: { message: 'Delete error' } }),
      });

      await expect(repository.delete('test-id')).rejects.toThrow('Delete error');
    });
  });

  describe('getCount', () => {
    it('should get count of commercial metrics', async () => {
      mockSupabase.from.mockReturnValue({
        select: vi.fn().mockReturnThis(),
        count: vi.fn().mockResolvedValue({ count: 42, error: null }),
      });

      const result = await repository.getCount();

      expect(result).toBe(42);
      expect(mockSupabase.from).toHaveBeenCalledWith('commercial_metrics');
    });
  });
});
