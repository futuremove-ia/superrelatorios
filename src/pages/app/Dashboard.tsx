import React from 'react';
import { useTranslation } from 'react-i18next';
import { useReports } from '@/hooks/useReports';
import { useDashboardSummary } from '@/hooks/useDashboardSummary';
import { Report } from '@/types/reports';
import { 
  ListChecks, 
  Zap, 
  FileText, 
  CircleDollarSign,
  Plus,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Dashboard as DashboardUnificado } from '@/components/dashboard/Dashboard';
import { DiagnosticSection } from '@/components/business/DiagnosticSection';
import { PriorityCard } from '@/components/business/PriorityCard';
import StrategicFocusBar from '@/components/strategy/StrategicFocusBar';

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const { data: allReports = [], isLoading: reportsLoading } = useReports();
  const { 
    activePriorities, 
    executionRate, 
    reportsCreated, 
    estimatedImpact,
    isLoading: metricsLoading 
  } = useDashboardSummary();

  const loading = reportsLoading || metricsLoading;
  const reports = allReports.slice(0, 4);

  const getStatusColor = (status: Report['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'shared': return 'bg-blue-100 text-blue-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status: Report['status']) => {
    switch (status) {
      case 'completed': return t('dashboard.status.completed');
      case 'shared': return t('dashboard.status.shared');
      default: return t('dashboard.status.draft');
    }
  };

  const stats = [
    { 
      title: t('dashboard.metrics.active_priorities'), 
      value: activePriorities.value.toString(), 
      icon: Target, 
      trend: activePriorities.trend,
      variant: 'info' as const
    },
    { 
      title: t('dashboard.metrics.execution_rate'), 
      value: executionRate.value, 
      icon: ListChecks, 
      trend: executionRate.trend,
      variant: 'success' as const
    },
    { 
      title: t('dashboard.metrics.reports_created'), 
      value: reportsCreated.value, 
      icon: FileText, 
      trend: reportsCreated.trend,
      variant: 'info' as const
    },
    { 
      title: t('dashboard.metrics.estimated_impact'), 
      value: estimatedImpact.value, 
      icon: CircleDollarSign, 
      trend: estimatedImpact.trend,
      variant: 'success' as const
    },
  ];

  if (loading) {
    return (
      <div className="container-fluid space-y-8 py-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-11 w-40" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="h-28 rounded-xl" />
          ))}
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-48 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-subtle">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 dashboard-viewport overflow-y-auto">
          <div className="container-fluid space-y-8 py-4 sm:py-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t('dashboard.welcome')}, <BrandName />
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {t('dashboard.ai_summary', { diagnostics: 3, priorities: 1 })}
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  asChild 
                  size="lg" 
                  className="self-start sm:self-auto touch-target"
                >
                  <Link to="/app/pastas">
                    <Database className="mr-2 h-5 w-5" />
                    {t('dashboard.actions.my_data')}
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  className="self-start sm:self-auto touch-target"
                  aria-label={t('dashboard.actions.new_report')}
                >
                  <Link to="/app/novo-relatorio">
                    <Plus className="mr-2 h-5 w-5" />
                    {t('dashboard.actions.new_report')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Dashboard Unificado */}
            <DashboardUnificado />

            {/* KPI Cards - Mantido para compatibilidade */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <KPICard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                  variant={stat.variant}
                  role="region"
                  aria-label={`Métrica: ${stat.title} com valor ${stat.value}`}
                />
              ))}
            </div>

            {/* v2.0 Strategic Focus Section */}
            <section aria-labelledby="strategic-heading" className="space-y-6">
              <h2 id="strategic-heading" className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                {t('dashboard.sections.strategic_focus')}
              </h2>
              <StrategicFocusBar />
            </section>

            {/* Recent Reports Section */}
            <section aria-labelledby="reports-heading">
              <div className="flex items-center justify-between mb-4">
                <h2 id="reports-heading" className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {t('dashboard.sections.recent_reports')}
                </h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/app/relatorios" className="flex items-center gap-1">
                    {t('dashboard.sections.view_all')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reports.map(report => (
                  <Card key={report.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base">{report.title}</CardTitle>
                        <Badge className={getStatusColor(report.status)}>
                          {getStatusText(report.status)}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {report.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{new Date(report.createdAt).toLocaleDateString()}</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/app/relatorios/${report.id}`}>
                            {t('dashboard.sections.view_report')}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
