import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Target, 
  Zap,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  X,
  TrendingUp,
  Clock,
  BarChart3,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriorityCardProps {
  priority: {
    id: string;
    title: string;
    explanation: string;
    level: 'high' | 'medium' | 'low';
    score: {
      calculatedValue: number;
      impact: number;
      urgency: number;
      effort: number;
      confidence: number;
    };
    status: 'suggested' | 'validated' | 'dismissed';
    relatedDiagnostic?: string;
    suggestedActions: string[];
  };
  variant?: 'default' | 'compact';
  onValidate?: () => void;
  onDismiss?: () => void;
  onAction?: () => void;
  onViewDetails?: () => void;
}

const getLevelConfig = (level: string) => {
  switch (level) {
    case 'high':
      return {
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-300',
        icon: AlertTriangle,
        label: 'Alta',
      };
    case 'medium':
      return {
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-300',
        icon: Zap,
        label: 'Média',
      };
    case 'low':
      return {
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        icon: Target,
        label: 'Baixa',
      };
    default:
      return {
        color: 'text-gray-600',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-300',
        icon: Target,
        label: level,
      };
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'suggested':
      return Lightbulb;
    case 'validated':
      return CheckCircle2;
    case 'dismissed':
      return X;
    default:
      return Target;
  }
};

function ScoreBadge({ score }: { score: number }) {
  const colorClass = score >= 80 ? 'bg-red-100 text-red-700 border-red-200' :
                     score >= 60 ? 'bg-orange-100 text-orange-700 border-orange-200' :
                     score >= 40 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                     'bg-blue-100 text-blue-700 border-blue-200';
  
  return (
    <div className={cn('flex items-center gap-1.5 px-2 py-1 rounded-lg border', colorClass)}>
      <span className="text-lg font-bold leading-none">{score.toFixed(0)}</span>
      <span className="text-xs opacity-75">pts</span>
    </div>
  );
}

export function PriorityCard({
  priority,
  variant = 'default',
  onValidate,
  onDismiss,
  onAction,
}: PriorityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const levelConfig = getLevelConfig(priority.level);
  const LevelIcon = levelConfig.icon;

  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', levelConfig.borderColor)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', levelConfig.bgColor)}>
              <LevelIcon className={cn('h-4 w-4', levelConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium truncate">{priority.title}</p>
                {priority.status === 'suggested' && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">{priority.explanation}</p>
            </div>
            <ScoreBadge score={priority.score.calculatedValue} />
            <Button 
              size="sm" 
              variant={priority.status === 'suggested' ? 'default' : 'outline'}
              onClick={onAction}
              className="shrink-0"
            >
              {priority.status === 'suggested' ? 'Agir' : 'Ver'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4', levelConfig.borderColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', levelConfig.bgColor)}>
              <LevelIcon className={cn('h-5 w-5', levelConfig.color)} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{priority.title}</CardTitle>
                {priority.status === 'suggested' && (
                  <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                    Sugerido
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <ScoreBadge score={priority.score.calculatedValue} />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{priority.explanation}</p>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">
            Impacto: <strong>{priority.score.impact}/10</strong>
          </span>
          <span className="text-muted-foreground">
            Urgência: <strong>{priority.score.urgency}/10</strong>
          </span>
        </div>

        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between h-auto py-2 px-0 hover:bg-transparent">
              <span className="text-sm text-muted-foreground">Ver detalhes do cálculo</span>
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <ScoreMetric label="Impacto" value={priority.score.impact} max={10} icon={TrendingUp} />
              <ScoreMetric label="Urgência" value={priority.score.urgency} max={10} icon={Clock} />
              <ScoreMetric label="Esforço" value={priority.score.effort} max={10} icon={BarChart3} inverted />
              <ScoreMetric label="Confiança" value={priority.score.confidence} max={10} icon={CheckCircle2} />
            </div>

            <div className="text-xs text-center text-muted-foreground bg-muted rounded p-2">
              ({priority.score.impact} × {priority.score.urgency} × {priority.score.confidence}) ÷ {priority.score.effort} = {priority.score.calculatedValue.toFixed(1)}
            </div>

            {priority.suggestedActions.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-medium">Ações sugeridas:</p>
                <div className="flex flex-wrap gap-1">
                  {priority.suggestedActions.map((action, index) => (
                    <Badge key={index} variant="secondary" className="text-xs font-normal">
                      {action}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <div className="flex items-center gap-2">
          {priority.status === 'suggested' ? (
            <Button variant="ghost" size="sm" onClick={onDismiss} className="text-muted-foreground h-8">
              Ignorar
            </Button>
          ) : priority.status === 'validated' ? (
            <span className="text-sm text-green-600 flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              Validado
            </span>
          ) : (
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <X className="h-4 w-4" />
              Descartado
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {priority.status === 'suggested' && (
            <Button variant="outline" size="sm" onClick={onValidate} className="h-8">
              Validar
            </Button>
          )}
          <Button size="sm" onClick={onAction} className="h-8">
            {priority.status === 'suggested' ? 'Agir Agora' : 'Executar'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function ScoreMetric({ 
  label, 
  value, 
  max, 
  icon: Icon,
  inverted = false 
}: { 
  label: string; 
  value: number; 
  max: number;
  icon: any;
  inverted?: boolean;
}) {
  const percentage = (value / max) * 100;
  const displayColor = inverted 
    ? (percentage <= 33 ? 'text-green-600' : percentage <= 66 ? 'text-yellow-600' : 'text-red-600')
    : (percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600');

  return (
    <div className="bg-muted rounded-lg p-2.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Icon className="h-3 w-3" />
          {label}
        </span>
        <span className={cn('text-sm font-bold', displayColor)}>
          {value}/{max}
        </span>
      </div>
    </div>
  );
}

export default PriorityCard;
