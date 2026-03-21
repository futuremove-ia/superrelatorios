-- =====================================================
-- HIERARQUIA ORGANIZACIONAL COMPLETA v4.0
-- Estrutura multi-nível: Org → BU → Dept → Teams → Users
-- Com RBAC e Audit Logs
-- =====================================================

-- =====================================================
-- FUNÇÃO AUXILIAR: Atualizar timestamp
-- =====================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FASE 1: ATUALIZAR ORGANIZATIONS (Dados fiscais e branding)
-- =====================================================

-- Adicionar colunas se não existirem
DO $$
BEGIN
    -- Dados fiscais
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'cnpj') THEN
        ALTER TABLE organizations ADD COLUMN cnpj VARCHAR(18);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'ie') THEN
        ALTER TABLE organizations ADD COLUMN ie VARCHAR(20);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'im') THEN
        ALTER TABLE organizations ADD COLUMN im VARCHAR(20);
    END IF;
    
    -- Endereço
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'address') THEN
        ALTER TABLE organizations ADD COLUMN address TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'city') THEN
        ALTER TABLE organizations ADD COLUMN city VARCHAR(100);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'state') THEN
        ALTER TABLE organizations ADD COLUMN state VARCHAR(2);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'zip') THEN
        ALTER TABLE organizations ADD COLUMN zip VARCHAR(10);
    END IF;
    
    -- Contato
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'phone') THEN
        ALTER TABLE organizations ADD COLUMN phone VARCHAR(20);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'email') THEN
        ALTER TABLE organizations ADD COLUMN email VARCHAR(255);
    END IF;
    
    -- Branding
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'logo_url') THEN
        ALTER TABLE organizations ADD COLUMN logo_url TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'primary_color') THEN
        ALTER TABLE organizations ADD COLUMN primary_color VARCHAR(7) DEFAULT '#3B82F6';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'secondary_color') THEN
        ALTER TABLE organizations ADD COLUMN secondary_color VARCHAR(7) DEFAULT '#10B981';
    END IF;
    
    -- Planos e limites
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'subscription_tier') THEN
        ALTER TABLE organizations ADD COLUMN subscription_tier VARCHAR(20) DEFAULT 'free';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'max_users') THEN
        ALTER TABLE organizations ADD COLUMN max_users INT DEFAULT 5;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'max_reports') THEN
        ALTER TABLE organizations ADD COLUMN max_reports INT DEFAULT 10;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'max_business_units') THEN
        ALTER TABLE organizations ADD COLUMN max_business_units INT DEFAULT 1;
    END IF;
    
    -- Configurações
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'settings') THEN
        ALTER TABLE organizations ADD COLUMN settings JSONB DEFAULT '{}'::jsonb;
    END IF;
    
    -- Slug para URL
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'organizations' AND column_name = 'slug') THEN
        ALTER TABLE organizations ADD COLUMN slug VARCHAR(100) UNIQUE;
    END IF;
    
END $$;

-- =====================================================
-- FASE 2: CRIAR BUSINESS_UNITS (Filiais/Unidades)
-- =====================================================

DROP TABLE IF EXISTS business_units CASCADE;

CREATE TABLE business_units (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Identificação
    name VARCHAR(200) NOT NULL,
    code VARCHAR(50), -- Código interno (ex: "MATRIZ", "FILIAL_SP")
    type VARCHAR(50) NOT NULL DEFAULT 'filial' 
        CHECK (type IN ('matriz', 'filial', 'ponto_venda', 'escritorio', 'armazem', 'outro')),
    
    -- Endereço
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(2),
    zip VARCHAR(10),
    country VARCHAR(2) DEFAULT 'BR',
    
    -- Contato
    phone VARCHAR(20),
    email VARCHAR(255),
    
    -- Gestão
    manager_id UUID REFERENCES profiles(id),
    
    -- Configurações
    is_active BOOLEAN DEFAULT true,
    is_primary BOOLEAN DEFAULT false, -- Unidade principal (matriz)
    settings JSONB DEFAULT '{}'::jsonb,
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id),
    
    -- Constraints
    UNIQUE(organization_id, code)
);

-- Índices
CREATE INDEX idx_business_units_org ON business_units(organization_id);
CREATE INDEX idx_business_units_type ON business_units(type);
CREATE INDEX idx_business_units_active ON business_units(is_active);
CREATE INDEX idx_business_units_primary ON business_units(organization_id, is_primary) WHERE is_primary = true;

