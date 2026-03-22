import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Eye,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import { TrendIndicator } from '@/components/metrics';

interface MetricsCardProps {
  metric: {
    id: string;
    name: string;
    value: number;
    unit: string;
    trend: 'up' | 'down' | 'stable';
    trendPercentage: number;
    healthStatus: 'good' | 'warning' | 'critical';
    domain: string;
    period: string;
  };
  onClick?: () => void;
  compact?: boolean;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ 
  metric, 
  onClick, 
  compact = false 
}) => {
  const getHealthIcon = () => {
    switch (metric.healthStatus) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'critical':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getHealthColor = () => {
    switch (metric.healthStatus) {
      case 'good':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'critical':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '%') {
      return `${value.toFixed(1)}%`;
    } else if (unit === 'R$' || unit === '$') {
      return `${unit}${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    } else if (unit === 'meses' || unit === 'dias') {
      return `${value.toFixed(1)} ${unit}`;
    } else {
      return `${value.toLocaleString('pt-BR')} ${unit}`;
    }
  };

  const cardSize = compact ? 'p-4' : 'p-6';

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${getHealthColor()} ${cardSize}`}
      onClick={onClick}
    >
      <CardHeader className={compact ? 'pb-2' : 'pb-4'}>
        <div className="flex items-center justify-between">
          <CardTitle className={compact ? 'text-sm' : 'text-base font-medium'}>
            {metric.name}
          </CardTitle>
          <div className="flex items-center gap-2">
            {getHealthIcon()}
            <Badge 
              variant={metric.healthStatus === 'good' ? 'default' : 'destructive'}
              className="text-xs"
            >
              {metric.healthStatus}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className={compact ? 'pt-0' : 'pt-0'}>
        <div className="space-y-3">
          {/* Main Value */}
          <div className="flex items-baseline justify-between">
            <div className={`font-bold ${compact ? 'text-xl' : 'text-3xl'}`}>
              {formatValue(metric.value, metric.unit)}
            </div>
            <TrendIndicator 
              trend={metric.trend}
              value={metric.trendPercentage}
              compact={compact}
            />
          </div>

          {/* Additional Info */}
          {!compact && (
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Período: {new Date(metric.period).toLocaleDateString('pt-BR')}</span>
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-1" />
                Detalhes
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
