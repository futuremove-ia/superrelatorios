# 🎨 SuperRelatórios Design System Protocol v2.0

## Visão Geral

Protocolo técnico completo para implementação do Brand System SuperRelatórios, com especificações detalhadas de design tokens, component library, guidelines de implementação e padrões de código. Foco em componentes visuais seguindo a estética 70% Linear + 20% Notion + 10% Stripe.

---

## 1. Design Tokens Foundation

### 1.1 Color Tokens

#### **Primary Colors (Trust Layer)**
```css
:root {
  /* Brand Colors */
  --color-brand-primary: #0052FF;        /* Royal Trust Blue */
  --color-brand-secondary: #F59E0B;      /* Strategic Amber */
  
  /* Background Colors */
  --color-bg-primary: #FFFFFF;            /* Clean White */
  --color-bg-secondary: #0B0B0C;         /* Deep Slate */
  --color-bg-tertiary: #F8FAFC;          /* Light Grey */
  
  /* Neutral Colors */
  --color-neutral-50: #F8FAFC;
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;          /* Neutral Grey */
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;
  --color-neutral-900: #0B0B0C;          /* Deep Slate */
}
```

#### **Semantic Colors**
```css
:root {
  /* Success */
  --color-success-50: #F0FDF4;
  --color-success-500: #22C55E;
  --color-success-600: #16A34A;
  
  /* Warning */
  --color-warning-50: #FFFBEB;
  --color-warning-500: #F59E0B;          /* Strategic Amber */
  --color-warning-600: #D97706;
  
  /* Error */
  --color-error-50: #FEF2F2;
  --color-error-500: #EF4444;
  --color-error-600: #DC2626;
  
  /* Info */
  --color-info-50: #EFF6FF;
  --color-info-500: #0052FF;             /* Royal Trust Blue */
  --color-info-600: #0047CC;
}
```

#### **Usage Rules**
```css
/* Trust Colors = Structural Confidence */
.trust-primary { color: var(--color-brand-primary); }
.trust-bg { background-color: var(--color-brand-primary); }

/* Intelligence Colors = Action & Decision */
.intelligence-primary { color: var(--color-brand-secondary); }
.intelligence-bg { background-color: var(--color-brand-secondary); }

/* Never use both with same visual weight */
.trust-dominant .intelligence-accent { opacity: 0.7; }
.intelligence-dominant .trust-accent { opacity: 0.7; }
```

### 1.2 Typography Tokens

#### **Font Families**
```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Geist Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
}
```

#### **Font Sizes**
```css
:root {
  /* Text Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  
  /* Display Sizes */
  --display-xs: 1.5rem;   /* 24px */
  --display-sm: 1.875rem; /* 30px */
  --display-md: 2.25rem;  /* 36px */
  --display-lg: 3rem;     /* 48px */
  --display-xl: 3.75rem;  /* 60px */
  --display-2xl: 4.5rem;  /* 72px */
}
```

#### **Font Weights**
```css
:root {
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

#### **Line Heights**
```css
:root {
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}
```

#### **Typography Rules**
```css
/* Critical Numbers → Always Mono */
.metric-value {
  font-family: var(--font-mono);
  font-weight: var(--font-semibold);
}

/* Explanatory Text → Always Sans */
.explanatory-text {
  font-family: var(--font-sans);
  font-weight: var(--font-normal);
}

