import { parseFile, type ParsedFileData } from "./fileParserService";
import {
  createUniversalParser,
  type UniversalParserService,
} from "@/domain/shared/parsers/universalParserService";
import type { UniversalParsedData, Domain } from "@/types/financial-parser";

export interface DataPipelineOptions {
  autoMapColumns?: boolean;
  detectDomainFromContent?: boolean;
  fallbackToUnstructured?: boolean;
}

export interface DataPipelineResult {
  success: boolean;
  data?: UniversalParsedData;
  errors: string[];
  warnings: string[];
}

export class DataPipelineService {
  private parser: UniversalParserService;
  private options: DataPipelineOptions;

  constructor(options: DataPipelineOptions = {}) {
    this.parser = createUniversalParser({
      autoMapColumns: options.autoMapColumns ?? true,
    });
    this.options = options;
  }

  async processFile(file: File, blueprint?: any): Promise<DataPipelineResult> {
    try {
      const parsedFile = await parseFile(file);
      return this.processParsedData(parsedFile, blueprint);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return {
        success: false,
        errors: [`File processing failed: ${message}`],
        warnings: [],
      };
    }
  }

  async processParsedData(
    parsedFile: ParsedFileData,
    blueprint?: any,
  ): Promise<DataPipelineResult> {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (parsedFile.headers.length === 0) {
      if (parsedFile.rawText && this.options.fallbackToUnstructured) {
        const result = await this.parser.parseUnstructuredText(
          parsedFile.rawText,
          blueprint,
        );
        return result as DataPipelineResult;
      }
      return { success: false, errors: ["No headers found in data"], warnings };
    }

    const result = await this.parser.parseData(
      {
        headers: parsedFile.headers,
        rows: parsedFile.rows as any[],
        documentType: "unknown",
      },
      blueprint,
    );

    if (!result.success) {
      if (parsedFile.rawText && this.options.fallbackToUnstructured) {
        const fallbackResult = await this.parser.parseUnstructuredText(
          parsedFile.rawText,
          blueprint,
        );
        return fallbackResult as DataPipelineResult;
      }
      return {
        success: false,
        errors: result.errors,
        warnings: result.warnings,
      };
    }

    return {
      success: true,
      data: result.data,
      errors: [],
      warnings: [
        ...result.warnings,
        `Processed ${parsedFile.rowCount} rows from ${parsedFile.fileType}`,
      ],
    };
  }

  async processCSV(
    csvText: string,
    blueprint?: any,
  ): Promise<DataPipelineResult> {
    const result = await this.parser.parseCSVInput(csvText, blueprint);
    return result as DataPipelineResult;
  }

  async processText(
    text: string,
    blueprint?: any,
  ): Promise<DataPipelineResult> {
    const result = await this.parser.parseTextInput(text, blueprint);
    return result as DataPipelineResult;
  }
}

export function createDataPipeline(
  options?: DataPipelineOptions,
): DataPipelineService {
  return new DataPipelineService(options);
}

export const dataPipeline = createDataPipeline();
