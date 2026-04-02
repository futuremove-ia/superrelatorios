-- =====================================================
-- TABELA: radar_items
-- Radar de itens estratégicos com RLS
-- =====================================================

-- 1. CRIAÇÃO DA TABELA
-- =====================================================
CREATE TABLE IF NOT EXISTS radar_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    diagnosis_code VARCHAR(50),
    impact_code VARCHAR(50),
    timeframe_code VARCHAR(50),
    complexity_code VARCHAR(50),
    severity VARCHAR(20) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    domain VARCHAR(100),
    status VARCHAR(30) NOT NULL DEFAULT 'detected' CHECK (status IN ('detected', 'in_progress', 'acknowledged', 'dismissed', 'resolved')),
    priority_score NUMERIC(5, 2),
    custom_notes TEXT,
    ai_confidence_score DECIMAL(5, 4),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. ÍNDICES PARA PERFORMANCE
-- =====================================================
CREATE INDEX idx_radar_items_organization ON radar_items(organization_id);
CREATE INDEX idx_radar_items_status ON radar_items(status);
CREATE INDEX idx_radar_items_severity ON radar_items(severity);
CREATE INDEX idx_radar_items_domain ON radar_items(domain);
CREATE INDEX idx_radar_items_priority ON radar_items(priority_score DESC);
CREATE INDEX idx_radar_items_diagnosis ON radar_items(diagnosis_code);
CREATE INDEX idx_radar_items_impact ON radar_items(impact_code);
CREATE INDEX idx_radar_items_created ON radar_items(created_at DESC);

-- Índice composto para filtros comuns
CREATE INDEX idx_radar_items_org_status_severity ON radar_items(organization_id, status, severity);

-- 3. ROW LEVEL SECURITY (RLS)
-- =====================================================
ALTER TABLE radar_items ENABLE ROW LEVEL SECURITY;

-- Policy: Usuários só veem itens da sua organização
CREATE POLICY radar_items_select_policy ON radar_items
    FOR SELECT USING (
        organization_id IN (
            SELECT organization_id::uuid 
            FROM auth.users 
            WHERE id = auth.uid()
        )
    );

-- Policy: Usuários só inserem itens da sua organização
CREATE POLICY radar_items_insert_policy ON radar_items
    FOR INSERT WITH CHECK (
        organization_id IN (
            SELECT organization_id::uuid 
            FROM auth.users 
            WHERE id = auth.uid()
        )
    );

-- Policy: Usuários só atualizam itens da sua organização
CREATE POLICY radar_items_update_policy ON radar_items
    FOR UPDATE USING (
        organization_id IN (
            SELECT organization_id::uuid 
            FROM auth.users 
            WHERE id = auth.uid()
        )
    );

-- Policy: Usuários só deletam itens da sua organização
CREATE POLICY radar_items_delete_policy ON radar_items
    FOR DELETE USING (
        organization_id IN (
            SELECT organization_id::uuid 
            FROM auth.users 
            WHERE id = auth.uid()
        )
    );

-- 4. ATUALIZAÇÃO AUTOMÁTICA DO updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION update_radar_items_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_radar_items_updated_at
    BEFORE UPDATE ON radar_items
    FOR EACH ROW
    EXECUTE FUNCTION update_radar_items_updated_at();

-- 5. COMENTÁRIOS PARA DOCUMENTAÇÃO
-- =====================================================
COMMENT ON TABLE radar_items IS 'Tabela de radar estratégico para tracking de itens detectados';
COMMENT ON COLUMN radar_items.id IS 'Identificador único do item';
COMMENT ON COLUMN radar_items.organization_id IS 'FK para organizações';
COMMENT ON COLUMN radar_items.diagnosis_code IS 'Código do diagnóstico (AI)';
COMMENT ON COLUMN radar_items.impact_code IS 'Código de impacto';
COMMENT ON COLUMN radar_items.timeframe_code IS 'Código do horizonte temporal';
COMMENT ON COLUMN radar_items.complexity_code IS 'Código de complexidade';
COMMENT ON COLUMN radar_items.severity IS 'Nível de severidade: low, medium, high, critical';
COMMENT ON COLUMN radar_items.domain IS 'Domínio do item (ex: comercial, operacional, financeiro)';
COMMENT ON COLUMN radar_items.status IS 'Status do item: detected, in_progress, acknowledged, dismissed, resolved';
COMMENT ON COLUMN radar_items.priority_score IS 'Score de prioridade calculado';
COMMENT ON COLUMN radar_items.custom_notes IS 'Notas customizadas do usuário';
COMMENT ON COLUMN radar_items.ai_confidence_score IS 'Score de confiança da AI (0-1)';
