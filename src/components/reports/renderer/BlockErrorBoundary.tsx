import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  blockTitle?: string;
}

interface State {
  hasError: boolean;
}

/**
 * BlockErrorBoundary isola falhas de renderização em blocos específicos.
 * Se um gráfico ou cálculo falhar, apenas aquele bloco mostra erro,
 * preservando a integridade do restante do relatório.
 */
export class BlockErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in Report Block:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Card className="my-4 border-destructive/20 bg-destructive/5 p-6 text-center">
          <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
          <h3 className="font-bold text-destructive mb-1">Erro no Bloco</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Não foi possível carregar o bloco "{this.props.blockTitle || 'Dados'}".
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => this.setState({ hasError: false })}
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Tentar Novamente
          </Button>
        </Card>
      );
    }

    return this.props.children;
  }
}
