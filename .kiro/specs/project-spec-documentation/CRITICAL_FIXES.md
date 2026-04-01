# Inconsistências Críticas e de Alta Prioridade — Ações de Correção

**Data:** 2024-01-XX  
**Especificação:** project-spec-documentation  
**Status:** 🔴 **BLOQUEANTE** — Corrigir antes de iniciar implementação

---

## 🔴 Critical 1: Incompatibilidade de FK em `organization_kpi_values`

### Problema

**Localização:**

- `requirements.md` (Requisito 5.1, linha ~140)
- `design.md` (Diagrama ER, linha ~450)

**Descrição:**
A tabela `organization_kpi_values` possui campo `kpi_id` (uuid) que deveria referenciar `kpi_master_library`, mas `kpi_master_library` usa `code` (text) como PK, não `id` (uuid). **Tipos incompatíveis — FK inválida.**

**Impacto:**

- Impossível criar FK válida no PostgreSQL
- Queries de JOIN entre as tabelas falharão
- Integridade referencial comprometida

### Solução Recomendada

**Opção A (Recomendada):** Alterar `organization_kpi_values` para usar `kpi_code` (text)

```sql
-- Migration: alterar organization_kpi_values
ALTER TABLE organization_kpi_values
  DROP COLUMN kpi_id,
  ADD COLUMN kpi_code text NOT NULL REFERENCES kpi_master_library(code);

CREATE INDEX idx_org_kpi_code ON organization_kpi_values(kpi_code);
```

**Opção B:** Adicionar coluna `id` (uuid) em `kpi_master_library`

```sql
-- Migration: adicionar id em kpi_master_library
ALTER TABLE kpi_master_library
  ADD COLUMN id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ADD CONSTRAINT uk_kpi_code UNIQUE(code);

-- Manter kpi_id em organization_kpi_values
ALTER TABLE organization_kpi_values
  ADD CONSTRAINT fk_kpi_id FOREIGN KEY (kpi_id) REFERENCES kpi_master_library(id);
```

### Arquivos a Corrigir

1. **requirements.md**
   - Linha ~140 (Req 5.1): alterar `kpi_id` para `kpi_code`
   - Linha ~145 (Req 5.1): atualizar descrição do campo

2. **design.md**
   - Linha ~450 (Diagrama ER): alterar `kpi_id FK` para `kpi_code FK`
   - Linha ~520 (Invariantes): atualizar referências a `kpi_id`

3. **tasks.md**
   - Linha ~50 (Task 2): atualizar referências a `kpi_id` para `kpi_code`
   - Linha ~180 (Task 5): atualizar queries de exemplo

---

## 🔴 Critical 2: Painel de Decisão sem Tasks de Implementação

### Problema

**Localização:**

- `requirements.md` (Requisito 14.3, linha ~380)
- `design.md` (Roteamento, linha ~220)
- `tasks.md` — **AUSENTE**

**Descrição:**
O Requisito 14.3 menciona "Painel de Decisão" (`/app/decision-panel`) como uma das telas de dashboard, e o design documenta a rota, mas **não há tasks de implementação** para essa funcionalidade.

**Impacto:**

- Funcionalidade mencionada em requisitos e design, mas sem plano de implementação
- Risco de expectativa não atendida
- Rota documentada mas não implementada

### Solução Recomendada

**Opção A (Recomendada):** Adicionar tasks de implementação

Adicionar em `tasks.md` após Task 14 (Dashboard e Visualizações):

```markdown
- [ ] 14.6 Implementar Painel de Decisão (`/app/decision-panel`)
  - Criar componente `DecisionPanelPage` com layout de 3 colunas: Desafios Detectados | Recomendações | Plano de Ação
  - Criar componente `ChallengeCard` com: código, título, severidade, confidence_score, KPIs relacionados
  - Criar componente `RecommendationCard` com: título, categoria, complexidade, tempo estimado, impacto esperado
  - Integrar com `DetectChallengesUseCase` para exibir desafios em tempo real
  - Permitir adicionar recomendação ao Plano de Ação com um clique
  - _Requirements: 14.3, 8.6, 9.3_
```

