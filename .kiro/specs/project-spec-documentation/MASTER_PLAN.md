# Plano Mestre de Correção, Refatoração e Implementação
## SuperRelatórios — Baseado em Auditoria Completa

**Data:** 2026-04-01
**Versão:** 1.0
**Baseado em:** AUDIT_REPORT.md + FRONTEND_AUDIT.md + PIPELINE_AUDIT.md + schema real Supabase

---

## Visão Geral

Este plano consolida **todos os findings críticos, alertas e gaps** identificados nas auditorias de banco de dados, frontend e pipeline. Organizado em **6 fases progressivas**, priorizando estabilidade antes de expansão.

### Princípio de Execução

> "Não construir sobre fundação quebrada. Corrigir primeiro, expandir depois."

Cada fase tem critérios de conclusão verificáveis. Nenhuma fase deve iniciar sem a anterior estar 100% concluída e validada.

---

## Resumo Executivo dos Problemas

| Categoria | Críticos | Alertas | Total |
|---|---|---|---|
| Banco de Dados | 5 | 7 | 12 |
| Frontend | 5 | 10 | 15 |
| Pipeline/Parser | 5 | 11 | 16 |
| **Total** | **15** | **28** | **43** |

**Score atual:** Banco 52/100 | Frontend 71/100 | Pipeline 48/100
**Score alvo após Fase 2:** Banco 85/100 | Frontend 88/100 | Pipeline 75/100

---

## FASE 0 — Hotfixes Imediatos
**Prazo:** 1-2 dias | **Prioridade:** 🔴 BLOQUEANTE

Correções que podem ser feitas em minutos e desbloqueiam funcionalidades quebradas.

### 0.1 Corrigir import do Radar no App.tsx [FE-C1]

**Arquivo:** `src/App.tsx`

```tsx
// Adicionar junto aos outros lazy imports (linha ~30)
const Radar = lazy(() => import("./pages/app/Radar"));
```

**Critério:** Rota `/:locale/app/radar` carrega sem ReferenceError.

---

### 0.2 Corrigir `organization_members` → `profiles` [PP-C4, PP-C5]

**Arquivo:** `src/services/reportPersistenceService.ts`

```typescript
// ANTES (quebrado — tabela não existe)
const { data: orgMember } = await supabase
  .from('organization_members')
  .select('organization_id')
  .eq('user_id', userId)
  .single();

// DEPOIS (correto)
const { data: profile } = await supabase
  .from('profiles')
  .select('organization_id')
  .eq('user_id', userId)
  .single();
const organizationId = profile?.organization_id;
```

Aplicar a mesma correção em `updateReportMetrics`.

**Critério:** Salvar relatório com métricas persiste dados em `user_metrics` sem erro.

---

### 0.3 Corrigir bug lógico em `hasChallengeSymptoms` [PP-C3]

**Arquivo:** `src/services/strategyLibraryService.ts`

```typescript
// ANTES (bug — compara kpi.code === kpi.code, sempre true)
return relevantKPIs.some(kpi =>
  kpis.some(kpi => kpi.code === kpi.code && kpi.status === 'critical')
);

// DEPOIS (correto)
return relevantCodes.some(code =>
  kpis.some(kpi => kpi.code === code && kpi.confidence < 0.5)
);
```

**Critério:** `getRecommendations` retorna templates apenas quando KPIs relevantes estão em estado crítico.

---

### 0.4 Unificar tipo `ExtractedKPI` [PP-C2]

**Arquivos:** `src/services/kpiExtractionService.ts`, `src/types/extraction.ts`

Manter o tipo de `kpiExtractionService.ts` como canônico. Atualizar `src/types/extraction.ts`:

```typescript
// src/types/extraction.ts — substituir por re-export
export type { ExtractedKPI } from '@/services/kpiExtractionService';

export interface ExtractionConfig {
  industry?: string;
  companySize?: 'small' | 'medium' | 'large';
  region?: string;
  period?: string;
}

export interface ExtractionResult {
  kpis: ExtractedKPI[];
  summary: { total: number; critical: number; warning: number; good: number };
  confidence: number;
  processingTime: number;
  errors: string[];
}
```

**Critério:** Zero erros de tipo TypeScript relacionados a `ExtractedKPI`.

---

### 0.5 Corrigir invalidação de cache em `useRisks` [FE-W3]

**Arquivo:** `src/hooks/useRisks.ts`

```typescript
// ANTES (incorreto — chave incompleta)
queryClient.invalidateQueries({ queryKey: RISK_KEYS.all() })

// DEPOIS (correto — invalida tudo com prefixo 'risks')
queryClient.invalidateQueries({ queryKey: ['risks'] })
```

Aplicar em `useUpdateRiskStatus`, `useDeleteRisk`, `useDeleteMitigation`.

**Critério:** Após atualizar status de risco, lista de riscos é refrescada automaticamente.

---

**Critério de conclusão da Fase 0:**
- [ ] `npm run build` sem erros TypeScript
- [ ] Rota `/app/radar` carrega
- [ ] Salvar relatório persiste métricas em `user_metrics`
- [ ] Zero erros de tipo em `ExtractedKPI`


---

## FASE 1 — Reconciliação Banco de Dados
**Prazo:** 1-2 semanas | **Prioridade:** 🔴 Alta

Alinhar o código com o schema real do Supabase. Sem isso, qualquer nova feature constrói sobre fundação errada.

### 1.1 Migration de Limpeza das Tabelas Legadas [DB-C1, DB-C5]

Criar arquivo `supabase/migrations/CLEANUP_LEGACY_TABLES.sql`:

```sql
-- PASSO 1: Migrar dados de tabelas legadas para library_kpis
INSERT INTO library_kpis (code, title, description, formula, unit, domain, trend_direction, is_active)
SELECT
  UPPER(code), title, description, calculation_formula,
  unit, domain, 'higher_is_better', true
FROM kpi_master_library
ON CONFLICT (code) DO NOTHING;

-- PASSO 2: Migrar organization_kpis → user_metrics
INSERT INTO user_metrics (
  organization_id, kpi_code, value, unit,
  reference_period, period_start, period_end,
  is_manual_entry, created_at
)
SELECT
  ok.organization_id,
  lk.code,
  ok.value,
  'ratio',
  ok.period_key,
  ok.period_start,
  ok.period_end,
  true,
  ok.created_at
FROM organization_kpis ok
JOIN kpi_library lk ON ok.kpi_id = lk.id
ON CONFLICT DO NOTHING;

-- PASSO 3: Padronizar domínios (sales → commercial)
UPDATE library_kpis SET domain = 'commercial' WHERE domain = 'sales';
UPDATE library_challenges SET domain = 'commercial' WHERE domain = 'sales';
UPDATE radar_items SET domain = 'commercial' WHERE domain = 'sales';

-- PASSO 4: Criar views de compatibilidade temporárias
CREATE OR REPLACE VIEW kpi_master_library AS SELECT * FROM library_kpis;
CREATE OR REPLACE VIEW organization_kpi_values AS SELECT * FROM user_metrics;

-- PASSO 5: Corrigir risk_score para GENERATED ALWAYS AS
ALTER TABLE risk_registry DROP COLUMN IF EXISTS risk_score;
ALTER TABLE risk_registry
  ADD COLUMN risk_score INTEGER GENERATED ALWAYS AS (likelihood * impact) STORED;

-- PASSO 6: Criar tabelas ausentes
CREATE TABLE IF NOT EXISTS report_folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE report_folders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "org_isolation_report_folders" ON report_folders
  USING (organization_id = (SELECT organization_id FROM profiles WHERE user_id = auth.uid()));

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
CREATE POLICY "user_own_consent" ON consent_records
  USING (user_id = auth.uid());
```

