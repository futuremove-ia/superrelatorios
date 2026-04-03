/**
 * @deprecated Use MetricCard from './metric-card' instead
 *
 * This component is maintained for backward compatibility.
 * All new implementations should use the unified MetricCard component.
 */

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface QuickStatsCardProps {
  icon: LucideIcon;
  label: string;
  value: number | string;
  unit?: string;
  trend?: {
    direction: "up" | "down" | "stable";
    value: number;
  };
  color?: "blue" | "emerald" | "amber" | "red" | "purple" | "pink" | "gray";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  formatValue?: (value: number | string) => string;
}

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    border: "border-l-blue-500",
  },
  emerald: {
    bg: "bg-emerald-100",
    icon: "text-emerald-600",
    border: "border-l-emerald-500",
  },
  amber: {
    bg: "bg-amber-100",
    icon: "text-amber-600",
    border: "border-l-amber-500",
  },
  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
    border: "border-l-red-500",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
    border: "border-l-purple-500",
  },
  pink: {
    bg: "bg-pink-100",
    icon: "text-pink-600",
    border: "border-l-pink-500",
  },
  gray: {
    bg: "bg-gray-100",
    icon: "text-gray-600",
    border: "border-l-gray-400",
  },
};

const sizeClasses = {
  sm: {
    iconWrapper: "w-8 h-8",
    icon: "w-4 h-4",
    value: "text-lg",
    label: "text-xs",
  },
  md: {
    iconWrapper: "w-10 h-10",
    icon: "w-5 h-5",
    value: "text-xl",
    label: "text-sm",
  },
  lg: {
    iconWrapper: "w-12 h-12",
    icon: "w-6 h-6",
    value: "text-2xl",
    label: "text-sm",
  },
};

const getTrendColor = (direction: "up" | "down" | "stable") => {
  switch (direction) {
    case "up":
      return "text-emerald-600";
    case "down":
      return "text-red-600";
    default:
      return "text-muted-foreground";
  }
};

const formatDefaultValue = (value: number | string): string => {
  if (typeof value !== "number") return String(value);
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toLocaleString("pt-BR");
};

export function QuickStatsCard({
  icon: Icon,
  label,
  value,
  unit,
  trend,
  color = "blue",
  size = "md",
  isLoading = false,
  className,
  formatValue = formatDefaultValue,
}: QuickStatsCardProps) {
  const colors = colorClasses[color];
  const sizes = sizeClasses[size];
  const formattedValue = formatValue(value);

  if (isLoading) {
    return (
      <Card className={cn("border-l-4", colors.border, className)}>
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <Skeleton className={cn("rounded-lg", sizes.iconWrapper)} />
            <div className="space-y-1.5">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "border-l-4 transition-all hover:shadow-md",
        colors.border,
        className,
      )}
    >
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "rounded-lg flex items-center justify-center",
              colors.bg,
              sizes.iconWrapper,
            )}
          >
            <Icon className={cn(colors.icon, sizes.icon)} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-1">
              <span className={cn("font-bold truncate", sizes.value)}>
                {formattedValue}
              </span>
              {unit && (
                <span className="text-sm text-muted-foreground">{unit}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn("text-muted-foreground truncate", sizes.label)}
              >
                {label}
              </span>
              {trend && (
                <span
                  className={cn(
                    "text-xs font-medium",
                    getTrendColor(trend.direction),
                  )}
                >
                  {trend.direction === "up"
                    ? "+"
                    : trend.direction === "down"
                      ? "-"
                      : ""}
                  {trend.value.toFixed(1)}%
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickStatsCard;
