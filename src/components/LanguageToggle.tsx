import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18nRouter } from '@/hooks/useI18nRouter';

interface LanguageToggleProps {
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  variant = 'ghost',
  size = 'default'
}) => {
  const { i18n } = useTranslation();
  const { changeLanguage } = useI18nRouter();
  
  const currentLanguage = i18n.language;
  
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    changeLanguage(newLanguage);
  };
  
  const getLanguageDisplay = () => {
    switch (currentLanguage) {
      case 'pt-BR':
        return 'PT';
      case 'en-US':
        return 'EN';
      default:
        return 'PT';
    }
  };
  
  const getNextLanguageDisplay = () => {
    const nextLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    switch (nextLanguage) {
      case 'pt-BR':
        return 'EN';
      case 'en-US':
        return 'PT';
      default:
        return 'EN';
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleLanguage}
      className={`flex items-center gap-2 ${className}`}
      title={`Alternar para ${currentLanguage === 'pt-BR' ? 'English' : 'Português'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {getLanguageDisplay()} → {getNextLanguageDisplay()}
      </span>
    </Button>
  );
};

export default LanguageToggle;
