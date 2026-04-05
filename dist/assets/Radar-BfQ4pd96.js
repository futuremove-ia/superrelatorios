import { u as K, e as L, f as V, j as e } from "./vendor-data-DuuuwLk5.js";
import { r as h } from "./vendor-react-DfYPWlel.js";
import { u as $ } from "./useCurrentOrganization-DeW0zOch.js";
import { s as B, u as Z, d as U, B as W } from "./index-CaCe4Bjh.js";
import { C as g, a as f } from "./card-CTs8HHrG.js";
import { T as G, a as H, b as y, c as Y } from "./tabs-CkbjXF9b.js";
import { B as v } from "./badge-Dl11-P0M.js";
import { A as J } from "./ActionableCard-CBVR-lVr.js";
import { D as X } from "./DomainTag-o49RK1qJ.js";
import {
  aA as ee,
  T as O,
  f as P,
  Z as q,
  ai as ae,
  d as se,
  O as te,
  h as ie,
  n as re,
} from "./vendor-utils-CGetvm_l.js";
import "./vendor-radix-CfL9Rjb9.js";
const z = {
  active: (i) => ["radar_items", i, "active"],
  history: (i) => ["radar_items", i, "history"],
  byId: (i) => ["radar_items", i],
};
function oe(i) {
  return K({
    queryKey: z.active(i),
    queryFn: async () => {
      const { data: o, error: t } = await B.from("radar_items")
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
        .eq("organization_id", i)
        .in("status", ["detected", "in_progress"])
        .order("priority_score", { ascending: !1 });
      if (t) throw t;
      return o || [];
    },
    enabled: !!i,
    staleTime: 2 * 60 * 1e3,
  });
}
function ne() {
  const i = L();
  return V({
    mutationFn: async ({ id: o, dto: t }) => {
      const r = { status: t.status, updated_at: new Date().toISOString() };
      (t.customNotes !== void 0 && (r.custom_notes = t.customNotes),
        t.status === "acknowledged"
          ? (r.acknowledged_at = new Date().toISOString())
          : t.status === "in_progress"
            ? (r.started_at = new Date().toISOString())
            : t.status === "resolved"
              ? (r.resolved_at = new Date().toISOString())
              : t.status === "dismissed" &&
                (r.dismissed_at = new Date().toISOString()));
      const { data: N, error: j } = await B.from("radar_items")
        .update(r)
        .eq("id", o)
        .select()
        .single();
      if (j) throw j;
      return N;
    },
    onSuccess: (o, t) => {
      (i.invalidateQueries({ queryKey: ["radar_items"] }),
        i.setQueryData(z.byId(t.id), o));
    },
  });
}
(new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3).toISOString(),
  new Date(Date.now() - 1 * 24 * 60 * 60 * 1e3).toISOString(),
  new Date(Date.now() - 5 * 24 * 60 * 60 * 1e3).toISOString(),
  new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3).toISOString());