**Critério:** Zero erros de FK. `user_metrics` tem dados migrados. `risk_score` é GENERATED.

---

### 1.2 Atualizar `kpiLibraryService` para `library_kpis` [FE-C2]

**Arquivo:** `src/services/kpiLibraryService.ts`

```typescript
// Substituir todas as queries de kpi_master_library/metrics_library por library_kpis
export async function getKPIs(): Promise<KPI[]> {
  const { data, error } = await supabase
    .from('library_kpis')  // ← era kpi_master_library ou metrics_library
    .select('*')
    .eq('is_active', true)
    .order('domain', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getKPIByCode(code: string): Promise<KPI | null> {
  const { data, error } = await supabase
    .from('library_kpis')
    .select('*')
    .eq('code', code)
    .single();

  if (error) return null;
  return data;
}
```

Atualizar o tipo `KPI` para refletir o schema real de `library_kpis`:
```typescript
export interface KPI {
  id: string;
  code: string;
  title: string;
  description?: string;
  formula?: string;
  unit: string;
  domain: 'finance' | 'commercial' | 'marketing' | 'operations' | 'people' | 'strategy';
  trend_direction: 'higher_is_better' | 'lower_is_better' | 'no_trend';
  tier?: 'core' | 'domain' | 'segment' | 'advanced' | 'custom';
  is_core: boolean;
  benchmark_excellent?: number;
  benchmark_good?: number;
  benchmark_average?: number;
  benchmark_warning?: number;
  benchmark_critical?: number;
  is_active: boolean;
}
```

**Critério:** `useKPIs()` retorna dados reais de `library_kpis`.

---

### 1.3 Migrar `useOrganizationKPIs` para `user_metrics` [FE-C3]

**Arquivo:** `src/hooks/useOrganizationKPIs.ts`

```typescript
export function useOrganizationKPIs(organizationId: string, period?: string) {
  return useQuery({
    queryKey: ['user_metrics', organizationId, period],
    queryFn: async () => {
      let query = supabase
        .from('user_metrics')  // ← era organization_kpis
        .select('*, library_kpis(code, title, unit, domain, trend_direction)')
        .eq('organization_id', organizationId)
        .order('created_at', { ascending: false });

      if (period) {
        query = query.eq('reference_period', period);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    },
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });
}
```

**Critério:** Dashboard de KPIs da organização exibe dados reais.

---

### 1.4 Criar `useRadarItems` no projeto principal [FE-W4]

**Arquivo:** `src/hooks/useRadarItems.ts` (novo)

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

const RADAR_KEYS = {
  active: (orgId: string) => ['radar_items', orgId, 'active'] as const,
  history: (orgId: string) => ['radar_items', orgId, 'history'] as const,
  byId: (id: string) => ['radar_items', id] as const,
};

// Query com JOINs para modelo normalizado
const RADAR_SELECT = `
  *,
  library_diagnoses!diagnosis_code(technical_term, cause, effect, why),
  library_impacts!impact_code(description, impact_value, impact_type, impact_direction, category),
  library_timeframes!timeframe_code(label, days),
  library_complexities!complexity_code(label, typical_effort_hours),
  radar_item_suggested_levers(lever_code, priority, is_primary, confidence_score),
  radar_item_metrics(kpi_code, current_value, previous_value, change_percent, is_primary_driver)
`;

export function useRadarItems(organizationId: string) {
  return useQuery({
    queryKey: RADAR_KEYS.active(organizationId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from('radar_items')
        .select(RADAR_SELECT)
        .eq('organization_id', organizationId)
        .in('status', ['detected', 'in_progress'])
        .order('priority_score', { ascending: false });

      if (error) throw error;
      return (data || []).map(mapRadarItem);
    },
    enabled: !!organizationId,
    staleTime: 2 * 60 * 1000,
  });
}

export function useRadarHistory(organizationId: string) {
  return useQuery({
    queryKey: RADAR_KEYS.history(organizationId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from('radar_items')
        .select(RADAR_SELECT)
        .eq('organization_id', organizationId)
        .in('status', ['acknowledged', 'dismissed', 'resolved'])
        .order('updated_at', { ascending: false });

      if (error) throw error;
      return (data || []).map(mapRadarItem);
    },
    enabled: !!organizationId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useUpdateRadarItemStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, dto }: { id: string; dto: { status: string; customNotes?: string } }) => {
      const { data, error } = await supabase
        .from('radar_items')
        .update({ status: dto.status, custom_notes: dto.customNotes, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['radar_items'] });
    },
  });
}

// Mapeia row do banco para tipo de domínio enriquecido
function mapRadarItem(row: Record<string, unknown>) {
  const diag = row.library_diagnoses as Record<string, string> | null;
  const impact = row.library_impacts as Record<string, unknown> | null;
  const timeframe = row.library_timeframes as Record<string, unknown> | null;
  const complexity = row.library_complexities as Record<string, unknown> | null;
  const levers = (row.radar_item_suggested_levers as Array<{ lever_code: string }>) || [];

  return {
    ...row,
    diagnosisTerm: diag?.technical_term,
    diagnosisCause: diag?.cause,
    diagnosisEffect: diag?.effect,
    diagnosisWhy: diag?.why,
    impactValue: impact?.impact_value,
    impactType: impact?.impact_type,
    impactDirection: impact?.impact_direction,
    impactCategory: impact?.category,
    impactDescription: impact?.description,
    timeframeLabel: timeframe?.label,
    complexityLabel: complexity?.label,
    typicalEffortHours: complexity?.typical_effort_hours ?? 0,
    suggestedLeverCodes: levers.map(l => l.lever_code),
    aiConfidenceScore: row.ai_confidence_score,
  };
}
```

**Critério:** `RadarSideDrawer` exibe diagnóstico, impacto e alavancas sem erros.

---

### 1.5 Migrar `RadarSideDrawer` para `src/` [FE-C4, FE-C5]

Mover `apps/web/src/components/radar/RadarSideDrawer.tsx` para `src/components/radar/RadarSideDrawer.tsx`, substituindo imports de `@superrelatorios/ui` por `@/components/ui/`:

```typescript
// ANTES
import { Sheet, SheetContent, ... } from "@superrelatorios/ui";
import { SeverityBadge, TypeBadge, DomainBadge } from "@superrelatorios/ui";

// DEPOIS
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
// SeverityBadge, TypeBadge, DomainBadge → criar em src/components/radar/badges.tsx
```

Criar `src/components/radar/badges.tsx` com os badges de severidade, tipo e domínio.

**Critério:** `RadarSideDrawer` importado de `src/components/radar/` sem dependência de `@superrelatorios/ui`.

---

**Critério de conclusão da Fase 1:**
- [ ] Migration executada em staging sem erros
- [ ] `library_kpis` é a única tabela de KPIs consultada
- [ ] `user_metrics` é a única tabela de valores de KPI consultada
- [ ] `risk_score` é GENERATED ALWAYS AS
- [ ] `useRadarItems` funciona com JOINs para `library_diagnoses` e `library_impacts`
- [ ] `RadarSideDrawer` em `src/components/radar/` sem dependência de `@superrelatorios/ui`


---

## FASE 2 — Qualidade do Pipeline de Dados
**Prazo:** 1-2 semanas | **Prioridade:** 🟡 Alta

Tornar o pipeline atual confiável antes de expandi-lo.

### 2.1 Expandir `fileParserService` com suporte a PDF [PP-C1]

**Arquivo:** `src/services/fileParserService.ts`

```typescript
import * as pdfjsLib from 'pdfjs-dist';

