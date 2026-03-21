import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock supabase module before any imports
vi.mock('../../../infrastructure/persistence/database/supabase-client', () => ({
  supabase: {
    from: vi.fn(),
    select: vi.fn(),
    insert: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    eq: vi.fn(),
    gte: vi.fn(),
    lte: vi.fn(),
    order: vi.fn(),
    limit: vi.fn(),
    single: vi.fn(),
    then: vi.fn(),
    catch: vi.fn(),
    upsert: vi.fn()
  }
}));

import { UnifiedMetricsRepository } from './UnifiedMetricsRepository';
import { UnifiedMetricsEntity, DomainType } from '../../../domain/unified/interfaces/UnifiedMetricsEntity';
import { UnifiedMetricsFactory } from '../../../domain/unified/factories/UnifiedMetricsFactory';

describe('UnifiedMetricsRepository', () => {
  let repository: UnifiedMetricsRepository;
  let mockEntity: UnifiedMetricsEntity;

  beforeEach(() => {
    repository = new UnifiedMetricsRepository();
    
    // Reset all mocks
    vi.clearAllMocks();
    
    // Create mock entity
    mockEntity = UnifiedMetricsFactory.create('financial', {
      netProfitMargin: {
        value: 15,
        unit: '%',
        threshold: { critical: 5, warning: 10, good: 15 },
        trend: 'up',
        domain: 'financial' as DomainType,
        confidence: 0.95,
        lastUpdated: new Date()
      },
      cashBurnRate: {
        value: 5000,
        unit: 'R$',
        threshold: { critical: 10000, warning: 5000, good: 0 },
        trend: 'stable',
        domain: 'financial' as DomainType,
        confidence: 0.95,
        lastUpdated: new Date()
      }
    });
  });

  describe('save', () => {
    it('should save a unified metrics entity successfully', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: mockEntity, error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.upsert as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.save(mockEntity);

      // Assert
      expect(result).toEqual(mockEntity);
      expect(supabase.from).toHaveBeenCalledWith('unified_metrics');
      expect(supabase.upsert).toHaveBeenCalled();
    });

    it('should handle database errors during save', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockError = { message: 'Database error', code: '23505' };
      const mockResponse = { data: null, error: mockError };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.upsert as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act & Assert
      await expect(repository.save(mockEntity)).rejects.toThrow('Database error');
    });
  });

  describe('findById', () => {
    it('should find entity by ID successfully', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: mockEntity, error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.findById(mockEntity.id);

      // Assert
      expect(result).toEqual(mockEntity);
      expect(supabase.from).toHaveBeenCalledWith('unified_metrics');
      expect(supabase.eq).toHaveBeenCalledWith('id', mockEntity.id);
    });

    it('should return null when entity not found', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: null, error: { code: 'PGRST116' } };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.findById('non-existent-id');

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('findByDomain', () => {
    it('should find entities by domain successfully', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockEntities = [mockEntity];
      const mockResponse = { data: mockEntities, error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.order as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.findByDomain('financial');

      // Assert
      expect(result).toEqual(mockEntities);
      expect(supabase.from).toHaveBeenCalledWith('unified_metrics');
      expect(supabase.eq).toHaveBeenCalledWith('domain', 'financial');
      expect(supabase.order).toHaveBeenCalledWith('period', { ascending: false });
    });

    it('should return empty array when no entities found for domain', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: [], error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.order as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.findByDomain('operations');

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('findCrossDomain', () => {
    it('should find cross-domain metrics for a period', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const financialEntity = UnifiedMetricsFactory.create('financial', {
        netProfitMargin: {
          value: 15,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'up',
          domain: 'financial' as DomainType,
          confidence: 0.95,
          lastUpdated: new Date()
        }
      });

      const commercialEntity = UnifiedMetricsFactory.create('commercial', {
        salesConversion: {
          value: 20,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'up',
          domain: 'commercial' as DomainType,
          confidence: 0.95,
          lastUpdated: new Date()
        }
      });

      const mockEntities = [financialEntity, commercialEntity];
      const mockResponse = { data: mockEntities, error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.findCrossDomain('2024-01');

      // Assert
      expect(result).toHaveLength(2);
      expect(result[0].domain).toBe('financial');
      expect(result[1].domain).toBe('commercial');
      expect(supabase.eq).toHaveBeenCalledWith('period', '2024-01');
    });

    it('should return empty array when no cross-domain metrics found', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: [], error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.findCrossDomain('2024-01');

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('delete', () => {
    it('should delete entity by ID successfully', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: mockEntity, error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.delete as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.delete(mockEntity.id);

      // Assert
      expect(result).toBe(true);
      expect(supabase.from).toHaveBeenCalledWith('unified_metrics');
      expect(supabase.delete).toHaveBeenCalled();
      expect(supabase.eq).toHaveBeenCalledWith('id', mockEntity.id);
    });

    it('should return false when entity not found for deletion', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: null, error: { code: 'PGRST116' } };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.delete as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.delete('non-existent-id');

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('update', () => {
    it('should update entity successfully', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const updatedEntity = { ...mockEntity, period: '2024-02' };
      const mockResponse = { data: updatedEntity, error: null };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.update as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.update(updatedEntity);

      // Assert
      expect(result).toEqual(updatedEntity);
      expect(supabase.from).toHaveBeenCalledWith('unified_metrics');
      expect(supabase.update).toHaveBeenCalled();
      expect(supabase.eq).toHaveBeenCalledWith('id', updatedEntity.id);
    });
  });

  describe('getLatestByDomain', () => {
    it('should get latest metrics by domain', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: mockEntity, error: null }; // Return single entity, not array
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.order as any).mockReturnValue(supabase);
      (supabase.limit as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.getLatestByDomain('financial');

      // Assert
      expect(result).toBeDefined();
      expect(result?.domain).toBe('financial');
      expect(result?.id).toBe(mockEntity.id);
      expect(supabase.order).toHaveBeenCalledWith('period', { ascending: false });
      expect(supabase.limit).toHaveBeenCalledWith(1);
    });

    it('should return null when no metrics found for domain', async () => {
      // Arrange
      const { supabase } = await import('../../../infrastructure/persistence/database/supabase-client');
      const mockResponse = { data: null, error: { code: 'PGRST116' } };
      
      (supabase.from as any).mockReturnValue(supabase);
      (supabase.select as any).mockReturnValue(supabase);
      (supabase.eq as any).mockReturnValue(supabase);
      (supabase.order as any).mockReturnValue(supabase);
      (supabase.limit as any).mockReturnValue(supabase);
      (supabase.single as any).mockReturnValue(supabase);
      (supabase.then as any).mockImplementation((callback) => callback(mockResponse));

      // Act
      const result = await repository.getLatestByDomain('operations');

      // Assert
      expect(result).toBeNull();
    });
  });
});
