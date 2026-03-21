-- =====================================================
-- FASE 2: TEMPLATES INTELIGENTES
-- Tabela para gerenciar templates estratégicos por indústria
-- =====================================================

-- =====================================================
-- 1. CRIAR TABELA strategic_templates
-- =====================================================

DROP TABLE IF EXISTS strategic_templates CASCADE;

CREATE TABLE strategic_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Identificação
    name VARCHAR(200) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL, -- Código único global
    description TEXT,
    
    -- Categorização
    industry VARCHAR(50) NOT NULL, -- varejo, servicos, manufatura, saude, educacao, financeiro, etc.
    category VARCHAR(50) NOT NULL, -- financeiro, vendas, operacional, marketing, rh, etc.
    subcategory VARCHAR(50), -- contas_a_pagar, fluxo_caixa, vendas_online, etc.
    
    -- Estrutura esperada do arquivo
    file_structure JSONB NOT NULL, -- Colunas obrigatórias e opcionais
    -- Exemplo:
    -- {
    --   "required_columns": [
    --     {"name": "data", "type": "date", "format": "YYYY-MM-DD"},
    --     {"name": "descricao", "type": "string"},
    --     {"name": "valor", "type": "number", "format": "decimal(15,2)"}
    --   ],
    --   "optional_columns": [
    --     {"name": "categoria", "type": "string"},
    --     {"name": "centro_custo", "type": "string"}
    --   ],
    --   "min_rows": 10,
    --   "max_rows": 10000,
    --   "file_types": ["csv", "xlsx", "xls"]
    -- }
    
    -- Configurações de IA
    ai_prompt_template TEXT, -- Template de prompt personalizado
    analysis_focus JSONB DEFAULT '[]'::jsonb, -- Áreas de foco da análise
    -- Exemplo: ["margem", "fluxo_caixa", "tendencias", "sazonalidade"]
    
    -- Métricas esperadas
    expected_kpis JSONB DEFAULT '[]'::jsonb, -- KPIs que este template deve extrair
    -- Exemplo: [
    --   {"code": "MARGEM_LIQUIDA", "name": "Margem Líquida", "unit": "percentage"},
    --   {"code": "FLUXO_CAIXA", "name": "Fluxo de Caixa", "unit": "currency"}
    -- ]
    
    -- Metadados
    tags TEXT[], -- Tags para busca
    sample_file_url TEXT, -- URL de arquivo de exemplo
    documentation_url TEXT, -- URL da documentação
    
    -- Controle de versão
    version VARCHAR(20) DEFAULT '1.0.0',
    parent_template_id UUID REFERENCES strategic_templates(id), -- Para templates derivados
    
    -- Popularidade e uso
    usage_count INTEGER DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0.0, -- Média de avaliações 0-5
    rating_count INTEGER DEFAULT 0,
    
    -- Flags
    is_public BOOLEAN DEFAULT false, -- Disponível para outras organizações?
    is_active BOOLEAN DEFAULT true,
    is_system BOOLEAN DEFAULT false, -- Template do sistema (não deletável)
    
    -- Vínculos estratégicos
    default_challenges TEXT[], -- Desafios comuns para este tipo de análise
    suggested_levers TEXT[], -- Alavancas típicas para este template
    
    -- Metadados
    created_by UUID REFERENCES auth.users(id),
    updated_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT strategic_templates_code_org_unique UNIQUE (organization_id, code),
    CONSTRAINT strategic_templates_rating_check CHECK (rating >= 0 AND rating <= 5),
    CONSTRAINT strategic_templates_usage_check CHECK (usage_count >= 0)
);

-- =====================================================
-- 2. ÍNDICES OTIMIZADOS
-- =====================================================

-- Índices para busca e filtros
CREATE INDEX idx_strategic_templates_org ON strategic_templates(organization_id);
CREATE INDEX idx_strategic_templates_industry ON strategic_templates(industry);
CREATE INDEX idx_strategic_templates_category ON strategic_templates(category);
CREATE INDEX idx_strategic_templates_active ON strategic_templates(is_active);
CREATE INDEX idx_strategic_templates_public ON strategic_templates(is_public) WHERE is_public = true;
CREATE INDEX idx_strategic_templates_system ON strategic_templates(is_system) WHERE is_system = true;

-- Índice composto para busca por indústria + categoria
CREATE INDEX idx_strategic_templates_industry_category ON strategic_templates(industry, category);

