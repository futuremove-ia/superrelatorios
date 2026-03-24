import { u as H, j as a, B as s } from "./index-BZzvAVnT.js";
import { r as N } from "./vendor-BgR6OOld.js";
import { C as c, b as d, c as l, a as i } from "./card-DCmFy9yX.js";
import { B as p } from "./badge-DMGJasfj.js";
import { K as x } from "./kpi-card-CWRTA62G.js";
import { T as M, a as q, b as m, c as r } from "./tabs-C6dO4E1n.js";
import { A as U, a as V } from "./alert-D4BI-VHt.js";
import { S as $, a as F, b as L, c as Z, d as D } from "./select-BPvc3et1.js";
import { P as g } from "./progress-Bi2Hl20I.js";
import { S as v } from "./separator-qS5yNAIC.js";
import {
  I as O,
  r as B,
  D as P,
  a1 as Q,
  T as j,
  L as G,
  S as J,
  d as A,
  b,
  h as W,
  Z as C,
  k as w,
  E as y,
  q as X,
  a as Y,
  $ as aa,
} from "./utils-C25gojUd.js";
import "./router-D2JcpG7e.js";
import "./index-DUaPDS5r.js";
import "./index-CIr2Jy9Y.js";
import "./index-Cda9Zv0V.js";
import "./index-DaXQxPyL.js";
const Pa = ({ className: _ }) => {
  const { t: e } = H(),
    [T, S] = N.useState("overview"),
    [I, k] = N.useState("current"),
    o = {
      id: "1",
      title: "Queda na Taxa de Conversão Comercial",
      description:
        "A taxa de conversão de vendas caiu 15% no último trimestre, impactando diretamente a receita e o crescimento market share.",
      urgency: "critical",
      impact: "Alto impacto financeiro e competitivo",
      timeframe: "Ação requerida em 30 dias",
      technicalTerm: "Sales Conversion Rate Decline",
      actionableTranslation: "Estamos perdendo vendas para concorrentes",
      metrics: [
        {
          label: "Taxa de Conversão",
          value: "12.3%",
          unit: "%",
          trend: "down",
          health: "critical",
        },
        {
          label: "CAC",
          value: 450,
          unit: "R$",
          trend: "up",
          health: "warning",
        },
        {
          label: "LTV",
          value: 2100,
          unit: "R$",
          trend: "stable",
          health: "good",
        },
        {
          label: "Pipeline",
          value: 850,
          unit: "leads",
          trend: "down",
          health: "warning",
        },
      ],
    },
    R = [
      {
        id: "1",
        title: "Otimização do Funil de Vendas",
        description:
          "Reestruturar processo comercial com foco nos pontos de gargalo identificados",
        expectedImpact: "Aumento de 25% na taxa de conversão",
        complexity: "medium",
        timeframe: "60 dias",
        confidence: 85,
        priority: "high",
        actions: [
          {
            title: "Análise do Funil",
            description: "Mapear pontos de abandono e identificar causas raiz",
            owner: "Time Comercial",
            deadline: "15 dias",
          },
          {
            title: "Treinamento Equipe",
            description: "Capacitar equipe em técnicas de fechamento",
            owner: "RH",
            deadline: "30 dias",
          },
          {
            title: "Ajuste de Processos",
            description: "Implementar melhorias no fluxo comercial",
            owner: "Operações",
            deadline: "45 dias",
          },
        ],
      },
      {
        id: "2",
        title: "Revisão de Preços e Ofertas",
        description:
          "Ajustar estratégia de precificação para melhor competitividade",
        expectedImpact: "Aumento de 10% no ticket médio",
        complexity: "low",
        timeframe: "30 dias",
        confidence: 75,
        priority: "medium",
        actions: [
          {
            title: "Análise Competitiva",
            description: "Benchmark de preços e ofertas do mercado",
            owner: "Marketing",
            deadline: "10 dias",
          },
          {
            title: "Teste A/B",
            description: "Testar novas faixas de preço",
            owner: "Produto",
            deadline: "20 dias",
          },
        ],
      },
      {
        id: "3",
        title: "Investimento em Marketing Digital",
        description: "Intensificar campanhas de geração de leads qualificados",
        expectedImpact: "Redução de 20% no CAC",
        complexity: "high",
        timeframe: "90 dias",
        confidence: 70,
        priority: "medium",
        actions: [
          {
            title: "Plano de Mídia",
            description: "Desenvolver estratégia de mídia paga",
            owner: "Marketing",
            deadline: "30 dias",
          },
          {
            title: "Otimização SEO",
            description: "Melhorar posicionamento orgânico",
            owner: "Marketing",
            deadline: "60 dias",
          },
        ],
      },
    ],
    z = (n) => {
      switch (n) {
        case "critical":
          return "bg-red-100 text-red-800";
        case "urgent":
          return "bg-orange-100 text-orange-800";
        case "important":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
    E = (n) => {
      switch (n) {
        case "high":
          return "bg-red-100 text-red-800";
        case "medium":
          return "bg-yellow-100 text-yellow-800";
        case "low":
          return "bg-green-100 text-green-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
    K = (n) => {
      switch (n) {
        case "low":
          return "bg-green-100 text-green-800";
        case "medium":
          return "bg-yellow-100 text-yellow-800";
        case "high":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
    h = (n) => {
      switch (n) {
        case "up":
          return a.jsx(A, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:205:24",
            "data-lov-name": "TrendingUp",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "205",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TrendingUp",
            "data-component-content":
              "%7B%22className%22%3A%22w-4%20h-4%20text-green-500%22%7D",
            className: "w-4 h-4 text-green-500",
          });
        case "down":
          return a.jsx(aa, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:206:26",
            "data-lov-name": "TrendingDown",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "206",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TrendingDown",
            "data-component-content":
              "%7B%22className%22%3A%22w-4%20h-4%20text-red-500%22%7D",
            className: "w-4 h-4 text-red-500",
          });
        default:
          return a.jsx("div", {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:207:22",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "207",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22w-4%20h-4%20bg-gray-300%20rounded-full%22%7D",
            className: "w-4 h-4 bg-gray-300 rounded-full",
          });
      }
    },
    f = (n) => {
      switch (n) {
        case "good":
          return "text-green-600";
        case "warning":
          return "text-yellow-600";
        case "critical":
          return "text-red-600";
        default:
          return "text-gray-600";
      }
    };
  return a.jsxs("div", {
    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:221:4",
    "data-lov-name": "div",
    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
    "data-component-line": "221",
    "data-component-file": "DecisionPanel.tsx",
    "data-component-name": "div",
    "data-component-content": "%7B%7D",
    className: `container-fluid space-y-8 py-6 ${_}`,
    children: [
      a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:223:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
        "data-component-line": "223",
        "data-component-file": "DecisionPanel.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D",
        className:
          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:224:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "224",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
            className: "flex items-center gap-3",
            children: [
              a.jsx("div", {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:225:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "225",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22p-2%20bg-blue-100%20rounded-lg%22%7D",
                className: "p-2 bg-blue-100 rounded-lg",
                children: a.jsx(O, {
                  "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:226:12",
                  "data-lov-name": "Brain",
                  "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                  "data-component-line": "226",
                  "data-component-file": "DecisionPanel.tsx",
                  "data-component-name": "Brain",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-6%20h-6%20text-blue-600%22%7D",
                  className: "w-6 h-6 text-blue-600",
                }),
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:228:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "228",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  a.jsx("h1", {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:229:12",
                    "data-lov-name": "h1",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "229",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "h1",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
                    className: "text-3xl font-bold text-foreground",
                    children: e("decision_panel.title"),
                  }),
                  a.jsx("p", {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:230:12",
                    "data-lov-name": "p",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "230",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                    className: "text-muted-foreground",
                    children: e("decision_panel.subtitle"),
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:234:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "234",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20gap-3%22%7D",
            className: "flex gap-3",
            children: [
              a.jsxs($, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:235:10",
                "data-lov-name": "Select",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "235",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "Select",
                "data-component-content": "%7B%7D",
                value: I,
                onValueChange: k,
                children: [
                  a.jsx(F, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:236:12",
                    "data-lov-name": "SelectTrigger",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "236",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "SelectTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-32%22%7D",
                    className: "w-32",
                    children: a.jsx(L, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:237:14",
                      "data-lov-name": "SelectValue",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "237",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "SelectValue",
                      "data-component-content": "%7B%7D",
                    }),
                  }),
                  a.jsxs(Z, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:239:12",
                    "data-lov-name": "SelectContent",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "239",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "SelectContent",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(D, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:240:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "240",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "current",
                        children: e("decision_panel.period.current"),
                      }),
                      a.jsx(D, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:241:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "241",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "last_month",
                        children: e("decision_panel.period.last_month"),
                      }),
                      a.jsx(D, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:242:14",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "242",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "quarter",
                        children: e("decision_panel.period.quarter"),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(s, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:246:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "246",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                size: "sm",
                children: [
                  a.jsx(B, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:247:12",
                    "data-lov-name": "Filter",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "247",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "Filter",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  e("decision_panel.actions.filters"),
                ],
              }),
              a.jsxs(s, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:251:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "251",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                size: "sm",
                children: [
                  a.jsx(P, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:252:12",
                    "data-lov-name": "Download",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "252",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "Download",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  e("decision_panel.actions.export"),
                ],
              }),
              a.jsxs(s, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:256:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "256",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                size: "sm",
                children: [
                  a.jsx(Q, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:257:12",
                    "data-lov-name": "RefreshCw",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "257",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "RefreshCw",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  e("decision_panel.actions.refresh"),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs(U, {
        "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:264:6",
        "data-lov-name": "Alert",
        "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
        "data-component-line": "264",
        "data-component-file": "DecisionPanel.tsx",
        "data-component-name": "Alert",
        "data-component-content":
          "%7B%22className%22%3A%22border-red-200%20bg-red-50%22%7D",
        className: "border-red-200 bg-red-50",
        children: [
          a.jsx(j, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:265:8",
            "data-lov-name": "AlertTriangle",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "265",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "AlertTriangle",
            "data-component-content":
              "%7B%22className%22%3A%22h-4%20w-4%20text-red-600%22%7D",
            className: "h-4 w-4 text-red-600",
          }),
          a.jsxs(V, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:266:8",
            "data-lov-name": "AlertDescription",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "266",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "AlertDescription",
            "data-component-content":
              "%7B%22className%22%3A%22text-red-800%22%7D",
            className: "text-red-800",
            children: [
              a.jsx("strong", {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:267:10",
                "data-lov-name": "strong",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "267",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "strong",
                "data-component-content": "%7B%7D",
                children: e("decision_panel.alert.critical_detected"),
              }),
              " ",
              o.title,
              a.jsx(s, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:268:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "268",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22p-0%20h-auto%20ml-2%20text-red-600%22%7D",
                variant: "link",
                size: "sm",
                className: "p-0 h-auto ml-2 text-red-600",
                children: e("decision_panel.alert.analyze_now"),
              }),
            ],
          }),
        ],
      }),
      a.jsxs(M, {
        "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:275:6",
        "data-lov-name": "Tabs",
        "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
        "data-component-line": "275",
        "data-component-file": "DecisionPanel.tsx",
        "data-component-name": "Tabs",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        value: T,
        onValueChange: S,
        className: "space-y-6",
        children: [
          a.jsxs(q, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:276:8",
            "data-lov-name": "TabsList",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "276",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TabsList",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20w-full%20grid-cols-4%22%7D",
            className: "grid w-full grid-cols-4",
            children: [
              a.jsx(m, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:277:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "277",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "overview",
                children: e("decision_panel.tabs.overview"),
              }),
              a.jsx(m, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:278:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "278",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "situation",
                children: e("decision_panel.tabs.situation"),
              }),
              a.jsx(m, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:279:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "279",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "recommendations",
                children: e("decision_panel.tabs.recommendations"),
              }),
              a.jsx(m, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:280:10",
                "data-lov-name": "TabsTrigger",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "280",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "TabsTrigger",
                "data-component-content": "%7B%7D",
                value: "actions",
                children: e("decision_panel.tabs.actions"),
              }),
            ],
          }),
          a.jsx(r, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:284:8",
            "data-lov-name": "TabsContent",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "284",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "overview",
            className: "space-y-6",
            children: a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:285:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
              "data-component-line": "285",
              "data-component-file": "DecisionPanel.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-3%20gap-6%22%7D",
              className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
              children: [
                a.jsxs(c, {
                  "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:287:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                  "data-component-line": "287",
                  "data-component-file": "DecisionPanel.tsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22lg%3Acol-span-2%22%7D",
                  className: "lg:col-span-2",
                  children: [
                    a.jsx(d, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:288:14",
                      "data-lov-name": "CardHeader",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "288",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "CardHeader",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs(l, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:289:16",
                        "data-lov-name": "CardTitle",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "289",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx(j, {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:290:18",
                            "data-lov-name": "AlertTriangle",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "290",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "AlertTriangle",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-5%20h-5%20text-red-600%22%7D",
                            className: "w-5 h-5 text-red-600",
                          }),
                          e("decision_panel.situation.priority_title"),
                        ],
                      }),
                    }),
                    a.jsxs(i, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:294:14",
                      "data-lov-name": "CardContent",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "294",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-4%22%7D",
                      className: "space-y-4",
                      children: [
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:295:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "295",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx("h3", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:296:18",
                              "data-lov-name": "h3",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "296",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "h3",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-lg%20font-semibold%20text-red-800%20mb-2%22%7D",
                              className:
                                "text-lg font-semibold text-red-800 mb-2",
                              children: o.title,
                            }),
                            a.jsx("p", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:299:18",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "299",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-muted-foreground%20mb-4%22%7D",
                              className: "text-muted-foreground mb-4",
                              children: o.description,
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:303:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "303",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:304:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "304",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:305:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "305",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Urg%C3%AAncia%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: "Urgência",
                                    }),
                                    a.jsx("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:306:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "306",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22mt-1%22%7D",
                                      className: "mt-1",
                                      children: a.jsx(p, {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:307:24",
                                        "data-lov-name": "Badge",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "307",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "Badge",
                                        "data-component-content": "%7B%7D",
                                        className: z(o.urgency),
                                        children: "Crítica",
                                      }),
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:313:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "313",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:314:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "314",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Impacto%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: "Impacto",
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:315:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "315",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-medium%22%7D",
                                      className: "font-medium",
                                      children: o.impact,
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:317:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "317",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:318:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "318",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Prazo%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: "Prazo",
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:319:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "319",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-medium%22%7D",
                                      className: "font-medium",
                                      children: o.timeframe,
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:321:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "321",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:322:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "322",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Tradu%C3%A7%C3%A3o%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: "Tradução",
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:323:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "323",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-medium%22%7D",
                                      className: "font-medium",
                                      children: o.actionableTranslation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsx(v, {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:328:16",
                          "data-lov-name": "Separator",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "328",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "Separator",
                          "data-component-content": "%7B%7D",
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:330:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "330",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx("h4", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:331:18",
                              "data-lov-name": "h4",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "331",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "h4",
                              "data-component-content":
                                "%7B%22className%22%3A%22font-semibold%20mb-3%22%7D",
                              className: "font-semibold mb-3",
                              children: e(
                                "decision_panel.situation.metrics_title",
                              ),
                            }),
                            a.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:332:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "332",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-3%22%7D",
                              className: "grid grid-cols-2 gap-3",
                              children: o.metrics.map((n, t) =>
                                a.jsxs(
                                  "div",
                                  {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:334:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "334",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20bg-gray-50%20rounded-lg%22%7D",
                                    className:
                                      "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                                    children: [
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:335:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "335",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          a.jsx("p", {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:336:26",
                                            "data-lov-name": "p",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "336",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "p",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22text-sm%20font-medium%22%7D",
                                            className: "text-sm font-medium",
                                            children: n.label,
                                          }),
                                          a.jsxs("p", {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:337:26",
                                            "data-lov-name": "p",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "337",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "p",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22text-lg%20font-bold%22%7D",
                                            className: "text-lg font-bold",
                                            children: [n.value, n.unit],
                                          }),
                                        ],
                                      }),
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:339:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "339",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-right%22%7D",
                                        className: "text-right",
                                        children: [
                                          h(n.trend),
                                          a.jsx(p, {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:341:26",
                                            "data-lov-name": "Badge",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "341",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "Badge",
                                            "data-component-content": "%7B%7D",
                                            variant: "outline",
                                            className: `text-xs ${f(n.health)}`,
                                            children: n.health,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:356:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                  "data-component-line": "356",
                  "data-component-file": "DecisionPanel.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-4%22%7D",
                  className: "space-y-4",
                  children: [
                    a.jsx(x, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:357:14",
                      "data-lov-name": "KPICard",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "357",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "KPICard",
                      "data-component-content": "%7B%7D",
                      title: e("decision_panel.kpi.recommendations"),
                      value: "3",
                      icon: G,
                      variant: "info",
                      subtitle: e(
                        "decision_panel.kpi.recommendations_subtitle",
                      ),
                    }),
                    a.jsx(x, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:365:14",
                      "data-lov-name": "KPICard",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "365",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "KPICard",
                      "data-component-content": "%7B%7D",
                      title: e("decision_panel.kpi.average_confidence"),
                      value: "77%",
                      icon: J,
                      variant: "success",
                      subtitle: e(
                        "decision_panel.kpi.average_confidence_subtitle",
                      ),
                    }),
                    a.jsx(x, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:373:14",
                      "data-lov-name": "KPICard",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "373",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "KPICard",
                      "data-component-content": "%7B%7D",
                      title: e("decision_panel.kpi.expected_impact"),
                      value: "R$125K",
                      icon: A,
                      variant: "success",
                      subtitle: e(
                        "decision_panel.kpi.expected_impact_subtitle",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          a.jsx(r, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:385:8",
            "data-lov-name": "TabsContent",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "385",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "situation",
            className: "space-y-6",
            children: a.jsxs(c, {
              "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:386:10",
              "data-lov-name": "Card",
              "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
              "data-component-line": "386",
              "data-component-file": "DecisionPanel.tsx",
              "data-component-name": "Card",
              "data-component-content": "%7B%7D",
              children: [
                a.jsx(d, {
                  "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:387:12",
                  "data-lov-name": "CardHeader",
                  "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                  "data-component-line": "387",
                  "data-component-file": "DecisionPanel.tsx",
                  "data-component-name": "CardHeader",
                  "data-component-content": "%7B%7D",
                  children: a.jsxs(l, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:388:14",
                    "data-lov-name": "CardTitle",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "388",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "CardTitle",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx(b, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:389:16",
                        "data-lov-name": "Target",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "389",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "Target",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                        className: "w-5 h-5",
                      }),
                      e("decision_panel.situation.detailed_analysis"),
                    ],
                  }),
                }),
                a.jsxs(i, {
                  "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:393:12",
                  "data-lov-name": "CardContent",
                  "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                  "data-component-line": "393",
                  "data-component-file": "DecisionPanel.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  className: "space-y-6",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:394:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "394",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx("h3", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:395:16",
                          "data-lov-name": "h3",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "395",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-lg%20font-semibold%20mb-3%22%7D",
                          className: "text-lg font-semibold mb-3",
                          children: e(
                            "decision_panel.situation.technical_context",
                          ),
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:396:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "396",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22p-4%20bg-blue-50%20rounded-lg%22%7D",
                          className: "p-4 bg-blue-50 rounded-lg",
                          children: [
                            a.jsxs("p", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:397:18",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "397",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-blue-800%22%7D",
                              className: "text-blue-800",
                              children: [
                                a.jsxs("strong", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:398:20",
                                  "data-lov-name": "strong",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "398",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "strong",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22%3A%22%7D",
                                  children: [
                                    e(
                                      "decision_panel.situation.technical_context",
                                    ),
                                    ":",
                                  ],
                                }),
                                " ",
                                o.technicalTerm,
                              ],
                            }),
                            a.jsxs("p", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:400:18",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "400",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-blue-700%20mt-2%22%7D",
                              className: "text-blue-700 mt-2",
                              children: [
                                a.jsxs("strong", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:401:20",
                                  "data-lov-name": "strong",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "401",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "strong",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22%3A%22%7D",
                                  children: [
                                    e(
                                      "decision_panel.situation.actionable_translation",
                                    ),
                                    ":",
                                  ],
                                }),
                                " ",
                                o.actionableTranslation,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:406:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "406",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx("h3", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:407:16",
                          "data-lov-name": "h3",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "407",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-lg%20font-semibold%20mb-3%22%7D",
                          className: "text-lg font-semibold mb-3",
                          children: e(
                            "decision_panel.situation.metrics_analysis",
                          ),
                        }),
                        a.jsx("div", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:408:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "408",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: o.metrics.map((n, t) =>
                            a.jsxs(
                              "div",
                              {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:410:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "410",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-4%20border%20rounded-lg%22%7D",
                                className:
                                  "flex items-center justify-between p-4 border rounded-lg",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:411:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "411",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex-1%22%7D",
                                    className: "flex-1",
                                    children: [
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:412:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "412",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-2%22%7D",
                                        className:
                                          "flex items-center gap-3 mb-2",
                                        children: [
                                          a.jsx("h4", {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:413:26",
                                            "data-lov-name": "h4",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "413",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "h4",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: n.label,
                                          }),
                                          h(n.trend),
                                          a.jsx(p, {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:415:26",
                                            "data-lov-name": "Badge",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "415",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "Badge",
                                            "data-component-content": "%7B%7D",
                                            className: f(n.health),
                                            children: n.health,
                                          }),
                                        ],
                                      }),
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:419:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "419",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                                        className: "text-2xl font-bold",
                                        children: [n.value, n.unit],
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:424:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "424",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-right%22%7D",
                                    className: "text-right",
                                    children: [
                                      a.jsx(g, {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:425:24",
                                        "data-lov-name": "Progress",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "425",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "Progress",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-20%20h-2%22%7D",
                                        value:
                                          n.health === "good"
                                            ? 80
                                            : n.health === "warning"
                                              ? 50
                                              : 20,
                                        className: "w-20 h-2",
                                      }),
                                      a.jsxs("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:429:24",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "429",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Score%3A%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%20mt-1%22%7D",
                                        className:
                                          "text-xs text-muted-foreground mt-1",
                                        children: [
                                          "Score: ",
                                          n.health === "good"
                                            ? "80%"
                                            : n.health === "warning"
                                              ? "50%"
                                              : "20%",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:438:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "438",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx("h3", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:439:16",
                          "data-lov-name": "h3",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "439",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-lg%20font-semibold%20mb-3%22%7D",
                          className: "text-lg font-semibold mb-3",
                          children: e(
                            "decision_panel.situation.crossed_impact",
                          ),
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:440:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "440",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%22%7D",
                          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                          children: [
                            a.jsx(c, {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:441:18",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "441",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "Card",
                              "data-component-content": "%7B%7D",
                              children: a.jsxs(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:442:20",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "442",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content":
                                  "%7B%22className%22%3A%22p-4%20text-center%22%7D",
                                className: "p-4 text-center",
                                children: [
                                  a.jsx(W, {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:443:22",
                                    "data-lov-name": "Users",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "443",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "Users",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-blue-600%22%7D",
                                    className:
                                      "w-8 h-8 mx-auto mb-2 text-blue-600",
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:444:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "444",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Equipe%20Comercial%22%2C%22className%22%3A%22font-medium%22%7D",
                                    className: "font-medium",
                                    children: "Equipe Comercial",
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:445:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "445",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Afetada%20diretamente%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                    className: "text-sm text-muted-foreground",
                                    children: "Afetada diretamente",
                                  }),
                                ],
                              }),
                            }),
                            a.jsx(c, {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:449:18",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "449",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "Card",
                              "data-component-content": "%7B%7D",
                              children: a.jsxs(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:450:20",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "450",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content":
                                  "%7B%22className%22%3A%22p-4%20text-center%22%7D",
                                className: "p-4 text-center",
                                children: [
                                  a.jsx(C, {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:451:22",
                                    "data-lov-name": "Zap",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "451",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "Zap",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-orange-600%22%7D",
                                    className:
                                      "w-8 h-8 mx-auto mb-2 text-orange-600",
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:452:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "452",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Receita%22%2C%22className%22%3A%22font-medium%22%7D",
                                    className: "font-medium",
                                    children: "Receita",
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:453:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "453",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Impacto%20de%20R%2445K%2Fm%C3%AAs%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                    className: "text-sm text-muted-foreground",
                                    children: "Impacto de R$45K/mês",
                                  }),
                                ],
                              }),
                            }),
                            a.jsx(c, {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:457:18",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "457",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "Card",
                              "data-component-content": "%7B%7D",
                              children: a.jsxs(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:458:20",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "458",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content":
                                  "%7B%22className%22%3A%22p-4%20text-center%22%7D",
                                className: "p-4 text-center",
                                children: [
                                  a.jsx(w, {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:459:22",
                                    "data-lov-name": "Clock",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "459",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "Clock",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-red-600%22%7D",
                                    className:
                                      "w-8 h-8 mx-auto mb-2 text-red-600",
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:460:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "460",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Tempo%22%2C%22className%22%3A%22font-medium%22%7D",
                                    className: "font-medium",
                                    children: "Tempo",
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:461:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "461",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22A%C3%A7%C3%A3o%20em%2030%20dias%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                    className: "text-sm text-muted-foreground",
                                    children: "Ação em 30 dias",
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
          }),
          a.jsxs(r, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:471:8",
            "data-lov-name": "TabsContent",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "471",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "recommendations",
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:472:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "472",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                className: "flex items-center justify-between",
                children: [
                  a.jsx("h2", {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:473:12",
                    "data-lov-name": "h2",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "473",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                    className: "text-2xl font-bold",
                    children: e("decision_panel.recommendations.title"),
                  }),
                  a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:474:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "474",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                    className: "flex gap-2",
                    children: [
                      a.jsxs(s, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:475:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "475",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(B, {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:476:16",
                            "data-lov-name": "Filter",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "476",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "Filter",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          e("decision_panel.recommendations.filter"),
                        ],
                      }),
                      a.jsxs(s, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:479:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "479",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "outline",
                        size: "sm",
                        children: [
                          a.jsx(P, {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:480:16",
                            "data-lov-name": "Download",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "480",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "Download",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          e("decision_panel.recommendations.export"),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("div", {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:486:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "486",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                className: "space-y-6",
                children: R.map((n) =>
                  a.jsxs(
                    c,
                    {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:488:14",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "488",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "Card",
                      "data-component-content":
                        "%7B%22className%22%3A%22card-hover%22%7D",
                      className: "card-hover",
                      children: [
                        a.jsx(d, {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:489:16",
                          "data-lov-name": "CardHeader",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "489",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "CardHeader",
                          "data-component-content": "%7B%7D",
                          children: a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:490:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "490",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20items-start%20justify-between%22%7D",
                            className: "flex items-start justify-between",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:491:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "491",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex-1%22%7D",
                                className: "flex-1",
                                children: [
                                  a.jsx(l, {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:492:22",
                                    "data-lov-name": "CardTitle",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "492",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "CardTitle",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-xl%20mb-2%22%7D",
                                    className: "text-xl mb-2",
                                    children: n.title,
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:493:22",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "493",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                                    className: "text-muted-foreground",
                                    children: n.description,
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:495:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "495",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                                className: "flex gap-2",
                                children: [
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:496:22",
                                    "data-lov-name": "Badge",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "496",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "Badge",
                                    "data-component-content": "%7B%7D",
                                    className: E(n.priority),
                                    children:
                                      n.priority === "high"
                                        ? "Alta"
                                        : n.priority === "medium"
                                          ? "Média"
                                          : "Baixa",
                                  }),
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\DecisionPanel.tsx:500:22",
                                    "data-lov-name": "Badge",
                                    "data-component-path":
                                      "src\\pages\\app\\DecisionPanel.tsx",
                                    "data-component-line": "500",
                                    "data-component-file": "DecisionPanel.tsx",
                                    "data-component-name": "Badge",
                                    "data-component-content": "%7B%7D",
                                    className: K(n.complexity),
                                    children:
                                      n.complexity === "high"
                                        ? "Alta"
                                        : n.complexity === "medium"
                                          ? "Média"
                                          : "Baixa",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        a.jsxs(i, {
                          "data-lov-id":
                            "src\\pages\\app\\DecisionPanel.tsx:507:16",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\DecisionPanel.tsx",
                          "data-component-line": "507",
                          "data-component-file": "DecisionPanel.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: [
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:508:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "508",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%22%7D",
                              className:
                                "grid grid-cols-1 md:grid-cols-3 gap-4",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:509:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "509",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:510:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "510",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e(
                                        "decision_panel.recommendations.expected_impact",
                                      ),
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:511:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "511",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-semibold%22%7D",
                                      className: "font-semibold",
                                      children: n.expectedImpact,
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:513:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "513",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:514:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "514",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e(
                                        "decision_panel.recommendations.timeframe",
                                      ),
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:515:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "515",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-semibold%22%7D",
                                      className: "font-semibold",
                                      children: n.timeframe,
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:517:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "517",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:518:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "518",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: e(
                                        "decision_panel.recommendations.confidence",
                                      ),
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:519:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "519",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                      className: "flex items-center gap-2",
                                      children: [
                                        a.jsx(g, {
                                          "data-lov-id":
                                            "src\\pages\\app\\DecisionPanel.tsx:520:24",
                                          "data-lov-name": "Progress",
                                          "data-component-path":
                                            "src\\pages\\app\\DecisionPanel.tsx",
                                          "data-component-line": "520",
                                          "data-component-file":
                                            "DecisionPanel.tsx",
                                          "data-component-name": "Progress",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex-1%20h-2%22%7D",
                                          value: n.confidence,
                                          className: "flex-1 h-2",
                                        }),
                                        a.jsxs("span", {
                                          "data-lov-id":
                                            "src\\pages\\app\\DecisionPanel.tsx:521:24",
                                          "data-lov-name": "span",
                                          "data-component-path":
                                            "src\\pages\\app\\DecisionPanel.tsx",
                                          "data-component-line": "521",
                                          "data-component-file":
                                            "DecisionPanel.tsx",
                                          "data-component-name": "span",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22%25%22%2C%22className%22%3A%22text-sm%20font-medium%22%7D",
                                          className: "text-sm font-medium",
                                          children: [n.confidence, "%"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx(v, {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:526:18",
                              "data-lov-name": "Separator",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "526",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "Separator",
                              "data-component-content": "%7B%7D",
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:528:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "528",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "div",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx("h4", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:529:20",
                                  "data-lov-name": "h4",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "529",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "h4",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22font-semibold%20mb-3%22%7D",
                                  className: "font-semibold mb-3",
                                  children: e(
                                    "decision_panel.recommendations.actions_title",
                                  ),
                                }),
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:530:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "530",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22space-y-3%22%7D",
                                  className: "space-y-3",
                                  children: n.actions.map((t, u) =>
                                    a.jsxs(
                                      "div",
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\DecisionPanel.tsx:532:24",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\DecisionPanel.tsx",
                                        "data-component-line": "532",
                                        "data-component-file":
                                          "DecisionPanel.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-start%20gap-3%20p-3%20bg-gray-50%20rounded-lg%22%7D",
                                        className:
                                          "flex items-start gap-3 p-3 bg-gray-50 rounded-lg",
                                        children: [
                                          a.jsx("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:533:26",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "533",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-6%20h-6%20bg-blue-100%20text-blue-600%20rounded-full%20flex%20items-center%20justify-center%20text-sm%20font-medium%22%7D",
                                            className:
                                              "w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium",
                                            children: u + 1,
                                          }),
                                          a.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\DecisionPanel.tsx:536:26",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\DecisionPanel.tsx",
                                            "data-component-line": "536",
                                            "data-component-file":
                                              "DecisionPanel.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex-1%22%7D",
                                            className: "flex-1",
                                            children: [
                                              a.jsx("h5", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\DecisionPanel.tsx:537:28",
                                                "data-lov-name": "h5",
                                                "data-component-path":
                                                  "src\\pages\\app\\DecisionPanel.tsx",
                                                "data-component-line": "537",
                                                "data-component-file":
                                                  "DecisionPanel.tsx",
                                                "data-component-name": "h5",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22font-medium%22%7D",
                                                className: "font-medium",
                                                children: t.title,
                                              }),
                                              a.jsx("p", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\DecisionPanel.tsx:538:28",
                                                "data-lov-name": "p",
                                                "data-component-path":
                                                  "src\\pages\\app\\DecisionPanel.tsx",
                                                "data-component-line": "538",
                                                "data-component-file":
                                                  "DecisionPanel.tsx",
                                                "data-component-name": "p",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                                className:
                                                  "text-sm text-muted-foreground",
                                                children: t.description,
                                              }),
                                              a.jsxs("div", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\DecisionPanel.tsx:539:28",
                                                "data-lov-name": "div",
                                                "data-component-path":
                                                  "src\\pages\\app\\DecisionPanel.tsx",
                                                "data-component-line": "539",
                                                "data-component-file":
                                                  "DecisionPanel.tsx",
                                                "data-component-name": "div",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22flex%20gap-4%20mt-2%20text-sm%22%7D",
                                                className:
                                                  "flex gap-4 mt-2 text-sm",
                                                children: [
                                                  t.owner &&
                                                    a.jsxs("span", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\DecisionPanel.tsx:541:32",
                                                      "data-lov-name": "span",
                                                      "data-component-path":
                                                        "src\\pages\\app\\DecisionPanel.tsx",
                                                      "data-component-line":
                                                        "541",
                                                      "data-component-file":
                                                        "DecisionPanel.tsx",
                                                      "data-component-name":
                                                        "span",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      children: [
                                                        a.jsxs("strong", {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\DecisionPanel.tsx:541:38",
                                                          "data-lov-name":
                                                            "strong",
                                                          "data-component-path":
                                                            "src\\pages\\app\\DecisionPanel.tsx",
                                                          "data-component-line":
                                                            "541",
                                                          "data-component-file":
                                                            "DecisionPanel.tsx",
                                                          "data-component-name":
                                                            "strong",
                                                          "data-component-content":
                                                            "%7B%22text%22%3A%22%3A%22%7D",
                                                          children: [
                                                            e(
                                                              "decision_panel.recommendations.responsible",
                                                            ),
                                                            ":",
                                                          ],
                                                        }),
                                                        " ",
                                                        t.owner,
                                                      ],
                                                    }),
                                                  t.deadline &&
                                                    a.jsxs("span", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\DecisionPanel.tsx:544:32",
                                                      "data-lov-name": "span",
                                                      "data-component-path":
                                                        "src\\pages\\app\\DecisionPanel.tsx",
                                                      "data-component-line":
                                                        "544",
                                                      "data-component-file":
                                                        "DecisionPanel.tsx",
                                                      "data-component-name":
                                                        "span",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      children: [
                                                        a.jsxs("strong", {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\DecisionPanel.tsx:544:38",
                                                          "data-lov-name":
                                                            "strong",
                                                          "data-component-path":
                                                            "src\\pages\\app\\DecisionPanel.tsx",
                                                          "data-component-line":
                                                            "544",
                                                          "data-component-file":
                                                            "DecisionPanel.tsx",
                                                          "data-component-name":
                                                            "strong",
                                                          "data-component-content":
                                                            "%7B%22text%22%3A%22%3A%22%7D",
                                                          children: [
                                                            e(
                                                              "decision_panel.recommendations.deadline",
                                                            ),
                                                            ":",
                                                          ],
                                                        }),
                                                        " ",
                                                        t.deadline,
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      u,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\DecisionPanel.tsx:553:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\DecisionPanel.tsx",
                              "data-component-line": "553",
                              "data-component-file": "DecisionPanel.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                              className: "flex gap-2",
                              children: [
                                a.jsxs(s, {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:554:20",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "554",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex-1%22%7D",
                                  className: "flex-1",
                                  children: [
                                    a.jsx(y, {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:555:22",
                                      "data-lov-name": "Eye",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "555",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "Eye",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    e(
                                      "decision_panel.recommendations.view_details",
                                    ),
                                  ],
                                }),
                                a.jsxs(s, {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:558:20",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "558",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content": "%7B%7D",
                                  variant: "outline",
                                  children: [
                                    a.jsx(X, {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:559:22",
                                      "data-lov-name": "ArrowRight",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "559",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "ArrowRight",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    e(
                                      "decision_panel.recommendations.implement",
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              }),
            ],
          }),
          a.jsxs(r, {
            "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:570:8",
            "data-lov-name": "TabsContent",
            "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
            "data-component-line": "570",
            "data-component-file": "DecisionPanel.tsx",
            "data-component-name": "TabsContent",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: "actions",
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:571:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "571",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                className: "flex items-center justify-between",
                children: [
                  a.jsx("h2", {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:572:12",
                    "data-lov-name": "h2",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "572",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                    className: "text-2xl font-bold",
                    children: e("decision_panel.action_plan.title"),
                  }),
                  a.jsxs(s, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:573:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "573",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(P, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:574:14",
                        "data-lov-name": "Download",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "574",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "Download",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      e("decision_panel.action_plan.export_plan"),
                    ],
                  }),
                ],
              }),
              a.jsxs(c, {
                "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:579:10",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                "data-component-line": "579",
                "data-component-file": "DecisionPanel.tsx",
                "data-component-name": "Card",
                "data-component-content": "%7B%7D",
                children: [
                  a.jsx(d, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:580:12",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "580",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content": "%7B%7D",
                    children: a.jsx(l, {
                      "data-lov-id":
                        "src\\pages\\app\\DecisionPanel.tsx:581:14",
                      "data-lov-name": "CardTitle",
                      "data-component-path":
                        "src\\pages\\app\\DecisionPanel.tsx",
                      "data-component-line": "581",
                      "data-component-file": "DecisionPanel.tsx",
                      "data-component-name": "CardTitle",
                      "data-component-content": "%7B%7D",
                      children: e("decision_panel.action_plan.summary_title"),
                    }),
                  }),
                  a.jsxs(i, {
                    "data-lov-id": "src\\pages\\app\\DecisionPanel.tsx:583:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\DecisionPanel.tsx",
                    "data-component-line": "583",
                    "data-component-file": "DecisionPanel.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-6%22%7D",
                    className: "space-y-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:584:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "584",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-6%22%7D",
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:585:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "585",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-center%22%7D",
                            className: "text-center",
                            children: [
                              a.jsx("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:586:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "586",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-16%20h-16%20bg-blue-100%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-3%22%7D",
                                className:
                                  "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3",
                                children: a.jsx(C, {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:587:20",
                                  "data-lov-name": "Zap",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "587",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "Zap",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-8%20h-8%20text-blue-600%22%7D",
                                  className: "w-8 h-8 text-blue-600",
                                }),
                              }),
                              a.jsx("h3", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:589:18",
                                "data-lov-name": "h3",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "589",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "h3",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-semibold%20mb-1%22%7D",
                                className: "font-semibold mb-1",
                                children: e(
                                  "decision_panel.action_plan.immediate_actions",
                                ),
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:590:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "590",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%225%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-blue-600%22%7D",
                                className: "text-2xl font-bold text-blue-600",
                                children: "5",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:591:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "591",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                className: "text-sm text-muted-foreground",
                                children: e(
                                  "decision_panel.action_plan.immediate_actions_desc",
                                ),
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:594:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "594",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-center%22%7D",
                            className: "text-center",
                            children: [
                              a.jsx("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:595:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "595",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-16%20h-16%20bg-orange-100%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-3%22%7D",
                                className:
                                  "w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3",
                                children: a.jsx(w, {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:596:20",
                                  "data-lov-name": "Clock",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "596",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "Clock",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-8%20h-8%20text-orange-600%22%7D",
                                  className: "w-8 h-8 text-orange-600",
                                }),
                              }),
                              a.jsx("h3", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:598:18",
                                "data-lov-name": "h3",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "598",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "h3",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-semibold%20mb-1%22%7D",
                                className: "font-semibold mb-1",
                                children: e(
                                  "decision_panel.action_plan.medium_term_actions",
                                ),
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:599:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "599",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%228%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-orange-600%22%7D",
                                className: "text-2xl font-bold text-orange-600",
                                children: "8",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:600:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "600",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                className: "text-sm text-muted-foreground",
                                children: e(
                                  "decision_panel.action_plan.medium_term_actions_desc",
                                ),
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:603:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "603",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-center%22%7D",
                            className: "text-center",
                            children: [
                              a.jsx("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:604:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "604",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-16%20h-16%20bg-green-100%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-3%22%7D",
                                className:
                                  "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3",
                                children: a.jsx(Y, {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:605:20",
                                  "data-lov-name": "CheckCircle",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "605",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "CheckCircle",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-8%20h-8%20text-green-600%22%7D",
                                  className: "w-8 h-8 text-green-600",
                                }),
                              }),
                              a.jsx("h3", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:607:18",
                                "data-lov-name": "h3",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "607",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "h3",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-semibold%20mb-1%22%7D",
                                className: "font-semibold mb-1",
                                children: e(
                                  "decision_panel.action_plan.expected_impact",
                                ),
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:608:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "608",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22text%22%3A%22R%24125K%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-green-600%22%7D",
                                className: "text-2xl font-bold text-green-600",
                                children: "R$125K",
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:609:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "609",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                className: "text-sm text-muted-foreground",
                                children: e(
                                  "decision_panel.action_plan.expected_impact_desc",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsx(v, {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:613:14",
                        "data-lov-name": "Separator",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "613",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "Separator",
                        "data-component-content": "%7B%7D",
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:615:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "615",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx("h3", {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:616:16",
                            "data-lov-name": "h3",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "616",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "h3",
                            "data-component-content":
                              "%7B%22className%22%3A%22font-semibold%20mb-4%22%7D",
                            className: "font-semibold mb-4",
                            children: e(
                              "decision_panel.action_plan.implementation_timeline",
                            ),
                          }),
                          a.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:617:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "617",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-4%22%7D",
                            className: "space-y-4",
                            children: [
                              {
                                phase: "Análise",
                                actions: 2,
                                timeframe: "15 dias",
                                status: "ready",
                              },
                              {
                                phase: "Planejamento",
                                actions: 3,
                                timeframe: "30 dias",
                                status: "pending",
                              },
                              {
                                phase: "Execução",
                                actions: 5,
                                timeframe: "60 dias",
                                status: "pending",
                              },
                              {
                                phase: "Monitoramento",
                                actions: 3,
                                timeframe: "90 dias",
                                status: "pending",
                              },
                            ].map((n, t) =>
                              a.jsxs(
                                "div",
                                {
                                  "data-lov-id":
                                    "src\\pages\\app\\DecisionPanel.tsx:624:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\DecisionPanel.tsx",
                                  "data-component-line": "624",
                                  "data-component-file": "DecisionPanel.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                                  className: "flex items-center gap-4",
                                  children: [
                                    a.jsx("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:625:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "625",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "div",
                                      "data-component-content": "%7B%7D",
                                      className: `w-3 h-3 rounded-full ${n.status === "ready" ? "bg-green-500" : "bg-gray-300"}`,
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\DecisionPanel.tsx:628:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\DecisionPanel.tsx",
                                      "data-component-line": "628",
                                      "data-component-file":
                                        "DecisionPanel.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex-1%22%7D",
                                      className: "flex-1",
                                      children: [
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\DecisionPanel.tsx:629:24",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\DecisionPanel.tsx",
                                          "data-component-line": "629",
                                          "data-component-file":
                                            "DecisionPanel.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-1%22%7D",
                                          className:
                                            "flex items-center justify-between mb-1",
                                          children: [
                                            a.jsx("h4", {
                                              "data-lov-id":
                                                "src\\pages\\app\\DecisionPanel.tsx:630:26",
                                              "data-lov-name": "h4",
                                              "data-component-path":
                                                "src\\pages\\app\\DecisionPanel.tsx",
                                              "data-component-line": "630",
                                              "data-component-file":
                                                "DecisionPanel.tsx",
                                              "data-component-name": "h4",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22font-medium%22%7D",
                                              className: "font-medium",
                                              children: n.phase,
                                            }),
                                            a.jsx("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\DecisionPanel.tsx:631:26",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\DecisionPanel.tsx",
                                              "data-component-line": "631",
                                              "data-component-file":
                                                "DecisionPanel.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                              className:
                                                "text-sm text-muted-foreground",
                                              children: n.timeframe,
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\DecisionPanel.tsx:633:24",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\DecisionPanel.tsx",
                                          "data-component-line": "633",
                                          "data-component-file":
                                            "DecisionPanel.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                                          className: "flex items-center gap-4",
                                          children: [
                                            a.jsxs("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\DecisionPanel.tsx:634:26",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\DecisionPanel.tsx",
                                              "data-component-line": "634",
                                              "data-component-file":
                                                "DecisionPanel.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22a%C3%A7%C3%B5es%22%2C%22className%22%3A%22text-sm%22%7D",
                                              className: "text-sm",
                                              children: [n.actions, " ações"],
                                            }),
                                            a.jsx(g, {
                                              "data-lov-id":
                                                "src\\pages\\app\\DecisionPanel.tsx:635:26",
                                              "data-lov-name": "Progress",
                                              "data-component-path":
                                                "src\\pages\\app\\DecisionPanel.tsx",
                                              "data-component-line": "635",
                                              "data-component-file":
                                                "DecisionPanel.tsx",
                                              "data-component-name": "Progress",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex-1%20h-2%22%7D",
                                              value:
                                                n.status === "ready" ? 100 : 0,
                                              className: "flex-1 h-2",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\DecisionPanel.tsx:646:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\DecisionPanel.tsx",
                        "data-component-line": "646",
                        "data-component-file": "DecisionPanel.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                        className: "flex gap-3",
                        children: [
                          a.jsxs(s, {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:647:16",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "647",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex-1%22%7D",
                            className: "flex-1",
                            size: "lg",
                            children: [
                              a.jsx(b, {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:648:18",
                                "data-lov-name": "Target",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "648",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "Target",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              e(
                                "decision_panel.action_plan.start_implementation",
                              ),
                            ],
                          }),
                          a.jsxs(s, {
                            "data-lov-id":
                              "src\\pages\\app\\DecisionPanel.tsx:651:16",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\DecisionPanel.tsx",
                            "data-component-line": "651",
                            "data-component-file": "DecisionPanel.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%7D",
                            variant: "outline",
                            size: "lg",
                            children: [
                              a.jsx(y, {
                                "data-lov-id":
                                  "src\\pages\\app\\DecisionPanel.tsx:652:18",
                                "data-lov-name": "Eye",
                                "data-component-path":
                                  "src\\pages\\app\\DecisionPanel.tsx",
                                "data-component-line": "652",
                                "data-component-file": "DecisionPanel.tsx",
                                "data-component-name": "Eye",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              e("decision_panel.action_plan.view_details"),
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
export { Pa as default };
