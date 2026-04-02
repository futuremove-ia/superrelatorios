import { u as S, j as e, B as c, c as d } from "./index-CzFfXFeY.js";
import { r as p } from "./vendor-Bp-AcFIh.js";
import { C as r, a as i, b as n, c as m, d as x } from "./card-DEQcRzjn.js";
import { B as b } from "./badge-DQqwMB41.js";
import { S as T, a as k, b as D, c as R, d as u } from "./select-CuHe0xdE.js";
import { D as P } from "./DomainTag-B-zk6gIL.js";
import { L as j } from "./router-Db_Yswnp.js";
import {
  f,
  k as g,
  a1 as z,
  r as E,
  a as I,
  J as v,
  e as M,
  T as F,
  Z as N,
  L as B,
  aw as q,
  D as L,
  b as Q,
  d as O,
  s as V,
} from "./utils-BYPr0Dmq.js";
import "./index-Bxi3BZuB.js";
import "./index-CKeeGB76.js";
import "./index-Dsfa9Guj.js";
const o = [
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
  H = ({ diagnosis: s, onSelect: a, isSelected: t }) =>
    e.jsx(r, {
      className: d(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        t ? "ring-2 ring-primary border-primary" : "hover:border-primary/50",
      ),
      onClick: () => a(s.id),
      children: e.jsx(i, {
        className: "p-4",
        children: e.jsxs("div", {
          className: "flex items-start gap-3",
          children: [
            e.jsx("div", {
              className: d(
                "p-2 rounded-lg flex-shrink-0",
                s.severity === "high"
                  ? "bg-red-100"
                  : s.severity === "medium"
                    ? "bg-amber-100"
                    : "bg-blue-100",
              ),
              children:
                s.severity === "high"
                  ? e.jsx(F, { className: "h-5 w-5 text-red-600" })
                  : s.severity === "medium"
                    ? e.jsx(N, { className: "h-5 w-5 text-amber-600" })
                    : e.jsx(B, { className: "h-5 w-5 text-blue-600" }),
            }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx(b, {
                      variant: "outline",
                      className: d(
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
                      className: d(
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
                    e.jsx(q, {
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
  J = ({ diagnosis: s }) =>
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
                    e.jsx(b, {
                      className: d(
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
                e.jsxs(c, {
                  variant: "outline",
                  size: "sm",
                  children: [
                    e.jsx(L, { className: "w-4 h-4 mr-2" }),
                    "Exportar",
                  ],
                }),
                e.jsx(c, {
                  size: "sm",
                  asChild: !0,
                  children: e.jsx(j, {
                    to: "/app/action-plan",
                    children: "Criar Plano de Ação",
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx(r, {
          className: "bg-muted/50 border-muted",
          children: e.jsxs(i, {
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
        e.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            e.jsxs(r, {
              children: [
                e.jsxs(n, {
                  children: [
                    e.jsxs(m, {
                      className: "flex items-center gap-2 text-lg",
                      children: [
                        e.jsx(Q, { className: "w-5 h-5 text-primary" }),
                        "Causa Raiz",
                      ],
                    }),
                    e.jsx(x, { children: "Por que isso está acontecendo" }),
                  ],
                }),
                e.jsxs(i, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-100 rounded-lg p-4",
                      children: [
                        e.jsx("div", {
                          className: "text-sm font-semibold text-red-800 mb-1",
                          children: "Causa Principal",
                        }),
                        e.jsx("p", {
                          className: "text-sm text-red-700",
                          children: s.cause.primary,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-sm font-semibold mb-2",
                          children: "Fatores Contribuintes",
                        }),
                        e.jsx("ul", {
                          className: "space-y-2",
                          children: s.cause.contributing.map((a, t) =>
                            e.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0",
                                  }),
                                  e.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: a,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(r, {
              children: [
                e.jsxs(n, {
                  children: [
                    e.jsxs(m, {
                      className: "flex items-center gap-2 text-lg",
                      children: [
                        e.jsx(O, { className: "w-5 h-5 text-red-500" }),
                        "Impacto no Negócio",
                      ],
                    }),
                    e.jsx(x, { children: "Consequências identificadas" }),
                  ],
                }),
                e.jsxs(i, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-100 rounded-lg p-4",
                      children: [
                        e.jsx("div", {
                          className: "text-sm font-semibold text-red-800 mb-1",
                          children: "Impacto Imediato",
                        }),
                        e.jsx("p", {
                          className: "text-sm text-red-700",
                          children: s.effect.immediate,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-amber-50 border border-amber-100 rounded-lg p-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-sm font-semibold text-amber-800 mb-1",
                          children: "Longo Prazo",
                        }),
                        e.jsx("p", {
                          className: "text-sm text-amber-700",
                          children: s.effect.longTerm,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 bg-muted rounded-lg",
                      children: [
                        e.jsx("span", {
                          className: "text-sm font-medium",
                          children: "Impacto Financeiro",
                        }),
                        e.jsx("span", {
                          className: "text-lg font-bold text-red-600",
                          children: s.effect.financial,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(r, {
          children: [
            e.jsxs(n, {
              children: [
                e.jsxs(m, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(f, { className: "w-5 h-5" }),
                    "Evidências de Dados",
                  ],
                }),
                e.jsx(x, {
                  children: "Métricas que sustentam este diagnóstico",
                }),
              ],
            }),
            e.jsx(i, {
              children: e.jsx("div", {
                className: "grid grid-cols-3 gap-4",
                children: s.dataEvidence.map((a, t) =>
                  e.jsxs(
                    "div",
                    {
                      className: "text-center p-4 bg-muted/50 rounded-lg",
                      children: [
                        e.jsx("div", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: a.metric,
                        }),
                        e.jsx("div", {
                          className: "text-xl font-bold",
                          children: a.value,
                        }),
                        e.jsx("div", {
                          className: d(
                            "text-xs font-medium mt-1",
                            a.trend === "up"
                              ? "text-red-600"
                              : "text-green-600",
                          ),
                          children: a.change,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            }),
          ],
        }),
        e.jsxs(r, {
          children: [
            e.jsxs(n, {
              children: [
                e.jsxs(m, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(V, { className: "w-5 h-5" }),
                    "Benchmarks Setoriais",
                  ],
                }),
                e.jsx(x, {
                  children: "Comparação com mercado e melhores performers",
                }),
              ],
            }),
            e.jsx(i, {
              children: e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "grid grid-cols-4 gap-4 text-center",
                    children: [
                      e.jsxs("div", {
                        className: "p-3 bg-green-50 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className: "text-xs text-green-700 mb-1",
                            children: "Top Performers",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-bold text-green-800",
                            children: s.benchmarks.topPerformers,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-3 bg-blue-50 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className: "text-xs text-blue-700 mb-1",
                            children: "Média do Setor",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-bold text-blue-800",
                            children: s.benchmarks.industry,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-3 bg-red-50 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className: "text-xs text-red-700 mb-1",
                            children: "Sua Empresa",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-bold text-red-800",
                            children: s.benchmarks.company,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-3 bg-amber-50 rounded-lg",
                        children: [
                          e.jsx("div", {
                            className: "text-xs text-amber-700 mb-1",
                            children: "Gap",
                          }),
                          e.jsx("div", {
                            className: "text-lg font-bold text-amber-800",
                            children: s.benchmarks.gap,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        className: "text-sm font-semibold mb-3",
                        children: "Evolução Histórica",
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-4",
                        children: s.historicalContext.map((a, t) =>
                          e.jsxs(
                            "div",
                            {
                              className: "flex-1",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-xs text-muted-foreground mb-1",
                                  children: a.period,
                                }),
                                e.jsx("div", {
                                  className: d(
                                    "p-2 rounded text-center text-sm font-medium",
                                    a.status === "stable"
                                      ? "bg-green-100 text-green-700"
                                      : a.status === "warning"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-red-100 text-red-700",
                                  ),
                                  children: a.value,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsxs(r, {
          className:
            "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
          children: [
            e.jsx(n, {
              children: e.jsxs(m, {
                className: "flex items-center gap-2 text-lg",
                children: [
                  e.jsx(v, { className: "w-5 h-5 text-blue-600" }),
                  "Análise da IA",
                ],
              }),
            }),
            e.jsxs(i, {
              children: [
                e.jsx("p", {
                  className: "text-sm leading-relaxed text-blue-900",
                  children: s.aiAnalysis,
                }),
                e.jsxs("div", {
                  className: "flex gap-2 mt-4",
                  children: [
                    e.jsx(c, {
                      className: "flex-1",
                      asChild: !0,
                      children: e.jsxs(j, {
                        to: "/app/action-plan",
                        children: [
                          e.jsx(N, { className: "w-4 h-4 mr-2" }),
                          "Criar Plano de Ação",
                        ],
                      }),
                    }),
                    e.jsx(c, {
                      variant: "outline",
                      asChild: !0,
                      children: e.jsx(j, {
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
  ae = () => {
    S();
    const [s, a] = p.useState([
        "finance",
        "commercial",
        "operations",
        "strategy",
      ]),
      [t, y] = p.useState(o[0].id),
      [C, w] = p.useState("quarter"),
      h = o.filter((l) => s.includes(l.domain)),
      A = o.find((l) => l.id === t) || o[0];
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
                      children: e.jsx(f, { className: "h-8 w-8 text-primary" }),
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
                e.jsxs(T, {
                  value: C,
                  onValueChange: w,
                  children: [
                    e.jsxs(k, {
                      className: "w-40",
                      children: [
                        e.jsx(g, { className: "w-4 h-4 mr-2" }),
                        e.jsx(D, {}),
                      ],
                    }),
                    e.jsxs(R, {
                      children: [
                        e.jsx(u, { value: "month", children: "Este Mês" }),
                        e.jsx(u, {
                          value: "quarter",
                          children: "Este Trimestre",
                        }),
                        e.jsx(u, { value: "year", children: "Este Ano" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(c, {
                  variant: "outline",
                  size: "sm",
                  children: [
                    e.jsx(z, { className: "w-4 h-4 mr-2" }),
                    "Atualizar",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(P, { selected: s, onChange: a }),
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
                      children: ["Diagnósticos (", h.length, ")"],
                    }),
                    e.jsxs(c, {
                      variant: "ghost",
                      size: "sm",
                      children: [
                        e.jsx(E, { className: "w-4 h-4 mr-2" }),
                        "Filtrar",
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: h.map((l) =>
                    e.jsx(
                      H,
                      { diagnosis: l, onSelect: y, isSelected: t === l.id },
                      l.id,
                    ),
                  ),
                }),
                h.length === 0 &&
                  e.jsx(r, {
                    className: "border-dashed",
                    children: e.jsxs(i, {
                      className: "p-8 text-center",
                      children: [
                        e.jsx(I, {
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
              children: e.jsx(J, { diagnosis: A }),
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
                  e.jsx(v, { className: "h-4 w-4" }),
                  e.jsxs("span", {
                    children: [
                      "Análises baseadas em ",
                      e.jsx("strong", { children: o.length }),
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
                      e.jsx(g, { className: "h-4 w-4" }),
                      "Última análise: Hoje às 08:30",
                    ],
                  }),
                  e.jsxs(c, {
                    variant: "ghost",
                    size: "sm",
                    className: "gap-1",
                    children: [
                      e.jsx(M, { className: "h-4 w-4" }),
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
export { ae as default };
