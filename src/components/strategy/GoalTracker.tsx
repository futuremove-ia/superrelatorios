/**
 * SuperRelatórios - Goal Tracker Component
 * Componente para acompanhar progresso de objetivos estratégicos
 */

import React from 'react';
import { Target, Calendar, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Goal } from '@/types/strategy';

interface GoalTrackerProps {
  goal: Goal;
  progress?: number;
  timeframe?: number;
  showProgressBar?: boolean;
  showTimeframe?: boolean;
  showSuccessDefinition?: boolean;
  onProgressUpdate?: (progress: number) => void;
  onComplete?: () => void;
  className?: string;
}

export const GoalTracker: React.FC<GoalTrackerProps> = ({
  goal,
  progress = 0,
  timeframe,
  showProgressBar = true,
  showTimeframe = true,
  showSuccessDefinition = true,
  onProgressUpdate,
  onComplete,
  className = ""
}) => {
  const getTargetTypeColor = (targetType: string) => {
    const colors = {
      increase: 'bg-green-100 text-green-800 border-green-200',
      decrease: 'bg-red-100 text-red-800 border-red-200',
      maintain: 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[targetType as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTargetTypeIcon = (targetType: string) => {
    const icons = {
      increase: <TrendingUp className="h-4 w-4" />,
      decrease: <TrendingDown className="h-4 w-4" />,
      maintain: <Target className="h-4 w-4" />
    };
    return icons[targetType as keyof typeof icons] || <Target className="h-4 w-4" />;
  };

  const getTargetTypeLabel = (targetType: string) => {
    const labels = {
      increase: 'Aumentar',
      decrease: 'Reduzir',
      maintain: 'Manter'
    };
    return labels[targetType as keyof typeof labels] || 'Alcançar';
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getProgressStatus = (progress: number) => {
    if (progress >= 100) return { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: 'Concluído', color: 'text-green-600' };
    if (progress >= 80) return { icon: <TrendingUp className="h-5 w-5 text-green-600" />, text: 'Quase lá', color: 'text-green-600' };
    if (progress >= 50) return { icon: <Clock className="h-5 w-5 text-yellow-600" />, text: 'Em progresso', color: 'text-yellow-600' };
    return { icon: <Clock className="h-5 w-5 text-red-600" />, text: 'Atrasado', color: 'text-red-600' };
  };

  const currentProgress = Math.min(Math.max(progress, 0), 100);
  const progressStatus = getProgressStatus(currentProgress);
  const daysRemaining = timeframe ? Math.max(timeframe - Math.floor((currentProgress / 100) * timeframe), 0) : 0;

  return (
    <Card className={`transition-all hover:shadow-md ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            {goal.title}
          </CardTitle>
          
          <Badge className={getTargetTypeColor(goal.target_type)}>
            <div className="flex items-center gap-1">
              {getTargetTypeIcon(goal.target_type)}
              <span className="text-xs font-medium">
                {getTargetTypeLabel(goal.target_type)}
              </span>
            </div>
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Descrição */}
        {goal.description && (
          <p className="text-gray-700 leading-relaxed">
            {goal.description}
          </p>
        )}

        {/* Definição de Sucesso */}
        {showSuccessDefinition && goal.success_definition && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Definição de Sucesso
            </h4>
            
            <div className="bg-green-50 p-3 rounded-md border border-green-200">
              <p className="text-sm text-green-800">
                {goal.success_definition}
              </p>
            </div>
          </div>
        )}

        {/* Timeframe */}
        {showTimeframe && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">
                Prazo: {goal.suggested_timeframe_days} dias
              </span>
            </div>
            
            {daysRemaining > 0 && (
              <Badge variant="outline" className="text-xs">
                {daysRemaining} dias restantes
              </Badge>
            )}
            
            {daysRemaining === 0 && (
              <Badge className="bg-red-100 text-red-800 border-red-200 text-xs">
                Prazo encerrado
              </Badge>
            )}
          </div>
        )}

        {/* Barra de Progresso */}
        {showProgressBar && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">Progresso</h4>
              
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {currentProgress}%
                </span>
                <div className={`flex items-center gap-1 ${progressStatus.color}`}>
                  {progressStatus.icon}
                  <span className="text-sm font-medium">
                    {progressStatus.text}
                  </span>
                </div>
              </div>
            </div>
            
            <Progress
              value={currentProgress}
              className="h-3"
              // @ts-ignore - Custom color prop
              style={{
                '--progress-background': getProgressColor(currentProgress)
              }}
            />
            
            {/* Indicadores de Progresso */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-gray-600">Início</div>
                <div className="font-semibold">0%</div>
              </div>
              <div className="text-center">
                <div className="text-gray-600">Atual</div>
                <div className="font-semibold text-blue-600">{currentProgress}%</div>
              </div>
              <div className="text-center">
                <div className="text-gray-600">Meta</div>
                <div className="font-semibold text-green-600">100%</div>
              </div>
            </div>
          </div>
        )}

        {/* Lógica de Cálculo */}
        {goal.calculation_logic_ref && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Lógica de Cálculo</h4>
            
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <code className="text-xs text-gray-700">
                {goal.calculation_logic_ref}
              </code>
            </div>
          </div>
        )}

        {/* Botões de Ação */}
        <div className="flex gap-3 pt-4">
          {onProgressUpdate && currentProgress < 100 && (
            <Button
              onClick={() => onProgressUpdate(Math.min(currentProgress + 10, 100))}
              variant="outline"
              size="sm"
            >
              Atualizar Progresso
            </Button>
          )}
          
          {onComplete && currentProgress >= 100 && (
            <Button
              onClick={onComplete}
              size="sm"
              className="bg-green-600 hover:bg-green-700"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Marcar como Concluído
              </div>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;
