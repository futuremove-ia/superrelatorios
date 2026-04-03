import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { OnboardingWizard } from "../OnboardingWizard";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("@/hooks/useI18nRouter", () => ({
  useI18nRouter: () => ({
    currentLanguage: "pt-BR",
  }),
  I18nRouterProvider: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock("@/hooks/useCurrentOrganization", () => ({
  useCurrentOrganization: () => ({
    organization: null,
  }),
}));

describe("OnboardingWizard", () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockClear();
  });

  it("should render 4 door options on initial step", () => {
    render(<OnboardingWizard />);

    expect(screen.getByText("Diagnóstico Instantâneo")).toBeInTheDocument();
    expect(screen.getByText("Onboarding Guiado")).toBeInTheDocument();
    expect(screen.getByText("Conexão Directa")).toBeInTheDocument();
    expect(
      screen.getByText("Explorar com Dados de Exemplo"),
    ).toBeInTheDocument();
  });

  it("should show correct descriptions for each door", () => {
    render(<OnboardingWizard />);

    expect(
      screen.getByText("Upload rápido → Impacto em 30 segundos"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Caminho estratégico com contexto e documentos"),
    ).toBeInTheDocument();
    expect(screen.getByText("Google Drive ou OneDrive")).toBeInTheDocument();
    expect(
      screen.getByText("Testar a plataforma sem carregar dados"),
    ).toBeInTheDocument();
  });

  it("should show company name field when entering step 1", async () => {
    render(<OnboardingWizard />);

    fireEvent.click(screen.getByText("Diagnóstico Instantâneo"));

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Ex: Minha Empresa Ltda"),
      ).toBeInTheDocument();
    });
  });

  it("should show company size select in step 1", async () => {
    render(<OnboardingWizard />);

    fireEvent.click(screen.getByText("Onboarding Guiado"));

    await waitFor(() => {
      expect(screen.getByText("Selecione o porte")).toBeInTheDocument();
    });
  });

  it("should show Data step title when selecting cloud flow", async () => {
    render(<OnboardingWizard />);

    fireEvent.click(screen.getByText("Conexão Directa"));

    await waitFor(() => {
      expect(screen.getByText("Dados da Empresa")).toBeInTheDocument();
    });
  });

  it("should show Data step when selecting demo flow", async () => {
    render(<OnboardingWizard />);

    fireEvent.click(screen.getByText("Explorar com Dados de Exemplo"));

    await waitFor(() => {
      expect(screen.getByText("Dados da Empresa")).toBeInTheDocument();
    });
  });

  it("should persist data in localStorage when entering company name", async () => {
    render(<OnboardingWizard />);

    fireEvent.click(screen.getByText("Diagnóstico Instantâneo"));

    await waitFor(() => {
      const nameInput = screen.getByPlaceholderText("Ex: Minha Empresa Ltda");
      fireEvent.change(nameInput, { target: { value: "My Company" } });
    });

    expect(localStorage.getItem("onboarding_wizard_data")).toContain(
      "My Company",
    );
  });
});
