# Plano de Evolução e Correção — SuperRelatórios

**Data:** 2024-01-XX  
**Versão:** 1.0  
**Status:** 🟡 Em Execução  
**Baseado em:** AUDIT_REPORT.md + auditoria direta do banco Supabase

---

## Contexto

A auditoria revelou divergências críticas entre a especificação documentada e o banco real do Supabase. O banco evoluiu além da spec — contém 60+ tabelas, hierarquia organizacional completa, bibliotecas normalizadas e funcionalidades não documentadas (SWOT, forecasts, fornecedores, clientes, RH).

Este plano organiza a reconciliação em 5 fases progressivas, priorizando estabilidade antes de expansão.

---

## Resumo das Divergências Identificadas

| Categoria            | Spec Antiga                | Banco Real                                       | Impacto                       |
| -------------------- | -------------------------- | ------------------------------------------------ | ----------------------------- |
| Tabela de KPIs       | `kpi_master_library`       | `library_kpis`                                   | 🔴 Crítico — FK inválida      |
| Tabela de valores    | `organization_kpi_values`  | `user_metrics`                                   | 🔴 Crítico — queries falham   |
| Tabela de riscos     | `risks`                    | `risk_registry`                                  | 🟡 Alto — nome errado         |
| Tabela de mitigações | `mitigation_plans`         | `risk_mitigations`                               | 🟡 Alto — nome errado         |
| Alavancas            | `action_levers` (1 tabela) | `library_levers` + `library_actions` (2 tabelas) | 🟡 Alto — estrutura diferente |
| Radar items          | Campos inline              | FKs para library_diagnoses/impacts               | 🟡 Alto — modelo diferente    |
| RBAC                 | 4 papéis                   | 7 papéis + escopo granular                       | 🟡 Alto — incompleto          |
| Hierarquia org       | Não documentada            | business_units + departments + teams             | 🟡 Alto — ausente na spec     |
| Funcionalidades      | 34 requisitos              | 60+ tabelas (SWOT, forecasts, etc.)              | 🟡 Médio — não documentadas   |
| Domínios             | `sales`                    | `commercial`                                     | 🟡 Médio — inconsistência     |

---

## Fase 0 — Limpeza e Consolidação (Urgente)

**Prazo:** 1–2 semanas  
**Prioridade:** 🔴 Bloqueante — executar antes de qualquer nova feature

### Objetivos

Eliminar inconsistências críticas que causam falhas em produção e impossibilitam a criação de FKs válidas.

### Tarefas

#### 0.1 Consolidar tabelas de KPI em `library_kpis`

```sql
-- 1. Verificar tabelas legadas existentes
SELECT table_name FROM information_schema.tables
WHERE table_name IN ('kpi_master_library', 'kpi_library', 'metrics_library', 'kpi_master_unified');

-- 2. Migrar dados únicos para library_kpis
INSERT INTO library_kpis (code, title, description, formula, unit, domain, direction)
SELECT code, title, description, formula, unit, domain, direction
FROM kpi_master_library
ON CONFLICT (code) DO NOTHING;

-- 3. Criar views de compatibilidade temporárias
CREATE OR REPLACE VIEW kpi_master_library AS SELECT * FROM library_kpis;
CREATE OR REPLACE VIEW kpi_library AS SELECT * FROM library_kpis;

-- 4. Migrar organization_kpis → user_metrics
INSERT INTO user_metrics (organization_id, kpi_code, value, reference_period, period_start, period_end, is_manual_entry)
SELECT organization_id, kpi_code, value, period_key, period_start, period_end, true
FROM organization_kpis
ON CONFLICT DO NOTHING;

-- 5. Remover tabelas legadas (após validação)
-- DROP TABLE IF EXISTS kpi_master_library, kpi_library, metrics_library, kpi_master_unified;
-- DROP TABLE IF EXISTS metrics, metric_values, organization_kpis;
```

**Critério de conclusão:** Todas as queries de KPI usam `library_kpis` e `user_metrics`. Zero erros de FK.

#### 0.2 Corrigir `risk_score` para GENERATED ALWAYS AS

