-- ============================================================================
-- SUPERRELATÓRIOS - MODELO COMPLETO DE BIBLIOTECAS
-- Data: 2026-04-03
-- Versão: 2.0 (Modelo Consolidados com Analysis → Diagnosis → Risk/Opportunity)
--
-- PREMISSAS:
-- - Público: PMEs brasileiras (1-100 funcionários)
-- - Setores: Varejo, SaaS, Serviços, Indústria, Saúde, Educação, etc.
-- - Input: Documentos contábeis (PDF, Excel)
-- - Output: Radar de riscos e oportunidades com ações
-- - i18n: PT-BR, EN-US, ES-ES
--
-- FLUXO LÓGICO:
-- KPI Data → ANALYSIS (como identificamos) → DIAGNOSIS (por que) 
--    → RISK/OPPORTUNITY (o que) → IMPACT (quanto $) → ACTION (o que fazer)
-- ============================================================================

-- ============================================================================
-- 1. LIBRARY_ANALYSIS - Como identificamos padrões nos dados
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_analysis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    name_en TEXT NOT NULL,
    name_pt TEXT NOT NULL,
    name_es TEXT NOT NULL,
    description_en TEXT,
    description_pt TEXT,
    description_es TEXT,
    category TEXT NOT NULL CHECK (category IN ('threshold', 'trend', 'ratio', 'pattern', 'comparison')),
    trigger_kpi_codes TEXT[] NOT NULL,
    trigger_condition_en TEXT,
    trigger_condition_pt TEXT,
    trigger_condition_es TEXT,
    confidence_threshold DECIMAL(3,2) DEFAULT 0.7,
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. LIBRARY_DIAGNOSES - Causa raiz (por que acontece)
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
    analysis_codes TEXT[],
    domain TEXT NOT NULL,
    severity_default TEXT CHECK (severity_default IN ('low', 'medium', 'high', 'critical')),
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. LIBRARY_RISKS - Riscos identificados
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_risks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    name_en TEXT NOT NULL,
    name_pt TEXT NOT NULL,
    name_es TEXT NOT NULL,
    description_en TEXT,
    description_pt TEXT,
    description_es TEXT,
    domain TEXT NOT NULL,
    severity_level INTEGER CHECK (severity_level BETWEEN 1 AND 5),
    analysis_codes TEXT[],
    diagnosis_codes TEXT[],
    impact_codes TEXT[],
    action_codes TEXT[],
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. LIBRARY_OPPORTUNITIES - Oportunidades identificadas
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_opportunities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    name_en TEXT NOT NULL,
    name_pt TEXT NOT NULL,
    name_es TEXT NOT NULL,
    description_en TEXT,
    description_pt TEXT,
    description_es TEXT,
    domain TEXT NOT NULL,
    potential_impact TEXT CHECK (potential_impact IN ('high', 'medium', 'low')),
    analysis_codes TEXT[],
    diagnosis_codes TEXT[],
    impact_codes TEXT[],
    action_codes TEXT[],
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. LIBRARY_IMPACTS - Impacto quantificado (quanto $)
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
    risk_code TEXT REFERENCES library_risks(code),
    opportunity_code TEXT REFERENCES library_opportunities(code),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. LIBRARY_ACTIONS - Ações recomendadas
-- ============================================================================
CREATE TABLE IF NOT EXISTS library_actions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    title_en TEXT NOT NULL,
    title_pt TEXT NOT NULL,
    title_es TEXT NOT NULL,
    description_en TEXT,
    description_pt TEXT,
    description_es TEXT,
    steps_en TEXT[],
    steps_pt TEXT[],
    steps_es TEXT[],
    estimated_hours_min INTEGER,
    estimated_hours_max INTEGER,
    complexity_code TEXT,
    priority_score INTEGER DEFAULT 3 CHECK (priority_score BETWEEN 1 AND 5),
    quick_win BOOLEAN DEFAULT false,
    risk_codes TEXT[],
    opportunity_codes TEXT[],
    impact_codes TEXT[],
    target_goal_codes TEXT[],
    is_active BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. LIBRARY_TIMEFRAMES - Prazos (atualizar existentes)
-- ============================================================================
ALTER TABLE library_timeframes ADD COLUMN IF NOT EXISTS label_en TEXT;
ALTER TABLE library_timeframes ADD COLUMN IF NOT EXISTS label_pt TEXT;
ALTER TABLE library_timeframes ADD COLUMN IF NOT EXISTS label_es TEXT;
ALTER TABLE library_timeframes ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0;

UPDATE library_timeframes SET 
    label_en = CASE 
        WHEN code = 'IMMEDIATE' OR code = 'IMEDIATO' THEN 'Immediate'
        WHEN code = 'SHORT_TERM_2W' THEN 'Short Term (2 weeks)'
        WHEN code = 'SHORT_TERM_1M' THEN 'Short Term (1 month)'
        WHEN code = 'SHORT_TERM_45D' THEN 'Short Term (45 days)'
        WHEN code = 'MEDIUM_TERM_2M' THEN 'Medium Term (2 months)'
        WHEN code = 'MEDIUM_TERM_3M' THEN 'Medium Term (3 months)'
        WHEN code = 'LONG_TERM_6M' THEN 'Long Term (6 months)'
        WHEN code = 'LONG_TERM_1Y' THEN 'Long Term (1 year)'
        ELSE label_en
    END,
    label_es = CASE 
        WHEN code = 'IMMEDIATE' OR code = 'IMEDIATO' THEN 'Inmediato'
        WHEN code = 'SHORT_TERM_2W' THEN 'Corto Plazo (2 semanas)'
        WHEN code = 'SHORT_TERM_1M' THEN 'Corto Plazo (1 mes)'
        WHEN code = 'SHORT_TERM_45D' THEN 'Corto Plazo (45 dias)'
        WHEN code = 'MEDIUM_TERM_2M' THEN 'Medio Plazo (2 meses)'
        WHEN code = 'MEDIUM_TERM_3M' THEN 'Medio Plazo (3 meses)'
        WHEN code = 'LONG_TERM_6M' THEN 'Largo Plazo (6 meses)'
        WHEN code = 'LONG_TERM_1Y' THEN 'Largo Plazo (1 año)'
        ELSE label_es
    END
