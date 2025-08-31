import { cn } from "@/lib/utils";

interface BrandNameProps {
  variant?: "default" | "on-blue" | "on-dark" | "header";
  className?: string;
}

const BrandName = ({ variant = "default", className }: BrandNameProps) => {
  const baseClasses = "font-heading";
  
  if (variant === "on-blue") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="text-primary-dark">Super</span>
        <span className="font-bold text-white">Relatórios</span>
      </span>
    );
  }
  
  if (variant === "on-dark") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="text-white">Super</span>
        <span className="font-bold text-primary">Relatórios</span>
      </span>
    );
  }
  
  if (variant === "header") {
    return (
      <span className={cn(baseClasses, "text-xl", className)}>
        <span className="text-black">Super</span>
        <span className="font-bold text-primary">Relatórios</span>
      </span>
    );
  }
  
  return (
    <span className={cn(baseClasses, className)}>
      <span className="text-black">Super</span>
      <span className="font-bold text-primary">Relatórios</span>
    </span>
  );
};

export default BrandName;