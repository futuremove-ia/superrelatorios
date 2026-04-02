import { UnstructuredElement, ExtractionResult } from "./unstructuredService";
import { Sector, Niche, BusinessModel } from "../domain/metrics/engine/types";
import {
  COMMON_FIELDS,
  SECTOR_FIELD_MAPPINGS,
} from "../domain/metrics/engine/dataFields";

export type ExtractionStrategy = "auto" | "hi_res" | "fast" | "ocr_only";

export interface ParsedTable {
  headers: string[];
  rows: Record<string, unknown>[];
  pageNumber?: number;
  confidence: number;
}

export interface ParsedSection {
  title: string;
  content: string;
  pageNumber?: number;
  type: "title" | "narrative" | "list" | "header" | "footer";
}

export interface DetectedField {
  name: string;
  aliases: string[];
  value: unknown;
  source: "table" | "text" | "metadata";
  confidence: number;
  rowIndex?: number;
}

export interface ParsedDocumentData {
  documentId: string;
  organizationId: string;
  sector: Sector | null;
  businessModel: BusinessModel | null;
  extractedAt: Date;
  tables: ParsedTable[];
  sections: ParsedSection[];
  detectedFields: DetectedField[];
  rawData: Record<string, unknown>[];
  metadata: {
    pages: number;
    elements: number;
    tables: number;
    extractionTimeMs: number;
  };
  warnings: string[];
  errors: string[];
}

export interface DataExtractionOptions {
  strategy?: ExtractionStrategy;
  detectSector?: boolean;
  extractTables?: boolean;
  extractText?: boolean;
  minTableRows?: number;
  dateFormat?: string;
  currencyLocale?: string;
}

const DEFAULT_OPTIONS: Required<DataExtractionOptions> = {
  strategy: "auto",
  detectSector: true,
  extractTables: true,
  extractText: true,
  minTableRows: 2,
  dateFormat: "pt-BR",
  currencyLocale: "pt-BR",
};

export class DataExtractionParser {
  private options: Required<DataExtractionOptions>;
  private elementIndex: Map<number, UnstructuredElement> = new Map();