export const parseFile = (file: File): Promise<ParsedFileData> => {
  return new Promise((resolve, reject) => {
    // Validação de tamanho (50MB)
    if (file.size > 50 * 1024 * 1024) {
      return reject(new Error('Arquivo muito grande. Máximo: 50MB'));
    }

    const extension = file.name.split('.').pop()?.toLowerCase();
    const SUPPORTED = ['csv', 'xlsx', 'xls', 'pdf', 'txt'];

    if (!SUPPORTED.includes(extension || '')) {
      return reject(new Error(`Formato não suportado. Use: ${SUPPORTED.join(', ')}`));
    }

    if (extension === 'pdf') {
      parsePDF(file).then(resolve).catch(reject);
    } else if (extension === 'txt') {
      parseTXT(file).then(resolve).catch(reject);
    } else if (extension === 'csv') {
      parseCSV(file).then(resolve).catch(reject);
    } else {
      parseXLSX(file).then(resolve).catch(reject);
    }
  });
};

async function parsePDF(file: File): Promise<ParsedFileData> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    pages.push(content.items.map((item: { str: string }) => item.str).join(' '));
  }

  const fullText = pages.join('\n');
  return {
    headers: ['page', 'content'],
    rows: pages.map((text, i) => ({ page: i + 1, content: text })),
    rowCount: pages.length,
    fileType: 'pdf',
    rawText: fullText,
  };
}
```

Atualizar `ParsedFileData` para incluir `rawText?: string` para PDFs e TXTs.

---

### 2.2 Injetar Blueprint e KPI Library nos prompts [PP-W12, PP-W13]

**Arquivo:** `src/services/aiService.ts`

```typescript
interface PromptContext {
  blueprint?: {
    industry_sector?: string;
    business_model?: string;
    company_stage?: string;
    employee_count_range?: string;
    known_challenges?: string[];
  };
  kpiLibrary?: Array<{ code: string; title: string; unit: string }>;
}

function buildAnalysisPrompt(data: unknown[], context: string, ctx?: PromptContext): string {
  const blueprintSection = ctx?.blueprint
    ? `\nCONTEXTO DA EMPRESA:\n${JSON.stringify(ctx.blueprint)}`
    : '';

  const kpiSection = ctx?.kpiLibrary?.length
    ? `\nKPIs RELEVANTES PARA MAPEAR:\n${ctx.kpiLibrary.slice(0, 30).map(k => `${k.code}: ${k.title} (${k.unit})`).join('\n')}`
    : '';

  return `
Aja como especialista em analytics estratégico para PMEs.
CONTEXTO DO NEGÓCIO: ${context}${blueprintSection}${kpiSection}
DADOS: ${JSON.stringify(data.slice(0, 100))}

Responda APENAS com JSON puro:
{
  "summary": "Resumo executivo em 2-3 frases",
  "blocks": [{ "type": "KPI_GRID", "title": "...", "description": "...", "data": {}, "settings": {} }]
}`.trim();
}
```

Atualizar `analyzeDataWithAI` e `generateAIDiagnostic` para aceitar `PromptContext`.

---

### 2.3 Expandir `KPI_NAME_MAPPINGS` [PP-W5]

**Arquivo:** `src/services/kpiExtractionService.ts`

Adicionar mapeamentos para todos os KPIs da `library_kpis`. Carregar dinamicamente do banco:

```typescript
let KPI_NAME_MAPPINGS: Record<string, string> = {
  // Mapeamentos base (fallback offline)
  'margem líquida': 'NET_PROFIT_MARGIN',
  'margem bruta': 'GROSS_MARGIN',
  // ... (manter os 20 existentes)
};

// Carregar mapeamentos adicionais do banco
export async function loadKPIMappingsFromDB(): Promise<void> {
  const { data } = await supabase
    .from('library_kpis')
    .select('code, title')
    .eq('is_active', true);

  if (data) {
    data.forEach(kpi => {
      const titleLower = kpi.title.toLowerCase();
      KPI_NAME_MAPPINGS[titleLower] = kpi.code;
      // Adicionar variações comuns
      if (titleLower.includes('margem')) KPI_NAME_MAPPINGS[titleLower.replace('margem ', '')] = kpi.code;
    });
  }
}
```

---

### 2.4 Extrair período real dos dados [PP-W18, PP-W19]

**Arquivo:** `src/services/reportPersistenceService.ts`

```typescript
function extractPeriodFromData(rows: Record<string, unknown>[]): {
  reference_period: string;
  period_start: string;
  period_end: string;
} {
  // Procurar colunas de data
  const dateColumns = Object.keys(rows[0] || {}).filter(col =>
    /data|date|mês|mes|month|período|period/i.test(col)
  );

  if (dateColumns.length > 0) {
    const dates = rows
      .map(row => row[dateColumns[0]])
      .filter(Boolean)
      .map(d => new Date(String(d)))
      .filter(d => !isNaN(d.getTime()))
      .sort((a, b) => a.getTime() - b.getTime());

    if (dates.length > 0) {
      const first = dates[0];
      const last = dates[dates.length - 1];
      const period = `${first.getFullYear()}-${String(first.getMonth() + 1).padStart(2, '0')}`;
      return {
        reference_period: period,
        period_start: first.toISOString().split('T')[0],
        period_end: last.toISOString().split('T')[0],
      };
    }
  }

  // Fallback: mês atual
  const now = new Date();
  const period = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  return {
    reference_period: period,
    period_start: `${period}-01`,
    period_end: new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0],
  };
}
```

---

### 2.5 Conectar `strategyLibraryService` ao banco [PP-W21, PP-W22]

**Arquivo:** `src/services/strategyLibraryService.ts`

```typescript
async getRecommendations(kpis: ExtractedKPI[], blueprint?: BlueprintContext): Promise<StrategyRecommendation[]> {
  // Buscar templates do banco em vez de hardcoded
  const { data: challenges } = await supabase
    .from('library_challenges')
    .select(`
      *,
      library_challenge_lever_mapping(
        lever_id, priority, is_primary,
        library_levers(code, title, category, impact_level,
          library_actions(code, title, description, steps, priority_score, quick_win)
        )
      )
    `)
    .eq('is_active', true);

  if (!challenges) return [];

  return challenges
    .map(challenge => this.evaluateChallenge(challenge, kpis, blueprint))
    .filter(r => r.confidence >= 0.5)
    .sort((a, b) => b.confidence - a.confidence);
}
```

---

### 2.6 Adicionar feedback de progresso no pipeline [PP-W — UX]

**Arquivo:** `src/hooks/useReportBuilder.ts` (novo ou existente)

```typescript
type PipelineStep = 'idle' | 'parsing' | 'analyzing' | 'extracting' | 'saving' | 'done' | 'error';

