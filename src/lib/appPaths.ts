import { getLocalizedRoute } from "@/routes/routes";

/** Rotas canônicas por idioma → URLs finais com locale (via routeMap). */
export function appHomePath(lang: string): string {
  return getLocalizedRoute("/app", lang);
}

export function metricsPath(lang: string): string {
  const key = lang === "pt-BR" || lang === "es-ES" ? "/app/metricas" : "/app/metrics";
  return getLocalizedRoute(key, lang);
}

export function reportsIndexPath(lang: string): string {
  const key =
    lang === "pt-BR" ? "/app/relatorios" : lang === "es-ES" ? "/app/informes" : "/app/reports";
  return getLocalizedRoute(key, lang);
}

export function newReportPath(lang: string): string {
  const key =
    lang === "pt-BR"
      ? "/app/relatorios/novo"
      : lang === "es-ES"
        ? "/app/informes/nuevo"
        : "/app/reports/new";
  return getLocalizedRoute(key, lang);
}

export function reportDetailPath(lang: string, id: string): string {
  const key =
    lang === "pt-BR"
      ? `/app/relatorios/${id}`
      : lang === "es-ES"
        ? `/app/informes/${id}`
        : `/app/reports/${id}`;
  return getLocalizedRoute(key, lang);
}

export function foldersIndexPath(lang: string): string {
  const key =
    lang === "pt-BR" ? "/app/dados" : lang === "es-ES" ? "/app/carpetas" : "/app/folders";
  return getLocalizedRoute(key, lang);
}

export function folderDetailPath(lang: string, id: string): string {
  const key =
    lang === "pt-BR"
      ? `/app/dados/${id}`
      : lang === "es-ES"
        ? `/app/carpetas/${id}`
        : `/app/folders/${id}`;
  return getLocalizedRoute(key, lang);
}

export function settingsPath(lang: string): string {
  const key =
    lang === "pt-BR"
      ? "/app/configuracoes"
      : lang === "es-ES"
        ? "/app/configuracion"
        : "/app/settings";
  return getLocalizedRoute(key, lang);
}

export function profilePath(lang: string): string {
  const key = lang === "en-US" ? "/app/profile" : "/app/perfil";
  return getLocalizedRoute(key, lang);
}

export function prioritiesPath(lang: string): string {
  const key = lang === "en-US" ? "/app/priorities" : "/app/prioridades";
  return getLocalizedRoute(key, lang);
}

export function consolidatedPath(lang: string): string {
  const key = lang === "en-US" ? "/app/consolidated" : "/app/consolidado";
  return getLocalizedRoute(key, lang);
}

export function analyticsPath(lang: string): string {
  return getLocalizedRoute("/app/analytics", lang);
}
