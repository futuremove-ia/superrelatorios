import { AISuggestion } from "@/components/ui/ai-suggestion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users } from "lucide-react";

interface AISidebarProps {
  context?: "dashboard" | "reports" | "builder" | "detail";
}

const AISidebar = ({ context = "dashboard" }: AISidebarProps) => {
  const getSuggestions = () => {
    switch (context) {
      case "dashboard":
        return [
          {
            title: "Automatizar Relatório Mensal",
            description: "Criar template automático para relatórios de vendas mensais com seus dados históricos.",
            actionLabel: "Configurar Automação"
          },
          {
            title: "Nova Integração Disponível",
            description: "Conecte seu Google Sheets para importar dados automaticamente.",
            actionLabel: "Conectar Agora"
          }
        ];
      case "reports":
        return [
          {
            title: "Organizar por Categorias",
            description: "Identifiquei que você tem muitos relatórios financeiros. Quer criar uma pasta específica?",
            actionLabel: "Criar Pasta"
          }
        ];
      case "builder":
        return [
          {
            title: "Modelo Sugerido",
            description: "Com base nos seus dados, recomendo o template 'Relatório Executivo Trimestral'.",
            actionLabel: "Usar Template"
          }
        ];
      case "detail":
        return [
          {
            title: "Insights Adicionais",
            description: "Posso gerar análises complementares sobre tendências de crescimento.",
            actionLabel: "Gerar Insights"
          }
        ];
      default:
        return [];
    }
  };

  const suggestions = getSuggestions();

  if (suggestions.length === 0) return null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-yellow-600" />
            Sugestões da IA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <AISuggestion
              key={index}
              variant="compact"
              title={suggestion.title}
              description={suggestion.description}
              actionLabel={suggestion.actionLabel}
              onAction={() => console.log(`Action: ${suggestion.title}`)}
              onDismiss={() => console.log(`Dismiss: ${suggestion.title}`)}
            />
          ))}
        </CardContent>
      </Card>

      {context === "dashboard" && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              Insights Rápidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Seus relatórios estão sendo visualizados 23% mais que no mês passado
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Economia média de 2.5h por relatório comparado ao método manual
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {context === "detail" && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              Ações de Compartilhamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Este relatório foi visualizado por:</p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Gestores</span>
                  <span className="text-primary">12 visualizações</span>
                </div>
                <div className="flex justify-between">
                  <span>Diretoria</span>
                  <span className="text-primary">8 visualizações</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export { AISidebar };