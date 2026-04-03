import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { useRadarItems, useUpdateRadarItemStatus } from "@/hooks/useRadarItems";
import {
  Radar as RadarIcon,
  Filter,
  AlertTriangle,
  TrendingUp,
  Bell,
  CheckCircle2,
  Zap,
  Clock,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ActionableCard } from "@/components/business/ActionableCard";
import { DomainFilter } from "@/components/business/DomainTag";
import { Domain, PriorityLevel, RadarItem } from "@/types/business";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Mock data para demonstração
const MOCK_RADAR_ITEMS: RadarItem[] = [
  {
    id: "1",
    type: "risk",
    priority: "high",
    domain: "commercial",
    urgency: "immediate",
    alert: {
      id: "r1",
      title: "Queda na Taxa de Conversão Comercial",
      description: "A taxa de conversão de vendas caiu 15% no último trimestre",
      severity: "high",
      timeToBreathe: "30 dias",
      domain: "commercial",
      metrics: ["conversion_rate", "cac", "pipeline"],
    },
    diagnosis: {
      id: "d1",
      technicalTerm: "Sales Conversion Rate Decline",
      cause:
        "A taxa de conversão de vendas caiu 15% no último trimestre, impactando diretamente a receita. Análise do funil mostra gargalo na etapa de proposta.",
      effect:
        "Redução de 23% na receita projetada para o próximo trimestre. Risco de perder market share para concorrentes.",
      why: "O aumento de 40% no preço sem ajuste na comunicação de valor criou resistência do cliente.",
      dataSources: ["CRM", "Planilha de Vendas", "Dados de Pipeline"],
    },
    recommendation: {
      id: "rec1",
      title: "Otimização do Funil de Vendas",
      description:
        "Reestruturar processo comercial com foco nos pontos de gargalo identificados. Criar novo material de proposta destacando ROI.",
      expectedImpact: "+25% na taxa de conversão",
      timeframe: "30 dias",
      complexity: "medium",
      confidence: 85,
      levers: [
        { type: "price", label: "Preço", impact: "high" },
        { type: "process", label: "Processo", impact: "medium" },
      ],
    },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "active",
  },
  {
    id: "2",
    type: "risk",
    priority: "high",
    domain: "finance",
    urgency: "immediate",
    alert: {
      id: "r2",
      title: "Runway Crítico - Caixa para 3.5 meses",
      description: "Queima de caixa atual irá esgotar reserva em 3.5 meses",
      severity: "critical",
      timeToBreathe: "15 dias",
      domain: "finance",
      metrics: ["runway", "burn_rate", "cash_balance"],
    },
    diagnosis: {
      id: "d2",
      technicalTerm: "Cash Runway Critical Threshold",
      cause:
        "Burn rate mensal de R$ 45K com reserva de apenas R$ 158K. Receita não cobre custos operacionais desde outubro.",
      effect:
        "Risco de insolvência. Necessidade de rodada de investimento emergencial ou corte drástico de custos.",
      why: "Aquisição de clientes mais lenta que projetado + custos fixos de escritório não reduzidos pós-pandemia.",
      dataSources: ["Extratos Bancários", "Fluxo de Caixa", "DRE"],
    },
    recommendation: {
      id: "rec2",
      title: "Corte Emergencial de Custos + Aceleração de Recebíveis",
      description:
        "Reduzir imediatamente custos fixos em 30% (escritório, softwares não críticos). Negociar recebíveis e antecipar faturas.",
      expectedImpact: "Extensão de runway para 7 meses",
      timeframe: "15 dias",
      complexity: "high",
      confidence: 92,
      levers: [
        { type: "cost", label: "Custo", impact: "high" },
        { type: "time", label: "Prazo", impact: "high" },
      ],
    },
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "active",
  },
  {
    id: "3",
    type: "opportunity",
    priority: "high",
    domain: "operations",
    urgency: "short_term",
    alert: {
      id: "o1",
      title: "Potencial de Automação no Atendimento",
      description:
        "40% das demandas de suporte são repetitivas e podem ser automatizadas",
      severity: "medium", // para oportunidades, severity é mais sobre urgência
      timeToBreathe: "60 dias",
      domain: "operations",
      metrics: ["support_time", "ticket_volume", "automation_rate"],
    },
    diagnosis: {
      id: "d3",
      technicalTerm: "Process Automation Opportunity",
      cause:
        "Análise de tickets de suporte mostra que 40% são consultas repetitivas sobre senha, status de pedido e dúvidas básicas de uso.",
      effect:
        "Liberação de 25h/semana da equipe de suporte para focar em atendimento complexo e vendas.",
      why: "Crescimento rápido da base sem investimento correspondente em ferramentas de self-service.",
      dataSources: [
        "Zendesk",
        "Planilha de Tickets",
        "Análise de Categorização",
      ],
    },
    recommendation: {
      id: "rec3",
      title: "Implementar Chatbot + Base de Conhecimento",
      description:
        "Criar chatbot para FAQs e portal de autoatendimento. Reduzir tickets repetitivos em 60%.",
      expectedImpact: "+R$ 8K/mês economia + satisfação do cliente",
      timeframe: "45 dias",
      complexity: "medium",
      confidence: 78,
      levers: [
        { type: "process", label: "Processo", impact: "high" },
        { type: "cost", label: "Custo", impact: "medium" },
      ],
    },
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "active",
  },
  {
    id: "4",
    type: "opportunity",
    priority: "medium",
    domain: "marketing",
    urgency: "medium_term",
    alert: {
      id: "o2",
      title: "Oportunidade de Crescimento no Segmento SaaS",
      description: "CAC 30% menor no segmento SaaS vs média geral",
      severity: "medium",
      timeToBreathe: "90 dias",
      domain: "marketing",
      metrics: ["cac", "ltv", "conversion_by_segment"],
    },
    diagnosis: {
      id: "d4",
      technicalTerm: "Customer Acquisition Efficiency by Segment",
      cause:
        "Dados de aquisição mostram que clientes SaaS têm CAC 30% menor e LTV 40% maior que outros segmentos.",
      effect: "Potencial de aumentar margem em 15% focando nesse segmento.",
      why: "Menor ciclo de vendas, decisão mais técnica e menos burocrática.",
      dataSources: [
        "Google Analytics",
        "CRM",
        "Planilha de Custos de Aquisição",
      ],
    },
    recommendation: {
      id: "rec4",
      title: "Campanha Focada em SaaS + Parcerias",
      description:
        "Criar campanha de marketing específica para SaaS. Desenvolver case studies e conteúdo técnico.",
      expectedImpact: "+40% de novos clientes SaaS",
      timeframe: "90 dias",
      complexity: "low",
      confidence: 72,
      levers: [{ type: "volume", label: "Volume", impact: "high" }],
    },
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: "active",
  },
];

