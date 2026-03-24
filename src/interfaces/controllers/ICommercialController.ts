import { HttpRequest, HttpResponse } from './IMetricsController';
import { CommercialMetricsEntity } from '../../domain/commercial/entities/CommercialMetricsEntity';

/**
 * Interface for Commercial Controller
 * Defines the contract for HTTP request handling for commercial metrics
 */
export interface ICommercialController {
  /**
   * Create new commercial metrics
   * POST /api/commercial
   */
  createCommercialMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get commercial metrics by ID
   * GET /api/commercial/:id
   */
  getCommercialMetricsById(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get commercial metrics by period
   * GET /api/commercial?period=:period
   */
  getCommercialMetricsByPeriod(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get latest commercial metrics
   * GET /api/commercial/latest
   */
  getLatestCommercialMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get commercial metrics history
   * GET /api/commercial/history/:kpiCode
   */
  getCommercialMetricsHistory(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Delete commercial metrics
   * DELETE /api/commercial/:id
   */
  deleteCommercialMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get commercial metrics count
   * GET /api/commercial/count
   */
  getCommercialMetricsCount(req: HttpRequest, res: HttpResponse): Promise<void>;
}
