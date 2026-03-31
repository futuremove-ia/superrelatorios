import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Sparkles, 
  Eye,
  Calendar,
  MoreHorizontal,
  Copy
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReportCardProps {
  report: {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    status: 'draft' | 'published' | 'archived';
    updatedAt: string;
    blockCount: number;
    aiInsights: number;
    thumbnail?: string;
    blockTypes: string[];
  };
  variant?: 'grid' | 'list';
  onView?: () => void;
  onEdit?: () => void;
  onShare?: () => void;
  onDuplicate?: () => void;
}

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'published':
      return { color: 'bg-emerald-100 text-emerald-800 border-emerald-200', label: 'Publicado' };
    case 'draft':
      return { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', label: 'Rascunho' };
    case 'archived':
      return { color: 'bg-gray-100 text-gray-800 border-gray-200', label: 'Arquivado' };
    default:
      return { color: 'bg-gray-100 text-gray-800 border-gray-200', label: status };
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
};

export function ReportCard({
  report,
  variant = 'grid',
  onView,
  onEdit,
  onShare,
  onDuplicate,
}: ReportCardProps) {
  const statusConfig = getStatusConfig(report.status);
  const uniqueBlockTypes = [...new Set(report.blockTypes)];

  // List variant
  if (variant === 'list') {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Thumbnail or Icon */}
            {report.thumbnail ? (
              <div className="w-12 h-12 rounded-lg bg-cover bg-center flex-shrink-0" 
                   style={{ backgroundImage: `url(${report.thumbnail})` }} />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="font-semibold text-sm truncate">{report.title}</h3>
                <Badge variant="outline" className={cn('text-xs px-1', statusConfig.color)}>
                  {statusConfig.label}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground truncate">{report.subtitle}</p>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span>{report.blockCount} blocos</span>
                {report.aiInsights > 0 && (
                  <span className="flex items-center gap-1 text-purple-600">
                    <Sparkles className="h-3 w-3" />
                    {report.aiInsights} AI
                  </span>
                )}
                <span>{formatDate(report.updatedAt)}</span>
              </div>
            </div>

            {/* Actions - Consolidated */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={onView}>
                <Eye className="h-4 w-4 mr-1" />
                Ver
              </Button>
              <Button variant="ghost" size="icon" onClick={onShare}>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid variant (default)
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Thumbnail or Header */}
      <div className="relative h-28 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        {report.thumbnail ? (
          <div className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: `url(${report.thumbnail})` }} />
        ) : (
          <FileText className="h-10 w-10 text-primary/40" />
        )}
        
        {/* Status Badge - only one badge */}
        <Badge className={cn('absolute top-2 left-2 text-xs', statusConfig.color)}>
          {statusConfig.label}
        </Badge>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button size="sm" onClick={onView} className="bg-white text-black hover:bg-white/90">
            <Eye className="h-4 w-4 mr-2" />
            Ver
          </Button>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-base line-clamp-1">{report.title}</CardTitle>
        <CardDescription className="text-xs line-clamp-1">{report.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {/* Block Types - Compact */}
        <div className="flex items-center gap-1">
          {uniqueBlockTypes.slice(0, 3).map((type, index) => (
            <Badge key={index} variant="outline" className="text-xs font-normal">
              {type}
            </Badge>
          ))}
          {uniqueBlockTypes.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{uniqueBlockTypes.length - 3}
            </Badge>
          )}
        </div>

        {/* Meta Info - Inline */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(report.updatedAt)}
          </span>
          <span>{report.blockCount} blocos</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 flex justify-between">
        <div className="text-xs text-muted-foreground">
          {report.category}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onDuplicate}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ReportCard;
