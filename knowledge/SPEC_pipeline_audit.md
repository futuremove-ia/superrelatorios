# Auditoria: File/Data Pipeline e Parser de Documentos — SuperRelatórios

**Data:** 2026-04-01
**Escopo:** fileParserService, kpiExtractionService, aiService, contextDetectorService, reportPersistenceService, strategyLibraryService, supabaseBusinessService, AI Proxy (api/gemini.ts), packages/parser, superrelatorios-api

---

## Executive Summary

**Score Geral: 48/100** 🔴

O pipeline de dados existe em **dois estágios completamente diferentes de maturidade**. O pipeline atual (implementado) é um fluxo frontend-only que processa CSV/XLSX via browser, envia para o Gemini e persiste resultados. O pipeline especificado (planejado) é um sistema assíncrono server-side com Unstructured API, pgvector, Google Drive/OneDrive e Edge Functions. **O gap entre o que existe e o que foi especificado é enorme.**

Os problemas críticos são: **tipo de conflito em `ExtractedKPI`** (dois tipos incompatíveis com o mesmo nome), **`reportPersistenceService` consulta tabela inexistente** (`organization_members`), **`strategyLibraryService` tem bug lógico grave** (compara `kpi.code === kpi.code`), e **`packages/parser` e `superrelatorios-api` são esqueletos vazios** sem nenhum arquivo de código.

---

## 1. Mapa do Pipeline Atual vs. Especificado

### 1.1 Pipeline Atual (Implementado — Frontend-Only)

```
Usuário faz upload (CSV/XLSX)
        ↓
fileParserService.parseFile()
  → PapaParse (CSV) ou SheetJS (XLSX)
  → ParsedFileData { headers, rows, rowCount }
        ↓
contextDetectorService.detectDomain()
  → Detecta domínio (finance/sales/marketing/ops)
  → Mapeia colunas para KPI codes
        ↓
aiService.analyzeDataWithAI()
  → Monta prompt com dados (max 100 linhas)
  → POST /api/gemini (AI Proxy Vercel Edge)
  → Gemini 2.0 Flash → AIAnalysisResult { summary, blocks[] }
        ↓
kpiExtractionService.extractKPIsFromAIResult()
  → Extrai KPIs dos blocos (tabelas + texto)
  → Deduplicação por código
  → Filtra por confiança mínima (0.6)
        ↓
aiService.generateAIDiagnostic()
  → Segundo prompt para diagnóstico
  → AIDiagnosticResult { diagnostic, suggestedPriority }
        ↓
kpiExtractionService.enrichDiagnosticWithCodes()
  → Mapeia diagnóstico para challenge_code
  → Sugere lever_code
        ↓
reportPersistenceService.saveReportWithMetrics()
  → INSERT reports
  → INSERT user_metrics (KPIs extraídos)
  → INSERT/UPDATE user_challenges (desafio detectado)
        ↓
Dashboard atualizado via TanStack Query invalidation
```

**Pipeline especificado (não implementado):**
```
Upload/Drive/OneDrive → Supabase Storage → pg_notify → Edge Function
→ Unstructured API → SemanticParser (Gemini) → KPIMapper
→ user_metrics + document_extracted_chunks (pgvector)
→ Supabase Realtime → Frontend status update
```

---

## 2. Auditoria por Componente

### 2.1 `fileParserService.ts` — Parser de Arquivos

**Status:** ✅ Funcional com limitações

**O que faz bem:**
- Suporta CSV via PapaParse com `header: true` e `skipEmptyLines: true`
- Suporta XLSX/XLS via SheetJS com leitura de ArrayBuffer
- Retorna estrutura normalizada `ParsedFileData { headers, rows, rowCount, fileType }`
- Tratamento de erro adequado com mensagens descritivas

**Problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-C1 | Suporta apenas CSV e XLSX — sem PDF, DOCX, TXT, PNG, JPEG | 🔴 Crítico |
| PP-W1 | Sem validação de tamanho de arquivo (spec: máx 50MB) | ⚠️ Alerta |
| PP-W2 | Sem validação de tipo MIME — apenas verifica extensão | ⚠️ Alerta |
| PP-W3 | Lê apenas a primeira aba do Excel — sem seleção de aba | ⚠️ Alerta |
| PP-W4 | Sem suporte a encoding (UTF-8, Latin-1) — pode corromper acentos | ⚠️ Alerta |
| PP-I1 | Sem preview de amostra (spec: 5 linhas antes de confirmar) | 📋 Melhoria |
| PP-I2 | Sem detecção de separador decimal (vírgula vs ponto) | 📋 Melhoria |

