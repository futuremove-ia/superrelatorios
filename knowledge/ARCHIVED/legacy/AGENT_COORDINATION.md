# Agent Coordination System - Parallel Execution

## Arquitetura de Agentes Auto-Melhoráveis (Baseado em Hermes/Nous Research)

**Última atualização:** 2026-04-02

### Sistema de Loop Fechado

O sistema implementa um ciclo de aprendizado fechado:

1. **Agent-curated memory** — Persistência de conhecimento
2. **Autonomous skill creation** — Cria procedures a partir de experiência
3. **Skill self-improvement** — Melhora skills durante uso
4. **FTS5 cross-session recall** — Recuperação com LLM summarization
5. **User modeling** — Modelo deepening de preferências

---

## TAREFAS CONCLUÍDAS (Sprint Atual)

| #   | Tarefa                                 | Responsável | Status |
| --- | -------------------------------------- | ----------- | ------ |
| 1   | Criar SPEC_progressive_disclosure.md   | agent-020   | ✅     |
| 2   | Verificar PP-C2 (ExtractedKPI)         | agent-021   | ✅     |
| 3   | Verificar PP-C3 (hasChallengeSymptoms) | agent-022   | ✅     |
| 4   | Verificar FE-C1 a FE-C4                | agent-023   | ✅     |
| 5   | Atualizar SPEC_critical_fixes.md       | agent-024   | ✅     |
| 6   | Revisão final + Build verification     | agent-025   | ✅     |

---

## BUILD: ✅ PASSANDO (0 TypeScript errors)

---

### Tabelas do Banco

- `radar_items` ✅ PRONTA
- `user_metrics` ✅ PRONTA
- `library_kpis` ✅ PRONTA
- `reports` ✅ PRONTA
- `user_challenges` ✅ PRONTA
- `company_blueprints` ✅ PRONTA
- `report_folders` ✅ PRONTA
- `organization_ui_preferences` ✅ PRONTA
- `blueprint_versions` ✅ PRONTA
- `library_diagnoses` ✅ PRONTA (seed executado)
- `library_impacts` ✅ PRONTA (seed executado)
- `consent_records` ✅ PRONTA
- `audit_logs` ✅ PRONTA
- `knowledge_snapshots` ✅ PRONTA

### Funções Criadas

- `get_relevant_kpis` ✅ PRONTA

---

## TAREFAS CONCLUÍDAS

| #   | Tarefa                                          | Responsável | Status |
| --- | ----------------------------------------------- | ----------- | ------ |
| 1   | Revisar queries do banco                        | agent-001   | ✅     |
| 2   | Corrigir benchmarkService                       | agent-002   | ✅     |
| 3   | KPIWidget, DashboardGrid                        | agent-003   | ✅     |
| 4   | Corrigir LSP errors                             | agent-004   | ✅     |
| 5   | OnboardingWizard                                | agent-005   | ✅     |
| 6   | ActionItem CRUD                                 | agent-006   | ✅     |
| 7   | Settings pages                                  | agent-007   | ✅     |
| 8   | Analytics components                            | agent-008   | ✅     |
| 9   | Blueprint service                               | agent-009   | ✅     |
| 10  | CSS classes DSP                                 | agent-011   | ✅     |
| 11  | useUIPreferences hook                           | agent-012   | ✅     |
| 12  | Radar integration                               | agent-012   | ✅     |
| 13  | DataSuggestionBanner                            | agent-013   | ✅     |
| 14  | DOCX parser (mammoth)                           | agent-013   | ✅     |
| 15  | Build TypeScript                                | agent-014   | ✅     |
| 16  | Database migration (blueprints, folders, prefs) | coordinator | ✅     |

---

## TAREFAS AGUARDANDO EXECUÇÃO MANUAL

| #   | Tarefa                              | Ação Necessária                    |
| --- | ----------------------------------- | ---------------------------------- |
| 16  | company_blueprints + report_folders | Executar SQL no Supabase Dashboard |

---

## BUILD: ✅ PASSANDO (0 TypeScript errors)

---

## ARQUITETURA DE AGENTES — @superrelatorios/agents

Repositório: `superrelatorios-agents/`

### Sistemas Implementados

| Sistema                | Arquivo                | Status | Notas                  |
| ---------------------- | ---------------------- | ------ | ---------------------- |
| **Memory**             | `memorySystem.ts`      | ✅     | Persiste no Supabase   |
| **Skills**             | `skillSystem.ts`       | ✅     | Auto-create, improve   |
| **Tools**              | `toolSystem.ts`        | ✅     | file, bash, grep, glob |
| **LLM**                | `llmIntegration.ts`    | ⚠️     | Mock (sem LLM real)    |
| **SPEC Loader**        | `specLoader.ts`        | ✅     | Parser markdown        |
| **Coordinator**        | `coordinator.ts`       | ✅     | Orquestração           |
| **Doc AutoUpdate**     | `docAutoUpdate.ts`     | ✅     | Auto-update docs       |
| **Memory Integration** | `memoryIntegration.ts` | ✅     | Integra 3 camadas      |

