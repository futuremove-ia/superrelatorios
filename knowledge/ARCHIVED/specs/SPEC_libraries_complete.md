# Bibliotecas do SuperRelatórios — Documento Completo

**Data:** 2026-04-02 | **Versão:** 1.0

---

## Diagnóstico Geral

| Biblioteca           | Tabela                    | Atual   | Meta | Status      |
| -------------------- | ------------------------- | ------- | ---- | ----------- |
| KPIs                 | `library_kpis`            | ~25     | 145+ | 🔴 Expandir |
| Desafios/Riscos      | `library_challenges`      | 4       | 15   | 🔴 Expandir |
| Oportunidades        | `library_challenges`      | 0       | 20   | 🔴 Criar    |
| Objetivos            | `library_goals`           | 4       | 12   | � Expandir  |
| Alavancas            | `library_levers`          | ~10     | 50+  | � Expandir  |
| Ações                | `library_actions`         | ~10     | 150+ | 🔴 Expandir |
| Diagnósticos         | `library_diagnoses`       | 0       | 35   | 🔴 Criar    |
| Impactos             | `library_impacts`         | 0       | 50+  | 🔴 Criar    |
| Benchmarks Setoriais | `industry_benchmarks`     | ~15     | 200+ | 🔴 Expandir |
| Templates por Setor  | `industry_templates`      | 0       | 15   | 🔴 Criar    |
| Timeframes           | `library_timeframes`      | 0       | 8    | 🔴 Criar    |
| Complexidades        | `library_complexities`    | 0       | 5    | 🔴 Criar    |
| Glossário UI         | `ui_translation_glossary` | 0       | 100+ | 🟡 Criar    |
| Riscos PME           | `library_risks_pme`       | parcial | 30   | 🟡 Expandir |
| Alavancas PME        | `library_levers_pme`      | parcial | 40   | 🟡 Expandir |

---

## 1. KPIs Core (18 — toda PME, sempre ativos)

| Código                      | Nome                       | Fórmula                                     | Unidade | Domínio    |
| --------------------------- | -------------------------- | ------------------------------------------- | ------- | ---------- |
| `NET_PROFIT_MARGIN`         | Margem Líquida             | `(Lucro Líquido / Receita) * 100`           | %       | finance    |
| `GROSS_MARGIN`              | Margem Bruta               | `(Receita - CMV) / Receita * 100`           | %       | finance    |
| `BURN_RATE`                 | Queima de Caixa            | `Saídas Operacionais Mensais`               | R$      | finance    |
| `RUNWAY_MONTHS`             | Pista de Decolagem         | `Caixa / Burn Rate`                         | meses   | finance    |
| `REVENUE_GROWTH`            | Crescimento de Receita     | `(Atual - Anterior) / Anterior * 100`       | %       | finance    |
| `OPERATING_CASH_FLOW`       | Fluxo de Caixa Operacional | `Lucro + Depreciação ± Capital de Giro`     | R$      | finance    |
| `WORKING_CAPITAL`           | Capital de Giro            | `Ativos Circulantes - Passivos Circulantes` | R$      | finance    |
| `DAYS_TO_RECEIVE`           | Prazo Médio de Recebimento | `Contas a Receber / (Receita / 30)`         | dias    | finance    |
| `DAYS_TO_PAY`               | Prazo Médio de Pagamento   | `Contas a Pagar / (CMV / 30)`               | dias    | finance    |
| `CASH_CONVERSION_CYCLE`     | Ciclo de Caixa             | `PMR + PME - PMP`                           | dias    | finance    |
| `CAC`                       | Custo de Aquisição         | `(Mkt + Vendas) / Novos Clientes`           | R$      | commercial |
| `LTV`                       | Lifetime Value             | `Ticket × Frequência × Tempo de Vida`       | R$      | commercial |
| `LTV_CAC_RATIO`             | Relação LTV/CAC            | `LTV / CAC`                                 | ratio   | commercial |
| `CHURN_RATE`                | Taxa de Cancelamento       | `(Clientes Perdidos / Total) * 100`         | %       | commercial |
| `AVG_TICKET`                | Ticket Médio               | `Receita / Número de Vendas`                | R$      | commercial |
| `SALES_CONVERSION`          | Taxa de Conversão          | `(Fechamentos / Propostas) * 100`           | %       | commercial |
| `PRODUCTIVITY_PER_EMPLOYEE` | Receita por Funcionário    | `Receita / Headcount`                       | R$      | people     |
| `LABOR_COST_PCT`            | Peso da Folha              | `(Folha / Receita) * 100`                   | %       | people     |

