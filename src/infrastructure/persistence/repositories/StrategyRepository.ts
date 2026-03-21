import { IStrategyRepository } from '../../../domain/strategy/repositories/IStrategyRepository';
import { StrategyMetricsEntity } from '../../../domain/strategy/entities/StrategyMetricsEntity';
import { StrategyMetricsEntityFactory } from '../../../domain/strategy/entities/StrategyMetricsEntity';
import { supabase } from '../database/supabase-client';

export class StrategyRepository implements IStrategyRepository {
  async save(metrics: StrategyMetricsEntity): Promise<StrategyMetricsEntity> {
    try {
      const { data, error } = await supabase
        .from('strategy_metrics')
        .upsert({
          id: metrics.id,
          period: metrics.period,
          okr_progress: metrics.kpis.okrProgress.value,
          initiative_completion: metrics.kpis.initiativeCompletion.value,
          strategic_alignment: metrics.kpis.strategicAlignment.value,
          execution_rate: metrics.kpis.executionRate.value,
          calculated_at: metrics.calculatedAt.toISOString(),
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to save strategy metrics: ${error.message}`);
      }

      return StrategyMetricsEntityFactory.create({
        id: data.id,
        period: data.period,
        okrProgress: {
          value: data.okr_progress,
          unit: metrics.kpis.okrProgress.unit,
          threshold: metrics.kpis.okrProgress.threshold,
          trend: metrics.kpis.okrProgress.trend,
          domain: 'strategy',
        },
        initiativeCompletion: {
          value: data.initiative_completion,
          unit: metrics.kpis.initiativeCompletion.unit,
          threshold: metrics.kpis.initiativeCompletion.threshold,
          trend: metrics.kpis.initiativeCompletion.trend,
          domain: 'strategy',
        },
        strategicAlignment: {
          value: data.strategic_alignment,
          unit: metrics.kpis.strategicAlignment.unit,
          threshold: metrics.kpis.strategicAlignment.threshold,
          trend: metrics.kpis.strategicAlignment.trend,
          domain: 'strategy',
        },
        executionRate: {
          value: data.execution_rate,
          unit: metrics.kpis.executionRate.unit,
          threshold: metrics.kpis.executionRate.threshold,
          trend: metrics.kpis.executionRate.trend,
          domain: 'strategy',
        },
      });
    } catch (error) {
      console.error('StrategyRepository.save error:', error);
      throw error;
    }
  }

  async findById(id: string): Promise<StrategyMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('strategy_metrics')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to find strategy metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.mapDataToEntity(data);
    } catch (error) {
      console.error('StrategyRepository.findById error:', error);
      throw error;
    }
  }

  async findByPeriod(period: string): Promise<StrategyMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('strategy_metrics')
        .select('*')
        .eq('period', period)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to find strategy metrics by period: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('StrategyRepository.findByPeriod error:', error);
      throw error;
    }
  }

  async findLatest(): Promise<StrategyMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('strategy_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null;
        }
        throw new Error(`Failed to find latest strategy metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.mapDataToEntity(data);
    } catch (error) {
      console.error('StrategyRepository.findLatest error:', error);
      throw error;
    }
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<StrategyMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('strategy_metrics')
        .select('*')
        .gte('period', startDate.toISOString().split('T')[0].substring(0, 7))
        .lte('period', endDate.toISOString().split('T')[0].substring(0, 7))
        .order('period', { ascending: true });

      if (error) {
        throw new Error(`Failed to find strategy metrics by date range: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('StrategyRepository.findByDateRange error:', error);
      throw error;
    }
  }

  async getHistory(kpiCode: string, limit: number = 12): Promise<StrategyMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('strategy_metrics')
        .select('*')
        .order('period', { ascending: false })
        .limit(limit);

      if (error) {
        throw new Error(`Failed to get strategy metrics history: ${error.message}`);
      }

      return data ? data.map(item => this.mapDataToEntity(item)) : [];
    } catch (error) {
      console.error('StrategyRepository.getHistory error:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('strategy_metrics')
        .delete()
        .eq('id', id);

      if (error) {
        throw new Error(`Failed to delete strategy metrics: ${error.message}`);
      }
    } catch (error) {
      console.error('StrategyRepository.delete error:', error);
      throw error;
    }
  }

  async getCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('strategy_metrics')
        .select('*', { count: 'exact', head: true });

      if (error) {
        throw new Error(`Failed to count strategy metrics: ${error.message}`);
      }

      return count || 0;
    } catch (error) {
      console.error('StrategyRepository.getCount error:', error);
      throw error;
    }
  }

  private mapDataToEntity(data: any): StrategyMetricsEntity {
    return StrategyMetricsEntityFactory.create({
      id: data.id,
      period: data.period,
      okrProgress: {
        value: data.okr_progress,
        unit: '%',
        threshold: { critical: 30, warning: 60, good: 80 },
        trend: 'stable',
        domain: 'strategy',
      },
      initiativeCompletion: {
        value: data.initiative_completion,
        unit: '%',
        threshold: { critical: 40, warning: 70, good: 90 },
        trend: 'stable',
        domain: 'strategy',
      },
      strategicAlignment: {
        value: data.strategic_alignment,
        unit: '%',
        threshold: { critical: 50, warning: 75, good: 90 },
        trend: 'stable',
        domain: 'strategy',
      },
      executionRate: {
        value: data.execution_rate,
        unit: '%',
        threshold: { critical: 50, warning: 75, good: 95 },
        trend: 'stable',
        domain: 'strategy',
      },
    });
  }
}
