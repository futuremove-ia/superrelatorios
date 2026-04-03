# MASTER PLAN — SuperRelatórios

## Plano Mestre de Correção, Refatoração e Implementação

**Data:** 2026-04-02
**Versão:** 2.0
**Baseado em:** Auditorias + contexto histórico da pasta knowledge/

---

## Princípios Fundamentais

### Arquitetura

- **Clean Architecture**: UI → Application → Domain → Infrastructure
- **DDD na forma de pensar**: Domínios bounded (Finance, Commercial, Marketing, Operations, People, Strategy)
- **TDD pragmático**:
  - Testes de integração para fluxos críticos (parse → extract → save)
  - Testes unitários para regras de domínio (cálculos de KPIs, detecção de desafios)
  - Sem property-based tests para MVP (fast-check muito overhead)
  - Coverage target: 70% para core services, 50% para UI

### Experiência do Usuário

> "Simplicidade genial. Didática extrema. Utilidade radical. Moldar gestão."

| Premissa                | Definição                                             | Exemplo                                                      |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| **Simplicidade Genial** | Todo usuário consegue usar sem treinamento            | 3 cliques para ter insights                                  |
| **Didática Extrema**    | Sistema ensina enquanto usuário usa                   | Tooltips, exemplos, explicações em linguagem simples         |
| **Utilidade Radical**   | Valor percebido em segundos                           | Primeiro dashboard já mostra algo útil                       |
| **Moldar Gestão**       | Sistema ensina boas práticas de gestão para PMEs/SMBs | Ao detectar problema, sugere ação concreta com passo a passo |

### Estratégia de Moldagem de Gestão

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 COMO O SISTEMA MOLDA COMPORTAMENTO                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. DETECTAR PROBLEMA          →  2. EXPLICAR PORQUE                       │
│     "Runway = 2 meses"              "Sem caixa, você fecha em 60 dias"     │
│                                                                             │
│  3. SUGERIR AÇÃO                →  4. ACOMPANHAR PROGRESSO                │
│     "Reduza custos em 15%"         Meta: R$10k/mês | Agora: R$8k ✅       │
│                                                                             │
│  PRINCÍPIO: Toda reclamação tem sugestão. Todo problema tem solução.        │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  EXEMPLO PRÁTICO                                                     │   │
│  │  ┌─────────────────────────────────────────────────────────────────┐│   │
│  │  │  Problema: "Taxa de churn = 8%/mês"                             ││   │
│  │  │  Por que importa: "Você perde 8 clientes a cada 100 por mês"     ││   │
│  │  │  Sugestão: "Implemente onboarding estruturado para novos       ││   │
│  │  │              clientes"                                         ││   │
│  │  │  Passo a passo: 1) Crie checklist de onboarding 2) Agende      ││   │
│  │  │              check-in semanal 3) Configure automação           ││   │
│  │  └─────────────────────────────────────────────────────────────────┘│   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## FASE 0 — Hotfixes Críticos ✅ CONCLUÍDO

O sistema mantém 100+ KPIs, desafios e alavancas para cobrir máxima variedadede segmentos, nichos e tamanhos de PMEs (1-100 funcionários). O usuário vê apenas os relevantes ao seu contexto.

---

## FASE 0 — Hotfixes Críticos ✅ CONCLUÍDO

### 0.1 ✅ Corrigir `organization_members` → `profiles`

- **Status:** CORRIGIDO

### 0.2 ✅ Corrigir bug lógico em `hasChallengeSymptoms`

- **Status:** CORRIGIDO

### 0.3 ✅ Unificar tipo `ExtractedKPI`

- **Status:** CORRIGIDO

### 0.4 ✅ Corrigir invalidação de cache em `useRisks`

- **Status:** CORRIGIDO

---

## FASE 0.5 — Novas Funcionalidades ✅ CONCLUÍDO

### 0.5.1 ✅ Onboarding Fast Lane & Deep Dive

- **Porta A (Fast):** "Resolver problema urgente" → Upload rápido → Diagnóstico em 30s
- **Porta B (Deep):** "Estruturar gestão" → Contexto completo → Análise detalhada
- **Porta C (Demo):** "Explorar com dados de exemplo" → Modo Demo com dados mock

### 0.5.2 ✅ Setores Expandidos (5→12)

