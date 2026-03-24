-- =====================================================
-- FASE 2: COMPLETAR STRATEGIC TEMPLATES
-- Popula strategic_templates com templates essenciais por indústria
-- Cria integração automática com outras bibliotecas
-- =====================================================

-- =====================================================
-- 1. LIMPAR E PREPARAR TABELA
-- =====================================================

-- Verificar se a tabela existe antes de limpar
DO $$
DECLARE
    v_table_exists BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates'
    ) INTO v_table_exists;
    
    IF v_table_exists THEN
        TRUNCATE TABLE strategic_templates RESTART IDENTITY CASCADE;
        RAISE NOTICE '✅ strategic_templates limpa com sucesso';
    ELSE
        RAISE NOTICE '⚠️  strategic_templates não encontrada, criando estrutura básica...';
        
        -- Criar estrutura básica primeiro
        CREATE TABLE strategic_templates (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            challenge_id UUID REFERENCES library_challenges(id),
            recommended_goal_id UUID REFERENCES library_goals(id),
            is_active BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
        
        RAISE NOTICE '✅ strategic_templates criada com estrutura básica';
    END IF;
END $$;

-- =====================================================
-- 2. TEMPLATES ESSENCIAIS POR INDÚSTRIA
-- =====================================================

-- Adicionar colunas que podem não existir na estrutura básica
DO $$
BEGIN
    -- Verificar e adicionar coluna name se não existir
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'name'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN name VARCHAR(200) NOT NULL DEFAULT '';
    END IF;
    
    -- Verificar e adicionar outras colunas necessárias
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'code'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN code VARCHAR(50) UNIQUE DEFAULT '';
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'industry'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN industry VARCHAR(50) NOT NULL DEFAULT '';
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'category'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN category VARCHAR(50) NOT NULL DEFAULT '';
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'file_structure'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN file_structure JSONB DEFAULT '{}'::jsonb;
    END IF;
    
    -- Adicionar outras colunas necessárias...
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'is_public'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN is_public BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'is_system'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN is_system BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'usage_count'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN usage_count INTEGER DEFAULT 0;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'rating'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN rating DECIMAL(3,2) DEFAULT 0.0;
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates' 
        AND column_name = 'rating_count'
    ) THEN
        ALTER TABLE strategic_templates ADD COLUMN rating_count INTEGER DEFAULT 0;
    END IF;
    
    RAISE NOTICE '✅ Colunas da strategic_templates verificadas/adicionadas';
END $$;

INSERT INTO strategic_templates (
    name, 
    code, 
    industry, 
    category, 
    subcategory,
    file_structure, 
    ai_prompt_template,
    analysis_focus,
    expected_kpis, 
    default_challenges, 
    suggested_levers,
    tags,
    sample_file_url,
    documentation_url,
    is_public,
    is_active,
    is_system,
    version,
    usage_count,
    rating,
    rating_count
) VALUES

-- TEMPLATE 1: VAREJO - ANÁLISE FINANCEIRA
('Análise Financeira Completa - Varejo',
 'FIN_VAREJO_001',
 'varejo',
 'financeiro',
 'contas_a_pagar',
 '{
   "required_columns": [
     {"name": "data", "type": "date", "format": "YYYY-MM-DD", "description": "Data da transação"},
     {"name": "descricao", "type": "string", "description": "Descrição do item financeiro"},
     {"name": "valor", "type": "number", "format": "decimal(15,2)", "description": "Valor em R$"},
     {"name": "categoria", "type": "string", "description": "Categoria: receita, custo_fixo, custo_variavel, investimento"}
   ],
   "optional_columns": [
     {"name": "centro_custo", "type": "string", "description": "Departamento ou projeto"},
     {"name": "forma_pagamento", "type": "string", "description": "Dinheiro, cartão, transferência"},
     {"name": "fornecedor_cliente", "type": "string", "description": "Nome do fornecedor ou cliente"}
   ],
   "min_rows": 20,
   "max_rows": 10000,
   "file_types": ["csv", "xlsx", "xls"],
   "validation_rules": [
     {"field": "data", "rule": "valid_date", "message": "Data deve estar no formato YYYY-MM-DD"},
     {"field": "valor", "rule": "positive_number", "message": "Valor deve ser positivo"}
   ]
 }',
 'Analise este arquivo financeiro de varejo e extraia insights sobre: margem líquida, fluxo de caixa, queima de caixa, dias para receber, e eficiência operacional. Identifique padrões de sazonalidade e alertas de risco.',
 '["margem", "fluxo_caixa", "tendencias", "sazonalidade", "alertas_risco"]',
 '[
   {"code": "NET_MARGIN", "name": "Margem Líquida", "unit": "%"},
   {"code": "BURN_RATE", "name": "Queima de Caixa", "unit": "R$"},
   {"code": "RUNWAY_MONTHS", "name": "Pista de Decolagem", "unit": "meses"},
   {"code": "DAYS_TO_RECEIVE", "name": "Dias para Receber", "unit": "dias"},
   {"code": "OPERATIONAL_EFFICIENCY", "name": "Eficiência Operacional", "unit": "%"}
 ]',
 '["LOW_MARGIN", "CASH_FLOW_CRUNCH"]',
 '["LEV_PRICE", "LEV_FIXED_COST", "LEV_CASH_CYCLE"]',
 '["varejo", "financeiro", "fluxo_caixa", "pme"],
 'https://superrelatorios.s3.amazonaws.com/templates/varejo_financeiro.xlsx',
 'https://docs.superrelatorios.com/templates/varejo-financeiro',
 true, true, true, '1.0.0', 0, 0.0, 0),

