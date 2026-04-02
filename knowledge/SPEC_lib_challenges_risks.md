# Biblioteca de Desafios e Riscos — SuperRelatórios

**Tabela:** `library_challenges` (type = risk)
**Total:** 15 riscos | **Status:** 4 existem, 11 a criar

---

## Riscos Existentes (4)

| Código                      | Nome                                      | Domínio    | Severidade |
| --------------------------- | ----------------------------------------- | ---------- | ---------- |
| `CASH_FLOW_CRUNCH`          | O dinheiro não chega ao fim do mês        | finance    | 5          |
| `INEFFICIENT_SALES_MACHINE` | Esforço de vendas alto para pouco retorno | commercial | 4          |
| `COMMODITY_TRAP`            | Guerra de preços e margens espremidas     | strategy   | 4          |
| `DELIVERY_DELAY`            | Atraso na Operação                        | operations | 3          |

---

## Riscos a Criar (11)

### CUSTOMER_LOSS — Perda Acelerada de Clientes

- **Domínio:** commercial | **Severidade:** 4
- **Descrição:** A base de clientes está encolhendo mais rápido do que cresce. Cada cliente perdido representa receita recorrente eliminada e CAC desperdiçado.
- **Sintomas:** Churn > 8%/mês, NPS < 20, reclamações crescentes, cancelamentos sem motivo claro
- **KPIs gatilho:** `CHURN_RATE`, `NPS`, `RETENTION_RATE`, `REPURCHASE_RATE`
- **Thresholds:** critical: churn > 10%, warning: churn 5-10%, good: churn < 3%
- **Objetivo recomendado:** `SCALABLE_GROWTH`

### STOCK_STAGNATION — Estoque Parado e Capital Imobilizado

- **Domínio:** operations | **Severidade:** 3
- **Descrição:** Capital preso em produtos que não giram. Cada real no estoque parado é um real que não gera receita nem juros.
- **Sintomas:** Giro de estoque < 4x/ano, produtos sem venda há 90+ dias, capital de giro negativo
- **KPIs gatilho:** `INVENTORY_TURNOVER`, `DEAD_STOCK_RATIO`, `WORKING_CAPITAL`
- **Thresholds:** critical: giro < 2x/ano, warning: giro 2-6x/ano, good: giro > 8x/ano
- **Objetivo recomendado:** `PROFIT_MAXIMIZER`

### HIGH_FIXED_COSTS — Estrutura de Custos Fixos Pesada

- **Domínio:** finance | **Severidade:** 3
- **Descrição:** Os custos fixos consomem a maior parte da receita antes de qualquer lucro. A empresa precisa de volume muito alto para cobrir a estrutura.
- **Sintomas:** Custos fixos > 60% da receita, break-even muito alto, margens comprimidas em meses fracos
- **KPIs gatilho:** `FIXED_COST_RATIO`, `BREAK_EVEN`, `OPERATING_LEVERAGE`
- **Thresholds:** critical: fixos > 70%, warning: fixos 50-70%, good: fixos < 40%
- **Objetivo recomendado:** `CASH_SAFETY_NET`

### LATE_RECEIVABLES — Ciclo de Recebimento Longo

- **Domínio:** finance | **Severidade:** 3
- **Descrição:** A empresa vende mas demora muito para receber. O dinheiro fica preso nos clientes enquanto os fornecedores precisam ser pagos.
- **Sintomas:** PMR > 60 dias, inadimplência crescente, necessidade de capital de giro aumentando
- **KPIs gatilho:** `DAYS_TO_RECEIVE`, `CASH_CONVERSION_CYCLE`, `WORKING_CAPITAL`
- **Thresholds:** critical: PMR > 90 dias, warning: PMR 45-90 dias, good: PMR < 30 dias
- **Objetivo recomendado:** `CASH_SAFETY_NET`

### HIGH_ACQUISITION_COST — Custo de Aquisição Acima do Sustentável

- **Domínio:** marketing | **Severidade:** 3
- **Descrição:** Cada novo cliente custa mais do que deveria. O modelo de crescimento está queimando caixa sem retorno proporcional.
- **Sintomas:** CAC > LTV/3, LTV/CAC < 2, ROAS < 2x, payback period > 18 meses
- **KPIs gatilho:** `CAC`, `LTV_CAC_RATIO`, `ROAS`, `SALES_CYCLE_DAYS`
- **Thresholds:** critical: LTV/CAC < 1.5, warning: LTV/CAC 1.5-2.5, good: LTV/CAC > 3
- **Objetivo recomendado:** `SCALABLE_GROWTH`

### TEAM_INEFFICIENCY — Baixa Produtividade por Colaborador

- **Domínio:** people | **Severidade:** 3
- **Descrição:** A equipe não está gerando o retorno esperado. O custo de pessoal é alto em relação à receita gerada.
- **Sintomas:** Receita/funcionário < 50% do benchmark, folha > 40% da receita, horas extras excessivas
- **KPIs gatilho:** `PRODUCTIVITY_PER_EMPLOYEE`, `LABOR_COST_PCT`, `OVERTIME_RATIO`
- **Thresholds:** critical: receita/func < R$5k/mês, warning: R$5-15k/mês, good: > R$20k/mês
- **Objetivo recomendado:** `PROFIT_MAXIMIZER`

### GROWTH_STAGNATION — Crescimento Estagnado ou em Declínio