---

## 2. KPIs por Domínio (127 adicionais)

### Finance (25 KPIs Domain/Advanced)

| Código                         | Nome                              | Fórmula                                        | Tier     |
| ------------------------------ | --------------------------------- | ---------------------------------------------- | -------- |
| `EBITDA_MARGIN`                | Margem EBITDA                     | `EBITDA / Receita * 100`                       | Domain   |
| `CONTRIBUTION_MARGIN`          | Margem de Contribuição            | `(Receita - Custos Variáveis) / Receita * 100` | Domain   |
| `BREAK_EVEN`                   | Ponto de Equilíbrio               | `Custos Fixos / Margem de Contribuição`        | Domain   |
| `DEBT_TO_EQUITY`               | Endividamento                     | `Dívidas Totais / Patrimônio Líquido`          | Domain   |
| `CURRENT_RATIO`                | Liquidez Corrente                 | `Ativos Circulantes / Passivos Circulantes`    | Domain   |
| `QUICK_RATIO`                  | Liquidez Seca                     | `(AC - Estoques) / Passivos Circulantes`       | Domain   |
| `DEBT_SERVICE_COVERAGE`        | Cobertura de Dívida               | `EBITDA / Serviço da Dívida`                   | Domain   |
| `INTEREST_COVERAGE`            | Cobertura de Juros                | `EBIT / Despesas Financeiras`                  | Domain   |
| `FIXED_COST_RATIO`             | Peso dos Custos Fixos             | `Custos Fixos / Receita * 100`                 | Domain   |
| `VARIABLE_COST_RATIO`          | Peso dos Custos Variáveis         | `Custos Variáveis / Receita * 100`             | Domain   |
| `OPERATING_LEVERAGE`           | Alavancagem Operacional           | `Margem de Contribuição / EBIT`                | Advanced |
| `FINANCIAL_LEVERAGE`           | Alavancagem Financeira            | `EBIT / EBT`                                   | Advanced |
| `ROE`                          | Retorno sobre Patrimônio          | `Lucro Líquido / Patrimônio Líquido * 100`     | Advanced |
| `ROA`                          | Retorno sobre Ativos              | `Lucro Líquido / Ativos Totais * 100`          | Advanced |
| `ROIC`                         | Retorno sobre Capital Investido   | `NOPAT / Capital Investido * 100`              | Advanced |
| `INVENTORY_DAYS`               | Prazo Médio de Estoque            | `Estoque / (CMV / 30)`                         | Domain   |
| `ACCOUNTS_RECEIVABLE_TURNOVER` | Giro de Recebíveis                | `Receita / Contas a Receber`                   | Domain   |
| `ACCOUNTS_PAYABLE_TURNOVER`    | Giro de Pagáveis                  | `CMV / Contas a Pagar`                         | Domain   |
| `ASSET_TURNOVER`               | Giro do Ativo                     | `Receita / Ativos Totais`                      | Advanced |
| `CAPEX_RATIO`                  | Intensidade de Capex              | `Capex / Receita * 100`                        | Domain   |
| `FREE_CASH_FLOW`               | Fluxo de Caixa Livre              | `FCO - Capex`                                  | Advanced |
| `NET_WORKING_CAPITAL_DAYS`     | Necessidade de Capital de Giro    | `(PMR + PME - PMP) * Receita Diária`           | Advanced |
| `TAX_EFFECTIVE_RATE`           | Carga Tributária Efetiva          | `Impostos Pagos / Receita Bruta * 100`         | Domain   |
| `SIMPLES_ALIQUOTA`             | Alíquota Efetiva Simples Nacional | `DAS Pago / Receita Bruta * 100`               | Segment  |
| `LUCRO_PRESUMIDO_RATE`         | Alíquota Efetiva Lucro Presumido  | `Impostos / Receita * 100`                     | Segment  |

