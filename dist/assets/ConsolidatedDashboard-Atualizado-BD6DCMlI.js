import { u as I, j as a, B as e } from "./index-BZzvAVnT.js";
import { r as D } from "./vendor-BgR6OOld.js";
import { C as n, b as s, c as l, a as i } from "./card-DCmFy9yX.js";
import { B as g } from "./badge-DMGJasfj.js";
import { K as k } from "./kpi-card-CWRTA62G.js";
import { T as H, a as L, b as p, c } from "./tabs-C6dO4E1n.js";
import { P as v } from "./progress-Bi2Hl20I.js";
import { S as M, a as _, b as U, c as V, d as h } from "./select-BPvc3et1.js";
import { A as $, a as K } from "./alert-D4BI-VHt.js";
import { L as x } from "./router-D2JcpG7e.js";
import {
  f as O,
  r as q,
  D as u,
  a1 as Q,
  d as m,
  A as z,
  E as f,
  Z as N,
  b as r,
  q as G,
  Y as Z,
  j as B,
  c as Y,
  T as J,
  i as j,
  h as W,
} from "./utils-C25gojUd.js";
import "./index-DUaPDS5r.js";
import "./index-CIr2Jy9Y.js";
import "./index-Cda9Zv0V.js";
import "./index-DaXQxPyL.js";
const xa = () => {
  const { t: o } = I(),
    [w, y] = D.useState("quarter"),
    [T, S] = D.useState("overview"),
    P = [
      {
        title: "Receita Total",
        value: "R$2.4M",
        icon: j,
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
        icon: r,
        trend: { value: 8, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "info",
        subtitle: "Iniciativas concluídas",
      },
      {
        title: "Score de Saúde",
        value: "82/100",
        icon: z,
        trend: { value: 5, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "success",
        subtitle: "Performance geral",
      },
    ],
    A = [
      {
        domain: "Financeiro",
        icon: j,
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
        icon: W,
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
        icon: N,
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
        icon: r,
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
    R = [
      { period: "Q1", revenue: 18e5, margin: 12.5, execution: 65, score: 72 },
      { period: "Q2", revenue: 21e5, margin: 14.2, execution: 71, score: 76 },
      { period: "Q3", revenue: 195e4, margin: 13.8, execution: 68, score: 74 },
      { period: "Q4", revenue: 24e5, margin: 15.8, execution: 76, score: 82 },
    ],
    E = (t) => {
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
    C = (t) => {
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
    b = (t) =>
      t >= 80 ? "bg-green-500" : t >= 60 ? "bg-yellow-500" : "bg-red-500";
  return a.jsxs("div", {
    "data-lov-id":
      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:160:4",
    "data-lov-name": "div",
    "data-component-path":
      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
    "data-component-line": "160",
    "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
    "data-component-name": "div",
    "data-component-content":
      "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
    className: "container-fluid space-y-8 py-6",
    children: [
      a.jsxs("div", {
        "data-lov-id":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:162:6",
        "data-lov-name": "div",
        "data-component-path":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
        "data-component-line": "162",
        "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D",
        className:
          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
          a.jsxs("div", {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:163:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "163",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
            className: "flex items-center gap-3",
            children: [
              a.jsx("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:164:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "164",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22p-2%20bg-gradient-to-r%20from-blue-500%20to-purple-500%20rounded-lg%22%7D",
                className:
                  "p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg",
                children: a.jsx(O, {
                  "data-lov-id":
                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:165:12",
                  "data-lov-name": "BarChart3",
                  "data-component-path":
                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                  "data-component-line": "165",
                  "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                  "data-component-name": "BarChart3",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                  className: "w-6 h-6 text-white",
                }),
              }),
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:167:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "167",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  a.jsx("h1", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:168:12",
                    "data-lov-name": "h1",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "168",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "h1",
                    "data-component-content":
                      "%7B%22text%22%3A%22Dashboard%20Consolidado%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
                    className: "text-3xl font-bold text-foreground",
                    children: "Dashboard Consolidado",
                  }),
                  a.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:169:12",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "169",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22text%22%3A%22Vis%C3%A3o%20unificada%20de%20todos%20os%20indicadores%20estrat%C3%A9gicos%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                    className: "text-muted-foreground",
                    children:
                      "Visão unificada de todos os indicadores estratégicos",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:173:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "173",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20gap-3%22%7D",
            className: "flex gap-3",
            children: [
              a.jsxs(M, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:174:10",
                "data-lov-name": "Select",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "174",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "Select",
                "data-component-content": "%7B%7D",
                value: w,
                onValueChange: y,
                children: [
                  a.jsx(_, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:175:12",
                    "data-lov-name": "SelectTrigger",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "175",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "SelectTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-32%22%7D",
                    className: "w-32",
                    children: a.jsx(U, {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:176:14",
                      "data-lov-name": "SelectValue",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "176",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "SelectValue",
                      "data-component-content": "%7B%7D",
                    }),
                  }),
                  a.jsxs(V, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:178:12",
                    "data-lov-name": "SelectContent",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "178",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "SelectContent",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(h, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:179:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "179",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "month",
                        children: o("dashboard.period.month"),
                      }),
                      a.jsx(h, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:180:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "180",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "quarter",
                        children: o("dashboard.period.quarter"),
                      }),
                      a.jsx(h, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:181:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "181",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "year",
                        children: o("dashboard.period.year"),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(e, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:185:10",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "185",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                size: "sm",
                children: [
                  a.jsx(q, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:186:12",
                    "data-lov-name": "Filter",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "186",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Filter",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  o("common.filter"),
                ],
              }),
              a.jsxs(e, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:190:10",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "190",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                size: "sm",
                children: [
                  a.jsx(u, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:191:12",
                    "data-lov-name": "Download",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "191",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Download",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  o("common.export"),
                ],
              }),
              a.jsxs(e, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:195:10",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "195",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                size: "sm",
                children: [
                  a.jsx(Q, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:196:12",
                    "data-lov-name": "RefreshCw",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "196",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "RefreshCw",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  o("common.refresh"),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs($, {
        "data-lov-id":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:203:6",
        "data-lov-name": "Alert",
        "data-component-path":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
        "data-component-line": "203",
        "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
        "data-component-name": "Alert",
        "data-component-content":
          "%7B%22className%22%3A%22border-blue-200%20bg-blue-50%22%7D",
        className: "border-blue-200 bg-blue-50",
        children: [
          a.jsx(m, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:204:8",
            "data-lov-name": "TrendingUp",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "204",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "TrendingUp",
            "data-component-content":
              "%7B%22className%22%3A%22h-4%20w-4%20text-blue-600%22%7D",
            className: "h-4 w-4 text-blue-600",
          }),
          a.jsxs(K, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:205:8",
            "data-lov-name": "AlertDescription",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "205",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "AlertDescription",
            "data-component-content":
              "%7B%22className%22%3A%22text-blue-800%22%7D",
            className: "text-blue-800",
            children: [
              a.jsxs("strong", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:206:10",
                "data-lov-name": "strong",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "206",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "strong",
                "data-component-content": "%7B%22text%22%3A%22%3A%22%7D",
                children: [o("dashboard.summary.title"), ":"],
              }),
              " ",
              o("dashboard.summary.description"),
              a.jsx(e, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:207:10",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "207",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22p-0%20h-auto%20ml-2%20text-blue-600%22%7D",
                variant: "link",
                size: "sm",
                className: "p-0 h-auto ml-2 text-blue-600",
                children: o("dashboard.summary.view_details"),
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        "data-lov-id":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:214:6",
        "data-lov-name": "div",
        "data-component-path":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
        "data-component-line": "214",
        "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
        children: P.map((t, d) =>
          a.jsx(
            k,
            {
              "data-lov-id":
                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:216:10",
              "data-lov-name": "KPICard",
              "data-component-path":
                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
              "data-component-line": "216",
              "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
              "data-component-name": "KPICard",
              "data-component-content": "%7B%7D",
              title: t.title,
              value: t.value,
              icon: t.icon,
              trend: t.trend,
              variant: t.variant,
              subtitle: t.subtitle,
            },
            d,
          ),
        ),
      }),
      a.jsxs(H, {
        "data-lov-id":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:229:6",
        "data-lov-name": "Tabs",
        "data-component-path":
          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
        "data-component-line": "229",
        "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
        "data-component-name": "Tabs",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        value: T,
        onValueChange: S,
        className: "space-y-6",
        children: [
          a.jsxs(L, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:230:8",
            "data-lov-name": "TabsList",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "230",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "TabsList",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20w-full%20grid-cols-4%22%7D",
            className: "grid w-full grid-cols-4",
            children: [
              a.jsx(p, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:231:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "231",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "overview",
                children: o("dashboard.tabs.overview"),
              }),
              a.jsx(p, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:232:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "232",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "domains",
                children: o("dashboard.tabs.domains"),
              }),
              a.jsx(p, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:233:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "233",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "trends",
                children: o("dashboard.tabs.trends"),
              }),
              a.jsx(p, {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:234:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "234",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "insights",
                children: o("dashboard.tabs.insights"),
              }),
            ],
          }),
          a.jsx(c, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:238:8",
            "data-lov-name": "TabsContent",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "238",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "overview",
            className: "space-y-6",
            children: a.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:239:10",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
              "data-component-line": "239",
              "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              children: [
                a.jsxs(n, {
                  "data-lov-id":
                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:241:12",
                  "data-lov-name": "Card",
                  "data-component-path":
                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                  "data-component-line": "241",
                  "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: [
                    a.jsx(s, {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:242:14",
                      "data-lov-name": "CardHeader",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "242",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "CardHeader",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs(l, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:243:16",
                        "data-lov-name": "CardTitle",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "243",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content":
                          "%7B%22text%22%3A%22Resumo%20de%20Performance%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx(z, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:244:18",
                            "data-lov-name": "Activity",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "244",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Activity",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                            className: "w-5 h-5",
                          }),
                          "Resumo de Performance",
                        ],
                      }),
                    }),
                    a.jsxs(i, {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:248:14",
                      "data-lov-name": "CardContent",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "248",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-4%22%7D",
                      className: "space-y-4",
                      children: [
                        a.jsx("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:249:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "249",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-3%22%7D",
                          className: "space-y-3",
                          children: A.map((t) =>
                            a.jsxs(
                              "div",
                              {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:251:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "251",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20border%20rounded-lg%22%7D",
                                className:
                                  "flex items-center justify-between p-3 border rounded-lg",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:252:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-line": "252",
                                    "data-component-file":
                                      "ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                    className: "flex items-center gap-3",
                                    children: [
                                      a.jsx("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:253:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "253",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        className: `w-10 h-10 ${t.color} rounded-lg flex items-center justify-center`,
                                        children: a.jsx(t.icon, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:254:26",
                                          "data-lov-name": "domain.icon",
                                          "data-component-path":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-line": "254",
                                          "data-component-file":
                                            "ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-name": "domain.icon",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-5%20h-5%20text-white%22%7D",
                                          className: "w-5 h-5 text-white",
                                        }),
                                      }),
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:256:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "256",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          a.jsx("p", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:257:26",
                                            "data-lov-name": "p",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "257",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "p",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: t.domain,
                                          }),
                                          a.jsxs("p", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:258:26",
                                            "data-lov-name": "p",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "258",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "p",
                                            "data-component-content":
                                              "%7B%22text%22%3A%22%2F%20m%C3%A9tricas%20saud%C3%A1veis%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                            className:
                                              "text-sm text-muted-foreground",
                                            children: [
                                              t.metrics.filter(
                                                (d) => d.health === "good",
                                              ).length,
                                              "/",
                                              t.metrics.length,
                                              " métricas saudáveis",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:263:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-line": "263",
                                    "data-component-file":
                                      "ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-right%22%7D",
                                    className: "text-right",
                                    children: [
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:264:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "264",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                        className: "flex items-center gap-2",
                                        children: [
                                          a.jsxs("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:265:26",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "265",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22text%22%3A%22%2F100%22%2C%22className%22%3A%22text-lg%20font-bold%22%7D",
                                            className: "text-lg font-bold",
                                            children: [t.score, "/100"],
                                          }),
                                          a.jsx(g, {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:266:26",
                                            "data-lov-name": "Badge",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "266",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "Badge",
                                            "data-component-content": "%7B%7D",
                                            className: C(t.status),
                                            children:
                                              t.status === "on-track"
                                                ? "No Caminho"
                                                : t.status === "at-risk"
                                                  ? "Em Risco"
                                                  : "Fora do Caminho",
                                          }),
                                        ],
                                      }),
                                      a.jsx(v, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:271:24",
                                        "data-lov-name": "Progress",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "271",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "Progress",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-20%20h-2%20mt-1%22%7D",
                                        value: t.score,
                                        className: "w-20 h-2 mt-1",
                                        indicatorClassName: b(t.score),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t.domain,
                            ),
                          ),
                        }),
                        a.jsx(e, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:282:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "282",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%22%7D",
                          variant: "outline",
                          className: "w-full",
                          asChild: !0,
                          children: a.jsxs(x, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:283:18",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "283",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: "/app/metrics",
                            children: [
                              a.jsx(f, {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:284:20",
                                "data-lov-name": "Eye",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "284",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "Eye",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              o("dashboard.sections.view_details_by_domain"),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs(n, {
                  "data-lov-id":
                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:292:12",
                  "data-lov-name": "Card",
                  "data-component-path":
                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                  "data-component-line": "292",
                  "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: [
                    a.jsx(s, {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:293:14",
                      "data-lov-name": "CardHeader",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "293",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "CardHeader",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs(l, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:294:16",
                        "data-lov-name": "CardTitle",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "294",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content":
                          "%7B%22text%22%3A%22Insights%20Principais%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx(N, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:295:18",
                            "data-lov-name": "Zap",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "295",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Zap",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                            className: "w-5 h-5",
                          }),
                          "Insights Principais",
                        ],
                      }),
                    }),
                    a.jsxs(i, {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:299:14",
                      "data-lov-name": "CardContent",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "299",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-4%22%7D",
                      className: "space-y-4",
                      children: [
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:300:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "300",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-3%22%7D",
                          className: "space-y-3",
                          children: [
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:301:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "301",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-3%20bg-green-50%20border%20border-green-200%20rounded-lg%22%7D",
                              className:
                                "p-3 bg-green-50 border border-green-200 rounded-lg",
                              children: [
                                a.jsx("h4", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:302:20",
                                  "data-lov-name": "h4",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "302",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "h4",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22%F0%9F%8E%AF%20Crescimento%20Sustent%C3%A1vel%22%2C%22className%22%3A%22font-medium%20text-green-800%20mb-1%22%7D",
                                  className: "font-medium text-green-800 mb-1",
                                  children: "🎯 Crescimento Sustentável",
                                }),
                                a.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:303:20",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "303",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Receita%20cresceu%2018%25%20com%20margem%20saud%C3%A1vel%20de%2015.8%25%2C%20indicando%20crescimento%20sustent%C3%A1vel%22%2C%22className%22%3A%22text-sm%20text-green-700%22%7D",
                                  className: "text-sm text-green-700",
                                  children:
                                    "Receita cresceu 18% com margem saudável de 15.8%, indicando crescimento sustentável",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:308:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "308",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-3%20bg-blue-50%20border%20border-blue-200%20rounded-lg%22%7D",
                              className:
                                "p-3 bg-blue-50 border border-blue-200 rounded-lg",
                              children: [
                                a.jsx("h4", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:309:20",
                                  "data-lov-name": "h4",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "309",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "h4",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22%F0%9F%93%88%20Efici%C3%AAncia%20Operacional%22%2C%22className%22%3A%22font-medium%20text-blue-800%20mb-1%22%7D",
                                  className: "font-medium text-blue-800 mb-1",
                                  children: "📈 Eficiência Operacional",
                                }),
                                a.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:310:20",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "310",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Taxa%20de%20execu%C3%A7%C3%A3o%20de%2076%25%20mostra%20boa%20capacidade%20de%20entrega%20das%20iniciativas%22%2C%22className%22%3A%22text-sm%20text-blue-700%22%7D",
                                  className: "text-sm text-blue-700",
                                  children:
                                    "Taxa de execução de 76% mostra boa capacidade de entrega das iniciativas",
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:315:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "315",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-3%20bg-yellow-50%20border%20border-yellow-200%20rounded-lg%22%7D",
                              className:
                                "p-3 bg-yellow-50 border border-yellow-200 rounded-lg",
                              children: [
                                a.jsx("h4", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:316:20",
                                  "data-lov-name": "h4",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "316",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "h4",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22%E2%9A%A0%EF%B8%8F%20Aten%C3%A7%C3%A3o%20Estrat%C3%A9gica%22%2C%22className%22%3A%22font-medium%20text-yellow-800%20mb-1%22%7D",
                                  className: "font-medium text-yellow-800 mb-1",
                                  children: "⚠️ Atenção Estratégica",
                                }),
                                a.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:317:20",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "317",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Dom%C3%ADnio%20estrat%C3%A9gico%20precisa%20de%20aten%C3%A7%C3%A3o%3A%20taxa%20de%20iniciativas%20conclu%C3%ADdas%20abaixo%20da%20meta%22%2C%22className%22%3A%22text-sm%20text-yellow-700%22%7D",
                                  className: "text-sm text-yellow-700",
                                  children:
                                    "Domínio estratégico precisa de atenção: taxa de iniciativas concluídas abaixo da meta",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsx(e, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:323:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "323",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-full%22%7D",
                          variant: "outline",
                          className: "w-full",
                          asChild: !0,
                          children: a.jsxs(x, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:324:18",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "324",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: "/app/decision-panel",
                            children: [
                              a.jsx(r, {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:325:20",
                                "data-lov-name": "Target",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "325",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "Target",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              o("dashboard.sections.decision_panel"),
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
          a.jsxs(c, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:335:8",
            "data-lov-name": "TabsContent",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "335",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "domains",
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:336:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "336",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                className: "flex items-center justify-between",
                children: [
                  a.jsx("h2", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:337:12",
                    "data-lov-name": "h2",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "337",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                    className: "text-2xl font-bold",
                    children: o("dashboard.sections.metrics_by_domain"),
                  }),
                  a.jsx(e, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:338:12",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "338",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    asChild: !0,
                    children: a.jsxs(x, {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:339:14",
                      "data-lov-name": "Link",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "339",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "Link",
                      "data-component-content": "%7B%7D",
                      to: "/app/metrics",
                      children: [
                        o("dashboard.sections.view_complete_analytics"),
                        a.jsx(G, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:341:16",
                          "data-lov-name": "ArrowRight",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "341",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "ArrowRight",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20ml-2%22%7D",
                          className: "w-4 h-4 ml-2",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              a.jsx("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:346:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "346",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: A.map((t) =>
                  a.jsxs(
                    n,
                    {
                      "data-lov-id":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:348:14",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-line": "348",
                      "data-component-file":
                        "ConsolidatedDashboard-Atualizado.tsx",
                      "data-component-name": "Card",
                      "data-component-content":
                        "%7B%22className%22%3A%22card-hover%22%7D",
                      className: "card-hover",
                      children: [
                        a.jsx(s, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:349:16",
                          "data-lov-name": "CardHeader",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "349",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardHeader",
                          "data-component-content": "%7B%7D",
                          children: a.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:350:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "350",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                            className: "flex items-center justify-between",
                            children: a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:351:20",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "351",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                              className: "flex items-center gap-3",
                              children: [
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:352:22",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "352",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  className: `w-12 h-12 ${t.color} rounded-lg flex items-center justify-center`,
                                  children: a.jsx(t.icon, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:353:24",
                                    "data-lov-name": "domain.icon",
                                    "data-component-path":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-line": "353",
                                    "data-component-file":
                                      "ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-name": "domain.icon",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                                    className: "w-6 h-6 text-white",
                                  }),
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:355:22",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "355",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx(l, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:356:24",
                                      "data-lov-name": "CardTitle",
                                      "data-component-path":
                                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                      "data-component-line": "356",
                                      "data-component-file":
                                        "ConsolidatedDashboard-Atualizado.tsx",
                                      "data-component-name": "CardTitle",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-xl%22%7D",
                                      className: "text-xl",
                                      children: t.domain,
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:357:24",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                      "data-component-line": "357",
                                      "data-component-file":
                                        "ConsolidatedDashboard-Atualizado.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mt-1%22%7D",
                                      className: "flex items-center gap-2 mt-1",
                                      children: [
                                        a.jsx(g, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:358:26",
                                          "data-lov-name": "Badge",
                                          "data-component-path":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-line": "358",
                                          "data-component-file":
                                            "ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-name": "Badge",
                                          "data-component-content": "%7B%7D",
                                          className: C(t.status),
                                          children:
                                            t.status === "on-track"
                                              ? "No Caminho"
                                              : t.status === "at-risk"
                                                ? "Em Risco"
                                                : "Fora do Caminho",
                                        }),
                                        a.jsxs("span", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:362:26",
                                          "data-lov-name": "span",
                                          "data-component-path":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-line": "362",
                                          "data-component-file":
                                            "ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-name": "span",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Score%3A%20%2F100%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: [
                                            "Score: ",
                                            t.score,
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
                        a.jsxs(i, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:370:16",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "370",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: [
                            a.jsx(v, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:371:18",
                              "data-lov-name": "Progress",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "371",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "Progress",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-3%22%7D",
                              value: t.score,
                              className: "h-3",
                              indicatorClassName: b(t.score),
                            }),
                            a.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:378:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "378",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-3%22%7D",
                              className: "grid grid-cols-2 gap-3",
                              children: t.metrics.map((d, F) =>
                                a.jsxs(
                                  "div",
                                  {
                                    "data-lov-id":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:380:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-line": "380",
                                    "data-component-file":
                                      "ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22p-3%20bg-gray-50%20rounded-lg%22%7D",
                                    className: "p-3 bg-gray-50 rounded-lg",
                                    children: [
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:381:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "381",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-1%22%7D",
                                        className:
                                          "flex items-center justify-between mb-1",
                                        children: [
                                          a.jsx("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:382:26",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "382",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22text-sm%20font-medium%22%7D",
                                            className: "text-sm font-medium",
                                            children: d.name,
                                          }),
                                          a.jsxs("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:383:26",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "383",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22text%22%3A%22%25%22%7D",
                                            className: `text-xs ${E(d.health)}`,
                                            children: [
                                              d.trend > 0 ? "+" : "",
                                              d.trend,
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:387:24",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "387",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-lg%20font-bold%22%7D",
                                        className: "text-lg font-bold",
                                        children: d.value,
                                      }),
                                    ],
                                  },
                                  F,
                                ),
                              ),
                            }),
                            a.jsxs(e, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:392:18",
                              "data-lov-name": "Button",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "392",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "Button",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-full%22%7D",
                              variant: "outline",
                              size: "sm",
                              className: "w-full",
                              children: [
                                a.jsx(f, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:393:20",
                                  "data-lov-name": "Eye",
                                  "data-component-path":
                                    "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-line": "393",
                                  "data-component-file":
                                    "ConsolidatedDashboard-Atualizado.tsx",
                                  "data-component-name": "Eye",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                  className: "w-4 h-4 mr-2",
                                }),
                                o("common.view_details"),
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
            ],
          }),
          a.jsxs(c, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:403:8",
            "data-lov-name": "TabsContent",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "403",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "trends",
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:404:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "404",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                className: "flex items-center justify-between",
                children: [
                  a.jsx("h2", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:405:12",
                    "data-lov-name": "h2",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "405",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                    className: "text-2xl font-bold",
                    children: o("dashboard.sections.trends_analysis"),
                  }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:406:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "406",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                    className: "flex gap-2",
                    children: [
                      a.jsxs(e, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:407:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "407",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(Z, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:408:16",
                            "data-lov-name": "Calendar",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "408",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Calendar",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          o("dashboard.sections.period"),
                        ],
                      }),
                      a.jsxs(e, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:411:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "411",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(u, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:412:16",
                            "data-lov-name": "Download",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "412",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Download",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          o("common.export"),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:418:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "418",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:419:12",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "419",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(s, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:420:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "420",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(l, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:421:16",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "421",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Evolu%C3%A7%C3%A3o%20de%20Receita%20e%20Margem%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx(m, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:422:18",
                              "data-lov-name": "TrendingUp",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "422",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "TrendingUp",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Evolução de Receita e Margem",
                          ],
                        }),
                      }),
                      a.jsx(i, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:426:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "426",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content": "%7B%7D",
                        children: a.jsx("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:427:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "427",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: R.map((t, d) =>
                            a.jsxs(
                              "div",
                              {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:429:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "429",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20border%20rounded-lg%22%7D",
                                className:
                                  "flex items-center justify-between p-3 border rounded-lg",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:430:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-line": "430",
                                    "data-component-file":
                                      "ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                    className: "flex items-center gap-3",
                                    children: [
                                      a.jsx("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:431:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "431",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-8%20h-8%20bg-blue-100%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                                        className:
                                          "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center",
                                        children: a.jsx("span", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:432:26",
                                          "data-lov-name": "span",
                                          "data-component-path":
                                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-line": "432",
                                          "data-component-file":
                                            "ConsolidatedDashboard-Atualizado.tsx",
                                          "data-component-name": "span",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22text-sm%20font-bold%20text-blue-600%22%7D",
                                          className:
                                            "text-sm font-bold text-blue-600",
                                          children: t.period,
                                        }),
                                      }),
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:434:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "434",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          a.jsxs("p", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:435:26",
                                            "data-lov-name": "p",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "435",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "p",
                                            "data-component-content":
                                              "%7B%22text%22%3A%22R%24%20M%22%2C%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: [
                                              "R$",
                                              (t.revenue / 1e6).toFixed(1),
                                              "M",
                                            ],
                                          }),
                                          a.jsxs("p", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:436:26",
                                            "data-lov-name": "p",
                                            "data-component-path":
                                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-line": "436",
                                            "data-component-file":
                                              "ConsolidatedDashboard-Atualizado.tsx",
                                            "data-component-name": "p",
                                            "data-component-content":
                                              "%7B%22text%22%3A%22Margem%3A%20%25%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                            className:
                                              "text-sm text-muted-foreground",
                                            children: [
                                              "Margem: ",
                                              t.margin,
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:439:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-line": "439",
                                    "data-component-file":
                                      "ConsolidatedDashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-right%22%7D",
                                    className: "text-right",
                                    children: [
                                      a.jsx("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:440:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "440",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Score%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Score",
                                      }),
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:441:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-line": "441",
                                        "data-component-file":
                                          "ConsolidatedDashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%2F100%22%2C%22className%22%3A%22text-lg%20font-bold%22%7D",
                                        className: "text-lg font-bold",
                                        children: [t.score, "/100"],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              d,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:449:12",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "449",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(s, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:450:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "450",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(l, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:451:16",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "451",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Distribui%C3%A7%C3%A3o%20de%20Performance%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx(B, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:452:18",
                              "data-lov-name": "PieChart",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "452",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "PieChart",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Distribuição de Performance",
                          ],
                        }),
                      }),
                      a.jsx(i, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:456:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "456",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:457:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "457",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-center%20py-12%20text-muted-foreground%22%7D",
                          className: "text-center py-12 text-muted-foreground",
                          children: [
                            a.jsx(B, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:458:18",
                              "data-lov-name": "PieChart",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "458",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "PieChart",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-16%20h-16%20mx-auto%20mb-4%20opacity-50%22%7D",
                              className: "w-16 h-16 mx-auto mb-4 opacity-50",
                            }),
                            a.jsx("p", {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:459:18",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "459",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22text%22%3A%22Gr%C3%A1ficos%20de%20distribui%C3%A7%C3%A3o%20de%20performance%20por%20dom%C3%ADnio%22%7D",
                              children:
                                "Gráficos de distribuição de performance por domínio",
                            }),
                            a.jsx(e, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:460:18",
                              "data-lov-name": "Button",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "460",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "Button",
                              "data-component-content":
                                "%7B%22className%22%3A%22mt-4%22%7D",
                              className: "mt-4",
                              variant: "outline",
                              children: o(
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
          a.jsxs(c, {
            "data-lov-id":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:470:8",
            "data-lov-name": "TabsContent",
            "data-component-path":
              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
            "data-component-line": "470",
            "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "insights",
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:471:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "471",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                className: "flex items-center justify-between",
                children: [
                  a.jsx("h2", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:472:12",
                    "data-lov-name": "h2",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "472",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                    className: "text-2xl font-bold",
                    children: o("dashboard.sections.strategic_insights"),
                  }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:473:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "473",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                    className: "flex gap-2",
                    children: [
                      a.jsxs(e, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:474:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "474",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(Y, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:475:16",
                            "data-lov-name": "Settings",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "475",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Settings",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          o("common.settings"),
                        ],
                      }),
                      a.jsxs(e, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:478:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "478",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "Button",
                        "data-component-content":
                          "%7B%22text%22%3A%22Relat%C3%B3rio%22%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(u, {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:479:16",
                            "data-lov-name": "Download",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "479",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "Download",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          o("common.export"),
                          " Relatório",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:485:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                "data-component-line": "485",
                "data-component-file": "ConsolidatedDashboard-Atualizado.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-3%20gap-6%22%7D",
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:486:12",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "486",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(s, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:487:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "487",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(l, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:488:16",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "488",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Oportunidades%22%2C%22className%22%3A%22flex%20items-center%20gap-2%20text-green-600%22%7D",
                          className: "flex items-center gap-2 text-green-600",
                          children: [
                            a.jsx(m, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:489:18",
                              "data-lov-name": "TrendingUp",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "489",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "TrendingUp",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Oportunidades",
                          ],
                        }),
                      }),
                      a.jsxs(i, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:493:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "493",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:494:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "494",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-3%20bg-green-50%20rounded-lg%22%7D",
                            className: "p-3 bg-green-50 rounded-lg",
                            children: [
                              a.jsx("h4", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:495:18",
                                "data-lov-name": "h4",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "495",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "h4",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Expans%C3%A3o%20de%20Mercado%22%2C%22className%22%3A%22font-medium%20text-green-800%22%7D",
                                className: "font-medium text-green-800",
                                children: "Expansão de Mercado",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:496:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "496",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Pipeline%20crescente%2015%25%20indica%20oportunidade%20de%20expans%C3%A3o%22%2C%22className%22%3A%22text-sm%20text-green-700%20mt-1%22%7D",
                                className: "text-sm text-green-700 mt-1",
                                children:
                                  "Pipeline crescente 15% indica oportunidade de expansão",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:500:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "500",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-3%20bg-green-50%20rounded-lg%22%7D",
                            className: "p-3 bg-green-50 rounded-lg",
                            children: [
                              a.jsx("h4", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:501:18",
                                "data-lov-name": "h4",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "501",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "h4",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Efici%C3%AAncia%20Operacional%22%2C%22className%22%3A%22font-medium%20text-green-800%22%7D",
                                className: "font-medium text-green-800",
                                children: "Eficiência Operacional",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:502:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "502",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Ganhos%20de%204.3%25%20podem%20ser%20replicados%20em%20outras%20%C3%A1reas%22%2C%22className%22%3A%22text-sm%20text-green-700%20mt-1%22%7D",
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
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:509:12",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "509",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(s, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:510:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "510",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(l, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:511:16",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "511",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Riscos%22%2C%22className%22%3A%22flex%20items-center%20gap-2%20text-yellow-600%22%7D",
                          className: "flex items-center gap-2 text-yellow-600",
                          children: [
                            a.jsx(J, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:512:18",
                              "data-lov-name": "AlertTriangle",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "512",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "AlertTriangle",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Riscos",
                          ],
                        }),
                      }),
                      a.jsxs(i, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:516:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "516",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:517:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "517",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-3%20bg-yellow-50%20rounded-lg%22%7D",
                            className: "p-3 bg-yellow-50 rounded-lg",
                            children: [
                              a.jsx("h4", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:518:18",
                                "data-lov-name": "h4",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "518",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "h4",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Churn%20Elevado%22%2C%22className%22%3A%22font-medium%20text-yellow-800%22%7D",
                                className: "font-medium text-yellow-800",
                                children: "Churn Elevado",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:519:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "519",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Taxa%20de%204.2%25%20acima%20da%20meta%20de%203%25%22%2C%22className%22%3A%22text-sm%20text-yellow-700%20mt-1%22%7D",
                                className: "text-sm text-yellow-700 mt-1",
                                children: "Taxa de 4.2% acima da meta de 3%",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:523:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "523",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-3%20bg-yellow-50%20rounded-lg%22%7D",
                            className: "p-3 bg-yellow-50 rounded-lg",
                            children: [
                              a.jsx("h4", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:524:18",
                                "data-lov-name": "h4",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "524",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "h4",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Capacidade%20Limitada%22%2C%22className%22%3A%22font-medium%20text-yellow-800%22%7D",
                                className: "font-medium text-yellow-800",
                                children: "Capacidade Limitada",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:525:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "525",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Utiliza%C3%A7%C3%A3o%20de%2071%25%20pode%20limitar%20crescimento%22%2C%22className%22%3A%22text-sm%20text-yellow-700%20mt-1%22%7D",
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
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:532:12",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-line": "532",
                    "data-component-file":
                      "ConsolidatedDashboard-Atualizado.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(s, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:533:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "533",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs(l, {
                          "data-lov-id":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:534:16",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-line": "534",
                          "data-component-file":
                            "ConsolidatedDashboard-Atualizado.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22text%22%3A%22Recomenda%C3%A7%C3%B5es%22%2C%22className%22%3A%22flex%20items-center%20gap-2%20text-blue-600%22%7D",
                          className: "flex items-center gap-2 text-blue-600",
                          children: [
                            a.jsx(r, {
                              "data-lov-id":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:535:18",
                              "data-lov-name": "Target",
                              "data-component-path":
                                "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-line": "535",
                              "data-component-file":
                                "ConsolidatedDashboard-Atualizado.tsx",
                              "data-component-name": "Target",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                              className: "w-5 h-5",
                            }),
                            "Recomendações",
                          ],
                        }),
                      }),
                      a.jsxs(i, {
                        "data-lov-id":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:539:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-line": "539",
                        "data-component-file":
                          "ConsolidatedDashboard-Atualizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:540:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "540",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-3%20bg-blue-50%20rounded-lg%22%7D",
                            className: "p-3 bg-blue-50 rounded-lg",
                            children: [
                              a.jsx("h4", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:541:18",
                                "data-lov-name": "h4",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "541",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "h4",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Foco%20em%20Reten%C3%A7%C3%A3o%22%2C%22className%22%3A%22font-medium%20text-blue-800%22%7D",
                                className: "font-medium text-blue-800",
                                children: "Foco em Retenção",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:542:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "542",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Implementar%20programa%20de%20fideliza%C3%A7%C3%A3o%22%2C%22className%22%3A%22text-sm%20text-blue-700%20mt-1%22%7D",
                                className: "text-sm text-blue-700 mt-1",
                                children: "Implementar programa de fidelização",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:546:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-line": "546",
                            "data-component-file":
                              "ConsolidatedDashboard-Atualizado.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-3%20bg-blue-50%20rounded-lg%22%7D",
                            className: "p-3 bg-blue-50 rounded-lg",
                            children: [
                              a.jsx("h4", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:547:18",
                                "data-lov-name": "h4",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "547",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "h4",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Investimento%20em%20Capacidade%22%2C%22className%22%3A%22font-medium%20text-blue-800%22%7D",
                                className: "font-medium text-blue-800",
                                children: "Investimento em Capacidade",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx:548:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-line": "548",
                                "data-component-file":
                                  "ConsolidatedDashboard-Atualizado.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Planejar%20expans%C3%A3o%20operacional%22%2C%22className%22%3A%22text-sm%20text-blue-700%20mt-1%22%7D",
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
export { xa as default };
