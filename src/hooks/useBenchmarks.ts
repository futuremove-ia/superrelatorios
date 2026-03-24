import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { 
  benchmarkService, 
  type OrganizationBenchmark, 
  type MarketBenchmark,
  type BenchmarkCreate,
  type MarketBenchmarkCreate,
  type BenchmarkContext,
  type BestBenchmark
} from '@/services/benchmarkService'
import { toast } from 'sonner'

// Query keys
export const BENCHMARK_KEYS = {
  organization: (orgId: string) => ['benchmarks', 'organization', orgId] as const,
  organizationByKPI: (orgId: string, kpiId: string) => ['benchmarks', 'organization', orgId, 'kpi', kpiId] as const,
  market: (kpiId?: string) => ['benchmarks', 'market', kpiId] as const,
  marketByContext: (kpiId: string, context: BenchmarkContext) => ['benchmarks', 'market', kpiId, context] as const,
  best: (kpiId: string, orgId: string, context: BenchmarkContext) => ['benchmarks', 'best', kpiId, orgId, context] as const,
  analysis: (orgId: string, kpiIds: string[]) => ['benchmarks', 'analysis', orgId, kpiIds] as const,
  sectors: ['benchmarks', 'sectors'] as const,
  sizes: ['benchmarks', 'sizes'] as const,
}

// Hook para buscar benchmarks da organização
export function useOrganizationBenchmarks(organizationId: string) {
  return useQuery({
    queryKey: BENCHMARK_KEYS.organization(organizationId),
    queryFn: () => benchmarkService.getOrganizationBenchmarks(organizationId),
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  })
}

// Hook para buscar benchmark da organização por KPI
export function useOrganizationBenchmarkByKPI(organizationId: string, kpiId: string) {
  return useQuery({
    queryKey: BENCHMARK_KEYS.organizationByKPI(organizationId, kpiId),
    queryFn: () => benchmarkService.getOrganizationBenchmarkByKPI(organizationId, kpiId),
    enabled: !!organizationId && !!kpiId,
    staleTime: 5 * 60 * 1000,
  })
}

// Hook para buscar benchmarks de mercado
export function useMarketBenchmarks(kpiId?: string) {
  return useQuery({
    queryKey: BENCHMARK_KEYS.market(kpiId),
    queryFn: () => benchmarkService.getMarketBenchmarks(kpiId),
    staleTime: 10 * 60 * 1000, // 10 minutos
  })
}

// Hook para buscar benchmarks de mercado por contexto
export function useMarketBenchmarksByContext(kpiId: string, context: BenchmarkContext) {
  return useQuery({
    queryKey: BENCHMARK_KEYS.marketByContext(kpiId, context),
    queryFn: () => benchmarkService.getMarketBenchmarksByContext(kpiId, context),
    enabled: !!kpiId,
    staleTime: 10 * 60 * 1000,
  })
}

// Hook para buscar melhor benchmark
export function useBestBenchmark(
  kpiId: string, 
  organizationId: string, 
  context: BenchmarkContext = {}
) {
  return useQuery({
    queryKey: BENCHMARK_KEYS.best(kpiId, organizationId, context),
    queryFn: () => benchmarkService.getBestBenchmark(kpiId, organizationId, context),
    enabled: !!kpiId && !!organizationId,
    staleTime: 5 * 60 * 1000,
  })
}

// Hook para buscar análise de benchmarks
export function useBenchmarkAnalysis(organizationId: string, kpiIds: string[]) {
  return useQuery({
    queryKey: BENCHMARK_KEYS.analysis(organizationId, kpiIds),
    queryFn: () => benchmarkService.getBenchmarkAnalysis(organizationId, kpiIds),
    enabled: !!organizationId && kpiIds.length > 0,
    staleTime: 3 * 60 * 1000, // 3 minutos
  })
}

// Hook para buscar setores industriais
export function useIndustrySectors() {
  return useQuery({
    queryKey: BENCHMARK_KEYS.sectors,
    queryFn: () => benchmarkService.getIndustrySectors(),
    staleTime: 30 * 60 * 1000, // 30 minutos
  })
}