**Gap vs. spec (Req 31.1):** A spec exige suporte a PDF, DOCX, XLSX, CSV, TXT, PNG e JPEG com máx 50MB. O serviço atual suporta apenas CSV e XLSX sem validação de tamanho.

---

### 2.2 `kpiExtractionService.ts` — Extração de KPIs

**Status:** ⚠️ Funcional com bugs críticos

**O que faz bem:**
- Mapeamento de nomes comuns para códigos padronizados (`KPI_NAME_MAPPINGS`)
- Extração de dados tabulares com alta confiança (0.85)
- Extração de texto com regex para padrões monetários, percentuais e dias
- Deduplicação por código mantendo maior confiança
- Inferência de unidade baseada em nome de coluna e valor

**Problemas Críticos:**

**PP-C2 — Conflito de tipo `ExtractedKPI` (dois tipos incompatíveis):**

Existem **dois tipos `ExtractedKPI` com schemas diferentes** no mesmo projeto:

```typescript
// src/services/kpiExtractionService.ts
export interface ExtractedKPI {
  code: string;
  value: number;
  unit: 'percentage' | 'currency' | 'days' | 'ratio' | 'count' | 'monetary';
  benchmarkValue?: number;
  deltaPercentage?: number;
  confidence: number;
  source: 'table' | 'text' | 'chart' | 'calculated';
  sourceBlockIndex?: number;
}

// src/types/extraction.ts
export interface ExtractedKPI {
  code: string;
  name: string;        // ← campo extra
  value: number;
  unit: string;        // ← tipo diferente (string vs union)
  status: 'critical' | 'warning' | 'good';  // ← campo extra
  trend: 'up' | 'down' | 'stable';          // ← campo extra
  previousValue?: number;  // ← campo extra
  change?: number;          // ← campo extra
  confidence: number;
  extractedAt: Date;        // ← campo extra
  source: string;           // ← tipo diferente
}
```

Qualquer código que importa `ExtractedKPI` de um módulo e passa para outro que espera o outro tipo vai falhar silenciosamente em runtime.

**PP-C3 — Bug lógico em `hasChallengeSymptoms`:**

```typescript
// strategyLibraryService.ts — linha ~120
private hasChallengeSymptoms(kpis: ExtractedKPI[], challenge: string): boolean {
  const relevantKPIs = challengeSymptoms[challenge] || [];
  return relevantKPIs.some(kpi =>
    kpis.some(kpi => kpi.code === kpi.code && kpi.status === 'critical')
    //          ^^^                ^^^
    // Variável 'kpi' do outer some é shadowed pelo inner some
    // kpi.code === kpi.code é SEMPRE true (compara consigo mesmo)
    // kpi.status === 'critical' usa o tipo errado (ExtractedKPI de extraction.ts)
  );
}
```

Este bug faz com que `hasChallengeSymptoms` retorne `true` para qualquer array não-vazio de KPIs, independentemente do desafio. O confidence score de todos os templates fica inflado artificialmente.

**Outros problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-W5 | `KPI_NAME_MAPPINGS` tem apenas 20 entradas — cobre <15% dos KPIs da biblioteca | ⚠️ Alerta |
| PP-W6 | Regex de extração de texto é frágil — falha com variações de formatação | ⚠️ Alerta |
| PP-W7 | `inferUnit` usa heurísticas simples que erram em casos ambíguos | ⚠️ Alerta |
| PP-W8 | Sem suporte a extração de período (mês/ano) dos dados | ⚠️ Alerta |
| PP-I3 | Sem extração de valores negativos (prejuízo, queda) | 📋 Melhoria |
| PP-I4 | Sem normalização de escala (mil vs milhão vs bilhão) | 📋 Melhoria |

---

### 2.3 `aiService.ts` — Serviço de IA

**Status:** ✅ Bem implementado

**O que faz bem:**
- Cache de sessão com TTL de 5 minutos por hash de dados + contexto
- Retry com exponential backoff (3 tentativas: 500ms, 1s, 2s)
- Sem retry para erros 4xx (exceto 429)
- Prompts bem estruturados com instrução de JSON puro
- `temperature: 0.1` para respostas determinísticas
- `response_mime_type: "application/json"` para forçar JSON
- Separação clara entre análise (`analyzeDataWithAI`) e diagnóstico (`generateAIDiagnostic`)

**Problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-W9 | Trunca dados em 100 linhas sem aviso ao usuário | ⚠️ Alerta |
| PP-W10 | Sem validação do schema da resposta JSON do Gemini | ⚠️ Alerta |
| PP-W11 | Cache em memória — perdido ao recarregar a página | ⚠️ Alerta |
| PP-W12 | Sem contexto do Blueprint da empresa nos prompts | ⚠️ Alerta |
| PP-W13 | Sem contexto da biblioteca de KPIs nos prompts | ⚠️ Alerta |
| PP-I5 | Prompts não incluem exemplos de KPI codes esperados | 📋 Melhoria |
| PP-I6 | Sem streaming de resposta — usuário espera sem feedback | 📋 Melhoria |

**Gap vs. spec (Req 34.4):** A spec exige que o Blueprint seja injetado como contexto permanente em todas as chamadas ao Gemini. O `aiService` não tem acesso ao Blueprint.

---

### 2.4 `api/gemini.ts` — AI Proxy (Vercel Edge)

**Status:** ✅ Bem implementado

**O que faz bem:**
- `GEMINI_API_KEY` nunca exposta ao browser ✅
- Rate limiting por IP: 20 req/min ✅
- CORS restrito a `ALLOWED_ORIGIN` ✅
- Validação de método (apenas POST) ✅
- Validação de payload (`contents` obrigatório) ✅
- Runtime `edge` para baixa latência ✅
- Tratamento de erros upstream com status codes corretos ✅

**Problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-W14 | Rate limiting em memória — não persiste entre instâncias Edge | ⚠️ Alerta |
| PP-W15 | `ALLOWED_ORIGIN` aceita apenas uma origem — sem suporte a múltiplos domínios | ⚠️ Alerta |
| PP-W16 | Sem validação de tamanho do payload — pode aceitar prompts gigantes | ⚠️ Alerta |
| PP-W17 | Sem logging estruturado para monitoramento de uso e custos | ⚠️ Alerta |
| PP-I7 | Sem suporte a `blueprintContext` no payload (spec ADR-011) | 📋 Melhoria |

---

### 2.5 `reportPersistenceService.ts` — Persistência em Cascata

**Status:** 🔴 Crítico — tabela inexistente

**O que faz bem:**
- Persistência em cascata: relatório → métricas → desafio
- Upsert inteligente de desafios (atualiza se já existe ativo)
- Usa `user_metrics` corretamente (tabela real) ✅
- Usa `user_challenges` corretamente (tabela real) ✅
- Não falha completamente se métricas ou desafio falharem

**Problema Crítico:**

**PP-C4 — Consulta tabela `organization_members` que não existe no banco:**

```typescript
// reportPersistenceService.ts — linha ~45
const { data: orgMember, error: orgError } = await supabase
  .from('organization_members')  // ← TABELA NÃO EXISTE
  .select('organization_id')
  .eq('user_id', userId)
  .single();
```

O banco real usa `profiles` (não `organization_members`) para vincular usuário a organização. Esta query sempre retorna erro, fazendo com que **nenhum relatório seja salvo com métricas**.

**Correção:**
```typescript
const { data: profile, error: orgError } = await supabase
  .from('profiles')
  .select('organization_id')
  .eq('user_id', userId)
  .single();
```

**Outros problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-C5 | `updateReportMetrics` também usa `organization_members` | 🔴 Crítico |
| PP-W18 | `reference_period` sempre usa mês atual — sem extração do período real dos dados | ⚠️ Alerta |
| PP-W19 | `period_start` e `period_end` não são preenchidos em `user_metrics` | ⚠️ Alerta |
| PP-W20 | Sem transação — se `user_metrics` falha, relatório já foi salvo sem métricas | ⚠️ Alerta |
| PP-I8 | `calculateEstimatedImpact` usa regex frágil para extrair valores monetários | 📋 Melhoria |

---

### 2.6 `strategyLibraryService.ts` — Biblioteca Estratégica

**Status:** ⚠️ Funcional com bugs e limitações

