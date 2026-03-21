import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  Users, 
  Calendar,
  Download,
  RefreshCw,
  Filter,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { useBusinessUnits, useDepartments, useTeams } from '@/hooks/useOrganizationHierarchy';

interface ConsolidatedMetrics {
  organization_id: string;
  business_unit_id?: string;
  department_id?: string;
  team_id?: string;
  reference_period: string;
  total_revenue: number;
  total_costs: number;
  net_profit: number;
  profit_margin: number;
  headcount: number;
  reports_count: number;
  kpis_count: number;
  challenges_count: number;
  created_at: string;
}

interface ComparisonData {
  period: string;
  metrics: ConsolidatedMetrics[];
  variance?: {
    revenue: number;
    costs: number;
    profit: number;
    margin: number;
  };
}

const ConsolidatedDashboard = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>('all');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('current');
  const [comparisonMode, setComparisonMode] = useState<'none' | 'previous' | 'yoy'>('none');
  
  const { data: businessUnits = [] } = useBusinessUnits();
  const { data: departments = [] } = useDepartments(selectedUnit !== 'all' ? selectedUnit : undefined);
  const { data: teams = [] } = useTeams(selectedUnit !== 'all' ? selectedUnit : undefined, selectedDepartment !== 'all' ? selectedDepartment : undefined);

  // Métricas consolidadas
  const { data: metrics = [], isLoading: metricsLoading } = useQuery({
    queryKey: ['consolidated-metrics', selectedUnit, selectedDepartment, selectedPeriod],
    queryFn: async (): Promise<ConsolidatedMetrics[]> => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      let query = supabase
        .from('dashboard_metrics_summary')
        .select('*')
        .eq('organization_id', profile.organization_id)
        .order('reference_period', { ascending: false });
      
      // Filtros
      if (selectedUnit !== 'all') {
        query = query.eq('business_unit_id', selectedUnit);
      }
      
      if (selectedDepartment !== 'all') {
        query = query.eq('department_id', selectedDepartment);
      }
      
      // Período
      const now = new Date();
      if (selectedPeriod === 'current') {
        const currentPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        query = query.eq('reference_period', currentPeriod);
      } else if (selectedPeriod === 'previous') {
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1);
        const previousPeriod = `${prevMonth.getFullYear()}-${String(prevMonth.getMonth() + 1).padStart(2, '0')}`;
        query = query.eq('reference_period', previousPeriod);
      } else {
        // Últimos 3 meses
        const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2);
        query = query.gte('reference_period', `${threeMonthsAgo.getFullYear()}-${String(threeMonthsAgo.getMonth() + 1).padStart(2, '0')}`);
        query = query.lte('reference_period', `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`);
      }
      
      const { data } = await query;
      return data || [];
    },
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });

  // Dados comparativos
  const { data: comparisonData = [] } = useQuery({
    queryKey: ['comparison-data', selectedUnit, selectedDepartment, comparisonMode],
    queryFn: async (): Promise<ComparisonData[]> => {
      if (comparisonMode === 'none') return [];
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];
      
      const { data: profile } = await supabase
        .from('profiles')
        .select('organization_id')
        .eq('id', user.id)
        .single();
      
      if (!profile?.organization_id) return [];
      
      const now = new Date();
      const periods = [];
      
      if (comparisonMode === 'previous') {
        // Mês atual e mês anterior
        const currentPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1);
        const previousPeriod = `${prevMonth.getFullYear()}-${String(prevMonth.getMonth() + 1).padStart(2, '0')}`;
        periods.push(currentPeriod, previousPeriod);
      } else if (comparisonMode === 'yoy') {
        // Mês atual e mesmo mês do ano anterior
        const currentPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        const lastYear = now.getFullYear() - 1;
        const lastYearPeriod = `${lastYear}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        periods.push(currentPeriod, lastYearPeriod);
      }
      
      const { data } = await supabase
        .from('dashboard_metrics_summary')
        .select('*')
        .eq('organization_id', profile.organization_id)
        .in('reference_period', periods)
        .order('reference_period', { ascending: false });
      
      return data || [];
    },
    enabled: comparisonMode !== 'none',
    });

  // Calcular variação
  const calculateVariance = (current: number, previous: number) => {
    if (!previous || previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  // Métrica atual
  const currentMetrics = metrics[0];

  // Métricas comparativas
  const comparisonMetrics = comparisonMode !== 'none' ? comparisonData : [];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard Consolidado</h1>
        <Button variant="outline" onClick={() => window.location.reload()}>
          <RefreshCw className="w-4 h-4 mr-2" />
          Atualizar
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Unidade de Negócio</Label>
              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as unidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Unidades</SelectItem>
                  {businessUnits.map((unit) => (
                    <SelectItem key={unit.id} value={unit.id}>
                      {unit.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Departamento</Label>
              <Select 
                value={selectedDepartment} 
                onValueChange={setSelectedDepartment}
                disabled={selectedUnit === 'all'}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todos os departamentos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Departamentos</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>
                      {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Período</Label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Mês Atual</SelectItem>
                  <SelectItem value="previous">Mês Anterior</SelectItem>
                  <SelectItem value="quarter">Últimos 3 Meses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Comparação</Label>
              <Select value={comparisonMode} onValueChange={setComparisonMode}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Sem Comparação</SelectItem>
                  <SelectItem value="previous">vs Mês Anterior</SelectItem>
                  <SelectItem value="yoy">vs Ano Anterior</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Métricas Principais */}
      {currentMetrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Receita Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    R$ {currentMetrics.total_revenue.toLocaleString()}
                  </div>
                  {comparisonMetrics.length > 1 && (
                    <div className="flex items-center gap-1 text-sm">
                      {calculateVariance(currentMetrics.total_revenue, comparisonMetrics[1]?.metrics[0]?.total_revenue) >= 0 ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={
                        calculateVariance(currentMetrics.total_revenue, comparisonMetrics[1]?.metrics[0]?.total_revenue) >= 0 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }>
                        {Math.abs(calculateVariance(currentMetrics.total_revenue, comparisonMetrics[1]?.metrics[0]?.total_revenue)).toFixed(1)}%
                      </span>
                    </div>
                  )}
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Custos Totais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    R$ {currentMetrics.total_costs.toLocaleString()}
                  </div>
                  {comparisonMetrics.length > 1 && (
                    <div className="flex items-center gap-1 text-sm">
                      {calculateVariance(currentMetrics.total_costs, comparisonMetrics[1]?.metrics[0]?.total_costs) <= 0 ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={
                        calculateVariance(currentMetrics.total_costs, comparisonMetrics[1]?.metrics[0]?.total_costs) <= 0 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }>
                        {Math.abs(calculateVariance(currentMetrics.total_costs, comparisonMetrics[1]?.metrics[0]?.total_costs)).toFixed(1)}%
                      </span>
                    </div>
                  )}
                </div>
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Lucro Líquido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    R$ {currentMetrics.net_profit.toLocaleString()}
                  </div>
                  {comparisonMetrics.length > 1 && (
                    <div className="flex items-center gap-1 text-sm">
                      {calculateVariance(currentMetrics.net_profit, comparisonMetrics[1]?.metrics[0]?.net_profit) >= 0 ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={
                        calculateVariance(currentMetrics.net_profit, comparisonMetrics[1]?.metrics[0]?.net_profit) >= 0 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }>
                        {Math.abs(calculateVariance(currentMetrics.net_profit, comparisonMetrics[1]?.metrics[0]?.net_profit)).toFixed(1)}%
                      </span>
                    </div>
                  )}
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Margem Líquida</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    {currentMetrics.profit_margin.toFixed(1)}%
                  </div>
                  {comparisonMetrics.length > 1 && (
                    <div className="flex items-center gap-1 text-sm">
                      {calculateVariance(currentMetrics.profit_margin, comparisonMetrics[1]?.metrics[0]?.profit_margin) >= 0 ? (
                        <ArrowUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={
                        calculateVariance(currentMetrics.profit_margin, comparisonMetrics[1]?.metrics[0]?.profit_margin) >= 0 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }>
                        {Math.abs(calculateVariance(currentMetrics.profit_margin, comparisonMetrics[1]?.metrics[0]?.profit_margin)).toFixed(1)}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">
                    {currentMetrics.profit_margin >= 15 ? 'Ótima' : 
                     currentMetrics.profit_margin >= 10 ? 'Boa' : 
                     currentMetrics.profit_margin >= 5 ? 'Regular' : 'Baixa'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* KPIs Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Headcount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">{currentMetrics?.headcount || 0}</div>
                <div className="text-sm text-gray-500">Colaboradores</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Relatórios Criados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">{currentMetrics?.reports_count || 0}</div>
                <div className="text-sm text-gray-500">No período</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">KPIs Extraídos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">{currentMetrics?.kpis_count || 0}</div>
                <div className="text-sm text-gray-500">Indicadores</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico Comparativo */}
      {comparisonMode !== 'none' && comparisonData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Análise Comparativa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {comparisonData.map((period) => (
                <div key={period.period} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <h3 className="font-semibold">
                      {new Date(period.period + '-01').toLocaleDateString('pt-BR', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {period.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 border rounded-lg">
                        <div className="text-sm text-gray-600">Receita</div>
                        <div className="text-lg font-bold">
                          R$ {metric.total_revenue.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Estrutura Organizacional */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Estrutura Organizacional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Unidades */}
            <div>
              <h3 className="font-semibold mb-3">Unidades de Negócio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {businessUnits.map((unit) => (
                  <div key={unit.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{unit.name}</h4>
                      <Badge variant={unit.is_primary ? "default" : "outline"}>
                        {unit.is_primary ? 'Principal' : 'Secundária'}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Tipo: {unit.type}</div>
                      {unit.address && <div>{unit.address}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departamentos */}
            {selectedUnit !== 'all' && (
              <div>
                <h3 className="font-semibold mb-3">Departamentos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departments.map((dept) => (
                    <div key={dept.id} className="p-4 border rounded-lg">
                      <h4 className="font-medium">{dept.name}</h4>
                      <div className="text-sm text-gray-600 mt-2">
                        <div>Código: {dept.code}</div>
                        {dept.cost_center && <div>Centro de Custo: {dept.cost_center}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Times */}
            {selectedDepartment !== 'all' && (
              <div>
                <h3 className="font-semibold mb-3">Times</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teams.map((team) => (
                    <div key={team.id} className="p-4 border rounded-lg">
                      <h4 className="font-medium">{team.name}</h4>
                      <div className="text-sm text-gray-600 mt-2">
                        <div>Tipo: {team.type}</div>
                        <div>Código: {team.code}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsolidatedDashboard;
