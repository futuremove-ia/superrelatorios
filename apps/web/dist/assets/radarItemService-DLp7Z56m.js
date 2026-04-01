var f = Object.defineProperty;
var h = (c, e, r) =>
  e in c
    ? f(c, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (c[e] = r);
var p = (c, e, r) => h(c, typeof e != "symbol" ? e + "" : e, r);
import { c5 as v } from "./index-DRWQgA5q.js";
import {
  ar as d,
  aq as a,
  aF as t,
  X as m,
  a6 as s,
  aB as u,
  W as w,
} from "./types-JQgdQoTs.js";
d({
  id: t().uuid(),
  organization_id: t().uuid(),
  type: s(["risk", "opportunity"]),
  title: t(),
  diagnosis_code: t(),
  impact_code: t(),
  timeframe_code: t(),
  complexity_code: t(),
  severity: s(["critical", "high", "medium", "low"]),
  priority_score: a(),
  domain: s([
    "finance",
    "sales",
    "marketing",
    "operations",
    "people",
    "strategy",
    "commercial",
  ]),
  status: s([
    "detected",
    "acknowledged",
    "in_progress",
    "resolved",
    "dismissed",
  ]),
  detected_at: t().datetime(),
  acknowledged_at: t().datetime().nullable(),
  started_at: t().datetime().nullable(),
  resolved_at: t().datetime().nullable(),
  dismissed_at: t().datetime().nullable(),
  expires_at: t().datetime().nullable(),
  detected_in_report_id: t().uuid().nullable(),
  source_type: s(["ai_detection", "manual", "imported", "api"]),
  ai_confidence_score: a(),
  ai_model_version: t().nullable(),
  ai_raw_analysis: u(w()).nullable(),
  custom_notes: t().nullable(),
  actual_resolution_days: a().nullable(),
  resolution_summary: t().nullable(),
  resolution_impact_value: a().nullable(),
  created_at: t().datetime(),
  updated_at: t().datetime(),
});
d({
  id: t().uuid(),
  organization_id: t().uuid(),
  type: s(["risk", "opportunity"]),
  title: t(),
  status: s([
    "detected",
    "acknowledged",
    "in_progress",
    "resolved",
    "dismissed",
  ]),
  severity: s(["critical", "high", "medium", "low"]),
  priority_score: a(),
  domain: s([
    "finance",
    "sales",
    "marketing",
    "operations",
    "people",
    "strategy",
    "commercial",
  ]),
  diagnosis_code: t(),
  diagnosis_term: t(),
  diagnosis_cause: t(),
  diagnosis_effect: t(),
  diagnosis_why: t(),
  impact_code: t(),
  impact_description: t(),
  impact_value: a(),
  impact_type: t(),
  impact_direction: t(),
  impact_category: t(),
  timeframe_code: t(),
  timeframe_label: t(),
  timeframe_days: a(),
  timeframe_category: s([
    "immediate",
    "short_term",
    "medium_term",
    "long_term",
  ]),
  complexity_code: t(),
  complexity_label: t(),
  typical_effort_hours: a(),
  ai_confidence_score: a(),
  ai_model_version: t().nullable(),
  detected_at: t().datetime(),
  acknowledged_at: t().datetime().nullable(),
  resolved_at: t().datetime().nullable(),
  expires_at: t().datetime().nullable(),
  suggested_lever_codes: m(t()).nullable(),
  linked_kpi_codes: m(t()).nullable(),
});
d({
  organization_id: t().uuid(),
  active_items_count: a(),
  critical_count: a(),
  high_count: a(),
  risks_count: a(),
  opportunities_count: a(),
  in_progress_count: a(),
  latest_kpis: u(
    d({ value: a(), delta: a().optional(), period: t() }),
  ).nullable(),
});
const b = d({
    organization_id: t().uuid(),
    type: s(["risk", "opportunity"]),
    title: t().min(1).max(200),
    diagnosis_code: t(),
    impact_code: t(),
    timeframe_code: t(),
    complexity_code: t(),
    severity: s(["critical", "high", "medium", "low"]),
    domain: s([
      "finance",
      "sales",
      "marketing",
      "operations",
      "people",
      "strategy",
      "commercial",
    ]),
    detected_in_report_id: t().uuid().optional(),
    suggested_lever_codes: m(t()).optional(),
    linked_kpi_codes: m(t()).optional(),
    custom_notes: t().optional(),
    ai_confidence_score: a().min(0).max(1).default(0.8),
  }),
  C = d({
    status: s([
      "detected",
      "acknowledged",
      "in_progress",
      "resolved",
      "dismissed",
    ]),
    custom_notes: t().optional(),
    resolution_summary: t().optional(),
    resolution_impact_value: a().optional(),
  });
class k {
  constructor() {
    p(this, "supabase", v("", ""));
  }
  async getRadarItems(e) {
    const { data: r, error: i } = await this.supabase
      .from("radar_items_enriched")
      .select("*")
      .eq("organization_id", e)
      .order("priority_score", { ascending: !1 });
    if (i)
      throw (
        console.error("Error fetching radar items:", i),
        new Error("Failed to fetch radar items")
      );
    return (r == null ? void 0 : r.map(this.mapEnrichedFromDB)) || [];
  }
  async getRadarItemsByStatus(e, r) {
    const { data: i, error: o } = await this.supabase
      .from("radar_items_enriched")
      .select("*")
      .eq("organization_id", e)
      .eq("status", r)
      .order("priority_score", { ascending: !1 });
    if (o)
      throw (
        console.error("Error fetching radar items by status:", o),
        new Error("Failed to fetch radar items")
      );
    return (i == null ? void 0 : i.map(this.mapEnrichedFromDB)) || [];
  }
  async getRadarItemsBySeverity(e, r) {
    const { data: i, error: o } = await this.supabase
      .from("radar_items_enriched")
      .select("*")
      .eq("organization_id", e)
      .eq("severity", r)
      .order("priority_score", { ascending: !1 });
    if (o)
      throw (
        console.error("Error fetching radar items by severity:", o),
        new Error("Failed to fetch radar items")
      );
    return (i == null ? void 0 : i.map(this.mapEnrichedFromDB)) || [];
  }
  async getRadarItemsByType(e, r) {
    const { data: i, error: o } = await this.supabase
      .from("radar_items_enriched")
      .select("*")
      .eq("organization_id", e)
      .eq("type", r)
      .order("priority_score", { ascending: !1 });
    if (o)
      throw (
        console.error("Error fetching radar items by type:", o),
        new Error("Failed to fetch radar items")
      );
    return (i == null ? void 0 : i.map(this.mapEnrichedFromDB)) || [];
  }
  async getRadarItemsByDomain(e, r) {
    const { data: i, error: o } = await this.supabase
      .from("radar_items_enriched")
      .select("*")
      .eq("organization_id", e)
      .eq("domain", r)
      .order("priority_score", { ascending: !1 });
    if (o)
      throw (
        console.error("Error fetching radar items by domain:", o),
        new Error("Failed to fetch radar items")
      );
    return (i == null ? void 0 : i.map(this.mapEnrichedFromDB)) || [];
  }
  async getRadarItemById(e) {
    const { data: r, error: i } = await this.supabase
      .from("radar_items_enriched")
      .select("*")
      .eq("id", e)
      .single();
    if (i) {
      if (i.code === "PGRST116") return null;
      throw (
        console.error("Error fetching radar item by id:", i),
        new Error("Failed to fetch radar item")
      );
    }
    return this.mapEnrichedFromDB(r);
  }
  async getDashboardSummary(e) {
    const { data: r, error: i } = await this.supabase
      .from("dashboard_summary")
      .select("*")
      .eq("organization_id", e)
      .single();
    if (i) {
      if (i.code === "PGRST116") return null;
      throw (
        console.error("Error fetching dashboard summary:", i),
        new Error("Failed to fetch dashboard summary")
      );
    }
    return this.mapDashboardSummaryFromDB(r);
  }
  async createRadarItem(e) {
    try {
      const { data: r, error: i } = await this.supabase.rpc(
        "create_radar_item",
        {
          p_organization_id: e.organizationId,
          p_type: e.type,
          p_title: e.title,
          p_diagnosis_code: e.diagnosisCode,
          p_impact_code: e.impactCode,
          p_timeframe_code: e.timeframeCode,
          p_complexity_code: e.complexityCode,
          p_severity: e.severity,
          p_domain: e.domain,
          p_suggested_lever_codes: e.suggestedLeverCodes || [],
          p_linked_kpi_codes: e.linkedKpiCodes || [],
          p_custom_notes: e.customNotes || null,
          p_ai_confidence_score: e.aiConfidenceScore || 0.8,
        },
      );
      if (i) throw i;
      const o = await this.getRadarItemById(r);
      if (!o) throw new Error("Created item not found");
      return this.mapFromEnriched(o);
    } catch (r) {
      return (
        console.warn("RPC create_radar_item failed, using fallback:", r),
        this.createRadarItemFallback(e)
      );
    }
  }
  async createRadarItemFallback(e) {
    const r = {
      organization_id: e.organizationId,
      type: e.type,
      title: e.title,
      diagnosis_code: e.diagnosisCode,
      impact_code: e.impactCode,
      timeframe_code: e.timeframeCode,
      complexity_code: e.complexityCode,
      severity: e.severity,
      domain: e.domain,
      detected_in_report_id: e.detectedInReportId,
      suggested_lever_codes: e.suggestedLeverCodes,
      linked_kpi_codes: e.linkedKpiCodes,
      custom_notes: e.customNotes,
      ai_confidence_score: e.aiConfidenceScore,
    };
    b.parse(r);
    const { data: i, error: o } = await this.supabase
      .from("radar_items")
      .insert(r)
      .select()
      .single();
    if (o)
      throw (
        console.error("Error creating radar item:", o),
        new Error("Failed to create radar item")
      );
    return this.mapFromDB(i);
  }
  async updateRadarItemStatus(e, r) {
    const i = {
      status: r.status,
      custom_notes: r.customNotes,
      resolution_summary: r.resolutionSummary,
      resolution_impact_value: r.resolutionImpactValue,
    };
    C.parse(i);
    const o = {
      status: i.status,
      custom_notes: i.custom_notes,
      updated_at: new Date().toISOString(),
    };
    switch (i.status) {
      case "acknowledged":
        o.acknowledged_at = new Date().toISOString();
        break;
      case "in_progress":
        o.started_at = new Date().toISOString();
        break;
      case "resolved":
        o.resolved_at = new Date().toISOString();
        const { data: _ } = await this.supabase
          .from("radar_items")
          .select("detected_at")
          .eq("id", e)
          .single();
        if (_) {
          const g = new Date(_.detected_at),
            y = new Date();
          ((o.actual_resolution_days = Math.ceil(
            (y.getTime() - g.getTime()) / (1e3 * 60 * 60 * 24),
          )),
            (o.resolution_summary = i.resolution_summary),
            (o.resolution_impact_value = i.resolution_impact_value));
        }
        break;
      case "dismissed":
        o.dismissed_at = new Date().toISOString();
        break;
    }
    const { data: n, error: l } = await this.supabase
      .from("radar_items")
      .update(o)
      .eq("id", e)
      .select()
      .single();
    if (l)
      throw (
        console.error("Error updating radar item status:", l),
        new Error("Failed to update radar item status")
      );
    return this.mapFromDB(n);
  }
  async updateRadarItem(e, r) {
    const i = {};
    (r.customNotes !== void 0 && (i.custom_notes = r.customNotes),
      r.aiConfidenceScore !== void 0 &&
        (i.ai_confidence_score = r.aiConfidenceScore),
      r.aiModelVersion !== void 0 && (i.ai_model_version = r.aiModelVersion),
      r.expiresAt !== void 0 && (i.expires_at = r.expiresAt),
      (i.updated_at = new Date().toISOString()));
    const { data: o, error: n } = await this.supabase
      .from("radar_items")
      .update(i)
      .eq("id", e)
      .select()
      .single();
    if (n)
      throw (
        console.error("Error updating radar item:", n),
        new Error("Failed to update radar item")
      );
    return this.mapFromDB(o);
  }
  async deleteRadarItem(e) {
    const { error: r } = await this.supabase
      .from("radar_items")
      .delete()
      .eq("id", e);
    if (r)
      throw (
        console.error("Error deleting radar item:", r),
        new Error("Failed to delete radar item")
      );
  }
  async detectChallengesAuto(e, r = 0.7) {
    const { data: i, error: o } = await this.supabase.rpc(
      "detect_challenges_auto",
      { p_organization_id: e, p_confidence_threshold: r },
    );
    if (o)
      throw (
        console.error("Error detecting challenges:", o),
        new Error("Failed to detect challenges")
      );
    return i || [];
  }
  mapFromDB(e) {
    return {
      id: e.id,
      organizationId: e.organization_id,
      type: e.type,
      title: e.title,
      diagnosisCode: e.diagnosis_code,
      impactCode: e.impact_code,
      timeframeCode: e.timeframe_code,
      complexityCode: e.complexity_code,
      severity: e.severity,
      priorityScore: e.priority_score,
      domain: e.domain,
      status: e.status,
      detectedAt: e.detected_at,
      acknowledgedAt: e.acknowledged_at || void 0,
      startedAt: e.started_at || void 0,
      resolvedAt: e.resolved_at || void 0,
      dismissedAt: e.dismissed_at || void 0,
      expiresAt: e.expires_at || void 0,
      detectedInReportId: e.detected_in_report_id || void 0,
      sourceType: e.source_type,
      aiConfidenceScore: e.ai_confidence_score,
      aiModelVersion: e.ai_model_version || void 0,
      aiRawAnalysis: e.ai_raw_analysis || void 0,
      customNotes: e.custom_notes || void 0,
      actualResolutionDays: e.actual_resolution_days || void 0,
      resolutionSummary: e.resolution_summary || void 0,
      resolutionImpactValue: e.resolution_impact_value || void 0,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapEnrichedFromDB(e) {
    return {
      id: e.id,
      organizationId: e.organization_id,
      type: e.type,
      title: e.title,
      status: e.status,
      severity: e.severity,
      priorityScore: e.priority_score,
      domain: e.domain,
      diagnosisCode: e.diagnosis_code,
      diagnosisTerm: e.diagnosis_term,
      diagnosisCause: e.diagnosis_cause,
      diagnosisEffect: e.diagnosis_effect,
      diagnosisWhy: e.diagnosis_why,
      impactCode: e.impact_code,
      impactDescription: e.impact_description,
      impactValue: e.impact_value,
      impactType: e.impact_type,
      impactDirection: e.impact_direction,
      impactCategory: e.impact_category,
      timeframeCode: e.timeframe_code,
      timeframeLabel: e.timeframe_label,
      timeframeDays: e.timeframe_days,
      timeframeCategory: e.timeframe_category,
      complexityCode: e.complexity_code,
      complexityLabel: e.complexity_label,
      typicalEffortHours: e.typical_effort_hours,
      aiConfidenceScore: e.ai_confidence_score,
      aiModelVersion: e.ai_model_version || void 0,
      detectedAt: e.detected_at,
      acknowledgedAt: e.acknowledged_at || void 0,
      resolvedAt: e.resolved_at || void 0,
      expiresAt: e.expires_at || void 0,
      suggestedLeverCodes: e.suggested_lever_codes || [],
      linkedKpiCodes: e.linked_kpi_codes || [],
    };
  }
  mapFromEnriched(e) {
    return {
      id: e.id,
      organizationId: e.organizationId,
      type: e.type,
      title: e.title,
      diagnosisCode: e.diagnosisCode,
      impactCode: e.impactCode,
      timeframeCode: e.timeframeCode,
      complexityCode: e.complexityCode,
      severity: e.severity,
      priorityScore: e.priorityScore,
      domain: e.domain,
      status: e.status,
      detectedAt: e.detectedAt,
      acknowledgedAt: e.acknowledgedAt,
      resolvedAt: e.resolvedAt,
      sourceType: "manual",
      aiConfidenceScore: e.aiConfidenceScore,
      aiModelVersion: e.aiModelVersion,
      createdAt: e.detectedAt,
      updatedAt: e.detectedAt,
    };
  }
  mapDashboardSummaryFromDB(e) {
    const r = e.latest_kpis || {},
      i = {};
    for (const [o, n] of Object.entries(r))
      n &&
        typeof n.value == "number" &&
        (i[o] = { value: n.value, delta: n.delta, period: n.period || "" });
    return {
      organizationId: e.organization_id,
      activeItemsCount: e.active_items_count,
      criticalCount: e.critical_count,
      highCount: e.high_count,
      risksCount: e.risks_count,
      opportunitiesCount: e.opportunities_count,
      inProgressCount: e.in_progress_count,
      latestKpis: i,
    };
  }
}
const F = new k();
export { F as r };
