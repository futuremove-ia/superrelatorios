import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const RADAR_KEYS = {
  active: (orgId: string) => ["radar_items", orgId, "active"] as const,
  history: (orgId: string) => ["radar_items", orgId, "history"] as const,
  byId: (id: string) => ["radar_items", id] as const,
};

const RADAR_SELECT = `
  *,
  library_diagnoses!diagnosis_code(technical_term, cause, effect, why),
  library_impacts!impact_code(description, impact_value, impact_type, impact_direction, category),
  library_timeframes!timeframe_code(label, days),
  library_complexities!complexity_code(label, typical_effort_hours),
  radar_item_suggested_levers(lever_code, priority, is_primary, confidence_score),
  radar_item_metrics(kpi_code, current_value, previous_value, change_percent, is_primary_driver)
`;

export interface RadarItem {
  id: string;
  organization_id: string;
  diagnosis_code: string;
  impact_code: string;
  timeframe_code: string;
  complexity_code: string;
  status:
    | "detected"
    | "in_progress"
    | "acknowledged"
    | "dismissed"
    | "resolved";
  severity: "low" | "medium" | "high" | "critical";
  priority_score: number;
  custom_notes?: string;
  ai_confidence_score?: number;
  created_at: string;
  updated_at: string;
  diagnosisTerm?: string;
  diagnosisCause?: string;
  diagnosisEffect?: string;
  diagnosisWhy?: string;
  impactValue?: number;
  impactType?: string;
  impactDirection?: string;
  impactCategory?: string;
  impactDescription?: string;
  timeframeLabel?: string;
  complexityLabel?: string;
  typicalEffortHours?: number;
  suggestedLeverCodes?: string[];
}

function mapRadarItem(row: Record<string, unknown>): RadarItem {
  const diag = row.library_diagnoses as Record<string, string> | null;
  const impact = row.library_impacts as Record<string, unknown> | null;
  const timeframe = row.library_timeframes as Record<string, unknown> | null;
  const complexity = row.library_complexities as Record<string, unknown> | null;
  const levers =
    (row.radar_item_suggested_levers as Array<{ lever_code: string }>) || [];

  return {
    ...row,
    diagnosisTerm: diag?.technical_term,
    diagnosisCause: diag?.cause,
    diagnosisEffect: diag?.effect,
    diagnosisWhy: diag?.why,
    impactValue: impact?.impact_value as number,
    impactType: impact?.impact_type as string,
    impactDirection: impact?.impact_direction as string,
    impactCategory: impact?.category as string,
    impactDescription: impact?.description as string,
    timeframeLabel: timeframe?.label as string,
    complexityLabel: complexity?.label as string,
    typicalEffortHours: (complexity?.typical_effort_hours as number) ?? 0,
    suggestedLeverCodes: levers.map((l) => l.lever_code),
    ai_confidence_score: row.ai_confidence_score as number,
  } as RadarItem;
}

export function useRadarItems(organizationId: string) {
  return useQuery({
    queryKey: RADAR_KEYS.active(organizationId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("radar_items")
        .select(RADAR_SELECT)
        .eq("organization_id", organizationId)
        .in("status", ["detected", "in_progress"])
        .order("priority_score", { ascending: false });

      if (error) throw error;
      return (data || []).map(mapRadarItem);
    },
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000,
  });
}

export function useRadarHistory(organizationId: string) {
  return useQuery({
    queryKey: RADAR_KEYS.history(organizationId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("radar_items")
        .select(RADAR_SELECT)
        .eq("organization_id", organizationId)
        .in("status", ["acknowledged", "dismissed", "resolved"])
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return (data || []).map(mapRadarItem);
    },
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useUpdateRadarItemStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      status,
      customNotes,
    }: {
      id: string;
      status: string;
      customNotes?: string;
    }) => {
      const { data, error } = await supabase
        .from("radar_items")
        .update({
          status,
          custom_notes: customNotes,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["radar_items"] });
    },
  });
}
