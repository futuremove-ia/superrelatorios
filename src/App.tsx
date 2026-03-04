import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/app/Dashboard";
import ReportsList from "./pages/app/ReportsList";
import ReportBuilder from "./pages/app/ReportBuilder";
import ReportDetail from "./pages/app/ReportDetail";
import Folders from "./pages/app/Folders";
import Settings from "./pages/app/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          
          {/* App Routes */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="relatorios" element={<ReportsList />} />
            <Route path="relatorios/:id" element={<ReportDetail />} />
            <Route path="pastas" element={<Folders />} />
            <Route path="configuracoes" element={<Settings />} />
          </Route>
          
          {/* Standalone route - ReportBuilder has its own header */}
          <Route path="/app/novo-relatorio" element={<ReportBuilder />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
