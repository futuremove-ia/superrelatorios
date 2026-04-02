import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Target,
  Sparkles,
  ArrowRight,
  Plus,
  Search,
  LayoutGrid,
  List as ListIcon,
  CheckCircle2,
  Zap,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/ui/kpi-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriorityCard } from "@/components/business/PriorityCard";
import { PriorityValidationModal } from "@/components/business/PriorityValidationModal";
import { EmptyState } from "@/components/ui/empty-state";
import { Priority, PriorityScore, PriorityLevel } from "@/types/business";
import { getPrioritiesByOrganization } from "@/services/supabaseBusinessService";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const PriorityListItem: React.FC<{
  priority: Priority;
  onValidate: (p: Priority) => void;
  onAction: (id: string) => void;
}> = ({ priority, onValidate, onAction }) => {
  const { t } = useTranslation();

  const getLevelColor = (level: PriorityLevel) => {
    switch (level) {
      case "high":
        return "text-red-600 bg-red-50 border-red-100";
      case "medium":
        return "text-amber-600 bg-amber-50 border-amber-100";
      case "low":
        return "text-blue-600 bg-blue-50 border-blue-100";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-card rounded-xl border border-border/40 hover:border-primary/20 transition-all gap-4 group">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div
          className={cn(
            "p-2 rounded-lg flex-shrink-0",
            priority.status === "validated" ? "bg-green-50" : "bg-amber-50",
          )}
        >
          {priority.status === "validated" ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <Zap className="h-5 w-5 text-amber-600" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-sm text-foreground truncate">
              {priority.title}
            </h4>
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] h-4 px-1",
                getLevelColor(priority.level),
              )}
            >
              {t(`priorities.levels.${priority.level}`)}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {priority.explanation}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {t("priorities.card.score")}
          </span>
          <span className="text-sm font-black text-foreground">
            {priority.score.calculatedValue}
          </span>
        </div>

        <Button
          size="sm"
          variant={priority.status === "suggested" ? "default" : "outline"}
          className="h-9 px-4 font-bold"
          onClick={() =>
            priority.status === "suggested"
              ? onValidate(priority)
              : onAction(priority.id)
          }
        >
          {priority.status === "suggested"
            ? t("priorities.card.cta_validate")
            : t("priorities.card.cta_action")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Priorities = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { organizationId, isDemoMode } = useCurrentOrganization();
  const [priorities, setPriorities] = useState<Priority[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<Priority | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["priorities", organizationId],
    queryFn: () => getPrioritiesByOrganization(organizationId),
    staleTime: 5 * 60 * 1000,
    enabled: !!organizationId && !isDemoMode,
  });

  if (isError) {
    toast({
      title: t("errors.title"),
      description: t("priorities.errors.load"),
      variant: "destructive",
    });
  }

  useEffect(() => {
    if (data) {
      setPriorities(data);
    }
  }, [data]);

  useEffect(() => {
    if (isDemoMode || !organizationId) {
      setPriorities([]);
    }
  }, [isDemoMode, organizationId]);

  const filteredPriorities = useMemo(() => {
    return priorities.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.explanation.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [priorities, searchTerm]);

  const handleOpenValidate = (priority: Priority) => {
    setSelectedPriority(priority);
    setIsModalOpen(true);
  };

  const handleValidatePriority = (id: string, finalScore: PriorityScore) => {
    setPriorities((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "validated", score: finalScore } : p,
      ),
    );

    toast({
      title: t("priorities.toast.validated_title"),
      description: t("priorities.toast.validated_desc"),
    });
  };

  const stats = {
    high: priorities.filter((p) => p.level === "high").length,
    medium: priorities.filter((p) => p.level === "medium").length,
    low: priorities.filter((p) => p.level === "low").length,
    validated: priorities.filter((p) => p.status === "validated").length,
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Target className="h-8 w-8 text-primary" />
            </div>
            {t("priorities.title")}
          </h1>
          <p className="text-muted-foreground text-sm font-medium">
            {t("priorities.subtitle")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="font-bold border-2">
            <Plus className="mr-2 h-4 w-4" />
            {t("priorities.new_analysis")}
          </Button>
        </div>
      </div>

      {/* KPI Cards - Horizontal Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <KPICard
          title={t("priorities.summary.high")}
          value={stats.high.toString()}
          icon={AlertTriangle}
          variant="destructive"
        />
        <KPICard
          title={t("priorities.summary.medium")}
          value={stats.medium.toString()}
          icon={Zap}
          variant="warning"
        />
        <KPICard
          title={t("priorities.summary.low")}
          value={stats.low.toString()}
          icon={ArrowRight}
          variant="info"
        />
        <KPICard
          title={t("priorities.summary.validated")}
          value={stats.validated.toString()}
          icon={CheckCircle2}
          variant="success"
        />
      </div>

      {/* Filters & View Toggle */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/30 p-4 rounded-2xl border border-border/40">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("priorities.search_placeholder")}
            className="pl-10 bg-background border-none shadow-sm h-11 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs
          value={viewMode}
          onValueChange={(v) => setViewMode(v as any)}
          className="w-full md:w-auto"
        >
          <TabsList className="grid w-full grid-cols-2 h-11 p-1 bg-background border shadow-sm rounded-xl">
            <TabsTrigger value="cards" className="rounded-lg font-bold gap-2">
              <LayoutGrid className="h-4 w-4" />
              {t("priorities.view_cards")}
            </TabsTrigger>
            <TabsTrigger value="list" className="rounded-lg font-bold gap-2">
              <ListIcon className="h-4 w-4" />
              {t("priorities.view_list")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-black text-foreground uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {t("priorities.list_title")}
            </h2>
            <Badge variant="secondary" className="font-bold">
              {filteredPriorities.length}{" "}
              {t("priorities.items_count", {
                count: filteredPriorities.length,
              })}
            </Badge>
          </div>

          {filteredPriorities.length > 0 ? (
            viewMode === "cards" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPriorities.map((priority) => (
                  <PriorityCard
                    key={priority.id}
                    priority={priority}
                    onValidate={handleOpenValidate}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredPriorities.map((priority) => (
                  <PriorityListItem
                    key={priority.id}
                    priority={priority}
                    onValidate={handleOpenValidate}
                    onAction={(id) => console.log("Action for", id)}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="py-12">
              <EmptyState
                icon={Target}
                title={t("priorities.empty.title")}
                description={t("priorities.empty.description")}
                actionLabel={t("priorities.empty.cta")}
                onAction={() => console.log("Generate Diagnostic")}
              />
            </div>
          )}
        </div>
      </div>

      {selectedPriority && (
        <PriorityValidationModal
          priority={selectedPriority}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onValidate={handleValidatePriority}
        />
      )}
    </div>
  );
};

export default Priorities;
