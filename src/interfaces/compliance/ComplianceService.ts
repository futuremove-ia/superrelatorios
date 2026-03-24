import { IComplianceService, AccessLogEntry, ComplianceResult, ComplianceViolation, AuditCriteria, AuditReport, GDPRRequest, GDPRResult, RetentionResult, ComplianceStatus } from './IComplianceService';

/**
 * Compliance Service Implementation
 * Provides GDPR, privacy, and audit compliance features
 */
export class ComplianceService implements IComplianceService {
  private accessLogs: AccessLogEntry[] = [];
  private consentRecords: Map<string, any[]> = new Map();
  private readonly retentionPolicies: Map<string, number> = new Map();

  constructor() {
    this.initializeRetentionPolicies();
  }

  async logAccess(data: AccessLogEntry): Promise<void> {
    this.accessLogs.push(data);
    
    // Keep only last 10000 logs in memory
    if (this.accessLogs.length > 10000) {
      this.accessLogs = this.accessLogs.slice(-10000);
    }

    // In production, store in database
    console.log(`[COMPLIANCE] Access logged: ${data.userId} accessed ${data.resource}`);
  }

  async validatePrivacyCompliance(data: any): Promise<ComplianceResult> {
    const violations: ComplianceViolation[] = [];
    
    // Check for PII exposure
    if (this.containsPII(data)) {
      violations.push({
        type: 'privacy',
        severity: 'high',
        description: 'Potential PII exposure detected',
        timestamp: new Date()
      });
    }

    // Check for encryption requirements
    if (!this.isEncrypted(data)) {
      violations.push({
        type: 'privacy',
        severity: 'medium',
        description: 'Data should be encrypted at rest',
        timestamp: new Date()
      });
    }

    const score = Math.max(0, 100 - (violations.length * 15));
    
    return {
      compliant: violations.length === 0,
      violations,
      score,
      recommendations: this.generatePrivacyRecommendations(violations)
    };
  }

  async generateAuditReport(criteria: AuditCriteria): Promise<AuditReport> {
    const filteredLogs = this.accessLogs.filter(log => 
      log.timestamp >= criteria.startDate &&
      log.timestamp <= criteria.endDate &&
      (!criteria.userId || log.userId === criteria.userId) &&
      (!criteria.resource || log.resource === criteria.resource) &&
      (!criteria.action || log.action === criteria.action)
    );

    const violations = await this.detectViolations(filteredLogs);
    const complianceScore = Math.max(0, 100 - (violations.length * 10));

    return {
      id: `audit_${Date.now()}`,
      generatedAt: new Date(),
      criteria,
      totalEntries: filteredLogs.length,
      violations,
      complianceScore,
      summary: this.summarizeViolations(violations)
    };
  }

  async checkGDPRCompliance(request: GDPRRequest): Promise<GDPRResult> {
    switch (request.type) {
      case 'data_access':
        return this.handleDataAccess(request);
      case 'data_portability':
        return this.handleDataPortability(request);
      case 'data_deletion':
        return this.handleDataDeletion(request);
      case 'consent_management':
        return this.handleConsentManagement(request);
      default:
        return {
          compliant: false,
          actionTaken: 'invalid_request_type',
          nextSteps: ['Please provide valid GDPR request type']
        };
    }
  }

  async checkDataRetention(dataType: string): Promise<RetentionResult> {
    const maxRetention = this.retentionPolicies.get(dataType) || 2555; // 7 years default
    const dataAge = await this.getDataAge(dataType);
    
    let actionRequired: 'keep' | 'review' | 'delete';
    let deadline: Date | undefined;

    if (dataAge > maxRetention) {
      actionRequired = 'delete';
      deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
    } else if (dataAge > maxRetention * 0.8) {
      actionRequired = 'review';
      deadline = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 90 days
    } else {
      actionRequired = 'keep';
    }

    return {
      compliant: actionRequired !== 'delete',
      dataAge,
      maxRetentionPeriod: maxRetention,
      actionRequired,
      deadline
    };
  }

  async getComplianceStatus(): Promise<ComplianceStatus> {
    const recentLogs = this.accessLogs.filter(log => 
      log.timestamp > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    );

    const violations = await this.detectViolations(recentLogs);
    
    return {
      overallScore: Math.max(0, 100 - (violations.length * 5)),
      lastAudit: new Date(),
      nextAudit: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      activeViolations: violations.filter(v => v.severity === 'critical' || v.severity === 'high').length,
      criticalIssues: violations.filter(v => v.severity === 'critical').length,
      complianceAreas: {
        privacy: this.calculateAreaScore(violations, 'privacy'),
        security: this.calculateAreaScore(violations, 'security'),
        retention: this.calculateAreaScore(violations, 'retention'),
        access: this.calculateAreaScore(violations, 'access')
      }
    };
  }

