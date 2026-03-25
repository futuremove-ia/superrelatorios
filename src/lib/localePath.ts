const LOCALES = ["pt-BR", "en-US", "es-ES"] as const;

export type AppLocale = (typeof LOCALES)[number];

export function preferredLocaleFromStorage(): AppLocale {
  const s = localStorage.getItem("preferred-language");
  if (s && (LOCALES as readonly string[]).includes(s)) return s as AppLocale;
  return "pt-BR";
}

/** Garante prefixo /:locale em paths internos (/app, /login) para evitar 404 pós-OAuth. */
export function ensurePathHasLocale(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const segments = path.split("/").filter(Boolean);
  const first = segments[0];
  if (first && (LOCALES as readonly string[]).includes(first)) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  const locale = preferredLocaleFromStorage();
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/app" || normalized.startsWith("/app/")) {
    return `/${locale}${normalized}`;
  }
  if (normalized === "/login" || normalized.startsWith("/login?")) {
    return normalized.replace(/^\/login/, `/${locale}/login`);
  }
  return `/${locale}${normalized}`;
}
