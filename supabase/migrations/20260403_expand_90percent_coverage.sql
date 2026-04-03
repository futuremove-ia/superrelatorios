-- ============================================================================
-- EXPANSÃO PARA 90% COBERTURA - SuperRelatórios
-- ============================================================================

-- ============================================================================
-- 1. EXPANDIR library_analysis (+20 análises setoriais e edge cases)
-- ============================================================================
INSERT INTO library_analysis (code, name, name_en, name_es, description, description_en, description_es, category, trigger_kpi_codes, trigger_condition, display_order) VALUES
-- Finance - Setorial
('ANALYSIS_DEBT_SERVICE', 'Cobertura de Dívida', 'Debt Service Coverage', 'Cobertura de Deuda', 'Avalia capacidade de pagar dívida', 'Evaluates debt payment capacity', 'Evalua capacidad de pago de deuda', 'ratio', ARRAY['DEBT_SERVICE_COVERAGE', 'EBITDA'], 'Debt service coverage < 1.5', 16),
('ANALYSIS_INTEREST_COVERAGE', 'Cobertura de Juros', 'Interest Coverage', 'Cobertura de Intereses', 'Avalia capacidade de pagar juros', 'Evaluates interest payment capacity', 'Evalua capacidad de pago de intereses', 'ratio', ARRAY['INTEREST_COVERAGE', 'EBIT'], 'Interest coverage < 3', 17),
('ANALYSIS_TAX_BURDEN', 'Carga Tributária', 'Tax Burden', 'Carga Tributaria', 'Identifica carga tributária alta', 'Identifies high tax burden', 'Identifica alta carga tributaria', 'ratio', ARRAY['TAX_EFFECTIVE_RATE', 'SIMPLES_ALIQUOTA'], 'Tax burden > 25%', 18),
('ANALYSIS_CASH_CONVERSION', 'Ciclo de Caixa', 'Cash Conversion Cycle', 'Ciclo de Conversión de Efectivo', 'Mede eficiência do ciclo', 'Measures cycle efficiency', 'Mide eficiencia del ciclo', 'ratio', ARRAY['CASH_CONVERSION_CYCLE', 'DAYS_TO_RECEIVE', 'DAYS_TO_PAY'], 'CCC > 90 days', 19),
('ANALYSIS_OPEX_RATIO', 'Rácio de Opex', 'Opex Ratio', 'Ratio de Opex', 'Monitora custos operacionais', 'Monitors operational costs', 'Monitorea costos operativos', 'ratio', ARRAY['FIXED_COST_RATIO', 'VARIABLE_COST_RATIO'], 'Opex > 80% revenue', 20),

-- Commercial - Setorial
('ANALYSIS_SALES_CYCLE', 'Ciclo de Vendas', 'Sales Cycle', 'Ciclo de Ventas', 'Identifica ciclos muito longos', 'Identifies very long cycles', 'Identifica ciclos muy largos', 'threshold', ARRAY['SALES_CYCLE_DAYS', 'LEAD_RESPONSE_TIME'], 'Sales cycle > 90 days', 21),
('ANALYSIS_PIPELINE_WEAK', 'Pipeline Fraco', 'Weak Pipeline', 'Pipeline Débil', 'Identifica pipeline insuficiente', 'Identifies insufficient pipeline', 'Identifica pipeline insuficiente', 'threshold', ARRAY['PIPELINE_COVERAGE', 'PIPELINE_VALUE'], 'Pipeline < 3x quota', 22),
('ANALYSIS_WIN_RATE', 'Taxa de Ganho Baixa', 'Low Win Rate', 'Tasa de Ganancia Baja', 'Identifica baixa conversão', 'Identifies low conversion', 'Identifica baja conversión', 'ratio', ARRAY['WIN_RATE', 'SALES_CONVERSION'], 'Win rate < 20%', 23),
('ANALYSIS_REV_PER_CLIENTE', 'Receita por Cliente Baixa', 'Low Revenue per Customer', 'Bajo Ingreso por Cliente', 'Identifica clientes de baixo valor', 'Identifies low value customers', 'Identifica clientes de bajo valor', 'comparison', ARRAY['REVENUE_PER_CUSTOMER', 'AVG_TICKET'], 'Revenue per customer < 50% benchmark', 24),

