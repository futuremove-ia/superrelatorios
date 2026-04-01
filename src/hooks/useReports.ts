import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Report } from "@/types/reports";
import {
  getReportsByOrganization,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
} from "@/services/supabaseReportsService";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";

export const useReports = () => {
  const { organizationId, isDemoMode } = useCurrentOrganization();
  return useQuery({
    queryKey: ["reports", organizationId],
    queryFn: () => getReportsByOrganization(organizationId),
    enabled: !isDemoMode && !!organizationId,
  });
};

export const useReport = (id: string | undefined) => {
  return useQuery({
    queryKey: ["reports", id],
    queryFn: () => {
      if (!id) throw new Error("ID is required");
      return getReportById(id);
    },
    enabled: !!id,
  });
};

export const useCreateReport = () => {
  const queryClient = useQueryClient();
  const { organizationId } = useCurrentOrganization();

  return useMutation({
    mutationFn: (data: {
      title: string;
      description: string;
      templateId: string;
      dataJson?: Record<string, unknown>;
    }) => {
      if (!organizationId) throw new Error("Organization ID is required");
      return createReport(
        organizationId,
        "",
        data.title,
        data.description,
        data.templateId,
        data.dataJson,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports", organizationId] });
    },
  });
};

export const useUpdateReport = () => {
  const queryClient = useQueryClient();
  const { organizationId } = useCurrentOrganization();

  return useMutation({
    mutationFn: (data: {
      reportId: string;
      updates: Partial<{
        title: string;
        description: string;
        status: string;
        data_json: Record<string, unknown>;
      }>;
    }) => updateReport(data.reportId, data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports", organizationId] });
    },
  });
};

export const useDeleteReport = () => {
  const queryClient = useQueryClient();
  const { organizationId } = useCurrentOrganization();

  return useMutation({
    mutationFn: (reportId: string) => deleteReport(reportId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reports", organizationId] });
    },
  });
};
