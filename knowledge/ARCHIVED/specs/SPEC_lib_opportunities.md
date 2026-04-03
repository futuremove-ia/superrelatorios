# Biblioteca de Oportunidades — SuperRelatórios

**Tabela:** `library_challenges` (type = opportunity)
**Total:** 20 oportunidades | **Status:** 0 existem — criar do zero

---

## Princípio

Uma oportunidade é algo bom que a empresa ainda não está aproveitando. Detectada quando KPIs estão acima do benchmark ou quando há gap entre indicadores relacionados.

---

## Oportunidades (20)

### OPP_UPSELL_BASE — Upsell na Base Existente

- **Domínio:** commercial | **Potencial:** +25-40% LTV
- **Descrição:** Sua taxa de retenção é alta, mas a receita de expansão é zero. Clientes satisfeitos raramente recusam upgrades bem posicionados.
- **Condição de detecção:** `CHURN_RATE` ≤ 3% E `EXPANSION_REVENUE` = 0 E `UPSELL_RATE` < 5%
- **Alavancas:** `LEV_UPSELL`, `LEV_CROSS_SELL`, `LEV_TICKET_INCREASE`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_TICKET_EXPANSION — Aumento de Ticket Médio

- **Domínio:** commercial | **Potencial:** +20-40% receita sem novos clientes
- **Descrição:** Seu ticket médio está abaixo do benchmark do setor, mas sua retenção é alta. Clientes fiéis aceitam pagar mais por mais valor.
- **Condição de detecção:** `AVG_TICKET` < benchmark_setor E `RETENTION_RATE` > 85%
- **Alavancas:** `LEV_PRICING_POWER`, `LEV_PREMIUM_SEGMENT`, `LEV_TICKET_INCREASE`
- **Objetivo:** `PROFIT_MAXIMIZER`

### OPP_PRICING_POWER — Poder de Precificação Não Explorado

- **Domínio:** commercial | **Potencial:** +10-20% receita
- **Descrição:** Margem alta + retenção alta + NPS alto = você pode aumentar preços. Clientes que ficam e recomendam raramente são sensíveis a preço.
- **Condição de detecção:** `GROSS_MARGIN` ≥ 60% E `CHURN_RATE` ≤ 3% E `NPS` ≥ 40
- **Alavancas:** `LEV_PRICING_POWER`, `LEV_VALUE_BASED_PRICING`
- **Objetivo:** `PROFIT_MAXIMIZER`

### OPP_REFERRAL_PROGRAM — Programa de Indicação

- **Domínio:** marketing | **Potencial:** -30-40% CAC
- **Descrição:** NPS alto com taxa de indicação baixa é dinheiro deixado na mesa. Clientes promotores indicam quando incentivados corretamente.
- **Condição de detecção:** `NPS` ≥ 40 E `REFERRAL_RATE` < 5%
- **Alavancas:** `LEV_REFERRAL_PROGRAM`, `LEV_DIGITAL_CHANNEL`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_CHANNEL_OPTIMIZATION — Canal de Aquisição Subexplorado

- **Domínio:** marketing | **Potencial:** -30% CAC
- **Descrição:** Um canal está performando muito acima dos outros mas recebe pouco investimento. Realocar budget pode multiplicar resultados.
- **Condição de detecção:** `ROAS` > 5x em algum canal com investimento < 20% do total
- **Alavancas:** `LEV_CHANNEL_INVEST`, `LEV_DIGITAL_CHANNEL`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_RECEIVABLES_ACCELERATION — Aceleração de Recebíveis

- **Domínio:** finance | **Potencial:** +15-25% capital de giro
- **Descrição:** PMR alto com clientes de baixo risco é capital de giro desnecessariamente imobilizado. Desconto para pagamento antecipado pode ser mais barato que capital de giro.
- **Condição de detecção:** `DAYS_TO_RECEIVE` ≥ 30 E `CHURN_RATE` ≤ 5%
- **Alavancas:** `LEV_RECEIVABLES_ACCELERATION`, `LEV_CASH_CYCLE`
- **Objetivo:** `CASH_SAFETY_NET`

