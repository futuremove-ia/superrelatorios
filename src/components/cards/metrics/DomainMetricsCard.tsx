import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp,
  TrendingDown,
  Target,
  Eye,
  LucideIcon,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DomainMetricsCardProps {
  domain: {
    name: string;
    icon: LucideIcon;
    color: string;
    metrics: number;
    healthScore: number;
    criticalCount: number;
    trend: number;
    status: 'on-track' | 'at-risk' | 'off-track';
  };
  onViewDetails?: () => void;
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'on-track':
      return { color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', progressColor: 'bg-emerald-500', label: 'No Caminho' };
    case 'at-risk':
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', progressColor: 'bg-yellow-500', label: 'Em Risco' };
    case 'off-track':
      return { color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', progressColor: 'bg-red-500', label: 'Fora' };
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', progressColor: 'bg-gray-500', label: status };
  }
};

export function DomainMetricsCard({ domain, onViewDetails }: DomainMetricsCardProps) {
  const DomainIcon = domain.icon;
  const statusConfig = getStatusConfig(domain.status);
  const TrendIcon = domain.trend > 0 ? TrendingUp : TrendingDown;
  const trendColor = domain.trend > 0 ? 'text-emerald-600' : 'text-red-600';

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', domain.color)}>
              <DomainIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg">{domain.name}</CardTitle>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              <TrendIcon className={cn('h-4 w-4', trendColor)} />
              <span className={cn('text-sm font-bold', trendColor)}>
                {domain.trend > 0 ? '+' : ''}{domain.trend}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground">vs. anterior</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Health Score - Simplified */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Score de Saúde</span>
            <span className={cn(
              'text-2xl font-bold',
              domain.healthScore >= 80 ? 'text-emerald-600' : domain.healthScore >= 60 ? 'text-yellow-600' : 'text-red-600'
            )}>
              {domain.healthScore}
            </span>
          </div>
          <Progress 
            value={domain.healthScore} 
            className={cn('h-2', `[&>div]:${statusConfig.progressColor}`)} 
          />
        </div>

        {/* Stats - Inline */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{domain.metrics} métricas</span>
          </div>
          <div className={cn(
            'flex items-center gap-2 px-2 py-1 rounded-lg',
            domain.criticalCount > 0 ? 'bg-red-50' : 'bg-emerald-50'
          )}>
            <Target className={cn(
              'h-4 w-4',
              domain.criticalCount > 0 ? 'text-red-500' : 'text-emerald-500'
            )} />
            <span className={cn(
              'font-medium',
              domain.criticalCount > 0 ? 'text-red-600' : 'text-emerald-600'
            )}>
              {domain.criticalCount} críticas
            </span>
          </div>
        </div>

        {/* Button */}
        <Button variant="outline" size="sm" className="w-full" onClick={onViewDetails}>
          <Eye className="h-4 w-4 mr-2" />
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
}

export default DomainMetricsCard;
