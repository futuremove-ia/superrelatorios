import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle2, 
  Circle,
  Clock,
  AlertTriangle,
  AlertCircle,
  User,
  Zap,
  Target,
  Calendar,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionItemCardProps {
  action: {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'completed' | 'blocked';
    priority: 'critical' | 'high' | 'medium' | 'low';
    dueDate?: string;
    assignedTo?: {
      name: string;
      avatar?: string;
    };
    estimatedEffort: number;
    actualEffort?: number;
    quickWin: boolean;
    dependencies: string[];
    relatedPriority: string;
    impact: {
      metric: string;
      expected: number;
      achieved?: number;
    };
  };
  variant?: 'default' | 'compact';
  onToggle?: () => void;
  onView?: () => void;
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'completed':
      return { icon: CheckCircle2, color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', label: 'Concluído' };
    case 'in_progress':
      return { icon: Clock, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', label: 'Em Andamento' };
    case 'blocked':
      return { icon: AlertTriangle, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', label: 'Bloqueado' };
    default:
      return { icon: Circle, color: 'text-gray-400', bgColor: 'bg-gray-50', borderColor: 'border-gray-200', label: 'Pendente' };
  }
};

const getPriorityConfig = (priority: string) => {
  switch (priority) {
    case 'critical': return 'border-l-red-500';
    case 'high': return 'border-l-orange-500';
    case 'medium': return 'border-l-yellow-500';
    default: return 'border-l-blue-500';
  }
};

const isOverdue = (dueDate: string) => new Date(dueDate) < new Date();

export function ActionItemCard({
  action,
  variant = 'default',
  onToggle,
  onView,
}: ActionItemCardProps) {
  const statusConfig = getStatusConfig(action.status);
  const priorityBorder = getPriorityConfig(action.priority);
  const overdue = action.dueDate && isOverdue(action.dueDate) && action.status !== 'completed';
  const progress = action.actualEffort ? (action.actualEffort / action.estimatedEffort) * 100 : 0;

  // Compact variant
  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', priorityBorder)}>
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <button onClick={onToggle} className="flex-shrink-0">
              {action.status === 'completed' ? (
                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
              ) : (
                <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/30 hover:border-primary transition-colors" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className={cn(
                  'text-sm font-medium truncate',
                  action.status === 'completed' && 'line-through text-muted-foreground'
                )}>
                  {action.title}
                </p>
                {action.quickWin && (
                  <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200 shrink-0">
                    <Zap className="h-3 w-3 mr-1" />
                    Quick Win
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <Badge variant="outline" className={cn('text-xs px-1', statusConfig.color)}>
                  {statusConfig.label}
                </Badge>
                {action.dueDate && (
                  <span className={cn(overdue && 'text-red-600 font-medium')}>
                    {overdue ? 'Atrasado: ' : ''}
                    {new Date(action.dueDate).toLocaleDateString('pt-BR')}
                  </span>
                )}
              </div>
            </div>

            {action.assignedTo && (
              <Avatar className="h-6 w-6 flex-shrink-0">
                <AvatarImage src={action.assignedTo.avatar} />
                <AvatarFallback className="text-xs">{action.assignedTo.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4 transition-all hover:shadow-md', priorityBorder)}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <button onClick={onToggle} className="flex-shrink-0 mt-0.5">
            {action.status === 'completed' ? (
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
            ) : (
              <div className={cn(
                'h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all',
                action.status === 'blocked' ? 'border-red-300 bg-red-50' : 'border-muted-foreground/30 hover:border-primary hover:bg-primary/5'
              )}>
                {action.status === 'blocked' && <AlertCircle className="h-4 w-4 text-red-500" />}
              </div>
            )}
          </button>

          <div className="flex-1 min-w-0 space-y-2">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className={cn('font-semibold', action.status === 'completed' && 'line-through text-muted-foreground')}>
                  {action.title}
                </h4>
                {action.quickWin && (
                  <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">
                    <Zap className="h-3 w-3 mr-1" />
                    Quick Win
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{action.description}</p>
            </div>

            {/* Meta - Inline compact */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className={cn('flex items-center gap-1', statusConfig.color)}>
                <statusConfig.icon className="h-4 w-4" />
                {statusConfig.label}
              </span>
              
              {action.dueDate && (
                <span className={cn('flex items-center gap-1', overdue && 'text-red-600 font-medium')}>
                  <Calendar className="h-4 w-4" />
                  {overdue ? 'Atrasado: ' : ''}
                  {new Date(action.dueDate).toLocaleDateString('pt-BR')}
                </span>
              )}
              
              {action.assignedTo && (
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {action.assignedTo.name}
                </span>
              )}
              
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {action.actualEffort ? `${action.actualEffort}h / ${action.estimatedEffort}h` : `${action.estimatedEffort}h`}
              </span>
            </div>

            {/* Progress */}
            {action.status === 'in_progress' && action.actualEffort && (
              <div className="space-y-1">
                <Progress value={progress} className="h-1.5" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Progresso</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            )}

            {/* Impact */}
            <div className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Impacto em <strong>{action.impact.metric}</strong>:</span>
              <span className="font-semibold text-emerald-600">+{action.impact.expected}%</span>
              {action.impact.achieved !== undefined && (
                <>
                  <span className="text-muted-foreground">→</span>
                  <span className={cn('font-semibold', action.impact.achieved >= action.impact.expected ? 'text-emerald-600' : 'text-yellow-600')}>
                    {action.impact.achieved >= 0 ? '+' : ''}{action.impact.achieved}%
                  </span>
                </>
              )}
            </div>

            {/* Dependencies - subtle */}
            {action.dependencies.length > 0 && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                <AlertTriangle className="h-3 w-3" />
                <span>Depende de: {action.dependencies.join(', ')}</span>
              </div>
            )}
          </div>

          <Button variant="ghost" size="icon" onClick={onView} className="shrink-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ActionItemCard;
