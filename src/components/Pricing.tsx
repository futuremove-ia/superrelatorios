import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/sempre",
      description: "Comece já",
      features: ["2 relatórios/mês", "Templates básicos", "Export PDF"],
      cta: "Criar Relatório Grátis",
      highlighted: false,
      href: "/app/novo-relatorio",
    },
    {
      name: "Pro",
      price: "R$ 59",
      period: "/mês",
      description: "Mais usado",
      features: ["20 relatórios/mês", "Templates completos", "Compartilhamento por link", "Narrativas avançadas"],
      cta: "Experimentar Agora",
      highlighted: true,
      href: "/app/novo-relatorio",
    },
    {
      name: "Business",
      price: "R$ 149",
      period: "/mês",
      description: "Time",
      features: ["Usuários ilimitados", "Área e área", "Políticas de acesso", "Relatórios avançados"],
      cta: "Falar com Vendas",
      highlighted: false,
      href: "#",
    },
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos simples
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha por volume de relatórios e colaboração. Comece grátis e evolua quando fizer sentido.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-6 sm:p-8 border-2 transition-all duration-300 ${
              plan.highlighted 
                ? 'border-accent bg-card shadow-xl relative' 
                : 'border-border bg-card hover:border-primary/20 hover:shadow-lg'
            }`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Recomendado
                </div>
              )}
              <div className="text-center mb-8">
                <div className="mb-2">
                  <span className="text-sm text-primary font-semibold">{plan.description}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "accent" : "outline"} 
                className="w-full"
                size="lg"
                asChild
              >
                <Link to={plan.href}>{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
