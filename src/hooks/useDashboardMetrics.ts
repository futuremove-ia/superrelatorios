import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface DashboardMetrics {
  kpis: {
    code: string;
    name: string;
    value: number;
    unit: string;
    threshold: {
      critical: number;
      warning: number;
      good: number;
    };
    trend: 'up' | 'down' | 'stable';
    previousValue?: number;
    change?: number;
    category: 'financial' | 'marketing' | 'sales' | 'operational';
  }[];
  summary: {
    total: number;
    critical: number;
    warning: number;
    good: number;
    overallHealth: 'critical' | 'warning' | 'good';
  };
  lastUpdated: string;
}

interface UseDashboardMetricsOptions {
  period?: string;
  category?: string;
  refreshInterval?: number;
}

export const useDashboardMetrics = (options: UseDashboardMetricsOptions = {}) => {
  const { period = 'month', category, refreshInterval = 30000 } = options;
  const queryClient = useQueryClient();

  const {
    data: metrics,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['dashboard-metrics', period, category],
    queryFn: async (): Promise<DashboardMetrics> => {
      // Mock API call - replace with actual API
      const mockMetrics: DashboardMetrics = {
        kpis: [
          {
            code: 'NET_PROFIT_MARGIN',
            name: 'Margem de Lucro Líquida',
            value: 12.5,
            unit: '%',
            threshold: { critical: 0, warning: 5, good: 10 },
            trend: 'up',
            previousValue: 10.2,
            change: 22.5,
            category: 'financial'
          },
          {
            code: 'LTV_CAC_RATIO',
            name: 'LTV/CAC Ratio',
            value: 2.8,
            unit: 'x',
            threshold: { critical: 1.5, warning: 2.5, good: 3.5 },
            trend: 'up',
            previousValue: 2.4,
            change: 16.7,
            category: 'marketing'
          },
          {
            code: 'RUNWAY',
            name: 'Runway (Meses)',
            value: 4.2,
            unit: 'meses',
            threshold: { critical: 1, warning: 3, good: 6 },
            trend: 'down',
            previousValue: 4.8,
            change: -12.5,
            category: 'financial'
          },
          {
            code: 'SALES_CYCLE_DAYS',
            name: 'Ciclo de Vendas',
            value: 45,
            unit: 'dias',
            threshold: { critical: 90, warning: 60, good: 30 },
            trend: 'down',
            previousValue: 52,
            change: -13.5,
            category: 'sales'
          },
          {
            code: 'CHURN_RATE',
            name: 'Taxa de Churn',
            value: 3.2,
            unit: '%',
            threshold: { critical: 10, warning: 5, good: 2 },
            trend: 'stable',
            previousValue: 3.1,
            change: 3.2,
            category: 'marketing'
          }
        ],
        summary: {
          total: 5,
          critical: 0,
          warning: 2,
          good: 3,
          overallHealth: 'good'
        },
        lastUpdated: new Date().toISOString()
      };

      // Filter by category if specified
      if (category && category !== 'all') {
        mockMetrics.kpis = mockMetrics.kpis.filter(kpi => kpi.category === category);
        mockMetrics.summary.total = mockMetrics.kpis.length;
        mockMetrics.summary.critical = mockMetrics.kpis.filter(kpi => kpi.value <= kpi.threshold.critical).length;
        mockMetrics.summary.warning = mockMetrics.kpis.filter(kpi => kpi.value > kpi.threshold.critical && kpi.value <= kpi.threshold.warning).length;
        mockMetrics.summary.good = mockMetrics.kpis.filter(kpi => kpi.value > kpi.threshold.warning).length;
      }

      return mockMetrics;
    },
    refetchInterval: refreshInterval,
    staleTime: 10000
  });

  const getKPIByCode = (code: string) => {
    return metrics?.kpis.find(kpi => kpi.code === code);
  };

  const getKPIsByCategory = (cat: string) => {
    return metrics?.kpis.filter(kpi => kpi.category === cat) || [];
  };

  const getCriticalKPIs = () => {
    return metrics?.kpis.filter(kpi => kpi.value <= kpi.threshold.critical) || [];
  };

  const getWarningKPIs = () => {
    return metrics?.kpis.filter(kpi => kpi.value > kpi.threshold.critical && kpi.value <= kpi.threshold.warning) || [];
  };

  const getGoodKPIs = () => {
    return metrics?.kpis.filter(kpi => kpi.value > kpi.threshold.warning) || [];
  };

  const refreshMetrics = () => {
    queryClient.invalidateQueries({ queryKey: ['dashboard-metrics'] });
    return refetch();
  };

  return {
    data: metrics,
    isLoading,
    error,
    refetch: refreshMetrics,
    getKPIByCode,
    getKPIsByCategory,
    getCriticalKPIs,
    getWarningKPIs,
    getGoodKPIs
  };
};

export default useDashboardMetrics;
