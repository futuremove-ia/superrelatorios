import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

/** Resumo do dashboard alinhado aos rótulos exibidos na UI (sem reuso enganoso de campos). */
export interface DashboardSummary {
  totalReports: number;
  completedReports: number;
  completionRatePercent: number;
  reportsCreatedLast7Days: number;
}

export const useDashboardSummary = () => {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isDemoMode } = useAuth();

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);

        if (isDemoMode) {
          setData({
            totalReports: 24,
            completedReports: 20,
            completionRatePercent: 83,
            reportsCreatedLast7Days: 5,
          });
          setLoading(false);
          return;
        }

        const { data: reports, error: reportsError } = await supabase
          .from("reports")
          .select("id, status, created_at");

        if (reportsError) throw reportsError;

        const list = reports ?? [];
        const totalReports = list.length;
        const completedReports = list.filter((r) => r.status === "completed").length;
        const completionRatePercent =
          totalReports > 0 ? Math.round((completedReports / totalReports) * 100) : 0;

        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        const reportsCreatedLast7Days = list.filter((r) => {
          if (!r.created_at) return false;
          return new Date(r.created_at).getTime() > weekAgo;
        }).length;

        setData({
          totalReports,
          completedReports,
          completionRatePercent,
          reportsCreatedLast7Days,
        });
      } catch (err) {
        console.error("Dashboard summary error:", err);
        setError("Failed to fetch dashboard summary");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [isDemoMode]);

  return { data, loading, error };
};
