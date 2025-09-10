import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AISuggestionProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  variant?: "default" | "compact";
  className?: string;
}

const AISuggestion = ({
  title,
  description,
  actionLabel = "Aplicar Sugestão",
  onAction,
  onDismiss,
  variant = "default",
  className
}: AISuggestionProps) => {
  if (variant === "compact") {
    return (
      <div className={cn(
        "flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800",
        className
      )}>
        <div className="flex-shrink-0 mt-0.5">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">{title}</p>
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">{description}</p>
          {onAction && (
            <Button
              size="sm"
              variant="outline"
              onClick={onAction}
              className="mt-2 h-7 text-xs border-blue-300 text-blue-700 hover:bg-blue-100 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20"
            >
              {actionLabel}
            </Button>
          )}
        </div>
        {onDismiss && (
          <Button
            size="sm"
            variant="ghost"
            onClick={onDismiss}
            className="h-6 w-6 p-0 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <Card className={cn("border-blue-200 dark:border-blue-800", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 mt-1">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">
                {title}
              </CardTitle>
              <Badge variant="secondary" className="mt-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                IA
              </Badge>
            </div>
          </div>
          {onDismiss && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onDismiss}
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
          {description}
        </p>
        {onAction && (
          <Button
            size="sm"
            onClick={onAction}
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export { AISuggestion };