-- Trigger updated_at
CREATE TRIGGER business_units_updated_at
    BEFORE UPDATE ON business_units
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- FASE 3: CRIAR DEPARTMENTS (Áreas Funcionais)
-- =====================================================

DROP TABLE IF EXISTS departments CASCADE;

CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    business_unit_id UUID REFERENCES business_units(id) ON DELETE CASCADE,
    
    -- Identificação
    name VARCHAR(200) NOT NULL,
    code VARCHAR(50),
    description TEXT,
    
    -- Hierarquia interna
    parent_department_id UUID REFERENCES departments(id),
    
    -- Gestão
    manager_id UUID REFERENCES profiles(id),
    
    -- Centro de custo
    cost_center VARCHAR(50),
    budget_limit DECIMAL(15,2),
    
    -- Configurações
    is_active BOOLEAN DEFAULT true,
    settings JSONB DEFAULT '{}'::jsonb,
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id),
    
    -- Constraints
    UNIQUE(organization_id, code)
);

-- Índices
CREATE INDEX idx_departments_org ON departments(organization_id);
CREATE INDEX idx_departments_bu ON departments(business_unit_id);
CREATE INDEX idx_departments_parent ON departments(parent_department_id);
CREATE INDEX idx_departments_active ON departments(is_active);

-- Trigger
CREATE TRIGGER departments_updated_at
    BEFORE UPDATE ON departments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- FASE 4: CRIAR TEAMS (Grupos de Trabalho)
-- =====================================================

DROP TABLE IF EXISTS teams CASCADE;

CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Vínculos (opcionais - times podem ser transversais)
    business_unit_id UUID REFERENCES business_units(id) ON DELETE SET NULL,
    department_id UUID REFERENCES departments(id) ON DELETE SET NULL,
    
    -- Identificação
    name VARCHAR(200) NOT NULL,
    code VARCHAR(50),
    description TEXT,
    
    -- Tipo de time
    type VARCHAR(50) NOT NULL DEFAULT 'squad'
        CHECK (type IN ('squad', 'projeto', 'comite', 'transversal', 'funcional', 'temporario')),
    
    -- Para projetos temporários
    start_date DATE,
    end_date DATE,
    
    -- Gestão
    leader_id UUID REFERENCES profiles(id),
    
    -- Configurações
    is_active BOOLEAN DEFAULT true,
    settings JSONB DEFAULT '{}'::jsonb,
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id),
    
    -- Constraints
    UNIQUE(organization_id, code)
);

-- Índices
CREATE INDEX idx_teams_org ON teams(organization_id);
CREATE INDEX idx_teams_bu ON teams(business_unit_id);
CREATE INDEX idx_teams_dept ON teams(department_id);
CREATE INDEX idx_teams_type ON teams(type);
CREATE INDEX idx_teams_active ON teams(is_active);

-- Trigger
CREATE TRIGGER teams_updated_at
    BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- FASE 5: CRIAR ROLES_PERMISSIONS (RBAC)
-- =====================================================

DROP TABLE IF EXISTS roles_permissions CASCADE;

CREATE TABLE roles_permissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE, -- NULL = role global
    
    -- Identificação
    name VARCHAR(100) NOT NULL,
    code VARCHAR(50) NOT NULL,
    description TEXT,
    
    -- Nível hierárquico
    level VARCHAR(50) NOT NULL 
        CHECK (level IN ('owner', 'admin', 'manager', 'supervisor', 'analyst', 'viewer', 'guest')),
    
    -- Permissões granulares (JSONB)
    permissions JSONB NOT NULL DEFAULT '[]'::jsonb,
    -- Exemplo: ["reports:create", "reports:read", "reports:update", "reports:delete", 
    --           "metrics:read", "settings:read", "users:invite"]
    
    -- Permissões de escopo
    scope_business_units BOOLEAN DEFAULT false, -- Pode ver todas as BUs?
    scope_departments BOOLEAN DEFAULT false,
    scope_teams BOOLEAN DEFAULT false,
    
    -- Flags
    is_system BOOLEAN DEFAULT false, -- Não pode ser deletado
    is_active BOOLEAN DEFAULT true,
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    UNIQUE(organization_id, code),
    CHECK (organization_id IS NOT NULL OR is_system = true) -- Roles globais devem ser system
);

-- Índices
CREATE INDEX idx_roles_org ON roles_permissions(organization_id);
CREATE INDEX idx_roles_level ON roles_permissions(level);
CREATE INDEX idx_roles_system ON roles_permissions(is_system);
CREATE INDEX idx_roles_active ON roles_permissions(is_active);

