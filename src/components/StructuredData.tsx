import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const StructuredData = () => {
  const { t } = useTranslation();
  
  const siteName = t('brand.super') + t('brand.reports');

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteName,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "description": "Gere relatórios profissionais com análises de consultor em minutos. Pare de perder tempo com planilhas e relatórios manuais.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://www.superrelatorios.com.br",
    "logo": "https://www.superrelatorios.com.br/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/superrelatorios",
      "https://twitter.com/superrelatorios"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};
