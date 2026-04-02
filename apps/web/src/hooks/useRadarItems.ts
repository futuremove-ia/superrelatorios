import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { radarItemService } from "@/services/radarItemService";
import type { RadarItem } from "@superrelatorios/shared";
import type {
  RadarItemEnriched,
  DashboardSummary,
  CreateRadarItemDTO,
  UpdateRadarItemStatusDTO,
} from "@/types/business-indexed";
import { toast } from "sonner";

// ============================================================
// QUERY KEYS - Radar Items
// ============================================================

export const RADAR_KEYS = {
  // Lista principal
  all: (orgId: string) => ["radar_items", orgId] as const,

  // Filtros
  byStatus: (orgId: string, status: string) =>
    ["radar_items", orgId, "status", status] as const,
  bySeverity: (orgId: string, severity: string) =>
    ["radar_items", orgId, "severity", severity] as const,
  byType: (orgId: string, type: string) =>
    ["radar_items", orgId, "type", type] as const,
  byDomain: (orgId: string, domain: string) =>
    ["radar_items", orgId, "domain", domain] as const,

  // Individual
  byId: (id: string) => ["radar_items", id] as const,

  // Dashboard
  dashboard: (orgId: string) => ["radar_items", "dashboard", orgId] as const,

  // Detecção automática
  detected: (orgId: string) => ["radar_items", "detected", orgId] as const,
} as const;

// ============================================================
// QUERY HOOKS - Leitura
// ============================================================

/**
 * Hook para buscar todos os radar items de uma organização
 *
 * @example
 * const { data: items, isLoading } = useRadarItems('org-uuid')
 */
export function useRadarItems(organizationId: string) {
  return useQuery<RadarItemEnriched[]>({
    queryKey: RADAR_KEYS.all(organizationId),
    queryFn: () => radarItemService.getRadarItems(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000, // 2 minutos
    gcTime: 5 * 60 * 1000, // 5 minutos
  });
}

/**
 * Hook para buscar radar items por status
 *
 * @example
 * const { data: inProgressItems } = useRadarItemsByStatus('org-uuid', 'in_progress')
 */
export function useRadarItemsByStatus(organizationId: string, status: string) {
  return useQuery<RadarItemEnriched[]>({
    queryKey: RADAR_KEYS.byStatus(organizationId, status),
    queryFn: () =>
      radarItemService.getRadarItemsByStatus(organizationId, status),
    enabled: !!organizationId && !!status,
    staleTime: 2 * 60 * 1000,
  });
}

/**
 * Hook para buscar radar items por severidade
 *
 * @example
 * const { data: criticalItems } = useRadarItemsBySeverity('org-uuid', 'critical')
 */
export function useRadarItemsBySeverity(
  organizationId: string,
  severity: string,
) {
  return useQuery<RadarItemEnriched[]>({
    queryKey: RADAR_KEYS.bySeverity(organizationId, severity),
    queryFn: () =>
      radarItemService.getRadarItemsBySeverity(organizationId, severity),
    enabled: !!organizationId && !!severity,
    staleTime: 2 * 60 * 1000,
  });
}

/**
 * Hook para buscar radar items por tipo
 *
 * @example
 * const { data: risks } = useRadarItemsByType('org-uuid', 'risk')
 */
export function useRadarItemsByType(organizationId: string, type: string) {
  return useQuery<RadarItemEnriched[]>({
    queryKey: RADAR_KEYS.byType(organizationId, type),
    queryFn: () => radarItemService.getRadarItemsByType(organizationId, type),
    enabled: !!organizationId && !!type,
    staleTime: 2 * 60 * 1000,
  });
}

/**
 * Hook para buscar radar items por domínio
 *
 * @example
 * const { data: commercialItems } = useRadarItemsByDomain('org-uuid', 'commercial')
 */
export function useRadarItemsByDomain(organizationId: string, domain: string) {
  return useQuery<RadarItemEnriched[]>({
    queryKey: RADAR_KEYS.byDomain(organizationId, domain),
    queryFn: () =>
      radarItemService.getRadarItemsByDomain(organizationId, domain),
    enabled: !!organizationId && !!domain,
    staleTime: 2 * 60 * 1000,
  });
}

/**
 * Hook para buscar radar item por ID
 *
 * @example
 * const { data: item } = useRadarItemById('item-uuid')
 */
export function useRadarItemById(id: string) {
  return useQuery<RadarItemEnriched | null>({
    queryKey: RADAR_KEYS.byId(id),
    queryFn: () => radarItemService.getRadarItemById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutos (dados individuais mudam menos)
  });
}

/**
 * Hook para buscar dashboard summary
 *
 * @example
 * const { data: summary } = useRadarItemDashboard('org-uuid')
 */
export function useRadarItemDashboard(organizationId: string) {
  return useQuery<DashboardSummary | null>({
    queryKey: RADAR_KEYS.dashboard(organizationId),
    queryFn: () => radarItemService.getDashboardSummary(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
}

/**
 * Hook para executar detecção automática de desafios
 *
 * @example
 * const { data: detectedChallenges } = useDetectChallengesAuto('org-uuid', 0.7)
 */
export function useDetectChallengesAuto(
  organizationId: string,
  confidenceThreshold: number = 0.7,
) {
  return useQuery({
    queryKey: RADAR_KEYS.detected(organizationId),
    queryFn: () =>
      radarItemService.detectChallengesAuto(
        organizationId,
        confidenceThreshold,
      ),
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

// ============================================================
// MUTATION HOOKS - Escrita
// ============================================================

/**
 * Hook para criar radar item
 *
 * @example
 * const createRadarItem = useCreateRadarItem()
 * createRadarItem.mutate({
 *   organizationId: 'org-uuid',
 *   type: 'risk',
 *   title: 'Novo item',
 *   diagnosisCode: 'CONVERSAO_VENDAS_QUEDA',
 *   ...
 * })
 */
export function useCreateRadarItem() {
  const queryClient = useQueryClient();

  return useMutation<RadarItem, Error, CreateRadarItemDTO>({
    mutationFn: (dto) => radarItemService.createRadarItem(dto),
    onSuccess: (data, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.all(variables.organizationId),
      });
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.dashboard(variables.organizationId),
      });

      toast.success("Radar item criado com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao criar radar item");
      console.error("Create radar item error:", error);
    },
  });
}

/**
 * Hook para atualizar status do radar item
 *
 * @example
 * const updateStatus = useUpdateRadarItemStatus()
 * updateStatus.mutate({
 *   id: 'item-uuid',
 *   dto: { status: 'in_progress' }
 * })
 */
export function useUpdateRadarItemStatus() {
  const queryClient = useQueryClient();

  return useMutation<
    RadarItem,
    Error,
    { id: string; dto: UpdateRadarItemStatusDTO }
  >({
    mutationFn: ({ id, dto }) =>
      radarItemService.updateRadarItemStatus(id, dto),
    onSuccess: (data) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RADAR_KEYS.byId(data.id) });
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.all(data.organizationId),
      });
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.dashboard(data.organizationId),
      });

      toast.success(`Status atualizado para: ${data.status}`);
    },
    onError: (error) => {
      toast.error("Erro ao atualizar status");
      console.error("Update radar item status error:", error);
    },
  });
}

