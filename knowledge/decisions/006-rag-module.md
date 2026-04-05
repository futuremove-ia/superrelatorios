---
title: Módulo RAG por Tenant para Busca de Documentos
version: 1.0.0
updated: 2026-04-05
status: active
---

# ADR-006: RAG (Retrieval-Augmented Generation) por Tenant

## Contexto

O SuperRelatórios precisa de um sistema de busca semântica que permita às empresas buscar em seus documentos importados. O RAG será usado para:

1. **Busca em documentos**: Planilhas, PDFs, textos importados
2. **Contexto para IA**: Fornecer contexto relevante para diagnóstico
3. **Resposta contextual**: Responder perguntas sobre dados da empresa

### Requisitos

1. **Modelo**: Por empresa/tenant (isolamento total)
2. **Fontes**: Google Drive, OneDrive, upload direto
3. **ベクトル検索**: Semântica (não apenas keyword)
4. **Chunking**: Divisão inteligente de documentos
5. **Atualização**: Índice atualizável (add/delete)

## Decisão

### Arquitetura Selecionada: Metadata Filter + Embeddings

```
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    RagService                               ││
│  │  - indexDocument(orgId, doc)                                ││
│  │  - deleteDocument(orgId, docId)                            ││
│  │  - search(orgId, query, filters?)                          ││
│  │  - rebuildIndex(orgId)                                      ││
│  └─────────────────────────────────────────────────────────────┘│
└────────────────────────────┬────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼────────┐  ┌───────▼───────┐  ┌────────▼────────┐
│ DocumentParser │  │ EmbeddingSvc  │  │  VectorStore    │
│                │  │ (OpenAI/Gemini)│  │ (Pinecone/      │
│ - xlsx         │  │               │  │  pgvector)      │
│ - csv          │  └───────┬───────┘  └────────┬────────┘
│ - pdf          │          │                    │
│ - txt          │          └────────────────────┘
└────────┬───────┘                  INFRASTRUCTURE
         │
┌────────▼────────┐
│  Supabase      │
│  (Document     │
│   Metadata)    │
└────────────────┘
```

### Estratégia de Indexação

**Escolhida: Tenant ID Filter**

- Uma única collection/namespace
- Cada documento tem `tenant_id` nos metadados
- Queries Always incluem `filter: { tenant_id: orgId }`

**Alternativa considerada: Collections separadas por tenant**

- Problema: Limite de collections em alguns VectorDBs
- Custo: Mais overhead de management

### Componentes

| Componente           | Responsabilidade                         |
| -------------------- | ---------------------------------------- |
| `RagService`         | Fachada para indexação e busca           |
| `DocumentParser`     | Extrai texto de diferentes formatos      |
| `EmbeddingService`   | Gera embeddings (text-embedding-3-small) |
| `VectorStoreAdapter` | Abstração do VectorDB                    |
| `ChunkingStrategy`   | Estratégias de chunking                  |

### Dados no Supabase (Metadata)

```sql
-- Documentos indexados
CREATE TABLE rag_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  source_type VARCHAR(50) NOT NULL, -- 'google_drive', 'onedrive', 'upload'
  source_id TEXT, -- ID externo
  content_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  is_indexed BOOLEAN DEFAULT false
);

-- Chunks (para referencia)
CREATE TABLE rag_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID REFERENCES rag_documents(id) ON DELETE CASCADE,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  chunk_text TEXT NOT NULL,
  chunk_index INTEGER NOT NULL,
  embedding VECTOR(1536), -- OpenAI ada-002
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índice para busca
CREATE INDEX rag_chunks_org_idx ON rag_chunks USING ivfflat (organization_id, embedding) WITH (lists = 100);
```

### Fluxo de Indexação

```
1. Documento importado (Drive/OneDrive/Upload)
   ↓
2. DocumentParser extrai texto
   ↓
3. ChunkingStrategy divide em chunks (~500-1000 tokens)
   ↓
4. EmbeddingService gera vetor para cada chunk
   ↓
5. VectorStoreAdapter.save(chunks, metadata: {tenant_id})
   ↓
6. rag_documents.markAsIndexed()
```

### Fluxo de Busca

```
1. Usuário pesquisa: "receita do mês"
   ↓
2. EmbeddingService.embed(query)
   ↓
3. VectorStoreAdapter.search(
     vector=embedding,
     filter: { tenant_id: orgId },
     top_k: 5
   )
   ↓
4. Retorna chunks + source document
```

### Chunking Strategies

| Tipo        | Tamanho    | Overlap    | Melhor para       |
| ----------- | ---------- | ---------- | ----------------- |
| `fixed`     | 500 tokens | 50 tokens  | Planilhas         |
| `paragraph` | ~300 words | N/A        | Textos narrativos |
| `page`      | 1 page     | 100 tokens | PDFs              |

### Segurança

1. **Isolamento**: Toda query com `tenant_id` obrigatório
2. **Auditoria**: Log de buscas realizadas
3. **Rate limiting**: Por organização
4. **Cache**: TTL curto para resultados

### Stack Técnica

| Componente | Tecnologia                      |
| ---------- | ------------------------------- |
| Embeddings | OpenAI text-embedding-3-small   |
| Vector DB  | Pinecone ou pgvector (Supabase) |
| Parser     | xlsx, pdf-parse, papaparse      |
| API        | Google Gemini para generation   |

## Status

**Aprovado** — 2026-04-05

## Implementação

Ver plano: `docs/superpowers/plans/2026-04-05-rag-module.md`
