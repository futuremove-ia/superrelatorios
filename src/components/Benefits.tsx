import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Target, FileText, Eye, Lock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Resultados em minutos",
      description: "O que levava horas agora leva minutos. Foque seu time no mais importante.",
    },
    {
      icon: TrendingUp,
      title: "Análises e Próximos Passos",
      description: "Métricas de olho no dados, mas insights focados em ação e próximos passos decisão.",
    },
    {
      icon: Target,
      title: "Pronto pra enviar",
      description: "Layout limpo, logotipo e bonito — causa boa impressão em clientes, sócios e investidores.",
    },
    {
      icon: FileText,
      title: "Visualizações Automáticas",
      description: "Gráficos, tabelas e indicadores visuais para facilitar a compreensão.",
    },
    {
      icon: Eye,
      title: "Narrativa Adaptada",
      description: "O sistema reescreve tudo de acordo com o setor e contexto empresarial.",
    },
    {
      icon: Lock,
      title: "Dados Seguros",
      description: "Seus dados ficam protegidos com criptografia e são apenas seus.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inteligência de consultor, por uma fração do custo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pare de gastar horas criando relatórios manuais. Nossa IA faz o trabalho pesado para você decidir o que fazer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 border-0 bg-gradient-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;