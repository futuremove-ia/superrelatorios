import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface CrossDomainAnalytics {
  overall_health_score: number;
  overall_health_trend: 'up' | 'down' | 'stable';
  overall_health_change: number;
  critical_relationships_count: number;
  recommendations_count: number;
  business_health_score: number;
  growth_potential_score: number;
  operational_excellence_score: number;
}

export const useCrossDomainAnalytics = (organizationId?: string) => {
  return useQuery({
    queryKey: ['cross-domain-analytics', organizationId],
    queryFn: async (): Promise<CrossDomainAnalytics | null> => {
      const { data, error } = await supabase
        .from('cross_domain_analytics_summary')
        .select('*')
        .eq('organization_id', organizationId || 'default-org')
        .order('period_start', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      
      return data || {
        overall_health_score: 0,
        overall_health_trend: 'stable',
        overall_health_change: 0,
        critical_relationships_count: 0,
        recommendations_count: 0,
        business_health_score: 0,
        growth_potential_score: 0,
        operational_excellence_score: 0,
      };
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    enabled: !!organizationId,
  });
};
