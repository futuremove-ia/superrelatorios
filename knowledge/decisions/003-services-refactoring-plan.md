---
title: Arquitetura Services Refatoração Incremental
version: 1.0.0
updated: 2026-04-04
status: active
---

# Plano de Refatoração - Services por Camada

> **For agentic workers:** Este plano deve ser executado incrementalmente, fase por fase, após soft launch.validado. Cada fase.move serviços para sua camada correta seguindo Clean Architecture.

**Goal:** Separar 43 serviços em 3 camadas (Domain/Application/Infrastructure) seguindo Clean Architecture

**Abordagem:** Incremental Bottom-Up (Domain → Application → Infrastructure)

---

## Classificação Atual dos Serviços

### 🔵 Domain Layer (13 serviços)

Lógica de negócio pura, zero dependências externas

| Serviço                       | Arquivo Atual | Arquivo Novo               |
| ----------------------------- | ------------- | -------------------------- |
| universalParserService.ts     | src/services/ | src/domain/shared/parsers/ |
| domainDetector.ts             | src/services/ | src/domain/shared/         |
| columnMappingEngine.ts        | src/services/ | src/domain/shared/         |
| financialDataParserService.ts | src/services/ | src/domain/financial/      |
| kpiLibraryService.ts          | src/services/ | src/domain/shared/         |
| relevanceEngine.ts            | src/services/ | src/domain/shared/         |
| strategyLibraryService.ts     | src/services/ | src/domain/shared/         |
| alertThresholdService.ts      | src/services/ | src/domain/metrics/        |
| dataVersioningService.ts      | src/services/ | src/domain/shared/         |
| dataExtractionParser.ts       | src/services/ | src/domain/shared/         |
| unstructuredService.ts        | src/services/ | src/domain/shared/         |
| contextDetectorService.ts     | src/services/ | src/domain/shared/         |
| benchmarkService.ts           | src/services/ | src/domain/shared/         |

### 🟢 Application Layer (12 serviços)

Orquestração de use-cases, depende de Domain

| Serviço                       | Arquivo Atual | Arquivo Novo     |
| ----------------------------- | ------------- | ---------------- |
| dataPipelineService.ts        | src/services/ | src/application/ |
| onboardingService.ts          | src/services/ | src/application/ |
| organizationKPIService.ts     | src/services/ | src/application/ |
| actionItemService.ts          | src/services/ | src/application/ |
| fileParserService.ts          | src/services/ | src/application/ |
| documentPipeline.ts           | src/services/ | src/application/ |
| financialDocumentPipeline.ts  | src/services/ | src/application/ |
| documentProcessingService.ts  | src/services/ | src/application/ |
| kpiExtractionService.ts       | src/services/ | src/application/ |
| aiValidationSchemas.ts        | src/services/ | src/application/ |
| reportPersistenceService.ts   | src/services/ | src/application/ |
| blueprintExtractionService.ts | src/services/ | src/application/ |

### 🔴 Infrastructure Layer (11 serviços)

Integração externa (Supabase, APIs), depende de Application/Domain

| Serviço                     | Arquivo Atual | Arquivo Novo                      |
| --------------------------- | ------------- | --------------------------------- |
| supabaseReportsService.ts   | src/services/ | src/infrastructure/persistence/   |
| supabaseBusinessService.ts  | src/services/ | src/infrastructure/persistence/   |
| alertNotificationService.ts | src/services/ | src/infrastructure/notifications/ |
| alertManagementService.ts   | src/services/ | src/infrastructure/persistence/   |
| aiService.ts                | src/services/ | src/infrastructure/external/      |
| riskService.ts              | src/services/ | src/infrastructure/external/      |
| blueprintService.ts         | src/services/ | src/infrastructure/external/      |

---

## Fase 1: Domain Layer (Prioridade ALTA)

**Objetivo:** Mover 13 serviços de lógica de negócio pura

**Critérios de sucesso:**

- zero imports de libs externas (sem Supabase, sem axios)
- tipos vêm de src/domain/shared/types/
- testes passam sem mock de infraestrutura

