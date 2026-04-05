import { describe, it, expect, beforeEach } from "vitest";
import {
  DataPipelineService,
  createDataPipeline,
} from "../dataPipelineService";
import type { ParsedFileData } from "../fileParserService";

const createMockParsedFile = (
  headers: string[],
  rows: any[],
  fileType: ParsedFileData["fileType"],
): ParsedFileData => ({
  headers,
  rows,
  rowCount: rows.length,
  fileType,
});

describe("DataPipelineService", () => {
  let pipeline: DataPipelineService;

  beforeEach(() => {
    pipeline = createDataPipeline({
      autoMapColumns: true,
      fallbackToUnstructured: true,
    });
  });

  describe("processParsedData", () => {
    it("should process structured data and detect finance domain", async () => {
      const parsedFile = createMockParsedFile(
        ["data", "descricao", "valor", "credito", "debito", "saldo"],
        [
          {
            data: "01/01/2024",
            descricao: "Venda",
            valor: "1000",
            credito: "1000",
            debito: "0",
            saldo: "5000",
          },
          {
            data: "02/01/2024",
            descricao: "Despesa",
            valor: "500",
            credito: "0",
            debito: "500",
            saldo: "4500",
          },
        ],
        "csv",
      );

      const result = await pipeline.processParsedData(parsedFile);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("finance");
    });

    it("should process commercial data", async () => {
      const parsedFile = createMockParsedFile(
        ["cliente", "venda", "produto", "ticket"],
        [
          {
            cliente: "Empresa A",
            venda: "10000",
            produto: "SaaS",
            ticket: "10000",
          },
          {
            cliente: "Empresa B",
            venda: "5000",
            produto: "Consultoria",
            ticket: "5000",
          },
        ],
        "csv",
      );

      const result = await pipeline.processParsedData(parsedFile);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("commercial");
    });

    it("should process marketing data", async () => {
      const parsedFile = createMockParsedFile(
        ["campanha", "cliques", "impressoes", "custo"],
        [
          {
            campanha: "Black Friday",
            cliques: "1000",
            impressoes: "50000",
            custo: "500",
          },
        ],
        "xlsx",
      );

      const result = await pipeline.processParsedData(parsedFile);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("marketing");
    });

    it("should process operations data", async () => {
      const parsedFile = createMockParsedFile(
        ["produtividade", "eficiencia", "defeitos", "capacidade"],
        [
          {
            produtividade: "85",
            eficiencia: "90",
            defeitos: "5",
            capacidade: "100",
          },
        ],
        "xlsx",
      );

      const result = await pipeline.processParsedData(parsedFile);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("operations");
    });

    it("should process people data", async () => {
      const parsedFile = createMockParsedFile(
        ["funcionario", "turnover", "headcount", "folha"],
        [
          {
            funcionario: "100",
            turnover: "10",
            headcount: "100",
            folha: "500000",
          },
        ],
        "csv",
      );

      const result = await pipeline.processParsedData(parsedFile);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("people");
    });

    it("should return error for empty headers", async () => {
      const parsedFile = createMockParsedFile([], [], "csv");

      const result = await pipeline.processParsedData(parsedFile);
      expect(result.success).toBe(false);
      expect(result.errors[0]).toContain("No headers");
    });
  });

  describe("processCSV", () => {
    it("should parse CSV text and detect domain", async () => {
      const csv = `cliente,venda,produto
Empresa A,10000,SaaS
Empresa B,5000,Consultoria`;

      const result = await pipeline.processCSV(csv);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("commercial");
      expect(result.data?.headers).toContain("cliente");
    });

    it("should handle empty CSV", async () => {
      const result = await pipeline.processCSV("");
      expect(result.success).toBe(false);
    });
  });

  describe("processText", () => {
    it("should process text input and detect domain", async () => {
      const text = `data: 01/01/2024
valor: R$ 1.000,00
descricao: Venda de servico`;

      const result = await pipeline.processText(text);
      expect(result.success).toBe(true);
    });

    it("should handle empty text", async () => {
      const result = await pipeline.processText("");
      expect(result.success).toBe(false);
    });
  });

  describe("with blueprint context", () => {
    it("should use blueprint for domain inference when unknown", async () => {
      const parsedFile = createMockParsedFile(
        ["item_id", "nome_item", "preco_unitario"],
        [{ item_id: "001", nome_item: "Item", preco_unitario: "100" }],
        "csv",
      );

      const blueprint = { industry_sector: "retail" };
      const result = await pipeline.processParsedData(parsedFile, blueprint);
      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("commercial");
    });
  });
});