/* Avoid Unnecessary Mixing */
.ui-text { font-family: var(--font-sans); }
.data-text { font-family: var(--font-mono); }
```

### 1.3 Spacing Tokens

#### **Scale (8px base)**
```css
:root {
  --space-0: 0;
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
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

#### **Component Spacing**
```css
:root {
  --component-padding-xs: var(--space-2);
  --component-padding-sm: var(--space-3);
  --component-padding-md: var(--space-4);
  --component-padding-lg: var(--space-6);
  --component-padding-xl: var(--space-8);
  
  --component-gap-xs: var(--space-1);
  --component-gap-sm: var(--space-2);
  --component-gap-md: var(--space-4);
  --component-gap-lg: var(--space-6);
  --component-gap-xl: var(--space-8);
}
```

### 1.4 Border Radius Tokens

#### **Radius Scale**
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;    /* 2px */
  --radius-base: 0.25rem;    /* 4px */
  --radius-md: 0.375rem;     /* 6px */
  --radius-lg: 0.5rem;       /* 8px */
  --radius-xl: 0.75rem;      /* 12px */
  --radius-2xl: 1rem;        /* 16px */
  --radius-full: 9999px;
}
```

#### **Usage Rules**
```css
/* Linear Style → Sharp, precise */
.linear-sharp { border-radius: var(--radius-none); }
.linear-subtle { border-radius: var(--radius-sm); }

/* Notion Style → Rounded, friendly */
.notion-soft { border-radius: var(--radius-md); }
.notion-rounded { border-radius: var(--radius-lg); }

/* Stripe Style → Elegant, refined */
.stripe-elegant { border-radius: var(--radius-base); }
.stripe-refined { border-radius: var(--radius-xl); }
```

### 1.5 Shadow Tokens

#### **Shadow Scale**
```css
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-base: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
```

---

## 2. Component Library

### 2.1 Button Components

#### **Primary Button (Action-focused)**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  action: string; // Never generic "OK" or "Confirm"
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

// Examples
<Button variant="primary" action="Ver Plano de Ação" onClick={showPlan} />
<Button variant="secondary" action="Corrigir Margem" onClick={fixMargin} />
<Button variant="outline" action="Simular Cenário" onClick={simulate} />
```

#### **Button Styles**
```css
.btn {
  font-family: var(--font-sans);
  font-weight: var(--font-medium);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.btn-primary {
  background-color: var(--color-brand-primary);
  color: white;
  border: 1px solid var(--color-brand-primary);
}

.btn-primary:hover {
  background-color: #0047CC;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--color-brand-secondary);
  color: var(--color-neutral-900);
  border: 1px solid var(--color-brand-secondary);
}

.btn-secondary:hover {
  background-color: #D97706;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-brand-primary);
  border: 1px solid var(--color-brand-primary);
}

.btn-outline:hover {
  background-color: var(--color-brand-primary);
  color: white;
}

.btn-ghost {
  background-color: transparent;
  color: var(--color-neutral-600);
  border: 1px solid transparent;
}

.btn-ghost:hover {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
}

/* Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--text-sm);
}

.btn-md {
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
}

.btn-lg {
  padding: var(--space-4) var(--space-6);
  font-size: var(--text-lg);
}
```

### 2.2 Card Components

#### **Decision Card (Linear Style)**
```typescript
interface DecisionCardProps {
  title: string;
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  actions: ActionButton[];
  metrics?: MetricItem[];
  status: 'pending' | 'in-progress' | 'completed';
}

interface ActionButton {
  label: string; // Action-oriented
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

interface MetricItem {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
}
```

#### **Card Styles**
```css
.card {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-decision {
  border-left: 4px solid var(--color-brand-secondary);
}

.card-decision.critical {
  border-left-color: var(--color-error-500);
}

.card-decision.high {
  border-left-color: var(--color-warning-500);
}

.card-header {
  padding: var(--space-4) var(--space-4) 0;
}

.card-title {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-900);
  margin: 0;
}

.card-description {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  margin: var(--space-2) 0;
}

.card-content {
  padding: var(--space-4);
}

.card-actions {
  padding: 0 var(--space-4) var(--space-4);
  display: flex;
  gap: var(--space-2);
}

.card-metrics {
  padding: var(--space-3);
  background: var(--color-neutral-50);
  border-radius: var(--radius-md);
  margin: var(--space-3) 0;
}
```

### 2.3 Panel Components

