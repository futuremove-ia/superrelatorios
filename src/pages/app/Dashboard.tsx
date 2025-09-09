import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, TrendingUp, Clock, Share2, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { reportsService, Report } from '@/services/mockReports';
import BrandName from '@/components/BrandName';

const Dashboard = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await reportsService.getAllReports();
        setReports(data.slice(0, 6)); // Show only recent reports
      } catch (error) {
        console.error('Error loading reports:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  const getStatusColor = (status: Report['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'shared': return 'bg-blue-100 text-blue-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status: Report['status']) => {
    switch (status) {
      case 'completed': return 'Concluído';
      case 'shared': return 'Compartilhado';
      default: return 'Rascunho';
    }
  };

  const stats = [
    { name: 'Total de Relatórios', value: reports.length, icon: FileText, change: '+12%' },
    { name: 'Compartilhados', value: reports.filter(r => r.status === 'shared').length, icon: Share2, change: '+18%' },
    { name: 'Em Andamento', value: reports.filter(r => r.status === 'draft').length, icon: Clock, change: '-5%' },
    { name: 'Taxa de Conclusão', value: '87%', icon: TrendingUp, change: '+3%' },
  ];

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-64"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 bg-muted rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-48 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Painel do <BrandName />
          </h1>
          <p className="text-muted-foreground mt-2">
            Gerencie seus relatórios e acompanhe seu progresso
          </p>
        </div>
        <Button asChild size="lg">
          <Link to="/app/novo-relatorio">
            <Plus className="mr-2 h-5 w-5" />
            Novo Relatório
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                {' '}desde o mês passado
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Relatórios Recentes</h2>
          <Button variant="outline" asChild>
            <Link to="/app/relatorios">Ver Todos</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground line-clamp-1">
                      {report.title}
                    </CardTitle>
                    {report.subtitle && (
                      <CardDescription className="mt-1">
                        {report.subtitle}
                      </CardDescription>
                    )}
                  </div>
                  <Badge className={getStatusColor(report.status)}>
                    {getStatusText(report.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Categoria: {report.category}</span>
                    <span>Atualizado: {new Date(report.updatedAt).toLocaleDateString('pt-BR')}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to={`/app/relatorios/${report.id}`}>
                        Abrir
                      </Link>
                    </Button>
                    {report.status === 'completed' && (
                      <Button variant="secondary" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Crie relatórios rapidamente usando nossos modelos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" asChild className="h-auto p-4">
              <Link to="/app/novo-relatorio?template=executive-quarterly">
                <div className="text-center">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Relatório Executivo</div>
                  <div className="text-xs text-muted-foreground">
                    Performance trimestral
                  </div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <Link to="/app/novo-relatorio?template=sales-monthly">
                <div className="text-center">
                  <FileText className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Relatório de Vendas</div>
                  <div className="text-xs text-muted-foreground">
                    Análise mensal
                  </div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <Link to="/app/novo-relatorio?template=financial-monthly">
                <div className="text-center">
                  <Plus className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-medium">Relatório Customizado</div>
                  <div className="text-xs text-muted-foreground">
                    Criar do zero
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;