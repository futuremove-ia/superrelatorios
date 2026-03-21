import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, FileText, CheckCircle, AlertTriangle, Star, TrendingUp, Users } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  code: string;
  description: string;
  industry: string;
  category: string;
  subcategory?: string;
  file_structure: {
    required_columns: Array<{
      name: string;
      type: string;
      format?: string;
      description: string;
    }>;
    optional_columns?: Array<{
      name: string;
      type: string;
      description: string;
    }>;
    min_rows?: number;
    max_rows?: number;
    file_types?: string[];
  };
  expected_kpis: Array<{
    code: string;
    name: string;
    unit: string;
  }>;
  tags: string[];
  usage_count: number;
  rating: number;
  rating_count: number;
  is_system: boolean;
  is_public: boolean;
  source_type: 'Sistema' | 'Personalizado' | 'Público';
  created_at: string;
  updated_at: string;
}

interface TemplateFormData {
  name: string;
  code: string;
  description: string;
  industry: string;
  category: string;
  subcategory: string;
  required_columns: Array<{
    name: string;
    type: string;
    format?: string;
    description: string;
  }>;
  optional_columns: Array<{
    name: string;
    type: string;
    description: string;
  }>;
  min_rows: number;
  max_rows: number;
  file_types: string[];
  tags: string[];
  is_public: boolean;
}

