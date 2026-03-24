/**
 * Health check service interface
 * Defines contract for application health monitoring
 */
export interface IHealthService {
  /**
   * Check overall application health
   */
  checkHealth(): Promise<HealthCheckResult>;

  /**
   * Check specific component health
   */
  checkComponent(component: string): Promise<ComponentHealth>;

  /**
   * Register health check for a component
   */
  registerHealthCheck(component: string, check: HealthCheckFunction): void;

  /**
   * Get health status summary
   */
  getHealthSummary(): Promise<HealthSummary>;

  /**
   * Start health monitoring
   */
  startMonitoring(intervalMs: number): void;

  /**
   * Stop health monitoring
   */
  stopMonitoring(): void;
}

export interface HealthCheckResult {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: Date;
  components: ComponentHealth[];
  uptime: number;
  version: string;
  environment: string;
}

export interface ComponentHealth {
  name: string;
  status: 'healthy' | 'unhealthy' | 'degraded';
  responseTime?: number;
  lastCheck: Date;
  message?: string;
  details?: {
    [key: string]: any;
  };
}

export interface HealthSummary {
  overall: 'healthy' | 'unhealthy' | 'degraded';
  componentCount: number;
  healthyComponents: number;
  unhealthyComponents: number;
  degradedComponents: number;
  averageResponseTime: number;
  lastCheck: Date;
}

export interface HealthCheckFunction {
  (): Promise<ComponentHealth>;
}

export interface HealthMetrics {
  cpu: {
    usage: number;
    loadAverage: number[];
  };
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  disk: {
    used: number;
    total: number;
    percentage: number;
  };
  network: {
    connections: number;
    bytesIn: number;
    bytesOut: number;
  };
}
