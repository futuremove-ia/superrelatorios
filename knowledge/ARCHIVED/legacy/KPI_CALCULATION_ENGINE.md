# KPI Calculation Engine

**Data:** 2026-04-02
**Versão:** 1.0
**Módulo:** `src/domain/metrics/engine/`

---

## Visão Geral

Engine de cálculo de KPIs com suporte a múltiplos setores, aliases, fallbacks e edge cases. Desenvolvido para extrair o máximo de dados do usuário e calcular KPIs mesmo com dados incompletos.

## Arquitetura

```
src/domain/metrics/engine/
├── types.ts              # Tipos e interfaces centrais
├── dataFields.ts         # Campos de dados por setor
├── formulas.ts           # 60+ fórmulas de KPIs
├── dataMapper.ts         # Mapeamento de dados do usuário
├── calculator.ts         # Engine principal de cálculo
├── useKPICalculation.ts  # React hooks
└── index.ts              # Exports
```

---

## Tipos Principais (`types.ts`)

### Setores Suportados

```typescript
type Sector =
  | "technology" // SaaS, software
  | "retail" // E-commerce, físico
  | "healthcare" // Hospital, clínica
  | "manufacturing" // Fábrica
  | "services" // Consultoria, suporte
  | "finance" // Banco, fintech
  | "food" // Restaurante, delivery
  | "logistics" // Transportadora
  | "construction"; // Construção civil
```

### Status de Cálculo

```typescript
type CalculationStatus =
  | "success" // Calculado com sucesso
  | "insufficient_data" // Dados insuficientes
  | "invalid_input" // Input inválido
  | "division_by_zero" // Divisão por zero
  | "overflow" // Valor muito grande
  | "not_applicable" // KPI não aplicável
  | "pending"; // Aguardando dados
```

### Nível de Confiança

```typescript
type ConfidenceLevel = "high" | "medium" | "low" | "unknown";
```

---

## Uso

### Hook Principal

```typescript
import { useKPICalculation } from "@/domain/metrics/engine";

const {
  calculateKPI,
  calculateMultiple,
  calculateAll,
  getAvailableKPIs,
  getSuggestedFields,
  isLoading,
  kpiLibrary,
} = useKPICalculation({
  organizationId: "org-123",
  sector: "technology",
  niche: "saas",
  period: "monthly",
});

// Calcular um KPI específico
const result = calculateKPI("TECH-CHURN-001", {
  churned_customers: 5,
  total_customers: 100,
});

// Calcular múltiplos KPIs
const results = calculateMultiple(
  ["TECH-MRR-001", "TECH-CHURN-001", "TECH-CAC-001"],
  {
    mrr: 50000,
    churned_customers: 5,
    total_customers: 100,
    marketing_spend: 5000,
    new_customers: 20,
  },
);

// Calcular todos para o setor
const allResults = calculateAll({ mrr: 50000, customers: 100 });

// Verificar KPIs disponíveis
const available = getAvailableKPIs(rawData);
// [{ code: 'TECH-MRR-001', title: 'Monthly Recurring Revenue', readiness: 1 }]

// Suggestion de campos faltantes
const suggestions = getSuggestedFields(rawData);
// [{ field: 'churn_rate', description: 'Taxa de churn mensal', impact: 'LTV calculation' }]
```

### Uso Rápido (sem contexto React)

```typescript
import { useQuickKPICalculation } from "@/domain/metrics/engine";

const { calculate, getKPIsForData } = useQuickKPICalculation(
  "technology",
  "saas",
);

const result = calculate({ mrr: 50000, customers: 100 });
const available = getKPIsForData({ mrr: 50000 });
```

---

## Campos de Dados (`dataFields.ts`)

### Campos Comuns (todos os setores)

- `revenue` / `receita` / `faturamento`
- `cost` / `custo` / `despesa`
- `profit` / `lucro`
- `customers` / `clientes`
- `leads` / `oportunidades`
- `employees` / `funcionarios`

### Campos por Setor

| Setor         | Campos Específicos                                         |
| ------------- | ---------------------------------------------------------- |
| technology    | mrr, arr, churned_customers, dau, mau, nps_score           |
| retail        | gmv, orders, visitors, cart_adds, returns, inventory_value |
| healthcare    | beds, occupied_beds, readmissions, patients, appointments  |
| manufacturing | oee, first_pass_yield, defects, downtime_hours, cycle_time |
| services      | billable_hours, project_revenue, tickets, escalations      |
| finance       | npl, interest_income, equity, ebitda, cash_flow            |
| food          | table_turns, covers, food_cost, labor_cost, waste          |
| logistics     | deliveries, on_time_deliveries, mileage, load_factor       |
| construction  | project_cost, budget, actual_cost, planned_days            |