WHERE label_en IS NULL OR label_es IS NULL;

-- 8. LIBRARY_COMPLEXITIES - Complexidades (atualizar existentes)
-- ============================================================================
ALTER TABLE library_complexities ADD COLUMN IF NOT EXISTS label_en TEXT;
ALTER TABLE library_complexities ADD COLUMN IF NOT EXISTS label_pt TEXT;
ALTER TABLE library_complexities ADD COLUMN IF NOT EXISTS label_es TEXT;
ALTER TABLE library_complexities ADD COLUMN IF NOT EXISTS display_order INTEGER DEFAULT 0;

-- 9. INDUSTRY_TEMPLATES - Templates por setor
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
    typical_risk_codes TEXT[],
    typical_opportunity_codes TEXT[],
    kpi_count_typical INTEGER DEFAULT 20,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. RADAR_ITEMS - Instância por organização (atualizar)
-- ============================================================================
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS risk_code TEXT REFERENCES library_risks(code);
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS opportunity_code TEXT REFERENCES library_opportunities(code);
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS analysis_code TEXT REFERENCES library_analysis(code);
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS action_code TEXT REFERENCES library_actions(code);
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS impact_code TEXT REFERENCES library_impacts(code);
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS impact_value NUMERIC;
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS impact_currency TEXT DEFAULT 'BRL';
ALTER TABLE radar_items ADD COLUMN IF NOT EXISTS progress_percentage INTEGER DEFAULT 0;

-- Remover diagnosis_code antigo e renomear se necessário
-- ALTER TABLE radar_items DROP COLUMN IF EXISTS diagnosis_code;

-- ============================================================================
-- 11. POLÍTICAS RLS
-- ============================================================================
ALTER TABLE library_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_diagnoses ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_risks ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_impacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE industry_templates ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Service role full access library_analysis" ON library_analysis FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_diagnoses" ON library_diagnoses FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_risks" ON library_risks FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_opportunities" ON library_opportunities FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_impacts" ON library_impacts FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access library_actions" ON library_actions FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access industry_templates" ON industry_templates FOR ALL USING (auth.role() = 'service_role');

-- Radar items - policies já existem, apenas adicionar colunas
-- (verificar se já existem policies para radar_items)

-- ============================================================================
-- 12. POPULAR DADOS INICIAIS - ANALYSIS (15 análises)
-- ============================================================================
INSERT INTO library_analysis (code, name_en, name_pt, name_es, description_en, description_pt, description_es, category, trigger_kpi_codes, trigger_condition_en, trigger_condition_pt, trigger_condition_es, display_order) VALUES
-- Finance - Cash Flow
('ANALYSIS_RUNWAY_LOW', 'Runway Detection', 'Detecção de Pista', 'Deteccion de Pista', 'Identifies when cash runway is dangerously low', 'Identifica quando a pista de caixa está perigosamente baixa', 'Identifica cuando la pista de efectivo está peligrosamente baja', 'threshold', ARRAY['RUNWAY_MONTHS', 'BURN_RATE'], 'RUNWAY < 3 months', 'RUNWAY < 3 meses', 'RUNWAY < 3 meses', 1),
('ANALYSIS_CASH_BURN', 'Cash Burn Rate', 'Queima de Caixa', 'Quema de Efectivo', 'Monitors monthly cash burn', 'Monitora a queima mensal de caixa', 'Monitorea la quema mensual de efectivo', 'trend', ARRAY['BURN_RATE', 'OPERATING_CASH_FLOW'], 'Burn rate > 80% of cash', 'Burn rate > 80% do caixa', 'Burn rate > 80% del efectivo', 2),
('ANALYSIS_WORKING_CAPITAL', 'Working Capital Gap', 'Gap de Capital de Giro', 'Gap de Capital de Trabajo', 'Identifies working capital issues', 'Identifica problemas de capital de giro', 'Identifica problemas de capital de trabajo', 'ratio', ARRAY['WORKING_CAPITAL', 'DAYS_TO_RECEIVE', 'DAYS_TO_PAY'], 'Working capital negative', 'Capital de giro negativo', 'Capital de trabajo negativo', 3),

-- Finance - Margins
('ANALYSIS_MARGIN_LOW', 'Low Margin Alert', 'Alerta de Margem Baixa', 'Alerta de Margen Baja', 'Detects critically low profit margins', 'Detecta margens de lucro criticamente baixas', 'Detecta márgenes de beneficio críticamente bajos', 'threshold', ARRAY['NET_PROFIT_MARGIN', 'GROSS_MARGIN'], 'Net margin < 5%', 'Margem líquida < 5%', 'Margen neta < 5%', 4),
('ANALYSIS_MARGIN_TREND', 'Margin Compression', 'Compressão de Margenes', 'Compresion de Margenes', 'Tracks margin deterioration over time', 'Rastreia deterioração de margem ao longo do tiempo', 'Rastrea deterioro de margen a lo largo del tiempo', 'trend', ARRAY['GROSS_MARGIN', 'EBITDA_MARGIN'], 'Margin declining > 2pp/month', 'Margem caindo > 2pp/mês', 'Margen cayendo > 2pp/mes', 5),
('ANALYSIS_DEBT_HIGH', 'High Debt Level', 'Nível de Endividamento Alto', 'Nivel de Endeudamiento Alto', 'Monitors debt levels', 'Monitora níveis de endividamento', 'Monitorea niveles de endeudamiento', 'ratio', ARRAY['DEBT_TO_EQUITY', 'CURRENT_RATIO'], 'D/E > 2', 'D/E > 2', 'D/E > 2', 6),

