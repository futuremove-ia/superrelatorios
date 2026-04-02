import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useCurrentOrganization } from "./useCurrentOrganization";

export function useUIPreferences() {
  const { organization } = useCurrentOrganization();

  return useQuery({
    queryKey: ["ui_preferences", organization?.id],
    queryFn: async () => {
      if (!organization?.id) return null;

      const { data, error } = await supabase
        .from("organization_ui_preferences")
        .select("*")
        .eq("organization_id", organization.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      return data;
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!organization?.id,
  });
}

export const SIMPLE_MODULES = [
  "dashboard",
  "radar",
  "action-plan",
  "reports",
  "settings",
];

export const COMPLETO_MODULES = [
  ...SIMPLE_MODULES,
  "risks",
  "analytics",
  "decision-panel",
];

export const ENTERPRISE_MODULES = [
  ...COMPLETO_MODULES,
  "hierarchy",
  "forecasts",
  "swot",
];
