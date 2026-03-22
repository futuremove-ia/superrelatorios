import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendPercentage: number;
  healthStatus: 'good' | 'warning' | 'critical';
  domain: string;
  period: string;
}

interface MetricsChartProps {
  metrics: Metric[];
  domain: string;
  period: string;
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ 
  metrics, 
  domain, 
  period 
}) => {
  if (!metrics.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p className="text-sm">Nenhuma métrica encontrada para este domínio.</p>
      </div>
    );
  }

  // Prepare data for different chart types
  const healthDistribution = [
    { name: 'Boas', value: metrics.filter(m => m.healthStatus === 'good').length, color: '#10b981' },
    { name: 'Atenção', value: metrics.filter(m => m.healthStatus === 'warning').length, color: '#f59e0b' },
    { name: 'Críticas', value: metrics.filter(m => m.healthStatus === 'critical').length, color: '#ef4444' }
  ];

  const trendDistribution = [
    { name: 'Altas', value: metrics.filter(m => m.trend === 'up').length, color: '#10b981' },
    { name: 'Estáveis', value: metrics.filter(m => m.trend === 'stable').length, color: '#6b7280' },
    { name: 'Baixas', value: metrics.filter(m => m.trend === 'down').length, color: '#ef4444' }
  ];

  const valuesData = metrics.map(metric => ({
    name: metric.name.length > 15 ? metric.name.substring(0, 15) + '...' : metric.name,
    value: metric.value,
    healthStatus: metric.healthStatus,
    fill: getHealthColor(metric.healthStatus) // Adicionar fill diretamente
  }));

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'good': return '#10b981';
      case 'warning': return '#f59e0b';
      case 'critical': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="space-y-6">
      {/* Values Chart */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Valores das Métricas</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={valuesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              formatter={(value: any, name: any) => [
                `${value}`, 
                'Valor'
              ]}
              labelFormatter={(label: any) => `Métrica: ${label}`}
            />
            <Bar 
              dataKey="value" 
              fill="#8884d8"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Health Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-4">Distribuição de Saúde</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={healthDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {healthDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Distribuição de Tendências</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={trendDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {trendDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics Summary Table */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Resumo Detalhado</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Métrica</th>
                <th className="text-right p-2">Valor</th>
                <th className="text-right p-2">Tendência</th>
                <th className="text-center p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map(metric => (
                <tr key={metric.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-medium">{metric.name}</td>
                  <td className="p-2 text-right">
                    {metric.value}{metric.unit}
                  </td>
                  <td className="p-2 text-right">
                    <span className={`inline-flex items-center ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'} 
                      {metric.trendPercentage > 0 ? '+' : ''}{metric.trendPercentage.toFixed(1)}%
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      metric.healthStatus === 'good' ? 'bg-green-100 text-green-800' :
                      metric.healthStatus === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {metric.healthStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
