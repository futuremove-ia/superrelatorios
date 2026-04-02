import { supabase } from "@/lib/supabase";

export interface CompanyBlueprint {
  id: string;
  organization_id: string;
  industry_sector: string;
  business_model: string;
  company_stage: string;
  employee_count_range: string;
  revenue_range: string | null;
  target_market: string | null;
  value_proposition: string | null;
  key_partners: string | null;
  created_at: string;
  updated_at: string;
}

export async function getBlueprintByOrganization(
  organizationId: string,
): Promise<CompanyBlueprint | null> {
  const { data, error } = await supabase
    .from("company_blueprints")
    .select("*")
    .eq("organization_id", organizationId)
    .maybeSingle();

  if (error) {
    console.error("Error fetching blueprint:", error);
    return null;
  }

  return data as CompanyBlueprint | null;
}

export async function createBlueprint(
  organizationId: string,
  blueprint: Omit<CompanyBlueprint, "id" | "organization_id" | "created_at" | "updated_at">,
): Promise<CompanyBlueprint | null> {
  const { data, error } = await supabase
    .from("company_blueprints")
    .insert({
      organization_id: organizationId,
      ...blueprint,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating blueprint:", error);
    return null;
  }

  return data as CompanyBlueprint;
}

export async function updateBlueprint(
  blueprintId: string,
  blueprint: Partial<Omit<CompanyBlueprint, "id" | "organization_id" | "created_at" | "updated_at">>,
): Promise<CompanyBlueprint | null> {
  const { data, error } = await supabase
    .from("company_blueprints")
    .update({
      ...blueprint,
      updated_at: new Date().toISOString(),
    })
    .eq("id", blueprintId)
    .select()
    .single();

  if (error) {
    console.error("Error updating blueprint:", error);
    return null;
  }

  return data as CompanyBlueprint;
}

export async function upsertBlueprint(
  organizationId: string,
  blueprint: Omit<CompanyBlueprint, "id" | "organization_id" | "created_at" | "updated_at">,
): Promise<CompanyBlueprint | null> {
  const existing = await getBlueprintByOrganization(organizationId);
  
  if (existing) {
    return updateBlueprint(existing.id, blueprint);
  }
  
  return createBlueprint(organizationId, blueprint);
}
