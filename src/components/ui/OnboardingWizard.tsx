import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, ChevronLeft, Building2, FolderOpen, FileUp, Check } from "lucide-react";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { useI18nRouter } from "@/hooks/useI18nRouter";

interface OnboardingData {
  companyName: string;
  companySize: string;
  sector: string;
  firstFileName: string;
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

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 funcionários" },
  { value: "11-50", label: "11-50 funcionários" },
  { value: "51-200", label: "51-200 funcionários" },
  { value: "201-500", label: "201-500 funcionários" },
  { value: "500+", label: "500+ funcionários" },
];

const STEPS = [
  { id: 1, title: "Dados da Empresa", icon: Building2 },
  { id: 2, title: "Setor", icon: FolderOpen },
  { id: 3, title: "Primeiro Arquivo", icon: FileUp },
];

const STORAGE_KEY = "onboarding_wizard_data";

export function OnboardingWizard() {
  const navigate = useNavigate();
  const { currentLanguage } = useI18nRouter();
  const { organization } = useCurrentOrganization();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    companyName: "",
    companySize: "",
    sector: "",
    firstFileName: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
        if (parsed.companyName) setCurrentStep(2);
        if (parsed.sector) setCurrentStep(3);
      } catch {}
    }
  }, []);

  const saveData = (newData: Partial<OnboardingData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem("onboarding_completed", "true");
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
        return data.sector !== "";
      case 3:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
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
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center py-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quase pronto!</h3>
              <p className="text-muted-foreground text-sm">
                Você pode fazer upload do seu primeiro arquivo agora ou pular para explorar a plataforma.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstFile">Nome do Arquivo (opcional)</Label>
              <Input
                id="firstFile"
                placeholder="Ex: dados_2024.xlsx"
                value={data.firstFileName}
                onChange={(e) => saveData({ firstFileName: e.target.value })}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isCompleted
                        ? "bg-primary text-primary-foreground"
                        : isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <span className="text-xs mt-1 hidden sm:block">{step.title}</span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      isCompleted ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
        <CardTitle className="text-center mt-4">
          {STEPS[currentStep - 1].title}
        </CardTitle>
        <CardDescription className="text-center">
          Passo {currentStep} de {STEPS.length}
        </CardDescription>
      </CardHeader>
      <CardContent>{renderStepContent()}</CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
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
    </Card>
  );
}

export default OnboardingWizard;
