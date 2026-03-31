import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle,
  AlertCircle,
  Flame,
  Target,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Activity,
  Plus,
  ArrowRight,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChallengeCardProps {
  challenge: {
    id: string;
    code: string;
    title: string;
    description?: string;
    domain: string;
    severity: 1 | 2 | 3 | 4 | 5;
    symptoms: string[];
    relatedKPIs: {
      code: string;
      name: string;
      currentValue: number;
      threshold: number;
    }[];
  };
  variant?: 'default' | 'compact';
  onFocus?: () => void;
  onViewKPIs?: () => void;
}

const getSeverityConfig = (severity: number) => {
  switch (severity) {
    case 5:
      return { icon: Flame, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-300', label: 'Crítico' };
    case 4:
      return { icon: AlertTriangle, color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-300', label: 'Alto' };
    case 3:
      return { icon: AlertCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-300', label: 'Médio' };
    default:
      return { icon: Activity, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-300', label: severity === 2 ? 'Baixo' : 'Mínimo' };
  }
};

const getDomainColor = (domain: string) => {
  switch (domain.toLowerCase()) {
    case 'finance': return 'bg-emerald-500';
    case 'sales': return 'bg-blue-500';
    case 'marketing': return 'bg-purple-500';
    case 'operations': return 'bg-orange-500';
    case 'strategy': return 'bg-indigo-500';
    default: return 'bg-gray-500';
  }
};

export function ChallengeCard({
  challenge,
  variant = 'default',
  onFocus,
  onViewKPIs,
}: ChallengeCardProps) {
  const [symptomsOpen, setSymptomsOpen] = useState(false);
  const severityConfig = getSeverityConfig(challenge.severity);
  const SeverityIcon = severityConfig.icon;
  const domainColor = getDomainColor(challenge.domain);

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
                <p className="font-medium truncate">{challenge.title}</p>
                <div className={cn('w-2 h-2 rounded-full', domainColor)} title={challenge.domain} />
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <Badge variant="outline" className={cn('text-xs px-1', severityConfig.color)}>
                  {severityConfig.label}
                </Badge>
                <span>{challenge.relatedKPIs.length} KPIs afetados</span>
              </div>
            </div>
            <div className={cn(
              'px-2 py-1 rounded-lg text-center shrink-0',
              severityConfig.bgColor
            )}>
              <span className={cn('text-lg font-bold', severityConfig.color)}>{challenge.severity}/5</span>
            </div>
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
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{challenge.title}</CardTitle>
                <div className={cn('w-2 h-2 rounded-full', domainColor)} title={challenge.domain} />
              </div>
              {challenge.description && (
                <p className="text-sm text-muted-foreground mt-0.5">{challenge.description}</p>
              )}
            </div>
          </div>
          
          {/* Severity Score */}
          <div className={cn(
            'px-3 py-1.5 rounded-lg text-center shrink-0',
            severityConfig.bgColor
          )}>
            <span className={cn('text-2xl font-bold', severityConfig.color)}>{challenge.severity}</span>
            <p className="text-xs text-muted-foreground">/5 severidade</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Related KPIs - Simplified */}
        {challenge.relatedKPIs.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium flex items-center gap-1">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              KPIs Afetados ({challenge.relatedKPIs.length})
            </p>
            <div className="space-y-2">
              {challenge.relatedKPIs.map((kpi, index) => {
                const performance = (kpi.currentValue / kpi.threshold) * 100;
                return (
                  <div key={index} className="bg-muted rounded-lg p-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{kpi.name}</span>
                      <Badge variant="outline" className="text-xs font-mono">
                        {kpi.code}
                      </Badge>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={cn(
                        'font-semibold',
                        performance < 70 ? 'text-red-600' :
                        performance < 90 ? 'text-yellow-600' :
                        'text-emerald-600'
                      )}>
                        {kpi.currentValue.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        / {kpi.threshold.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <Progress value={performance} className="h-1 mt-1" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Symptoms - Collapsible */}
        {challenge.symptoms.length > 0 && (
          <Collapsible open={symptomsOpen} onOpenChange={setSymptomsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between h-auto py-2 px-0 hover:bg-transparent text-muted-foreground">
                <span className="text-sm flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  {challenge.symptoms.length} sintomas identificados
                </span>
                {symptomsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <ul className="space-y-1">
                {challenge.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm bg-muted rounded-lg p-2">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-medium text-primary">
                      {index + 1}
                    </span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Code - subtle */}
        <div className="pt-2">
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
            {challenge.code}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <Button variant="ghost" size="sm" onClick={onViewKPIs} className="h-8">
          <BarChart3 className="h-4 w-4 mr-2" />
          Ver KPIs
        </Button>
        <Button size="sm" onClick={onFocus} className="h-8">
          <Plus className="h-4 w-4 mr-2" />
          Focar
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ChallengeCard;
