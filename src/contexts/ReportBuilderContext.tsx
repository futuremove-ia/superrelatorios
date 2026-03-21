import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { AIAnalysisResult, analyzeDataWithAI, generateAIDiagnostic, AIDiagnosticResult } from '@/services/aiService';
import { extractKPIsFromAIResult, ExtractedKPI, enrichDiagnosticWithCodes } from '@/services/kpiExtractionService';
import type { ParsedFileData } from '@/services/fileParserService';
import type { ReportBlock } from '@/types/reports';

type DataSourceType = 'upload' | 'text' | 'url';

interface FormDataProps {
  title: string;
  description: string;
  category: string;
  dataSource: DataSourceType;
}

interface ReportBuilderContextProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedTemplate: string;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string>>;
  formData: FormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  textData: string;
  setTextData: React.Dispatch<React.SetStateAction<string>>;
  urlData: string;
  setUrlData: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  aiSuggestionsOpen: boolean;
  setAiSuggestionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // Novos campos para o pipeline real
  parsedData: ParsedFileData | null;
  setParsedData: React.Dispatch<React.SetStateAction<ParsedFileData | null>>;
  aiResult: AIAnalysisResult | null;
  setAiResult: React.Dispatch<React.SetStateAction<AIAnalysisResult | null>>;
  diagnosticResult: AIDiagnosticResult | null;
  setDiagnosticResult: React.Dispatch<React.SetStateAction<AIDiagnosticResult | null>>;
  analysisError: string | null;
  setAnalysisError: React.Dispatch<React.SetStateAction<string | null>>;
  blocks: ReportBlock[];
  setBlocks: React.Dispatch<React.SetStateAction<ReportBlock[]>>;
  dataSources: any[];
  setDataSources: React.Dispatch<React.SetStateAction<any[]>>;
  runAIAnalysis: () => Promise<void>;
  // 🆕 NOVO: KPIs extraídos da análise
  extractedKPIs: ExtractedKPI[];
  setExtractedKPIs: React.Dispatch<React.SetStateAction<ExtractedKPI[]>>;
  // 🆕 NOVO: Diagnóstico enriquecido com códigos
  enrichedDiagnostic: any | null;
  setEnrichedDiagnostic: React.Dispatch<React.SetStateAction<any | null>>;
}

const ReportBuilderContext = createContext<ReportBuilderContextProps | undefined>(undefined);

export const ReportBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [formData, setFormData] = useState<FormDataProps>({
    title: '',
    description: '',
    category: '',
    dataSource: 'upload'
  });
  const [file, setFile] = useState<File | null>(null);
  const [textData, setTextData] = useState('');
  const [urlData, setUrlData] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiSuggestionsOpen, setAiSuggestionsOpen] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedFileData | null>(null);
  const [aiResult, setAiResult] = useState<AIAnalysisResult | null>(null);
  const [diagnosticResult, setDiagnosticResult] = useState<AIDiagnosticResult | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [blocks, setBlocks] = useState<ReportBlock[]>([]);
  const [dataSources, setDataSources] = useState<any[]>([]);
  const [extractedKPIs, setExtractedKPIs] = useState<ExtractedKPI[]>([]);
  const [enrichedDiagnostic, setEnrichedDiagnostic] = useState<any | null>(null);

  const runAIAnalysis = useCallback(async () => {
    if (!parsedData && !textData && !urlData) {
      setAnalysisError("Nenhum dado fornecido para análise.");
      return;
    }

    setLoading(true);
    setAnalysisError(null);

    try {
      const dataToAnalyze = parsedData ? parsedData.rows : [{ content: textData || urlData }];
      const context = `Objetivo: ${formData.description}. Categoria: ${formData.category}. Template: ${selectedTemplate}`;
      
      // Rodar Análise e Diagnóstico em paralelo (Onda 1)
      const [analysis, diagnostic] = await Promise.all([
        analyzeDataWithAI(dataToAnalyze, context),
        generateAIDiagnostic(dataToAnalyze, context)
      ]);

      // 🆕 NOVO: Extrair KPIs da análise
      const extractedKPIs = extractKPIsFromAIResult(analysis);
      setExtractedKPIs(extractedKPIs);
      
      // 🆕 NOVO: Enriquecer diagnóstico com challenge_code e lever_code
      const enriched = {
        ...diagnostic,
        ...enrichDiagnosticWithCodes(diagnostic.diagnostic)
      };
      setEnrichedDiagnostic(enriched);

      // Persistir no Data Hub local (Simulação)
      const newSource = {
        id: crypto.randomUUID(),
        name: file?.name || formData.title || 'Fonte de Dados',
        type: file ? 'file' : (urlData ? 'url' : 'raw_text'),
        createdAt: new Date().toISOString(),
        metadata: {
          size: file?.size,
          extension: file?.name.split('.').pop()
        }
      };
      setDataSources(prev => [...prev, newSource]);

      // Mapear blocos da IA para ReportBlock
      const mappedBlocks: ReportBlock[] = analysis.blocks.map(b => ({
        id: crypto.randomUUID(),
        type: b.type,
        layout: { w: 12 },
        content: {
          title: b.title,
          description: b.description,
          data: b.data,
          settings: b.settings || {}
        }
      }));

      setBlocks(mappedBlocks);
    } catch (error: any) {
      console.error("Erro na análise da IA:", error);
      setAnalysisError(error.message || "Erro ao processar dados com IA.");
    } finally {
      setLoading(false);
    }
  }, [parsedData, textData, urlData, formData, selectedTemplate]);

  return (
    <ReportBuilderContext.Provider
      value={{
        step, setStep,
        selectedTemplate, setSelectedTemplate,
        formData, setFormData,
        file, setFile,
        textData, setTextData,
        urlData, setUrlData,
        loading, setLoading,
        aiSuggestionsOpen, setAiSuggestionsOpen,
        parsedData, setParsedData,
        aiResult, setAiResult,
        diagnosticResult, setDiagnosticResult,
        analysisError, setAnalysisError,
        blocks, setBlocks,
        dataSources, setDataSources,
        runAIAnalysis,
        extractedKPIs, setExtractedKPIs,
        enrichedDiagnostic, setEnrichedDiagnostic
      }}
    >
      {children}
    </ReportBuilderContext.Provider>
  );
};

export const useReportBuilderContext = () => {
  const context = useContext(ReportBuilderContext);
  if (!context) {
    throw new Error('useReportBuilderContext must be used within a ReportBuilderProvider');
  }
  return context;
};
