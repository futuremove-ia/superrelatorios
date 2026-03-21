import { IOperationsRepository } from '../../../domain/operations/repositories/IOperationsRepository';
import { OperationsMetricsEntity } from '../../../domain/operations/entities/OperationsMetricsEntity';
import { OperationsMetricsEntityFactory } from '../../../domain/operations/entities/OperationsMetricsEntity';
import { supabase } from '../database/supabase-client';

export class OperationsRepository implements IOperationsRepository {
  async save(metrics: OperationsMetricsEntity): Promise<OperationsMetricsEntity> {
    try {
      const { data, error } = await supabase
        .from('operations_metrics')
        .upsert({
          id: metrics.id,
          period: metrics.period,
          operational_efficiency: metrics.kpis.operationalEfficiency.value,
          quality_rate: metrics.kpis.qualityRate.value,
          throughput: metrics.kpis.throughput.value,
          capacity_utilization: metrics.kpis.capacityUtilization.value,
          operational_cost: metrics.kpis.operationalCost.value,
          calculated_at: metrics.calculatedAt.toISOString(),
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to save operations metrics: ${error.message}`);
      }

      return OperationsMetricsEntityFactory.create({
        id: data.id,
        period: data.period,
        operationalEfficiency: {
          value: data.operational_efficiency,
          unit: metrics.kpis.operationalEfficiency.unit,
          threshold: metrics.kpis.operationalEfficiency.threshold,
          trend: metrics.kpis.operationalEfficiency.trend,
          domain: 'operations',
        },
        qualityRate: {
          value: data.quality_rate,
          unit: metrics.kpis.qualityRate.unit,
          threshold: metrics.kpis.qualityRate.threshold,
          trend: metrics.kpis.qualityRate.trend,
          domain: 'operations',
        },
        throughput: {
          value: data.throughput,
          unit: metrics.kpis.throughput.unit,
          threshold: metrics.kpis.throughput.threshold,
          trend: metrics.kpis.throughput.trend,
          domain: 'operations',
        },
        capacityUtilization: {
          value: data.capacity_utilization,
          unit: metrics.kpis.capacityUtilization.unit,
          threshold: metrics.kpis.capacityUtilization.threshold,
          trend: metrics.kpis.capacityUtilization.trend,
          domain: 'operations',
        },
        operationalCost: {
          value: data.operational_cost,
          unit: metrics.kpis.operationalCost.unit,
          threshold: metrics.kpis.operationalCost.threshold,
          trend: metrics.kpis.operationalCost.trend,
          domain: 'operations',
        },
      });
    } catch (error) {
      console.error('OperationsRepository.save error:', error);
      throw error;
    }
  }

  async findById(id: string): Promise<OperationsMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('operations_metrics')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to find operations metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.mapDataToEntity(data);
    } catch (error) {
      console.error('OperationsRepository.findById error:', error);
      throw error;
    }
  }

  async findByPeriod(period: string): Promise<OperationsMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('operations_metrics')
        .select('*')
        .eq('period', period)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to find operations metrics by period: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('OperationsRepository.findByPeriod error:', error);
      throw error;
    }
  }

  async findLatest(): Promise<OperationsMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('operations_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to find latest operations metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.mapDataToEntity(data);
    } catch (error) {
      console.error('OperationsRepository.findLatest error:', error);
      throw error;
    }
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<OperationsMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('operations_metrics')
        .select('*')
        .gte('period', startDate.toISOString().split('T')[0].substring(0, 7))
        .lte('period', endDate.toISOString().split('T')[0].substring(0, 7))
        .order('period', { ascending: true });

      if (error) {
        throw new Error(`Failed to find operations metrics by date range: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('OperationsRepository.findByDateRange error:', error);
      throw error;
    }
  }

  async getHistory(kpiCode: string, limit: number = 12): Promise<OperationsMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('operations_metrics')
        .select('*')
        .order('period', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(`Failed to get operations metrics history: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('OperationsRepository.getHistory error:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('operations_metrics')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(`Failed to delete operations metrics: ${error.message}`);
      }
    } catch (error) {
      console.error('OperationsRepository.delete error:', error);
      throw error;
    }
  }

  async getCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('operations_metrics')
        .select('*', { count: 'exact', head: true });

      if (error) {
        throw new Error(`Failed to count operations metrics: ${error.message}`);
      }

      return count || 0;
    } catch (error) {
      console.error('OperationsRepository.getCount error:', error);
      throw error;
    }
  }

  private mapDataToEntity(data: any): OperationsMetricsEntity {
    return OperationsMetricsEntityFactory.create({
      id: data.id,
      period: data.period,
      operationalEfficiency: {
        value: data.operational_efficiency,
        unit: '%',
        threshold: { critical: 60, warning: 75, good: 85 },
        trend: 'stable',
        domain: 'operations',
      },
      qualityRate: {
        value: data.quality_rate,
        unit: '%',
        threshold: { critical: 85, warning: 90, good: 95 },
        trend: 'stable',
        domain: 'operations',
      },
      throughput: {
        value: data.throughput,
        unit: 'unidades/hora',
        threshold: { critical: 50, warning: 100, good: 200 },
        trend: 'stable',
        domain: 'operations',
      },
      capacityUtilization: {
        value: data.capacity_utilization,
        unit: '%',
        threshold: { critical: 60, warning: 75, good: 85 },
        trend: 'stable',
        domain: 'operations',
      },
      operationalCost: {
        value: data.operational_cost,
        unit: 'R$/funcionário',
        threshold: { critical: 10000, warning: 7000, good: 5000 },
        trend: 'stable',
        domain: 'operations',
      },
    });
  }
}
