import { u as A, d as S, j as e, B as T } from "./index-BvTrNtPA.js";
import { r as d } from "./vendor-Bp-AcFIh.js";
import { C as p, a as u } from "./card-DMEndSBG.js";
import { T as R, a as k, b as h, c as D } from "./tabs-T88SL33i.js";
import { B as x } from "./badge-B9qeYiUm.js";
import { A as P } from "./ActionableCard-2qlsngJF.js";
import { D as _ } from "./DomainTag-DNDvjVDk.js";
import {
  aw as I,
  T as v,
  d as j,
  Z as y,
  af as B,
  b as O,
  J as q,
  f as z,
  k as E,
} from "./utils-BrIGbSZG.js";
import "./router-Db_Yswnp.js";
import "./index-DDcbJ2Er.js";
import "./index-CgkQ-5_2.js";
const M = [
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
      type: "risk",
      priority: "high",
      domain: "finance",
      urgency: "immediate",
      alert: {
        id: "r2",
        title: "Runway Crítico - Caixa para 3.5 meses",
        description: "Queima de caixa atual irá esgotar reserva em 3.5 meses",
        severity: "critical",
        timeToBreathe: "15 dias",
        domain: "finance",
        metrics: ["runway", "burn_rate", "cash_balance"],
      },
      diagnosis: {
        id: "d2",
        technicalTerm: "Cash Runway Critical Threshold",
        cause:
          "Burn rate mensal de R$ 45K com reserva de apenas R$ 158K. Receita não cobre custos operacionais desde outubro.",
        effect:
          "Risco de insolvência. Necessidade de rodada de investimento emergencial ou corte drástico de custos.",
        why: "Aquisição de clientes mais lenta que projetado + custos fixos de escritório não reduzidos pós-pandemia.",
        dataSources: ["Extratos Bancários", "Fluxo de Caixa", "DRE"],
      },
      recommendation: {
        id: "rec2",
        title: "Corte Emergencial de Custos + Aceleração de Recebíveis",
        description:
          "Reduzir imediatamente custos fixos em 30% (escritório, softwares não críticos). Negociar recebíveis e antecipar faturas.",
        expectedImpact: "Extensão de runway para 7 meses",
        timeframe: "15 dias",
        complexity: "high",
        confidence: 92,
        levers: [
          { type: "cost", label: "Custo", impact: "high" },
          { type: "time", label: "Prazo", impact: "high" },
        ],
      },
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3).toISOString(),
      status: "active",
    },
    {
      id: "3",
      type: "opportunity",
      priority: "high",
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
        id: "d3",
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
        id: "rec3",
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
    {
      id: "4",
      type: "opportunity",
      priority: "medium",
      domain: "marketing",
      urgency: "medium_term",
      alert: {
        id: "o2",
        title: "Oportunidade de Crescimento no Segmento SaaS",
        description: "CAC 30% menor no segmento SaaS vs média geral",
        severity: "medium",
        timeToBreathe: "90 dias",
        domain: "marketing",
        metrics: ["cac", "ltv", "conversion_by_segment"],
      },
      diagnosis: {
        id: "d4",
        technicalTerm: "Customer Acquisition Efficiency by Segment",
        cause:
          "Dados de aquisição mostram que clientes SaaS têm CAC 30% menor e LTV 40% maior que outros segmentos.",
        effect: "Potencial de aumentar margem em 15% focando nesse segmento.",
        why: "Menor ciclo de vendas, decisão mais técnica e menos burocrática.",
        dataSources: [
          "Google Analytics",
          "CRM",
          "Planilha de Custos de Aquisição",
        ],
      },
      recommendation: {
        id: "rec4",
        title: "Campanha Focada em SaaS + Parcerias",
        description:
          "Criar campanha de marketing específica para SaaS. Desenvolver case studies e conteúdo técnico.",
        expectedImpact: "+40% de novos clientes SaaS",
        timeframe: "90 dias",
        complexity: "low",
        confidence: 72,
        levers: [{ type: "volume", label: "Volume", impact: "high" }],
      },
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3).toISOString(),
      status: "active",
    },
  ],
  X = () => {
    A();
    const { toast: g } = S(),
      [o, N] = d.useState([
        "finance",
        "commercial",
        "operations",
        "strategy",
        "marketing",
      ]),
      [n, b] = d.useState("all"),
      [c, f] = d.useState(M),
      l = d.useMemo(
        () =>
          c
            .filter((a) =>
              o.includes(a.domain)
                ? n === "risks"
                  ? a.type === "risk"
                  : n === "opportunities"
                    ? a.type === "opportunity"
                    : n === "high"
                      ? a.priority === "high"
                      : !0
                : !1,
            )
            .sort((a, r) => {
              const s = { high: 3, medium: 2, low: 1 },
                m = { immediate: 3, short_term: 2, medium_term: 1 },
                t = s[a.priority] * 10 + m[a.urgency];
              return s[r.priority] * 10 + m[r.urgency] - t;
            }),
        [c, o, n],
      ),
      i = d.useMemo(() => {
        const a = c.filter((t) => t.type === "risk" && o.includes(t.domain)),
          r = c.filter((t) => t.type === "opportunity" && o.includes(t.domain)),
          s = c.filter((t) => t.priority === "high" && o.includes(t.domain)),
          m = a.filter((t) => t.alert.severity === "critical");
        return {
          total: l.length,
          risks: a.length,
          opportunities: r.length,
          highPriority: s.length,
          critical: m.length,
        };
      }, [c, o, l.length]),
      w = (a) => {
        (g({
          title: "Adicionado ao Plano",
          description: "Ação adicionada à Lista de Execução.",
        }),
          f((r) =>
            r.map((s) => (s.id === a ? { ...s, status: "in_action_plan" } : s)),
          ));
      },
      C = (a) => {
        (g({
          title: "Alerta dispensado",
          description: "O item foi marcado como reconhecido.",
        }),
          f((r) =>
            r.map((s) => (s.id === a ? { ...s, status: "acknowledged" } : s)),
          ));
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
                      children: e.jsx(I, { className: "h-8 w-8 text-primary" }),
                    }),
                    "Radar",
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground font-medium",
                  children:
                    "Alertas inteligentes de Riscos e Oportunidades detectados pela IA",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-wrap gap-3",
              children: [
                e.jsx(p, {
                  className: "bg-red-50 border-red-200",
                  children: e.jsxs(u, {
                    className: "p-3 flex items-center gap-2",
                    children: [
                      e.jsx(v, { className: "h-5 w-5 text-red-600" }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("div", {
                            className: "text-lg font-bold text-red-700",
                            children: i.risks,
                          }),
                          e.jsx("div", {
                            className: "text-xs text-red-600",
                            children: "Riscos",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(p, {
                  className: "bg-emerald-50 border-emerald-200",
                  children: e.jsxs(u, {
                    className: "p-3 flex items-center gap-2",
                    children: [
                      e.jsx(j, { className: "h-5 w-5 text-emerald-600" }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("div", {
                            className: "text-lg font-bold text-emerald-700",
                            children: i.opportunities,
                          }),
                          e.jsx("div", {
                            className: "text-xs text-emerald-600",
                            children: "Oportunidades",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                i.critical > 0 &&
                  e.jsx(p, {
                    className: "bg-red-100 border-red-300 animate-pulse",
                    children: e.jsxs(u, {
                      className: "p-3 flex items-center gap-2",
                      children: [
                        e.jsx(y, { className: "h-5 w-5 text-red-600" }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-lg font-bold text-red-700",
                              children: i.critical,
                            }),
                            e.jsx("div", {
                              className: "text-xs text-red-600",
                              children: "Críticos",
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
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsx(_, { selected: o, onChange: N }),
            e.jsxs(R, {
              value: n,
              onValueChange: b,
              className: "w-full",
              children: [
                e.jsxs(k, {
                  className:
                    "w-full sm:w-auto grid grid-cols-2 sm:grid-cols-5 gap-1",
                  children: [
                    e.jsxs(h, {
                      value: "all",
                      className: "gap-2",
                      children: [
                        e.jsx(B, { className: "h-4 w-4" }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Todos",
                        }),
                        e.jsx(x, {
                          variant: "secondary",
                          className: "ml-1",
                          children: i.total,
                        }),
                      ],
                    }),
                    e.jsxs(h, {
                      value: "risks",
                      className: "gap-2",
                      children: [
                        e.jsx(v, { className: "h-4 w-4" }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Riscos",
                        }),
                        e.jsx(x, {
                          variant: "secondary",
                          className: "ml-1 bg-red-100 text-red-700",
                          children: i.risks,
                        }),
                      ],
                    }),
                    e.jsxs(h, {
                      value: "opportunities",
                      className: "gap-2",
                      children: [
                        e.jsx(j, { className: "h-4 w-4" }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Oportunidades",
                        }),
                        e.jsx(x, {
                          variant: "secondary",
                          className: "ml-1 bg-emerald-100 text-emerald-700",
                          children: i.opportunities,
                        }),
                      ],
                    }),
                    e.jsxs(h, {
                      value: "high",
                      className: "gap-2",
                      children: [
                        e.jsx(O, { className: "h-4 w-4" }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Alta Prioridade",
                        }),
                        e.jsx(x, {
                          variant: "secondary",
                          className: "ml-1 bg-amber-100 text-amber-700",
                          children: i.highPriority,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(D, {
                  value: n,
                  className: "mt-6",
                  children:
                    l.length === 0
                      ? e.jsx(p, {
                          className: "border-dashed",
                          children: e.jsxs(u, {
                            className: "p-12 text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                                children: e.jsx(q, {
                                  className: "h-8 w-8 text-muted-foreground",
                                }),
                              }),
                              e.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-foreground mb-2",
                                children: "Tudo tranquilo no radar",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-muted-foreground max-w-md mx-auto",
                                children:
                                  "Nenhum alerta corresponde aos filtros selecionados. Ajuste os filtros de domínio ou aguarde novas análises da IA.",
                              }),
                            ],
                          }),
                        })
                      : e.jsx("div", {
                          className: "grid grid-cols-1 xl:grid-cols-2 gap-6",
                          children: l.map((a) =>
                            e.jsx(
                              P,
                              { item: a, onAddToPlan: w, onDismiss: C },
                              a.id,
                            ),
                          ),
                        }),
                }),
              ],
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
                  e.jsx(z, { className: "h-4 w-4" }),
                  e.jsxs("span", {
                    children: [
                      "Última análise: ",
                      e.jsx("strong", { children: "Hoje às 08:30" }),
                      " | Próxima: ",
                      e.jsx("strong", { children: "Amanhã às 06:00" }),
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
                      "Radar atualiza a cada 6 horas",
                    ],
                  }),
                  e.jsxs(T, {
                    variant: "ghost",
                    size: "sm",
                    className: "gap-1",
                    children: [
                      e.jsx(y, { className: "h-4 w-4" }),
                      "Forçar análise agora",
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
export { X as default };