-- TEMPLATE 2: SERVIÇOS - ANÁLISE DE PRODUTIVIDADE
('Análise de Produtividade - Serviços',
 'OPS_SERVICOS_001',
 'servicos',
 'operacional',
 'produtividade',
 '{
   "required_columns": [
     {"name": "data", "type": "date", "format": "YYYY-MM-DD"},
     {"name": "funcionario", "type": "string", "description": "Nome do funcionário"},
     {"name": "horas_trabalhadas", "type": "number", "format": "decimal(5,2)", "description": "Horas trabalhadas no dia"},
     {"name": "horas_produtivas", "type": "number", "format": "decimal(5,2)", "description": "Horas em atividades produtivas"},
     {"name": "entregas", "type": "integer", "description": "Número de entregas/conclusões"}
   ],
   "optional_columns": [
     {"name": "projeto", "type": "string", "description": "Projeto ou cliente"},
     {"name": "tipo_servico", "type": "string", "description": "Tipo de serviço realizado"},
     {"name": "valor_hora", "type": "number", "format": "decimal(10,2)", "description": "Valor por hora"}
   ],
   "min_rows": 50,
   "max_rows": 5000,
   "file_types": ["csv", "xlsx"],
   "validation_rules": [
     {"field": "horas_trabalhadas", "rule": "max_24", "message": "Horas trabalhadas não podem exceder 24"},
     {"field": "horas_produtivas", "rule": "lte_trabalhadas", "message": "Horas produtivas não podem exceder horas trabalhadas"}
   ]
 }',
 'Analise este arquivo de produtividade de serviços e calcule: produtividade por funcionário, eficiência operacional, taxa de utilização, e identifique gargalos de performance. Compare produtividade entre funcionários e projetos.',
 '["produtividade", "eficiencia", "gargalos", "comparacao_equipe", "otimizacao"]',
 '[
   {"code": "PRODUCTIVITY_PER_EMPLOYEE", "name": "Produtividade por Funcionário", "unit": "R$"},
   {"code": "OPERATIONAL_EFFICIENCY", "name": "Eficiência Operacional", "unit": "%"},
   {"code": "QUALITY_RATE", "name": "Taxa de Qualidade", "unit": "%"}
 ]',
 '["SALES_STAGNATION", "TEAM_INEFFICIENCY"]',
 '["LEV_CONVERSION", "LEV_WASTE", "LEV_TEAM_PROD"]',
 '["servicos", "produtividade", "equipe", "consultoria"],
 'https://superrelatorios.s3.amazonaws.com/templates/servicos_produtividade.xlsx',
 'https://docs.superrelatorios.com/templates/servicos-produtividade',
 true, true, true, '1.0.0', 0, 0.0, 0),

