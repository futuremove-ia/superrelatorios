# AI Prompts & Templates — SuperRelatórios

## Documento Completo de Engenharia de Prompts

**Data:** 2026-04-02
**Versão:** 1.0
**Contexto:** Todos os prompts usam o modelo Gemini 2.0 Flash via AI Proxy (`api/gemini.ts`). Temperatura 0.1 para respostas determinísticas. `response_mime_type: "application/json"` obrigatório em todos os prompts estruturados.

---

## Arquitetura de Prompts

```
Dados Brutos (CSV/XLSX/PDF/Texto)
        ↓
[PROMPT 1] KPI Extraction → ExtractedKPI[]
        ↓
[PROMPT 2] Analysis → AIAnalysisResult (blocos de visualização)
        ↓
[PROMPT 3] Diagnostic → AIDiagnosticResult (problema + prioridade)
        ↓
[PROMPT 4] Radar Item Generation → RadarItem (risk ou opportunity)
        ↓
Dashboard + Radar + Plano de Ação

Fluxos paralelos:
[PROMPT 5] Blueprint Extraction → campos estruturados
[PROMPT 6] Snapshot Narrative → resumo executivo mensal
[PROMPT 7] Knowledge Query → resposta em linguagem natural
[PROMPT 8] Forecast → previsão de curto prazo
[PROMPT 9] SWOT Generation → análise estratégica
```

---

## Contexto Injetado (Comum a Todos os Prompts)

Todo prompt deve receber o contexto da empresa quando disponível:

```typescript
interface PromptContext {
  blueprint?: {
    industry_sector?: string;
    business_model?:
      | "b2b"
      | "b2c"
      | "b2b2c"
      | "marketplace"
      | "saas"
      | "services"
      | "product"
      | "hybrid";
    company_stage?:
      | "pre_revenue"
      | "early_stage"
      | "growth"
      | "scale_up"
      | "mature"
      | "turnaround";
    employee_count_range?: "1-10" | "11-50" | "51-200" | "201-500" | "500+";
    annual_revenue_range?: string;
    known_challenges?: string[];
    value_proposition?: string;
    target_market?: string;
  };
  kpiLibrary?: Array<{
    code: string;
    title: string;
    unit: string;
    domain: string;
    description?: string;
  }>;
  historicalKPIs?: Array<{
    code: string;
    value: number;
    period: string;
  }>;
}
```

---

## PROMPT 1 — Extração Semântica de KPIs

**Propósito:** Mapear valores de documentos para códigos padronizados da `library_kpis`.
**Quando usar:** Após parse de arquivo (CSV, XLSX, PDF, texto).
**Arquivo:** `src/services/kpiExtractionService.ts`

```typescript
function buildKPIExtractionPrompt(
  data: unknown[],
  rawText: string | undefined,
  kpiLibrary: Array<{
    code: string;
    title: string;
    unit: string;
    description?: string;
  }>,
  blueprint?: PromptContext["blueprint"],
): string {
  const blueprintSection = blueprint
    ? `\nEMPRESA:\n- Setor: ${blueprint.industry_sector || "não informado"}\n- Modelo: ${blueprint.business_model || "não informado"}\n- Porte: ${blueprint.employee_count_range || "não informado"}`
    : "";

  const kpiList = kpiLibrary
    .slice(0, 50)
    .map(
      (k) =>
        `- ${k.code}: ${k.title} (${k.unit})${k.description ? " — " + k.description : ""}`,
    )
    .join("\n");

  const dataSection = rawText
    ? `TEXTO DO DOCUMENTO:\n${rawText.slice(0, 3000)}`
    : `DADOS ESTRUTURADOS:\n${JSON.stringify(data.slice(0, 100))}`;

  return `Você é um especialista em extração de KPIs financeiros para PMEs brasileiras.
Sua tarefa é identificar e mapear métricas presentes nos dados para os códigos padronizados da biblioteca.${blueprintSection}

KPIs DISPONÍVEIS NA BIBLIOTECA:
${kpiList}

${dataSection}

REGRAS:
1. Extraia TODOS os valores numéricos que correspondam a KPIs da biblioteca
2. Para percentuais: use o valor numérico (ex: 15.3 para 15,3%)
3. Para moeda: use o valor em reais sem formatação (ex: 50000 para R$ 50.000)
4. Para dias: use o número inteiro
5. Confidence: 0.9+ para dados tabulares explícitos, 0.7-0.9 para texto claro, 0.5-0.7 para inferência
6. Inclua em "unrecognized" métricas presentes mas sem código correspondente

Responda APENAS com JSON válido:
{
  "extracted": [
    {
      "code": "NET_PROFIT_MARGIN",
      "value": 15.3,
      "unit": "percentage",
      "period": "2024-03",
      "confidence": 0.95,
      "source_text": "margem líquida de 15,3%",
      "source_type": "table"
    }
  ],
  "period_detected": "2024-03",
  "period_start": "2024-03-01",
  "period_end": "2024-03-31",
  "unrecognized": ["campo X sem correspondência", "valor Y sem contexto"],
  "data_quality_notes": "Dados completos para 8 KPIs. Período identificado: março 2024."
}`.trim();
}
```

**Schema de resposta esperado:**

```typescript
interface KPIExtractionResponse {
  extracted: Array<{
    code: string;
    value: number;
    unit: string;
    period?: string;
    confidence: number;
    source_text?: string;
    source_type: "table" | "text" | "calculated";
  }>;
  period_detected?: string;
  period_start?: string;
  period_end?: string;
  unrecognized: string[];
  data_quality_notes: string;
}
```

---

## PROMPT 2 — Análise de Dados (Blocos de Visualização)

