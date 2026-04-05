import { j as s } from "./vendor-data-DuuuwLk5.js";
import { B as d, s as i } from "./index-CaCe4Bjh.js";
import { C as c, a as u } from "./card-CTs8HHrG.js";
const x = ({
  icon: r,
  title: a,
  description: t,
  actionLabel: e,
  onAction: o,
  className: n = "",
}) =>
  s.jsx(c, {
    className: `border-dashed border-2 bg-muted/10 shadow-none py-12 ${n}`,
    children: s.jsxs(u, {
      className: "flex flex-col items-center text-center space-y-4",
      children: [
        s.jsx("div", {
          className:
            "p-4 bg-background rounded-2xl shadow-sm border border-border/50 text-muted-foreground/40",
          children: s.jsx(r, { className: "h-10 w-10" }),
        }),
        s.jsxs("div", {
          className: "max-w-xs space-y-2",
          children: [
            s.jsx("h3", {
              className: "text-xl font-bold tracking-tight",
              children: a,
            }),
            s.jsx("p", {
              className: "text-sm text-muted-foreground leading-relaxed",
              children: t,
            }),
          ],
        }),
        e &&
          o &&
          s.jsx(d, {
            onClick: o,
            className:
              "mt-2 font-bold shadow-md bg-primary hover:bg-primary/90",
            children: e,
          }),
      ],
    }),
  });
async function y(r) {
  const { data: a, error: t } = await i
    .from("radar_items")
    .select("*")
    .eq("organization_id", r)
    .order("priority_score", { ascending: !1 });
  return t
    ? (console.error("Error fetching priorities:", t), [])
    : (a || []).map((e) => {
        const o = l(e);
        return {
          id: e.id,
          diagnosticId: e.diagnosis_code,
          title: e.title,
          explanation: e.resolution_summary || e.custom_notes || "",
          level: p(e.severity),
          score: o,
          status: g(e.status),
          createdAt: e.created_at,
        };
      });
}
async function b(r) {
  const { data: a, error: t } = await i
    .from("action_items")
    .select("*")
    .eq("organization_id", r)
    .order("created_at", { ascending: !1 });
  return t
    ? (console.error("Error fetching actions:", t), [])
    : (a || []).map((e) => ({
        id: e.id,
        priorityId: e.radar_item_id || "",
        title: e.title,
        description: e.notes || "",
        status: m(e.status),
        dueDate: e.due_date || void 0,
        assignedTo: e.assigned_to || void 0,
        createdAt: e.created_at,
        updatedAt: e.updated_at,
      }));
}
async function w(r, a) {
  const t = {
      pending: "pending",
      in_progress: "in_progress",
      completed: "completed",
      blocked: "in_progress",
    },
    { error: e } = await i
      .from("action_items")
      .update({ status: t[a], updated_at: new Date().toISOString() })
      .eq("id", r);
  return e ? (console.error("Error updating action status:", e), !1) : !0;
}
function l(r) {
  const a = Math.min(10, Math.max(1, Math.round(r.priority_score / 10))),
    t =
      r.severity === "critical"
        ? 10
        : r.severity === "high"
          ? 8
          : r.severity === "medium"
            ? 5
            : 2,
    e = 5,
    o = Math.round((r.ai_confidence_score || 0.8) * 10),
    n = Math.round((a * t * o) / e);
  return {
    impact: a,
    urgency: t,
    effort: e,
    confidence: o,
    calculatedValue: n,
  };
}
function p(r) {
  switch (r) {
    case "critical":
    case "high":
      return "high";
    case "medium":
      return "medium";
    default:
      return "low";
  }
}
function g(r) {
  switch (r) {
    case "acknowledged":
    case "in_progress":
      return "validated";
    case "dismissed":
      return "dismissed";
    default:
      return "suggested";
  }
}
function m(r) {
  switch (r) {
    case "in_progress":
      return "in_progress";
    case "completed":
      return "completed";
    case "cancelled":
      return "blocked";
    default:
      return "pending";
  }
}
export { x as E, b as a, y as g, w as u };