**O que faz bem:**
- Templates estratégicos com ActionLevers e ActionSteps detalhados
- Cálculo de confidence score baseado em KPIs relevantes
- Ordenação por confidence decrescente
- Estrutura extensível para novos templates

**Problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-C3 | Bug lógico em `hasChallengeSymptoms` (ver seção 2.2) | 🔴 Crítico |
| PP-W21 | Templates hardcoded em memória — não usa `library_challenges` do banco | ⚠️ Alerta |
| PP-W22 | `matchesIndustry` e `matchesCompanySize` sempre retornam `true` (TODO) | ⚠️ Alerta |
| PP-W23 | Apenas 2 templates — cobre apenas CASH_FLOW_CRUNCH e INEFFICIENT_SALES_MACHINE | ⚠️ Alerta |
| PP-W24 | Singleton pattern com estado mutável — pode causar problemas em SSR | ⚠️ Alerta |
| PP-I9 | Sem integração com `library_levers` e `library_actions` do banco | 📋 Melhoria |

---

### 2.7 `supabaseBusinessService.ts` — Serviço de Negócio

**Status:** ✅ Bem implementado

**O que faz bem:**
- Usa `radar_items` com schema correto (modelo normalizado) ✅
- Usa `action_items` corretamente ✅
- Mapeamento de `RadarItemRow` para tipos de domínio bem feito
- Funções helper para mapeamento de status e severity

**Problemas:**

| ID | Problema | Severidade |
|---|---|---|
| PP-W25 | `getDiagnosticsByOrganization` lê diagnóstico de `ai_raw_analysis` JSONB — não usa `library_diagnoses` | ⚠️ Alerta |
| PP-W26 | `getPrioritiesByOrganization` não faz JOIN com `library_diagnoses` e `library_impacts` | ⚠️ Alerta |
| PP-W27 | `calculatePriorityScore` usa `priority_score / 10` como impact — heurística frágil | ⚠️ Alerta |
| PP-I10 | Sem paginação nas queries — pode ser lento com muitos radar items | 📋 Melhoria |

---

### 2.8 `packages/parser/` e `superrelatorios-api/` — Esqueletos Vazios

**Status:** 🔴 Não implementado

```
packages/parser/src/parser_core/
  transformers/   ← VAZIO
  utils/          ← VAZIO

superrelatorios-api/reports/reports/src/
  api/            ← VAZIO
  core/           ← VAZIO
  database/       ← VAZIO
  repositories/   ← VAZIO
  services/       ← VAZIO
  templates/      ← VAZIO
  tests/          ← VAZIO
```

Ambos os projetos têm estrutura de pastas criada mas **zero arquivos de código**. São esqueletos que nunca foram implementados. O `superrelatorios-api` tem diretórios `uploads/`, `outputs/`, `temp/` e `reports/` também vazios.

**Impacto:** O pipeline server-side especificado (Unstructured API, processamento assíncrono, pgvector) não existe. Todo o processamento acontece no browser do usuário.

---

## 3. Análise de Testes

**Status:** ⚠️ Parcial

### 3.1 Testes Existentes

| Arquivo | Tipo | Status |
|---|---|---|
| `src/services/aiIntegration.test.ts` | Integração (mock fetch) | ✅ Existe |
| `src/services/contextDetectorService.test.ts` | Unitário | ✅ Existe |
| `src/services/strategyLibraryService.test.ts` | Unitário | ✅ Existe |
| `src/services/fileParserService.test.ts` | Unitário | ✅ Existe |
| `src/services/aiService.test.ts` | Unitário | ✅ Existe |

### 3.2 Problemas nos Testes

**PP-T1 — `aiIntegration.test.ts` verifica campo inexistente:**
```typescript
expect(fetch).toHaveBeenCalledWith(
  expect.any(String),
  expect.objectContaining({
    body: expect.stringContaining('ESPECIALIZAÇÃO:')  // ← não existe no prompt real
  })
);
```
O prompt real não contém `'ESPECIALIZAÇÃO:'`. Este teste sempre falha.

**PP-T2 — Sem testes para `reportPersistenceService`:**
O serviço mais crítico do pipeline (que tem o bug da tabela `organization_members`) não tem nenhum teste.

**PP-T3 — Sem testes para `kpiExtractionService`:**
O serviço com o conflito de tipos `ExtractedKPI` não tem testes unitários.

