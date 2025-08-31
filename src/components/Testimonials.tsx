import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, Lock } from "lucide-react";

const Testimonials = () => {
  const trustPillars = [
    {
      icon: Shield,
      title: "Dados Seguros",
      highlight: "Criptografia bancária",
      description: "Seus dados são processados com a mesma segurança dos bancos. Nunca armazenamos informações sensíveis.",
    },
    {
      icon: Clock,
      title: "Sem Compromisso",
      highlight: "Teste grátis",
      description: "Experimente todos os recursos sem cartão de crédito. Cancele quando quiser, sem burocracias.",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      highlight: "Padrão consultoria",
      description: "Relatórios com metodologia profissional, validados por especialistas em análise de negócios.",
    },
    {
      icon: Lock,
      title: "Privacidade Total",
      highlight: "Seus dados, suas regras",
      description: "Processamento local quando possível. Política de privacidade transparente e controle total.",
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
            Construímos nossa solução pensando na segurança e transparência que sua empresa precisa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {trustPillars.map((pillar, index) => (
            <Card key={index} className="p-6 border-0 bg-card hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div className="mb-3">
                <span className="text-sm font-semibold text-primary-dark bg-primary/10 px-3 py-1 rounded-full">
                  {pillar.highlight}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;