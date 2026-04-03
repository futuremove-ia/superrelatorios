-- ============================================================================
-- EXPANSÃO DE BIBLIOTECAS - SuperRelatórios
-- Data: 2026-04-02
-- Fase 4: Criação de tabelas e dados essenciais
-- ============================================================================

-- ============================================================================
-- 1. LIBRARY_TIMEFRAMES (8 registros)
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_timeframes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  label_en TEXT NOT NULL,
  label_pt TEXT NOT NULL,
  label_es TEXT NOT NULL,
  days INTEGER NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('immediate', 'short_term', 'medium_term', 'long_term')),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO library_timeframes (code, label_en, label_pt, label_es, days, category, display_order) VALUES
('IMMEDIATE', 'Immediate', 'Imediato', 'Inmediato', 7, 'immediate', 1),
('SHORT_TERM_2W', 'Short Term (2 weeks)', 'Curto Prazo (2 semanas)', 'Corto Plazo (2 semanas)', 14, 'short_term', 2),
('SHORT_TERM_1M', 'Short Term (1 month)', 'Curto Prazo (1 mês)', 'Corto Plazo (1 mes)', 30, 'short_term', 3),
('SHORT_TERM_45D', 'Short Term (45 days)', 'Curto Prazo (45 dias)', 'Corto Plazo (45 dias)', 45, 'short_term', 4),
('MEDIUM_TERM_2M', 'Medium Term (2 months)', 'Médio Prazo (2 meses)', 'Medio Plazo (2 meses)', 60, 'medium_term', 5),
('MEDIUM_TERM_3M', 'Medium Term (3 months)', 'Médio Prazo (3 meses)', 'Medio Plazo (3 meses)', 90, 'medium_term', 6),
('LONG_TERM_6M', 'Long Term (6 months)', 'Longo Prazo (6 meses)', 'Largo Plazo (6 meses)', 180, 'long_term', 7),
('LONG_TERM_1Y', 'Long Term (1 year)', 'Longo Prazo (1 ano)', 'Largo Plazo (1 ano)', 365, 'long_term', 8);

-- ============================================================================
-- 2. LIBRARY_COMPLEXITIES (5 registros)
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_complexities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  label_en TEXT NOT NULL,
  label_pt TEXT NOT NULL,
  label_es TEXT NOT NULL,
  min_hours INTEGER NOT NULL,
  max_hours INTEGER NOT NULL,
  description_en TEXT,
  description_pt TEXT,
  description_es TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO library_complexities (code, label_en, label_pt, label_es, min_hours, max_hours, description_en, description_pt, description_es, display_order) VALUES
('VERY_LOW', 'Very Easy', 'Muito Fácil', 'Muy Facil', 1, 4, 'Anyone can do it today', 'Qualquer pessoa pode fazer hoje', 'Cualquier persona puede hacerlo hoy', 1),
('LOW', 'Easy', 'Fácil', 'Facil', 4, 16, 'Requires simple planning', 'Requer planejamento simples', 'Requiere planificacion simple', 2),
('MEDIUM', 'Medium', 'Médio', 'Medio', 16, 80, 'Requires team coordination', 'Requer coordenação de equipe', 'Requiere coordinacion de equipo', 3),
('HIGH', 'Hard', 'Difícil', 'Dificil', 80, 400, 'Requires structured project', 'Requer projeto estruturado', 'Requiere proyecto estructurado', 4),
('VERY_HIGH', 'Very Hard', 'Muito Difícil', 'Muy Dificil', 400, 9999, 'Requires consulting or dedicated team', 'Requer consultoria ou time dedicado', 'Requiere consultoria o equipo dedicado', 5);

-- ============================================================================
-- 3. LIBRARY_GOALS (12 objetivos)
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  title_en TEXT NOT NULL,
  title_pt TEXT NOT NULL,
  title_es TEXT NOT NULL,
  description_en TEXT,
  description_pt TEXT,
  description_es TEXT,
  goal_type TEXT NOT NULL CHECK (goal_type IN ('increase', 'decrease', 'maintain')),
  target_timeframe_code TEXT REFERENCES library_timeframes(code),
  priority_score INTEGER DEFAULT 3 CHECK (priority_score BETWEEN 1 AND 5),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO library_goals (code, title_en, title_pt, title_es, description_en, description_pt, description_es, goal_type, target_timeframe_code, priority_score) VALUES
('PROFIT_MAXIMIZER', 'Maximize Real Profitability', 'Maximizar a Lucratividade Real', 'Maximizar la Rentabilidad Real', 'Increase net profit margin above industry benchmark', 'Aumentar margem de lucro líquido acima do benchmark do setor', 'Aumentar margen de beneficio neto por encima del benchmark del sector', 'increase', 'SHORT_TERM_1M', 5),
('CASH_SAFETY_NET', 'Build Cash Reserve', 'Construir Reserva de Segurança', 'Construir Reserva de Efectivo', 'Build runway to minimum 6 months', 'Construir pista para mínimo de 6 meses', 'Construir pista para minimo de 6 meses', 'increase', 'SHORT_TERM_45D', 5),
('SCALABLE_GROWTH', 'Scalable and Profitable Growth', 'Crecimiento Escalable y Rentable', 'Crecimiento Escalable y Rentable', 'Achieve growth with positive operating cash flow', 'Alcançar crescimento com fluxo de caixa operacional positivo', 'Lograr crecimiento con flujo de caja operativo positivo', 'increase', 'MEDIUM_TERM_2M', 5),
('FAST_OPERATION', 'Streamline Operations', 'Agilizar Operação', 'Agilizar Operaciones', 'Reduce cycle time and operational costs', 'Reduzir tempo de ciclo e custos operacionais', 'Reducir tiempo de ciclo y costos operativos', 'decrease', 'MEDIUM_TERM_3M', 4),
('HIGH_PERFORMANCE', 'High Performance Team', 'Equipe de Alta Performance', 'Equipo de Alto Rendimiento', 'Reduce turnover and increase productivity per employee', 'Reduzir turnover e aumentar produtividade por colaborador', 'Reducir rotacion y aumentar productividad por empleado', 'increase', 'MEDIUM_TERM_3M', 4),
('CUSTOMER_EXCELLENCE', 'Customer Excellence', 'Excelência no Atendimento', 'Excelencia en Atendimento', 'NPS above 50 and churn below 3%', 'NPS acima de 50 e churn abaixo de 3%', 'NPS por encima de 50 y churn por debajo de 3%', 'increase', 'MEDIUM_TERM_2M', 5),
('MARKET_LEADERSHIP', 'Market Leadership', 'Liderança de Mercado', 'Liderazgo de Mercado', 'Increase market share and brand awareness', 'Aumentar market share e reconhecimento de marca', 'Aumentar cuota de mercado y reconocimiento de marca', 'increase', 'LONG_TERM_6M', 4),
('DIGITAL_TRANSFORMATION', 'Digital Transformation', 'Transformação Digital', 'Transformacion Digital', 'Increase digital revenue and automate processes', 'Aumentar receita digital e automatizar processos', 'Aumentar ingresos digitales y automatizar procesos', 'increase', 'LONG_TERM_6M', 4),
('STOCK_EFFICIENCY', 'Stock Efficiency', 'Eficiência de Estoque', 'Eficiencia de Inventario', 'Inventory turnover above 8x without stockouts', 'Giro de estoque acima de 8x sem rupturas', 'Rotacion de inventario por encima de 8x sin faltantes', 'increase', 'MEDIUM_TERM_2M', 3),
('DEBT_REDUCTION', 'Debt Reduction', 'Redução de Endividamiento', 'Reduccion de Endeudamiento', 'Debt to equity below 1.5x', 'D/E abaixo de 1.5x', 'D/E por debajo de 1.5x', 'decrease', 'LONG_TERM_6M', 4),
('RECURRING_GROWTH', 'Recurring Revenue Growth', 'Crescimento Recorrente', 'Crecimiento Recurrente', 'MRR growing above 10% monthly', 'MRR crescendo acima de 10% mensal', 'MRR creciendo por encima de 10% mensual', 'increase', 'LONG_TERM_6M', 5),
('SUPPLIER_RESILIENCE', 'Supply Chain Resilience', 'Resiliência na Cadeia de Suprimentos', 'Resiliencia en Cadena de Suministros', 'Diversify suppliers and reduce lead time', 'Diversificar fornecedores e reduzir lead time', 'Diversificar proveedores y reducir tiempo de entrega', 'decrease', 'MEDIUM_TERM_3M', 3);

