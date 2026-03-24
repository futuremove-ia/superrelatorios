import { b as A, s as T, u as I, j as e, B as r } from "./index-CZZTgEon.js";
import { u as L } from "./useReports-DuQvdqOA.js";
import { r as b } from "./vendor-BgR6OOld.js";
import { C as o, b as m, c as x, a as n } from "./card-CeRYWmFS.js";
import { B as S } from "./badge-Dywuca96.js";
import { S as p } from "./skeleton-eXTMMige.js";
import { K as E } from "./kpi-card-DiK3deXa.js";
import { T as D, a as z, b as N, c as w } from "./tabs-aA6rM8TF.js";
import { L as l } from "./router-D2JcpG7e.js";
import {
  a as R,
  n as k,
  d as V,
  o as K,
  A as $,
  p as B,
  q as j,
  Z as U,
  c as P,
} from "./utils-D0yiqoi7.js";
import "./useQuery-D4K2XlIj.js";
import "./mockReports-3cW05Ka2.js";
import "./index-xlj4pXPM.js";
import "./index-C557e4H0.js";
const F = () => {
    const [s, t] = b.useState(null),
      [y, u] = b.useState(!0),
      [i, _] = b.useState(null),
      { isDemoMode: g } = A();
    return (
      b.useEffect(() => {
        (async () => {
          try {
            if ((u(!0), g)) {
              (t({
                totalReports: 24,
                activeUsers: 12,
                recentActivity: 78,
                completionRate: 85,
                estimatedImpact: "R$45K",
              }),
                u(!1));
              return;
            }
            const { data: d, error: h } = await T.from("reports").select(
              "id, status, created_at",
            );
            if (h) throw h;
            const c = d ? d.length : 0,
              a = d ? d.filter((v) => v.status === "completed").length : 0,
              C = c > 0 ? (a / c) * 100 : 0,
              G = d
                ? d.filter((v) =>
                    v.created_at
                      ? new Date(v.created_at).getTime() >
                        Date.now() - 7 * 24 * 60 * 60 * 1e3
                      : !1,
                  ).length
                : 0;
            t({
              totalReports: c,
              activeUsers: 3,
              recentActivity: Math.round(C),
              completionRate: c,
              estimatedImpact: "R$" + (c * 1.5 || 0).toFixed(1) + "K",
            });
          } catch (d) {
            (console.error("Dashboard summary error:", d),
              _("Failed to fetch dashboard summary"));
          } finally {
            u(!1);
          }
        })();
      }, [g]),
      { data: s, loading: y, error: i }
    );
  },
  le = () => {
    const { t: s, i18n: t } = I(),
      { data: y = [], isLoading: u } = L(),
      { data: i, loading: _ } = F(),
      g = u || _,
      f = y.slice(0, 4),
      d = [
        {
          title: s("dashboard.stats.active_priorities", {
            defaultValue: "Prioridades Ativas",
          }),
          value: (i == null ? void 0 : i.activeUsers.toString()) || "0",
          icon: R,
          trend: {
            value: 8,
            isPositive: !0,
            label: s("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "info",
        },
        {
          title: s("dashboard.stats.execution_rate", {
            defaultValue: "Taxa de Execução",
          }),
          value: `${(i == null ? void 0 : i.recentActivity) || 0}%`,
          icon: k,
          trend: {
            value: 12,
            isPositive: !0,
            label: s("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "success",
        },
        {
          title: s("dashboard.stats.created_reports", {
            defaultValue: "Relatórios Criados",
          }),
          value: (i == null ? void 0 : i.completionRate.toString()) || "0",
          icon: V,
          trend: {
            value: 15,
            isPositive: !0,
            label: s("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "info",
        },
        {
          title: s("dashboard.stats.estimated_impact", {
            defaultValue: "Impacto Estimado",
          }),
          value: (i == null ? void 0 : i.estimatedImpact) || "R$0K",
          icon: K,
          trend: {
            value: 22,
            isPositive: !0,
            label: s("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "success",
        },
      ],
      h = (a) => {
        switch (a) {
          case "completed":
            return "bg-green-100 text-green-800";
          case "shared":
            return "bg-blue-100 text-blue-800";
          default:
            return "bg-yellow-100 text-yellow-800";
        }
      },
      c = (a) => {
        switch (a) {
          case "completed":
            return s("dashboard.status.completed");
          case "shared":
            return s("dashboard.status.shared");
          default:
            return s("dashboard.status.draft");
        }
      };
    return g
      ? e.jsxs("div", {
          className: "container-fluid space-y-8 py-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsx(p, { className: "h-10 w-64" }),
                e.jsx(p, { className: "h-11 w-40" }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: [1, 2, 3, 4].map((a) =>
                e.jsx(p, { className: "h-28 rounded-xl" }, a),
              ),
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsx(p, { className: "h-6 w-48" }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: [1, 2, 3, 4].map((a) =>
                    e.jsx(p, { className: "h-24 rounded-xl" }, a),
                  ),
                }),
              ],
            }),
          ],
        })
      : e.jsxs("div", {
          className: "container-fluid space-y-8 py-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-3xl font-bold text-foreground",
                      children: s("dashboard.title"),
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground",
                      children: s("dashboard.subtitle"),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(r, {
                      variant: "outline",
                      size: "sm",
                      asChild: !0,
                      children: e.jsxs(l, {
                        to: `/${t.language}/app/metrics`,
                        children: [
                          e.jsx($, { className: "w-4 h-4 mr-2" }),
                          s("nav.metrics", { defaultValue: "Indicadores" }),
                        ],
                      }),
                    }),
                    e.jsx(r, {
                      size: "sm",
                      asChild: !0,
                      children: e.jsxs(l, {
                        to: `/${t.language}/app/reports/new`,
                        children: [
                          e.jsx(B, { className: "w-4 h-4 mr-2" }),
                          s("dashboard.new_report", {
                            defaultValue: "Novo Relatório",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: d.map((a, C) =>
                e.jsx(
                  E,
                  {
                    title: a.title,
                    value: a.value,
                    icon: a.icon,
                    trend: a.trend,
                    variant: a.variant,
                  },
                  C,
                ),
              ),
            }),
            e.jsxs(D, {
              defaultValue: "overview",
              className: "space-y-6",
              children: [
                e.jsxs(z, {
                  className: "grid w-full grid-cols-4",
                  children: [
                    e.jsx(N, {
                      value: "overview",
                      children: s("dashboard.tabs.overview", {
                        defaultValue: "Visão Geral",
                      }),
                    }),
                    e.jsx(N, {
                      value: "reports",
                      children: s("dashboard.tabs.reports", {
                        defaultValue: "Relatórios",
                      }),
                    }),
                    e.jsx(N, {
                      value: "priorities",
                      children: s("dashboard.tabs.priorities", {
                        defaultValue: "Prioridades",
                      }),
                    }),
                    e.jsx(N, {
                      value: "analytics",
                      children: s("dashboard.tabs.analytics", {
                        defaultValue: "Analytics",
                      }),
                    }),
                  ],
                }),
                e.jsx(w, {
                  value: "overview",
                  className: "space-y-6",
                  children: e.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                      e.jsxs(o, {
                        children: [
                          e.jsx(m, {
                            children: e.jsxs(x, {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(V, { className: "w-5 h-5" }),
                                s("dashboard.recent_reports", {
                                  defaultValue: "Relatórios Recentes",
                                }),
                              ],
                            }),
                          }),
                          e.jsx(n, {
                            className: "space-y-4",
                            children:
                              f.length > 0
                                ? f.map((a) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center justify-between p-3 border rounded-lg",
                                        children: [
                                          e.jsxs("div", {
                                            className: "flex-1",
                                            children: [
                                              e.jsx("div", {
                                                className: "font-medium",
                                                children: a.title,
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-sm text-muted-foreground",
                                                children: new Date(
                                                  a.createdAt || "",
                                                ).toLocaleDateString(
                                                  t.language,
                                                ),
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              e.jsx(S, {
                                                className: h(a.status),
                                                children: c(a.status),
                                              }),
                                              e.jsx(r, {
                                                variant: "ghost",
                                                size: "sm",
                                                asChild: !0,
                                                children: e.jsx(l, {
                                                  to: `/${t.language}/app/reports/${a.id}`,
                                                  children: e.jsx(j, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      a.id,
                                    ),
                                  )
                                : e.jsxs("div", {
                                    className:
                                      "text-center py-8 text-muted-foreground",
                                    children: [
                                      e.jsx(V, {
                                        className:
                                          "w-12 h-12 mx-auto mb-4 opacity-50",
                                      }),
                                      e.jsx("p", {
                                        children: s("dashboard.no_reports", {
                                          defaultValue:
                                            "Nenhum relatório encontrado",
                                        }),
                                      }),
                                      e.jsx(r, {
                                        className: "mt-4",
                                        size: "sm",
                                        asChild: !0,
                                        children: e.jsx(l, {
                                          to: `/${t.language}/app/reports/new`,
                                          children: s(
                                            "dashboard.create_first",
                                            {
                                              defaultValue:
                                                "Criar primeiro relatório",
                                            },
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                          }),
                        ],
                      }),
                      e.jsxs(o, {
                        children: [
                          e.jsx(m, {
                            children: e.jsxs(x, {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(U, { className: "w-5 h-5" }),
                                s("dashboard.quick_actions", {
                                  defaultValue: "Ações Rápidas",
                                }),
                              ],
                            }),
                          }),
                          e.jsxs(n, {
                            className: "space-y-3",
                            children: [
                              e.jsx(r, {
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: e.jsxs(l, {
                                  to: `/${t.language}/app/reports/new`,
                                  children: [
                                    e.jsx(V, { className: "w-4 h-4 mr-2" }),
                                    s("dashboard.new_report", {
                                      defaultValue: "Novo Relatório",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(r, {
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: e.jsxs(l, {
                                  to: `/${t.language}/app/prioridades`,
                                  children: [
                                    e.jsx(R, { className: "w-4 h-4 mr-2" }),
                                    s("dashboard.view_priorities", {
                                      defaultValue: "Ver Prioridades",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(r, {
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: e.jsxs(l, {
                                  to: `/${t.language}/app/metrics`,
                                  children: [
                                    e.jsx($, { className: "w-4 h-4 mr-2" }),
                                    s("nav.metrics", {
                                      defaultValue: "Painel de Indicadores",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(r, {
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: e.jsxs(l, {
                                  to: `/${t.language}/app/consolidated`,
                                  children: [
                                    e.jsx(P, { className: "w-4 h-4 mr-2" }),
                                    s("nav.consolidated", {
                                      defaultValue: "Dashboard Consolidado",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs(w, {
                  value: "reports",
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold",
                          children: s("dashboard.all_reports", {
                            defaultValue: "Todos os Relatórios",
                          }),
                        }),
                        e.jsx(r, {
                          asChild: !0,
                          children: e.jsxs(l, {
                            to: `/${t.language}/app/reports`,
                            children: [
                              s("dashboard.view_all", {
                                defaultValue: "Ver todos",
                              }),
                              e.jsx(j, { className: "w-4 h-4 ml-2" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: f.map((a) =>
                        e.jsxs(
                          o,
                          {
                            className: "card-hover",
                            children: [
                              e.jsxs(m, {
                                children: [
                                  e.jsx(x, {
                                    className: "text-lg",
                                    children: a.title,
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(S, {
                                        className: h(a.status),
                                        children: c(a.status),
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: new Date(
                                          a.createdAt || "",
                                        ).toLocaleDateString(t.language),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs(n, {
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-sm text-muted-foreground mb-4 line-clamp-2",
                                    children:
                                      a.description ||
                                      s("dashboard.no_description", {
                                        defaultValue: "Sem descrição",
                                      }),
                                  }),
                                  e.jsx(r, {
                                    variant: "outline",
                                    size: "sm",
                                    className: "w-full",
                                    asChild: !0,
                                    children: e.jsx(l, {
                                      to: `/${t.language}/app/reports/${a.id}`,
                                      children: s("dashboard.view_details", {
                                        defaultValue: "Ver detalhes",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          a.id,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs(w, {
                  value: "priorities",
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold",
                          children: s("dashboard.strategic_priorities", {
                            defaultValue: "Prioridades Estratégicas",
                          }),
                        }),
                        e.jsx(r, {
                          asChild: !0,
                          children: e.jsxs(l, {
                            to: `/${t.language}/app/prioridades`,
                            children: [
                              s("dashboard.manage", {
                                defaultValue: "Gerenciar",
                              }),
                              e.jsx(j, { className: "w-4 h-4 ml-2" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e.jsx(o, {
                      children: e.jsxs(n, {
                        className: "text-center py-12",
                        children: [
                          e.jsx(R, {
                            className:
                              "w-16 h-16 mx-auto mb-4 text-muted-foreground",
                          }),
                          e.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: s("dashboard.strategic_priorities", {
                              defaultValue: "Prioridades Estratégicas",
                            }),
                          }),
                          e.jsx("p", {
                            className: "text-muted-foreground mb-4",
                            children: s("dashboard.priorities_desc", {
                              defaultValue:
                                "Gerencie e acompanhe as prioridades estratégicas da organização",
                            }),
                          }),
                          e.jsx(r, {
                            asChild: !0,
                            children: e.jsxs(l, {
                              to: `/${t.language}/app/prioridades`,
                              children: [
                                s("dashboard.view_priorities", {
                                  defaultValue: "Ver prioridades",
                                }),
                                e.jsx(j, { className: "w-4 h-4 ml-2" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs(w, {
                  value: "analytics",
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold",
                          children: s("dashboard.analytics_insights", {
                            defaultValue: "Analytics e Insights",
                          }),
                        }),
                        e.jsx(r, {
                          asChild: !0,
                          children: e.jsxs(l, {
                            to: `/${t.language}/app/metrics`,
                            children: [
                              s("dashboard.view_analytics", {
                                defaultValue: "Ver analytics",
                              }),
                              e.jsx(j, { className: "w-4 h-4 ml-2" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                      children: [
                        e.jsxs(o, {
                          children: [
                            e.jsx(m, {
                              children: e.jsx(x, {
                                children: s("dashboard.performance_metrics", {
                                  defaultValue: "Indicadores de Performance",
                                }),
                              }),
                            }),
                            e.jsxs(n, {
                              children: [
                                e.jsx("p", {
                                  className: "text-muted-foreground mb-4",
                                  children: s("dashboard.metrics_desc", {
                                    defaultValue:
                                      "Acompanhe métricas detalhadas por domínios",
                                  }),
                                }),
                                e.jsx(r, {
                                  variant: "outline",
                                  className: "w-full",
                                  asChild: !0,
                                  children: e.jsxs(l, {
                                    to: `/${t.language}/app/metrics`,
                                    children: [
                                      e.jsx($, { className: "w-4 h-4 mr-2" }),
                                      s("nav.metrics", {
                                        defaultValue: "Painel de Indicadores",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(o, {
                          children: [
                            e.jsx(m, {
                              children: e.jsx(x, {
                                children: s("nav.consolidated", {
                                  defaultValue: "Dashboard Consolidado",
                                }),
                              }),
                            }),
                            e.jsxs(n, {
                              children: [
                                e.jsx("p", {
                                  className: "text-muted-foreground mb-4",
                                  children: s("dashboard.consolidated_desc", {
                                    defaultValue:
                                      "Visão unificada de todos os indicadores estratégicos",
                                  }),
                                }),
                                e.jsx(r, {
                                  variant: "outline",
                                  className: "w-full",
                                  asChild: !0,
                                  children: e.jsxs(l, {
                                    to: `/${t.language}/app/consolidated`,
                                    children: [
                                      e.jsx(P, { className: "w-4 h-4 mr-2" }),
                                      s("nav.consolidated", {
                                        defaultValue: "Dashboard Consolidado",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { le as default };
