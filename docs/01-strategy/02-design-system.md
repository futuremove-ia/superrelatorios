# 🎨 Sistema de Design SuperRelatórios

## Visão Geral

O Sistema de Design SuperRelatórios é a fundação visual que garante consistência, acessibilidade e profissionalismo em todos os pontos de contato da plataforma. Este documento define princípios, componentes e diretrizes para criação de interfaces coesas e escaláveis.

## Contexto e Importância

Um sistema de design robusto é essencial para:
- **Consistência visual** em toda a plataforma
- **Eficiência no desenvolvimento** com componentes reutilizáveis
- **Experiência do usuário** otimizada e intuitiva
- **Escalabilidade** para novas features e mercados
- **Acessibilidade** para todos os usuários

## Princípios Fundamentais

### 🎯 1. Clareza e Simplicidade
- **Menos é mais:** Interfaces limpas e focadas
- **Hierarquia visual:** Informações organizadas por importância
- **Linguagem universal:** Ícones e termos compreensíveis

### 🎨 2. Identidade Visual Forte
- **Reconhecimento imediato:** Logo e cores únicas
- **Profissionalismo:** Design corporativo e confiável
- **Memorabilidade:** Elementos marcantes e distintos

### ♿ 3. Acessibilidade Universal
- **WCAG 2.1 AA:** Conformidade com padrões internacionais
- **Contraste adequado:** Leitura facilitada para todos
- **Navegação por teclado:** Acesso sem mouse
- **Leitores de tela:** Compatibilidade completa

### 📱 4. Mobile-First
- **Design responsivo:** Adaptação a todos os dispositivos
- **Toque otimizado:** Interações intuitivas em mobile
- **Performance leve:** Carregamento rápido em qualquer conexão

## Identidade Visual

### 🎯 Logomark

#### LogoIcon
```typescript
interface LogoIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'monochrome' | 'white';
  className?: string;
}
```

#### BrandName
```typescript
interface BrandNameProps {
  variant?: 'header' | 'body' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

#### Regras de Uso
- **"Super"** nunca em negrito
- **"Relatórios"** sempre em negrito
- **Espaçamento consistente:** 0.25em entre palavras
- **Proporção fixa:** Altura = 2.5 × largura do logotipo

### 🎨 Paleta de Cores

#### Cores Primárias
```css
:root {
  /* Brand Colors */
  --color-primary: 220 90% 56%;      /* hsl(220, 90%, 56%) - Azul principal */
  --color-primary-foreground: 210 40% 98%; /* hsl(210, 40%, 98%) - Texto em primário */
  
  /* Secondary Colors */
  --color-secondary: 210 40% 96%;    /* hsl(210, 40%, 96%) - Fundo secundário */
  --color-secondary-foreground: 222.2 84% 4.9%; /* hsl(222.2, 84%, 4.9%) - Texto secundário */
  
  /* Accent Colors */
  --color-accent: 142 76% 36%;       /* hsl(142, 76%, 36%) - Verde destaque */
  --color-accent-foreground: 355 70% 93%; /* hsl(355, 70%, 93%) - Texto em destaque */
}
```

#### Cores Semânticas
```css
:root {
  /* Status Colors */
  --color-success: 142 76% 36%;       /* Verde para sucesso */
  --color-warning: 38 92% 50%;        /* Amarelo para alerta */
  --color-destructive: 0 84% 60%;      /* Vermelho para erro */
  --color-info: 199 89% 48%;          /* Azul para informação */
  
  /* Neutral Colors */
  --color-muted: 210 40% 96%;        /* Cinza claro */
  --color-muted-foreground: 215.4 16.3% 46.9%; /* Cinza médio */
  --color-border: 214.3 31.8% 91.4%; /* Borda sutil */
  --color-input: 214.3 31.8% 91.4%;   /* Input background */
  --color-ring: 222.2 84% 4.9%;       /* Focus ring */
}
```

#### Regras de Uso
- **NUNCA usar cores diretas** - Use sempre tokens semânticos
- **SEMPRE usar HSL** - Formato hsl(hue, saturation, lightness)
- **Contraste mínimo:** 4.5:1 para texto normal
- **Teste de daltonismo:** Verificar em ferramentas online

### 📏 Tipografia

#### Font Families
```css
:root {
  --font-heading: 'Montserrat', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

#### Escala Tipográfica
```css
:root {
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
}
```

#### Pesos e Estilos
```css
:root {
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 900;
}
```

#### Regras de Uso
- **Headings:** Montserrat, pesos 600-700
- **Body text:** Inter, peso 400
- **UI elements:** Inter, pesos 500-600
- **Code:** JetBrains Mono, peso 400

## Componentes Fundamentais

### 🎨 Color System

#### Componente de Cor
```typescript
interface ColorSystemProps {
  bg?: string;
  color?: string;
  borderColor?: string;
  ringColor?: string;
}
```

#### Implementação
```typescript
const ColorSystem: React.FC<ColorSystemProps> = ({ bg, color, borderColor, ringColor }) => {
  const styles = {
    backgroundColor: bg ? `hsl(${bg})` : undefined,
    color: color ? `hsl(${color})` : undefined,
    borderColor: borderColor ? `hsl(${borderColor})` : undefined,
    outlineColor: ringColor ? `hsl(${ringColor})` : undefined,
  };
  
  return <div style={styles} />;
};
```

### 📐 Layout System

#### Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }
```

#### Spacing System
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}
```

### 🎯 Componentes UI

#### Buttons
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}
```

#### Cards
```typescript
interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  children: React.ReactNode;
}
```

#### Forms
```typescript
interface FormFieldProps {
  label?: string;
  placeholder?: string;
  error?: string;
  helper?: string;
  required?: boolean;
  disabled?: boolean;
}
```

## Diretrizes de Uso

### 🎯 1. Hierarquia Visual

#### Estrutura de Página
```html
<!-- Header -->
<header class="bg-primary text-primary-foreground">
  <nav class="container flex items-center justify-between h-16">
    <!-- Logo e navegação -->
  </nav>
