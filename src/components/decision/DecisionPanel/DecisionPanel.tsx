import React from "react";
import { DashboardCard as Card } from "../../ui/custom/DashboardCard";
import { ActionButton as Button } from "../../ui/custom/ActionButton";
import { cn } from "@/lib/utils";

export interface PrioritySituation {
  id: string;
  title: string;
  description: string;
  urgency: "critical" | "urgent" | "important";
  impact: string;
  timeframe: string;
  technicalTerm: string;
  actionableTranslation: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  expectedImpact: string;
  complexity: "low" | "medium" | "high";
  action: string;
  onClick: () => void;
}

export interface SupportingMetric {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  trend: "up" | "down" | "stable";
  trendValue?: string;
  format: "currency" | "percentage" | "number";
  technicalTerm: string;
  actionableTranslation: string;
}

export interface DecisionPanelProps {
  situation: PrioritySituation;
  recommendations: Recommendation[];
  supportingData: SupportingMetric[];
  onExecuteAction: (actionId: string) => void;
  className?: string;
}

export const DecisionPanel: React.FC<DecisionPanelProps> = ({
  situation,
  recommendations,
  supportingData,
  onExecuteAction,
  className,
}) => {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col gap-6 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:gap-8 md:p-6",
        className,
      )}
      role="main"
      aria-label="Painel de Decisão"
      tabIndex={-1}
    >
      {/* Priority Situation Section */}
      <section className="mb-8" aria-labelledby="situation-heading">
        <h2
          id="situation-heading"
          className="mb-4 border-b-2 border-primary pb-2 font-sans text-xl font-semibold text-foreground md:text-2xl"
        >
          Situação Prioritária
        </h2>
        <Card variant="decision" priority={situation.urgency}>
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-0">
            <h3 className="m-0 flex-1 font-sans text-lg font-semibold text-foreground md:text-xl">
              {situation.title}
            </h3>
            <div className="flex flex-row items-start gap-2 md:flex-col md:items-end">
              <span
                className={cn(
                  "rounded-md px-2 py-1 font-sans text-xs font-semibold uppercase tracking-wider",
                  situation.urgency === "critical" &&
                    "border border-red-200 bg-red-50 text-red-600",
                  situation.urgency === "urgent" &&
                    "border border-amber-200 bg-amber-50 text-amber-600",
                  situation.urgency === "important" &&
                    "border border-amber-500 bg-amber-500 text-white",
                )}
              >
                {situation.urgency === "critical"
                  ? "Crítico"
                  : situation.urgency === "urgent"
                    ? "Urgente"
                    : "Importante"}
              </span>
              <span className="rounded-md bg-muted/50 px-2 py-1 font-mono text-xs text-muted-foreground">
                {situation.timeframe}
              </span>
            </div>
          </div>

          <p className="mb-4 font-sans text-base leading-relaxed text-muted-foreground">
            {situation.description}
          </p>

          <div className="mb-4 rounded-md border-l-4 border-primary bg-muted/30 p-3 text-sm">
            <strong className="text-foreground">Impacto:</strong>{" "}
            <span className="text-muted-foreground">{situation.impact}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-md border border-border bg-gradient-to-br from-muted/30 to-background p-4 md:grid-cols-2 md:gap-6">
            <div className="rounded-sm border border-border bg-muted/50 p-2 font-mono text-sm text-muted-foreground">
              <strong className="text-foreground">Termo Técnico:</strong>{" "}
              {situation.technicalTerm}
            </div>
            <div className="rounded-sm bg-amber-500 p-2 font-sans text-sm font-medium text-white">
              <strong>Tradução Acionável:</strong>{" "}
              {situation.actionableTranslation}
            </div>
          </div>
        </Card>
      </section>

      {/* Recommendations Section */}
      <section className="mb-8" aria-labelledby="recommendations-heading">
        <h2
          id="recommendations-heading"
          className="mb-4 border-b-2 border-primary pb-2 font-sans text-xl font-semibold text-foreground md:text-2xl"
        >
          Ações Recomendadas
        </h2>
        <div className="flex flex-col gap-4">
          {recommendations.map((recommendation) => (
            <Card
              key={recommendation.id}
              variant="decision"
              className="border-l-4 border-amber-500 bg-gradient-to-br from-amber-50/50 to-background dark:from-amber-950/20"
            >
              <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-0">
                <h3 className="m-0 flex-1 font-sans text-base font-semibold text-foreground md:text-lg">
                  {recommendation.title}
                </h3>
                <span
                  className={cn(
                    "rounded-md px-2 py-1 font-sans text-xs font-medium uppercase tracking-wider",
                    recommendation.complexity === "low" &&
                      "border border-green-200 bg-green-50 text-green-600",
                    recommendation.complexity === "medium" &&
                      "border border-amber-200 bg-amber-50 text-amber-600",
                    recommendation.complexity === "high" &&
                      "border border-red-200 bg-red-50 text-red-600",
                  )}
                >
                  {recommendation.complexity === "low"
                    ? "Baixa"
                    : recommendation.complexity === "medium"
                      ? "Média"
                      : "Alta"}{" "}
                  complexidade
                </span>
              </div>

              <p className="mb-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {recommendation.description}
              </p>

              <div className="mb-4 rounded-md border-l-[3px] border-primary bg-muted/30 p-3 text-sm">
                <strong className="text-foreground">Impacto esperado:</strong>{" "}
                <span className="text-muted-foreground">
                  {recommendation.expectedImpact}
                </span>
              </div>

              <div className="flex justify-end border-t border-border pt-3">
                <Button
                  variant="primary"
                  action={recommendation.action}
                  onClick={() => {
                    recommendation.onClick();
                    onExecuteAction(recommendation.id);
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Supporting Data Section */}
      <section className="mb-8" aria-labelledby="data-heading">
        <h2
          id="data-heading"
          className="mb-4 border-b-2 border-primary pb-2 font-sans text-xl font-semibold text-foreground md:text-2xl"
        >
          Dados de Suporte
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:gap-3">
          {supportingData.map((metric) => (
            <Card
              key={metric.id}
              variant="metric"
              className="border-l-[3px] border-primary bg-muted/30 p-3 md:p-4"
            >
              <div className="mb-3">
                <div className="flex flex-col gap-1">
                  <div className="rounded-sm border border-border bg-muted/50 p-1 font-mono text-xs text-muted-foreground">
                    {metric.technicalTerm}
                  </div>
                  <div className="font-sans text-sm font-medium text-foreground">
                    {metric.actionableTranslation}
                  </div>
                </div>
              </div>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="font-sans text-sm font-normal text-muted-foreground">
                    {metric.unit}
                  </span>
                )}
              </div>

              {metric.trend && (
                <div
                  className={cn(
                    "flex items-center gap-1 font-mono text-sm font-medium",
                    metric.trend === "up" && "text-green-500",
                    metric.trend === "down" && "text-red-500",
                    metric.trend === "stable" && "text-muted-foreground",
                  )}
                >
                  <span className="text-base font-bold">
                    {metric.trend === "up"
                      ? "↑"
                      : metric.trend === "down"
                        ? "↓"
                        : "→"}
                  </span>
                  {metric.trendValue && (
                    <span className="text-xs opacity-80">
                      {metric.trendValue}
                    </span>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DecisionPanel;
