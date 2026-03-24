import { j as t, B as i } from "./index-BZzvAVnT.js";
import { C as c, a as r } from "./card-DCmFy9yX.js";
const u = ({
  icon: o,
  title: n,
  description: s,
  actionLabel: e,
  onAction: a,
  className: d = "",
}) =>
  t.jsx(c, {
    "data-lov-id": "src\\components\\ui\\empty-state.tsx:28:4",
    "data-lov-name": "Card",
    "data-component-path": "src\\components\\ui\\empty-state.tsx",
    "data-component-line": "28",
    "data-component-file": "empty-state.tsx",
    "data-component-name": "Card",
    "data-component-content": "%7B%7D",
    className: `border-dashed border-2 bg-muted/10 shadow-none py-12 ${d}`,
    children: t.jsxs(r, {
      "data-lov-id": "src\\components\\ui\\empty-state.tsx:29:6",
      "data-lov-name": "CardContent",
      "data-component-path": "src\\components\\ui\\empty-state.tsx",
      "data-component-line": "29",
      "data-component-file": "empty-state.tsx",
      "data-component-name": "CardContent",
      "data-component-content":
        "%7B%22className%22%3A%22flex%20flex-col%20items-center%20text-center%20space-y-4%22%7D",
      className: "flex flex-col items-center text-center space-y-4",
      children: [
        t.jsx("div", {
          "data-lov-id": "src\\components\\ui\\empty-state.tsx:30:8",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\ui\\empty-state.tsx",
          "data-component-line": "30",
          "data-component-file": "empty-state.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22p-4%20bg-background%20rounded-2xl%20shadow-sm%20border%20border-border%2F50%20text-muted-foreground%2F40%22%7D",
          className:
            "p-4 bg-background rounded-2xl shadow-sm border border-border/50 text-muted-foreground/40",
          children: t.jsx(o, {
            "data-lov-id": "src\\components\\ui\\empty-state.tsx:31:10",
            "data-lov-name": "Icon",
            "data-component-path": "src\\components\\ui\\empty-state.tsx",
            "data-component-line": "31",
            "data-component-file": "empty-state.tsx",
            "data-component-name": "Icon",
            "data-component-content":
              "%7B%22className%22%3A%22h-10%20w-10%22%7D",
            className: "h-10 w-10",
          }),
        }),
        t.jsxs("div", {
          "data-lov-id": "src\\components\\ui\\empty-state.tsx:33:8",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\ui\\empty-state.tsx",
          "data-component-line": "33",
          "data-component-file": "empty-state.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22max-w-xs%20space-y-2%22%7D",
          className: "max-w-xs space-y-2",
          children: [
            t.jsx("h3", {
              "data-lov-id": "src\\components\\ui\\empty-state.tsx:34:10",
              "data-lov-name": "h3",
              "data-component-path": "src\\components\\ui\\empty-state.tsx",
              "data-component-line": "34",
              "data-component-file": "empty-state.tsx",
              "data-component-name": "h3",
              "data-component-content":
                "%7B%22className%22%3A%22text-xl%20font-bold%20tracking-tight%22%7D",
              className: "text-xl font-bold tracking-tight",
              children: n,
            }),
            t.jsx("p", {
              "data-lov-id": "src\\components\\ui\\empty-state.tsx:35:10",
              "data-lov-name": "p",
              "data-component-path": "src\\components\\ui\\empty-state.tsx",
              "data-component-line": "35",
              "data-component-file": "empty-state.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%22%7D",
              className: "text-sm text-muted-foreground leading-relaxed",
              children: s,
            }),
          ],
        }),
        e &&
          a &&
          t.jsx(i, {
            "data-lov-id": "src\\components\\ui\\empty-state.tsx:40:10",
            "data-lov-name": "Button",
            "data-component-path": "src\\components\\ui\\empty-state.tsx",
            "data-component-line": "40",
            "data-component-file": "empty-state.tsx",
            "data-component-name": "Button",
            "data-component-content":
              "%7B%22className%22%3A%22mt-2%20font-bold%20shadow-md%20bg-primary%20hover%3Abg-primary%2F90%22%7D",
            onClick: a,
            className:
              "mt-2 font-bold shadow-md bg-primary hover:bg-primary/90",
            children: e,
          }),
      ],
    }),
  });
new Date().toISOString();
const x = [
    {
      id: "prio-001",
      diagnosticId: "diag-001",
      title: "Automatizar Onboarding Intermediário",
      explanation:
        "A automação reduzirá o tempo de primeiro valor para novos clientes do plano médio, atacando a causa principal do churn inicial.",
      level: "high",
      score: {
        impact: 9,
        urgency: 8,
        effort: 4,
        confidence: 7,
        calculatedValue: 126,
      },
      status: "suggested",
      createdAt: new Date().toISOString(),
    },
    {
      id: "prio-002",
      diagnosticId: "diag-001",
      title: "Campanha de Reativação Black Friday",
      explanation:
        "Clientes inativos há mais de 30 dias após a primeira compra possuem 80% de chance de churn permanente.",
      level: "high",
      score: {
        impact: 8,
        urgency: 9,
        effort: 3,
        confidence: 8,
        calculatedValue: 192,
      },
      status: "suggested",
      createdAt: new Date().toISOString(),
    },
    {
      id: "prio-003",
      diagnosticId: "diag-001",
      title: "Otimização de Checkout Mobile",
      explanation:
        "A taxa de abandono no mobile é 40% superior ao desktop. Pequenos ajustes no tempo de carregamento podem recuperar R$ 5k/mês.",
      level: "medium",
      score: {
        impact: 7,
        urgency: 6,
        effort: 5,
        confidence: 9,
        calculatedValue: 75,
      },
      status: "validated",
      createdAt: new Date().toISOString(),
    },
  ],
  m = [
    {
      id: "act-001",
      priorityId: "prio-001",
      title: "Desenhar Fluxo de E-mails de Onboarding",
      description:
        "Criar sequência de 5 e-mails focados em ativação de funcionalidades chave.",
      status: "in_progress",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "act-002",
      priorityId: "prio-003",
      title: "Reduzir tamanho das imagens da Home",
      description:
        "Comprimir ativos visuais para melhorar o LCP em dispositivos mobile.",
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "act-003",
      priorityId: "prio-003",
      title: "Remover scripts de terceiros não utilizados",
      description:
        "Limpeza de tags de rastreamento legadas que atrasam a interatividade.",
      status: "completed",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  g = {
    id: "plan-001",
    title: "Retenção Q2 - Clientes Médios",
    description: "Plano focado em estabilizar o churn da base intermediária.",
    actions: m,
    status: "active",
    createdAt: new Date().toISOString(),
  };
export { u as E, m as a, g as b, x as m };