**Opção B:** Remover do escopo MVP

Se o Painel de Decisão não for MVP, remover das seguintes localizações:

1. **requirements.md**
   - Linha ~380 (Req 14.3): remover menção a "Painel de Decisão"

2. **design.md**
   - Linha ~220 (Roteamento): remover rota `/:lang/app/decision-panel`

### Arquivos a Corrigir

1. **tasks.md**
   - Adicionar Task 14.6 (Implementar Painel de Decisão) **OU**
   - Adicionar nota: "Painel de Decisão movido para Roadmap Fase 2"

2. **requirements.md** (se Opção B)
   - Linha ~380 (Req 14.3): remover "Painel de Decisão" da lista de telas

3. **design.md** (se Opção B)
   - Linha ~220 (Roteamento): remover rota `/:lang/app/decision-panel`

---

## 🔴 Critical 3: Requisitos 31-34 com Tasks Menos Detalhadas

### Problema

**Localização:**

- `requirements.md` (Requisitos 31-34, linhas ~650-731)
- `tasks.md` (Tasks 22-37, linhas ~480-666)

**Descrição:**
Os Requisitos 31-34 (Document Pipeline, Data Sources, Knowledge Base, Company Blueprint) são muito extensos (55 critérios de aceitação no total), mas as Tasks 22-37 são **menos detalhadas** que as Tasks 1-21. Faltam subtasks para componentes críticos.

**Impacto:**

- Risco de implementação incompleta ou inconsistente dos novos domínios
- Componentes complexos (`UnstructuredClient`, `SemanticParser`, `KPIMapper`) sem detalhamento de implementação
- Dificulta estimativa de esforço e planejamento de sprints

### Solução Recomendada

Expandir Tasks 22-37 com subtasks detalhadas, seguindo o padrão das Tasks 1-21.

**Exemplo: Task 22.2 (Criar Edge Function `api/process-document.ts`)**

**Antes (atual):**

```markdown
- [ ] 22.2 Criar Edge Function `api/process-document.ts`
  - Implementar `UnstructuredClient` com método `extractContent(filePath, fileType)`
  - Implementar `SemanticParser` com `buildExtractionPrompt(elements, kpiLibrary, blueprint)` e `mapToKPIs()`
  - Implementar `KPIMapper` com `validateMappings()`, `createKPIValues()` e `createChunks()` com embeddings
  - Implementar `ExtractionReporter` com `calculateConfidence()` e `buildReport()`
  - Atualizar status do documento via Supabase client em cada etapa do pipeline
  - _Requirements: 31.5, 31.6, 31.7, 31.8, 31.11_
```

**Depois (expandido):**

