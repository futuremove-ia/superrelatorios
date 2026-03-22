# 📊 Performance Monitoring SuperRelatórios

## Visão Geral

Sistema abrangente de monitoramento de performance, métricas de saúde da aplicação e alertas inteligentes para garantir experiência otimizada e operação confiável da plataforma SuperRelatórios.

## Contexto e Importância

Este monitoramento é crucial porque:
- **Garante experiência** otimizada para usuários
- **Detecta problemas** antes que afetem usuários
- **Fornece insights** para otimizações
- **Suporta decisões** baseadas em dados
- **Mantém SLAs** e contratos de serviço

## Arquitetura de Monitoramento

### 🏗️ Stack de Monitoramento

#### Estrutura Completa
```
┌─────────────────────────────────────────────────────────────┐
│                    DATA COLLECTION                           │
├─────────────────────────────────────────────────────────────┤
│  • Client-side metrics (Web Vitals, User Interactions)      │
│  • Server-side metrics (Response time, Throughput)        │
│  • Database metrics (Queries, Connections, Performance)   │
│  • Infrastructure metrics (CPU, Memory, Network)          │
│  • Business metrics (Conversions, Errors, Usage)          │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    DATA PROCESSING                           │
├─────────────────────────────────────────────────────────────┤
│  • Real-time aggregation                                 │
│  • Anomaly detection                                    │
│  • Trend analysis                                       │
│  • Correlation analysis                                  │
│  • Performance scoring                                   │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    VISUALIZATION & ALERTS                   │
├─────────────────────────────────────────────────────────────┤
│  • Dashboards (Grafana, Vercel Analytics)                │
│  • Alerting (PagerDuty, Slack, Email)                     │
│  • Reports (Automated, Scheduled)                         │
│  • Insights (AI-powered recommendations)                │
│  • SLA monitoring                                       │
└─────────────────────────────────────────────────────────────┘
```

## Métricas de Performance

### 📊 Core Web Vitals

#### Métricas Principais
```typescript
// Core Web Vitals configuration
interface CoreWebVitals {
  lcp: {
    name: 'Largest Contentful Paint';
    target: '< 2.5s';
    current: '1.8s';
    status: 'good';
    threshold: {
      good: 2.5;
      needsImprovement: 4.0;
      poor: 4.0;
    };
    measurement: '75th percentile of page loads';
    importance: 'high';
  };
  
  fid: {
    name: 'First Input Delay';
    target: '< 100ms';
    current: '85ms';
    status: 'good';
    threshold: {
      good: 100;
      needsImprovement: 300;
      poor: 300;
    };
    measurement: '75th percentile of user interactions';
    importance: 'high';
  };
  
  cls: {
    name: 'Cumulative Layout Shift';
    target: '< 0.1';
    current: '0.05';
    status: 'good';
    threshold: {
      good: 0.1;
      needsImprovement: 0.25;
      poor: 0.25;
    };
    measurement: '75th percentile of page loads';
    importance: 'high';
  };
  
  fcp: {
    name: 'First Contentful Paint';
    target: '< 1.8s';
    current: '1.2s';
    status: 'good';
    threshold: {
      good: 1.8;
      needsImprovement: 3.0;
      poor: 3.0;
    };
    measurement: '75th percentile of page loads';
    importance: 'medium';
  };
  
  ttfb: {
    name: 'Time to First Byte';
    target: '< 800ms';
    current: '450ms';
    status: 'good';
    threshold: {
      good: 800;
      needsImprovement: 1800;
      poor: 1800;
    };
    measurement: '75th percentile of page loads';
    importance: 'medium';
  };
}
```

