import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import TagManager from 'react-gtm-module';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AppLayout from "./components/AppLayout";
import PageLoader from "./components/layout/PageLoader";
import { AppErrorBoundary } from "./components/layout/AppErrorBoundary";
import DemoBanner from "./components/DemoBanner";
import I18nRouter from "./components/I18nRouter";
import { I18nSEO } from "./components/SEO/I18nSEO";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/app/Dashboard-Atualizado"));
const ReportsList = lazy(() => import("./pages/app/ReportsList"));
const ReportBuilder = lazy(() => import("./pages/app/ReportBuilder"));
const ReportDetail = lazy(() => import("./pages/app/ReportDetail"));
const Folders = lazy(() => import("./pages/app/Folders"));
const FolderDetail = lazy(() => import("./pages/app/FolderDetail"));
const Profile = lazy(() => import("./pages/app/Profile"));
const Settings = lazy(() => import("./pages/app/Settings"));
const Priorities = lazy(() => import("./pages/app/Priorities"));
const ActionPlan = lazy(() => import("./pages/app/ActionPlan"));
const ConsolidatedDashboard = lazy(() => import("./pages/app/ConsolidatedDashboard-Atualizado"));
const MetricsDashboard = lazy(() => import("./pages/app/MetricsDashboard-Otimizado"));
const OrganizationManager = lazy(() => import("./pages/app/OrganizationManager"));
const TemplateManager = lazy(() => import("./pages/app/TemplateManager"));
const DecisionPanel = lazy(() => import("./pages/app/DecisionPanel"));
const MetricsConfig = lazy(() => import("./pages/app/MetricsConfig"));
const AdvancedAnalytics = lazy(() => import("./pages/app/AdvancedAnalytics"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const AuthCallback = lazy(() => import("./pages/auth/AuthCallback"));



const queryClient = new QueryClient();

// RouteTracker for SEO & Analytics
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
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
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <I18nRouter>
              <RouteTracker />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Rota crítica do OAuth - Sem interferência */}
                  <Route path="/auth/callback" element={<AuthCallback />} />
                  
                  {/* Public Routes */}
                  <Route path="/pt-BR" element={<Index />} />
                  <Route path="/en-US" element={<Index />} />
                  <Route path="/es-ES" element={<Index />} />
                  <Route path="/pt-BR/login" element={<Login />} />
                  <Route path="/en-US/login" element={<Login />} />
                  <Route path="/es-ES/login" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  
                  {/* App Protected Routes using AppLayout */}
                  <Route path="/pt-BR/app" element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={<Dashboard />} />
                    <Route path="reports" element={<ReportsList />} />
                    <Route path="reports/new" element={<ReportBuilder />} />
                    <Route path="novo-relatorio" element={<ReportBuilder />} />
                    <Route path="new-report" element={<ReportBuilder />} />
                    <Route path="reports/:id" element={<ReportDetail />} />
                    <Route path="folders" element={<Folders />} />
                    <Route path="folders/:id" element={<FolderDetail />} />
                    <Route path="metrics" element={<MetricsDashboard />} />
                    <Route path="metrics/config" element={<MetricsConfig />} />
                    <Route path="analytics" element={<AdvancedAnalytics />} />
                    <Route path="decision-panel" element={<DecisionPanel />} />
                    <Route path="painel-decisao" element={<DecisionPanel />} />
                    <Route path="panel-decision" element={<DecisionPanel />} />
                    <Route path="consolidated" element={<ConsolidatedDashboard />} />
                    <Route path="organization" element={<OrganizationManager />} />
                    <Route path="templates" element={<TemplateManager />} />
                    <Route path="action-plan" element={<ActionPlan />} />
                    <Route path="prioridades" element={<Priorities />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="/en-US/app" element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={<Dashboard />} />
                    <Route path="reports" element={<ReportsList />} />
                    <Route path="reports/new" element={<ReportBuilder />} />
                    <Route path="novo-relatorio" element={<ReportBuilder />} />
                    <Route path="new-report" element={<ReportBuilder />} />
                    <Route path="reports/:id" element={<ReportDetail />} />
                    <Route path="folders" element={<Folders />} />
                    <Route path="folders/:id" element={<FolderDetail />} />
                    <Route path="metrics" element={<MetricsDashboard />} />
                    <Route path="metrics/config" element={<MetricsConfig />} />
                    <Route path="analytics" element={<AdvancedAnalytics />} />
                    <Route path="decision-panel" element={<DecisionPanel />} />
                    <Route path="painel-decisao" element={<DecisionPanel />} />
                    <Route path="panel-decision" element={<DecisionPanel />} />
                    <Route path="consolidated" element={<ConsolidatedDashboard />} />
                    <Route path="organization" element={<OrganizationManager />} />
                    <Route path="templates" element={<TemplateManager />} />
                    <Route path="action-plan" element={<ActionPlan />} />
                    <Route path="prioridades" element={<Priorities />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="/es-ES/app" element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }>
                    <Route index element={<Dashboard />} />
                    <Route path="reports" element={<ReportsList />} />
                    <Route path="reports/new" element={<ReportBuilder />} />
                    <Route path="novo-relatorio" element={<ReportBuilder />} />
                    <Route path="new-report" element={<ReportBuilder />} />
                    <Route path="reports/:id" element={<ReportDetail />} />
                    <Route path="folders" element={<Folders />} />
                    <Route path="folders/:id" element={<FolderDetail />} />
                    <Route path="metrics" element={<MetricsDashboard />} />
                    <Route path="metrics/config" element={<MetricsConfig />} />
                    <Route path="analytics" element={<AdvancedAnalytics />} />
                    <Route path="decision-panel" element={<DecisionPanel />} />
                    <Route path="painel-decisao" element={<DecisionPanel />} />
                    <Route path="panel-decision" element={<DecisionPanel />} />
                    <Route path="consolidated" element={<ConsolidatedDashboard />} />
                    <Route path="organization" element={<OrganizationManager />} />
                    <Route path="templates" element={<TemplateManager />} />
                    <Route path="action-plan" element={<ActionPlan />} />
                    <Route path="prioridades" element={<Priorities />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </I18nRouter>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </AppErrorBoundary>
);

export default App;
