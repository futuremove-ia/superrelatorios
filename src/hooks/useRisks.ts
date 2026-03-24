import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { 
  riskService, 
  type Risk, 
  type RiskMitigation,
  type RiskCreate,
  type MitigationCreate,
  type RiskMatrix
} from '@/services/riskService'
import { toast } from 'sonner'

// Query keys
export const RISK_KEYS = {
  all: (orgId: string) => ['risks', orgId] as const,
  byStatus: (orgId: string, status: string) => ['risks', orgId, 'status', status] as const,
  byId: (id: string) => ['risks', id] as const,
  mitigations: (riskId: string) => ['risks', 'mitigations', riskId] as const,
  allMitigations: (orgId: string) => ['risks', 'mitigations', 'orgId', orgId] as const,
  matrix: (orgId: string) => ['risks', 'matrix', orgId] as const,
  alerts: (orgId: string) => ['risks', 'alerts', orgId] as const,
  dashboard: (orgId: string) => ['risks', 'dashboard', orgId] as const,
}

// Hook para buscar todos os riscos
export function useRisks(organizationId: string) {
  return useQuery({
    queryKey: RISK_KEYS.all(organizationId),
    queryFn: () => riskService.getRisks(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000, // 2 minutos
    gcTime: 5 * 60 * 1000, // 5 minutos
  })
}

// Hook para buscar riscos por status
export function useRisksByStatus(organizationId: string, status: string) {
  return useQuery({
    queryKey: RISK_KEYS.byStatus(organizationId, status),
    queryFn: () => riskService.getRisksByStatus(organizationId, status),
    enabled: !!organizationId && !!status,
    staleTime: 2 * 60 * 1000,
  })
}

// Hook para buscar risco por ID
export function useRisk(id: string) {
  return useQuery({
    queryKey: RISK_KEYS.byId(id),
    queryFn: () => riskService.getRiskById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  })
}

// Hook para buscar mitigações de um risco
export function useRiskMitigations(riskId: string) {
  return useQuery({
    queryKey: RISK_KEYS.mitigations(riskId),
    queryFn: () => riskService.getMitigations(riskId),
    enabled: !!riskId,
    staleTime: 2 * 60 * 1000,
  })
}

// Hook para buscar todas as mitigações de uma organização
export function useAllRiskMitigations(organizationId: string) {
  return useQuery({
    queryKey: RISK_KEYS.allMitigations(organizationId),
    queryFn: () => riskService.getAllMitigations(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000,
  })
}

// Hook para gerar matriz de riscos
export function useRiskMatrix(organizationId: string) {
  return useQuery({
    queryKey: RISK_KEYS.matrix(organizationId),
    queryFn: () => riskService.generateRiskMatrix(organizationId),
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000, // 5 minutos
  })
}

// Hook para buscar alertas de risco
export function useRiskAlerts(organizationId: string) {
  return useQuery({
    queryKey: RISK_KEYS.alerts(organizationId),
    queryFn: () => riskService.getRiskAlerts(organizationId),
    enabled: !!organizationId,
    staleTime: 3 * 60 * 1000, // 3 minutos
  })
}

// Hook para buscar dashboard de riscos
export function useRiskDashboard(organizationId: string) {
  return useQuery({
    queryKey: RISK_KEYS.dashboard(organizationId),
    queryFn: () => riskService.getRiskDashboard(organizationId),
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000, // 2 minutos
  })
}

// Hook para criar risco
export function useCreateRisk() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (risk: RiskCreate) => riskService.createRisk(risk),
    onSuccess: (newRisk, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.all(variables.organization_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.matrix(variables.organization_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.dashboard(variables.organization_id) })
      
      toast.success('Risco criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao criar risco')
      console.error('Create risk error:', error)
    },
  })
}

// Hook para atualizar risco
export function useUpdateRisk() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<RiskCreate> }) =>
      riskService.updateRisk(id, updates),
    onSuccess: (updatedRisk, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.all(variables.updates.organization_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.byId(updatedRisk.id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.matrix(variables.updates.organization_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.dashboard(variables.updates.organization_id) })
      
      toast.success('Risco atualizado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao atualizar risco')
      console.error('Update risk error:', error)
    },
  })
}

