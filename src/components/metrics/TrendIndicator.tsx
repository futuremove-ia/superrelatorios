import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface TrendIndicatorProps {
  trend: 'up' | 'down' | 'stable';
  value: number;
  compact?: boolean;
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({ 
  trend, 
  value, 
  compact = false 
}) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case 'stable':
        return <Minus className="w-4 h-4 text-gray-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      case 'stable':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatPercentage = (value: number) => {
    if (value === 0) return '0%';
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        {getTrendIcon()}
        <span className={`text-xs font-medium ${getTrendColor()}`}>
          {formatPercentage(value)}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center gap-2">
        {getTrendIcon()}
        <span className={`font-semibold ${getTrendColor()}`}>
          {formatPercentage(value)}
        </span>
      </div>
      <span className="text-xs text-gray-500">
        vs. período anterior
      </span>
    </div>
  );
};
