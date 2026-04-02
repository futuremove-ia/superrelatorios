import { createClient } from "@/lib/supabase";
import { z } from "zod";

// Schema Types
export const kpiSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  title: z.string(),
  description: z.string().optional(),
  calculation_formula: z.string().optional(),
  unit: z.string(),
  domain: z.enum([
    "finance",
    "sales",
    "marketing",
    "operations",
    "hr",
    "strategy",
  ]),
  trend_direction: z.enum(["higher_is_better", "lower_is_better", "no_trend"]),
  input_type: z.enum(["cumulative", "non_cumulative"]),
  group_data_period: z.enum([
    "daily",
    "weekly",
    "monthly",
    "quarterly",
    "yearly",
  ]),
  total_is: z.enum([
    "sum_of_values",
    "average_of_values",
    "last_value",
    "all_time",
    "ytd_as_of",
  ]),
  is_active: z.boolean(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type KPI = z.infer<typeof kpiSchema>;

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

export class KPILibraryService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || "",
    import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  );

  /**
   * Get all active KPIs from the library
   */
  async getKPIs(): Promise<KPI[]> {
    const { data, error } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", true)
      .order("code");

    if (error) {
      console.error("Error fetching KPIs:", error);
      throw new Error(`Failed to fetch KPIs: ${error.message}`);
    }

    return kpiSchema.array().parse(data || []);
  }

  /**
   * Get KPI by ID
   */
  async getKPIById(id: string): Promise<KPI | null> {
    const { data, error } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching KPI:", error);
      throw new Error(`Failed to fetch KPI: ${error.message}`);
    }

    return kpiSchema.safeParse(data).success ? data : null;
  }

  /**
   * Get KPI by code
   */
  async getKPIByCode(code: string): Promise<KPI | null> {
    const { data, error } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("code", code.toUpperCase())
      .maybeSingle();

    if (error) {
      console.error("Error fetching KPI by code:", error);
      throw new Error(`Failed to fetch KPI by code: ${error.message}`);
    }

    return kpiSchema.safeParse(data).success ? data : null;
  }

  /**
   * Get KPIs by domain
   */
  async getKPIsByDomain(domain: string): Promise<KPI[]> {
    const { data, error } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", true)
      .eq("domain", domain)
      .order("code");

    if (error) {
      console.error("Error fetching KPIs by domain:", error);
      throw new Error(`Failed to fetch KPIs by domain: ${error.message}`);
    }

    return kpiSchema.array().parse(data || []);
  }

  /**
   * Create new KPI
   */
  async createKPI(kpi: Partial<KPI>): Promise<KPI> {
    // Ensure code is uppercase
    const kpiData = {
      ...kpi,
      code: kpi.code?.toUpperCase(),
    };

    const { data, error } = await this.supabase
      .from("library_kpis")
      .insert(kpiData)
      .select()
      .single();

    if (error) {
      console.error("Error creating KPI:", error);
      throw new Error(`Failed to create KPI: ${error.message}`);
    }

    const parsed = kpiSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(`Invalid KPI data returned: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  /**
   * Update existing KPI
   */
  async updateKPI(id: string, updates: Partial<KPI>): Promise<KPI> {
    // Ensure code is uppercase if provided
    const updateData = {
      ...updates,
      ...(updates.code && { code: updates.code.toUpperCase() }),
    };

    const { data, error } = await this.supabase
      .from("library_kpis")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating KPI:", error);
      throw new Error(`Failed to update KPI: ${error.message}`);
    }

    const parsed = kpiSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(`Invalid KPI data returned: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  /**
   * Soft delete KPI (set is_active = false)
   */
  async deleteKPI(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("library_kpis")
      .update({ is_active: false })
      .eq("id", id);

    if (error) {
      console.error("Error deleting KPI:", error);
      throw new Error(`Failed to delete KPI: ${error.message}`);
    }
  }

  /**
   * Hard delete KPI (permanent)
   */
  async hardDeleteKPI(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("library_kpis")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error hard deleting KPI:", error);
      throw new Error(`Failed to hard delete KPI: ${error.message}`);
    }
  }

  /**
   * Get KPI domains
   */
  async getKPIDomains(): Promise<string[]> {
    const { data, error } = await this.supabase
      .from("library_kpis")
      .select("domain")
      .eq("is_active", true);

    if (error) {
      console.error("Error fetching KPI domains:", error);
      throw new Error(`Failed to fetch KPI domains: ${error.message}`);
    }

    // Extract unique domains
    const domains = [...new Set((data || []).map((kpi: any) => kpi.domain))];
    return domains;
  }

  /**
   * Search KPIs by title or description
   */
  async searchKPIs(query: string): Promise<KPI[]> {
    const { data, error } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", true)
      .or(`title.ilike.%${query}%,description.ilike.%${query}%`)
      .order("code");

    if (error) {
      console.error("Error searching KPIs:", error);
      throw new Error(`Failed to search KPIs: ${error.message}`);
    }

    return kpiSchema.array().parse(data || []);
  }
}

// Export singleton instance
export const kpiLibraryService = new KPILibraryService();
