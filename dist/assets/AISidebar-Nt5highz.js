import { j as a, d as x, B as d, u as S } from "./index-BZzvAVnT.js";
import { r as g } from "./vendor-BgR6OOld.js";
import { C as m, b as p, c as r, a as l } from "./card-DCmFy9yX.js";
import { B as I } from "./badge-DMGJasfj.js";
import {
  H as u,
  X as v,
  a6 as N,
  a7 as B,
  L as A,
  d as h,
  h as j,
} from "./utils-C25gojUd.js";
const C = ({
    title: n,
    description: i,
    actionLabel: e = "Aplicar Sugestão",
    onAction: t,
    onDismiss: o,
    variant: b = "default",
    className: s,
  }) =>
    b === "compact"
      ? a.jsxs("div", {
          "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:29:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
          "data-component-line": "29",
          "data-component-file": "ai-suggestion.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%7D",
          className: x(
            "flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800",
            s,
          ),
          children: [
            a.jsx("div", {
              "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:33:8",
              "data-lov-name": "div",
              "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
              "data-component-line": "33",
              "data-component-file": "ai-suggestion.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex-shrink-0%20mt-0.5%22%7D",
              className: "flex-shrink-0 mt-0.5",
              children: a.jsx(u, {
                "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:34:10",
                "data-lov-name": "Sparkles",
                "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
                "data-component-line": "34",
                "data-component-file": "ai-suggestion.tsx",
                "data-component-name": "Sparkles",
                "data-component-content":
                  "%7B%22className%22%3A%22h-4%20w-4%20text-blue-600%20dark%3Atext-blue-400%22%7D",
                className: "h-4 w-4 text-blue-600 dark:text-blue-400",
              }),
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:36:8",
              "data-lov-name": "div",
              "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
              "data-component-line": "36",
              "data-component-file": "ai-suggestion.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex-1%20min-w-0%22%7D",
              className: "flex-1 min-w-0",
              children: [
                a.jsx("p", {
                  "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:37:10",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\components\\ui\\ai-suggestion.tsx",
                  "data-component-line": "37",
                  "data-component-file": "ai-suggestion.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-sm%20font-medium%20text-blue-900%20dark%3Atext-blue-100%22%7D",
                  className:
                    "text-sm font-medium text-blue-900 dark:text-blue-100",
                  children: n,
                }),
                a.jsx("p", {
                  "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:38:10",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\components\\ui\\ai-suggestion.tsx",
                  "data-component-line": "38",
                  "data-component-file": "ai-suggestion.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-xs%20text-blue-700%20dark%3Atext-blue-300%20mt-1%22%7D",
                  className: "text-xs text-blue-700 dark:text-blue-300 mt-1",
                  children: i,
                }),
                t &&
                  a.jsx(d, {
                    "data-lov-id":
                      "src\\components\\ui\\ai-suggestion.tsx:40:12",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\components\\ui\\ai-suggestion.tsx",
                    "data-component-line": "40",
                    "data-component-file": "ai-suggestion.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22mt-2%20h-7%20text-xs%20border-blue-300%20text-blue-700%20hover%3Abg-blue-100%20dark%3Aborder-blue-700%20dark%3Atext-blue-300%20dark%3Ahover%3Abg-blue-900%2F20%22%7D",
                    size: "sm",
                    variant: "outline",
                    onClick: t,
                    className:
                      "mt-2 h-7 text-xs border-blue-300 text-blue-700 hover:bg-blue-100 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/20",
                    children: e,
                  }),
              ],
            }),
            o &&
              a.jsx(d, {
                "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:51:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
                "data-component-line": "51",
                "data-component-file": "ai-suggestion.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22h-6%20w-6%20p-0%20text-blue-600%20hover%3Atext-blue-800%20dark%3Atext-blue-400%20dark%3Ahover%3Atext-blue-200%22%7D",
                size: "sm",
                variant: "ghost",
                onClick: o,
                className:
                  "h-6 w-6 p-0 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200",
                children: a.jsx(v, {
                  "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:57:12",
                  "data-lov-name": "X",
                  "data-component-path":
                    "src\\components\\ui\\ai-suggestion.tsx",
                  "data-component-line": "57",
                  "data-component-file": "ai-suggestion.tsx",
                  "data-component-name": "X",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                  className: "h-3 w-3",
                }),
              }),
          ],
        })
      : a.jsxs(m, {
          "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:65:4",
          "data-lov-name": "Card",
          "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
          "data-component-line": "65",
          "data-component-file": "ai-suggestion.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          className: x("border-blue-200 dark:border-blue-800", s),
          children: [
            a.jsx(p, {
              "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:66:6",
              "data-lov-name": "CardHeader",
              "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
              "data-component-line": "66",
              "data-component-file": "ai-suggestion.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%22className%22%3A%22pb-3%22%7D",
              className: "pb-3",
              children: a.jsxs("div", {
                "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:67:8",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
                "data-component-line": "67",
                "data-component-file": "ai-suggestion.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-start%20justify-between%22%7D",
                className: "flex items-start justify-between",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\ui\\ai-suggestion.tsx:68:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\ui\\ai-suggestion.tsx",
                    "data-component-line": "68",
                    "data-component-file": "ai-suggestion.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D",
                    className: "flex items-start gap-2",
                    children: [
                      a.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ui\\ai-suggestion.tsx:69:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ui\\ai-suggestion.tsx",
                        "data-component-line": "69",
                        "data-component-file": "ai-suggestion.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex-shrink-0%20mt-1%22%7D",
                        className: "flex-shrink-0 mt-1",
                        children: a.jsx(u, {
                          "data-lov-id":
                            "src\\components\\ui\\ai-suggestion.tsx:70:14",
                          "data-lov-name": "Sparkles",
                          "data-component-path":
                            "src\\components\\ui\\ai-suggestion.tsx",
                          "data-component-line": "70",
                          "data-component-file": "ai-suggestion.tsx",
                          "data-component-name": "Sparkles",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%20text-blue-600%20dark%3Atext-blue-400%22%7D",
                          className: "h-4 w-4 text-blue-600 dark:text-blue-400",
                        }),
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\components\\ui\\ai-suggestion.tsx:72:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ui\\ai-suggestion.tsx",
                        "data-component-line": "72",
                        "data-component-file": "ai-suggestion.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(r, {
                            "data-lov-id":
                              "src\\components\\ui\\ai-suggestion.tsx:73:14",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\components\\ui\\ai-suggestion.tsx",
                            "data-component-line": "73",
                            "data-component-file": "ai-suggestion.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20font-medium%20text-blue-900%20dark%3Atext-blue-100%22%7D",
                            className:
                              "text-sm font-medium text-blue-900 dark:text-blue-100",
                            children: n,
                          }),
                          a.jsx(I, {
                            "data-lov-id":
                              "src\\components\\ui\\ai-suggestion.tsx:76:14",
                            "data-lov-name": "Badge",
                            "data-component-path":
                              "src\\components\\ui\\ai-suggestion.tsx",
                            "data-component-line": "76",
                            "data-component-file": "ai-suggestion.tsx",
                            "data-component-name": "Badge",
                            "data-component-content":
                              "%7B%22text%22%3A%22IA%22%2C%22className%22%3A%22mt-1%20text-xs%20bg-blue-100%20text-blue-700%20dark%3Abg-blue-900%2F50%20dark%3Atext-blue-300%22%7D",
                            variant: "secondary",
                            className:
                              "mt-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
                            children: "IA",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o &&
                    a.jsx(d, {
                      "data-lov-id":
                        "src\\components\\ui\\ai-suggestion.tsx:82:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\components\\ui\\ai-suggestion.tsx",
                      "data-component-line": "82",
                      "data-component-file": "ai-suggestion.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-6%20w-6%20p-0%20text-muted-foreground%20hover%3Atext-foreground%22%7D",
                      size: "sm",
                      variant: "ghost",
                      onClick: o,
                      className:
                        "h-6 w-6 p-0 text-muted-foreground hover:text-foreground",
                      children: a.jsx(v, {
                        "data-lov-id":
                          "src\\components\\ui\\ai-suggestion.tsx:88:14",
                        "data-lov-name": "X",
                        "data-component-path":
                          "src\\components\\ui\\ai-suggestion.tsx",
                        "data-component-line": "88",
                        "data-component-file": "ai-suggestion.tsx",
                        "data-component-name": "X",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                        className: "h-3 w-3",
                      }),
                    }),
                ],
              }),
            }),
            a.jsxs(l, {
              "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:93:6",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\components\\ui\\ai-suggestion.tsx",
              "data-component-line": "93",
              "data-component-file": "ai-suggestion.tsx",
              "data-component-name": "CardContent",
              "data-component-content": "%7B%22className%22%3A%22pt-0%22%7D",
              className: "pt-0",
              children: [
                a.jsx("p", {
                  "data-lov-id": "src\\components\\ui\\ai-suggestion.tsx:94:8",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\components\\ui\\ai-suggestion.tsx",
                  "data-component-line": "94",
                  "data-component-file": "ai-suggestion.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-sm%20text-blue-700%20dark%3Atext-blue-300%20mb-3%22%7D",
                  className: "text-sm text-blue-700 dark:text-blue-300 mb-3",
                  children: i,
                }),
                t &&
                  a.jsx(d, {
                    "data-lov-id":
                      "src\\components\\ui\\ai-suggestion.tsx:98:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\components\\ui\\ai-suggestion.tsx",
                    "data-component-line": "98",
                    "data-component-file": "ai-suggestion.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22bg-blue-600%20hover%3Abg-blue-700%20text-white%20dark%3Abg-blue-500%20dark%3Ahover%3Abg-blue-600%22%7D",
                    size: "sm",
                    onClick: t,
                    className:
                      "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",
                    children: e,
                  }),
              ],
            }),
          ],
        }),
  L = ({ context: n = "dashboard", className: i }) => {
    const { t: e } = S(),
      [t, o] = g.useState(() =>
        typeof window < "u"
          ? localStorage.getItem("ai-sidebar-collapsed") === "true"
          : !1,
      );
    g.useEffect(() => {
      localStorage.setItem("ai-sidebar-collapsed", String(t));
    }, [t]);
    const s = (() => {
      switch (n) {
        case "dashboard":
          return [
            {
              title: "Automatizar Relatório Mensal",
              description:
                "Criar template automático para relatórios de vendas mensais com seus dados históricos.",
              actionLabel: "Configurar Automação",
            },
            {
              title: "Nova Integração Disponível",
              description:
                "Conecte seu Google Sheets para importar dados automaticamente.",
              actionLabel: "Conectar Agora",
            },
          ];
        case "reports":
          return [
            {
              title: "Organizar por Categorias",
              description:
                "Identifiquei que você tem muitos relatórios financeiros. Quer criar uma pasta específica?",
              actionLabel: "Criar Pasta",
            },
          ];
        case "builder":
          return [
            {
              title: "Modelo Sugerido",
              description:
                "Com base nos seus dados, recomendo o template 'Relatório Executivo Trimestral'.",
              actionLabel: "Usar Modelo",
            },
          ];
        case "detail":
          return [
            {
              title: "Análises Adicionais",
              description:
                "Posso gerar análises complementares sobre tendências de crescimento.",
              actionLabel: "Gerar Análises",
            },
          ];
        default:
          return [];
      }
    })();
    return s.length === 0
      ? null
      : a.jsxs("aside", {
          "data-lov-id": "src\\components\\ai\\AISidebar.tsx:77:4",
          "data-lov-name": "aside",
          "data-component-path": "src\\components\\ai\\AISidebar.tsx",
          "data-component-line": "77",
          "data-component-file": "AISidebar.tsx",
          "data-component-name": "aside",
          "data-component-content": "%7B%7D",
          className: x(
            "relative flex-shrink-0 transition-[width] duration-300 ease-in-out border-l bg-muted/30 overflow-hidden",
            t ? "w-16" : "w-80",
            i,
          ),
          children: [
            a.jsx(d, {
              "data-lov-id": "src\\components\\ai\\AISidebar.tsx:85:6",
              "data-lov-name": "Button",
              "data-component-path": "src\\components\\ai\\AISidebar.tsx",
              "data-component-line": "85",
              "data-component-file": "AISidebar.tsx",
              "data-component-name": "Button",
              "data-component-content":
                "%7B%22className%22%3A%22absolute%20-left-3%20top-6%20h-6%20w-6%20rounded-full%20shadow-md%20z-10%20border%22%7D",
              variant: "secondary",
              size: "icon",
              className:
                "absolute -left-3 top-6 h-6 w-6 rounded-full shadow-md z-10 border",
              onClick: () => o(!t),
              children: t
                ? a.jsx(N, {
                    "data-lov-id": "src\\components\\ai\\AISidebar.tsx:91:23",
                    "data-lov-name": "ChevronLeft",
                    "data-component-path": "src\\components\\ai\\AISidebar.tsx",
                    "data-component-line": "91",
                    "data-component-file": "AISidebar.tsx",
                    "data-component-name": "ChevronLeft",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                    className: "h-3 w-3",
                  })
                : a.jsx(B, {
                    "data-lov-id": "src\\components\\ai\\AISidebar.tsx:91:61",
                    "data-lov-name": "ChevronRight",
                    "data-component-path": "src\\components\\ai\\AISidebar.tsx",
                    "data-component-line": "91",
                    "data-component-file": "AISidebar.tsx",
                    "data-component-name": "ChevronRight",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                    className: "h-3 w-3",
                  }),
            }),
            a.jsx("div", {
              "data-lov-id": "src\\components\\ai\\AISidebar.tsx:94:6",
              "data-lov-name": "div",
              "data-component-path": "src\\components\\ai\\AISidebar.tsx",
              "data-component-line": "94",
              "data-component-file": "AISidebar.tsx",
              "data-component-name": "div",
              "data-component-content": "%7B%7D",
              className: x(
                "h-full overflow-y-auto overflow-x-hidden p-4 space-y-4",
                t && "items-center p-2",
              ),
              children: t
                ? a.jsxs("div", {
                    "data-lov-id": "src\\components\\ai\\AISidebar.tsx:99:10",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\ai\\AISidebar.tsx",
                    "data-component-line": "99",
                    "data-component-file": "AISidebar.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20flex-col%20items-center%20gap-4%20mt-8%22%7D",
                    className: "flex flex-col items-center gap-4 mt-8",
                    children: [
                      a.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ai\\AISidebar.tsx:100:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ai\\AISidebar.tsx",
                        "data-component-line": "100",
                        "data-component-file": "AISidebar.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-primary%2F10%20flex%20items-center%20justify-center%20animate-pulse%22%7D",
                        className:
                          "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center animate-pulse",
                        children: a.jsx(u, {
                          "data-lov-id":
                            "src\\components\\ai\\AISidebar.tsx:101:14",
                          "data-lov-name": "Sparkles",
                          "data-component-path":
                            "src\\components\\ai\\AISidebar.tsx",
                          "data-component-line": "101",
                          "data-component-file": "AISidebar.tsx",
                          "data-component-name": "Sparkles",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                          className: "h-5 w-5 text-primary",
                        }),
                      }),
                      a.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ai\\AISidebar.tsx:103:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ai\\AISidebar.tsx",
                        "data-component-line": "103",
                        "data-component-file": "AISidebar.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-px%20w-8%20bg-border%22%7D",
                        className: "h-px w-8 bg-border",
                      }),
                      a.jsx(A, {
                        "data-lov-id":
                          "src\\components\\ai\\AISidebar.tsx:104:12",
                        "data-lov-name": "Lightbulb",
                        "data-component-path":
                          "src\\components\\ai\\AISidebar.tsx",
                        "data-component-line": "104",
                        "data-component-file": "AISidebar.tsx",
                        "data-component-name": "Lightbulb",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-5%20w-5%20text-yellow-600%20opacity-50%22%7D",
                        className: "h-5 w-5 text-yellow-600 opacity-50",
                      }),
                      a.jsx(h, {
                        "data-lov-id":
                          "src\\components\\ai\\AISidebar.tsx:105:12",
                        "data-lov-name": "TrendingUp",
                        "data-component-path":
                          "src\\components\\ai\\AISidebar.tsx",
                        "data-component-line": "105",
                        "data-component-file": "AISidebar.tsx",
                        "data-component-name": "TrendingUp",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-5%20w-5%20text-green-600%20opacity-50%22%7D",
                        className: "h-5 w-5 text-green-600 opacity-50",
                      }),
                    ],
                  })
                : a.jsxs(a.Fragment, {
                    children: [
                      a.jsxs(m, {
                        "data-lov-id":
                          "src\\components\\ai\\AISidebar.tsx:109:12",
                        "data-lov-name": "Card",
                        "data-component-path":
                          "src\\components\\ai\\AISidebar.tsx",
                        "data-component-line": "109",
                        "data-component-file": "AISidebar.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(p, {
                            "data-lov-id":
                              "src\\components\\ai\\AISidebar.tsx:110:14",
                            "data-lov-name": "CardHeader",
                            "data-component-path":
                              "src\\components\\ai\\AISidebar.tsx",
                            "data-component-line": "110",
                            "data-component-file": "AISidebar.tsx",
                            "data-component-name": "CardHeader",
                            "data-component-content":
                              "%7B%22className%22%3A%22pb-3%20px-4%22%7D",
                            className: "pb-3 px-4",
                            children: a.jsxs(r, {
                              "data-lov-id":
                                "src\\components\\ai\\AISidebar.tsx:111:16",
                              "data-lov-name": "CardTitle",
                              "data-component-path":
                                "src\\components\\ai\\AISidebar.tsx",
                              "data-component-line": "111",
                              "data-component-file": "AISidebar.tsx",
                              "data-component-name": "CardTitle",
                              "data-component-content":
                                "%7B%22text%22%3A%22Sugest%C3%B5es%20da%20IA%22%2C%22className%22%3A%22text-sm%20font-medium%20flex%20items-center%20gap-2%22%7D",
                              className:
                                "text-sm font-medium flex items-center gap-2",
                              children: [
                                a.jsx(A, {
                                  "data-lov-id":
                                    "src\\components\\ai\\AISidebar.tsx:112:18",
                                  "data-lov-name": "Lightbulb",
                                  "data-component-path":
                                    "src\\components\\ai\\AISidebar.tsx",
                                  "data-component-line": "112",
                                  "data-component-file": "AISidebar.tsx",
                                  "data-component-name": "Lightbulb",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-4%20w-4%20text-yellow-600%22%7D",
                                  className: "h-4 w-4 text-yellow-600",
                                }),
                                "Sugestões da IA",
                              ],
                            }),
                          }),
                          a.jsx(l, {
                            "data-lov-id":
                              "src\\components\\ai\\AISidebar.tsx:116:14",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\components\\ai\\AISidebar.tsx",
                            "data-component-line": "116",
                            "data-component-file": "AISidebar.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-3%20px-4%22%7D",
                            className: "space-y-3 px-4",
                            children: s.map((c, f) =>
                              a.jsx(
                                C,
                                {
                                  "data-lov-id":
                                    "src\\components\\ai\\AISidebar.tsx:118:18",
                                  "data-lov-name": "AISuggestion",
                                  "data-component-path":
                                    "src\\components\\ai\\AISidebar.tsx",
                                  "data-component-line": "118",
                                  "data-component-file": "AISidebar.tsx",
                                  "data-component-name": "AISuggestion",
                                  "data-component-content": "%7B%7D",
                                  variant: "compact",
                                  title: c.title,
                                  description: c.description,
                                  actionLabel: c.actionLabel,
                                  onAction: () => {},
                                  onDismiss: () => {},
                                },
                                f,
                              ),
                            ),
                          }),
                        ],
                      }),
                      n === "dashboard" &&
                        a.jsxs(m, {
                          "data-lov-id":
                            "src\\components\\ai\\AISidebar.tsx:132:14",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\components\\ai\\AISidebar.tsx",
                          "data-component-line": "132",
                          "data-component-file": "AISidebar.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\components\\ai\\AISidebar.tsx:133:16",
                              "data-lov-name": "CardHeader",
                              "data-component-path":
                                "src\\components\\ai\\AISidebar.tsx",
                              "data-component-line": "133",
                              "data-component-file": "AISidebar.tsx",
                              "data-component-name": "CardHeader",
                              "data-component-content":
                                "%7B%22className%22%3A%22pb-3%20px-4%22%7D",
                              className: "pb-3 px-4",
                              children: a.jsxs(r, {
                                "data-lov-id":
                                  "src\\components\\ai\\AISidebar.tsx:134:18",
                                "data-lov-name": "CardTitle",
                                "data-component-path":
                                  "src\\components\\ai\\AISidebar.tsx",
                                "data-component-line": "134",
                                "data-component-file": "AISidebar.tsx",
                                "data-component-name": "CardTitle",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20font-medium%20flex%20items-center%20gap-2%22%7D",
                                className:
                                  "text-sm font-medium flex items-center gap-2",
                                children: [
                                  a.jsx(h, {
                                    "data-lov-id":
                                      "src\\components\\ai\\AISidebar.tsx:135:20",
                                    "data-lov-name": "TrendingUp",
                                    "data-component-path":
                                      "src\\components\\ai\\AISidebar.tsx",
                                    "data-component-line": "135",
                                    "data-component-file": "AISidebar.tsx",
                                    "data-component-name": "TrendingUp",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-4%20w-4%20text-green-600%22%7D",
                                    className: "h-4 w-4 text-green-600",
                                  }),
                                  e("ai_sidebar.insights_title"),
                                ],
                              }),
                            }),
                            a.jsx(l, {
                              "data-lov-id":
                                "src\\components\\ai\\AISidebar.tsx:139:16",
                              "data-lov-name": "CardContent",
                              "data-component-path":
                                "src\\components\\ai\\AISidebar.tsx",
                              "data-component-line": "139",
                              "data-component-file": "AISidebar.tsx",
                              "data-component-name": "CardContent",
                              "data-component-content":
                                "%7B%22className%22%3A%22px-4%20pb-4%22%7D",
                              className: "px-4 pb-4",
                              children: a.jsx("div", {
                                "data-lov-id":
                                  "src\\components\\ai\\AISidebar.tsx:140:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ai\\AISidebar.tsx",
                                "data-component-line": "140",
                                "data-component-file": "AISidebar.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-3%20text-xs%20sm%3Atext-sm%22%7D",
                                className: "space-y-3 text-xs sm:text-sm",
                                children: a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\components\\ai\\AISidebar.tsx:141:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\components\\ai\\AISidebar.tsx",
                                  "data-component-line": "141",
                                  "data-component-file": "AISidebar.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D",
                                  className: "flex items-start gap-2",
                                  children: [
                                    a.jsx("div", {
                                      "data-lov-id":
                                        "src\\components\\ai\\AISidebar.tsx:142:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\components\\ai\\AISidebar.tsx",
                                      "data-component-line": "142",
                                      "data-component-file": "AISidebar.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-2%20h-2%20bg-green-500%20rounded-full%20mt-2%20flex-shrink-0%22%7D",
                                      className:
                                        "w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0",
                                    }),
                                    a.jsx("p", {
                                      "data-lov-id":
                                        "src\\components\\ai\\AISidebar.tsx:143:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\components\\ai\\AISidebar.tsx",
                                      "data-component-line": "143",
                                      "data-component-file": "AISidebar.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-muted-foreground%20italic%22%7D",
                                      className: "text-muted-foreground italic",
                                      children: e("ai_sidebar.insight_growth"),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      n === "detail" &&
                        a.jsxs(m, {
                          "data-lov-id":
                            "src\\components\\ai\\AISidebar.tsx:153:14",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\components\\ai\\AISidebar.tsx",
                          "data-component-line": "153",
                          "data-component-file": "AISidebar.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(p, {
                              "data-lov-id":
                                "src\\components\\ai\\AISidebar.tsx:154:16",
                              "data-lov-name": "CardHeader",
                              "data-component-path":
                                "src\\components\\ai\\AISidebar.tsx",
                              "data-component-line": "154",
                              "data-component-file": "AISidebar.tsx",
                              "data-component-name": "CardHeader",
                              "data-component-content":
                                "%7B%22className%22%3A%22pb-3%20px-4%22%7D",
                              className: "pb-3 px-4",
                              children: a.jsxs(r, {
                                "data-lov-id":
                                  "src\\components\\ai\\AISidebar.tsx:155:18",
                                "data-lov-name": "CardTitle",
                                "data-component-path":
                                  "src\\components\\ai\\AISidebar.tsx",
                                "data-component-line": "155",
                                "data-component-file": "AISidebar.tsx",
                                "data-component-name": "CardTitle",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20font-medium%20flex%20items-center%20gap-2%22%7D",
                                className:
                                  "text-sm font-medium flex items-center gap-2",
                                children: [
                                  a.jsx(j, {
                                    "data-lov-id":
                                      "src\\components\\ai\\AISidebar.tsx:156:20",
                                    "data-lov-name": "Users",
                                    "data-component-path":
                                      "src\\components\\ai\\AISidebar.tsx",
                                    "data-component-line": "156",
                                    "data-component-file": "AISidebar.tsx",
                                    "data-component-name": "Users",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-4%20w-4%20text-blue-600%22%7D",
                                    className: "h-4 w-4 text-blue-600",
                                  }),
                                  e("ai_sidebar.engagement_title"),
                                ],
                              }),
                            }),
                            a.jsx(l, {
                              "data-lov-id":
                                "src\\components\\ai\\AISidebar.tsx:160:16",
                              "data-lov-name": "CardContent",
                              "data-component-path":
                                "src\\components\\ai\\AISidebar.tsx",
                              "data-component-line": "160",
                              "data-component-file": "AISidebar.tsx",
                              "data-component-name": "CardContent",
                              "data-component-content":
                                "%7B%22className%22%3A%22px-4%20pb-4%20text-xs%20sm%3Atext-sm%22%7D",
                              className: "px-4 pb-4 text-xs sm:text-sm",
                              children: a.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\ai\\AISidebar.tsx:161:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\ai\\AISidebar.tsx",
                                "data-component-line": "161",
                                "data-component-file": "AISidebar.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%22%7D",
                                className: "space-y-2",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ai\\AISidebar.tsx:162:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ai\\AISidebar.tsx",
                                    "data-component-line": "162",
                                    "data-component-file": "AISidebar.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                                    className: "flex justify-between",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ai\\AISidebar.tsx:163:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ai\\AISidebar.tsx",
                                        "data-component-line": "163",
                                        "data-component-file": "AISidebar.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-muted-foreground%20text-xs%22%7D",
                                        className:
                                          "text-muted-foreground text-xs",
                                        children: e(
                                          "ai_sidebar.engagement_managers",
                                        ),
                                      }),
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ai\\AISidebar.tsx:164:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ai\\AISidebar.tsx",
                                        "data-component-line": "164",
                                        "data-component-file": "AISidebar.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-primary%20font-medium%22%7D",
                                        className: "text-primary font-medium",
                                        children: e("ai_sidebar.views", {
                                          count: 12,
                                        }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\ai\\AISidebar.tsx:166:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\ai\\AISidebar.tsx",
                                    "data-component-line": "166",
                                    "data-component-file": "AISidebar.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                                    className: "flex justify-between",
                                    children: [
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ai\\AISidebar.tsx:167:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ai\\AISidebar.tsx",
                                        "data-component-line": "167",
                                        "data-component-file": "AISidebar.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-muted-foreground%20text-xs%22%7D",
                                        className:
                                          "text-muted-foreground text-xs",
                                        children: e(
                                          "ai_sidebar.engagement_partners",
                                        ),
                                      }),
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\ai\\AISidebar.tsx:168:22",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\ai\\AISidebar.tsx",
                                        "data-component-line": "168",
                                        "data-component-file": "AISidebar.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-primary%20font-medium%22%7D",
                                        className: "text-primary font-medium",
                                        children: e("ai_sidebar.views", {
                                          count: 8,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
            }),
          ],
        });
  };
export { L as A };
