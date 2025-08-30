import { Card } from "@/components/ui/card";
import { Shield, Users, MapPin } from "lucide-react";

const Trust = () => {
  const trustPillars = [
    {
      icon: Shield,
      title: "Privacidade & Controle",
      description: "Seus dados nunca saem do seu controle. Processamento local e exclusão automática após análise.",
      highlight: "100% seguro"
    },
    {
      icon: Users,
      title: "Primeira entrega guiada",
      description: "Acompanhamos seu primeiro relatório para garantir que tudo saia perfeito e útil para seu negócio.",
      highlight: "Suporte incluso"
    },
    {
      icon: MapPin,
      title: "Roadmap aberto",
      description: "Você sugere melhorias e funcionalidades. Nosso desenvolvimento é baseado no feedback dos usuários.",
      highlight: "Evolução contínua"
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparência e Confiança
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Como um produto novo, priorizamos transparência total e suporte dedicado para cada usuário.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPillars.map((pillar, index) => (
            <Card key={index} className="p-8 text-center border-0 bg-card hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                  {pillar.highlight}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;