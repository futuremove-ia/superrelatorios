import { ArrowRight, FileText, Folder, Zap, LayoutTemplate, Globe, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface FlowItem {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
}

const flows: FlowItem[] = [
  {
    id: "report-builder",
    title: "1. Report Builder - Fluxo Completo",
    description: "Upload → Template → Blocos → Geração → Preview. Fluxo principal de criação de relatórios com IA.",
    path: "/app/novo-relatorio",
    icon: FileText,
    badge: "Principal",
    badgeVariant: "default",
  },
  {
    id: "quick-start-exec",
    title: "2. Quick Start - Template Executivo",
    description: "Landing → Login → ReportBuilder com template pré-selecionado (Executivo).",
    path: "/app/novo-relatorio?template=executivo",
    icon: Sparkles,
    badge: "Rápido",
    badgeVariant: "secondary",
  },
  {
    id: "quick-start-sales",
    title: "3. Quick Start - Template Vendas",
    description: "Landing → Login → ReportBuilder com template pré-selecionado (Vendas).",
    path: "/app/novo-relatorio?template=vendas",
    icon: Zap,
    badge: "Rápido",
    badgeVariant: "secondary",
  },
  {
    id: "folders",
    title: "4. Gestão de Pastas",
    description: "Listagem de pastas, navegação organizacional de relatórios por categoria.",
    path: "/app/folders",
    icon: Folder,
  },
  {
    id: "decision-panel",
    title: "5. Painel de Decisão",
    description: "Fluxo de decisão estratégica com análise e recomendações IA.",
    path: "/app/decision-panel",
    icon: Zap,
  },
  {
    id: "templates",
    title: "6. Gerenciador de Templates",
    description: "Criação, edição e gestão de modelos personalizados de relatórios.",
    path: "/app/templates",
    icon: LayoutTemplate,
  },
  {
    id: "google-drive",
    title: "7. Google Drive (Futuro)",
    description: "Conexão com Drive, seleção de arquivos de pastas. Em desenvolvimento.",
    path: "#",
    icon: Globe,
    badge: "Em breve",
    badgeVariant: "outline",
  },
];

const Flows = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Central de Fluxos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navegação centralizada para testes de usabilidade e experiência. 
            Selecione um fluxo para iniciar o teste.
          </p>
          <Badge variant="outline" className="mt-4">
            superrelatorios.com.br/flows
          </Badge>
        </div>

        {/* Flows List */}
        <Card className="border-border/40 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Fluxos Disponíveis</CardTitle>
            <CardDescription>
              {flows.length} fluxos de navegação para testes
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              {flows.map((flow) => (
                <Button
                  key={flow.id}
                  variant="outline"
                  className="w-full justify-between h-auto py-4 px-4 text-left group hover:border-primary/50 hover:bg-primary/5"
                  asChild
                >
                  <Link to={flow.path}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <flow.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">
                            {flow.title}
                          </span>
                          {flow.badge && (
                            <Badge variant={flow.badgeVariant} className="text-[10px]">
                              {flow.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {flow.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Use esta tela para navegação rápida durante testes de UX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flows;