### Task 1.1: Preparar estrutura Domain

**Files:**

- Create: `src/domain/shared/parsers/`
- Create: `src/domain/financial/`
- Create: `src/domain/metrics/`

- [ ] **Step 1: Criar diretórios**

```bash
mkdir -p src/domain/shared/parsers
mkdir -p src/domain/financial
mkdir -p src/domain/metrics
```

- [ ] **Step 2: Verificar estrutura criada**

Run: `ls src/domain/`
Expected: parsers/, financial/, metrics/ existem

---

### Task 1.2: Mover universalParserService.ts

**Files:**

- Move: `src/services/universalParserService.ts` → `src/domain/shared/parsers/`
- Modify: `src/services/index.ts` (atualizar exports)
- Modify: todos os imports em `src/hooks/`, `src/components/`

- [ ] **Step 1: Mover arquivo**

```bash
mv src/services/universalParserService.ts src/domain/shared/parsers/
```

- [ ] **Step 2: Atualizar imports em chain**

Executar grep para encontrar todos os imports:

```bash
grep -r "from.*universalParserService" src/ --include="*.ts"
```

Atualizar cada import de:

```typescript
import { ... } from "@/services/universalParserService";
```

para:

```typescript
import { ... } from "@/domain/shared/parsers/universalParserService";
```

- [ ] **Step 3: Atualizar src/services/index.ts**

Remover linha de export antigo, adicionar re-export:

```typescript
export * from "@/domain/shared/parsers/universalParserService";
```

- [ ] **Step 4: Rodar testes**

Run: `npm test -- universalParserService.test.ts --run`
Expected: 15 tests PASS

- [ ] **Step 5: Commit**

```bash
git add src/domain/shared/parsers/ src/services/index.ts
git commit -m "refactor: move universalParserService to domain layer"
```

---

### Task 1.3: Mover domainDetector.ts

**Files:**

- Move: `src/services/domainDetector.ts` → `src/domain/shared/`
- Modify: imports em universalParserService.ts (agora em domain)
- Modify: src/services/index.ts

- [ ] **Step 1: Mover arquivo**

```bash
mv src/services/domainDetector.ts src/domain/shared/
```

- [ ] **Step 2: Atualizar imports no novo location**

Em `src/domain/shared/parsers/universalParserService.ts`, atualizar:

```typescript
import { detectDomain } from "../../domain/domainDetector";
```

para:

```typescript
import { detectDomain } from "../domainDetector";
```

- [ ] **Step 3: Atualizar src/services/index.ts**

```typescript
export * from "@/domain/shared/domainDetector";
```

- [ ] **Step 4: Rodar testes**

