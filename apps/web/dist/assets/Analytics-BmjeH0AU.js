import {
  j as e,
  C as x,
  g as u,
  p as i,
  $ as O,
  a0 as z,
  a1 as $,
  a2 as F,
  n as y,
  o as w,
  u as k,
  t as L,
  v as V,
  w as Q,
  x as q,
  y as N,
  B as p,
  r as U,
} from "./index-DRWQgA5q.js";
import { r as b, L as v } from "./router-XBfdTQ0K.js";
import { B as D } from "./badge-DD2chybY.js";
import { a as J } from "./DomainTag-CESWA3VE.js";
import "./riskService-Cr9Nt8xW.js";
import "./radarItemService-DLp7Z56m.js";
import {
  Y as K,
  aj as H,
  J as S,
  Z as A,
  b5 as M,
  a4 as R,
  a2 as C,
  b6 as _,
  K as G,
  T,
  au as Z,
  a6 as I,
  a5 as P,
  ac as E,
  aD as W,
  ak as Y,
  W as X,
  at as B,
  a as ee,
  a1 as se,
} from "./utils-Er8ll4su.js";
import "./types-JQgdQoTs.js";
function ae({
  title: s,
  cause: t,
  effect: a,
  why: l,
  action: r,
  confidence: n,
  detectedAt: m,
  className: d,
}) {
  return e.jsxs("div", {
    className: i("space-y-4", d),
    children: [
      e.jsx("div", {
        className: "flex items-start justify-between",
        children: e.jsxs("div", {
          children: [
            e.jsxs("h3", {
              className: "text-lg font-semibold flex items-center gap-2",
              children: [e.jsx(K, { className: "h-5 w-5 text-primary" }), s],
            }),
            m &&
              e.jsxs("p", {
                className: "text-sm text-muted-foreground mt-1",
                children: [
                  "Detectado ",
                  m,
                  n && ` • Confiança: ${Math.round(n * 100)}%`,
                ],
              }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "space-y-3",
        children: [
          e.jsx(x, {
            className: "border-l-4 border-l-blue-500",
            children: e.jsx(u, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0",
                    children: e.jsx(H, { className: "h-4 w-4 text-blue-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-sm font-medium text-muted-foreground mb-1",
                        children: "CAUSA",
                      }),
                      e.jsx("p", { className: "text-base", children: t }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsx("div", {
            className: "flex justify-center",
            children: e.jsx(S, {
              className: "h-5 w-5 text-muted-foreground rotate-90",
            }),
          }),
          e.jsx(x, {
            className: "border-l-4 border-l-red-500",
            children: e.jsx(u, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "h-8 w-8 rounded-full bg-red-100 flex items-center justify-center shrink-0",
                    children: e.jsx(A, { className: "h-4 w-4 text-red-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-sm font-medium text-muted-foreground mb-1",
                        children: "EFEITO",
                      }),
                      e.jsx("p", { className: "text-base", children: a }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsx(x, {
            className: "bg-muted/50 border-dashed",
            children: e.jsx(u, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0",
                    children: e.jsx(M, { className: "h-4 w-4 text-amber-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-sm font-medium text-muted-foreground mb-1",
                        children: "POR QUE ISSO ACONTECEU",
                      }),
                      e.jsxs("p", {
                        className: "text-base italic",
                        children: ['"', l, '"'],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsx("div", {
            className: "flex justify-center",
            children: e.jsx(S, {
              className: "h-5 w-5 text-muted-foreground rotate-90",
            }),
          }),
          r &&
            e.jsx(x, {
              className: "border-l-4 border-l-green-500 bg-green-50/50",
              children: e.jsx(u, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-start justify-between gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex-1",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-sm font-medium text-muted-foreground mb-1",
                          children: "AÇÃO RECOMENDADA",
                        }),
                        e.jsx("p", {
                          className: "text-lg font-semibold text-green-800",
                          children: r.title,
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-3 mt-2 text-sm",
                          children: [
                            e.jsxs("span", {
                              className: "text-muted-foreground",
                              children: ["Esforço: ", r.effort],
                            }),
                            e.jsxs("span", {
                              className: "text-green-600 font-medium",
                              children: ["Impacto: ", r.impact],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: r.onAction,
                      className:
                        "shrink-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium",
                      children: "Iniciar Ação",
                    }),
                  ],
                }),
              }),
            }),
        ],
      }),
    ],
  });
}
function te({
  score: s,
  evidences: t = [],
  missingData: a = [],
  showDetails: l = !0,
  size: r = "md",
  className: n,
}) {
  const d = ((c) =>
      c >= 0.8
        ? {
            label: "Alta",
            color: "text-green-600",
            bg: "bg-green-500",
            icon: G,
          }
        : c >= 0.5
          ? {
              label: "Média",
              color: "text-amber-600",
              bg: "bg-amber-500",
              icon: T,
            }
          : {
              label: "Baixa",
              color: "text-red-600",
              bg: "bg-red-500",
              icon: M,
            })(s),
    h = Math.round(s * 100);
  d.icon;
  const o = { sm: "text-xs", md: "text-sm", lg: "text-base" };
  return e.jsx(O, {
    children: e.jsxs(z, {
      children: [
        e.jsx($, {
          asChild: !0,
          children: e.jsx("div", {
            className: i("flex items-center gap-2 cursor-help", o[r], n),
            children: e.jsxs("div", {
              className: "flex items-center gap-1.5",
              children: [
                e.jsx("div", { className: i("h-2 w-2 rounded-full", d.bg) }),
                e.jsxs("span", {
                  className: i("font-medium", d.color),
                  children: [d.label, " Confiança (", h, "%)"],
                }),
              ],
            }),
          }),
        }),
        e.jsx(F, {
          side: "bottom",
          className: "max-w-sm",
          children: e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className: "font-medium mb-2",
                    children: "Baseado em:",
                  }),
                  t.length > 0
                    ? e.jsx("ul", {
                        className: "space-y-1.5",
                        children: t.map((c, g) =>
                          e.jsxs(
                            "li",
                            {
                              className: "flex items-start gap-2 text-sm",
                              children: [
                                c.type === "report" &&
                                  e.jsx(R, {
                                    className: "h-4 w-4 mt-0.5 text-blue-500",
                                  }),
                                c.type === "metric" &&
                                  e.jsx(C, {
                                    className: "h-4 w-4 mt-0.5 text-green-500",
                                  }),
                                c.type === "trend" &&
                                  e.jsx(C, {
                                    className: "h-4 w-4 mt-0.5 text-amber-500",
                                  }),
                                c.type === "correlation" &&
                                  e.jsx(_, {
                                    className: "h-4 w-4 mt-0.5 text-purple-500",
                                  }),
                                e.jsx("span", { children: c.description }),
                              ],
                            },
                            g,
                          ),
                        ),
                      })
                    : e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Análise baseada em padrões históricos",
                      }),
                ],
              }),
              a.length > 0 &&
                e.jsxs("div", {
                  className: "pt-2 border-t",
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-amber-600 font-medium mb-1",
                      children: "Dados ausentes:",
                    }),
                    e.jsx("ul", {
                      className: "text-sm text-muted-foreground",
                      children: a.map((c, g) =>
                        e.jsxs("li", { children: ["• ", c] }, g),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
const re = {
  act_now: {
    label: "AGIR IMEDIATAMENTE",
    description:
      "Alto impacto, urgente e alta confiança. Ação recomendada imediata.",
    icon: T,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  plan: {
    label: "PLANEJAR AÇÃO",
    description:
      "Impacto significativo, mas pode ser planejado para execução futura.",
    icon: I,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  monitor: {
    label: "MONITORAR",
    description:
      "Médio impacto ou confiança. Acompanhar evolução antes de agir.",
    icon: C,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  review: {
    label: "REVISAR",
    description:
      "Baixo impacto ou confiança. Verificar se vale a pena investir esforço.",
    icon: Z,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
};
function ie({
  score: s,
  breakdown: t,
  recommendation: a = "monitor",
  className: l,
}) {
  const r = re[a],
    n = r.icon;
  return e.jsxs(x, {
    className: i("overflow-hidden", l),
    children: [
      e.jsx(y, {
        className: i("pb-3", r.bgColor),
        children: e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsx(w, {
              className: "text-base font-semibold",
              children: "Pontuação de Decisão",
            }),
            e.jsxs("div", {
              className: "text-2xl font-bold text-foreground",
              children: [Math.round(s), "/100"],
            }),
          ],
        }),
      }),
      e.jsxs(u, {
        className: "pt-4 space-y-4",
        children: [
          e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsx(f, {
                label: "Impacto Financeiro",
                value: t.impact,
                color: "bg-emerald-500",
              }),
              e.jsx(f, {
                label: "Urgência Temporal",
                value: t.urgency,
                color: "bg-red-500",
              }),
              e.jsx(f, {
                label: "Confiança nos Dados",
                value: t.confidence,
                color: "bg-blue-500",
              }),
              e.jsx(f, {
                label: "Facilidade de Ação",
                value: t.effort,
                color: "bg-amber-500",
              }),
            ],
          }),
          e.jsx("div", {
            className: i("p-3 rounded-lg", r.bgColor),
            children: e.jsxs("div", {
              className: "flex items-start gap-3",
              children: [
                e.jsx(n, { className: i("h-5 w-5 mt-0.5", r.color) }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: i("font-semibold", r.color),
                      children: r.label,
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children: r.description,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function f({ label: s, value: t, color: a }) {
  return e.jsxs("div", {
    className: "space-y-1",
    children: [
      e.jsxs("div", {
        className: "flex justify-between text-sm",
        children: [
          e.jsx("span", { className: "text-muted-foreground", children: s }),
          e.jsxs("span", { className: "font-medium", children: [t, "/100"] }),
        ],
      }),
      e.jsx("div", {
        className: "h-2 bg-secondary rounded-full overflow-hidden",
        children: e.jsx("div", {
          className: i("h-full transition-all duration-500", a),
          style: { width: `${t}%` },
        }),
      }),
    ],
  });
}
function le({
  value: s,
  unit: t = "",
  benchmarks: a,
  labels: l = {},
  className: r,
}) {
  const n = Math.max(a.excellent || 0, s * 1.2),
    m = (c) => Math.min((c / n) * 100, 100),
    h =
      a.critical && s < a.critical
        ? "critical"
        : a.warning && s < a.warning
          ? "warning"
          : a.excellent && s >= a.excellent
            ? "excellent"
            : a.good && s >= a.good
              ? "good"
              : "neutral",
    o = {
      critical: "text-red-600 bg-red-50",
      warning: "text-amber-600 bg-amber-50",
      neutral: "text-blue-600 bg-blue-50",
      good: "text-green-600 bg-green-50",
      excellent: "text-emerald-600 bg-emerald-50",
    };
  return e.jsxs("div", {
    className: i("space-y-3", r),
    children: [
      e.jsxs("div", {
        className: "flex items-baseline gap-2",
        children: [
          e.jsxs("span", { className: "text-2xl font-bold", children: [s, t] }),
          e.jsxs("span", {
            className: i("text-sm px-2 py-0.5 rounded", o[h]),
            children: [
              h === "critical" && (l.critical || "Crítico"),
              h === "warning" && (l.warning || "Atenção"),
              h === "good" && (l.good || "Bom"),
              h === "excellent" && (l.excellent || "Excelente"),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx("div", { className: "h-3 bg-gray-200 rounded-full" }),
          a.critical &&
            e.jsx("div", {
              className: "absolute top-0 h-3 bg-red-200 rounded-l-full",
              style: { width: `${m(a.critical)}%` },
            }),
          a.good &&
            e.jsx("div", {
              className: "absolute top-0 h-3 bg-green-200 rounded-r-full",
              style: { left: `${m(a.good)}%`, width: `${100 - m(a.good)}%` },
            }),
          e.jsx("div", {
            className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
            style: { left: `${m(s)}%` },
            children: e.jsx("div", {
              className:
                "h-5 w-5 bg-primary rounded-full border-2 border-white shadow-md flex items-center justify-center",
              children: e.jsx("span", {
                className: "text-[10px] text-white font-bold",
                children: "★",
              }),
            }),
          }),
          e.jsxs("div", {
            className:
              "flex justify-between mt-1 text-xs text-muted-foreground",
            children: [
              e.jsx("span", { children: "0" }),
              a.critical && e.jsx("span", { children: a.critical }),
              a.warning && e.jsx("span", { children: a.warning }),
              a.good && e.jsx("span", { children: a.good }),
              e.jsx("span", { children: Math.round(n) }),
            ],
          }),
        ],
      }),
    ],
  });
}
const j = [
    {
      id: "d1",
      title: "Queda na Taxa de Conversão Comercial",
      technicalTerm: "Sales Conversion Rate Decline",
      domain: "commercial",
      severity: "high",
      status: "active",
      summary:
        "A taxa de conversão caiu 15% no último trimestre, indicando problema no funil de vendas.",
      cause: {
        primary: "Aumento de 40% no preço sem ajuste na comunicação de valor",
        contributing: [
          "Material de vendas desatualizado",
          "Processo de proposta muito longo",
          "Concorrentes com ofertas mais agressivas",
        ],
      },
      effect: {
        immediate: "Redução de 23% na receita projetada",
        longTerm: "Risco de perder market share para concorrentes",
        financial: "R$ 45K/mês em receita não realizada",
      },
      dataEvidence: [
        {
          metric: "Taxa de Conversão",
          value: "12.3%",
          change: "-15%",
          trend: "down",
        },
        { metric: "CAC", value: "R$ 450", change: "+12%", trend: "up" },
        {
          metric: "Pipeline",
          value: "850 leads",
          change: "-8%",
          trend: "down",
        },
      ],
      benchmarks: {
        industry: "18.5%",
        topPerformers: "25.3%",
        company: "12.3%",
        gap: "-6.2pp vs mercado",
      },
      historicalContext: [
        { period: "Jan-Fev", value: "14.7%", status: "stable" },
        { period: "Mar-Abr", value: "14.2%", status: "declining" },
        { period: "Mai-Jun", value: "12.3%", status: "critical" },
      ],
      confidence: 85,
      aiAnalysis:
        "O padrão de queda coincide com o aumento de preço implementado em março. Análise de correlação mostra relação forte (r=-0.78) entre preço e conversão. Recomenda-se revisão da estratégia de precificação e comunicação de valor.",
    },
    {
      id: "d2",
      title: "Ineficiência no Processo de Suporte",
      technicalTerm: "Support Ticket Resolution Inefficiency",
      domain: "operations",
      severity: "medium",
      status: "identified",
      summary:
        "40% dos tickets são demandas repetitivas que poderiam ser automatizadas.",
      cause: {
        primary:
          "Falta de base de conhecimento e ferramentas de autoatendimento",
        contributing: [
          "Crescimento rápido da base sem expansão proporcional do time",
          "Processos manuais para tarefas simples",
          "Ausência de chatbot para FAQs",
        ],
      },
      effect: {
        immediate: "25h/semana desperdiçadas em tarefas repetitivas",
        longTerm: "Satisfação do cliente impactada por tempo de resposta",
        financial: "R$ 8K/mês em custo de oportunidade",
      },
      dataEvidence: [
        {
          metric: "Tickets Repetitivos",
          value: "40%",
          change: "+5%",
          trend: "up",
        },
        {
          metric: "Tempo Médio Resolução",
          value: "4.2h",
          change: "+15%",
          trend: "up",
        },
        {
          metric: "CSAT Suporte",
          value: "3.8/5",
          change: "-0.3",
          trend: "down",
        },
      ],
      benchmarks: {
        industry: "25%",
        topPerformers: "15%",
        company: "40%",
        gap: "+15pp vs melhores",
      },
      historicalContext: [
        { period: "Q1", value: "32%", status: "warning" },
        { period: "Q2", value: "36%", status: "declining" },
        { period: "Q3", value: "40%", status: "critical" },
      ],
      confidence: 78,
      aiAnalysis:
        "Análise de categorização de tickets mostra padrão claro de demandas repetitivas. Implementação de chatbot e base de conhecimento pode reduzir tickets em 60% e melhorar CSAT em 0.5 pontos.",
    },
  ],
  ce = ({ diagnosis: s, onSelect: t, isSelected: a }) =>
    e.jsx(x, {
      className: i(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        a ? "ring-2 ring-primary border-primary" : "hover:border-primary/50",
      ),
      onClick: () => t(s.id),
      children: e.jsx(u, {
        className: "p-4",
        children: e.jsxs("div", {
          className: "flex items-start gap-3",
          children: [
            e.jsx("div", {
              className: i(
                "p-2 rounded-lg flex-shrink-0",
                s.severity === "high"
                  ? "bg-red-100"
                  : s.severity === "medium"
                    ? "bg-amber-100"
                    : "bg-blue-100",
              ),
              children:
                s.severity === "high"
                  ? e.jsx(T, { className: "h-5 w-5 text-red-600" })
                  : s.severity === "medium"
                    ? e.jsx(A, { className: "h-5 w-5 text-amber-600" })
                    : e.jsx(I, { className: "h-5 w-5 text-blue-600" }),
            }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx(D, {
                      variant: "outline",
                      className: i(
                        "text-[10px]",
                        s.domain === "finance"
                          ? "border-emerald-200 text-emerald-700"
                          : s.domain === "commercial"
                            ? "border-blue-200 text-blue-700"
                            : s.domain === "operations"
                              ? "border-amber-200 text-amber-700"
                              : "border-purple-200 text-purple-700",
                      ),
                      children:
                        s.domain === "finance"
                          ? "Financeiro"
                          : s.domain === "commercial"
                            ? "Comercial"
                            : s.domain === "operations"
                              ? "Operacional"
                              : "Estratégia",
                    }),
                    e.jsxs("span", {
                      className: "text-[10px] text-muted-foreground",
                      children: ["Confiança: ", s.confidence, "%"],
                    }),
                  ],
                }),
                e.jsx("h3", {
                  className: "font-semibold text-sm mb-1 line-clamp-2",
                  children: s.title,
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground line-clamp-2",
                  children: s.summary,
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 mt-2 text-xs",
                  children: [
                    e.jsx("span", {
                      className: i(
                        "font-medium",
                        s.severity === "high"
                          ? "text-red-600"
                          : s.severity === "medium"
                            ? "text-amber-600"
                            : "text-blue-600",
                      ),
                      children:
                        s.severity === "high"
                          ? "Alto Impacto"
                          : s.severity === "medium"
                            ? "Médio Impacto"
                            : "Baixo Impacto",
                    }),
                    e.jsx(ee, {
                      className: "h-3 w-3 text-muted-foreground ml-auto",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  ne = ({ diagnosis: s }) =>
    e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          className: "flex items-start justify-between gap-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    e.jsx(D, {
                      className: i(
                        s.severity === "high"
                          ? "bg-red-500"
                          : s.severity === "medium"
                            ? "bg-amber-500"
                            : "bg-blue-500",
                      ),
                      children:
                        s.severity === "high"
                          ? "Crítico"
                          : s.severity === "medium"
                            ? "Atenção"
                            : "Monitorar",
                    }),
                    e.jsxs("span", {
                      className: "text-sm text-muted-foreground",
                      children: [
                        "Análise da IA com ",
                        s.confidence,
                        "% de confiança",
                      ],
                    }),
                  ],
                }),
                e.jsx("h2", {
                  className: "text-2xl font-bold",
                  children: s.title,
                }),
                e.jsx("p", {
                  className: "text-muted-foreground mt-1",
                  children: s.summary,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex gap-2",
              children: [
                e.jsxs(p, {
                  variant: "outline",
                  size: "sm",
                  children: [
                    e.jsx(se, { className: "w-4 h-4 mr-2" }),
                    "Exportar",
                  ],
                }),
                e.jsx(p, {
                  size: "sm",
                  asChild: !0,
                  children: e.jsx(v, {
                    to: "/app/action-plan",
                    children: "Criar Plano de Ação",
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx(x, {
          className: "bg-muted/50 border-muted",
          children: e.jsxs(u, {
            className: "p-4",
            children: [
              e.jsx("div", {
                className:
                  "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2",
                children: "Termo Técnico (DM Mono)",
              }),
              e.jsx("div", {
                className: "font-mono text-lg text-foreground",
                children: s.technicalTerm,
              }),
            ],
          }),
        }),
        e.jsx(ae, {
          title: s.title,
          cause: s.cause.primary,
          effect: s.effect.immediate,
          why: `Fatores: ${s.cause.contributing.join(", ")}`,
          action: {
            title: "Criar Plano de Ação",
            effort: "Médio",
            impact: s.effect.financial,
            onAction: () => (window.location.href = "/app/action-plan"),
          },
          confidence: s.confidence / 100,
          detectedAt: "há 3 dias",
        }),
        e.jsxs(x, {
          children: [
            e.jsxs(y, {
              children: [
                e.jsxs(w, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(P, { className: "w-5 h-5" }),
                    "Evidências de Dados",
                  ],
                }),
                e.jsx(U, {
                  children: "Métricas que sustentam este diagnóstico",
                }),
              ],
            }),
            e.jsxs(u, {
              children: [
                e.jsx("div", {
                  className: "grid grid-cols-3 gap-4",
                  children: s.dataEvidence.map((t, a) =>
                    e.jsxs(
                      "div",
                      {
                        className: "text-center p-4 bg-muted/50 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className: "text-xs text-muted-foreground mb-1",
                            children: t.metric,
                          }),
                          e.jsx("div", {
                            className: "text-xl font-bold",
                            children: t.value,
                          }),
                          e.jsx("div", {
                            className: i(
                              "text-xs font-medium mt-1",
                              t.trend === "up"
                                ? "text-red-600"
                                : "text-green-600",
                            ),
                            children: t.change,
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
                e.jsx("div", {
                  className: "mt-6",
                  children: e.jsx(le, {
                    value: 12.3,
                    unit: "%",
                    benchmarks: {
                      critical: 10,
                      warning: 15,
                      good: 18,
                      excellent: 25,
                    },
                    labels: {
                      critical: "Crítico",
                      warning: "Atenção",
                      good: "Bom",
                      excellent: "Excelente",
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            e.jsx(te, {
              score: s.confidence / 100,
              evidences: [
                {
                  type: "metric",
                  description: `${s.dataEvidence.length} métricas analisadas`,
                },
                {
                  type: "trend",
                  description: "Tendência confirmada em 90 dias",
                },
                {
                  type: "correlation",
                  description: "Correlação forte (r=-0.78)",
                },
              ],
            }),
            e.jsx(ie, {
              score: 85,
              breakdown: {
                impact: 95,
                urgency: 80,
                confidence: s.confidence,
                effort: 70,
              },
              recommendation: "act_now",
            }),
          ],
        }),
        e.jsxs(x, {
          className:
            "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
          children: [
            e.jsx(y, {
              children: e.jsxs(w, {
                className: "flex items-center gap-2 text-lg",
                children: [
                  e.jsx(B, { className: "w-5 h-5 text-blue-600" }),
                  "Análise da IA",
                ],
              }),
            }),
            e.jsxs(u, {
              children: [
                e.jsx("p", {
                  className: "text-sm leading-relaxed text-blue-900",
                  children: s.aiAnalysis,
                }),
                e.jsxs("div", {
                  className: "flex gap-2 mt-4",
                  children: [
                    e.jsx(p, {
                      className: "flex-1",
                      asChild: !0,
                      children: e.jsxs(v, {
                        to: "/app/action-plan",
                        children: [
                          e.jsx(A, { className: "w-4 h-4 mr-2" }),
                          "Criar Plano de Ação",
                        ],
                      }),
                    }),
                    e.jsx(p, {
                      variant: "outline",
                      asChild: !0,
                      children: e.jsx(v, {
                        to: "/app/radar",
                        children: "Ver no Radar",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  fe = () => {
    const { t: s } = k(),
      [t, a] = b.useState(["finance", "commercial", "operations", "strategy"]),
      [l, r] = b.useState(j[0].id),
      [n, m] = b.useState("quarter"),
      d = j.filter((o) => t.includes(o.domain)),
      h = j.find((o) => o.id === l) || j[0];
    return e.jsxs("div", {
      className:
        "p-4 sm:p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500",
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-6",
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
                      children: e.jsx(P, { className: "h-8 w-8 text-primary" }),
                    }),
                    "Análises",
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground font-medium",
                  children:
                    "Diagnósticos técnicos detalhados e benchmarks comparativos",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsxs(L, {
                  value: n,
                  onValueChange: m,
                  children: [
                    e.jsxs(V, {
                      className: "w-40",
                      children: [
                        e.jsx(E, { className: "w-4 h-4 mr-2" }),
                        e.jsx(Q, {}),
                      ],
                    }),
                    e.jsxs(q, {
                      children: [
                        e.jsx(N, { value: "month", children: "Este Mês" }),
                        e.jsx(N, {
                          value: "quarter",
                          children: "Este Trimestre",
                        }),
                        e.jsx(N, { value: "year", children: "Este Ano" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(p, {
                  variant: "outline",
                  size: "sm",
                  children: [
                    e.jsx(W, { className: "w-4 h-4 mr-2" }),
                    "Atualizar",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(J, { selected: t, onChange: a }),
        e.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
          children: [
            e.jsxs("div", {
              className: "lg:col-span-1 space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("h2", {
                      className: "font-semibold",
                      children: ["Diagnósticos (", d.length, ")"],
                    }),
                    e.jsxs(p, {
                      variant: "ghost",
                      size: "sm",
                      children: [
                        e.jsx(Y, { className: "w-4 h-4 mr-2" }),
                        "Filtrar",
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: d.map((o) =>
                    e.jsx(
                      ce,
                      { diagnosis: o, onSelect: r, isSelected: l === o.id },
                      o.id,
                    ),
                  ),
                }),
                d.length === 0 &&
                  e.jsx(x, {
                    className: "border-dashed",
                    children: e.jsxs(u, {
                      className: "p-8 text-center",
                      children: [
                        e.jsx(X, {
                          className:
                            "h-8 w-8 text-muted-foreground mx-auto mb-3",
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground",
                          children:
                            "Nenhum diagnóstico para os domínios selecionados",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            e.jsx("div", {
              className: "lg:col-span-2",
              children: e.jsx(ne, { diagnosis: h }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "pt-6 border-t",
          children: e.jsxs("div", {
            className:
              "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(B, { className: "h-4 w-4" }),
                  e.jsxs("span", {
                    children: [
                      "Análises baseadas em ",
                      e.jsx("strong", { children: j.length }),
                      " indicadores cruzados",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(E, { className: "h-4 w-4" }),
                      "Última análise: Hoje às 08:30",
                    ],
                  }),
                  e.jsxs(p, {
                    variant: "ghost",
                    size: "sm",
                    className: "gap-1",
                    children: [
                      e.jsx(R, { className: "h-4 w-4" }),
                      "Ver Relatório Completo",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { fe as default };
