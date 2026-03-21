import React from 'react';
import { useTranslation } from 'react-i18next';


const PageLoader = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-background/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <p className="text-sm font-medium text-muted-foreground animate-pulse">{t('loading_state.system')}</p>
      </div>
    </div>
  );
};


export default PageLoader;
