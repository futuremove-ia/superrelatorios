import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface MetricLibrary {
  id: string;
  name: string;
  unit: string;
  input_type: 'cumulative' | 'non_cumulative';
  group_data_period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'half_yearly' | 'yearly';
  total_is: 'sum_of_values' | 'average_of_values' | 'last_value' | 'all_time' | 'ytd_as_of';
  trend_direction: 'higher_is_better' | 'lower_is_better' | 'no_trend';
  domain: string;
  calculation_formula: string | null;
  ytd_month_offset: number;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useMetricsLibrary = () => {
  return useQuery({
    queryKey: ['metrics-library'],
    queryFn: async (): Promise<MetricLibrary[]> => {
      const { data, error } = await supabase
        .from('metrics_library')
        .select('*')
        .eq('is_active', true)
        .order('domain, name');

      if (error) throw error;
      return data || [];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
