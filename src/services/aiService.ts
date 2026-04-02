import { BlockType } from "@/types/reports";
import { ApiError } from "@/lib/errors";
import { Diagnostic, Priority } from "@/types/business";

// Proxy endpoint servido via Vercel Edge Function (api/gemini.ts)
// A API key Gemini NUNCA é exposta no frontend.
const GEMINI_PROXY_URL = "/api/gemini";

// ────────────────────────────────────────────
// Tipos de Exportação
// ────────────────────────────────────────────

export interface AIAnalysisResult {
  summary: string;
  blocks: Array<{
    type: BlockType;
    title: string;
    description?: string;
    data: unknown;
    settings?: Record<string, unknown>;
  }>;
}

export interface AIDiagnosticResult {
  diagnostic: Omit<Diagnostic, "id" | "reportId" | "createdAt">;
  suggestedPriority: Omit<
    Priority,
    "id" | "diagnosticId" | "createdAt" | "status"
  >;
}

export interface PromptContext {
  blueprint?: {
    industry_sector?: string;
    business_model?: string;
    company_stage?: string;
    employee_count_range?: string;
    known_challenges?: string[];
  };
  kpiLibrary?: Array<{ code: string; title: string; unit: string }>;
}

// ────────────────────────────────────────────
// Cache em sessão (por hash de dados + contexto)
// ────────────────────────────────────────────

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos

interface CacheEntry<T> {
  result: T;
  expiresAt: number;
}

const analysisCache = new Map<string, CacheEntry<AIAnalysisResult>>();
const diagnosticCache = new Map<string, CacheEntry<AIDiagnosticResult>>();

function hashKey(data: unknown[], context: string): string {
  const str = context + JSON.stringify(data.slice(0, 50));
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return (hash >>> 0).toString(36);
}

function getFromCache<T>(
  cache: Map<string, CacheEntry<T>>,
  key: string,
): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return null;
  }
  return entry.result;
}

function setCache<T>(
  cache: Map<string, CacheEntry<T>>,
  key: string,
  result: T,
): void {
  cache.set(key, { result, expiresAt: Date.now() + CACHE_TTL_MS });
}

// ────────────────────────────────────────────
// Retry com exponential backoff
// ────────────────────────────────────────────

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3,
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // Não re-tentar em erros do cliente (4xx exceto 429)
      if (
        response.ok ||
        (response.status >= 400 &&
          response.status < 500 &&
          response.status !== 429)
      ) {
        return response;
      }

      // Para 429 ou 5xx, aguardar antes de re-tentar
      lastError = new Error(`HTTP ${response.status}`);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error("Network error");
    }

    if (attempt < maxRetries - 1) {
      const delayMs = Math.pow(2, attempt) * 500; // 500ms, 1s, 2s
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError ?? new Error("Request failed after retries");
}

// ────────────────────────────────────────────
// Prompts
// ────────────────────────────────────────────

function buildAnalysisPrompt(
  data: unknown[],
  context: string,
  ctx?: PromptContext,
): string {
  const blueprintSection = ctx?.blueprint
    ? `\nCONTEXTO DA EMPRESA:\n${JSON.stringify(ctx.blueprint)}`
    : "";

  const kpiSection = ctx?.kpiLibrary?.length
    ? `\nKPIs RELEVANTES PARA MAPEAR:\n${ctx.kpiLibrary
        .slice(0, 30)
        .map((k) => `${k.code}: ${k.title} (${k.unit})`)
        .join("\n")}`
    : "";

  return `
Aja como um especialista em análise de dados para PMEs.
Sua tarefa é analisar os dados fornecidos e gerar um resumo executivo com blocos de visualização estratégica.

CONTEXTO: ${context || "Negócio em geral"}${blueprintSection}${kpiSection}
DADOS: ${JSON.stringify(data.slice(0, 100))}

Sua resposta DEVE ser um objeto JSON puro, sem markdown ou explicações extras:
{
  "summary": "Resumo executivo dos dados em 2-3 frases, com os insights mais importantes",
  "blocks": [
    {
      "type": "KPI_GRID",
      "title": "Principais Métricas",
      "description": "Métricas estratégicas mais relevantes",
      "data": { "metrics": [] },
      "settings": {}
    }
  ]
}
  `.trim();
}

