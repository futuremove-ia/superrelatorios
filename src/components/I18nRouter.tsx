import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useI18nRouter } from '../hooks/useI18nRouter';
import { I18nSEO } from './SEO/I18nSEO';

interface I18nRouterProps {
  children: React.ReactNode;
}

export const I18nRouter: React.FC<I18nRouterProps> = ({ children }) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Atualizar atributo lang no HTML
    document.documentElement.lang = i18n.language;
    
    // Marcar como inicializado para evitar loops
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [i18n.language]);

  return (
    <>
      <I18nSEO />
      {children}
    </>
  );
};

export default I18nRouter;
