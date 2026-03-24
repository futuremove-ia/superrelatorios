import { u as w, c as D, j as a, B as e } from "./index-BZzvAVnT.js";
import { r as j } from "./vendor-BgR6OOld.js";
import { C as p, b as s, c as d, d as g, a as l } from "./card-DCmFy9yX.js";
import { B as A } from "./badge-DMGJasfj.js";
import { a as y, E as k, b as i } from "./mockBusiness-BBPynaQW.js";
import {
  n as v,
  f as C,
  Z as h,
  J as _,
  ag as F,
  b as f,
  k as T,
  v as H,
  d as P,
  q as z,
} from "./utils-C25gojUd.js";
import "./router-D2JcpG7e.js";
const M = () => {
  const { t } = w(),
    { toast: u } = D(),
    [o, b] = j.useState(y),
    N = (n) => {
      b((B) =>
        B.map((c) => {
          if (c.id === n) {
            const x = c.status !== "completed";
            return (
              x &&
                u({
                  title: t("action_plan.toast.completed_title"),
                  description: t("action_plan.toast.completed_desc"),
                  action: a.jsxs(e, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:41:14",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "41",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22gap-1%20border-primary%2F20%20hover%3Abg-primary%2F5%22%7D",
                    size: "sm",
                    variant: "outline",
                    className: "gap-1 border-primary/20 hover:bg-primary/5",
                    children: [
                      t("action_plan.toast.cta_validate"),
                      " ",
                      a.jsx(h, {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:42:54",
                        "data-lov-name": "Zap",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "42",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "Zap",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-3%20w-3%20text-primary%22%7D",
                        className: "h-3 w-3 text-primary",
                      }),
                    ],
                  }),
                }),
              {
                ...c,
                status: x ? "completed" : "pending",
                updatedAt: new Date().toISOString(),
              }
            );
          }
          return c;
        }),
      );
    },
    m = o.filter((n) => n.status === "completed").length,
    r = Math.round((m / o.length) * 100);
  return a.jsxs("div", {
    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:62:4",
    "data-lov-name": "div",
    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
    "data-component-line": "62",
    "data-component-file": "ActionPlan.tsx",
    "data-component-name": "div",
    "data-component-content":
      "%7B%22className%22%3A%22p-4%20sm%3Ap-6%20max-w-7xl%20mx-auto%20space-y-8%20animate-in%20fade-in%20duration-500%22%7D",
    className:
      "p-4 sm:p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500",
    children: [
      a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:63:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
        "data-component-line": "63",
        "data-component-file": "ActionPlan.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-6%20border-b%20pb-6%22%7D",
        className:
          "flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:64:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
            "data-component-line": "64",
            "data-component-file": "ActionPlan.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-1%22%7D",
            className: "space-y-1",
            children: [
              a.jsxs("h1", {
                "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:65:10",
                "data-lov-name": "h1",
                "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                "data-component-line": "65",
                "data-component-file": "ActionPlan.tsx",
                "data-component-name": "h1",
                "data-component-content":
                  "%7B%22className%22%3A%22text-2xl%20sm%3Atext-4xl%20font-black%20text-foreground%20tracking-tight%20flex%20items-center%20gap-3%22%7D",
                className:
                  "text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:66:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "66",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-2%20bg-primary%2F10%20rounded-xl%22%7D",
                    className: "p-2 bg-primary/10 rounded-xl",
                    children: a.jsx(v, {
                      "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:67:14",
                      "data-lov-name": "ListChecks",
                      "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                      "data-component-line": "67",
                      "data-component-file": "ActionPlan.tsx",
                      "data-component-name": "ListChecks",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-8%20w-8%20text-primary%22%7D",
                      className: "h-8 w-8 text-primary",
                    }),
                  }),
                  t("action_plan.title"),
                ],
              }),
              a.jsx("p", {
                "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:71:10",
                "data-lov-name": "p",
                "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                "data-component-line": "71",
                "data-component-file": "ActionPlan.tsx",
                "data-component-name": "p",
                "data-component-content":
                  "%7B%22className%22%3A%22text-muted-foreground%20font-medium%22%7D",
                className: "text-muted-foreground font-medium",
                children: t("action_plan.subtitle"),
              }),
            ],
          }),
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:76:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
            "data-component-line": "76",
            "data-component-file": "ActionPlan.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
            className: "flex items-center gap-3",
            children: [
              a.jsxs(e, {
                "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:77:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                "data-component-line": "77",
                "data-component-file": "ActionPlan.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22gap-2%20font-bold%20shadow-sm%22%7D",
                variant: "outline",
                size: "lg",
                className: "gap-2 font-bold shadow-sm",
                children: [
                  a.jsx(C, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:78:12",
                    "data-lov-name": "BarChart3",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "78",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "BarChart3",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                    className: "h-5 w-5",
                  }),
                  t("action_plan.view_impact"),
                ],
              }),
              a.jsxs(e, {
                "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:81:10",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                "data-component-line": "81",
                "data-component-file": "ActionPlan.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22gap-2%20font-bold%20shadow-md%20bg-primary%20hover%3Abg-primary%2F90%22%7D",
                size: "lg",
                className:
                  "gap-2 font-bold shadow-md bg-primary hover:bg-primary/90",
                children: [
                  a.jsx(h, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:82:12",
                    "data-lov-name": "Zap",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "82",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "Zap",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                    className: "h-5 w-5",
                  }),
                  t("action_plan.new_diagnostic"),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:88:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
        "data-component-line": "88",
        "data-component-file": "ActionPlan.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-3%20gap-8%22%7D",
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        children: [
          a.jsx("div", {
            "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:89:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
            "data-component-line": "89",
            "data-component-file": "ActionPlan.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22lg%3Acol-span-2%20space-y-6%22%7D",
            className: "lg:col-span-2 space-y-6",
            children:
              o.length === 0
                ? a.jsx(k, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:91:12",
                    "data-lov-name": "EmptyState",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "91",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "EmptyState",
                    "data-component-content": "%7B%7D",
                    icon: v,
                    title: t("action_plan.empty.title"),
                    description: t("action_plan.empty.description"),
                    actionLabel: t("action_plan.empty.cta"),
                    onAction: () => {},
                  })
                : a.jsxs(p, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:99:12",
                    "data-lov-name": "Card",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "99",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "Card",
                    "data-component-content":
                      "%7B%22className%22%3A%22border-none%20shadow-xl%20bg-card%20overflow-hidden%22%7D",
                    className: "border-none shadow-xl bg-card overflow-hidden",
                    children: [
                      a.jsxs(s, {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:100:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "100",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content":
                          "%7B%22className%22%3A%22pb-6%20border-b%20bg-muted%2F20%22%7D",
                        className: "pb-6 border-b bg-muted/20",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:101:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "101",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-4%22%7D",
                            className: "flex items-center justify-between mb-4",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:102:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "102",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                className: "flex items-center gap-2",
                                children: [
                                  a.jsx(A, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ActionPlan.tsx:103:20",
                                    "data-lov-name": "Badge",
                                    "data-component-path":
                                      "src\\pages\\app\\ActionPlan.tsx",
                                    "data-component-line": "103",
                                    "data-component-file": "ActionPlan.tsx",
                                    "data-component-name": "Badge",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22bg-primary%2F5%20text-primary%20border-primary%2F20%20text-%5B10px%5D%20uppercase%20font-black%20tracking-widest%20px-2%20py-0.5%22%7D",
                                    variant: "outline",
                                    className:
                                      "bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-black tracking-widest px-2 py-0.5",
                                    children: t("action_plan.active_cycle"),
                                  }),
                                  a.jsxs("span", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ActionPlan.tsx:106:20",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\pages\\app\\ActionPlan.tsx",
                                    "data-component-line": "106",
                                    "data-component-file": "ActionPlan.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Ref%3A%22%2C%22className%22%3A%22text-%5B10px%5D%20font-mono%20text-muted-foreground%20uppercase%22%7D",
                                    className:
                                      "text-[10px] font-mono text-muted-foreground uppercase",
                                    children: ["Ref: ", i.id],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:108:18",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "108",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22text%22%3A%22%2F%22%2C%22className%22%3A%22text-xs%20font-bold%20text-muted-foreground%22%7D",
                                className:
                                  "text-xs font-bold text-muted-foreground",
                                children: [
                                  m,
                                  "/",
                                  o.length,
                                  " ",
                                  t("action_plan.completed_label"),
                                ],
                              }),
                            ],
                          }),
                          a.jsx(d, {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:112:16",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "112",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-2xl%20font-black%20tracking-tight%22%7D",
                            className: "text-2xl font-black tracking-tight",
                            children: i.title,
                          }),
                          a.jsx(g, {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:113:16",
                            "data-lov-name": "CardDescription",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "113",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "CardDescription",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-base%20font-medium%20text-muted-foreground%2F80%20mt-1%22%7D",
                            className:
                              "text-base font-medium text-muted-foreground/80 mt-1",
                            children: i.description,
                          }),
                        ],
                      }),
                      a.jsxs(l, {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:117:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "117",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22p-0%22%7D",
                        className: "p-0",
                        children: [
                          a.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:118:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "118",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22divide-y%20divide-border%2F50%22%7D",
                            className: "divide-y divide-border/50",
                            children: o.map((n) =>
                              a.jsxs(
                                "div",
                                {
                                  "data-lov-id":
                                    "src\\pages\\app\\ActionPlan.tsx:120:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ActionPlan.tsx",
                                  "data-component-line": "120",
                                  "data-component-file": "ActionPlan.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  className: `group p-6 flex items-start gap-5 transition-all duration-300 ${n.status === "completed" ? "bg-muted/10 opacity-60" : "hover:bg-primary/[0.02] active:bg-primary/[0.04]"}`,
                                  children: [
                                    a.jsx("button", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ActionPlan.tsx:128:22",
                                      "data-lov-name": "button",
                                      "data-component-path":
                                        "src\\pages\\app\\ActionPlan.tsx",
                                      "data-component-line": "128",
                                      "data-component-file": "ActionPlan.tsx",
                                      "data-component-name": "button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22mt-1%20flex-shrink-0%20transition-all%20active%3Ascale-90%22%7D",
                                      onClick: () => N(n.id),
                                      className:
                                        "mt-1 flex-shrink-0 transition-all active:scale-90",
                                      children:
                                        n.status === "completed"
                                          ? a.jsx("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\ActionPlan.tsx:133:26",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\ActionPlan.tsx",
                                              "data-component-line": "133",
                                              "data-component-file":
                                                "ActionPlan.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22h-7%20w-7%20rounded-full%20bg-green-500%20flex%20items-center%20justify-center%20text-white%20shadow-sm%20shadow-green-200%22%7D",
                                              className:
                                                "h-7 w-7 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm shadow-green-200",
                                              children: a.jsx(_, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ActionPlan.tsx:134:28",
                                                "data-lov-name": "CheckCircle2",
                                                "data-component-path":
                                                  "src\\pages\\app\\ActionPlan.tsx",
                                                "data-component-line": "134",
                                                "data-component-file":
                                                  "ActionPlan.tsx",
                                                "data-component-name":
                                                  "CheckCircle2",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22h-4%20w-4%20stroke-%5B3px%5D%22%7D",
                                                className:
                                                  "h-4 w-4 stroke-[3px]",
                                              }),
                                            })
                                          : a.jsx("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\ActionPlan.tsx:137:26",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\ActionPlan.tsx",
                                              "data-component-line": "137",
                                              "data-component-file":
                                                "ActionPlan.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22h-7%20w-7%20rounded-full%20border-2%20border-muted-foreground%2F30%20flex%20items-center%20justify-center%20hover%3Aborder-primary%20transition-colors%20group-hover%3Abg-primary%2F5%22%7D",
                                              className:
                                                "h-7 w-7 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors group-hover:bg-primary/5",
                                              children: a.jsx(F, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ActionPlan.tsx:138:28",
                                                "data-lov-name": "Circle",
                                                "data-component-path":
                                                  "src\\pages\\app\\ActionPlan.tsx",
                                                "data-component-line": "138",
                                                "data-component-file":
                                                  "ActionPlan.tsx",
                                                "data-component-name": "Circle",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22h-4%20w-4%20text-transparent%22%7D",
                                                className:
                                                  "h-4 w-4 text-transparent",
                                              }),
                                            }),
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ActionPlan.tsx:143:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ActionPlan.tsx",
                                      "data-component-line": "143",
                                      "data-component-file": "ActionPlan.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex-1%20min-w-0%20space-y-1%22%7D",
                                      className: "flex-1 min-w-0 space-y-1",
                                      children: [
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ActionPlan.tsx:144:24",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\ActionPlan.tsx",
                                          "data-component-line": "144",
                                          "data-component-file":
                                            "ActionPlan.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                          className: "flex items-center gap-3",
                                          children: [
                                            a.jsx("h4", {
                                              "data-lov-id":
                                                "src\\pages\\app\\ActionPlan.tsx:145:26",
                                              "data-lov-name": "h4",
                                              "data-component-path":
                                                "src\\pages\\app\\ActionPlan.tsx",
                                              "data-component-line": "145",
                                              "data-component-file":
                                                "ActionPlan.tsx",
                                              "data-component-name": "h4",
                                              "data-component-content":
                                                "%7B%7D",
                                              className: `font-bold text-lg leading-none tracking-tight ${n.status === "completed" ? "line-through text-muted-foreground decoration-2" : ""}`,
                                              children: n.title,
                                            }),
                                            n.status !== "completed" &&
                                              a.jsx(A, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ActionPlan.tsx:151:28",
                                                "data-lov-name": "Badge",
                                                "data-component-path":
                                                  "src\\pages\\app\\ActionPlan.tsx",
                                                "data-component-line": "151",
                                                "data-component-file":
                                                  "ActionPlan.tsx",
                                                "data-component-name": "Badge",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22bg-amber-100%20text-amber-700%20border-none%20text-%5B9px%5D%20font-black%20tracking-widest%20h-5%22%7D",
                                                className:
                                                  "bg-amber-100 text-amber-700 border-none text-[9px] font-black tracking-widest h-5",
                                                children: t(
                                                  "action_plan.high_impact_badge",
                                                ),
                                              }),
                                          ],
                                        }),
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ActionPlan.tsx:156:24",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\ActionPlan.tsx",
                                          "data-component-line": "156",
                                          "data-component-file":
                                            "ActionPlan.tsx",
                                          "data-component-name": "p",
                                          "data-component-content": "%7B%7D",
                                          className: `text-sm leading-relaxed ${n.status === "completed" ? "text-muted-foreground/60" : "text-muted-foreground"}`,
                                          children: n.description,
                                        }),
                                        a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ActionPlan.tsx:162:24",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\ActionPlan.tsx",
                                          "data-component-line": "162",
                                          "data-component-file":
                                            "ActionPlan.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20flex-wrap%20items-center%20gap-x-6%20gap-y-2%20pt-3%22%7D",
                                          className:
                                            "flex flex-wrap items-center gap-x-6 gap-y-2 pt-3",
                                          children: [
                                            a.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\ActionPlan.tsx:163:26",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\ActionPlan.tsx",
                                              "data-component-line": "163",
                                              "data-component-file":
                                                "ActionPlan.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex%20items-center%20gap-1.5%20text-%5B11px%5D%20font-black%20text-muted-foreground%20uppercase%20tracking-widest%22%7D",
                                              className:
                                                "flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest",
                                              children: [
                                                a.jsx(f, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ActionPlan.tsx:164:28",
                                                  "data-lov-name": "Target",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ActionPlan.tsx",
                                                  "data-component-line": "164",
                                                  "data-component-file":
                                                    "ActionPlan.tsx",
                                                  "data-component-name":
                                                    "Target",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22h-3.5%20w-3.5%20text-primary%2F60%22%7D",
                                                  className:
                                                    "h-3.5 w-3.5 text-primary/60",
                                                }),
                                                t("action_plan.metric_label"),
                                                " ",
                                                a.jsx("span", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ActionPlan.tsx:165:60",
                                                  "data-lov-name": "span",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ActionPlan.tsx",
                                                  "data-component-line": "165",
                                                  "data-component-file":
                                                    "ActionPlan.tsx",
                                                  "data-component-name": "span",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22text-foreground%22%7D",
                                                  className: "text-foreground",
                                                  children: t(
                                                    "action_plan.metric_value",
                                                  ),
                                                }),
                                              ],
                                            }),
                                            a.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\ActionPlan.tsx:167:26",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\ActionPlan.tsx",
                                              "data-component-line": "167",
                                              "data-component-file":
                                                "ActionPlan.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex%20items-center%20gap-1.5%20text-%5B11px%5D%20font-black%20text-muted-foreground%20uppercase%20tracking-widest%22%7D",
                                              className:
                                                "flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest",
                                              children: [
                                                a.jsx(T, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ActionPlan.tsx:168:28",
                                                  "data-lov-name": "Clock",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ActionPlan.tsx",
                                                  "data-component-line": "168",
                                                  "data-component-file":
                                                    "ActionPlan.tsx",
                                                  "data-component-name":
                                                    "Clock",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22h-3.5%20w-3.5%20text-muted-foreground%2F60%22%7D",
                                                  className:
                                                    "h-3.5 w-3.5 text-muted-foreground/60",
                                                }),
                                                t("action_plan.deadline_label"),
                                                " ",
                                                a.jsx("span", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ActionPlan.tsx:169:62",
                                                  "data-lov-name": "span",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ActionPlan.tsx",
                                                  "data-component-line": "169",
                                                  "data-component-file":
                                                    "ActionPlan.tsx",
                                                  "data-component-name": "span",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22text-foreground%22%7D",
                                                  className: "text-foreground",
                                                  children: t(
                                                    "action_plan.deadline_value",
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsx(e, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ActionPlan.tsx:174:22",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\ActionPlan.tsx",
                                      "data-component-line": "174",
                                      "data-component-file": "ActionPlan.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22h-8%20w-8%20p-0%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%22%7D",
                                      variant: "ghost",
                                      size: "sm",
                                      className:
                                        "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                      children: a.jsx(H, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ActionPlan.tsx:175:24",
                                        "data-lov-name": "MoreHorizontal",
                                        "data-component-path":
                                          "src\\pages\\app\\ActionPlan.tsx",
                                        "data-component-line": "175",
                                        "data-component-file": "ActionPlan.tsx",
                                        "data-component-name": "MoreHorizontal",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                },
                                n.id,
                              ),
                            ),
                          }),
                          a.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:181:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "181",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-6%20bg-muted%2F5%20flex%20justify-center%20border-t%20border-dashed%22%7D",
                            className:
                              "p-6 bg-muted/5 flex justify-center border-t border-dashed",
                            children: a.jsxs(e, {
                              "data-lov-id":
                                "src\\pages\\app\\ActionPlan.tsx:182:18",
                              "data-lov-name": "Button",
                              "data-component-path":
                                "src\\pages\\app\\ActionPlan.tsx",
                              "data-component-line": "182",
                              "data-component-file": "ActionPlan.tsx",
                              "data-component-name": "Button",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-xs%20font-bold%20text-muted-foreground%20hover%3Atext-primary%20gap-2%22%7D",
                              variant: "ghost",
                              size: "sm",
                              className:
                                "text-xs font-bold text-muted-foreground hover:text-primary gap-2",
                              children: [
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ActionPlan.tsx:183:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ActionPlan.tsx",
                                  "data-component-line": "183",
                                  "data-component-file": "ActionPlan.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22%2B%22%2C%22className%22%3A%22h-4%20w-4%20rounded-full%20border%20border-current%20flex%20items-center%20justify-center%20text-%5B10px%5D%22%7D",
                                  className:
                                    "h-4 w-4 rounded-full border border-current flex items-center justify-center text-[10px]",
                                  children: "+",
                                }),
                                t("action_plan.add_manual"),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:192:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
            "data-component-line": "192",
            "data-component-file": "ActionPlan.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: [
              a.jsxs(p, {
                "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:193:10",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                "data-component-line": "193",
                "data-component-file": "ActionPlan.tsx",
                "data-component-name": "Card",
                "data-component-content":
                  "%7B%22className%22%3A%22bg-primary%20shadow-2xl%20border-none%20text-primary-foreground%20overflow-hidden%20relative%22%7D",
                className:
                  "bg-primary shadow-2xl border-none text-primary-foreground overflow-hidden relative",
                children: [
                  a.jsx("div", {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:194:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "194",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22absolute%20top-0%20right-0%20p-8%20opacity-10%20pointer-events-none%22%7D",
                    className:
                      "absolute top-0 right-0 p-8 opacity-10 pointer-events-none",
                    children: a.jsx(P, {
                      "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:195:14",
                      "data-lov-name": "TrendingUp",
                      "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                      "data-component-line": "195",
                      "data-component-file": "ActionPlan.tsx",
                      "data-component-name": "TrendingUp",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-32%20w-32%20rotate-12%22%7D",
                      className: "h-32 w-32 rotate-12",
                    }),
                  }),
                  a.jsxs(s, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:197:12",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "197",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content":
                      "%7B%22className%22%3A%22relative%22%7D",
                    className: "relative",
                    children: [
                      a.jsxs(d, {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:198:14",
                        "data-lov-name": "CardTitle",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "198",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-xl%20font-black%20flex%20items-center%20gap-2%22%7D",
                        className: "text-xl font-black flex items-center gap-2",
                        children: [
                          a.jsx(P, {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:199:16",
                            "data-lov-name": "TrendingUp",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "199",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "TrendingUp",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                            className: "h-5 w-5",
                          }),
                          t("action_plan.impact_card.title"),
                        ],
                      }),
                      a.jsx(g, {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:202:14",
                        "data-lov-name": "CardDescription",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "202",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "CardDescription",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-primary-foreground%2F70%20font-medium%22%7D",
                        className: "text-primary-foreground/70 font-medium",
                        children: t("action_plan.impact_card.desc"),
                      }),
                    ],
                  }),
                  a.jsxs(l, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:206:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "206",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-8%20relative%22%7D",
                    className: "space-y-8 relative",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:207:15",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "207",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:208:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "208",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20justify-between%20text-sm%20font-bold%20uppercase%20tracking-widest%22%7D",
                            className:
                              "flex justify-between text-sm font-bold uppercase tracking-widest",
                            children: [
                              a.jsx("span", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:209:20",
                                "data-lov-name": "span",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "209",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%7D",
                                children: t("action_plan.progress_label"),
                              }),
                              a.jsxs("span", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:210:20",
                                "data-lov-name": "span",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "210",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "span",
                                "data-component-content":
                                  "%7B%22text%22%3A%22%25%22%7D",
                                children: [r, "%"],
                              }),
                            ],
                          }),
                          a.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:212:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "212",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-3%20w-full%20bg-white%2F20%20rounded-full%20overflow-hidden%20p-0.5%20border%20border-white%2F10%22%7D",
                            className:
                              "h-3 w-full bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/10",
                            children: a.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ActionPlan.tsx:213:20",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ActionPlan.tsx",
                              "data-component-line": "213",
                              "data-component-file": "ActionPlan.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-full%20bg-white%20rounded-full%20transition-all%20duration-1000%20ease-out%20shadow-%5B0_0_15px_rgba(255%2C255%2C255%2C0.5)%5D%22%7D",
                              className:
                                "h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]",
                              style: { width: `${r}%` },
                            }),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:220:15",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "220",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22grid%20grid-cols-1%20gap-4%20pt-2%22%7D",
                        className: "grid grid-cols-1 gap-4 pt-2",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:221:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "221",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-4%20bg-white%2F10%20rounded-2xl%20border%20border-white%2F10%20backdrop-blur-sm%22%7D",
                            className:
                              "p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm",
                            children: [
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:222:20",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "222",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-%5B10px%5D%20font-black%20uppercase%20tracking-%5B0.2em%5D%20text-white%2F60%20mb-1%22%7D",
                                className:
                                  "text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1",
                                children: t("action_plan.impact_card.roi"),
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:223:20",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "223",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-3xl%20font-black%22%7D",
                                className: "text-3xl font-black",
                                children: t(
                                  "action_plan.impact_card.roi_value",
                                ),
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:226:18",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "226",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-4%20bg-white%2F10%20rounded-2xl%20border%20border-white%2F10%20backdrop-blur-sm%22%7D",
                            className:
                              "p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm",
                            children: [
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:227:20",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "227",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-%5B10px%5D%20font-black%20uppercase%20tracking-%5B0.2em%5D%20text-white%2F60%20mb-1%22%7D",
                                className:
                                  "text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1",
                                children: t(
                                  "action_plan.impact_card.time_saved",
                                ),
                              }),
                              a.jsxs("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\ActionPlan.tsx:228:20",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\ActionPlan.tsx",
                                "data-component-line": "228",
                                "data-component-file": "ActionPlan.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-3xl%20font-black%22%7D",
                                className: "text-3xl font-black",
                                children: [
                                  t("action_plan.impact_card.time_saved_value"),
                                  " ",
                                  a.jsx("span", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ActionPlan.tsx:228:103",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\pages\\app\\ActionPlan.tsx",
                                    "data-component-line": "228",
                                    "data-component-file": "ActionPlan.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-sm%20font-normal%20opacity-60%22%7D",
                                    className: "text-sm font-normal opacity-60",
                                    children: t(
                                      "action_plan.impact_card.time_saved_unit",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs(e, {
                        "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:232:15",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\ActionPlan.tsx",
                        "data-component-line": "232",
                        "data-component-file": "ActionPlan.tsx",
                        "data-component-name": "Button",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-full%20h-12%20gap-2%20bg-white%20text-primary%20hover%3Abg-white%2F90%20font-black%20shadow-lg%22%7D",
                        className:
                          "w-full h-12 gap-2 bg-white text-primary hover:bg-white/90 font-black shadow-lg",
                        variant: "secondary",
                        children: [
                          t("action_plan.impact_card.cta_evolution"),
                          a.jsx(z, {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:234:18",
                            "data-lov-name": "ArrowRight",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "234",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "ArrowRight",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                            className: "h-4 w-4",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(p, {
                "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:239:10",
                "data-lov-name": "Card",
                "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                "data-component-line": "239",
                "data-component-file": "ActionPlan.tsx",
                "data-component-name": "Card",
                "data-component-content":
                  "%7B%22className%22%3A%22border-dashed%20border-2%20bg-muted%2F20%22%7D",
                className: "border-dashed border-2 bg-muted/20",
                children: [
                  a.jsx(s, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:240:12",
                    "data-lov-name": "CardHeader",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "240",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "CardHeader",
                    "data-component-content":
                      "%7B%22className%22%3A%22pb-4%22%7D",
                    className: "pb-4",
                    children: a.jsxs(d, {
                      "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:241:14",
                      "data-lov-name": "CardTitle",
                      "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                      "data-component-line": "241",
                      "data-component-file": "ActionPlan.tsx",
                      "data-component-name": "CardTitle",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-sm%20font-black%20uppercase%20tracking-%5B0.2em%5D%20text-muted-foreground%20flex%20items-center%20gap-2%22%7D",
                      className:
                        "text-sm font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2",
                      children: [
                        a.jsx(f, {
                          "data-lov-id":
                            "src\\pages\\app\\ActionPlan.tsx:242:16",
                          "data-lov-name": "Target",
                          "data-component-path":
                            "src\\pages\\app\\ActionPlan.tsx",
                          "data-component-line": "242",
                          "data-component-file": "ActionPlan.tsx",
                          "data-component-name": "Target",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                          className: "h-4 w-4",
                        }),
                        t("action_plan.next_target.title"),
                      ],
                    }),
                  }),
                  a.jsx(l, {
                    "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:246:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                    "data-component-line": "246",
                    "data-component-file": "ActionPlan.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content": "%7B%7D",
                    children: a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\ActionPlan.tsx:247:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\ActionPlan.tsx",
                      "data-component-line": "247",
                      "data-component-file": "ActionPlan.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-4%22%7D",
                      className: "space-y-4",
                      children: [
                        a.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\ActionPlan.tsx:248:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\ActionPlan.tsx",
                          "data-component-line": "248",
                          "data-component-file": "ActionPlan.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20leading-relaxed%20font-medium%22%7D",
                          className:
                            "text-xs text-muted-foreground leading-relaxed font-medium",
                          children: t("action_plan.next_target.desc"),
                        }),
                        a.jsx("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ActionPlan.tsx:251:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ActionPlan.tsx",
                          "data-component-line": "251",
                          "data-component-file": "ActionPlan.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22p-4%20bg-background%2F50%20rounded-xl%20border%20border-dashed%20text-center%22%7D",
                          className:
                            "p-4 bg-background/50 rounded-xl border border-dashed text-center",
                          children: a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ActionPlan.tsx:252:18",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ActionPlan.tsx",
                            "data-component-line": "252",
                            "data-component-file": "ActionPlan.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-%5B10px%5D%20font-bold%20text-muted-foreground%20uppercase%20tracking-widest%22%7D",
                            className:
                              "text-[10px] font-bold text-muted-foreground uppercase tracking-widest",
                            children: t("action_plan.next_target.waiting"),
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
      }),
    ],
  });
};
export { M as default };