```sql
ALTER TABLE risk_registry DROP COLUMN IF EXISTS risk_score;
ALTER TABLE risk_registry
  ADD COLUMN risk_score INTEGER GENERATED ALWAYS AS (likelihood * impact) STORED;
```

**Critério de conclusão:** `risk_score` é sempre igual a `likelihood * impact`, impossível inserir valor inconsistente.

#### 0.3 Criar tabelas ausentes

```sql
-- report_folders (se não existir)
CREATE TABLE IF NOT EXISTS report_folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE report_folders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "org_isolation" ON report_folders
  USING (organization_id = (SELECT organization_id FROM profiles WHERE user_id = auth.uid()));

-- consent_records (se não existir)
CREATE TABLE IF NOT EXISTS consent_records (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  purpose TEXT NOT NULL,
  decision BOOLEAN NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT
);
ALTER TABLE consent_records ENABLE ROW LEVEL SECURITY;
```

#### 0.4 Padronizar domínios de negócio

```sql
-- Atualizar domain 'sales' → 'commercial' em todas as tabelas
UPDATE library_kpis SET domain = 'commercial' WHERE domain = 'sales';
UPDATE library_challenges SET domain = 'commercial' WHERE domain = 'sales';
UPDATE radar_items SET domain = 'commercial' WHERE domain = 'sales';
UPDATE library_diagnoses SET domain = 'commercial' WHERE domain = 'sales';

-- Atualizar CHECK constraints
ALTER TABLE library_kpis DROP CONSTRAINT IF EXISTS library_kpis_domain_check;
ALTER TABLE library_kpis ADD CONSTRAINT library_kpis_domain_check
  CHECK (domain IN ('finance', 'commercial', 'marketing', 'operations', 'people', 'strategy', 'custom'));
```

#### 0.5 Criar views de compatibilidade temporárias

```sql
-- Para código legado que ainda usa nomes antigos
CREATE OR REPLACE VIEW risks AS SELECT * FROM risk_registry;
CREATE OR REPLACE VIEW mitigation_plans AS SELECT * FROM risk_mitigations;
CREATE OR REPLACE VIEW action_levers AS
  SELECT la.*, ll.category, ll.impact_level
  FROM library_actions la
  JOIN library_levers ll ON la.lever_code = ll.code;
```

**Prazo para remoção das views:** Fase 1 (após atualização do frontend).

---

## Fase 1 — Reconciliação Spec-Banco

**Prazo:** 2–3 semanas  
**Prioridade:** 🟡 Alta — necessária para consistência da documentação e do frontend

### Objetivos

Atualizar toda a documentação e o frontend para usar os nomes reais do banco. Eliminar as views de compatibilidade temporárias.

### Tarefas

#### 1.1 Atualizar hooks do frontend

| Hook Atual                                         | Hook Correto                             | Tabela Correta                      |
| -------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| `useKPIs` → query em `organization_kpi_values`     | `useUserMetrics`                         | `user_metrics`                      |
| `useRisks` → query em `risks`                      | `useRiskRegistry`                        | `risk_registry`                     |
| `useMitigationPlans` → query em `mitigation_plans` | `useRiskMitigations`                     | `risk_mitigations`                  |
| `useActionLevers` → query em `action_levers`       | `useLibraryLevers` + `useLibraryActions` | `library_levers`, `library_actions` |

#### 1.2 Atualizar queries de radar items

Substituir queries que leem campos inline (`diagnosis_term`, `diagnosis_cause`, etc.) por JOINs com as tabelas de biblioteca:

```sql
-- Query correta para radar items com diagnóstico
SELECT
  ri.*,
  ld.technical_term, ld.cause, ld.effect, ld.why,
  li.description AS impact_description, li.impact_value, li.impact_direction,
  lt.label AS timeframe_label, lt.days,
  lc.label AS complexity_label, lc.typical_effort_hours
FROM radar_items ri
LEFT JOIN library_diagnoses ld ON ri.diagnosis_code = ld.code
LEFT JOIN library_impacts li ON ri.impact_code = li.code
LEFT JOIN library_timeframes lt ON ri.timeframe_code = lt.code
LEFT JOIN library_complexities lc ON ri.complexity_code = lc.code
WHERE ri.organization_id = $1 AND ri.status IN ('detected', 'in_progress');
```

