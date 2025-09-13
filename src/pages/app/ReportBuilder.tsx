import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Upload, FileSpreadsheet, Copy, Zap, ArrowRight, CheckCircle, ArrowLeft, Sparkles,
  FileText, Target, BarChart3, Eye, ChevronRight, Menu, X, Database, Brain
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { AISuggestion } from '@/components/ui/ai-suggestion';
import { reportsService, mockTemplates, ReportTemplate } from '@/services/mockReports';
import { useToast } from '@/hooks/use-toast';

const ReportBuilder = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    dataSource: 'upload'
  });
  const [file, setFile] = useState<File | null>(null);
  const [textData, setTextData] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiSuggestionsOpen, setAiSuggestionsOpen] = useState(false);

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
  }, [searchParams]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      toast({
        title: "Arquivo carregado!",
        description: `${file.name} foi carregado com sucesso.`
      });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (formData.dataSource === 'upload' && !file) {
        toast({
          title: "Dados necessários",
          description: "Faça upload de um arquivo ou cole seus dados.",
          variant: "destructive"
        });
        return;
      }
      if (formData.dataSource === 'text' && !textData.trim()) {
        toast({
          title: "Dados necessários",
          description: "Cole ou digite seus dados para continuar.",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (step === 2 && !selectedTemplate) {
      toast({
        title: "Selecione um modelo",
        description: "Escolha um modelo para continuar.",
        variant: "destructive"
      });
      return;
    }

    if (step === 3 && !formData.title.trim()) {
      toast({
        title: "Título obrigatório",
        description: "Digite um título para seu relatório.",
        variant: "destructive"
      });
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
      const newReport = await reportsService.createReport({
        title: formData.title,
        description: formData.description,
        category: formData.category,
        template: selectedTemplate,
        data: formData.dataSource === 'upload' ? { file: file?.name } : { text: textData }
      });

      toast({
        title: "Relatório criado!",
        description: "Seu relatório foi criado com sucesso.",
      });

      navigate(`/app/relatorios/${newReport.id}`);
    } catch (error) {
      toast({
        title: "Erro ao criar relatório",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { 
      title: 'Input de Dados', 
      description: 'Upload ou cole seus dados',
      icon: Database,
      key: 'data'
    },
    { 
      title: 'Revisão & Escolha de Modelo', 
      description: 'IA organiza dados e sugere modelo',
      icon: Brain,
      key: 'model'
    },
    { 
      title: 'Geração e Edição', 
      description: 'Estrutura base gerada',
      icon: FileText,
      key: 'generation'
    },
    { 
      title: 'Visualização Final', 
      description: 'Relatório pronto para salvar',
      icon: Eye,
      key: 'final'
    },
  ];

  const progressPercentage = (step / 4) * 100;

  // Step 1: Input de Dados
  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Input de Dados</h2>
        <p className="text-muted-foreground">
          Escolha como você quer fornecer os dados para análise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card 
          className={`cursor-pointer transition-all card-hover ${
            formData.dataSource === 'upload' ? 'ring-2 ring-primary bg-primary/5' : ''
          }`}
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'upload' }))}
        >
          <CardHeader className="text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">Upload de Arquivo</CardTitle>
            <CardDescription>
              Excel, CSV, PDF, Word
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card 
          className={`cursor-pointer transition-all card-hover ${
            formData.dataSource === 'text' ? 'ring-2 ring-primary bg-primary/5' : ''
          }`}
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'text' }))}
        >
          <CardHeader className="text-center">
            <Copy className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">Colar Dados</CardTitle>
            <CardDescription>
              Cole dados diretamente
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {formData.dataSource === 'upload' && (
        <Card>
          <CardContent className="p-6">
            <div className="border-2 border-dashed border-muted rounded-xl p-8 text-center">
              <FileSpreadsheet className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  Arraste um arquivo aqui ou clique para selecionar
                </p>
                <p className="text-xs text-muted-foreground">
                  Suporta: Excel (.xlsx, .xls), CSV, PDF, Word (.docx)
                </p>
              </div>
              <Input
                type="file"
                className="mt-4 cursor-pointer"
                accept=".xlsx,.xls,.csv,.pdf,.docx"
                onChange={handleFileUpload}
              />
            </div>
            {file && (
              <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <p className="text-sm font-medium text-success">
                    Arquivo carregado: {file.name}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {formData.dataSource === 'text' && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Label htmlFor="textData">Cole seus dados aqui</Label>
              <Textarea
                id="textData"
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
                placeholder="Cole aqui seus dados, texto, números, tabelas..."
                rows={12}
                className="resize-none"
              />
              {textData && (
                <p className="text-xs text-muted-foreground">
                  {textData.length} caracteres
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  // Step 2: Revisão & Escolha de Modelo
  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Revisão & Escolha de Modelo</h2>
        <p className="text-muted-foreground">
          IA organizou seus dados. Escolha o modelo mais adequado
        </p>
      </div>

      {/* Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            Dados Processados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Fonte</p>
              <p className="text-muted-foreground">
                {formData.dataSource === 'upload' ? file?.name : 'Dados colados'}
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Tamanho</p>
              <p className="text-muted-foreground">
                {formData.dataSource === 'upload' 
                  ? `${Math.round((file?.size || 0) / 1024)} KB`
                  : `${textData.length} caracteres`
                }
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Status</p>
              <p className="text-success">Processado ✓</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Template Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Escolha um Modelo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTemplates.slice(0, 6).map((template) => (
            <Card 
              key={template.id}
              className={`cursor-pointer transition-all card-hover ${
                selectedTemplate === template.id ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Seções incluídas:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {template.structure.sections.slice(0, 3).map((section, index) => (
                      <li key={index}>• {section}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // Step 3: Geração e Edição
  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Geração e Edição</h2>
        <p className="text-muted-foreground">
          Configure os detalhes do seu relatório
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Relatório *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Ex: Relatório de Vendas Janeiro 2024"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Executivo">Executivo</SelectItem>
                  <SelectItem value="Vendas">Vendas</SelectItem>
                  <SelectItem value="Financeiro">Financeiro</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Operacional">Operacional</SelectItem>
                  <SelectItem value="RH">Recursos Humanos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Descreva brevemente o objetivo deste relatório..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Preview Structure */}
      <Card>
        <CardHeader>
          <CardTitle>Estrutura do Relatório</CardTitle>
          <CardDescription>
            Visualize como seu relatório será organizado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {['Título e Resumo Executivo', 'Principais KPIs', 'Análise Detalhada', 'Gráficos e Visualizações', 'Insights e Recomendações', 'Próximos Passos'].map((section, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-sm font-medium">{section}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Step 4: Visualização Final
  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Visualização Final</h2>
        <p className="text-muted-foreground">
          Revise as informações antes de criar seu relatório
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Informações do Relatório</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Título</p>
              <p className="font-medium">{formData.title}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Categoria</p>
              <p>{formData.category}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Modelo</p>
              <p>{mockTemplates.find(t => t.id === selectedTemplate)?.name}</p>
            </div>
            {formData.description && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Descrição</p>
                <p className="text-sm">{formData.description}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Dados Fornecidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Fonte</p>
              <p>{formData.dataSource === 'upload' ? 'Upload de arquivo' : 'Dados colados'}</p>
            </div>
            {file && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Arquivo</p>
                <p className="text-sm">{file.name}</p>
              </div>
            )}
            {textData && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Dados</p>
                <p className="text-sm">{textData.length} caracteres</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-primary mb-2">IA SuperRelatórios</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Nossa IA irá analisar seus dados, organizá-los de forma inteligente e criar um relatório 
                profissional com insights, gráficos e recomendações personalizadas.
              </p>
              <Button 
                onClick={handleCreateReport} 
                disabled={loading}
                className="w-full md:w-auto"
                size="lg"
              >
                {loading ? (
                  'Criando relatório...'
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Criar Relatório com IA
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left: Back Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => {
              const referrer = document.referrer;
              if (referrer.includes(window.location.origin) && !referrer.includes('/app')) {
                navigate('/');
              } else {
                navigate('/app');
              }
            }}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>

          {/* Center: Title */}
          <h1 className="text-lg md:text-xl font-semibold">
            Fluxo de Criação de Relatórios
          </h1>

          {/* Right: Step Indicator */}
          <div className="flex items-center gap-2 text-sm">
            <span className="hidden sm:inline text-muted-foreground">Passo</span>
            <span className="font-medium">{step} de 4</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sumário das Etapas</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {steps.map((stepInfo, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === step;
                    const isCompleted = stepNumber < step;
                    
                    return (
                      <div 
                        key={stepInfo.key}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                          isActive ? 'bg-primary/10 border border-primary/20' : 
                          isCompleted ? 'bg-success/5' : 'bg-muted/30'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          isCompleted ? 'bg-success text-success-foreground' :
                          isActive ? 'bg-primary text-primary-foreground' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${isActive ? 'text-primary' : ''}`}>
                            {stepInfo.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
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

          {/* Mobile Steps - Horizontal */}
          <div className="lg:hidden w-full mb-6">
            <div className="flex items-center justify-between">
              {steps.map((stepInfo, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === step;
                const isCompleted = stepNumber < step;
                
                return (
                  <div key={stepInfo.key} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      isCompleted ? 'bg-success text-success-foreground' :
                      isActive ? 'bg-primary text-primary-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-4 h-0.5 mx-1 ${
                        stepNumber < step ? 'bg-success' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {steps[step - 1].title}
            </p>
          </div>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl mx-auto lg:mx-0">
            <div className="animate-fade-in">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {step === 4 && renderStep4()}
            </div>
          </main>

          {/* Right Sidebar - Desktop */}
          <aside className="hidden xl:block w-80 space-y-4">
            <AISuggestion
              title="Dica da IA"
              description={
                step === 1 ? "Aceita Excel, CSV, PDF e dados copiados. Quanto mais dados, melhor a análise!" :
                step === 2 ? "Escolha o modelo mais próximo do seu objetivo. A IA já analisou seus dados!" :
                step === 3 ? "Um título descritivo ajuda na organização e busca posterior." :
                "Nossa IA irá processar seus dados e gerar insights automaticamente."
              }
              variant="compact"
            />
            
            {step === 4 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    O que nossa IA fará
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Analisar e organizar seus dados</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Gerar gráficos e visualizações</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Criar insights e recomendações</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Estruturar o relatório profissional</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </aside>
        </div>

        {/* Mobile AI Suggestions */}
        <div className="xl:hidden mt-6">
          <Collapsible open={aiSuggestionsOpen} onOpenChange={setAiSuggestionsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Sugestões da IA
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${aiSuggestionsOpen ? 'rotate-90' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <AISuggestion
                title="Dica da IA"
                description={
                  step === 1 ? "Aceita Excel, CSV, PDF e dados copiados. Quanto mais dados, melhor a análise!" :
                  step === 2 ? "Escolha o modelo mais próximo do seu objetivo. A IA já analisou seus dados!" :
                  step === 3 ? "Um título descritivo ajuda na organização e busca posterior." :
                  "Nossa IA irá processar seus dados e gerar insights automaticamente."
                }
                variant="compact"
              />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="flex gap-3">
          {step > 1 && (
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={handleNext} className="flex-1">
              Próximo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              onClick={handleCreateReport} 
              disabled={loading}
              className="flex-1"
            >
              {loading ? 'Criando...' : 'Criar Relatório'}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Bottom Padding */}
      <div className="lg:hidden h-20" />
    </div>
  );
};

export default ReportBuilder;