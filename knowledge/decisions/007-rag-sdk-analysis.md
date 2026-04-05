# Análise Comparativa: SDKs de IA vs Solução Proprietária

## Contexto

O SuperRelatórios já possui:

- **fileParserService**: Parse sophisticated de CSV, XLSX, PDF, DOCX, TXT
- **universalParserService**: Parser universal com detecção de domínio
- **dataPipelineService**: Pipeline de dados completo
- **Supabase + pgvector**: Já temos vector store
- **Gemini (Edge Functions)**: Já temos LLMs

---

## Opções de Implementação

### Opção A: Usar Vercel AI SDK

| Prós                                          | Contras                              |
| --------------------------------------------- | ------------------------------------ |
| ✅ Integração nativa Next.js                  | ❌ Vendor lock-in                    |
| ✅ Bundle otimizado                           | ❌ Chunking muito básico (split ".") |
| ✅ Interface unificada para múltiplos modelos | ❌ Não usa nossos parsers existentes |
| ✅ Comunidade ativa                           | ❌ Abstração limitante               |
| ✅ Deploy simples na Vercel                   | ❌ Custo adicional (AI Gateway)      |

### Opção B: Usar Google Vertex AI RAG Engine

| Prós                         | Contras                    |
| ---------------------------- | -------------------------- |
| ✅ Managed service completo  | ❌ Setup complexo          |
| ✅ Embedding Gemini nativa   | ❌ Custos GCP              |
| ✅ Enterprise features       | ❌ Vendor lock-in forte    |
| ✅ Chunking avançado nativo  | ❌ Curva de aprendizado    |
| ✅ Suporte a grandes volumes | ❌ Integração mais difícil |

### Opção C: Solução 100% Proprietária (Recomendada)

| Prós                               | Contras                                       |
| ---------------------------------- | --------------------------------------------- |
| ✅ Controle total                  | ❌ Mais desenvolvimento inicial               |
| ✅ Usa parsers existentes          | ❌ Manutenção própria                         |
| ✅ Sem vendor lock-in              | ❌ Curva de aprendizado de técnicas avançadas |
| ✅ Custos previsíveis (só API LLM) |                                               |
| ✅ Customizável para negócio       |                                               |
| ✅ Diferencial competitivo         |                                               |

---

## Técnicas Avançadas para RAG Proprietário (2026)

### 1. Chunking Estratégico

| Técnica                              | Quando Usar                   |
| ------------------------------------ | ----------------------------- |
| **Fixed chunking** (500-1000 tokens) | Planilhas, dados estruturados |
| **Semantic chunking**                | Textos narrativos             |
| **Recursive chunking**               | Documentos mistos             |
| **Chunking por estrutura**           | PDFs com headings             |
| **Sentence chunking**                | Textos em português           |

### 2. Busca Híbrida (Hybrid Search)

```
Embedding Search (semântica) + BM25 (keyword)
        ↓
     Fusão de resultados (RRF)
        ↓
     Re-ranking
```

### 3. Re-ranking

- **Cross-encoder**: Mais preciso, mais lento
- **Bi-encoder**: Mais rápido, menos preciso
- Modelo recomendado: `cross-encoder/ms-marco-MiniLM-L-6-v2`

### 4. Multi-query

```typescript
// Gerar variações da pergunta
const queries = [
  "receita do mês",
  "faturamento mensal",
  "vendas do período",
  "receita generada",
];
```

### 5. Parent Document Retrieval

- Guardar documento pai
- Buscar em chunks
- Retornar contexto do documento completo

---

## Recomendação Final: Opção C - Solução Proprietária

### Justificativa:

1. **Já temos a infraestrutura**: Parsers sofisticados, Supabase com pgvector, Gemini

2. **Diferencial competitivo**: Um RAG genérico não atende necessidades específicas de análise de PME

3. **Custo**: Só pagamos API do LLM (Gemini), não mais一层 de middleware

4. **Controle**: Podemos otimizar para o domínio específico (finanças, vendas, marketing)

5. **Sem lock-in**: Se amanhã mudarmos de provedor, só trocamos a camada de embedding

### Arquitetura Proposta:

```
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              RagService                              │   │
│  │  - indexDocument()    - search()                   │   │
│  │  - deleteDocument()   - rerank()                    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
         ↑                    ↑                    ↑
    (parse existente)   (embed Gemini)    (pgvector)
         ↑                    ↑                    ↑
┌─────────────────────────────────────────────────────────────┐
│                    OUR PARSERS                             │
│  fileParserService  +  universalParserService            │
└─────────────────────────────────────────────────────────────┘
```

### Implementação:

1. **Manter**: parsers existentes (fileParserService)
2. **Criar**: EmbeddingService usando Gemini (já integrado)
3. **Criar**: VectorStoreAdapter usando pgvector (já temos)
4. **Criar**: RagService com técnicas avançadas (hybrid search, reranking)

---

## Decisão: SDK ou Proprietário?

| Critério           | Vercel AI SDK | Proprietário  |
| ------------------ | ------------- | ------------- |
| Velocidade inicial | ✅ Rápido     | ❌ Mais tempo |
| Flexibilidade      | ❌ Limitado   | ✅ Total      |
| Custo longo prazo  | ❌ Médio      | ✅ Baixo      |
| Manutenção         | ✅ Community  | ✅ Própria    |
| Diferencial        | ❌ Genérico   | ✅ Custom     |
| Lock-in            | ❌ Alto       | ✅ Zero       |

**Resultado**: Solução proprietária oferece melhor custo-benefício para um SaaS B2B que precisa de diferenciação competitiva.
