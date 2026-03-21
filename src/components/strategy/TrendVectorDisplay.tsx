import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Minus,
  Rocket,
  AlertTriangle,
  Activity,
  AlertCircle,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendVector {
  visual_status: string;
  system_narrative: string;
  suggested_action: string;
  trend_strength: string;
  urgency_level: string;
  delta_percentage: number;
  progress_percentage: number;
}

interface TrendVectorProps {
  trendVector: TrendVector;
  className?: string;
}

const TrendVectorDisplay = ({ trendVector, className }: TrendVectorProps) => {
  const getStatusIcon = (status: string) => {
    if (status.includes('🟢')) return <Rocket className="h-5 w-5 text-green-600" />;
    if (status.includes('🟡')) return <Activity className="h-5 w-5 text-yellow-600" />;
    if (status.includes('⚪')) return <Minus className="h-5 w-5 text-gray-600" />;
    if (status.includes('🟠')) return <AlertTriangle className="h-5 w-5 text-orange-600" />;
    if (status.includes('🔴')) return <AlertCircle className="h-5 w-5 text-red-600" />;
    return <Target className="h-5 w-5 text-blue-600" />;
  };

  const getStatusColor = (level: string) => {
    switch (level) {
      case 'success': return 'border-green-200 bg-green-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'danger': return 'border-orange-200 bg-orange-50';
      case 'critical': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getProgressColor = (level: string) => {
    switch (level) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'danger': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDeltaIcon = (delta: number) => {
    if (delta > 5) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (delta < -5) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  const getDeltaColor = (delta: number) => {
    if (delta > 25) return 'text-green-700 bg-green-100';
    if (delta > 5) return 'text-yellow-700 bg-yellow-100';
    if (delta >= -5) return 'text-gray-700 bg-gray-100';
    if (delta >= -15) return 'text-orange-700 bg-orange-100';
    return 'text-red-700 bg-red-100';
  };

  return (
    <Card className={cn(
      "border-l-4 transition-all duration-300",
      getStatusColor(trendVector.urgency_level),
      className
    )}>
      <CardContent className="p-6">
        {/* Cabeçalho com Status Visual */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {getStatusIcon(trendVector.visual_status)}
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {trendVector.visual_status}
              </h3>
              <p className="text-sm text-gray-600">
                {trendVector.system_narrative}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <Badge 
              className={cn(
                "text-sm px-3 py-1",
                getDeltaColor(trendVector.delta_percentage)
              )}
            >
              {getDeltaIcon(trendVector.delta_percentage)}
              <span className="ml-1">
                {trendVector.delta_percentage > 0 ? '+' : ''}{trendVector.delta_percentage.toFixed(1)}%
              </span>
            </Badge>
            <p className="text-xs text-gray-500 mt-1">
              Força: {trendVector.trend_strength}
            </p>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Progresso Acumulado</span>
            <span className="text-sm font-bold text-gray-900">
              {trendVector.progress_percentage.toFixed(1)}%
            </span>
          </div>
          <Progress 
            value={trendVector.progress_percentage} 
            className={cn("h-2", getProgressColor(trendVector.urgency_level))}
          />
        </div>

        {/* Ação Sugerida */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <Target className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                Ação Sugerida
              </h4>
              <p className="text-sm text-gray-700">
                {trendVector.suggested_action}
              </p>
            </div>
          </div>
        </div>

        {/* Indicadores Adicionais */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Vetor calculado automaticamente</span>
            <span>Baseado em comparação P₀ vs P₋₁</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { TrendVectorDisplay };
