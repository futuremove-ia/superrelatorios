import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  AlertTriangle,
  Link2,
  Sparkles,
  Lightbulb,
  LineChart,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface InsightCardProps {
  insight: {
    id: string;
    type: 'trend' | 'anomaly' | 'correlation' | 'prediction' | 'recommendation';
    title: string;
    description: string;
    confidence: number;
    supportingData: {
      metric: string;
      value: number;
      change: number;
    }[];
    chartType?: 'line' | 'bar' | 'comparison';
    chartData?: any;
    generatedAt: string;
    isNew?: boolean;
  };
  variant?: 'default' | 'compact';
  onExplore?: () => void;
  onDismiss?: () => void;
}

const getTypeConfig = (type: string) => {
  switch (type) {
    case 'trend':
      return { icon: TrendingUp, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', label: 'Tendência' };
    case 'anomaly':
      return { icon: AlertTriangle, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', label: 'Anomalia' };
    case 'correlation':
      return { icon: Link2, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200', label: 'Correlação' };
    case 'prediction':
      return { icon: LineChart, color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', label: 'Previsão' };
    case 'recommendation':
      return { icon: Lightbulb, color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', label: 'Recomendação' };
    default:
      return { icon: Sparkles, color: 'text-gray-600', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', label: 'Insight' };
  }
};

export function InsightCard({
  insight,
  variant = 'default',
  onExplore,
  onDismiss,
}: InsightCardProps) {
  const typeConfig = getTypeConfig(insight.type);
  const TypeIcon = typeConfig.icon;

  // Compact variant
  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden', typeConfig.borderColor, insight.isNew && 'ring-1 ring-primary/20')}>
        {insight.isNew && (
          <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-0.5 text-center">
            NOVO
          </div>
        )}
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', typeConfig.bgColor)}>
              <TypeIcon className={cn('h-4 w-4', typeConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{insight.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <Badge variant="outline" className={cn('text-xs px-1', typeConfig.color)}>
                  {typeConfig.label}
                </Badge>
                <span className="text-xs text-muted-foreground">{insight.confidence}% confiança</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden', typeConfig.borderColor, insight.isNew && 'ring-1 ring-primary/20')}>
      {insight.isNew && (
        <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 text-center">
          NOVO INSIGHT
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex items-start gap-3">
          <div className={cn('p-2.5 rounded-xl', typeConfig.bgColor)}>
            <TypeIcon className={cn('h-5 w-5', typeConfig.color)} />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base">{insight.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{insight.description}</p>
          </div>
          
          {/* Simplified confidence */}
          <div className={cn(
            'px-2 py-1 rounded-lg text-center shrink-0',
            insight.confidence >= 80 ? 'bg-emerald-100 text-emerald-700' :
            insight.confidence >= 60 ? 'bg-yellow-100 text-yellow-700' :
            'bg-orange-100 text-orange-700'
          )}>
            <span className="text-sm font-bold">{insight.confidence}%</span>
            <p className="text-xs opacity-75">confiança</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Supporting Data - Simplified inline */}
        {insight.supportingData.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {insight.supportingData.map((data, index) => (
              <div key={index} className="bg-muted rounded-lg px-3 py-1.5">
                <p className="text-xs text-muted-foreground">{data.metric}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-semibold">{data.value.toLocaleString('pt-BR')}</span>
                  <span className={cn(
                    'text-xs',
                    data.change > 0 ? 'text-emerald-600' : data.change < 0 ? 'text-red-600' : 'text-gray-600'
                  )}>
                    {data.change > 0 ? '+' : ''}{data.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Progress indicator for confidence */}
        <div className="space-y-1">
          <Progress 
            value={insight.confidence} 
            className={cn(
              'h-1.5',
              insight.confidence >= 80 ? '[&>div]:bg-emerald-500' :
              insight.confidence >= 60 ? '[&>div]:bg-yellow-500' :
              '[&>div]:bg-orange-500'
            )} 
          />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <span className="text-xs text-muted-foreground">
          {new Date(insight.generatedAt).toLocaleDateString('pt-BR')}
        </span>
        <div className="flex gap-2">
          {onDismiss && (
            <Button variant="ghost" size="sm" onClick={onDismiss} className="h-8">
              Ignorar
            </Button>
          )}
          <Button size="sm" onClick={onExplore} className="h-8">
            Explorar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default InsightCard;