#### 1.3 Migrar `organization_blueprint` para campos estruturados

Adicionar colunas estruturadas à tabela existente e migrar dados do JSONB `context_data`.

#### 1.4 Documentar todas as 60+ tabelas

Atualizar `design.md` com diagrama ER completo incluindo todas as tabelas do banco real.

#### 1.5 Remover views de compatibilidade

Após validação de que nenhum código usa os nomes antigos, remover as views criadas na Fase 0.

**Critério de conclusão:** Zero referências a tabelas legadas no código. Frontend usa nomes reais do banco.

---

## Fase 2 — Expansão das Bibliotecas

**Prazo:** 3–4 semanas  
**Prioridade:** 🟢 Média — melhora qualidade das análises

### Objetivos

Expandir as bibliotecas de KPIs, diagnósticos, impactos e templates para cobrir o máximo de segmentos de PMEs.

### Tarefas

#### 2.1 Expandir `library_kpis` para 100+ KPIs

Seguindo a estratégia documentada em `LIBRARY_STRATEGY.md`:

| Domínio    | KPIs Core | KPIs Domain | KPIs Segment | Total   |
| ---------- | --------- | ----------- | ------------ | ------- |
| Finance    | 10        | 25          | 5            | 40      |
| Commercial | 8         | 20          | 3            | 31      |
| Marketing  | 0         | 18          | 0            | 18      |
| Operations | 0         | 20          | 5            | 25      |
| People     | 2         | 17          | 0            | 19      |
| Strategy   | 0         | 12          | 0            | 12      |
| **Total**  | **20**    | **112**     | **13**       | **145** |

Cada KPI com:

- `tier`: core/domain/segment/advanced/custom
- `is_core`: true para os 18 KPIs universais
- `benchmark_excellent/good/average/warning/critical`: 5 níveis de benchmark

#### 2.2 Popular `library_diagnoses`

Criar diagnósticos estruturados para cada combinação de desafio + domínio:

```sql
INSERT INTO library_diagnoses (code, technical_term, cause, effect, why, challenge_code, domain, severity_default, symptom_codes, suggested_lever_codes)
VALUES
  ('DIAG_CASH_CRUNCH_FINANCE', 'Crise de Liquidez Operacional',
   'Burn rate superior à geração de caixa operacional',
   'Risco de insolvência em menos de 6 meses',
   'Crescimento acelerado sem proporcional aumento de receita ou captação',
   'CASH_FLOW_CRUNCH', 'finance', 'critical',
   ARRAY['LOW_RUNWAY', 'HIGH_BURN_RATE', 'NEGATIVE_FCO'],
   ARRAY['COST_REDUCTION', 'REVENUE_ACCELERATION', 'WORKING_CAPITAL_OPTIMIZATION']),
  -- ... demais diagnósticos
```

#### 2.3 Popular `library_impacts`

Criar impactos quantificados para cada alavanca com `target_kpi_code` e `impact_value`.

#### 2.4 Popular `industry_templates` para 10+ setores

| Setor       | KPIs Padrão | Desafios Típicos             | Benchmarks           |
| ----------- | ----------- | ---------------------------- | -------------------- |
| Varejo      | 25 KPIs     | INVENTORY_EXCESS, LOW_MARGIN | Margem bruta: 35-45% |
| SaaS/Tech   | 30 KPIs     | HIGH_CHURN, SLOW_GROWTH      | LTV/CAC: > 3x        |
| Serviços    | 20 KPIs     | INEFFICIENT_SALES, CAPACITY  | Utilização: 70-85%   |
| Indústria   | 28 KPIs     | SUPPLY_CHAIN_RISK, OEE       | OEE: > 75%           |
| Consultoria | 18 KPIs     | UTILIZATION, PIPELINE        | Utilização: 75-85%   |
| Saúde       | 22 KPIs     | COMPLIANCE, CAPACITY         | Ocupação: 80-90%     |
| Educação    | 15 KPIs     | RETENTION, ENROLLMENT        | Retenção: > 85%      |
| Alimentação | 20 KPIs     | FOOD_COST, WASTE             | CMV: 28-35%          |
| Construção  | 18 KPIs     | CASH_FLOW, DELAYS            | Margem: 8-15%        |
| Agronegócio | 20 KPIs     | WEATHER_RISK, COMMODITY      | Produtividade/ha     |

