import { j as e } from "./vendor-radix-C8JHQxE0.js";
import { r as d } from "./vendor-react-Ju9LKgAZ.js";
import { u as E } from "./vendor-data-BixP7Wq-.js";
import {
  u as h,
  T as I,
  e as B,
  f as z,
  g as q,
  B as g,
  d as K,
  c as k,
} from "./index-DF8MdIXV.js";
import { B as S } from "./badge-DMwHsW7P.js";
import { K as u } from "./kpi-card-qaMtAPCp.js";
import { I as F } from "./input-CBoaGjHY.js";
import { T as G, a as R, b as C } from "./tabs-CqiEkaFQ.js";
import { P as Z } from "./PriorityCard-DUA37fg1.js";
import {
  D as H,
  a as Q,
  b as $,
  c as J,
  d as U,
  e as W,
} from "./dialog-Bcw59Xyu.js";
import { S as X } from "./slider-BGwoJrLF.js";
import { L as Y } from "./label-BtFA11dg.js";
import {
  a7 as ee,
  d as b,
  t as se,
  O as N,
  q as te,
  T as ae,
  Z as T,
  s as P,
  v as ie,
  ap as re,
  x as le,
  B as oe,
} from "./vendor-utils-BdCfJOxW.js";
import { E as de, g as ne } from "./supabaseBusinessService-Bf4U-Xc0.js";
import { u as ce } from "./useCurrentOrganization-CMbUnvon.js";
import "./card-BOBgEvG6.js";
const me = ({ score: s, onChange: n }) => {
    const { t: a } = h(),
      l = (r, c) => {
        const o = { ...s, [r]: c };
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
                          e.jsx(Y, {
                            className:
                              "text-sm font-bold uppercase tracking-wider text-muted-foreground",
                            children: r.label,
                          }),
                          e.jsx(I, {
                            children: e.jsxs(B, {
                              children: [
                                e.jsx(z, {
                                  asChild: !0,
                                  children: e.jsx(ee, {
                                    className:
                                      "h-3.5 w-3.5 text-muted-foreground cursor-help",
                                  }),
                                }),
                                e.jsx(q, {
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
                  e.jsx(X, {
                    value: [s[r.key]],
                    min: 1,
                    max: 10,
                    step: 1,
                    onValueChange: ([c]) => l(r.key, c),
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
  xe = ({ priority: s, isOpen: n, onClose: a, onValidate: l }) => {
    const { t: i } = h(),
      [r, c] = d.useState({ ...s.score }),
      o = () => {
        (l(s.id, r), a());
      };
    return e.jsx(H, {
      open: n,
      onOpenChange: a,
      children: e.jsxs(Q, {
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
              e.jsx(U, {
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
                          e.jsx(se, { className: "h-4 w-4 text-amber-500" }),
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
                children: e.jsx(me, { score: r, onChange: c }),
              }),
            ],
          }),
          e.jsxs(W, {
            className: "mt-8 pt-6 border-t",
            children: [
              e.jsx(g, {
                variant: "ghost",
                onClick: a,
                children: i("priorities.validation_modal.cta_cancel"),
              }),
              e.jsxs(g, {
                onClick: o,
                className: "gap-2",
                children: [
                  e.jsx(N, { className: "h-4 w-4" }),
                  i("priorities.validation_modal.cta_confirm"),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  pe = ({ priority: s, onValidate: n, onAction: a }) => {
    const { t: l } = h(),
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
                  ? e.jsx(N, { className: "h-5 w-5 text-green-600" })
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
                    e.jsx(S, {
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
            e.jsxs(g, {
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
  Ve = () => {
    const { t: s } = h(),
      { toast: n } = K(),
      { organizationId: a, isDemoMode: l } = ce(),
      [i, r] = d.useState([]),
      [c, o] = d.useState(null),
      [L, w] = d.useState(!1),
      [x, V] = d.useState(""),
      [y, D] = d.useState("cards"),
      {
        data: f,
        isLoading: ue,
        isError: M,
      } = E({
        queryKey: ["priorities", a],
        queryFn: () => ne(a),
        staleTime: 5 * 60 * 1e3,
        enabled: !!a && !l,
      });
    (M &&
      n({
        title: s("errors.title"),
        description: s("priorities.errors.load"),
        variant: "destructive",
      }),
      d.useEffect(() => {
        f && r(f);
      }, [f]),
      d.useEffect(() => {
        (l || !a) && r([]);
      }, [l, a]));
    const m = d.useMemo(
        () =>
          i.filter(
            (t) =>
              t.title.toLowerCase().includes(x.toLowerCase()) ||
              t.explanation.toLowerCase().includes(x.toLowerCase()),
          ),
        [i, x],
      ),
      _ = (t) => {
        (o(t), w(!0));
      },
      O = (t, j) => {
        (r((A) =>
          A.map((v) =>
            v.id === t ? { ...v, status: "validated", score: j } : v,
          ),
        ),
          n({
            title: s("priorities.toast.validated_title"),
            description: s("priorities.toast.validated_desc"),
          }));
      },
      p = {
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
              children: e.jsxs(g, {
                variant: "outline",
                className: "font-bold border-2",
                children: [
                  e.jsx(te, { className: "mr-2 h-4 w-4" }),
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
              icon: ae,
              variant: "warning",
            }),
            e.jsx(u, {
              title: s("priorities.summary.medium"),
              value: p.medium.toString(),
              icon: T,
              variant: "warning",
            }),
            e.jsx(u, {
              title: s("priorities.summary.low"),
              value: p.low.toString(),
              icon: P,
              variant: "info",
            }),
            e.jsx(u, {
              title: s("priorities.summary.validated"),
              value: p.validated.toString(),
              icon: N,
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
                e.jsx(ie, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                }),
                e.jsx(F, {
                  placeholder: s("priorities.search_placeholder"),
                  className:
                    "pl-10 bg-background border-none shadow-sm h-11 rounded-xl",
                  value: x,
                  onChange: (t) => V(t.target.value),
                }),
              ],
            }),
            e.jsx(G, {
              value: y,
              onValueChange: (t) => D(t),
              className: "w-full md:w-auto",
              children: e.jsxs(R, {
                className:
                  "grid w-full grid-cols-2 h-11 p-1 bg-background border shadow-sm rounded-xl",
                children: [
                  e.jsxs(C, {
                    value: "cards",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(re, { className: "h-4 w-4" }),
                      s("priorities.view_cards"),
                    ],
                  }),
                  e.jsxs(C, {
                    value: "list",
                    className: "rounded-lg font-bold gap-2",
                    children: [
                      e.jsx(le, { className: "h-4 w-4" }),
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
                      e.jsx(oe, { className: "h-5 w-5 text-primary" }),
                      s("priorities.list_title"),
                    ],
                  }),
                  e.jsxs(S, {
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
                ? y === "cards"
                  ? e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: m.map((t) =>
                        e.jsx(Z, { priority: t, onValidate: _ }, t.id),
                      ),
                    })
                  : e.jsx("div", {
                      className: "space-y-3",
                      children: m.map((t) =>
                        e.jsx(
                          pe,
                          {
                            priority: t,
                            onValidate: _,
                            onAction: (j) => console.log("Action for", j),
                          },
                          t.id,
                        ),
                      ),
                    })
                : e.jsx("div", {
                    className: "py-12",
                    children: e.jsx(de, {
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
        c &&
          e.jsx(xe, {
            priority: c,
            isOpen: L,
            onClose: () => w(!1),
            onValidate: O,
          }),
      ],
    });
  };
export { Ve as default };
