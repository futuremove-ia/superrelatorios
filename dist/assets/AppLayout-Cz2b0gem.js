import { j as a } from "./vendor-data-DuuuwLk5.js";
import {
  u as B,
  L as m,
  r as E,
  b as T,
  O as F,
} from "./vendor-react-DfYPWlel.js";
import { c as G, u as v, a as g, B as x, b as I } from "./index-CaCe4Bjh.js";
import { I as W } from "./input-D9BHdvW6.js";
import { S as H, b as K } from "./sheet-BM81288x.js";
import {
  D as $,
  a as z,
  b as O,
  c as b,
  d as A,
} from "./dropdown-menu-BvbLk5zR.js";
import { A as q, b as J } from "./avatar-BNfmjNcO.js";
import { B as Q } from "./BrandName-B6a0tf9P.js";
import { L as X } from "./LogoIcon-DHgiZOPX.js";
import {
  aD as j,
  aA as N,
  U as V,
  h as y,
  _ as w,
  m as C,
  f as S,
  d as k,
  ar as D,
  g as R,
  ac as _,
  G as Y,
  C as Z,
  aC as aa,
  K as ea,
  T as sa,
  a0 as na,
  t as ra,
  M as ta,
  v as la,
  ai as oa,
  ae as ia,
  e as L,
  aE as ca,
} from "./vendor-utils-CGetvm_l.js";
import "./vendor-radix-CfL9Rjb9.js";
const da = ({ mainId: t = "main-content", className: o, children: e }) =>
    a.jsx("a", {
      href: `#${t}`,
      className: G(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2",
        "focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transition-all duration-200 font-medium text-sm",
        o,
      ),
      children: e || "Pular para conteúdo principal",
    }),
  U = ({ className: t = "", isMobile: o = !1 }) => {
    const e = B(),
      { t: s } = v(),
      { navigateLocalized: p, currentLanguage: i } = g(),
      c = {
        "pt-BR": [
          {
            name: s("nav.overview", { defaultValue: "Início" }),
            href: "/pt-BR/app",
            icon: j,
          },
          {
            name: s("nav.radar", { defaultValue: "Radar" }),
            href: "/pt-BR/app/radar",
            icon: N,
          },
          {
            name: s("nav.documents", { defaultValue: "Documentos" }),
            href: "/pt-BR/app/documentos",
            icon: V,
          },
          {
            name: s("nav.metrics", { defaultValue: "Indicadores" }),
            href: "/pt-BR/app/metricas",
            icon: y,
          },
          {
            name: s("nav.decision_panel", {
              defaultValue: "Painel de Decisão",
            }),
            href: "/pt-BR/app/painel-decisao",
            icon: w,
          },
          {
            name: s("nav.analytics", { defaultValue: "Analytics" }),
            href: "/pt-BR/app/analytics",
            icon: C,
          },
          {
            name: s("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/pt-BR/app/consolidado",
            icon: S,
          },
          {
            name: s("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/pt-BR/app/prioridades",
            icon: k,
          },
          {
            name: s("nav.action_plan", { defaultValue: "Plano de Ação" }),
            href: "/pt-BR/app/plano-acao",
            icon: D,
          },
          {
            name: s("nav.reports", { defaultValue: "Relatórios" }),
            href: "/pt-BR/app/relatorios",
            icon: R,
          },
          {
            name: s("nav.data", { defaultValue: "Meus Dados" }),
            href: "/pt-BR/app/dados",
            icon: _,
          },
        ],
        "en-US": [
          {
            name: s("nav.overview", { defaultValue: "Overview" }),
            href: "/en-US/app",
            icon: j,
          },
          {
            name: s("nav.radar", { defaultValue: "Radar" }),
            href: "/en-US/app/radar",
            icon: N,
          },
          {
            name: s("nav.documents", { defaultValue: "Documents" }),
            href: "/en-US/app/documentos",
            icon: V,
          },
          {
            name: s("nav.metrics", { defaultValue: "Metrics" }),
            href: "/en-US/app/metrics",
            icon: y,
          },
          {
            name: s("nav.decision_panel", { defaultValue: "Decision Panel" }),
            href: "/en-US/app/decision-panel",
            icon: w,
          },
          {
            name: s("nav.analytics", { defaultValue: "Analytics" }),
            href: "/en-US/app/analytics",
            icon: C,
          },
          {
            name: s("nav.consolidated", { defaultValue: "Consolidated" }),
            href: "/en-US/app/consolidated",
            icon: S,
          },
          {
            name: s("nav.priorities", { defaultValue: "Priorities" }),
            href: "/en-US/app/priorities",
            icon: k,
          },
          {
            name: s("nav.action_plan", { defaultValue: "Action Plan" }),
            href: "/en-US/app/action-plan",
            icon: D,
          },
          {
            name: s("nav.reports", { defaultValue: "Reports" }),
            href: "/en-US/app/reports",
            icon: R,
          },
          {
            name: s("nav.data", { defaultValue: "My Data" }),
            href: "/en-US/app/folders",
            icon: _,
          },
        ],
        "es-ES": [
          {
            name: s("nav.overview", { defaultValue: "Inicio" }),
            href: "/es-ES/app",
            icon: j,
          },
          {
            name: s("nav.radar", { defaultValue: "Radar" }),
            href: "/es-ES/app/radar",
            icon: N,
          },
          {
            name: s("nav.documents", { defaultValue: "Documentos" }),
            href: "/es-ES/app/documentos",
            icon: V,
          },
          {
            name: s("nav.metrics", { defaultValue: "Métricas" }),
            href: "/es-ES/app/metricas",
            icon: y,
          },
          {
            name: s("nav.decision_panel", {
              defaultValue: "Panel de Decisión",
            }),
            href: "/es-ES/app/panel-decision",
            icon: w,
          },
          {
            name: s("nav.analytics", { defaultValue: "Analytics" }),
            href: "/es-ES/app/analytics",
            icon: C,
          },
          {
            name: s("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/es-ES/app/consolidado",
            icon: S,
          },
          {
            name: s("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/es-ES/app/prioridades",
            icon: k,
          },
          {
            name: s("nav.action_plan", { defaultValue: "Plan de Acción" }),
            href: "/es-ES/app/plan-accion",
            icon: D,
          },
          {
            name: s("nav.reports", { defaultValue: "Informes" }),
            href: "/es-ES/app/informes",
            icon: R,
          },
          {
            name: s("nav.data", { defaultValue: "Mis Datos" }),
            href: "/es-ES/app/carpetas",
            icon: _,
          },
        ],
      },
      u = c[i] || c["pt-BR"],
      l = (n) =>
        n.endsWith("/app")
          ? e.pathname === n || e.pathname.startsWith(n + "/")
          : e.pathname === n,
      f = (n, r) => {
        (n.preventDefault(), p(r));
      };
    return o
      ? a.jsx("nav", {
          className: `grid grid-cols-5 gap-1 p-2 ${t}`,
          children: u.slice(0, 5).map((n) => {
            const r = n.icon,
              d = l(n.href);
            return a.jsxs(
              m,
              {
                to: n.href,
                onClick: (h) => f(h, n.href),
                className: `flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${d ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(r, { className: "h-4 w-4 mb-1" }),
                  a.jsx("span", {
                    className: "text-xs font-medium truncate",
                    children: n.name,
                  }),
                ],
              },
              n.href,
            );
          }),
        })
      : a.jsx("nav", {
          className: `space-y-2 ${t}`,
          children: u.map((n) => {
            const r = n.icon,
              d = l(n.href);
            return a.jsxs(
              m,
              {
                to: n.href,
                onClick: (h) => f(h, n.href),
                className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${d ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(r, { className: "h-4 w-4" }),
                  a.jsx("span", { children: n.name }),
                ],
              },
              n.href,
            );
          }),
        });
  },
  pa = ({ className: t = "", variant: o = "ghost", size: e = "default" }) => {
    const { i18n: s } = v(),
      { changeLanguage: p, currentLanguage: i } = g(),
      [c, u] = E.useState(!1),
      l = [
        { code: "pt-BR", name: "Português", flag: "🇧🇷" },
        { code: "en-US", name: "English", flag: "🇺🇸" },
        { code: "es-ES", name: "Español", flag: "🇪🇸" },
      ],
      f = async (r) => {
        if (!(r === i || c)) {
          u(!0);
          try {
            await p(r);
          } catch (d) {
            console.error("Error changing language:", d);
          } finally {
            u(!1);
          }
        }
      },
      n = l.find((r) => r.code === i) || l[0];
    return a.jsxs($, {
      children: [
        a.jsx(z, {
          asChild: !0,
          children: a.jsxs(x, {
            variant: o,
            size: e,
            className: `${t} ${c ? "opacity-50" : ""}`,
            disabled: c,
            children: [
              a.jsx(Y, { className: "h-4 w-4 mr-2" }),
              a.jsxs("span", {
                className: "hidden sm:inline",
                children: [n.flag, " ", n.name],
              }),
              a.jsx("span", { className: "sm:hidden", children: n.flag }),
            ],
          }),
        }),
        a.jsx(O, {
          align: "end",
          className: "w-48",
          children: l.map((r) =>
            a.jsxs(
              b,
              {
                onClick: () => f(r.code),
                className: `flex items-center justify-between cursor-pointer ${r.code === i ? "bg-accent" : ""}`,
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx("span", { className: "text-lg", children: r.flag }),
                      a.jsx("span", { children: r.name }),
                    ],
                  }),
                  r.code === i &&
                    a.jsx(Z, { className: "h-4 w-4 text-primary" }),
                ],
              },
              r.code,
            ),
          ),
        }),
      ],
    });
  },
  ua = ({ className: t = "" }) => {
    const o = B(),
      { t: e } = v(),
      { navigateLocalized: s, currentLanguage: p } = g(),
      i = {
        "pt-BR": {
          "/app": e("nav.overview", { defaultValue: "Visão Geral" }),
          "/app/relatorios": e("nav.reports", { defaultValue: "Relatórios" }),
          "/app/relatorios/novo": e("nav.new_report", {
            defaultValue: "Novo Relatório",
          }),
          "/app/metricas": e("nav.metrics", { defaultValue: "Indicadores" }),
          "/app/metricas/configurar": e("nav.metrics_config", {
            defaultValue: "Configurar Métricas",
          }),
          "/app/painel-decisao": e("nav.decision_panel", {
            defaultValue: "Painel de Decisão",
          }),
          "/app/analytics": e("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidado": e("nav.consolidated", {
            defaultValue: "Consolidado",
          }),
          "/app/prioridades": e("nav.priorities", {
            defaultValue: "Prioridades",
          }),
          "/app/plano-acao": e("nav.action_plan", {
            defaultValue: "Plano de Ação",
          }),
          "/app/dados": e("nav.data", { defaultValue: "Meus Dados" }),
          "/app/perfil": e("nav.profile", { defaultValue: "Perfil" }),
          "/app/configuracoes": e("nav.settings", {
            defaultValue: "Configurações",
          }),
        },
        "en-US": {
          "/app": e("nav.overview", { defaultValue: "Overview" }),
          "/app/reports": e("nav.reports", { defaultValue: "Reports" }),
          "/app/reports/new": e("nav.new_report", {
            defaultValue: "New Report",
          }),
          "/app/metrics": e("nav.metrics", { defaultValue: "Metrics" }),
          "/app/metrics/config": e("nav.metrics_config", {
            defaultValue: "Configure Metrics",
          }),
          "/app/decision-panel": e("nav.decision_panel", {
            defaultValue: "Decision Panel",
          }),
          "/app/analytics": e("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidated": e("nav.consolidated", {
            defaultValue: "Consolidated",
          }),
          "/app/priorities": e("nav.priorities", {
            defaultValue: "Priorities",
          }),
          "/app/action-plan": e("nav.action_plan", {
            defaultValue: "Action Plan",
          }),
          "/app/folders": e("nav.data", { defaultValue: "My Data" }),
          "/app/profile": e("nav.profile", { defaultValue: "Profile" }),
          "/app/settings": e("nav.settings", { defaultValue: "Settings" }),
        },
        "es-ES": {
          "/app": e("nav.overview", { defaultValue: "Visión General" }),
          "/app/informes": e("nav.reports", { defaultValue: "Informes" }),
          "/app/informes/nuevo": e("nav.new_report", {
            defaultValue: "Nuevo Informe",
          }),
          "/app/metricas": e("nav.metrics", { defaultValue: "Métricas" }),
          "/app/metricas/configurar": e("nav.metrics_config", {
            defaultValue: "Configurar Métricas",
          }),
          "/app/panel-decision": e("nav.decision_panel", {
            defaultValue: "Panel de Decisión",
          }),
          "/app/analytics": e("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidado": e("nav.consolidated", {
            defaultValue: "Consolidado",
          }),
          "/app/prioridades": e("nav.priorities", {
            defaultValue: "Prioridades",
          }),
          "/app/plan-accion": e("nav.action_plan", {
            defaultValue: "Plan de Acción",
          }),
          "/app/carpetas": e("nav.data", { defaultValue: "Mis Datos" }),
          "/app/perfil": e("nav.profile", { defaultValue: "Perfil" }),
          "/app/configuracion": e("nav.settings", {
            defaultValue: "Configuración",
          }),
        },
      },
      c = i[p] || i["pt-BR"],
      l = (() => {
        const n = o.pathname.split("/").filter(Boolean),
          r = [{ href: "/app", label: c["/app"] || "Dashboard" }];
        let d = "";
        for (let h = 1; h < n.length; h++) {
          const M = n[h];
          if (
            ((d += `/${M}`),
            M.match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
            ))
          )
            r.push({
              href: d,
              label: e("nav.details", { defaultValue: "Detalhes" }),
            });
          else {
            const P = c[d];
            P && r.push({ href: d, label: P });
          }
        }
        return r;
      })(),
      f = (n, r) => {
        (n.preventDefault(), s(r));
      };
    return l.length <= 1
      ? null
      : a.jsxs("nav", {
          className: `flex items-center space-x-1 text-sm text-muted-foreground ${t}`,
          children: [
            a.jsxs(m, {
              to: "/app",
              onClick: (n) => f(n, "/app"),
              className:
                "flex items-center hover:text-foreground transition-colors",
              children: [a.jsx(aa, { className: "h-4 w-4 mr-1" }), l[0].label],
            }),
            l
              .slice(1)
              .map((n, r) =>
                a.jsxs(
                  T.Fragment,
                  {
                    children: [
                      a.jsx(ea, { className: "h-4 w-4" }),
                      r === l.length - 1
                        ? a.jsx("span", {
                            className: "text-foreground font-medium",
                            children: n.label,
                          })
                        : a.jsx(m, {
                            to: n.href,
                            onClick: (d) => f(d, n.href),
                            className:
                              "hover:text-foreground transition-colors",
                            children: n.label,
                          }),
                    ],
                  },
                  n.href,
                ),
              ),
          ],
        });
  },
  ma = () => {
    const { isDemoMode: t } = I(),
      { t: o } = v(),
      { currentLanguage: e } = g();
    return t
      ? a.jsx("div", {
          className:
            "bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 px-4 py-3",
          children: a.jsxs("div", {
            className:
              "container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    className:
                      "bg-amber-200 dark:bg-amber-800 p-2 rounded-full",
                    children: a.jsx(sa, {
                      className: "h-4 w-4 text-amber-600 dark:text-amber-400",
                    }),
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("p", {
                        className: "font-semibold text-sm",
                        children: o("demo.banner_title", {
                          defaultValue: "Modo de Demonstração Ativo",
                        }),
                      }),
                      a.jsx("p", {
                        className: "text-xs opacity-90",
                        children: o("demo.banner_desc", {
                          defaultValue:
                            "Os dados não serão salvos permanentemente. Configure o banco de dados para ativar todas as funcionalidades.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(x, {
                variant: "outline",
                size: "sm",
                className:
                  "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:hover:bg-amber-900 dark:border-amber-700 dark:text-amber-100 shrink-0",
                asChild: !0,
                children: a.jsxs(m, {
                  to: `/${e}/app/configuracoes`,
                  children: [
                    a.jsx(na, { className: "mr-2 h-3.5 w-3.5" }),
                    o("demo.connect_db", { defaultValue: "Conectar Supabase" }),
                    a.jsx(ra, { className: "ml-2 h-3.5 w-3.5" }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Ca = () => {
    var u, l;
    const { user: t, signOut: o } = I(),
      { t: e } = v();
    B();
    const [s, p] = E.useState(!1),
      { currentLanguage: i } = g(),
      c = () =>
        a.jsxs("div", {
          className: "flex h-full flex-col",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3 px-6 py-4 border-b",
              children: [
                a.jsx(X, { size: "sm" }),
                a.jsx(Q, { variant: "header" }),
              ],
            }),
            a.jsx("nav", {
              className: "flex-1 px-4 py-6 space-y-2",
              "aria-label": e("nav.main_navigation"),
              children: a.jsx(U, { className: "space-y-2" }),
            }),
            a.jsx("div", {
              className: "border-t p-4",
              children: a.jsx("div", {
                className: "space-y-2",
                children: a.jsxs(m, {
                  to: `/${i}/app/configuracoes`,
                  onClick: () => p(!1),
                  className:
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                  children: [
                    a.jsx(L, { className: "h-5 w-5" }),
                    e("nav.settings"),
                  ],
                }),
              }),
            }),
          ],
        });
    return a.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        a.jsx("div", {
          className:
            "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",
          children: a.jsx("div", {
            className:
              "flex grow flex-col gap-y-5 overflow-y-auto border-r bg-gradient-subtle shadow-lg",
            children: a.jsx(c, {}),
          }),
        }),
        a.jsx(H, {
          open: s,
          onOpenChange: p,
          children: a.jsx(K, {
            side: "left",
            className: "w-72 p-0",
            children: a.jsx(c, {}),
          }),
        }),
        a.jsxs("div", {
          className: "lg:pl-72",
          children: [
            a.jsx("header", {
              className:
                "sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm",
              children: a.jsxs("div", {
                className: "flex h-14 sm:h-16 items-center gap-4 px-4 sm:px-6",
                children: [
                  a.jsx(x, {
                    variant: "ghost",
                    size: "sm",
                    className: "lg:hidden touch-target",
                    onClick: () => p(!0),
                    "aria-label": e("nav.open_menu"),
                    children: a.jsx(ta, { className: "h-5 w-5" }),
                  }),
                  a.jsx("div", {
                    className: "flex-1 max-w-md hidden sm:block",
                    children: a.jsxs("div", {
                      className: "relative",
                      children: [
                        a.jsx(la, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                        }),
                        a.jsx(W, {
                          placeholder: e("search.placeholder"),
                          className:
                            "pl-10 bg-muted/50 border-muted focus:border-primary transition-colors",
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", {
                    className: "flex items-center gap-2 ml-auto",
                    children: a.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        a.jsx(pa, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                        }),
                        a.jsx(x, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                          "aria-label": e("nav.notifications"),
                          children: a.jsx(oa, { className: "h-5 w-5" }),
                        }),
                        a.jsxs($, {
                          children: [
                            a.jsx(z, {
                              asChild: !0,
                              children: a.jsx(x, {
                                variant: "ghost",
                                className: "relative h-9 w-9 rounded-full",
                                "aria-label": e("nav.user_menu"),
                                children: a.jsx(q, {
                                  className: "h-9 w-9",
                                  children: a.jsx(J, {
                                    children:
                                      ((u = t == null ? void 0 : t.email) ==
                                      null
                                        ? void 0
                                        : u.charAt(0).toUpperCase()) || "U",
                                  }),
                                }),
                              }),
                            }),
                            a.jsxs(O, {
                              className: "w-56",
                              align: "end",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "flex items-center justify-start gap-2 p-2",
                                  children: a.jsxs("div", {
                                    className:
                                      "flex flex-col space-y-1 leading-none",
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium",
                                        children:
                                          ((l =
                                            t == null
                                              ? void 0
                                              : t.user_metadata) == null
                                            ? void 0
                                            : l.full_name) || "Usuário",
                                      }),
                                      a.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: t == null ? void 0 : t.email,
                                      }),
                                    ],
                                  }),
                                }),
                                a.jsx(A, {}),
                                a.jsx(b, {
                                  asChild: !0,
                                  children: a.jsxs(m, {
                                    to: `/${i}/app/perfil`,
                                    children: [
                                      a.jsx(ia, { className: "mr-2 h-4 w-4" }),
                                      e("nav.profile"),
                                    ],
                                  }),
                                }),
                                a.jsx(b, {
                                  asChild: !0,
                                  children: a.jsxs(m, {
                                    to: `/${i}/app/configuracoes`,
                                    children: [
                                      a.jsx(L, { className: "mr-2 h-4 w-4" }),
                                      e("nav.settings"),
                                    ],
                                  }),
                                }),
                                a.jsx(A, {}),
                                a.jsxs(b, {
                                  onClick: () => o(),
                                  className:
                                    "cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10",
                                  children: [
                                    a.jsx(ca, { className: "mr-2 h-4 w-4" }),
                                    e("nav.logout"),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            a.jsx(da, {}),
            a.jsxs("main", {
              id: "main-content",
              className:
                "min-h-[calc(100vh-4rem)] pb-20 lg:pb-0 animate-fade-in",
              children: [
                a.jsx("div", {
                  className: "container mx-auto px-4 py-6",
                  children: a.jsx("div", {
                    className: "mb-6",
                    children: a.jsx(ua, {}),
                  }),
                }),
                a.jsx(ma, {}),
                a.jsx(F, {}),
              ],
            }),
            a.jsx("nav", {
              className:
                "lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50",
              children: a.jsx(U, { isMobile: !0 }),
            }),
          ],
        }),
      ],
    });
  };
export { Ca as default };
