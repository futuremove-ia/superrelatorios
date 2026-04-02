"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Upload,
  FileText,
  Settings,
  HelpCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { DataUploader } from "@/components/ui/DataUploader";
import { TextInputArea } from "@/components/ui/TextInputArea";
import { PipelineProgress } from "@/components/ui/PipelineProgress";
import {
  useDocumentPipeline,
  useTextPipeline,
} from "@/hooks/useDocumentPipeline";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { cn } from "@/lib/utils";

export default function DocumentUploaderPage() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { organization, organizationId: orgId } = useCurrentOrganization();
  const [uploadedData, setUploadedData] = useState<any[]>([]);

  const userId = user?.id || "";
  const organizationId = orgId || "";

  const documentPipeline = useDocumentPipeline({
    onSuccess: (result) => {
      console.log("Document processed:", result);
    },
    onError: (error) => {
      console.error("Document error:", error);
    },
  });

  const textPipeline = useTextPipeline({
    onSuccess: (result) => {
      console.log("Text processed:", result);
    },
    onError: (error) => {
      console.error("Text error:", error);
    },
  });

  const handleDataSuccess = (data: any[]) => {
    setUploadedData((prev) => [...prev, ...data]);
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {t("documents.upload_title", {
              defaultValue: "Upload de Documentos",
            })}
          </h1>
          <p className="text-muted-foreground mt-2">
            {t("documents.upload_description", {
              defaultValue: "Carregue documentos ou cole texto para análise",
            })}
          </p>
        </div>
        <Button variant="outline" size="sm">
          <HelpCircle className="h-4 w-4 mr-2" />
          {t("documents.help", { defaultValue: "Ajuda" })}
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                {t("documents.carregar_dados", {
                  defaultValue: "Carregar Dados",
                })}
              </CardTitle>
              <CardDescription>
                {t("documents.supported_formats", {
                  defaultValue: "Formatos suportados: PDF, CSV, XLSX, TXT",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataUploader
                userId={userId}
                organizationId={organizationId}
                onSuccess={handleDataSuccess}
              />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {t("documents.texto_digitado", {
                  defaultValue: "Texto Digitado",
                })}
              </CardTitle>
              <CardDescription>
                {t("documents.paste_data", {
                  defaultValue:
                    "Cole dados de planilhas, listas ou texto estruturado",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TextInputArea
                placeholder={t("documents.text_placeholder", {
                  defaultValue:
                    "Cole aqui seus dados... Ex: Receita: R$100.000, Custos: R$50.000",
                })}
              />
              <div className="mt-4 flex gap-2">
                <Button
                  onClick={() =>
                    textPipeline.processText("sample text", userId)
                  }
                  disabled={textPipeline.isProcessing}
                >
                  {textPipeline.isProcessing && (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  )}
                  {t("documents.process_text", {
                    defaultValue: "Processar Texto",
                  })}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {(documentPipeline.progress || textPipeline.progress) && (
            <Card>
              <CardHeader>
                <CardTitle>
                  {t("documents.progress", { defaultValue: "Progresso" })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {documentPipeline.progress && (
                  <PipelineProgress
                    currentStage={
                      (documentPipeline.progress.status === "completed"
                        ? "completed"
                        : documentPipeline.progress.status === "parsing"
                          ? "parsing"
                          : documentPipeline.progress.status === "extracting"
                            ? "extracting"
                            : documentPipeline.progress.status === "mapping"
                              ? "mapping"
                              : documentPipeline.progress.status === "queued"
                                ? "queued"
                                : "completed") as any
                    }
                    progress={documentPipeline.progress.progress}
                  />
                )}
                {textPipeline.progress && !documentPipeline.progress && (
                  <PipelineProgress
                    currentStage={
                      (textPipeline.progress.status === "completed"
                        ? "completed"
                        : textPipeline.progress.status === "parsing"
                          ? "parsing"
                          : textPipeline.progress.status === "extracting"
                            ? "extracting"
                            : textPipeline.progress.status === "mapping"
                              ? "mapping"
                              : textPipeline.progress.status === "queued"
                                ? "queued"
                                : "completed") as any
                    }
                    progress={textPipeline.progress.progress}
                  />
                )}
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>
                {t("documents.arquivos_enviados", {
                  defaultValue: "Arquivos Enviados",
                })}
              </CardTitle>
              <CardDescription>
                {uploadedData.length}{" "}
                {t("documents.arquivos", { defaultValue: "arquivos" })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {uploadedData.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  {t("documents.no_files", {
                    defaultValue: "Nenhum arquivo enviado ainda",
                  })}
                </p>
              ) : (
                <ul className="space-y-2">
                  {uploadedData.map((data, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 p-2 rounded bg-muted"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">
                        {data.fileName || `Arquivo ${index + 1}`}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {t("documents.tips", { defaultValue: "Dicas" })}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                •{" "}
                {t("documents.tip1", {
                  defaultValue: "Use dados tabulares com cabeçalhos claros",
                })}
              </p>
              <p>
                •{" "}
                {t("documents.tip2", {
                  defaultValue:
                    "Arquivos CSV devem usar vírgula ou ponto e vírgula",
                })}
              </p>
              <p>
                •{" "}
                {t("documents.tip3", {
                  defaultValue: "PDFs devem ter texto selecionável",
                })}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
