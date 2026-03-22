import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface MetricValue {
  id: string;
  metric_id: string;
  organization_id: string;
  period_start: string;
  period_end: string;
  value: number;
  source_type: 'manual' | 'report' | 'integration';
  source_reference: string | null;
  notes: string | null;
  created_at: string;
  // Joined fields from view
  metric_name?: string;
  metric_unit?: string;
  metric_domain?: string;
  metric_trend_direction?: string;
  health_status?: string;
  trend_percentage?: number;
}

export const useMetricValues = (organizationId?: string) => {
  return useQuery({
    queryKey: ['metric-values', organizationId],
    queryFn: async (): Promise<MetricValue[]> => {
      const { data, error } = await supabase
        .from('latest_metric_values')
        .select('*')
        .eq('organization_id', organizationId || 'default-org')
        .order('metric_name');

      if (error) throw error;
      return data || [];
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
    enabled: !!organizationId,
  });
};
