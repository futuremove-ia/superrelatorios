import { ICommercialRepository } from '../../../domain/commercial/repositories/ICommercialRepository';
import { CommercialMetricsEntity, CommercialMetricsEntityFactory, KPIValue } from '../../../domain/commercial/entities/CommercialMetricsEntity';
import { supabase } from '../database/supabase-client';

interface CommercialDatabaseRecord {
  id: string;
  period: string;
  sales_conversion_rate: number;
  customer_acquisition_cost: number;
  customer_lifetime_value: number;
  churn_rate: number;
  average_ticket: number;
  pipeline_velocity: number;
  calculated_at: string;
}

export class CommercialRepository implements ICommercialRepository {
  async save(metrics: CommercialMetricsEntity): Promise<CommercialMetricsEntity> {
    try {
      const { data, error } = await supabase
        .from('commercial_metrics')
        .upsert({
          id: metrics.id,
          period: metrics.period,
          sales_conversion_rate: metrics.kpis.salesConversion.value,
          customer_acquisition_cost: metrics.kpis.customerAcquisitionCost.value,
          customer_lifetime_value: metrics.kpis.customerLifetimeValue.value,
          churn_rate: metrics.kpis.churnRate.value,
          average_ticket: metrics.kpis.averageTicket.value,
          pipeline_velocity: metrics.kpis.pipelineVelocity.value,
          calculated_at: metrics.calculatedAt.toISOString(),
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to save commercial metrics: ${error.message}`);
      }

      // Return the entity with the saved data
      return CommercialMetricsEntityFactory.create({
        id: data.id,
        period: data.period,
        salesConversion: {
          value: data.sales_conversion_rate,
          unit: metrics.kpis.salesConversion.unit,
          threshold: metrics.kpis.salesConversion.threshold,
          trend: metrics.kpis.salesConversion.trend,
          domain: 'commercial',
        },
        customerAcquisitionCost: {
          value: data.customer_acquisition_cost,
          unit: metrics.kpis.customerAcquisitionCost.unit,
          threshold: metrics.kpis.customerAcquisitionCost.threshold,
          trend: metrics.kpis.customerAcquisitionCost.trend,
          domain: 'commercial',
        },
        customerLifetimeValue: {
          value: data.customer_lifetime_value,
          unit: metrics.kpis.customerLifetimeValue.unit,
          threshold: metrics.kpis.customerLifetimeValue.threshold,
          trend: metrics.kpis.customerLifetimeValue.trend,
          domain: 'commercial',
        },
        churnRate: {
          value: data.churn_rate,
          unit: metrics.kpis.churnRate.unit,
          threshold: metrics.kpis.churnRate.threshold,
          trend: metrics.kpis.churnRate.trend,
          domain: 'commercial',
        },
        averageTicket: {
          value: data.average_ticket,
          unit: metrics.kpis.averageTicket.unit,
          threshold: metrics.kpis.averageTicket.threshold,
          trend: metrics.kpis.averageTicket.trend,
          domain: 'commercial',
        },
        pipelineVelocity: {
          value: data.pipeline_velocity,
          unit: metrics.kpis.pipelineVelocity.unit,
          threshold: metrics.kpis.pipelineVelocity.threshold,
          trend: metrics.kpis.pipelineVelocity.trend,
          domain: 'commercial',
        },
      });
    } catch (error) {
      console.error('CommercialRepository.save error:', error);
      throw error;
    }
  }

  async findById(id: string): Promise<CommercialMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('commercial_metrics')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Not found
        }
        throw new Error(`Failed to find commercial metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.mapDataToEntity(data);
    } catch (error) {
      console.error('CommercialRepository.findById error:', error);
      throw error;
    }
  }

  async findByPeriod(period: string): Promise<CommercialMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('commercial_metrics')
        .select('*')
        .eq('period', period)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to find commercial metrics by period: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('CommercialRepository.findByPeriod error:', error);
      throw error;
    }
  }

  async findLatest(): Promise<CommercialMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('commercial_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // No data found
        }
        throw new Error(`Failed to find latest commercial metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.mapDataToEntity(data);
    } catch (error) {
      console.error('CommercialRepository.findLatest error:', error);
      throw error;
    }
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<CommercialMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('commercial_metrics')
        .select('*')
        .gte('period', startDate.toISOString().split('T')[0].substring(0, 7))
        .lte('period', endDate.toISOString().split('T')[0].substring(0, 7))
        .order('period', { ascending: true });

      if (error) {
        throw new Error(`Failed to find commercial metrics by date range: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('CommercialRepository.findByDateRange error:', error);
      throw error;
    }
  }

  async getHistory(kpiCode: string, limit: number = 12): Promise<CommercialMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('commercial_metrics')
        .select('*')
        .order('period', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(`Failed to get commercial metrics history: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('CommercialRepository.getHistory error:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('commercial_metrics')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(`Failed to delete commercial metrics: ${error.message}`);
      }
    } catch (error) {
      console.error('CommercialRepository.delete error:', error);
      throw error;
    }
  }

  async getCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('commercial_metrics')
        .select('*', { count: 'exact', head: true });

      if (error) {
        throw new Error(`Failed to count commercial metrics: ${error.message}`);
      }

      return count || 0;
    } catch (error) {
      console.error('CommercialRepository.getCount error:', error);
      throw error;
    }
  }

  private mapDataToEntity(data: CommercialDatabaseRecord): CommercialMetricsEntity {
    return CommercialMetricsEntityFactory.create({
      id: data.id,
      period: data.period,
      salesConversion: {
        value: data.sales_conversion_rate,
        unit: '%',
        threshold: { critical: 5, warning: 15, good: 25 },
        trend: 'stable',
        domain: 'commercial',
      },
      customerAcquisitionCost: {
        value: data.customer_acquisition_cost,
        unit: 'R$',
        threshold: { critical: 500, warning: 200, good: 100 },
        trend: 'stable',
        domain: 'commercial',
      },
      customerLifetimeValue: {
        value: data.customer_lifetime_value,
        unit: 'R$',
        threshold: { critical: 1000, warning: 3000, good: 5000 },
        trend: 'stable',
        domain: 'commercial',
      },
      churnRate: {
        value: data.churn_rate,
        unit: '%',
        threshold: { critical: 15, warning: 10, good: 5 },
        trend: 'stable',
        domain: 'commercial',
      },
      averageTicket: {
        value: data.average_ticket,
        unit: 'R$',
        threshold: { critical: 500, warning: 1000, good: 2000 },
        trend: 'stable',
        domain: 'commercial',
      },
      pipelineVelocity: {
        value: data.pipeline_velocity,
        unit: 'R$/dia',
        threshold: { critical: 100, warning: 500, good: 1000 },
        trend: 'stable',
        domain: 'commercial',
      },
    });
  }
}
