import { IMetricsController, HttpRequest, HttpResponse } from './IMetricsController';
import { MetricsService } from '../../application/metrics/services/MetricsService';
import { CreateMetricsDTO, MetricsDTO, MetricsSummaryDTO } from '../../application/metrics/dtos';

/**
 * Metrics Controller Implementation
 * Handles HTTP requests for metrics operations
 */
export class MetricsController implements IMetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  async createMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const createData: CreateMetricsDTO = req.body;
      const result = await this.metricsService.calculateMetrics(createData);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error instanceof Error ? error.message : 'Failed to create metrics' 
      });
    }
  }

  async getMetricsById(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.metricsService.getMetricsById(id);
      
      if (!result) {
        res.status(404).json({ error: 'Metrics not found' });
        return;
      }
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get metrics' 
      });
    }
  }

  async getMetricsByPeriod(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { period } = req.query;
      const result = await this.metricsService.getMetricsByPeriod(period as string);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get metrics by period' 
      });
    }
  }

  async getLatestMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const result = await this.metricsService.getLatestMetrics();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get latest metrics' 
      });
    }
  }

  async getMetricsSummary(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const result = await this.metricsService.getMetricsSummary();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get metrics summary' 
      });
    }
  }

  async calculateMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const data: CreateMetricsDTO = req.body;
      const result = await this.metricsService.calculateMetrics(data);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error instanceof Error ? error.message : 'Failed to calculate metrics' 
      });
    }
  }

  async getMetricsHistory(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { kpiCode } = req.params;
      const { limit } = req.query;
      const result = await this.metricsService.getMetricsHistory(
        kpiCode, 
        limit ? parseInt(limit as string) : undefined
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get metrics history' 
      });
    }
  }

  async deleteMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { id } = req.params;
      // Note: MetricsService doesn't have delete method, this would need to be implemented
      // For now, return 404 as not implemented
      res.status(501).json({ error: 'Delete functionality not implemented' });
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to delete metrics' 
      });
    }
  }
}