#### **Decision Panel (Main Interface)**
```typescript
interface DecisionPanelProps {
  situation: PrioritySituation;
  recommendations: Recommendation[];
  supportingData: SupportingMetric[];
  evolution: TrendData[];
}

interface PrioritySituation {
  title: string;
  description: string;
  urgency: 'critical' | 'urgent' | 'important';
  impact: string;
  timeframe: string;
}

interface Recommendation {
  title: string;
  description: string;
  expectedImpact: string;
  complexity: 'low' | 'medium' | 'high';
  action: string;
  onClick: () => void;
}
```

#### **Panel Styles**
```css
.panel {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
  overflow: hidden;
}

.panel-decision {
  background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 1px solid var(--color-neutral-200);
}

.panel-header {
  padding: var(--space-6);
  background: var(--color-neutral-50);
  border-bottom: 1px solid var(--color-neutral-200);
}

.panel-title {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-neutral-900);
  margin: 0;
}

.panel-subtitle {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
  margin: var(--space-2) 0 0;
}

.panel-content {
  padding: var(--space-6);
}

.panel-section {
  margin-bottom: var(--space-8);
}

.panel-section:last-child {
  margin-bottom: 0;
}

.panel-section-title {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-900);
  margin: 0 0 var(--space-4);
}
```

### 2.4 List Components

#### **Rich List (Notion Style)**
```typescript
interface RichListProps {
  items: ListItem[];
  variant: 'decision' | 'indicator' | 'action';
  interactive?: boolean;
}

interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  metadata: Record<string, string>;
  actions?: ActionItem[];
  status?: 'active' | 'pending' | 'completed';
  priority?: 'high' | 'medium' | 'low';
}

interface ActionItem {
  label: string;
  onClick: () => void;
  icon?: string;
}
```

#### **List Styles**
```css
.list {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.list-item {
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-neutral-100);
  display: flex;
  align-items: center;
  gap: var(--space-4);
  transition: background-color 0.15s ease;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item:hover {
  background-color: var(--color-neutral-50);
}

.list-item-content {
  flex: 1;
  min-width: 0;
}

.list-item-title {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-neutral-900);
  margin: 0;
}

.list-item-subtitle {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  margin: var(--space-1) 0 0;
}

.list-item-metadata {
  display: flex;
  gap: var(--space-4);
  align-items: center;
}

.list-item-metadata-item {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-neutral-500);
}

.list-item-actions {
  display: flex;
  gap: var(--space-2);
}
```

### 2.5 Metric Components

#### **Metric Display (Stripe Style)**
```typescript
interface MetricProps {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  format?: 'currency' | 'percentage' | 'number';
  size?: 'sm' | 'md' | 'lg';
  bilingual?: boolean;
}

interface BilingualMetricProps extends MetricProps {
  technicalTerm: string;
  actionableTranslation: string;
}
```

#### **Metric Styles**
```css
.metric {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.metric-label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-neutral-600);
  font-weight: var(--font-medium);
}

.metric-value {
  font-family: var(--font-mono);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-900);
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
}

.metric-unit {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
  font-weight: var(--font-normal);
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.metric-trend.up {
  color: var(--color-success-500);
}

.metric-trend.down {
  color: var(--color-error-500);
}

.metric-trend.stable {
  color: var(--color-neutral-500);
}

/* Bilingual Metric */
.metric-bilingual {
  border-left: 3px solid var(--color-brand-secondary);
  padding-left: var(--space-3);
}

.metric-technical {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-neutral-500);
}

.metric-translation {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-neutral-700);
  font-weight: var(--font-medium);
}

/* Sizes */
.metric.sm .metric-value {
  font-size: var(--text-lg);
}

.metric.lg .metric-value {
  font-size: var(--text-3xl);
}
```

---

## 3. Implementation Guidelines

### 3.1 Component Architecture

