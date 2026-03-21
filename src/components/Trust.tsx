import { Card } from "@/components/ui/card";
import { Shield, Users, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";


const Trust = () => {
  const { t } = useTranslation();
  const trustPillars = [
    {
      icon: Shield,
      title: t('landing.trust_section.items.privacy.title'),
      description: t('landing.trust_section.items.privacy.desc'),
      highlight: t('landing.trust_section.items.privacy.tag')
    },
    {
      icon: Users,
      title: t('landing.trust_section.items.support.title'),
      description: t('landing.trust_section.items.support.desc'),
      highlight: t('landing.trust_section.items.support.tag')
    },
    {
      icon: MapPin,
      title: t('landing.trust_section.items.roadmap.title'),
      description: t('landing.trust_section.items.roadmap.desc'),
      highlight: t('landing.trust_section.items.roadmap.tag')
    },
  ];


  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('landing.trust_section.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('landing.trust_section.subtitle')}
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPillars.map((pillar, index) => (
            <Card key={index} className="p-8 text-center bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                  {pillar.highlight}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;