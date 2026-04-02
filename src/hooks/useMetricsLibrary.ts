import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

interface MetricLibrary {
  id: string;
  code: string;
  title: string;
  description: string | null;
  calculation_formula: string | null;
  unit: string;
  domain: string;
  trend_direction: "higher_is_better" | "lower_is_better" | "no_trend";
  input_type: "cumulative" | "non_cumulative";
  group_data_period: "daily" | "weekly" | "monthly" | "quarterly" | "yearly";
  total_is:
    | "sum_of_values"
    | "average_of_values"
    | "last_value"
    | "all_time"
    | "ytd_as_of";
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useMetricsLibrary = () => {
  return useQuery({
    queryKey: ["library-kpis"],
    queryFn: async (): Promise<MetricLibrary[]> => {
      const { data, error } = await supabase
        .from("library_kpis")
        .select("*")
        .eq("is_active", true)
        .order("code");

      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });
};
