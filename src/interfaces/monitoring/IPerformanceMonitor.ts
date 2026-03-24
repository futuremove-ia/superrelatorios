/**
 * Performance monitoring interface
 * Defines contract for performance tracking
 */
export interface IPerformanceMonitor {
  /**
   * Start timing a operation
   */
  startTimer(name: string): string;

  /**
   * End timing a operation
   */
  endTimer(timerId: string): number;

  /**
   * Record a metric value
   */
  recordMetric(name: string, value: number, tags?: Record<string, string>): void;

  /**
   * Record an event
   */
  recordEvent(name: string, data?: Record<string, any>): void;

  /**
   * Get performance metrics
   */
  getMetrics(): Promise<PerformanceMetrics>;

  /**
   * Get performance summary
   */
  getSummary(): Promise<PerformanceSummary>;
}

export interface PerformanceMetrics {
  timers: Map<string, Array<{
    duration: number;
    timestamp: number;
    tags?: Record<string, string>;
  }>>;
  
  counters: Map<string, {
    count: number;
    sum: number;
    avg: number;
    min: number;
    max: number;
  }>;
  
  events: Array<{
    name: string;
    timestamp: number;
    data?: Record<string, any>;
  }>;
}

export interface PerformanceSummary {
  totalOperations: number;
  averageResponseTime: number;
  slowestOperation: string;
  fastestOperation: string;
  errorRate: number;
  memoryUsage: {
    used: number;
    total: number;
    percentage: number;
  };
  recommendations: string[];
}
