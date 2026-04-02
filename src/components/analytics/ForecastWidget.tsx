import React, { useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, Calendar } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ForecastDataPoint {
  date: string;
  actual?: number;
  forecast?: number;
  lower?: number;
  upper?: number;
}

interface ForecastMetric {
  id: string;
  name: string;
  currentValue: number;
  forecastValue: number;
  unit?: string;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
  history: ForecastDataPoint[];
}

interface ForecastWidgetProps {
  title?: string;
  subtitle?: string;
  metrics: ForecastMetric[];
  isLoading?: boolean;
  forecastPeriod?: '30d' | '90d' | '12m';
  showConfidence?: boolean;
  showHistoricalData?: boolean;
}

const calculateSimpleForecast = (values: number[], periods: number): number => {
  if (values.length < 2) return values[0] || 0;
  
  const n = values.length;
  const sumX = (n * (n - 1)) / 2;
  const sumY = values.reduce((a, b) => a + b, 0);
  const sumXY = values.reduce((sum, y, x) => sum + x * y, 0);
  const sumX2 = (n * (n - 1) * (2 * n - 1)) / 6;
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  return intercept + slope * (n - 1 + periods);
};

const calculateTrend = (values: number[]): 'up' | 'down' | 'stable' => {
  if (values.length < 2) return 'stable';
  const firstHalf = values.slice(0, Math.floor(values.length / 2));
  const secondHalf = values.slice(Math.floor(values.length / 2));
  const avgFirst = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
  const avgSecond = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
  const changePercent = ((avgSecond - avgFirst) / avgFirst) * 100;
  
  if (changePercent > 5) return 'up';
  if (changePercent < -5) return 'down';
  return 'stable';
};

const getConfidenceLabel = (confidence: number) => {
  if (confidence >= 80) return { label: 'Alta', color: 'bg-green-100 text-green-800' };
  if (confidence >= 60) return { label: 'Média', color: 'bg-yellow-100 text-yellow-800' };
  return { label: 'Baixa', color: 'bg-red-100 text-red-800' };
};

export function ForecastWidget({
  title = 'Previsões',
  subtitle,
  metrics,
  isLoading = false,
  forecastPeriod = '30d',
  showConfidence = true,
  showHistoricalData = true,
}: ForecastWidgetProps) {
  const periodsMap = { '30d': 30, '90d': 90, '12m': 12 };
  const forecastPeriods = periodsMap[forecastPeriod];

  const processedMetrics = useMemo(() => {
    return metrics.map(metric => {
      const historicalValues = metric.history
        .filter(d => d.actual !== undefined)
        .map(d => d.actual as number);
      
      const trend = calculateTrend(historicalValues);
      const forecast = calculateSimpleForecast(historicalValues, forecastPeriods);
      
      const confidence = Math.min(
        95,
        Math.max(40, 100 - (historicalValues.length < 6 ? 30 : 0) - (Math.abs(forecast - metric.currentValue) / metric.currentValue) * 50)
      );

      const processedHistory = metric.history.map((point, idx) => {
        const isForecast = point.forecast !== undefined || (idx >= metric.history.length - 7);
        return {
          ...point,
          isForecast,
        };
      });

      return {
        ...metric,
        calculatedForecast: forecast,
        calculatedTrend: trend,
        confidence,
        processedHistory,
      };
    });
  }, [metrics, forecastPeriods]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-60" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-24 w-full" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>{title}</CardTitle>
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </div>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-6">
        {processedMetrics.map((metric) => {
          const diff = metric.calculatedForecast - metric.currentValue;
          const diffPercent = (diff / metric.currentValue) * 100;
          const confidenceInfo = getConfidenceLabel(metric.confidence);

          return (
            <div key={metric.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{metric.name}</h4>
                  {metric.calculatedTrend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : metric.calculatedTrend === 'down' ? (
                    <TrendingDown className="w-4 h-4 text-red-600" />
                  ) : null}
                </div>
                {showConfidence && (
                  <Badge variant="outline" className={cn('text-xs', confidenceInfo.color)}>
                    {confidenceInfo.label} ({metric.confidence}%)
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-xs text-muted-foreground">Atual</div>
                  <div className="text-lg font-bold">
                    {metric.currentValue.toLocaleString('pt-BR')}{metric.unit}
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="text-xs text-primary">Previsto ({forecastPeriod})</div>
                  <div className="text-lg font-bold text-primary">
                    {metric.calculatedForecast.toLocaleString('pt-BR')}{metric.unit}
                  </div>
                </div>
                <div className={cn(
                  'p-3 rounded-lg',
                  diff > 0 ? 'bg-green-50' : diff < 0 ? 'bg-red-50' : 'bg-muted/50'
                )}>
                  <div className="text-xs text-muted-foreground">Variação</div>
                  <div className={cn(
                    'text-lg font-bold',
                    diff > 0 ? 'text-green-600' : diff < 0 ? 'text-red-600' : ''
                  )}>
                    {diff > 0 ? '+' : ''}{diffPercent.toFixed(1)}%
                  </div>
                </div>
              </div>

              {showHistoricalData && (
                <div className="h-[120px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={metric.processedHistory}>
                      <defs>
                        <linearGradient id={`gradient-forecast-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id={`gradient-confidence-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1} />
                          <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/50" vertical={false} />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 10 }}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 10 }}
                        width={40}
                      />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="actual"
                        stroke="var(--color-primary)"
                        fill="url(#gradient-forecast-${metric.id})"
                        strokeWidth={2}
                        name="Real"
                        connectNulls
                      />
                      <Line
                        type="monotone"
                        dataKey="forecast"
                        stroke="var(--color-secondary)"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        name="Previsto"
                        connectNulls
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {metric.confidence < 60 && (
                <div className="flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                  <AlertCircle className="w-4 h-4" />
                  <span>Baixa confiança na previsão. Mais dados históricos melhorarão a precisão.</span>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default ForecastWidget;