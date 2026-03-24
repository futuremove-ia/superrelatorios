import { IHealthService, HealthCheckResult, ComponentHealth, HealthSummary, HealthCheckFunction, HealthMetrics } from './IHealthService';

/**
 * Health Service Implementation
 * Provides comprehensive application health monitoring
 */
export class HealthService implements IHealthService {
  private healthChecks: Map<string, HealthCheckFunction> = new Map();
  private componentHealth: Map<string, ComponentHealth> = new Map();
  private monitoringInterval?: NodeJS.Timeout;
  private startTime: Date = new Date();
  private version: string = '1.0.0';
  private environment: string = process.env.NODE_ENV || 'development';

  async checkHealth(): Promise<HealthCheckResult> {
    const componentPromises = Array.from(this.healthChecks.entries()).map(async ([name, check]) => {
      try {
        const health = await check();
        this.componentHealth.set(name, health);
        return health;
      } catch (error) {
        const unhealthyHealth: ComponentHealth = {
          name,
          status: 'unhealthy',
          lastCheck: new Date(),
          message: error instanceof Error ? error.message : 'Unknown error'
        };
        this.componentHealth.set(name, unhealthyHealth);
        return unhealthyHealth;
      }
    });

    const components = await Promise.all(componentPromises);
    const overallStatus = this.calculateOverallStatus(components);

    return {
      status: overallStatus,
      timestamp: new Date(),
      components,
      uptime: Date.now() - this.startTime.getTime(),
      version: this.version,
      environment: this.environment
    };
  }

  async checkComponent(component: string): Promise<ComponentHealth> {
    const check = this.healthChecks.get(component);
    if (!check) {
      throw new Error(`Health check not found for component: ${component}`);
    }

    try {
      const health = await check();
      this.componentHealth.set(component, health);
      return health;
    } catch (error) {
      const unhealthyHealth: ComponentHealth = {
        name: component,
        status: 'unhealthy',
        lastCheck: new Date(),
        message: error instanceof Error ? error.message : 'Unknown error'
      };
      this.componentHealth.set(component, unhealthyHealth);
      return unhealthyHealth;
    }
  }

  registerHealthCheck(component: string, check: HealthCheckFunction): void {
    this.healthChecks.set(component, check);
  }

  async getHealthSummary(): Promise<HealthSummary> {
    const components = Array.from(this.componentHealth.values());
    const componentCount = components.length;
    const healthyComponents = components.filter(c => c.status === 'healthy').length;
    const unhealthyComponents = components.filter(c => c.status === 'unhealthy').length;
    const degradedComponents = components.filter(c => c.status === 'degraded').length;
    
    const responseTimes = components
      .filter(c => c.responseTime !== undefined)
      .map(c => c.responseTime!);
    
    const averageResponseTime = responseTimes.length > 0
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
      : 0;

    const overall = this.calculateOverallStatus(components);

    return {
      overall,
      componentCount,
      healthyComponents,
      unhealthyComponents,
      degradedComponents,
      averageResponseTime,
      lastCheck: new Date()
    };
  }

  startMonitoring(intervalMs: number = 30000): void {
    this.stopMonitoring();
    
    this.monitoringInterval = setInterval(async () => {
      try {
        await this.checkHealth();
      } catch (error) {
        console.error('Health monitoring error:', error);
      }
    }, intervalMs);
  }

  stopMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = undefined;
    }
  }

  private calculateOverallStatus(components: ComponentHealth[]): 'healthy' | 'unhealthy' | 'degraded' {
    if (components.length === 0) {
      return 'healthy';
    }

    const unhealthyCount = components.filter(c => c.status === 'unhealthy').length;
    const degradedCount = components.filter(c => c.status === 'degraded').length;

    if (unhealthyCount > 0) {
      return 'unhealthy';
    }

    if (degradedCount > 0) {
      return 'degraded';
    }

    return 'healthy';
  }

  /**
   * Get system metrics
   */
  async getSystemMetrics(): Promise<HealthMetrics> {
    const memoryUsage = process.memoryUsage();
    
    return {
      cpu: {
        usage: process.cpuUsage().user / 1000000, // Convert to seconds
        loadAverage: [0, 0, 0] // Would need OS-specific implementation
      },
      memory: {
        used: memoryUsage.heapUsed,
        total: memoryUsage.heapTotal,
        percentage: (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100
      },
      disk: {
        used: 0,
        total: 0,
        percentage: 0
      },
      network: {
        connections: 0,
        bytesIn: 0,
        bytesOut: 0
      }
    };
  }

  /**
   * Register default health checks
   */
  registerDefaultChecks(): void {
    // Database health check
    this.registerHealthCheck('database', async () => {
      const startTime = Date.now();
      
      try {
        // Simulate database ping
        await new Promise(resolve => setTimeout(resolve, 50));
        
        return {
          name: 'database',
          status: 'healthy',
          responseTime: Date.now() - startTime,
          lastCheck: new Date(),
          message: 'Database connection successful'
        };
      } catch (error) {
        return {
          name: 'database',
          status: 'unhealthy',
          responseTime: Date.now() - startTime,
          lastCheck: new Date(),
          message: 'Database connection failed'
        };
      }
    });

    // Cache health check
    this.registerHealthCheck('cache', async () => {
      const startTime = Date.now();
      
      try {
        // Simulate cache check
        await new Promise(resolve => setTimeout(resolve, 10));
        
        return {
          name: 'cache',
          status: 'healthy',
          responseTime: Date.now() - startTime,
          lastCheck: new Date(),
          message: 'Cache service operational'
        };
      } catch (error) {
        return {
          name: 'cache',
          status: 'degraded',
          responseTime: Date.now() - startTime,
          lastCheck: new Date(),
          message: 'Cache service degraded'
        };
      }
    });

    // External API health check
    this.registerHealthCheck('external_api', async () => {
      const startTime = Date.now();
      
      try {
        // Simulate external API check
        await new Promise(resolve => setTimeout(resolve, 100));
        
        return {
          name: 'external_api',
          status: 'healthy',
          responseTime: Date.now() - startTime,
          lastCheck: new Date(),
          message: 'External API accessible'
        };
      } catch (error) {
        return {
          name: 'external_api',
          status: 'unhealthy',
          responseTime: Date.now() - startTime,
          lastCheck: new Date(),
          message: 'External API unavailable'
        };
      }
    });

    // Memory health check
    this.registerHealthCheck('memory', async () => {
      const memoryUsage = process.memoryUsage();
      const memoryPercentage = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
      
      let status: 'healthy' | 'degraded' | 'unhealthy';
      if (memoryPercentage > 90) {
        status = 'unhealthy';
      } else if (memoryPercentage > 80) {
        status = 'degraded';
      } else {
        status = 'healthy';
      }

      return {
        name: 'memory',
        status,
        lastCheck: new Date(),
        message: `Memory usage: ${memoryPercentage.toFixed(2)}%`,
        details: {
          used: memoryUsage.heapUsed,
          total: memoryUsage.heapTotal,
          percentage: memoryPercentage
        }
      };
    });
  }
}
