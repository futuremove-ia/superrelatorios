# SuperRelatórios Design System

## Overview
Este documento define o sistema de design completo para SuperRelatórios, garantindo consistência, acessibilidade e aparência profissional em todas as plataformas. Este sistema serve como base para todo o trabalho de desenvolvimento.

## Identidade Visual

### Logomarca

#### LogoIcon - Ícone da Marca
- **Componente**: `<LogoIcon size="sm|md|lg" />`
- **Design**: Gráfico de 3 barras (sem chip de fundo)
- **Cores**: 
  - Barra 1 (média): Primary blue `hsl(220, 91%, 51%)`
  - Barra 2 (baixa): Dark blue `hsl(220, 91%, 20%)`
  - Barra 3 (alta): Green `hsl(142, 76%, 36%)`
- **Tamanhos**:
  - `sm`: 24x24px (w-6 h-6)
  - `md`: 40x40px (w-10 h-10)
  - `lg`: 48x48px (w-12 h-12)
- **Acessibilidade**: Sempre com `aria-hidden="true"`

#### BrandName - Nome da Marca
- **Componente**: SEMPRE usar `<BrandName />` para consistência
- **Variantes**:
  - `variant="default"` - Fundos brancos/claros
  - `variant="on-blue"` - Fundos azuis
  - `variant="on-dark"` - Fundos azul escuro
  - `variant="header"` - Navegação do cabeçalho

#### Regras da Marca (CRÍTICO)
- **"Super"**: NUNCA negrito, cor varia conforme fundo
- **"Relatórios"**: SEMPRE `font-bold`, cor varia conforme fundo
- **SEM variantes chip** para website/app (apenas materiais de marketing)

#### Aplicações de Cor da Marca
```tsx
// Fundos brancos/claros
<BrandName variant="default" />
// Resultado: Super(preto) + Relatórios(azul negrito)

// Fundos azuis
<BrandName variant="on-blue" />
// Resultado: Super(azul escuro) + Relatórios(branco negrito)

// Fundos azul escuro
<BrandName variant="on-dark" />
// Resultado: Super(branco) + Relatórios(azul negrito)

// Cabeçalho
<BrandName variant="header" />
// Resultado: Super(preto) + Relatórios(azul negrito) com tamanho text-xl
```

## Paleta de Cores

### Cores Principais (Formato HSL)
```css
/* Cores Primárias */
--primary: 220 91% 51%;           /* Azul principal da marca */
--primary-dark: 220 91% 20%;      /* Azul escuro (cor do rodapé) */
--accent: 142 76% 36%;            /* Verde para CTAs */

/* Cores da Marca */
--brand-super: 0 0% 0%;           /* Preto para "Super" */
--brand-relatorios: 220 91% 51%;  /* Azul para "Relatórios" */

/* Cores Base */
--background: 0 0% 100%;          /* Fundo branco */
--foreground: 222 84% 4.9%;       /* Texto escuro */
--card: 0 0% 100%;                /* Fundos de cartões */
--border: 220 13% 91%;            /* Cor das bordas */
--muted-foreground: 220 8.9% 46.1%; /* Texto secundário */
```

### Variantes Modo Escuro
```css
.dark {
  --background: 222 84% 4.9%;      /* Fundo escuro */
  --foreground: 210 40% 98%;       /* Texto claro */
  --brand-super: 210 40% 98%;      /* Branco para "Super" no escuro */
  --card: 222 84% 4.9%;            /* Fundos de cartões escuros */
}
```

### Regras de Uso de Cores
- **NUNCA** usar cores diretas: `text-blue-500`, `bg-white`, `text-black`
- **SEMPRE** usar tokens semânticos: `text-primary`, `bg-background`, `text-foreground`
- **APENAS HSL**: Todas as cores devem estar em formato HSL para compatibilidade de tema
- **Design Tokens Primeiro**: Usar variáveis CSS de `index.css`

## Tipografia

### Famílias de Fontes
```css
font-heading: ['Montserrat', 'sans-serif']  /* Títulos e marca */
font-body: ['Inter', 'sans-serif']          /* Texto do corpo */
```

