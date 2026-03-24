/**
 * Compliance service interface
 * Defines contract for regulatory compliance and auditing
 */
export interface IComplianceService {
  /**
   * Log access to sensitive data
   */
  logAccess(data: AccessLogEntry): Promise<void>;

  /**
   * Validate data privacy compliance
   */
  validatePrivacyCompliance(data: any): Promise<ComplianceResult>;

  /**
   * Generate audit report
   */
  generateAuditReport(criteria: AuditCriteria): Promise<AuditReport>;

  /**
   * Check GDPR compliance
   */
  checkGDPRCompliance(request: GDPRRequest): Promise<GDPRResult>;

  /**
   * Check data retention policies
   */
  checkDataRetention(dataType: string): Promise<RetentionResult>;

  /**
   * Get compliance status
   */
  getComplianceStatus(): Promise<ComplianceStatus>;
}

export interface AccessLogEntry {
  userId: string;
  resource: string;
  action: string;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
  success: boolean;
  errorMessage?: string;
}

export interface ComplianceResult {
  compliant: boolean;
  violations: ComplianceViolation[];
  score: number;
  recommendations: string[];
}

export interface ComplianceViolation {
  type: 'privacy' | 'security' | 'retention' | 'access';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  resource?: string;
  timestamp: Date;
}

export interface AuditCriteria {
  startDate: Date;
  endDate: Date;
  userId?: string;
  resource?: string;
  action?: string;
  complianceType?: 'privacy' | 'security' | 'retention' | 'all';
}

export interface AuditReport {
  id: string;
  generatedAt: Date;
  criteria: AuditCriteria;
  totalEntries: number;
  violations: ComplianceViolation[];
  complianceScore: number;
  summary: {
    totalViolations: number;
    criticalViolations: number;
    highViolations: number;
    mediumViolations: number;
    lowViolations: number;
  };
}

export interface GDPRRequest {
  type: 'data_access' | 'data_portability' | 'data_deletion' | 'consent_management';
  userId: string;
  dataCategories?: string[];
  consentRecords?: ConsentRecord[];
}

export interface ConsentRecord {
  id: string;
  userId: string;
  purpose: string;
  consentGiven: boolean;
  timestamp: Date;
  ipAddress: string;
}

export interface GDPRResult {
  compliant: boolean;
  actionTaken: string;
  dataProvided?: any;
  deletionConfirmation?: string;
  consentStatus?: ConsentRecord[];
  nextSteps: string[];
}

export interface RetentionResult {
  compliant: boolean;
  dataAge: number;
  maxRetentionPeriod: number;
  actionRequired: 'keep' | 'review' | 'delete';
  deadline?: Date;
}

export interface ComplianceStatus {
  overallScore: number;
  lastAudit: Date;
  nextAudit: Date;
  activeViolations: number;
  criticalIssues: number;
  complianceAreas: {
    privacy: number;
    security: number;
    retention: number;
    access: number;
  };
}