-- Operations - Setorial
('ANALYSIS_OEE_LOW', 'OEE Baixo', 'Low OEE', 'OEE Bajo', 'Identifica baixa eficiência de equipamento', 'Identifies low equipment efficiency', 'Identifica baja eficiencia de equipo', 'threshold', ARRAY['OEE'], 'OEE < 65%', 25),
('ANALYSIS_DEFECT_RATE', 'Taxa de Defeitos', 'Defect Rate', 'Tasa de Defectos', 'Identifica problemas de qualidade', 'Identifies quality problems', 'Identifica problemas de calidad', 'threshold', ARRAY['DEFECT_RATE', 'REWORK_RATE'], 'Defect rate > 3%', 26),
('ANALYSIS_CAPACITY_LOW', 'Baixa Utilização', 'Low Capacity Utilization', 'Baja Utilización de Capacidad', 'Identifica capacidade subutilizada', 'Identifies underutilized capacity', 'Identifica capacidad subutilizada', 'threshold', ARRAY['CAPACITY_UTILIZATION'], 'Capacity < 50%', 27),
('ANALYSIS_SUPPLIER_RISK', 'Risco de Fornecedor', 'Supplier Risk', 'Riesgo de Proveedor', 'Identifica dependência excessiva', 'Identifies excessive dependency', 'Identifica dependencia excesiva', 'threshold', ARRAY['SUPPLIER_CONCENTRATION'], 'Top supplier > 60% purchases', 28),
('ANALYSIS_LEAD_TIME', 'Lead Time Alto', 'High Lead Time', 'Lead Time Alto', 'Identifica lead times longos', 'Identifies long lead times', 'Identifica lead times largos', 'threshold', ARRAY['LEAD_TIME_SUPPLIER'], 'Lead time > 30 days', 29),
('ANALYSIS_STOCKOUT', 'Ruptura de Estoque', 'Stockout', 'Falta de Inventario', 'Identifica produtos em falta', 'Identifies out of stock products', 'Identifica productos sin stock', 'threshold', ARRAY['STOCKOUT_RATE'], 'Stockout rate > 5%', 30),

-- People - Setorial
('ANALYSIS_SKILL_GAP', 'Gap de Habilidades', 'Skill Gap', 'Brecha de Habilidades', 'Identifica falta de competências', 'Identifies lack of skills', 'Identifica falta de competencias', 'comparison', ARRAY['TRAINING_HOURS_PER_EMPLOYEE', 'PRODUCTIVITY_PER_EMPLOYEE'], 'Training hours < benchmark', 31),
('ANALYSIS_OVERTIME_HIGH', 'Horas Extras Altas', 'High Overtime', 'Horas Extra Altas', 'Identifica excesso de horas extras', 'Identifies excessive overtime', 'Identifica exceso de horas extra', 'threshold', ARRAY['OVERTIME_RATIO'], 'Overtime > 20% of hours', 32),
('ANALYSIS_BENEFITS_COST', 'Custo de Benefícios', 'Benefits Cost', 'Costo de Beneficios', 'Monitora custos de benefícios', 'Monitors benefits costs', 'Monitorea costos de beneficios', 'ratio', ARRAY['BENEFITS_COST_RATIO'], 'Benefits > 15% of payroll', 33),