export function useReportPipeline() {
  const [step, setStep] = useState<PipelineStep>('idle');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const processFile = async (file: File, context: string) => {
    try {
      setStep('parsing'); setProgress(10);
      const parsed = await parseFile(file);

      setStep('analyzing'); setProgress(30);
      const aiResult = await analyzeDataWithAI(parsed.rows, context);

      setStep('extracting'); setProgress(60);
      const kpis = extractKPIsFromAIResult(aiResult);
      const diagnostic = await generateAIDiagnostic(parsed.rows, context);

      setStep('saving'); setProgress(80);
      await saveReportWithMetrics(/* ... */);

      setStep('done'); setProgress(100);
    } catch (err) {
      setStep('error');
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    }
  };

  return { step, progress, error, processFile };
}
```

---

**Critério de conclusão da Fase 2:**
- [ ] Upload de PDF extrai texto e KPIs
- [ ] Prompts do Gemini incluem Blueprint e KPI library
- [ ] `KPI_NAME_MAPPINGS` cobre >80% dos KPIs da `library_kpis`
- [ ] `reference_period` extraído dos dados reais quando disponível
- [ ] `strategyLibraryService` busca templates do banco
- [ ] Usuário vê progresso durante processamento


---

## FASE 3 — Design System e Frontend
**Prazo:** 1-2 semanas | **Prioridade:** 🟡 Média

Consolidar o design system e resolver inconsistências de frontend.

### 3.1 Implementar classes CSS do DSP [FE-W1]

**Arquivo:** `src/index.css`

Substituir as ~30 classes vazias por implementações reais:

```css
@layer components {
  .card-hover {
    @apply transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer;
  }

  .card-interactive {
    @apply card-hover active:scale-[0.98] active:shadow-sm;
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
    @apply text-3xl font-bold tracking-tight text-foreground;
  }

  .typography-h2 {
    @apply text-2xl font-semibold tracking-tight text-foreground;
  }

  .typography-label {
    @apply text-xs font-semibold uppercase tracking-wider text-muted-foreground;
  }

  .typography-metric {
    @apply font-mono font-bold tabular-nums;
  }

  .status-positive { @apply text-green-600 dark:text-green-400; }
  .status-negative { @apply text-red-600 dark:text-red-400; }
  .status-neutral  { @apply text-blue-600 dark:text-blue-400; }
  .status-pending  { @apply text-amber-600 dark:text-amber-400; }
}
```

---

### 3.2 Atualizar `kpi-card.tsx` para tokens DSP [FE-W7]

```tsx
// ANTES (hardcoded)
"border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20"

// DEPOIS (tokens semânticos)
const variantClasses = {
  success: "border-[hsl(var(--status-positive)/0.3)] bg-[hsl(var(--status-positive)/0.05)]",
  warning: "border-[hsl(var(--status-pending)/0.3)] bg-[hsl(var(--status-pending)/0.05)]",
  info:    "border-[hsl(var(--status-neutral)/0.3)] bg-[hsl(var(--status-neutral)/0.05)]",
  default: "",
};
```

---

### 3.3 Consolidar rotas duplicadas [FE-W2]

**Arquivo:** `src/App.tsx`

```tsx
// REMOVER rotas duplicadas
// <Route path="novo-relatorio" element={<ReportBuilder />} />  ← remover
// <Route path="new-report" element={<ReportBuilder />} />      ← remover
// <Route path="painel-decisao" element={<DecisionPanel />} />  ← remover
// <Route path="panel-decision" element={<DecisionPanel />} />  ← remover

// MANTER apenas a rota canônica em inglês
<Route path="reports/new" element={<ReportBuilder />} />
<Route path="decision-panel" element={<DecisionPanel />} />
```

Adicionar redirects para URLs antigas se necessário para SEO.

---

### 3.4 Renomear arquivos com sufixos [FE-W6]

Usar `smartRelocate` para renomear preservando imports:

- `MetricsDashboard-Otimizado.tsx` → `MetricsDashboard.tsx`
- `ConsolidatedDashboard-Atualizado.tsx` → `ConsolidatedDashboard.tsx`
- `StrategicDashboard-Atualizado.tsx` → `StrategicDashboard.tsx`

Atualizar imports em `App.tsx` e qualquer outro arquivo que referencie os nomes antigos.

---

### 3.5 Padronizar abordagem de estilo [FE-W8]

Migrar `ActionButton` e `DashboardCard` de CSS Modules para Tailwind:

```tsx
// ANTES (CSS Module)
import styles from './Button.module.css';
<button className={styles.actionButton}>

// DEPOIS (Tailwind)
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
```

---

### 3.6 Adicionar hierarquia tipográfica global [FE-W10]

**Arquivo:** `src/index.css`

```css
@layer base {
  h1 { @apply text-3xl font-bold tracking-tight; }
  h2 { @apply text-2xl font-semibold tracking-tight; }
  h3 { @apply text-xl font-semibold; }
  h4 { @apply text-lg font-medium; }
  h5 { @apply text-base font-medium; }
  h6 { @apply text-sm font-medium; }
}
```

---

### 3.7 Consolidar projetos paralelos [FE-C5]

1. Verificar se `apps/web/src/` tem algum código único não presente em `src/`
2. Mover qualquer código útil para `src/`
3. Remover `apps/web/src/` (manter apenas `apps/web/dist/` para build)
4. Avaliar `superrelatorios-web/` — se for legado, remover ou arquivar

---

### 3.8 Implementar Progressive Disclosure e Modos de Operação [Req 42]

**Arquivo:** `src/hooks/useUIPreferences.ts` (novo)

```typescript
export function useUIPreferences() {
  const { organizationId } = useCurrentOrganization();
  return useQuery({
    queryKey: ['ui_preferences', organizationId],
    queryFn: async () => {
      const { data } = await supabase
        .from('organization_ui_preferences')
        .select('*')
        .eq('organization_id', organizationId)
        .single();
      return data;
    },
    staleTime: 10 * 60 * 1000,
  });
}

export function useIsModuleVisible(moduleKey: string): boolean {
  const { data: prefs } = useUIPreferences();
  if (!prefs) return false;
  const mode = prefs.modo_operacao;
  if (mode === 'enterprise') return true;
  if (mode === 'completo') return COMPLETO_MODULES.includes(moduleKey);
  return SIMPLES_MODULES.includes(moduleKey);
}

