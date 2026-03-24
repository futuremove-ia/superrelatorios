/**
 * SuperRelatórios - Action Checklist Component
 * Componente para exibir e gerenciar checklist de ações táticas
 */

import React, { useState } from 'react';
import { CheckCircle2, Circle, Clock, Zap, Play, Pause, RotateCcw, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Action, ACTION_STATUS } from '@/types/strategy';

interface ActionChecklistProps {
  actions: Action[];
  completedActions?: string[];
  onActionComplete?: (actionId: string) => void;
  onActionStart?: (actionId: string) => void;
  onActionPause?: (actionId: string) => void;
  onActionAbandon?: (actionId: string) => void;
  showEffort?: boolean;
  showQuickWin?: boolean;
  showStepByStep?: boolean;
  className?: string;
}

export const ActionChecklist: React.FC<ActionChecklistProps> = ({
  actions,
  completedActions = [],
  onActionComplete,
  onActionStart,
  onActionPause,
  onActionAbandon,
  showEffort = true,
  showQuickWin = true,
  showStepByStep = true,
  className = ""
}) => {
  const [expandedActions, setExpandedActions] = useState<Set<string>>(new Set());
  const [actionNotes, setActionNotes] = useState<Record<string, string>>({});

  const toggleExpanded = (actionId: string) => {
    const newExpanded = new Set(expandedActions);
    if (newExpanded.has(actionId)) {
      newExpanded.delete(actionId);
    } else {
      newExpanded.add(actionId);
    }
    setExpandedActions(newExpanded);
  };

  const isActionCompleted = (actionId: string) => {
    return completedActions.includes(actionId);
  };

  const getPriorityColor = (priority: number) => {
    if (priority >= 5) return 'bg-red-100 text-red-800 border-red-200';
    if (priority >= 4) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (priority >= 3) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      financeiro: 'bg-blue-50 text-blue-700 border-blue-200',
      vendas: 'bg-green-50 text-green-700 border-green-200',
      operacoes: 'bg-orange-50 text-orange-700 border-orange-200',
      pessoas: 'bg-pink-50 text-pink-700 border-pink-200',
      relacionamento: 'bg-purple-50 text-purple-700 border-purple-200',
      marketing: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const handleActionComplete = (actionId: string) => {
    onActionComplete?.(actionId);
  };

  const handleActionStart = (actionId: string) => {
    onActionStart?.(actionId);
  };

  const handleActionPause = (actionId: string) => {
    onActionPause?.(actionId);
  };

  const handleActionAbandon = (actionId: string) => {
    onActionAbandon?.(actionId);
  };

  const completedCount = completedActions.length;
  const totalCount = actions.length;
  const overallProgress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progresso Geral */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Progresso das Ações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {completedCount} de {totalCount} ações concluídas
              </span>
              <span className="text-lg font-semibold text-gray-900">
                {overallProgress.toFixed(1)}%
              </span>
            </div>
            
            <Progress
              value={overallProgress}
              className="h-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Lista de Ações */}
      <div className="space-y-3">
        {actions.map((action) => {
          const isCompleted = isActionCompleted(action.id);
          const isExpanded = expandedActions.has(action.id);
          
          return (
            <Card
              key={action.id}
              className={`transition-all ${
                isCompleted ? 'bg-green-50 border-green-200' : 'hover:shadow-md'
              }`}
            >
              <CardContent className="p-4">
                <div className="space-y-3">
                  {/* Cabeçalho da Ação */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {/* Status Icon */}
                        <div className="flex items-center">
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                        </div>

                        {/* Título */}
                        <h4 className={`font-semibold text-gray-900 ${
                          isCompleted ? 'line-through text-gray-500' : ''
                        }`}>
                          {action.title}
                        </h4>

                        {/* Badges */}
                        <div className="flex items-center gap-2">
                          {showQuickWin && action.quick_win && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              <div className="flex items-center gap-1">
                                <Zap className="h-3 w-3" />
                                <span className="text-xs font-medium">Quick Win</span>
                              </div>
                            </Badge>
                          )}

                          {showEffort && (
                            <Badge variant="outline" className="text-xs">
                              {action.estimated_effort_hours}h
                            </Badge>
                          )}

                          <Badge className={getPriorityColor(action.priority_score)}>
                            Prioridade {action.priority_score}
                          </Badge>
                        </div>
                      </div>

                      {/* Categoria */}
                      {action.library_levers && (
                        <Badge className={getCategoryColor(action.library_levers.category)}>
                          {action.library_levers.category}
                        </Badge>
                      )}
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex items-center gap-2">
                      {!isCompleted && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => handleActionStart(action.id)}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Play className="h-3 w-3 mr-1" />
                            Iniciar
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleActionPause(action.id)}
                          >
                            <Pause className="h-3 w-3 mr-1" />
                            Pausar
                          </Button>
                        </>
                      )}

                      {isCompleted && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleActionComplete(action.id)}
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Reabrir
                        </Button>
                      )}

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleActionAbandon(action.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-3 w-3 mr-1" />
                        Abandonar
                      </Button>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {action.description}
                  </p>

                  {/* Informações Adicionais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {action.library_levers && (
                      <div>
                        <span className="font-medium text-gray-700">Alavanca:</span>
                        <div className="text-blue-600 font-medium">
                          {action.library_levers.title}
                        </div>
                      </div>
                    )}

                    {action.success_metrics && (
                      <div>
                        <span className="font-medium text-gray-700">Métricas de Sucesso:</span>
                        <div className="text-green-600">
                          {action.success_metrics}
                        </div>
                      </div>
                    )}

                    {action.required_resources && (
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Recursos Necessários:</span>
                        <div className="text-orange-600">
                          {action.required_resources}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step-by-Step Collapsible */}
                  {showStepByStep && action.step_by_step && action.step_by_step.length > 0 && (
                    <Collapsible
                      open={isExpanded}
                      onOpenChange={() => toggleExpanded(action.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-blue-600 hover:text-blue-700"
                        >
                          {isExpanded ? 'Ocultar' : 'Ver'} passos detalhados
                        </Button>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent className="space-y-3 mt-3">
                        <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                          <h5 className="font-semibold text-blue-900 mb-3">
                            Passos para execução:
                          </h5>
                          
                          <div className="space-y-2">
                            {action.step_by_step.map((step: any, index: number) => (
                              <div
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                                  {index + 1}
                                </div>
                                
                                <div className="flex-1">
                                  <div className="font-medium text-blue-900">
                                    {step.title || `Passo ${index + 1}`}
                                  </div>
                                  
                                  {step.description && (
                                    <div className="text-sm text-blue-700 mt-1">
                                      {step.description}
                                    </div>
                                  )}
                                  
                                  {step.estimated_time && (
                                    <div className="text-xs text-blue-600 mt-1">
                                      Tempo estimado: {step.estimated_time}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  {/* Campo de Notas */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Notas da execução:
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
                      rows={2}
                      placeholder="Adicione notas sobre a execução desta ação..."
                      value={actionNotes[action.id] || ''}
                      onChange={(e) => setActionNotes(prev => ({
                        ...prev,
                        [action.id]: e.target.value
                      }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Resumo Final */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <div className="text-lg font-semibold text-gray-900">
              {overallProgress >= 100 ? (
                <span className="text-green-600">
                  🎉 Todas as ações foram concluídas!
                </span>
              ) : (
                <span>
                  Continue o foco para concluir as ações restantes
                </span>
              )}
            </div>
            
            <div className="text-sm text-gray-600">
              {totalCount - completedCount} ação(ões) pendente(s)
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActionChecklist;
