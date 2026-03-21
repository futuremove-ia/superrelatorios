import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface BrandNameProps {
  variant?: "default" | "on-blue" | "on-dark" | "header";
  className?: string;
}

const BrandName = ({ variant = "default", className }: BrandNameProps) => {
  const { t } = useTranslation();
  const baseClasses = "font-heading";
  
  if (variant === "on-blue") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="text-primary-dark">{t('brand.super')}</span>
        <span className="font-bold text-white">{t('brand.reports')}</span>
      </span>
    );
  }
  
  if (variant === "on-dark") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="text-white">{t('brand.super')}</span>
        <span className="font-bold text-primary">{t('brand.reports')}</span>
      </span>
    );
  }
  
  if (variant === "header") {
    return (
      <span className={cn(baseClasses, "text-xl", className)}>
        <span className="text-foreground">{t('brand.super')}</span>
        <span className="font-bold text-primary">{t('brand.reports')}</span>
      </span>
    );
  }
  
  return (
    <span className={cn(baseClasses, className)}>
      <span className="text-foreground">{t('brand.super')}</span>
      <span className="font-bold text-primary">{t('brand.reports')}</span>
    </span>
  );
};

export default BrandName;