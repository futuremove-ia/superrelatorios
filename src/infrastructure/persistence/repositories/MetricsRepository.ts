import { IMetricsRepository, MetricsEntity } from '../../../domain/metrics';
import { supabase } from '../database/supabase-client';
import { MetricsMapper } from '../mappers/MetricsMapper';

/**
 * Concrete implementation of IMetricsRepository
 * Handles persistence of MetricsEntity using Supabase
 * Follows Clean Architecture principles
 */

export class MetricsRepository implements IMetricsRepository {
  /**
   * Save metrics to database
   */
  async save(metrics: MetricsEntity): Promise<MetricsEntity> {
    try {
      const dbData = MetricsMapper.toDatabase(metrics);
      
      const { data, error } = await supabase
        .from('metrics')
        .upsert(dbData, {
          onConflict: 'period',
          ignoreDuplicates: false
        })
        .select()
        .single();

      if (error) {
        console.error('Error saving metrics:', error);
        throw new Error(`Failed to save metrics: ${error.message}`);
      }

      return MetricsMapper.fromDatabase(data);
    } catch (error) {
      console.error('MetricsRepository.save error:', error);
      throw error;
    }
  }

  /**
   * Find metrics by ID
   */
  async findById(id: string): Promise<MetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Not found
        }
        console.error('Error finding metrics by ID:', error);
        throw new Error(`Failed to find metrics: ${error.message}`);
      }

      return MetricsMapper.fromDatabase(data);
    } catch (error) {
      console.error('MetricsRepository.findById error:', error);
      throw error;
    }
  }

  /**
   * Find metrics by period
   */
  async findByPeriod(period: string): Promise<MetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .eq('period', period)
        .order('calculated_at', { ascending: false });

      if (error) {
        console.error('Error finding metrics by period:', error);
        throw new Error(`Failed to find metrics by period: ${error.message}`);
      }

      return data.map(item => MetricsMapper.fromDatabase(item));
    } catch (error) {
      console.error('MetricsRepository.findByPeriod error:', error);
      throw error;
    }
  }

  /**
   * Find latest metrics
   */
  async findLatest(): Promise<MetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .order('calculated_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // No metrics found
        }
        console.error('Error finding latest metrics:', error);
        throw new Error(`Failed to find latest metrics: ${error.message}`);
      }

      return MetricsMapper.fromDatabase(data);
    } catch (error) {
      console.error('MetricsRepository.findLatest error:', error);
      throw error;
    }
  }

  /**
   * Find metrics within date range
   */
  async findByDateRange(startDate: Date, endDate: Date): Promise<MetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .gte('calculated_at', startDate.toISOString())
        .lte('calculated_at', endDate.toISOString())
        .order('calculated_at', { ascending: false });

      if (error) {
        console.error('Error finding metrics by date range:', error);
        throw new Error(`Failed to find metrics by date range: ${error.message}`);
      }

      return data.map(item => MetricsMapper.fromDatabase(item));
    } catch (error) {
      console.error('MetricsRepository.findByDateRange error:', error);
      throw error;
    }
  }

  /**
   * Get metrics history for trend analysis
   */
  async getHistory(kpiCode: string, limit: number = 10): Promise<MetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .order('calculated_at', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error getting metrics history:', error);
        throw new Error(`Failed to get metrics history: ${error.message}`);
      }

      return data.map(item => MetricsMapper.fromDatabase(item));
    } catch (error) {
      console.error('MetricsRepository.getHistory error:', error);
      throw error;
    }
  }

  /**
   * Delete metrics by ID
   */
  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('metrics')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting metrics:', error);
        throw new Error(`Failed to delete metrics: ${error.message}`);
      }
    } catch (error) {
      console.error('MetricsRepository.delete error:', error);
      throw error;
    }
  }

  /**
   * Get metrics count for pagination
   */
  async getCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('metrics')
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Error getting metrics count:', error);
        throw new Error(`Failed to get metrics count: ${error.message}`);
      }

      return count || 0;
    } catch (error) {
      console.error('MetricsRepository.getCount error:', error);
      throw error;
    }
  }
}
