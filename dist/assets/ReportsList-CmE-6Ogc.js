import { u as U, d as W, j as e, B as o } from "./index-DJVek99o.js";
import { r as l } from "./vendor-Bp-AcFIh.js";
import { u as X } from "./useQuery-lOGkLDRM.js";
import { a as Y, L as v } from "./router-Db_Yswnp.js";
import { C as g, a as f, b as Z, c as ee } from "./card-Ekw6AZkO.js";
import { I as se } from "./input-CPyHEH_p.js";
import { B as D } from "./badge-BRPjZ132.js";
import { D as L, a as T, b as z, c } from "./dropdown-menu-C63oTgop.js";
import { S as P, a as $, b as E, c as M, d as m } from "./select-D_Z_K9g1.js";
import { g as te } from "./supabaseReportsService-CRYy_N2b.js";
import { u as re } from "./useCurrentOrganization-QE33f3lM.js";
import {
  r as ae,
  n as F,
  s as B,
  t as le,
  u as ie,
  v as I,
  E as y,
  w as R,
  D as V,
  e as A,
} from "./utils-BrIGbSZG.js";
import "./index-DCuwROnA.js";
import "./index-C1y1VF1h.js";
import "./index-DgDxa8-3.js";
import "./index-Bxi3BZuB.js";
const Ce = () => {
  const p = Y(),
    { t, i18n: C } = U(),
    { toast: q } = W(),
    { organizationId: x, isDemoMode: j } = re(),
    [w, k] = l.useState([]),
    [a, O] = l.useState(""),
    [d, G] = l.useState("all"),
    [n, H] = l.useState("all"),
    [N, S] = l.useState("grid"),
    {
      data: b,
      isLoading: K,
      isError: Q,
      refetch: oe,
    } = X({
      queryKey: ["reports", x],
      queryFn: () => te(x),
      staleTime: 5 * 60 * 1e3,
      enabled: !!x && !j,
    });
  (Q &&
    q({
      title: t("errors.title"),
      description: t("reports.errors.load"),
      variant: "destructive",
    }),
    l.useEffect(() => {
      b && k(b);
    }, [b]),
    l.useEffect(() => {
      (j || !x) && k([]);
    }, [j, x]));
  const h = l.useMemo(() => {
      let s = w;
      return (
        a &&
          (s = s.filter(
            (r) =>
              r.title.toLowerCase().includes(a.toLowerCase()) ||
              r.description.toLowerCase().includes(a.toLowerCase()) ||
              r.category.toLowerCase().includes(a.toLowerCase()),
          )),
        d !== "all" && (s = s.filter((r) => r.status === d)),
        n !== "all" && (s = s.filter((r) => r.category === n)),
        s
      );
    }, [w, a, d, n]),
    u = (s) => {
      switch (s) {
        case "completed":
          return "bg-green-100 text-green-800";
        case "shared":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-yellow-100 text-yellow-800";
      }
    },
    _ = (s) => {
      switch (s) {
        case "completed":
          return t("reports.filters.completed");
        case "shared":
          return t("reports.filters.shared");
        default:
          return t("reports.filters.draft");
      }
    },
    J = Array.from(new Set(w.map((s) => s.category)));
  return K
    ? e.jsx("div", {
        className: "p-4 sm:p-6 max-w-7xl mx-auto",
        children: e.jsxs("div", {
          className: "animate-pulse space-y-6",
          children: [
            e.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                e.jsx("div", { className: "h-8 bg-muted rounded w-48" }),
                e.jsx("div", { className: "h-10 bg-muted rounded w-32" }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: [1, 2, 3, 4, 5, 6].map((s) =>
                e.jsx("div", { className: "h-56 bg-muted rounded-xl" }, s),
              ),
            }),
          ],
        }),
      })
    : e.jsx("div", {
        className: "bg-gradient-subtle min-h-full w-full",
        children: e.jsx("div", {
          className: "flex w-full overflow-hidden",
          children: e.jsxs("div", {
            className: "flex-1 min-w-0 p-4 sm:p-6 space-y-4 sm:space-y-6",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("h1", {
                        className:
                          "text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2 sm:gap-3",
                        children: [
                          e.jsx(ae, {
                            className: "h-5 w-5 sm:h-7 sm:w-7 text-primary",
                          }),
                          t("reports.title"),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-muted-foreground mt-1 text-sm",
                        children: t("reports.subtitle"),
                      }),
                    ],
                  }),
                  e.jsx(o, {
                    asChild: !0,
                    size: "default",
                    className: "self-start sm:self-auto touch-target",
                    children: e.jsxs(v, {
                      to: "/app/novo-relatorio",
                      children: [
                        e.jsx(F, { className: "mr-2 h-4 w-4" }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: t("reports.new_report_button"),
                        }),
                        e.jsx("span", {
                          className: "sm:hidden",
                          children: t("reports.new_report_button"),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsx(g, {
                children: e.jsx(f, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-3",
                        children: [
                          e.jsxs("div", {
                            className: "relative flex-1",
                            children: [
                              e.jsx(B, {
                                className:
                                  "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                              }),
                              e.jsx(se, {
                                placeholder: t(
                                  "reports.filters.search_placeholder",
                                ),
                                value: a,
                                onChange: (s) => O(s.target.value),
                                className: "pl-10",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsxs(P, {
                                value: d,
                                onValueChange: G,
                                children: [
                                  e.jsx($, {
                                    className: "w-full sm:w-36",
                                    children: e.jsx(E, {
                                      placeholder: t("reports.filters.status"),
                                    }),
                                  }),
                                  e.jsxs(M, {
                                    children: [
                                      e.jsx(m, {
                                        value: "all",
                                        children: t("reports.filters.all"),
                                      }),
                                      e.jsx(m, {
                                        value: "draft",
                                        children: t("reports.filters.draft"),
                                      }),
                                      e.jsx(m, {
                                        value: "completed",
                                        children: t(
                                          "reports.filters.completed",
                                        ),
                                      }),
                                      e.jsx(m, {
                                        value: "shared",
                                        children: t("reports.filters.shared"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs(P, {
                                value: n,
                                onValueChange: H,
                                children: [
                                  e.jsx($, {
                                    className: "w-full sm:w-36",
                                    children: e.jsx(E, {
                                      placeholder: t(
                                        "reports.filters.category",
                                      ),
                                    }),
                                  }),
                                  e.jsxs(M, {
                                    children: [
                                      e.jsx(m, {
                                        value: "all",
                                        children: t("reports.filters.all"),
                                      }),
                                      J.map((s) =>
                                        e.jsx(m, { value: s, children: s }, s),
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs sm:text-sm text-muted-foreground",
                            children: t("reports.counter", { count: h.length }),
                          }),
                          e.jsxs("div", {
                            className: "hidden sm:flex items-center gap-1",
                            children: [
                              e.jsx(o, {
                                variant: N === "grid" ? "default" : "outline",
                                size: "sm",
                                onClick: () => S("grid"),
                                "aria-label": t("reports.view_grid"),
                                title: t("reports.view_grid"),
                                children: e.jsx(le, { className: "h-4 w-4" }),
                              }),
                              e.jsx(o, {
                                variant: N === "list" ? "default" : "outline",
                                size: "sm",
                                onClick: () => S("list"),
                                "aria-label": t("reports.view_list"),
                                title: t("reports.view_list"),
                                children: e.jsx(ie, { className: "h-4 w-4" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              h.length === 0
                ? e.jsx(g, {
                    children: e.jsx(f, {
                      className: "text-center py-12",
                      children: e.jsxs("div", {
                        className: "max-w-md mx-auto",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4",
                            children: e.jsx(B, {
                              className: "h-8 w-8 text-muted-foreground",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "text-lg font-medium text-foreground mb-2",
                            children: t("reports.empty.title"),
                          }),
                          e.jsx("p", {
                            className: "text-muted-foreground mb-6 text-sm",
                            children: t(
                              a || d !== "all" || n !== "all"
                                ? "reports.empty.filter_desc"
                                : "reports.empty.brand_new_desc",
                            ),
                          }),
                          !a &&
                            d === "all" &&
                            n === "all" &&
                            e.jsx(o, {
                              asChild: !0,
                              children: e.jsxs(v, {
                                to: "/app/novo-relatorio",
                                children: [
                                  e.jsx(F, { className: "mr-2 h-4 w-4" }),
                                  t("reports.empty.cta"),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  })
                : N === "grid"
                  ? e.jsx("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                      children: h.map((s, r) =>
                        e.jsxs(
                          g,
                          {
                            className:
                              "card-hover group cursor-pointer overflow-hidden border-border/40 animate-fade-in",
                            style: { animationDelay: `${0.3 + r * 0.1}s` },
                            onClick: () => p(`/app/relatorios/${s.id}`),
                            children: [
                              e.jsx("div", {
                                className: `h-1.5 w-full ${u(s.status).includes("green") ? "bg-emerald-500" : u(s.status).includes("yellow") ? "bg-amber-500" : "bg-slate-400"}`,
                              }),
                              e.jsx(Z, {
                                className: "pb-2 p-5",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-start justify-between gap-3",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        e.jsx(ee, {
                                          className:
                                            "text-base sm:text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors tracking-tight",
                                          children: s.title,
                                        }),
                                        e.jsx(D, {
                                          className: `mt-2 ${u(s.status)} text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border-none shadow-sm`,
                                          variant: "secondary",
                                          children: _(s.status),
                                        }),
                                      ],
                                    }),
                                    e.jsxs(L, {
                                      children: [
                                        e.jsx(T, {
                                          asChild: !0,
                                          onClick: (i) => i.stopPropagation(),
                                          children: e.jsx(o, {
                                            variant: "ghost",
                                            size: "sm",
                                            className:
                                              "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
                                            children: e.jsx(I, {
                                              className: "h-4 w-4",
                                            }),
                                          }),
                                        }),
                                        e.jsxs(z, {
                                          align: "end",
                                          children: [
                                            e.jsxs(c, {
                                              onClick: (i) => {
                                                (i.stopPropagation(),
                                                  p(`/app/relatorios/${s.id}`));
                                              },
                                              children: [
                                                e.jsx(y, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                t("reports.actions.view"),
                                              ],
                                            }),
                                            e.jsxs(c, {
                                              onClick: (i) =>
                                                i.stopPropagation(),
                                              children: [
                                                e.jsx(R, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                t("reports.actions.share"),
                                              ],
                                            }),
                                            e.jsxs(c, {
                                              onClick: (i) =>
                                                i.stopPropagation(),
                                              children: [
                                                e.jsx(V, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                t("reports.actions.download"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx(f, {
                                className: "px-5 pb-5 pt-0",
                                children: e.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-[2.5rem]",
                                      children: s.description,
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between pt-4 border-t border-border/30",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center",
                                              children: e.jsx(A, {
                                                className:
                                                  "h-4 w-4 text-primary/70",
                                              }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-xs font-semibold text-muted-foreground",
                                              children: s.category,
                                            }),
                                          ],
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-medium text-muted-foreground/60 uppercase tracking-tighter",
                                          children: new Date(
                                            s.updatedAt,
                                          ).toLocaleDateString(C.language),
                                        }),
                                      ],
                                    }),
                                    e.jsx(o, {
                                      variant: "outline",
                                      size: "sm",
                                      asChild: !0,
                                      className:
                                        "w-full font-bold hover:bg-primary hover:text-white transition-all duration-300",
                                      children: e.jsxs(v, {
                                        to: `/app/relatorios/${s.id}`,
                                        children: [
                                          e.jsx(y, {
                                            className: "mr-2 h-4 w-4",
                                          }),
                                          t("reports.actions.open"),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          s.id,
                        ),
                      ),
                    })
                  : e.jsx(g, {
                      className:
                        "animate-fade-in overflow-hidden border-border/40",
                      children: e.jsx(f, {
                        className: "p-0",
                        children: e.jsx("div", {
                          className: "overflow-x-auto",
                          children: e.jsxs("table", {
                            className: "w-full text-left",
                            "aria-label": t("reports.table_desc"),
                            children: [
                              e.jsx("thead", {
                                children: e.jsxs("tr", {
                                  className:
                                    "border-b border-border/50 bg-muted/30",
                                  children: [
                                    e.jsx("th", {
                                      className:
                                        "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                      children: t("reports.title"),
                                    }),
                                    e.jsx("th", {
                                      className:
                                        "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden sm:table-cell",
                                      children: t("reports.filters.category"),
                                    }),
                                    e.jsx("th", {
                                      className:
                                        "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                      children: t("reports.filters.status"),
                                    }),
                                    e.jsx("th", {
                                      className:
                                        "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell",
                                      children: t(
                                        "report_detail.cards.updated_at",
                                      ),
                                    }),
                                    e.jsx("th", {
                                      className: "py-3 px-4 w-10",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("tbody", {
                                children: h.map((s) =>
                                  e.jsxs(
                                    "tr",
                                    {
                                      className:
                                        "group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer",
                                      onClick: () =>
                                        p(`/app/relatorios/${s.id}`),
                                      children: [
                                        e.jsx("td", {
                                          className: "py-4 px-4",
                                          children: e.jsxs("div", {
                                            className:
                                              "flex items-center gap-3",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0",
                                                children: e.jsx(A, {
                                                  className:
                                                    "h-4 w-4 text-primary/70",
                                                }),
                                              }),
                                              e.jsxs("div", {
                                                children: [
                                                  e.jsx("p", {
                                                    className:
                                                      "font-bold text-foreground group-hover:text-primary transition-colors text-sm",
                                                    children: s.title,
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-xs text-muted-foreground hidden lg:block line-clamp-1 max-w-xs",
                                                    children: s.description,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-4 px-4 hidden sm:table-cell text-sm font-medium text-muted-foreground",
                                          children: s.category,
                                        }),
                                        e.jsx("td", {
                                          className: "py-4 px-4",
                                          children: e.jsx(D, {
                                            className: `${u(s.status)} text-[10px] uppercase font-bold border-none`,
                                            variant: "secondary",
                                            children: _(s.status),
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                          children: new Date(
                                            s.updatedAt,
                                          ).toLocaleDateString(C.language),
                                        }),
                                        e.jsx("td", {
                                          className: "py-4 px-4 text-right",
                                          children: e.jsxs(L, {
                                            children: [
                                              e.jsx(T, {
                                                asChild: !0,
                                                onClick: (r) =>
                                                  r.stopPropagation(),
                                                children: e.jsx(o, {
                                                  variant: "ghost",
                                                  size: "sm",
                                                  className: "h-8 w-8 p-0",
                                                  children: e.jsx(I, {
                                                    className: "h-4 w-4",
                                                  }),
                                                }),
                                              }),
                                              e.jsxs(z, {
                                                align: "end",
                                                children: [
                                                  e.jsxs(c, {
                                                    onClick: (r) => {
                                                      (r.stopPropagation(),
                                                        p(
                                                          `/app/relatorios/${s.id}`,
                                                        ));
                                                    },
                                                    children: [
                                                      e.jsx(y, {
                                                        className:
                                                          "mr-2 h-4 w-4",
                                                      }),
                                                      t("reports.actions.view"),
                                                    ],
                                                  }),
                                                  e.jsxs(c, {
                                                    onClick: (r) =>
                                                      r.stopPropagation(),
                                                    children: [
                                                      e.jsx(R, {
                                                        className:
                                                          "mr-2 h-4 w-4",
                                                      }),
                                                      t(
                                                        "reports.actions.share",
                                                      ),
                                                    ],
                                                  }),
                                                  e.jsxs(c, {
                                                    onClick: (r) =>
                                                      r.stopPropagation(),
                                                    children: [
                                                      e.jsx(V, {
                                                        className:
                                                          "mr-2 h-4 w-4",
                                                      }),
                                                      t(
                                                        "reports.actions.download",
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    s.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
            ],
          }),
        }),
      });
};
export { Ce as default };
