import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AlertTriangle, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useI18nRouter } from "@/hooks/useI18nRouter";
import { settingsPath } from "@/lib/appPaths";

const DemoModeBanner = () => {
  const { isDemoMode } = useAuth();
  const { t } = useTranslation();
  const { currentLanguage } = useI18nRouter();

  if (!isDemoMode) return null;

  return (
    <div className="bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 px-4 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-amber-200 dark:bg-amber-800 p-2 rounded-full">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <p className="font-semibold text-sm">
              {t("demo.banner_title", {
                defaultValue: "Modo de Demonstração Ativo",
              })}
            </p>
            <p className="text-xs opacity-90">
              {t("demo.banner_desc", {
                defaultValue:
                  "Os dados não serão salvos permanentemente. Configure o banco de dados para ativar todas as funcionalidades.",
              })}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:hover:bg-amber-900 dark:border-amber-700 dark:text-amber-100 shrink-0"
          asChild
        >
          <Link to={settingsPath(currentLanguage)}>
            <Database className="mr-2 h-3.5 w-3.5" />
            {t("demo.connect_db", { defaultValue: "Conectar Supabase" })}
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DemoModeBanner;
