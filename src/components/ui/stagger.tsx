import * as React from "react";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
  staggerIndex?: number;
}

export const StaggerItem: React.FC<StaggerProps & { index: number }> = ({
  index,
  delay = 0.1,
  direction = "up",
  className,
  children,
}) => {
  const animationClass = {
    up: "animate-stagger-in",
    down: "animate-stagger-in",
    left: "animate-stagger-in-left",
    right: "animate-stagger-in-right",
    scale: "animate-stagger-in-scale",
  }[direction];

  return (
    <div
      className={cn(animationClass, className)}
      style={{ animationDelay: `${index * delay}s`, opacity: 0 }}
    >
      {children}
    </div>
  );
};

export const StaggerContainer: React.FC<StaggerProps> = ({
  children,
  delay = 0.1,
  direction = "up",
  className,
  staggerIndex,
}) => {
  return (
    <div className={cn("stagger-container", className)}>
      {React.Children.map(children, (child, index) => {
        const actualIndex = staggerIndex ?? index;
        const animationClass = {
          up: "animate-stagger-in",
          down: "animate-stagger-in",
          left: "animate-stagger-in-left",
          right: "animate-stagger-in-right",
          scale: "animate-stagger-in-scale",
        }[direction];

        return (
          <div
            key={actualIndex}
            className={cn(animationClass)}
            style={{
              animationDelay: `${actualIndex * delay}s`,
              opacity: 0,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  className,
}) => {
  const transformValue = {
    up: "translateY(10px)",
    down: "translateY(-10px)",
    left: "translateX(-10px)",
    right: "translateX(10px)",
  }[direction];

  return (
    <div
      className={cn("animate-fade-in", className)}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

interface ShimmerProps {
  className?: string;
}

export const Shimmer: React.FC<ShimmerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent bg-[length:200%_100%]",
        className,
      )}
    />
  );
};

interface GlowProps {
  children: React.ReactNode;
  className?: string;
  color?: "blue" | "green" | "yellow" | "red" | "purple";
}

export const GlowPulse: React.FC<GlowProps> = ({
  children,
  className,
  color = "blue",
}) => {
  const colorMap = {
    blue: "rgba(59, 130, 246, 0.25)",
    green: "rgba(16, 185, 129, 0.25)",
    yellow: "rgba(245, 158, 11, 0.25)",
    red: "rgba(239, 68, 68, 0.25)",
    purple: "rgba(139, 92, 246, 0.25)",
  };

  return (
    <div
      className={cn("animate-glow-pulse rounded-lg", className)}
      style={{ boxShadow: `0 0 20px 4px ${colorMap[color]}` }}
    >
      {children}
    </div>
  );
};

interface FloatProps {
  children: React.ReactNode;
  className?: string;
}

export const Float: React.FC<FloatProps> = ({ children, className }) => {
  return <div className={cn("animate-float", className)}>{children}</div>;
};
