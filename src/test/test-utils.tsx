import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

// Create a test query client
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

// Test wrapper with all providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

// Custom render function
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from testing-library
export * from "@testing-library/react";
export { customRender as render };

// Mock i18n for tests
i18n.init({
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "pt-BR": {
      translation: {
        common: {
          save: "Salvar",
          cancel: "Cancelar",
          edit: "Editar",
          delete: "Excluir",
        },
        auth: {
          login_title: "Entrar na sua conta",
          submit_login: "Entrar",
        },
        action_plan: {
          title: "Plano de Ação",
          subtitle: "Acompanhe e execute suas ações",
          empty: {
            title: "Nenhuma ação encontrada",
            description:
              "Execute diagnósticos para gerar ações automaticamente",
            cta: "Novo Diagnóstico",
          },
          completed_label: "concluídas",
          high_impact_badge: "Alto Impacto",
          progress_label: "Progresso",
          impact_card: {
            title: "Impacto",
            desc: "Acompanhe seu progresso",
            roi: "ROI",
            roi_value: "R$ 15.000",
            time_saved: "Tempo Economizado",
            time_saved_value: "12h",
            time_saved_unit: "mês",
            cta_evolution: "Ver Evolução",
          },
          next_target: {
            title: "Próxima Meta",
            desc: "Complete ações para desbloquear novas metas",
            waiting: "Aguardando...",
          },
          toast: {
            completed_title: "Ação concluída!",
            completed_desc: "Parabéns pelo progresso",
            cta_validate: "Validar",
          },
          active_cycle: "Ciclo Ativo",
          view_impact: "Ver Impacto",
          new_diagnostic: "Novo Diagnóstico",
          metric_label: "Métrica",
          metric_value: "NPS",
          deadline_label: "Prazo",
          deadline_value: "15/04/2026",
          add_manual: "Adicionar Manual",
        },
        reports: {
          title: "Relatórios",
          subtitle: "Gerencie seus relatórios",
          filters: {
            all: "Todos",
            draft: "Rascunho",
            completed: "Concluído",
            shared: "Compartilhado",
            status: "Status",
            category: "Categoria",
            search_placeholder: "Pesquisar...",
          },
          counter: "{{count}} relatórios",
          empty: {
            title: "Nenhum relatório encontrado",
            filter_desc: "Tente ajustar seus filtros",
            brand_new_desc: "Comece criando seu primeiro relatório",
            cta: "Criar Relatório",
          },
          actions: {
            view: "Visualizar",
            share: "Compartilhar",
            download: "Baixar",
            open: "Abrir",
          },
          view_grid: "Visualização em Grade",
          view_list: "Visualização em Lista",
          table_desc: "Tabela de relatórios",
        },
      },
    },
    "en-US": {
      translation: {
        common: {
          save: "Save",
          cancel: "Cancel",
          edit: "Edit",
          delete: "Delete",
        },
        auth: {
          login_title: "Sign in to your account",
          submit_login: "Sign in",
        },
        action_plan: {
          title: "Action Plan",
          subtitle: "Track and execute your actions",
          empty: {
            title: "No actions found",
            description: "Run diagnostics to automatically generate actions",
            cta: "New Diagnostic",
          },
          completed_label: "completed",
          high_impact_badge: "High Impact",
          progress_label: "Progress",
          impact_card: {
            title: "Impact",
            desc: "Track your progress",
            roi: "ROI",
            roi_value: "$1,500",
            time_saved: "Time Saved",
            time_saved_value: "12h",
            time_saved_unit: "month",
            cta_evolution: "See Evolution",
          },
          next_target: {
            title: "Next Target",
            desc: "Complete actions to unlock new targets",
            waiting: "Waiting...",
          },
          toast: {
            completed_title: "Action completed!",
            completed_desc: "Congratulations on your progress",
            cta_validate: "Validate",
          },
          active_cycle: "Active Cycle",
          view_impact: "View Impact",
          new_diagnostic: "New Diagnostic",
          metric_label: "Metric",
          metric_value: "NPS",
          deadline_label: "Deadline",
          deadline_value: "04/15/2026",
          add_manual: "Add Manual",
        },
        reports: {
          title: "Reports",
          subtitle: "Manage your reports",
          filters: {
            all: "All",
            draft: "Draft",
            completed: "Completed",
            shared: "Shared",
            status: "Status",
            category: "Category",
            search_placeholder: "Search...",
          },
          counter: "{{count}} reports",
          empty: {
            title: "No reports found",
            filter_desc: "Try adjusting your filters",
            brand_new_desc: "Start creating your first report",
            cta: "Create Report",
          },
          actions: {
            view: "View",
            share: "Share",
            download: "Download",
            open: "Open",
          },
          view_grid: "Grid View",
          view_list: "List View",
          table_desc: "Reports table",
        },
      },
    },
  },
});