**PP-T4 — `contextDetectorService.test.ts` testa serviço que pode não existir:**
O arquivo de teste referencia `contextDetectorService` mas não foi possível confirmar se o arquivo de implementação existe em `src/services/contextDetectorService.ts`.

---

## 4. Gap Analysis: Implementado vs. Especificado

| Funcionalidade | Especificada (Req) | Implementada | Gap |
|---|---|---|---|
| Upload CSV/XLSX | Req 31.1 | ✅ Parcial | Sem validação de tamanho |
| Upload PDF/DOCX/TXT/PNG/JPEG | Req 31.1 | ❌ Não | 100% ausente |
| Google Drive OAuth | Req 31.2 | ❌ Não | 100% ausente |
| Microsoft OneDrive OAuth | Req 31.3 | ❌ Não | 100% ausente |
| Processamento assíncrono (queue) | Req 31.4 | ❌ Não | Frontend-only síncrono |
| Unstructured API | Req 31.6 | ❌ Não | 100% ausente |
| Parser semântico via Gemini | Req 31.7 | ✅ Parcial | Sem contexto de KPI library |
| Status em tempo real (Realtime) | Req 31.9 | ❌ Não | Sem feedback de progresso |
| Retry automático em falha | Req 31.10 | ❌ Não | Sem retry no pipeline |
| Relatório de extração | Req 31.11 | ✅ Parcial | Sem campos não reconhecidos |
| Rastreabilidade doc→KPI | Req 31.14 | ✅ Parcial | `source_block_index` salvo |
| Gestão de Data Sources | Req 32 | ❌ Não | Sem tela de gestão |
| Histórico de documentos | Req 32.4 | ❌ Não | Sem tabela `processed_documents` |
| pgvector embeddings | Req 33.10 | ❌ Não | 100% ausente |
| Knowledge Snapshots | Req 33 | ❌ Não | 100% ausente |
| Blueprint como contexto IA | Req 34.4 | ❌ Não | Prompts sem Blueprint |

**Resumo:** De 16 funcionalidades especificadas, **3 estão parcialmente implementadas** e **13 estão completamente ausentes**.

---

## 5. Resumo de Findings

### 🔴 Críticos (bloqueiam funcionalidade)

| ID | Problema | Localização | Impacto |
|---|---|---|---|
| PP-C1 | Suporte apenas a CSV/XLSX — sem PDF, DOCX, imagens | `fileParserService.ts` | Pipeline incompleto |
| PP-C2 | Dois tipos `ExtractedKPI` incompatíveis | `kpiExtractionService.ts` vs `types/extraction.ts` | Falhas silenciosas de tipo |
| PP-C3 | Bug lógico em `hasChallengeSymptoms` — sempre retorna true | `strategyLibraryService.ts` | Confidence scores inflados |
| PP-C4 | Consulta `organization_members` (tabela inexistente) | `reportPersistenceService.ts` | Nenhum relatório salvo com métricas |
| PP-C5 | `updateReportMetrics` também usa `organization_members` | `reportPersistenceService.ts` | Reprocessamento quebrado |

### ⚠️ Alertas (degradam qualidade)

| ID | Problema |
|---|---|
| PP-W5 | `KPI_NAME_MAPPINGS` cobre <15% dos KPIs da biblioteca |
| PP-W9 | Dados truncados em 100 linhas sem aviso |
| PP-W12 | Blueprint não injetado nos prompts do Gemini |
| PP-W13 | Biblioteca de KPIs não injetada nos prompts |
| PP-W14 | Rate limiting em memória — não persiste entre instâncias |
| PP-W18 | `reference_period` sempre usa mês atual |
| PP-W20 | Sem transação — relatório salvo sem métricas em caso de falha |
| PP-W21 | Templates estratégicos hardcoded — não usa banco |
| PP-W22 | `matchesIndustry` e `matchesCompanySize` sempre retornam `true` |
| PP-T1 | Teste verifica campo inexistente no prompt |
| PP-T2 | `reportPersistenceService` sem testes |

---

## 6. Plano de Correção Priorizado

### Fase 0 — Correções Imediatas (1-3 dias)

**1. [PP-C4/C5] Corrigir `organization_members` → `profiles`**
```typescript
// reportPersistenceService.ts
const { data: profile } = await supabase
  .from('profiles')
  .select('organization_id')
  .eq('user_id', userId)
  .single();
```

