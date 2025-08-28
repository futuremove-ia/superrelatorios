import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">SuperRelatórios</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </a>
        </nav>
        
        <Button variant="accent" className="font-semibold">
          Criar Relatório Grátis
        </Button>
      </div>
    </header>
  );
};

export default Header;