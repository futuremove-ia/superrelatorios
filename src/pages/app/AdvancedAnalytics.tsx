import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  PieChart,
  LineChart,
  Activity,
  Target,
  Brain,
  Filter,
  Download,
  RefreshCw,
  Calendar,
  Settings,
  Eye,
  ArrowRight,
  Zap,
  DollarSign,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KPICard } from '@/components/ui/kpi-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { useCrossDomainAnalytics } from '@/hooks/useCrossDomainAnalytics';
import { useMetricValues } from '@/hooks/useMetricValues';
import { Link } from 'react-router-dom';

const AdvancedAnalytics = () => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState('quarter');
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedDomains, setSelectedDomains] = useState<string[]>(['finance', 'commercial', 'operations', 'strategy']);

  // Hooks para dados
  const { analytics, isLoading: analyticsLoading } = useCrossDomainAnalytics('default-org');
  const { values, isLoading: valuesLoading } = useMetricValues('default-org');

  const loading = analyticsLoading || valuesLoading;

  // Mock data para demonstração
  const mockKPIs = [
    {
      title: 'Score de Saúde Geral',
      value: '82/100',
      icon: Activity,
      trend: { value: 5, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'success' as const,
      subtitle: 'Performance consolidada'
    },
    {
      title: 'Correlações Cruzadas',
      value: '12',
      icon: Brain,
      trend: { value: 3, isPositive: true, label: 'novas insights' },
      variant: 'info' as const,
      subtitle: 'Relacionamentos identificados'
    },
    {
      title: 'Métricas Críticas',
      value: '3',
      icon: AlertTriangle,
      trend: { value: -1, isPositive: false, label: 'vs. trimestre anterior' },
      variant: 'warning' as const,
      subtitle: 'Requerem atenção'
    },
    {
      title: 'Previsões Geradas',
      value: '8',
      icon: TrendingUp,
      trend: { value: 0, isPositive: true, label: 'estáveis' },
      variant: 'info' as const,
      subtitle: 'Modelos ativos'
    }
  ];

  const mockCorrelations = [
    {
      sourceMetric: 'Sales Conversion Rate',
      targetMetric: 'Net Profit Margin',
      correlation: 0.75,
      confidence: 0.85,
      impact: 'high',
      description: 'Maior conversão impacta diretamente a margem'
    },
    {
      sourceMetric: 'Operational Efficiency',
      targetMetric: 'Customer Satisfaction',
      correlation: 0.68,
      confidence: 0.72,
      impact: 'medium',
      description: 'Eficiência operacional melhora satisfação'
    },
    {
      sourceMetric: 'Marketing Spend',
      targetMetric: 'Customer Acquisition Cost',
      correlation: -0.82,
      confidence: 0.90,
      impact: 'high',
      description: 'Aumento de marketing eleva CAC'
    },
    {
      sourceMetric: 'Employee Engagement',
      targetMetric: 'Product Quality',
      correlation: 0.71,
      confidence: 0.78,
      impact: 'medium',
      description: 'Equipes engajadas produzem melhor qualidade'
    }
  ];

  const mockPredictions = [
    {
      metric: 'Net Profit Margin',
      currentValue: 15.8,
      predictedValue: 17.2,
      confidence: 85,
      timeframe: 'Próximos 3 meses',
      trend: 'up',
      factors: ['Aumento da conversão', 'Redução de custos operacionais']
    },
    {
      metric: 'Customer Acquisition Cost',
      currentValue: 320,
      predictedValue: 295,
      confidence: 78,
      timeframe: 'Próximos 2 meses',
      trend: 'down',
      factors: ['Otimização de campanhas', 'Melhoria qualificação leads']
    },
    {
      metric: 'Operational Efficiency',
      currentValue: 76.8,
      predictedValue: 81.5,
      confidence: 82,
      timeframe: 'Próximos 6 meses',
      trend: 'up',
      factors: ['Automação de processos', 'Treinamento equipe']
    },
    {
      metric: 'Churn Rate',
      currentValue: 4.2,
      predictedValue: 3.8,
      confidence: 75,
      timeframe: 'Próximos 4 meses',
      trend: 'down',
      factors: ['Programa de fidelização', 'Melhoria suporte']
    }
  ];

  const mockInsights = [
    {
      type: 'opportunity',
      title: 'Oportunidade de Crescimento',
      description: 'Correlação forte entre eficiência operacional e satisfação do cliente sugere investimento em otimização',
      impact: 'Alto',
      confidence: 85,
      actions: ['Analisar gargalos operacionais', 'Implementar melhorias', 'Medir impacto']
    },
    {
      type: 'risk',
      title: 'Risco de Aumento de CAC',
      description: 'Tendência de aumento no custo de aquisição sem melhoria proporcional na conversão',
      impact: 'Médio',
      confidence: 78,
      actions: ['Revisar estratégia de marketing', 'Otimizar canais', 'Aumentar qualificação']
    },
    {
      type: 'optimization',
      title: 'Otimização de Recursos',
      description: 'Realocação de recursos de marketing para retenção pode reduzir churn e aumentar LTV',
      impact: 'Alto',
      confidence: 72,
      actions: ['Calcular ROI', 'Testar alocação', 'Monitorar resultados']
    }
  ];

  const mockAnomalies = [
    {
      metric: 'Sales Conversion Rate',
      date: '2024-03-10',
      expectedValue: 14.7,
      actualValue: 8.2,
      severity: 'high',
      description: 'Queda abrupta na conversão sem causa aparente'
    },
    {
      metric: 'Operational Efficiency',
      date: '2024-03-08',
      expectedValue: 76.8,
      actualValue: 65.3,
      severity: 'medium',
      description: 'Redução temporária na eficiência operacional'
    },
    {
      metric: 'Customer Lifetime Value',
      date: '2024-03-05',
      expectedValue: 2100,
      actualValue: 2450,
      severity: 'low',
      description: 'Aumento positivo inesperado no LTV'
    }
  ];

  const getCorrelationColor = (correlation: number) => {
    if (correlation > 0.7) return 'text-green-600';
    if (correlation > 0.3) return 'text-blue-600';
    if (correlation > -0.3) return 'text-gray-600';
    if (correlation > -0.7) return 'text-orange-600';
    return 'text-red-600';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return TrendingUp;
      case 'risk': return AlertTriangle;
      case 'optimization': return Zap;
      default: return Brain;
    }
  };

  if (loading) {
    return (
      <div className="container-fluid space-y-8 py-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <div className="flex gap-3">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>

        <div className="space-y-6">
          <Skeleton className="h-6 w-48" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map(i => (
              <Skeleton key={i} className="h-64 rounded-xl" />
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
          <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics Avançados</h1>
            <p className="text-muted-foreground">Análise preditiva e insights inteligentes</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Mês</SelectItem>
              <SelectItem value="quarter">Trimestre</SelectItem>
              <SelectItem value="year">Ano</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {mockKPIs.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            icon={kpi.icon}
            trend={kpi.trend}
            variant={kpi.variant}
            subtitle={kpi.subtitle}
          />
        ))}
      </div>

      {/* Main Content */}
      <Tabs value={selectedView} onValueChange={setSelectedView} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="correlations">Correlações</TabsTrigger>
          <TabsTrigger value="predictions">Previsões</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="anomalies">Anomalias</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Analytics Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Resumo Analítico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Performance Saudável</p>
                        <p className="text-sm text-green-700">Score de 82/100 acima da meta</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">+5%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-blue-800">12 Correlações</p>
                        <p className="text-sm text-blue-700">Novos insights descobertos</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">+3</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="font-medium text-yellow-800">3 Métricas Críticas</p>
                        <p className="text-sm text-yellow-700">Requerem atenção imediata</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">-1</Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Top Insights</h4>
                  {mockInsights.slice(0, 2).map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <insight.icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <h5 className="font-medium">{insight.title}</h5>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {insight.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className={getImpactColor(insight.impact)}>
                            {insight.impact}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {insight.confidence}% confiança
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Predictions Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Previsões em Destaque
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockPredictions.slice(0, 3).map((prediction, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">{prediction.metric}</h5>
                      <Badge className={prediction.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                        {prediction.trend === 'up' ? '↗' : '↘'}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <span className="text-xs text-muted-foreground">Atual</span>
                        <p className="font-bold">{prediction.currentValue}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Previsto</span>
                        <p className="font-bold">{prediction.predictedValue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {prediction.timeframe}
                      </span>
                      <div className="flex items-center gap-2">
                        <Progress value={prediction.confidence} className="w-16 h-2" />
                        <span className="text-xs">{prediction.confidence}%</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/app/analytics?tab=predictions">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Todas Previsões
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Correlations Tab */}
        <TabsContent value="correlations" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Análise de Correlações</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockCorrelations.map((correlation, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Correlação #{index + 1}</span>
                    <Badge className={getImpactColor(correlation.impact)}>
                      {correlation.impact}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{correlation.sourceMetric}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{correlation.targetMetric}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {correlation.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Correlação</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-lg font-bold ${getCorrelationColor(correlation.correlation)}`}>
                          {correlation.correlation > 0 ? '+' : ''}{correlation.correlation}
                        </span>
                        <Progress 
                          value={Math.abs(correlation.correlation) * 100} 
                          className="flex-1 h-2"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Confiança</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{correlation.confidence}%</span>
                        <Progress value={correlation.confidence} className="flex-1 h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Analisar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Target className="w-4 h-4 mr-2" />
                      Ação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Predictions Tab */}
        <TabsContent value="predictions" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Previsões e Tendências</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Período
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {mockPredictions.map((prediction, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{prediction.metric}</h3>
                      <Badge className={prediction.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                        {prediction.trend === 'up' ? '↗ Tendência de Alta' : '↘ Tendência de Baixa'}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">{prediction.timeframe}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Valor Atual</p>
                      <p className="text-2xl font-bold">{prediction.currentValue}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Valor Previsto</p>
                      <p className="text-2xl font-bold text-blue-600">{prediction.predictedValue}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Confiança</p>
                      <div className="flex items-center gap-2 justify-center">
                        <Progress value={prediction.confidence} className="w-16 h-2" />
                        <span className="font-bold">{prediction.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Fatores Influenciadores:</p>
                    <div className="flex flex-wrap gap-2">
                      {prediction.factors.map((factor, idx) => (
                        <Badge key={idx} variant="outline">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      <Target className="w-4 h-4 mr-2" />
                      Plano de Ação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Insights Inteligentes</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {mockInsights.map((insight, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${
                      insight.type === 'opportunity' ? 'bg-green-100' :
                      insight.type === 'risk' ? 'bg-red-100' :
                      'bg-blue-100'
                    }`}>
                      <insight.icon className={`w-6 h-6 ${
                        insight.type === 'opportunity' ? 'text-green-600' :
                        insight.type === 'risk' ? 'text-red-600' :
                        'text-blue-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{insight.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge className={getImpactColor(insight.impact)}>
                            {insight.impact}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {insight.confidence}% confiança
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{insight.description}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Ações Recomendadas:</p>
                        <div className="space-y-1">
                          {insight.actions.map((action, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          Analisar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Target className="w-4 h-4 mr-2" />
                          Implementar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Anomalies Tab */}
        <TabsContent value="anomalies" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Detecção de Anomalias</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              <strong>Atenção:</strong> {mockAnomalies.length} anomalias detectadas no período selecionado.
              Algumas requerem investigação imediata.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            {mockAnomalies.map((anomaly, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{anomaly.metric}</h3>
                      <Badge className={getSeverityColor(anomaly.severity)}>
                        {anomaly.severity === 'high' ? 'Alta' :
                         anomaly.severity === 'medium' ? 'Média' : 'Baixa'}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">{anomaly.date}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Valor Esperado</span>
                      <p className="text-lg font-bold">{anomaly.expectedValue}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Valor Real</span>
                      <p className={`text-lg font-bold ${
                        anomaly.actualValue > anomaly.expectedValue ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {anomaly.actualValue}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Desvio</span>
                      <p className="text-lg font-bold">
                        {Math.abs(((anomaly.actualValue - anomaly.expectedValue) / anomaly.expectedValue) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{anomaly.description}</p>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Investigar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Target className="w-4 h-4 mr-2" />
                      Plano de Ação
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

export default AdvancedAnalytics;
