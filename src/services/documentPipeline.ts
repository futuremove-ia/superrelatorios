import { supabase } from "@/lib/supabase";
import { unstructuredClient } from "./unstructuredService";
import {
  analyzeDataWithAI,
  generateAIDiagnostic,
  type PromptContext,
} from "./aiService";
import {
  extractKPIsFromAIResult,
  type ExtractedKPI,
} from "./kpiExtractionService";
import {
  saveReportWithMetrics,
  type EnrichedDiagnostic,
} from "./reportPersistenceService";

export interface DocumentPipelineConfig {
  strategy?: "auto" | "hi_res" | "fast";
  extractTableAsHtml?: boolean;
  includeImageBase64?: boolean;
}

export interface PipelineResult {
  success: boolean;
  reportId?: string;
  metricsCount: number;
  challengeCreated: boolean;
  kpis: ExtractedKPI[];
  elementsCount: number;
  processingTimeMs: number;
  errors: string[];
}

export interface PipelineProgress {
  status:
    | "queued"
    | "extracting"
    | "parsing"
    | "mapping"
    | "completed"
    | "failed";
  progress: number;
  message: string;
  documentId?: string;
}

const MAX_FILE_SIZE_MB = 50;

export class DocumentPipeline {
  private config: DocumentPipelineConfig;

  constructor(config?: DocumentPipelineConfig) {
    this.config = config || {};
  }

