// Authentication and Authorization Types
// SuperRelatórios - Roles & Permissions System v2.0
// Following Clean Architecture principles

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  ANALYST = 'analyst',
  VIEWER = 'viewer'
}

export enum PermissionAction {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete'
}

export interface Permission {
  resource: string;
  action: PermissionAction;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  session: {
    token: string;
    expiresAt: number;
    userId: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export interface ProtectedComponentProps {
  permission: Permission;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
