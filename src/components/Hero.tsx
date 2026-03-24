import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="min-h-[85vh] md:min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("landing.hero.title")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t("landing.hero.subtitle")}
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-8 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-white font-semibold">
              {t("landing.hero.badge")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="accent"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
              asChild
            >
              <Link
                to={`/${i18n.language}/app/reports/new?template=executive-quarterly`}
              >
                {t("landing.hero.cta_main")}
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("exemplos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play className="w-5 h-5 mr-2" />
              {t("landing.hero.cta_sec")}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{t("landing.hero.features.clicks")}</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{t("landing.hero.features.insights")}</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{t("landing.hero.features.security")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
