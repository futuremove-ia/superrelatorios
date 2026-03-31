import React from 'react';
import { cn } from '@/lib/utils';
import { RadarItem, Risk, Opportunity } from '@/types/business';
import { DomainTag } from './DomainTag';
import { LeverGroup } from './LeverTag';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  Target,
  Plus,
  CheckCircle2,
  AlertCircle,
  Zap,
  TrendingDown,
  DollarSign,
  BarChart3
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ActionableCardProps {
  item: RadarItem;
  onAddToPlan?: (id: string) => void;
  onDismiss?: (id: string) => void;
  onClick?: (item: RadarItem) => void;
  className?: string;
}

export const ActionableCard: React.FC<ActionableCardProps> = ({
  item,
  onAddToPlan,
  onDismiss,
  onClick,
  className
}) => {
  const { t } = useTranslation();
  const isRisk = item.type === 'risk';
  const alert = item.alert as Risk | Opportunity;
  
  // Configurações visuais baseadas no tipo
  const typeConfig = isRisk ? {
    icon: AlertTriangle,
    headerBg: 'bg-red-50',
    headerBorder: 'border-red-200',
    badgeColor: 'bg-red-500 text-white',
    badgeText: 'RISCO',
    urgencyColor: 'text-red-600',
    severityConfig: {
      critical: { color: 'bg-red-500', label: 'Crítico' },
      high: { color: 'bg-orange-500', label: 'Alto' },
      medium: { color: 'bg-yellow-500', label: 'Médio' }
    }
  } : {
    icon: TrendingUp,
    headerBg: 'bg-emerald-50',
    headerBorder: 'border-emerald-200',
    badgeColor: 'bg-emerald-500 text-white',
    badgeText: 'OPORTUNIDADE',
    urgencyColor: 'text-emerald-600',
    severityConfig: null
  };

  const Icon = typeConfig.icon;

  // Formatar data relativa
  const getRelativeTime = (date: string) => {
    const now = new Date();
    const itemDate = new Date(date);
    const diffDays = Math.floor((now.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Hoje';
    if (diffDays === 1) return 'Ontem';
    if (diffDays < 7) return `${diffDays} dias`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} semanas`;
    return `${Math.floor(diffDays / 30)} meses`;
  };

  return (
    <Card 
      className={cn(
        'overflow-hidden transition-all duration-300 hover:shadow-lg',
        'border-l-4',
        isRisk ? 'border-l-red-500' : 'border-l-emerald-500',
        className
      )}
    >
      {/* HEADER: Alerta */}
      <CardHeader className={cn(
        'p-4 pb-3',
        typeConfig.headerBg,
        'border-b',
        typeConfig.headerBorder
      )}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {/* Ícone de Alerta */}
            <div className={cn(
              'p-2 rounded-lg flex-shrink-0',
              isRisk ? 'bg-red-100' : 'bg-emerald-100'
            )}>
              <Icon className={cn(
                'h-5 w-5',
                isRisk ? 'text-red-600' : 'text-emerald-600'
              )} />
            </div>
            
            {/* Título e Badges */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <Badge className={cn('text-xs font-bold', typeConfig.badgeColor)}>
                  {typeConfig.badgeText}
                </Badge>
                <DomainTag domain={item.domain} size="sm" />
                
                {/* Prioridade */}
                <Badge 
                  variant="outline" 
                  className={cn(
                    'text-[10px]',
                    item.priority === 'high' ? 'border-red-300 text-red-700' :
                    item.priority === 'medium' ? 'border-amber-300 text-amber-700' :
                    'border-blue-300 text-blue-700'
                  )}
                >
                  {item.priority === 'high' ? 'Alta Prioridade' :
                   item.priority === 'medium' ? 'Média Prioridade' : 
                   'Baixa Prioridade'}
                </Badge>
              </div>
              
              <h3 className="font-bold text-base text-foreground leading-tight">
                {alert.title}
              </h3>
              
              {/* Meta info */}
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Detectado {getRelativeTime(item.createdAt)}
                </span>
                
                {isRisk && 'severity' in alert && (
                  <span className={cn(
                    'flex items-center gap-1 font-medium',
                    alert.severity === 'critical' ? 'text-red-600' :
                    alert.severity === 'high' ? 'text-orange-600' :
                    'text-yellow-600'
                  )}>
                    <AlertCircle className="h-3 w-3" />
                    Gravidade: {alert.severity === 'critical' ? 'Crítica' :
                               alert.severity === 'high' ? 'Alta' : 'Média'}
                  </span>
                )}
                
                {!isRisk && 'potentialProfit' in alert && (
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <DollarSign className="h-3 w-3" />
                    Potencial: {alert.potentialProfit}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Tempo de fôlego (apenas para riscos) */}
          {isRisk && 'timeToBreathe' in alert && (
            <div className="flex-shrink-0 text-right">
              <div className={cn(
                'text-sm font-bold',
                typeConfig.urgencyColor
              )}>
                {alert.timeToBreathe}
              </div>
              <div className="text-[10px] text-muted-foreground">para agir</div>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        {/* BODY: Diagnóstico */}
        <div className="space-y-3">
          {/* Termo técnico */}
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
              Termo Técnico
            </div>
            <div className="font-mono text-sm text-foreground">
              {item.diagnosis.technicalTerm}
            </div>
          </div>
          
          {/* Causa Raiz */}
          <div>
            <div className="text-xs font-bold text-foreground mb-1 flex items-center gap-1">
              <Target className="h-3.5 w-3.5 text-primary" />
              Causa Raiz
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.diagnosis.cause}
            </p>
          </div>
          
          {/* Efeito */}
          <div>
            <div className="text-xs font-bold text-foreground mb-1 flex items-center gap-1">
              <TrendingDown className="h-3.5 w-3.5 text-red-500" />
              Efeito no Negócio
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.diagnosis.effect}
            </p>
          </div>
          
          {/* Alavancas envolvidas */}
          <LeverGroup 
            levers={item.recommendation.levers}
            size="sm"
          />
        </div>

        {/* FOOTER: Recomendação */}
        <div className="pt-3 border-t">
          <div className="text-xs font-bold text-foreground mb-2 flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            Recomendação da IA
          </div>
          
          <p className="text-sm text-foreground mb-3 leading-relaxed">
            {item.recommendation.description}
          </p>
          
          {/* Métricas da recomendação */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span className="font-semibold text-primary">
                {item.recommendation.expectedImpact}
              </span>
            </span>
            
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
              <Clock className="h-3 w-3 text-muted-foreground" />
              {item.recommendation.timeframe}
            </span>
            
            <span className={cn(
              'inline-flex items-center gap-1 px-2 py-1 rounded-md',
              item.recommendation.complexity === 'low' ? 'bg-green-50 text-green-700' :
              item.recommendation.complexity === 'medium' ? 'bg-amber-50 text-amber-700' :
              'bg-red-50 text-red-700'
            )}>
              <BarChart3 className="h-3 w-3" />
              Complexidade: {item.recommendation.complexity === 'low' ? 'Baixa' :
                           item.recommendation.complexity === 'medium' ? 'Média' : 'Alta'}
            </span>
            
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-md text-blue-700">
              <CheckCircle2 className="h-3 w-3" />
              Confiança: {item.recommendation.confidence}%
            </span>
          </div>
          
          {/* Botões de ação */}
          <div className="flex items-center gap-2">
            <Button 
              className="flex-1 gap-2"
              onClick={() => onAddToPlan?.(item.id)}
            >
              <Plus className="h-4 w-4" />
              Adicionar ao Plano
            </Button>
            
            <Button 
              variant="outline"
              size="icon"
              onClick={() => onDismiss?.(item.id)}
              title="Dispensar alerta"
            >
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionableCard;