**Propósito:** Gerar resumo executivo e blocos de visualização para o relatório.
**Quando usar:** Após extração de KPIs, para gerar o relatório completo.
**Arquivo:** `src/services/aiService.ts` → `buildAnalysisPrompt`

```typescript
function buildAnalysisPrompt(
  data: unknown[],
  context: string,
  ctx?: PromptContext,
): string {
  const blueprintSection = ctx?.blueprint
    ? `\nCONTEXTO DA EMPRESA:\n${JSON.stringify(ctx.blueprint)}`
    : "";

  const kpiSection = ctx?.kpiLibrary?.length
    ? `\nKPIs RELEVANTES:\n${ctx.kpiLibrary
        .slice(0, 30)
        .map((k) => `${k.code}: ${k.title} (${k.unit})`)
        .join("\n")}`
    : "";

  const historicalSection = ctx?.historicalKPIs?.length
    ? `\nHISTÓRICO RECENTE:\n${JSON.stringify(ctx.historicalKPIs.slice(0, 20))}`
    : "";

  return `Você é um especialista em analytics estratégico para PMEs brasileiras.
Analise os dados e gere um relatório executivo com blocos de visualização.

CONTEXTO DO NEGÓCIO: ${context || "PME brasileira"}${blueprintSection}${kpiSection}${historicalSection}

DADOS: ${JSON.stringify(data.slice(0, 100))}

TIPOS DE BLOCO DISPONÍVEIS:
- KPI_GRID: grade de indicadores principais
- CHART: gráfico de linha ou área (para séries temporais)
- CHART_BAR_HORIZONTAL: barras horizontais (para comparações)
- CHART_DONNUT: rosca (para distribuições percentuais)
- TABLE: tabela de dados
- AI_INSIGHT: insight textual da IA
- BENCHMARK_COMPARISON: comparação com benchmark do setor
- ACTION_PLAN: sugestão de ações
- CALLOUT: destaque de informação crítica

Responda APENAS com JSON válido:
{
  "summary": "Resumo executivo em 2-3 frases com os insights mais importantes. Use linguagem direta para gestor de PME.",
  "blocks": [
    {
      "type": "KPI_GRID",
      "title": "Principais Indicadores",
      "description": "Visão geral da saúde financeira",
      "data": {
        "metrics": [
          { "label": "Margem Líquida", "value": "15,3%", "status": "good", "trend": "up", "delta": "+2,1pp" }
        ]
      },
      "settings": { "columns": 3 }
    }
  ]
}`.trim();
}
```

---

## PROMPT 3 — Diagnóstico Estratégico

**Propósito:** Identificar o problema mais crítico e sugerir a ação prioritária.
**Quando usar:** Após análise, para gerar diagnóstico e priorização.
**Arquivo:** `src/services/aiService.ts` → `buildDiagnosticPrompt`

```typescript
function buildDiagnosticPrompt(
  data: unknown[],
  context: string,
  ctx?: PromptContext,
): string {
  const blueprintSection = ctx?.blueprint
    ? `\nCONTEXTO DA EMPRESA:\n${JSON.stringify(ctx.blueprint)}`
    : "";

  return `Você é um Consultor Estratégico Sênior especializado em PMEs brasileiras.
Analise os dados e identifique o problema MAIS CRÍTICO e a ação MAIS IMPORTANTE.

CONTEXTO: ${context || "PME brasileira"}${blueprintSection}
DADOS: ${JSON.stringify(data.slice(0, 100))}

FRAMEWORK DE DIAGNÓSTICO:
- Identifique a causa raiz (não o sintoma)
- Quantifique o impacto em termos financeiros quando possível
- Sugira ação específica e executável (não genérica)
- Score ICE: Impact (1-10) × Confidence (1-10) / Effort (1-10)

Responda APENAS com JSON válido:
{
  "diagnostic": {
    "title": "Título conciso do problema (máx 60 chars)",
    "description": "Explicação detalhada baseada nos dados específicos apresentados",
    "causes": ["Causa raiz 1", "Causa raiz 2"],
    "implications": ["Impacto financeiro 1", "Impacto operacional 2"],
    "urgency": "immediate"
  },
  "suggestedPriority": {
    "title": "Ação específica e executável",
    "explanation": "Por que esta é a prioridade número 1 agora",
    "level": "high",
    "score": {
      "impact": 8,
      "urgency": 9,
      "effort": 5,
      "confidence": 7,
      "calculatedValue": 10.08
    },
    "first_step": "Primeiro passo concreto para executar hoje"
  }
}`.trim();
}
```

---

## PROMPT 4 — Geração de Radar Item (Risk ou Opportunity)

**Propósito:** Gerar um `radar_item` completo e normalizado para inserção no banco.
**Quando usar:** Após detecção de desafio ou oportunidade pelo `DetectionService`.
**Arquivo:** `src/services/strategic/DetectionService.ts` (novo método)

```typescript
function buildRadarItemPrompt(
  type: "risk" | "opportunity",
  detectedCode: string,
  detectedName: string,
  affectedKPIs: Array<{ code: string; value: number; unit: string }>,
  blueprint?: PromptContext["blueprint"],
): string {
  const typeInstruction =
    type === "risk"
      ? "Gere um ALERTA DE RISCO — algo ruim que está acontecendo ou vai acontecer se não agir."
      : "Gere uma OPORTUNIDADE ESTRATÉGICA — algo bom que a empresa ainda não está aproveitando.";

  return `Você é um consultor estratégico especializado em PMEs brasileiras.
${typeInstruction}

DESAFIO/OPORTUNIDADE DETECTADO: ${detectedName} (${detectedCode})
KPIs AFETADOS: ${JSON.stringify(affectedKPIs)}
EMPRESA: ${JSON.stringify(blueprint || {})}

