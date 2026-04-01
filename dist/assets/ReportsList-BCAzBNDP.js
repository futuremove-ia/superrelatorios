import { u as Q, j as e, B as o } from "./index-DSuxXiPq.js";
import { c as U, r as a, L as b } from "./router-C2uYhr1z.js";
import { C as u, a as g, b as W, c as X } from "./card-kC7SKLKo.js";
import { I as Y } from "./input-DM6SScwh.js";
import { B as L } from "./badge-ByuXo0CA.js";
import { D as z, a as P, b as $, c } from "./dropdown-menu-B99_3PSh.js";
import { S as E, a as R, b as T, c as F, d as m } from "./select-DeKeYH2O.js";
import { g as Z } from "./supabaseReportsService-BcijqOBz.js";
import { u as ee } from "./useCurrentOrganization-BrovRglL.js";
import {
  r as se,
  n as M,
  s as B,
  t as te,
  u as re,
  v as I,
  E as v,
  w as V,
  D as A,
  e as O,
} from "./utils-CrQ_Kxni.js";
import "./index-CwntilPw.js";
import "./index-D8wekeCT.js";
import "./index-DDFUuL6J.js";
import "./index-frX45eRk.js";
import "./useQuery-cjyHvNTQ.js";
const we = () => {
  const x = U(),
    { t, i18n: y } = Q(),
    { organizationId: j, isDemoMode: C } = ee(),
    [f, k] = a.useState([]),
    [p, w] = a.useState([]),
    [G, S] = a.useState(!0),
    [l, H] = a.useState(""),
    [d, q] = a.useState("all"),
    [n, J] = a.useState("all"),
    [N, _] = a.useState("grid");
  (a.useEffect(() => {
    (async () => {
      try {
        if (C || !j) {
          (k([]), w([]), S(!1));
          return;
        }
        const r = await Z(j);
        (k(r), w(r));
      } catch (r) {
        console.error("Error loading reports:", r);
      } finally {
        S(!1);
      }
    })();
  }, [j, C]),
    a.useEffect(() => {
      let s = f;
      (l &&
        (s = s.filter(
          (r) =>
            r.title.toLowerCase().includes(l.toLowerCase()) ||
            r.description.toLowerCase().includes(l.toLowerCase()) ||
            r.category.toLowerCase().includes(l.toLowerCase()),
        )),
        d !== "all" && (s = s.filter((r) => r.status === d)),
        n !== "all" && (s = s.filter((r) => r.category === n)),
        w(s));
    }, [f, l, d, n]));
  const h = (s) => {
      switch (s) {
        case "completed":
          return "bg-green-100 text-green-800";
        case "shared":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-yellow-100 text-yellow-800";
      }
    },
    D = (s) => {
      switch (s) {
        case "completed":
          return t("reports.filters.completed");
        case "shared":
          return t("reports.filters.shared");
        default:
          return t("reports.filters.draft");
      }
    },
    K = Array.from(new Set(f.map((s) => s.category)));
  return G
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
                          e.jsx(se, {
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
                    children: e.jsxs(b, {
                      to: "/app/novo-relatorio",
                      children: [
                        e.jsx(M, { className: "mr-2 h-4 w-4" }),
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
              e.jsx(u, {
                children: e.jsx(g, {
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
                              e.jsx(Y, {
                                placeholder: t(
                                  "reports.filters.search_placeholder",
                                ),
                                value: l,
                                onChange: (s) => H(s.target.value),
                                className: "pl-10",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsxs(E, {
                                value: d,
                                onValueChange: q,
                                children: [
                                  e.jsx(R, {
                                    className: "w-full sm:w-36",
                                    children: e.jsx(T, {
                                      placeholder: t("reports.filters.status"),
                                    }),
                                  }),
                                  e.jsxs(F, {
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
                              e.jsxs(E, {
                                value: n,
                                onValueChange: J,
                                children: [
                                  e.jsx(R, {
                                    className: "w-full sm:w-36",
                                    children: e.jsx(T, {
                                      placeholder: t(
                                        "reports.filters.category",
                                      ),
                                    }),
                                  }),
                                  e.jsxs(F, {
                                    children: [
                                      e.jsx(m, {
                                        value: "all",
                                        children: t("reports.filters.all"),
                                      }),
                                      K.map((s) =>
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
                            children: t("reports.counter", { count: p.length }),
                          }),
                          e.jsxs("div", {
                            className: "hidden sm:flex items-center gap-1",
                            children: [
                              e.jsx(o, {
                                variant: N === "grid" ? "default" : "outline",
                                size: "sm",
                                onClick: () => _("grid"),
                                "aria-label": t("reports.view_grid"),
                                title: t("reports.view_grid"),
                                children: e.jsx(te, { className: "h-4 w-4" }),
                              }),
                              e.jsx(o, {
                                variant: N === "list" ? "default" : "outline",
                                size: "sm",
                                onClick: () => _("list"),
                                "aria-label": t("reports.view_list"),
                                title: t("reports.view_list"),
                                children: e.jsx(re, { className: "h-4 w-4" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              p.length === 0
                ? e.jsx(u, {
                    children: e.jsx(g, {
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
                              l || d !== "all" || n !== "all"
                                ? "reports.empty.filter_desc"
                                : "reports.empty.brand_new_desc",
                            ),
                          }),
                          !l &&
                            d === "all" &&
                            n === "all" &&
                            e.jsx(o, {
                              asChild: !0,
                              children: e.jsxs(b, {
                                to: "/app/novo-relatorio",
                                children: [
                                  e.jsx(M, { className: "mr-2 h-4 w-4" }),
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
                      children: p.map((s, r) =>
                        e.jsxs(
                          u,
                          {
                            className:
                              "card-hover group cursor-pointer overflow-hidden border-border/40 animate-fade-in",
                            style: { animationDelay: `${0.3 + r * 0.1}s` },
                            onClick: () => x(`/app/relatorios/${s.id}`),
                            children: [
                              e.jsx("div", {
                                className: `h-1.5 w-full ${h(s.status).includes("green") ? "bg-emerald-500" : h(s.status).includes("yellow") ? "bg-amber-500" : "bg-slate-400"}`,
                              }),
                              e.jsx(W, {
                                className: "pb-2 p-5",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-start justify-between gap-3",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        e.jsx(X, {
                                          className:
                                            "text-base sm:text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors tracking-tight",
                                          children: s.title,
                                        }),
                                        e.jsx(L, {
                                          className: `mt-2 ${h(s.status)} text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border-none shadow-sm`,
                                          variant: "secondary",
                                          children: D(s.status),
                                        }),
                                      ],
                                    }),
                                    e.jsxs(z, {
                                      children: [
                                        e.jsx(P, {
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
                                        e.jsxs($, {
                                          align: "end",
                                          children: [
                                            e.jsxs(c, {
                                              onClick: (i) => {
                                                (i.stopPropagation(),
                                                  x(`/app/relatorios/${s.id}`));
                                              },
                                              children: [
                                                e.jsx(v, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                t("reports.actions.view"),
                                              ],
                                            }),
                                            e.jsxs(c, {
                                              onClick: (i) =>
                                                i.stopPropagation(),
                                              children: [
                                                e.jsx(V, {
                                                  className: "mr-2 h-4 w-4",
                                                }),
                                                t("reports.actions.share"),
                                              ],
                                            }),
                                            e.jsxs(c, {
                                              onClick: (i) =>
                                                i.stopPropagation(),
                                              children: [
                                                e.jsx(A, {
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
                              e.jsx(g, {
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
                                              children: e.jsx(O, {
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
                                          ).toLocaleDateString(y.language),
                                        }),
                                      ],
                                    }),
                                    e.jsx(o, {
                                      variant: "outline",
                                      size: "sm",
                                      asChild: !0,
                                      className:
                                        "w-full font-bold hover:bg-primary hover:text-white transition-all duration-300",
                                      children: e.jsxs(b, {
                                        to: `/app/relatorios/${s.id}`,
                                        children: [
                                          e.jsx(v, {
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
                  : e.jsx(u, {
                      className:
                        "animate-fade-in overflow-hidden border-border/40",
                      children: e.jsx(g, {
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
                                children: p.map((s) =>
                                  e.jsxs(
                                    "tr",
                                    {
                                      className:
                                        "group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer",
                                      onClick: () =>
                                        x(`/app/relatorios/${s.id}`),
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
                                                children: e.jsx(O, {
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
                                          children: e.jsx(L, {
                                            className: `${h(s.status)} text-[10px] uppercase font-bold border-none`,
                                            variant: "secondary",
                                            children: D(s.status),
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                          children: new Date(
                                            s.updatedAt,
                                          ).toLocaleDateString(y.language),
                                        }),
                                        e.jsx("td", {
                                          className: "py-4 px-4 text-right",
                                          children: e.jsxs(z, {
                                            children: [
                                              e.jsx(P, {
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
                                              e.jsxs($, {
                                                align: "end",
                                                children: [
                                                  e.jsxs(c, {
                                                    onClick: (r) => {
                                                      (r.stopPropagation(),
                                                        x(
                                                          `/app/relatorios/${s.id}`,
                                                        ));
                                                    },
                                                    children: [
                                                      e.jsx(v, {
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
                                                      e.jsx(V, {
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
                                                      e.jsx(A, {
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
export { we as default };
