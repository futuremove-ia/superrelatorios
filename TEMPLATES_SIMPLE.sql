-- =====================================================
-- SCRIPT SIMPLES DE STRATEGIC TEMPLATES
-- Criação de templates essenciais por indústria
-- =====================================================

-- =====================================================
-- 1. VERIFICAR E ADICIONAR COLUNAS À TABELA EXISTENTE
-- =====================================================

-- Adicionar colunas se não existirem
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS name VARCHAR(200) DEFAULT '';
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS code VARCHAR(50) DEFAULT '';
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS industry VARCHAR(50) DEFAULT '';
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS category VARCHAR(50) DEFAULT '';
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS subcategory VARCHAR(50);
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS file_structure JSONB DEFAULT '{}'::jsonb;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS ai_prompt_template TEXT;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS analysis_focus TEXT[];
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS expected_kpis JSONB DEFAULT '[]'::jsonb;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS default_challenges TEXT[];
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS suggested_levers TEXT[];
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS tags TEXT[];
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS sample_file_url TEXT;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS documentation_url TEXT;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS version VARCHAR(20) DEFAULT '1.0.0';
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS parent_template_id UUID REFERENCES strategic_templates(id);
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS usage_count INTEGER DEFAULT 0;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS rating DECIMAL(3,2) DEFAULT 0.0;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS rating_count INTEGER DEFAULT 0;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS is_public BOOLEAN DEFAULT false;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS is_system BOOLEAN DEFAULT false;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS created_by UUID;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS updated_by UUID;
ALTER TABLE strategic_templates ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- =====================================================
-- 2. LIMPAR TABELA
-- =====================================================

TRUNCATE TABLE strategic_templates RESTART IDENTITY CASCADE;