-- Growth & Strategy
('ANALYSIS_MARKET_SHARE', 'Participação de Mercado', 'Market Share', 'Cuota de Mercado', 'Monitora participação de mercado', 'Monitors market share', 'Monitorea cuota de mercado', 'trend', ARRAY['MARKET_SHARE'], 'Market share declining', 34),
('ANALYSIS_DIGITAL_REV', 'Receita Digital', 'Digital Revenue', 'Ingresos Digitales', 'Monitora receita digital', 'Monitors digital revenue', 'Monitorea ingresos digitales', 'threshold', ARRAY['DIGITAL_REVENUE_PCT'], 'Digital < 10% total', 35),
('ANALYSIS_RECURRING_REV', 'Receita Recorrente', 'Recurring Revenue', 'Ingresos Recurrentes', 'Monitora receita recorrente', 'Monitors recurring revenue', 'Monitorea ingresos recurrentes', 'threshold', ARRAY['RECURRING_REVENUE_PCT'], 'Recurring < 20%', 36)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 2. EXPANDIR library_risks (+20 riscos setoriais)
-- ============================================================================
INSERT INTO library_risks (code, name, name_en, name_es, description, description_en, description_es, domain, severity_level, display_order) VALUES
-- Finance - Expandido
('RISK_DEBT_SERVICE', 'Cobertura de Dívida Inadequada', 'Inadequate Debt Service', 'Cobertura de Deuda Inadecuada', 'Capacidade insuficiente para pagar dívida', 'Insufficient capacity to pay debt', 'Capacidad insuficiente para pagar deuda', 'finance', 4, 16),
('RISK_INTEREST_COVERAGE', 'Cobertura de Juros Fraca', 'Poor Interest Coverage', 'Cobertura de Intereses Mala', 'Capacidade insuficiente para pagar juros', 'Insufficient capacity to pay interest', 'Capacidad insuficiente para pagar intereses', 'finance', 4, 17),
('RISK_TAX_BURDEN', 'Carga Tributária Excessiva', 'Excessive Tax Burden', 'Carga Tributaria Excesiva', 'Impostos muito altos para o negócio', 'Taxes too high for business', 'Impuestos muy altos para el negocio', 'finance', 3, 18),
('RISK_OPEX_HIGH', 'Opex Muito Alto', 'High Opex', 'Opex Muy Alto', 'Custos operacionais muito altos', 'Operational costs too high', 'Costos operativos muy altos', 'finance', 3, 19),
('RISK_CASH_CONVERSION', 'Ciclo de Caixa Longo', 'Long Cash Cycle', 'Ciclo de Efectivo Largo', 'Ciclo de conversão de caixa muito longo', 'Very long cash conversion cycle', 'Ciclo de conversión de efectivo muy largo', 'finance', 4, 20),

-- Commercial - Expandido
('RISK_SALES_CYCLE', 'Ciclo de Vendas Longo', 'Long Sales Cycle', 'Ciclo de Ventas Largo', 'Ciclo de vendas muito longo', 'Very long sales cycle', 'Ciclo de ventas muy largo', 'commercial', 3, 21),
('RISK_PIPELINE_WEAK', 'Pipeline Insuficiente', 'Insufficient Pipeline', 'Pipeline Insuficiente', 'Pipeline de vendas fraco', 'Weak sales pipeline', 'Pipeline de ventas débil', 'commercial', 4, 22),
('RISK_LOW_WIN_RATE', 'Baixa Taxa de Ganho', 'Low Win Rate', 'Tasa de Ganancia Baja', 'Taxa de conversão muito baixa', 'Very low conversion rate', 'Tasa de conversión muy baja', 'commercial', 3, 23),
('RISK_LOW_REV_CLIENT', 'Receita por Cliente Baixa', 'Low Revenue per Customer', 'Bajo Ingreso por Cliente', 'Clientes gerando pouca receita', 'Customers generating low revenue', 'Clientes generando pocos ingresos', 'commercial', 2, 24),
('RISK_REV_CONCENTRATION', 'Concentração de Receita', 'Revenue Concentration', 'Concentración de Ingresos', 'Receita muito concentrada', 'Revenue highly concentrated', 'Ingresos muy concentrados', 'commercial', 3, 25),

-- Operations - Expandido
('RISK_OEE_LOW', 'OEE Baixo', 'Low OEE', 'OEE Bajo', 'Eficiência de equipamento baixa', 'Low equipment efficiency', 'Baja eficiencia de equipo', 'operations', 3, 26),
('RISK_QUALITY_DEFECTS', 'Defeitos de Qualidade', 'Quality Defects', 'Defectos de Calidad', 'Taxa de defeitos alta', 'High defect rate', 'Alta tasa de defectos', 'operations', 4, 27),
('RISK_CAPACITY_LOW', 'Baixa Utilização de Capacidade', 'Low Capacity Utilization', 'Baja Utilización de Capacidad', 'Capacidade muito subutilizada', 'Capacity severely underutilized', 'Capacidad muy subutilizada', 'operations', 2, 28),
('RISK_SUPPLIER_CONCENTRATION', 'Concentração de Fornecedores', 'Supplier Concentration', 'Concentración de Proveedores', 'Dependência de poucos fornecedores', 'Dependency on few suppliers', 'Dependencia de pocos proveedores', 'operations', 3, 29),
('RISK_LEAD_TIME', 'Lead Time Longo', 'Long Lead Time', 'Lead Time Largo', 'Tempo de espera de fornecedores', 'Supplier wait time', 'Tiempo de espera de proveedores', 'operations', 3, 30),
('RISK_STOCKOUT', 'Ruptura de Estoque', 'Stockout', 'Falta de Inventario', 'Falta constante de produtos', 'Constant lack of products', 'Falta constante de productos', 'operations', 4, 31),