  async processDocument(
    file: File,
    userId: string,
    organizationId: string,
    onProgress?: (progress: PipelineProgress) => void,
  ): Promise<PipelineResult> {
    const startTime = Date.now();
    const errors: string[] = [];
    let uploadedFileName: string | null = null;

    try {
      if (!organizationId) {
        throw new Error(
          "Organização não especificada. Selecione uma organização primeiro.",
        );
      }

      const { data: org, error: orgError } = await supabase
        .from("organizations")
        .select("id")
        .eq("id", organizationId)
        .single();

      if (orgError || !org) {
        throw new Error(
          "Organização não encontrada. Verifique se você tem acesso.",
        );
      }

      onProgress?.({
        status: "queued",
        progress: 10,
        message: "Processando arquivo...",
      });

      if (file.size === 0) {
        throw new Error("Arquivo vazio. Carregue um arquivo com conteúdo.");
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        throw new Error(`Arquivo muito grande. Máximo: ${MAX_FILE_SIZE_MB}MB`);
      }

      onProgress?.({
        status: "queued",
        progress: 20,
        message: "Enviando para o storage...",
      });

      const fileName = `${organizationId}/${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("documents")
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(`Erro ao fazer upload: ${uploadError.message}`);
      }

      uploadedFileName = fileName;

      onProgress?.({
        status: "extracting",
        progress: 30,
        message: "Extraindo conteúdo...",
      });

      const elements = await unstructuredClient.extractFromStorage(
        fileName,
        organizationId,
      );

      if (elements.length === 0) {
        throw new Error("Não foi possível extrair conteúdo do arquivo");
      }

      onProgress?.({
        status: "parsing",
        progress: 50,
        message: "Analisando com IA...",
      });

      const { data: blueprint } = await supabase
        .from("company_blueprints")
        .select("*")
        .eq("organization_id", organizationId)
        .single();
      const { data: kpiLibrary } = await supabase
        .from("library_kpis")
        .select("code, title, unit")
        .limit(50);

      const promptContext: PromptContext = {
        blueprint: blueprint
          ? {
              industry_sector: blueprint.industry_sector,
              business_model: blueprint.business_model,
            }
          : undefined,
        kpiLibrary: kpiLibrary || [],
      };

      const textContent = elements.map((e) => e.text).join("\n\n");
      const analysis = await analyzeDataWithAI(
        [{ type: "text", content: textContent }],
        "Extração de KPIs",
        promptContext,
      );

      onProgress?.({
        status: "parsing",
        progress: 70,
        message: "Extraindo KPIs...",
      });

      const kpis = extractKPIsFromAIResult(analysis);

      if (kpis.length === 0) {
        errors.push("Nenhum KPI foi extraído do documento");
      }

      const diagnostic: EnrichedDiagnostic = {
        title: analysis.summary?.substring(0, 50) || "Análise Automática",
        description: analysis.summary || "Análise concluída",
        challenge_code: "AUTO_ANALYSIS",
        severity: "low",
        confidence: 0.8,
      };

      onProgress?.({ status: "mapping", progress: 85, message: "Salvando..." });

      const blocks = (analysis.blocks || []).map((b) => ({
        type: b.type,
        content: JSON.stringify(b),
      }));

      const reportData = {
        title: `Análise - ${file.name}`,
        description: `Relatório gerado automaticamente`,
        category: "auto_analysis",
        blocks,
        status: "completed" as const,
      };

      const saveResult = await saveReportWithMetrics(
        reportData,
        kpis,
        diagnostic,
        userId,
      );

      onProgress?.({
        status: "completed",
        progress: 100,
        message: "Concluído!",
      });

      return {
        success: true,
        reportId: saveResult.report.id,
        metricsCount: saveResult.metricsCount,
        challengeCreated: saveResult.challengeCreated,
        kpis,
        elementsCount: elements.length,
        processingTimeMs: Date.now() - startTime,
        errors,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      errors.push(errorMessage);

      if (uploadedFileName) {
        await supabase.storage.from("documents").remove([uploadedFileName]);
      }

      onProgress?.({ status: "failed", progress: 0, message: errorMessage });

      return {
        success: false,
        metricsCount: 0,
        challengeCreated: false,
        kpis: [],
        elementsCount: 0,
        processingTimeMs: Date.now() - startTime,
        errors,
      };
    }
  }

  async processTextInput(
    text: string,
    userId: string,
    onProgress?: (progress: PipelineProgress) => void,
  ): Promise<PipelineResult> {
    const startTime = Date.now();
    const errors: string[] = [];

    try {
      onProgress?.({
        status: "queued",
        progress: 10,
        message: "Analisando...",
      });

      const { data: profile } = await supabase
        .from("profiles")
        .select("organization_id")
        .eq("user_id", userId)
        .single();
      if (!profile?.organization_id)
        throw new Error("Organização não encontrada");

      const organizationId = profile.organization_id;
      onProgress?.({
        status: "parsing",
        progress: 30,
        message: "Processando com IA...",
      });

      const { data: blueprint } = await supabase
        .from("company_blueprints")
        .select("*")
        .eq("organization_id", organizationId)
        .single();
      const { data: kpiLibrary } = await supabase
        .from("library_kpis")
        .select("code, title, unit")
        .limit(50);

      const promptContext: PromptContext = {
        blueprint: blueprint
          ? {
              industry_sector: blueprint.industry_sector,
              business_model: blueprint.business_model,
            }
          : undefined,
        kpiLibrary: kpiLibrary || [],
      };

      const analysis = await analyzeDataWithAI(
        [{ type: "text", content: text }],
        "Extração de KPIs",
        promptContext,
      );

      onProgress?.({
        status: "mapping",
        progress: 70,
        message: "Extraindo KPIs...",
      });

      const kpis = extractKPIsFromAIResult(analysis);

      const diagnostic: EnrichedDiagnostic = {
        title: "Análise de Texto",
        description: analysis.summary || "Análise concluída",
        challenge_code: "AUTO_ANALYSIS",
        severity: "low",
        confidence: 0.8,
      };

      onProgress?.({ status: "mapping", progress: 85, message: "Salvando..." });

      const blocks = (analysis.blocks || []).map((b) => ({
        type: b.type,
        content: JSON.stringify(b),
      }));

      const saveResult = await saveReportWithMetrics(
        {
          title: "Análise de texto",
          description: "Análise de texto digitado",
          category: "text_input",
          blocks,
          status: "completed",
        },
        kpis,
        diagnostic,
        userId,
      );

      onProgress?.({
        status: "completed",
        progress: 100,
        message: "Concluído!",
      });

      return {
        success: true,
        reportId: saveResult.report.id,
        metricsCount: saveResult.metricsCount,
        challengeCreated: saveResult.challengeCreated,
        kpis,
        elementsCount: 1,
        processingTimeMs: Date.now() - startTime,
        errors,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      errors.push(errorMessage);
      return {
        success: false,
        metricsCount: 0,
        challengeCreated: false,
        kpis: [],
        elementsCount: 0,
        processingTimeMs: Date.now() - startTime,
        errors,
      };
    }
  }
}

export const documentPipeline = new DocumentPipeline();
