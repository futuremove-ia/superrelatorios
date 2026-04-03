import {
  b as B,
  s as F,
  u as k,
  j as e,
  B as m,
  c as o,
} from "./index-DJVek99o.js";
import { u as H } from "./useReports-BoeIAQ5b.js";
import { r as v } from "./vendor-Bp-AcFIh.js";
import { C as r, b as i, c as l, a as d, d as P } from "./card-Ekw6AZkO.js";
import { B as x } from "./badge-BRPjZ132.js";
import { S as j } from "./skeleton-CLezCALq.js";
import { T as O, a as q, b as A, c as $ } from "./tabs-CCpnioNr.js";
import { P as b } from "./progress-CD8SWWEy.js";
import { L as u } from "./router-Db_Yswnp.js";
import {
  A as L,
  n as U,
  H as z,
  o as I,
  d as S,
  T as w,
  p as M,
  k as G,
  e as K,
  a as D,
  b as V,
  Z as Q,
  q as _,
} from "./utils-BrIGbSZG.js";
import "./useQuery-lOGkLDRM.js";
import "./useMutation-1mVySGEi.js";
import "./supabaseReportsService-CRYy_N2b.js";
import "./useCurrentOrganization-QE33f3lM.js";
import "./index-DgDxa8-3.js";
import "./index-DCuwROnA.js";
const Y = () => {
    const [c, a] = v.useState(null),
      [R, g] = v.useState(!0),
      [E, y] = v.useState(null),
      { isDemoMode: p } = B();
    return (
      v.useEffect(() => {
        (async () => {
          try {
            if ((g(!0), p)) {
              (a({
                totalReports: 24,
                activeUsers: 12,
                recentActivity: 78,
                completionRate: 85,
                estimatedImpact: "R$45K",
              }),
                g(!1));
              return;
            }
            const { data: t, error: N } = await F.from("reports").select(
              "id, status, created_at",
            );
            if (N) throw N;
            const n = t ? t.length : 0,
              T = t ? t.filter((f) => f.status === "completed").length : 0,
              s = n > 0 ? (T / n) * 100 : 0,
              h = t
                ? t.filter((f) =>
                    f.created_at
                      ? new Date(f.created_at).getTime() >
                        Date.now() - 7 * 24 * 60 * 60 * 1e3
                      : !1,
                  ).length
                : 0;
            a({
              totalReports: n,
              activeUsers: 3,
              recentActivity: Math.round(s),
              completionRate: n,
              estimatedImpact: "R$" + (n * 1.5 || 0).toFixed(1) + "K",
            });
          } catch (t) {
            (console.error("Dashboard summary error:", t),
              y("Failed to fetch dashboard summary"));
          } finally {
            g(!1);
          }
        })();
      }, [p]),
      { data: c, loading: R, error: E }
    );
  },
  Z = [
    {
      title: "Run Rate (Caixa)",
      value: "R$ 245K",
      target: "R$ 300K",
      progress: 82,
      status: "warning",
      icon: z,
      description: "Caixa para 8 meses de operação",
    },
    {
      title: "Burn Rate Mensal",
      value: "R$ 31K",
      target: "R$ 28K",
      progress: 110,
      status: "critical",
      icon: w,
      description: "11% acima do planejado",
    },
    {
      title: "Dívida/Receita",
      value: "32%",
      target: "25%",
      progress: 78,
      status: "stable",
      icon: D,
      description: "Dentro do limite saudável",
    },
  ],
  W = [
    {
      title: "CAC (Custo Aquisição)",
      value: "R$ 450",
      target: "R$ 400",
      progress: 113,
      status: "warning",
      icon: V,
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
      icon: _,
      description: "Acima do ideal do setor",
    },
  ],
  J = [
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
      icon: V,
      description: "vs. mês anterior",
    },
    {
      title: "Taxa de Expansão",
      value: "18%",
      change: "+5pp",
      trend: "up",
      icon: L,
      description: "upsell/cross-sell",
    },
  ],
  X = [
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
  ee = [
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
  Ne = () => {
    const { t: c, i18n: a } = k(),
      { data: R = [], isLoading: g } = H(),
      { data: E, loading: y } = Y(),
      p = g || y,
      C = R.slice(0, 3),
      t = (s) => {
        switch (s) {
          case "completed":
            return "bg-green-100 text-green-800";
          case "shared":
            return "bg-blue-100 text-blue-800";
          default:
            return "bg-yellow-100 text-yellow-800";
        }
      },
      N = (s) => {
        switch (s) {
          case "completed":
            return c("dashboard.status.completed");
          case "shared":
            return c("dashboard.status.shared");
          default:
            return c("dashboard.status.draft");
        }
      },
      n = (s) => {
        switch (s) {
          case "high":
            return e.jsx(w, { className: "h-4 w-4 text-red-500" });
          case "medium":
            return e.jsx(_, { className: "h-4 w-4 text-amber-500" });
          default:
            return e.jsx(D, { className: "h-4 w-4 text-green-500" });
        }
      },
      T = (s) => {
        switch (s) {
          case "high":
            return e.jsx(x, {
              variant: "destructive",
              className: "text-xs",
              children: "Crítico",
            });
          case "medium":
            return e.jsx(x, {
              variant: "default",
              className: "text-xs bg-amber-500",
              children: "Médio",
            });
          default:
            return e.jsx(x, {
              variant: "outline",
              className: "text-xs",
              children: "Baixo",
            });
        }
      };
    return p
      ? e.jsxs("div", {
          className: "container-fluid space-y-8 py-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsx(j, { className: "h-10 w-64" }),
                e.jsx(j, { className: "h-11 w-40" }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-4",
              children: [1, 2, 3].map((s) =>
                e.jsx(j, { className: "h-32 rounded-xl" }, s),
              ),
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsx(j, { className: "h-6 w-48" }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                  children: [1, 2, 3].map((s) =>
                    e.jsx(j, { className: "h-40 rounded-xl" }, s),
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
                      children: c("dashboard.title", {
                        defaultValue: "Painel de Controle",
                      }),
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground",
                      children: c("dashboard.subtitle", {
                        defaultValue:
                          "Visão unificada da saúde, eficiência e crescimento do negócio",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(m, {
                      variant: "outline",
                      size: "sm",
                      asChild: !0,
                      children: e.jsxs(u, {
                        to: `/${a.language}/app/radar`,
                        children: [
                          e.jsx(L, { className: "w-4 h-4 mr-2" }),
                          "Ver Radar",
                        ],
                      }),
                    }),
                    e.jsx(m, {
                      size: "sm",
                      asChild: !0,
                      children: e.jsxs(u, {
                        to: `/${a.language}/app/reports/new`,
                        children: [
                          e.jsx(U, { className: "w-4 h-4 mr-2" }),
                          c("dashboard.new_report", {
                            defaultValue: "Novo Relatório",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(O, {
              defaultValue: "health",
              className: "space-y-6",
              children: [
                e.jsxs(q, {
                  className: "grid w-full grid-cols-3 lg:w-[500px]",
                  children: [
                    e.jsxs(A, {
                      value: "health",
                      className: "gap-2",
                      children: [e.jsx(z, { className: "w-4 h-4" }), "Saúde"],
                    }),
                    e.jsxs(A, {
                      value: "efficiency",
                      className: "gap-2",
                      children: [
                        e.jsx(I, { className: "w-4 h-4" }),
                        "Eficiência",
                      ],
                    }),
                    e.jsxs(A, {
                      value: "growth",
                      className: "gap-2",
                      children: [
                        e.jsx(S, { className: "w-4 h-4" }),
                        "Crescimento",
                      ],
                    }),
                  ],
                }),
                e.jsxs($, {
                  value: "health",
                  className: "space-y-6",
                  children: [
                    e.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                      children: Z.map((s, h) =>
                        e.jsxs(
                          r,
                          {
                            className: o(
                              "border-l-4",
                              s.status === "critical"
                                ? "border-l-red-500"
                                : s.status === "warning"
                                  ? "border-l-amber-500"
                                  : s.status === "success"
                                    ? "border-l-green-500"
                                    : "border-l-blue-500",
                            ),
                            children: [
                              e.jsx(i, {
                                className: "pb-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx(l, {
                                      className:
                                        "text-sm font-medium text-muted-foreground",
                                      children: s.title,
                                    }),
                                    e.jsx(s.icon, {
                                      className: o(
                                        "h-4 w-4",
                                        s.status === "critical"
                                          ? "text-red-500"
                                          : s.status === "warning"
                                            ? "text-amber-500"
                                            : s.status === "success"
                                              ? "text-green-500"
                                              : "text-blue-500",
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(d, {
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
                                      className: o(
                                        "h-2",
                                        s.status === "critical"
                                          ? "bg-red-100"
                                          : s.status === "warning"
                                            ? "bg-amber-100"
                                            : "bg-slate-100",
                                      ),
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
                          h,
                        ),
                      ),
                    }),
                    e.jsxs(r, {
                      children: [
                        e.jsx(i, {
                          children: e.jsxs(l, {
                            className: "flex items-center gap-2 text-lg",
                            children: [
                              e.jsx(w, { className: "h-5 w-5 text-red-500" }),
                              "Alertas de Saúde Financeira",
                            ],
                          }),
                        }),
                        e.jsx(d, {
                          children: e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-3 p-3 bg-red-50 border border-red-100 rounded-lg",
                                children: [
                                  n("high"),
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
                                  e.jsx(x, {
                                    variant: "destructive",
                                    children: "Ação Imediata",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg",
                                children: [
                                  n("medium"),
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
                                  e.jsx(x, {
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
                e.jsxs($, {
                  value: "efficiency",
                  className: "space-y-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                      children: W.map((s, h) =>
                        e.jsxs(
                          r,
                          {
                            className: o(
                              "border-t-4",
                              s.status === "success"
                                ? "border-t-green-500"
                                : s.status === "warning"
                                  ? "border-t-amber-500"
                                  : "border-t-red-500",
                            ),
                            children: [
                              e.jsx(i, {
                                className: "pb-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx(l, {
                                      className:
                                        "text-sm font-medium text-muted-foreground",
                                      children: s.title,
                                    }),
                                    e.jsx(s.icon, {
                                      className: o(
                                        "h-4 w-4",
                                        s.status === "success"
                                          ? "text-green-500"
                                          : s.status === "warning"
                                            ? "text-amber-500"
                                            : "text-red-500",
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(d, {
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
                          h,
                        ),
                      ),
                    }),
                    e.jsxs(r, {
                      children: [
                        e.jsx(i, {
                          children: e.jsxs(l, {
                            className: "flex items-center gap-2 text-lg",
                            children: [
                              e.jsx(I, { className: "h-5 w-5" }),
                              "Oportunidades de Melhoria",
                            ],
                          }),
                        }),
                        e.jsx(d, {
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
                                  e.jsx(m, {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: e.jsx(u, {
                                      to: `/${a.language}/app/action-plan`,
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
                                  e.jsx(m, {
                                    variant: "outline",
                                    size: "sm",
                                    asChild: !0,
                                    children: e.jsx(u, {
                                      to: `/${a.language}/app/analytics`,
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
                e.jsxs($, {
                  value: "growth",
                  className: "space-y-6",
                  children: [
                    e.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                      children: J.map((s, h) =>
                        e.jsxs(
                          r,
                          {
                            children: [
                              e.jsx(i, {
                                className: "pb-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx(l, {
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
                              e.jsxs(d, {
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className: "text-2xl font-bold",
                                        children: s.value,
                                      }),
                                      e.jsx("div", {
                                        className: o(
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
                          h,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                      children: [
                        e.jsxs(r, {
                          children: [
                            e.jsxs(i, {
                              children: [
                                e.jsx(l, {
                                  className: "text-lg",
                                  children: "Projeção de Receita",
                                }),
                                e.jsx(P, {
                                  children:
                                    "Próximos 3 meses baseado na tendência atual",
                                }),
                              ],
                            }),
                            e.jsx(d, {
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
                        e.jsxs(r, {
                          children: [
                            e.jsxs(i, {
                              children: [
                                e.jsx(l, {
                                  className: "text-lg",
                                  children: "Meta de Crescimento Anual",
                                }),
                                e.jsx(P, {
                                  children:
                                    "Progresso em relação ao objetivo de 3x",
                                }),
                              ],
                            }),
                            e.jsxs(d, {
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
                e.jsxs(r, {
                  children: [
                    e.jsx(i, {
                      children: e.jsxs(l, {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                          e.jsx(w, { className: "h-5 w-5 text-red-500" }),
                          "Prioridades no Radar",
                        ],
                      }),
                    }),
                    e.jsxs(d, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children: X.map((s) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center gap-3 p-3 bg-muted/50 rounded-lg",
                                children: [
                                  n(s.severity),
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
                                  T(s.severity),
                                ],
                              },
                              s.id,
                            ),
                          ),
                        }),
                        e.jsx(m, {
                          variant: "outline",
                          className: "w-full mt-4",
                          size: "sm",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: `/${a.language}/app/radar`,
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
                e.jsxs(r, {
                  children: [
                    e.jsx(i, {
                      children: e.jsxs(l, {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                          e.jsx(G, { className: "h-5 w-5" }),
                          "Ações em Andamento",
                        ],
                      }),
                    }),
                    e.jsxs(d, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children: ee.map((s) =>
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
                                        className: o(
                                          s.status === "completed" &&
                                            "line-through text-muted-foreground",
                                        ),
                                        children: s.title,
                                      }),
                                      e.jsx(x, {
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
                        e.jsx(m, {
                          variant: "outline",
                          className: "w-full mt-4",
                          size: "sm",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: `/${a.language}/app/action-plan`,
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
                e.jsxs(r, {
                  children: [
                    e.jsx(i, {
                      children: e.jsxs(l, {
                        className: "flex items-center gap-2 text-lg",
                        children: [
                          e.jsx(K, { className: "h-5 w-5" }),
                          "Relatórios Recentes",
                        ],
                      }),
                    }),
                    e.jsxs(d, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-3",
                          children:
                            C.length > 0
                              ? C.map((s) =>
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
                                              ).toLocaleDateString(a.language),
                                            }),
                                          ],
                                        }),
                                        e.jsx(x, {
                                          className: o("text-xs", t(s.status)),
                                          children: N(s.status),
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
                        e.jsx(m, {
                          variant: "outline",
                          className: "w-full mt-4",
                          size: "sm",
                          asChild: !0,
                          children: e.jsxs(u, {
                            to: `/${a.language}/app/reports`,
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
export { Ne as default };
