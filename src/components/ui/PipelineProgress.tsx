"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

export type PipelineStage =
  | "queued"
  | "extracting"
  | "parsing"
  | "mapping"
  | "completed";

interface PipelineProgressProps {
  currentStage: PipelineStage;
  progress?: number;
  className?: string;
}

const STAGES: { key: PipelineStage; label: string; description: string }[] = [
  { key: "queued", label: "Na Fila", description: "Aguardando processamento" },
  {
    key: "extracting",
    label: "Extraindo",
    description: "Lendo dados do documento",
  },
  {
    key: "parsing",
    label: "Analisando",
    description: "Processando informações",
  },
  { key: "mapping", label: "Mapeando", description: "Organizando resultados" },
  {
    key: "completed",
    label: "Concluído",
    description: "Pronto para visualização",
  },
];

export function PipelineProgress({
  currentStage,
  progress,
  className,
}: PipelineProgressProps) {
  const currentIndex = STAGES.findIndex((s) => s.key === currentStage);

  const getStageStatus = (index: number) => {
    if (index < currentIndex) return "completed";
    if (index === currentIndex) return "current";
    return "pending";
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="space-y-2">
        {STAGES.map((stage, index) => {
          const status = getStageStatus(index);
          const isActive = status === "current";
          const isCompleted = status === "completed";

          return (
            <div
              key={stage.key}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-colors",
                isActive && "bg-blue-50 dark:bg-blue-950/20",
                isCompleted && "bg-green-50 dark:bg-green-950/20",
              )}
            >
              {isActive ? (
                <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
              ) : isCompleted ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground/50" />
              )}
              <div className="flex-1">
                <p
                  className={cn(
                    "text-sm font-medium",
                    isActive && "text-blue-900 dark:text-blue-100",
                    isCompleted && "text-green-900 dark:text-green-100",
                    !isActive && !isCompleted && "text-muted-foreground",
                  )}
                >
                  {stage.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {isActive && progress !== undefined
                    ? `${stage.description} (${Math.round(progress)}%)`
                    : stage.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {progress !== undefined && currentStage !== "completed" && (
        <div className="space-y-1">
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-right text-muted-foreground">
            {Math.round(progress)}%
          </p>
        </div>
      )}
    </div>
  );
}
