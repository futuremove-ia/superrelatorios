import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Plus,
  Share2,
  Download,
  Eye,
  MoreHorizontal,
  Grid,
  List,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Report } from "@/types/reports";
import { getReportsByOrganization } from "@/services/supabaseReportsService";
import { useCurrentOrganization } from "@/hooks/useCurrentOrganization";
import { useTranslation } from "react-i18next";

const ReportsList = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { organizationId, isDemoMode } = useCurrentOrganization();
  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const loadReports = async () => {
      try {
        if (isDemoMode || !organizationId) {
          setReports([]);
          setFilteredReports([]);
          setLoading(false);
          return;
        }
        const data = await getReportsByOrganization(organizationId);
        setReports(data);
        setFilteredReports(data);
      } catch (error) {
        console.error("Error loading reports:", error);
      } finally {
        setLoading(false);
      }
    };
    loadReports();
  }, [organizationId, isDemoMode]);

  useEffect(() => {
    let filtered = reports;
    if (searchTerm) {
      filtered = filtered.filter(
        (report) =>
          report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          report.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (statusFilter !== "all")
      filtered = filtered.filter((report) => report.status === statusFilter);
    if (categoryFilter !== "all")
      filtered = filtered.filter(
        (report) => report.category === categoryFilter,
      );
    setFilteredReports(filtered);
  }, [reports, searchTerm, statusFilter, categoryFilter]);

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

  const categories = Array.from(new Set(reports.map((r) => r.category)));

  if (loading) {
    return (
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-muted rounded w-48"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-56 bg-muted rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-subtle min-h-full w-full">
      <div className="flex w-full overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 min-w-0 p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2 sm:gap-3">
                <Filter className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                {t("reports.title")}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                {t("reports.subtitle")}
              </p>
            </div>
            <Button
              asChild
              size="default"
              className="self-start sm:self-auto touch-target"
            >
              <Link to="/app/novo-relatorio">
                <Plus className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">
                  {t("reports.new_report_button")}
                </span>
                <span className="sm:hidden">
                  {t("reports.new_report_button")}
                </span>
              </Link>
            </Button>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder={t("reports.filters.search_placeholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select
                      value={statusFilter}
                      onValueChange={setStatusFilter}
                    >
                      <SelectTrigger className="w-full sm:w-36">
                        <SelectValue
                          placeholder={t("reports.filters.status")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          {t("reports.filters.all")}
                        </SelectItem>
                        <SelectItem value="draft">
                          {t("reports.filters.draft")}
                        </SelectItem>
                        <SelectItem value="completed">
                          {t("reports.filters.completed")}
                        </SelectItem>
                        <SelectItem value="shared">
                          {t("reports.filters.shared")}
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <Select
                      value={categoryFilter}
                      onValueChange={setCategoryFilter}
                    >
                      <SelectTrigger className="w-full sm:w-36">
                        <SelectValue
                          placeholder={t("reports.filters.category")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          {t("reports.filters.all")}
                        </SelectItem>

                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t("reports.counter", { count: filteredReports.length })}
                  </p>

                  <div className="hidden sm:flex items-center gap-1">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      aria-label={t("reports.view_grid")}
                      title={t("reports.view_grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      aria-label={t("reports.view_list")}
                      title={t("reports.view_list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports */}
          {filteredReports.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {t("reports.empty.title")}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {searchTerm ||
                    statusFilter !== "all" ||
                    categoryFilter !== "all"
                      ? t("reports.empty.filter_desc")
                      : t("reports.empty.brand_new_desc")}
                  </p>
                  {!searchTerm &&
                    statusFilter === "all" &&
                    categoryFilter === "all" && (
                      <Button asChild>
                        <Link to="/app/novo-relatorio">
                          <Plus className="mr-2 h-4 w-4" />
                          {t("reports.empty.cta")}
                        </Link>
                      </Button>
                    )}
                </div>
              </CardContent>
            </Card>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredReports.map((report, index) => (
                <Card
                  key={report.id}
                  className="card-hover group cursor-pointer overflow-hidden border-border/40 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  onClick={() => navigate(`/app/relatorios/${report.id}`)}
                >
                  <div
                    className={`h-1.5 w-full ${getStatusColor(report.status).includes("green") ? "bg-emerald-500" : getStatusColor(report.status).includes("yellow") ? "bg-amber-500" : "bg-slate-400"}`}
                  />
                  <CardHeader className="pb-2 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors tracking-tight">
                          {report.title}
                        </CardTitle>
                        <Badge
                          className={`mt-2 ${getStatusColor(report.status)} text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border-none shadow-sm`}
                          variant="secondary"
                        >
                          {getStatusText(report.status)}
                        </Badge>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/app/relatorios/${report.id}`);
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            {t("reports.actions.view")}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Share2 className="mr-2 h-4 w-4" />
                            {t("reports.actions.share")}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            {t("reports.actions.download")}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-[2.5rem]">
                        {report.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/30">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center">
                            <FileText className="h-4 w-4 text-primary/70" />
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground">
                            {report.category}
                          </span>
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-tighter">
                          {new Date(report.updatedAt).toLocaleDateString(
                            i18n.language,
                          )}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Link to={`/app/relatorios/${report.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          {t("reports.actions.open")}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="animate-fade-in overflow-hidden border-border/40">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table
                    className="w-full text-left"
                    aria-label={t("reports.table_desc")}
                  >
                    <thead>
                      <tr className="border-b border-border/50 bg-muted/30">
                        <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                          {t("reports.title")}
                        </th>
                        <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                          {t("reports.filters.category")}
                        </th>
                        <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                          {t("reports.filters.status")}
                        </th>
                        <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                          {t("report_detail.cards.updated_at")}
                        </th>
                        <th className="py-3 px-4 w-10"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredReports.map((report) => (
                        <tr
                          key={report.id}
                          className="group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                          onClick={() =>
                            navigate(`/app/relatorios/${report.id}`)
                          }
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                                <FileText className="h-4 w-4 text-primary/70" />
                              </div>
                              <div>
                                <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                                  {report.title}
                                </p>
                                <p className="text-xs text-muted-foreground hidden lg:block line-clamp-1 max-w-xs">
                                  {report.description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 hidden sm:table-cell text-sm font-medium text-muted-foreground">
                            {report.category}
                          </td>
                          <td className="py-4 px-4">
                            <Badge
                              className={`${getStatusColor(report.status)} text-[10px] uppercase font-bold border-none`}
                              variant="secondary"
                            >
                              {getStatusText(report.status)}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">
                            {new Date(report.updatedAt).toLocaleDateString(
                              i18n.language,
                            )}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger
                                asChild
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/app/relatorios/${report.id}`);
                                  }}
                                >
                                  <Eye className="mr-2 h-4 w-4" />
                                  {t("reports.actions.view")}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Share2 className="mr-2 h-4 w-4" />
                                  {t("reports.actions.share")}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Download className="mr-2 h-4 w-4" />
                                  {t("reports.actions.download")}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsList;
