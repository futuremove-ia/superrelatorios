import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface DataPoint {
  label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

interface MetricTrendChartProps {
  data: DataPoint[];
  dataKey?: string;
  labelKey?: string;
  title?: string;
  color?: string;
  height?: number;
  showTooltip?: boolean;
  showGradient?: boolean;
  className?: string;
  isLoading?: boolean;
  formatValue?: (value: number) => string;
}

const defaultColors = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#ec4899',
  '#06b6d4',
  '#84cc16',
];

const defaultFormatValue = (value: number): string => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toFixed(1);
};

const CustomTooltip: React.FC<TooltipProps<number, string> & { formatValue?: (value: number) => string }> = ({
  active,
  payload,
  formatValue: customFormatValue,
}) => {
  if (active && payload && payload.length) {
    const value = payload[0].value as number;
    return (
      <div className="bg-background border rounded-lg shadow-lg px-3 py-2 text-sm">
        <p className="font-medium">
          {customFormatValue ? customFormatValue(value) : defaultFormatValue(value)}
        </p>
      </div>
    );
  }
  return null;
};

function SparklineChart({
  data,
  dataKey = 'value',
  color,
  height = 60,
  showGradient = true,
}: {
  data: DataPoint[];
  dataKey: string;
  color: string;
  height?: number;
  showGradient?: boolean;
}) {
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
            fill={showGradient ? `url(#${gradientId})` : 'none'}
            isAnimationActive={true}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MetricTrendChart({
  data,
  dataKey = 'value',
  labelKey = 'label',
  title,
  color,
  height = 120,
  showTooltip = true,
  showGradient = true,
  className,
  isLoading = false,
  formatValue: customFormatValue,
}: MetricTrendChartProps) {
  const resolvedColor = color || defaultColors[0];
  const chartData = data.map((item) => ({
    ...item,
    [dataKey]: item.value,
    [labelKey]: item.label,
  }));

  if (isLoading) {
    return (
      <Card className={cn('overflow-hidden', className)}>
        {title && (
          <CardHeader className="pb-2">
            <Skeleton className="h-5 w-32" />
          </CardHeader>
        )}
        <CardContent className="pt-0">
          <Skeleton className="h-28 w-full" />
        </CardContent>
      </Card>
    );
  }

  const chartContent = (
    <CardContent className="pt-4">
      <div className="h-full">
        {showTooltip ? (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <defs>
                <linearGradient id={`gradient-${title?.replace(/\s/g, '-') || 'chart'}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={resolvedColor} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={resolvedColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={resolvedColor}
                strokeWidth={2}
                dot={false}
                fill={showGradient ? `url(#gradient-${title?.replace(/\s/g, '-') || 'chart'})` : 'none'}
                isAnimationActive={true}
                animationDuration={1000}
              />
              <Tooltip
                content={<CustomTooltip formatValue={customFormatValue} />}
                cursor={{ stroke: resolvedColor, strokeDasharray: '3 3' }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <SparklineChart
            data={chartData}
            dataKey={dataKey}
            color={resolvedColor}
            height={height}
            showGradient={showGradient}
          />
        )}
      </div>
    </CardContent>
  );

  if (title) {
    return (
      <Card className={cn('overflow-hidden', className)}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </CardHeader>
        {chartContent}
      </Card>
    );
  }

  return (
    <div className={cn('', className)}>
      {chartContent}
    </div>
  );
}

export function Sparkline({
  data,
  dataKey = 'value',
  color,
  height = 40,
}: {
  data: number[];
  dataKey?: string;
  color?: string;
  height?: number;
}) {
  const resolvedColor = color || defaultColors[0];
  const chartData = data.map((value, index) => ({ index, [dataKey]: value }));

  return (
    <SparklineChart
      data={chartData}
      dataKey={dataKey}
      color={resolvedColor}
      height={height}
      showGradient={false}
    />
  );
}

export default MetricTrendChart;