### Escala Tipográfica
```css
/* Títulos - Sempre usar font-heading */
h1: text-4xl md:text-6xl font-bold         /* Títulos principais */
h2: text-3xl md:text-4xl font-bold         /* Títulos de seção */
h3: text-xl md:text-2xl font-semibold      /* Subseções */
h4: text-lg md:text-xl font-semibold       /* Títulos de componentes */

/* Texto do Corpo - Sempre usar font-body */
p: text-base leading-relaxed               /* Texto regular */
small: text-sm                             /* Texto pequeno */
```

### Cores de Texto
```css
/* Texto primário */
text-foreground              /* Cor principal do texto */
text-muted-foreground        /* Texto secundário/auxiliar */

/* Cores da marca */
text-primary                 /* Azul da marca */
text-primary-dark            /* Azul escuro */
text-accent                  /* Verde para destaques */

/* Cores contextuais */
text-white                   /* Texto branco em fundos escuros */
text-white/70                /* Texto branco com opacidade */
```

## Sistema de Componentes

### Botões
```tsx
/* Ações Primárias */
<Button variant="default">Ação Primária</Button>

/* Ações Secundárias */
<Button variant="secondary">Ação Secundária</Button>

/* CTAs e Conversões */
<Button variant="accent">Call to Action</Button>

/* Ações Sutis */
<Button variant="ghost">Ação Sutil</Button>

/* Ações com Contorno */
<Button variant="outline">Ação com Contorno</Button>
```

### Cartões
```tsx
/* Cartão Padrão */
<Card className="border-0 bg-card hover:shadow-lg transition-all duration-300">

/* Cartão Interativo */
<Card className="hover:scale-105 transition-all duration-300">

/* Cartão com Ícone */
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

### Seções
```tsx
/* Seção Padrão */
<section className="py-20 bg-background">

/* Fundo Alternativo */
<section className="py-20 bg-secondary/30">

/* Fundo Primário */
<section className="py-20 bg-primary">
```

## Sistema de Layout

### Container e Espaçamento
```css
/* Containers */
.container                   /* Container de largura máxima com margens automáticas */
mx-auto px-4                 /* Centralizar com padding horizontal */

/* Ritmo Vertical */
py-20                        /* Padding de seção (80px top/bottom) */
mb-16                        /* Espaçamento principal de seção (64px) */
mb-6                         /* Espaçamento de elementos (24px) */
gap-8                        /* Gaps de grid/flex (32px) */

/* Padding de Cartões */
p-6                          /* Padding padrão de cartão (24px) */
p-8                          /* Padding grande de cartão (32px) */
```

### Grid Responsivo
```css
/* Grid Padrão */
grid md:grid-cols-3 gap-8    /* Grid de 3 colunas no desktop */
grid md:grid-cols-2 gap-6    /* Grid de 2 colunas no tablet */

/* Breakpoints Responsivos */
sm: 640px                    /* Dispositivos pequenos */
md: 768px                    /* Tablets */
lg: 1024px                   /* Laptops */
xl: 1280px                   /* Desktops */
2xl: 1536px                  /* Telas grandes */
```

## Navegação e Interação

### Cabeçalho
```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
```

### Navegação Mobile
- Usa componente `Sheet` para menu deslizante
- Ícone de hambúrguer no mobile (`md:hidden`)
- Links de navegação completos no sheet mobile

### Comportamento de Scroll
```css
/* Compensar cabeçalho fixo */
section {
  scroll-margin-top: 80px;
}
```

### Estados de Hover
```css
/* Efeitos de hover padrão */
hover:shadow-lg              /* Aumento de elevação */
hover:scale-105              /* Escala ligeiramente maior */
hover:text-primary           /* Mudança de cor */
transition-all duration-300  /* Transições suaves */
```

## Responsividade

### Abordagem Mobile-First
- Estilos base para mobile (320px+)
- Aprimoramento progressivo para telas maiores
- Elementos interativos touch-friendly (44px mínimo)

### Escalonamento Tipográfico
```css
/* Tamanhos de texto responsivos */
text-4xl md:text-6xl          /* Escalar para telas maiores */
text-xl md:text-2xl           /* Escalonamento proporcional */
```

### Adaptações de Layout
```css
/* Mobile para Desktop */
flex-col sm:flex-row          /* Empilhar no mobile, linha no desktop */
hidden md:flex                /* Ocultar no mobile, mostrar no desktop */
grid md:grid-cols-3           /* Coluna única mobile, 3 colunas desktop */
```

### Componentes Críticos Responsivos

#### ReportShowcase
```css
/* Grid responsivo para exemplos de relatório */
grid lg:grid-cols-2 gap-8 lg:gap-12    /* Uma coluna mobile, duas no desktop */