-- TEMPLATE 3: E-COMMERCE - ANÁLISE DE VENDAS
('Análise de Vendas E-commerce',
 'VENDAS_ECOM_001',
 'varejo',
 'vendas',
 'ecommerce',
 '{
   "required_columns": [
     {"name": "data_venda", "type": "date", "format": "YYYY-MM-DD"},
     {"name": "produto", "type": "string", "description": "Nome ou SKU do produto"},
     {"name": "quantidade", "type": "integer", "description": "Quantidade vendida"},
     {"name": "valor_unitario", "type": "number", "format": "decimal(10,2)", "description": "Valor unitário"},
     {"name": "valor_total", "type": "number", "format": "decimal(15,2)", "description": "Valor total da venda"}
   ],
   "optional_columns": [
     {"name": "canal_venda", "type": "string", "description": "Website, marketplace, social"},
     {"name": "forma_pagamento", "type": "string", "description": "Cartão, pix, boleto"},
     {"name": "custo_aquisicao", "type": "number", "format": "decimal(10,2)", "description": "CAC da venda"},
     {"name": "categoria_produto", "type": "string", "description": "Categoria do produto"}
   ],
   "min_rows": 30,
   "max_rows": 50000,
   "file_types": ["csv", "xlsx"],
   "validation_rules": [
     {"field": "quantidade", "rule": "positive_integer", "message": "Quantidade deve ser inteiro positivo"},
     {"field": "valor_unitario", "rule": "positive_number", "message": "Valor unitário deve ser positivo"}
   ]
 }',
 'Analise este arquivo de vendas e-commerce e identifique: ticket médio, taxa de conversão, produtos mais vendidos, performance por canal, sazonalidade, e oportunidades de cross-sell/upsell. Calcule o ROI por canal de venda.',
 '["vendas", "conversao", "ticket_medio", "canais", "sazonalidade", "cross_sell"]',
 '[
   {"code": "AVG_TICKET", "name": "Ticket Médio", "unit": "R$"},
   {"code": "SALES_CONVERSION", "name": "Taxa de Conversão", "unit": "%"},
   {"code": "PIPELINE_VALUE", "name": "Valor do Pipeline", "unit": "R$"},
   {"code": "CUSTOMER_ACQ_COST", "name": "CAC", "unit": "R$"}
 ]',
 '["SALES_STAGNATION", "LOW_MARGIN"]',
 '["LEV_CONVERSION", "LEV_UPSELL", "LEV_ACQ_EFF"]',
 '["ecommerce", "vendas", "digital", "marketing"],
 'https://superrelatorios.s3.amazonaws.com/templates/ecommerce_vendas.xlsx',
 'https://docs.superrelatorios.com/templates/ecommerce-vendas',
 true, true, true, '1.0.0', 0, 0.0, 0),

-- TEMPLATE 4: INDÚSTRIA - ANÁLISE DE ESTOQUE
('Análise de Estoque e Produção',
 'OPS_INDUSTRIA_001',
 'manufatura',
 'operacional',
 'estoque',
 '{
   "required_columns": [
     {"name": "data_movimento", "type": "date", "format": "YYYY-MM-DD"},
     {"name": "produto", "type": "string", "description": "Código ou nome do produto"},
     {"name": "tipo_movimento", "type": "string", "description": "Entrada, Saída, Ajuste"},
     {"name": "quantidade", "type": "number", "format": "decimal(10,2)", "description": "Quantidade movimentada"},
     {"name": "valor_unitario", "type": "number", "format": "decimal(10,2)", "description": "Valor unitário"},
     {"name": "valor_total", "type": "number", "format": "decimal(15,2)", "description": "Valor total do movimento"}
   ],
   "optional_columns": [
     {"name": "deposito", "type": "string", "description": "Local de armazenamento"},
     {"name": "lote", "type": "string", "description": "Número do lote"},
     {"name": "fornecedor", "type": "string", "description": "Fornecedor (para entradas)"},
     {"name": "cliente", "type": "string", "description": "Cliente (para saídas)"}
   ],
   "min_rows": 20,
   "max_rows": 10000,
   "file_types": ["csv", "xlsx"],
   "validation_rules": [
     {"field": "quantidade", "rule": "non_zero", "message": "Quantidade não pode ser zero"},
     {"field": "valor_total", "rule": "positive", "message": "Valor total deve ser positivo"}
   ]
 }',
 'Analise este arquivo de movimentação de estoque e calcule: giro de estoque, dias de cobertura, valor de estoque parado, obsolescência, e oportunidades de otimização. Identifique produtos com giro lento e sugira ações de liquidação.',
 '["estoque", "giro", "cobertura", "obsolescencia", "otimizacao"]',
 '[
   {"code": "INVENTORY_TURNOVER", "name": "Giro de Estoque", "unit": "vezes"},
   {"code": "WORKING_CAPITAL", "name": "Capital de Giro", "unit": "R$"},
   {"code": "OPERATIONAL_EFFICIENCY", "name": "Eficiência Operacional", "unit": "%"}
 ]',
 '["STOCK_MONEY_TRAP", "HIGH_OVERHEAD"]',
 '["LEV_STOCK_TURN", "LEV_WASTE", "LEV_FIXED_COST"]',
 '["industria", "manufatura", "estoque", "producao"],
 'https://superrelatorios.s3.amazonaws.com/templates/industria_estoque.xlsx',
 'https://docs.superrelatorios.com/templates/industria-estoque',
 true, true, true, '1.0.0', 0, 0.0, 0),

