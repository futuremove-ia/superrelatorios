import { j as t, d as e } from "./index-BZzvAVnT.js";
import { C as u, a as k } from "./card-DCmFy9yX.js";
import { B as v } from "./badge-DMGJasfj.js";
import { d as g, $ as f } from "./utils-C25gojUd.js";
const A = ({
  title: c,
  value: s,
  icon: d,
  trend: a,
  subtitle: n,
  variant: o = "default",
  className: m,
  role: i,
  "aria-label": r,
  style: p,
}) => {
  const l = () => {
      switch (o) {
        case "success":
          return "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20";
        case "warning":
          return "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20";
        case "info":
          return "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20";
        default:
          return "";
      }
    },
    x = () => {
      switch (o) {
        case "success":
          return "text-green-600 dark:text-green-400";
        case "warning":
          return "text-yellow-600 dark:text-yellow-400";
        case "info":
          return "text-blue-600 dark:text-blue-400";
        default:
          return "text-primary";
      }
    };
  return t.jsx(u, {
    "data-lov-id": "src\\components\\ui\\kpi-card.tsx:63:4",
    "data-lov-name": "Card",
    "data-component-path": "src\\components\\ui\\kpi-card.tsx",
    "data-component-line": "63",
    "data-component-file": "kpi-card.tsx",
    "data-component-name": "Card",
    "data-component-content": "%7B%7D",
    className: e("card-hover touch-target", l(), m),
    style: p,
    role: i,
    "aria-label": r,
    children: t.jsxs(k, {
      "data-lov-id": "src\\components\\ui\\kpi-card.tsx:73:6",
      "data-lov-name": "CardContent",
      "data-component-path": "src\\components\\ui\\kpi-card.tsx",
      "data-component-line": "73",
      "data-component-file": "kpi-card.tsx",
      "data-component-name": "CardContent",
      "data-component-content": "%7B%22className%22%3A%22p-4%20sm%3Ap-6%22%7D",
      className: "p-4 sm:p-6",
      children: [
        t.jsxs("div", {
          "data-lov-id": "src\\components\\ui\\kpi-card.tsx:74:8",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\ui\\kpi-card.tsx",
          "data-component-line": "74",
          "data-component-file": "kpi-card.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20items-start%20justify-between%22%7D",
          className: "flex items-start justify-between",
          children: [
            t.jsxs("div", {
              "data-lov-id": "src\\components\\ui\\kpi-card.tsx:75:10",
              "data-lov-name": "div",
              "data-component-path": "src\\components\\ui\\kpi-card.tsx",
              "data-component-line": "75",
              "data-component-file": "kpi-card.tsx",
              "data-component-name": "div",
              "data-component-content": "%7B%22className%22%3A%22flex-1%22%7D",
              className: "flex-1",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\components\\ui\\kpi-card.tsx:76:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\components\\ui\\kpi-card.tsx",
                  "data-component-line": "76",
                  "data-component-file": "kpi-card.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    t.jsx(d, {
                      "data-lov-id": "src\\components\\ui\\kpi-card.tsx:77:14",
                      "data-lov-name": "Icon",
                      "data-component-path":
                        "src\\components\\ui\\kpi-card.tsx",
                      "data-component-line": "77",
                      "data-component-file": "kpi-card.tsx",
                      "data-component-name": "Icon",
                      "data-component-content": "%7B%7D",
                      className: e("h-4 w-4 sm:h-5 sm:w-5", x()),
                      "aria-hidden": "true",
                    }),
                    t.jsx("p", {
                      "data-lov-id": "src\\components\\ui\\kpi-card.tsx:78:14",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\components\\ui\\kpi-card.tsx",
                      "data-component-line": "78",
                      "data-component-file": "kpi-card.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-xs%20sm%3Atext-sm%20font-medium%20text-muted-foreground%22%7D",
                      className:
                        "text-xs sm:text-sm font-medium text-muted-foreground",
                      children: c,
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\components\\ui\\kpi-card.tsx:83:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\components\\ui\\kpi-card.tsx",
                  "data-component-line": "83",
                  "data-component-file": "kpi-card.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-1%22%7D",
                  className: "space-y-1",
                  children: [
                    t.jsx("p", {
                      "data-lov-id": "src\\components\\ui\\kpi-card.tsx:84:14",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\components\\ui\\kpi-card.tsx",
                      "data-component-line": "84",
                      "data-component-file": "kpi-card.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20text-foreground%22%7D",
                      className:
                        "text-2xl sm:text-3xl font-bold text-foreground",
                      children: s,
                    }),
                    n &&
                      t.jsx("p", {
                        "data-lov-id":
                          "src\\components\\ui\\kpi-card.tsx:88:16",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\components\\ui\\kpi-card.tsx",
                        "data-component-line": "88",
                        "data-component-file": "kpi-card.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-xs%20sm%3Atext-sm%20text-muted-foreground%22%7D",
                        className: "text-xs sm:text-sm text-muted-foreground",
                        children: n,
                      }),
                  ],
                }),
              ],
            }),
            a &&
              t.jsxs("div", {
                "data-lov-id": "src\\components\\ui\\kpi-card.tsx:96:12",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\ui\\kpi-card.tsx",
                "data-component-line": "96",
                "data-component-file": "kpi-card.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-1%22%7D",
                className: "flex items-center gap-1",
                children: [
                  a.isPositive
                    ? t.jsx(g, {
                        "data-lov-id":
                          "src\\components\\ui\\kpi-card.tsx:98:16",
                        "data-lov-name": "TrendingUp",
                        "data-component-path":
                          "src\\components\\ui\\kpi-card.tsx",
                        "data-component-line": "98",
                        "data-component-file": "kpi-card.tsx",
                        "data-component-name": "TrendingUp",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-3%20w-3%20sm%3Ah-4%20sm%3Aw-4%20text-green-600%22%7D",
                        className: "h-3 w-3 sm:h-4 sm:w-4 text-green-600",
                        "aria-hidden": "true",
                      })
                    : t.jsx(f, {
                        "data-lov-id":
                          "src\\components\\ui\\kpi-card.tsx:100:16",
                        "data-lov-name": "TrendingDown",
                        "data-component-path":
                          "src\\components\\ui\\kpi-card.tsx",
                        "data-component-line": "100",
                        "data-component-file": "kpi-card.tsx",
                        "data-component-name": "TrendingDown",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-3%20w-3%20sm%3Ah-4%20sm%3Aw-4%20text-red-600%22%7D",
                        className: "h-3 w-3 sm:h-4 sm:w-4 text-red-600",
                        "aria-hidden": "true",
                      }),
                  t.jsxs(v, {
                    "data-lov-id": "src\\components\\ui\\kpi-card.tsx:102:14",
                    "data-lov-name": "Badge",
                    "data-component-path": "src\\components\\ui\\kpi-card.tsx",
                    "data-component-line": "102",
                    "data-component-file": "kpi-card.tsx",
                    "data-component-name": "Badge",
                    "data-component-content": "%7B%22text%22%3A%22%25%22%7D",
                    variant: "secondary",
                    className: e(
                      "text-xs",
                      a.isPositive
                        ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
                    ),
                    "aria-label": `Tendência ${a.isPositive ? "positiva" : "negativa"} de ${Math.abs(a.value)}%`,
                    children: [a.isPositive ? "+" : "", a.value, "%"],
                  }),
                ],
              }),
          ],
        }),
        (a == null ? void 0 : a.label) &&
          t.jsx("p", {
            "data-lov-id": "src\\components\\ui\\kpi-card.tsx:119:10",
            "data-lov-name": "p",
            "data-component-path": "src\\components\\ui\\kpi-card.tsx",
            "data-component-line": "119",
            "data-component-file": "kpi-card.tsx",
            "data-component-name": "p",
            "data-component-content":
              "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20mt-2%22%7D",
            className: "text-xs text-muted-foreground mt-2",
            children: a.label,
          }),
      ],
    }),
  });
};
export { A as K };
