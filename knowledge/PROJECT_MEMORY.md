# Memória do Projeto — SuperRelatórios

**Data:** 2026-04-02
**Versão:** 1.0
**Propósito:** Base de conhecimento centralizada do projeto para agentes e desenvolvedores

---

## 1. Identidade do Projeto

### Nome

**SuperRelatórios** — Plataforma SaaS de Analytics Estratégico para PMEs

### Tagline

"GPS Estratégico para PMEs" — Transforma dados brutos em decisões inteligentes

### Público-Alvo

PMEs/SMBs com 1-100 funcionários no Brasil (inicialmente)

### Proposta de Valor

- Simplicidade genial
- Didática extrema
- Utilidade radical
- Moldar gestão

---

## 2. Arquitetura do Sistema

### Stack Tecnológica

| Camada   | Tecnologia                                        |
| -------- | ------------------------------------------------- |
| Frontend | React 18, Vite 5, TypeScript 5, TanStack Query v5 |
| UI       | shadcn/ui, TailwindCSS 3, Radix UI                |
| Backend  | Supabase (PostgreSQL 15, Auth, Storage, Realtime) |
| AI       | Google Gemini 2.0 Flash via Edge Functions        |
| Hosting  | Vercel                                            |

### Padrões Arquiteturais

| Padrão             | Implementação                                                                  |
| ------------------ | ------------------------------------------------------------------------------ |
| Clean Architecture | UI → Application → Domain → Infrastructure                                     |
| DDD                | Domínios bounded: Finance, Commercial, Marketing, Operations, People, Strategy |
| TDD                | Pragmático — testes de integração para fluxos críticos                         |
| i18n               | PT-BR, EN-US, ES-ES — interface 100% no idioma do usuário                      |

---

## 3. Modelo de Dados (Principais Entidades)

### Entidades Core

| Entidade           | Tabela                | Descrição                        |
| ------------------ | --------------------- | -------------------------------- |
| Organização        | organizations         | Empresa cliente                  |
| Usuário            | auth.users + profiles | Usuário autenticado              |
| Métricas           | user_metrics          | Valores de KPIs por período      |
| Biblioteca de KPIs | library_kpis          | Definições de todos os KPIs      |
| Radar              | radar_items           | Alertas de riscos/oportunidades  |
| Plano de Ação      | action_items          | Ações corretivas                 |
| Desafios           | user_strategy_focus   | Desafios estratégicos da empresa |

### Entidades de Suporte

| Entidade        | Tabela                      | Descrição                                            |
| --------------- | --------------------------- | ---------------------------------------------------- |
| Diagnósticos    | library_diagnoses           | Diagnósticos estruturados (causa → efeito → por quê) |
| Impactos        | library_impacts             | Impactos quantificados por alavanca                  |
| Blueprints      | company_blueprints          | DNA da empresa                                       |
| Preferências UI | organization_ui_preferences | Configurações de display                             |
| Snapshots       | knowledge_snapshots         | Histórico de análises                                |
| Pastas          | report_folders              | Organização de relatórios                            |

---

## 4. Fluxos Principais

### Fluxo 1: Upload de Dados

```
Usuário faz upload (CSV/XLSX/PDF/DOCX)
    ↓
fileParserService.parseFile()
    ↓
aiService.analyzeDataWithAI()
    ↓
kpiExtractionService.extractKPIs()
    ↓
reportPersistenceService.saveReportWithMetrics()
    ↓
Dashboard atualizado via TanStack Query
```

### Fluxo 2: Radar de Alertas

```
Sistema detecta padrões nos dados
    ↓
Gera radar_items com diagnóstico
    ↓
Usuário visualiza RadarCard
    ↓
Clica → abre RadarSideDrawer
    ↓
Decide: adicionar ao plano ou dispensar
```

### Fluxo 3: Plano de Ação

```
Usuário cria ação (manual ou via radar)
    ↓
action_items recebe a ação
    ↓
Dashboard exibe ActionCard
    ↓
Usuário marca como concluída
    ↓
Snapshot registra evolução
```

---

## 5. Regras Pétreas (Premissas)

### i18n

- ✅ Interface 100% no idioma do usuário
- ✅ Termos técnicos têm glossário adaptável (simples/intermediário/técnico)
- ❌ Nenhum termo em inglês na interface PT-BR

### UX

- ✅ Progressive Disclosure — 4 camadas de complexidade
- ✅ GPS Estratégico: Painel → Alertas → Ações → Histórico
- ✅ Sem objetos vazios — sempre com CTA
- ✅ Completude como motivador (não lista de tarefas)

### Dados

- ✅ RLS em todas as tabelas com organization_id
- ✅ organization_id sempre via profiles (não organization_members)
- ✅ KPIs usam library_kpis (não kpi_master_library)
- ✅ Métricas usam user_metrics (não organization_kpis)

---

## 6. Estrutura de Diretórios

```
superrelatorios/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # shadcn/ui base
│   │   ├── analytics/       # Gráficos e análises
│   │   ├── radar/          # Radar e alertas
│   │   └── settings/       # Páginas de config
│   ├── hooks/              # Custom hooks
│   ├── services/           # Lógica de negócio
│   ├── pages/              # Páginas app
│   └── lib/                # Utilitários
├── supabase/
│   └── migrations/          # SQL migrations
├── knowledge/              # SPECs e documentação
└── apps/web/               # Segundo projeto frontend
```

