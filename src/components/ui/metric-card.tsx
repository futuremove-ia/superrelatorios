import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const metricCardVariants = cva(
  "card-hover border transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-border bg-card",
        success:
          "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20",
        warning:
          "border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20",
        error:
          "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20",
        info: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20",
      },
      size: {
        sm: "p-3",
        md: "p-4 sm:p-5",
        lg: "p-5 sm:p-6",
        xl: "p-6 sm:p-8",
      },
      accent: {
        left: "border-l-4",
        top: "border-t-4",
        none: "border-0",
      },
      status: {
        positive: "border-l-green-500",
        negative: "border-l-red-500",
        neutral: "border-l-yellow-500",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      accent: "left",
      status: "none",
    },
  },
);

export interface MetricCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metricCardVariants> {
  /** Título do KPI */
  title?: string;
  /** Código do KPI (ex: FIN-NPM-001) */
  code?: string;
  /** Valor principal */
  value: string | number;
  /** Unidade (ex: %, R$, dias) */
  unit?: string;
  /** Subtítulo ou descrição */
  subtitle?: string;
  /** Ícone do KPI */
  icon?: LucideIcon;
  /** Cor do domínio para borda/background */
  domainColor?: string;
  /** Dados de tendência */
  trend?: {
    value: number;
    direction: "up" | "down" | "stable";
    label?: string;
  };
  /** Status do KPI */
  status?: "positive" | "negative" | "neutral" | "none";
  /** Formatação customizada do valor */
  formatValue?: (value: string | number) => string;
  /** Loading state */
  isLoading?: boolean;
  /** Se deve mostrar badge de status */
  showStatusBadge?: boolean;
}

const STATUS_CONFIG = {
  positive: {
    label: "Bom",
    badgeVariant: "default" as const,
    icon: TrendingUp,
    iconColor: "text-green-600 dark:text-green-400",
  },
  negative: {
    label: "Atenção",
    badgeVariant: "destructive" as const,
    icon: TrendingDown,
    iconColor: "text-red-600 dark:text-red-400",
  },
  neutral: {
    label: "Neutro",
    badgeVariant: "secondary" as const,
    icon: Minus,
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  none: null,
};

const DOMAIN_COLORS: Record<
  string,
  { bg: string; border: string; icon: string }
> = {
  finance: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-l-emerald-500",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  commercial: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-l-blue-500",
    icon: "text-blue-600 dark:text-blue-400",
  },
  marketing: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-l-purple-500",
    icon: "text-purple-600 dark:text-purple-400",
  },
  operations: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-l-amber-500",
    icon: "text-amber-600 dark:text-amber-400",
  },
  people: {
    bg: "bg-teal-50 dark:bg-teal-950/30",
    border: "border-l-teal-500",
    icon: "text-teal-600 dark:text-teal-400",
  },
  strategy: {
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-l-rose-500",
    icon: "text-rose-600 dark:text-rose-400",
  },
};

const DEFAULT_FORMATTER = (value: string | number): string => {
  if (typeof value !== "number") return String(value);
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
};

