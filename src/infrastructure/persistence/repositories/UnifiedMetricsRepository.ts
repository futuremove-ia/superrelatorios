import { 
  UnifiedMetricsEntity, 
  DomainType,
  UnifiedKPIValue 
} from '../../../domain/unified/interfaces/UnifiedMetricsEntity';
import { supabase } from '../database/supabase-client';

/**
 * Unified Metrics Repository - Single repository for all domain metrics
 * 
 * This repository consolidates all domain-specific repositories into a single,
 * unified data access layer following Clean Architecture principles. It handles
 * all CRUD operations for unified metrics entities.
 * 
 * @example
 * ```typescript
 * const repository = new UnifiedMetricsRepository();
 * await repository.save(unifiedEntity);
 * const entities = await repository.findByDomain('financial');
 * ```
 */
export class UnifiedMetricsRepository {
  private readonly tableName = 'unified_metrics';

  /**
   * Saves a unified metrics entity to the database
   * 
   * @param entity - The unified metrics entity to save
   * @returns The saved entity
   * @throws Error when database operation fails
   */
  async save(entity: UnifiedMetricsEntity): Promise<UnifiedMetricsEntity> {
    try {
      const dbData = this.transformEntityToDB(entity);
      
      const { data, error } = await supabase
        .from(this.tableName)
        .upsert(dbData)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to save unified metrics: ${error.message}`);
      }

      if (!data) {
        throw new Error('No data returned from save operation');
      }

      return this.transformDBToEntity(data);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during save operation');
    }
  }

  /**
   * Finds a unified metrics entity by ID
   * 
   * @param id - The entity ID to search for
   * @returns The found entity or null if not found
   * @throws Error when database operation fails
   */
  async findById(id: string): Promise<UnifiedMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Not found
        }
        throw new Error(`Failed to find unified metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.transformDBToEntity(data);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during findById operation');
    }
  }