### 3 Camadas de Memória

| Camada           | Componente                         | Status                    |
| ---------------- | ---------------------------------- | ------------------------- |
| **Documentação** | `knowledge/AGENT_COORDINATION.md`  | ✅                        |
| **Código**       | `memorySystem.ts` (Map + Supabase) | ✅                        |
| **Banco**        | `agent_memory` table               | ⏳ (precisa executar SQL) |

### Agentes Especialistas

| ID      | Nome                             | Escopo                                                | Status       |
| ------- | -------------------------------- | ----------------------------------------------------- | ------------ |
| **001** | Query Reviewer                   | DB queries                                            | ✅ Ativo     |
| **002** | Service Fixer                    | Correção serviços                                     | ✅ Ativo     |
| **003** | Component Builder                | Componentes React                                     | ✅ Ativo     |
| **004** | LSP Fixer                        | TypeScript/LSP                                        | ✅ Ativo     |
| **005** | Onboarding Wizard                | UX onboarding (Fast/Deep/Demo)                        | ✅ Ativo     |
| **040** | Relevance Engine                 | Motor relevância, data points, trends                 | ✅ Ativo     |
| **041** | Sector Expander                  | 5→12 setores, ~70 nichos                              | ✅ Concluído |
| **042** | Business Models                  | B2B/B2C/B2B2C/SaaS/Services                           | ✅ Ativo     |
| **043** | Nichos Library                   | KPIs por nicho                                        | ✅ Concluído |
| **044** | Didactic Translator              | KPI explanations                                      | ✅ Ativo     |
| **045** | KPI Expander                     | 29→100+ KPIs                                          | ✅ Concluído |
| **050** | UX/UI/Product/Frontend/BPMN/Data | Onboarding Fast Lane + Deep Dive + Diagnosis Progress | ✅ Ativo     |
| **051** | Diagnosis Progress UI            | Barra de Conclusão do Diagnóstico                     | ✅ Criado    |
| **052** | Data Drop Zone UI                | UI de upload por domínio                              | ✅ Criado    |
| **SYS** | System Agent                     | Memory + Skills + Self-improvement                    | ✅ Ativo     |

---

## TAREFAS EM ANDAMENTO

| #   | Tarefa                                                      | Responsável | Status |
| --- | ----------------------------------------------------------- | ----------- | ------ |
| 1   | Corrigir Motor de Relevância (nível 0, data points, trends) | agent-040   | ✅     |
| 2   | Expandir setores (5 → 10) + nichos (~70)                    | agent-041   | ⏳     |
| 3   | Adicionar modelo de negócio (B2B/B2C/B2B2C/SaaS/Services)   | agent-042   | ✅     |
| 4   | Criar Biblioteca de Nichos com KPIs específicos             | agent-043   | ⏳     |
| 5   | Adicionar traduções didáticas por KPI                       | agent-044   | ✅     |
| 6   | Expandir KPIs Library (29 → 100+)                           | agent-045   | ⏳     |
| 50  | UX/UI/Product Design + Frontend + BPMN + Data Flows         | agent-050   | ⏳     |

| #   | Especialidade                                           | Responsável | Status |
| --- | ------------------------------------------------------- | ----------- | ------ |
| 50  | **UX/UI/Product Design + Frontend + BPMN + Data Flows** | agent-050   | ✅     |

**Foco do agent-050:**

- UX Design (jornada, fluxos, acessibilidade)
- UI Design (componentes, design system, responsividade)
- Product Design (features, roadmap, priorização)
- Frontend Development (React, hooks, performance)
- BPMN & System Flows (processos, diagramas)
- Data Flows (ETL, pipelines, banco)

### Agente Sistema (Consolidado)

| #   | Especialidade                          | Responsável | Status |
| --- | -------------------------------------- | ----------- | ------ |
| SYS | **Memory + Skills + Self-improvement** | agent-SYS   | ✅     |

**Foco do agent-SYS:**

- Gerenciamento de memória (consolidado de 030)
- Criação automática de skills (consolidado de 031)
- Auto-melhoria durante uso (consolidado de 032)

---

## CONHECIMENTO COMPARTILHADO

### Tabelas do Banco

- `radar_items` ✅ PRONTA
- `user_metrics` ✅ PRONTA
- `library_kpis` ✅ PRONTA
- `reports` ✅ PRONTA
- `user_challenges` ✅ PRONTA

### Componentes Criados

- DataUploader, TextInputArea, PipelineProgress
- KPIStatusCard, DataMaturityBanner, SuggestionBanner
- ErrorBoundary, ErrorDisplay
- KPIWidget, DashboardGrid, MetricTrendChart
- OnboardingWizard, WelcomeScreen
- ActionItemCard, ActionItemList, ActionItemForm
- Settings, CompanySettings, NotificationSettings
- TrendAnalysis, BenchmarkComparison, ForecastWidget
- BlueprintForm

### Hooks Criados

- useDocumentPipeline, useTextPipeline
- useRelevantKPIs, useRelevanceEngine
- useErrorHandler
- useActionItems
- useBlueprint

