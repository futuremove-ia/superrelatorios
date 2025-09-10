import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  title: string;
  description?: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const StepIndicator = ({ steps, currentStep, className }: StepIndicatorProps) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Mobile: Horizontal Progress Bar */}
      <div className="block sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-foreground">
            Passo {currentStep} de {steps.length}
          </p>
          <p className="text-xs text-muted-foreground">
            {steps[currentStep - 1]?.title}
          </p>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Vertical Step List */}
      <div className="hidden sm:block">
        <nav aria-label="Progress">
          <ol className="space-y-4">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isUpcoming = stepNumber > currentStep;

              return (
                <li key={step.title} className="flex items-start">
                  <div className="flex items-center">
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-200",
                        {
                          "border-primary bg-primary text-primary-foreground": isCompleted,
                          "border-primary bg-background text-primary ring-2 ring-primary ring-offset-2": isCurrent,
                          "border-muted-foreground bg-background text-muted-foreground": isUpcoming,
                        }
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <span className="text-sm font-medium">{stepNumber}</span>
                      )}
                    </div>
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <p
                      className={cn(
                        "text-sm font-medium transition-colors duration-200",
                        {
                          "text-primary": isCompleted || isCurrent,
                          "text-muted-foreground": isUpcoming,
                        }
                      )}
                    >
                      {step.title}
                    </p>
                    {step.description && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {step.description}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export { StepIndicator };