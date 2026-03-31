import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Palette, Accessibility, Smartphone } from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'Clareza e Simplicidade',
    description: 'Menos é mais. Interfaces limpas e focadas, com hierarquia visual clara e linguagem universal compreensível.',
    icon: Target,
    points: [
      'Interfaces limpas e focadas',
      'Hierarquia visual organizada por importância',
      'Ícones e termos compreensíveis',
      'Remoção de elementos desnecessários'
    ],
    color: 'bg-blue-500',
  },
  {
    number: '02',
    title: 'Identidade Visual Forte',
    description: 'Reconhecimento imediato através de logo e cores únicas, transmitindo profissionalismo e memorabilidade.',
    icon: Palette,
    points: [
      'Logo e cores distintivas',
      'Design corporativo e confiável',
      'Elementos marcantes e consistentes',
      'Presença de marca em todos os pontos de contato'
    ],
    color: 'bg-purple-500',
  },
  {
    number: '03',
    title: 'Acessibilidade Universal',
    description: 'Conformidade com WCAG 2.1 AA, garantindo que todos os usuários possam acessar e utilizar a plataforma.',
    icon: Accessibility,
    points: [
      'Conformidade WCAG 2.1 AA',
      'Contraste adequado para leitura',
      'Navegação completa por teclado',
      'Compatibilidade com leitores de tela'
    ],
    color: 'bg-green-500',
  },
  {
    number: '04',
    title: 'Mobile-First',
    description: 'Design responsivo que se adapta a todos os dispositivos, com interações otimizadas para touch e performance leve.',
    icon: Smartphone,
    points: [
      'Design responsivo em todos os breakpoints',
      'Interações otimizadas para touch',
      'Carregamento rápido em qualquer conexão',
      'Mobile-first como abordagem padrão'
    ],
    color: 'bg-orange-500',
  },
];

export function PrinciplesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Princípios Fundamentais</h1>
        <p className="text-muted-foreground mt-2">
          Os quatro pilares que sustentam todas as decisões de design do SuperRelatórios
        </p>
      </div>

      <div className="grid gap-6">
        {principles.map((principle) => (
          <Card key={principle.number} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className={`${principle.color} p-6 flex items-center justify-center md:w-48`}>
                <div className="text-center">
                  <principle.icon className="w-10 h-10 text-white mx-auto mb-2" />
                  <span className="text-4xl font-bold text-white/80">{principle.number}</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {principle.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${principle.color} mt-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PrinciplesSection;