  private initializeRetentionPolicies(): void {
    this.retentionPolicies.set('user_data', 2555); // 7 years
    this.retentionPolicies.set('financial_data', 2555); // 7 years
    this.retentionPolicies.set('access_logs', 1095); // 3 years
    this.retentionPolicies.set('audit_logs', 2555); // 7 years
    this.retentionPolicies.set('consent_records', 365); // 1 year
  }

  private containsPII(data: any): boolean {
    const piiPatterns = [
      /\b\d{3}-\d{2}-\d{4}\b/, // SSN
      /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/, // Credit card
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/ // Email
    ];

    const dataString = JSON.stringify(data);
    return piiPatterns.some(pattern => pattern.test(dataString));
  }

  private isEncrypted(data: any): boolean {
    // Simple check - in production, implement proper encryption detection
    return typeof data === 'string' && data.startsWith('encrypted:');
  }

  private generatePrivacyRecommendations(violations: ComplianceViolation[]): string[] {
    const recommendations: string[] = [];
    
    if (violations.some(v => v.description.includes('PII'))) {
      recommendations.push('Implement PII masking and encryption');
    }
    
    if (violations.some(v => v.description.includes('encrypted'))) {
      recommendations.push('Enable encryption at rest for sensitive data');
    }
    
    return recommendations;
  }

  private async detectViolations(logs: AccessLogEntry[]): Promise<ComplianceViolation[]> {
    const violations: ComplianceViolation[] = [];
    
    // Detect unusual access patterns
    const accessByUser = new Map<string, number>();
    
    for (const log of logs) {
      const count = accessByUser.get(log.userId) || 0;
      accessByUser.set(log.userId, count + 1);
      
      if (count > 1000) { // Threshold for unusual access
        violations.push({
          type: 'access',
          severity: 'medium',
          description: `Unusual access pattern detected for user ${log.userId}`,
          timestamp: log.timestamp
        });
      }
    }

    // Detect failed access attempts
    const failedAttempts = logs.filter(log => !log.success);
    if (failedAttempts.length > 10) {
      violations.push({
        type: 'security',
        severity: 'high',
        description: `Multiple failed access attempts detected: ${failedAttempts.length}`,
        timestamp: new Date()
      });
    }

    return violations;
  }

  private summarizeViolations(violations: ComplianceViolation[]) {
    return {
      totalViolations: violations.length,
      criticalViolations: violations.filter(v => v.severity === 'critical').length,
      highViolations: violations.filter(v => v.severity === 'high').length,
      mediumViolations: violations.filter(v => v.severity === 'medium').length,
      lowViolations: violations.filter(v => v.severity === 'low').length
    };
  }

  private async handleDataAccess(request: GDPRRequest): Promise<GDPRResult> {
    return {
      compliant: true,
      actionTaken: 'data_access_granted',
      dataProvided: { userId: request.userId, accessGranted: true },
      nextSteps: ['User has been granted access to their data']
    };
  }

  private async handleDataPortability(request: GDPRRequest): Promise<GDPRResult> {
    return {
      compliant: true,
      actionTaken: 'data_portability_prepared',
      dataProvided: { 
        userId: request.userId,
        format: 'json',
        exportDate: new Date()
      },
      nextSteps: ['Data export prepared for download']
    };
  }

  private async handleDataDeletion(request: GDPRRequest): Promise<GDPRResult> {
    return {
      compliant: true,
      actionTaken: 'data_deletion_scheduled',
      deletionConfirmation: `Data for user ${request.userId} will be deleted within 30 days`,
      nextSteps: ['Data deletion scheduled', 'User will be notified upon completion']
    };
  }

  private async handleConsentManagement(request: GDPRRequest): Promise<GDPRResult> {
    return {
      compliant: true,
      actionTaken: 'consent_records_retrieved',
      consentStatus: request.consentRecords || [],
      nextSteps: ['User can review and update consent preferences']
    };
  }

  private async getDataAge(dataType: string): Promise<number> {
    // Simulate data age calculation
    return Math.random() * 2000; // Random age in days
  }

  private calculateAreaScore(violations: ComplianceViolation[], area: string): number {
    const areaViolations = violations.filter(v => v.type === area);
    return Math.max(0, 100 - (areaViolations.length * 10));
  }
}
