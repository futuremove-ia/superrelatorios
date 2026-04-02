import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export function SeverityBadge({ severity }: { severity?: string }) {
  const variant = severity === "critical" ? "destructive" : severity === "high" ? "default" : "secondary";
  const label = severity === "critical" ? "Crítico" : severity === "high" ? "Alto" : severity === "medium" ? "Médio" : "Baixo";
  
  return (
    <Badge variant={variant} className={cn(
      severity === "critical" && "bg-red-500 text-white",
      severity === "high" && "bg-orange-500 text-white",
      severity === "medium" && "bg-yellow-500 text-black",
      severity === "low" && "bg-green-500 text-white"
    )}>
      {label}
    </Badge>
  );
}

export function TypeBadge({ type }: { type?: string }) {
  const typeLabels: Record<string, string> = {
    opportunity: "Oportunidade",
    risk: "Risco",
    challenge: "Desafio",
    alert: "Alerta",
  };
  
  return (
    <Badge variant="outline" className="bg-background/50">
      {typeLabels[type || ""] || type}
    </Badge>
  );
}

export function DomainBadge({ domain, size = "md", variant = "default" }: { 
  domain?: string; 
  size?: "sm" | "md";
  variant?: "default" | "subtle";
}) {
  const domainLabels: Record<string, string> = {
    finance: "Financeiro",
    commercial: "Comercial",
    marketing: "Marketing",
    operations: "Operações",
    people: "Pessoas",
    strategy: "Estratégia",
  };
  
  const domainColors: Record<string, string> = {
    finance: "bg-emerald-100 text-emerald-700 border-emerald-200",
    commercial: "bg-blue-100 text-blue-700 border-blue-200",
    marketing: "bg-pink-100 text-pink-700 border-pink-200",
    operations: "bg-amber-100 text-amber-700 border-amber-200",
    people: "bg-rose-100 text-rose-700 border-rose-200",
    strategy: "bg-purple-100 text-purple-700 border-purple-200",
  };
  
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-2.5 py-1";
  const colorClass = variant === "subtle" 
    ? `${domainColors[domain || ""] || "bg-gray-100 text-gray-700 border-gray-200"}`
    : "bg-background border-input";
  
  return (
    <Badge variant="outline" className={cn(sizeClasses, colorClass)}>
      {domainLabels[domain || ""] || domain}
    </Badge>
  );
}