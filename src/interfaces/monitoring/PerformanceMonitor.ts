import { IPerformanceMonitor, PerformanceMetrics, PerformanceSummary } from './IPerformanceMonitor';

/**
 * Performance Monitor Implementation
 * Tracks application performance metrics
 */
export class PerformanceMonitor implements IPerformanceMonitor {
  private metrics: PerformanceMetrics = {
    timers: new Map(),
    counters: new Map(),
    events: []
  };

  private readonly timers: Map<string, { startTime: number; name: string; tags?: Record<string, string> }> = new Map();

  startTimer(name: string, tags?: Record<string, string>): string {
    const timerId = `${name}_${Date.now()}_${Math.random()}`;
    this.timers.set(timerId, {
      startTime: Date.now(),
      name,
      tags
    });
    return timerId;
  }

  endTimer(timerId: string): number {
    const timer = this.timers.get(timerId);
    if (!timer) {
      return 0;
    }

    const duration = Date.now() - timer.startTime;
    
    // Store in metrics
    if (!this.metrics.timers.has(timer.name)) {
      this.metrics.timers.set(timer.name, []);
    }
    
    this.metrics.timers.get(timer.name)!.push({
      duration,
      timestamp: Date.now(),
      tags: timer.tags
    });

    this.timers.delete(timerId);
    return duration;
  }

  recordMetric(name: string, value: number, tags?: Record<string, string>): void {
    const existing = this.metrics.counters.get(name);
    
    if (!existing) {
      this.metrics.counters.set(name, {
        count: 1,
        sum: value,
        avg: value,
        min: value,
        max: value
      });
    } else {
      existing.count++;
      existing.sum += value;
      existing.avg = existing.sum / existing.count;
      existing.min = Math.min(existing.min, value);
      existing.max = Math.max(existing.max, value);
    }
  }

  recordEvent(name: string, data?: Record<string, any>): void {
    this.metrics.events.push({
      name,
      timestamp: Date.now(),
      data
    });

    // Keep only last 1000 events
    if (this.metrics.events.length > 1000) {
      this.metrics.events = this.metrics.events.slice(-1000);
    }
  }

  async getMetrics(): Promise<PerformanceMetrics> {
    return { ...this.metrics };
  }

  async getSummary(): Promise<PerformanceSummary> {
    const allDurations: number[] = [];
    let totalOperations = 0;

    for (const [name, timers] of this.metrics.timers) {
      allDurations.push(...timers.map(t => t.duration));
      totalOperations += timers.length;
    }

    const averageResponseTime = allDurations.length > 0 
      ? allDurations.reduce((sum, duration) => sum + duration, 0) / allDurations.length 
      : 0;

    const slowestOperation = this.findSlowestOperation();
    const fastestOperation = this.findFastestOperation();

    const memoryUsage = this.getMemoryUsage();
    const errorRate = this.calculateErrorRate();
    const recommendations = this.generateRecommendations(averageResponseTime, memoryUsage);

    return {
      totalOperations,
      averageResponseTime,
      slowestOperation,
      fastestOperation,
      errorRate,
      memoryUsage,
      recommendations
    };
  }

  private findSlowestOperation(): string {
    let slowestOp = '';
    let maxDuration = 0;

    for (const [name, timers] of this.metrics.timers) {
      for (const timer of timers) {
        if (timer.duration > maxDuration) {
          maxDuration = timer.duration;
          slowestOp = name;
        }
      }
    }

    return slowestOp;
  }

  private findFastestOperation(): string {
    let fastestOp = '';
    let minDuration = Infinity;

    for (const [name, timers] of this.metrics.timers) {
      for (const timer of timers) {
        if (timer.duration < minDuration) {
          minDuration = timer.duration;
          fastestOp = name;
        }
      }
    }

    return fastestOp;
  }

  private getMemoryUsage(): { used: number; total: number; percentage: number } {
    if (typeof process !== 'undefined' && process.memoryUsage) {
      const usage = process.memoryUsage();
      return {
        used: usage.heapUsed,
        total: usage.heapTotal,
        percentage: (usage.heapUsed / usage.heapTotal) * 100
      };
    }

    return { used: 0, total: 0, percentage: 0 };
  }

  private calculateErrorRate(): number {
    const errorCounters = Array.from(this.metrics.counters.entries())
      .filter(([name]) => name.includes('error'));
    
    const totalErrors = errorCounters.reduce((sum, [, counter]) => sum + counter.count, 0);
    const totalOperations = Array.from(this.metrics.counters.values())
      .reduce((sum, counter) => sum + counter.count, 0);

    return totalOperations > 0 ? totalErrors / totalOperations : 0;
  }

  private generateRecommendations(
    avgResponseTime: number, 
    memoryUsage: { percentage: number }
  ): string[] {
    const recommendations: string[] = [];

    if (avgResponseTime > 1000) {
      recommendations.push('Consider optimizing slow operations (>1s average)');
    }

    if (memoryUsage.percentage > 80) {
      recommendations.push('High memory usage detected (>80%). Consider memory optimization');
    }

    if (this.metrics.events.length > 900) {
      recommendations.push('High event volume detected. Consider implementing event batching');
    }

    if (recommendations.length === 0) {
      recommendations.push('Performance is within acceptable limits');
    }

    return recommendations;
  }
}
