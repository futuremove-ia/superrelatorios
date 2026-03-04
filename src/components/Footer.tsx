import BrandName from "@/components/BrandName";
import LogoIcon from "@/components/LogoIcon";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LogoIcon size="sm" />
              <BrandName variant="on-dark" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Relatórios inteligentes com IA para PMEs que querem crescer com análise de dados, cenários e projeções automatizadas.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#recursos" className="hover:text-white transition-colors py-1 inline-block">Recursos</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors py-1 inline-block">Como Funciona</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors py-1 inline-block">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Integrações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Termos</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Segurança</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          © 2025 <BrandName variant="on-dark" />. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
