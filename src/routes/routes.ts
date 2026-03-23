import i18n from '../i18n';

export interface RouteMap {
  'pt-BR': Record<string, string>;
  'en-US': Record<string, string>;
  'es-ES': Record<string, string>;
}

// Mapeamento de rotas internacionalizadas
export const routeMap: RouteMap = {
  'pt-BR': {
    '/': '/pt-BR',
    '/login': '/pt-BR/login',
    '/app': '/pt-BR/app',
    '/app/relatorios': '/pt-BR/app/reports',
    '/app/relatorios/novo': '/pt-BR/app/reports/new',
    '/app/relatorios/:id': '/pt-BR/app/reports/:id',
    '/app/metricas': '/pt-BR/app/metrics',
    '/app/metricas/configurar': '/pt-BR/app/metrics/config',
    '/app/painel-decisao': '/pt-BR/app/decision-panel',
    '/app/analytics': '/pt-BR/app/analytics',
    '/app/consolidado': '/pt-BR/app/consolidated',
    '/app/prioridades': '/pt-BR/app/priorities',
    '/app/plano-acao': '/pt-BR/app/action-plan',
    '/app/dados': '/pt-BR/app/folders',
    '/app/dados/:id': '/pt-BR/app/folders/:id',
    '/app/perfil': '/pt-BR/app/profile',
    '/app/configuracoes': '/pt-BR/app/settings',
    '/app/organizacao': '/pt-BR/app/organization',
    '/app/modelos': '/pt-BR/app/templates',
    '/app/login': '/pt-BR/login',
    '/app/cadastro': '/pt-BR/register',
    '/app/esqueci-senha': '/pt-BR/forgot-password',
  },
  'en-US': {
    '/': '/en-US',
    '/login': '/en-US/login',
    '/app': '/en-US/app',
    '/app/reports': '/en-US/app/reports',
    '/app/reports/new': '/en-US/app/reports/new',
    '/app/reports/:id': '/en-US/app/reports/:id',
    '/app/metrics': '/en-US/app/metrics',
    '/app/metrics/config': '/en-US/app/metrics/config',
    '/app/decision-panel': '/en-US/app/decision-panel',
    '/app/analytics': '/en-US/app/analytics',
    '/app/consolidated': '/en-US/app/consolidated',
    '/app/priorities': '/en-US/app/priorities',
    '/app/action-plan': '/en-US/app/action-plan',
    '/app/folders': '/en-US/app/folders',
    '/app/folders/:id': '/en-US/app/folders/:id',
    '/app/profile': '/en-US/app/profile',
    '/app/settings': '/en-US/app/settings',
    '/app/organization': '/en-US/app/organization',
    '/app/templates': '/en-US/app/templates',
    '/app/login': '/en-US/login',
    '/app/register': '/en-US/register',
    '/app/forgot-password': '/en-US/forgot-password',
  },
  'es-ES': {
    '/': '/es-ES',
    '/login': '/es-ES/login',
    '/app': '/es-ES/app',
    '/app/informes': '/es-ES/app/reports',
    '/app/informes/nuevo': '/es-ES/app/reports/new',
    '/app/informes/:id': '/es-ES/app/reports/:id',
    '/app/metricas': '/es-ES/app/metrics',
    '/app/metricas/configurar': '/es-ES/app/metrics/config',
    '/app/panel-decision': '/es-ES/app/decision-panel',
    '/app/analytics': '/es-ES/app/analytics',
    '/app/consolidado': '/es-ES/app/consolidated',
    '/app/prioridades': '/es-ES/app/priorities',
    '/app/plan-accion': '/es-ES/app/action-plan',
    '/app/carpetas': '/es-ES/app/folders',
    '/app/carpetas/:id': '/es-ES/app/folders/:id',
    '/app/perfil': '/es-ES/app/profile',
    '/app/configuracion': '/es-ES/app/settings',
    '/app/organizacion': '/es-ES/app/organization',
    '/app/plantillas': '/es-ES/app/templates',
    '/app/inicio-sesion': '/es-ES/login',
    '/app/registro': '/es-ES/register',
    '/app/olvide-contrasena': '/es-ES/forgot-password',
  },
};

// Função para obter rota localizada
export const getLocalizedRoute = (path: string, targetLanguage?: string): string => {
  const lang = targetLanguage || i18n.language;
  const localizedRoutes = routeMap[lang as keyof RouteMap];
  
  if (!localizedRoutes) {
    return path; // Fallback para rota original
  }
  
  // Procurar rota exata
  if (localizedRoutes[path]) {
    return localizedRoutes[path];
  }
  
  // Procurar rota com parâmetros
  for (const [key, value] of Object.entries(localizedRoutes)) {
    if (key.includes(':') && path.startsWith(key.split(':')[0])) {
      const paramValue = path.replace(key.split(':')[0], '');
      return value.replace(':id', paramValue);
    }
  }
  
  return path; // Fallback
};

// Função para obter rota canônica (em inglês)
export const getCanonicalRoute = (path: string): string => {
  for (const [lang, routes] of Object.entries(routeMap)) {
    for (const [localized, canonical] of Object.entries(routes)) {
      if (path === localized) {
        return canonical as string;
      }
      // Verificar rotas com parâmetros
      if ((localized as string).includes(':') && path.startsWith((localized as string).split(':')[0])) {
        const paramValue = path.replace((localized as string).split(':')[0], '');
        return (canonical as string).replace(':id', paramValue);
      }
    }
  }
  return path;
};

// Função para detectar idioma da rota
export const detectLanguageFromRoute = (path: string): string => {
  for (const [lang, routes] of Object.entries(routeMap)) {
    for (const route of Object.values(routes)) {
      const routeStr = route as string;
      if (path === routeStr || (routeStr.includes(':') && path.startsWith(routeStr.split(':')[0]))) {
        return lang;
      }
    }
  }
  return i18n.language; // Fallback
};

// Rotas disponíveis por idioma
export const getAvailableRoutes = (language: string): string[] => {
  const routes = routeMap[language as keyof RouteMap];
  return routes ? Object.values(routes) : [];
};
