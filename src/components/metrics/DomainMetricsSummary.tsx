import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendIndicator } from './TrendIndicator';
import { CheckCircle, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
  healthStatus: 'good' | 'warning' | 'critical';
  domain?: string; // Adicionar domain opcional
}

interface DomainMetricsSummaryProps {
  metrics: Metric[];
  domain: string;
  compact?: boolean;
}

export const DomainMetricsSummary: React.FC<DomainMetricsSummaryProps> = ({ 
  metrics, 
  domain, 
  compact = false 
}) => {
  if (!metrics.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p className="text-sm">Nenhuma métrica encontrada para este domínio.</p>
      </div>
    );
  }

  const goodMetrics = metrics.filter(m => m.healthStatus === 'good').length;
  const warningMetrics = metrics.filter(m => m.healthStatus === 'warning').length;
  const criticalMetrics = metrics.filter(m => m.healthStatus === 'critical').length;
  const upTrends = metrics.filter(m => m.trend === 'up').length;
  const downTrends = metrics.filter(m => m.trend === 'down').length;

  const healthScore = Math.round((goodMetrics / metrics.length) * 100);
  const trendScore = upTrends > downTrends ? 'positive' : downTrends > upTrends ? 'negative' : 'neutral';

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <TrendingUp className="w-4 h-4 text-gray-500" />;
    }
  };

  if (compact) {
    return (
      <div className="space-y-3">
        {/* Health Score */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Saúde Geral</span>
          <div className="flex items-center gap-2">
            <span className={`font-bold ${getHealthColor(healthScore)}`}>
              {healthScore}%
            </span>
            {getTrendIcon(trendScore)}
          </div>
        </div>

        {/* Metrics Distribution */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Distribuição</span>
          <div className="flex gap-1">
            {goodMetrics > 0 && (
              <Badge variant="default" className="text-xs bg-green-100 text-green-800">
                ✓ {goodMetrics}
              </Badge>
            )}
            {warningMetrics > 0 && (
              <Badge variant="default" className="text-xs bg-yellow-100 text-yellow-800">
                ⚠ {warningMetrics}
              </Badge>
            )}
            {criticalMetrics > 0 && (
              <Badge variant="default" className="text-xs bg-red-100 text-red-800">
                ✗ {criticalMetrics}
              </Badge>
            )}
          </div>
        </div>

        {/* Top Metrics */}
        <div className="space-y-2">
          <span className="text-sm text-gray-600">Principais Métricas</span>
          <div className="space-y-1">
            {metrics.slice(0, 3).map(metric => (
              <div key={metric.id} className="flex items-center justify-between text-xs">
                <span className="text-gray-700 truncate flex-1">{metric.name}</span>
                <div className="flex items-center gap-2 ml-2">
                  <span className="font-medium">{metric.value}{metric.unit}</span>
                  <TrendIndicator trend={metric.trend} value={metric.trendPercentage} compact={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Health Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className={`text-2xl font-bold ${getHealthColor(healthScore)}`}>
            {healthScore}%
          </div>
          <p className="text-sm text-gray-600">Score Saúde</p>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {upTrends}
          </div>
          <p className="text-sm text-gray-600">Tendências Altas</p>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">
            {criticalMetrics}
          </div>
          <p className="text-sm text-gray-600">Críticas</p>
        </div>
      </div>

      {/* Status Distribution */}
      <div>
        <h4 className="font-semibold mb-3">Status das Métricas</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Boas</span>
            </div>
            <Badge variant="default" className="bg-green-100 text-green-800">
              {goodMetrics}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Atenção</span>
            </div>
            <Badge variant="default" className="bg-yellow-100 text-yellow-800">
              {warningMetrics}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm">Críticas</span>
            </div>
            <Badge variant="default" className="bg-red-100 text-red-800">
              {criticalMetrics}
            </Badge>
          </div>
        </div>
      </div>

      {/* Top Metrics List */}
      <div>
        <h4 className="font-semibold mb-3">Principais Métricas</h4>
        <div className="space-y-3">
          {metrics.slice(0, 5).map(metric => (
            <div key={metric.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-sm">{metric.name}</div>
                <div className="text-xs text-gray-500">{metric.domain}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{metric.value}{metric.unit}</div>
                <TrendIndicator trend={metric.trend} value={metric.trendPercentage} compact={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
