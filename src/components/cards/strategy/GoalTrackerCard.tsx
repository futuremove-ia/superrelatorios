import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Target,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface GoalTrackerCardProps {
  goal: {
    id: string;
    code: string;
    title: string;
    description?: string;
    targetType: 'increase' | 'decrease' | 'maintain';
    progress: number;
    suggestedTimeframeDays: number;
    startedAt: string;
    achievedAt?: string;
    history: {
      date: string;
      progress: number;
    }[];
  };
  variant?: 'default' | 'compact';
  onUpdateProgress?: () => void;
  onViewHistory?: () => void;
  onRestart?: () => void;
}

const getTargetTypeConfig = (type: string) => {
  switch (type) {
    case 'increase':
      return { icon: TrendingUp, color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', label: 'Aumentar' };
    case 'decrease':
      return { icon: TrendingDown, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', label: 'Reduzir' };
    case 'maintain':
      return { icon: Minus, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', label: 'Manter' };
    default:
      return { icon: Target, color: 'text-gray-600', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', label: type };
  }
};

export function GoalTrackerCard({
  goal,
  variant = 'default',
  onUpdateProgress,
  onViewHistory,
  onRestart,
}: GoalTrackerCardProps) {
  const typeConfig = getTargetTypeConfig(goal.targetType);
  const TypeIcon = typeConfig.icon;
  const isCompleted = goal.progress >= 100;
  const daysElapsed = Math.floor((new Date().getTime() - new Date(goal.startedAt).getTime()) / (1000 * 60 * 60 * 24));
  const daysRemaining = Math.max(0, goal.suggestedTimeframeDays - daysElapsed);
  const trend = goal.history.length > 1 ? goal.history[goal.history.length - 1].progress - goal.history[0].progress : 0;

  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden', isCompleted ? 'border-emerald-300' : typeConfig.borderColor)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', isCompleted ? 'bg-emerald-50' : typeConfig.bgColor)}>
              {isCompleted ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              ) : (
                <TypeIcon className={cn('h-4 w-4', typeConfig.color)} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn('font-medium truncate', isCompleted && 'line-through text-muted-foreground')}>
                {goal.title}
              </p>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <span className={cn('font-medium', isCompleted ? 'text-emerald-600' : goal.progress >= 75 ? 'text-blue-600' : goal.progress >= 50 ? 'text-yellow-600' : 'text-orange-600')}>
                  {goal.progress}%
                </span>
                {!isCompleted && daysRemaining <= 7 && daysRemaining > 0 && (
                  <span className="text-red-600">• {daysRemaining}d restantes</span>
                )}
              </div>
            </div>
          </div>
          <Progress 
            value={goal.progress} 
            className={cn(
              'h-1.5 mt-3',
              isCompleted ? '[&>div]:bg-emerald-500' : 
              goal.progress >= 75 ? '[&>div]:bg-blue-500' : 
              goal.progress >= 50 ? '[&>div]:bg-yellow-500' : 
              '[&>div]:bg-orange-500'
            )} 
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden', isCompleted ? 'border-emerald-300' : typeConfig.borderColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', isCompleted ? 'bg-emerald-50' : typeConfig.bgColor)}>
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : (
                <TypeIcon className={cn('h-5 w-5', typeConfig.color)} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className={cn('text-base', isCompleted && 'line-through text-muted-foreground')}>
                {goal.title}
              </CardTitle>
              {goal.description && (
                <p className="text-sm text-muted-foreground mt-0.5">{goal.description}</p>
              )}
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className={cn(
            'px-3 py-1.5 rounded-lg text-center shrink-0',
            isCompleted ? 'bg-emerald-100' : goal.progress >= 75 ? 'bg-blue-100' : goal.progress >= 50 ? 'bg-yellow-100' : 'bg-orange-100'
          )}>
            <span className={cn(
              'text-2xl font-bold',
              isCompleted ? 'text-emerald-700' : goal.progress >= 75 ? 'text-blue-700' : goal.progress >= 50 ? 'text-yellow-700' : 'text-orange-700'
            )}>
              {goal.progress}%
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progresso</span>
            <span className={cn(
              'font-medium',
              isCompleted ? 'text-emerald-600' : goal.progress >= 75 ? 'text-blue-600' : goal.progress >= 50 ? 'text-yellow-600' : 'text-orange-600'
            )}>
              {isCompleted ? 'Concluído' : 'Em andamento'}
            </span>
          </div>
          <Progress 
            value={goal.progress} 
            className={cn(
              'h-2',
              isCompleted ? '[&>div]:bg-emerald-500' : 
              goal.progress >= 75 ? '[&>div]:bg-blue-500' : 
              goal.progress >= 50 ? '[&>div]:bg-yellow-500' : 
              '[&>div]:bg-orange-500'
            )} 
          />
        </div>

        {/* Timeline - Inline */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Início: {new Date(goal.startedAt).toLocaleDateString('pt-BR')}
          </span>
          {goal.achievedAt && (
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 className="h-4 w-4" />
              Concluído: {new Date(goal.achievedAt).toLocaleDateString('pt-BR')}
            </span>
          )}
        </div>

        {/* Time Remaining - Simplified */}
        {!isCompleted && (
          <div className={cn(
            'flex items-center gap-2 text-sm rounded-lg py-1.5 px-2',
            daysRemaining <= 7 ? 'bg-red-50 text-red-700' : 'text-muted-foreground'
          )}>
            <Clock className={cn('h-4 w-4', daysRemaining <= 7 ? 'text-red-600' : 'text-muted-foreground')} />
            <span className="font-medium">
              {daysRemaining === 0 
                ? 'Prazo encerrado hoje' 
                : `${daysRemaining} dia(s) de ${goal.suggestedTimeframeDays}`
              }
            </span>
          </div>
        )}

        {/* Trend - Compact */}
        {goal.history.length > 1 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Tendência: </span>
            <span className={cn(
              'font-medium',
              trend > 0 ? 'text-emerald-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'
            )}>
              {trend > 0 ? '+' : ''}{trend.toFixed(1)}% desde início
            </span>
          </div>
        )}

        {/* Code - subtle */}
        <div className="pt-1">
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
            {goal.code}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <Button variant="ghost" size="sm" onClick={onViewHistory} className="h-8">
          <TrendingUp className="h-4 w-4 mr-2" />
          Histórico
        </Button>
        {isCompleted ? (
          <Button variant="outline" size="sm" onClick={onRestart} className="h-8">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reiniciar
          </Button>
        ) : (
          <Button size="sm" onClick={onUpdateProgress} className="h-8">
            Atualizar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default GoalTrackerCard;
