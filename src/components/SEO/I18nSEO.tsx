import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useI18nRouter } from '../../hooks/useI18nRouter';

interface I18nSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

export const I18nSEO: React.FC<I18nSEOProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  siteName = 'SuperRelatórios',
  locale
}) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { getCanonicalUrl, getAlternateUrls, currentLanguage } = useI18nRouter();

  // Metadados localizados
  const seoData = {
    'pt-BR': {
      defaultTitle: 'SuperRelatórios - Plataforma de Relatórios Inteligentes',
      defaultDescription: 'Transforme dados em decisões inteligentes com relatórios automatizados para PMEs brasileiras. Dashboard, analytics e métricas em tempo real.',
      defaultKeywords: 'relatórios, dashboard, analytics, PME, Brasil, métricas, business intelligence',
      siteName: 'SuperRelatórios',
    },
    'en-US': {
      defaultTitle: 'SuperRelatórios - Intelligent Reports Platform',
      defaultDescription: 'Transform data into intelligent decisions with automated reports for SMEs. Real-time dashboards, analytics and metrics.',
      defaultKeywords: 'reports, dashboard, analytics, SME, business intelligence, metrics',
      siteName: 'SuperRelatórios',
    },
    'es-ES': {
      defaultTitle: 'SuperRelatórios - Plataforma de Informes Inteligentes',
      defaultDescription: 'Transforma datos en decisiones inteligentes con informes automatizados para PYMEs. Dashboards, analytics y métricas en tiempo real.',
      defaultKeywords: 'informes, dashboard, analytics, PYME, business intelligence, métricas',
      siteName: 'SuperRelatórios',
    },
  };

  const currentSeo = seoData[currentLanguage as keyof typeof seoData] || seoData['pt-BR'];
  const canonicalUrl = getCanonicalUrl();
  const alternateUrls = getAlternateUrls();

  // Meta tags Open Graph
  const ogTitle = title || currentSeo.defaultTitle;
  const ogDescription = description || currentSeo.defaultDescription;
  const ogKeywords = keywords || currentSeo.defaultKeywords;
  const ogImage = image || 'https://superrelatorios.vercel.app/og-image.jpg';
  const ogLocale = locale || currentLanguage;

  useEffect(() => {
    // Adicionar structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
      },
      author: {
        '@type': 'Organization',
        name: currentSeo.siteName,
        url: 'https://superrelatorios.vercel.app',
      },
      inLanguage: currentLanguage,
      isAccessibleForFree: true,
    };

    // Remover structured data anterior
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Adicionar novo structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [ogTitle, ogDescription, canonicalUrl, currentLanguage]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{ogTitle}</title>
      <meta name="description" content={ogDescription} />
      <meta name="keywords" content={ogKeywords} />
      <meta name="author" content={currentSeo.siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language URLs */}
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={alternateUrls['en-US'] || canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={currentSeo.siteName} />
      <meta property="og:locale" content={ogLocale.replace('-', '_')} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={currentSeo.siteName} />
      
      {/* Language and Region */}
      <html lang={currentLanguage} />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Brazil" />
      
      {/* Content Type */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default I18nSEO;
