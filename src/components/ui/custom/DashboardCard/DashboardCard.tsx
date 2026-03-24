import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardVariants = cva(
  "rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-200 p-4",
  {
    variants: {
      variant: {
        default: "",
        decision:
          "border-l-[4px] border-l-amber-500 bg-gradient-to-br from-background to-muted/50",
        metric: "border-l-[3px] border-l-primary bg-muted/30",
        indicator:
          "border-border/50 bg-background shadow-none hover:shadow-sm hover:border-border",
      },
      priority: {
        critical:
          "border-l-destructive bg-gradient-to-br from-destructive/10 to-background",
        urgent:
          "border-l-orange-500 bg-gradient-to-br from-orange-500/10 to-background",
        important:
          "border-l-amber-500 bg-gradient-to-br from-amber-500/10 to-background",
        high: "border-l-amber-400 bg-gradient-to-br from-amber-400/10 to-background",
        medium:
          "border-l-blue-500 bg-gradient-to-br from-blue-500/10 to-background",
        low: "border-l-emerald-500 bg-gradient-to-br from-emerald-500/10 to-background",
      },
      interactive: {
        true: "cursor-pointer hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  },
);

export interface DashboardCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof cardVariants>, "interactive"> {
  testId?: string;
  onClick?: () => void;
}

export const DashboardCard = React.forwardRef<
  HTMLDivElement,
  DashboardCardProps
>(
  (
    { className, variant, priority, onClick, testId, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            priority,
            interactive: !!onClick,
            className,
          }),
        )}
        onClick={onClick}
        data-testid={testId}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick();
                }
              }
            : undefined
        }
        {...props}
      >
        {children}
      </div>
    );
  },
);

DashboardCard.displayName = "DashboardCard";

export default DashboardCard;
