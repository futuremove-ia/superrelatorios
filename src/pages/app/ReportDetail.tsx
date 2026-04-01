import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Share2,
  Download,
  Edit,
  MoreHorizontal,
  Eye,
  Calendar,
  Tag,
  Lightbulb,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Paper } from "@/components/ui/paper";
import { Report } from "@/types/reports";
import { getReportById } from "@/services/supabaseReportsService";
import { useToast } from "@/hooks/use-toast";
import BrandName from "@/components/BrandName";
import { useTranslation } from "react-i18next";
import { DynamicBlockRenderer } from "@/components/reports/renderer/DynamicBlockRenderer";
import { DiagnosticSection } from "@/components/business/DiagnosticSection";
import { PriorityCard } from "@/components/business/PriorityCard";
import { Diagnostic, Priority } from "@/types/business";
import { Sparkles, Zap, Database, ExternalLink, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardDescription } from "@/components/ui/card";

const ReportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  // Extrair diagnóstico do data_json (Onda 1)
  const diagnosticData: Diagnostic | null = (report as any)?.rawData?.diagnostic
    ?.diagnostic
    ? {
        id: `diag-${report?.id}`,
        reportId: report?.id || "",
        createdAt: report?.createdAt || "",
        ...(report as any).rawData.diagnostic.diagnostic,
      }
    : null;

  const priorityData: Priority | null = (report as any)?.rawData?.diagnostic
    ?.suggestedPriority
    ? {
        id: `prio-${report?.id}`,
        diagnosticId: `diag-${report?.id}`,
        createdAt: report?.createdAt || "",
        status: "suggested",
        ...(report as any).rawData.diagnostic.suggestedPriority,
      }
    : null;

  useEffect(() => {
    const loadReport = async () => {
      if (!id) return;

      try {
        const data = await getReportById(id);
        if (!data) {
          navigate("/app/relatorios");
          return;
        }
        setReport(data);
      } catch (error) {
        console.error("Error loading report:", error);
        toast({
          title: t("report_detail.notifications.error_load"),
          description: t("report_detail.notifications.error_load_desc"),
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [id, navigate, toast, t]);

  const getStatusColor = (status: Report["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "shared":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusText = (status: Report["status"]) => {
    switch (status) {
      case "completed":
        return t("reports.filters.completed");
      case "shared":
        return t("reports.filters.shared");
      default:
        return t("reports.filters.draft");
    }
  };

  const handleShare = () => {
    toast({
      title: t("report_detail.notifications.link_copied"),
      description: t("report_detail.notifications.link_copied_desc"),
    });
  };

  const handleDownload = () => {
    toast({
      title: t("report_detail.notifications.download_start"),
      description: t("report_detail.notifications.download_desc"),
    });
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded w-64"></div>
          </div>
          <div className="h-96 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium text-foreground mb-2">
              {t("report_detail.notifications.not_found")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("report_detail.notifications.error_load_desc")}
            </p>
            <Button asChild>
              <Link to="/app/relatorios">{t("report_detail.back_button")}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
            <Link to="/app/relatorios">
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{t("common.back")}</span>
            </Link>
          </Button>

          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">
              {report.title}
            </h1>
            {report.subtitle && (
              <p className="text-muted-foreground text-sm truncate">
                {report.subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <Badge className={getStatusColor(report.status)}>
            {getStatusText(report.status)}
          </Badge>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            {t("common.share")}
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            {t("common.download")}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                {t("common.edit")}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                {t("report_detail.presentation_mode")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="sm:hidden flex items-center gap-2">
          <Badge className={getStatusColor(report.status)}>
            {getStatusText(report.status)}
          </Badge>
        </div>
      </div>

      {/* Report Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="h-4 w-4 flex-shrink-0" />
              <span>{t("report_detail.cards.category")}</span>
            </div>
            <p className="font-medium text-sm sm:text-base truncate">
              {report.category}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>{t("report_detail.cards.created_at")}</span>
            </div>
            <p className="font-medium text-sm sm:text-base">
              {new Date(report.createdAt).toLocaleDateString(i18n.language)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>{t("report_detail.cards.updated_at")}</span>
            </div>
            <p className="font-medium text-sm sm:text-base">
              {new Date(report.updatedAt).toLocaleDateString(i18n.language)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4 flex-shrink-0" />
              <span>{t("report_detail.cards.views")}</span>
            </div>
            <p className="font-medium text-sm sm:text-base">24</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="report" className="space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger
            value="report"
            className="gap-2 font-bold text-xs uppercase tracking-widest"
          >
            <FileText className="h-3.5 w-3.5" />
            {t("report_detail.tabs.report")}
          </TabsTrigger>
          <TabsTrigger
            value="sources"
            className="gap-2 font-bold text-xs uppercase tracking-widest"
          >
            <Database className="h-3.5 w-3.5" />
            {t("report_detail.tabs.sources")}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="report"
          className="space-y-8 animate-in fade-in duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <Paper
                orientation="portrait"
                padding="lg"
                className="min-h-[1000px] shadow-2xl border-none"
              >
                <div className="p-4 sm:p-8">
                  <div className="flex justify-between items-start mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <BrandName />
                    <div className="text-right text-[10px] uppercase tracking-widest font-mono">
                      {t("report_detail.content.verified")} • {report.id}
                    </div>
                  </div>

                  <DynamicBlockRenderer blocks={report.blocks} />
                </div>
              </Paper>

              {/* Onda 1: Seção de Diagnóstico e Prioridade IA no final do relatório */}
              {diagnosticData && priorityData && (
                <div className="pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-primary fill-primary/20" />
                    <h2 className="text-xl font-bold tracking-tight">
                      {t("report_detail.ai_section.title")}
                    </h2>
                  </div>

                  <DiagnosticSection diagnostic={diagnosticData} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center space-y-2 p-4">
                      <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                        {t("report_detail.ai_section.recommended_priority")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("report_detail.ai_section.priority_desc")}
                      </p>
                    </div>
                    <PriorityCard priority={priorityData} />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <Card className="border-border/40 bg-muted/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">
                    {t("report_detail.sidebar.info_title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("report_detail.sidebar.template")}
                    </p>
                    <p className="font-medium">{report.templateId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("report_detail.sidebar.description")}
                    </p>
                    <p className="text-sm">{report.description}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">
                    {t("report_detail.sidebar.quick_actions")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="mr-2 h-4 w-4" />
                    {t("common.edit")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={handleShare}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    {t("common.share")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t("report_detail.sidebar.export_pdf")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="sources"
          className="animate-in fade-in duration-500"
        >
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg">
                {t("report_detail.data_assets.title")}
              </CardTitle>
              <CardDescription>
                {t("report_detail.data_assets.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-background rounded-lg border shadow-sm">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">
                        Vendas_Novembro_2025.xlsx
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Planilha Excel • 1.2 MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 font-bold"
                  >
                    <Download className="h-4 w-4" />
                    {t("report_detail.data_assets.download")}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border bg-muted/10 opacity-50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-background rounded-lg border shadow-sm">
                      <ExternalLink className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">
                        Google Analytics Dashboard
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Fonte Externa • analytics.google.com
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    {t("report_detail.data_assets.open_link")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div
        className="sm:hidden fixed bottom-[3.5rem] left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-3 z-40 flex gap-2"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Button variant="outline" className="flex-1" onClick={handleShare}>
          <Share2 className="h-4 w-4 mr-2" />
          {t("common.share")}
        </Button>
        <Button className="flex-1" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          {t("common.download")}
        </Button>
      </div>
    </div>
  );
};

export default ReportDetail;