/**
 * Hook para atualizar campos do radar item
 *
 * @example
 * const updateRadarItem = useUpdateRadarItem()
 * updateRadarItem.mutate({
 *   id: 'item-uuid',
 *   updates: { customNotes: 'Nova nota' }
 * })
 */
export function useUpdateRadarItem() {
  const queryClient = useQueryClient();

  return useMutation<
    RadarItem,
    Error,
    { id: string; updates: Partial<RadarItem> }
  >({
    mutationFn: ({ id, updates }) =>
      radarItemService.updateRadarItem(id, updates),
    onSuccess: (data) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RADAR_KEYS.byId(data.id) });
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.all(data.organizationId),
      });

      toast.success("Radar item atualizado com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao atualizar radar item");
      console.error("Update radar item error:", error);
    },
  });
}

/**
 * Hook para deletar radar item
 *
 * @example
 * const deleteRadarItem = useDeleteRadarItem()
 * deleteRadarItem.mutate('item-uuid')
 */
export function useDeleteRadarItem() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { id: string; organizationId: string }>({
    mutationFn: ({ id }) => radarItemService.deleteRadarItem(id),
    onSuccess: (_, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.all(variables.organizationId),
      });
      queryClient.invalidateQueries({
        queryKey: RADAR_KEYS.dashboard(variables.organizationId),
      });

      toast.success("Radar item excluído com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao excluir radar item");
      console.error("Delete radar item error:", error);
    },
  });
}

// ============================================================
// HOOKS COMBINADOS - Gerenciamento
// ============================================================

/**
 * Hook combinado para todas as mutations de radar items
 *
 * @example
 * const { createRadarItem, updateRadarItemStatus, deleteRadarItem, isLoading } = useRadarItemMutations()
 */
export function useRadarItemMutations() {
  const createRadarItem = useCreateRadarItem();
  const updateRadarItemStatus = useUpdateRadarItemStatus();
  const updateRadarItem = useUpdateRadarItem();
  const deleteRadarItem = useDeleteRadarItem();

  return {
    createRadarItem,
    updateRadarItemStatus,
    updateRadarItem,
    deleteRadarItem,
    isLoading:
      createRadarItem.isPending ||
      updateRadarItemStatus.isPending ||
      updateRadarItem.isPending ||
      deleteRadarItem.isPending,
  };
}

// ============================================================
// HOOKS DE INVALIDAÇÃO - Cache
// ============================================================

/**
 * Hook para invalidar cache de radar items manualmente
 *
 * @example
 * const invalidateRadarItems = useInvalidateRadarItems()
 * invalidateRadarItems('org-uuid')
 */
export function useInvalidateRadarItems() {
  const queryClient = useQueryClient();

  return (organizationId: string) => {
    queryClient.invalidateQueries({ queryKey: RADAR_KEYS.all(organizationId) });
    queryClient.invalidateQueries({
      queryKey: RADAR_KEYS.dashboard(organizationId),
    });
  };
}
