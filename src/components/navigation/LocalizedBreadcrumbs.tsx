import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedRoute } from "@/routes/routes";
import { ChevronRight, Home } from "lucide-react";

const SUPPORTED_LOCALES = ["pt-BR", "en-US", "es-ES"] as const;

interface LocalizedBreadcrumbsProps {
  className?: string;
}

export const LocalizedBreadcrumbs: React.FC<LocalizedBreadcrumbsProps> = ({ className = "" }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const breadcrumbMap = {
    "pt-BR": {
      "/app": t("nav.overview", { defaultValue: "Visão Geral" }),
      "/app/reports": t("nav.reports", { defaultValue: "Relatórios" }),
      "/app/metrics": t("nav.metrics", { defaultValue: "Indicadores" }),
      "/app/folders": t("nav.data", { defaultValue: "Meus Dados" }),
      "/app/settings": t("nav.settings", { defaultValue: "Configurações" }),
      "/app/profile": t("nav.profile", { defaultValue: "Perfil" }),
      "/app/relatorios": t("nav.reports", { defaultValue: "Relatórios" }),
      "/app/relatorios/novo": t("nav.new_report", { defaultValue: "Novo Relatório" }),
      "/app/metricas": t("nav.metrics", { defaultValue: "Indicadores" }),
      "/app/metricas/configurar": t("nav.metrics_config", { defaultValue: "Configurar Métricas" }),
      "/app/painel-decisao": t("nav.decision_panel", { defaultValue: "Painel de Decisão" }),
      "/app/analytics": t("nav.analytics", { defaultValue: "Analytics" }),
      "/app/consolidado": t("nav.consolidated", { defaultValue: "Consolidado" }),
      "/app/prioridades": t("nav.priorities", { defaultValue: "Prioridades" }),
      "/app/plano-acao": t("nav.action_plan", { defaultValue: "Plano de Ação" }),
      "/app/dados": t("nav.data", { defaultValue: "Meus Dados" }),
      "/app/perfil": t("nav.profile", { defaultValue: "Perfil" }),
      "/app/configuracoes": t("nav.settings", { defaultValue: "Configurações" }),
    },
    "en-US": {
      "/app": t("nav.overview", { defaultValue: "Overview" }),
      "/app/reports": t("nav.reports", { defaultValue: "Reports" }),
      "/app/reports/new": t("nav.new_report", { defaultValue: "New Report" }),
      "/app/metrics": t("nav.metrics", { defaultValue: "Metrics" }),
      "/app/metrics/config": t("nav.metrics_config", { defaultValue: "Configure Metrics" }),
      "/app/decision-panel": t("nav.decision_panel", { defaultValue: "Decision Panel" }),
      "/app/analytics": t("nav.analytics", { defaultValue: "Analytics" }),
      "/app/consolidated": t("nav.consolidated", { defaultValue: "Consolidated" }),
      "/app/priorities": t("nav.priorities", { defaultValue: "Priorities" }),
      "/app/action-plan": t("nav.action_plan", { defaultValue: "Action Plan" }),
      "/app/folders": t("nav.data", { defaultValue: "My Data" }),
      "/app/profile": t("nav.profile", { defaultValue: "Profile" }),
      "/app/settings": t("nav.settings", { defaultValue: "Settings" }),
    },
    "es-ES": {
      "/app": t("nav.overview", { defaultValue: "Visión General" }),
      "/app/reports": t("nav.reports", { defaultValue: "Informes" }),
      "/app/metrics": t("nav.metrics", { defaultValue: "Métricas" }),
      "/app/folders": t("nav.data", { defaultValue: "Mis Datos" }),
      "/app/settings": t("nav.settings", { defaultValue: "Configuración" }),
      "/app/profile": t("nav.profile", { defaultValue: "Perfil" }),
      "/app/informes": t("nav.reports", { defaultValue: "Informes" }),
      "/app/informes/nuevo": t("nav.new_report", { defaultValue: "Nuevo Informe" }),
      "/app/metricas": t("nav.metrics", { defaultValue: "Métricas" }),
      "/app/metricas/configurar": t("nav.metrics_config", { defaultValue: "Configurar Métricas" }),
      "/app/panel-decision": t("nav.decision_panel", { defaultValue: "Panel de Decisión" }),
      "/app/analytics": t("nav.analytics", { defaultValue: "Analytics" }),
      "/app/consolidado": t("nav.consolidated", { defaultValue: "Consolidado" }),
      "/app/prioridades": t("nav.priorities", { defaultValue: "Prioridades" }),
      "/app/plan-accion": t("nav.action_plan", { defaultValue: "Plan de Acción" }),
      "/app/carpetas": t("nav.data", { defaultValue: "Mis Datos" }),
      "/app/perfil": t("nav.profile", { defaultValue: "Perfil" }),
      "/app/configuracion": t("nav.settings", { defaultValue: "Configuración" }),
    },
  };

  const breadcrumbs = breadcrumbMap[lang as keyof typeof breadcrumbMap] || breadcrumbMap["pt-BR"];

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const startIdx = SUPPORTED_LOCALES.includes(pathSegments[0] as (typeof SUPPORTED_LOCALES)[number])
      ? 1
      : 0;

    const homeHref = getLocalizedRoute("/app", lang);
    const items: { pathKey: string; href: string; label: string }[] = [
      { pathKey: "/app", href: homeHref, label: breadcrumbs["/app"] || "Dashboard" },
    ];

    let currentPath = "";
    for (let i = startIdx; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      currentPath += `/${segment}`;

      if (currentPath === "/app") {
        continue;
      }

      const label = segment.match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
      )
        ? t("nav.details", { defaultValue: "Detalhes" })
        : breadcrumbs[currentPath as keyof typeof breadcrumbs];

      if (label) {
        items.push({
          pathKey: currentPath,
          href: getLocalizedRoute(currentPath, lang),
          label,
        });
      }
    }

    return items;
  };

  const breadcrumbItems = generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}>
      <Link
        to={breadcrumbItems[0].href}
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        {breadcrumbItems[0].label}
      </Link>

      {breadcrumbItems.slice(1).map((item, index) => (
        <React.Fragment key={item.pathKey}>
          <ChevronRight className="h-4 w-4" />
          {index === breadcrumbItems.slice(1).length - 1 ? (
            <span className="text-foreground font-medium">{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default LocalizedBreadcrumbs;
