# Modelo de Entidades UI — SuperRelatórios

## Objetos vs. Atributos do Ponto de Vista de Componente

**Data:** 2026-04-01
**Contexto:** Classificação de todas as entidades do banco de dados segundo sua representação visual no frontend — quais merecem um card/objeto próprio e quais são atributos que compõem outros objetos.

---

## Princípio de Classificação

**Objeto/Card** → tem identidade própria, pode ser listado, clicado, tem ciclo de vida, merece tela ou drawer dedicado. O usuário pode **agir** sobre ele.

**Atributo/Parte** → não existe sozinho na UI, sempre compõe outro objeto, é informação dentro de um card. O usuário apenas **lê** como contexto.

**Regra de Ouro:**

- Entidades de **biblioteca** (`library_*`) → sempre **atributos** — dados de referência que enriquecem objetos, nunca manipulados diretamente pelo usuário final
- Entidades de **instância** (`user_*`, `radar_items`, `action_items`, etc.) → sempre **objetos** — representam o estado real da empresa e são acionáveis

---

## Objetos Primários

Têm tela própria ou drawer dedicado. São listáveis, clicáveis e acionáveis.

| Entidade (banco)          | Componente UI                   | Ações disponíveis                       |
| ------------------------- | ------------------------------- | --------------------------------------- |
| `radar_items`             | `RadarCard` + `RadarSideDrawer` | Adicionar ao plano, dispensar, reativar |
| `action_items`            | `ActionCard`                    | Editar status, atribuir, definir prazo  |
| `risk_registry`           | `RiskCard`                      | Editar, mitigar, arquivar               |
| `reports`                 | `ReportCard`                    | Abrir, editar, compartilhar, excluir    |
| `user_metrics` (por KPI)  | `KPICard`                       | Editar valor, verificar, ver histórico  |
| `user_strategy_focus`     | `ChallengeCard`                 | Acompanhar progresso, resolver, pausar  |
| `knowledge_snapshots`     | `SnapshotCard`                  | Visualizar, comparar períodos, exportar |
| `processed_documents`     | `DocumentCard`                  | Reprocessar, ver extração, excluir      |
| `data_source_connections` | `DataSourceCard`                | Sincronizar, pausar, revogar            |
| `supplier_scorecards`     | `SupplierCard`                  | Editar scores, ver histórico, alertas   |
| `client_health_scores`    | `ClientCard`                    | Ver ciclo de vida, ações de retenção    |
| `employee_costs`          | `EmployeeCard`                  | Editar custos, ver projeções            |
| `short_term_forecasts`    | `ForecastCard`                  | Ver detalhes, ajustar método            |
| `swot_simple`             | `SwotCard`                      | Editar quadrantes, gerar com IA         |
| `business_units`          | `BusinessUnitCard`              | Editar, gerenciar departamentos         |

---

## Objetos Secundários

Aparecem como cards em contexto específico, sem tela própria independente.

| Entidade (banco)               | Componente UI        | Onde aparece                          |
| ------------------------------ | -------------------- | ------------------------------------- |
| `risk_mitigations`             | `MitigationItem`     | Dentro do drawer de `RiskCard`        |
| `report_folders`               | `FolderCard`         | Lista de pastas na tela de Relatórios |
| `progress_history`             | `ProgressBar` inline | Dentro de `ChallengeCard`             |
| `client_lifecycle_history`     | `LifecycleEvent`     | Timeline dentro de `ClientCard`       |
| `supplier_risk_alerts`         | `AlertBadge`         | Dentro de `SupplierCard`              |
| `supplier_performance_history` | `SparklineChart`     | Dentro de `SupplierCard`              |
| `payroll_projections`          | `ProjectionRow`      | Dentro da tela de RH                  |
| `forces_weaknesses_analysis`   | `ForcesCard`         | Complementar ao `SwotCard`            |

---

## Atributos / Partes

Nunca são cards. Sempre compõem outros objetos como informação contextual.

