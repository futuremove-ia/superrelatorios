import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLocalizedRoute } from "@/routes/routes";
import {
  LayoutDashboard,
  FileText,
  Folder,
  Target,
  ListChecks,
  BarChart3,
  Brain,
  TrendingUp,
  PieChart,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface LocalizedNavigationProps {
  className?: string;
  isMobile?: boolean;
}

type NavDef = {
  nameKey: string;
  pathKey: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultName: string;
};

const navigationDefs: Record<string, NavDef[]> = {
  "pt-BR": [
    { nameKey: "nav.overview", pathKey: "/app", icon: LayoutDashboard, defaultName: "Visão Geral" },
    { nameKey: "nav.metrics", pathKey: "/app/metricas", icon: BarChart3, defaultName: "Indicadores" },
    { nameKey: "nav.decision_panel", pathKey: "/app/painel-decisao", icon: Brain, defaultName: "Painel de Decisão" },
    { nameKey: "nav.analytics", pathKey: "/app/analytics", icon: PieChart, defaultName: "Analytics" },
    { nameKey: "nav.consolidated", pathKey: "/app/consolidado", icon: TrendingUp, defaultName: "Consolidado" },
    { nameKey: "nav.priorities", pathKey: "/app/prioridades", icon: Target, defaultName: "Prioridades" },
    { nameKey: "nav.action_plan", pathKey: "/app/plano-acao", icon: ListChecks, defaultName: "Plano de Ação" },
    { nameKey: "nav.reports", pathKey: "/app/relatorios", icon: FileText, defaultName: "Relatórios" },
    { nameKey: "nav.data", pathKey: "/app/dados", icon: Folder, defaultName: "Meus Dados" },
  ],
  "en-US": [
    { nameKey: "nav.overview", pathKey: "/app", icon: LayoutDashboard, defaultName: "Overview" },
    { nameKey: "nav.metrics", pathKey: "/app/metrics", icon: BarChart3, defaultName: "Metrics" },
    { nameKey: "nav.decision_panel", pathKey: "/app/decision-panel", icon: Brain, defaultName: "Decision Panel" },
    { nameKey: "nav.analytics", pathKey: "/app/analytics", icon: PieChart, defaultName: "Analytics" },
    { nameKey: "nav.consolidated", pathKey: "/app/consolidated", icon: TrendingUp, defaultName: "Consolidated" },
    { nameKey: "nav.priorities", pathKey: "/app/priorities", icon: Target, defaultName: "Priorities" },
    { nameKey: "nav.action_plan", pathKey: "/app/action-plan", icon: ListChecks, defaultName: "Action Plan" },
    { nameKey: "nav.reports", pathKey: "/app/reports", icon: FileText, defaultName: "Reports" },
    { nameKey: "nav.data", pathKey: "/app/folders", icon: Folder, defaultName: "My Data" },
  ],
  "es-ES": [
    { nameKey: "nav.overview", pathKey: "/app", icon: LayoutDashboard, defaultName: "Visión General" },
    { nameKey: "nav.metrics", pathKey: "/app/metricas", icon: BarChart3, defaultName: "Métricas" },
    { nameKey: "nav.decision_panel", pathKey: "/app/panel-decision", icon: Brain, defaultName: "Panel de Decisión" },
    { nameKey: "nav.analytics", pathKey: "/app/analytics", icon: PieChart, defaultName: "Analytics" },
    { nameKey: "nav.consolidated", pathKey: "/app/consolidado", icon: TrendingUp, defaultName: "Consolidado" },
    { nameKey: "nav.priorities", pathKey: "/app/prioridades", icon: Target, defaultName: "Prioridades" },
    { nameKey: "nav.action_plan", pathKey: "/app/plan-accion", icon: ListChecks, defaultName: "Plan de Acción" },
    { nameKey: "nav.reports", pathKey: "/app/informes", icon: FileText, defaultName: "Informes" },
    { nameKey: "nav.data", pathKey: "/app/carpetas", icon: Folder, defaultName: "Mis Datos" },
  ],
};

/** Primeiros 4 itens do rodapé mobile: visão geral, relatórios, dados, métricas (OP-016). */
const mobilePrimaryPathKeys: Record<string, string[]> = {
  "pt-BR": ["/app", "/app/relatorios", "/app/dados", "/app/metricas"],
  "en-US": ["/app", "/app/reports", "/app/folders", "/app/metrics"],
  "es-ES": ["/app", "/app/informes", "/app/carpetas", "/app/metricas"],
};

export const LocalizedNavigation: React.FC<LocalizedNavigationProps> = ({
  className = "",
  isMobile = false,
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [moreOpen, setMoreOpen] = useState(false);

  const defs = navigationDefs[lang] || navigationDefs["pt-BR"];

  const resolveHref = (pathKey: string) => getLocalizedRoute(pathKey, lang);

  const isActive = (pathKey: string, href: string) => {
    if (pathKey === "/app") {
      return location.pathname === href;
    }
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  const items = defs.map((def) => ({
    ...def,
    href: resolveHref(def.pathKey),
    name: t(def.nameKey, { defaultValue: def.defaultName }),
  }));

  if (isMobile) {
    const primaryKeys = mobilePrimaryPathKeys[lang] || mobilePrimaryPathKeys["pt-BR"];
    const primaryItems = primaryKeys
      .map((k) => items.find((item) => item.pathKey === k))
      .filter((item): item is (typeof items)[0] => Boolean(item));
    const restItems = items.filter((item) => !primaryKeys.includes(item.pathKey));

    const linkClass = (active: boolean) =>
      `flex flex-col items-center justify-center p-2 rounded-lg transition-colors min-h-[3.25rem] ${
        active
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`;

    return (
      <>
        <nav
          className={`grid grid-cols-5 gap-1 p-2 ${className}`}
          aria-label={t("nav.main_navigation")}
        >
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.pathKey, item.href);
            return (
              <Link key={item.pathKey} to={item.href} className={linkClass(active)}>
                <Icon className="h-4 w-4 mb-1 shrink-0" />
                <span className="text-xs font-medium truncate max-w-full px-0.5">{item.name}</span>
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setMoreOpen(true)}
            className={linkClass(false)}
            aria-label={t("nav.more_menu", { defaultValue: "Mais" })}
          >
            <Menu className="h-4 w-4 mb-1 shrink-0" />
            <span className="text-xs font-medium truncate max-w-full px-0.5">
              {t("nav.more_menu", { defaultValue: "Mais" })}
            </span>
          </button>
        </nav>

        <Sheet open={moreOpen} onOpenChange={setMoreOpen}>
          <SheetContent side="bottom" className="h-[min(70vh,28rem)]">
            <SheetHeader>
              <SheetTitle>{t("nav.more_menu", { defaultValue: "Mais" })}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-4 overflow-y-auto pb-6">
              {restItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.pathKey, item.href);
                return (
                  <Link
                    key={item.pathKey}
                    to={item.href}
                    onClick={() => setMoreOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <nav className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.pathKey, item.href);
        return (
          <Link
            key={item.pathKey}
            to={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default LocalizedNavigation;