### OPP_PRODUCTIVITY_SCALE — Escalar sem Contratar

- **Domínio:** people | **Potencial:** +20-30% crescimento sem headcount
- **Descrição:** Produtividade acima da média significa que você pode crescer mais sem contratar proporcionalmente. Automatize o que está funcionando.
- **Condição de detecção:** `PRODUCTIVITY_PER_EMPLOYEE` > benchmark_setor + 20% E `REVENUE_GROWTH` ≥ 15%
- **Alavancas:** `LEV_AUTOMATION`, `LEV_TEAM_PRODUCTIVITY`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_MARGIN_ADVANTAGE — Margem Acima da Média do Setor

- **Domínio:** finance | **Potencial:** Monetizar vantagem competitiva
- **Descrição:** Sua margem está acima do benchmark. Isso indica vantagem competitiva real — use para investir em crescimento ou distribuir resultados.
- **Condição de detecção:** `GROSS_MARGIN` > benchmark_setor + 10pp
- **Alavancas:** `LEV_GROWTH_INVESTMENT`, `LEV_MARKET_EXPANSION`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_RETENTION_LEVERAGE — Alta Retenção como Alavanca

- **Domínio:** commercial | **Potencial:** Base para programa de referral e upsell
- **Descrição:** Retenção acima de 90% é um ativo estratégico. Poucos negócios têm isso. Use para construir crescimento orgânico.
- **Condição de detecção:** `RETENTION_RATE` > 90% E `NPS` > 50
- **Alavancas:** `LEV_REFERRAL_PROGRAM`, `LEV_UPSELL`, `LEV_COMMUNITY`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_DIGITAL_CHANNEL — Canal Digital Subexplorado

- **Domínio:** marketing | **Potencial:** +30% alcance sem custo proporcional
- **Descrição:** Receita digital abaixo de 20% do total indica oportunidade de escala. Digital tem custo marginal próximo de zero.
- **Condição de detecção:** `DIGITAL_REVENUE_PCT` < 20%
- **Alavancas:** `LEV_DIGITAL_CHANNEL`, `LEV_CONTENT_MARKETING`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_RECURRING_REVENUE — Potencial de Receita Recorrente

- **Domínio:** strategy | **Potencial:** Previsibilidade + LTV 3-5x maior
- **Descrição:** Clientes que voltam regularmente sem contrato formal são candidatos a assinatura. Formalizar a recorrência aumenta LTV e previsibilidade.
- **Condição de detecção:** `REPURCHASE_RATE` > 60% E `RECURRING_REVENUE_PCT` < 30%
- **Alavancas:** `LEV_SUBSCRIPTION_MODEL`, `LEV_RECURRING_MODEL`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_CROSS_SELL — Cross-sell na Base

- **Domínio:** commercial | **Potencial:** +15-25% receita por cliente
- **Descrição:** Clientes que compram um produto raramente exploram o portfólio completo. Cross-sell bem feito aumenta LTV sem custo de aquisição.
- **Condição de detecção:** `CROSS_SELL_RATE` < 10% E portfólio com 3+ produtos
- **Alavancas:** `LEV_CROSS_SELL`, `LEV_BUNDLE_PRICING`
- **Objetivo:** `PROFIT_MAXIMIZER`

### OPP_GEOGRAPHIC_EXPANSION — Expansão Geográfica Viável

- **Domínio:** strategy | **Potencial:** Novo mercado com modelo validado
- **Descrição:** Crescimento forte em uma região com concentração geográfica alta indica que o modelo funciona e pode ser replicado.
- **Condição de detecção:** `REVENUE_GROWTH` > 20%/ano E concentração geográfica > 80%
- **Alavancas:** `LEV_GEOGRAPHIC_EXPANSION`, `LEV_FRANCHISE_MODEL`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_AUTOMATION — Processos Manuais Automatizáveis

