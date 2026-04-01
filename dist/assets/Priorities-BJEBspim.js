import {
  u as h,
  j as e,
  T as D,
  m as A,
  o as I,
  p as M,
  B as g,
  d as O,
  c as y,
} from "./index-BNBvVWlM.js";
import { r as n } from "./router-C2uYhr1z.js";
import { B as k } from "./badge-BPr2YYbt.js";
import { K as u } from "./kpi-card-DRAZrA7z.js";
import { I as B } from "./input-Cqi0Zq_u.js";
import { T as E, a as K, b as _ } from "./tabs-D5L53k3c.js";
import { P as G } from "./PriorityCard-CHP_Aia7.js";
import {
  D as R,
  a as Z,
  b as q,
  c as z,
  d as F,
  e as H,
} from "./dialog-CtyrJveK.js";
import { S as $ } from "./slider-WeBWmDbB.js";
import { L as J } from "./label-8Qqntpp1.js";
import {
  a0 as Q,
  b,
  p as U,
  K as v,
  n as W,
  T as X,
  Z as S,
  q as C,
  s as Y,
  ae as ee,
  u as se,
  I as te,
} from "./utils-CrQ_Kxni.js";
import { m as ae, E as ie } from "./mockBusiness-fyyBYCal.js";
import "./card-ChPN7OiP.js";
import "./index-DGNdjbkF.js";
import "./index-CQm93fZh.js";
import "./index--tYt3JX3.js";
import "./index-GZYWVrBg.js";
import "./index-frX45eRk.js";
const re = ({ score: s, onChange: d }) => {
    const { t: a } = h(),
      o = (i, c) => {
        const l = { ...s, [i]: c };
        ((l.calculatedValue = Math.round(
          (l.impact * l.urgency * l.confidence) / l.effort,
        )),
          d(l));
      },
      r = [
        {
          key: "impact",
          label: a("priorities.validation_modal.rice.impact"),
          tooltip: a("priorities.validation_modal.rice.impact_tip"),
        },
        {
          key: "urgency",
          label: a("priorities.validation_modal.rice.urgency"),
          tooltip: a("priorities.validation_modal.rice.urgency_tip"),
        },
        {
          key: "confidence",
          label: a("priorities.validation_modal.rice.confidence"),
          tooltip: a("priorities.validation_modal.rice.confidence_tip"),
        },
        {
          key: "effort",
          label: a("priorities.validation_modal.rice.effort"),
          tooltip: a("priorities.validation_modal.rice.effort_tip"),
        },
      ];
    return e.jsxs("div", {
      className: "space-y-6 py-4",
      children: [
        e.jsx("div", {
          className: "grid grid-cols-1 gap-6",
          children: r.map((i) =>
            e.jsxs(
              "div",
              {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(J, {
                            className:
                              "text-sm font-bold uppercase tracking-wider text-muted-foreground",
                            children: i.label,
                          }),
                          e.jsx(D, {
                            children: e.jsxs(A, {
                              children: [
                                e.jsx(I, {
                                  asChild: !0,
                                  children: e.jsx(Q, {
                                    className:
                                      "h-3.5 w-3.5 text-muted-foreground cursor-help",
                                  }),
                                }),
                                e.jsx(M, {
                                  children: e.jsx("p", {
                                    className: "max-w-xs text-xs",
                                    children: i.tooltip,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      e.jsx("span", {
                        className: "text-lg font-mono font-bold text-primary",
                        children: s[i.key],
                      }),
                    ],
                  }),
                  e.jsx($, {
                    value: [s[i.key]],
                    min: 1,
                    max: 10,
                    step: 1,
                    onValueChange: ([c]) => o(i.key, c),
                    className: "py-2",
                  }),
                ],
              },
              i.key,
            ),
          ),
        }),
        e.jsxs("div", {
          className:
            "mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-center justify-between",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className:
                    "text-xs font-bold uppercase text-primary/60 tracking-widest",
                  children: a("priorities.validation_modal.rice.final_score"),
                }),
                e.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: a("priorities.validation_modal.rice.formula"),
                }),
              ],
            }),
            e.jsx("div", {
              className: "text-3xl font-black text-primary",
              children: s.calculatedValue,
            }),
          ],
        }),
      ],
    });
  },
  le = ({ priority: s, isOpen: d, onClose: a, onValidate: o }) => {
    const { t: r } = h(),
      [i, c] = n.useState({ ...s.score }),
      l = () => {
        (o(s.id, i), a());
      };
    return e.jsx(R, {
      open: d,
      onOpenChange: a,
      children: e.jsxs(Z, {
        className: "max-w-2xl",
        children: [
          e.jsxs(q, {
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 text-primary mb-2",
                children: [
                  e.jsx(b, { className: "h-5 w-5" }),
                  e.jsx("span", {
                    className: "text-xs font-bold uppercase tracking-widest",
                    children: r("priorities.validation_modal.title"),
                  }),
                ],
              }),
              e.jsx(z, { className: "text-2xl", children: s.title }),
              e.jsx(F, {
                children: r("priorities.validation_modal.description"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-4",
            children: [
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "p-4 bg-muted/30 rounded-lg",
                    children: [
                      e.jsxs("h4", {
                        className:
                          "text-sm font-bold mb-2 flex items-center gap-2",
                        children: [
                          e.jsx(U, { className: "h-4 w-4 text-amber-500" }),
                          r("priorities.validation_modal.why_important"),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed",
                        children: s.explanation,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("h4", {
                        className:
                          "text-xs font-bold uppercase text-muted-foreground tracking-wider",
                        children: r("priorities.validation_modal.status_label"),
                      }),
                      e.jsx("div", {
                        className:
                          "flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded border border-amber-100",
                        children: r("priorities.card.ai_suggested"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "border-l pl-8 border-border/50",
                children: e.jsx(re, { score: i, onChange: c }),
              }),
            ],
          }),
          e.jsxs(H, {
            className: "mt-8 pt-6 border-t",
            children: [
              e.jsx(g, {
                variant: "ghost",
                onClick: a,
                children: r("priorities.validation_modal.cta_cancel"),
              }),
              e.jsxs(g, {
                onClick: l,
                className: "gap-2",
                children: [
                  e.jsx(v, { className: "h-4 w-4" }),
                  r("priorities.validation_modal.cta_confirm"),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  oe = ({ priority: s, onValidate: d, onAction: a }) => {
    const { t: o } = h(),
      r = (i) => {
        switch (i) {
          case "high":
            return "text-red-600 bg-red-50 border-red-100";
          case "medium":
            return "text-amber-600 bg-amber-50 border-amber-100";
          case "low":
            return "text-blue-600 bg-blue-50 border-blue-100";
        }
      };
    return e.jsxs("div", {
      className:
        "flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-card rounded-xl border border-border/40 hover:border-primary/20 transition-all gap-4 group",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-4 flex-1 min-w-0",
          children: [
            e.jsx("div", {
              className: y(
                "p-2 rounded-lg flex-shrink-0",
                s.status === "validated" ? "bg-green-50" : "bg-amber-50",
              ),
              children:
                s.status === "validated"
                  ? e.jsx(v, { className: "h-5 w-5 text-green-600" })
                  : e.jsx(S, { className: "h-5 w-5 text-amber-600" }),
            }),
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx("h4", {
                      className: "font-bold text-sm text-foreground truncate",
                      children: s.title,
                    }),
                    e.jsx(k, {
                      variant: "outline",
                      className: y("text-[10px] h-4 px-1", r(s.level)),
                      children: o(`priorities.levels.${s.level}`),
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground line-clamp-1",
                  children: s.explanation,
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end",
          children: [
            e.jsxs("div", {
              className: "flex flex-col items-end",
              children: [
                e.jsx("span", {
                  className:
                    "text-[10px] font-bold text-muted-foreground uppercase tracking-widest",
                  children: o("priorities.card.score"),
                }),
                e.jsx("span", {
                  className: "text-sm font-black text-foreground",
                  children: s.score.calculatedValue,
                }),
              ],
            }),
            e.jsxs(g, {
              size: "sm",
              variant: s.status === "suggested" ? "default" : "outline",
              className: "h-9 px-4 font-bold",
              onClick: () => (s.status === "suggested" ? d(s) : a(s.id)),
              children: [
                s.status === "suggested"
                  ? o("priorities.card.cta_validate")
                  : o("priorities.card.cta_action"),
                e.jsx(C, { className: "ml-2 h-4 w-4" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Se = () => {
    const { t: s } = h(),
      { toast: d } = O(),
      [a, o] = n.useState(ae),
      [r, i] = n.useState(null),
      [c, l] = n.useState(!1),
      [x, T] = n.useState(""),
      [N, P] = n.useState("cards"),
      m = n.useMemo(
        () =>
          a.filter(
            (t) =>
              t.title.toLowerCase().includes(x.toLowerCase()) ||
              t.explanation.toLowerCase().includes(x.toLowerCase()),
          ),
        [a, x],
      ),
      w = (t) => {
        (i(t), l(!0));
      },
      V = (t, f) => {
        (o((L) =>
          L.map((j) =>
            j.id === t ? { ...j, status: "validated", score: f } : j,
          ),
        ),
          d({
            title: s("priorities.toast.validated_title"),
            description: s("priorities.toast.validated_desc"),
          }));
      },
      p = {
        high: a.filter((t) => t.level === "high").length,
        medium: a.filter((t) => t.level === "medium").length,
        low: a.filter((t) => t.level === "low").length,
        validated: a.filter((t) => t.status === "validated").length,
      };
    return e.jsxs("div", {
      className: "p-4 sm:p-6 max-w-7xl mx-auto space-y-8",
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-6",
          children: [
            e.jsxs("div", {
              className: "space-y-1",
              children: [
                e.jsxs("h1", {
                  className:
                    "text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "p-2 bg-primary/10 rounded-xl",
                      children: e.jsx(b, { className: "h-8 w-8 text-primary" }),
                    }),
                    s("priorities.title"),
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-sm font-medium",
                  children: s("priorities.subtitle"),
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex items-center gap-2",
              children: e.jsxs(g, {
                variant: "outline",
                className: "font-bold border-2",
                children: [
                  e.jsx(W, { className: "mr-2 h-4 w-4" }),
                  s("priorities.new_analysis"),
                ],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
          children: [
            e.jsx(u, {
              title: s("priorities.summary.high"),
              value: p.high.toString(),
              icon: X,
              variant: "destructive",
            }),
            e.jsx(u, {
              title: s("priorities.summary.medium"),
              value: p.medium.toString(),
              icon: S,
              variant: "warning",
            }),
            e.jsx(u, {
              title: s("priorities.summary.low"),
              value: p.low.toString(),
              icon: C,
              variant: "info",
            }),
            e.jsx(u, {
              title: s("priorities.summary.validated"),
              value: p.validated.toString(),
              icon: v,
              variant: "success",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/30 p-4 rounded-2xl border border-border/40",
          children: [
            e.jsxs("div", {
              className: "relative w-full md:max-w-md",
              children: [
                e.jsx(Y, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                }),
                e.jsx(B, {
                  placeholder: s("priorities.search_placeholder"),
                  className:
                    "pl-10 bg-background border-none shadow-sm h-11 rounded-xl",
                  value: x,
                  onChange: (t) => T(t.target.value),
                }),
              ],
            }),
            e.jsx(E, {
              value: N,
              onValueChange: (t) => P(t),
              className: "w-full md:w-auto",
              children: e.jsxs(K, {
                className:
                  "grid w-full grid-cols-2 h-11 p-1 bg-background border shadow-sm rounded-xl",
                children: [
                  e.jsxs(_, {
                    value: "cards",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(ee, { className: "h-4 w-4" }),
                      s("priorities.view_cards"),
                    ],
                  }),
                  e.jsxs(_, {
                    value: "list",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(se, { className: "h-4 w-4" }),
                      s("priorities.view_list"),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "grid grid-cols-1 gap-8",
          children: e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                  e.jsxs("h2", {
                    className:
                      "text-xl font-black text-foreground uppercase tracking-wider flex items-center gap-2",
                    children: [
                      e.jsx(te, { className: "h-5 w-5 text-primary" }),
                      s("priorities.list_title"),
                    ],
                  }),
                  e.jsxs(k, {
                    variant: "secondary",
                    className: "font-bold",
                    children: [
                      m.length,
                      " ",
                      s("priorities.items_count", { count: m.length }),
                    ],
                  }),
                ],
              }),
              m.length > 0
                ? N === "cards"
                  ? e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: m.map((t) =>
                        e.jsx(G, { priority: t, onValidate: w }, t.id),
                      ),
                    })
                  : e.jsx("div", {
                      className: "space-y-3",
                      children: m.map((t) =>
                        e.jsx(
                          oe,
                          {
                            priority: t,
                            onValidate: w,
                            onAction: (f) => console.log("Action for", f),
                          },
                          t.id,
                        ),
                      ),
                    })
                : e.jsx("div", {
                    className: "py-12",
                    children: e.jsx(ie, {
                      icon: b,
                      title: s("priorities.empty.title"),
                      description: s("priorities.empty.description"),
                      actionLabel: s("priorities.empty.cta"),
                      onAction: () => console.log("Generate Diagnostic"),
                    }),
                  }),
            ],
          }),
        }),
        r &&
          e.jsx(le, {
            priority: r,
            isOpen: c,
            onClose: () => l(!1),
            onValidate: V,
          }),
      ],
    });
  };
export { Se as default };