</header>

<!-- Main Content -->
<main class="container py-8">
  <h1 class="text-4xl font-bold mb-6">Page Title</h1>
  <section class="space-y-6">
    <!-- Conteúdo principal -->
  </section>
</main>

<!-- Footer -->
<footer class="bg-secondary text-secondary-foreground mt-16">
  <div class="container py-8">
    <!-- Footer content -->
  </div>
</footer>
```

#### Níveis de Título
```html
<h1 class="text-4xl font-bold">Título Principal</h1>
<h2 class="text-3xl font-semibold">Seção Principal</h2>
<h3 class="text-2xl font-medium">Subseção</h3>
<h4 class="text-xl font-medium">Título Secundário</h4>
<h5 class="text-lg font-medium">Título Terciário</h5>
<h6 class="text-base font-medium">Título Quaternário</h6>
```

### 🎨 2. Uso de Cores

#### Mapeamento Semântico
```typescript
const colorMapping = {
  // Primary Actions
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  
  // Secondary Actions
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  
  // Success States
  success: 'bg-success text-success-foreground',
  
  // Error States
  error: 'bg-destructive text-destructive-foreground',
  
  // Warning States
  warning: 'bg-warning text-warning-foreground',
  
  // Information
  info: 'bg-info text-info-foreground',
  
  // Neutral Elements
  muted: 'bg-muted text-muted-foreground',
};
```

#### Exemplos de Aplicação
```html
<!-- Botão Primário -->
<button class="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
  Action Principal
</button>

<!-- Card de Alerta -->
<div class="bg-warning text-warning-foreground p-4 rounded-md border border-warning/20">
  <h3 class="font-semibold mb-2">Atenção</h3>
  <p>Mensagem de alerta importante</p>
</div>

<!-- Status Indicator -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success text-success-foreground">
  Ativo
</span>
```

### 📱 3. Design Responsivo

#### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;   /* Small screens */
  --breakpoint-md: 768px;   /* Medium screens */
  --breakpoint-lg: 1024px;  /* Large screens */
  --breakpoint-xl: 1280px;  /* Extra large screens */
  --breakpoint-2xl: 1536px; /* 2X large screens */
}
```

#### Mobile-First Approach
```css
/* Base (Mobile) */
.component {
  padding: 1rem;
  font-size: 0.875rem;
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    padding: 1.5rem;
    font-size: 1rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: 2rem;
    font-size: 1.125rem;
  }
}
```

### ♿ 4. Acessibilidade

#### Contraste de Cores
```css
.text-primary {
  color: hsl(210, 40%, 98%); /* Branco em fundo azul escuro */
}

.text-secondary {
  color: hsl(222.2, 84%, 4.9%); /* Preto em fundo claro */
}

.text-muted {
  color: hsl(215.4, 16.3%, 46.9%); /* Cinza médio */
}
```