#### Implementação de Coleta
```typescript
// Web Vitals monitoring implementation
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

class WebVitalsMonitor {
  private metrics: Map<string, any> = new Map();
  
  constructor() {
    this.setupMetricCollection();
  }
  
  private setupMetricCollection(): void {
    // Core Web Vitals
    getCLS((metric) => this.recordMetric('CLS', metric));
    getFID((metric) => this.recordMetric('FID', metric));
    getFCP((metric) => this.recordMetric('FCP', metric));
    getLCP((metric) => this.recordMetric('LCP', metric));
    getTTFB((metric) => this.recordMetric('TTFB', metric));
    
    // Custom metrics
    this.setupCustomMetrics();
  }
  
  private setupCustomMetrics(): void {
    // Page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.recordMetric('PageLoadTime', { value: loadTime });
    });
    
    // Time to Interactive
    this.measureTimeToInteractive();
    
    // API response times
    this.setupAPIMonitoring();
    
    // User interaction metrics
    this.setupInteractionMonitoring();
  }
  
  private measureTimeToInteractive(): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const interactiveEntries = entries.filter(entry => 
        entry.name === 'first-paint' || entry.name === 'first-contentful-paint'
      );
      
      if (interactiveEntries.length > 0) {
        const tti = interactiveEntries[interactiveEntries.length - 1].startTime;
        this.recordMetric('TimeToInteractive', { value: tti });
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  }
  
  private setupAPIMonitoring(): void {
    // Intercept fetch calls
    const originalFetch = window.fetch;
    
    window.fetch = async (...args) => {
      const start = performance.now();
      
      try {
        const response = await originalFetch(...args);
        const end = performance.now();
        const duration = end - start;
        
        this.recordMetric('APIResponseTime', {
          value: duration,
          url: args[0] as string,
          status: response.status
        });
        
        return response;
      } catch (error) {
        const end = performance.now();
        const duration = end - start;
        
        this.recordMetric('APIError', {
          value: duration,
          url: args[0] as string,
          error: error.message
        });
        
        throw error;
      }
    };
  }
  
  private setupInteractionMonitoring(): void {
    // Monitor user interactions
    ['click', 'keydown', 'scroll'].forEach(eventType => {
      document.addEventListener(eventType, (event) => {
        const timestamp = performance.now();
        this.recordMetric('UserInteraction', {
          type: eventType,
          timestamp,
          target: (event.target as Element).tagName
        });
      }, { passive: true });
    });
  }
  
  private recordMetric(name: string, metric: any): void {
    this.metrics.set(name, {
      ...metric,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
    
    // Send to analytics
    this.sendToAnalytics(name, metric);
  }
  
  private sendToAnalytics(name: string, metric: any): void {
    // Send to analytics service
    fetch('/api/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        metric,
        timestamp: Date.now()
      })
    }).catch(error => {
      console.error('Failed to send metric:', error);
    });
  }
  
  public getMetrics(): Map<string, any> {
    return this.metrics;
  }
  
  public getMetricSummary(): any {
    const summary: any = {};
    
    this.metrics.forEach((metric, name) => {
      if (!summary[name]) {
        summary[name] = {
          count: 0,
          values: [],
          average: 0,
          min: Infinity,
          max: -Infinity
        };
      }
      
      const summaryMetric = summary[name];
      summaryMetric.count++;
      summaryMetric.values.push(metric.value);
      summaryMetric.min = Math.min(summaryMetric.min, metric.value);
      summaryMetric.max = Math.max(summaryMetric.max, metric.value);
      summaryMetric.average = summaryMetric.values.reduce((a: number, b: number) => a + b, 0) / summaryMetric.values.length;
    });
    
    return summary;
  }
}

// Initialize monitoring
const webVitalsMonitor = new WebVitalsMonitor();
```

### 📊 Métricas de Negócio

#### KPIs de Performance de Negócio
```typescript
// Business performance metrics
interface BusinessMetrics {
  userExperience: {
    dashboardLoadTime: {
      target: '< 3s';
      current: '2.1s';
      trend: 'improving';
      impact: 'user_satisfaction';
    };
    
    queryResponseTime: {
      target: '< 500ms';
      current: '320ms';
      trend: 'improving';
      impact: 'user_productivity';
    };
    
    chartRenderTime: {
      target: '< 1s';
      current: '0.8s';
      trend: 'stable';
      impact: 'data_insights';
    };
    
    exportGeneration: {
      target: '< 5s';
      current: '3.2s';
      trend: 'improving';
      impact: 'reporting_efficiency';
    };
  };
  
  systemPerformance: {
    apiLatency: {
      target: '< 200ms';
      current: '150ms';
      trend: 'improving';
      impact: 'system_responsiveness';
    };
    
    databaseQueryTime: {
      target: '< 100ms';
      current: '85ms';
      trend: 'stable';
      impact: 'data_retrieval';
    };
    
    authenticationTime: {
      target: '< 2s';
      current: '1.5s';
      trend: 'improving';
      impact: 'user_access';
    };
    
    fileUploadTime: {
      target: '< 10s';
      current: '7.2s';
      trend: 'improving';
      impact: 'data_import';
    };
  };
  
  reliability: {
    uptime: {
      target: '> 99.9%';
      current: '99.95%';
      trend: 'stable';
      impact: 'service_availability';
    };
    
    errorRate: {
      target: '< 1%';
      current: '0.5%';
      trend: 'improving';
      impact: 'user_experience';
    };
    
    crashRate: {
      target: '< 0.1%';
      current: '0.05%';
      trend: 'stable';
      impact: 'system_stability';
    };
  };
}
```

