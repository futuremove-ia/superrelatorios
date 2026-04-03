# Estratégia de Bibliotecas — SuperRelatórios

## Princípio Central

> "Biblioteca ampla no banco. Uso inteligente e contextual por empresa."

O sistema mantém bibliotecas abrangentes para cobrir o máximo de segmentos, nichos, faixas de faturamento e realidades de PMEs/SMBs. Cada empresa usa apenas os KPIs, desafios e alavancas relevantes para seu contexto — selecionados automaticamente com base nos dados disponíveis, setor e perfil.

---

## 1. Estratégia de KPIs

### 1.1 Princípio de Ativação por Dados

Um KPI só é exibido/calculado para uma empresa quando:

- Os dados necessários para seu cálculo estão disponíveis (extraídos de documentos ou inseridos manualmente)
- O KPI é relevante para o setor/nicho da empresa (via `industry_template`)
- O KPI está marcado como `is_core = true` (sempre exibido) OU foi ativado por dados presentes

```
Dados disponíveis → Motor de Relevância → KPIs ativos para esta empresa
```

### 1.2 Classificação dos KPIs

| Tier         | Descrição                          | Critério de Ativação                             |
| ------------ | ---------------------------------- | ------------------------------------------------ |
| **Core**     | KPIs universais — toda PME precisa | Sempre ativos (`is_core = true`)                 |
| **Domain**   | KPIs por domínio de negócio        | Ativados quando dados do domínio estão presentes |
| **Segment**  | KPIs específicos por setor/nicho   | Ativados via `industry_template`                 |
| **Advanced** | KPIs derivados e compostos         | Ativados quando KPIs base estão calculados       |
| **Custom**   | KPIs criados pela própria empresa  | Sempre ativos para a empresa que criou           |

### 1.3 KPIs Core (Universais — toda PME)

| Código                      | Nome                       | Fórmula                                       | Domínio    |
| --------------------------- | -------------------------- | --------------------------------------------- | ---------- |
| `NET_PROFIT_MARGIN`         | Margem Líquida             | `(Lucro Líquido / Receita) * 100`             | finance    |
| `GROSS_MARGIN`              | Margem Bruta               | `(Receita - CMV) / Receita * 100`             | finance    |
| `BURN_RATE`                 | Queima de Caixa            | `Saídas Operacionais Mensais`                 | finance    |
| `RUNWAY_MONTHS`             | Pista de Decolagem         | `Caixa / Burn Rate`                           | finance    |
| `REVENUE_GROWTH`            | Crescimento de Receita     | `(Receita Atual - Anterior) / Anterior * 100` | finance    |
| `OPERATING_CASH_FLOW`       | Fluxo de Caixa Operacional | `Lucro + Depreciação ± Capital de Giro`       | finance    |
| `WORKING_CAPITAL`           | Capital de Giro            | `Ativos Circulantes - Passivos Circulantes`   | finance    |
| `DAYS_TO_RECEIVE`           | Prazo Médio de Recebimento | `Contas a Receber / (Receita / 30)`           | finance    |
| `DAYS_TO_PAY`               | Prazo Médio de Pagamento   | `Contas a Pagar / (CMV / 30)`                 | finance    |
| `CASH_CONVERSION_CYCLE`     | Ciclo de Caixa             | `PMR + PME - PMP`                             | finance    |
| `CAC`                       | Custo de Aquisição         | `(Mkt + Vendas) / Novos Clientes`             | commercial |
| `LTV`                       | Lifetime Value             | `Ticket Médio * Frequência * Tempo de Vida`   | commercial |
| `LTV_CAC_RATIO`             | Relação LTV/CAC            | `LTV / CAC`                                   | commercial |
| `CHURN_RATE`                | Taxa de Cancelamento       | `(Clientes Perdidos / Total) * 100`           | commercial |
| `AVG_TICKET`                | Ticket Médio               | `Receita / Número de Vendas`                  | commercial |
| `SALES_CONVERSION`          | Taxa de Conversão          | `(Fechamentos / Propostas) * 100`             | commercial |
| `PRODUCTIVITY_PER_EMPLOYEE` | Receita por Funcionário    | `Receita / Headcount`                         | people     |
| `LABOR_COST_PCT`            | Peso da Folha              | `(Folha / Receita) * 100`                     | people     |

### 1.4 KPIs por Domínio (ativados por dados disponíveis)

#### Domínio: Finance (Financeiro)

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

#### Domínio: Commercial (Comercial/Vendas)

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

#### Domínio: Marketing

