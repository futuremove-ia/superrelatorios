import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

/**
 * Componente reutilizável para estados vazios (Empty States)
 * Segue o padrão visual do SuperRelatórios v2.0
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  className = ""
}) => {
  return (
    <Card className={`border-dashed border-2 bg-muted/10 shadow-none py-12 ${className}`}>
      <CardContent className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-background rounded-2xl shadow-sm border border-border/50 text-muted-foreground/40">
          <Icon className="h-10 w-10" />
        </div>
        <div className="max-w-xs space-y-2">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        {actionLabel && onAction && (
          <Button 
            onClick={onAction} 
            className="mt-2 font-bold shadow-md bg-primary hover:bg-primary/90"
          >
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
