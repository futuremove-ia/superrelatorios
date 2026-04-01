import { u as v, a as g, j as a, B as x, b as E } from "./index-BNBvVWlM.js";
import { u as _, L as m, r as I, R as O, O as T } from "./router-C2uYhr1z.js";
import { I as F } from "./input-Cqi0Zq_u.js";
import { S as G, b as W } from "./sheet-BIDvziEx.js";
import {
  D as U,
  a as $,
  b as z,
  c as b,
  d as M,
} from "./dropdown-menu-CX3VKK1c.js";
import { A as q, b as H } from "./avatar-B58mbYRW.js";
import { B as J } from "./BrandName-CtyiOgdf.js";
import { L as K } from "./LogoIcon-C8anqLWR.js";
import {
  az as j,
  at as P,
  f as N,
  J as V,
  j as y,
  d as w,
  b as C,
  af as S,
  e as k,
  a6 as R,
  G as Q,
  C as X,
  ay as Y,
  aw as Z,
  T as aa,
  O as ea,
  q as sa,
  M as na,
  s as ra,
  ac as ta,
  a8 as la,
  c as A,
  aA as ia,
} from "./utils-CrQ_Kxni.js";
import "./index--tYt3JX3.js";
import "./index-GZYWVrBg.js";
import "./index-CQm93fZh.js";
import "./index-DGNdjbkF.js";
const L = ({ className: t = "", isMobile: d = !1 }) => {
    const e = _(),
      { t: n } = v(),
      { navigateLocalized: p, currentLanguage: i } = g(),
      o = {
        "pt-BR": [
          {
            name: n("nav.overview", { defaultValue: "Início" }),
            href: "/pt-BR/app",
            icon: j,
          },
          {
            name: n("nav.radar", { defaultValue: "Radar" }),
            href: "/pt-BR/app/radar",
            icon: P,
          },
          {
            name: n("nav.metrics", { defaultValue: "Indicadores" }),
            href: "/pt-BR/app/metricas",
            icon: N,
          },
          {
            name: n("nav.decision_panel", {
              defaultValue: "Painel de Decisão",
            }),
            href: "/pt-BR/app/painel-decisao",
            icon: V,
          },
          {
            name: n("nav.analytics", { defaultValue: "Analytics" }),
            href: "/pt-BR/app/analytics",
            icon: y,
          },
          {
            name: n("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/pt-BR/app/consolidado",
            icon: w,
          },
          {
            name: n("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/pt-BR/app/prioridades",
            icon: C,
          },
          {
            name: n("nav.action_plan", { defaultValue: "Plano de Ação" }),
            href: "/pt-BR/app/plano-acao",
            icon: S,
          },
          {
            name: n("nav.reports", { defaultValue: "Relatórios" }),
            href: "/pt-BR/app/relatorios",
            icon: k,
          },
          {
            name: n("nav.data", { defaultValue: "Meus Dados" }),
            href: "/pt-BR/app/dados",
            icon: R,
          },
        ],
        "en-US": [
          {
            name: n("nav.overview", { defaultValue: "Overview" }),
            href: "/en-US/app",
            icon: j,
          },
          {
            name: n("nav.metrics", { defaultValue: "Metrics" }),
            href: "/en-US/app/metrics",
            icon: N,
          },
          {
            name: n("nav.decision_panel", { defaultValue: "Decision Panel" }),
            href: "/en-US/app/decision-panel",
            icon: V,
          },
          {
            name: n("nav.analytics", { defaultValue: "Analytics" }),
            href: "/en-US/app/analytics",
            icon: y,
          },
          {
            name: n("nav.consolidated", { defaultValue: "Consolidated" }),
            href: "/en-US/app/consolidated",
            icon: w,
          },
          {
            name: n("nav.priorities", { defaultValue: "Priorities" }),
            href: "/en-US/app/priorities",
            icon: C,
          },
          {
            name: n("nav.action_plan", { defaultValue: "Action Plan" }),
            href: "/en-US/app/action-plan",
            icon: S,
          },
          {
            name: n("nav.reports", { defaultValue: "Reports" }),
            href: "/en-US/app/reports",
            icon: k,
          },
          {
            name: n("nav.data", { defaultValue: "My Data" }),
            href: "/en-US/app/folders",
            icon: R,
          },
        ],
        "es-ES": [
          {
            name: n("nav.overview", { defaultValue: "Inicio" }),
            href: "/es-ES/app",
            icon: j,
          },
          {
            name: n("nav.radar", { defaultValue: "Radar" }),
            href: "/es-ES/app/radar",
            icon: P,
          },
          {
            name: n("nav.metrics", { defaultValue: "Métricas" }),
            href: "/es-ES/app/metricas",
            icon: N,
          },
          {
            name: n("nav.decision_panel", {
              defaultValue: "Panel de Decisión",
            }),
            href: "/es-ES/app/panel-decision",
            icon: V,
          },
          {
            name: n("nav.analytics", { defaultValue: "Analytics" }),
            href: "/es-ES/app/analytics",
            icon: y,
          },
          {
            name: n("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/es-ES/app/consolidado",
            icon: w,
          },
          {
            name: n("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/es-ES/app/prioridades",
            icon: C,
          },
          {
            name: n("nav.action_plan", { defaultValue: "Plan de Acción" }),
            href: "/es-ES/app/plan-accion",
            icon: S,
          },
          {
            name: n("nav.reports", { defaultValue: "Informes" }),
            href: "/es-ES/app/informes",
            icon: k,
          },
          {
            name: n("nav.data", { defaultValue: "Mis Datos" }),
            href: "/es-ES/app/carpetas",
            icon: R,
          },
        ],
      },
      u = o[i] || o["pt-BR"],
      l = (s) =>
        s.endsWith("/app")
          ? e.pathname === s || e.pathname.startsWith(s + "/")
          : e.pathname === s,
      f = (s, r) => {
        (s.preventDefault(), p(r));
      };
    return d
      ? a.jsx("nav", {
          className: `grid grid-cols-5 gap-1 p-2 ${t}`,
          children: u.slice(0, 5).map((s) => {
            const r = s.icon,
              c = l(s.href);
            return a.jsxs(
              m,
              {
                to: s.href,
                onClick: (h) => f(h, s.href),
                className: `flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(r, { className: "h-4 w-4 mb-1" }),
                  a.jsx("span", {
                    className: "text-xs font-medium truncate",
                    children: s.name,
                  }),
                ],
              },
              s.href,
            );
          }),
        })
      : a.jsx("nav", {
          className: `space-y-2 ${t}`,
          children: u.map((s) => {
            const r = s.icon,
              c = l(s.href);
            return a.jsxs(
              m,
              {
                to: s.href,
                onClick: (h) => f(h, s.href),
                className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(r, { className: "h-4 w-4" }),
                  a.jsx("span", { children: s.name }),
                ],
              },
              s.href,
            );
          }),
        });
  },
  oa = ({ className: t = "", variant: d = "ghost", size: e = "default" }) => {
    const { i18n: n } = v(),
      { changeLanguage: p, currentLanguage: i } = g(),
      [o, u] = I.useState(!1),
      l = [
        { code: "pt-BR", name: "Português", flag: "🇧🇷" },
        { code: "en-US", name: "English", flag: "🇺🇸" },
        { code: "es-ES", name: "Español", flag: "🇪🇸" },
      ],
      f = async (r) => {
        if (!(r === i || o)) {
          u(!0);
          try {
            await p(r);
          } catch (c) {
            console.error("Error changing language:", c);
          } finally {
            u(!1);
          }
        }
      },
      s = l.find((r) => r.code === i) || l[0];
    return a.jsxs(U, {
      children: [
        a.jsx($, {
          asChild: !0,
          children: a.jsxs(x, {
            variant: d,
            size: e,
            className: `${t} ${o ? "opacity-50" : ""}`,
            disabled: o,
            children: [
              a.jsx(Q, { className: "h-4 w-4 mr-2" }),
              a.jsxs("span", {
                className: "hidden sm:inline",
                children: [s.flag, " ", s.name],
              }),
              a.jsx("span", { className: "sm:hidden", children: s.flag }),
            ],
          }),
        }),
        a.jsx(z, {
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
                    a.jsx(X, { className: "h-4 w-4 text-primary" }),
                ],
              },
              r.code,
            ),
          ),
        }),
      ],
    });
  },
  ca = ({ className: t = "" }) => {
    const d = _(),
      { t: e } = v(),
      { navigateLocalized: n, currentLanguage: p } = g(),
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
      o = i[p] || i["pt-BR"],
      l = (() => {
        const s = d.pathname.split("/").filter(Boolean),
          r = [{ href: "/app", label: o["/app"] || "Dashboard" }];
        let c = "";
        for (let h = 1; h < s.length; h++) {
          const D = s[h];
          if (
            ((c += `/${D}`),
            D.match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
            ))
          )
            r.push({
              href: c,
              label: e("nav.details", { defaultValue: "Detalhes" }),
            });
          else {
            const B = o[c];
            B && r.push({ href: c, label: B });
          }
        }
        return r;
      })(),
      f = (s, r) => {
        (s.preventDefault(), n(r));
      };
    return l.length <= 1
      ? null
      : a.jsxs("nav", {
          className: `flex items-center space-x-1 text-sm text-muted-foreground ${t}`,
          children: [
            a.jsxs(m, {
              to: "/app",
              onClick: (s) => f(s, "/app"),
              className:
                "flex items-center hover:text-foreground transition-colors",
              children: [a.jsx(Y, { className: "h-4 w-4 mr-1" }), l[0].label],
            }),
            l
              .slice(1)
              .map((s, r) =>
                a.jsxs(
                  O.Fragment,
                  {
                    children: [
                      a.jsx(Z, { className: "h-4 w-4" }),
                      r === l.length - 1
                        ? a.jsx("span", {
                            className: "text-foreground font-medium",
                            children: s.label,
                          })
                        : a.jsx(m, {
                            to: s.href,
                            onClick: (c) => f(c, s.href),
                            className:
                              "hover:text-foreground transition-colors",
                            children: s.label,
                          }),
                    ],
                  },
                  s.href,
                ),
              ),
          ],
        });
  },
  da = () => {
    const { isDemoMode: t } = E(),
      { t: d } = v(),
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
                    children: a.jsx(aa, {
                      className: "h-4 w-4 text-amber-600 dark:text-amber-400",
                    }),
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("p", {
                        className: "font-semibold text-sm",
                        children: d("demo.banner_title", {
                          defaultValue: "Modo de Demonstração Ativo",
                        }),
                      }),
                      a.jsx("p", {
                        className: "text-xs opacity-90",
                        children: d("demo.banner_desc", {
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
                    a.jsx(ea, { className: "mr-2 h-3.5 w-3.5" }),
                    d("demo.connect_db", { defaultValue: "Conectar Supabase" }),
                    a.jsx(sa, { className: "ml-2 h-3.5 w-3.5" }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  wa = () => {
    var u, l;
    const { user: t, signOut: d } = E(),
      { t: e } = v();
    _();
    const [n, p] = I.useState(!1),
      { currentLanguage: i } = g(),
      o = () =>
        a.jsxs("div", {
          className: "flex h-full flex-col",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3 px-6 py-4 border-b",
              children: [
                a.jsx(K, { size: "sm" }),
                a.jsx(J, { variant: "header" }),
              ],
            }),
            a.jsx("nav", {
              className: "flex-1 px-4 py-6 space-y-2",
              "aria-label": e("nav.main_navigation"),
              children: a.jsx(L, { className: "space-y-2" }),
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
                    a.jsx(A, { className: "h-5 w-5" }),
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
            children: a.jsx(o, {}),
          }),
        }),
        a.jsx(G, {
          open: n,
          onOpenChange: p,
          children: a.jsx(W, {
            side: "left",
            className: "w-72 p-0",
            children: a.jsx(o, {}),
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
                    children: a.jsx(na, { className: "h-5 w-5" }),
                  }),
                  a.jsx("div", {
                    className: "flex-1 max-w-md hidden sm:block",
                    children: a.jsxs("div", {
                      className: "relative",
                      children: [
                        a.jsx(ra, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                        }),
                        a.jsx(F, {
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
                        a.jsx(oa, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                        }),
                        a.jsx(x, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                          "aria-label": e("nav.notifications"),
                          children: a.jsx(ta, { className: "h-5 w-5" }),
                        }),
                        a.jsxs(U, {
                          children: [
                            a.jsx($, {
                              asChild: !0,
                              children: a.jsx(x, {
                                variant: "ghost",
                                className: "relative h-9 w-9 rounded-full",
                                "aria-label": e("nav.user_menu"),
                                children: a.jsx(q, {
                                  className: "h-9 w-9",
                                  children: a.jsx(H, {
                                    children:
                                      ((u = t == null ? void 0 : t.email) ==
                                      null
                                        ? void 0
                                        : u.charAt(0).toUpperCase()) || "U",
                                  }),
                                }),
                              }),
                            }),
                            a.jsxs(z, {
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
                                a.jsx(M, {}),
                                a.jsx(b, {
                                  asChild: !0,
                                  children: a.jsxs(m, {
                                    to: `/${i}/app/perfil`,
                                    children: [
                                      a.jsx(la, { className: "mr-2 h-4 w-4" }),
                                      e("nav.profile"),
                                    ],
                                  }),
                                }),
                                a.jsx(b, {
                                  asChild: !0,
                                  children: a.jsxs(m, {
                                    to: `/${i}/app/configuracoes`,
                                    children: [
                                      a.jsx(A, { className: "mr-2 h-4 w-4" }),
                                      e("nav.settings"),
                                    ],
                                  }),
                                }),
                                a.jsx(M, {}),
                                a.jsxs(b, {
                                  onClick: () => d(),
                                  className:
                                    "cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10",
                                  children: [
                                    a.jsx(ia, { className: "mr-2 h-4 w-4" }),
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
            a.jsxs("main", {
              className:
                "min-h-[calc(100vh-4rem)] pb-20 lg:pb-0 animate-fade-in",
              children: [
                a.jsx("div", {
                  className: "container mx-auto px-4 py-6",
                  children: a.jsx("div", {
                    className: "mb-6",
                    children: a.jsx(ca, {}),
                  }),
                }),
                a.jsx(da, {}),
                a.jsx(T, {}),
              ],
            }),
            a.jsx("nav", {
              className:
                "lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50",
              children: a.jsx(L, { isMobile: !0 }),
            }),
          ],
        }),
      ],
    });
  };
export { wa as default };
