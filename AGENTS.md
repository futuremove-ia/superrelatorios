# 🤖 SuperRelatórios - Agentes Guide

Este documento estabelece as regras e processos que **TODOS os agentes** (incluindo LLMs como eu) devem seguir ao trabalhar no projeto SuperRelatórios.

---

## 🎯 Princípios Fundamentais

### 1. Toda mudança significativa requer documentação

> **REGRA DE OURO**: Se você alterou código, **DEVE** atualizar a documentação correlata.

Uma "mudança significativa" inclui:

- Criação de novos componentes
- Alteração de APIs ou tipos
- Mudanças em dependências ou build
- Correções de bugs importantes
- Novas funcionalidades

### 2. Clean Architecture - Regra de Ouro

> **NUNCA inverta as dependências**. O Domain é o centro puro, sem dependências externas. Services (application layer) dependem do Domain, nunca o contrário.

```
┌─────────────────────────────────────────────────────────────────────┐
│  INFRASTRUCTURE (adapters)  →  APPLICATION (services/use-cases)   │
│         ↓                                    ↓                     │
│         ↓              DEPENDENCY           ↓                     │
│         ↓              DIRECTION            ↓                     │
│         ↓                  ←←←←←←←←←←←←←←←←←←←                      │
│         ↓                                    ↓                     │
│  UI/Controllers                       DOMAIN (entities/value-obj) │
└─────────────────────────────────────────────────────────────────────┘
```

**Regras absolutas:**

- Domain (`src/domain/`) = ZERO dependências externas (sem Supabase, sem libs de parsing, sem React)
- Tipos compartilhados vão para `src/domain/shared/types/`
- Semantic Taxonomia/Dicionário vai para `src/domain/shared/semanticTaxonomy.ts`
- Services em `src/services/` = application layer, importam do domain, nunca exportam para ele
- **NUNCA** criar arquivos no domain que dependam de types em `src/types/` (types do projeto são application)

### 3. Processo de Fechamento de Sessão

**NUNCA** finalize uma sessão sem verificar:

```
[✓] Código funciona? (build ok)
[✓] Deploy feito?
[✓] Testes passam?
[✓] Documentação atualizada?
```

---

## 📋 Checklist de Documentação

### Antes de Commitar

