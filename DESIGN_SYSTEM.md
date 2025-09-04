# SuperRelatórios Design System

## Overview
This document defines the complete design system for SuperRelatórios, ensuring consistency, accessibility, and professional appearance across all platforms. This system serves as the foundation for all development work.

## Brand Guidelines

### Brand Name Usage
- **Component**: Always use `<BrandName />` component for consistency
- **Variants**:
  - `variant="default"` - White/light backgrounds
  - `variant="on-blue"` - Blue backgrounds  
  - `variant="on-dark"` - Dark blue backgrounds
  - `variant="header"` - Header navigation

### Brand Name Rules (CRITICAL)
- **"Super"**: NEVER bold, color varies by background
- **"Relatórios"**: ALWAYS `font-bold`, color varies by background
- **NO chip variants** for website/app (only marketing materials)

### Brand Name Color Applications
```tsx
// White/light backgrounds
<BrandName variant="default" />
// Result: Super(black) + Relatórios(blue bold)

// Blue backgrounds
<BrandName variant="on-blue" />
// Result: Super(dark blue) + Relatórios(white bold)

// Dark blue backgrounds  
<BrandName variant="on-dark" />
// Result: Super(white) + Relatórios(blue bold)
```

### Logo Icon
- **Component**: `<LogoIcon size="sm|md|lg" />`
- **Design**: 3-bar chart icon (no background chip)
- **Colors**: 
  - Bar 1 (medium): Primary blue `hsl(220, 91%, 51%)`
  - Bar 2 (low): Dark blue `hsl(220, 91%, 20%)`
  - Bar 3 (high): Green `hsl(142, 76%, 36%)`
- **Usage**: Always with `aria-hidden="true"` for accessibility

## Color Palette

### Core Colors (HSL Format)
```css
/* Primary Colors */
--primary: 220 91% 51%;           /* Main brand blue */
--primary-dark: 220 91% 20%;      /* Dark blue (footer color) */
--accent: 142 76% 36%;            /* Accent green for CTAs */

/* Brand Colors */
--brand-super: 0 0% 0%;           /* Black for "Super" */
--brand-relatorios: 220 91% 51%;  /* Blue for "Relatórios" */

/* Base Colors */
--background: 0 0% 100%;          /* White background */
--foreground: 222 84% 4.9%;       /* Dark text */
--card: 0 0% 100%;                /* Card backgrounds */
--border: 220 13% 91%;            /* Border color */
--muted-foreground: 220 8.9% 46.1%; /* Secondary text */
```

### Dark Mode Variants
```css
.dark {
  --background: 222 84% 4.9%;      /* Dark background */
  --foreground: 210 40% 98%;       /* Light text */
  --brand-super: 210 40% 98%;      /* White for "Super" on dark */
  --card: 222 84% 4.9%;            /* Dark card backgrounds */
}
```

### Color Usage Rules
- **NEVER** use direct colors: `text-blue-500`, `bg-white`, `text-black`
- **ALWAYS** use semantic tokens: `text-primary`, `bg-background`, `text-foreground`
- **HSL ONLY**: All colors must be in HSL format for theme compatibility
- **Design Tokens First**: Use CSS variables from `index.css`

## Typography

### Font Families
```css
font-heading: ['Montserrat', 'sans-serif']  /* Headings and brand */
font-body: ['Inter', 'sans-serif']          /* Body text */
```

### Typography Scale
```css
/* Headings - Always use font-heading */
h1: text-4xl md:text-6xl font-bold         /* Main headlines */
h2: text-3xl md:text-4xl font-bold         /* Section titles */
h3: text-xl md:text-2xl font-semibold      /* Subsections */
h4: text-lg md:text-xl font-semibold       /* Component titles */

/* Body Text - Always use font-body */
p: text-base leading-relaxed               /* Regular text */
small: text-sm                             /* Fine print */
```

### Text Colors
```css
/* Primary text */
text-foreground              /* Main text color */
text-muted-foreground        /* Secondary/helper text */

/* Brand colors */
text-primary                 /* Brand blue */
text-primary-dark            /* Dark blue */
text-accent                  /* Green for highlights */

/* Context colors */
text-white                   /* White text on dark backgrounds */
text-white/70                /* White text with opacity */
```

## Component System

### Buttons
```tsx
/* Primary Actions */
<Button variant="default">Primary Action</Button>

/* Secondary Actions */
<Button variant="secondary">Secondary Action</Button>

/* CTAs and Conversions */
<Button variant="accent">Call to Action</Button>

/* Subtle Actions */
<Button variant="ghost">Subtle Action</Button>

/* Outlined Actions */
<Button variant="outline">Outlined Action</Button>
```

### Cards
```tsx
/* Standard Card */
<Card className="border-0 bg-card hover:shadow-lg transition-all duration-300">

/* Interactive Card */
<Card className="hover:scale-105 transition-all duration-300">

/* Card with Icon */
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

### Sections
```tsx
/* Standard Section */
<section className="py-20 bg-background">

/* Alternate Background */
<section className="py-20 bg-secondary/30">

/* Primary Background */
<section className="py-20 bg-primary">
```

## Layout System

### Container & Spacing
```css
/* Containers */
.container                   /* Max-width container with auto margins */
mx-auto px-4                 /* Center with horizontal padding */

/* Vertical Rhythm */
py-20                        /* Section padding (80px top/bottom) */
mb-16                        /* Major section spacing (64px) */
mb-6                         /* Element spacing (24px) */
gap-8                        /* Grid/flex gaps (32px) */