## Implementação do Monitoramento

### 🔧 Frontend Monitoring

#### 1. Performance Observer API
```typescript
// Performance Observer implementation
class PerformanceMonitor {
  private observer: PerformanceObserver;
  private metrics: Map<string, number[]> = new Map();
  
  constructor() {
    this.setupObserver();
    this.setupMetricCollection();
  }
  
  private setupObserver(): void {
    this.observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        this.processEntry(entry);
      });
    });
    
    this.observer.observe({
      entryTypes: ['measure', 'navigation', 'resource', 'paint', 'largest-contentful-paint']
    });
  }
  
  private setupMetricCollection(): void {
    // Page navigation metrics
    this.collectNavigationMetrics();
    
    // Resource loading metrics
    this.collectResourceMetrics();
    
    // Custom performance marks
    this.setupCustomMarks();
  }
  
  private collectNavigationMetrics(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        ssl: navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
        ttfb: navigation.responseStart - navigation.requestStart,
        download: navigation.responseEnd - navigation.responseStart,
        domParse: navigation.domContentLoadedEventStart - navigation.responseEnd,
        domReady: navigation.domComplete - navigation.domContentLoadedEventStart
      };
      
      Object.entries(metrics).forEach(([name, value]) => {
        this.recordMetric(`navigation_${name}`, value);
      });
    }
  }
  
  private collectResourceMetrics(): void {
    const resources = performance.getEntriesByType('resource');
    
    resources.forEach(resource => {
      const metrics = {
        startTime: resource.startTime,
        duration: resource.duration,
        size: resource.transferSize || 0,
        type: resource.initiatorType,
        protocol: resource.nextHopProtocol,
        cacheHit: resource.transferSize === 0 && resource.decodedBodySize > 0
      };
      
      this.recordMetric(`resource_${resource.name}`, metrics);
    });
  }
  
  private setupCustomMarks(): void {
    // Dashboard load time
    this.mark('dashboard_start');
    
    // Chart render time
    this.mark('chart_start');
    
    // Export generation
    this.mark('export_start');
    
    // Measure after operations
    setTimeout(() => {
      this.measure('dashboard_load', 'dashboard_start');
    }, 0);
  }
  
  public mark(name: string): void {
    performance.mark(name);
  }
  
  public measure(name: string, startMark?: string): void {
    try {
      performance.measure(name, startMark);
      const entries = performance.getEntriesByName(name);
      if (entries.length > 0) {
        const latest = entries[entries.length - 1];
        this.recordMetric(name, latest.duration);
      }
    } catch (error) {
      console.warn(`Failed to measure ${name}:`, error);
    }
  }
  
  private recordMetric(name: string, value: number | any): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    if (typeof value === 'number') {
      this.metrics.get(name)!.push(value);
    } else {
      this.metrics.get(name)!.push(value);
    }
  }
  
  public getMetricStats(name: string): MetricStats | null {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) {
      return null;
    }
    
    const numericValues = values.filter(v => typeof v === 'number') as number[];
    
    if (numericValues.length === 0) {
      return null;
    }
    
    const sorted = numericValues.sort((a, b) => a - b);
    const len = sorted.length;
    
    return {
      count: len,
      min: sorted[0],
      max: sorted[len - 1],
      average: sorted.reduce((a, b) => a + b, 0) / len,
      median: len % 2 === 0 ? (sorted[len / 2 - 1] + sorted[len / 2]) / 2 : sorted[Math.floor(len / 2)],
      p95: sorted[Math.floor(len * 0.95)],
      p99: sorted[Math.floor(len * 0.99)]
    };
  }
  
  public getAllMetrics(): Record<string, MetricStats> {
    const result: Record<string, MetricStats> = {};
    
    this.metrics.forEach((values, name) => {
      const stats = this.getMetricStats(name);
      if (stats) {
        result[name] = stats;
      }
    });
    
    return result;
  }
}

interface MetricStats {
  count: number;
  min: number;
  max: number;
  average: number;
  median: number;
  p95: number;
  p99: number;
}

// Initialize performance monitor
const performanceMonitor = new PerformanceMonitor();
```

