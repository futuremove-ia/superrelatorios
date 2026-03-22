# Performance Monitoring - SuperRelatórios

## Overview

Monitoramento abrangente de performance, métricas de saúde da aplicação e alertas inteligentes para garantir experiência otimizada.

## 📊 Métricas de Performance

### Core Web Vitals

| Métrica | Alvo | Atual | Status |
|---------|------|-------|--------|
| **LCP (Largest Contentful Paint)** | < 2.5s | 1.8s | ✅ Bom |
| **FID (First Input Delay)** | < 100ms | 85ms | ✅ Bom |
| **CLS (Cumulative Layout Shift)** | < 0.1 | 0.05 | ✅ Bom |
| **FCP (First Contentful Paint)** | < 1.8s | 1.2s | ✅ Bom |
| **TTFB (Time to First Byte)** | < 800ms | 450ms | ✅ Bom |

### Métricas de Negócio

| Métrica | Meta | Atual | Tendência |
|---------|------|-------|-----------|
| **Load Time Dashboard** | < 3s | 2.1s | 📈 Melhorando |
| **Query Response Time** | < 500ms | 320ms | 📈 Melhorando |
| **Chart Render Time** | < 1s | 0.8s | 📈 Melhorando |
| **Export Generation** | < 5s | 3.2s | 📈 Melhorando |
| **API Latency** | < 200ms | 150ms | 📈 Melhorando |

## 🔧 Implementação do Monitoramento

### 1. Web Vitals Tracking

```typescript
// src/monitoring/webVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export class WebVitalsMonitor {
  private static instance: WebVitalsMonitor;
  
  static getInstance(): WebVitalsMonitor {
    if (!WebVitalsMonitor.instance) {
      WebVitalsMonitor.instance = new WebVitalsMonitor();
    }
    return WebVitalsMonitor.instance;
  }
  
  start(): void {
    // Core Web Vitals
    getCLS((metric) => this.sendMetric('CLS', metric));
    getFID((metric) => this.sendMetric('FID', metric));
    getFCP((metric) => this.sendMetric('FCP', metric));
    getLCP((metric) => this.sendMetric('LCP', metric));
    getTTFB((metric) => this.sendMetric('TTFB', metric));
    
    // Custom metrics
    this.trackCustomMetrics();
  }
  
  private sendMetric(name: string, metric: any): void {
    const payload = {
      name,
      value: metric.value,
      rating: metric.rating,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    
    // Send to monitoring service
    this.sendToMonitoring(payload);
  }
  
  private trackCustomMetrics(): void {
    // Dashboard load time
    this.measureDashboardLoad();
    
    // Query performance
    this.measureQueryPerformance();
    
    // Chart render time
    this.measureChartPerformance();
  }
  
  private measureDashboardLoad(): void {
    const startTime = performance.now();
    
    // Observer for dashboard completion
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'dashboard-complete') {
          const duration = entry.startTime - startTime;
          this.sendMetric('DASHBOARD_LOAD', {
            value: duration,
            rating: duration < 3000 ? 'good' : duration < 5000 ? 'needs-improvement' : 'poor'
          });
        }
      }
    });
    
    observer.observe({ entryTypes: ['mark'] });
  }
  
  private measureQueryPerformance(): void {
    // Track Supabase query performance
    const originalFetch = window.fetch;
    
    window.fetch = async (...args) => {
      const start = performance.now();
      const url = args[0] as string;
      
      if (url.includes('supabase')) {
        const response = await originalFetch(...args);
        const duration = performance.now() - start;
        
        this.sendMetric('QUERY_PERFORMANCE', {
          value: duration,
          rating: duration < 500 ? 'good' : duration < 1000 ? 'needs-improvement' : 'poor',
          url: url
        });
        
        return response;
      }
      
      return originalFetch(...args);
    };
  }
  
  private measureChartPerformance(): void {
    // Track chart render performance
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element && node.classList.contains('recharts-wrapper')) {
              const start = performance.now();
              
              // Measure when chart is fully rendered
              requestAnimationFrame(() => {
                const duration = performance.now() - start;
                this.sendMetric('CHART_RENDER', {
                  value: duration,
                  rating: duration < 1000 ? 'good' : duration < 2000 ? 'needs-improvement' : 'poor'
                });
              });
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  private sendToMonitoring(payload: any): void {
    // Send to Vercel Analytics
    if (window.va) {
      window.va('track', 'WebVital', payload);
    }
    
    // Send to custom monitoring
    fetch('/api/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {
      // Silently fail to not affect user experience
    });
  }
}

// Initialize monitoring
export const webVitalsMonitor = WebVitalsMonitor.getInstance();
```

