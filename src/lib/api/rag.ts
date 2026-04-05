import { RagService, SearchResult } from "@/application/RagService";

const ragService = new RagService({ provider: "local" });

export interface IndexDocumentInput {
  organizationId: string;
  title: string;
  content: string;
  sourceType: "upload" | "google_drive" | "onedrive" | "manual";
  sourceId?: string;
}

export interface SearchInput {
  organizationId: string;
  query: string;
  topK?: number;
}

export const ragApi = {
  async indexDocument(
    input: IndexDocumentInput,
  ): Promise<{ documentId: string }> {
    const documentId = await ragService.indexDocument(input);
    return { documentId };
  },

  async search(input: SearchInput): Promise<SearchResult[]> {
    return ragService.search({
      organizationId: input.organizationId,
      query: input.query,
      topK: input.topK || 5,
    });
  },

  async deleteDocument(documentId: string): Promise<{ success: boolean }> {
    await ragService.deleteDocument(documentId);
    return { success: true };
  },

  generateQueryVariations(query: string): string[] {
    return ragService.generateQueryVariations(query);
  },
};

export default ragApi;
