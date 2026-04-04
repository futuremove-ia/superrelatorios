---
title: Arquitetura Completa do Projeto - Auditoria
version: 1.0.0
updated: 2026-04-04
status: active
---

# 🔍 Auditoria Completa de Arquitetura - SuperRelatórios

**Data:** 2026-04-04  
**Objetivo:** Avaliação completa para soft launch  
**Método:** Análise estrutural, dependências, patterns, documentação

---

## 1. Estrutura de Diretórios Atual

```
src/
├── application/        # Camada de aplicação (use-cases)
├── components/         # Componentes React UI
├── config/            # Configurações
├── constants/         # Constantes globais
├── contexts/          # React Contexts
├── domain/           # DOMAIN (DDD - Zero dependências externas)
│   ├── analytics/
│   ├── commercial/
│   ├── core/
│   ├── customer-support/
│   ├── decision/
│   ├── financial/
│   ├── human-resources/
│   ├── logistics/
│   ├── metrics/
│   ├── operations/
│   ├── registry/
│   ├── shared/        # semanticTaxonomy.ts, types/
│   ├── strategy/
│   └── unified/
├── hooks/            # React hooks (state management)
├── i18n/             # Internacionalização
├── infrastructure/   # INFRASTRUCTURE (adapters)
│   ├── analytics/
│   ├── cache/
│   ├── external/
│   ├── notifications/
│   └── persistence/
├── interfaces/       # Contratos (ports)
├── lib/              # Utilities & Memory system
├── locales/          # Traduções
├── pages/            # Páginas React
├── routes/           # Roteamento
├── services/         # SERVICES (mixed - problemas aqui)
├── styles/          # CSS
├── test/             # Test utilities
├── tests/            # Testes de integração
├── types/            # TYPES (duplicação com domain/shared)
└── utils/            # Utilitários
```

---

## 2. Análise de Camadas (Clean Architecture)

### ✅ Domain Layer (src/domain/)

**Status:** Estrutura DDD existente mas subutilizada

| Aspecto                    | Status              | Observação                                   |
| -------------------------- | ------------------- | -------------------------------------------- |
| Separação por domínio      | ✅ Boa              | financial, commercial, operations, etc.      |
| Zero dependências externas | ✅ Correto          | semanticTaxonomy.ts não tem imports externos |
| Types centralizados        | ⚠️ Parcial          | há tipos em src/types/ também                |
| Entities/Value Objects     | ❓ Não identificado | precisa verificar implementação              |

**Problemas identificados:**

- domain/shared/types vs src/types - duplicação
- Alguns services estão em src/services/ mas pertencem ao domínio

---

### ⚠️ Services Layer (src/services/)

**Status:** Camadaconfusa - mistura de responsabilidades

| Serviço                    | Problema                 | Recomendação                           |
| -------------------------- | ------------------------ | -------------------------------------- |
| universalParserService.ts  | Domain logic em services | Mover para domain/                     |
| domainDetector.ts          | Domain logic             | Mover para domain/shared/              |
| columnMappingEngine.ts     | Domain logic             | Mover para domain/shared/              |
| dataPipelineService.ts     | Application logic        | OK em services                         |
| supabaseReportsService.ts  | Infrastructure           | Mover para infrastructure/persistence/ |
| supabaseBusinessService.ts | Infrastructure           | Mover para infrastructure/persistence/ |

**Problema central:** Inversão de dependências

```
INCORRETO: Services → Domain
CORRETO:   UI/Hooks → Services → Domain
```

---

### ✅ Infrastructure Layer (src/infrastructure/)

**Status:** Estrutura existe mas subutilizada

| Componente     | Uso Atual             | Recomendação            |
| -------------- | --------------------- | ----------------------- |
| persistence/   | Contém repositórios?  | Verificar implementação |
| cache/         | Definido mas usado?   | Verificar uso           |
| external/      | Integrações externas? | Verificar uso           |
| notifications/ | Sistema de alertas?   | Verificar uso           |
| analytics/     | analytics engine?     | Verificar uso           |

**Problema:** Camada existe mas serviços de dados (Supabase) estão em src/services/

---

### ✅ Application Layer (src/hooks/, src/application/)

**Status:** Razoável

| Aspecto              | Status         | Observação                          |
| -------------------- | -------------- | ----------------------------------- |
| Hooks como use-cases | ✅ Bom pattern | useMetrics, useReports, etc.        |
| Separação UI/Logic   | ✅ Bom         | Components separados de hooks       |
| Dependency Injection | ⚠️ Parcial     | Alguns services criados diretamente |

---

## 3. Análise de Dependencies

### Imports Problemáticos

