import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const RADAR_KEYS = {
  active: (orgId: string) => ["radar_items", orgId, "active"] as const,
  history: (orgId: string) => ["radar_items", orgId, "history"] as const,
  byId: (id: string) => ["radar_items", id] as const,
};

export interface RadarItem {
  id: string;
  organization_id: string;
  type: string;
  title: string;
  diagnosis_code: string;
  impact_code: string;
  timeframe_code: string;
  complexity_code: string;
  severity: "low" | "medium" | "high" | "critical";
  domain: string;
  status:
    | "detected"
    | "in_progress"
    | "acknowledged"
    | "dismissed"
    | "resolved";
  priority_score: number | null;
  custom_notes: string | null;
  ai_confidence_score: number | null;
  ai_raw_analysis: Record<string, unknown> | null;
  detected_at: string | null;
  detected_in_report_id: string | null;
  source_type: string | null;
  created_at: string;
  updated_at: string;
  diagnosis?: {
    technical_term: string;
    cause: string;
    effect: string;
    why: string;
  };
  impact?: {
    label: string;
    label_en: string;
    value: string;
    value_en: string;
    category: string;
    direction: string;
  };
  timeframe?: {
    label: string;
    label_en: string;
    months: number;
  };
  complexity?: {
    label: string;
    label_en: string;
    effort_hours: number;
  };
  suggested_levers?: Array<{
    lever_code: string;
    priority: number;
    is_primary: boolean;
    confidence_score: number;
  }>;
}

export function useRadarItems(organizationId: string) {
  return useQuery({
    queryKey: RADAR_KEYS.active(organizationId),
    queryFn: async () => {
      const { data, error } = await supabase
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
        .eq("organization_id", organizationId)
        .in("status", ["detected", "in_progress"])
        .order("priority_score", { ascending: false });

      if (error) throw error;
      return (data || []) as RadarItem[];
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
        .eq("organization_id", organizationId)
        .in("status", ["acknowledged", "dismissed", "resolved"])
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return (data || []) as RadarItem[];
    },
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useRadarItem(id: string) {
  return useQuery({
    queryKey: RADAR_KEYS.byId(id),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("radar_items")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as RadarItem;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function useUpdateRadarItemStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      dto,
    }: {
      id: string;
      dto: { status: string; customNotes?: string };
    }) => {
      const updateData: Record<string, unknown> = {
        status: dto.status,
        updated_at: new Date().toISOString(),
      };

      if (dto.customNotes !== undefined) {
        updateData.custom_notes = dto.customNotes;
      }

      if (dto.status === "acknowledged") {
        updateData.acknowledged_at = new Date().toISOString();
      } else if (dto.status === "in_progress") {
        updateData.started_at = new Date().toISOString();
      } else if (dto.status === "resolved") {
        updateData.resolved_at = new Date().toISOString();
      } else if (dto.status === "dismissed") {
        updateData.dismissed_at = new Date().toISOString();
      }

      const { data, error } = await supabase
        .from("radar_items")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["radar_items"] });
      queryClient.setQueryData(RADAR_KEYS.byId(variables.id), _data);
    },
  });
}

export function useCreateRadarItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (item: Partial<RadarItem>) => {
      const { data, error } = await supabase
        .from("radar_items")
        .insert(item)
        .select()
        .single();

      if (error) throw error;
      return data as RadarItem;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["radar_items"] });
    },
  });
}

export function useDeleteRadarItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("radar_items")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["radar_items"] });
    },
  });
}
