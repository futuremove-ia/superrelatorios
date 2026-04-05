import { j as e } from "./vendor-radix-C8JHQxE0.js";
import { r as h } from "./vendor-react-Ju9LKgAZ.js";
import { u as Q } from "./useCurrentOrganization-CMbUnvon.js";
import { u as K, b as L, d as V } from "./vendor-data-BixP7Wq-.js";
import { s as q, u as $, d as Z, B as U } from "./index-DF8MdIXV.js";
import { C as g, a as f } from "./card-BOBgEvG6.js";
import { T as W, a as G, b as y, c as H } from "./tabs-CqiEkaFQ.js";
import { B as v } from "./badge-DMwHsW7P.js";
import { A as Y } from "./ActionableCard-Ba9NpiJk.js";
import { D as J } from "./DomainTag-BVQlWMxA.js";
import {
  az as X,
  T as I,
  f as O,
  Z as P,
  ai as ee,
  d as ae,
  O as se,
  h as te,
  n as ie,
} from "./vendor-utils-BdCfJOxW.js";
const B = {
  active: (t) => ["radar_items", t, "active"],
  history: (t) => ["radar_items", t, "history"],
  byId: (t) => ["radar_items", t],
};
function re(t) {
  return K({
    queryKey: B.active(t),
    queryFn: async () => {
      const { data: n, error: s } = await q
        .from("radar_items")
        .select(
          `
          *,
          library_diagnoses!radar_items_diagnosis_code_fkey (
            technical_term,
            cause,
            effect,
            why
          ),
          library_impacts!radar_items_impact_code_fkey (
            label,
            label_en,
            value,
            value_en,
            category,
            direction
          ),
          library_timeframes!radar_items_timeframe_code_fkey (
            label,
            label_en,
            months
          ),
          library_complexities!radar_items_complexity_code_fkey (
            label,
            label_en,
            effort_hours
          ),
          radar_item_suggested_levers (
            lever_code,
            priority,
            is_primary,
            confidence_score
          )
        `,
        )
        .eq("organization_id", t)
        .in("status", ["detected", "in_progress"])
        .order("priority_score", { ascending: !1 });
      if (s) throw s;
      return n || [];
    },
    enabled: !!t,
    staleTime: 2 * 60 * 1e3,
  });
}
function oe() {
  const t = L();
  return V({
    mutationFn: async ({ id: n, dto: s }) => {
      const d = { status: s.status, updated_at: new Date().toISOString() };
      (s.customNotes !== void 0 && (d.custom_notes = s.customNotes),
        s.status === "acknowledged"
          ? (d.acknowledged_at = new Date().toISOString())
          : s.status === "in_progress"
            ? (d.started_at = new Date().toISOString())
            : s.status === "resolved"
              ? (d.resolved_at = new Date().toISOString())
              : s.status === "dismissed" &&
                (d.dismissed_at = new Date().toISOString()));
      const { data: _, error: r } = await q
        .from("radar_items")
        .update(d)
        .eq("id", n)
        .select()
        .single();
      if (r) throw r;
      return _;
    },
    onSuccess: (n, s) => {
      (t.invalidateQueries({ queryKey: ["radar_items"] }),
        t.setQueryData(B.byId(s.id), n));
    },
  });
}
(new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3).toISOString(),
  new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3).toISOString(),
  new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3).toISOString(),
  new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3).toISOString());
