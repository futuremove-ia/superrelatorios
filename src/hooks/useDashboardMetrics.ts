import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

/**
 * Métricas agregadas para o dashboard
 */
export interface DashboardMetrics {
  // Prioridades e execução
  activePriorities: number;
  executionRate: number;
  criticalCount: number;
  challengesWithLever: number;
  
  // KPIs
  trackedKPIs: number;
  latestKPIs: Record<string, {
    value: number;
    delta?: number;
  }>;
  
  // Relatórios
  reportsCreated: number;
  reportsLast30d: number;
  
  // Impacto
  estimatedImpact: string;
  
  // Status
  isLoading: boolean;
  error: Error | null;
}

/**
 * Hook para buscar métricas reais do dashboard
 * Substitui os valores mockados em Dashboard.tsx
 */
export const useDashboardMetrics = () => {
  return useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: async (): Promise<Omit<DashboardMetrics, 'isLoading' | 'error'>> => {
      // Buscar usuário atual
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      // Buscar organization do usuário
      const { data: orgMember, error: orgError } = await supabase
        .from('organization_members')
        .select('organization_id')
        .eq('user_id', user.id)
        .single();

      if (orgError || !orgMember?.organization_id) {
        // Retornar zeros se não tiver organização
        return {
          activePriorities: 0,
          executionRate: 0,
          criticalCount: 0,
          challengesWithLever: 0,
          trackedKPIs: 0,
          latestKPIs: {},
          reportsCreated: 0,
          reportsLast30d: 0,
          estimatedImpact: 'R$ 0'
        };
      }

      const organizationId = orgMember.organization_id;

      // Paralelizar queries para performance
      const [
        challengesResult,
        kpisResult,
        reportsResult,
        actionsResult
      ] = await Promise.all([
        // 1. Buscar desafios ativos
        supabase
          .from('user_challenges')
          .select('severity, suggested_lever_code, status', { count: 'exact' })
          .eq('organization_id', organizationId)
          .in('status', ['detected', 'acknowledged', 'in_progress']),

        // 2. Buscar KPIs do período atual
        supabase
          .from('user_metrics')
          .select('kpi_code, value, delta_percentage, reference_period')
          .eq('organization_id', organizationId)
          .eq('reference_period', getCurrentPeriod())
          .order('created_at', { ascending: false }),

        // 3. Contar relatórios
        supabase
          .from('reports')
          .select('*', { count: 'exact' })
          .eq('user_id', user.id),

        // 4. Buscar ações (para calcular execution rate) - pode não existir ainda
        (async () => {
          try {
            return await supabase
              .from('user_actions')
              .select('status')
              .eq('organization_id', organizationId);
          } catch {
            return { data: [], error: null };
          }
        })()
      ]);

      // Calcular métricas de desafios
      const activePriorities = challengesResult.count || 0;
      const criticalCount = challengesResult.data?.filter(
        c => c.severity === 'critical'
      ).length || 0;
      const challengesWithLever = challengesResult.data?.filter(
        c => c.suggested_lever_code
      ).length || 0;

      // Calcular execution rate (se tivermos ações)
      let executionRate = 0;
      if (actionsResult.data && actionsResult.data.length > 0) {
        const completed = actionsResult.data.filter(
          a => a.status === 'completed'
        ).length;
        executionRate = Math.round((completed / actionsResult.data.length) * 100);
      } else {
        // Fallback: usar dados de desafios resolvidos
        const { count: resolvedCount } = await supabase
          .from('user_challenges')
          .select('*', { count: 'exact' })
          .eq('organization_id', organizationId)
          .eq('status', 'resolved');
        
        const totalChallenges = (activePriorities + (resolvedCount || 0));
        executionRate = totalChallenges > 0 
          ? Math.round(((resolvedCount || 0) / totalChallenges) * 100)
          : 0;
      }

      // Processar KPIs (manter apenas o mais recente de cada tipo)
      const latestKPIsMap = new Map<string, { value: number; delta?: number }>();
      kpisResult.data?.forEach(kpi => {
        if (!latestKPIsMap.has(kpi.kpi_code)) {
          latestKPIsMap.set(kpi.kpi_code, {
            value: kpi.value,
            delta: kpi.delta_percentage
          });
        }
      });

      // Calcular impacto estimado
      const estimatedImpact = await calculateEstimatedImpact(organizationId);

      return {
        activePriorities,
        executionRate,
        criticalCount,
        challengesWithLever,
        trackedKPIs: latestKPIsMap.size,
        latestKPIs: Object.fromEntries(latestKPIsMap),
        reportsCreated: reportsResult.count || 0,
        reportsLast30d: 0, // Calcular se necessário
        estimatedImpact: `${estimatedImpact.currency} ${formatCurrency(estimatedImpact.value)}`
      };
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchInterval: 1000 * 60 * 5, // Refetch a cada 5 minutos
  });
};

