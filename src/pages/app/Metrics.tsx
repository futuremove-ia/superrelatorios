"use client";

import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Target,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { KPIStatusCard } from "@/components/ui/KPIStatusCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRelevantKPIs } from "@/hooks/useRelevantKPIs";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function MetricsPage() {
  const { t } = useTranslation();
  const { organization, isLoading: orgLoading } = useCurrentOrganization();
  const organizationId = organization?.id || "";

  const { kpis, isLoading, maturity } = useRelevantKPIs(organizationId);

  if (orgLoading || isLoading) {
    return (
      <div className="container mx-auto py-6 space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-96" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const formatValue = (value: any): string => {
    if (typeof value === "number") {
      return value.toLocaleString("pt-BR");
    }
    return String(value ?? "-");
  };

  const getStatus = (kpi: any): "positive" | "negative" | "neutral" => {
    const status = kpi.relevanceScore?.status;
    if (status === "high") return "positive";
    if (status === "low") return "negative";
    return "neutral";
  };

  const getTrend = (kpi: any) => {
    if (!kpi.relevanceScore) return undefined;
    const score = kpi.relevanceScore.score || 0;
    return {
      value: Math.round(score * 10),
      isPositive: score > 0.5,
    };
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {t("metrics.title", { defaultValue: "Métricas e KPIs" })}
          </h1>
          <p className="text-muted-foreground mt-2">
            {t("metrics.description", {
              defaultValue:
                "Visualize os principais indicadores da sua organização",
            })}
          </p>
        </div>
      </div>

      {maturity && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5" />
              {t("metrics.maturity_level", {
                defaultValue: "Nível de Maturidade",
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold text-primary">
                {maturity.level}
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {maturity.description}
                </p>
              </div>
              <Badge variant="outline" className="text-sm">
                {maturity.label}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis && kpis.length > 0 ? (
          kpis
            .slice(0, 8)
            .map((kpi: any, index: number) => (
              <KPIStatusCard
                key={kpi.code || index}
                code={kpi.code}
                title={kpi.name || kpi.title}
                value={formatValue(kpi.value)}
                unit={kpi.unit}
                status={getStatus(kpi)}
                trend={getTrend(kpi)}
              />
            ))
        ) : (
          <>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("metrics.no_data", {
                      defaultValue: "Nenhum KPI encontrado",
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              {t("metrics.kpis_relevantes", {
                defaultValue: "KPIs Relevantes",
              })}
            </CardTitle>
            <CardDescription>
              {t("metrics.kpis_relevantes_desc", {
                defaultValue: "Indicadores com maior relevância para seu setor",
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {kpis && kpis.length > 0 ? (
              <div className="space-y-4">
                {kpis.slice(0, 5).map((kpi: any, index: number) => (
                  <div
                    key={kpi.code || index}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-sm">
                        {kpi.name || kpi.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {kpi.code}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">
                        {formatValue(kpi.value)}
                      </p>
                      {kpi.unit && (
                        <p className="text-xs text-muted-foreground">
                          {kpi.unit}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  {t("metrics.upload_data", {
                    defaultValue: "Carregue dados para ver seus KPIs",
                  })}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {t("metrics.resumo", { defaultValue: "Resumo" })}
            </CardTitle>
            <CardDescription>
              {t("metrics.resumo_desc", {
                defaultValue: "Visão geral dos dados disponíveis",
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium">
                  {t("metrics.total_kpis", { defaultValue: "Total de KPIs" })}
                </span>
                <span className="text-lg font-bold">{kpis?.length || 0}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium">
                  {t("metrics.kpis_positivos", {
                    defaultValue: "KPIs Positivos",
                  })}
                </span>
                <span className="text-lg font-bold text-green-600">
                  {kpis?.filter((k: any) => getStatus(k) === "positive")
                    .length || 0}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium">
                  {t("metrics.kpisAtenção", { defaultValue: "KPIs Atenção" })}
                </span>
                <span className="text-lg font-bold text-red-600">
                  {kpis?.filter((k: any) => getStatus(k) === "negative")
                    .length || 0}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium">
                  {t("metrics.kpis_neutros", { defaultValue: "KPIs Neutros" })}
                </span>
                <span className="text-lg font-bold text-yellow-600">
                  {kpis?.filter((k: any) => getStatus(k) === "neutral")
                    .length || 0}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
