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
  Download,
  RefreshCw,
  Zap,
  Shield,
  Clock,
  Plus,
  BarChart3,
  Radar as RadarIcon,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { ActionableCard } from '@/components/business/ActionableCard';
import { RadarItem, Risk, Opportunity } from '@/types/business';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Mock data para RadarItems
const MOCK_RADAR_ITEMS: RadarItem[] = [
  {
    id: '1',
    type: 'risk',
    priority: 'high',
    domain: 'commercial',
    urgency: 'immediate',
    alert: {
      id: 'r1',
      title: 'Queda na Taxa de Conversão Comercial',
      description: 'A taxa de conversão de vendas caiu 15% no último trimestre',
      severity: 'high',
      timeToBreathe: '30 dias',
      domain: 'commercial',
      metrics: ['conversion_rate', 'cac', 'pipeline']
    },
    diagnosis: {
      id: 'd1',
      technicalTerm: 'Sales Conversion Rate Decline',
      cause: 'A taxa de conversão de vendas caiu 15% no último trimestre, impactando diretamente a receita. Análise do funil mostra gargalo na etapa de proposta.',
      effect: 'Redução de 23% na receita projetada para o próximo trimestre. Risco de perder market share para concorrentes.',
      why: 'O aumento de 40% no preço sem ajuste na comunicação de valor criou resistência do cliente.',
      dataSources: ['CRM', 'Planilha de Vendas', 'Dados de Pipeline']
    },
    recommendation: {
      id: 'rec1',
      title: 'Otimização do Funil de Vendas',
      description: 'Reestruturar processo comercial com foco nos pontos de gargalo identificados. Criar novo material de proposta destacando ROI.',
      expectedImpact: '+25% na taxa de conversão',
      timeframe: '30 dias',
      complexity: 'medium',
      confidence: 85,
      levers: [
        { type: 'price', label: 'Preço', impact: 'high' },
        { type: 'process', label: 'Processo', impact: 'medium' }
      ]
    },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active'
  },
  {
    id: '2',
    type: 'opportunity',
    priority: 'medium',
    domain: 'operations',
    urgency: 'short_term',
    alert: {
      id: 'o1',
      title: 'Potencial de Automação no Atendimento',
      description: '40% das demandas de suporte são repetitivas e podem ser automatizadas',
      severity: 'medium',
      timeToBreathe: '60 dias',
      domain: 'operations',
      metrics: ['support_time', 'ticket_volume', 'automation_rate']
    },
    diagnosis: {
      id: 'd2',
      technicalTerm: 'Process Automation Opportunity',
      cause: 'Análise de tickets de suporte mostra que 40% são consultas repetitivas sobre senha, status de pedido e dúvidas básicas de uso.',
      effect: 'Liberação de 25h/semana da equipe de suporte para focar em atendimento complexo e vendas.',
      why: 'Crescimento rápido da base sem investimento correspondente em ferramentas de self-service.',
      dataSources: ['Zendesk', 'Planilha de Tickets', 'Análise de Categorização']
    },
    recommendation: {
      id: 'rec2',
      title: 'Implementar Chatbot + Base de Conhecimento',
      description: 'Criar chatbot para FAQs e portal de autoatendimento. Reduzir tickets repetitivos em 60%.',
      expectedImpact: '+R$ 8K/mês economia + satisfação do cliente',
      timeframe: '45 dias',
      complexity: 'medium',
      confidence: 78,
      levers: [
        { type: 'process', label: 'Processo', impact: 'high' },
        { type: 'cost', label: 'Custo', impact: 'medium' }
      ]
    },
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active'
  }
];

interface DetailedAnalysisProps {
  item: RadarItem;
}

