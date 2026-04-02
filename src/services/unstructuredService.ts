import { supabase } from "@/lib/supabase";

export interface UnstructuredElement {
  type:
    | "Title"
    | "NarrativeText"
    | "Table"
    | "Image"
    | "ListItem"
    | "Header"
    | "Footer"
    | "PageBreak";
  text: string;
  metadata: {
    page_number?: number;
    table_as_json?: string;
    image_base64?: string;
    filename?: string;
  };
}

export interface ExtractionResult {
  elements: UnstructuredElement[];
  files_processed: number;
  extraction_time_ms: number;
}

const UNSTRUCTURED_API_URL =
  "https://api.unstructuredapp.io/general/v0/general";
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const UNSTRUCTURED_TIMEOUT_MS = 60000; // 60 segundos para documentos grandes

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class UnstructuredClient {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = import.meta.env.UNSTRUCTURED_API_KEY || "";
    this.baseUrl = import.meta.env.UNSTRUCTURED_API_URL || UNSTRUCTURED_API_URL;

    if (!this.apiKey) {
      console.warn("UNSTRUCTURED_API_KEY não configurada");
    }
  }

  async extractElements(
    fileUrl: string,
    options?: {
      strategy?: "auto" | "hi_res" | "fast";
      extractTableAsHtml?: boolean;
      includeImageBase64?: boolean;
    },
  ): Promise<UnstructuredElement[]> {
    if (!this.apiKey) {
      throw new Error("UNSTRUCTURED_API_KEY não configurada");
    }

    const payload = {
      files: [
        {
          url: fileUrl,
        },
      ],
      strategy: options?.strategy || "auto",
      extract_table_as_html: options?.extractTableAsHtml ?? true,
      include_image_base64: options?.includeImageBase64 ?? false,
    };

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        // Timeout para cada tentativa
        const controller = new AbortController();
        const timeoutId = setTimeout(
          () => controller.abort(),
          UNSTRUCTURED_TIMEOUT_MS,
        );

        const response = await fetch(this.baseUrl, {
          method: "POST",
          headers: {
            "Api-Key": this.apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // Tratar 429 Rate Limit com Retry-After
        if (response.status === 429) {
          const retryAfter = response.headers.get("Retry-After");
          const waitTime = retryAfter
            ? parseInt(retryAfter) * 1000
            : RETRY_DELAY * attempt;
          console.warn(`Rate limited. Waiting ${waitTime}ms before retry.`);
          await delay(waitTime);
          continue;
        }

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `Unstructured API error: ${response.status} - ${errorText}`,
          );
        }

        const result = await response.json();

        // Verificar se response tem estrutura válida
        if (!result.elements || !Array.isArray(result.elements)) {
          throw new Error("Resposta inválida da API Unstructured");
        }

        return result.elements.map(this.mapElement);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          lastError = new Error(
            `Timeout após ${UNSTRUCTURED_TIMEOUT_MS / 1000}s`,
          );
        } else {
          lastError = error as Error;
        }
        console.warn(`Unstructured attempt ${attempt} failed:`, error);

        if (attempt < MAX_RETRIES) {
          await delay(RETRY_DELAY * attempt);
        }
      }
    }

    throw lastError || new Error("Falha após múltiplas tentativas");
  }

  async extractFromStorage(
    storagePath: string,
    organizationId: string,
  ): Promise<UnstructuredElement[]> {
    const { data: fileData, error } = await supabase.storage
      .from("documents")
      .createSignedUrl(storagePath, 3600);

    if (error || !fileData?.signedUrl) {
      throw new Error(`Erro ao obter URL do arquivo: ${error?.message}`);
    }

    return this.extractElements(fileData.signedUrl);
  }

  private mapElement(raw: Record<string, unknown>): UnstructuredElement {
    const metadata = raw.metadata as Record<string, unknown> | undefined;
    return {
      type: (raw.type as UnstructuredElement["type"]) || "NarrativeText",
      text: (raw.text as string) || "",
      metadata: {
        page_number: metadata?.page_number as number | undefined,
        table_as_json: metadata?.table_as_json as string | undefined,
        image_base64: metadata?.image_base64 as string | undefined,
        filename: metadata?.filename as string | undefined,
      },
    };
  }

  getSupportedTypes(): string[] {
    return [
      ".pdf",
      ".docx",
      ".doc",
      ".pptx",
      ".ppt",
      ".xlsx",
      ".xls",
      ".csv",
      ".txt",
      ".eml",
      ".msg",
      ".html",
      ".json",
    ];
  }
}

export const unstructuredClient = new UnstructuredClient();