-- People - Expandido
('RISK_SKILL_GAP', 'Gap de Habilidades', 'Skill Gap', 'Brecha de Habilidades', 'Falta de competências na equipe', 'Lack of team skills', 'Falta de competencias en el equipo', 'people', 3, 32),
('RISK_OVERTIME', 'Horas Extras Excessivas', 'Excessive Overtime', 'Horas Extra Excesivas', 'Equipe trabalhando demais', 'Team working too much', 'Equipo trabajando demasiado', 'people', 3, 33),
('RISK_BENEFITS_COST', 'Custo de Benefícios Alto', 'High Benefits Cost', 'Costo de Beneficios Alto', 'Custos de benefícios muito altos', 'Benefits costs too high', 'Costos de beneficios muy altos', 'people', 2, 34),

-- Strategy - Expandido
('RISK_MARKET_SHARE_LOSS', 'Perda de Participação de Mercado', 'Market Share Loss', 'Pérdida de Cuota de Mercado', 'Perda progressiva de market share', 'Progressive market share loss', 'Pérdida progresiva de cuota', 'strategy', 4, 35),
('RISK_LOW_DIGITAL', 'Baixa Presença Digital', 'Low Digital Presence', 'Baja Presencia Digital', 'Presença digital muito fraca', 'Very weak digital presence', 'Presencia digital muy débil', 'strategy', 3, 36),
('RISK_LOW_RECURRING', 'Baixa Receita Recorrente', 'Low Recurring Revenue', 'Bajo Ingreso Recurrente', 'Receita muito dependente de novos clientes', 'Revenue very dependent on new customers', 'Ingresos muy dependientes de nuevos clientes', 'strategy', 4, 37)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 3. EXPANDIR library_opportunities (+20 oportunidades setoriais)
-- ============================================================================
INSERT INTO library_opportunities (code, name, name_en, name_es, description, description_en, description_es, domain, potential_impact, display_order) VALUES
-- Revenue - Expandido
('OPP_UP_SELL_PREMIUM', 'Upsell para Premium', 'Premium Upsell', 'Upsell Premium', 'Migrar clientes para versão premium', 'Migrate customers to premium version', 'Migrar clientes a versión premium', 'commercial', 'high', 16),
('OPP_BUNDLE_OFFER', 'Pacotes e Bundles', 'Bundles', 'Paquetes', 'Criar pacotes de produtos/serviços', 'Create product/service bundles', 'Crear paquetes de productos/servicios', 'commercial', 'medium', 17),
('OPP_LOYALTY_PROGRAM', 'Programa de Fidelidade', 'Loyalty Program', 'Programa de Lealtad', 'Implementar programa de fidelidade', 'Implement loyalty program', 'Implementar programa de lealtad', 'commercial', 'high', 18),
('OPP_CONTRACT_AUTOMATION', 'Automação de Contratos', 'Contract Automation', 'Automatización de Contratos', 'Automatizar processo de contratos', 'Automate contract process', 'Automatizar proceso de contratos', 'commercial', 'medium', 19),
('OPP_RENEWAL_OPTIMIZATION', 'Otimização de Renovações', 'Renewal Optimization', 'Optimización de Renovaciones', 'Melhorar taxa de renovação', 'Improve renewal rate', 'Mejorar tasa de renovación', 'commercial', 'high', 20),

-- Cost - Expandido
('OPP_SUPPLIER_NEGOTIATION', 'Negociação com Fornecedores', 'Supplier Negotiation', 'Negociación con Proveedores', 'Negociar melhores preços', 'Negotiate better prices', 'Negociar mejores precios', 'finance', 'high', 21),
('OPP_BULK_PURCHASE', 'Compra em Volume', 'Bulk Purchase', 'Compra en Volumen', 'Comprar insumos em maior quantidade', 'Buy inputs in larger quantities', 'Comprar insumos en mayor cantidad', 'finance', 'medium', 22),
('OPP_ENERGY_EFFICIENCY', 'Eficiência Energética', 'Energy Efficiency', 'Eficiencia Energética', 'Reduzir consumo de energia', 'Reduce energy consumption', 'Reducir consumo de energía', 'operations', 'medium', 23),
('OPP_WASTE_REDUCTION', 'Redução de Desperdício', 'Waste Reduction', 'Reducción de Desperdicio', 'Reduzir desperdício operacional', 'Reduce operational waste', 'Reducir desperdicio operativo', 'operations', 'medium', 24),
('OPP_MAINTENANCE_PREVENTIVE', 'Manutenção Preventiva', 'Preventive Maintenance', 'Mantenimiento Preventivo', 'Implementar manutenção preventiva', 'Implement preventive maintenance', 'Implementar mantenimiento preventivo', 'operations', 'medium', 25),
('OPP_INVENTORY_JIT', 'Estoque JIT', 'JIT Inventory', 'Inventario JIT', 'Implementar just-in-time', 'Implement just-in-time', 'Implementar just-in-time', 'operations', 'high', 26),

