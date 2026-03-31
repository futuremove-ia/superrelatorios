import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Table, 
  Sparkles, 
  TrendingUp,
  Type,
  LayoutGrid,
  AlertTriangle,
  CheckCircle2,
  Edit3,
  Trash2,
  GripVertical
} from 'lucide-react';
import { cn } from '@/lib/utils';

type BlockType = 
  | 'HERO' 
  | 'SUMMARY' 
  | 'KPI_GRID' 
  | 'CHART' 
  | 'CHART_DONNUT' 
  | 'CHART_BAR_HORIZONTAL' 
  | 'AI_INSIGHT' 
  | 'ACTION_PLAN' 
  | 'TABLE' 
  | 'CALLOUT' 
  | 'MARKDOWN' 
  | 'BENCHMARK_COMPARISON';

interface ReportBlockCardProps {
  block: {
    id: string;
    type: BlockType;
    title: string;
    layout: { w: number; h: number };
    content: {
      body?: string;
      data?: any;
      dataSourceKey?: string;
    };
    aiGenerated?: boolean;
    lastModified: string;
  };
  isEditing?: boolean;
  isSelected?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onSelect?: () => void;
}

const getBlockTypeConfig = (type: BlockType) => {
  switch (type) {
    case 'HERO':
      return { icon: Type, label: 'Título', color: 'bg-blue-100 text-blue-700' };
    case 'SUMMARY':
      return { icon: LayoutGrid, label: 'Resumo', color: 'bg-gray-100 text-gray-700' };
    case 'KPI_GRID':
      return { icon: TrendingUp, label: 'KPIs', color: 'bg-emerald-100 text-emerald-700' };
    case 'CHART':
    case 'CHART_DONNUT':
    case 'CHART_BAR_HORIZONTAL':
      return { icon: BarChart3, label: 'Gráfico', color: 'bg-purple-100 text-purple-700' };
    case 'AI_INSIGHT':
      return { icon: Sparkles, label: 'Insight AI', color: 'bg-yellow-100 text-yellow-700' };
    case 'ACTION_PLAN':
      return { icon: CheckCircle2, label: 'Ações', color: 'bg-indigo-100 text-indigo-700' };
    case 'TABLE':
      return { icon: Table, label: 'Tabela', color: 'bg-orange-100 text-orange-700' };
    case 'CALLOUT':
      return { icon: AlertTriangle, label: 'Destaque', color: 'bg-red-100 text-red-700' };
    default:
      return { icon: LayoutGrid, label: type, color: 'bg-gray-100 text-gray-700' };
  }
};

const getWidthClass = (w: number) => {
  if (w >= 12) return 'col-span-12';
  if (w >= 8) return 'col-span-8';
  if (w >= 6) return 'col-span-6';
  if (w >= 4) return 'col-span-4';
  return 'col-span-3';
};

export function ReportBlockCard({
  block,
  isEditing = false,
  isSelected = false,
  onEdit,
  onDelete,
  onSelect,
}: ReportBlockCardProps) {
  const typeConfig = getBlockTypeConfig(block.type);
  const TypeIcon = typeConfig.icon;

  return (
    <Card 
      className={cn(
        'overflow-hidden transition-all duration-200',
        isSelected ? 'ring-2 ring-primary border-primary' : 'border',
        isEditing && 'hover:border-gray-300 cursor-pointer',
        getWidthClass(block.layout.w)
      )}
      onClick={isEditing ? onSelect : undefined}
    >
      {/* Block Header (visible in edit mode) */}
      {isEditing && (
        <div className="flex items-center justify-between px-3 py-1.5 bg-muted/50 border-b">
          <div className="flex items-center gap-2">
            <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
            <Badge className={cn('text-xs', typeConfig.color)}>
              <TypeIcon className="h-3 w-3 mr-1" />
              {typeConfig.label}
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            {block.aiGenerated && (
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 text-xs">
                AI
              </Badge>
            )}
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={(e) => { e.stopPropagation(); onEdit?.(); }}>
              <Edit3 className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-red-600 hover:text-red-700" onClick={(e) => { e.stopPropagation(); onDelete?.(); }}>
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      {/* Block Content */}
      <CardContent className={cn('p-4', !isEditing && 'pt-5')}>
        {/* AI Badge (non-edit mode) */}
        {!isEditing && block.aiGenerated && (
          <Badge className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            AI
          </Badge>
        )}

        {/* Block Title */}
        <CardTitle className={cn(
          'text-base mb-2',
          block.type === 'HERO' && 'text-xl font-bold'
        )}>
          {block.title}
        </CardTitle>

        {/* Block Body */}
        {block.content.body && (
          <CardDescription className="text-sm whitespace-pre-wrap">
            {block.content.body}
          </CardDescription>
        )}

        {/* Placeholder for data-driven blocks */}
        {!block.content.body && (
          <div className="bg-muted rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <TypeIcon className="h-6 w-6 text-muted-foreground mb-1.5" />
            <p className="text-sm text-muted-foreground">{typeConfig.label}</p>
            {block.content.dataSourceKey ? (
              <p className="text-xs text-muted-foreground mt-1">
                Fonte: {block.content.dataSourceKey}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground mt-1">
                Clique para configurar
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default ReportBlockCard;