// Hook para atualizar status do risco
export function useUpdateRiskStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: Risk['status'] }) =>
      riskService.updateRiskStatus(id, status),
    onSuccess: (updatedRisk, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.all() }) // Will be invalidated by specific org queries
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.byId(updatedRisk.id) })
      
      toast.success(`Status do risco atualizado para: ${variables.status}`)
    },
    onError: (error) => {
      toast.error('Erro ao atualizar status do risco')
      console.error('Update risk status error:', error)
    },
  })
}

// Hook para deletar risco
export function useDeleteRisk() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => riskService.deleteRisk(id),
    onSuccess: () => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.all() }) // Will be invalidated by specific org queries
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.matrix() })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.dashboard() })
      
      toast.success('Risco excluído com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao excluir risco')
      console.error('Delete risk error:', error)
    },
  })
}

// Hook para criar mitigações
export function useCreateMitigation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (mitigation: MitigationCreate) => riskService.createMitigation(mitigation),
    onSuccess: (newMitigation, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.mitigations(variables.risk_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.allMitigations() }) // Will be invalidated by specific org queries
      
      toast.success('Plano de mitigação criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao criar plano de mitigação')
      console.error('Create mitigation error:', error)
    },
  })
}

// Hook para atualizar mitigações
export function useUpdateMitigation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<MitigationCreate> }) =>
      riskService.updateMitigation(id, updates),
    onSuccess: (updatedMitigation, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.mitigations(updatedMitigation.risk_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.allMitigations() })
      
      toast.success('Plano de mitigação atualizado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao atualizar plano de mitigação')
      console.error('Update mitigation error:', error)
    },
  })
}

// Hook para atualizar status da mitigações
export function useUpdateMitigationStatus() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: RiskMitigation['status'] }) =>
      riskService.updateMitigationStatus(id, status),
    onSuccess: (updatedMitigation, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.mitigations(updatedMitigation.risk_id) })
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.allMitigations() })
      
      toast.success(`Status da mitigação atualizado para: ${variables.status}`)
    },
    onError: (error) => {
      toast.error('Erro ao atualizar status da mitigação')
      console.error('Update mitigation status error:', error)
    },
  })
}

// Hook para deletar mitigações
export function useDeleteMitigation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => riskService.deleteMitigation(id),
    onSuccess: () => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.mitigations() }) // Will be invalidated by specific risk queries
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.allMitigations() })
      
      toast.success('Plano de mitigação excluído com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao excluir plano de mitigação')
      console.error('Delete mitigation error:', error)
    },
  })
}

// Hook combinado para gerenciamento de riscos
export function useRiskMutations() {
  const createRisk = useCreateRisk()
  const updateRisk = useUpdateRisk()
  const updateRiskStatus = useUpdateRiskStatus()
  const deleteRisk = useDeleteRisk()

  return {
    createRisk,
    updateRisk,
    updateRiskStatus,
    deleteRisk,
    isLoading: createRisk.isPending || updateRisk.isPending || updateRiskStatus.isPending || deleteRisk.isPending,
  }
}

// Hook combinado para gerenciamento de mitigações
export function useMitigationMutations() {
  const createMitigation = useCreateMitigation()
  const updateMitigation = useUpdateMitigation()
  const updateMitigationStatus = useUpdateMitigationStatus()
  const deleteMitigation = useDeleteMitigation()

  return {
    createMitigation,
    updateMitigation,
    updateMitigationStatus,
    deleteMitigation,
    isLoading: createMitigation.isPending || updateMitigation.isPending || updateMitigationStatus.isPending || deleteMitigation.isPending,
  }
}

// Hook para invalidar cache de riscos
export function useInvalidateRisks() {
  const queryClient = useQueryClient()

  return (organizationId: string) => {
    queryClient.invalidateQueries({ queryKey: RISK_KEYS.all(organizationId) })
    queryClient.invalidateQueries({ queryKey: RISK_KEYS.matrix(organizationId) })
    queryClient.invalidateQueries({ queryKey: RISK_KEYS.dashboard(organizationId) })
    queryClient.invalidateQueries({ queryKey: RISK_KEYS.alerts(organizationId) })
  }
}

// Hook para invalidar cache de mitigações
export function useInvalidateMitigations() {
  const queryClient = useQueryClient()

  return {
    byRisk: (riskId: string) => {
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.mitigations(riskId) })
    },
    byOrganization: (organizationId: string) => {
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.allMitigations(organizationId) })
    },
    all: () => {
      queryClient.invalidateQueries({ queryKey: RISK_KEYS.allMitigations() })
    }
  }
}
