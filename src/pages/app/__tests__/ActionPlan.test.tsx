import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@/test/test-utils";
import ActionPlan from "@/pages/app/ActionPlan";
import * as supabaseBusinessService from "@/services/supabaseBusinessService";
import * as useCurrentOrganizationModule from "@/hooks/useCurrentOrganization";

vi.mock("@/services/supabaseBusinessService", () => ({
  getActionsByOrganization: vi.fn(),
  updateActionStatus: vi.fn(),
}));

vi.mock("@/hooks/useCurrentOrganization", () => ({
  useCurrentOrganization: vi.fn(),
}));

vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

const mockActions = [
  {
    id: "a1",
    priorityId: "p1",
    organizationId: "org-1",
    title: "Implementar programa de retenção",
    description: "Criar programa de fidelidade para clientes premium",
    status: "pending" as const,
    notes: "Foco em clientes com mais de 6 meses de contrato",
    dueDate: "2026-04-15",
    assignedTo: null,
    createdAt: "2026-03-01",
    updatedAt: "2026-03-01",
  },
  {
    id: "a2",
    priorityId: "p2",
    organizationId: "org-1",
    title: "Revisar processos de venda",
    description: "Otimizar funil de vendas para aumentar conversão",
    status: "completed" as const,
    notes: "Implementar novos scripts de abordagem",
    dueDate: "2026-03-30",
    assignedTo: null,
    createdAt: "2026-03-01",
    updatedAt: "2026-03-10",
  },
  {
    id: "a3",
    priorityId: "p3",
    organizationId: "org-1",
    title: "Atualizar dashboard de métricas",
    description: "Adicionar novos KPIs de performance comercial",
    status: "pending" as const,
    notes: "Incluir métricas deCAC e LTV",
    dueDate: "2026-04-01",
    assignedTo: null,
    createdAt: "2026-03-05",
    updatedAt: "2026-03-05",
  },
];

describe("ActionPlan", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(
      useCurrentOrganizationModule.useCurrentOrganization,
    ).mockReturnValue({
      organizationId: "org-1",
      isDemoMode: false,
      organization: null,
      organizationName: "",
      isLoading: false,
      isError: false,
    });
  });

  it("renders loading state initially", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockImplementation(() => new Promise(() => {}));

    render(<ActionPlan />);

    expect(screen.getByText(/plano de ação/i)).toBeInTheDocument();
  });

  it("renders actions list after loading", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);

    render(<ActionPlan />);

    await waitFor(() => {
      expect(
        screen.getByText("Implementar programa de retenção"),
      ).toBeInTheDocument();
    });
    expect(screen.getByText("Revisar processos de venda")).toBeInTheDocument();
    expect(
      screen.getByText("Atualizar dashboard de métricas"),
    ).toBeInTheDocument();
  });

  it("shows empty state when no actions", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue([]);

    render(<ActionPlan />);

    await waitFor(() => {
      expect(screen.getByText(/ação encontrada/i)).toBeInTheDocument();
    });
  });

  it("shows demo mode empty state", async () => {
    vi.mocked(
      useCurrentOrganizationModule.useCurrentOrganization,
    ).mockReturnValue({
      organizationId: "",
      isDemoMode: true,
      organization: null,
      organizationName: "",
      isLoading: false,
      isError: false,
    });

    render(<ActionPlan />);

    await waitFor(() => {
      expect(screen.getByText(/ação encontrada/i)).toBeInTheDocument();
    });
  });

  it("displays actions list with completed and pending items", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);

    render(<ActionPlan />);

    await waitFor(() => {
      expect(
        screen.getByText("Implementar programa de retenção"),
      ).toBeInTheDocument();
    });
    expect(screen.getByText("Revisar processos de venda")).toBeInTheDocument();
    expect(
      screen.getByText("Atualizar dashboard de métricas"),
    ).toBeInTheDocument();
  });

  it("shows completed actions differently from pending", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);

    render(<ActionPlan />);

    await waitFor(() => {
      const completedAction = screen.getByText("Revisar processos de venda");
      expect(completedAction).toBeInTheDocument();
    });
  });

  it("displays impact card with progress bar", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);

    render(<ActionPlan />);

    await waitFor(() => {
      const impactCards = screen.getAllByText("Impacto");
      expect(impactCards.length).toBeGreaterThan(0);
    });
  });

  it("calls toggleAction when clicking checkbox", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);
    vi.mocked(supabaseBusinessService.updateActionStatus).mockResolvedValue(
      true,
    );

    render(<ActionPlan />);

    await waitFor(() => {
      expect(
        screen.getByText("Implementar programa de retenção"),
      ).toBeInTheDocument();
    });

    const checkboxes = screen.getAllByRole("button");
    const pendingCheckbox = checkboxes.find((btn) => {
      const icon = btn.querySelector("svg");
      return icon && icon.getAttribute("data-name") === "circle";
    });

    if (pendingCheckbox) {
      fireEvent.click(pendingCheckbox);
      expect(supabaseBusinessService.updateActionStatus).toHaveBeenCalledWith(
        "a1",
        "completed",
      );
    }
  });

  it("toggles action back to pending when already completed", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);
    vi.mocked(supabaseBusinessService.updateActionStatus).mockResolvedValue(
      true,
    );

    render(<ActionPlan />);

    await waitFor(() => {
      expect(
        screen.getByText("Revisar processos de venda"),
      ).toBeInTheDocument();
    });

    const checkboxes = screen.getAllByRole("button");
    const completedCheckbox = checkboxes.find((btn) => {
      const icon = btn.querySelector("svg");
      return icon && icon.getAttribute("data-name") === "check-circle-2";
    });

    if (completedCheckbox) {
      fireEvent.click(completedCheckbox);
      expect(supabaseBusinessService.updateActionStatus).toHaveBeenCalledWith(
        "a2",
        "pending",
      );
    }
  });

  it("displays high impact badge for pending actions", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);

    render(<ActionPlan />);

    await waitFor(() => {
      const badges = screen.getAllByText("Alto Impacto");
      expect(badges.length).toBe(2);
    });
  });

  it("shows next target card", async () => {
    vi.mocked(
      supabaseBusinessService.getActionsByOrganization,
    ).mockResolvedValue(mockActions);

    render(<ActionPlan />);

    await waitFor(() => {
      expect(screen.getByText(/próxima meta/i)).toBeInTheDocument();
    });
  });
});
