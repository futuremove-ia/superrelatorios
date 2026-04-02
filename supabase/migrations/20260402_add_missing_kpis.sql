-- Add missing KPIs to reach 100+
-- Date: 2026-04-02

-- Insert missing KPIs by sector
INSERT INTO library_kpis (code, title, description, unit, domain, sector, niche, trend_direction, input_type, group_data_period, is_active) VALUES

-- TECHNOLOGY (5 missing)
('TECH-DAU-001', 'Daily Active Users', 'Usuários ativos diários', 'count', 'operations', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'daily', true),
('TECH-MAU-001', 'Monthly Active Users', 'Usuários ativos mensais', 'count', 'operations', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'monthly', true),
('TECH-LTVCAC-001', 'LTV:CAC Ratio', 'Proporção LTV por CAC', 'ratio', 'finance', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'monthly', true),
('TECH-FIRST-RESPONSE', 'First Response Time', 'Tempo médio de primeira resposta', 'hours', 'operations', 'technology', 'saas', 'lower_is_better', 'non_cumulative', 'daily', true),
('TECH-NPS-001', 'Net Promoter Score', 'Índice de satisfação e recomendação', 'score', 'strategy', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'quarterly', true),

-- RETAIL (7 missing)
('RET-ATC-001', 'Add to Cart Rate', 'Taxa de adicionar ao carrinho', 'percent', 'commercial', 'retail', 'ecommerce', 'higher_is_better', 'non_cumulative', 'daily', true),
('RET-RETURN-RATE', 'Return Rate', 'Taxa de devolução', 'percent', 'operations', 'retail', 'ecommerce', 'lower_is_better', 'non_cumulative', 'monthly', true),
('RET-INVENTORY-TURNS', 'Inventory Turns', 'Giro de estoque', 'ratio', 'operations', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'quarterly', true),
('RET-SELL-THROUGH', 'Sell-Through Rate', 'Taxa de conversão de estoque', 'percent', 'commercial', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'monthly', true),
('RET-OTP-001', 'Order to Pickup Time', 'Tempo entre pedido e retirada', 'hours', 'operations', 'retail', 'omnichannel', 'lower_is_better', 'non_cumulative', 'daily', true),
('RET-ATV-001', 'Average Transaction Value', 'Valor médio da transação', 'currency', 'commercial', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'daily', true),
('RET-CUSTOMER-FREQ', 'Customer Visit Frequency', 'Frequência de visitas do cliente', 'count', 'commercial', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'monthly', true),

-- HEALTHCARE (6 missing)
('HEALTH-READMISSION', 'Readmission Rate', 'Taxa de readmissão', 'percent', 'operations', 'healthcare', 'hospital', 'lower_is_better', 'non_cumulative', 'monthly', true),
('HEALTH-NPS-001', 'Patient Satisfaction Score', 'Índice de satisfação do paciente', 'score', 'strategy', 'healthcare', 'hospital', 'higher_is_better', 'non_cumulative', 'quarterly', true),
('HEALTH-STAFF-UTIL', 'Staff Utilization Rate', 'Taxa de utilização de staff', 'percent', 'people', 'healthcare', 'hospital', 'higher_is_better', 'non_cumulative', 'daily', true),
('HEALTH-REVENUE-PT', 'Revenue per Patient', 'Receita por paciente', 'currency', 'finance', 'healthcare', 'clinic', 'higher_is_better', 'non_cumulative', 'monthly', true),
('HEALTH-CLAIMS-TIME', 'Claims Processing Time', 'Tempo de processamento de klaims', 'days', 'operations', 'healthcare', 'insurance', 'lower_is_better', 'non_cumulative', 'weekly', true),
('HEALTH-APPOINTMENT-YIELD', 'Appointment Show Rate', 'Taxa de comparecimento', 'percent', 'operations', 'healthcare', 'clinic', 'higher_is_better', 'non_cumulative', 'daily', true),