```typescript
// ❌ ERRADO - Domain dependendo de types (application)
import type { Domain } from "@/types/financial-parser";

// ✅ CORRETO - Types no domínio
import type { Domain } from "@/domain/shared/types";
```

### Patterns Observados

1. **Serviços criando outros serviços diretamente** - viola DI
2. **Hooks com lógica de negócio** - deve estar em services
3. **Types em múltiplos lugares** - manutenção difícil

---

## 4. Inventário de Services Atuais

| Arquivo                       | Responsabilidade       | Camada Correta |
| ----------------------------- | ---------------------- | -------------- |
| universalParserService.ts     | Parse de dados         | Domain         |
| domainDetector.ts             | Detecção de domínio    | Domain         |
| columnMappingEngine.ts        | Mapeamento KPIs        | Domain         |
| dataPipelineService.ts        | Pipeline dados         | Application    |
| onboardingService.ts          | Onboarding             | Application    |
| financialDataParserService.ts | Parse financeiro       | Domain         |
| financialDocumentPipeline.ts  | Pipeline PDF           | Application    |
| alertThresholdService.ts      | Alertas                | Domain         |
| alertManagementService.ts     | Gestão alertas         | Application    |
| alertNotificationService.ts   | Notificações           | Infrastructure |
| supabaseReportsService.ts     | Persistence            | Infrastructure |
| supabaseBusinessService.ts    | Persistence            | Infrastructure |
| strategyLibraryService.ts     | Biblioteca estratégias | Domain         |
| kpiLibraryService.ts          | Biblioteca KPIs        | Domain         |
| organizationKPIService.ts     | KPIs org               | Application    |
| reportPersistenceService.ts   | Persistence            | Infrastructure |
| riskService.ts                | Riscos                 | Domain         |
| relevanceEngine.ts            | Relevância             | Domain         |
| kpiExtractionService.ts       | Extração KPIs          | Domain         |
| unstructuredService.ts        | Parse não estruturado  | Domain         |

---

## 5. Problemas Críticos Identificados

### 🔴 Crítico

1. **Duplicação de tipos**
   - src/types/ vs src/domain/shared/types/
   - Manutenção descentralizada

2. **Serviços em camada errada**
   - 10+ serviços em src/services/ que pertencem ao domínio
   - Violação da Clean Architecture

3. **31 testes falhando**
   - Origem: imports de arquivos que não existem
   - Impacto: confiança no código

### 🟡 Médio

4. **Memory system não integrado**
   - Hooks criados mas não usados no dia-a-dia
   - Decisões não sendo registradas

5. **ADRs não completos**
   - Só 2 ADRs criados
   - Faltam decisões importantes

6. **Runbooks limitados**
   - Apenas 2 runbooks
   - Falta runbook de debugging completo

### 🟢 Observação

7. **Build warnings**
   - Large chunks (>600KB)
   - Code splitting não aplicado

---

## 6. Métricas do Projeto

| Métrica              | Valor   | Status  |
| -------------------- | ------- | ------- |
| Arquivos TypeScript  | ~200+   | -       |
| Hooks                | 30+     | Bom     |
| Services             | 20+     | Confuso |
| Domínios DDD         | 12      | Bom     |
| Testes passando      | 395/426 | ⚠️ 73%  |
| Cobertura TipoScript | ~95%    | Bom     |

---

## 7. Recomendações para Soft Launch

### Antes do Launch (Urgente)

1. **Fix testes quebrados** - 31 testes falhando
2. **Consolidar tipos** - mover types para domain/shared
3. **Auditar services** - classificar por camada

### Depois do Launch (Planejado)

4. **Refatorar services** - separar por camada
5. **Integrar memory** - usar hooks em todas sessões
6. **Criar mais ADRs** - decisões do projeto
7. **Expadir runbooks** - operações, onboarding

---

## 8. Score de Arquitetura

| Aspecto              | Score | Justificativa           |
| -------------------- | ----- | ----------------------- |
| Estrutura DDD        | 75%   | Existe mas misturada    |
| Separação de camadas | 60%   | Inversões identificadas |
| Nomenclatura         | 80%   | Boa mas inconsistente   |
| Testabilidade        | 70%   | Tests falhando          |
| Documentação         | 65%   | ADRs/RBOKs iniziados    |
| type Safety          | 90%   | TypeScript bem usado    |
| Overall              | 70%   | Precisa refinamento     |

---

## 9. Próximos Passos Recomendados

1. **Auditoria detalhada por domínio** - cada domain merece análise
2. **Fix dos 31 testes** - restore ou remove tests quebrados
3. **Mapeamento completo de services** - classificar todos
4. **Decisão: refatorar agora ou depois do launch?**

---

**Auditoria realizada por:** Agent  
**Data:** 2026-04-04  
**Status do documento:** Ativo
