import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, Share2, Download, Eye, MoreHorizontal, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FloatingButton } from '@/components/ui/floating-button';
import { AISidebar } from '@/components/ai/AISidebar';
import { reportsService, Report } from '@/services/mockReports';

const ReportsList = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const loadReports = async () => {
      try {
        const data = await reportsService.getAllReports();
        setReports(data);
        setFilteredReports(data);
      } catch (error) {
        console.error('Error loading reports:', error);
      } finally {
        setLoading(false);
      }
    };

    loadReports();
  }, []);

  useEffect(() => {
    let filtered = reports;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(report => 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(report => report.status === statusFilter);
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(report => report.category === categoryFilter);
    }

    setFilteredReports(filtered);
  }, [reports, searchTerm, statusFilter, categoryFilter]);

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

  const categories = Array.from(new Set(reports.map(r => r.category)));

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-muted rounded w-48"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-10 bg-muted rounded flex-1"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 bg-muted rounded"></div>
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
        <div className="flex-1 p-4 sm:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                <Filter className="h-7 w-7 text-primary" />
                Meus Relatórios
              </h1>
              <p className="text-muted-foreground mt-1 sm:mt-2">
                Gerencie todos os seus relatórios em um só lugar
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

          {/* Filters */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Buscar relatórios..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 border-muted focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full sm:w-40">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="draft">Rascunho</SelectItem>
                          <SelectItem value="completed">Concluído</SelectItem>
                          <SelectItem value="shared">Compartilhado</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className="w-full sm:w-40">
                          <SelectValue placeholder="Categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          {categories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* View Toggle */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {filteredReports.length} relatório{filteredReports.length !== 1 ? 's' : ''} encontrado{filteredReports.length !== 1 ? 's' : ''}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="hover-scale"
                      >
                        <Grid className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className="hover-scale"
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reports */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {filteredReports.length === 0 ? (
              <Card className="card-hover">
                <CardContent className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      Nenhum relatório encontrado
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all' 
                        ? 'Tente ajustar os filtros para encontrar o que procura.'
                        : 'Você ainda não criou nenhum relatório. Que tal começar agora?'
                      }
                    </p>
                    {!searchTerm && statusFilter === 'all' && categoryFilter === 'all' && (
                      <Button asChild className="card-hover">
                        <Link to="/app/novo-relatorio">
                          <Plus className="mr-2 h-4 w-4" />
                          Criar Primeiro Relatório
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredReports.map((report, index) => (
                  <Card key={report.id} className="card-hover group" style={{ animationDelay: `${index * 0.05}s` }}>
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
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(report.status)} variant="secondary">
                            {getStatusText(report.status)}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link to={`/app/relatorios/${report.id}`}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  Visualizar
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share2 className="mr-2 h-4 w-4" />
                                Compartilhar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
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
                              <Eye className="mr-2 h-4 w-4" />
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
            ) : (
              <Card>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {filteredReports.map((report, index) => (
                      <div key={report.id} className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors group">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                {report.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {report.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{report.category}</span>
                              <Badge className={getStatusColor(report.status)} variant="secondary">
                                {getStatusText(report.status)}
                              </Badge>
                              <span className="hidden sm:block">{new Date(report.updatedAt).toLocaleDateString('pt-BR')}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/app/relatorios/${report.id}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              Abrir
                            </Link>
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Share2 className="mr-2 h-4 w-4" />
                                Compartilhar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* AI Sidebar */}
        <div className="hidden xl:block w-80 p-6">
          <AISidebar context="reports" />
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

export default ReportsList;