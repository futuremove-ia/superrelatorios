import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Target,
  DollarSign,
  Settings,
  Download,
  RefreshCw,
  Filter,
  Eye
} from 'lucide-react';
import { MetricsCard } from '@/components/metrics';
import { DomainMetricsSummary } from '@/components/metrics';
import { MetricsChart } from '@/components/metrics';
import { TrendIndicator } from '@/components/metrics';
import { useMetricsLibrary } from '@/hooks/useMetricsLibrary';
import { useMetricValues } from '@/hooks/useMetricValues';
import { useCrossDomainAnalytics } from '@/hooks/useCrossDomainAnalytics';

interface MetricData {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
  healthStatus: 'good' | 'warning' | 'critical';
  domain: string;
  period: string;
}

interface DomainConfig {
  key: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

const MetricsDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('month');
  const [viewMode, setViewMode] = useState<'cards' | 'chart' | 'table'>('cards');

  // Hooks para dados
  const { metrics, isLoading: metricsLoading } = useMetricsLibrary();
  const { values, isLoading: valuesLoading } = useMetricValues('default-org'); // Adicionar org ID
  const { analytics, isLoading: analyticsLoading } = useCrossDomainAnalytics('default-org');

  // Configuração dos domínios
  const domains: DomainConfig[] = [
    {
      key: 'finance',
      name: t('domains.finance'),
      icon: DollarSign,
      color: 'text-green-600',
      description: t('domains.financeDesc')
    },
    {
      key: 'operations',
      name: t('domains.operations'),
      icon: Settings,
      color: 'text-blue-600',
      description: t('domains.operationsDesc')
    },
    {
      key: 'commercial',
      name: t('domains.commercial'),
      icon: BarChart3,
      color: 'text-purple-600',
      description: t('domains.commercialDesc')
    },
    {
      key: 'strategy',
      name: t('domains.strategy'),
      icon: Target,
      color: 'text-orange-600',
      description: t('domains.strategyDesc')
    },
    {
      key: 'cross_domain',
      name: t('domains.crossDomain'),
      icon: Activity,
      color: 'text-red-600',
      description: t('domains.crossDomainDesc')
    }
  ];

  // Filtrar métricas por domínio
  const filteredMetrics = useMemo(() => {
    if (!metrics || !values) return [];

    return metrics.map(metric => {
      const metricValues = values.filter(v => v.metric_id === metric.id);
      const latestValue = metricValues[0]; // Já ordenado por data descendente

      return {
        id: metric.id,
        name: metric.name,
        value: latestValue?.value || 0,
        unit: metric.unit,
        trend: latestValue?.trend || 'stable',
        trendPercentage: latestValue?.trend_percentage || 0,
        healthStatus: latestValue?.health_status || 'good',
        domain: metric.domain,
        period: latestValue?.period_start || new Date().toISOString()
      };
    }).filter(metric => 
      selectedDomain === 'all' || metric.domain === selectedDomain
    );
  }, [metrics, values, selectedDomain]);

  // Agrupar métricas por domínio
  const metricsByDomain = useMemo(() => {
    const grouped = domains.reduce((acc, domain) => {
      acc[domain.key] = filteredMetrics.filter(m => m.domain === domain.key);
      return acc;
    }, {} as Record<string, MetricData[]>);

    return grouped;
  }, [filteredMetrics]);

  // Estatísticas gerais
  const overallStats = useMemo(() => {
    const total = filteredMetrics.length;
    const good = filteredMetrics.filter(m => m.healthStatus === 'good').length;
    const warning = filteredMetrics.filter(m => m.healthStatus === 'warning').length;
    const critical = filteredMetrics.filter(m => m.healthStatus === 'critical').length;
    const upTrends = filteredMetrics.filter(m => m.trend === 'up').length;

    return {
      total,
      good,
      warning,
      critical,
      upTrends,
      healthScore: total > 0 ? Math.round((good / total) * 100) : 0
    };
  }, [filteredMetrics]);

