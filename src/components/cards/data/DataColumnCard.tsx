import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Hash, 
  Type, 
  Calendar, 
  ToggleLeft, 
  BarChart3,
  CheckCircle2,
  HelpCircle,
  Target
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataColumnCardProps {
  column: {
    name: string;
    type: 'numeric' | 'text' | 'date' | 'boolean' | 'category';
    mappedTo?: string;
    quality: {
      completeness: number;
      uniqueness: number;
      validity: number;
    };
    sampleValues: string[];
    stats?: {
      min?: number;
      max?: number;
      mean?: number;
      median?: number;
      uniqueCount?: number;
    };
  };
  variant?: 'default' | 'compact';
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'numeric': return Hash;
    case 'text': return Type;
    case 'date': return Calendar;
    case 'boolean': return ToggleLeft;
    case 'category': return BarChart3;
    default: return HelpCircle;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'numeric': return 'Numérico';
    case 'text': return 'Texto';
    case 'date': return 'Data';
    case 'boolean': return 'Booleano';
    case 'category': return 'Categoria';
    default: return type;
  }
};

const getQualityScore = (quality: { completeness: number; uniqueness: number; validity: number }) => {
  return Math.round((quality.completeness + quality.uniqueness + quality.validity) / 3);
};

const getQualityColor = (score: number) => {
  if (score >= 90) return { color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' };
  if (score >= 70) return { color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
  return { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' };
};

export function DataColumnCard({ column, variant = 'default' }: DataColumnCardProps) {
  const TypeIcon = getTypeIcon(column.type);
  const qualityScore = getQualityScore(column.quality);
  const qualityColor = getQualityColor(qualityScore);

  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-lg">
              <TypeIcon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{column.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-xs text-muted-foreground">{getTypeLabel(column.type)}</p>
                <span className={cn('text-xs font-medium', qualityColor.color)}>Q: {qualityScore}%</span>
              </div>
            </div>
            {column.mappedTo && (
              <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                {column.mappedTo}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4', qualityColor.border)}>
      <CardContent className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-lg">
              <TypeIcon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm">{column.name}</h4>
              <p className="text-xs text-muted-foreground">{getTypeLabel(column.type)}</p>
            </div>
          </div>
          
          {column.mappedTo ? (
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs shrink-0">
              <Target className="h-3 w-3 mr-1" />
              {column.mappedTo}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs">
              Não mapeado
            </Badge>
          )}
        </div>

        {/* Quality - Simplified */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Qualidade</span>
            <span className={cn('text-sm font-bold', qualityColor.color)}>{qualityScore}%</span>
          </div>
          <Progress value={qualityScore} className={cn('h-1.5', qualityScore >= 90 ? '[&>div]:bg-emerald-500' : qualityScore >= 70 ? '[&>div]:bg-yellow-500' : '[&>div]:bg-red-500')} />
          
          {/* Quality breakdown - inline */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>C: {column.quality.completeness}%</span>
            <span>U: {column.quality.uniqueness}%</span>
            <span>V: {column.quality.validity}%</span>
          </div>
        </div>

        {/* Stats - Compact for numeric */}
        {column.type === 'numeric' && column.stats && (
          <div className="flex items-center gap-3 text-sm border-t pt-2">
            <span className="text-muted-foreground">Mín: <strong>{column.stats.min?.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) || '-'}</strong></span>
            <span className="text-muted-foreground">Máx: <strong>{column.stats.max?.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) || '-'}</strong></span>
            <span className="text-muted-foreground">Méd: <strong>{column.stats.mean?.toLocaleString('pt-BR', { maximumFractionDigits: 1 }) || '-'}</strong></span>
          </div>
        )}

        {/* Sample Values - Compact */}
        <div className="flex flex-wrap gap-1 pt-1 border-t">
          {column.sampleValues.slice(0, 3).map((value, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal">
              {value.length > 15 ? value.substring(0, 15) + '...' : value}
            </Badge>
          ))}
          {column.sampleValues.length > 3 && (
            <Badge variant="outline" className="text-xs">+{column.sampleValues.length - 3}</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default DataColumnCard;