-- Índice GIN para busca em tags e arrays
CREATE INDEX idx_strategic_templates_tags ON strategic_templates USING GIN(tags);
CREATE INDEX idx_strategic_templates_challenges ON strategic_templates USING GIN(default_challenges);
CREATE INDEX idx_strategic_templates_levers ON strategic_templates USING GIN(suggested_levers);

-- Índice GIN para busca em JSONB
CREATE INDEX idx_strategic_templates_structure ON strategic_templates USING GIN(file_structure);
CREATE INDEX idx_strategic_templates_kpis ON strategic_templates USING GIN(expected_kpis);
CREATE INDEX idx_strategic_templates_focus ON strategic_templates USING GIN(analysis_focus);

-- Índice para ordenação por popularidade
CREATE INDEX idx_strategic_templates_popularity ON strategic_templates(usage_count DESC, rating DESC);

-- =====================================================
-- 3. TRIGGERS E FUNÇÕES AUXILIARES
-- =====================================================

-- Trigger para updated_at
CREATE TRIGGER strategic_templates_updated_at
    BEFORE UPDATE ON strategic_templates
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para incrementar uso do template
CREATE OR REPLACE FUNCTION increment_template_usage(p_template_id UUID)
RETURNS VOID AS $$
BEGIN
    UPDATE strategic_templates 
    SET usage_count = usage_count + 1,
        updated_at = NOW()
    WHERE id = p_template_id;
END;
$$ LANGUAGE plpgsql;

-- Função para avaliar template
CREATE OR REPLACE FUNCTION rate_template(
    p_template_id UUID,
    p_user_id UUID,
    p_rating INTEGER
) RETURNS VOID AS $$
DECLARE
    v_org_id UUID;
BEGIN
    -- Buscar org do usuário
    SELECT organization_id INTO v_org_id
    FROM profiles
    WHERE id = p_user_id;
    
    -- Atualizar rating (média ponderada)
    UPDATE strategic_templates 
    SET 
        rating = ((rating * rating_count) + p_rating) / (rating_count + 1),
        rating_count = rating_count + 1,
        updated_at = NOW()
    WHERE id = p_template_id
      AND (organization_id = v_org_id OR is_public = true);
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 4. SEED DE TEMPLATES PADRÃO (Sistema)
-- =====================================================

INSERT INTO strategic_templates (
    name,
    code,
    description,
    industry,
    category,
    subcategory,
    file_structure,
    ai_prompt_template,
    analysis_focus,
    expected_kpis,
    tags,
    default_challenges,
    suggested_levers,
    is_system,
    is_public,
    is_active,
    version
) VALUES
-- Template 1: Fluxo de Caixa
(
    'Fluxo de Caixa Mensal',
    'FLUXO_CAIXA_MENSAL',
    'Análise completa de fluxo de caixa com entradas, saídas e saldo',
    'general',
    'financeiro',
    'fluxo_caixa',
    '{
        "required_columns": [
            {"name": "data", "type": "date", "format": "YYYY-MM-DD", "description": "Data do lançamento"},
            {"name": "descricao", "type": "string", "description": "Descrição do lançamento"},
            {"name": "valor", "type": "number", "format": "decimal(15,2)", "description": "Valor do lançamento"},
            {"name": "tipo", "type": "string", "description": "Entrada ou Saída"}
        ],
        "optional_columns": [
            {"name": "categoria", "type": "string", "description": "Categoria do lançamento"},
            {"name": "centro_custo", "type": "string", "description": "Centro de custo"},
            {"name": "forma_pagamento", "type": "string", "description": "Forma de pagamento"}
        ],
        "min_rows": 10,
        "max_rows": 10000,
        "file_types": ["csv", "xlsx", "xls"]
    }'::jsonb,
    'Analise o fluxo de caixa mensal identificando padrões de entradas e saídas, períodos críticos de caixa e oportunidades de otimização.',
    '["fluxo_caixa", "sazonalidade", "previsao", "liquidez"]'::jsonb,
    '[
        {"code": "SALDO_INICIAL", "name": "Saldo Inicial", "unit": "currency"},
        {"code": "TOTAL_ENTRADAS", "name": "Total de Entradas", "unit": "currency"},
        {"code": "TOTAL_SAIDAS", "name": "Total de Saídas", "unit": "currency"},
        {"code": "SALDO_FINAL", "name": "Saldo Final", "unit": "currency"},
        {"code": "DIAS_CAIXA_NEGATIVO", "name": "Dias com Caixa Negativo", "unit": "count"}
    ]'::jsonb,
    ARRAY['fluxo de caixa', 'tesouraria', 'liquidez', 'previsão'],
    ARRAY['LOW_CASH_FLOW', 'SEASONAL_VOLATILITY'],
    ARRAY['LEV_CASH_MANAGEMENT', 'LEV_WORKING_CAPITAL'],
    true,
    true,
    true,
    '1.0.0'
),

