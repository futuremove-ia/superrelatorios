import { 
  KPIMetric, 
  ImpactCalculation, 
  CompositeKPI, 
  CrossDomainHealth 
} from '../../../domain/analytics/CrossDomainAnalyzer';
import { supabase } from '../persistence/database/supabase-client';

export interface CrossDomainAnalyticsData {
  id: string;
  period: string;
  kpi_metrics: KPIMetric[];
  impact_calculations: ImpactCalculation[];
  composite_kpis: CompositeKPI[];
  cross_domain_health: CrossDomainHealth;
  created_at: string;
  updated_at: string;
}

export interface CrossDomainAnalyticsFilter {
  startDate?: Date;
  endDate?: Date;
  domains?: string[];
  kpiCodes?: string[];
}

export class CrossDomainAnalyticsRepository {
  async saveAnalytics(data: Omit<CrossDomainAnalyticsData, 'id' | 'created_at' | 'updated_at'>): Promise<CrossDomainAnalyticsData> {
    try {
      const { data: result, error } = await supabase
        .from('cross_domain_analytics')
        .upsert({
          period: data.period,
          kpi_metrics: data.kpi_metrics,
          impact_calculations: data.impact_calculations,
          composite_kpis: data.composite_kpis,
          cross_domain_health: data.cross_domain_health,
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to save cross-domain analytics: ${error.message}`);
      }

      return {
        id: result.id,
        period: result.period,
        kpi_metrics: result.kpi_metrics,
        impact_calculations: result.impact_calculations,
        composite_kpis: result.composite_kpis,
        cross_domain_health: result.cross_domain_health,
        created_at: result.created_at,
        updated_at: result.updated_at,
      };
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.saveAnalytics error:', error);
      throw error;
    }
  }

  async findByPeriod(period: string): Promise<CrossDomainAnalyticsData | null> {
    try {
      const { data, error } = await supabase
        .from('cross_domain_analytics')
        .select('*')
        .eq('period', period)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to find cross-domain analytics by period: ${error.message}`);
      }

      return data || null;
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.findByPeriod error:', error);
      throw error;
    }
  }

  async findByDateRange(filter: CrossDomainAnalyticsFilter): Promise<CrossDomainAnalyticsData[]> {
    try {
      let query = supabase
        .from('cross_domain_analytics')
        .select('*')
        .order('period', { ascending: true });

      if (filter.startDate) {
        const startDateStr = filter.startDate.toISOString().split('T')[0].substring(0, 7);
        query = query.gte('period', startDateStr);
      }

      if (filter.endDate) {
        const endDateStr = filter.endDate.toISOString().split('T')[0].substring(0, 7);
        query = query.lte('period', endDateStr);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to find cross-domain analytics by date range: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.findByDateRange error:', error);
      throw error;
    }
  }

  async findLatest(): Promise<CrossDomainAnalyticsData | null> {
    try {
      const { data, error } = await supabase
        .from('cross_domain_analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to find latest cross-domain analytics: ${error.message}`);
      }

      return data || null;
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.findLatest error:', error);
      throw error;
    }
  }

  async getHistoricalTrends(
    kpiCode: string, 
    domain: string, 
    limit: number = 12
  ): Promise<Array<{
    period: string;
    value: number;
    trend: 'up' | 'down' | 'stable';
  }>> {
    try {
      const { data, error } = await supabase
        .from('cross_domain_analytics')
        .select('period, kpi_metrics')
        .order('period', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(`Failed to get historical trends: ${error.message}`);
      }

      if (!data) {
        return [];
      }

      return data
        .map(item => {
          const kpi = item.kpi_metrics.find((k: KPIMetric) => 
            k.kpiCode === kpiCode && k.domain === domain
          );
          
          return kpi ? {
            period: item.period,
            value: kpi.value,
            trend: kpi.trend,
          } : null;
        })
        .filter(item => item !== null) as Array<{
          period: string;
          value: number;
          trend: 'up' | 'down' | 'stable';
        }>;
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.getHistoricalTrends error:', error);
      throw error;
    }
  }

  async getImpactHistory(
    sourceDomain: string,
    targetDomain: string,
    limit: number = 12
  ): Promise<ImpactCalculation[]> {
    try {
      const { data, error } = await supabase
        .from('cross_domain_analytics')
        .select('period, impact_calculations')
        .order('period', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(`Failed to get impact history: ${error.message}`);
      }

      if (!data) {
        return [];
      }

      const impacts: ImpactCalculation[] = [];
      data.forEach(item => {
        const relevantImpacts = item.impact_calculations.filter(
          (impact: ImpactCalculation) => 
            impact.sourceDomain === sourceDomain && impact.targetDomain === targetDomain
        );
        impacts.push(...relevantImpacts);
      });

      return impacts;
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.getImpactHistory error:', error);
      throw error;
    }
  }

  async getCompositeKPIHistory(
    compositeKpiId: string,
    limit: number = 12
  ): Promise<Array<{
    period: string;
    value: number;
    threshold: { critical: number; warning: number; good: number };
    trend: 'up' | 'down' | 'stable';
  }>> {
    try {
      const { data, error } = await supabase
        .from('cross_domain_analytics')
        .select('period, composite_kpis')
        .order('period', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(`Failed to get composite KPI history: ${error.message}`);
      }

      if (!data) {
        return [];
      }

      return data
        .map(item => {
          const compositeKpi = item.composite_kpis.find(
            (kpi: CompositeKPI) => kpi.id === compositeKpiId
          );
          
          return compositeKpi ? {
            period: item.period,
            value: compositeKpi.value,
            threshold: compositeKpi.threshold,
            trend: compositeKpi.trend,
          } : null;
        })
        .filter(item => item !== null) as Array<{
          period: string;
          value: number;
          threshold: { critical: number; warning: number; good: number };
          trend: 'up' | 'down' | 'stable';
        }>;
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.getCompositeKPIHistory error:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('cross_domain_analytics')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(`Failed to delete cross-domain analytics: ${error.message}`);
      }
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.delete error:', error);
      throw error;
    }
  }

  async getCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('cross_domain_analytics')
        .select('*', { count: 'exact', head: true });

      if (error) {
        throw new Error(`Failed to count cross-domain analytics: ${error.message}`);
      }

      return count || 0;
    } catch (error) {
      console.error('CrossDomainAnalyticsRepository.getCount error:', error);
      throw error;
    }
  }
}
