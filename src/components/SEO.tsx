import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export const SEO = ({ title, description, canonicalUrl }: SEOProps) => {
  const { t } = useTranslation();
  
  // Default values using i18n
  const siteName = t('brand.super') + t('brand.reports');
  const defaultTitle = `${siteName} - Relatórios Inteligentes em 3 Cliques`;
  const defaultDesc = 'Transforme dados em relatórios inteligentes em apenas 3 cliques. Plataforma brasileira para PMEs, profissionais liberais e gestores.';

  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDesc = description || defaultDesc;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      
      {/* OpenGraph/Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      
      {/* Canonical URL for preventing duplicate content issues */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};