### Commercial (20 KPIs Domain)

| Código                     | Nome                        | Fórmula                                             | Tier    |
| -------------------------- | --------------------------- | --------------------------------------------------- | ------- |
| `SALES_CYCLE_DAYS`         | Ciclo de Vendas             | `Média de dias do primeiro contato ao fechamento`   | Domain  |
| `PIPELINE_COVERAGE`        | Cobertura de Pipeline       | `Pipeline / Meta Mensal`                            | Domain  |
| `PIPELINE_VALUE`           | Valor do Pipeline           | `Soma das oportunidades em aberto`                  | Domain  |
| `WIN_RATE`                 | Taxa de Ganho               | `Negócios Ganhos / Total de Oportunidades * 100`    | Domain  |
| `LOSS_RATE`                | Taxa de Perda               | `Negócios Perdidos / Total de Oportunidades * 100`  | Domain  |
| `SALES_PER_EMPLOYEE`       | Vendas por Vendedor         | `Receita / Número de Vendedores`                    | Domain  |
| `QUOTA_ATTAINMENT`         | Atingimento de Meta         | `Vendas Realizadas / Meta * 100`                    | Domain  |
| `AVERAGE_DEAL_SIZE`        | Tamanho Médio do Negócio    | `Receita Total / Número de Negócios`                | Domain  |
| `REVENUE_PER_CUSTOMER`     | Receita por Cliente         | `Receita Total / Clientes Ativos`                   | Domain  |
| `CUSTOMER_RETENTION_RATE`  | Taxa de Retenção            | `(Clientes Final - Novos) / Clientes Início * 100`  | Domain  |
| `NET_REVENUE_RETENTION`    | Retenção de Receita Líquida | `(MRR Final - Churn + Expansão) / MRR Início * 100` | Segment |
| `EXPANSION_REVENUE`        | Receita de Expansão         | `Upsell + Cross-sell no período`                    | Domain  |
| `UPSELL_RATE`              | Taxa de Upsell              | `Clientes com Upgrade / Total Clientes * 100`       | Domain  |
| `CROSS_SELL_RATE`          | Taxa de Cross-sell          | `Clientes com Produto Adicional / Total * 100`      | Domain  |
| `REPURCHASE_RATE`          | Taxa de Recompra            | `Clientes que Voltaram / Total Clientes * 100`      | Domain  |
| `FIRST_PURCHASE_TO_SECOND` | Tempo até 2ª Compra         | `Média de dias entre 1ª e 2ª compra`                | Domain  |
| `CUSTOMER_CONCENTRATION`   | Concentração de Clientes    | `Receita Top 3 Clientes / Receita Total * 100`      | Domain  |
| `CHANNEL_MIX`              | Mix de Canais               | `% Receita por Canal de Venda`                      | Domain  |
| `PROPOSAL_TO_CLOSE`        | Proposta para Fechamento    | `Dias médios da proposta ao contrato`               | Domain  |
| `LEAD_RESPONSE_TIME`       | Tempo de Resposta ao Lead   | `Horas médias para primeiro contato`                | Domain  |

### Marketing (18 KPIs Domain)