---

## KPIs por Setor

### Technology (SaaS)

| Código          | Descrição                 | Fórmula                                       |
| --------------- | ------------------------- | --------------------------------------------- |
| TECH-MRR-001    | Monthly Recurring Revenue | `mrr`                                         |
| TECH-CHURN-001  | Taxa de Churn             | `(churned / total) * 100`                     |
| TECH-NRR-001    | Net Revenue Retention     | `((start - churn + expansion) / start) * 100` |
| TECH-CAC-001    | Customer Acquisition Cost | `(marketing + sales) / customers`             |
| TECH-LTV-001    | Lifetime Value            | `mrr / churn_rate`                            |
| TECH-LTVCAC-001 | LTV:CAC Ratio             | `ltv / cac`                                   |
| TECH-DAU-001    | Daily Active Users        | `avg(daily_active_users)`                     |
| TECH-MAU-001    | Monthly Active Users      | `last(monthly_active_users)`                  |
| TECH-NPS-001    | Net Promoter Score        | `promoters% - detractors%`                    |

### Retail (E-commerce)

| Código              | Descrição               | Fórmula                        |
| ------------------- | ----------------------- | ------------------------------ |
| RET-GMV-001         | Gross Merchandise Value | `gmv`                          |
| RET-AOV-001         | Average Order Value     | `gmv / orders`                 |
| RET-CONVERSION-001  | Taxa de Conversão       | `(orders / visitors) * 100`    |
| RET-ATC-001         | Add to Cart Rate        | `(cart_adds / visitors) * 100` |
| RET-RETURN-RATE     | Taxa de Devolução       | `(returns / orders) * 100`     |
| RET-INVENTORY-TURNS | Giro de Estoque         | `cogs / inventory_value`       |

### Healthcare

| Código             | Descrição              | Fórmula                             |
| ------------------ | ---------------------- | ----------------------------------- |
| HEALTH-OCCUPANCY   | Taxa de Ocupação       | `(occupied / total) * 100`          |
| HEALTH-READMISSION | Taxa de Readmissão     | `(readmissions / discharges) * 100` |
| HEALTH-WAIT-TIME   | Tempo de Espera        | `avg(wait_times)`                   |
| HEALTH-NPS-001     | Satisfação do Paciente | NPS calculation                     |
| HEALTH-STAFF-UTIL  | Utilização de Staff    | `(worked / available) * 100`        |

### Manufacturing

| Código          | Descrição                       | Fórmula                                          |
| --------------- | ------------------------------- | ------------------------------------------------ |
| MFG-OEE-001     | Overall Equipment Effectiveness | `(availability * performance * quality) / 10000` |
| MFG-FPY-001     | First Pass Yield                | `(first_pass_ok / total) * 100`                  |
| MFG-DEFECT-RATE | Taxa de Defeitos                | `(defects / total) * 100`                        |
| MFG-DOWNTIME    | Taxa de Parada                  | `(downtime / planned) * 100`                     |

### Finance

| Código          | Descrição            | Fórmula                               |
| --------------- | -------------------- | ------------------------------------- |
| FIN-NPL-001     | Non-Performing Loans | `(npl / total_loans) * 100`           |
| FIN-NIM-001     | Net Interest Margin  | `((income - expense) / assets) * 100` |
| FIN-ROE-001     | Return on Equity     | `(net_income / equity) * 100`         |
| FIN-EBITDA-001  | Margem EBITDA        | `(ebitda / revenue) * 100`            |
| FIN-QUICK-RATIO | Liquidez Imediata    | `(current - inventory) / liabilities` |

---

## Edge Cases e Fallbacks

### 1. Divisão por Zero

```typescript
// Retorna null com status específico
createSafeDivision(100, 0);
// { value: null, status: 'division_by_zero', error: 'Divisor é zero' }
```

### 2. Dados Insuficientes

```typescript
// Identifica campos faltantes
calculateKPI("TECH-CHURN-001", { total_customers: 100 });
// { status: 'insufficient_data', error: 'Dados insuficientes. Campos necessários: churned_customers' }
```

### 3. Overflow

```typescript
// Detecta valores infinitos
createSafeDivision(Infinity, 10);
// { value: null, status: 'overflow', error: 'Valor muito grande para cálculo' }
```

### 4. Agregação com Valores Inválidos

```typescript
// Filtra valores inválidos automaticamente
createAggregation([10, 20, NaN, null, 30], "average");
// { value: 20, status: 'success', warnings: ['2 valores inválidos foram ignorados'] }
```

