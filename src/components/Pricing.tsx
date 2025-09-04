import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/sempre",
      description: "Comece já",
      features: [
        "2 relatórios/mês",
        "Templates básicos",
        "Export PDF",
      ],
      cta: "Criar Relatório Grátis",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "R$ 59",
      period: "/mês",
      description: "Mais usado",
      features: [
        "20 relatórios/mês",
        "Templates completos",
        "Compartilhamento por link",
        "Narrativas avançadas",
      ],
      cta: "Experimentar Agora",
      highlighted: true,
    },
    {
      name: "Business",
      price: "R$ 149",
      period: "/mês",
      description: "Time",
      features: [
        "Usuários ilimitados",
        "Área e área",
        "Políticas de acesso",
        "Relatórios avançados",
      ],
      cta: "Falar com Vendas",
      highlighted: false,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha por volume de relatórios e colaboração. Comece grátis e evolua quando fizer sentido.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 border-2 transition-all duration-300 hover:shadow-xl ${
              plan.highlighted 
                ? 'border-accent bg-card scale-105' 
                : 'border-border bg-card hover:border-primary/20'
            }`}>
              <div className="text-center mb-8">
                <div className="mb-2">
                  <span className="text-sm text-primary font-semibold">{plan.description}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "accent" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;