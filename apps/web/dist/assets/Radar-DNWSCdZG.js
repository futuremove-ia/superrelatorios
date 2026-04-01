import {
  j as e,
  p as d,
  b2 as L,
  C as N,
  n as ee,
  g as v,
  q as $,
  h as se,
  s as I,
  S as ae,
  f as re,
  b3 as te,
  b4 as ie,
  b5 as ne,
  Z as D,
  B as T,
  b6 as C,
  i as b,
  T as le,
  k as de,
  l as A,
  m as oe,
} from "./index-DRWQgA5q.js";
import { r as h } from "./router-XBfdTQ0K.js";
import { B as m } from "./badge-DD2chybY.js";
import { a as ce } from "./DomainTag-CESWA3VE.js";
import {
  Y as _,
  Z as z,
  ac as B,
  b7 as me,
  af as xe,
  b8 as ue,
  at as pe,
  b9 as ge,
  au as G,
  J as he,
  X as fe,
  T as E,
  aD as q,
  b2 as be,
  a2 as H,
  aO as je,
  ba as U,
  a5 as Ne,
} from "./utils-Er8ll4su.js";
import {
  u as ve,
  a as ye,
  b as we,
  c as ke,
} from "./useRadarItems-DdsbfOae.js";
import { u as Ce } from "./useQuery-pMG9BRxa.js";
import "./useMutation-Bm6B-fB6.js";
import "./radarItemService-DLp7Z56m.js";
import "./types-JQgdQoTs.js";
const Ae = L(
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
    {
      variants: {
        variant: {
          default: "bg-white",
          filled: "text-white border-transparent",
          subtle: "border-transparent",
        },
        size: {
          sm: "px-1.5 py-0.5 text-[10px] gap-1",
          md: "px-2.5 py-0.5 text-xs gap-1.5",
          lg: "px-3 py-1 text-sm gap-2",
        },
      },
      defaultVariants: { variant: "default", size: "md" },
    },
  ),
  Te = {
    finance: { label: "Financeiro", icon: "💰", color: "domain-finance" },
    sales: { label: "Vendas", icon: "🛒", color: "domain-sales" },
    marketing: { label: "Marketing", icon: "📢", color: "domain-marketing" },
    operations: { label: "Operações", icon: "⚙️", color: "domain-operations" },
    people: { label: "Pessoas", icon: "👥", color: "domain-people" },
    strategy: { label: "Estratégia", icon: "🎯", color: "domain-strategy" },
    commercial: { label: "Comercial", icon: "📈", color: "domain-commercial" },
  };
function W({
  domain: s,
  variant: n = "default",
  size: r,
  showIcon: i = !0,
  className: a,
  ...l
}) {
  const o = Te[s],
    g = {
      finance: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
      },
      sales: {
        bg: "bg-cyan-50",
        text: "text-cyan-700",
        border: "border-cyan-200",
      },
      marketing: {
        bg: "bg-pink-50",
        text: "text-pink-700",
        border: "border-pink-200",
      },
      operations: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
      },
      people: {
        bg: "bg-rose-50",
        text: "text-rose-700",
        border: "border-rose-200",
      },
      strategy: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
      },
      commercial: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
      },
    },
    y = {
      finance: "bg-emerald-600",
      sales: "bg-cyan-600",
      marketing: "bg-pink-500",
      operations: "bg-amber-500",
      people: "bg-rose-500",
      strategy: "bg-purple-500",
      commercial: "bg-blue-500",
    },
    w = {
      finance: { bg: "bg-emerald-100/50", text: "text-emerald-800" },
      sales: { bg: "bg-cyan-100/50", text: "text-cyan-800" },
      marketing: { bg: "bg-pink-100/50", text: "text-pink-800" },
      operations: { bg: "bg-amber-100/50", text: "text-amber-800" },
      people: { bg: "bg-rose-100/50", text: "text-rose-800" },
      strategy: { bg: "bg-purple-100/50", text: "text-purple-800" },
      commercial: { bg: "bg-blue-100/50", text: "text-blue-800" },
    },
    c = g[s],
    f = y[s],
    k = w[s];
  return e.jsxs("span", {
    className: d(
      Ae({ variant: n, size: r }),
      n === "default" && [c.bg, c.text, c.border],
      n === "filled" && f,
      n === "subtle" && [k.bg, k.text],
      a,
    ),
    ...l,
    children: [
      i && e.jsx("span", { className: "shrink-0", children: o.icon }),
      e.jsx("span", { children: o.label }),
    ],
  });
}
const Se = L(
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border",
    {
      variants: {
        severity: {
          critical: "bg-red-50 text-red-700 border-red-200",
          high: "bg-orange-50 text-orange-700 border-orange-200",
          medium: "bg-amber-50 text-amber-700 border-amber-200",
          low: "bg-green-50 text-green-700 border-green-200",
        },
      },
      defaultVariants: { severity: "low" },
    },
  ),
  Re = { critical: "Crítico", high: "Alto", medium: "Médio", low: "Baixo" };
