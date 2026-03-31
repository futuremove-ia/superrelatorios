import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  DollarSign,
  Users,
  Target,
  Zap,
  Activity,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedKPICardProps {
  kpi: {
    id: string;
    code: string;
    title: string;
    value: number;
    unit: string;
    domain: 'finance' | 'sales' | 'marketing' | 'operations' | 'hr' | 'strategy';
    trend: {
      direction: 'up' | 'down' | 'stable';
      percentage: number;
      period: string;
    };
    benchmark: {
      target: number;
      good: number;
      warning: number;
      current: 'good' | 'warning' | 'critical';
    };
    sparklineData: number[];
    lastUpdated: string;
    dataSource?: string;
  };
  variant?: 'compact' | 'default' | 'expanded';
  showSparkline?: boolean;
  onDrillDown?: () => void;
}

const getDomainIcon = (domain: string) => {
  switch (domain) {
    case 'finance': return DollarSign;
    case 'sales': return Users;
    case 'marketing': return Activity;
    case 'operations': return Zap;
    case 'hr': return Users;
    case 'strategy': return Target;
    default: return BarChart3;
  }
};

const getDomainColor = (domain: string) => {
  switch (domain) {
    case 'finance': return 'bg-emerald-500';
    case 'sales': return 'bg-blue-500';
    case 'marketing': return 'bg-purple-500';
    case 'operations': return 'bg-orange-500';
    case 'hr': return 'bg-pink-500';
    case 'strategy': return 'bg-indigo-500';
    default: return 'bg-gray-500';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'good': return 'border-emerald-200';
    case 'warning': return 'border-yellow-200';
    case 'critical': return 'border-red-200';
    default: return '';
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'good': return { color: 'bg-emerald-50 text-emerald-700 border-emerald-200', label: 'Bom' };
    case 'warning': return { color: 'bg-yellow-50 text-yellow-700 border-yellow-200', label: 'Atenção' };
    case 'critical': return { color: 'bg-red-50 text-red-700 border-red-200', label: 'Crítico' };
    default: return { color: 'bg-gray-50 text-gray-700', label: status };
  }
};

const getTrendColor = (direction: string) => {
  switch (direction) {
    case 'up': return 'text-emerald-600';
    case 'down': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

const formatValue = (value: number, unit: string) => {
  if (unit === '%') return `${value.toFixed(1)}%`;
  if (unit === 'R$' || unit === '$') {
    if (value >= 1000000) return `${unit}${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${unit}${(value / 1000).toFixed(1)}K`;
    return `${unit}${value.toLocaleString('pt-BR')}`;
  }
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toLocaleString('pt-BR');
};

// Mini Sparkline Component
function Sparkline({ data, colorClass }: { data: number[]; colorClass: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const strokeColor = colorClass.replace('bg-', '').replace('500', '');

  return (
    <svg viewBox="0 0 100 100" className="w-full h-10" preserveAspectRatio="none">
      <polyline
        fill="none"
        stroke={strokeColor === 'emerald' ? '#10b981' : strokeColor === 'blue' ? '#3b82f6' : strokeColor === 'purple' ? '#a855f7' : strokeColor === 'orange' ? '#f97316' : strokeColor === 'pink' ? '#ec4899' : strokeColor === 'indigo' ? '#6366f1' : '#6b7280'}
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function EnhancedKPICard({
  kpi,
  variant = 'default',
  showSparkline = true,
  onDrillDown,
}: EnhancedKPICardProps) {
  const DomainIcon = getDomainIcon(kpi.domain);
  const domainColor = getDomainColor(kpi.domain);
  const statusColor = getStatusColor(kpi.benchmark.current);
  const statusBadge = getStatusBadge(kpi.benchmark.current);
  const trendColor = getTrendColor(kpi.trend.direction);
  const progressValue = Math.min((kpi.value / kpi.benchmark.target) * 100, 100);

  // Compact variant
  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', statusColor)}>
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', domainColor)}>
                <DomainIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">{kpi.title}</p>
                <div className="flex items-center gap-1 text-xs">
                  <span className={cn(trendColor)}>
                    {kpi.trend.percentage > 0 ? '+' : ''}{kpi.trend.percentage}%
                  </span>
                  <span className="text-muted-foreground">vs {kpi.trend.period}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">{formatValue(kpi.value, kpi.unit)}</p>
              <p className="text-xs text-muted-foreground">{formatValue(kpi.benchmark.target, kpi.unit)} meta</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className={cn('overflow-hidden transition-all hover:shadow-md border-l-4 cursor-pointer', statusColor)}
      onClick={onDrillDown}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', domainColor)}>
              <DomainIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-base">{kpi.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{kpi.code}</p>
            </div>
          </div>
          <Badge variant="outline" className={cn('text-xs', statusBadge.color)}>
            {statusBadge.label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Main Value with Trend */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-3xl font-bold">{formatValue(kpi.value, kpi.unit)}</span>
            <span className="text-sm text-muted-foreground ml-2">atual</span>
          </div>
          <div className="flex items-center gap-1">
            {kpi.trend.direction === 'up' ? <TrendingUp className={cn('h-4 w-4', trendColor)} /> :
             kpi.trend.direction === 'down' ? <TrendingDown className={cn('h-4 w-4', trendColor)} /> :
             <Minus className="h-4 w-4 text-gray-600" />}
            <span className={cn('text-sm font-medium', trendColor)}>
              {kpi.trend.percentage > 0 ? '+' : ''}{kpi.trend.percentage}%
            </span>
          </div>
        </div>

        {/* Sparkline */}
        {showSparkline && kpi.sparklineData.length > 0 && (
          <div className="h-10 bg-muted/50 rounded-lg overflow-hidden">
            <Sparkline data={kpi.sparklineData} colorClass={domainColor} />
          </div>
        )}

        {/* Simplified Benchmark Progress */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Progresso vs Meta</span>
            <span className="font-medium">{Math.round(progressValue)}%</span>
          </div>
          <Progress 
            value={progressValue} 
            className="h-2"
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>{formatValue(kpi.benchmark.target, kpi.unit)} meta</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t text-xs text-muted-foreground">
          <span>Atualizado {kpi.lastUpdated}</span>
          {onDrillDown && (
            <span className="flex items-center text-primary font-medium">
              Detalhes
              <ArrowRight className="h-3 w-3 ml-1" />
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default EnhancedKPICard;