export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      className,
      variant,
      size,
      accent,
      status,
      title,
      code,
      value,
      unit,
      subtitle,
      icon: Icon,
      domainColor,
      trend,
      formatValue = DEFAULT_FORMATTER,
      isLoading = false,
      showStatusBadge = false,
      ...props
    },
    ref,
  ) => {
    const domainConfig = domainColor
      ? DOMAIN_COLORS[domainColor.toLowerCase()]
      : null;
    const statusConfig = status !== "none" ? STATUS_CONFIG[status] : null;

    const formattedValue = formatValue(value);

    const getTrendStyles = () => {
      if (!trend) return {};
      switch (trend.direction) {
        case "up":
          return {
            color: "text-green-600 dark:text-green-400",
            bg: "bg-green-100 dark:bg-green-900/50",
          };
        case "down":
          return {
            color: "text-red-600 dark:text-red-400",
            bg: "bg-red-100 dark:bg-red-900/50",
          };
        default:
          return { color: "text-muted-foreground", bg: "bg-muted" };
      }
    };

    const trendStyles = getTrendStyles();
    const TrendIcon = trend
      ? trend.direction === "up"
        ? TrendingUp
        : trend.direction === "down"
          ? TrendingDown
          : Minus
      : null;

    if (isLoading) {
      return (
        <Card
          ref={ref}
          className={cn(
            metricCardVariants({ variant, size, accent, status }),
            className,
          )}
        >
          <CardContent className={cn("p-4", size === "lg" && "p-6")}>
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-7 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card
        ref={ref}
        className={cn(
          metricCardVariants({ variant, size, accent, status }),
          domainConfig?.bg,
          domainConfig?.border,
          className,
        )}
        {...props}
      >
        <CardContent
          className={cn("p-4", size === "lg" && "p-6", size === "xl" && "p-8")}
        >
          <div className="flex items-start justify-between gap-4">
            {/* Esquerda: Ícone + Título */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              {Icon && (
                <div
                  className={cn(
                    "rounded-lg flex items-center justify-center shrink-0",
                    size === "sm" && "h-8 w-8",
                    size === "md" && "h-10 w-10",
                    size === "lg" && "h-12 w-12",
                    size === "xl" && "h-14 w-14",
                    domainConfig?.bg || "bg-primary/10",
                  )}
                >
                  <Icon
                    className={cn(
                      domainConfig?.icon || "text-primary",
                      size === "sm" && "h-4 w-4",
                      size === "md" && "h-5 w-5",
                      size === "lg" && "h-6 w-6",
                      size === "xl" && "h-7 w-7",
                    )}
                    aria-hidden="true"
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                {(title || code) && (
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">
                    {code && <span className="mr-1 opacity-70">{code}</span>}
                    {title}
                  </p>
                )}

                <div className="flex items-baseline gap-1 mt-1 flex-wrap">
                  <span
                    className={cn(
                      "font-bold text-foreground font-mono tabular-nums tracking-tight",
                      size === "sm" && "text-xl",
                      size === "md" && "text-2xl",
                      size === "lg" && "text-3xl",
                      size === "xl" && "text-4xl",
                    )}
                    data-kpi="true"
                  >
                    {formattedValue}
                  </span>
                  {unit && (
                    <span className="text-sm text-muted-foreground font-medium">
                      {unit}
                    </span>
                  )}
                </div>

                {subtitle && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Direita: Badge + Trend */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              {showStatusBadge && statusConfig && (
                <Badge variant={statusConfig.badgeVariant} className="text-xs">
                  {statusConfig.label}
                </Badge>
              )}

              {trend && TrendIcon && (
                <div
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-2 py-1",
                    trendStyles.bg,
                  )}
                >
                  <TrendIcon
                    className={cn("h-3 w-3 sm:h-4 sm:w-4", trendStyles.color)}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "text-xs font-semibold font-mono tabular-nums",
                      trendStyles.color,
                    )}
                  >
                    {trend.direction === "up"
                      ? "+"
                      : trend.direction === "down"
                        ? "-"
                        : ""}
                    {Math.abs(trend.value)}%
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Trend label opcional */}
          {trend?.label && (
            <p className="text-xs text-muted-foreground mt-3 border-t border-border/50 pt-3">
              {trend.label}
            </p>
          )}
        </CardContent>
      </Card>
    );
  },
);

MetricCard.displayName = "MetricCard";

/** Componente de grid para múltiplos MetricCards */
interface MetricCardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 6;
  gap?: "sm" | "md" | "lg";
}

export const MetricCardGrid = React.forwardRef<
  HTMLDivElement,
  MetricCardGridProps
>(({ className, columns = 4, gap = "md", children, ...props }, ref) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  const gapSizes = {
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
  };

  return (
    <div
      ref={ref}
      className={cn("grid", gridCols[columns], gapSizes[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
});

MetricCardGrid.displayName = "MetricCardGrid";

export { metricCardVariants };
