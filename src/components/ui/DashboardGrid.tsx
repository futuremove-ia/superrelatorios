import React from 'react';
import { cn } from '@/lib/utils';

type GridLayout = 'default' | 'compact' | 'wide' | 'featured';
type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface DashboardGridProps {
  children: React.ReactNode;
  layout?: GridLayout;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const getGapValue = (gap: 'sm' | 'md' | 'lg' | 'xl') => {
  switch (gap) {
    case 'sm': return 'gap-2';
    case 'md': return 'gap-4';
    case 'lg': return 'gap-6';
    case 'xl': return 'gap-8';
    default: return 'gap-4';
  }
};

const getDefaultColumns = (layout: GridLayout) => {
  switch (layout) {
    case 'compact': return { sm: 2, md: 3, lg: 4, xl: 6, '2xl': 8 };
    case 'wide': return { sm: 1, md: 2, lg: 3, xl: 4, '2xl': 4 };
    case 'featured': return { sm: 1, md: 2, lg: 2, xl: 3, '2xl': 3 };
    default: return { sm: 1, md: 2, lg: 3, xl: 4, '2xl': 4 };
  }
};

const getColumnClass = (breakpoint: Breakpoint, columns: number) => {
  switch (breakpoint) {
    case 'sm': return `grid-cols-${columns}`;
    case 'md': return `md:grid-cols-${columns}`;
    case 'lg': return `lg:grid-cols-${columns}`;
    case 'xl': return `xl:grid-cols-${columns}`;
    case '2xl': return `2xl:grid-cols-${columns}`;
    default: return `grid-cols-${columns}`;
  }
};

export function DashboardGrid({
  children,
  layout = 'default',
  columns,
  gap = 'md',
  className,
}: DashboardGridProps) {
  const resolvedColumns = columns || getDefaultColumns(layout);
  const gapValue = getGapValue(gap);

  const gridClasses = Object.entries(resolvedColumns)
    .map(([breakpoint, cols]) => getColumnClass(breakpoint as Breakpoint, cols))
    .join(' ');

  return (
    <div className={cn('grid', gapValue, gridClasses, className)}>
      {children}
    </div>
  );
}

interface GridItemProps {
  children: React.ReactNode;
  span?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  className?: string;
}

const getSpanClass = (breakpoint: Breakpoint, span: number) => {
  switch (breakpoint) {
    case 'sm': return `col-span-${span}`;
    case 'md': return `md:col-span-${span}`;
    case 'lg': return `lg:col-span-${span}`;
    case 'xl': return `xl:col-span-${span}`;
    case '2xl': return `2xl:col-span-${span}`;
    default: return `col-span-${span}`;
  }
};

export function GridItem({ children, span = {}, className }: GridItemProps) {
  const spanClasses = Object.entries(span)
    .map(([breakpoint, value]) => getSpanClass(breakpoint as Breakpoint, value))
    .join(' ');

  return (
    <div className={cn(spanClasses, className)}>
      {children}
    </div>
  );
}

export default DashboardGrid;