DIAGNÓSTICOS DISPONÍVEIS (use os códigos):
- DIAG_CASH_CRUNCH: Crise de liquidez operacional
- DIAG_SALES_INEFFICIENCY: Ineficiência no processo comercial
- DIAG_MARGIN_COMPRESSION: Compressão de margens
- DIAG_CUSTOMER_CHURN: Perda acelerada de clientes
- DIAG_STOCK_STAGNATION: Estoque parado e capital imobilizado
- DIAG_HIGH_FIXED_COSTS: Estrutura de custos fixos pesada
- DIAG_LATE_RECEIVABLES: Ciclo de recebimento longo
- DIAG_HIGH_CAC: Custo de aquisição acima do sustentável
- DIAG_DELIVERY_DELAY: Atrasos operacionais sistêmicos
- DIAG_TEAM_INEFFICIENCY: Baixa produtividade por colaborador
- OPP_TICKET_EXPANSION: Potencial de aumento de ticket médio
- OPP_UPSELL_BASE: Oportunidade de upsell na base existente
- OPP_CHANNEL_OPTIMIZATION: Canal de aquisição subexplorado
- OPP_MARGIN_IMPROVEMENT: Margem acima da média do setor
- OPP_RETENTION_LEVERAGE: Alta retenção como alavanca de crescimento
- OPP_PRODUCTIVITY_GAIN: Produtividade acima da média setorial
- OPP_RECEIVABLES_ACCELERATION: Ciclo de recebimento acelerável
- OPP_COST_REDUCTION: Estrutura de custos otimizável
- OPP_PRICING_POWER: Poder de precificação não explorado
- OPP_GEOGRAPHIC_EXPANSION: Expansão geográfica viável
- OPP_DIGITAL_CHANNEL: Canal digital subexplorado
- OPP_RECURRING_REVENUE: Potencial de receita recorrente

ALAVANCAS DISPONÍVEIS (use os códigos):
Riscos: LEV_COST_REDUCTION, LEV_RECEIVABLES_ACCELERATION, LEV_REVENUE_BOOST, LEV_CASH_CYCLE, LEV_PRICE_INCREASE, LEV_RETENTION, LEV_CONVERSION, LEV_STOCK_TURN, LEV_FIXED_COST, LEV_ACQ_EFF, LEV_WASTE, LEV_TEAM_PRODUCTIVITY
Oportunidades: LEV_UPSELL, LEV_CROSS_SELL, LEV_TICKET_INCREASE, LEV_CHANNEL_INVEST, LEV_PRICING_POWER, LEV_GEOGRAPHIC_EXPANSION, LEV_DIGITAL_CHANNEL, LEV_RECURRING_MODEL, LEV_REFERRAL_PROGRAM, LEV_AUTOMATION

Responda APENAS com JSON válido:
{
  "type": "${type}",
  "title": "Título conciso e impactante (máx 70 chars)",
  "severity": "critical",
  "domain": "finance",
  "diagnosis_code": "DIAG_CASH_CRUNCH",
  "diagnosis": {
    "technical_term": "Crise de Liquidez Operacional",
    "cause": "Burn rate superior à geração de caixa operacional nos últimos 3 meses",
    "effect": "Risco de insolvência em 45-60 dias sem intervenção",
    "why": "Crescimento de despesas fixas sem proporcional aumento de receita"
  },
  "impact": {
    "description": "Redução de 60% no runway disponível",
    "value": 60,
    "type": "percentage",
    "direction": "decrease",
    "category": "cost"
  },
  "timeframe_code": "IMMEDIATE",
  "complexity_code": "MEDIUM",
  "suggested_lever_codes": ["LEV_COST_REDUCTION", "LEV_RECEIVABLES_ACCELERATION"],
  "ai_confidence_score": 0.87,
  "priority_score": 9
}`.trim();
}
```

---

## PROMPT 5 — Extração de Blueprint via Texto Livre

**Propósito:** Preencher campos estruturados do Company Blueprint a partir de descrição em linguagem natural.
**Quando usar:** Assistente de preenchimento do Blueprint.
**Arquivo:** `src/services/blueprintService.ts`

```typescript
function buildBlueprintExtractionPrompt(freeText: string): string {
  return `Você é um especialista em análise de empresas PMEs brasileiras.
Extraia informações estruturadas sobre a empresa a partir do texto livre do gestor.

TEXTO DO GESTOR:
"${freeText}"

CAMPOS DISPONÍVEIS E VALORES ACEITOS:
- business_model: b2b | b2c | b2b2c | marketplace | saas | services | product | hybrid
- company_stage: pre_revenue | early_stage | growth | scale_up | mature | turnaround
- industry_sector: tecnologia | varejo | servicos | industria | saude | educacao | alimentacao | construcao | agronegocio | consultoria | financeiro | logistica | outro
- employee_count_range: 1-10 | 11-50 | 51-200 | 201-500 | 500+
- annual_revenue_range: ate-500k | 500k-2m | 2m-10m | 10m-50m | acima-50m
- geographic_coverage: local | regional | national | latam | global
- market_position: leader | challenger | follower | niche
- funding_stage: bootstrapped | pre_seed | seed | series_a | series_b | series_c_plus | profitable
- pricing_model: subscription | transactional | project | retainer | freemium | hybrid

Preencha APENAS os campos que você consegue inferir com confiança >= 0.7.
Campos não identificados devem ser null.

