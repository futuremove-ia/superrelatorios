import { u as v, a as g, j as a, B as x, b as E } from "./index-BYfWtJYS.js";
import { r as I, b as T } from "./vendor-Bp-AcFIh.js";
import { u as B, L as f, O as F } from "./router-Db_Yswnp.js";
import { I as G } from "./input-DRNeah6F.js";
import { S as W, b as H } from "./sheet-B_MOw6hb.js";
import {
  D as $,
  a as z,
  b as O,
  c as b,
  d as A,
} from "./dropdown-menu-C5XeVAqv.js";
import { A as J, b as q } from "./avatar-9AgxExis.js";
import { B as K } from "./BrandName-a-uVbK0j.js";
import { L as Q } from "./LogoIcon-sn4bTsqm.js";
import {
  ay as j,
  au as V,
  U as N,
  f as y,
  J as w,
  j as C,
  d as S,
  b as k,
  ak as R,
  e as D,
  a4 as _,
  G as X,
  C as Y,
  ax as Z,
  aw as aa,
  T as ea,
  O as sa,
  p as na,
  M as ra,
  s as ta,
  ac as la,
  a8 as oa,
  c as L,
  az as ia,
} from "./utils-BB96Jj32.js";
import "./index-Bfrwl0Vd.js";
import "./index-BC2n9Fri.js";
import "./index-BMwgMO_7.js";
import "./index-Da-SsbvB.js";
const U = ({ className: r = "", isMobile: c = !1 }) => {
    const e = B(),
      { t: n } = v(),
      { navigateLocalized: l, currentLanguage: o } = g(),
      d = {
        "pt-BR": [
          {
            name: n("nav.overview", { defaultValue: "Início" }),
            href: "/pt-BR/app",
            icon: j,
          },
          {
            name: n("nav.radar", { defaultValue: "Radar" }),
            href: "/pt-BR/app/radar",
            icon: V,
          },
          {
            name: n("nav.documents", { defaultValue: "Documentos" }),
            href: "/pt-BR/app/documentos",
            icon: N,
          },
          {
            name: n("nav.metrics", { defaultValue: "Indicadores" }),
            href: "/pt-BR/app/metricas",
            icon: y,
          },
          {
            name: n("nav.decision_panel", {
              defaultValue: "Painel de Decisão",
            }),
            href: "/pt-BR/app/painel-decisao",
            icon: w,
          },
          {
            name: n("nav.analytics", { defaultValue: "Analytics" }),
            href: "/pt-BR/app/analytics",
            icon: C,
          },
          {
            name: n("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/pt-BR/app/consolidado",
            icon: S,
          },
          {
            name: n("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/pt-BR/app/prioridades",
            icon: k,
          },
          {
            name: n("nav.action_plan", { defaultValue: "Plano de Ação" }),
            href: "/pt-BR/app/plano-acao",
            icon: R,
          },
          {
            name: n("nav.reports", { defaultValue: "Relatórios" }),
            href: "/pt-BR/app/relatorios",
            icon: D,
          },
          {
            name: n("nav.data", { defaultValue: "Meus Dados" }),
            href: "/pt-BR/app/dados",
            icon: _,
          },
        ],
        "en-US": [
          {
            name: n("nav.overview", { defaultValue: "Overview" }),
            href: "/en-US/app",
            icon: j,
          },
          {
            name: n("nav.radar", { defaultValue: "Radar" }),
            href: "/en-US/app/radar",
            icon: V,
          },
          {
            name: n("nav.documents", { defaultValue: "Documents" }),
            href: "/en-US/app/documentos",
            icon: N,
          },
          {
            name: n("nav.metrics", { defaultValue: "Metrics" }),
            href: "/en-US/app/metrics",
            icon: y,
          },
          {
            name: n("nav.decision_panel", { defaultValue: "Decision Panel" }),
            href: "/en-US/app/decision-panel",
            icon: w,
          },
          {
            name: n("nav.analytics", { defaultValue: "Analytics" }),
            href: "/en-US/app/analytics",
            icon: C,
          },
          {
            name: n("nav.consolidated", { defaultValue: "Consolidated" }),
            href: "/en-US/app/consolidated",
            icon: S,
          },
          {
            name: n("nav.priorities", { defaultValue: "Priorities" }),
            href: "/en-US/app/priorities",
            icon: k,
          },
          {
            name: n("nav.action_plan", { defaultValue: "Action Plan" }),
            href: "/en-US/app/action-plan",
            icon: R,
          },
          {
            name: n("nav.reports", { defaultValue: "Reports" }),
            href: "/en-US/app/reports",
            icon: D,
          },
          {
            name: n("nav.data", { defaultValue: "My Data" }),
            href: "/en-US/app/folders",
            icon: _,
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
            icon: V,
          },
          {
            name: n("nav.documents", { defaultValue: "Documentos" }),
            href: "/es-ES/app/documentos",
            icon: N,
          },
          {
            name: n("nav.metrics", { defaultValue: "Métricas" }),
            href: "/es-ES/app/metricas",
            icon: y,
          },
          {
            name: n("nav.decision_panel", {
              defaultValue: "Panel de Decisión",
            }),
            href: "/es-ES/app/panel-decision",
            icon: w,
          },
          {
            name: n("nav.analytics", { defaultValue: "Analytics" }),
            href: "/es-ES/app/analytics",
            icon: C,
          },
          {
            name: n("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/es-ES/app/consolidado",
            icon: S,
          },
          {
            name: n("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/es-ES/app/prioridades",
            icon: k,
          },
          {
            name: n("nav.action_plan", { defaultValue: "Plan de Acción" }),
            href: "/es-ES/app/plan-accion",
            icon: R,
          },
          {
            name: n("nav.reports", { defaultValue: "Informes" }),
            href: "/es-ES/app/informes",
            icon: D,
          },
          {
            name: n("nav.data", { defaultValue: "Mis Datos" }),
            href: "/es-ES/app/carpetas",
            icon: _,
          },
        ],
      },
      p = d[o] || d["pt-BR"],
      i = (s) =>
        s.endsWith("/app")
          ? e.pathname === s || e.pathname.startsWith(s + "/")
          : e.pathname === s,
      m = (s, t) => {
        (s.preventDefault(), l(t));
      };
    return c
      ? a.jsx("nav", {
          className: `grid grid-cols-5 gap-1 p-2 ${r}`,
          children: p.slice(0, 5).map((s) => {
            const t = s.icon,
              u = i(s.href);
            return a.jsxs(
              f,
              {
                to: s.href,
                onClick: (h) => m(h, s.href),
                className: `flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${u ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(t, { className: "h-4 w-4 mb-1" }),
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
          className: `space-y-2 ${r}`,
          children: p.map((s) => {
            const t = s.icon,
              u = i(s.href);
            return a.jsxs(
              f,
              {
                to: s.href,
                onClick: (h) => m(h, s.href),
                className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${u ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(t, { className: "h-4 w-4" }),
                  a.jsx("span", { children: s.name }),
                ],
              },
              s.href,
            );
          }),
        });
  },
  ca = ({ className: r = "", variant: c = "ghost", size: e = "default" }) => {
    v();
    const { changeLanguage: n, currentLanguage: l } = g(),
      [o, d] = I.useState(!1),
      p = [
        { code: "pt-BR", name: "Português", flag: "🇧🇷" },
        { code: "en-US", name: "English", flag: "🇺🇸" },
        { code: "es-ES", name: "Español", flag: "🇪🇸" },
      ],
      i = async (s) => {
        if (!(s === l || o)) {
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
    return a.jsxs($, {
      children: [
        a.jsx(z, {
          asChild: !0,
          children: a.jsxs(x, {
            variant: c,
            size: e,
            className: `${r} ${o ? "opacity-50" : ""}`,
            disabled: o,
            children: [
              a.jsx(X, { className: "h-4 w-4 mr-2" }),
              a.jsxs("span", {
                className: "hidden sm:inline",
                children: [m.flag, " ", m.name],
              }),
              a.jsx("span", { className: "sm:hidden", children: m.flag }),
            ],
          }),
        }),
        a.jsx(O, {
          align: "end",
          className: "w-48",
          children: p.map((s) =>
            a.jsxs(
              b,
              {
                onClick: () => i(s.code),
                className: `flex items-center justify-between cursor-pointer ${s.code === l ? "bg-accent" : ""}`,
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx("span", { className: "text-lg", children: s.flag }),
                      a.jsx("span", { children: s.name }),
                    ],
                  }),
                  s.code === l &&
                    a.jsx(Y, { className: "h-4 w-4 text-primary" }),
                ],
              },
              s.code,
            ),
          ),
        }),
      ],
    });
  },
  da = ({ className: r = "" }) => {
    const c = B(),
      { t: e } = v(),
      { navigateLocalized: n, currentLanguage: l } = g(),
      o = {
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
      d = o[l] || o["pt-BR"],
      i = (() => {
        const s = c.pathname.split("/").filter(Boolean),
          t = [{ href: "/app", label: d["/app"] || "Dashboard" }];
        let u = "";
        for (let h = 1; h < s.length; h++) {
          const M = s[h];
          if (
            ((u += `/${M}`),
            M.match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
            ))
          )
            t.push({
              href: u,
              label: e("nav.details", { defaultValue: "Detalhes" }),
            });
          else {
            const P = d[u];
            P && t.push({ href: u, label: P });
          }
        }
        return t;
      })(),
      m = (s, t) => {
        (s.preventDefault(), n(t));
      };
    return i.length <= 1
      ? null
      : a.jsxs("nav", {
          className: `flex items-center space-x-1 text-sm text-muted-foreground ${r}`,
          children: [
            a.jsxs(f, {
              to: "/app",
              onClick: (s) => m(s, "/app"),
              className:
                "flex items-center hover:text-foreground transition-colors",
              children: [a.jsx(Z, { className: "h-4 w-4 mr-1" }), i[0].label],
            }),
            i
              .slice(1)
              .map((s, t) =>
                a.jsxs(
                  T.Fragment,
                  {
                    children: [
                      a.jsx(aa, { className: "h-4 w-4" }),
                      t === i.length - 1
                        ? a.jsx("span", {
                            className: "text-foreground font-medium",
                            children: s.label,
                          })
                        : a.jsx(f, {
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
  pa = () => {
    const { isDemoMode: r } = E(),
      { t: c } = v(),
      { currentLanguage: e } = g();
    return r
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
                    children: a.jsx(ea, {
                      className: "h-4 w-4 text-amber-600 dark:text-amber-400",
                    }),
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("p", {
                        className: "font-semibold text-sm",
                        children: c("demo.banner_title", {
                          defaultValue: "Modo de Demonstração Ativo",
                        }),
                      }),
                      a.jsx("p", {
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
              a.jsx(x, {
                variant: "outline",
                size: "sm",
                className:
                  "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:hover:bg-amber-900 dark:border-amber-700 dark:text-amber-100 shrink-0",
                asChild: !0,
                children: a.jsxs(f, {
                  to: `/${e}/app/configuracoes`,
                  children: [
                    a.jsx(sa, { className: "mr-2 h-3.5 w-3.5" }),
                    c("demo.connect_db", { defaultValue: "Conectar Supabase" }),
                    a.jsx(na, { className: "ml-2 h-3.5 w-3.5" }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Sa = () => {
    var p, i;
    const { user: r, signOut: c } = E(),
      { t: e } = v();
    B();
    const [n, l] = I.useState(!1),
      { currentLanguage: o } = g(),
      d = () =>
        a.jsxs("div", {
          className: "flex h-full flex-col",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3 px-6 py-4 border-b",
              children: [
                a.jsx(Q, { size: "sm" }),
                a.jsx(K, { variant: "header" }),
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
                children: a.jsxs(f, {
                  to: `/${o}/app/configuracoes`,
                  onClick: () => l(!1),
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
            children: a.jsx(d, {}),
          }),
        }),
        a.jsx(W, {
          open: n,
          onOpenChange: l,
          children: a.jsx(H, {
            side: "left",
            className: "w-72 p-0",
            children: a.jsx(d, {}),
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
                    onClick: () => l(!0),
                    "aria-label": e("nav.open_menu"),
                    children: a.jsx(ra, { className: "h-5 w-5" }),
                  }),
                  a.jsx("div", {
                    className: "flex-1 max-w-md hidden sm:block",
                    children: a.jsxs("div", {
                      className: "relative",
                      children: [
                        a.jsx(ta, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                        }),
                        a.jsx(G, {
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
                        a.jsx(ca, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                        }),
                        a.jsx(x, {
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                          "aria-label": e("nav.notifications"),
                          children: a.jsx(la, { className: "h-5 w-5" }),
                        }),
                        a.jsxs($, {
                          children: [
                            a.jsx(z, {
                              asChild: !0,
                              children: a.jsx(x, {
                                variant: "ghost",
                                className: "relative h-9 w-9 rounded-full",
                                "aria-label": e("nav.user_menu"),
                                children: a.jsx(J, {
                                  className: "h-9 w-9",
                                  children: a.jsx(q, {
                                    children:
                                      ((p = r == null ? void 0 : r.email) ==
                                      null
                                        ? void 0
                                        : p.charAt(0).toUpperCase()) || "U",
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
                                          ((i =
                                            r == null
                                              ? void 0
                                              : r.user_metadata) == null
                                            ? void 0
                                            : i.full_name) || "Usuário",
                                      }),
                                      a.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: r == null ? void 0 : r.email,
                                      }),
                                    ],
                                  }),
                                }),
                                a.jsx(A, {}),
                                a.jsx(b, {
                                  asChild: !0,
                                  children: a.jsxs(f, {
                                    to: `/${o}/app/perfil`,
                                    children: [
                                      a.jsx(oa, { className: "mr-2 h-4 w-4" }),
                                      e("nav.profile"),
                                    ],
                                  }),
                                }),
                                a.jsx(b, {
                                  asChild: !0,
                                  children: a.jsxs(f, {
                                    to: `/${o}/app/configuracoes`,
                                    children: [
                                      a.jsx(L, { className: "mr-2 h-4 w-4" }),
                                      e("nav.settings"),
                                    ],
                                  }),
                                }),
                                a.jsx(A, {}),
                                a.jsxs(b, {
                                  onClick: () => c(),
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
                    children: a.jsx(da, {}),
                  }),
                }),
                a.jsx(pa, {}),
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
export { Sa as default };
