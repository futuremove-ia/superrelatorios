import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Brain, 
  Target, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Eye,
  Download,
  RefreshCw,
  Filter,
  Zap,
  Shield,
  Lightbulb,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KPICard } from '@/components/ui/kpi-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useCrossDomainAnalytics } from '@/hooks/useCrossDomainAnalytics';
import { Link } from 'react-router-dom';

interface PrioritySituation {
  id: string;
  title: string;
  description: string;
  urgency: 'critical' | 'urgent' | 'important';
  impact: string;
  timeframe: string;
  technicalTerm: string;
  actionableTranslation: string;
  metrics: Array<{
    label: string;
    value: string | number;
    unit?: string;
    trend: 'up' | 'down' | 'stable';
    health: 'good' | 'warning' | 'critical';
  }>;
}

interface Recommendation {
  id: string;
  title: string;
  description: string;
  expectedImpact: string;
  complexity: 'low' | 'medium' | 'high';
  timeframe: string;
  actions: Array<{
    title: string;
    description: string;
    owner?: string;
    deadline?: string;
  }>;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
}

interface DecisionPanelProps {
  className?: string;
}

const DecisionPanel: React.FC<DecisionPanelProps> = ({ className }) => {
  const { t } = useTranslation();
  const [selectedView, setSelectedView] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  // Mock data para demonstração
  const mockSituation: PrioritySituation = {
    id: '1',
    title: 'Queda na Taxa de Conversão Comercial',
    description: 'A taxa de conversão de vendas caiu 15% no último trimestre, impactando diretamente a receita e o crescimento market share.',
    urgency: 'critical',
    impact: 'Alto impacto financeiro e competitivo',
    timeframe: 'Ação requerida em 30 dias',
    technicalTerm: 'Sales Conversion Rate Decline',
    actionableTranslation: 'Estamos perdendo vendas para concorrentes',
    metrics: [
      { label: 'Taxa de Conversão', value: '12.3%', unit: '%', trend: 'down', health: 'critical' },
      { label: 'CAC', value: 450, unit: 'R$', trend: 'up', health: 'warning' },
      { label: 'LTV', value: 2100, unit: 'R$', trend: 'stable', health: 'good' },
      { label: 'Pipeline', value: 850, unit: 'leads', trend: 'down', health: 'warning' }
    ]
  };

  const mockRecommendations: Recommendation[] = [
    {
      id: '1',
      title: 'Otimização do Funil de Vendas',
      description: 'Reestruturar processo comercial com foco nos pontos de gargalo identificados',
      expectedImpact: 'Aumento de 25% na taxa de conversão',
      complexity: 'medium',
      timeframe: '60 dias',
      confidence: 85,
      priority: 'high',
      actions: [
        {
          title: 'Análise do Funil',
          description: 'Mapear pontos de abandono e identificar causas raiz',
          owner: 'Time Comercial',
          deadline: '15 dias'
        },
        {
          title: 'Treinamento Equipe',
          description: 'Capacitar equipe em técnicas de fechamento',
          owner: 'RH',
          deadline: '30 dias'
        },
        {
          title: 'Ajuste de Processos',
          description: 'Implementar melhorias no fluxo comercial',
          owner: 'Operações',
          deadline: '45 dias'
        }
      ]
    },
    {
      id: '2',
      title: 'Revisão de Preços e Ofertas',
      description: 'Ajustar estratégia de precificação para melhor competitividade',
      expectedImpact: 'Aumento de 10% no ticket médio',
      complexity: 'low',
      timeframe: '30 dias',
      confidence: 75,
      priority: 'medium',
      actions: [
        {
          title: 'Análise Competitiva',
          description: 'Benchmark de preços e ofertas do mercado',
          owner: 'Marketing',
          deadline: '10 dias'
        },
        {
          title: 'Teste A/B',
          description: 'Testar novas faixas de preço',
          owner: 'Produto',
          deadline: '20 dias'
        }
      ]
    },
    {
      id: '3',
      title: 'Investimento em Marketing Digital',
      description: 'Intensificar campanhas de geração de leads qualificados',
      expectedImpact: 'Redução de 20% no CAC',
      complexity: 'high',
      timeframe: '90 dias',
      confidence: 70,
      priority: 'medium',
      actions: [
        {
          title: 'Plano de Mídia',
          description: 'Desenvolver estratégia de mídia paga',
          owner: 'Marketing',
          deadline: '30 dias'
        },
        {
          title: 'Otimização SEO',
          description: 'Melhorar posicionamento orgânico',
          owner: 'Marketing',
          deadline: '60 dias'
        }
      ]
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'urgent': return 'bg-orange-100 text-orange-800';
      case 'important': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className={`container-fluid space-y-8 py-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{t('decision_panel.title')}</h1>
            <p className="text-muted-foreground">{t('decision_panel.subtitle')}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">{t('decision_panel.period.current')}</SelectItem>
              <SelectItem value="last_month">{t('decision_panel.period.last_month')}</SelectItem>
              <SelectItem value="quarter">{t('decision_panel.period.quarter')}</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            {t('decision_panel.actions.filters')}
          </Button>
          
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            {t('decision_panel.actions.export')}
          </Button>
          
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            {t('decision_panel.actions.refresh')}
          </Button>
        </div>
      </div>

      {/* Critical Alert */}
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>{t('decision_panel.alert.critical_detected')}</strong> {mockSituation.title}
          <Button variant="link" size="sm" className="p-0 h-auto ml-2 text-red-600">
            {t('decision_panel.alert.analyze_now')}
          </Button>
        </AlertDescription>
      </Alert>

      {/* Main Content */}
      <Tabs value={selectedView} onValueChange={setSelectedView} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">{t('decision_panel.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="situation">{t('decision_panel.tabs.situation')}</TabsTrigger>
          <TabsTrigger value="recommendations">{t('decision_panel.tabs.recommendations')}</TabsTrigger>
          <TabsTrigger value="actions">{t('decision_panel.tabs.actions')}</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Situation Summary */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  {t('decision_panel.situation.priority_title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    {mockSituation.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {mockSituation.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Urgência</span>
                      <div className="mt-1">
                        <Badge className={getUrgencyColor(mockSituation.urgency)}>
                          {mockSituation.urgency === 'critical' ? 'Crítica' : 
                           mockSituation.urgency === 'urgent' ? 'Urgente' : 'Importante'}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Impacto</span>
                      <p className="font-medium">{mockSituation.impact}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Prazo</span>
                      <p className="font-medium">{mockSituation.timeframe}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Tradução</span>
                      <p className="font-medium">{mockSituation.actionableTranslation}</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-3">{t('decision_panel.situation.metrics_title')}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {mockSituation.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium">{metric.label}</p>
                          <p className="text-lg font-bold">{metric.value}{metric.unit}</p>
                        </div>
                        <div className="text-right">
                          {getTrendIcon(metric.trend)}
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getHealthColor(metric.health)}`}
                          >
                            {metric.health}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-4">
              <KPICard
                title={t('decision_panel.kpi.recommendations')}
                value="3"
                icon={Lightbulb}
                variant="info"
                subtitle={t('decision_panel.kpi.recommendations_subtitle')}
              />
              
              <KPICard
                title={t('decision_panel.kpi.average_confidence')}
                value="77%"
                icon={Shield}
                variant="success"
                subtitle={t('decision_panel.kpi.average_confidence_subtitle')}
              />
              
              <KPICard
                title={t('decision_panel.kpi.expected_impact')}
                value="R$125K"
                icon={TrendingUp}
                variant="success"
                subtitle={t('decision_panel.kpi.expected_impact_subtitle')}
              />
            </div>
          </div>
        </TabsContent>

        {/* Situation Tab */}
        <TabsContent value="situation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {t('decision_panel.situation.detailed_analysis')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('decision_panel.situation.technical_context')}</h3>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>{t('decision_panel.situation.technical_context')}:</strong> {mockSituation.technicalTerm}
                  </p>
                  <p className="text-blue-700 mt-2">
                    <strong>{t('decision_panel.situation.actionable_translation')}:</strong> {mockSituation.actionableTranslation}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('decision_panel.situation.metrics_analysis')}</h3>
                <div className="space-y-4">
                  {mockSituation.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium">{metric.label}</h4>
                          {getTrendIcon(metric.trend)}
                          <Badge className={getHealthColor(metric.health)}>
                            {metric.health}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold">
                          {metric.value}{metric.unit}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Progress 
                          value={metric.health === 'good' ? 80 : metric.health === 'warning' ? 50 : 20}
                          className="w-20 h-2"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Score: {metric.health === 'good' ? '80%' : metric.health === 'warning' ? '50%' : '20%'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">{t('decision_panel.situation.crossed_impact')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium">Equipe Comercial</p>
                      <p className="text-sm text-muted-foreground">Afetada diretamente</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Zap className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                      <p className="font-medium">Receita</p>
                      <p className="text-sm text-muted-foreground">Impacto de R$45K/mês</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-red-600" />
                      <p className="font-medium">Tempo</p>
                      <p className="text-sm text-muted-foreground">Ação em 30 dias</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{t('decision_panel.recommendations.title')}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                {t('decision_panel.recommendations.filter')}
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {t('decision_panel.recommendations.export')}
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {mockRecommendations.map((recommendation) => (
              <Card key={recommendation.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{recommendation.title}</CardTitle>
                      <p className="text-muted-foreground">{recommendation.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(recommendation.priority)}>
                        {recommendation.priority === 'high' ? 'Alta' : 
                         recommendation.priority === 'medium' ? 'Média' : 'Baixa'}
                      </Badge>
                      <Badge className={getComplexityColor(recommendation.complexity)}>
                        {recommendation.complexity === 'high' ? 'Alta' : 
                         recommendation.complexity === 'medium' ? 'Média' : 'Baixa'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">{t('decision_panel.recommendations.expected_impact')}</span>
                      <p className="font-semibold">{recommendation.expectedImpact}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{t('decision_panel.recommendations.timeframe')}</span>
                      <p className="font-semibold">{recommendation.timeframe}</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{t('decision_panel.recommendations.confidence')}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={recommendation.confidence} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{recommendation.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-3">{t('decision_panel.recommendations.actions_title')}</h4>
                    <div className="space-y-3">
                      {recommendation.actions.map((action, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium">{action.title}</h5>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                            <div className="flex gap-4 mt-2 text-sm">
                              {action.owner && (
                                <span><strong>{t('decision_panel.recommendations.responsible')}:</strong> {action.owner}</span>
                              )}
                              {action.deadline && (
                                <span><strong>{t('decision_panel.recommendations.deadline')}:</strong> {action.deadline}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      {t('decision_panel.recommendations.view_details')}
                    </Button>
                    <Button variant="outline">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {t('decision_panel.recommendations.implement')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Actions Tab */}
        <TabsContent value="actions" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{t('decision_panel.action_plan.title')}</h2>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              {t('decision_panel.action_plan.export_plan')}
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('decision_panel.action_plan.summary_title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{t('decision_panel.action_plan.immediate_actions')}</h3>
                  <p className="text-2xl font-bold text-blue-600">5</p>
                  <p className="text-sm text-muted-foreground">{t('decision_panel.action_plan.immediate_actions_desc')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{t('decision_panel.action_plan.medium_term_actions')}</h3>
                  <p className="text-2xl font-bold text-orange-600">8</p>
                  <p className="text-sm text-muted-foreground">{t('decision_panel.action_plan.medium_term_actions_desc')}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{t('decision_panel.action_plan.expected_impact')}</h3>
                  <p className="text-2xl font-bold text-green-600">R$125K</p>
                  <p className="text-sm text-muted-foreground">{t('decision_panel.action_plan.expected_impact_desc')}</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-4">{t('decision_panel.action_plan.implementation_timeline')}</h3>
                <div className="space-y-4">
                  {[
                    { phase: 'Análise', actions: 2, timeframe: '15 dias', status: 'ready' },
                    { phase: 'Planejamento', actions: 3, timeframe: '30 dias', status: 'pending' },
                    { phase: 'Execução', actions: 5, timeframe: '60 dias', status: 'pending' },
                    { phase: 'Monitoramento', actions: 3, timeframe: '90 dias', status: 'pending' }
                  ].map((phase, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        phase.status === 'ready' ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{phase.phase}</h4>
                          <span className="text-sm text-muted-foreground">{phase.timeframe}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">{phase.actions} ações</span>
                          <Progress 
                            value={phase.status === 'ready' ? 100 : 0} 
                            className="flex-1 h-2" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <Target className="w-4 h-4 mr-2" />
                  {t('decision_panel.action_plan.start_implementation')}
                </Button>
                <Button variant="outline" size="lg">
                  <Eye className="w-4 h-4 mr-2" />
                  {t('decision_panel.action_plan.view_details')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DecisionPanel;
