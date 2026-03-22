import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Check, 
  AlertTriangle,
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  Target,
  Eye,
  EyeOff,
  RefreshCw,
  Download,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { useMetricsLibrary } from '@/hooks/useMetricsLibrary';
import { Link } from 'react-router-dom';

interface MetricConfig {
  id: string;
  name: string;
  unit: string;
  inputType: 'cumulative' | 'non_cumulative';
  groupDataPeriod: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'half_yearly' | 'yearly';
  totalIs: 'sum_of_values' | 'average_of_values' | 'last_value' | 'all_time' | 'ytd_as_of';
  trendDirection: 'higher_is_better' | 'lower_is_better' | 'no_trend';
  domain: string;
  description: string;
  calculationFormula?: string;
  ytdMonthOffset: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const MetricsConfig = () => {
  const { t } = useTranslation();
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [showInactive, setShowInactive] = useState(false);
  const [editingMetric, setEditingMetric] = useState<MetricConfig | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<MetricConfig>>({});

  const { metrics, isLoading, refetch } = useMetricsLibrary();

  // Mock data para demonstração
  const mockMetrics: MetricConfig[] = [
    {
      id: '1',
      name: 'Net Profit Margin',
      unit: '%',
      inputType: 'non_cumulative',
      groupDataPeriod: 'monthly',
      totalIs: 'average_of_values',
      trendDirection: 'higher_is_better',
      domain: 'finance',
      description: 'Margem de lucro líquida calculada como (Lucro Líquido / Receita Total) * 100',
      calculationFormula: '(net_profit / revenue) * 100',
      ytdMonthOffset: 0,
      isActive: true,
      createdAt: '2024-01-15',
      updatedAt: '2024-03-15'
    },
    {
      id: '2',
      name: 'Sales Conversion Rate',
      unit: '%',
      inputType: 'non_cumulative',
      groupDataPeriod: 'monthly',
      totalIs: 'average_of_values',
      trendDirection: 'higher_is_better',
      domain: 'commercial',
      description: 'Taxa de conversão de vendas do funil comercial',
      calculationFormula: '(converted_leads / total_leads) * 100',
      ytdMonthOffset: 0,
      isActive: true,
      createdAt: '2024-01-15',
      updatedAt: '2024-03-15'
    },
    {
      id: '3',
      name: 'Operational Efficiency',
      unit: '%',
      inputType: 'non_cumulative',
      groupDataPeriod: 'monthly',
      totalIs: 'average_of_values',
      trendDirection: 'higher_is_better',
      domain: 'operations',
      description: 'Eficiência operacional medida pela relação output/input',
      calculationFormula: '(actual_output / planned_input) * 100',
      ytdMonthOffset: 0,
      isActive: true,
      createdAt: '2024-01-15',
      updatedAt: '2024-03-15'
    },
    {
      id: '4',
      name: 'OKR Progress',
      unit: '%',
      inputType: 'non_cumulative',
      groupDataPeriod: 'monthly',
      totalIs: 'average_of_values',
      trendDirection: 'higher_is_better',
      domain: 'strategy',
      description: 'Progresso geral dos objetivos e resultados-chave',
      calculationFormula: 'SUM(objective_progress) / COUNT(objectives)',
      ytdMonthOffset: 0,
      isActive: true,
      createdAt: '2024-01-15',
      updatedAt: '2024-03-15'
    },
    {
      id: '5',
      name: 'Legacy Metric',
      unit: 'unidades',
      inputType: 'cumulative',
      groupDataPeriod: 'daily',
      totalIs: 'sum_of_values',
      trendDirection: 'higher_is_better',
      domain: 'operations',
      description: 'Métrica legada não utilizada',
      ytdMonthOffset: 0,
      isActive: false,
      createdAt: '2023-12-01',
      updatedAt: '2024-01-01'
    }
  ];

  const domains = [
    { value: 'finance', label: 'Financeiro', icon: DollarSign, color: 'bg-green-500' },
    { value: 'commercial', label: 'Comercial', icon: Users, color: 'bg-blue-500' },
    { value: 'operations', label: 'Operacional', icon: Zap, color: 'bg-orange-500' },
    { value: 'strategy', label: 'Estratégico', icon: Target, color: 'bg-purple-500' }
  ];

  const inputTypes = [
    { value: 'cumulative', label: 'Cumulativo' },
    { value: 'non_cumulative', label: 'Não Cumulativo' }
  ];

  const periods = [
    { value: 'daily', label: 'Diário' },
    { value: 'weekly', label: 'Semanal' },
    { value: 'monthly', label: 'Mensal' },
    { value: 'quarterly', label: 'Trimestral' },
    { value: 'half_yearly', label: 'Semestral' },
    { value: 'yearly', label: 'Anual' }
  ];

  const totalOptions = [
    { value: 'sum_of_values', label: 'Soma dos Valores' },
    { value: 'average_of_values', label: 'Média dos Valores' },
    { value: 'last_value', label: 'Último Valor' },
    { value: 'all_time', label: 'Todo o Período' },
    { value: 'ytd_as_of', label: 'YTD até a Data' }
  ];

  const trendOptions = [
    { value: 'higher_is_better', label: 'Maior é Melhor' },
    { value: 'lower_is_better', label: 'Menor é Melhor' },
    { value: 'no_trend', label: 'Sem Tendência' }
  ];

  const filteredMetrics = mockMetrics.filter(metric => {
    const matchesDomain = selectedDomain === 'all' || metric.domain === selectedDomain;
    const matchesActive = showInactive || metric.isActive;
    return matchesDomain && matchesActive;
  });

  const handleEdit = (metric: MetricConfig) => {
    setEditingMetric(metric);
    setFormData(metric);
    setIsDialogOpen(true);
  };

  const handleCreate = () => {
    setEditingMetric(null);
    setFormData({
      name: '',
      unit: '',
      inputType: 'non_cumulative',
      groupDataPeriod: 'monthly',
      totalIs: 'last_value',
      trendDirection: 'higher_is_better',
      domain: 'finance',
      description: '',
      ytdMonthOffset: 0,
      isActive: true
    });
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    // Lógica para salvar métrica
    console.log('Saving metric:', formData);
    setIsDialogOpen(false);
    setEditingMetric(null);
    setFormData({});
    refetch();
  };

  const handleDelete = (metricId: string) => {
    // Lógica para deletar métrica
    console.log('Deleting metric:', metricId);
    refetch();
  };

  const handleToggleActive = (metricId: string, isActive: boolean) => {
    // Lógica para ativar/desativar métrica
    console.log('Toggling metric:', metricId, isActive);
    refetch();
  };

  const getDomainIcon = (domain: string) => {
    const domainConfig = domains.find(d => d.value === domain);
    return domainConfig?.icon || BarChart3;
  };

  const getDomainColor = (domain: string) => {
    const domainConfig = domains.find(d => d.value === domain);
    return domainConfig?.color || 'bg-gray-500';
  };

  const getDomainName = (domain: string) => {
    const domainConfig = domains.find(d => d.value === domain);
    return domainConfig?.label || domain;
  };

  const getStatusBadge = (isActive: boolean) => (
    <Badge className={isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
      {isActive ? 'Ativa' : 'Inativa'}
    </Badge>
  );

  if (isLoading) {
    return (
      <div className="container-fluid space-y-8 py-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        
        <div className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map(i => (
              <Skeleton key={i} className="h-16 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Settings className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Configuração de Métricas</h1>
            <p className="text-muted-foreground">Gerencie as métricas do sistema</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Importar
          </Button>
          
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          
          <Button onClick={handleCreate}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Métrica
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Filtros e Configurações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="domain">Domínio</Label>
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos Domínios</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain.value} value={domain.value}>
                      {domain.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="showInactive"
                checked={showInactive}
                onCheckedChange={setShowInactive}
              />
              <Label htmlFor="showInactive">Mostrar métricas inativas</Label>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Métricas</p>
                <p className="text-2xl font-bold">{mockMetrics.length}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ativas</p>
                <p className="text-2xl font-bold">{mockMetrics.filter(m => m.isActive).length}</p>
              </div>
              <Check className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Inativas</p>
                <p className="text-2xl font-bold">{mockMetrics.filter(m => !m.isActive).length}</p>
              </div>
              <X className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Domínios</p>
                <p className="text-2xl font-bold">{domains.length}</p>
              </div>
              <Target className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Metrics Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Métricas Configuradas
            </span>
            <Badge variant="outline">
              {filteredMetrics.length} métricas
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Métrica</TableHead>
                <TableHead>Domínio</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Tendência</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMetrics.map((metric) => (
                <TableRow key={metric.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{metric.name}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {metric.description}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${getDomainColor(metric.domain)} rounded flex items-center justify-center`}>
                        {React.createElement(getDomainIcon(metric.domain), { className: 'w-3 h-3 text-white' })}
                      </div>
                      <span>{getDomainName(metric.domain)}</span>
                    </div>
                  </TableCell>
                  <TableCell>{metric.unit}</TableCell>
                  <TableCell>
                    {periods.find(p => p.value === metric.groupDataPeriod)?.label}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {metric.trendDirection === 'higher_is_better' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : metric.trendDirection === 'lower_is_better' ? (
                        <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />
                      ) : (
                        <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      )}
                      <span className="text-sm">
                        {trendOptions.find(t => t.value === metric.trendDirection)?.label}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(metric.isActive)}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleActive(metric.id, !metric.isActive)}
                      >
                        {metric.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(metric)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(metric.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingMetric ? 'Editar Métrica' : 'Nova Métrica'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome da Métrica</Label>
                <Input
                  id="name"
                  value={formData.name || ''}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Net Profit Margin"
                />
              </div>
              
              <div>
                <Label htmlFor="unit">Unidade</Label>
                <Input
                  id="unit"
                  value={formData.unit || ''}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  placeholder="Ex: %, R$, unidades"
                />
              </div>
              
              <div>
                <Label htmlFor="domain">Domínio</Label>
                <Select value={formData.domain} onValueChange={(value) => setFormData({ ...formData, domain: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map(domain => (
                      <SelectItem key={domain.value} value={domain.value}>
                        {domain.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="inputType">Tipo de Input</Label>
                <Select value={formData.inputType} onValueChange={(value: any) => setFormData({ ...formData, inputType: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {inputTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="groupDataPeriod">Período de Agrupamento</Label>
                <Select value={formData.groupDataPeriod} onValueChange={(value: any) => setFormData({ ...formData, groupDataPeriod: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {periods.map(period => (
                      <SelectItem key={period.value} value={period.value}>
                        {period.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="totalIs">Cálculo do Total</Label>
                <Select value={formData.totalIs} onValueChange={(value: any) => setFormData({ ...formData, totalIs: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {totalOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="trendDirection">Direção da Tendência</Label>
                <Select value={formData.trendDirection} onValueChange={(value: any) => setFormData({ ...formData, trendDirection: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {trendOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="ytdMonthOffset">Offset YTD (meses)</Label>
                <Input
                  id="ytdMonthOffset"
                  type="number"
                  value={formData.ytdMonthOffset || 0}
                  onChange={(e) => setFormData({ ...formData, ytdMonthOffset: parseInt(e.target.value) || 0 })}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={formData.isActive || false}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                />
                <Label htmlFor="isActive">Métrica Ativa</Label>
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descreva o que esta métrica mede..."
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="calculationFormula">Fórmula de Cálculo (opcional)</Label>
              <Textarea
                id="calculationFormula"
                value={formData.calculationFormula || ''}
                onChange={(e) => setFormData({ ...formData, calculationFormula: e.target.value })}
                placeholder="Ex: (net_profit / revenue) * 100"
                rows={2}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Exportar Configuração
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Upload className="w-4 h-4 mr-2" />
              Importar Configuração
            </Button>
            
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/app/metrics">
                <BarChart3 className="w-4 h-4 mr-2" />
                Ver Painel de Indicadores
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricsConfig;