-- Growth - Expandido
('OPP_NEW_SEGMENT', 'Novo Segmento', 'New Segment', 'Nuevo Segmento', 'Atender novo segmento de mercado', 'Serve new market segment', 'Atender nuevo segmento de mercado', 'strategy', 'high', 27),
('OPP_NEW_GEOGRAPHY', 'Nova Geografia', 'New Geography', 'Nueva Geografía', 'Expandir para nova região', 'Expand to new region', 'Expandir a nueva región', 'strategy', 'high', 28),
('OPP_B2B_EXPANSÃO', 'Expansão B2B', 'B2B Expansion', 'Expansión B2B', 'Atender clientes empresariais', 'Serve business clients', 'Atender clientes empresariales', 'strategy', 'high', 29),
('OPP_FRANCHISE', 'Modelo de Franquia', 'Franchise Model', 'Modelo de Franquicia', 'Expandir via franquia', 'Expand via franchise', 'Expandir via franquicia', 'strategy', 'high', 30),
('OPP_STRATEGIC_ALLIANCE', 'Aliança Estratégica', 'Strategic Alliance', 'Alianza Estratégica', 'Formar parcerias estratégicas', 'Form strategic partnerships', 'Formar alianzas estratégicas', 'strategy', 'medium', 31),
('OPP_MA', 'Fusões e Aquisições', 'M&A', 'Fusiones y Adquisiciones', 'Adquirir concorrentes ou fornecedores', 'Acquire competitors or suppliers', 'Adquirir competidores o proveedores', 'strategy', 'high', 32),

-- People - Expandido
('OPP_TRAINING_PROGRAM', 'Programa de Treinamento', 'Training Program', 'Programa de Entrenamiento', 'Desenvolver competências da equipe', 'Develop team skills', 'Desarrollar competencias del equipo', 'people', 'medium', 33),
('OPP_CULTURE_BUILDING', 'Construção de Cultura', 'Culture Building', 'Construcción de Cultura', 'Fortaler cultura organizacional', 'Strengthen organizational culture', 'Fortalecer cultura organizacional', 'people', 'medium', 34),
('OPP_REMOTE_OPTIMIZATION', 'Otimização Home Office', 'Remote Optimization', 'Optimización Home Office', 'Melhorar produtividade remota', 'Improve remote productivity', 'Mejorar productividad remota', 'people', 'medium', 35),
('OPP_DIVERSITY_HIRING', 'Diversidade em Contratações', 'Diversity Hiring', 'Contratación Diversa', 'Diversificar equipe', 'Diversify team', 'Diversificar equipo', 'people', 'medium', 36),

