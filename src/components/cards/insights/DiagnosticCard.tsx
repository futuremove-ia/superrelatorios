import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  AlertTriangle, 
  AlertCircle,
  Flame,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  ArrowRight,
  BarChart3,
  Plus
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DiagnosticCardProps {
  diagnostic: {
    id: string;
    title: string;
    description: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    confidence: number;
    causes: {
      description: string;
      evidence: string;
      relatedKPI: string;
    }[];
    implications: string[];
    detectedAt: string;
    affectedDomains: string[];
  };
  variant?: 'default' | 'compact';
  onCreatePriority?: () => void;
  onViewDetails?: () => void;
}

const getSeverityConfig = (severity: string) => {
  switch (severity) {
    case 'critical':
      return { icon: Flame, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-300', label: 'Crítico' };
    case 'high':
      return { icon: AlertTriangle, color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-300', label: 'Alto' };
    case 'medium':
      return { icon: AlertCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-300', label: 'Médio' };
    default:
      return { icon: Lightbulb, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-300', label: 'Baixo' };
  }
};

function ConfidenceBadge({ confidence }: { confidence: number }) {
  const colorClass = confidence >= 80 ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                     confidence >= 60 ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                     'bg-orange-100 text-orange-700 border-orange-200';
  return (
    <div className={cn('px-2 py-1 rounded-lg border text-center', colorClass)}>
      <span className="text-lg font-bold">{confidence}%</span>
      <p className="text-xs opacity-75">confiança</p>
    </div>
  );
}

export function DiagnosticCard({
  diagnostic,
  variant = 'default',
  onCreatePriority,
  onViewDetails,
}: DiagnosticCardProps) {
  const [expanded, setExpanded] = useState(false);
  const severityConfig = getSeverityConfig(diagnostic.severity);
  const SeverityIcon = severityConfig.icon;

  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', severityConfig.borderColor)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', severityConfig.bgColor)}>
              <SeverityIcon className={cn('h-4 w-4', severityConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{diagnostic.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className={cn('text-xs', severityConfig.color)}>
                  {severityConfig.label}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {diagnostic.causes.length} causas • {diagnostic.confidence}% confiança
                </span>
              </div>
            </div>
            <ConfidenceBadge confidence={diagnostic.confidence} />
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
              <CardTitle className="text-base">{diagnostic.title}</CardTitle>
            </div>
          </div>
          <ConfidenceBadge confidence={diagnostic.confidence} />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{diagnostic.description}</p>

        {/* Domains - inline */}
        <div className="flex flex-wrap gap-1">
          {diagnostic.affectedDomains.map((domain, index) => (
            <Badge key={index} variant="outline" className="text-xs font-normal">
              {domain}
            </Badge>
          ))}
        </div>

        {/* Summary stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Target className="h-4 w-4" />
            {diagnostic.causes.length} causas
          </span>
          <span className="flex items-center gap-1">
            <Lightbulb className="h-4 w-4" />
            {diagnostic.implications.length} implicações
          </span>
        </div>

        {/* Expandable details */}
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between h-auto py-2 px-0 hover:bg-transparent">
              <span className="text-sm text-muted-foreground">Ver detalhes completos</span>
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4">
            {/* Causes */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Causas Identificadas</p>
              {diagnostic.causes.map((cause, index) => (
                <div key={index} className="bg-muted rounded-lg p-3">
                  <p className="text-sm font-medium">{index + 1}. {cause.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">Evidência: {cause.evidence}</p>
                  <Badge variant="outline" className="text-xs mt-2">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    {cause.relatedKPI}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Implications */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Implicações</p>
              <ul className="space-y-1">
                {diagnostic.implications.map((implication, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span>{implication}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-3">
        <span className="text-xs text-muted-foreground">
          {new Date(diagnostic.detectedAt).toLocaleDateString('pt-BR')}
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onViewDetails} className="h-8">
            Detalhes
          </Button>
          <Button size="sm" onClick={onCreatePriority} className="h-8">
            <Plus className="h-4 w-4 mr-2" />
            Criar Prioridade
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default DiagnosticCard;
