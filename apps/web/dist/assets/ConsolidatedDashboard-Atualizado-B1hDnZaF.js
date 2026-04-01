import {
  u as D,
  j as e,
  t as $,
  v as I,
  w as V,
  x as F,
  y as h,
  B as l,
  A as K,
  z as L,
  T as q,
  k as O,
  l as d,
  m as o,
  C as t,
  n as i,
  o as c,
  g as n,
  q as N,
} from "./index-DRWQgA5q.js";
import { r as b, L as u } from "./router-XBfdTQ0K.js";
import { B as f } from "./badge-DD2chybY.js";
import { K as Q } from "./kpi-card-DODMrT55.js";
import {
  a5 as B,
  ak as U,
  a1 as j,
  aD as G,
  a2 as m,
  a9 as w,
  Y as x,
  af as y,
  a8 as H,
  Z as C,
  aa as R,
  J as Z,
  az as J,
  ab as T,
  a0 as Y,
  T as W,
} from "./utils-Er8ll4su.js";
const re = () => {
  const { t: a } = D(),
    [P, S] = b.useState("quarter"),
    [E, k] = b.useState("overview"),
    _ = [
      {
        title: "Receita Total",
        value: "R$2.4M",
        icon: w,
        trend: { value: 18, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "success",
        subtitle: "Crescimento saudável",
      },
      {
        title: "Margem Líquida",
        value: "15.8%",
        icon: m,
        trend: { value: 3.2, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "success",
        subtitle: "Acima da meta",
      },
      {
        title: "Taxa de Execução",
        value: "76%",
        icon: x,
        trend: { value: 8, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "info",
        subtitle: "Iniciativas concluídas",
      },
      {
        title: "Score de Saúde",
        value: "82/100",
        icon: y,
        trend: { value: 5, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "success",
        subtitle: "Performance geral",
      },
    ],
    g = [
      {
        domain: "Financeiro",
        icon: w,
        color: "bg-green-500",
        metrics: [
          { name: "Receita", value: "R$2.4M", trend: 18, health: "good" },
          { name: "Margem", value: "15.8%", trend: 3.2, health: "good" },
          { name: "CAC", value: "R$320", trend: -5, health: "good" },
          { name: "LTV", value: "R$2.1K", trend: 12, health: "good" },
        ],
        score: 85,
        status: "on-track",
      },
      {
        domain: "Comercial",
        icon: H,
        color: "bg-blue-500",
        metrics: [
          { name: "Conversão", value: "14.7%", trend: 2.4, health: "good" },
          { name: "Pipeline", value: "850", trend: 15, health: "good" },
          { name: "Ticket Médio", value: "R$450", trend: 8, health: "good" },
          { name: "Churn", value: "4.2%", trend: -1.8, health: "warning" },
        ],
        score: 78,
        status: "on-track",
      },
      {
        domain: "Operacional",
        icon: C,
        color: "bg-orange-500",
        metrics: [
          { name: "Eficiência", value: "76.8%", trend: 4.3, health: "good" },
          { name: "Qualidade", value: "94.2%", trend: 2.1, health: "good" },
          { name: "Throughput", value: "1.25K", trend: 18, health: "good" },
          { name: "Capacidade", value: "71%", trend: 3, health: "warning" },
        ],
        score: 82,
        status: "on-track",
      },
      {
        domain: "Estratégico",
        icon: x,
        color: "bg-purple-500",
        metrics: [
          { name: "OKR Progress", value: "78%", trend: 5, health: "good" },
          { name: "Iniciativas", value: "67%", trend: -2, health: "warning" },
          { name: "Alinhamento", value: "91%", trend: 3, health: "good" },
          { name: "Execução", value: "73%", trend: 1, health: "warning" },
        ],
        score: 77,
        status: "at-risk",
      },
    ],
    z = [
      { period: "Q1", revenue: 18e5, margin: 12.5, execution: 65, score: 72 },
      { period: "Q2", revenue: 21e5, margin: 14.2, execution: 71, score: 76 },
      { period: "Q3", revenue: 195e4, margin: 13.8, execution: 68, score: 74 },
      { period: "Q4", revenue: 24e5, margin: 15.8, execution: 76, score: 82 },
    ],
    A = (s) => {
      switch (s) {
        case "good":
          return "text-green-600";
        case "warning":
          return "text-yellow-600";
        case "critical":
          return "text-red-600";
        default:
          return "text-gray-600";
      }
    },
    v = (s) => {
      switch (s) {
        case "on-track":
          return "bg-green-100 text-green-800";
        case "at-risk":
          return "bg-yellow-100 text-yellow-800";
        case "off-track":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
    p = (s) =>
      s >= 80 ? "bg-green-500" : s >= 60 ? "bg-yellow-500" : "bg-red-500";
  return e.jsxs("div", {
    className: "container-fluid space-y-8 py-6",
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className:
                  "p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg",
                children: e.jsx(B, { className: "w-6 h-6 text-white" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-3xl font-bold text-foreground",
                    children: "Dashboard Consolidado",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Visão unificada de todos os indicadores estratégicos",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-3",
            children: [
              e.jsxs($, {
                value: P,
                onValueChange: S,
                children: [
                  e.jsx(I, { className: "w-32", children: e.jsx(V, {}) }),
                  e.jsxs(F, {
                    children: [
                      e.jsx(h, {
                        value: "month",
                        children: a("dashboard.period.month"),
                      }),
                      e.jsx(h, {
                        value: "quarter",
                        children: a("dashboard.period.quarter"),
                      }),
                      e.jsx(h, {
                        value: "year",
                        children: a("dashboard.period.year"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(l, {
                variant: "outline",
                size: "sm",
                children: [
                  e.jsx(U, { className: "w-4 h-4 mr-2" }),
                  a("common.filter"),
                ],
              }),
              e.jsxs(l, {
                variant: "outline",
                size: "sm",
                children: [
                  e.jsx(j, { className: "w-4 h-4 mr-2" }),
                  a("common.export"),
                ],
              }),
              e.jsxs(l, {
                variant: "outline",
                size: "sm",
                children: [
                  e.jsx(G, { className: "w-4 h-4 mr-2" }),
                  a("common.refresh"),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(K, {
        className: "border-blue-200 bg-blue-50",
        children: [
          e.jsx(m, { className: "h-4 w-4 text-blue-600" }),
          e.jsxs(L, {
            className: "text-blue-800",
            children: [
              e.jsxs("strong", {
                children: [a("dashboard.summary.title"), ":"],
              }),
              " ",
              a("dashboard.summary.description"),
              e.jsx(l, {
                variant: "link",
                size: "sm",
                className: "p-0 h-auto ml-2 text-blue-600",
                children: a("dashboard.summary.view_details"),
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
        children: _.map((s, r) =>
          e.jsx(
            Q,
            {
              title: s.title,
              value: s.value,
              icon: s.icon,
              trend: s.trend,
              variant: s.variant,
              subtitle: s.subtitle,
            },
            r,
          ),
        ),
      }),
      e.jsxs(q, {
        value: E,
        onValueChange: k,
        className: "space-y-6",
        children: [
          e.jsxs(O, {
            className: "grid w-full grid-cols-4",
            children: [
              e.jsx(d, {
                value: "overview",
                children: a("dashboard.tabs.overview"),
              }),
              e.jsx(d, {
                value: "domains",
                children: a("dashboard.tabs.domains"),
              }),
              e.jsx(d, {
                value: "trends",
                children: a("dashboard.tabs.trends"),
              }),
              e.jsx(d, {
                value: "insights",
                children: a("dashboard.tabs.insights"),
              }),
            ],
          }),
          e.jsx(o, {
            value: "overview",
            className: "space-y-6",
            children: e.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              children: [
                e.jsxs(t, {
                  children: [
                    e.jsx(i, {
                      children: e.jsxs(c, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(y, { className: "w-5 h-5" }),
                          "Resumo de Performance",
                        ],
                      }),
                    }),
                    e.jsxs(n, {
                      className: "space-y-4",
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children: g.map((s) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between p-3 border rounded-lg",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className: `w-10 h-10 ${s.color} rounded-lg flex items-center justify-center`,
                                        children: e.jsx(s.icon, {
                                          className: "w-5 h-5 text-white",
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className: "font-medium",
                                            children: s.domain,
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-sm text-muted-foreground",
                                            children: [
                                              s.metrics.filter(
                                                (r) => r.health === "good",
                                              ).length,
                                              "/",
                                              s.metrics.length,
                                              " métricas saudáveis",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsxs("span", {
                                            className: "text-lg font-bold",
                                            children: [s.score, "/100"],
                                          }),
                                          e.jsx(f, {
                                            className: v(s.status),
                                            children:
                                              s.status === "on-track"
                                                ? "No Caminho"
                                                : s.status === "at-risk"
                                                  ? "Em Risco"
                                                  : "Fora do Caminho",
                                          }),
                                        ],
                                      }),
                                      e.jsx(N, {
                                        value: s.score,
                                        className: "w-20 h-2 mt-1",
                                        indicatorClassName: p(s.score),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              s.domain,
                            ),
                          ),
                        }),
                        e.jsx(l, {
                          variant: "outline",
                          className: "w-full",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: "/app/metrics",
                            children: [
                              e.jsx(R, { className: "w-4 h-4 mr-2" }),
                              a("dashboard.sections.view_details_by_domain"),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(t, {
                  children: [
                    e.jsx(i, {
                      children: e.jsxs(c, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(C, { className: "w-5 h-5" }),
                          "Insights Principais",
                        ],
                      }),
                    }),
                    e.jsxs(n, {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            e.jsxs("div", {
                              className:
                                "p-3 bg-green-50 border border-green-200 rounded-lg",
                              children: [
                                e.jsx("h4", {
                                  className: "font-medium text-green-800 mb-1",
                                  children: "🎯 Crescimento Sustentável",
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-green-700",
                                  children:
                                    "Receita cresceu 18% com margem saudável de 15.8%, indicando crescimento sustentável",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "p-3 bg-blue-50 border border-blue-200 rounded-lg",
                              children: [
                                e.jsx("h4", {
                                  className: "font-medium text-blue-800 mb-1",
                                  children: "📈 Eficiência Operacional",
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-blue-700",
                                  children:
                                    "Taxa de execução de 76% mostra boa capacidade de entrega das iniciativas",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "p-3 bg-yellow-50 border border-yellow-200 rounded-lg",
                              children: [
                                e.jsx("h4", {
                                  className: "font-medium text-yellow-800 mb-1",
                                  children: "⚠️ Atenção Estratégica",
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-yellow-700",
                                  children:
                                    "Domínio estratégico precisa de atenção: taxa de iniciativas concluídas abaixo da meta",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(l, {
                          variant: "outline",
                          className: "w-full",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: "/app/decision-panel",
                            children: [
                              e.jsx(x, { className: "w-4 h-4 mr-2" }),
                              a("dashboard.sections.decision_panel"),
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
          e.jsxs(o, {
            value: "domains",
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: a("dashboard.sections.metrics_by_domain"),
                  }),
                  e.jsx(l, {
                    asChild: !0,
                    children: e.jsxs(u, {
                      to: "/app/metrics",
                      children: [
                        a("dashboard.sections.view_complete_analytics"),
                        e.jsx(Z, { className: "w-4 h-4 ml-2" }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: g.map((s) =>
                  e.jsxs(
                    t,
                    {
                      className: "card-hover",
                      children: [
                        e.jsx(i, {
                          children: e.jsx("div", {
                            className: "flex items-center justify-between",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                e.jsx("div", {
                                  className: `w-12 h-12 ${s.color} rounded-lg flex items-center justify-center`,
                                  children: e.jsx(s.icon, {
                                    className: "w-6 h-6 text-white",
                                  }),
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx(c, {
                                      className: "text-xl",
                                      children: s.domain,
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2 mt-1",
                                      children: [
                                        e.jsx(f, {
                                          className: v(s.status),
                                          children:
                                            s.status === "on-track"
                                              ? "No Caminho"
                                              : s.status === "at-risk"
                                                ? "Em Risco"
                                                : "Fora do Caminho",
                                        }),
                                        e.jsxs("span", {
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: [
                                            "Score: ",
                                            s.score,
                                            "/100",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        e.jsxs(n, {
                          className: "space-y-4",
                          children: [
                            e.jsx(N, {
                              value: s.score,
                              className: "h-3",
                              indicatorClassName: p(s.score),
                            }),
                            e.jsx("div", {
                              className: "grid grid-cols-2 gap-3",
                              children: s.metrics.map((r, M) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className: "p-3 bg-gray-50 rounded-lg",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-1",
                                        children: [
                                          e.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: r.name,
                                          }),
                                          e.jsxs("span", {
                                            className: `text-xs ${A(r.health)}`,
                                            children: [
                                              r.trend > 0 ? "+" : "",
                                              r.trend,
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className: "text-lg font-bold",
                                        children: r.value,
                                      }),
                                    ],
                                  },
                                  M,
                                ),
                              ),
                            }),
                            e.jsxs(l, {
                              variant: "outline",
                              size: "sm",
                              className: "w-full",
                              children: [
                                e.jsx(R, { className: "w-4 h-4 mr-2" }),
                                a("common.view_details"),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    s.domain,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs(o, {
            value: "trends",
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: a("dashboard.sections.trends_analysis"),
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs(l, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          e.jsx(J, { className: "w-4 h-4 mr-2" }),
                          a("dashboard.sections.period"),
                        ],
                      }),
                      e.jsxs(l, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          e.jsx(j, { className: "w-4 h-4 mr-2" }),
                          a("common.export"),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                  e.jsxs(t, {
                    children: [
                      e.jsx(i, {
                        children: e.jsxs(c, {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(m, { className: "w-5 h-5" }),
                            "Evolução de Receita e Margem",
                          ],
                        }),
                      }),
                      e.jsx(n, {
                        children: e.jsx("div", {
                          className: "space-y-4",
                          children: z.map((s, r) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between p-3 border rounded-lg",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center",
                                        children: e.jsx("span", {
                                          className:
                                            "text-sm font-bold text-blue-600",
                                          children: s.period,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsxs("p", {
                                            className: "font-medium",
                                            children: [
                                              "R$",
                                              (s.revenue / 1e6).toFixed(1),
                                              "M",
                                            ],
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-sm text-muted-foreground",
                                            children: [
                                              "Margem: ",
                                              s.margin,
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Score",
                                      }),
                                      e.jsxs("div", {
                                        className: "text-lg font-bold",
                                        children: [s.score, "/100"],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              r,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(t, {
                    children: [
                      e.jsx(i, {
                        children: e.jsxs(c, {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(T, { className: "w-5 h-5" }),
                            "Distribuição de Performance",
                          ],
                        }),
                      }),
                      e.jsx(n, {
                        children: e.jsxs("div", {
                          className: "text-center py-12 text-muted-foreground",
                          children: [
                            e.jsx(T, {
                              className: "w-16 h-16 mx-auto mb-4 opacity-50",
                            }),
                            e.jsx("p", {
                              children:
                                "Gráficos de distribuição de performance por domínio",
                            }),
                            e.jsx(l, {
                              className: "mt-4",
                              variant: "outline",
                              children: a(
                                "dashboard.sections.view_complete_analytics",
                              ),
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
          e.jsxs(o, {
            value: "insights",
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: a("dashboard.sections.strategic_insights"),
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs(l, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          e.jsx(Y, { className: "w-4 h-4 mr-2" }),
                          a("common.settings"),
                        ],
                      }),
                      e.jsxs(l, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          e.jsx(j, { className: "w-4 h-4 mr-2" }),
                          a("common.export"),
                          " Relatório",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                  e.jsxs(t, {
                    children: [
                      e.jsx(i, {
                        children: e.jsxs(c, {
                          className: "flex items-center gap-2 text-green-600",
                          children: [
                            e.jsx(m, { className: "w-5 h-5" }),
                            "Oportunidades",
                          ],
                        }),
                      }),
                      e.jsxs(n, {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className: "p-3 bg-green-50 rounded-lg",
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-green-800",
                                children: "Expansão de Mercado",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-green-700 mt-1",
                                children:
                                  "Pipeline crescente 15% indica oportunidade de expansão",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "p-3 bg-green-50 rounded-lg",
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-green-800",
                                children: "Eficiência Operacional",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-green-700 mt-1",
                                children:
                                  "Ganhos de 4.3% podem ser replicados em outras áreas",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(t, {
                    children: [
                      e.jsx(i, {
                        children: e.jsxs(c, {
                          className: "flex items-center gap-2 text-yellow-600",
                          children: [
                            e.jsx(W, { className: "w-5 h-5" }),
                            "Riscos",
                          ],
                        }),
                      }),
                      e.jsxs(n, {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className: "p-3 bg-yellow-50 rounded-lg",
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-yellow-800",
                                children: "Churn Elevado",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-yellow-700 mt-1",
                                children: "Taxa de 4.2% acima da meta de 3%",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "p-3 bg-yellow-50 rounded-lg",
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-yellow-800",
                                children: "Capacidade Limitada",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-yellow-700 mt-1",
                                children:
                                  "Utilização de 71% pode limitar crescimento",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(t, {
                    children: [
                      e.jsx(i, {
                        children: e.jsxs(c, {
                          className: "flex items-center gap-2 text-blue-600",
                          children: [
                            e.jsx(x, { className: "w-5 h-5" }),
                            "Recomendações",
                          ],
                        }),
                      }),
                      e.jsxs(n, {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className: "p-3 bg-blue-50 rounded-lg",
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-blue-800",
                                children: "Foco em Retenção",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-blue-700 mt-1",
                                children: "Implementar programa de fidelização",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "p-3 bg-blue-50 rounded-lg",
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-blue-800",
                                children: "Investimento em Capacidade",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-blue-700 mt-1",
                                children: "Planejar expansão operacional",
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
      }),
    ],
  });
};
export { re as default };