Responda APENAS com JSON válido:
{
  "legal_name": null,
  "trade_name": "Nome fantasia se mencionado",
  "founding_year": 2019,
  "business_model": "saas",
  "company_stage": "growth",
  "industry_sector": "tecnologia",
  "employee_count_range": "11-50",
  "annual_revenue_range": "2m-10m",
  "value_proposition": "Resumo da proposta de valor em 1 frase",
  "target_market": "Descrição do mercado-alvo",
  "geographic_coverage": "national",
  "market_position": "challenger",
  "funding_stage": "bootstrapped",
  "pricing_model": "subscription",
  "known_challenges": ["desafio 1 mencionado", "desafio 2 mencionado"],
  "core_values": ["valor 1", "valor 2"],
  "confidence_per_field": {
    "business_model": 0.95,
    "industry_sector": 0.90,
    "employee_count_range": 0.85
  },
  "extraction_notes": "Observações sobre o que foi possível extrair e o que ficou ambíguo"
}`.trim();
}
```

---

## PROMPT 6 — AI Narrative para Knowledge Snapshot

**Propósito:** Gerar resumo executivo mensal em linguagem natural para o snapshot estratégico.
**Quando usar:** Geração automática de `knowledge_snapshots.ai_narrative` ao final de cada período.
**Arquivo:** `api/generate-snapshot.ts` (Edge Function)

```typescript
function buildSnapshotNarrativePrompt(
  periodData: {
    period_key: string;
    kpi_summary: Record<string, number>;
    challenges_detected: Array<{
      code: string;
      severity: string;
      confidence: number;
    }>;
    overall_health: string;
    action_plans_status: Record<string, string>;
  },
  blueprint: PromptContext["blueprint"],
  previousSnapshot?: {
    kpi_summary: Record<string, number>;
    overall_health: string;
  },
): string {
  const previousSection = previousSnapshot
    ? `\nPERÍODO ANTERIOR:\n- Saúde: ${previousSnapshot.overall_health}\n- KPIs: ${JSON.stringify(previousSnapshot.kpi_summary)}`
    : "";

  return `Você é o CFO virtual de uma PME brasileira. Escreva o resumo executivo do período.
Tom: executivo, direto, em português brasileiro. Máximo 3 parágrafos.

EMPRESA: ${JSON.stringify(blueprint || {})}
PERÍODO: ${periodData.period_key}
SAÚDE GERAL: ${periodData.overall_health}
KPIs DO PERÍODO: ${JSON.stringify(periodData.kpi_summary)}
DESAFIOS DETECTADOS: ${JSON.stringify(periodData.challenges_detected)}
STATUS DOS PLANOS DE AÇÃO: ${JSON.stringify(periodData.action_plans_status)}${previousSection}

ESTRUTURA DOS 3 PARÁGRAFOS:
1. O que aconteceu: principais números e mudanças em relação ao período anterior
2. Por que importa: implicações para o negócio (positivas e negativas)
3. O que fazer: 2-3 ações prioritárias para o próximo período

Escreva em texto puro, sem JSON, sem markdown, sem bullet points.
Use linguagem acessível para gestor de PME, não para analista financeiro.`.trim();
}
```

---

## PROMPT 7 — Consulta em Linguagem Natural à Knowledge Base

**Propósito:** Responder perguntas do gestor sobre o histórico estratégico da empresa.
**Quando usar:** Interface de consulta `/app/knowledge/query`.
**Arquivo:** `api/gemini.ts` (via AI Proxy com contexto enriquecido)

```typescript
function buildKnowledgeQueryPrompt(
  query: string,
  snapshots: Array<{
    period_key: string;
    kpi_summary: Record<string, number>;
    ai_narrative: string;
    overall_health: string;
  }>,
  kpiHistory: Array<{ kpi_code: string; value: number; period_key: string }>,
  blueprint: PromptContext["blueprint"],
): string {
  return `Você é o analista estratégico pessoal de um gestor de PME brasileira.
Responda à pergunta com base no histórico real da empresa.

EMPRESA: ${JSON.stringify(blueprint || {})}
PERGUNTA DO GESTOR: "${query}"

HISTÓRICO DE KPIs (últimos 12 meses):
${JSON.stringify(kpiHistory.slice(0, 60))}

SNAPSHOTS ESTRATÉGICOS (resumos mensais):
${snapshots
  .slice(0, 6)
  .map(
    (s) =>
      `${s.period_key} [${s.overall_health}]: ${s.ai_narrative?.slice(0, 200)}`,
  )
  .join("\n")}

REGRAS DE RESPOSTA:
1. Cite dados específicos (valores, períodos, variações percentuais)
2. Compare com períodos anteriores quando relevante
3. Use linguagem acessível para gestor, não para analista
4. Se não tiver dados suficientes, diga claramente o que falta
5. Sugira uma ação concreta baseada na análise

Responda APENAS com JSON válido:
{
  "answer": "Resposta narrativa completa em PT-BR (2-4 parágrafos)",
  "key_insight": "O insight mais importante em 1 frase",
  "sources": [
    { "period_key": "2024-03", "kpi_code": "NET_PROFIT_MARGIN", "value": 15.3, "context": "Melhor margem do ano" }
  ],
  "trend": "improving",
  "recommendation": "Ação concreta sugerida baseada na análise",
  "data_sufficiency": "sufficient"
}`.trim();
}
```

---

## PROMPT 8 — Previsão de Curto Prazo

**Propósito:** Gerar previsões de fluxo de caixa, receita ou despesas para 7/30/60/90 dias.
**Quando usar:** Módulo de Previsões (`/app/forecasts`).
**Arquivo:** `src/services/forecastService.ts` (a criar)

```typescript
function buildForecastPrompt(
  forecastType:
    | "cash_flow"
    | "revenue"
    | "expenses"
    | "receivables"
    | "payables",
  horizonDays: 7 | 30 | 60 | 90,
  historicalData: Array<{ period: string; value: number }>,
  blueprint: PromptContext["blueprint"],
): string {
  const typeLabels = {
    cash_flow: "Fluxo de Caixa",
    revenue: "Receita",
    expenses: "Despesas",
    receivables: "Contas a Receber",
    payables: "Contas a Pagar",
  };

  return `Você é um analista financeiro especializado em PMEs brasileiras.
