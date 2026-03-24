import { u as i, j as t, B as c } from "./index-BZzvAVnT.js";
import { C as m, b as l, c as p, d as x, a as u } from "./card-DCmFy9yX.js";
import { B as C } from "./badge-DMGJasfj.js";
import { q as b, T as v, J as h, Z as P } from "./utils-C25gojUd.js";
const B = ({ priority: a, onAction: n, onValidate: o }) => {
  const { t: e } = i(),
    r = (s) => {
      switch (s) {
        case "high":
          return "text-red-600 bg-red-50 border-red-100";
        case "medium":
          return "text-amber-600 bg-amber-50 border-amber-100";
        case "low":
          return "text-blue-600 bg-blue-50 border-blue-100";
      }
    },
    d = (s) => {
      switch (s) {
        case "suggested":
          return t.jsx(P, {
            "data-lov-id": "src\\components\\business\\PriorityCard.tsx:29:31",
            "data-lov-name": "Zap",
            "data-component-path":
              "src\\components\\business\\PriorityCard.tsx",
            "data-component-line": "29",
            "data-component-file": "PriorityCard.tsx",
            "data-component-name": "Zap",
            "data-component-content":
              "%7B%22className%22%3A%22h-4%20w-4%20text-amber-500%22%7D",
            className: "h-4 w-4 text-amber-500",
          });
        case "validated":
          return t.jsx(h, {
            "data-lov-id": "src\\components\\business\\PriorityCard.tsx:30:31",
            "data-lov-name": "CheckCircle2",
            "data-component-path":
              "src\\components\\business\\PriorityCard.tsx",
            "data-component-line": "30",
            "data-component-file": "PriorityCard.tsx",
            "data-component-name": "CheckCircle2",
            "data-component-content":
              "%7B%22className%22%3A%22h-4%20w-4%20text-green-500%22%7D",
            className: "h-4 w-4 text-green-500",
          });
        case "dismissed":
          return t.jsx(v, {
            "data-lov-id": "src\\components\\business\\PriorityCard.tsx:31:31",
            "data-lov-name": "AlertTriangle",
            "data-component-path":
              "src\\components\\business\\PriorityCard.tsx",
            "data-component-line": "31",
            "data-component-file": "PriorityCard.tsx",
            "data-component-name": "AlertTriangle",
            "data-component-content":
              "%7B%22className%22%3A%22h-4%20w-4%20text-slate-400%22%7D",
            className: "h-4 w-4 text-slate-400",
          });
      }
    };
  return t.jsxs(m, {
    "data-lov-id": "src\\components\\business\\PriorityCard.tsx:36:4",
    "data-lov-name": "Card",
    "data-component-path": "src\\components\\business\\PriorityCard.tsx",
    "data-component-line": "36",
    "data-component-file": "PriorityCard.tsx",
    "data-component-name": "Card",
    "data-component-content":
      "%7B%22className%22%3A%22card-hover%20border-border%2F40%20group%20overflow-hidden%22%7D",
    className: "card-hover border-border/40 group overflow-hidden",
    children: [
      t.jsxs(l, {
        "data-lov-id": "src\\components\\business\\PriorityCard.tsx:37:6",
        "data-lov-name": "CardHeader",
        "data-component-path": "src\\components\\business\\PriorityCard.tsx",
        "data-component-line": "37",
        "data-component-file": "PriorityCard.tsx",
        "data-component-name": "CardHeader",
        "data-component-content": "%7B%22className%22%3A%22pb-3%22%7D",
        className: "pb-3",
        children: [
          t.jsxs("div", {
            "data-lov-id": "src\\components\\business\\PriorityCard.tsx:38:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\components\\business\\PriorityCard.tsx",
            "data-component-line": "38",
            "data-component-file": "PriorityCard.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-2%22%7D",
            className: "flex items-center justify-between mb-2",
            children: [
              t.jsx(C, {
                "data-lov-id":
                  "src\\components\\business\\PriorityCard.tsx:39:10",
                "data-lov-name": "Badge",
                "data-component-path":
                  "src\\components\\business\\PriorityCard.tsx",
                "data-component-line": "39",
                "data-component-file": "PriorityCard.tsx",
                "data-component-name": "Badge",
                "data-component-content": "%7B%7D",
                variant: "outline",
                className: `font-medium ${r(a.level)}`,
                children: e(`priorities.levels.${a.level}`),
              }),
              t.jsxs("div", {
                "data-lov-id":
                  "src\\components\\business\\PriorityCard.tsx:42:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\business\\PriorityCard.tsx",
                "data-component-line": "42",
                "data-component-file": "PriorityCard.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22text%22%3A%22%3A%22%2C%22className%22%3A%22flex%20items-center%20gap-1%20text-xs%20font-semibold%20text-muted-foreground%20bg-muted%2F50%20px-2%20py-1%20rounded-md%22%7D",
                className:
                  "flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted/50 px-2 py-1 rounded-md",
                children: [
                  e("priorities.card.score"),
                  ": ",
                  a.score.calculatedValue,
                ],
              }),
            ],
          }),
          t.jsx(p, {
            "data-lov-id": "src\\components\\business\\PriorityCard.tsx:46:8",
            "data-lov-name": "CardTitle",
            "data-component-path":
              "src\\components\\business\\PriorityCard.tsx",
            "data-component-line": "46",
            "data-component-file": "PriorityCard.tsx",
            "data-component-name": "CardTitle",
            "data-component-content":
              "%7B%22className%22%3A%22text-lg%20flex%20items-center%20gap-2%22%7D",
            className: "text-lg flex items-center gap-2",
            children: a.title,
          }),
          t.jsx(x, {
            "data-lov-id": "src\\components\\business\\PriorityCard.tsx:49:8",
            "data-lov-name": "CardDescription",
            "data-component-path":
              "src\\components\\business\\PriorityCard.tsx",
            "data-component-line": "49",
            "data-component-file": "PriorityCard.tsx",
            "data-component-name": "CardDescription",
            "data-component-content":
              "%7B%22className%22%3A%22line-clamp-2%22%7D",
            className: "line-clamp-2",
            children: a.explanation,
          }),
        ],
      }),
      t.jsx(u, {
        "data-lov-id": "src\\components\\business\\PriorityCard.tsx:53:6",
        "data-lov-name": "CardContent",
        "data-component-path": "src\\components\\business\\PriorityCard.tsx",
        "data-component-line": "53",
        "data-component-file": "PriorityCard.tsx",
        "data-component-name": "CardContent",
        "data-component-content": "%7B%22className%22%3A%22pt-0%22%7D",
        className: "pt-0",
        children: t.jsxs("div", {
          "data-lov-id": "src\\components\\business\\PriorityCard.tsx:54:8",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\business\\PriorityCard.tsx",
          "data-component-line": "54",
          "data-component-file": "PriorityCard.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mt-4%22%7D",
          className: "flex items-center justify-between mt-4",
          children: [
            t.jsxs("div", {
              "data-lov-id":
                "src\\components\\business\\PriorityCard.tsx:55:10",
              "data-lov-name": "div",
              "data-component-path":
                "src\\components\\business\\PriorityCard.tsx",
              "data-component-line": "55",
              "data-component-file": "PriorityCard.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-xs%20text-muted-foreground%22%7D",
              className:
                "flex items-center gap-2 text-xs text-muted-foreground",
              children: [
                d(a.status),
                t.jsx("span", {
                  "data-lov-id":
                    "src\\components\\business\\PriorityCard.tsx:57:12",
                  "data-lov-name": "span",
                  "data-component-path":
                    "src\\components\\business\\PriorityCard.tsx",
                  "data-component-line": "57",
                  "data-component-file": "PriorityCard.tsx",
                  "data-component-name": "span",
                  "data-component-content":
                    "%7B%22className%22%3A%22capitalize%22%7D",
                  className: "capitalize",
                  children:
                    a.status === "suggested"
                      ? e("priorities.card.ai_suggested")
                      : e("priorities.card.validated"),
                }),
              ],
            }),
            t.jsxs(c, {
              "data-lov-id":
                "src\\components\\business\\PriorityCard.tsx:61:10",
              "data-lov-name": "Button",
              "data-component-path":
                "src\\components\\business\\PriorityCard.tsx",
              "data-component-line": "61",
              "data-component-file": "PriorityCard.tsx",
              "data-component-name": "Button",
              "data-component-content":
                "%7B%22className%22%3A%22group-hover%3Atranslate-x-1%20transition-transform%22%7D",
              size: "sm",
              variant: a.status === "suggested" ? "default" : "ghost",
              className: "group-hover:translate-x-1 transition-transform",
              onClick: () => {
                a.status === "suggested" && o ? o(a) : n == null || n(a.id);
              },
              children: [
                a.status === "suggested"
                  ? e("priorities.card.cta_validate")
                  : e("priorities.card.cta_action"),
                t.jsx(b, {
                  "data-lov-id":
                    "src\\components\\business\\PriorityCard.tsx:74:12",
                  "data-lov-name": "ArrowRight",
                  "data-component-path":
                    "src\\components\\business\\PriorityCard.tsx",
                  "data-component-line": "74",
                  "data-component-file": "PriorityCard.tsx",
                  "data-component-name": "ArrowRight",
                  "data-component-content":
                    "%7B%22className%22%3A%22ml-2%20h-4%20w-4%22%7D",
                  className: "ml-2 h-4 w-4",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
export { B as P };
