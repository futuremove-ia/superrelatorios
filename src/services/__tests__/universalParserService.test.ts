import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  UniversalParserService,
  createUniversalParser,
} from "../universalParserService";
import type { Domain } from "@/types/financial-parser";

describe("UniversalParserService", () => {
  let parser: UniversalParserService;

  beforeEach(() => {
    parser = createUniversalParser({});
  });

  describe("parseData", () => {
    it("should parse commercial data and detect domain", async () => {
      const data = {
        headers: ["cliente", "venda", "produto", "ticket", "data"],
        rows: [
          {
            cliente: "Empresa A",
            venda: "1000",
            produto: "Servico",
            ticket: "1000",
            data: "2024-01",
          },
          {
            cliente: "Empresa B",
            venda: "2000",
            produto: "Produto",
            ticket: "2000",
            data: "2024-02",
          },
        ],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("commercial");
      expect(result.data?.detectedColumns.length).toBeGreaterThan(0);
    });

    it("should parse marketing data and detect domain", async () => {
      const data = {
        headers: ["campanha", "clique", "impressao", "custo", "lead"],
        rows: [
          {
            campanha: "Promo1",
            clique: "100",
            impressao: "10000",
            custo: "500",
            lead: "50",
          },
        ],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("marketing");
    });

    it("should parse operations data and detect domain", async () => {
      const data = {
        headers: ["produtividade", "eficiencia", "ciclo", "defeito"],
        rows: [
          { produtividade: "85", eficiencia: "90", ciclo: "5", defeito: "2" },
        ],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("operations");
    });

    it("should parse people data and detect domain", async () => {
      const data = {
        headers: ["funcionario", "turnover", "headcount", "folha"],
        rows: [
          {
            funcionario: "100",
            turnover: "5",
            headcount: "100",
            folha: "50000",
          },
        ],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("people");
    });

    it("should use blueprint context when domain is unknown", async () => {
      const data = {
        headers: ["codigo", "descricao", "referencia"],
        rows: [{ codigo: "1", descricao: "test", referencia: "ref" }],
      };
      const blueprint = { industry_sector: "retail" };

      const result = await parser.parseData(data, blueprint);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBeDefined();
    });

    it("should return error for empty headers", async () => {
      const data = {
        headers: [],
        rows: [{ foo: "1" }],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(false);
      expect(result.errors).toContain("No headers provided");
    });

    it("should return error for empty rows", async () => {
      const data = {
        headers: ["col1"],
        rows: [],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(false);
      expect(result.errors).toContain("No data rows provided");
    });

    it("should warn about unmapped columns", async () => {
      const data = {
        headers: ["foo", "bar", "baz"],
        rows: [{ foo: "1", bar: "2", baz: "3" }],
      };

      const result = await parser.parseData(data);

      expect(result.success).toBe(true);
      expect(result.warnings.length).toBeGreaterThan(0);
    });
  });

  describe("detectDomain", () => {
    it("should call domain detector with headers", () => {
      const headers = ["cliente", "venda"];
      const result = parser.detectDomain(headers, []);

      expect(result.domain).toBe("commercial");
    });
  });

  describe("fallback parsing", () => {
    it("should handle unstructured text input", async () => {
      const textInput = `
        Cliente: Empresa ABC
        Venda: 10000
        Data: 2024-01
        Ticket: 5000
      `;

      const result = await parser.parseTextInput(textInput);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("commercial");
    });

    it("should handle CSV text input", async () => {
      const csvInput = `cliente,venda,ticket
Empresa A,1000,500
Empresa B,2000,1000`;

      const result = await parser.parseCSVInput(csvInput);

      expect(result.success).toBe(true);
      expect(result.data?.domain).toBe("commercial");
    });

    it("should handle completely unstructured text", async () => {
      const textInput = `
        Oi, tudo bem? Preciso comprar 10 unidades
        Ok, vou te enviar o orçamento de R$ 5000
        Perfect! Vou confirmar com o cliente
        Data de entrega: 15/03/2024
      `;

      const result = await parser.parseUnstructuredText(textInput);

      expect(result.success).toBe(true);
    });

    it("should handle WhatsApp export format", async () => {
      const whatsappInput = `
        15/03/2024 14:30 - João: Preciso de 10 unidades
        15/03/2024 14:35 - Maria: Vou verificar o estoque
        15/03/2024 14:40 - Maria: Temos disponível! R$ 5000 total
        15/03/2024 14:45 - João: Perfeito, confirma a venda
      `;

      const result = await parser.parseUnstructuredText(whatsappInput);

      expect(result.success).toBe(true);
    });
  });
});