| Entidade (banco)                  | Compõe                              | Como aparece na UI                                           |
| --------------------------------- | ----------------------------------- | ------------------------------------------------------------ |
| `library_diagnoses`               | `RadarSideDrawer`                   | Seção "Diagnóstico": causa raiz, efeito, por quê             |
| `library_impacts`                 | `RadarSideDrawer`                   | Seção "Impacto Estimado": +X% em Y KPI                       |
| `library_timeframes`              | `RadarCard`                         | Badge de prazo ("Curto prazo", "30 dias")                    |
| `library_complexities`            | `RadarCard`                         | Badge de complexidade + horas estimadas                      |
| `radar_item_suggested_levers`     | `RadarSideDrawer`                   | Lista de badges de alavancas recomendadas                    |
| `radar_item_metrics`              | `RadarSideDrawer`                   | Mini-tabela de KPIs relacionados ao alerta                   |
| `radar_item_data_sources`         | `RadarSideDrawer`                   | Rodapé "Fontes de dados"                                     |
| `library_kpis` (metadados)        | `KPICard`                           | Título, unidade, fórmula, direção de tendência               |
| `internal_benchmarks`             | `KPICard`                           | Linha de benchmark no gráfico                                |
| `library_challenges` (metadados)  | `ChallengeCard`                     | Título, domínio, sintomas do desafio                         |
| `library_levers`                  | `ChallengeCard` / `RadarSideDrawer` | Lista de alavancas estratégicas                              |
| `library_actions`                 | `ChallengeCard` (expandido)         | Steps de ação dentro de uma alavanca                         |
| `library_goals`                   | `ChallengeCard`                     | Objetivo estratégico associado ao desafio                    |
| `document_extracted_chunks`       | `DocumentCard`                      | Seção "Conteúdo extraído" (preview de chunks)                |
| `knowledge_embeddings`            | invisível                           | Usado apenas para busca semântica — sem representação visual |
| `organization_ui_preferences`     | `AppLayout` / `Settings`            | Controla visibilidade de módulos e modo de operação          |
| `organization_industry_settings`  | `Settings` / onboarding             | Configuração de setor industrial                             |
| `industry_templates`              | onboarding wizard                   | Seleção de template no setup inicial                         |
| `profiles`                        | `Header` / `Avatar`                 | Nome, email, role — parte do header da aplicação             |
| `roles_permissions`               | `Settings` / RBAC                   | Configuração de permissões por papel                         |
| `memberships`                     | `Settings` / hierarquia             | Vínculo usuário-organização-papel                            |
| `audit_logs`                      | `Settings` / admin                  | Tabela de auditoria (somente leitura)                        |
| `consent_records`                 | `Settings` / LGPD                   | Lista de consentimentos do usuário                           |
| `blueprint_versions`              | `BlueprintPage`                     | Timeline de versões do Blueprint                             |
| `library_challenge_lever_mapping` | invisível                           | Dado de relacionamento — sem representação direta            |
| `library_goal_lever_mapping`      | invisível                           | Dado de relacionamento — sem representação direta            |

---

## Casos Especiais (Telas, não Cards)

Algumas entidades são complexas demais para um card — merecem tela dedicada com wizard ou formulário.

| Entidade (banco)         | Representação                 | Justificativa                                    |
| ------------------------ | ----------------------------- | ------------------------------------------------ |
| `organization_blueprint` | `BlueprintPage` (tela wizard) | 40+ campos em 6 seções — não cabe em card        |
| `organizations`          | `Settings` / onboarding       | Configuração global da empresa                   |
| `departments`            | `DepartmentsPage`             | Hierarquia com parent_department — requer árvore |
| `teams`                  | `TeamsPage`                   | Lista gerenciável dentro de departamento         |

---

## Hierarquia Visual Completa