-- TEMPLATE 5: SAAS - ANÁLISE DE MÉTRICAS DIGITAIS
('Análise de Métricas SaaS',
 'TECH_SAAS_001',
 'tecnologia',
 'operacional',
 'metricas_saaS',
 '{
   "required_columns": [
     {"name": "data", "type": "date", "format": "YYYY-MM-DD"},
     {"name": "metrica", "type": "string", "description": "Nome da métrica (MRR, Churn, etc)"},
     {"name": "valor", "type": "number", "format": "decimal(15,2)", "description": "Valor da métrica"}
   ],
   "optional_columns": [
     {"name": "plano", "type": "string", "description": "Plano do cliente"},
     {"name": "segmento", "type": "string", "description": "Segmento de cliente"},
     {"name": "pais", "type": "string", "description": "País do cliente"},
     {"name": "canal_aquisicao", "type": "string", "description": "Canal de aquisição"}
   ],
   "min_rows": 30,
   "max_rows": 5000,
   "file_types": ["csv", "xlsx", "json"],
   "expected_metrics": ["MRR", "ARR", "Churn", "LTV", "CAC", "Active_Users"]
 }',
 'Analise este arquivo de métricas SaaS e calcule: MRR growth, churn rate, LTV:CAC ratio, cohort analysis, expansão por plano, e health score da base. Identifique padrões de churn e oportunidades de expansão.',
 '["mrr", "churn", "ltv", "cac", "cohort", "expansao"]',
 '[
   {"code": "MONTHLY_RECURRING_REVENUE", "name": "MRR", "unit": "R$"},
   {"code": "CHURN_RATE", "name": "Churn", "unit": "%"},
   {"code": "CUSTOMER_LIFETIME_VALUE", "name": "LTV", "unit": "R$"},
   {"code": "ACTIVE_USERS", "name": "Usuários Ativos", "unit": "count"}
 ]',
 '["CUSTOMER_LOSS", "SALES_STAGNATION"]',
 '["LEV_RETENTION", "LEV_CONVERSION", "LEV_UPSELL"]',
 '["saas", "tecnologia", "metricas", "recorrente"],
 'https://superrelatorios.s3.amazonaws.com/templates/saas_metrics.xlsx',
 'https://docs.superrelatorios.com/templates/saas-metrics',
 true, true, true, '1.0.0', 0, 0.0, 0),