-- Digital - Expandido
('OPP_AUTOMATION_MARKETING', 'Automação de Marketing', 'Marketing Automation', 'Automatización de Marketing', 'Automatizar marketing digital', 'Automate digital marketing', 'Automatizar marketing digital', 'marketing', 'high', 37),
('OPP_SEO_OPTIMIZATION', 'Otimização SEO', 'SEO Optimization', 'Optimización SEO', 'Melhorar ranking de busca', 'Improve search ranking', 'Mejorar posicionamiento en búsqueda', 'marketing', 'medium', 38),
('OPP_SOCIAL_SELLING', 'Social Selling', 'Social Selling', 'Social Selling', 'Vender via redes sociais', 'Sell via social media', 'Vender via redes sociales', 'marketing', 'medium', 39),
('OPP_CONTENT_MARKETING', 'Marketing de Conteúdo', 'Content Marketing', 'Marketing de Contenido', 'Criar conteúdo para atrair clientes', 'Create content to attract customers', 'Crear contenido para atraer clientes', 'marketing', 'medium', 40)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 4. EXPANDIR library_impacts (+25 impactos)
-- ============================================================================
INSERT INTO library_impacts (code, description, description_en, description_es, target_kpi_code, impact_type, impact_value, impact_direction, category, risk_code, opportunity_code) VALUES
-- Riscos Financeiros
('IMP_DEBT_SERVICE_LOW', 'Cobertura de dívida < 1.5x', 'Debt service coverage < 1.5x', 'Cobertura de deuda < 1.5x', 'DEBT_SERVICE_COVERAGE', 'percentage', 50, 'decrease', 'cost', 'RISK_DEBT_SERVICE', NULL),
('IMP_INTEREST_LOW', 'Cobertura de juros < 3x', 'Interest coverage < 3x', 'Cobertura de intereses < 3x', 'INTEREST_COVERAGE', 'percentage', 40, 'decrease', 'cost', 'RISK_INTEREST_COVERAGE', NULL),
('IMP_TAX_HIGH', 'Carga tributária > 25%', 'Tax burden > 25%', 'Carga tributaria > 25%', 'TAX_EFFECTIVE_RATE', 'percentage', 25, 'increase', 'cost', 'RISK_TAX_BURDEN', NULL),
('IMP_CCC_HIGH', 'Ciclo de caixa > 90 dias', 'Cash cycle > 90 days', 'Ciclo de efectivo > 90 dias', 'CASH_CONVERSION_CYCLE', 'percentage', 50, 'increase', 'cost', 'RISK_CASH_CONVERSION', NULL),
('IMP_OPEX_HIGH', 'Opex > 80% receita', 'Opex > 80% revenue', 'Opex > 80% ingresos', 'FIXED_COST_RATIO', 'percentage', 30, 'increase', 'cost', 'RISK_OPEX_HIGH', NULL),

-- Riscos Comerciais
('IMP_SALES_CYCLE_LONG', 'Ciclo de vendas > 90 dias', 'Sales cycle > 90 days', 'Ciclo de ventas > 90 dias', 'SALES_CYCLE_DAYS', 'percentage', 40, 'increase', 'revenue', 'RISK_SALES_CYCLE', NULL),
('IMP_PIPELINE_WEAK', 'Pipeline < 3x meta', 'Pipeline < 3x quota', 'Pipeline < 3x meta', 'PIPELINE_VALUE', 'percentage', 50, 'decrease', 'revenue', 'RISK_PIPELINE_WEAK', NULL),
('IMP_WIN_RATE_LOW', 'Taxa de ganho < 20%', 'Win rate < 20%', 'Tasa de ganancia < 20%', 'WIN_RATE', 'percentage', 35, 'decrease', 'revenue', 'RISK_LOW_WIN_RATE', NULL),

-- Riscos Operacionais
('IMP_OEE_LOW', 'OEE < 65%', 'OEE < 65%', 'OEE < 65%', 'OEE', 'percentage', 35, 'decrease', 'efficiency', 'RISK_OEE_LOW', NULL),
('IMP_DEFECT_HIGH', 'Taxa de defeitos > 3%', 'Defect rate > 3%', 'Tasa de defectos > 3%', 'DEFECT_RATE', 'percentage', 100, 'increase', 'quality', 'RISK_QUALITY_DEFECTS', NULL),
('IMP_CAPACITY_LOW', 'Utilização < 50%', 'Utilization < 50%', 'Utilización < 50%', 'CAPACITY_UTILIZATION', 'percentage', 50, 'decrease', 'efficiency', 'RISK_CAPACITY_LOW', NULL),
('IMP_STOCKOUT_HIGH', 'Ruptura > 5%', 'Stockout > 5%', 'Falta > 5%', 'STOCKOUT_RATE', 'percentage', 80, 'increase', 'revenue', 'RISK_STOCKOUT', NULL),

-- Oportunidades Revenue
('IMP_PREMIUM_UPSELL', '20% receita via premium', '20% revenue via premium', '20% ingresos via premium', 'AVG_TICKET', 'percentage', 20, 'increase', 'revenue', NULL, 'OPP_UP_SELL_PREMIUM'),
('IMP_BUNDLE_REV', '15% receita via bundles', '15% revenue via bundles', '15% ingresos via bundles', 'AVG_TICKET', 'percentage', 15, 'increase', 'revenue', NULL, 'OPP_BUNDLE_OFFER'),
('IMP_LOYALTY_REV', '25% retenção via loyalty', '25% retention via loyalty', '25% retencion via loyalty', 'CHURN_RATE', 'percentage', 25, 'decrease', 'revenue', NULL, 'OPP_LOYALTY_PROGRAM'),
('IMP_CONTRACT_SPEED', '50% mais rápido contratos', '50% faster contracts', '50% más rápido contratos', 'SALES_CYCLE_DAYS', 'percentage', 50, 'decrease', 'efficiency', NULL, 'OPP_CONTRACT_AUTOMATION'),
('IMP_RENEWAL_RATE', '20% melhor renovação', '20% better renewal', '20% mejor renovación', 'CHURN_RATE', 'percentage', 20, 'decrease', 'revenue', NULL, 'OPP_RENEWAL_OPTIMIZATION'),