#### Focus States
```css
.focus-visible:focus {
  outline: 2px solid hsl(222.2, 84%, 4.9%);
  outline-offset: 2px;
  border-radius: 0.25rem;
}
```

#### Screen Readers
```html
<!-- Semantic HTML -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
    <li><a href="/reports">Reports</a></li>
  </ul>
</nav>

<!-- ARIA Labels -->
<button aria-label="Close dialog" aria-describedby="dialog-description">
  <span aria-hidden="true">×</span>
</button>

<!-- Skip Links -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

## Implementação

### 🛠️ Ferramentas e Tecnologias

#### Stack de Design
- **Tailwind CSS:** Framework de utilitários
- **Radix UI:** Componentes acessíveis
- **Lucide React:** Biblioteca de ícones
- **Framer Motion:** Animações e transições

#### Configuração do Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // ... outras cores
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        // ... outros espaçamentos
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
```

### 📦 Estrutura de Componentes

#### Diretórios
```
src/
├── components/
│   ├── ui/              # Componentes base (shadcn/ui)
│   ├── forms/           # Componentes de formulário
│   ├── charts/          # Componentes de gráfico
│   └── layout/          # Componentes de layout
├── styles/
│   ├── globals.css      # Estilos globais
│   └── components.css  # Estilos específicos
└── lib/
    └── utils.ts        # Utilitários de design
```

#### Exemplo de Componente
```typescript
// src/components/ui/Button.tsx
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

## Melhores Práticas

### 🎯 1. Consistência Visual

#### Checklist de Componentes
- [ ] **Cores consistentes** com tokens semânticos
- [ ] **Espaçamento uniforme** usando escala definida
- [ ] **Tipografia padronizada** com hierarquia clara
- [ ] **Bordas e sombras** consistentes
- [ ] **Estados interativos** bem definidos

### 📱 2. Performance

#### Otimização
- **CSS mínimo:** Use apenas estilos necessários
- **Componentes lazy:** Carregue componentes pesados sob demanda
- **Imagens otimizadas:** Use formatos modernos (WebP, AVIF)
- **Fontes otimizadas:** Use font-display: swap
- **Animações suaves:** Prefira transform e opacity

### ♿ 3. Acessibilidade

#### WCAG 2.1 AA Checklist
- [ ] **Contraste mínimo 4.5:1** para texto normal
- [ ] **Navegação por teclado** para todos elementos
- [ ] **ARIA labels** para elementos interativos
- [ ] **Skip links** para navegação rápida
- [ ] **Leitores de tela** compatíveis

### 🔄 4. Manutenção

#### Versionamento
- **SemVer** para componentes (major.minor.patch)
- **Changelog** para mudanças significativas
- **Deprecation notice** para componentes antigos
- **Migration guide** para breaking changes

## Recursos e Ferramentas

### 🎨 Ferramentas de Design
- **Figma:** Design e prototipagem
- **Storybook:** Documentação de componentes
- **Chromatic:** Visual testing
- **Axe DevTools:** Teste de acessibilidade

### 📚 Recursos de Aprendizado
- **Material Design:** Diretrizes do Google
- **Apple HIG:** Guidelines da Apple
- **Microsoft Fluent:** Guidelines da Microsoft
- **A11y Project:** Recursos de acessibilidade

### 🔍 Ferramentas de Validação
- **WAVE:** Teste de acessibilidade
- **Color Contrast Checker:** Validação de contraste
- **Lighthouse:** Performance e acessibilidade
- **PageSpeed Insights:** Otimização de performance

---

## Considerações Importantes

### 🚀 Evolução do Sistema
- **Modularidade:** Componentes independentes e reutilizáveis
- **Extensibilidade:** Fácil adição de novos componentes
- **Consistência:** Manutenção de padrões visuais
- **Documentação:** Guia completo para desenvolvedores

### 🌍 Globalização
- **Cultura local:** Adaptação a diferentes mercados
- **Idiomas:** Suporte para múltiplos idiomas
- **Cores:** Consideração cultural de cores
- **Layout:** Adaptação a diferentes escritas (RTL/LTR)

### 📊 Métricas de Sucesso
- **Adoção:** 90%+ de uso dos componentes padrão
- **Consistência:** 95%+ de conformidade visual
- **Performance:** < 3s de carregamento
- **Acessibilidade:** 100% WCAG 2.1 AA compliance

---

*Última atualização: 22/03/2026*  
*Versão: 2.0*  
*Status: Approved*  
*Maintainer: Design System Team SuperRelatórios*
