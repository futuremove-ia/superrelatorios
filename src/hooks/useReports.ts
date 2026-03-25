import { useQuery } from "@tanstack/react-query";
import { reportsService } from "@/services/mockReports";
import { fetchReportsFromSupabase, fetchReportByIdFromSupabase } from "@/services/supabaseReportsService";
import { useAuth } from "@/contexts/AuthContext";

export const useReports = () => {
  const { isDemoMode } = useAuth();

  return useQuery({
    queryKey: ["reports", isDemoMode],
    queryFn: () =>
      isDemoMode ? reportsService.getAllReports() : fetchReportsFromSupabase(),
  });
};

export const useReport = (id: string | undefined) => {
  const { isDemoMode } = useAuth();

  return useQuery({
    queryKey: ["reports", id, isDemoMode],
    queryFn: () => {
      if (!id) throw new Error("ID is required");
      return isDemoMode
        ? reportsService.getReportById(id)
        : fetchReportByIdFromSupabase(id);
    },
    enabled: !!id,
  });
};
