import { createClient } from "@/lib/supabase";
import { z } from "zod";

// Schema Types
export const organizationBenchmarkSchema = z.object({
  id: z.string().uuid(),
  kpi_id: z.string().uuid(),
  organization_id: z.string().uuid(),
  period_reference: z.string(),
  value_target: z.number(),
  value_excellent: z.number().nullable(),
  value_good: z.number().nullable(),
  value_warning: z.number().nullable(),
  value_critical: z.number().nullable(),
  created_at: z.string().datetime(),
});

export type OrganizationBenchmark = z.infer<typeof organizationBenchmarkSchema>;

export const marketBenchmarkSchema = z.object({
  id: z.string().uuid(),
  kpi_id: z.string().uuid(),
  industry_sector: z.string().nullable(),
  company_size: z.string().nullable(),
  value_market_avg: z.number(),
  source_name: z.string(),
  created_at: z.string().datetime(),
});

export type MarketBenchmark = z.infer<typeof marketBenchmarkSchema>;

export const benchmarkCreateSchema = z.object({
  kpi_id: z.string().uuid(),
  organization_id: z.string().uuid(),
  period_reference: z.string(),
  value_target: z.number(),
  value_excellent: z.number().optional(),
  value_good: z.number().optional(),
  value_warning: z.number().optional(),
  value_critical: z.number().optional(),
});

export type BenchmarkCreate = z.infer<typeof benchmarkCreateSchema>;

export const marketBenchmarkCreateSchema = z.object({
  kpi_id: z.string().uuid(),
  industry_sector: z.string().optional(),
  company_size: z.string().optional(),
  value_market_avg: z.number(),
  source_name: z.string(),
});

export type MarketBenchmarkCreate = z.infer<typeof marketBenchmarkCreateSchema>;

export interface BenchmarkContext {
  company_size?: string;
  industry_sector?: string;
}

export interface BestBenchmark {
  benchmark_type: "internal" | "market";
  source: string;
  value_target: number;
  value_excellent?: number;
  value_good?: number;
  value_warning?: number;
  value_critical?: number;
  relevance_score: number;
}