const ye = () => {
  $();
  const { toast: t } = Z(),
    { organizationId: n } = Q(),
    { data: s, isLoading: d, error: _ } = re(n),
    [r, z] = h.useState([
      "finance",
      "commercial",
      "operations",
      "strategy",
      "marketing",
    ]),
    [u, E] = h.useState("all"),
    p = h.useMemo(
      () =>
        !s || s.length === 0
          ? []
          : s.map((a) => {
              var c, l, m, i, j, w, C, S, A, T, k, R, D;
              return {
                id: a.id,
                type: a.type,
                priority:
                  a.severity === "critical" || a.severity === "high"
                    ? "high"
                    : a.severity === "medium"
                      ? "medium"
                      : "low",
                domain: a.domain,
                urgency:
                  (((c = a.timeframe) == null ? void 0 : c.months) || 0) <= 1
                    ? "immediate"
                    : (((l = a.timeframe) == null ? void 0 : l.months) || 0) <=
                        3
                      ? "short_term"
                      : "medium_term",
                alert: {
                  id: a.id,
                  title: ((m = a.impact) == null ? void 0 : m.label) || "Alert",
                  description:
                    ((i = a.impact) == null ? void 0 : i.value) || "",
                  severity: a.severity,
                  domain: a.domain,
                  metrics: [],
                },
                diagnosis: {
                  id: a.diagnosis_code,
                  technicalTerm:
                    ((j = a.diagnosis) == null ? void 0 : j.technical_term) ||
                    "",
                  cause: ((w = a.diagnosis) == null ? void 0 : w.cause) || "",
                  effect: ((C = a.diagnosis) == null ? void 0 : C.effect) || "",
                  why: ((S = a.diagnosis) == null ? void 0 : S.why) || "",
                  dataSources: [],
                },
                recommendation: {
                  id: a.id,
                  title: ((A = a.impact) == null ? void 0 : A.label) || "",
                  description:
                    ((T = a.impact) == null ? void 0 : T.value) || "",
                  expectedImpact:
                    ((k = a.impact) == null ? void 0 : k.value) || "",
                  timeframe:
                    ((R = a.timeframe) == null ? void 0 : R.label) || "",
                  complexity:
                    ((D = a.complexity) == null ? void 0 : D.label) || "medium",
                  confidence: a.ai_confidence_score || 0,
                  levers: (a.suggested_levers || []).map((b) => ({
                    type: b.lever_code,
                    label: b.lever_code,
                    impact: b.is_primary ? "high" : "medium",
                  })),
                },
                createdAt: a.detected_at || a.created_at,
                status: a.status,
              };
            }),
      [s],
    ),
    x = h.useMemo(
      () =>
        p
          .filter((a) =>
            r.includes(a.domain)
              ? u === "risks"
                ? a.type === "risk"
                : u === "opportunities"
                  ? a.type === "opportunity"
                  : u === "high"
                    ? a.priority === "high"
                    : !0
              : !1,
          )
          .sort((a, c) => {
            const l = { high: 3, medium: 2, low: 1 },
              m = { immediate: 3, short_term: 2, medium_term: 1 },
              i = l[a.priority] * 10 + m[a.urgency];
            return l[c.priority] * 10 + m[c.urgency] - i;
          }),
      [p, r, u],
    ),
    o = h.useMemo(() => {
      const a = p.filter((i) => i.type === "risk" && r.includes(i.domain)),
        c = p.filter((i) => i.type === "opportunity" && r.includes(i.domain)),
        l = p.filter((i) => i.priority === "high" && r.includes(i.domain)),
        m = a.filter((i) => i.alert.severity === "critical");
      return {
        total: x.length,
        risks: a.length,
        opportunities: c.length,
        highPriority: l.length,
        critical: m.length,
      };
    }, [p, r, x.length]),
    N = oe(),
    F = (a) => {
      (t({
        title: "Adicionado ao Plano",
        description: "Ação adicionada à Lista de Execução.",
      }),
        N.mutate({ id: a, dto: { status: "in_progress" } }));
    },
    M = (a) => {
      (t({
        title: "Alerta dispensado",
        description: "O item foi marcado como reconhecido.",
      }),
        N.mutate({ id: a, dto: { status: "acknowledged" } }));
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
                    children: e.jsx(X, { className: "h-8 w-8 text-primary" }),
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
              e.jsx(g, {
                className: "bg-red-50 border-red-200",
                children: e.jsxs(f, {
                  className: "p-3 flex items-center gap-2",
                  children: [
                    e.jsx(I, { className: "h-5 w-5 text-red-600" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-lg font-bold text-red-700",
                          children: o.risks,
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
              e.jsx(g, {
                className: "bg-emerald-50 border-emerald-200",
                children: e.jsxs(f, {
                  className: "p-3 flex items-center gap-2",
                  children: [
                    e.jsx(O, { className: "h-5 w-5 text-emerald-600" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-lg font-bold text-emerald-700",
                          children: o.opportunities,
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
              o.critical > 0 &&
                e.jsx(g, {
                  className: "bg-red-100 border-red-300 animate-pulse",
                  children: e.jsxs(f, {
                    className: "p-3 flex items-center gap-2",
                    children: [
                      e.jsx(P, { className: "h-5 w-5 text-red-600" }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("div", {
                            className: "text-lg font-bold text-red-700",
                            children: o.critical,
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
          e.jsx(J, { selected: r, onChange: z }),
          e.jsxs(W, {
            value: u,
            onValueChange: E,
            className: "w-full",
            children: [
              e.jsxs(G, {
                className:
                  "w-full sm:w-auto grid grid-cols-2 sm:grid-cols-5 gap-1",
                children: [
                  e.jsxs(y, {
                    value: "all",
                    className: "gap-2",
                    children: [
                      e.jsx(ee, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Todos",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1",
                        children: o.total,
                      }),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "risks",
                    className: "gap-2",
                    children: [
                      e.jsx(I, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Riscos",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1 bg-red-100 text-red-700",
                        children: o.risks,
                      }),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "opportunities",
                    className: "gap-2",
                    children: [
                      e.jsx(O, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Oportunidades",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1 bg-emerald-100 text-emerald-700",
                        children: o.opportunities,
                      }),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "high",
                    className: "gap-2",
                    children: [
                      e.jsx(ae, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Alta Prioridade",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1 bg-amber-100 text-amber-700",
                        children: o.highPriority,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(H, {
                value: u,
                className: "mt-6",
                children:
                  x.length === 0
                    ? e.jsx(g, {
                        className: "border-dashed",
                        children: e.jsxs(f, {
                          className: "p-12 text-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
                              children: e.jsx(se, {
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
                        children: x.map((a) =>
                          e.jsx(
                            Y,
                            { item: a, onAddToPlan: F, onDismiss: M },
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
                e.jsx(te, { className: "h-4 w-4" }),
                e.jsxs("span", {
                  children: [
                    "Última análise: ",
                    e.jsx("strong", { children: "Hoje às 08:30" }),
                    " | Próxima:",
                    " ",
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
                    e.jsx(ie, { className: "h-4 w-4" }),
                    "Radar atualiza a cada 6 horas",
                  ],
                }),
                e.jsxs(U, {
                  variant: "ghost",
                  size: "sm",
                  className: "gap-1",
                  children: [
                    e.jsx(P, { className: "h-4 w-4" }),
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
export { ye as default };
