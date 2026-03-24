import React from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18nRouter } from "@/hooks/useI18nRouter";

interface LanguageToggleProps {
  className?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = "",
  variant = "ghost",
  size = "default",
}) => {
  const { i18n } = useTranslation();
  const { changeLanguage } = useI18nRouter();

  const currentLanguage = i18n.language;

  const languages = [
    { code: "pt-BR", label: "Português", short: "PT" },
    { code: "en-US", label: "English", short: "EN" },
    { code: "es-ES", label: "Español", short: "ES" },
  ];

  const currentLangObj =
    languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`flex items-center gap-2 px-3 hover:bg-white/10 transition-all duration-200 ${className}`}
        >
          <Globe className="h-4 w-4 text-white/70" />
          <span className="font-semibold text-sm tracking-tight text-white">
            {currentLangObj.short}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-background/95 backdrop-blur-md border-border/50 shadow-xl"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center justify-between cursor-pointer focus:bg-primary/10 transition-colors ${
              currentLanguage === lang.code
                ? "font-bold text-primary"
                : "text-foreground/70"
            }`}
            onClick={() => changeLanguage(lang.code)}
          >
            <span>{lang.label}</span>
            {currentLanguage === lang.code && (
              <Check className="h-4 w-4 ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
