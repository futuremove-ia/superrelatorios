import { AlertEntity } from '../../../domain/metrics';

/**
 * Professional email templates for alerts
 * Clean, responsive HTML templates for different alert levels
 */

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export class EmailTemplates {
  /**
   * Generate critical alert email template
   */
  static criticalAlert(alert: AlertEntity): EmailTemplate {
    const subject = `🚨 CRITICAL: ${alert.title}`;
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .alert-box { background: #dc2626; color: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .kpi-value { font-size: 24px; font-weight: bold; color: #dc2626; }
        .recommendation { background: #fef3c7; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚨 Critical Alert</h1>
            <p>Immediate attention required</p>
        </div>
        
        <div class="content">
            <h2>${alert.title}</h2>
            <div class="alert-box">
                <strong>KPI:</strong> ${alert.kpi}<br>
                <strong>Current Value:</strong> <span class="kpi-value">${alert.currentValue}</span><br>
                <strong>Threshold:</strong> ${alert.threshold}<br>
                <strong>Triggered:</strong> ${alert.triggeredAt.toLocaleString()}
            </div>
            
            <p>${alert.description}</p>
            
            <div class="recommendation">
                <h3>💡 Recommendation</h3>
                <p>${alert.recommendation}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated alert from Metrics Dashboard</p>
            <p>Generated at ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>`;

    const text = `
CRITICAL ALERT: ${alert.title}

KPI: ${alert.kpi}
Current Value: ${alert.currentValue}
Threshold: ${alert.threshold}
Triggered: ${alert.triggeredAt.toLocaleString()}

Description:
${alert.description}

Recommendation:
${alert.recommendation}

---
This is an automated alert from Metrics Dashboard
Generated at ${new Date().toLocaleString()}
`;

    return { subject, html, text };
  }

  /**
   * Generate warning alert email template
   */
  static warningAlert(alert: AlertEntity): EmailTemplate {
    const subject = `⚠️ WARNING: ${alert.title}`;
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f59e0b; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .alert-box { background: #f59e0b; color: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .kpi-value { font-size: 24px; font-weight: bold; color: #f59e0b; }
        .recommendation { background: #fef3c7; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>⚠️ Warning Alert</h1>
            <p>Attention needed</p>
        </div>
        
        <div class="content">
            <h2>${alert.title}</h2>
            <div class="alert-box">
                <strong>KPI:</strong> ${alert.kpi}<br>
                <strong>Current Value:</strong> <span class="kpi-value">${alert.currentValue}</span><br>
                <strong>Threshold:</strong> ${alert.threshold}<br>
                <strong>Triggered:</strong> ${alert.triggeredAt.toLocaleString()}
            </div>
            
            <p>${alert.description}</p>
            
            <div class="recommendation">
                <h3>💡 Recommendation</h3>
                <p>${alert.recommendation}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated alert from Metrics Dashboard</p>
            <p>Generated at ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>`;

    const text = `
WARNING ALERT: ${alert.title}

KPI: ${alert.kpi}
Current Value: ${alert.currentValue}
Threshold: ${alert.threshold}
Triggered: ${alert.triggeredAt.toLocaleString()}

Description:
${alert.description}

Recommendation:
${alert.recommendation}

---
This is an automated alert from Metrics Dashboard
Generated at ${new Date().toLocaleString()}
`;

    return { subject, html, text };
  }

  /**
   * Generate info alert email template
   */
  static infoAlert(alert: AlertEntity): EmailTemplate {
    const subject = `ℹ️ INFO: ${alert.title}`;
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .alert-box { background: #3b82f6; color: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .kpi-value { font-size: 24px; font-weight: bold; color: #3b82f6; }
        .recommendation { background: #dbeafe; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>ℹ️ Information Alert</h1>
            <p>FYI</p>
        </div>
        
        <div class="content">
            <h2>${alert.title}</h2>
            <div class="alert-box">
                <strong>KPI:</strong> ${alert.kpi}<br>
                <strong>Current Value:</strong> <span class="kpi-value">${alert.currentValue}</span><br>
                <strong>Threshold:</strong> ${alert.threshold}<br>
                <strong>Triggered:</strong> ${alert.triggeredAt.toLocaleString()}
            </div>
            
            <p>${alert.description}</p>
            
            <div class="recommendation">
                <h3>💡 Recommendation</h3>
                <p>${alert.recommendation}</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated alert from Metrics Dashboard</p>
            <p>Generated at ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>`;

    const text = `
INFO ALERT: ${alert.title}

KPI: ${alert.kpi}
Current Value: ${alert.currentValue}
Threshold: ${alert.threshold}
Triggered: ${alert.triggeredAt.toLocaleString()}

Description:
${alert.description}

Recommendation:
${alert.recommendation}

---
This is an automated alert from Metrics Dashboard
Generated at ${new Date().toLocaleString()}
`;

    return { subject, html, text };
  }

  /**
   * Generate template based on alert level
   */
  static generateTemplate(alert: AlertEntity): EmailTemplate {
    switch (alert.level) {
      case 'critical':
        return this.criticalAlert(alert);
      case 'warning':
        return this.warningAlert(alert);
      case 'info':
        return this.infoAlert(alert);
      default:
        return this.infoAlert(alert);
    }
  }

  /**
   * Generate weekly summary email template
   */
  static weeklySummary(data: {
    totalAlerts: number;
    criticalAlerts: number;
    warningAlerts: number;
    infoAlerts: number;
    topKPIs: Array<{ name: string; value: number; status: string }>;
  }): EmailTemplate {
    const subject = `📊 Weekly Metrics Summary - ${new Date().toLocaleDateString()}`;
    
    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9fafb; }
        .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .summary-card { background: white; padding: 15px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .kpi-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .kpi-table th, .kpi-table td { padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        .status-good { color: #10b981; font-weight: bold; }
        .status-warning { color: #f59e0b; font-weight: bold; }
        .status-critical { color: #dc2626; font-weight: bold; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 Weekly Metrics Summary</h1>
            <p>Week of ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="content">
            <h2>Alert Summary</h2>
            <div class="summary-grid">
                <div class="summary-card">
                    <h3>Total Alerts</h3>
                    <p style="font-size: 24px; font-weight: bold;">${data.totalAlerts}</p>
                </div>
                <div class="summary-card">
                    <h3>Critical</h3>
                    <p style="font-size: 24px; font-weight: bold; color: #dc2626;">${data.criticalAlerts}</p>
                </div>
                <div class="summary-card">
                    <h3>Warning</h3>
                    <p style="font-size: 24px; font-weight: bold; color: #f59e0b;">${data.warningAlerts}</p>
                </div>
                <div class="summary-card">
                    <h3>Info</h3>
                    <p style="font-size: 24px; font-weight: bold; color: #3b82f6;">${data.infoAlerts}</p>
                </div>
            </div>
            
            <h2>Top KPIs</h2>
            <table class="kpi-table">
                <thead>
                    <tr>
                        <th>KPI</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.topKPIs.map(kpi => `
                        <tr>
                            <td>${kpi.name}</td>
                            <td>${kpi.value}</td>
                            <td class="status-${kpi.status}">${kpi.status.toUpperCase()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="footer">
            <p>This is an automated weekly summary from Metrics Dashboard</p>
            <p>Generated at ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>`;

    const text = `
WEEKLY METRICS SUMMARY - ${new Date().toLocaleDateString()}

ALERT SUMMARY:
Total Alerts: ${data.totalAlerts}
Critical: ${data.criticalAlerts}
Warning: ${data.warningAlerts}
Info: ${data.infoAlerts}

TOP KPIS:
${data.topKPIs.map(kpi => `${kpi.name}: ${kpi.value} (${kpi.status.toUpperCase()})`).join('\n')}

---
This is an automated weekly summary from Metrics Dashboard
Generated at ${new Date().toLocaleString()}
`;

    return { subject, html, text };
  }
}