- Technology, Retail, Manufacturing, Services, Healthcare, Finance, Education, Food, Construction, Logistics, Agriculture, Entertainment

### 0.5.3 ✅ KPIs Expandidos (29→100+)

- KPIs por setor e nicho com relevance score

### 0.5.4 ✅ Sistema de Memória 3 Camadas

- Documentação + Código + Banco (agent_memory table)

---

## FASE 0 — Hotfixes Críticos ✅ PARCIALMENTE CONCLUÍDO

### 0.1 ✅ Corrigir `organization_members` → `profiles`

- **Status:** Verificar se foi corrigido

### 0.2 ✅ Corrigir bug lógico em `hasChallengeSymptoms`

- **Status:** Verificar se foi corrigido

### 0.3 ✅ Unificar tipo `ExtractedKPI`

- **Status:** Verificar se foi corrigido

### 0.4 ✅ Corrigir invalidação de cache em `useRisks`

- **Status:** Verificar se foi corrigido

---

## FASE 1 — Pipeline de Dados (Parser + Extração)

**Prazo:** 1-2 semanas | **Prioridade:** 🔴 ALTA

### 1.1 File Parser Service — Suporte Completo a Formatos

| Formato            | Status   | Prioridade | Notas                         |
| ------------------ | -------- | ---------- | ----------------------------- |
| CSV                | ✅ OK    | —          |                               |
| XLSX               | ✅ OK    | —          |                               |
| XLS                | ✅ OK    | —          | Via SheetJS                   |
| PDF                | ✅ OK    | —          | Implementado                  |
| TXT                | ✅ OK    | —          | Implementado                  |
| **Campo de texto** | ✅ OK    | **ALTA**   | Implementado (parseTextInput) |
| DOCX               | ⚠️ Falta | Média      | Precisando mammoth            |
| PPT/PPTX           | ❌ Falta | Baixa      | Necessário para legacy        |
| Google Docs/Sheets | ❌ Falta | Baixa      | OAuth complexity              |

**Implementar:**

```typescript
// Arquivo: src/services/fileParserService.ts

export type SupportedFileType =
  | "csv"
  | "xlsx"
  | "xls"
  | "pdf"
  | "txt"
  | "docx"
  | "text";

export interface ParsedFileData {
  headers: string[];
  rows: Record<string, unknown>[];
  rowCount: number;
  fileType: SupportedFileType;
  rawText?: string;
  source?: "file" | "text_input";
}

// ✅ NOVO: Suporte a campo de texto (colado ou digitado)
export const parseTextInput = (text: string): ParsedFileData => {
  const lines = text.split("\n").filter((line) => line.trim());

  // Detectar se é tabela ou texto livre
  const delimiter = detectDelimiter(lines);

  if (delimiter) {
    // É tabela
    const headers = lines[0].split(delimiter).map((h) => h.trim());
    const rows = lines.slice(1).map((line) => {
      const values = line.split(delimiter);
      const row: Record<string, unknown> = {};
      headers.forEach((header, index) => {
        row[header] = values[index]?.trim() || "";
      });
      return row;
    });
    return {
      headers,
      rows,
      rowCount: rows.length,
      fileType: "text",
      rawText: text,
      source: "text_input",
    };
  }

  // Texto livre - retornar como linhas
  const rows = lines.map((line, index) => ({ line: index + 1, content: line }));
  return {
    headers: ["line", "content"],
    rows,
    rowCount: rows.length,
    fileType: "text",
    rawText: text,
    source: "text_input",
  };
};

function detectDelimiter(lines: string[]): string | null {
  if (lines.length === 0) return null;
  const firstLine = lines[0];
  if (firstLine.includes("\t")) return "\t";
  if (firstLine.includes(";")) return ";";
  if (firstLine.includes(",")) return ",";
  return null;
}

// ✅ NOVO: DOCX parser (basic text extraction)
async function parseDOCX(file: File): Promise<ParsedFileData> {
  const { default: mammoth } = await import("mammoth");
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  const text = result.value;
  return parseTextInput(text); // Reuse text input logic
}
```

### 1.2 KPI Extraction Service — Mapeamentos

| Item                  | Status          | Cobertura       |
| --------------------- | --------------- | --------------- |
| KPI_NAME_MAPPINGS     | ✅ Expandido    | 100+ KPIs       |
| loadKPIMappingsFromDB | ✅ Implementado | —               |
| Period extraction     | ⚠️ Parcial      | Precisa wire up |

