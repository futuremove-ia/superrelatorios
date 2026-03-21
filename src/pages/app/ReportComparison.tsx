import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Calendar,
  Download,
  Eye,
  ArrowRight,
  Filter,
  Plus
} from 'lucide-react';

interface ReportComparison {
  id: string;
  report1_id: string;
  report2_id: string;
  comparison_name: string;
  comparison_type: 'period' | 'unit' | 'department' | 'template';
  metrics_comparison: {
    metric_code: string;
    report1_value: number;
    report2_value: number;
    variance: number;
    variance_percentage: number;
  }[];
  insights: string[];
  created_at: string;
}

interface Report {
  id: string;
  title: string;
  description: string;
  status: string;
  organization_id: string;
  business_unit_id?: string;
  department_id?: string;
  team_id?: string;
  created_at: string;
  data_json?: any;
}

const ReportComparison = () => {
  const [selectedReport1, setSelectedReport1] = useState<string>('');
  const [selectedReport2, setSelectedReport2] = useState<string>('');
  const [comparisonType, setComparisonType] = useState<'period' | 'unit' | 'department'>('period');
  const [isCreating, setIsCreating] = useState(false);

  // Buscar relatórios disponíveis
  const { data: reports = [], isLoading: reportsLoading } = useQuery({
    queryKey: ['reports-for-comparison'],
    queryFn: async (): Promise<Report[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      const { data } = await supabase
        .from('reports')
        .select('*')
        .eq('organization_id', profile.organization_id)
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(50);
      
      return data || [];
    },
    staleTime: 1000 * 60 * 5,
  });

  // Buscar comparações existentes
  const { data: comparisons = [], isLoading: comparisonsLoading } = useQuery({
    queryKey: ['report-comparisons'],
    queryFn: async (): Promise<ReportComparison[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      const { data } = await supabase
        .from('report_comparisons')
        .select(`
          *,
          report1:report1_id(title, created_at),
          report2:report2_id(title, created_at)
        `)
        .eq('organization_id', profile.organization_id)
        .order('created_at', { ascending: false })
        .limit(20);
      
      return data || [];
    },
    staleTime: 1000 * 60 * 5,
  });

  // Criar nova comparação
  const createComparison = async () => {
    if (!selectedReport1 || !selectedReport2) return;
    
    setIsCreating(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      // Buscar dados completos dos relatórios
      const { data: report1Data } = await supabase
        .from('reports')
        .select('*')
        .eq('id', selectedReport1)
        .single();
      
      const { data: report2Data } = await supabase
        .from('reports')
        .select('*')
        .eq('id', selectedReport2)
        .single();
      
      // Extrair métricas comparáveis
      const metricsComparison = [];
      
      // Comparar métricas principais
      if (report1Data?.data_json?.kpis && report2Data?.data_json?.kpis) {
        const kpis1 = report1Data.data_json.kpis;
        const kpis2 = report2Data.data_json.kpis;
        
        // Encontrar KPIs em comum
        const commonKpis = Object.keys(kpis1).filter(key => kpis2[key]);
        
        commonKpis.forEach(kpiCode => {
          const value1 = parseFloat(kpis1[kpiCode].value) || 0;
          const value2 = parseFloat(kpis2[kpiCode].value) || 0;
          const variance = value2 - value1;
          const variancePercentage = value1 !== 0 ? (variance / value1) * 100 : 0;
          
          metricsComparison.push({
            metric_code: kpiCode,
            report1_value: value1,
            report2_value: value2,
            variance,
            variance_percentage: variancePercentage
          });
        });
      }
      
      // Gerar insights automáticos
      const insights = [];
      
      // Encontrar maiores variações
      const significantVariances = metricsComparison
        .filter(m => Math.abs(m.variance_percentage) > 10)
        .sort((a, b) => Math.abs(b.variance_percentage) - Math.abs(a.variance_percentage))
        .slice(0, 3);
      
      significantVariances.forEach(variance => {
        if (variance.variance_percentage > 0) {
          insights.push(`${variance.metric_code} aumentou ${Math.abs(variance.variance_percentage).toFixed(1)}%`);
        } else {
          insights.push(`${variance.metric_code} diminuiu ${Math.abs(variance.variance_percentage).toFixed(1)}%`);
        }
      });
      
      // Salvar comparação
      const { error } = await supabase
        .from('report_comparisons')
        .insert({
          organization_id: profile.organization_id,
          report1_id: selectedReport1,
          report2_id: selectedReport2,
          comparison_name: `${report1Data?.title} vs ${report2Data?.title}`,
          comparison_type: comparisonType,
          metrics_comparison,
          insights
        });
      
      if (error) throw error;
      
      // Resetar seleção
      setSelectedReport1('');
      setSelectedReport2('');
      
    } catch (error) {
      console.error('Erro ao criar comparação:', error);
    } finally {
      setIsCreating(false);
    }
  };

  // Filtrar relatórios por tipo de comparação
  const filteredReports = reports.filter(report => {
    if (comparisonType === 'period') return true; // Qualquer relatório
    if (comparisonType === 'unit') return !!report.business_unit_id;
    if (comparisonType === 'department') return !!report.department_id;
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getVarianceColor = (variance: number) => {
    if (variance > 0) return 'text-green-600';
    if (variance < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getVarianceIcon = (variance: number) => {
    if (variance > 0) return <TrendingUp className="w-4 h-4" />;
    if (variance < 0) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Comparação de Relatórios</h1>
        <Button onClick={() => window.location.href = '/app/relatorios'}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Relatório
        </Button>
      </div>

      <Tabs defaultValue="create" className="space-y-6">
        <TabsList>
          <TabsTrigger value="create">Criar Comparação</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
        </TabsList>

        {/* Aba: Criar Comparação */}
        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurar Comparação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Tipo de Comparação</Label>
                  <Select value={comparisonType} onValueChange={(value: any) => setComparisonType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="period">Por Período</SelectItem>
                      <SelectItem value="unit">Por Unidade</SelectItem>
                      <SelectItem value="department">Por Departamento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Relatório 1</Label>
                  <Select value={selectedReport1} onValueChange={setSelectedReport1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o primeiro relatório" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredReports.map((report) => (
                        <SelectItem key={report.id} value={report.id}>
                          <div className="flex flex-col items-start">
                            <span>{report.title}</span>
                            <span className="text-xs text-gray-500">
                              {formatDate(report.created_at)}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Relatório 2</Label>
                  <Select value={selectedReport2} onValueChange={setSelectedReport2}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o segundo relatório" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredReports.map((report) => (
                        <SelectItem key={report.id} value={report.id}>
                          <div className="flex flex-col items-start">
                            <span>{report.title}</span>
                            <span className="text-xs text-gray-500">
                              {formatDate(report.created_at)}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={createComparison}
                  disabled={!selectedReport1 || !selectedReport2 || isCreating}
                  className="w-full max-w-md"
                >
                  {isCreating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Criando Comparação...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Comparar Relatórios
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Prévia da Comparação */}
          {selectedReport1 && selectedReport2 && (
            <Card>
              <CardHeader>
                <CardTitle>Prévia da Comparação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reports
                    .filter(r => r.id === selectedReport1 || r.id === selectedReport2)
                    .map((report) => (
                      <div key={report.id} className="space-y-3">
                        <h3 className="font-semibold">{report.title}</h3>
                        <div className="text-sm text-gray-600">
                          <p>{report.description}</p>
                          <p>Criado em: {formatDate(report.created_at)}</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Relatório
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Aba: Histórico */}
        <TabsContent value="history" className="space-y-6">
          <div className="space-y-4">
            {comparisons.map((comparison) => (
              <Card key={comparison.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      {comparison.comparison_name}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">
                        {comparison.comparison_type}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {formatDate(comparison.created_at)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Relatórios comparados */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Relatório 1</Label>
                      <div className="p-3 border rounded">
                        <h4 className="font-medium">{comparison.report1?.title}</h4>
                        <p className="text-sm text-gray-600">
                          {formatDate(comparison.report1?.created_at)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Relatório 2</Label>
                      <div className="p-3 border rounded">
                        <h4 className="font-medium">{comparison.report2?.title}</h4>
                        <p className="text-sm text-gray-600">
                          {formatDate(comparison.report2?.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Métricas comparadas */}
                  <div>
                    <Label className="text-sm font-medium">Métricas Comparadas</Label>
                    <div className="mt-2 space-y-2">
                      {comparison.metrics_comparison.slice(0, 5).map((metric, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded">
                          <div>
                            <div className="font-medium">{metric.metric_code}</div>
                            <div className="text-sm text-gray-600">
                              {metric.report1_value.toLocaleString()} → {metric.report2_value.toLocaleString()}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={getVarianceColor(metric.variance)}>
                              {metric.variance > 0 ? '+' : ''}{metric.variance.toLocaleString()}
                            </span>
                            <div className={`flex items-center gap-1 ${getVarianceColor(metric.variance)}`}>
                              {getVarianceIcon(metric.variance)}
                              <span className="text-sm">
                                ({metric.variance > 0 ? '+' : ''}{metric.variance_percentage.toFixed(1)}%)
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Insights gerados */}
                  {comparison.insights && comparison.insights.length > 0 && (
                    <div>
                      <Label className="text-sm font-medium">Insights Automáticos</Label>
                      <div className="mt-2 space-y-2">
                        {comparison.insights.map((insight, index) => (
                          <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded">
                            <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5" />
                            <span className="text-sm text-blue-800">{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ações */}
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportComparison;