/* Card Padding */
p-6                          /* Standard card padding (24px) */
p-8                          /* Large card padding (32px) */
```

### Responsive Grid
```css
/* Standard Grid */
grid md:grid-cols-3 gap-8    /* 3-column grid on desktop */
grid md:grid-cols-2 gap-6    /* 2-column grid on tablet */

/* Responsive Breakpoints */
sm: 640px                    /* Small devices */
md: 768px                    /* Tablets */
lg: 1024px                   /* Laptops */
xl: 1280px                   /* Desktops */
2xl: 1536px                  /* Large screens */
```

## Navigation & Interaction

### Header
```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
```

### Mobile Navigation
- Uses `Sheet` component for slide-out menu
- Hamburger icon on mobile (`md:hidden`)
- Full navigation links in mobile sheet

### Scroll Behavior
```css
/* Compensate for fixed header */
section {
  scroll-margin-top: 80px;
}
```

### Hover States
```css
/* Standard hover effects */
hover:shadow-lg              /* Elevation increase */
hover:scale-105              /* Slight scale up */
hover:text-primary           /* Color change */
transition-all duration-300  /* Smooth transitions */
```

## Accessibility

### Color Contrast
- **Minimum 4.5:1** ratio for normal text
- **Minimum 3:1** ratio for large text
- All colors tested in both light and dark modes
- White text on primary blue: WCAG AA compliant

### Focus States
```css
/* Focus indicators */
focus:ring-2 focus:ring-primary     /* Custom focus rings */
focus:outline-none                  /* Remove default outline */
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- `aria-labels` for icon-only buttons
- `aria-hidden="true"` for decorative icons
- Semantic elements: `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`

### Language
```html
<html lang="pt-BR">           /* Portuguese (Brazil) */
```

## Responsive Design

### Mobile-First Approach
- Base styles for mobile (320px+)
- Progressive enhancement for larger screens
- Touch-friendly interactive elements (44px minimum)

### Typography Scaling
```css
/* Responsive text sizes */
text-4xl md:text-6xl          /* Scale up on larger screens */
text-xl md:text-2xl           /* Proportional scaling */
```

### Layout Adaptations
```css
/* Mobile to Desktop */
flex-col sm:flex-row          /* Stack on mobile, row on desktop */
hidden md:flex                /* Hide on mobile, show on desktop */
grid md:grid-cols-3           /* Single column mobile, 3 columns desktop */
```

## Performance

### Animations
```css
/* Optimized animations */
transition-all duration-300   /* Smooth but fast */
transform                     /* Use transform for performance */
opacity                       /* Use opacity for performance */
```

### Loading States
- Use `skeleton` components for loading states
- Lazy loading for images
- Progressive enhancement for interactive elements

## Content Guidelines

### Headlines and Messaging
```tsx
/* Hero Section */
h1: "Pare de perder tempo com relatórios manuais"         /* White text */
p: "Gere relatórios profissionais em 3 cliques..."       /* White text */
supporting: "Inteligência de consultor, por uma fração do custo"  /* Dark blue text */
```

### CTAs
- "Criar Relatório Grátis"
- "Começar Agora - Grátis"
- "Ver Demonstração"
- Always use `variant="accent"` for primary CTAs

## File Organization

### Component Structure
```
src/components/
├── ui/              # Base UI components (shadcn)
├── BrandName.tsx    # Brand consistency component
├── LogoIcon.tsx     # Logo icon component
├── Header.tsx       # Site header with navigation
├── Footer.tsx       # Site footer
├── Hero.tsx         # Hero section
├── Features.tsx     # Features section
├── HowItWorks.tsx   # Process explanation
├── ReportShowcase.tsx # Report examples
├── Benefits.tsx     # Benefits section
├── Pricing.tsx      # Pricing plans
├── CTA.tsx          # Call-to-action section
└── [Feature].tsx    # Feature-specific components
```

### Styling Approach
1. **Design Tokens First**: Use CSS variables from `index.css`
2. **Component Variants**: Create variants in component files using `cva`
3. **Utility Classes**: Only for spacing and layout
4. **Consistent Patterns**: Reuse established patterns

## Implementation Checklist

### Brand Compliance
- [ ] All brand mentions use `<BrandName />` component
- [ ] LogoIcon has no background chip
- [ ] Correct color variants for each background
- [ ] "Super" never bold, "Relatórios" always bold

### Color System
- [ ] All colors use HSL format in CSS variables
- [ ] No direct color classes (text-blue-500, bg-white)
- [ ] Semantic tokens used consistently
- [ ] Dark mode variants defined

### Typography
- [ ] Proper heading hierarchy maintained
- [ ] Font families applied correctly
- [ ] Responsive text scaling implemented

### Layout & Spacing
- [ ] Consistent spacing with design tokens
- [ ] Responsive grid system implemented
- [ ] Proper container usage

### Accessibility
- [ ] Color contrast ratios met
- [ ] Focus states implemented
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Proper language attribute

### Performance
- [ ] Optimized animations
- [ ] Smooth transitions
- [ ] Progressive enhancement

---

## Development Standards

### Code Quality
- Use TypeScript for all components
- Implement proper prop interfaces
- Export components as default
- Use consistent naming conventions

### Testing Considerations
- Components should be easily testable
- Props should be well-documented
- Variants should be clearly defined

### Maintenance
- Regular design system reviews
- Component documentation updates
- Accessibility audits
- Performance monitoring

---

*This design system is the foundation for all SuperRelatórios development. Any deviations must be approved and documented. The system ensures consistency, accessibility, and professional quality across all platforms.*