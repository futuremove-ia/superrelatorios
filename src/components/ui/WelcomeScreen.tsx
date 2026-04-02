import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, BarChart3, FileSpreadsheet, ArrowRight, Sparkles } from "lucide-react";
import { useI18nRouter } from "@/hooks/useI18nRouter";

const FEATURES = [
  {
    icon: BarChart3,
    title: "Dashboards Inteligentes",
    description: "Visualize métricas e KPIs em dashboards interativos",
  },
  {
    icon: FileSpreadsheet,
    title: "Análise de Dados",
    description: "Processe e analiseplanilhas com IA",
  },
  {
    icon: Sparkles,
    title: "Relatórios Automáticos",
    description: "Gere relatórios estratégicos em segundos",
  },
];

export function WelcomeScreen() {
  const navigate = useNavigate();
  const { currentLanguage } = useI18nRouter();

  const handleGetStarted = () => {
    navigate(`/${currentLanguage}/app/setup`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl">Bem-vindo ao Super Relatórios!</CardTitle>
          <CardDescription className="text-lg mt-2">
            A plataforma completa para análise estratégica e geração de relatórios automáticos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-muted/50"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="lg" onClick={handleGetStarted}>
            Começar Configuração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default WelcomeScreen;