  /**
   * Finds unified metrics entities by domain
   * 
   * @param domain - The domain type to filter by
   * @param options - Optional filtering options
   * @returns Array of unified metrics entities
   * @throws Error when database operation fails
   */
  async findByDomain(
    domain: DomainType, 
    options?: {
      startPeriod?: string;
      endPeriod?: string;
      limit?: number;
    }
  ): Promise<UnifiedMetricsEntity[]> {
    try {
      let query = supabase
        .from(this.tableName)
        .select('*')
        .eq('domain', domain);

      // Apply period filtering if provided
      if (options?.startPeriod) {
        query = query.gte('period', options.startPeriod);
      }
      if (options?.endPeriod) {
        query = query.lte('period', options.endPeriod);
      }

      // Apply ordering and limits
      query = query.order('period', { ascending: false });
      
      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        throw new Error(`Failed to find metrics by domain: ${error.message}`);
      }

      return (data || []).map(item => this.transformDBToEntity(item));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during findByDomain operation');
    }
  }

  /**
   * Finds cross-domain metrics for a specific period
   * 
   * @param period - The period to search for
   * @returns Array of unified metrics entities from all domains
   * @throws Error when database operation fails
   */
  async findCrossDomain(period: string): Promise<UnifiedMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('period', period)
        .order('domain', { ascending: true });

      if (error) {
        throw new Error(`Failed to find cross-domain metrics: ${error.message}`);
      }

      return (data || []).map(item => this.transformDBToEntity(item));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during findCrossDomain operation');
    }
  }

  /**
   * Deletes a unified metrics entity by ID
   * 
   * @param id - The entity ID to delete
   * @returns True if deleted successfully, false if not found
   * @throws Error when database operation fails
   */
  async delete(id: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .delete()
        .eq('id', id)
        .select()
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return false; // Not found
        }
        throw new Error(`Failed to delete unified metrics: ${error.message}`);
      }

      return !!data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during delete operation');
    }
  }

  /**
   * Updates a unified metrics entity
   * 
   * @param entity - The entity to update
   * @returns The updated entity
   * @throws Error when database operation fails
   */
  async update(entity: UnifiedMetricsEntity): Promise<UnifiedMetricsEntity> {
    try {
      const dbData = this.transformEntityToDB(entity);
      
      const { data, error } = await supabase
        .from(this.tableName)
        .update(dbData)
        .eq('id', entity.id)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to update unified metrics: ${error.message}`);
      }

      if (!data) {
        throw new Error('No data returned from update operation');
      }

      return this.transformDBToEntity(data);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during update operation');
    }
  }

  /**
   * Gets the latest metrics for a specific domain
   * 
   * @param domain - The domain type
   * @returns The latest unified metrics entity or null if not found
   * @throws Error when database operation fails
   */
  async getLatestByDomain(domain: DomainType): Promise<UnifiedMetricsEntity | null> {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('domain', domain)
        .order('period', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return null; // Not found
        }
        throw new Error(`Failed to get latest metrics: ${error.message}`);
      }

      if (!data) {
        return null;
      }

      return this.transformDBToEntity(data);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during getLatestByDomain operation');
    }
  }

  /**
   * Gets metrics for multiple periods
   * 
   * @param periods - Array of periods to search for
   * @returns Array of unified metrics entities
   * @throws Error when database operation fails
   */
  async findByPeriods(periods: string[]): Promise<UnifiedMetricsEntity[]> {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .in('period', periods)
        .order('period', { ascending: false })
        .order('domain', { ascending: true });

      if (error) {
        throw new Error(`Failed to find metrics by periods: ${error.message}`);
      }

      return (data || []).map(item => this.transformDBToEntity(item));
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during findByPeriods operation');
    }
  }

  /**
   * Gets metrics summary by domain
   * 
   * @param domain - The domain type
   * @param startPeriod - Start period for summary
   * @param endPeriod - End period for summary
   * @returns Summary statistics for the domain
   * @throws Error when database operation fails
   */
  async getDomainSummary(
    domain: DomainType, 
    startPeriod: string, 
    endPeriod: string
  ): Promise<{
    totalRecords: number;
    periods: string[];
    latestPeriod: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('period')
        .eq('domain', domain)
        .gte('period', startPeriod)
        .lte('period', endPeriod)
        .order('period', { ascending: false });

      if (error) {
        throw new Error(`Failed to get domain summary: ${error.message}`);
      }

      const periods = (data || []).map((item: any) => item.period as string);
      const uniquePeriods = [...new Set(periods)];

      return {
        totalRecords: periods.length,
        periods: uniquePeriods,
        latestPeriod: uniquePeriods.length > 0 ? uniquePeriods[0] : null
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unexpected error during getDomainSummary operation');
    }
  }

  // Private helper methods

  /**
   * Transforms a unified metrics entity to database format
   * 
   * @param entity - The entity to transform
   * @returns Database-ready data object
   */
  private transformEntityToDB(entity: UnifiedMetricsEntity): any {
    // Transform KPIs to individual database rows
    const kpiRows = Object.entries(entity.kpis).map(([kpiCode, kpiValue]) => ({
      id: entity.id,
      period: entity.period,
      domain: entity.domain,
      kpi_code: kpiCode,
      value: kpiValue.value,
      unit: kpiValue.unit,
      threshold_critical: kpiValue.threshold.critical,
      threshold_warning: kpiValue.threshold.warning,
      threshold_good: kpiValue.threshold.good,
      trend: kpiValue.trend,
      previous_value: kpiValue.previousValue,
      change_percentage: kpiValue.change,
      confidence: kpiValue.confidence,
      last_updated: kpiValue.lastUpdated?.toISOString(),
      calculated_at: entity.calculatedAt.toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));

    // For simplicity, return the first row for upsert operations
    // In a real implementation, you might handle multiple KPIs differently
    return kpiRows[0] || {};
  }

  /**
   * Transforms database data to unified metrics entity format
   * 
   * @param data - Database data object
   * @returns Unified metrics entity
   */
  private transformDBToEntity(data: any): UnifiedMetricsEntity {
    // Handle case where data is already in entity format (from upsert response)
    if (data.kpis && typeof data.kpis === 'object' && !data.kpi_code) {
      return {
        id: data.id,
        domain: data.domain,
        period: data.period,
        kpis: data.kpis,
        calculatedAt: data.calculated_at ? new Date(data.calculated_at) : new Date()
      };
    }

    // Reconstruct KPIs from database row (single KPI format)
    const kpis: Record<string, UnifiedKPIValue> = {};
    
    if (data.kpi_code && data.value !== undefined) {
      kpis[data.kpi_code] = {
        value: data.value,
        unit: data.unit || '',
        threshold: {
          critical: data.threshold_critical || 0,
          warning: data.threshold_warning || 0,
          good: data.threshold_good || 0
        },
        trend: data.trend || 'stable',
        previousValue: data.previous_value,
        change: data.change_percentage,
        confidence: data.confidence || 0,
        lastUpdated: data.last_updated ? new Date(data.last_updated) : undefined,
        domain: data.domain
      };
    }

    return {
      id: data.id,
      domain: data.domain,
      period: data.period,
      kpis,
      calculatedAt: data.calculated_at ? new Date(data.calculated_at) : new Date()
    };
  }
}