### 5. Resolução de Aliases

```typescript
mapUserDataToKPIFields({ receita: 50000, clientes: 100 }, "technology");
// mapped: { revenue: 50000, customers: 100 }
// aliasesResolved: { revenue: 'receita', customers: 'clientes' }
```

### 6. Conflitos de Dados

```typescript
mapUserDataToKPIFields({ receita: 50000, sales: 45000 }, "technology");
// warnings: ['Conflito: múltiplas fontes para "revenue". Usando primeiro valor.']
```

---

## Thresholds Padrão

Cada KPI tem thresholds definidos para determinar status:

| Status          | Condição (higher_is_better) | Condição (lower_is_better) |
| --------------- | --------------------------- | -------------------------- |
| 🟢 **good**     | `value >= good`             | `value <= good`            |
| 🟡 **warning**  | `good > value >= warning`   | `warning < value <= good`  |
| 🔴 **critical** | `value < warning`           | `value > warning`          |

### Exemplos

```typescript
// Churn Rate (lower_is_better)
TECH-CHURN-001: { critical: 15, warning: 8, good: 2 }
// 2% = good, 8% = warning, 15%+ = critical

// MRR (higher_is_better)
TECH-MRR-001: { critical: 0, warning: 10000, good: 50000 }
// R$50k+ = good, R$10k-50k = warning, <R$10k = critical
```

---

## Integração com Pipeline de Dados

### 1. Após Upload de Arquivo

```typescript
const rawData = await parseFile(file); // CSV/XLSX/PDF
const engine = createCalculationEngine({
  sector: "technology",
  period: "monthly",
});

const availableKPIs = engine.getAvailableKPIs(rawData);
const result = engine.calculateMultiple(
  availableKPIs.map((k) => k.code),
  rawData,
);
```

### 2. Com Gemini AI (Extração)

```typescript
const extracted = await extractFromPDF(file);
const result = calculateAll(extracted);
```

### 3. Com Dados do Banco

```typescript
const storedData = await getOrganizationData(orgId);
const result = calculateMultiple(kpiCodes, storedData);
```

---

## Melhores Práticas

1. **Sempre chame `getAvailableKPIs()` primeiro** - para mostrar ao usuário quais KPIs podem ser calculados

2. **Use `getSuggestedFields()` para guiar o usuário** - sugere campos que faltam para mais KPIs

3. **Mostre warnings** - o engine retorna avisos sobre dados faltantes ou conflitos

4. **Use confidence para filtrar** - mostre apenas KPIs com confidence >= 'medium'

5. **Período de dados** - configure o período corretamente (daily/weekly/monthly/quarterly)

---

## API Reference

### KPICalculationEngine

```typescript
class KPICalculationEngine {
  // Calcula um único KPI
  calculateSingle(
    kpiCode: string,
    rawData: Record<string, number | number[]>,
  ): KPIResult;

  // Calcula múltiplos KPIs
  calculateMultiple(
    kpiCodes: string[],
    rawData: Record<string, number | number[]>,
  ): KPIResultSet;

  // Calcula todos KPIs do setor
  calculateAllForSector(
    rawData: Record<string, number | number[]>,
  ): KPIResultSet;

  // Retorna KPIs disponíveis com readiness
  getAvailableKPIs(
    rawData: Record<string, number | number[]>,
  ): { code; title; readiness }[];

  // Sugere próximos campos para coletar
  getSuggestedNextSteps(
    rawData: Record<string, number | number[]>,
  ): { field; description; impact }[];
}
```

### KPIResult

```typescript
interface KPIResult {
  code: string; // ex: "TECH-CHURN-001"
  title: string; // ex: "Taxa de cancelamento de clientes"
  value: number | null; // Valor calculado ou null
  unit: Unit; // "currency" | "percent" | "ratio" | "count"
  status: "critical" | "warning" | "good" | "unknown";
  trend: "up" | "down" | "stable" | "unknown";
  confidence: ConfidenceLevel;
  calculationStatus: CalculationStatus;
  previousValue?: number;
  change?: number;
  threshold?: KPIThreshold;
  calculatedAt: Date;
  error?: string;
  warnings: string[];
}
```

---

## Evolução Futura

- [ ] Adicionar KPIs para setores Education, Real Estate, Media
- [ ] Implementar predições com ML (KPI Predictions)
- [ ] Detecção de anomalias automáticas
- [ ] Integração com mais fontes de dados (ERP, CRM)
- [ ] Histórico de cálculos e tendências
- [ ] Comparação com benchmarks do setor
