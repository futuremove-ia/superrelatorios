# 🏢 Hierarquia Organizacional SuperRelatórios

## Visão Geral

Guia completo para execução e gerenciamento da hierarquia organizacional na plataforma SuperRelatórios, incluindo criação, manutenção, permissões e processos de gestão de equipes e usuários.

## Contexto e Importância

A hierarquia organizacional é crucial porque:
- **Estrutura acessos** baseados em papéis e responsabilidades
- **Garante privacidade** e segurança de dados
- **Facilita escalabilidade** para múltiplas organizações
- **Suporta colaboração** entre equipes
- **Permite auditoria** e compliance

## Arquitetura de Hierarquia

### 🏗️ Estrutura Organizacional

#### Modelo de Hierarquia
```
┌─────────────────────────────────────────────────────────────┐
│                    ORGANIZATION ROOT                       │
├─────────────────────────────────────────────────────────────┤
│  • ID: org_root                                          │
│  • Tipo: company                                        │
│  • Metadados: nome, segmento, plano, data criação          │
│  • Configurações: políticas globais, limites, SLAs        │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    DEPARTMENTS                             │
├─────────────────────────────────────────────────────────────┤
│  • ID: dept_finance, dept_marketing, dept_operations       │
│  • Tipo: department                                     │
│  • Metadados: nome, responsável, orçamento, equipe         │
│  • Configurações: políticas departamentais, metas     │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                      TEAMS                                 │
├─────────────────────────────────────────────────────────────┤
│  • ID: team_analytics, team_growth, team_support           │
│  • Tipo: team                                          │
│  • Metadados: nome, líder, membros, projetos              │
│  • Configurações: permissões de equipe, ferramentas       │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    USERS                                   │
├─────────────────────────────────────────────────────────────┤
│  • ID: user_123, user_456, user_789                        │
│  • Tipo: user                                          │
│  • Metadados: nome, email, cargo, habilidades             │
│  • Configurações: permissões individuais, preferências  │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 Tipos de Entidades

#### 1. Organization (Empresa)
```typescript
interface Organization {
  id: string;
  name: string;
  type: 'company' | 'enterprise' | 'startup' | 'agency';
  segment: 'b2b' | 'b2c' | 'b2b2c';
  plan: 'starter' | 'professional' | 'enterprise';
  status: 'active' | 'inactive' | 'suspended';
  
  // Metadados
  metadata: {
    industry: string;
    size: 'small' | 'medium' | 'large' | 'enterprise';
    founded: Date;
    website: string;
    logo?: string;
    description?: string;
  };
  
  // Configurações
  settings: {
    timezone: string;
    currency: string;
    dateFormat: string;
    language: string;
    features: {
      advancedAnalytics: boolean;
      customReports: boolean;
      apiAccess: boolean;
      whiteLabel: boolean;
    };
    limits: {
      users: number;
      teams: number;
      storage: number; // GB
      apiCalls: number; // per month
    };
  };
  
  // Controle de Acesso
  access: {
    defaultRole: UserRole;
    ssoEnabled: boolean;
    mfaRequired: boolean;
    ipWhitelist: string[];
    allowedDomains: string[];
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
```

#### 2. Department (Departamento)
```typescript
interface Department {
  id: string;
  organizationId: string;
  name: string;
  type: 'finance' | 'marketing' | 'sales' | 'operations' | 'hr' | 'it' | 'general';
  status: 'active' | 'inactive';
  
  // Metadados
  metadata: {
    description?: string;
    color: string; // Hex color for UI
    icon: string; // Icon identifier
    goals: string[];
    kpis: string[];
  };
  
  // Gestão
  management: {
    managerId: string;
    leadIds: string[];
    budget?: {
      allocated: number;
      spent: number;
      currency: string;
    };
    headcount: {
      allocated: number;
      current: number;
      target: number;
    };
  };
  
  // Configurações
  settings: {
    defaultPermissions: Permission[];
    customFields: CustomField[];
    workflows: Workflow[];
    integrations: Integration[];
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
```

#### 3. Team (Equipe)
```typescript
interface Team {
  id: string;
  organizationId: string;
  departmentId: string;
  name: string;
  type: 'project' | 'functional' | 'cross-functional';
  status: 'active' | 'inactive' | 'archived';
  
  // Metadados
  metadata: {
    description?: string;
    color: string;
    icon: string;
    purpose: string;
    objectives: string[];
  };
  
  // Gestão
  management: {
    leaderId: string;
    memberIds: string[];
    roles: TeamRole[];
    permissions: Permission[];
  };
  
  // Projetos
  projects: {
    active: Project[];
    completed: Project[];
    archived: Project[];
  };
  
  // Configurações
  settings: {
    defaultChannel: string; // Slack, Teams, etc.
    meetingSchedule: string;
    collaborationTools: string[];
    reporting: {
      frequency: 'daily' | 'weekly' | 'monthly';
      recipients: string[];
      metrics: string[];
    };
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
```

#### 4. User (Usuário)
```typescript
interface User {
  id: string;
  organizationId: string;
  email: string;
  username: string;
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  
  // Informações Pessoais
  personal: {
    firstName: string;
    lastName: string;
    phone?: string;
    avatar?: string;
    timezone: string;
    language: string;
    dateFormat: string;
  };
  
  // Papéis e Permissões
  roles: UserRole[];
  permissions: Permission[];
  departments: string[];
  teams: string[];
  
  // Configurações
  settings: {
    notifications: {
      email: boolean;
      push: boolean;
      slack: boolean;
      frequency: 'immediate' | 'hourly' | 'daily' | 'weekly';
      types: NotificationType[];
    };
    privacy: {
      profileVisibility: 'public' | 'organization' | 'private';
      activityVisibility: 'public' | 'organization' | 'private';
      showEmail: boolean;
      showPhone: boolean;
    };
    preferences: {
      theme: 'light' | 'dark' | 'auto';
      dashboard: string;
      defaultView: string;
      customWidgets: Widget[];
    };
  };
  
  // Segurança
  security: {
    lastLogin: Date;
    lastPasswordChange: Date;
    mfaEnabled: boolean;
    failedLoginAttempts: number;
    lockedUntil?: Date;
    apiKeys: ApiKey[];
  };
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
```

## Sistema de Permissões

### 🔐 Modelo de Permissões

#### 1. Roles (Papéis)
```typescript
enum UserRole {
  // Roles de Sistema
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  
  // Roles de Organização
  ORG_OWNER = 'org_owner',
  ORG_ADMIN = 'org_admin',
  
  // Roles de Departamento
  DEPT_HEAD = 'dept_head',
  DEPT_MANAGER = 'dept_manager',
  
  // Roles de Equipe
  TEAM_LEAD = 'team_lead',
  TEAM_MEMBER = 'team_member',
  
  // Roles Funcionais
  ANALYST = 'analyst',
  MANAGER = 'manager',
  VIEWER = 'viewer',
  CONTRIBUTOR = 'contributor',
  
  // Roles Especiais
  AUDITOR = 'auditor',
  SUPPORT = 'support',
  DEVELOPER = 'developer'
}

// Role hierarchy and permissions
const roleHierarchy = {
  [UserRole.SUPER_ADMIN]: 100,
  [UserRole.ADMIN]: 90,
  [UserRole.ORG_OWNER]: 80,
  [UserRole.ORG_ADMIN]: 70,
  [UserRole.DEPT_HEAD]: 60,
  [UserRole.DEPT_MANAGER]: 50,
  [UserRole.TEAM_LEAD]: 40,
  [UserRole.ANALYST]: 30,
  [UserRole.MANAGER]: 25,
  [UserRole.TEAM_MEMBER]: 20,
  [UserRole.CONTRIBUTOR]: 15,
  [UserRole.VIEWER]: 10,
  [UserRole.AUDITOR]: 35,
  [UserRole.SUPPORT]: 25,
  [UserRole.DEVELOPER]: 45
};
```

#### 2. Permissions (Permissões)
```typescript
interface Permission {
  id: string;
  name: string;
  description: string;
  category: 'read' | 'write' | 'delete' | 'admin' | 'system';
  resource: string;
  action: string;
  scope: 'global' | 'organization' | 'department' | 'team' | 'personal';
}

// Permission definitions
const permissions: Permission[] = [
  // Read permissions
  {
    id: 'read:metrics',
    name: 'Read Metrics',
    description: 'View metrics and analytics',
    category: 'read',
    resource: 'metrics',
    action: 'read',
    scope: 'personal'
  },
  {
    id: 'read:reports',
    name: 'Read Reports',
    description: 'View reports and dashboards',
    category: 'read',
    resource: 'reports',
    action: 'read',
    scope: 'team'
  },
  {
    id: 'read:users',
    name: 'Read Users',
    description: 'View user profiles and information',
    category: 'read',
    resource: 'users',
    action: 'read',
    scope: 'organization'
  },
  
  // Write permissions
  {
    id: 'write:metrics',
    name: 'Write Metrics',
    description: 'Create and update metrics',
    category: 'write',
    resource: 'metrics',
    action: 'write',
    scope: 'team'
  },
  {
    id: 'write:reports',
    name: 'Write Reports',
    description: 'Create and modify reports',
    category: 'write',
    resource: 'reports',
    action: 'write',
    scope: 'team'
  },
  {
    id: 'write:users',
    name: 'Write Users',
    description: 'Create and modify user profiles',
    category: 'write',
    resource: 'users',
    action: 'write',
    scope: 'organization'
  },
  
  // Admin permissions
  {
    id: 'admin:users',
    name: 'Admin Users',
    description: 'Manage user accounts and permissions',
    category: 'admin',
    resource: 'users',
    action: 'admin',
    scope: 'organization'
  },
  {
    id: 'admin:teams',
    name: 'Admin Teams',
    description: 'Manage teams and memberships',
    category: 'admin',
    resource: 'teams',
    action: 'admin',
    scope: 'organization'
  },
  {
    id: 'admin:departments',
    name: 'Admin Departments',
    description: 'Manage departments and structure',
    category: 'admin',
    resource: 'departments',
    action: 'admin',
    scope: 'organization'
  },
  
  // System permissions
  {
    id: 'system:config',
    name: 'System Config',
    description: 'Configure system settings',
    category: 'system',
    resource: 'system',
    action: 'config',
    scope: 'global'
  },
  {
    id: 'system:audit',
    name: 'System Audit',
    description: 'Access audit logs and reports',
    category: 'system',
    resource: 'system',
    action: 'audit',
    scope: 'global'
  }
];
```

#### 3. Permission Matrix
```typescript
interface PermissionMatrix {
  [role: string]: {
    [permission: string]: boolean;
  };
}

// Permission matrix by role
const permissionMatrix: PermissionMatrix = {
  [UserRole.SUPER_ADMIN]: {
    // All permissions
    ...permissions.reduce((acc, perm) => ({ ...acc, [perm.id]: true }), {})
  },
  
  [UserRole.ADMIN]: {
    'read:metrics': true,
    'read:reports': true,
    'read:users': true,
    'write:metrics': true,
    'write:reports': true,
    'write:users': true,
    'admin:users': true,
    'admin:teams': true,
    'admin:departments': true,
    'system:audit': true
  },
  
  [UserRole.ORG_OWNER]: {
    'read:metrics': true,
    'read:reports': true,
    'read:users': true,
    'write:metrics': true,
    'write:reports': true,
    'write:users': true,
    'admin:users': true,
    'admin:teams': true,
    'admin:departments': true
  },
  
  [UserRole.ORG_ADMIN]: {
    'read:metrics': true,
    'read:reports': true,
    'read:users': true,
    'write:metrics': true,
    'write:reports': true,
    'write:users': true,
    'admin:users': true,
    'admin:teams': true
  },
  
  [UserRole.DEPT_HEAD]: {
    'read:metrics': true,
    'read:reports': true,
    'read:users': true,
    'write:metrics': true,
    'write:reports': true,
    'admin:teams': true
  },
  
  [UserRole.TEAM_LEAD]: {
    'read:metrics': true,
    'read:reports': true,
    'write:metrics': true,
    'write:reports': true
  },
  
  [UserRole.ANALYST]: {
    'read:metrics': true,
    'read:reports': true,
    'write:metrics': true,
    'write:reports': true
  },
  
  [UserRole.MANAGER]: {
    'read:metrics': true,
    'read:reports': true,
    'read:users': true,
    'write:metrics': true,
    'write:reports': true
  },
  
  [UserRole.TEAM_MEMBER]: {
    'read:metrics': true,
    'read:reports': true
  },
  
  [UserRole.VIEWER]: {
    'read:metrics': true,
    'read:reports': true
  }
};
```

## Implementação do Sistema

### 🔧 Database Schema

#### 1. Tabelas Principais
```sql
-- Organizations table
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  segment VARCHAR(50) NOT NULL,
  plan VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  
  -- Metadata
  industry VARCHAR(100),
  size VARCHAR(20),
  founded DATE,
  website VARCHAR(255),
  logo TEXT,
  description TEXT,
  
  -- Settings
  timezone VARCHAR(50) DEFAULT 'UTC',
  currency VARCHAR(3) DEFAULT 'USD',
  date_format VARCHAR(20) DEFAULT 'YYYY-MM-DD',
  language VARCHAR(10) DEFAULT 'en',
  
  -- JSON fields
  metadata JSONB DEFAULT '{}',
  settings JSONB DEFAULT '{}',
  access JSONB DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID,
  updated_by UUID,
  
  -- Constraints
  CONSTRAINT organizations_name_check CHECK (length(name) >= 3),
  CONSTRAINT organizations_type_check CHECK (type IN ('company', 'enterprise', 'startup', 'agency')),
  CONSTRAINT organizations_segment_check CHECK (segment IN ('b2b', 'b2c', 'b2b2c')),
  CONSTRAINT organizations_plan_check CHECK (plan IN ('starter', 'professional', 'enterprise')),
  CONSTRAINT organizations_status_check CHECK (status IN ('active', 'inactive', 'suspended'))
);

-- Departments table
CREATE TABLE departments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  
  -- Metadata
  description TEXT,
  color VARCHAR(7) DEFAULT '#3B82F6',
  icon VARCHAR(50) DEFAULT 'building',
  
  -- Management
  manager_id UUID REFERENCES users(id) ON DELETE SET NULL,
  budget JSONB,
  headcount JSONB,
  
  -- JSON fields
  metadata JSONB DEFAULT '{}',
  settings JSONB DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID,
  updated_by UUID,
  
  -- Constraints
  CONSTRAINT departments_name_check CHECK (length(name) >= 3),
  CONSTRAINT departments_type_check CHECK (type IN ('finance', 'marketing', 'sales', 'operations', 'hr', 'it', 'general')),
  CONSTRAINT departments_status_check CHECK (status IN ('active', 'inactive', 'archived'))
);

-- Teams table
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  department_id UUID REFERENCES departments(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  
  -- Metadata
  description TEXT,
  color VARCHAR(7) DEFAULT '#10B981',
  icon VARCHAR(50) DEFAULT 'users',
  
  -- Management
  leader_id UUID REFERENCES users(id) ON DELETE SET NULL,
  
  -- JSON fields
  metadata JSONB DEFAULT '{}',
  settings JSONB DEFAULT '{}',
  projects JSONB DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID,
  updated_by UUID,
  
  -- Constraints
  CONSTRAINT teams_name_check CHECK (length(name) >= 3),
  CONSTRAINT teams_type_check CHECK (type IN ('project', 'functional', 'cross-functional')),
  CONSTRAINT teams_status_check CHECK (status IN ('active', 'inactive', 'archived'))
);

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  
  -- Personal info
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  avatar TEXT,
  timezone VARCHAR(50) DEFAULT 'UTC',
  language VARCHAR(10) DEFAULT 'en',
  date_format VARCHAR(20) DEFAULT 'YYYY-MM-DD',
  
  -- Security
  password_hash VARCHAR(255) NOT NULL,
  salt VARCHAR(255) NOT NULL,
  email_verified BOOLEAN DEFAULT false,
  last_login TIMESTAMP WITH TIME ZONE,
  failed_login_attempts INTEGER DEFAULT 0,
  locked_until TIMESTAMP WITH TIME ZONE,
  
  -- JSON fields
  personal JSONB DEFAULT '{}',
  roles JSONB DEFAULT '["VIEWER"]',
  permissions JSONB DEFAULT '[]',
  departments JSONB DEFAULT '[]',
  teams JSONB DEFAULT '[]',
  settings JSONB DEFAULT '{}',
  security JSONB DEFAULT '{}',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID,
  updated_by UUID,
  
  -- Constraints
  CONSTRAINT users_email_check CHECK (email ~* '@.*\..*'),
  CONSTRAINT users_username_check CHECK (length(username) >= 3),
  CONSTRAINT users_status_check CHECK (status IN ('active', 'inactive', 'suspended', 'pending'))
);

-- User roles junction table
CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL,
  granted_by UUID REFERENCES users(id),
  granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  CONSTRAINT user_roles_role_check CHECK (role IN ('super_admin', 'admin', 'org_owner', 'org_admin', 'dept_head', 'dept_manager', 'team_lead', 'analyst', 'manager', 'viewer', 'contributor', 'auditor', 'support', 'developer')),
  CONSTRAINT user_roles_unique UNIQUE (user_id, role)
);

-- Team members junction table
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member',
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  left_at TIMESTAMP WITH TIME ZONE,
  
  CONSTRAINT team_members_role_check CHECK (role IN ('leader', 'member', 'contributor', 'observer')),
  CONSTRAINT team_members_unique UNIQUE (team_id, user_id)
);

-- Department members junction table
CREATE TABLE department_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department_id UUID NOT NULL REFERENCES departments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member',
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  left_at TIMESTAMP WITH TIME ZONE,
  
  CONSTRAINT department_members_role_check CHECK (role IN ('head', 'manager', 'member')),
  CONSTRAINT department_members_unique UNIQUE (department_id, user_id)
);
```

#### 2. Índices
```sql
-- Performance indexes
CREATE INDEX idx_organizations_status ON organizations(status);
CREATE INDEX idx_organizations_plan ON organizations(plan);
CREATE INDEX idx_organizations_created_at ON organizations(created_at);

CREATE INDEX idx_departments_org_id ON departments(organization_id);
CREATE INDEX idx_departments_status ON departments(status);
CREATE INDEX idx_departments_manager_id ON departments(manager_id);

CREATE INDEX idx_teams_org_id ON teams(organization_id);
CREATE INDEX idx_teams_dept_id ON teams(department_id);
CREATE INDEX idx_teams_status ON teams(status);
CREATE INDEX idx_teams_leader_id ON teams(leader_id);

CREATE INDEX idx_users_org_id ON users(organization_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_users_created_at ON users(created_at);

CREATE INDEX idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX idx_user_roles_role ON user_roles(role);

CREATE INDEX idx_team_members_team_id ON team_members(team_id);
CREATE INDEX idx_team_members_user_id ON team_members(user_id);
CREATE INDEX idx_team_members_role ON team_members(role);

CREATE INDEX idx_dept_members_dept_id ON department_members(department_id);
CREATE INDEX idx_dept_members_user_id ON department_members(user_id);
CREATE INDEX idx_dept_members_role ON department_members(role);
```

### 🔧 API Endpoints

#### 1. Organization Management
```typescript
// Organization management endpoints
interface OrganizationAPI {
  // Create organization
  'POST /api/organizations': {
    description: 'Create a new organization',
    authentication: 'required',
    permissions: ['super_admin'],
    body: CreateOrganizationRequest;
    response: OrganizationResponse;
  };
  
  // Get organization
  'GET /api/organizations/:id': {
    description: 'Get organization details',
    authentication: 'required',
    permissions: ['org_admin', 'dept_head', 'team_lead'],
    response: OrganizationResponse;
  };
  
  // Update organization
  'PUT /api/organizations/:id': {
    description: 'Update organization details',
    authentication: 'required',
    permissions: ['org_admin'],
    body: UpdateOrganizationRequest;
    response: OrganizationResponse;
  };
  
  // List organizations
  'GET /api/organizations': {
    description: 'List organizations (admin only)',
    authentication: 'required',
    permissions: ['super_admin'],
    query: ListOrganizationsQuery;
    response: ListOrganizationsResponse;
  };
}

interface CreateOrganizationRequest {
  name: string;
  type: 'company' | 'enterprise' | 'startup' | 'agency';
  segment: 'b2b' | 'b2c' | 'b2b2c';
  plan: 'starter' | 'professional' | 'enterprise';
  industry: string;
  size: 'small' | 'medium' | 'large' | 'enterprise';
  website?: string;
  description?: string;
  timezone?: string;
  currency?: string;
}
```

#### 2. User Management
```typescript
// User management endpoints
interface UserAPI {
  // Create user
  'POST /api/users': {
    description: 'Create a new user',
    authentication: 'required',
    permissions: ['admin:users'],
    body: CreateUserRequest;
    response: UserResponse;
  };
  
  // Get user
  'GET /api/users/:id': {
    description: 'Get user details',
    authentication: 'required',
    permissions: ['read:users'],
    response: UserResponse;
  };
  
  // Update user
  'PUT /api/users/:id': {
    description: 'Update user details',
    authentication: 'required',
    permissions: ['write:users'],
    body: UpdateUserRequest;
    response: UserResponse;
  };
  
  // List users
  'GET /api/users': {
    description: 'List users',
    authentication: 'required',
    permissions: ['read:users'],
    query: ListUsersQuery;
    response: ListUsersResponse;
  };
  
  // Update user roles
  'PUT /api/users/:id/roles': {
    description: 'Update user roles',
    authentication: 'required',
    permissions: ['admin:users'],
    body: UpdateUserRolesRequest;
    response: UserResponse;
  };
}

interface CreateUserRequest {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  timezone?: string;
  language?: string;
  roles?: UserRole[];
  departments?: string[];
  teams?: string[];
  settings?: UserSettings;
}
```

#### 3. Team Management
```typescript
// Team management endpoints
interface TeamAPI {
  // Create team
  'POST /api/teams': {
    description: 'Create a new team',
    authentication: 'required',
    permissions: ['admin:teams'],
    body: CreateTeamRequest;
    response: TeamResponse;
  };
  
  // Get team
  'GET /api/teams/:id': {
    description: 'Get team details',
    authentication: 'required',
    permissions: ['read:reports'],
    response: TeamResponse;
  };
  
  // Update team
  'PUT /api/teams/:id': {
    description: 'Update team details',
    authentication: 'required',
    permissions: ['admin:teams'],
    body: UpdateTeamRequest;
    response: TeamResponse;
  };
  
  // Add team member
  'POST /api/teams/:id/members': {
    description: 'Add member to team',
    authentication: 'required',
    permissions: ['admin:teams'],
    body: AddTeamMemberRequest;
    response: TeamMemberResponse;
  };
  
  // Remove team member
  'DELETE /api/teams/:id/members/:userId': {
    description: 'Remove member from team',
    authentication: 'required',
    permissions: ['admin:teams'],
    response: SuccessResponse;
  };
}

interface CreateTeamRequest {
  name: string;
  departmentId?: string;
  type: 'project' | 'functional' | 'cross-functional';
  description?: string;
  leaderId?: string;
  memberIds?: string[];
  settings?: TeamSettings;
}
```

## Processos de Gestão

### 🔄 Workflow de Criação

#### 1. Onboarding de Organização
```typescript
// Organization onboarding workflow
interface OrganizationOnboarding {
  steps: [
    {
      id: 'create_organization',
      name: 'Create Organization',
      description: 'Create the organization account',
      responsible: 'super_admin',
      duration: '5 minutes',
      required: true,
      dependencies: []
    },
    {
      id: 'setup_admin',
      name: 'Setup Admin User',
      description: 'Create or assign organization admin',
      responsible: 'super_admin',
      duration: '3 minutes',
      required: true,
      dependencies: ['create_organization']
    },
    {
      id: 'create_departments',
      name: 'Create Departments',
      description: 'Create initial department structure',
      responsible: 'org_admin',
      duration: '15 minutes',
      required: true,
      dependencies: ['setup_admin']
    },
    {
      id: 'create_teams',
      name: 'Create Teams',
      description: 'Create initial teams',
      responsible: 'org_admin',
      duration: '20 minutes',
      required: true,
      dependencies: ['create_departments']
    },
    {
      id: 'invite_users',
      name: 'Invite Initial Users',
      description: 'Send invitations to initial users',
      responsible: 'org_admin',
      duration: '10 minutes',
      required: true,
      dependencies: ['create_teams']
    },
    {
      id: 'configure_settings',
      name: 'Configure Settings',
      description: 'Configure organization settings',
      responsible: 'org_admin',
      duration: '10 minutes',
      required: true,
      dependencies: ['invite_users']
    },
    {
      id: 'setup_integrations',
      name: 'Setup Integrations',
      description: 'Configure third-party integrations',
      responsible: 'org_admin',
      duration: '15 minutes',
      required: false,
      dependencies: ['configure_settings']
    },
    {
      id: 'training_session',
      name: 'Training Session',
      description: 'Conduct training session',
      responsible: 'success_manager',
      duration: '60 minutes',
      required: false,
      dependencies: ['setup_integrations']
    }
  ];
  
  totalDuration: '2 hours 18 minutes';
  criticalPath: '1 hour 33 minutes';
}
```

#### 2. Onboarding de Usuários
```typescript
// User onboarding workflow
interface UserOnboarding {
  steps: [
    {
      id: 'user_registration',
      name: 'User Registration',
      description: 'User completes registration form',
      responsible: 'user',
      duration: '5 minutes',
      required: true,
      dependencies: []
    },
    {
      id: 'email_verification',
      name: 'Email Verification',
      description: 'User verifies email address',
      responsible: 'user',
      duration: '2 minutes',
      required: true,
      dependencies: ['user_registration']
    },
    {
      id: 'profile_setup',
      name: 'Profile Setup',
      description: 'User completes profile information',
      responsible: 'user',
      duration: '5 minutes',
      required: true,
      dependencies: ['email_verification']
    },
    {
      id: 'role_assignment',
      name: 'Role Assignment',
      description: 'Admin assigns roles and permissions',
      responsible: 'manager',
      duration: '3 minutes',
      required: true,
      dependencies: ['profile_setup']
    },
    {
      id: 'team_assignment',
      name: 'Team Assignment',
      description: 'User assigned to teams',
      responsible: 'team_lead',
      duration: '2 minutes',
      required: true,
      dependencies: ['role_assignment']
    },
    {
      id: 'initial_training',
      name: 'Initial Training',
      description: 'User completes initial training',
      responsible: 'manager',
      duration: '30 minutes',
      required: false,
      dependencies: ['team_assignment']
    },
    {
      id: 'first_login',
      name: 'First Login',
      description: 'User logs in for the first time',
      responsible: 'user',
      duration: '1 minute',
      required: true,
      dependencies: ['initial_training']
    }
  ];
  
  totalDuration: '48 minutes';
  criticalPath: '18 minutes';
}
```

### 🔄 Workflow de Offboarding

#### 1. Offboarding de Usuários
```typescript
// User offboarding workflow
interface UserOffboarding {
  steps: [
    {
      id: 'initiate_offboarding',
      name: 'Initiate Offboarding',
      description: 'Manager initiates offboarding process',
      responsible: 'manager',
      duration: '2 minutes',
      required: true,
      dependencies: []
    },
    {
      id: 'reassign_responsibilities',
      name: 'Reassign Responsibilities',
      description: 'Reassign user responsibilities to other team members',
      responsible: 'manager',
      duration: '30 minutes',
      required: true,
      dependencies: ['initiate_offboarding']
    },
    {
      id: 'handover_knowledge',
      name: 'Knowledge Handover',
      description: 'Document and handover knowledge',
      responsible: 'user',
      duration: '60 minutes',
      required: true,
      dependencies: ['reassign_responsibilities']
    },
    {
      id: 'access_revocation',
      name: 'Access Revocation',
      description: 'Revoke system access',
      responsible: 'admin',
      duration: '5 minutes',
      required: true,
      dependencies: ['handover_knowledge']
    },
    {
      id: 'account_deactivation',
      name: 'Account Deactivation',
      description: 'Deactivate user account',
      responsible: 'admin',
      duration: '2 minutes',
      required: true,
      dependencies: ['access_revocation']
    },
    {
      id: 'offboarding_survey',
      name: 'Offboarding Survey',
      description: 'Conduct offboarding survey',
      responsible: 'hr',
      duration: '10 minutes',
      required: false,
      dependencies: ['account_deactivation']
    },
    {
      id: 'final_cleanup',
      name: 'Final Cleanup',
      description: 'Final data cleanup and archiving',
      responsible: 'admin',
      duration: '5 minutes',
      required: true,
      dependencies: ['offboarding_survey']
    }
  ];
  
  totalDuration: '1 hour 54 minutes';
  criticalPath: '44 minutes';
}
```

## Scripts de Execução

### 🛠️ Scripts SQL

#### 1. Criação de Hierarquia
```sql
-- CREATE_ORGANIZATION_HIERARCHY.sql
-- Script para criar estrutura organizacional completa

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create functions
CREATE OR REPLACE FUNCTION generate_uuid()
RETURNS UUID
AS $$
BEGIN
  RETURN gen_random_uuid();
END;
$$ LANGUAGE plpgsql;

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create sample organization
INSERT INTO organizations (
  id,
  name,
  type,
  segment,
  plan,
  status,
  industry,
  size,
  founded,
  website,
  description,
  timezone,
  currency,
  language,
  metadata,
  settings,
  access,
  created_at,
  updated_at
) VALUES (
  generate_uuid(),
  'SuperRelatórios Demo',
  'company',
  'b2b',
  'professional',
  'active',
  'Technology',
  'medium',
  '2024-01-15',
  'https://superrelatorios.com',
  'Analytics platform for PMEs',
  'America/Sao_Paulo',
  'BRL',
  'pt-BR',
  '{"industry": "Technology", "employee_count": 50, "revenue": 1000000}',
  '{"timezone": "America/Sao_Paulo", "currency": "BRL", "dateFormat": "DD/MM/YYYY", "language": "pt-BR", "features": {"advancedAnalytics": true, "customReports": true, "apiAccess": true}, "limits": {"users": 100, "teams": 20, "storage": 100, "apiCalls": 100000}}}',
  '{"defaultRole": "VIEWER", "ssoEnabled": true, "mfaRequired": false, "ipWhitelist": [], "allowedDomains": ["superrelatorios.com"]}',
  NOW(),
  NOW()
);

-- Create departments
INSERT INTO departments (
  id,
  organization_id,
  name,
  type,
  status,
  description,
  color,
  icon,
  manager_id,
  budget,
  headcount,
  metadata,
  settings,
  created_at,
  updated_at
) VALUES
  -- Finance Department
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    'Finance',
    'finance',
    'active',
    'Financial planning and analysis',
    '#10B981',
    'dollar-sign',
    NULL,
    '{"allocated": 500000, "spent": 350000, "currency": "BRL"}',
    '{"allocated": 5, "current": 4, "target": 6}',
    '{"goals": ["Budget optimization", "Financial planning", "Cost reduction"], "kpis": ["budget_variance", "cost_per_employee", "roi"]}',
    '{"defaultPermissions": ["read:metrics", "read:reports", "write:metrics"], "customFields": [], "workflows": [], "integrations": []}',
    NOW(),
    NOW()
  ),
  -- Marketing Department
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    'Marketing',
    'marketing',
    'active',
    'Marketing campaigns and lead generation',
    '#8B5CF6',
    'megaphone',
    NULL,
    '{"allocated": 300000, "spent": 200000, "currency": "BRL"}',
    '{"allocated": 8, "current": 7, "target": 10}',
    '{"goals": ["Lead generation", "Brand awareness", "Customer acquisition"], "kpis": ["lead_conversion", "marketing_roi", "customer_ltv"]}',
    '{"defaultPermissions": ["read:metrics", "read:reports", "write:metrics"], "customFields": [], "workflows": [], "integrations": []}',
    NOW(),
    NOW()
  ),
  -- Operations Department
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    'Operations',
    'operations',
    'active',
    'Operational efficiency and process improvement',
    '#F59E0B',
    'cogs',
    NULL,
    '{"allocated": 400000, "spent": 300000, "currency": "BRL"}',
    '{"allocated": 6, "current": 6, "target": 8}',
    '{"goals": ["Process optimization", "Efficiency improvement", "Cost reduction"], "kpis": ["process_efficiency", "operational_cost", "productivity"]}',
    '{"defaultPermissions": ["read:metrics", "read:reports", "write:metrics"], "customFields": [], "workflows": [], "integrations": []}',
    NOW(),
    NOW()
  );

-- Create teams
INSERT INTO teams (
  id,
  organization_id,
  department_id,
  name,
  type,
  status,
  description,
  color,
  icon,
  leader_id,
  metadata,
  settings,
  projects,
  created_at,
  updated_at
) VALUES
  -- Analytics Team
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    (SELECT id FROM departments WHERE name = 'Finance'),
    'Analytics Team',
    'functional',
    'active',
    'Data analysis and insights generation',
    '#6366F1',
    'bar-chart',
    NULL,
    '{"purpose": "Generate insights and analytics", "objectives": ["Data analysis", "Insight generation", "Report creation"]}',
    '{"defaultChannel": "slack", "meetingSchedule": "weekly", "collaborationTools": ["slack", "notion", "github"], "reporting": {"frequency": "weekly", "recipients": ["dept_head"], "metrics": ["dashboard_usage", "report_generation", "data_quality"]}}',
    '{"active": [], "completed": [], "archived": []}',
    NOW(),
    NOW()
  ),
  -- Growth Team
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    (SELECT id FROM departments WHERE name = 'Marketing'),
    'Growth Team',
    'cross-functional',
    'active',
    'Growth strategies and customer acquisition',
    '#10B981',
    'trending-up',
    NULL,
    '{"purpose": "Drive growth and customer acquisition", "objectives": ["Lead generation", "Conversion optimization", "Customer retention"]}',
    '{"defaultChannel": "slack", "meetingSchedule": "bi-weekly", "collaborationTools": ["slack", "notion", "hubspot"], "reporting": {"frequency": "weekly", "recipients": ["dept_head"], "metrics": ["conversion_rate", "customer_acquisition", "churn_rate"]}}',
    '{"active": [], "completed": [], "archived": []}',
    NOW(),
    NOW()
  );

-- Create admin user
INSERT INTO users (
  id,
  organization_id,
  email,
  username,
  status,
  first_name,
  last_name,
  timezone,
  language,
  password_hash,
  salt,
  email_verified,
  roles,
  permissions,
  departments,
  teams,
  settings,
  security,
  created_at,
  updated_at
) VALUES (
  generate_uuid(),
  (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
  'admin@superrelatorios.com',
  'admin',
  'active',
  'Admin',
  'User',
  'America/Sao_Paulo',
  'pt-BR',
  crypt('admin123', 'salt'),
  'salt',
  true,
  '["ORG_ADMIN", "DEPT_HEAD", "TEAM_LEAD"]',
  '["read:metrics", "read:reports", "read:users", "write:metrics", "write:reports", "write:users", "admin:users", "admin:teams", "admin:departments"]',
  '["finance", "marketing", "operations"]',
  '["analytics", "growth"]',
  '{"notifications": {"email": true, "push": false, "slack": true, "frequency": "daily", "types": ["metric_alerts", "team_updates"]}, "privacy": {"profileVisibility": "organization", "activityVisibility": "organization", "showEmail": true, "showPhone": false}, "preferences": {"theme": "light", "dashboard": "overview", "defaultView": "grid", "customWidgets": []}}',
  '{"lastLogin": null, "lastPasswordChange": null, "mfaEnabled": false, "failedLoginAttempts": 0}',
  NOW(),
  NOW()
);

-- Assign admin to departments
INSERT INTO department_members (id, department_id, user_id, role, joined_at)
SELECT 
  generate_uuid(),
  d.id,
  u.id,
  'head',
  NOW()
FROM departments d, users u
WHERE d.organization_id = u.id AND u.email = 'admin@superrelatorios.com';

-- Assign admin to teams
INSERT INTO team_members (id, team_id, user_id, role, joined_at)
SELECT 
  generate_uuid(),
  t.id,
  u.id,
  'leader',
  NOW()
FROM teams t, users u
WHERE t.organization_id = u.id AND u.email = 'admin@superrelatorios.com';

-- Create sample users
INSERT INTO users (
  id,
  organization_id,
  email,
  username,
  status,
  first_name,
  last_name,
  timezone,
  language,
  password_hash,
  salt,
  email_verified,
  roles,
  permissions,
  departments,
  teams,
  settings,
  security,
  created_at,
  updated_at
) VALUES
  -- Finance Analyst
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    'analyst@superrelatorios.com',
    'analyst',
    'active',
    'Finance',
    'Analyst',
    'America/Sao_Paulo',
    'pt-BR',
    crypt('analyst123', 'salt'),
    'salt',
    true,
    '["ANALYST", "TEAM_MEMBER"]',
    '["read:metrics", "read:reports", "write:metrics"]',
    '["finance"]',
    '["analytics"]',
    '{"notifications": {"email": true, "push": false, "slack": true, "frequency": "daily", "types": ["metric_alerts", "team_updates"]}, "privacy": {"profileVisibility": "organization", "activityVisibility": "organization", "showEmail": true, "showPhone": false}, "preferences": {"theme": "light", "dashboard": "analytics", "defaultView": "grid", "customWidgets": []}}',
    '{"lastLogin": null, "lastPasswordChange": null, "mfaEnabled": false, "failedLoginAttempts": 0}',
    NOW(),
    NOW()
  ),
  -- Marketing Manager
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    'marketing@superrelatorios.com',
    'marketing',
    'active',
    'Marketing',
    'Manager',
    'America/Sao_Paulo',
    'pt-BR',
    crypt('marketing123', 'salt'),
    'salt',
    true,
    '["MANAGER", "TEAM_LEAD"]',
    '["read:metrics", "read:reports", "write:metrics", "write:reports"]',
    '["marketing"]',
    '["growth"]',
    '{"notifications": {"email": true, "push": false, "slack": true, "frequency": "daily", "types": ["metric_alerts", "team_updates", "campaign_updates"]}, "privacy": {"profileVisibility": "organization", "activityVisibility": "organization", "showEmail": true, "showPhone": true}, "preferences": {"theme": "light", "dashboard": "marketing", "defaultView": "grid", "customWidgets": []}}',
    '{"lastLogin": null, "lastPasswordChange": null, "mfaEnabled": false, "failedLoginAttempts": 0}',
    NOW(),
    NOW()
  ),
  -- Operations Analyst
  (
    generate_uuid(),
    (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo'),
    'operations@superrelatorios.com',
    'operations',
    'active',
    'Operations',
    'Analyst',
    'America/Sao_Paulo',
    'pt-BR',
    crypt('operations123', 'salt'),
    'salt',
    true,
    '["ANALYST", "TEAM_MEMBER"]',
    '["read:metrics", "read:reports", "write:metrics"]',
    '["operations"]',
    '["analytics"],
    '{"notifications": {"email": true, "push": false, "slack": true, "frequency": "daily", "types": ["metric_alerts", "team_updates"]}, "privacy": {"profileVisibility": "organization", "activityVisibility": "organization", "showEmail": true, "showPhone": false}, "preferences": {"theme": "light", "dashboard": "operations", "defaultView": "grid", "customWidgets": []}}',
    '{"lastLogin": null, "lastPasswordChange": null, "mfaEnabled": false, "failedLoginAttempts": 0}',
    NOW(),
    NOW()
  );

-- Assign users to departments
INSERT INTO department_members (id, department_id, user_id, role, joined_at)
SELECT 
  generate_uuid(),
  d.id,
  u.id,
  CASE 
    WHEN u.email = 'analyst@superrelatorios.com' THEN 'member'
    WHEN u.email = 'marketing@superrelatorios.com' THEN 'manager'
    WHEN u.email = 'operations@superrelatorios.com' THEN 'member'
    ELSE 'member'
  END,
  NOW()
FROM departments d, users u
WHERE d.organization_id = u.id AND u.email IN ('analyst@superrelatorios.com', 'marketing@superrelatorios.com', 'operations@superrelatorios.com');

-- Assign users to teams
INSERT INTO team_members (id, team_id, user_id, role, joined_at)
SELECT 
  generate_uuid(),
  t.id,
  u.id,
  CASE 
    WHEN u.email = 'analyst@superrelatorios.com' THEN 'member'
    WHEN u.email = 'marketing@superrelatorios.com' THEN 'member'
    WHEN u.email = 'operations@superrelatorios.com' THEN 'member'
    ELSE 'member'
  END,
  NOW()
FROM teams t, users u
WHERE t.organization_id = u.id AND u.email IN ('analyst@superrelatorios.com', 'marketing@superrelatorios.com', 'operations@superrelatorios.com');

-- Create triggers for updated_at
CREATE TRIGGER organizations_updated_at
  BEFORE UPDATE ON organizations
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER departments_updated_at
  BEFORE UPDATE ON departments
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER teams_updated_at
  BEFORE UPDATE ON teams
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_set_timestamp();

-- Output success message
DO $$
BEGIN
  RAISE NOTICE 'Organization hierarchy created successfully!';
  RAISE NOTICE 'Organizations: 1';
  RAISE NOTICE 'Departments: 3';
  RAISE NOTICE 'Teams: 2';
  RAISE NOTICE 'Users: 4';
  RAISE NOTICE '====================================';
END $$;
```

#### 2. Script de Limpeza
```sql
-- CLEANUP_HIERARCHY.sql
-- Script para limpar dados de teste

-- Confirm cleanup
DO $$
BEGIN
  RAISE NOTICE 'This will delete ALL organization data. Are you sure?';
  RAISE NOTICE 'Uncomment the DELETE statements below to proceed.';
  RAISE NOTICE '====================================';
  
  -- Uncomment these lines to actually delete data:
  -- DELETE FROM team_members WHERE user_id IN (SELECT id FROM users WHERE email LIKE '%@superrelatorios.com');
  -- DELETE FROM department_members WHERE user_id IN (SELECT id FROM users WHERE email LIKE '%@superrelatorios.com');
  -- DELETE FROM user_roles WHERE user_id IN (SELECT id FROM users WHERE email LIKE '%@superrelatorios.com');
  -- DELETE FROM users WHERE email LIKE '%@superrelatoratorios.com';
  -- DELETE FROM teams WHERE organization_id IN (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo');
  -- DELETE FROM departments WHERE organization_id IN (SELECT id FROM organizations WHERE name = 'SuperRelatórios Demo');
  -- DELETE FROM organizations WHERE name = 'SuperRelatórios Demo';
  
  RAISE NOTICE 'All test data cleaned up successfully!';
END $$;
```

### 🛠️ Scripts PowerShell

#### 1. Script de Execução
```powershell
# EXECUTE_HIERARCHY.ps1
# PowerShell script para executar scripts SQL

param(
    [Parameter(Mandatory=$false)]
    [string]$Action = 'create',
    
    [Parameter(Mandatory=$false)]
    [string]$Environment = 'development',
    
    [Parameter(Mandatory=$false)]
    [string]$Database = 'superrelatorios',
    
    [Parameter(Mandatory=$false)]
    [string]$Host = 'localhost',
    
    [Parameter(Mandatory=$false)]
    [string]$Port = '5432',
    
    [Parameter(Mandatory=$false)]
    [string]$Username = 'postgres',
    
    [Parameter(Mandatory=$false)]
    [string]$Password = 'password'
)

# Configuration
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$sqlPath = Join-Path $scriptDir "sql"
$psqlPath = $null

# Function to find PostgreSQL
function Find-PostgreSQL {
    Write-Host "Searching for PostgreSQL..."
    
    # Common PostgreSQL installation paths
    $searchPaths = @(
        "C:\Program Files\PostgreSQL*\bin\psql.exe",
        "C:\Program Files\PostgreSQL*\bin\psql.exe",
        "C:\Program Files\PostgreSQL*\bin\psql.exe",
        "C:\Program Files\PostgreSQL*\bin\psql.exe"
    )
    
    foreach ($path in $searchPaths) {
        if (Test-Path $path) {
            $psqlPath = $path
            Write-Host "Found PostgreSQL at: $psqlPath"
            return
        }
    }
    
    throw "PostgreSQL not found! Please install PostgreSQL first."
}

# Function to execute SQL script
function Invoke-SQLScript {
    param(
        [Parameter(Mandatory=$true)]
        [string]$ScriptFile,
        
        [Parameter(Mandatory=$false)]
        [string]$Action = 'execute'
    )
    
    if (-not (Test-Path $ScriptFile)) {
        throw "SQL script not found: $ScriptFile"
    }
    
    Write-Host "Executing SQL script: $ScriptFile"
    Write-Host "Action: $Action"
    Write-Host "Database: $Database"
    Write-Host "Host: $Host"
    Write-Host "Port: $Port"
    Write-Host "Username: $Username"
    Write-Host "===================================="
    
    try {
        $env:PGPASSWORD = $Password
        $env:PGDATABASE = $Database
        
        $result = & $psqlPath -h $Host -p $Port -U $Username -d $Database -f $ScriptFile
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Script executed successfully!"
            Write-Host "===================================="
        } else {
            Write-Host "❌ Script execution failed!"
            Write-Host "Exit code: $LASTEXITCODE"
            Write-Host "===================================="
            exit $LASTEXITCODE
        }
    }
    catch {
        Write-Host "❌ Error executing SQL script: $_"
        Write-Host "===================================="
        exit 1
    }
}

# Main execution
try {
    # Find PostgreSQL
    Find-PostgreSQL
    
    # Determine script file
    switch ($Action) {
        'create' {
            $scriptFile = Join-Path $sqlPath "CREATE_ORGANIZATION_HIERARCHY.sql"
        }
        'cleanup' {
            $scriptFile = Join-Path $sqlPath "CLEANUP_HIERARCHY.sql"
        }
        default {
            throw "Unknown action: $Action. Use 'create' or 'cleanup'."
        }
    }
    
    # Execute script
    Invoke-SQLScript -ScriptFile $scriptFile -Action $Action
    
    Write-Host "✅ Hierarchy execution completed!"
}
catch {
    Write-Host "❌ Error: $_"
    exit 1
}
```

## Troubleshooting

### 🔧️ Common Issues

#### 1. PostgreSQL Connection Issues
```powershell
# Troubleshooting PostgreSQL connection
function Test-PostgreSQLConnection {
    try {
        $env:PGPASSWORD = $Password
        $result = & $psqlPath -h $Host -p $Port -U $Username -d $Database -c "SELECT 1"
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ PostgreSQL connection successful!"
            return $true
        } else {
            Write-Host "❌ PostgreSQL connection failed!"
            return $false
        }
    }
    catch {
        Write-Host "❌ Error connecting to PostgreSQL: $_"
        return $false
    }
}

# Test connection
if (-not (Test-PostgreSQLConnection)) {
    Write-Host "Please check:"
    Write-Host "1. PostgreSQL is installed and running"
    Write-Host "2. Connection parameters are correct"
    Write-Host "3. Database exists"
    Write-Host "4. User has necessary permissions"
}
```

#### 2. Permission Issues
```sql
-- Check PostgreSQL permissions
SELECT 
    rolname,
    rolcreater,
    rolcreated,
    rolconnlimit,
    rolpassword
FROM pg_roles 
WHERE rolname = $1;

-- Check database permissions
SELECT 
    datname,
    datdba,
    datacl,
    datistemplate,
    datallowconn
FROM pg_database 
WHERE datname = $1;

-- Check table permissions
SELECT 
    schemaname,
    tablename,
    tableowner,
    hasinsert,
    hasupdate,
    hasdelete,
    hasreferences
FROM information_schema.tables 
WHERE schemaname = 'public';
```

#### 3. Data Validation
```sql
-- Validate hierarchy structure
SELECT 
    'Organizations' as table_name,
    COUNT(*) as count
FROM organizations
UNION ALL
SELECT 
    'Departments' as table_name,
    COUNT(*) as count
FROM departments
UNION ALL
SELECT 
    'Teams' as table_name,
    COUNT(*) as count
FROM teams
UNION ALL
SELECT 
    'Users' as table_name,
    COUNT(*) as count
FROM users
GROUP BY table_name
ORDER BY table_name;

-- Validate relationships
SELECT 
    'Department Members' as relationship,
    COUNT(*) as count
FROM department_members
GROUP BY relationship

UNION ALL

SELECT 
    'Team Members' as relationship,
    COUNT(*) as count
FROM team_members
GROUP BY relationship;
```

## Considerações Importantes

### 🔄 Evolução da Hierarquia

#### Roadmap de Expansão
1. **Phase 1** - Estrutura básica (implementada)
2. **Phase 2** - Multi-tenancy
3. **Phase 3** - Advanced permissions
4. **Phase 4** - Workflow automation
5. **Phase 5** - AI-powered insights

### 🌍 Escalabilidade

#### Multi-tenant Considerations
```typescript
interface MultiTenantConfig {
  isolation: 'database' | 'schema' | 'row_level';
  sharing: 'data' | 'infrastructure' | 'none';
  customization: 'limited' | 'extensive' | 'full';
  migration: 'manual' | 'automated' | 'seamless';
}
```

### 🔒 Compliance e Segurança

#### GDPR Compliance
```typescript
interface GDPRCompliance {
  dataProtection: {
    encryption: 'at-rest' | 'in-transit' | 'at-rest-and-in-transit';
    anonymization: 'pseudonymization' | 'anonymization';
    retention: '30d' | '90d' | '1y' | '7y';
    portability: 'csv' | 'json' | 'sql';
  };
  
  userRights: {
    access: 'right_to_access';
    rectification: 'right_to_rectification';
    erasure: 'right_to_be_forgotten';
    portability: 'right_to_data_portability';
    objection: 'right_to_object';
  };
  
  accountability: {
    consent: 'explicit' | 'implicit' | 'withdrawn';
    records: 'processing_activities' | 'consent_records';
    dpo: 'appointed' | 'not_applicable';
    breach: 'notification' | '72_hours';
  };
}
```

---

## Recursos Relacionados

### 📚 Documentação Complementar
- **[Deployment Guide](./01-deployment-guide.md)** - Processos de deploy
- **[Performance Monitoring](./02-performance-monitoring.md)** - Monitoramento avançado
- **[API Reference](../04-api/01-api-reference.md)** - Documentação de APIs
- **[User Guide](../05-user-guides/02-complete-user-guide.md)** - Guia do usuário

### 🔗 Scripts e Recursos
- **CREATE_ORGANIZATION_HIERARCHY.sql** - Script de criação
- **CLEANUP_HIERARCHY.sql** - Script de limpeza
- **EXECUTE_HIERARCHY.ps1** - Script PowerShell de execução
- **TROUBLESHOOTING.md** - Guia de troubleshooting

---

*Última atualização: 22/03/2026*  
*Versão: 2.0*  
*Status: Active*  
*Maintainer: Operations Team SuperRelatórios*