const SIMPLES_MODULES = ['dashboard', 'radar', 'action-plan', 'reports', 'settings'];
const COMPLETO_MODULES = [...SIMPLES_MODULES, 'risks', 'analytics', 'decision-panel', 'consolidated', 'forecasts', 'swot'];
```

**Arquivo:** `src/components/layout/AppSidebar.tsx` — filtrar itens de navegação por `useIsModuleVisible`:

```typescript
const navItems = ALL_NAV_ITEMS.filter(item => useIsModuleVisible(item.key));
// Máximo 7 itens visíveis — excedente em seção colapsável
```

**Arquivo:** `src/components/onboarding/ModeUpgradePrompt.tsx` — sugerir upgrade após 30 dias:

```typescript
// Exibir quando: modo = 'simples' E created_at > 30 dias atrás E tem dados reais
```

**Critério:** Usuário em `modo_operacao = 'simples'` vê apenas 5 itens na sidebar. Módulos adicionais aparecem apenas quando ativados.

---

**Critério de conclusão da Fase 3:**
- [ ] Todas as classes CSS do DSP têm implementação
- [ ] `kpi-card.tsx` usa tokens semânticos
- [ ] Zero rotas duplicadas no `App.tsx`
- [ ] Arquivos renomeados sem sufixos
- [ ] `apps/web/src/` consolidado em `src/`
- [ ] `npm run build` sem warnings de imports
- [ ] `useUIPreferences` hook implementado
- [ ] Sidebar filtra itens por `modo_operacao`
- [ ] Usuário em modo `simples` vê apenas 5 itens na sidebar
- [ ] `ModeUpgradePrompt` exibido após 30 dias em modo simples

---

## FASE 4 — Expansão das Bibliotecas
**Prazo:** 2-3 semanas | **Prioridade:** 🟢 Média

Expandir as bibliotecas de KPIs, diagnósticos e templates para cobrir o máximo de segmentos de PMEs.

### 4.1 Expandir `library_kpis` para 100+ KPIs

Criar migration `supabase/migrations/EXPAND_LIBRARY_KPIS.sql` com todos os KPIs documentados em `LIBRARY_STRATEGY.md`:

```sql
INSERT INTO library_kpis (code, title, description, formula, unit, domain, trend_direction, tier, is_core, benchmark_excellent, benchmark_good, benchmark_average, benchmark_warning, benchmark_critical)
VALUES
-- CORE (18 KPIs universais)
('NET_PROFIT_MARGIN', 'Margem Líquida', 'Lucro líquido como % da receita', '(Lucro Líquido / Receita) * 100', '%', 'finance', 'higher_is_better', 'core', true, 25, 15, 10, 5, 0),
('GROSS_MARGIN', 'Margem Bruta', 'Receita menos CMV como % da receita', '(Receita - CMV) / Receita * 100', '%', 'finance', 'higher_is_better', 'core', true, 60, 45, 35, 25, 15),
('BURN_RATE', 'Queima de Caixa', 'Saídas operacionais mensais', 'Despesas Operacionais Mensais', 'R$', 'finance', 'lower_is_better', 'core', true, null, null, null, null, null),
('RUNWAY_MONTHS', 'Pista de Decolagem', 'Meses de sobrevivência sem nova receita', 'Caixa / Burn Rate', 'meses', 'finance', 'higher_is_better', 'core', true, 24, 12, 6, 3, 1),
-- ... (continuar com todos os KPIs de LIBRARY_STRATEGY.md)
ON CONFLICT (code) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  tier = EXCLUDED.tier,
  is_core = EXCLUDED.is_core,
  benchmark_excellent = EXCLUDED.benchmark_excellent,
  benchmark_good = EXCLUDED.benchmark_good,
  benchmark_average = EXCLUDED.benchmark_average,
  benchmark_warning = EXCLUDED.benchmark_warning,
  benchmark_critical = EXCLUDED.benchmark_critical;
```

---

### 4.2 Popular `library_diagnoses` com diagnósticos estruturados

```sql
INSERT INTO library_diagnoses (code, technical_term, cause, effect, why, challenge_code, domain, severity_default, symptom_codes, suggested_lever_codes)
VALUES
('DIAG_CASH_CRUNCH_001', 'Crise de Liquidez Operacional',
 'Burn rate superior à geração de caixa operacional',
 'Risco de insolvência em menos de 6 meses',
 'Crescimento acelerado sem proporcional aumento de receita ou captação',
 'CASH_FLOW_CRUNCH', 'finance', 'critical',
 ARRAY['LOW_RUNWAY', 'HIGH_BURN_RATE', 'NEGATIVE_FCO'],
 ARRAY['LEV_COST_REDUCTION', 'LEV_RECEIVABLES_ACCELERATION', 'LEV_REVENUE_BOOST']),
-- ... demais diagnósticos
ON CONFLICT (code) DO NOTHING;
```

---

### 4.3 Popular `industry_templates` para 10+ setores

```sql
INSERT INTO industry_templates (code, name, sector, subsector, target_size, default_kpis, default_challenges, benchmark_margem_liquida, benchmark_prazo_recebimento)
VALUES
('VAREJO_GERAL', 'Varejo Geral', 'Varejo', 'Geral', 'todas',
 '["NET_PROFIT_MARGIN","GROSS_MARGIN","INVENTORY_TURNOVER","AVG_TICKET","SALES_CONVERSION","DAYS_TO_RECEIVE","DEAD_STOCK_RATIO"]'::jsonb,
 '["CASH_FLOW_CRUNCH","COMMODITY_TRAP","STOCK_STAGNATION"]'::jsonb,
 12.0, 30),
('SAAS_TECH', 'SaaS / Tecnologia', 'Tecnologia', 'SaaS', 'todas',
 '["NET_PROFIT_MARGIN","CHURN_RATE","LTV_CAC_RATIO","NET_REVENUE_RETENTION","BURN_RATE","RUNWAY_MONTHS","MRR_GROWTH"]'::jsonb,
 '["HIGH_CHURN","INEFFICIENT_SALES_MACHINE","CASH_FLOW_CRUNCH"]'::jsonb,
 20.0, 15),
-- ... demais setores
ON CONFLICT (code) DO NOTHING;
```

---

### 4.4 Implementar motor de relevância de KPIs

```sql
CREATE OR REPLACE FUNCTION get_relevant_kpis(
  p_organization_id UUID,
  p_available_kpi_codes TEXT[] DEFAULT ARRAY[]::TEXT[]
)
RETURNS TABLE(kpi_code TEXT, reason TEXT, priority INT) AS $$
BEGIN
  -- KPIs core: sempre ativos
  RETURN QUERY
  SELECT lk.code, 'core'::TEXT, 1
  FROM library_kpis lk
  WHERE lk.is_core = true AND lk.is_active = true;

  -- KPIs do industry_template da organização
  RETURN QUERY
  SELECT DISTINCT kpi_elem::TEXT, 'industry_template'::TEXT, 2
  FROM organization_industry_settings ois
  JOIN industry_templates it ON ois.industry_template_id = it.id,
  jsonb_array_elements_text(it.default_kpis) AS kpi_elem
  WHERE ois.organization_id = p_organization_id;

  -- KPIs com dados disponíveis
  RETURN QUERY
  SELECT DISTINCT um.kpi_code, 'data_available'::TEXT, 3
  FROM user_metrics um
  WHERE um.organization_id = p_organization_id
    AND um.kpi_code = ANY(p_available_kpi_codes);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

**Critério de conclusão da Fase 4:**
- [ ] `library_kpis` tem ≥100 KPIs com tiers e benchmarks
- [ ] `library_diagnoses` tem diagnósticos para todos os desafios principais
- [ ] `industry_templates` tem ≥10 setores
- [ ] `get_relevant_kpis()` funciona e é usada pelo dashboard

---

## FASE 5 — Novas Funcionalidades (Banco → UI)
**Prazo:** 3-4 semanas | **Prioridade:** 🟢 Média

Implementar interfaces para funcionalidades que já existem no banco mas não têm telas.

### 5.1 Hierarquia Organizacional

**Rotas:** `/:locale/app/settings/hierarchy`
**Hooks:** `useBusinessUnits`, `useDepartments`, `useTeams`, `useMemberships`
**Componentes:** `BusinessUnitsPage`, `DepartmentsPage`, `TeamsPage`, `MembershipsPage`

### 5.2 SWOT e Análise de Forças/Fraquezas

**Rotas:** `/:locale/app/strategy/swot`, `/:locale/app/strategy/forces`
**Hooks:** `useSwotAnalysis`, `useForcesWeaknesses`
**Componentes:** `SwotPage` (quadrante visual), `ForcesWeaknessesPage`
**IA:** Geração assistida via AI Proxy com KPIs e Blueprint como contexto

### 5.3 Previsões de Curto Prazo

**Rota:** `/:locale/app/forecasts`
**Hook:** `useShortTermForecasts`
**Componente:** `ForecastPage` com gráficos para 7/30/60/90 dias
**Métodos:** média móvel, tendência linear, sazonalidade, IA

### 5.4 Gestão de Fornecedores

**Rota:** `/:locale/app/suppliers`
**Hooks:** `useSupplierScorecards`, `useSupplierRiskAlerts`
**Componentes:** `SuppliersPage`, `SupplierScorecard`, `SupplierRiskAlerts`

### 5.5 Saúde e Ciclo de Vida de Clientes

