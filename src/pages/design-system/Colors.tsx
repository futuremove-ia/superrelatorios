import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Check } from 'lucide-react';

const colorGroups = [
  {
    name: 'Primárias',
    colors: [
      { name: 'Primary', hsl: '220 90% 56%', hex: '#2563eb', css: '--color-primary', usage: 'Ações principais, botões primários' },
      { name: 'Primary Foreground', hsl: '210 40% 98%', hex: '#f8fafc', css: '--color-primary-foreground', usage: 'Texto sobre fundo primário' },
      { name: 'Secondary', hsl: '210 40% 96%', hex: '#f1f5f9', css: '--color-secondary', usage: 'Fundos secundários, cards' },
      { name: 'Secondary Foreground', hsl: '222.2 84% 4.9%', hex: '#0f172a', css: '--color-secondary-foreground', usage: 'Texto sobre fundo secundário' },
    ]
  },
  {
    name: 'Semânticas',
    colors: [
      { name: 'Success', hsl: '142 76% 36%', hex: '#16a34a', css: '--color-success', usage: 'Estados de sucesso, confirmações' },
      { name: 'Warning', hsl: '38 92% 50%', hex: '#f59e0b', css: '--color-warning', usage: 'Alertas, avisos' },
      { name: 'Destructive', hsl: '0 84% 60%', hex: '#ef4444', css: '--color-destructive', usage: 'Erros, ações destrutivas' },
      { name: 'Info', hsl: '199 89% 48%', hex: '#0ea5e9', css: '--color-info', usage: 'Informações, dicas' },
    ]
  },
  {
    name: 'Neutras',
    colors: [
      { name: 'Muted', hsl: '210 40% 96%', hex: '#f1f5f9', css: '--color-muted', usage: 'Fundos neutros' },
      { name: 'Muted Foreground', hsl: '215.4 16.3% 46.9%', hex: '#64748b', css: '--color-muted-foreground', usage: 'Texto secundário' },
      { name: 'Border', hsl: '214.3 31.8% 91.4%', hex: '#e2e8f0', css: '--color-border', usage: 'Bordas, divisores' },
      { name: 'Input', hsl: '214.3 31.8% 91.4%', hex: '#e2e8f0', css: '--color-input', usage: 'Campos de input' },
      { name: 'Ring', hsl: '222.2 84% 4.9%', hex: '#020617', css: '--color-ring', usage: 'Focus rings' },
    ]
  },
];

function ColorSwatch({ color }: { color: typeof colorGroups[0]['colors'][0] }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group">
      <div 
        className="h-20 rounded-lg shadow-sm mb-3 relative overflow-hidden cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor: color.hex }}
        onClick={() => copyToClipboard(color.hex)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          {copied ? <Check className="w-6 h-6 text-white" /> : <Copy className="w-6 h-6 text-white" />}
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-medium text-sm">{color.name}</p>
        <p className="text-xs text-muted-foreground font-mono">{color.hsl}</p>
        <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
        <p className="text-xs text-muted-foreground">{color.usage}</p>
      </div>
    </div>
  );
}

export function ColorsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Paleta de Cores</h1>
        <p className="text-muted-foreground mt-2">
          Sistema de cores baseado em HSL com tokens semânticos para consistência visual
        </p>
      </div>

      <Tabs defaultValue="Primárias" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {colorGroups.map((group) => (
            <TabsTrigger key={group.name} value={group.name}>
              {group.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {colorGroups.map((group) => (
          <TabsContent key={group.name} value={group.name} className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.colors.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Uso de Cores Semânticas</CardTitle>
          <CardDescription>
            Classes CSS para aplicar cores consistentemente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-primary text-primary-foreground">
              <code className="text-sm">bg-primary text-primary-foreground</code>
              <span className="text-sm ml-auto">Primário</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary text-secondary-foreground">
              <code className="text-sm">bg-secondary text-secondary-foreground</code>
              <span className="text-sm ml-auto">Secundário</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-200">
              <code className="text-sm">bg-success text-success-foreground</code>
              <span className="text-sm ml-auto">Sucesso</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-yellow-100 text-yellow-800 border border-yellow-200">
              <code className="text-sm">bg-warning text-warning-foreground</code>
              <span className="text-sm ml-auto">Alerta</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-red-100 text-red-800 border border-red-200">
              <code className="text-sm">bg-destructive text-destructive-foreground</code>
              <span className="text-sm ml-auto">Erro</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regras de Uso</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">NUNCA</span>
              <span>use cores diretas (hex, rgb) - sempre use tokens semânticos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">SEMPRE</span>
              <span>use formato HSL para consistência</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">MANTENHA</span>
              <span>contraste mínimo de 4.5:1 para texto normal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">TESTE</span>
              <span>em ferramentas online para daltonismo</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default ColorsSection;
