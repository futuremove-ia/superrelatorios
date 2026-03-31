import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FileSpreadsheet, FileJson, FileText, Eye, Trash2, CheckCircle2, AlertCircle, AlertTriangle, Table } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValidationError {
  row: number;
  column: string;
  message: string;
}

interface DataFileCardProps {
  file: {
    id: string;
    name: string;
    type: 'csv' | 'excel' | 'json';
    size: number;
    rowCount: number;
    columnCount: number;
    validationStatus: 'valid' | 'invalid' | 'warning' | 'pending';
    errors?: ValidationError[];
    mappedColumns?: number;
    totalColumns?: number;
    uploadDate: string;
    source?: string;
  };
  variant?: 'default' | 'compact';
  onPreview?: () => void;
  onMapColumns?: () => void;
  onDelete?: () => void;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'csv': return FileText;
    case 'excel': return FileSpreadsheet;
    case 'json': return FileJson;
    default: return FileText;
  }
};

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'valid':
      return { icon: CheckCircle2, color: 'text-emerald-600', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200', label: 'Válido' };
    case 'invalid':
      return { icon: AlertCircle, color: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200', label: 'Inválido' };
    case 'warning':
      return { icon: AlertTriangle, color: 'text-yellow-600', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200', label: 'Atenção' };
    default:
      return { icon: AlertCircle, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', label: 'Pendente' };
  }
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export function DataFileCard({
  file,
  variant = 'default',
  onPreview,
  onMapColumns,
  onDelete,
}: DataFileCardProps) {
  const FileIcon = getFileIcon(file.type);
  const statusConfig = getStatusConfig(file.validationStatus);
  const mappingProgress = file.totalColumns ? Math.round(((file.mappedColumns || 0) / file.totalColumns) * 100) : 0;

  if (variant === 'compact') {
    return (
      <Card className={cn('overflow-hidden border-l-4', statusConfig.borderColor)}>
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', statusConfig.bgColor)}>
              <FileIcon className={cn('h-4 w-4', statusConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {file.rowCount.toLocaleString()} linhas · {formatFileSize(file.size)}
              </p>
            </div>
            <Badge variant="outline" className={cn('text-xs', statusConfig.color)}>
              {statusConfig.label}
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden border-l-4', statusConfig.borderColor)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-lg', statusConfig.bgColor)}>
              <FileIcon className={cn('h-5 w-5', statusConfig.color)} />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base">{file.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{file.type.toUpperCase()} · {formatFileSize(file.size)}</p>
            </div>
          </div>
          <div className={cn(
            'px-2 py-1 rounded-lg text-xs font-medium',
            statusConfig.bgColor,
            statusConfig.color
          )}>
            {statusConfig.label}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Stats - Inline */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Table className="h-4 w-4" />
            {file.rowCount.toLocaleString()} linhas
          </span>
          <span className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            {file.columnCount} colunas
          </span>
          {file.errors && file.errors.length > 0 && (
            <span className="flex items-center gap-1 text-red-600">
              <AlertCircle className="h-4 w-4" />
              {file.errors.length} erro(s)
            </span>
          )}
        </div>

        {/* Column Mapping - Compact */}
        {file.totalColumns && file.totalColumns > 0 && (
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Mapeamento</span>
              <span className="font-medium">{file.mappedColumns || 0}/{file.totalColumns}</span>
            </div>
            <Progress value={mappingProgress} className="h-1.5" />
          </div>
        )}

        {/* Error Summary - Subtle */}
        {file.errors && file.errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-2.5">
            <p className="text-xs text-red-600 line-clamp-2">
              <AlertCircle className="h-3 w-3 inline mr-1" />
              {file.errors[0].message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Button variant="outline" size="sm" onClick={onPreview} className="flex-1 h-8">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          {file.validationStatus !== 'valid' && (
            <Button variant="outline" size="sm" onClick={onMapColumns} className="flex-1 h-8">
              <Table className="h-4 w-4 mr-2" />
              Mapear
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={onDelete} className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default DataFileCard;
