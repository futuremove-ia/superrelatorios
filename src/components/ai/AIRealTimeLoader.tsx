import { useState, useEffect } from "react";
import { Brain, Sparkles, CheckCircle2, Loader2, Search, Zap, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AIRealTimeLoaderProps {
  isProcessing: boolean;
  status?: 'analyzing' | 'generating' | 'structuring' | 'finalizing' | 'completed' | 'error';
  progress?: number;
  currentStep?: string;
  onComplete?: () => void;
  error?: string;
}

const realTimeSteps = [
  { 
    id: 'analyzing', 
    text: "Analisando estrutura dos dados...", 
    icon: Search,
    description: "Identificando padrões e métricas relevantes"
  },
  { 
    id: 'generating', 
    text: "Gerando insights estratégicos...", 
    icon: Zap,
    description: "Aplicando biblioteca de KPIs e desafios"
  },
  { 
    id: 'structuring', 
    text: "Estruturando visualizações...", 
    icon: TrendingUp,
    description: "Criando blocos de análise e dashboards"
  },
  { 
    id: 'finalizing', 
    text: "Finalizando relatório inteligente...", 
    icon: Brain,
    description: "Otimizando layout e formatação"
  },
  { 
    id: 'completed', 
    text: "Análise concluída com sucesso!", 
    icon: CheckCircle2,
    description: "Seu relatório está pronto"
  }
];

export const AIRealTimeLoader = ({ 
  isProcessing, 
  status = 'analyzing',
  progress = 0,
  currentStep,
  error,
  onComplete 
}: AIRealTimeLoaderProps) => {
  const [currentStatus, setCurrentStatus] = useState<'analyzing' | 'generating' | 'structuring' | 'finalizing' | 'completed' | 'error'>('analyzing');
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (!isProcessing) {
      setCurrentStatus('completed');
      setCurrentProgress(100);
      onComplete?.();
      return;
    }

    // Atualizar status baseado no prop
    if (status !== currentStatus) {
      setCurrentStatus(status);
    }

    // Simular progresso baseado no status
    const statusProgress = {
      analyzing: 20,
      generating: 40,
      structuring: 70,
      finalizing: 90,
      completed: 100,
      error: 0
    };

    setCurrentProgress(progress || statusProgress[status] || 0);
  }, [isProcessing, status, progress, onComplete, currentStatus]);

  if (!isProcessing && currentStatus !== 'completed' && currentStatus !== 'error') {
    return null;
  }

  if (currentStatus === 'error') {
    return (
      <Card className="border-destructive/20 bg-destructive/5 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">Erro na Análise</span>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              {error || "Ocorreu um erro ao processar sua análise. Por favor, tente novamente."}
            </p>
            <button 
              onClick={onComplete}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentStepData = realTimeSteps.find(step => step.id === currentStatus) || realTimeSteps[0];
  const CurrentIcon = currentStepData.icon;

  return (
    <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden animate-in fade-in zoom-in duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Icon Animation */}
          <div className="relative">
            <div className={cn(
              "absolute inset-0 rounded-full transition-all duration-500",
              currentStatus === 'completed' 
                ? "bg-green-500/20 animate-pulse" 
                : "bg-primary/20 animate-ping"
            )} />
            <div className={cn(
              "relative rounded-full p-4 transition-all duration-500",
              currentStatus === 'completed' 
                ? "bg-green-500 text-white" 
                : "bg-primary text-primary-foreground"
            )}>
              {currentStatus === 'completed' ? (
                <CheckCircle2 className="h-6 w-6" />
              ) : (
                <CurrentIcon className="h-6 w-6" />
              )}
            </div>
          </div>

          {/* Status Text */}
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-foreground">
              {currentStepData.text}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {currentStepData.description}
            </p>
            {currentStep && (
              <p className="text-xs text-primary font-medium">
                {currentStep}
              </p>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progresso</span>
              <span>{currentProgress}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div 
                className={cn(
                  "h-full transition-all duration-500 ease-out",
                  currentStatus === 'completed' 
                    ? "bg-green-500" 
                    : "bg-primary"
                )}
                style={{ width: `${currentProgress}%` }}
              />
            </div>
          </div>

          {/* Steps Indicator */}
          <div className="flex flex-wrap justify-center gap-2 max-w-md">
            {realTimeSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = step.id === currentStatus;
              const isCompleted = realTimeSteps.findIndex(s => s.id === currentStatus) > index;
              
              return (
                <div 
                  key={step.id}
                  className={cn(
                    "flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-all duration-300",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : isCompleted 
                        ? "bg-green-500/20 text-green-600" 
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  <StepIcon className="h-3 w-3" />
                  <span className="hidden sm:inline">{step.text.split('...')[0]}</span>
                </div>
              );
            })}
          </div>

          {/* Completion Message */}
          {currentStatus === 'completed' && (
            <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom duration-300">
              <div className="flex items-center space-x-2 text-green-600">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Análise Concluída!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Seu relatório inteligente está pronto para visualização
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRealTimeLoader;