**Rota:** `/:locale/app/clients`
**Hooks:** `useClientHealthScores`, `useClientLifecycle`
**Componentes:** `ClientHealthPage`, `ClientLifecycleBoard`

### 5.6 Gestão de Custos de RH

**Rota:** `/:locale/app/hr/costs`
**Hooks:** `useEmployeeCosts`, `usePayrollProjections`
**Componentes:** `EmployeeCostsPage`, `PayrollProjectionsPage`

---

**Critério de conclusão da Fase 5:**
- [ ] 6 novas telas implementadas e roteadas
- [ ] Cada tela tem hook com TanStack Query e staleTime configurado
- [ ] Geração assistida por IA funciona em SWOT e Forças/Fraquezas
- [ ] Alertas automáticos de fornecedor e cliente integrados ao Radar

---

## FASE 6 — Pipeline Server-Side e Knowledge Base
**Prazo:** 4-8 semanas | **Prioridade:** 🔵 Estratégica

Implementar o pipeline completo especificado: processamento server-side, múltiplos formatos, rastreabilidade total.

### 6.1 Edge Function `api/process-document.ts`

```typescript
// Estrutura da Edge Function
export default async function handler(req: Request): Promise<Response> {
  const { documentId } = await req.json();

  // 1. Buscar documento do Storage
  const doc = await getDocumentFromStorage(documentId);

  // 2. Extrair conteúdo via Unstructured API
  await updateStatus(documentId, 'extracting');
  const elements = await unstructuredClient.extractContent(doc.path, doc.file_type);

  // 3. Parser semântico via Gemini
  await updateStatus(documentId, 'parsing');
  const blueprint = await getBlueprint(doc.organization_id);
  const kpiLibrary = await getKPILibrary();
  const mappings = await semanticParser.mapToKPIs(elements, kpiLibrary, blueprint);

  // 4. Persistir KPIs extraídos
  await updateStatus(documentId, 'mapping');
  await kpiMapper.createKPIValues(mappings, documentId, doc.organization_id);
  await kpiMapper.createChunks(elements, mappings, doc.organization_id);

  // 5. Gerar relatório de extração
  const report = extractionReporter.buildReport(mappings, elements);
  await updateStatus(documentId, 'completed', report);

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
```

### 6.2 Tabelas do Document Pipeline

Migration `supabase/migrations/CREATE_DOCUMENT_PIPELINE.sql`:

```sql
-- Habilitar pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Conexões de fontes de dados
CREATE TABLE IF NOT EXISTS data_source_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id),
  provider TEXT NOT NULL CHECK (provider IN ('google_drive','onedrive','csv_upload','erp_api','crm_api')),
  display_name TEXT NOT NULL,
  credentials_encrypted TEXT,
  sync_config JSONB DEFAULT '{}'::jsonb,
  last_sync_at TIMESTAMPTZ,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','paused','error','revoked')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documentos processados
CREATE TABLE IF NOT EXISTS processed_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id),
  data_source_connection_id UUID REFERENCES data_source_connections(id),
  name TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size_bytes BIGINT,
  storage_path TEXT,
  source_type TEXT CHECK (source_type IN ('upload','google_drive','onedrive')),
  processing_status TEXT DEFAULT 'queued' CHECK (processing_status IN ('queued','extracting','parsing','mapping','completed','failed')),
  extraction_confidence DECIMAL(5,2),
  kpis_extracted_count INTEGER DEFAULT 0,
  error_message TEXT,
  extraction_report JSONB,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chunks extraídos com embeddings
CREATE TABLE IF NOT EXISTS document_extracted_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES processed_documents(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id),
  chunk_index INTEGER NOT NULL,
  content_type TEXT,
  raw_text TEXT,
  structured_data JSONB,
  kpi_codes_mapped TEXT[],
  chunk_confidence DECIMAL(5,2),
  embedding vector(1536),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índice HNSW para busca vetorial
CREATE INDEX IF NOT EXISTS idx_chunks_embedding
  ON document_extracted_chunks USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

-- RLS
ALTER TABLE data_source_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE processed_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_extracted_chunks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "org_isolation" ON data_source_connections
  USING (organization_id = (SELECT organization_id FROM profiles WHERE user_id = auth.uid()));
CREATE POLICY "org_isolation" ON processed_documents
  USING (organization_id = (SELECT organization_id FROM profiles WHERE user_id = auth.uid()));
CREATE POLICY "org_isolation" ON document_extracted_chunks
  USING (organization_id = (SELECT organization_id FROM profiles WHERE user_id = auth.uid()));
```

### 6.3 Knowledge Base e Snapshots

Migration `supabase/migrations/CREATE_KNOWLEDGE_BASE.sql`:

```sql
CREATE TABLE IF NOT EXISTS knowledge_snapshots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id),
  period_key TEXT NOT NULL,
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  snapshot_type TEXT DEFAULT 'periodic' CHECK (snapshot_type IN ('periodic','manual','triggered')),
  kpi_summary JSONB,
  challenges_detected JSONB,
  radar_items_active JSONB,
  overall_health TEXT,
  ai_narrative TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, period_key)
);

-- Trigger de imutabilidade (append-only)
CREATE OR REPLACE FUNCTION prevent_snapshot_mutation()
RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'knowledge_snapshots são imutáveis — use apenas INSERT';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_snapshot_immutability
  BEFORE UPDATE OR DELETE ON knowledge_snapshots
  FOR EACH ROW EXECUTE FUNCTION prevent_snapshot_mutation();

-- Embeddings para busca semântica
CREATE TABLE IF NOT EXISTS knowledge_embeddings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id),
  snapshot_id UUID REFERENCES knowledge_snapshots(id),
  content_type TEXT,
  content_text TEXT,
  embedding vector(1536),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_knowledge_embeddings_vector
  ON knowledge_embeddings USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);
```

### 6.4 Company Blueprint — Campos Estruturados

Migration `supabase/migrations/EXPAND_BLUEPRINT.sql`:

```sql
ALTER TABLE organization_blueprint
  ADD COLUMN IF NOT EXISTS legal_name TEXT,
  ADD COLUMN IF NOT EXISTS trade_name TEXT,
  ADD COLUMN IF NOT EXISTS cnpj_encrypted TEXT,
  ADD COLUMN IF NOT EXISTS founding_year INTEGER,
  ADD COLUMN IF NOT EXISTS company_stage TEXT CHECK (company_stage IN ('pre_revenue','early_stage','growth','scale_up','mature','turnaround')),
  ADD COLUMN IF NOT EXISTS business_model TEXT CHECK (business_model IN ('b2b','b2c','b2b2c','marketplace','saas','services','product','hybrid')),
  ADD COLUMN IF NOT EXISTS industry_sector TEXT,
  ADD COLUMN IF NOT EXISTS employee_count_range TEXT CHECK (employee_count_range IN ('1-10','11-50','51-200','201-500','500+')),
  ADD COLUMN IF NOT EXISTS annual_revenue_range TEXT,
  ADD COLUMN IF NOT EXISTS value_proposition TEXT,
  ADD COLUMN IF NOT EXISTS mission TEXT,
  ADD COLUMN IF NOT EXISTS vision TEXT,
  ADD COLUMN IF NOT EXISTS core_values TEXT[],
  ADD COLUMN IF NOT EXISTS known_challenges TEXT[],
  ADD COLUMN IF NOT EXISTS strategic_objectives JSONB,
  ADD COLUMN IF NOT EXISTS funding_stage TEXT,
  ADD COLUMN IF NOT EXISTS completeness_score DECIMAL(5,2) DEFAULT 0;

-- Trigger para calcular completeness_score
CREATE OR REPLACE FUNCTION calculate_blueprint_completeness()
RETURNS TRIGGER AS $$
DECLARE
  filled_count INTEGER := 0;
  total_fields INTEGER := 15;
BEGIN
  IF NEW.legal_name IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.industry_sector IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.company_stage IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.business_model IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.employee_count_range IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.value_proposition IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.mission IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.known_challenges IS NOT NULL AND array_length(NEW.known_challenges, 1) > 0 THEN filled_count := filled_count + 1; END IF;
  IF NEW.strategic_objectives IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  IF NEW.funding_stage IS NOT NULL THEN filled_count := filled_count + 1; END IF;
  NEW.completeness_score := ROUND((filled_count::DECIMAL / total_fields) * 100, 2);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blueprint_completeness_trigger
  BEFORE INSERT OR UPDATE ON organization_blueprint
  FOR EACH ROW EXECUTE FUNCTION calculate_blueprint_completeness();
```

