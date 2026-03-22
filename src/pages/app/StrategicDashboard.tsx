import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  TrendingUp, 
  Target, 
  Lightbulb,
  Download,
  Share
} from 'lucide-react';
import KPIDashboard from '@/components/strategic/KPIDashboard';
import DetectionService from '@/services/strategic/DetectionService';
import { DetectionResult, Challenge, KPIData } from '@/types/strategic';

const StrategicDashboard: React.FC = () => {
  const [kpis, setKpis] = useState<KPIData[]>([]);
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock data - substituir com dados reais da API
  useEffect(() => {
    const mockKPIs: KPIData[] = [
      {
        code: 'RUNWAY',
        name: 'Runway',
        value: 0.8,
        unit: 'meses',
        threshold: { critical: 1, warning: 3 },
        trend: 'down',
        previousValue: 1.2,
        change: -33.3,
        category: 'financial'
      },
      {
        code: 'LTV_CAC_RATIO',
        name: 'LTV/CAC Ratio',
        value: 1.2,
        unit: 'x',
        threshold: { critical: 1.5, warning: 2.5 },
        trend: 'down',
        previousValue: 1.8,
        change: -33.3,
        category: 'marketing'
      },
      {
        code: 'NET_PROFIT_MARG',
        name: 'Net Profit Margin',
        value: -2.5,
        unit: '%',
        threshold: { critical: 0, warning: 5 },
        trend: 'down',
        previousValue: 3.2,
        change: -178.1,
        category: 'financial'
      },
      {
        code: 'BURN_RATE',
        name: 'Burn Rate',
        value: 15000,
        unit: 'R$/mês',
        threshold: { critical: 10000, warning: 5000 },
        trend: 'up',
        previousValue: 12000,
        change: 25.0,
        category: 'financial'
      },
      {
        code: 'SALES_CYCLE_DAYS',
        name: 'Sales Cycle Days',
        value: 95,
        unit: 'dias',
        threshold: { critical: 90, warning: 60 },
        trend: 'up',
        previousValue: 85,
        change: 11.8,
        category: 'sales'
      },
      {
        code: 'CHURN_RATE',
        name: 'Churn Rate',
        value: 12.5,
        unit: '%',
        threshold: { critical: 10, warning: 5 },
        trend: 'up',
        previousValue: 8.3,
        change: 50.6,
        category: 'marketing'
      }
    ];

    const detectionService = DetectionService.getInstance();
    const result = detectionService.detectSymptoms(mockKPIs);
    
    setKpis(mockKPIs);
    setDetectionResult(result);
    setLoading(false);
  }, []);

  const getHealthIcon = (health: string) => {
    switch (health) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning': return <Info className="h-5 w-5 text-yellow-500" />;
      case 'good': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'critical': return 'destructive';
      case 'warning': return 'secondary';
      case 'good': return 'default';
      default: return 'secondary';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard Estratégico</h1>
        </div>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Estratégico</h1>
          <p className="text-muted-foreground">GPS Estratégico para PMEs</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
        </div>
      </div>

      {/* Health Status */}
      {detectionResult && (
        <Alert className={`border-l-4 ${
          detectionResult.overallHealth === 'critical' ? 'border-l-red-500' :
          detectionResult.overallHealth === 'warning' ? 'border-l-yellow-500' :
          'border-l-green-500'
        }`}>
          {getHealthIcon(detectionResult.overallHealth)}
          <AlertDescription className="ml-2">
            <strong>Saúde Empresarial: </strong>
            <Badge variant={getHealthColor(detectionResult.overallHealth)} className="ml-2">
              {detectionResult.overallHealth === 'critical' ? 'Crítica' :
               detectionResult.overallHealth === 'warning' ? 'Atenção' : 'Boa'}
            </Badge>
            <span className="ml-2">{detectionResult.summary}</span>
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="kpis" className="space-y-4">
        <TabsList>
          <TabsTrigger value="kpis">KPIs Estratégicos</TabsTrigger>
          <TabsTrigger value="challenges">Desafios Detectados</TabsTrigger>
          <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
        </TabsList>

        <TabsContent value="kpis" className="space-y-4">
          <KPIDashboard kpis={kpis} />
        </TabsContent>

        <TabsContent value="challenges" className="space-y-4">
          {detectionResult && detectionResult.challenges.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {detectionResult.challenges.map((challenge) => (
                <Card key={challenge.id} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{challenge.name}</CardTitle>
                      <Badge variant={
                        challenge.severity === 'critical' ? 'destructive' :
                        challenge.severity === 'warning' ? 'secondary' : 'default'
                      }>
                        {challenge.severity === 'critical' ? 'Crítico' :
                         challenge.severity === 'warning' ? 'Atenção' : 'Info'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Confiança:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                challenge.confidence >= 0.8 ? 'bg-red-500' :
                                challenge.confidence >= 0.6 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${challenge.confidence * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{Math.round(challenge.confidence * 100)}%</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium">KPIs Afetados:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {challenge.detectedKPIs.map((kpi) => (
                            <Badge key={kpi} variant="outline" className="text-xs">
                              {kpi}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Nenhum Desafio Detectado</h3>
                <p className="text-muted-foreground">Sua empresa está saudável estrategicamente!</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          {detectionResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Recomendações Estratégicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(() => {
                    const detectionService = DetectionService.getInstance();
                    const recommendations = detectionService.getRecommendations(detectionResult.challenges);
                    
                    return recommendations.length > 0 ? (
                      <div className="grid gap-3">
                        {recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                            <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{rec}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <p className="text-muted-foreground">Continue monitorando seus KPIs para manter a saúde empresarial.</p>
                      </div>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StrategicDashboard;
