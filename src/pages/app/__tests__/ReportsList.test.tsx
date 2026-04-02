import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@/test/test-utils";
import ReportsList from "@/pages/app/ReportsList";
import * as supabaseReportsService from "@/services/supabaseReportsService";
import * as useCurrentOrganizationModule from "@/hooks/useCurrentOrganization";

vi.mock("@/services/supabaseReportsService", () => ({
  getReportsByOrganization: vi.fn(),
}));

vi.mock("@/hooks/useCurrentOrganization", () => ({
  useCurrentOrganization: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    Link: ({ children, to }: any) => <a href={to}>{children}</a>,
  };
});

const mockReports = [
  {
    id: "r1",
    title: "Relatório Executivo Q1",
    subtitle: undefined,
    category: "Executivo",
    createdAt: "2026-03-01",
    updatedAt: "2026-03-15",
    status: "completed" as const,
    description: "Análise trimestral",
    templateId: "executive-strategic",
    blocks: [],
    rawData: {},
  },
  {
    id: "r2",
    title: "Análise Comercial",
    subtitle: undefined,
    category: "Comercial",
    createdAt: "2026-02-28",
    updatedAt: "2026-03-01",
    status: "completed" as const,
    description: "Performance de vendas",
    templateId: "sales-monthly",
    blocks: [],
    rawData: {},
  },
  {
    id: "r3",
    title: "Relatório Financeiro",
    subtitle: undefined,
    category: "Financeiro",
    createdAt: "2026-03-20",
    updatedAt: "2026-03-20",
    status: "draft" as const,
    description: "Fluxo de caixa",
    templateId: "financial-monthly",
    blocks: [],
    rawData: {},
  },
];

describe("ReportsList", () => {
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

  it("renders reports list after loading", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      expect(screen.getByText("Relatório Executivo Q1")).toBeInTheDocument();
    });
    expect(screen.getByText("Análise Comercial")).toBeInTheDocument();
    expect(screen.getByText("Relatório Financeiro")).toBeInTheDocument();
  });

  it("shows empty state when no reports", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue([]);

    render(<ReportsList />);

    await waitFor(() => {
      expect(
        screen.getByText("Nenhum relatório encontrado"),
      ).toBeInTheDocument();
    });
  });

  it("filters reports by search term", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      expect(screen.getByText("Relatório Executivo Q1")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Pesquisar...");
    fireEvent.change(searchInput, { target: { value: "Financeiro" } });

    expect(screen.getByText("Relatório Financeiro")).toBeInTheDocument();
    expect(
      screen.queryByText("Relatório Executivo Q1"),
    ).not.toBeInTheDocument();
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

    render(<ReportsList />);

    await waitFor(() => {
      expect(
        screen.getByText("Nenhum relatório encontrado"),
      ).toBeInTheDocument();
    });
  });

  it("displays report cards with correct information", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      expect(screen.getByText("Relatório Executivo Q1")).toBeInTheDocument();
    });

    expect(screen.getByText("Análise trimestral")).toBeInTheDocument();
    expect(screen.getByText("Executivo")).toBeInTheDocument();
  });

  it("displays completed status badges", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      const completedBadges = screen.getAllByText("Concluído");
      expect(completedBadges.length).toBe(2);
    });
  });

  it("displays draft status badge", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      expect(screen.getByText("Rascunho")).toBeInTheDocument();
    });
  });

  it("has a create new report button", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      const links = screen.getAllByRole("link");
      const createLink = links.find(
        (link) => link.getAttribute("href") === "/app/novo-relatorio",
      );
      expect(createLink).toBeInTheDocument();
    });
  });

  it("has page title and subtitle", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Relatórios" }),
      ).toBeInTheDocument();
    });
    expect(screen.getByText("Gerencie seus relatórios")).toBeInTheDocument();
  });

  it("can navigate to report detail", async () => {
    vi.mocked(
      supabaseReportsService.getReportsByOrganization,
    ).mockResolvedValue(mockReports);

    render(<ReportsList />);

    await waitFor(() => {
      expect(screen.getByText("Relatório Executivo Q1")).toBeInTheDocument();
    });

    const openButtons = screen.getAllByText("Abrir");
    expect(openButtons.length).toBe(3);
    expect(openButtons[0].closest("a")).toHaveAttribute(
      "href",
      "/app/relatorios/r1",
    );
  });
});