- **Domínio:** operations | **Potencial:** +20% capacidade sem contratar
- **Descrição:** Retrabalho alto + produtividade baixa = processos manuais que podem ser automatizados. Cada hora economizada é hora vendável.
- **Condição de detecção:** `REWORK_RATE` > 10% E `PRODUCTIVITY_PER_EMPLOYEE` < benchmark
- **Alavancas:** `LEV_AUTOMATION`, `LEV_PROCESS_REDESIGN`
- **Objetivo:** `FAST_OPERATION`

### OPP_INVENTORY_OPTIMIZATION — Otimização de Estoque

- **Domínio:** operations | **Potencial:** Liberar capital imobilizado
- **Descrição:** Giro de estoque alto com capital de giro negativo indica que o estoque pode ser reduzido sem impacto nas vendas.
- **Condição de detecção:** `INVENTORY_TURNOVER` > 8x/ano E `WORKING_CAPITAL` < 0
- **Alavancas:** `LEV_INVENTORY_OPTIMIZATION`, `LEV_JUST_IN_TIME`
- **Objetivo:** `CASH_SAFETY_NET`

### OPP_PREMIUM_SEGMENT — Segmento Premium Subatendido

- **Domínio:** commercial | **Potencial:** +50% ticket médio
- **Descrição:** Margem alta com ticket baixo vs. concorrentes premium indica que existe um segmento disposto a pagar mais por mais valor.
- **Condição de detecção:** `GROSS_MARGIN` > 60% E `AVG_TICKET` < 50% do concorrente premium
- **Alavancas:** `LEV_PREMIUM_SEGMENT`, `LEV_VALUE_BASED_PRICING`
- **Objetivo:** `PROFIT_MAXIMIZER`

### OPP_PARTNERSHIP_REVENUE — Receita via Parcerias

- **Domínio:** strategy | **Potencial:** Novo canal sem custo de aquisição
- **Descrição:** Base de clientes grande sem programa de parcerias é oportunidade de distribuição. Parceiros vendem para você sem custo fixo.
- **Condição de detecção:** `PARTNERSHIP_REVENUE` = 0 E base de clientes > 500
- **Alavancas:** `LEV_PARTNERSHIP_PROGRAM`, `LEV_CHANNEL_PARTNERS`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_COST_REDUCTION — Estrutura de Custos Otimizável

- **Domínio:** finance | **Potencial:** +5-10pp de margem
- **Descrição:** Custos fixos altos com margem de contribuição alta indicam que há espaço para renegociar contratos e reduzir overhead sem impactar receita.
- **Condição de detecção:** `FIXED_COST_RATIO` > 50% E `CONTRIBUTION_MARGIN` > 60%
- **Alavancas:** `LEV_FIXED_COST`, `LEV_RENEGOTIATION`
- **Objetivo:** `PROFIT_MAXIMIZER`

### OPP_SUBSCRIPTION_MODEL — Migração para Assinatura

- **Domínio:** strategy | **Potencial:** Previsibilidade + LTV 3-5x
- **Descrição:** Clientes recorrentes sem contrato formal são o primeiro passo para um modelo de assinatura. A transição aumenta previsibilidade e LTV.
- **Condição de detecção:** `REPURCHASE_RATE` > 50% E `RECURRING_REVENUE_PCT` < 20%
- **Alavancas:** `LEV_SUBSCRIPTION_MODEL`, `LEV_ANNUAL_PLAN`
- **Objetivo:** `SCALABLE_GROWTH`

### OPP_DATA_MONETIZATION — Dados como Ativo Estratégico

- **Domínio:** strategy | **Potencial:** Insights competitivos e novos produtos
- **Descrição:** 2+ anos de dados históricos com padrões identificáveis são um ativo que pode gerar insights para novos produtos ou serviços de dados.
- **Condição de detecção:** 24+ meses de dados em `user_metrics` com consistência > 80%
- **Alavancas:** `LEV_DATA_PRODUCTS`, `LEV_ANALYTICS_SERVICE`
- **Objetivo:** `SCALABLE_GROWTH`
