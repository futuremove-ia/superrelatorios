import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Badge,
  SeverityBadge,
  TypeBadge,
  DomainBadge,
} from "@/components/radar/badges";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import type { RadarItem } from "@/hooks/useRadarItems";
import { useUpdateRadarItemStatus } from "@/hooks/useRadarItems";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  AlertTriangle,
  TrendingUp,
  Clock,
  Zap,
  Brain,
  Target,
  ArrowRight,
  CheckCircle2,
  X,
  RotateCcw,
  Layers,
  BookOpen,
  Activity,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================

interface RadarSideDrawerProps {
  item: RadarItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  organizationId: string;
  onStatusChanged?: () => void;
}

// ============================================================
// HELPER: Lever label map (código → label legível)
// ============================================================

const LEVER_LABELS: Record<string, string> = {
  price: "Preço",
  cost: "Custo",
  volume: "Volume",
  time: "Prazo",
  quality: "Qualidade",
  process: "Processo",
  people: "Pessoas",
  technology: "Tecnologia",
  marketing: "Marketing",
  sales: "Vendas",
};

function getLeverLabel(code: string): string {
  return LEVER_LABELS[code.toLowerCase()] ?? code;
}

// ============================================================
// HELPER: domain icon map
// ============================================================

const domainGradients: Record<string, string> = {
  finance: "from-emerald-500/10 to-emerald-500/5",
  sales: "from-cyan-500/10 to-cyan-500/5",
  marketing: "from-pink-500/10 to-pink-500/5",
  operations: "from-amber-500/10 to-amber-500/5",
  people: "from-rose-500/10 to-rose-500/5",
  strategy: "from-purple-500/10 to-purple-500/5",
  commercial: "from-blue-500/10 to-blue-500/5",
};

// ============================================================
// COMPONENT
// ============================================================

