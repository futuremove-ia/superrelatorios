import {
  parseFile,
  parseTextInput,
  type ParsedFileData,
} from "./fileParserService";
import type {
  FinancialDocumentType,
  ParsedFinancialData,
  DetectedColumn,
  KPIMapping,
  FinancialMetric,
  ParsingResult,
  ParsingError,
  ColumnMapping,
  FinancialUploadOptions,
  ParsingProgress,
  FinancialRow,
} from "@/types/financial-parser";

const COLUMN_PATTERNS = {
  bank_statement: {
    date: /data|date|dt|transação|transaction|movimento/i,
    description: /descrição|description|historico|narrative|memo|details/i,
    amount: /valor|amount|value|quantia|credito|debit|credit|debited/i,
    balance: /saldo|balance|balance/i,
    category: /categoria|category| tipo|type/i,
    reference: /documento|document|cheque|doc|récibo|reference/i,
  },
  dre: {
    revenue: /receita|revenue|sales|vendas|faturamento|receita_bruta/i,
    expense: /despesa|expense|cost|custo|gasto/i,
    grossProfit: /lucro_bruto|gross_profit|bruto/i,
    netProfit: /lucro_líquido|net_profit|líquido|lucro/i,
    ebitda: /ebitda|lair|lucro_antes_impostos/i,
    period: /período|period|month|mês|ano|year/i,
  },
  cash_flow: {
    date: /data|date|dt/i,
    inflow: /entrada|receita|inflow|cash_in|credit/i,
    outflow: /saída|despesa|outflow|cash_out|debit/i,
    balance: /saldo|balance/i,
    description: /descrição|description|histo/i,
    category: /categoria|category/i,
  },
};

const KPI_PATTERNS: Record<string, RegExp[]> = {
  revenue_monthly: [/receita.*mês|vendas.*mês|receita.*mensal/i],
  revenue_total: [/receita_total|receita_bruta|faturamento_total/i],
  expense_monthly: [/despesa.*mês|custo.*mês|gasto.*mensal/i],
  expense_total: [/despesa_total|custo_total|gasto_total/i],
  gross_margin: [/margem_bruta|lucro_bruto.*margem/i],
  net_margin: [/margem_líquida|lucro_liquido.*margem/i],
  ebitda: [/ebitda|lucro_antes_impostos/i],
  cash_balance: [/saldo_caixa|saldo_bancário|saldo/i],
  accounts_receivable: [/contas_receber|clientes|debtors/i],
  accounts_payable: [/contas_pagar|fornecedores|creditors/i],
  current_ratio: [/liquidez_corrente|current_ratio/i],
  quick_ratio: [/liquidez_seca|quick_ratio/i],
  debt_to_equity: [/endividamento|divida_equity|leverage/i],
};

const DATE_FORMATS = [
  "DD/MM/YYYY",
  "DD-MM-YYYY",
  "YYYY-MM-DD",
  "MM/DD/YYYY",
  "YYYY/MM/DD",
  "DD.MM.YYYY",
  "D/M/YYYY",
  "M/D/YYYY",
];

const AMOUNT_PATTERNS = [
  /R\$\s*[\d.,]+/,
  /[\d.,]+\s*R\$/,
  /[\d.,]+/,
  /-?[\d.,]+/,
];

