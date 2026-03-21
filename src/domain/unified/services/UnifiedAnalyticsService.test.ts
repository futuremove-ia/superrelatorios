import { describe, it, expect, beforeEach, vi } from 'vitest';
import { UnifiedAnalyticsService } from './UnifiedAnalyticsService';
import { UnifiedMetricsService } from './UnifiedMetricsService';
import { UnifiedMetricsEntity, DomainType } from '../interfaces/UnifiedMetricsEntity';
import { UnifiedMetricsFactory } from '../factories/UnifiedMetricsFactory';

// Mock dependencies
vi.mock('./UnifiedMetricsService');

describe('UnifiedAnalyticsService', () => {
  let service: UnifiedAnalyticsService;
  let mockMetricsService: any;
  let mockFinancialEntity: UnifiedMetricsEntity;
  let mockCommercialEntity: UnifiedMetricsEntity;

  beforeEach(() => {
    mockMetricsService = {
      getCrossDomainMetrics: vi.fn(),
      getMetricsByDomain: vi.fn(),
      getLatestMetricsByDomain: vi.fn(),
      getMetricsHealthSummary: vi.fn(),
      getMetricsTrends: vi.fn()
    };

    service = new UnifiedAnalyticsService(mockMetricsService);
    
    // Reset all mocks
    vi.clearAllMocks();
    
    // Create mock entities
    mockFinancialEntity = UnifiedMetricsFactory.create('financial', {
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

    mockCommercialEntity = UnifiedMetricsFactory.create('commercial', {
      salesConversion: {
        value: 20,
        unit: '%',
        threshold: { critical: 5, warning: 15, good: 25 },
        trend: 'up',
        domain: 'commercial' as DomainType,
        confidence: 0.85,
        lastUpdated: new Date()
      },
      customerAcquisitionCost: {
        value: 150,
        unit: 'R$',
        threshold: { critical: 500, warning: 200, good: 100 },
        trend: 'down',
        domain: 'commercial' as DomainType,
        confidence: 0.90,
        lastUpdated: new Date()
      }
    });
  });

  describe('getComprehensiveDashboard', () => {
    it('should generate comprehensive dashboard with all domains', async () => {
      // Arrange
      const mockEntities = [mockFinancialEntity, mockCommercialEntity];
      mockMetricsService.getCrossDomainMetrics.mockResolvedValue(mockEntities);
      mockMetricsService.getMetricsHealthSummary.mockResolvedValue({
        period: '2024-01',
        totalDomains: 2,
        healthScore: 75,
        domainBreakdown: {
          financial: { healthScore: 80, kpiCount: 2, status: 'good' },
          commercial: { healthScore: 70, kpiCount: 2, status: 'warning' }
        },
        overallStatus: 'good'
      });

      // Act
      const result = await service.getComprehensiveDashboard('2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        overview: {
          totalDomains: 2,
          totalKPIs: 4,
          overallHealth: 75,
          overallStatus: 'good'
        },
        domains: {
          financial: {
            healthScore: 80,
            kpiCount: 2,
            status: 'good',
            topKPIs: [
              { code: 'netProfitMargin', value: 15, unit: '%', status: 'good' },
              { code: 'cashBurnRate', value: 5000, unit: 'R$', status: 'warning' }
            ]
          },
          commercial: {
            healthScore: 70,
            kpiCount: 2,
            status: 'warning',
            topKPIs: [
              { code: 'salesConversion', value: 20, unit: '%', status: 'good' },
              { code: 'customerAcquisitionCost', value: 150, unit: 'R$', status: 'warning' }
            ]
          }
        },
        insights: expect.arrayContaining([
          expect.objectContaining({
            type: 'health',
            severity: 'info',
            message: expect.any(String)
          })
        ])
      });
    });

    it('should handle empty dashboard gracefully', async () => {
      // Arrange
      mockMetricsService.getCrossDomainMetrics.mockResolvedValue([]);
      mockMetricsService.getMetricsHealthSummary.mockResolvedValue({
        period: '2024-01',
        totalDomains: 0,
        healthScore: 0,
        domainBreakdown: {},
        overallStatus: 'unknown'
      });

      // Act
      const result = await service.getComprehensiveDashboard('2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        overview: {
          totalDomains: 0,
          totalKPIs: 0,
          overallHealth: 0,
          overallStatus: 'unknown'
        },
        domains: {},
        insights: [
          {
            type: 'health',
            severity: 'warning',
            message: 'No metrics data available for period 2024-01'
          }
        ]
      });
    });
  });

  describe('getDomainComparison', () => {
    it('should compare multiple domains effectively', async () => {
      // Arrange
      const mockEntities = [mockFinancialEntity, mockCommercialEntity];
      mockMetricsService.getCrossDomainMetrics.mockResolvedValue(mockEntities);

      // Act
      const result = await service.getDomainComparison(['financial', 'commercial'], '2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        domains: [
          {
            name: 'financial',
            healthScore: 80,
            kpiCount: 2,
            topPerformers: [
              { code: 'netProfitMargin', value: 15, status: 'good' }
            ],
            concerns: [
              { code: 'cashBurnRate', value: 5000, status: 'warning' }
            ]
          },
          {
            name: 'commercial',
            healthScore: 70,
            kpiCount: 2,
            topPerformers: [
              { code: 'salesConversion', value: 20, status: 'good' }
            ],
            concerns: [
              { code: 'customerAcquisitionCost', value: 150, status: 'warning' }
            ]
          }
        ],
        insights: expect.arrayContaining([
          expect.objectContaining({
            type: 'comparison',
            severity: 'info',
            message: expect.any(String)
          })
        ])
      });
    });

    it('should handle single domain comparison', async () => {
      // Arrange
      mockMetricsService.getCrossDomainMetrics.mockResolvedValue([mockFinancialEntity]);

      // Act
      const result = await service.getDomainComparison(['financial'], '2024-01');

      // Assert
      expect(result.domains).toHaveLength(1);
      expect(result.domains[0].name).toBe('financial');
      expect(result.insights).toContainEqual({
        type: 'comparison',
        severity: 'info',
        message: 'Single domain analysis: financial domain performance'
      });
    });
  });

  describe('getPerformanceTrends', () => {
    it('should analyze performance trends across domains', async () => {
      // Arrange
      const periods = ['2024-01', '2024-02', '2024-03'];
      mockMetricsService.getMetricsTrends
        .mockResolvedValueOnce({
          domain: 'financial',
          periods,
          trends: {
            netProfitMargin: { current: 15, previous: 12, change: 25, direction: 'up' },
            cashBurnRate: { current: 5000, previous: 6000, change: -16.67, direction: 'down' }
          }
        })
        .mockResolvedValueOnce({
          domain: 'commercial',
          periods,
          trends: {
            salesConversion: { current: 20, previous: 18, change: 11.11, direction: 'up' },
            customerAcquisitionCost: { current: 150, previous: 180, change: -16.67, direction: 'down' }
          }
        });

      // Act
      const result = await service.getPerformanceTrends(['financial', 'commercial'], periods);

      // Assert
      expect(result).toEqual({
        periods,
        domainTrends: {
          financial: {
            overallTrend: 'improving',
            keyChanges: [
              { kpi: 'netProfitMargin', change: 25, direction: 'up', impact: 'positive' },
              { kpi: 'cashBurnRate', change: -16.67, direction: 'down', impact: 'positive' }
            ]
          },
          commercial: {
            overallTrend: 'improving',
            keyChanges: [
              { kpi: 'salesConversion', change: 11.11, direction: 'up', impact: 'positive' },
              { kpi: 'customerAcquisitionCost', change: -16.67, direction: 'down', impact: 'positive' }
            ]
          }
        },
        insights: expect.arrayContaining([
          expect.objectContaining({
            type: 'trend',
            severity: 'positive',
            message: expect.stringContaining('improving')
          })
        ])
      });
    });

    it('should handle empty trends gracefully', async () => {
      // Arrange
      mockMetricsService.getMetricsTrends.mockResolvedValue({
        domain: 'financial',
        periods: [],
        trends: {}
      });

      // Act
      const result = await service.getPerformanceTrends(['financial'], []);

      // Assert
      expect(result).toEqual({
        periods: [],
        domainTrends: {
          financial: {
            overallTrend: 'stable',
            keyChanges: []
          }
        },
        insights: [
          {
            type: 'trend',
            severity: 'info',
            message: '1 domains showing stable trends'
          }
        ]
      });
    });
  });

  describe('getAnomalyDetection', () => {
    it('should detect anomalies in metrics data', async () => {
      // Arrange
      const anomalyEntity = UnifiedMetricsFactory.create('financial', {
        netProfitMargin: {
          value: -5, // Anomalous negative value
          unit: '%',
          threshold: { critical: 5, warning: 10, good: 15 },
          trend: 'down',
          domain: 'financial' as DomainType,
          confidence: 0.95,
          lastUpdated: new Date()
        }
      });

      mockMetricsService.getCrossDomainMetrics.mockResolvedValue([mockFinancialEntity, anomalyEntity]);

      // Act
      const result = await service.getAnomalyDetection('2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        anomalies: [
          {
            domain: 'financial',
            kpi: 'netProfitMargin',
            value: -5,
            expectedRange: { min: 5, max: 15 },
            severity: 'critical',
            description: 'Negative value detected'
          }
        ],
        insights: [
          {
            type: 'anomaly',
            severity: 'critical',
            message: '1 critical anomalies detected in metrics data'
          }
        ]
      });
    });

    it('should return no anomalies when data is normal', async () => {
      // Arrange
      mockMetricsService.getCrossDomainMetrics.mockResolvedValue([mockFinancialEntity]);

      // Act
      const result = await service.getAnomalyDetection('2024-01');

      // Assert
      expect(result).toEqual({
        period: '2024-01',
        anomalies: [],
        insights: [
          {
            type: 'anomaly',
            severity: 'success',
            message: 'No anomalies detected in metrics data'
          }
        ]
      });
    });
  });

  describe('getPredictiveInsights', () => {
    it('should generate predictive insights based on trends', async () => {
      // Arrange
      mockMetricsService.getMetricsTrends.mockResolvedValue({
        domain: 'financial',
        periods: ['2024-01', '2024-02'],
        trends: {
          netProfitMargin: { current: 15, previous: 12, change: 25, direction: 'up' },
          cashBurnRate: { current: 5000, previous: 6000, change: -16.67, direction: 'down' }
        }
      });

      // Act
      const result = await service.getPredictiveInsights('financial', ['2024-01', '2024-02']);

      // Assert
      expect(result).toEqual({
        domain: 'financial',
        predictions: [
          {
            kpi: 'netProfitMargin',
            currentValue: 15,
            predictedValue: 18.75,
            confidence: 0.75,
            timeframe: 'next_period',
            trend: 'positive'
          },
          {
            kpi: 'cashBurnRate',
            currentValue: 5000,
            predictedValue: 4166.5,
            confidence: 0.75,
            timeframe: 'next_period',
            trend: 'positive'
          }
        ],
        insights: expect.arrayContaining([
          expect.objectContaining({
            type: 'prediction',
            severity: 'info',
            message: expect.any(String)
          })
        ])
      });
    });

    it('should handle insufficient data for prediction', async () => {
      // Arrange
      mockMetricsService.getMetricsTrends.mockResolvedValue({
        domain: 'financial',
        periods: ['2024-01'],
        trends: {}
      });

      // Act
      const result = await service.getPredictiveInsights('financial', ['2024-01']);

      // Assert
      expect(result).toEqual({
        domain: 'financial',
        predictions: [],
        insights: [
          {
            type: 'prediction',
            severity: 'warning',
            message: 'Insufficient data for reliable predictions'
          }
        ]
      });
    });
  });
});
