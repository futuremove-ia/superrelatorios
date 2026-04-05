import { j as e } from "./vendor-data-DuuuwLk5.js";
import { c as r, u as y, B as b } from "./index-CaCe4Bjh.js";
import { a as C } from "./DomainTag-o49RK1qJ.js";
import {
  e as T,
  bv as B,
  n as h,
  bw as P,
  bx as k,
  l as N,
  T as I,
  f,
  s as $,
  d as A,
  a6 as R,
  Z as D,
  h as M,
  O as u,
  q as z,
} from "./vendor-utils-CGetvm_l.js";
import { C as O, b as E, a as S } from "./card-CTs8HHrG.js";
import { B as j } from "./badge-Dl11-P0M.js";
const q = {
    price: {
      label: "Preço",
      color: "rose",
      icon: N,
      description: "Ponto de pressão no valor cobrado",
    },
    cost: {
      label: "Custo",
      color: "orange",
      icon: k,
      description: "Ponto de pressão nos gastos operacionais",
    },
    volume: {
      label: "Volume",
      color: "blue",
      icon: P,
      description: "Ponto de pressão na quantidade vendida",
    },
    time: {
      label: "Prazo",
      color: "amber",
      icon: h,
      description: "Ponto de pressão no tempo de entrega",
    },
    quality: {
      label: "Qualidade",
      color: "purple",
      icon: B,
      description: "Ponto de pressão no padrão do produto",
    },
    process: {
      label: "Processo",
      color: "slate",
      icon: T,
      description: "Ponto de pressão no fluxo operacional",
    },
  },
  G = ({
    lever: s,
    showImpact: i = !0,
    size: l = "md",
    variant: c = "default",
    className: m,
  }) => {
    var x;
    const t = q[s],
      o = t.icon,
      a = {
        sm: "text-[10px] px-2 py-0.5 gap-1",
        md: "text-xs px-2.5 py-1 gap-1.5",
        lg: "text-sm px-3 py-1.5 gap-2",
      },
      n = {
        default: `bg-${t.color}-100 text-${t.color}-800 border-${t.color}-200`,
        outline: `bg-transparent text-${t.color}-700 border-${t.color}-300`,
        filled: `bg-${t.color}-500 text-white border-transparent`,
      },
      p = { sm: "h-3 w-3", md: "h-3.5 w-3.5", lg: "h-4 w-4" },
      g = {
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
      className: r(
        "inline-flex items-center font-medium border rounded-md transition-colors",
        a[l],
        n[c],
        m,
      ),
      title: t.description,
      children: [
        e.jsx(o, { className: p[l] }),
        e.jsxs("span", {
          className: "font-semibold",
          children: ["#", t.label],
        }),
        i &&
          e.jsx("span", {
            className: r(
              "ml-1 text-[10px] opacity-75",
              ((x = g[t.color]) == null ? void 0 : x.color) ||
                "text-muted-foreground",
            ),
            children: "●",
          }),
      ],
    });
  },
  L = ({ levers: s, size: i = "md", className: l }) =>
    !s || s.length === 0
      ? null
      : e.jsxs("div", {
          className: r("flex flex-wrap gap-2", l),
          children: [
            e.jsx("span", {
              className: "text-xs text-muted-foreground mr-1",
              children: "Alavancas:",
            }),
            s.map((c, m) =>
              e.jsx(
                G,
                { lever: c.type, size: i, showImpact: !0 },
                `${c.type}-${m}`,
              ),
            ),
          ],
        }),
  _ = ({ item: s, onAddToPlan: i, onDismiss: l, onClick: c, className: m }) => {
    const { t } = y(),
      o = s.type === "risk",
      a = s.alert,
      n = o
        ? {
            icon: I,
            headerBg: "bg-red-50",
            headerBorder: "border-red-200",
            badgeColor: "bg-red-500 text-white",
            badgeText: "RISCO",
            urgencyColor: "text-red-600",
          }
        : {
            icon: f,
            headerBg: "bg-emerald-50",
            headerBorder: "border-emerald-200",
            badgeColor: "bg-emerald-500 text-white",
            badgeText: "OPORTUNIDADE",
            urgencyColor: "text-emerald-600",
          },
      p = n.icon,
      g = (x) => {
        const v = new Date(),
          w = new Date(x),
          d = Math.floor((v.getTime() - w.getTime()) / (1e3 * 60 * 60 * 24));
        return d === 0
          ? "Hoje"
          : d === 1
            ? "Ontem"
            : d < 7
              ? `${d} dias`
              : d < 30
                ? `${Math.floor(d / 7)} semanas`
                : `${Math.floor(d / 30)} meses`;
      };
    return e.jsxs(O, {
      className: r(
        "overflow-hidden transition-all duration-300 hover:shadow-lg",
        "border-l-4",
        o ? "border-l-red-500" : "border-l-emerald-500",
        m,
      ),
      children: [
        e.jsx(E, {
          className: r("p-4 pb-3", n.headerBg, "border-b", n.headerBorder),
          children: e.jsxs("div", {
            className: "flex items-start justify-between gap-3",
            children: [
              e.jsxs("div", {
                className: "flex items-start gap-3 flex-1 min-w-0",
                children: [
                  e.jsx("div", {
                    className: r(
                      "p-2 rounded-lg flex-shrink-0",
                      o ? "bg-red-100" : "bg-emerald-100",
                    ),
                    children: e.jsx(p, {
                      className: r(
                        "h-5 w-5",
                        o ? "text-red-600" : "text-emerald-600",
                      ),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap mb-1",
                        children: [
                          e.jsx(j, {
                            className: r("text-xs font-bold", n.badgeColor),
                            children: n.badgeText,
                          }),
                          e.jsx(C, { domain: s.domain, size: "sm" }),
                          e.jsx(j, {
                            variant: "outline",
                            className: r(
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
                        children: a.title,
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-3 mt-1 text-xs text-muted-foreground",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              e.jsx(h, { className: "h-3 w-3" }),
                              "Detectado ",
                              g(s.createdAt),
                            ],
                          }),
                          o &&
                            "severity" in a &&
                            e.jsxs("span", {
                              className: r(
                                "flex items-center gap-1 font-medium",
                                a.severity === "critical"
                                  ? "text-red-600"
                                  : a.severity === "high"
                                    ? "text-orange-600"
                                    : "text-yellow-600",
                              ),
                              children: [
                                e.jsx($, { className: "h-3 w-3" }),
                                "Gravidade: ",
                                a.severity === "critical"
                                  ? "Crítica"
                                  : a.severity === "high"
                                    ? "Alta"
                                    : "Média",
                              ],
                            }),
                          !o &&
                            "potentialProfit" in a &&
                            e.jsxs("span", {
                              className:
                                "flex items-center gap-1 text-emerald-600 font-medium",
                              children: [
                                e.jsx(N, { className: "h-3 w-3" }),
                                "Potencial: ",
                                a.potentialProfit,
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              o &&
                "timeToBreathe" in a &&
                e.jsxs("div", {
                  className: "flex-shrink-0 text-right",
                  children: [
                    e.jsx("div", {
                      className: r("text-sm font-bold", n.urgencyColor),
                      children: a.timeToBreathe,
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
        e.jsxs(S, {
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
                        e.jsx(A, { className: "h-3.5 w-3.5 text-primary" }),
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
                        e.jsx(R, { className: "h-3.5 w-3.5 text-red-500" }),
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
                e.jsx(L, { levers: s.recommendation.levers, size: "sm" }),
              ],
            }),
            e.jsxs("div", {
              className: "pt-3 border-t",
              children: [
                e.jsxs("div", {
                  className:
                    "text-xs font-bold text-foreground mb-2 flex items-center gap-1",
                  children: [
                    e.jsx(D, { className: "h-3.5 w-3.5 text-amber-500" }),
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
                        e.jsx(f, { className: "h-3 w-3 text-primary" }),
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
                        e.jsx(h, {
                          className: "h-3 w-3 text-muted-foreground",
                        }),
                        s.recommendation.timeframe,
                      ],
                    }),
                    e.jsxs("span", {
                      className: r(
                        "inline-flex items-center gap-1 px-2 py-1 rounded-md",
                        s.recommendation.complexity === "low"
                          ? "bg-green-50 text-green-700"
                          : s.recommendation.complexity === "medium"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-red-50 text-red-700",
                      ),
                      children: [
                        e.jsx(M, { className: "h-3 w-3" }),
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
                        e.jsx(u, { className: "h-3 w-3" }),
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
                    e.jsxs(b, {
                      className: "flex-1 gap-2",
                      onClick: () => (i == null ? void 0 : i(s.id)),
                      children: [
                        e.jsx(z, { className: "h-4 w-4" }),
                        "Adicionar ao Plano",
                      ],
                    }),
                    e.jsx(b, {
                      variant: "outline",
                      size: "icon",
                      onClick: () => (l == null ? void 0 : l(s.id)),
                      title: "Dispensar alerta",
                      children: e.jsx(u, { className: "h-4 w-4" }),
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
export { _ as A };
