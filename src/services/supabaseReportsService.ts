import { supabase } from "@/lib/supabase";
import type { Report } from "@/types/reports";

function normalizeStatus(raw: string | undefined): Report["status"] {
  if (raw === "completed" || raw === "shared") return raw;
  return "draft";
}

export function mapReportRow(row: Record<string, unknown>): Report {
  const blocksRaw = row.blocks;
  const blocks = Array.isArray(blocksRaw) ? blocksRaw : [];
  return {
    id: String(row.id),
    title: String(row.title ?? ""),
    subtitle: undefined,
    description: String(row.description ?? ""),
    category: String(row.category ?? "Geral"),
    createdAt: row.created_at ? String(row.created_at).slice(0, 10) : "",
    updatedAt: row.updated_at ? String(row.updated_at).slice(0, 10) : "",
    status: normalizeStatus(row.status as string | undefined),
    templateId: String(row.template_id ?? ""),
    blocks: blocks as Report["blocks"],
    rawData:
      row.data_json && typeof row.data_json === "object"
        ? (row.data_json as Record<string, unknown>)
        : {},
  };
}

export async function fetchReportsFromSupabase(): Promise<Report[]> {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data ?? []).map((row) => mapReportRow(row as Record<string, unknown>));
}

export async function fetchReportByIdFromSupabase(id: string): Promise<Report | null> {
  const { data, error } = await supabase.from("reports").select("*").eq("id", id).maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return mapReportRow(data as Record<string, unknown>);
}
