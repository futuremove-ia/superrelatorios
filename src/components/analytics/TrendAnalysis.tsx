import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KPIWidget } from '@/components/ui/KPIWidget';
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
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrendMetric {
  id: string;
  title: string;
  value: number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: number;
  benchmark?: {
    target: number;
    current: number;
    label?: string;
  };
  status?: 'good' | 'warning' | 'critical';
  history?: { date: string; value: number }[];
}

interface TrendAnalysisProps {
  title?: string;
  subtitle?: string;
  metrics: TrendMetric[];
  chartData?: { date: string; [key: string]: string | number }[];
  chartConfig?: Record<string, { label: string; color: string }>;
  isLoading?: boolean;
  onExport?: () => void;
  dateRange?: '7d' | '30d' | '90d' | '12m';
  onDateRangeChange?: (range: '7d' | '30d' | '90d' | '12m') => void;
}

export function TrendAnalysis({
  title = 'Análise de Tendências',
  subtitle,
  metrics,
  chartData,
  chartConfig,
  isLoading = false,
  onExport,
  dateRange = '30d',
  onDateRangeChange,
}: TrendAnalysisProps) {
  const comparisonMetrics = metrics.filter(m => m.history && m.history.length > 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Select
            value={dateRange}
            onValueChange={(value) =>
              onDateRangeChange?.(value as '7d' | '30d' | '90d' | '12m')
            }
          >
            <SelectTrigger className="w-[140px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="12m">Últimos 12 meses</SelectItem>
            </SelectContent>
          </Select>
          {onExport && (
            <Button variant="outline" size="sm" onClick={onExport}>
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <KPIWidget
            key={metric.id}
            title={metric.title}
            value={metric.value}
            unit={metric.unit}
            trend={metric.trend}
            trendValue={metric.trendValue}
            benchmark={metric.benchmark}
            status={metric.status}
            isLoading={isLoading}
          />
        ))}
      </div>

      {chartData && chartConfig && (
        <Card>
          <CardHeader>
            <CardTitle>Evolução dos Indicadores</CardTitle>
            <CardDescription>Comparação de períodos</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="line">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="line">Linha</TabsTrigger>
                  <TabsTrigger value="bar">Barras</TabsTrigger>
                  <TabsTrigger value="area">Área</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="line" className="mt-0">
                <div className="h-[300px]">
                  <ChartContainer config={chartConfig}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      {Object.keys(chartConfig).map((key) => (
                        <Line
                          key={key}
                          type="monotone"
                          dataKey={key}
                          stroke={`var(--color-${key})`}
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 4 }}
                        />
                      ))}
                    </LineChart>
                  </ChartContainer>
                </div>
              </TabsContent>
              <TabsContent value="bar" className="mt-0">
                <div className="h-[300px]">
                  <ChartContainer config={chartConfig}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      {Object.keys(chartConfig).map((key) => (
                        <Bar
                          key={key}
                          dataKey={key}
                          fill={`var(--color-${key})`}
                          radius={[4, 4, 0, 0]}
                        />
                      ))}
                    </BarChart>
                  </ChartContainer>
                </div>
              </TabsContent>
              <TabsContent value="area" className="mt-0">
                <div className="h-[300px]">
                  <ChartContainer config={chartConfig}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      {Object.keys(chartConfig).map((key) => (
                        <Area
                          key={key}
                          type="monotone"
                          dataKey={key}
                          stroke={`var(--color-${key})`}
                          fill={`var(--color-${key})`}
                          fillOpacity={0.2}
                        />
                      ))}
                    </AreaChart>
                  </ChartContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {comparisonMetrics.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Comparação de Períodos</CardTitle>
            <CardDescription>Evolução histórica</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {comparisonMetrics.map((metric) => (
                <div key={metric.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{metric.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}{' '}
                      {metric.trendValue !== undefined && (
                        <span className={metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : ''}>
                          {metric.trendValue > 0 ? '+' : ''}{metric.trendValue.toFixed(1)}%
                        </span>
                      )}
                    </span>
                  </div>
                  {metric.history && metric.history.length > 0 && (
                    <div className="h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={metric.history}>
                          <defs>
                            <linearGradient id={`gradient-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="var(--color-primary)"
                            fill={`url(#gradient-${metric.id})`}
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default TrendAnalysis;