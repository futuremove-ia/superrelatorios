import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, PieChart, Download } from "lucide-react";

const ReportShowcase = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exemplos de Relatórios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos relatórios ficam profissionais e prontos para apresentação.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Portrait Report */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">Formato Retrato (A4)</h3>
            <Card className="aspect-[3/4] p-4 lg:p-6 bg-white border-2 shadow-lg">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="border-b pb-4 mb-4">
                  <h4 className="text-lg font-bold text-primary">RELATÓRIO EXECUTIVO</h4>
                  <p className="text-sm text-muted-foreground">Análise de Vendas Q4 2024</p>
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="bg-primary/5 p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">Resumo Executivo</span>
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      Crescimento de 23% nas vendas comparado ao trimestre anterior...
                    </div>
                  </div>
                  
                  <div className="bg-accent/5 p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-sm">Principais Métricas</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white p-2 rounded">Receita: R$ 2.4M</div>
                      <div className="bg-white p-2 rounded">Crescimento: +23%</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <PieChart className="w-4 h-4 text-primary-dark" />
                      <span className="font-semibold text-sm">Distribuição por Região</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Sudeste</span>
                        <span className="w-16 h-2 bg-primary rounded"></span>
                        <span>45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sul</span>
                        <span className="w-12 h-2 bg-primary-dark rounded"></span>
                        <span>30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nordeste</span>
                        <span className="w-8 h-2 bg-accent rounded"></span>
                        <span>25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="border-t pt-2 mt-4">
                  <p className="text-xs text-muted-foreground text-center">
                    Gerado automaticamente • <span className="font-heading"><span className="text-foreground">Super</span><span className="font-bold text-primary">Relatórios</span></span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Landscape Report */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">Formato Paisagem (A4)</h3>
            <Card className="aspect-[4/3] p-4 lg:p-6 bg-white border-2 shadow-lg">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="border-b pb-3 mb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-bold text-primary">DASHBOARD ANALÍTICO</h4>
                      <p className="text-sm text-muted-foreground">Performance Mensal - Janeiro 2024</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <div>Gerado em: 31/01/2024</div>
                      <div>Período: 01-31 Jan</div>
                    </div>
                  </div>
                </div>
                
                 {/* Content Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                  {/* KPIs */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm text-primary-dark">Indicadores Chave</h5>
                    <div className="space-y-2">
                      <div className="bg-primary/5 p-2 rounded text-xs">
                        <div className="font-semibold">Receita Total</div>
                        <div className="text-lg font-bold text-primary">R$ 847K</div>
                        <div className="text-accent">↑ 12.5%</div>
                      </div>
                      <div className="bg-accent/5 p-2 rounded text-xs">
                        <div className="font-semibold">Novos Clientes</div>
                        <div className="text-lg font-bold text-accent">156</div>
                        <div className="text-primary">↑ 8.2%</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart Simulation */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm text-primary-dark">Tendência de Vendas</h5>
                    <div className="bg-gray-50 p-3 rounded h-24 flex items-end justify-between">
                      {[40, 60, 35, 80, 65, 90, 75].map((height, i) => (
                        <div 
                          key={i}
                          className="bg-primary rounded-t w-3"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-center text-muted-foreground">Jan 1-31, 2024</div>
                  </div>
                  
                  {/* Recommendations */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm text-primary-dark">Recomendações IA</h5>
                    <div className="space-y-2 text-xs">
                      <div className="bg-accent/10 p-2 rounded border-l-2 border-accent">
                        <div className="font-semibold">Oportunidade</div>
                        <div>Expandir campanha região Sul (+15% potencial)</div>
                      </div>
                      <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-400">
                        <div className="font-semibold">Atenção</div>
                        <div>Queda na retenção de clientes (-3%)</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="border-t pt-2 mt-3 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-1">
                  <span>Dados processados por IA • <span className="font-heading"><span className="text-foreground">Super</span><span className="font-bold text-primary">Relatórios</span></span></span>
                  <span>Página 1 de 3</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" className="text-lg px-8 py-4">
            <Download className="w-5 h-5 mr-2" />
            Criar Meu Relatório Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReportShowcase;