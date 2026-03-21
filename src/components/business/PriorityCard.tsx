import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Priority, PriorityLevel } from '@/types/business';
import { Target, ArrowRight, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

import { useTranslation } from 'react-i18next';

interface PriorityCardProps {
  priority: Priority;
  onAction?: (priorityId: string) => void;
  onValidate?: (priority: Priority) => void;
}

export const PriorityCard: React.FC<PriorityCardProps> = ({ priority, onAction, onValidate }) => {
  const { t } = useTranslation();

  const getLevelColor = (level: PriorityLevel) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-50 border-red-100';
      case 'medium': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'low': return 'text-blue-600 bg-blue-50 border-blue-100';
    }
  };

  const getStatusIcon = (status: Priority['status']) => {
    switch (status) {
      case 'suggested': return <Zap className="h-4 w-4 text-amber-500" />;
      case 'validated': return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'dismissed': return <AlertTriangle className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <Card className="card-hover border-border/40 group overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className={`font-medium ${getLevelColor(priority.level)}`}>
            {t(`priorities.levels.${priority.level}`)}
          </Badge>
          <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
            {t('priorities.card.score')}: {priority.score.calculatedValue}
          </div>
        </div>
        <CardTitle className="text-lg flex items-center gap-2">
          {priority.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {priority.explanation}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {getStatusIcon(priority.status)}
            <span className="capitalize">
              {priority.status === 'suggested' ? t('priorities.card.ai_suggested') : t('priorities.card.validated')}
            </span>
          </div>
          <Button 
            size="sm" 
            variant={priority.status === 'suggested' ? 'default' : 'ghost'} 
            className="group-hover:translate-x-1 transition-transform"
            onClick={() => {
              if (priority.status === 'suggested' && onValidate) {
                onValidate(priority);
              } else {
                onAction?.(priority.id);
              }
            }}
          >
            {priority.status === 'suggested' ? t('priorities.card.cta_validate') : t('priorities.card.cta_action')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