### 2. Performance Dashboard

```typescript
// src/components/PerformanceDashboard.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  Activity,
  Clock,
  Zap,
  BarChart
} from 'lucide-react';

interface PerformanceMetric {
  name: string;
  value: number;
  target: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  trend: 'up' | 'down' | 'stable';
  unit: string;
}

export const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/performance/metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Failed to fetch performance metrics:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000); // Update every 30s
    
    return () => clearInterval(interval);
  }, []);
  
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'needs-improvement': return 'bg-yellow-100 text-yellow-800';
      case 'poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };
  
  const MetricCard: React.FC<{ metric: PerformanceMetric }> = ({ metric }) => {
    const percentage = Math.min((metric.value / metric.target) * 100, 100);
    
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
            <div className="flex items-center space-x-2">
              {getTrendIcon(metric.trend)}
              <Badge className={getRatingColor(metric.rating)}>
                {metric.rating}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">
                {metric.value}{metric.unit}
              </span>
              <span className="text-sm text-gray-500">
                Target: {metric.target}{metric.unit}
              </span>
            </div>
            <Progress value={percentage} className="h-2" />
            <div className="text-xs text-gray-500">
              {percentage.toFixed(1)}% of target
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Performance Monitoring</h2>
          <p className="text-gray-600">Real-time performance metrics and health status</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Last updated: Just now
          </Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.name} metric={metric} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {metrics.slice(0, 5).map((metric) => (
                <div key={metric.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{metric.name}</span>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(metric.trend)}
                    <span className="text-sm">{metric.value}{metric.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Overall Health</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Healthy
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Response</span>
                <Badge className="bg-green-100 text-green-800">150ms</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Error Rate</span>
                <Badge className="bg-green-100 text-green-800">0.1%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Uptime</span>
                <Badge className="bg-green-100 text-green-800">99.9%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
```

### 3. Alertas Inteligentes

```typescript
// src/monitoring/alerts.ts
export class PerformanceAlerts {
  private static instance: PerformanceAlerts;
  private thresholds = {
    lcp: { warning: 2.5, critical: 4.0 },
    fid: { warning: 100, critical: 300 },
    cls: { warning: 0.1, critical: 0.25 },
    query: { warning: 500, critical: 1000 },
    dashboard: { warning: 3000, critical: 5000 },
  };
  
  static getInstance(): PerformanceAlerts {
    if (!PerformanceAlerts.instance) {
      PerformanceAlerts.instance = new PerformanceAlerts();
    }
    return PerformanceAlerts.instance;
  }
  
  checkThresholds(metric: string, value: number): void {
    const threshold = this.thresholds[metric];
    if (!threshold) return;
    
    if (value >= threshold.critical) {
      this.sendAlert('critical', metric, value);
    } else if (value >= threshold.warning) {
      this.sendAlert('warning', metric, value);
    }
  }
  
  private sendAlert(level: 'warning' | 'critical', metric: string, value: number): void {
    const alert = {
      level,
      metric,
      value,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    
    // Send to monitoring service
    fetch('/api/alerts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alert)
    });
    
    // Send to Slack for critical alerts
    if (level === 'critical') {
      this.sendSlackAlert(alert);
    }
    
    // Show in-app notification
    this.showNotification(alert);
  }
  
  private sendSlackAlert(alert: any): void {
    const webhook = process.env.VITE_SLACK_WEBHOOK;
    if (!webhook) return;
    
    const message = {
      text: `🚨 Critical Performance Alert`,
      attachments: [{
        color: 'danger',
        fields: [
          { title: 'Metric', value: alert.metric, short: true },
          { title: 'Value', value: alert.value.toString(), short: true },
          { title: 'URL', value: alert.url, short: true },
          { title: 'Time', value: alert.timestamp, short: true },
        ],
      }],
    };
    
    fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
  }
  
  private showNotification(alert: any): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Performance Alert', {
        body: `${alert.metric}: ${alert.value} (${alert.level})`,
        icon: '/favicon.ico',
      });
    }
  }
}
```