Gere uma previsão de ${typeLabels[forecastType]} para os próximos ${horizonDays} dias.

EMPRESA: ${JSON.stringify(blueprint || {})}
HISTÓRICO (últimos 12 meses): ${JSON.stringify(historicalData)}

MÉTODO: Analise tendências, sazonalidade e padrões cíclicos.
Considere o contexto do setor e porte da empresa.

Responda APENAS com JSON válido:
{
  "forecast_type": "${forecastType}",
  "horizon_days": ${horizonDays},
  "total_projected": 85000,
  "avg_daily": 2833,
  "min_projected": 70000,
  "max_projected": 100000,
  "daily_values": [2800, 2750, 2900, 3100, 2600, 2800, 3000],
  "confidence_score": 78,
  "confidence_level": "media",
  "forecast_method": "tendencia_linear",
  "key_assumptions": [
    "Crescimento mensal de 5% mantido",
    "Sazonalidade de dezembro considerada",
    "Sem eventos extraordinários previstos"
  ],
  "risk_factors": [
    "Inadimplência pode aumentar em período de férias",
    "Despesas fixas crescendo 3% ao mês"
  ],
  "alert_triggered": false,
  "alert_message": null,
  "narrative": "Previsão de fluxo de caixa positivo para os próximos 30 dias, com pico esperado na segunda quinzena."
}`.trim();
}
```

---

## PROMPT 9 — Geração de SWOT Assistida por IA

**Propósito:** Gerar análise SWOT baseada nos dados reais da empresa.
**Quando usar:** Módulo SWOT (`/app/strategy/swot`).
**Arquivo:** `src/services/swotService.ts` (a criar)

```typescript
function buildSWOTPrompt(
  kpis: Array<{ code: string; value: number; status: string }>,
  challenges: Array<{ code: string; severity: string }>,
  blueprint: PromptContext["blueprint"],
  industryBenchmarks?: Record<string, number>,
): string {
  return `Você é um consultor estratégico especializado em PMEs brasileiras.
Gere uma análise SWOT baseada nos dados reais da empresa.

EMPRESA: ${JSON.stringify(blueprint || {})}
KPIs ATUAIS: ${JSON.stringify(kpis)}
DESAFIOS DETECTADOS: ${JSON.stringify(challenges)}
BENCHMARKS DO SETOR: ${JSON.stringify(industryBenchmarks || {})}

REGRAS:
- Forças: baseadas em KPIs acima do benchmark ou tendências positivas
- Fraquezas: baseadas em KPIs abaixo do benchmark ou desafios detectados
- Oportunidades: baseadas no contexto do setor e potencial não explorado
- Ameaças: baseadas em tendências negativas e riscos externos do setor
- Cada item deve ter evidência nos dados (não seja genérico)
- Máximo 3 itens por quadrante para foco

Responda APENAS com JSON válido:
{
  "forcas": [
    { "title": "Margem bruta acima da média", "description": "Margem de 45% vs benchmark de 35% no setor", "evidencia": "GROSS_MARGIN = 45%" },
    { "title": "Alta retenção de clientes", "description": "Churn de 2% ao mês, abaixo da média do setor (5%)", "evidencia": "CHURN_RATE = 2%" }
  ],
  "fraquezas": [
    { "title": "CAC elevado", "description": "Custo de aquisição 40% acima do benchmark", "evidencia": "CAC = R$ 840 vs benchmark R$ 600", "impacto": "Reduz sustentabilidade do crescimento" }
  ],
  "oportunidades": [
    { "title": "Expansão via upsell", "description": "Base de clientes com alta retenção e baixo ticket médio vs potencial", "potencial": "Aumento de 30% no LTV" }
  ],
  "ameacas": [
    { "title": "Pressão de preços no setor", "description": "Novos entrantes com modelo freemium podem comprimir margens", "probabilidade": "media" }
  ],
  "balance_score": 72,
  "acao_prioritaria": {
    "title": "Reduzir CAC via programa de indicação",
    "descricao": "Implementar programa de referral para aproveitar a alta retenção e reduzir CAC em 30%",
    "prazo": "90 dias",
    "kpi_impactado": "CAC"
  },
  "narrative": "A empresa apresenta fundamentos sólidos com margens acima da média e excelente retenção. O principal desafio é o CAC elevado que limita a velocidade de crescimento sustentável."
}`.trim();
}
```

---

## PROMPT 10 — Detecção de Oportunidades

**Propósito:** Identificar oportunidades estratégicas a partir dos KPIs da empresa.
**Quando usar:** Complementar ao `DetectionService` para gerar `radar_items` do tipo `opportunity`.
**Arquivo:** `src/services/strategic/DetectionService.ts` (novo método)

```typescript
function buildOpportunityDetectionPrompt(
  kpis: Array<{
    code: string;
    value: number;
    unit: string;
    benchmark?: number;
    trend?: string;
  }>,
  blueprint: PromptContext["blueprint"],
  industryBenchmarks: Record<string, number>,
): string {
  return `Você é um consultor de crescimento especializado em PMEs brasileiras.
Identifique as PRINCIPAIS OPORTUNIDADES de crescimento e melhoria baseadas nos dados.

EMPRESA: ${JSON.stringify(blueprint || {})}
KPIs ATUAIS COM BENCHMARKS:
${kpis.map((k) => `- ${k.code}: ${k.value}${k.unit === "percentage" ? "%" : ""} (benchmark: ${k.benchmark || industryBenchmarks[k.code] || "N/A"}, tendência: ${k.trend || "estável"})`).join("\n")}

