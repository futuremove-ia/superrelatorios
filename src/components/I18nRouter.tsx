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
    // 1. Redirecionamento de raiz (Hotfix para 404 na home)
    if (location.pathname === "/" || location.pathname === "") {
      const preferred = detectPreferredLanguage();
      navigate(`/${preferred}`, { replace: true });
      return;
    }

    // 2. Atualizar atributo lang no HTML
    document.documentElement.lang = i18n.language;

    // Marcar como inicializado para evitar loops
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [
    location.pathname,
    i18n.language,
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
