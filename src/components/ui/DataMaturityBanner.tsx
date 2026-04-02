"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  Upload,
  FileText,
  BarChart3,
  Sparkles,
} from "lucide-react";
import type { MaturityInfo } from "@/services/relevanceEngine";

interface DataMaturityBannerProps {
  maturity: MaturityInfo;
  dataPoints: number;
  onAddData?: () => void;
  className?: string;
}

const LEVEL_CONFIG = {
  0: {
    icon: Upload,
    color: "text-gray-500",
    bgColor: "bg-gray-50 dark:bg-gray-950/20",
    borderColor: "border-gray-200 dark:border-gray-800",
    progressColor: "bg-gray-400",
    action: "Adicionar primeiro arquivo",
  },
  1: {
    icon: FileText,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    progressColor: "bg-orange-500",
    action: "Adicionar mais dados",
  },
  2: {
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    progressColor: "bg-blue-500",
    action: "Adicionar períodos históricos",
  },
  3: {
    icon: BarChart3,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    progressColor: "bg-green-500",
    action: "Completar KPIs adicionais",
  },
  4: {
    icon: Sparkles,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    progressColor: "bg-purple-500",
    action: "Explorar análises avançadas",
  },
};

export function DataMaturityBanner({
  maturity,
  dataPoints,
  onAddData,
  className,
}: DataMaturityBannerProps) {
  const config = LEVEL_CONFIG[maturity.level];
  const Icon = config.icon;

  const progressValue = Math.min((dataPoints / 50) * 100, 100);

  return (
    <Card
      className={cn(config.bgColor, "border-2", config.borderColor, className)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={cn("h-5 w-5", config.color)} />
            <CardTitle className="text-lg font-semibold">
              Nível {maturity.level}: {maturity.label}
            </CardTitle>
          </div>
          <span className="text-sm text-muted-foreground">
            {dataPoints} {dataPoints === 1 ? "data point" : "data points"}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{maturity.description}</p>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>Progresso para próximo nível</span>
            <span>{Math.round(progressValue)}%</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-sm font-medium">
            <span className="text-muted-foreground">Próximo passo: </span>
            {maturity.nextAction}
          </p>
          {onAddData && (
            <Button size="sm" variant="outline" onClick={onAddData}>
              {config.action}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
