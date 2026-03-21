import { Sparkles, Zap, Lightbulb, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useReportBuilderContext } from '@/contexts/ReportBuilderContext';
import { AIProcessingLoader } from '@/components/ai/AIProcessingLoader';
import { mockTemplates } from '@/services/mockReports';
import { useTranslation } from 'react-i18next';
import { DynamicBlockRenderer } from '@/components/reports/renderer/DynamicBlockRenderer';
import { DiagnosticSection } from '@/components/business/DiagnosticSection';
import { PriorityCard } from '@/components/business/PriorityCard';
import { Diagnostic, Priority } from '@/types/business';


const CHART_COLORS = ['#6366f1', '#22d3ee', '#f59e0b', '#10b981', '#f43f5e', '#8b5cf6'];

interface PreviewStepProps {
  onConfirm: () => void;
}

export const PreviewStep = ({ onConfirm }: PreviewStepProps) => {
  const { formData, file, textData, selectedTemplate, loading, aiResult, diagnosticResult, analysisError, blocks } = useReportBuilderContext();
  const { t } = useTranslation();


  // Se a IA já gerou resultado, exibir o relatório completo via blocos
  if (aiResult || (blocks && blocks.length > 0)) {
    // Preparar dados de diagnóstico para o componente (Onda 1)
    const diagnosticData: Diagnostic | null = diagnosticResult ? {
      id: 'preview-diag',
      reportId: 'preview-report',
      createdAt: new Date().toISOString(),
      ...diagnosticResult.diagnostic
    } : null;

    const priorityData: Priority | null = diagnosticResult ? {
      id: 'preview-prio',
      diagnosticId: 'preview-diag',
      createdAt: new Date().toISOString(),
      status: 'suggested',
      ...diagnosticResult.suggestedPriority
    } : null;

    return (
      <div className="space-y-8">
        {/* Cabeçalho do Relatório */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            {t('builder.steps.preview.ai_badge')}
          </div>

          <h2 className="text-2xl font-bold mb-2">{formData.title || t('builder.steps.preview.title')}</h2>
          {formData.category && (
            <Badge variant="secondary">{formData.category}</Badge>
          )}
        </div>

        {/* Resumo Executivo */}
        {aiResult?.summary && (
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                {t('report_detail.content.executive_summary')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-foreground/90">{aiResult.summary}</p>
            </CardContent>
          </Card>
        )}

        {/* Renderização Dinâmica de Blocos */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
          <DynamicBlockRenderer blocks={blocks} />
        </div>

        {/* Onda 1: Seção de Diagnóstico e Prioridade IA no final do relatório */}
        {diagnosticData && priorityData && (
          <div className="pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-primary fill-primary/20" />
              <h3 className="text-lg font-bold tracking-tight">{t('builder.steps.preview.diagnostic_title')}</h3>
            </div>
            
            <DiagnosticSection diagnostic={diagnosticData} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center space-y-2 p-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{t('builder.steps.preview.recommended_priority')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('builder.steps.preview.recommended_priority_desc')}
                </p>
              </div>
              <PriorityCard priority={priorityData} />
            </div>
          </div>
        )}

        {/* Botão de Salvar */}
        <Card className="mt-12 bg-muted/30 border-dashed">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div>
              <p className="font-medium">{t('builder.steps.preview.save_card_title')}</p>
              <p className="text-sm text-muted-foreground">{t('builder.steps.preview.save_card_desc')}</p>
            </div>
            <Button onClick={onConfirm} disabled={loading} size="lg" className="w-full sm:w-auto">
              {loading ? t('common.processing') : t('builder.steps.preview.save_button')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Se a IA ainda não rodou, mas está processando, exibir o loader premium
  if (loading && !aiResult) {
    return (
      <div className="max-w-md mx-auto py-12">
        <AIProcessingLoader isProcessing={loading} />
      </div>
    );
  }

  // Tela de erro (se IA falhou)

  if (analysisError) {
    return (
      <div className="space-y-6">
        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="p-6 flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-destructive">{t('common.error_title')}</p>
              <p className="text-sm text-muted-foreground mt-1">{analysisError}</p>
            </div>
          </CardContent>
        </Card>
        <Button onClick={onConfirm} variant="outline" className="w-full">
          {t('common.back')}
        </Button>
      </div>
    );
  }

  // Tela padrão (antes de clicar em Gerar)
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('builder.steps.preview.title')}</h2>
        <p className="text-muted-foreground">{t('builder.steps.preview.desc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-lg">{t('report_detail.sidebar.info_title')}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div><p className="text-sm font-medium text-muted-foreground">{t('builder.steps.generation.form.title_label')}</p><p className="font-medium">{formData.title || '—'}</p></div>
            <div><p className="text-sm font-medium text-muted-foreground">{t('builder.steps.generation.form.cat_label')}</p><p>{formData.category || '—'}</p></div>
            <div><p className="text-sm font-medium text-muted-foreground">{t('builder.sidebar.ai_will_do.title')}</p><p>{mockTemplates.find(t => t.id === selectedTemplate)?.name || '—'}</p></div>
            {formData.description && <div><p className="text-sm font-medium text-muted-foreground">{t('builder.steps.generation.form.desc_label')}</p><p className="text-sm">{formData.description}</p></div>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">{t('builder.steps.template.preview_title')}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div><p className="text-sm font-medium text-muted-foreground">{t('builder.steps.template.source_label')}</p><p>{formData.dataSource === 'upload' ? t('builder.steps.data.sources.upload') : t('builder.steps.data.sources.paste')}</p></div>
            {file && <div><p className="text-sm font-medium text-muted-foreground">{t('common.active')}</p><p className="text-sm">{file.name}</p></div>}
            {textData && <div><p className="text-sm font-medium text-muted-foreground">{t('builder.steps.data.labels.chars')}</p><p className="text-sm">{textData.length}</p></div>}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-primary mb-2">{t('builder.steps.preview.ai_engine')}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t('builder.steps.preview.ai_processing_desc')}
              </p>
              <Button onClick={onConfirm} disabled={loading} className="w-full md:w-auto" size="lg">
                {loading ? (
                  <><div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2" />{t('builder.steps.preview.cta_loading')}</>
                ) : (
                  <><Zap className="mr-2 h-5 w-5" />{t('builder.steps.preview.cta_initial')}</>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
