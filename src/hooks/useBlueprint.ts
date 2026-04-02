import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useCurrentOrganization } from '@/hooks/useCurrentOrganization';
import { 
  getBlueprintByOrganization, 
  upsertBlueprint,
  CompanyBlueprint 
} from '@/services/blueprintService';

export const BLUEPRINT_QUERY_KEY = ['blueprint'];

export function useBlueprint() {
  const { organizationId } = useCurrentOrganization();
  const queryClient = useQueryClient();

  const blueprintQuery = useQuery({
    queryKey: [...BLUEPRINT_QUERY_KEY, organizationId],
    queryFn: () => getBlueprintByOrganization(organizationId!),
    enabled: !!organizationId,
  });

  const updateBlueprintMutation = useMutation({
    mutationFn: async (blueprint: Omit<CompanyBlueprint, 'id' | 'organization_id' | 'created_at' | 'updated_at'>) => {
      return upsertBlueprint(organizationId!, blueprint);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...BLUEPRINT_QUERY_KEY, organizationId] });
    },
  });

  return {
    blueprint: blueprintQuery.data,
    isLoading: blueprintQuery.isLoading,
    isError: blueprintQuery.isError,
    error: blueprintQuery.error,
    updateBlueprint: updateBlueprintMutation.mutateAsync,
    isUpdating: updateBlueprintMutation.isPending,
  };
}