-- Commercial - Customers
('ANALYSIS_CHURN_HIGH', 'High Churn Rate', 'Taxa de Churn Alta', 'Tasa de Churn Alta', 'Identifies customer loss patterns', 'Identifica padrões de perda de clientes', 'Identifica patrones de pérdida de clientes', 'threshold', ARRAY['CHURN_RATE', 'CUSTOMER_RETENTION_RATE'], 'Churn > 5%/month', 'Churn > 5%/mês', 'Churn > 5%/mes', 7),
('ANALYSIS_LTV_CAC', 'LTV/CAC Ratio', 'Relação LTV/CAC', 'Relacion LTV/CAC', 'Measures acquisition efficiency', 'Mede eficiência de aquisição', 'Mide eficiencia de adquisicion', 'ratio', ARRAY['LTV_CAC_RATIO', 'CAC'], 'LTV/CAC < 2', 'LTV/CAC < 2', 'LTV/CAC < 2', 8),
('ANALYSIS_CONCENTRATION', 'Customer Concentration', 'Concentração de Clientes', 'Concentracion de Clientes', 'Identifies over-reliance on few customers', 'Identifica dependência excessiva de poucos clientes', 'Identifica dependencia excesiva de pocos clientes', 'threshold', ARRAY['CUSTOMER_CONCENTRATION'], 'Top 3 customers > 50% revenue', 'Top 3 clientes > 50% receita', 'Top 3 clientes > 50% ingresos', 9),

-- Operations
('ANALYSIS_INVENTORY_SLOW', 'Slow Inventory', 'Estoque Lento', 'Inventario Lento', 'Identifies stagnant inventory', 'Identifica estoque parado', 'Identifica inventario estancado', 'ratio', ARRAY['INVENTORY_TURNOVER', 'DEAD_STOCK_RATIO'], 'Turnover < 4x/year', 'Giro < 4x/ano', 'Giro < 4x/ano', 10),
('ANALYSIS_DELIVERY_SLOW', 'Delivery Delays', 'Atrasos de Entrega', 'Retrasos de Entrega', 'Identifies operational delays', 'Identifica atrasos operacionais', 'Identifica retrasos operativos', 'threshold', ARRAY['ORDER_CYCLE_TIME', 'ON_TIME_DELIVERY'], 'Delivery > 15 days', 'Entrega > 15 dias', 'Entrega > 15 dias', 11),

-- People
('ANALYSIS_TURNOVER_HIGH', 'High Turnover', 'Turnover Alto', 'Rotacion Alta', 'Identifies talent drain', 'Identifica perda de talentos', 'Identifica fuga de talento', 'threshold', ARRAY['EMPLOYEE_TURNOVER', 'VOLUNTARY_TURNOVER'], 'Turnover > 20%/year', 'Turnover > 20%/ano', 'Rotacion > 20%/año', 12),
('ANALYSIS_PRODUCTIVITY_LOW', 'Low Productivity', 'Baixa Produtividade', 'Baja Productividad', 'Identifies underperforming teams', 'Identifica times subperformando', 'Identifica equipos bajo rendimiento', 'comparison', ARRAY['PRODUCTIVITY_PER_EMPLOYEE'], 'Productivity < 50% benchmark', 'Produtividade < 50% benchmark', 'Productividad < 50% benchmark', 13),

