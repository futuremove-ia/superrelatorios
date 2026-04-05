import {
  AlertEntity,
  AlertFilterOptions,
  AlertStatistics,
  AlertSummary,
  UpdateAlertOptions,
  CreateAlertOptions,
  AlertLevel,
  AlertStatus,
  AlertCategory,
} from "@/types/alert";
import { supabase } from "@/lib/supabase";

export class AlertManagementService {
  async getAlerts(options: AlertFilterOptions): Promise<AlertEntity[]> {
    let query = supabase
      .from("alerts")
      .select("*")
      .eq("organization_id", options.organizationId);

    if (options.level?.length) {
      query = query.in("level", options.level);
    }

    if (options.status?.length) {
      query = query.in("status", options.status);
    }

    if (options.category?.length) {
      query = query.in("category", options.category);
    }

    if (options.kpiCode?.length) {
      query = query.in("kpi_code", options.kpiCode);
    }

    if (options.dateFrom) {
      query = query.gte("triggered_at", options.dateFrom.toISOString());
    }

    if (options.dateTo) {
      query = query.lte("triggered_at", options.dateTo.toISOString());
    }

    query = query.order("triggered_at", { ascending: false });

    if (options.limit) {
      query = query.limit(options.limit);
    }

    if (options.offset) {
      query = query.range(
        options.offset,
        options.offset + (options.limit || 20) - 1,
      );
    }

    const { data, error } = await query;

    if (error) {
      console.error("[AlertManagementService] Failed to fetch alerts:", error);
      throw error;
    }

    return (data || []).map(this.mapToAlertEntity);
  }

  async getAlertById(alertId: string): Promise<AlertEntity | null> {
    const { data, error } = await supabase
      .from("alerts")
      .select("*")
      .eq("id", alertId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null;
      }
      console.error("[AlertManagementService] Failed to fetch alert:", error);
      throw error;
    }

