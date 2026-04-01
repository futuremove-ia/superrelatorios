import { u as i, j as e, B as m } from "./index-DSuxXiPq.js";
import { C as n, b as u, c as x, d as o, a as g } from "./card-kC7SKLKo.js";
import { B as h } from "./badge-ByuXo0CA.js";
import { q as b, T as j, K as f, Z as p } from "./utils-CrQ_Kxni.js";
const B = ({ priority: s, onAction: t, onValidate: l }) => {
  const { t: a } = i(),
    d = (r) => {
      switch (r) {
        case "high":
          return "text-red-600 bg-red-50 border-red-100";
        case "medium":
          return "text-amber-600 bg-amber-50 border-amber-100";
        case "low":
          return "text-blue-600 bg-blue-50 border-blue-100";
      }
    },
    c = (r) => {
      switch (r) {
        case "suggested":
          return e.jsx(p, { className: "h-4 w-4 text-amber-500" });
        case "validated":
          return e.jsx(f, { className: "h-4 w-4 text-green-500" });
        case "dismissed":
          return e.jsx(j, { className: "h-4 w-4 text-slate-400" });
      }
    };
  return e.jsxs(n, {
    className: "card-hover border-border/40 group overflow-hidden",
    children: [
      e.jsxs(u, {
        className: "pb-3",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-2",
            children: [
              e.jsx(h, {
                variant: "outline",
                className: `font-medium ${d(s.level)}`,
                children: a(`priorities.levels.${s.level}`),
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted/50 px-2 py-1 rounded-md",
                children: [
                  a("priorities.card.score"),
                  ": ",
                  s.score.calculatedValue,
                ],
              }),
            ],
          }),
          e.jsx(x, {
            className: "text-lg flex items-center gap-2",
            children: s.title,
          }),
          e.jsx(o, { className: "line-clamp-2", children: s.explanation }),
        ],
      }),
      e.jsx(g, {
        className: "pt-0",
        children: e.jsxs("div", {
          className: "flex items-center justify-between mt-4",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center gap-2 text-xs text-muted-foreground",
              children: [
                c(s.status),
                e.jsx("span", {
                  className: "capitalize",
                  children:
                    s.status === "suggested"
                      ? a("priorities.card.ai_suggested")
                      : a("priorities.card.validated"),
                }),
              ],
            }),
            e.jsxs(m, {
              size: "sm",
              variant: s.status === "suggested" ? "default" : "ghost",
              className: "group-hover:translate-x-1 transition-transform",
              onClick: () => {
                s.status === "suggested" && l ? l(s) : t == null || t(s.id);
              },
              children: [
                s.status === "suggested"
                  ? a("priorities.card.cta_validate")
                  : a("priorities.card.cta_action"),
                e.jsx(b, { className: "ml-2 h-4 w-4" }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
export { B as P };
