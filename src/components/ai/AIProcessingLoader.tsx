import { useState, useEffect } from "react";
import { Brain, Sparkles, CheckCircle2, Loader2, Search, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AIProcessingLoaderProps {
  isProcessing: boolean;
  onComplete?: () => void;
}

const steps = [
  { id: 1, text: "Lendo e estruturando dados brutos...", icon: Search },
  { id: 2, text: "Cruzando tendências e métricas...", icon: Zap },
  { id: 3, text: "Identificando gatilhos de crescimento...", icon: TrendingUp },
  { id: 4, text: "Redigindo recomendações estratégicas...", icon: Brain },
  { id: 5, text: "Finalizando design do relatório...", icon: Sparkles },
];

export const AIProcessingLoader = ({ isProcessing }: AIProcessingLoaderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!isProcessing) {
      setCurrentStep(0);
      setCompletedSteps([]);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          setCompletedSteps((prevCompleted) => [...prevCompleted, steps[prev].id]);
          return prev + 1;
        }
        return prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isProcessing]);

  if (!isProcessing) return null;

  return (
    <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden animate-in fade-in zoom-in duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative bg-primary rounded-full p-4">
              <Brain className="h-8 w-8 text-white animate-pulse" />
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold text-foreground">A Magia está Acontecendo</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Nossa inteligência está transformando seus dados em um relatório profissional de elite.
            </p>
          </div>

          <div className="w-full space-y-4 max-w-sm">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = index === currentStep;

              return (
                <div 
                  key={step.id} 
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isActive ? "translate-x-2" : isCompleted ? "opacity-60" : "opacity-30"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-success fill-success/10" />
                  ) : isActive ? (
                    <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  ) : (
                    <step.icon className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className={`text-sm ${isActive ? "font-bold text-primary" : "text-muted-foreground"}`}>
                    {step.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-1000 ease-out" 
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
