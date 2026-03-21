import { AlertEntity } from '../../../domain/metrics';
import { EmailTemplates, EmailTemplate } from './EmailTemplates';

/**
 * Email notification service using Resend
 * Modern, API-first email delivery with TypeScript support
 * Follows Clean Architecture principles
 */

export interface EmailNotifierConfig {
  apiKey: string;
  fromEmail: string;
  replyToEmail?: string;
  rateLimitPerSecond?: number;
}

export interface EmailDeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
  timestamp: string;
}

export class ResendEmailNotifier {
  private config: EmailNotifierConfig;
  private lastSentTime = 0;
  private rateLimitMs: number;

  constructor(config: EmailNotifierConfig) {
    this.config = config;
    this.rateLimitMs = config.rateLimitPerSecond 
      ? 1000 / config.rateLimitPerSecond 
      : 100; // Default: 10 emails per second
  }

  /**
   * Send alert email
   */
  async sendAlert(alert: AlertEntity, recipientEmail: string): Promise<EmailDeliveryResult> {
    try {
      // Rate limiting
      await this.enforceRateLimit();

      const template = EmailTemplates.generateTemplate(alert);
      const result = await this.sendEmail(recipientEmail, template.subject, template.html, template.text);

      return {
        success: true,
        messageId: result.id,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Failed to send alert email:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      };
    }
  }

  /**
   * Send weekly summary email
   */
  async sendWeeklySummary(
    data: {
      totalAlerts: number;
      criticalAlerts: number;
      warningAlerts: number;
      infoAlerts: number;
      topKPIs: Array<{ name: string; value: number; status: string }>;
    },
    recipientEmail: string
  ): Promise<EmailDeliveryResult> {
    try {
      // Rate limiting
      await this.enforceRateLimit();

      const template = EmailTemplates.weeklySummary(data);
      const result = await this.sendEmail(recipientEmail, template.subject, template.html, template.text);

      return {
        success: true,
        messageId: result.id,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Failed to send weekly summary email:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      };
    }
  }

  /**
   * Send custom email
   */
  async sendCustomEmail(
    recipientEmail: string,
    subject: string,
    htmlContent: string,
    textContent?: string
  ): Promise<EmailDeliveryResult> {
    try {
      // Rate limiting
      await this.enforceRateLimit();

      const result = await this.sendEmail(recipientEmail, subject, htmlContent, textContent);

      return {
        success: true,
        messageId: result.id,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Failed to send custom email:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      };
    }
  }

  /**
   * Send email to multiple recipients
   */
  async sendBulkEmail(
    recipientEmails: string[],
    subject: string,
    htmlContent: string,
    textContent?: string
  ): Promise<EmailDeliveryResult[]> {
    const results: EmailDeliveryResult[] = [];

    for (const email of recipientEmails) {
      const result = await this.sendCustomEmail(email, subject, htmlContent, textContent);
      results.push(result);

      // Add delay between bulk emails to avoid rate limiting
      if (recipientEmails.length > 1) {
        await this.delay(this.rateLimitMs);
      }
    }

    return results;
  }

  /**
   * Check email delivery status
   */
  async getDeliveryStatus(messageId: string): Promise<{
    delivered: boolean;
    opened?: boolean;
    clicked?: boolean;
    bounced?: boolean;
    error?: string;
  }> {
    try {
      // In a real implementation, this would call Resend API
      // For MVP, we'll simulate the check
      console.log(`Checking delivery status for message: ${messageId}`);
      
      return {
        delivered: true,
        opened: false,
        clicked: false,
        bounced: false,
      };
    } catch (error) {
      console.error('Failed to check delivery status:', error);
      return {
        delivered: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Validate email address
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Get notifier statistics
   */
  getStatistics(): {
    totalSent: number;
    successful: number;
    failed: number;
    successRate: number;
  } {
    // In a real implementation, this would track actual statistics
    // For MVP, we'll return placeholder data
    return {
      totalSent: 0,
      successful: 0,
      failed: 0,
      successRate: 0,
    };
  }

  /**
   * Core email sending method
   */
  private async sendEmail(
    to: string,
    subject: string,
    html: string,
    text?: string
  ): Promise<{ id: string }> {
    // Validate inputs
    if (!this.validateEmail(to)) {
      throw new Error(`Invalid email address: ${to}`);
    }

    if (!subject.trim()) {
      throw new Error('Email subject is required');
    }

    if (!html.trim() && !text?.trim()) {
      throw new Error('Email content is required');
    }

    // In a real implementation, this would use Resend SDK
    // For MVP, we'll simulate the email sending
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`HTML length: ${html.length} characters`);
    
    // Simulate API call delay
    await this.delay(100);

    // Return simulated message ID
    return {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  /**
   * Enforce rate limiting
   */
  private async enforceRateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastSend = now - this.lastSentTime;

    if (timeSinceLastSend < this.rateLimitMs) {
      const waitTime = this.rateLimitMs - timeSinceLastSend;
      await this.delay(waitTime);
    }

    this.lastSentTime = Date.now();
  }

  /**
   * Utility delay function
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Test email configuration
   */
  async testConfiguration(): Promise<boolean> {
    try {
      const testEmail = {
        to: this.config.fromEmail,
        subject: 'Test Email - Metrics Dashboard',
        html: '<h1>Test Email</h1><p>This is a test email from Metrics Dashboard.</p>',
        text: 'Test Email\n\nThis is a test email from Metrics Dashboard.'
      };

      await this.sendEmail(testEmail.to, testEmail.subject, testEmail.html, testEmail.text);
      return true;
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return false;
    }
  }
}