| Código                         | Nome                        | Fórmula                                             | Tier     |
| ------------------------------ | --------------------------- | --------------------------------------------------- | -------- |
| `ROAS`                         | Retorno sobre Anúncios      | `Receita de Anúncios / Investimento em Anúncios`    | Domain   |
| `CPL`                          | Custo por Lead              | `Investimento / Leads Gerados`                      | Domain   |
| `LEAD_TO_CUSTOMER`             | Conversão Lead para Cliente | `Clientes / Leads * 100`                            | Domain   |
| `MQL_TO_SQL`                   | Conversão MQL para SQL      | `SQLs / MQLs * 100`                                 | Domain   |
| `ORGANIC_TRAFFIC`              | Tráfego Orgânico            | `Visitantes via busca orgânica`                     | Domain   |
| `PAID_TRAFFIC`                 | Tráfego Pago                | `Visitantes via anúncios`                           | Domain   |
| `WEBSITE_CONVERSION`           | Conversão do Site           | `Leads / Visitantes * 100`                          | Domain   |
| `EMAIL_OPEN_RATE`              | Taxa de Abertura de Email   | `Emails Abertos / Enviados * 100`                   | Domain   |
| `EMAIL_CLICK_RATE`             | Taxa de Clique de Email     | `Cliques / Emails Abertos * 100`                    | Domain   |
| `SOCIAL_ENGAGEMENT`            | Engajamento Social          | `(Curtidas + Comentários + Shares) / Alcance * 100` | Domain   |
| `BRAND_AWARENESS`              | Reconhecimento de Marca     | `% que conhece a marca (pesquisa)`                  | Domain   |
| `NPS`                          | Net Promoter Score          | `% Promotores - % Detratores`                       | Domain   |
| `CSAT`                         | Satisfação do Cliente       | `Avaliações Positivas / Total * 100`                | Domain   |
| `CES`                          | Esforço do Cliente          | `Média da escala de esforço (1-7)`                  | Domain   |
| `REFERRAL_RATE`                | Taxa de Indicação           | `Clientes por Indicação / Total Novos * 100`        | Domain   |
| `CONTENT_ROI`                  | ROI de Conteúdo             | `(Receita Atribuída - Custo) / Custo * 100`         | Advanced |
| `SEO_VISIBILITY`               | Visibilidade SEO            | `Impressões orgânicas no período`                   | Domain   |
| `COST_PER_ACQUISITION_CHANNEL` | CAC por Canal               | `Investimento Canal / Clientes do Canal`            | Domain   |

### Operations (20 KPIs Domain/Segment)

| Código                     | Nome                              | Fórmula                                           | Tier     |
| -------------------------- | --------------------------------- | ------------------------------------------------- | -------- |
| `ORDER_CYCLE_TIME`         | Prazo de Entrega                  | `Data Entrega - Data Pedido (média)`              | Domain   |
| `ON_TIME_DELIVERY`         | Entregas no Prazo                 | `Entregas no Prazo / Total * 100`                 | Domain   |
| `REWORK_RATE`              | Taxa de Retrabalho                | `Serviços Refeitos / Total * 100`                 | Domain   |
| `DEFECT_RATE`              | Taxa de Defeitos                  | `Produtos com Defeito / Total * 100`              | Domain   |
| `CAPACITY_UTILIZATION`     | Uso da Capacidade                 | `Capacidade Usada / Capacidade Total * 100`       | Domain   |
| `OPERATIONAL_EFFICIENCY`   | Eficiência Operacional            | `Output Real / Output Teórico * 100`              | Domain   |
| `INVENTORY_TURNOVER`       | Giro de Estoque                   | `CMV / Estoque Médio`                             | Domain   |
| `DEAD_STOCK_RATIO`         | Estoque Parado                    | `Estoque sem Giro 90d / Estoque Total * 100`      | Domain   |
| `STOCKOUT_RATE`            | Taxa de Ruptura                   | `SKUs em Falta / Total SKUs * 100`                | Domain   |
| `FILL_RATE`                | Taxa de Atendimento               | `Pedidos Atendidos Completos / Total * 100`       | Domain   |
| `LEAD_TIME_SUPPLIER`       | Lead Time de Fornecedor           | `Dias médios do pedido à entrega do fornecedor`   | Domain   |
| `PROCESS_CYCLE_EFFICIENCY` | Eficiência do Ciclo               | `Tempo de Valor Agregado / Lead Time Total * 100` | Advanced |
| `OEE`                      | Efetividade Global do Equipamento | `Disponibilidade x Performance x Qualidade`       | Segment  |
| `COST_PER_UNIT`            | Custo por Unidade                 | `Custo Total de Produção / Unidades Produzidas`   | Domain   |
| `THROUGHPUT`               | Throughput                        | `Unidades produzidas/entregues no período`        | Domain   |
| `WASTE_RATE`               | Taxa de Desperdício               | `Desperdício / Input Total * 100`                 | Segment  |
| `FIRST_PASS_YIELD`         | Rendimento na Primeira Passagem   | `Unidades OK sem retrabalho / Total * 100`        | Segment  |
| `MAINTENANCE_COST_RATIO`   | Custo de Manutenção               | `Custo Manutenção / Receita * 100`                | Segment  |
| `ENERGY_COST_RATIO`        | Custo de Energia                  | `Custo Energia / Receita * 100`                   | Segment  |
| `OUTSOURCING_RATIO`        | Índice de Terceirização           | `Custo Terceiros / Custo Total * 100`             | Domain   |