function Z({ severity: s, className: n, ...r }) {
  return e.jsx("span", {
    className: d(Se({ severity: s }), n),
    ...r,
    children: Re[s],
  });
}
const De = L(
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border",
    {
      variants: {
        type: {
          risk: "bg-red-50 text-red-700 border-red-200",
          opportunity: "bg-green-50 text-green-700 border-green-200",
        },
      },
      defaultVariants: { type: "risk" },
    },
  ),
  Ee = {
    risk: { label: "Risco", icon: "⚠️" },
    opportunity: { label: "Oportunidade", icon: "🚀" },
  };
function J({ type: s, className: n, ...r }) {
  const i = Ee[s];
  return e.jsxs("span", {
    className: d(De({ type: s }), n),
    ...r,
    children: [e.jsx("span", { className: "mr-1", children: i.icon }), i.label],
  });
}
function Y({
  item: s,
  onClick: n,
  onStatusChange: r,
  compact: i = !1,
  selected: a = !1,
  className: l,
}) {
  const o = {
    finance: "border-l-emerald-500",
    sales: "border-l-cyan-500",
    marketing: "border-l-pink-500",
    operations: "border-l-amber-500",
    people: "border-l-rose-500",
    strategy: "border-l-purple-500",
    commercial: "border-l-blue-500",
  };
  return e.jsxs(N, {
    className: d(
      "cursor-pointer transition-all duration-200 hover:shadow-md",
      "border-l-4",
      o[s.domain] || "border-l-gray-300",
      a && "ring-2 ring-primary ring-offset-2",
      l,
    ),
    onClick: n,
    children: [
      e.jsx(ee, {
        className: d("pb-3", i && "pb-2"),
        children: e.jsxs("div", {
          className: "flex items-start justify-between gap-3",
          children: [
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 flex-wrap",
                  children: [
                    e.jsx("h3", {
                      className: d(
                        "font-semibold text-foreground",
                        i ? "text-sm" : "text-base",
                      ),
                      children: s.title,
                    }),
                    e.jsx(J, { type: s.type }),
                    e.jsx(Z, { severity: s.severity }),
                  ],
                }),
                e.jsx("p", {
                  className: d("text-muted-foreground mt-1", i && "text-xs"),
                  children: s.diagnosisTerm,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col items-end gap-1.5",
              children: [
                e.jsx(W, { domain: s.domain, size: "sm", variant: "subtle" }),
                e.jsxs("div", {
                  className: "flex items-center gap-1 text-sm font-medium",
                  children: [
                    e.jsx(_, {
                      className: "h-3.5 w-3.5 text-muted-foreground",
                    }),
                    e.jsx("span", { children: s.priorityScore }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs(v, {
        className: d("pt-0", i && "pt-0 pb-3"),
        children: [
          e.jsxs("div", {
            className: d("flex items-center gap-3 flex-wrap", i && "gap-2"),
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-1.5 text-sm",
                children: [
                  e.jsx(z, {
                    className: d(
                      "h-3.5 w-3.5",
                      s.impactDirection === "increase"
                        ? "text-green-500"
                        : "text-red-500",
                    ),
                  }),
                  e.jsxs("span", {
                    className: d(
                      "font-medium",
                      s.impactDirection === "increase"
                        ? "text-green-700"
                        : "text-red-700",
                    ),
                    children: [
                      s.impactDirection === "increase" ? "+" : "-",
                      s.impactValue,
                      s.impactType === "percentage" ? "%" : "",
                    ],
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground text-xs",
                    children: s.impactCategory,
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-1.5 text-sm text-muted-foreground",
                children: [
                  e.jsx(B, { className: "h-3.5 w-3.5" }),
                  e.jsx("span", {
                    className: "text-xs",
                    children: s.timeframeLabel,
                  }),
                ],
              }),
              e.jsxs(m, {
                variant: "outline",
                className: "text-xs font-normal",
                children: [s.typicalEffortHours, "h"],
              }),
            ],
          }),
          s.suggestedLeverCodes &&
            s.suggestedLeverCodes.length > 0 &&
            e.jsxs("div", {
              className: "mt-3 pt-3 border-t",
              children: [
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mb-1.5",
                  children: "Alavancas sugeridas:",
                }),
                e.jsxs("div", {
                  className: "flex gap-1.5 flex-wrap",
                  children: [
                    s.suggestedLeverCodes
                      .slice(0, 3)
                      .map((g) =>
                        e.jsx(
                          m,
                          {
                            variant: "secondary",
                            className: "text-xs",
                            children: g,
                          },
                          g,
                        ),
                      ),
                    s.suggestedLeverCodes.length > 3 &&
                      e.jsxs(m, {
                        variant: "secondary",
                        className: "text-xs",
                        children: ["+", s.suggestedLeverCodes.length - 3],
                      }),
                  ],
                }),
              ],
            }),
          e.jsxs("div", {
            className: "mt-3 flex items-center gap-2",
            children: [
              e.jsx("div", {
                className: "flex-1",
                children: e.jsx($, {
                  value: s.aiConfidenceScore * 100,
                  className: "h-1",
                }),
              }),
              e.jsxs("span", {
                className: "text-xs text-muted-foreground",
                children: [
                  (s.aiConfidenceScore * 100).toFixed(0),
                  "% confiança",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ie = { byUser: (s) => ["organization", "user", s] };
async function Le(s, n) {
  if (n || s === "demo-user-id")
    return {
      id: "demo-org-id",
      name: "Empresa Demo",
      slug: "empresa-demo",
      createdAt: new Date().toISOString(),
    };
  const { data: r, error: i } = await I.from("organizations")
    .select("id, name, slug, created_at")
    .eq("owner_id", s)
    .single();
  if (i) {
    const { data: a, error: l } = await I.from("organizations")
      .select("id, name, slug, created_at")
      .eq("user_id", s)
      .single();
    return l
      ? (console.warn("Organization not found for user:", s), null)
      : { id: a.id, name: a.name, slug: a.slug, createdAt: a.created_at };
  }
  return { id: r.id, name: r.name, slug: r.slug, createdAt: r.created_at };
}
function _e() {
  var a, l;
  const { user: s, isDemoMode: n } = se(),
    r = (s == null ? void 0 : s.id) ?? "",
    i = Ce({
      queryKey: Ie.byUser(r),
      queryFn: () => Le(r, n),
      enabled: !!r,
      staleTime: 10 * 60 * 1e3,
      gcTime: 30 * 60 * 1e3,
    });
  return {
    organization: i.data ?? null,
    organizationId: ((a = i.data) == null ? void 0 : a.id) ?? "",
    organizationName: ((l = i.data) == null ? void 0 : l.name) ?? "",
    isLoading: i.isLoading,
    isError: i.isError,
    isDemoMode: n,
  };
}
const ze = {
  price: "Preço",
  cost: "Custo",
  volume: "Volume",
  time: "Prazo",
  quality: "Qualidade",
  process: "Processo",
  people: "Pessoas",
  technology: "Tecnologia",
  marketing: "Marketing",
  sales: "Vendas",
};
function Be(s) {
  return ze[s.toLowerCase()] ?? s;
}
const Pe = {
  finance: "from-emerald-500/10 to-emerald-500/5",
  sales: "from-cyan-500/10 to-cyan-500/5",
  marketing: "from-pink-500/10 to-pink-500/5",
  operations: "from-amber-500/10 to-amber-500/5",
  people: "from-rose-500/10 to-rose-500/5",
  strategy: "from-purple-500/10 to-purple-500/5",
  commercial: "from-blue-500/10 to-blue-500/5",
};
function Oe({
  item: s,
  open: n,
  onOpenChange: r,
  organizationId: i,
  onStatusChanged: a,
}) {
  const l = ve(),
    [o, g] = h.useState(!1);
  if (!s) return null;
  const y =
      s.status === "acknowledged" ||
      s.status === "dismissed" ||
      s.status === "resolved",
    w = Pe[s.domain] ?? "from-gray-500/10 to-gray-500/5";
  async function c() {
    g(!0);
    try {
      await l.mutateAsync({ id: s.id, dto: { status: "in_progress" } });
      const { error: x } = await I.from("action_items").insert({
        organization_id: i,
        radar_item_id: s.id,
        title: s.title,
        status: "pending",
        priority: s.severity === "critical" ? 5 : s.severity === "high" ? 4 : 3,
        notes: s.diagnosisTerm
          ? `Diagnóstico: ${s.diagnosisTerm}

Causa: ${s.diagnosisCause}`
          : null,
      });
      if (x) throw x;
      (C.success("Adicionado ao Plano de Ação!", {
        description: `"${s.title}" foi movido para execução.`,
      }),
        a == null || a(),
        r(!1));
    } catch (x) {
      (C.error("Erro ao adicionar ao plano", {
        description: "Tente novamente em alguns instantes.",
      }),
        console.error("handleAddToPlan error:", x));
    } finally {
      g(!1);
    }
  }
  async function f() {
    try {
      (await l.mutateAsync({
        id: s.id,
        dto: {
          status: "dismissed",
          customNotes: "Dispensado manualmente pelo usuário.",
        },
      }),
        C.info("Alerta dispensado", {
          description: "O item foi movido para o Histórico.",
        }),
        a == null || a(),
        r(!1));
    } catch {
      C.error("Erro ao dispensar alerta");
    }
  }
  async function k() {
    try {
      (await l.mutateAsync({ id: s.id, dto: { status: "detected" } }),
        C.success("Item reativado no Radar!"),
        a == null || a(),
        r(!1));
    } catch {
      C.error("Erro ao reativar item");
    }
  }
  return e.jsx(ae, {
    open: n,
    onOpenChange: r,
    children: e.jsxs(re, {
      side: "right",
      className: "w-full sm:max-w-[480px] overflow-y-auto p-0",
      children: [
        e.jsx("div", {
          className: d("bg-gradient-to-b p-6 pb-4", w),
          children: e.jsxs(te, {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 flex-wrap",
                    children: [
                      e.jsx(J, { type: s.type }),
                      e.jsx(Z, { severity: s.severity }),
                      y &&
                        e.jsx(m, {
                          variant: "secondary",
                          className: "text-xs bg-muted text-muted-foreground",
                          children:
                            s.status === "resolved"
                              ? "Resolvido"
                              : s.status === "acknowledged"
                                ? "Reconhecido"
                                : "Dispensado",
                        }),
                    ],
                  }),
                  e.jsx(W, { domain: s.domain, size: "sm", variant: "subtle" }),
                ],
              }),
              e.jsx(ie, {
                className: "text-xl font-bold leading-tight text-left",
                children: s.title,
              }),
              e.jsx(ne, {
                className: "text-sm text-muted-foreground text-left",
                children: s.diagnosisTerm,
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "flex flex-col gap-0 px-6 pb-24",
          children: [
            e.jsxs("section", {
              className: "py-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    e.jsx(me, { className: "h-4 w-4 text-muted-foreground" }),
                    e.jsx("span", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                      children: "Diagnóstico",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3 text-sm",
                  children: [
                    s.diagnosisCause &&
                      e.jsxs("div", {
                        className: "rounded-lg bg-muted/50 p-3",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs font-medium text-muted-foreground mb-1",
                            children: "Causa Raiz",
                          }),
                          e.jsx("p", {
                            className: "text-foreground leading-relaxed",
                            children: s.diagnosisCause,
                          }),
                        ],
                      }),
                    s.diagnosisEffect &&
                      e.jsxs("div", {
                        className:
                          "rounded-lg bg-destructive/5 border border-destructive/10 p-3",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs font-medium text-destructive/70 mb-1",
                            children: "Efeito no Negócio",
                          }),
                          e.jsx("p", {
                            className: "text-foreground leading-relaxed",
                            children: s.diagnosisEffect,
                          }),
                        ],
                      }),
                    s.diagnosisWhy &&
                      e.jsxs("div", {
                        className:
                          "rounded-lg bg-amber-500/5 border border-amber-500/10 p-3",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs font-medium text-amber-600 mb-1",
                            children: "Por quê acontece",
                          }),
                          e.jsx("p", {
                            className: "text-foreground leading-relaxed",
                            children: s.diagnosisWhy,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            e.jsx(D, {}),
            e.jsxs("section", {
              className: "py-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    e.jsx(xe, { className: "h-4 w-4 text-muted-foreground" }),
                    e.jsx("span", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                      children: "Impacto Estimado",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(z, {
                          className: d(
                            "h-5 w-5",
                            s.impactDirection === "increase"
                              ? "text-emerald-500"
                              : "text-red-500",
                          ),
                        }),
                        e.jsxs("span", {
                          className: d(
                            "text-2xl font-black",
                            s.impactDirection === "increase"
                              ? "text-emerald-600"
                              : "text-red-600",
                          ),
                          children: [
                            s.impactDirection === "increase" ? "+" : "-",
                            s.impactValue,
                            s.impactType === "percentage" ? "%" : "",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        e.jsx("span", {
                          className: "text-sm text-muted-foreground",
                          children: s.impactCategory,
                        }),
                        s.impactDescription &&
                          e.jsx("span", {
                            className: "text-xs text-muted-foreground/70",
                            children: s.impactDescription,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-3 flex gap-3",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 rounded-md bg-muted px-3 py-2",
                      children: [
                        e.jsx(B, {
                          className: "h-3.5 w-3.5 text-muted-foreground",
                        }),
                        e.jsx("span", {
                          className: "text-xs font-medium",
                          children: s.timeframeLabel,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 rounded-md bg-muted px-3 py-2",
                      children: [
                        e.jsx(_, {
                          className: "h-3.5 w-3.5 text-muted-foreground",
                        }),
                        e.jsx("span", {
                          className: "text-xs font-medium",
                          children: s.complexityLabel,
                        }),
                      ],
                    }),
                    s.typicalEffortHours > 0 &&
                      e.jsx("div", {
                        className:
                          "flex items-center gap-1.5 rounded-md bg-muted px-3 py-2",
                        children: e.jsxs("span", {
                          className: "text-xs font-medium",
                          children: [s.typicalEffortHours, "h estimadas"],
                        }),
                      }),
                  ],
                }),
              ],
            }),
            e.jsx(D, {}),
            s.suggestedLeverCodes &&
              s.suggestedLeverCodes.length > 0 &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("section", {
                    className: "py-5",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                          e.jsx(ue, {
                            className: "h-4 w-4 text-muted-foreground",
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                            children: "Alavancas Recomendadas",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: s.suggestedLeverCodes.map((x) =>
                          e.jsx(
                            m,
                            {
                              variant: "secondary",
                              className: "text-sm px-3 py-1 font-medium",
                              children: Be(x),
                            },
                            x,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsx(D, {}),
                ],
              }),
            e.jsxs("section", {
              className: "py-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    e.jsx(pe, { className: "h-4 w-4 text-muted-foreground" }),
                    e.jsx("span", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                      children: "Confiança da IA",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx($, {
                      value: s.aiConfidenceScore * 100,
                      className: "h-2 flex-1",
                    }),
                    e.jsxs("span", {
                      className:
                        "text-sm font-bold text-foreground w-12 text-right",
                      children: [(s.aiConfidenceScore * 100).toFixed(0), "%"],
                    }),
                  ],
                }),
                s.aiModelVersion &&
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground mt-1.5",
                    children: ["Modelo: ", s.aiModelVersion],
                  }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "fixed bottom-0 right-0 w-full sm:max-w-[480px] bg-background/95 backdrop-blur-sm border-t px-6 py-4 flex flex-col gap-2",
          children: y
            ? e.jsxs(T, {
                onClick: k,
                disabled: l.isPending,
                variant: "outline",
                className: "w-full gap-2",
                children: [
                  e.jsx(ge, { className: "h-4 w-4" }),
                  "Reativar no Radar",
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(T, {
                    onClick: c,
                    disabled: o || l.isPending || s.status === "in_progress",
                    className:
                      "w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-11",
                    children:
                      s.status === "in_progress"
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(G, { className: "h-4 w-4" }),
                              "Já está no Plano de Ação",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(he, { className: "h-4 w-4" }),
                              o
                                ? "Adicionando..."
                                : "Adicionar ao Plano de Ação",
                            ],
                          }),
                  }),
                  e.jsxs(T, {
                    onClick: f,
                    disabled: l.isPending,
                    variant: "ghost",
                    className:
                      "w-full gap-2 text-muted-foreground hover:text-foreground",
                    children: [
                      e.jsx(fe, { className: "h-4 w-4" }),
                      "Dispensar / Reconhecer e ignorar",
                    ],
                  }),
                ],
              }),
        }),
      ],
    }),
  });
}
function Ve() {
  return e.jsx(N, {
    className: "border-l-4 border-l-muted",
    children: e.jsxs(v, {
      className: "p-4 space-y-3",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsx(b, { className: "h-4 w-3/4" }),
            e.jsx(b, { className: "h-5 w-16 rounded-full" }),
          ],
        }),
        e.jsx(b, { className: "h-3 w-1/2" }),
        e.jsxs("div", {
          className: "flex gap-2",
          children: [
            e.jsx(b, { className: "h-5 w-20 rounded-full" }),
            e.jsx(b, { className: "h-5 w-16 rounded-full" }),
          ],
        }),
        e.jsx(b, { className: "h-1.5 w-full rounded-full" }),
      ],
    }),
  });
}
const Fe = [
    "finance",
    "commercial",
    "marketing",
    "operations",
    "people",
    "strategy",
    "technology",
    "customers",
  ],
  Me = ["detected", "acknowledged", "in_progress"],
  qe = ["resolved", "dismissed"],
  es = () => {
    const { organizationId: s, isDemoMode: n } = _e(),
      [r, i] = h.useState(Fe),
      [a, l] = h.useState("all"),
      [o, g] = h.useState(null),
      [y, w] = h.useState(!1),
      {
        data: c = [],
        isLoading: f,
        isError: k,
        refetch: x,
        isFetching: P,
      } = ye(s),
      { data: O } = we(s),
      K = ke(),
      j = h.useMemo(() => c.filter((t) => Me.includes(t.status)), [c]),
      S = h.useMemo(() => c.filter((t) => qe.includes(t.status)), [c]),
      R = h.useMemo(
        () =>
          (a === "history" ? S : j)
            .filter((p) =>
              r.includes(p.domain)
                ? a === "risks"
                  ? p.type === "risk"
                  : a === "opportunities"
                    ? p.type === "opportunity"
                    : a === "critical"
                      ? p.severity === "critical" || p.severity === "high"
                      : !0
                : !1,
            )
            .sort((p, F) => {
              const M = { critical: 4, high: 3, medium: 2, low: 1 },
                X = (M[p.severity] ?? 0) * 100 + (p.priorityScore ?? 0);
              return (M[F.severity] ?? 0) * 100 + (F.priorityScore ?? 0) - X;
            }),
        [c, j, S, r, a],
      ),
      u = h.useMemo(
        () => ({
          total: j.length,
          risks: j.filter((t) => t.type === "risk").length,
          opportunities: j.filter((t) => t.type === "opportunity").length,
          critical: j.filter(
            (t) => t.severity === "critical" || t.severity === "high",
          ).length,
          history: S.length,
        }),
        [j, S],
      );
    function V(t) {
      (g(t), w(!0));
    }
    function Q() {
      s && K(s);
    }
    return k
      ? e.jsxs("div", {
          className:
            "p-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[400px] gap-4",
          children: [
            e.jsx("div", {
              className: "p-4 rounded-full bg-destructive/10",
              children: e.jsx(E, { className: "h-8 w-8 text-destructive" }),
            }),
            e.jsx("h3", {
              className: "text-lg font-semibold",
              children: "Erro ao carregar o Radar",
            }),
            e.jsx("p", {
              className: "text-muted-foreground text-sm text-center max-w-md",
              children:
                "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.",
            }),
            e.jsxs(T, {
              onClick: () => x(),
              variant: "outline",
              className: "gap-2",
              children: [
                e.jsx(q, { className: "h-4 w-4" }),
                "Tentar novamente",
              ],
            }),
          ],
        })
      : e.jsxs("div", {
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
                          children: e.jsx(be, {
                            className: "h-8 w-8 text-primary",
                          }),
                        }),
                        "Radar",
                        n &&
                          e.jsx(m, {
                            variant: "outline",
                            className:
                              "text-xs font-normal border-amber-300 text-amber-600 bg-amber-50",
                            children: "Modo Demo",
                          }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground font-medium",
                      children:
                        "Alertas inteligentes de Riscos e Oportunidades detectados pela IA",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-3",
                  children: f
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(b, {
                            className: "h-[60px] w-[80px] rounded-xl",
                          }),
                          e.jsx(b, {
                            className: "h-[60px] w-[80px] rounded-xl",
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(N, {
                            className: "bg-red-50 border-red-200",
                            children: e.jsxs(v, {
                              className: "p-3 flex items-center gap-2",
                              children: [
                                e.jsx(E, { className: "h-5 w-5 text-red-600" }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-lg font-bold text-red-700",
                                      children: u.risks,
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
                          e.jsx(N, {
                            className: "bg-emerald-50 border-emerald-200",
                            children: e.jsxs(v, {
                              className: "p-3 flex items-center gap-2",
                              children: [
                                e.jsx(H, {
                                  className: "h-5 w-5 text-emerald-600",
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-lg font-bold text-emerald-700",
                                      children: u.opportunities,
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
                          u.critical > 0 &&
                            e.jsx(N, {
                              className: d(
                                "bg-red-100 border-red-300",
                                u.critical > 0 && "animate-pulse",
                              ),
                              children: e.jsxs(v, {
                                className: "p-3 flex items-center gap-2",
                                children: [
                                  e.jsx(z, {
                                    className: "h-5 w-5 text-red-600",
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-lg font-bold text-red-700",
                                        children: u.critical,
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
                }),
              ],
            }),
            e.jsx(ce, { selected: r, onChange: i }),
            e.jsxs(le, {
              value: a,
              onValueChange: l,
              className: "w-full",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    e.jsxs(de, {
                      className:
                        "w-full sm:w-auto grid grid-cols-3 sm:grid-cols-6 gap-1",
                      children: [
                        e.jsxs(A, {
                          value: "all",
                          className: "gap-1.5",
                          children: [
                            e.jsx(je, { className: "h-3.5 w-3.5" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Todos",
                            }),
                            e.jsx(m, {
                              variant: "secondary",
                              className: "ml-1 text-xs",
                              children: u.total,
                            }),
                          ],
                        }),
                        e.jsxs(A, {
                          value: "risks",
                          className: "gap-1.5",
                          children: [
                            e.jsx(E, { className: "h-3.5 w-3.5" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Riscos",
                            }),
                            e.jsx(m, {
                              variant: "secondary",
                              className: "ml-1 text-xs bg-red-100 text-red-700",
                              children: u.risks,
                            }),
                          ],
                        }),
                        e.jsxs(A, {
                          value: "opportunities",
                          className: "gap-1.5",
                          children: [
                            e.jsx(H, { className: "h-3.5 w-3.5" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Oportunidades",
                            }),
                            e.jsx(m, {
                              variant: "secondary",
                              className:
                                "ml-1 text-xs bg-emerald-100 text-emerald-700",
                              children: u.opportunities,
                            }),
                          ],
                        }),
                        e.jsxs(A, {
                          value: "critical",
                          className: "gap-1.5",
                          children: [
                            e.jsx(_, { className: "h-3.5 w-3.5" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Alta Prioridade",
                            }),
                            e.jsx(m, {
                              variant: "secondary",
                              className:
                                "ml-1 text-xs bg-amber-100 text-amber-700",
                              children: u.critical,
                            }),
                          ],
                        }),
                        e.jsxs(A, {
                          value: "history",
                          className: "gap-1.5",
                          children: [
                            e.jsx(U, { className: "h-3.5 w-3.5" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Histórico",
                            }),
                            e.jsx(m, {
                              variant: "secondary",
                              className:
                                "ml-1 text-xs bg-muted text-muted-foreground",
                              children: u.history,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(T, {
                      variant: "ghost",
                      size: "sm",
                      className: "gap-1.5 shrink-0",
                      onClick: () => x(),
                      disabled: P,
                      children: [
                        e.jsx(q, {
                          className: d("h-4 w-4", P && "animate-spin"),
                        }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Atualizar",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(oe, {
                  value: a,
                  className: "mt-6",
                  children: [
                    f &&
                      e.jsx("div", {
                        className: "grid grid-cols-1 xl:grid-cols-2 gap-4",
                        children: Array.from({ length: 4 }).map((t, p) =>
                          e.jsx(Ve, {}, p),
                        ),
                      }),
                    !f &&
                      a === "history" &&
                      e.jsx("div", {
                        className: "space-y-3",
                        children:
                          R.length === 0
                            ? e.jsx(N, {
                                className: "border-dashed",
                                children: e.jsxs(v, {
                                  className: "p-12 text-center",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-3",
                                      children: e.jsx(U, {
                                        className:
                                          "h-6 w-6 text-muted-foreground",
                                      }),
                                    }),
                                    e.jsx("h3", {
                                      className: "text-base font-semibold mb-1",
                                      children: "Sem histórico ainda",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children:
                                        "Itens dispensados ou resolvidos aparecerão aqui.",
                                    }),
                                  ],
                                }),
                              })
                            : R.map((t) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "opacity-60 hover:opacity-100 transition-opacity duration-200",
                                    children: e.jsx(Y, {
                                      item: t,
                                      compact: !0,
                                      onClick: () => V(t),
                                    }),
                                  },
                                  t.id,
                                ),
                              ),
                      }),
                    !f &&
                      a !== "history" &&
                      e.jsx(e.Fragment, {
                        children:
                          R.length === 0
                            ? e.jsx(N, {
                                className: "border-dashed",
                                children: e.jsxs(v, {
                                  className: "p-12 text-center",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                                      children: e.jsx(G, {
                                        className:
                                          "h-8 w-8 text-muted-foreground",
                                      }),
                                    }),
                                    e.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-foreground mb-2",
                                      children: "Tudo tranquilo no radar",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-muted-foreground max-w-md mx-auto text-sm",
                                      children: s
                                        ? "Nenhum alerta corresponde aos filtros selecionados. Ajuste os filtros ou aguarde novas análises da IA."
                                        : "Conectando à sua organização...",
                                    }),
                                  ],
                                }),
                              })
                            : e.jsx("div", {
                                className:
                                  "grid grid-cols-1 xl:grid-cols-2 gap-4",
                                children: R.map((t) =>
                                  e.jsx(
                                    Y,
                                    {
                                      item: t,
                                      onClick: () => V(t),
                                      selected:
                                        (o == null ? void 0 : o.id) === t.id,
                                      className:
                                        "animate-in slide-in-from-bottom-4 duration-300",
                                    },
                                    t.id,
                                  ),
                                ),
                              }),
                      }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "pt-4 border-t",
              children: e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted-foreground",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(Ne, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        children: O
                          ? `${O.active_items_count} itens ativos`
                          : "Carregando dados do dashboard...",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx(B, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        children: "Atualizado automaticamente a cada 2 minutos",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(Oe, {
              item: o,
              open: y,
              onOpenChange: w,
              organizationId: s,
              onStatusChanged: Q,
            }),
          ],
        });
  };
export { es as default };