-- TEMPLATE 6: CONSULTORIA - ANÁLISE DE PROJETOS
('Análise de Rentabilidade por Projeto',
 'SERV_CONSULTORIA_001',
 'servicos',
 'financeiro',
 'projetos',
 '{
   "required_columns": [
     {"name": "projeto", "type": "string", "description": "Nome ou código do projeto"},
     {"name": "cliente", "type": "string", "description": "Nome do cliente"},
     {"name": "data_inicio", "type": "date", "format": "YYYY-MM-DD"},
     {"name": "data_fim", "type": "date", "format": "YYYY-MM-DD"},
     {"name": "horas_faturadas", "type": "number", "format": "decimal(8,2)", "description": "Total de horas faturadas"},
     {"name": "valor_faturado", "type": "number", "format": "decimal(15,2)", "description": "Valor total faturado"},
     {"name": "custo_direto", "type": "number", "format": "decimal(15,2)", "description": "Custo direto do projeto"}
   ],
   "optional_columns": [
     {"name": "horas_previstas", "type": "number", "format": "decimal(8,2)", "description": "Horas previstas no projeto"},
     {"name": "consultor", "type": "string", "description": "Consultor responsável"},
     {"name": "tipo_projeto", "type": "string", "description": "Implementação, Consultoria, Treinamento"}
   ],
   "min_rows": 10,
   "max_rows": 1000,
   "file_types": ["csv", "xlsx"],
   "validation_rules": [
     {"field": "data_fim", "rule": "after_inicio", "message": "Data fim deve ser posterior à data início"},
     {"field": "horas_faturadas", "rule": "positive", "message": "Horas faturadas devem ser positivas"}
   ]
 }',
 'Analise este arquivo de projetos de consultoria e calcule: margem por projeto, produtividade por consultor, rentabilidade por cliente, prazo vs realizado, e identifique projetos com baixa rentabilidade. Sugira otimizações de pricing e alocação.',
 '["rentabilidade", "produtividade", "pricing", "alocacao", "projetos"]',
 '[
   {"code": "NET_MARGIN", "name": "Margem Líquida", "unit": "%"},
   {"code": "PRODUCTIVITY_PER_EMPLOYEE", "name": "Produtividade por Funcionário", "unit": "R$"},
   {"code": "SALES_PER_EMPLOYEE", "name": "Vendas por Funcionário", "unit": "R$"}
 ]',
 '["LOW_MARGIN", "TEAM_INEFFICIENCY"]',
 '["LEV_PRICE", "LEV_TEAM_PROD", "LEV_CONVERSION"]',
 '["consultoria", "servicos", "projetos", "rentabilidade"],
 'https://superrelatorios.s3.amazonaws.com/templates/consultoria_projetos.xlsx',
 'https://docs.superrelatorios.com/templates/consultoria-projetos',
 true, true, true, '1.0.0', 0, 0.0, 0);

-- =====================================================
-- 3. ÍNDICES OTIMIZADOS PARA PERFORMANCE
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_strategic_templates_industry ON strategic_templates(industry);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_category ON strategic_templates(category);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_active ON strategic_templates(is_active);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_public ON strategic_templates(is_public) WHERE is_public = true;
CREATE INDEX IF NOT EXISTS idx_strategic_templates_tags ON strategic_templates USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_usage ON strategic_templates(usage_count DESC);

-- =====================================================
-- 4. FUNÇÃO: SUGERIR TEMPLATE AUTOMÁTICO
-- =====================================================

