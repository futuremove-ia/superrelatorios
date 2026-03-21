import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Diagnostic, Priority, Action, PriorityScore } from '@/types/business';

/**
 * Hook to manage Business Domain entities (Diagnostics, Priorities, Actions)
 * v2.0 Assisted Prioritization Engine
 */

export const usePriorities = () => {
  return useQuery({
    queryKey: ['priorities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('priorities')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Priority[];
    },
  });
};

export const useValidatePriority = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, score }: { id: string; score: PriorityScore }) => {
      const { data, error } = await supabase
        .from('priorities')
        .update({ 
          status: 'validated',
          score: score,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['priorities'] });
    },
  });
};

export const useDiagnostics = (reportId?: string) => {
  return useQuery({
    queryKey: ['diagnostics', reportId],
    queryFn: async () => {
      let query = supabase.from('diagnostics').select('*');
      if (reportId) {
        query = query.eq('report_id', reportId);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });
      if (error) throw error;
      return data as Diagnostic[];
    },
  });
};