**Implementar:** Wire up `extractPeriodFromData` em `saveReportWithMetrics`

### 1.3 AI Service — Contexto

| Item                        | Status          |
| --------------------------- | --------------- |
| PromptContext (Blueprint)   | ✅ Implementado |
| PromptContext (KPI Library) | ✅ Implementado |

---

## FASE 2 — Banco de Dados (Reconciliação)

**Prazo:** 1-2 semanas | **Prioridade:** 🔴 ALTA

### 2.1 Verificar Tabelas e Queries

- [ ] `kpiLibraryService` usa `library_kpis` ✅
- [ ] `organizationKPIService` usa `user_metrics` ✅
- [ ] Queries com JOINs corretos

### 2.2 Migration de Limpeza

```sql
-- Criar arquivo: supabase/migrations/CLEANUP_LEGACY_TABLES.sql

-- 1. Migrar KPIs legados para library_kpis
INSERT INTO library_kpis (code, title, description, formula, unit, domain, trend_direction, is_active)
SELECT UPPER(code), title, description, calculation_formula, unit, domain, 'higher_is_better', true
FROM kpi_master_library
ON CONFLICT (code) DO NOTHING;

-- 2. Migrar organization_kpis → user_metrics
INSERT INTO user_metrics (organization_id, kpi_code, value, unit, reference_period, period_start, period_end, is_manual_entry, created_at)
SELECT organization_id, kpi_code, value, 'ratio', period_key, period_start, period_end, true, created_at
FROM organization_kpis
ON CONFLICT DO NOTHING;

-- 3. Padronizar domínios (sales → commercial)
UPDATE library_kpis SET domain = 'commercial' WHERE domain = 'sales';

-- 4. Corrigir risk_score para GENERATED ALWAYS AS
ALTER TABLE risk_registry DROP COLUMN IF EXISTS risk_score;
ALTER TABLE risk_registry ADD COLUMN risk_score INTEGER GENERATED ALWAYS AS (likelihood * impact) STORED;

-- 5. Criar tabelas ausentes
CREATE TABLE IF NOT EXISTS report_folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE report_folders ENABLE ROW LEVEL SECURITY;
```

### 2.3 Radar Hook com JOINs

- [x] `useRadarItems` criado com JOINs ✅
- [ ] Verificar se está sendo usado pelo RadarSideDrawer

---

## FASE 3 — Design System e Frontend

**Prazo:** 1-2 semanas | **Prioridade:** 🟡 MÉDIA

### 3.1 CSS Classes do DSP

Implementar classes vazias em `src/index.css`:

```css
@layer components {
  .card-hover {
    @apply transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer;
  }
  .badge-success {
    @apply bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300;
  }
  .badge-warning {
    @apply bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300;
  }
  .badge-error {
    @apply bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300;
  }
  .typography-h1 {
    @apply text-3xl font-bold tracking-tight;
  }
  .typography-h2 {
    @apply text-2xl font-semibold tracking-tight;
  }
  .typography-metric {
    @apply font-mono font-bold tabular-nums;
  }
  .status-positive {
    @apply text-green-600 dark:text-green-400;
  }
  .status-negative {
    @apply text-red-600 dark:text-red-400;
  }
  .status-neutral {
    @apply text-blue-600 dark:text-blue-400;
  }
  .status-pending {
    @apply text-amber-600 dark:text-amber-400;
  }
}
```

### 3.2 Progressive Disclosure

Implementar modos de operação (simples/completo/enterprise):

```typescript
// src/hooks/useUIPreferences.ts
export function useUIPreferences() {
  const { organizationId } = useCurrentOrganization();
  return useQuery({
    queryKey: ["ui_preferences", organizationId],
    queryFn: async () => {
      const { data } = await supabase
        .from("organization_ui_preferences")
        .select("*")
        .eq("organization_id", organizationId)
        .single();
      return data;
    },
    staleTime: 15 * 60 * 1000,
  });
}

const SIMPLE_MODULES = [
  "dashboard",
  "radar",
  "action-plan",
  "reports",
  "settings",
];
const COMPLETO_MODULES = [
  ...SIMPLE_MODULES,
  "risks",
  "analytics",
  "decision-panel",
];
const ENTERPRISE_MODULES = [
  ...COMPLETO_MODULES,
  "hierarchy",
  "forecasts",
  "swot",
];
```

