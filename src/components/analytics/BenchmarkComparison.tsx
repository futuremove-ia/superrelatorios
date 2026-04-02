import React from 'react';
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts';
import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface BenchmarkData {
  category: string;
  value: number;
  industry?: number;
  topPerformers?: number;
}

interface BenchmarkComparisonProps {
  title?: string;
  subtitle?: string;
  data: BenchmarkData[];
  isLoading?: boolean;
  viewMode?: 'radar' | 'bar';
  showIndustry?: boolean;
  showTopPerformers?: boolean;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];

const getTrendIcon = (value: number, benchmark?: number) => {
  if (!benchmark) return <Minus className="w-3 h-3" />;
  if (value > benchmark) return <TrendingUp className="w-3 h-3 text-green-600" />;
  if (value < benchmark) return <TrendingDown className="w-3 h-3 text-red-600" />;
  return <Minus className="w-3 h-3" />;
};

const getStatusColor = (value: number, benchmark?: number) => {
  if (!benchmark) return '';
  const diff = ((value - benchmark) / benchmark) * 100;
  if (diff > 10) return 'bg-green-100 text-green-800';
  if (diff < -10) return 'bg-red-100 text-red-800';
  return 'bg-yellow-100 text-yellow-800';
};

export function BenchmarkComparison({
  title = 'Comparação com Benchmarks',
  subtitle,
  data,
  isLoading = false,
  viewMode = 'radar',
  showIndustry = true,
  showTopPerformers = true,
}: BenchmarkComparisonProps) {
  const hasBenchmarks = data.some(d => d.industry !== undefined || d.topPerformers !== undefined);

  const normalizedData = data.map((item) => {
    const maxValue = Math.max(item.value, item.industry || 0, item.topPerformers || 0);
    return {
      ...item,
      valueNormalized: maxValue > 0 ? (item.value / maxValue) * 100 : 0,
      industryNormalized: item.industry && maxValue > 0 ? (item.industry / maxValue) * 100 : undefined,
      topPerformersNormalized: item.topPerformers && maxValue > 0 ? (item.topPerformers / maxValue) * 100 : undefined,
    };
  });

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>{title}</CardTitle>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Comparação entre seus resultados e benchmarks do mercado</p>
              </TooltipContent>
            </Tooltip>
          </div>
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
        </CardHeader>
        <CardContent>
          {viewMode === 'radar' ? (
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={normalizedData}>
                  <PolarGrid className="stroke-muted" />
                  <PolarAngleAxis
                    dataKey="category"
                    tick={{ fontSize: 12, fill: 'currentColor' }}
                  />
                  <PolarRadiusAxis
                    angle={90}
                    domain={[0, 100]}
                    tick={false}
                    axisLine={false}
                  />
                  <ChartLegend
                    content={
                      <div className="flex justify-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          <span className="text-xs">Sua Empresa</span>
                        </div>
                        {showIndustry && (
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-blue-400" />
                            <span className="text-xs">Setor</span>
                          </div>
                        )}
                        {showTopPerformers && (
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="text-xs">Top Performers</span>
                          </div>
                        )}
                      </div>
                    }
                  />
                  <Radar
                    name="Sua Empresa"
                    dataKey="valueNormalized"
                    stroke="var(--color-primary)"
                    fill="var(--color-primary)"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  {showIndustry && (
                    <Radar
                      name="Setor"
                      dataKey="industryNormalized"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  )}
                  {showTopPerformers && (
                    <Radar
                      name="Top Performers"
                      dataKey="topPerformersNormalized"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                  )}
                </RadarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ left: 20, right: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" horizontal={false} />
                  <XAxis type="number" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                  <YAxis
                    type="category"
                    dataKey="category"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const item = payload[0].payload;
                      return (
                        <div className="bg-background border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold mb-2">{item.category}</p>
                          <div className="space-y-1 text-sm">
                            <p>Sua Empresa: <span className="font-medium">{item.value}</span></p>
                            {item.industry !== undefined && (
                              <p>Média Setorial: <span className="font-medium">{item.industry}</span></p>
                            )}
                            {item.topPerformers !== undefined && (
                              <p>Top Performers: <span className="font-medium">{item.topPerformers}</span></p>
                            )}
                          </div>
                        </div>
                      );
                    }}
                  />
                  <Bar dataKey="value" name="Sua Empresa" fill="var(--color-primary)" radius={[0, 4, 4, 0]} />
                  {showIndustry && (
                    <Bar dataKey="industry" name="Setor" fill="#3B82F6" radius={[0, 4, 4, 0]} />
                  )}
                  {showTopPerformers && (
                    <Bar dataKey="topPerformers" name="Top" fill="#10B981" radius={[0, 4, 4, 0]} />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {hasBenchmarks && (
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-semibold">Resumo Comparativo</h4>
              <div className="grid gap-2">
                {data.map((item, idx) => {
                  const diff = item.industry !== undefined
                    ? ((item.value - item.industry) / item.industry) * 100
                    : item.topPerformers !== undefined
                    ? ((item.value - item.topPerformers) / item.topPerformers) * 100
                    : 0;
                  
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                        />
                        <span className="text-sm font-medium">{item.category}</span>
                        {getTrendIcon(item.value, item.industry || item.topPerformers)}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold">{item.value}</span>
                        {item.industry !== undefined && (
                          <Badge variant="outline" className={cn('text-xs', getStatusColor(item.value, item.industry))}>
                            {diff > 0 ? '+' : ''}{diff.toFixed(1)}% vs setor
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}

export default BenchmarkComparison;