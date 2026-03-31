import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  AlertTriangle,
  AlertCircle,
  Flame,
  Shield,
  CheckCircle2,
  User,
  Calendar,
  Target,
  BarChart3,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RiskCardProps {
  risk: {
    id: string;
    title: string;
    description: string;
    probability: number;
    impact: number;
    severity: 'critical' | 'high' | 'medium' | 'low';
    category: 'financial' | 'operational' | 'strategic' | 'compliance';
    relatedKPIs: string[];
    mitigationPlan?: {
      actions: string[];
      owner?: string;
      dueDate?: string;
    };
    status: 'identified' | 'monitored' | 'mitigated' | 'materialized';
  };
  variant?: 'default' | 'compact';
  onMitigate?: () => void;
  onMonitor?: () => void;
  onView?: () => void;
}

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case 'critical':
      return {
        icon: Flame,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-300',
        label: 'Crítico',
        scoreColor: 'bg-red-500',
      };
    case 'high':
      return {
        icon: AlertTriangle,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-300',
        label: 'Alto',
        scoreColor: 'bg-orange-500',
      };
    case 'medium':
      return {
        icon: AlertCircle,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-300',
        label: 'Médio',
        scoreColor: 'bg-yellow-500',
      };
    default:
      return {
        icon: Shield,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-300',
        label: 'Baixo',
        scoreColor: 'bg-blue-500',
      };
  }
};

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'identified':
      return { color: 'text-red-600', bgColor: 'bg-red-50', label: 'Identificado' };
    case 'monitored':
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-50', label: 'Monitorado' };
    case 'mitigated':
      return { color: 'text-green-600', bgColor: 'bg-green-50', label: 'Mitigado' };
    case 'materialized':
      return { color: 'text-gray-600', bgColor: 'bg-gray-50', label: 'Materializado' };
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-50', label: status };
  }
};

function RiskScoreBadge({ score, severityConfig }: { score: number; severityConfig: any }) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn('text-xl font-bold', 
        score >= 6 ? 'text-red-600' : score >= 3 ? 'text-yellow-600' : 'text-blue-600'
      )}>
        {score.toFixed(1)}
      </span>
      <span className="text-xs text-muted-foreground">/10</span>
    </div>
  );
}

export function RiskCard({
  risk,
  variant = 'default',
  onMitigate,
  onMonitor,
  onView,
}: RiskCardProps) {
  const [expanded, setExpanded] = useState(false);
  const severityConfig = getSeverityConfig(risk.severity);
  const statusConfig = getStatusConfig(risk.status);
  const SeverityIcon = severityConfig.icon;
  const riskScore = (risk.probability * risk.impact) / 100;

  // Compact variant
  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', severityConfig.borderColor)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', severityConfig.bgColor)}>
              <SeverityIcon className={cn('h-4 w-4', severityConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium truncate">{risk.title}</p>
                {risk.status === 'identified' && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {risk.probability}% prob • {risk.impact}/10 impacto • {severityConfig.label}
              </p>
            </div>
            <RiskScoreBadge score={riskScore} severityConfig={severityConfig} />
            <Button 
              size="sm" 
              variant={risk.status === 'identified' ? 'default' : 'outline'}
              onClick={onMonitor}
              className="shrink-0"
            >
              {risk.status === 'identified' ? 'Monitorar' : 'Ver'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4', severityConfig.borderColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', severityConfig.bgColor)}>
              <SeverityIcon className={cn('h-5 w-5', severityConfig.color)} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{risk.title}</CardTitle>
                {risk.status === 'identified' && (
                  <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                    Novo
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <RiskScoreBadge score={riskScore} severityConfig={severityConfig} />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{risk.description}</p>

        {/* Simplified risk summary */}
        <div className="flex items-center gap-4 text-sm">
          <span className="text-muted-foreground">
            Probabilidade: <strong className={risk.probability >= 70 ? 'text-red-600' : risk.probability >= 40 ? 'text-yellow-600' : 'text-green-600'}>{risk.probability}%</strong>
          </span>
          <span className="text-muted-foreground">
            Impacto: <strong className={risk.impact >= 7 ? 'text-red-600' : risk.impact >= 4 ? 'text-yellow-600' : 'text-green-600'}>{risk.impact}/10</strong>
          </span>
          <Badge variant="outline" className="text-xs">
            {severityConfig.label}
          </Badge>
        </div>

        {/* Risk Score Bar */}
        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Score de Risco</span>
            <RiskScoreBadge score={riskScore} severityConfig={severityConfig} />
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={cn('h-full rounded-full', severityConfig.scoreColor)}
              style={{ width: `${Math.min(riskScore * 10, 100)}%` }}
            />
          </div>
        </div>

        {/* Related KPIs - simplified */}
        {risk.relatedKPIs.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BarChart3 className="h-4 w-4" />
            <span>KPIs: {risk.relatedKPIs.join(', ')}</span>
          </div>
        )}

        {/* Collapsible Mitigation Plan */}
        {risk.mitigationPlan && (
          <Collapsible open={expanded} onOpenChange={setExpanded}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between h-auto py-2 px-0 hover:bg-transparent">
                <span className="text-sm text-muted-foreground">
                  {risk.status === 'mitigated' ? 'Plano executado' : 'Ver plano de mitigação'}
                </span>
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3">
              <div className={cn(
                'rounded-lg p-3 border',
                risk.status === 'mitigated' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'
              )}>
                <ul className="space-y-1">
                  {risk.mitigationPlan.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      {risk.status === 'mitigated' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Target className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>

                {(risk.mitigationPlan.owner || risk.mitigationPlan.dueDate) && (
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t text-xs text-muted-foreground">
                    {risk.mitigationPlan.owner && (
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {risk.mitigationPlan.owner}
                      </span>
                    )}
                    {risk.mitigationPlan.dueDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(risk.mitigationPlan.dueDate).toLocaleDateString('pt-BR')}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <div className="flex items-center gap-2">
          {risk.status === 'mitigated' ? (
            <span className="text-sm text-green-600 flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              Mitigado
            </span>
          ) : (
            <span className={cn('text-sm flex items-center gap-1', statusConfig.color)}>
              <SeverityIcon className="h-4 w-4" />
              {statusConfig.label}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {risk.status !== 'mitigated' && risk.status !== 'materialized' && (
            <Button variant="outline" size="sm" onClick={onMitigate} className="h-8">
              <Shield className="h-4 w-4 mr-2" />
              Mitigar
            </Button>
          )}
          <Button size="sm" onClick={onMonitor} className="h-8">
            {risk.status === 'identified' ? 'Iniciar' : 'Atualizar'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default RiskCard;
