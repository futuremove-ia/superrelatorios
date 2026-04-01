import { u as te, j as e, B as r } from "./index-DSuxXiPq.js";
import { r as f, R as re, L as ne } from "./router-C2uYhr1z.js";
import { C as c, b as T, c as M, a as o } from "./card-kC7SKLKo.js";
import { B as P } from "./badge-ByuXo0CA.js";
import { I as A } from "./input-DM6SScwh.js";
import { L as t } from "./label-DpTyVOKi.js";
import { T as E } from "./textarea-DYJ6kh0L.js";
import { S as x, a as j, b as v, c as p, d } from "./select-DeKeYH2O.js";
import { S as k } from "./switch-BwOUyC3a.js";
import { D as ce, a as oe, b as de, c as he } from "./dialog-Bx927nLR.js";
import {
  T as ue,
  a as me,
  b as V,
  c as h,
  d as xe,
  e as u,
} from "./table-sMYe7xSH.js";
import { S as b } from "./skeleton-D3z_1nGD.js";
import { u as je } from "./useMetricsLibrary-CMlYoIqs.js";
import {
  c as R,
  U as z,
  D as L,
  n as ve,
  f as y,
  i as pe,
  h as ge,
  Z as fe,
  b as U,
  a1 as Ne,
  C as be,
  X as ye,
  d as B,
  au as _e,
  E as we,
  V as De,
  z as Ce,
  av as Te,
} from "./utils-CrQ_Kxni.js";
import "./index-frX45eRk.js";
import "./index-CwntilPw.js";
import "./index-D8wekeCT.js";
import "./index-DVOzYOy3.js";
import "./useQuery-cjyHvNTQ.js";
const Ke = () => {
  const { t: Me } = te(),
    [_, q] = f.useState("all"),
    [S, H] = f.useState(!1),
    [Y, w] = f.useState(null),
    [Z, g] = f.useState(!1),
    [a, i] = f.useState({}),
    { metrics: Ae, isLoading: $, refetch: D } = je(),
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
    m = [
      {
        value: "finance",
        label: "Financeiro",
        icon: pe,
        color: "bg-green-500",
      },
      {
        value: "commercial",
        label: "Comercial",
        icon: ge,
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
    G = [
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
    K = [
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
    O = N.filter((s) => {
      const l = _ === "all" || s.domain === _,
        n = S || s.isActive;
      return l && n;
    }),
    X = (s) => {
      (w(s), i(s), g(!0));
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
        g(!0));
    },
    Q = () => {
      (console.log("Saving metric:", a), g(!1), w(null), i({}), D());
    },
    W = (s) => {
      (console.log("Deleting metric:", s), D());
    },
    ee = (s, l) => {
      (console.log("Toggling metric:", s, l), D());
    },
    se = (s) => {
      const l = m.find((n) => n.value === s);
      return (l == null ? void 0 : l.icon) || y;
    },
    ae = (s) => {
      const l = m.find((n) => n.value === s);
      return (l == null ? void 0 : l.color) || "bg-gray-500";
    },
    le = (s) => {
      const l = m.find((n) => n.value === s);
      return (l == null ? void 0 : l.label) || s;
    },
    ie = (s) =>
      e.jsx(P, {
        className: s
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800",
        children: s ? "Ativa" : "Inativa",
      });
  return $
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
                children: [1, 2, 3, 4, 5].map((s) =>
                  e.jsx(b, { className: "h-16 rounded-lg" }, s),
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
                  e.jsxs(r, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      e.jsx(z, { className: "w-4 h-4 mr-2" }),
                      "Importar",
                    ],
                  }),
                  e.jsxs(r, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      e.jsx(L, { className: "w-4 h-4 mr-2" }),
                      "Exportar",
                    ],
                  }),
                  e.jsxs(r, {
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
              e.jsx(o, {
                children: e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(t, { htmlFor: "domain", children: "Domínio" }),
                        e.jsxs(x, {
                          value: _,
                          onValueChange: q,
                          children: [
                            e.jsx(j, { children: e.jsx(v, {}) }),
                            e.jsxs(p, {
                              children: [
                                e.jsx(d, {
                                  value: "all",
                                  children: "Todos Domínios",
                                }),
                                m.map((s) =>
                                  e.jsx(
                                    d,
                                    { value: s.value, children: s.label },
                                    s.value,
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
                        e.jsx(k, {
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
                      children: e.jsxs(r, {
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
                children: e.jsx(o, {
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
                children: e.jsx(o, {
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
                            children: N.filter((s) => s.isActive).length,
                          }),
                        ],
                      }),
                      e.jsx(be, { className: "w-8 h-8 text-green-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(c, {
                children: e.jsx(o, {
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
                            children: N.filter((s) => !s.isActive).length,
                          }),
                        ],
                      }),
                      e.jsx(ye, { className: "w-8 h-8 text-red-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(c, {
                children: e.jsx(o, {
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
                            children: m.length,
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
                    e.jsxs(P, {
                      variant: "outline",
                      children: [O.length, " métricas"],
                    }),
                  ],
                }),
              }),
              e.jsx(o, {
                children: e.jsxs(ue, {
                  children: [
                    e.jsx(me, {
                      children: e.jsxs(V, {
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
                    e.jsx(xe, {
                      children: O.map((s) => {
                        var l, n;
                        return e.jsxs(
                          V,
                          {
                            children: [
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className: "font-medium",
                                      children: s.name,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground line-clamp-1",
                                      children: s.description,
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("div", {
                                      className: `w-6 h-6 ${ae(s.domain)} rounded flex items-center justify-center`,
                                      children: re.createElement(se(s.domain), {
                                        className: "w-3 h-3 text-white",
                                      }),
                                    }),
                                    e.jsx("span", { children: le(s.domain) }),
                                  ],
                                }),
                              }),
                              e.jsx(u, { children: s.unit }),
                              e.jsx(u, {
                                children:
                                  (l = F.find(
                                    (C) => C.value === s.groupDataPeriod,
                                  )) == null
                                    ? void 0
                                    : l.label,
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    s.trendDirection === "higher_is_better"
                                      ? e.jsx(B, {
                                          className: "w-4 h-4 text-green-500",
                                        })
                                      : s.trendDirection === "lower_is_better"
                                        ? e.jsx(B, {
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
                                        (n = I.find(
                                          (C) => C.value === s.trendDirection,
                                        )) == null
                                          ? void 0
                                          : n.label,
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    ie(s.isActive),
                                    e.jsx(r, {
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => ee(s.id, !s.isActive),
                                      children: s.isActive
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
                                    e.jsx(r, {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => X(s),
                                      children: e.jsx(De, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                    e.jsx(r, {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => W(s.id),
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
                          s.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(ce, {
            open: Z,
            onOpenChange: g,
            children: e.jsxs(oe, {
              className: "max-w-2xl max-h-[90vh] overflow-y-auto",
              children: [
                e.jsx(de, {
                  children: e.jsx(he, {
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
                              value: a.name || "",
                              onChange: (s) =>
                                i({ ...a, name: s.target.value }),
                              placeholder: "Ex: Net Profit Margin",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(t, { htmlFor: "unit", children: "Unidade" }),
                            e.jsx(A, {
                              id: "unit",
                              value: a.unit || "",
                              onChange: (s) =>
                                i({ ...a, unit: s.target.value }),
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
                            e.jsxs(x, {
                              value: a.domain,
                              onValueChange: (s) => i({ ...a, domain: s }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(p, {
                                  children: m.map((s) =>
                                    e.jsx(
                                      d,
                                      { value: s.value, children: s.label },
                                      s.value,
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
                            e.jsxs(x, {
                              value: a.inputType,
                              onValueChange: (s) => i({ ...a, inputType: s }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(p, {
                                  children: G.map((s) =>
                                    e.jsx(
                                      d,
                                      { value: s.value, children: s.label },
                                      s.value,
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
                            e.jsxs(x, {
                              value: a.groupDataPeriod,
                              onValueChange: (s) =>
                                i({ ...a, groupDataPeriod: s }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(p, {
                                  children: F.map((s) =>
                                    e.jsx(
                                      d,
                                      { value: s.value, children: s.label },
                                      s.value,
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
                            e.jsxs(x, {
                              value: a.totalIs,
                              onValueChange: (s) => i({ ...a, totalIs: s }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(p, {
                                  children: K.map((s) =>
                                    e.jsx(
                                      d,
                                      { value: s.value, children: s.label },
                                      s.value,
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
                            e.jsxs(x, {
                              value: a.trendDirection,
                              onValueChange: (s) =>
                                i({ ...a, trendDirection: s }),
                              children: [
                                e.jsx(j, { children: e.jsx(v, {}) }),
                                e.jsx(p, {
                                  children: I.map((s) =>
                                    e.jsx(
                                      d,
                                      { value: s.value, children: s.label },
                                      s.value,
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
                              value: a.ytdMonthOffset || 0,
                              onChange: (s) =>
                                i({
                                  ...a,
                                  ytdMonthOffset: parseInt(s.target.value) || 0,
                                }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            e.jsx(k, {
                              id: "isActive",
                              checked: a.isActive || !1,
                              onCheckedChange: (s) => i({ ...a, isActive: s }),
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
                        e.jsx(E, {
                          id: "description",
                          value: a.description || "",
                          onChange: (s) =>
                            i({ ...a, description: s.target.value }),
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
                        e.jsx(E, {
                          id: "calculationFormula",
                          value: a.calculationFormula || "",
                          onChange: (s) =>
                            i({ ...a, calculationFormula: s.target.value }),
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
                    e.jsx(r, {
                      variant: "outline",
                      onClick: () => g(!1),
                      children: "Cancelar",
                    }),
                    e.jsxs(r, {
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
              e.jsx(o, {
                children: e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    e.jsxs(r, {
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        e.jsx(L, { className: "w-4 h-4 mr-2" }),
                        "Exportar Configuração",
                      ],
                    }),
                    e.jsxs(r, {
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        e.jsx(z, { className: "w-4 h-4 mr-2" }),
                        "Importar Configuração",
                      ],
                    }),
                    e.jsx(r, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: !0,
                      children: e.jsxs(ne, {
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
export { Ke as default };