TIPOS DE OPORTUNIDADE A IDENTIFICAR:
1. KPI acima do benchmark → potencial de monetizar vantagem competitiva
2. KPI com tendência positiva → acelerar o que está funcionando
3. Gap entre KPIs relacionados → ex: alta retenção + baixo upsell = oportunidade de expansão
4. Benchmark do setor muito acima → potencial de melhoria significativa
5. Modelo de negócio subexplorado → ex: empresa B2B sem receita recorrente

Identifique no máximo 3 oportunidades prioritárias.

Responda APENAS com JSON válido:
{
  "opportunities": [
    {
      "code": "OPP_UPSELL_BASE",
      "title": "Expandir receita na base existente",
      "description": "Sua taxa de retenção de 95% é excepcional, mas a receita de expansão é zero. Clientes satisfeitos raramente recusam upgrades bem posicionados.",
      "evidence": "RETENTION_RATE = 95% (benchmark: 80%), EXPANSION_REVENUE = 0",
      "potential_impact": "Aumento de 25-40% no LTV sem custo adicional de aquisição",
      "suggested_levers": ["LEV_UPSELL", "LEV_CROSS_SELL"],
      "timeframe": "short_term",
      "confidence": 0.88,
      "domain": "commercial"
    }
  ],
  "summary": "3 oportunidades identificadas com potencial de impacto significativo nos próximos 90 dias."
}`.trim();
}
```

---

## Biblioteca Completa de Riscos e Oportunidades

### Riscos Detectáveis (15 total)

| Código                      | Nome                                      | KPIs Gatilho                               | Condição                                             | Domínio    |
| --------------------------- | ----------------------------------------- | ------------------------------------------ | ---------------------------------------------------- | ---------- |
| `CASH_FLOW_CRUNCH`          | O dinheiro não chega ao fim do mês        | RUNWAY, BURN_RATE, DAYS_TO_RECEIVE         | RUNWAY ≤ 3 meses OU BURN_RATE crescendo >10%/mês     | finance    |
| `INEFFICIENT_SALES_MACHINE` | Esforço de vendas alto para pouco retorno | LTV_CAC_RATIO, SALES_CYCLE_DAYS, CAC       | LTV/CAC ≤ 1.5 OU CAC crescendo >15%/mês              | commercial |
| `COMMODITY_TRAP`            | Guerra de preços e margens espremidas     | NET_PROFIT_MARGIN, CONTRIBUTION_MARGIN     | Margem líquida ≤ 5% E margem bruta caindo            | finance    |
| `CUSTOMER_LOSS`             | Perda acelerada de clientes               | CHURN_RATE, NPS, RETENTION_RATE            | Churn > 8%/mês OU NPS < 20                           | commercial |
| `STOCK_STAGNATION`          | Estoque parado e capital imobilizado      | INVENTORY_TURNOVER, DEAD_STOCK_RATIO       | Giro < 4x/ano OU estoque parado > 20%                | operations |
| `HIGH_FIXED_COSTS`          | Estrutura de custos fixos pesada          | FIXED_COST_RATIO, OPERATING_LEVERAGE       | Custos fixos > 60% da receita                        | finance    |
| `LATE_RECEIVABLES`          | Ciclo de recebimento longo                | DAYS_TO_RECEIVE, CASH_CONVERSION_CYCLE     | PMR > 60 dias OU crescendo >10%/mês                  | finance    |
| `HIGH_ACQUISITION_COST`     | Custo de aquisição acima do sustentável   | CAC, LTV_CAC_RATIO, ROAS                   | CAC > LTV/3 OU ROAS < 2x                             | marketing  |
| `DELIVERY_DELAY`            | Atrasos operacionais sistêmicos           | ORDER_CYCLE_TIME, ON_TIME_DELIVERY         | Prazo médio > 30 dias OU entregas no prazo < 80%     | operations |
| `TEAM_INEFFICIENCY`         | Baixa produtividade por colaborador       | PRODUCTIVITY_PER_EMPLOYEE, LABOR_COST_PCT  | Receita/funcionário < 50% do benchmark setorial      | people     |
| `GROWTH_STAGNATION`         | Crescimento estagnado ou em declínio      | REVENUE_GROWTH, CUSTOMER_RETENTION_RATE    | Crescimento < 0% por 3 meses consecutivos            | strategy   |
| `MARGIN_COMPRESSION`        | Margens em queda consistente              | GROSS_MARGIN, EBITDA_MARGIN                | Margem bruta caindo > 2pp/mês por 3 meses            | finance    |
| `HIGH_DEBT`                 | Endividamento comprometendo operação      | DEBT_TO_EQUITY, DEBT_SERVICE_COVERAGE      | D/E > 3x OU cobertura de dívida < 1.2x               | finance    |
| `SUPPLIER_RISK`             | Dependência excessiva de fornecedores     | SUPPLIER_CONCENTRATION, LEAD_TIME_SUPPLIER | Top 3 fornecedores > 80% das compras                 | operations |
| `TALENT_DRAIN`              | Rotatividade alta comprometendo operação  | EMPLOYEE_TURNOVER, TIME_TO_HIRE            | Turnover > 30%/ano OU tempo para contratar > 60 dias | people     |

---

### Oportunidades Detectáveis (20 total)

