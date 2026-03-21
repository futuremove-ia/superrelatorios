import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  Clock,
  ChevronRight,
  BarChart3,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StrategicFocus {
  id: string;
  challenge_code: string;
  challenge_title: string;
  goal_code: string;

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
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "sticky top-0 z-40 shadow-lg transition-all duration-300",
      `border-l-4 border-l-${strategicFocus.urgency_level === 'danger' ? 'red' : strategicFocus.urgency_level === 'warning' ? 'yellow' : 'green'}-500`,
      className
    )}>
      <CardContent className="p-4">
        {/* Cabeçalho Principal */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              strategicFocus.urgency_level === 'danger' ? 'bg-red-100' :
              strategicFocus.urgency_level === 'warning' ? 'bg-yellow-100' : 'bg-green-100'
            )}>
              {getUrgencyIcon(strategicFocus.urgency_level)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-gray-900">
                  {strategicFocus.goal_title}
                </p>
                <Badge 
                  variant="secondary" 
                  className={cn(
                    "text-xs",
                    strategicFocus.urgency_level === 'danger' ? 'bg-red-100 text-red-700' :
                    strategicFocus.urgency_level === 'warning' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-green-100 text-green-700'
                  )}
                >
                  {getUrgencyText(strategicFocus.urgency_level)}
                </Badge>
              </div>
              <p className="text-xs text-gray-600">
                Desafio: {strategicFocus.challenge_title}
              </p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onViewDetails}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Barra de Progresso */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-700">Progresso</span>
            <span className="text-xs font-bold text-gray-900">
              {strategicFocus.progress_percentage.toFixed(1)}%
            </span>
          </div>
          <Progress 
            value={strategicFocus.progress_percentage} 
            className={cn(
              "h-2",
              strategicFocus.urgency_level === 'danger' ? '[&>div]:bg-red-500' :
              strategicFocus.urgency_level === 'warning' ? '[&>div]:bg-yellow-500' : 
              '[&>div]:bg-green-500'
            )}
          />
        </div>

        {/* Indicadores Rápidos */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-600">
                Restam {formatDaysRemaining(strategicFocus.days_remaining)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart3 className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-600">
                Código: {strategicFocus.challenge_code}
              </span>
            </div>
          </div>
          
          {strategicFocus.urgency_level === 'danger' && (
            <Button 
              size="sm" 
              variant="destructive"
              className="text-xs h-7"
            >
              <Zap className="h-3 w-3 mr-1" />
              Ação Imediata
            </Button>
          )}
        </div>

        {/* Indicador de Vetor de Tendência */}
        {strategicFocus.trend_vector && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-lg">{strategicFocus.trend_vector.visual_status.split(' ')[0]}</span>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-700">
                  {strategicFocus.trend_vector.visual_status}
                </p>
                <p className="text-xs text-gray-600">
                  {strategicFocus.trend_vector.system_narrative}
                </p>
              </div>
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs",
                  strategicFocus.urgency_level === 'critical' ? 'bg-red-100 text-red-700' :
                  strategicFocus.urgency_level === 'danger' ? 'bg-orange-100 text-orange-700' :
                  strategicFocus.urgency_level === 'warning' ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-green-100 text-green-700'
                )}
              >
                {strategicFocus.trend_vector.delta_percentage > 0 ? '+' : ''}{strategicFocus.trend_vector.delta_percentage.toFixed(1)}%
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export { StrategicFocusBar };
