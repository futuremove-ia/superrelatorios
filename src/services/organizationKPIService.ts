import { createClient } from "@/lib/supabase";
import { z } from "zod";
import { kpiSchema, type KPI } from "./kpiLibraryService";

// Schema Types
export const organizationKPISchema = z.object({
  id: z.string().uuid(),
  kpi_id: z.string().uuid(),
  organization_id: z.string().uuid(),
  period_start: z.string().datetime(),
  period_end: z.string().datetime(),
  period_key: z.string(),
  value: z.number(),
  currency: z.string(),
  data_source: z.string(),
  is_verified: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  kpi_library: kpiSchema.optional(),
});

export type OrganizationKPI = z.infer<typeof organizationKPISchema>;

export const organizationKPICreateSchema = z.object({
  kpi_id: z.string().uuid(),
  organization_id: z.string().uuid(),
  period_start: z.string(),
  period_end: z.string(),
  period_key: z.string(),
  value: z.number(),
  currency: z.string().default("BRL"),
  data_source: z.string().default("manual_input"),
  is_verified: z.boolean().default(false),
});

export type OrganizationKPICreate = z.infer<typeof organizationKPICreateSchema>;

export class OrganizationKPIService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || "",
    import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  );

  /**
   * Get all KPIs for an organization
   */
  async getOrganizationKPIs(
    organizationId: string,
  ): Promise<OrganizationKPI[]> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", organizationId)
      .order("period_start", { ascending: false });

    if (error) {
      console.error("Error fetching organization KPIs:", error);
      throw new Error(`Failed to fetch organization KPIs: ${error.message}`);
    }

    return organizationKPISchema.array().parse(data || []);
  }

  /**
   * Get KPIs for an organization by period
   */
  async getOrganizationKPIsByPeriod(
    organizationId: string,
    periodKey: string,
  ): Promise<OrganizationKPI[]> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", organizationId)
      .eq("period_key", periodKey)
      .order("period_start", { ascending: false });

    if (error) {
      console.error("Error fetching organization KPIs by period:", error);
      throw new Error(
        `Failed to fetch organization KPIs by period: ${error.message}`,
      );
    }

    return organizationKPISchema.array().parse(data || []);
  }

  /**
   * Get latest KPIs for an organization
   */
  async getLatestOrganizationKPIs(
    organizationId: string,
  ): Promise<OrganizationKPI[]> {
    // Get the latest period key for each KPI
    const { data: latestPeriods, error: periodsError } = await this.supabase
      .from("user_metrics")
      .select("kpi_id, period_key")
      .eq("organization_id", organizationId)
      .order("period_key", { ascending: false });

    if (periodsError) {
      console.error("Error fetching latest periods:", periodsError);
      throw new Error(
        `Failed to fetch latest periods: ${periodsError.message}`,
      );
    }

    // Get unique latest periods per KPI
    const latestPeriodMap = new Map();
    latestPeriods?.forEach((item) => {
      if (!latestPeriodMap.has(item.kpi_id)) {
        latestPeriodMap.set(item.kpi_id, item.period_key);
      }
    });

    // Fetch the latest KPIs
    const latestKeys = Array.from(latestPeriodMap.values());

    if (latestKeys.length === 0) {
      return [];
    }

    const { data, error } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", organizationId)
      .in("period_key", latestKeys)
      .order("period_start", { ascending: false });

    if (error) {
      console.error("Error fetching latest organization KPIs:", error);
      throw new Error(
        `Failed to fetch latest organization KPIs: ${error.message}`,
      );
    }

    return organizationKPISchema.array().parse(data || []);
  }

  /**
   * Get KPI by ID for an organization
   */
  async getOrganizationKPIById(
    organizationId: string,
    kpiId: string,
  ): Promise<OrganizationKPI | null> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", organizationId)
      .eq("kpi_id", kpiId)
      .order("period_start", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error("Error fetching organization KPI:", error);
      throw new Error(`Failed to fetch organization KPI: ${error.message}`);
    }

    return organizationKPISchema.safeParse(data).success ? data : null;
  }

  /**
   * Create new organization KPI
   */
  async createOrganizationKPI(
    kpi: OrganizationKPICreate,
  ): Promise<OrganizationKPI> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .insert(kpi)
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .single();

    if (error) {
      console.error("Error creating organization KPI:", error);
      throw new Error(`Failed to create organization KPI: ${error.message}`);
    }

    const parsed = organizationKPISchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid organization KPI data returned: ${parsed.error.message}`,
      );
    }

    return parsed.data;
  }

  /**
   * Update existing organization KPI
   */
  async updateOrganizationKPI(
    id: string,
    updates: Partial<OrganizationKPICreate>,
  ): Promise<OrganizationKPI> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .update(updates)
      .eq("id", id)
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .single();

    if (error) {
      console.error("Error updating organization KPI:", error);
      throw new Error(`Failed to update organization KPI: ${error.message}`);
    }

    const parsed = organizationKPISchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(
        `Invalid organization KPI data returned: ${parsed.error.message}`,
      );
    }

    return parsed.data;
  }

  /**
   * Delete organization KPI
   */
  async deleteOrganizationKPI(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("user_metrics")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting organization KPI:", error);
      throw new Error(`Failed to delete organization KPI: ${error.message}`);
    }
  }

  /**
   * Get KPI history for an organization
   */
  async getKPIHistory(
    organizationId: string,
    kpiId: string,
    limit: number = 12,
  ): Promise<OrganizationKPI[]> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", organizationId)
      .eq("kpi_id", kpiId)
      .order("period_start", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching KPI history:", error);
      throw new Error(`Failed to fetch KPI history: ${error.message}`);
    }

    return organizationKPISchema.array().parse(data || []);
  }

  /**
   * Get KPI trend analysis
   */
  async getKPITrend(
    organizationId: string,
    kpiId: string,
    periods: number = 6,
  ): Promise<{
    current: OrganizationKPI | null;
    previous: OrganizationKPI | null;
    trend: "up" | "down" | "stable";
    percentageChange: number;
  }> {
    const history = await this.getKPIHistory(organizationId, kpiId, periods);

    if (history.length === 0) {
      return {
        current: null,
        previous: null,
        trend: "stable",
        percentageChange: 0,
      };
    }

    const current = history[0];
    const previous = history[1] || null;

    if (!previous) {
      return {
        current,
        previous: null,
        trend: "stable",
        percentageChange: 0,
      };
    }

    const percentageChange =
      ((current.value - previous.value) / previous.value) * 100;
    const trend =
      percentageChange > 0 ? "up" : percentageChange < 0 ? "down" : "stable";

    return {
      current,
      previous,
      trend,
      percentageChange,
    };
  }

  /**
   * Bulk insert KPIs
   */
  async bulkCreateOrganizationKPIs(
    kpis: OrganizationKPICreate[],
  ): Promise<OrganizationKPI[]> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .insert(kpis).select(`
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `);

    if (error) {
      console.error("Error bulk creating organization KPIs:", error);
      throw new Error(
        `Failed to bulk create organization KPIs: ${error.message}`,
      );
    }

    const parsed = organizationKPISchema.array().safeParse(data || []);
    if (!parsed.success) {
      throw new Error(
        `Invalid organization KPI data returned: ${parsed.error.message}`,
      );
    }

    return parsed.data;
  }

  /**
   * Get KPIs by date range
   */
  async getKPIsByDateRange(
    organizationId: string,
    startDate: string,
    endDate: string,
  ): Promise<OrganizationKPI[]> {
    const { data, error } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", organizationId)
      .gte("period_start", startDate)
      .lte("period_end", endDate)
      .order("period_start", { ascending: false });

    if (error) {
      console.error("Error fetching KPIs by date range:", error);
      throw new Error(`Failed to fetch KPIs by date range: ${error.message}`);
    }

    return organizationKPISchema.array().parse(data || []);
  }
}

// Export singleton instance
export const organizationKPIService = new OrganizationKPIService();
