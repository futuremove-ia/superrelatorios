import { BlockType } from '@/types/reports';
import { config } from '@/config/env';
import { ApiError } from '@/lib/errors';
import { Diagnostic, Priority } from '@/types/business';

// Configuração centralizada (Infraestrutura)
const GEMINI_API_KEY = config.gemini.apiKey;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

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
  diagnostic: Omit<Diagnostic, 'id' | 'reportId' | 'createdAt'>;
  suggestedPriority: Omit<Priority, 'id' | 'diagnosticId' | 'createdAt' | 'status'>;
}

/**
 * Constrói o prompt para a IA (Lógica de Aplicação/Domínio)
 */
const buildAnalysisPrompt = (data: unknown[], context: string): string => {
  // Detectar contexto de negócio
  // TODO: Implementar detecção de contexto quando contextDetectorService estiver disponível
  const businessContext = { domain: 'general', industry: 'unknown' };
  
  // Prompt base com especialização
  const basePrompt = `
    Aja como um especialista em análise de dados para PMEs.
    Sua tarefa é analisar os dados fornecidos e gerar um resumo executivo com blocos de visualização estratégica.

    CONTEXTO DO NEGÓCIO: ${businessContext.domain}
    DADOS: ${JSON.stringify(data.slice(0, 100))}

    Sua resposta DEVE ser um objeto JSON PURE:
    {
      "summary": "Resumo executivo dos dados em 2-3 frases, focando nos insights mais importantes",
      "blocks": [
        {
          "type": "KPI_GRID",
          "title": "Principais Métricas",
          "description": "Métricas estratégicas mais relevantes para este negócio",
          "data": { "metrics": [] },
          "settings": {}
        }
      ]
    }
  `;

  // Enriquecer com biblioteca estratégica
  // TODO: Implementar enriquecimento quando strategyLibraryService estiver disponível
  return basePrompt;
};

/**
 * Constrói o prompt para diagnóstico e priorização (v2.0)
 */
const buildDiagnosticPrompt = (data: unknown[], context: string): string => {
  // Detectar contexto de negócio
  // TODO: Implementar detecção de contexto quando contextDetectorService estiver disponível
  const businessContext = { domain: 'general', industry: 'unknown' };
  
  // Prompt base com especialização
  const basePrompt = `
    Aja como um Consultor Estratégico Sênior especializado em ${businessContext.domain}.
    Sua tarefa é analisar os dados e identificar o problema MAIS CRÍTICO (Diagnóstico) e sugerir a ação MAIS IMPORTANTE (Prioridade).

    CONTEXTO DO NEGÓCIO: ${businessContext.domain}
    DADOS: ${JSON.stringify(data.slice(0, 100))}

    Sua resposta DEVE ser um objeto JSON PURE:
    {
      "diagnostic": {
        "title": "Título curto do problema",
        "description": "Explicação detalhada baseada em dados",
        "causes": ["Causa 1", "Causa 2"],
        "implications": ["Impacto 1", "Impacto 2"]
      },
      "suggestedPriority": {
        "title": "O que deve ser feito agora",
        "explanation": "Por que isso é a prioridade #1",
        "level": "high",
        "score": {
          "impact": 1-10,
          "urgency": 1-10,
          "effort": 1-10,
          "confidence": 1-10,
          "calculatedValue": (impact * urgency * confidence) / effort
        }
      }
    }
  `;

  // Enriquecer com biblioteca estratégica
  // TODO: Implementar enriquecimento quando strategyLibraryService estiver disponível
  return basePrompt;
};

/**
 * Serviço de análise de dados via IA (Application Service)
 */
export const _analyzeDataWithAI = async (data: unknown[], _context: string): Promise<AIAnalysisResult> => {
  if (!GEMINI_API_KEY) {
    throw new ApiError('Chave da API do Gemini não configurada.');
  }

  const prompt = buildAnalysisPrompt(data, _context);

  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          response_mime_type: "application/json"
        }
      })
    });

    const result = await response.json();
    if (!response.ok || result.error) {
      throw new ApiError(result.error?.message || 'Erro na API do Gemini');
    }

    const textResponse = result.candidates[0].content.parts[0].text;
    return JSON.parse(textResponse);
  } catch (error) {
    console.error('Erro ao analisar dados:', error);
    throw error;
  }
};

/**
 * Gera diagnóstico e priorização assistida (v2.0)
 */
export const generateAIDiagnostic = async (data: unknown[], context: string): Promise<AIDiagnosticResult> => {
  if (!GEMINI_API_KEY) {
    throw new ApiError('Chave da API do Gemini não configurada.');
  }

  const prompt = buildDiagnosticPrompt(data, context);

  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          response_mime_type: "application/json"
        }
      })
    });

    const result = await response.json();
    if (!response.ok || result.error) {
      throw new ApiError(result.error?.message || 'Erro na API do Gemini');
    }

    const textResponse = result.candidates[0].content.parts[0].text;
    return JSON.parse(textResponse);
  } catch (error) {
    console.error('Erro ao gerar diagnóstico:', error);
    throw error;
  }
};


