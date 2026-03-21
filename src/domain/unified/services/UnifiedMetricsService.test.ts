import { describe, it, expect, beforeEach, vi } from 'vitest';
import { UnifiedMetricsService } from './UnifiedMetricsService';
import { UnifiedMetricsRepository } from '../../../infrastructure/persistence/repositories/UnifiedMetricsRepository';
import { UnifiedMetricsFactory } from '../factories/UnifiedMetricsFactory';
import { UnifiedMetricsEntity, DomainType } from '../interfaces/UnifiedMetricsEntity';

// Mock dependencies
vi.mock('../../../infrastructure/persistence/repositories/UnifiedMetricsRepository');

describe('UnifiedMetricsService', () => {
  let service: UnifiedMetricsService;
  let mockRepository: any;
  let mockEntity: UnifiedMetricsEntity;

  beforeEach(() => {
    mockRepository = {
      save: vi.fn(),
      findById: vi.fn(),
      findByDomain: vi.fn(),
      findCrossDomain: vi.fn(),
      delete: vi.fn(),
      update: vi.fn(),
      getLatestByDomain: vi.fn(),
      findByPeriods: vi.fn(),
      getDomainSummary: vi.fn()
    };

    service = new UnifiedMetricsService(mockRepository);
    
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

  describe('saveMetrics', () => {
    it('should save metrics entity successfully', async () => {
      // Arrange
      mockRepository.save.mockResolvedValue(mockEntity);

      // Act
      const result = await service.saveMetrics(mockEntity);

      // Assert
      expect(result).toEqual(mockEntity);
      expect(mockRepository.save).toHaveBeenCalledWith(mockEntity);
    });

    it('should handle save errors gracefully', async () => {
      // Arrange
      const error = new Error('Database error');
      mockRepository.save.mockRejectedValue(error);

      // Act & Assert
      await expect(service.saveMetrics(mockEntity)).rejects.toThrow('Database error');
    });
  });

  describe('getMetricsById', () => {
    it('should get metrics by ID successfully', async () => {
      // Arrange
      mockRepository.findById.mockResolvedValue(mockEntity);

      // Act
      const result = await service.getMetricsById(mockEntity.id);

      // Assert
      expect(result).toEqual(mockEntity);
      expect(mockRepository.findById).toHaveBeenCalledWith(mockEntity.id);
    });

    it('should return null when metrics not found', async () => {
      // Arrange
      mockRepository.findById.mockResolvedValue(null);

      // Act
      const result = await service.getMetricsById('non-existent-id');

      // Assert
      expect(result).toBeNull();
      expect(mockRepository.findById).toHaveBeenCalledWith('non-existent-id');
    });
  });

  describe('getMetricsByDomain', () => {
    it('should get metrics by domain successfully', async () => {
      // Arrange
      const mockEntities = [mockEntity];
      mockRepository.findByDomain.mockResolvedValue(mockEntities);

      // Act
      const result = await service.getMetricsByDomain('financial');

      // Assert
      expect(result).toEqual(mockEntities);
      expect(mockRepository.findByDomain).toHaveBeenCalledWith('financial', undefined);
    });

    it('should support period filtering', async () => {
      // Arrange
      const mockEntities = [mockEntity];
      mockRepository.findByDomain.mockResolvedValue(mockEntities);

      // Act
      const result = await service.getMetricsByDomain('financial', {
        startPeriod: '2024-01',
        endPeriod: '2024-12'
      });

      // Assert
      expect(result).toEqual(mockEntities);
      expect(mockRepository.findByDomain).toHaveBeenCalledWith('financial', {
        startPeriod: '2024-01',
        endPeriod: '2024-12'
      });
    });

    it('should return empty array when no metrics found', async () => {
      // Arrange
      mockRepository.findByDomain.mockResolvedValue([]);

      // Act
      const result = await service.getMetricsByDomain('operations');

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('getCrossDomainMetrics', () => {
    it('should get cross-domain metrics successfully', async () => {
      // Arrange
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
      mockRepository.findCrossDomain.mockResolvedValue(mockEntities);

      // Act
      const result = await service.getCrossDomainMetrics('2024-01');

      // Assert
      expect(result).toEqual(mockEntities);
      expect(mockRepository.findCrossDomain).toHaveBeenCalledWith('2024-01');
    });

    it('should return empty array when no cross-domain metrics found', async () => {
      // Arrange
      mockRepository.findCrossDomain.mockResolvedValue([]);

      // Act
      const result = await service.getCrossDomainMetrics('2024-01');

      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('getLatestMetricsByDomain', () => {
    it('should get latest metrics by domain successfully', async () => {
      // Arrange
      mockRepository.getLatestByDomain.mockResolvedValue(mockEntity);

      // Act
      const result = await service.getLatestMetricsByDomain('financial');

      // Assert
      expect(result).toEqual(mockEntity);
      expect(mockRepository.getLatestByDomain).toHaveBeenCalledWith('financial');
    });

    it('should return null when no latest metrics found', async () => {
      // Arrange
      mockRepository.getLatestByDomain.mockResolvedValue(null);

      // Act
      const result = await service.getLatestMetricsByDomain('operations');

      // Assert
      expect(result).toBeNull();
    });
  });

  describe('deleteMetrics', () => {
    it('should delete metrics successfully', async () => {
      // Arrange
      mockRepository.delete.mockResolvedValue(true);

      // Act
      const result = await service.deleteMetrics(mockEntity.id);

      // Assert
      expect(result).toBe(true);
      expect(mockRepository.delete).toHaveBeenCalledWith(mockEntity.id);
    });

    it('should return false when metrics not found for deletion', async () => {
      // Arrange
      mockRepository.delete.mockResolvedValue(false);

      // Act
      const result = await service.deleteMetrics('non-existent-id');

      // Assert
      expect(result).toBe(false);
    });
  });

  describe('updateMetrics', () => {
    it('should update metrics successfully', async () => {
      // Arrange
      const updatedEntity = { ...mockEntity, period: '2024-02' };
      mockRepository.update.mockResolvedValue(updatedEntity);

      // Act
      const result = await service.updateMetrics(updatedEntity);

      // Assert
      expect(result).toEqual(updatedEntity);
      expect(mockRepository.update).toHaveBeenCalledWith(updatedEntity);
    });
  });

  describe('getMetricsHealthSummary', () => {
    it('should calculate health summary for cross-domain metrics', async () => {
      // Arrange
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
          value: 8,
          unit: '%',
          threshold: { critical: 5, warning: 15, good: 25 },
          trend: 'down',
          domain: 'commercial' as DomainType,
          confidence: 0.85,
          lastUpdated: new Date()
        }
      });

      const mockEntities = [financialEntity, commercialEntity];
      mockRepository.findCrossDomain.mockResolvedValue(mockEntities);

      // Act
      const result = await service.getMetricsHealthSummary('2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        totalDomains: 2,
        healthScore: expect.any(Number),
        domainBreakdown: {
          financial: {
            healthScore: expect.any(Number),
            kpiCount: 1,
            status: 'good'
          },
          commercial: {
            healthScore: expect.any(Number),
            kpiCount: 1,
            status: 'warning'
          }
        },
        overallStatus: 'warning'
      });
    });

    it('should handle empty cross-domain metrics gracefully', async () => {
      // Arrange
      mockRepository.findCrossDomain.mockResolvedValue([]);

      // Act
      const result = await service.getMetricsHealthSummary('2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        totalDomains: 0,
        healthScore: 0,
        domainBreakdown: {},
        overallStatus: 'unknown'
      });
    });
  });

  describe('getMetricsTrends', () => {
    it('should calculate trends for domain metrics', async () => {
      // Arrange
      const currentEntity = UnifiedMetricsFactory.create('financial', {
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

      const previousEntity = UnifiedMetricsFactory.create('financial', {
        netProfitMargin: {
          value: 12,
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'stable',
          domain: 'financial' as DomainType,
          confidence: 0.90,
          lastUpdated: new Date()
        }
      });

      mockRepository.findByPeriods.mockResolvedValue([previousEntity, currentEntity]);

      // Act
      const result = await service.getMetricsTrends('financial', ['2024-01', '2024-02']);

      // Assert
      expect(result).toEqual({
        domain: 'financial',
        periods: ['2024-01', '2024-02'],
        trends: {
          netProfitMargin: {
            current: 15,
            previous: 12,
            change: 25,
            direction: 'up'
          }
        }
      });
    });

    it('should handle empty periods gracefully', async () => {
      // Arrange
      mockRepository.findByPeriods.mockResolvedValue([]);

      // Act
      const result = await service.getMetricsTrends('financial', []);

      // Assert
      expect(result).toEqual({
        domain: 'financial',
        periods: [],
        trends: {}
      });
    });
  });
});