  const loading = metricsLoading || valuesLoading || analyticsLoading;

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('metricsDashboard.title')}</h1>
          <p className="text-gray-600 mt-1">{t('metricsDashboard.description')}</p>
        </div>
        
        <div className="flex gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">{t('periods.week')}</SelectItem>
              <SelectItem value="month">{t('periods.month')}</SelectItem>
              <SelectItem value="quarter">{t('periods.quarter')}</SelectItem>
              <SelectItem value="year">{t('periods.year')}</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            {t('common.filters')}
          </Button>

          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            {t('common.export')}
          </Button>

          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            {t('common.refresh')}
          </Button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('metrics.totalMetrics')}</p>
                <p className="text-2xl font-bold">{overallStats.total}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('metrics.healthScore')}</p>
                <p className="text-2xl font-bold text-green-600">{overallStats.healthScore}%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('metrics.goodMetrics')}</p>
                <p className="text-2xl font-bold text-green-600">{overallStats.good}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('metrics.warningMetrics')}</p>
                <p className="text-2xl font-bold text-yellow-600">{overallStats.warning}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('metrics.criticalMetrics')}</p>
                <p className="text-2xl font-bold text-red-600">{overallStats.critical}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Domain Tabs */}
      <Tabs value={selectedDomain} onValueChange={setSelectedDomain}>
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="all">{t('domains.all')}</TabsTrigger>
          {domains.map(domain => (
            <TabsTrigger key={domain.key} value={domain.key}>
              <domain.icon className="w-4 h-4 mr-2" />
              {domain.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* All Domains View */}
        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {domains.map(domain => (
              <Card key={domain.key}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <domain.icon className={`w-5 h-5 ${domain.color}`} />
                    {domain.name}
                    <Badge variant="outline">
                      {metricsByDomain[domain.key]?.length || 0} {t('common.metrics')}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-gray-600">{domain.description}</p>
                </CardHeader>
                <CardContent>
                  <DomainMetricsSummary 
                    metrics={metricsByDomain[domain.key] || []}
                    domain={domain.key}
                    compact={true}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Individual Domain Views */}
        {domains.map(domain => (
          <TabsContent key={domain.key} value={domain.key} className="space-y-6">
            {/* Domain Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <domain.icon className={`w-8 h-8 ${domain.color}`} />
                <div>
                  <h2 className="text-2xl font-bold">{domain.name}</h2>
                  <p className="text-gray-600">{domain.description}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={viewMode === 'cards' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('cards')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {t('view.cards')}
                </Button>
                <Button 
                  variant={viewMode === 'chart' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('chart')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {t('view.chart')}
                </Button>
              </div>
            </div>

            {/* Domain Metrics */}
            {viewMode === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metricsByDomain[domain.key]?.map(metric => (
                  <MetricsCard 
                    key={metric.id}
                    metric={metric}
                    onClick={() => {/* Navigate to metric detail */}}
                  />
                ))}
              </div>
            )}

            {viewMode === 'chart' && (
              <Card>
                <CardContent className="p-6">
                  <MetricsChart 
                    metrics={metricsByDomain[domain.key] || []}
                    domain={domain.key}
                    period={selectedPeriod}
                  />
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {/* Cross-Domain Analytics */}
      {analytics && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-600" />
              {t('metrics.crossDomainAnalytics')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">{t('metrics.overallHealth')}</h4>
                <div className="text-3xl font-bold text-green-600">
                  {analytics.overall_health_score}%
                </div>
                <TrendIndicator 
                  trend={analytics.overall_health_trend}
                  value={analytics.overall_health_change}
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{t('metrics.criticalRelationships')}</h4>
                <div className="text-3xl font-bold text-red-600">
                  {analytics.critical_relationships_count}
                </div>
                <p className="text-sm text-gray-600">{t('metrics.needAttention')}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{t('metrics.recommendations')}</h4>
                <div className="text-3xl font-bold text-blue-600">
                  {analytics.recommendations_count}
                </div>
                <p className="text-sm text-gray-600">{t('metrics.available')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MetricsDashboard;
