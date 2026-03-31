import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  TrendingUp, 
  Brain,
  Filter,
  Download,
  RefreshCw,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Search,
  ChevronRight,
  Lightbulb,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { DomainFilter } from '@/components/business/DomainTag';
import { Domain } from '@/types/business';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Mock data para diagnósticos detalhados
const MOCK_DIAGNOSES = [
  {
    id: 'd1',
    title: 'Queda na Taxa de Conversão Comercial',
    technicalTerm: 'Sales Conversion Rate Decline',
    domain: 'commercial' as Domain,
    severity: 'high',
    status: 'active',
    summary: 'A taxa de conversão caiu 15% no último trimestre, indicando problema no funil de vendas.',
    cause: {
      primary: 'Aumento de 40% no preço sem ajuste na comunicação de valor',
      contributing: [
        'Material de vendas desatualizado',
        'Processo de proposta muito longo',
        'Concorrentes com ofertas mais agressivas'
      ]
    },
    effect: {
      immediate: 'Redução de 23% na receita projetada',
      longTerm: 'Risco de perder market share para concorrentes',
      financial: 'R$ 45K/mês em receita não realizada'
    },
    dataEvidence: [
      { metric: 'Taxa de Conversão', value: '12.3%', change: '-15%', trend: 'down' },
      { metric: 'CAC', value: 'R$ 450', change: '+12%', trend: 'up' },
      { metric: 'Pipeline', value: '850 leads', change: '-8%', trend: 'down' }
    ],
    benchmarks: {
      industry: '18.5%',
      topPerformers: '25.3%',
      company: '12.3%',
      gap: '-6.2pp vs mercado'
    },
    historicalContext: [
      { period: 'Jan-Fev', value: '14.7%', status: 'stable' },
      { period: 'Mar-Abr', value: '14.2%', status: 'declining' },
      { period: 'Mai-Jun', value: '12.3%', status: 'critical' }
    ],
    confidence: 85,
    aiAnalysis: 'O padrão de queda coincide com o aumento de preço implementado em março. Análise de correlação mostra relação forte (r=-0.78) entre preço e conversão. Recomenda-se revisão da estratégia de precificação e comunicação de valor.'
  },
  {
    id: 'd2',
    title: 'Ineficiência no Processo de Suporte',
    technicalTerm: 'Support Ticket Resolution Inefficiency',
    domain: 'operations' as Domain,
    severity: 'medium',
    status: 'identified',
    summary: '40% dos tickets são demandas repetitivas que poderiam ser automatizadas.',
    cause: {
      primary: 'Falta de base de conhecimento e ferramentas de autoatendimento',
      contributing: [
        'Crescimento rápido da base sem expansão proporcional do time',
        'Processos manuais para tarefas simples',
        'Ausência de chatbot para FAQs'
      ]
    },
    effect: {
      immediate: '25h/semana desperdiçadas em tarefas repetitivas',
      longTerm: 'Satisfação do cliente impactada por tempo de resposta',
      financial: 'R$ 8K/mês em custo de oportunidade'
    },
    dataEvidence: [
      { metric: 'Tickets Repetitivos', value: '40%', change: '+5%', trend: 'up' },
      { metric: 'Tempo Médio Resolução', value: '4.2h', change: '+15%', trend: 'up' },
      { metric: 'CSAT Suporte', value: '3.8/5', change: '-0.3', trend: 'down' }
    ],
    benchmarks: {
      industry: '25%',
      topPerformers: '15%',
      company: '40%',
      gap: '+15pp vs melhores'
    },
    historicalContext: [
      { period: 'Q1', value: '32%', status: 'warning' },
      { period: 'Q2', value: '36%', status: 'declining' },
      { period: 'Q3', value: '40%', status: 'critical' }
    ],
    confidence: 78,
    aiAnalysis: 'Análise de categorização de tickets mostra padrão claro de demandas repetitivas. Implementação de chatbot e base de conhecimento pode reduzir tickets em 60% e melhorar CSAT em 0.5 pontos.'
  }
];

