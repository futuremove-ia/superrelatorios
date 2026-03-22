import { useState, useEffect } from 'react';

interface DashboardSummary {
  totalReports: number;
  activeUsers: number;
  recentActivity: number;
  completionRate: number;
}

export const useDashboardSummary = () => {
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        // Mock data - replace with actual API call
        const mockData: DashboardSummary = {
          totalReports: 156,
          activeUsers: 42,
          recentActivity: 23,
          completionRate: 87.5
        };
        
        setTimeout(() => {
          setData(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch dashboard summary');
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return { data, loading, error };
};
