import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  documentPipeline,
  type PipelineResult,
  type PipelineProgress,
} from "@/services/documentPipeline";

interface UseDocumentPipelineOptions {
  onSuccess?: (result: PipelineResult) => void;
  onError?: (error: Error) => void;
  onProgress?: (progress: PipelineProgress) => void;
}

export function useDocumentPipeline(options?: UseDocumentPipelineOptions) {
  const [progress, setProgress] = useState<PipelineProgress | null>(null);

  const mutation = useMutation({
    mutationFn: async ({
      file,
      userId,
      organizationId,
    }: {
      file?: File;
      text?: string;
      userId: string;
      organizationId: string;
    }) => {
      if (file) {
        return documentPipeline.processDocument(
          file,
          userId,
          organizationId,
          (p) => {
            setProgress(p);
            options?.onProgress?.(p);
          },
        );
      } else if (options) {
        throw new Error("File or text required");
      }
      throw new Error("No input provided");
    },
    onSuccess: (result) => {
      setProgress(null);
      options?.onSuccess?.(result);
    },
    onError: (error) => {
      setProgress(null);
      options?.onError?.(error as Error);
    },
  });

  const processFile = useCallback(
    (file: File, userId: string, organizationId: string) => {
      mutation.mutate({ file, userId, organizationId });
    },
    [mutation],
  );

  return {
    processFile,
    progress,
    isProcessing: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    result: mutation.data,
    reset: mutation.reset,
  };
}

export function useTextPipeline(options?: UseDocumentPipelineOptions) {
  const [progress, setProgress] = useState<PipelineProgress | null>(null);

  const mutation = useMutation({
    mutationFn: async ({ text, userId }: { text: string; userId: string }) => {
      return documentPipeline.processTextInput(text, userId, (p) => {
        setProgress(p);
        options?.onProgress?.(p);
      });
    },
    onSuccess: (result) => {
      setProgress(null);
      options?.onSuccess?.(result);
    },
    onError: (error) => {
      setProgress(null);
      options?.onError?.(error as Error);
    },
  });

  const processText = useCallback(
    (text: string, userId: string) => {
      mutation.mutate({ text, userId });
    },
    [mutation],
  );

  return {
    processText,
    progress,
    isProcessing: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    result: mutation.data,
    reset: mutation.reset,
  };
}
