import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Target,
  Users,
  Activity,
  PieChart,
  ArrowRight,
  Download,
  RefreshCw,
  Filter,
  Calendar,
  Eye,
  Settings,
  Zap,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KPICard } from '@/components/ui/kpi-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Link } from 'react-router-dom';

const ConsolidatedDashboard = () => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState('quarter');
  const [selectedView, setSelectedView] = useState('overview');

  // Mock data para demonstração
  const mockKPIs = [
    {
      title: 'Receita Total',
      value: 'R$2.4M',
      icon: DollarSign,
      trend: { value: 18, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'success' as const,
      subtitle: 'Crescimento saudável'
    },
    {
      title: 'Margem Líquida',
      value: '15.8%',
      icon: TrendingUp,
      trend: { value: 3.2, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'success' as const,
      subtitle: 'Acima da meta'
    },
    {
      title: 'Taxa de Execução',
      value: '76%',
      icon: Target,
      trend: { value: 8, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'info' as const,
      subtitle: 'Iniciativas concluídas'
    },
    {
      title: 'Score de Saúde',
      value: '82/100',
      icon: Activity,
      trend: { value: 5, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'success' as const,
      subtitle: 'Performance geral'
    }
  ];

  const mockDomainMetrics = [
    {
      domain: 'Financeiro',
      icon: DollarSign,
      color: 'bg-green-500',
      metrics: [
        { name: 'Receita', value: 'R$2.4M', trend: 18, health: 'good' },
        { name: 'Margem', value: '15.8%', trend: 3.2, health: 'good' },
        { name: 'CAC', value: 'R$320', trend: -5, health: 'good' },
        { name: 'LTV', value: 'R$2.1K', trend: 12, health: 'good' }
      ],
      score: 85,
      status: 'on-track'
    },
    {
      domain: 'Comercial',
      icon: Users,
      color: 'bg-blue-500',
      metrics: [
        { name: 'Conversão', value: '14.7%', trend: 2.4, health: 'good' },
        { name: 'Pipeline', value: '850', trend: 15, health: 'good' },
        { name: 'Ticket Médio', value: 'R$450', trend: 8, health: 'good' },
        { name: 'Churn', value: '4.2%', trend: -1.8, health: 'warning' }
      ],
      score: 78,
      status: 'on-track'
    },
    {
      domain: 'Operacional',
      icon: Zap,
      color: 'bg-orange-500',
      metrics: [
        { name: 'Eficiência', value: '76.8%', trend: 4.3, health: 'good' },
        { name: 'Qualidade', value: '94.2%', trend: 2.1, health: 'good' },
        { name: 'Throughput', value: '1.25K', trend: 18, health: 'good' },
        { name: 'Capacidade', value: '71%', trend: 3, health: 'warning' }
      ],
      score: 82,
      status: 'on-track'
    },
    {
      domain: 'Estratégico',
      icon: Target,
      color: 'bg-purple-500',
      metrics: [
        { name: 'OKR Progress', value: '78%', trend: 5, health: 'good' },
        { name: 'Iniciativas', value: '67%', trend: -2, health: 'warning' },
        { name: 'Alinhamento', value: '91%', trend: 3, health: 'good' },
        { name: 'Execução', value: '73%', trend: 1, health: 'warning' }
      ],
      score: 77,
      status: 'at-risk'
    }
  ];

  const mockTrends = [
    { period: 'Q1', revenue: 1800000, margin: 12.5, execution: 65, score: 72 },
    { period: 'Q2', revenue: 2100000, margin: 14.2, execution: 71, score: 76 },
    { period: 'Q3', revenue: 1950000, margin: 13.8, execution: 68, score: 74 },
    { period: 'Q4', revenue: 2400000, margin: 15.8, execution: 76, score: 82 }
  ];

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'bg-green-100 text-green-800';
      case 'at-risk': return 'bg-yellow-100 text-yellow-800';
      case 'off-track': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="container-fluid space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard Consolidado</h1>
            <p className="text-muted-foreground">Visão unificada de todos os indicadores estratégicos</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">{t('dashboard.period.month')}</SelectItem>
              <SelectItem value="quarter">{t('dashboard.period.quarter')}</SelectItem>
              <SelectItem value="year">{t('dashboard.period.year')}</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            {t('common.filter')}
          </Button>
          
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            {t('common.export')}
          </Button>
          
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            {t('common.refresh')}
          </Button>
        </div>
      </div>

      {/* Executive Summary Alert */}
      <Alert className="border-blue-200 bg-blue-50">
        <TrendingUp className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>{t('dashboard.summary.title')}:</strong> {t('dashboard.summary.description')}
          <Button variant="link" size="sm" className="p-0 h-auto ml-2 text-blue-600">
            {t('dashboard.summary.view_details')}
          </Button>
        </AlertDescription>
      </Alert>

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
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">{t('dashboard.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="domains">{t('dashboard.tabs.domains')}</TabsTrigger>
          <TabsTrigger value="trends">{t('dashboard.tabs.trends')}</TabsTrigger>
          <TabsTrigger value="insights">{t('dashboard.tabs.insights')}</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Resumo de Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {mockDomainMetrics.map((domain) => (
                    <div key={domain.domain} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${domain.color} rounded-lg flex items-center justify-center`}>
                          <domain.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{domain.domain}</p>
                          <p className="text-sm text-muted-foreground">
                            {domain.metrics.filter(m => m.health === 'good').length}/{domain.metrics.length} métricas saudáveis
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">{domain.score}/100</span>
                          <Badge className={getStatusColor(domain.status)}>
                            {domain.status === 'on-track' ? 'No Caminho' : 
                             domain.status === 'at-risk' ? 'Em Risco' : 'Fora do Caminho'}
                          </Badge>
                        </div>
                        <Progress 
                          value={domain.score} 
                          className="w-20 h-2 mt-1"
                          // @ts-ignore
                          indicatorClassName={getScoreColor(domain.score)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/app/metrics">
                    <Eye className="w-4 h-4 mr-2" />
                    {t('dashboard.sections.view_details_by_domain')}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Insights Principais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-1">🎯 Crescimento Sustentável</h4>
                    <p className="text-sm text-green-700">
                      Receita cresceu 18% com margem saudável de 15.8%, indicando crescimento sustentável
                    </p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">📈 Eficiência Operacional</h4>
                    <p className="text-sm text-blue-700">
                      Taxa de execução de 76% mostra boa capacidade de entrega das iniciativas
                    </p>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-1">⚠️ Atenção Estratégica</h4>
                    <p className="text-sm text-yellow-700">
                      Domínio estratégico precisa de atenção: taxa de iniciativas concluídas abaixo da meta
                    </p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/app/decision-panel">
                    <Target className="w-4 h-4 mr-2" />
                    {t('dashboard.sections.decision_panel')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Domains Tab */}
        <TabsContent value="domains" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{t('dashboard.sections.metrics_by_domain')}</h2>
            <Button asChild>
              <Link to="/app/metrics">
                {t('dashboard.sections.view_complete_analytics')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockDomainMetrics.map((domain) => (
              <Card key={domain.domain} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${domain.color} rounded-lg flex items-center justify-center`}>
                        <domain.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{domain.domain}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={getStatusColor(domain.status)}>
                            {domain.status === 'on-track' ? 'No Caminho' : 
                             domain.status === 'at-risk' ? 'Em Risco' : 'Fora do Caminho'}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Score: {domain.score}/100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress 
                    value={domain.score} 
                    className="h-3"
                    // @ts-ignore
                    indicatorClassName={getScoreColor(domain.score)}
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    {domain.metrics.map((metric, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{metric.name}</span>
                          <span className={`text-xs ${getHealthColor(metric.health)}`}>
                            {metric.trend > 0 ? '+' : ''}{metric.trend}%
                          </span>
                        </div>
                        <p className="text-lg font-bold">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    {t('common.view_details')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{t('dashboard.sections.trends_analysis')}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                {t('dashboard.sections.period')}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t('common.export')}
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Evolução de Receita e Margem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTrends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">{trend.period}</span>
                        </div>
                        <div>
                          <p className="font-medium">R${(trend.revenue / 1000000).toFixed(1)}M</p>
                          <p className="text-sm text-muted-foreground">Margem: {trend.margin}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Score</div>
                        <div className="text-lg font-bold">{trend.score}/100</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Distribuição de Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <PieChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Gráficos de distribuição de performance por domínio</p>
                  <Button className="mt-4" variant="outline">
                    {t('dashboard.sections.view_complete_analytics')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{t('dashboard.sections.strategic_insights')}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                {t('common.settings')}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t('common.export')} Relatório
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-5 h-5" />
                  Oportunidades
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800">Expansão de Mercado</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Pipeline crescente 15% indica oportunidade de expansão
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800">Eficiência Operacional</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Ganhos de 4.3% podem ser replicados em outras áreas
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-600">
                  <AlertTriangle className="w-5 h-5" />
                  Riscos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-800">Churn Elevado</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Taxa de 4.2% acima da meta de 3%
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <h4 className="font-medium text-yellow-800">Capacidade Limitada</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Utilização de 71% pode limitar crescimento
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Target className="w-5 h-5" />
                  Recomendações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800">Foco em Retenção</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Implementar programa de fidelização
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800">Investimento em Capacidade</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Planejar expansão operacional
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConsolidatedDashboard;