#### 2. Error Monitoring
```typescript
// Error monitoring implementation
class ErrorMonitor {
  private errors: ErrorReport[] = [];
  private errorThresholds: Map<string, number> = new Map();
  
  constructor() {
    this.setupErrorHandlers();
    this.setupErrorThresholds();
  }
  
  private setupErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.reportError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        timestamp: Date.now(),
        url: window.location.href
      });
    });
    
    // Promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        url: window.location.href
      });
    });
    
    // React error boundary fallback
    window.addEventListener('error', (event) => {
      if (event.target === window) {
        this.reportError({
          type: 'react',
          message: 'React component error',
          stack: event.error?.stack,
          timestamp: Date.now(),
          url: window.location.href
        });
      }
    });
  }
  
  private setupErrorThresholds(): void {
    this.errorThresholds.set('javascript', 10); // 10 errors per hour
    this.errorThresholds.set('promise', 5);    // 5 promise errors per hour
    this.errorThresholds.set('react', 3);       // 3 React errors per hour
    this.errorThresholds.set('api', 20);        // 20 API errors per hour
  }
  
  public reportError(error: ErrorReport): void {
    this.errors.push(error);
    
    // Check thresholds
    this.checkErrorThresholds(error);
    
    // Send to monitoring service
    this.sendErrorToService(error);
    
    // Keep only recent errors
    this.cleanupOldErrors();
  }
  
  private checkErrorThresholds(error: ErrorReport): void {
    const threshold = this.errorThresholds.get(error.type);
    if (!threshold) return;
    
    const recentErrors = this.errors.filter(e => 
      e.type === error.type && 
      Date.now() - e.timestamp < 3600000 // 1 hour
    );
    
    if (recentErrors.length >= threshold) {
      this.triggerAlert(error.type, recentErrors.length);
    }
  }
  
  private triggerAlert(errorType: string, count: number): void {
    const alert = {
      type: 'error_threshold',
      errorType,
      count,
      timestamp: Date.now(),
      severity: count > threshold ? 'critical' : 'warning'
    };
    
    // Send to alerting system
    this.sendAlert(alert);
  }
  
  private sendErrorToService(error: ErrorReport): void {
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(error)
    }).catch(err => {
      console.error('Failed to report error:', err);
    });
  }
  
  private sendAlert(alert: Alert): void {
    // Send to alerting system
    fetch('/api/alerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alert)
    }).catch(err => {
      console.error('Failed to send alert:', err);
    });
  }
  
  private cleanupOldErrors(): void {
    const oneHourAgo = Date.now() - 3600000;
    this.errors = this.errors.filter(error => error.timestamp > oneHourAgo);
  }
  
  public getErrorSummary(): ErrorSummary {
    const summary: ErrorSummary = {
      total: this.errors.length,
      byType: {},
      recent: this.errors.slice(-10),
      trends: {}
    };
    
    // Group by type
    this.errors.forEach(error => {
      if (!summary.byType[error.type]) {
        summary.byType[error.type] = 0;
      }
      summary.byType[error.type]++;
    });
    
    // Calculate trends (last hour vs previous hour)
    const now = Date.now();
    const oneHourAgo = now - 3600000;
    const twoHoursAgo = now - 7200000;
    
    const recentErrors = this.errors.filter(e => e.timestamp > oneHourAgo);
    const previousErrors = this.errors.filter(e => e.timestamp > twoHoursAgo && e.timestamp <= oneHourAgo);
    
    summary.trends = {
      recent: recentErrors.length,
      previous: previousErrors.length,
      trend: recentErrors.length > previousErrors.length ? 'increasing' : 'decreasing'
    };
    
    return summary;
  }
}

interface ErrorReport {
  type: string;
  message: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  stack?: string;
  timestamp: number;
  url: string;
}

interface ErrorSummary {
  total: number;
  byType: Record<string, number>;
  recent: ErrorReport[];
  trends: {
    recent: number;
    previous: number;
    trend: 'increasing' | 'decreasing';
  };
}

interface Alert {
  type: string;
  errorType: string;
  count: number;
  timestamp: number;
  severity: 'warning' | 'critical';
}

// Initialize error monitor
const errorMonitor = new ErrorMonitor();
```

### 🔧 Backend Monitoring

