import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle } from 'lucide-react';
import { KPIData } from '@/types/strategic';

interface KPIDashboardProps {
  kpis: KPIData[];
  loading?: boolean;
}

const KPIDashboard: React.FC<KPIDashboardProps> = ({ kpis, loading = false }) => {
  const getStatus = (kpi: KPIData) => {
    if (kpi.value <= kpi.threshold.critical) return 'critical';
    if (kpi.value <= kpi.threshold.warning) return 'warning';
    return 'good';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'destructive';
      case 'warning': return 'secondary';
      case 'good': return 'default';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      case 'warning': return <Minus className="h-4 w-4" />;
      case 'good': return <CheckCircle className="h-4 w-4" />;
      default: return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />;
      case 'stable': return <Minus className="h-4 w-4 text-gray-600" />;
      default: return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'financial': return 'bg-blue-100 text-blue-800';
      case 'marketing': return 'bg-purple-100 text-purple-800';
      case 'sales': return 'bg-green-100 text-green-800';
      case 'operational': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">KPIs Estratégicos</h2>
        <div className="flex gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Bom: {kpis.filter(k => getStatus(k) === 'good').length}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Minus className="h-3 w-3" />
            Atenção: {kpis.filter(k => getStatus(k) === 'warning').length}
          </Badge>
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Crítico: {kpis.filter(k => getStatus(k) === 'critical').length}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {kpis.map((kpi) => {
          const status = getStatus(kpi);
          return (
            <Card key={kpi.code} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(kpi.category)} variant="secondary">
                    {kpi.category}
                  </Badge>
                  <Badge variant={getStatusColor(status)} className="flex items-center gap-1">
                    {getStatusIcon(status)}
                    {status === 'critical' ? 'Crítico' : status === 'warning' ? 'Atenção' : 'Bom'}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{kpi.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{kpi.code}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-bold">{kpi.value}</span>
                      <span className="text-sm text-muted-foreground ml-1">{kpi.unit}</span>
                    </div>
                    {getTrendIcon(kpi.trend)}
                  </div>
                  
                  {kpi.previousValue && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Anterior:</span>
                      <span>{kpi.previousValue}</span>
                      {kpi.change && (
                        <span className={`font-medium ${
                          kpi.change > 0 ? 'text-green-600' : kpi.change < 0 ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          ({kpi.change > 0 ? '+' : ''}{kpi.change}%)
                        </span>
                      )}
                    </div>
                  )}

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Thresholds</span>
                      <span>C: {kpi.threshold.critical} | W: {kpi.threshold.warning}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          status === 'critical' ? 'bg-red-500' : 
                          status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (kpi.value / kpi.threshold.warning) * 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default KPIDashboard;
