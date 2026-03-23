# 🌐 Guia de Internacionalização (i18n)

## 📋 Visão Geral

Guia completo para implementação e manutenção do sistema de internacionalização do SuperRelatórios, suportando português brasileiro, inglês e espanhol com roteamento híbrido.

## 🎯 Objetivos

- Implementar roteamento internacionalizado híbrido
- Suportar múltiplos idiomas (pt-BR, en-US, es-ES)
- Manter SEO otimizado para cada idioma
- Proporcionar experiência de usuário consistente

## 🏗️ Arquitetura

### Sistema Híbrido
- **Rotas Canônicas**: URLs base em inglês (`/app/dashboard`)
- **Rotas Localizadas**: URLs traduzidas (`/app/painel` em pt-BR)
- **Redirecionamento Inteligente**: Baseado no idioma do usuário/browser

### Componentes Principais
```
src/
├── routes/
│   ├── routes.ts              # Mapa de rotas internacionalizadas
├── hooks/
│   └── useI18nRouter.ts     # Hook para gerenciamento de i18n
├── components/
│   ├── I18nRouter.tsx         # Componente wrapper principal
│   ├── navigation/
│   │   ├── LocalizedNavigation.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── LocalizedBreadcrumbs.tsx
│   └── SEO/
│       └── I18nSEO.tsx          # SEO dinâmico multilíngue
└── locales/
    ├── pt-BR.json              # Traduções português
    ├── en-US.json              # Traduções inglês
    └── es-ES.json              # Traduções espanhol
```

## 🚀 Implementação

### 1. Configuração Inicial

#### Instalação de Dependências
```bash
npm install react-i18next i18next i18next-browser-languagedetector
```

#### Configuração do i18next
```typescript
// src/i18n/index.ts
import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .init({
    lng: 'pt-BR', // Idioma padrão
    fallbackLng: 'en-US',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    formatSeparator: ',',
      format: (value, format, lng) => {
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        return value;
      },
    },
    
    resources: {
      'pt-BR': require('./locales/pt-BR.json'),
      'en-US': require('./locales/en-US.json'),
      'es-ES': require('./locales/es-ES.json'),
    },
  });
```

### 2. Mapa de Rotas

#### Definição de Rotas
```typescript
// src/routes/routes.ts
export const ROUTES = {
  canonical: {
    dashboard: '/app/dashboard',
    reports: '/app/reports',
    reports_new: '/app/reports/new',
    metrics: '/app/metrics',
    metrics_config: '/app/metrics/config',
    decision_panel: '/app/decision-panel',
    analytics: '/app/analytics',
    consolidated: '/app/consolidated',
    priorities: '/app/priorities',
    action_plan: '/app/action-plan',
    data: '/app/data',
    profile: '/app/profile',
    settings: '/app/settings',
  },
  
  localized: {
    'pt-BR': {
      dashboard: '/app/painel',
      reports: '/app/relatorios',
      reports_new: '/app/novo-relatorio',
      metrics: '/app/indicadores',
      metrics_config: '/app/configurar-metricas',
      decision_panel: '/app/painel-decisao',
      analytics: '/app/analytics',
      consolidated: '/app/consolidado',
      priorities: '/app/prioridades',
      action_plan: '/app/plano-acao',
      data: '/app/meus-dados',
      profile: '/app/perfil',
      settings: '/app/configuracoes',
    },
    'en-US': {
      dashboard: '/app/dashboard',
      reports: '/app/reports',
      reports_new: '/app/reports/new',
      metrics: '/app/metrics',
      metrics_config: '/app/metrics/config',
      decision_panel: '/app/decision-panel',
      analytics: '/app/analytics',
      consolidated: '/app/consolidated',
      priorities: '/app/priorities',
      action_plan: '/app/action-plan',
      data: '/app/data',
      profile: '/app/profile',
      settings: '/app/settings',
    },
  },
} as const;
```

### 3. Hook Personalizado

