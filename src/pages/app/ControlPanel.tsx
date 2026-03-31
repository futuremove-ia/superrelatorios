import React from "react";
import { useTranslation } from "react-i18next";
import { useReports } from "@/hooks/useReports";
import { useDashboardSummary } from "@/hooks/useDashboardSummary";
import { Report } from "@/types/reports";
import {
  ListChecks,
  Zap,
  FileText,
  CircleDollarSign,
  Plus,
  Calendar,
  TrendingUp,
  Target,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { KPICard } from "@/components/ui/kpi-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const { data: allReports = [], isLoading: reportsLoading } = useReports();
  const { data: summaryData, loading: metricsLoading } = useDashboardSummary();

  const loading = reportsLoading || metricsLoading;
  const reports = allReports.slice(0, 4);

  // Usando os dados formatados do hook useDashboardSummary
  const mockStats = [
    {
      title: t("dashboard.stats.active_priorities", {
        defaultValue: "Prioridades Ativas",
      }),
      value: summaryData?.activeUsers.toString() || "0",
      icon: Target,
      trend: {
        value: 8,
        isPositive: true,
        label: t("dashboard.stats.vs_last_month", {
          defaultValue: "vs. mês passado",
        }),
      },
      variant: "info" as const,
    },
    {
      title: t("dashboard.stats.execution_rate", {
        defaultValue: "Taxa de Execução",
      }),
      value: `${summaryData?.recentActivity || 0}%`,
      icon: ListChecks,
      trend: {
        value: 12,
        isPositive: true,
        label: t("dashboard.stats.vs_last_month", {
          defaultValue: "vs. mês passado",
        }),
      },
      variant: "success" as const,
    },
    {
      title: t("dashboard.stats.created_reports", {
        defaultValue: "Relatórios Criados",
      }),
      value: summaryData?.completionRate.toString() || "0",
      icon: FileText,
      trend: {
        value: 15,
        isPositive: true,
        label: t("dashboard.stats.vs_last_month", {
          defaultValue: "vs. mês passado",
        }),
      },
      variant: "info" as const,
    },
    {
      title: t("dashboard.stats.estimated_impact", {
        defaultValue: "Impacto Estimado",
      }),
      value: summaryData?.estimatedImpact || "R$0K",
      icon: CircleDollarSign,
      trend: {
        value: 22,
        isPositive: true,
        label: t("dashboard.stats.vs_last_month", {
          defaultValue: "vs. mês passado",
        }),
      },
      variant: "success" as const,
    },
  ];

  const getStatusColor = (status: Report["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "shared":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusText = (status: Report["status"]) => {
    switch (status) {
      case "completed":
        return t("dashboard.status.completed");
      case "shared":
        return t("dashboard.status.shared");
      default:
        return t("dashboard.status.draft");
    }
  };

  if (loading) {
    return (
      <div className="container-fluid space-y-8 py-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-11 w-40" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-28 rounded-xl" />
          ))}
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {t("dashboard.title")}
          </h1>
          <p className="text-muted-foreground">{t("dashboard.subtitle")}</p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/${i18n.language}/app/metrics`}>
              <Activity className="w-4 h-4 mr-2" />
              {t("nav.metrics", { defaultValue: "Indicadores" })}
            </Link>
          </Button>

          <Button size="sm" asChild>
            <Link to={`/${i18n.language}/app/reports/new`}>
              <Plus className="w-4 h-4 mr-2" />
              {t("dashboard.new_report", { defaultValue: "Novo Relatório" })}
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((stat, index) => (
          <KPICard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">
            {t("dashboard.tabs.overview", { defaultValue: "Visão Geral" })}
          </TabsTrigger>
          <TabsTrigger value="reports">
            {t("dashboard.tabs.reports", { defaultValue: "Relatórios" })}
          </TabsTrigger>
          <TabsTrigger value="priorities">
            {t("dashboard.tabs.priorities", { defaultValue: "Prioridades" })}
          </TabsTrigger>
          <TabsTrigger value="analytics">
            {t("dashboard.tabs.analytics", { defaultValue: "Analytics" })}
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {t("dashboard.recent_reports", {
                    defaultValue: "Relatórios Recentes",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reports.length > 0 ? (
                  reports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{report.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(report.createdAt || "").toLocaleDateString(
                            i18n.language,
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(report.status)}>
                          {getStatusText(report.status)}
                        </Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link
                            to={`/${i18n.language}/app/reports/${report.id}`}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>
                      {t("dashboard.no_reports", {
                        defaultValue: "Nenhum relatório encontrado",
                      })}
                    </p>
                    <Button className="mt-4" size="sm" asChild>
                      <Link to={`/${i18n.language}/app/reports/new`}>
                        {t("dashboard.create_first", {
                          defaultValue: "Criar primeiro relatório",
                        })}
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  {t("dashboard.quick_actions", {
                    defaultValue: "Ações Rápidas",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={`/${i18n.language}/app/reports/new`}>
                    <FileText className="w-4 h-4 mr-2" />
                    {t("dashboard.new_report", {
                      defaultValue: "Novo Relatório",
                    })}
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={`/${i18n.language}/app/prioridades`}>
                    <Target className="w-4 h-4 mr-2" />
                    {t("dashboard.view_priorities", {
                      defaultValue: "Ver Prioridades",
                    })}
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={`/${i18n.language}/app/metrics`}>
                    <Activity className="w-4 h-4 mr-2" />
                    {t("nav.metrics", {
                      defaultValue: "Painel de Indicadores",
                    })}
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={`/${i18n.language}/app/consolidated`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {t("nav.consolidated", {
                      defaultValue: "Dashboard Consolidado",
                    })}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {t("dashboard.all_reports", {
                defaultValue: "Todos os Relatórios",
              })}
            </h2>
            <Button asChild>
              <Link to={`/${i18n.language}/app/reports`}>
                {t("dashboard.view_all", { defaultValue: "Ver todos" })}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reports.map((report) => (
              <Card key={report.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(report.status)}>
                      {getStatusText(report.status)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(report.createdAt || "").toLocaleDateString(
                        i18n.language,
                      )}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {report.description ||
                      t("dashboard.no_description", {
                        defaultValue: "Sem descrição",
                      })}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to={`/${i18n.language}/app/reports/${report.id}`}>
                      {t("dashboard.view_details", {
                        defaultValue: "Ver detalhes",
                      })}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Priorities Tab */}
        <TabsContent value="priorities" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {t("dashboard.strategic_priorities", {
                defaultValue: "Prioridades Estratégicas",
              })}
            </h2>
            <Button asChild>
              <Link to={`/${i18n.language}/app/prioridades`}>
                {t("dashboard.manage", { defaultValue: "Gerenciar" })}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <Card>
            <CardContent className="text-center py-12">
              <Target className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">
                {t("dashboard.strategic_priorities", {
                  defaultValue: "Prioridades Estratégicas",
                })}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("dashboard.priorities_desc", {
                  defaultValue:
                    "Gerencie e acompanhe as prioridades estratégicas da organização",
                })}
              </p>
              <Button asChild>
                <Link to={`/${i18n.language}/app/prioridades`}>
                  {t("dashboard.view_priorities", {
                    defaultValue: "Ver prioridades",
                  })}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {t("dashboard.analytics_insights", {
                defaultValue: "Analytics e Insights",
              })}
            </h2>
            <Button asChild>
              <Link to={`/${i18n.language}/app/metrics`}>
                {t("dashboard.view_analytics", {
                  defaultValue: "Ver analytics",
                })}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {t("dashboard.performance_metrics", {
                    defaultValue: "Indicadores de Performance",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("dashboard.metrics_desc", {
                    defaultValue: "Acompanhe métricas detalhadas por domínios",
                  })}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/${i18n.language}/app/metrics`}>
                    <Activity className="w-4 h-4 mr-2" />
                    {t("nav.metrics", {
                      defaultValue: "Painel de Indicadores",
                    })}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {t("nav.consolidated", {
                    defaultValue: "Dashboard Consolidado",
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("dashboard.consolidated_desc", {
                    defaultValue:
                      "Visão unificada de todos os indicadores estratégicos",
                  })}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/${i18n.language}/app/consolidated`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {t("nav.consolidated", {
                      defaultValue: "Dashboard Consolidado",
                    })}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