-- ============================================================================
-- 4. LIBRARY_CHALLENGES (15 riscos + 20 oportunidades = 35 registros)
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  challenge_type TEXT NOT NULL CHECK (challenge_type IN ('risk', 'opportunity')),
  title_en TEXT NOT NULL,
  title_pt TEXT NOT NULL,
  title_es TEXT NOT NULL,
  description_en TEXT,
  description_pt TEXT,
  description_es TEXT,
  domain TEXT NOT NULL,
  severity_level INTEGER CHECK (severity_level BETWEEN 1 AND 5),
  trigger_kpi_codes TEXT[],  -- Array de códigos KPI que disparam este desafio
  trigger_condition TEXT,    -- Condição em texto libre
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15 RISCOS
INSERT INTO library_challenges (code, challenge_type, title_en, title_pt, title_es, description_en, description_pt, description_es, domain, severity_level, trigger_kpi_codes, trigger_condition, display_order) VALUES
('CASH_FLOW_CRUNCH', 'risk', 'Cash Flow Crunch', 'Crise de Caixa', 'Crisis de Flujo de Caja', 'Money does not reach the end of the month', 'O dinheiro não chega ao fim do mês', 'El dinero no llega al final del mes', 'finance', 5, ARRAY['RUNWAY_MONTHS', 'BURN_RATE'], 'RUNWAY <= 3 months', 1),
('INEFFICIENT_SALES_MACHINE', 'risk', 'Inefficient Sales Machine', 'Máquina de Vendas Ineficiente', 'Maquina de Ventas Ineficiente', 'High sales effort for low return', 'Esforço de vendas alto para pouco retorno', 'Esfuerzo de ventas alto para poco retorno', 'commercial', 4, ARRAY['LTV_CAC_RATIO', 'CAC'], 'LTV/CAC <= 1.5', 2),
('COMMODITY_TRAP', 'risk', 'Commodity Trap', 'Armadilha da Comoditização', 'Trampa de Comoditizacion', 'Price war and squeezed margins', 'Guerra de preços e margens espremidas', 'Guerra de precios y márgenes exprimidos', 'strategy', 4, ARRAY['NET_PROFIT_MARGIN', 'CONTRIBUTION_MARGIN'], 'Margin <= 5%', 3),
('CUSTOMER_LOSS', 'risk', 'Customer Loss', 'Perda de Clientes', 'Perdida de Clientes', 'Accelerated customer loss', 'Perda acelerada de clientes', 'Perdida acelerada de clientes', 'commercial', 4, ARRAY['CHURN_RATE', 'NPS'], 'Churn > 8%/month', 4),
('STOCK_STAGNATION', 'risk', 'Stock Stagnation', 'Estoque Parado', 'Inventario Estancado', 'Stagnant inventory and immobilized capital', 'Estoque parado e capital imobilizado', 'Inventario immobilizado y capital immobilizado', 'operations', 3, ARRAY['INVENTORY_TURNOVER', 'DEAD_STOCK_RATIO'], 'Turnover < 4x/year', 5),
('HIGH_FIXED_COSTS', 'risk', 'High Fixed Costs', 'Custos Fixos Elevados', 'Costos Fijos Elevados', 'Heavy fixed cost structure', 'Estrutura de custos fixos pesada', 'Estructura de costos fijos pesada', 'finance', 3, ARRAY['FIXED_COST_RATIO'], 'Fixed costs > 60% revenue', 6),
('LATE_RECEIVABLES', 'risk', 'Late Receivables', 'Recebíveis Atrasados', 'Cuentas por Cobrar Atrasadas', 'Long receivables cycle', 'Ciclo de recebimento longo', 'Ciclo de cobros largo', 'finance', 3, ARRAY['DAYS_TO_RECEIVE'], 'Days to receive > 60 days', 7),
('HIGH_ACQUISITION_COST', 'risk', 'High Acquisition Cost', 'Custo de Aquisição Alto', 'Costo de Adquisicion Alto', 'Acquisition cost above sustainable', 'Custo de aquisição acima do sustentável', 'Costo de adquisicion insostenible', 'marketing', 3, ARRAY['CAC', 'LTV_CAC_RATIO'], 'CAC > LTV/3', 8),
('DELIVERY_DELAY', 'risk', 'Delivery Delay', 'Atraso de Entrega', 'Retraso de Entrega', 'Systemic operational delays', 'Atrasos operacionais sistêmicos', 'Retrasos operativos sistemicos', 'operations', 3, ARRAY['ORDER_CYCLE_TIME', 'ON_TIME_DELIVERY'], 'Delivery time > 30 days', 9),
('TEAM_INEFFICIENCY', 'risk', 'Team Inefficiency', 'Ineficiência da Equipe', 'Ineficiencia del Equipo', 'Low productivity per employee', 'Baixa produtividade por colaborador', 'Baja productividad por empleado', 'people', 3, ARRAY['PRODUCTIVITY_PER_EMPLOYEE'], 'Productivity < 50% benchmark', 10),
('GROWTH_STAGNATION', 'risk', 'Growth Stagnation', 'Estagnação de Crescimento', 'Estancamiento de Crecimiento', 'Growth stagnant or declining', 'Crescimento estagnado ou em declínio', 'Crecimiento estancado o en declive', 'strategy', 4, ARRAY['REVENUE_GROWTH'], 'Growth < 0% for 3 months', 11),
('MARGIN_COMPRESSION', 'risk', 'Margin Compression', 'Compressão de Margens', 'Compresion de Margenes', 'Consistent margin decline', 'Margens em queda consistente', 'Margenes en caida consistente', 'finance', 4, ARRAY['GROSS_MARGIN', 'EBITDA_MARGIN'], 'Decline > 2pp/month', 12),
('HIGH_DEBT', 'risk', 'High Debt', 'Endividamento Alto', 'Endeudamiento Alto', 'Debt compromising operations', 'Endividamento comprometendo operação', 'Endeudamiento comprometiendo operaciones', 'finance', 4, ARRAY['DEBT_TO_EQUITY'], 'D/E > 3x', 13),
('SUPPLIER_RISK', 'risk', 'Supplier Risk', 'Risco de Fornecedor', 'Riesgo de Proveedor', 'Excessive supplier dependency', 'Dependência excessiva de fornecedores', 'Dependencia excesiva de proveedores', 'operations', 3, ARRAY['SUPPLIER_CONCENTRATION'], 'Top 3 > 80% purchases', 14),
('TALENT_DRAIN', 'risk', 'Talent Drain', 'Perda de Talentos', 'Fuga de Talento', 'High turnover affecting operations', 'Rotatividade alta comprometendo operação', 'Rotacion alta comprometiendo operaciones', 'people', 3, ARRAY['EMPLOYEE_TURNOVER'], 'Turnover > 30%/year', 15);

