import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft, Sparkles, Database, Brain, FileText, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockTemplates } from '@/services/mockReports';
import { useToast } from '@/hooks/use-toast';
import { ReportBuilderProvider, useReportBuilderContext } from '@/contexts/ReportBuilderContext';
import { useCreateReport } from '@/hooks/useReports';
import { parseFile } from '@/services/fileParserService';
import { analyzeDataWithAI } from '@/services/aiService';
import { saveReportWithMetrics } from '@/services/reportPersistenceService';
import { supabase } from '@/lib/supabase';
import { useTranslation } from 'react-i18next';

// Step Components
import { DataInputStep } from './components/report-builder/DataInputStep';
import { TemplateSelectionStep } from './components/report-builder/TemplateSelectionStep';
import { GenerationStep } from './components/report-builder/GenerationStep';
import { BlockEditorStep } from './components/report-builder/BlockEditorStep';
import { PreviewStep } from './components/report-builder/PreviewStep';

const ReportBuilderContent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const steps = [
    { title: t('builder.steps.summary.data.title'), description: t('builder.steps.summary.data.desc'), icon: Database, key: 'data' },
    { title: t('builder.steps.summary.model.title'), description: t('builder.steps.summary.model.desc'), icon: Brain, key: 'model' },
    { title: t('builder.steps.summary.blocks.title'), description: t('builder.steps.summary.blocks.desc'), icon: Sparkles, key: 'blocks' },
    { title: t('builder.steps.summary.generation.title'), description: t('builder.steps.summary.generation.desc'), icon: FileText, key: 'generation' },
    { title: t('builder.steps.summary.final.title'), description: t('builder.steps.summary.final.desc'), icon: Eye, key: 'final' },
  ];

  const { 
    step, setStep, 
    selectedTemplate, setSelectedTemplate, 
    formData, setFormData, 
    file, textData, urlData,
    loading, setLoading, 
    setParsedData,
    aiResult, 
    diagnosticResult, 
    setAnalysisError,
    blocks,
    extractedKPIs,
    enrichedDiagnostic,
    runAIAnalysis
  } = useReportBuilderContext();

  const { mutateAsync: createReport } = useCreateReport();

  // Check if template was pre-selected from URL
  useEffect(() => {
    const templateParam = searchParams.get('template');
    if (templateParam) {
      setSelectedTemplate(templateParam);
      const template = mockTemplates.find(t => t.id === templateParam);
      if (template) {
        setFormData(prev => ({
          ...prev,
          category: template.category,
          title: template.name
        }));
      }
    }
  }, [searchParams, setSelectedTemplate, setFormData]);

  const handleNext = async () => {
    if (step === 1) {
      if (formData.dataSource === 'upload' && !file) {
        toast({ title: t('builder.toasts.data_required_title'), description: t('builder.toasts.upload_required_desc'), variant: "destructive" });
        return;
      }
      if (formData.dataSource === 'text' && !textData.trim()) {
        toast({ title: t('builder.toasts.data_required_title'), description: t('builder.toasts.text_required_desc'), variant: "destructive" });
        return;
      }
      if (formData.dataSource === 'url' && (!urlData.trim() || !urlData.startsWith('http'))) {
        toast({ title: t('builder.toasts.data_required_title'), description: t('builder.toasts.url_required_desc'), variant: "destructive" });
        return;
      }
    }
    
    if (step === 2) {
      if (!selectedTemplate) {
        toast({ title: t('builder.toasts.select_template_title'), description: t('builder.toasts.select_template_desc'), variant: "destructive" });
        return;
      }
      
      setStep(step + 1);
      // Trigger AI Analysis when moving to Block Editor
      runAIAnalysis();
      return;
    }

    if (step === 4 && !formData.title.trim()) {
      toast({ title: t('builder.toasts.title_required_title'), description: t('builder.toasts.title_required_desc'), variant: "destructive" });
      return;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleCreateReport = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      // 🆕 NOVO: Usar persistência em cascata
      const result = await saveReportWithMetrics(
        {
          title: formData.title,
          description: formData.description,
          category: formData.category,
          template_id: selectedTemplate,
          blocks: blocks,
          status: 'completed'
        },
        extractedKPIs, // KPIs extraídos da análise
        enrichedDiagnostic || diagnosticResult?.diagnostic, // Diagnóstico enriquecido
        user.id
      );

      toast({ 
        title: t('builder.toasts.save_success_title'), 
        description: `${t('builder.toasts.save_success_desc')} (${result.metricsCount} métricas extraídas, ${result.challengeCreated ? 'desafio criado' : 'desafio atualizado'})` 
      });
      navigate('/app');
    } catch (error: any) {
      toast({ title: t('builder.errors.save_title'), description: error?.message || t('builder.errors.save_generic'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const progressPercentage = (step / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/app')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t('common.back')}</span>
          </Button>
          <h1 className="text-lg md:text-xl font-semibold">{t('builder.title')}</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="hidden sm:inline text-muted-foreground">{t('builder.step_indicator.prefix')}</span>
            <span className="font-medium">{t('builder.step_indicator.value', { current: step, total: 5 })}</span>
          </div>
        </div>
        <div className="h-1 bg-muted">
          <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: `${progressPercentage}%` }} />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex flex-1 gap-0 overflow-hidden">
          {/* Left Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 p-4 space-y-4 border-r bg-muted/10 overflow-y-auto">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="px-2">
                <CardTitle className="text-lg">{t('builder.sidebar.summary_title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <div className="space-y-3">
                  {steps.map((stepInfo, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === step;
                    const isCompleted = stepNumber < step;
                    
                    return (
                      <div 
                        key={stepInfo.key}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                          isActive ? 'bg-primary/10 border border-primary/20 shadow-sm' : 
                          isCompleted ? 'bg-success/5' : 'bg-background/50 text-muted-foreground'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                          isCompleted ? 'bg-success text-success-foreground' :
                          isActive ? 'bg-primary text-primary-foreground' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium text-sm truncate ${isActive ? 'text-primary' : ''}`}>
                            {stepInfo.title}
                          </p>
                          <p className="text-[10px] mt-0.5 line-clamp-1">
                            {stepInfo.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in space-y-6">
              {step === 1 && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3 mb-6">
                   <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                   <p className="text-sm text-primary/90">
                     <strong>{t('builder.sidebar.consultant_hint')}:</strong> {t('builder.sidebar.ai_hints.step1')}
                   </p>
                </div>
              )}

              <div className="animate-fade-in pb-20">
                {step === 1 && <DataInputStep />}
                {step === 2 && <TemplateSelectionStep />}
                {step === 3 && <BlockEditorStep />}
                {step === 4 && <GenerationStep />}
                {step === 5 && <PreviewStep onConfirm={handleCreateReport} />}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-40">
        <div className="flex gap-3">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack} className="flex-1">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Button>
          )}
          {step < 5 ? (
            <Button onClick={handleNext} className="flex-1">
              {t('common.next')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleCreateReport} disabled={loading} className="flex-1">
              {loading ? t('common.processing') : t('builder.preview.cta_initial')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ReportBuilder() {
  return (
    <ReportBuilderProvider>
      <ReportBuilderContent />
    </ReportBuilderProvider>
  );
}