#### **Component Structure**
```typescript
// Base Component Structure
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  testId?: string;
}

// Example: Button Component
export const Button: React.FC<ButtonProps & BaseComponentProps> = ({
  variant = 'primary',
  size = 'md',
  action,
  onClick,
  disabled = false,
  loading = false,
  className,
  children,
  testId,
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const stateClasses = disabled ? 'btn-disabled' : '';
  const loadingClasses = loading ? 'btn-loading' : '';
  
  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    stateClasses,
    loadingClasses,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      data-testid={testId}
      {...props}
    >
      {loading && <Spinner size="sm" />}
      {children || action}
    </button>
  );
};
```

#### **Naming Conventions**
```typescript
// Component Naming: PascalCase
export const DecisionPanel: React.FC<DecisionPanelProps> = ({ ... }) => { };
export const MetricCard: React.FC<MetricCardProps> = ({ ... }) => { };
export const ActionList: React.FC<ActionListProps> = ({ ... }) => { };

// CSS Classes: kebab-case with BEM
.decision-panel { }
.decision-panel__header { }
.decision-panel__content { }
.decision-panel--critical { }
.decision-panel--loading { }

// Props: camelCase
interface ComponentProps {
  primaryAction: string;
  secondaryAction: string;
  supportingData: MetricItem[];
  isUrgent: boolean;
}
```

### 3.2 Style Implementation

#### **CSS-in-JS vs CSS Modules**
```typescript
// Recommended: CSS Modules with CSS Variables
import styles from './DecisionPanel.module.css';

export const DecisionPanel: React.FC<DecisionPanelProps> = ({ 
  situation, 
  recommendations 
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h2 className={styles.title}>{situation.title}</h2>
        <p className={styles.subtitle}>{situation.description}</p>
      </div>
      <div className={styles.content}>
        {recommendations.map(rec => (
          <RecommendationCard key={rec.id} recommendation={rec} />
        ))}
      </div>
    </div>
  );
};
```

#### **CSS Module Structure**
```css
/* DecisionPanel.module.css */
.panel {
  background: white;
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-base);
  overflow: hidden;
}

.panel--critical {
  border-left: 4px solid var(--color-error-500);
}

.panel--urgent {
  border-left: 4px solid var(--color-warning-500);
}

.header {
  padding: var(--space-6);
  background: var(--color-neutral-50);
  border-bottom: 1px solid var(--color-neutral-200);
}

.title {
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-neutral-900);
  margin: 0;
}

.subtitle {
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  color: var(--color-neutral-600);
  margin: var(--space-2) 0 0;
}
```

### 3.3 Responsive Design