-- Template 2: DRE (Demonstrativo de Resultados)
(
    'DRE - Demonstrativo de Resultados',
    'DRE_MENSAL',
    'Análise de DRE com margens e rentabilidade',
    'general',
    'financeiro',
    'dre',
    '{
        "required_columns": [
            {"name": "conta", "type": "string", "description": "Nome da conta contábil"},
            {"name": "valor", "type": "number", "format": "decimal(15,2)", "description": "Valor da conta"},
            {"name": "tipo", "type": "string", "description": "Receita, Custo ou Despesa"}
        ],
        "optional_columns": [
            {"name": "mes_referencia", "type": "date", "description": "Mês de referência"},
            {"name": "centro_custo", "type": "string", "description": "Centro de custo"},
            {"name": "categoria", "type": "string", "description": "Categoria detalhada"}
        ],
        "min_rows": 5,
        "max_rows": 200,
        "file_types": ["csv", "xlsx", "xls"]
    }'::jsonb,
    'Analise o DRE calculando margens bruta, líquida e EBITDA. Identifique tendências e compare com períodos anteriores.',
    '["margens", "rentabilidade", "ebitda", "crescimento"]'::jsonb,
    '[
        {"code": "MARGEM_BRUTA", "name": "Margem Bruta", "unit": "percentage"},
        {"code": "MARGEM_LIQUIDA", "name": "Margem Líquida", "unit": "percentage"},
        {"code": "EBITDA", "name": "EBITDA", "unit": "currency"},
        {"code": "LUCRO_LIQUIDO", "name": "Lucro Líquido", "unit": "currency"},
        {"code": "CRESCIMENTO_RECEITA", "name": "Crescimento da Receita", "unit": "percentage"}
    ]'::jsonb,
    ARRAY['DRE', 'margens', 'rentabilidade', 'EBITDA'],
    ARRAY['LOW_PROFITABILITY', 'DECLINING_MARGINS'],
    ARRAY['LEV_PRICE', 'LEV_COST_OPTIMIZATION', 'LEV_REVENUE_EXPANSION'],
    true,
    true,
    true,
    '1.0.0'
),

-- Template 3: Vendas e Clientes
(
    'Vendas e Análise de Clientes',
    'VENDAS_CLIENTES',
    'Análise de vendas com métricas de clientes e produtos',
    'varejo',
    'vendas',
    'analise_vendas',
    '{
        "required_columns": [
            {"name": "data_venda", "type": "date", "format": "YYYY-MM-DD", "description": "Data da venda"},
            {"name": "cliente", "type": "string", "description": "Nome do cliente"},
            {"name": "produto", "type": "string", "description": "Produto vendido"},
            {"name": "quantidade", "type": "number", "description": "Quantidade vendida"},
            {"name": "valor_unitario", "type": "number", "format": "decimal(10,2)", "description": "Valor unitário"},
            {"name": "valor_total", "type": "number", "format": "decimal(15,2)", "description": "Valor total da venda"}
        ],
        "optional_columns": [
            {"name": "categoria_produto", "type": "string", "description": "Categoria do produto"},
            {"name": "vendedor", "type": "string", "description": "Vendedor responsável"},
            {"name": "canal_venda", "type": "string", "description": "Canal de venda"},
            {"name": "forma_pagamento", "type": "string", "description": "Forma de pagamento"}
        ],
        "min_rows": 20,
        "max_rows": 50000,
        "file_types": ["csv", "xlsx", "xls"]
    }'::jsonb,
    'Analise os dados de vendas identificando padrões de compra, produtos mais vendidos, perfil de clientes e oportunidades de cross-selling.',
    '["vendas", "clientes", "produtos", "cross_sell", "ticket_medio"]'::jsonb,
    '[
        {"code": "TICKET_MEDIO", "name": "Ticket Médio", "unit": "currency"},
        {"code": "FREQUENCIA_COMPRA", "name": "Frequência de Compra", "unit": "days"},
        {"code": "TOP_PRODUTOS", "name": "Produtos Mais Vendidos", "unit": "count"},
        {"code": "LTV", "name": "Lifetime Value", "unit": "currency"},
        {"code": "TAXA_CONVERSAO", "name": "Taxa de Conversão", "unit": "percentage"}
    ]'::jsonb,
    ARRAY['vendas', 'clientes', 'CRM', 'análise de vendas'],
    ARRAY['LOW_SALES_VELOCITY', 'HIGH_CHURN_RATE'],
    ARRAY['LEV_SALES_PROCESS', 'LEV_CROSS_SELLING', 'LEV_CLIENT_RETENTION'],
    true,
    true,
    true,
    '1.0.0'
),

