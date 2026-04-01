import {
  h as k,
  s as O,
  u as H,
  j as e,
  i as f,
  B as x,
  T as U,
  k as q,
  l as $,
  m as A,
  C as i,
  n as l,
  o as d,
  p as c,
  g as n,
  q as b,
  r as P,
} from "./index-DRWQgA5q.js";
import { u as Y } from "./useReports-D5xAhhIU.js";
import { r as w, L as u } from "./router-XBfdTQ0K.js";
import { B as h } from "./badge-DD2chybY.js";
import {
  af as V,
  ag as G,
  ah as _,
  ai as I,
  a2 as S,
  T as R,
  W as B,
  Y as D,
  Z as Q,
  aj as F,
  J as M,
  ac as W,
  a4 as K,
} from "./utils-Er8ll4su.js";
import "./useQuery-pMG9BRxa.js";
import "./useMutation-Bm6B-fB6.js";
import "./mockReports-3cW05Ka2.js";
const Z = () => {
    const [a, t] = w.useState(null),
      [y, p] = w.useState(!0),
      [C, T] = w.useState(null),
      { isDemoMode: N } = k();
    return (
      w.useEffect(() => {
        (async () => {
          try {
            if ((p(!0), N)) {
              (t({
                totalReports: 24,
                activeUsers: 12,
                recentActivity: 78,
                completionRate: 85,
                estimatedImpact: "R$45K",
              }),
                p(!1));
              return;
            }
            const { data: r, error: j } = await O.from("reports").select(
              "id, status, created_at",
            );
            if (j) throw j;
            const o = r ? r.length : 0,
              s = r ? r.filter((v) => v.status === "completed").length : 0,
              m = o > 0 ? (s / o) * 100 : 0,
              re = r
                ? r.filter((v) =>
                    v.created_at
                      ? new Date(v.created_at).getTime() >
                        Date.now() - 7 * 24 * 60 * 60 * 1e3
                      : !1,
                  ).length
                : 0;
            t({
              totalReports: o,
              activeUsers: 3,
              recentActivity: Math.round(m),
              completionRate: o,
              estimatedImpact: "R$" + (o * 1.5 || 0).toFixed(1) + "K",
            });
          } catch (r) {
            (console.error("Dashboard summary error:", r),
              T("Failed to fetch dashboard summary"));
          } finally {
            p(!1);
          }
        })();
      }, [N]),
      { data: a, loading: y, error: C }
    );
  },
  g = {
    critical: "red-500",
    warning: "amber-500",
    success: "green-500",
    stable: "green-500",
    default: "blue-500",
  },
  L = (a) => `border-l-${g[a] || g.default}`,
  z = (a) => `text-${g[a] || g.default}`,
  J = (a) => `bg-${(g[a] || g.default).split("-")[0]}-100`,
  X = [
    {
      title: "Run Rate (Caixa)",
      value: "R$ 245K",
      target: "R$ 300K",
      progress: 82,
      status: "warning",
      icon: _,
      description: "Caixa para 8 meses de operação",
    },
    {
      title: "Burn Rate Mensal",
      value: "R$ 31K",
      target: "R$ 28K",
      progress: 110,
      status: "critical",
      icon: R,
      description: "11% acima do planejado",
    },
    {
      title: "Dívida/Receita",
      value: "32%",
      target: "25%",
      progress: 78,
      status: "stable",
      icon: B,
      description: "Dentro do limite saudável",
    },
  ],
  ee = [
    {
      title: "CAC (Custo Aquisição)",
      value: "R$ 450",
      target: "R$ 400",
      progress: 113,
      status: "warning",
      icon: D,
      description: "13% acima do benchmark",
    },
    {
      title: "LTV (Lifetime Value)",
      value: "R$ 2.4K",
      target: "R$ 2.0K",
      progress: 120,
      status: "success",
      icon: S,
      description: "20% acima da meta",
    },
    {
      title: "Ticket Médio",
      value: "R$ 890",
      target: "R$ 850",
      progress: 105,
      status: "success",
      icon: Q,
      description: "Crescimento de 5%",
    },
    {
      title: "Churn Mensal",
      value: "3.2%",
      target: "2.5%",
      progress: 78,
      status: "warning",
      icon: F,
      description: "Acima do ideal do setor",
    },
  ],
  se = [
    {
      title: "Receita Recorrente (MRR)",
      value: "R$ 128K",
      change: "+12%",
      trend: "up",
      icon: S,
      description: "vs. mês anterior",
    },
    {
      title: "Novos Clientes",
      value: "47",
      change: "+23%",
      trend: "up",
      icon: D,
      description: "vs. mês anterior",
    },
    {
      title: "Taxa de Expansão",
      value: "18%",
      change: "+5pp",
      trend: "up",
      icon: V,
      description: "upsell/cross-sell",
    },
  ],
  ae = [
    {
      id: 1,
      title: "Queda na Conversão",
      severity: "high",
      domain: "commercial",
      timeToFix: "30 dias",
    },
    {
      id: 2,
      title: "Churn Acima do Normal",
      severity: "medium",
      domain: "operations",
      timeToFix: "45 dias",
    },
  ],
  te = [
    {
      id: 1,
      title: "Implementar novo funil de vendas",
      status: "in_progress",
      progress: 60,
    },
    { id: 2, title: "Reduzir CAC em 15%", status: "pending", progress: 0 },
    {
      id: 3,
      title: "Lançar programa de fidelidade",
      status: "completed",
      progress: 100,
    },
  ],
  he = () => {
    const { t: a, i18n: t } = H(),
      { data: y = [], isLoading: p } = Y(),
      { loading: C } = Z(),
      T = p || C,
      N = y.slice(0, 3),
      E = (s) => {
        switch (s) {
          case "completed":
            return "bg-green-100 text-green-800";
          case "shared":
            return "bg-blue-100 text-blue-800";
          default:
            return "bg-yellow-100 text-yellow-800";
        }
      },
      r = (s) => {
        switch (s) {
          case "completed":
            return a("dashboard.status.completed");
          case "shared":
            return a("dashboard.status.shared");
          default:
            return a("dashboard.status.draft");
        }
      },
      j = (s) => {
        switch (s) {
          case "high":
            return e.jsx(R, { className: "h-4 w-4 text-red-500" });
          case "medium":
            return e.jsx(F, { className: "h-4 w-4 text-amber-500" });
          default:
            return e.jsx(B, { className: "h-4 w-4 text-green-500" });
        }
      },
      o = (s) => {
        switch (s) {
          case "high":
            return e.jsx(h, {
              variant: "destructive",
              className: "text-xs",
              children: "Crítico",
            });
          case "medium":
            return e.jsx(h, {
              variant: "default",
              className: "text-xs bg-amber-500",
              children: "Médio",
            });
          default:
            return e.jsx(h, {
              variant: "outline",
              className: "text-xs",
              children: "Baixo",
            });
        }
      };
    return T
      ? e.jsxs("div", {
          className: "container-fluid space-y-8 py-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsx(f, { className: "h-10 w-64" }),
                e.jsx(f, { className: "h-11 w-40" }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-4",
              children: [1, 2, 3].map((s) =>
                e.jsx(f, { className: "h-32 rounded-xl" }, s),
              ),
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsx(f, { className: "h-6 w-48" }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [1, 2, 3].map((s) =>
                    e.jsx(f, { className: "h-40 rounded-xl" }, s),
                  ),
                }),
              ],
            }),
          ],
        })
      : e.jsxs("div", {
          className: "container-fluid space-y-8 py-6",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className: "text-3xl font-bold text-foreground",
                      children: a("dashboard.title", {
                        defaultValue: "Painel de Controle",
                      }),
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground",
                      children: a("dashboard.subtitle", {
                        defaultValue:
                          "Visão unificada da saúde, eficiência e crescimento do negócio",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(x, {
                      variant: "outline",
                      size: "sm",
                      asChild: !0,
                      children: e.jsxs(u, {
                        to: `/${t.language}/app/radar`,
                        children: [
                          e.jsx(V, { className: "w-4 h-4 mr-2" }),
                          "Ver Radar",
                        ],
                      }),
                    }),
                    e.jsx(x, {
                      size: "sm",
                      asChild: !0,
                      children: e.jsxs(u, {
                        to: `/${t.language}/app/reports/new`,
                        children: [
                          e.jsx(G, { className: "w-4 h-4 mr-2" }),
                          a("dashboard.new_report", {
                            defaultValue: "Novo Relatório",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(U, {
              defaultValue: "health",
              className: "space-y-6",
              children: [
                e.jsxs(q, {
                  className: "grid w-full grid-cols-3 lg:w-[500px]",
                  children: [
                    e.jsxs($, {
                      value: "health",
                      className: "gap-2",
                      children: [e.jsx(_, { className: "w-4 h-4" }), "Saúde"],
                    }),
                    e.jsxs($, {
                      value: "efficiency",
                      className: "gap-2",
                      children: [
                        e.jsx(I, { className: "w-4 h-4" }),
                        "Eficiência",
                      ],
                    }),
                    e.jsxs($, {
                      value: "growth",
                      className: "gap-2",
                      children: [
                        e.jsx(S, { className: "w-4 h-4" }),
                        "Crescimento",
                      ],
                    }),
                  ],
                }),
                e.jsxs(A, {
                  value: "health",
                  className: "space-y-6",
                  children: [
                    e.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                      children: X.map((s, m) =>
                        e.jsxs(
                          i,
                          {
                            className: c("border-l-4", L(s.status)),
                            children: [
                              e.jsx(l, {
                                className: "pb-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx(d, {
                                      className:
                                        "text-sm font-medium text-muted-foreground",
                                      children: s.title,
                                    }),
                                    e.jsx(s.icon, {
                                      className: c("h-4 w-4", z(s.status)),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(n, {
                                children: [
                                  e.jsx("div", {
                                    className: "text-2xl font-bold",
                                    children: s.value,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "text-xs text-muted-foreground mt-1",
                                    children: ["Meta: ", s.target],
                                  }),
                                  e.jsx("div", {
                                    className: "mt-3",
                                    children: e.jsx(b, {
                                      value: Math.min(s.progress, 100),
                                      className: c("h-2", J(s.status)),
                                    }),
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-2",
                                    children: s.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          m,
                        ),
                      ),
                    }),
                    e.jsxs(i, {
                      children: [
                        e.jsx(l, {
                          children: e.jsxs(d, {
                            className: "flex items-center gap-2 text-lg",
                            children: [
                              e.jsx(R, { className: "h-5 w-5 text-red-500" }),
                              "Alertas de Saúde Financeira",
                            ],
                          }),
                        }),
                        e.jsx(n, {
                          children: e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-3 p-3 bg-red-50 border border-red-100 rounded-lg",
                                children: [
                                  j("high"),
                                  e.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      e.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: "Burn Rate Elevado",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children:
                                          "Consumo de caixa 11% acima do planejado. Run rate reduzido para 8 meses.",
                                      }),
                                    ],
                                  }),
                                  e.jsx(h, {
                                    variant: "destructive",
                                    children: "Ação Imediata",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg",
                                children: [
                                  j("medium"),
                                  e.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      e.jsx("div", {
                                        className: "font-medium text-sm",
                                        children: "Run Rate em Queda",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children:
                                          "Projeção indica 6 meses de caixa em 90 dias se tendência continuar.",
                                      }),
                                    ],
                                  }),
                                  e.jsx(h, {
                                    variant: "default",
                                    className: "bg-amber-500",
                                    children: "Monitorar",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(A, {
                  value: "efficiency",
                  className: "space-y-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                      children: ee.map((s, m) =>
                        e.jsxs(
                          i,
                          {
                            className: c("border-t-4", L(s.status)),
                            children: [
                              e.jsx(l, {
                                className: "pb-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx(d, {
                                      className:
                                        "text-sm font-medium text-muted-foreground",
                                      children: s.title,
                                    }),
                                    e.jsx(s.icon, {
                                      className: c("h-4 w-4", z(s.status)),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(n, {
                                children: [
                                  e.jsx("div", {
                                    className: "text-2xl font-bold",
                                    children: s.value,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "text-xs text-muted-foreground mt-1",
                                    children: ["Meta: ", s.target],
                                  }),
                                  e.jsx("div", {
                                    className: "mt-3",
                                    children: e.jsx(b, {
                                      value: Math.min(s.progress, 100),
                                      className: "h-2",
                                    }),
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-2",
                                    children: s.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          m,
                        ),
                      ),
                    }),
                    e.jsxs(i, {
                      children: [
                        e.jsx(l, {
                          children: e.jsxs(d, {
                            className: "flex items-center gap-2 text-lg",
                            children: [
                              e.jsx(I, { className: "h-5 w-5" }),
                              "Oportunidades de Melhoria",
                            ],
                          }),
                        }),
                        e.jsx(n, {
                          children: e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-2 h-2 bg-red-500 rounded-full",
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("div", {
                                            className: "font-medium text-sm",
                                            children: "Reduzir CAC em 15%",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "text-xs text-muted-foreground",
                                            children:
                                              "Potencial economia: R$ 8.5K/mês",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(x, {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: e.jsx(u, {
                                      to: `/${t.language}/app/action-plan`,
                                      children: "Ver Plano",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-2 h-2 bg-amber-500 rounded-full",
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("div", {
                                            className: "font-medium text-sm",
                                            children: "Reduzir Churn para 2.5%",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "text-xs text-muted-foreground",
                                            children:
                                              "Impacto: +R$ 12K/mês na receita",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(x, {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: e.jsx(u, {
                                      to: `/${t.language}/app/analytics`,
                                      children: "Analisar",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(A, {
                  value: "growth",
                  className: "space-y-6",
                  children: [
                    e.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                      children: se.map((s, m) =>
                        e.jsxs(
                          i,
                          {
                            children: [
                              e.jsx(l, {
                                className: "pb-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx(d, {
                                      className:
                                        "text-sm font-medium text-muted-foreground",
                                      children: s.title,
                                    }),
                                    e.jsx(s.icon, {
                                      className: "h-4 w-4 text-green-500",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(n, {
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: s.value,
                                      }),
                                      e.jsx("div", {
                                        className: c(
                                          "text-sm font-medium",
                                          s.trend === "up"
                                            ? "text-green-600"
                                            : "text-red-600",
                                        ),
                                        children: s.change,
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-2",
                                    children: s.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          m,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                      children: [
                        e.jsxs(i, {
                          children: [
                            e.jsxs(l, {
                              children: [
                                e.jsx(d, {
                                  className: "text-lg",
                                  children: "Projeção de Receita",
                                }),
                                e.jsx(P, {
                                  children:
                                    "Próximos 3 meses baseado na tendência atual",
                                }),
                              ],
                            }),
                            e.jsx(n, {
                              children: e.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Mês Atual",
                                      }),
                                      e.jsx("span", {
                                        className: "font-semibold",
                                        children: "R$ 128K",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Próximo Mês",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-semibold text-green-600",
                                        children: "R$ 143K (+12%)",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: "Em 3 Meses",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-semibold text-green-600",
                                        children: "R$ 165K (+29%)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(i, {
                          children: [
                            e.jsxs(l, {
                              children: [
                                e.jsx(d, {
                                  className: "text-lg",
                                  children: "Meta de Crescimento Anual",
                                }),
                                e.jsx(P, {
                                  children:
                                    "Progresso em relação ao objetivo de 3x",
                                }),
                              ],
                            }),
                            e.jsxs(n, {
                              className: "space-y-4",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-sm",
                                  children: [
                                    e.jsx("span", { children: "Progresso" }),
                                    e.jsx("span", {
                                      className: "font-medium",
                                      children: "67% da meta",
                                    }),
                                  ],
                                }),
                                e.jsx(b, { value: 67, className: "h-3" }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Na velocidade atual, atingirá 3.2x até dezembro. Considere acelerar investimento em aquisição.",
                                }),
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
            e.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t",
              children: [
                e.jsxs(i, {
                  children: [
                    e.jsx(l, {
                      children: e.jsxs(d, {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                          e.jsx(R, { className: "h-5 w-5 text-red-500" }),
                          "Prioridades no Radar",
                        ],
                      }),
                    }),
                    e.jsxs(n, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children: ae.map((s) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center gap-3 p-3 bg-muted/50 rounded-lg",
                                children: [
                                  j(s.severity),
                                  e.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "font-medium text-sm truncate",
                                        children: s.title,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: [
                                          "Resolver em: ",
                                          s.timeToFix,
                                        ],
                                      }),
                                    ],
                                  }),
                                  o(s.severity),
                                ],
                              },
                              s.id,
                            ),
                          ),
                        }),
                        e.jsx(x, {
                          variant: "outline",
                          className: "w-full mt-4",
                          size: "sm",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: `/${t.language}/app/radar`,
                            children: [
                              "Ver Todas no Radar",
                              e.jsx(M, { className: "w-4 h-4 ml-2" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(i, {
                  children: [
                    e.jsx(l, {
                      children: e.jsxs(d, {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                          e.jsx(W, { className: "h-5 w-5" }),
                          "Ações em Andamento",
                        ],
                      }),
                    }),
                    e.jsxs(n, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children: te.map((s) =>
                            e.jsxs(
                              "div",
                              {
                                className: "space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between text-sm",
                                    children: [
                                      e.jsx("span", {
                                        className: c(
                                          s.status === "completed" &&
                                            "line-through text-muted-foreground",
                                        ),
                                        children: s.title,
                                      }),
                                      e.jsx(h, {
                                        variant:
                                          s.status === "completed"
                                            ? "default"
                                            : "outline",
                                        className: "text-xs",
                                        children:
                                          s.status === "in_progress"
                                            ? "Em Andamento"
                                            : s.status === "completed"
                                              ? "Concluído"
                                              : "Pendente",
                                      }),
                                    ],
                                  }),
                                  e.jsx(b, {
                                    value: s.progress,
                                    className: "h-1.5",
                                  }),
                                ],
                              },
                              s.id,
                            ),
                          ),
                        }),
                        e.jsx(x, {
                          variant: "outline",
                          className: "w-full mt-4",
                          size: "sm",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: `/${t.language}/app/action-plan`,
                            children: [
                              "Ver Plano Completo",
                              e.jsx(M, { className: "w-4 h-4 ml-2" }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(i, {
                  children: [
                    e.jsx(l, {
                      children: e.jsxs(d, {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                          e.jsx(K, { className: "h-5 w-5" }),
                          "Relatórios Recentes",
                        ],
                      }),
                    }),
                    e.jsxs(n, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children:
                            N.length > 0
                              ? N.map((s) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex-1 min-w-0",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "font-medium text-sm truncate",
                                              children: s.title,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-xs text-muted-foreground",
                                              children: new Date(
                                                s.createdAt || "",
                                              ).toLocaleDateString(t.language),
                                            }),
                                          ],
                                        }),
                                        e.jsx(h, {
                                          className: c("text-xs", E(s.status)),
                                          children: r(s.status),
                                        }),
                                      ],
                                    },
                                    s.id,
                                  ),
                                )
                              : e.jsxs("div", {
                                  className:
                                    "text-center py-6 text-muted-foreground",
                                  children: [
                                    e.jsx(K, {
                                      className:
                                        "w-8 h-8 mx-auto mb-2 opacity-50",
                                    }),
                                    e.jsx("p", {
                                      className: "text-sm",
                                      children: "Nenhum relatório recente",
                                    }),
                                  ],
                                }),
                        }),
                        e.jsx(x, {
                          variant: "outline",
                          className: "w-full mt-4",
                          size: "sm",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: `/${t.language}/app/reports`,
                            children: [
                              "Ver Todos",
                              e.jsx(M, { className: "w-4 h-4 ml-2" }),
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
export { he as default };