export function RadarSideDrawer({
  item,
  open,
  onOpenChange,
  organizationId,
  onStatusChanged,
}: RadarSideDrawerProps) {
  const updateStatus = useUpdateRadarItemStatus();
  const [isAddingToPlan, setIsAddingToPlan] = React.useState(false);

  if (!item) return null;

  const isArchived =
    item.status === "acknowledged" ||
    item.status === "dismissed" ||
    item.status === "resolved";

  const gradient =
    domainGradients[item.domain] ?? "from-gray-500/10 to-gray-500/5";

  // ──────────────────────────────────────────────────────────
  // HANDLERS
  // ──────────────────────────────────────────────────────────

  async function handleAddToPlan() {
    setIsAddingToPlan(true);
    try {
      // 1. Atualizar status do Radar Item para 'in_progress'
      await updateStatus.mutateAsync({
        id: item.id,
        dto: { status: "in_progress" },
      });

      // 2. Criar registro na tabela action_items
      const { error } = await supabase.from("action_items").insert({
        organization_id: organizationId,
        radar_item_id: item.id,
        title: item.title,
        status: "pending",
        priority:
          item.severity === "critical" ? 5 : item.severity === "high" ? 4 : 3,
        notes: item.diagnosis?.technical_term
          ? `Diagnóstico: ${item.diagnosis?.technical_term}\n\nCausa: ${item.diagnosis?.cause}`
          : null,
      });

      if (error) throw error;

      toast.success("Adicionado ao Plano de Ação!", {
        description: `"${item.title}" foi movido para execução.`,
      });

      onStatusChanged?.();
      onOpenChange(false);
    } catch (err) {
      toast.error("Erro ao adicionar ao plano", {
        description: "Tente novamente em alguns instantes.",
      });
      console.error("handleAddToPlan error:", err);
    } finally {
      setIsAddingToPlan(false);
    }
  }

  async function handleDismiss() {
    try {
      await updateStatus.mutateAsync({
        id: item.id,
        dto: {
          status: "dismissed",
          customNotes: "Dispensado manualmente pelo usuário.",
        },
      });
      toast.info("Alerta dispensado", {
        description: "O item foi movido para o Histórico.",
      });
      onStatusChanged?.();
      onOpenChange(false);
    } catch {
      toast.error("Erro ao dispensar alerta");
    }
  }

  async function handleReactivate() {
    try {
      await updateStatus.mutateAsync({
        id: item.id,
        dto: { status: "detected" },
      });
      toast.success("Item reativado no Radar!");
      onStatusChanged?.();
      onOpenChange(false);
    } catch {
      toast.error("Erro ao reativar item");
    }
  }

  // ──────────────────────────────────────────────────────────
  // RENDER
  // ──────────────────────────────────────────────────────────

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[480px] overflow-y-auto p-0"
      >
        {/* Header com gradiente de domínio */}
        <div className={cn("bg-gradient-to-b p-6 pb-4", gradient)}>
          <SheetHeader className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <TypeBadge type={item.type} />
                <SeverityBadge severity={item.severity} />
                {isArchived && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-muted text-muted-foreground"
                  >
                    {item.status === "resolved"
                      ? "Resolvido"
                      : item.status === "acknowledged"
                        ? "Reconhecido"
                        : "Dispensado"}
                  </Badge>
                )}
              </div>
              <DomainBadge domain={item.domain} size="sm" variant="subtle" />
            </div>

            <SheetTitle className="text-xl font-bold leading-tight text-left">
              {item.title}
            </SheetTitle>

            <SheetDescription className="text-sm text-muted-foreground text-left">
              {item.diagnosis?.technical_term}
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-0 px-6 pb-24">
          {/* ── Bloco 1: Diagnóstico ── */}
          <section className="py-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Diagnóstico
              </span>
            </div>
            <div className="space-y-3 text-sm">
              {item.diagnosis?.cause && (
                <div className="rounded-lg bg-muted/50 p-3">
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    Causa Raiz
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {item.diagnosis?.cause}
                  </p>
                </div>
              )}
              {item.diagnosis?.effect && (
                <div className="rounded-lg bg-destructive/5 border border-destructive/10 p-3">
                  <p className="text-xs font-medium text-destructive/70 mb-1">
                    Efeito no Negócio
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {item.diagnosis?.effect}
                  </p>
                </div>
              )}
              {item.diagnosis?.why && (
                <div className="rounded-lg bg-amber-500/5 border border-amber-500/10 p-3">
                  <p className="text-xs font-medium text-amber-600 mb-1">
                    Por quê acontece
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {item.diagnosis?.why}
                  </p>
                </div>
              )}
            </div>
          </section>

          <Separator />

          {/* ── Bloco 2: Impacto ── */}
          <section className="py-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Impacto Estimado
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Zap
                  className={cn(
                    "h-5 w-5",
                    item.impact?.direction === "increase"
                      ? "text-emerald-500"
                      : "text-red-500",
                  )}
                />
                <span
                  className={cn(
                    "text-2xl font-black",
                    item.impact?.direction === "increase"
                      ? "text-emerald-600"
                      : "text-red-600",
                  )}
                >
                  {item.impact?.direction === "increase" ? "+" : "-"}
                  {item.impact?.value}
                  {item.impact?.category === "percentage" ? "%" : ""}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">
                  {item.impact?.category}
                </span>
                {item.impact?.value_en && (
                  <span className="text-xs text-muted-foreground/70">
                    {item.impact?.value_en}
                  </span>
                )}
              </div>
            </div>

            {/* Timeframe e Esforço */}
            <div className="mt-3 flex gap-3">
              <div className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-2">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-medium">
                  {item.timeframe?.label}
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-2">
                <Target className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-medium">
                  {item.complexity?.label}
                </span>
              </div>
              {item.complexity?.effort_hours &&
                item.complexity?.effort_hours > 0 && (
                  <div className="flex items-center gap-1.5 rounded-md bg-muted px-3 py-2">
                    <span className="text-xs font-medium">
                      {item.complexity?.effort_hours}h estimadas
                    </span>
                  </div>
                )}
            </div>
          </section>

          <Separator />

          {/* ── Bloco 3: Alavancas ── */}
          {item.suggested_levers && item.suggested_levers.length > 0 && (
            <>
              <section className="py-5">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Alavancas Recomendadas
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.suggested_levers.map((lever) => (
                    <Badge
                      key={lever.lever_code}
                      variant="secondary"
                      className="text-sm px-3 py-1 font-medium"
                    >
                      {getLeverLabel(lever.lever_code)}
                    </Badge>
                  ))}
                </div>
              </section>
              <Separator />
            </>
          )}

          {/* ── Bloco 4: Confiança da IA ── */}
          <section className="py-5">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Confiança da IA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Progress
                value={(item.ai_confidence_score ?? 0) * 100}
                className="h-2 flex-1"
              />
              <span className="text-sm font-bold text-foreground w-12 text-right">
                {((item.ai_confidence_score ?? 0) * 100).toFixed(0)}%
              </span>
            </div>
            {item.ai_raw_analysis &&
              typeof item.ai_raw_analysis === "object" &&
              "model_version" in item.ai_raw_analysis && (
                <p className="text-xs text-muted-foreground mt-1.5">
                  Modelo:{" "}
                  {String(
                    (item.ai_raw_analysis as Record<string, unknown>)
                      .model_version,
                  )}
                </p>
              )}
          </section>
        </div>

        {/* ── CTAs fixos no rodapé ── */}
        <div className="fixed bottom-0 right-0 w-full sm:max-w-[480px] bg-background/95 backdrop-blur-sm border-t px-6 py-4 flex flex-col gap-2">
          {isArchived ? (
            /* Histórico: apenas opção de reativar */
            <Button
              onClick={handleReactivate}
              disabled={updateStatus.isPending}
              variant="outline"
              className="w-full gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reativar no Radar
            </Button>
          ) : (
            <>
              {/* CTA Principal */}
              <Button
                onClick={handleAddToPlan}
                disabled={
                  isAddingToPlan ||
                  updateStatus.isPending ||
                  item.status === "in_progress"
                }
                className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-11"
              >
                {item.status === "in_progress" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Já está no Plano de Ação
                  </>
                ) : (
                  <>
                    <ArrowRight className="h-4 w-4" />
                    {isAddingToPlan
                      ? "Adicionando..."
                      : "Adicionar ao Plano de Ação"}
                  </>
                )}
              </Button>

              {/* CTA Secundário */}
              <Button
                onClick={handleDismiss}
                disabled={updateStatus.isPending}
                variant="ghost"
                className="w-full gap-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
                Dispensar / Reconhecer e ignorar
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export type { RadarSideDrawerProps };
