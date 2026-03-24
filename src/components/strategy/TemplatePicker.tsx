/**
 * SuperRelatórios - Template Picker Component
 * Componente para selecionar templates estratégicos por indústria
 */

import React, { useState, useEffect } from 'react';
import { Search, Star, Download, Eye, Filter, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StrategicTemplate, INDUSTRIES, TEMPLATE_CATEGORIES, TemplateFilter } from '@/types/strategy';
import { StrategyLibraryService } from '@/application/strategy/services/StrategyLibraryService';

interface TemplatePickerProps {
  templates?: StrategicTemplate[];
  selectedTemplate?: string;
  onTemplateSelect?: (templateId: string) => void;
  onTemplateUse?: (templateId: string) => void;
  showUsage?: boolean;
  showRating?: boolean;
  industry?: string;
  category?: string;
  allowCustom?: boolean;
  className?: string;
}

export const TemplatePicker: React.FC<TemplatePickerProps> = ({
  templates,
  selectedTemplate,
  onTemplateSelect,
  onTemplateUse,
  showUsage = true,
  showRating = true,
  industry,
  category,
  allowCustom = false,
  className = ""
}) => {
  const [availableTemplates, setAvailableTemplates] = useState<StrategicTemplate[]>([]);
  const [filteredTemplates, setFilteredTemplates] = useState<StrategicTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>(industry || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(category || '');
  const [sortBy, setSortBy] = useState<'usage' | 'rating' | 'name'>('usage');
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    loadTemplates();
  }, []);

  useEffect(() => {
    if (templates) {
      setAvailableTemplates(templates);
    }
  }, [templates]);

  useEffect(() => {
    filterAndSortTemplates();
  }, [availableTemplates, searchTerm, selectedIndustry, selectedCategory, sortBy, activeTab]);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      const data = await StrategyLibraryService.getTemplates();
      setAvailableTemplates(data);
    } catch (error) {
      console.error('Error loading templates:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortTemplates = () => {
    let filtered = availableTemplates;

    // Filtro por aba ativa
    if (activeTab === 'popular') {
      filtered = filtered.filter(t => t.usage_count > 10);
    } else if (activeTab === 'public') {
      filtered = filtered.filter(t => t.is_public);
    }

    // Filtro por indústria
    if (selectedIndustry) {
      filtered = filtered.filter(t => t.industry === selectedIndustry);
    }

    // Filtro por categoria
    if (selectedCategory) {
      filtered = filtered.filter(t => t.category === selectedCategory);
    }

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'usage':
          return b.usage_count - a.usage_count;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredTemplates(filtered);
  };

  const handleTemplateSelect = (templateId: string) => {
    onTemplateSelect?.(templateId);
  };

  const handleTemplateUse = async (templateId: string) => {
    try {
      await StrategyLibraryService.recordTemplateUsage(templateId, 'org-id-placeholder');
      onTemplateUse?.(templateId);
    } catch (error) {
      console.error('Error recording template usage:', error);
    }
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      varejo: 'bg-blue-100 text-blue-800 border-blue-200',
      servicos: 'bg-green-100 text-green-800 border-green-200',
      manufatura: 'bg-orange-100 text-orange-800 border-orange-200',
      saude: 'bg-red-100 text-red-800 border-red-200',
      educacao: 'bg-purple-100 text-purple-800 border-purple-200',
      financeiro: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      tecnologia: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      consultoria: 'bg-pink-100 text-pink-800 border-pink-200',
      ecommerce: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      financeiro: 'bg-blue-50 text-blue-700 border-blue-200',
      vendas: 'bg-green-50 text-green-700 border-green-200',
      operacional: 'bg-orange-50 text-orange-700 border-orange-200',
      marketing: 'bg-purple-50 text-purple-700 border-purple-200',
      rh: 'bg-pink-50 text-pink-700 border-pink-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Filtros e Busca */}
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Todas as indústrias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as indústrias</SelectItem>
              <SelectItem value={INDUSTRIES.VAREJO}>Varejo</SelectItem>
              <SelectItem value={INDUSTRIES.SERVICOS}>Serviços</SelectItem>
              <SelectItem value={INDUSTRIES.MANUFATURA}>Manufatura</SelectItem>
              <SelectItem value={INDUSTRIES.SAUDE}>Saúde</SelectItem>
              <SelectItem value={INDUSTRIES.EDUCACAO}>Educação</SelectItem>
              <SelectItem value={INDUSTRIES.FINANCEIRO}>Financeiro</SelectItem>
              <SelectItem value={INDUSTRIES.TECNOLOGIA}>Tecnologia</SelectItem>
              <SelectItem value={INDUSTRIES.CONSULTORIA}>Consultoria</SelectItem>
              <SelectItem value={INDUSTRIES.ECOMMERCE}>E-commerce</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Todas as categorias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas as categorias</SelectItem>
              <SelectItem value={TEMPLATE_CATEGORIES.FINANCEIRO}>Financeiro</SelectItem>
              <SelectItem value={TEMPLATE_CATEGORIES.VENDAS}>Vendas</SelectItem>
              <SelectItem value={TEMPLATE_CATEGORIES.OPERACIONAL}>Operacional</SelectItem>
              <SelectItem value={TEMPLATE_CATEGORIES.MARKETING}>Marketing</SelectItem>
              <SelectItem value={TEMPLATE_CATEGORIES.RH}>RH</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usage">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Mais usados
                </div>
              </SelectItem>
              <SelectItem value="rating">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Melhor avaliados
                </div>
              </SelectItem>
              <SelectItem value="name">Nome</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Abas */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="popular">Populares</TabsTrigger>
            <TabsTrigger value="public">Públicos</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Lista de Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Filter className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum template encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
          </div>
        ) : (
          filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedTemplate === template.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getIndustryColor(template.industry)}>
                        {template.industry}
                      </Badge>
                      
                      <Badge className={getCategoryColor(template.category)}>
                        {template.category}
                      </Badge>

                      {template.is_system && (
                        <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                          Sistema
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                      {template.name}
                    </CardTitle>
                  </div>

                  <div className="flex items-center gap-2">
                    {showRating && (
                      <div className="flex items-center gap-1">
                        {renderStars(Math.round(template.rating))}
                        <span className="text-xs text-gray-600 ml-1">
                          ({template.rating_count})
                        </span>
                      </div>
                    )}

                    {showUsage && template.usage_count > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {template.usage_count} usos
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Descrição */}
                {template.description && (
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {template.description}
                  </p>
                )}

                {/* Tags */}
                {template.tags && template.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {template.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Estrutura do Arquivo */}
                {template.file_structure && (
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Estrutura do arquivo:
                    </h5>
                    
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-xs">
                      <div className="space-y-1">
                        <div>
                          <span className="font-medium">Colunas obrigatórias:</span>
                          <div className="mt-1">
                            {template.file_structure.required_columns?.slice(0, 3).map((col: any, index: number) => (
                              <div key={index} className="ml-2">
                                • {col.name} ({col.type})
                              </div>
                            ))}
                            {template.file_structure.required_columns?.length > 3 && (
                              <div className="ml-2 text-blue-600">
                                +{template.file_structure.required_columns.length - 3} colunas
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {template.file_structure.optional_columns && template.file_structure.optional_columns.length > 0 && (
                          <div className="mt-2">
                            <span className="font-medium">Colunas opcionais:</span>
                            <div className="mt-1">
                              {template.file_structure.optional_columns.slice(0, 2).map((col: any, index: number) => (
                                <div key={index} className="ml-2">
                                  • {col.name} ({col.type})
                                </div>
                              ))}
                              {template.file_structure.optional_columns.length > 2 && (
                                <div className="ml-2 text-blue-600">
                                  +{template.file_structure.optional_columns.length - 2} colunas
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* KPIs Esperados */}
                {template.expected_kpis && template.expected_kpis.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 text-sm">
                      KPIs que este template extrai:
                    </h5>
                    
                    <div className="flex flex-wrap gap-1">
                      {template.expected_kpis.map((kpi: any, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="font-mono text-xs"
                        >
                          {kpi.code}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botões de Ação */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleTemplateUse(template.id)}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Usar Template
                    </div>
                  </Button>

                  {template.documentation_url && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => window.open(template.documentation_url, '_blank')}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Contador */}
      <div className="text-center text-sm text-gray-600">
        {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} encontrado{filteredTemplates.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default TemplatePicker;
