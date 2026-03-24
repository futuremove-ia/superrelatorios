import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

interface DashboardSummary {
  totalReports: number;
  activeUsers: number;
  recentActivity: number;
  completionRate: number;
  estimatedImpact: string;
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
          // Demo mode mock
          setData({
            totalReports: 24,
            activeUsers: 12,
            recentActivity: 78,
            completionRate: 85,
            estimatedImpact: "R$45K",
          });
          setLoading(false);
          return;
        }

        const { data: reports, error: reportsError } = await supabase
          .from("reports")
          .select("id, status, created_at");

        if (reportsError) throw reportsError;

        const totalReports = reports ? reports.length : 0;
        const completedReports = reports
          ? reports.filter((r) => r.status === "completed").length
          : 0;
        const completionRate =
          totalReports > 0 ? (completedReports / totalReports) * 100 : 0;

        // Simulação de atividades recentes (relatórios nos últimos 7 dias)
        const recentActivity = reports
          ? reports.filter((r) => {
              if (!r.created_at) return false;
              return (
                new Date(r.created_at).getTime() >
                Date.now() - 7 * 24 * 60 * 60 * 1000
              );
            }).length
          : 0;

        // Aqui você integraria com a tabela de prioridades reais
        const activePrioritiesCount = 3;

        setData({
          totalReports,
          activeUsers: activePrioritiesCount, // Reaproveitando propriedade para "Prioridades"
          recentActivity: Math.round(completionRate), // Reaproveitando para "Taxa Execução"
          completionRate: totalReports, // Reaproveitando para "Relatórios Criados"
          estimatedImpact: "R$" + (totalReports * 1.5 || 0).toFixed(1) + "K",
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
