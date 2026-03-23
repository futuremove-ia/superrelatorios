import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: t('landing.pricing.plans.free.name'),
      price: "R$ 0",
      period: t('landing.pricing.plans.free.period'),
      description: t('landing.pricing.plans.free.desc'),
      features: Array.isArray(t('landing.pricing.plans.free.features')) 
        ? t('landing.pricing.plans.free.features') 
        : [],
      cta: t('landing.pricing.plans.free.cta'),
      highlighted: false,
      href: "/app/novo-relatorio",
    },
    {
      name: t('landing.pricing.plans.pro.name'),
      price: "R$ 59",
      period: t('landing.pricing.plans.pro.period'),
      description: t('landing.pricing.plans.pro.desc'),
      features: Array.isArray(t('landing.pricing.plans.pro.features')) 
        ? t('landing.pricing.plans.pro.features') 
        : [],
      cta: t('landing.pricing.plans.pro.cta'),
      highlighted: true,
      href: "/app/novo-relatorio",
    },
    {
      name: t('landing.pricing.plans.business.name'),
      price: "R$ 149",
      period: t('landing.pricing.plans.business.period'),
      description: t('landing.pricing.plans.business.desc'),
      features: Array.isArray(t('landing.pricing.plans.business.features')) 
        ? t('landing.pricing.plans.business.features') 
        : [],
      cta: t('landing.pricing.plans.business.cta'),
      highlighted: false,
      href: "mailto:contato@superrelatorios.com.br?subject=Plano%20Business",
    },
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('landing.pricing.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('landing.pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-6 sm:p-8 border-2 transition-all duration-300 ${
              plan.highlighted 
                ? 'border-accent bg-card shadow-xl relative' 
                : 'border-border bg-card hover:border-primary/20 hover:shadow-lg'
            }`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {t('landing.pricing.recommended')}
                </div>
              )}

              <div className="text-center mb-8">
                <div className="mb-2">
                  <span className="text-sm text-primary font-semibold">{plan.description}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 sm:space-y-4 mb-8">
                {Array.isArray(plan.features) && plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "accent" : "outline"} 
                className="w-full"
                size="lg"
                asChild
              >
                <Link to={plan.href}>{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