```
Dashboard Principal
├── KPICard[]                        ← objeto primário
│   ├── título + unidade             ← library_kpis (atributo)
│   ├── valor atual                  ← user_metrics.value (atributo)
│   ├── tendência (delta%)           ← user_metrics.delta_percentage (atributo)
│   ├── status (critical/warning/good) ← calculado (atributo)
│   └── linha de benchmark           ← internal_benchmarks (atributo)
│
├── RadarCard[]                      ← objeto primário
│   ├── título + tipo + severity     ← radar_items (atributos)
│   ├── domínio badge                ← radar_items.domain (atributo)
│   ├── ai_confidence_score          ← atributo
│   └── [clique → RadarSideDrawer]
│       ├── Seção Diagnóstico        ← library_diagnoses (atributo)
│       │   ├── causa raiz
│       │   ├── efeito no negócio
│       │   └── por quê acontece
│       ├── Seção Impacto            ← library_impacts (atributo)
│       │   ├── valor + tipo + direção
│       │   └── categoria (revenue/cost/efficiency)
│       ├── Badges Timeframe + Complexity ← library_timeframes/complexities (atributos)
│       ├── Alavancas[]              ← radar_item_suggested_levers (atributos)
│       ├── KPIs relacionados[]      ← radar_item_metrics (atributos)
│       └── CTAs: Adicionar ao Plano / Dispensar / Reativar
│
└── ChallengeCard[]                  ← objeto primário
    ├── título + domínio             ← library_challenges (atributo)
    ├── barra de progresso           ← progress_history (atributo)
    ├── objetivo estratégico         ← library_goals (atributo)
    └── alavancas[]                  ← library_levers (atributos)
        └── steps[]                  ← library_actions (atributos)

Plano de Ação
└── ActionCard[]                     ← objeto primário
    ├── título + status + prioridade ← atributos
    ├── link para radar_item origem  ← referência (não card)
    └── prazo + responsável          ← atributos

Gestão de Riscos
├── Matriz 10x10                     ← visualização agregada (não card)
└── RiskCard[]                       ← objeto primário
    ├── score + categoria + status   ← atributos
    └── [drawer] MitigationItem[]    ← objeto secundário
        ├── título + plano de ação   ← atributos
        └── prazo + responsável      ← atributos

Relatórios
├── FolderCard[]                     ← objeto secundário
└── ReportCard[]                     ← objeto primário
    ├── título + status + data       ← atributos
    └── blocks[]                     ← conteúdo interno (atributos)

Data Sources
├── DataSourceCard[]                 ← objeto primário
│   ├── provider icon + display_name ← atributos
│   ├── status badge                 ← atributo
│   └── última sync                  ← atributo
└── DocumentCard[]                   ← objeto primário
    ├── filename + status            ← atributos
    ├── extraction_confidence        ← atributo
    ├── kpis_extracted_count         ← atributo
    └── chunks preview               ← document_extracted_chunks (atributo)

Knowledge Base
└── SnapshotCard[]                   ← objeto primário
    ├── period_key + overall_health  ← atributos
    ├── ai_narrative (preview)       ← atributo
    └── KPI summary (mini-cards)     ← atributos (não KPICards completos)

Blueprint (tela, não card)
└── BlueprintPage
    ├── completeness_score           ← atributo calculado
    ├── Seção Identidade             ← campos do blueprint (atributos)
    ├── Seção Mercado                ← campos do blueprint (atributos)
    ├── Seção Operação               ← campos do blueprint (atributos)
    ├── Seção Produtos               ← campos do blueprint (atributos)
    ├── Seção Objetivos              ← campos do blueprint (atributos)
    └── Seção Financeiro             ← campos do blueprint (atributos)

Fornecedores
└── SupplierCard[]                   ← objeto primário
    ├── nome + categoria + status    ← atributos
    ├── score_geral (gauge)          ← atributo
    ├── scores por dimensão          ← atributos
    ├── SparklineChart               ← supplier_performance_history (atributo)
    └── AlertBadge[]                 ← supplier_risk_alerts (atributo)

Clientes
└── ClientCard[]                     ← objeto primário
    ├── client_id + health_status    ← atributos
    ├── rfm_score (gauge)            ← atributo
    ├── churn_risk_score             ← atributo
    └── LifecycleEvent[]             ← client_lifecycle_history (atributo)

RH / Custos
└── EmployeeCard[]                   ← objeto primário
    ├── nome + cargo + departamento  ← atributos
    ├── custo_total_mensal           ← atributo calculado
    └── breakdown de encargos        ← atributos (INSS, FGTS, benefícios)

Previsões
└── ForecastCard[]                   ← objeto primário
    ├── forecast_type + horizon_days ← atributos
    ├── total_projected              ← atributo
    ├── confidence_score             ← atributo
    └── gráfico daily_values[]       ← atributo (array de valores)

SWOT
└── SwotCard                         ← objeto primário (único por análise)
    ├── forcas[] + fraquezas[]       ← atributos JSONB
    ├── oportunidades[] + ameacas[]  ← atributos JSONB
    ├── balance_score                ← atributo calculado
    └── acao_prioritaria             ← atributo

Hierarquia Organizacional
├── BusinessUnitCard[]               ← objeto primário
│   └── DepartmentCard[]             ← objeto secundário (dentro da BU)
│       └── TeamCard[]               ← objeto secundário (dentro do dept)
└── MembershipRow[]                  ← objeto secundário (tabela de membros)
```

