import {
  AlertLevel,
  AlertCategory,
  AlertThreshold,
  AlertEntity,
  AlertTriggerResult,
  AlertSummary,
  CreateAlertOptions,
  DEFAULT_THRESHOLDS,
} from "@/types/alert";
import { supabase } from "@/lib/supabase";

export interface KPIValue {
  kpiCode: string;
  value: number;
  unit?: string;
  period?: string;
}

export interface AlertThresholdsConfig {
  organizationId: string;
  customThresholds?: Record<string, AlertThreshold>;
  useDefaults?: boolean;
}

export class AlertThresholdService {
  private thresholds: Map<string, AlertThreshold>;

  constructor(config: AlertThresholdsConfig) {
    this.thresholds = new Map();

    const defaults = config.useDefaults !== false ? DEFAULT_THRESHOLDS : {};
    const custom = config.customThresholds || {};

    for (const [key, threshold] of Object.entries({ ...defaults, ...custom })) {
      this.thresholds.set(key, threshold);
    }
  }

  evaluateKPI(kpiValue: KPIValue): AlertTriggerResult {
    const threshold = this.thresholds.get(kpiValue.kpiCode);

    if (!threshold || !threshold.enabled) {
      return {
        triggered: false,
        message: `KPI ${kpiValue.kpiCode} não tem threshold configurado ou está desabilitado`,
      };
    }

    const { operator, critical, warning, info, secondaryThreshold } = threshold;
    const value = kpiValue.value;

    let triggered = false;
    let level: AlertLevel | undefined;
    let message = "";

    const checkCondition = (
      op: string,
      val: number,
      target: number,
    ): boolean => {
      switch (op) {
        case "above":
          return val > target;
        case "below":
          return val < target;
        case "equals":
          return val === target;
        case "between":
          return secondaryThreshold
            ? val >= target && val <= secondaryThreshold
            : false;
        default:
          return false;
      }
    };

    if (checkCondition(operator, value, critical)) {
      triggered = true;
      level = "critical";
      message = `${kpiValue.kpiCode} está em nível CRÍTICO: ${value} (crítico: ${critical})`;
    } else if (checkCondition(operator, value, warning)) {
      triggered = true;
      level = "warning";
      message = `${kpiValue.kpiCode} está em nível de ALERTA: ${value} (alerta: ${warning})`;
    } else if (info && checkCondition(operator, value, info)) {
      triggered = true;
      level = "info";
      message = `${kpiValue.kpiCode} requer atenção: ${value} (info: ${info})`;
    }

    if (!triggered) {
      return {
        triggered: false,
        message: `${kpiValue.kpiCode} está dentro dos parâmetros: ${value}`,
      };
    }

    const alert = this.createAlertEntity(kpiValue, level, threshold);

    return {
      triggered: true,
      level,
      alert,
      message,
    };
  }

  evaluateMultipleKPIs(kpis: KPIValue[]): AlertTriggerResult[] {
    return kpis.map((kpi) => this.evaluateKPI(kpi));
  }

  private createAlertEntity(
    kpi: KPIValue,
    level: AlertLevel,
    threshold: AlertThreshold,
  ): AlertEntity {
    const category = this.getCategoryForKPI(kpi.kpiCode);
    const { title, description, recommendation } = this.getAlertContent(
      kpi,
      level,
      threshold,
    );

    return {
      id: crypto.randomUUID(),
      organizationId: "",
      kpiCode: kpi.kpiCode,
      kpiName: kpi.kpiCode,
      level,
      status: "active",
      title,
      description,
      recommendation,
      currentValue: kpi.value,
      threshold: threshold.critical,
      triggeredAt: new Date(),
      notificationSent: false,
      category,
    };
  }

  private getCategoryForKPI(kpiCode: string): AlertCategory {
    const categories: Record<string, AlertCategory> = {
      netProfitMargin: "profitability",
      grossMargin: "profitability",
      ebitdaMargin: "profitability",
      operatingMargin: "profitability",
      currentRatio: "liquidity",
      quickRatio: "liquidity",
      cashRatio: "liquidity",
      cashRunway: "liquidity",
      debtToEquity: "solvency",
      debtRatio: "solvency",
      interestCoverage: "solvency",
      accountsReceivableDays: "efficiency",
      accountsPayableDays: "efficiency",
      inventoryTurnover: "efficiency",
      assetTurnover: "efficiency",
      customerChurnRate: "growth",
      employeeTurnoverRate: "growth",
      revenueGrowth: "growth",
    };

    return categories[kpiCode] || "custom";
  }

  private getAlertContent(
    kpi: KPIValue,
    level: AlertLevel,
    threshold: AlertThreshold,
  ): { title: string; description: string; recommendation: string } {
    const kpiName = this.formatKPIName(kpi.kpiCode);

    const contentByLevel: Record<
      AlertLevel,
      Record<
        string,
        { title: string; description: string; recommendation: string }
      >
    > = {
      critical: {
        default: {
          title: `🚨 ${kpiName} em NÍVEL CRÍTICO`,
          description: `O valor atual (${kpi.value}) está muito abaixo do aceitável (${threshold.critical}). Ação imediata necessária.`,
          recommendation:
            "Revise urgentemente este indicador e tome ações corretivas imediatas.",
        },
      },
      warning: {
        default: {
          title: `⚠️ ${kpiName} em NÍVEL DE ALERTA`,
          description: `O valor atual (${kpi.value}) está abaixo do ideal (${threshold.warning}). Monitore de perto.`,
          recommendation:
            "Analise as causas e tome ações preventivas antes que piore.",
        },
      },
      info: {
        default: {
          title: `ℹ️ ${kpiName} requer ATENÇÃO`,
          description: `O valor atual (${kpi.value}) está próximo do limite (${threshold.info}). Considere ações preventivas.`,
          recommendation: "Mantenha monitoramento e considere otimizações.",
        },
      },
    };

    return contentByLevel[level].default;
  }

  private formatKPIName(kpiCode: string): string {
    return kpiCode
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  }

  getThreshold(kpiCode: string): AlertThreshold | undefined {
    return this.thresholds.get(kpiCode);
  }

  setThreshold(kpiCode: string, threshold: AlertThreshold): void {
    this.thresholds.set(kpiCode, threshold);
  }

  disableThreshold(kpiCode: string): void {
    const threshold = this.thresholds.get(kpiCode);
    if (threshold) {
      this.thresholds.set(kpiCode, { ...threshold, enabled: false });
    }
  }

  enableThreshold(kpiCode: string): void {
    const threshold = this.thresholds.get(kpiCode);
    if (threshold) {
      this.thresholds.set(kpiCode, { ...threshold, enabled: true });
    }
  }

  getAllThresholds(): AlertThreshold[] {
    return Array.from(this.thresholds.values());
  }

  getEnabledThresholds(): AlertThreshold[] {
    return this.getAllThresholds().filter((t) => t.enabled);
  }
}

export function createAlertThresholdService(
  organizationId: string,
  customThresholds?: Record<string, AlertThreshold>,
): AlertThresholdService {
  return new AlertThresholdService({
    organizationId,
    customThresholds,
    useDefaults: true,
  });
}

export function evaluateKPIsForAlerts(
  organizationId: string,
  kpis: KPIValue[],
  customThresholds?: Record<string, AlertThreshold>,
): AlertTriggerResult[] {
  const service = createAlertThresholdService(organizationId, customThresholds);
  return service.evaluateMultipleKPIs(kpis);
}
