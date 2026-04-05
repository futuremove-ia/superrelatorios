import { ragApi, IndexDocumentInput, SearchInput } from "@/lib/api/rag";
import { SearchResult } from "@/application/RagService";

export interface RagRoutes {
  indexDocument(input: IndexDocumentInput): Promise<{ documentId: string }>;
  search(input: SearchInput): Promise<SearchResult[]>;
  deleteDocument(documentId: string): Promise<{ success: boolean }>;
  generateQueryVariations(query: string): string[];
}

export const ragRoutes: RagRoutes = {
  async indexDocument(input: IndexDocumentInput) {
    return ragApi.indexDocument(input);
  },

  async search(input: SearchInput) {
    return ragApi.search(input);
  },

  async deleteDocument(documentId: string) {
    return ragApi.deleteDocument(documentId);
  },

  generateQueryVariations(query: string) {
    return ragApi.generateQueryVariations(query);
  },
};

export default ragRoutes;
