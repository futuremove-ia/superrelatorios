import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LogoIcon = ({ size = "md", className }: LogoIconProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("bg-white rounded-xl flex items-center justify-center shadow-lg p-2", sizeClasses[size], className)}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bar chart with 3 bars */}
        <rect x="4" y="12" width="4" height="8" fill="hsl(220, 91%, 51%)" rx="1" />
        <rect x="10" y="16" width="4" height="4" fill="hsl(220, 91%, 20%)" rx="1" />
        <rect x="16" y="8" width="4" height="12" fill="hsl(142, 76%, 36%)" rx="1" />
      </svg>
    </div>
  );
};

export default LogoIcon;