Run: `npm test -- domainDetector.test.ts --run`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "refactor: move domainDetector to domain layer"
```

---

### Task 1.4: Mover columnMappingEngine.ts

**Files:**

- Move: `src/services/columnMappingEngine.ts` → `src/domain/shared/`
- Modify: imports dependentes

- [ ] **Step 1: Mover**

```bash
mv src/services/columnMappingEngine.ts src/domain/shared/
```

- [ ] **Step 2: Atualizar imports**

Verificar imports em universalParserService.ts e atualizar path.

- [ ] **Step 3: Atualizar index.ts e testar**

```bash
npm test -- columnMappingEngine.test.ts --run
```

- [ ] **Step 4: Commit**

---

### Task 1.5: Mover financialDataParserService.ts

**Files:**

- Move: `src/services/financialDataParserService.ts` → `src/domain/financial/`

- [ ] **Step 1: Mover**

```bash
mv src/services/financialDataParserService.ts src/domain/financial/
```

- [ ] **Step 2: Atualizar imports**

Verificar imports de tipos (precisa ser de domain agora).

- [ ] **Step 3: Atualizar index.ts e testar**

```bash
npm test -- financialDataParserService.test.ts --run
```

- [ ] **Step 4: Commit**

---

### Task 1.6: Mover serviços restantes (kpiLibrary, relevance, strategy)

**Files:**

- kpiLibraryService.ts → src/domain/shared/
- relevanceEngine.ts → src/domain/shared/
- strategyLibraryService.ts → src/domain/shared/
- alertThresholdService.ts → src/domain/metrics/
- dataVersioningService.ts → src/domain/shared/
- dataExtractionParser.ts → src/domain/shared/
- unstructuredService.ts → src/domain/shared/
- contextDetectorService.ts → src/domain/shared/
- benchmarkService.ts → src/domain/shared/

**Nota:** Cada serviço deve ser movido, ter imports atualizados, testes executados, e commit individual.

- [ ] **Para cada serviço:**

1. Mover arquivo
2. `grep -r "from.*serviceName" src/` encontrar dependentes
3. Atualizar imports
4. Executar testes relevantes
5. Commit individual

---

## Fase 2: Application Layer (Prioridade MÉDIA)

**Objetivo:** Mover 12 serviços de orquestração/use-cases

### Task 2.1: Preparar estrutura Application

**Files:**

- Create: `src/application/`

- [ ] **Step 1: Criar diretório**

```bash
mkdir -p src/application
```

---

### Task 2.2: Mover dataPipelineService.ts

**Files:**

- Move: `src/services/dataPipelineService.ts` → `src/application/`

**Nota:** Este serviço depende de Domain (universalParser), então Domain precisa estar refatorado primeiro.

- [ ] **Step 1: Verificar dependências**

```bash
grep -r "import.*from" src/services/dataPipelineService.ts
```

- [ ] **Step 2: Mover e atualizar imports**

- [ ] **Step 3: Testar**

```bash
npm test -- dataPipelineService.test.ts --run
```

---

### Task 2.3: Mover demais serviços Application

Mover em ordem:

1. onboardingService.ts
2. organizationKPIService.ts
3. actionItemService.ts
4. fileParserService.ts
5. documentPipeline.ts
6. financialDocumentPipeline.ts
7. documentProcessingService.ts
8. kpiExtractionService.ts
9. aiValidationSchemas.ts
10. reportPersistenceService.ts
11. blueprintExtractionService.ts

---

## Fase 3: Infrastructure Layer (Prioridade BAIXA)

**Objetivo:** Mover 7 serviços de integração externa

### Task 3.1: Preparar estrutura Infrastructure

**Files:**

- Create: `src/infrastructure/persistence/`
- Create: `src/infrastructure/notifications/`
- Create: `src/infrastructure/external/`

- [ ] **Step 1: Criar diretórios**

```bash
mkdir -p src/infrastructure/persistence
mkdir -p src/infrastructure/notifications
mkdir -p src/infrastructure/external
```

---

### Task 3.2: Mover supabase services

**Files:**

- supabaseReportsService.ts → src/infrastructure/persistence/
- supabaseBusinessService.ts → src/infrastructure/persistence/

**Nota:** Estes têm mais dependências externas, testar cuidadosamente.

---

### Task 3.3: Mover alert services

**Files:**

- alertNotificationService.ts → src/infrastructure/notifications/
- alertManagementService.ts → src/infrastructure/persistence/

---

### Task 3.4: Mover AI e external services

**Files:**

- aiService.ts → src/infrastructure/external/
- riskService.ts → src/infrastructure/external/
- blueprintService.ts → src/infrastructure/external/

---

## Critérios de Rollback

Se durante a refatoração:

- Testes falham após 3 tentativas de fix → reverter última mudança
- Build quebra e não resolve em 10 min → reverter fase
- Dependências circulares aparecem → parar e discutir arquitetura

---

## Checklist de Completude

- [ ] Fase 1 completa (13 serviços em Domain)
- [ ] Fase 2 completa (12 serviços em Application)
- [ ] Fase 3 completa (7 serviços em Infrastructure)
- [ ] src/services/ está vazio ou contém apenas re-exports
- [ ] Todos os testes passam
- [ ] Build succeeds
- [ ] Deploy succeeds
- [ ] ADR criado documentando nova estrutura

---

**Saved:** 2026-04-04  
**Status:** Ready for execution (post soft launch)  
**Localização:** knowledge/decisions/
