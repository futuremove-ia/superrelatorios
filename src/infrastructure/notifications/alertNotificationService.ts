import {
  AlertEntity,
  AlertNotification,
  NotificationChannel,
  AlertNotificationPreferences,
  AlertLevel,
} from "@/types/alert";
import { supabase } from "@/lib/supabase";

export interface SendNotificationOptions {
  alert: AlertEntity;
  channel: NotificationChannel;
  recipient: string;
  template?: NotificationTemplate;
}

export interface NotificationTemplate {
  subject?: string;
  body: string;
  htmlBody?: string;
}

const DEFAULT_TEMPLATES: Record<
  NotificationChannel,
  (alert: AlertEntity) => NotificationTemplate
> = {
  email: (alert) => ({
    subject: `[${alert.level.toUpperCase()}] ${alert.title}`,
    body: `
${alert.title}

KPI: ${alert.kpiName}
Valor Atual: ${alert.currentValue}
Limite: ${alert.threshold}

${alert.description}

📋 Recomendação:
${alert.recommendation}

---
SuperRelatórios - Monitoramento Inteligente
    `.trim(),
    htmlBody: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: ${alert.level === "critical" ? "#d32f2f" : alert.level === "warning" ? "#f57c00" : "#1976d2"};">
    ${alert.title}
  </h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>KPI</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">${alert.kpiName}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Valor Atual</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">${alert.currentValue}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Limite</strong></td>
      <td style="padding: 8px; border: 1px solid #ddd;">${alert.threshold}</td>
    </tr>
  </table>
  <p style="margin-top: 16px;"><strong>Descrição:</strong> ${alert.description}</p>
  <p><strong>📋 Recomendação:</strong> ${alert.recommendation}</p>
  <hr style="margin-top: 24px; color: #ccc;">
  <p style="color: #666; font-size: 12px;">SuperRelatórios - Monitoramento Inteligente</p>
</body>
</html>
    `.trim(),
  }),
  push: (alert) => ({
    body: `${alert.level === "critical" ? "🚨" : "⚠️"} ${alert.title}`,
  }),
  sms: (alert) => {
    const emoji = alert.level === "critical" ? "🚨" : "⚠️";
    return {
      body: `${emoji} ${alert.kpiName}: ${alert.currentValue} (limite: ${alert.threshold}). ${alert.description.substring(0, 100)}...`,
    };
  },
  in_app: (alert) => ({
    body: alert.description,
  }),
  webhook: (alert) => ({
    body: JSON.stringify({
      alert: {
        id: alert.id,
        kpiCode: alert.kpiCode,
        kpiName: alert.kpiName,
        level: alert.level,
        title: alert.title,
        description: alert.description,
        recommendation: alert.recommendation,
        currentValue: alert.currentValue,
        threshold: alert.threshold,
        triggeredAt: alert.triggeredAt.toISOString(),
      },
    }),
  }),
};

export class AlertNotificationService {
  private organizationId: string;
  private preferences: Map<string, AlertNotificationPreferences>;

  constructor(organizationId: string) {
    this.organizationId = organizationId;
    this.preferences = new Map();
  }

  async sendNotification(
    options: SendNotificationOptions,
  ): Promise<AlertNotification> {
    const { alert, channel, recipient, template } = options;

    const notification: AlertNotification = {
      id: crypto.randomUUID(),
      alertId: alert.id,
      organizationId: this.organizationId,
      channel,
      recipient,
    };

    try {
      switch (channel) {
        case "email":
          await this.sendEmail(
            recipient,
            template || DEFAULT_TEMPLATES.email(alert),
          );
          break;
        case "push":
          await this.sendPush(
            recipient,
            template || DEFAULT_TEMPLATES.push(alert),
          );
          break;
        case "sms":
          await this.sendSMS(
            recipient,
            template || DEFAULT_TEMPLATES.sms(alert),
          );
          break;
        case "in_app":
          await this.sendInApp(recipient, alert);
          break;
        case "webhook":
          await this.sendWebhook(
            recipient,
            template || DEFAULT_TEMPLATES.webhook(alert),
          );
          break;
      }

      notification.sentAt = new Date();
    } catch (error) {
      notification.failedAt = new Date();
      notification.errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      throw error;
    }

    await this.saveNotificationRecord(notification);

    return notification;
  }

  private async sendEmail(
    recipient: string,
    template: NotificationTemplate,
  ): Promise<void> {
    console.log(
      `[AlertNotification] Sending email to ${recipient}:`,
      template.subject,
    );
  }

  private async sendPush(
    recipient: string,
    template: NotificationTemplate,
  ): Promise<void> {
    console.log(
      `[AlertNotification] Sending push to ${recipient}:`,
      template.body,
    );
  }

  private async sendSMS(
    recipient: string,
    template: NotificationTemplate,
  ): Promise<void> {
    console.log(
      `[AlertNotification] Sending SMS to ${recipient}:`,
      template.body,
    );
  }

  private async sendInApp(
    recipient: string,
    alert: AlertEntity,
  ): Promise<void> {
    const { error } = await supabase.from("notifications").insert({
      organization_id: this.organizationId,
      user_id: recipient,
      type: "alert",
      title: alert.title,
      message: alert.description,
      data: { alertId: alert.id, kpiCode: alert.kpiCode, level: alert.level },
      read: false,
    });

    if (error) {
      console.error(
        "[AlertNotification] Failed to save in-app notification:",
        error,
      );
    }
  }

  private async sendWebhook(
    recipient: string,
    template: NotificationTemplate,
  ): Promise<void> {
    try {
      const response = await fetch(recipient, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: template.body,
      });

      if (!response.ok) {
        throw new Error(`Webhook failed: ${response.status}`);
      }
    } catch (error) {
      console.error("[AlertNotification] Webhook error:", error);
      throw error;
    }
  }

  private async saveNotificationRecord(
    notification: AlertNotification,
  ): Promise<void> {
    const { error } = await supabase.from("alert_notifications").insert({
      id: notification.id,
      alert_id: notification.alertId,
      organization_id: notification.organizationId,
      channel: notification.channel,
      recipient: notification.recipient,
      sent_at: notification.sentAt?.toISOString(),
      delivered_at: notification.deliveredAt?.toISOString(),
      read_at: notification.readAt?.toISOString(),
      failed_at: notification.failedAt?.toISOString(),
      error_message: notification.errorMessage,
    });

    if (error) {
      console.error(
        "[AlertNotification] Failed to save notification record:",
        error,
      );
    }
  }

  async sendToMultipleChannels(
    alert: AlertEntity,
    channels: NotificationChannel[],
    recipients: Record<NotificationChannel, string>,
  ): Promise<AlertNotification[]> {
    const results: AlertNotification[] = [];

    for (const channel of channels) {
      const recipient = recipients[channel];
      if (recipient) {
        try {
          const notification = await this.sendNotification({
            alert,
            channel,
            recipient,
          });
          results.push(notification);
        } catch (error) {
          console.error(
            `[AlertNotification] Failed to send via ${channel}:`,
            error,
          );
        }
      }
    }

    return results;
  }

  async shouldNotify(level: AlertLevel, userId: string): Promise<boolean> {
    const prefs = this.preferences.get(userId);

    if (!prefs) {
      return true;
    }

    if (!prefs.channels.in_app) {
      return false;
    }

    if (level === "critical" && prefs.thresholds.critical) {
      return true;
    }
    if (level === "warning" && prefs.thresholds.warning) {
      return true;
    }
    if (level === "info" && prefs.thresholds.info) {
      return true;
    }

    return false;
  }

  setPreferences(
    userId: string,
    preferences: AlertNotificationPreferences,
  ): void {
    this.preferences.set(userId, preferences);
  }

  getPreferences(userId: string): AlertNotificationPreferences | undefined {
    return this.preferences.get(userId);
  }
}

export function createAlertNotificationService(
  organizationId: string,
): AlertNotificationService {
  return new AlertNotificationService(organizationId);
}
