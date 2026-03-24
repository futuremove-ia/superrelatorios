import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useI18nRouter } from "../hooks/useI18nRouter";
import { I18nSEO } from "./SEO/I18nSEO";

interface I18nRouterProps {
  children: React.ReactNode;
}

export const I18nRouter: React.FC<I18nRouterProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { detectPreferredLanguage } = useI18nRouter();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 1. Redirecionamento de raiz e caminhos absolutos sem prefixo
    const pathParts = location.pathname.split("/").filter(Boolean);
    const validLocales = ["pt-BR", "en-US", "es-ES"];

    // Se estiver na raiz ou se o primeiro segmento não for um locale válido
    if (
      location.pathname === "/" ||
      location.pathname === "" ||
      (pathParts.length > 0 && !validLocales.includes(pathParts[0]))
    ) {
      const preferred = detectPreferredLanguage();

      // Se já estivermos em um caminho que NÃO é um locale (ex: /app), redirecionamos prefixando
      const newPath = `/${preferred}${location.pathname === "/" ? "" : location.pathname}${location.search}`;

      // Evitar loop se por algum motivo Preferred for igual ao que já está (improvável aqui devido à condição !validLocales)
      if (newPath !== location.pathname + location.search) {
        navigate(newPath, { replace: true });
        return;
      }
    }

    // 2. Sincronizar idioma com o prefixo da URL (pt-BR, en-US, es-ES)
    const localePrefix = pathParts[0];
    if (validLocales.includes(localePrefix) && i18n.language !== localePrefix) {
      i18n.changeLanguage(localePrefix);
    }

    // 3. Atualizar atributo lang no HTML
    document.documentElement.lang = i18n.language;

    // Marcar como inicializado para evitar loops
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [
    location.pathname,
    i18n,
    isInitialized,
    navigate,
    detectPreferredLanguage,
  ]);

  return (
    <>
      <I18nSEO />
      {children}
    </>
  );
};

export default I18nRouter;