---

## FASE 4 — Motor de Relevância Inteligente

**Prazo:** 2-3 semanas | **Prioridade:** 🟡 **ALTA** (CRÍTICO para retenção)

### Princípio Central

> "Entregar valor máximo com dados mínimos. Quanto mais o usuário usa, mais inteligente o sistema fica."

O sistema deve mostrar valor desde o **primeiro arquivo carregado**, sem exigir onboarding extenso.

**As 3 Premissas Aplicadas:**

| Premissa                | Como Aplicar ao Motor de Relevância                                                  |
| ----------------------- | ------------------------------------------------------------------------------------ |
| **Simplicidade Genial** | Dashboard mostra NO MÁXIMO 3 KPIs ao início. O usuário não se overwhelmed.           |
| **Didática Extrema**    | Cada KPI mostra tooltip explicativo: "O que é?", "Por que importa?", "Como melhorar" |
| **Utilidade Radical**   | Primeiro KPI = RUNWAY (sobrevida). Se zero dados → mostrar alerta claro              |

### 4.1 Estratégia de Ativação por Dados

#### Níveis de Maturidade de Dados

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    NÍVEIS DE MATURIDADE DE DADOS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  NÍVEL 0: ZERO DADOS                                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  → Mostrar APENAS 1 KPI: "Pista de Decolagem" (RUNWAY)            │   │
│  │  → Badge: "Preciso de dados" com seta para carregar               │   │
│  │  → Texto: "Carregue 1 arquivo para eu calcular sua saúde"        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  NÍVEL 1: PRIMEIRO ARQUIVO (1 arquivo)                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  → Mostrar ATÉ 3 KPIs: RUNWAY + Margem Bruta + Crescimento         │   │
│  │  → Cada KPI com indicador visual simples (🔴🟡🟢)                │   │
│  │  → Sugestão: "Carregue extrato bancário para melhorar precisão"   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  NÍVEL 2: ALGUNS DADOS (5+ valores por KPI)                                │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  → Mostrar 5 KPIs com tendências (↗↘↙)                            │   │
│  │  → Comparação com benchmark do setor                              │   │
│  │  → Alertas de desafios (cash flow, churn, etc.)                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  NÍVEL 3: DADOS SUFICIENTES (20+ valores por KPI)                         │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  → Mostrar todos os KPIs relevantes                               │   │
│  │  → Previsões (7/30/60 dias) + cenários what-if                    │   │
│  │  → Radar automático de riscos                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

│ NÍVEL 0: ZERO DADOS │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ → Mostrar KPIs "sugestão" baseados apenas no setor/tamanho │ │
│ │ → Dashboard vazio com call-to-action claro │ │
│ │ → "Carregue seu primeiro extrato para começarmos" │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ NÍVEL 1: PRIMEIRO ARQUIVO (1 arquivo) │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ → Extrair TODOS os KPIs possíveis do arquivo │ │
│ │ → Mesmo que sejam 3-5 KPIs, mostrar valor │ │
│ │ → Feedback: "Ótimo! Vamos extrair mais KPIs" │ │
│ │ → Sugerir próximo arquivo que complementa dados │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ NÍVEL 2: ALGUNS DADOS (5+ valores por KPI) │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ → Calcular tendências (subiu/desceu/estável) │ │
│ │ → Detectar desafios críticos (runway < 6 meses) │ │
│ │ → Comparar com benchmarks do setor │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ NÍVEL 3: DADOS SUFICIENTES (20+ valores por KPI) │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ → Previsões de curto prazo (7/30/60/90 dias) │ │
│ │ → Análise de sazonalidade │ │
│ │ → Detecção proativa de riscos │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
│ NÍVEL 4: DADOS ROBUSTOS (50+ valores por KPI) │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ → Forecasts avançados │ │
│ │ → Cenários "what-if" │ │
│ │ → Benchmarks personalizados │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────────────────────────┘

````

#### KPIs de Alto Valor por Nível

