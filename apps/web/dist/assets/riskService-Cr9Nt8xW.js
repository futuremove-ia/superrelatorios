var _ = Object.defineProperty;
var m = (l, e, r) =>
  e in l
    ? _(l, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (l[e] = r);
var d = (l, e, r) => m(l, typeof e != "symbol" ? e + "" : e, r);
import { c5 as u } from "./index-DRWQgA5q.js";
import {
  ar as s,
  aF as i,
  _ as n,
  X as c,
  a6 as a,
  aq as o,
} from "./types-JQgdQoTs.js";
s({
  id: i().uuid(),
  code: i(),
  technical_term: i(),
  technical_term_en: i().optional(),
  technical_term_es: i().optional(),
  cause: i(),
  cause_en: i().optional(),
  cause_es: i().optional(),
  effect: i(),
  effect_en: i().optional(),
  effect_es: i().optional(),
  why: i(),
  why_en: i().optional(),
  why_es: i().optional(),
  challenge_code: i().optional(),
  domain: a([
    "finance",
    "sales",
    "marketing",
    "operations",
    "people",
    "strategy",
    "commercial",
  ]),
  severity_default: a(["critical", "high", "medium", "low"]),
  symptom_codes: c(i()),
  suggested_lever_codes: c(i()),
  is_active: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  title: i(),
  title_en: i().optional(),
  title_es: i().optional(),
  description: i().optional(),
  description_en: i().optional(),
  description_es: i().optional(),
  calculation_formula: i().optional(),
  unit: i(),
  domain: a([
    "finance",
    "sales",
    "marketing",
    "operations",
    "people",
    "strategy",
    "commercial",
  ]),
  benchmark_excellent: o().optional(),
  benchmark_good: o().optional(),
  benchmark_average: o().optional(),
  benchmark_warning: o().optional(),
  benchmark_critical: o().optional(),
  trend_direction: a(["higher_is_better", "lower_is_better", "no_trend"]),
  input_type: a(["cumulative", "non_cumulative"]),
  group_data_period: a(["daily", "weekly", "monthly", "quarterly", "yearly"]),
  is_active: n(),
  is_core: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  title: i(),
  title_en: i().optional(),
  title_es: i().optional(),
  description: i().optional(),
  description_en: i().optional(),
  description_es: i().optional(),
  category: a([
    "finance",
    "sales",
    "marketing",
    "operations",
    "people",
    "strategy",
    "commercial",
  ]),
  target_kpi_code: i().optional(),
  impact_level: a(["high", "medium", "low"]).optional(),
  implementation_complexity_code: i().optional(),
  typical_timeframe_code: i().optional(),
  expected_impact_code: i().optional(),
  is_active: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  description: i(),
  description_en: i().optional(),
  description_es: i().optional(),
  target_kpi_code: i(),
  impact_type: a(["percentage", "absolute", "currency"]),
  impact_value: o(),
  impact_direction: a(["increase", "decrease"]),
  category: a(["revenue", "cost", "efficiency", "quality"]),
  is_active: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  label: i(),
  label_en: i().optional(),
  label_es: i().optional(),
  days: o(),
  category: a(["immediate", "short_term", "medium_term", "long_term"]),
  min_days: o().optional(),
  max_days: o().optional(),
  is_active: n(),
  created_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  label: i(),
  label_en: i().optional(),
  label_es: i().optional(),
  description: i().optional(),
  description_en: i().optional(),
  description_es: i().optional(),
  typical_effort_hours: o(),
  typical_effort_days: o().optional(),
  is_active: n(),
  created_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  title: i(),
  title_en: i().optional(),
  title_es: i().optional(),
  description: i().optional(),
  description_en: i().optional(),
  description_es: i().optional(),
  domain: a([
    "finance",
    "sales",
    "marketing",
    "operations",
    "people",
    "strategy",
    "commercial",
  ]),
  severity_default: o().min(1).max(5),
  symptom_codes: c(i()),
  related_kpi_codes: c(i()),
  suggested_diagnosis_codes: c(i()),
  is_active: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  title: i(),
  title_en: i().optional(),
  title_es: i().optional(),
  description: i().optional(),
  description_en: i().optional(),
  description_es: i().optional(),
  target_type: a(["increase", "decrease", "maintain"]).optional(),
  suggested_timeframe_code: i().optional(),
  related_kpi_codes: c(i()),
  is_active: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  code: i(),
  lever_code: i(),
  title: i(),
  title_en: i().optional(),
  description: i(),
  description_en: i().optional(),
  steps: c(i()),
  steps_en: c(i()).optional(),
  estimated_effort_hours: o(),
  complexity_code: i().optional(),
  priority_score: o().min(1).max(5).optional(),
  quick_win: n(),
  is_active: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
class y {
  constructor() {
    d(this, "supabase", u("", ""));
  }
  async getLibraryDiagnoses() {
    const { data: e, error: r } = await this.supabase
      .from("library_diagnoses")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library diagnoses:", r),
        new Error("Failed to fetch library diagnoses")
      );
    return (e == null ? void 0 : e.map(this.mapDiagnosisFromDB)) || [];
  }
  async getLibraryDiagnosisByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_diagnoses")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching diagnosis by code:", t),
        new Error("Failed to fetch diagnosis")
      );
    }
    return this.mapDiagnosisFromDB(r);
  }
  async getLibraryDiagnosesByDomain(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_diagnoses")
      .select("*")
      .eq("domain", e)
      .eq("is_active", !0)
      .order("code");
    if (t)
      throw (
        console.error("Error fetching diagnoses by domain:", t),
        new Error("Failed to fetch diagnoses")
      );
    return (r == null ? void 0 : r.map(this.mapDiagnosisFromDB)) || [];
  }
  async getLibraryDiagnosesBySeverity(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_diagnoses")
      .select("*")
      .eq("severity_default", e)
      .eq("is_active", !0)
      .order("code");
    if (t)
      throw (
        console.error("Error fetching diagnoses by severity:", t),
        new Error("Failed to fetch diagnoses")
      );
    return (r == null ? void 0 : r.map(this.mapDiagnosisFromDB)) || [];
  }
  async getLibraryKPIs() {
    const { data: e, error: r } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library KPIs:", r),
        new Error("Failed to fetch library KPIs")
      );
    return (e == null ? void 0 : e.map(this.mapKPIFromDB)) || [];
  }
  async getLibraryCoreKPIs() {
    const { data: e, error: r } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .eq("is_core", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching core KPIs:", r),
        new Error("Failed to fetch core KPIs")
      );
    return (e == null ? void 0 : e.map(this.mapKPIFromDB)) || [];
  }
  async getLibraryKPIByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching KPI by code:", t),
        new Error("Failed to fetch KPI")
      );
    }
    return this.mapKPIFromDB(r);
  }
  async getLibraryKPIsByDomain(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("domain", e)
      .eq("is_active", !0)
      .order("code");
    if (t)
      throw (
        console.error("Error fetching KPIs by domain:", t),
        new Error("Failed to fetch KPIs")
      );
    return (r == null ? void 0 : r.map(this.mapKPIFromDB)) || [];
  }
  async getLibraryLevers() {
    const { data: e, error: r } = await this.supabase
      .from("library_levers")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library levers:", r),
        new Error("Failed to fetch library levers")
      );
    return (e == null ? void 0 : e.map(this.mapLeverFromDB)) || [];
  }
  async getLibraryLeverByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_levers")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching lever by code:", t),
        new Error("Failed to fetch lever")
      );
    }
    return this.mapLeverFromDB(r);
  }
  async getLibraryLeversByCodes(e) {
    if (e.length === 0) return [];
    const { data: r, error: t } = await this.supabase
      .from("library_levers")
      .select("*")
      .in("code", e)
      .eq("is_active", !0)
      .order("code");
    if (t)
      throw (
        console.error("Error fetching levers by codes:", t),
        new Error("Failed to fetch levers")
      );
    return (r == null ? void 0 : r.map(this.mapLeverFromDB)) || [];
  }
  async getLibraryImpacts() {
    const { data: e, error: r } = await this.supabase
      .from("library_impacts")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library impacts:", r),
        new Error("Failed to fetch library impacts")
      );
    return (e == null ? void 0 : e.map(this.mapImpactFromDB)) || [];
  }
  async getLibraryImpactByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_impacts")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching impact by code:", t),
        new Error("Failed to fetch impact")
      );
    }
    return this.mapImpactFromDB(r);
  }
  async getLibraryTimeframes() {
    const { data: e, error: r } = await this.supabase
      .from("library_timeframes")
      .select("*")
      .eq("is_active", !0)
      .order("days");
    if (r)
      throw (
        console.error("Error fetching library timeframes:", r),
        new Error("Failed to fetch library timeframes")
      );
    return (e == null ? void 0 : e.map(this.mapTimeframeFromDB)) || [];
  }
  async getLibraryTimeframeByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_timeframes")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching timeframe by code:", t),
        new Error("Failed to fetch timeframe")
      );
    }
    return this.mapTimeframeFromDB(r);
  }
  async getLibraryComplexities() {
    const { data: e, error: r } = await this.supabase
      .from("library_complexities")
      .select("*")
      .eq("is_active", !0)
      .order("typical_effort_hours");
    if (r)
      throw (
        console.error("Error fetching library complexities:", r),
        new Error("Failed to fetch library complexities")
      );
    return (e == null ? void 0 : e.map(this.mapComplexityFromDB)) || [];
  }
  async getLibraryComplexityByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_complexities")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching complexity by code:", t),
        new Error("Failed to fetch complexity")
      );
    }
    return this.mapComplexityFromDB(r);
  }
  async getLibraryChallenges() {
    const { data: e, error: r } = await this.supabase
      .from("library_challenges")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library challenges:", r),
        new Error("Failed to fetch library challenges")
      );
    return (e == null ? void 0 : e.map(this.mapChallengeFromDB)) || [];
  }
  async getLibraryChallengeByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_challenges")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching challenge by code:", t),
        new Error("Failed to fetch challenge")
      );
    }
    return this.mapChallengeFromDB(r);
  }
  async getLibraryGoals() {
    const { data: e, error: r } = await this.supabase
      .from("library_goals")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library goals:", r),
        new Error("Failed to fetch library goals")
      );
    return (e == null ? void 0 : e.map(this.mapGoalFromDB)) || [];
  }
  async getLibraryGoalByCode(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_goals")
      .select("*")
      .eq("code", e)
      .eq("is_active", !0)
      .single();
    if (t) {
      if (t.code === "PGRST116") return null;
      throw (
        console.error("Error fetching goal by code:", t),
        new Error("Failed to fetch goal")
      );
    }
    return this.mapGoalFromDB(r);
  }
  async getLibraryActions() {
    const { data: e, error: r } = await this.supabase
      .from("library_actions")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (r)
      throw (
        console.error("Error fetching library actions:", r),
        new Error("Failed to fetch library actions")
      );
    return (e == null ? void 0 : e.map(this.mapActionFromDB)) || [];
  }
  async getLibraryActionsByLever(e) {
    const { data: r, error: t } = await this.supabase
      .from("library_actions")
      .select("*")
      .eq("lever_code", e)
      .eq("is_active", !0)
      .order("priority_score", { ascending: !1 });
    if (t)
      throw (
        console.error("Error fetching actions by lever:", t),
        new Error("Failed to fetch actions")
      );
    return (r == null ? void 0 : r.map(this.mapActionFromDB)) || [];
  }
  mapDiagnosisFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      technicalTerm: e.technical_term,
      technicalTermEn: e.technical_term_en,
      technicalTermEs: e.technical_term_es,
      cause: e.cause,
      causeEn: e.cause_en,
      causeEs: e.cause_es,
      effect: e.effect,
      effectEn: e.effect_en,
      effectEs: e.effect_es,
      why: e.why,
      whyEn: e.why_en,
      whyEs: e.why_es,
      challengeCode: e.challenge_code,
      domain: e.domain,
      severityDefault: e.severity_default,
      symptomCodes: e.symptom_codes,
      suggestedLeverCodes: e.suggested_lever_codes,
      isActive: e.is_active,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapKPIFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      title: e.title,
      titleEn: e.title_en,
      titleEs: e.title_es,
      description: e.description,
      descriptionEn: e.description_en,
      descriptionEs: e.description_es,
      calculationFormula: e.calculation_formula,
      unit: e.unit,
      domain: e.domain,
      benchmarkExcellent: e.benchmark_excellent,
      benchmarkGood: e.benchmark_good,
      benchmarkAverage: e.benchmark_average,
      benchmarkWarning: e.benchmark_warning,
      benchmarkCritical: e.benchmark_critical,
      trendDirection: e.trend_direction,
      inputType: e.input_type,
      groupDataPeriod: e.group_data_period,
      isActive: e.is_active,
      isCore: e.is_core,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapLeverFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      title: e.title,
      titleEn: e.title_en,
      titleEs: e.title_es,
      description: e.description,
      descriptionEn: e.description_en,
      descriptionEs: e.description_es,
      category: e.category,
      targetKpiCode: e.target_kpi_code,
      impactLevel: e.impact_level,
      implementationComplexityCode: e.implementation_complexity_code,
      typicalTimeframeCode: e.typical_timeframe_code,
      expectedImpactCode: e.expected_impact_code,
      isActive: e.is_active,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapImpactFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      description: e.description,
      descriptionEn: e.description_en,
      descriptionEs: e.description_es,
      targetKpiCode: e.target_kpi_code,
      impactType: e.impact_type,
      impactValue: e.impact_value,
      impactDirection: e.impact_direction,
      category: e.category,
      isActive: e.is_active,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapTimeframeFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      label: e.label,
      labelEn: e.label_en,
      labelEs: e.label_es,
      days: e.days,
      category: e.category,
      minDays: e.min_days,
      maxDays: e.max_days,
      isActive: e.is_active,
      createdAt: e.created_at,
    };
  }
  mapComplexityFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      label: e.label,
      labelEn: e.label_en,
      labelEs: e.label_es,
      description: e.description,
      descriptionEn: e.description_en,
      descriptionEs: e.description_es,
      typicalEffortHours: e.typical_effort_hours,
      typicalEffortDays: e.typical_effort_days,
      isActive: e.is_active,
      createdAt: e.created_at,
    };
  }
  mapChallengeFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      title: e.title,
      titleEn: e.title_en,
      titleEs: e.title_es,
      description: e.description,
      descriptionEn: e.description_en,
      descriptionEs: e.description_es,
      domain: e.domain,
      severityDefault: e.severity_default,
      symptomCodes: e.symptom_codes,
      relatedKpiCodes: e.related_kpi_codes,
      suggestedDiagnosisCodes: e.suggested_diagnosis_codes,
      isActive: e.is_active,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapGoalFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      title: e.title,
      titleEn: e.title_en,
      titleEs: e.title_es,
      description: e.description,
      descriptionEn: e.description_en,
      descriptionEs: e.description_es,
      targetType: e.target_type,
      suggestedTimeframeCode: e.suggested_timeframe_code,
      relatedKpiCodes: e.related_kpi_codes,
      isActive: e.is_active,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
  mapActionFromDB(e) {
    return {
      id: e.id,
      code: e.code,
      leverCode: e.lever_code,
      title: e.title,
      titleEn: e.title_en,
      description: e.description,
      descriptionEn: e.description_en,
      steps: e.steps,
      stepsEn: e.steps_en,
      estimatedEffortHours: e.estimated_effort_hours,
      complexityCode: e.complexity_code,
      priorityScore: e.priority_score,
      quickWin: e.quick_win,
      isActive: e.is_active,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
    };
  }
}
const b = new y(),
  p = s({
    id: i().uuid(),
    code: i(),
    title: i(),
    description: i().optional(),
    calculation_formula: i().optional(),
    unit: i(),
    domain: a([
      "finance",
      "sales",
      "marketing",
      "operations",
      "hr",
      "strategy",
    ]),
    trend_direction: a(["higher_is_better", "lower_is_better", "no_trend"]),
    input_type: a(["cumulative", "non_cumulative"]),
    group_data_period: a(["daily", "weekly", "monthly", "quarterly", "yearly"]),
    total_is: a([
      "sum_of_values",
      "average_of_values",
      "last_value",
      "all_time",
      "ytd_as_of",
    ]),
    is_active: n(),
    created_at: i().datetime(),
    updated_at: i().datetime(),
  });