-- 20 OPORTUNIDADES
INSERT INTO library_challenges (code, challenge_type, title_en, title_pt, title_es, description_en, description_pt, description_es, domain, severity_level, trigger_kpi_codes, trigger_condition, display_order) VALUES
('OPP_TICKET_EXPANSION', 'opportunity', 'Ticket Expansion Potential', 'Potencial de Aumento de Ticket', 'Potencial de Aumento de Ticket', 'Potential for 20-40% LTV increase', 'Potencial de +20-40% no LTV', 'Potencial de +20-40% en LTV', 'commercial', 4, ARRAY['AVG_TICKET', 'CHURN_RATE'], 'Ticket < benchmark AND retention > 85%', 16),
('OPP_UPSELL_BASE', 'opportunity', 'Upsell Opportunity', 'Oportunidade de Upsell', 'Oportunidad de Upsell', 'Upsell opportunity in existing base', 'Oportunidade de upsell na base existente', 'Oportunidad de upsell en base existente', 'commercial', 4, ARRAY['CHURN_RATE', 'EXPANSION_REVENUE'], 'Churn < 3% AND expansion = 0', 17),
('OPP_CHANNEL_OPTIMIZATION', 'opportunity', 'Channel Optimization', 'Otimização de Canal', 'Optimizacion de Canal', 'Underutilized acquisition channel', 'Canal de aquisição subexplorado', 'Canal de adquisicion subutilizado', 'marketing', 3, ARRAY['ROAS', 'CAC'], 'ROAS > 5x with low investment', 18),
('OPP_MARGIN_IMPROVEMENT', 'opportunity', 'Margin Improvement', 'Melhoria de Margem', 'Mejora de Margen', 'Margin above sector average', 'Margem acima da média do setor', 'Margen por encima del promedio del sector', 'finance', 4, ARRAY['GROSS_MARGIN'], 'Margin > benchmark + 10pp', 19),
('OPP_RETENTION_LEVERAGE', 'opportunity', 'Retention Leverage', 'Alavanca de Retenção', 'Apalancamiento de Retencion', 'High retention as growth lever', 'Alta retenção como alavanca de crescimento', 'Alta retencion como palanca de crecimiento', 'commercial', 4, ARRAY['RETENTION_RATE', 'NPS'], 'Retention > 90% AND NPS > 50', 20),
('OPP_PRODUCTIVITY_GAIN', 'opportunity', 'Productivity Gain', 'Ganho de Produtividade', 'Ganancia de Productividad', 'Productivity above sector average', 'Produtividade acima da média setorial', 'Productividad por encima del promedio sectorial', 'people', 3, ARRAY['PRODUCTIVITY_PER_EMPLOYEE'], '> benchmark + 20%', 21),
('OPP_RECEIVABLES_ACCELERATION', 'opportunity', 'Receivables Acceleration', 'Aceleração de Recebíveis', 'Aceleracion de Cobros', 'Accelerable receivables cycle', 'Ciclo de recebimento acelerável', 'Ciclo de cobros acelerable', 'finance', 3, ARRAY['DAYS_TO_RECEIVE'], 'Days to receive > 30 with low-risk clients', 22),
('OPP_COST_REDUCTION', 'opportunity', 'Cost Structure Optimization', 'Otimização de Estrutura de Custos', 'Optimizacion de Estructura de Costos', 'Optimizable cost structure', 'Estrutura de custos otimizável', 'Estructura de costos optimizable', 'finance', 3, ARRAY['FIXED_COST_RATIO'], 'Fixed costs > 50% with margin > 60%', 23),
('OPP_PRICING_POWER', 'opportunity', 'Pricing Power', 'Poder de Precificação', 'Poder de Precios', 'Unexploited pricing power', 'Poder de precificação não explorado', 'Poder de precios no explotado', 'commercial', 4, ARRAY['GROSS_MARGIN', 'CHURN_RATE', 'NPS'], 'High margin + low churn + high NPS', 24),
('OPP_GEOGRAPHIC_EXPANSION', 'opportunity', 'Geographic Expansion', 'Expansão Geográfica', 'Expansion Geografica', 'Viable geographic expansion', 'Expansão geográfica viável', 'Expansion geografica viable', 'strategy', 4, ARRAY['REVENUE_GROWTH'], 'Growth > 20%/year AND concentration > 80%', 25),
('OPP_DIGITAL_CHANNEL', 'opportunity', 'Digital Channel Growth', 'Crescimento de Canal Digital', 'Crecimiento de Canal Digital', 'Underdeveloped digital channel', 'Canal digital subdesenvolvido', 'Canal digital subdesarrollado', 'marketing', 3, ARRAY['DIGITAL_REVENUE_PCT'], 'Digital revenue < 20% total', 26),
('OPP_RECURRING_REVENUE', 'opportunity', 'Recurring Revenue Potential', 'Potencial de Receita Recorrente', 'Potencial de Ingresos Recurrentes', 'Potential for recurring revenue', 'Potencial de receita recorrente', 'Potencial de ingresos recurrentes', 'strategy', 4, ARRAY['RECURRING_REVENUE_PCT'], 'Recurring < 30% AND low churn', 27),
('OPP_REFERRAL_PROGRAM', 'opportunity', 'Referral Program', 'Programa de Indicação', 'Programa de Referidos', 'Satisfied customer base for referral', 'Base de clientes satisfeitos para indicação', 'Base de clientes satisfechos para referidos', 'marketing', 3, ARRAY['NPS', 'REFERRAL_RATE'], 'NPS > 40 AND referral < 5%', 28),
('OPP_AUTOMATION', 'opportunity', 'Automation Opportunity', 'Oportunidade de Automação', 'Oportunidad de Automatizacion', 'Manual processes to automate', 'Processos manuais para automatizar', 'Procesos manuales para automatizar', 'operations', 3, ARRAY['PRODUCTIVITY_PER_EMPLOYEE', 'REWORK_RATE'], 'Low productivity + high rework', 29),
('OPP_INVENTORY_OPTIMIZATION', 'opportunity', 'Inventory Optimization', 'Otimização de Estoque', 'Optimizacion de Inventario', 'Inventory to free up capital', 'Estoque para liberar capital', 'Inventario para liberar capital', 'operations', 3, ARRAY['INVENTORY_TURNOVER', 'WORKING_CAPITAL'], 'Turnover > 8x with negative working capital', 30),
('OPP_CROSS_SELL', 'opportunity', 'Cross-sell Opportunity', 'Oportunidade de Cross-sell', 'Oportunidad de Cross-sell', 'Cross-sell opportunity in base', 'Oportunidade de cross-sell na base', 'Oportunidad de cross-sell en base', 'commercial', 3, ARRAY['CROSS_SELL_RATE'], 'Cross-sell < 10% AND multiple products', 31),
('OPP_PARTNERSHIP_REVENUE', 'opportunity', 'Partnership Revenue', 'Receita via Parcerias', 'Ingresos via Socios', 'Unexplored partnership revenue', 'Receita via parcerias não explorada', 'Ingresos via socios no explotados', 'strategy', 3, ARRAY['PARTNERSHIP_REVENUE'], 'Partnership revenue = 0 with base > 500', 32),
('OPP_PREMIUM_SEGMENT', 'opportunity', 'Premium Segment Opportunity', 'Oportunidade Segmento Premium', 'Oportunidad Segmento Premium', 'Under served premium segment', 'Segmento premium subatendido', 'Segmento premium subatendido', 'commercial', 4, ARRAY['AVG_TICKET', 'GROSS_MARGIN'], 'High margin + low ticket vs competitors', 33),
('OPP_SUBSCRIPTION_MODEL', 'opportunity', 'Subscription Model Migration', 'Migração para Modelo de Assinatura', 'Migration a Modelo de Suscripcion', 'Potential to migrate to subscription', 'Potencial para migrar para assinatura', 'Potencial para migrar a suscripcion', 'strategy', 4, ARRAY['CHURN_RATE', 'REVENUE_GROWTH'], 'Recurring clients > 60% without formal contract', 34),
('OPP_DATA_MONETIZATION', 'opportunity', 'Data Monetization', 'Monetização de Dados', 'Monetizacion de Datos', 'Company data as strategic asset', 'Dados da empresa como ativo estratégico', 'Datos de la empresa como activo estrategico', 'strategy', 3, ARRAY['REVENUE_GROWTH'], '2+ years of data with identifiable patterns', 35);