/* Padding responsivo */
p-4 lg:p-6                             /* Padding menor no mobile */

/* Grid interno responsivo */
grid-cols-1 md:grid-cols-3             /* Layout vertical no mobile */
```

---

## Sistema de Componente Paper

### Propósito
O componente Paper fornece um sistema consistente para exibir conteúdo tipo documento, especialmente relatórios, com proporções A4 adequadas e comportamento responsivo.

### Uso
```tsx
import { Paper } from "@/components/ui/paper";

// Documento A4 retrato
<Paper orientation="portrait" size="a4" padding="md">
  <div>Conteúdo do documento</div>
</Paper>

// Documento A4 paisagem  
<Paper orientation="landscape" size="a4" padding="lg">
  <div>Conteúdo do dashboard</div>
</Paper>
```

### Propriedades
- `orientation`: "portrait" | "landscape" (padrão: "portrait")
- `size`: "a4" | "letter" (padrão: "a4")
- `padding`: "none" | "sm" | "md" | "lg" (padrão: "md")
- `className`: Classes CSS adicionais

### Comportamento Responsivo
- **Mobile (< md)**: Usa fluxo de altura natural com alturas mínimas
- **Desktop (≥ md)**: Aplica proporções corretas para simulação de documento
- **A4 Retrato**: proporção 3:4.24
- **A4 Paisagem**: proporção 4.24:3

### Diretrizes de Conteúdo
- Use `flex-shrink-0` para cabeçalhos e rodapés
- Aplique `min-h-0` e `overflow-hidden` para áreas de conteúdo roláveis
- Use classe `truncate` para texto que pode transbordar
- Implemente grids responsivos: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Regras Críticas
1. **Nunca forçar proporções no mobile** - Deixe o conteúdo fluir naturalmente
2. **Sempre use componentes de marca semânticos** - `<BrandName variant="default" />`
3. **Aplique layouts flex adequados** - Estrutura cabeçalho, conteúdo (flex-1), rodapé
4. **Use espaçamento consistente** - Baseado na prop padding, espaçamento responsivo

### Estrutura Recomendada
```tsx
<Paper orientation="landscape" size="a4" padding="md">
  {/* Header - sempre flex-shrink-0 */}
  <div className="border-b pb-3 mb-4 flex-shrink-0">
    <h4 className="text-lg font-bold text-primary truncate">Título</h4>
  </div>
  
  {/* Content - sempre flex-1 com min-h-0 */}
  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 min-h-0 overflow-hidden">
    <div className="space-y-3 min-h-0">
      <div className="bg-primary/5 p-3 rounded overflow-hidden">
        <div className="font-semibold text-xs truncate">Conteúdo</div>
      </div>
    </div>
  </div>
  
  {/* Footer - sempre flex-shrink-0 */}
  <div className="border-t pt-3 mt-4 flex-shrink-0">
    <span className="text-xs text-muted-foreground">
      <BrandName variant="default" />
    </span>
  </div>
</Paper>
```

## Acessibilidade

### Contraste de Cores
- **Mínimo 4.5:1** para texto normal
- **Mínimo 3:1** para texto grande
- Todas as cores testadas em modos claro e escuro
- Texto branco em azul primário: compatível com WCAG AA

### Estados de Foco
```css
/* Indicadores de foco */
focus:ring-2 focus:ring-primary     /* Anéis de foco personalizados */
focus:outline-none                  /* Remover contorno padrão */
```

### HTML Semântico
- Hierarquia adequada de títulos (h1 → h2 → h3 → h4)
- `aria-labels` para botões apenas com ícones
- `aria-hidden="true"` para ícones decorativos
- Elementos semânticos: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`

### Idioma
```html
<html lang="pt-BR">           /* Português (Brasil) */
```

## Performance

