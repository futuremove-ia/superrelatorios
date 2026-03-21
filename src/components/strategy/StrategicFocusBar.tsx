import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { TrendingUp, Target, AlertTriangle, CheckCircle, Clock, ArrowRight, MoreHorizontal } from 'lucide-react';
import { useActiveChallenges, useSuggestedLever } from '@/hooks/useActiveChallenges';
import { LeverCard } from './LeverCard';
import { ActionChecklistCard } from './ActionChecklistCard';
import { supabase } from '@/lib/supabase';

const StrategicFocusBar = () => {
  const [showLeverDetails, setShowLeverDetails] = useState(false);
  const [showActions, setShowActions] = useState(false);
  
  const { data: challenges = [], isLoading: challengesLoading } = useActiveChallenges();
  const activeChallenge = challenges[0]; // Pegar o mais recente
  
  const { data: suggestedLever, isLoading: leverLoading } = useSuggestedLever(
    activeChallenge?.challenge_code
  );

  const handleAcceptLever = async () => {
    if (!suggestedLever || !activeChallenge) return;
    
    try {
      // Atualizar status do desafio para "acknowledged"
      const { error } = await supabase
        .from('user_challenges')
        .update({ 
          status: 'acknowledged',
          acknowledged_at: new Date().toISOString()
        })
        .eq('id', activeChallenge.id);
      
      if (error) throw error;
      
      setShowLeverDetails(false);
      setShowActions(true);
    } catch (error) {
      console.error('Error accepting lever:', error);
    }
  };

  const handleDismissLever = async () => {
    if (!activeChallenge) return;
    
    try {
      await supabase
        .from('user_challenges')
        .update({ 
          status: 'dismissed',
          dismissed_at: new Date().toISOString()
        })
        .eq('id', activeChallenge.id);
      
      setShowLeverDetails(false);
    } catch (error) {
      console.error('Error dismissing lever:', error);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in_progress': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'acknowledged': return <Target className="w-4 h-4 text-purple-600" />;
      default: return <AlertTriangle className="w-4 h-4 text-orange-600" />;
    }
  };

  if (challengesLoading) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!activeChallenge) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          <strong>Tudo em ordem!</strong> Nenhum desafio crítico detectado no momento.
          Continue monitorando seus relatórios para identificar oportunidades de melhoria.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-6">
      {/* Barra de Foco Estratégico Principal */}
      <Card className="w-full">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5" />
              Foco Estratégico
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={getSeverityColor(activeChallenge.severity)}>
                {activeChallenge.severity}
              </Badge>
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                {getStatusIcon(activeChallenge.status)}
                {activeChallenge.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{activeChallenge.title}</h3>
            <p className="text-gray-600 mb-4">{activeChallenge.description}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Código: {activeChallenge.challenge_code}</span>
              <span>•</span>
              <span>
                Detectado em {new Date(activeChallenge.detected_at).toLocaleDateString('pt-BR')}
              </span>
            </div>
          </div>

          {suggestedLever && !showLeverDetails && !showActions && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-blue-900">Alavanca Sugerida</h4>
                <Badge className="bg-blue-100 text-blue-800">
                  {suggestedLever.impact_level} impacto
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-blue-900">{suggestedLever.title}</p>
                  <p className="text-sm text-blue-700 mt-1">{suggestedLever.description}</p>
                  
                  {suggestedLever.quick_win && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 mt-2">
                      Quick Win - {suggestedLever.typical_timeframe_days} dias
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    onClick={() => setShowLeverDetails(true)}
                  >
                    Ver Detalhes
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleAcceptLever}
                  >
                    Aceitar
                  </Button>
                </div>
              </div>
            </div>
          )}

          {showActions && (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowActions(false)}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Voltar para Alavanca
              </Button>
              <span className="text-sm text-gray-500">
                Alavanca aceita - implementando plano de ação
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detalhes da Alavanca */}
      {showLeverDetails && suggestedLever && (
        <LeverCard
          lever={suggestedLever}
          onAccept={handleAcceptLever}
          onDismiss={handleDismissLever}
        />
      )}

      {/* Plano de Ação */}
      {showActions && (
        <ActionChecklistCard
          challengeId={activeChallenge.id}
          leverCode={suggestedLever?.code}
          actions={[
            {
              id: '1',
              title: 'Analisar estrutura de preços atual',
              description: 'Mapear todos os produtos/serviços e suas margens atuais',
              status: 'pending',
              priority: 'high',
              estimated_hours: 8,
              impact: 'Identificar oportunidades de aumento de margem'
            },
            {
              id: '2',
              title: 'Pesquisar preços de mercado',
              description: 'Analisar concorrentes e posicionamento de preço',
              status: 'pending',
              priority: 'medium',
              estimated_hours: 12,
              impact: 'Base para reajuste competitivo'
            },
            {
              id: '3',
              title: 'Simular impactos',
              description: 'Calcular impacto nas vendas e margem com novos preços',
              status: 'pending',
              priority: 'high',
              estimated_hours: 6,
              impact: 'Prever resultado financeiro da mudança'
            }
          ]}
          onActionUpdate={(actionId, status) => {
            console.log('Action updated:', actionId, status);
          }}
          onActionStart={(actionId) => {
            console.log('Action started:', actionId);
          }}
        />
      )}
    </div>
  );
};

export default StrategicFocusBar;
