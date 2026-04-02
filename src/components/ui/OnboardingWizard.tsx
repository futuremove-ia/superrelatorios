import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, Building2, FolderOpen, FileUp, Check, Zap, BarChart3, Play, TrendingUp, TrendingDown, DollarSign, Users, Package } from "lucide-react";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { useI18nRouter } from "@/hooks/useI18nRouter";

type OnboardingGoal = "fast" | "deep" | "demo";
type PriorityArea = "foundation" | "efficiency" | "growth";

interface OnboardingData {
  companyName: string;
  companySize: string;
  sector: string;
  firstFileName: string;
  goal: OnboardingGoal;
  revenueModel: string;
  priorityArea: PriorityArea;
  uploadedDomains: string[];
}

const SECTORS = [
  { value: "technology", label: "Tecnologia" },
  { value: "retail", label: "Varejo" },
  { value: "manufacturing", label: "Manufatura" },
  { value: "services", label: "Serviços" },
  { value: "healthcare", label: "Saúde" },
  { value: "finance", label: "Financeiro" },
  { value: "education", label: "Educação" },
  { value: "food", label: "Alimentação" },
  { value: "construction", label: "Construção Civil" },
  { value: "logistics", label: "Logística" },
  { value: "agriculture", label: "Agronegócios" },
  { value: "entertainment", label: "Entretenimento" },
  { value: "other", label: "Outro" },
];

