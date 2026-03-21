import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Circle, Clock, Target, AlertCircle, Play } from 'lucide-react';

interface ActionItem {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  estimated_hours: number;
  actual_hours?: number;
  due_date?: string;
  assigned_to?: string;
  impact: string;
}

interface ActionChecklistCardProps {
  challengeId: string;
  leverCode?: string;
  actions: ActionItem[];
  onActionUpdate: (actionId: string, status: ActionItem['status']) => void;
  onActionStart: (actionId: string) => void;
}

export const ActionChecklistCard: React.FC<ActionChecklistCardProps> = ({
  challengeId,
  leverCode,
  actions,
  onActionUpdate,
  onActionStart
}) => {
  const completedCount = actions.filter(a => a.status === 'completed').length;
  const totalCount = actions.length;
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  
  const getStatusIcon = (status: ActionItem['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'in_progress': return <Play className="w-4 h-4 text-blue-600" />;
      default: return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };
  
  const getPriorityColor = (priority: ActionItem['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleActionClick = (action: ActionItem) => {
    if (action.status === 'pending') {
      onActionStart(action.id);
    } else if (action.status === 'in_progress') {
      onActionUpdate(action.id, 'completed');
    } else {
      onActionUpdate(action.id, 'pending');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            Plano de Ação
            {leverCode && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({leverCode})
              </span>
            )}
          </CardTitle>
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            {completedCount}/{totalCount} concluídas
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progresso</span>
            <span>{completionPercentage.toFixed(0)}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {actions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Target className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm">Nenhuma ação definida ainda</p>
            <p className="text-xs">As ações serão sugeridas com base na alavanca selecionada</p>
          </div>
        ) : (
          <div className="space-y-3">
            {actions.map((action) => (
              <div
                key={action.id}
                className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                  action.status === 'completed' 
                    ? 'bg-green-50 border-green-200' 
                    : action.status === 'in_progress'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-white border-gray-200'
                }`}
                onClick={() => handleActionClick(action)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(action.status)}
                    <h4 className="font-medium text-sm">{action.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getPriorityColor(action.priority)}`}
                    >
                      {action.priority}
                    </Badge>
                    {action.estimated_hours && (
                      <span className="text-xs text-gray-500">
                        {action.estimated_hours}h
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    {action.due_date && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Prazo: {new Date(action.due_date).toLocaleDateString('pt-BR')}
                      </div>
                    )}
                    {action.assigned_to && (
                      <div>
                        Responsável: {action.assigned_to}
                      </div>
                    )}
                  </div>
                  
                  {action.impact && (
                    <div className="text-right">
                      <span className="font-medium text-gray-700">Impacto:</span> {action.impact}
                    </div>
                  )}
                </div>
                
                {action.status === 'in_progress' && action.actual_hours && (
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <div className="flex items-center justify-between text-xs">
                      <span>Tempo investido: {action.actual_hours}h</span>
                      <span className="text-blue-600">
                        {action.actual_hours > action.estimated_hours ? '⚠️ Acima do previsto' : '✅ Dentro do prazo'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {actions.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-medium text-sm mb-2">Resumo do Plano</h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Total de horas estimadas:</span>
                <span className="ml-2 font-medium">
                  {actions.reduce((sum, a) => sum + a.estimated_hours, 0)}h
                </span>
              </div>
              <div>
                <span className="text-gray-500">Horas realizadas:</span>
                <span className="ml-2 font-medium">
                  {actions.reduce((sum, a) => sum + (a.actual_hours || 0), 0)}h
                </span>
              </div>
              <div>
                <span className="text-gray-500">Ações de alta prioridade:</span>
                <span className="ml-2 font-medium text-red-600">
                  {actions.filter(a => a.priority === 'high').length}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Taxa de conclusão:</span>
                <span className="ml-2 font-medium text-green-600">
                  {completionPercentage.toFixed(0)}%
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
