import * as XLSX from "xlsx";
import Papa from "papaparse";

export class DocumentParser {
  async parse(content: Buffer | string, mimeType: string): Promise<string> {
    if (
      mimeType.includes("spreadsheet") ||
      mimeType.includes("excel") ||
      mimeType.endsWith(".xlsx") ||
      mimeType.endsWith(".xls")
    ) {
      return this.parseExcel(content);
    }
    if (mimeType === "text/csv" || mimeType.endsWith(".csv")) {
      return this.parseCSV(content);
    }
    if (mimeType === "text/plain" || mimeType.endsWith(".txt")) {
      return content.toString();
    }
    if (mimeType === "application/pdf") {
      return this.parsePDF(content);
    }
    return content.toString();
  }

  private parseExcel(content: Buffer | string): string {
    try {
      const workbook = XLSX.read(content, { type: "buffer" });
      const sheets: string[] = [];

      workbook.SheetNames.forEach((sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        sheets.push(JSON.stringify(data));
      });

      return sheets.join("\n\n");
    } catch {
      return "";
    }
  }

  private parseCSV(content: Buffer | string): string {
    const result = Papa.parse(content.toString(), { header: false });
    return JSON.stringify(result.data);
  }

  private parsePDF(_content: Buffer | string): string {
    return "";
  }

  chunkText(
    text: string,
    strategy: "fixed" | "paragraph" | "page" = "fixed",
    chunkSize: number = 500,
    overlap: number = 50,
  ): string[] {
    if (strategy === "fixed") {
      return this.chunkByWords(text, chunkSize, overlap);
    }
    if (strategy === "paragraph") {
      return this.chunkByParagraphs(text);
    }
    return this.chunkByWords(text, chunkSize, overlap);
  }

  private chunkByWords(
    text: string,
    chunkSize: number,
    overlap: number,
  ): string[] {
    const words = text.split(/\s+/);
    const chunks: string[] = [];

    for (let i = 0; i < words.length; i += chunkSize - overlap) {
      const chunkWords = words.slice(i, i + chunkSize);
      if (chunkWords.length > 0) {
        chunks.push(chunkWords.join(" "));
      }
    }

    return chunks;
  }

  private chunkByParagraphs(text: string): string[] {
    return text.split(/\n\n+/).filter((p) => p.trim().length > 0);
  }
}
