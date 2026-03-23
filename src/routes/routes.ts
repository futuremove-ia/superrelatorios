import i18n from '../i18n';

export interface RouteMap {
  'pt-BR': Record<string, string>;
  'en-US': Record<string, string>;
  'es-ES': Record<string, string>;
}

// Mapeamento de rotas internacionalizadas
export const routeMap: RouteMap = {
  'pt-BR': {
    '/app': '/app',
    '/app/relatorios': '/app/reports',
    '/app/relatorios/novo': '/app/reports/new',
    '/app/relatorios/:id': '/app/reports/:id',
    '/app/metricas': '/app/metrics',
    '/app/metricas/configurar': '/app/metrics/config',
    '/app/painel-decisao': '/app/decision-panel',
    '/app/analytics': '/app/analytics',
    '/app/consolidado': '/app/consolidated',
    '/app/prioridades': '/app/priorities',
    '/app/plano-acao': '/app/action-plan',
    '/app/dados': '/app/folders',
    '/app/dados/:id': '/app/folders/:id',
    '/app/perfil': '/app/profile',
    '/app/configuracoes': '/app/settings',
    '/app/organizacao': '/app/organization',
    '/app/modelos': '/app/templates',
    '/app/login': '/login',
    '/app/cadastro': '/register',
    '/app/esqueci-senha': '/forgot-password',
  },
  'en-US': {
    '/app': '/app',
    '/app/reports': '/app/reports',
    '/app/reports/new': '/app/reports/new',
    '/app/reports/:id': '/app/reports/:id',
    '/app/metrics': '/app/metrics',
    '/app/metrics/config': '/app/metrics/config',
    '/app/decision-panel': '/app/decision-panel',
    '/app/analytics': '/app/analytics',
    '/app/consolidated': '/app/consolidated',
    '/app/priorities': '/app/priorities',
    '/app/action-plan': '/app/action-plan',
    '/app/folders': '/app/folders',
    '/app/folders/:id': '/app/folders/:id',
    '/app/profile': '/app/profile',
    '/app/settings': '/app/settings',
    '/app/organization': '/app/organization',
    '/app/templates': '/app/templates',
    '/app/login': '/login',
    '/app/register': '/app/register',
    '/app/forgot-password': '/app/forgot-password',
  },
  'es-ES': {
    '/app': '/app',
    '/app/informes': '/app/reports',
    '/app/informes/nuevo': '/app/reports/new',
    '/app/informes/:id': '/app/reports/:id',
    '/app/metricas': '/app/metrics',
    '/app/metricas/configurar': '/app/metrics/config',
    '/app/panel-decision': '/app/decision-panel',
    '/app/analytics': '/app/analytics',
    '/app/consolidado': '/app/consolidated',
    '/app/prioridades': '/app/priorities',
    '/app/plan-accion': '/app/action-plan',
    '/app/carpetas': '/app/folders',
    '/app/carpetas/:id': '/app/folders/:id',
    '/app/perfil': '/app/profile',
    '/app/configuracion': '/app/settings',
    '/app/organizacion': '/app/organization',
    '/app/plantillas': '/app/templates',
    '/app/inicio-sesion': '/app/login',
    '/app/registro': '/app/register',
    '/app/olvide-contrasena': '/app/forgot-password',
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
        return canonical;
      }
      // Verificar rotas com parâmetros
      if (localized.includes(':') && path.startsWith(localized.split(':')[0])) {
        const paramValue = path.replace(localized.split(':')[0], '');
        return canonical.replace(':id', paramValue);
      }
    }
  }
  return path;
};

// Função para detectar idioma da rota
export const detectLanguageFromRoute = (path: string): string => {
  for (const [lang, routes] of Object.entries(routeMap)) {
    for (const route of Object.values(routes)) {
      if (path === route || (route.includes(':') && path.startsWith(route.split(':')[0]))) {
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
