import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, Share2, Download, Eye, MoreHorizontal, Grid, List } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    if (searchTerm) {
      filtered = filtered.filter(report => 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== 'all') filtered = filtered.filter(report => report.status === statusFilter);
    if (categoryFilter !== 'all') filtered = filtered.filter(report => report.category === categoryFilter);
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
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-muted rounded w-48"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-56 bg-muted rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-subtle min-h-full">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2 sm:gap-3">
                <Filter className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                Meus Relatórios
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                Gerencie todos os seus relatórios em um só lugar
              </p>
            </div>
            <Button asChild size="default" className="self-start sm:self-auto touch-target">
              <Link to="/app/novo-relatorio">
                <Plus className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Novo Relatório</span>
                <span className="sm:hidden">Novo</span>
              </Link>
            </Button>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar relatórios..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full sm:w-36">
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
                      <SelectTrigger className="w-full sm:w-36">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {filteredReports.length} relatório{filteredReports.length !== 1 ? 's' : ''} encontrado{filteredReports.length !== 1 ? 's' : ''}
                  </p>
                  <div className="hidden sm:flex items-center gap-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports */}
          {filteredReports.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Nenhum relatório encontrado
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all' 
                      ? 'Tente ajustar os filtros para encontrar o que procura.'
                      : 'Você ainda não criou nenhum relatório. Que tal começar agora?'
                    }
                  </p>
                  {!searchTerm && statusFilter === 'all' && categoryFilter === 'all' && (
                    <Button asChild>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredReports.map((report) => (
                <Card key={report.id} className="card-hover group">
                  <CardHeader className="pb-2 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm sm:text-base text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {report.title}
                        </CardTitle>
                        {report.subtitle && (
                          <CardDescription className="mt-1 line-clamp-1 text-xs">{report.subtitle}</CardDescription>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Badge className={`${getStatusColor(report.status)} text-xs`} variant="secondary">
                          {getStatusText(report.status)}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/app/relatorios/${report.id}`}>
                                <Eye className="mr-2 h-4 w-4" />Visualizar
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem><Share2 className="mr-2 h-4 w-4" />Compartilhar</DropdownMenuItem>
                            <DropdownMenuItem><Download className="mr-2 h-4 w-4" />Download PDF</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 p-4">
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{report.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{report.category}</span>
                        <span>{new Date(report.updatedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to={`/app/relatorios/${report.id}`}>
                          <Eye className="mr-2 h-4 w-4" />Abrir
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                {filteredReports.map((report) => (
                  <div key={report.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors group gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {report.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>{report.category}</span>
                        <Badge className={`${getStatusColor(report.status)} text-xs`} variant="secondary">
                          {getStatusText(report.status)}
                        </Badge>
                        <span>{new Date(report.updatedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/app/relatorios/${report.id}`}>
                          <Eye className="h-4 w-4 mr-1" />Abrir
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* AI Sidebar */}
        <div className="hidden xl:block w-80 p-6">
          <AISidebar context="reports" />
        </div>
      </div>
    </div>
  );
};

export default ReportsList;
