import { useCallback } from "react";

interface ErrorHandlerOptions {
  onError?: (error: Error) => void;
  context?: string;
}

export function useErrorHandler(options?: ErrorHandlerOptions) {
  const handleError = useCallback(
    (error: unknown, context?: string) => {
      const errorObj =
        error instanceof Error
          ? error
          : new Error(typeof error === "string" ? error : "Unknown error");

      const errorContext = context || options?.context || "unknown";
      console.error(`[ErrorHandler] ${errorContext}:`, errorObj);

      options?.onError?.(errorObj);
      return errorObj;
    },
    [options],
  );

  const logError = useCallback((message: string, data?: unknown) => {
    console.error(`[ErrorHandler] ${message}`, data || "");
  }, []);

  return { handleError, logError };
}
