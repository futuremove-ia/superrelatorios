import { u as S, d as T, e as B, j as e, B as r } from "./index-BvTrNtPA.js";
import { r as m } from "./vendor-Bp-AcFIh.js";
import { u as $ } from "./useQuery-Brgg0_h5.js";
import { C as p, b as x, c as h, d as _, a as u } from "./card-DMEndSBG.js";
import { B as w } from "./badge-B9qeYiUm.js";
import { E as D, u as L, a as O } from "./supabaseBusinessService-BE1MW-Br.js";
import { u as q } from "./useCurrentOrganization-ejFtle5S.js";
import {
  an as y,
  f as I,
  Z as k,
  J as M,
  ao as P,
  b as C,
  k as Q,
  v as R,
  d as z,
  p as Z,
} from "./utils-BrIGbSZG.js";
import "./router-Db_Yswnp.js";
const ae = () => {
  const { t: a } = S(),
    { toast: g } = T();
  B();
  const { organizationId: i, isDemoMode: n } = q(),
    [s, l] = m.useState([]),
    {
      data: c,
      isLoading: F,
      isError: A,
    } = $({
      queryKey: ["actions", i],
      queryFn: () => O(i),
      staleTime: 5 * 60 * 1e3,
      enabled: !!i && !n,
    });
  (A &&
    g({
      title: a("errors.title"),
      description: a("action_plan.errors.load"),
      variant: "destructive",
    }),
    m.useEffect(() => {
      c && l(c);
    }, [c]),
    m.useEffect(() => {
      (n || !i) && l([]);
    }, [n, i]));
  const E = async (t) => {
      const j = s.find((d) => d.id === t);
      if (!j) return;
      const N = j.status !== "completed",
        v = N ? "completed" : "pending";
      (await L(t, v)) &&
        (l((d) =>
          d.map((o) =>
            o.id === t
              ? { ...o, status: v, updatedAt: new Date().toISOString() }
              : o,
          ),
        ),
        N &&
          g({
            title: a("action_plan.toast.completed_title"),
            description: a("action_plan.toast.completed_desc"),
            action: e.jsxs(r, {
              size: "sm",
              variant: "outline",
              className: "gap-1 border-primary/20 hover:bg-primary/5",
              children: [
                a("action_plan.toast.cta_validate"),
                " ",
                e.jsx(k, { className: "h-3 w-3 text-primary" }),
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
                    children: e.jsx(y, { className: "h-8 w-8 text-primary" }),
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
              e.jsxs(r, {
                variant: "outline",
                size: "lg",
                className: "gap-2 font-bold shadow-sm",
                children: [
                  e.jsx(I, { className: "h-5 w-5" }),
                  a("action_plan.view_impact"),
                ],
              }),
              e.jsxs(r, {
                size: "lg",
                className:
                  "gap-2 font-bold shadow-md bg-primary hover:bg-primary/90",
                children: [
                  e.jsx(k, { className: "h-5 w-5" }),
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
                ? e.jsx(D, {
                    icon: y,
                    title: a("action_plan.empty.title"),
                    description: a("action_plan.empty.description"),
                    actionLabel: a("action_plan.empty.cta"),
                    onAction: () => {},
                  })
                : e.jsxs(p, {
                    className: "border-none shadow-xl bg-card overflow-hidden",
                    children: [
                      e.jsxs(x, {
                        className: "pb-6 border-b bg-muted/20",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(w, {
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
                          e.jsx(h, {
                            className: "text-2xl font-black tracking-tight",
                            children: a("action_plan.title"),
                          }),
                          e.jsx(_, {
                            className:
                              "text-base font-medium text-muted-foreground/80 mt-1",
                            children: a("action_plan.subtitle"),
                          }),
                        ],
                      }),
                      e.jsxs(u, {
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
                                      onClick: () => E(t.id),
                                      className:
                                        "mt-1 flex-shrink-0 transition-all active:scale-90",
                                      children:
                                        t.status === "completed"
                                          ? e.jsx("div", {
                                              className:
                                                "h-7 w-7 rounded-full bg-green-500 flex items-center justify-center text-white shadow-sm shadow-green-200",
                                              children: e.jsx(M, {
                                                className:
                                                  "h-4 w-4 stroke-[3px]",
                                              }),
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "h-7 w-7 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center hover:border-primary transition-colors group-hover:bg-primary/5",
                                              children: e.jsx(P, {
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
                                              e.jsx(w, {
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
                                                e.jsx(C, {
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
                                                e.jsx(Q, {
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
                                    e.jsx(r, {
                                      variant: "ghost",
                                      size: "sm",
                                      className:
                                        "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                      children: e.jsx(R, {
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
                            children: e.jsxs(r, {
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
              e.jsxs(p, {
                className:
                  "bg-primary shadow-2xl border-none text-primary-foreground overflow-hidden relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 p-8 opacity-10 pointer-events-none",
                    children: e.jsx(z, { className: "h-32 w-32 rotate-12" }),
                  }),
                  e.jsxs(x, {
                    className: "relative",
                    children: [
                      e.jsxs(h, {
                        className: "text-xl font-black flex items-center gap-2",
                        children: [
                          e.jsx(z, { className: "h-5 w-5" }),
                          a("action_plan.impact_card.title"),
                        ],
                      }),
                      e.jsx(_, {
                        className: "text-primary-foreground/70 font-medium",
                        children: a("action_plan.impact_card.desc"),
                      }),
                    ],
                  }),
                  e.jsxs(u, {
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
                      e.jsxs(r, {
                        className:
                          "w-full h-12 gap-2 bg-white text-primary hover:bg-white/90 font-black shadow-lg",
                        variant: "secondary",
                        children: [
                          a("action_plan.impact_card.cta_evolution"),
                          e.jsx(Z, { className: "h-4 w-4" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(p, {
                className: "border-dashed border-2 bg-muted/20",
                children: [
                  e.jsx(x, {
                    className: "pb-4",
                    children: e.jsxs(h, {
                      className:
                        "text-sm font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2",
                      children: [
                        e.jsx(C, { className: "h-4 w-4" }),
                        a("action_plan.next_target.title"),
                      ],
                    }),
                  }),
                  e.jsx(u, {
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
export { ae as default };
