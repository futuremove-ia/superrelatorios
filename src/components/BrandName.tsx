import { cn } from "@/lib/utils";

interface BrandNameProps {
  variant?: "default" | "white-chip" | "header";
  className?: string;
}

const BrandName = ({ variant = "default", className }: BrandNameProps) => {
  const baseClasses = "font-heading";
  
  if (variant === "white-chip") {
    return (
      <span className={cn(baseClasses, className)}>
        <span className="bg-white px-2 py-1 rounded-md">
          <span className="text-primary-dark">Super</span>
          <span className="font-bold text-primary">Relatórios</span>
        </span>
      </span>
    );
  }
  
  if (variant === "header") {
    return (
      <span className={cn(baseClasses, "text-xl", className)}>
        <span className="text-primary-dark">Super</span>
        <span className="font-bold text-primary">Relatórios</span>
      </span>
    );
  }
  
  return (
    <span className={cn(baseClasses, className)}>
      <span className="text-primary-dark">Super</span>
      <span className="font-bold text-primary">Relatórios</span>
    </span>
  );
};

export default BrandName;