import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Building2,
} from "lucide-react";
import { useFirstWin, FirstWinData } from "@/hooks/useFirstWin";
import type { Sector, KPIResult } from "@/domain/metrics/engine/types";
import { useTranslation } from "react-i18next";

interface FirstWinCardProps {
  parsedData: {
    headers: string[];
    rows: Record<string, unknown>[];
  };
  onContinue?: () => void;
  onSkip?: () => void;
}

const SECTOR_LABELS: Record<Sector, string> = {
  technology: "Tecnologia",
  retail: "Varejo",
  healthcare: "Saúde",
  manufacturing: "Manufatura",
  services: "Serviços",
  finance: "Financeiro",
  food: "Alimentação",
  logistics: "Logística",
  construction: "Construção",
  education: "Educação",
  real_estate: "Imóveis",
  media: "Mídia",
};

const SECTOR_COLORS: Record<Sector, string> = {
  technology: "bg-blue-500",
  retail: "bg-green-500",
  healthcare: "bg-red-500",
  manufacturing: "bg-orange-500",
  services: "bg-purple-500",
  finance: "bg-yellow-500",
  food: "bg-pink-500",
  logistics: "bg-cyan-500",
  construction: "bg-amber-500",
  education: "bg-indigo-500",
  real_estate: "bg-teal-500",
  media: "bg-rose-500",
};

const StatusIcon = ({ status }: { status: KPIResult["status"] }) => {
  switch (status) {
    case "good":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case "warning":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    case "critical":
      return <XCircle className="h-4 w-4 text-red-500" />;
    default:
      return <AlertCircle className="h-4 w-4 text-gray-400" />;
  }
};

const KPICard = ({ kpi }: { kpi: KPIResult }) => {
  const { t } = useTranslation();

  const formatValue = (value: number | null, unit: string) => {
    if (value === null) return "--";
    if (unit === "currency") return `R$ ${value.toLocaleString("pt-BR")}`;
    if (unit === "percent") return `${value.toFixed(1)}%`;
    if (unit === "ratio") return `${value.toFixed(2)}x`;
    return value.toLocaleString("pt-BR");
  };

  return (
    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
      <div className="flex items-center gap-3">
        <StatusIcon status={kpi.status} />
        <div>
          <p className="text-sm font-medium">{kpi.title}</p>
          <p className="text-xs text-muted-foreground">{kpi.code}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold">
          {formatValue(kpi.value, kpi.unit)}
        </p>
        <p className="text-xs text-muted-foreground capitalize">{kpi.status}</p>
      </div>
    </div>
  );
};

const SectorSelector = ({
  currentSector,
  onSelect,
}: {
  currentSector: Sector | null;
  onSelect: (sector: Sector) => void;
}) => {
  const { t } = useTranslation();

  const sectors = Object.keys(SECTOR_LABELS) as Sector[];

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Selecione o setor:</p>
      <div className="flex flex-wrap gap-2">
        {sectors.map((sector) => (
          <Button
            key={sector}
            variant={currentSector === sector ? "default" : "outline"}
            size="sm"
            onClick={() => onSelect(sector)}
            className="text-xs"
          >
            {SECTOR_LABELS[sector]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const FirstWinCard = ({
  parsedData,
  onContinue,
  onSkip,
}: FirstWinCardProps) => {
  const { t } = useTranslation();
  const {
    isAnalyzing,
    data,
    error,
    hasAnalyzed,
    analyze,
    reset,
    setSectorManually,
  } = useFirstWin();
  const [showSectorSelector, setShowSectorSelector] = useState(false);

  const handleAnalyze = () => {
    analyze(parsedData);
  };

  const handleSectorSelect = (sector: Sector) => {
    setSectorManually(sector);
    setShowSectorSelector(false);
  };

  if (!hasAnalyzed && !isAnalyzing) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>
            {t("firstwin.title", "Pronto para descobrir insights!")}
          </CardTitle>
          <CardDescription>
            {t(
              "firstwin.description",
              "Analise seus dados automaticamente e descubra KPIs relevantes para seu negócio.",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>{parsedData.headers.length} colunas detectadas</p>
            <p>{parsedData.rows.length} linhas de dados</p>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleAnalyze} className="flex-1">
              <TrendingUp className="h-4 w-4 mr-2" />
              {t("firstwin.analyze", "Analisar Dados")}
            </Button>
            {onSkip && (
              <Button variant="outline" onClick={onSkip}>
                {t("common.skip", "Pular")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isAnalyzing) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="py-12 text-center">
          <RefreshCw className="h-8 w-8 mx-auto mb-4 animate-spin text-primary" />
          <p className="text-lg font-medium">Analisando seus dados...</p>
          <p className="text-sm text-muted-foreground">
            Detectando setor e calculando KPIs
          </p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-destructive/20">
        <CardHeader>
          <CardTitle className="text-destructive">
            {t("firstwin.error_title", "Ops!")}
          </CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SectorSelector
            currentSector={data?.sector || null}
            onSelect={handleSectorSelect}
          />
          <div className="flex gap-2">
            <Button onClick={handleAnalyze} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              {t("firstwin.try_again", "Tentar Novamente")}
            </Button>
            {onSkip && (
              <Button variant="ghost" onClick={onSkip}>
                {t("common.skip", "Pular")}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (data) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-2 border-green-500/30">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`h-3 w-3 rounded-full ${SECTOR_COLORS[data.sector!]}`}
              />
              <CardTitle>{SECTOR_LABELS[data.sector!]}</CardTitle>
              <Badge variant="outline" className="ml-2">
                {Math.round(data.confidence * 100)}% confiança
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSectorSelector(!showSectorSelector)}
            >
              <Building2 className="h-4 w-4" />
            </Button>
          </div>
          {showSectorSelector && (
            <SectorSelector
              currentSector={data.sector}
              onSelect={handleSectorSelect}
            />
          )}
          <CardDescription>
            {t(
              "firstwin.insights_found",
              "Insights encontrados a partir dos seus dados",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.insights.length > 0 && (
            <div className="space-y-2">
              {data.insights.map((insight, index) => (
                <div key={index} className="text-sm p-2 bg-muted/50 rounded">
                  {insight}
                </div>
              ))}
            </div>
          )}

          {data.suggestedKPIs.length > 0 ? (
            <div className="space-y-2">
              <p className="text-sm font-medium">
                {t("firstwin.kpis", "KPIs Calculados")}
              </p>
              {data.suggestedKPIs.slice(0, 5).map((kpi) => (
                <KPICard key={kpi.code} kpi={kpi} />
              ))}
              {data.suggestedKPIs.length > 5 && (
                <p className="text-xs text-muted-foreground text-center">
                  +{data.suggestedKPIs.length - 5} mais KPIs disponíveis
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              <p>
                Nenhum KPI calculado. Verifique se os dados estão no formato
                correto.
              </p>
            </div>
          )}

          {data.missingFields.length > 0 && (
            <div className="text-xs text-muted-foreground">
              <p>
                Campos necessários não encontrados:{" "}
                {data.missingFields.slice(0, 3).join(", ")}...
              </p>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            {onContinue && (
              <Button onClick={onContinue} className="flex-1">
                {t("firstwin.continue", "Continuar")}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
            <Button variant="outline" onClick={reset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t("firstwin.reanalyze", "Reanalisar")}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default FirstWinCard;
