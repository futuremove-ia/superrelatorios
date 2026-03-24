import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getLocalizedRoute,
  getCanonicalRoute,
  detectLanguageFromRoute,
  routeMap,
} from "../routes/routes";

export const useI18nRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Detectar idioma preferido do usuário
  const detectPreferredLanguage = (): string => {
    // 1. Verificar se há preferência salva
    const savedLanguage = localStorage.getItem("preferred-language");
    if (savedLanguage && ["pt-BR", "en-US", "es-ES"].includes(savedLanguage)) {
      return savedLanguage;
    }

    // 2. Detectar idioma do navegador
    const browserLanguage = navigator.language;
    if (browserLanguage.startsWith("pt")) {
      return "pt-BR";
    } else if (browserLanguage.startsWith("es")) {
      return "es-ES";
    } else if (browserLanguage.startsWith("en")) {
      return "en-US";
    }

    // 3. Verificar geolocalização (se disponível)
    // Isso pode ser implementado com uma API de geolocalização
    // Por enquanto, fallback para pt-BR (mercado brasileiro)
    return "pt-BR";
  };

  // Navegar para rota localizada
  const navigateLocalized = (path: string, options?: { replace?: boolean }) => {
    const localizedPath = getLocalizedRoute(path, i18n.language);
    if (options?.replace) {
      navigate(localizedPath, { replace: true });
    } else {
      navigate(localizedPath);
    }
  };

  // Verificar se a rota atual precisa de redirecionamento
  const checkRouteRedirect = () => {
    const currentPath = location.pathname;

    // Especial: Raiz sempre redireciona para o idioma preferido
    if (currentPath === "/" || currentPath === "") {
      return true;
    }

    const preferredLanguage = detectPreferredLanguage();
    const routeLanguage = detectLanguageFromRoute(currentPath);

    // Se a rota não está no idioma preferido e não é uma rota agnóstica
    if (routeLanguage !== preferredLanguage) {
      const canonicalRoute = getCanonicalRoute(currentPath);
      const localizedRoute = getLocalizedRoute(
        canonicalRoute,
        preferredLanguage,
      );

      if (localizedRoute !== currentPath) {
        setIsRedirecting(true);
        // Salvar preferência
        localStorage.setItem("preferred-language", preferredLanguage);
        // Mudar idioma e redirecionar
        i18n.changeLanguage(preferredLanguage);
        navigate(localizedRoute, { replace: true });
        return true;
      }
    }

    return false;
  };

  // Mudar idioma e redirecionar
  const changeLanguage = (language: string) => {
    const currentPath = location.pathname;
    const canonicalRoute = getCanonicalRoute(currentPath);
    const localizedRoute = getLocalizedRoute(canonicalRoute, language);

    // Salvar preferência
    localStorage.setItem("preferred-language", language);

    // Mudar idioma e navegar
    i18n.changeLanguage(language);
    navigate(localizedRoute, { replace: true });
  };

  // Obter URL canônica para SEO
  const getCanonicalUrl = (): string => {
    const currentPath = location.pathname;
    return getCanonicalRoute(currentPath);
  };

  // Obter URLs alternativas para hreflang
  const getAlternateUrls = (): Record<string, string> => {
    const canonicalRoute = getCanonicalRoute(location.pathname);
    const alternates: Record<string, string> = {};

    for (const lang of ["pt-BR", "en-US", "es-ES"]) {
      alternates[lang] = getLocalizedRoute(canonicalRoute, lang);
    }

    return alternates;
  };

  // Verificar se a rota está disponível no idioma atual
  const isRouteAvailable = (path: string, language?: string): boolean => {
    const lang = language || i18n.language;
    const availableRoutes = routeMap[lang as keyof typeof routeMap];
    return availableRoutes
      ? Object.values(availableRoutes).includes(path)
      : false;
  };

  useEffect(() => {
    // Detectar idioma preferido do usuário (apenas uma vez)
    const preferredLanguage = detectPreferredLanguage();
    if (preferredLanguage !== i18n.language) {
      i18n.changeLanguage(preferredLanguage);
    }

    // Verificar redirecionamento ao montar (apenas uma vez)
    const shouldRedirect = checkRouteRedirect();
    if (shouldRedirect) {
      setIsRedirecting(false);
      localStorage.setItem("preferred-language", preferredLanguage);
      navigate(
        getLocalizedRoute(
          getCanonicalRoute(location.pathname),
          preferredLanguage,
        ),
        { replace: true },
      );
    }
  }, []); // Array vazio para executar apenas uma vez

  return {
    navigateLocalized,
    changeLanguage,
    getCanonicalUrl,
    getAlternateUrls,
    isRouteAvailable,
    detectPreferredLanguage,
    checkRedirect: checkRouteRedirect,
    isRedirecting,
    currentLanguage: i18n.language,
    currentPath: location.pathname,
  };
};
