import React from "react";
import { useTranslation } from "react-i18next";
import { useReports } from "@/hooks/useReports";
import { useDashboardSummary } from "@/hooks/useDashboardSummary";
import { Report } from "@/types/reports";
import {
  Heart,
  Gauge,
  TrendingUp,
  Plus,
  FileText,
  Target,
  Activity,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { KPICard } from "@/components/ui/kpi-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Mock data organizado por seções
const HEALTH_METRICS = [
  {
    title: "Run Rate (Caixa)",
    value: "R$ 245K",
    target: "R$ 300K",
    progress: 82,
    status: "warning" as const,
    icon: Heart,
    description: "Caixa para 8 meses de operação",
  },
  {
    title: "Burn Rate Mensal",
    value: "R$ 31K",
    target: "R$ 28K",
    progress: 110,
    status: "critical" as const,
    icon: AlertTriangle,
    description: "11% acima do planejado",
  },
  {
    title: "Dívida/Receita",
    value: "32%",
    target: "25%",
    progress: 78,
    status: "stable" as const,
    icon: CheckCircle,
    description: "Dentro do limite saudável",
  },
];

const EFFICIENCY_METRICS = [
  {
    title: "CAC (Custo Aquisição)",
    value: "R$ 450",
    target: "R$ 400",
    progress: 113,
    status: "warning" as const,
    icon: Target,
    description: "13% acima do benchmark",
  },
  {
    title: "LTV (Lifetime Value)",
    value: "R$ 2.4K",
    target: "R$ 2.0K",
    progress: 120,
    status: "success" as const,
    icon: TrendingUp,
    description: "20% acima da meta",
  },
  {
    title: "Ticket Médio",
    value: "R$ 890",
    target: "R$ 850",
    progress: 105,
    status: "success" as const,
    icon: Zap,
    description: "Crescimento de 5%",
  },
  {
    title: "Churn Mensal",
    value: "3.2%",
    target: "2.5%",
    progress: 78,
    status: "warning" as const,
    icon: AlertCircle,
    description: "Acima do ideal do setor",
  },
];

const GROWTH_METRICS = [
  {
    title: "Receita Recorrente (MRR)",
    value: "R$ 128K",
    change: "+12%",
    trend: "up" as const,
    icon: TrendingUp,
    description: "vs. mês anterior",
  },
  {
    title: "Novos Clientes",
    value: "47",
    change: "+23%",
    trend: "up" as const,
    icon: Target,
    description: "vs. mês anterior",
  },
  {
    title: "Taxa de Expansão",
    value: "18%",
    change: "+5pp",
    trend: "up" as const,
    icon: Activity,
    description: "upsell/cross-sell",
  },
];

const PRIORITY_ALERTS = [
  {
    id: 1,
    title: "Queda na Conversão",
    severity: "high",
    domain: "commercial",
    timeToFix: "30 dias",
  },
  {
    id: 2,
    title: "Churn Acima do Normal",
    severity: "medium",
    domain: "operations",
    timeToFix: "45 dias",
  },
];

const RECENT_ACTIONS = [
  { id: 1, title: "Implementar novo funil de vendas", status: "in_progress", progress: 60 },
  { id: 2, title: "Reduzir CAC em 15%", status: "pending", progress: 0 },
  { id: 3, title: "Lançar programa de fidelidade", status: "completed", progress: 100 },
];

const ControlPanel = () => {
  const { t, i18n } = useTranslation();
  const { data: allReports = [], isLoading: reportsLoading } = useReports();
  const { data: summaryData, loading: metricsLoading } = useDashboardSummary();

  const loading = reportsLoading || metricsLoading;
  const reports = allReports.slice(0, 3);

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

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "medium":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive" className="text-xs">Crítico</Badge>;
      case "medium":
        return <Badge variant="default" className="text-xs bg-amber-500">Médio</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">Baixo</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="container-fluid space-y-8 py-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-11 w-40" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-40 rounded-xl" />
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
            {t("dashboard.title", { defaultValue: "Painel de Controle" })}
          </h1>
          <p className="text-muted-foreground">
            {t("dashboard.subtitle", { defaultValue: "Visão unificada da saúde, eficiência e crescimento do negócio" })}
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/${i18n.language}/app/radar`}>
              <Activity className="w-4 h-4 mr-2" />
              Ver Radar
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

      {/* Tabs Principais: Saúde | Eficiência | Crescimento */}
      <Tabs defaultValue="health" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[500px]">
          <TabsTrigger value="health" className="gap-2">
            <Heart className="w-4 h-4" />
            Saúde
          </TabsTrigger>
          <TabsTrigger value="efficiency" className="gap-2">
            <Gauge className="w-4 h-4" />
            Eficiência
          </TabsTrigger>
          <TabsTrigger value="growth" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Crescimento
          </TabsTrigger>
        </TabsList>

        {/* Tab: Saúde Financeira */}
        <TabsContent value="health" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HEALTH_METRICS.map((metric, index) => (
              <Card key={index} className={cn(
                "border-l-4",
                metric.status === "critical" ? "border-l-red-500" :
                metric.status === "warning" ? "border-l-amber-500" :
                metric.status === "success" ? "border-l-green-500" :
                "border-l-blue-500"
              )}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className={cn(
                      "h-4 w-4",
                      metric.status === "critical" ? "text-red-500" :
                      metric.status === "warning" ? "text-amber-500" :
                      metric.status === "success" ? "text-green-500" :
                      "text-blue-500"
                    )} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Meta: {metric.target}
                  </div>
                  <div className="mt-3">
                    <Progress 
                      value={Math.min(metric.progress, 100)} 
                      className={cn(
                        "h-2",
                        metric.status === "critical" ? "bg-red-100" :
                        metric.status === "warning" ? "bg-amber-100" :
                        "bg-slate-100"
                      )}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Alertas de Saúde */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Alertas de Saúde Financeira
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                  {getSeverityIcon("high")}
                  <div className="flex-1">
                    <div className="font-medium text-sm">Burn Rate Elevado</div>
                    <div className="text-xs text-muted-foreground">
                      Consumo de caixa 11% acima do planejado. Run rate reduzido para 8 meses.
                    </div>
                  </div>
                  <Badge variant="destructive">Ação Imediata</Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  {getSeverityIcon("medium")}
                  <div className="flex-1">
                    <div className="font-medium text-sm">Run Rate em Queda</div>
                    <div className="text-xs text-muted-foreground">
                      Projeção indica 6 meses de caixa em 90 dias se tendência continuar.
                    </div>
                  </div>
                  <Badge variant="default" className="bg-amber-500">Monitorar</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Eficiência Operacional */}
        <TabsContent value="efficiency" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EFFICIENCY_METRICS.map((metric, index) => (
              <Card key={index} className={cn(
                "border-t-4",
                metric.status === "success" ? "border-t-green-500" :
                metric.status === "warning" ? "border-t-amber-500" :
                "border-t-red-500"
              )}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className={cn(
                      "h-4 w-4",
                      metric.status === "success" ? "text-green-500" :
                      metric.status === "warning" ? "text-amber-500" :
                      "text-red-500"
                    )} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Meta: {metric.target}
                  </div>
                  <div className="mt-3">
                    <Progress 
                      value={Math.min(metric.progress, 100)} 
                      className="h-2"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Eficiência: Ações Recomendadas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Gauge className="h-5 w-5" />
                Oportunidades de Melhoria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div>
                      <div className="font-medium text-sm">Reduzir CAC em 15%</div>
                      <div className="text-xs text-muted-foreground">
                        Potencial economia: R$ 8.5K/mês
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/${i18n.language}/app/action-plan`}>
                      Ver Plano
                    </Link>
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <div>
                      <div className="font-medium text-sm">Reduzir Churn para 2.5%</div>
                      <div className="text-xs text-muted-foreground">
                        Impacto: +R$ 12K/mês na receita
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/${i18n.language}/app/analytics`}>
                      Analisar
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Crescimento */}
        <TabsContent value="growth" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GROWTH_METRICS.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className="h-4 w-4 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className={cn(
                      "text-sm font-medium",
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    )}>
                      {metric.change}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Projeções de Crescimento */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Projeção de Receita</CardTitle>
                <CardDescription>
                  Próximos 3 meses baseado na tendência atual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Mês Atual</span>
                    <span className="font-semibold">R$ 128K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Próximo Mês</span>
                    <span className="font-semibold text-green-600">R$ 143K (+12%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Em 3 Meses</span>
                    <span className="font-semibold text-green-600">R$ 165K (+29%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meta de Crescimento Anual</CardTitle>
                <CardDescription>
                  Progresso em relação ao objetivo de 3x
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Progresso</span>
                  <span className="font-medium">67% da meta</span>
                </div>
                <Progress value={67} className="h-3" />
                <p className="text-xs text-muted-foreground">
                  Na velocidade atual, atingirá 3.2x até dezembro. 
                  Considere acelerar investimento em aquisição.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Seção Inferior: Resumo e Ações */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t">
        {/* Prioridades Críticas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Prioridades no Radar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {PRIORITY_ALERTS.map((alert) => (
                <div 
                  key={alert.id} 
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                >
                  {getSeverityIcon(alert.severity)}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">{alert.title}</div>
                    <div className="text-xs text-muted-foreground">
                      Resolver em: {alert.timeToFix}
                    </div>
                  </div>
                  {getSeverityBadge(alert.severity)}
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm" asChild>
              <Link to={`/${i18n.language}/app/radar`}>
                Ver Todas no Radar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Ações em Andamento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" />
              Ações em Andamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {RECENT_ACTIONS.map((action) => (
                <div key={action.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className={cn(
                      action.status === "completed" && "line-through text-muted-foreground"
                    )}>
                      {action.title}
                    </span>
                    <Badge 
                      variant={action.status === "completed" ? "default" : "outline"}
                      className="text-xs"
                    >
                      {action.status === "in_progress" ? "Em Andamento" :
                       action.status === "completed" ? "Concluído" : "Pendente"}
                    </Badge>
                  </div>
                  <Progress value={action.progress} className="h-1.5" />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm" asChild>
              <Link to={`/${i18n.language}/app/action-plan`}>
                Ver Plano Completo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Relatórios Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5" />
              Relatórios Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{report.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(report.createdAt || "").toLocaleDateString(i18n.language)}
                      </div>
                    </div>
                    <Badge className={cn("text-xs", getStatusColor(report.status))}>
                      {getStatusText(report.status)}
                    </Badge>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Nenhum relatório recente</p>
                </div>
              )}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm" asChild>
              <Link to={`/${i18n.language}/app/reports`}>
                Ver Todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ControlPanel;