-- Trigger
CREATE TRIGGER roles_permissions_updated_at
    BEFORE UPDATE ON roles_permissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Inserir roles padrão do sistema
INSERT INTO roles_permissions (name, code, description, level, permissions, is_system, scope_business_units, scope_departments, scope_teams) VALUES
('Proprietário', 'owner', 'Acesso total à organização', 'owner', 
 '["*:*"]', true, true, true, true),

('Administrador', 'admin', 'Gerencia usuários e configurações', 'admin',
 '["reports:*", "metrics:*", "challenges:*", "actions:*", "users:*", "settings:*", "audit:read"]', 
 true, true, true, true),

('Gerente', 'manager', 'Gerencia sua unidade/departamento', 'manager',
 '["reports:create", "reports:read", "reports:update", "metrics:read", "challenges:manage", "actions:manage", "teams:read"]', 
 true, false, false, false),

('Supervisor', 'supervisor', 'Supervisiona equipe e relatórios', 'supervisor',
 '["reports:create", "reports:read", "reports:update", "metrics:read", "challenges:read", "actions:update", "teams:read"]', 
 true, false, false, false),

('Analista', 'analyst', 'Cria e edita relatórios', 'analyst',
 '["reports:create", "reports:read", "reports:update", "metrics:read", "challenges:read", "actions:read"]', 
 true, false, false, false),

('Visualizador', 'viewer', 'Apenas visualiza dados', 'viewer',
 '["reports:read", "metrics:read", "challenges:read", "actions:read"]', 
 true, false, false, false),

('Convidado', 'guest', 'Acesso limitado temporário', 'guest',
 '["reports:read"]', 
 true, false, false, false);

-- =====================================================
-- FASE 6: CRIAR MEMBERSHIPS (Vínculos Usuário↔Estrutura)
-- =====================================================

DROP TABLE IF EXISTS memberships CASCADE;

CREATE TABLE memberships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Usuário
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Organização (obrigatório)
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    
    -- Vínculos na hierarquia (pelo menos um deve ser preenchido)
    business_unit_id UUID REFERENCES business_units(id) ON DELETE SET NULL,
    department_id UUID REFERENCES departments(id) ON DELETE SET NULL,
    team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
    
    -- Role/Permissões
    role_id UUID NOT NULL REFERENCES roles_permissions(id),
    
    -- Período de vigência
    start_date DATE DEFAULT CURRENT_DATE,
    end_date DATE, -- NULL = vigente indefinidamente
    
    -- Flags
    is_primary BOOLEAN DEFAULT false, -- Unidade principal do usuário
    is_active BOOLEAN DEFAULT true,
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id),
    
    -- Constraints
    CONSTRAINT at_least_one_scope CHECK (
        business_unit_id IS NOT NULL OR 
        department_id IS NOT NULL OR 
        team_id IS NOT NULL
    ),
    CONSTRAINT one_primary_per_org UNIQUE (user_id, organization_id, is_primary) 
        DEFERRABLE INITIALLY DEFERRED,
    UNIQUE(user_id, organization_id, business_unit_id, department_id, team_id)
);

-- Índices
CREATE INDEX idx_memberships_user ON memberships(user_id);
CREATE INDEX idx_memberships_org ON memberships(organization_id);
CREATE INDEX idx_memberships_bu ON memberships(business_unit_id);
CREATE INDEX idx_memberships_dept ON memberships(department_id);
CREATE INDEX idx_memberships_team ON memberships(team_id);
CREATE INDEX idx_memberships_role ON memberships(role_id);
CREATE INDEX idx_memberships_active ON memberships(is_active);
CREATE INDEX idx_memberships_period ON memberships(start_date, end_date);

-- Trigger
CREATE TRIGGER memberships_updated_at
    BEFORE UPDATE ON memberships
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- FASE 7: CRIAR AUDIT_LOGS (Rastreabilidade)
-- =====================================================

DROP TABLE IF EXISTS audit_logs CASCADE;

CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Contexto
    organization_id UUID REFERENCES organizations(id),
    session_id TEXT, -- ID da sessão
    
    -- Usuário
    user_id UUID REFERENCES auth.users(id),
    user_email TEXT, -- Snapshot do email no momento
    
    -- Ação
    action VARCHAR(50) NOT NULL 
        CHECK (action IN ('create', 'read', 'update', 'delete', 'login', 'logout', 'invite', 'export', 'import', 'settings_change')),
    
    -- Entidade afetada
    entity_type VARCHAR(50) NOT NULL
        CHECK (entity_type IN ('organization', 'business_unit', 'department', 'team', 'membership', 'role', 
                               'report', 'metric', 'challenge', 'action', 'user', 'settings', 'lever', 'action_item')),
    entity_id UUID,
    entity_name TEXT, -- Nome descritivo para facilitar busca
    
    -- Dados
    old_values JSONB,
    new_values JSONB,
    changes_summary TEXT, -- Resumo gerado automaticamente
    
    -- Contexto técnico
    ip_address INET,
    user_agent TEXT,
    request_id TEXT,
    
    -- Classificação
    severity VARCHAR(20) DEFAULT 'info' 
        CHECK (severity IN ('info', 'warning', 'critical')),
    
    -- Razão/justificativa (para ações críticas)
    reason TEXT,
    
    -- Metadados
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Campos de arquivo (se aplicável)
    file_name TEXT,
    file_size BIGINT
);

-- Índices otimizados para buscas
CREATE INDEX idx_audit_logs_org ON audit_logs(organization_id);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created ON audit_logs(created_at);
CREATE INDEX idx_audit_logs_severity ON audit_logs(severity);
CREATE INDEX idx_audit_logs_composite ON audit_logs(organization_id, created_at DESC);

-- Índice para busca por texto (usando GIN)
CREATE INDEX idx_audit_logs_search ON audit_logs USING GIN (
    to_tsvector('portuguese', coalesce(entity_name, '') || ' ' || coalesce(changes_summary, ''))
);

-- Política de retenção (particionamento opcional por mês)

-- =====================================================
-- FASE 8: ATUALIZAR PROFILES (Adicionar campos)
-- =====================================================

DO $$
BEGIN
    -- Avatar/Profile picture
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'avatar_url') THEN
        ALTER TABLE profiles ADD COLUMN avatar_url TEXT;
    END IF;
    
    -- Preferências
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'preferences') THEN
        ALTER TABLE profiles ADD COLUMN preferences JSONB DEFAULT '{}'::jsonb;
    END IF;
    
    -- Idioma
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'language') THEN
        ALTER TABLE profiles ADD COLUMN language VARCHAR(10) DEFAULT 'pt-BR';
    END IF;
    
    -- Timezone
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'timezone') THEN
        ALTER TABLE profiles ADD COLUMN timezone VARCHAR(50) DEFAULT 'America/Sao_Paulo';
    END IF;
    
    -- Último acesso
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'last_seen_at') THEN
        ALTER TABLE profiles ADD COLUMN last_seen_at TIMESTAMP WITH TIME ZONE;
    END IF;
    
    -- Status
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'status') THEN
        ALTER TABLE profiles ADD COLUMN status VARCHAR(20) DEFAULT 'active' 
            CHECK (status IN ('active', 'inactive', 'suspended', 'pending'));
    END IF;
    
    -- Telefone
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'phone') THEN
        ALTER TABLE profiles ADD COLUMN phone VARCHAR(20);
    END IF;
    
    -- Cargo/Job title
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'job_title') THEN
        ALTER TABLE profiles ADD COLUMN job_title VARCHAR(100);
    END IF;
    
END $$;

-- =====================================================
-- FASE 9: FUNÇÕES AUXILIARES
-- =====================================================

-- Função para verificar permissão do usuário
CREATE OR REPLACE FUNCTION check_user_permission(
    p_user_id UUID,
    p_organization_id UUID,
    p_permission TEXT
) RETURNS BOOLEAN AS $$
DECLARE
    v_has_permission BOOLEAN := false;
    v_role_permissions JSONB;
BEGIN
    -- Buscar permissões do usuário na organização
    SELECT rp.permissions INTO v_role_permissions
    FROM memberships m
    JOIN roles_permissions rp ON m.role_id = rp.id
    WHERE m.user_id = p_user_id
      AND m.organization_id = p_organization_id
      AND m.is_active = true
      AND (m.end_date IS NULL OR m.end_date >= CURRENT_DATE)
    ORDER BY rp.level
    LIMIT 1;
    
    -- Verificar se tem permissão específica ou wildcard
    IF v_role_permissions IS NOT NULL THEN
        v_has_permission := v_role_permissions @> to_jsonb(p_permission) 
                         OR v_role_permissions @> '"*:*"'::jsonb
                         OR v_role_permissions @> ('"' || split_part(p_permission, ':', 1) || ':*"')::jsonb;
    END IF;
    
    RETURN v_has_permission;
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;

-- Função para log de auditoria
CREATE OR REPLACE FUNCTION log_audit(
    p_action VARCHAR(50),
    p_entity_type VARCHAR(50),
    p_entity_id UUID,
    p_entity_name TEXT,
    p_old_values JSONB DEFAULT NULL,
    p_new_values JSONB DEFAULT NULL,
    p_reason TEXT DEFAULT NULL
) RETURNS UUID AS $$
DECLARE
    v_log_id UUID;
    v_user_id UUID;
    v_user_email TEXT;
    v_org_id UUID;
BEGIN
    -- Dados do contexto atual
    v_user_id := auth.uid();
    
    -- Buscar email
    SELECT email INTO v_user_email 
    FROM auth.users 
    WHERE id = v_user_id;
    
    -- Buscar organização primária do usuário
    SELECT organization_id INTO v_org_id
    FROM memberships
    WHERE user_id = v_user_id
      AND is_primary = true
      AND is_active = true
    LIMIT 1;
    
    -- Inserir log
    INSERT INTO audit_logs (
        organization_id,
        user_id,
        user_email,
        action,
        entity_type,
        entity_id,
        entity_name,
        old_values,
        new_values,
        reason,
        severity,
        created_at
    ) VALUES (
        v_org_id,
        v_user_id,
        v_user_email,
        p_action,
        p_entity_type,
        p_entity_id,
        p_entity_name,
        p_old_values,
        p_new_values,
        p_reason,
        CASE 
            WHEN p_action IN ('delete', 'settings_change') THEN 'warning'
            WHEN p_action IN ('login', 'logout') THEN 'info'
            ELSE 'info'
        END,
        NOW()
    )
    RETURNING id INTO v_log_id;
    
    RETURN v_log_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- FASE 10: RLS POLICIES (Segurança)
-- =====================================================

-- Habilitar RLS nas novas tabelas
ALTER TABLE business_units ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Business Units: usuários só veem da sua org
CREATE POLICY business_units_org_isolation ON business_units
    FOR ALL USING (
        organization_id IN (
            SELECT organization_id FROM memberships 
            WHERE user_id = auth.uid() AND is_active = true
        )
    );

-- Departments: usuários só veem da sua org
CREATE POLICY departments_org_isolation ON departments
    FOR ALL USING (
        organization_id IN (
            SELECT organization_id FROM memberships 
            WHERE user_id = auth.uid() AND is_active = true
        )
    );

-- Teams: usuários veem times da sua org ou onde são membros
CREATE POLICY teams_access ON teams
    FOR ALL USING (
        organization_id IN (
            SELECT organization_id FROM memberships 
            WHERE user_id = auth.uid() AND is_active = true
        )
        OR id IN (
            SELECT team_id FROM memberships 
            WHERE user_id = auth.uid() AND is_active = true
        )
    );

-- Memberships: usuários veem os próprios vínculos e da mesma org
CREATE POLICY memberships_access ON memberships
    FOR ALL USING (
        user_id = auth.uid()
        OR organization_id IN (
            SELECT organization_id FROM memberships 
            WHERE user_id = auth.uid() AND is_active = true
        )
    );

-- Roles: visíveis por usuários da mesma org ou roles system
CREATE POLICY roles_access ON roles_permissions
    FOR ALL USING (
        is_system = true
        OR organization_id IN (
            SELECT organization_id FROM memberships 
            WHERE user_id = auth.uid() AND is_active = true
        )
    );

-- Audit Logs: só admins e próprio usuário (para seus logs)
CREATE POLICY audit_logs_access ON audit_logs
    FOR ALL USING (
        user_id = auth.uid() -- Próprios logs
        OR organization_id IN (
            SELECT m.organization_id 
            FROM memberships m
            JOIN roles_permissions rp ON m.role_id = rp.id
            WHERE m.user_id = auth.uid() 
              AND m.is_active = true
              AND rp.level IN ('owner', 'admin')
        ) -- Admin vê tudo da org
    );

-- =====================================================
-- VALIDAÇÃO
-- =====================================================

SELECT 'HIERARQUIA ORGANIZACIONAL v4.0 CRIADA COM SUCESSO' as status;

SELECT 
    table_name,
    'CRIADA' as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN (
    'organizations', 'business_units', 'departments', 
    'teams', 'memberships', 'roles_permissions', 'audit_logs', 'profiles'
  )
ORDER BY table_name;

SELECT 
    'Roles padrão criados' as check_item,
    COUNT(*) as total
FROM roles_permissions WHERE is_system = true;