function detectColumnType(
  columnName: string,
  sampleValues: (string | number | null | unknown)[],
): DetectedColumn["type"] {
  const name = columnName.toLowerCase();

  if (COLUMN_PATTERNS.bank_statement.date.test(name)) return "date";
  if (COLUMN_PATTERNS.bank_statement.amount.test(name)) return "amount";
  if (COLUMN_PATTERNS.bank_statement.description.test(name))
    return "description";
  if (COLUMN_PATTERNS.bank_statement.category.test(name)) return "category";
  if (COLUMN_PATTERNS.bank_statement.balance.test(name)) return "amount";
  if (COLUMN_PATTERNS.dre.revenue.test(name)) return "amount";
  if (COLUMN_PATTERNS.dre.expense.test(name)) return "amount";
  if (COLUMN_PATTERNS.cash_flow.inflow.test(name)) return "amount";
  if (COLUMN_PATTERNS.cash_flow.outflow.test(name)) return "amount";

  const nonNullValues = sampleValues.filter(
    (v) => v !== null && v !== undefined && v !== "",
  );

  if (nonNullValues.length === 0) return "unknown";

  const dateCount = nonNullValues.filter((v) => {
    const str = String(v);
    return (
      DATE_FORMATS.some((f) => {
        if (f.includes("DD") && /^\d{2}[/.-]\d{2}[/.-]\d{2,4}$/.test(str))
          return true;
        if (f.includes("YYYY") && /^\d{4}[/.-]\d{2}[/.-]\d{2}$/.test(str))
          return true;
        return false;
      }) || !isNaN(Date.parse(str))
    );
  }).length;

  if (dateCount / nonNullValues.length > 0.7) return "date";

  const numberCount = nonNullValues.filter((v) => {
    const str = String(v).replace(/[R$\s.,]/g, "");
    return !isNaN(parseFloat(str)) && isFinite(Number(str));
  }).length;

  if (numberCount / nonNullValues.length > 0.7) return "amount";

  return "unknown";
}

function calculateColumnConfidence(
  columnName: string,
  detectedType: DetectedColumn["type"],
): number {
  const name = columnName.toLowerCase();
  let confidence = 0.3;

  const patterns = COLUMN_PATTERNS.bank_statement as Record<string, RegExp>;
  for (const pattern of Object.values(patterns)) {
    if (pattern.test(name)) {
      confidence += 0.2;
      break;
    }
  }

  if (detectedType === "date") confidence = Math.min(confidence + 0.3, 1);
  if (detectedType === "amount") confidence = Math.min(confidence + 0.25, 1);

  return confidence;
}

function mapColumnToKPIs(
  columnName: string,
  columnType: DetectedColumn["type"],
): KPIMapping[] {
  const mappings: KPIMapping[] = [];
  const name = columnName.toLowerCase();

  if (columnType !== "amount" && columnType !== "unknown") {
    return mappings;
  }

  for (const [kpiCode, patterns] of Object.entries(KPI_PATTERNS)) {
    if (patterns.some((p) => p.test(name))) {
      let category: KPIMapping["category"] = "revenue";
      if (kpiCode.includes("expense")) category = "expense";
      else if (kpiCode.includes("profit") || kpiCode.includes("margin"))
        category = "profit";
      else if (kpiCode.includes("cash") || kpiCode.includes("liquidity"))
        category = "liquidity";
      else if (kpiCode.includes("debt") || kpiCode.includes("solvency"))
        category = "solvency";

      mappings.push({
        kpiCode,
        kpiName: kpiCode.replace(/_/g, " "),
        confidence: 0.7,
        category,
      });
    }
  }

  return mappings;
}

function detectDocumentType(
  headers: string[],
  sampleRows: FinancialRow[],
): FinancialDocumentType {
  const headerStr = headers.join(" ").toLowerCase();

  const hasDate = headers.some((h) =>
    COLUMN_PATTERNS.bank_statement.date.test(h),
  );
  const hasAmount = headers.some((h) =>
    COLUMN_PATTERNS.bank_statement.amount.test(h),
  );
  const hasDescription = headers.some((h) =>
    COLUMN_PATTERNS.bank_statement.description.test(h),
  );

  if (hasDate && hasAmount && hasDescription) {
    const hasNegativeAmounts = sampleRows.some((row: FinancialRow) => {
      const amountValues = Object.values(row).filter(
        (v) =>
          typeof v === "string" &&
          (v.includes("-") || v.toLowerCase().includes("d")),
      );
      return amountValues.length > 0;
    });

    if (
      hasNegativeAmounts ||
      headerStr.includes("extrato") ||
      headerStr.includes("conta")
    )
      return "bank_statement";
  }

  if (
    headerStr.includes("receita") ||
    headerStr.includes("despesa") ||
    headerStr.includes("lucro") ||
    headerStr.includes("dre") ||
    headerStr.includes("resultado")
  ) {
    if (headerStr.includes("receita") && !headerStr.includes("caixa"))
      return "dre";
  }

  if (
    headerStr.includes("caixa") ||
    headerStr.includes("cash_flow") ||
    headerStr.includes("fluxo") ||
    (headerStr.includes("entrada") && headerStr.includes("saída")) ||
    (headerStr.includes("inflow") && headerStr.includes("outflow"))
  ) {
    return "cash_flow";
  }

  if (
    headerStr.includes("ativo") ||
    headerStr.includes("passivo") ||
    headerStr.includes("balanço")
  ) {
    return "balance_sheet";
  }

  return "unknown";
}

