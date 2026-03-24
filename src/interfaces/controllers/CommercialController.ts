import { ICommercialController } from './ICommercialController';
import { HttpRequest, HttpResponse } from './IMetricsController';
import { CommercialMetricsEntity } from '../../domain/commercial/entities/CommercialMetricsEntity';
import { CommercialRepository } from '../../infrastructure/persistence/repositories/CommercialRepository';

/**
 * Commercial Controller Implementation
 * Handles HTTP requests for commercial metrics operations
 */
export class CommercialController implements ICommercialController {
  constructor(private readonly commercialRepository: CommercialRepository) {}

  async createCommercialMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const commercialData: CommercialMetricsEntity = req.body;
      const result = await this.commercialRepository.save(commercialData);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error instanceof Error ? error.message : 'Failed to create commercial metrics' 
      });
    }
  }

  async getCommercialMetricsById(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.commercialRepository.findById(id);
      
      if (!result) {
        res.status(404).json({ error: 'Commercial metrics not found' });
        return;
      }
      
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get commercial metrics' 
      });
    }
  }

  async getCommercialMetricsByPeriod(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { period } = req.query;
      const result = await this.commercialRepository.findByPeriod(period as string);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get commercial metrics by period' 
      });
    }
  }

  async getLatestCommercialMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const result = await this.commercialRepository.findLatest();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get latest commercial metrics' 
      });
    }
  }

  async getCommercialMetricsHistory(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { kpiCode } = req.params;
      const { limit } = req.query;
      const result = await this.commercialRepository.getHistory(
        kpiCode, 
        limit ? parseInt(limit as string) : undefined
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get commercial metrics history' 
      });
    }
  }

  async deleteCommercialMetrics(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const { id } = req.params;
      await this.commercialRepository.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to delete commercial metrics' 
      });
    }
  }

  async getCommercialMetricsCount(req: HttpRequest, res: HttpResponse): Promise<void> {
    try {
      const result = await this.commercialRepository.getCount();
      res.status(200).json({ count: result });
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get commercial metrics count' 
      });
    }
  }
}
