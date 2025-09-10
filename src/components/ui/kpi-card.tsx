import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
  className?: string;
}

const KPICard = ({
  title,
  value,
  icon: Icon,
  trend,
  subtitle,
  variant = "default",
  className
}: KPICardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20";
      case "warning":
        return "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20";
      case "info":
        return "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20";
      default:
        return "";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "success":
        return "text-green-600 dark:text-green-400";
      case "warning":
        return "text-yellow-600 dark:text-yellow-400";
      case "info":
        return "text-blue-600 dark:text-blue-400";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={cn(
      "card-hover",
      getVariantStyles(),
      className
    )}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon className={cn("h-4 w-4 sm:h-5 sm:w-5", getIconColor())} />
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
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
              )}
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs",
                  trend.isPositive 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300" 
                    : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                )}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </Badge>
            </div>
          )}
        </div>
        
        {trend?.label && (
          <p className="text-xs text-muted-foreground mt-2">
            {trend.label}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export { KPICard };