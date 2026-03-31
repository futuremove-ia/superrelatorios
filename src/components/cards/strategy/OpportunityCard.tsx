import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Zap,
  Clock,
  Target,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface OpportunityCardProps {
  opportunity: {
    id: string;
    title: string;
    description: string;
    category: 'revenue' | 'cost' | 'efficiency' | 'growth';
    impact: {
      financial?: number;
      percentage?: number;
      metric: string;
    };
    effort: 'low' | 'medium' | 'high';
    confidence: number;
    quickWin: boolean;
    relatedActions: string[];
    timeframe: string;
  };
  variant?: 'compact' | 'default';
  onExplore?: () => void;
  onCreateAction?: () => void;
}

const getCategoryConfig = (category: string) => {
  switch (category) {
    case 'revenue':
      return { icon: DollarSign, color: 'bg-emerald-500', label: 'Receita', borderColor: 'border-emerald-300' };
    case 'cost':
      return { icon: TrendingDown, color: 'bg-blue-500', label: 'Custo', borderColor: 'border-blue-300' };
    case 'efficiency':
      return { icon: Zap, color: 'bg-orange-500', label: 'Eficiência', borderColor: 'border-orange-300' };
    case 'growth':
      return { icon: TrendingUp, color: 'bg-purple-500', label: 'Crescimento', borderColor: 'border-purple-300' };
    default:
      return { icon: Target, color: 'bg-gray-500', label: 'Oportunidade', borderColor: 'border-gray-300' };
  }
};

const getEffortConfig = (effort: string) => {
  switch (effort) {
    case 'low': return { color: 'text-emerald-600', bgColor: 'bg-emerald-100', label: 'Baixo', value: 33 };
    case 'medium': return { color: 'text-yellow-600', bgColor: 'bg-yellow-100', label: 'Médio', value: 66 };
    case 'high': return { color: 'text-red-600', bgColor: 'bg-red-100', label: 'Alto', value: 100 };
    default: return { color: 'text-gray-600', bgColor: 'bg-gray-100', label: effort, value: 50 };
  }
};

export function OpportunityCard({
  opportunity,
  variant = 'default',
  onExplore,
  onCreateAction,
}: OpportunityCardProps) {
  const categoryConfig = getCategoryConfig(opportunity.category);
  const effortConfig = getEffortConfig(opportunity.effort);
  const CategoryIcon = categoryConfig.icon;

  // Compact variant for lists
  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', categoryConfig.borderColor)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', categoryConfig.color.replace('bg-', 'bg-opacity-20 bg-'))}>
              <CategoryIcon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium truncate">{opportunity.title}</p>
                {opportunity.quickWin && (
                  <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                    <Zap className="h-3 w-3 mr-1" />
                    Quick Win
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {opportunity.impact.financial 
                  ? `R$ ${opportunity.impact.financial.toLocaleString('pt-BR')}/ano`
                  : `+${opportunity.impact.percentage}% em ${opportunity.impact.metric}`
                }
              </p>
            </div>
            <Button size="sm" onClick={onCreateAction}>
              Criar Ação
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4', categoryConfig.borderColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', categoryConfig.color)}>
              <CategoryIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{opportunity.title}</CardTitle>
                {opportunity.quickWin && (
                  <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                    <Zap className="h-3 w-3 mr-1" />
                    Quick Win
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{opportunity.description}</p>

        {/* Impact Display */}
        {opportunity.impact.financial ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <p className="text-xs text-emerald-700 font-medium">Impacto Financeiro Estimado</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-700">
                R$ {opportunity.impact.financial.toLocaleString('pt-BR')}
              </span>
              <span className="text-sm text-emerald-600">/ano</span>
            </div>
          </div>
        ) : opportunity.impact.percentage && (
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-emerald-600">+{opportunity.impact.percentage}%</span>
            <span className="text-sm text-muted-foreground">em {opportunity.impact.metric}</span>
          </div>
        )}

        {/* Effort & Confidence - Inline */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Esforço: <strong className={effortConfig.color}>{effortConfig.label}</strong>
            </span>
            <Progress value={effortConfig.value} className="h-1.5 mt-1" />
          </div>
          <div>
            <span className="text-muted-foreground">
              Confiança: <strong className={opportunity.confidence >= 80 ? 'text-emerald-600' : opportunity.confidence >= 60 ? 'text-yellow-600' : 'text-orange-600'}>{opportunity.confidence}%</strong>
            </span>
            <Progress value={opportunity.confidence} className="h-1.5 mt-1" />
          </div>
        </div>

        {/* Timeframe */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{opportunity.timeframe}</span>
        </div>

        {/* Related Actions - Simplified */}
        {opportunity.relatedActions.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2 border-t">
            {opportunity.relatedActions.slice(0, 3).map((action, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                {action}
              </Badge>
            ))}
            {opportunity.relatedActions.length > 3 && (
              <Badge variant="outline" className="text-xs">+{opportunity.relatedActions.length - 3}</Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-end gap-2 border-t pt-3">
        <Button variant="ghost" size="sm" onClick={onExplore} className="h-8">
          Explorar
        </Button>
        <Button size="sm" onClick={onCreateAction} className="h-8">
          Criar Ação
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default OpportunityCard;