#### 1. API Performance Monitoring
```typescript
// API performance monitoring middleware
import { Request, Response, NextFunction } from 'express';

class APIMonitor {
  private metrics: Map<string, number[]> = new Map();
  
  middleware() {
    return (req: Request, res: Response, next: NextFunction) => {
      const startTime = Date.now();
      const method = req.method;
      const route = req.route?.path || req.path;
      
      // Override res.end to capture response time
      const originalEnd = res.end;
      res.end = function(this: any, ...args: any[]) {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        // Record metrics
        this.recordMetric(`${method} ${route}`, duration);
        
        // Log slow requests
        if (duration > 1000) {
          console.warn(`Slow request: ${method} ${route} - ${duration}ms`);
        }
        
        // Call original end
        originalEnd.apply(this, args);
      };
      
      next();
    };
  }
  
  private recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    this.metrics.get(name)!.push(value);
    
    // Keep only recent values
    const values = this.metrics.get(name)!;
    if (values.length > 1000) {
      values.shift();
    }
  }
  
  public getMetricStats(name: string): MetricStats | null {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) {
      return null;
    }
    
    const sorted = values.sort((a, b) => a - b);
    const len = sorted.length;
    
    return {
      count: len,
      min: sorted[0],
      max: sorted[len - 1],
      average: sorted.reduce((a, b) => a + b, 0) / len,
      median: len % 2 === 0 ? (sorted[len / 2 - 1] + sorted[len / 2]) / 2 : sorted[Math.floor(len / 2)],
      p95: sorted[Math.floor(len * 0.95)],
      p99: sorted[Math.floor(len * 0.99)]
    };
  }
  
  public getAllMetrics(): Record<string, MetricStats> {
    const result: Record<string, MetricStats> = {};
    
    this.metrics.forEach((values, name) => {
      const stats = this.getMetricStats(name);
      if (stats) {
        result[name] = stats;
      }
    });
    
    return result;
  }
}

// Initialize API monitor
const apiMonitor = new APIMonitor();
```

#### 2. Database Performance Monitoring
```typescript
// Database performance monitoring
interface DatabaseMetrics {
  queryTime: number;
  queryType: string;
  tableName: string;
  timestamp: number;
  success: boolean;
  error?: string;
}

class DatabaseMonitor {
  private metrics: DatabaseMetrics[] = [];
  private slowQueryThreshold = 1000; // 1 second
  
  recordQuery(queryTime: number, queryType: string, tableName: string, success: boolean, error?: string): void {
    const metric: DatabaseMetrics = {
      queryTime,
      queryType,
      tableName,
      timestamp: Date.now(),
      success,
      error
    };
    
    this.metrics.push(metric);
    
    // Alert on slow queries
    if (queryTime > this.slowQueryThreshold) {
      this.alertSlowQuery(metric);
    }
    
    // Keep only recent metrics
    this.cleanupOldMetrics();
  }
  
  private alertSlowQuery(metric: DatabaseMetrics): void {
    const alert = {
      type: 'slow_query',
      queryTime: metric.queryTime,
      queryType: metric.queryType,
      tableName: metric.tableName,
      timestamp: metric.timestamp,
      severity: metric.queryTime > 5000 ? 'critical' : 'warning'
    };
    
    // Send to alerting system
    this.sendAlert(alert);
  }
  
  private sendAlert(alert: any): void {
    fetch('/api/alerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alert)
    }).catch(err => {
      console.error('Failed to send alert:', err);
    });
  }
  
  private cleanupOldMetrics(): void {
    const oneHourAgo = Date.now() - 3600000;
    this.metrics = this.metrics.filter(metric => metric.timestamp > oneHourAgo);
  }
  
  public getQueryStats(): DatabaseQueryStats {
    const stats: DatabaseQueryStats = {
      totalQueries: this.metrics.length,
      averageQueryTime: 0,
      slowQueries: 0,
      failedQueries: 0,
      queriesByType: {},
      queriesByTable: {},
      slowestQueries: []
    };
    
    if (this.metrics.length === 0) {
      return stats;
    }
    
    // Calculate average query time
    stats.averageQueryTime = this.metrics.reduce((sum, metric) => sum + metric.queryTime, 0) / this.metrics.length;
    
    // Count slow and failed queries
    stats.slowQueries = this.metrics.filter(metric => metric.queryTime > this.slowQueryThreshold).length;
    stats.failedQueries = this.metrics.filter(metric => !metric.success).length;
    
    // Group by type and table
    this.metrics.forEach(metric => {
      if (!stats.queriesByType[metric.queryType]) {
        stats.queriesByType[metric.queryType] = 0;
      }
      stats.queriesByType[metric.queryType]++;
      
      if (!stats.queriesByTable[metric.tableName]) {
        stats.queriesByTable[metric.tableName] = 0;
      }
      stats.queriesByTable[metric.tableName]++;
    });
    
    // Get slowest queries
    stats.slowestQueries = this.metrics
      .sort((a, b) => b.queryTime - a.queryTime)
      .slice(0, 10);
    
    return stats;
  }
}

interface DatabaseQueryStats {
  totalQueries: number;
  averageQueryTime: number;
  slowQueries: number;
  failedQueries: number;
  queriesByType: Record<string, number>;
  queriesByTable: Record<string, number>;
  slowestQueries: DatabaseMetrics[];
}

// Initialize database monitor
const databaseMonitor = new DatabaseMonitor();
```

