import { j as e, d as x, u as oe, B as d } from "./index-D2W-YaK1.js";
import { r as o, b as de } from "./vendor-BgR6OOld.js";
import { C as j, b as S, c as F, a as v } from "./card-38iTbfya.js";
import { B as E } from "./badge-BXC9IUk2.js";
import { I } from "./input-OAk-x-jG.js";
import { L as c } from "./label-w4A73I9A.js";
import { T as V } from "./textarea-DJH9aP1O.js";
import { S as g, a as b, b as N, c as y, d as p } from "./select-Al8v4OJE.js";
import { S as z } from "./switch-DaeZU3kl.js";
import { D as me, a as he, b as ue, c as xe } from "./dialog-2CJOLX7I.js";
import { S as D } from "./skeleton-nXEMt3o5.js";
import { u as je } from "./useMetricsLibrary-Cnjqlj2z.js";
import { L as ve } from "./router-D2JcpG7e.js";
import {
  b as L,
  U,
  D as B,
  p as pe,
  e as C,
  a1 as fe,
  m as ge,
  X as be,
  a as q,
  c as H,
  aq as Ne,
  E as ye,
  V as we,
  z as _e,
  ar as De,
  h as Ce,
  g as Te,
  Z as Me,
} from "./utils-D0yiqoi7.js";
import "./index-Cda9Zv0V.js";
import "./index-KHQ64V1j.js";
import "./index-C-A8M8e4.js";
import "./index-DtP__M0M.js";
import "./useQuery-S4soYkLy.js";
const Y = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("div", {
    className: "relative w-full overflow-auto",
    children: e.jsx("table", {
      ref: t,
      className: x("w-full caption-bottom text-sm", l),
      ...r,
    }),
  }),
);
Y.displayName = "Table";
const Z = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("thead", { ref: t, className: x("[&_tr]:border-b", l), ...r }),
);
Z.displayName = "TableHeader";
const $ = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("tbody", {
    ref: t,
    className: x("[&_tr:last-child]:border-0", l),
    ...r,
  }),
);
$.displayName = "TableBody";
const Ae = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("tfoot", {
    ref: t,
    className: x("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", l),
    ...r,
  }),
);
Ae.displayName = "TableFooter";
const O = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("tr", {
    ref: t,
    className: x(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      l,
    ),
    ...r,
  }),
);
O.displayName = "TableRow";
const h = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("th", {
    ref: t,
    className: x(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      l,
    ),
    ...r,
  }),
);
h.displayName = "TableHead";
const u = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("td", {
    ref: t,
    className: x("p-4 align-middle [&:has([role=checkbox])]:pr-0", l),
    ...r,
  }),
);
u.displayName = "TableCell";
const Se = o.forwardRef(({ className: l, ...r }, t) =>
  e.jsx("caption", {
    ref: t,
    className: x("mt-4 text-sm text-muted-foreground", l),
    ...r,
  }),
);
Se.displayName = "TableCaption";
const Je = () => {
  oe();
  const [l, r] = o.useState("all"),
    [t, G] = o.useState(!1),
    [K, T] = o.useState(null),
    [X, w] = o.useState(!1),
    [s, n] = o.useState({}),
    { metrics: Fe, isLoading: J, refetch: M } = je(),
    _ = [
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
    f = [
      {
        value: "finance",
        label: "Financeiro",
        icon: Ce,
        color: "bg-green-500",
      },
      {
        value: "commercial",
        label: "Comercial",
        icon: Te,
        color: "bg-blue-500",
      },
      {
        value: "operations",
        label: "Operacional",
        icon: Me,
        color: "bg-orange-500",
      },
      {
        value: "strategy",
        label: "Estratégico",
        icon: q,
        color: "bg-purple-500",
      },
    ],
    Q = [
      { value: "cumulative", label: "Cumulativo" },
      { value: "non_cumulative", label: "Não Cumulativo" },
    ],
    P = [
      { value: "daily", label: "Diário" },
      { value: "weekly", label: "Semanal" },
      { value: "monthly", label: "Mensal" },
      { value: "quarterly", label: "Trimestral" },
      { value: "half_yearly", label: "Semestral" },
      { value: "yearly", label: "Anual" },
    ],
    W = [
      { value: "sum_of_values", label: "Soma dos Valores" },
      { value: "average_of_values", label: "Média dos Valores" },
      { value: "last_value", label: "Último Valor" },
      { value: "all_time", label: "Todo o Período" },
      { value: "ytd_as_of", label: "YTD até a Data" },
    ],
    R = [
      { value: "higher_is_better", label: "Maior é Melhor" },
      { value: "lower_is_better", label: "Menor é Melhor" },
      { value: "no_trend", label: "Sem Tendência" },
    ],
    k = _.filter((a) => {
      const i = l === "all" || a.domain === l,
        m = t || a.isActive;
      return i && m;
    }),
    ee = (a) => {
      (T(a), n(a), w(!0));
    },
    ae = () => {
      (T(null),
        n({
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
        w(!0));
    },
    se = () => {
      (console.log("Saving metric:", s), w(!1), T(null), n({}), M());
    },
    le = (a) => {
      (console.log("Deleting metric:", a), M());
    },
    te = (a, i) => {
      (console.log("Toggling metric:", a, i), M());
    },
    ie = (a) => {
      const i = f.find((m) => m.value === a);
      return (i == null ? void 0 : i.icon) || C;
    },
    re = (a) => {
      const i = f.find((m) => m.value === a);
      return (i == null ? void 0 : i.color) || "bg-gray-500";
    },
    ne = (a) => {
      const i = f.find((m) => m.value === a);
      return (i == null ? void 0 : i.label) || a;
    },
    ce = (a) =>
      e.jsx(E, {
        className: a
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800",
        children: a ? "Ativa" : "Inativa",
      });
  return J
    ? e.jsxs("div", {
        className: "container-fluid space-y-8 py-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsx(D, { className: "h-10 w-64" }),
              e.jsx(D, { className: "h-10 w-32" }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsx(D, { className: "h-6 w-48" }),
              e.jsx("div", {
                className: "space-y-2",
                children: [1, 2, 3, 4, 5].map((a) =>
                  e.jsx(D, { className: "h-16 rounded-lg" }, a),
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
                    children: e.jsx(L, { className: "w-6 h-6 text-blue-600" }),
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
                  e.jsxs(d, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      e.jsx(U, { className: "w-4 h-4 mr-2" }),
                      "Importar",
                    ],
                  }),
                  e.jsxs(d, {
                    variant: "outline",
                    size: "sm",
                    children: [
                      e.jsx(B, { className: "w-4 h-4 mr-2" }),
                      "Exportar",
                    ],
                  }),
                  e.jsxs(d, {
                    onClick: ae,
                    children: [
                      e.jsx(pe, { className: "w-4 h-4 mr-2" }),
                      "Nova Métrica",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(j, {
            children: [
              e.jsx(S, {
                children: e.jsxs(F, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(C, { className: "w-5 h-5" }),
                    "Filtros e Configurações",
                  ],
                }),
              }),
              e.jsx(v, {
                children: e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(c, { htmlFor: "domain", children: "Domínio" }),
                        e.jsxs(g, {
                          value: l,
                          onValueChange: r,
                          children: [
                            e.jsx(b, { children: e.jsx(N, {}) }),
                            e.jsxs(y, {
                              children: [
                                e.jsx(p, {
                                  value: "all",
                                  children: "Todos Domínios",
                                }),
                                f.map((a) =>
                                  e.jsx(
                                    p,
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
                        e.jsx(z, {
                          id: "showInactive",
                          checked: t,
                          onCheckedChange: G,
                        }),
                        e.jsx(c, {
                          htmlFor: "showInactive",
                          children: "Mostrar métricas inativas",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex items-center gap-2",
                      children: e.jsxs(d, {
                        variant: "outline",
                        size: "sm",
                        children: [
                          e.jsx(fe, { className: "w-4 h-4 mr-2" }),
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
              e.jsx(j, {
                children: e.jsx(v, {
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
                            children: _.length,
                          }),
                        ],
                      }),
                      e.jsx(C, { className: "w-8 h-8 text-blue-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(j, {
                children: e.jsx(v, {
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
                            children: _.filter((a) => a.isActive).length,
                          }),
                        ],
                      }),
                      e.jsx(ge, { className: "w-8 h-8 text-green-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(j, {
                children: e.jsx(v, {
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
                            children: _.filter((a) => !a.isActive).length,
                          }),
                        ],
                      }),
                      e.jsx(be, { className: "w-8 h-8 text-red-500" }),
                    ],
                  }),
                }),
              }),
              e.jsx(j, {
                children: e.jsx(v, {
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
                            children: f.length,
                          }),
                        ],
                      }),
                      e.jsx(q, { className: "w-8 h-8 text-purple-500" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsxs(j, {
            children: [
              e.jsx(S, {
                children: e.jsxs(F, {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(L, { className: "w-5 h-5" }),
                        "Métricas Configuradas",
                      ],
                    }),
                    e.jsxs(E, {
                      variant: "outline",
                      children: [k.length, " métricas"],
                    }),
                  ],
                }),
              }),
              e.jsx(v, {
                children: e.jsxs(Y, {
                  children: [
                    e.jsx(Z, {
                      children: e.jsxs(O, {
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
                    e.jsx($, {
                      children: k.map((a) => {
                        var i, m;
                        return e.jsxs(
                          O,
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
                                      className: `w-6 h-6 ${re(a.domain)} rounded flex items-center justify-center`,
                                      children: de.createElement(ie(a.domain), {
                                        className: "w-3 h-3 text-white",
                                      }),
                                    }),
                                    e.jsx("span", { children: ne(a.domain) }),
                                  ],
                                }),
                              }),
                              e.jsx(u, { children: a.unit }),
                              e.jsx(u, {
                                children:
                                  (i = P.find(
                                    (A) => A.value === a.groupDataPeriod,
                                  )) == null
                                    ? void 0
                                    : i.label,
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    a.trendDirection === "higher_is_better"
                                      ? e.jsx(H, {
                                          className: "w-4 h-4 text-green-500",
                                        })
                                      : a.trendDirection === "lower_is_better"
                                        ? e.jsx(H, {
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
                                        (m = R.find(
                                          (A) => A.value === a.trendDirection,
                                        )) == null
                                          ? void 0
                                          : m.label,
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    ce(a.isActive),
                                    e.jsx(d, {
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => te(a.id, !a.isActive),
                                      children: a.isActive
                                        ? e.jsx(Ne, { className: "w-4 h-4" })
                                        : e.jsx(ye, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(u, {
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(d, {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => ee(a),
                                      children: e.jsx(we, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                    e.jsx(d, {
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => le(a.id),
                                      className:
                                        "text-red-600 hover:text-red-700",
                                      children: e.jsx(_e, {
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
          e.jsx(me, {
            open: X,
            onOpenChange: w,
            children: e.jsxs(he, {
              className: "max-w-2xl max-h-[90vh] overflow-y-auto",
              children: [
                e.jsx(ue, {
                  children: e.jsx(xe, {
                    children: K ? "Editar Métrica" : "Nova Métrica",
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
                            e.jsx(c, {
                              htmlFor: "name",
                              children: "Nome da Métrica",
                            }),
                            e.jsx(I, {
                              id: "name",
                              value: s.name || "",
                              onChange: (a) =>
                                n({ ...s, name: a.target.value }),
                              placeholder: "Ex: Net Profit Margin",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(c, { htmlFor: "unit", children: "Unidade" }),
                            e.jsx(I, {
                              id: "unit",
                              value: s.unit || "",
                              onChange: (a) =>
                                n({ ...s, unit: a.target.value }),
                              placeholder: "Ex: %, R$, unidades",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(c, {
                              htmlFor: "domain",
                              children: "Domínio",
                            }),
                            e.jsxs(g, {
                              value: s.domain,
                              onValueChange: (a) => n({ ...s, domain: a }),
                              children: [
                                e.jsx(b, { children: e.jsx(N, {}) }),
                                e.jsx(y, {
                                  children: f.map((a) =>
                                    e.jsx(
                                      p,
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
                            e.jsx(c, {
                              htmlFor: "inputType",
                              children: "Tipo de Input",
                            }),
                            e.jsxs(g, {
                              value: s.inputType,
                              onValueChange: (a) => n({ ...s, inputType: a }),
                              children: [
                                e.jsx(b, { children: e.jsx(N, {}) }),
                                e.jsx(y, {
                                  children: Q.map((a) =>
                                    e.jsx(
                                      p,
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
                            e.jsx(c, {
                              htmlFor: "groupDataPeriod",
                              children: "Período de Agrupamento",
                            }),
                            e.jsxs(g, {
                              value: s.groupDataPeriod,
                              onValueChange: (a) =>
                                n({ ...s, groupDataPeriod: a }),
                              children: [
                                e.jsx(b, { children: e.jsx(N, {}) }),
                                e.jsx(y, {
                                  children: P.map((a) =>
                                    e.jsx(
                                      p,
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
                            e.jsx(c, {
                              htmlFor: "totalIs",
                              children: "Cálculo do Total",
                            }),
                            e.jsxs(g, {
                              value: s.totalIs,
                              onValueChange: (a) => n({ ...s, totalIs: a }),
                              children: [
                                e.jsx(b, { children: e.jsx(N, {}) }),
                                e.jsx(y, {
                                  children: W.map((a) =>
                                    e.jsx(
                                      p,
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
                            e.jsx(c, {
                              htmlFor: "trendDirection",
                              children: "Direção da Tendência",
                            }),
                            e.jsxs(g, {
                              value: s.trendDirection,
                              onValueChange: (a) =>
                                n({ ...s, trendDirection: a }),
                              children: [
                                e.jsx(b, { children: e.jsx(N, {}) }),
                                e.jsx(y, {
                                  children: R.map((a) =>
                                    e.jsx(
                                      p,
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
                            e.jsx(c, {
                              htmlFor: "ytdMonthOffset",
                              children: "Offset YTD (meses)",
                            }),
                            e.jsx(I, {
                              id: "ytdMonthOffset",
                              type: "number",
                              value: s.ytdMonthOffset || 0,
                              onChange: (a) =>
                                n({
                                  ...s,
                                  ytdMonthOffset: parseInt(a.target.value) || 0,
                                }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            e.jsx(z, {
                              id: "isActive",
                              checked: s.isActive || !1,
                              onCheckedChange: (a) => n({ ...s, isActive: a }),
                            }),
                            e.jsx(c, {
                              htmlFor: "isActive",
                              children: "Métrica Ativa",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(c, {
                          htmlFor: "description",
                          children: "Descrição",
                        }),
                        e.jsx(V, {
                          id: "description",
                          value: s.description || "",
                          onChange: (a) =>
                            n({ ...s, description: a.target.value }),
                          placeholder: "Descreva o que esta métrica mede...",
                          rows: 3,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(c, {
                          htmlFor: "calculationFormula",
                          children: "Fórmula de Cálculo (opcional)",
                        }),
                        e.jsx(V, {
                          id: "calculationFormula",
                          value: s.calculationFormula || "",
                          onChange: (a) =>
                            n({ ...s, calculationFormula: a.target.value }),
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
                    e.jsx(d, {
                      variant: "outline",
                      onClick: () => w(!1),
                      children: "Cancelar",
                    }),
                    e.jsxs(d, {
                      onClick: se,
                      children: [
                        e.jsx(De, { className: "w-4 h-4 mr-2" }),
                        "Salvar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(j, {
            children: [
              e.jsx(S, { children: e.jsx(F, { children: "Ações Rápidas" }) }),
              e.jsx(v, {
                children: e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    e.jsxs(d, {
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        e.jsx(B, { className: "w-4 h-4 mr-2" }),
                        "Exportar Configuração",
                      ],
                    }),
                    e.jsxs(d, {
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        e.jsx(U, { className: "w-4 h-4 mr-2" }),
                        "Importar Configuração",
                      ],
                    }),
                    e.jsx(d, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: !0,
                      children: e.jsxs(ve, {
                        to: "/app/metrics",
                        children: [
                          e.jsx(C, { className: "w-4 h-4 mr-2" }),
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
export { Je as default };