#### useI18nRouter
```typescript
// src/hooks/useI18nRouter.ts
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES, getLocalizedPath, getCanonicalPath, detectLanguage } from '../routes/routes';

export const useI18nRouter = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState(detectLanguage());

  useEffect(() => {
    const detectedLanguage = detectLanguage();
    if (detectedLanguage !== currentLanguage) {
      setCurrentLanguage(detectedLanguage);
      i18n.changeLanguage(detectedLanguage);
    }
  }, []);

  const navigateLocalized = (path: string, options?: { replace?: boolean }) => {
    const localizedPath = getLocalizedPath(path, currentLanguage);
    if (options?.replace) {
      navigate(localizedPath, { replace: true });
    } else {
      navigate(localizedPath);
    }
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    
    // Redirecionar para a mesma rota no novo idioma
    const currentPath = location.pathname;
    const canonicalPath = getCanonicalPath(currentPath, currentLanguage);
    const newPath = getLocalizedPath(canonicalPath, language);
    navigate(newPath, { replace: true });
  };

  return {
    currentLanguage,
    changeLanguage,
    navigateLocalized,
    getCanonicalUrl: () => getCanonicalPath(location.pathname, currentLanguage),
    getAlternateUrls: () => {
      const canonicalPath = getCanonicalPath(location.pathname, currentLanguage);
      return Object.fromEntries(
        Object.entries(ROUTES.localized).map(([lang, routes]) => [
          lang,
          getLocalizedPath(canonicalPath, lang),
        ])
      );
    },
  };
};
```

### 4. Componentes

#### I18nRouter
```typescript
// src/components/I18nRouter.tsx
import { useEffect } from 'react';
import { useI18nRouter } from '../hooks/useI18nRouter';
import { I18nSEO } from './SEO';

interface I18nRouterProps {
  children: React.ReactNode;
}

export const I18nRouter: React.FC<I18nRouterProps> = ({ children }) => {
  const { currentLanguage } = useI18nRouter();

  useEffect(() => {
    // Atualizar atributo lang no HTML
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <>
      <I18nSEO />
      {children}
    </>
  );
};
```

#### LocalizedNavigation
```typescript
// src/components/navigation/LocalizedNavigation.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useI18nRouter } from '../../hooks/useI18nRouter';
import { ROUTES } from '../../routes/routes';

interface NavigationItem {
  key: keyof typeof ROUTES.canonical;
  icon: React.ComponentType<any>;
}

export const LocalizedNavigation: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();
  const { navigateLocalized } = useI18nRouter();
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    { key: 'dashboard', icon: LayoutDashboard },
    { key: 'reports', icon: FileText },
    { key: 'metrics', icon: BarChart3 },
    { key: 'decision_panel', icon: Brain },
    { key: 'analytics', icon: PieChart },
    { key: 'consolidated', icon: TrendingUp },
    { key: 'priorities', icon: Target },
    { key: 'action_plan', icon: ListChecks },
    { key: 'data', icon: Database },
    { key: 'profile', icon: User },
    { key: 'settings', icon: Settings },
  ];

  return (
    <nav className={className} aria-label={t('nav.main_navigation')}>
      {navigationItems.map((item) => {
        const localizedPath = ROUTES.localized[i18n.language][item.key];
        const isActive = location.pathname === localizedPath;
        
        return (
          <Link
            key={item.key}
            to={localizedPath}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }
            `}
          >
            <item.icon className="h-5 w-5" />
            {t(`routes.${item.key}`)}
          </Link>
        );
      })}
    </nav>
  );
};
```

#### LanguageSwitcher
```typescript
// src/components/navigation/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useI18nRouter } from '../../hooks/useI18nRouter';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
];

