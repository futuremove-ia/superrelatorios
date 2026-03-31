import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ListChecks,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  Target,
  Calendar,
  ArrowRight,
  Archive,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionPlanSummaryCardProps {
  plan: {
    id: string;
    title: string;
    description: string;
    totalActions: number;
    completedActions: number;
    inProgressActions: number;
    blockedActions: number;
    totalEstimatedImpact: number;
    achievedImpact?: number;
    status: 'active' | 'completed' | 'archived';
    lastActivity: string;
    startDate: string;
    endDate?: string;
  };
  variant?: 'default' | 'compact';
  onViewDetails?: () => void;
  onArchive?: () => void;
  onContinue?: () => void;
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'active':
      return { color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', icon: Zap, label: 'Ativo' };
    case 'completed':
      return { color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', icon: CheckCircle2, label: 'Concluído' };
    case 'archived':
      return { color: 'text-gray-600', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', icon: Archive, label: 'Arquivado' };
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', icon: ListChecks, label: status };
  }
};

export function ActionPlanSummaryCard({
  plan,
  variant = 'default',
  onViewDetails,
  onArchive,
  onContinue,
}: ActionPlanSummaryCardProps) {
  const statusConfig = getStatusConfig(plan.status);
  const StatusIcon = statusConfig.icon;
  const completionRate = Math.round((plan.completedActions / plan.totalActions) * 100);

  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', statusConfig.borderColor)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', statusConfig.bgColor)}>
              <StatusIcon className={cn('h-5 w-5', statusConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{plan.title}</p>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <span>{plan.completedActions}/{plan.totalActions} ações</span>
                <span className={cn(
                  'font-medium',
                  completionRate >= 80 ? 'text-emerald-600' : completionRate >= 50 ? 'text-yellow-600' : 'text-orange-600'
                )}>
                  {completionRate}%
                </span>
              </div>
            </div>
          </div>
          <Progress value={completionRate} className="h-1.5 mt-3" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4', statusConfig.borderColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', statusConfig.bgColor)}>
              <ListChecks className={cn('h-5 w-5', statusConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                <Badge variant="outline" className={cn('text-xs', statusConfig.color)}>
                  {statusConfig.label}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>
          </div>
          
          {/* Completion Rate */}
          <div className={cn(
            'px-3 py-1.5 rounded-lg text-center shrink-0',
            completionRate >= 80 ? 'bg-emerald-100' : completionRate >= 50 ? 'bg-yellow-100' : 'bg-orange-100'
          )}>
            <span className={cn(
              'text-2xl font-bold',
              completionRate >= 80 ? 'text-emerald-700' : completionRate >= 50 ? 'text-yellow-700' : 'text-orange-700'
            )}>
              {completionRate}%
            </span>
            <p className="text-xs text-muted-foreground">concluído</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progresso</span>
            <span className="font-medium">{plan.completedActions} de {plan.totalActions}</span>
          </div>
          <Progress 
            value={completionRate} 
            className={cn(
              'h-2',
              completionRate >= 80 ? '[&>div]:bg-emerald-500' : 
              completionRate >= 50 ? '[&>div]:bg-yellow-500' : 
              '[&>div]:bg-orange-500'
            )} 
          />
        </div>

        {/* Stats - Inline horizontal */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span><strong>{plan.completedActions}</strong> concluídas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-blue-600" />
            <span><strong>{plan.inProgressActions}</strong> em andamento</span>
          </div>
          {plan.blockedActions > 0 && (
            <div className="flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span><strong>{plan.blockedActions}</strong> bloqueadas</span>
            </div>
          )}
        </div>

        {/* Impact - Simplified */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Target className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Impacto Estimado</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-emerald-700">
              R$ {plan.totalEstimatedImpact.toLocaleString('pt-BR')}
            </span>
            <span className="text-sm text-muted-foreground">/ ano</span>
          </div>
          {plan.achievedImpact && (
            <div className="mt-2 pt-2 border-t border-emerald-200 flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">Realizado:</span>
              <span className={cn(
                'font-semibold',
                plan.achievedImpact >= plan.totalEstimatedImpact ? 'text-emerald-600' : 'text-yellow-600'
              )}>
                R$ {plan.achievedImpact.toLocaleString('pt-BR')}
              </span>
              <span className="text-xs text-muted-foreground">
                ({Math.round((plan.achievedImpact / plan.totalEstimatedImpact) * 100)}%)
              </span>
            </div>
          )}
        </div>

        {/* Timeline - compact */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(plan.startDate).toLocaleDateString('pt-BR')}
            {plan.endDate && ` → ${new Date(plan.endDate).toLocaleDateString('pt-BR')}`}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <Button variant="ghost" size="sm" onClick={onViewDetails} className="h-8">
          <TrendingUp className="h-4 w-4 mr-2" />
          Detalhes
        </Button>
        <div className="flex gap-2">
          {plan.status === 'active' && (
            <Button variant="outline" size="sm" onClick={onArchive} className="h-8">
              Arquivar
            </Button>
          )}
          <Button size="sm" onClick={onContinue} className="h-8">
            {plan.status === 'completed' ? 'Ver Resultados' : 'Continuar'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ActionPlanSummaryCard;
