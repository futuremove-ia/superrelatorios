import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";


const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();


  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">{t('errors.not_found_title')}</h2>
        <p className="text-muted-foreground mb-8">
          {t('errors.not_found_desc')}
        </p>
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            {t('errors.return_home')}
          </Link>
        </Button>
      </div>
    </div>
  );

};

export default NotFound;