---

## Implicações para Implementação

### Props mínimas de cada Objeto Primário

```typescript
// KPICard
interface KPICardProps {
  kpiCode: string;
  title: string;
  value: number;
  unit: string;
  trend: "up" | "down" | "stable";
  deltaPercentage?: number;
  status: "critical" | "warning" | "good";
  benchmark?: number;
}

// RadarCard (resumo — drawer tem mais)
interface RadarCardProps {
  id: string;
  title: string;
  type: "risk" | "opportunity";
  severity: "critical" | "high" | "medium" | "low";
  domain: string;
  aiConfidenceScore: number;
  status: string;
  onOpen: () => void;
}

// ActionCard
interface ActionCardProps {
  id: string;
  title: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  priority: 1 | 2 | 3 | 4 | 5;
  dueDate?: string;
  assignedTo?: string;
  radarItemTitle?: string; // referência ao origem
}

// DocumentCard
interface DocumentCardProps {
  id: string;
  originalFilename: string;
  fileType: string;
  processingStatus:
    | "queued"
    | "extracting"
    | "parsing"
    | "mapping"
    | "completed"
    | "failed";
  extractionConfidence?: number;
  kpisExtractedCount?: number;
  onReprocess: () => void;
  onViewExtraction: () => void;
}
```

### Dados que NUNCA devem ser props de card (buscar via JOIN no hook)

- `library_diagnoses` → buscar via `diagnosis_code` FK no hook `useRadarItems`
- `library_impacts` → buscar via `impact_code` FK no hook `useRadarItems`
- `library_kpis` metadados → buscar via `kpi_code` FK no hook `useUserMetrics`
- `library_challenges` metadados → buscar via `challenge_code` FK no hook `useStrategyFocus`

Esses dados devem ser resolvidos no hook (com JOIN no Supabase) e entregues já enriquecidos ao componente. O componente nunca deve fazer queries adicionais para buscar dados de biblioteca.

---

_Documento criado por: Kiro AI Assistant | 2026-04-01_
_Baseado em: schema real Supabase + análise de entidades do design.md_

---

## Progressive Disclosure — Não expor tudo ao mesmo tempo

**O problema:** 23 objetos de UI expostos simultaneamente causam sobrecarga cognitiva.

**A solução:** Revelar complexidade em 4 camadas progressivas.

### O usuário aprende apenas 4 conceitos

```
GPS Estratégico
├── PAINEL    → KPICard[]      "Onde estou agora"
├── ALERTAS   → RadarCard[]    "O que está errado"
├── AÇÕES     → ActionCard[]   "O que fazer"
└── HISTÓRICO → SnapshotCard[] "De onde vim"
```

### Camada 1 — Núcleo (sempre visível, todo usuário)

`KPICard` + `RadarCard` + `ActionCard`

### Camada 2 — Contexto (aparece ao clicar, nunca na tela inicial)

Drawer do Radar, histórico do KPI, detalhes da Ação

### Camada 3 — Módulos opcionais (ativados por setor/maturidade)

Riscos, Fornecedores, Clientes, RH, Previsões, SWOT — apenas quando relevantes

### Camada 4 — Configuração (raramente acessada)

Blueprint, Hierarquia, Data Sources, Permissões

**Controlado por:** `organization_ui_preferences.modo_operacao` (`simples` / `completo` / `enterprise`)

**Ver detalhes completos em:** `SPEC_progressive_disclosure.md`
