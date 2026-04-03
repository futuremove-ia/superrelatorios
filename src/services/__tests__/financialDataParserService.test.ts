import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  parseFinancialData,
  FinancialDataParserService,
  createFinancialParser,
} from "../financialDataParserService";
import type {
  FinancialUploadOptions,
  FinancialDocumentType,
} from "@/types/financial-parser";

describe("FinancialDataParserService", () => {
  let parser: FinancialDataParserService;

  const defaultOptions: FinancialUploadOptions = {
    organizationId: "org-123",
    userId: "user-456",
    autoMapColumns: true,
  };

  beforeEach(() => {
    parser = createFinancialParser(defaultOptions);
  });

  describe("Detecção de Tipo de Documento", () => {
    it("should detect bank_statement from bank extract format", async () => {
      const csvContent = `Data,Descrição,Valor,Saldo
2024-01-15,Transferência,-500,1000
2024-01-16,Salário,5000,6000`;

      const file = new File([csvContent], "extrato.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.documentType).toBe("bank_statement");
    });

    it("should detect dre (Demonstração de Resultados)", async () => {
      const csvContent = `Período,Receita,Despesa,Lucro
2024-01,100000,80000,20000
2024-02,120000,85000,35000`;

      const file = new File([csvContent], "dre.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.documentType).toBe("dre");
    });

    it("should detect cash_flow", async () => {
      const csvContent = `Data,Entrada,Saída,Saldo
2024-01-01,10000,0,10000
2024-01-02,5000,3000,12000`;

      const file = new File([csvContent], "fluxo_caixa.csv", {
        type: "text/csv",
      });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.documentType).toBe("cash_flow");
    });

    it("should return unknown for unrecognized format", async () => {
      const csvContent = `Coluna A,Coluna B,Coluna C
Valor 1,Valor 2,Valor 3`;

      const file = new File([csvContent], "desconhecido.csv", {
        type: "text/csv",
      });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.documentType).toBe("unknown");
    });
  });

  describe("Parsing de Valores", () => {
    it("should parse Brazilian currency format (R$ 1.000,00)", async () => {
      const csvContent = `Valor
R$ 1.000,00
R$ 2.500,50`;

      const file = new File([csvContent], "values.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.rawData[0].Valor).toBe(1000);
    });

    it("should handle negative values in parentheses (100)", async () => {
      const csvContent = `Valor
(500)
100`;

      const file = new File([csvContent], "negative.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.rawData[0].Valor).toBe(-500);
    });

    it("should handle plain numbers", async () => {
      const csvContent = `Valor
1000
-500
2500.50`;

      const file = new File([csvContent], "plain.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.rawData[0].Valor).toBe(1000);
      expect(result.data?.rawData[1].Valor).toBe(-500);
    });
  });

  describe("Parsing de Datas", () => {
    it("should parse DD/MM/YYYY format", async () => {
      const csvContent = `Data,Valor
15/01/2024,1000
28/02/2024,2000`;

      const file = new File([csvContent], "date.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.rawData[0].Data).toBeInstanceOf(Date);
      expect((result.data?.rawData[0].Data as Date)?.getFullYear()).toBe(2024);
    });

    it("should parse YYYY-MM-DD format", async () => {
      const csvContent = `Data,Valor
2024-01-15,1000
2024-02-28,2000`;

      const file = new File([csvContent], "date_iso.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.rawData[0].Data).toBeInstanceOf(Date);
    });
  });

  describe("Mapeamento de Colunas para KPIs", () => {
    it("should map receita columns to revenue KPIs", async () => {
      const csvContent = `receita_mensal,despesa_mensal
10000,8000`;

      const file = new File([csvContent], "kpi_mapping.csv", {
        type: "text/csv",
      });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.metrics?.length).toBeGreaterThan(0);
      expect(result.metrics?.some((m) => m.kpiCode.includes("revenue"))).toBe(
        true,
      );
    });

    it("should map saldo_caixa to cash_balance", async () => {
      const csvContent = `saldo_caixa,conta_receber
50000,10000`;

      const file = new File([csvContent], "cash.csv", { type: "text/csv" });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.metrics?.some((m) => m.kpiCode === "cash_balance")).toBe(
        true,
      );
    });
  });

  describe("Edge Cases", () => {
    it("should handle empty file", async () => {
      const csvContent = "";
      const file = new File([csvContent], "empty.csv", { type: "text/csv" });

      const result = await parser.parse(file);

      expect(result.success).toBe(false);
      expect(result.errors[0]?.code).toBe("EMPTY_FILE");
    });

    it("should handle file with only headers", async () => {
      const csvContent = "Coluna A,Coluna B";
      const file = new File([csvContent], "headers_only.csv", {
        type: "text/csv",
      });

      const result = await parser.parse(file);

      expect(result.success).toBe(false);
      expect(result.errors[0]?.code).toBe("EMPTY_FILE");
    });

    it("should add warning for low confidence columns", async () => {
      const csvContent = `A,B,C,D,E,F
1,2,3,4,5,6`;

      const file = new File([csvContent], "low_confidence.csv", {
        type: "text/csv",
      });
      const result = await parser.parse(file);

      expect(result.warnings.length).toBeGreaterThan(0);
    });

    it("should handle special characters in headers", async () => {
      const csvContent = `Receita (R$),Despesa - Janeiro,Saldo Final
1000,800,200`;

      const file = new File([csvContent], "special_chars.csv", {
        type: "text/csv",
      });
      const result = await parser.parse(file);

      expect(result.success).toBe(true);
      expect(result.data?.headers.length).toBe(3);
    });
  });

  describe("Text Input Parsing", () => {
    it("should parse CSV text input", async () => {
      const textInput = `Data,Valor
2024-01-01,1000
2024-01-02,2000`;

      const result = await parser.parse(textInput);

      expect(result.success).toBe(true);
      expect(result.data?.metadata.rowCount).toBe(2);
    });

    it("should handle tab-delimited text", async () => {
      const textInput = `Data\tValor
2024-01-01\t1000`;

      const result = await parser.parse(textInput);

      expect(result.success).toBe(true);
    });
  });
});

describe("FinancialDataParserService - Integration with Unstructured", () => {
  it("should process table data from Unstructured elements", async () => {
    const csvContent = `Data,Descrição,Valor
2024-01-01,Teste,100`;

    const file = new File([csvContent], "test.csv", { type: "text/csv" });
    const parser = createFinancialParser({
      organizationId: "org-123",
      userId: "user-456",
      autoMapColumns: true,
    });

    const result = await parser.parse(file);

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
