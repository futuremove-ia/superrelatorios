import {
  j as e,
  p as o,
  u as R,
  C as f,
  n as A,
  g as b,
  B as x,
  t as V,
  v as L,
  w as q,
  x as F,
  y as C,
  A as G,
  z as H,
  T as Q,
  k as Z,
  l as P,
  m as k,
  o as I,
} from "./index-DRWQgA5q.js";
import { r as w, L as K } from "./router-XBfdTQ0K.js";
import { B as T } from "./badge-DD2chybY.js";
import { D as U } from "./DomainTag-CESWA3VE.js";
import {
  a0 as J,
  a$ as W,
  ac as N,
  b0 as Y,
  b1 as X,
  a9 as B,
  T as z,
  a2 as D,
  aj as ee,
  Y as M,
  aB as O,
  Z as $,
  a5 as y,
  au as S,
  ag as E,
  at as _,
  aD as se,
  J as ae,
  b2 as te,
  W as re,
  _ as ie,
  a1 as oe,
} from "./utils-Er8ll4su.js";
import { u as de } from "./use-toast-BUB6lCCL.js";
const le = {
    price: {
      label: "Preço",
      color: "rose",
      icon: B,
      description: "Ponto de pressão no valor cobrado",
    },
    cost: {
      label: "Custo",
      color: "orange",
      icon: X,
      description: "Ponto de pressão nos gastos operacionais",
    },
    volume: {
      label: "Volume",
      color: "blue",
      icon: Y,
      description: "Ponto de pressão na quantidade vendida",
    },
    time: {
      label: "Prazo",
      color: "amber",
      icon: N,
      description: "Ponto de pressão no tempo de entrega",
    },
    quality: {
      label: "Qualidade",
      color: "purple",
      icon: W,
      description: "Ponto de pressão no padrão do produto",
    },
    process: {
      label: "Processo",
      color: "slate",
      icon: J,
      description: "Ponto de pressão no fluxo operacional",
    },
  },
  ne = ({
    lever: s,
    showImpact: d = !0,
    size: l = "md",
    variant: m = "default",
    className: p,
  }) => {
    var g;
    const r = le[s],
      n = r.icon,
      t = {
        sm: "text-[10px] px-2 py-0.5 gap-1",
        md: "text-xs px-2.5 py-1 gap-1.5",
        lg: "text-sm px-3 py-1.5 gap-2",
      },
      a = {
        default: `bg-${r.color}-100 text-${r.color}-800 border-${r.color}-200`,
        outline: `bg-transparent text-${r.color}-700 border-${r.color}-300`,
        filled: `bg-${r.color}-500 text-white border-transparent`,
      },
      u = { sm: "h-3 w-3", md: "h-3.5 w-3.5", lg: "h-4 w-4" },
      j = {
        high: {
          label: "Alto Impacto",
          color: "text-red-600",
          dot: "bg-red-500",
        },
        medium: {
          label: "Médio Impacto",
          color: "text-amber-600",
          dot: "bg-amber-500",
        },
        low: {
          label: "Baixo Impacto",
          color: "text-blue-600",
          dot: "bg-blue-500",
        },
      };
    return e.jsxs("span", {
      className: o(
        "inline-flex items-center font-medium border rounded-md transition-colors",
        t[l],
        a[m],
        p,
      ),
      title: r.description,
      children: [
        e.jsx(n, { className: u[l] }),
        e.jsxs("span", {
          className: "font-semibold",
          children: ["#", r.label],
        }),
        d &&
          e.jsx("span", {
            className: o(
              "ml-1 text-[10px] opacity-75",
              ((g = j[r.color]) == null ? void 0 : g.color) ||
                "text-muted-foreground",
            ),
            children: "●",
          }),
      ],
    });
  },
  ce = ({ levers: s, size: d = "md", className: l }) =>
    !s || s.length === 0
      ? null
      : e.jsxs("div", {
          className: o("flex flex-wrap gap-2", l),
          children: [
            e.jsx("span", {
              className: "text-xs text-muted-foreground mr-1",
              children: "Alavancas:",
            }),
            s.map((m, p) =>
              e.jsx(
                ne,
                { lever: m.type, size: d, showImpact: !0 },
                `${m.type}-${p}`,
              ),
            ),
          ],
        }),
  me = ({
    item: s,
    onAddToPlan: d,
    onDismiss: l,
    onClick: m,
    className: p,
  }) => {
    const { t: r } = R(),
      n = s.type === "risk",
      t = s.alert,
      a = n
        ? {
            icon: z,
            headerBg: "bg-red-50",
            headerBorder: "border-red-200",
            badgeColor: "bg-red-500 text-white",
            badgeText: "RISCO",
            urgencyColor: "text-red-600",
          }
        : {
            icon: D,
            headerBg: "bg-emerald-50",
            headerBorder: "border-emerald-200",
            badgeColor: "bg-emerald-500 text-white",
            badgeText: "OPORTUNIDADE",
            urgencyColor: "text-emerald-600",
          },
      u = a.icon,
      j = (g) => {
        const v = new Date(),
          i = new Date(g),
          c = Math.floor((v.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24));
        return c === 0
          ? "Hoje"
          : c === 1
            ? "Ontem"
            : c < 7
              ? `${c} dias`
              : c < 30
                ? `${Math.floor(c / 7)} semanas`
                : `${Math.floor(c / 30)} meses`;
      };
    return e.jsxs(f, {
      className: o(
        "overflow-hidden transition-all duration-300 hover:shadow-lg",
        "border-l-4",
        n ? "border-l-red-500" : "border-l-emerald-500",
        p,
      ),
      children: [
        e.jsx(A, {
          className: o("p-4 pb-3", a.headerBg, "border-b", a.headerBorder),
          children: e.jsxs("div", {
            className: "flex items-start justify-between gap-3",
            children: [
              e.jsxs("div", {
                className: "flex items-start gap-3 flex-1 min-w-0",
                children: [
                  e.jsx("div", {
                    className: o(
                      "p-2 rounded-lg flex-shrink-0",
                      n ? "bg-red-100" : "bg-emerald-100",
                    ),
                    children: e.jsx(u, {
                      className: o(
                        "h-5 w-5",
                        n ? "text-red-600" : "text-emerald-600",
                      ),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap mb-1",
                        children: [
                          e.jsx(T, {
                            className: o("text-xs font-bold", a.badgeColor),
                            children: a.badgeText,
                          }),
                          e.jsx(U, { domain: s.domain, size: "sm" }),
                          e.jsx(T, {
                            variant: "outline",
                            className: o(
                              "text-[10px]",
                              s.priority === "high"
                                ? "border-red-300 text-red-700"
                                : s.priority === "medium"
                                  ? "border-amber-300 text-amber-700"
                                  : "border-blue-300 text-blue-700",
                            ),
                            children:
                              s.priority === "high"
                                ? "Alta Prioridade"
                                : s.priority === "medium"
                                  ? "Média Prioridade"
                                  : "Baixa Prioridade",
                          }),
                        ],
                      }),
                      e.jsx("h3", {
                        className:
                          "font-bold text-base text-foreground leading-tight",
                        children: t.title,
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-3 mt-1 text-xs text-muted-foreground",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              e.jsx(N, { className: "h-3 w-3" }),
                              "Detectado ",
                              j(s.createdAt),
                            ],
                          }),
                          n &&
                            "severity" in t &&
                            e.jsxs("span", {
                              className: o(
                                "flex items-center gap-1 font-medium",
                                t.severity === "critical"
                                  ? "text-red-600"
                                  : t.severity === "high"
                                    ? "text-orange-600"
                                    : "text-yellow-600",
                              ),
                              children: [
                                e.jsx(ee, { className: "h-3 w-3" }),
                                "Gravidade: ",
                                t.severity === "critical"
                                  ? "Crítica"
                                  : t.severity === "high"
                                    ? "Alta"
                                    : "Média",
                              ],
                            }),
                          !n &&
                            "potentialProfit" in t &&
                            e.jsxs("span", {
                              className:
                                "flex items-center gap-1 text-emerald-600 font-medium",
                              children: [
                                e.jsx(B, { className: "h-3 w-3" }),
                                "Potencial: ",
                                t.potentialProfit,
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n &&
                "timeToBreathe" in t &&
                e.jsxs("div", {
                  className: "flex-shrink-0 text-right",
                  children: [
                    e.jsx("div", {
                      className: o("text-sm font-bold", a.urgencyColor),
                      children: t.timeToBreathe,
                    }),
                    e.jsx("div", {
                      className: "text-[10px] text-muted-foreground",
                      children: "para agir",
                    }),
                  ],
                }),
            ],
          }),
        }),
        e.jsxs(b, {
          className: "p-4 space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("div", {
                  className: "bg-muted/50 rounded-lg p-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1",
                      children: "Termo Técnico",
                    }),
                    e.jsx("div", {
                      className: "font-mono text-sm text-foreground",
                      children: s.diagnosis.technicalTerm,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className:
                        "text-xs font-bold text-foreground mb-1 flex items-center gap-1",
                      children: [
                        e.jsx(M, { className: "h-3.5 w-3.5 text-primary" }),
                        "Causa Raiz",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-muted-foreground leading-relaxed",
                      children: s.diagnosis.cause,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className:
                        "text-xs font-bold text-foreground mb-1 flex items-center gap-1",
                      children: [
                        e.jsx(O, { className: "h-3.5 w-3.5 text-red-500" }),
                        "Efeito no Negócio",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm text-muted-foreground leading-relaxed",
                      children: s.diagnosis.effect,
                    }),
                  ],
                }),
                e.jsx(ce, { levers: s.recommendation.levers, size: "sm" }),
              ],
            }),
            e.jsxs("div", {
              className: "pt-3 border-t",
              children: [
                e.jsxs("div", {
                  className:
                    "text-xs font-bold text-foreground mb-2 flex items-center gap-1",
                  children: [
                    e.jsx($, { className: "h-3.5 w-3.5 text-amber-500" }),
                    "Recomendação da IA",
                  ],
                }),
                e.jsx("p", {
                  className: "text-sm text-foreground mb-3 leading-relaxed",
                  children: s.recommendation.description,
                }),
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-3 mb-4 text-xs",
                  children: [
                    e.jsxs("span", {
                      className:
                        "inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md",
                      children: [
                        e.jsx(D, { className: "h-3 w-3 text-primary" }),
                        e.jsx("span", {
                          className: "font-semibold text-primary",
                          children: s.recommendation.expectedImpact,
                        }),
                      ],
                    }),
                    e.jsxs("span", {
                      className:
                        "inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md",
                      children: [
                        e.jsx(N, {
                          className: "h-3 w-3 text-muted-foreground",
                        }),
                        s.recommendation.timeframe,
                      ],
                    }),
                    e.jsxs("span", {
                      className: o(
                        "inline-flex items-center gap-1 px-2 py-1 rounded-md",
                        s.recommendation.complexity === "low"
                          ? "bg-green-50 text-green-700"
                          : s.recommendation.complexity === "medium"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-red-50 text-red-700",
                      ),
                      children: [
                        e.jsx(y, { className: "h-3 w-3" }),
                        "Complexidade: ",
                        s.recommendation.complexity === "low"
                          ? "Baixa"
                          : s.recommendation.complexity === "medium"
                            ? "Média"
                            : "Alta",
                      ],
                    }),
                    e.jsxs("span", {
                      className:
                        "inline-flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-md text-blue-700",
                      children: [
                        e.jsx(S, { className: "h-3 w-3" }),
                        "Confiança: ",
                        s.recommendation.confidence,
                        "%",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsxs(x, {
                      className: "flex-1 gap-2",
                      onClick: () => (d == null ? void 0 : d(s.id)),
                      children: [
                        e.jsx(E, { className: "h-4 w-4" }),
                        "Adicionar ao Plano",
                      ],
                    }),
                    e.jsx(x, {
                      variant: "outline",
                      size: "icon",
                      onClick: () => (l == null ? void 0 : l(s.id)),
                      title: "Dispensar alerta",
                      children: e.jsx(S, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  xe = [
    {
      id: "1",
      type: "risk",
      priority: "high",
      domain: "commercial",
      urgency: "immediate",
      alert: {
        id: "r1",
        title: "Queda na Taxa de Conversão Comercial",
        description:
          "A taxa de conversão de vendas caiu 15% no último trimestre",
        severity: "high",
        timeToBreathe: "30 dias",
        domain: "commercial",
        metrics: ["conversion_rate", "cac", "pipeline"],
      },
      diagnosis: {
        id: "d1",
        technicalTerm: "Sales Conversion Rate Decline",
        cause:
          "A taxa de conversão de vendas caiu 15% no último trimestre, impactando diretamente a receita. Análise do funil mostra gargalo na etapa de proposta.",
        effect:
          "Redução de 23% na receita projetada para o próximo trimestre. Risco de perder market share para concorrentes.",
        why: "O aumento de 40% no preço sem ajuste na comunicação de valor criou resistência do cliente.",
        dataSources: ["CRM", "Planilha de Vendas", "Dados de Pipeline"],
      },
      recommendation: {
        id: "rec1",
        title: "Otimização do Funil de Vendas",
        description:
          "Reestruturar processo comercial com foco nos pontos de gargalo identificados. Criar novo material de proposta destacando ROI.",
        expectedImpact: "+25% na taxa de conversão",
        timeframe: "30 dias",
        complexity: "medium",
        confidence: 85,
        levers: [
          { type: "price", label: "Preço", impact: "high" },
          { type: "process", label: "Processo", impact: "medium" },
        ],
      },
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3).toISOString(),
      status: "active",
    },
    {
      id: "2",
      type: "opportunity",
      priority: "medium",
      domain: "operations",
      urgency: "short_term",
      alert: {
        id: "o1",
        title: "Potencial de Automação no Atendimento",
        description:
          "40% das demandas de suporte são repetitivas e podem ser automatizadas",
        severity: "medium",
        timeToBreathe: "60 dias",
        domain: "operations",
        metrics: ["support_time", "ticket_volume", "automation_rate"],
      },
      diagnosis: {
        id: "d2",
        technicalTerm: "Process Automation Opportunity",
        cause:
          "Análise de tickets de suporte mostra que 40% são consultas repetitivas sobre senha, status de pedido e dúvidas básicas de uso.",
        effect:
          "Liberação de 25h/semana da equipe de suporte para focar em atendimento complexo e vendas.",
        why: "Crescimento rápido da base sem investimento correspondente em ferramentas de self-service.",
        dataSources: [
          "Zendesk",
          "Planilha de Tickets",
          "Análise de Categorização",
        ],
      },
      recommendation: {
        id: "rec2",
        title: "Implementar Chatbot + Base de Conhecimento",
        description:
          "Criar chatbot para FAQs e portal de autoatendimento. Reduzir tickets repetitivos em 60%.",
        expectedImpact: "+R$ 8K/mês economia + satisfação do cliente",
        timeframe: "45 dias",
        complexity: "medium",
        confidence: 78,
        levers: [
          { type: "process", label: "Processo", impact: "high" },
          { type: "cost", label: "Custo", impact: "medium" },
        ],
      },
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3).toISOString(),
      status: "active",
    },
  ],
  pe = ({ item: s }) => (
    s.type,
    e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(f, {
          children: [
            e.jsx(A, {
              children: e.jsxs(I, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(y, { className: "w-5 h-5" }),
                  "Análise Técnica Detalhada",
                ],
              }),
            }),
            e.jsxs(b, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "bg-muted/50 rounded-lg p-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2",
                      children: "Termo Técnico (DM Mono)",
                    }),
                    e.jsx("div", {
                      className: "font-mono text-base text-foreground",
                      children: s.diagnosis.technicalTerm,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("h4", {
                      className: "font-semibold mb-2 flex items-center gap-2",
                      children: [
                        e.jsx(M, { className: "w-4 h-4 text-primary" }),
                        "Causa Raiz Identificada",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: s.diagnosis.cause,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("h4", {
                      className: "font-semibold mb-2 flex items-center gap-2",
                      children: [
                        e.jsx(O, { className: "w-4 h-4 text-red-500" }),
                        "Efeito no Negócio",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: s.diagnosis.effect,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("h4", {
                      className: "font-semibold mb-2 flex items-center gap-2",
                      children: [
                        e.jsx(_, { className: "w-4 h-4 text-blue-500" }),
                        "Por que Aconteceu",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: s.diagnosis.why,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "font-semibold mb-2",
                      children: "Fontes de Dados Analisadas",
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: s.diagnosis.dataSources.map((d, l) =>
                        e.jsx(T, { variant: "outline", children: d }, l),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(f, {
          children: [
            e.jsx(A, {
              children: e.jsxs(I, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx($, { className: "w-5 h-5 text-amber-500" }),
                  "Recomendação Estratégica",
                ],
              }),
            }),
            e.jsxs(b, {
              className: "space-y-4",
              children: [
                e.jsx("p", {
                  className: "text-foreground leading-relaxed",
                  children: s.recommendation.description,
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "bg-primary/10 rounded-lg p-3",
                      children: [
                        e.jsx("div", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Impacto Esperado",
                        }),
                        e.jsx("div", {
                          className: "font-bold text-primary",
                          children: s.recommendation.expectedImpact,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "bg-muted rounded-lg p-3",
                      children: [
                        e.jsx("div", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Prazo",
                        }),
                        e.jsx("div", {
                          className: "font-bold",
                          children: s.recommendation.timeframe,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "bg-muted rounded-lg p-3",
                      children: [
                        e.jsx("div", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Complexidade",
                        }),
                        e.jsx("div", {
                          className: o(
                            "font-bold",
                            s.recommendation.complexity === "low"
                              ? "text-green-600"
                              : s.recommendation.complexity === "medium"
                                ? "text-amber-600"
                                : "text-red-600",
                          ),
                          children:
                            s.recommendation.complexity === "low"
                              ? "Baixa"
                              : s.recommendation.complexity === "medium"
                                ? "Média"
                                : "Alta",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "bg-blue-50 rounded-lg p-3",
                      children: [
                        e.jsx("div", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Confiança da IA",
                        }),
                        e.jsxs("div", {
                          className: "font-bold text-blue-600",
                          children: [s.recommendation.confidence, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-3 pt-4",
                  children: [
                    e.jsxs(x, {
                      className: "flex-1 gap-2",
                      children: [
                        e.jsx(E, { className: "w-4 h-4" }),
                        "Adicionar ao Plano de Ação",
                      ],
                    }),
                    e.jsx(x, {
                      variant: "outline",
                      asChild: !0,
                      children: e.jsx(K, {
                        to: "/app/action-plan",
                        children: "Ver Plano de Ação",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  Ne = () => {
    const { t: s } = R(),
      { toast: d } = de(),
      [l, m] = w.useState("radar"),
      [p, r] = w.useState("current"),
      [n, t] = w.useState(null),
      [a, u] = w.useState(xe),
      j = (i) => {
        (d({
          title: "Adicionado ao Plano",
          description: "Ação adicionada à Lista de Execução.",
        }),
          u((c) =>
            c.map((h) => (h.id === i ? { ...h, status: "in_action_plan" } : h)),
          ));
      },
      g = (i) => {
        (d({
          title: "Alerta dispensado",
          description: "O item foi marcado como reconhecido.",
        }),
          u((c) =>
            c.map((h) => (h.id === i ? { ...h, status: "acknowledged" } : h)),
          ));
      },
      v = (i) => {
        (t(i), m("analysis"));
      };
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
                      children: e.jsx(_, { className: "h-8 w-8 text-primary" }),
                    }),
                    "Painel de Decisão",
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground font-medium",
                  children:
                    "Análise estratégica de riscos e oportunidades com recomendações da IA",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsxs(V, {
                  value: p,
                  onValueChange: r,
                  children: [
                    e.jsxs(L, {
                      className: "w-40",
                      children: [
                        e.jsx(N, { className: "w-4 h-4 mr-2" }),
                        e.jsx(q, {}),
                      ],
                    }),
                    e.jsxs(F, {
                      children: [
                        e.jsx(C, {
                          value: "current",
                          children: "Período Atual",
                        }),
                        e.jsx(C, {
                          value: "last_month",
                          children: "Mês Passado",
                        }),
                        e.jsx(C, {
                          value: "quarter",
                          children: "Último Trimestre",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(x, {
                  variant: "outline",
                  size: "sm",
                  children: [
                    e.jsx(se, { className: "w-4 h-4 mr-2" }),
                    "Atualizar",
                  ],
                }),
              ],
            }),
          ],
        }),
        a.filter((i) => i.type === "risk").length > 0 &&
          e.jsxs(G, {
            className: "border-red-200 bg-red-50",
            children: [
              e.jsx(z, { className: "h-4 w-4 text-red-600" }),
              e.jsxs(H, {
                className: "text-red-800 flex items-center justify-between",
                children: [
                  e.jsxs("span", {
                    children: [
                      e.jsx("strong", {
                        children: "Alerta Crítico Detectado:",
                      }),
                      " ",
                      a[0].alert.title,
                    ],
                  }),
                  e.jsxs(x, {
                    variant: "link",
                    size: "sm",
                    className: "text-red-600",
                    onClick: () => v(a[0]),
                    children: [
                      "Analisar Agora ",
                      e.jsx(ae, { className: "w-4 h-4 ml-1" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        e.jsxs(Q, {
          value: l,
          onValueChange: m,
          className: "space-y-6",
          children: [
            e.jsxs(Z, {
              className: "grid w-full grid-cols-2 lg:w-[400px]",
              children: [
                e.jsxs(P, {
                  value: "radar",
                  className: "gap-2",
                  children: [e.jsx(te, { className: "w-4 h-4" }), "Radar"],
                }),
                e.jsxs(P, {
                  value: "analysis",
                  className: "gap-2",
                  children: [
                    e.jsx(y, { className: "w-4 h-4" }),
                    "Análise Detalhada",
                  ],
                }),
              ],
            }),
            e.jsxs(k, {
              value: "radar",
              className: "space-y-6",
              children: [
                e.jsx("div", {
                  className: "grid grid-cols-1 xl:grid-cols-2 gap-6",
                  children: a.map((i) =>
                    e.jsx(
                      me,
                      {
                        item: i,
                        onAddToPlan: j,
                        onDismiss: g,
                        onClick: () => v(i),
                      },
                      i.id,
                    ),
                  ),
                }),
                a.length === 0 &&
                  e.jsx(f, {
                    className: "border-dashed",
                    children: e.jsxs(b, {
                      className: "p-12 text-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                          children: e.jsx(re, {
                            className: "h-8 w-8 text-muted-foreground",
                          }),
                        }),
                        e.jsx("h3", {
                          className:
                            "text-lg font-semibold text-foreground mb-2",
                          children: "Nenhum alerta no momento",
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground max-w-md mx-auto",
                          children:
                            "O sistema não detectou riscos ou oportunidades críticas no período selecionado.",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            e.jsx(k, {
              value: "analysis",
              className: "space-y-6",
              children: n
                ? e.jsx(pe, { item: n })
                : e.jsx(f, {
                    className: "border-dashed",
                    children: e.jsxs(b, {
                      className: "p-12 text-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                          children: e.jsx(y, {
                            className: "h-8 w-8 text-muted-foreground",
                          }),
                        }),
                        e.jsx("h3", {
                          className:
                            "text-lg font-semibold text-foreground mb-2",
                          children: "Selecione um item para análise detalhada",
                        }),
                        e.jsx("p", {
                          className:
                            "text-muted-foreground max-w-md mx-auto mb-4",
                          children:
                            'Volte para a aba "Radar" e clique em um card para ver a análise técnica completa.',
                        }),
                        e.jsx(x, {
                          onClick: () => m("radar"),
                          children: "Ir para Radar",
                        }),
                      ],
                    }),
                  }),
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
                  e.jsx(ie, { className: "h-4 w-4" }),
                  e.jsxs("span", {
                    children: [
                      "Análise baseada em ",
                      e.jsx("strong", { children: a.length }),
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
                      e.jsx(N, { className: "h-4 w-4" }),
                      "Última análise: Hoje às 08:30",
                    ],
                  }),
                  e.jsxs(x, {
                    variant: "ghost",
                    size: "sm",
                    className: "gap-1",
                    children: [
                      e.jsx(oe, { className: "h-4 w-4" }),
                      "Exportar Análise",
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
export { Ne as default };
