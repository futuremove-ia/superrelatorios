import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import BrandName from "@/components/BrandName";
import LogoIcon from "@/components/LogoIcon";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoIcon size="md" />
          <BrandName variant="header" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#recursos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("landing.nav_links.features")}
          </a>
          <a
            href="#como-funciona"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("landing.nav_links.how_it_works")}
          </a>
          <a
            href="#precos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("landing.nav_links.pricing")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle variant="ghost" size="sm" className="mr-2" />
          <Button
            variant="accent"
            className="font-semibold hidden sm:inline-flex"
            asChild
          >
            <Link to={`/${i18n.language}/app/reports/new`}>
              {t("landing.nav_links.cta")}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={t("landing.nav_links.aria_menu")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#recursos"
                  className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                >
                  {t("landing.nav_links.features")}
                </a>
                <a
                  href="#como-funciona"
                  className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                >
                  {t("landing.nav_links.how_it_works")}
                </a>
                <a
                  href="#precos"
                  className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                >
                  {t("landing.nav_links.pricing")}
                </a>
                <Button variant="accent" className="mt-4" asChild>
                  <Link to={`/${i18n.language}/app/reports/new`}>
                    {t("landing.nav_links.cta")}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
