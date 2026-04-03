import { u as k, d as P, j as e, B as r, c as D } from "./index-DJVek99o.js";
import { r as o } from "./vendor-Bp-AcFIh.js";
import { C as n, a as c, b as g, c as f } from "./card-Ekw6AZkO.js";
import { B as R } from "./badge-BRPjZ132.js";
import { T as I, a as z, b as N, c as v } from "./tabs-CCpnioNr.js";
import { A as B, a as V } from "./alert-D-uihPLH.js";
import { S as _, a as O, b as E, c as M, d as x } from "./select-D_Z_K9g1.js";
import { L as q } from "./router-Db_Yswnp.js";
import { A as L } from "./ActionableCard-DyMJ9Iep.js";
import {
  V as w,
  k as b,
  y as F,
  T as Z,
  p as H,
  aw as K,
  f as p,
  a as Q,
  S as $,
  D as G,
  b as J,
  a3 as U,
  Z as W,
  n as X,
} from "./utils-BrIGbSZG.js";
import "./index-DgDxa8-3.js";
import "./index-DCuwROnA.js";
import "./index-Bxi3BZuB.js";
import "./index-C1y1VF1h.js";
import "./DomainTag-BCpzGJmF.js";
const Y = [
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
  ee = ({ item: s }) => (
    s.type,
    e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(n, {
          children: [
            e.jsx(g, {
              children: e.jsxs(f, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(p, { className: "w-5 h-5" }),
                  "Análise Técnica Detalhada",
                ],
              }),
            }),
            e.jsxs(c, {
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
                        e.jsx(J, { className: "w-4 h-4 text-primary" }),
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
                        e.jsx(U, { className: "w-4 h-4 text-red-500" }),
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
                        e.jsx(w, { className: "w-4 h-4 text-blue-500" }),
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
                      children: s.diagnosis.dataSources.map((l, d) =>
                        e.jsx(R, { variant: "outline", children: l }, d),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(n, {
          children: [
            e.jsx(g, {
              children: e.jsxs(f, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(W, { className: "w-5 h-5 text-amber-500" }),
                  "Recomendação Estratégica",
                ],
              }),
            }),
            e.jsxs(c, {
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
                          className: D(
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
                    e.jsxs(r, {
                      className: "flex-1 gap-2",
                      children: [
                        e.jsx(X, { className: "w-4 h-4" }),
                        "Adicionar ao Plano de Ação",
                      ],
                    }),
                    e.jsx(r, {
                      variant: "outline",
                      asChild: !0,
                      children: e.jsx(q, {
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
  je = () => {
    k();
    const { toast: s } = P(),
      [l, d] = o.useState("radar"),
      [y, A] = o.useState("current"),
      [u, C] = o.useState(null),
      [i, h] = o.useState(Y),
      T = (a) => {
        (s({
          title: "Adicionado ao Plano",
          description: "Ação adicionada à Lista de Execução.",
        }),
          h((m) =>
            m.map((t) => (t.id === a ? { ...t, status: "in_action_plan" } : t)),
          ));
      },
      S = (a) => {
        (s({
          title: "Alerta dispensado",
          description: "O item foi marcado como reconhecido.",
        }),
          h((m) =>
            m.map((t) => (t.id === a ? { ...t, status: "acknowledged" } : t)),
          ));
      },
      j = (a) => {
        (C(a), d("analysis"));
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
                      children: e.jsx(w, { className: "h-8 w-8 text-primary" }),
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
                e.jsxs(_, {
                  value: y,
                  onValueChange: A,
                  children: [
                    e.jsxs(O, {
                      className: "w-40",
                      children: [
                        e.jsx(b, { className: "w-4 h-4 mr-2" }),
                        e.jsx(E, {}),
                      ],
                    }),
                    e.jsxs(M, {
                      children: [
                        e.jsx(x, {
                          value: "current",
                          children: "Período Atual",
                        }),
                        e.jsx(x, {
                          value: "last_month",
                          children: "Mês Passado",
                        }),
                        e.jsx(x, {
                          value: "quarter",
                          children: "Último Trimestre",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(r, {
                  variant: "outline",
                  size: "sm",
                  children: [
                    e.jsx(F, { className: "w-4 h-4 mr-2" }),
                    "Atualizar",
                  ],
                }),
              ],
            }),
          ],
        }),
        i.filter((a) => a.type === "risk").length > 0 &&
          e.jsxs(B, {
            className: "border-red-200 bg-red-50",
            children: [
              e.jsx(Z, { className: "h-4 w-4 text-red-600" }),
              e.jsxs(V, {
                className: "text-red-800 flex items-center justify-between",
                children: [
                  e.jsxs("span", {
                    children: [
                      e.jsx("strong", {
                        children: "Alerta Crítico Detectado:",
                      }),
                      " ",
                      i[0].alert.title,
                    ],
                  }),
                  e.jsxs(r, {
                    variant: "link",
                    size: "sm",
                    className: "text-red-600",
                    onClick: () => j(i[0]),
                    children: [
                      "Analisar Agora ",
                      e.jsx(H, { className: "w-4 h-4 ml-1" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        e.jsxs(I, {
          value: l,
          onValueChange: d,
          className: "space-y-6",
          children: [
            e.jsxs(z, {
              className: "grid w-full grid-cols-2 lg:w-[400px]",
              children: [
                e.jsxs(N, {
                  value: "radar",
                  className: "gap-2",
                  children: [e.jsx(K, { className: "w-4 h-4" }), "Radar"],
                }),
                e.jsxs(N, {
                  value: "analysis",
                  className: "gap-2",
                  children: [
                    e.jsx(p, { className: "w-4 h-4" }),
                    "Análise Detalhada",
                  ],
                }),
              ],
            }),
            e.jsxs(v, {
              value: "radar",
              className: "space-y-6",
              children: [
                e.jsx("div", {
                  className: "grid grid-cols-1 xl:grid-cols-2 gap-6",
                  children: i.map((a) =>
                    e.jsx(
                      L,
                      {
                        item: a,
                        onAddToPlan: T,
                        onDismiss: S,
                        onClick: () => j(a),
                      },
                      a.id,
                    ),
                  ),
                }),
                i.length === 0 &&
                  e.jsx(n, {
                    className: "border-dashed",
                    children: e.jsxs(c, {
                      className: "p-12 text-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                          children: e.jsx(Q, {
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
            e.jsx(v, {
              value: "analysis",
              className: "space-y-6",
              children: u
                ? e.jsx(ee, { item: u })
                : e.jsx(n, {
                    className: "border-dashed",
                    children: e.jsxs(c, {
                      className: "p-12 text-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                          children: e.jsx(p, {
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
                        e.jsx(r, {
                          onClick: () => d("radar"),
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
                  e.jsx($, { className: "h-4 w-4" }),
                  e.jsxs("span", {
                    children: [
                      "Análise baseada em ",
                      e.jsx("strong", { children: i.length }),
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
                      e.jsx(b, { className: "h-4 w-4" }),
                      "Última análise: Hoje às 08:30",
                    ],
                  }),
                  e.jsxs(r, {
                    variant: "ghost",
                    size: "sm",
                    className: "gap-1",
                    children: [
                      e.jsx(G, { className: "h-4 w-4" }),
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
export { je as default };