-- Oportunidades Cost
('IMP_SUPPLIER_SAVINGS', '15% economia fornecedores', '15% supplier savings', '15% ahorro proveedores', 'FIXED_COST_RATIO', 'percentage', 15, 'decrease', 'cost', NULL, 'OPP_SUPPLIER_NEGOTIATION'),
('IMP_BULK_SAVINGS', '10% economia bulk', '10% bulk savings', '10% ahorro bulk', 'VARIABLE_COST_RATIO', 'percentage', 10, 'decrease', 'cost', NULL, 'OPP_BULK_PURCHASE'),
('IMP_ENERGY_SAVINGS', '20% economia energia', '20% energy savings', '20% ahorro energía', 'ENERGY_COST_RATIO', 'percentage', 20, 'decrease', 'cost', NULL, 'OPP_ENERGY_EFFICIENCY'),
('IMP_WASTE_REDUCTION', '30% redução desperdício', '30% waste reduction', '30% reducción desperdicio', 'WASTE_RATE', 'percentage', 30, 'decrease', 'cost', NULL, 'OPP_WASTE_REDUCTION'),
('IMP_JIT_INVENTORY', '25% less inventory cost', '25% less inventory cost', '25% menos costo inventario', 'WORKING_CAPITAL', 'percentage', 25, 'decrease', 'cost', NULL, 'OPP_INVENTORY_JIT'),

-- Oportunidades Growth
('IMP_NEW_SEGMENT_REV', '30% nova receita segmento', '30% new segment revenue', '30% nuevos ingresos segmento', 'REVENUE_GROWTH', 'percentage', 30, 'increase', 'revenue', NULL, 'OPP_NEW_SEGMENT'),
('IMP_NEW_GEO_REV', '25% nova receita geográfica', '25% new geographic revenue', '25% nuevos ingresos geográfica', 'REVENUE_GROWTH', 'percentage', 25, 'increase', 'revenue', NULL, 'OPP_NEW_GEOGRAPHY'),
('IMP_B2B_REV', '40% receita B2B', '40% B2B revenue', '40% ingresos B2B', 'REVENUE_GROWTH', 'percentage', 40, 'increase', 'revenue', NULL, 'OPP_B2B_EXPANSÃO'),

-- Oportunidades People
('IMP_TRAINING_PRODUCTIVITY', '15% produtividade training', '15% training productivity', '15% productividad entrenamiento', 'PRODUCTIVITY_PER_EMPLOYEE', 'percentage', 15, 'increase', 'efficiency', NULL, 'OPP_TRAINING_PROGRAM'),
('IMP_CULTURE_RETENTION', '20% retenção cultura', '20% culture retention', '20% retencion cultura', 'EMPLOYEE_TURNOVER', 'percentage', 20, 'decrease', 'cost', NULL, 'OPP_CULTURE_BUILDING'),
('IMP_REMOTE_SAVINGS', '15% economia home office', '15% home office savings', '15% ahorro home office', 'FIXED_COST_RATIO', 'percentage', 15, 'decrease', 'cost', NULL, 'OPP_REMOTE_OPTIMIZATION'),

