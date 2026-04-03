import { useState, useCallback } from "react";
import {
  createUniversalParser,
  type UniversalParserService,
} from "@/services/universalParserService";
import { getBlueprintByOrganization } from "@/services/blueprintService";
import type { UniversalParsedData, Domain } from "@/types/financial-parser";

interface UseUniversalDataUploadOptions {
  organizationId: string;
  onSuccess?: (data: UniversalParsedData) => void;
  onError?: (error: Error) => void;
}

interface UseUniversalDataUploadResult {
  uploadData: (
    headers: string[],
    rows: Record<string, any>[],
    documentType?: string,
  ) => Promise<UniversalParsedData | null>;
  uploadText: (text: string) => Promise<UniversalParsedData | null>;
  uploadCSV: (csvText: string) => Promise<UniversalParsedData | null>;
  uploadFile: (file: File) => Promise<UniversalParsedData | null>;
  isLoading: boolean;
  error: Error | null;
  lastParsedData: UniversalParsedData | null;
  detectedDomain: Domain | null;
  clearError: () => void;
}

export function useUniversalDataUpload(
  options: UseUniversalDataUploadOptions,
): UseUniversalDataUploadResult {
  const { organizationId, onSuccess, onError } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastParsedData, setLastParsedData] =
    useState<UniversalParsedData | null>(null);
  const [detectedDomain, setDetectedDomain] = useState<Domain | null>(null);

  const parser = createUniversalParser({ autoMapColumns: true });

  const processResult = useCallback(
    (result: Awaited<ReturnType<typeof parser.parseData>>) => {
      if (result.success && result.data) {
        setLastParsedData(result.data);
        setDetectedDomain(result.data.domain);
        onSuccess?.(result.data);
        return result.data;
      } else {
        const err = new Error(result.errors.join(", "));
        setError(err);
        onError?.(err);
        return null;
      }
    },
    [onSuccess, onError],
  );

  const uploadData = useCallback(
    async (
      headers: string[],
      rows: Record<string, any>[],
      documentType?: string,
    ): Promise<UniversalParsedData | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const blueprint = await getBlueprintByOrganization(organizationId);
        const result = await parser.parseData(
          { headers, rows, documentType: documentType as any },
          blueprint || undefined,
        );
        return processResult(result);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [organizationId, parser, processResult, onError],
  );

  const uploadText = useCallback(
    async (text: string): Promise<UniversalParsedData | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const blueprint = await getBlueprintByOrganization(organizationId);
        const result = await parser.parseTextInput(
          text,
          blueprint || undefined,
        );
        return processResult(result);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [organizationId, parser, processResult, onError],
  );

  const uploadCSV = useCallback(
    async (csvText: string): Promise<UniversalParsedData | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const blueprint = await getBlueprintByOrganization(organizationId);
        const result = await parser.parseCSVInput(
          csvText,
          blueprint || undefined,
        );
        return processResult(result);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [organizationId, parser, processResult, onError],
  );

  const uploadFile = useCallback(
    async (file: File): Promise<UniversalParsedData | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const text = await file.text();
        const isCSV = file.name.endsWith(".csv");
        const isTSV = file.name.endsWith(".tsv");

        let result;
        if (isCSV || isTSV) {
          const blueprint = await getBlueprintByOrganization(organizationId);
          result = await parser.parseCSVInput(text, blueprint || undefined);
        } else {
          const blueprint = await getBlueprintByOrganization(organizationId);
          result = await parser.parseTextInput(text, blueprint || undefined);
        }

        return processResult(result);
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        onError?.(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [organizationId, parser, processResult, onError],
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    uploadData,
    uploadText,
    uploadCSV,
    uploadFile,
    isLoading,
    error,
    lastParsedData,
    detectedDomain,
    clearError,
  };
}
