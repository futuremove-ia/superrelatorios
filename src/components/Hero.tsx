import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pare de perder tempo com relatórios manuais
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-6 max-w-3xl mx-auto leading-relaxed">
            Gere relatórios profissionais em 3 cliques, com análises feitas por IA que ajudam a decidir.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-primary-dark font-semibold">
              Inteligência de consultor, por uma fração do custo.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/app/novo-relatorio?template=executivo">
                Criar Meu Primeiro Relatório
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="w-5 h-5 mr-2" />
              Ver Demonstração
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>3 cliques do upload ao PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Recomendações acionáveis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Seus dados, seu controle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;