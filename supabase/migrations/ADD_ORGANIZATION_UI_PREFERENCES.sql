-- Migration: ADD_ORGANIZATION_UI_PREFERENCES
-- Adicionar campos faltantes para Progressive Disclosure

-- Verificar se a tabela existe e adicionar colunas faltantes
DO $$
BEGIN
    -- Adicionar coluna display_mode se não existir
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'organization_ui_preferences' 
        AND column_name = 'display_mode'
    ) THEN
        ALTER TABLE organization_ui_preferences 
        ADD COLUMN display_mode TEXT DEFAULT 'simples' 
        CHECK (display_mode IN ('simples', 'completo', 'enterprise'));
    END IF;

    -- Adicionar flags de visibilidade de módulos
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_radar') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_radar BOOLEAN DEFAULT true;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_risks') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_risks BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_suppliers') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_suppliers BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_clients') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_clients BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_hr') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_hr BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_forecasts') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_forecasts BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_swot') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_swot BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_knowledge') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_knowledge BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_data_sources') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_data_sources BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'show_hierarchy') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN show_hierarchy BOOLEAN DEFAULT false;
    END IF;

    -- Adicionar flags de notificação
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'notify_critical') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN notify_critical BOOLEAN DEFAULT true;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'notify_high') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN notify_high BOOLEAN DEFAULT true;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'notify_medium') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN notify_medium BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'notify_weekly') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN notify_weekly BOOLEAN DEFAULT false;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'notify_monthly') THEN
        ALTER TABLE organization_ui_preferences ADD COLUMN notify_monthly BOOLEAN DEFAULT false;
    END IF;

    -- Adicionar preferências de linguagem
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'ui_language') THEN
        ALTER TABLE organization_ui_preferences 
        ADD COLUMN ui_language TEXT DEFAULT 'pt-BR' 
        CHECK (ui_language IN ('pt-BR', 'en-US', 'es-ES'));
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organization_ui_preferences' AND column_name = 'glossary_level') THEN
        ALTER TABLE organization_ui_preferences 
        ADD COLUMN glossary_level TEXT DEFAULT 'tecnico' 
        CHECK (glossary_level IN ('simples', 'intermediario', 'tecnico'));
    END IF;

END $$;

SELECT 'organization_ui_preferences columns added successfully' AS result;