---

**Critério de conclusão da Fase 6:**
- [ ] Edge Function `process-document` processa PDF e extrai KPIs
- [ ] `processed_documents` e `document_extracted_chunks` com dados reais
- [ ] `knowledge_snapshots` gerado mensalmente via pg_cron
- [ ] Trigger de imutabilidade rejeita UPDATE/DELETE em snapshots
- [ ] `organization_blueprint` tem campos estruturados com completeness_score
- [ ] Busca vetorial retorna chunks relevantes para queries em linguagem natural


---

## Cronograma Consolidado

```
Semana 1-2:   FASE 0 + FASE 1 (Hotfixes + Banco)
Semana 3-4:   FASE 2 (Pipeline de Dados)
Semana 5-6:   FASE 3 (Design System + Frontend)
Semana 7-9:   FASE 4 (Expansão de Bibliotecas)
Semana 10-13: FASE 5 (Novas Funcionalidades)
Semana 14-21: FASE 6 (Pipeline Server-Side + Knowledge Base)
```

---

## Matriz de Risco

| Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|
| Migration de limpeza corrompe dados | Média | Alto | Backup completo antes; ON CONFLICT DO NOTHING; rollback plan |
| Edge Function Unstructured com custo alto | Média | Médio | Cache de chunks; reprocessamento seletivo |
| Gemini retorna JSON inválido | Alta | Médio | Validação de schema com Zod; fallback para análise básica |
| pgvector lento com volume alto | Baixa | Médio | Índice HNSW; limite de 10 resultados por query |
| OAuth Google/OneDrive expirado | Alta | Baixo | Refresh token automático; alerta de reconexão |
| Bundle size acima de 600KB | Média | Baixo | Lazy load de xlsx e pdf-lib; análise com `vite-bundle-visualizer` |

---

## Dependências entre Fases

```
FASE 0 (Hotfixes)
    ↓ obrigatório
FASE 1 (Banco)
    ↓ obrigatório
FASE 2 (Pipeline) ←→ FASE 3 (Frontend) ← podem ser paralelas
    ↓
FASE 4 (Bibliotecas)
    ↓
FASE 5 (Novas Features) ←→ FASE 6 (Pipeline Server-Side) ← podem ser paralelas
```

---

## Métricas de Sucesso

| Fase | Métrica | Meta |
|---|---|---|
| Fase 0 | Erros críticos em produção | 0 |
| Fase 1 | Tabelas legadas removidas | 7 |
| Fase 1 | Score banco de dados | ≥ 85/100 |
| Fase 2 | Formatos de arquivo suportados | ≥ 5 (CSV, XLSX, PDF, TXT, DOCX) |
| Fase 2 | Cobertura de KPI_NAME_MAPPINGS | ≥ 80% dos KPIs da library_kpis |
| Fase 3 | Score frontend | ≥ 88/100 |
| Fase 3 | Rotas duplicadas | 0 |
| Fase 4 | KPIs na biblioteca | ≥ 100 |
| Fase 4 | Setores com industry_template | ≥ 10 |
| Fase 5 | Novas telas implementadas | 6/6 |
| Fase 6 | Taxa de sucesso de processamento de documentos | ≥ 95% |
| Fase 6 | Score pipeline | ≥ 85/100 |

---

## Checklist de Qualidade por Fase

Antes de marcar qualquer fase como concluída:

- [ ] `npm run build` sem erros TypeScript
- [ ] `vitest --run` com cobertura > 80% nos serviços modificados
- [ ] Zero erros de lint (`npm run lint`)
- [ ] Migrations testadas em staging antes de produção
- [ ] Nenhuma query usando tabelas legadas
- [ ] Nenhum `console.error` não tratado em produção
- [ ] Documentação atualizada (design.md, requirements.md)

---

## Progressive Disclosure — Redução de Carga Cognitiva

Este plano implementa 23 tipos de objetos de UI. Para não sobrecarregar o usuário de PME, a complexidade é revelada em 4 camadas progressivas. **O usuário aprende 4 conceitos, não 23 objetos.**

```
GPS Estratégico
├── PAINEL    → KPICard[]      "Onde estou agora"
├── ALERTAS   → RadarCard[]    "O que está errado"
├── AÇÕES     → ActionCard[]   "O que fazer"
└── HISTÓRICO → SnapshotCard[] "De onde vim"
```

| Camada | Conteúdo | Quando aparece |
|---|---|---|
| 1 — Núcleo | `KPICard`, `RadarCard`, `ActionCard` | Sempre, Dia 1 |
| 2 — Contexto | Drawer com diagnóstico, impacto, alavancas | Ao clicar |
| 3 — Módulos | Riscos, Fornecedores, Clientes, RH, Previsões, SWOT | Por setor/maturidade |
| 4 — Config | Blueprint, Hierarquia, Data Sources | Setup inicial |

**Controlado por:** `organization_ui_preferences.modo_operacao` (`simples` / `completo` / `enterprise`)

**Impacto no plano:** A Fase 3 (Design System) deve implementar o sistema de modos de operação e a lógica de ativação de módulos por setor. A Fase 5 (Novas Funcionalidades) deve respeitar as regras de ativação — nenhum módulo novo aparece por padrão, apenas quando o contexto da empresa justifica.

**Documentação completa:** `knowledge/SPEC_progressive_disclosure.md` e `knowledge/SPEC_ui_entity_model.md`

---

## Próximos Passos Imediatos

1. ✅ Revisar este plano com o time
2. ⏳ **Executar Fase 0** — 5 correções em 1-2 dias
3. ⏳ Criar branch `fix/phase-0-critical-fixes`
4. ⏳ Executar migration de limpeza em staging (Fase 1)
5. ⏳ Validar que nenhuma query usa tabelas legadas
6. ⏳ Iniciar Fase 2 após Fase 1 validada

---

**Plano criado por:** Kiro AI Assistant
**Baseado em:** AUDIT_REPORT.md + FRONTEND_AUDIT.md + PIPELINE_AUDIT.md + schema real Supabase
**Revisão recomendada:** Após execução de cada fase

---

## FASE 3.8 — Progressive Disclosure e Modos de Operação
**Prazo:** incluído na Fase 3 | **Prioridade:** 🟡 Média

Implementar o sistema de revelação progressiva de complexidade para reduzir carga cognitiva do usuário de PME.

### 3.8.1 Implementar lógica de modo de operação

**Arquivo:** `src/hooks/useUIPreferences.ts` (novo)