-- Template 4: Contas a Pagar e Receber
(
    'Contas a Pagar e Receber',
    'CONTAS_PAGAR_RECEBER',
    'Gestão de contas a pagar e receber com análise de inadimplência',
    'general',
    'financeiro',
    'contas',
    '{
        "required_columns": [
            {"name": "tipo", "type": "string", "description": "Pagar ou Receber"},
            {"name": "documento", "type": "string", "description": "Número do documento"},
            {"name": "cliente_fornecedor", "type": "string", "description": "Cliente ou Fornecedor"},
            {"name": "valor", "type": "number", "format": "decimal(15,2)", "description": "Valor do documento"},
            {"name": "data_vencimento", "type": "date", "format": "YYYY-MM-DD", "description": "Data de vencimento"},
            {"name": "data_emissao", "type": "date", "format": "YYYY-MM-DD", "description": "Data de emissão"}
        ],
        "optional_columns": [
            {"name": "status", "type": "string", "description": "Status (Aberto, Pago, Vencido)"},
            {"name": "categoria", "type": "string", "description": "Categoria do documento"},
            {"name": "centro_custo", "type": "string", "description": "Centro de custo"}
        ],
        "min_rows": 10,
        "max_rows": 10000,
        "file_types": ["csv", "xlsx", "xls"]
    }'::jsonb,
    'Analise as contas a pagar e receber identificando vencimentos, inadimplência e oportunidades de negociação.',
    '["inadimplencia", "vencimentos", "negociacao", "fluxo_futuro"]'::jsonb,
    '[
        {"code": "DIAS_MEDIO_PAGAR", "name": "Dias Médio a Pagar", "unit": "days"},
        {"code": "DIAS_MEDIO_RECEBER", "name": "Dias Médio a Receber", "unit": "days"},
        {"code": "TAXA_INADIMPLENCIA", "name": "Taxa de Inadimplência", "unit": "percentage"},
        {"code": "VALOR_VENCIDO_30", "name": "Valor Vencido 30 dias", "unit": "currency"},
        {"code": "VALOR_A_VENCER_30", "name": "Valor a Vencer 30 dias", "unit": "currency"}
    ]'::jsonb,
    ARRAY['contas a pagar', 'contas a receber', 'inadimplência', 'negociação'],
    ARRAY['LATE_PAYMENTS', 'HIGH_INVENTORY_DAYS'],
    ARRAY['LEV_COLLECTION_PROCESS', 'LEV_PAYMENT_TERMS', 'LEV_WORKING_CAPITAL'],
    true,
    true,
    true,
    '1.0.0'
);

-- =====================================================
-- 5. VIEWS AUXILIARES
-- =====================================================

-- View com templates disponíveis para uma organização
CREATE OR REPLACE VIEW available_templates AS
SELECT 
    t.id,
    t.name,
    t.code,
    t.description,
    t.industry,
    t.category,
    t.subcategory,
    t.file_structure,
    t.expected_kpis,
    t.tags,
    t.usage_count,
    t.rating,
    t.rating_count,
    t.is_system,
    t.is_public,
    CASE 
        WHEN t.organization_id IS NULL THEN 'Sistema'
        WHEN t.organization_id = org_id THEN 'Personalizado'
        ELSE 'Público'
    END as source_type,
    t.created_at,
    t.updated_at
FROM strategic_templates t
CROSS JOIN (
    SELECT organization_id FROM profiles WHERE id = auth.uid()
) org(org_id)
WHERE t.is_active = true
  AND (
    t.organization_id = org_id  -- Templates da própria org
    OR t.is_public = true      -- Templates públicos
    OR t.is_system = true      -- Templates do sistema
  );

-- =====================================================
-- 6. RLS POLICIES
-- =====================================================

-- Habilitar RLS
ALTER TABLE strategic_templates ENABLE ROW LEVEL SECURITY;

