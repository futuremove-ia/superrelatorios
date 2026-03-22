import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Plus,
  Filter,
  Download,
  RefreshCw,
  Eye,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KPICard } from '@/components/ui/kpi-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';

const StrategicDashboard = () => {
  const { t } = useTranslation();
  const [selectedPeriod, setSelectedPeriod] = useState('quarter');
  const [selectedView, setSelectedView] = useState('overview');

  // Mock data para demonstração
  const mockKPIs = [
    {
      title: 'Progresso OKR',
      value: '78%',
      icon: Target,
      trend: { value: 12, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'success' as const,
      subtitle: '4 de 5 objetivos no caminho'
    },
    {
      title: 'Taxa de Execução',
      value: '82%',
      icon: CheckCircle,
      trend: { value: 8, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'info' as const,
      subtitle: 'Iniciativas concluídas'
    },
    {
      title: 'Alinhamento Estratégico',
      value: '91%',
      icon: TrendingUp,
      trend: { value: 5, isPositive: true, label: 'vs. trimestre anterior' },
      variant: 'success' as const,
      subtitle: 'Aderência aos objetivos'
    },
    {
      title: 'Riscos Críticos',
      value: '3',
      icon: AlertTriangle,
      trend: { value: 25, isPositive: false, label: 'vs. trimestre anterior' },
      variant: 'warning' as const,
      subtitle: 'Requerem atenção imediata'
    }
  ];

  const mockObjectives = [
    {
      id: 1,
      title: 'Expansão de Mercado',
      progress: 85,
      status: 'on-track',
      owner: 'Diretoria Comercial',
      deadline: '2024-Q2',
      initiatives: 8,
      completed: 7
    },
    {
      id: 2,
      title: 'Transformação Digital',
      progress: 72,
      status: 'at-risk',
      owner: 'Diretoria de Tecnologia',
      deadline: '2024-Q3',
      initiatives: 12,
      completed: 8
    },
    {
      id: 3,
      title: 'Excelência Operacional',
      progress: 91,
      status: 'on-track',
      owner: 'Diretoria de Operações',
      deadline: '2024-Q2',
      initiatives: 6,
      completed: 5
    },
    {
      id: 4,
      title: 'Sustentabilidade',
      progress: 65,
      status: 'at-risk',
      owner: 'Diretoria de ESG',
      deadline: '2024-Q4',
      initiatives: 10,
      completed: 6
    },
    {
      id: 5,
      title: 'Inovação e P&D',
      progress: 78,
      status: 'on-track',
      owner: 'Diretoria de Inovação',
      deadline: '2024-Q3',
      initiatives: 9,
      completed: 7
    }
  ];

  const mockInitiatives = [
    {
      id: 1,
      title: 'Lançamento Plataforma AI',
      objective: 'Transformação Digital',
      progress: 90,
      status: 'completed',
      impact: 'Alto',
      owner: 'Time de Produto'
    },
    {
      id: 2,
      title: 'Otimização Supply Chain',
      objective: 'Excelência Operacional',
      progress: 75,
      status: 'in-progress',
      impact: 'Médio',
      owner: 'Time de Operações'
    },
    {
      id: 3,
      title: 'Expansão LATAM',
      objective: 'Expansão de Mercado',
      progress: 60,
      status: 'at-risk',
      impact: 'Alto',
      owner: 'Time Internacional'
    },
    {
      id: 4,
      title: 'Certificação ISO 14001',
      objective: 'Sustentabilidade',
      progress: 45,
      status: 'at-risk',
      impact: 'Médio',
      owner: 'Time ESG'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'at-risk':
        return 'bg-yellow-100 text-yellow-800';
      case 'off-track':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'on-track': return 'No Caminho';
      case 'completed': return 'Concluído';
      case 'at-risk': return 'Em Risco';
      case 'off-track': return 'Fora do Caminho';
      case 'in-progress': return 'Em Progresso';
      default: return status;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="container-fluid space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Estratégico</h1>
          <p className="text-muted-foreground">Acompanhamento de objetivos e iniciativas estratégicas</p>
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
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="objectives">Objetivos</TabsTrigger>
          <TabsTrigger value="initiatives">Iniciativas</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Strategic Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Resumo Estratégico
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {mockObjectives.slice(0, 3).map((objective) => (
                    <div key={objective.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{objective.title}</span>
                        <Badge className={getStatusColor(objective.status)}>
                          {getStatusText(objective.status)}
                        </Badge>
                      </div>
                      <Progress 
                        value={objective.progress} 
                        className="h-2"
                        // @ts-ignore
                        indicatorClassName={getProgressColor(objective.progress)}
                      />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{objective.completed}/{objective.initiatives} iniciativas</span>
                        <span>{objective.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/app/prioridades">
                    Ver todos objetivos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Risk Alert */}
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Atenção:</strong> 2 objetivos estão em risco e requerem ação imediata da liderança.
                <Button variant="link" size="sm" className="p-0 h-auto ml-2">
                  Ver detalhes
                </Button>
              </AlertDescription>
            </Alert>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/app/action-plan">
                    <Target className="w-4 h-4 mr-2" />
                    Plano de Ação
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/app/metrics">
                    <Activity className="w-4 h-4 mr-2" />
                    Indicadores Estratégicos
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/app/consolidated">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dashboard Consolidado
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Objectives Tab */}
        <TabsContent value="objectives" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Objetivos Estratégicos</h2>
            <Button asChild>
              <Link to="/app/prioridades">
                Gerenciar Objetivos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockObjectives.map((objective) => (
              <Card key={objective.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{objective.title}</CardTitle>
                    <Badge className={getStatusColor(objective.status)}>
                      {getStatusText(objective.status)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progresso</span>
                      <span className="text-sm font-medium">{objective.progress}%</span>
                    </div>
                    <Progress 
                      value={objective.progress} 
                      className="h-2"
                      // @ts-ignore
                      indicatorClassName={getProgressColor(objective.progress)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Iniciativas</span>
                      <span>{objective.completed}/{objective.initiatives}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Responsável</span>
                      <span>{objective.owner}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Prazo</span>
                      <span>{objective.deadline}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Initiatives Tab */}
        <TabsContent value="initiatives" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Iniciativas Estratégicas</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Iniciativa
            </Button>
          </div>
          
          <div className="space-y-4">
            {mockInitiatives.map((initiative) => (
              <Card key={initiative.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{initiative.title}</h3>
                        <Badge className={getStatusColor(initiative.status)}>
                          {getStatusText(initiative.status)}
                        </Badge>
                        <Badge variant="outline">
                          Impacto: {initiative.impact}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Objetivo</span>
                          <p className="font-medium">{initiative.objective}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Responsável</span>
                          <p className="font-medium">{initiative.owner}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Progresso</span>
                          <div className="flex items-center gap-2">
                            <Progress 
                              value={initiative.progress} 
                              className="flex-1 h-2"
                              // @ts-ignore
                              indicatorClassName={getProgressColor(initiative.progress)}
                            />
                            <span className="text-sm font-medium">{initiative.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver
                      </Button>
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Analytics Estratégicos</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <PieChart className="w-4 h-4 mr-2" />
                Gráficos
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <PieChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Gráficos de distribuição de progresso por objetivo</p>
                  <Button className="mt-4" variant="outline">
                    Ver Analytics Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tendências Estratégicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Análise de tendências e performance estratégica</p>
                  <Button className="mt-4" variant="outline">
                    Ver Analytics Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StrategicDashboard;
