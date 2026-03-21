import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Target, FileText, Eye, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";


const Benefits = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: Clock,
      title: t('landing.benefits.items.speed.title'),
      description: t('landing.benefits.items.speed.desc'),
    },
    {
      icon: TrendingUp,
      title: t('landing.benefits.items.action.title'),
      description: t('landing.benefits.items.action.desc'),
    },
    {
      icon: Target,
      title: t('landing.benefits.items.design.title'),
      description: t('landing.benefits.items.design.desc'),
    },
    {
      icon: FileText,
      title: t('landing.benefits.items.viz.title'),
      description: t('landing.benefits.items.viz.desc'),
    },
    {
      icon: Eye,
      title: t('landing.benefits.items.narrative.title'),
      description: t('landing.benefits.items.narrative.desc'),
    },
    {
      icon: Lock,
      title: t('landing.benefits.items.security.title'),
      description: t('landing.benefits.items.security.desc'),
    },
  ];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('landing.benefits.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('landing.benefits.subtitle')}
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;