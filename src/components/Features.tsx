import { Card } from "@/components/ui/card";
import { Zap, Target, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Rápido e Eficiente",
      description: "Gere relatórios completos em menos de 3 minutos com nossa tecnologia inteligente.",
    },
    {
      icon: Target,
      title: "Análises Profundas",
      description: "Insights valiosos e métricas relevantes para tomada de decisão estratégica.",
    },
    {
      icon: Shield,
      title: "Seguro e Confiável",
      description: "Seus dados protegidos com criptografia de nível empresarial.",
    },
  ];

  return (
    <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher o SuperRelatórios?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido especificamente para pequenas e médias empresas que precisam de análises profissionais sem complicação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center border-0 bg-gradient-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;