import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { TrendingUp, TrendingDown, Minus, HelpCircle, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type TrendDirection = 'up' | 'down' | 'stable';
type StatusType = 'good' | 'warning' | 'critical';

interface KPIWidgetProps {
  title: string;
  value: number | string;
  unit?: string;
  trend?: TrendDirection;
  trendValue?: number;
  benchmark?: {
    target: number;
    current: number;
    label?: string;
  };
  status?: StatusType;
  tooltip?: string;
  isLoading?: boolean;
  formatValue?: (value: number | string, unit?: string) => string;
  className?: string;
}

const formatDefaultValue = (value: number | string, unit?: string): string => {
  if (typeof value !== 'number') return String(value);
  const numValue = value;
  if (unit === '%') return `${numValue.toFixed(1)}%`;
  if (unit === 'R$' || unit === '$') {
    if (numValue >= 1000000) return `${unit}${(numValue / 1000000).toFixed(1)}M`;
    if (numValue >= 1000) return `${unit}${(numValue / 1000).toFixed(1)}K`;
    return `${unit}${numValue.toLocaleString('pt-BR')}`;
  }
  if (numValue >= 1000000) return `${(numValue / 1000000).toFixed(1)}M`;
  if (numValue >= 1000) return `${(numValue / 1000).toFixed(1)}K`;
  return numValue.toLocaleString('pt-BR');
};

const getTrendIcon = (trend: TrendDirection) => {
  switch (trend) {
    case 'up': return <TrendingUp className="w-4 h-4" />;
    case 'down': return <TrendingDown className="w-4 h-4" />;
    default: return <Minus className="w-4 h-4" />;
  }
};

const getTrendColor = (trend: TrendDirection, isInverted = false) => {
  if (trend === 'stable') return 'text-muted-foreground';
  const isPositive = isInverted ? trend === 'down' : trend === 'up';
  return isPositive ? 'text-emerald-600' : 'text-red-600';
};

const getStatusColor = (status: StatusType) => {
  switch (status) {
    case 'good': return 'border-l-emerald-500';
    case 'warning': return 'border-l-yellow-500';
    case 'critical': return 'border-l-red-500';
    default: return 'border-l-gray-300';
  }
};

const getStatusIcon = (status: StatusType) => {
  switch (status) {
    case 'good': return <CheckCircle className="w-4 h-4 text-emerald-600" />;
    case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    case 'critical': return <AlertTriangle className="w-4 h-4 text-red-600" />;
    default: return null;
  }
};

const getStatusBadgeClass = (status: StatusType) => {
  switch (status) {
    case 'good': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'warning': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'critical': return 'bg-red-50 text-red-700 border-red-200';
    default: return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

const getStatusLabel = (status: StatusType) => {
  switch (status) {
    case 'good': return 'Bom';
    case 'warning': return 'Atenção';
    case 'critical': return 'Crítico';
    default: return status;
  }
};

export function KPIWidget({
  title,
  value,
  unit,
  trend,
  trendValue,
  benchmark,
  status,
  tooltip,
  isLoading = false,
  formatValue = formatDefaultValue,
  className,
}: KPIWidgetProps) {
  const formattedValue = formatValue(value, unit);
  const progressValue = benchmark ? Math.min((benchmark.current / benchmark.target) * 100, 100) : undefined;

  if (isLoading) {
    return (
      <Card className={cn('border-l-4 overflow-hidden', className)}>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-2 w-full" />
        </CardContent>
      </Card>
    );
  }

  const cardContent = (
    <Card className={cn('border-l-4 transition-all hover:shadow-md', getStatusColor(status || 'good'), className)}>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
              {tooltip && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="w-3.5 h-3.5 text-muted-foreground/60 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p>{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
            {trend && trendValue !== undefined && (
              <div className={cn('flex items-center gap-1 text-xs', getTrendColor(trend))}>
                {getTrendIcon(trend)}
                <span>{trendValue > 0 ? '+' : ''}{trendValue.toFixed(1)}%</span>
              </div>
            )}
          </div>
          {status && (
            <Badge variant="outline" className={cn('text-xs', getStatusBadgeClass(status))}>
              {getStatusLabel(status)}
            </Badge>
          )}
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">{formattedValue}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          {status && getStatusIcon(status)}
        </div>

        {benchmark && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">vs meta</span>
              <span className="font-medium">
                {formatValue(benchmark.current, unit)} / {formatValue(benchmark.target, unit)}
              </span>
            </div>
            <Progress 
              value={progressValue} 
              className="h-1.5"
            />
            {benchmark.label && (
              <span className="text-xs text-muted-foreground">{benchmark.label}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        {cardContent}
      </TooltipProvider>
    );
  }

  return cardContent;
}

export default KPIWidget;
