# SuperRelatórios Design System

## Overview
This document defines the complete design system for SuperRelatórios, ensuring consistency across all pages and components.

## Brand Guidelines

### Logo & Brand Name
- **Primary Usage**: `<BrandName variant="default" />`
- **On Blue Backgrounds**: `<BrandName variant="white-chip" />` 
- **In Header**: `<BrandName variant="header" />`
- **Rules**: 
  - "Super" always in `text-primary-dark`
  - "Relatórios" always `font-bold text-primary`
  - White chip variant for contrast on blue backgrounds

### Brand Colors
- **Primary Blue**: `hsl(220, 91%, 51%)` - Main brand color
- **Primary Dark Blue**: `hsl(220, 91%, 35%)` - For emphasis and contrast
- **Accent Green**: Complementary color for CTAs and highlights

## Color System

### CSS Variables (Light Mode)
```css
--primary: 220 91% 51%;           /* Main brand blue */
--primary-dark: 220 91% 35%;      /* Dark blue for emphasis */
--accent: [green values];         /* Accent green */
--background: 0 0% 100%;          /* White background */
--foreground: 222.2 84% 4.9%;     /* Dark text */
--secondary: 220 14.3% 95.9%;     /* Light gray backgrounds */
--muted: 220 14.3% 95.9%;         /* Muted backgrounds */
--border: 220 13% 91%;            /* Border color */
```

### CSS Variables (Dark Mode)
```css
--primary: 217.2 91.2% 59.8%;     /* Lighter blue for dark mode */
--primary-dark: 217.2 91.2% 45%;  /* Dark blue for dark mode */
--background: 222.2 84% 4.9%;     /* Dark background */
--foreground: 210 40% 98%;        /* Light text */
```

### Usage Guidelines
- **NEVER** use direct colors like `text-blue-500` or `bg-white`
- **ALWAYS** use semantic tokens: `text-primary`, `bg-background`, `text-foreground`
- **HSL Format**: All colors must be in HSL format for better theme compatibility

## Typography

### Font Families
```css
font-heading: ['Montserrat', 'sans-serif']  /* For headings and brand */
font-body: ['Inter', 'sans-serif']          /* For body text */
```

### Heading Scale
```css
h1: text-4xl md:text-6xl font-bold font-heading
h2: text-3xl md:text-4xl font-bold font-heading  
h3: text-xl font-semibold font-heading
h4: text-lg font-semibold font-heading
```

### Body Text
```css
p: text-base leading-relaxed font-body
small: text-sm font-body
```

## Component Guidelines

### Buttons
- **Primary**: `<Button variant="default">` - Main actions
- **Secondary**: `<Button variant="secondary">` - Secondary actions  
- **Accent**: `<Button variant="accent">` - CTAs and conversions
- **Ghost**: `<Button variant="ghost">` - Subtle actions

### Cards
- **Default**: `<Card className="border-0 bg-card hover:shadow-lg transition-all duration-300">`
- **Hover Effects**: Always include smooth transitions
- **Shadows**: Use `hover:shadow-lg` for interactive cards

### Layouts
- **Container**: `container mx-auto px-4` for consistent spacing
- **Sections**: `py-20` for consistent vertical rhythm
- **Grids**: `grid md:grid-cols-3 gap-8` for responsive layouts

## Spacing System

### Vertical Rhythm
- **Section Padding**: `py-20` (80px top/bottom)
- **Component Margin**: `mb-16` (64px bottom) for major sections
- **Text Spacing**: `mb-6` (24px) between related elements
- **Card Padding**: `p-6` or `p-8` depending on content density

### Responsive Breakpoints
```css
sm: 640px
md: 768px  
lg: 1024px
xl: 1280px
2xl: 1536px
```

## Animation Guidelines

### Transitions
- **Standard**: `transition-all duration-300` for most interactions
- **Hover Effects**: `hover:shadow-lg hover:scale-105` for cards
- **Button Hover**: Built into button variants

### Performance
- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, or layout properties

## Accessibility

### Color Contrast
- Minimum 4.5:1 ratio for normal text
- Minimum 3:1 ratio for large text
- All colors tested in both light and dark modes

### Focus States
- All interactive elements have visible focus indicators
- Custom focus rings use `focus:ring-2 focus:ring-primary`

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Include `aria-labels` for icon-only buttons
- Use semantic elements: `<main>`, `<section>`, `<article>`

## File Organization

### Component Structure
```
src/components/
├── ui/           # Base UI components (shadcn)
├── BrandName.tsx # Brand consistency component
├── Header.tsx    # Site header
├── Footer.tsx    # Site footer
└── [Feature].tsx # Feature-specific components
```

### Styling Approach
1. **Design Tokens First**: Use CSS variables from index.css
2. **Component Variants**: Create variants in component files
3. **Utility Classes**: Only for spacing and layout, not colors
4. **Consistent Patterns**: Reuse established patterns across components

## Best Practices

### DO
- Use semantic color tokens (`text-primary`, `bg-card`)
- Create component variants for different use cases
- Maintain consistent spacing with design tokens
- Test in both light and dark modes
- Use the BrandName component for all brand mentions

### DON'T  
- Use direct color classes (`text-blue-500`, `bg-white`)
- Mix HSL and RGB color formats
- Skip hover/focus states on interactive elements
- Break the vertical rhythm with custom spacing
- Hardcode brand text instead of using BrandName component

## Implementation Checklist

- [ ] All colors use HSL format in CSS variables
- [ ] BrandName component used for all brand mentions
- [ ] Consistent spacing with design tokens
- [ ] Proper heading hierarchy
- [ ] Hover and focus states on interactive elements
- [ ] Responsive design tested on all breakpoints
- [ ] Dark mode compatibility verified
- [ ] Accessibility guidelines followed

---

*This design system ensures consistency, maintainability, and scalability across the entire SuperRelatórios platform.*