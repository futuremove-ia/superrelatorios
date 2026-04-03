import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  createFinancialDocumentPipeline,
  type FinancialDocumentPipelineOptions,
  type FinancialDocumentPipelineResult,
} from "@/services/financialDocumentPipeline";
import type { SourceFileType } from "@/types/financial-parser";

interface UseFinancialDocumentUploadOptions {
  organizationId: string;
  userId: string;
  strategy?: "auto" | "hi_res" | "fast";
  onSuccess?: (result: FinancialDocumentPipelineResult) => void;
  onError?: (error: Error) => void;
  onProgress?: (progress: number, message: string) => void;
}

interface UseFinancialDocumentUploadReturn {
  upload: (file: File) => Promise<FinancialDocumentPipelineResult>;
  processStorageFile: (
    storagePath: string,
  ) => Promise<FinancialDocumentPipelineResult>;
  isProcessing: boolean;
  progress: number;
  error: Error | null;
  reset: () => void;
}

export function useFinancialDocumentUpload(
  options: UseFinancialDocumentUploadOptions,
): UseFinancialDocumentUploadReturn {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const mutation = useMutation({
    mutationFn: async (input: {
      file?: File;
      storagePath?: string;
    }): Promise<FinancialDocumentPipelineResult> => {
      const pipelineOptions: FinancialDocumentPipelineOptions = {
        organizationId: options.organizationId,
        userId: options.userId,
        strategy: options.strategy || "auto",
        onProgress: (p, m) => {
          setProgress(p);
          options.onProgress?.(p, m);
        },
      };

      const pipeline = createFinancialDocumentPipeline(pipelineOptions);

      if (input.file) {
        return pipeline.processFile(input.file);
      } else if (input.storagePath) {
        return pipeline.processStorageFile(input.storagePath);
      }

      throw new Error("Provide either a file or storage path");
    },
    onSuccess: (result) => {
      setProgress(100);
      options.onSuccess?.(result);
      setError(null);
    },
    onError: (err) => {
      const error = err instanceof Error ? err : new Error("Processing failed");
      setError(error);
      options.onError?.(error);
    },
  });

  const upload = useCallback(
    async (file: File): Promise<FinancialDocumentPipelineResult> => {
      setError(null);
      setProgress(0);
      return mutation.mutateAsync({ file });
    },
    [mutation],
  );

  const processStorageFile = useCallback(
    async (storagePath: string): Promise<FinancialDocumentPipelineResult> => {
      setError(null);
      setProgress(0);
      return mutation.mutateAsync({ storagePath });
    },
    [mutation],
  );

  const reset = useCallback(() => {
    setProgress(0);
    setError(null);
  }, []);

  return {
    upload,
    processStorageFile,
    isProcessing: mutation.isPending,
    progress,
    error: mutation.error,
    reset,
  };
}

export function validateFileType(file: File): {
  valid: boolean;
  type?: SourceFileType;
  error?: string;
} {
  const extension = "." + file.name.split(".").pop()?.toLowerCase();
  const supportedExtensions = [
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".csv",
    ".txt",
    ".eml",
    ".msg",
    ".html",
    ".json",
    ".png",
    ".jpg",
    ".jpeg",
    ".tiff",
    ".bmp",
  ];

  if (!supportedExtensions.includes(extension)) {
    return {
      valid: false,
      error: `Tipo de arquivo não suportado: ${extension}. Arquivos permitidos: ${supportedExtensions.join(", ")}`,
    };
  }

  const MAX_FILE_SIZE = 50 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `Arquivo muito grande. Máximo: 50MB`,
    };
  }

  return { valid: true, type: extension.slice(1) as SourceFileType };
}
