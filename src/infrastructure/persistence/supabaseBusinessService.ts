import { supabase } from "@/lib/supabase";
import { Diagnostic, Priority, Action, ActionPlan } from "@/types/business";

// ============================================================
// TYPES (matching Supabase schema)
// ============================================================

interface RadarItemRow {
  id: string;
  organization_id: string;
  type: "risk" | "opportunity";
  title: string;
  diagnosis_code: string;
  impact_code: string;
  timeframe_code: string;
  complexity_code: string;
  severity: "low" | "medium" | "high" | "critical";
  priority_score: number;
  domain: string;
  status:
    | "detected"
    | "acknowledged"
    | "in_progress"
    | "resolved"
    | "dismissed";
  detected_at: string;
  acknowledged_at: string | null;
  started_at: string | null;
  resolved_at: string | null;
  dismissed_at: string | null;
  expires_at: string | null;
  detected_in_report_id: string | null;
  source_type: string;
  ai_confidence_score: number;
  ai_model_version: string | null;
  ai_raw_analysis: Record<string, unknown> | null;
  custom_notes: string | null;
  actual_resolution_days: number | null;
  resolution_summary: string | null;
  resolution_impact_value: number | null;
  created_at: string;
  updated_at: string;
}

interface ActionItemRow {
  id: string;
  organization_id: string;
  radar_item_id: string | null;
  title: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  priority: number;
  assigned_to: string | null;
  due_date: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

// ============================================================
// SERVICE FUNCTIONS
// ============================================================

export async function getDiagnosticsByOrganization(
  organizationId: string,
): Promise<Diagnostic[]> {
  const { data, error } = await supabase
    .from("radar_items")
    .select("*")
    .eq("organization_id", organizationId)
    .eq("type", "risk")
    .order("priority_score", { ascending: false });

  if (error) {
    console.error("Error fetching diagnostics:", error);
    return [];
  }

  return ((data as RadarItemRow[]) || []).map((item) => ({
    id: item.id,
    reportId: item.detected_in_report_id || "",
    title: item.title,
    description:
      item.custom_notes || (item.ai_raw_analysis?.description as string) || "",
    causes: (item.ai_raw_analysis?.causes as string[]) || [],
    implications: (item.ai_raw_analysis?.implications as string[]) || [],
    createdAt: item.created_at,
  }));
}

export async function getPrioritiesByOrganization(
  organizationId: string,
): Promise<Priority[]> {
  const { data, error } = await supabase
    .from("radar_items")
    .select("*")
    .eq("organization_id", organizationId)
    .order("priority_score", { ascending: false });

  if (error) {
    console.error("Error fetching priorities:", error);
    return [];
  }

  return ((data as RadarItemRow[]) || []).map((item) => {
    const score = calculatePriorityScore(item);
    return {
      id: item.id,
      diagnosticId: item.diagnosis_code,
      title: item.title,
      explanation: item.resolution_summary || item.custom_notes || "",
      level: mapSeverityToLevel(item.severity),
      score,
      status: mapRadarStatusToPriorityStatus(item.status),
      createdAt: item.created_at,
    };
  });
}

export async function getActionsByOrganization(
  organizationId: string,
): Promise<Action[]> {
  const { data, error } = await supabase
    .from("action_items")
    .select("*")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching actions:", error);
    return [];
  }

  return ((data as ActionItemRow[]) || []).map((item) => ({
    id: item.id,
    priorityId: item.radar_item_id || "",
    title: item.title,
    description: item.notes || "",
    status: mapActionStatus(item.status),
    dueDate: item.due_date || undefined,
    assignedTo: item.assigned_to || undefined,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  }));
}

export async function createActionPlan(
  organizationId: string,
  title: string,
  description: string,
  radarItemIds: string[],
): Promise<ActionPlan | null> {
  // Create action items for each radar item
  const actionItems = radarItemIds.map((radarItemId) => ({
    organization_id: organizationId,
    radar_item_id: radarItemId,
    title,
    status: "pending" as const,
    priority: 3,
    notes: description,
  }));

  const { data, error } = await supabase
    .from("action_items")
    .insert(actionItems)
    .select();

  if (error) {
    console.error("Error creating action plan:", error);
    return null;
  }

  const actions = ((data as ActionItemRow[]) || []).map((item) => ({
    id: item.id,
    priorityId: item.radar_item_id || "",
    title: item.title,
    description: item.notes || "",
    status: mapActionStatus(item.status),
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  }));

  return {
    id: crypto.randomUUID(),
    title,
    description,
    actions,
    status: "active",
    createdAt: new Date().toISOString(),
  };
}

export async function updateActionStatus(
  actionId: string,
  status: Action["status"],
): Promise<boolean> {
  const statusMap: Record<Action["status"], string> = {
    pending: "pending",
    in_progress: "in_progress",
    completed: "completed",
    blocked: "in_progress",
  };

  const { error } = await supabase
    .from("action_items")
    .update({
      status: statusMap[status],
      updated_at: new Date().toISOString(),
    })
    .eq("id", actionId);

  if (error) {
    console.error("Error updating action status:", error);
    return false;
  }

  return true;
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function calculatePriorityScore(item: RadarItemRow): {
  impact: number;
  urgency: number;
  effort: number;
  confidence: number;
  calculatedValue: number;
} {
  const impact = Math.min(
    10,
    Math.max(1, Math.round(item.priority_score / 10)),
  );
  const urgency =
    item.severity === "critical"
      ? 10
      : item.severity === "high"
        ? 8
        : item.severity === "medium"
          ? 5
          : 2;
  const effort = 5; // Default, could be derived from complexity_code
  const confidence = Math.round((item.ai_confidence_score || 0.8) * 10);
  const calculatedValue = Math.round((impact * urgency * confidence) / effort);

  return { impact, urgency, effort, confidence, calculatedValue };
}

function mapSeverityToLevel(severity: string): "high" | "medium" | "low" {
  switch (severity) {
    case "critical":
    case "high":
      return "high";
    case "medium":
      return "medium";
    default:
      return "low";
  }
}

function mapRadarStatusToPriorityStatus(
  status: string,
): "suggested" | "validated" | "dismissed" {
  switch (status) {
    case "acknowledged":
    case "in_progress":
      return "validated";
    case "dismissed":
      return "dismissed";
    default:
      return "suggested";
  }
}

function mapActionStatus(
  status: string,
): "pending" | "in_progress" | "completed" | "blocked" {
  switch (status) {
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