export class BenchmarkService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || "",
    import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  );

  /**
   * Get organization benchmarks
   */
  async getOrganizationBenchmarks(
    organizationId: string,
  ): Promise<OrganizationBenchmark[]> {
    const { data, error } = await this.supabase
      .from("organization_benchmarks")
      .select("*")
      .eq("organization_id", organizationId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching organization benchmarks:", error);
      throw new Error(
        `Failed to fetch organization benchmarks: ${error.message}`,
      );
    }

    return organizationBenchmarkSchema.array().parse(data || []);
  }

  /**
   * Get organization benchmark by KPI
   */
  async getOrganizationBenchmarkByKPI(
    organizationId: string,
    kpiId: string,
  ): Promise<OrganizationBenchmark | null> {
    const { data, error } = await this.supabase
      .from("organization_benchmarks")
      .select("*")
      .eq("organization_id", organizationId)
      .eq("kpi_id", kpiId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error("Error fetching organization benchmark by KPI:", error);
      throw new Error(
        `Failed to fetch organization benchmark by KPI: ${error.message}`,
      );
    }

    return organizationBenchmarkSchema.safeParse(data).success ? data : null;
  }

  /**
   * Create organization benchmark
   */
  async createOrganizationBenchmark(
    benchmark: BenchmarkCreate,
  ): Promise<OrganizationBenchmark> {
    const { data, error } = await this.supabase
      .from("organization_benchmarks")
      .insert(benchmark)
      .select()
      .single();

    if (error) {
      console.error("Error creating organization benchmark:", error);
      throw new Error(
        `Failed to create organization benchmark: ${error.message}`,
      );
    }

    const parsed = organizationBenchmarkSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid organization benchmark data returned: ${parsed.error.message}`,
      );
    }

    return parsed.data;
  }

  /**
   * Update organization benchmark
   */
  async updateOrganizationBenchmark(
    id: string,
    updates: Partial<BenchmarkCreate>,
  ): Promise<OrganizationBenchmark> {
    const { data, error } = await this.supabase
      .from("organization_benchmarks")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating organization benchmark:", error);
      throw new Error(
        `Failed to update organization benchmark: ${error.message}`,
      );
    }

    const parsed = organizationBenchmarkSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid organization benchmark data returned: ${parsed.error.message}`,
      );
    }

    return parsed.data;
  }

  /**
   * Delete organization benchmark
   */
  async deleteOrganizationBenchmark(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("organization_benchmarks")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting organization benchmark:", error);
      throw new Error(
        `Failed to delete organization benchmark: ${error.message}`,
      );
    }
  }

  /**
   * Get market benchmarks
   */
  async getMarketBenchmarks(kpiId?: string): Promise<MarketBenchmark[]> {
    let query = this.supabase
      .from("market_benchmarks")
      .select("*")
      .order("created_at", { ascending: false });

    if (kpiId) {
      query = query.eq("kpi_id", kpiId);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching market benchmarks:", error);
      throw new Error(`Failed to fetch market benchmarks: ${error.message}`);
    }

    return marketBenchmarkSchema.array().parse(data || []);
  }

  /**
   * Get market benchmarks by context
   */
  async getMarketBenchmarksByContext(
    kpiId: string,
    context: BenchmarkContext,
  ): Promise<MarketBenchmark[]> {
    let query = this.supabase
      .from("market_benchmarks")
      .select("*")
      .eq("kpi_id", kpiId);

    // Apply context filters
    if (context.company_size) {
      query = query.eq("company_size", context.company_size);
    }

    if (context.industry_sector) {
      query = query.eq("industry_sector", context.industry_sector);
    }

    const { data, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error) {
      console.error("Error fetching market benchmarks by context:", error);
      throw new Error(
        `Failed to fetch market benchmarks by context: ${error.message}`,
      );
    }

    return marketBenchmarkSchema.array().parse(data || []);
  }

  /**
   * Create market benchmark
   */
  async createMarketBenchmark(
    benchmark: MarketBenchmarkCreate,
  ): Promise<MarketBenchmark> {
    const { data, error } = await this.supabase
      .from("market_benchmarks")
      .insert(benchmark)
      .select()
      .single();

    if (error) {
      console.error("Error creating market benchmark:", error);
      throw new Error(`Failed to create market benchmark: ${error.message}`);
    }

    const parsed = marketBenchmarkSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid market benchmark data returned: ${parsed.error.message}`,
      );
    }

    return parsed.data;
  }

  /**
   * Get best benchmark (internal or market) for a KPI
   */
  async getBestBenchmark(
    kpiId: string,
    organizationId: string,
    context: BenchmarkContext = {},
  ): Promise<BestBenchmark | null> {
    try {
      // First, try to get internal benchmark
      const internalBenchmark = await this.getOrganizationBenchmarkByKPI(
        organizationId,
        kpiId,
      );

      if (internalBenchmark) {
        return {
          benchmark_type: "internal",
          source: "organization_history",
          value_target: internalBenchmark.value_target,
          value_excellent: internalBenchmark.value_excellent || undefined,
          value_good: internalBenchmark.value_good || undefined,
          value_warning: internalBenchmark.value_warning || undefined,
          value_critical: internalBenchmark.value_critical || undefined,
          relevance_score: 100,
        };
      }

      // If no internal benchmark, get market benchmark
      const marketBenchmarks = await this.getMarketBenchmarksByContext(
        kpiId,
        context,
      );

      if (marketBenchmarks.length > 0) {
        const bestMarketBenchmark = marketBenchmarks[0]; // First one is most recent

        // Calculate relevance score based on context match
        let relevanceScore = 40; // Base score

        if (
          context.company_size &&
          bestMarketBenchmark.company_size === context.company_size
        ) {
          relevanceScore += 30;
        }

        if (
          context.industry_sector &&
          bestMarketBenchmark.industry_sector === context.industry_sector
        ) {
          relevanceScore += 30;
        }

        return {
          benchmark_type: "market",
          source: bestMarketBenchmark.source_name,
          value_target: bestMarketBenchmark.value_market_avg,
          relevance_score: relevanceScore,
        };
      }

      return null;
    } catch (error) {
      console.error("Error getting best benchmark:", error);
      return null;
    }
  }

  /**
   * Calculate benchmark levels automatically
   */
  async calculateBenchmarkLevels(targetValue: number): Promise<{
    value_excellent: number;
    value_good: number;
    value_average: number;
    value_warning: number;
    value_critical: number;
  }> {
    // Call the database function
    const { data, error } = await this.supabase.rpc(
      "calculate_benchmark_levels",
      {
        p_target: targetValue,
      },
    );

    if (error) {
      console.error("Error calculating benchmark levels:", error);
      // Fallback to client-side calculation
      return {
        value_excellent: targetValue * 1.3,
        value_good: targetValue * 1.1,
        value_average: targetValue * 0.9,
        value_warning: targetValue * 0.7,
        value_critical: targetValue * 0.5,
      };
    }

    return (
      data[0] || {
        value_excellent: targetValue * 1.3,
        value_good: targetValue * 1.1,
        value_average: targetValue * 0.9,
        value_warning: targetValue * 0.7,
        value_critical: targetValue * 0.5,
      }
    );
  }

  /**
   * Get benchmark analysis for KPIs
   */
  async getBenchmarkAnalysis(
    organizationId: string,
    kpiIds: string[],
  ): Promise<
    Array<{
      kpi_id: string;
      actual_value?: number;
      benchmark: BestBenchmark | null;
      performance:
        | "excellent"
        | "good"
        | "average"
        | "warning"
        | "critical"
        | "no_data";
      gap_percentage?: number;
    }>
  > {
    const results = [];

    for (const kpiId of kpiIds) {
      try {
        // Get latest actual value
        const { data: kpiData, error: kpiError } = await this.supabase
          .from("user_metrics")
          .select("value")
          .eq("organization_id", organizationId)
          .eq("kpi_code", kpiId)
          .order("reference_period", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (kpiError) {
          console.error("Error fetching KPI value:", kpiError);
        }

        const actualValue = kpiData?.value;
        const benchmark = await this.getBestBenchmark(kpiId, organizationId);

        let performance: any = "no_data";
        let gapPercentage;

        if (actualValue && benchmark) {
          const percentage = (actualValue / benchmark.value_target) * 100;

          if (
            percentage >=
            (benchmark.value_excellent || benchmark.value_target * 1.3)
          ) {
            performance = "excellent";
          } else if (
            percentage >= (benchmark.value_good || benchmark.value_target * 1.1)
          ) {
            performance = "good";
          } else if (percentage >= benchmark.value_target * 0.9) {
            performance = "average";
          } else if (percentage >= benchmark.value_target * 0.7) {
            performance = "warning";
          } else {
            performance = "critical";
          }

          gapPercentage = percentage - 100;
        }

        results.push({
          kpi_id: kpiId,
          actual_value: actualValue,
          benchmark,
          performance,
          gap_percentage: gapPercentage,
        });
      } catch (error) {
        console.error(`Error analyzing benchmark for KPI ${kpiId}:`, error);
        results.push({
          kpi_id: kpiId,
          benchmark: null,
          performance: "no_data",
        });
      }
    }

    return results;
  }

  /**
   * Get industry sectors
   */
  async getIndustrySectors(): Promise<string[]> {
    const { data, error } = await this.supabase
      .from("market_benchmarks")
      .select("industry_sector")
      .not("industry_sector", "is", null);

    if (error) {
      console.error("Error fetching industry sectors:", error);
      throw new Error(`Failed to fetch industry sectors: ${error.message}`);
    }

    // Extract unique sectors
    const sectors = [
      ...new Set((data || []).map((item: any) => item.industry_sector)),
    ];
    return sectors.filter(Boolean);
  }

  /**
   * Get company sizes
   */
  async getCompanySizes(): Promise<string[]> {
    const { data, error } = await this.supabase
      .from("market_benchmarks")
      .select("company_size")
      .not("company_size", "is", null);

    if (error) {
      console.error("Error fetching company sizes:", error);
      throw new Error(`Failed to fetch company sizes: ${error.message}`);
    }

    // Extract unique sizes
    const sizes = [
      ...new Set((data || []).map((item: any) => item.company_size)),
    ];
    return sizes.filter(Boolean);
  }
}

// Export singleton instance
export const benchmarkService = new BenchmarkService();