**2. [PP-C2] Unificar tipo `ExtractedKPI`**
- Escolher um schema canônico (recomendado: o de `kpiExtractionService.ts` com campos de extração)
- Remover `src/types/extraction.ts` ou renomear para `ExtractedKPILegacy`
- Atualizar todos os imports

**3. [PP-C3] Corrigir bug em `hasChallengeSymptoms`**
```typescript
private hasChallengeSymptoms(kpis: ExtractedKPI[], challenge: string): boolean {
  const relevantCodes = challengeSymptoms[challenge] || [];
  return relevantCodes.some(code =>
    kpis.some(kpi => kpi.code === code && kpi.status === 'critical')
  );
}
```

### Fase 1 — Melhorias do Pipeline Atual (1-2 semanas)

**4. [PP-W12/W13] Injetar Blueprint e KPI library nos prompts**
```typescript
function buildAnalysisPrompt(data, context, blueprint?, kpiLibrary?): string {
  return `
    CONTEXTO DA EMPRESA: ${JSON.stringify(blueprint?.slice(0, 500))}
    KPIs RELEVANTES: ${JSON.stringify(kpiLibrary?.slice(0, 20))}
    DADOS: ${JSON.stringify(data.slice(0, 100))}
    ...
  `;
}
```

**5. [PP-W5] Expandir `KPI_NAME_MAPPINGS`**
- Adicionar todos os KPIs da `library_kpis` ao mapeamento
- Incluir variações em inglês e espanhol

**6. [PP-W18/W19] Extrair período real dos dados**
- Detectar colunas de data nos dados
- Inferir `reference_period`, `period_start`, `period_end` dos dados reais

**7. [PP-W21/W22] Conectar `strategyLibraryService` ao banco**
- Substituir templates hardcoded por queries a `library_challenges`, `library_levers`, `library_actions`
- Implementar `matchesIndustry` e `matchesCompanySize` com dados do Blueprint

### Fase 2 — Expansão do Pipeline (2-4 semanas)

**8. [PP-C1] Suporte a PDF via pdf-lib (já instalado)**
- Extrair texto de PDFs usando `pdf-lib` (já está em `node_modules`)
- Para PDFs com imagens/tabelas: integrar Unstructured API

**9. Adicionar validação de arquivo**
- Tamanho máximo: 50MB (spec Req 31.1)
- Validação de MIME type além de extensão
- Preview de 5 linhas antes de confirmar (spec Req 15.3)

**10. Feedback de progresso**
- Exibir etapas do pipeline: "Lendo arquivo → Analisando → Extraindo KPIs → Salvando"
- Usar estado local ou Supabase Realtime

### Fase 3 — Pipeline Server-Side (4-8 semanas)

**11. Implementar Edge Function `api/process-document.ts`**
- `UnstructuredClient` para extração de PDF/DOCX/imagens
- `SemanticParser` com contexto de KPI library + Blueprint
- `KPIMapper` com persistência em `user_metrics`
- Status em tempo real via Supabase Realtime

**12. Implementar fila assíncrona**
- `pg_notify` para disparar processamento
- Retry com backoff exponencial
- Máximo 50 documentos simultâneos por organização

**13. Integração Google Drive / OneDrive**
- OAuth 2.0 flows
- Webhook handlers para mudanças
- Sincronização periódica via pg_cron

---

## 7. Conclusão

O pipeline atual é um **MVP funcional mas frágil**. Ele processa CSV/XLSX no browser, envia para o Gemini e persiste resultados — o fluxo básico funciona. Porém tem **5 bugs críticos** que comprometem a confiabilidade, e está a **anos-luz** do pipeline server-side especificado com Unstructured API, pgvector e processamento assíncrono.

**Prioridade imediata:** Corrigir os 5 críticos (PP-C1 a PP-C5) antes de qualquer nova feature. O bug PP-C4 (`organization_members`) é o mais urgente — ele silenciosamente impede que qualquer relatório seja salvo com métricas.

**Visão de longo prazo:** O pipeline especificado (Fase 3) é o caminho certo — processamento server-side, suporte a múltiplos formatos, rastreabilidade completa. Mas requer implementação do zero, pois `packages/parser/` e `superrelatorios-api/` são esqueletos vazios.

---

**Auditoria realizada por:** Kiro AI Assistant
**Metodologia:** Análise estática de código, rastreamento de tipos, cruzamento com schema real do Supabase e requisitos especificados
