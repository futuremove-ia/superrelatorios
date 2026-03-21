import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Settings, Download, TrendingUp, Target, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: t('landing.how_it_works.steps.upload.title'),
      description: t('landing.how_it_works.steps.upload.desc'),
    },
    {
      step: 2, 
      icon: Settings,
      title: t('landing.how_it_works.steps.target.title'),
      description: t('landing.how_it_works.steps.target.desc'),
    },
    {
      step: 3,
      icon: Download,
      title: t('landing.how_it_works.steps.receive.title'),
      description: t('landing.how_it_works.steps.receive.desc'),
    },
  ];


  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('landing.how_it_works.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('landing.how_it_works.subtitle')}
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center border-0 bg-card hover:shadow-lg transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl text-primary font-semibold mb-2">Passo {step.step}</h3>
                  <h4 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h4>
                </div>

                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Start Actions */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            {t('landing.how_it_works.quick_start.title')}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-hover text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('landing.how_it_works.quick_start.exec.title')}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('landing.how_it_works.quick_start.exec.desc')}
                </p>
                <Button variant="default" size="sm" asChild className="w-full">
                  <Link to="/app/novo-relatorio?template=executivo">
                    {t('landing.how_it_works.quick_start.cta')}
                  </Link>
                </Button>

              </CardContent>
            </Card>

            <Card className="card-hover text-center border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('landing.how_it_works.quick_start.sales.title')}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('landing.how_it_works.quick_start.sales.desc')}
                </p>
                <Button variant="default" size="sm" asChild className="w-full">
                  <Link to="/app/novo-relatorio?template=vendas">
                    {t('landing.how_it_works.quick_start.cta')}
                  </Link>
                </Button>

              </CardContent>
            </Card>

            <Card className="card-hover text-center border-0 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileSpreadsheet className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('landing.how_it_works.quick_start.full.title')}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('landing.how_it_works.quick_start.full.desc')}
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/app/novo-relatorio">
                    {t('landing.how_it_works.quick_start.cta')}
                  </Link>
                </Button>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;