    return this.mapToAlertEntity(data);
  }

  async createAlert(options: CreateAlertOptions): Promise<AlertEntity> {
    const alertData = {
      id: crypto.randomUUID(),
      organization_id: options.organizationId,
      kpi_code: options.kpiCode,
      kpi_name: options.kpiName,
      level: options.level,
      status: "active",
      title: options.title,
      description: options.description,
      recommendation: options.recommendation,
      current_value: options.currentValue,
      threshold: options.threshold,
      category: options.category,
      triggered_at: new Date().toISOString(),
      notification_sent: false,
      metadata: options.metadata || {},
    };

    const { data, error } = await supabase
      .from("alerts")
      .insert(alertData)
      .select()
      .single();

    if (error) {
      console.error("[AlertManagementService] Failed to create alert:", error);
      throw error;
    }

    return this.mapToAlertEntity(data);
  }

  async updateAlert(
    alertId: string,
    options: UpdateAlertOptions,
  ): Promise<AlertEntity> {
    const updates: Record<string, unknown> = {};

    if (options.status) {
      updates.status = options.status;

      if (options.status === "acknowledged") {
        updates.acknowledged_at = new Date().toISOString();
        updates.acknowledged_by = options.acknowledgedBy || null;
      } else if (options.status === "resolved") {
        updates.resolved_at = new Date().toISOString();
        updates.resolved_by = options.resolvedBy || null;
      } else if (options.status === "dismissed") {
        updates.dismissed_at = new Date().toISOString();
        updates.dismissed_by = options.dismissedBy || null;
        updates.dismissed_reason = options.dismissedReason || null;
      }
    }

    const { data, error } = await supabase
      .from("alerts")
      .update(updates)
      .eq("id", alertId)
      .select()
      .single();

    if (error) {
      console.error("[AlertManagementService] Failed to update alert:", error);
      throw error;
    }

    return this.mapToAlertEntity(data);
  }

  async acknowledgeAlert(
    alertId: string,
    userId: string,
  ): Promise<AlertEntity> {
    return this.updateAlert(alertId, {
      status: "acknowledged",
      acknowledgedBy: userId,
    });
  }

  async resolveAlert(alertId: string, userId: string): Promise<AlertEntity> {
    return this.updateAlert(alertId, {
      status: "resolved",
      resolvedBy: userId,
    });
  }

  async dismissAlert(
    alertId: string,
    userId: string,
    reason: string,
  ): Promise<AlertEntity> {
    return this.updateAlert(alertId, {
      status: "dismissed",
      dismissedBy: userId,
      dismissedReason: reason,
    });
  }

  async deleteAlert(alertId: string): Promise<void> {
    const { error } = await supabase.from("alerts").delete().eq("id", alertId);

    if (error) {
      console.error("[AlertManagementService] Failed to delete alert:", error);
      throw error;
    }
  }

  async getStatistics(organizationId: string): Promise<AlertStatistics> {
    const now = new Date();
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const last30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const last90Days = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

    const [summaryResult, categoryResult, kpiResult, trendResult] =
      await Promise.all([
        this.getSummary(organizationId),
        this.getByCategory(organizationId),
        this.getByKPI(organizationId),
        this.getTrend(organizationId, last7Days, last30Days, last90Days),
      ]);

    const resolutionTime = await this.getResolutionTime(organizationId);

    return {
      summary: summaryResult,
      byCategory: categoryResult,
      byKPI: kpiResult,
      trend: trendResult,
      resolutionTime,
    };
  }

  private async getSummary(organizationId: string): Promise<AlertSummary> {
    const { data, error } = await supabase
      .from("alerts")
      .select("level, status")
      .eq("organization_id", organizationId);

    if (error || !data) {
      return {
        total: 0,
        critical: 0,
        warning: 0,
        info: 0,
        active: 0,
        acknowledged: 0,
        resolved: 0,
      };
    }

    return data.reduce(
      (acc, alert) => {
        acc.total++;
        if (alert.level === "critical") acc.critical++;
        if (alert.level === "warning") acc.warning++;
        if (alert.level === "info") acc.info++;
        if (alert.status === "active") acc.active++;
        if (alert.status === "acknowledged") acc.acknowledged++;
        if (alert.status === "resolved") acc.resolved++;
        return acc;
      },
      {
        total: 0,
        critical: 0,
        warning: 0,
        info: 0,
        active: 0,
        acknowledged: 0,
        resolved: 0,
      },
    );
  }

  private async getByCategory(
    organizationId: string,
  ): Promise<Record<AlertCategory, number>> {
    const { data, error } = await supabase
      .from("alerts")
      .select("category")
      .eq("organization_id", organizationId);

    if (error || !data) {
      return {} as Record<AlertCategory, number>;
    }

    return data.reduce(
      (acc, alert) => {
        acc[alert.category as AlertCategory] =
          (acc[alert.category as AlertCategory] || 0) + 1;
        return acc;
      },
      {} as Record<AlertCategory, number>,
    );
  }

  private async getByKPI(
    organizationId: string,
  ): Promise<Record<string, number>> {
    const { data, error } = await supabase
      .from("alerts")
      .select("kpi_code")
      .eq("organization_id", organizationId);

    if (error || !data) {
      return {};
    }

    return data.reduce(
      (acc, alert) => {
        acc[alert.kpi_code] = (acc[alert.kpi_code] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }

  private async getTrend(
    organizationId: string,
    last7Days: Date,
    last30Days: Date,
    last90Days: Date,
  ): Promise<{
    last7Days: AlertSummary;
    last30Days: AlertSummary;
    last90Days: AlertSummary;
  }> {
    const [last7, last30, last90] = await Promise.all([
      this.getSummaryInPeriod(organizationId, last7Days, new Date()),
      this.getSummaryInPeriod(organizationId, last30Days, new Date()),
      this.getSummaryInPeriod(organizationId, last90Days, new Date()),
    ]);

    return { last7Days: last7, last30Days: last30, last90Days: last90 };
  }

  private async getSummaryInPeriod(
    organizationId: string,
    from: Date,
    to: Date,
  ): Promise<AlertSummary> {
    const { data, error } = await supabase
      .from("alerts")
      .select("level, status")
      .eq("organization_id", organizationId)
      .gte("triggered_at", from.toISOString())
      .lte("triggered_at", to.toISOString());

    if (error || !data) {
      return {
        total: 0,
        critical: 0,
        warning: 0,
        info: 0,
        active: 0,
        acknowledged: 0,
        resolved: 0,
      };
    }

    return data.reduce(
      (acc, alert) => {
        acc.total++;
        if (alert.level === "critical") acc.critical++;
        if (alert.level === "warning") acc.warning++;
        if (alert.level === "info") acc.info++;
        return acc;
      },
      {
        total: 0,
        critical: 0,
        warning: 0,
        info: 0,
        active: 0,
        acknowledged: 0,
        resolved: 0,
      },
    );
  }

  private async getResolutionTime(
    organizationId: string,
  ): Promise<{ average: number; critical: number; warning: number }> {
    const { data, error } = await supabase
      .from("alerts")
      .select("level, triggered_at, resolved_at")
      .eq("organization_id", organizationId)
      .eq("status", "resolved")
      .not("resolved_at", "is", null);

    if (error || !data || data.length === 0) {
      return { average: 0, critical: 0, warning: 0 };
    }

    const times = data.map((alert) => {
      const triggered = new Date(alert.triggered_at).getTime();
      const resolved = new Date(alert.resolved_at).getTime();
      return (resolved - triggered) / (1000 * 60 * 60);
    });

    const criticalTimes = data
      .filter((a) => a.level === "critical")
      .map((a) => {
        const triggered = new Date(a.triggered_at).getTime();
        const resolved = new Date(a.resolved_at).getTime();
        return (resolved - triggered) / (1000 * 60 * 60);
      });

    const warningTimes = data
      .filter((a) => a.level === "warning")
      .map((a) => {
        const triggered = new Date(a.triggered_at).getTime();
        const resolved = new Date(a.resolved_at).getTime();
        return (resolved - triggered) / (1000 * 60 * 60);
      });

    return {
      average: times.reduce((a, b) => a + b, 0) / times.length,
      critical: criticalTimes.length
        ? criticalTimes.reduce((a, b) => a + b, 0) / criticalTimes.length
        : 0,
      warning: warningTimes.length
        ? warningTimes.reduce((a, b) => a + b, 0) / warningTimes.length
        : 0,
    };
  }

  private mapToAlertEntity(data: Record<string, unknown>): AlertEntity {
    return {
      id: data.id as string,
      organizationId: data.organization_id as string,
      kpiCode: data.kpi_code as string,
      kpiName: data.kpi_name as string,
      level: data.level as AlertLevel,
      status: data.status as AlertStatus,
      title: data.title as string,
      description: data.description as string,
      recommendation: data.recommendation as string,
      currentValue: data.current_value as number,
      threshold: data.threshold as number,
      triggeredAt: new Date(data.triggered_at as string),
      acknowledgedAt: data.acknowledged_at
        ? new Date(data.acknowledged_at as string)
        : undefined,
      acknowledgedBy: data.acknowledged_by as string | undefined,
      resolvedAt: data.resolved_at
        ? new Date(data.resolved_at as string)
        : undefined,
      resolvedBy: data.resolved_by as string | undefined,
      dismissedAt: data.dismissed_at
        ? new Date(data.dismissed_at as string)
        : undefined,
      dismissedBy: data.dismissed_by as string | undefined,
      dismissedReason: data.dismissed_reason as string | undefined,
      notificationSent: data.notification_sent as boolean,
      category: data.category as AlertCategory,
      metadata: data.metadata as Record<string, unknown> | undefined,
    };
  }
}

export const alertManagementService = new AlertManagementService();
