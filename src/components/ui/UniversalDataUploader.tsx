import { useState, useCallback } from "react";
import { useUniversalDataUpload } from "@/hooks/useUniversalDataUpload";
import { useDomainKPIs } from "@/hooks/useDomainKPIs";
import {
  Upload,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
  FileText,
  File,
} from "lucide-react";
import type { Domain } from "@/types/financial-parser";

interface UniversalDataUploaderProps {
  organizationId: string;
  onDataParsed?: (data: any) => void;
}

const DOMAIN_LABELS: Record<Domain | "unknown", string> = {
  finance: "Financeiro",
  commercial: "Comercial",
  marketing: "Marketing",
  operations: "Operacional",
  people: "Pessoas",
  strategy: "Estratégico",
  unknown: "Não detectado",
};

const DOMAIN_COLORS: Record<Domain | "unknown", string> = {
  finance: "bg-green-100 text-green-800",
  commercial: "bg-blue-100 text-blue-800",
  marketing: "bg-purple-100 text-purple-800",
  operations: "bg-orange-100 text-orange-800",
  people: "bg-pink-100 text-pink-800",
  strategy: "bg-yellow-100 text-yellow-800",
  unknown: "bg-gray-100 text-gray-800",
};

export function UniversalDataUploader({
  organizationId,
  onDataParsed,
}: UniversalDataUploaderProps) {
  const [dragActive, setDragActive] = useState(false);

  const {
    uploadFile,
    isLoading,
    error,
    lastParsedData,
    detectedDomain,
    clearError,
  } = useUniversalDataUpload({
    organizationId,
    onSuccess: (data) => {
      onDataParsed?.(data);
    },
  });

  const { kpis, getKPICategories } = useDomainKPIs(
    detectedDomain || "commercial",
  );

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const processFile = async (file: File) => {
    await uploadFile(file);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processFile(e.dataTransfer.files[0]);
      }
    },
    [uploadFile],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const getFileIcon = (fileName: string) => {
    if (
      fileName.endsWith(".csv") ||
      fileName.endsWith(".xlsx") ||
      fileName.endsWith(".xls")
    ) {
      return <FileSpreadsheet className="w-8 h-8 text-green-500" />;
    }
    if (
      fileName.endsWith(".pdf") ||
      fileName.endsWith(".doc") ||
      fileName.endsWith(".docx")
    ) {
      return <FileText className="w-8 h-8 text-red-500" />;
    }
    return <File className="w-8 h-8 text-blue-500" />;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Upload de Dados</h2>
        <p className="text-muted-foreground">
          Envie qualquer documento - detectamos automaticamente o domínio e
          mapeamos os KPIs
        </p>
      </div>

      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".csv,.xlsx,.xls,.txt,.pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="font-medium">
              Arraste um arquivo ou clique para selecionar
            </p>
            <p className="text-sm text-muted-foreground">
              CSV, Excel, TXT, PDF, Word - Detectamos automaticamente
            </p>
          </div>
        </label>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center gap-2 py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
          <span className="text-muted-foreground">Processando dados...</span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <div className="flex-1">
            <p className="font-medium text-red-700">Erro ao processar</p>
            <p className="text-sm text-red-600">{error.message}</p>
          </div>
          <button
            onClick={clearError}
            className="text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>
      )}

      {/* Success State */}
      {lastParsedData && (
        <div className="space-y-4">
          {/* Domain Badge */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Domínio detectado:
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${DOMAIN_COLORS[lastParsedData.domain]}`}
            >
              {DOMAIN_LABELS[lastParsedData.domain]}
            </span>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border">
              <p className="text-2xl font-bold">
                {lastParsedData.metadata.rowCount}
              </p>
              <p className="text-sm text-muted-foreground">Linhas</p>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <p className="text-2xl font-bold">
                {lastParsedData.headers.length}
              </p>
              <p className="text-sm text-muted-foreground">Colunas</p>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <p className="text-2xl font-bold">
                {lastParsedData.kpiMappings.length}
              </p>
              <p className="text-sm text-muted-foreground">KPIs Mapeados</p>
            </div>
          </div>

          {/* KPIs by Category */}
          {kpis.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">KPIs Identificados</h3>
              {getKPICategories().map((category) => (
                <div key={category} className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground capitalize">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {kpis
                      .filter((k) => k.category === category)
                      .map((kpi) => (
                        <span
                          key={kpi.kpiCode}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                        >
                          {kpi.kpiName}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Warnings */}
          {lastParsedData.warnings.length > 0 && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                {lastParsedData.warnings.join(", ")}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