## Alertas e Notificações

### 🚨 Sistema de Alertas

#### 1. Configuração de Alertas
```typescript
// Alert configuration
interface AlertConfig {
  name: string;
  condition: string;
  threshold: number;
  window: number;
  severity: 'info' | 'warning' | 'critical';
  channels: ('slack' | 'email' | 'pagerduty')[];
  cooldown: number;
  enabled: boolean;
}

const alertConfigs: AlertConfig[] = [
  {
    name: 'high_error_rate',
    condition: 'error_rate',
    threshold: 5,
    window: 300000, // 5 minutes
    severity: 'critical',
    channels: ['slack', 'pagerduty'],
    cooldown: 900000, // 15 minutes
    enabled: true
  },
  {
    name: 'slow_response_time',
    condition: 'response_time',
    threshold: 2000,
    window: 300000, // 5 minutes
    severity: 'warning',
    channels: ['slack'],
    cooldown: 600000, // 10 minutes
    enabled: true
  },
  {
    name: 'high_cpu_usage',
    condition: 'cpu_usage',
    threshold: 80,
    window: 600000, // 10 minutes
    severity: 'warning',
    channels: ['slack'],
    cooldown: 1800000, // 30 minutes
    enabled: true
  },
  {
    name: 'memory_usage',
    condition: 'memory_usage',
    threshold: 85,
    window: 300000, // 5 minutes
    severity: 'critical',
    channels: ['slack', 'pagerduty'],
    cooldown: 900000, // 15 minutes
    enabled: true
  }
];
```

#### 2. Sistema de Notificações
```typescript
// Notification system
class NotificationSystem {
  private alertHistory: Map<string, number> = new Map();
  
  async sendAlert(alert: Alert): Promise<void> {
    // Check cooldown
    if (this.isInCooldown(alert)) {
      return;
    }
    
    // Send to configured channels
    const config = alertConfigs.find(c => c.name === alert.name);
    if (!config || !config.enabled) {
      return;
    }
    
    const promises = config.channels.map(channel => this.sendToChannel(channel, alert, config));
    
    try {
      await Promise.all(promises);
      this.updateAlertHistory(alert.name);
    } catch (error) {
      console.error('Failed to send alert:', error);
    }
  }
  
  private isInCooldown(alert: Alert): boolean {
    const lastSent = this.alertHistory.get(alert.name);
    const config = alertConfigs.find(c => c.name === alert.name);
    
    if (!lastSent || !config) {
      return false;
    }
    
    return Date.now() - lastSent < config.cooldown;
  }
  
  private updateAlertHistory(alertName: string): void {
    this.alertHistory.set(alertName, Date.now());
  }
  
  private async sendToChannel(channel: string, alert: Alert, config: AlertConfig): Promise<void> {
    switch (channel) {
      case 'slack':
        await this.sendSlackAlert(alert, config);
        break;
      case 'email':
        await this.sendEmailAlert(alert, config);
        break;
      case 'pagerduty':
        await this.sendPagerDutyAlert(alert, config);
        break;
      default:
        console.warn(`Unknown channel: ${channel}`);
    }
  }
  
  private async sendSlackAlert(alert: Alert, config: AlertConfig): Promise<void> {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn('Slack webhook URL not configured');
      return;
    }
    
    const payload = {
      text: `🚨 ${config.name.toUpperCase()} Alert`,
      attachments: [{
        color: config.severity === 'critical' ? 'danger' : config.severity === 'warning' ? 'warning' : 'good',
        fields: [
          {
            title: 'Condition',
            value: alert.condition,
            short: true
          },
          {
            title: 'Value',
            value: alert.value.toString(),
            short: true
          },
          {
            title: 'Threshold',
            value: config.threshold.toString(),
            short: true
          },
          {
            title: 'Timestamp',
            value: new Date(alert.timestamp).toISOString(),
            short: true
          }
        ],
        footer: 'SuperRelatórios Monitoring',
        ts: alert.timestamp
      }]
    };
    
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Failed to send Slack alert:', error);
    }
  }
  
  private async sendEmailAlert(alert: Alert, config: AlertConfig): Promise<void> {
    // Implementation for email alerts
    console.log('Email alert would be sent:', alert);
  }
  
  private async sendPagerDutyAlert(alert: Alert, config: AlertConfig): Promise<void> {
    // Implementation for PagerDuty alerts
    console.log('PagerDuty alert would be sent:', alert);
  }
}

interface Alert {
  name: string;
  condition: string;
  value: number;
  timestamp: number;
  severity: 'info' | 'warning' | 'critical';
}

// Initialize notification system
const notificationSystem = new NotificationSystem();
```