---

## 7. Módulos e Funcionalidades

### Módulos Ativos

| Módulo        | Rota             | Status |
| ------------- | ---------------- | ------ |
| Dashboard     | /app             | ✅     |
| Radar         | /app/radar       | ✅     |
| Plano de Ação | /app/action-plan | ✅     |
| Relatórios    | /app/reports     | ✅     |
| Métricas      | /app/metrics     | ✅     |
| Analytics     | /app/analytics   | ✅     |
| Configurações | /app/settings    | ✅     |

### Módulos Pendentes

| Módulo          | Rota              | Status       |
| --------------- | ----------------- | ------------ |
| Riscos          | /app/riscos       | 🔄 Planejado |
| Fornecedores    | /app/fornecedores | 🔄 Planejado |
| Clientes        | /app/clientes     | 🔄 Planejado |
| RH              | /app/rh           | 🔄 Planejado |
| Previsões       | /app/previsoes    | 🔄 Planejado |
| SWOT            | /app/swot         | 🔄 Planejado |
| Hierarquia      | /app/hierarquia   | 🔄 Planejado |
| Fontes de Dados | /app/data-sources | 🔄 Planejado |

---

## 8. Correções Críticas Aplicadas

### Bugs Corrigidos (2026-04-02)

| Bug                             | Arquivo                     | Correção                |
| ------------------------------- | --------------------------- | ----------------------- |
| organization_members → profiles | reportPersistenceService.ts | Usar profiles           |
| ExtractedKPI duplicado          | kpiExtractionService.ts     | Unificar via reexport   |
| hasChallengeSymptoms bug        | strategyLibraryService.ts   | Corrigido anteriormente |
| useKPIs tabela legada           | kpiLibraryService.ts        | Usar library_kpis       |
| useOrganizationKPIs legada      | organizationKPIService.ts   | Usar user_metrics       |
| RadarSideDrawer campos          | RadarSideDrawer.tsx         | Usar JOINs              |
| Radar não importado             | App.tsx                     | Lazy loading            |

---

## 9. SQL Migrations Executadas

### 2026-04-02

| Migration                       | Arquivo                                          | Status |
| ------------------------------- | ------------------------------------------------ | ------ |
| CREATE_BLUEPRINT_FOLDERS        | CREATE_BLUEPRINT_FOLDERS.sql                     | ✅     |
| SEED_LIBRARY_DIAGNOSES          | Seed via SQL                                     | ✅     |
| SEED_LIBRARY_IMPACTS            | Seed via SQL                                     | ✅     |
| CREATE_MISSING_TABLES           | consent_records, audit_logs, knowledge_snapshots | ✅     |
| CLEANUP_LEGACY                  | get_relevant_kpis, domain fix, risk_score        | ✅     |
| ADD_ORGANIZATION_UI_PREFERENCES | display_mode + flags                             | ✅     |

---

## 10. Equipe de Agentes

### Agentes Ativos (agent-NNN)

| ID              | Função                           | Status        |
| --------------- | -------------------------------- | ------------- |
| agent-001 a 014 | Tarefas anteriores               | ✅ Concluídos |
| agent-020       | SPEC Progressive Disclosure      | ✅            |
| agent-021       | PP-C2 ExtractedKPI Fixer         | ✅            |
| agent-022       | PP-C3 hasChallengeSymptoms Fixer | ✅            |
| agent-023       | Frontend Audit Fixer             | ✅            |
| agent-024       | SPEC Critical Fixes Updater      | ✅            |
| agent-025       | Orchestrator Reviewer            | ✅            |

---

## 11. Pendências e Divídas Técnicas

### LSP Errors

| Arquivo                 | Erros     |
| ----------------------- | --------- |
| RadarSideDrawer.tsx     | 9 módulos |
| domain/index.ts         | 2 exports |
| ReportBuilder.tsx       | 2 tipos   |
| BenchmarkComparison.tsx | 1 prop    |
| ForecastWidget.tsx      | 1 import  |

### Build Warnings

- bluebird usa eval (segurança)
- Browserslist desatualizado
- Alguns chunks > 500KB

---

## 12. Referências

| Documento                      | Caminho                                  |
| ------------------------------ | ---------------------------------------- |
| SPEC_master_plan.md            | knowledge/SPEC_master_plan.md            |
| SPEC_ui_entity_model.md        | knowledge/SPEC_ui_entity_model.md        |
| SPEC_progressive_disclosure.md | knowledge/SPEC_progressive_disclosure.md |
| SPEC_pipeline_audit.md         | knowledge/SPEC_pipeline_audit.md         |
| SPEC_frontend_audit.md         | knowledge/SPEC_frontend_audit.md         |
| SPEC_evolution_plan.md         | knowledge/SPEC_evolution_plan.md         |
| AGENT_COORDINATION.md          | knowledge/AGENT_COORDINATION.md          |

---

_Documento mantido atualizado a cada sessão de desenvolvimento_
_Última atualização: 2026-04-02_
