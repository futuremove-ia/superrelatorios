export type FinancialDocumentType =
  | "bank_statement" // Extrato bancário
  | "dre" // Demonstração de Resultados
  | "cash_flow" // Fluxo de caixa
  | "balance_sheet" // Balanço patrimonial
  | "general_ledger" // Razão contábil
  | "unknown"; // Formato não identificado

export type Domain =
  | "finance"
  | "commercial"
  | "marketing"
  | "operations"
  | "people"
  | "strategy";

export type UniversalDocumentType =
  // Finance (existing)
  | "bank_statement"
  | "dre"
  | "cash_flow"
  | "balance_sheet"
  // Commercial
  | "sales_report"
  | "crm_export"
  | "pipeline_data"
  | "revenue_report"
  // Marketing
  | "campaign_report"
  | "analytics_export"
  | "ad_spend_report"
  | "lead_report"
  // Operations
  | "productivity_report"
  | "operations_kpi"
  | "capacity_report"
  | "quality_report"
  // People
  | "payroll_report"
  | "headcount_report"
  | "turnover_report"
  | "hiring_report"
  // WhatsApp
  | "whatsapp_chat"
  | "unknown";

export type SourceFileType =
  | "pdf"
  | "doc"
  | "docx"
  | "xls"
  | "xlsx"
  | "ppt"
  | "pptx"
  | "csv"
  | "txt"
  | "eml"
  | "msg"
  | "html"
  | "json"
  | "png"
  | "jpg"
  | "jpeg"
  | "tiff"
  | "bmp"
  | "google-docs"
  | "google-sheets"
  | "google-slides";

export const SUPPORTED_FILE_TYPES: SourceFileType[] = [
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "csv",
  "txt",
  "eml",
  "msg",
  "html",
  "json",
  "png",
  "jpg",
  "jpeg",
  "tiff",
  "bmp",
];

export const GOOGLE_DRIVE_TYPES = [
  "google-docs",
  "google-sheets",
  "google-slides",
] as const;

export interface SupportedFileInfo {
  extension: string;
  mimeType: string;
  category:
    | "document"
    | "spreadsheet"
    | "presentation"
    | "email"
    | "image"
    | "web"
    | "google";
  supportsOCR: boolean;
  supportsTableExtraction: boolean;
}

export const FILE_TYPE_INFO: Record<string, SupportedFileInfo> = {
  ".pdf": {
    extension: ".pdf",
    mimeType: "application/pdf",
    category: "document",
    supportsOCR: true,
    supportsTableExtraction: true,
  },
  ".doc": {
    extension: ".doc",
    mimeType: "application/msword",
    category: "document",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".docx": {
    extension: ".docx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    category: "document",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".xls": {
    extension: ".xls",
    mimeType: "application/vnd.ms-excel",
    category: "spreadsheet",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".xlsx": {
    extension: ".xlsx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    category: "spreadsheet",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".ppt": {
    extension: ".ppt",
    mimeType: "application/vnd.ms-powerpoint",
    category: "presentation",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".pptx": {
    extension: ".pptx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    category: "presentation",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".csv": {
    extension: ".csv",
    mimeType: "text/csv",
    category: "spreadsheet",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".txt": {
    extension: ".txt",
    mimeType: "text/plain",
    category: "document",
    supportsOCR: false,
    supportsTableExtraction: false,
  },
  ".eml": {
    extension: ".eml",
    mimeType: "message/rfc822",
    category: "email",
    supportsOCR: false,
    supportsTableExtraction: false,
  },
  ".msg": {
    extension: ".msg",
    mimeType: "application/vnd.ms-outlook",
    category: "email",
    supportsOCR: false,
    supportsTableExtraction: false,
  },
  ".html": {
    extension: ".html",
    mimeType: "text/html",
    category: "web",
    supportsOCR: false,
    supportsTableExtraction: true,
  },
  ".json": {
    extension: ".json",
    mimeType: "application/json",
    category: "web",
    supportsOCR: false,
    supportsTableExtraction: false,
  },
  ".png": {
    extension: ".png",
    mimeType: "image/png",
    category: "image",
    supportsOCR: true,
    supportsTableExtraction: false,
  },
  ".jpg": {
    extension: ".jpg",
    mimeType: "image/jpeg",
    category: "image",
    supportsOCR: true,
    supportsTableExtraction: false,
  },
  ".jpeg": {
    extension: ".jpeg",
    mimeType: "image/jpeg",
    category: "image",
    supportsOCR: true,
    supportsTableExtraction: false,
  },
  ".tiff": {
    extension: ".tiff",
    mimeType: "image/tiff",
    category: "image",
    supportsOCR: true,
    supportsTableExtraction: false,
  },
  ".bmp": {
    extension: ".bmp",
    mimeType: "image/bmp",
    category: "image",
    supportsOCR: true,
    supportsTableExtraction: false,
  },
};

export interface FinancialRow {
  [key: string]: string | number | Date | null | unknown;
}

export interface ParsedFinancialData {
  documentType: FinancialDocumentType;
  rawData: FinancialRow[];
  headers: string[];
  detectedColumns: DetectedColumn[];
  warnings: string[];
  metadata: {
    period?: string;
    accountName?: string;
    currency?: string;
    rowCount: number;
  };
}

export interface DetectedColumn {
  name: string;
  index: number;
  type: "date" | "amount" | "description" | "category" | "account" | "unknown";
  confidence: number;
  possibleMappings: KPIMapping[];
}

export interface KPIMapping {
  kpiCode: string;
  kpiName: string;
  confidence: number;
  category:
    | "revenue"
    | "expense"
    | "profit"
    | "liquidity"
    | "solvency"
    | "growth"
    | "efficiency";
}

export interface FinancialMetric {
  kpiCode: string;
  value: number;
  period: string;
  sourceFileId?: string;
  confidence: number;
}

export interface ParsingResult {
  success: boolean;
  data?: ParsedFinancialData;
  metrics?: FinancialMetric[];
  errors: ParsingError[];
  warnings: string[];
}

export interface ParsingError {
  code: string;
  message: string;
  row?: number;
  column?: string;
}

export interface ColumnMapping {
  sourceColumn: string;
  targetKPI: string;
  transformation?: "none" | "negate" | "abs" | "percentage" | "date_parse";
}

export interface FinancialUploadOptions {
  organizationId: string;
  userId: string;
  autoMapColumns: boolean;
  dateFormat?: string;
  currency?: string;
  onProgress?: (progress: number) => void;
}

export interface ParsingProgress {
  stage: "reading" | "detecting" | "mapping" | "saving" | "complete";
  progress: number;
  message: string;
}

export interface UniversalDetectedColumn {
  name: string;
  index: number;
  type:
    | "date"
    | "amount"
    | "description"
    | "category"
    | "account"
    | "quantity"
    | "percentage"
    | "unknown";
  confidence: number;
  possibleMappings: KPIMapping[];
  domain?: Domain;
}

export interface UniversalParsedData {
  documentType: UniversalDocumentType;
  domain: Domain;
  confidence: number;
  rawData: FinancialRow[];
  headers: string[];
  detectedColumns: UniversalDetectedColumn[];
  kpiMappings: KPIMapping[];
  warnings: string[];
  metadata: {
    period?: string;
    sourceName?: string;
    rowCount: number;
    blueprintContext?: {
      industrySector?: string;
      businessModel?: string;
      companyStage?: string;
    };
  };
}