- **Domínio:** strategy | **Severidade:** 4
- **Descrição:** A empresa parou de crescer. Sem crescimento, a inflação e os custos crescentes corroem as margens progressivamente.
- **Sintomas:** Crescimento < 0% por 3 meses, perda de market share, pipeline encolhendo
- **KPIs gatilho:** `REVENUE_GROWTH`, `PIPELINE_VALUE`, `CUSTOMER_RETENTION_RATE`
- **Thresholds:** critical: crescimento < -5%, warning: crescimento 0-5%, good: crescimento > 15%
- **Objetivo recomendado:** `SCALABLE_GROWTH`

### MARGIN_COMPRESSION — Margens em Queda Consistente

- **Domínio:** finance | **Severidade:** 4
- **Descrição:** As margens estão caindo mês a mês. Se a tendência continuar, a empresa chegará ao prejuízo sem perceber.
- **Sintomas:** Margem bruta caindo > 2pp/mês por 3 meses, custos crescendo mais que receita
- **KPIs gatilho:** `GROSS_MARGIN`, `EBITDA_MARGIN`, `CONTRIBUTION_MARGIN`
- **Thresholds:** critical: margem bruta < 20%, warning: margem bruta 20-35%, good: > 45%
- **Objetivo recomendado:** `PROFIT_MAXIMIZER`

### HIGH_DEBT — Endividamento Comprometendo a Operação

- **Domínio:** finance | **Severidade:** 4
- **Descrição:** As dívidas estão consumindo o fluxo de caixa. O serviço da dívida compete com os investimentos necessários para crescer.
- **Sintomas:** D/E > 3x, cobertura de dívida < 1.2x, juros > 10% da receita
- **KPIs gatilho:** `DEBT_TO_EQUITY`, `DEBT_SERVICE_COVERAGE`, `INTEREST_COVERAGE`
- **Thresholds:** critical: D/E > 5x, warning: D/E 2-5x, good: D/E < 1.5x
- **Objetivo recomendado:** `CASH_SAFETY_NET`

### SUPPLIER_RISK — Dependência Excessiva de Fornecedores

- **Domínio:** operations | **Severidade:** 3
- **Descrição:** A empresa depende de poucos fornecedores críticos. Uma ruptura na cadeia de suprimentos pode paralisar a operação.
- **Sintomas:** Top 3 fornecedores > 80% das compras, lead time crescendo, atrasos frequentes
- **KPIs gatilho:** `LEAD_TIME_SUPPLIER`, `ON_TIME_DELIVERY`, `FILL_RATE`
- **Thresholds:** critical: 1 fornecedor > 60%, warning: top 3 > 70%, good: top 3 < 50%
- **Objetivo recomendado:** `FAST_OPERATION`

### TALENT_DRAIN — Rotatividade Alta Comprometendo a Operação

- **Domínio:** people | **Severidade:** 3
- **Descrição:** A empresa perde talentos mais rápido do que consegue repor. O conhecimento acumulado vai embora junto com cada saída.
- **Sintomas:** Turnover > 30%/ano, tempo para contratar > 60 dias, custo de reposição alto
- **KPIs gatilho:** `EMPLOYEE_TURNOVER`, `TIME_TO_HIRE`, `COST_PER_HIRE`
- **Thresholds:** critical: turnover > 50%/ano, warning: 20-50%/ano, good: < 15%/ano
- **Objetivo recomendado:** `HIGH_PERFORMANCE`

---

## Mapeamento Desafio → Objetivo → Alavancas

| Desafio                     | Objetivo           | Alavancas Principais                                            |
| --------------------------- | ------------------ | --------------------------------------------------------------- |
| `CASH_FLOW_CRUNCH`          | `CASH_SAFETY_NET`  | Renegociar fornecedores, régua de cobrança, corte de custos     |
| `INEFFICIENT_SALES_MACHINE` | `SCALABLE_GROWTH`  | Auditoria de canais, otimização do funil, programa de indicação |
| `COMMODITY_TRAP`            | `PROFIT_MAXIMIZER` | Revisão de mix, precificação dinâmica, serviços agregados       |
| `CUSTOMER_LOSS`             | `SCALABLE_GROWTH`  | Programa de retenção, NPS ativo, onboarding estruturado         |
| `STOCK_STAGNATION`          | `PROFIT_MAXIMIZER` | Liquidação de estoque parado, revisão de compras, just-in-time  |
| `HIGH_FIXED_COSTS`          | `CASH_SAFETY_NET`  | Revisão de contratos, terceirização, automação                  |
| `LATE_RECEIVABLES`          | `CASH_SAFETY_NET`  | Antecipação de recebíveis, desconto para pagamento antecipado   |
| `HIGH_ACQUISITION_COST`     | `SCALABLE_GROWTH`  | Otimização de canais, referral, inbound marketing               |
| `DELIVERY_DELAY`            | `FAST_OPERATION`   | Mapeamento de gargalos, priorização, SOPs                       |
| `TEAM_INEFFICIENCY`         | `PROFIT_MAXIMIZER` | Treinamento, automação, revisão de processos                    |
| `GROWTH_STAGNATION`         | `SCALABLE_GROWTH`  | Novos mercados, novos produtos, expansão geográfica             |
| `MARGIN_COMPRESSION`        | `PROFIT_MAXIMIZER` | Revisão de preços, mix de produtos, redução de custos variáveis |
| `HIGH_DEBT`                 | `CASH_SAFETY_NET`  | Refinanciamento, geração de caixa, venda de ativos              |
| `SUPPLIER_RISK`             | `FAST_OPERATION`   | Diversificação de fornecedores, estoque de segurança            |
| `TALENT_DRAIN`              | `HIGH_PERFORMANCE` | Plano de carreira, benefícios, cultura organizacional           |
