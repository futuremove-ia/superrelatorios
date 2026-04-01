import { u as E, d as S, j as e, B as i } from "./index-DSuxXiPq.js";
import { r as o } from "./router-C2uYhr1z.js";
import { C as m, b as p, c as x, d as v, a as h } from "./card-kC7SKLKo.js";
import { B as _ } from "./badge-ByuXo0CA.js";
import { E as B, a as T, u as $ } from "./supabaseBusinessService-Bohmi-5P.js";
import { u as D } from "./useCurrentOrganization-BrovRglL.js";
import {
  af as w,
  f as L,
  Z as y,
  K as O,
  ag as I,
  b as k,
  k as M,
  v as P,
  d as C,
  q as R,
} from "./utils-CrQ_Kxni.js";
import "./useQuery-cjyHvNTQ.js";
const W = () => {
  const { t: a } = E(),
    { toast: A } = S(),
    { organizationId: n, isDemoMode: u } = D(),
    [s, l] = o.useState([]),
    [Z, g] = o.useState(!0);
  o.useEffect(() => {
    (async () => {
      if (u || !n) {
        (l([]), g(!1));
        return;
      }
      try {
        const r = await T(n);
        l(r);
      } catch (r) {
        console.error("Error loading actions:", r);
      } finally {
        g(!1);
      }
    })();
  }, [n, u]);
  const z = async (t) => {
      const r = s.find((c) => c.id === t);
      if (!r) return;
      const j = r.status !== "completed",
        N = j ? "completed" : "pending";
      (await $(t, N)) &&
        (l((c) =>
          c.map((d) =>
            d.id === t
              ? { ...d, status: N, updatedAt: new Date().toISOString() }
              : d,
          ),
        ),
        j &&
          A({
            title: a("action_plan.toast.completed_title"),
            description: a("action_plan.toast.completed_desc"),
            action: e.jsxs(i, {
              size: "sm",
              variant: "outline",
              className: "gap-1 border-primary/20 hover:bg-primary/5",
              children: [
                a("action_plan.toast.cta_validate"),
                " ",
                e.jsx(y, { className: "h-3 w-3 text-primary" }),
              ],
            }),
          }));
    },
    f = s.filter((t) => t.status === "completed").length,
    b = Math.round((f / s.length) * 100);
  return e.jsxs("div", {
    className:
      "p-4 sm:p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500",
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
                    children: e.jsx(w, { className: "h-8 w-8 text-primary" }),
                  }),
                  a("action_plan.title"),
                ],
              }),
              e.jsx("p", {
                className: "text-muted-foreground font-medium",
                children: a("action_plan.subtitle"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsxs(i, {
                variant: "outline",
                size: "lg",
                className: "gap-2 font-bold shadow-sm",
                children: [
                  e.jsx(L, { className: "h-5 w-5" }),
                  a("action_plan.view_impact"),
                ],
              }),
              e.jsxs(i, {
                size: "lg",
                className:
                  "gap-2 font-bold shadow-md bg-primary hover:bg-primary/90",
                children: [
                  e.jsx(y, { className: "h-5 w-5" }),
                  a("action_plan.new_diagnostic"),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        children: [
          e.jsx("div", {
            className: "lg:col-span-2 space-y-6",
            children:
              s.length === 0
                ? e.jsx(B, {
                    icon: w,
                    title: a("action_plan.empty.title"),
                    description: a("action_plan.empty.description"),
                    actionLabel: a("action_plan.empty.cta"),
                    onAction: () => {},
                  })
                : e.jsxs(m, {
                    className: "border-none shadow-xl bg-card overflow-hidden",
                    children: [
                      e.jsxs(p, {
                        className: "pb-6 border-b bg-muted/20",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(_, {
                                    variant: "outline",
                                    className:
                                      "bg-primary/5 text-primary border-primary/20 text-[10px] uppercase font-black tracking-widest px-2 py-0.5",
                                    children: a("action_plan.active_cycle"),
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-mono text-muted-foreground uppercase",
                                    children: a("action_plan.active_cycle"),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "text-xs font-bold text-muted-foreground",
                                children: [
                                  f,
                                  "/",
                                  s.length,
                                  " ",
                                  a("action_plan.completed_label"),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(x, {
                            className: "text-2xl font-black tracking-tight",
                            children: a("action_plan.title"),
                          }),
                          e.jsx(v, {
                            className:
                              "text-base font-medium text-muted-foreground/80 mt-1",
                            children: a("action_plan.subtitle"),
                          }),
                        ],
                      }),
                      e.jsxs(h, {
                        className: "p-0",
                        children: [
                          e.jsx("div", {
                            className: "divide-y divide-border/50",
                            children: s.map((t) =>
                              e.jsxs(
                                "div",
                                {
                                  className: `group p-6 flex items-start gap-5 transition-all duration-300 ${t.status === "completed" ? "bg-muted/10 opacity-60" : "hover:bg-primary/[0.02] active:bg-primary/[0.04]"}`,
                                  children: [
                                    e.jsx("button", {
                                      onClick: () => z(t.id),
                                      className:
                                        "mt-1 flex-shrink-0 transition-all active:scale-90",
                                      children:
                                        t.status === "completed"
                                          ? e.jsx("div", {
                                              className:
                                                "h-7 w-7 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm shadow-green-200",
                                              children: e.jsx(O, {
                                                className:
                                                  "h-4 w-4 stroke-[3px]",
                                              }),
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "h-7 w-7 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors group-hover:bg-primary/5",
                                              children: e.jsx(I, {
                                                className:
                                                  "h-4 w-4 text-transparent",
                                              }),
                                            }),
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1 min-w-0 space-y-1",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            e.jsx("h4", {
                                              className: `font-bold text-lg leading-none tracking-tight ${t.status === "completed" ? "line-through text-muted-foreground decoration-2" : ""}`,
                                              children: t.title,
                                            }),
                                            t.status !== "completed" &&
                                              e.jsx(_, {
                                                className:
                                                  "bg-amber-100 text-amber-700 border-none text-[9px] font-black tracking-widest h-5",
                                                children: a(
                                                  "action_plan.high_impact_badge",
                                                ),
                                              }),
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className: `text-sm leading-relaxed ${t.status === "completed" ? "text-muted-foreground/60" : "text-muted-foreground"}`,
                                          children: t.description,
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex flex-wrap items-center gap-x-6 gap-y-2 pt-3",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest",
                                              children: [
                                                e.jsx(k, {
                                                  className:
                                                    "h-3.5 w-3.5 text-primary/60",
                                                }),
                                                a("action_plan.metric_label"),
                                                " ",
                                                e.jsx("span", {
                                                  className: "text-foreground",
                                                  children: a(
                                                    "action_plan.metric_value",
                                                  ),
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-1.5 text-[11px] font-black text-muted-foreground uppercase tracking-widest",
                                              children: [
                                                e.jsx(M, {
                                                  className:
                                                    "h-3.5 w-3.5 text-muted-foreground/60",
                                                }),
                                                a("action_plan.deadline_label"),
                                                " ",
                                                e.jsx("span", {
                                                  className: "text-foreground",
                                                  children: a(
                                                    "action_plan.deadline_value",
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx(i, {
                                      variant: "ghost",
                                      size: "sm",
                                      className:
                                        "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                      children: e.jsx(P, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                          }),
                          e.jsx("div", {
                            className:
                              "p-6 bg-muted/5 flex justify-center border-t border-dashed",
                            children: e.jsxs(i, {
                              variant: "ghost",
                              size: "sm",
                              className:
                                "text-xs font-bold text-muted-foreground hover:text-primary gap-2",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "h-4 w-4 rounded-full border border-current flex items-center justify-center text-[10px]",
                                  children: "+",
                                }),
                                a("action_plan.add_manual"),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs(m, {
                className:
                  "bg-primary shadow-2xl border-none text-primary-foreground overflow-hidden relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 p-8 opacity-10 pointer-events-none",
                    children: e.jsx(C, { className: "h-32 w-32 rotate-12" }),
                  }),
                  e.jsxs(p, {
                    className: "relative",
                    children: [
                      e.jsxs(x, {
                        className: "text-xl font-black flex items-center gap-2",
                        children: [
                          e.jsx(C, { className: "h-5 w-5" }),
                          a("action_plan.impact_card.title"),
                        ],
                      }),
                      e.jsx(v, {
                        className: "text-primary-foreground/70 font-medium",
                        children: a("action_plan.impact_card.desc"),
                      }),
                    ],
                  }),
                  e.jsxs(h, {
                    className: "space-y-8 relative",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex justify-between text-sm font-bold uppercase tracking-widest",
                            children: [
                              e.jsx("span", {
                                children: a("action_plan.progress_label"),
                              }),
                              e.jsxs("span", { children: [b, "%"] }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "h-3 w-full bg-white/20 rounded-full overflow-hidden p-0.5 border border-white/10",
                            children: e.jsx("div", {
                              className:
                                "h-full bg-white rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)]",
                              style: { width: `${b}%` },
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-1 gap-4 pt-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1",
                                children: a("action_plan.impact_card.roi"),
                              }),
                              e.jsx("p", {
                                className: "text-3xl font-black",
                                children: a(
                                  "action_plan.impact_card.roi_value",
                                ),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-1",
                                children: a(
                                  "action_plan.impact_card.time_saved",
                                ),
                              }),
                              e.jsxs("p", {
                                className: "text-3xl font-black",
                                children: [
                                  a("action_plan.impact_card.time_saved_value"),
                                  " ",
                                  e.jsx("span", {
                                    className: "text-sm font-normal opacity-60",
                                    children: a(
                                      "action_plan.impact_card.time_saved_unit",
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(i, {
                        className:
                          "w-full h-12 gap-2 bg-white text-primary hover:bg-white/90 font-black shadow-lg",
                        variant: "secondary",
                        children: [
                          a("action_plan.impact_card.cta_evolution"),
                          e.jsx(R, { className: "h-4 w-4" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(m, {
                className: "border-dashed border-2 bg-muted/20",
                children: [
                  e.jsx(p, {
                    className: "pb-4",
                    children: e.jsxs(x, {
                      className:
                        "text-sm font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2",
                      children: [
                        e.jsx(k, { className: "h-4 w-4" }),
                        a("action_plan.next_target.title"),
                      ],
                    }),
                  }),
                  e.jsx(h, {
                    children: e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs text-muted-foreground leading-relaxed font-medium",
                          children: a("action_plan.next_target.desc"),
                        }),
                        e.jsx("div", {
                          className:
                            "p-4 bg-background/50 rounded-xl border border-dashed text-center",
                          children: e.jsx("span", {
                            className:
                              "text-[10px] font-bold text-muted-foreground uppercase tracking-widest",
                            children: a("action_plan.next_target.waiting"),
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
export { W as default };