### People (17 KPIs Domain)

| Código                        | Nome                        | Fórmula                                         | Tier     |
| ----------------------------- | --------------------------- | ----------------------------------------------- | -------- |
| `EMPLOYEE_TURNOVER`           | Rotatividade                | `(Demissões + Pedidos) / Headcount Médio * 100` | Domain   |
| `VOLUNTARY_TURNOVER`          | Turnover Voluntário         | `Pedidos de Demissão / Headcount * 100`         | Domain   |
| `INVOLUNTARY_TURNOVER`        | Turnover Involuntário       | `Demissões pela Empresa / Headcount * 100`      | Domain   |
| `ABSENTEEISM_RATE`            | Taxa de Absenteísmo         | `Dias Ausentes / Dias Úteis Totais * 100`       | Domain   |
| `EMPLOYEE_SATISFACTION`       | Satisfação dos Funcionários | `Média das avaliações de clima`                 | Domain   |
| `ENPS`                        | eNPS                        | `% Promotores - % Detratores (funcionários)`    | Domain   |
| `TRAINING_HOURS_PER_EMPLOYEE` | Horas de Treinamento        | `Total Horas Treinamento / Headcount`           | Domain   |
| `COST_PER_HIRE`               | Custo por Contratação       | `Custo Total Recrutamento / Contratações`       | Domain   |
| `TIME_TO_HIRE`                | Tempo para Contratar        | `Dias médios da vaga ao início`                 | Domain   |
| `TIME_TO_PRODUCTIVITY`        | Tempo para Produtividade    | `Dias até novo funcionário atingir meta`        | Domain   |
| `HEADCOUNT_GROWTH`            | Crescimento do Headcount    | `(Headcount Atual - Anterior) / Anterior * 100` | Domain   |
| `OVERTIME_RATIO`              | Índice de Horas Extras      | `Horas Extras / Horas Normais * 100`            | Domain   |
| `BENEFITS_COST_RATIO`         | Custo de Benefícios         | `Custo Benefícios / Folha Total * 100`          | Domain   |
| `TRAINING_ROI`                | ROI de Treinamento          | `(Ganho de Performance - Custo) / Custo * 100`  | Advanced |
| `INTERNAL_PROMOTION_RATE`     | Taxa de Promoção Interna    | `Promoções Internas / Vagas Abertas * 100`      | Domain   |
| `GENDER_PAY_GAP`              | Gap Salarial de Gênero      | `(Salário Médio Masc - Fem) / Masc * 100`       | Domain   |
| `DIVERSITY_INDEX`             | Índice de Diversidade       | `% de grupos sub-representados no headcount`    | Domain   |

### Strategy (12 KPIs Domain)

