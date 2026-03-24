-- =====================================================
-- SCRIPT DE VERIFICAÇÃO E CRIAÇÃO DE TABELAS BASE
-- Verifica se as tabelas estratégicas existem antes de executar migração
-- =====================================================

-- =====================================================
-- 1. VERIFICAÇÃO DE TABELAS EXISTENTES
-- =====================================================

-- Verificar se as tabelas base existem
DO $$
DECLARE
    v_kpi_master_exists BOOLEAN;
    v_challenges_exists BOOLEAN;
    v_goals_exists BOOLEAN;
    v_templates_exists BOOLEAN;
    v_levers_exists BOOLEAN;
    v_actions_exists BOOLEAN;
BEGIN
    -- Verificar existência das tabelas
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'kpi_master_library'
    ) INTO v_kpi_master_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_challenges'
    ) INTO v_challenges_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_goals'
    ) INTO v_goals_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'strategic_templates'
    ) INTO v_templates_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_levers'
    ) INTO v_levers_exists;
    
    SELECT EXISTS (
        SELECT 1 FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'library_actions'
    ) INTO v_actions_exists;
    
    -- Relatório de verificação
    RAISE NOTICE '=== VERIFICAÇÃO DE TABELAS ESTRATÉGICAS ===';
    RAISE NOTICE 'kpi_master_library: %', CASE WHEN v_kpi_master_exists THEN '✅ EXISTE' ELSE '❌ NÃO EXISTE' END;
    RAISE NOTICE 'library_challenges: %', CASE WHEN v_challenges_exists THEN '✅ EXISTE' ELSE '❌ NÃO EXISTE' END;
    RAISE NOTICE 'library_goals: %', CASE WHEN v_goals_exists THEN '✅ EXISTE' ELSE '❌ NÃO EXISTE' END;
    RAISE NOTICE 'strategic_templates: %', CASE WHEN v_templates_exists THEN '✅ EXISTE' ELSE '❌ NÃO EXISTE' END;
    RAISE NOTICE 'library_levers: %', CASE WHEN v_levers_exists THEN '✅ EXISTE' ELSE '❌ NÃO EXISTE' END;
    RAISE NOTICE 'library_actions: %', CASE WHEN v_actions_exists THEN '✅ EXISTE' ELSE '❌ NÃO EXISTE' END;
    RAISE NOTICE '';
    
    -- Se as tabelas não existem, criar estrutura básica
    IF NOT v_kpi_master_exists OR NOT v_challenges_exists OR NOT v_goals_exists THEN
        RAISE NOTICE 'Criando tabelas estratégicas base...';
        
        -- Criar kpi_master_library (versão simplificada)
        IF NOT v_kpi_master_exists THEN
            CREATE TABLE kpi_master_library (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                calculation_formula TEXT,
                unit TEXT,
                domain TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            RAISE NOTICE '✅ kpi_master_library criada';
        END IF;
        
        -- Criar library_challenges
        IF NOT v_challenges_exists THEN
            CREATE TABLE library_challenges (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                domain TEXT,
                severity_default INT DEFAULT 3,
                symptoms JSONB,
                related_kpi_codes TEXT[],
                metric_tree_config JSONB,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            RAISE NOTICE '✅ library_challenges criada';
        END IF;
        
        -- Criar library_goals
        IF NOT v_goals_exists THEN
            CREATE TABLE library_goals (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code TEXT UNIQUE NOT NULL,
                title TEXT NOT NULL,
                description TEXT,
                success_definition TEXT,
                calculation_logic_ref TEXT,
                target_type TEXT,
                suggested_timeframe_days INT DEFAULT 90,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            RAISE NOTICE '✅ library_goals criada';
        END IF;
        
        -- Criar strategic_templates (versão simplificada)
        IF NOT v_templates_exists THEN
            CREATE TABLE strategic_templates (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                challenge_id UUID REFERENCES library_challenges(id),
                recommended_goal_id UUID REFERENCES library_goals(id),
                is_active BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            RAISE NOTICE '✅ strategic_tables criada (versão simplificada)';
        END IF;
    END IF;
    
    -- Criar tabelas de levers e actions se não existirem
    IF NOT v_levers_exists OR NOT v_actions_exists THEN
        RAISE NOTICE 'Criando tabelas de levers e actions...';
        
        -- Criar library_levers
        IF NOT v_levers_exists THEN
            CREATE TABLE library_levers (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code VARCHAR(50) UNIQUE NOT NULL,
                title VARCHAR(200) NOT NULL,
                description TEXT,
                category VARCHAR(50) NOT NULL CHECK (category IN ('financeiro', 'vendas', 'operacoes', 'pessoas', 'relacionamento', 'marketing')),
                target_kpi_code VARCHAR(50),
                impact_level VARCHAR(20) CHECK (impact_level IN ('high', 'medium', 'low')),
                implementation_complexity VARCHAR(20) CHECK (implementation_complexity IN ('high', 'medium', 'low')),
                typical_timeframe_days INT DEFAULT 30,
                expected_impact_description TEXT,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            
            CREATE INDEX idx_levers_category ON library_levers(category);
            CREATE INDEX idx_levers_active ON library_levers(is_active);
            
            RAISE NOTICE '✅ library_levers criada';
        END IF;
        
        -- Criar library_actions
        IF NOT v_actions_exists THEN
            CREATE TABLE library_actions (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                code VARCHAR(50) UNIQUE NOT NULL,
                lever_id UUID NOT NULL REFERENCES library_levers(id) ON DELETE CASCADE,
                title VARCHAR(200) NOT NULL,
                description TEXT NOT NULL,
                step_by_step JSONB DEFAULT '[]'::jsonb,
                estimated_effort_hours INT DEFAULT 4,
                required_resources TEXT,
                success_metrics TEXT,
                priority_score INT CHECK (priority_score BETWEEN 1 AND 5),
                quick_win BOOLEAN DEFAULT false,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            );
            
            CREATE INDEX idx_actions_lever ON library_actions(lever_id);
            CREATE INDEX idx_actions_priority ON library_actions(priority_score);
            CREATE INDEX idx_actions_active ON library_actions(is_active);
            
            RAISE NOTICE '✅ library_actions criada';
        END IF;
    END IF;
    
    RAISE NOTICE '';
    RAISE NOTICE '=== VERIFICAÇÃO CONCLUÍDA ===';
    RAISE NOTICE 'Execute agora os scripts de migração na ordem:';
    RAISE NOTICE '1. KPI_UNIFICATION_MIGRATION.sql';
    RAISE NOTICE '2. STRATEGIC_TEMPLATES_COMPLETION.sql';
    RAISE NOTICE '3. INTELLIGENCE_ENGINE_IMPLEMENTATION.sql';
    RAISE NOTICE '4. OPTIMIZATION_PERFORMANCE.sql';
END $$;

-- =====================================================
-- 2. FUNÇÃO PARA VERIFICAR ESTRUTURA ATUAL
-- =====================================================

CREATE OR REPLACE FUNCTION verify_strategic_structure()
RETURNS TABLE (
    table_name TEXT,
    status TEXT,
    row_count BIGINT,
    columns_info JSONB
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        table_name,
        CASE 
            WHEN EXISTS (
                SELECT 1 FROM information_schema.columns 
                WHERE table_schema = 'public' 
                AND table_name = t.table_name
            ) THEN '✅ OK'
            ELSE '❌ SEM COLUNAS'
        END as status,
        COALESCE((
            SELECT COUNT(*) 
            FROM information_schema.columns 
            WHERE table_schema = 'public' 
            AND table_name = t.table_name
        ), 0) as row_count,
        (
            SELECT jsonb_agg(
                jsonb_build_object(
                    'column_name', column_name,
                    'data_type', data_type,
                    'is_nullable', is_nullable
                )
            ) 
            FROM information_schema.columns 
            WHERE table_schema = 'public' 
            AND table_name = t.table_name
        ) as columns_info
    FROM (
        VALUES 
            ('kpi_master_library'),
            ('library_challenges'),
            ('library_goals'),
            ('strategic_templates'),
            ('library_levers'),
            ('library_actions')
        ) t(table_name);
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 3. VERIFICAÇÃO FINAL
-- =====================================================

SELECT 'ESTRUTURA VERIFICADA' as verification_status,
       'Execute os scripts de migração em ordem' as next_step,
       NOW() as verification_timestamp;