-- ============================================================================
-- 5. LIBRARY_DIAGNOSES (35 diagnósticos)
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_diagnoses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  technical_term_en TEXT NOT NULL,
  technical_term_pt TEXT NOT NULL,
  technical_term_es TEXT NOT NULL,
  cause_en TEXT NOT NULL,
  cause_pt TEXT NOT NULL,
  cause_es TEXT NOT NULL,
  effect_en TEXT NOT NULL,
  effect_pt TEXT NOT NULL,
  effect_es TEXT NOT NULL,
  why_en TEXT,
  why_pt TEXT,
  why_es TEXT,
  challenge_code TEXT REFERENCES library_challenges(code),
  domain TEXT NOT NULL,
  severity_default TEXT CHECK (severity_default IN ('low', 'medium', 'high', 'critical')),
  symptom_codes TEXT[],
  suggested_lever_codes TEXT[],
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO library_diagnoses (code, technical_term_en, technical_term_pt, technical_term_es, cause_en, cause_pt, cause_es, effect_en, effect_pt, effect_es, why_en, why_pt, why_es, challenge_code, domain, severity_default, display_order) VALUES
('DIAG_CASH_CRUNCH_001', 'Operational Liquidity Crisis', 'Crise de Liquidez Operacional', 'Crisis de Liquidez Operacional', 'Burn rate higher than cash generation', 'Burn rate superior à geração de caixa', 'Burn rate superior a la generacion de caja', 'Risk of insolvency in 45-60 days', 'Risco de insolvência em 45-60 dias', 'Riesgo de insolvencia en 45-60 dias', 'The company is spending faster than it earns', 'A empresa está gastando mais rápido do que ganha', 'La empresa esta gastando mas rapido de lo que gana', 'CASH_FLOW_CRUNCH', 'finance', 'critical', 1),
('DIAG_CASH_CRUNCH_002', 'Cash Conversion Cycle Mismatch', 'Descasamento do Ciclo Financeiro', 'Descuadre del Ciclo Financiero', 'Days to receive much larger than days to pay', 'PMR muito maior que PMP', 'Dias para cobrar mucho mayores que dias para pagar', 'Chronic negative working capital', 'Necessidade de capital de giro negativa crônica', 'Necesidad de capital de trabajo negativa cronica', 'Working capital is being consumed', 'Capital de giro está sendo consumido', 'Capital de trabajo esta siendo consumido', 'CASH_FLOW_CRUNCH', 'finance', 'high', 2),
('DIAG_SALES_001', 'Inefficiency in Acquisition Engine', 'Ineficiência no Motor de Aquisição', 'Ineficiencia en Motor de Adquisicion', 'CAC growing without proportional LTV increase', 'CAC crescendo sem proporcional aumento de LTV', 'CAC creciendo sin aumento proporcional de LTV', 'Unsustainable growth model', 'Modelo de crescimento insustentável', 'Modelo de crecimiento insostenible', 'Marketing spend is not converting', 'Gasto em marketing não está convertendo', 'Gasto en marketing no esta convirtiendo', 'INEFFICIENT_SALES_MACHINE', 'commercial', 'high', 3),
('DIAG_SALES_002', 'Elongated Sales Cycle', 'Ciclo de Vendas Elongado', 'Ciclo de Ventas Extendido', 'Sales process with unmapped bottlenecks', 'Processo de vendas com gargalos não mapeados', 'Proceso de ventas con cuellos de botella no mapeados', 'Delayed revenue and low predictability', 'Receita atrasada e baixa previsibilidade', 'Ingresos atrasados y baja predictibilidad', 'Lost opportunities due to delay', 'Oportunidades perdidas por atraso', 'Oportunidades perdidas por retraso', 'INEFFICIENT_SALES_MACHINE', 'commercial', 'medium', 4),
('DIAG_COMMODITY_001', 'Commoditization Trap', 'Armadilha da Comoditização', 'Trampa de Comoditizacion', 'Insufficient differentiation vs competitors', 'Diferenciação insuficiente vs concorrentes', 'Diferenciacion insuficiente vs competidores', 'Margins squeezed by price war', 'Margens espremidas por guerra de preços', 'Margenes exprimidas por guerra de precios', 'No perceived value difference', 'Sem percepção de diferença de valor', 'Sin percepcion de diferencia de valor', 'COMMODITY_TRAP', 'strategy', 'high', 5),
('DIAG_CHURN_001', 'Customer Base Erosion', 'Erosão da Base de Clientes', 'Erosion de Base de Clientes', 'Deficient onboarding or product without fit', 'Onboarding deficiente ou produto sem fit', 'Onboarding deficiente o producto sin fit', 'Recurring revenue decline', 'Receita recorrente em queda', 'Ingresos recurrentes en caida', 'Customers leaving before value is realized', 'Clientes saindo antes do valor ser realizado', 'Clientes saliendo antes de que se realice el valor', 'CUSTOMER_LOSS', 'commercial', 'critical', 6),
('DIAG_STOCK_001', 'Capital Immobilized in Inventory', 'Capital Imobilizado em Estoque', 'Capital Inmovilizado en Inventario', 'Purchases without historical turnover analysis', 'Compras sem análise de giro histórico', 'Compras sin analisis de giro historico', 'Cash trapped in unsellable products', 'Caixa preso em produtos sem saída', 'Efectivo atrapado en productos sin salida', 'Purchasing without demand data', 'Compras sem dados de demanda', 'Compras sin datos de demanda', 'STOCK_STAGNATION', 'operations', 'medium', 7),
('DIAG_FIXED_001', 'Rigid Cost Structure', 'Estrutura de Custos Rígida', 'Estructura de Costos Rigida', 'Long-term contracts without review', 'Contratos de longo prazo sem revisão', 'Contratos a largo plazo sin revision', 'Very high break-even for current volume', 'Break-even muito alto para o volume atual', 'Punto de equilibrio muy alto para el volumen actual', 'Fixed costs do not adjust to revenue', 'Custos fixos não se ajustam à receita', 'Costos fijos no se ajustan a los ingresos', 'HIGH_FIXED_COSTS', 'finance', 'medium', 8),
('DIAG_RECV_001', 'Long Receivables Cycle', 'Ciclo de Recebimento Longo', 'Ciclo de Cobros Largo', 'Permissive payment terms without analysis', 'Condições de pagamento permissivas sem análise', 'Condiciones de pago permisivas sin analisis', 'Growing working capital need', 'Necessidade de capital de giro crescente', 'Necesidad creciente de capital de trabajo', 'No credit risk assessment', 'Sem avaliação de risco de crédito', 'Sin evaluacion de riesgo crediticio', 'LATE_RECEIVABLES', 'finance', 'medium', 9),
('DIAG_CAC_001', 'Unsustainable Acquisition Cost', 'Custo de Aquisição Insustentável', 'Costo de Adquisicion Insostenible', 'Marketing channels with low ROAS', 'Canais de marketing com ROAS baixo', 'Canales de marketing con ROAS bajo', 'Payback period above 18 months', 'Payback acima de 18 meses', 'Periodo de recuperacion por encima de 18 meses', 'Acquisition channels are not profitable', 'Canais de aquisição não são lucrativos', 'Canales de adquisicion no son rentables', 'HIGH_ACQUISITION_COST', 'marketing', 'high', 10),
('DIAG_DELIVERY_001', 'Systemic Operational Bottleneck', 'Gargalo Operacional Sistêmico', 'Cuello de Botella Operativo Sistematico', 'Manual processes without standardization', 'Processos manuais sem padronización', 'Procesos manuales sin estandarizacion', 'Dissatisfied customers and high rework', 'Clientes insatisfeitos e retrabalho alto', 'Clientes insatisfechos y retrabajo alto', 'No process documentation', 'Sem documentação de processos', 'Sin documentacion de procesos', 'DELIVERY_DELAY', 'operations', 'high', 11),
('DIAG_TEAM_001', 'Low Productivity per Employee', 'Baixa Produtividade por Colaborador', 'Baja Productividad por Empleado', 'Inefficient processes and lack of tools', 'Processos ineficientes e falta de ferramentas', 'Procesos ineficientes y falta de herramientas', 'High personnel cost vs generated revenue', 'Custo de pessoal alto vs receita gerada', 'Costo de personal alto vs ingresos generados', 'No performance metrics', 'Sem métricas de desempenho', 'Sin metricas de desempeno', 'TEAM_INEFFICIENCY', 'people', 'medium', 12),
('DIAG_GROWTH_001', 'Growth Stagnation', 'Estagnação de Crescimento', 'Estancamiento de Crecimiento', 'Current market saturation or product not evolving', 'Saturação do mercado atual ou produto sem evolução', 'Saturacion del mercado actual o producto sin evolucion', 'Progressive market share loss', 'Perda progressiva de market share', 'Perdida progresiva de cuota de mercado', 'No product innovation', 'Sem inovação de produto', 'Sin innovacion de producto', 'GROWTH_STAGNATION', 'strategy', 'high', 13),
('DIAG_MARGIN_001', 'Margin Compression', 'Compressão de Margens', 'Compresion de Margenes', 'Costs growing faster than revenue', 'Custos crescendo mais rápido que receita', 'Costos creciendo mas rapido que ingresos', 'Path to operational loss', 'Caminho para o prejuízo operacional', 'Camino hacia la perdida operativa', 'No cost control', 'Sem controle de custos', 'Sin control de costos', 'MARGIN_COMPRESSION', 'finance', 'critical', 14),
('DIAG_DEBT_001', 'Excessive Debt', 'Endividamento Excessivo', 'Endeudamiento Excesivo', 'Growth financed by debt without cash generation', 'Crescimento financiado por dívida sem geração de caixa', 'Crecimiento financiado por deuda sin generacion de caja', 'Debt service compromising operation', 'Serviço da dívida comprometendo operação', 'Servicio de deuda comprometiendo operacion', 'Debt used for consumption', 'Dívida usada para consumo', 'Deuda usada para consumo', 'HIGH_DEBT', 'finance', 'critical', 15);