function parseDate(
  value: string | number | Date | null | unknown,
): Date | null {
  if (!value) return null;

  const str = String(value).trim();

  for (const format of DATE_FORMATS) {
    try {
      const parts = str.match(/(\d+)[/.-](\d+)[/.-](\d+)/);
      if (!parts) continue;

      let day: number, month: number, year: number;

      if (format.startsWith("DD")) {
        day = parseInt(parts[1]);
        month = parseInt(parts[2]);
        year = parseInt(parts[3]);
      } else {
        month = parseInt(parts[1]);
        day = parseInt(parts[2]);
        year = parseInt(parts[3]);
      }

      if (year < 100) year += 2000;

      const date = new Date(year, month - 1, day);
      if (!isNaN(date.getTime())) return date;
    } catch {
      continue;
    }
  }

  const parsed = Date.parse(str);
  return isNaN(parsed) ? null : new Date(parsed);
}

function parseAmount(
  value: string | number | Date | null | unknown,
): number | null {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return isFinite(value) ? value : null;

  const str = String(value).trim();

  const cleaned = str
    .replace(/R\$\s*/gi, "")
    .replace(/[.\s]/g, "")
    .replace(",", ".");

  const negated = cleaned.startsWith("(") && cleaned.endsWith(")");
  const numStr = negated ? "-" + cleaned.slice(1, -1) : cleaned;

  const parsed = parseFloat(numStr);
  return isFinite(parsed) ? parsed : null;
}

function detectPeriod(
  headers: string[],
  rows: FinancialRow[],
): string | undefined {
  for (const header of headers) {
    if (COLUMN_PATTERNS.dre.period.test(header)) {
      for (const row of rows) {
        const periodValue = row[header];
        if (periodValue) {
          const date = parseDate(periodValue);
          if (date) {
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
          }
          const str = String(periodValue);
          if (/^\d{4}-\d{2}$/.test(str)) return str;
          if (/^\d{2}\/\d{4}$/.test(str)) {
            const [month, year] = str.split("/");
            return `${year}-${month}`;
          }
        }
      }
    }
  }
  return undefined;
}

function extractMetrics(
  data: ParsedFinancialData,
  mapping: ColumnMapping[],
): FinancialMetric[] {
  const metrics: FinancialMetric[] = [];

  for (const colMapping of mapping) {
    const sourceCol = data.headers.find(
      (h) => h.toLowerCase() === colMapping.sourceColumn.toLowerCase(),
    );

    if (!sourceCol) continue;

    for (const row of data.rawData) {
      const value = parseAmount(
        row[sourceCol] as string | number | null | unknown,
      );

      if (value === null) continue;

      let finalValue = value;
      switch (colMapping.transformation) {
        case "negate":
          finalValue = -value;
          break;
        case "abs":
          finalValue = Math.abs(value);
          break;
        case "percentage":
          finalValue = value / 100;
          break;
        default:
          break;
      }

      metrics.push({
        kpiCode: colMapping.targetKPI,
        value: finalValue,
        period: data.metadata.period || "current",
        confidence: 0.8,
      });
    }
  }

  return metrics;
}

function generateDefaultMapping(data: ParsedFinancialData): ColumnMapping[] {
  const mapping: ColumnMapping[] = [];

  for (const col of data.detectedColumns) {
    if (col.type === "amount" && col.possibleMappings.length > 0) {
      mapping.push({
        sourceColumn: col.name,
        targetKPI: col.possibleMappings[0].kpiCode,
      });
    }
  }

  return mapping;
}

