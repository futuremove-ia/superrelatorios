import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { 
  organizationKPIService, 
  type OrganizationKPI, 
  type OrganizationKPICreate 
} from '@/services/organizationKPIService'
import { toast } from 'sonner'

// Query keys
export const ORG_KPI_KEYS = {
  all: (orgId: string) => ['organization-kpis', orgId] as const,
  byPeriod: (orgId: string, period: string) => ['organization-kpis', orgId, 'period', period] as const,
  latest: (orgId: string) => ['organization-kpis', orgId, 'latest'] as const,
  byId: (orgId: string, kpiId: string) => ['organization-kpis', orgId, 'kpi', kpiId] as const,
  history: (orgId: string, kpiId: string) => ['organization-kpis', orgId, 'kpi', kpiId, 'history'] as const,
  dateRange: (orgId: string, start: string, end: string) => ['organization-kpis', orgId, 'range', start, end] as const,
}

// Hook para buscar todos os KPIs de uma organização
export function useOrganizationKPIs(organizationId: string) {
  return useQuery({
    queryKey: ORG_KPI_KEYS.all(organizationId),
    queryFn: () => organizationKPIService.getOrganizationKPIs(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000, // 2 minutos
    gcTime: 5 * 60 * 1000, // 5 minutos
  })
}

// Hook para buscar KPIs por período
export function useOrganizationKPIsByPeriod(organizationId: string, periodKey: string) {
  return useQuery({
    queryKey: ORG_KPI_KEYS.byPeriod(organizationId, periodKey),
    queryFn: () => organizationKPIService.getOrganizationKPIsByPeriod(organizationId, periodKey),
    enabled: !!organizationId && !!periodKey,
    staleTime: 2 * 60 * 1000,
  })
}

// Hook para buscar últimos KPIs
export function useLatestOrganizationKPIs(organizationId: string) {
  return useQuery({
    queryKey: ORG_KPI_KEYS.latest(organizationId),
    queryFn: () => organizationKPIService.getLatestOrganizationKPIs(organizationId),
    enabled: !!organizationId,
    staleTime: 1 * 60 * 1000, // 1 minuto
  })
}

// Hook para buscar KPI específico
export function useOrganizationKPI(organizationId: string, kpiId: string) {
  return useQuery({
    queryKey: ORG_KPI_KEYS.byId(organizationId, kpiId),
    queryFn: () => organizationKPIService.getOrganizationKPIById(organizationId, kpiId),
    enabled: !!organizationId && !!kpiId,
    staleTime: 2 * 60 * 1000,
  })
}

// Hook para buscar histórico de KPI
export function useKPIHistory(organizationId: string, kpiId: string, limit?: number) {
  return useQuery({
    queryKey: ORG_KPI_KEYS.history(organizationId, kpiId),
    queryFn: () => organizationKPIService.getKPIHistory(organizationId, kpiId, limit),
    enabled: !!organizationId && !!kpiId,
    staleTime: 5 * 60 * 1000, // 5 minutos
  })
}

// Hook para buscar análise de tendência
export function useKPITrend(organizationId: string, kpiId: string, periods?: number) {
  return useQuery({
    queryKey: ['organization-kpis', organizationId, 'kpi', kpiId, 'trend', periods],
    queryFn: () => organizationKPIService.getKPITrend(organizationId, kpiId, periods),
    enabled: !!organizationId && !!kpiId,
    staleTime: 3 * 60 * 1000, // 3 minutos
  })
}

// Hook para buscar KPIs por range de datas
export function useKPIsByDateRange(
  organizationId: string, 
  startDate: string, 
  endDate: string
) {
  return useQuery({
    queryKey: ORG_KPI_KEYS.dateRange(organizationId, startDate, endDate),
    queryFn: () => organizationKPIService.getKPIsByDateRange(organizationId, startDate, endDate),
    enabled: !!organizationId && !!startDate && !!endDate,
    staleTime: 2 * 60 * 1000,
  })
}

// Hook para criar KPI da organização
export function useCreateOrganizationKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (kpi: OrganizationKPICreate) => organizationKPIService.createOrganizationKPI(kpi),
    onSuccess: (newKPI, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.all(variables.organization_id) })
      queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.latest(variables.organization_id) })
      queryClient.invalidateQueries({ 
        queryKey: ORG_KPI_KEYS.byId(variables.organization_id, variables.kpi_id) 
      })
      
      toast.success('KPI da organização criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao criar KPI da organização')
      console.error('Create organization KPI error:', error)
    },
  })
}

// Hook para atualizar KPI da organização
export function useUpdateOrganizationKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<OrganizationKPICreate> }) =>
      organizationKPIService.updateOrganizationKPI(id, updates),
    onSuccess: (updatedKPI, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.all(variables.updates.organization_id) })
      queryClient.invalidateQueries({ 
        queryKey: ORG_KPI_KEYS.byId(variables.updates.organization_id, updatedKPI.kpi_id) 
      })
      queryClient.invalidateQueries({ 
        queryKey: ORG_KPI_KEYS.latest(variables.updates.organization_id) 
      })
      
      toast.success('KPI da organização atualizado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao atualizar KPI da organização')
      console.error('Update organization KPI error:', error)
    },
  })
}

// Hook para deletar KPI da organização
export function useDeleteOrganizationKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, organizationId }: { id: string; organizationId: string }) =>
      organizationKPIService.deleteOrganizationKPI(id),
    onSuccess: (_, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.all(variables.organizationId) })
      queryClient.invalidateQueries({ 
        queryKey: ORG_KPI_KEYS.latest(variables.organizationId) 
      })
      
      toast.success('KPI da organização excluído com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao excluir KPI da organização')
      console.error('Delete organization KPI error:', error)
    },
  })
}

// Hook para criação em lote
export function useBulkCreateOrganizationKPIs() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ kpis, organizationId }: { kpis: OrganizationKPICreate[]; organizationId: string }) =>
      organizationKPIService.bulkCreateOrganizationKPIs(kpis),
    onSuccess: (_, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.all(variables.organizationId) })
      queryClient.invalidateQueries({ 
        queryKey: ORG_KPI_KEYS.latest(variables.organizationId) 
      })
      
      toast.success(`${variables.kpis.length} KPIs criados com sucesso!`)
    },
    onError: (error) => {
      toast.error('Erro ao criar KPIs em lote')
      console.error('Bulk create organization KPIs error:', error)
    },
  })
}

// Hook combinado para gerenciamento
export function useOrganizationKPIMutations() {
  const createKPI = useCreateOrganizationKPI()
  const updateKPI = useUpdateOrganizationKPI()
  const deleteKPI = useDeleteOrganizationKPI()
  const bulkCreateKPIs = useBulkCreateOrganizationKPIs()

  return {
    createKPI,
    updateKPI,
    deleteKPI,
    bulkCreateKPIs,
    isLoading: createKPI.isPending || updateKPI.isPending || deleteKPI.isPending || bulkCreateKPIs.isPending,
  }
}

// Hook para invalidar cache
export function useInvalidateOrganizationKPIs() {
  const queryClient = useQueryClient()

  return (organizationId: string) => {
    queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.all(organizationId) })
    queryClient.invalidateQueries({ queryKey: ORG_KPI_KEYS.latest(organizationId) })
  }
}