#### 2.5 Implementar motor de relevância de KPIs

```sql
CREATE OR REPLACE FUNCTION get_relevant_kpis(
  p_organization_id UUID,
  p_available_data_types TEXT[] DEFAULT ARRAY[]::TEXT[]
)
RETURNS TABLE(kpi_code TEXT, reason TEXT) AS $$
BEGIN
  -- KPIs core: sempre ativos
  RETURN QUERY
  SELECT lk.code, 'core'::TEXT
  FROM library_kpis lk
  WHERE lk.is_core = true;

  -- KPIs do industry_template da organização
  RETURN QUERY
  SELECT DISTINCT kpi_code, 'industry_template'::TEXT
  FROM organization_industry_settings ois
  JOIN industry_templates it ON ois.industry_template_id = it.id,
  jsonb_array_elements_text(it.default_kpis) AS kpi_code
  WHERE ois.organization_id = p_organization_id;

  -- KPIs com dados disponíveis em user_metrics
  RETURN QUERY
  SELECT DISTINCT um.kpi_code, 'data_available'::TEXT
  FROM user_metrics um
  WHERE um.organization_id = p_organization_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**Critério de conclusão:** Dashboard exibe apenas KPIs relevantes. Motor de relevância testado com 5+ perfis de empresa diferentes.

---

## Fase 3 — Novas Funcionalidades

**Prazo:** 4–6 semanas  
**Prioridade:** 🟢 Média — funcionalidades existentes no banco mas sem UI

### Objetivos

Implementar interfaces para funcionalidades que já existem no banco mas não têm telas no frontend.

### 3.1 Hierarquia Organizacional

**Tabelas:** `business_units`, `departments`, `teams`, `memberships`, `roles_permissions`

- Telas: `BusinessUnitsPage`, `DepartmentsPage`, `TeamsPage`, `MembershipsPage`
- Hooks: `useOrganizationHierarchy`, `useBusinessUnits`, `useDepartments`, `useTeams`
- Integração com RBAC: escopo de acesso por business_unit/department/team

### 3.2 SWOT e Análise de Forças/Fraquezas

**Tabelas:** `swot_simple`, `forces_weaknesses_analysis`

- Telas: `SwotPage`, `ForcesWeaknessesPage`
- Hooks: `useSwotAnalysis`, `useForcesWeaknesses`
- Geração assistida por IA via AI Proxy

### 3.3 Previsões de Curto Prazo

**Tabela:** `short_term_forecasts`

- Tela: `ForecastPage` com gráficos para 7/30/60/90 dias
- Hook: `useShortTermForecasts`
- Métodos: média móvel, tendência linear, sazonalidade, IA

### 3.4 Gestão de Fornecedores

**Tabelas:** `supplier_scorecards`, `supplier_performance_history`, `supplier_risk_alerts`

- Telas: `SuppliersPage`, `SupplierScorecard`, `SupplierRiskAlerts`
- Hooks: `useSupplierScorecards`, `useSupplierRiskAlerts`
- Alertas automáticos quando `score_geral < 5.0`

### 3.5 Saúde e Ciclo de Vida de Clientes

**Tabelas:** `client_health_scores`, `client_lifecycle_stages`, `client_lifecycle_history`

- Telas: `ClientHealthPage`, `ClientLifecycleBoard`
- Hooks: `useClientHealthScores`, `useClientLifecycle`
- Cálculo de RFM score e classificação de health_status

### 3.6 Gestão de Custos de RH

**Tabelas:** `employee_costs`, `payroll_projections`

- Telas: `EmployeeCostsPage`, `PayrollProjectionsPage`
- Hooks: `useEmployeeCosts`, `usePayrollProjections`
- Cálculo automático de custo total (salário + INSS + FGTS + provisões)

**Critério de conclusão:** Todas as 6 funcionalidades têm telas funcionais com dados reais do banco.

---

## Fase 4 — Document Pipeline e Knowledge Base

**Prazo:** 6–8 semanas  
**Prioridade:** 🔵 Baixa — funcionalidades avançadas para empresas maduras

### Objetivos

Implementar o pipeline completo de ingestão de documentos e a Knowledge Base estratégica.

### 4.1 Document Pipeline

- Edge Function `api/process-document.ts` com `UnstructuredClient`, `SemanticParser`, `KPIMapper`, `ExtractionReporter`
- Integração com Google Drive e Microsoft OneDrive via OAuth 2.0
- Telas: `DataSourcesPage`, `DocumentsHistoryPage`
- Status em tempo real via Supabase Realtime

### 4.2 Knowledge Base

- Edge Function `api/generate-snapshot.ts` com `PeriodDataCollector`, `NarrativeGenerator`, `SnapshotPersister`
- Trigger de imutabilidade `prevent_snapshot_mutation()` em `knowledge_snapshots`
- Telas: `KnowledgeTimelinePage`, `KnowledgeQueryPage`
- Busca semântica via pgvector

### 4.3 Company Blueprint

- Módulo `BlueprintPage` com wizard multi-step de 6 seções
- Assistente de preenchimento via IA
- Integração como contexto permanente no AI Proxy

**Critério de conclusão:** Pipeline end-to-end funcionando: upload de PDF → extração de KPIs → dashboard atualizado.

---

## Métricas de Sucesso

| Fase   | Métrica                                 | Meta      |
| ------ | --------------------------------------- | --------- |
| Fase 0 | Erros de FK em produção                 | 0         |
| Fase 0 | Tabelas legadas removidas               | 7 tabelas |
| Fase 1 | Referências a tabelas legadas no código | 0         |
| Fase 2 | KPIs na biblioteca                      | ≥ 100     |
| Fase 2 | Setores com industry_template           | ≥ 10      |
| Fase 3 | Funcionalidades com UI implementada     | 6/6       |
| Fase 4 | Documentos processados com sucesso      | ≥ 95%     |

---

## Riscos e Mitigações

| Risco                                               | Probabilidade | Impacto | Mitigação                                                                          |
| --------------------------------------------------- | ------------- | ------- | ---------------------------------------------------------------------------------- |
| Perda de dados na migração de tabelas legadas       | Média         | Alto    | Backup completo antes de cada migration; script com ON CONFLICT DO NOTHING         |
| Código legado quebrando após remoção de views       | Alta          | Médio   | Manter views por 2 semanas após atualização do frontend; monitorar logs de erro    |
| Motor de relevância retornando KPIs incorretos      | Baixa         | Médio   | Testes unitários com 5+ perfis de empresa; fallback para KPIs core                 |
| Custo de API Unstructured acima do esperado         | Média         | Médio   | Cache de chunks extraídos; reprocessamento seletivo apenas de documentos alterados |
| Limite de contexto do Gemini com Blueprint completo | Baixa         | Baixo   | Seleção inteligente dos campos mais relevantes por tipo de análise                 |

---

## Dependências entre Fases

```
Fase 0 (Limpeza) ──→ Fase 1 (Reconciliação) ──→ Fase 2 (Bibliotecas)
                                                        │
                                                        ↓
                                                  Fase 3 (Novas Features)
                                                        │
                                                        ↓
                                                  Fase 4 (Pipeline + KB)
```

Fase 0 é pré-requisito para todas as demais. Fases 2, 3 e 4 podem ser executadas em paralelo após Fase 1.

---

## Próximos Passos Imediatos

1. ✅ Atualizar `design.md`, `requirements.md` e `tasks.md` para refletir banco real
2. ⏳ Executar migrations da Fase 0 em ambiente de staging
3. ⏳ Validar que nenhuma query quebra após migrations
4. ⏳ Atualizar hooks do frontend para usar tabelas corretas
5. ⏳ Remover views de compatibilidade após validação
6. ⏳ Iniciar expansão das bibliotecas (Fase 2)

---

**Documento criado por:** Kiro AI Assistant  
**Baseado em:** AUDIT_REPORT.md + auditoria direta do banco Supabase  
**Revisão:** Necessária após execução de cada fase
