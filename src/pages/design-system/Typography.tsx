import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const fontFamilies = [
  { name: 'Montserrat', role: 'Headings', weights: '600-700', usage: 'Títulos e headings' },
  { name: 'Inter', role: 'Body & UI', weights: '400-600', usage: 'Texto corpo e elementos de UI' },
  { name: 'JetBrains Mono', role: 'Code', weights: '400', usage: 'Código e elementos técnicos' },
];

const typeScale = [
  { name: 'xs', size: '0.75rem', px: '12px', usage: 'Legends, captions' },
  { name: 'sm', size: '0.875rem', px: '14px', usage: 'Secondary text, labels' },
  { name: 'base', size: '1rem', px: '16px', usage: 'Body text default' },
  { name: 'lg', size: '1.125rem', px: '18px', usage: 'Lead paragraphs' },
  { name: 'xl', size: '1.25rem', px: '20px', usage: 'Small headings' },
  { name: '2xl', size: '1.5rem', px: '24px', usage: 'Section headings' },
  { name: '3xl', size: '1.875rem', px: '30px', usage: 'Page headings' },
  { name: '4xl', size: '2.25rem', px: '36px', usage: 'Hero headings' },
];

const headings = [
  { level: 'H1', class: 'text-4xl font-bold', sample: 'Título Principal' },
  { level: 'H2', class: 'text-3xl font-semibold', sample: 'Seção Principal' },
  { level: 'H3', class: 'text-2xl font-medium', sample: 'Subseção' },
  { level: 'H4', class: 'text-xl font-medium', sample: 'Título Secundário' },
  { level: 'H5', class: 'text-lg font-medium', sample: 'Título Terciário' },
  { level: 'H6', class: 'text-base font-medium', sample: 'Título Quaternário' },
];

export function TypographySection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tipografia</h1>
        <p className="text-muted-foreground mt-2">
          Sistema tipográfico completo com fontes, escalas e hierarquia visual
        </p>
      </div>

      {/* Font Families */}
      <Card>
        <CardHeader>
          <CardTitle>Famílias de Fontes</CardTitle>
          <CardDescription>Fontes utilizadas no sistema de design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {fontFamilies.map((font) => (
              <div key={font.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold text-lg" style={{ fontFamily: font.name }}>
                    {font.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{font.role} — {font.usage}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Pesos</p>
                  <p className="text-sm text-muted-foreground">{font.weights}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Type Scale */}
      <Card>
        <CardHeader>
          <CardTitle>Escala Tipográfica</CardTitle>
          <CardDescription>Tamanhos de fonte definidos em rem para acessibilidade</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {typeScale.map((size) => (
              <div key={size.name} className="flex items-center gap-4">
                <div className="w-20 text-sm font-mono text-muted-foreground">{size.name}</div>
                <div className={`text-${size.name} flex-1`}>
                  The quick brown fox
                </div>
                <div className="text-sm text-muted-foreground w-24">{size.size}</div>
                <div className="text-sm text-muted-foreground w-16">{size.px}</div>
                <div className="text-sm text-muted-foreground flex-1">{size.usage}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Headings */}
      <Card>
        <CardHeader>
          <CardTitle>Hierarquia de Títulos</CardTitle>
          <CardDescription>Estrutura semântica de headings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {headings.map((heading) => (
              <div key={heading.level} className="border-b pb-4 last:border-0">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-mono text-muted-foreground w-12">{heading.level}</span>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{heading.class}</code>
                </div>
                <div className={heading.class}>
                  {heading.sample}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Font Weights */}
      <Card>
        <CardHeader>
          <CardTitle>Pesos da Fonte</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="font-light text-lg">Light (300) — Subtítulos e textos decorativos</p>
            <p className="font-normal text-lg">Normal (400) — Texto corpo padrão</p>
            <p className="font-medium text-lg">Medium (500) — Ênfase e labels</p>
            <p className="font-semibold text-lg">Semibold (600) — Subtítulos e headings</p>
            <p className="font-bold text-lg">Bold (700) — Títulos e destaques</p>
          </div>
        </CardContent>
      </Card>

      {/* Usage Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Regras de Uso</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="font-semibold">Headings:</span>
              <span className="text-muted-foreground">Montserrat, pesos 600-700</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">Body text:</span>
              <span className="text-muted-foreground">Inter, peso 400</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">UI elements:</span>
              <span className="text-muted-foreground">Inter, pesos 500-600</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-semibold">Code:</span>
              <span className="text-muted-foreground">JetBrains Mono, peso 400</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default TypographySection;