| Nível | KPIs Prioritários | Justificativa |
|-------|-------------------|---------------|
| **1** | RUNWAY_MONTHS, BURN_RATE, CASH_CONVERSION_CYCLE | Supervivencia da empresa - sempre crítico |
| **1** | REVENUE_GROWTH, GROSS_MARGIN | Saúde financeira básica |
| **2** | CAC, LTV, LTV_CAC_RATIO, CHURN_RATE | Eficiência comercial |
| **2** | NET_PROFIT_MARGIN, EBITDA_MARGIN | Rentabilidade |
| **3** | Sales cycle, Pipeline coverage | Previsibilidade comercial |
| **3** | Operating cash flow, Working capital | Fluxo de caixa |
| **4** | Break-even, Contribution margin | Cenários e planejamento |

### 4.2 Motor de Relevância — Arquitetura

```typescript
// src/services/relevanceEngine.ts

export interface DataPresence {
  kpi_code: string;
  data_points: number;
  last_value: number | null;
  last_period: string | null;
  data_quality_score: number; // 0-1: consistencia e completude
}

export interface KPIRelevance {
  kpi_code: string;
  priority: number; // 1-5
  reason: 'core' | 'data_available' | 'sector_relevant' | 'calculated';
  readiness_level: number; // 0-4
  next_action?: string;
}

export class RelevanceEngine {
  async calculateRelevance(
    organizationId: string,
    sector?: string,
    companySize?: string
  ): Promise<KPIRelevance[]> {
    const presence = await this.getDataPresence(organizationId);
    const coreKPIs = await this.getCoreKPIs();
    const sectorKPIs = await this.getSectorKPIs(sector);

    // Priorizar KPIs com dados
    const withData = presence.filter(p => p.data_points > 0);
    const withoutData = presence.filter(p => p.data_points === 0);

    // Juntar tudo com prioridades
    const relevance: KPIRelevance[] = [];

    // 1. Core KPIs com dados → prioridade máxima
    for (const kpi of coreKPIs) {
      const p = presence.find(x => x.kpi_code === kpi.code);
      relevance.push({
        kpi_code: kpi.code,
        priority: 1,
        reason: p?.data_points ? 'data_available' : 'core',
        readiness_level: this.getReadinessLevel(p?.data_points || 0),
      });
    }

    // 2. KPIs do setor → prioridade média
    for (const kpi of sectorKPIs) {
      if (!relevance.find(r => r.kpi_code === kpi.code)) {
        const p = presence.find(x => x.kpi_code === kpi.code);
        relevance.push({
          kpi_code: kpi.code,
          priority: 3,
          reason: 'sector_relevant',
          readiness_level: this.getReadinessLevel(p?.data_points || 0),
        });
      }
    }

    // 3. Adicionar sugestões para dados faltantes
    for (const r of relevance) {
      if (r.readiness_level === 0) {
        r.next_action = this.suggestNextAction(r.kpi_code);
      }
    }

    return relevance.sort((a, b) => a.priority - b.priority);
  }

  private suggestNextAction(kpiCode: string): string {
    const suggestions: Record<string, string> = {
      'RUNWAY_MONTHS': 'Carregue um extrato bancário para calcular seu runway',
      'LTV_CAC_RATIO': 'Carregue planilha de vendas para calcular LTV/CAC',
      'GROSS_MARGIN': 'Carregue demonstrativo de resultados (DRE)',
    };
    return suggestions[kpiCode] || 'Carregue mais dados para ativar este KPI';
  }

  private getReadinessLevel(dataPoints: number): number {
    if (dataPoints === 0) return 0;
    if (dataPoints < 5) return 1;
    if (dataPoints < 20) return 2;
    if (dataPoints < 50) return 3;
    return 4;
  }
}
````

### 4.3 Hook useRelevantKPIs

```typescript
// src/hooks/useRelevantKPIs.ts

export function useRelevantKPIs() {
  const { organization } = useCurrentOrganization();

  return useQuery({
    queryKey: ['relevant_kpis', organization?.id],
    queryFn: async () => {
      const engine = new RelevanceEngine();
      return engine.calculateRelevance(
        organization!.id,
        organization?.industry_sector,
        organization?.employee_count_range
      );
    },
    staleTime: 5 * 60 * 1000, // 5 min
    enabled: !!organization?.id,
  });
}

