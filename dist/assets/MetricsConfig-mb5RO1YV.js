import { j as a, d as f, u as da, B as l } from "./index-BZzvAVnT.js";
import { r as d, b as la } from "./vendor-BgR6OOld.js";
import { C as x, b as y, c as _, a as C } from "./card-DCmFy9yX.js";
import { B as E } from "./badge-DMGJasfj.js";
import { I } from "./input-BnDZujQi.js";
import { L as i } from "./label-DNWlrZfM.js";
import { T as P } from "./textarea-BnFcy4sU.js";
import { S as h, a as u, b as D, c as B, d as v } from "./select-BPvc3et1.js";
import { S as R } from "./switch-Dz0YrQNx.js";
import { D as ma, a as ra, b as ga, c as fa } from "./dialog-CVqcLEoi.js";
import { S as A } from "./skeleton-CjN6GZmr.js";
import { u as xa } from "./useMetricsLibrary-B2_jC9cv.js";
import { L as Ca } from "./router-D2JcpG7e.js";
import {
  c as V,
  U as O,
  D as U,
  p as va,
  f as N,
  a1 as Ma,
  C as ha,
  X as ua,
  b as z,
  d as q,
  aq as Da,
  E as Ba,
  V as ja,
  z as ba,
  ar as Aa,
  i as Na,
  h as Ta,
  Z as wa,
} from "./utils-C25gojUd.js";
import "./index-Cda9Zv0V.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-lGW99eWD.js";
import "./useQuery-fq0IAKu-.js";
const X = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("div", {
    "data-lov-id": "src\\components\\ui\\table.tsx:9:2",
    "data-lov-name": "div",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "9",
    "data-component-file": "table.tsx",
    "data-component-name": "div",
    "data-component-content":
      "%7B%22className%22%3A%22relative%20w-full%20overflow-auto%22%7D",
    className: "relative w-full overflow-auto",
    children: a.jsx("table", {
      "data-lov-id": "src\\components\\ui\\table.tsx:10:4",
      "data-lov-name": "table",
      "data-component-path": "src\\components\\ui\\table.tsx",
      "data-component-line": "10",
      "data-component-file": "table.tsx",
      "data-component-name": "table",
      "data-component-content": "%7B%7D",
      ref: o,
      className: f("w-full caption-bottom text-sm", n),
      ...c,
    }),
  }),
);
X.displayName = "Table";
const Y = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("thead", {
    "data-lov-id": "src\\components\\ui\\table.tsx:23:2",
    "data-lov-name": "thead",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "23",
    "data-component-file": "table.tsx",
    "data-component-name": "thead",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f("[&_tr]:border-b", n),
    ...c,
  }),
);
Y.displayName = "TableHeader";
const G = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("tbody", {
    "data-lov-id": "src\\components\\ui\\table.tsx:31:2",
    "data-lov-name": "tbody",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "31",
    "data-component-file": "table.tsx",
    "data-component-name": "tbody",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f("[&_tr:last-child]:border-0", n),
    ...c,
  }),
);
G.displayName = "TableBody";
const Sa = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("tfoot", {
    "data-lov-id": "src\\components\\ui\\table.tsx:43:2",
    "data-lov-name": "tfoot",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "43",
    "data-component-file": "table.tsx",
    "data-component-name": "tfoot",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", n),
    ...c,
  }),
);
Sa.displayName = "TableFooter";
const L = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("tr", {
    "data-lov-id": "src\\components\\ui\\table.tsx:58:2",
    "data-lov-name": "tr",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "58",
    "data-component-file": "table.tsx",
    "data-component-name": "tr",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      n,
    ),
    ...c,
  }),
);
L.displayName = "TableRow";
const r = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("th", {
    "data-lov-id": "src\\components\\ui\\table.tsx:73:2",
    "data-lov-name": "th",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "73",
    "data-component-file": "table.tsx",
    "data-component-name": "th",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      n,
    ),
    ...c,
  }),
);
r.displayName = "TableHead";
const g = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("td", {
    "data-lov-id": "src\\components\\ui\\table.tsx:88:2",
    "data-lov-name": "td",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "88",
    "data-component-file": "table.tsx",
    "data-component-name": "td",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f("p-4 align-middle [&:has([role=checkbox])]:pr-0", n),
    ...c,
  }),
);
g.displayName = "TableCell";
const ya = d.forwardRef(({ className: n, ...c }, o) =>
  a.jsx("caption", {
    "data-lov-id": "src\\components\\ui\\table.tsx:100:2",
    "data-lov-name": "caption",
    "data-component-path": "src\\components\\ui\\table.tsx",
    "data-component-line": "100",
    "data-component-file": "table.tsx",
    "data-component-name": "caption",
    "data-component-content": "%7B%7D",
    ref: o,
    className: f("mt-4 text-sm text-muted-foreground", n),
    ...c,
  }),
);
ya.displayName = "TableCaption";
const Ja = () => {
  da();
  const [n, c] = d.useState("all"),
    [o, Z] = d.useState(!1),
    [$, T] = d.useState(null),
    [K, j] = d.useState(!1),
    [e, p] = d.useState({}),
    { metrics: _a, isLoading: J, refetch: w } = xa(),
    b = [
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
    M = [
      {
        value: "finance",
        label: "Financeiro",
        icon: Na,
        color: "bg-green-500",
      },
      {
        value: "commercial",
        label: "Comercial",
        icon: Ta,
        color: "bg-blue-500",
      },
      {
        value: "operations",
        label: "Operacional",
        icon: wa,
        color: "bg-orange-500",
      },
      {
        value: "strategy",
        label: "Estratégico",
        icon: z,
        color: "bg-purple-500",
      },
    ],
    Q = [
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
    W = [
      { value: "sum_of_values", label: "Soma dos Valores" },
      { value: "average_of_values", label: "Média dos Valores" },
      { value: "last_value", label: "Último Valor" },
      { value: "all_time", label: "Todo o Período" },
      { value: "ytd_as_of", label: "YTD até a Data" },
    ],
    H = [
      { value: "higher_is_better", label: "Maior é Melhor" },
      { value: "lower_is_better", label: "Menor é Melhor" },
      { value: "no_trend", label: "Sem Tendência" },
    ],
    k = b.filter((t) => {
      const s = n === "all" || t.domain === n,
        m = o || t.isActive;
      return s && m;
    }),
    aa = (t) => {
      (T(t), p(t), j(!0));
    },
    ta = () => {
      (T(null),
        p({
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
        j(!0));
    },
    ea = () => {
      (console.log("Saving metric:", e), j(!1), T(null), p({}), w());
    },
    na = (t) => {
      (console.log("Deleting metric:", t), w());
    },
    oa = (t, s) => {
      (console.log("Toggling metric:", t, s), w());
    },
    sa = (t) => {
      const s = M.find((m) => m.value === t);
      return (s == null ? void 0 : s.icon) || N;
    },
    ca = (t) => {
      const s = M.find((m) => m.value === t);
      return (s == null ? void 0 : s.color) || "bg-gray-500";
    },
    pa = (t) => {
      const s = M.find((m) => m.value === t);
      return (s == null ? void 0 : s.label) || t;
    },
    ia = (t) =>
      a.jsx(E, {
        "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:251:4",
        "data-lov-name": "Badge",
        "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
        "data-component-line": "251",
        "data-component-file": "MetricsConfig.tsx",
        "data-component-name": "Badge",
        "data-component-content": "%7B%7D",
        className: t
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800",
        children: t ? "Ativa" : "Inativa",
      });
  return J
    ? a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:258:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
        "data-component-line": "258",
        "data-component-file": "MetricsConfig.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
        className: "container-fluid space-y-8 py-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:259:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "259",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
            className: "flex items-center justify-between",
            children: [
              a.jsx(A, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:260:10",
                "data-lov-name": "Skeleton",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "260",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Skeleton",
                "data-component-content":
                  "%7B%22className%22%3A%22h-10%20w-64%22%7D",
                className: "h-10 w-64",
              }),
              a.jsx(A, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:261:10",
                "data-lov-name": "Skeleton",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "261",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Skeleton",
                "data-component-content":
                  "%7B%22className%22%3A%22h-10%20w-32%22%7D",
                className: "h-10 w-32",
              }),
            ],
          }),
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:264:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "264",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
            className: "space-y-4",
            children: [
              a.jsx(A, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:265:10",
                "data-lov-name": "Skeleton",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "265",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Skeleton",
                "data-component-content":
                  "%7B%22className%22%3A%22h-6%20w-48%22%7D",
                className: "h-6 w-48",
              }),
              a.jsx("div", {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:266:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "266",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-2%22%7D",
                className: "space-y-2",
                children: [1, 2, 3, 4, 5].map((t) =>
                  a.jsx(
                    A,
                    {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:268:14",
                      "data-lov-name": "Skeleton",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "268",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Skeleton",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-16%20rounded-lg%22%7D",
                      className: "h-16 rounded-lg",
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    : a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:277:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
        "data-component-line": "277",
        "data-component-file": "MetricsConfig.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
        className: "container-fluid space-y-8 py-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:279:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "279",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D",
            className:
              "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:280:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "280",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:281:10",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "281",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-2%20bg-blue-100%20rounded-lg%22%7D",
                    className: "p-2 bg-blue-100 rounded-lg",
                    children: a.jsx(V, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:282:12",
                      "data-lov-name": "Settings",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "282",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Settings",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-6%20h-6%20text-blue-600%22%7D",
                      className: "w-6 h-6 text-blue-600",
                    }),
                  }),
                  a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:284:10",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "284",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx("h1", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:285:12",
                        "data-lov-name": "h1",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "285",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "h1",
                        "data-component-content":
                          "%7B%22text%22%3A%22Configura%C3%A7%C3%A3o%20de%20M%C3%A9tricas%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
                        className: "text-3xl font-bold text-foreground",
                        children: "Configuração de Métricas",
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:286:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "286",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22text%22%3A%22Gerencie%20as%20m%C3%A9tricas%20do%20sistema%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                        className: "text-muted-foreground",
                        children: "Gerencie as métricas do sistema",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:290:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "290",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                className: "flex gap-3",
                children: [
                  a.jsxs(l, {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:291:10",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "291",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Importar%22%7D",
                    variant: "outline",
                    size: "sm",
                    children: [
                      a.jsx(O, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:292:12",
                        "data-lov-name": "Upload",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "292",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Upload",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      "Importar",
                    ],
                  }),
                  a.jsxs(l, {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:296:10",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "296",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Exportar%22%7D",
                    variant: "outline",
                    size: "sm",
                    children: [
                      a.jsx(U, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:297:12",
                        "data-lov-name": "Download",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "297",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Download",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      "Exportar",
                    ],
                  }),
                  a.jsxs(l, {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:301:10",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "301",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Nova%20M%C3%A9trica%22%7D",
                    onClick: ta,
                    children: [
                      a.jsx(va, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:302:12",
                        "data-lov-name": "Plus",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "302",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Plus",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      "Nova Métrica",
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsxs(x, {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:309:6",
            "data-lov-name": "Card",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "309",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: [
              a.jsx(y, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:310:8",
                "data-lov-name": "CardHeader",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "310",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "CardHeader",
                "data-component-content": "%7B%7D",
                children: a.jsxs(_, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:311:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "311",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22text%22%3A%22Filtros%20e%20Configura%C3%A7%C3%B5es%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  className: "flex items-center gap-2",
                  children: [
                    a.jsx(N, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:312:12",
                      "data-lov-name": "BarChart3",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "312",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "BarChart3",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                      className: "w-5 h-5",
                    }),
                    "Filtros e Configurações",
                  ],
                }),
              }),
              a.jsx(C, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:316:8",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "316",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "CardContent",
                "data-component-content": "%7B%7D",
                children: a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:317:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "317",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%22%7D",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:318:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "318",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(i, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:319:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "319",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Label",
                          "data-component-content":
                            "%7B%22text%22%3A%22Dom%C3%ADnio%22%7D",
                          htmlFor: "domain",
                          children: "Domínio",
                        }),
                        a.jsxs(h, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:320:14",
                          "data-lov-name": "Select",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "320",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Select",
                          "data-component-content": "%7B%7D",
                          value: n,
                          onValueChange: c,
                          children: [
                            a.jsx(u, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:321:16",
                              "data-lov-name": "SelectTrigger",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "321",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "SelectTrigger",
                              "data-component-content": "%7B%7D",
                              children: a.jsx(D, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:322:18",
                                "data-lov-name": "SelectValue",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "322",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "SelectValue",
                                "data-component-content": "%7B%7D",
                              }),
                            }),
                            a.jsxs(B, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:324:16",
                              "data-lov-name": "SelectContent",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "324",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "SelectContent",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx(v, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:325:18",
                                  "data-lov-name": "SelectItem",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "325",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectItem",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Todos%20Dom%C3%ADnios%22%7D",
                                  value: "all",
                                  children: "Todos Domínios",
                                }),
                                M.map((t) =>
                                  a.jsx(
                                    v,
                                    {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:327:20",
                                      "data-lov-name": "SelectItem",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "327",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "SelectItem",
                                      "data-component-content": "%7B%7D",
                                      value: t.value,
                                      children: t.label,
                                    },
                                    t.value,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:335:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "335",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                      className: "flex items-center space-x-2",
                      children: [
                        a.jsx(R, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:336:14",
                          "data-lov-name": "Switch",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "336",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Switch",
                          "data-component-content": "%7B%7D",
                          id: "showInactive",
                          checked: o,
                          onCheckedChange: Z,
                        }),
                        a.jsx(i, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:341:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "341",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Label",
                          "data-component-content":
                            "%7B%22text%22%3A%22Mostrar%20m%C3%A9tricas%20inativas%22%7D",
                          htmlFor: "showInactive",
                          children: "Mostrar métricas inativas",
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:344:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "344",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                      className: "flex items-center gap-2",
                      children: a.jsxs(l, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:345:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "345",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Button",
                        "data-component-content":
                          "%7B%22text%22%3A%22Atualizar%22%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(Ma, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:346:16",
                            "data-lov-name": "RefreshCw",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "346",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "RefreshCw",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          "Atualizar",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:355:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "355",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-4%20gap-4%22%7D",
            className: "grid grid-cols-1 md:grid-cols-4 gap-4",
            children: [
              a.jsx(x, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:356:8",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "356",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%7D",
                children: a.jsx(C, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:357:10",
                  "data-lov-name": "CardContent",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "357",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
                  className: "p-4",
                  children: a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:358:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "358",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:359:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "359",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:360:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "360",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22text%22%3A%22Total%20de%20M%C3%A9tricas%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                            className: "text-sm text-muted-foreground",
                            children: "Total de Métricas",
                          }),
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:361:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "361",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                            className: "text-2xl font-bold",
                            children: b.length,
                          }),
                        ],
                      }),
                      a.jsx(N, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:363:14",
                        "data-lov-name": "BarChart3",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "363",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "BarChart3",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-blue-500%22%7D",
                        className: "w-8 h-8 text-blue-500",
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx(x, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:368:8",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "368",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%7D",
                children: a.jsx(C, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:369:10",
                  "data-lov-name": "CardContent",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "369",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
                  className: "p-4",
                  children: a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:370:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "370",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:371:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "371",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:372:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "372",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22text%22%3A%22Ativas%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                            className: "text-sm text-muted-foreground",
                            children: "Ativas",
                          }),
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:373:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "373",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                            className: "text-2xl font-bold",
                            children: b.filter((t) => t.isActive).length,
                          }),
                        ],
                      }),
                      a.jsx(ha, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:375:14",
                        "data-lov-name": "Check",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "375",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Check",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-green-500%22%7D",
                        className: "w-8 h-8 text-green-500",
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx(x, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:380:8",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "380",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%7D",
                children: a.jsx(C, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:381:10",
                  "data-lov-name": "CardContent",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "381",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
                  className: "p-4",
                  children: a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:382:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "382",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:383:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "383",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:384:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "384",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22text%22%3A%22Inativas%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                            className: "text-sm text-muted-foreground",
                            children: "Inativas",
                          }),
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:385:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "385",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                            className: "text-2xl font-bold",
                            children: b.filter((t) => !t.isActive).length,
                          }),
                        ],
                      }),
                      a.jsx(ua, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:387:14",
                        "data-lov-name": "X",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "387",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "X",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-red-500%22%7D",
                        className: "w-8 h-8 text-red-500",
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx(x, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:392:8",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "392",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%7D",
                children: a.jsx(C, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:393:10",
                  "data-lov-name": "CardContent",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "393",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
                  className: "p-4",
                  children: a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:394:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "394",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:395:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "395",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:396:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "396",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22text%22%3A%22Dom%C3%ADnios%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                            className: "text-sm text-muted-foreground",
                            children: "Domínios",
                          }),
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:397:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "397",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                            className: "text-2xl font-bold",
                            children: M.length,
                          }),
                        ],
                      }),
                      a.jsx(z, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:399:14",
                        "data-lov-name": "Target",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "399",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Target",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-8%20h-8%20text-purple-500%22%7D",
                        className: "w-8 h-8 text-purple-500",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          a.jsxs(x, {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:406:6",
            "data-lov-name": "Card",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "406",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: [
              a.jsx(y, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:407:8",
                "data-lov-name": "CardHeader",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "407",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "CardHeader",
                "data-component-content": "%7B%7D",
                children: a.jsxs(_, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:408:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "408",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                  className: "flex items-center justify-between",
                  children: [
                    a.jsxs("span", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:409:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "409",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22text%22%3A%22M%C3%A9tricas%20Configuradas%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                      className: "flex items-center gap-2",
                      children: [
                        a.jsx(V, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:410:14",
                          "data-lov-name": "Settings",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "410",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Settings",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                          className: "w-5 h-5",
                        }),
                        "Métricas Configuradas",
                      ],
                    }),
                    a.jsxs(E, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:413:12",
                      "data-lov-name": "Badge",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "413",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Badge",
                      "data-component-content":
                        "%7B%22text%22%3A%22m%C3%A9tricas%22%7D",
                      variant: "outline",
                      children: [k.length, " métricas"],
                    }),
                  ],
                }),
              }),
              a.jsx(C, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:418:8",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "418",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "CardContent",
                "data-component-content": "%7B%7D",
                children: a.jsxs(X, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:419:10",
                  "data-lov-name": "Table",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "419",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "Table",
                  "data-component-content": "%7B%7D",
                  children: [
                    a.jsx(Y, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:420:12",
                      "data-lov-name": "TableHeader",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "420",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "TableHeader",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs(L, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:421:14",
                        "data-lov-name": "TableRow",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "421",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "TableRow",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:422:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "422",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22M%C3%A9trica%22%7D",
                            children: "Métrica",
                          }),
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:423:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "423",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22Dom%C3%ADnio%22%7D",
                            children: "Domínio",
                          }),
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:424:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "424",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22Unidade%22%7D",
                            children: "Unidade",
                          }),
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:425:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "425",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22Per%C3%ADodo%22%7D",
                            children: "Período",
                          }),
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:426:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "426",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22Tend%C3%AAncia%22%7D",
                            children: "Tendência",
                          }),
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:427:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "427",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22Status%22%7D",
                            children: "Status",
                          }),
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:428:16",
                            "data-lov-name": "TableHead",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "428",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableHead",
                            "data-component-content":
                              "%7B%22text%22%3A%22A%C3%A7%C3%B5es%22%7D",
                            children: "Ações",
                          }),
                        ],
                      }),
                    }),
                    a.jsx(G, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:431:12",
                      "data-lov-name": "TableBody",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "431",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "TableBody",
                      "data-component-content": "%7B%7D",
                      children: k.map((t) => {
                        var s, m;
                        return a.jsxs(
                          L,
                          {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:433:16",
                            "data-lov-name": "TableRow",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "433",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "TableRow",
                            "data-component-content": "%7B%7D",
                            children: [
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:434:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "434",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children: a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:435:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "435",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:436:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "436",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-medium%22%7D",
                                      className: "font-medium",
                                      children: t.name,
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:437:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "437",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20line-clamp-1%22%7D",
                                      className:
                                        "text-sm text-muted-foreground line-clamp-1",
                                      children: t.description,
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:442:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "442",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children: a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:443:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "443",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                  className: "flex items-center gap-2",
                                  children: [
                                    a.jsx("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:444:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "444",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "div",
                                      "data-component-content": "%7B%7D",
                                      className: `w-6 h-6 ${ca(t.domain)} rounded flex items-center justify-center`,
                                      children: la.createElement(sa(t.domain), {
                                        className: "w-3 h-3 text-white",
                                      }),
                                    }),
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:447:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "447",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "span",
                                      "data-component-content": "%7B%7D",
                                      children: pa(t.domain),
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:450:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "450",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children: t.unit,
                              }),
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:451:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "451",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children:
                                  (s = F.find(
                                    (S) => S.value === t.groupDataPeriod,
                                  )) == null
                                    ? void 0
                                    : s.label,
                              }),
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:454:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "454",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children: a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:455:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "455",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-1%22%7D",
                                  className: "flex items-center gap-1",
                                  children: [
                                    t.trendDirection === "higher_is_better"
                                      ? a.jsx(q, {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsConfig.tsx:457:24",
                                          "data-lov-name": "TrendingUp",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsConfig.tsx",
                                          "data-component-line": "457",
                                          "data-component-file":
                                            "MetricsConfig.tsx",
                                          "data-component-name": "TrendingUp",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-4%20h-4%20text-green-500%22%7D",
                                          className: "w-4 h-4 text-green-500",
                                        })
                                      : t.trendDirection === "lower_is_better"
                                        ? a.jsx(q, {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsConfig.tsx:459:24",
                                            "data-lov-name": "TrendingUp",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsConfig.tsx",
                                            "data-component-line": "459",
                                            "data-component-file":
                                              "MetricsConfig.tsx",
                                            "data-component-name": "TrendingUp",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-4%20h-4%20text-red-500%20transform%20rotate-180%22%7D",
                                            className:
                                              "w-4 h-4 text-red-500 transform rotate-180",
                                          })
                                        : a.jsx("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsConfig.tsx:461:24",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsConfig.tsx",
                                            "data-component-line": "461",
                                            "data-component-file":
                                              "MetricsConfig.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-4%20h-4%20bg-gray-300%20rounded-full%22%7D",
                                            className:
                                              "w-4 h-4 bg-gray-300 rounded-full",
                                          }),
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:463:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "463",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%22%7D",
                                      className: "text-sm",
                                      children:
                                        (m = H.find(
                                          (S) => S.value === t.trendDirection,
                                        )) == null
                                          ? void 0
                                          : m.label,
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:468:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "468",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children: a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:469:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "469",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                  className: "flex items-center gap-2",
                                  children: [
                                    ia(t.isActive),
                                    a.jsx(l, {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:471:22",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "471",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content": "%7B%7D",
                                      variant: "ghost",
                                      size: "sm",
                                      onClick: () => oa(t.id, !t.isActive),
                                      children: t.isActive
                                        ? a.jsx(Da, {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsConfig.tsx:476:43",
                                            "data-lov-name": "EyeOff",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsConfig.tsx",
                                            "data-component-line": "476",
                                            "data-component-file":
                                              "MetricsConfig.tsx",
                                            "data-component-name": "EyeOff",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                            className: "w-4 h-4",
                                          })
                                        : a.jsx(Ba, {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsConfig.tsx:476:76",
                                            "data-lov-name": "Eye",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsConfig.tsx",
                                            "data-component-line": "476",
                                            "data-component-file":
                                              "MetricsConfig.tsx",
                                            "data-component-name": "Eye",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                            className: "w-4 h-4",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsConfig.tsx:480:18",
                                "data-lov-name": "TableCell",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsConfig.tsx",
                                "data-component-line": "480",
                                "data-component-file": "MetricsConfig.tsx",
                                "data-component-name": "TableCell",
                                "data-component-content": "%7B%7D",
                                children: a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:481:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "481",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                  className: "flex items-center gap-2",
                                  children: [
                                    a.jsx(l, {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:482:22",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "482",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content": "%7B%7D",
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => aa(t),
                                      children: a.jsx(ja, {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:487:24",
                                        "data-lov-name": "Edit",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "487",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "Edit",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                    a.jsx(l, {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsConfig.tsx:490:22",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsConfig.tsx",
                                      "data-component-line": "490",
                                      "data-component-file":
                                        "MetricsConfig.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-red-600%20hover%3Atext-red-700%22%7D",
                                      variant: "outline",
                                      size: "sm",
                                      onClick: () => na(t.id),
                                      className:
                                        "text-red-600 hover:text-red-700",
                                      children: a.jsx(ba, {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:496:24",
                                        "data-lov-name": "Trash2",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "496",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "Trash2",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          t.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          a.jsx(ma, {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:508:6",
            "data-lov-name": "Dialog",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "508",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "Dialog",
            "data-component-content": "%7B%7D",
            open: K,
            onOpenChange: j,
            children: a.jsxs(ra, {
              "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:509:8",
              "data-lov-name": "DialogContent",
              "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
              "data-component-line": "509",
              "data-component-file": "MetricsConfig.tsx",
              "data-component-name": "DialogContent",
              "data-component-content":
                "%7B%22className%22%3A%22max-w-2xl%20max-h-%5B90vh%5D%20overflow-y-auto%22%7D",
              className: "max-w-2xl max-h-[90vh] overflow-y-auto",
              children: [
                a.jsx(ga, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:510:10",
                  "data-lov-name": "DialogHeader",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "510",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "DialogHeader",
                  "data-component-content": "%7B%7D",
                  children: a.jsx(fa, {
                    "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:511:12",
                    "data-lov-name": "DialogTitle",
                    "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                    "data-component-line": "511",
                    "data-component-file": "MetricsConfig.tsx",
                    "data-component-name": "DialogTitle",
                    "data-component-content": "%7B%7D",
                    children: $ ? "Editar Métrica" : "Nova Métrica",
                  }),
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:516:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "516",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  className: "space-y-6",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:517:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "517",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-4%22%7D",
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:518:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "518",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:519:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "519",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Nome%20da%20M%C3%A9trica%22%7D",
                              htmlFor: "name",
                              children: "Nome da Métrica",
                            }),
                            a.jsx(I, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:520:16",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "520",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Input",
                              "data-component-content":
                                "%7B%22placeholder%22%3A%22Ex%3A%20Net%20Profit%20Margin%22%7D",
                              id: "name",
                              value: e.name || "",
                              onChange: (t) =>
                                p({ ...e, name: t.target.value }),
                              placeholder: "Ex: Net Profit Margin",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:528:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "528",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:529:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "529",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Unidade%22%7D",
                              htmlFor: "unit",
                              children: "Unidade",
                            }),
                            a.jsx(I, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:530:16",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "530",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Input",
                              "data-component-content":
                                "%7B%22placeholder%22%3A%22Ex%3A%20%25%2C%20R%24%2C%20unidades%22%7D",
                              id: "unit",
                              value: e.unit || "",
                              onChange: (t) =>
                                p({ ...e, unit: t.target.value }),
                              placeholder: "Ex: %, R$, unidades",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:538:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "538",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:539:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "539",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Dom%C3%ADnio%22%7D",
                              htmlFor: "domain",
                              children: "Domínio",
                            }),
                            a.jsxs(h, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:540:16",
                              "data-lov-name": "Select",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "540",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Select",
                              "data-component-content": "%7B%7D",
                              value: e.domain,
                              onValueChange: (t) => p({ ...e, domain: t }),
                              children: [
                                a.jsx(u, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:541:18",
                                  "data-lov-name": "SelectTrigger",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "541",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectTrigger",
                                  "data-component-content": "%7B%7D",
                                  children: a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsConfig.tsx:542:20",
                                    "data-lov-name": "SelectValue",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsConfig.tsx",
                                    "data-component-line": "542",
                                    "data-component-file": "MetricsConfig.tsx",
                                    "data-component-name": "SelectValue",
                                    "data-component-content": "%7B%7D",
                                  }),
                                }),
                                a.jsx(B, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:544:18",
                                  "data-lov-name": "SelectContent",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "544",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectContent",
                                  "data-component-content": "%7B%7D",
                                  children: M.map((t) =>
                                    a.jsx(
                                      v,
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:546:22",
                                        "data-lov-name": "SelectItem",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "546",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "SelectItem",
                                        "data-component-content": "%7B%7D",
                                        value: t.value,
                                        children: t.label,
                                      },
                                      t.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:554:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "554",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:555:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "555",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Tipo%20de%20Input%22%7D",
                              htmlFor: "inputType",
                              children: "Tipo de Input",
                            }),
                            a.jsxs(h, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:556:16",
                              "data-lov-name": "Select",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "556",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Select",
                              "data-component-content": "%7B%7D",
                              value: e.inputType,
                              onValueChange: (t) => p({ ...e, inputType: t }),
                              children: [
                                a.jsx(u, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:557:18",
                                  "data-lov-name": "SelectTrigger",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "557",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectTrigger",
                                  "data-component-content": "%7B%7D",
                                  children: a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsConfig.tsx:558:20",
                                    "data-lov-name": "SelectValue",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsConfig.tsx",
                                    "data-component-line": "558",
                                    "data-component-file": "MetricsConfig.tsx",
                                    "data-component-name": "SelectValue",
                                    "data-component-content": "%7B%7D",
                                  }),
                                }),
                                a.jsx(B, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:560:18",
                                  "data-lov-name": "SelectContent",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "560",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectContent",
                                  "data-component-content": "%7B%7D",
                                  children: Q.map((t) =>
                                    a.jsx(
                                      v,
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:562:22",
                                        "data-lov-name": "SelectItem",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "562",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "SelectItem",
                                        "data-component-content": "%7B%7D",
                                        value: t.value,
                                        children: t.label,
                                      },
                                      t.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:570:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "570",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:571:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "571",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Per%C3%ADodo%20de%20Agrupamento%22%7D",
                              htmlFor: "groupDataPeriod",
                              children: "Período de Agrupamento",
                            }),
                            a.jsxs(h, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:572:16",
                              "data-lov-name": "Select",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "572",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Select",
                              "data-component-content": "%7B%7D",
                              value: e.groupDataPeriod,
                              onValueChange: (t) =>
                                p({ ...e, groupDataPeriod: t }),
                              children: [
                                a.jsx(u, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:573:18",
                                  "data-lov-name": "SelectTrigger",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "573",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectTrigger",
                                  "data-component-content": "%7B%7D",
                                  children: a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsConfig.tsx:574:20",
                                    "data-lov-name": "SelectValue",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsConfig.tsx",
                                    "data-component-line": "574",
                                    "data-component-file": "MetricsConfig.tsx",
                                    "data-component-name": "SelectValue",
                                    "data-component-content": "%7B%7D",
                                  }),
                                }),
                                a.jsx(B, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:576:18",
                                  "data-lov-name": "SelectContent",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "576",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectContent",
                                  "data-component-content": "%7B%7D",
                                  children: F.map((t) =>
                                    a.jsx(
                                      v,
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:578:22",
                                        "data-lov-name": "SelectItem",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "578",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "SelectItem",
                                        "data-component-content": "%7B%7D",
                                        value: t.value,
                                        children: t.label,
                                      },
                                      t.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:586:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "586",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:587:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "587",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22C%C3%A1lculo%20do%20Total%22%7D",
                              htmlFor: "totalIs",
                              children: "Cálculo do Total",
                            }),
                            a.jsxs(h, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:588:16",
                              "data-lov-name": "Select",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "588",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Select",
                              "data-component-content": "%7B%7D",
                              value: e.totalIs,
                              onValueChange: (t) => p({ ...e, totalIs: t }),
                              children: [
                                a.jsx(u, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:589:18",
                                  "data-lov-name": "SelectTrigger",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "589",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectTrigger",
                                  "data-component-content": "%7B%7D",
                                  children: a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsConfig.tsx:590:20",
                                    "data-lov-name": "SelectValue",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsConfig.tsx",
                                    "data-component-line": "590",
                                    "data-component-file": "MetricsConfig.tsx",
                                    "data-component-name": "SelectValue",
                                    "data-component-content": "%7B%7D",
                                  }),
                                }),
                                a.jsx(B, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:592:18",
                                  "data-lov-name": "SelectContent",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "592",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectContent",
                                  "data-component-content": "%7B%7D",
                                  children: W.map((t) =>
                                    a.jsx(
                                      v,
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:594:22",
                                        "data-lov-name": "SelectItem",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "594",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "SelectItem",
                                        "data-component-content": "%7B%7D",
                                        value: t.value,
                                        children: t.label,
                                      },
                                      t.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:602:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "602",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:603:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "603",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Dire%C3%A7%C3%A3o%20da%20Tend%C3%AAncia%22%7D",
                              htmlFor: "trendDirection",
                              children: "Direção da Tendência",
                            }),
                            a.jsxs(h, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:604:16",
                              "data-lov-name": "Select",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "604",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Select",
                              "data-component-content": "%7B%7D",
                              value: e.trendDirection,
                              onValueChange: (t) =>
                                p({ ...e, trendDirection: t }),
                              children: [
                                a.jsx(u, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:605:18",
                                  "data-lov-name": "SelectTrigger",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "605",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectTrigger",
                                  "data-component-content": "%7B%7D",
                                  children: a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsConfig.tsx:606:20",
                                    "data-lov-name": "SelectValue",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsConfig.tsx",
                                    "data-component-line": "606",
                                    "data-component-file": "MetricsConfig.tsx",
                                    "data-component-name": "SelectValue",
                                    "data-component-content": "%7B%7D",
                                  }),
                                }),
                                a.jsx(B, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsConfig.tsx:608:18",
                                  "data-lov-name": "SelectContent",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsConfig.tsx",
                                  "data-component-line": "608",
                                  "data-component-file": "MetricsConfig.tsx",
                                  "data-component-name": "SelectContent",
                                  "data-component-content": "%7B%7D",
                                  children: H.map((t) =>
                                    a.jsx(
                                      v,
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsConfig.tsx:610:22",
                                        "data-lov-name": "SelectItem",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsConfig.tsx",
                                        "data-component-line": "610",
                                        "data-component-file":
                                          "MetricsConfig.tsx",
                                        "data-component-name": "SelectItem",
                                        "data-component-content": "%7B%7D",
                                        value: t.value,
                                        children: t.label,
                                      },
                                      t.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:618:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "618",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:619:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "619",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22Offset%20YTD%20(meses)%22%7D",
                              htmlFor: "ytdMonthOffset",
                              children: "Offset YTD (meses)",
                            }),
                            a.jsx(I, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:620:16",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "620",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Input",
                              "data-component-content": "%7B%7D",
                              id: "ytdMonthOffset",
                              type: "number",
                              value: e.ytdMonthOffset || 0,
                              onChange: (t) =>
                                p({
                                  ...e,
                                  ytdMonthOffset: parseInt(t.target.value) || 0,
                                }),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:628:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "628",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                          className: "flex items-center space-x-2",
                          children: [
                            a.jsx(R, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:629:16",
                              "data-lov-name": "Switch",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "629",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Switch",
                              "data-component-content": "%7B%7D",
                              id: "isActive",
                              checked: e.isActive || !1,
                              onCheckedChange: (t) => p({ ...e, isActive: t }),
                            }),
                            a.jsx(i, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsConfig.tsx:634:16",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\MetricsConfig.tsx",
                              "data-component-line": "634",
                              "data-component-file": "MetricsConfig.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22text%22%3A%22M%C3%A9trica%20Ativa%22%7D",
                              htmlFor: "isActive",
                              children: "Métrica Ativa",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:638:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "638",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(i, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:639:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "639",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Label",
                          "data-component-content":
                            "%7B%22text%22%3A%22Descri%C3%A7%C3%A3o%22%7D",
                          htmlFor: "description",
                          children: "Descrição",
                        }),
                        a.jsx(P, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:640:14",
                          "data-lov-name": "Textarea",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "640",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Textarea",
                          "data-component-content":
                            "%7B%22placeholder%22%3A%22Descreva%20o%20que%20esta%20m%C3%A9trica%20mede...%22%7D",
                          id: "description",
                          value: e.description || "",
                          onChange: (t) =>
                            p({ ...e, description: t.target.value }),
                          placeholder: "Descreva o que esta métrica mede...",
                          rows: 3,
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:649:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "649",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(i, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:650:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "650",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Label",
                          "data-component-content":
                            "%7B%22text%22%3A%22F%C3%B3rmula%20de%20C%C3%A1lculo%20(opcional)%22%7D",
                          htmlFor: "calculationFormula",
                          children: "Fórmula de Cálculo (opcional)",
                        }),
                        a.jsx(P, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:651:14",
                          "data-lov-name": "Textarea",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "651",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Textarea",
                          "data-component-content":
                            "%7B%22placeholder%22%3A%22Ex%3A%20(net_profit%20%2F%20revenue)%20*%20100%22%7D",
                          id: "calculationFormula",
                          value: e.calculationFormula || "",
                          onChange: (t) =>
                            p({ ...e, calculationFormula: t.target.value }),
                          placeholder: "Ex: (net_profit / revenue) * 100",
                          rows: 2,
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:661:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "661",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20justify-end%20gap-3%22%7D",
                  className: "flex justify-end gap-3",
                  children: [
                    a.jsx(l, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:662:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "662",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Cancelar%22%7D",
                      variant: "outline",
                      onClick: () => j(!1),
                      children: "Cancelar",
                    }),
                    a.jsxs(l, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:665:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "665",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Salvar%22%7D",
                      onClick: ea,
                      children: [
                        a.jsx(Aa, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:666:14",
                          "data-lov-name": "Save",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "666",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Save",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        "Salvar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          a.jsxs(x, {
            "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:674:6",
            "data-lov-name": "Card",
            "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
            "data-component-line": "674",
            "data-component-file": "MetricsConfig.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: [
              a.jsx(y, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:675:8",
                "data-lov-name": "CardHeader",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "675",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "CardHeader",
                "data-component-content": "%7B%7D",
                children: a.jsx(_, {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:676:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "676",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22text%22%3A%22A%C3%A7%C3%B5es%20R%C3%A1pidas%22%7D",
                  children: "Ações Rápidas",
                }),
              }),
              a.jsx(C, {
                "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:678:8",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                "data-component-line": "678",
                "data-component-file": "MetricsConfig.tsx",
                "data-component-name": "CardContent",
                "data-component-content": "%7B%7D",
                children: a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\MetricsConfig.tsx:679:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\MetricsConfig.tsx",
                  "data-component-line": "679",
                  "data-component-file": "MetricsConfig.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%22%7D",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [
                    a.jsxs(l, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:680:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "680",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Exportar%20Configura%C3%A7%C3%A3o%22%2C%22className%22%3A%22w-full%20justify-start%22%7D",
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        a.jsx(U, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:681:14",
                          "data-lov-name": "Download",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "681",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Download",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        "Exportar Configuração",
                      ],
                    }),
                    a.jsxs(l, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:685:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "685",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Importar%20Configura%C3%A7%C3%A3o%22%2C%22className%22%3A%22w-full%20justify-start%22%7D",
                      variant: "outline",
                      className: "w-full justify-start",
                      children: [
                        a.jsx(O, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsConfig.tsx:686:14",
                          "data-lov-name": "Upload",
                          "data-component-path":
                            "src\\pages\\app\\MetricsConfig.tsx",
                          "data-component-line": "686",
                          "data-component-file": "MetricsConfig.tsx",
                          "data-component-name": "Upload",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        "Importar Configuração",
                      ],
                    }),
                    a.jsx(l, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsConfig.tsx:690:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsConfig.tsx",
                      "data-component-line": "690",
                      "data-component-file": "MetricsConfig.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: !0,
                      children: a.jsxs(Ca, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsConfig.tsx:691:14",
                        "data-lov-name": "Link",
                        "data-component-path":
                          "src\\pages\\app\\MetricsConfig.tsx",
                        "data-component-line": "691",
                        "data-component-file": "MetricsConfig.tsx",
                        "data-component-name": "Link",
                        "data-component-content":
                          "%7B%22text%22%3A%22Ver%20Painel%20de%20Indicadores%22%7D",
                        to: "/app/metrics",
                        children: [
                          a.jsx(N, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsConfig.tsx:692:16",
                            "data-lov-name": "BarChart3",
                            "data-component-path":
                              "src\\pages\\app\\MetricsConfig.tsx",
                            "data-component-line": "692",
                            "data-component-file": "MetricsConfig.tsx",
                            "data-component-name": "BarChart3",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
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
export { Ja as default };
