import * as React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const FloatingButton = ({ 
  onClick, 
  icon = <Plus className="h-6 w-6" />, 
  className,
  children = "Novo Relatório"
}: FloatingButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-14 px-6 shadow-lg hover:shadow-xl transition-all duration-200",
        "bg-primary hover:bg-primary-dark text-primary-foreground",
        "rounded-full flex items-center gap-2",
        "animate-scale-in",
        className
      )}
    >
      {icon}
      <span className="hidden sm:inline">{children}</span>
    </Button>
  );
};

export { FloatingButton };