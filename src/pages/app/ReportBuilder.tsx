import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Upload, FileSpreadsheet, Copy, Zap, ArrowRight, CheckCircle, ArrowLeft, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StepIndicator } from '@/components/navigation/StepIndicator';
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
    if (step === 1 && !selectedTemplate) {
      toast({
        title: "Selecione um modelo",
        description: "Escolha um modelo para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2) {
      if (!formData.title.trim()) {
        toast({
          title: "Título obrigatório",
          description: "Digite um título para seu relatório.",
          variant: "destructive"
        });
        return;
      }
    }

    if (step === 3) {
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

      // Navigate to the created report
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
    { title: 'Escolher Modelo', description: 'Selecione o template ideal' },
    { title: 'Configurar Relatório', description: 'Defina título e categoria' },
    { title: 'Adicionar Dados', description: 'Upload ou cole seus dados' },
    { title: 'Revisar e Criar', description: 'Finalize com IA' },
  ];

  const renderStep1 = () => (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Escolha um Modelo</CardTitle>
        <CardDescription>
          Selecione o modelo mais adequado para seu relatório
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTemplates.map((template) => (
            <Card 
              key={template.id}
              className={`cursor-pointer transition-all ${
                selectedTemplate === template.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
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
                    {template.structure.sections.map((section, index) => (
                      <li key={index}>• {section}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Informações do Relatório</CardTitle>
        <CardDescription>
          Configure os detalhes básicos do seu relatório
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
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
  );

  const renderStep3 = () => (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Adicionar Dados</CardTitle>
        <CardDescription>
          Escolha como você quer fornecer os dados para o relatório
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card 
            className={`cursor-pointer transition-all ${
              formData.dataSource === 'upload' ? 'ring-2 ring-primary' : 'hover:shadow-md'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, dataSource: 'upload' }))}
          >
            <CardHeader className="text-center">
              <Upload className="w-8 h-8 mx-auto mb-2" />
              <CardTitle className="text-lg">Upload de Arquivo</CardTitle>
              <CardDescription>
                Envie uma planilha ou documento
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card 
            className={`cursor-pointer transition-all ${
              formData.dataSource === 'text' ? 'ring-2 ring-primary' : 'hover:shadow-md'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, dataSource: 'text' }))}
          >
            <CardHeader className="text-center">
              <Copy className="w-8 h-8 mx-auto mb-2" />
              <CardTitle className="text-lg">Colar Dados</CardTitle>
              <CardDescription>
                Cole dados diretamente no campo
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {formData.dataSource === 'upload' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
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
                className="mt-4"
                accept=".xlsx,.xls,.csv,.pdf,.docx"
                onChange={handleFileUpload}
              />
            </div>
            {file && (
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ Arquivo carregado: {file.name}
                </p>
              </div>
            )}
          </div>
        )}

        {formData.dataSource === 'text' && (
          <div className="space-y-2">
            <Label htmlFor="textData">Cole seus dados aqui</Label>
            <Textarea
              id="textData"
              value={textData}
              onChange={(e) => setTextData(e.target.value)}
              placeholder="Cole aqui seus dados, texto, números, tabelas..."
              rows={8}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Revisão e Criação</CardTitle>
        <CardDescription>
          Verifique as informações e crie seu relatório
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Informações do Relatório</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Título:</span> {formData.title}</p>
              <p><span className="font-medium">Categoria:</span> {formData.category}</p>
              <p><span className="font-medium">Modelo:</span> {mockTemplates.find(t => t.id === selectedTemplate)?.name}</p>
              {formData.description && (
                <p><span className="font-medium">Descrição:</span> {formData.description}</p>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Dados Fornecidos</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Fonte:</span> {
                  formData.dataSource === 'upload' ? 'Upload de arquivo' : 'Dados colados'
                }
              </p>
              {file && (
                <p><span className="font-medium">Arquivo:</span> {file.name}</p>
              )}
              {textData && (
                <p><span className="font-medium">Dados:</span> {textData.length} caracteres</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900">IA SuperRelatórios</h4>
              <p className="text-sm text-blue-700 mt-1">
                Nossa IA irá analisar seus dados, organizá-los de forma inteligente e criar um relatório 
                profissional com insights, gráficos e recomendações personalizadas.
              </p>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleCreateReport} 
          disabled={loading}
          className="w-full"
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
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-6 sm:mb-8 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <Button variant="ghost" size="sm" onClick={() => {
                  // Check if coming from landing page
                  const referrer = document.referrer;
                  if (referrer.includes(window.location.origin) && !referrer.includes('/app')) {
                    navigate('/');
                  } else {
                    navigate('/app');
                  }
                }}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Criar Novo Relatório
              </h1>
              <p className="text-muted-foreground text-center mt-2">
                Em apenas 4 passos, transforme seus dados em um relatório profissional com IA
              </p>
            </div>

            {/* Step Indicator */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <StepIndicator 
                steps={steps} 
                currentStep={step}
                className="max-w-2xl mx-auto"
              />
            </div>

            {/* Step Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {step === 4 && renderStep4()}

              {step < 4 && (
                <div className="flex justify-between max-w-2xl mx-auto">
                  <Button 
                    variant="outline" 
                    onClick={handleBack}
                    disabled={step === 1}
                    className="card-hover"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                  </Button>
                  <Button onClick={handleNext} className="card-hover">
                    Próximo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Sidebar */}
        <div className="hidden xl:block w-80 p-6">
          <div className="space-y-4">
            <AISuggestion
              title="Dica da IA"
              description={
                step === 1 ? "Escolha o modelo mais próximo do seu objetivo. Você pode personalizar depois!" :
                step === 2 ? "Um título descritivo ajuda na organização e busca posterior." :
                step === 3 ? "Aceita Excel, CSV, PDF e dados copiados. Quanto mais dados, melhor a análise!" :
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportBuilder;