import { createClient } from "@/lib/supabase";
import { z } from "zod";

export const actionItemSchema = z.object({
  id: z.string().uuid(),
  organization_id: z.string().uuid(),
  title: z.string(),
  description: z.string().nullable(),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  deadline: z.string().datetime().nullable(),
  assigned_to: z.string().uuid().nullable(),
  related_object_type: z.string().nullable(),
  related_object_id: z.string().uuid().nullable(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type ActionItem = z.infer<typeof actionItemSchema>;

export const actionItemCreateSchema = z.object({
  organization_id: z.string().uuid(),
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().optional(),
  status: z
    .enum(["pending", "in_progress", "completed", "cancelled"])
    .default("pending"),
  priority: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
  deadline: z.string().datetime().optional().nullable(),
  assigned_to: z.string().uuid().optional().nullable(),
  related_object_type: z.string().optional().nullable(),
  related_object_id: z.string().uuid().optional().nullable(),
});

export type ActionItemCreate = z.infer<typeof actionItemCreateSchema>;

export const actionItemUpdateSchema = actionItemCreateSchema.partial();

export type ActionItemUpdate = z.infer<typeof actionItemUpdateSchema>;

export class ActionItemService {
  private supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || "",
    import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  );

  async getActionItems(organizationId: string): Promise<ActionItem[]> {
    const { data, error } = await this.supabase
      .from("action_items")
      .select("*")
      .eq("organization_id", organizationId)
      .order("deadline", { ascending: true, nullsFirst: true });

    if (error) {
      console.error("Error fetching action items:", error);
      throw new Error(`Failed to fetch action items: ${error.message}`);
    }

    return actionItemSchema.array().parse(data || []);
  }

  async getActionItemsByStatus(
    organizationId: string,
    status: ActionItem["status"],
  ): Promise<ActionItem[]> {
    const { data, error } = await this.supabase
      .from("action_items")
      .select("*")
      .eq("organization_id", organizationId)
      .eq("status", status)
      .order("deadline", { ascending: true });

    if (error) {
      console.error("Error fetching action items by status:", error);
      throw new Error(`Failed to fetch action items: ${error.message}`);
    }

    return actionItemSchema.array().parse(data || []);
  }

  async getActionItemById(id: string): Promise<ActionItem | null> {
    const { data, error } = await this.supabase
      .from("action_items")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching action item:", error);
      throw new Error(`Failed to fetch action item: ${error.message}`);
    }

    return data ? actionItemSchema.parse(data) : null;
  }

  async createActionItem(actionItem: ActionItemCreate): Promise<ActionItem> {
    const { data, error } = await this.supabase
      .from("action_items")
      .insert(actionItem)
      .select()
      .single();

    if (error) {
      console.error("Error creating action item:", error);
      throw new Error(`Failed to create action item: ${error.message}`);
    }

    return actionItemSchema.parse(data);
  }

  async updateActionItem(
    id: string,
    updates: ActionItemUpdate,
  ): Promise<ActionItem> {
    const { data, error } = await this.supabase
      .from("action_items")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating action item:", error);
      throw new Error(`Failed to update action item: ${error.message}`);
    }

    return actionItemSchema.parse(data);
  }

  async updateActionItemStatus(
    id: string,
    status: ActionItem["status"],
  ): Promise<ActionItem> {
    const { data, error } = await this.supabase
      .from("action_items")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating action item status:", error);
      throw new Error(`Failed to update action item status: ${error.message}`);
    }

    return actionItemSchema.parse(data);
  }

  async deleteActionItem(id: string): Promise<void> {
    const { error } = await this.supabase
      .from("action_items")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting action item:", error);
      throw new Error(`Failed to delete action item: ${error.message}`);
    }
  }

  async getOverdueActionItems(organizationId: string): Promise<ActionItem[]> {
    const now = new Date().toISOString();
    const { data, error } = await this.supabase
      .from("action_items")
      .select("*")
      .eq("organization_id", organizationId)
      .lt("deadline", now)
      .neq("status", "completed")
      .neq("status", "cancelled")
      .order("deadline", { ascending: true });

    if (error) {
      console.error("Error fetching overdue action items:", error);
      throw new Error(`Failed to fetch overdue action items: ${error.message}`);
    }

    return actionItemSchema.array().parse(data || []);
  }
}

export const actionItemService = new ActionItemService();