-- ============================================================================
-- 6. LIBRARY_IMPACTS (50+ impactos)
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_impacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  description_en TEXT NOT NULL,
  description_pt TEXT NOT NULL,
  description_es TEXT NOT NULL,
  target_kpi_code TEXT NOT NULL,
  impact_type TEXT NOT NULL CHECK (impact_type IN ('percentage', 'absolute', 'currency')),
  impact_value NUMERIC NOT NULL,
  impact_direction TEXT NOT NULL CHECK (impact_direction IN ('increase', 'decrease')),
  category TEXT NOT NULL CHECK (category IN ('revenue', 'cost', 'efficiency', 'quality')),
  challenge_code TEXT REFERENCES library_challenges(code),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO library_impacts (code, description_en, description_pt, description_es, target_kpi_code, impact_type, impact_value, impact_direction, category, challenge_code) VALUES
('IMP_RUNWAY_CRITICAL', 'Runway below 2 months', 'Runway abaixo de 2 meses', 'Pista por debajo de 2 meses', 'RUNWAY_MONTHS', 'percentage', 80, 'decrease', 'cost', 'CASH_FLOW_CRUNCH'),
('IMP_RUNWAY_LOW', 'Runway below 3 months', 'Runway abaixo de 3 meses', 'Pista por debajo de 3 meses', 'RUNWAY_MONTHS', 'percentage', 50, 'decrease', 'cost', 'CASH_FLOW_CRUNCH'),
('IMP_MARGIN_CRITICAL', 'Net profit margin below 5%', 'Margem líquida abaixo de 5%', 'Margen neta por debajo de 5%', 'NET_PROFIT_MARGIN', 'percentage', 70, 'decrease', 'revenue', 'COMMODITY_TRAP'),
('IMP_MARGIN_LOW', 'Net profit margin below 10%', 'Margem líquida abaixo de 10%', 'Margen neta por debajo de 10%', 'NET_PROFIT_MARGIN', 'percentage', 40, 'decrease', 'revenue', 'MARGIN_COMPRESSION'),
('IMP_CHURN_HIGH', 'Churn above 8%/month', 'Churn acima de 8%/mês', 'Churn por encima de 8%/mes', 'CHURN_RATE', 'percentage', 160, 'increase', 'revenue', 'CUSTOMER_LOSS'),
('IMP_CHURN_MEDIUM', 'Churn above 5%/month', 'Churn acima de 5%/mês', 'Churn por encima de 5%/mes', 'CHURN_RATE', 'percentage', 100, 'increase', 'revenue', 'CUSTOMER_LOSS'),
('IMP_CAC_UNSUSTAINABLE', 'CAC above LTV/2', 'CAC acima de LTV/2', 'CAC por encima de LTV/2', 'LTV_CAC_RATIO', 'percentage', 50, 'decrease', 'cost', 'HIGH_ACQUISITION_COST'),
('IMP_STOCK_FROZEN', '30% of inventory stagnant', '30% do estoque parado', '30% del inventario estancado', 'WORKING_CAPITAL', 'percentage', 30, 'decrease', 'cost', 'STOCK_STAGNATION'),
('IMP_STOCK_LOW_TURNOVER', 'Inventory turnover below 4x', 'Giro de estoque abaixo de 4x', 'Rotacion de inventario por debajo de 4x', 'INVENTORY_TURNOVER', 'percentage', 50, 'decrease', 'efficiency', 'STOCK_STAGNATION'),
('IMP_FIXED_COST_HIGH', 'Fixed costs above 60%', 'Custos fixos acima de 60%', 'Costos fijos por encima de 60%', 'FIXED_COST_RATIO', 'percentage', 40, 'increase', 'cost', 'HIGH_FIXED_COSTS'),
('IMP_PMR_HIGH', 'Days to receive above 60', 'PMR acima de 60 dias', 'Dias para cobrar por encima de 60', 'DAYS_TO_RECEIVE', 'percentage', 100, 'increase', 'cost', 'LATE_RECEIVABLES'),
('IMP_PMR_MEDIUM', 'Days to receive above 45', 'PMR acima de 45 dias', 'Dias para cobrar por encima de 45', 'DAYS_TO_RECEIVE', 'percentage', 50, 'increase', 'cost', 'LATE_RECEIVABLES'),
('IMP_GROWTH_NEGATIVE', 'Negative revenue growth', 'Crescimento de receita negativo', 'Crecimiento de ingresos negativo', 'REVENUE_GROWTH', 'percentage', 100, 'decrease', 'revenue', 'GROWTH_STAGNATION'),
('IMP_GROWTH_STAGNANT', 'Zero revenue growth', 'Crescimento de receita zero', 'Crecimiento de ingresos cero', 'REVENUE_GROWTH', 'percentage', 50, 'decrease', 'revenue', 'GROWTH_STAGNATION'),
('IMP_DEBT_HIGH', 'Debt to equity above 3x', 'D/E acima de 3x', 'D/E por encima de 3x', 'DEBT_TO_EQUITY', 'percentage', 100, 'increase', 'cost', 'HIGH_DEBT'),
('IMP_DEBT_MEDIUM', 'Debt to equity above 2x', 'D/E acima de 2x', 'D/E por encima de 2x', 'DEBT_TO_EQUITY', 'percentage', 50, 'increase', 'cost', 'HIGH_DEBT'),
('IMP_TURNOVER_HIGH', 'Employee turnover above 30%/year', 'Turnover acima de 30%/ano', 'Rotacion de empleados por encima de 30%/ano', 'EMPLOYEE_TURNOVER', 'percentage', 100, 'increase', 'cost', 'TALENT_DRAIN'),
('IMP_TURNOVER_MEDIUM', 'Employee turnover above 20%/year', 'Turnover acima de 20%/ano', 'Rotacion de empleados por encima de 20%/ano', 'EMPLOYEE_TURNOVER', 'percentage', 50, 'increase', 'cost', 'TALENT_DRAIN'),
('IMP_PRODUCTIVITY_LOW', 'Productivity below 50% benchmark', 'Produtividade abaixo de 50% do benchmark', 'Productividad por debajo de 50% del benchmark', 'PRODUCTIVITY_PER_EMPLOYEE', 'percentage', 50, 'decrease', 'efficiency', 'TEAM_INEFFICIENCY'),
('IMP_DELIVERY_DELAY', 'Delivery above 30 days', 'Entrega acima de 30 dias', 'Entrega por encima de 30 dias', 'ORDER_CYCLE_TIME', 'percentage', 100, 'increase', 'quality', 'DELIVERY_DELAY'),
('IMP_ON_TIME_LOW', 'On-time delivery below 80%', 'Entrega no prazo abaixo de 80%', 'Entrega a tiempo por debajo de 80%', 'ON_TIME_DELIVERY', 'percentage', 30, 'decrease', 'quality', 'DELIVERY_DELAY'),
-- Oportunidades - Impactos positivos
('IMP_UPSELL_POTENTIAL', 'Potential 30% LTV increase via upsell', 'Potencial de +30% no LTV via upsell', 'Potencial de +30% en LTV via upsell', 'LTV', 'percentage', 30, 'increase', 'revenue', 'OPP_UPSELL_BASE'),
('IMP_TICKET_INCREASE', 'Potential 25% ticket increase', 'Potencial de +25% no ticket', 'Potencial de +25% en ticket', 'AVG_TICKET', 'percentage', 25, 'increase', 'revenue', 'OPP_TICKET_EXPANSION'),
('IMP_REFERRAL_CAC', '40% CAC reduction via referral', 'Redução de 40% no CAC via indicação', 'Reduccion de 40% en CAC via referido', 'CAC', 'percentage', 40, 'decrease', 'cost', 'OPP_REFERRAL_PROGRAM'),
('IMP_CHANNEL_ROAS', 'ROAS above 5x in optimization opportunity', 'ROAS acima de 5x em otimização', 'ROAS por encima de 5x en optimizacion', 'ROAS', 'percentage', 100, 'increase', 'revenue', 'OPP_CHANNEL_OPTIMIZATION'),
('IMP_PRICING_REVENUE', '15% revenue increase via pricing power', '+15% na receita via poder de precificação', '+15% en ingresos via poder de precios', 'REVENUE_GROWTH', 'percentage', 15, 'increase', 'revenue', 'OPP_PRICING_POWER'),
('IMP_DIGITAL_REVENUE', 'Digital revenue potential 30%', 'Potencial de receita digital 30%', 'Potencial de ingresos digitales 30%', 'DIGITAL_REVENUE_PCT', 'percentage', 30, 'increase', 'revenue', 'OPP_DIGITAL_CHANNEL'),
('IMP_RETENTION_NPS', 'Retention above 90% with NPS > 50', 'Retenção acima de 90% com NPS > 50', 'Retencion por encima de 90% con NPS > 50', 'NPS', 'percentage', 50, 'increase', 'revenue', 'OPP_RETENTION_LEVERAGE'),
('IMP_CROSS_SELL', 'Cross-sell potential 20% revenue', 'Potencial de cross-sell 20% receita', 'Potencial de cross-sell 20% ingresos', 'CROSS_SELL_RATE', 'percentage', 20, 'increase', 'revenue', 'OPP_CROSS_SELL'),
('IMP_RECEIVABLES_FASTER', '15-25% working capital release', 'Liberação de 15-25% capital de giro', 'Liberacion de 15-25% capital de trabajo', 'WORKING_CAPITAL', 'percentage', 20, 'increase', 'cost', 'OPP_RECEIVABLES_ACCELERATION'),
('IMP_COST_REDUCTION', '5-10pp margin improvement via cost', 'Melhoria de 5-10pp via custos', 'Mejora de 5-10pp via costos', 'NET_PROFIT_MARGIN', 'percentage', 10, 'increase', 'cost', 'OPP_COST_REDUCTION'),
('IMP_AUTOMATION_GAIN', '20% capacity increase via automation', '+20% capacidade via automação', '+20% capacidad via automatizacion', 'PRODUCTIVITY_PER_EMPLOYEE', 'percentage', 20, 'increase', 'efficiency', 'OPP_AUTOMATION'),
('IMP_INVENTORY_TURNOVER', 'Inventory optimization releases capital', 'Otimização de estoque libera capital', 'Optimizacion de inventario libera capital', 'WORKING_CAPITAL', 'percentage', 25, 'increase', 'cost', 'OPP_INVENTORY_OPTIMIZATION'),
('IMP_RECURRING_REVENUE', 'Recurring revenue predictability', 'Previsibilidade de receita recorrente', 'Previsibilidad de ingresos recurrentes', 'RECURRING_REVENUE_PCT', 'percentage', 30, 'increase', 'revenue', 'OPP_RECURRING_REVENUE'),
('IMP_MARKET_EXPANSION', 'Geographic expansion potential', 'Potencial de expansão geográfica', 'Potencial de expansion geografica', 'REVENUE_GROWTH', 'percentage', 30, 'increase', 'revenue', 'OPP_GEOGRAPHIC_EXPANSION'),
('IMP_SUBSCRIPTION', 'Subscription model stability', 'Estabilidade do modelo de assinatura', 'Estabilidad del modelo de suscripcion', 'CHURN_RATE', 'percentage', 50, 'decrease', 'revenue', 'OPP_SUBSCRIPTION_MODEL');

