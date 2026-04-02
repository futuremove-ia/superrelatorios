# Data Extraction Parser Engine — SuperRelatórios

**Data:** 2026-04-02  
**Versão:** 1.0

---

## 1. Visão Geral

O **Data Extraction Parser Engine** é responsável por extrair dados estruturados de documentos não-estruturados (PDFs, DOCX, etc.) processados pelo **Unstructured**, e convertê-los em dados que podem ser usados para:

1. **Detecção automática de setor** (technology, retail, healthcare, etc.)
2. **Cálculo de KPIs** via KPI Calculation Engine
3. **Geração de Blueprint** (DNA da empresa)
4. **Persistência** no banco de dados

---

## 2. Arquitetura do Pipeline

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DOCUMENT PROCESSING PIPELINE                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌──────────────┐     ┌──────────────────┐     ┌────────────────────────┐   │
│  │   UPLOAD     │────►│   UNSTRUCTURED   │────►│   DATA EXTRACTION      │   │
│  │   (File)     │     │   API            │     │   PARSER              │   │
│  └──────────────┘     └──────────────────┘     └───────────┬────────────┘   │
│                                                              │                 │
│                                                              ▼                 │
│                                              ┌──────────────────────────────┐   │
│                                              │  - Tables                  │   │
│                                              │  - Sections                │   │
│                                              │  - Detected Fields         │   │
│                                              │  - Sector Detection        │   │
│                                              └─────────────┬──────────────┘   │
│                                                            │                  │
│                                                            ▼                  │
│                                              ┌──────────────────────────────┐   │
│                                              │   KPI CALCULATION ENGINE    │   │
│                                              │                             │   │
│                                              │  - 127 KPIs                │   │
│                                              │  - 12 Sectors              │   │
│                                              │  - Auto-formulas           │   │
│                                              └─────────────┬──────────────┘   │
│                                                            │                  │
│                                                            ▼                  │
│                                              ┌──────────────────────────────┐   │
│                                              │   DATABASE                 │   │
│                                              │                             │   │
│                                              │  - document_extractions    │   │
│                                              │  - user_metrics            │   │
│                                              │  - company_blueprints     │   │
│                                              └────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Serviços Criados

### 3.1 UnstructuredService (existente)

**Arquivo:** `src/services/unstructuredService.ts`

Responsável por extrair elementos de documentos usando a API Unstructured.

```typescript
const elements = await unstructuredClient.extractElements(fileUrl, {
  strategy: "auto", // "auto" | "hi_res" | "fast"
  extractTableAsHtml: true,
  includeImageBase64: false,
});
```

**Supported File Types:**

- PDF, DOCX, DOC
- PPTX, PPT
- XLSX, XLS
- CSV, TXT
- EML, MSG
- HTML, JSON
- Images (BMP, JPEG, PNG, etc.)

### 3.2 DataExtractionParser (NOVO)

**Arquivo:** `src/services/dataExtractionParser.ts`

Responsável por processar os elementos extraídos pelo Unstructured e converter em dados estruturados.

```typescript
const parser = new DataExtractionParser({
  strategy: "auto",
  detectSector: true,
  extractTables: true,
  extractText: true,
  minTableRows: 2,
});

const parsedData = await parser.parse(elements, documentId, organizationId);
```

**Principais funcionalidades:**

| Método                  | Descrição                                                   |
| ----------------------- | ----------------------------------------------------------- |
| `extractTables()`       | Extrai tabelas do documento                                 |
| `extractSections()`     | Extrai seções de texto (titles, narrative, etc.)            |
| `detectFields()`        | Detecta campos relevantes para KPIs                         |
| `detectSector()`        | Auto-detecta setor baseado nos campos                       |
| `detectBusinessModel()` | Detecta modelo de negócio (subscription, transaction, etc.) |
| `normalizeValue()`      | Normaliza valores (datas, moedas, percentuais)              |

**Tipos de saída:**

```typescript
interface ParsedDocumentData {
  documentId: string;
  organizationId: string;
  sector: Sector | null;
  businessModel: BusinessModel | null;
  extractedAt: Date;
  tables: ParsedTable[];
  sections: ParsedSection[];
  detectedFields: DetectedField[];
  rawData: Record<string, unknown>[];
  metadata: {
    pages: number;
    elements: number;
    tables: number;
    extractionTimeMs: number;
  };
  warnings: string[];
  errors: string[];
}
```

### 3.3 DocumentProcessingService (NOVO)

**Arquivo:** `src/services/documentProcessingService.ts`

Orquestra todo o fluxo de processamento de documentos.

```typescript
const result = await documentProcessingService.processDocument({
  organizationId: "org-123",
  documentId: "doc-456",
  storagePath: "documents/report.pdf",
  strategy: "auto",
  autoSave: true,
});

// Resultado:
{
  documentId: "doc-456",
  organizationId: "org-123",
  success: true,
  parsedData: { ... },
  kpis: [
    { code: "TECH-MRR-001", value: 50000, unit: "currency", ... },
    { code: "TECH-CHURN-001", value: 2.5, unit: "percent", ... },
  ],
  errors: [],
  warnings: [],
}
```

---

## 4. Dados que Precisamos Extrair

### 4.1 Campos por Setor

