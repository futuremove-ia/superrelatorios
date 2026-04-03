import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  Users,
  Zap,
  Activity,
  PieChart,
  Filter,
  Download,
  RefreshCw,
  Calendar,
  Settings,
  Eye,
  ArrowRight,
  Plus,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/ui/kpi-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useMetricsLibrary } from "@/hooks/useMetricsLibrary";
import { useMetricValues } from "@/hooks/useMetricValues";
import { useCrossDomainAnalytics } from "@/hooks/useCrossDomainAnalytics";
import { MetricsCard } from "@/components/metrics";
import { DomainMetricsSummary } from "@/components/metrics";
import { MetricsChart } from "@/components/metrics";
import { TrendIndicator } from "@/components/metrics";
import { Link } from "react-router-dom";

const MetricsDashboard = () => {
  const { t } = useTranslation();
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [selectedView, setSelectedView] = useState("cards");
  const [searchTerm, setSearchTerm] = useState("");

  // Hooks para dados
  const { metrics, isLoading: metricsLoading } = useMetricsLibrary();
  const { values, isLoading: valuesLoading } = useMetricValues("default-org");
  const { analytics, isLoading: analyticsLoading } =
    useCrossDomainAnalytics("default-org");

  const loading = metricsLoading || valuesLoading || analyticsLoading;

  // Mock data para demonstração
  const mockKPIs = [
    {
      title: "Total de Métricas",
      value: "16",
      icon: BarChart3,
      trend: { value: 0, isPositive: true, label: "Estável" },
      variant: "info" as const,
      subtitle: "Ativas e monitoradas",
    },
    {
      title: "Score de Saúde",
      value: "82%",
      icon: Activity,
      trend: { value: 5, isPositive: true, label: "vs. mês anterior" },
      variant: "success" as const,
      subtitle: "Performance geral",
    },
    {
      title: "Métricas Críticas",
      value: "3",
      icon: Target,
      trend: { value: -1, isPositive: false, label: "vs. mês anterior" },
      variant: "warning" as const,
      subtitle: "Requerem atenção",
    },
    {
      title: "Taxa de Atualização",
      value: "94%",
      icon: RefreshCw,
      trend: { value: 2, isPositive: true, label: "vs. mês anterior" },
      variant: "success" as const,
      subtitle: "Dados atualizados",
    },
  ];

  const mockDomainData = [
    {
      domain: "finance",
      name: "Financeiro",
      icon: DollarSign,
      color: "bg-green-500",
      metrics: 4,
      healthScore: 85,
      status: "on-track",
      criticalCount: 0,
      trend: 8,
    },
    {
      domain: "commercial",
      name: "Comercial",
      icon: Users,
      color: "bg-blue-500",
      metrics: 4,
      healthScore: 78,
      status: "on-track",
      criticalCount: 1,
      trend: 5,
    },
    {
      domain: "operations",
      name: "Operacional",
      icon: Zap,
      color: "bg-orange-500",
      metrics: 4,
      healthScore: 82,
      status: "on-track",
      criticalCount: 1,
      trend: 12,
    },
    {
      domain: "strategy",
      name: "Estratégico",
      icon: Target,
      color: "bg-purple-500",
      metrics: 4,
      healthScore: 77,
      status: "at-risk",
      criticalCount: 1,
      trend: -3,
    },
  ];

  const mockMetrics = [
    {
      id: "1",
      name: "Net Profit Margin",
      value: 15.8,
      unit: "%",
      domain: "finance",
      trend: "up",
      healthStatus: "good",
      lastUpdated: "2024-03-15",
      description: "Margem de lucro líquida",
    },
    {
      id: "2",
      name: "Sales Conversion Rate",
      value: 14.7,
      unit: "%",
      domain: "commercial",
      trend: "up",
      healthStatus: "good",
      lastUpdated: "2024-03-15",
      description: "Taxa de conversão de vendas",
    },
    {
      id: "3",
      name: "Operational Efficiency",
      value: 76.8,
      unit: "%",
      domain: "operations",
      trend: "up",
      healthStatus: "good",
      lastUpdated: "2024-03-15",
      description: "Eficiência operacional",
    },
    {
      id: "4",
      name: "OKR Progress",
      value: 78,
      unit: "%",
      domain: "strategy",
      trend: "down",
      healthStatus: "warning",
      lastUpdated: "2024-03-15",
      description: "Progresso dos OKRs",
    },
    {
      id: "5",
      name: "Customer Acquisition Cost",
      value: 320,
      unit: "R$",
      domain: "finance",
      trend: "down",
      healthStatus: "good",
      lastUpdated: "2024-03-15",
      description: "Custo de aquisição de cliente",
    },
    {
      id: "6",
      name: "Churn Rate",
      value: 4.2,
      unit: "%",
      domain: "commercial",
      trend: "up",
      healthStatus: "critical",
      lastUpdated: "2024-03-15",
      description: "Taxa de cancelamento",
    },
  ];

  const filteredMetrics = mockMetrics.filter((metric) => {
    const matchesDomain =
      selectedDomain === "all" || metric.domain === selectedDomain;
    const matchesSearch =
      metric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      metric.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-green-100 text-green-800";
      case "at-risk":
        return "bg-yellow-100 text-yellow-800";
      case "off-track":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case "good":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "critical":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case "finance":
        return DollarSign;
      case "commercial":
        return Users;
      case "operations":
        return Zap;
      case "strategy":
        return Target;
      default:
        return BarChart3;
    }
  };

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "finance":
        return "bg-green-500";
      case "commercial":
        return "bg-blue-500";
      case "operations":
        return "bg-orange-500";
      case "strategy":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const getDomainName = (domain: string) => {
    switch (domain) {
      case "finance":
        return "Financeiro";
      case "commercial":
        return "Comercial";
      case "operations":
        return "Operacional";
      case "strategy":
        return "Estratégico";
      default:
        return domain;
    }
  };

  if (loading) {
    return (
      <div className="container-fluid space-y-8 py-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <div className="flex gap-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>

        <div className="space-y-6">
          <Skeleton className="h-6 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-48 rounded-xl" />
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
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Painel de Indicadores
            </h1>
            <p className="text-muted-foreground">
              Monitoramento completo de métricas por domínios
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar métricas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>

          <Select value={selectedDomain} onValueChange={setSelectedDomain}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos Domínios</SelectItem>
              <SelectItem value="finance">Financeiro</SelectItem>
              <SelectItem value="commercial">Comercial</SelectItem>
              <SelectItem value="operations">Operacional</SelectItem>
              <SelectItem value="strategy">Estratégico</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>

          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>

          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockKPIs.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            icon={kpi.icon}
            trend={kpi.trend}
            variant={kpi.variant}
            subtitle={kpi.subtitle}
          />
        ))}
      </div>

      {/* Alert for Critical Metrics */}
      {mockDomainData.some((d) => d.criticalCount > 0) && (
        <Alert className="border-yellow-200 bg-yellow-50">
          <Target className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Atenção:</strong>{" "}
            {mockDomainData.filter((d) => d.criticalCount > 0).length} domínios
            possuem métricas críticas que requerem atenção imediata.
            <Button
              variant="link"
              size="sm"
              className="p-0 h-auto ml-2 text-yellow-600"
            >
              Ver detalhes
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Main Content */}
      <div className="space-y-6">
        {/* Domain Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockDomainData.map((domain) => (
            <Card key={domain.domain} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${domain.color} rounded-lg flex items-center justify-center`}
                    >
                      <domain.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{domain.name}</CardTitle>
                      <Badge className={getStatusColor(domain.status)}>
                        {domain.status === "on-track"
                          ? "No Caminho"
                          : domain.status === "at-risk"
                            ? "Em Risco"
                            : "Fora do Caminho"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Score de Saúde
                    </span>
                    <span className="text-lg font-bold">
                      {domain.healthScore}/100
                    </span>
                  </div>
                  <Progress value={domain.healthScore} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Métricas</span>
                    <p className="font-medium">{domain.metrics}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Críticas</span>
                    <p className="font-medium text-red-600">
                      {domain.criticalCount}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <TrendIndicator
                    trend={domain.trend > 0 ? "up" : "down"}
                    value={Math.abs(domain.trend)}
                  />
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/app/metrics?domain=${domain.domain}`}>
                      <Eye className="w-4 h-4 mr-2" />
                      Ver
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Mode Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Métricas Detalhadas</h2>
            <Badge variant="outline">{filteredMetrics.length} métricas</Badge>
          </div>

          <div className="flex gap-2">
            <Select value={selectedView} onValueChange={setSelectedView}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cards">Cards</SelectItem>
                <SelectItem value="chart">Gráfico</SelectItem>
                <SelectItem value="table">Tabela</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>

        {/* Metrics Display */}
        {selectedView === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMetrics.map((metric) => (
              <MetricsCard
                key={metric.id}
                metric={metric}
                onClick={() => {
                  /* Handle metric detail view */
                }}
              />
            ))}
          </div>
        )}

        {selectedView === "chart" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Visualização Gráfica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MetricsChart metrics={filteredMetrics} />
            </CardContent>
          </Card>
        )}

        {selectedView === "table" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Tabela de Métricas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Métrica</th>
                      <th className="text-left p-2">Domínio</th>
                      <th className="text-left p-2">Valor</th>
                      <th className="text-left p-2">Tendência</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMetrics.map((metric) => (
                      <tr key={metric.id} className="border-b">
                        <td className="p-2">
                          <div>
                            <p className="font-medium">{metric.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {metric.description}
                            </p>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-6 h-6 ${getDomainColor(metric.domain)} rounded flex items-center justify-center`}
                            >
                              {React.createElement(
                                getDomainIcon(metric.domain),
                                { className: "w-3 h-3 text-white" },
                              )}
                            </div>
                            <span>{getDomainName(metric.domain)}</span>
                          </div>
                        </td>
                        <td className="p-2">
                          <span className="font-bold">
                            {metric.value} {metric.unit}
                          </span>
                        </td>
                        <td className="p-2">
                          <TrendIndicator trend={metric.trend} value={0} />
                        </td>
                        <td className="p-2">
                          <Badge
                            className={getHealthColor(metric.healthStatus)}
                          >
                            {metric.healthStatus}
                          </Badge>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link to="/app/metrics/config">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurar Métricas
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link to="/app/analytics">
                  <Activity className="w-4 h-4 mr-2" />
                  Analytics Avançados
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link to="/app/decision-panel">
                  <Target className="w-4 h-4 mr-2" />
                  Painel de Decisão
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MetricsDashboard;
