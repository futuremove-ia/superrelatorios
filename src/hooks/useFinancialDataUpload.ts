import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { createFinancialParser } from "@/services/financialDataParserService";
import type {
  ParsingResult,
  FinancialUploadOptions,
  FinancialMetric,
} from "@/types/financial-parser";

interface UseFinancialDataUploadOptions {
  organizationId: string;
  userId: string;
  onSuccess?: (result: ParsingResult, metrics: FinancialMetric[]) => void;
  onError?: (error: Error) => void;
  onProgress?: (progress: number) => void;
}

interface UseFinancialDataUploadReturn {
  upload: (file: File) => Promise<ParsingResult>;
  uploadText: (text: string) => Promise<ParsingResult>;
  isUploading: boolean;
  progress: number;
  error: Error | null;
  reset: () => void;
}

export function useFinancialDataUpload(
  options: UseFinancialDataUploadOptions,
): UseFinancialDataUploadReturn {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const mutation = useMutation({
    mutationFn: async (input: {
      file?: File;
      text?: string;
    }): Promise<ParsingResult> => {
      const parserOptions: FinancialUploadOptions = {
        organizationId: options.organizationId,
        userId: options.userId,
        autoMapColumns: true,
        onProgress: (p) => {
          setProgress(p);
          options.onProgress?.(p);
        },
      };

      const parser = createFinancialParser(parserOptions);

      if (input.file) {
        return parser.parse(input.file);
      } else if (input.text) {
        return parser.parse(input.text);
      }

      throw new Error("Provide either a file or text input");
    },
    onSuccess: (result) => {
      setProgress(100);
      if (result.success && result.metrics) {
        options.onSuccess?.(result, result.metrics);
      }
      setError(null);
    },
    onError: (err) => {
      const error = err instanceof Error ? err : new Error("Upload failed");
      setError(error);
      options.onError?.(error);
    },
  });

  const upload = useCallback(
    async (file: File): Promise<ParsingResult> => {
      setError(null);
      setProgress(0);
      return mutation.mutateAsync({ file });
    },
    [mutation],
  );

  const uploadText = useCallback(
    async (text: string): Promise<ParsingResult> => {
      setError(null);
      setProgress(0);
      return mutation.mutateAsync({ text });
    },
    [mutation],
  );

  const reset = useCallback(() => {
    setProgress(0);
    setError(null);
  }, []);

  return {
    upload,
    uploadText,
    isUploading: mutation.isPending,
    progress,
    error: mutation.error,
    reset,
  };
}

export function useFinancialDataImport() {
  const [importing, setImporting] = useState(false);
  const [importProgress, setImportProgress] = useState(0);
  const [importError, setImportError] = useState<Error | null>(null);
  const [importResult, setImportResult] = useState<ParsingResult | null>(null);

  const importFile = useCallback(
    async (file: File, organizationId: string, userId: string) => {
      setImporting(true);
      setImportError(null);
      setImportProgress(0);

      try {
        const parser = createFinancialParser({
          organizationId,
          userId,
          autoMapColumns: true,
          onProgress: setImportProgress,
        });

        const result = await parser.parse(file);
        setImportResult(result);

        if (!result.success) {
          throw new Error(result.errors[0]?.message || "Import failed");
        }

        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Import failed");
        setImportError(error);
        throw error;
      } finally {
        setImporting(false);
      }
    },
    [],
  );

  const importText = useCallback(
    async (text: string, organizationId: string, userId: string) => {
      setImporting(true);
      setImportError(null);
      setImportProgress(0);

      try {
        const parser = createFinancialParser({
          organizationId,
          userId,
          autoMapColumns: true,
          onProgress: setImportProgress,
        });

        const result = await parser.parse(text);
        setImportResult(result);

        if (!result.success) {
          throw new Error(result.errors[0]?.message || "Import failed");
        }

        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Import failed");
        setImportError(error);
        throw error;
      } finally {
        setImporting(false);
      }
    },
    [],
  );

  const resetImport = useCallback(() => {
    setImporting(false);
    setImportProgress(0);
    setImportError(null);
    setImportResult(null);
  }, []);

  return {
    importFile,
    importText,
    importing,
    importProgress,
    importError,
    importResult,
    resetImport,
  };
}
