import { j as e, B as o, d as P, u as z } from "./index-CZZTgEon.js";
import { r as i } from "./vendor-BgR6OOld.js";
import { a as F, L as T } from "./router-D2JcpG7e.js";
import { C as p, a as h, b as B, c as E } from "./card-CeRYWmFS.js";
import { I as $ } from "./input-BW1kAVjz.js";
import { B as N } from "./badge-Dywuca96.js";
import { D as b, a as w, b as v, c as u } from "./dropdown-menu-TCpEpQRM.js";
import {
  p as c,
  a4 as y,
  s as A,
  t as I,
  u as R,
  v as C,
  V as k,
  z as M,
  o as V,
  c as G,
  B as H,
  g as U,
  a as q,
  a5 as O,
} from "./utils-D0yiqoi7.js";
import { A as J } from "./AISidebar-CS-EKKEd.js";
import "./index-C557e4H0.js";
import "./index-C_1O2NDl.js";
import "./index-xlj4pXPM.js";
const K = ({
    onClick: l,
    icon: a = e.jsx(c, { className: "h-6 w-6" }),
    className: m,
    children: n = "Novo Relatório",
  }) =>
    e.jsxs(o, {
      onClick: l,
      className: P(
        "fixed bottom-6 right-6 z-50 h-14 px-6 shadow-lg hover:shadow-xl transition-all duration-200",
        "bg-primary hover:bg-primary-dark text-primary-foreground",
        "rounded-full flex items-center gap-2",
        "animate-scale-in",
        m,
      ),
      children: [
        a,
        e.jsx("span", { className: "hidden sm:inline", children: n }),
      ],
    }),
  le = () => {
    const l = F(),
      { t: a, i18n: m } = z(),
      [n, D] = i.useState([]),
      [x, f] = i.useState([]),
      [r, S] = i.useState(""),
      [g, j] = i.useState("list"),
      [_, L] = i.useState(!0);
    return (
      i.useEffect(() => {
        const s = [
          {
            id: "1",
            name: "Relatórios Financeiros",
            icon: V,
            color: "bg-blue-50 text-blue-600 border-blue-100",
            reportCount: 12,
            lastModified: "2024-01-15",
            description: "Análises financeiras e orçamentárias",
          },
          {
            id: "2",
            name: "Vendas & Marketing",
            icon: G,
            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
            reportCount: 8,
            lastModified: "2024-01-14",
            description: "Performance de vendas e campanhas",
          },
          {
            id: "3",
            name: "Operacional",
            icon: H,
            color: "bg-slate-50 text-slate-600 border-slate-100",
            reportCount: 5,
            lastModified: "2024-01-13",
            description: "Processos e eficiência operacional",
          },
          {
            id: "4",
            name: "Recursos Humanos",
            icon: U,
            color: "bg-orange-50 text-orange-600 border-orange-100",
            reportCount: 3,
            lastModified: "2024-01-12",
            description: "Gestão de pessoas e talentos",
          },
          {
            id: "5",
            name: "Projetos Estratégicos",
            icon: q,
            color: "bg-rose-50 text-rose-600 border-rose-100",
            reportCount: 7,
            lastModified: "2024-01-11",
            description: "Acompanhamento de projetos especiais",
          },
          {
            id: "6",
            name: "Compliance & Auditoria",
            icon: O,
            color: "bg-zinc-50 text-zinc-600 border-zinc-100",
            reportCount: 4,
            lastModified: "2024-01-10",
            description: "Conformidade e auditorias internas",
          },
        ];
        setTimeout(() => {
          (D(s), f(s), L(!1));
        }, 1e3);
      }, []),
      i.useEffect(() => {
        f(
          r
            ? n.filter((s) => {
                var t;
                return (
                  s.name.toLowerCase().includes(r.toLowerCase()) ||
                  ((t = s.description) == null
                    ? void 0
                    : t.toLowerCase().includes(r.toLowerCase()))
                );
              })
            : n,
        );
      }, [n, r]),
      _
        ? e.jsx("div", {
            className: "p-6 max-w-7xl mx-auto",
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
                e.jsx("div", { className: "h-10 bg-muted rounded w-full" }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: [1, 2, 3, 4, 5, 6].map((s) =>
                    e.jsx("div", { className: "h-40 bg-muted rounded-2xl" }, s),
                  ),
                }),
              ],
            }),
          })
        : e.jsxs("div", {
            className: "min-h-screen bg-gradient-subtle w-full",
            children: [
              e.jsxs("div", {
                className: "flex w-full overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className: "flex-1 min-w-0 p-4 sm:p-6 space-y-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("h1", {
                                className:
                                  "text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3",
                                children: [
                                  e.jsx(y, {
                                    className: "h-7 w-7 text-primary",
                                  }),
                                  a("folders.title"),
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-muted-foreground mt-1 sm:mt-2",
                                children: a("folders.subtitle"),
                              }),
                            ],
                          }),
                          e.jsxs(o, {
                            size: "lg",
                            className: "self-start sm:self-auto card-hover",
                            onClick: () => l("/app/novo-relatorio"),
                            children: [
                              e.jsx(c, { className: "mr-2 h-5 w-5" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: a("folders.new_folder_button"),
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: a("common.next"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "animate-fade-in",
                        style: { animationDelay: "0.1s" },
                        children: e.jsx(p, {
                          children: e.jsx(h, {
                            className: "p-4",
                            children: e.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row gap-4 items-center",
                              children: [
                                e.jsxs("div", {
                                  className: "relative flex-1 w-full",
                                  children: [
                                    e.jsx(A, {
                                      className:
                                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                                    }),
                                    e.jsx($, {
                                      placeholder: a(
                                        "folders.search_placeholder",
                                      ),
                                      value: r,
                                      onChange: (s) => S(s.target.value),
                                      className: "pl-10",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(o, {
                                      variant:
                                        g === "grid" ? "default" : "outline",
                                      size: "sm",
                                      onClick: () => j("grid"),
                                      className: "touch-target",
                                      "aria-label": a("reports.view_grid"),
                                      title: a("reports.view_grid"),
                                      children: e.jsx(I, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                    e.jsx(o, {
                                      variant:
                                        g === "list" ? "default" : "outline",
                                      size: "sm",
                                      onClick: () => j("list"),
                                      className: "touch-target",
                                      "aria-label": a("reports.view_list"),
                                      title: a("reports.view_list"),
                                      children: e.jsx(R, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "flex items-center justify-between animate-fade-in",
                        style: { animationDelay: "0.2s" },
                        children: e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: a("folders.counter", { count: x.length }),
                        }),
                      }),
                      x.length === 0
                        ? e.jsx(p, {
                            className: "animate-fade-in",
                            style: { animationDelay: "0.3s" },
                            children: e.jsx(h, {
                              className: "text-center py-12",
                              children: e.jsxs("div", {
                                className: "max-w-md mx-auto",
                                children: [
                                  e.jsx(y, {
                                    className:
                                      "h-16 w-16 text-muted-foreground mx-auto mb-4",
                                  }),
                                  e.jsx("h3", {
                                    className:
                                      "text-lg font-medium text-foreground mb-2",
                                    children: a(
                                      r
                                        ? "folders.empty.title_search"
                                        : "folders.empty.title",
                                    ),
                                  }),
                                  e.jsx("p", {
                                    className: "text-muted-foreground mb-6",
                                    children: a(
                                      r
                                        ? "folders.empty.desc_search"
                                        : "folders.empty.desc",
                                    ),
                                  }),
                                  !r &&
                                    e.jsx(o, {
                                      asChild: !0,
                                      children: e.jsxs(T, {
                                        to: "/app/novo-relatorio",
                                        children: [
                                          e.jsx(c, {
                                            className: "mr-2 h-4 w-4",
                                          }),
                                          a("folders.empty.cta"),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          })
                        : g === "grid"
                          ? e.jsx("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                              children: x.map((s, t) =>
                                e.jsxs(
                                  p,
                                  {
                                    className:
                                      "card-hover group cursor-pointer animate-fade-in overflow-hidden border-border/40",
                                    style: {
                                      animationDelay: `${0.3 + t * 0.1}s`,
                                    },
                                    onClick: () => l(`/app/pastas/${s.id}`),
                                    children: [
                                      e.jsx("div", {
                                        className: `h-1.5 w-full ${s.color.split(" ")[0]}`,
                                      }),
                                      e.jsx(B, {
                                        className: "pb-3 px-5 pt-5",
                                        children: e.jsxs("div", {
                                          className:
                                            "flex items-start justify-between",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-4 flex-1 min-w-0",
                                              children: [
                                                e.jsx("div", {
                                                  className: `w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${s.color} shrink-0`,
                                                  children: e.jsx(s.icon, {
                                                    className: "h-6 w-6",
                                                  }),
                                                }),
                                                e.jsxs("div", {
                                                  className: "flex-1 min-w-0",
                                                  children: [
                                                    e.jsx(E, {
                                                      className:
                                                        "text-xl text-foreground line-clamp-1 group-hover:text-primary transition-colors font-bold tracking-tight",
                                                      children: s.name,
                                                    }),
                                                    e.jsx(N, {
                                                      variant: "secondary",
                                                      className:
                                                        "mt-1.5 bg-secondary/50 text-secondary-foreground border-transparent px-2 font-medium",
                                                      children: a(
                                                        "folders.meta.items",
                                                        {
                                                          count: s.reportCount,
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs(b, {
                                              children: [
                                                e.jsx(w, {
                                                  asChild: !0,
                                                  onClick: (d) =>
                                                    d.stopPropagation(),
                                                  children: e.jsx(o, {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className:
                                                      "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: e.jsx(C, {
                                                      className: "h-4 w-4",
                                                    }),
                                                  }),
                                                }),
                                                e.jsxs(v, {
                                                  align: "end",
                                                  children: [
                                                    e.jsxs(u, {
                                                      onClick: (d) => {
                                                        d.stopPropagation();
                                                      },
                                                      children: [
                                                        e.jsx(k, {
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        a(
                                                          "folders.actions.rename",
                                                        ),
                                                      ],
                                                    }),
                                                    e.jsxs(u, {
                                                      className:
                                                        "text-destructive",
                                                      onClick: (d) => {
                                                        d.stopPropagation();
                                                      },
                                                      children: [
                                                        e.jsx(M, {
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        a(
                                                          "folders.actions.delete",
                                                        ),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      e.jsx(h, {
                                        className: "px-5 pb-5 pt-0",
                                        children: e.jsxs("div", {
                                          className: "space-y-4",
                                          children: [
                                            s.description &&
                                              e.jsx("p", {
                                                className:
                                                  "text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10",
                                                children: s.description,
                                              }),
                                            e.jsxs("div", {
                                              className:
                                                "pt-4 border-t border-border/30 flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/70",
                                              children: [
                                                e.jsxs("div", {
                                                  className: "flex flex-col",
                                                  children: [
                                                    e.jsx("span", {
                                                      children: a(
                                                        "folders.meta.modified",
                                                      ),
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-foreground/80 mt-0.5",
                                                      children: new Date(
                                                        s.lastModified,
                                                      ).toLocaleDateString(
                                                        m.language,
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300",
                                                  children: e.jsx(c, {
                                                    className: "h-4 w-4",
                                                  }),
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
                            })
                          : e.jsx(p, {
                              className:
                                "animate-fade-in overflow-hidden border-border/40",
                              children: e.jsx(h, {
                                className: "p-0",
                                children: e.jsx("div", {
                                  className: "overflow-x-auto",
                                  children: e.jsxs("table", {
                                    className: "w-full text-left",
                                    "aria-label": a("folders.table_desc", {
                                      defaultValue: "Lista de pastas",
                                    }),
                                    children: [
                                      e.jsx("thead", {
                                        children: e.jsxs("tr", {
                                          className:
                                            "border-b border-border/50 bg-muted/30",
                                          children: [
                                            e.jsx("th", {
                                              className:
                                                "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                              children: a(
                                                "folders.actions.open",
                                              ),
                                            }),
                                            e.jsx("th", {
                                              className:
                                                "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                              children: a(
                                                "folders.meta.items",
                                                { count: 0 },
                                              ).split(" ")[1],
                                            }),
                                            e.jsx("th", {
                                              className:
                                                "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell",
                                              children: a(
                                                "folders.meta.modified",
                                              ),
                                            }),
                                            e.jsx("th", {
                                              className: "py-3 px-4 w-10",
                                            }),
                                          ],
                                        }),
                                      }),
                                      e.jsx("tbody", {
                                        children: x.map((s) =>
                                          e.jsxs(
                                            "tr",
                                            {
                                              className:
                                                "group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer",
                                              onClick: () =>
                                                l(`/app/pastas/${s.id}`),
                                              children: [
                                                e.jsx("td", {
                                                  className: "py-4 px-4",
                                                  children: e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-3",
                                                    children: [
                                                      e.jsx("div", {
                                                        className: `w-9 h-9 rounded-lg flex items-center justify-center border shadow-sm ${s.color} shrink-0`,
                                                        children: e.jsx(
                                                          s.icon,
                                                          {
                                                            className:
                                                              "h-4 w-4",
                                                          },
                                                        ),
                                                      }),
                                                      e.jsxs("div", {
                                                        children: [
                                                          e.jsx("p", {
                                                            className:
                                                              "font-bold text-foreground group-hover:text-primary transition-colors",
                                                            children: s.name,
                                                          }),
                                                          e.jsx("p", {
                                                            className:
                                                              "text-xs text-muted-foreground hidden sm:block",
                                                            children:
                                                              s.description,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                e.jsx("td", {
                                                  className: "py-4 px-4",
                                                  children: e.jsx(N, {
                                                    variant: "outline",
                                                    className: "font-medium",
                                                    children: s.reportCount,
                                                  }),
                                                }),
                                                e.jsx("td", {
                                                  className:
                                                    "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                                  children: new Date(
                                                    s.lastModified,
                                                  ).toLocaleDateString(
                                                    m.language,
                                                  ),
                                                }),
                                                e.jsx("td", {
                                                  className: "py-4 px-4",
                                                  children: e.jsxs(b, {
                                                    children: [
                                                      e.jsx(w, {
                                                        asChild: !0,
                                                        onClick: (t) =>
                                                          t.stopPropagation(),
                                                        children: e.jsx(o, {
                                                          variant: "ghost",
                                                          size: "sm",
                                                          className:
                                                            "h-8 w-8 p-0",
                                                          children: e.jsx(C, {
                                                            className:
                                                              "h-4 w-4",
                                                          }),
                                                        }),
                                                      }),
                                                      e.jsxs(v, {
                                                        align: "end",
                                                        children: [
                                                          e.jsxs(u, {
                                                            onClick: (t) => {
                                                              t.stopPropagation();
                                                            },
                                                            children: [
                                                              e.jsx(k, {
                                                                className:
                                                                  "mr-2 h-4 w-4",
                                                              }),
                                                              a(
                                                                "folders.actions.rename",
                                                              ),
                                                            ],
                                                          }),
                                                          e.jsxs(u, {
                                                            className:
                                                              "text-destructive",
                                                            onClick: (t) => {
                                                              t.stopPropagation();
                                                            },
                                                            children: [
                                                              e.jsx(M, {
                                                                className:
                                                                  "mr-2 h-4 w-4",
                                                              }),
                                                              a(
                                                                "folders.actions.delete",
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
                  e.jsx(J, {
                    context: "reports",
                    className: "hidden xl:block",
                  }),
                ],
              }),
              e.jsx(K, {
                onClick: () => l("/app/novo-relatorio"),
                icon: e.jsx(c, { className: "h-6 w-6" }),
                className: "lg:hidden",
                children: a("folders.new_folder_button"),
              }),
            ],
          })
    );
  };
export { le as default };
