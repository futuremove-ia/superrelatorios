import { u as v, a as g, j as e, B as x, b as L } from "./index-CZZTgEon.js";
import { r as E, b as z } from "./vendor-BgR6OOld.js";
import { u as M, L as f, O } from "./router-D2JcpG7e.js";
import { I as T } from "./input-BW1kAVjz.js";
import { S as G, b as F } from "./sheet-Dv4TMzLQ.js";
import {
  D as U,
  a as I,
  b as $,
  c as b,
  d as R,
} from "./dropdown-menu-TCpEpQRM.js";
import { A as W, b as q } from "./avatar-shTiQj8P.js";
import { B as H } from "./BrandName-xbpC75fr.js";
import { L as J } from "./LogoIcon-Cw-zlaK5.js";
import {
  av as j,
  e as N,
  I as V,
  i as y,
  c as w,
  a as C,
  n as S,
  d as k,
  a4 as D,
  G as K,
  m as Q,
  au as X,
  a7 as Y,
  T as Z,
  O as ee,
  q as ae,
  M as se,
  s as ne,
  ad as re,
  a9 as te,
  b as P,
  aw as le,
} from "./utils-D0yiqoi7.js";
import "./index-t2lmYITl.js";
import "./index-C_1O2NDl.js";
import "./index-C557e4H0.js";
import "./index-xlj4pXPM.js";
const A = ({ className: r = "", isMobile: c = !1 }) => {
    const a = M(),
      { t: n } = v(),
      { navigateLocalized: l, currentLanguage: i } = g(),
      d = {
        "pt-BR": [
          {
            name: n("nav.overview", { defaultValue: "Visão Geral" }),
            href: "/pt-BR/app",
            icon: j,
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
            icon: D,
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
            icon: D,
          },
        ],
        "es-ES": [
          {
            name: n("nav.overview", { defaultValue: "Visión General" }),
            href: "/es-ES/app",
            icon: j,
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
            icon: D,
          },
        ],
      },
      p = d[i] || d["pt-BR"],
      o = (s) =>
        s.endsWith("/app")
          ? a.pathname === s || a.pathname.startsWith(s + "/")
          : a.pathname === s,
      m = (s, t) => {
        (s.preventDefault(), l(t));
      };
    return c
      ? e.jsx("nav", {
          className: `grid grid-cols-5 gap-1 p-2 ${r}`,
          children: p.slice(0, 5).map((s) => {
            const t = s.icon,
              u = o(s.href);
            return e.jsxs(
              f,
              {
                to: s.href,
                onClick: (h) => m(h, s.href),
                className: `flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${u ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  e.jsx(t, { className: "h-4 w-4 mb-1" }),
                  e.jsx("span", {
                    className: "text-xs font-medium truncate",
                    children: s.name,
                  }),
                ],
              },
              s.href,
            );
          }),
        })
      : e.jsx("nav", {
          className: `space-y-2 ${r}`,
          children: p.map((s) => {
            const t = s.icon,
              u = o(s.href);
            return e.jsxs(
              f,
              {
                to: s.href,
                onClick: (h) => m(h, s.href),
                className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${u ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  e.jsx(t, { className: "h-4 w-4" }),
                  e.jsx("span", { children: s.name }),
                ],
              },
              s.href,
            );
          }),
        });
  },
  ie = ({ className: r = "", variant: c = "ghost", size: a = "default" }) => {
    v();
    const { changeLanguage: n, currentLanguage: l } = g(),
      [i, d] = E.useState(!1),
      p = [
        { code: "pt-BR", name: "Português", flag: "🇧🇷" },
        { code: "en-US", name: "English", flag: "🇺🇸" },
        { code: "es-ES", name: "Español", flag: "🇪🇸" },
      ],
      o = async (s) => {
        if (!(s === l || i)) {
          d(!0);
          try {
            await n(s);
          } catch (t) {
            console.error("Error changing language:", t);
          } finally {
            d(!1);
          }
        }
      },
      m = p.find((s) => s.code === l) || p[0];
    return e.jsxs(U, {
      children: [
        e.jsx(I, {
          asChild: !0,
          children: e.jsxs(x, {
            variant: c,
            size: a,
            className: `${r} ${i ? "opacity-50" : ""}`,
            disabled: i,
            children: [
              e.jsx(K, { className: "h-4 w-4 mr-2" }),
              e.jsxs("span", {
                className: "hidden sm:inline",
                children: [m.flag, " ", m.name],
              }),
              e.jsx("span", { className: "sm:hidden", children: m.flag }),
            ],
          }),
        }),
        e.jsx($, {
          align: "end",
          className: "w-48",
          children: p.map((s) =>
            e.jsxs(
              b,
              {
                onClick: () => o(s.code),
                className: `flex items-center justify-between cursor-pointer ${s.code === l ? "bg-accent" : ""}`,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("span", { className: "text-lg", children: s.flag }),
                      e.jsx("span", { children: s.name }),
                    ],
                  }),
                  s.code === l &&
                    e.jsx(Q, { className: "h-4 w-4 text-primary" }),
                ],
              },
              s.code,
            ),
          ),
        }),
      ],
    });
  },
  oe = ({ className: r = "" }) => {
    const c = M(),
      { t: a } = v(),
      { navigateLocalized: n, currentLanguage: l } = g(),
      i = {
        "pt-BR": {
          "/app": a("nav.overview", { defaultValue: "Visão Geral" }),
          "/app/relatorios": a("nav.reports", { defaultValue: "Relatórios" }),
          "/app/relatorios/novo": a("nav.new_report", {
            defaultValue: "Novo Relatório",
          }),
          "/app/metricas": a("nav.metrics", { defaultValue: "Indicadores" }),
          "/app/metricas/configurar": a("nav.metrics_config", {
            defaultValue: "Configurar Métricas",
          }),
          "/app/painel-decisao": a("nav.decision_panel", {
            defaultValue: "Painel de Decisão",
          }),
          "/app/analytics": a("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidado": a("nav.consolidated", {
            defaultValue: "Consolidado",
          }),
          "/app/prioridades": a("nav.priorities", {
            defaultValue: "Prioridades",
          }),
          "/app/plano-acao": a("nav.action_plan", {
            defaultValue: "Plano de Ação",
          }),
          "/app/dados": a("nav.data", { defaultValue: "Meus Dados" }),
          "/app/perfil": a("nav.profile", { defaultValue: "Perfil" }),
          "/app/configuracoes": a("nav.settings", {
            defaultValue: "Configurações",
          }),
        },
        "en-US": {
          "/app": a("nav.overview", { defaultValue: "Overview" }),
          "/app/reports": a("nav.reports", { defaultValue: "Reports" }),
          "/app/reports/new": a("nav.new_report", {
            defaultValue: "New Report",
          }),
          "/app/metrics": a("nav.metrics", { defaultValue: "Metrics" }),
          "/app/metrics/config": a("nav.metrics_config", {
            defaultValue: "Configure Metrics",
          }),
          "/app/decision-panel": a("nav.decision_panel", {
            defaultValue: "Decision Panel",
          }),
          "/app/analytics": a("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidated": a("nav.consolidated", {
            defaultValue: "Consolidated",
          }),
          "/app/priorities": a("nav.priorities", {
            defaultValue: "Priorities",
          }),
          "/app/action-plan": a("nav.action_plan", {
            defaultValue: "Action Plan",
          }),
          "/app/folders": a("nav.data", { defaultValue: "My Data" }),
          "/app/profile": a("nav.profile", { defaultValue: "Profile" }),
          "/app/settings": a("nav.settings", { defaultValue: "Settings" }),
        },
        "es-ES": {
          "/app": a("nav.overview", { defaultValue: "Visión General" }),
          "/app/informes": a("nav.reports", { defaultValue: "Informes" }),
          "/app/informes/nuevo": a("nav.new_report", {
            defaultValue: "Nuevo Informe",
          }),
          "/app/metricas": a("nav.metrics", { defaultValue: "Métricas" }),
          "/app/metricas/configurar": a("nav.metrics_config", {
            defaultValue: "Configurar Métricas",
          }),
          "/app/panel-decision": a("nav.decision_panel", {
            defaultValue: "Panel de Decisión",
          }),
          "/app/analytics": a("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidado": a("nav.consolidated", {
            defaultValue: "Consolidado",
          }),
          "/app/prioridades": a("nav.priorities", {
            defaultValue: "Prioridades",
          }),
          "/app/plan-accion": a("nav.action_plan", {
            defaultValue: "Plan de Acción",
          }),
          "/app/carpetas": a("nav.data", { defaultValue: "Mis Datos" }),
          "/app/perfil": a("nav.profile", { defaultValue: "Perfil" }),
          "/app/configuracion": a("nav.settings", {
            defaultValue: "Configuración",
          }),
        },
      },
      d = i[l] || i["pt-BR"],
      o = (() => {
        const s = c.pathname.split("/").filter(Boolean),
          t = [{ href: "/app", label: d["/app"] || "Dashboard" }];
        let u = "";
        for (let h = 1; h < s.length; h++) {
          const _ = s[h];
          if (
            ((u += `/${_}`),
            _.match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
            ))
          )
            t.push({
              href: u,
              label: a("nav.details", { defaultValue: "Detalhes" }),
            });
          else {
            const B = d[u];
            B && t.push({ href: u, label: B });
          }
        }
        return t;
      })(),
      m = (s, t) => {
        (s.preventDefault(), n(t));
      };
    return o.length <= 1
      ? null
      : e.jsxs("nav", {
          className: `flex items-center space-x-1 text-sm text-muted-foreground ${r}`,
          children: [
            e.jsxs(f, {
              to: "/app",
              onClick: (s) => m(s, "/app"),
              className:
                "flex items-center hover:text-foreground transition-colors",
              children: [e.jsx(X, { className: "h-4 w-4 mr-1" }), o[0].label],
            }),
            o
              .slice(1)
              .map((s, t) =>
                e.jsxs(
                  z.Fragment,
                  {
                    children: [
                      e.jsx(Y, { className: "h-4 w-4" }),
                      t === o.length - 1
                        ? e.jsx("span", {
                            className: "text-foreground font-medium",
                            children: s.label,
                          })
                        : e.jsx(f, {
                            to: s.href,
                            onClick: (u) => m(u, s.href),
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
  ce = () => {
    const { isDemoMode: r } = L(),
      { t: c } = v(),
      { currentLanguage: a } = g();
    return r
      ? e.jsx("div", {
          className:
            "bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 px-4 py-3",
          children: e.jsxs("div", {
            className:
              "container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "bg-amber-200 dark:bg-amber-800 p-2 rounded-full",
                    children: e.jsx(Z, {
                      className: "h-4 w-4 text-amber-600 dark:text-amber-400",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-semibold text-sm",
                        children: c("demo.banner_title", {
                          defaultValue: "Modo de Demonstração Ativo",
                        }),
                      }),
                      e.jsx("p", {
                        className: "text-xs opacity-90",
                        children: c("demo.banner_desc", {
                          defaultValue:
                            "Os dados não serão salvos permanentemente. Configure o banco de dados para ativar todas as funcionalidades.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(x, {
                variant: "outline",
                size: "sm",
                className:
                  "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:hover:bg-amber-900 dark:border-amber-700 dark:text-amber-100 shrink-0",
                asChild: !0,
                children: e.jsxs(f, {
                  to: `/${a}/app/configuracoes`,
                  children: [
                    e.jsx(ee, { className: "mr-2 h-3.5 w-3.5" }),
                    c("demo.connect_db", { defaultValue: "Conectar Supabase" }),
                    e.jsx(ae, { className: "ml-2 h-3.5 w-3.5" }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  we = () => {
    var p, o;
    const { user: r, signOut: c } = L(),
      { t: a } = v();
    M();
    const [n, l] = E.useState(!1),
      { currentLanguage: i } = g(),
      d = () =>
        e.jsxs("div", {
          className: "flex h-full flex-col",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 px-6 py-4 border-b",
              children: [
                e.jsx(J, { size: "sm" }),
                e.jsx(H, { variant: "header" }),
              ],
            }),
            e.jsx("nav", {
              className: "flex-1 px-4 py-6 space-y-2",
              "aria-label": a("nav.main_navigation"),
              children: e.jsx(A, { className: "space-y-2" }),
            }),
            e.jsx("div", {
              className: "border-t p-4",
              children: e.jsx("div", {
                className: "space-y-2",
                children: e.jsxs(f, {
                  to: `/${i}/app/configuracoes`,
                  onClick: () => l(!1),
                  className:
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                  children: [
                    e.jsx(P, { className: "h-5 w-5" }),
                    a("nav.settings"),
                  ],
                }),
              }),
            }),
          ],
        });
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx("div", {
          className:
            "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",
          children: e.jsx("div", {
            className:
              "flex grow flex-col gap-y-5 overflow-y-auto border-r bg-gradient-subtle shadow-lg",
            children: e.jsx(d, {}),
          }),
        }),
        e.jsx(G, {
          open: n,
          onOpenChange: l,
          children: e.jsx(F, {
            side: "left",
            className: "w-72 p-0",
            children: e.jsx(d, {}),
          }),
        }),
        e.jsxs("div", {
          className: "lg:pl-72",
          children: [
            e.jsx("header", {
              className:
                "sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm",
              children: e.jsxs("div", {
                className: "flex h-14 sm:h-16 items-center gap-4 px-4 sm:px-6",
                children: [
                  e.jsx(x, {
                    variant: "ghost",
                    size: "sm",
                    className: "lg:hidden touch-target",
                    onClick: () => l(!0),
                    "aria-label": a("nav.open_menu"),
                    children: e.jsx(se, { className: "h-5 w-5" }),
                  }),
                  e.jsx("div", {
                    className: "flex-1 max-w-md hidden sm:block",
                    children: e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx(ne, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                        }),
                        e.jsx(T, {
                          placeholder: a("search.placeholder"),
                          className:
                            "pl-10 bg-muted/50 border-muted focus:border-primary transition-colors",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "flex items-center gap-2 ml-auto",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(ie, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                        }),
                        e.jsx(x, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                          "aria-label": a("nav.notifications"),
                          children: e.jsx(re, { className: "h-5 w-5" }),
                        }),
                        e.jsxs(U, {
                          children: [
                            e.jsx(I, {
                              asChild: !0,
                              children: e.jsx(x, {
                                variant: "ghost",
                                className: "relative h-9 w-9 rounded-full",
                                "aria-label": a("nav.user_menu"),
                                children: e.jsx(W, {
                                  className: "h-9 w-9",
                                  children: e.jsx(q, {
                                    children:
                                      ((p = r == null ? void 0 : r.email) ==
                                      null
                                        ? void 0
                                        : p.charAt(0).toUpperCase()) || "U",
                                  }),
                                }),
                              }),
                            }),
                            e.jsxs($, {
                              className: "w-56",
                              align: "end",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex items-center justify-start gap-2 p-2",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex flex-col space-y-1 leading-none",
                                    children: [
                                      e.jsx("p", {
                                        className: "font-medium",
                                        children:
                                          ((o =
                                            r == null
                                              ? void 0
                                              : r.user_metadata) == null
                                            ? void 0
                                            : o.full_name) || "Usuário",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: r == null ? void 0 : r.email,
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx(R, {}),
                                e.jsx(b, {
                                  asChild: !0,
                                  children: e.jsxs(f, {
                                    to: `/${i}/app/perfil`,
                                    children: [
                                      e.jsx(te, { className: "mr-2 h-4 w-4" }),
                                      a("nav.profile"),
                                    ],
                                  }),
                                }),
                                e.jsx(b, {
                                  asChild: !0,
                                  children: e.jsxs(f, {
                                    to: `/${i}/app/configuracoes`,
                                    children: [
                                      e.jsx(P, { className: "mr-2 h-4 w-4" }),
                                      a("nav.settings"),
                                    ],
                                  }),
                                }),
                                e.jsx(R, {}),
                                e.jsxs(b, {
                                  onClick: () => c(),
                                  className:
                                    "cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10",
                                  children: [
                                    e.jsx(le, { className: "mr-2 h-4 w-4" }),
                                    a("nav.logout"),
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
            e.jsxs("main", {
              className:
                "min-h-[calc(100vh-4rem)] pb-20 lg:pb-0 animate-fade-in",
              children: [
                e.jsx("div", {
                  className: "container mx-auto px-4 py-6",
                  children: e.jsx("div", {
                    className: "mb-6",
                    children: e.jsx(oe, {}),
                  }),
                }),
                e.jsx(ce, {}),
                e.jsx(O, {}),
              ],
            }),
            e.jsx("nav", {
              className:
                "lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50",
              children: e.jsx(A, { isMobile: !0 }),
            }),
          ],
        }),
      ],
    });
  };
export { we as default };