| Código                         | Nome                                        | KPIs Gatilho                               | Condição                                                   | Domínio    | Potencial               |
| ------------------------------ | ------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------- | ---------- | ----------------------- |
| `OPP_TICKET_EXPANSION`         | Potencial de aumento de ticket médio        | AVG_TICKET, RETENTION_RATE                 | Ticket < benchmark E retenção > 85%                        | commercial | +20-40% LTV             |
| `OPP_UPSELL_BASE`              | Oportunidade de upsell na base existente    | CHURN_RATE, EXPANSION_REVENUE, UPSELL_RATE | Churn < 3% E expansão = 0                                  | commercial | +25-40% LTV             |
| `OPP_CHANNEL_OPTIMIZATION`     | Canal de aquisição subexplorado             | ROAS, CAC por canal                        | ROAS > 5x em algum canal com baixo investimento            | marketing  | -30% CAC                |
| `OPP_MARGIN_IMPROVEMENT`       | Margem acima da média do setor              | GROSS_MARGIN, CONTRIBUTION_MARGIN          | Margem > benchmark + 10pp                                  | finance    | Monetizar vantagem      |
| `OPP_RETENTION_LEVERAGE`       | Alta retenção como alavanca de crescimento  | RETENTION_RATE, NPS                        | Retenção > 90% E NPS > 50                                  | commercial | Programa de referral    |
| `OPP_PRODUCTIVITY_GAIN`        | Produtividade acima da média setorial       | PRODUCTIVITY_PER_EMPLOYEE                  | Receita/funcionário > benchmark + 20%                      | people     | Escalar sem contratar   |
| `OPP_RECEIVABLES_ACCELERATION` | Ciclo de recebimento acelerável             | DAYS_TO_RECEIVE, CASH_CONVERSION_CYCLE     | PMR > 30 dias com clientes de baixo risco                  | finance    | +15-25% capital de giro |
| `OPP_COST_REDUCTION`           | Estrutura de custos otimizável              | FIXED_COST_RATIO, VARIABLE_COST_RATIO      | Custos fixos > 50% com margem de contribuição > 60%        | finance    | +5-10pp margem          |
| `OPP_PRICING_POWER`            | Poder de precificação não explorado         | GROSS_MARGIN, CHURN_RATE, NPS              | Margem alta + churn baixo + NPS alto = pode aumentar preço | commercial | +10-20% receita         |
| `OPP_GEOGRAPHIC_EXPANSION`     | Expansão geográfica viável                  | REVENUE_GROWTH, CUSTOMER_CONCENTRATION     | Crescimento > 20%/ano E concentração geográfica > 80%      | strategy   | Novo mercado            |
| `OPP_DIGITAL_CHANNEL`          | Canal digital subexplorado                  | DIGITAL_REVENUE_PCT, WEBSITE_CONVERSION    | Receita digital < 20% do total                             | marketing  | +30% alcance            |
| `OPP_RECURRING_REVENUE`        | Potencial de receita recorrente             | RECURRING_REVENUE_PCT, CHURN_RATE          | Receita recorrente < 30% E churn baixo                     | strategy   | Previsibilidade         |
| `OPP_REFERRAL_PROGRAM`         | Base de clientes satisfeitos para indicação | NPS, REFERRAL_RATE                         | NPS > 40 E taxa de indicação < 5%                          | marketing  | -40% CAC                |
| `OPP_AUTOMATION`               | Processos manuais automatizáveis            | PRODUCTIVITY_PER_EMPLOYEE, REWORK_RATE     | Produtividade baixa + retrabalho alto                      | operations | +20% capacidade         |
| `OPP_INVENTORY_OPTIMIZATION`   | Estoque otimizável para liberar capital     | INVENTORY_TURNOVER, WORKING_CAPITAL        | Giro > 8x/ano com capital de giro negativo                 | operations | +R$X capital            |
| `OPP_CROSS_SELL`               | Oportunidade de cross-sell na base          | CROSS_SELL_RATE, REVENUE_PER_CUSTOMER      | Cross-sell < 10% E múltiplos produtos disponíveis          | commercial | +15-25% receita         |
| `OPP_PARTNERSHIP_REVENUE`      | Receita via parcerias não explorada         | PARTNERSHIP_REVENUE                        | Receita de parcerias = 0 com base de clientes > 500        | strategy   | Novo canal              |
| `OPP_PREMIUM_SEGMENT`          | Segmento premium subatendido                | AVG_TICKET, GROSS_MARGIN                   | Margem alta + ticket baixo vs concorrentes premium         | commercial | +50% ticket             |
| `OPP_SUBSCRIPTION_MODEL`       | Migração para modelo de assinatura          | CHURN_RATE, REVENUE_GROWTH                 | Clientes recorrentes > 60% sem contrato formal             | strategy   | Previsibilidade + LTV   |
| `OPP_DATA_MONETIZATION`        | Dados da empresa como ativo estratégico     | Dados históricos ricos                     | 2+ anos de dados com padrões identificáveis                | strategy   | Insights competitivos   |

---

## Regras de Detecção — Implementação TypeScript