#### **Breakpoint System**
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Mobile-first approach */
.panel {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .panel {
    padding: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .panel {
    padding: var(--space-8);
  }
}
```

#### **Component Responsiveness**
```css
.decision-panel {
  /* Mobile: Single column */
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  /* Tablet: Two columns */
  .decision-panel {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }
}

@media (min-width: 1024px) {
  /* Desktop: Three columns */
  .decision-panel {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
```

---

## 4. Code Standards

### 4.1 TypeScript Standards

#### **Component Typing**
```typescript
// Strict typing for all props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  action: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  testId?: string;
}

// Use discriminated unions for variant components
type CardProps = 
  | { type: 'decision'; decision: DecisionData }
  | { type: 'metric'; metric: MetricData }
  | { type: 'action'; actions: ActionData[] };

// Generic component with proper constraints
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
  loading?: boolean;
  emptyState?: React.ReactNode;
}
```

#### **Hook Standards**
```typescript
// Custom hooks with proper typing
interface UseDecisionPanelReturn {
  situation: PrioritySituation | null;
  recommendations: Recommendation[];
  loading: boolean;
  error: string | null;
  executeAction: (actionId: string) => Promise<void>;
  refresh: () => Promise<void>;
}

export const useDecisionPanel = (situationId: string): UseDecisionPanelReturn => {
  // Implementation
};

// Hook naming convention: use + ComponentName
const useDecisionPanel = () => { };
const useMetricDisplay = () => { };
const useActionList = () => { };
```

### 4.2 File Structure

#### **Component Organization**
```
src/components/
├── ui/                    # Basic UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Card/
│   ├── Input/
│   └── index.ts
├── features/              # Business logic components
│   ├── DecisionPanel/
│   │   ├── DecisionPanel.tsx
│   │   ├── DecisionPanel.module.css
│   │   ├── RecommendationCard.tsx
│   │   ├── useDecisionPanel.ts
│   │   └── index.ts
│   ├── MetricDisplay/
│   └── ActionList/
└── layouts/               # Layout components
    ├── AppLayout/
    ├── DecisionLayout/
    └── IndicatorLayout/
```

#### **Export Standards**
```typescript
// Component exports
export { Button } from './Button';
export { Card } from './Card';
export { Input } from './Input';

// Type exports
export type { ButtonProps } from './Button';
export type { CardProps } from './Card';

// Default export for main component
export default Button;

// Barrel exports
export * from './ui';
export * from './features';
export * from './layouts';
```

### 4.3 Testing Standards

#### **Component Testing**
```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders action text correctly', () => {
    render(<Button action="Ver Plano de Ação" onClick={jest.fn()} />);
    expect(screen.getByText('Ver Plano de Ação')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button action="Corrigir Margem" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Corrigir Margem'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies correct variant styles', () => {
    render(<Button action="Simular Cenário" variant="secondary" onClick={jest.fn()} />);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });
});
```

#### **Accessibility Testing**
```typescript
// Accessibility standards
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should be accessible', async () => {
  const { container } = render(
    <Button action="Ver Plano de Ação" onClick={jest.fn()} />
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## 5. Integration Rules

### 5.1 Brand System Integration

#### **Color Usage Rules**
```typescript
// Enforce brand color usage
const getBrandColor = (purpose: 'trust' | 'intelligence', variant: 'primary' | 'secondary') => {
  const colorMap = {
    trust: {
      primary: 'var(--color-brand-primary)',
      secondary: 'var(--color-neutral-600)'
    },
    intelligence: {
      primary: 'var(--color-brand-secondary)',
      secondary: 'var(--color-warning-600)'
    }
  };
  
  return colorMap[purpose][variant];
};

// Usage in components
const Button = ({ variant, purpose }: ButtonProps) => {
  const backgroundColor = getBrandColor(purpose, variant);
  return <button style={{ backgroundColor }} />;
};
```

#### **Typography Enforcement**
```typescript
// Enforce bilingual typography
const BilingualText: React.FC<BilingualTextProps> = ({ 
  technical, 
  translation, 
  showTechnical = false 
}) => {
  return (
    <div className="metric-bilingual">
      {showTechnical && (
        <div className="metric-technical">{technical}</div>
      )}
      <div className="metric-translation">{translation}</div>
    </div>
  );
};

// Usage
<BilingualText 
  technical="Burn Rate"
  translation="Consumo de caixa mensal"
  showTechnical={showTechnicalMode}
/>
```

### 5.2 Architecture Integration

#### **State Management Integration**
```typescript
// Integration with existing state management
import { useDecisionStore } from '../stores/decisionStore';

const DecisionPanel: React.FC = () => {
  const { 
    currentSituation, 
    recommendations, 
    executeRecommendation 
  } = useDecisionStore();
  
  return (
    <div className="decision-panel">
      <PrioritySituation situation={currentSituation} />
      <RecommendationList 
        recommendations={recommendations}
        onAction={executeRecommendation}
      />
    </div>
  );
};
```

#### **API Integration**
```typescript
// API integration following brand system
interface DecisionResponse {
  situation: PrioritySituation;
  recommendations: Recommendation[];
  supportingData: SupportingMetric[];
}

const fetchDecisionData = async (situationId: string): Promise<DecisionResponse> => {
  const response = await api.get(`/decisions/${situationId}`);
  
  // Transform API data to match brand system
  return {
    situation: {
      ...response.data.situation,
      urgency: mapUrgencyLevel(response.data.situation.priority),
      timeframe: formatTimeframe(response.data.situation.deadline)
    },
    recommendations: response.data.recommendations.map(mapRecommendation),
    supportingData: response.data.metrics.map(mapMetric)
  };
};
```

### 5.3 Component Composition

#### **Decision Panel Composition**
```typescript
const DecisionPanel: React.FC<DecisionPanelProps> = ({
  situation,
  recommendations,
  supportingData
}) => {
  return (
    <Panel variant="decision" className="decision-panel">
      <PanelHeader>
        <PrioritySituation situation={situation} />
      </PanelHeader>
      
      <PanelContent>
        <RecommendationSection 
          recommendations={recommendations}
          title="Ações Recomendadas"
        />
        
        <SupportingDataSection 
          data={supportingData}
          title="Dados de Suporte"
        />
      </PanelContent>
      
      <PanelActions>
        <Button 
          variant="primary"
          action="Executar Plano de Ação"
          onClick={() => executePrimaryRecommendation()}
        />
      </PanelActions>
    </Panel>
  );
};
```

---

## 6. Performance Guidelines

### 6.1 Component Performance

#### **Memoization Strategy**
```typescript
// Memoize expensive components
const MetricCard = React.memo<MetricCardProps>(({ metric, trend }) => {
  return (
    <Card className="metric-card">
      <MetricDisplay 
        label={metric.label}
        value={metric.value}
        trend={trend}
      />
    </Card>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.metric.value === nextProps.metric.value &&
    prevProps.trend === nextProps.trend
  );
});

// Use useMemo for expensive calculations
const DecisionPanel: React.FC = () => {
  const { recommendations } = useRecommendations();
  
  const sortedRecommendations = useMemo(() => {
    return recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 5); // Limit to top 5
  }, [recommendations]);
  
  return (
    <Panel>
      <RecommendationList recommendations={sortedRecommendations} />
    </Panel>
  );
};
```

#### **Lazy Loading**
```typescript
// Lazy load heavy components
const DecisionPanel = lazy(() => import('./DecisionPanel'));
const MetricVisualization = lazy(() => import('./MetricVisualization'));

// Usage with suspense
<Suspense fallback={<DecisionPanelSkeleton />}>
  <DecisionPanel situationId={situationId} />
</Suspense>
```

### 6.2 CSS Performance

#### **Efficient CSS**
```css
/* Use CSS variables for theming */
.card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-neutral-200);
  /* Avoid expensive properties */
  will-change: transform;
}

/* Use transform instead of position changes */
.card:hover {
  transform: translateY(-2px);
  /* Instead of: top: -2px; */
}

/* Use opacity for transitions */
.fade-in {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.fade-in.visible {
  opacity: 1;
}
```

---

## 7. Accessibility Standards

### 7.1 Semantic HTML
```typescript
// Use semantic elements
const DecisionPanel: React.FC = () => {
  return (
    <main role="main" aria-label="Painel de Decisão">
      <section aria-labelledby="situation-heading">
        <h2 id="situation-heading">Situação Atual</h2>
        <PrioritySituation />
      </section>
      
      <section aria-labelledby="recommendations-heading">
        <h2 id="recommendations-heading">Recomendações</h2>
        <RecommendationList />
      </section>
    </main>
  );
};
```

### 7.2 ARIA Standards
```typescript
const Button: React.FC<ButtonProps> = ({ 
  action, 
  onClick, 
  loading, 
  disabled 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={action}
      aria-busy={loading}
      aria-disabled={disabled || loading}
    >
      {loading ? <Spinner aria-label="Carregando" /> : action}
    </button>
  );
};
```

---

## 8. Migration Strategy

### 8.1 Phase 1: Foundation
1. **Setup design tokens** in CSS variables
2. **Create base components** (Button, Card, Input)
3. **Establish component library** structure
4. **Implement basic theming**

### 8.2 Phase 2: Core Components
1. **Build decision-focused components** (DecisionPanel, RecommendationCard)
2. **Implement metric displays** with bilingual support
3. **Create list components** with rich interactions
4. **Add responsive design**

### 8.3 Phase 3: Integration
1. **Integrate with existing architecture**
2. **Update current components** to use new design system
3. **Implement brand system rules**
4. **Add accessibility features**

### 8.4 Phase 4: Optimization
1. **Performance optimization**
2. **Browser compatibility**
3. **Testing coverage**
4. **Documentation completion**

---

## 9. Quality Assurance

### 9.1 Component Testing
```typescript
// Visual regression testing
import { render, screen } from '@testing-library/react';
import { DecisionPanel } from './DecisionPanel';

describe('DecisionPanel Visual Tests', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <DecisionPanel situation={mockSituation} />
    );
    expect(container).toMatchSnapshot();
  });
});
```

### 9.2 Design System Validation
```typescript
// Validate design system compliance
const validateBrandSystem = (component: HTMLElement) => {
  // Check color usage
  const trustColors = component.querySelectorAll('[style*="color: var(--color-brand-primary)"]');
  const intelligenceColors = component.querySelectorAll('[style*="color: var(--color-brand-secondary)"]');
  
  // Validate no dashboard term usage
  const dashboardTerms = component.textContent?.includes('dashboard');
  
  return {
    trustColors: trustColors.length,
    intelligenceColors: intelligenceColors.length,
    dashboardTermsFound: dashboardTerms || false
  };
};
```

---

## 10. References and Cross-References

### 10.1 Brand System References
- **[Brand System v2.0](../01-strategy/09-brand-system.md)** — Foundation and guidelines
- **[Visual Identity](../01-strategy/02-design-system.md)** — Visual principles
- **[Strategic Foundation](../01-strategy/03-strategic-foundation.md)** — Strategic context

### 10.2 Technical References
- **[Software Architecture](./01-software-architecture.md)** — Architecture alignment
- **[Contributing Guidelines](./05-contributing-guidelines.md)** — Development standards
- **[Architecture Audit](./02-architecture-audit.md)** — Technical compliance

### 10.3 Implementation References
- **[Deployment Guide](../03-operations/01-deployment-guide.md)** — Production deployment
- **[Performance Monitoring](../03-operations/02-performance-monitoring.md)** — Performance standards

---

## 11. Version and Maintenance

### 11.1 Version Information
- **Version:** 2.0
- **Status:** Production Ready
- **Last Updated:** 22/03/2026
- **Next Review:** 22/06/2026

### 11.2 Maintenance Process
- **Monthly:** Component updates and improvements
- **Quarterly:** Design token reviews and updates
- **Bi-annually:** Brand system alignment checks
- **Annually:** Major version updates and migrations

---

## 12. Conclusion

### 12.1 Implementation Success Criteria
- ✅ **Brand Compliance:** 100% adherence to Brand System v2.0
- ✅ **Component Coverage:** All UI components implemented
- ✅ **Performance:** <100ms render time for components
- ✅ **Accessibility:** WCAG 2.1 AA compliance
- ✅ **Developer Experience:** Intuitive API and documentation

### 12.2 Next Steps
1. **Implement Phase 1** (Foundation components)
2. **Create component library** documentation
3. **Establish testing** and CI/CD integration
4. **Begin migration** of existing components
5. **Monitor performance** and user feedback

This Design System Protocol provides the technical foundation for implementing the SuperRelatórios Brand System, ensuring consistency, performance, and maintainability across all product interfaces.

---

*Última atualização: 22/03/2026*  
*Versão: 2.0 — Production Ready*  
*Status: Implementation Protocol*  
*Maintainer: Design System Team SuperRelatórios*