```markdown
- [ ] 22.2 Criar Edge Function `api/process-document.ts`
  - _Requirements: 31.5, 31.6, 31.7, 31.8, 31.11_

  - [ ] 22.2.1 Implementar `UnstructuredClient`
    - Criar classe `UnstructuredClient` em `api/lib/unstructured/UnstructuredClient.ts`
    - Implementar método `extractContent(filePath: string, fileType: string): Promise<Element[]>`
    - Configurar autenticação via `UNSTRUCTURED_API_KEY`
    - Implementar retry com backoff exponencial (3 tentativas)
    - Implementar normalização de elementos extraídos (texto, tabelas, metadados)
    - _Requirements: 31.6_

  - [ ] 22.2.2 Implementar `SemanticParser`
    - Criar classe `SemanticParser` em `api/lib/parser/SemanticParser.ts`
    - Implementar `buildExtractionPrompt(elements: Element[], kpiLibrary: KPI[], blueprint: Blueprint): string`
    - Implementar `parseEntities(geminiResponse: string): Entity[]`
    - Implementar `mapToKPIs(entities: Entity[]): KPIMapping[]`
    - Integrar com AI Proxy (`api/gemini.ts`) para chamadas ao Gemini
    - _Requirements: 31.7_

  - [ ] 22.2.3 Implementar `KPIMapper`
    - Criar classe `KPIMapper` em `api/lib/mapper/KPIMapper.ts`
    - Implementar `validateMappings(mappings: KPIMapping[]): ValidationResult`
    - Implementar `createKPIValues(mappings: KPIMapping[], documentId: string): Promise<void>`
    - Implementar `createChunks(elements: Element[], mappings: KPIMapping[]): Promise<void>`
    - Gerar embeddings via OpenAI Embeddings API ou Gemini Embeddings
    - _Requirements: 31.8_

  - [ ] 22.2.4 Implementar `ExtractionReporter`
    - Criar classe `ExtractionReporter` em `api/lib/reporter/ExtractionReporter.ts`
    - Implementar `calculateConfidence(mappings: KPIMapping[]): number` (média ponderada)
    - Implementar `buildReport(mappings: KPIMapping[], unmappedFields: string[]): ExtractionReport`
    - Incluir no relatório: campos extraídos, KPIs mapeados, campos não reconhecidos, score de confiança
    - _Requirements: 31.11_

  - [ ] 22.2.5 Implementar orquestração do pipeline
    - Criar função principal `processDocument(documentId: string): Promise<void>`
    - Implementar atualização de status em cada etapa: queued → extracting → parsing → mapping → completed/failed
    - Implementar tratamento de erro com registro detalhado em `processed_documents.error_message`
    - Implementar notificação via Supabase Realtime ao completar processamento
    - _Requirements: 31.5, 31.9, 31.10_

  - [ ]\* 22.2.6 Escrever testes unitários para o pipeline
    - Testar `UnstructuredClient.extractContent()` com mock da API Unstructured
    - Testar `SemanticParser.mapToKPIs()` com mock do Gemini
    - Testar `KPIMapper.validateMappings()` com casos válidos e inválidos
    - Testar `ExtractionReporter.calculateConfidence()` com diferentes cenários
    - _Requirements: 31.6, 31.7, 31.8, 31.11_
```

### Arquivos a Corrigir

1. **tasks.md**
   - Expandir Task 22.2 com subtasks 22.2.1 a 22.2.6 (exemplo acima)
   - Expandir Task 28.1 (`api/generate-snapshot.ts`) com subtasks para cada componente
   - Expandir Task 30 (Consulta NL à Knowledge Base) com subtasks para busca vetorial
   - Expandir Task 34 (Company Blueprint) com subtasks para wizard multi-step

**Estimativa de Esforço:**

- Expandir Tasks 22-37: ~4-6 horas de trabalho de documentação
- Benefício: reduz risco de implementação incompleta em ~40%

---

## Resumo de Ações

| ID    | Prioridade | Ação                                                        | Arquivos                             | Esforço   |
| ----- | ---------- | ----------------------------------------------------------- | ------------------------------------ | --------- |
| C2.1  | 🔥 Alta    | Corrigir FK `organization_kpi_values.kpi_id` → `kpi_code`   | requirements.md, design.md, tasks.md | 30 min    |
| C4.1  | 🔥 Alta    | Adicionar tasks para Painel de Decisão OU remover do escopo | requirements.md, design.md, tasks.md | 1 hora    |
| C10.1 | 🔥 Alta    | Expandir Tasks 22-37 com subtasks detalhadas                | tasks.md                             | 4-6 horas |

**Total de Esforço Estimado:** 5.5 - 7.5 horas

---

## Próximos Passos

1. ✅ Revisar este documento com o time
2. ⏳ Decidir entre Opção A ou B para cada inconsistência
3. ⏳ Aplicar correções nos 3 documentos (requirements.md, design.md, tasks.md)
4. ⏳ Executar auditoria de validação após correções
5. ⏳ Iniciar implementação com especificação consistente

---

**Documento criado por:** Kiro AI Assistant  
**Data:** 2024-01-XX  
**Status:** 🔴 Aguardando Correções
