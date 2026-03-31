import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

const practices = [
  {
    category: 'Consistência Visual',
    items: [
      { name: 'Cores consistentes com tokens semânticos', status: 'required' },
      { name: 'Espaçamento uniforme usando escala definida', status: 'required' },
      { name: 'Tipografia padronizada com hierarquia clara', status: 'required' },
      { name: 'Bordas e sombras consistentes', status: 'required' },
      { name: 'Estados interativos bem definidos', status: 'required' },
    ]
  },
  {
    category: 'Performance',
    items: [
      { name: 'CSS mínimo - use apenas estilos necessários', status: 'recommended' },
      { name: 'Componentes lazy - carregue sob demanda', status: 'recommended' },
      { name: 'Imagens otimizadas (WebP, AVIF)', status: 'recommended' },
      { name: 'Fontes otimizadas com font-display: swap', status: 'recommended' },
      { name: 'Animações suaves (transform, opacity)', status: 'recommended' },
    ]
  },
  {
    category: 'Acessibilidade (WCAG 2.1 AA)',
    items: [
      { name: 'Contraste mínimo 4.5:1 para texto normal', status: 'required' },
      { name: 'Navegação por teclado para todos elementos', status: 'required' },
      { name: 'ARIA labels para elementos interativos', status: 'required' },
      { name: 'Skip links para navegação rápida', status: 'recommended' },
      { name: 'Leitores de tela compatíveis', status: 'required' },
    ]
  },
  {
    category: 'Manutenção',
    items: [
      { name: 'SemVer para componentes (major.minor.patch)', status: 'recommended' },
      { name: 'Changelog para mudanças significativas', status: 'recommended' },
      { name: 'Deprecation notice para componentes antigos', status: 'recommended' },
      { name: 'Migration guide para breaking changes', status: 'recommended' },
    ]
  },
];

const statusIcons = {
  required: <CheckCircle2 className="h-4 w-4 text-green-500" />,
  recommended: <Circle className="h-4 w-4 text-blue-500" />,
};

const statusLabels = {
  required: <Badge variant="default" className="text-xs">Obrigatório</Badge>,
  recommended: <Badge variant="secondary" className="text-xs">Recomendado</Badge>,
};

export function BestPracticesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Melhores Práticas</h1>
        <p className="text-muted-foreground mt-2">
          Checklists e recomendações para implementação consistente
        </p>
      </div>

      <div className="grid gap-6">
        {practices.map((practice) => (
          <Card key={practice.category}>
            <CardHeader>
              <CardTitle>{practice.category}</CardTitle>
              <CardDescription>
                {practice.items.filter(i => i.status === 'required').length} obrigatórios,{' '}
                {practice.items.filter(i => i.status === 'recommended').length} recomendados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {practice.items.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {statusIcons[item.status as keyof typeof statusIcons]}
                      <span className="text-sm">{item.name}</span>
                    </div>
                    {statusLabels[item.status as keyof typeof statusLabels]}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle>Recursos e Ferramentas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium mb-2">Ferramentas de Design</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Figma — Design e prototipagem</li>
                <li>Storybook — Documentação de componentes</li>
                <li>Chromatic — Visual testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Ferramentas de Validação</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>WAVE — Teste de acessibilidade</li>
                <li>Color Contrast Checker — Contraste</li>
                <li>Lighthouse — Performance e A11y</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Recursos de Aprendizado</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Material Design — Guidelines Google</li>
                <li>Apple HIG — Guidelines Apple</li>
                <li>A11y Project — Recursos de acessibilidade</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BestPracticesSection;