| Código                            | Nome                           | Fórmula                                            | Tier     |
| --------------------------------- | ------------------------------ | -------------------------------------------------- | -------- |
| `MARKET_SHARE`                    | Participação de Mercado        | `Receita Empresa / Receita Total do Mercado * 100` | Domain   |
| `MARKET_GROWTH_RATE`              | Crescimento do Mercado         | `(Mercado Atual - Anterior) / Anterior * 100`      | Domain   |
| `COMPETITIVE_WIN_RATE`            | Taxa de Ganho vs. Concorrência | `Negócios Ganhos vs. Concorrente / Total * 100`    | Domain   |
| `INNOVATION_REVENUE_PCT`          | Receita de Inovação            | `Receita de Produtos < 3 anos / Total * 100`       | Domain   |
| `STRATEGIC_INITIATIVE_COMPLETION` | Conclusão de Iniciativas       | `Iniciativas Concluídas / Planejadas * 100`        | Domain   |
| `OKR_ACHIEVEMENT_RATE`            | Atingimento de OKRs            | `Key Results Atingidos / Total * 100`              | Domain   |
| `CUSTOMER_SATISFACTION_INDEX`     | Índice de Satisfação           | `Média ponderada NPS + CSAT + CES`                 | Advanced |
| `BRAND_VALUE_GROWTH`              | Crescimento do Valor de Marca  | `Variação no índice de marca`                      | Advanced |
| `PARTNERSHIP_REVENUE`             | Receita de Parcerias           | `Receita via parceiros / Total * 100`              | Domain   |
| `DIGITAL_REVENUE_PCT`             | Receita Digital                | `Receita Canal Digital / Total * 100`              | Domain   |
| `RECURRING_REVENUE_PCT`           | Receita Recorrente             | `MRR ou ARR / Receita Total * 100`                 | Domain   |
| `GEOGRAPHIC_EXPANSION`            | Expansão Geográfica            | `Número de regiões/países com receita`             | Domain   |

### SaaS/Recorrência (15 KPIs Segment)

| Código                  | Nome                        | Fórmula                                                       |
| ----------------------- | --------------------------- | ------------------------------------------------------------- |
| `MRR`                   | Monthly Recurring Revenue   | `Soma das assinaturas mensais ativas`                         |
| `ARR`                   | Annual Recurring Revenue    | `MRR * 12`                                                    |
| `MRR_GROWTH`            | Crescimento do MRR          | `(MRR Atual - MRR Anterior) / MRR Anterior * 100`             |
| `TRIAL_CONVERSION`      | Conversão de Trial          | `Trials que viraram pagantes / Total Trials * 100`            |
| `ARPU`                  | Receita Média por Usuário   | `MRR / Usuários Ativos`                                       |
| `ARPA`                  | Receita Média por Conta     | `MRR / Contas Ativas`                                         |
| `EXPANSION_MRR`         | MRR de Expansão             | `Upsell + Cross-sell no mês`                                  |
| `CONTRACTION_MRR`       | MRR de Contração            | `Downgrades no mês`                                           |
| `CHURNED_MRR`           | MRR Perdido                 | `MRR de clientes cancelados`                                  |
| `NET_MRR_CHURN`         | Churn Líquido de MRR        | `(Churned MRR - Expansion MRR) / MRR Início * 100`            |
| `LOGO_CHURN`            | Churn de Clientes           | `Clientes Cancelados / Total Clientes * 100`                  |
| `QUICK_RATIO_SAAS`      | Quick Ratio SaaS            | `(New MRR + Expansion MRR) / (Churned MRR + Contraction MRR)` |
| `MAGIC_NUMBER`          | Magic Number                | `Net New ARR / S&M Spend`                                     |
| `RULE_OF_40`            | Regra dos 40                | `Revenue Growth % + EBITDA Margin %`                          |
| `NET_REVENUE_RETENTION` | Retenção de Receita Líquida | `(MRR Final - Churn + Expansão) / MRR Início * 100`           |

---

## 3. Desafios / Riscos (library_challenges — type: risk)