-- MANUFACTURING (6 missing)
('MFG-FPY-001', 'First Pass Yield', 'Taxa de primeira passagem', 'percent', 'operations', 'manufacturing', 'discrete', 'higher_is_better', 'non_cumulative', 'daily', true),
('MFG-DOWNTIME', 'Downtime Rate', 'Taxa de parada não planejada', 'percent', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', true),
('MFG-CYCLE-TIME', 'Cycle Time', 'Tempo de ciclo', 'minutes', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', true),
('MFG-INVENTORY-DAYS', 'Days of Inventory', 'Dias de estoque', 'days', 'operations', 'manufacturing', 'process', 'lower_is_better', 'non_cumulative', 'weekly', true),
('MFG-CAPACITY-UTIL', 'Capacity Utilization', 'Utilização de capacidade', 'percent', 'operations', 'manufacturing', 'process', 'higher_is_better', 'non_cumulative', 'daily', true),
('MFG-SCRAP-RATE', 'Scrap Rate', 'Taxa de refugos', 'percent', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', true),

-- SERVICES (5 missing)
('SERV-PROJECT-MARGIN', 'Project Margin', 'Margem do projeto', 'percent', 'finance', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'project', true),
('SERV-UTILIZATION', 'Resource Utilization', 'Utilização de recursos', 'percent', 'operations', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'weekly', true),
('SERV-BILLING-EFF', 'Billing Efficiency', 'Eficiência de faturamento', 'percent', 'finance', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'monthly', true),
('SERV-TICKET-ESCAL', 'Ticket Escalation Rate', 'Taxa de escalação de tickets', 'percent', 'operations', 'services', 'support', 'lower_is_better', 'non_cumulative', 'daily', true),
('SERV-RENEWAL-RATE', 'Contract Renewal Rate', 'Taxa de renovação de contrato', 'percent', 'commercial', 'services', 'saas', 'higher_is_better', 'non_cumulative', 'quarterly', true),

-- FINANCE (5 missing)
('FIN-NPL-001', 'Non-Performing Loans', 'Empréstimos inadimplentes', 'percent', 'finance', 'finance', 'banking', 'lower_is_better', 'non_cumulative', 'monthly', true),
('FIN-NIM-001', 'Net Interest Margin', 'Margem de juros líquida', 'percent', 'finance', 'finance', 'banking', 'higher_is_better', 'non_cumulative', 'quarterly', true),
('FIN-ROE-001', 'Return on Equity', 'Retorno sobre patrimônio', 'percent', 'finance', 'finance', 'banking', 'higher_is_better', 'non_cumulative', 'quarterly', true),
('FIN-QUICK-RATIO', 'Quick Ratio', 'Liquidez imediata', 'ratio', 'finance', 'finance', 'fintech', 'higher_is_better', 'non_cumulative', 'monthly', true),
('FIN-ACCOUNTS-REC', 'Days Sales Outstanding', 'Prazo médio de recebimento', 'days', 'finance', 'finance', 'credit', 'lower_is_better', 'non_cumulative', 'monthly', true),

-- FOOD (4 missing)
('FOOD-AVG-CHECK', 'Average Check', 'Ticket médio', 'currency', 'commercial', 'food', 'restaurant', 'higher_is_better', 'non_cumulative', 'daily', true),
('FOOD-LABOR-COST', 'Labor Cost Percentage', 'Custo de mão de obra', 'percent', 'people', 'food', 'restaurant', 'lower_is_better', 'non_cumulative', 'monthly', true),
('FOOD-WASTE-RATE', 'Waste Rate', 'Taxa de desperdício', 'percent', 'operations', 'food', 'restaurant', 'lower_is_better', 'non_cumulative', 'daily', true),
('FOOD-DELIVERY-ETA', 'Delivery ETA Accuracy', 'Precisão do tempo de entrega', 'percent', 'operations', 'food', 'delivery', 'higher_is_better', 'non_cumulative', 'daily', true),

-- LOGISTICS (4 missing)
('LOG-LOAD-FACTOR', 'Load Factor', 'Fator de carga', 'percent', 'operations', 'logistics', 'freight', 'higher_is_better', 'non_cumulative', 'daily', true),
('LOG-COST-PER-MILE', 'Cost per Mile', 'Custo por milha', 'currency', 'operations', 'logistics', 'freight', 'lower_is_better', 'non_cumulative', 'monthly', true),
('LOG-WAREHOUSE-ACC', 'Warehouse Accuracy', 'Precisão do warehouse', 'percent', 'operations', 'logistics', 'warehousing', 'higher_is_better', 'non_cumulative', 'daily', true),
('LOG-PICK-ACCURACY', 'Pick Accuracy', 'Precisão de picking', 'percent', 'operations', 'logistics', 'warehousing', 'higher_is_better', 'non_cumulative', 'daily', true),

-- CONSTRUCTION (5 missing)
('CONTRACT-PROFIT', 'Project Profit Margin', 'Margem do projeto', 'percent', 'finance', 'construction', 'residential', 'higher_is_better', 'non_cumulative', 'project', true),
('CONTRACT-COST-VAR', 'Cost Variance', 'Variação de custo', 'percent', 'finance', 'construction', 'commercial', 'lower_is_better', 'non_cumulative', 'monthly', true),
('CONTRACT-SCHEDULE-VAR', 'Schedule Variance', 'Variação de cronograma', 'days', 'operations', 'construction', 'residential', 'lower_is_better', 'non_cumulative', 'weekly', true),
('CONTRACT-SAFETY-Rate', 'Safety Incident Rate', 'Taxa de incidentes de segurança', 'percent', 'operations', 'construction', 'industrial', 'lower_is_better', 'non_cumulative', 'monthly', true),
('CONTRACT-CONTINGENCY', 'Contingency Usage', 'Uso de contingência', 'percent', 'finance', 'construction', 'commercial', 'lower_is_better', 'non_cumulative', 'project', true);

-- Verify
SELECT COUNT(*) as total FROM library_kpis WHERE is_active = true;
SELECT sector, COUNT(*) as count FROM library_kpis WHERE is_active = true GROUP BY sector ORDER BY count DESC;