// Componente de sugestão automática
export function DataSuggestionBanner() {
  const { data: kpis, isLoading } = useRelevantKPIs();

  if (isLoading) return null;

  // Pegar KPIs nível 0 com sugestão
  const suggestions = kpis?.filter(k => k.next_action && k.priority <= 2);
  if (!suggestions?.length) return null;

  return (
    <Banner variant="info">
      💡 {suggestions[0].next_action}
    </Banner>
  );
}
```

### 4.4 KPIs (100+)

| Domínio    | Core   | Domain  | Segment | Total   |
| ---------- | ------ | ------- | ------- | ------- |
| Finance    | 10     | 25      | 5       | 40      |
| Commercial | 8      | 20      | 3       | 31      |
| Marketing  | 0      | 18      | 0       | 18      |
| Operations | 0      | 20      | 5       | 25      |
| People     | 2      | 17      | 0       | 19      |
| Strategy   | 0      | 12      | 0       | 12      |
| **Total**  | **20** | **112** | **13**  | **145** |

### 4.5 Industry Templates (10+ setores)

- Varejo, Serviços, SaaS/Tech, Indústria, Consultoria
- Saúde, Educação, Alimentação, Construção, Agronegócio

### 4.3 Motor de Relevância

```sql
CREATE OR REPLACE FUNCTION get_relevant_kpis(p_organization_id UUID)
RETURNS TABLE(kpi_code TEXT, reason TEXT, priority INT) AS $$
BEGIN
  RETURN QUERY SELECT lk.code, 'core', 1 FROM library_kpis lk WHERE lk.is_core = true;
  RETURN QUERY SELECT DISTINCT um.kpi_code, 'data_available', 2 FROM user_metrics um WHERE um.organization_id = p_organization_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## FASE 5 — Novas Funcionalidades (UI)

**Prazo:** 3-4 semanas | **Prioridade:** 🟢 MÉDIA

| Módulo                    | Tabela                             | Rota                      |
| ------------------------- | ---------------------------------- | ------------------------- |
| Hierarquia Organizacional | business_units, departments, teams | `/app/settings/hierarchy` |
| SWOT                      | swot_simple                        | `/app/strategy/swot`      |
| Previsões                 | short_term_forecasts               | `/app/forecasts`          |
| Fornecedores              | supplier_scorecards                | `/app/suppliers`          |
| Clientes                  | client_health_scores               | `/app/clients`            |
| RH/Custos                 | employee_costs                     | `/app/hr/costs`           |

---

## FASE 6 — Document Pipeline Server-Side

**Prazo:** 4-8 semanas | **Prioridade:** 🔵 ESTRATÉGICA

### Arquitetura do Pipeline

```
Upload/Drive/OneDrive
       ↓
  Supabase Storage
       ↓
  Edge Function (api/process-document)
       ↓
  ┌─────────────────────────────────────────────┐
  │  UNSTRUCTURED API (extração de elementos)  │ ← NOVO: vem antes do Semantic Parser
  │  - Textos, tabelas, imagens, metadados       │
  │  - Chunking inteligente                      │
  └─────────────────────────────────────────────┘
       ↓
  ┌─────────────────────────────────────────────┐
  │  SEMANTIC PARSER (Gemini)                    │
  │  - Mapeia elementos para entidades          │
  │  - Contexto: Blueprint + KPI Library         │
  └─────────────────────────────────────────────┘
       ↓
  ┌─────────────────────────────────────────────┐
  │  KPI MAPPER                                  │
  │  - Valida mappings                          │
  │  - Cria user_metrics                        │
  │  - Cria chunks com embeddings (pgvector)    │
  └─────────────────────────────────────────────┘
       ↓
  Supabase Realtime → Frontend (status update)
```

### 6.1 Edge Function `api/process-document.ts`

```typescript
// Estrutura da Edge Function
export default async function handler(req: Request): Promise<Response> {
  const { documentId } = await req.json();

  // 1. Buscar documento do Storage
  const doc = await getDocumentFromStorage(documentId);

  // 2. Extrair conteúdo via Unstructured API
  await updateStatus(documentId, "extracting");
  const elements = await unstructuredClient.extractElements(
    doc.path,
    doc.file_type,
  );

  // 3. Parser semântico via Gemini (com contexto)
  await updateStatus(documentId, "parsing");
  const blueprint = await getBlueprint(doc.organization_id);
  const kpiLibrary = await getKPILibrary();
  const mappings = await semanticParser.mapToKPIs(
    elements,
    kpiLibrary,
    blueprint,
  );

  // 4. Persistir KPIs extraídos
  await updateStatus(documentId, "mapping");
  await kpiMapper.createKPIValues(mappings, documentId, doc.organization_id);
  await kpiMapper.createChunks(elements, mappings, doc.organization_id);

  // 5. Gerar relatório de extração
  const report = extractionReporter.buildReport(mappings, elements);
  await updateStatus(documentId, "completed", report);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
```

