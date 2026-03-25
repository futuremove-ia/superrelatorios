import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BrandName from "@/components/BrandName";
import { useTranslation } from "react-i18next";
import { newReportPath } from "@/lib/appPaths";

const CTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("landing.cta.title")}
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("landing.cta.subtitle", {
              brand: <BrandName variant="default" />,
            })}
          </p>

          <Button
            variant="accent"
            size="lg"
            className="text-lg px-12 py-4 mb-8"
            asChild
          >
            <Link to={newReportPath(i18n.language)}>
              {t("landing.cta.button")}
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{t("landing.cta.features.no_card")}</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{t("landing.cta.features.cancel_anytime")}</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{t("landing.cta.features.fast_setup")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
