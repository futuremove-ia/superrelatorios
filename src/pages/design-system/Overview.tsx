import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Palette,
  Type,
  Layout,
  Component,
  Sparkles,
  CheckCircle2,
  Eye,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Princípios',
    description: 'Os 4 pilares fundamentais do nosso design system',
    icon: Sparkles,
    href: '/design-system/principles',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Identidade Visual',
    description: 'Logo, cores, tipografia e elementos visuais',
    icon: Eye,
    href: '/design-system/identity',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Componentes',
    description: 'Biblioteca completa de componentes UI reutilizáveis',
    icon: Component,
    href: '/design-system/components/ui',
    color: 'bg-green-100 text-green-700',
  },
  {
    title: 'Diretrizes',
    description: 'Regras e padrões para uso consistente',
    icon: BookOpen,
    href: '/design-system/guidelines',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    title: 'Melhores Práticas',
    description: 'Checklists e recomendações de implementação',
    icon: CheckCircle2,
    href: '/design-system/best-practices',
    color: 'bg-teal-100 text-teal-700',
  },
];

const stats = [
  { label: 'Componentes UI', value: '40+', icon: Component },
  { label: 'Cores', value: '20+', icon: Palette },
  { label: 'Tokens', value: '100+', icon: Type },
  { label: 'Ícones', value: '300+', icon: Layout },
];

export function DesignSystemOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Palette className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
            <p className="text-muted-foreground">Sistema de Design SuperRelatórios</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary">v2.0</Badge>
          <Badge variant="outline">Status: Approved</Badge>
          <span className="text-sm text-muted-foreground">Última atualização: 22/03/2026</span>
        </div>
      </div>

      <Separator />

      {/* Description */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground leading-relaxed">
          O Sistema de Design SuperRelatórios é a fundação visual que garante consistência, 
          acessibilidade e profissionalismo em todos os pontos de contato da plataforma. 
          Este guia define princípios, componentes e diretrizes para criação de interfaces 
          coesas e escaláveis.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-l-4 border-l-primary">
            <CardContent className="p-4 flex items-center gap-3">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sections Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Seções</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link key={section.title} to={section.href} className="block">
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${section.color}`}>
                    <section.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-primary font-medium">
                    Explorar
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle>Começando</CardTitle>
          <CardDescription>
            Como usar o Design System em seus projetos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">1. Importe os componentes</p>
            <pre className="bg-background rounded-lg p-3 text-xs overflow-x-auto">
              <code>{`import { Button, Card, Input } from '@/components/ui';`}</code>
            </pre>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">2. Use os tokens de design</p>
            <pre className="bg-background rounded-lg p-3 text-xs overflow-x-auto">
              <code>{`<div className="bg-primary text-primary-foreground p-4 rounded-lg">`}</code>
            </pre>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">3. Siga as diretrizes</p>
            <p className="text-sm text-muted-foreground">
              Consulte as diretrizes de uso para garantir consistência visual.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DesignSystemOverview;
