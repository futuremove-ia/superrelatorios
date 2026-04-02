-- Expand Library KPIs with Sectors, Nichos, and Business Models
-- Task 041, 043, 045: Expand sectors (5→12), nichos (~70), KPIs (29→100+)

-- First, add new columns if they don't exist
ALTER TABLE library_kpis 
ADD COLUMN IF NOT EXISTS sector VARCHAR(50),
ADD COLUMN IF NOT EXISTS business_model VARCHAR(50),
ADD COLUMN IF NOT EXISTS niche VARCHAR(100);

-- Create index for sector and niche queries
CREATE INDEX IF NOT EXISTS idx_library_kpis_sector ON library_kpis(sector);
CREATE INDEX IF NOT EXISTS idx_library_kpis_niche ON library_kpis(niche);
CREATE INDEX IF NOT EXISTS idx_library_kpis_business_model ON library_kpis(business_model);

-- Insert new KPIs by sector and niche
-- TECHNOLOGY SECTOR
INSERT INTO library_kpis (code, title, description, unit, domain, sector, niche, trend_direction, input_type, group_data_period, total_is, is_active) VALUES
('TECH-MRR-001', 'Monthly Recurring Revenue (MRR)', 'Receita recorrente mensal de contratos SaaS', 'currency', 'finance', 'technology', 'saas', 'higher_is_better', 'cumulative', 'monthly', 'sum_of_values', true),
('TECH-CHURN-001', 'Churn Rate', 'Taxa de cancelamento de clientes', 'percent', 'sales', 'technology', 'saas', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('TECH-NRR-001', 'Net Revenue Retention', 'Retenção de receita líquida', 'percent', 'finance', 'technology', 'saas', 'higher_is_better', 'cumulative', 'monthly', 'last_value', true),
('TECH-CAC-001', 'Customer Acquisition Cost', 'Custo de aquisição por cliente', 'currency', 'marketing', 'technology', 'saas', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('TECH-LTV-001', 'Lifetime Value', 'Valor do ciclo de vida do cliente', 'currency', 'finance', 'technology', 'saas', 'higher_is_better', 'cumulative', 'monthly', 'last_value', true),
('TECH-LTVCAC-001', 'LTV:CAC Ratio', 'Proporção LTV por CAC', 'ratio', 'finance', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('TECH-DAU-001', 'Daily Active Users', 'Usuários ativos diários', 'count', 'operations', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'daily', 'sum_of_values', true),
('TECH-MAU-001', 'Monthly Active Users', 'Usuários ativos mensais', 'count', 'operations', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'monthly', 'sum_of_values', true),
('TECH-NPS-001', 'Net Promoter Score', 'Índice de satisfação e recomendação', 'score', 'strategy', 'technology', 'saas', 'higher_is_better', 'non_cumulative', 'quarterly', 'average_of_values', true),
('TECH-FIRST-RESPONSE', 'First Response Time', 'Tempo médio de primeira resposta', 'hours', 'operations', 'technology', 'saas', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),

-- RETAIL SECTOR
('RET-GMV-001', 'Gross Merchandise Value', 'Valor bruto de mercadorias vendidas', 'currency', 'sales', 'retail', 'ecommerce', 'higher_is_better', 'cumulative', 'monthly', 'sum_of_values', true),
('RET-AOV-001', 'Average Order Value', 'Valor médio por pedido', 'currency', 'sales', 'retail', 'ecommerce', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('RET-CONVERSION-001', 'Conversion Rate', 'Taxa de conversão de visitantes', 'percent', 'sales', 'retail', 'ecommerce', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('RET-ATC-001', 'Add to Cart Rate', 'Taxa de adicionar ao carrinho', 'percent', 'sales', 'retail', 'ecommerce', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('RET-RETURN-RATE', 'Return Rate', 'Taxa de devolução', 'percent', 'operations', 'retail', 'ecommerce', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('RET-INVENTORY-TURNS', 'Inventory Turns', 'Giro de estoque', 'ratio', 'operations', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'quarterly', 'average_of_values', true),
('RET-SELL-THROUGH', 'Sell-Through Rate', 'Taxa de conversão de estoque', 'percent', 'sales', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('RET-OTP-001', 'Order to Pickup Time', 'Tempo entre pedido e retirada', 'hours', 'operations', 'retail', 'omnichannel', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('RET-ATV-001', 'Average Transaction Value', 'Valor médio da transação', 'currency', 'sales', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('RET-CUSTOMER-FREQ', 'Customer Visit Frequency', 'Frequência de visitas do cliente', 'count', 'sales', 'retail', 'physical', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),

-- HEALTHCARE SECTOR
('HEALTH-OCCUPANCY', 'Bed Occupancy Rate', 'Taxa de ocupação de leitos', 'percent', 'operations', 'healthcare', 'hospital', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('HEALTH-READMISSION', 'Readmission Rate', 'Taxa de readmissão', 'percent', 'operations', 'healthcare', 'hospital', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('HEALTH-WAIT-TIME', 'Average Wait Time', 'Tempo médio de espera', 'minutes', 'operations', 'healthcare', 'hospital', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('HEALTH-NPS-001', 'Patient Satisfaction Score', 'Índice de satisfação do paciente', 'score', 'strategy', 'healthcare', 'hospital', 'higher_is_better', 'non_cumulative', 'quarterly', 'average_of_values', true),
('HEALTH-STAFF-UTIL', 'Staff Utilization Rate', 'Taxa de utilização de staff', 'percent', 'hr', 'healthcare', 'hospital', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('HEALTH-REVENUE-PT', 'Revenue per Patient', 'Receita por paciente', 'currency', 'finance', 'healthcare', 'clinic', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('HEALTH-CLAIMS-TIME', 'Claims Processing Time', 'Tempo de processamento de klaims', 'days', 'operations', 'healthcare', 'insurance', 'lower_is_better', 'non_cumulative', 'weekly', 'average_of_values', true),
('HEALTH-APPOINTMENT-YIELD', 'Appointment Show Rate', 'Taxa de comparecimento', 'percent', 'operations', 'healthcare', 'clinic', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),

-- MANUFACTURING SECTOR
('MFG-OEE-001', 'Overall Equipment Effectiveness', 'Eficiência global do equipamento', 'percent', 'operations', 'manufacturing', 'discrete', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('MFG-FPY-001', 'First Pass Yield', 'Taxa de primeira passagem', 'percent', 'operations', 'manufacturing', 'discrete', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('MFG-DEFECT-RATE', 'Defect Rate', 'Taxa de defeitos', 'percent', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('MFG-DOWNTIME', 'Downtime Rate', 'Taxa de parada não planejada', 'percent', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('MFG-CYCLE-TIME', 'Cycle Time', 'Tempo de ciclo', 'minutes', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('MFG-INVENTORY-DAYS', 'Days of Inventory', 'Dias de estoque', 'days', 'operations', 'manufacturing', 'process', 'lower_is_better', 'non_cumulative', 'weekly', 'last_value', true),
('MFG-CAPACITY-UTIL', 'Capacity Utilization', 'Utilização de capacidade', 'percent', 'operations', 'manufacturing', 'process', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('MFG-SCRAP-RATE', 'Scrap Rate', 'Taxa de refugos', 'percent', 'operations', 'manufacturing', 'discrete', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),

-- SERVICES SECTOR
('SERV-BILLABLE-RATIO', 'Billable Utilization', 'Taxa de utilização faturável', 'percent', 'operations', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('SERV-PROJECT-MARGIN', 'Project Margin', 'Margem do projeto', 'percent', 'finance', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'project', 'average_of_values', true),
('SERV-UTILIZATION', 'Resource Utilization', 'Utilização de recursos', 'percent', 'operations', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'weekly', 'average_of_values', true),
('SERV-BILLING-EFF', 'Billing Efficiency', 'Eficiência de faturamento', 'percent', 'finance', 'services', 'consulting', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('SERV-TICKET-ESCAL', 'Ticket Escalation Rate', 'Taxa de escalação de tickets', 'percent', 'operations', 'services', 'support', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('SERV-CSAT-001', 'Customer Satisfaction', 'Satisfação do cliente', 'score', 'strategy', 'services', 'support', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('SERV-RENEWAL-RATE', 'Contract Renewal Rate', 'Taxa de renovação de contrato', 'percent', 'sales', 'services', 'saas', 'higher_is_better', 'non_cumulative', 'quarterly', 'average_of_values', true),

-- FINANCE SECTOR
('FIN-NPL-001', 'Non-Performing Loans', 'Empréstimos inadimplentes', 'percent', 'finance', 'finance', 'banking', 'lower_is_better', 'non_cumulative', 'monthly', 'last_value', true),
('FIN-NIM-001', 'Net Interest Margin', 'Margem de juros líquida', 'percent', 'finance', 'finance', 'banking', 'higher_is_better', 'non_cumulative', 'quarterly', 'average_of_values', true),
('FIN-ROE-001', 'Return on Equity', 'Retorno sobre patrimônio', 'percent', 'finance', 'finance', 'banking', 'higher_is_better', 'non_cumulative', 'quarterly', 'average_of_values', true),
('FIN-EBITDA-001', 'EBITDA Margin', 'Margem EBITDA', 'percent', 'finance', 'finance', 'fintech', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('FIN-CASH-FLOW', 'Operating Cash Flow', 'Fluxo de caixa operacional', 'currency', 'finance', 'finance', 'fintech', 'higher_is_better', 'cumulative', 'monthly', 'sum_of_values', true),
('FIN-QUICK-RATIO', 'Quick Ratio', 'Liquidez imediata', 'ratio', 'finance', 'finance', 'fintech', 'higher_is_better', 'non_cumulative', 'monthly', 'last_value', true),
('FIN-ACCOUNTS-REC', 'Days Sales Outstanding', 'Prazo médio de recebimento', 'days', 'finance', 'finance', 'credit', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),

-- FOOD SECTOR
('FOOD-TABLE-TURN', 'Table Turnover', 'Giro de mesas', 'count', 'operations', 'food', 'restaurant', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('FOOD-AVG-CHECK', 'Average Check', 'Ticket médio', 'currency', 'sales', 'food', 'restaurant', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('FOOD-FOOD-COST', 'Food Cost Percentage', 'Custo de comida百分比', 'percent', 'operations', 'food', 'restaurant', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('FOOD-LABOR-COST', 'Labor Cost Percentage', 'Custo de mão de obra', 'percent', 'hr', 'food', 'restaurant', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('FOOD-WASTE-RATE', 'Waste Rate', 'Taxa de desperdício', 'percent', 'operations', 'food', 'restaurant', 'lower_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('FOOD-DELIVERY-ETA', 'Delivery ETA Accuracy', 'Precisão do tempo de entrega', 'percent', 'operations', 'food', 'delivery', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),

-- LOGISTICS SECTOR
('LOG-OTIF-001', 'On-Time In-Full', 'Entrega no prazo e completa', 'percent', 'operations', 'logistics', '3pl', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('LOG-ON-TIME', 'On-Time Delivery Rate', 'Taxa de entrega no prazo', 'percent', 'operations', 'logistics', 'lastmile', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('LOG-LOAD-FACTOR', 'Load Factor', 'Fator de carga', 'percent', 'operations', 'logistics', 'freight', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('LOG-COST-PER-MILE', 'Cost per Mile', 'Custo por milha', 'currency', 'operations', 'logistics', 'freight', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('LOG-WAREHOUSE-ACC', 'Warehouse Accuracy', 'Precisão do warehouse', 'percent', 'operations', 'logistics', 'warehousing', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('LOG-PICK-ACCURACY', 'Pick Accuracy', 'Precisão de picking', 'percent', 'operations', 'logistics', 'warehousing', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),

-- CONSTRUCTION SECTOR
('CONTRACT-PROFIT', 'Project Profit Margin', 'Margem do projeto', 'percent', 'finance', 'construction', 'residential', 'higher_is_better', 'non_cumulative', 'project', 'last_value', true),
('CONTRACT-COST-VAR', 'Cost Variance', 'Variação de custo', 'percent', 'finance', 'construction', 'commercial', 'lower_is_better', 'non_cumulative', 'monthly', 'last_value', true),
('CONTRACT-SCHEDULE-VAR', 'Schedule Variance', 'Variação de cronograma', 'days', 'operations', 'construction', 'residential', 'lower_is_better', 'non_cumulative', 'weekly', 'last_value', true),
('CONTRACT-SAFETY-Rate', 'Safety Incident Rate', 'Taxa de incidentes de segurança', 'percent', 'operations', 'construction', 'industrial', 'lower_is_better', 'non_cumulative', 'monthly', 'last_value', true),
('CONTRACT-CONTINGENCY', 'Contingency Usage', 'Uso de contingência', 'percent', 'finance', 'construction', 'commercial', 'lower_is_better', 'non_cumulative', 'project', 'last_value', true),

-- EDUCATION SECTOR
('EDU-RETENTION-001', 'Student Retention Rate', 'Taxa de retenção de alunos', 'percent', 'operations', 'education', 'higher_ed', 'higher_is_better', 'non_cumulative', 'semester', 'last_value', true),
('EDU-COMPLETION-001', 'Course Completion Rate', 'Taxa de conclusão de curso', 'percent', 'operations', 'education', 'online', 'higher_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('EDU-ENGAGEMENT-001', 'Student Engagement Score', 'Índice de engajamento', 'score', 'operations', 'education', 'online', 'higher_is_better', 'non_cumulative', 'weekly', 'average_of_values', true),
('EDU-CSAT-001', 'Student Satisfaction', 'Satisfação do aluno', 'score', 'strategy', 'education', 'higher_ed', 'higher_is_better', 'non_cumulative', 'semester', 'average_of_values', true),
('EDU-CERT-PASS', 'Certification Pass Rate', 'Taxa de aprovação em certificação', 'percent', 'operations', 'education', 'certification', 'higher_is_better', 'non_cumulative', 'exam', 'last_value', true),

-- AGRICULTURE SECTOR
('AGRI-YIELD-001', 'Crop Yield', 'Rendimento de colheita', 'units', 'operations', 'agriculture', 'crops', 'higher_is_better', 'non_cumulative', 'harvest', 'last_value', true),
('AGRI-COST-PER-UNIT', 'Cost per Unit Produced', 'Custo por unidade', 'currency', 'finance', 'agriculture', 'livestock', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('AGRI-INPUT-COST', 'Input Cost per Hectare', 'Custo de insumo por hectare', 'currency', 'finance', 'agriculture', 'crops', 'lower_is_better', 'non_cumulative', 'season', 'last_value', true),
('AGRI-BREAKEVEN', 'Breakeven Yield', 'Rendimento de ponto de equilíbrio', 'units', 'finance', 'agriculture', 'crops', 'lower_is_better', 'non_cumulative', 'harvest', 'last_value', true),

-- ENTERTAINMENT SECTOR
('ENT-ATTENDANCE', 'Attendance Rate', 'Taxa de ocupação', 'percent', 'operations', 'entertainment', 'events', 'higher_is_better', 'non_cumulative', 'event', 'last_value', true),
('ENT-TICKET-REV', 'Ticket Revenue per Attendee', 'Receita de ingresso por participante', 'currency', 'sales', 'entertainment', 'events', 'higher_is_better', 'non_cumulative', 'event', 'average_of_values', true),
('ENT-ENGAGEMENT', 'Content Engagement', 'Engajamento com conteúdo', 'percent', 'operations', 'entertainment', 'streaming', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true),
('ENT-CHURN-001', 'Subscriber Churn', 'Taxa de cancelamento', 'percent', 'sales', 'entertainment', 'streaming', 'lower_is_better', 'non_cumulative', 'monthly', 'average_of_values', true),
('ENT-AD-REVENUE', 'Ad Revenue per View', 'Receita de ads por visualização', 'currency', 'marketing', 'entertainment', 'streaming', 'higher_is_better', 'non_cumulative', 'daily', 'average_of_values', true);

-- Verify count
SELECT COUNT(*) as total_kpis FROM library_kpis WHERE is_active = true;
SELECT sector, COUNT(*) as count FROM library_kpis WHERE is_active = true GROUP BY sector ORDER BY count DESC;
