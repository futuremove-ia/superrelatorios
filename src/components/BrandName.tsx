import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface BrandNameProps {
  variant?: "default" | "on-blue" | "on-dark" | "header";
  className?: string;
}

const BrandName = ({ variant = "default", className }: BrandNameProps) => {
  const { t } = useTranslation();
  // DM Sans para logo - marca premium unicorn
  const baseClasses = "font-brand font-bold tracking-tight";

  if (variant === "on-blue") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="text-[#1E40AF]">{t("brand.super")}</span>
        <span className="text-white">{t("brand.reports")}</span>
      </span>
    );
  }

  if (variant === "on-dark") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="text-white">{t("brand.super")}</span>
        <span className="text-[#60A5FA]">{t("brand.reports")}</span>
      </span>
    );
  }

  if (variant === "header") {
    return (
      <span className={cn(baseClasses, "text-xl", className)}>
        <span className="text-foreground">{t("brand.super")}</span>
        <span className="text-[#2563EB]">{t("brand.reports")}</span>
      </span>
    );
  }

  return (
    <span className={cn(baseClasses, className)}>
      <span className="text-foreground">{t("brand.super")}</span>
      <span className="text-[#2563EB]">{t("brand.reports")}</span>
    </span>
  );
};

export default BrandName;
