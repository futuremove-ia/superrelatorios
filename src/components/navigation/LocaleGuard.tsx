import React, { useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useI18nRouter } from "@/hooks/useI18nRouter";
import PageLoader from "@/components/layout/PageLoader";

interface LocaleGuardProps {
  children: React.ReactNode;
}

export const LocaleGuard: React.FC<LocaleGuardProps> = ({ children }) => {
  const { locale } = useParams<{ locale: string }>();
  const location = useLocation();
  const { i18n } = useTranslation();
  const { currentLanguage } = useI18nRouter();

  const supportedLanguages = ["pt-BR", "en-US", "es-ES"];

  // Sincroniza o i18next com o locale atual da URL
  // Deve vir antes de qualquer return condicional
  useEffect(() => {
    if (
      locale &&
      supportedLanguages.includes(locale) &&
      i18n.language !== locale
    ) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  // Se o locale da URL não for suportado, redireciona para o idioma base do usuário
  if (locale && !supportedLanguages.includes(locale)) {
    const newPath = location.pathname.replace(
      `/${locale}`,
      `/${currentLanguage}`,
    );
    return <Navigate to={newPath + location.search} replace />;
  }

  return <>{children}</>;
};

export default LocaleGuard;