const TemplateManager = () => {
  const [activeTab, setActiveTab] = useState<'browse' | 'create' | 'edit'>('browse');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [formData, setFormData] = useState<TemplateFormData>({
    name: '',
    code: '',
    description: '',
    industry: 'general',
    category: 'financeiro',
    subcategory: '',
    required_columns: [],
    optional_columns: [],
    min_rows: 10,
    max_rows: 10000,
    file_types: ['csv', 'xlsx', 'xls'],
    tags: [],
    is_public: false
  });

  const { data: templates = [], isLoading } = useQuery({
    queryKey: ['strategic-templates'],
    queryFn: async (): Promise<Template[]> => {
      const { data } = await supabase
        .from('available_templates')
        .select('*');
      
      return data || [];
    }
  });

  const industries = [
    { value: 'general', label: 'Geral' },
    { value: 'varejo', label: 'Varejo' },
    { value: 'servicos', label: 'Serviços' },
    { value: 'manufatura', label: 'Manufatura' },
    { value: 'saude', label: 'Saúde' },
    { value: 'educacao', label: 'Educação' },
    { value: 'financeiro', label: 'Financeiro' },
    { value: 'construcao', label: 'Construção' },
    { value: 'tecnologia', label: 'Tecnologia' },
    { value: 'alimentos', label: 'Alimentos' }
  ];

  const categories = [
    { value: 'financeiro', label: 'Financeiro' },
    { value: 'vendas', label: 'Vendas' },
    { value: 'operacional', label: 'Operacional' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'rh', label: 'RH' },
    { value: 'juridico', label: 'Jurídico' },
    { value: 'estrategico', label: 'Estratégico' }
  ];

  const columnTypes = [
    { value: 'string', label: 'Texto' },
    { value: 'number', label: 'Número' },
    { value: 'date', label: 'Data' },
    { value: 'boolean', label: 'Verdadeiro/Falso' }
  ];

  const addRequiredColumn = () => {
    setFormData(prev => ({
      ...prev,
      required_columns: [...prev.required_columns, {
        name: '',
        type: 'string',
        description: ''
      }]
    }));
  };

  const addOptionalColumn = () => {
    setFormData(prev => ({
      ...prev,
      optional_columns: [...prev.optional_columns, {
        name: '',
        type: 'string',
        description: ''
      }]
    }));
  };

  const removeRequiredColumn = (index: number) => {
    setFormData(prev => ({
      ...prev,
      required_columns: prev.required_columns.filter((_, i) => i !== index)
    }));
  };

  const removeOptionalColumn = (index: number) => {
    setFormData(prev => ({
      ...prev,
      optional_columns: prev.optional_columns.filter((_, i) => i !== index)
    }));
  };

  const updateRequiredColumn = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      required_columns: prev.required_columns.map((col, i) => 
        i === index ? { ...col, [field]: value } : col
      )
    }));
  };

  const updateOptionalColumn = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      optional_columns: prev.optional_columns.map((col, i) => 
        i === index ? { ...col, [field]: value } : col
      )
    }));
  };

  const handleCreateTemplate = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      // Buscar organization do usuário
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();

      if (!profile?.organization_id) throw new Error('Usuário sem organização');

      // Criar template
      const { error } = await supabase
        .from('strategic_templates')
        .insert({
          ...formData,
          file_structure: {
            required_columns: formData.required_columns,
            optional_columns: formData.optional_columns,
            min_rows: formData.min_rows,
            max_rows: formData.max_rows,
            file_types: formData.file_types
          },
          created_by: user.id
        });

      if (error) throw error;

      // Resetar formulário
      setFormData({
        name: '',
        code: '',
        description: '',
        industry: 'general',
        category: 'financeiro',
        subcategory: '',
        required_columns: [],
        optional_columns: [],
        min_rows: 10,
        max_rows: 10000,
        file_types: ['csv', 'xlsx', 'xls'],
        tags: [],
        is_public: false
      });

      setActiveTab('browse');
    } catch (error) {
      console.error('Error creating template:', error);
    }
  };

  const getSourceColor = (sourceType: string) => {
    switch (sourceType) {
      case 'Sistema': return 'bg-blue-100 text-blue-800';
      case 'Personalizado': return 'bg-purple-100 text-purple-800';
      case 'Público': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestão de Templates</h1>
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'browse' ? 'default' : 'outline'}
            onClick={() => setActiveTab('browse')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Explorar Templates
          </Button>
          <Button
            variant={activeTab === 'create' ? 'default' : 'outline'}
            onClick={() => setActiveTab('create')}
          >
            <Upload className="w-4 h-4 mr-2" />
            Criar Template
          </Button>
        </div>
      </div>

      {activeTab === 'browse' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {template.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getSourceColor(template.source_type)}>
                        {template.source_type}
                      </Badge>
                      {template.is_system && (
                        <Badge variant="secondary">Sistema</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{template.industry}</span>
                    <span>•</span>
                    <span>{template.category}</span>
                    {template.subcategory && (
                      <>
                        <span>•</span>
                        <span>{template.subcategory}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {getRatingStars(template.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({template.rating_count} avaliações)
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{template.usage_count} usos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                      <span>{template.expected_kpis.length} KPIs</span>
                    </div>
                  </div>

                  {template.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'create' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Criar Novo Template</CardTitle>
              <CardDescription>
                Defina a estrutura esperada do arquivo e as métricas que devem ser extraídas.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome do Template</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Fluxo de Caixa Mensal"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="code">Código</Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                    placeholder="Ex: FLUXO_CAIXA_MENSAL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Descreva para que serve este template..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Indústria</Label>
                  <Select 
                    value={formData.industry} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map(industry => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subcategory">Subcategoria</Label>
                  <Input
                    id="subcategory"
                    value={formData.subcategory}
                    onChange={(e) => setFormData(prev => ({ ...prev, subcategory: e.target.value }))}
                    placeholder="Opcional"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Colunas Obrigatórias</Label>
                  <Button type="button" variant="outline" onClick={addRequiredColumn}>
                    Adicionar Coluna
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {formData.required_columns.map((column, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Coluna {index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeRequiredColumn(index)}
                        >
                          Remover
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="space-y-2">
                          <Label>Nome</Label>
                          <Input
                            value={column.name}
                            onChange={(e) => updateRequiredColumn(index, 'name', e.target.value)}
                            placeholder="Ex: data"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Tipo</Label>
                          <Select 
                            value={column.type} 
                            onValueChange={(value) => updateRequiredColumn(index, 'type', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {columnTypes.map(type => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Formato (opcional)</Label>
                          <Input
                            value={column.format || ''}
                            onChange={(e) => updateRequiredColumn(index, 'format', e.target.value)}
                            placeholder="Ex: YYYY-MM-DD"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Descrição</Label>
                        <Input
                          value={column.description}
                          onChange={(e) => updateRequiredColumn(index, 'description', e.target.value)}
                          placeholder="Descreva esta coluna..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Colunas Opcionais</Label>
                  <Button type="button" variant="outline" onClick={addOptionalColumn}>
                    Adicionar Coluna
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {formData.optional_columns.map((column, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Coluna Opcional {index + 1}</h4>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeOptionalColumn(index)}
                        >
                          Remover
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label>Nome</Label>
                          <Input
                            value={column.name}
                            onChange={(e) => updateOptionalColumn(index, 'name', e.target.value)}
                            placeholder="Ex: categoria"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Tipo</Label>
                          <Select 
                            value={column.type} 
                            onValueChange={(value) => updateOptionalColumn(index, 'type', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {columnTypes.map(type => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Descrição</Label>
                        <Input
                          value={column.description}
                          onChange={(e) => updateOptionalColumn(index, 'description', e.target.value)}
                          placeholder="Descreva esta coluna..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min_rows">Mínimo de Linhas</Label>
                  <Input
                    id="min_rows"
                    type="number"
                    value={formData.min_rows}
                    onChange={(e) => setFormData(prev => ({ ...prev, min_rows: parseInt(e.target.value) || 0 }))}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max_rows">Máximo de Linhas</Label>
                  <Input
                    id="max_rows"
                    type="number"
                    value={formData.max_rows}
                    onChange={(e) => setFormData(prev => ({ ...prev, max_rows: parseInt(e.target.value) || 0 }))}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="is_public"
                  checked={formData.is_public}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_public: checked as boolean }))}
                />
                <Label htmlFor="is_public">
                  Tornar este template público para outras organizações
                </Label>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleCreateTemplate}>
                  Criar Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {selectedTemplate && (
        <Card className="fixed inset-0 z-50 m-0 h-screen w-screen rounded-none">
          <CardContent className="h-full overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">{selectedTemplate.name}</h2>
                <p className="text-gray-600 mt-2">{selectedTemplate.description}</p>
              </div>
              <Button variant="outline" onClick={() => setSelectedTemplate(null)}>
                Fechar
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Informações Gerais</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Código:</strong> {selectedTemplate.code}</div>
                    <div><strong>Indústria:</strong> {selectedTemplate.industry}</div>
                    <div><strong>Categoria:</strong> {selectedTemplate.category}</div>
                    {selectedTemplate.subcategory && (
                      <div><strong>Subcategoria:</strong> {selectedTemplate.subcategory}</div>
                    )}
                    <div><strong>Tipo:</strong> {selectedTemplate.source_type}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Métricas</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {getRatingStars(selectedTemplate.rating)}
                      </div>
                      <span>{selectedTemplate.rating} ({selectedTemplate.rating_count} avaliações)</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{selectedTemplate.usage_count} usos</span>
                      <span>•</span>
                      <span>{selectedTemplate.expected_kpis.length} KPIs esperados</span>
                    </div>
                  </div>
                </div>

                {selectedTemplate.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTemplate.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Estrutura do Arquivo</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-red-600">Colunas Obrigatórias ({selectedTemplate.file_structure.required_columns.length})</h4>
                      <div className="mt-2 space-y-2">
                        {selectedTemplate.file_structure.required_columns.map((col, index) => (
                          <div key={index} className="border-l-4 border-red-300 pl-4 py-2">
                            <div className="font-medium">{col.name}</div>
                            <div className="text-sm text-gray-600">
                              Tipo: {col.type} 
                              {col.format && ` • Formato: ${col.format}`}
                            </div>
                            <div className="text-sm">{col.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedTemplate.file_structure.optional_columns && selectedTemplate.file_structure.optional_columns.length > 0 && (
                      <div>
                        <h4 className="font-medium text-blue-600">Colunas Opcionais ({selectedTemplate.file_structure.optional_columns.length})</h4>
                        <div className="mt-2 space-y-2">
                          {selectedTemplate.file_structure.optional_columns.map((col, index) => (
                            <div key={index} className="border-l-4 border-blue-300 pl-4 py-2">
                              <div className="font-medium">{col.name}</div>
                              <div className="text-sm text-gray-600">
                                Tipo: {col.type}
                              </div>
                              <div className="text-sm">{col.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm space-y-1">
                        <div><strong>Mínimo de linhas:</strong> {selectedTemplate.file_structure.min_rows || 'Não especificado'}</div>
                        <div><strong>Máximo de linhas:</strong> {selectedTemplate.file_structure.max_rows || 'Não especificado'}</div>
                        <div><strong>Tipos de arquivo:</strong> {selectedTemplate.file_structure.file_types?.join(', ') || 'Todos'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">KPIs Esperados</h3>
                  <div className="space-y-2">
                    {selectedTemplate.expected_kpis.map((kpi, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{kpi.name}</div>
                          <div className="text-sm text-gray-600">Código: {kpi.code}</div>
                        </div>
                        <Badge variant="outline">{kpi.unit}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TemplateManager;
