import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Target, Eye, Download, BarChart3, CheckCircle, AlertTriangle, Lightbulb, FileText, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import BrandName from "@/components/BrandName";

const ReportExamples = () => {
  const mainReport = {
    title: "Relatório Modelo",
    subtitle: "Análise Completa de Performance Empresarial",
    sections: [
      {
        title: "Resumo Executivo",
        icon: FileText,
        content: "Situação geral da empresa com principais métricas e direcionamentos estratégicos baseados nos dados analisados."
      },
      {
        title: "Destaques",
        icon: CheckCircle,
        content: "• Crescimento de 23% nas vendas\n• Redução de 15% nos custos operacionais\n• Aumento de 40% na satisfação do cliente"
      },
      {
        title: "Análise",
        icon: BarChart3,
        content: "Gráficos interativos com tendências, comparativos mensais e análise de correlações entre diferentes métricas."
      },
      {
        title: "Riscos & Oportunidades",
        icon: AlertTriangle,
        content: "Identificação de pontos de atenção e oportunidades de crescimento baseadas nos padrões encontrados nos dados."
      },
      {
        title: "Insights",
        icon: Lightbulb,
        content: "Recomendações específicas e próximos passos sugeridos para otimização dos resultados empresariais."
      },
      {
        title: "Checklist",
        icon: ClipboardCheck,
        content: "Lista de ações práticas organizadas por prioridade e impacto esperado nos resultados."
      }
    ]
  };

  const otherExamples = [
    {
      icon: TrendingUp,
      title: "Relatório de Vendas",
      description: "Performance comercial com insights acionáveis",
      color: "bg-primary",
      template: "sales-monthly"
    },
    {
      icon: Users,
      title: "Análise de Clientes",
      description: "Segmentação e comportamento detalhado",
      color: "bg-accent",
      template: "sales-monthly"
    },
    {
      icon: DollarSign,
      title: "Relatório Financeiro",
      description: "Análise financeira executiva completa",
      color: "bg-primary-dark",
      template: "financial-monthly"
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
        
        <div className="max-w-7xl mx-auto">
          {/* Main Report Example */}
          <div className="mb-12">
            <Card className="overflow-hidden border shadow-xl">
              {/* Header */}
              <div className="bg-primary p-6 sm:p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{mainReport.title}</h3>
                  <p className="text-white/90">{mainReport.subtitle}</p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-6 sm:p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mainReport.sections.map((section, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground">{section.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/app/novo-relatorio">
                      <Target className="w-5 h-5 mr-2" />
                      Gerar Relatório Modelo
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Examples */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {otherExamples.map((report, index) => (
              <Card key={index} className="overflow-hidden border shadow-lg card-hover">
                <div className={`${report.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <report.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{report.title}</h3>
                      <p className="text-white/90 text-sm">{report.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link to={`/app/novo-relatorio?template=${report.template}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Exemplo
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" className="px-8" asChild>
            <Link to="/app/novo-relatorio">
              <Target className="w-5 h-5 mr-2" />
              Criar Meu Relatório Agora
            </Link>
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
