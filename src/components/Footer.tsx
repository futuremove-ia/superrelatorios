import BrandName from "@/components/BrandName";
import LogoIcon from "@/components/LogoIcon";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
              {t('landing.footer.mission')}
            </p>

          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('landing.footer.sections.product.title')}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#recursos" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.product.features')}</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.product.how_it_works')}</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.product.pricing')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.product.integrations')}</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">{t('landing.footer.sections.support.title')}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.support.help')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.support.docs')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.support.status')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.support.contact')}</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-4">{t('landing.footer.sections.legal.title')}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.legal.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.legal.terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.legal.security')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors py-1 inline-block">{t('landing.footer.sections.legal.cookies')}</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          {t('landing.footer.copyright', { year: currentYear, brand: <BrandName variant="on-dark" /> })}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
