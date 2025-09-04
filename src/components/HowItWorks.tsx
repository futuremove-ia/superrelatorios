import { Card } from "@/components/ui/card";
import { Upload, Settings, Download } from "lucide-react";

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
      </div>
    </section>
  );
};

export default HowItWorks;