  constructor(options: DataExtractionOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  async parse(
    elements: UnstructuredElement[],
    documentId: string,
    organizationId: string,
  ): Promise<ParsedDocumentData> {
    const startTime = Date.now();
    const warnings: string[] = [];
    const errors: string[] = [];

    this.elementIndex.clear();
    elements.forEach((el, idx) => this.elementIndex.set(idx, el));

    const tables = this.options.extractTables
      ? this.extractTables(elements)
      : [];

    const sections = this.options.extractText
      ? this.extractSections(elements)
      : [];

    const detectedFields = this.detectFields(tables, sections);

    const rawData = this.buildRawData(tables, detectedFields);

    const sector = this.options.detectSector
      ? this.detectSector(detectedFields, rawData)
      : null;

    const businessModel = this.detectBusinessModel(detectedFields);

    if (detectedFields.length === 0) {
      warnings.push("Nenhum campo estruturado detectado nos dados");
    }

    if (tables.length === 0 && sections.length === 0) {
      errors.push("Nenhum conteúdo válido extraído do documento");
    }

    return {
      documentId,
      organizationId,
      sector,
      businessModel,
      extractedAt: new Date(),
      tables,
      sections,
      detectedFields,
      rawData,
      metadata: {
        pages: Math.max(...elements.map((e) => e.metadata.page_number || 1), 1),
        elements: elements.length,
        tables: tables.length,
        extractionTimeMs: Date.now() - startTime,
      },
      warnings,
      errors,
    };
  }

  private extractTables(elements: UnstructuredElement[]): ParsedTable[] {
    const tables: ParsedTable[] = [];

    for (const element of elements) {
      if (element.type === "Table") {
        try {
          const table = this.parseTableElement(element);
          if (table.rows.length >= this.options.minTableRows) {
            tables.push(table);
          }
        } catch (error) {
          console.warn("Failed to parse table:", error);
        }
      }
    }

    return tables;
  }

  private parseTableElement(element: UnstructuredElement): ParsedTable {
    const pageNumber = element.metadata.page_number;
    let headers: string[] = [];
    let rows: Record<string, unknown>[] = [];

    if (element.metadata.table_as_json) {
      try {
        const tableData = JSON.parse(element.metadata.table_as_json);
        if (Array.isArray(tableData) && tableData.length > 0) {
          headers = Object.keys(tableData[0]);
          rows = tableData;
        }
      } catch {
        const lines = element.text.split("\n").filter((l) => l.trim());
        if (lines.length > 1) {
          headers = this.parseRow(lines[0]);
          for (let i = 1; i < lines.length; i++) {
            const values = this.parseRow(lines[i]);
            const row: Record<string, unknown> = {};
            headers.forEach((h, idx) => {
              row[h] = this.normalizeValue(values[idx] || "", h);
            });
            rows.push(row);
          }
        }
      }
    } else {
      const lines = element.text.split("\n").filter((l) => l.trim());
      if (lines.length > 1) {
        headers = this.parseRow(lines[0]);
        for (let i = 1; i < lines.length; i++) {
          const values = this.parseRow(lines[i]);
          const row: Record<string, unknown> = {};
          headers.forEach((h, idx) => {
            row[h] = this.normalizeValue(values[idx] || "", h);
          });
          rows.push(row);
        }
      }
    }

    const confidence = this.calculateTableConfidence(headers, rows);

    return { headers, rows, pageNumber, confidence };
  }

  private parseRow(line: string): string[] {
    const values: string[] = [];
    let current = "";
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if ((char === ";" || char === "\t" || char === ",") && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    return values;
  }

  private extractSections(elements: UnstructuredElement[]): ParsedSection[] {
    const sections: ParsedSection[] = [];

    for (const element of elements) {
      const section = this.elementToSection(element);
      if (section) {
        sections.push(section);
      }
    }

    return sections;
  }

  private elementToSection(element: UnstructuredElement): ParsedSection | null {
    if (!element.text || element.text.trim().length === 0) {
      return null;
    }

    const typeMap: Record<string, ParsedSection["type"]> = {
      Title: "title",
      NarrativeText: "narrative",
      ListItem: "list",
      Header: "header",
      Footer: "footer",
    };

    return {
      title: element.text.substring(0, 100),
      content: element.text,
      pageNumber: element.metadata.page_number,
      type: typeMap[element.type] || "narrative",
    };
  }

  private detectFields(
    tables: ParsedTable[],
    sections: ParsedSection[],
  ): DetectedField[] {
    const fields: DetectedField[] = [];
    const allFields = [...COMMON_FIELDS];

    for (const table of tables) {
      for (const header of table.headers) {
        const normalizedHeader = this.normalizeKey(header);

        for (const field of allFields) {
          const normalizedField = this.normalizeKey(field.name);

          if (
            normalizedHeader.includes(normalizedField) ||
            normalizedField.includes(normalizedHeader) ||
            field.aliases.some((a) =>
              this.normalizeKey(a).includes(normalizedHeader),
            )
          ) {
            const firstRowValue = table.rows[0]?.[header];

            fields.push({
              name: field.name,
              aliases: field.aliases,
              value: firstRowValue,
              source: "table",
              confidence: table.confidence,
              rowIndex: 0,
            });
          }
        }
      }
    }

    const uniqueFields = new Map<string, DetectedField>();
    for (const field of fields) {
      if (!uniqueFields.has(field.name)) {
        uniqueFields.set(field.name, field);
      }
    }

    return Array.from(uniqueFields.values());
  }

  private buildRawData(
    tables: ParsedTable[],
    detectedFields: DetectedField[],
  ): Record<string, unknown>[] {
    if (tables.length === 0) {
      return [];
    }

    const rawData: Record<string, unknown>[] = [];

    for (const table of tables) {
      for (const row of table.rows) {
        const normalizedRow: Record<string, unknown> = {};

        for (const [key, value] of Object.entries(row)) {
          const normalizedKey = this.normalizeKey(key);
          normalizedRow[normalizedKey] = value;
        }

        rawData.push(normalizedRow);
      }
    }

    return rawData;
  }

  private detectSector(
    detectedFields: DetectedField[],
    rawData: Record<string, unknown>[],
  ): Sector | null {
    const sectorIndicators: Record<Sector, string[]> = {
      technology: [
        "mrr",
        "arr",
        "churn",
        "cac",
        "ltv",
        "arpu",
        "subscribers",
        "arpu",
        "sessions",
      ],
      retail: [
        "revenue",
        "sales",
        "orders",
        "products",
        "inventory",
        "margin",
        "atv",
        "conversion",
      ],
      healthcare: [
        "patients",
        "appointments",
        "treatments",
        "beds",
        "occupancy",
        "revenue",
        "costs",
      ],
      manufacturing: [
        "production",
        "units",
        "efficiency",
        "inventory",
        "materials",
        "quality",
        "defects",
      ],
      services: [
        "hours",
        "projects",
        "clients",
        "utilization",
        "tickets",
        "resolution",
        "billable",
      ],
      finance: [
        "revenue",
        "loans",
        "interest",
        "deposits",
        "assets",
        "npl",
        "nim",
        "roe",
      ],
      food: [
        "revenue",
        "orders",
        "customers",
        "tickets",
        "tables",
        "covers",
        "inventory",
      ],
      logistics: [
        "shipments",
        "deliveries",
        "routes",
        "vehicles",
        "fuel",
        "cost",
        "ontime",
      ],
      construction: [
        "projects",
        "budget",
        "costs",
        "revenue",
        "progress",
        "resources",
        "contracts",
      ],
      education: [
        "students",
        "enrollment",
        "courses",
        "teachers",
        "attendance",
        "completion",
      ],
      real_estate: [
        "properties",
        "occupancy",
        "rent",
        "revenue",
        "costs",
        "tenants",
        "leases",
      ],
      media: [
        "views",
        "subscribers",
        "engagement",
        "ad_revenue",
        "sessions",
        "impressions",
      ],
    };

    const fieldKeys = new Set(
      detectedFields.map((f) => this.normalizeKey(f.name)),
    );

    const scores: Record<Sector, number> = {
      technology: 0,
      retail: 0,
      healthcare: 0,
      manufacturing: 0,
      services: 0,
      finance: 0,
      food: 0,
      logistics: 0,
      construction: 0,
      education: 0,
      real_estate: 0,
      media: 0,
    };

    for (const [sector, indicators] of Object.entries(sectorIndicators)) {
      for (const indicator of indicators) {
        for (const fieldKey of fieldKeys) {
          if (fieldKey.includes(indicator)) {
            scores[sector as Sector] += 1;
          }
        }
      }
    }

    let bestSector: Sector | null = null;
    let bestScore = 0;

    for (const [sector, score] of Object.entries(scores)) {
      if (score > bestScore) {
        bestScore = score;
        bestSector = sector as Sector;
      }
    }

    return bestScore > 0 ? bestSector : null;
  }

  private detectBusinessModel(
    detectedFields: DetectedField[],
  ): BusinessModel | null {
    const fieldNames = detectedFields.map((f) => this.normalizeKey(f.name));

    if (
      fieldNames.some(
        (f) =>
          f.includes("subscription") || f.includes("mrr") || f.includes("arr"),
      )
    ) {
      return "subscription";
    }

    if (
      fieldNames.some(
        (f) =>
          f.includes("transaction") ||
          f.includes("order") ||
          f.includes("sale"),
      )
    ) {
      return "transaction";
    }

    if (
      fieldNames.some((f) => f.includes("marketplace") || f.includes("seller"))
    ) {
      return "marketplace";
    }

    if (fieldNames.some((f) => f.includes("b2b") || f.includes("enterprise"))) {
      return "b2b";
    }

    if (fieldNames.some((f) => f.includes("b2c") || f.includes("consumer"))) {
      return "b2c";
    }

    return null;
  }

  private normalizeKey(key: string): string {
    return key
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "")
      .trim();
  }

  private normalizeValue(value: unknown, header: string): unknown {
    if (value === null || value === undefined) {
      return null;
    }

    const strValue = String(value).trim();

    if (strValue === "" || strValue === "-" || strValue === "0") {
      return null;
    }

    const normalizedHeader = this.normalizeKey(header);

    if (
      normalizedHeader.includes("date") ||
      normalizedHeader.includes("data") ||
      normalizedHeader.includes("period")
    ) {
      const parsed = this.parseDate(strValue);
      if (parsed) return parsed;
    }

    if (
      normalizedHeader.includes("value") ||
      normalizedHeader.includes("amount") ||
      normalizedHeader.includes("revenue") ||
      normalizedHeader.includes("cost") ||
      normalizedHeader.includes("price") ||
      normalizedHeader.includes("balance")
    ) {
      const parsed = this.parseCurrency(strValue);
      if (parsed !== null) return parsed;
    }

    if (
      normalizedHeader.includes("percent") ||
      normalizedHeader.includes("rate") ||
      normalizedHeader.includes("margin")
    ) {
      const parsed = this.parsePercent(strValue);
      if (parsed !== null) return parsed;
    }

    const num = Number(strValue.replace(/[^0-9.-]/g, ""));
    if (!isNaN(num) && isFinite(num)) {
      return num;
    }

    return strValue;
  }

  private parseDate(value: string): Date | null {
    const formats = [
      /^(\d{2})\/(\d{2})\/(\d{4})$/,
      /^(\d{2})-(\d{2})-(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
      /^(\d{2})\/(\d{2})\/(\d{2})$/,
    ];

    for (const format of formats) {
      const match = value.match(format);
      if (match) {
        try {
          let year: number, month: number, day: number;

          if (format.source.startsWith("^(\\d{4})")) {
            [, year, month, day] = match.map(Number) as [
              unknown,
              number,
              number,
              number,
            ];
          } else if (
            format.source.startsWith("^(\\d{2})\\/(\\d{2})\\/(\\d{2})")
          ) {
            [, day, month, year] = match.map(Number) as [
              unknown,
              number,
              number,
              number,
            ];
            year = year < 50 ? 2000 + year : 1900 + year;
          } else {
            [, day, month, year] = match.map(Number) as [
              unknown,
              number,
              number,
              number,
            ];
          }

          const date = new Date(year, month - 1, day);
          if (!isNaN(date.getTime())) {
            return date;
          }
        } catch {
          continue;
        }
      }
    }

    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return date;
    }

    return null;
  }

  private parseCurrency(value: string): number | null {
    const cleaned = value
      .replace(/[^0-9.,-]/g, "")
      .replace(/(\d),(\d{3})/g, "$1$2")
      .replace(/(\d),(\d{2})$/g, ".$1");

    const num = Number(cleaned);
    return isFinite(num) ? num : null;
  }

  private parsePercent(value: string): number | null {
    const match = value.replace(",", ".").match(/([0-9.]+)/);
    if (match) {
      const num = Number(match[1]);
      if (value.includes("%")) {
        return isFinite(num) ? num : null;
      }
      return isFinite(num) ? num : null;
    }
    return null;
  }

  private calculateTableConfidence(
    headers: string[],
    rows: Record<string, unknown>[],
  ): number {
    if (headers.length === 0 || rows.length === 0) return 0;

    const filledCells = rows.reduce((count, row) => {
      return (
        count + Object.values(row).filter((v) => v !== null && v !== "").length
      );
    }, 0);

    const totalCells = headers.length * rows.length;
    return totalCells > 0 ? filledCells / totalCells : 0;
  }
}

export const createDataExtractionParser = (
  options?: DataExtractionOptions,
): DataExtractionParser => {
  return new DataExtractionParser(options);
};
