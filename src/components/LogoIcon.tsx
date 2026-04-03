import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "white";
}

const LogoIcon = ({
  size = "md",
  className,
  variant = "default",
}: LogoIconProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  // Premium Unicorn Palette - refined blues + brand green
  const colors =
    variant === "white"
      ? { blue1: "#60A5FA", blue2: "#DBEAFE", green: "#6EE7B7" } // Light mode on dark bg
      : { blue1: "#2563EB", blue2: "#1E40AF", green: "#059669" }; // Primary + Deep + Emerald

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizeClasses[size], className)}
      aria-hidden="true"
    >
      {/* Bar chart with 3 bars - 2 premium blues + 1 brand green */}
      <rect x="4" y="12" width="4" height="8" fill={colors.blue1} rx="1" />
      <rect x="10" y="16" width="4" height="4" fill={colors.blue2} rx="1" />
      <rect x="16" y="8" width="4" height="12" fill={colors.green} rx="1" />
    </svg>
  );
};

export default LogoIcon;