### 6.2 Unstructured Client

| Status          | Arquivo                               |
| --------------- | ------------------------------------- |
| ✅ Implementado | `src/services/unstructuredService.ts` |

```typescript
// Usando o serviço
import { unstructuredClient } from "@/services/unstructuredService";

const elements = await unstructuredClient.extractFromStorage(
  "documents/report.pdf",
  organizationId,
);
```

    const response = await fetch(`${this.baseUrl}/general/v0/general`, {
      method: "POST",
      headers: {
        "Api-Key": this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: [{ path: filePath }],
        strategy: "auto",
        extract_table_as_html: true,
        include_image_base64: true,
      }),
    });

    const result = await response.json();
    return result.elements.map(this.mapElement);

}

private mapElement(raw: any): UnstructuredElement {
return {
type: raw.type,
text: raw.text,
metadata: {
page_number: raw.metadata?.page_number,
table_as_json: raw.metadata?.table_as_json,
image_base64: raw.metadata?.image_base64,
},
};
}
}

````

### 6.3 Data Source Connections (Google Drive, OneDrive)

### 6.4 Knowledge Base e Snapshots

---

## Estratégia de Testes (TDD Pragmático)

### Níveis de Teste

| Nível                 | Coverage Target   | Quando                |
| --------------------- | ----------------- | --------------------- |
| Integração (E2E flow) | Fluxos críticos   | Sempre                |
| Unitário (domínio)    | 70% core services | Sempre                |
| Unitário (UI)         | 50% componentes   | Quando tempo permitir |
| Property-based        | 0%                | Removido do escopo    |

### Fluxos Críticos para Testes de Integração

1. **Parse → Extract → Save**: CSV → parseFile → extractKPIs → saveReportWithMetrics
2. **Text Input → Extract → Save**: Texto colado → parseTextInput → extractKPIs → saveReportWithMetrics
3. **KPI Calculation**: Métricas de entrada → calculateRunway, calculateLtvCacRatio, etc.

### Testes Unitários Prioritários

1. **Serviços de Cálculo de KPIs**: Fórmulas de KPIs (Runway, LTV/CAC, Churn, Margens) - **NOTA:** `MetricsCalculationService` não existe. Verificar implementações em:
   - `src/services/documentProcessingService.ts` (método `calculateKPIs`)
   - `src/domain/unified/factories/UnifiedMetricsFactory.ts` (método `calculateKPIsFromRawData`)
   - `src/tests/integration/domain/metrics/engine/` (KPICalculationEngine)
2. **DetectionService**: Detecção de desafios com confidence score - **NOTA:** Serviço existe em `src/services/strategic/DetectionService.ts`
3. **Risk Score**: Invariante `risk_score = likelihood * impact`

### Scripts de Teste

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest --run",
    "test:coverage": "vitest --run --coverage",
    "test:integration": "vitest run --testNamePattern='integration'",
    "test:unit": "vitest run --testNamePattern='unit'"
  }
}
````

---

## Cronograma Consolidado

```
Semana 1:     FASE 1 (Parser) + FASE 0 (verificação)
Semana 2-3:   FASE 2 (Banco)
Semana 4-5:   FASE 3 (Design System)
Semana 6-8:   FASE 4 (Bibliotecas)
Semana 9-12:  FASE 5 (Novas Features)
Semana 13-20: FASE 6 (Pipeline Server-Side)
```

---

## Sistema de Agentes Auto-Melhoráveis (Baseado em Hermes/Nous Research)

O SuperRelatórios implementa um sistema de agentes com loop de aprendizado fechado, inspiradono Hermes Agent da Nous Research.

### Arquitetura de Agentes

