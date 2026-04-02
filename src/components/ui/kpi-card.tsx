import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { domainColors, type DomainType } from "@/utils/domainColors";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
    label?: string;
  };
  subtitle?: string;
  variant?: "default" | "success" | "warning" | "info";
  domain?: DomainType; // NOVO: Cor de domínio
  className?: string;
  role?: string;
  "aria-label"?: string;
  style?: React.CSSProperties;
}

const KPICard = ({
  title,
  value,
  icon: Icon,
  trend,
  subtitle,
  variant = "default",
  domain,
  className,
  role,
  "aria-label": ariaLabel,
  style,
}: KPICardProps) => {
  const domainColor = domain ? domainColors[domain] : null;

  const getDomainVariantStyles = () => {
    if (domainColor) {
      return {
        borderColor: `${domainColor.main}20`,
        backgroundColor: domainColor.bg,
      };
    }
    switch (variant) {
      case "success":
        return { borderColor: "#86EFAC", backgroundColor: "#F0FDF4" };
      case "warning":
        return { borderColor: "#FDE047", backgroundColor: "#FEFCE8" };
      case "info":
        return { borderColor: "#93C5FD", backgroundColor: "#EFF6FF" };
      default:
        return {};
    }
  };

  const getDomainIconColor = () => {
    if (domainColor) {
      return domainColor.main;
    }
    switch (variant) {
      case "success":
        return "#10B981";
      case "warning":
        return "#F59E0B";
      case "info":
        return "#3B82F6";
      default:
        return "currentColor";
    }
  };

  const variantStyles = getDomainVariantStyles();
  const iconColor = getDomainIconColor();

  // Border accent for domain
  const borderAccent = domainColor ? `border-l-4` : "";

  return (
    <Card
      className={cn(
        "card-hover touch-target border",
        !domainColor && getDomainVariantStyles(),
        borderAccent,
        className,
      )}
      style={{
        ...style,
        ...variantStyles,
        ...(domainColor && { borderLeftColor: domainColor.main }),
      }}
      role={role}
      aria-label={ariaLabel}
    >
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon
                className={cn("h-4 w-4 sm:h-5 sm:w-5")}
                style={{ color: iconColor }}
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                {title}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">
                {value}
              </p>
              {subtitle && (
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {trend && (
            <div className="flex items-center gap-1">
              {trend.isPositive ? (
                <TrendingUp
                  className="h-3 w-3 sm:h-4 sm:w-4 text-green-600"
                  aria-hidden="true"
                />
              ) : (
                <TrendingDown
                  className="h-3 w-3 sm:h-4 sm:w-4 text-red-600"
                  aria-hidden="true"
                />
              )}
              <Badge
                variant="secondary"
                className={cn(
                  "text-xs",
                  trend.isPositive
                    ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
                )}
                aria-label={`Tendência ${trend.isPositive ? "positiva" : "negativa"} de ${Math.abs(trend.value)}%`}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </Badge>
            </div>
          )}
        </div>

        {trend?.label && (
          <p className="text-xs text-muted-foreground mt-2">{trend.label}</p>
        )}
      </CardContent>
    </Card>
  );
};

export { KPICard };
