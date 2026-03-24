-- =====================================================
-- BIBLIOTECA DE ESTRATÉGIA - CHALLENGES & GOALS
-- SuperRelatórios - CaaS (Consulting as a Service)
-- =====================================================

-- 1. Biblioteca de KPIs Master (Referência para todos os desafios)
CREATE TABLE kpi_master_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    calculation_formula TEXT,
    unit TEXT, -- '%', 'R$', 'meses', 'dias'
    domain TEXT, -- 'finance', 'sales', 'ops'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Biblioteca de Desafios (Dores de Mercado PME)
CREATE TABLE library_challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    domain TEXT,
    severity_default INT DEFAULT 3, -- 1 a 5
    symptoms JSONB, -- Lista de sinais detectáveis
    related_kpi_codes TEXT[], -- Vincula aos códigos da kpi_master_library
    metric_tree_config JSONB, -- Árvore de métricas estática por desafio
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Biblioteca de Objetivos (Destinos Estratégicos)
CREATE TABLE library_goals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    success_definition TEXT,
    calculation_logic_ref TEXT,
    target_type TEXT, -- 'increase', 'decrease', 'maintain'
    suggested_timeframe_days INT DEFAULT 90,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Mapeamento Estratégico (Templates)
CREATE TABLE strategic_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_id UUID REFERENCES library_challenges(id),
    recommended_goal_id UUID REFERENCES library_goals(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Foco Estratégico do Usuário (Instâncias Ativas)
CREATE TABLE user_strategy_focus (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    challenge_id UUID REFERENCES library_challenges(id),
    goal_id UUID REFERENCES library_goals(id),
    status TEXT DEFAULT 'active', -- 'active', 'achieved', 'paused'
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    achieved_at TIMESTAMP WITH TIME ZONE,
    context_notes TEXT, -- Notas do Blueprint
    progress_percentage DECIMAL(5,2) DEFAULT 0,
    last_calculated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Métricas do Usuário (Extraídas dos Arquivos)
CREATE TABLE user_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE, -- Fonte do dado
    kpi_code TEXT REFERENCES kpi_master_library(code),
    value DECIMAL(12,2),
    source_file_id UUID, -- ID do arquivo original (rastreabilidade)
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Histórico de Progresso (Para cálculo file-to-file)
CREATE TABLE progress_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_strategy_focus_id UUID REFERENCES user_strategy_focus(id) ON DELETE CASCADE,
    report_id UUID REFERENCES reports(id),
    progress_percentage DECIMAL(5,2),
    delta_from_previous DECIMAL(5,2), -- Delta vs relatório anterior
    trend_direction TEXT, -- 'improving', 'declining', 'stable'
    calculated_result JSONB, -- Vetor de tendência completo
    calculated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- ÍNDICES DE PERFORMANCE
-- =====================================================

CREATE INDEX idx_user_metrics_org_kpi ON user_metrics(organization_id, kpi_code);
CREATE INDEX idx_user_metrics_report ON user_metrics(report_id);
CREATE INDEX idx_user_strategy_focus_org_status ON user_strategy_focus(organization_id, status);
CREATE INDEX idx_progress_history_focus ON progress_history(user_strategy_focus_id);
CREATE INDEX idx_library_challenges_domain ON library_challenges(domain);

-- =====================================================
-- SEGURANÇA (RLS)
-- =====================================================

ALTER TABLE kpi_master_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE library_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE strategic_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_strategy_focus ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress_history ENABLE ROW LEVEL SECURITY;

-- Políticas: Bibliotecas são só leitura para todos
CREATE POLICY "Anyone can read KPI library" ON kpi_master_library
  FOR SELECT USING (true);

CREATE POLICY "Anyone can read challenges library" ON library_challenges
  FOR SELECT USING (true);

CREATE POLICY "Anyone can read goals library" ON library_goals
  FOR SELECT USING (true);

CREATE POLICY "Anyone can read strategic templates" ON strategic_templates
  FOR SELECT USING (true);

-- Políticas: Dados do usuário são por organização
CREATE POLICY "Users can manage their strategy focus" ON user_strategy_focus
  FOR ALL USING (organization_id IN (SELECT organization_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage their metrics" ON user_metrics
  FOR ALL USING (organization_id IN (SELECT organization_id FROM profiles WHERE id = auth.uid()));

CREATE POLICY "Users can manage their progress history" ON progress_history
  FOR ALL USING (organization_id IN (SELECT organization_id FROM profiles WHERE id = auth.uid()));

-- =====================================================
-- FUNÇÕES DE CÁLCULO AUTOMÁTICO
-- =====================================================

-- Função para calcular progresso file-to-file
CREATE OR REPLACE FUNCTION calculate_strategy_progress(
    p_focus_id UUID,
    p_current_report_id UUID
) RETURNS DECIMAL(5,2) AS $$
DECLARE
    v_challenge_code TEXT;
    v_goal_target_type TEXT;
    v_current_value DECIMAL;
    v_previous_value DECIMAL;
    v_progress DECIMAL(5,2);
    v_main_kpi TEXT;
BEGIN
    -- Obter configuração do desafio
    SELECT lc.code, lg.target_type, lc.related_kpi_codes[1]
    INTO v_challenge_code, v_goal_target_type, v_main_kpi
    FROM user_strategy_focus usf
    JOIN library_challenges lc ON usf.challenge_id = lc.id
    JOIN library_goals lg ON usf.goal_id = lg.id
    WHERE usf.id = p_focus_id;
    
    -- Obter valor atual
    SELECT value INTO v_current_value
    FROM user_metrics
    WHERE report_id = p_current_report_id AND kpi_code = v_main_kpi;
    
    -- Obter valor anterior (último relatório antes do atual)
    SELECT value INTO v_previous_value
    FROM user_metrics um
    JOIN reports r ON um.report_id = r.id
    WHERE um.organization_id = (SELECT organization_id FROM user_strategy_focus WHERE id = p_focus_id)
      AND um.kpi_code = v_main_kpi
      AND r.created_at < (SELECT created_at FROM reports WHERE id = p_current_report_id)
    ORDER BY r.created_at DESC
    LIMIT 1;
    
    -- Calcular progresso baseado no tipo de alvo
    IF v_goal_target_type = 'increase' THEN
        v_progress := CASE 
            WHEN v_previous_value = 0 THEN 0
            WHEN v_current_value > v_previous_value THEN 
                LEAST(((v_current_value - v_previous_value) / v_previous_value) * 100, 100)
            ELSE 0
        END;
    ELSIF v_goal_target_type = 'decrease' THEN
        v_progress := CASE 
            WHEN v_previous_value = 0 THEN 0
            WHEN v_current_value < v_previous_value THEN 
                LEAST(((v_previous_value - v_current_value) / v_previous_value) * 100, 100)
            ELSE 0
        END;
    ELSE -- maintain
        v_progress := CASE 
            WHEN ABS(v_current_value - v_previous_value) / v_previous_value < 0.05 THEN 100
            ELSE 50
        END;
    END IF;
    
    -- Atualizar progresso no foco estratégico
    UPDATE user_strategy_focus 
    SET progress_percentage = v_progress, last_calculated_at = NOW()
    WHERE id = p_focus_id;
    
    RETURN v_progress;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger automático quando novas métricas são inseridas
CREATE OR REPLACE FUNCTION auto_update_strategy_progress()
RETURNS trigger AS $$
BEGIN
    -- Para cada foco estratégico ativo da organização, recalcular progresso
    UPDATE user_strategy_focus 
    SET progress_percentage = calculate_strategy_progress(id, NEW.report_id),
        last_calculated_at = NOW()
    WHERE organization_id = NEW.organization_id 
      AND status = 'active';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_auto_update_progress
    AFTER INSERT ON user_metrics
    FOR EACH ROW EXECUTE FUNCTION auto_update_strategy_progress();

-- =====================================================
-- VIEWS ÚTEIS PARA O FRONTEND
-- =====================================================

-- View do Dashboard Estratégico
CREATE VIEW strategic_dashboard AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    usf.id as focus_id,
    usf.status,
    lc.code as challenge_code,
    lc.title as challenge_title,
    lg.code as goal_code,
    lg.title as goal_title,
    usf.progress_percentage,
    usf.started_at,
    lg.suggested_timeframe_days,
    (lg.suggested_timeframe_days - EXTRACT(days FROM NOW() - usf.started_at)) as days_remaining,
    CASE 
        WHEN usf.progress_percentage >= 80 THEN 'success'
        WHEN usf.progress_percentage >= 50 THEN 'warning'
        ELSE 'danger'
    END as urgency_level
FROM organizations o
JOIN user_strategy_focus usf ON o.id = usf.organization_id
JOIN library_challenges lc ON usf.challenge_id = lc.id
JOIN library_goals lg ON usf.goal_id = lg.id
WHERE usf.status = 'active';
