import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Settings, Download, TrendingUp, Target, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Envie seus dados",
      description: "Planilha (.xlsx/.csv) ou export do seu sistema. Detectamos automaticamente o tipo de análise.",
    },
    {
      step: 2, 
      icon: Settings,
      title: "Escolha o objetivo",
      description: "Resumo Executivo, Análise Completa, Riscos & Oportunidades — você decide o foco.",
    },
    {
      step: 3,
      icon: Download,
      title: "Gere e compartilhe",
      description: "Receba o relatório pronto para enviar no WhatsApp, salvar em PDF ou organizar por pastas/links.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma solução simples, pensada para PMEs velozes sem perder qualidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center border-0 bg-card hover:shadow-lg transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl text-primary font-semibold mb-2">Passo {step.step}</h3>
                  <h4 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Start Actions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Comece Agora com um Modelo
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-hover text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Relatório Executivo</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Performance geral e KPIs estratégicos
                </p>
                <Button variant="default" size="sm" asChild className="w-full">
                  <Link to="/app/novo-relatorio?template=executivo">
                    Criar Agora
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover text-center border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Relatório de Vendas</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Análise de vendas e performance comercial
                </p>
                <Button variant="default" size="sm" asChild className="w-full">
                  <Link to="/app/novo-relatorio?template=vendas">
                    Criar Agora
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover text-center border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileSpreadsheet className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Relatório Personalizado</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Crie do zero com IA adaptativa
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/app/novo-relatorio">
                    Criar Agora
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;