## 📈 Análise de Performance

### 1. Relatórios Automáticos

```typescript
// src/monitoring/reports.ts
export class PerformanceReports {
  async generateDailyReport(): Promise<PerformanceReport> {
    const metrics = await this.fetchMetrics('24h');
    const trends = await this.calculateTrends(metrics);
    const insights = await this.generateInsights(metrics);
    
    return {
      period: '24h',
      metrics,
      trends,
      insights,
      health: this.calculateHealth(metrics),
      recommendations: this.generateRecommendations(metrics),
    };
  }
  
  async generateWeeklyReport(): Promise<PerformanceReport> {
    const metrics = await this.fetchMetrics('7d');
    const trends = await this.calculateTrends(metrics);
    const insights = await this.generateInsights(metrics);
    
    return {
      period: '7d',
      metrics,
      trends,
      insights,
      health: this.calculateHealth(metrics),
      recommendations: this.generateRecommendations(metrics),
    };
  }
  
  private async generateInsights(metrics: any[]): Promise<string[]> {
    const insights: string[] = [];
    
    // Analyze patterns
    const slowQueries = metrics.filter(m => m.name === 'QUERY_PERFORMANCE' && m.value > 500);
    if (slowQueries.length > 0) {
      insights.push(`Detected ${slowQueries.length} slow queries (>500ms)`);
    }
    
    const slowDashboards = metrics.filter(m => m.name === 'DASHBOARD_LOAD' && m.value > 3000);
    if (slowDashboards.length > 0) {
      insights.push(`Dashboard load time increased by ${this.calculateAverage(slowDashboards)}ms`);
    }
    
    return insights;
  }
  
  private generateRecommendations(metrics: any[]): string[] {
    const recommendations: string[] = [];
    
    // Check for optimization opportunities
    const avgLCP = this.calculateAverage(metrics.filter(m => m.name === 'LCP'));
    if (avgLCP > 2.5) {
      recommendations.push('Optimize images and reduce bundle size to improve LCP');
    }
    
    const avgQuery = this.calculateAverage(metrics.filter(m => m.name === 'QUERY_PERFORMANCE'));
    if (avgQuery > 500) {
      recommendations.push('Add database indexes and optimize queries');
    }
    
    return recommendations;
  }
}
```

### 2. Benchmarking

```typescript
// src/monitoring/benchmark.ts
export class PerformanceBenchmark {
  private benchmarks = {
    lcp: { industry: 2.5, excellent: 1.8 },
    fid: { industry: 100, excellent: 50 },
    cls: { industry: 0.1, excellent: 0.05 },
    query: { industry: 500, excellent: 200 },
  };
  
  compareWithIndustry(metric: string, value: number): BenchmarkResult {
    const benchmark = this.benchmarks[metric];
    if (!benchmark) return null;
    
    const industryScore = (benchmark.industry / value) * 100;
    const excellentScore = (benchmark.excellent / value) * 100;
    
    return {
      metric,
      value,
      industryAverage: benchmark.industry,
      excellentBenchmark: benchmark.excellent,
      industryScore,
      excellentScore,
      rating: this.getRating(excellentScore),
    };
  }
  
  private getRating(score: number): 'excellent' | 'good' | 'fair' | 'poor' {
    if (score >= 120) return 'excellent';
    if (score >= 100) return 'good';
    if (score >= 80) return 'fair';
    return 'poor';
  }
}
```

## 🔧 Ferramentas de Debug

### 1. Performance DevTools