s({
  id: i().uuid(),
  kpi_id: i().uuid(),
  organization_id: i().uuid(),
  period_start: i().datetime(),
  period_end: i().datetime(),
  period_key: i(),
  value: o(),
  currency: i(),
  data_source: i(),
  is_verified: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
  kpi_library: p.optional(),
});
s({
  id: i().uuid(),
  kpi_id: i().uuid(),
  organization_id: i().uuid(),
  period_start: i().datetime(),
  period_end: i().datetime(),
  period_key: i(),
  value: o(),
  currency: i(),
  data_source: i(),
  is_verified: n(),
  created_at: i().datetime(),
  updated_at: i().datetime(),
  kpi_library: p.optional(),
});
s({
  kpi_id: i().uuid(),
  organization_id: i().uuid(),
  period_start: i(),
  period_end: i(),
  period_key: i(),
  value: o(),
  currency: i().default("BRL"),
  data_source: i().default("manual_input"),
  is_verified: n().default(!1),
});
s({
  id: i().uuid(),
  kpi_id: i().uuid(),
  organization_id: i().uuid(),
  period_reference: i(),
  value_target: o(),
  value_excellent: o().nullable(),
  value_good: o().nullable(),
  value_warning: o().nullable(),
  value_critical: o().nullable(),
  created_at: i().datetime(),
});
s({
  id: i().uuid(),
  kpi_id: i().uuid(),
  industry_sector: i().nullable(),
  company_size: i().nullable(),
  value_market_avg: o(),
  source_name: i(),
  created_at: i().datetime(),
});
s({
  kpi_id: i().uuid(),
  organization_id: i().uuid(),
  period_reference: i(),
  value_target: o(),
  value_excellent: o().optional(),
  value_good: o().optional(),
  value_warning: o().optional(),
  value_critical: o().optional(),
});
s({
  kpi_id: i().uuid(),
  industry_sector: i().optional(),
  company_size: i().optional(),
  value_market_avg: o(),
  source_name: i(),
});
s({
  id: i().uuid(),
  organization_id: i().uuid(),
  kpi_id: i().uuid().nullable(),
  title: i(),
  description: i(),
  origin_type: a(["internal", "external"]),
  category: a([
    "strategic",
    "operational",
    "compliance",
    "financial",
    "regulatory",
    "economical",
    "demand",
    "sociopolitical",
    "environmental",
  ]),
  likelihood: o().min(1).max(10),
  impact: o().min(1).max(10),
  risk_score: o(),
  status: a(["identified", "active", "mitigated", "occurred", "archived"]),
  created_at: i().datetime(),
  updated_at: i().datetime(),
});
s({
  id: i().uuid(),
  risk_id: i().uuid(),
  title: i(),
  action_plan: i(),
  responsible_id: i().uuid().nullable(),
  deadline: i().datetime().nullable(),
  status: a(["pending", "in_progress", "completed", "failed"]),
  cost_estimated: o().nullable(),
  created_at: i().datetime(),
});
s({
  organization_id: i().uuid(),
  kpi_id: i().uuid().optional(),
  title: i(),
  description: i(),
  origin_type: a(["internal", "external"]),
  category: a([
    "strategic",
    "operational",
    "compliance",
    "financial",
    "regulatory",
    "economical",
    "demand",
    "sociopolitical",
    "environmental",
  ]),
  likelihood: o().min(1).max(10),
  impact: o().min(1).max(10),
});
s({
  risk_id: i().uuid(),
  title: i(),
  action_plan: i(),
  responsible_id: i().uuid().optional(),
  deadline: i().datetime().optional(),
  status: a(["pending", "in_progress", "completed", "failed"]).default(
    "pending",
  ),
  cost_estimated: o().optional(),
});
export { b as l };
