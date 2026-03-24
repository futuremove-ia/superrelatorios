import { j as e, B as i, u as se } from "./index-CZZTgEon.js";
import { r as v, b as ae } from "./vendor-BgR6OOld.js";
import { C as j, b as g, c as p, a as f } from "./card-CeRYWmFS.js";
import { B as y } from "./badge-Dywuca96.js";
import { K as te } from "./kpi-card-DiK3deXa.js";
import { P as re } from "./progress-DiZtfjCp.js";
import { S as A, a as R, b as L, c as k, d as h } from "./select-BzszXf0X.js";
import { I as le } from "./input-BW1kAVjz.js";
import { S as m } from "./skeleton-eXTMMige.js";
import { A as ie, a as ne } from "./alert-NildW34i.js";
import { u as ce } from "./useMetricsLibrary-OueowURa.js";
import { u as de, a as oe } from "./useCrossDomainAnalytics-DRLe3lpF.js";
import {
  E as P,
  a0 as he,
  T as z,
  C as xe,
  ah as B,
  $ as me,
  c as ue,
  e as b,
  s as je,
  r as ge,
  D as pe,
  a1 as E,
  a as u,
  b as D,
  i as fe,
  p as Ne,
  A as F,
  h as V,
  g as I,
  Z as K,
} from "./utils-D0yiqoi7.js";
import {
  R as $,
  B as ve,
  o as be,
  X as we,
  Y as ye,
  T,
  p as Ce,
  P as U,
  q,
  r as O,
} from "./PieChart-BShAvi3u.js";
import { L as w } from "./router-D2JcpG7e.js";
import "./index-Cda9Zv0V.js";
import "./index-C557e4H0.js";
import "./index-C_1O2NDl.js";
import "./useQuery-D4K2XlIj.js";
const Se = ({ metric: t, onClick: x, compact: l = !1 }) => {
    const c = () => {
        switch (t.healthStatus) {
          case "good":
            return e.jsx(xe, { className: "w-4 h-4 text-green-500" });
          case "warning":
            return e.jsx(z, { className: "w-4 h-4 text-yellow-500" });
          case "critical":
            return e.jsx(z, { className: "w-4 h-4 text-red-500" });
          default:
            return e.jsx(he, { className: "w-4 h-4 text-gray-500" });
        }
      },
      n = () => {
        switch (t.healthStatus) {
          case "good":
            return "border-green-200 bg-green-50";
          case "warning":
            return "border-yellow-200 bg-yellow-50";
          case "critical":
            return "border-red-200 bg-red-50";
          default:
            return "border-gray-200 bg-gray-50";
        }
      },
      d = (a, r) =>
        r === "%"
          ? `${a.toFixed(1)}%`
          : r === "R$" || r === "$"
            ? `${r}${a.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
            : r === "meses" || r === "dias"
              ? `${a.toFixed(1)} ${r}`
              : `${a.toLocaleString("pt-BR")} ${r}`,
      o = l ? "p-4" : "p-6";
    return e.jsxs(j, {
      className: `cursor-pointer transition-all hover:shadow-md ${n()} ${o}`,
      onClick: x,
      children: [
        e.jsx(g, {
          className: l ? "pb-2" : "pb-4",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsx(p, {
                className: l ? "text-sm" : "text-base font-medium",
                children: t.name,
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  c(),
                  e.jsx(y, {
                    variant:
                      t.healthStatus === "good" ? "default" : "destructive",
                    className: "text-xs",
                    children: t.healthStatus,
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(f, {
          className: "pt-0",
          children: e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-baseline justify-between",
                children: [
                  e.jsx("div", {
                    className: `font-bold ${l ? "text-xl" : "text-3xl"}`,
                    children: d(t.value, t.unit),
                  }),
                  e.jsx(M, {
                    trend: t.trend,
                    value: t.trendPercentage,
                    compact: l,
                  }),
                ],
              }),
              !l &&
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between text-sm text-gray-600",
                  children: [
                    e.jsxs("span", {
                      children: [
                        "Período: ",
                        new Date(t.period).toLocaleDateString("pt-BR"),
                      ],
                    }),
                    e.jsxs(i, {
                      variant: "ghost",
                      size: "sm",
                      children: [
                        e.jsx(P, { className: "w-4 h-4 mr-1" }),
                        "Detalhes",
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  },
  M = ({ trend: t, value: x, compact: l = !1 }) => {
    const c = () => {
        switch (t) {
          case "up":
            return e.jsx(ue, { className: "w-4 h-4 text-green-500" });
          case "down":
            return e.jsx(me, { className: "w-4 h-4 text-red-500" });
          case "stable":
            return e.jsx(B, { className: "w-4 h-4 text-gray-500" });
          default:
            return e.jsx(B, { className: "w-4 h-4 text-gray-500" });
        }
      },
      n = () => {
        switch (t) {
          case "up":
            return "text-green-600";
          case "down":
            return "text-red-600";
          case "stable":
            return "text-gray-600";
          default:
            return "text-gray-600";
        }
      },
      d = (o) => (o === 0 ? "0%" : `${o > 0 ? "+" : ""}${o.toFixed(1)}%`);
    return l
      ? e.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            c(),
            e.jsx("span", {
              className: `text-xs font-medium ${n()}`,
              children: d(x),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "flex flex-col items-end",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                c(),
                e.jsx("span", {
                  className: `font-semibold ${n()}`,
                  children: d(x),
                }),
              ],
            }),
            e.jsx("span", {
              className: "text-xs text-gray-500",
              children: "vs. período anterior",
            }),
          ],
        });
  },
  De = ({ metrics: t, domain: x, period: l }) => {
    if (!t.length)
      return e.jsx("div", {
        className: "text-center text-gray-500 py-8",
        children: e.jsx("p", {
          className: "text-sm",
          children: "Nenhuma métrica encontrada para este domínio.",
        }),
      });
    const c = [
        {
          name: "Boas",
          value: t.filter((a) => a.healthStatus === "good").length,
          color: "#10b981",
        },
        {
          name: "Atenção",
          value: t.filter((a) => a.healthStatus === "warning").length,
          color: "#f59e0b",
        },
        {
          name: "Críticas",
          value: t.filter((a) => a.healthStatus === "critical").length,
          color: "#ef4444",
        },
      ],
      n = [
        {
          name: "Altas",
          value: t.filter((a) => a.trend === "up").length,
          color: "#10b981",
        },
        {
          name: "Estáveis",
          value: t.filter((a) => a.trend === "stable").length,
          color: "#6b7280",
        },
        {
          name: "Baixas",
          value: t.filter((a) => a.trend === "down").length,
          color: "#ef4444",
        },
      ],
      d = t.map((a) => ({
        name: a.name.length > 15 ? a.name.substring(0, 15) + "..." : a.name,
        value: a.value,
        healthStatus: a.healthStatus,
        fill: o(a.healthStatus),
      })),
      o = (a) => {
        switch (a) {
          case "good":
            return "#10b981";
          case "warning":
            return "#f59e0b";
          case "critical":
            return "#ef4444";
          default:
            return "#6b7280";
        }
      };
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h4", {
              className: "text-lg font-semibold mb-4",
              children: "Valores das Métricas",
            }),
            e.jsx($, {
              width: "100%",
              height: 300,
              children: e.jsxs(ve, {
                data: d,
                children: [
                  e.jsx(be, { strokeDasharray: "3 3" }),
                  e.jsx(we, {
                    dataKey: "name",
                    angle: -45,
                    textAnchor: "end",
                    height: 80,
                    interval: 0,
                    tick: { fontSize: 12 },
                  }),
                  e.jsx(ye, { tick: { fontSize: 12 } }),
                  e.jsx(T, {
                    formatter: (a, r) => [`${a}`, "Valor"],
                    labelFormatter: (a) => `Métrica: ${a}`,
                  }),
                  e.jsx(Ce, { dataKey: "value", fill: "#8884d8" }),
                ],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h4", {
                  className: "text-lg font-semibold mb-4",
                  children: "Distribuição de Saúde",
                }),
                e.jsx($, {
                  width: "100%",
                  height: 200,
                  children: e.jsxs(U, {
                    children: [
                      e.jsx(q, {
                        data: c,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: a, percent: r }) =>
                          `${a} ${(r * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: c.map((a, r) =>
                          e.jsx(O, { fill: a.color }, `cell-${r}`),
                        ),
                      }),
                      e.jsx(T, {}),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h4", {
                  className: "text-lg font-semibold mb-4",
                  children: "Distribuição de Tendências",
                }),
                e.jsx($, {
                  width: "100%",
                  height: 200,
                  children: e.jsxs(U, {
                    children: [
                      e.jsx(q, {
                        data: n,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: a, percent: r }) =>
                          `${a} ${(r * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: n.map((a, r) =>
                          e.jsx(O, { fill: a.color }, `cell-${r}`),
                        ),
                      }),
                      e.jsx(T, {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          children: [
            e.jsx("h4", {
              className: "text-lg font-semibold mb-4",
              children: "Resumo Detalhado",
            }),
            e.jsx("div", {
              className: "overflow-x-auto",
              children: e.jsxs("table", {
                className: "w-full text-sm",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "border-b",
                      children: [
                        e.jsx("th", {
                          className: "text-left p-2",
                          children: "Métrica",
                        }),
                        e.jsx("th", {
                          className: "text-right p-2",
                          children: "Valor",
                        }),
                        e.jsx("th", {
                          className: "text-right p-2",
                          children: "Tendência",
                        }),
                        e.jsx("th", {
                          className: "text-center p-2",
                          children: "Status",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: t.map((a) =>
                      e.jsxs(
                        "tr",
                        {
                          className: "border-b hover:bg-gray-50",
                          children: [
                            e.jsx("td", {
                              className: "p-2 font-medium",
                              children: a.name,
                            }),
                            e.jsxs("td", {
                              className: "p-2 text-right",
                              children: [a.value, a.unit],
                            }),
                            e.jsx("td", {
                              className: "p-2 text-right",
                              children: e.jsxs("span", {
                                className: `inline-flex items-center ${a.trend === "up" ? "text-green-600" : a.trend === "down" ? "text-red-600" : "text-gray-600"}`,
                                children: [
                                  a.trend === "up"
                                    ? "↗"
                                    : a.trend === "down"
                                      ? "↘"
                                      : "→",
                                  a.trendPercentage > 0 ? "+" : "",
                                  a.trendPercentage.toFixed(1),
                                  "%",
                                ],
                              }),
                            }),
                            e.jsx("td", {
                              className: "p-2 text-center",
                              children: e.jsx("span", {
                                className: `inline-block px-2 py-1 text-xs rounded-full ${a.healthStatus === "good" ? "bg-green-100 text-green-800" : a.healthStatus === "warning" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`,
                                children: a.healthStatus,
                              }),
                            }),
                          ],
                        },
                        a.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Ye = () => {
    se();
    const [t, x] = v.useState("all");
    v.useState("current");
    const [l, c] = v.useState("cards"),
      [n, d] = v.useState(""),
      { metrics: o, isLoading: a } = ce(),
      { values: r, isLoading: H } = de("default-org"),
      { analytics: $e, isLoading: G } = oe("default-org"),
      X = a || H || G,
      Y = [
        {
          title: "Total de Métricas",
          value: "16",
          icon: b,
          trend: { value: 0, isPositive: !0, label: "Estável" },
          variant: "info",
          subtitle: "Ativas e monitoradas",
        },
        {
          title: "Score de Saúde",
          value: "82%",
          icon: F,
          trend: { value: 5, isPositive: !0, label: "vs. mês anterior" },
          variant: "success",
          subtitle: "Performance geral",
        },
        {
          title: "Métricas Críticas",
          value: "3",
          icon: u,
          trend: { value: -1, isPositive: !1, label: "vs. mês anterior" },
          variant: "warning",
          subtitle: "Requerem atenção",
        },
        {
          title: "Taxa de Atualização",
          value: "94%",
          icon: E,
          trend: { value: 2, isPositive: !0, label: "vs. mês anterior" },
          variant: "success",
          subtitle: "Dados atualizados",
        },
      ],
      C = [
        {
          domain: "finance",
          name: "Financeiro",
          icon: V,
          color: "bg-green-500",
          metrics: 4,
          healthScore: 85,
          status: "on-track",
          criticalCount: 0,
          trend: 8,
        },
        {
          domain: "commercial",
          name: "Comercial",
          icon: I,
          color: "bg-blue-500",
          metrics: 4,
          healthScore: 78,
          status: "on-track",
          criticalCount: 1,
          trend: 5,
        },
        {
          domain: "operations",
          name: "Operacional",
          icon: K,
          color: "bg-orange-500",
          metrics: 4,
          healthScore: 82,
          status: "on-track",
          criticalCount: 1,
          trend: 12,
        },
        {
          domain: "strategy",
          name: "Estratégico",
          icon: u,
          color: "bg-purple-500",
          metrics: 4,
          healthScore: 77,
          status: "at-risk",
          criticalCount: 1,
          trend: -3,
        },
      ],
      N = [
        {
          id: "1",
          name: "Net Profit Margin",
          value: 15.8,
          unit: "%",
          domain: "finance",
          trend: "up",
          healthStatus: "good",
          lastUpdated: "2024-03-15",
          description: "Margem de lucro líquida",
        },
        {
          id: "2",
          name: "Sales Conversion Rate",
          value: 14.7,
          unit: "%",
          domain: "commercial",
          trend: "up",
          healthStatus: "good",
          lastUpdated: "2024-03-15",
          description: "Taxa de conversão de vendas",
        },
        {
          id: "3",
          name: "Operational Efficiency",
          value: 76.8,
          unit: "%",
          domain: "operations",
          trend: "up",
          healthStatus: "good",
          lastUpdated: "2024-03-15",
          description: "Eficiência operacional",
        },
        {
          id: "4",
          name: "OKR Progress",
          value: 78,
          unit: "%",
          domain: "strategy",
          trend: "down",
          healthStatus: "warning",
          lastUpdated: "2024-03-15",
          description: "Progresso dos OKRs",
        },
        {
          id: "5",
          name: "Customer Acquisition Cost",
          value: 320,
          unit: "R$",
          domain: "finance",
          trend: "down",
          healthStatus: "good",
          lastUpdated: "2024-03-15",
          description: "Custo de aquisição de cliente",
        },
        {
          id: "6",
          name: "Churn Rate",
          value: 4.2,
          unit: "%",
          domain: "commercial",
          trend: "up",
          healthStatus: "critical",
          lastUpdated: "2024-03-15",
          description: "Taxa de cancelamento",
        },
      ].filter((s) => {
        const S = t === "all" || s.domain === t,
          ee =
            s.name.toLowerCase().includes(n.toLowerCase()) ||
            s.description.toLowerCase().includes(n.toLowerCase());
        return S && ee;
      }),
      Z = (s) => {
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
      J = (s) => {
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
      Q = (s) => {
        switch (s) {
          case "finance":
            return V;
          case "commercial":
            return I;
          case "operations":
            return K;
          case "strategy":
            return u;
          default:
            return b;
        }
      },
      W = (s) => {
        switch (s) {
          case "finance":
            return "bg-green-500";
          case "commercial":
            return "bg-blue-500";
          case "operations":
            return "bg-orange-500";
          case "strategy":
            return "bg-purple-500";
          default:
            return "bg-gray-500";
        }
      },
      _ = (s) => {
        switch (s) {
          case "finance":
            return "Financeiro";
          case "commercial":
            return "Comercial";
          case "operations":
            return "Operacional";
          case "strategy":
            return "Estratégico";
          default:
            return s;
        }
      };
    return X
      ? e.jsxs("div", {
          className: "container-fluid space-y-8 py-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsx(m, { className: "h-10 w-64" }),
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(m, { className: "h-10 w-32" }),
                    e.jsx(m, { className: "h-10 w-32" }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: [1, 2, 3, 4].map((s) =>
                e.jsx(m, { className: "h-32 rounded-xl" }, s),
              ),
            }),
            e.jsxs("div", {
              className: "space-y-6",
              children: [
                e.jsx(m, { className: "h-6 w-48" }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: [1, 2, 3, 4].map((s) =>
                    e.jsx(m, { className: "h-48 rounded-xl" }, s),
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
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg",
                      children: e.jsx(b, { className: "w-6 h-6 text-white" }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h1", {
                          className: "text-3xl font-bold text-foreground",
                          children: "Painel de Indicadores",
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground",
                          children:
                            "Monitoramento completo de métricas por domínios",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx(je, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground",
                        }),
                        e.jsx(le, {
                          placeholder: "Buscar métricas...",
                          value: n,
                          onChange: (s) => d(s.target.value),
                          className: "pl-10 w-64",
                        }),
                      ],
                    }),
                    e.jsxs(A, {
                      value: t,
                      onValueChange: x,
                      children: [
                        e.jsx(R, { className: "w-40", children: e.jsx(L, {}) }),
                        e.jsxs(k, {
                          children: [
                            e.jsx(h, {
                              value: "all",
                              children: "Todos Domínios",
                            }),
                            e.jsx(h, {
                              value: "finance",
                              children: "Financeiro",
                            }),
                            e.jsx(h, {
                              value: "commercial",
                              children: "Comercial",
                            }),
                            e.jsx(h, {
                              value: "operations",
                              children: "Operacional",
                            }),
                            e.jsx(h, {
                              value: "strategy",
                              children: "Estratégico",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(i, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        e.jsx(ge, { className: "w-4 h-4 mr-2" }),
                        "Filtros",
                      ],
                    }),
                    e.jsxs(i, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        e.jsx(pe, { className: "w-4 h-4 mr-2" }),
                        "Exportar",
                      ],
                    }),
                    e.jsxs(i, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        e.jsx(E, { className: "w-4 h-4 mr-2" }),
                        "Atualizar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: Y.map((s, S) =>
                e.jsx(
                  te,
                  {
                    title: s.title,
                    value: s.value,
                    icon: s.icon,
                    trend: s.trend,
                    variant: s.variant,
                    subtitle: s.subtitle,
                  },
                  S,
                ),
              ),
            }),
            C.some((s) => s.criticalCount > 0) &&
              e.jsxs(ie, {
                className: "border-yellow-200 bg-yellow-50",
                children: [
                  e.jsx(u, { className: "h-4 w-4 text-yellow-600" }),
                  e.jsxs(ne, {
                    className: "text-yellow-800",
                    children: [
                      e.jsx("strong", { children: "Atenção:" }),
                      " ",
                      C.filter((s) => s.criticalCount > 0).length,
                      " domínios possuem métricas críticas que requerem atenção imediata.",
                      e.jsx(i, {
                        variant: "link",
                        size: "sm",
                        className: "p-0 h-auto ml-2 text-yellow-600",
                        children: "Ver detalhes",
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "space-y-6",
              children: [
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: C.map((s) =>
                    e.jsxs(
                      j,
                      {
                        className: "card-hover",
                        children: [
                          e.jsx(g, {
                            className: "pb-3",
                            children: e.jsx("div", {
                              className: "flex items-center justify-between",
                              children: e.jsxs("div", {
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
                                      e.jsx(p, {
                                        className: "text-lg",
                                        children: s.name,
                                      }),
                                      e.jsx(y, {
                                        className: Z(s.status),
                                        children:
                                          s.status === "on-track"
                                            ? "No Caminho"
                                            : s.status === "at-risk"
                                              ? "Em Risco"
                                              : "Fora do Caminho",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          e.jsxs(f, {
                            className: "space-y-4",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Score de Saúde",
                                      }),
                                      e.jsxs("span", {
                                        className: "text-lg font-bold",
                                        children: [s.healthScore, "/100"],
                                      }),
                                    ],
                                  }),
                                  e.jsx(re, {
                                    value: s.healthScore,
                                    className: "h-2",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2 text-sm",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: "Métricas",
                                      }),
                                      e.jsx("p", {
                                        className: "font-medium",
                                        children: s.metrics,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("span", {
                                        className: "text-muted-foreground",
                                        children: "Críticas",
                                      }),
                                      e.jsx("p", {
                                        className: "font-medium text-red-600",
                                        children: s.criticalCount,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  e.jsx(M, {
                                    trend: s.trend > 0 ? "up" : "down",
                                    value: Math.abs(s.trend),
                                  }),
                                  e.jsx(i, {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: e.jsxs(w, {
                                      to: `/app/metrics?domain=${s.domain}`,
                                      children: [
                                        e.jsx(P, { className: "w-4 h-4 mr-2" }),
                                        "Ver",
                                      ],
                                    }),
                                  }),
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
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold",
                          children: "Métricas Detalhadas",
                        }),
                        e.jsxs(y, {
                          variant: "outline",
                          children: [N.length, " métricas"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsxs(A, {
                          value: l,
                          onValueChange: c,
                          children: [
                            e.jsx(R, {
                              className: "w-32",
                              children: e.jsx(L, {}),
                            }),
                            e.jsxs(k, {
                              children: [
                                e.jsx(h, { value: "cards", children: "Cards" }),
                                e.jsx(h, {
                                  value: "chart",
                                  children: "Gráfico",
                                }),
                                e.jsx(h, {
                                  value: "table",
                                  children: "Tabela",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(i, {
                          variant: "outline",
                          size: "sm",
                          children: [
                            e.jsx(D, { className: "w-4 h-4 mr-2" }),
                            "Configurar",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                l === "cards" &&
                  e.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: N.map((s) =>
                      e.jsx(Se, { metric: s, onClick: () => {} }, s.id),
                    ),
                  }),
                l === "chart" &&
                  e.jsxs(j, {
                    children: [
                      e.jsx(g, {
                        children: e.jsxs(p, {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(fe, { className: "w-5 h-5" }),
                            "Visualização Gráfica",
                          ],
                        }),
                      }),
                      e.jsx(f, { children: e.jsx(De, { metrics: N }) }),
                    ],
                  }),
                l === "table" &&
                  e.jsxs(j, {
                    children: [
                      e.jsx(g, {
                        children: e.jsxs(p, {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(b, { className: "w-5 h-5" }),
                            "Tabela de Métricas",
                          ],
                        }),
                      }),
                      e.jsx(f, {
                        children: e.jsx("div", {
                          className: "overflow-x-auto",
                          children: e.jsxs("table", {
                            className: "w-full",
                            children: [
                              e.jsx("thead", {
                                children: e.jsxs("tr", {
                                  className: "border-b",
                                  children: [
                                    e.jsx("th", {
                                      className: "text-left p-2",
                                      children: "Métrica",
                                    }),
                                    e.jsx("th", {
                                      className: "text-left p-2",
                                      children: "Domínio",
                                    }),
                                    e.jsx("th", {
                                      className: "text-left p-2",
                                      children: "Valor",
                                    }),
                                    e.jsx("th", {
                                      className: "text-left p-2",
                                      children: "Tendência",
                                    }),
                                    e.jsx("th", {
                                      className: "text-left p-2",
                                      children: "Status",
                                    }),
                                    e.jsx("th", {
                                      className: "text-left p-2",
                                      children: "Ações",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("tbody", {
                                children: N.map((s) =>
                                  e.jsxs(
                                    "tr",
                                    {
                                      className: "border-b",
                                      children: [
                                        e.jsx("td", {
                                          className: "p-2",
                                          children: e.jsxs("div", {
                                            children: [
                                              e.jsx("p", {
                                                className: "font-medium",
                                                children: s.name,
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-sm text-muted-foreground",
                                                children: s.description,
                                              }),
                                            ],
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className: "p-2",
                                          children: e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              e.jsx("div", {
                                                className: `w-6 h-6 ${W(s.domain)} rounded flex items-center justify-center`,
                                                children: ae.createElement(
                                                  Q(s.domain),
                                                  {
                                                    className:
                                                      "w-3 h-3 text-white",
                                                  },
                                                ),
                                              }),
                                              e.jsx("span", {
                                                children: _(s.domain),
                                              }),
                                            ],
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className: "p-2",
                                          children: e.jsxs("span", {
                                            className: "font-bold",
                                            children: [s.value, " ", s.unit],
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className: "p-2",
                                          children: e.jsx(M, {
                                            trend: s.trend,
                                            value: 0,
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className: "p-2",
                                          children: e.jsx(y, {
                                            className: J(s.healthStatus),
                                            children: s.healthStatus,
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className: "p-2",
                                          children: e.jsxs("div", {
                                            className: "flex gap-2",
                                            children: [
                                              e.jsx(i, {
                                                variant: "outline",
                                                size: "sm",
                                                children: e.jsx(P, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                              e.jsx(i, {
                                                variant: "outline",
                                                size: "sm",
                                                children: e.jsx(D, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    s.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                e.jsxs(j, {
                  children: [
                    e.jsx(g, {
                      children: e.jsxs(p, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(Ne, { className: "w-5 h-5" }),
                          "Ações Rápidas",
                        ],
                      }),
                    }),
                    e.jsx(f, {
                      children: e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                          e.jsx(i, {
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: e.jsxs(w, {
                              to: "/app/metrics/config",
                              children: [
                                e.jsx(D, { className: "w-4 h-4 mr-2" }),
                                "Configurar Métricas",
                              ],
                            }),
                          }),
                          e.jsx(i, {
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: e.jsxs(w, {
                              to: "/app/analytics",
                              children: [
                                e.jsx(F, { className: "w-4 h-4 mr-2" }),
                                "Analytics Avançados",
                              ],
                            }),
                          }),
                          e.jsx(i, {
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: e.jsxs(w, {
                              to: "/app/decision-panel",
                              children: [
                                e.jsx(u, { className: "w-4 h-4 mr-2" }),
                                "Painel de Decisão",
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { Ye as default };
