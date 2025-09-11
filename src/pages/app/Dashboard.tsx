import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, TrendingUp, Clock, Share2, FileText, Folder, Users, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { KPICard } from '@/components/ui/kpi-card';
import { FloatingButton } from '@/components/ui/floating-button';
import { AISidebar } from '@/components/ai/AISidebar';
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
    { 
      title: 'Total de Relatórios', 
      value: reports.length.toString(), 
      icon: FileText, 
      trend: { value: 12, isPositive: true, label: 'vs mês anterior' },
      variant: 'info' as const
    },
    { 
      title: 'Compartilhados', 
      value: reports.filter(r => r.status === 'shared').length.toString(), 
      icon: Share2, 
      trend: { value: 18, isPositive: true, label: 'mais engajamento' },
      variant: 'success' as const
    },
    { 
      title: 'Em Andamento', 
      value: reports.filter(r => r.status === 'draft').length.toString(), 
      icon: Clock, 
      trend: { value: 5, isPositive: false, label: 'otimização no fluxo' },
      variant: 'warning' as const
    },
    { 
      title: 'Taxa de Conclusão', 
      value: '87%', 
      icon: TrendingUp, 
      trend: { value: 3, isPositive: true, label: 'melhoria contínua' },
      variant: 'success' as const
    },
  ];

  const folders = [
    { name: 'Relatórios Financeiros', count: 12, icon: '💰', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Vendas & Marketing', count: 8, icon: '📈', color: 'bg-blue-100 text-blue-700' },
    { name: 'Operacional', count: 5, icon: '⚙️', color: 'bg-purple-100 text-purple-700' },
  ];

  const quickActions = [
    {
      title: 'Relatório Executivo',
      description: 'Performance trimestral',
      icon: Target,
      href: '/app/novo-relatorio?template=executive-quarterly',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Relatório de Vendas',
      description: 'Análise mensal',
      icon: TrendingUp,
      href: '/app/novo-relatorio?template=sales-monthly',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Relatório Customizado',
      description: 'Criar do zero',
      icon: Plus,
      href: '/app/novo-relatorio?template=custom',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
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
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Painel do <BrandName />
              </h1>
              <p className="text-muted-foreground mt-1 sm:mt-2">
                Gerencie seus relatórios e acompanhe seu progresso
              </p>
            </div>
            <Button asChild size="lg" className="self-start sm:self-auto card-hover">
              <Link to="/app/novo-relatorio">
                <Plus className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">Novo Relatório</span>
                <span className="sm:hidden">Novo</span>
              </Link>
            </Button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={stat.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <KPICard
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  trend={stat.trend}
                  variant={stat.variant}
                />
              </div>
            ))}
          </div>

          {/* Folders Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-2">
                <Folder className="h-5 w-5 text-primary" />
                Pastas Organizadas
              </h2>
              <Button variant="outline" size="sm" asChild>
                <Link to="/app/pastas">Ver Todas</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {folders.map((folder, index) => (
                <Card key={folder.name} className="card-hover cursor-pointer group">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${folder.color}`}>
                          {folder.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {folder.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {folder.count} relatórios
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Reports */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Relatórios Recentes
              </h2>
              <Button variant="outline" asChild size="sm">
                <Link to="/app/relatorios">Ver Todos</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reports.map((report, index) => (
                <Card key={report.id} className="card-hover group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base sm:text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {report.title}
                        </CardTitle>
                        {report.subtitle && (
                          <CardDescription className="mt-1 line-clamp-1">
                            {report.subtitle}
                          </CardDescription>
                        )}
                      </div>
                      <Badge className={getStatusColor(report.status)} variant="secondary">
                        {getStatusText(report.status)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {report.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-current opacity-60"></span>
                          {report.category}
                        </span>
                        <span>{new Date(report.updatedAt).toLocaleDateString('pt-BR')}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1 hover-scale">
                          <Link to={`/app/relatorios/${report.id}`}>
                            Abrir
                          </Link>
                        </Button>
                        {report.status === 'completed' && (
                          <Button variant="secondary" size="sm" className="hover-scale">
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
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="card-hover">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Ações Rápidas
                </CardTitle>
                <CardDescription>
                  Crie relatórios rapidamente usando nossos modelos inteligentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={action.title} to={action.href} className="group">
                      <Card className="h-full card-hover border-0 bg-gradient-to-br from-background to-muted/50 group-hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <action.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {action.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* AI Sidebar */}
        <div className="hidden xl:block w-80 p-6">
          <AISidebar context="dashboard" />
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingButton 
        onClick={() => window.location.href = '/app/novo-relatorio'}
        className="lg:hidden"
      />
    </div>
  );
};

export default Dashboard;