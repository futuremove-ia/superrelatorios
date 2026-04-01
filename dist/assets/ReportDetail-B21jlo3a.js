import { d as V, u as $, j as e, B as t } from "./index-BNBvVWlM.js";
import { d as q, c as F, r as p, L as C } from "./router-C2uYhr1z.js";
import { C as r, a as i, b as h, c as u, d as Z } from "./card-ChPN7OiP.js";
import { B as T } from "./badge-BPr2YYbt.js";
import { D as G, a as H, b as O, c as S } from "./dropdown-menu-CX3VKK1c.js";
import { P as Q } from "./paper-DvUuZcGa.js";
import { r as W } from "./mockReports-3cW05Ka2.js";
import { B as Y } from "./BrandName-CtyiOgdf.js";
import { D as J, a as K } from "./DiagnosticSection-MbHn2J-x.js";
import { P as U } from "./PriorityCard-CHP_Aia7.js";
import { T as X, a as ee, b as B, c as E } from "./tabs-D5L53k3c.js";
import {
  Q as se,
  w as j,
  D as c,
  v as ae,
  V as P,
  E as A,
  W as te,
  Y as L,
  e as re,
  O as z,
  Z as ie,
  _ as le,
} from "./utils-CrQ_Kxni.js";
import "./index-CQm93fZh.js";
import "./index-GZYWVrBg.js";
import "./index-DGNdjbkF.js";
import "./PieChart-WQScEvpf.js";
const _e = () => {
  var _, y, k, D;
  const { id: o } = q(),
    g = F(),
    { toast: l } = V(),
    { t: s, i18n: f } = $(),
    [a, R] = p.useState(null),
    [M, I] = p.useState(!0),
    N =
      (y =
        (_ = a == null ? void 0 : a.rawData) == null ? void 0 : _.diagnostic) !=
        null && y.diagnostic
        ? {
            id: `diag-${a == null ? void 0 : a.id}`,
            reportId: (a == null ? void 0 : a.id) || "",
            createdAt: (a == null ? void 0 : a.createdAt) || "",
            ...a.rawData.diagnostic.diagnostic,
          }
        : null,
    b =
      (D =
        (k = a == null ? void 0 : a.rawData) == null ? void 0 : k.diagnostic) !=
        null && D.suggestedPriority
        ? {
            id: `prio-${a == null ? void 0 : a.id}`,
            diagnosticId: `diag-${a == null ? void 0 : a.id}`,
            createdAt: (a == null ? void 0 : a.createdAt) || "",
            status: "suggested",
            ...a.rawData.diagnostic.suggestedPriority,
          }
        : null;
  p.useEffect(() => {
    (async () => {
      if (o)
        try {
          const n = await W.getReportById(o);
          if (!n) {
            g("/app/relatorios");
            return;
          }
          R(n);
        } catch (n) {
          (console.error("Error loading report:", n),
            l({
              title: s("report_detail.notifications.error_load"),
              description: s("report_detail.notifications.error_load_desc"),
              variant: "destructive",
            }));
        } finally {
          I(!1);
        }
    })();
  }, [o, g, l, s]);
  const w = (d) => {
      switch (d) {
        case "completed":
          return "bg-green-100 text-green-800";
        case "shared":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-yellow-100 text-yellow-800";
      }
    },
    v = (d) => {
      switch (d) {
        case "completed":
          return s("reports.filters.completed");
        case "shared":
          return s("reports.filters.shared");
        default:
          return s("reports.filters.draft");
      }
    },
    m = () => {
      l({
        title: s("report_detail.notifications.link_copied"),
        description: s("report_detail.notifications.link_copied_desc"),
      });
    },
    x = () => {
      l({
        title: s("report_detail.notifications.download_start"),
        description: s("report_detail.notifications.download_desc"),
      });
    };
  return M
    ? e.jsx("div", {
        className: "p-4 sm:p-6 max-w-7xl mx-auto",
        children: e.jsxs("div", {
          className: "animate-pulse space-y-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx("div", { className: "h-10 w-10 bg-muted rounded" }),
                e.jsx("div", { className: "h-8 bg-muted rounded w-64" }),
              ],
            }),
            e.jsx("div", { className: "h-96 bg-muted rounded" }),
          ],
        }),
      })
    : a
      ? e.jsxs("div", {
          className: "p-4 sm:p-6 max-w-7xl mx-auto space-y-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0",
                  children: [
                    e.jsx(t, {
                      variant: "ghost",
                      size: "sm",
                      asChild: !0,
                      className: "flex-shrink-0",
                      children: e.jsxs(C, {
                        to: "/app/relatorios",
                        children: [
                          e.jsx(se, { className: "h-4 w-4 mr-1 sm:mr-2" }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: s("common.back"),
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        e.jsx("h1", {
                          className:
                            "text-xl sm:text-2xl font-bold text-foreground truncate",
                          children: a.title,
                        }),
                        a.subtitle &&
                          e.jsx("p", {
                            className: "text-muted-foreground text-sm truncate",
                            children: a.subtitle,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "hidden sm:flex items-center gap-2 flex-shrink-0",
                  children: [
                    e.jsx(T, { className: w(a.status), children: v(a.status) }),
                    e.jsxs(t, {
                      variant: "outline",
                      size: "sm",
                      onClick: m,
                      children: [
                        e.jsx(j, { className: "h-4 w-4 mr-2" }),
                        s("common.share"),
                      ],
                    }),
                    e.jsxs(t, {
                      variant: "outline",
                      size: "sm",
                      onClick: x,
                      children: [
                        e.jsx(c, { className: "h-4 w-4 mr-2" }),
                        s("common.download"),
                      ],
                    }),
                    e.jsxs(G, {
                      children: [
                        e.jsx(H, {
                          asChild: !0,
                          children: e.jsx(t, {
                            variant: "outline",
                            size: "sm",
                            children: e.jsx(ae, { className: "h-4 w-4" }),
                          }),
                        }),
                        e.jsxs(O, {
                          align: "end",
                          children: [
                            e.jsxs(S, {
                              children: [
                                e.jsx(P, { className: "mr-2 h-4 w-4" }),
                                s("common.edit"),
                              ],
                            }),
                            e.jsxs(S, {
                              children: [
                                e.jsx(A, { className: "mr-2 h-4 w-4" }),
                                s("report_detail.presentation_mode"),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "sm:hidden flex items-center gap-2",
                  children: e.jsx(T, {
                    className: w(a.status),
                    children: v(a.status),
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4",
              children: [
                e.jsx(r, {
                  children: e.jsxs(i, {
                    className: "p-4 sm:pt-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          e.jsx(te, { className: "h-4 w-4 flex-shrink-0" }),
                          e.jsx("span", {
                            children: s("report_detail.cards.category"),
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "font-medium text-sm sm:text-base truncate",
                        children: a.category,
                      }),
                    ],
                  }),
                }),
                e.jsx(r, {
                  children: e.jsxs(i, {
                    className: "p-4 sm:pt-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          e.jsx(L, { className: "h-4 w-4 flex-shrink-0" }),
                          e.jsx("span", {
                            children: s("report_detail.cards.created_at"),
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "font-medium text-sm sm:text-base",
                        children: new Date(a.createdAt).toLocaleDateString(
                          f.language,
                        ),
                      }),
                    ],
                  }),
                }),
                e.jsx(r, {
                  children: e.jsxs(i, {
                    className: "p-4 sm:pt-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          e.jsx(L, { className: "h-4 w-4 flex-shrink-0" }),
                          e.jsx("span", {
                            children: s("report_detail.cards.updated_at"),
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "font-medium text-sm sm:text-base",
                        children: new Date(a.updatedAt).toLocaleDateString(
                          f.language,
                        ),
                      }),
                    ],
                  }),
                }),
                e.jsx(r, {
                  children: e.jsxs(i, {
                    className: "p-4 sm:pt-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          e.jsx(A, { className: "h-4 w-4 flex-shrink-0" }),
                          e.jsx("span", {
                            children: s("report_detail.cards.views"),
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "font-medium text-sm sm:text-base",
                        children: "24",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs(X, {
              defaultValue: "report",
              className: "space-y-6",
              children: [
                e.jsxs(ee, {
                  className: "bg-muted/50 p-1",
                  children: [
                    e.jsxs(B, {
                      value: "report",
                      className:
                        "gap-2 font-bold text-xs uppercase tracking-widest",
                      children: [
                        e.jsx(re, { className: "h-3.5 w-3.5" }),
                        s("report_detail.tabs.report"),
                      ],
                    }),
                    e.jsxs(B, {
                      value: "sources",
                      className:
                        "gap-2 font-bold text-xs uppercase tracking-widest",
                      children: [
                        e.jsx(z, { className: "h-3.5 w-3.5" }),
                        s("report_detail.tabs.sources"),
                      ],
                    }),
                  ],
                }),
                e.jsx(E, {
                  value: "report",
                  className: "space-y-8 animate-in fade-in duration-500",
                  children: e.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                      e.jsxs("div", {
                        className: "lg:col-span-2 space-y-8",
                        children: [
                          e.jsx(Q, {
                            orientation: "portrait",
                            padding: "lg",
                            className: "min-h-[1000px] shadow-2xl border-none",
                            children: e.jsxs("div", {
                              className: "p-4 sm:p-8",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex justify-between items-start mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500",
                                  children: [
                                    e.jsx(Y, {}),
                                    e.jsxs("div", {
                                      className:
                                        "text-right text-[10px] uppercase tracking-widest font-mono",
                                      children: [
                                        s("report_detail.content.verified"),
                                        " • ",
                                        a.id,
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx(J, { blocks: a.blocks }),
                              ],
                            }),
                          }),
                          N &&
                            b &&
                            e.jsxs("div", {
                              className:
                                "pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mb-2",
                                  children: [
                                    e.jsx(ie, {
                                      className:
                                        "h-5 w-5 text-primary fill-primary/20",
                                    }),
                                    e.jsx("h2", {
                                      className:
                                        "text-xl font-bold tracking-tight",
                                      children: s(
                                        "report_detail.ai_section.title",
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsx(K, { diagnostic: N }),
                                e.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col justify-center space-y-2 p-4",
                                      children: [
                                        e.jsx("h4", {
                                          className:
                                            "font-bold text-sm uppercase tracking-wider text-muted-foreground",
                                          children: s(
                                            "report_detail.ai_section.recommended_priority",
                                          ),
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: s(
                                            "report_detail.ai_section.priority_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                    e.jsx(U, { priority: b }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsxs(r, {
                            className:
                              "border-border/40 bg-muted/10 backdrop-blur-sm",
                            children: [
                              e.jsx(h, {
                                children: e.jsx(u, {
                                  className: "text-base sm:text-lg",
                                  children: s(
                                    "report_detail.sidebar.info_title",
                                  ),
                                }),
                              }),
                              e.jsxs(i, {
                                className: "space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: s(
                                          "report_detail.sidebar.template",
                                        ),
                                      }),
                                      e.jsx("p", {
                                        className: "font-medium",
                                        children: a.template,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: s(
                                          "report_detail.sidebar.description",
                                        ),
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm",
                                        children: a.description,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs(r, {
                            children: [
                              e.jsx(h, {
                                children: e.jsx(u, {
                                  className: "text-base sm:text-lg",
                                  children: s(
                                    "report_detail.sidebar.quick_actions",
                                  ),
                                }),
                              }),
                              e.jsxs(i, {
                                className: "space-y-2",
                                children: [
                                  e.jsxs(t, {
                                    variant: "outline",
                                    className: "w-full justify-start",
                                    children: [
                                      e.jsx(P, { className: "mr-2 h-4 w-4" }),
                                      s("common.edit"),
                                    ],
                                  }),
                                  e.jsxs(t, {
                                    variant: "outline",
                                    className: "w-full justify-start",
                                    onClick: m,
                                    children: [
                                      e.jsx(j, { className: "mr-2 h-4 w-4" }),
                                      s("common.share"),
                                    ],
                                  }),
                                  e.jsxs(t, {
                                    variant: "outline",
                                    className: "w-full justify-start",
                                    onClick: x,
                                    children: [
                                      e.jsx(c, { className: "mr-2 h-4 w-4" }),
                                      s("report_detail.sidebar.export_pdf"),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(E, {
                  value: "sources",
                  className: "animate-in fade-in duration-500",
                  children: e.jsxs(r, {
                    className: "border-none shadow-xl",
                    children: [
                      e.jsxs(h, {
                        children: [
                          e.jsx(u, {
                            className: "text-lg",
                            children: s("report_detail.data_assets.title"),
                          }),
                          e.jsx(Z, {
                            children: s(
                              "report_detail.data_assets.description",
                            ),
                          }),
                        ],
                      }),
                      e.jsx(i, {
                        children: e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between p-4 rounded-xl border bg-muted/10",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "p-2 bg-background rounded-lg border shadow-sm",
                                      children: e.jsx(z, {
                                        className: "h-5 w-5 text-primary",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className: "font-bold text-sm",
                                          children: "Vendas_Novembro_2025.xlsx",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: "Planilha Excel • 1.2 MB",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs(t, {
                                  variant: "outline",
                                  size: "sm",
                                  className: "gap-2 font-bold",
                                  children: [
                                    e.jsx(c, { className: "h-4 w-4" }),
                                    s("report_detail.data_assets.download"),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between p-4 rounded-xl border bg-muted/10 opacity-50",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "p-2 bg-background rounded-lg border shadow-sm",
                                      children: e.jsx(le, {
                                        className: "h-5 w-5 text-blue-500",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className: "font-bold text-sm",
                                          children:
                                            "Google Analytics Dashboard",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children:
                                            "Fonte Externa • analytics.google.com",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx(t, {
                                  variant: "ghost",
                                  size: "sm",
                                  className: "gap-2",
                                  children: s(
                                    "report_detail.data_assets.open_link",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "sm:hidden fixed bottom-[3.5rem] left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-3 z-40 flex gap-2",
              style: { paddingBottom: "env(safe-area-inset-bottom)" },
              children: [
                e.jsxs(t, {
                  variant: "outline",
                  className: "flex-1",
                  onClick: m,
                  children: [
                    e.jsx(j, { className: "h-4 w-4 mr-2" }),
                    s("common.share"),
                  ],
                }),
                e.jsxs(t, {
                  className: "flex-1",
                  onClick: x,
                  children: [
                    e.jsx(c, { className: "h-4 w-4 mr-2" }),
                    s("common.download"),
                  ],
                }),
              ],
            }),
          ],
        })
      : e.jsx("div", {
          className: "p-4 sm:p-6 max-w-7xl mx-auto",
          children: e.jsx(r, {
            children: e.jsxs(i, {
              className: "text-center py-12",
              children: [
                e.jsx("h3", {
                  className: "text-lg font-medium text-foreground mb-2",
                  children: s("report_detail.notifications.not_found"),
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mb-6",
                  children: s("report_detail.notifications.error_load_desc"),
                }),
                e.jsx(t, {
                  asChild: !0,
                  children: e.jsx(C, {
                    to: "/app/relatorios",
                    children: s("report_detail.back_button"),
                  }),
                }),
              ],
            }),
          }),
        });
};
export { _e as default };