-- ============================================================================
-- 7. INDUSTRY_TEMPLATES (15 templates)
-- ============================================================================
CREATE TABLE IF NOT EXISTS industry_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  name_en TEXT NOT NULL,
  name_pt TEXT NOT NULL,
  name_es TEXT NOT NULL,
  description_en TEXT,
  description_pt TEXT,
  description_es TEXT,
  sector TEXT NOT NULL,
  typical_challenge_codes TEXT[],  -- Array de códigos de desafios típicos
  kpi_count_typical INTEGER DEFAULT 20,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO industry_templates (code, name_en, name_pt, name_es, description_en, description_pt, description_es, sector, typical_challenge_codes, kpi_count_typical) VALUES
('VAREJO_GERAL', 'General Retail', 'Varejo Geral', 'Venta Minorista General', 'Template for general retail businesses', 'Template para negócios de varejo geral', 'Template para negocios de venta minorista general', 'retail', ARRAY['STOCK_STAGNATION', 'COMMODITY_TRAP', 'LATE_RECEIVABLES'], 25),
('VAREJO_ALIMENTAR', 'Food Retail', 'Varejo Alimentar', 'Venta Minorista de Alimentos', 'Template for food retail', 'Template para varejo alimentar', 'Template para venta minorista de alimentos', 'food', ARRAY['HIGH_FIXED_COSTS', 'STOCK_STAGNATION', 'MARGIN_COMPRESSION'], 20),
('SAAS_TECH', 'SaaS / Technology', 'SaaS / Tecnologia', 'SaaS / Tecnologia', 'Template for SaaS and tech companies', 'Template para empresas SaaS e tech', 'Template para empresas SaaS y tech', 'technology', ARRAY['CUSTOMER_LOSS', 'HIGH_ACQUISITION_COST', 'GROWTH_STAGNATION'], 30),
('SERVICOS_PROFISSIONAIS', 'Professional Services', 'Serviços Profissionais', 'Servicios Profesionales', 'Template for consulting and services', 'Template para consultoria e serviços', 'Template para consultoria y servicios', 'services', ARRAY['TEAM_INEFFICIENCY', 'LATE_RECEIVABLES', 'GROWTH_STAGNATION'], 20),
('INDUSTRIA_MANUFATURA', 'Manufacturing', 'Indústria / Manufatura', 'Industria / Manufactura', 'Template for manufacturing', 'Template para indústria/manufatura', 'Template para industria/manufactura', 'manufacturing', ARRAY['DELIVERY_DELAY', 'SUPPLIER_RISK', 'HIGH_FIXED_COSTS'], 28),
('CONSULTORIA', 'Consulting', 'Consultoria', 'Consultoria', 'Template for consulting firms', 'Template para empresas de consultoria', 'Template para empresas de consultoria', 'services', ARRAY['TEAM_INEFFICIENCY', 'GROWTH_STAGNATION', 'TALENT_DRAIN'], 18),
('SAUDE_CLINICA', 'Health / Clinic', 'Saúde / Clínica', 'Salud / Clinica', 'Template for healthcare and clinics', 'Template para saúde e clínicas', 'Template para salud y clinicas', 'healthcare', ARRAY['TALENT_DRAIN', 'HIGH_FIXED_COSTS', 'CUSTOMER_LOSS'], 22),
('EDUCACAO', 'Education', 'Educacao', 'Educacion', 'Template for education institutions', 'Template para instituições de educação', 'Template para instituciones de educacion', 'education', ARRAY['CUSTOMER_LOSS', 'GROWTH_STAGNATION', 'HIGH_FIXED_COSTS'], 15),
('ALIMENTACAO_RESTAURANTE', 'Food Service / Restaurant', 'Alimentação / Restaurante', 'Alimentacion / Restaurante', 'Template for restaurants and food service', 'Template para restaurantes e alimentação', 'Template para restaurantes y alimentacion', 'food', ARRAY['HIGH_FIXED_COSTS', 'STOCK_STAGNATION', 'TALENT_DRAIN'], 20),
('CONSTRUCAO', 'Construction', 'Construção', 'Construccion', 'Template for construction companies', 'Template para empresas de construção', 'Template para empresas de construccion', 'construction', ARRAY['CASH_FLOW_CRUNCH', 'DELIVERY_DELAY', 'SUPPLIER_RISK'], 18),
('AGRONEGOCIO', 'Agribusiness', 'Agronegócio', 'Agronegocio', 'Template for agribusiness', 'Template para agronegócio', 'Template para agronegocio', 'agriculture', ARRAY['SUPPLIER_RISK', 'CASH_FLOW_CRUNCH', 'STOCK_STAGNATION'], 20),
('ECOMMERCE', 'E-commerce', 'E-commerce', 'E-commerce', 'Template for e-commerce businesses', 'Template para negócios de e-commerce', 'Template para negocios de e-commerce', 'retail', ARRAY['HIGH_ACQUISITION_COST', 'CUSTOMER_LOSS', 'STOCK_STAGNATION'], 25),
('LOGISTICA', 'Logistics', 'Logística', 'Logistica', 'Template for logistics companies', 'Template para empresas de logística', 'Template para empresas de logistica', 'logistics', ARRAY['DELIVERY_DELAY', 'HIGH_FIXED_COSTS', 'SUPPLIER_RISK'], 22),
('FINANCEIRO_FINTECH', 'Financial / Fintech', 'Financeiro / Fintech', 'Financiero / Fintech', 'Template for financial services and fintech', 'Template para serviços financeiros e fintech', 'Template para servicios financieros y fintech', 'finance', ARRAY['HIGH_ACQUISITION_COST', 'CUSTOMER_LOSS', 'HIGH_DEBT'], 25),
('MARKETPLACE', 'Marketplace', 'Marketplace', 'Marketplace', 'Template for marketplace platforms', 'Template para plataformas marketplace', 'Template para plataformas marketplace', 'technology', ARRAY['HIGH_ACQUISITION_COST', 'GROWTH_STAGNATION', 'CUSTOMER_LOSS'], 28);

-- ============================================================================
-- 8. RLS Policies para novas tabelas
-- ============================================================================
ALTER TABLE library_timeframes ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_complexities ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_diagnoses ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_impacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE industry_templates ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Service role full access library_timeframes" ON library_timeframes FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_complexities" ON library_complexities FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_goals" ON library_goals FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_challenges" ON library_challenges FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_diagnoses" ON library_diagnoses FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_impacts" ON library_impacts FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access industry_templates" ON industry_templates FOR ALL USING (auth.role() = 'service_role');

-- ============================================================================
-- 9. COMENTÁRIOS
-- ============================================================================
COMMENT ON TABLE library_timeframes IS 'Timeframes for goal/action duration';
COMMENT ON TABLE library_complexities IS 'Complexity levels for actions';
COMMENT ON TABLE library_goals IS 'Strategic objectives';
COMMENT ON TABLE library_challenges IS 'Risks and opportunities (challenges)';
COMMENT ON TABLE library_diagnoses IS 'Technical diagnoses linked to challenges';
COMMENT ON TABLE library_impacts IS 'Quantified impacts on KPIs';
COMMENT ON TABLE industry_templates IS 'Industry-specific templates with typical challenges';