const Radar: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { organizationId } = useCurrentOrganization();
  const { data: radarItems, isLoading, error } = useRadarItems(organizationId);
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>([
    "finance",
    "commercial",
    "operations",
    "strategy",
    "marketing",
  ]);
  const [activeTab, setActiveTab] = useState("all");

  // Map radar_items from database to RadarItem format
  const items = useMemo((): RadarItem[] => {
    if (!radarItems || radarItems.length === 0) return [];

    return radarItems.map((item) => ({
      id: item.id,
      type: item.type as "risk" | "opportunity",
      priority:
        item.severity === "critical" || item.severity === "high"
          ? "high"
          : item.severity === "medium"
            ? "medium"
            : "low",
      domain: item.domain as Domain,
      urgency:
        (item.timeframe?.months || 0) <= 1
          ? "immediate"
          : (item.timeframe?.months || 0) <= 3
            ? "short_term"
            : "medium_term",
      alert: {
        id: item.id,
        title: item.impact?.label || "Alert",
        description: item.impact?.value || "",
        severity: item.severity,
        domain: item.domain,
        metrics: [],
      } as any,
      diagnosis: {
        id: item.diagnosis_code,
        technicalTerm: item.diagnosis?.technical_term || "",
        cause: item.diagnosis?.cause || "",
        effect: item.diagnosis?.effect || "",
        why: item.diagnosis?.why || "",
        dataSources: [],
      } as any,
      recommendation: {
        id: item.id,
        title: item.impact?.label || "",
        description: item.impact?.value || "",
        expectedImpact: item.impact?.value || "",
        timeframe: item.timeframe?.label || "",
        complexity: (item.complexity?.label as any) || "medium",
        confidence: item.ai_confidence_score || 0,
        levers: (item.suggested_levers || []).map((l) => ({
          type: l.lever_code as any,
          label: l.lever_code,
          impact: l.is_primary ? "high" : "medium",
        })),
      } as any,
      createdAt: item.detected_at || item.created_at,
      status: item.status as any,
    }));
  }, [radarItems]);

  // Filtrar itens
  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        // Filtro por domínio
        if (!selectedDomains.includes(item.domain)) return false;

        // Filtro por tab
        if (activeTab === "risks") return item.type === "risk";
        if (activeTab === "opportunities") return item.type === "opportunity";
        if (activeTab === "high") return item.priority === "high";

        return true;
      })
      .sort((a, b) => {
        // Ordenar por prioridade e urgência
        const priorityWeight = { high: 3, medium: 2, low: 1 };
        const urgencyWeight = { immediate: 3, short_term: 2, medium_term: 1 };

        const scoreA =
          priorityWeight[a.priority] * 10 + urgencyWeight[a.urgency];
        const scoreB =
          priorityWeight[b.priority] * 10 + urgencyWeight[b.urgency];

        return scoreB - scoreA;
      });
  }, [items, selectedDomains, activeTab]);

  // Estatísticas
  const stats = useMemo(() => {
    const risks = items.filter(
      (i) => i.type === "risk" && selectedDomains.includes(i.domain),
    );
    const opportunities = items.filter(
      (i) => i.type === "opportunity" && selectedDomains.includes(i.domain),
    );
    const highPriority = items.filter(
      (i) => i.priority === "high" && selectedDomains.includes(i.domain),
    );
    const critical = risks.filter(
      (r) => (r.alert as any).severity === "critical",
    );

    return {
      total: filteredItems.length,
      risks: risks.length,
      opportunities: opportunities.length,
      highPriority: highPriority.length,
      critical: critical.length,
    };
  }, [items, selectedDomains, filteredItems.length]);

  // Handlers
  const updateStatus = useUpdateRadarItemStatus();

  const handleAddToPlan = (id: string) => {
    toast({
      title: "Adicionado ao Plano",
      description: "Ação adicionada à Lista de Execução.",
    });

    updateStatus.mutate({
      id,
      dto: { status: "in_progress" },
    });
  };

  const handleDismiss = (id: string) => {
    toast({
      title: "Alerta dispensado",
      description: "O item foi marcado como reconhecido.",
    });

    updateStatus.mutate({
      id,
      dto: { status: "acknowledged" },
    });
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <RadarIcon className="h-8 w-8 text-primary" />
            </div>
            Radar
          </h1>
          <p className="text-muted-foreground font-medium">
            Alertas inteligentes de Riscos e Oportunidades detectados pela IA
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-wrap gap-3">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <div className="text-lg font-bold text-red-700">
                  {stats.risks}
                </div>
                <div className="text-xs text-red-600">Riscos</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <div>
                <div className="text-lg font-bold text-emerald-700">
                  {stats.opportunities}
                </div>
                <div className="text-xs text-emerald-600">Oportunidades</div>
              </div>
            </CardContent>
          </Card>

          {stats.critical > 0 && (
            <Card className="bg-red-100 border-red-300 animate-pulse">
              <CardContent className="p-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-red-600" />
                <div>
                  <div className="text-lg font-bold text-red-700">
                    {stats.critical}
                  </div>
                  <div className="text-xs text-red-600">Críticos</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Filtros e Tabs */}
      <div className="space-y-4">
        {/* Filtro de Domínios */}
        <DomainFilter
          selected={selectedDomains}
          onChange={setSelectedDomains}
        />

        {/* Tabs de tipo */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-5 gap-1">
            <TabsTrigger value="all" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Todos</span>
              <Badge variant="secondary" className="ml-1">
                {stats.total}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="risks" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Riscos</span>
              <Badge
                variant="secondary"
                className="ml-1 bg-red-100 text-red-700"
              >
                {stats.risks}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Oportunidades</span>
              <Badge
                variant="secondary"
                className="ml-1 bg-emerald-100 text-emerald-700"
              >
                {stats.opportunities}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="high" className="gap-2">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Alta Prioridade</span>
              <Badge
                variant="secondary"
                className="ml-1 bg-amber-100 text-amber-700"
              >
                {stats.highPriority}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {filteredItems.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="p-12 text-center">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Tudo tranquilo no radar
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Nenhum alerta corresponde aos filtros selecionados. Ajuste
                    os filtros de domínio ou aguarde novas análises da IA.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <ActionableCard
                    key={item.id}
                    item={item}
                    onAddToPlan={handleAddToPlan}
                    onDismiss={handleDismiss}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer informativo */}
      <div className="pt-6 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>
              Última análise: <strong>Hoje às 08:30</strong> | Próxima:{" "}
              <strong>Amanhã às 06:00</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Radar atualiza a cada 6 horas
            </span>
            <Button variant="ghost" size="sm" className="gap-1">
              <Zap className="h-4 w-4" />
              Forçar análise agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radar;