-- Growth
('ANALYSIS_STAGNATION', 'Revenue Stagnation', 'Estagnação de Receita', 'Estancamiento de Ingresos', 'Identifies growth issues', 'Identifica problemas de crescimento', 'Identifica problemas de crecimiento', 'trend', ARRAY['REVENUE_GROWTH'], 'Growth < 0% for 2+ months', 'Crescimento < 0% por 2+ meses', 'Crecimiento < 0% por 2+ meses', 14),
('ANALYSIS_GROWTH_HIGH', 'High Growth Potential', 'Alto Potencial de Crescimiento', 'Alto Potencial de Crecimiento', 'Identifies growth opportunities', 'Identifica oportunidades de crescimento', 'Identifica oportunidades de crecimiento', 'pattern', ARRAY['REVENUE_GROWTH', 'AVG_TICKET', 'SALES_CONVERSION'], 'Growth > 15%/month', 'Crescimento > 15%/mês', 'Crecimiento > 15%/mes', 15)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 13. POPULAR DADOS INICIAIS - DIAGNOSES (15 diagnósticos)
-- ============================================================================
INSERT INTO library_diagnoses (code, technical_term_en, technical_term_pt, technical_term_es, cause_en, cause_pt, cause_es, effect_en, effect_pt, effect_es, analysis_codes, domain, severity_default, display_order) VALUES
('DIAG_CASH_001', 'Operational Liquidity Crisis', 'Crise de Liquidez Operacional', 'Crisis de Liquidez Operacional', 'Burn rate exceeds cash generation', 'Burn rate excede geração de caixa', 'Burn rate excede generacion de efectivo', 'Risk of insolvency in 45-60 days', 'Risco de insolvência em 45-60 dias', 'Riesgo de insolvencia en 45-60 dias', ARRAY['ANALYSIS_RUNWAY_LOW', 'ANALYSIS_CASH_BURN'], 'finance', 'critical', 1),
('DIAG_CASH_002', 'Working Capital Gap', 'Gap de Capital de Giro', 'Gap de Capital de Trabajo', 'PMR significantly larger than PMP', 'PMR significativamente maior que PMP', 'Dias para cobrar mayores que dias para pagar', 'Chronic negative working capital', 'Capital de giro negativo crônico', 'Capital de trabajo negativo cronico', ARRAY['ANALYSIS_WORKING_CAPITAL'], 'finance', 'high', 2),
('DIAG_MARGIN_001', 'Margin Erosion', 'Erosão de Margens', 'Erosion de Margenes', 'Costs growing faster than revenue', 'Custos crescendo mais rápido que receita', 'Costos creciendo mas rapido que ingresos', 'Path to operational loss', 'Caminho para prejuízo operacional', 'Camino hacia pérdida operativa', ARRAY['ANALYSIS_MARGIN_LOW', 'ANALYSIS_MARGIN_TREND'], 'finance', 'critical', 3),
('DIAG_DEBT_001', 'Excessive Leverage', 'Alavancagem Excessiva', 'Apalancamiento Excesivo', 'Growth financed by debt without cash flow', 'Crescimento financiado por dívida sem fluxo de caixa', 'Crecimiento financiado por deuda sin flujo de efectivo', 'Debt service compromising operations', 'Serviço da dívida comprometendo operações', 'Servicio de deuda comprometiendo operaciones', ARRAY['ANALYSIS_DEBT_HIGH'], 'finance', 'high', 4),
('DIAG_CHURN_001', 'Customer Erosion', 'Erosão de Clientes', 'Erosion de Clientes', 'Deficient onboarding or poor product fit', 'Onboarding deficiente ou produto sem fit', 'Onboarding deficiente o producto sin fit', 'Recurring revenue decline', 'Receita recorrente em queda', 'Ingresos recurrentes en caída', ARRAY['ANALYSIS_CHURN_HIGH'], 'commercial', 'critical', 5),
('DIAG_ACQUISITION_001', 'Inefficient Acquisition', 'Aquisição Ineficiente', 'Adquisicion Ineficiente', 'CAC growing without LTV increase', 'CAC crescendo sem aumento de LTV', 'CAC creciendo sin aumento de LTV', 'Unsustainable growth model', 'Modelo de crescimento insustentável', 'Modelo de crecimiento insostenible', ARRAY['ANALYSIS_LTV_CAC'], 'commercial', 'high', 6),
('DIAG_CONCENTRATION_001', 'Customer Concentration Risk', 'Risco de Concentração de Clientes', 'Riesgo de Concentracion de Clientes', 'Over-reliance on few customers', 'Dependência excessiva de poucos clientes', 'Dependencia excesiva de pocos clientes', 'Business vulnerability', 'Vulnerabilidade do negócio', 'Vulnerabilidad del negocio', ARRAY['ANALYSIS_CONCENTRATION'], 'commercial', 'medium', 7),
('DIAG_INVENTORY_001', 'Inventory Stagnation', 'Estoque Parado', 'Inventario Estancado', 'Purchases without demand analysis', 'Compras sem análise de demanda', 'Compras sin analisis de demanda', 'Cash trapped in inventory', 'Caixa preso em estoque', 'Efectivo atrapado en inventario', ARRAY['ANALYSIS_INVENTORY_SLOW'], 'operations', 'medium', 8),
('DIAG_DELIVERY_001', 'Operational Bottleneck', 'Gargalo Operacional', 'Cuello de Botella Operativo', 'Manual processes without standardization', 'Processos manuais sem padronización', 'Procesos manuales sin estandarizacion', 'Customer dissatisfaction', 'Insatisfação de clientes', 'Insatisfacción de clientes', ARRAY['ANALYSIS_DELIVERY_SLOW'], 'operations', 'high', 9),
('DIAG_TALENT_001', 'Talent Drain', 'Perda de Talentos', 'Fuga de Talento', 'Poor compensation or work environment', 'Compensação ruim ou ambiente de trabalho', 'Compensación mala o ambiente de trabajo', 'Knowledge loss and productivity drop', 'Perda de conhecimento e queda de produtividade', 'Pérdida de conocimiento y caída de productividad', ARRAY['ANALYSIS_TURNOVER_HIGH'], 'people', 'high', 10),
('DIAG_PRODUCTIVITY_001', 'Productivity Gap', 'Gap de Produtividad', 'Gap de Productividad', 'Inefficient processes or lack of tools', 'Processos ineficientes ou falta de ferramentas', 'Procesos ineficientes o falta de herramientas', 'High personnel cost vs revenue', 'Custo alto de pessoal vs receita', 'Costo alto de personal vs ingresos', ARRAY['ANALYSIS_PRODUCTIVITY_LOW'], 'people', 'medium', 11),
('DIAG_GROWTH_001', 'Growth Stagnation', 'Estagnação de Crescimento', 'Estancamiento de Crecimiento', 'Market saturation or product stagnation', 'Saturação de mercado ou estagnação de produto', 'Saturación de mercado o estancamiento de producto', 'Competitive disadvantage', 'Desvantagem competitiva', 'Desventaja competitiva', ARRAY['ANALYSIS_STAGNATION'], 'strategy', 'high', 12),
('DIAG_OPP_UPSELL_001', 'Upsell Potential', 'Potencial de Upsell', 'Potencial de Upsell', 'Satisfied customers with room to grow', 'Clientes satisfeitos com espaço para crescer', 'Clientes satisfechos con espacio para crecer', 'Revenue expansion opportunity', 'Oportunidade de expansão de receita', 'Oportunidad de expansión de ingresos', ARRAY['ANALYSIS_GROWTH_HIGH'], 'commercial', 'medium', 13),
('DIAG_OPP_EFFICIENCY_001', 'Efficiency Gain', 'Ganho de Eficiência', 'Ganancia de Eficiencia', 'Processes that can be automated', 'Processos que podem ser automatizados', 'Procesos que pueden ser automatizados', 'Cost reduction and capacity increase', 'Redução de custos e aumento de capacidade', 'Reducción de costos y aumento de capacidad', ARRAY['ANALYSIS_PRODUCTIVITY_LOW'], 'operations', 'medium', 14),
('DIAG_OPP_PRICING_001', 'Pricing Power', 'Poder de Precificação', 'Poder de Precios', 'High margin + low churn + satisfied customers', 'Alta margem + baixo churn + clientes satisfeitos', 'Alta margen + bajo churn + clientes satisfechos', 'Revenue increase opportunity', 'Oportunidade de aumento de receita', 'Oportunidad de aumento de ingresos', ARRAY['ANALYSIS_GROWTH_HIGH'], 'commercial', 'high', 15)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 14. POPULAR DADOS INICIAIS - RISKS (15 riscos)
-- ============================================================================
INSERT INTO library_risks (code, name_en, name_pt, name_es, description_en, description_pt, description_es, domain, severity_level, analysis_codes, diagnosis_codes, display_order) VALUES
('RISK_CASH_CRUNCH', 'Cash Flow Crunch', 'Crise de Caixa', 'Crisis de Flujo de Caja', 'Money does not reach end of month', 'Dinheiro não chega ao fim do mês', 'Dinero no llega al final del mes', 'finance', 5, ARRAY['ANALYSIS_RUNWAY_LOW', 'ANALYSIS_CASH_BURN'], ARRAY['DIAG_CASH_001', 'DIAG_CASH_002'], 1),
('RISK_MARGIN_LOW', 'Low Profit Margin', 'Margem de Lucro Baixa', 'Margen de Beneficio Baja', 'Profit margins critically low', 'Margens de lucro criticamente baixas', 'Márgenes de beneficio críticamente bajos', 'finance', 5, ARRAY['ANALYSIS_MARGIN_LOW', 'ANALYSIS_MARGIN_TREND'], ARRAY['DIAG_MARGIN_001'], 2),
('RISK_HIGH_DEBT', 'High Debt Level', 'Nível de Endividamento Alto', 'Nivel de Endeudamiento Alto', 'Debt compromising operations', 'Endividamento comprometendo operações', 'Endeudamiento comprometiendo operaciones', 'finance', 4, ARRAY['ANALYSIS_DEBT_HIGH'], ARRAY['DIAG_DEBT_001'], 3),
('RISK_CUSTOMER_CHURN', 'Customer Churn', 'Perda de Clientes', 'Perdida de Clientes', 'Accelerated customer loss', 'Perda acelerada de clientes', 'Pérdida acelerada de clientes', 'commercial', 5, ARRAY['ANALYSIS_CHURN_HIGH'], ARRAY['DIAG_CHURN_001'], 4),
('RISK_HIGH_CAC', 'High Acquisition Cost', 'Custo de Aquisição Alto', 'Costo de Adquisicion Alto', 'Acquisition cost unsustainable', 'Custo de aquisição insustentável', 'Costo de adquisicion insostenible', 'commercial', 4, ARRAY['ANALYSIS_LTV_CAC'], ARRAY['DIAG_ACQUISITION_001'], 5),
('RISK_CUSTOMER_CONCENTRATION', 'Customer Concentration', 'Concentração de Clientes', 'Concentracion de Clientes', 'Over-reliance on few customers', 'Dependência excessiva de poucos clientes', 'Dependencia excesiva de pocos clientes', 'commercial', 3, ARRAY['ANALYSIS_CONCENTRATION'], ARRAY['DIAG_CONCENTRATION_001'], 6),
('RISK_INVENTORY_STOCK', 'Inventory Stagnation', 'Estoque Parado', 'Inventario Estancado', 'Capital immobilized in inventory', 'Capital imobilizado em estoque', 'Capital inmovilizado en inventario', 'operations', 3, ARRAY['ANALYSIS_INVENTORY_SLOW'], ARRAY['DIAG_INVENTORY_001'], 7),
('RISK_DELIVERY_DELAY', 'Delivery Delays', 'Atrasos de Entrega', 'Retrasos de Entrega', 'Systemic operational delays', 'Atrasos operacionais sistêmicos', 'Retrasos operativos sistemicos', 'operations', 3, ARRAY['ANALYSIS_DELIVERY_SLOW'], ARRAY['DIAG_DELIVERY_001'], 8),
('RISK_HIGH_TURNOVER', 'High Employee Turnover', 'Turnover Alto de Funcionários', 'Rotacion Alta de Empleados', 'High turnover affecting operations', 'Turnover alto comprometendo operações', 'Rotacion alta comprometiendo operaciones', 'people', 4, ARRAY['ANALYSIS_TURNOVER_HIGH'], ARRAY['DIAG_TALENT_001'], 9),
('RISK_LOW_PRODUCTIVITY', 'Low Productivity', 'Baixa Produtividad', 'Baja Productividad', 'Below benchmark productivity', 'Produtividade abaixo do benchmark', 'Productividad por debajo del benchmark', 'people', 3, ARRAY['ANALYSIS_PRODUCTIVITY_LOW'], ARRAY['DIAG_PRODUCTIVITY_001'], 10),
('RISK_GROWTH_STAGNATION', 'Growth Stagnation', 'Estagnação de Crescimento', 'Estancamiento de Crecimiento', 'Revenue growth stalled', 'Crescimento de receita estagnado', 'Crecimiento de ingresos estancado', 'strategy', 4, ARRAY['ANALYSIS_STAGNATION'], ARRAY['DIAG_GROWTH_001'], 11),
('RISK_FIXED_COSTS', 'High Fixed Costs', 'Custos Fixos Elevados', 'Costos Fijos Elevados', 'Heavy fixed cost structure', 'Estrutura de custos fixos pesada', 'Estructura de costos fijos pesada', 'finance', 3, ARRAY['ANALYSIS_MARGIN_TREND'], ARRAY['DIAG_MARGIN_001'], 12),
('RISK_LATE_RECEIVABLES', 'Late Receivables', 'Recebíveis Atrasados', 'Cuentas por Cobrar Atrasadas', 'Long receivables cycle', 'Ciclo de recebimento longo', 'Ciclo de cobros largo', 'finance', 3, ARRAY['ANALYSIS_WORKING_CAPITAL'], ARRAY['DIAG_CASH_002'], 13),
('RISK_SUPPLIER_DEPENDENCY', 'Supplier Dependency', 'Dependência de Fornecedores', 'Dependencia de Proveedores', 'Over-reliance on single supplier', 'Dependência excessiva de fornecedor único', 'Dependencia excesiva de proveedor único', 'operations', 3, ARRAY['ANALYSIS_INVENTORY_SLOW'], ARRAY['DIAG_INVENTORY_001'], 14),
('RISK_MARKET_SATURATION', 'Market Saturation', 'Saturação de Mercado', 'Saturacion de Mercado', 'Market reaching saturation point', 'Mercado atingindo ponto de saturação', 'Mercado alcanzando punto de saturación', 'strategy', 4, ARRAY['ANALYSIS_STAGNATION'], ARRAY['DIAG_GROWTH_001'], 15)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 15. POPULAR DADOS INICIAIS - OPPORTUNITIES (15 oportunidades)
-- ============================================================================
INSERT INTO library_opportunities (code, name_en, name_pt, name_es, description_en, description_pt, description_es, domain, potential_impact, analysis_codes, diagnosis_codes, display_order) VALUES
('OPP_UPSELL', 'Upsell Potential', 'Potencial de Upsell', 'Potencial de Upsell', 'Opportunity to increase LTV via upsell', 'Oportunidade de aumentar LTV via upsell', 'Oportunidad de aumentar LTV via upsell', 'commercial', 'high', ARRAY['ANALYSIS_GROWTH_HIGH', 'ANALYSIS_CHURN_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 1),
('OPP_CROSS_SELL', 'Cross-sell Opportunity', 'Oportunidade de Cross-sell', 'Oportunidad de Cross-sell', 'Opportunity to sell additional products', 'Oportunidade de vender produtos adicionais', 'Oportunidad de vender productos adicionales', 'commercial', 'medium', ARRAY['ANALYSIS_GROWTH_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 2),
('OPP_REFERRED_CUSTOMERS', 'Referral Program', 'Programa de Indicação', 'Programa de Referidos', 'Leverage satisfied customers for referrals', 'Aproveitar clientes satisfeitos para indicações', 'Aprovechar clientes satisfechos para referidos', 'marketing', 'high', ARRAY['ANALYSIS_CHURN_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 3),
('OPP_MARKET_EXPANSION', 'Market Expansion', 'Expansão de Mercado', 'Expansion de Mercado', 'Growth opportunity in new segments', 'Oportunidade de crescimento em novos segmentos', 'Oportunidad de crecimiento en nuevos segmentos', 'strategy', 'high', ARRAY['ANALYSIS_GROWTH_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 4),
('OPP_DIGITAL_CHANNEL', 'Digital Channel', 'Canal Digital', 'Canal Digital', 'Expand digital presence', 'Expandir presença digital', 'Expandir presencia digital', 'marketing', 'medium', ARRAY['ANALYSIS_GROWTH_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 5),
('OPP_AUTOMATION', 'Process Automation', 'Automação de Processos', 'Automatizacion de Procesos', 'Automate manual processes', 'Automatizar processos manuais', 'Automatizar procesos manuales', 'operations', 'high', ARRAY['ANALYSIS_PRODUCTIVITY_LOW'], ARRAY['DIAG_OPP_EFFICIENCY_001'], 6),
('OPP_COST_REDUCTION', 'Cost Reduction', 'Redução de Custos', 'Reduccion de Costos', 'Optimize cost structure', 'Otimizar estrutura de custos', 'Optimizar estructura de costos', 'finance', 'high', ARRAY['ANALYSIS_MARGIN_TREND'], ARRAY['DIAG_OPP_EFFICIENCY_001'], 7),
('OPP_PRICING_OPTIMIZATION', 'Pricing Optimization', 'Otimização de Preços', 'Optimizacion de Precios', 'Increase prices based on value', 'Aumentar preços baseado em valor', 'Aumentar precios basado en valor', 'commercial', 'high', ARRAY['ANALYSIS_MARGIN_LOW'], ARRAY['DIAG_OPP_PRICING_001'], 8),
('OPP_INVENTORY_OPTIMIZATION', 'Inventory Optimization', 'Otimização de Estoque', 'Optimizacion de Inventario', 'Improve inventory turnover', 'Melhorar giro de estoque', 'Mejorar giro de inventario', 'operations', 'medium', ARRAY['ANALYSIS_INVENTORY_SLOW'], ARRAY['DIAG_INVENTORY_001'], 9),
('OPP_RECEIVABLES_FASTER', 'Faster Receivables', 'Recebíveis mais Rápidos', 'Cobros más Rápidos', 'Accelerate receivables collection', 'Acelerar cobrança de recebíveis', 'Acelerar cobro de cuentas por cobrar', 'finance', 'medium', ARRAY['ANALYSIS_WORKING_CAPITAL'], ARRAY['DIAG_CASH_002'], 10),
('OPP_RETAIN_TALENT', 'Talent Retention', 'Retenção de Talentos', 'Retencion de Talento', 'Retain key employees', 'Reter funcionários chave', 'Retener empleados clave', 'people', 'high', ARRAY['ANALYSIS_TURNOVER_HIGH'], ARRAY['DIAG_TALENT_001'], 11),
('OPP_PRODUCTIVITY_IMPROVE', 'Productivity Improvement', 'Melhoria de Produtividad', 'Mejora de Productividad', 'Increase team productivity', 'Aumentar produtividade da equipe', 'Aumentar productividad del equipo', 'people', 'high', ARRAY['ANALYSIS_PRODUCTIVITY_LOW'], ARRAY['DIAG_PRODUCTIVITY_001'], 12),
('OPP_PARTNERSHIPS', 'Strategic Partnerships', 'Parcerias Estratégicas', 'Socios Estratégicos', 'Develop strategic partnerships', 'Desenvolver parcerias estratégicas', 'Desarrollar socios estratégicos', 'strategy', 'medium', ARRAY['ANALYSIS_GROWTH_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 13),
('OPP_SUBSCRIPTION_MODEL', 'Subscription Model', 'Modelo de Assinatura', 'Modelo de Suscripcion', 'Move to recurring revenue', 'Mudar para receita recorrente', 'Mover a ingresos recurrentes', 'strategy', 'high', ARRAY['ANALYSIS_CHURN_HIGH', 'ANALYSIS_GROWTH_HIGH'], ARRAY['DIAG_OPP_UPSELL_001'], 14),
('OPP_DATA_DRIVEN', 'Data-Driven Decisions', 'Decisões Baseadas em Dados', 'Decisiones Basadas en Datos', 'Use data for better decisions', 'Usar dados para melhores decisões', 'Usar datos para mejores decisiones', 'strategy', 'medium', ARRAY['ANALYSIS_STAGNATION'], ARRAY['DIAG_GROWTH_001'], 15)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 16. POPULAR DADOS INICIAIS - IMPACTS (30 impactos)
-- ============================================================================
INSERT INTO library_impacts (code, description_en, description_pt, description_es, target_kpi_code, impact_type, impact_value, impact_direction, category, risk_code, opportunity_code) VALUES
-- Risk impacts (negative)
('IMP_RUNWAY_CRITICAL', 'Runway below 2 months', 'Pista abaixo de 2 meses', 'Pista por debajo de 2 meses', 'RUNWAY_MONTHS', 'percentage', 80, 'decrease', 'cost', 'RISK_CASH_CRUNCH', NULL),
('IMP_MARGIN_CRITICAL', 'Net margin below 5%', 'Margem líquida abaixo de 5%', 'Margen neta por debajo de 5%', 'NET_PROFIT_MARGIN', 'percentage', 70, 'decrease', 'revenue', 'RISK_MARGIN_LOW', NULL),
('IMP_CHURN_HIGH', 'Churn above 8%/month', 'Churn acima de 8%/mês', 'Churn por encima de 8%/mes', 'CHURN_RATE', 'percentage', 160, 'increase', 'revenue', 'RISK_CUSTOMER_CHURN', NULL),
('IMP_CAC_UNSUSTAINABLE', 'CAC above LTV/2', 'CAC acima de LTV/2', 'CAC por encima de LTV/2', 'LTV_CAC_RATIO', 'percentage', 50, 'decrease', 'cost', 'RISK_HIGH_CAC', NULL),
('IMP_STOCK_FROZEN', '30% inventory stagnant', '30% estoque parado', '30% inventario estancado', 'WORKING_CAPITAL', 'percentage', 30, 'decrease', 'cost', 'RISK_INVENTORY_STOCK', NULL),
('IMP_TURNOVER_COST', 'Turnover cost 50% salary', 'Custo de turnover 50% salário', 'Costo de rotacion 50% salario', 'PRODUCTIVITY_PER_EMPLOYEE', 'percentage', 25, 'decrease', 'cost', 'RISK_HIGH_TURNOVER', NULL),
('IMP_GROWTH_NEGATIVE', 'Negative growth', 'Crescimento negativo', 'Crecimiento negativo', 'REVENUE_GROWTH', 'percentage', 100, 'decrease', 'revenue', 'RISK_GROWTH_STAGNATION', NULL),
('IMP_DEBT_SERVICE', 'Debt service > 30% revenue', 'Serviço da dívida > 30% receita', 'Servicio de deuda > 30% ingresos', 'DEBT_TO_EQUITY', 'percentage', 40, 'increase', 'cost', 'RISK_HIGH_DEBT', NULL),
-- Opportunity impacts (positive)
('IMP_UPSELL_LTV', '30% LTV increase via upsell', 'Aumento de 30% no LTV via upsell', 'Aumento de 30% en LTV via upsell', 'LTV', 'percentage', 30, 'increase', 'revenue', NULL, 'OPP_UPSELL'),
('IMP_CROSS_SELL_REV', '20% revenue via cross-sell', '20% receita via cross-sell', '20% ingresos via cross-sell', 'AVG_TICKET', 'percentage', 20, 'increase', 'revenue', NULL, 'OPP_CROSS_SELL'),
('IMP_REFERRAL_CAC', '40% CAC reduction via referral', 'Redução de 40% no CAC via indicação', 'Reducción de 40% en CAC via referido', 'CAC', 'percentage', 40, 'decrease', 'cost', NULL, 'OPP_REFERRED_CUSTOMERS'),
('IMP_AUTOMATION_SAVINGS', '25% cost reduction via automation', 'Redução de 25% via automação', 'Reducción de 25% via automatizacion', 'PRODUCTIVITY_PER_EMPLOYEE', 'percentage', 25, 'increase', 'efficiency', NULL, 'OPP_AUTOMATION'),
('IMP_PRICING_REVENUE', '15% revenue via pricing', '15% receita via precificação', '15% ingresos via precios', 'NET_PROFIT_MARGIN', 'percentage', 15, 'increase', 'revenue', NULL, 'OPP_PRICING_OPTIMIZATION'),
('IMP_INVENTORY_CASH', '20% working capital release', 'Liberação de 20% capital de giro', 'Liberación de 20% capital de trabajo', 'WORKING_CAPITAL', 'percentage', 20, 'increase', 'cost', NULL, 'OPP_INVENTORY_OPTIMIZATION'),
('IMP_RECEIVABLES_SPEED', '30% faster collection', '30% cobrança mais rápida', '30% cobro más rápido', 'DAYS_TO_RECEIVE', 'percentage', 30, 'decrease', 'cost', NULL, 'OPP_RECEIVABLES_FASTER'),
('IMP_TALENT_COST', '30% turnover cost reduction', 'Redução de 30% custo turnover', 'Reducción de 30% costo rotacion', 'EMPLOYEE_TURNOVER', 'percentage', 30, 'decrease', 'cost', NULL, 'OPP_RETAIN_TALENT'),
('IMP_PRODUCTIVITY_GAIN', '20% productivity improvement', 'Melhoria de 20% produtividade', 'Mejora de 20% productividad', 'PRODUCTIVITY_PER_EMPLOYEE', 'percentage', 20, 'increase', 'efficiency', NULL, 'OPP_PRODUCTIVITY_IMPROVE'),
('IMP_MARKET_EXPANSION', '30% revenue from new markets', '30% receita de novos mercados', '30% ingresos de nuevos mercados', 'REVENUE_GROWTH', 'percentage', 30, 'increase', 'revenue', NULL, 'OPP_MARKET_EXPANSION'),
('IMP_DIGITAL_GROWTH', '25% digital revenue increase', 'Aumento de 25% receita digital', 'Aumento de 25% ingresos digitales', 'DIGITAL_REVENUE_PCT', 'percentage', 25, 'increase', 'revenue', NULL, 'OPP_DIGITAL_CHANNEL')
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- 17. POPULAR DADOS INICIAIS - INDUSTRY TEMPLATES
-- ============================================================================
INSERT INTO industry_templates (code, name_en, name_pt, name_es, description_en, description_pt, description_es, sector, typical_risk_codes, typical_opportunity_codes, kpi_count_typical) VALUES
('TPL_RETAIL', 'Retail', 'Varejo', 'Venta Minorista', 'General retail businesses', 'Negócios de varejo geral', 'Negocios de venta minorista', 'retail', ARRAY['RISK_INVENTORY_STOCK', 'RISK_CUSTOMER_CHURN', 'RISK_MARGIN_LOW'], ARRAY['OPP_UPSELL', 'OPP_CROSS_SELL', 'OPP_DIGITAL_CHANNEL'], 25),
('TPL_SAAS', 'SaaS / Tech', 'SaaS / Tech', 'SaaS / Tech', 'Software as a Service companies', 'Empresas de Software como Serviço', 'Empresas de Software como Servicio', 'technology', ARRAY['RISK_CUSTOMER_CHURN', 'RISK_HIGH_CAC', 'RISK_GROWTH_STAGNATION'], ARRAY['OPP_UPSELL', 'OPP_SUBSCRIPTION_MODEL', 'OPP_AUTOMATION'], 30),
('TPL_SERVICES', 'Professional Services', 'Serviços Profissionais', 'Servicios Profesionales', 'Consulting and services', 'Consultoria e serviços', 'Consultoria y servicios', 'services', ARRAY['RISK_HIGH_TURNOVER', 'RISK_LOW_PRODUCTIVITY', 'RISK_MARGIN_LOW'], ARRAY['OPP_PRODUCTIVITY_IMPROVE', 'OPP_RETAIN_TALENT', 'OPP_PRICING_OPTIMIZATION'], 20),
('TPL_MANUFACTURING', 'Manufacturing', 'Manufatura', 'Manufactura', 'Manufacturing companies', 'Empresas de manufatura', 'Empresas de manufactura', 'manufacturing', ARRAY['RISK_DELIVERY_DELAY', 'RISK_SUPPLIER_DEPENDENCY', 'RISK_INVENTORY_STOCK'], ARRAY['OPP_AUTOMATION', 'OPP_INVENTORY_OPTIMIZATION', 'OPP_COST_REDUCTION'], 28),
('TPL_HEALTHCARE', 'Healthcare', 'Saúde', 'Salud', 'Health clinics and services', 'Clínicas e serviços de saúde', 'Clinicas y servicios de salud', 'healthcare', ARRAY['RISK_HIGH_TURNOVER', 'RISK_CUSTOMER_CHURN', 'RISK_MARGIN_LOW'], ARRAY['OPP_RETAIN_TALENT', 'OPP_PRICING_OPTIMIZATION', 'OPP_AUTOMATION'], 22),
('TPL_EDUCATION', 'Education', 'Educação', 'Educacion', 'Educational institutions', 'Instituições de educação', 'Instituciones de educacion', 'education', ARRAY['RISK_CUSTOMER_CHURN', 'RISK_GROWTH_STAGNATION', 'RISK_HIGH_TURNOVER'], ARRAY['OPP_UPSELL', 'OPP_REFERRED_CUSTOMERS', 'OPP_DIGITAL_CHANNEL'], 15),
('TPL_RESTAURANT', 'Food Service', 'Restaurante', 'Restaurante', 'Restaurants and food service', 'Restaurantes e alimentação', 'Restaurantes y alimentacion', 'food', ARRAY['RISK_INVENTORY_STOCK', 'RISK_MARGIN_LOW', 'RISK_HIGH_TURNOVER'], ARRAY['OPP_COST_REDUCTION', 'OPP_INVENTORY_OPTIMIZATION', 'OPP_DIGITAL_CHANNEL'], 20),
('TPL_CONSTRUCTION', 'Construction', 'Construção', 'Construccion', 'Construction companies', 'Empresas de construção', 'Empresas de construccion', 'construction', ARRAY['RISK_CASH_CRUNCH', 'RISK_DELIVERY_DELAY', 'RISK_SUPPLIER_DEPENDENCY'], ARRAY['OPP_COST_REDUCTION', 'OPP_MARKET_EXPANSION', 'OPP_PRICING_OPTIMIZATION'], 18),
('TPL_AGRIBUSINESS', 'Agribusiness', 'Agronegócio', 'Agronegocio', 'Agricultural businesses', 'Negócios agrícolas', 'Negocios agrícolas', 'agriculture', ARRAY['RISK_SUPPLIER_DEPENDENCY', 'RISK_CASH_CRUNCH', 'RISK_INVENTORY_STOCK'], ARRAY['OPP_MARKET_EXPANSION', 'OPP_PARTNERSHIPS', 'OPP_AUTOMATION'], 20),
('TPL_ECOMMERCE', 'E-commerce', 'E-commerce', 'E-commerce', 'Online retail', 'Varejo online', 'Venta minorista en linea', 'retail', ARRAY['RISK_HIGH_CAC', 'RISK_CUSTOMER_CHURN', 'RISK_MARGIN_LOW'], ARRAY['OPP_DIGITAL_CHANNEL', 'OPP_UPSELL', 'OPP_REFERRED_CUSTOMERS'], 25),
('TPL_LOGISTICS', 'Logistics', 'Logística', 'Logistica', 'Logistics companies', 'Empresas de logística', 'Empresas de logistica', 'logistics', ARRAY['RISK_DELIVERY_DELAY', 'RISK_HIGH_FIXED_COSTS', 'RISK_SUPPLIER_DEPENDENCY'], ARRAY['OPP_AUTOMATION', 'OPP_COST_REDUCTION', 'OPP_DIGITAL_CHANNEL'], 22),
('TPL_FINTECH', 'Fintech', 'Fintech', 'Fintech', 'Financial technology', 'Tecnologia financeira', 'Tecnologia financiera', 'finance', ARRAY['RISK_HIGH_CAC', 'RISK_CUSTOMER_CHURN', 'RISK_HIGH_DEBT'], ARRAY['OPP_SUBSCRIPTION_MODEL', 'OPP_DIGITAL_CHANNEL', 'OPP_MARKET_EXPANSION'], 25)
ON CONFLICT (code) DO NOTHING;

-- ============================================================================
-- COMENTÁRIOS FINAIS
-- ============================================================================
COMMENT ON TABLE library_analysis IS 'How we identify patterns in data (thresholds, trends, ratios)';
COMMENT ON TABLE library_diagnoses IS 'Root cause analysis (why it happens)';
COMMENT ON TABLE library_risks IS 'Identified risks (what can go wrong)';
COMMENT ON TABLE library_opportunities IS 'Identified opportunities (what can improve)';
COMMENT ON TABLE library_impacts IS 'Quantified financial impacts';
COMMENT ON TABLE library_actions IS 'Recommended actions to take';
COMMENT ON TABLE industry_templates IS 'Industry-specific templates with typical risks and opportunities';
