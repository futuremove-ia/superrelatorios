"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon, Upload, FileText, CreditCard, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface Suggestion {
  id: string;
  type: "file" | "data" | "action";
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

interface SuggestionBannerProps {
  suggestions: Suggestion[];
  className?: string;
}

const TYPE_ICONS: Record<string, LucideIcon> = {
  file: Upload,
  data: FileText,
  action: Target,
};

const TYPE_COLORS: Record<string, string> = {
  file: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300",
  data: "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300",
  action:
    "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
};

export function SuggestionBanner({
  suggestions,
  className,
}: SuggestionBannerProps) {
  if (suggestions.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)}>
      {suggestions.map((suggestion) => {
        const Icon = TYPE_ICONS[suggestion.type] || FileText;
        const colorClass = TYPE_COLORS[suggestion.type] || TYPE_COLORS.data;

        return (
          <div
            key={suggestion.id}
            className={cn(
              "flex items-start gap-3 p-3 rounded-lg border",
              colorClass,
            )}
          >
            <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm">{suggestion.message}</p>
              {suggestion.actionLabel && suggestion.onAction && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={suggestion.onAction}
                  className="mt-2 h-7 text-xs"
                >
                  {suggestion.actionLabel}
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const DEFAULT_SUGGESTIONS: Suggestion[] = [
  {
    id: "bank-statement",
    type: "file",
    message: "Carregue extrato bancário para calcular RUNWAY com precisão",
    actionLabel: "Importar Extrato",
    onAction: () => {},
  },
  {
    id: "revenue-data",
    type: "data",
    message: "Adicione dados de receita para calcular Margem de Lucro",
    actionLabel: "Adicionar Dados",
    onAction: () => {},
  },
];
