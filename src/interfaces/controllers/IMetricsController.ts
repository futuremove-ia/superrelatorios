import { CreateMetricsDTO, MetricsDTO, MetricsSummaryDTO } from '../../application/metrics/dtos';

/**
 * HTTP Request/Response interfaces for controller layer
 */
export interface HttpRequest {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
}

export interface HttpResponse {
  status(code: number): HttpResponse;
  json(data: any): HttpResponse;
  send(data?: any): HttpResponse;
}

/**
 * Interface for Metrics Controller
 * Defines the contract for HTTP request handling
 */
export interface IMetricsController {
  /**
   * Create new metrics
   * POST /api/metrics
   */
  createMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get metrics by ID
   * GET /api/metrics/:id
   */
  getMetricsById(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get metrics by period
   * GET /api/metrics?period=:period
   */
  getMetricsByPeriod(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get latest metrics
   * GET /api/metrics/latest
   */
  getLatestMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get metrics summary
   * GET /api/metrics/summary
   */
  getMetricsSummary(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Calculate metrics from data
   * POST /api/metrics/calculate
   */
  calculateMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Get metrics history
   * GET /api/metrics/history/:kpiCode
   */
  getMetricsHistory(req: HttpRequest, res: HttpResponse): Promise<void>;

  /**
   * Delete metrics
   * DELETE /api/metrics/:id
   */
  deleteMetrics(req: HttpRequest, res: HttpResponse): Promise<void>;
}
