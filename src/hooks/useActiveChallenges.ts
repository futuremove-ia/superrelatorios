import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useStrategyTranslation } from '@/hooks/useStrategyTranslation';

interface ActiveChallenge {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  challenge_code: string;
  suggested_lever_code?: string;
  detected_at: string;
  status: 'detected' | 'acknowledged' | 'in_progress' | 'resolved';
}

interface SuggestedLever {
  code: string;
  title: string;
  description: string;
  category: string;
  expected_impact: string;
  impact_level: 'high' | 'medium' | 'low';
  quick_win: boolean;
  implementation_complexity: 'high' | 'medium' | 'low';
  typical_timeframe_days: number;
}

export const useActiveChallenges = () => {
  const { data: user } = supabase.auth.getUser();
  
  return useQuery({
    queryKey: ['active-challenges'],
    queryFn: async (): Promise<ActiveChallenge[]> => {
      if (!user) return [];
      
      // Buscar organization do usuário via profiles
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      // Buscar desafios ativos
      const { data: challenges } = await supabase
        .from('user_challenges')
        .select(`
          *,
          library_levers:suggested_lever_code (
            code,
            title,
            description,
            category,
            expected_impact,
            impact_level,
            quick_win,
            implementation_complexity,
            typical_timeframe_days
          )
        `)
        .eq('organization_id', profile.organization_id)
        .in('status', ['detected', 'acknowledged', 'in_progress'])
        .order('detected_at', { ascending: false })
        .limit(5);
      
      return challenges || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchInterval: 1000 * 60 * 2, // Refetch a cada 2 minutos
  });
};

export const useSuggestedLever = (challengeCode?: string) => {
  const { data: user } = supabase.auth.getUser();
  
  return useQuery({
    queryKey: ['suggested-lever', challengeCode],
    queryFn: async (): Promise<SuggestedLever | null> => {
      if (!user || !challengeCode) return null;
      
      // Buscar organization do usuário
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return null;
      
      // Buscar desafio para pegar a alavanca sugerida
      const { data: challenge } = await supabase
        .from('user_challenges')
        .select('suggested_lever_code')
        .eq('organization_id', profile.organization_id)
        .eq('challenge_code', challengeCode)
        .in('status', ['detected', 'acknowledged', 'in_progress'])
        .order('detected_at', { ascending: false })
        .limit(1)
        .single();
      
      if (!challenge?.suggested_lever_code) return null;
      
      // Buscar detalhes da alavanca
      const { data: lever } = await supabase
        .from('library_levers')
        .select('*')
        .eq('code', challenge.suggested_lever_code)
        .single();
      
      return lever;
    },
    enabled: !!user && !!challengeCode,
    staleTime: 1000 * 60 * 10, // 10 minutos
  });
};
