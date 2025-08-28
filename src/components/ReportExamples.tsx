import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Target, Eye, Download } from "lucide-react";

const ReportExamples = () => {
  const reportTypes = [
    {
      icon: TrendingUp,
      title: "Relatório de Vendas",
      description: "Performance comercial completa com insights acionáveis",
      metrics: ["Crescimento 15% no trimestre", "Top 5 produtos mais vendidos", "Análise de sazonalidade"],
      preview: "Suas vendas cresceram 15% comparado ao trimestre anterior, principalmente impulsionadas pelos produtos X e Y...",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Análise de Clientes",
      description: "Segmentação e comportamento dos seus clientes",
      metrics: ["73% clientes recorrentes", "Ticket médio R$ 340", "Retenção por região"],
      preview: "Sua base de clientes mostra alta fidelização, com 73% de recorrência. O perfil ideal é...",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Relatório Financeiro",
      description: "Análise financeira executiva com recomendações",
      metrics: ["Margem bruta 32%", "Fluxo de caixa positivo", "ROI por canal"],
      preview: "Situação financeira saudável com margem bruta de 32%. Recomendamos focar investimentos em...",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Veja exemplos de relatórios gerados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada relatório é único, adaptado aos seus dados e contexto empresarial. 
            Veja como seria um relatório baseado no seu negócio.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reportTypes.map((report, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${report.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{report.title}</h3>
                    <p className="text-white/90 text-sm">{report.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key metrics */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3 text-sm uppercase tracking-wide">
                    Principais Métricas
                  </h4>
                  <div className="space-y-2">
                    {report.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview text */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3 text-sm uppercase tracking-wide">
                    Prévia do Insight
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{report.preview}"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Exemplo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" className="px-8">
            <Target className="w-5 h-5 mr-2" />
            Criar Meu Relatório Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Primeiro relatório grátis • Sem cartão de crédito
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReportExamples;