---
title: Integração com Google Drive e OneDrive por Tenant
version: 1.0.0
updated: 2026-04-05
status: active
---

# ADR-005: Cloud Storage Integration por Tenant (Google Drive + OneDrive)

## Contexto

O SuperRelatórios precisa integrar com Google Drive e OneDrive para permitir que empresas importem dados de planilhas e documentos diretamente de seus repositórios corporativos.

### Requisitos

1. **Conectar Google Drive** - Listar arquivos, ler conteúdo de planilhas ( Sheets)
2. **Conectar OneDrive** - Listar arquivos, ler conteúdo de planilhas (Excel)
3. **Modelo de autenticação**: Por empresa/tenant (não por usuário)
4. **Sincronização**:手动 ou automática
5. **Compliance**: LGPD/GDPR - dados devem permanecer isolados por tenant

## Decisão

### Arquitetura Selecionada: OAuth 2.0 Service Account + Adapter Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                            │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              CloudStorageService (Facade)                   ││
│  │  - connectDrive(orgId, authCode)                            ││
│  │  - connectOneDrive(orgId, authCode)                         ││
│  │  - listFiles(orgId, provider, folderId?)                   ││
│  │  - readSpreadsheet(orgId, provider, fileId)                ││
│  │  - syncFiles(orgId, provider)                               ││
│  └─────────────────────────────────────────────────────────────┘│
└────────────────────────────┬────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼────────┐  ┌───────▼───────┐  ┌────────▼────────┐
│GoogleDriveAPI  │  │ OneDriveAPI  │  │  Supabase       │
│   Adapter     │  │   Adapter    │  │  (Persistence)  │
└────────┬───────┘  └───────┬───────┘  └────────┬────────┘
         │                  │                    │
         └──────────────────┴────────────────────┘
                    INFRASTRUCTURE
```

### Componentes

| Componente                | Responsabilidade                              |
| ------------------------- | --------------------------------------------- |
| `CloudStorageService`     | Fachada que orquestra Google Drive e OneDrive |
| `GoogleDriveAdapter`      | Adapter específico para Google Drive API      |
| `OneDriveAdapter`         | Adapter específico para Microsoft Graph API   |
| `OrganizationCloudConfig` | Entidade de domínio para configuração         |
| `CloudFileMapper`         | Mapeia arquivos do cloud para formato interno |

### Dados no Banco

```sql
-- Google Drive
CREATE TABLE organization_drive_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  credentials_encrypted TEXT NOT NULL,
  root_folder_id TEXT,
  sync_enabled BOOLEAN DEFAULT false,
  last_sync_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- OneDrive
CREATE TABLE organization_onedrive_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  credentials_encrypted TEXT NOT NULL,
  root_folder_id TEXT,
  sync_enabled BOOLEAN DEFAULT false,
  last_sync_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Arquivos importados (cache)
CREATE TABLE cloud_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  provider VARCHAR(20) NOT NULL, -- 'google_drive' | 'onedrive'
  external_file_id TEXT NOT NULL,
  file_name TEXT NOT NULL,
  mime_type TEXT,
  parent_folder_id TEXT,
  file_size BIGINT,
  content_text TEXT, -- Para planilhas/cache
  imported_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, provider, external_file_id)
);
```

### Fluxo de Autenticação OAuth

```
1. Empresa inicia conexão no UI
   ↓
2. Backend gera OAuth URL com state=organization_id
   ↓
3. Usuário redirecionado para Google/Microsoft
   ↓
4. Callback com auth code → Backend troca por tokens
   ↓
5. Tokens encriptados e armazenados (encrypted_at_rest)
   ↓
6. Credenciais adicionadas à tabela organization_drive_config
```

### Segurança

1. **Criptografia**: Tokens armazenados com AES-256 (chave via env var)
2. **Isolamento**: Toda query inclui `organization_id` WHERE clause
3. **Audit**: Log de todas as operações de sync
4. **Timeout**: Tokens expirados são renovados automaticamente

### Bibliotecas

| Biblioteca                          | Uso                      |
| ----------------------------------- | ------------------------ |
| `googleapis`                        | Google Drive API         |
| `@microsoft/microsoft-graph-client` | Microsoft Graph API      |
| `xlsx`                              | Parse de planilhas Excel |

## Status

**Aprovado** — 2026-04-05

## Implementação

Ver plano: `docs/superpowers/plans/2026-04-05-cloud-storage-integration.md`
