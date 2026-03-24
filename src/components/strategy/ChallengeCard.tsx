/**
 * SuperRelatórios - Challenge Card Component
 * Componente para exibir desafios estratégicos detectados
 */

import React from 'react';
import { AlertTriangle, TrendingDown, Target, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Challenge } from '@/types/strategy';

interface ChallengeCardProps {
  challenge: Challenge;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  showSymptoms?: boolean;
  showRelatedKPIs?: boolean;
  onAction?: (challenge: Challenge) => void;
  className?: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  severity,
  showSymptoms = true,
  showRelatedKPIs = true,
  onAction,
  className = ""
}) => {
  const getSeverityColor = (severity: string) => {
    const colors = {
      low: 'bg-blue-100 text-blue-800 border-blue-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      high: 'bg-orange-100 text-orange-800 border-orange-200',
      critical: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getSeverityIcon = (severity: string) => {
    const icons = {
      low: <Clock className="h-5 w-5" />,
      medium: <TrendingDown className="h-5 w-5" />,
      high: <AlertTriangle className="h-5 w-5" />,
      critical: <AlertTriangle className="h-5 w-5" />
    };
    return icons[severity as keyof typeof icons] || <Clock className="h-5 w-5" />;
  };

  const getSeverityLabel = (severity: string) => {
    const labels = {
      low: 'Baixa Prioridade',
      medium: 'Média Prioridade',
      high: 'Alta Prioridade',
      critical: 'Crítico'
    };
    return labels[severity as keyof typeof labels] || 'Sem Prioridade';
  };

  const getDomainColor = (domain: string) => {
    const colors = {
      finance: 'bg-blue-50 text-blue-700 border-blue-200',
      sales: 'bg-green-50 text-green-700 border-green-200',
      marketing: 'bg-purple-50 text-purple-700 border-purple-200',
      operations: 'bg-orange-50 text-orange-700 border-orange-200',
      strategy: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    };
    return colors[domain as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const currentSeverity = severity || 
    (challenge.severity_default <= 2 ? 'low' :
     challenge.severity_default <= 3 ? 'medium' :
     challenge.severity_default <= 4 ? 'high' : 'critical');

  return (
    <Card className={`transition-all hover:shadow-lg ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {challenge.title}
          </CardTitle>
          
          <div className="flex items-center gap-2">
            <Badge className={getDomainColor(challenge.domain)}>
              {challenge.domain}
            </Badge>
            
            <Badge className={getSeverityColor(currentSeverity)}>
              <div className="flex items-center gap-1">
                {getSeverityIcon(currentSeverity)}
                <span className="text-xs font-medium">
                  {getSeverityLabel(currentSeverity)}
                </span>
              </div>
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Descrição */}
        <p className="text-gray-700 leading-relaxed">
          {challenge.description}
        </p>

        {/* Sintomas */}
        {showSymptoms && challenge.symptoms && challenge.symptoms.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              Sintomas Detectados
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {challenge.symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-2 bg-amber-50 rounded-md border border-amber-200"
                >
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-1 flex-shrink-0" />
                  <span className="text-sm text-amber-800">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* KPIs Relacionados */}
        {showRelatedKPIs && challenge.related_kpi_codes && challenge.related_kpi_codes.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600" />
              KPIs Relacionados
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {challenge.related_kpi_codes.map((kpiCode, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="font-mono text-xs"
                >
                  {kpiCode}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Configuração da Árvore de Métricas */}
        {challenge.metric_tree_config && (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-green-600" />
              Configuração de Análise
            </h4>
            
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {challenge.metric_tree_config.main_kpi && (
                  <div>
                    <span className="font-medium text-gray-700">KPI Principal:</span>
                    <div className="font-mono text-blue-600">
                      {challenge.metric_tree_config.main_kpi}
                    </div>
                  </div>
                )}
                
                {challenge.metric_tree_config.thresholds && (
                  <div>
                    <span className="font-medium text-gray-700">Thresholds:</span>
                    <div className="space-y-1">
                      {Object.entries(challenge.metric_tree_config.thresholds).map(([level, config]: [string, any]) => (
                        <div key={level} className="flex items-center gap-2">
                          <span className="capitalize text-xs bg-gray-200 px-2 py-1 rounded">
                            {level}
                          </span>
                          <span className="font-mono text-xs">
                            {config.min} - {config.max}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {challenge.metric_tree_config.supporting_kpis && (
                  <div>
                    <span className="font-medium text-gray-700">KPIs de Apoio:</span>
                    <div className="flex flex-wrap gap-1">
                      {challenge.metric_tree_config.supporting_kpis.map((kpi: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="font-mono text-xs"
                        >
                          {kpi}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Botão de Ação */}
        {onAction && (
          <Button
            onClick={() => onAction(challenge)}
            className="w-full"
            variant="default"
          >
            <div className="flex items-center justify-between w-full">
              <span>Ver Ações Recomendadas</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
