import { supabase } from "@/lib/supabase";
import { Report, ReportTemplate, ReportBlock } from "@/types/reports";

export interface SupabaseReportRow {
  id: string;
  organization_id: string;
  user_id: string;
  title: string;
  description: string | null;
  data_json: Record<string, unknown> | null;
  status: string;
  file_url: string | null;
  created_at: string;
  updated_at: string;
}

export async function getReportsByOrganization(
  organizationId: string,
): Promise<Report[]> {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching reports:", error);
    return [];
  }

  return (data || []).map((row: SupabaseReportRow) => ({
    id: row.id,
    title: row.title,
    subtitle: undefined,
    category: (row.data_json?.category as string) || "Geral",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    status: (row.status as Report["status"]) || "draft",
    description: row.description || "",
    templateId: (row.data_json?.templateId as string) || "executive-strategic",
    blocks: (row.data_json?.blocks as ReportBlock[]) || [],
    rawData: row.data_json as Record<string, unknown>,
  }));
}

export async function getReportById(reportId: string): Promise<Report | null> {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("id", reportId)
    .single();

  if (error || !data) {
    console.error("Error fetching report:", error);
    return null;
  }

  const row = data as SupabaseReportRow;
  return {
    id: row.id,
    title: row.title,
    subtitle: undefined,
    category: (row.data_json?.category as string) || "Geral",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    status: (row.status as Report["status"]) || "draft",
    description: row.description || "",
    templateId: (row.data_json?.templateId as string) || "executive-strategic",
    blocks: (row.data_json?.blocks as ReportBlock[]) || [],
    rawData: row.data_json as Record<string, unknown>,
  };
}

export async function createReport(
  organizationId: string,
  userId: string,
  title: string,
  description: string,
  templateId: string,
  dataJson?: Record<string, unknown>,
): Promise<Report | null> {
  const { data, error } = await supabase
    .from("reports")
    .insert({
      organization_id: organizationId,
      user_id: userId,
      title,
      description,
      status: "draft",
      data_json: dataJson || { templateId },
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating report:", error);
    return null;
  }

  const row = data as SupabaseReportRow;
  return {
    id: row.id,
    title: row.title,
    subtitle: undefined,
    category: (row.data_json?.category as string) || "Geral",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    status: (row.status as Report["status"]) || "draft",
    description: row.description || "",
    templateId: (row.data_json?.templateId as string) || templateId,
    blocks: (row.data_json?.blocks as ReportBlock[]) || [],
    rawData: row.data_json as Record<string, unknown>,
  };
}

export async function updateReport(
  reportId: string,
  updates: Partial<{
    title: string;
    description: string;
    status: string;
    data_json: Record<string, unknown>;
  }>,
): Promise<boolean> {
  const { error } = await supabase
    .from("reports")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", reportId);

  if (error) {
    console.error("Error updating report:", error);
    return false;
  }

  return true;
}

export async function deleteReport(reportId: string): Promise<boolean> {
  const { error } = await supabase.from("reports").delete().eq("id", reportId);

  if (error) {
    console.error("Error deleting report:", error);
    return false;
  }

  return true;
}

export async function getTemplatesFromSupabase(): Promise<ReportTemplate[]> {
  const { data, error } = await supabase
    .from("strategic_templates")
    .select("*")
    .eq("is_active", true);

  if (error) {
    console.error("Error fetching templates:", error);
    return [];
  }

  return (data || []).map((t: Record<string, unknown>) => ({
    id: (t.code as string) || (t.id as string),
    name: (t.name as string) || "Template",
    category: (t.category as string) || "Geral",
    description: (t.description as string) || "",
    icon: "TrendingUp",
    defaultBlocks: (t.file_structure as ReportBlock[]) || [],
  }));
}