## Dashboards e Visualização

### 📊 Grafana Dashboards

#### 1. Dashboard Principal
```typescript
// Grafana dashboard configuration
interface GrafanaDashboard {
  title: 'SuperRelatórios Performance Dashboard';
  panels: [
    {
      title: 'Core Web Vitals',
      type: 'stat',
      targets: [
        {
          expr: 'avg(lcp_value)',
          legendFormat: 'LCP'
        },
        {
          expr: 'avg(fid_value)',
          legendFormat: 'FID'
        },
        {
          expr: 'avg(cls_value)',
          legendFormat: 'CLS'
        }
      ],
      fieldConfig: {
        defaults: {
          unit: 'short',
          thresholds: {
            steps: [
              { color: 'green', value: null },
              { color: 'yellow', value: 2.5 },
              { color: 'red', value: 4.0 }
            ]
          }
        }
      }
    },
    {
      title: 'Response Time',
      type: 'graph',
      targets: [
        {
          expr: 'avg(api_response_time)',
          legendFormat: 'API Response Time'
        },
        {
          expr: 'avg(database_query_time)',
          legendFormat: 'Database Query Time'
        }
      ],
      yAxes: [
        {
          label: 'Response Time (ms)',
          unit: 'ms'
        }
      ]
    },
    {
      title: 'Error Rate',
      type: 'stat',
      targets: [
        {
          expr: 'sum(error_count) / sum(request_count) * 100',
          legendFormat: 'Error Rate'
        }
      ],
      fieldConfig: {
        defaults: {
          unit: 'percent',
          thresholds: {
            steps: [
              { color: 'green', value: null },
              { color: 'yellow', value: 1 },
              { color: 'red', value: 5 }
            ]
          }
        }
      }
    },
    {
      title: 'User Metrics',
      type: 'graph',
      targets: [
        {
          expr: 'avg(user_satisfaction)',
          legendFormat: 'User Satisfaction'
        },
        {
          expr: 'avg(page_load_time)',
          legendFormat: 'Page Load Time'
        }
      ]
    }
  ],
  time: {
    from: 'now-1h',
    to: 'now'
  },
  refresh: '30s'
}
```

#### 2. Dashboard de Negócios
```typescript
// Business metrics dashboard
interface BusinessDashboard {
  title: 'SuperRelatórios Business Metrics';
  panels: [
    {
      title: 'Active Users',
      type: 'stat',
      targets: [
        {
          expr: 'count(active_users)',
          legendFormat: 'Active Users'
        }
      ]
    },
    {
      title: 'Conversion Rate',
      type: 'stat',
      targets: [
        {
          expr: 'sum(conversions) / sum(visitors) * 100',
          legendFormat: 'Conversion Rate'
        }
      ]
    },
    {
      title: 'Revenue Metrics',
      type: 'graph',
      targets: [
        {
          expr: 'sum(daily_revenue)',
          legendFormat: 'Daily Revenue'
        },
        {
          expr: 'sum(monthly_revenue)',
          legendFormat: 'Monthly Revenue'
        }
      ]
    },
    {
      title: 'Feature Usage',
      type: 'piechart',
      targets: [
        {
          expr: 'topk(10, sum(feature_usage)) by feature',
          legendFormat: '{{feature}}'
        }
      ]
    }
  ];
}
```

## Troubleshooting

### 🔧 Diagnóstico de Performance

