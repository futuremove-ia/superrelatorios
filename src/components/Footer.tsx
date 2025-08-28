import { BarChart3 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">SuperRelatórios</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Relatórios inteligentes para PMEs que querem crescer com dados e decisões mais assertivas.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#recursos" className="hover:text-background transition-colors">Recursos</a></li>
              <li><a href="#como-funciona" className="hover:text-background transition-colors">Como Funciona</a></li>
              <li><a href="#precos" className="hover:text-background transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Integrações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Segurança</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          © 2024 SuperRelatórios. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;