import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  actionItemService,
  type ActionItem,
  type ActionItemCreate,
  type ActionItemUpdate,
} from "@/services/actionItemService";
import { toast } from "sonner";

export const ACTION_ITEM_KEYS = {
  all: (orgId: string) => ["actionItems", orgId] as const,
  byStatus: (orgId: string, status: string) =>
    ["actionItems", orgId, "status", status] as const,
  byId: (id: string) => ["actionItems", id] as const,
  overdue: (orgId: string) => ["actionItems", orgId, "overdue"] as const,
};

export function useActionItems(organizationId: string) {
  return useQuery({
    queryKey: ACTION_ITEM_KEYS.all(organizationId),
    queryFn: () => actionItemService.getActionItems(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}

export function useActionItemsByStatus(
  organizationId: string,
  status: ActionItem["status"]
) {
  return useQuery({
    queryKey: ACTION_ITEM_KEYS.byStatus(organizationId, status),
    queryFn: () => actionItemService.getActionItemsByStatus(organizationId, status),
    enabled: !!organizationId && !!status,
    staleTime: 2 * 60 * 1000,
  });
}

export function useActionItem(id: string) {
  return useQuery({
    queryKey: ACTION_ITEM_KEYS.byId(id),
    queryFn: () => actionItemService.getActionItemById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

export function useOverdueActionItems(organizationId: string) {
  return useQuery({
    queryKey: ACTION_ITEM_KEYS.overdue(organizationId),
    queryFn: () => actionItemService.getOverdueActionItems(organizationId),
    enabled: !!organizationId,
    staleTime: 1 * 60 * 1000,
  });
}

export function useCreateActionItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (actionItem: ActionItemCreate) =>
      actionItemService.createActionItem(actionItem),
    onSuccess: (newItem, variables) => {
      queryClient.invalidateQueries({
        queryKey: ACTION_ITEM_KEYS.all(variables.organization_id),
      });
      queryClient.invalidateQueries({
        queryKey: ACTION_ITEM_KEYS.overdue(variables.organization_id),
      });

      toast.success("Tarefa criada com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao criar tarefa");
      console.error("Create action item error:", error);
    },
  });
}

export function useUpdateActionItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      updates,
    }: {
      id: string;
      updates: ActionItemUpdate;
    }) => actionItemService.updateActionItem(id, updates),
    onSuccess: (updatedItem, variables) => {
      queryClient.invalidateQueries({
        queryKey: ACTION_ITEM_KEYS.byId(updatedItem.id),
      });
      queryClient.invalidateQueries({ queryKey: ["actionItems"] });
      queryClient.invalidateQueries({
        queryKey: ACTION_ITEM_KEYS.overdue(variables.updates.organization_id || ""),
      });

      toast.success("Tarefa atualizada com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao atualizar tarefa");
      console.error("Update action item error:", error);
    },
  });
}

export function useUpdateActionItemStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: ActionItem["status"] }) =>
      actionItemService.updateActionItemStatus(id, status),
    onSuccess: (updatedItem) => {
      queryClient.invalidateQueries({ queryKey: ["actionItems"] });
      queryClient.invalidateQueries({
        queryKey: ACTION_ITEM_KEYS.byId(updatedItem.id),
      });

      toast.success(`Status atualizado para: ${updatedItem.status}`);
    },
    onError: (error) => {
      toast.error("Erro ao atualizar status");
      console.error("Update action item status error:", error);
    },
  });
}

export function useDeleteActionItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => actionItemService.deleteActionItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["actionItems"] });

      toast.success("Tarefa excluída com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao excluir tarefa");
      console.error("Delete action item error:", error);
    },
  });
}

export function useActionItemMutations() {
  const createActionItem = useCreateActionItem();
  const updateActionItem = useUpdateActionItem();
  const updateActionItemStatus = useUpdateActionItemStatus();
  const deleteActionItem = useDeleteActionItem();

  return {
    createActionItem,
    updateActionItem,
    updateActionItemStatus,
    deleteActionItem,
    isLoading:
      createActionItem.isPending ||
      updateActionItem.isPending ||
      updateActionItemStatus.isPending ||
      deleteActionItem.isPending,
  };
}