### Correções Aplicadas

- kpi_library → library_kpis
- organization_kpis → user_metrics
- metrics_library → library_kpis
- aiService timeout (30s)
- unstructuredService timeout (60s) + 429 handling
- JSON.parse fallback
- React Query migration (ReportsList, ActionPlan, Priorities)
- API Gemini auth (JWT)

---

## PRÓXIMAS TAREFAS SUGERIDAS

| Prioridade | Tarefa                          |
| ---------- | ------------------------------- |
| 🔴 Alta    | Testar upload de arquivo        |
| 🟡 Média   | Criar tabela company_blueprints |
| 🟡 Média   | Conectar onboarding ao pipeline |
| 🟢 Baixa   | Adicionar mais testes           |

**Nota:** Sistema de agentes movido para `superrelatorios-agents/` (repositório dedicado)

---

## ARQUITETURA DE VALIDAÇÃO E DOCUMENTAÇÃO

### Princípio: Documentação como Fonte de Verdade

A validação de negócio NÃO é responsabilidade de um agente específico, mas sim da **arquitetura de SPECs** que todos acessam:

| Componente        | Responsabilidade               |
| ----------------- | ------------------------------ |
| **SPECs**         | Requisitos, regras, validações |
| **Memory System** | Persistência cross-session     |
| **Agentes**       | Executam baseados em SPECs     |
| **Coordenador**   | Orquestra e valida             |

### Sistema de Validação Embutido nas SPECs

| Dimensão          | Validação                                 | Fonte                    |
| ----------------- | ----------------------------------------- | ------------------------ |
| **Sobrevivência** | Runway, Burn Rate, Cash Conversion Cycle  | SPEC_library_strategy.md |
| **Estabilização** | Margem Bruta, EBITDA, Ponto de Equilíbrio | SPEC_library_strategy.md |
| **Crescimento**   | Revenue Growth, CAC, LTV, Churn           | SPEC_library_strategy.md |
| **Escala**        | Operating Cash Flow, Working Capital      | SPEC_library_strategy.md |
| **Público-Alvo**  | PMEs/SMBs 1-100 funcionários, 10 setores  | SPEC_requirements.md     |

### 4 Premissas UX (Sempre respeitadas)

> "Simplicidade genial. Didática extrema. Utilidade radical. Moldar gestão."

---

## ARQUITETURA DE AGENTES — Repositório Separado

O sistema de agentes foi extraído para repositório dedicado:

**@superrelatorios/agents** — `superrelatorios-agents/`

| Sistema             | Arquivo             | Descrição                             |
| ------------------- | ------------------- | ------------------------------------- |
| **Memory System**   | `memorySystem.ts`   | FTS5 cross-session, relevance scoring |
| **Skill System**    | `skillSystem.ts`    | Auto-create + self-improvement        |
| **Tool System**     | `toolSystem.ts`     | File, bash, grep, glob                |
| **LLM Integration** | `llmIntegration.ts` | Gemini, OpenAI, OpenRouter            |
| **SPEC Loader**     | `specLoader.ts`     | Parse specifications                  |
| **Coordinator**     | `coordinator.ts`    | Orchestration, parallel execution     |

**Instalação:**

```bash
cd superrelatorios-agents && npm install && npm run build
```

---

## GAPS IDENTIFICADOS — O que falta para agentes eficazes

### Estado Atual (Implementado)

| Componente    | Status     | Limitações                                   |
| ------------- | ---------- | -------------------------------------------- |
| Memory System | ⚠️ Parcial | Em memória (Map), não persiste entre sessões |
| Skill System  | ⚠️ Parcial | Procedures estáticas, sem aprendizado real   |
| Sub-Agents    | ⚠️ mock    | Sem ferramentas reais                        |
| Coordinator   | ⚠️ Parcial | Orquestração básica                          |

### O que FALTA para Agentes Inteligentes

| #   | Componente              | Descrição                                                   | Prioridade |
| --- | ----------------------- | ----------------------------------------------------------- | ---------- |
| 1   | **Persistência Real**   | Integrar com PostgreSQL/Supabase para memória cross-session | 🔴 Alta    |
| 2   | **SPEC Loader**         | Agentes leem automaticamente SPECs antes de executar        | 🔴 Alta    |
| 3   | **Tool Calling**        | Agentes têm ferramentas reais (file ops, git, bash, search) | 🔴 Alta    |
| 4   | **LLM Integration**     | Agentes usam LLM para raciocínio e tomada de decisão        | 🔴 Alta    |
| 5   | **Validation Pipeline** | Auto-validação contra SPECs após cada task                  | 🟡 Média   |
| 6   | **MCP Integration**     | Model Context Protocol para ferramentas externas            | 🟡 Média   |
| 7   | **Scheduler**           | Execução periódica (cron) de tarefas                        | 🟢 Baixa   |

---

## AGENTE COORDENADOR

Para sincronização, usar este arquivo como fonte de verdade.
Todos os agentes devem:

1. Ler este arquivo antes de iniciar
2. Atualizar status ao concluir
3. Adicionar conhecimento compartilhado