| Componente            | Descrição                                                        |
| --------------------- | ---------------------------------------------------------------- |
| **Agent Coordinator** | Agente principal que coordena subtarefas e persiste conhecimento |
| **Sub-Agents**        | Agentes isolados para workstreams paralelos                      |
| **Memory System**     | Persistência de conhecimento entre sessões                       |
| **Skills System**     | Procedures reutilizáveis criadas a partir de experiência         |
| **User Modeling**     | Modelo deepening de preferências e contexto do usuário           |

### Capacidades Hermes Implementadas

#### 1. Memory System (Persistência Cross-Session)

```typescript
// Sistema de memória que persiste entre sessões
interface AgentMemory {
  session_id: string;
  knowledge: KnowledgeChunk[];
  skills: Skill[];
  user_model: UserPreferences;
  last_updated: Date;
}

// FTS5 cross-session recall com LLM summarization
```

#### 2. Skills System (Criação Auto-Gerada)

```typescript
// Agente cria skills a partir de experiência
interface Skill {
  id: string;
  name: string;
  description: string;
  procedure: Procedure;
  created_from: string; // task_id que originou
  usage_count: number;
  success_rate: number;
  self_improved: boolean;
}
```

#### 3. Self-Improvement Loop

```typescript
// Agente melhora skills durante uso
async function improveSkill(skillId: string, executionResult: Result) {
  if (executionResult.success) {
    await incrementUsageCount(skillId);
  } else {
    await analyzeFailure(skillId, executionResult.error);
    await proposeImprovement(skillId);
  }
}
```

#### 4. Parallel Sub-Agents

```typescript
// Spawn de sub-agentes para trabalho paralelo
const subagents = await Promise.all([
  agent001.run({ task: "verify_db_queries" }),
  agent002.run({ task: "fix_benchmark_service" }),
  agent003.run({ task: "build_kpi_widgets" }),
]);
```

#### 5. User Modeling (Honcho-style)

```typescript
interface UserPreferences {
  display_mode: "simples" | "completo" | "enterprise";
  preferred_sector?: string;
  company_size?: string;
  communication_style: "direct" | "detailed" | "educational";
  active_tasks: Task[];
}
```

### Agentes Ativos

| Agent ID  | Função                    | Status  |
| --------- | ------------------------- | ------- |
| agent-001 | Revisor de queries        | ✅ idle |
| agent-002 | Corretor de serviços      | ✅ idle |
| agent-003 | Construtor de componentes | ✅ idle |
| agent-004 | Corretor LSP              | ✅ idle |
| agent-005 | Onboarding wizard         | ✅ idle |
| agent-006 | ActionItem CRUD           | ✅ idle |
| agent-007 | Settings pages            | ✅ idle |
| agent-008 | Analytics components      | ✅ idle |
| agent-009 | Blueprint service         | ✅ idle |
| agent-010 | Coordinator               | ✅ idle |
| agent-011 | CSS classes DSP           | ✅ idle |
| agent-012 | useUIPreferences + Radar  | ✅ idle |
| agent-013 | DataSuggestionBanner      | ✅ idle |
| agent-014 | Build TypeScript          | ✅ idle |
| agent-020 | SPEC progressive          | ✅ idle |
| agent-021 | Verificação PP-C2         | ✅ idle |
| agent-022 | Verificação PP-C3         | ✅ idle |
| agent-023 | Verificação FE-C1 a FE-C4 | ✅ idle |
| agent-024 | SPEC critical fixes       | ✅ idle |
| agent-025 | Revisão final + Build     | ✅ idle |

---

## Checklist de Qualidade

- [ ] `npm run build` sem erros TypeScript
- [ ] `npm run lint` sem erros
- [ ] Testes de integração passando
- [ ] Coverage unitário ≥ 70% em core services
- [ ] Zero referências a tabelas legadas

---

## Métricas de Sucesso

| Fase   | Métrica                | Meta                                  |
| ------ | ---------------------- | ------------------------------------- |
| Fase 1 | Formatos suportados    | ≥ 6 (CSV, XLSX, XLS, PDF, TXT, texto) |
| Fase 1 | Cobertura KPI mappings | ≥ 80%                                 |
| Fase 2 | Score banco            | ≥ 85/100                              |
| Fase 4 | KPIs na biblioteca     | ≥ 100                                 |
| Fase 5 | Novas telas            | 6/6                                   |

---

**Última atualização:** 2026-04-02
**Documento criado por:** Kiro AI Assistant