function buildDiagnosticPrompt(
  data: unknown[],
  context: string,
  ctx?: PromptContext,
): string {
  const blueprintSection = ctx?.blueprint
    ? `\nCONTEXTO DA EMPRESA:\n${JSON.stringify(ctx.blueprint)}`
    : "";

  return `
Aja como um Consultor Estratégico Sênior especializado em PMEs.
Analise os dados e identifique o problema MAIS CRÍTICO (Diagnóstico) e sugira a ação MAIS IMPORTANTE (Prioridade).

CONTEXTO: ${context || "Negócio em geral"}${blueprintSection}
DADOS: ${JSON.stringify(data.slice(0, 100))}

Sua resposta DEVE ser um objeto JSON puro, sem markdown ou explicações extras:
{
  "diagnostic": {
    "title": "Título curto do problema",
    "description": "Explicação detalhada baseada nos dados",
    "causes": ["Causa 1", "Causa 2"],
    "implications": ["Impacto 1", "Impacto 2"]
  },
  "suggestedPriority": {
    "title": "O que deve ser feito agora",
    "explanation": "Por que isso é a prioridade número 1",
    "level": "high",
    "score": {
      "impact": 8,
      "urgency": 9,
      "effort": 5,
      "confidence": 7,
      "calculatedValue": 10.08
    }
  }
}
  `.trim();
}

// ────────────────────────────────────────────
// Função utilitária de chamada ao proxy
// ────────────────────────────────────────────

async function callGeminiProxy(prompt: string): Promise<string> {
  const response = await fetchWithRetry(GEMINI_PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.1,
        response_mime_type: "application/json",
      },
    }),
  });

  const result = await response.json();

  if (!response.ok || result.error) {
    throw new ApiError(
      result.error?.message || "Erro na API de IA",
      response.status,
    );
  }

  const textResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textResponse) {
    throw new ApiError("Resposta inválida da API de IA");
  }

  return textResponse;
}

// ────────────────────────────────────────────
// Serviços Públicos
// ────────────────────────────────────────────

/**
 * Analisa dados via IA e retorna blocos de visualização.
 * Usa cache de sessão para evitar chamadas duplicadas.
 */
export const analyzeDataWithAI = async (
  data: unknown[],
  context: string,
  promptContext?: PromptContext,
): Promise<AIAnalysisResult> => {
  const cacheKey = hashKey(data, `analysis:${context}`);
  const cached = getFromCache(analysisCache, cacheKey);
  if (cached) return cached;

  const prompt = buildAnalysisPrompt(data, context, promptContext);

  try {
    const text = await callGeminiProxy(prompt);
    const result = JSON.parse(text) as AIAnalysisResult;
    setCache(analysisCache, cacheKey, result);
    return result;
  } catch (error) {
    console.error("[aiService] Erro ao analisar dados:", error);
    throw error;
  }
};

/**
 * Gera diagnóstico e priorização assistida.
 * Usa cache de sessão para evitar chamadas duplicadas.
 */
export const generateAIDiagnostic = async (
  data: unknown[],
  context: string,
  promptContext?: PromptContext,
): Promise<AIDiagnosticResult> => {
  const cacheKey = hashKey(data, `diagnostic:${context}`);
  const cached = getFromCache(diagnosticCache, cacheKey);
  if (cached) return cached;

  const prompt = buildDiagnosticPrompt(data, context, promptContext);

  try {
    const text = await callGeminiProxy(prompt);
    const result = JSON.parse(text) as AIDiagnosticResult;
    setCache(diagnosticCache, cacheKey, result);
    return result;
  } catch (error) {
    console.error("[aiService] Erro ao gerar diagnóstico:", error);
    throw error;
  }
};