| Setor               | Campos Principais                                                   |
| ------------------- | ------------------------------------------------------------------- |
| **Technology/SaaS** | mrr, arr, churn_rate, cac, ltv, arpu, customers, subscribers        |
| **Retail**          | revenue, sales, orders, customers, products, inventory, margin, atv |
| **Healthcare**      | patients, appointments, treatments, beds, occupancy, revenue        |
| **Manufacturing**   | production, units, efficiency, inventory, materials, quality        |
| **Services**        | hours, projects, clients, utilization, tickets, billable_hours      |
| **Finance**         | revenue, loans, interest, deposits, assets, npl, nim                |
| **Food**            | revenue, orders, customers, tickets, tables, covers                 |
| **Logistics**       | shipments, deliveries, routes, vehicles, fuel                       |
| **Construction**    | projects, budget, costs, revenue, progress                          |
| **Education**       | students, enrollment, courses, teachers, attendance                 |
| **Real Estate**     | properties, occupancy, rent, revenue, tenants                       |
| **Media**           | views, subscribers, engagement, ad_revenue                          |

### 4.2 Normalização de Dados

O parser realiza normalização automática:

| Tipo            | Exemplos               | Formato Saída |
| --------------- | ---------------------- | ------------- |
| **Datas**       | 01/02/2024, 2024-02-01 | Date object   |
| **Moedas**      | R$ 10.000,00, 10000.50 | number        |
| **Percentuais** | 15%, 0.15, 15.5%       | number        |
| **Números**     | 1.000, 1000            | number        |

---

## 5. Integração com KPI Engine

### Fluxo:

```
ParsedDocumentData.rawData (Record<string, unknown>[])
        │
        ▼
Numeric Data Extraction (filter numbers only)
        │
        ▼
KPICalculationEngine.calculateMultiple(kpiCodes, numericData)
        │
        ▼
KPIResult[] (success/failed/insufficient_data)
        │
        ▼
Save to user_metrics table
```

### Exemplo de uso:

```typescript
const parsedData = await parser.parse(elements, docId, orgId);

const numericData: Record<string, number | number[]> = {};
for (const row of parsedData.rawData) {
  for (const [key, value] of Object.entries(row)) {
    if (typeof value === "number") {
      if (!numericData[key]) numericData[key] = [];
      (numericData[key] as number[]).push(value);
    }
  }
}

const engine = new KPICalculationEngine(context, {}, []);
const results = engine.calculateMultiple(kpiCodes, numericData);
```

---

## 6. Tabelas do Banco de Dados

### 6.1 document_extractions

```sql
CREATE TABLE document_extractions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL,
  organization_id UUID NOT NULL REFERENCES organizations(id),
  sector TEXT,
  business_model TEXT,
  tables JSONB,
  sections JSONB,
  detected_fields JSONB,
  raw_data JSONB,
  metadata JSONB,
  extracted_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 6.2 user_metrics (existente)

```sql
-- Já existe, apenas adicionar campos extras se necessário
```

---

## 7. Configuração Necessária

### Variáveis de Ambiente:

```env
# Unstructured API
UNSTRUCTURED_API_KEY=your_api_key
UNSTRUCTURED_API_URL=https://api.unstructuredapp.io/general/v0/general

# Supabase (já configurado)
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## 8. Roadmap de Desenvolvimento

### ✅ Concluído

| Componente                | Status          |
| ------------------------- | --------------- |
| UnstructuredService       | ✅ Implementado |
| DataExtractionParser      | ✅ Implementado |
| DocumentProcessingService | ✅ Implementado |
| Detecção de Setor         | ✅ Implementado |
| Normalização de Dados     | ✅ Implementado |
| Integração com KPI Engine | ✅ Implementado |

### ⏳ Pendente

| Componente             | Prioridade | Dependência           |
| ---------------------- | ---------- | --------------------- |
| Pipeline de Webhooks   | 🟡 MÉDIA   | Unstructured Webhooks |
| Destination Connectors | 🟡 MÉDIA   | Storage config        |
| Chunking/Embeddings    | 🔴 ALTA    | pgvector              |
| Blueprint Generation   | 🔴 ALTA    | Gemini API            |

---

## 9. Uso

### Processamento simples:

```typescript
import { documentProcessingService } from "@/services/documentProcessingService";

const result = await documentProcessingService.processDocument({
  organizationId: userOrgId,
  documentId: newId(),
  storagePath: `documents/${fileName}`,
  autoSave: true,
});

if (result.success) {
  console.log(`KPIs calculados: ${result.kpis.length}`);
  console.log(`Setor detectado: ${result.parsedData?.sector}`);
}
```

### Reprocessamento com setor específico:

```typescript
import { reprocessDocumentWithSector } from "@/services/documentProcessingService";

const result = await reprocessDocumentWithSector(
  documentId,
  "retail", // Forçar setor
);
```

---

## 10. Referências

- [Unstructured Documentation](https://docs.unstructured.io/)
- [Supported File Types](https://docs.unstructured.io/api-reference/supported-file-types)
- [API Quickstart](https://docs.unstructured.io/api-reference/quickstart)
- [KPI Calculation Engine](./KPI_CALCULATION_ENGINE.md)

---

**Última atualização:** 2026-04-02