| Código                         | Nome                      | Fórmula                                             | Tier     |
| ------------------------------ | ------------------------- | --------------------------------------------------- | -------- |
| `ROAS`                         | Retorno sobre Anúncios    | `Receita de Anúncios / Investimento em Anúncios`    | Domain   |
| `CPL`                          | Custo por Lead            | `Investimento / Leads Gerados`                      | Domain   |
| `LEAD_TO_CUSTOMER`             | Conversão Lead → Cliente  | `Clientes / Leads * 100`                            | Domain   |
| `MQL_TO_SQL`                   | Conversão MQL → SQL       | `SQLs / MQLs * 100`                                 | Domain   |
| `ORGANIC_TRAFFIC`              | Tráfego Orgânico          | `Visitantes via busca orgânica`                     | Domain   |
| `PAID_TRAFFIC`                 | Tráfego Pago              | `Visitantes via anúncios`                           | Domain   |
| `WEBSITE_CONVERSION`           | Conversão do Site         | `Leads / Visitantes * 100`                          | Domain   |
| `EMAIL_OPEN_RATE`              | Taxa de Abertura de Email | `Emails Abertos / Enviados * 100`                   | Domain   |
| `EMAIL_CLICK_RATE`             | Taxa de Clique de Email   | `Cliques / Emails Abertos * 100`                    | Domain   |
| `SOCIAL_ENGAGEMENT`            | Engajamento Social        | `(Curtidas + Comentários + Shares) / Alcance * 100` | Domain   |
| `BRAND_AWARENESS`              | Reconhecimento de Marca   | `% que conhece a marca (pesquisa)`                  | Domain   |
| `NPS`                          | Net Promoter Score        | `% Promotores - % Detratores`                       | Domain   |
| `CSAT`                         | Satisfação do Cliente     | `Avaliações Positivas / Total * 100`                | Domain   |
| `CES`                          | Esforço do Cliente        | `Média da escala de esforço (1-7)`                  | Domain   |
| `REFERRAL_RATE`                | Taxa de Indicação         | `Clientes por Indicação / Total Novos * 100`        | Domain   |
| `CONTENT_ROI`                  | ROI de Conteúdo           | `(Receita Atribuída - Custo) / Custo * 100`         | Advanced |
| `SEO_VISIBILITY`               | Visibilidade SEO          | `Impressões orgânicas no período`                   | Domain   |
| `COST_PER_ACQUISITION_CHANNEL` | CAC por Canal             | `Investimento Canal / Clientes do Canal`            | Domain   |

#### Domínio: Operations (Operações)

| Código                            | Nome                            | Fórmula                                           | Tier     |
| --------------------------------- | ------------------------------- | ------------------------------------------------- | -------- |
| `ORDER_CYCLE_TIME`                | Prazo de Entrega                | `Data Entrega - Data Pedido (média)`              | Domain   |
| `ON_TIME_DELIVERY`                | Entregas no Prazo               | `Entregas no Prazo / Total * 100`                 | Domain   |
| `REWORK_RATE`                     | Taxa de Retrabalho              | `Serviços Refeitos / Total * 100`                 | Domain   |
| `DEFECT_RATE`                     | Taxa de Defeitos                | `Produtos com Defeito / Total * 100`              | Domain   |
| `CAPACITY_UTILIZATION`            | Uso da Capacidade               | `Capacidade Usada / Capacidade Total * 100`       | Domain   |
| `OPERATIONAL_EFFICIENCY`          | Eficiência Operacional          | `Output Real / Output Teórico * 100`              | Domain   |
| `INVENTORY_TURNOVER`              | Giro de Estoque                 | `CMV / Estoque Médio`                             | Domain   |
| `DEAD_STOCK_RATIO`                | Estoque Parado                  | `Estoque sem Giro 90d / Estoque Total * 100`      | Domain   |
| `STOCKOUT_RATE`                   | Taxa de Ruptura                 | `SKUs em Falta / Total SKUs * 100`                | Domain   |
| `FILL_RATE`                       | Taxa de Atendimento             | `Pedidos Atendidos Completos / Total * 100`       | Domain   |
| `LEAD_TIME_SUPPLIER`              | Lead Time de Fornecedor         | `Dias médios do pedido à entrega do fornecedor`   | Domain   |
| `PROCESS_CYCLE_EFFICIENCY`        | Eficiência do Ciclo             | `Tempo de Valor Agregado / Lead Time Total * 100` | Advanced |
| `OVERALL_EQUIPMENT_EFFECTIVENESS` | OEE                             | `Disponibilidade * Performance * Qualidade`       | Segment  |
| `COST_PER_UNIT`                   | Custo por Unidade               | `Custo Total de Produção / Unidades Produzidas`   | Domain   |
| `THROUGHPUT`                      | Throughput                      | `Unidades produzidas / entregues no período`      | Domain   |
| `WASTE_RATE`                      | Taxa de Desperdício             | `Desperdício / Input Total * 100`                 | Segment  |
| `FIRST_PASS_YIELD`                | Rendimento na Primeira Passagem | `Unidades OK sem retrabalho / Total * 100`        | Segment  |
| `MAINTENANCE_COST_RATIO`          | Custo de Manutenção             | `Custo Manutenção / Receita * 100`                | Segment  |
| `ENERGY_COST_RATIO`               | Custo de Energia                | `Custo Energia / Receita * 100`                   | Segment  |
| `OUTSOURCING_RATIO`               | Índice de Terceirização         | `Custo Terceiros / Custo Total * 100`             | Domain   |

#### Domínio: People (Pessoas/RH)

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

#### Domínio: Strategy (Estratégia)

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
