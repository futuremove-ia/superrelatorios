import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Building2,
  Tag,
  BarChart3,
  Users,
  CheckCircle2,
  Star,
  Zap,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateCardProps {
  template: {
    id: string;
    name: string;
    code: string;
    industry: string;
    category: string;
    description: string;
    rating: number;
    ratingCount: number;
    usageCount: number;
    tags: string[];
    expectedKPIs: string[];
    matchScore?: number;
    isSystem: boolean;
  };
  variant?: 'default' | 'compact' | 'recommendation';
  onSelect?: () => void;
  onPreview?: () => void;
}

const getIndustryIcon = (industry: string) => {
  switch (industry.toLowerCase()) {
    case 'varejo':
    case 'ecommerce':
      return Tag;
    case 'serviços':
    case 'consultoria':
      return Building2;
    case 'manufatura':
      return BarChart3;
    case 'saúde':
      return Users;
    default:
      return Building2;
  }
};

const getIndustryColor = (industry: string) => {
  switch (industry.toLowerCase()) {
    case 'varejo':
    case 'ecommerce':
      return 'bg-blue-500';
    case 'serviços':
    case 'consultoria':
      return 'bg-purple-500';
    case 'manufatura':
      return 'bg-orange-500';
    case 'saúde':
      return 'bg-emerald-500';
    default:
      return 'bg-gray-500';
  }
};

export function TemplateCard({
  template,
  variant = 'default',
  onSelect,
  onPreview,
}: TemplateCardProps) {
  const IndustryIcon = getIndustryIcon(template.industry);
  const industryColor = getIndustryColor(template.industry);

  // Compact variant
  if (variant === 'compact') {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={onSelect}>
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className={cn('p-2 rounded-lg', industryColor.replace('bg-', 'bg-opacity-20 bg-'))}>
              <IndustryIcon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{template.name}</p>
              <p className="text-xs text-muted-foreground">{template.category}</p>
            </div>
            {template.isSystem && (
              <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Sistema
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Recommendation variant
  if (variant === 'recommendation') {
    return (
      <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={cn('p-2 rounded-lg', industryColor)}>
                <IndustryIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base">{template.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{template.industry} · {template.category}</p>
              </div>
            </div>
            {template.matchScore !== undefined && (
              <div className="text-center shrink-0">
                <span className="text-xl font-bold text-primary">{template.matchScore}%</span>
                <p className="text-xs text-muted-foreground">match</p>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
          
          {template.matchScore !== undefined && (
            <Progress value={template.matchScore} className="h-1.5" />
          )}

          {/* KPIs - Compact */}
          <div className="flex flex-wrap gap-1">
            {template.expectedKPIs.slice(0, 3).map((kpi, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                {kpi}
              </Badge>
            ))}
            {template.expectedKPIs.length > 3 && (
              <Badge variant="outline" className="text-xs">+{template.expectedKPIs.length - 3}</Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {template.rating.toFixed(1)}
            </span>
            <span>{template.usageCount} usos</span>
          </div>
          <Button size="sm" onClick={onSelect}>
            Usar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn('p-2.5 rounded-xl', industryColor)}>
              <IndustryIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base">{template.name}</CardTitle>
              <p className="text-xs text-muted-foreground">{template.industry} · {template.category}</p>
            </div>
          </div>
          {template.isSystem && (
            <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Sistema
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>

        {/* Rating - Compact */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-3.5 w-3.5',
                i < Math.floor(template.rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              )}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            {template.rating.toFixed(1)} · {template.ratingCount} avaliações
          </span>
        </div>

        {/* KPIs */}
        <div className="flex flex-wrap gap-1">
          {template.expectedKPIs.slice(0, 4).map((kpi, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal">
              {kpi}
            </Badge>
          ))}
          {template.expectedKPIs.length > 4 && (
            <Badge variant="outline" className="text-xs">+{template.expectedKPIs.length - 4}</Badge>
          )}
        </div>

        {/* Code - Subtle */}
        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
          {template.code}
        </span>
      </CardContent>

      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          {template.usageCount} usos
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={onPreview} className="h-8">
            Preview
          </Button>
          <Button size="sm" onClick={onSelect} className="h-8">
            <Zap className="h-4 w-4 mr-2" />
            Usar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TemplateCard;
