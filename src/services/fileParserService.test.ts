import { describe, it, expect, vi } from 'vitest';
import { parseFile } from './fileParserService';

describe('fileParserService', () => {
  it('should parse a CSV file correctly', async () => {
    const csvContent = 'name,value\nItem 1,100\nItem 2,200';
    const file = new File([csvContent], 'test.csv', { type: 'text/csv' });

    const result = await parseFile(file);

    expect(result.fileType).toBe('csv');
    expect(result.rowCount).toBe(2);
    expect(result.headers).toEqual(['name', 'value']);
    expect(result.rows[0].name).toBe('Item 1');
  });

  it('should throw error for unsupported extension', async () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });

    await expect(parseFile(file)).rejects.toThrow('Formato não suportado: .txt');
  });
});