#### 1. Ferramentas de Diagnóstico
```typescript
// Performance diagnostics
class PerformanceDiagnostics {
  async diagnoseSlowPageLoad(): Promise<DiagnosticReport> {
    const report: DiagnosticReport = {
      timestamp: Date.now(),
      url: window.location.href,
      issues: [],
      recommendations: []
    };
    
    // Check Core Web Vitals
    const webVitals = this.getWebVitals();
    
    if (webVitals.lcp > 4000) {
      report.issues.push({
        type: 'performance',
        severity: 'high',
        description: 'LCP is too slow',
        value: webVitals.lcp,
        threshold: 4000
      });
      
      report.recommendations.push({
        priority: 'high',
        action: 'Optimize largest contentful paint',
        details: [
          'Optimize images',
          'Reduce server response time',
          'Eliminate render-blocking resources'
        ]
      });
    }
    
    if (webVitals.fid > 300) {
      report.issues.push({
        type: 'performance',
        severity: 'medium',
        description: 'FID is too slow',
        value: webVitals.fid,
        threshold: 300
      });
      
      report.recommendations.push({
        priority: 'medium',
        action: 'Improve first input delay',
        details: [
          'Reduce JavaScript execution time',
          'Minimize main thread work',
          'Reduce time to interactive'
        ]
      });
    }
    
    // Check resource loading
    const resourceMetrics = this.getResourceMetrics();
    
    const slowResources = resourceMetrics.filter(r => r.duration > 2000);
    if (slowResources.length > 0) {
      report.issues.push({
        type: 'resources',
        severity: 'medium',
        description: `${slowResources.length} slow resources detected`,
        value: slowResources.length,
        threshold: 0
      });
      
      report.recommendations.push({
        priority: 'medium',
        action: 'Optimize slow resources',
        details: slowResources.map(r => `${r.name} (${r.duration}ms)`)
      });
    }
    
    return report;
  }
  
  private getWebVitals(): any {
    // Implementation to get current Web Vitals
    return {
      lcp: 1800,
      fid: 85,
      cls: 0.05,
      fcp: 1200,
      ttfb: 450
    };
  }
  
  private getResourceMetrics(): any[] {
    // Implementation to get resource metrics
    return [
      { name: 'main.js', duration: 1500 },
      { name: 'styles.css', duration: 800 },
      { name: 'api/data', duration: 2500 }
    ];
  }
}

interface DiagnosticReport {
  timestamp: number;
  url: string;
  issues: DiagnosticIssue[];
  recommendations: Recommendation[];
}

interface DiagnosticIssue {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  value: number;
  threshold: number;
}

interface Recommendation {
  priority: 'low' | 'medium' | 'high';
  action: string;
  details: string[];
}
```

## Melhores Práticas

### 🎯 Performance Best Practices

#### 1. Frontend Optimization
```typescript
// Performance optimization checklist
interface PerformanceChecklist {
  optimization: {
    bundle: [
      'Code splitting implemented',
      'Tree shaking enabled',
      'Minification enabled',
      'Compression enabled'
    ];
    
    loading: [
      'Lazy loading for images',
      'Intersection Observer for lazy loading',
      'Resource hints implemented',
      'Critical CSS inlined'
    ];
    
    runtime: [
      'React.memo for expensive components',
      'useMemo for expensive calculations',
      'Debouncing for user inputs',
      'Virtual scrolling for large lists'
    ];
  };
  
  monitoring: [
    'Core Web Vitals tracked',
    'Custom metrics implemented',
    'Error monitoring active',
    'Performance budgets set'
  ];
}
```

#### 2. Backend Optimization
```typescript
// Backend performance checklist
interface BackendChecklist {
  database: [
    'Indexes optimized',
    'Query performance monitored',
    'Connection pooling configured',
    'Read replicas implemented'
  ];
  
  api: [
    'Response caching implemented',
    'Rate limiting configured',
    'Compression enabled',
    'Request validation optimized'
  ];
  
  infrastructure: [
      'Load balancing configured',
      'Auto-scaling enabled',
      'CDN implemented',
      'Edge caching enabled'
  ];
}
```

## Considerações Importantes

### 🔄 Evolução Contínua

#### Processo de Melhoria
1. **Weekly performance reviews** - Revisão semanal de métricas
2. **Monthly optimization sprints** - Sprints de otimização mensais
3. **Quarterly performance audits** - Auditorias trimestrais de performance
4. **Annual performance planning** - Planejamento anual de performance

#### Innovation Pipeline
- **New monitoring tools** - Avaliação de novas ferramentas
- **AI-powered insights** - Insights baseados em IA
- **Predictive performance** - Predição de performance
- **Real-user monitoring** - Monitoramento de usuários reais

---

## Recursos Relacionados

### 📚 Documentação Complementar
- **[Deployment Guide](./01-deployment-guide.md)** - Processos de deploy
- **[Hierarchy Execution](./03-hierarchy-execution.md)** - Processos organizacionais
- **[API Reference](../04-api/01-api-reference.md)** - Documentação de APIs
- **[User Guide](../05-user-guides/02-complete-user-guide.md)** - Guia do usuário

### 🔗 Ferramentas e Recursos
- **Grafana Dashboard** - Monitoramento em tempo real
- **Vercel Analytics** - Métricas de frontend
- **PagerDuty** - Alertas e incidentes
- **Performance Budgets** - Orçamentos de performance

---

*Última atualização: 22/03/2026*  
*Versão: 2.0*  
*Status: Active*  
*Maintainer: SRE Team SuperRelatórios*