export class FinancialDataParserService {
  private options: FinancialUploadOptions;

  constructor(options: FinancialUploadOptions) {
    this.options = {
      autoMapColumns: true,
      ...options,
    };
  }

  async parse(fileOrText: File | string): Promise<ParsingResult> {
    try {
      let parsedFile: ParsedFileData;

      if (typeof fileOrText === "string") {
        parsedFile = parseTextInput(fileOrText);
      } else {
        parsedFile = await parseFile(fileOrText);
      }

      if (parsedFile.rows.length === 0) {
        return {
          success: false,
          errors: [
            {
              code: "EMPTY_FILE",
              message: "O arquivo não contém dados ou está vazio",
            },
          ],
          warnings: [],
        };
      }

      const financialData = await this.processFinancialData(parsedFile);

      let mapping: ColumnMapping[] = [];
      let metrics: FinancialMetric[] = [];

      if (this.options.autoMapColumns) {
        mapping = generateDefaultMapping(financialData);
        metrics = extractMetrics(financialData, mapping);
      }

      if (
        financialData.documentType === "unknown" &&
        financialData.warnings.length === 0
      ) {
        financialData.warnings.push(
          "Não foi possível identificar automaticamente o tipo de documento. Os dados foram processados como planilha genérica.",
        );
      }

      return {
        success: true,
        data: financialData,
        metrics,
        errors: [],
        warnings: financialData.warnings,
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      return {
        success: false,
        errors: [
          {
            code: "PARSE_ERROR",
            message: `Falha ao processar arquivo: ${message}`,
          },
        ],
        warnings: [],
      };
    }
  }

  private async processFinancialData(
    parsed: ParsedFileData,
  ): Promise<ParsedFinancialData> {
    const warnings: string[] = [];
    const headers = parsed.headers;
    const sampleRows = parsed.rows.slice(0, 10);

    const detectedColumns: DetectedColumn[] = headers.map((name, index) => {
      const sampleValues = sampleRows.map((row) => row[name]);
      const type = detectColumnType(name, sampleValues);
      const confidence = calculateColumnConfidence(name, type);
      const possibleMappings = mapColumnToKPIs(name, type);

      return { name, index, type, confidence, possibleMappings };
    });

    const documentType = detectDocumentType(headers, sampleRows);

    if (documentType === "unknown") {
      const lowConfidenceCols = detectedColumns.filter(
        (c) => c.confidence < 0.5,
      );
      if (lowConfidenceCols.length > headers.length * 0.5) {
        warnings.push(
          "Colunas com baixa confiança detectadas. Considere revisar o mapeamento manual.",
        );
      }
    }

    const period = detectPeriod(headers, parsed.rows);

    const processedRows: FinancialRow[] = parsed.rows.map((row) => {
      const processed: FinancialRow = {};
      for (const [key, value] of Object.entries(row)) {
        const col = detectedColumns.find((c) => c.name === key);
        if (!col) {
          processed[key] = value as string | number | Date | null;
          continue;
        }

        switch (col.type) {
          case "date":
            processed[key] = parseDate(value);
            break;
          case "amount":
            processed[key] = parseAmount(value);
            break;
          default:
            processed[key] = value as string | number | Date | null;
        }
      }
      return processed;
    });

    return {
      documentType,
      rawData: processedRows,
      headers,
      detectedColumns,
      warnings,
      metadata: {
        period,
        rowCount: parsed.rowCount,
      },
    };
  }

  getProgressCallback(): (progress: ParsingProgress) => void {
    return (progress: ParsingProgress) => {
      this.options.onProgress?.(progress.progress);
    };
  }
}

export function createFinancialParser(
  options: FinancialUploadOptions,
): FinancialDataParserService {
  return new FinancialDataParserService(options);
}

export function parseFinancialData(
  fileOrText: File | string,
  options: FinancialUploadOptions,
): Promise<ParsingResult> {
  const parser = new FinancialDataParserService(options);
  return parser.parse(fileOrText);
}