// Hook para buscar tamanhos de empresa
export function useCompanySizes() {
  return useQuery({
    queryKey: BENCHMARK_KEYS.sizes,
    queryFn: () => benchmarkService.getCompanySizes(),
    staleTime: 30 * 60 * 1000, // 30 minutos
  })
}

// Hook para criar benchmark da organização
export function useCreateOrganizationBenchmark() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (benchmark: BenchmarkCreate) => benchmarkService.createOrganizationBenchmark(benchmark),
    onSuccess: (newBenchmark, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.organization(variables.organization_id) })
      queryClient.invalidateQueries({ 
        queryKey: BENCHMARK_KEYS.organizationByKPI(variables.organization_id, variables.kpi_id) 
      })
      
      toast.success('Benchmark da organização criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao criar benchmark da organização')
      console.error('Create organization benchmark error:', error)
    },
  })
}

// Hook para atualizar benchmark da organização
export function useUpdateOrganizationBenchmark() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<BenchmarkCreate> }) =>
      benchmarkService.updateOrganizationBenchmark(id, updates),
    onSuccess: (updatedBenchmark, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.organization(variables.updates.organization_id) })
      queryClient.invalidateQueries({ 
        queryKey: BENCHMARK_KEYS.organizationByKPI(variables.updates.organization_id, updatedBenchmark.kpi_id) 
      })
      
      toast.success('Benchmark da organização atualizado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao atualizar benchmark da organização')
      console.error('Update organization benchmark error:', error)
    },
  })
}

// Hook para deletar benchmark da organização
export function useDeleteOrganizationBenchmark() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, organizationId }: { id: string; organizationId: string }) =>
      benchmarkService.deleteOrganizationBenchmark(id),
    onSuccess: (_, variables) => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.organization(variables.organizationId) })
      
      toast.success('Benchmark da organização excluído com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao excluir benchmark da organização')
      console.error('Delete organization benchmark error:', error)
    },
  })
}

// Hook para criar benchmark de mercado
export function useCreateMarketBenchmark() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (benchmark: MarketBenchmarkCreate) => benchmarkService.createMarketBenchmark(benchmark),
    onSuccess: () => {
      // Invalidar queries relevantes
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.market() })
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.sectors })
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.sizes })
      
      toast.success('Benchmark de mercado criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Erro ao criar benchmark de mercado')
      console.error('Create market benchmark error:', error)
    },
  })
}

// Hook para calcular níveis de benchmark
export function useCalculateBenchmarkLevels() {
  return useMutation({
    mutationFn: (targetValue: number) => benchmarkService.calculateBenchmarkLevels(targetValue),
    onError: (error) => {
      toast.error('Erro ao calcular níveis de benchmark')
      console.error('Calculate benchmark levels error:', error)
    },
  })
}

// Hook combinado para gerenciamento de benchmarks da organização
export function useOrganizationBenchmarkMutations() {
  const createBenchmark = useCreateOrganizationBenchmark()
  const updateBenchmark = useUpdateOrganizationBenchmark()
  const deleteBenchmark = useDeleteOrganizationBenchmark()

  return {
    createBenchmark,
    updateBenchmark,
    deleteBenchmark,
    isLoading: createBenchmark.isPending || updateBenchmark.isPending || deleteBenchmark.isPending,
  }
}

// Hook combinado para gerenciamento de benchmarks de mercado
export function useMarketBenchmarkMutations() {
  const createBenchmark = useCreateMarketBenchmark()

  return {
    createBenchmark,
    isLoading: createBenchmark.isPending,
  }
}

// Hook para invalidar cache de benchmarks
export function useInvalidateBenchmarks() {
  const queryClient = useQueryClient()

  return {
    organization: (organizationId: string) => {
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.organization(organizationId) })
    },
    market: () => {
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.market() })
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.sectors })
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.sizes })
    },
    all: () => {
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.market() })
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.sectors })
      queryClient.invalidateQueries({ queryKey: BENCHMARK_KEYS.sizes })
    }
  }
}
