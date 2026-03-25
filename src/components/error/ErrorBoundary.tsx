import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Wrapper para usar hooks dentro do Error Boundary
const ErrorBoundaryFallback = ({
  error,
  resetError,
}: {
  error: Error | null;
  resetError: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <div className="bg-destructive/10 p-4 rounded-full mb-6">
        <AlertTriangle className="h-12 w-12 text-destructive" />
      </div>

      <h2 className="text-2xl font-bold mb-2 text-foreground">
        {t("error.title", { defaultValue: "Algo deu errado" })}
      </h2>

      <p className="text-muted-foreground mb-8 max-w-md">
        {t("error.description", {
          defaultValue:
            "Ocorreu um erro inesperado. Tente novamente ou volte ao início. Se continuar, fale com o suporte.",
        })}
      </p>

      {process.env.NODE_ENV === "development" && error && (
        <div className="bg-muted p-4 rounded-lg text-left w-full max-w-2xl overflow-auto mb-8 font-mono text-sm border">
          <p className="text-destructive font-bold mb-2">{error.toString()}</p>
          <pre className="text-muted-foreground">{error.stack}</pre>
        </div>
      )}

      <div className="flex gap-4">
        <Button onClick={resetError} size="lg">
          <RefreshCcw className="mr-2 h-4 w-4" />
          {t("error.try_again")}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => (window.location.href = "/")}
        >
          {t("error.go_home", { defaultValue: "Voltar ao início" })}
        </Button>
      </div>
    </div>
  );
};

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Atualiza o state para que a próxima renderização mostre a UI de fallback.
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      "Um erro não tratado foi capturado pelo Error Boundary:",
      error,
      errorInfo,
    );
    this.setState({ errorInfo });

    // Aqui você pode integrar com um serviço de relatórios de erros como Sentry ou LogRocket
    // Sentry.captureException(error, { extra: errorInfo });
  }

  public resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <ErrorBoundaryFallback
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}
