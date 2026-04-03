# 📋 Auditoria de Documentação

**Data:** 2026-04-04  
**Versão:** 1.0  
**Status:** Em andamento

---

## Instruções de Classificação

| Classificação     | Descrição                    | Destino                      |
| ----------------- | ---------------------------- | ---------------------------- |
| `active`          | Vigente, útil, usar          | docs/ ou knowledge/ (manter) |
| `update-required` | Vigente mas desatualizado    | Atualizar antes de mover     |
| `deprecated`      | Obsoleto, evitar uso         | knowledge/ARCHIVED/          |
| `archived`        | Histórico, apenas referência | knowledge/ARCHIVED/          |
| `duplicate`       | Duplicado, remover           | — (deletar)                  |

---

## 📁 docs/

### Estratatégia (01-strategy/)

| Arquivo                       | Status          | Ação                  |
| ----------------------------- | --------------- | --------------------- |
| 01-vision-and-architecture.md | active          | Manter                |
| 02-design-system.md           | deprecated      | Arquivar              |
| 03-strategic-foundation.md    | deprecated      | Arquivar              |
| 04-implementation-roadmap.md  | archived        | Arquivar              |
| 05-strategic-levers.md        | archived        | Arquivar              |
| 06-library-expansion.md       | archived        | Arquivar              |
| 07-phase-progress.md          | archived        | Arquivar              |
| 08-phase3-summary.md          | archived        | Arquivar              |
| 09-brand-system.md            | deprecated      | Arquivar              |
| 10-masterplan-v2.md           | update-required | Atualizar → concepts/ |
| README.md (pasta)             | active          | Manter                |

### Técnico (02-technical/)

| Arquivo                           | Status          | Ação                    |
| --------------------------------- | --------------- | ----------------------- |
| 01-software-architecture.md       | active          | Manter → concepts/      |
| 02-architecture-audit.md          | archived        | Arquivar                |
| 03-project-audit.md               | archived        | Arquivar                |
| 04-refactoring-report.md          | archived        | Arquivar                |
| 05-contributing-guidelines.md     | active          | Manter → contribute/    |
| 06-design-system-protocol.md      | deprecated      | Arquivar                |
| 07-architecture-alignment-plan.md | archived        | Arquivar                |
| ONBOARDING_TDD_PLAN.md            | archived        | Arquivar                |
| 06-onboarding-plan.md             | update-required | Atualizar → onboarding/ |
| 05-financial-pipeline.md          | archived        | Arquivar                |
| TEST_PLAN_FINANCIAL_UPLOAD.md     | archived        | Arquivar                |
| README.md (pasta)                 | active          | Remover (redundante)    |

### Operações (03-operations/)

| Arquivo                      | Status   | Ação                 |
| ---------------------------- | -------- | -------------------- |
| 01-deployment-guide.md       | active   | Manter → deployment/ |
| 02-performance-monitoring.md | active   | Manter → runbooks/   |
| 03-hierarchy-execution.md    | archived | Arquivar             |
| README.md (pasta)            | active   | Remover (redundante) |

### API (04-api/)

| Arquivo                       | Status     | Ação                 |
| ----------------------------- | ---------- | -------------------- |
| 01-api-reference.md           | active     | Manter → api/        |
| SUPERRELATORIOS_AI_360_API.md | deprecated | Arquivar             |
| README.md (pasta)             | active     | Remover (redundante) |

### User Guides (05-user-guides/)

| Arquivo                              | Status     | Ação                  |
| ------------------------------------ | ---------- | --------------------- |
| 02-complete-user-guide.md            | active     | Manter → user-guides/ |
| SUPERRELATORIOS_AI_360_USER_GUIDE.md | deprecated | Arquivar              |
| README.md (pasta)                    | active     | Remover (redundante)  |

### Compliance (06-compliance/)

| Arquivo                       | Status | Ação               |
| ----------------------------- | ------ | ------------------ |
| README.md                     | active | Manter             |
| 01-security-authentication.md | active | Manter → security/ |
| 02-privacy-protection.md      | active | Manter → privacy/  |

### Knowledge (07-knowledge/)

| Arquivo                    | Status   | Ação                       |
| -------------------------- | -------- | -------------------------- |
| 01-internationalization.md | archived | Arquivar                   |
| 02-seo-analytics.md        | archived | Arquivar                   |
| TEST_PLAN.md               | archived | Arquivar                   |
| SEED_EXECUTADO.md          | archived | Arquivar                   |
| TECHNICAL_DEBT.md          | active   | Manter → technical-debt.md |
| ROADMAP.md                 | active   | Manter → roadmap.md        |
| DECISION_LOG.md            | active   | Manter → decisions/        |
| ARCHITECTURE_DECISIONS.md  | active   | Mover para decisions/      |

### Raiz docs/

