export type AlertLevel = "critical" | "warning" | "info";

export type AlertCategory =
  | "liquidity" // Problemas de caixa/saldo
  | "profitability" // Problemas de margem/lucro
  | "solvency" // Problemas de endividamento
  | "efficiency" // Problemas de operação
  | "growth" // Problemas de crescimento
  | "custom"; // Alerta personalizado

export type AlertStatus = "active" | "acknowledged" | "resolved" | "dismissed";

export interface AlertThreshold {
  kpiCode: string;
  critical: number;
  warning: number;
  info?: number;
  operator: "above" | "below" | "equals" | "between";
  secondaryThreshold?: number;
  enabled: boolean;
}

export interface AlertRule {
  id: string;
  name: string;
  description: string;
  kpiCode: string;
  thresholds: {
    critical: { value: number; operator: "above" | "below" | "equals" };
    warning: { value: number; operator: "above" | "below" | "equals" };
    info?: { value: number; operator: "above" | "below" | "equals" };
  };
  category: AlertCategory;
  enabled: boolean;
  notifyOnTrigger: boolean;
  notifyChannels: NotificationChannel[];
}

export type NotificationChannel =
  | "email"
  | "push"
  | "sms"
  | "in_app"
  | "webhook";

export interface AlertNotification {
  id: string;
  alertId: string;
  organizationId: string;
  channel: NotificationChannel;
  recipient: string;
  sentAt?: Date;
  deliveredAt?: Date;
  readAt?: Date;
  failedAt?: Date;
  errorMessage?: string;
}

export interface AlertEntity {
  id: string;
  organizationId: string;
  kpiCode: string;
  kpiName: string;
  level: AlertLevel;
  status: AlertStatus;
  title: string;
  description: string;
  recommendation: string;
  currentValue: number;
  threshold: number;
  triggeredAt: Date;
  acknowledgedAt?: Date;
  acknowledgedBy?: string;
  resolvedAt?: Date;
  resolvedBy?: string;
  dismissedAt?: Date;
  dismissedBy?: string;
  dismissedReason?: string;
  notificationSent: boolean;
  category: AlertCategory;
  metadata?: Record<string, unknown>;
}

export interface AlertTriggerResult {
  triggered: boolean;
  level?: AlertLevel;
  previousLevel?: AlertLevel;
  alert?: AlertEntity;
  message: string;
}

export interface AlertSummary {
  total: number;
  critical: number;
  warning: number;
  info: number;
  active: number;
  acknowledged: number;
  resolved: number;
}

export interface AlertFilterOptions {
  organizationId: string;
  level?: AlertLevel[];
  status?: AlertStatus[];
  category?: AlertCategory[];
  kpiCode?: string[];
  dateFrom?: Date;
  dateTo?: Date;
  limit?: number;
  offset?: number;
}

export interface AlertStatistics {
  summary: AlertSummary;
  byCategory: Record<AlertCategory, number>;
  byKPI: Record<string, number>;
  trend: {
    last7Days: AlertSummary;
    last30Days: AlertSummary;
    last90Days: AlertSummary;
  };
  resolutionTime: {
    average: number;
    critical: number;
    warning: number;
  };
}

export interface CreateAlertOptions {
  organizationId: string;
  kpiCode: string;
  kpiName: string;
  level: AlertLevel;
  title: string;
  description: string;
  recommendation: string;
  currentValue: number;
  threshold: number;
  category: AlertCategory;
  metadata?: Record<string, unknown>;
}

export interface UpdateAlertOptions {
  status?: AlertStatus;
  acknowledgedBy?: string;
  resolvedBy?: string;
  dismissedBy?: string;
  dismissedReason?: string;
}

export interface AlertNotificationPreferences {
  userId: string;
  organizationId: string;
  channels: {
    email: boolean;
    push: boolean;
    sms: boolean;
    in_app: boolean;
    webhook: boolean;
  };
  thresholds: {
    critical: boolean;
    warning: boolean;
    info: boolean;
  };
  quietHours?: {
    enabled: boolean;
    start: string;
    end: string;
    timezone: string;
  };
  digest?: {
    enabled: boolean;
    frequency: "realtime" | "hourly" | "daily" | "weekly";
    minimumLevel: AlertLevel;
  };
}

export const DEFAULT_THRESHOLDS: Record<string, AlertThreshold> = {
  netProfitMargin: {
    kpiCode: "netProfitMargin",
    critical: 0,
    warning: 5,
    info: 10,
    operator: "below",
    enabled: true,
  },
  grossMargin: {
    kpiCode: "grossMargin",
    critical: 10,
    warning: 20,
    info: 30,
    operator: "below",
    enabled: true,
  },
  ebitdaMargin: {
    kpiCode: "ebitdaMargin",
    critical: 0,
    warning: 10,
    info: 15,
    operator: "below",
    enabled: true,
  },
  currentRatio: {
    kpiCode: "currentRatio",
    critical: 0.5,
    warning: 1,
    info: 1.5,
    operator: "below",
    enabled: true,
  },
  quickRatio: {
    kpiCode: "quickRatio",
    critical: 0.3,
    warning: 0.8,
    info: 1,
    operator: "below",
    enabled: true,
  },
  debtToEquity: {
    kpiCode: "debtToEquity",
    critical: 3,
    warning: 2,
    info: 1,
    operator: "above",
    enabled: true,
  },
  cashRunway: {
    kpiCode: "cashRunway",
    critical: 1,
    warning: 3,
    info: 6,
    operator: "below",
    enabled: true,
  },
  accountsReceivableDays: {
    kpiCode: "accountsReceivableDays",
    critical: 90,
    warning: 60,
    info: 45,
    operator: "above",
    enabled: true,
  },
  accountsPayableDays: {
    kpiCode: "accountsPayableDays",
    critical: 90,
    warning: 60,
    info: 45,
    operator: "above",
    enabled: true,
  },
  inventoryTurnover: {
    kpiCode: "inventoryTurnover",
    critical: 2,
    warning: 4,
    info: 6,
    operator: "below",
    enabled: true,
  },
  customerChurnRate: {
    kpiCode: "customerChurnRate",
    critical: 15,
    warning: 10,
    info: 5,
    operator: "above",
    enabled: true,
  },
  employeeTurnoverRate: {
    kpiCode: "employeeTurnoverRate",
    critical: 20,
    warning: 15,
    info: 10,
    operator: "above",
    enabled: true,
  },
};