-- Política: Usuários veem templates da própria org + públicos + sistema
CREATE POLICY "templates_visibility_policy" ON strategic_templates
    FOR ALL USING (
        organization_id IN (
            SELECT organization_id FROM profiles 
            WHERE id = auth.uid()
        )
        OR is_public = true
        OR is_system = true
    );

-- Política: Usuários podem criar templates para própria org
CREATE POLICY "templates_create_policy" ON strategic_templates
    FOR INSERT WITH CHECK (
        organization_id IN (
            SELECT organization_id FROM profiles 
            WHERE id = auth.uid()
        )
        OR is_system = true
    );

-- Política: Usuários podem atualizar templates da própria org
CREATE POLICY "templates_update_policy" ON strategic_templates
    FOR UPDATE USING (
        organization_id IN (
            SELECT organization_id FROM profiles 
            WHERE id = auth.uid()
        )
        OR (is_system = true AND EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() 
            AND organization_id IS NULL  -- Admin do sistema
        ))
    );

-- Política: Apenas admin pode deletar templates do sistema
CREATE POLICY "templates_delete_policy" ON strategic_templates
    FOR DELETE USING (
        organization_id IN (
            SELECT organization_id FROM profiles 
            WHERE id = auth.uid()
        )
        OR (is_system = true AND EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() 
            AND organization_id IS NULL
        ))
    );

-- =====================================================
-- 7. FUNÇÕES DE BUSCA E MATCHING
-- =====================================================

-- Função para buscar melhor template para um arquivo
CREATE OR REPLACE FUNCTION find_best_template(
    p_file_structure JSONB,
    p_industry VARCHAR DEFAULT NULL,
    p_category VARCHAR DEFAULT NULL
) RETURNS TABLE (
    template_id UUID,
    template_name VARCHAR,
    match_score DECIMAL,
    match_reasons TEXT[]
) AS $$
DECLARE
    v_org_id UUID;
BEGIN
    -- Buscar org do usuário
    SELECT organization_id INTO v_org_id
    FROM profiles
    WHERE id = auth.uid();
    
    RETURN QUERY
    SELECT 
        t.id,
        t.name,
        -- Calcular score de matching
        CASE 
            -- Match perfeito: mesma indústria e categoria
            WHEN t.industry = COALESCE(p_industry, 'general') 
             AND t.category = COALESCE(p_category, 'financeiro') THEN 100
            -- Match bom: mesma categoria
            WHEN t.category = COALESCE(p_category, 'financeiro') THEN 80
            -- Match parcial: indústria similar
            WHEN t.industry IN ('general', COALESCE(p_industry, 'general')) THEN 60
            -- Match básico: template público ou sistema
            WHEN t.is_public OR t.is_system THEN 40
            ELSE 20
        END +
        -- Bônus por popularidade
        LEAST(t.usage_count / 10, 10) +
        -- Bônus por rating
        COALESCE(t.rating * 2, 0) as match_score,
        ARRAY[
            CASE 
                WHEN t.industry = COALESCE(p_industry, 'general') 
                 AND t.category = COALESCE(p_category, 'financeiro') 
                THEN 'Match perfeito de indústria e categoria'
                ELSE NULL
            END,
            CASE 
                WHEN t.category = COALESCE(p_category, 'financeiro') 
                THEN 'Mesma categoria'
                ELSE NULL
            END,
            CASE 
                WHEN t.usage_count > 100 THEN 'Template popular'
                ELSE NULL
            END
        ] as match_reasons
    FROM strategic_templates t
    WHERE t.is_active = true
      AND (
          t.organization_id = v_org_id
          OR t.is_public = true
          OR t.is_system = true
      )
    ORDER BY match_score DESC, t.usage_count DESC
    LIMIT 5;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- VALIDAÇÃO
-- =====================================================

SELECT 'FASE 2: TEMPLATES INTELIGENTES CRIADOS COM SUCESSO' as status;

SELECT 
    'strategic_templates' as tabela,
    COUNT(*) as total_templates,
    COUNT(*) FILTER (WHERE is_system = true) as templates_sistema,
    COUNT(*) FILTER (WHERE is_public = true) as templates_publicos
FROM strategic_templates;

SELECT 
    'Índices criados' as check_item,
    COUNT(*) as total_indices
FROM pg_indexes 
WHERE tablename = 'strategic_templates' 
  AND indexname NOT LIKE '%_pkey';

SELECT 
    'Views e funções criadas' as check_item,
    'available_templates, find_best_template, increment_template_usage, rate_template' as itens;
