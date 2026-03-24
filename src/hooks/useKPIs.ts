import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { kpiLibraryService, type KPI } from '@/services/kpiLibraryService'
import { toast } from 'sonner'

// Query keys
export const KPI_KEYS = {
  all: ['kpis'] as const,
  byId: (id: string) => ['kpis', id] as const,
  byCode: (code: string) => ['kpis', 'code', code] as const,
  byDomain: (domain: string) => ['kpis', 'domain', domain] as const,
  search: (query: string) => ['kpis', 'search', query] as const,
  domains: ['kpis', 'domains'] as const,
}

// Hook para buscar todos os KPIs
export function useKPIs() {
  return useQuery({
    queryKey: KPI_KEYS.all,
    queryFn: () => kpiLibraryService.getKPIs(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook para buscar KPI por ID
export function useKPI(id: string) {
  return useQuery({
    queryKey: KPI_KEYS.byId(id),
    queryFn: () => kpiLibraryService.getKPIById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  })
}

// Hook para buscar KPI por código
export function useKPIByCode(code: string) {
  return useQuery({
    queryKey: KPI_KEYS.byCode(code),
    queryFn: () => kpiLibraryService.getKPIByCode(code),
    enabled: !!code,
    staleTime: 5 * 60 * 1000,
  })
}

// Hook para buscar KPIs por domínio
export function useKPIsByDomain(domain: string) {
  return useQuery({
    queryKey: KPI_KEYS.byDomain(domain),
    queryFn: () => kpiLibraryService.getKPIsByDomain(domain),
    enabled: !!domain,
    staleTime: 5 * 60 * 1000,
  })
}

// Hook para buscar KPIs (pesquisa)
export function useKPIsSearch(query: string) {
  return useQuery({
    queryKey: KPI_KEYS.search(query),
    queryFn: () => kpiLibraryService.searchKPIs(query),
    enabled: !!query && query.length >= 2,
    staleTime: 2 * 60 * 1000, // 2 minutos para busca
  })
}

// Hook para buscar domínios de KPIs
export function useKPIDomains() {
  return useQuery({
    queryKey: KPI_KEYS.domains,
    queryFn: () => kpiLibraryService.getKPIDomains(),
    staleTime: 10 * 60 * 1000, // 10 minutos
  })
}

// Hook para criar KPI
export function useCreateKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (kpi: Partial<KPI>) => kpiLibraryService.createKPI(kpi),
    onSuccess: (newKPI) => {
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.all })
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.domains })
      toast.success('KPI criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao criar KPI')
      console.error('Create KPI error:', error)
    },
  })
}

// Hook para atualizar KPI
export function useUpdateKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<KPI> }) =>
      kpiLibraryService.updateKPI(id, updates),
    onSuccess: (updatedKPI) => {
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.all })
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.byId(updatedKPI.id) })
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.byCode(updatedKPI.code) })
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.domains })
      toast.success('KPI atualizado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao atualizar KPI')
      console.error('Update KPI error:', error)
    },
  })
}

// Hook para deletar KPI
export function useDeleteKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => kpiLibraryService.deleteKPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.all })
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.domains })
      toast.success('KPI excluído com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao excluir KPI')
      console.error('Delete KPI error:', error)
    },
  })
}

// Hook para hard delete KPI
export function useHardDeleteKPI() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => kpiLibraryService.hardDeleteKPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.all })
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.domains })
      toast.success('KPI excluído permanentemente!')
    },
    onError: (error) => {
      toast.error('Erro ao excluir KPI permanentemente')
      console.error('Hard delete KPI error:', error)
    },
  })
}

// Hook para invalidar cache de KPIs
export function useInvalidateKPIs() {
  const queryClient = useQueryClient()

  return () => {
    queryClient.invalidateQueries({ queryKey: KPI_KEYS.all })
    queryClient.invalidateQueries({ queryKey: KPI_KEYS.domains })
  }
}

// Hook combinado para gerenciamento de KPIs
export function useKPIMutation() {
  const createKPI = useCreateKPI()
  const updateKPI = useUpdateKPI()
  const deleteKPI = useDeleteKPI()
  const hardDeleteKPI = useHardDeleteKPI()

  return {
    createKPI,
    updateKPI,
    deleteKPI,
    hardDeleteKPI,
    isLoading: createKPI.isPending || updateKPI.isPending || deleteKPI.isPending || hardDeleteKPI.isPending,
  }
}
