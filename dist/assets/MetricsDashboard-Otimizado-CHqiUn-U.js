import { s as O, j as e, B as n, u as te } from "./index-CzFfXFeY.js";
import { r as v, b as re } from "./vendor-Bp-AcFIh.js";
import { C as j, b as g, c as f, a as p } from "./card-DEQcRzjn.js";
import { B as y } from "./badge-DQqwMB41.js";
import { K as le } from "./kpi-card-LDS_wAn7.js";
import { P as ne } from "./progress-BBoJfiZm.js";
import { S as M, a as A, b as R, c as L, d as x } from "./select-CuHe0xdE.js";
import { I as ie } from "./input-BTdCt8gt.js";
import { S as m } from "./skeleton-B9cwtxN4.js";
import { A as ce, a as de } from "./alert-4bci8o7z.js";
import { u as oe } from "./useMetricsLibrary-B3hXl6tS.js";
import { u as H } from "./useQuery-CUbIaUAb.js";
import {
  E as _,
  a0 as he,
  T as k,
  a as xe,
  am as F,
  $ as me,
  d as ue,
  f as b,
  s as je,
  r as ge,
  D as fe,
  a1 as z,
  b as u,
  c as D,
  j as pe,
  n as Ne,
  A as B,
  i as E,
  h as V,
  Z as q,
} from "./utils-BYPr0Dmq.js";
import {
  R as $,
  B as ve,
  o as be,
  X as we,
  Y as ye,
  T,
  p as Ce,
  P as K,
  q as U,
  r as I,
} from "./PieChart-Dtv7QXz8.js";
import { L as w } from "./router-Db_Yswnp.js";
import "./index-Bxi3BZuB.js";
import "./index-CKeeGB76.js";
import "./index-Dsfa9Guj.js";
const Se = (t) =>
    H({
      queryKey: ["metric-values", t],
      queryFn: async () => {
        const { data: i, error: r } = await O.from("latest_metric_values")
          .select("*")
          .eq("organization_id", t)
          .order("metric_name");
        if (r) throw r;
        return i || [];
      },
      staleTime: 2 * 60 * 1e3,
      enabled: !!t,
    }),
  De = (t) =>
    H({
      queryKey: ["cross-domain-analytics", t],
      queryFn: async () => {
        const { data: i, error: r } = await O.from(
          "cross_domain_analytics_summary",
        )
          .select("*")
          .eq("organization_id", t)
          .order("period_start", { ascending: !1 })
          .limit(1)
          .single();
        if (r && r.code !== "PGRST116") throw r;
        return (
          i || {
            overall_health_score: 0,
            overall_health_trend: "stable",
            overall_health_change: 0,
            critical_relationships_count: 0,
            recommendations_count: 0,
            business_health_score: 0,
            growth_potential_score: 0,
            operational_excellence_score: 0,
          }
        );
      },
      staleTime: 10 * 60 * 1e3,
      enabled: !!t,
    }),
  $e = ({ metric: t, onClick: i, compact: r = !1 }) => {
    const d = () => {
        switch (t.healthStatus) {
          case "good":
            return e.jsx(xe, { className: "w-4 h-4 text-green-500" });
          case "warning":
            return e.jsx(k, { className: "w-4 h-4 text-yellow-500" });
          case "critical":
            return e.jsx(k, { className: "w-4 h-4 text-red-500" });
          default:
            return e.jsx(he, { className: "w-4 h-4 text-gray-500" });
        }
      },
      c = () => {
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
      o = (a, l) =>
        l === "%"
          ? `${a.toFixed(1)}%`
          : l === "R$" || l === "$"
            ? `${l}${a.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
            : l === "meses" || l === "dias"
              ? `${a.toFixed(1)} ${l}`
              : `${a.toLocaleString("pt-BR")} ${l}`,
      h = r ? "p-4" : "p-6";
    return e.jsxs(j, {
      className: `cursor-pointer transition-all hover:shadow-md ${c()} ${h}`,
      onClick: i,
      children: [
        e.jsx(g, {
          className: r ? "pb-2" : "pb-4",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsx(f, {
                className: r ? "text-sm" : "text-base font-medium",
                children: t.name,
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  d(),
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
        e.jsx(p, {
          className: "pt-0",
          children: e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-baseline justify-between",
                children: [
                  e.jsx("div", {
                    className: `font-bold ${r ? "text-xl" : "text-3xl"}`,
                    children: o(t.value, t.unit),
                  }),
                  e.jsx(P, {
                    trend: t.trend,
                    value: t.trendPercentage,
                    compact: r,
                  }),
                ],
              }),
              !r &&
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
                    e.jsxs(n, {
                      variant: "ghost",
                      size: "sm",
                      children: [
                        e.jsx(_, { className: "w-4 h-4 mr-1" }),
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
  P = ({ trend: t, value: i, compact: r = !1 }) => {
    const d = () => {
        switch (t) {
          case "up":
            return e.jsx(ue, { className: "w-4 h-4 text-green-500" });
          case "down":
            return e.jsx(me, { className: "w-4 h-4 text-red-500" });
          case "stable":
            return e.jsx(F, { className: "w-4 h-4 text-gray-500" });
          default:
            return e.jsx(F, { className: "w-4 h-4 text-gray-500" });
        }
      },
      c = () => {
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
      o = (h) => (h === 0 ? "0%" : `${h > 0 ? "+" : ""}${h.toFixed(1)}%`);
    return r
      ? e.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            d(),
            e.jsx("span", {
              className: `text-xs font-medium ${c()}`,
              children: o(i),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "flex flex-col items-end",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                d(),
                e.jsx("span", {
                  className: `font-semibold ${c()}`,
                  children: o(i),
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
  Te = ({ metrics: t, domain: i, period: r }) => {
    if (!t.length)
      return e.jsx("div", {
        className: "text-center text-gray-500 py-8",
        children: e.jsx("p", {
          className: "text-sm",
          children: "Nenhuma métrica encontrada para este domínio.",
        }),
      });
    const d = [
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
      c = [
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
      o = t.map((a) => ({
        name: a.name.length > 15 ? a.name.substring(0, 15) + "..." : a.name,
        value: a.value,
        healthStatus: a.healthStatus,
        fill: h(a.healthStatus),
      })),
      h = (a) => {
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
                data: o,
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
                    formatter: (a, l) => [`${a}`, "Valor"],
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
                  children: e.jsxs(K, {
                    children: [
                      e.jsx(U, {
                        data: d,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: a, percent: l }) =>
                          `${a} ${(l * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: d.map((a, l) =>
                          e.jsx(I, { fill: a.color }, `cell-${l}`),
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
                  children: e.jsxs(K, {
                    children: [
                      e.jsx(U, {
                        data: c,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: a, percent: l }) =>
                          `${a} ${(l * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: c.map((a, l) =>
                          e.jsx(I, { fill: a.color }, `cell-${l}`),
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
    te();
    const [t, i] = v.useState("all");
    v.useState("current");
    const [r, d] = v.useState("cards"),
      [c, o] = v.useState(""),
      { metrics: h, isLoading: a } = oe(),
      { values: l, isLoading: G } = Se("default-org"),
      { analytics: _e, isLoading: X } = De("default-org"),
      Y = a || G || X,
      Z = [
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
          icon: B,
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
          icon: z,
          trend: { value: 2, isPositive: !0, label: "vs. mês anterior" },
          variant: "success",
          subtitle: "Dados atualizados",
        },
      ],
      C = [
        {
          domain: "finance",
          name: "Financeiro",
          icon: E,
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
          icon: V,
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
          icon: q,
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
          ae =
            s.name.toLowerCase().includes(c.toLowerCase()) ||
            s.description.toLowerCase().includes(c.toLowerCase());
        return S && ae;
      }),
      Q = (s) => {
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
      W = (s) => {
        switch (s) {
          case "finance":
            return E;
          case "commercial":
            return V;
          case "operations":
            return q;
          case "strategy":
            return u;
          default:
            return b;
        }
      },
      ee = (s) => {
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
      se = (s) => {
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
    return Y
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
                        e.jsx(ie, {
                          placeholder: "Buscar métricas...",
                          value: c,
                          onChange: (s) => o(s.target.value),
                          className: "pl-10 w-64",
                        }),
                      ],
                    }),
                    e.jsxs(M, {
                      value: t,
                      onValueChange: i,
                      children: [
                        e.jsx(A, { className: "w-40", children: e.jsx(R, {}) }),
                        e.jsxs(L, {
                          children: [
                            e.jsx(x, {
                              value: "all",
                              children: "Todos Domínios",
                            }),
                            e.jsx(x, {
                              value: "finance",
                              children: "Financeiro",
                            }),
                            e.jsx(x, {
                              value: "commercial",
                              children: "Comercial",
                            }),
                            e.jsx(x, {
                              value: "operations",
                              children: "Operacional",
                            }),
                            e.jsx(x, {
                              value: "strategy",
                              children: "Estratégico",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(n, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        e.jsx(ge, { className: "w-4 h-4 mr-2" }),
                        "Filtros",
                      ],
                    }),
                    e.jsxs(n, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        e.jsx(fe, { className: "w-4 h-4 mr-2" }),
                        "Exportar",
                      ],
                    }),
                    e.jsxs(n, {
                      variant: "outline",
                      size: "sm",
                      children: [
                        e.jsx(z, { className: "w-4 h-4 mr-2" }),
                        "Atualizar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: Z.map((s, S) =>
                e.jsx(
                  le,
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
              e.jsxs(ce, {
                className: "border-yellow-200 bg-yellow-50",
                children: [
                  e.jsx(u, { className: "h-4 w-4 text-yellow-600" }),
                  e.jsxs(de, {
                    className: "text-yellow-800",
                    children: [
                      e.jsx("strong", { children: "Atenção:" }),
                      " ",
                      C.filter((s) => s.criticalCount > 0).length,
                      " domínios possuem métricas críticas que requerem atenção imediata.",
                      e.jsx(n, {
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
                                      e.jsx(f, {
                                        className: "text-lg",
                                        children: s.name,
                                      }),
                                      e.jsx(y, {
                                        className: Q(s.status),
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
                          e.jsxs(p, {
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
                                  e.jsx(ne, {
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
                                  e.jsx(P, {
                                    trend: s.trend > 0 ? "up" : "down",
                                    value: Math.abs(s.trend),
                                  }),
                                  e.jsx(n, {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: e.jsxs(w, {
                                      to: `/app/metrics?domain=${s.domain}`,
                                      children: [
                                        e.jsx(_, { className: "w-4 h-4 mr-2" }),
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
                        e.jsxs(M, {
                          value: r,
                          onValueChange: d,
                          children: [
                            e.jsx(A, {
                              className: "w-32",
                              children: e.jsx(R, {}),
                            }),
                            e.jsxs(L, {
                              children: [
                                e.jsx(x, { value: "cards", children: "Cards" }),
                                e.jsx(x, {
                                  value: "chart",
                                  children: "Gráfico",
                                }),
                                e.jsx(x, {
                                  value: "table",
                                  children: "Tabela",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(n, {
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
                r === "cards" &&
                  e.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: N.map((s) =>
                      e.jsx($e, { metric: s, onClick: () => {} }, s.id),
                    ),
                  }),
                r === "chart" &&
                  e.jsxs(j, {
                    children: [
                      e.jsx(g, {
                        children: e.jsxs(f, {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(pe, { className: "w-5 h-5" }),
                            "Visualização Gráfica",
                          ],
                        }),
                      }),
                      e.jsx(p, { children: e.jsx(Te, { metrics: N }) }),
                    ],
                  }),
                r === "table" &&
                  e.jsxs(j, {
                    children: [
                      e.jsx(g, {
                        children: e.jsxs(f, {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(b, { className: "w-5 h-5" }),
                            "Tabela de Métricas",
                          ],
                        }),
                      }),
                      e.jsx(p, {
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
                                                className: `w-6 h-6 ${ee(s.domain)} rounded flex items-center justify-center`,
                                                children: re.createElement(
                                                  W(s.domain),
                                                  {
                                                    className:
                                                      "w-3 h-3 text-white",
                                                  },
                                                ),
                                              }),
                                              e.jsx("span", {
                                                children: se(s.domain),
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
                                          children: e.jsx(P, {
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
                                              e.jsx(n, {
                                                variant: "outline",
                                                size: "sm",
                                                children: e.jsx(_, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                              e.jsx(n, {
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
                      children: e.jsxs(f, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(Ne, { className: "w-5 h-5" }),
                          "Ações Rápidas",
                        ],
                      }),
                    }),
                    e.jsx(p, {
                      children: e.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                          e.jsx(n, {
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
                          e.jsx(n, {
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: e.jsxs(w, {
                              to: "/app/analytics",
                              children: [
                                e.jsx(B, { className: "w-4 h-4 mr-2" }),
                                "Analytics Avançados",
                              ],
                            }),
                          }),
                          e.jsx(n, {
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
