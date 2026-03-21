import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { reportsService, Report } from '@/services/mockReports';

export const useReports = () => {
  return useQuery({
    queryKey: ['reports'],
    queryFn: () => reportsService.getAllReports(),
  });
};

export const useReport = (id: string | undefined) => {
  return useQuery({
    queryKey: ['reports', id],
    queryFn: () => {
      if (!id) throw new Error('ID is required');
      return reportsService.getReportById(id);
    },
    enabled: !!id,
  });
};

export const useCreateReport = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<Report>) => reportsService.createReport(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reports'] });
    },
  });
};