const DetailedAnalysis: React.FC<DetailedAnalysisProps> = ({ item }) => {
  const isRisk = item.type === 'risk';

  return (
    <div className="space-y-6">
      {/* Header do Diagnóstico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Análise Técnica Detalhada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Termo Técnico */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Termo Técnico (DM Mono)
            </div>
            <div className="font-mono text-base text-foreground">
              {item.diagnosis.technicalTerm}
            </div>
          </div>

          {/* Causa Raiz */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Causa Raiz Identificada
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {item.diagnosis.cause}
            </p>
          </div>

          {/* Efeito */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-500" />
              Efeito no Negócio
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {item.diagnosis.effect}
            </p>
          </div>

          {/* Por que */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Brain className="w-4 h-4 text-blue-500" />
              Por que Aconteceu
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {item.diagnosis.why}
            </p>
          </div>

          {/* Fontes de Dados */}
          <div>
            <h4 className="font-semibold mb-2">Fontes de Dados Analisadas</h4>
            <div className="flex flex-wrap gap-2">
              {item.diagnosis.dataSources.map((source, index) => (
                <Badge key={index} variant="outline">
                  {source}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recomendação Detalhada */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Recomendação Estratégica
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            {item.recommendation.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary/10 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Impacto Esperado</div>
              <div className="font-bold text-primary">{item.recommendation.expectedImpact}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Prazo</div>
              <div className="font-bold">{item.recommendation.timeframe}</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Complexidade</div>
              <div className={cn(
                'font-bold',
                item.recommendation.complexity === 'low' ? 'text-green-600' :
                item.recommendation.complexity === 'medium' ? 'text-amber-600' :
                'text-red-600'
              )}>
                {item.recommendation.complexity === 'low' ? 'Baixa' :
                 item.recommendation.complexity === 'medium' ? 'Média' : 'Alta'}
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">Confiança da IA</div>
              <div className="font-bold text-blue-600">{item.recommendation.confidence}%</div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 gap-2">
              <Plus className="w-4 h-4" />
              Adicionar ao Plano de Ação
            </Button>
            <Button variant="outline" asChild>
              <Link to="/app/action-plan">
                Ver Plano de Ação
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DecisionPanel: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [selectedView, setSelectedView] = useState('radar');
  const [selectedPeriod, setSelectedPeriod] = useState('current');
  const [selectedItem, setSelectedItem] = useState<RadarItem | null>(null);
  const [items, setItems] = useState<RadarItem[]>(MOCK_RADAR_ITEMS);

  const handleAddToPlan = (id: string) => {
    toast({
      title: 'Adicionado ao Plano',
      description: 'Ação adicionada à Lista de Execução.',
    });
    
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'in_action_plan' as any } : item
    ));
  };

  const handleDismiss = (id: string) => {
    toast({
      title: 'Alerta dispensado',
      description: 'O item foi marcado como reconhecido.',
    });
    
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'acknowledged' as any } : item
    ));
  };

  const handleItemClick = (item: RadarItem) => {
    setSelectedItem(item);
    setSelectedView('analysis');
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            Painel de Decisão
          </h1>
          <p className="text-muted-foreground font-medium">
            Análise estratégica de riscos e oportunidades com recomendações da IA
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <Clock className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Período Atual</SelectItem>
              <SelectItem value="last_month">Mês Passado</SelectItem>
              <SelectItem value="quarter">Último Trimestre</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Alerta Importante */}
      {items.filter(i => i.type === 'risk').length > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 flex items-center justify-between">
            <span>
              <strong>Alerta Crítico Detectado:</strong> {items[0].alert.title}
            </span>
            <Button 
              variant="link" 
              size="sm" 
              className="text-red-600"
              onClick={() => handleItemClick(items[0])}
            >
              Analisar Agora <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Tabs Simplificadas */}
      <Tabs value={selectedView} onValueChange={setSelectedView} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="radar" className="gap-2">
            <RadarIcon className="w-4 h-4" />
            Radar
          </TabsTrigger>
          <TabsTrigger value="analysis" className="gap-2">
            <BarChart3 className="w-4 h-4" />
            Análise Detalhada
          </TabsTrigger>
        </TabsList>

        {/* Tab Radar - Cards Acionáveis */}
        <TabsContent value="radar" className="space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {items.map((item) => (
              <ActionableCard
                key={item.id}
                item={item}
                onAddToPlan={handleAddToPlan}
                onDismiss={handleDismiss}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
          
          {items.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="p-12 text-center">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Nenhum alerta no momento
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  O sistema não detectou riscos ou oportunidades críticas no período selecionado.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Tab Análise Detalhada */}
        <TabsContent value="analysis" className="space-y-6">
          {selectedItem ? (
            <DetailedAnalysis item={selectedItem} />
          ) : (
            <Card className="border-dashed">
              <CardContent className="p-12 text-center">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Selecione um item para análise detalhada
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-4">
                  Volte para a aba "Radar" e clique em um card para ver a análise técnica completa.
                </p>
                <Button onClick={() => setSelectedView('radar')}>
                  Ir para Radar
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Footer informativo */}
      <div className="pt-6 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>
              Análise baseada em <strong>{items.length}</strong> indicadores cruzados
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Última análise: Hoje às 08:30
            </span>
            <Button variant="ghost" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar Análise
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionPanel;