```typescript
export function useUIPreferences() {
  const { organizationId } = useCurrentOrganization();

  return useQuery({
    queryKey: ['ui_preferences', organizationId],
    queryFn: async () => {
      const { data } = await supabase
        .from('organization_ui_preferences')
        .select('*')
        .eq('organization_id', organizationId)
        .single();
      return data;
    },
    staleTime: 15 * 60 * 1000, // 15 min — muda raramente
  });
}

export function useIsModuleVisible(moduleKey: string): boolean {
  const { data: prefs } = useUIPreferences();
  if (!prefs) return false;

  const mode = prefs.modo_operacao;
  if (mode === 'enterprise') return true;
  if (mode === 'completo') return !ENTERPRISE_ONLY_MODULES.includes(moduleKey);
  return SIMPLE_MODE_MODULES.includes(moduleKey);
}

const SIMPLE_MODE_MODULES = ['dashboard', 'radar', 'action-plan', 'reports', 'settings'];
const ENTERPRISE_ONLY_MODULES = ['hierarchy', 'audit-logs', 'advanced-analytics'];
```

---

### 3.8.2 Sidebar dinâmica com máximo 7 itens

**Arquivo:** `src/components/layout/AppSidebar.tsx`

```typescript
const ALL_NAV_ITEMS = [
  { key: 'dashboard',    label: 'Dashboard',       icon: LayoutDashboard, layer: 1 },
  { key: 'radar',        label: 'Radar de Alertas', icon: Radar,           layer: 1 },
  { key: 'action-plan',  label: 'Plano de Ação',   icon: CheckSquare,     layer: 1 },
  { key: 'reports',      label: 'Relatórios',       icon: FileText,        layer: 1 },
  { key: 'risks',        label: 'Riscos',           icon: AlertTriangle,   layer: 3, show: 'show_risk_matrix_full' },
  { key: 'forecasts',    label: 'Previsões',        icon: TrendingUp,      layer: 3, show: 'show_forecast_curto' },
  { key: 'swot',         label: 'Estratégia',       icon: Target,          layer: 3, show: 'show_swot_full' },
  { key: 'suppliers',    label: 'Fornecedores',     icon: Truck,           layer: 3, show: 'show_alavancas_complexas' },
  { key: 'clients',      label: 'Clientes',         icon: Users,           layer: 3 },
  { key: 'hr',           label: 'RH / Custos',      icon: UserCheck,       layer: 3 },
  { key: 'knowledge',    label: 'Histórico',        icon: BookOpen,        layer: 3 },
  { key: 'data-sources', label: 'Fontes de Dados',  icon: Database,        layer: 4 },
  { key: 'blueprint',    label: 'Blueprint',        icon: Building,        layer: 4 },
  { key: 'hierarchy',    label: 'Organização',      icon: GitBranch,       layer: 4 },
  { key: 'settings',     label: 'Configurações',    icon: Settings,        layer: 1 },
];

// Filtrar por visibilidade e limitar a 7 itens na sidebar principal
const visibleItems = ALL_NAV_ITEMS.filter(item => isModuleVisible(item.key));
const primaryItems = visibleItems.slice(0, 7);
const secondaryItems = visibleItems.slice(7); // agrupados em "Mais"
```

---

### 3.8.3 Ativação automática de módulos no onboarding

**Arquivo:** `src/services/onboardingService.ts` (novo)

```typescript
export async function applyIndustryDefaults(
  organizationId: string,
  industrySector: string,
  employeeRange: string
): Promise<void> {
  const updates: Partial<OrganizationUIPreferences> = {
    modo_operacao: 'simples', // padrão inicial
    show_risk_matrix_full: true,
    show_alavancas_simples: true,
  };

  // Ativar módulos por setor
  const supplyChainSectors = ['varejo', 'industria', 'alimentacao', 'construcao', 'agronegocio'];
  if (supplyChainSectors.includes(industrySector.toLowerCase())) {
    updates.show_alavancas_complexas = true; // ativa módulo Fornecedores
  }

  // Ativar RH por tamanho
  const largerCompanies = ['11-50', '51-200', '201-500', '500+'];
  if (largerCompanies.includes(employeeRange)) {
    updates.show_analises_estatisticas = true; // ativa módulo RH
  }

  await supabase
    .from('organization_ui_preferences')
    .upsert({ organization_id: organizationId, ...updates });
}
```

---

### 3.8.4 Estado vazio com CTA contextual

**Arquivo:** `src/components/ui/empty-state.tsx` (atualizar)

Garantir que cada módulo tem estado vazio com CTA relevante:

```typescript
const EMPTY_STATE_CONFIG: Record<string, { title: string; description: string; cta: string; ctaHref: string }> = {
  kpis:        { title: 'Nenhum indicador ainda', description: 'Adicione seus primeiros KPIs para ver a saúde do negócio', cta: 'Adicionar KPI', ctaHref: '/app/metrics/config' },
  radar:       { title: 'Radar limpo', description: 'Nenhum alerta detectado. Adicione KPIs para ativar o monitoramento', cta: 'Configurar KPIs', ctaHref: '/app/metrics/config' },
  actions:     { title: 'Plano de ação vazio', description: 'Adicione itens do Radar ao plano de ação', cta: 'Ver Radar', ctaHref: '/app/radar' },
  reports:     { title: 'Nenhum relatório', description: 'Crie seu primeiro relatório ou importe dados', cta: 'Criar Relatório', ctaHref: '/app/reports/new' },
  suppliers:   { title: 'Nenhum fornecedor', description: 'Cadastre fornecedores para monitorar performance', cta: 'Adicionar Fornecedor', ctaHref: '/app/suppliers/new' },
  forecasts:   { title: 'Dados insuficientes', description: 'Adicione pelo menos 3 meses de KPIs para gerar previsões', cta: 'Importar Dados', ctaHref: '/app/data-sources' },
};
```

---

### 3.8.5 Upgrade automático para modo completo

**Arquivo:** `src/hooks/useModeUpgradeSuggestion.ts` (novo)

```typescript
export function useModeUpgradeSuggestion() {
  const { data: prefs } = useUIPreferences();
  const { organizationId } = useCurrentOrganization();

  return useQuery({
    queryKey: ['mode_upgrade', organizationId],
    queryFn: async () => {
      if (prefs?.modo_operacao !== 'simples') return null;

      // Verificar se tem 30+ dias de dados
      const { count } = await supabase
        .from('user_metrics')
        .select('*', { count: 'exact', head: true })
        .eq('organization_id', organizationId)
        .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());

      if ((count || 0) >= 10) {
        return {
          shouldSuggest: true,
          message: 'Você tem 30 dias de dados. Desbloqueie análises avançadas?',
          newModules: ['Riscos', 'Previsões', 'Benchmarks avançados'],
        };
      }
      return null;
    },
    staleTime: 24 * 60 * 60 * 1000, // verificar 1x por dia
  });
}
```

---

**Critério de conclusão da Fase 3.8:**
- [ ] Sidebar exibe no máximo 7 itens no modo simples
- [ ] Módulos setoriais ativados automaticamente no onboarding
- [ ] Nenhum card vazio sem CTA contextual
- [ ] Sugestão de upgrade aparece após 30 dias com dados
- [ ] `linguagem_preferencia = 'simples'` substitui termos técnicos via `ui_translation_glossary`
- [ ] Requisito 42 validado com teste de usabilidade (5 usuários PME)

---

## Referências Adicionadas

- `SPEC_progressive_disclosure.md` — modelo completo de 4 camadas
- `SPEC_ui_entity_model.md` — classificação de objetos vs. atributos
- Requisito 42 adicionado em `requirements.md`
- Seção Progressive Disclosure adicionada em `design.md` (Arquitetura do Frontend)