-- Oportunidades Digital
('IMP_AUTOMATION_MARKETING', '30% leads via automação', '30% leads via automation', '30% leads via automatización', 'LEAD_TO_CUSTOMER', 'percentage', 30, 'increase', 'revenue', NULL, 'OPP_AUTOMATION_MARKETING'),
('IMP_SEO_TRAFFIC', '50% mais tráfego SEO', '50% more SEO traffic', '50% más tráfico SEO', 'ORGANIC_TRAFFIC', 'percentage', 50, 'increase', 'revenue', NULL, 'OPP_SEO_OPTIMIZATION'),
('IMP_SOCIAL_SALES', '20% vendas social media', '20% social media sales', '20% ventas social media', 'REVENUE_GROWTH', 'percentage', 20, 'increase', 'revenue', NULL, 'OPP_SOCIAL_SELLING')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 5. ATUALIZAR library_diagnoses com novos diagnoses
-- ============================================================================
INSERT INTO library_diagnoses (code, technical_term, technical_term_en, technical_term_es, cause, cause_en, cause_es, effect, effect_en, effect_es, diagnosis_type, domain, severity_default, display_order) VALUES
-- Novos diagnoses para riscos
('DIAG_DEBT_SERVICE_001', 'Cobertura de Dívida Inadequada', 'Inadequate Debt Service', 'Cobertura de Deuda Inadecuada', 'Dívida muito alta para o fluxo', 'Debt too high for cash flow', 'Deuda muy alta para el flujo', 'Inabilidade de pagar dívidas', 'Inability to pay debts', 'Incapacidad de pagar deudas', 'root_cause', 'finance', 'high', 16),
('DIAG_TAX_001', 'Planejamento Tributário Inadequado', 'Inadequate Tax Planning', 'Planeamiento Tributario Inadecuado', 'Sem otimização tributária', 'No tax optimization', 'Sin optimización tributaria', 'Impostos muito altos', 'Taxes too high', 'Impuestos muy altos', 'root_cause', 'finance', 'medium', 17),
('DIAG_SALES_003', 'Processo de Vendas Ineficiente', 'Inefficient Sales Process', 'Proceso de Ventas Ineficiente', 'Sem metodologia de vendas', 'No sales methodology', 'Sin metodología de ventas', 'Ciclo longo e conversão baixa', 'Long cycle and low conversion', 'Ciclo largo y baja conversión', 'root_cause', 'commercial', 'medium', 18),
('DIAG_QUALITY_001', 'Processo de Qualidade Inexistente', 'No Quality Process', 'Proceso de Calidad Inexistente', 'Sem controle de qualidade', 'No quality control', 'Sin control de calidad', 'Defeitos e retrabalho', 'Defects and rework', 'Defectos y retrabajo', 'root_cause', 'operations', 'high', 19),
('DIAG_CAPACITY_001', 'Capacidade Desbalanceada', 'Unbalanced Capacity', 'Capacidad Desbalanceada', 'Demanda irregular', 'Irregular demand', 'Demanda irregular', 'Subutilização ou gargalos', 'Underutilization or bottlenecks', 'Subutilización o cuellos de botella', 'root_cause', 'operations', 'medium', 20),
-- Novos diagnoses para oportunidades
('DIAG_UPSELL_001', 'Potencial de Upgrade', 'Upgrade Potential', 'Potencial de Upgrade', 'Clientes com uso acima da média', 'Customers with above average usage', 'Clientes con uso por encima del promedio', 'Perda de receita por não upgrade', 'Lost revenue from no upgrade', 'Pérdida de ingresos por no upgrade', 'opportunity', 'commercial', 'medium', 21),
('DIAG_BUNDLE_001', 'Oportunidade de Bundling', 'Bundling Opportunity', 'Oportunidad de Bundling', 'Produtos complementares não vendidos juntos', 'Complementary products not sold together', 'Productos complementarios no vendidos juntos', 'Receita não captada', 'Uncaptured revenue', 'Ingresos no captados', 'opportunity', 'commercial', 'medium', 22),
('DIAG_DIGITAL_001', 'Transformação Digital', 'Digital Transformation', 'Transformación Digital', 'Processos manuais que podem ser automatizados', 'Manual processes that can be automated', 'Procesos manuales que pueden automatizarse', 'Ineficiência e custos altos', 'Inefficiency and high costs', 'Ineficiencia y altos costos', 'opportunity', 'strategy', 'high', 23),
('DIAG_SKILL_001', 'Desenvolvimento de Talentos', 'Talent Development', 'Desarrollo de Talentos', 'Equipe sem capacitação contínua', 'Team without continuous training', 'Equipo sin capacitación continua', 'Produtividade estagnada', 'Stagnant productivity', 'Productividad estancada', 'opportunity', 'people', 'medium', 24)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- RESUMO
-- ============================================================================
SELECT 
    'library_analysis' as table_name, COUNT(*) as total FROM library_analysis
UNION ALL
SELECT 'library_risks', COUNT(*) FROM library_risks
UNION ALL
SELECT 'library_opportunities', COUNT(*) FROM library_opportunities
UNION ALL
SELECT 'library_impacts', COUNT(*) FROM library_impacts
UNION ALL
SELECT 'library_diagnoses', COUNT(*) FROM library_diagnoses;