```typescript
// src/services/strategic/DetectionService.ts

interface OpportunityRule {
  id: string;
  name: string;
  description: string;
  type: "opportunity";
  domain: string;
  kpis: string[];
  rules: Array<{
    kpi: string;
    operator: "<=" | ">=" | "<" | ">" | "=";
    value: number;
    weight: number;
    comparison?: "benchmark" | "absolute";
  }>;
  potential_impact: string;
  suggested_levers: string[];
}

const opportunityRules: OpportunityRule[] = [
  {
    id: "opp_upsell_base",
    name: "Oportunidade de Upsell na Base",
    description: "Alta retenção com zero expansão de receita",
    type: "opportunity",
    domain: "commercial",
    kpis: ["CHURN_RATE", "EXPANSION_REVENUE", "UPSELL_RATE"],
    rules: [
      { kpi: "CHURN_RATE", operator: "<=", value: 3, weight: 0.5 },
      { kpi: "UPSELL_RATE", operator: "<=", value: 5, weight: 0.5 },
    ],
    potential_impact:
      "Aumento de 25-40% no LTV sem custo adicional de aquisição",
    suggested_levers: ["LEV_UPSELL", "LEV_CROSS_SELL", "LEV_TICKET_INCREASE"],
  },
  {
    id: "opp_pricing_power",
    name: "Poder de Precificação Não Explorado",
    description: "Margem alta + retenção alta = pode aumentar preço",
    type: "opportunity",
    domain: "commercial",
    kpis: ["GROSS_MARGIN", "CHURN_RATE", "NPS"],
    rules: [
      { kpi: "GROSS_MARGIN", operator: ">=", value: 60, weight: 0.4 },
      { kpi: "CHURN_RATE", operator: "<=", value: 3, weight: 0.3 },
      { kpi: "NPS", operator: ">=", value: 40, weight: 0.3 },
    ],
    potential_impact: "Aumento de 10-20% na receita sem novos clientes",
    suggested_levers: ["LEV_PRICING_POWER", "LEV_PREMIUM_SEGMENT"],
  },
  {
    id: "opp_referral_program",
    name: "Base de Clientes para Programa de Indicação",
    description: "NPS alto com taxa de indicação baixa",
    type: "opportunity",
    domain: "marketing",
    kpis: ["NPS", "REFERRAL_RATE"],
    rules: [
      { kpi: "NPS", operator: ">=", value: 40, weight: 0.6 },
      { kpi: "REFERRAL_RATE", operator: "<=", value: 5, weight: 0.4 },
    ],
    potential_impact: "Redução de 30-40% no CAC via indicações orgânicas",
    suggested_levers: ["LEV_REFERRAL_PROGRAM", "LEV_DIGITAL_CHANNEL"],
  },
  {
    id: "opp_receivables_acceleration",
    name: "Aceleração de Recebíveis",
    description: "PMR alto com clientes de baixo risco",
    type: "opportunity",
    domain: "finance",
    kpis: ["DAYS_TO_RECEIVE", "CHURN_RATE"],
    rules: [
      { kpi: "DAYS_TO_RECEIVE", operator: ">=", value: 30, weight: 0.6 },
      { kpi: "CHURN_RATE", operator: "<=", value: 5, weight: 0.4 },
    ],
    potential_impact: "Liberação de 15-25% do capital de giro imobilizado",
    suggested_levers: ["LEV_RECEIVABLES_ACCELERATION", "LEV_CASH_CYCLE"],
  },
  {
    id: "opp_productivity_scale",
    name: "Escalar sem Contratar",
    description: "Produtividade acima da média permite crescer sem headcount",
    type: "opportunity",
    domain: "people",
    kpis: ["PRODUCTIVITY_PER_EMPLOYEE", "REVENUE_GROWTH"],
    rules: [
      {
        kpi: "PRODUCTIVITY_PER_EMPLOYEE",
        operator: ">=",
        value: 200000,
        weight: 0.5,
      },
      { kpi: "REVENUE_GROWTH", operator: ">=", value: 15, weight: 0.5 },
    ],
    potential_impact:
      "Crescimento de 20-30% sem aumento proporcional de headcount",
    suggested_levers: ["LEV_AUTOMATION", "LEV_TEAM_PRODUCTIVITY"],
  },
];
```

---

## Configurações de Geração (Gemini)

| Parâmetro            | Valor              | Justificativa                            |
| -------------------- | ------------------ | ---------------------------------------- |
| `temperature`        | 0.1                | Respostas determinísticas e consistentes |
| `response_mime_type` | `application/json` | Forçar JSON válido                       |
| `maxOutputTokens`    | 2048               | Suficiente para todos os prompts         |
| `topP`               | 0.8                | Reduz variabilidade mantendo qualidade   |
| `topK`               | 40                 | Vocabulário controlado                   |

**Exceção:** `buildSnapshotNarrativePrompt` usa `temperature: 0.3` para narrativa mais natural.

---

## Validação de Respostas

Todo prompt deve ter validação Zod do schema de resposta:

```typescript
import { z } from "zod";

const KPIExtractionResponseSchema = z.object({
  extracted: z.array(
    z.object({
      code: z.string(),
      value: z.number(),
      unit: z.string(),
      period: z.string().optional(),
      confidence: z.number().min(0).max(1),
      source_text: z.string().optional(),
      source_type: z.enum(["table", "text", "calculated"]),
    }),
  ),
  period_detected: z.string().optional(),
  period_start: z.string().optional(),
  period_end: z.string().optional(),
  unrecognized: z.array(z.string()),
  data_quality_notes: z.string(),
});

// Uso:
const parsed = KPIExtractionResponseSchema.safeParse(
  JSON.parse(geminiResponse),
);
if (!parsed.success) {
  console.error("Schema inválido:", parsed.error);
  // Fallback para extração via regex
}
```

---

## Fallbacks por Prompt

| Prompt                | Fallback se IA falhar                                      |
| --------------------- | ---------------------------------------------------------- |
| KPI Extraction        | Usar `kpiExtractionService` com regex (já implementado)    |
| Analysis              | Retornar `{ summary: "Análise indisponível", blocks: [] }` |
| Diagnostic            | Retornar diagnóstico genérico baseado no KPI mais crítico  |
| Radar Item            | Usar `DetectionService` com regras hardcoded               |
| Blueprint Extraction  | Retornar campos vazios, usuário preenche manualmente       |
| Snapshot Narrative    | Gerar texto template com valores dos KPIs                  |
| Knowledge Query       | Retornar "Dados insuficientes para responder"              |
| Forecast              | Usar média móvel simples dos últimos 3 períodos            |
| SWOT                  | Retornar template vazio para preenchimento manual          |
| Opportunity Detection | Usar regras hardcoded do `opportunityRules` array          |

---

_Documento criado por: Kiro AI Assistant | 2026-04-02_
_Baseado em: aiService.ts, DetectionService.ts, kpiExtractionService.ts, design.md, requirements.md_
_Relacionado: SPEC_library_strategy.md, SPEC_ui_entity_model.md_