- [ ] **CHANGELOG.md**: Nova entrada adicionada?
- [ ] **Types atualizados** (se aplicável)?
- [ ] **README.md** (se mudança significativa)?
- [ ] **Docs/** (se mudança técnica)?

### Tipos de Documentação por Mudança

| Tipo de Mudança | Onde Documentar                          |
| --------------- | ---------------------------------------- |
| Novo componente | CHANGELOG.md + componente header         |
| Nova feature    | CHANGELOG.md + docs/ relevante           |
| Bug fix         | CHANGELOG.md                             |
| Refatoração     | CHANGELOG.md + docs/technical/           |
| Performance     | CHANGELOG.md + PERFORMANCE_MONITORING.md |
| Segurança       | docs/06-compliance/                      |

---

## 📝 Template de Changelog

Use este template para novas entradas no CHANGELOG.md:

```markdown
## [VERSION] - DATA

### ✨ Novas Funcionalidades

- **Feature Name**: Descrição breve
  - Detalhe técnico
  - Localização: `src/path/file.ts`

### 🔧 Melhorias

- **Improvement**: Descrição
  - Impacto: Alto/Médio/Baixo

### 🐛 Correções

- **Bug Fix**: Descrição
  - Fix em `src/path/file.ts`

### 📦 Arquivos Afetados

- `src/components/...`
- `src/services/...`
- `src/types/...`

### 🧪 Quality Gates

- TypeScript: [OK/ERROS]
- Build: [OK/TEMPO]
- Deploy: [OK/URL]
```

---

## 🔄 Fluxo de Trabalho do Agente

### 1. Análise

```
Entender o problema → Identificar arquivos → Planejar mudanças
```

### 2. Implementação

```
Implementar → Build & Test → Deploy → [NUNCA PARAR AQUI]
```

### 3. Documentação (OBRIGATÓRIO)

```
Atualizar CHANGELOG → Atualizar docs/ → Verificar completeness → Finalizar
```

### 4. Closing

```
Review final → Confirmar docs atualizados → Reportar status
```

---

## ⚠️ Penalidades por Não Documentar

Se um agente (incluindo eu) não seguir este processo:

1. **Primeira vez**: Revisão obrigatória das regras
2. **Segunda vez**: Reporte ao maintainer
3. **Terceira vez**: Escalação para architecture team

---

## 📚 Documentos de Referência

| Documento      | Finalidade                     |
| -------------- | ------------------------------ |
| `CHANGELOG.md` | Histórico de todas as mudanças |
| `docs/`        | Documentação pública           |
| `knowledge/`   | Base de conhecimento interna   |

---

## 📚 Padrões de Documentação

### Estrutura de Diretórios

```
docs/                           → Documentação PÚBLICA (usuários externos)
├── getting-started.md          → Primeiros passos
├── concepts/                    → Conceitos fundamentais
├── api/                         → Referência de API
├── user-guides/                 → Guias para usuários
├── deployment/                  → Deploy guides
└── contribute/                  → Como contribuir

knowledge/                      → Documentação INTERNA (equipe + agentes)
├── project-memory.md           → Single source of truth
├── architecture/                → Arquitetura técnica
├── decisions/                   → ADR (Architecture Decision Records)
├── runbooks/                    → Operacionais
├── onboarding/                  → Onboarding de devs
├── changelog.md                 → Histórico de mudanças
└── ARCHIVED/                    → Docs obsoletas (leitura apenas)
```

### Nomenclatura de Arquivos

- **Arquivos docs**: `kebab-case` (ex: `getting-started.md`, `api-reference.md`)
- **Pastas**: `kebab-case` (ex: `user-guides/`, `runbooks/`)
- **ADR**: `###-description.md` (ex: `001-choose-supabase-as-db.md`)

### Frontmatter (OBRIGATÓRIO)

Todos os documentos devem ter frontmatter:

```yaml
---
title: Nome do Documento
version: 1.0.0
updated: 2026-04-04
status: active | deprecated | archived
---
```

### Status de Documentos

| Status       | Significado      | Ação                          |
| ------------ | ---------------- | ----------------------------- |
| `active`     | Válido, usar     | Manter em docs/ ou knowledge/ |
| `deprecated` | Obsoleto, evitar | Mover para ARCHIVED/          |
| `archived`   | Histórico        | Mover para ARCHIVED/          |

### Regras de Arquivamento

1. **NUNCA delete** documentos obsoletos — mova para `knowledge/ARCHIVED/`
2. Documente no topo do arquivo: `# Arquivado - Não usar`
3. Mantenha arquivo no git (histórico)

---

## 🛠️ Ferramentas do Agente

Ao trabalhar no projeto, o agente DEVE usar:

- **glob**: Encontrar arquivos relacionados
- **grep**: Buscar padrões no código
- **read**: Ler contexto antes de editar
- **write**: Criar/atualizar documentação
- **todowrite**: Rastrear progresso com TODOs

---

## 🧠 Sistema de Memória do Projeto

O projeto possui um sistema de memória em 3 camadas para persistência inteligente de contexto:

### Camadas de Memória

| Camada      | Localização                       | Uso                           | Persistência        |
| ----------- | --------------------------------- | ----------------------------- | ------------------- |
| **Session** | `src/lib/memory/sessionMemory.ts` | Contexto da conversa atual    | Runtime (in-memory) |
| **Project** | `knowledge/project-memory.md`     | Dados estruturados do projeto | Arquivo markdown    |
| **Archive** | `knowledge/ARCHIVED/`             | Referências históricas        | Arquivo markdown    |

### Como Usar

```typescript
import { useMemory, useTaskMemory, useDecisionMemory } from "@/lib/memory";

// Hook principal - gerencia toda a memória
const { memory, state } = useMemory();

// Registrar tarefa atual
memory.setCurrentTask("Implementar parser");
memory.recordAction("Started implementing parser");

// Registrar decisão
memory.recordDecision("Usar kebab-case para nomes", "Padrão global adotado");

// Recuperar contexto
const context = memory.getProjectContext();
const decisions = memory.retrieve("parser", ["decision"], 5);
```

### Hooks Disponíveis

| Hook                    | Uso                                          |
| ----------------------- | -------------------------------------------- |
| `useMemory()`           | Memória completa (sessions, decisões, ações) |
| `useTaskMemory()`       | Foco em gerenciamento de tarefas             |
| `useDecisionMemory()`   | Foco em registro de decisões                 |
| `useContextualMemory()` | Contexto do projeto (domínios, referências)  |

### Regras de Uso

1. **Ao iniciar sessão**: Chamar `memory.startSession()`
2. **Ao iniciar tarefa**: Chamar `memory.setCurrentTask(nome)`
3. **Ao tomar decisão**: Chamar `memory.recordDecision(decisao, razao)`
4. **Ao completar ação**: Chamar `memory.recordAction(descricao, resultado)`
5. **Ao encerrar sessão**: Chamar `memory.endSession()` antes de fechar

---

## 🧠 Skills do Agente

Este projeto utiliza o sistema de **Skills** do Antigravity Awesome Skills para melhorar a qualidade e eficiência do trabalho dos agentes.

### Como Usar Skills

Quando precisar de ajuda especializada, simply ask or reference the skill:

```
@skill-name
```

O agente carregará automaticamente a skill relevante e seguirá suas diretrizes.

### Skills Instaladas no Projeto

**Locação:** `.agents/skills/`

| Skill                      | Propósito                          | Quando Usar                     |
| -------------------------- | ---------------------------------- | ------------------------------- |
| `@roadmap-planning`        | Strategic roadmap planning         | Criar ou revisar roadmaps       |
| `@frontend-design`         | UI/UX guidelines                   | Design de componentes           |
| `@systematic-debugging`    | Debug profissional                 | Resolver bugs                   |
| `@clean-ddd-hexagonal`     | Clean Architecture, DDD, Hexagonal | Decisões arquiteturais          |
| `@documentation-templates` | Templates de documentação          | Criar docs                      |
| `@concise-planning`        | Planejamentos rápidos              | Tasks simples                   |
| `@search-first`            | Research-before-coding             | Investigar antes de implementar |

### Melhores Práticas (baseado em Everything Claude Code)

**Processo antes de codar:**

1. **Search-first** - Pesquise documentação e padrões antes de implementar
2. **Plan** - Crie um plano estruturado com @concise-planning
3. **Verify** - Sempre verifique mudanças antes de finalizar
4. **Document** - Atualize documentação após cada mudança significativa

**Memory & Context:**

- Usar Session Start/End hooks para persistência de contexto
- Continuous Learning para extrair padrões das sessões

### Buscar e Instalar Novas Skills

```bash
# Buscar skills específicas
npx skills find [termo de busca]

# Instalação filtrada por categoria (recomendado para OpenCode)
npx antigravity-awesome-skills --path .agents/skills --category development,backend --risk safe,none

# Instalar skill específica
npx skills add <owner/repo@skill> -g -y
```

### Estrutura de Arquivos

```
.agents/skills/
├── docs/                    # Documentação de referência
│   ├── users/bundles.md     # Bundles por área (Web Wizard, Security, etc)
│   └── users/getting-started.md
├── roadmap-planning/        # Skill de planejamento
├── frontend-design/         # Skill de design
├── clean-ddd-hexagonal/    # Skill de arquitetura
├── documentation-templates/ # Skill de documentação
└── [outras skills]
```

### Regra de Uso

**IMPORTANTE:** Ao trabalhar em uma task, primeiro verificar se uma skill relevante existe:

1. **Sempre invocar skill ANTES de responder** - mesmo 1% de chance aplica
2. **Seguir a skill exatamente** - não adaptar away da disciplina
3. **Usar processo skills primeiro** - brainstorming/debugging antes de implementação

### Quando Usar Skill vs. Sem Skill

| Cenário                                    | Recomendação                          |
| ------------------------------------------ | ------------------------------------- |
| Tasks simples (fix rápido, small refactor) | Sem skill - overhead não compensa     |
| Tasks que você já conhece o contexto       | Sem skill - flexibilidade é melhor    |
| Decisões arquiteturais                     | **Com skill** - @clean-ddd-hexagonal  |
| Debugging complexo                         | **Com skill** - @systematic-debugging |
| Planejamentos estratégicos                 | **Com skill** - @roadmap-planning     |
| Design de componentes                      | **Com skill** - @frontend-design      |
| Investigar antes de implementar            | **Com skill** - @search-first         |

**Tradeoff:**

- **Com skill:** +estrutura, +disciplina, -liberdade
- **Sem skill:** +flexibilidade, -consistência

**Regra prática:** Para este projeto (SaaS B2B), skills valem mais em arquitetura, debugging e planejamento. Para código direto, provavelmente não precisa.

---

## 📞 Dúvidas?

Se não souber onde documentar algo, pergunte ao usuário antes de finalizar.

**Regra final**: Quando em dúvida, documente. É melhor ter documentação excessiva do que insuficiente.

---

_Última atualização: 03/04/2026_  
_Versão: 1.2_  
_Status: Active_  
_Maintainer: All Agents_
