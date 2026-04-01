import {
  u as te,
  j as e,
  i as b,
  B as n,
  C as c,
  n as T,
  o as M,
  g as d,
  L as t,
  t as m,
  v as j,
  w as v,
  x as g,
  y as o,
  _ as P,
  aY as ne,
  aZ as re,
  a_ as E,
  a$ as h,
  b0 as ce,
  b1 as u,
  a4 as de,
  a5 as oe,
  a6 as he,
  a7 as ue,
  I as A,
  E as k,
} from "./index-DRWQgA5q.js";
import { r as f, R as xe, L as me } from "./router-XBfdTQ0K.js";
import { B as V } from "./badge-DD2chybY.js";
import { u as je } from "./useMetricsLibrary-XBP0Fd36.js";
import {
  a0 as R,
  $ as L,
  a1 as z,
  ag as ve,
  a5 as y,
  a9 as ge,
  a8 as pe,
  Z as fe,
  Y as U,
  aD as Ne,
  K as be,
  X as ye,
  a2 as q,
  b3 as _e,
  aa as we,
  ax as De,
  aq as Ce,
  b4 as Te,
} from "./utils-Er8ll4su.js";
import "./useQuery-pMG9BRxa.js";
const ke = () => {
  const { t: Me } = te(),
    [_, B] = f.useState("all"),
    [S, H] = f.useState(!1),
    [Y, w] = f.useState(null),
    [$, p] = f.useState(!1),
    [s, i] = f.useState({}),
    { metrics: Ae, isLoading: Z, refetch: D } = je(),
    N = [
      {
        id: "1",
        name: "Net Profit Margin",
        unit: "%",
        inputType: "non_cumulative",
        groupDataPeriod: "monthly",
        totalIs: "average_of_values",
        trendDirection: "higher_is_better",
        domain: "finance",
        description:
          "Margem de lucro líquida calculada como (Lucro Líquido / Receita Total) * 100",
        calculationFormula: "(net_profit / revenue) * 100",
        ytdMonthOffset: 0,
        isActive: !0,
        createdAt: "2024-01-15",
        updatedAt: "2024-03-15",
      },
      {
        id: "2",
        name: "Sales Conversion Rate",
        unit: "%",
        inputType: "non_cumulative",
        groupDataPeriod: "monthly",
        totalIs: "average_of_values",
        trendDirection: "higher_is_better",
        domain: "commercial",
        description: "Taxa de conversão de vendas do funil comercial",
        calculationFormula: "(converted_leads / total_leads) * 100",
        ytdMonthOffset: 0,
        isActive: !0,
        createdAt: "2024-01-15",
        updatedAt: "2024-03-15",
      },
      {
        id: "3",
        name: "Operational Efficiency",
        unit: "%",
        inputType: "non_cumulative",
        groupDataPeriod: "monthly",
        totalIs: "average_of_values",
        trendDirection: "higher_is_better",
        domain: "operations",
        description: "Eficiência operacional medida pela relação output/input",
        calculationFormula: "(actual_output / planned_input) * 100",
        ytdMonthOffset: 0,
        isActive: !0,
        createdAt: "2024-01-15",
        updatedAt: "2024-03-15",
      },
      {
        id: "4",
        name: "OKR Progress",
        unit: "%",
        inputType: "non_cumulative",
        groupDataPeriod: "monthly",
        totalIs: "average_of_values",
        trendDirection: "higher_is_better",
        domain: "strategy",
        description: "Progresso geral dos objetivos e resultados-chave",
        calculationFormula: "SUM(objective_progress) / COUNT(objectives)",
        ytdMonthOffset: 0,
        isActive: !0,
        createdAt: "2024-01-15",
        updatedAt: "2024-03-15",
      },
      {
        id: "5",
        name: "Legacy Metric",
        unit: "unidades",
        inputType: "cumulative",
        groupDataPeriod: "daily",
        totalIs: "sum_of_values",
        trendDirection: "higher_is_better",
        domain: "operations",
        description: "Métrica legada não utilizada",
        ytdMonthOffset: 0,
        isActive: !1,
        createdAt: "2023-12-01",
        updatedAt: "2024-01-01",
      },
    ],
    x = [
      {
        value: "finance",
        label: "Financeiro",
        icon: ge,
        color: "bg-green-500",
      },
      {
        value: "commercial",
        label: "Comercial",
        icon: pe,
        color: "bg-blue-500",
      },
      {
        value: "operations",
        label: "Operacional",
        icon: fe,
        color: "bg-orange-500",
      },
      {
        value: "strategy",
        label: "Estratégico",
        icon: U,
        color: "bg-purple-500",
      },
    ],
    K = [
      { value: "cumulative", label: "Cumulativo" },
      { value: "non_cumulative", label: "Não Cumulativo" },
    ],
    F = [
      { value: "daily", label: "Diário" },
      { value: "weekly", label: "Semanal" },
      { value: "monthly", label: "Mensal" },
      { value: "quarterly", label: "Trimestral" },
      { value: "half_yearly", label: "Semestral" },
      { value: "yearly", label: "Anual" },
    ],
    G = [
      { value: "sum_of_values", label: "Soma dos Valores" },
      { value: "average_of_values", label: "Média dos Valores" },
      { value: "last_value", label: "Último Valor" },
      { value: "all_time", label: "Todo o Período" },
      { value: "ytd_as_of", label: "YTD até a Data" },
    ],
    I = [
      { value: "higher_is_better", label: "Maior é Melhor" },
      { value: "lower_is_better", label: "Menor é Melhor" },
      { value: "no_trend", label: "Sem Tendência" },
    ],
    O = N.filter((a) => {
      const l = _ === "all" || a.domain === _,
        r = S || a.isActive;
      return l && r;
    }),
    X = (a) => {
      (w(a), i(a), p(!0));
    },
    J = () => {
      (w(null),
        i({
          name: "",
          unit: "",
          inputType: "non_cumulative",
          groupDataPeriod: "monthly",
          totalIs: "last_value",
          trendDirection: "higher_is_better",
          domain: "finance",
          description: "",
          ytdMonthOffset: 0,
          isActive: !0,
        }),
        p(!0));
    },
    Q = () => {
      (console.log("Saving metric:", s), p(!1), w(null), i({}), D());
    },
    W = (a) => {
      (console.log("Deleting metric:", a), D());
    },
    ee = (a, l) => {
      (console.log("Toggling metric:", a, l), D());
    },
    ae = (a) => {
      const l = x.find((r) => r.value === a);
      return (l == null ? void 0 : l.icon) || y;
    },
    se = (a) => {
      const l = x.find((r) => r.value === a);
      return (l == null ? void 0 : l.color) || "bg-gray-500";
    },
    le = (a) => {
      const l = x.find((r) => r.value === a);
      return (l == null ? void 0 : l.label) || a;
    },
    ie = (a) =>
      e.jsx(V, {
        className: a
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800",
        children: a ? "Ativa" : "Inativa",
      });
  return Z
    ? e.jsxs("div", {
        className: "container-fluid space-y-8 py-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsx(b, { className: "h-10 w-64" }),
              e.jsx(b, { className: "h-10 w-32" }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsx(b, { className: "h-6 w-48" }),
              e.jsx("div", {
                className: "space-y-2",
                children: [1, 2, 3, 4, 5].map((a) =>
                  e.jsx(b, { className: "h-16 rounded-lg" }, a),
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
                    className: "p-2 bg-blue-100 rounded-lg",
                    children: e.jsx(R, { className: "w-6 h-6 text-blue-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h1", {
                        className: "text-3xl font-bold text-foreground",
                        children: "Configuração de Métricas",
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Gerencie as métricas do sistema",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsxs(n, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      e.jsx(L, { className: "w-4 h-4 mr-2" }),
                      "Importar",
                    ],
                  }),
                  e.jsxs(n, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      e.jsx(z, { className: "w-4 h-4 mr-2" }),
                      "Exportar",
                    ],
                  }),
                  e.jsxs(n, {
                    onClick: J,
                    children: [
                      e.jsx(ve, { className: "w-4 h-4 mr-2" }),
                      "Nova Métrica",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(c, {
            children: [
              e.jsx(T, {
                children: e.jsxs(M, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(y, { className: "w-5 h-5" }),
                    "Filtros e Configurações",
                  ],
                }),
              }),
              e.jsx(d, {
                children: e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(t, { htmlFor: "domain", children: "Domínio" }),
                        e.jsxs(m, {
                          value: _,
                          onValueChange: B,
                          children: [
                            e.jsx(j, { children: e.jsx(v, {}) }),
                            e.jsxs(g, {
                              children: [
                                e.jsx(o, {
                                  value: "all",
                                  children: "Todos Domínios",
                                }),
                                x.map((a) =>
                                  e.jsx(
                                    o,
                                    { value: a.value, children: a.label },
                                    a.value,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        e.jsx(P, {
                          id: "showInactive",
                          checked: S,
                          onCheckedChange: H,
                        }),
                        e.jsx(t, {
                          htmlFor: "showInactive",
                          children: "Mostrar métricas inativas",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex items-center gap-2",
                      children: e.jsxs(n, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          e.jsx(Ne, { className: "w-4 h-4 mr-2" }),
                          "Atualizar",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-4",
            children: [
              e.jsx(c, {
                children: e.jsx(d, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Total de Métricas",
                          }),
                          e.jsx("p", {
                            className: "text-2xl font-bold",
                            children: N.length,
                          }),
                        ],
                      }),
                      e.jsx(y, { className: "w-8 h-8 text-blue-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(c, {
                children: e.jsx(d, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Ativas",
                          }),
                          e.jsx("p", {
                            className: "text-2xl font-bold",
                            children: N.filter((a) => a.isActive).length,
                          }),
                        ],
                      }),
                      e.jsx(be, { className: "w-8 h-8 text-green-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(c, {
                children: e.jsx(d, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Inativas",
                          }),
                          e.jsx("p", {
                            className: "text-2xl font-bold",
                            children: N.filter((a) => !a.isActive).length,
                          }),
                        ],
                      }),
                      e.jsx(ye, { className: "w-8 h-8 text-red-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(c, {
                children: e.jsx(d, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Domínios",
                          }),
                          e.jsx("p", {
                            className: "text-2xl font-bold",
                            children: x.length,
                          }),
                        ],
                      }),
                      e.jsx(U, { className: "w-8 h-8 text-purple-500" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs(c, {
            children: [
              e.jsx(T, {
                children: e.jsxs(M, {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(R, { className: "w-5 h-5" }),
                        "Métricas Configuradas",
                      ],
                    }),
                    e.jsxs(V, {
                      variant: "outline",
                      children: [O.length, " métricas"],
                    }),
                  ],
                }),
              }),
              e.jsx(d, {
                children: e.jsxs(ne, {
                  children: [
                    e.jsx(re, {
                      children: e.jsxs(E, {
                        children: [
                          e.jsx(h, { children: "Métrica" }),
                          e.jsx(h, { children: "Domínio" }),
                          e.jsx(h, { children: "Unidade" }),
                          e.jsx(h, { children: "Período" }),
                          e.jsx(h, { children: "Tendência" }),
                          e.jsx(h, { children: "Status" }),
                          e.jsx(h, { children: "Ações" }),
                        ],
                      }),
                    }),
                    e.jsx(ce, {
                      children: O.map((a) => {
                        var l, r;
                        return e.jsxs(
                          E,
                          {
                            children: [
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className: "font-medium",
                                      children: a.name,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground line-clamp-1",
                                      children: a.description,
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("div", {
                                      className: `w-6 h-6 ${se(a.domain)} rounded flex items-center justify-center`,
                                      children: xe.createElement(ae(a.domain), {
                                        className: "w-3 h-3 text-white",
                                      }),
                                    }),
                                    e.jsx("span", { children: le(a.domain) }),
                                  ],
                                }),
                              }),
                              e.jsx(u, { children: a.unit }),
                              e.jsx(u, {
                                children:
                                  (l = F.find(
                                    (C) => C.value === a.groupDataPeriod,
                                  )) == null
                                    ? void 0
                                    : l.label,
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    a.trendDirection === "higher_is_better"
                                      ? e.jsx(q, {
                                          className: "w-4 h-4 text-green-500",
                                        })
                                      : a.trendDirection === "lower_is_better"
                                        ? e.jsx(q, {
                                            className:
                                              "w-4 h-4 text-red-500 transform rotate-180",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-4 h-4 bg-gray-300 rounded-full",
                                          }),
                                    e.jsx("span", {
                                      className: "text-sm",
                                      children:
                                        (r = I.find(
                                          (C) => C.value === a.trendDirection,
                                        )) == null
                                          ? void 0
                                          : r.label,
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    ie(a.isActive),
                                    e.jsx(n, {
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => ee(a.id, !a.isActive),
                                      children: a.isActive
                                        ? e.jsx(_e, { className: "w-4 h-4" })
                                        : e.jsx(we, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(n, {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => X(a),
                                      children: e.jsx(De, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                    e.jsx(n, {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => W(a.id),
                                      className:
                                        "text-red-600 hover:text-red-700",
                                      children: e.jsx(Ce, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          a.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(de, {
            open: $,
            onOpenChange: p,
            children: e.jsxs(oe, {
              className: "max-w-2xl max-h-[90vh] overflow-y-auto",
              children: [
                e.jsx(he, {
                  children: e.jsx(ue, {
                    children: Y ? "Editar Métrica" : "Nova Métrica",
                  }),
                }),
                e.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "name",
                              children: "Nome da Métrica",
                            }),
                            e.jsx(A, {
                              id: "name",
                              value: s.name || "",
                              onChange: (a) =>
                                i({ ...s, name: a.target.value }),
                              placeholder: "Ex: Net Profit Margin",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, { htmlFor: "unit", children: "Unidade" }),
                            e.jsx(A, {
                              id: "unit",
                              value: s.unit || "",
                              onChange: (a) =>
                                i({ ...s, unit: a.target.value }),
                              placeholder: "Ex: %, R$, unidades",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "domain",
                              children: "Domínio",
                            }),
                            e.jsxs(m, {
                              value: s.domain,
                              onValueChange: (a) => i({ ...s, domain: a }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(g, {
                                  children: x.map((a) =>
                                    e.jsx(
                                      o,
                                      { value: a.value, children: a.label },
                                      a.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "inputType",
                              children: "Tipo de Input",
                            }),
                            e.jsxs(m, {
                              value: s.inputType,
                              onValueChange: (a) => i({ ...s, inputType: a }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(g, {
                                  children: K.map((a) =>
                                    e.jsx(
                                      o,
                                      { value: a.value, children: a.label },
                                      a.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "groupDataPeriod",
                              children: "Período de Agrupamento",
                            }),
                            e.jsxs(m, {
                              value: s.groupDataPeriod,
                              onValueChange: (a) =>
                                i({ ...s, groupDataPeriod: a }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(g, {
                                  children: F.map((a) =>
                                    e.jsx(
                                      o,
                                      { value: a.value, children: a.label },
                                      a.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "totalIs",
                              children: "Cálculo do Total",
                            }),
                            e.jsxs(m, {
                              value: s.totalIs,
                              onValueChange: (a) => i({ ...s, totalIs: a }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(g, {
                                  children: G.map((a) =>
                                    e.jsx(
                                      o,
                                      { value: a.value, children: a.label },
                                      a.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "trendDirection",
                              children: "Direção da Tendência",
                            }),
                            e.jsxs(m, {
                              value: s.trendDirection,
                              onValueChange: (a) =>
                                i({ ...s, trendDirection: a }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(g, {
                                  children: I.map((a) =>
                                    e.jsx(
                                      o,
                                      { value: a.value, children: a.label },
                                      a.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, {
                              htmlFor: "ytdMonthOffset",
                              children: "Offset YTD (meses)",
                            }),
                            e.jsx(A, {
                              id: "ytdMonthOffset",
                              type: "number",
                              value: s.ytdMonthOffset || 0,
                              onChange: (a) =>
                                i({
                                  ...s,
                                  ytdMonthOffset: parseInt(a.target.value) || 0,
                                }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            e.jsx(P, {
                              id: "isActive",
                              checked: s.isActive || !1,
                              onCheckedChange: (a) => i({ ...s, isActive: a }),
                            }),
                            e.jsx(t, {
                              htmlFor: "isActive",
                              children: "Métrica Ativa",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(t, {
                          htmlFor: "description",
                          children: "Descrição",
                        }),
                        e.jsx(k, {
                          id: "description",
                          value: s.description || "",
                          onChange: (a) =>
                            i({ ...s, description: a.target.value }),
                          placeholder: "Descreva o que esta métrica mede...",
                          rows: 3,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(t, {
                          htmlFor: "calculationFormula",
                          children: "Fórmula de Cálculo (opcional)",
                        }),
                        e.jsx(k, {
                          id: "calculationFormula",
                          value: s.calculationFormula || "",
                          onChange: (a) =>
                            i({ ...s, calculationFormula: a.target.value }),
                          placeholder: "Ex: (net_profit / revenue) * 100",
                          rows: 2,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex justify-end gap-3",
                  children: [
                    e.jsx(n, {
                      variant: "outline",
                      onClick: () => p(!1),
                      children: "Cancelar",
                    }),
                    e.jsxs(n, {
                      onClick: Q,
                      children: [
                        e.jsx(Te, { className: "w-4 h-4 mr-2" }),
                        "Salvar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(c, {
            children: [
              e.jsx(T, { children: e.jsx(M, { children: "Ações Rápidas" }) }),
              e.jsx(d, {
                children: e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    e.jsxs(n, {
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        e.jsx(z, { className: "w-4 h-4 mr-2" }),
                        "Exportar Configuração",
                      ],
                    }),
                    e.jsxs(n, {
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        e.jsx(L, { className: "w-4 h-4 mr-2" }),
                        "Importar Configuração",
                      ],
                    }),
                    e.jsx(n, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: !0,
                      children: e.jsxs(me, {
                        to: "/app/metrics",
                        children: [
                          e.jsx(y, { className: "w-4 h-4 mr-2" }),
                          "Ver Painel de Indicadores",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
};
export { ke as default };