// Componente de Card de Diagnóstico
interface DiagnosisCardProps {
  diagnosis: typeof MOCK_DIAGNOSES[0];
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const DiagnosisCard: React.FC<DiagnosisCardProps> = ({ diagnosis, onSelect, isSelected }) => {
  return (
    <Card 
      className={cn(
        'cursor-pointer transition-all duration-200 hover:shadow-md',
        isSelected ? 'ring-2 ring-primary border-primary' : 'hover:border-primary/50'
      )}
      onClick={() => onSelect(diagnosis.id)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={cn(
            'p-2 rounded-lg flex-shrink-0',
            diagnosis.severity === 'high' ? 'bg-red-100' :
            diagnosis.severity === 'medium' ? 'bg-amber-100' : 'bg-blue-100'
          )}>
            {diagnosis.severity === 'high' ? (
              <AlertTriangle className="h-5 w-5 text-red-600" />
            ) : diagnosis.severity === 'medium' ? (
              <Zap className="h-5 w-5 text-amber-600" />
            ) : (
              <Lightbulb className="h-5 w-5 text-blue-600" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge 
                variant="outline" 
                className={cn(
                  'text-[10px]',
                  diagnosis.domain === 'finance' ? 'border-emerald-200 text-emerald-700' :
                  diagnosis.domain === 'commercial' ? 'border-blue-200 text-blue-700' :
                  diagnosis.domain === 'operations' ? 'border-amber-200 text-amber-700' :
                  'border-purple-200 text-purple-700'
                )}
              >
                {diagnosis.domain === 'finance' ? 'Financeiro' :
                 diagnosis.domain === 'commercial' ? 'Comercial' :
                 diagnosis.domain === 'operations' ? 'Operacional' : 'Estratégia'}
              </Badge>
              <span className="text-[10px] text-muted-foreground">
                Confiança: {diagnosis.confidence}%
              </span>
            </div>
            
            <h3 className="font-semibold text-sm mb-1 line-clamp-2">{diagnosis.title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">{diagnosis.summary}</p>
            
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className={cn(
                'font-medium',
                diagnosis.severity === 'high' ? 'text-red-600' :
                diagnosis.severity === 'medium' ? 'text-amber-600' : 'text-blue-600'
              )}>
                {diagnosis.severity === 'high' ? 'Alto Impacto' :
                 diagnosis.severity === 'medium' ? 'Médio Impacto' : 'Baixo Impacto'}
              </span>
              <ChevronRight className="h-3 w-3 text-muted-foreground ml-auto" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Componente de Detalhe do Diagnóstico
interface DiagnosisDetailProps {
  diagnosis: typeof MOCK_DIAGNOSES[0];
}

const DiagnosisDetail: React.FC<DiagnosisDetailProps> = ({ diagnosis }) => {
  return (
    <div className="space-y-6">
      {/* Header do Diagnóstico */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge 
              className={cn(
                diagnosis.severity === 'high' ? 'bg-red-500' :
                diagnosis.severity === 'medium' ? 'bg-amber-500' : 'bg-blue-500'
              )}
            >
              {diagnosis.severity === 'high' ? 'Crítico' :
               diagnosis.severity === 'medium' ? 'Atenção' : 'Monitorar'}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Análise da IA com {diagnosis.confidence}% de confiança
            </span>
          </div>
          <h2 className="text-2xl font-bold">{diagnosis.title}</h2>
          <p className="text-muted-foreground mt-1">{diagnosis.summary}</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm" asChild>
            <Link to="/app/action-plan">
              Criar Plano de Ação
            </Link>
          </Button>
        </div>
      </div>

      {/* Termo Técnico */}
      <Card className="bg-muted/50 border-muted">
        <CardContent className="p-4">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Termo Técnico (DM Mono)
          </div>
          <div className="font-mono text-lg text-foreground">
            {diagnosis.technicalTerm}
          </div>
        </CardContent>
      </Card>

      {/* Grid de Causa e Efeito */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Causa Raiz */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-primary" />
              Causa Raiz
            </CardTitle>
            <CardDescription>Por que isso está acontecendo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <div className="text-sm font-semibold text-red-800 mb-1">Causa Principal</div>
              <p className="text-sm text-red-700">{diagnosis.cause.primary}</p>
            </div>
            
            <div>
              <div className="text-sm font-semibold mb-2">Fatores Contribuintes</div>
              <ul className="space-y-2">
                {diagnosis.cause.contributing.map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Efeitos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-red-500" />
              Impacto no Negócio
            </CardTitle>
            <CardDescription>Consequências identificadas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <div className="text-sm font-semibold text-red-800 mb-1">Impacto Imediato</div>
              <p className="text-sm text-red-700">{diagnosis.effect.immediate}</p>
            </div>
            
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <div className="text-sm font-semibold text-amber-800 mb-1">Longo Prazo</div>
              <p className="text-sm text-amber-700">{diagnosis.effect.longTerm}</p>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm font-medium">Impacto Financeiro</span>
              <span className="text-lg font-bold text-red-600">{diagnosis.effect.financial}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Evidências de Dados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BarChart3 className="w-5 h-5" />
            Evidências de Dados
          </CardTitle>
          <CardDescription>Métricas que sustentam este diagnóstico</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {diagnosis.dataEvidence.map((evidence, idx) => (
              <div key={idx} className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">{evidence.metric}</div>
                <div className="text-xl font-bold">{evidence.value}</div>
                <div className={cn(
                  'text-xs font-medium mt-1',
                  evidence.trend === 'up' ? 'text-red-600' : 'text-green-600'
                )}>
                  {evidence.change}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benchmarks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Search className="w-5 h-5" />
            Benchmarks Setoriais
          </CardTitle>
          <CardDescription>Comparação com mercado e melhores performers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-green-700 mb-1">Top Performers</div>
                <div className="text-lg font-bold text-green-800">{diagnosis.benchmarks.topPerformers}</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-xs text-blue-700 mb-1">Média do Setor</div>
                <div className="text-lg font-bold text-blue-800">{diagnosis.benchmarks.industry}</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="text-xs text-red-700 mb-1">Sua Empresa</div>
                <div className="text-lg font-bold text-red-800">{diagnosis.benchmarks.company}</div>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg">
                <div className="text-xs text-amber-700 mb-1">Gap</div>
                <div className="text-lg font-bold text-amber-800">{diagnosis.benchmarks.gap}</div>
              </div>
            </div>
            
            {/* Contexto Histórico */}
            <div>
              <div className="text-sm font-semibold mb-3">Evolução Histórica</div>
              <div className="flex items-center gap-4">
                {diagnosis.historicalContext.map((period, idx) => (
                  <div key={idx} className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">{period.period}</div>
                    <div className={cn(
                      'p-2 rounded text-center text-sm font-medium',
                      period.status === 'stable' ? 'bg-green-100 text-green-700' :
                      period.status === 'warning' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    )}>
                      {period.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Análise da IA */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="w-5 h-5 text-blue-600" />
            Análise da IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-blue-900">
            {diagnosis.aiAnalysis}
          </p>
          
          <div className="flex gap-2 mt-4">
            <Button className="flex-1" asChild>
              <Link to="/app/action-plan">
                <Zap className="w-4 h-4 mr-2" />
                Criar Plano de Ação
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/app/radar">
                Ver no Radar
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Analytics: React.FC = () => {
  const { t } = useTranslation();
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>(['finance', 'commercial', 'operations', 'strategy']);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string>(MOCK_DIAGNOSES[0].id);
  const [selectedPeriod, setSelectedPeriod] = useState('quarter');

  const filteredDiagnoses = MOCK_DIAGNOSES.filter(d => selectedDomains.includes(d.domain));
  const currentDiagnosis = MOCK_DIAGNOSES.find(d => d.id === selectedDiagnosis) || MOCK_DIAGNOSES[0];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            Análises
          </h1>
          <p className="text-muted-foreground font-medium">
            Diagnósticos técnicos detalhados e benchmarks comparativos
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <Clock className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="quarter">Este Trimestre</SelectItem>
              <SelectItem value="year">Este Ano</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Filtros de Domínio */}
      <DomainFilter 
        selected={selectedDomains}
        onChange={setSelectedDomains}
      />

      {/* Layout Principal: Lista + Detalhe */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Coluna Esquerda: Lista de Diagnósticos */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Diagnósticos ({filteredDiagnoses.length})</h2>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>
          
          <div className="space-y-3">
            {filteredDiagnoses.map((diagnosis) => (
              <DiagnosisCard
                key={diagnosis.id}
                diagnosis={diagnosis}
                onSelect={setSelectedDiagnosis}
                isSelected={selectedDiagnosis === diagnosis.id}
              />
            ))}
          </div>
          
          {filteredDiagnoses.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">
                  Nenhum diagnóstico para os domínios selecionados
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Coluna Direita: Detalhe do Diagnóstico */}
        <div className="lg:col-span-2">
          <DiagnosisDetail diagnosis={currentDiagnosis} />
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            <span>
              Análises baseadas em <strong>{MOCK_DIAGNOSES.length}</strong> indicadores cruzados
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Última análise: Hoje às 08:30
            </span>
            <Button variant="ghost" size="sm" className="gap-1">
              <FileText className="h-4 w-4" />
              Ver Relatório Completo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
