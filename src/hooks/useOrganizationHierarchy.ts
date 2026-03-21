import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface BusinessUnit {
  id: string;
  name: string;
  code: string;
  type: 'matriz' | 'filial' | 'ponto_venda' | 'escritorio' | 'armazem' | 'outro';
  address?: string;
  city?: string;
  state?: string;
  manager_id?: string;
  is_active: boolean;
  is_primary: boolean;
  created_at: string;
}

interface Department {
  id: string;
  business_unit_id: string;
  name: string;
  code: string;
  description?: string;
  parent_department_id?: string;
  manager_id?: string;
  cost_center?: string;
  budget_limit?: number;
  is_active: boolean;
  created_at: string;
}

interface Team {
  id: string;
  organization_id: string;
  business_unit_id?: string;
  department_id?: string;
  name: string;
  code: string;
  description?: string;
  type: 'squad' | 'projeto' | 'comite' | 'transversal' | 'funcional' | 'temporario';
  leader_id?: string;
  start_date?: string;
  end_date?: string;
  is_active: boolean;
  created_at: string;
}

interface Membership {
  id: string;
  user_id: string;
  organization_id: string;
  business_unit_id?: string;
  department_id?: string;
  team_id?: string;
  role_id: string;
  start_date: string;
  end_date?: string;
  is_primary: boolean;
  is_active: boolean;
  created_at: string;
}

interface Role {
  id: string;
  organization_id?: string;
  name: string;
  code: string;
  description: string;
  level: 'owner' | 'admin' | 'manager' | 'supervisor' | 'analyst' | 'viewer' | 'guest';
  permissions: string[];
  scope_business_units: boolean;
  scope_departments: boolean;
  scope_teams: boolean;
  is_system: boolean;
  is_active: boolean;
}

export const useBusinessUnits = () => {
  return useQuery({
    queryKey: ['business-units'],
    queryFn: async (): Promise<BusinessUnit[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      const { data } = await supabase
        .from('business_units')
        .select('*')
        .eq('organization_id', profile.organization_id)
        .eq('is_active', true)
        .order('is_primary', { ascending: false })
        .order('name');
      
      return data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchInterval: 1000 * 60 * 2, // Refetch a cada 2 minutos
  });
};

export const useDepartments = (businessUnitId?: string) => {
  return useQuery({
    queryKey: ['departments', businessUnitId],
    queryFn: async (): Promise<Department[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      let query = supabase
        .from('departments')
        .select('*')
        .eq('organization_id', profile.organization_id)
        .eq('is_active', true)
        .order('name');
      
      if (businessUnitId) {
        query = query.eq('business_unit_id', businessUnitId);
      }
      
      const { data } = await query;
      return data || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });
};

export const useTeams = (businessUnitId?: string, departmentId?: string) => {
  return useQuery({
    queryKey: ['teams', businessUnitId, departmentId],
    queryFn: async (): Promise<Team[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      let query = supabase
        .from('teams')
        .select('*')
        .eq('organization_id', profile.organization_id)
        .eq('is_active', true)
        .order('name');
      
      if (businessUnitId) {
        query = query.eq('business_unit_id', businessUnitId);
      }
      
      if (departmentId) {
        query = query.eq('department_id', departmentId);
      }
      
      const { data } = await query;
      return data || [];
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });
};

export const useMemberships = (userId?: string) => {
  return useQuery({
    queryKey: ['memberships', userId],
    queryFn: async (): Promise<Membership[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      let query = supabase
        .from('memberships')
        .select(`
          *,
          business_units:business_unit_id(name, code),
          departments:department_id(name, code),
          teams:team_id(name, code),
          roles_permissions:role_id(name, code, level, permissions)
        `)
        .eq('organization_id', profile.organization_id)
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (userId) {
        query = query.eq('user_id', userId);
      }
      
      const { data } = await query;
      return data || [];
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });
};

export const useRoles = () => {
  return useQuery({
    queryKey: ['roles'],
    queryFn: async (): Promise<Role[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      // Buscar roles do sistema + roles da org
      const { data } = await supabase
        .from('roles_permissions')
        .select('*')
        .or('is_system.eq.true', `organization_id.eq.${profile.organization_id}`)
        .eq('is_active', true)
        .order('level');
      
      return data || [];
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 10, // 10 minutos para roles
    refetchInterval: 1000 * 60 * 5,
  });
};

export const useUserMemberships = () => {
  return useQuery({
    queryKey: ['user-memberships', user?.id],
    queryFn: async (): Promise<Membership[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return [];
      
      const { data } = await supabase
        .from('memberships')
        .select(`
          *,
          business_units:business_unit_id(name, code),
          departments:department_id(name, code),
          teams:team_id(name, code),
          roles_permissions:role_id(name, code, level, permissions)
        `)
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('is_primary', { ascending: false })
        .order('created_at', { ascending: false });
      
      return data || [];
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });
};

// Hook para obter a organização atual do usuário
export const useCurrentOrganization = () => {
  return useQuery({
    queryKey: ['current-organization', user?.id],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return null;
      
      const { data: profile } = await supabase
        .from('profiles')
        .select(`
          organization_id,
          organizations:organization_id(
            name,
            cnpj,
            logo_url,
            primary_color,
            secondary_color
          )
        `)
        .eq('id', user.id)
        .single();
      
      return profile?.organizations || null;
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
  });
};