**15 desafios detectáveis. Atualmente: 4. Faltam: 11.**

| Código                      | Nome                                      | Domínio    | Severidade | KPIs Gatilho                           | Condição                   |
| --------------------------- | ----------------------------------------- | ---------- | ---------- | -------------------------------------- | -------------------------- |
| `CASH_FLOW_CRUNCH`          | O dinheiro não chega ao fim do mês        | finance    | 5          | RUNWAY, BURN_RATE                      | RUNWAY <= 3 meses          |
| `INEFFICIENT_SALES_MACHINE` | Esforço de vendas alto para pouco retorno | commercial | 4          | LTV_CAC_RATIO, CAC                     | LTV/CAC <= 1.5             |
| `COMMODITY_TRAP`            | Guerra de preços e margens espremidas     | strategy   | 4          | NET_PROFIT_MARGIN, CONTRIBUTION_MARGIN | Margem <= 5%               |
| `CUSTOMER_LOSS`             | Perda acelerada de clientes               | commercial | 4          | CHURN_RATE, NPS                        | Churn > 8%/mês             |
| `STOCK_STAGNATION`          | Estoque parado e capital imobilizado      | operations | 3          | INVENTORY_TURNOVER, DEAD_STOCK_RATIO   | Giro < 4x/ano              |
| `HIGH_FIXED_COSTS`          | Estrutura de custos fixos pesada          | finance    | 3          | FIXED_COST_RATIO                       | Custos fixos > 60% receita |
| `LATE_RECEIVABLES`          | Ciclo de recebimento longo                | finance    | 3          | DAYS_TO_RECEIVE                        | PMR > 60 dias              |
| `HIGH_ACQUISITION_COST`     | Custo de aquisição acima do sustentável   | marketing  | 3          | CAC, LTV_CAC_RATIO                     | CAC > LTV/3                |
| `DELIVERY_DELAY`            | Atrasos operacionais sistêmicos           | operations | 3          | ORDER_CYCLE_TIME, ON_TIME_DELIVERY     | Prazo > 30 dias            |
| `TEAM_INEFFICIENCY`         | Baixa produtividade por colaborador       | people     | 3          | PRODUCTIVITY_PER_EMPLOYEE              | < 50% benchmark            |
| `GROWTH_STAGNATION`         | Crescimento estagnado ou em declínio      | strategy   | 4          | REVENUE_GROWTH                         | < 0% por 3 meses           |
| `MARGIN_COMPRESSION`        | Margens em queda consistente              | finance    | 4          | GROSS_MARGIN, EBITDA_MARGIN            | Queda > 2pp/mês            |
| `HIGH_DEBT`                 | Endividamento comprometendo operação      | finance    | 4          | DEBT_TO_EQUITY                         | D/E > 3x                   |
| `SUPPLIER_RISK`             | Dependência excessiva de fornecedores     | operations | 3          | SUPPLIER_CONCENTRATION                 | Top 3 > 80% compras        |
| `TALENT_DRAIN`              | Rotatividade alta comprometendo operação  | people     | 3          | EMPLOYEE_TURNOVER                      | Turnover > 30%/ano         |

---

## 4. Oportunidades (library_challenges — type: opportunity)

**20 oportunidades detectáveis. Atualmente: 0. Criar do zero.**

