import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Filter,
  Download,
  Upload,
  Copy,
  Eye,
  Star,
  Clock,
  User,
  Tag,
  Grid3x3,
  List,
  Layout,
  BarChart,
  PieChart,
  TrendingUp
} from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  category: 'financial' | 'operational' | 'strategic' | 'marketing' | 'sales' | 'custom';
  type: 'dashboard' | 'report' | 'analysis' | 'presentation';
  status: 'draft' | 'published' | 'archived';
  isPublic: boolean;
  isFavorite: boolean;
  usageCount: number;
  rating: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  preview?: string;
  blocks: TemplateBlock[];
}

interface TemplateBlock {
  id: string;
  type: 'chart' | 'table' | 'text' | 'metric' | 'image';
  title: string;
  description?: string;
  config: Record<string, any>;
  position: { x: number; y: number; width: number; height: number };
}

const TemplateManager: React.FC = () => {
  const { t } = useTranslation();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  useEffect(() => {
    // Load mock data
    const loadMockData = async () => {
      setLoading(true);
      
      const mockTemplates: Template[] = [
        {
          id: '1',
          name: 'Dashboard Financeiro Mensal',
          description: 'Dashboard completo com métricas financeiras essenciais para acompanhamento mensal',
          category: 'financial',
          type: 'dashboard',
          status: 'published',
          isPublic: true,
          isFavorite: true,
          usageCount: 245,
          rating: 4.8,
          author: 'João Silva',
          createdAt: '2024-01-15',
          updatedAt: '2024-03-18',
          tags: ['financeiro', 'mensal', 'kpi', 'dashboard'],
          preview: '/templates/financial-dashboard-preview.png',
          blocks: [
            {
              id: '1',
              type: 'metric',
              title: 'Receita Total',
              config: { dataSource: 'revenue', format: 'currency' },
              position: { x: 0, y: 0, width: 3, height: 2 }
            },
            {
              id: '2',
              type: 'chart',
              title: 'Evolução de Vendas',
              config: { chartType: 'line', dataSource: 'sales' },
              position: { x: 3, y: 0, width: 6, height: 4 }
            }
          ]
        },
        {
          id: '2',
          name: 'Relatório de Análise de Vendas',
          description: 'Relatório detalhado para análise de performance de vendas por período',
          category: 'sales',
          type: 'report',
          status: 'published',
          isPublic: true,
          isFavorite: false,
          usageCount: 189,
          rating: 4.6,
          author: 'Maria Santos',
          createdAt: '2024-02-01',
          updatedAt: '2024-03-15',
          tags: ['vendas', 'análise', 'performance', 'relatório'],
          blocks: [
            {
              id: '1',
              type: 'table',
              title: 'Top 10 Produtos',
              config: { dataSource: 'products', pagination: true },
              position: { x: 0, y: 0, width: 12, height: 6 }
            }
          ]
        },
        {
          id: '3',
          name: 'Dashboard Operacional',
          description: 'Monitoramento de métricas operacionais em tempo real',
          category: 'operational',
          type: 'dashboard',
          status: 'draft',
          isPublic: false,
          isFavorite: true,
          usageCount: 67,
          rating: 4.2,
          author: 'Pedro Costa',
          createdAt: '2024-02-20',
          updatedAt: '2024-03-19',
          tags: ['operacional', 'kpi', 'real-time', 'monitoring'],
          blocks: [
            {
              id: '1',
              type: 'metric',
              title: 'Eficiência Operacional',
              config: { dataSource: 'efficiency', format: 'percentage' },
              position: { x: 0, y: 0, width: 4, height: 2 }
            }
          ]
        }
      ];

      setTemplates(mockTemplates);
      setLoading(false);
    };

    loadMockData();
  }, []);

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesType = selectedType === 'all' || template.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'financial': return <BarChart className="w-4 h-4" />;
      case 'operational': return <Grid3x3 className="w-4 h-4" />;
      case 'strategic': return <TrendingUp className="w-4 h-4" />;
      case 'marketing': return <PieChart className="w-4 h-4" />;
      case 'sales': return <TrendingUp className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'dashboard': return <Layout className="w-4 h-4" />;
      case 'report': return <FileText className="w-4 h-4" />;
      case 'analysis': return <BarChart className="w-4 h-4" />;
      case 'presentation': return <Layout className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const TemplateCard: React.FC<{ template: Template }> = ({ template }) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            {getCategoryIcon(template.category)}
            <h3 className="font-semibold text-gray-900 truncate">{template.name}</h3>
            {template.isFavorite && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
          </div>
          <div className="flex items-center space-x-1">
            {template.isPublic && <Badge variant="secondary" className="text-xs">{t('common.public')}</Badge>}
            <Badge className={getStatusColor(template.status)}>
              {template.status}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{template.description}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {template.author}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {new Date(template.updatedAt).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">⭐</span>
            {template.rating}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-wrap gap-1">
            {template.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {template.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{template.tags.length - 3}
              </Badge>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-1">{template.usageCount}</span>
            usos
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getTypeIcon(template.type)}
            <span className="text-sm text-gray-600">{template.type}</span>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Copy className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const TemplateListItem: React.FC<{ template: Template }> = ({ template }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              {getCategoryIcon(template.category)}
              {getTypeIcon(template.type)}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{template.name}</h3>
                {template.isFavorite && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
              </div>
              <p className="text-sm text-gray-600">{template.description}</p>
              <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                <span>{template.author}</span>
                <span>{template.usageCount} usos</span>
                <span>⭐ {template.rating}</span>
                <span>{new Date(template.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex flex-wrap gap-1 max-w-xs">
              {template.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Badge className={getStatusColor(template.status)}>
              {template.status}
            </Badge>
            {template.isPublic && <Badge variant="secondary" className="text-xs">{t('common.public')}</Badge>}
            <div className="flex space-x-1">
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('templates.title')}</h1>
          <p className="text-gray-600 mt-1">{t('templates.subtitle')}</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            {t('templates.import')}
          </Button>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                {t('templates.create')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{t('templates.createNew')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('templates.name')}</Label>
                    <Input id="name" placeholder={t('templates.namePlaceholder')} />
                  </div>
                  <div>
                    <Label htmlFor="category">{t('templates.category')}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('templates.selectCategory')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">{t('templates.categories.financial')}</SelectItem>
                        <SelectItem value="operational">{t('templates.categories.operational')}</SelectItem>
                        <SelectItem value="strategic">{t('templates.categories.strategic')}</SelectItem>
                        <SelectItem value="marketing">{t('templates.categories.marketing')}</SelectItem>
                        <SelectItem value="sales">{t('templates.categories.sales')}</SelectItem>
                        <SelectItem value="custom">{t('templates.categories.custom')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">{t('templates.description')}</Label>
                  <Textarea id="description" placeholder={t('templates.descriptionPlaceholder')} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">{t('templates.type')}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('templates.selectType')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dashboard">{t('templates.types.dashboard')}</SelectItem>
                        <SelectItem value="report">{t('templates.types.report')}</SelectItem>
                        <SelectItem value="analysis">{t('templates.types.analysis')}</SelectItem>
                        <SelectItem value="presentation">{t('templates.types.presentation')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="tags">{t('templates.tags')}</Label>
                    <Input id="tags" placeholder={t('templates.tagsPlaceholder')} />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    {t('common.cancel')}
                  </Button>
                  <Button onClick={() => setIsCreateDialogOpen(false)}>
                    {t('templates.create')}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder={t('templates.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder={t('templates.filterByCategory')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('templates.allCategories')}</SelectItem>
            <SelectItem value="financial">{t('templates.categories.financial')}</SelectItem>
            <SelectItem value="operational">{t('templates.categories.operational')}</SelectItem>
            <SelectItem value="strategic">{t('templates.categories.strategic')}</SelectItem>
            <SelectItem value="marketing">{t('templates.categories.marketing')}</SelectItem>
            <SelectItem value="sales">{t('templates.categories.sales')}</SelectItem>
            <SelectItem value="custom">{t('templates.categories.custom')}</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder={t('templates.filterByType')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('templates.allTypes')}</SelectItem>
            <SelectItem value="dashboard">{t('templates.types.dashboard')}</SelectItem>
            <SelectItem value="report">{t('templates.types.report')}</SelectItem>
            <SelectItem value="analysis">{t('templates.types.analysis')}</SelectItem>
            <SelectItem value="presentation">{t('templates.types.presentation')}</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          {t('common.filters')}
        </Button>
        <div className="flex items-center space-x-1 border rounded-md p-1">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid3x3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Templates Grid/List */}
      <div className="space-y-4">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredTemplates.map((template) => (
              <TemplateListItem key={template.id} template={template} />
            ))}
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('templates.noResults')}
          </h3>
          <p className="text-gray-600 mb-4">
            {t('templates.noResultsDescription')}
          </p>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            {t('templates.createFirst')}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TemplateManager;
