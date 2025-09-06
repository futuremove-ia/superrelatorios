import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface PaperProps {
  orientation?: "portrait" | "landscape";
  size?: "a4" | "letter";
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const Paper = forwardRef<HTMLDivElement, PaperProps>(
  ({ orientation = "portrait", size = "a4", children, className, padding = "md" }, ref) => {
    // A4 proportions: 210 × 297 mm = 1:1.414 (portrait) or 1.414:1 (landscape)
    const aspectRatios = {
      a4: {
        portrait: "aspect-[3/4.24]", // Simplified ratio that works well on all screens
        landscape: "aspect-[4.24/3]"
      },
      letter: {
        portrait: "aspect-[3/3.9]", // 8.5 × 11 inches
        landscape: "aspect-[3.9/3]"
      }
    };

    const paddingClasses = {
      none: "",
      sm: "p-2 sm:p-3",
      md: "p-3 sm:p-4 lg:p-6",
      lg: "p-4 sm:p-6 lg:p-8"
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Base paper styles
          "bg-white border-2 shadow-lg rounded-lg overflow-hidden",
          "w-full max-w-full",
          // Responsive aspect ratio (only on md+ screens)
          "md:" + aspectRatios[size][orientation],
          // On mobile, use natural height flow
          "min-h-[400px] sm:min-h-[500px]",
          // Padding
          paddingClasses[padding],
          className
        )}
      >
        <div className="h-full w-full flex flex-col min-h-0">
          {children}
        </div>
      </div>
    );
  }
);

Paper.displayName = "Paper";

export { Paper };