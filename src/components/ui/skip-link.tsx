import * as React from "react";
import { cn } from "@/lib/utils";

interface SkipLinkProps {
  mainId?: string;
  className?: string;
  children?: React.ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  mainId = "main-content",
  className,
  children,
}) => {
  return (
    <a
      href={`#${mainId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2",
        "focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transition-all duration-200 font-medium text-sm",
        className,
      )}
    >
      {children || "Pular para conteúdo principal"}
    </a>
  );
};

interface SkipLinksProps {
  links?: Array<{ href: string; label: string }>;
  className?: string;
}

export const SkipLinks: React.FC<SkipLinksProps> = ({
  links = [
    { href: "#main-content", label: "Conteúdo principal" },
    { href: "#sidebar", label: "Menu lateral" },
    { href: "#search", label: "Busca" },
  ],
  className,
}) => {
  return (
    <div
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50",
        "focus:w-full focus:bg-background focus:border-b focus:py-2 focus:px-4",
        "flex gap-4 items-center",
        className,
      )}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:rounded"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