const ve = () => {
  const { t: i } = Z(),
    { toast: o } = U(),
    { organizationId: t } = $(),
    { data: r, isLoading: N, error: j } = oe(t),
    [d, E] = h.useState([
      "finance",
      "commercial",
      "operations",
      "strategy",
      "marketing",
    ]),
    [u, F] = h.useState("all"),
    p = h.useMemo(
      () =>
        !r || r.length === 0
          ? []
          : r.map((a) => {
              var c, l, m, s, b, C, S, A, T, k, R, D, I;
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
                    ((s = a.impact) == null ? void 0 : s.value) || "",
                  severity: a.severity,
                  domain: a.domain,
                  metrics: [],
                },
                diagnosis: {
                  id: a.diagnosis_code,
                  technicalTerm:
                    ((b = a.diagnosis) == null ? void 0 : b.technical_term) ||
                    "",
                  cause: ((C = a.diagnosis) == null ? void 0 : C.cause) || "",
                  effect: ((S = a.diagnosis) == null ? void 0 : S.effect) || "",
                  why: ((A = a.diagnosis) == null ? void 0 : A.why) || "",
                  dataSources: [],
                },
                recommendation: {
                  id: a.id,
                  title: ((T = a.impact) == null ? void 0 : T.label) || "",
                  description:
                    ((k = a.impact) == null ? void 0 : k.value) || "",
                  expectedImpact:
                    ((R = a.impact) == null ? void 0 : R.value) || "",
                  timeframe:
                    ((D = a.timeframe) == null ? void 0 : D.label) || "",
                  complexity:
                    ((I = a.complexity) == null ? void 0 : I.label) || "medium",
                  confidence: a.ai_confidence_score || 0,
                  levers: (a.suggested_levers || []).map((_) => ({
                    type: _.lever_code,
                    label: _.lever_code,
                    impact: _.is_primary ? "high" : "medium",
                  })),
                },
                createdAt: a.detected_at || a.created_at,
                status: a.status,
              };
            }),
      [r],
    ),
    x = h.useMemo(
      () =>
        p
          .filter((a) =>
            d.includes(a.domain)
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
              s = l[a.priority] * 10 + m[a.urgency];
            return l[c.priority] * 10 + m[c.urgency] - s;
          }),
      [p, d, u],
    ),
    n = h.useMemo(() => {
      const a = p.filter((s) => s.type === "risk" && d.includes(s.domain)),
        c = p.filter((s) => s.type === "opportunity" && d.includes(s.domain)),
        l = p.filter((s) => s.priority === "high" && d.includes(s.domain)),
        m = a.filter((s) => s.alert.severity === "critical");
      return {
        total: x.length,
        risks: a.length,
        opportunities: c.length,
        highPriority: l.length,
        critical: m.length,
      };
    }, [p, d, x.length]),
    w = ne(),
    M = (a) => {
      (o({
        title: "Adicionado ao Plano",
        description: "Ação adicionada à Lista de Execução.",
      }),
        w.mutate({ id: a, dto: { status: "in_progress" } }));
    },
    Q = (a) => {
      (o({
        title: "Alerta dispensado",
        description: "O item foi marcado como reconhecido.",
      }),
        w.mutate({ id: a, dto: { status: "acknowledged" } }));
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
                    children: e.jsx(ee, { className: "h-8 w-8 text-primary" }),
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
                    e.jsx(O, { className: "h-5 w-5 text-red-600" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-lg font-bold text-red-700",
                          children: n.risks,
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
                    e.jsx(P, { className: "h-5 w-5 text-emerald-600" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-lg font-bold text-emerald-700",
                          children: n.opportunities,
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
              n.critical > 0 &&
                e.jsx(g, {
                  className: "bg-red-100 border-red-300 animate-pulse",
                  children: e.jsxs(f, {
                    className: "p-3 flex items-center gap-2",
                    children: [
                      e.jsx(q, { className: "h-5 w-5 text-red-600" }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("div", {
                            className: "text-lg font-bold text-red-700",
                            children: n.critical,
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
          e.jsx(X, { selected: d, onChange: E }),
          e.jsxs(G, {
            value: u,
            onValueChange: F,
            className: "w-full",
            children: [
              e.jsxs(H, {
                className:
                  "w-full sm:w-auto grid grid-cols-2 sm:grid-cols-5 gap-1",
                children: [
                  e.jsxs(y, {
                    value: "all",
                    className: "gap-2",
                    children: [
                      e.jsx(ae, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Todos",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1",
                        children: n.total,
                      }),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "risks",
                    className: "gap-2",
                    children: [
                      e.jsx(O, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Riscos",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1 bg-red-100 text-red-700",
                        children: n.risks,
                      }),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "opportunities",
                    className: "gap-2",
                    children: [
                      e.jsx(P, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Oportunidades",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1 bg-emerald-100 text-emerald-700",
                        children: n.opportunities,
                      }),
                    ],
                  }),
                  e.jsxs(y, {
                    value: "high",
                    className: "gap-2",
                    children: [
                      e.jsx(se, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Alta Prioridade",
                      }),
                      e.jsx(v, {
                        variant: "secondary",
                        className: "ml-1 bg-amber-100 text-amber-700",
                        children: n.highPriority,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Y, {
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
                              children: e.jsx(te, {
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
                            J,
                            { item: a, onAddToPlan: M, onDismiss: Q },
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
                e.jsx(ie, { className: "h-4 w-4" }),
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
                    e.jsx(re, { className: "h-4 w-4" }),
                    "Radar atualiza a cada 6 horas",
                  ],
                }),
                e.jsxs(W, {
                  variant: "ghost",
                  size: "sm",
                  className: "gap-1",
                  children: [
                    e.jsx(q, { className: "h-4 w-4" }),
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
export { ve as default };
