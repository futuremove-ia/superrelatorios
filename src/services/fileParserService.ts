import Papa from 'papaparse';
import * as XLSX from 'xlsx';

export interface ParsedFileData {
  headers: string[];
  rows: Record<string, unknown>[];
  rowCount: number;
  fileType: 'csv' | 'xlsx' | 'json';
}

/**
 * Lê um arquivo CSV ou XLSX e retorna os dados como JSON.
 */
export const parseFile = (file: File): Promise<ParsedFileData> => {
  return new Promise((resolve, reject) => {
    const extension = file.name.split('.').pop()?.toLowerCase();

    if (extension === 'csv') {
      // Parse CSV com PapaParse
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const rows = result.data as Record<string, unknown>[];
          const headers = rows.length > 0 ? Object.keys(rows[0]) : [];
          resolve({ headers, rows, rowCount: rows.length, fileType: 'csv' });
        },
        error: (error) => reject(new Error(`Erro ao ler CSV: ${error.message}`))
      });
    } else if (extension === 'xlsx' || extension === 'xls') {
      // Parse Excel com SheetJS
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(firstSheet);
          const headers = rows.length > 0 ? Object.keys(rows[0]) : [];
          resolve({ headers, rows, rowCount: rows.length, fileType: 'xlsx' });
        } catch (err) {
          reject(new Error('Erro ao ler Excel. Verifique se o arquivo não está corrompido.'));
        }
      };
      reader.onerror = () => reject(new Error('Erro ao carregar o arquivo.'));
      reader.readAsArrayBuffer(file);
    } else {
      reject(new Error(`Formato não suportado: .${extension}. Use CSV ou XLSX.`));
    }
  });
};
