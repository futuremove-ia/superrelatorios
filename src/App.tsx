import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import TagManager from 'react-gtm-module';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { RoleProvider } from "./contexts/RoleContext";
import { ProtectedComponent } from "./components/auth/ProtectedComponent";
import { PermissionAction } from "./types/auth";
import AppLayout from "./components/AppLayout";
import PageLoader from "./components/layout/PageLoader";
import { AppErrorBoundary } from "./components/layout/AppErrorBoundary";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/app/Dashboard"));
const ReportsList = lazy(() => import("./pages/app/ReportsList"));
const ReportBuilder = lazy(() => import("./pages/app/ReportBuilder"));
const ReportDetail = lazy(() => import("./pages/app/ReportDetail"));
const Folders = lazy(() => import("./pages/app/Folders"));
const FolderDetail = lazy(() => import("./pages/app/FolderDetail"));
const Profile = lazy(() => import("./pages/app/Profile"));
const Settings = lazy(() => import("./pages/app/Settings"));
const Priorities = lazy(() => import("./pages/app/Priorities"));
const ActionPlan = lazy(() => import("./pages/app/ActionPlan"));
const DataHub = lazy(() => import("./pages/app/DataHub"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const AuthCallback = lazy(() => import("./pages/auth/AuthCallback"));



const queryClient = new QueryClient();

// RouteTracker for SEO & Analytics
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'virtual_page_view',
        pageUrl: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
};

// Componente para proteger rotas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();
  
  if (loading) return <PageLoader />;
  if (!session) return <Navigate to="/login" replace />;
  
  return <>{children}</>;
};

const App = () => (
  <AppErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RoleProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <RouteTracker />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Rota crítica do OAuth - Sem interferência */}
                  <Route path="/auth/callback" element={<AuthCallback />} />
                  
                  {/* Public Routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  
                  {/* App Protected Routes using AppLayout */}
                  <Route path="/app" element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={
                      <ProtectedComponent permission={{ resource: 'dashboard', action: PermissionAction.READ }}>
                        <Dashboard />
                      </ProtectedComponent>
                    } />
                    <Route path="prioridades" element={
                      <ProtectedComponent permission={{ resource: 'dashboard', action: PermissionAction.READ }}>
                        <Priorities />
                      </ProtectedComponent>
                    } />
                    <Route path="plano-de-acao" element={
                      <ProtectedComponent permission={{ resource: 'dashboard', action: PermissionAction.READ }}>
                        <ActionPlan />
                      </ProtectedComponent>
                    } />
                    <Route path="relatorios" element={
                      <ProtectedComponent permission={{ resource: 'reports', action: PermissionAction.READ }}>
                        <ReportsList />
                      </ProtectedComponent>
                    } />
                    <Route path="relatorios/:id" element={
                      <ProtectedComponent permission={{ resource: 'reports', action: PermissionAction.READ }}>
                        <ReportDetail />
                      </ProtectedComponent>
                    } />
                    <Route path="dados" element={
                      <ProtectedComponent permission={{ resource: 'reports', action: PermissionAction.READ }}>
                        <DataHub />
                      </ProtectedComponent>
                    } />
                    <Route path="pastas" element={
                      <ProtectedComponent permission={{ resource: 'reports', action: PermissionAction.READ }}>
                        <Folders />
                      </ProtectedComponent>
                    } />
                    <Route path="pastas/:id" element={
                      <ProtectedComponent permission={{ resource: 'reports', action: PermissionAction.READ }}>
                        <FolderDetail />
                      </ProtectedComponent>
                    } />
                    <Route path="perfil" element={<Profile />} />
                    <Route path="configuracoes" element={
                      <ProtectedComponent permission={{ resource: 'settings', action: PermissionAction.MANAGE }}>
                        <Settings />
                      </ProtectedComponent>
                    } />
                  </Route>
                  
                  {/* Builder is standalone but protected */}
                  <Route 
                    path="/app/novo-relatorio" 
                    element={
                      <ProtectedRoute>
                        <ProtectedComponent permission={{ resource: 'reports', action: PermissionAction.CREATE }}>
                          <ReportBuilder />
                        </ProtectedComponent>
                      </ProtectedRoute>
                    } 
                  />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </RoleProvider>
      </AuthProvider>
    </QueryClientProvider>
  </AppErrorBoundary>
);

export default App;