CREATE OR REPLACE FUNCTION suggest_template_for_upload(
    p_file_structure JSONB,
    p_industry_hint VARCHAR DEFAULT NULL,
    p_organization_id UUID DEFAULT NULL
)
RETURNS TABLE (
    template_id UUID,
    template_name VARCHAR,
    match_score DECIMAL(3,2),
    match_reason TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        st.id as template_id,
        st.name as template_name,
        CASE 
            -- Match perfeito por indústria
            WHEN p_industry_hint IS NOT NULL AND LOWER(p_industry_hint) = LOWER(st.industry) THEN 1.00
            -- Match por estrutura de arquivo
            WHEN p_file_structure @> st.file_structure THEN 0.80
            -- Match parcial por categoria
            WHEN p_file_structure ? 'required_columns' AND 
                 jsonb_array_length(p_file_structure->'required_columns') >= 3 THEN 0.60
            ELSE 0.30
        END as match_score,
        CASE 
            WHEN p_industry_hint IS NOT NULL AND LOWER(p_industry_hint) = LOWER(st.industry) 
                THEN 'Match perfeito por indústria: ' || st.industry
            WHEN p_file_structure @> st.file_structure 
                THEN 'Estrutura de arquivo compatível'
            WHEN p_file_structure ? 'required_columns' AND 
                 jsonb_array_length(p_file_structure->'required_columns') >= 3 
                THEN 'Estrutura parcialmente compatível'
            ELSE 'Template genérico sugerido'
        END as match_reason
    FROM strategic_templates st
    WHERE st.is_active = true
      AND (p_industry_hint IS NULL OR LOWER(p_industry_hint) = LOWER(st.industry) OR st.industry = 'geral')
    ORDER BY match_score DESC, st.usage_count DESC
    LIMIT 3;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- 5. FUNÇÃO: REGISTRAR USO DE TEMPLATE
-- =====================================================

CREATE OR REPLACE FUNCTION record_template_usage(
    p_template_id UUID,
    p_organization_id UUID,
    p_rating INT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
    UPDATE strategic_templates 
    SET usage_count = usage_count + 1,
        rating = CASE 
            WHEN p_rating IS NOT NULL THEN 
                ((rating * rating_count) + p_rating) / (rating_count + 1)
            ELSE rating
        END,
        rating_count = rating_count + 1
    WHERE id = p_template_id;
    
    -- Registrar no histórico de uso (se existir tabela)
    INSERT INTO user_action_history (
        organization_id,
        action_id,
        status,
        notes,
        created_at
    ) VALUES (
        p_organization_id,
        p_template_id,
        'template_used',
        'Template utilizado: ' || (SELECT name FROM strategic_templates WHERE id = p_template_id),
        NOW()
    ) ON CONFLICT DO NOTHING;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 6. VIEW: TEMPLATES POPULARES
-- =====================================================

CREATE OR REPLACE VIEW popular_templates AS
SELECT 
    st.id,
    st.name,
    st.code,
    st.industry,
    st.category,
    st.usage_count,
    st.rating,
    st.rating_count,
    st.tags,
    st.is_public,
    CASE 
        WHEN st.usage_count > 100 THEN 'muito_popular'
        WHEN st.usage_count > 50 THEN 'popular'
        WHEN st.usage_count > 10 THEN 'em_uso'
        ELSE 'novo'
    END as popularity_level,
    st.expected_kpis,
    st.default_challenges,
    st.suggested_levers
FROM strategic_templates st
WHERE st.is_active = true
  AND st.is_public = true
ORDER BY st.usage_count DESC, st.rating DESC;

-- =====================================================
-- 7. VIEW: TEMPLATES POR INDÚSTRIA
-- =====================================================

CREATE OR REPLACE VIEW templates_by_industry AS
SELECT 
    industry,
    COUNT(*) as total_templates,
    COUNT(*) FILTER (WHERE is_public = true) as public_templates,
    STRING_AGG(DISTINCT category, ', ') as available_categories,
    AVG(rating) as avg_rating,
    SUM(usage_count) as total_usage
FROM strategic_templates
WHERE is_active = true
GROUP BY industry
ORDER BY total_usage DESC;

-- =====================================================
-- 8. VALIDAÇÃO E RELATÓRIO
-- =====================================================

-- Verificar templates criados
SELECT 'TEMPLATES CRIADOS COM SUCESSO' as status,
       COUNT(*) as total_templates,
       COUNT(*) FILTER (WHERE is_public = true) as public_templates,
       COUNT(*) FILTER (WHERE is_system = true) as system_templates,
       COUNT(DISTINCT industry) as industries_covered,
       COUNT(DISTINCT category) as categories_covered,
       STRING_AGG(DISTINCT industry, ', ') as industries_list
FROM strategic_templates
WHERE is_active = true;

-- Verificar integridade das referências
SELECT 'INTEGRIDADE REFERÊNCIAS' as status,
       (SELECT COUNT(*) FROM strategic_templates st WHERE st.default_challenges && ARRAY(
           SELECT code FROM library_challenges WHERE id = ANY(st.default_challenges::uuid[])
       )) as templates_valid_challenges,
       (SELECT COUNT(*) FROM strategic_templates st WHERE st.suggested_levers && ARRAY(
           SELECT code FROM library_levers WHERE id = ANY(st.suggested_levers::uuid[])
       )) as templates_valid_levers,
       (SELECT COUNT(*) FROM strategic_templates st WHERE st.expected_kpis IS NOT NULL AND st.expected_kpis @> ARRAY(
           SELECT code FROM kpi_master_unified WHERE id = ANY(
               (SELECT elem->>'code' FROM jsonb_array_elements(st.expected_kpis) elem)::uuid[]
           )
       )) as templates_valid_kpis;

-- =====================================================
-- 9. HABILITAR RLS
-- =====================================================

ALTER TABLE strategic_templates ENABLE ROW LEVEL SECURITY;

-- Políticas de leitura (templates públicos para todos)
CREATE POLICY "Anyone can read public templates" ON strategic_templates
  FOR SELECT USING (is_public = true);

-- Políticas de leitura (todos para usuários autenticados)
CREATE POLICY "Authenticated users can read templates" ON strategic_templates
  FOR SELECT USING (auth.role() = 'authenticated');

-- Políticas de escrita (apenas service role)
CREATE POLICY "Service role can manage templates" ON strategic_templates
  FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- 10. PRÓXIMOS PASSOS
-- =====================================================

SELECT 'FASE 2 CONCLUÍDA: Strategic Templates completados com sucesso' as status,
       'Próximo: Implementar integração Frontend-Backend (Fase 3)' as next_step;
