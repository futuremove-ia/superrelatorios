/**
 * @deprecated Use MetricCard from './metric-card' instead
 *
 * This component is maintained for backward compatibility.
 * All new implementations should use the unified MetricCard component.
 */

"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type KPIStatus = "positive" | "negative" | "neutral";

interface KPIStatusCardProps {
  code?: string;
  title: string;
  value: string | number;
  unit?: string;
  status?: KPIStatus;
  trend?: {
    value: number;
    isPositive?: boolean;
  };
  className?: string;
}

const STATUS_STYLES = {
  positive: {
    badge: "badge-success",
    border: "border-green-200 dark:border-green-800",
    bg: "bg-green-50 dark:bg-green-950/20",
    text: "text-green-700 dark:text-green-300",
  },
  negative: {
    badge: "badge-error",
    border: "border-red-200 dark:border-red-800",
    bg: "bg-red-50 dark:bg-red-950/20",
    text: "text-red-700 dark:text-red-300",
  },
  neutral: {
    badge: "badge-warning",
    border: "border-yellow-200 dark:border-yellow-800",
    bg: "bg-yellow-50 dark:bg-yellow-950/20",
    text: "text-yellow-700 dark:text-yellow-300",
  },
};

export function KPIStatusCard({
  code,
  title,
  value,
  unit,
  status = "neutral",
  trend,
  className,
}: KPIStatusCardProps) {
  const styles = STATUS_STYLES[status];

  return (
    <Card className={cn("card-hover", styles.border, className)}>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">
              {code && <span className="mr-1 opacity-70">{code}</span>}
              {title}
            </p>
            {status !== "neutral" && (
              <Badge className={cn("text-xs", styles.badge)}>
                {status === "positive"
                  ? "Bom"
                  : status === "negative"
                    ? "Atenção"
                    : "Neutro"}
              </Badge>
            )}
          </div>

          <div className="flex items-baseline gap-1">
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {unit && (
              <span className="text-sm text-muted-foreground">{unit}</span>
            )}
          </div>

          {trend && (
            <div className="flex items-center gap-1">
              {trend.value > 0 ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : trend.value < 0 ? (
                <TrendingDown className="h-3 w-3 text-red-600" />
              ) : (
                <Minus className="h-3 w-3 text-muted-foreground" />
              )}
              <span
                className={cn(
                  "text-xs",
                  trend.value > 0 && "text-green-600",
                  trend.value < 0 && "text-red-600",
                  trend.value === 0 && "text-muted-foreground",
                )}
              >
                {trend.value > 0 ? "+" : ""}
                {trend.value}%
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