const REVENUE_MODELS = [
  { value: "recurring", label: "Receita Recorrente (SaaS/Assinatura)" },
  { value: "one_time", label: "Venda Única (Varejo/Serviços)" },
  { value: "hybrid", label: "Misto (Recorrente + Vendas)" },
  { value: "b2b", label: "B2B (Vendas para empresas)" },
  { value: "b2c", label: "B2C (Vendas para consumidor)" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 funcionários" },
  { value: "11-50", label: "11-50 funcionários" },
  { value: "51-200", label: "51-200 funcionários" },
  { value: "201-500", label: "201-500 funcionários" },
  { value: "500+", label: "500+ funcionários" },
];

const GOAL_OPTIONS = [
  {
    id: "fast" as OnboardingGoal,
    icon: Zap,
    title: "Resolver problema urgente",
    description: "Tenho pressa e quero ver o diagnóstico agora",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: "deep" as OnboardingGoal,
    icon: BarChart3,
    title: "Diagnóstico completo (360°)",
    description: "Quero uma visão completa da saúde da minha empresa",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: "demo" as OnboardingGoal,
    icon: Play,
    title: "Explorar com dados de exemplo",
    description: "Quero testar a plataforma primeiro",
    color: "bg-green-600 hover:bg-green-700",
  },
];

const PRIORITY_AREAS: { value: PriorityArea; label: string; icon: React.ElementType; description: string; color: string }[] = [
  { value: "foundation", label: "Fundação (Caixa e Finanças)", icon: DollarSign, description: "Fluxo de caixa, margem, endividamento", color: "bg-green-600" },
  { value: "efficiency", label: "Eficiência (Vendas e Marketing)", icon: TrendingUp, description: "Conversão, ticket médio, CAC", color: "bg-blue-600" },
  { value: "growth", label: "Crescimento (Operações e Pessoas)", icon: Users, description: "Produtividade, custos operacionais", color: "bg-purple-600" },
];

const DOMAIN_FILES: Record<PriorityArea, { domain: string; label: string; example: string }[]> = {
  foundation: [
    { domain: "finance", label: "DRE ou Balancete", example: "Planilha de resultados mensais" },
    { domain: "bank", label: "Extrato Bancário", example: "PDF do banco" },
  ],
  efficiency: [
    { domain: "sales", label: "Relatório de Vendas", example: "Planilha do CRM" },
    { domain: "marketing", label: "Dados de Anúncios", example: "Relatório Google Ads" },
  ],
  growth: [
    { domain: "operations", label: "Custos Operacionais", example: "Notas fiscais ou planilha de custos" },
    { domain: "hr", label: "Folha de Pagamento", example: "Resumo da folha" },
  ],
};

const STORAGE_KEY = "onboarding_wizard_data";

export function OnboardingWizard() {
  const navigate = useNavigate();
  const { currentLanguage } = useI18nRouter();
  const { organization } = useCurrentOrganization();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    companyName: "",
    companySize: "",
    sector: "",
    firstFileName: "",
    goal: "fast",
    revenueModel: "",
    priorityArea: "foundation",
    uploadedDomains: [],
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
        if (parsed.goal) setCurrentStep(1);
        if (parsed.companyName) setCurrentStep(2);
        if (parsed.sector) setCurrentStep(3);
        if (parsed.firstFileName) setCurrentStep(4);
      } catch (e) {
        console.warn("Failed to parse saved onboarding data:", e);
      }
    }
  }, []);

  const saveData = (newData: Partial<OnboardingData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleGoalSelect = (goal: OnboardingGoal) => {
    saveData({ goal });
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (currentStep === 0) return;
    
    if (data.goal === "deep" && currentStep === 3) {
      handleFinish();
    } else if (data.goal === "fast" && currentStep === 3) {
      handleFinish();
    } else if (currentStep === 4) {
      handleFinish();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) return;
    if (currentStep === 1) {
      setCurrentStep(0);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem("onboarding_completed", "true");
      localStorage.setItem("onboarding_goal", data.goal);
      localStorage.setItem("revenue_model", data.revenueModel);
      navigate(`/${currentLanguage}/app`);
    } catch (error) {
      console.error("Onboarding error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.companyName.trim() !== "" && data.companySize !== "";
      case 2:
        return data.sector !== "" && data.revenueModel !== "";
      case 3:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold">Qual seu objetivo hoje?</h3>
            <p className="text-sm text-muted-foreground">Escolha a porta de entrada mais adequada para você</p>
          </div>
          <div className="space-y-3">
            {GOAL_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleGoalSelect(option.id)}
                  className={`w-full p-4 rounded-lg text-white ${option.color} transition-all hover:scale-[1.02] hover:shadow-lg flex items-center gap-4 text-left`}
                >
                  <Icon className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{option.title}</div>
                    <div className="text-sm opacity-90">{option.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa *</Label>
              <Input
                id="companyName"
                placeholder="Ex: Minha Empresa Ltda"
                value={data.companyName}
                onChange={(e) => saveData({ companyName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companySize">Porte da Empresa *</Label>
              <Select
                value={data.companySize}
                onValueChange={(value) => saveData({ companySize: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o porte" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_SIZES.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        if (data.goal === "deep") {
          return (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Qual área mais te preocupa?</h3>
                <p className="text-sm text-muted-foreground">Escolha a prioridade para personalizarmos seu diagnóstico</p>
              </div>
              <div className="space-y-3">
                {PRIORITY_AREAS.map((area) => {
                  const Icon = area.icon;
                  return (
                    <button
                      key={area.value}
                      onClick={() => saveData({ priorityArea: area.value })}
                      className={`w-full p-4 rounded-lg text-white ${area.color} transition-all hover:scale-[1.02] hover:shadow-lg flex items-center gap-4 text-left ${
                        data.priorityArea === area.value ? "ring-4 ring-white" : ""
                      }`}
                    >
                      <Icon className="h-8 w-8 flex-shrink-0" />
                      <div>
                        <div className="font-semibold">{area.label}</div>
                        <div className="text-sm opacity-90">{area.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sector">Setor de Atuação *</Label>
              <Select
                value={data.sector}
                onValueChange={(value) => saveData({ sector: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent>
                  {SECTORS.map((sector) => (
                    <SelectItem key={sector.value} value={sector.value}>
                      {sector.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="revenueModel">Modelo de Receita *</Label>
              <Select
                value={data.revenueModel}
                onValueChange={(value) => saveData({ revenueModel: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o modelo" />
                </SelectTrigger>
                <SelectContent>
                  {REVENUE_MODELS.map((model) => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        const isDemo = data.goal === "demo";
        return (
          <div className="space-y-4">
            {isDemo ? (
              <div className="text-center py-8">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modo Demo</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Você irá explorar a plataforma com dados de exemplo. Pode pular ou carregar seus próprios dados.
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quase pronto!</h3>
                <p className="text-muted-foreground text-sm">
                  {data.goal === "fast" 
                    ? "Carregue um arquivo (DRE, extrato ou planilha) para receber seu diagnóstico em 30 segundos."
                    : "Você pode carregar seus documentos agora ou pular para explorar a plataforma."}
                </p>
              </div>
            )}
            {!isDemo && (
              <div className="space-y-2">
                <Label htmlFor="firstFile">Nome do Arquivo (opcional)</Label>
                <Input
                  id="firstFile"
                  placeholder="Ex: dados_2024.xlsx"
                  value={data.firstFileName}
                  onChange={(e) => saveData({ firstFileName: e.target.value })}
                />
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = () => {
    if (currentStep === 0) return "Bem-vindo!";
    const titles = ["", "Dados da Empresa", "Setor e Modelo", "Arquivo"];
    return titles[currentStep] || "";
  };

  const getStepDescription = () => {
    if (currentStep === 0) return "";
    const descriptions = ["", "Conte-nos sobre sua empresa", "Defina o setor e modelo de receita", "Carregue seu primeiro arquivo"];
    return descriptions[currentStep] || "";
  };

  const isGoalSelected = currentStep > 0;

  return (
    <Card className="w-full max-w-lg mx-auto">
      {isGoalSelected && (
        <CardHeader>
          <div className="flex items-center justify-between">
            {[
              { icon: Zap, label: "Objetivo" },
              { icon: Building2, label: "Empresa" },
              { icon: FolderOpen, label: "Setor" },
              { icon: FileUp, label: "Arquivo" },
            ].map((step, index) => {
              const Icon = step.icon;
              const isActive = index + 1 === currentStep;
              const isCompleted = index + 1 < currentStep;
              
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isCompleted
                          ? "bg-primary text-primary-foreground"
                          : isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                    </div>
                  </div>
                  {index < 3 && (
                    <div
                      className={`flex-1 h-0.5 mx-1 ${
                        isCompleted ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <CardTitle className="text-center mt-4">
            {getStepTitle()}
          </CardTitle>
          <CardDescription className="text-center">
            {getStepDescription()}
          </CardDescription>
        </CardHeader>
      )}
      <CardContent>{renderStepContent()}</CardContent>
      {isGoalSelected && (
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1 && data.goal === "fast"}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar
          </Button>
          <Button onClick={handleNext} disabled={!canProceed() || isLoading}>
            {currentStep === 3 ? (
              <>
                {isLoading ? "Salvando..." : "Finalizar"}
                <Check className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                Continuar
                <ChevronRight className="h-4 w-4 ml-1" />
              </>
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default OnboardingWizard;
