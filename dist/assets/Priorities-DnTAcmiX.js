import {
  u as f,
  j as e,
  T as O,
  m as E,
  o as B,
  p as z,
  B as h,
  d as K,
  c as k,
} from "./index-DSuxXiPq.js";
import { r as d } from "./router-C2uYhr1z.js";
import { B as C } from "./badge-ByuXo0CA.js";
import { K as g } from "./kpi-card-D5sOC4bw.js";
import { I as G } from "./input-DM6SScwh.js";
import { T as R, a as Z, b as S } from "./tabs-ASnbaFMn.js";
import { P as q } from "./PriorityCard-B-5I94ub.js";
import {
  D as F,
  a as H,
  b as $,
  c as J,
  d as Q,
  e as U,
} from "./dialog-Bx927nLR.js";
import { S as W } from "./slider-Bk0wlOYJ.js";
import { L as X } from "./label-DpTyVOKi.js";
import {
  a0 as Y,
  b,
  p as ee,
  K as v,
  n as se,
  T as te,
  Z as T,
  q as P,
  s as ae,
  ae as ie,
  u as re,
  I as le,
} from "./utils-CrQ_Kxni.js";
import { E as oe, g as de } from "./supabaseBusinessService-Bohmi-5P.js";
import { u as ne } from "./useCurrentOrganization-BrovRglL.js";
import "./card-kC7SKLKo.js";
import "./index-DDFUuL6J.js";
import "./index-CwntilPw.js";
import "./index-DVOzYOy3.js";
import "./index-D8wekeCT.js";
import "./index-frX45eRk.js";
import "./useQuery-cjyHvNTQ.js";
const ce = ({ score: s, onChange: n }) => {
    const { t: a } = f(),
      l = (r, m) => {
        const o = { ...s, [r]: m };
        ((o.calculatedValue = Math.round(
          (o.impact * o.urgency * o.confidence) / o.effort,
        )),
          n(o));
      },
      i = [
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
          children: i.map((r) =>
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
                          e.jsx(X, {
                            className:
                              "text-sm font-bold uppercase tracking-wider text-muted-foreground",
                            children: r.label,
                          }),
                          e.jsx(O, {
                            children: e.jsxs(E, {
                              children: [
                                e.jsx(B, {
                                  asChild: !0,
                                  children: e.jsx(Y, {
                                    className:
                                      "h-3.5 w-3.5 text-muted-foreground cursor-help",
                                  }),
                                }),
                                e.jsx(z, {
                                  children: e.jsx("p", {
                                    className: "max-w-xs text-xs",
                                    children: r.tooltip,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      e.jsx("span", {
                        className: "text-lg font-mono font-bold text-primary",
                        children: s[r.key],
                      }),
                    ],
                  }),
                  e.jsx(W, {
                    value: [s[r.key]],
                    min: 1,
                    max: 10,
                    step: 1,
                    onValueChange: ([m]) => l(r.key, m),
                    className: "py-2",
                  }),
                ],
              },
              r.key,
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
  me = ({ priority: s, isOpen: n, onClose: a, onValidate: l }) => {
    const { t: i } = f(),
      [r, m] = d.useState({ ...s.score }),
      o = () => {
        (l(s.id, r), a());
      };
    return e.jsx(F, {
      open: n,
      onOpenChange: a,
      children: e.jsxs(H, {
        className: "max-w-2xl",
        children: [
          e.jsxs($, {
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 text-primary mb-2",
                children: [
                  e.jsx(b, { className: "h-5 w-5" }),
                  e.jsx("span", {
                    className: "text-xs font-bold uppercase tracking-widest",
                    children: i("priorities.validation_modal.title"),
                  }),
                ],
              }),
              e.jsx(J, { className: "text-2xl", children: s.title }),
              e.jsx(Q, {
                children: i("priorities.validation_modal.description"),
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
                          e.jsx(ee, { className: "h-4 w-4 text-amber-500" }),
                          i("priorities.validation_modal.why_important"),
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
                        children: i("priorities.validation_modal.status_label"),
                      }),
                      e.jsx("div", {
                        className:
                          "flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded border border-amber-100",
                        children: i("priorities.card.ai_suggested"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "border-l pl-8 border-border/50",
                children: e.jsx(ce, { score: r, onChange: m }),
              }),
            ],
          }),
          e.jsxs(U, {
            className: "mt-8 pt-6 border-t",
            children: [
              e.jsx(h, {
                variant: "ghost",
                onClick: a,
                children: i("priorities.validation_modal.cta_cancel"),
              }),
              e.jsxs(h, {
                onClick: o,
                className: "gap-2",
                children: [
                  e.jsx(v, { className: "h-4 w-4" }),
                  i("priorities.validation_modal.cta_confirm"),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  xe = ({ priority: s, onValidate: n, onAction: a }) => {
    const { t: l } = f(),
      i = (r) => {
        switch (r) {
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
              className: k(
                "p-2 rounded-lg flex-shrink-0",
                s.status === "validated" ? "bg-green-50" : "bg-amber-50",
              ),
              children:
                s.status === "validated"
                  ? e.jsx(v, { className: "h-5 w-5 text-green-600" })
                  : e.jsx(T, { className: "h-5 w-5 text-amber-600" }),
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
                    e.jsx(C, {
                      variant: "outline",
                      className: k("text-[10px] h-4 px-1", i(s.level)),
                      children: l(`priorities.levels.${s.level}`),
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
                  children: l("priorities.card.score"),
                }),
                e.jsx("span", {
                  className: "text-sm font-black text-foreground",
                  children: s.score.calculatedValue,
                }),
              ],
            }),
            e.jsxs(h, {
              size: "sm",
              variant: s.status === "suggested" ? "default" : "outline",
              className: "h-9 px-4 font-bold",
              onClick: () => (s.status === "suggested" ? n(s) : a(s.id)),
              children: [
                s.status === "suggested"
                  ? l("priorities.card.cta_validate")
                  : l("priorities.card.cta_action"),
                e.jsx(P, { className: "ml-2 h-4 w-4" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ie = () => {
    const { t: s } = f(),
      { toast: n } = K(),
      { organizationId: a, isDemoMode: l } = ne(),
      [i, r] = d.useState([]),
      [m, o] = d.useState(!0),
      [N, L] = d.useState(null),
      [V, w] = d.useState(!1),
      [p, D] = d.useState(""),
      [y, I] = d.useState("cards");
    d.useEffect(() => {
      (async () => {
        if (l || !a) {
          (r([]), o(!1));
          return;
        }
        try {
          const c = await de(a);
          r(c);
        } catch (c) {
          console.error("Error loading priorities:", c);
        } finally {
          o(!1);
        }
      })();
    }, [a, l]);
    const x = d.useMemo(
        () =>
          i.filter(
            (t) =>
              t.title.toLowerCase().includes(p.toLowerCase()) ||
              t.explanation.toLowerCase().includes(p.toLowerCase()),
          ),
        [i, p],
      ),
      _ = (t) => {
        (L(t), w(!0));
      },
      M = (t, c) => {
        (r((A) =>
          A.map((j) =>
            j.id === t ? { ...j, status: "validated", score: c } : j,
          ),
        ),
          n({
            title: s("priorities.toast.validated_title"),
            description: s("priorities.toast.validated_desc"),
          }));
      },
      u = {
        high: i.filter((t) => t.level === "high").length,
        medium: i.filter((t) => t.level === "medium").length,
        low: i.filter((t) => t.level === "low").length,
        validated: i.filter((t) => t.status === "validated").length,
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
              children: e.jsxs(h, {
                variant: "outline",
                className: "font-bold border-2",
                children: [
                  e.jsx(se, { className: "mr-2 h-4 w-4" }),
                  s("priorities.new_analysis"),
                ],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
          children: [
            e.jsx(g, {
              title: s("priorities.summary.high"),
              value: u.high.toString(),
              icon: te,
              variant: "destructive",
            }),
            e.jsx(g, {
              title: s("priorities.summary.medium"),
              value: u.medium.toString(),
              icon: T,
              variant: "warning",
            }),
            e.jsx(g, {
              title: s("priorities.summary.low"),
              value: u.low.toString(),
              icon: P,
              variant: "info",
            }),
            e.jsx(g, {
              title: s("priorities.summary.validated"),
              value: u.validated.toString(),
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
                e.jsx(ae, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                }),
                e.jsx(G, {
                  placeholder: s("priorities.search_placeholder"),
                  className:
                    "pl-10 bg-background border-none shadow-sm h-11 rounded-xl",
                  value: p,
                  onChange: (t) => D(t.target.value),
                }),
              ],
            }),
            e.jsx(R, {
              value: y,
              onValueChange: (t) => I(t),
              className: "w-full md:w-auto",
              children: e.jsxs(Z, {
                className:
                  "grid w-full grid-cols-2 h-11 p-1 bg-background border shadow-sm rounded-xl",
                children: [
                  e.jsxs(S, {
                    value: "cards",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(ie, { className: "h-4 w-4" }),
                      s("priorities.view_cards"),
                    ],
                  }),
                  e.jsxs(S, {
                    value: "list",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(re, { className: "h-4 w-4" }),
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
                      e.jsx(le, { className: "h-5 w-5 text-primary" }),
                      s("priorities.list_title"),
                    ],
                  }),
                  e.jsxs(C, {
                    variant: "secondary",
                    className: "font-bold",
                    children: [
                      x.length,
                      " ",
                      s("priorities.items_count", { count: x.length }),
                    ],
                  }),
                ],
              }),
              x.length > 0
                ? y === "cards"
                  ? e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: x.map((t) =>
                        e.jsx(q, { priority: t, onValidate: _ }, t.id),
                      ),
                    })
                  : e.jsx("div", {
                      className: "space-y-3",
                      children: x.map((t) =>
                        e.jsx(
                          xe,
                          {
                            priority: t,
                            onValidate: _,
                            onAction: (c) => console.log("Action for", c),
                          },
                          t.id,
                        ),
                      ),
                    })
                : e.jsx("div", {
                    className: "py-12",
                    children: e.jsx(oe, {
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
        N &&
          e.jsx(me, {
            priority: N,
            isOpen: V,
            onClose: () => w(!1),
            onValidate: M,
          }),
      ],
    });
  };
export { Ie as default };
