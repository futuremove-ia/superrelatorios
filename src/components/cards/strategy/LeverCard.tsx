import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Zap,
  Target,
  TrendingUp,
  Clock,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Layers,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LeverCardProps {
  lever: {
    id: string;
    code: string;
    title: string;
    description?: string;
    category: string;
    impactLevel: 'high' | 'medium' | 'low';
    complexity: 'high' | 'medium' | 'low';
    typicalTimeframeDays: number;
    targetKPI?: {
      code: string;
      name: string;
      expectedImprovement: number;
    };
    actions: {
      id: string;
      title: string;
      priorityScore: number;
    }[];
    isActive: boolean;
  };
  variant?: 'default' | 'compact';
  onViewActions?: () => void;
  onApply?: () => void;
}

const getCategoryConfig = (category: string) => {
  switch (category.toLowerCase()) {
    case 'financeiro':
      return { label: 'Financeiro', color: 'bg-emerald-500', icon: BarChart3 };
    case 'vendas':
      return { label: 'Vendas', color: 'bg-blue-500', icon: TrendingUp };
    case 'operacoes':
      return { label: 'Operações', color: 'bg-orange-500', icon: Zap };
    case 'pessoas':
      return { label: 'Pessoas', color: 'bg-pink-500', icon: Target };
    case 'relacionamento':
      return { label: 'Relacionamento', color: 'bg-purple-500', icon: CheckCircle2 };
    case 'marketing':
      return { label: 'Marketing', color: 'bg-indigo-500', icon: Lightbulb };
    default:
      return { label: category, color: 'bg-gray-500', icon: Layers };
  }
};

const getImpactConfig = (impact: string) => {
  switch (impact) {
    case 'high': return { color: 'text-emerald-600', bgColor: 'bg-emerald-100', label: 'Alto', value: 100 };
    case 'medium': return { color: 'text-yellow-600', bgColor: 'bg-yellow-100', label: 'Médio', value: 66 };
    case 'low': return { color: 'text-blue-600', bgColor: 'bg-blue-100', label: 'Baixo', value: 33 };
    default: return { color: 'text-gray-600', bgColor: 'bg-gray-100', label: impact, value: 50 };
  }
};

const getComplexityConfig = (complexity: string) => {
  switch (complexity) {
    case 'high': return { color: 'text-red-600', label: 'Alta' };
    case 'medium': return { color: 'text-yellow-600', label: 'Média' };
    case 'low': return { color: 'text-emerald-600', label: 'Baixa' };
    default: return { color: 'text-gray-600', label: complexity };
  }
};

export function LeverCard({
  lever,
  variant = 'default',
  onViewActions,
  onApply,
}: LeverCardProps) {
  const categoryConfig = getCategoryConfig(lever.category);
  const impactConfig = getImpactConfig(lever.impactLevel);
  const complexityConfig = getComplexityConfig(lever.complexity);
  const CategoryIcon = categoryConfig.icon;
  const timeframeWeeks = Math.ceil(lever.typicalTimeframeDays / 7);

  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', categoryConfig.color.replace('bg-', 'bg-opacity-20 bg-'))}>
              <CategoryIcon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium truncate">{lever.title}</p>
                {!lever.isActive && (
                  <Badge variant="outline" className="text-xs text-muted-foreground">Inativo</Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <span className={impactConfig.color}>{impactConfig.label} Impacto</span>
                <span>•</span>
                <span className={complexityConfig.color}>{complexityConfig.label} Complexidade</span>
              </div>
            </div>
            {lever.targetKPI && (
              <Badge className="shrink-0 bg-emerald-100 text-emerald-700 border-emerald-200">
                +{lever.targetKPI.expectedImprovement}%
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', categoryConfig.color)}>
              <CategoryIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{lever.title}</CardTitle>
                {!lever.isActive && (
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    Inativo
                  </Badge>
                )}
              </div>
              {lever.description && (
                <p className="text-sm text-muted-foreground mt-0.5">{lever.description}</p>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Impact & Complexity - Inline */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <TrendingUp className={cn('h-4 w-4', impactConfig.color)} />
            <span className="text-muted-foreground">Impacto:</span>
            <span className={cn('font-medium', impactConfig.color)}>{impactConfig.label}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <AlertCircle className={cn('h-4 w-4', complexityConfig.color)} />
            <span className="text-muted-foreground">Complexidade:</span>
            <span className={cn('font-medium', complexityConfig.color)}>{complexityConfig.label}</span>
          </div>
        </div>

        {/* Impact Progress */}
        <Progress value={impactConfig.value} className={cn('h-1.5', impactConfig.value >= 80 ? '[&>div]:bg-emerald-500' : impactConfig.value >= 50 ? '[&>div]:bg-yellow-500' : '[&>div]:bg-blue-500')} />

        {/* Timeframe */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>~{timeframeWeeks} semana(s) para implementar</span>
        </div>

        {/* Target KPI - Simplified */}
        {lever.targetKPI && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-emerald-700">{lever.targetKPI.name}</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-xs">
                +{lever.targetKPI.expectedImprovement}%
              </Badge>
            </div>
          </div>
        )}

        {/* Actions Preview - Compact */}
        {lever.actions.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">{lever.actions.length} ações incluídas</p>
            <div className="flex flex-wrap gap-1">
              {lever.actions.slice(0, 3).map((action, index) => (
                <Badge key={action.id} variant="secondary" className="text-xs font-normal">
                  {action.title}
                </Badge>
              ))}
              {lever.actions.length > 3 && (
                <Badge variant="outline" className="text-xs cursor-pointer" onClick={onViewActions}>
                  +{lever.actions.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Code - subtle */}
        <div className="pt-1">
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
            {lever.code}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <Button variant="ghost" size="sm" onClick={onViewActions} className="h-8">
          <Layers className="h-4 w-4 mr-2" />
          {lever.actions.length} Ações
        </Button>
        <Button size="sm" onClick={onApply} disabled={!lever.isActive} className="h-8">
          Aplicar
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LeverCard;