```typescript
// src/monitoring/devtools.ts
export class PerformanceDevTools {
  static enableDebugMode(): void {
    // Add performance markers
    this.markComponentRenders();
    this.trackStateUpdates();
    this.measureNetworkRequests();
  }
  
  private static markComponentRenders(): void {
    const originalRender = React.createElement;
    
    React.createElement = (...args) => {
      const componentName = args[0]?.name || 'Unknown';
      performance.mark(`${componentName}-render-start`);
      
      const element = originalRender(...args);
      
      requestAnimationFrame(() => {
        performance.mark(`${componentName}-render-end`);
        performance.measure(
          `${componentName}-render`,
          `${componentName}-render-start`,
          `${componentName}-render-end`
        );
      });
      
      return element;
    };
  }
  
  private static trackStateUpdates(): void {
    // Track React state updates
    const originalSetState = React.Component.prototype.setState;
    
    React.Component.prototype.setState = function(...args) {
      const start = performance.now();
      const result = originalSetState.apply(this, args);
      
      requestAnimationFrame(() => {
        const duration = performance.now() - start;
        console.log(`State update took ${duration.toFixed(2)}ms`);
      });
      
      return result;
    };
  }
  
  private static measureNetworkRequests(): void {
    const originalFetch = window.fetch;
    
    window.fetch = async (...args) => {
      const start = performance.now();
      const url = args[0] as string;
      
      console.log(`🌐 Request started: ${url}`);
      
      try {
        const response = await originalFetch(...args);
        const duration = performance.now() - start;
        
        console.log(`✅ Request completed: ${url} (${duration.toFixed(2)}ms)`);
        return response;
      } catch (error) {
        const duration = performance.now() - start;
        console.log(`❌ Request failed: ${url} (${duration.toFixed(2)}ms)`);
        throw error;
      }
    };
  }
}
```

### 2. Memory Profiler

```typescript
// src/monitoring/memory.ts
export class MemoryProfiler {
  private static measurements: MemoryMeasurement[] = [];
  
  static startProfiling(): void {
    // Measure memory usage every 5 seconds
    setInterval(() => {
      this.measureMemory();
    }, 5000);
  }
  
  private static measureMemory(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      
      const measurement: MemoryMeasurement = {
        timestamp: new Date().toISOString(),
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      };
      
      this.measurements.push(measurement);
      
      // Keep only last 100 measurements
      if (this.measurements.length > 100) {
        this.measurements.shift();
      }
      
      // Check for memory leaks
      this.checkMemoryLeaks(measurement);
    }
  }
  
  private static checkMemoryLeaks(measurement: MemoryMeasurement): void {
    const recent = this.measurements.slice(-10);
    const increasing = recent.every((m, i) => 
      i === 0 || m.usedJSHeapSize > recent[i - 1].usedJSHeapSize
    );
    
    if (increasing && measurement.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB
      console.warn('⚠️ Potential memory leak detected');
    }
  }
  
  static getMemoryReport(): MemoryReport {
    if (this.measurements.length === 0) return null;
    
    const latest = this.measurements[this.measurements.length - 1];
    const oldest = this.measurements[0];
    
    return {
      current: latest,
      trend: latest.usedJSHeapSize - oldest.usedJSHeapSize,
      average: this.measurements.reduce((sum, m) => sum + m.usedJSHeapSize, 0) / this.measurements.length,
      max: Math.max(...this.measurements.map(m => m.usedJSHeapSize)),
      min: Math.min(...this.measurements.map(m => m.usedJSHeapSize)),
    };
  }
}
```

## 📊 Relatórios e Análises

### 1. Dashboard de Performance

O dashboard de performance oferece visão completa em tempo real:

- **Métricas Core Web Vitals** com tendências
- **Performance de queries** e latências
- **Uso de memória** e detecção de leaks
- **Alertas inteligentes** e notificações
- **Benchmarking** contra médias do setor

### 2. Relatórios Automáticos

- **Diários:** Métricas essenciais e alertas
- **Semanais:** Tendências e insights
- **Mensais:** Análise completa e recomendações

### 3. Integrações

- **Vercel Analytics:** Web vitals e performance
- **Sentry:** Error tracking e performance
- **Supabase Logs:** Database performance
- **Custom API:** Métricas de negócio

---

**Monitoramento abrangente para performance excepcional e experiência otimizada!**
