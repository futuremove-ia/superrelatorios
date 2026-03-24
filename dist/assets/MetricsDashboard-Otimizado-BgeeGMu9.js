import { j as a, B as d, u as ta } from "./index-BZzvAVnT.js";
import { r as f, b as ea } from "./vendor-BgR6OOld.js";
import { C as D, b as v, c as M, a as g } from "./card-DCmFy9yX.js";
import { B as C } from "./badge-DMGJasfj.js";
import { K as oa } from "./kpi-card-CWRTA62G.js";
import { P as na } from "./progress-Bi2Hl20I.js";
import { S, a as T, b as I, c as P, d as p } from "./select-BPvc3et1.js";
import { I as sa } from "./input-BnDZujQi.js";
import { S as h } from "./skeleton-CjN6GZmr.js";
import { A as da, a as ca } from "./alert-D4BI-VHt.js";
import { u as ia } from "./useMetricsLibrary-B2_jC9cv.js";
import { u as ra, a as ma } from "./useCrossDomainAnalytics-DL7eraVZ.js";
import {
  E as w,
  a0 as pa,
  T as k,
  a as la,
  ah as $,
  $ as ha,
  d as xa,
  f as z,
  s as Da,
  r as va,
  D as Ma,
  a1 as R,
  b as x,
  c as N,
  j as ga,
  p as ba,
  A as L,
  i as V,
  h as E,
  Z as F,
} from "./utils-C25gojUd.js";
import {
  R as B,
  B as fa,
  o as za,
  X as Oa,
  Y as Ca,
  T as j,
  p as ua,
  P as H,
  q as K,
  r as U,
} from "./PieChart-B46FBJBd.js";
import { L as O } from "./router-D2JcpG7e.js";
import "./index-Cda9Zv0V.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./useQuery-fq0IAKu-.js";
const Aa = ({ metric: o, onClick: l, compact: s = !1 }) => {
    const i = () => {
        switch (o.healthStatus) {
          case "good":
            return a.jsx(la, {
              "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:40:15",
              "data-lov-name": "CheckCircle",
              "data-component-path":
                "src\\components\\metrics\\MetricsCard.tsx",
              "data-component-line": "40",
              "data-component-file": "MetricsCard.tsx",
              "data-component-name": "CheckCircle",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-green-500%22%7D",
              className: "w-4 h-4 text-green-500",
            });
          case "warning":
            return a.jsx(k, {
              "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:42:15",
              "data-lov-name": "AlertTriangle",
              "data-component-path":
                "src\\components\\metrics\\MetricsCard.tsx",
              "data-component-line": "42",
              "data-component-file": "MetricsCard.tsx",
              "data-component-name": "AlertTriangle",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-yellow-500%22%7D",
              className: "w-4 h-4 text-yellow-500",
            });
          case "critical":
            return a.jsx(k, {
              "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:44:15",
              "data-lov-name": "AlertTriangle",
              "data-component-path":
                "src\\components\\metrics\\MetricsCard.tsx",
              "data-component-line": "44",
              "data-component-file": "MetricsCard.tsx",
              "data-component-name": "AlertTriangle",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-red-500%22%7D",
              className: "w-4 h-4 text-red-500",
            });
          default:
            return a.jsx(pa, {
              "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:46:15",
              "data-lov-name": "Info",
              "data-component-path":
                "src\\components\\metrics\\MetricsCard.tsx",
              "data-component-line": "46",
              "data-component-file": "MetricsCard.tsx",
              "data-component-name": "Info",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-gray-500%22%7D",
              className: "w-4 h-4 text-gray-500",
            });
        }
      },
      c = () => {
        switch (o.healthStatus) {
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
      r = (e, n) =>
        n === "%"
          ? `${e.toFixed(1)}%`
          : n === "R$" || n === "$"
            ? `${n}${e.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
            : n === "meses" || n === "dias"
              ? `${e.toFixed(1)} ${n}`
              : `${e.toLocaleString("pt-BR")} ${n}`,
      m = s ? "p-4" : "p-6";
    return a.jsxs(D, {
      "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:78:4",
      "data-lov-name": "Card",
      "data-component-path": "src\\components\\metrics\\MetricsCard.tsx",
      "data-component-line": "78",
      "data-component-file": "MetricsCard.tsx",
      "data-component-name": "Card",
      "data-component-content": "%7B%7D",
      className: `cursor-pointer transition-all hover:shadow-md ${c()} ${m}`,
      onClick: l,
      children: [
        a.jsx(v, {
          "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:82:6",
          "data-lov-name": "CardHeader",
          "data-component-path": "src\\components\\metrics\\MetricsCard.tsx",
          "data-component-line": "82",
          "data-component-file": "MetricsCard.tsx",
          "data-component-name": "CardHeader",
          "data-component-content": "%7B%7D",
          className: s ? "pb-2" : "pb-4",
          children: a.jsxs("div", {
            "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:83:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\metrics\\MetricsCard.tsx",
            "data-component-line": "83",
            "data-component-file": "MetricsCard.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
            className: "flex items-center justify-between",
            children: [
              a.jsx(M, {
                "data-lov-id":
                  "src\\components\\metrics\\MetricsCard.tsx:84:10",
                "data-lov-name": "CardTitle",
                "data-component-path":
                  "src\\components\\metrics\\MetricsCard.tsx",
                "data-component-line": "84",
                "data-component-file": "MetricsCard.tsx",
                "data-component-name": "CardTitle",
                "data-component-content": "%7B%7D",
                className: s ? "text-sm" : "text-base font-medium",
                children: o.name,
              }),
              a.jsxs("div", {
                "data-lov-id":
                  "src\\components\\metrics\\MetricsCard.tsx:87:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\metrics\\MetricsCard.tsx",
                "data-component-line": "87",
                "data-component-file": "MetricsCard.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                className: "flex items-center gap-2",
                children: [
                  i(),
                  a.jsx(C, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsCard.tsx:89:12",
                    "data-lov-name": "Badge",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsCard.tsx",
                    "data-component-line": "89",
                    "data-component-file": "MetricsCard.tsx",
                    "data-component-name": "Badge",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xs%22%7D",
                    variant:
                      o.healthStatus === "good" ? "default" : "destructive",
                    className: "text-xs",
                    children: o.healthStatus,
                  }),
                ],
              }),
            ],
          }),
        }),
        a.jsx(g, {
          "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:99:6",
          "data-lov-name": "CardContent",
          "data-component-path": "src\\components\\metrics\\MetricsCard.tsx",
          "data-component-line": "99",
          "data-component-file": "MetricsCard.tsx",
          "data-component-name": "CardContent",
          "data-component-content": "%7B%7D",
          className: "pt-0",
          children: a.jsxs("div", {
            "data-lov-id": "src\\components\\metrics\\MetricsCard.tsx:100:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\metrics\\MetricsCard.tsx",
            "data-component-line": "100",
            "data-component-file": "MetricsCard.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
            className: "space-y-3",
            children: [
              a.jsxs("div", {
                "data-lov-id":
                  "src\\components\\metrics\\MetricsCard.tsx:102:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\metrics\\MetricsCard.tsx",
                "data-component-line": "102",
                "data-component-file": "MetricsCard.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-baseline%20justify-between%22%7D",
                className: "flex items-baseline justify-between",
                children: [
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsCard.tsx:103:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsCard.tsx",
                    "data-component-line": "103",
                    "data-component-file": "MetricsCard.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    className: `font-bold ${s ? "text-xl" : "text-3xl"}`,
                    children: r(o.value, o.unit),
                  }),
                  a.jsx(y, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsCard.tsx:106:12",
                    "data-lov-name": "TrendIndicator",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsCard.tsx",
                    "data-component-line": "106",
                    "data-component-file": "MetricsCard.tsx",
                    "data-component-name": "TrendIndicator",
                    "data-component-content": "%7B%7D",
                    trend: o.trend,
                    value: o.trendPercentage,
                    compact: s,
                  }),
                ],
              }),
              !s &&
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\components\\metrics\\MetricsCard.tsx:115:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\components\\metrics\\MetricsCard.tsx",
                  "data-component-line": "115",
                  "data-component-file": "MetricsCard.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%20text-sm%20text-gray-600%22%7D",
                  className:
                    "flex items-center justify-between text-sm text-gray-600",
                  children: [
                    a.jsxs("span", {
                      "data-lov-id":
                        "src\\components\\metrics\\MetricsCard.tsx:116:14",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\components\\metrics\\MetricsCard.tsx",
                      "data-component-line": "116",
                      "data-component-file": "MetricsCard.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22text%22%3A%22Per%C3%ADodo%3A%22%7D",
                      children: [
                        "Período: ",
                        new Date(o.period).toLocaleDateString("pt-BR"),
                      ],
                    }),
                    a.jsxs(d, {
                      "data-lov-id":
                        "src\\components\\metrics\\MetricsCard.tsx:117:14",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\components\\metrics\\MetricsCard.tsx",
                      "data-component-line": "117",
                      "data-component-file": "MetricsCard.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Detalhes%22%7D",
                      variant: "ghost",
                      size: "sm",
                      children: [
                        a.jsx(w, {
                          "data-lov-id":
                            "src\\components\\metrics\\MetricsCard.tsx:118:16",
                          "data-lov-name": "Eye",
                          "data-component-path":
                            "src\\components\\metrics\\MetricsCard.tsx",
                          "data-component-line": "118",
                          "data-component-file": "MetricsCard.tsx",
                          "data-component-name": "Eye",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                          className: "w-4 h-4 mr-1",
                        }),
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
  y = ({ trend: o, value: l, compact: s = !1 }) => {
    const i = () => {
        switch (o) {
          case "up":
            return a.jsx(xa, {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:18:15",
              "data-lov-name": "TrendingUp",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "18",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "TrendingUp",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-green-500%22%7D",
              className: "w-4 h-4 text-green-500",
            });
          case "down":
            return a.jsx(ha, {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:20:15",
              "data-lov-name": "TrendingDown",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "20",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "TrendingDown",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-red-500%22%7D",
              className: "w-4 h-4 text-red-500",
            });
          case "stable":
            return a.jsx($, {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:22:15",
              "data-lov-name": "Minus",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "22",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "Minus",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-gray-500%22%7D",
              className: "w-4 h-4 text-gray-500",
            });
          default:
            return a.jsx($, {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:24:15",
              "data-lov-name": "Minus",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "24",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "Minus",
              "data-component-content":
                "%7B%22className%22%3A%22w-4%20h-4%20text-gray-500%22%7D",
              className: "w-4 h-4 text-gray-500",
            });
        }
      },
      c = () => {
        switch (o) {
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
      r = (m) => (m === 0 ? "0%" : `${m > 0 ? "+" : ""}${m.toFixed(1)}%`);
    return s
      ? a.jsxs("div", {
          "data-lov-id": "src\\components\\metrics\\TrendIndicator.tsx:49:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\metrics\\TrendIndicator.tsx",
          "data-component-line": "49",
          "data-component-file": "TrendIndicator.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20items-center%20gap-1%22%7D",
          className: "flex items-center gap-1",
          children: [
            i(),
            a.jsx("span", {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:51:8",
              "data-lov-name": "span",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "51",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "span",
              "data-component-content": "%7B%7D",
              className: `text-xs font-medium ${c()}`,
              children: r(l),
            }),
          ],
        })
      : a.jsxs("div", {
          "data-lov-id": "src\\components\\metrics\\TrendIndicator.tsx:59:4",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\metrics\\TrendIndicator.tsx",
          "data-component-line": "59",
          "data-component-file": "TrendIndicator.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20flex-col%20items-end%22%7D",
          className: "flex flex-col items-end",
          children: [
            a.jsxs("div", {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:60:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "60",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
              className: "flex items-center gap-2",
              children: [
                i(),
                a.jsx("span", {
                  "data-lov-id":
                    "src\\components\\metrics\\TrendIndicator.tsx:62:8",
                  "data-lov-name": "span",
                  "data-component-path":
                    "src\\components\\metrics\\TrendIndicator.tsx",
                  "data-component-line": "62",
                  "data-component-file": "TrendIndicator.tsx",
                  "data-component-name": "span",
                  "data-component-content": "%7B%7D",
                  className: `font-semibold ${c()}`,
                  children: r(l),
                }),
              ],
            }),
            a.jsx("span", {
              "data-lov-id":
                "src\\components\\metrics\\TrendIndicator.tsx:66:6",
              "data-lov-name": "span",
              "data-component-path":
                "src\\components\\metrics\\TrendIndicator.tsx",
              "data-component-line": "66",
              "data-component-file": "TrendIndicator.tsx",
              "data-component-name": "span",
              "data-component-content":
                "%7B%22text%22%3A%22vs.%20per%C3%ADodo%20anterior%22%2C%22className%22%3A%22text-xs%20text-gray-500%22%7D",
              className: "text-xs text-gray-500",
              children: "vs. período anterior",
            }),
          ],
        });
  },
  Na = ({ metrics: o, domain: l, period: s }) => {
    if (!o.length)
      return a.jsx("div", {
        "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:43:6",
        "data-lov-name": "div",
        "data-component-path": "src\\components\\metrics\\MetricsChart.tsx",
        "data-component-line": "43",
        "data-component-file": "MetricsChart.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22text-center%20text-gray-500%20py-8%22%7D",
        className: "text-center text-gray-500 py-8",
        children: a.jsx("p", {
          "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:44:8",
          "data-lov-name": "p",
          "data-component-path": "src\\components\\metrics\\MetricsChart.tsx",
          "data-component-line": "44",
          "data-component-file": "MetricsChart.tsx",
          "data-component-name": "p",
          "data-component-content":
            "%7B%22text%22%3A%22Nenhuma%20m%C3%A9trica%20encontrada%20para%20este%20dom%C3%ADnio.%22%2C%22className%22%3A%22text-sm%22%7D",
          className: "text-sm",
          children: "Nenhuma métrica encontrada para este domínio.",
        }),
      });
    const i = [
        {
          name: "Boas",
          value: o.filter((e) => e.healthStatus === "good").length,
          color: "#10b981",
        },
        {
          name: "Atenção",
          value: o.filter((e) => e.healthStatus === "warning").length,
          color: "#f59e0b",
        },
        {
          name: "Críticas",
          value: o.filter((e) => e.healthStatus === "critical").length,
          color: "#ef4444",
        },
      ],
      c = [
        {
          name: "Altas",
          value: o.filter((e) => e.trend === "up").length,
          color: "#10b981",
        },
        {
          name: "Estáveis",
          value: o.filter((e) => e.trend === "stable").length,
          color: "#6b7280",
        },
        {
          name: "Baixas",
          value: o.filter((e) => e.trend === "down").length,
          color: "#ef4444",
        },
      ],
      r = o.map((e) => ({
        name: e.name.length > 15 ? e.name.substring(0, 15) + "..." : e.name,
        value: e.value,
        healthStatus: e.healthStatus,
        fill: m(e.healthStatus),
      })),
      m = (e) => {
        switch (e) {
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
    return a.jsxs("div", {
      "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:79:4",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\metrics\\MetricsChart.tsx",
      "data-component-line": "79",
      "data-component-file": "MetricsChart.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
      className: "space-y-6",
      children: [
        a.jsxs("div", {
          "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:81:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\metrics\\MetricsChart.tsx",
          "data-component-line": "81",
          "data-component-file": "MetricsChart.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%7D",
          children: [
            a.jsx("h4", {
              "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:82:8",
              "data-lov-name": "h4",
              "data-component-path":
                "src\\components\\metrics\\MetricsChart.tsx",
              "data-component-line": "82",
              "data-component-file": "MetricsChart.tsx",
              "data-component-name": "h4",
              "data-component-content":
                "%7B%22text%22%3A%22Valores%20das%20M%C3%A9tricas%22%2C%22className%22%3A%22text-lg%20font-semibold%20mb-4%22%7D",
              className: "text-lg font-semibold mb-4",
              children: "Valores das Métricas",
            }),
            a.jsx(B, {
              "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:83:8",
              "data-lov-name": "ResponsiveContainer",
              "data-component-path":
                "src\\components\\metrics\\MetricsChart.tsx",
              "data-component-line": "83",
              "data-component-file": "MetricsChart.tsx",
              "data-component-name": "ResponsiveContainer",
              "data-component-content": "%7B%7D",
              width: "100%",
              height: 300,
              children: a.jsxs(fa, {
                "data-lov-id":
                  "src\\components\\metrics\\MetricsChart.tsx:84:10",
                "data-lov-name": "BarChart",
                "data-component-path":
                  "src\\components\\metrics\\MetricsChart.tsx",
                "data-component-line": "84",
                "data-component-file": "MetricsChart.tsx",
                "data-component-name": "BarChart",
                "data-component-content": "%7B%7D",
                data: r,
                children: [
                  a.jsx(za, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:85:12",
                    "data-lov-name": "CartesianGrid",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "85",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "CartesianGrid",
                    "data-component-content": "%7B%7D",
                    strokeDasharray: "3 3",
                  }),
                  a.jsx(Oa, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:86:12",
                    "data-lov-name": "XAxis",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "86",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "XAxis",
                    "data-component-content": "%7B%7D",
                    dataKey: "name",
                    angle: -45,
                    textAnchor: "end",
                    height: 80,
                    interval: 0,
                    tick: { fontSize: 12 },
                  }),
                  a.jsx(Ca, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:94:12",
                    "data-lov-name": "YAxis",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "94",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "YAxis",
                    "data-component-content": "%7B%7D",
                    tick: { fontSize: 12 },
                  }),
                  a.jsx(j, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:95:12",
                    "data-lov-name": "Tooltip",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "95",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "Tooltip",
                    "data-component-content": "%7B%7D",
                    formatter: (e, n) => [`${e}`, "Valor"],
                    labelFormatter: (e) => `Métrica: ${e}`,
                  }),
                  a.jsx(ua, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:102:12",
                    "data-lov-name": "Bar",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "102",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "Bar",
                    "data-component-content": "%7B%7D",
                    dataKey: "value",
                    fill: "#8884d8",
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:111:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\metrics\\MetricsChart.tsx",
          "data-component-line": "111",
          "data-component-file": "MetricsChart.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:112:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\metrics\\MetricsChart.tsx",
              "data-component-line": "112",
              "data-component-file": "MetricsChart.tsx",
              "data-component-name": "div",
              "data-component-content": "%7B%7D",
              children: [
                a.jsx("h4", {
                  "data-lov-id":
                    "src\\components\\metrics\\MetricsChart.tsx:113:10",
                  "data-lov-name": "h4",
                  "data-component-path":
                    "src\\components\\metrics\\MetricsChart.tsx",
                  "data-component-line": "113",
                  "data-component-file": "MetricsChart.tsx",
                  "data-component-name": "h4",
                  "data-component-content":
                    "%7B%22text%22%3A%22Distribui%C3%A7%C3%A3o%20de%20Sa%C3%BAde%22%2C%22className%22%3A%22text-lg%20font-semibold%20mb-4%22%7D",
                  className: "text-lg font-semibold mb-4",
                  children: "Distribuição de Saúde",
                }),
                a.jsx(B, {
                  "data-lov-id":
                    "src\\components\\metrics\\MetricsChart.tsx:114:10",
                  "data-lov-name": "ResponsiveContainer",
                  "data-component-path":
                    "src\\components\\metrics\\MetricsChart.tsx",
                  "data-component-line": "114",
                  "data-component-file": "MetricsChart.tsx",
                  "data-component-name": "ResponsiveContainer",
                  "data-component-content": "%7B%7D",
                  width: "100%",
                  height: 200,
                  children: a.jsxs(H, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:115:12",
                    "data-lov-name": "PieChart",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "115",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "PieChart",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(K, {
                        "data-lov-id":
                          "src\\components\\metrics\\MetricsChart.tsx:116:14",
                        "data-lov-name": "Pie",
                        "data-component-path":
                          "src\\components\\metrics\\MetricsChart.tsx",
                        "data-component-line": "116",
                        "data-component-file": "MetricsChart.tsx",
                        "data-component-name": "Pie",
                        "data-component-content": "%7B%7D",
                        data: i,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: e, percent: n }) =>
                          `${e} ${(n * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: i.map((e, n) =>
                          a.jsx(
                            U,
                            {
                              "data-lov-id":
                                "src\\components\\metrics\\MetricsChart.tsx:127:18",
                              "data-lov-name": "Cell",
                              "data-component-path":
                                "src\\components\\metrics\\MetricsChart.tsx",
                              "data-component-line": "127",
                              "data-component-file": "MetricsChart.tsx",
                              "data-component-name": "Cell",
                              "data-component-content": "%7B%7D",
                              fill: e.color,
                            },
                            `cell-${n}`,
                          ),
                        ),
                      }),
                      a.jsx(j, {
                        "data-lov-id":
                          "src\\components\\metrics\\MetricsChart.tsx:130:14",
                        "data-lov-name": "Tooltip",
                        "data-component-path":
                          "src\\components\\metrics\\MetricsChart.tsx",
                        "data-component-line": "130",
                        "data-component-file": "MetricsChart.tsx",
                        "data-component-name": "Tooltip",
                        "data-component-content": "%7B%7D",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:135:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\metrics\\MetricsChart.tsx",
              "data-component-line": "135",
              "data-component-file": "MetricsChart.tsx",
              "data-component-name": "div",
              "data-component-content": "%7B%7D",
              children: [
                a.jsx("h4", {
                  "data-lov-id":
                    "src\\components\\metrics\\MetricsChart.tsx:136:10",
                  "data-lov-name": "h4",
                  "data-component-path":
                    "src\\components\\metrics\\MetricsChart.tsx",
                  "data-component-line": "136",
                  "data-component-file": "MetricsChart.tsx",
                  "data-component-name": "h4",
                  "data-component-content":
                    "%7B%22text%22%3A%22Distribui%C3%A7%C3%A3o%20de%20Tend%C3%AAncias%22%2C%22className%22%3A%22text-lg%20font-semibold%20mb-4%22%7D",
                  className: "text-lg font-semibold mb-4",
                  children: "Distribuição de Tendências",
                }),
                a.jsx(B, {
                  "data-lov-id":
                    "src\\components\\metrics\\MetricsChart.tsx:137:10",
                  "data-lov-name": "ResponsiveContainer",
                  "data-component-path":
                    "src\\components\\metrics\\MetricsChart.tsx",
                  "data-component-line": "137",
                  "data-component-file": "MetricsChart.tsx",
                  "data-component-name": "ResponsiveContainer",
                  "data-component-content": "%7B%7D",
                  width: "100%",
                  height: 200,
                  children: a.jsxs(H, {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:138:12",
                    "data-lov-name": "PieChart",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "138",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "PieChart",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(K, {
                        "data-lov-id":
                          "src\\components\\metrics\\MetricsChart.tsx:139:14",
                        "data-lov-name": "Pie",
                        "data-component-path":
                          "src\\components\\metrics\\MetricsChart.tsx",
                        "data-component-line": "139",
                        "data-component-file": "MetricsChart.tsx",
                        "data-component-name": "Pie",
                        "data-component-content": "%7B%7D",
                        data: c,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: e, percent: n }) =>
                          `${e} ${(n * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: c.map((e, n) =>
                          a.jsx(
                            U,
                            {
                              "data-lov-id":
                                "src\\components\\metrics\\MetricsChart.tsx:150:18",
                              "data-lov-name": "Cell",
                              "data-component-path":
                                "src\\components\\metrics\\MetricsChart.tsx",
                              "data-component-line": "150",
                              "data-component-file": "MetricsChart.tsx",
                              "data-component-name": "Cell",
                              "data-component-content": "%7B%7D",
                              fill: e.color,
                            },
                            `cell-${n}`,
                          ),
                        ),
                      }),
                      a.jsx(j, {
                        "data-lov-id":
                          "src\\components\\metrics\\MetricsChart.tsx:153:14",
                        "data-lov-name": "Tooltip",
                        "data-component-path":
                          "src\\components\\metrics\\MetricsChart.tsx",
                        "data-component-line": "153",
                        "data-component-file": "MetricsChart.tsx",
                        "data-component-name": "Tooltip",
                        "data-component-content": "%7B%7D",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:160:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\metrics\\MetricsChart.tsx",
          "data-component-line": "160",
          "data-component-file": "MetricsChart.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%7D",
          children: [
            a.jsx("h4", {
              "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:161:8",
              "data-lov-name": "h4",
              "data-component-path":
                "src\\components\\metrics\\MetricsChart.tsx",
              "data-component-line": "161",
              "data-component-file": "MetricsChart.tsx",
              "data-component-name": "h4",
              "data-component-content":
                "%7B%22text%22%3A%22Resumo%20Detalhado%22%2C%22className%22%3A%22text-lg%20font-semibold%20mb-4%22%7D",
              className: "text-lg font-semibold mb-4",
              children: "Resumo Detalhado",
            }),
            a.jsx("div", {
              "data-lov-id": "src\\components\\metrics\\MetricsChart.tsx:162:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\metrics\\MetricsChart.tsx",
              "data-component-line": "162",
              "data-component-file": "MetricsChart.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22overflow-x-auto%22%7D",
              className: "overflow-x-auto",
              children: a.jsxs("table", {
                "data-lov-id":
                  "src\\components\\metrics\\MetricsChart.tsx:163:10",
                "data-lov-name": "table",
                "data-component-path":
                  "src\\components\\metrics\\MetricsChart.tsx",
                "data-component-line": "163",
                "data-component-file": "MetricsChart.tsx",
                "data-component-name": "table",
                "data-component-content":
                  "%7B%22className%22%3A%22w-full%20text-sm%22%7D",
                className: "w-full text-sm",
                children: [
                  a.jsx("thead", {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:164:12",
                    "data-lov-name": "thead",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "164",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "thead",
                    "data-component-content": "%7B%7D",
                    children: a.jsxs("tr", {
                      "data-lov-id":
                        "src\\components\\metrics\\MetricsChart.tsx:165:14",
                      "data-lov-name": "tr",
                      "data-component-path":
                        "src\\components\\metrics\\MetricsChart.tsx",
                      "data-component-line": "165",
                      "data-component-file": "MetricsChart.tsx",
                      "data-component-name": "tr",
                      "data-component-content":
                        "%7B%22className%22%3A%22border-b%22%7D",
                      className: "border-b",
                      children: [
                        a.jsx("th", {
                          "data-lov-id":
                            "src\\components\\metrics\\MetricsChart.tsx:166:16",
                          "data-lov-name": "th",
                          "data-component-path":
                            "src\\components\\metrics\\MetricsChart.tsx",
                          "data-component-line": "166",
                          "data-component-file": "MetricsChart.tsx",
                          "data-component-name": "th",
                          "data-component-content":
                            "%7B%22text%22%3A%22M%C3%A9trica%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                          className: "text-left p-2",
                          children: "Métrica",
                        }),
                        a.jsx("th", {
                          "data-lov-id":
                            "src\\components\\metrics\\MetricsChart.tsx:167:16",
                          "data-lov-name": "th",
                          "data-component-path":
                            "src\\components\\metrics\\MetricsChart.tsx",
                          "data-component-line": "167",
                          "data-component-file": "MetricsChart.tsx",
                          "data-component-name": "th",
                          "data-component-content":
                            "%7B%22text%22%3A%22Valor%22%2C%22className%22%3A%22text-right%20p-2%22%7D",
                          className: "text-right p-2",
                          children: "Valor",
                        }),
                        a.jsx("th", {
                          "data-lov-id":
                            "src\\components\\metrics\\MetricsChart.tsx:168:16",
                          "data-lov-name": "th",
                          "data-component-path":
                            "src\\components\\metrics\\MetricsChart.tsx",
                          "data-component-line": "168",
                          "data-component-file": "MetricsChart.tsx",
                          "data-component-name": "th",
                          "data-component-content":
                            "%7B%22text%22%3A%22Tend%C3%AAncia%22%2C%22className%22%3A%22text-right%20p-2%22%7D",
                          className: "text-right p-2",
                          children: "Tendência",
                        }),
                        a.jsx("th", {
                          "data-lov-id":
                            "src\\components\\metrics\\MetricsChart.tsx:169:16",
                          "data-lov-name": "th",
                          "data-component-path":
                            "src\\components\\metrics\\MetricsChart.tsx",
                          "data-component-line": "169",
                          "data-component-file": "MetricsChart.tsx",
                          "data-component-name": "th",
                          "data-component-content":
                            "%7B%22text%22%3A%22Status%22%2C%22className%22%3A%22text-center%20p-2%22%7D",
                          className: "text-center p-2",
                          children: "Status",
                        }),
                      ],
                    }),
                  }),
                  a.jsx("tbody", {
                    "data-lov-id":
                      "src\\components\\metrics\\MetricsChart.tsx:172:12",
                    "data-lov-name": "tbody",
                    "data-component-path":
                      "src\\components\\metrics\\MetricsChart.tsx",
                    "data-component-line": "172",
                    "data-component-file": "MetricsChart.tsx",
                    "data-component-name": "tbody",
                    "data-component-content": "%7B%7D",
                    children: o.map((e) =>
                      a.jsxs(
                        "tr",
                        {
                          "data-lov-id":
                            "src\\components\\metrics\\MetricsChart.tsx:174:16",
                          "data-lov-name": "tr",
                          "data-component-path":
                            "src\\components\\metrics\\MetricsChart.tsx",
                          "data-component-line": "174",
                          "data-component-file": "MetricsChart.tsx",
                          "data-component-name": "tr",
                          "data-component-content":
                            "%7B%22className%22%3A%22border-b%20hover%3Abg-gray-50%22%7D",
                          className: "border-b hover:bg-gray-50",
                          children: [
                            a.jsx("td", {
                              "data-lov-id":
                                "src\\components\\metrics\\MetricsChart.tsx:175:18",
                              "data-lov-name": "td",
                              "data-component-path":
                                "src\\components\\metrics\\MetricsChart.tsx",
                              "data-component-line": "175",
                              "data-component-file": "MetricsChart.tsx",
                              "data-component-name": "td",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-2%20font-medium%22%7D",
                              className: "p-2 font-medium",
                              children: e.name,
                            }),
                            a.jsxs("td", {
                              "data-lov-id":
                                "src\\components\\metrics\\MetricsChart.tsx:176:18",
                              "data-lov-name": "td",
                              "data-component-path":
                                "src\\components\\metrics\\MetricsChart.tsx",
                              "data-component-line": "176",
                              "data-component-file": "MetricsChart.tsx",
                              "data-component-name": "td",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-2%20text-right%22%7D",
                              className: "p-2 text-right",
                              children: [e.value, e.unit],
                            }),
                            a.jsx("td", {
                              "data-lov-id":
                                "src\\components\\metrics\\MetricsChart.tsx:179:18",
                              "data-lov-name": "td",
                              "data-component-path":
                                "src\\components\\metrics\\MetricsChart.tsx",
                              "data-component-line": "179",
                              "data-component-file": "MetricsChart.tsx",
                              "data-component-name": "td",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-2%20text-right%22%7D",
                              className: "p-2 text-right",
                              children: a.jsxs("span", {
                                "data-lov-id":
                                  "src\\components\\metrics\\MetricsChart.tsx:180:20",
                                "data-lov-name": "span",
                                "data-component-path":
                                  "src\\components\\metrics\\MetricsChart.tsx",
                                "data-component-line": "180",
                                "data-component-file": "MetricsChart.tsx",
                                "data-component-name": "span",
                                "data-component-content":
                                  "%7B%22text%22%3A%22%25%22%7D",
                                className: `inline-flex items-center ${e.trend === "up" ? "text-green-600" : e.trend === "down" ? "text-red-600" : "text-gray-600"}`,
                                children: [
                                  e.trend === "up"
                                    ? "↗"
                                    : e.trend === "down"
                                      ? "↘"
                                      : "→",
                                  e.trendPercentage > 0 ? "+" : "",
                                  e.trendPercentage.toFixed(1),
                                  "%",
                                ],
                              }),
                            }),
                            a.jsx("td", {
                              "data-lov-id":
                                "src\\components\\metrics\\MetricsChart.tsx:188:18",
                              "data-lov-name": "td",
                              "data-component-path":
                                "src\\components\\metrics\\MetricsChart.tsx",
                              "data-component-line": "188",
                              "data-component-file": "MetricsChart.tsx",
                              "data-component-name": "td",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-2%20text-center%22%7D",
                              className: "p-2 text-center",
                              children: a.jsx("span", {
                                "data-lov-id":
                                  "src\\components\\metrics\\MetricsChart.tsx:189:20",
                                "data-lov-name": "span",
                                "data-component-path":
                                  "src\\components\\metrics\\MetricsChart.tsx",
                                "data-component-line": "189",
                                "data-component-file": "MetricsChart.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%7D",
                                className: `inline-block px-2 py-1 text-xs rounded-full ${e.healthStatus === "good" ? "bg-green-100 text-green-800" : e.healthStatus === "warning" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`,
                                children: e.healthStatus,
                              }),
                            }),
                          ],
                        },
                        e.id,
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
  Ya = () => {
    ta();
    const [o, l] = f.useState("all");
    f.useState("current");
    const [s, i] = f.useState("cards"),
      [c, r] = f.useState(""),
      { metrics: m, isLoading: e } = ia(),
      { values: n, isLoading: q } = ra("default-org"),
      { analytics: Ba, isLoading: G } = ma("default-org"),
      X = e || q || G,
      Y = [
        {
          title: "Total de Métricas",
          value: "16",
          icon: z,
          trend: { value: 0, isPositive: !0, label: "Estável" },
          variant: "info",
          subtitle: "Ativas e monitoradas",
        },
        {
          title: "Score de Saúde",
          value: "82%",
          icon: L,
          trend: { value: 5, isPositive: !0, label: "vs. mês anterior" },
          variant: "success",
          subtitle: "Performance geral",
        },
        {
          title: "Métricas Críticas",
          value: "3",
          icon: x,
          trend: { value: -1, isPositive: !1, label: "vs. mês anterior" },
          variant: "warning",
          subtitle: "Requerem atenção",
        },
        {
          title: "Taxa de Atualização",
          value: "94%",
          icon: R,
          trend: { value: 2, isPositive: !0, label: "vs. mês anterior" },
          variant: "success",
          subtitle: "Dados atualizados",
        },
      ],
      u = [
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
          icon: E,
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
          icon: F,
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
          icon: x,
          color: "bg-purple-500",
          metrics: 4,
          healthScore: 77,
          status: "at-risk",
          criticalCount: 1,
          trend: -3,
        },
      ],
      b = [
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
      ].filter((t) => {
        const A = o === "all" || t.domain === o,
          aa =
            t.name.toLowerCase().includes(c.toLowerCase()) ||
            t.description.toLowerCase().includes(c.toLowerCase());
        return A && aa;
      }),
      Z = (t) => {
        switch (t) {
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
      J = (t) => {
        switch (t) {
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
      Q = (t) => {
        switch (t) {
          case "finance":
            return V;
          case "commercial":
            return E;
          case "operations":
            return F;
          case "strategy":
            return x;
          default:
            return z;
        }
      },
      W = (t) => {
        switch (t) {
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
      _ = (t) => {
        switch (t) {
          case "finance":
            return "Financeiro";
          case "commercial":
            return "Comercial";
          case "operations":
            return "Operacional";
          case "strategy":
            return "Estratégico";
          default:
            return t;
        }
      };
    return X
      ? a.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:265:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
          "data-component-line": "265",
          "data-component-file": "MetricsDashboard-Otimizado.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
          className: "container-fluid space-y-8 py-6",
          children: [
            a.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:266:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
              "data-component-line": "266",
              "data-component-file": "MetricsDashboard-Otimizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
              className: "flex items-center justify-between",
              children: [
                a.jsx(h, {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:267:10",
                  "data-lov-name": "Skeleton",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "267",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "Skeleton",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-10%20w-64%22%7D",
                  className: "h-10 w-64",
                }),
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:268:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "268",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                  className: "flex gap-3",
                  children: [
                    a.jsx(h, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:269:12",
                      "data-lov-name": "Skeleton",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "269",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "Skeleton",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-10%20w-32%22%7D",
                      className: "h-10 w-32",
                    }),
                    a.jsx(h, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:270:12",
                      "data-lov-name": "Skeleton",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "270",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "Skeleton",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-10%20w-32%22%7D",
                      className: "h-10 w-32",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              "data-lov-id":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:274:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
              "data-component-line": "274",
              "data-component-file": "MetricsDashboard-Otimizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: [1, 2, 3, 4].map((t) =>
                a.jsx(
                  h,
                  {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:276:12",
                    "data-lov-name": "Skeleton",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "276",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "Skeleton",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-32%20rounded-xl%22%7D",
                    className: "h-32 rounded-xl",
                  },
                  t,
                ),
              ),
            }),
            a.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:280:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
              "data-component-line": "280",
              "data-component-file": "MetricsDashboard-Otimizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                a.jsx(h, {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:281:10",
                  "data-lov-name": "Skeleton",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "281",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "Skeleton",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-6%20w-48%22%7D",
                  className: "h-6 w-48",
                }),
                a.jsx("div", {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:282:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "282",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: [1, 2, 3, 4].map((t) =>
                    a.jsx(
                      h,
                      {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:284:14",
                        "data-lov-name": "Skeleton",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "284",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "Skeleton",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-48%20rounded-xl%22%7D",
                        className: "h-48 rounded-xl",
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
          "data-lov-id":
            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:293:4",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
          "data-component-line": "293",
          "data-component-file": "MetricsDashboard-Otimizado.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
          className: "container-fluid space-y-8 py-6",
          children: [
            a.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:295:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
              "data-component-line": "295",
              "data-component-file": "MetricsDashboard-Otimizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D",
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: [
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:296:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "296",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                  className: "flex items-center gap-3",
                  children: [
                    a.jsx("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:297:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "297",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-2%20bg-gradient-to-r%20from-blue-500%20to-purple-500%20rounded-lg%22%7D",
                      className:
                        "p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg",
                      children: a.jsx(z, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:298:12",
                        "data-lov-name": "BarChart3",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "298",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "BarChart3",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                        className: "w-6 h-6 text-white",
                      }),
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:300:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "300",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx("h1", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:301:12",
                          "data-lov-name": "h1",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "301",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "h1",
                          "data-component-content":
                            "%7B%22text%22%3A%22Painel%20de%20Indicadores%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
                          className: "text-3xl font-bold text-foreground",
                          children: "Painel de Indicadores",
                        }),
                        a.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:302:12",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "302",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22text%22%3A%22Monitoramento%20completo%20de%20m%C3%A9tricas%20por%20dom%C3%ADnios%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                          className: "text-muted-foreground",
                          children:
                            "Monitoramento completo de métricas por domínios",
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:306:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "306",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                  className: "flex gap-3",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:307:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "307",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22relative%22%7D",
                      className: "relative",
                      children: [
                        a.jsx(Da, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:308:12",
                          "data-lov-name": "Search",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "308",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Search",
                          "data-component-content":
                            "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20w-4%20h-4%20text-muted-foreground%22%7D",
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground",
                        }),
                        a.jsx(sa, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:309:12",
                          "data-lov-name": "Input",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "309",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Input",
                          "data-component-content":
                            "%7B%22placeholder%22%3A%22Buscar%20m%C3%A9tricas...%22%2C%22className%22%3A%22pl-10%20w-64%22%7D",
                          placeholder: "Buscar métricas...",
                          value: c,
                          onChange: (t) => r(t.target.value),
                          className: "pl-10 w-64",
                        }),
                      ],
                    }),
                    a.jsxs(S, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:317:10",
                      "data-lov-name": "Select",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "317",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "Select",
                      "data-component-content": "%7B%7D",
                      value: o,
                      onValueChange: l,
                      children: [
                        a.jsx(T, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:318:12",
                          "data-lov-name": "SelectTrigger",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "318",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "SelectTrigger",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-40%22%7D",
                          className: "w-40",
                          children: a.jsx(I, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:319:14",
                            "data-lov-name": "SelectValue",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "319",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "SelectValue",
                            "data-component-content": "%7B%7D",
                          }),
                        }),
                        a.jsxs(P, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:321:12",
                          "data-lov-name": "SelectContent",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "321",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "SelectContent",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:322:14",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "322",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content":
                                "%7B%22text%22%3A%22Todos%20Dom%C3%ADnios%22%7D",
                              value: "all",
                              children: "Todos Domínios",
                            }),
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:323:14",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "323",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content":
                                "%7B%22text%22%3A%22Financeiro%22%7D",
                              value: "finance",
                              children: "Financeiro",
                            }),
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:324:14",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "324",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content":
                                "%7B%22text%22%3A%22Comercial%22%7D",
                              value: "commercial",
                              children: "Comercial",
                            }),
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:325:14",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "325",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content":
                                "%7B%22text%22%3A%22Operacional%22%7D",
                              value: "operations",
                              children: "Operacional",
                            }),
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:326:14",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "326",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content":
                                "%7B%22text%22%3A%22Estrat%C3%A9gico%22%7D",
                              value: "strategy",
                              children: "Estratégico",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs(d, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:330:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "330",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Filtros%22%7D",
                      variant: "outline",
                      size: "sm",
                      children: [
                        a.jsx(va, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:331:12",
                          "data-lov-name": "Filter",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "331",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Filter",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        "Filtros",
                      ],
                    }),
                    a.jsxs(d, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:335:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "335",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Exportar%22%7D",
                      variant: "outline",
                      size: "sm",
                      children: [
                        a.jsx(Ma, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:336:12",
                          "data-lov-name": "Download",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "336",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Download",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        "Exportar",
                      ],
                    }),
                    a.jsxs(d, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:340:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "340",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22text%22%3A%22Atualizar%22%7D",
                      variant: "outline",
                      size: "sm",
                      children: [
                        a.jsx(R, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:341:12",
                          "data-lov-name": "RefreshCw",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "341",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "RefreshCw",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        "Atualizar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              "data-lov-id":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:348:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
              "data-component-line": "348",
              "data-component-file": "MetricsDashboard-Otimizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: Y.map((t, A) =>
                a.jsx(
                  oa,
                  {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:350:10",
                    "data-lov-name": "KPICard",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "350",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "KPICard",
                    "data-component-content": "%7B%7D",
                    title: t.title,
                    value: t.value,
                    icon: t.icon,
                    trend: t.trend,
                    variant: t.variant,
                    subtitle: t.subtitle,
                  },
                  A,
                ),
              ),
            }),
            u.some((t) => t.criticalCount > 0) &&
              a.jsxs(da, {
                "data-lov-id":
                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:364:8",
                "data-lov-name": "Alert",
                "data-component-path":
                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                "data-component-line": "364",
                "data-component-file": "MetricsDashboard-Otimizado.tsx",
                "data-component-name": "Alert",
                "data-component-content":
                  "%7B%22className%22%3A%22border-yellow-200%20bg-yellow-50%22%7D",
                className: "border-yellow-200 bg-yellow-50",
                children: [
                  a.jsx(x, {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:365:10",
                    "data-lov-name": "Target",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "365",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "Target",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-4%20w-4%20text-yellow-600%22%7D",
                    className: "h-4 w-4 text-yellow-600",
                  }),
                  a.jsxs(ca, {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:366:10",
                    "data-lov-name": "AlertDescription",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "366",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "AlertDescription",
                    "data-component-content":
                      "%7B%22text%22%3A%22dom%C3%ADnios%20possuem%20m%C3%A9tricas%20cr%C3%ADticas%20que%20requerem%20aten%C3%A7%C3%A3o%20imediata.%22%2C%22className%22%3A%22text-yellow-800%22%7D",
                    className: "text-yellow-800",
                    children: [
                      a.jsx("strong", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:367:12",
                        "data-lov-name": "strong",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "367",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "strong",
                        "data-component-content":
                          "%7B%22text%22%3A%22Aten%C3%A7%C3%A3o%3A%22%7D",
                        children: "Atenção:",
                      }),
                      " ",
                      u.filter((t) => t.criticalCount > 0).length,
                      " domínios possuem métricas críticas que requerem atenção imediata.",
                      a.jsx(d, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:368:12",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "368",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "Button",
                        "data-component-content":
                          "%7B%22text%22%3A%22Ver%20detalhes%22%2C%22className%22%3A%22p-0%20h-auto%20ml-2%20text-yellow-600%22%7D",
                        variant: "link",
                        size: "sm",
                        className: "p-0 h-auto ml-2 text-yellow-600",
                        children: "Ver detalhes",
                      }),
                    ],
                  }),
                ],
              }),
            a.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:376:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
              "data-component-line": "376",
              "data-component-file": "MetricsDashboard-Otimizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                a.jsx("div", {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:378:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "378",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: u.map((t) =>
                    a.jsxs(
                      D,
                      {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:380:12",
                        "data-lov-name": "Card",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "380",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "Card",
                        "data-component-content":
                          "%7B%22className%22%3A%22card-hover%22%7D",
                        className: "card-hover",
                        children: [
                          a.jsx(v, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:381:14",
                            "data-lov-name": "CardHeader",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "381",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "CardHeader",
                            "data-component-content":
                              "%7B%22className%22%3A%22pb-3%22%7D",
                            className: "pb-3",
                            children: a.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:382:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "382",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                              className: "flex items-center justify-between",
                              children: a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:383:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "383",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                className: "flex items-center gap-3",
                                children: [
                                  a.jsx("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:384:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "384",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    className: `w-10 h-10 ${t.color} rounded-lg flex items-center justify-center`,
                                    children: a.jsx(t.icon, {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:385:22",
                                      "data-lov-name": "domain.icon",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "385",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "domain.icon",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-5%20h-5%20text-white%22%7D",
                                      className: "w-5 h-5 text-white",
                                    }),
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:387:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "387",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx(M, {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:388:22",
                                        "data-lov-name": "CardTitle",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "388",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "CardTitle",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-lg%22%7D",
                                        className: "text-lg",
                                        children: t.name,
                                      }),
                                      a.jsx(C, {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:389:22",
                                        "data-lov-name": "Badge",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "389",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "Badge",
                                        "data-component-content": "%7B%7D",
                                        className: Z(t.status),
                                        children:
                                          t.status === "on-track"
                                            ? "No Caminho"
                                            : t.status === "at-risk"
                                              ? "Em Risco"
                                              : "Fora do Caminho",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          a.jsxs(g, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:397:14",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "397",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-4%22%7D",
                            className: "space-y-4",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:398:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "398",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%22%7D",
                                className: "space-y-2",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:399:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "399",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:400:20",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "400",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Score%20de%20Sa%C3%BAde%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Score de Saúde",
                                      }),
                                      a.jsxs("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:401:20",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "401",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%2F100%22%2C%22className%22%3A%22text-lg%20font-bold%22%7D",
                                        className: "text-lg font-bold",
                                        children: [t.healthScore, "/100"],
                                      }),
                                    ],
                                  }),
                                  a.jsx(na, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:403:18",
                                    "data-lov-name": "Progress",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "403",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "Progress",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-2%22%7D",
                                    value: t.healthScore,
                                    className: "h-2",
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:406:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "406",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%20text-sm%22%7D",
                                className: "grid grid-cols-2 gap-2 text-sm",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:407:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "407",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:408:20",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "408",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22M%C3%A9tricas%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                                        className: "text-muted-foreground",
                                        children: "Métricas",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:409:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "409",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-medium%22%7D",
                                        className: "font-medium",
                                        children: t.metrics,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:411:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "411",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:412:20",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "412",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Cr%C3%ADticas%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                                        className: "text-muted-foreground",
                                        children: "Críticas",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:413:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                        "data-component-line": "413",
                                        "data-component-file":
                                          "MetricsDashboard-Otimizado.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-medium%20text-red-600%22%7D",
                                        className: "font-medium text-red-600",
                                        children: t.criticalCount,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:417:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "417",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                className: "flex items-center justify-between",
                                children: [
                                  a.jsx(y, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:418:18",
                                    "data-lov-name": "TrendIndicator",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "418",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "TrendIndicator",
                                    "data-component-content": "%7B%7D",
                                    trend: t.trend > 0 ? "up" : "down",
                                    value: Math.abs(t.trend),
                                  }),
                                  a.jsx(d, {
                                    "data-lov-id":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:419:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                    "data-component-line": "419",
                                    "data-component-file":
                                      "MetricsDashboard-Otimizado.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content": "%7B%7D",
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: a.jsxs(O, {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:420:20",
                                      "data-lov-name": "Link",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "420",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "Link",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Ver%22%7D",
                                      to: `/app/metrics?domain=${t.domain}`,
                                      children: [
                                        a.jsx(w, {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:421:22",
                                          "data-lov-name": "Eye",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "421",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "Eye",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                          className: "w-4 h-4 mr-2",
                                        }),
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
                      t.domain,
                    ),
                  ),
                }),
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:432:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "432",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                  className: "flex items-center justify-between",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:433:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "433",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                      className: "flex items-center gap-4",
                      children: [
                        a.jsx("h2", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:434:12",
                          "data-lov-name": "h2",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "434",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "h2",
                          "data-component-content":
                            "%7B%22text%22%3A%22M%C3%A9tricas%20Detalhadas%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                          className: "text-2xl font-bold",
                          children: "Métricas Detalhadas",
                        }),
                        a.jsxs(C, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:435:12",
                          "data-lov-name": "Badge",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "435",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Badge",
                          "data-component-content":
                            "%7B%22text%22%3A%22m%C3%A9tricas%22%7D",
                          variant: "outline",
                          children: [b.length, " métricas"],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:440:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "440",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                      className: "flex gap-2",
                      children: [
                        a.jsxs(S, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:441:12",
                          "data-lov-name": "Select",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "441",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Select",
                          "data-component-content": "%7B%7D",
                          value: s,
                          onValueChange: i,
                          children: [
                            a.jsx(T, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:442:14",
                              "data-lov-name": "SelectTrigger",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "442",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectTrigger",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-32%22%7D",
                              className: "w-32",
                              children: a.jsx(I, {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:443:16",
                                "data-lov-name": "SelectValue",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "443",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "SelectValue",
                                "data-component-content": "%7B%7D",
                              }),
                            }),
                            a.jsxs(P, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:445:14",
                              "data-lov-name": "SelectContent",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "445",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "SelectContent",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx(p, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:446:16",
                                  "data-lov-name": "SelectItem",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "446",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "SelectItem",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Cards%22%7D",
                                  value: "cards",
                                  children: "Cards",
                                }),
                                a.jsx(p, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:447:16",
                                  "data-lov-name": "SelectItem",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "447",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "SelectItem",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Gr%C3%A1fico%22%7D",
                                  value: "chart",
                                  children: "Gráfico",
                                }),
                                a.jsx(p, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:448:16",
                                  "data-lov-name": "SelectItem",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "448",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "SelectItem",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Tabela%22%7D",
                                  value: "table",
                                  children: "Tabela",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs(d, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:452:12",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "452",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22text%22%3A%22Configurar%22%7D",
                          variant: "outline",
                          size: "sm",
                          children: [
                            a.jsx(N, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:453:14",
                              "data-lov-name": "Settings",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "453",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "Settings",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                              className: "w-4 h-4 mr-2",
                            }),
                            "Configurar",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s === "cards" &&
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:461:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "461",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: b.map((t) =>
                      a.jsx(
                        Aa,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:463:14",
                          "data-lov-name": "MetricsCard",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "463",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "MetricsCard",
                          "data-component-content": "%7B%7D",
                          metric: t,
                          onClick: () => {},
                        },
                        t.id,
                      ),
                    ),
                  }),
                s === "chart" &&
                  a.jsxs(D, {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:473:10",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "473",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(v, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:474:12",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "474",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(M, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:475:14",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "475",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Visualiza%C3%A7%C3%A3o%20Gr%C3%A1fica%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx(ga, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:476:16",
                              "data-lov-name": "PieChart",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "476",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "PieChart",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Visualização Gráfica",
                          ],
                        }),
                      }),
                      a.jsx(g, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:480:12",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "480",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content": "%7B%7D",
                        children: a.jsx(Na, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:481:14",
                          "data-lov-name": "MetricsChart",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "481",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "MetricsChart",
                          "data-component-content": "%7B%7D",
                          metrics: b,
                        }),
                      }),
                    ],
                  }),
                s === "table" &&
                  a.jsxs(D, {
                    "data-lov-id":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:487:10",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                    "data-component-line": "487",
                    "data-component-file": "MetricsDashboard-Otimizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(v, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:488:12",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "488",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(M, {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:489:14",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "489",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Tabela%20de%20M%C3%A9tricas%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx(z, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:490:16",
                              "data-lov-name": "BarChart3",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "490",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "BarChart3",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Tabela de Métricas",
                          ],
                        }),
                      }),
                      a.jsx(g, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:494:12",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "494",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content": "%7B%7D",
                        children: a.jsx("div", {
                          "data-lov-id":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:495:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                          "data-component-line": "495",
                          "data-component-file":
                            "MetricsDashboard-Otimizado.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22overflow-x-auto%22%7D",
                          className: "overflow-x-auto",
                          children: a.jsxs("table", {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:496:16",
                            "data-lov-name": "table",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "496",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "table",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-full%22%7D",
                            className: "w-full",
                            children: [
                              a.jsx("thead", {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:497:18",
                                "data-lov-name": "thead",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "497",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "thead",
                                "data-component-content": "%7B%7D",
                                children: a.jsxs("tr", {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:498:20",
                                  "data-lov-name": "tr",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "498",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "tr",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22border-b%22%7D",
                                  className: "border-b",
                                  children: [
                                    a.jsx("th", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:499:22",
                                      "data-lov-name": "th",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "499",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "th",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22M%C3%A9trica%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                                      className: "text-left p-2",
                                      children: "Métrica",
                                    }),
                                    a.jsx("th", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:500:22",
                                      "data-lov-name": "th",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "500",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "th",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Dom%C3%ADnio%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                                      className: "text-left p-2",
                                      children: "Domínio",
                                    }),
                                    a.jsx("th", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:501:22",
                                      "data-lov-name": "th",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "501",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "th",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Valor%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                                      className: "text-left p-2",
                                      children: "Valor",
                                    }),
                                    a.jsx("th", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:502:22",
                                      "data-lov-name": "th",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "502",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "th",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Tend%C3%AAncia%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                                      className: "text-left p-2",
                                      children: "Tendência",
                                    }),
                                    a.jsx("th", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:503:22",
                                      "data-lov-name": "th",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "503",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "th",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Status%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                                      className: "text-left p-2",
                                      children: "Status",
                                    }),
                                    a.jsx("th", {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:504:22",
                                      "data-lov-name": "th",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "504",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "th",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22A%C3%A7%C3%B5es%22%2C%22className%22%3A%22text-left%20p-2%22%7D",
                                      className: "text-left p-2",
                                      children: "Ações",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx("tbody", {
                                "data-lov-id":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:507:18",
                                "data-lov-name": "tbody",
                                "data-component-path":
                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                "data-component-line": "507",
                                "data-component-file":
                                  "MetricsDashboard-Otimizado.tsx",
                                "data-component-name": "tbody",
                                "data-component-content": "%7B%7D",
                                children: b.map((t) =>
                                  a.jsxs(
                                    "tr",
                                    {
                                      "data-lov-id":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:509:22",
                                      "data-lov-name": "tr",
                                      "data-component-path":
                                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                      "data-component-line": "509",
                                      "data-component-file":
                                        "MetricsDashboard-Otimizado.tsx",
                                      "data-component-name": "tr",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22border-b%22%7D",
                                      className: "border-b",
                                      children: [
                                        a.jsx("td", {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:510:24",
                                          "data-lov-name": "td",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "510",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "td",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22p-2%22%7D",
                                          className: "p-2",
                                          children: a.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:511:26",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                            "data-component-line": "511",
                                            "data-component-file":
                                              "MetricsDashboard-Otimizado.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                              a.jsx("p", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:512:28",
                                                "data-lov-name": "p",
                                                "data-component-path":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                "data-component-line": "512",
                                                "data-component-file":
                                                  "MetricsDashboard-Otimizado.tsx",
                                                "data-component-name": "p",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22font-medium%22%7D",
                                                className: "font-medium",
                                                children: t.name,
                                              }),
                                              a.jsx("p", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:513:28",
                                                "data-lov-name": "p",
                                                "data-component-path":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                "data-component-line": "513",
                                                "data-component-file":
                                                  "MetricsDashboard-Otimizado.tsx",
                                                "data-component-name": "p",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                                className:
                                                  "text-sm text-muted-foreground",
                                                children: t.description,
                                              }),
                                            ],
                                          }),
                                        }),
                                        a.jsx("td", {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:516:24",
                                          "data-lov-name": "td",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "516",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "td",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22p-2%22%7D",
                                          className: "p-2",
                                          children: a.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:517:26",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                            "data-component-line": "517",
                                            "data-component-file":
                                              "MetricsDashboard-Otimizado.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              a.jsx("div", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:518:28",
                                                "data-lov-name": "div",
                                                "data-component-path":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                "data-component-line": "518",
                                                "data-component-file":
                                                  "MetricsDashboard-Otimizado.tsx",
                                                "data-component-name": "div",
                                                "data-component-content":
                                                  "%7B%7D",
                                                className: `w-6 h-6 ${W(t.domain)} rounded flex items-center justify-center`,
                                                children: ea.createElement(
                                                  Q(t.domain),
                                                  {
                                                    className:
                                                      "w-3 h-3 text-white",
                                                  },
                                                ),
                                              }),
                                              a.jsx("span", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:521:28",
                                                "data-lov-name": "span",
                                                "data-component-path":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                "data-component-line": "521",
                                                "data-component-file":
                                                  "MetricsDashboard-Otimizado.tsx",
                                                "data-component-name": "span",
                                                "data-component-content":
                                                  "%7B%7D",
                                                children: _(t.domain),
                                              }),
                                            ],
                                          }),
                                        }),
                                        a.jsx("td", {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:524:24",
                                          "data-lov-name": "td",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "524",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "td",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22p-2%22%7D",
                                          className: "p-2",
                                          children: a.jsxs("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:525:26",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                            "data-component-line": "525",
                                            "data-component-file":
                                              "MetricsDashboard-Otimizado.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22font-bold%22%7D",
                                            className: "font-bold",
                                            children: [t.value, " ", t.unit],
                                          }),
                                        }),
                                        a.jsx("td", {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:527:24",
                                          "data-lov-name": "td",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "527",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "td",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22p-2%22%7D",
                                          className: "p-2",
                                          children: a.jsx(y, {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:528:26",
                                            "data-lov-name": "TrendIndicator",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                            "data-component-line": "528",
                                            "data-component-file":
                                              "MetricsDashboard-Otimizado.tsx",
                                            "data-component-name":
                                              "TrendIndicator",
                                            "data-component-content": "%7B%7D",
                                            trend: t.trend,
                                            value: 0,
                                          }),
                                        }),
                                        a.jsx("td", {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:530:24",
                                          "data-lov-name": "td",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "530",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "td",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22p-2%22%7D",
                                          className: "p-2",
                                          children: a.jsx(C, {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:531:26",
                                            "data-lov-name": "Badge",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                            "data-component-line": "531",
                                            "data-component-file":
                                              "MetricsDashboard-Otimizado.tsx",
                                            "data-component-name": "Badge",
                                            "data-component-content": "%7B%7D",
                                            className: J(t.healthStatus),
                                            children: t.healthStatus,
                                          }),
                                        }),
                                        a.jsx("td", {
                                          "data-lov-id":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:535:24",
                                          "data-lov-name": "td",
                                          "data-component-path":
                                            "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                          "data-component-line": "535",
                                          "data-component-file":
                                            "MetricsDashboard-Otimizado.tsx",
                                          "data-component-name": "td",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22p-2%22%7D",
                                          className: "p-2",
                                          children: a.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:536:26",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                            "data-component-line": "536",
                                            "data-component-file":
                                              "MetricsDashboard-Otimizado.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                                            className: "flex gap-2",
                                            children: [
                                              a.jsx(d, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:537:28",
                                                "data-lov-name": "Button",
                                                "data-component-path":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                "data-component-line": "537",
                                                "data-component-file":
                                                  "MetricsDashboard-Otimizado.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content":
                                                  "%7B%7D",
                                                variant: "outline",
                                                size: "sm",
                                                children: a.jsx(w, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:538:30",
                                                  "data-lov-name": "Eye",
                                                  "data-component-path":
                                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                  "data-component-line": "538",
                                                  "data-component-file":
                                                    "MetricsDashboard-Otimizado.tsx",
                                                  "data-component-name": "Eye",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                              a.jsx(d, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:540:28",
                                                "data-lov-name": "Button",
                                                "data-component-path":
                                                  "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                "data-component-line": "540",
                                                "data-component-file":
                                                  "MetricsDashboard-Otimizado.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content":
                                                  "%7B%7D",
                                                variant: "outline",
                                                size: "sm",
                                                children: a.jsx(N, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:541:30",
                                                  "data-lov-name": "Settings",
                                                  "data-component-path":
                                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                                  "data-component-line": "541",
                                                  "data-component-file":
                                                    "MetricsDashboard-Otimizado.tsx",
                                                  "data-component-name":
                                                    "Settings",
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
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                a.jsxs(D, {
                  "data-lov-id":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:555:8",
                  "data-lov-name": "Card",
                  "data-component-path":
                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                  "data-component-line": "555",
                  "data-component-file": "MetricsDashboard-Otimizado.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: [
                    a.jsx(v, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:556:10",
                      "data-lov-name": "CardHeader",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "556",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "CardHeader",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs(M, {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:557:12",
                        "data-lov-name": "CardTitle",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "557",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content":
                          "%7B%22text%22%3A%22A%C3%A7%C3%B5es%20R%C3%A1pidas%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx(ba, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:558:14",
                            "data-lov-name": "Plus",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "558",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "Plus",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                            className: "w-5 h-5",
                          }),
                          "Ações Rápidas",
                        ],
                      }),
                    }),
                    a.jsx(g, {
                      "data-lov-id":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:562:10",
                      "data-lov-name": "CardContent",
                      "data-component-path":
                        "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                      "data-component-line": "562",
                      "data-component-file": "MetricsDashboard-Otimizado.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:563:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                        "data-component-line": "563",
                        "data-component-file": "MetricsDashboard-Otimizado.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%22%7D",
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                          a.jsx(d, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:564:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "564",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: a.jsxs(O, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:565:16",
                              "data-lov-name": "Link",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "565",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "Link",
                              "data-component-content":
                                "%7B%22text%22%3A%22Configurar%20M%C3%A9tricas%22%7D",
                              to: "/app/metrics/config",
                              children: [
                                a.jsx(N, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:566:18",
                                  "data-lov-name": "Settings",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "566",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "Settings",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                  className: "w-4 h-4 mr-2",
                                }),
                                "Configurar Métricas",
                              ],
                            }),
                          }),
                          a.jsx(d, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:571:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "571",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: a.jsxs(O, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:572:16",
                              "data-lov-name": "Link",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "572",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "Link",
                              "data-component-content":
                                "%7B%22text%22%3A%22Analytics%20Avan%C3%A7ados%22%7D",
                              to: "/app/analytics",
                              children: [
                                a.jsx(L, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:573:18",
                                  "data-lov-name": "Activity",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "573",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "Activity",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                  className: "w-4 h-4 mr-2",
                                }),
                                "Analytics Avançados",
                              ],
                            }),
                          }),
                          a.jsx(d, {
                            "data-lov-id":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:578:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                            "data-component-line": "578",
                            "data-component-file":
                              "MetricsDashboard-Otimizado.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                            variant: "outline",
                            className: "w-full justify-start",
                            asChild: !0,
                            children: a.jsxs(O, {
                              "data-lov-id":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:579:16",
                              "data-lov-name": "Link",
                              "data-component-path":
                                "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                              "data-component-line": "579",
                              "data-component-file":
                                "MetricsDashboard-Otimizado.tsx",
                              "data-component-name": "Link",
                              "data-component-content":
                                "%7B%22text%22%3A%22Painel%20de%20Decis%C3%A3o%22%7D",
                              to: "/app/decision-panel",
                              children: [
                                a.jsx(x, {
                                  "data-lov-id":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx:580:18",
                                  "data-lov-name": "Target",
                                  "data-component-path":
                                    "src\\pages\\app\\MetricsDashboard-Otimizado.tsx",
                                  "data-component-line": "580",
                                  "data-component-file":
                                    "MetricsDashboard-Otimizado.tsx",
                                  "data-component-name": "Target",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                  className: "w-4 h-4 mr-2",
                                }),
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
export { Ya as default };
