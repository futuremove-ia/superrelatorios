import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Souza",
      role: "Diretora Financeira",
      company: "TechStart Soluções",
      content: "Em 10 minutos eu gerou um relatório que levaria horas. A clareza do Resumo Executivo é absurda.",
      rating: 5,
    },
    {
      name: "Rafael Lima", 
      role: "COO",
      company: "InovaLogistics",
      content: "A equipe entendeu rapidamente o que fazer. Virou ritual semanal analisar os KPIs gerados.",
      rating: 5,
    },
    {
      name: "Marina Costa",
      role: "Fundadora",
      company: "Verde & Sustentável",
      content: "Usei para apresentar resultados a investidores. Ganho tempo e passei profissionalismo.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empresários que já testaram
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;