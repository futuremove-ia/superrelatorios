import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AISuggestion } from "@/components/ui/ai-suggestion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AISidebarProps {
  context?: "dashboard" | "reports" | "builder" | "detail";
  className?: string;
}

const AISidebar = ({ context = "dashboard", className }: AISidebarProps) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ai-sidebar-collapsed');
      return saved === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('ai-sidebar-collapsed', String(isCollapsed));
  }, [isCollapsed]);

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
            actionLabel: "Usar Modelo"
          }
        ];
      case "detail":
        return [
          {
            title: "Análises Adicionais",
            description: "Posso gerar análises complementares sobre tendências de crescimento.",
            actionLabel: "Gerar Análises"
          }
        ];
      default:
        return [];
    }
  };

  const suggestions = getSuggestions();

  if (suggestions.length === 0) return null;

  return (
    <aside 
      className={cn(
        "relative flex-shrink-0 transition-[width] duration-300 ease-in-out border-l bg-muted/30 overflow-hidden",
        isCollapsed ? "w-16" : "w-80",
        className
      )}
    >
      {/* Toggle Button */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute -left-3 top-6 h-6 w-6 rounded-full shadow-md z-10 border"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
      </Button>

      <div className={cn(
        "h-full overflow-y-auto overflow-x-hidden p-4 space-y-4",
        isCollapsed && "items-center p-2"
      )}>
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div className="h-px w-8 bg-border" />
            <Lightbulb className="h-5 w-5 text-yellow-600 opacity-50" />
            <TrendingUp className="h-5 w-5 text-green-600 opacity-50" />
          </div>
        ) : (
          <>
            <Card>
              <CardHeader className="pb-3 px-4">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-600" />
                  Sugestões da IA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-4">
                {suggestions.map((suggestion, index) => (
                  <AISuggestion
                    key={index}
                    variant="compact"
                    title={suggestion.title}
                    description={suggestion.description}
                    actionLabel={suggestion.actionLabel}
                    onAction={() => {}}
                    onDismiss={() => {}}
                  />
                ))}
              </CardContent>
            </Card>

            {context === "dashboard" && (
              <Card>
                <CardHeader className="pb-3 px-4">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    {t('ai_sidebar.insights_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground italic">
                        {t('ai_sidebar.insight_growth')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {context === "detail" && (
              <Card>
                <CardHeader className="pb-3 px-4">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    {t('ai_sidebar.engagement_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-xs">{t('ai_sidebar.engagement_managers')}</span>
                      <span className="text-primary font-medium">{t('ai_sidebar.views', { count: 12 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-xs">{t('ai_sidebar.engagement_partners')}</span>
                      <span className="text-primary font-medium">{t('ai_sidebar.views', { count: 8 })}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export { AISidebar };