export const LanguageSwitcher: React.FC<{ variant?: 'ghost' | 'default' }> = ({ variant = 'default' }) => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useI18nRouter();

  return (
    <div className="relative">
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className={`
          ${variant === 'ghost' 
            ? 'bg-transparent border-none text-muted-foreground hover:bg-muted' 
            : 'bg-background border border-input hover:bg-accent hover:text-accent-foreground'
          }
          px-3 py-2 rounded-md text-sm font-medium transition-colors
        `}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
```

#### LocalizedBreadcrumbs
```typescript
// src/components/navigation/LocalizedBreadcrumbs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useI18nRouter } from '../../hooks/useI18nRouter';
import { ROUTES } from '../../routes/routes';

export const LocalizedBreadcrumbs: React.FC = () => {
  const { t } = useTranslation();
  const { navigateLocalized } = useI18nRouter();
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    
    pathSegments.reduce((acc, segment, index) => {
      const routePath = '/' + pathSegments.slice(0, index + 1).join('/');
      const routeKey = Object.keys(ROUTES.canonical).find(key => 
        ROUTES.canonical[key as keyof typeof ROUTES.canonical] === routePath
      );
      
      if (routeKey) {
        breadcrumbs.push({
          label: t(`routes.${routeKey}`),
          path: routePath,
        });
      }
      
      return acc;
    }, []);

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="mx-2">/</span>}
          <Link
            to={crumb.path}
            className="hover:text-foreground transition-colors"
          >
            {crumb.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};
```

#### I18nSEO
```typescript
// src/components/SEO/I18nSEO.tsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useI18nRouter } from '../../hooks/useI18nRouter';
import { Helmet } from 'react-helmet-async';

export const I18nSEO: React.FC = () => {
  const { t } = useTranslation();
  const { getCanonicalUrl, getAlternateUrls } = useI18nRouter();
  const canonicalUrl = `https://superrelatorios.com${getCanonicalUrl()}`;
  const alternateUrls = getAlternateUrls();

  return (
    <Helmet>
      <title>{t('seo.title')}</title>
      <meta name="description" content={t('seo.description')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`https://superrelatorios.com${url}`}
        />
      ))}
      
      <meta property="og:title" content={t('seo.title')} />
      <meta property="og:description" content={t('seo.description')} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={i18n.language} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": t('seo.site_name'),
          "url": canonicalUrl,
          "inLanguage": i18n.language,
        })}
      </script>
    </Helmet>
  );
};
```

## 🧪 Testes

### Testes Unitários
```bash
# Testar detecção de idioma
npm test -- --testNamePattern="i18n.*detection"

# Testar redirecionamento
npm test -- --testNamePattern="i18n.*redirect"

# Testar navegação localizada
npm test -- --testNamePattern="i18n.*navigation"
```

### Testes de Integração
```bash
# Testar componentes i18n
npm run test:i18n

# Testar SEO
npm run test:i18n --seo
```

## 🔧 Boas Práticas

### 1. Performance
- **Lazy loading** de traduções
- **Code splitting** por idioma
- **Cache** de detecção de idioma

### 2. SEO
- **Canonical URLs** para cada idioma
- **Hreflang tags** automáticas
- **Open Graph** localizado
- **Structured data** multilíngue

### 3. Manutenibilidade
- **Chaves descritivas** nas traduções
- **Consistência** entre idiomas
- **Documentação** sempre atualizada

### 4. Monitoramento
- **Analytics** para detectar problemas de i18n
- **Error boundaries** para capturar erros
- **Performance metrics** para tempo de carregamento

## 🚨 Problemas Comuns

### Detecção de Idioma
- **Problema**: Idioma não detectado corretamente
- **Solução**: Verificar ordem de detecção (localStorage > browser > geolocalização)

### Redirecionamento
- **Problema**: Loop infinito de redirecionamento
- **Solução**: Implementar flag para evitar redirecionamentos múltiplos

### SEO
- **Problema**: Conteúdo duplicado
- **Solução**: Usar URLs canônicas com hreflang

## 📈 Roadmap

### v1.0 (Atual)
- [x] Sistema básico i18n
- [x] Detecção automática
- [x] Redirecionamento inteligente
- [x] Componentes localizados

### v1.1 (Próximo)
- [ ] Espanhol (es-ES)
- [ ] Testes automatizados
- [ ] Performance otimizada
- [ ] Error boundaries

### v2.0 (Futuro)
- [ ] SSR/SSG para i18n
- [ ] CDN para traduções
- [ ] A/B testing para idiomas
- [ ] Analytics avançado

## 🔗 Recursos

- [React i18next Documentation](https://react.i18next.com/)
- [i18next Browser Detector](https://github.com/i18next/i18next-browser-languageDetector)
- [Google i18n Best Practices](https://developers.google.com/search/docs/solving-related-queries)
- [W3 i18n Standards](https://www.w3.org/International/)
