"use client";

import { useState, useCallback, useRef } from "react";
import {
  Upload,
  FileText,
  X,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import {
  useDocumentPipeline,
  useTextPipeline,
} from "@/hooks/useDocumentPipeline";
import {
  parseFile,
  parseTextInput,
  type ParsedFileData,
} from "@/services/fileParserService";
import { Button } from "./button";
import { Progress } from "./progress";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./tooltip";
import { cn } from "@/lib/utils";

interface UploadedFile {
  id: string;
  file?: File;
  name: string;
  size: number;
  status: "pending" | "processing" | "success" | "error";
  parsedData?: ParsedFileData;
  error?: string;
}

interface DataUploaderProps {
  userId: string;
  organizationId?: string;
  onSuccess?: (data: ParsedFileData[]) => void;
  className?: string;
}

const SUPPORTED_FORMATS = ["PDF", "CSV", "XLSX", "TXT"];
const MAX_FILE_SIZE = 50 * 1024 * 1024;

export function DataUploader({
  userId,
  organizationId,
  onSuccess,
  className,
}: DataUploaderProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [textInput, setTextInput] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [showTextPreview, setShowTextPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileProcess = useDocumentPipeline({
    onSuccess: (result) => {
      const currentFiles = [...uploadedFiles];
      const processedFiles = currentFiles.map((f) =>
        f.status === "processing" ? { ...f, status: "success" as const } : f,
      );
      setUploadedFiles(processedFiles);
      const allData = processedFiles
        .filter((f) => f.status === "success" && f.parsedData)
        .map((f) => f.parsedData!) as ParsedFileData[];
      if (allData.length > 0) onSuccess?.(allData);
    },
    onError: (error) => {
      setUploadedFiles((prev) =>
        prev.map((f) =>
          f.status === "processing"
            ? { ...f, status: "error", error: error.message }
            : f,
        ),
      );
    },
  });

  const handleTextProcess = useTextPipeline({
    onSuccess: (result) => {
      setUploadedFiles((prev) =>
        prev.map((f) =>
          f.status === "processing" && f.name === "Texto digitado"
            ? {
                ...f,
                status: "success",
                parsedData: result as unknown as ParsedFileData,
              }
            : f,
        ),
      );
      onSuccess?.([result as unknown as ParsedFileData]);
    },
    onError: (error) => {
      setUploadedFiles((prev) =>
        prev.map((f) =>
          f.status === "processing" && f.name === "Texto digitado"
            ? { ...f, status: "error", error: error.message }
            : f,
        ),
      );
    },
  });

  const validateFile = (file: File): string | null => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (!extension || !SUPPORTED_FORMATS.includes(extension.toUpperCase())) {
      return `Formato não suportado. Use: ${SUPPORTED_FORMATS.join(", ")}`;
    }
    if (file.size > MAX_FILE_SIZE) {
      return "Arquivo muito grande. Máximo: 50MB";
    }
    return null;
  };

  const processFile = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      const errorFile: UploadedFile = {
        id: `file-${Date.now()}-${Math.random()}`,
        file,
        name: file.name,
        size: file.size,
        status: "error",
        error: validationError,
      };
      setUploadedFiles((prev) => [...prev, errorFile]);
      return;
    }

    const fileId = `file-${Date.now()}-${Math.random()}`;
    const newFile: UploadedFile = {
      id: fileId,
      file,
      name: file.name,
      size: file.size,
      status: "processing",
    };
    setUploadedFiles((prev) => [...prev, newFile]);

    try {
      const parsedData = await parseFile(file);
      if (organizationId) {
        handleFileProcess.processFile(file, userId, organizationId);
      } else {
        setUploadedFiles((prev) =>
          prev.map((f) =>
            f.id === fileId
              ? { ...f, status: "success", parsedData: parsedData }
              : f,
          ),
        );
        onSuccess?.([parsedData]);
      }
    } catch (error) {
      setUploadedFiles((prev) =>
        prev.map((f) =>
          f.id === fileId
            ? { ...f, status: "error", error: (error as Error).message }
            : f,
        ),
      );
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const files = Array.from(e.dataTransfer.files);
      files.forEach(processFile);
    },
    [organizationId],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      files.forEach(processFile);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [organizationId],
  );

  const handleTextSubmit = useCallback(() => {
    if (!textInput.trim()) return;

    const textFile: UploadedFile = {
      id: `text-${Date.now()}`,
      name: "Texto digitado",
      size: textInput.length,
      status: "processing",
    };
    setUploadedFiles((prev) => [...prev, textFile]);

    const parsedData = parseTextInput(textInput);
    setUploadedFiles((prev) =>
      prev.map((f) =>
        f.id === textFile.id
          ? { ...f, status: "success", parsedData: parsedData }
          : f,
      ),
    );
    onSuccess?.([parsedData]);
    setTextInput("");
    setShowTextPreview(false);
  }, [textInput, onSuccess]);

  const removeFile = useCallback((id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const retryFile = useCallback((file: UploadedFile) => {
    if (file.file) {
      processFile(file.file);
    }
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (name: string) => {
    const ext = name.split(".").pop()?.toLowerCase();
    return <FileText className="h-5 w-5 text-muted-foreground" />;
  };

  return (
    <div className={cn("space-y-6", className)}>
      <TooltipProvider>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Carregar Dados</h3>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  Carregue arquivos ou cole texto para criar relatórios.
                  Formatos suportados: PDF, CSV, XLSX, TXT.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          {!organizationId && (
            <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <p className="text-sm text-amber-700">
                Selecione uma organização para processar documentos
                automaticamente.
              </p>
            </div>
          )}
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200",
                isDragging
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-border hover:border-primary/50 hover:bg-muted/50",
                handleFileProcess.isProcessing &&
                  "pointer-events-none opacity-50",
              )}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.csv,.xlsx,.xls,.txt"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Upload className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-medium text-foreground">
                  Clique para carregar
                </span>{" "}
                ou arraste e solte
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {SUPPORTED_FORMATS.join(", ")} • Máximo 50MB
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              Arraste arquivos aqui ou clique para selecionar. Suporta múltiplos
              arquivos.
            </p>
          </TooltipContent>
        </Tooltip>

        {handleFileProcess.progress && (
          <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Processando...
              </span>
              <span className="text-muted-foreground">
                {Math.round(handleFileProcess.progress?.progress || 0)}%
              </span>
            </div>
            <Progress
              value={handleFileProcess.progress?.progress || 0}
              className="h-2"
            />
            <p className="text-xs text-muted-foreground">
              {handleFileProcess.progress?.message}
            </p>
          </div>
        )}

        <div className="space-y-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Ou coletexto:</label>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Cole dados de planilhas, listas ou texto estruturado.
                Separadores: vírgula, ponto e vírgula ou tabulação.
              </p>
            </TooltipContent>
          </Tooltip>

          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Cole seus dados aqui...&#10;Exemplo:&#10;nome,email,valor&#10;João,joao@email.com,100&#10;Maria,maria@email.com,200"
            className="w-full h-32 p-3 text-sm border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={handleTextProcess.isProcessing}
          />

          {textInput && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTextPreview(!showTextPreview)}
                  className="mr-2"
                >
                  {showTextPreview ? "Ocultar" : "Ver"} Preview
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visualize como seus dados serão interpretados.</p>
              </TooltipContent>
            </Tooltip>
          )}

          {showTextPreview && textInput && (
            <div className="p-3 bg-muted rounded-lg text-xs font-mono overflow-x-auto max-h-40 overflow-y-auto">
              <pre className="whitespace-pre-wrap">{textInput}</pre>
            </div>
          )}

          {textInput.trim() && (
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleTextSubmit}
                    disabled={
                      handleTextProcess.isProcessing || !textInput.trim()
                    }
                  >
                    Processar Texto
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Analisar e converter texto em dados estruturados.</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setTextInput("");
                      setShowTextPreview(false);
                    }}
                  >
                    Limpar
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Limpar campo de texto.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>

        {uploadedFiles.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">
                Arquivos Carregados ({uploadedFiles.length})
              </h4>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setUploadedFiles([])}
                  >
                    Limpar Tudo
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remover todos os arquivos da lista.</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border",
                    file.status === "success" &&
                      "border-green-200 bg-green-50/50",
                    file.status === "error" && "border-red-200 bg-red-50/50",
                    file.status === "processing" &&
                      "border-amber-200 bg-amber-50/50",
                    file.status === "pending" && "border-muted",
                  )}
                >
                  {getFileIcon(file.name)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                      {file.status === "processing" && " • Processando..."}
                    </p>
                    {file.error && (
                      <p className="text-xs text-red-500 mt-1">{file.error}</p>
                    )}
                    {file.parsedData && (
                      <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        {file.parsedData.rowCount} linhas •{" "}
                        {file.parsedData.headers.length} colunas
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {file.status === "error" && file.file && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => retryFile(file)}
                          >
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Tentar novamente</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeFile(file.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Remover arquivo</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {uploadedFiles.length === 0 && (
          <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <div className="text-sm">
              <p className="font-medium text-foreground">Dica:</p>
              <p className="text-muted-foreground">
                Para melhores resultados, use dados tabulares com cabeçalhos
                claros.
              </p>
            </div>
          </div>
        )}
      </TooltipProvider>
    </div>
  );
}