| Código                         | Nome                                        | Domínio    | KPIs Gatilho                           | Condição de Ativação                             | Potencial               |
| ------------------------------ | ------------------------------------------- | ---------- | -------------------------------------- | ------------------------------------------------ | ----------------------- |
| `OPP_TICKET_EXPANSION`         | Potencial de aumento de ticket médio        | commercial | AVG_TICKET, RETENTION_RATE             | Ticket < benchmark E retenção > 85%              | +20-40% LTV             |
| `OPP_UPSELL_BASE`              | Oportunidade de upsell na base existente    | commercial | CHURN_RATE, EXPANSION_REVENUE          | Churn < 3% E expansão = 0                        | +25-40% LTV             |
| `OPP_CHANNEL_OPTIMIZATION`     | Canal de aquisição subexplorado             | marketing  | ROAS, CAC                              | ROAS > 5x em canal com baixo investimento        | -30% CAC                |
| `OPP_MARGIN_IMPROVEMENT`       | Margem acima da média do setor              | finance    | GROSS_MARGIN                           | Margem > benchmark + 10pp                        | Monetizar vantagem      |
| `OPP_RETENTION_LEVERAGE`       | Alta retenção como alavanca de crescimento  | commercial | RETENTION_RATE, NPS                    | Retenção > 90% E NPS > 50                        | Programa de referral    |
| `OPP_PRODUCTIVITY_GAIN`        | Produtividade acima da média setorial       | people     | PRODUCTIVITY_PER_EMPLOYEE              | > benchmark + 20%                                | Escalar sem contratar   |
| `OPP_RECEIVABLES_ACCELERATION` | Ciclo de recebimento acelerável             | finance    | DAYS_TO_RECEIVE                        | PMR > 30 dias com clientes de baixo risco        | +15-25% capital de giro |
| `OPP_COST_REDUCTION`           | Estrutura de custos otimizável              | finance    | FIXED_COST_RATIO                       | Custos fixos > 50% com margem > 60%              | +5-10pp margem          |
| `OPP_PRICING_POWER`            | Poder de precificação não explorado         | commercial | GROSS_MARGIN, CHURN_RATE, NPS          | Margem alta + churn baixo + NPS alto             | +10-20% receita         |
| `OPP_GEOGRAPHIC_EXPANSION`     | Expansão geográfica viável                  | strategy   | REVENUE_GROWTH                         | Crescimento > 20%/ano E concentração > 80%       | Novo mercado            |
| `OPP_DIGITAL_CHANNEL`          | Canal digital subexplorado                  | marketing  | DIGITAL_REVENUE_PCT                    | Receita digital < 20% do total                   | +30% alcance            |
| `OPP_RECURRING_REVENUE`        | Potencial de receita recorrente             | strategy   | RECURRING_REVENUE_PCT                  | Receita recorrente < 30% E churn baixo           | Previsibilidade         |
| `OPP_REFERRAL_PROGRAM`         | Base de clientes satisfeitos para indicação | marketing  | NPS, REFERRAL_RATE                     | NPS > 40 E indicação < 5%                        | -40% CAC                |
| `OPP_AUTOMATION`               | Processos manuais automatizáveis            | operations | PRODUCTIVITY_PER_EMPLOYEE, REWORK_RATE | Produtividade baixa + retrabalho alto            | +20% capacidade         |
| `OPP_INVENTORY_OPTIMIZATION`   | Estoque otimizável para liberar capital     | operations | INVENTORY_TURNOVER, WORKING_CAPITAL    | Giro > 8x/ano com capital de giro negativo       | Libera capital          |
| `OPP_CROSS_SELL`               | Oportunidade de cross-sell na base          | commercial | CROSS_SELL_RATE                        | Cross-sell < 10% E múltiplos produtos            | +15-25% receita         |
| `OPP_PARTNERSHIP_REVENUE`      | Receita via parcerias não explorada         | strategy   | PARTNERSHIP_REVENUE                    | Receita de parcerias = 0 com base > 500 clientes | Novo canal              |
| `OPP_PREMIUM_SEGMENT`          | Segmento premium subatendido                | commercial | AVG_TICKET, GROSS_MARGIN               | Margem alta + ticket baixo vs concorrentes       | +50% ticket             |
| `OPP_SUBSCRIPTION_MODEL`       | Migração para modelo de assinatura          | strategy   | CHURN_RATE, REVENUE_GROWTH             | Clientes recorrentes > 60% sem contrato formal   | Previsibilidade + LTV   |
| `OPP_DATA_MONETIZATION`        | Dados da empresa como ativo estratégico     | strategy   | Dados históricos                       | 2+ anos de dados com padrões identificáveis      | Insights competitivos   |
