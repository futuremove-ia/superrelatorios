import { Paper } from "@/components/ui/paper";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, PieChart, Download } from "lucide-react";
import { Link } from "react-router-dom";
import BrandName from "@/components/BrandName";
import { useTranslation } from "react-i18next";
import { newReportPath } from "@/lib/appPaths";

const ReportShowcase = () => {
  const { t, i18n } = useTranslation();
  const reportHref = newReportPath(i18n.language);
  return (
    <section id="exemplos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("landing.showcase.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("landing.showcase.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Portrait Report */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">
              {t("landing.showcase.portrait.title")}
            </h3>

            <Paper orientation="portrait" size="a4" padding="md">
              {/* Header */}
              <div className="border-b pb-3 mb-4 flex-shrink-0">
                <h4 className="text-lg font-bold text-primary">
                  {t("landing.showcase.portrait.header")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t("landing.showcase.portrait.analysis")}
                </p>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 min-h-0">
                <div className="bg-primary/5 p-3 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-semibold text-sm">
                      {t("landing.showcase.portrait.summary")}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {t("landing.showcase.portrait.summary_text")}
                  </div>
                </div>

                <div className="bg-accent/5 p-3 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="font-semibold text-sm">
                      {t("landing.showcase.portrait.metrics")}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-background p-2 rounded truncate">
                      {t("landing.showcase.portrait.revenue")}
                    </div>
                    <div className="bg-background p-2 rounded truncate">
                      {t("landing.showcase.portrait.growth")}
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-semibold text-sm">
                      {t("landing.showcase.portrait.dist")}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex-shrink-0">
                        {t("landing.showcase.portrait.southeast")}
                      </span>
                      <div className="w-16 h-2 bg-primary rounded flex-shrink-0"></div>
                      <span className="flex-shrink-0">45%</span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="flex-shrink-0">
                        {t("landing.showcase.portrait.south")}
                      </span>
                      <div className="w-12 h-2 bg-primary-dark rounded flex-shrink-0"></div>
                      <span className="flex-shrink-0">30%</span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="flex-shrink-0">
                        {t("landing.showcase.portrait.northeast")}
                      </span>
                      <div className="w-8 h-2 bg-accent rounded flex-shrink-0"></div>
                      <span className="flex-shrink-0">25%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t pt-3 mt-4 flex-shrink-0">
                <p className="text-xs text-muted-foreground text-center">
                  {t("landing.showcase.portrait.generated")} •{" "}
                  <BrandName variant="default" />
                </p>
              </div>
            </Paper>
          </div>

          {/* Landscape Report */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center">
              {t("landing.showcase.landscape.title")}
            </h3>

            <Paper orientation="landscape" size="a4" padding="md">
              {/* Header */}
              <div className="border-b pb-3 mb-4 flex-shrink-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-primary truncate">
                      {t("landing.showcase.landscape.header")}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {t("landing.showcase.landscape.subtitle")}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground flex-shrink-0 sm:text-right">
                    <div className="whitespace-nowrap">
                      {t("landing.showcase.landscape.generated_on", {
                        date: "31/01/24",
                      })}
                    </div>
                    <div className="whitespace-nowrap">
                      {t("landing.showcase.landscape.period", {
                        period: "Jan",
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 min-h-0 overflow-hidden">
                {/* KPIs */}
                <div className="space-y-3 min-h-0">
                  <h5 className="font-semibold text-sm text-foreground">
                    {t("landing.showcase.landscape.kpi_title")}
                  </h5>

                  <div className="space-y-2">
                    <div className="bg-primary/5 p-3 rounded overflow-hidden">
                      <div className="font-semibold text-xs truncate">
                        {t("landing.showcase.landscape.rev_total")}
                      </div>
                      <div className="text-lg font-bold text-primary truncate">
                        R$ 847K
                      </div>
                      <div className="text-xs text-accent truncate">
                        ↑ 12.5%
                      </div>
                    </div>

                    <div className="bg-accent/5 p-3 rounded overflow-hidden">
                      <div className="font-semibold text-xs truncate">
                        {t("landing.showcase.landscape.new_clients")}
                      </div>
                      <div className="text-lg font-bold text-accent truncate">
                        156
                      </div>
                      <div className="text-xs text-primary truncate">
                        ↑ 8.2%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Simulation */}
                <div className="space-y-3 min-h-0">
                  <h5 className="font-semibold text-sm text-foreground">
                    {t("landing.showcase.landscape.trend_title")}
                  </h5>

                  <div className="bg-muted/50 p-3 rounded h-24 sm:h-28 flex items-end justify-between gap-1 overflow-hidden">
                    {[40, 60, 35, 80, 65, 90, 75].map((height, i) => (
                      <div
                        key={i}
                        className="bg-primary rounded-t w-3 flex-shrink-0"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs text-center text-muted-foreground truncate">
                    Jan 1-31, 2024
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-3 min-h-0 md:col-span-2 lg:col-span-1">
                  <h5 className="font-semibold text-sm text-foreground">
                    {t("landing.showcase.landscape.ai_title")}
                  </h5>
                  <div className="space-y-2 overflow-hidden">
                    <div className="bg-accent/10 p-3 rounded border-l-2 border-accent overflow-hidden">
                      <div className="font-semibold text-xs truncate">
                        {t("landing.showcase.landscape.opportunity")}
                      </div>
                      <div className="text-xs leading-snug">
                        {t("landing.showcase.landscape.opp_text")}
                      </div>
                    </div>
                    <div className="bg-warning/10 p-3 rounded border-l-2 border-warning overflow-hidden">
                      <div className="font-semibold text-xs truncate">
                        {t("landing.showcase.landscape.attention")}
                      </div>
                      <div className="text-xs leading-snug">
                        {t("landing.showcase.landscape.att_text")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t pt-3 mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-2 flex-shrink-0">
                <span className="truncate text-center sm:text-left">
                  {t("landing.showcase.landscape.ai_footer")} •{" "}
                  <BrandName variant="default" />
                </span>
                <span className="whitespace-nowrap">
                  {t("landing.showcase.landscape.page_info", {
                    current: 1,
                    total: 3,
                  })}
                </span>
              </div>
            </Paper>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="accent"
            size="lg"
            className="text-lg px-8 py-4"
            asChild
          >
            <Link to={reportHref}>
              <Download className="w-5 h-5 mr-2" />
              {t("landing.showcase.cta")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReportShowcase;
