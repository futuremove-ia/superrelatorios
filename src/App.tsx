import React, { Suspense, lazy, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { I18nRouter } from "@/components/I18nRouter";
import PageLoader from "@/components/layout/PageLoader";
import { ErrorBoundary } from "@/components/error/ErrorBoundary";
import LocaleGuard from "@/components/navigation/LocaleGuard";
import {
  useAutomaticMemory,
  recordDevelopmentDecision,
} from "@/lib/memory/automaticMemory";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const Dashboard = lazy(() => import("./pages/app/ControlPanel"));
const ReportsList = lazy(() => import("./pages/app/ReportsList"));
const ReportBuilder = lazy(() => import("./pages/app/ReportBuilder"));
const ReportDetail = lazy(() => import("./pages/app/ReportDetail"));
const Folders = lazy(() => import("./pages/app/Folders"));
const FolderDetail = lazy(() => import("./pages/app/FolderDetail"));
const Profile = lazy(() => import("./pages/app/Profile"));
const Settings = lazy(() => import("./pages/app/Settings"));
const Priorities = lazy(() => import("./pages/app/Priorities"));
const ActionPlan = lazy(() => import("./pages/app/ActionPlan"));
const ConsolidatedDashboard = lazy(
  () => import("./pages/app/ConsolidatedDashboard"),
);
const MetricsDashboard = lazy(() => import("./pages/app/MetricsDashboard"));
const OrganizationManager = lazy(
  () => import("./pages/app/OrganizationManager"),
);
const TemplateManager = lazy(() => import("./pages/app/TemplateManager"));
const DecisionPanel = lazy(() => import("./pages/app/DecisionPanel"));
const MetricsConfig = lazy(() => import("./pages/app/MetricsConfig"));
const AdvancedAnalytics = lazy(() => import("./pages/app/Analytics"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const AuthCallback = lazy(() => import("./pages/auth/AuthCallback"));
const AppLayout = lazy(() => import("./components/AppLayout"));
const DesignSystem = lazy(() => import("./pages/design-system"));
const Flows = lazy(() => import("./pages/Flows"));
const Radar = lazy(() => import("./pages/app/Radar"));
const DocumentUploader = lazy(() => import("./pages/app/DocumentUploader"));
const Metrics = lazy(() => import("./pages/app/Metrics"));
const AIAnalyst = lazy(() => import("./pages/app/AIAnalyst"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 2,
    },
  },
});
// RouteTracker for SEO & Analytics
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const dataLayer = (window as Window & { dataLayer?: object[] }).dataLayer;
    if (dataLayer) {
      dataLayer.push({
        event: "virtual_page_view",
        pageUrl: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Componente para proteger rotas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) return <PageLoader />;
  if (!session) {
    // Preserve the redirect URL for post-login navigation
    const redirectPath = location.pathname + location.search;
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(redirectPath)}`}
        replace
      />
    );
  }

  return <>{children}</>;
};

// Memory Tracker - Automatic session tracking
const MemoryTracker = () => {
  useAutomaticMemory();
  return null;
};

const App = () => (
  <ErrorBoundary>
    <MemoryTracker />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <I18nRouter>
              <RouteTracker />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Root and Auth Routes */}
                  <Route path="/" element={<Navigate to="/pt-BR" replace />} />
                  <Route path="/auth/callback" element={<AuthCallback />} />

                  {/* Public Landing & Login Routes */}
                  <Route path="/pt-BR" element={<Index />} />
                  <Route path="/en-US" element={<Index />} />
                  <Route path="/es-ES" element={<Index />} />
                  <Route path="/pt-BR/login" element={<Login />} />
                  <Route path="/en-US/login" element={<Login />} />
                  <Route path="/es-ES/login" element={<Login />} />
                  <Route path="/login" element={<Login />} />

                  {/* Design System - Public */}
                  <Route path="/design-system/*" element={<DesignSystem />} />
                  <Route
                    path="/pt-BR/design-system/*"
                    element={<DesignSystem />}
                  />
                  <Route
                    path="/en-US/design-system/*"
                    element={<DesignSystem />}
                  />
                  <Route
                    path="/es-ES/design-system/*"
                    element={<DesignSystem />}
                  />

                  {/* Flows - Public */}
                  <Route path="/flows" element={<Flows />} />
                  <Route path="/pt-BR/flows" element={<Flows />} />
                  <Route path="/en-US/flows" element={<Flows />} />
                  <Route path="/es-ES/flows" element={<Flows />} />

                  <Route
                    path="/:locale/app"
                    element={
                      <ProtectedRoute>
                        <LocaleGuard>
                          <AppLayout />
                        </LocaleGuard>
                      </ProtectedRoute>
                    }
                  >
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
                    <Route path="radar" element={<Radar />} />
                    <Route path="documentos" element={<DocumentUploader />} />
                    <Route path="metricas" element={<Metrics />} />
                    <Route path="painel-decisao" element={<DecisionPanel />} />
                    <Route path="panel-decision" element={<DecisionPanel />} />
                    <Route
                      path="consolidated"
                      element={<ConsolidatedDashboard />}
                    />
                    <Route
                      path="organization"
                      element={<OrganizationManager />}
                    />
                    <Route path="templates" element={<TemplateManager />} />
                    <Route path="action-plan" element={<ActionPlan />} />
                    <Route path="prioridades" element={<Priorities />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="ai-analyst" element={<AIAnalyst />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </I18nRouter>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

console.log("SuperRelatórios v1.0.0-alpha-hotfix-404-stable-v1");

export default App;
