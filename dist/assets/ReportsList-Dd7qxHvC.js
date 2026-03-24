import { u as K, j as e, B as o } from "./index-D2W-YaK1.js";
import { r as a } from "./vendor-BgR6OOld.js";
import { a as O, L as w } from "./router-D2JcpG7e.js";
import { C as u, a as j, b as Q, c as U } from "./card-38iTbfya.js";
import { I as W } from "./input-OAk-x-jG.js";
import { B as k } from "./badge-BXC9IUk2.js";
import { D as S, a as _, b as L, c } from "./dropdown-menu-Cu1C-DPN.js";
import { S as D, a as P, b as $, c as E, d as m } from "./select-Al8v4OJE.js";
import { A as X } from "./AISidebar-uYjyCg4j.js";
import { r as Y } from "./mockReports-3cW05Ka2.js";
import {
  r as Z,
  p as R,
  s as T,
  t as ee,
  u as se,
  v as F,
  E as N,
  w as z,
  D as A,
  d as M,
} from "./utils-D0yiqoi7.js";
import "./index-KHQ64V1j.js";
import "./index-C-A8M8e4.js";
import "./index-ryZnQBTX.js";
import "./index-Cda9Zv0V.js";
const ge = () => {
  const x = O(),
    { t, i18n: b } = K(),
    [g, I] = a.useState([]),
    [p, v] = a.useState([]),
    [B, V] = a.useState(!0),
    [l, G] = a.useState(""),
    [d, H] = a.useState("all"),
    [n, q] = a.useState("all"),
    [f, y] = a.useState("list");
  (a.useEffect(() => {
    (async () => {
      try {
        const r = await Y.getAllReports();
        (I(r), v(r));
      } catch (r) {
        console.error("Error loading reports:", r);
      } finally {
        V(!1);
      }
    })();
  }, []),
    a.useEffect(() => {
      let s = g;
      (l &&
        (s = s.filter(
          (r) =>
            r.title.toLowerCase().includes(l.toLowerCase()) ||
            r.description.toLowerCase().includes(l.toLowerCase()) ||
            r.category.toLowerCase().includes(l.toLowerCase()),
        )),
        d !== "all" && (s = s.filter((r) => r.status === d)),
        n !== "all" && (s = s.filter((r) => r.category === n)),
        v(s));
    }, [g, l, d, n]));
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
    C = (s) => {
      switch (s) {
        case "completed":
          return t("reports.filters.completed");
        case "shared":
          return t("reports.filters.shared");
        default:
          return t("reports.filters.draft");
      }
    },
    J = Array.from(new Set(g.map((s) => s.category)));
  return B
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
        children: e.jsxs("div", {
          className: "flex w-full overflow-hidden",
          children: [
            e.jsxs("div", {
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
                            e.jsx(Z, {
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
                      children: e.jsxs(w, {
                        to: "/app/novo-relatorio",
                        children: [
                          e.jsx(R, { className: "mr-2 h-4 w-4" }),
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
                  children: e.jsx(j, {
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
                                e.jsx(T, {
                                  className:
                                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                                }),
                                e.jsx(W, {
                                  placeholder: t(
                                    "reports.filters.search_placeholder",
                                  ),
                                  value: l,
                                  onChange: (s) => G(s.target.value),
                                  className: "pl-10",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                e.jsxs(D, {
                                  value: d,
                                  onValueChange: H,
                                  children: [
                                    e.jsx(P, {
                                      className: "w-full sm:w-36",
                                      children: e.jsx($, {
                                        placeholder: t(
                                          "reports.filters.status",
                                        ),
                                      }),
                                    }),
                                    e.jsxs(E, {
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
                                e.jsxs(D, {
                                  value: n,
                                  onValueChange: q,
                                  children: [
                                    e.jsx(P, {
                                      className: "w-full sm:w-36",
                                      children: e.jsx($, {
                                        placeholder: t(
                                          "reports.filters.category",
                                        ),
                                      }),
                                    }),
                                    e.jsxs(E, {
                                      children: [
                                        e.jsx(m, {
                                          value: "all",
                                          children: t("reports.filters.all"),
                                        }),
                                        J.map((s) =>
                                          e.jsx(
                                            m,
                                            { value: s, children: s },
                                            s,
                                          ),
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
                              children: t("reports.counter", {
                                count: p.length,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "hidden sm:flex items-center gap-1",
                              children: [
                                e.jsx(o, {
                                  variant: f === "grid" ? "default" : "outline",
                                  size: "sm",
                                  onClick: () => y("grid"),
                                  "aria-label": t("reports.view_grid"),
                                  title: t("reports.view_grid"),
                                  children: e.jsx(ee, { className: "h-4 w-4" }),
                                }),
                                e.jsx(o, {
                                  variant: f === "list" ? "default" : "outline",
                                  size: "sm",
                                  onClick: () => y("list"),
                                  "aria-label": t("reports.view_list"),
                                  title: t("reports.view_list"),
                                  children: e.jsx(se, { className: "h-4 w-4" }),
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
                      children: e.jsx(j, {
                        className: "text-center py-12",
                        children: e.jsxs("div", {
                          className: "max-w-md mx-auto",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4",
                              children: e.jsx(T, {
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
                                children: e.jsxs(w, {
                                  to: "/app/novo-relatorio",
                                  children: [
                                    e.jsx(R, { className: "mr-2 h-4 w-4" }),
                                    t("reports.empty.cta"),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      }),
                    })
                  : f === "grid"
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
                                e.jsx(Q, {
                                  className: "pb-2 p-5",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-start justify-between gap-3",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx(U, {
                                            className:
                                              "text-base sm:text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors tracking-tight",
                                            children: s.title,
                                          }),
                                          e.jsx(k, {
                                            className: `mt-2 ${h(s.status)} text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border-none shadow-sm`,
                                            variant: "secondary",
                                            children: C(s.status),
                                          }),
                                        ],
                                      }),
                                      e.jsxs(S, {
                                        children: [
                                          e.jsx(_, {
                                            asChild: !0,
                                            onClick: (i) => i.stopPropagation(),
                                            children: e.jsx(o, {
                                              variant: "ghost",
                                              size: "sm",
                                              className:
                                                "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
                                              children: e.jsx(F, {
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                          }),
                                          e.jsxs(L, {
                                            align: "end",
                                            children: [
                                              e.jsxs(c, {
                                                onClick: (i) => {
                                                  (i.stopPropagation(),
                                                    x(
                                                      `/app/relatorios/${s.id}`,
                                                    ));
                                                },
                                                children: [
                                                  e.jsx(N, {
                                                    className: "mr-2 h-4 w-4",
                                                  }),
                                                  t("reports.actions.view"),
                                                ],
                                              }),
                                              e.jsxs(c, {
                                                onClick: (i) =>
                                                  i.stopPropagation(),
                                                children: [
                                                  e.jsx(z, {
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
                                e.jsx(j, {
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
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center",
                                                children: e.jsx(M, {
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
                                            ).toLocaleDateString(b.language),
                                          }),
                                        ],
                                      }),
                                      e.jsx(o, {
                                        variant: "outline",
                                        size: "sm",
                                        asChild: !0,
                                        className:
                                          "w-full font-bold hover:bg-primary hover:text-white transition-all duration-300",
                                        children: e.jsxs(w, {
                                          to: `/app/relatorios/${s.id}`,
                                          children: [
                                            e.jsx(N, {
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
                        children: e.jsx(j, {
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
                                                  children: e.jsx(M, {
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
                                            children: e.jsx(k, {
                                              className: `${h(s.status)} text-[10px] uppercase font-bold border-none`,
                                              variant: "secondary",
                                              children: C(s.status),
                                            }),
                                          }),
                                          e.jsx("td", {
                                            className:
                                              "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                            children: new Date(
                                              s.updatedAt,
                                            ).toLocaleDateString(b.language),
                                          }),
                                          e.jsx("td", {
                                            className: "py-4 px-4 text-right",
                                            children: e.jsxs(S, {
                                              children: [
                                                e.jsx(_, {
                                                  asChild: !0,
                                                  onClick: (r) =>
                                                    r.stopPropagation(),
                                                  children: e.jsx(o, {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "h-8 w-8 p-0",
                                                    children: e.jsx(F, {
                                                      className: "h-4 w-4",
                                                    }),
                                                  }),
                                                }),
                                                e.jsxs(L, {
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
                                                        e.jsx(N, {
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        t(
                                                          "reports.actions.view",
                                                        ),
                                                      ],
                                                    }),
                                                    e.jsxs(c, {
                                                      onClick: (r) =>
                                                        r.stopPropagation(),
                                                      children: [
                                                        e.jsx(z, {
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
            e.jsx(X, { context: "reports", className: "hidden xl:block" }),
          ],
        }),
      });
};
export { ge as default };