/**
 * Hook simplificado para apenas as métricas principais
 * Use quando precisar só dos cards do topo
 */
export const useDashboardSummary = () => {
  const { data, isLoading, error } = useDashboardMetrics();

  return {
    // Card 1: Prioridades Ativas
    activePriorities: {
      value: data?.activePriorities || 0,
      trend: data?.activePriorities > 0 ? { value: data.activePriorities, isPositive: false } : undefined
    },

    // Card 2: Taxa de Execução
    executionRate: {
      value: `${data?.executionRate || 0}%`,
      trend: data?.executionRate > 0 ? { value: data.executionRate, isPositive: true } : undefined
    },

    // Card 3: Relatórios
    reportsCreated: {
      value: data?.reportsCreated || 0,
      trend: data?.reportsLast30d && data.reportsLast30d > 0 
        ? { value: data.reportsLast30d, isPositive: true } 
        : undefined
    },

    // Card 4: Impacto Estimado
    estimatedImpact: {
      value: data?.estimatedImpact || 'R$ 0',
      trend: undefined // Impacto não tem tendência direta
    },

    // Dados extras
    criticalCount: data?.criticalCount || 0,
    trackedKPIs: data?.trackedKPIs || 0,
    latestKPIs: data?.latestKPIs || {},

    isLoading,
    error
  };
};

/**
 * Busca desafios ativos detalhados para mostrar no dashboard
 */
export const useActiveChallenges = () => {
  return useQuery({
    queryKey: ['active-challenges'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];

      const { data: orgMember } = await supabase
        .from('organization_members')
        .select('organization_id')
        .eq('user_id', user.id)
        .single();

      if (!orgMember?.organization_id) return [];

      const { data } = await supabase
        .from('user_challenges')
        .select(`
          *,
          library_levers:suggested_lever_code (
            code,
            title,
            category,
            expected_impact_description
          )
        `)
        .eq('organization_id', orgMember.organization_id)
        .in('status', ['detected', 'acknowledged', 'in_progress'])
        .order('detected_at', { ascending: false })
        .limit(5);

      return data || [];
    },
    staleTime: 1000 * 60 * 2
  });
};

// Helpers

const getCurrentPeriod = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
};

const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value.toString();
};

const calculateEstimatedImpact = async (
  organizationId: string
): Promise<{ value: number; currency: string }> => {
  try {
    // Buscar desafios ativos com alavancas
    const { data: challenges } = await supabase
      .from('user_challenges')
      .select('suggested_lever_code')
      .eq('organization_id', organizationId)
      .in('status', ['detected', 'acknowledged', 'in_progress'])
      .not('suggested_lever_code', 'is', null);

    if (!challenges?.length) {
      return { value: 0, currency: 'R$' };
    }

    const leverCodes = [...new Set(challenges.map(c => c.suggested_lever_code))];

    const { data: levers } = await supabase
      .from('library_levers')
      .select('expected_impact_description, impact_level')
      .in('code', leverCodes);

    if (!levers?.length) {
      return { value: 0, currency: 'R$' };
    }

    let totalImpact = 0;

    levers.forEach(lever => {
      const impact = lever.expected_impact_description;
      
      // Extrair valor monetário
      const monetaryMatch = impact?.match(/R\$\s*([\d.,]+)\s*(mil|k|milhões?|mi)?/i);
      
      if (monetaryMatch) {
        let value = parseFloat(monetaryMatch[1].replace(/\./g, '').replace(',', '.'));
        if (impact.toLowerCase().includes('milhão') || impact.toLowerCase().includes('mi')) {
          value *= 1000000;
        } else if (impact.toLowerCase().includes('mil') || impact.toLowerCase().includes('k')) {
          value *= 1000;
        }
        totalImpact += value;
      } else {
        // Valor padrão baseado no nível de impacto
        const baseValue = lever.impact_level === 'high' ? 15000 : 
                         lever.impact_level === 'medium' ? 8000 : 3000;
        totalImpact += baseValue;
      }
    });

    return {
      value: Math.round(totalImpact),
      currency: 'R$'
    };
  } catch {
    return { value: 0, currency: 'R$' };
  }
};
