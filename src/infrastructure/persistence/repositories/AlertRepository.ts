import { IAlertRepository, AlertEntity } from '../../../domain/metrics';
import { supabase } from '../database/supabase-client';
import { MetricsMapper } from '../mappers/MetricsMapper';

/**
 * Concrete implementation of IAlertRepository
 * Handles persistence of AlertEntity using Supabase
 * Follows Clean Architecture principles
 */

export class AlertRepository implements IAlertRepository {
  /**
   * Save alert to database
   */
  async save(alert: AlertEntity): Promise<AlertEntity> {
    try {
      const dbData = MetricsMapper.alertToDatabase(alert);
      
      const { data, error } = await supabase
        .from('alerts')
        .insert(dbData)
        .select()
        .single();

      if (error) {
        console.error('Error saving alert:', error);
        throw new Error(`Failed to save alert: ${error.message}`);
      }

      return MetricsMapper.alertFromDatabase(data);
    } catch (error) {
      console.error('AlertRepository.save error:', error);
      throw error;
    }
  }

  /**
   * Find alert by ID
   */
  async findById(id: string): Promise<AlertEntity | null> {
    try {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Not found
        }
        console.error('Error finding alert by ID:', error);
        throw new Error(`Failed to find alert: ${error.message}`);
      }

      return MetricsMapper.alertFromDatabase(data);
    } catch (error) {
      console.error('AlertRepository.findById error:', error);
      throw error;
    }
  }

  /**
   * Find active (unresolved) alerts
   */
  async findActive(): Promise<AlertEntity[]> {
    try {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .is('resolved_at', null)
        .order('triggered_at', { ascending: false });

      if (error) {
        console.error('Error finding active alerts:', error);
        throw new Error(`Failed to find active alerts: ${error.message}`);
      }

      return MetricsMapper.alertsFromDatabaseArray(data);
    } catch (error) {
      console.error('AlertRepository.findActive error:', error);
      throw error;
    }
  }

  /**
   * Find alerts by KPI
   */
  async findByKPI(kpiCode: string): Promise<AlertEntity[]> {
    try {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .eq('kpi_code', kpiCode)
        .order('triggered_at', { ascending: false });

      if (error) {
        console.error('Error finding alerts by KPI:', error);
        throw new Error(`Failed to find alerts by KPI: ${error.message}`);
      }

      return MetricsMapper.alertsFromDatabaseArray(data);
    } catch (error) {
      console.error('AlertRepository.findByKPI error:', error);
      throw error;
    }
  }

  /**
   * Find alerts within date range
   */
  async findByDateRange(startDate: Date, endDate: Date): Promise<AlertEntity[]> {
    try {
      const { data, error } = await supabase
        .from('alerts')
        .select('*')
        .gte('triggered_at', startDate.toISOString())
        .lte('triggered_at', endDate.toISOString())
        .order('triggered_at', { ascending: false });

      if (error) {
        console.error('Error finding alerts by date range:', error);
        throw new Error(`Failed to find alerts by date range: ${error.message}`);
      }

      return MetricsMapper.alertsFromDatabaseArray(data);
    } catch (error) {
      console.error('AlertRepository.findByDateRange error:', error);
      throw error;
    }
  }

  /**
   * Update alert status (acknowledge/resolve)
   */
  async update(alert: AlertEntity): Promise<AlertEntity> {
    try {
      const dbData = {
        acknowledged_at: alert.acknowledgedAt?.toISOString(),
        resolved_at: alert.resolvedAt?.toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('alerts')
        .update(dbData)
        .eq('id', alert.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating alert:', error);
        throw new Error(`Failed to update alert: ${error.message}`);
      }

      return MetricsMapper.alertFromDatabase(data);
    } catch (error) {
      console.error('AlertRepository.update error:', error);
      throw error;
    }
  }

  /**
   * Delete resolved alerts older than specified days
   */
  async cleanupOldAlerts(daysOld: number): Promise<number> {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysOld);

      const { data, error } = await supabase
        .from('alerts')
        .delete()
        .lt('resolved_at', cutoffDate.toISOString())
        .select('count');

      if (error) {
        console.error('Error cleaning up old alerts:', error);
        throw new Error(`Failed to cleanup old alerts: ${error.message}`);
      }

      return data?.length || 0;
    } catch (error) {
      console.error('AlertRepository.cleanupOldAlerts error:', error);
      throw error;
    }
  }

  /**
   * Get alert statistics
   */
  async getStatistics(period?: string): Promise<{
    total: number;
    critical: number;
    warning: number;
    info: number;
    resolved: number;
    acknowledged: number;
  }> {
    try {
      let query = supabase
        .from('alerts')
        .select('level, resolved_at, acknowledged_at', { count: 'exact' });

      if (period) {
        const startDate = new Date(period);
        const endDate = new Date(period);
        endDate.setMonth(endDate.getMonth() + 1);
        
        query = query
          .gte('triggered_at', startDate.toISOString())
          .lt('triggered_at', endDate.toISOString());
      }

      const { data, error, count } = await query;

      if (error) {
        console.error('Error getting alert statistics:', error);
        throw new Error(`Failed to get alert statistics: ${error.message}`);
      }

      const stats = {
        total: count || 0,
        critical: 0,
        warning: 0,
        info: 0,
        resolved: 0,
        acknowledged: 0,
      };

      if (data) {
        data.forEach(alert => {
          // Count by level
          if (alert.level === 'critical') stats.critical++;
          else if (alert.level === 'warning') stats.warning++;
          else if (alert.level === 'info') stats.info++;

          // Count resolved and acknowledged
          if (alert.resolved_at) stats.resolved++;
          if (alert.acknowledged_at) stats.acknowledged++;
        });
      }

      return stats;
    } catch (error) {
      console.error('AlertRepository.getStatistics error:', error);
      throw error;
    }
  }

  /**
   * Get alerts count for pagination
   */
  async getCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from('alerts')
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Error getting alerts count:', error);
        throw new Error(`Failed to get alerts count: ${error.message}`);
      }

      return count || 0;
    } catch (error) {
      console.error('AlertRepository.getCount error:', error);
      throw error;
    }
  }
}
