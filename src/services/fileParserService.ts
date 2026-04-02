import Papa from "papaparse";
import * as XLSX from "xlsx";
import type { TextItem } from "pdfjs-dist/types/src/display/api";

export interface ParsedFileData {
  headers: string[];
  rows: Record<string, unknown>[];
  rowCount: number;
  fileType: "csv" | "xlsx" | "pdf" | "txt" | "json" | "docx" | "text";
  rawText?: string;
  source?: "file" | "text_input";
}

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

function sanitizeFileName(name: string): string {
  const sanitized = name
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_");
  return sanitized.length > 100 ? sanitized.substring(0, 100) : sanitized;
}

export const parseFile = (file: File): Promise<ParsedFileData> => {
  return new Promise((resolve, reject) => {
    // Validação de tamanho
    if (file.size > MAX_FILE_SIZE) {
      return reject(new Error("Arquivo muito grande. Máximo: 50MB"));
    }

    const extension = file.name.split(".").pop()?.toLowerCase();
    const SUPPORTED = ["csv", "xlsx", "xls", "pdf", "txt"];

    if (!SUPPORTED.includes(extension || "")) {
      return reject(
        new Error(`Formato não suportado. Use: ${SUPPORTED.join(", ")}`),
      );
    }

    if (extension === "pdf") {
      parsePDF(file).then(resolve).catch(reject);
    } else if (extension === "txt") {
      parseTXT(file).then(resolve).catch(reject);
    } else if (extension === "csv") {
      parseCSV(file).then(resolve).catch(reject);
    } else {
      parseXLSX(file).then(resolve).catch(reject);
    }
  });
};

async function parsePDF(file: File): Promise<ParsedFileData> {
  try {
    const pdfjsLib = await import("pdfjs-dist");
    const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker?url");
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.default;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const pages: string[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = (content.items as TextItem[])
        .filter((item) => item.str)
        .map((item) => item.str)
        .join(" ");
      pages.push(pageText);
    }

    const fullText = pages.join("\n\n");
    const rows = pages.map((text, index) => ({
      page: index + 1,
      content: text,
    }));

    return {
      headers: ["page", "content"],
      rows,
      rowCount: pages.length,
      fileType: "pdf",
      rawText: fullText,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";
    throw new Error(
      `Falha ao processar PDF: ${message}. O arquivo pode estar corrompido ou protegido.`,
    );
  }
}

async function parseTXT(file: File): Promise<ParsedFileData> {
  const text = await file.text();
  const lines = text.split("\n").filter((line) => line.trim());

  // Tentar detectar formato tabular (separado por tab, vírgula ou ponto e vírgula)
  const delimiter = lines[0]?.includes("\t")
    ? "\t"
    : lines[0]?.includes(";")
      ? ";"
      : ",";

  if (delimiter && lines.length > 0) {
    const headers = lines[0].split(delimiter).map((h) => h.trim());
    const rows = lines.slice(1).map((line) => {
      const values = line.split(delimiter);
      const row: Record<string, unknown> = {};
      headers.forEach((header, index) => {
        row[header] = values[index]?.trim() || "";
      });
      return row;
    });

    return {
      headers,
      rows,
      rowCount: rows.length,
      fileType: "txt",
      rawText: text,
    };
  }

  // Formato não tabular - retornar como linhas
  const rows = lines.map((line, index) => ({ line: index + 1, content: line }));
  return {
    headers: ["line", "content"],
    rows,
    rowCount: rows.length,
    fileType: "txt",
    rawText: text,
  };
}

function parseCSV(file: File): Promise<ParsedFileData> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const rows = result.data as Record<string, unknown>[];
        const headers = rows.length > 0 ? Object.keys(rows[0]) : [];
        resolve({ headers, rows, rowCount: rows.length, fileType: "csv" });
      },
      error: (error) => reject(new Error(`Erro ao ler CSV: ${error.message}`)),
    });
  });
}

function parseXLSX(file: File): Promise<ParsedFileData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows =
          XLSX.utils.sheet_to_json<Record<string, unknown>>(firstSheet);
        const headers = rows.length > 0 ? Object.keys(rows[0]) : [];
        resolve({ headers, rows, rowCount: rows.length, fileType: "xlsx" });
      } catch (err) {
        reject(
          new Error(
            "Erro ao ler Excel. Verifique se o arquivo não está corrompido.",
          ),
        );
      }
    };
    reader.onerror = () => reject(new Error("Erro ao carregar o arquivo."));
    reader.readAsArrayBuffer(file);
  });
}

function detectDelimiter(lines: string[]): string | null {
  if (lines.length === 0) return null;
  const firstLine = lines[0];
  if (firstLine.includes("\t")) return "\t";
  if (firstLine.includes(";")) return ";";
  if (firstLine.includes(",")) return ",";
  return null;
}

export const parseTextInput = (text: string): ParsedFileData => {
  const lines = text.split("\n").filter((line) => line.trim());

  if (lines.length === 0) {
    return {
      headers: [],
      rows: [],
      rowCount: 0,
      fileType: "text",
      rawText: text,
      source: "text_input",
    };
  }

  const delimiter = detectDelimiter(lines);

  if (delimiter) {
    const headers = lines[0].split(delimiter).map((h) => h.trim());
    const rows = lines.slice(1).map((line) => {
      const values = line.split(delimiter);
      const row: Record<string, unknown> = {};
      headers.forEach((header, index) => {
        row[header] = values[index]?.trim() || "";
      });
      return row;
    });
    return {
      headers,
      rows,
      rowCount: rows.length,
      fileType: "text",
      rawText: text,
      source: "text_input",
    };
  }

  const rows = lines.map((line, index) => ({ line: index + 1, content: line }));
  return {
    headers: ["line", "content"],
    rows,
    rowCount: rows.length,
    fileType: "text",
    rawText: text,
    source: "text_input",
  };
};