-- =====================================================
-- 3. INSERIR TEMPLATES ESSENCIAIS POR INDÚSTRIA
-- =====================================================

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
   "file_types": ["csv", "xlsx", "xls"]
 }',
 'Analise este arquivo financeiro de varejo e extraia insights sobre: margem líquida, fluxo de caixa, queima de caixa, dias para receber, e eficiência operacional. Identifique padrões de sazonalidade e alertas de risco.',
 '{"margem", "fluxo_caixa", "tendencias", "sazonalidade", "alertas_risco"}',
 '[
   {"code": "NET_MARGIN", "name": "Margem Líquida", "unit": "%"},
   {"code": "BURN_RATE", "name": "Queima de Caixa", "unit": "R$"},
   {"code": "RUNWAY_MONTHS", "name": "Pista de Decolagem", "unit": "meses"},
   {"code": "DAYS_TO_RECEIVE", "name": "Dias para Receber", "unit": "dias"},
   {"code": "OPERATIONAL_EFFICIENCY", "name": "Eficiência Operacional", "unit": "%"}
 ]',
 '{"LOW_MARGIN", "CASH_FLOW_CRUNCH"}',
 '{"LEV_PRICE", "LEV_FIXED_COST", "LEV_CASH_CYCLE"}',
 '{"varejo", "financeiro", "fluxo_caixa", "pme"}',
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
   "file_types": ["csv", "xlsx"]
 }',
 'Analise este arquivo de produtividade de serviços e calcule: produtividade por funcionário, eficiência operacional, taxa de utilização, e identifique gargalos de performance. Compare produtividade entre funcionários e projetos.',
 '{"produtividade", "eficiencia", "gargalos", "comparacao_equipe", "otimizacao"}',
 '[
   {"code": "PRODUCTIVITY_PER_EMPLOYEE", "name": "Produtividade por Funcionário", "unit": "R$"},
   {"code": "OPERATIONAL_EFFICIENCY", "name": "Eficiência Operacional", "unit": "%"},
   {"code": "QUALITY_RATE", "name": "Taxa de Qualidade", "unit": "%"}
 ]',
 '{"SALES_STAGNATION", "TEAM_INEFFICIENCY"}',
 '{"LEV_CONVERSION", "LEV_WASTE", "LEV_TEAM_PROD"}',
 '{"servicos", "produtividade", "equipe", "consultoria"}',
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
   "file_types": ["csv", "xlsx"]
 }',
 'Analise este arquivo de vendas e-commerce e identifique: ticket médio, taxa de conversão, produtos mais vendidos, performance por canal, sazonalidade, e oportunidades de cross-sell/upsell. Calcule o ROI por canal de venda.',
 '{"vendas", "conversao", "ticket_medio", "canais", "sazonalidade", "cross_sell"}',
 '[
   {"code": "AVG_TICKET", "name": "Ticket Médio", "unit": "R$"},
   {"code": "SALES_CONVERSION", "name": "Taxa de Conversão", "unit": "%"},
   {"code": "PIPELINE_VALUE", "name": "Valor do Pipeline", "unit": "R$"},
   {"code": "CUSTOMER_ACQ_COST", "name": "CAC", "unit": "R$"}
 ]',
 '{"SALES_STAGNATION", "LOW_MARGIN"}',
 '{"LEV_CONVERSION", "LEV_UPSELL", "LEV_ACQ_EFF"}',
 '{"ecommerce", "vendas", "digital", "marketing"}',
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
   "file_types": ["csv", "xlsx"]
 }',
 'Analise este arquivo de movimentação de estoque e calcule: giro de estoque, dias de cobertura, valor de estoque parado, obsolescência, e oportunidades de otimização. Identifique produtos com giro lento e sugira ações de liquidação.',
 '{"estoque", "giro", "cobertura", "obsolescencia", "otimizacao"}',
 '[
   {"code": "INVENTORY_TURNOVER", "name": "Giro de Estoque", "unit": "vezes"},
   {"code": "WORKING_CAPITAL", "name": "Capital de Giro", "unit": "R$"},
   {"code": "OPERATIONAL_EFFICIENCY", "name": "Eficiência Operacional", "unit": "%"}
 ]',
 '{"STOCK_MONEY_TRAP", "HIGH_OVERHEAD"}',
 '{"LEV_STOCK_TURN", "LEV_WASTE", "LEV_FIXED_COST"}',
 '{"industria", "manufatura", "estoque", "producao"}',
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
 '{"mrr", "churn", "ltv", "cac", "cohort", "expansao"}',
 '[
   {"code": "MONTHLY_RECURRING_REVENUE", "name": "MRR", "unit": "R$"},
   {"code": "CHURN_RATE", "name": "Churn", "unit": "%"},
   {"code": "CUSTOMER_LIFETIME_VALUE", "name": "LTV", "unit": "R$"},
   {"code": "ACTIVE_USERS", "name": "Usuários Ativos", "unit": "count"}
 ]',
 '{"CUSTOMER_LOSS", "SALES_STAGNATION"}',
 '{"LEV_RETENTION", "LEV_CONVERSION", "LEV_UPSELL"}',
 '{"saas", "tecnologia", "metricas", "recorrente"}',
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
   "file_types": ["csv", "xlsx"]
 }',
 'Analise este arquivo de projetos de consultoria e calcule: margem por projeto, produtividade por consultor, rentabilidade por cliente, prazo vs realizado, e identifique projetos com baixa rentabilidade. Sugira otimizações de pricing e alocação.',
 '{"rentabilidade", "produtividade", "pricing", "alocacao", "projetos"}',
 '[
   {"code": "NET_MARGIN", "name": "Margem Líquida", "unit": "%"},
   {"code": "PRODUCTIVITY_PER_EMPLOYEE", "name": "Produtividade por Funcionário", "unit": "R$"},
   {"code": "SALES_PER_EMPLOYEE", "name": "Vendas por Funcionário", "unit": "R$"}
 ]',
 '{"LOW_MARGIN", "TEAM_INEFFICIENCY"}',
 '{"LEV_PRICE", "LEV_TEAM_PROD", "LEV_CONVERSION"}',
 '{"consultoria", "servicos", "projetos", "rentabilidade"}',
 'https://superrelatorios.s3.amazonaws.com/templates/consultoria_projetos.xlsx',
 'https://docs.superrelatorios.com/templates/consultoria-projetos',
 true, true, true, '1.0.0', 0, 0.0, 0);

-- =====================================================
-- 4. CRIAR ÍNDICES
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_strategic_templates_industry ON strategic_templates(industry);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_category ON strategic_templates(category);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_active ON strategic_templates(is_active);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_public ON strategic_templates(is_public) WHERE is_public = true;
CREATE INDEX IF NOT EXISTS idx_strategic_templates_tags ON strategic_templates USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_strategic_templates_usage ON strategic_templates(usage_count DESC);

-- =====================================================
-- 5. RELATÓRIO FINAL
-- =====================================================

SELECT '=== STRATEGIC TEMPLATES CONCLUÍDO ===' as status;
SELECT 'Templates criados' as item, COUNT(*) as count FROM strategic_templates WHERE is_active = true;
SELECT 'Templates por indústria' as item, industry, COUNT(*) as count 
FROM strategic_templates 
WHERE is_active = true 
GROUP BY industry;
SELECT '=== PRÓXIMO PASSO: INTELLIGENCE_ENGINE_IMPLEMENTATION.sql ===' as next_step;
