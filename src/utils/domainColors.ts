// Domain Colors Utility
// Unified color system for SuperRelatórios
// Usage: domainColors.finance.main, domainColors.commercial.bg, etc.

export type DomainType =
  | "finance"
  | "commercial"
  | "marketing"
  | "operations"
  | "people";

export const domainConfig: Record<
  DomainType,
  {
    label: string;
    color: {
      main: string;
      light: string;
      bg: string;
    };
    icon: string;
  }
> = {
  finance: {
    label: "Financeiro",
    color: {
      main: "#10B981", // Green 500
      light: "#34D399", // Green 400
      bg: "#ECFDF5", // Green 50
    },
    icon: "DollarSign",
  },
  commercial: {
    label: "Comercial",
    color: {
      main: "#3B82F6", // Blue 500
      light: "#60A5FA", // Blue 400
      bg: "#EFF6FF", // Blue 50
    },
    icon: "TrendingUp",
  },
  marketing: {
    label: "Marketing",
    color: {
      main: "#8B5CF6", // Purple 500
      light: "#A78BFA", // Purple 400
      bg: "#F5F3FF", // Purple 50
    },
    icon: "Target",
  },
  operations: {
    label: "Operações",
    color: {
      main: "#F59E0B", // Amber 500
      light: "#FBBF24", // Amber 400
      bg: "#FFFBEB", // Amber 50
    },
    icon: "Settings",
  },
  people: {
    label: "Gente",
    color: {
      main: "#14B8A6", // Teal 500
      light: "#2DD4BF", // Teal 400
      bg: "#F0FDFA", // Teal 50
    },
    icon: "Users",
  },
};

export const getDomainColor = (
  domain: DomainType,
  variant: "main" | "light" | "bg" = "main",
) => {
  return (
    domainConfig[domain]?.color[variant] ||
    domainConfig.commercial.color[variant]
  );
};

export const getDomainLabel = (domain: DomainType) => {
  return domainConfig[domain]?.label || domain;
};

export const domainColors = {
  finance: {
    main: "#10B981",
    light: "#34D399",
    bg: "#ECFDF5",
  },
  commercial: {
    main: "#3B82F6",
    light: "#60A5FA",
    bg: "#EFF6FF",
  },
  marketing: {
    main: "#8B5CF6",
    light: "#A78BFA",
    bg: "#F5F3FF",
  },
  operations: {
    main: "#F59E0B",
    light: "#FBBF24",
    bg: "#FFFBEB",
  },
  people: {
    main: "#14B8A6",
    light: "#2DD4BF",
    bg: "#F0FDFA",
  },
};

export const semanticColors = {
  positive: "#22C55E",
  negative: "#EF4444",
  warning: "#EAB308",
  neutral: "#737373",
  pending: "#3B82F6",
};

export const getSemanticColor = (
  status: "positive" | "negative" | "warning" | "neutral" | "pending",
) => {
  return semanticColors[status];
};