| Arquivo                   | Status    | Ação                                |
| ------------------------- | --------- | ----------------------------------- |
| README.md                 | active    | Manter (índice principal)           |
| USER_GUIDE.md             | duplicate | Remover (existe em 05-user-guides/) |
| SETUP.md                  | active    | Manter → getting-started.md         |
| DEVELOPMENT.md            | duplicate | Remover                             |
| DEPLOYMENT_GUIDE.md       | duplicate | Remover (existe em 03-operations/)  |
| API_DOCUMENTATION.md      | duplicate | Remover                             |
| UNIFIED-ARCHITECTURE.md   | archived  | Arquivar                            |
| PERFORMANCE_MONITORING.md | active    | Mover → operations/                 |
| GLOBAL_EXPANSION.md       | archived  | Arquivar                            |

---

## 📁 knowledge/

| Arquivo                            | Status   | Ação                            |
| ---------------------------------- | -------- | ------------------------------- |
| README.md                          | active   | Manter (índice knowledge/)      |
| PROJECT_MEMORY.md                  | active   | Manter (single source of truth) |
| CHANGELOG.md                       | active   | Manter                          |
| MASTER_PLAN.md                     | archived | Arquivar                        |
| Old_SPEC_master_plan.md            | archived | Arquivar                        |
| Old_EVOLUTION_PLAN.md              | archived | Arquivar                        |
| SPEC_requirements.md               | archived | Arquivar                        |
| SPEC_tasks.md                      | archived | Arquivar                        |
| SPEC_design.md                     | archived | Arquivar                        |
| SPEC_audit_report.md               | archived | Arquivar                        |
| SPEC_frontend_audit.md             | archived | Arquivar                        |
| SPEC_pipeline_audit.md             | archived | Arquivar                        |
| SPEC_library_strategy.md           | archived | Arquivar                        |
| SPEC_lib_challenges_risks.md       | archived | Arquivar                        |
| SPEC_lib_goals_levers_actions.md   | archived | Arquivar                        |
| SPEC_lib_opportunities.md          | archived | Arquivar                        |
| SPEC_libraries_complete.md         | archived | Arquivar                        |
| SPEC_progressive_disclosure.md     | archived | Arquivar                        |
| SPEC_critical_fixes.md             | archived | Arquivar                        |
| SPEC_ANALYSIS_CONSOLIDATED.md      | archived | Arquivar                        |
| SPEC_ui_entity_model.md            | archived | Arquivar                        |
| SPEC_ai_prompts_templates.md       | archived | Arquivar                        |
| TESTING_PLAN.md                    | archived | Arquivar                        |
| TESTING_IMPLEMENTATION.md          | archived | Arquivar                        |
| AUDIT_FINAL_REPORT.md              | archived | Arquivar                        |
| AUDIT_COMPREHENSIVE_ANALYSIS.md    | archived | Arquivar                        |
| AUDIT_EXECUTIVE_SUMMARY.md         | archived | Arquivar                        |
| AUDIT_BUSINESS_USER_PERSPECTIVE.md | archived | Arquivar                        |
| AUDITORIA_COMPLETA_INICIAL.md      | archived | Arquivar                        |
| AUDITORIA_PROGRESSO.md             | archived | Arquivar                        |
| AUDITORIA_PROGRESSO_FINAL.md       | archived | Arquivar                        |
| AUDITORIA_CLEAN_ARCHITECTURE.md    | archived | Arquivar                        |
| ROADMAP_PROGRESS_SUMMARY.md        | archived | Arquivar                        |
| ROADMAP_FINAL_COMPLETE.md          | archived | Arquivar                        |
| ROADMAP_85_90_SCORE.md             | archived | Arquivar                        |
| IMPLEMENTATION_SUMMARY.md          | archived | Arquivar                        |
| EXECUTE_HIERARCHY.md               | archived | Arquivar                        |
| DEPLOYMENT_CHECKLIST.md            | active   | Mover → runbooks/               |
| DNS_CONFIG.md                      | archived | Arquivar                        |
| DATABASE_AUDIT_REPORT.md           | archived | Arquivar                        |
| AGENT_COORDINATION.md              | archived | Arquivar                        |
| KPI_CALCULATION_ENGINE.md          | active   | Manter → engine/                |
| DATA_EXTRACTION_PARSER.md          | active   | Manter → engine/                |
| i18n_implementation_plan.md        | archived | Arquivar                        |
| architecture_audit_report.md       | archived | Arquivar                        |
| project_audit.md                   | archived | Arquivar                        |
| refactoring_execution_report.md    | archived | Arquivar                        |
| seo_geo_analytics_plan.md          | archived | Arquivar                        |
| CONTRIBUTING.md                    | active   | Manter → contribute/            |
| PRODUCT_INVENTORY_ROADMAP.md       | archived | Arquivar                        |

---

## 📊 Resumo

| Categoria                      | Qtd |
| ------------------------------ | --- |
| Manter/Mover (active)          | ~25 |
| Atualizar + manter             | ~3  |
| Arquivar (deprecated/archived) | ~75 |
| Remover (duplicate)            | ~5  |

---

## Próximos Passos

1. ✅ Auditoria completa (este documento)
2. ⏳ Criar estrutura de diretórios
3. ⏳ Mover arquivos conforme classificação
4. ⏳ Renomear para kebab-case
5. ⏳ Adicionar frontmatter
6. ⏳ Criar índices
7. ⏳ Atualizar AGENTS.md

---

_Este documento será arquivado após a reorganização estar completa._
