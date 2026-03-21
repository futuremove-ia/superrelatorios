import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Target, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import { useStrategyTranslation } from '@/hooks/useStrategyTranslation';

interface LeverCardProps {
  lever: {
    code: string;
    title: string;
    description: string;
    category: string;
    expected_impact: string;
    impact_level: 'high' | 'medium' | 'low';
    quick_win: boolean;
    implementation_complexity: 'high' | 'medium' | 'low';
    typical_timeframe_days: number;
  };
  onAccept?: () => void;
  onDismiss?: () => void;
}

export const LeverCard: React.FC<LeverCardProps> = ({ lever, onAccept, onDismiss }) => {
  const { t } = useStrategyTranslation();
  
  const getImpactColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  const getComplexityColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{lever.title}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className={getImpactColor(lever.impact_level)}>
              {lever.impact_level}
            </Badge>
            {lever.quick_win && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Zap className="w-3 h-3" />
                Quick Win
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          {lever.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Categoria</span>
            <span className="text-gray-500">{lever.category}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Impacto Esperado</span>
            <span className="text-gray-700">{lever.expected_impact}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Complexidade</span>
            <div className="flex items-center gap-1">
              <div className={`px-2 py-1 rounded text-xs font-medium ${getComplexityColor(lever.implementation_complexity)}`}>
                {lever.implementation_complexity}
              </div>
              <span className="text-gray-500 text-xs">
                {lever.typical_timeframe_days} dias
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Resultado Esperado</h4>
          <p className="text-sm text-gray-700">{lever.expected_impact}</p>
        </div>
        
        <div className="flex gap-2 pt-4">
          {onAccept && (
            <Button 
              onClick={onAccept}
              className="flex-1"
              size="sm"
            >
              <Target className="w-4 h-4 mr-2" />
              Aceitar Alavanca
            </Button>
          )}
          
          {onDismiss && (
            <Button 
              variant="outline"
              onClick={onDismiss}
              className="flex-1"
              size="sm"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Ignorar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
