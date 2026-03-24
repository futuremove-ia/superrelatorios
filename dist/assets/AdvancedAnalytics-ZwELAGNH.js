import { u as q, j as a, B as n } from "./index-BZzvAVnT.js";
import { r as f } from "./vendor-BgR6OOld.js";
import { C as d, b as u, c as N, a as s } from "./card-DCmFy9yX.js";
import { B as c } from "./badge-DMGJasfj.js";
import { K as L } from "./kpi-card-CWRTA62G.js";
import { T as O, a as H, b as p, c as l } from "./tabs-C6dO4E1n.js";
import { P as A } from "./progress-Bi2Hl20I.js";
import { S as K, a as G, b as $, c as U, d as B } from "./select-BPvc3et1.js";
import { S as o } from "./skeleton-CjN6GZmr.js";
import { A as Q, a as Y } from "./alert-D4BI-VHt.js";
import { S as J } from "./separator-qS5yNAIC.js";
import { a as W, u as X } from "./useCrossDomainAnalytics-DL7eraVZ.js";
import { L as Z } from "./router-D2JcpG7e.js";
import {
  I as r,
  r as v,
  D as i,
  a1 as _,
  a as aa,
  T as j,
  d as w,
  E as m,
  q as ta,
  b as x,
  Y as na,
  A as ea,
} from "./utils-C25gojUd.js";
import "./index-DUaPDS5r.js";
import "./index-CIr2Jy9Y.js";
import "./index-Cda9Zv0V.js";
import "./index-DaXQxPyL.js";
import "./useQuery-fq0IAKu-.js";
const Ca = () => {
  q();
  const [T, S] = f.useState("quarter"),
    [P, V] = f.useState("overview");
  f.useState(["finance", "commercial", "operations", "strategy"]);
  const { analytics: ca, isLoading: E } = W("default-org"),
    { values: da, isLoading: z } = X("default-org"),
    I = E || z,
    M = [
      {
        title: "Score de Saúde Geral",
        value: "82/100",
        icon: ea,
        trend: { value: 5, isPositive: !0, label: "vs. trimestre anterior" },
        variant: "success",
        subtitle: "Performance consolidada",
      },
      {
        title: "Correlações Cruzadas",
        value: "12",
        icon: r,
        trend: { value: 3, isPositive: !0, label: "novas insights" },
        variant: "info",
        subtitle: "Relacionamentos identificados",
      },
      {
        title: "Métricas Críticas",
        value: "3",
        icon: j,
        trend: { value: -1, isPositive: !1, label: "vs. trimestre anterior" },
        variant: "warning",
        subtitle: "Requerem atenção",
      },
      {
        title: "Previsões Geradas",
        value: "8",
        icon: w,
        trend: { value: 0, isPositive: !0, label: "estáveis" },
        variant: "info",
        subtitle: "Modelos ativos",
      },
    ],
    R = [
      {
        sourceMetric: "Sales Conversion Rate",
        targetMetric: "Net Profit Margin",
        correlation: 0.75,
        confidence: 0.85,
        impact: "high",
        description: "Maior conversão impacta diretamente a margem",
      },
      {
        sourceMetric: "Operational Efficiency",
        targetMetric: "Customer Satisfaction",
        correlation: 0.68,
        confidence: 0.72,
        impact: "medium",
        description: "Eficiência operacional melhora satisfação",
      },
      {
        sourceMetric: "Marketing Spend",
        targetMetric: "Customer Acquisition Cost",
        correlation: -0.82,
        confidence: 0.9,
        impact: "high",
        description: "Aumento de marketing eleva CAC",
      },
      {
        sourceMetric: "Employee Engagement",
        targetMetric: "Product Quality",
        correlation: 0.71,
        confidence: 0.78,
        impact: "medium",
        description: "Equipes engajadas produzem melhor qualidade",
      },
    ],
    D = [
      {
        metric: "Net Profit Margin",
        currentValue: 15.8,
        predictedValue: 17.2,
        confidence: 85,
        timeframe: "Próximos 3 meses",
        trend: "up",
        factors: ["Aumento da conversão", "Redução de custos operacionais"],
      },
      {
        metric: "Customer Acquisition Cost",
        currentValue: 320,
        predictedValue: 295,
        confidence: 78,
        timeframe: "Próximos 2 meses",
        trend: "down",
        factors: ["Otimização de campanhas", "Melhoria qualificação leads"],
      },
      {
        metric: "Operational Efficiency",
        currentValue: 76.8,
        predictedValue: 81.5,
        confidence: 82,
        timeframe: "Próximos 6 meses",
        trend: "up",
        factors: ["Automação de processos", "Treinamento equipe"],
      },
      {
        metric: "Churn Rate",
        currentValue: 4.2,
        predictedValue: 3.8,
        confidence: 75,
        timeframe: "Próximos 4 meses",
        trend: "down",
        factors: ["Programa de fidelização", "Melhoria suporte"],
      },
    ],
    C = [
      {
        type: "opportunity",
        title: "Oportunidade de Crescimento",
        description:
          "Correlação forte entre eficiência operacional e satisfação do cliente sugere investimento em otimização",
        impact: "Alto",
        confidence: 85,
        actions: [
          "Analisar gargalos operacionais",
          "Implementar melhorias",
          "Medir impacto",
        ],
      },
      {
        type: "risk",
        title: "Risco de Aumento de CAC",
        description:
          "Tendência de aumento no custo de aquisição sem melhoria proporcional na conversão",
        impact: "Médio",
        confidence: 78,
        actions: [
          "Revisar estratégia de marketing",
          "Otimizar canais",
          "Aumentar qualificação",
        ],
      },
      {
        type: "optimization",
        title: "Otimização de Recursos",
        description:
          "Realocação de recursos de marketing para retenção pode reduzir churn e aumentar LTV",
        impact: "Alto",
        confidence: 72,
        actions: ["Calcular ROI", "Testar alocação", "Monitorar resultados"],
      },
    ],
    b = [
      {
        metric: "Sales Conversion Rate",
        date: "2024-03-10",
        expectedValue: 14.7,
        actualValue: 8.2,
        severity: "high",
        description: "Queda abrupta na conversão sem causa aparente",
      },
      {
        metric: "Operational Efficiency",
        date: "2024-03-08",
        expectedValue: 76.8,
        actualValue: 65.3,
        severity: "medium",
        description: "Redução temporária na eficiência operacional",
      },
      {
        metric: "Customer Lifetime Value",
        date: "2024-03-05",
        expectedValue: 2100,
        actualValue: 2450,
        severity: "low",
        description: "Aumento positivo inesperado no LTV",
      },
    ],
    k = (t) =>
      t > 0.7
        ? "text-green-600"
        : t > 0.3
          ? "text-blue-600"
          : t > -0.3
            ? "text-gray-600"
            : t > -0.7
              ? "text-orange-600"
              : "text-red-600",
    g = (t) => {
      switch (t) {
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
    F = (t) => {
      switch (t) {
        case "high":
          return "bg-red-100 text-red-800";
        case "medium":
          return "bg-yellow-100 text-yellow-800";
        case "low":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };
  return I
    ? a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:256:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
        "data-component-line": "256",
        "data-component-file": "AdvancedAnalytics.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
        className: "container-fluid space-y-8 py-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:257:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
            "data-component-line": "257",
            "data-component-file": "AdvancedAnalytics.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
            className: "flex items-center justify-between",
            children: [
              a.jsx(o, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:258:10",
                "data-lov-name": "Skeleton",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "258",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "Skeleton",
                "data-component-content":
                  "%7B%22className%22%3A%22h-10%20w-64%22%7D",
                className: "h-10 w-64",
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:259:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "259",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                className: "flex gap-3",
                children: [
                  a.jsx(o, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:260:12",
                    "data-lov-name": "Skeleton",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "260",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "Skeleton",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-10%20w-32%22%7D",
                    className: "h-10 w-32",
                  }),
                  a.jsx(o, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:261:12",
                    "data-lov-name": "Skeleton",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "261",
                    "data-component-file": "AdvancedAnalytics.tsx",
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
            "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:265:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
            "data-component-line": "265",
            "data-component-file": "AdvancedAnalytics.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            children: [1, 2, 3, 4].map((t) =>
              a.jsx(
                o,
                {
                  "data-lov-id":
                    "src\\pages\\app\\AdvancedAnalytics.tsx:267:12",
                  "data-lov-name": "Skeleton",
                  "data-component-path":
                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                  "data-component-line": "267",
                  "data-component-file": "AdvancedAnalytics.tsx",
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
            "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:271:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
            "data-component-line": "271",
            "data-component-file": "AdvancedAnalytics.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: [
              a.jsx(o, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:272:10",
                "data-lov-name": "Skeleton",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "272",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "Skeleton",
                "data-component-content":
                  "%7B%22className%22%3A%22h-6%20w-48%22%7D",
                className: "h-6 w-48",
              }),
              a.jsx("div", {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:273:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "273",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [1, 2].map((t) =>
                  a.jsx(
                    o,
                    {
                      "data-lov-id":
                        "src\\pages\\app\\AdvancedAnalytics.tsx:275:14",
                      "data-lov-name": "Skeleton",
                      "data-component-path":
                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                      "data-component-line": "275",
                      "data-component-file": "AdvancedAnalytics.tsx",
                      "data-component-name": "Skeleton",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-64%20rounded-xl%22%7D",
                      className: "h-64 rounded-xl",
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
        "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:284:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
        "data-component-line": "284",
        "data-component-file": "AdvancedAnalytics.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
        className: "container-fluid space-y-8 py-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:286:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
            "data-component-line": "286",
            "data-component-file": "AdvancedAnalytics.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D",
            className:
              "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:287:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "287",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:288:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "288",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-2%20bg-gradient-to-r%20from-purple-500%20to-blue-500%20rounded-lg%22%7D",
                    className:
                      "p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg",
                    children: a.jsx(r, {
                      "data-lov-id":
                        "src\\pages\\app\\AdvancedAnalytics.tsx:289:12",
                      "data-lov-name": "Brain",
                      "data-component-path":
                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                      "data-component-line": "289",
                      "data-component-file": "AdvancedAnalytics.tsx",
                      "data-component-name": "Brain",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-6%20h-6%20text-white%22%7D",
                      className: "w-6 h-6 text-white",
                    }),
                  }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:291:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "291",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx("h1", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:292:12",
                        "data-lov-name": "h1",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "292",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "h1",
                        "data-component-content":
                          "%7B%22text%22%3A%22Analytics%20Avan%C3%A7ados%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
                        className: "text-3xl font-bold text-foreground",
                        children: "Analytics Avançados",
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:293:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "293",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22text%22%3A%22An%C3%A1lise%20preditiva%20e%20insights%20inteligentes%22%2C%22className%22%3A%22text-muted-foreground%22%7D",
                        className: "text-muted-foreground",
                        children: "Análise preditiva e insights inteligentes",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:297:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "297",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                className: "flex gap-3",
                children: [
                  a.jsxs(K, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:298:10",
                    "data-lov-name": "Select",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "298",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "Select",
                    "data-component-content": "%7B%7D",
                    value: T,
                    onValueChange: S,
                    children: [
                      a.jsx(G, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:299:12",
                        "data-lov-name": "SelectTrigger",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "299",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "SelectTrigger",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-32%22%7D",
                        className: "w-32",
                        children: a.jsx($, {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:300:14",
                          "data-lov-name": "SelectValue",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "300",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "SelectValue",
                          "data-component-content": "%7B%7D",
                        }),
                      }),
                      a.jsxs(U, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:302:12",
                        "data-lov-name": "SelectContent",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "302",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "SelectContent",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(B, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:303:14",
                            "data-lov-name": "SelectItem",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "303",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "SelectItem",
                            "data-component-content":
                              "%7B%22text%22%3A%22M%C3%AAs%22%7D",
                            value: "month",
                            children: "Mês",
                          }),
                          a.jsx(B, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:304:14",
                            "data-lov-name": "SelectItem",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "304",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "SelectItem",
                            "data-component-content":
                              "%7B%22text%22%3A%22Trimestre%22%7D",
                            value: "quarter",
                            children: "Trimestre",
                          }),
                          a.jsx(B, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:305:14",
                            "data-lov-name": "SelectItem",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "305",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "SelectItem",
                            "data-component-content":
                              "%7B%22text%22%3A%22Ano%22%7D",
                            value: "year",
                            children: "Ano",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:309:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "309",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Filtros%22%7D",
                    variant: "outline",
                    size: "sm",
                    children: [
                      a.jsx(v, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:310:12",
                        "data-lov-name": "Filter",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "310",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "Filter",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      "Filtros",
                    ],
                  }),
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:314:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "314",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Exportar%22%7D",
                    variant: "outline",
                    size: "sm",
                    children: [
                      a.jsx(i, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:315:12",
                        "data-lov-name": "Download",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "315",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "Download",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      "Exportar",
                    ],
                  }),
                  a.jsxs(n, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:319:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "319",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22text%22%3A%22Atualizar%22%7D",
                    variant: "outline",
                    size: "sm",
                    children: [
                      a.jsx(_, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:320:12",
                        "data-lov-name": "RefreshCw",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "320",
                        "data-component-file": "AdvancedAnalytics.tsx",
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
            "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:327:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
            "data-component-line": "327",
            "data-component-file": "AdvancedAnalytics.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            children: M.map((t, e) =>
              a.jsx(
                L,
                {
                  "data-lov-id":
                    "src\\pages\\app\\AdvancedAnalytics.tsx:329:10",
                  "data-lov-name": "KPICard",
                  "data-component-path":
                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                  "data-component-line": "329",
                  "data-component-file": "AdvancedAnalytics.tsx",
                  "data-component-name": "KPICard",
                  "data-component-content": "%7B%7D",
                  title: t.title,
                  value: t.value,
                  icon: t.icon,
                  trend: t.trend,
                  variant: t.variant,
                  subtitle: t.subtitle,
                },
                e,
              ),
            ),
          }),
          a.jsxs(O, {
            "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:342:6",
            "data-lov-name": "Tabs",
            "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
            "data-component-line": "342",
            "data-component-file": "AdvancedAnalytics.tsx",
            "data-component-name": "Tabs",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            value: P,
            onValueChange: V,
            className: "space-y-6",
            children: [
              a.jsxs(H, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:343:8",
                "data-lov-name": "TabsList",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "343",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "TabsList",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20w-full%20grid-cols-5%22%7D",
                className: "grid w-full grid-cols-5",
                children: [
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:344:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "344",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22text%22%3A%22Vis%C3%A3o%20Geral%22%7D",
                    value: "overview",
                    children: "Visão Geral",
                  }),
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:345:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "345",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22text%22%3A%22Correla%C3%A7%C3%B5es%22%7D",
                    value: "correlations",
                    children: "Correlações",
                  }),
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:346:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "346",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22text%22%3A%22Previs%C3%B5es%22%7D",
                    value: "predictions",
                    children: "Previsões",
                  }),
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:347:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "347",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22text%22%3A%22Insights%22%7D",
                    value: "insights",
                    children: "Insights",
                  }),
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:348:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "348",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content":
                      "%7B%22text%22%3A%22Anomalias%22%7D",
                    value: "anomalies",
                    children: "Anomalias",
                  }),
                ],
              }),
              a.jsx(l, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:352:8",
                "data-lov-name": "TabsContent",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "352",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                value: "overview",
                className: "space-y-6",
                children: a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\AdvancedAnalytics.tsx:353:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                  "data-component-line": "353",
                  "data-component-file": "AdvancedAnalytics.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: [
                    a.jsxs(d, {
                      "data-lov-id":
                        "src\\pages\\app\\AdvancedAnalytics.tsx:355:12",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                      "data-component-line": "355",
                      "data-component-file": "AdvancedAnalytics.tsx",
                      "data-component-name": "Card",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(u, {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:356:14",
                          "data-lov-name": "CardHeader",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "356",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "CardHeader",
                          "data-component-content": "%7B%7D",
                          children: a.jsxs(N, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:357:16",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "357",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22text%22%3A%22Resumo%20Anal%C3%ADtico%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx(r, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:358:18",
                                "data-lov-name": "Brain",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "358",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Brain",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                className: "w-5 h-5",
                              }),
                              "Resumo Analítico",
                            ],
                          }),
                        }),
                        a.jsxs(s, {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:362:14",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "362",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: [
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:363:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "363",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22space-y-3%22%7D",
                              className: "space-y-3",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:364:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "364",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20bg-green-50%20rounded-lg%22%7D",
                                  className:
                                    "flex items-center justify-between p-3 bg-green-50 rounded-lg",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:365:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "365",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                      className: "flex items-center gap-3",
                                      children: [
                                        a.jsx(aa, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:366:22",
                                          "data-lov-name": "CheckCircle",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "366",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "CheckCircle",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-5%20h-5%20text-green-600%22%7D",
                                          className: "w-5 h-5 text-green-600",
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:367:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "367",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content": "%7B%7D",
                                          children: [
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:368:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "368",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22Performance%20Saud%C3%A1vel%22%2C%22className%22%3A%22font-medium%20text-green-800%22%7D",
                                              className:
                                                "font-medium text-green-800",
                                              children: "Performance Saudável",
                                            }),
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:369:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "369",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22Score%20de%2082%2F100%20acima%20da%20meta%22%2C%22className%22%3A%22text-sm%20text-green-700%22%7D",
                                              className:
                                                "text-sm text-green-700",
                                              children:
                                                "Score de 82/100 acima da meta",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsx(c, {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:372:20",
                                      "data-lov-name": "Badge",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "372",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "Badge",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22%2B5%25%22%2C%22className%22%3A%22bg-green-100%20text-green-800%22%7D",
                                      className: "bg-green-100 text-green-800",
                                      children: "+5%",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:375:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "375",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20bg-blue-50%20rounded-lg%22%7D",
                                  className:
                                    "flex items-center justify-between p-3 bg-blue-50 rounded-lg",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:376:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "376",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                      className: "flex items-center gap-3",
                                      children: [
                                        a.jsx(r, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:377:22",
                                          "data-lov-name": "Brain",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "377",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Brain",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-5%20h-5%20text-blue-600%22%7D",
                                          className: "w-5 h-5 text-blue-600",
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:378:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "378",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content": "%7B%7D",
                                          children: [
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:379:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "379",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22text%22%3A%2212%20Correla%C3%A7%C3%B5es%22%2C%22className%22%3A%22font-medium%20text-blue-800%22%7D",
                                              className:
                                                "font-medium text-blue-800",
                                              children: "12 Correlações",
                                            }),
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:380:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "380",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22Novos%20insights%20descobertos%22%2C%22className%22%3A%22text-sm%20text-blue-700%22%7D",
                                              className:
                                                "text-sm text-blue-700",
                                              children:
                                                "Novos insights descobertos",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsx(c, {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:383:20",
                                      "data-lov-name": "Badge",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "383",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "Badge",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22%2B3%22%2C%22className%22%3A%22bg-blue-100%20text-blue-800%22%7D",
                                      className: "bg-blue-100 text-blue-800",
                                      children: "+3",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:386:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "386",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20bg-yellow-50%20rounded-lg%22%7D",
                                  className:
                                    "flex items-center justify-between p-3 bg-yellow-50 rounded-lg",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:387:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "387",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                      className: "flex items-center gap-3",
                                      children: [
                                        a.jsx(j, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:388:22",
                                          "data-lov-name": "AlertTriangle",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "388",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name":
                                            "AlertTriangle",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-5%20h-5%20text-yellow-600%22%7D",
                                          className: "w-5 h-5 text-yellow-600",
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:389:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "389",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content": "%7B%7D",
                                          children: [
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:390:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "390",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22text%22%3A%223%20M%C3%A9tricas%20Cr%C3%ADticas%22%2C%22className%22%3A%22font-medium%20text-yellow-800%22%7D",
                                              className:
                                                "font-medium text-yellow-800",
                                              children: "3 Métricas Críticas",
                                            }),
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:391:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "391",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22Requerem%20aten%C3%A7%C3%A3o%20imediata%22%2C%22className%22%3A%22text-sm%20text-yellow-700%22%7D",
                                              className:
                                                "text-sm text-yellow-700",
                                              children:
                                                "Requerem atenção imediata",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsx(c, {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:394:20",
                                      "data-lov-name": "Badge",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "394",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "Badge",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22-1%22%2C%22className%22%3A%22bg-yellow-100%20text-yellow-800%22%7D",
                                      className:
                                        "bg-yellow-100 text-yellow-800",
                                      children: "-1",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx(J, {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:398:16",
                              "data-lov-name": "Separator",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "398",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "Separator",
                              "data-component-content": "%7B%7D",
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:400:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "400",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22space-y-3%22%7D",
                              className: "space-y-3",
                              children: [
                                a.jsx("h4", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:401:18",
                                  "data-lov-name": "h4",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "401",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "h4",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Top%20Insights%22%2C%22className%22%3A%22font-semibold%22%7D",
                                  className: "font-semibold",
                                  children: "Top Insights",
                                }),
                                C.slice(0, 2).map((t, e) =>
                                  a.jsxs(
                                    "div",
                                    {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:403:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "403",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-start%20gap-3%20p-3%20border%20rounded-lg%22%7D",
                                      className:
                                        "flex items-start gap-3 p-3 border rounded-lg",
                                      children: [
                                        a.jsx(t.icon, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:404:22",
                                          "data-lov-name": "insight.icon",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "404",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "insight.icon",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-5%20h-5%20text-blue-600%20mt-1%22%7D",
                                          className:
                                            "w-5 h-5 text-blue-600 mt-1",
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:405:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "405",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex-1%22%7D",
                                          className: "flex-1",
                                          children: [
                                            a.jsx("h5", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:406:24",
                                              "data-lov-name": "h5",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "406",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "h5",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22font-medium%22%7D",
                                              className: "font-medium",
                                              children: t.title,
                                            }),
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:407:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "407",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20line-clamp-2%22%7D",
                                              className:
                                                "text-sm text-muted-foreground line-clamp-2",
                                              children: t.description,
                                            }),
                                            a.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:410:24",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "410",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mt-2%22%7D",
                                              className:
                                                "flex items-center gap-2 mt-2",
                                              children: [
                                                a.jsx(c, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\AdvancedAnalytics.tsx:411:26",
                                                  "data-lov-name": "Badge",
                                                  "data-component-path":
                                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                                  "data-component-line": "411",
                                                  "data-component-file":
                                                    "AdvancedAnalytics.tsx",
                                                  "data-component-name":
                                                    "Badge",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  className: g(t.impact),
                                                  children: t.impact,
                                                }),
                                                a.jsxs("span", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\AdvancedAnalytics.tsx:414:26",
                                                  "data-lov-name": "span",
                                                  "data-component-path":
                                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                                  "data-component-line": "414",
                                                  "data-component-file":
                                                    "AdvancedAnalytics.tsx",
                                                  "data-component-name": "span",
                                                  "data-component-content":
                                                    "%7B%22text%22%3A%22%25%20confian%C3%A7a%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                                  className:
                                                    "text-xs text-muted-foreground",
                                                  children: [
                                                    t.confidence,
                                                    "% confiança",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs(d, {
                      "data-lov-id":
                        "src\\pages\\app\\AdvancedAnalytics.tsx:426:12",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                      "data-component-line": "426",
                      "data-component-file": "AdvancedAnalytics.tsx",
                      "data-component-name": "Card",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(u, {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:427:14",
                          "data-lov-name": "CardHeader",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "427",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "CardHeader",
                          "data-component-content": "%7B%7D",
                          children: a.jsxs(N, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:428:16",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "428",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22text%22%3A%22Previs%C3%B5es%20em%20Destaque%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx(w, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:429:18",
                                "data-lov-name": "TrendingUp",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "429",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "TrendingUp",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                className: "w-5 h-5",
                              }),
                              "Previsões em Destaque",
                            ],
                          }),
                        }),
                        a.jsxs(s, {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:433:14",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "433",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: [
                            D.slice(0, 3).map((t, e) =>
                              a.jsxs(
                                "div",
                                {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:435:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "435",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22p-3%20border%20rounded-lg%22%7D",
                                  className: "p-3 border rounded-lg",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:436:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "436",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-2%22%7D",
                                      className:
                                        "flex items-center justify-between mb-2",
                                      children: [
                                        a.jsx("h5", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:437:22",
                                          "data-lov-name": "h5",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "437",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "h5",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22font-medium%22%7D",
                                          className: "font-medium",
                                          children: t.metric,
                                        }),
                                        a.jsx(c, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:438:22",
                                          "data-lov-name": "Badge",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "438",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Badge",
                                          "data-component-content": "%7B%7D",
                                          className:
                                            t.trend === "up"
                                              ? "bg-green-100 text-green-800"
                                              : "bg-blue-100 text-blue-800",
                                          children:
                                            t.trend === "up" ? "↗" : "↘",
                                        }),
                                      ],
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:443:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "443",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%20mb-2%22%7D",
                                      className: "grid grid-cols-2 gap-4 mb-2",
                                      children: [
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:444:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "444",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content": "%7B%7D",
                                          children: [
                                            a.jsx("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:445:24",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "445",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22Atual%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                              className:
                                                "text-xs text-muted-foreground",
                                              children: "Atual",
                                            }),
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:446:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "446",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22font-bold%22%7D",
                                              className: "font-bold",
                                              children: t.currentValue,
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:448:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "448",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content": "%7B%7D",
                                          children: [
                                            a.jsx("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:449:24",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "449",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22Previsto%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                              className:
                                                "text-xs text-muted-foreground",
                                              children: "Previsto",
                                            }),
                                            a.jsx("p", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:450:24",
                                              "data-lov-name": "p",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "450",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "p",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22font-bold%22%7D",
                                              className: "font-bold",
                                              children: t.predictedValue,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:454:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "454",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        a.jsx("span", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:455:22",
                                          "data-lov-name": "span",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "455",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "span",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: t.timeframe,
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:458:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "458",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(A, {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:459:24",
                                              "data-lov-name": "Progress",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "459",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "Progress",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22w-16%20h-2%22%7D",
                                              value: t.confidence,
                                              className: "w-16 h-2",
                                            }),
                                            a.jsxs("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:460:24",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "460",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22%25%22%2C%22className%22%3A%22text-xs%22%7D",
                                              className: "text-xs",
                                              children: [t.confidence, "%"],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                            a.jsx(n, {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:466:16",
                              "data-lov-name": "Button",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "466",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "Button",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-full%22%7D",
                              variant: "outline",
                              className: "w-full",
                              asChild: !0,
                              children: a.jsxs(Z, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:467:18",
                                "data-lov-name": "Link",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "467",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Link",
                                "data-component-content":
                                  "%7B%22text%22%3A%22Ver%20Todas%20Previs%C3%B5es%22%7D",
                                to: "/app/analytics?tab=predictions",
                                children: [
                                  a.jsx(m, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:468:20",
                                    "data-lov-name": "Eye",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "468",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "Eye",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                    className: "w-4 h-4 mr-2",
                                  }),
                                  "Ver Todas Previsões",
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
              a.jsxs(l, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:478:8",
                "data-lov-name": "TabsContent",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "478",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                value: "correlations",
                className: "space-y-6",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:479:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "479",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsx("h2", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:480:12",
                        "data-lov-name": "h2",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "480",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "h2",
                        "data-component-content":
                          "%7B%22text%22%3A%22An%C3%A1lise%20de%20Correla%C3%A7%C3%B5es%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                        className: "text-2xl font-bold",
                        children: "Análise de Correlações",
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:481:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "481",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                        className: "flex gap-2",
                        children: [
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:482:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "482",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Filtrar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(v, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:483:16",
                                "data-lov-name": "Filter",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "483",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Filter",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Filtrar",
                            ],
                          }),
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:486:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "486",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Exportar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:487:16",
                                "data-lov-name": "Download",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "487",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Download",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Exportar",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:493:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "493",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: R.map((t, e) =>
                      a.jsxs(
                        d,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:495:14",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "495",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(u, {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:496:16",
                              "data-lov-name": "CardHeader",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "496",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "CardHeader",
                              "data-component-content": "%7B%7D",
                              children: a.jsxs(N, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:497:18",
                                "data-lov-name": "CardTitle",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "497",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "CardTitle",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                className: "flex items-center justify-between",
                                children: [
                                  a.jsxs("span", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:498:20",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "498",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Correla%C3%A7%C3%A3o%20%23%22%7D",
                                    children: ["Correlação #", e + 1],
                                  }),
                                  a.jsx(c, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:499:20",
                                    "data-lov-name": "Badge",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "499",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "Badge",
                                    "data-component-content": "%7B%7D",
                                    className: g(t.impact),
                                    children: t.impact,
                                  }),
                                ],
                              }),
                            }),
                            a.jsxs(s, {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:504:16",
                              "data-lov-name": "CardContent",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "504",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "CardContent",
                              "data-component-content":
                                "%7B%22className%22%3A%22space-y-4%22%7D",
                              className: "space-y-4",
                              children: [
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:505:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "505",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                  className:
                                    "flex items-center justify-between",
                                  children: a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:506:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "506",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex-1%22%7D",
                                    className: "flex-1",
                                    children: [
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:507:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "507",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                                        className:
                                          "flex items-center gap-2 mb-2",
                                        children: [
                                          a.jsx("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx:508:24",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                                            "data-component-line": "508",
                                            "data-component-file":
                                              "AdvancedAnalytics.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: t.sourceMetric,
                                          }),
                                          a.jsx(ta, {
                                            "data-lov-id":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx:509:24",
                                            "data-lov-name": "ArrowRight",
                                            "data-component-path":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                                            "data-component-line": "509",
                                            "data-component-file":
                                              "AdvancedAnalytics.tsx",
                                            "data-component-name": "ArrowRight",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-4%20h-4%20text-muted-foreground%22%7D",
                                            className:
                                              "w-4 h-4 text-muted-foreground",
                                          }),
                                          a.jsx("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx:510:24",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                                            "data-component-line": "510",
                                            "data-component-file":
                                              "AdvancedAnalytics.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            children: t.targetMetric,
                                          }),
                                        ],
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:512:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "512",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
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
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:518:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "518",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                                  className: "grid grid-cols-2 gap-4",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:519:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "519",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content": "%7B%7D",
                                      children: [
                                        a.jsx("span", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:520:22",
                                          "data-lov-name": "span",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "520",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "span",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Correla%C3%A7%C3%A3o%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: "Correlação",
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:521:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "521",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsxs("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:522:24",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "522",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%7D",
                                              className: `text-lg font-bold ${k(t.correlation)}`,
                                              children: [
                                                t.correlation > 0 ? "+" : "",
                                                t.correlation,
                                              ],
                                            }),
                                            a.jsx(A, {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:525:24",
                                              "data-lov-name": "Progress",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "525",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "Progress",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex-1%20h-2%22%7D",
                                              value:
                                                Math.abs(t.correlation) * 100,
                                              className: "flex-1 h-2",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:531:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "531",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content": "%7B%7D",
                                      children: [
                                        a.jsx("span", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:532:22",
                                          "data-lov-name": "span",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "532",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "span",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Confian%C3%A7a%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: "Confiança",
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:533:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "533",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsxs("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:534:24",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "534",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22%25%22%2C%22className%22%3A%22text-lg%20font-bold%22%7D",
                                              className: "text-lg font-bold",
                                              children: [t.confidence, "%"],
                                            }),
                                            a.jsx(A, {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:535:24",
                                              "data-lov-name": "Progress",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "535",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "Progress",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex-1%20h-2%22%7D",
                                              value: t.confidence,
                                              className: "flex-1 h-2",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:540:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "540",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                                  className: "flex gap-2",
                                  children: [
                                    a.jsxs(n, {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:541:20",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "541",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22Analisar%22%2C%22className%22%3A%22flex-1%22%7D",
                                      variant: "outline",
                                      size: "sm",
                                      className: "flex-1",
                                      children: [
                                        a.jsx(m, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:542:22",
                                          "data-lov-name": "Eye",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "542",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Eye",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        "Analisar",
                                      ],
                                    }),
                                    a.jsxs(n, {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:545:20",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "545",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22A%C3%A7%C3%A3o%22%7D",
                                      variant: "outline",
                                      size: "sm",
                                      children: [
                                        a.jsx(x, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:546:22",
                                          "data-lov-name": "Target",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "546",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Target",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                          className: "w-4 h-4 mr-2",
                                        }),
                                        "Ação",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              a.jsxs(l, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:557:8",
                "data-lov-name": "TabsContent",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "557",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                value: "predictions",
                className: "space-y-6",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:558:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "558",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsx("h2", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:559:12",
                        "data-lov-name": "h2",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "559",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "h2",
                        "data-component-content":
                          "%7B%22text%22%3A%22Previs%C3%B5es%20e%20Tend%C3%AAncias%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                        className: "text-2xl font-bold",
                        children: "Previsões e Tendências",
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:560:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "560",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                        className: "flex gap-2",
                        children: [
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:561:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "561",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Per%C3%ADodo%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(na, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:562:16",
                                "data-lov-name": "Calendar",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "562",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Calendar",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Período",
                            ],
                          }),
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:565:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "565",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Exportar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:566:16",
                                "data-lov-name": "Download",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "566",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Download",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Exportar",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:572:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "572",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-4%22%7D",
                    className: "space-y-4",
                    children: D.map((t, e) =>
                      a.jsx(
                        d,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:574:14",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "574",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: a.jsxs(s, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:575:16",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "575",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-6%22%7D",
                            className: "p-6",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:576:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "576",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-4%22%7D",
                                className:
                                  "flex items-center justify-between mb-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:577:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "577",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                    className: "flex items-center gap-3",
                                    children: [
                                      a.jsx("h3", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:578:22",
                                        "data-lov-name": "h3",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "578",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "h3",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-lg%20font-semibold%22%7D",
                                        className: "text-lg font-semibold",
                                        children: t.metric,
                                      }),
                                      a.jsx(c, {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:579:22",
                                        "data-lov-name": "Badge",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "579",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "Badge",
                                        "data-component-content": "%7B%7D",
                                        className:
                                          t.trend === "up"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-blue-100 text-blue-800",
                                        children:
                                          t.trend === "up"
                                            ? "↗ Tendência de Alta"
                                            : "↘ Tendência de Baixa",
                                      }),
                                    ],
                                  }),
                                  a.jsx("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:583:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "583",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-right%22%7D",
                                    className: "text-right",
                                    children: a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:584:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "584",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: t.timeframe,
                                    }),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:588:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "588",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-6%20mb-4%22%7D",
                                className:
                                  "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:589:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "589",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-center%22%7D",
                                    className: "text-center",
                                    children: [
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:590:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "590",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Valor%20Atual%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20mb-1%22%7D",
                                        className:
                                          "text-sm text-muted-foreground mb-1",
                                        children: "Valor Atual",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:591:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "591",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                                        className: "text-2xl font-bold",
                                        children: t.currentValue,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:593:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "593",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-center%22%7D",
                                    className: "text-center",
                                    children: [
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:594:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "594",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Valor%20Previsto%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20mb-1%22%7D",
                                        className:
                                          "text-sm text-muted-foreground mb-1",
                                        children: "Valor Previsto",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:595:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "595",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-2xl%20font-bold%20text-blue-600%22%7D",
                                        className:
                                          "text-2xl font-bold text-blue-600",
                                        children: t.predictedValue,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:597:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "597",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-center%22%7D",
                                    className: "text-center",
                                    children: [
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:598:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "598",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Confian%C3%A7a%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20mb-1%22%7D",
                                        className:
                                          "text-sm text-muted-foreground mb-1",
                                        children: "Confiança",
                                      }),
                                      a.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:599:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "599",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20justify-center%22%7D",
                                        className:
                                          "flex items-center gap-2 justify-center",
                                        children: [
                                          a.jsx(A, {
                                            "data-lov-id":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx:600:24",
                                            "data-lov-name": "Progress",
                                            "data-component-path":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                                            "data-component-line": "600",
                                            "data-component-file":
                                              "AdvancedAnalytics.tsx",
                                            "data-component-name": "Progress",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22w-16%20h-2%22%7D",
                                            value: t.confidence,
                                            className: "w-16 h-2",
                                          }),
                                          a.jsxs("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx:601:24",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                                            "data-component-line": "601",
                                            "data-component-file":
                                              "AdvancedAnalytics.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22text%22%3A%22%25%22%2C%22className%22%3A%22font-bold%22%7D",
                                            className: "font-bold",
                                            children: [t.confidence, "%"],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:606:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "606",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%22%7D",
                                className: "space-y-2",
                                children: [
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:607:20",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "607",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Fatores%20Influenciadores%3A%22%2C%22className%22%3A%22text-sm%20font-medium%22%7D",
                                    className: "text-sm font-medium",
                                    children: "Fatores Influenciadores:",
                                  }),
                                  a.jsx("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:608:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "608",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%22%7D",
                                    className: "flex flex-wrap gap-2",
                                    children: t.factors.map((y, h) =>
                                      a.jsx(
                                        c,
                                        {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:610:24",
                                          "data-lov-name": "Badge",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "610",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Badge",
                                          "data-component-content": "%7B%7D",
                                          variant: "outline",
                                          children: y,
                                        },
                                        h,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:617:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "617",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20gap-2%20mt-4%22%7D",
                                className: "flex gap-2 mt-4",
                                children: [
                                  a.jsxs(n, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:618:20",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "618",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Ver%20Detalhes%22%2C%22className%22%3A%22flex-1%22%7D",
                                    variant: "outline",
                                    size: "sm",
                                    className: "flex-1",
                                    children: [
                                      a.jsx(m, {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:619:22",
                                        "data-lov-name": "Eye",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "619",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "Eye",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      "Ver Detalhes",
                                    ],
                                  }),
                                  a.jsxs(n, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:622:20",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "622",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Plano%20de%20A%C3%A7%C3%A3o%22%7D",
                                    variant: "outline",
                                    size: "sm",
                                    children: [
                                      a.jsx(x, {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:623:22",
                                        "data-lov-name": "Target",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "623",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "Target",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      "Plano de Ação",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              a.jsxs(l, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:634:8",
                "data-lov-name": "TabsContent",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "634",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                value: "insights",
                className: "space-y-6",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:635:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "635",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsx("h2", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:636:12",
                        "data-lov-name": "h2",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "636",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "h2",
                        "data-component-content":
                          "%7B%22text%22%3A%22Insights%20Inteligentes%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                        className: "text-2xl font-bold",
                        children: "Insights Inteligentes",
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:637:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "637",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                        className: "flex gap-2",
                        children: [
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:638:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "638",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Filtrar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(v, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:639:16",
                                "data-lov-name": "Filter",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "639",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Filter",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Filtrar",
                            ],
                          }),
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:642:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "642",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Exportar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:643:16",
                                "data-lov-name": "Download",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "643",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Download",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Exportar",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:649:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "649",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-4%22%7D",
                    className: "space-y-4",
                    children: C.map((t, e) =>
                      a.jsx(
                        d,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:651:14",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "651",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: a.jsx(s, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:652:16",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "652",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-6%22%7D",
                            className: "p-6",
                            children: a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\AdvancedAnalytics.tsx:653:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                              "data-component-line": "653",
                              "data-component-file": "AdvancedAnalytics.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-start%20gap-4%22%7D",
                              className: "flex items-start gap-4",
                              children: [
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:654:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "654",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  className: `p-2 rounded-lg ${t.type === "opportunity" ? "bg-green-100" : t.type === "risk" ? "bg-red-100" : "bg-blue-100"}`,
                                  children: a.jsx(t.icon, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:659:22",
                                    "data-lov-name": "insight.icon",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "659",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "insight.icon",
                                    "data-component-content": "%7B%7D",
                                    className: `w-6 h-6 ${t.type === "opportunity" ? "text-green-600" : t.type === "risk" ? "text-red-600" : "text-blue-600"}`,
                                  }),
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx:666:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\AdvancedAnalytics.tsx",
                                  "data-component-line": "666",
                                  "data-component-file":
                                    "AdvancedAnalytics.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex-1%22%7D",
                                  className: "flex-1",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:667:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "667",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-2%22%7D",
                                      className:
                                        "flex items-center justify-between mb-2",
                                      children: [
                                        a.jsx("h3", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:668:24",
                                          "data-lov-name": "h3",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "668",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "h3",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22text-lg%20font-semibold%22%7D",
                                          className: "text-lg font-semibold",
                                          children: t.title,
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:669:24",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "669",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                          className: "flex items-center gap-2",
                                          children: [
                                            a.jsx(c, {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:670:26",
                                              "data-lov-name": "Badge",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "670",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "Badge",
                                              "data-component-content":
                                                "%7B%7D",
                                              className: g(t.impact),
                                              children: t.impact,
                                            }),
                                            a.jsxs("span", {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:673:26",
                                              "data-lov-name": "span",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "673",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "span",
                                              "data-component-content":
                                                "%7B%22text%22%3A%22%25%20confian%C3%A7a%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                              className:
                                                "text-sm text-muted-foreground",
                                              children: [
                                                t.confidence,
                                                "% confiança",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:679:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "679",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-muted-foreground%20mb-4%22%7D",
                                      className: "text-muted-foreground mb-4",
                                      children: t.description,
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:681:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "681",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22space-y-2%22%7D",
                                      className: "space-y-2",
                                      children: [
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:682:24",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "682",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "p",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22A%C3%A7%C3%B5es%20Recomendadas%3A%22%2C%22className%22%3A%22text-sm%20font-medium%22%7D",
                                          className: "text-sm font-medium",
                                          children: "Ações Recomendadas:",
                                        }),
                                        a.jsx("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:683:24",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "683",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22space-y-1%22%7D",
                                          className: "space-y-1",
                                          children: t.actions.map((y, h) =>
                                            a.jsxs(
                                              "div",
                                              {
                                                "data-lov-id":
                                                  "src\\pages\\app\\AdvancedAnalytics.tsx:685:28",
                                                "data-lov-name": "div",
                                                "data-component-path":
                                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                                "data-component-line": "685",
                                                "data-component-file":
                                                  "AdvancedAnalytics.tsx",
                                                "data-component-name": "div",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D",
                                                className:
                                                  "flex items-center gap-2 text-sm",
                                                children: [
                                                  a.jsx("div", {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\AdvancedAnalytics.tsx:686:30",
                                                    "data-lov-name": "div",
                                                    "data-component-path":
                                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                                    "data-component-line":
                                                      "686",
                                                    "data-component-file":
                                                      "AdvancedAnalytics.tsx",
                                                    "data-component-name":
                                                      "div",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22w-2%20h-2%20bg-blue-500%20rounded-full%22%7D",
                                                    className:
                                                      "w-2 h-2 bg-blue-500 rounded-full",
                                                  }),
                                                  a.jsx("span", {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\AdvancedAnalytics.tsx:687:30",
                                                    "data-lov-name": "span",
                                                    "data-component-path":
                                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                                    "data-component-line":
                                                      "687",
                                                    "data-component-file":
                                                      "AdvancedAnalytics.tsx",
                                                    "data-component-name":
                                                      "span",
                                                    "data-component-content":
                                                      "%7B%7D",
                                                    children: y,
                                                  }),
                                                ],
                                              },
                                              h,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:693:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "693",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20gap-2%20mt-4%22%7D",
                                      className: "flex gap-2 mt-4",
                                      children: [
                                        a.jsxs(n, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:694:24",
                                          "data-lov-name": "Button",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "694",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Button",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Analisar%22%2C%22className%22%3A%22flex-1%22%7D",
                                          variant: "outline",
                                          size: "sm",
                                          className: "flex-1",
                                          children: [
                                            a.jsx(m, {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:695:26",
                                              "data-lov-name": "Eye",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "695",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "Eye",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                              className: "w-4 h-4 mr-2",
                                            }),
                                            "Analisar",
                                          ],
                                        }),
                                        a.jsxs(n, {
                                          "data-lov-id":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx:698:24",
                                          "data-lov-name": "Button",
                                          "data-component-path":
                                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                                          "data-component-line": "698",
                                          "data-component-file":
                                            "AdvancedAnalytics.tsx",
                                          "data-component-name": "Button",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Implementar%22%7D",
                                          variant: "outline",
                                          size: "sm",
                                          children: [
                                            a.jsx(x, {
                                              "data-lov-id":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx:699:26",
                                              "data-lov-name": "Target",
                                              "data-component-path":
                                                "src\\pages\\app\\AdvancedAnalytics.tsx",
                                              "data-component-line": "699",
                                              "data-component-file":
                                                "AdvancedAnalytics.tsx",
                                              "data-component-name": "Target",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                              className: "w-4 h-4 mr-2",
                                            }),
                                            "Implementar",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              a.jsxs(l, {
                "data-lov-id": "src\\pages\\app\\AdvancedAnalytics.tsx:712:8",
                "data-lov-name": "TabsContent",
                "data-component-path": "src\\pages\\app\\AdvancedAnalytics.tsx",
                "data-component-line": "712",
                "data-component-file": "AdvancedAnalytics.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                value: "anomalies",
                className: "space-y-6",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:713:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "713",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                      a.jsx("h2", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:714:12",
                        "data-lov-name": "h2",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "714",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "h2",
                        "data-component-content":
                          "%7B%22text%22%3A%22Detec%C3%A7%C3%A3o%20de%20Anomalias%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                        className: "text-2xl font-bold",
                        children: "Detecção de Anomalias",
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:715:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "715",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                        className: "flex gap-2",
                        children: [
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:716:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "716",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Filtrar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(v, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:717:16",
                                "data-lov-name": "Filter",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "717",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Filter",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Filtrar",
                            ],
                          }),
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:720:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "720",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22text%22%3A%22Exportar%22%7D",
                            variant: "outline",
                            size: "sm",
                            children: [
                              a.jsx(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:721:16",
                                "data-lov-name": "Download",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "721",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "Download",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                className: "w-4 h-4 mr-2",
                              }),
                              "Exportar",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs(Q, {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:727:10",
                    "data-lov-name": "Alert",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "727",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "Alert",
                    "data-component-content":
                      "%7B%22className%22%3A%22border-yellow-200%20bg-yellow-50%22%7D",
                    className: "border-yellow-200 bg-yellow-50",
                    children: [
                      a.jsx(j, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:728:12",
                        "data-lov-name": "AlertTriangle",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "728",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "AlertTriangle",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-4%20w-4%20text-yellow-600%22%7D",
                        className: "h-4 w-4 text-yellow-600",
                      }),
                      a.jsxs(Y, {
                        "data-lov-id":
                          "src\\pages\\app\\AdvancedAnalytics.tsx:729:12",
                        "data-lov-name": "AlertDescription",
                        "data-component-path":
                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                        "data-component-line": "729",
                        "data-component-file": "AdvancedAnalytics.tsx",
                        "data-component-name": "AlertDescription",
                        "data-component-content":
                          "%7B%22text%22%3A%22anomalias%20detectadas%20no%20per%C3%ADodo%20selecionado.%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20Algumas%20requerem%20investiga%C3%A7%C3%A3o%20imediata.%22%2C%22className%22%3A%22text-yellow-800%22%7D",
                        className: "text-yellow-800",
                        children: [
                          a.jsx("strong", {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:730:14",
                            "data-lov-name": "strong",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "730",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "strong",
                            "data-component-content":
                              "%7B%22text%22%3A%22Aten%C3%A7%C3%A3o%3A%22%7D",
                            children: "Atenção:",
                          }),
                          " ",
                          b.length,
                          " anomalias detectadas no período selecionado. Algumas requerem investigação imediata.",
                        ],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\AdvancedAnalytics.tsx:735:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                    "data-component-line": "735",
                    "data-component-file": "AdvancedAnalytics.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-4%22%7D",
                    className: "space-y-4",
                    children: b.map((t, e) =>
                      a.jsx(
                        d,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\AdvancedAnalytics.tsx:737:14",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\pages\\app\\AdvancedAnalytics.tsx",
                          "data-component-line": "737",
                          "data-component-file": "AdvancedAnalytics.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: a.jsxs(s, {
                            "data-lov-id":
                              "src\\pages\\app\\AdvancedAnalytics.tsx:738:16",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\AdvancedAnalytics.tsx",
                            "data-component-line": "738",
                            "data-component-file": "AdvancedAnalytics.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-6%22%7D",
                            className: "p-6",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:739:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "739",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-4%22%7D",
                                className:
                                  "flex items-center justify-between mb-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:740:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "740",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                    className: "flex items-center gap-3",
                                    children: [
                                      a.jsx("h3", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:741:22",
                                        "data-lov-name": "h3",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "741",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "h3",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-lg%20font-semibold%22%7D",
                                        className: "text-lg font-semibold",
                                        children: t.metric,
                                      }),
                                      a.jsx(c, {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:742:22",
                                        "data-lov-name": "Badge",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "742",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "Badge",
                                        "data-component-content": "%7B%7D",
                                        className: F(t.severity),
                                        children:
                                          t.severity === "high"
                                            ? "Alta"
                                            : t.severity === "medium"
                                              ? "Média"
                                              : "Baixa",
                                      }),
                                    ],
                                  }),
                                  a.jsx("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:747:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "747",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-right%22%7D",
                                    className: "text-right",
                                    children: a.jsx("span", {
                                      "data-lov-id":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx:748:22",
                                      "data-lov-name": "span",
                                      "data-component-path":
                                        "src\\pages\\app\\AdvancedAnalytics.tsx",
                                      "data-component-line": "748",
                                      "data-component-file":
                                        "AdvancedAnalytics.tsx",
                                      "data-component-name": "span",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: t.date,
                                    }),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:752:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "752",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-6%20mb-4%22%7D",
                                className:
                                  "grid grid-cols-1 md:grid-cols-3 gap-6 mb-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:753:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "753",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:754:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "754",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Valor%20Esperado%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Valor Esperado",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:755:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "755",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-lg%20font-bold%22%7D",
                                        className: "text-lg font-bold",
                                        children: t.expectedValue,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:757:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "757",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:758:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "758",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Valor%20Real%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Valor Real",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:759:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "759",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%7D",
                                        className: `text-lg font-bold ${t.actualValue > t.expectedValue ? "text-red-600" : "text-green-600"}`,
                                        children: t.actualValue,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:765:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "765",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:766:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "766",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22Desvio%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Desvio",
                                      }),
                                      a.jsxs("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:767:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "767",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%25%22%2C%22className%22%3A%22text-lg%20font-bold%22%7D",
                                        className: "text-lg font-bold",
                                        children: [
                                          Math.abs(
                                            ((t.actualValue - t.expectedValue) /
                                              t.expectedValue) *
                                              100,
                                          ).toFixed(1),
                                          "%",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:773:18",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "773",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-muted-foreground%20mb-4%22%7D",
                                className: "text-muted-foreground mb-4",
                                children: t.description,
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx:775:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\AdvancedAnalytics.tsx",
                                "data-component-line": "775",
                                "data-component-file": "AdvancedAnalytics.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                                className: "flex gap-2",
                                children: [
                                  a.jsxs(n, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:776:20",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "776",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Investigar%22%2C%22className%22%3A%22flex-1%22%7D",
                                    variant: "outline",
                                    size: "sm",
                                    className: "flex-1",
                                    children: [
                                      a.jsx(m, {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:777:22",
                                        "data-lov-name": "Eye",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "777",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "Eye",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      "Investigar",
                                    ],
                                  }),
                                  a.jsxs(n, {
                                    "data-lov-id":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx:780:20",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\AdvancedAnalytics.tsx",
                                    "data-component-line": "780",
                                    "data-component-file":
                                      "AdvancedAnalytics.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Plano%20de%20A%C3%A7%C3%A3o%22%7D",
                                    variant: "outline",
                                    size: "sm",
                                    children: [
                                      a.jsx(x, {
                                        "data-lov-id":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx:781:22",
                                        "data-lov-name": "Target",
                                        "data-component-path":
                                          "src\\pages\\app\\AdvancedAnalytics.tsx",
                                        "data-component-line": "781",
                                        "data-component-file":
                                          "AdvancedAnalytics.tsx",
                                        "data-component-name": "Target",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      "Plano de Ação",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
};
export { Ca as default };