### Animações
```css
/* Animações otimizadas */
transition-all duration-300   /* Suaves mas rápidas */
transform                     /* Usar transform para performance */
opacity                       /* Usar opacity para performance */
```

### Estados de Carregamento
- Usar componentes `skeleton` para estados de carregamento
- Lazy loading para imagens
- Aprimoramento progressivo para elementos interativos

## Diretrizes de Conteúdo

### Títulos e Mensagens
```tsx
/* Seção Hero */
h1: "Pare de perder tempo com relatórios manuais"         /* Texto branco */
p: "Gere relatórios profissionais em 3 cliques..."       /* Texto branco */
supporting: "Inteligência de consultor, por uma fração do custo"  /* Texto azul escuro */
```

### CTAs
- "Criar Relatório Grátis"
- "Começar Agora - Grátis"
- "Ver Demonstração"
- Sempre usar `variant="accent"` para CTAs primários

## Organização de Arquivos

### Estrutura de Componentes
```
src/components/
├── ui/              # Componentes base UI (shadcn)
├── BrandName.tsx    # Componente de consistência da marca
├── LogoIcon.tsx     # Componente do ícone da logo
├── Header.tsx       # Cabeçalho do site com navegação
├── Footer.tsx       # Rodapé do site
├── Hero.tsx         # Seção hero
├── Features.tsx     # Seção de recursos
├── HowItWorks.tsx   # Explicação do processo
├── ReportShowcase.tsx # Exemplos de relatórios
├── Benefits.tsx     # Seção de benefícios
├── Pricing.tsx      # Planos de preços
├── CTA.tsx          # Seção call-to-action
└── [Feature].tsx    # Componentes específicos de recursos
```

### Abordagem de Estilização
1. **Design Tokens Primeiro**: Usar variáveis CSS de `index.css`
2. **Variantes de Componentes**: Criar variantes em arquivos de componentes usando `cva`
3. **Classes Utilitárias**: Apenas para espaçamento e layout
4. **Padrões Consistentes**: Reutilizar padrões estabelecidos

## Checklist de Implementação

### Conformidade da Marca
- [ ] Todas as menções da marca usam componente `<BrandName />`
- [ ] LogoIcon não possui chip de fundo
- [ ] Variantes de cor corretas para cada fundo
- [ ] "Super" nunca negrito, "Relatórios" sempre negrito

### Sistema de Cores
- [ ] Todas as cores usam formato HSL em variáveis CSS
- [ ] Nenhuma classe de cor direta (text-blue-500, bg-white)
- [ ] Tokens semânticos usados consistentemente
- [ ] Variantes do modo escuro definidas

### Tipografia
- [ ] Hierarquia adequada de títulos mantida
- [ ] Famílias de fontes aplicadas corretamente
- [ ] Escalonamento de texto responsivo implementado

### Layout e Espaçamento
- [ ] Espaçamento consistente com design tokens
- [ ] Sistema de grid responsivo implementado
- [ ] Uso adequado de containers

### Acessibilidade
- [ ] Razões de contraste de cores atendidas
- [ ] Estados de foco implementados
- [ ] Estrutura HTML semântica
- [ ] Labels ARIA onde necessário
- [ ] Atributo de idioma adequado

### Performance
- [ ] Animações otimizadas
- [ ] Transições suaves
- [ ] Aprimoramento progressivo

### Responsividade
- [ ] Abordagem mobile-first
- [ ] Breakpoints adequados
- [ ] Componentes se adaptam a diferentes tamanhos
- [ ] Touch targets adequados (44px mínimo)

---

## Padrões de Desenvolvimento

### Qualidade de Código
- Usar TypeScript para todos os componentes
- Implementar interfaces adequadas de props
- Exportar componentes como padrão
- Usar convenções de nomenclatura consistentes

### Considerações de Teste
- Componentes devem ser facilmente testáveis
- Props devem ser bem documentados
- Variantes devem ser claramente definidas

### Manutenção
- Revisões regulares do sistema de design
- Atualizações da documentação de componentes
- Auditorias de acessibilidade
- Monitoramento de performance

---

*Este sistema de design é a base para todo o desenvolvimento SuperRelatórios. Qualquer desvio deve ser aprovado e documentado. O sistema garante consistência, acessibilidade e qualidade profissional em todas as plataformas.*