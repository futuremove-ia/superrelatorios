import React, { useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUp, Check, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DomainFile {
  domain: string;
  label: string;
  example: string;
  file?: File;
}

interface DataDropZoneProps {
  files: DomainFile[];
  onFileChange: (domain: string, file: File | undefined) => void;
  onSkip?: (domain: string) => void;
}

export function DataDropZone({ files, onFileChange, onSkip }: DataDropZoneProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, domain: string) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onFileChange(domain, droppedFile);
    }
  }, [onFileChange]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>, domain: string) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      onFileChange(domain, selectedFile);
    }
  }, [onFileChange]);

  return (
    <div className="space-y-4">
      {files.map((file) => (
        <Card key={file.domain} className={file.file ? "border-green-500 bg-green-50/50" : ""}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                {file.file ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <FileUp className="h-4 w-4" />
                )}
                {file.label}
              </CardTitle>
              {file.file && (
                <span className="text-xs text-green-600 font-medium">Carregado!</span>
              )}
            </div>
            <CardDescription className="text-xs">{file.example}</CardDescription>
          </CardHeader>
          <CardContent>
            {file.file ? (
              <div className="flex items-center justify-between bg-green-100 dark:bg-green-900/30 p-2 rounded">
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4 text-green-600" />
                  <span className="text-sm truncate max-w-[200px]">{file.file.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onFileChange(file.domain, undefined)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, file.domain)}
              >
                <input
                  type="file"
                  id={`file-${file.domain}`}
                  className="hidden"
                  accept=".csv,.xlsx,.xls,.pdf,.txt"
                  onChange={(e) => handleFileSelect(e, file.domain)}
                />
                <label htmlFor={`file-${file.domain}`} className="cursor-pointer">
                  <div className="space-y-1">
                    <FileUp className="h-6 w-6 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Arraste ou clique para carregar
                    </p>
                  </div>
                </label>
                {onSkip && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-muted-foreground"
                    onClick={() => onSkip(file.domain)}
                  >
                    Pular (opcional)
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
