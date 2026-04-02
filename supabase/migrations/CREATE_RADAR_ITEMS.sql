-- =====================================================
-- TABELA: radar_items (VERSÃO COM IF NOT EXISTS)
-- Radar de itens estratégicos com RLS
-- =====================================================

-- 1. CRIAÇÃO DA TABELA (só se não existir)
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

-- 2. ÍNDICES PARA PERFORMANCE (só se não existirem)
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_radar_items_organization ON radar_items(organization_id);
CREATE INDEX IF NOT EXISTS idx_radar_items_status ON radar_items(status);
CREATE INDEX IF NOT EXISTS idx_radar_items_severity ON radar_items(severity);
CREATE INDEX IF NOT EXISTS idx_radar_items_domain ON radar_items(domain);
CREATE INDEX IF NOT EXISTS idx_radar_items_priority ON radar_items(priority_score DESC);
CREATE INDEX IF NOT EXISTS idx_radar_items_diagnosis ON radar_items(diagnosis_code);
CREATE INDEX IF NOT EXISTS idx_radar_items_impact ON radar_items(impact_code);
CREATE INDEX IF NOT EXISTS idx_radar_items_created ON radar_items(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_radar_items_org_status_severity ON radar_items(organization_id, status, severity);

-- 3. ROW LEVEL SECURITY (RLS)
-- =====================================================
ALTER TABLE radar_items ENABLE ROW LEVEL SECURITY;

-- 4. POLÍTICAS (só se não existirem)
-- =====================================================
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'radar_items_select_policy'
    ) THEN
        CREATE POLICY radar_items_select_policy ON radar_items
            FOR SELECT USING (
                organization_id IN (
                    SELECT organization_id::uuid 
                    FROM profiles 
                    WHERE user_id = auth.uid()
                )
            );
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'radar_items_insert_policy'
    ) THEN
        CREATE POLICY radar_items_insert_policy ON radar_items
            FOR INSERT WITH CHECK (
                organization_id IN (
                    SELECT organization_id::uuid 
                    FROM profiles 
                    WHERE user_id = auth.uid()
                )
            );
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'radar_items_update_policy'
    ) THEN
        CREATE POLICY radar_items_update_policy ON radar_items
            FOR UPDATE USING (
                organization_id IN (
                    SELECT organization_id::uuid 
                    FROM profiles 
                    WHERE user_id = auth.uid()
                )
            );
    END IF;
    
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'radar_items_delete_policy'
    ) THEN
        CREATE POLICY radar_items_delete_policy ON radar_items
            FOR DELETE USING (
                organization_id IN (
                    SELECT organization_id::uuid 
                    FROM profiles 
                    WHERE user_id = auth.uid()
                )
            );
    END IF;
END $$;

-- 5. TRIGGER (só se não existir)
-- =====================================================
CREATE OR REPLACE FUNCTION update_radar_items_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_radar_items_updated_at ON radar_items;
CREATE TRIGGER trigger_radar_items_updated_at
    BEFORE UPDATE ON radar_items
    FOR EACH ROW
    EXECUTE FUNCTION update_radar_items_updated_at();

-- 6. VERIFICAR
-- =====================================================
SELECT 'radar_items created successfully!' as result;
