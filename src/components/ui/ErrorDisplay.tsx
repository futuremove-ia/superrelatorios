import * as React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
  onReport?: () => void;
}

export function ErrorDisplay({
  message = "Algo deu errado. Por favor, tente novamente.",
  onRetry,
  onReport,
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-destructive/10 p-4 rounded-full mb-4">
        <AlertTriangle className="h-10 w-10 text-destructive" />
      </div>

      <p className="text-muted-foreground mb-6 max-w-md">{message}</p>

      <div className="flex gap-3">
        {onRetry && (
          <Button onClick={onRetry} size="lg">
            <RefreshCw className="mr-2 h-4 w-4" />
            Tentar Novamente
          </Button>
        )}
        {onReport && (
          <Button variant="outline" onClick={onReport}>
            Reportar Erro
          </Button>
        )}
      </div>
    </div>
  );
}
