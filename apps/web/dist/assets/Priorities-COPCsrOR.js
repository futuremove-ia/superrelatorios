import {
  u as h,
  j as e,
  L as D,
  $ as A,
  a0 as M,
  a1 as I,
  a2 as O,
  a3 as B,
  a4 as E,
  a5 as G,
  a6 as K,
  a7 as R,
  a8 as Z,
  a9 as $,
  B as g,
  I as z,
  T as F,
  k as H,
  l as y,
  p as _,
} from "./index-DRWQgA5q.js";
import { r as n } from "./router-XBfdTQ0K.js";
import { B as k } from "./badge-DD2chybY.js";
import { m as J, E as Q } from "./mockBusiness-Ba7JG3Ae.js";
import { K as u } from "./kpi-card-DODMrT55.js";
import { P as Y } from "./PriorityCard-DylADg1e.js";
import {
  aC as q,
  Y as v,
  aj as U,
  au as b,
  ag as W,
  T as X,
  Z as C,
  J as S,
  S as ee,
  aQ as se,
  am as ae,
  as as te,
} from "./utils-Er8ll4su.js";
import { u as ie } from "./use-toast-BUB6lCCL.js";
const re = ({ score: s, onChange: d }) => {
    const { t } = h(),
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
          label: t("priorities.validation_modal.rice.impact"),
          tooltip: t("priorities.validation_modal.rice.impact_tip"),
        },
        {
          key: "urgency",
          label: t("priorities.validation_modal.rice.urgency"),
          tooltip: t("priorities.validation_modal.rice.urgency_tip"),
        },
        {
          key: "confidence",
          label: t("priorities.validation_modal.rice.confidence"),
          tooltip: t("priorities.validation_modal.rice.confidence_tip"),
        },
        {
          key: "effort",
          label: t("priorities.validation_modal.rice.effort"),
          tooltip: t("priorities.validation_modal.rice.effort_tip"),
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
                          e.jsx(D, {
                            className:
                              "text-sm font-bold uppercase tracking-wider text-muted-foreground",
                            children: i.label,
                          }),
                          e.jsx(A, {
                            children: e.jsxs(M, {
                              children: [
                                e.jsx(I, {
                                  asChild: !0,
                                  children: e.jsx(q, {
                                    className:
                                      "h-3.5 w-3.5 text-muted-foreground cursor-help",
                                  }),
                                }),
                                e.jsx(O, {
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
                  e.jsx(B, {
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
                  children: t("priorities.validation_modal.rice.final_score"),
                }),
                e.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: t("priorities.validation_modal.rice.formula"),
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
  le = ({ priority: s, isOpen: d, onClose: t, onValidate: o }) => {
    const { t: r } = h(),
      [i, c] = n.useState({ ...s.score }),
      l = () => {
        (o(s.id, i), t());
      };
    return e.jsx(E, {
      open: d,
      onOpenChange: t,
      children: e.jsxs(G, {
        className: "max-w-2xl",
        children: [
          e.jsxs(K, {
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 text-primary mb-2",
                children: [
                  e.jsx(v, { className: "h-5 w-5" }),
                  e.jsx("span", {
                    className: "text-xs font-bold uppercase tracking-widest",
                    children: r("priorities.validation_modal.title"),
                  }),
                ],
              }),
              e.jsx(R, { className: "text-2xl", children: s.title }),
              e.jsx(Z, {
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
          e.jsxs($, {
            className: "mt-8 pt-6 border-t",
            children: [
              e.jsx(g, {
                variant: "ghost",
                onClick: t,
                children: r("priorities.validation_modal.cta_cancel"),
              }),
              e.jsxs(g, {
                onClick: l,
                className: "gap-2",
                children: [
                  e.jsx(b, { className: "h-4 w-4" }),
                  r("priorities.validation_modal.cta_confirm"),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  oe = ({ priority: s, onValidate: d, onAction: t }) => {
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
              className: _(
                "p-2 rounded-lg flex-shrink-0",
                s.status === "validated" ? "bg-green-50" : "bg-amber-50",
              ),
              children:
                s.status === "validated"
                  ? e.jsx(b, { className: "h-5 w-5 text-green-600" })
                  : e.jsx(C, { className: "h-5 w-5 text-amber-600" }),
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
                      className: _("text-[10px] h-4 px-1", r(s.level)),
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
              onClick: () => (s.status === "suggested" ? d(s) : t(s.id)),
              children: [
                s.status === "suggested"
                  ? o("priorities.card.cta_validate")
                  : o("priorities.card.cta_action"),
                e.jsx(S, { className: "ml-2 h-4 w-4" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  he = () => {
    const { t: s } = h(),
      { toast: d } = ie(),
      [t, o] = n.useState(J),
      [r, i] = n.useState(null),
      [c, l] = n.useState(!1),
      [x, T] = n.useState(""),
      [N, P] = n.useState("cards"),
      m = n.useMemo(
        () =>
          t.filter(
            (a) =>
              a.title.toLowerCase().includes(x.toLowerCase()) ||
              a.explanation.toLowerCase().includes(x.toLowerCase()),
          ),
        [t, x],
      ),
      w = (a) => {
        (i(a), l(!0));
      },
      V = (a, j) => {
        (o((L) =>
          L.map((f) =>
            f.id === a ? { ...f, status: "validated", score: j } : f,
          ),
        ),
          d({
            title: s("priorities.toast.validated_title"),
            description: s("priorities.toast.validated_desc"),
          }));
      },
      p = {
        high: t.filter((a) => a.level === "high").length,
        medium: t.filter((a) => a.level === "medium").length,
        low: t.filter((a) => a.level === "low").length,
        validated: t.filter((a) => a.status === "validated").length,
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
                      children: e.jsx(v, { className: "h-8 w-8 text-primary" }),
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
              icon: C,
              variant: "warning",
            }),
            e.jsx(u, {
              title: s("priorities.summary.low"),
              value: p.low.toString(),
              icon: S,
              variant: "info",
            }),
            e.jsx(u, {
              title: s("priorities.summary.validated"),
              value: p.validated.toString(),
              icon: b,
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
                e.jsx(ee, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                }),
                e.jsx(z, {
                  placeholder: s("priorities.search_placeholder"),
                  className:
                    "pl-10 bg-background border-none shadow-sm h-11 rounded-xl",
                  value: x,
                  onChange: (a) => T(a.target.value),
                }),
              ],
            }),
            e.jsx(F, {
              value: N,
              onValueChange: (a) => P(a),
              className: "w-full md:w-auto",
              children: e.jsxs(H, {
                className:
                  "grid w-full grid-cols-2 h-11 p-1 bg-background border shadow-sm rounded-xl",
                children: [
                  e.jsxs(y, {
                    value: "cards",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(se, { className: "h-4 w-4" }),
                      s("priorities.view_cards"),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "list",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(ae, { className: "h-4 w-4" }),
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
                      children: m.map((a) =>
                        e.jsx(Y, { priority: a, onValidate: w }, a.id),
                      ),
                    })
                  : e.jsx("div", {
                      className: "space-y-3",
                      children: m.map((a) =>
                        e.jsx(
                          oe,
                          {
                            priority: a,
                            onValidate: w,
                            onAction: (j) => console.log("Action for", j),
                          },
                          a.id,
                        ),
                      ),
                    })
                : e.jsx("div", {
                    className: "py-12",
                    children: e.jsx(Q, {
                      icon: v,
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
export { he as default };
