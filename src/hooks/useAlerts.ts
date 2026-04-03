import { useState, useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AlertEntity,
  AlertFilterOptions,
  AlertStatistics,
  CreateAlertOptions,
  UpdateAlertOptions,
  AlertLevel,
  AlertStatus,
} from "@/types/alert";
import { alertManagementService } from "@/services/alertManagementService";
import {
  createAlertThresholdService,
  evaluateKPIsForAlerts,
  type KPIValue,
} from "@/services/alertThresholdService";
import { createAlertNotificationService } from "@/services/alertNotificationService";

const ALERT_KEYS = {
  all: (orgId: string) => ["alerts", orgId] as const,
  list: (orgId: string, filters?: AlertFilterOptions) =>
    ["alerts", orgId, "list", filters] as const,
  detail: (alertId: string) => ["alerts", "detail", alertId] as const,
  statistics: (orgId: string) => ["alerts", "statistics", orgId] as const,
};

export function useAlerts(
  organizationId: string,
  filters?: AlertFilterOptions,
) {
  return useQuery({
    queryKey: ALERT_KEYS.list(organizationId, filters),
    queryFn: () =>
      alertManagementService.getAlerts({ organizationId, ...filters }),
    enabled: !!organizationId,
  });
}

export function useAlert(alertId: string) {
  return useQuery({
    queryKey: ALERT_KEYS.detail(alertId),
    queryFn: () => alertManagementService.getAlertById(alertId),
    enabled: !!alertId,
  });
}

export function useAlertStatistics(organizationId: string) {
  return useQuery({
    queryKey: ALERT_KEYS.statistics(organizationId),
    queryFn: () => alertManagementService.getStatistics(organizationId),
    enabled: !!organizationId,
  });
}

export function useCreateAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (options: CreateAlertOptions) =>
      alertManagementService.createAlert(options),
    onSuccess: (alert) => {
      queryClient.invalidateQueries({
        queryKey: ALERT_KEYS.all(alert.organizationId),
      });
      queryClient.invalidateQueries({
        queryKey: ALERT_KEYS.statistics(alert.organizationId),
      });
    },
  });
}

export function useUpdateAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      alertId,
      options,
    }: {
      alertId: string;
      options: UpdateAlertOptions;
    }) => alertManagementService.updateAlert(alertId, options),
    onSuccess: (alert) => {
      queryClient.invalidateQueries({
        queryKey: ALERT_KEYS.all(alert.organizationId),
      });
      queryClient.invalidateQueries({ queryKey: ALERT_KEYS.detail(alert.id) });
    },
  });
}

export function useAcknowledgeAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ alertId, userId }: { alertId: string; userId: string }) =>
      alertManagementService.acknowledgeAlert(alertId, userId),
    onSuccess: (alert) => {
      queryClient.invalidateQueries({
        queryKey: ALERT_KEYS.all(alert.organizationId),
      });
    },
  });
}

export function useResolveAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ alertId, userId }: { alertId: string; userId: string }) =>
      alertManagementService.resolveAlert(alertId, userId),
    onSuccess: (alert) => {
      queryClient.invalidateQueries({
        queryKey: ALERT_KEYS.all(alert.organizationId),
      });
    },
  });
}

export function useDismissAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      alertId,
      userId,
      reason,
    }: {
      alertId: string;
      userId: string;
      reason: string;
    }) => alertManagementService.dismissAlert(alertId, userId, reason),
    onSuccess: (alert) => {
      queryClient.invalidateQueries({
        queryKey: ALERT_KEYS.all(alert.organizationId),
      });
    },
  });
}

export function useEvaluateAlerts(organizationId: string) {
  const [triggeredAlerts, setTriggeredAlerts] = useState<AlertEntity[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const evaluate = useCallback(
    async (kpis: KPIValue[], customThresholds?: Record<string, unknown>) => {
      setIsEvaluating(true);

      try {
        const results = evaluateKPIsForAlerts(
          organizationId,
          kpis,
          customThresholds as Record<
            string,
            import("@/types/alert").AlertThreshold
          >,
        );
        const triggered = results
          .filter((r) => r.triggered && r.alert)
          .map((r) => r.alert!);
        setTriggeredAlerts(triggered);
        return triggered;
      } finally {
        setIsEvaluating(false);
      }
    },
    [organizationId],
  );

  return {
    evaluate,
    triggeredAlerts,
    isEvaluating,
  };
}

export function useAlertNotifications(organizationId: string) {
  const notificationService = createAlertNotificationService(organizationId);

  const sendNotification = useCallback(
    async (
      alert: AlertEntity,
      channel: import("@/types/alert").NotificationChannel,
      recipient: string,
    ) => {
      return notificationService.sendNotification({
        alert,
        channel,
        recipient,
      });
    },
    [notificationService],
  );

  const sendToMultipleChannels = useCallback(
    async (
      alert: AlertEntity,
      channels: import("@/types/alert").NotificationChannel[],
      recipients: Record<import("@/types/alert").NotificationChannel, string>,
    ) => {
      return notificationService.sendToMultipleChannels(
        alert,
        channels,
        recipients,
      );
    },
    [notificationService],
  );

  return {
    sendNotification,
    sendToMultipleChannels,
  };
}

export function useActiveAlertCount(organizationId: string) {
  const { data: alerts } = useAlerts(organizationId, {
    organizationId,
    status: ["active"],
  });
  const critical = alerts?.filter((a) => a.level === "critical").length || 0;
  const warning = alerts?.filter((a) => a.level === "warning").length || 0;
  const info = alerts?.filter((a) => a.level === "info").length || 0;

  return { critical, warning, info, total: critical + warning + info };
}
