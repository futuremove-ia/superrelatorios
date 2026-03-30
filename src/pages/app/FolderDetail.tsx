import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Folder, ArrowLeft, Plus, MoreHorizontal, FileText, Share2, Grid, List, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { reportsService, Report } from '@/services/mockReports';
import { useTranslation } from 'react-i18next';

const FolderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  useEffect(() => {
    const loadFolderContent = async () => {
      setLoading(true);
      // Mock delay and filtering by folder (in a real app, this would be a filtered API call)
      try {
        const allReports = await reportsService.getAllReports();
        // In this mock, we'll just show a subset if it's a specific folder
        const folderReports = allReports.slice(0, 4);
        setReports(folderReports);
      } catch (error) {
        console.error('Error loading folder content:', error);
      } finally {
        setLoading(false);
      }
    };
    loadFolderContent();
  }, [id]);

  const filteredReports = reports.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto space-y-6">
        <div className="animate-pulse h-10 w-48 bg-muted rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => <div key={i} className="h-48 bg-muted rounded-xl"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-subtle min-h-screen w-full">
      <div className="flex w-full overflow-hidden">
        <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/app/pastas')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('common.back')}
              </Button>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <Folder className="h-6 w-6 text-primary" />
                  Relatórios Financeiros
                </h1>
                <p className="text-sm text-muted-foreground">
                  {t('reports.counter', { count: 12 })} • {t('folders.meta.updated_ago', { time: '2 dias' })}
                </p>
              </div>
            </div>
            <Button onClick={() => navigate('/app/novo-relatorio')}>
              <Plus className="h-4 w-4 mr-2" />
              {t('reports.new_report_button')}
            </Button>
          </div>

          {/* Action Bar */}
          <Card>
            <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder={t('folders.search_placeholder')} 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setViewMode('grid')} 
                  className={viewMode === 'grid' ? 'bg-muted' : ''}
                  aria-label={t('reports.view_grid')}
                  title={t('reports.view_grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setViewMode('list')} 
                  className={viewMode === 'list' ? 'bg-muted' : ''}
                  aria-label={t('reports.view_list')}
                  title={t('reports.view_list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Content */}
          {filteredReports.length === 0 ? (
            <Card className="animate-fade-in border-border/40">
              <CardContent className="py-20 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                <p className="text-muted-foreground">{t('reports.empty.title')}</p>
              </CardContent>
            </Card>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredReports.map((report, index) => (
                <Card 
                  key={report.id} 
                  className="card-hover group cursor-pointer overflow-hidden border-border/40 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(`/app/relatorios/${report.id}`)}
                >
                  <div className={`h-1.5 w-full ${report.category.toLowerCase().includes('finan') ? 'bg-blue-500' : 'bg-indigo-500'}`} />
                  <CardHeader className="pb-3 px-5 pt-5">
                    <div className="flex justify-between items-start gap-3">
                      <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors tracking-tight h-14">{report.title}</CardTitle>
                      <DropdownMenu>
                         <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                           <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                             <MoreHorizontal className="h-4 w-4" />
                           </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                           <DropdownMenuItem onClick={(e) => { e.stopPropagation(); navigate(`/app/relatorios/${report.id}`); }}>
                             <FileText className="h-4 w-4 mr-2" /> {t('reports.actions.view')}
                           </DropdownMenuItem>
                           <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                             <Share2 className="h-4 w-4 mr-2" /> {t('reports.actions.share')}
                           </DropdownMenuItem>
                         </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription className="line-clamp-2 text-xs leading-relaxed h-8">{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0">
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                       <Badge variant="outline" className="text-[10px] py-0 px-2 font-semibold bg-primary/5 text-primary border-primary/20">{report.category}</Badge>
                       <span className="text-[10px] font-medium text-muted-foreground/60">{new Date(report.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="animate-fade-in overflow-hidden border-border/40">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left" aria-label={t('reports.table_desc')}>
                    <thead>
                        <tr className="border-b border-border/50 bg-muted/30">
                          <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">{t('reports.title')}</th>
                          <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden sm:table-cell">{t('reports.filters.category')}</th>
                          <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell">{t('report_detail.cards.updated_at')}</th>
                          <th className="py-3 px-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody>
                      {filteredReports.map((report) => (
                        <tr 
                          key={report.id} 
                          className="group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                          onClick={() => navigate(`/app/relatorios/${report.id}`)}
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                                <FileText className="h-4 w-4 text-primary/70" />
                              </div>
                              <div>
                                <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">{report.title}</p>
                                <p className="text-xs text-muted-foreground hidden lg:block line-clamp-1 max-w-xs">{report.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 hidden sm:table-cell text-sm font-medium text-muted-foreground">
                            {report.category}
                          </td>
                          <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">
                             {new Date(report.updatedAt).toLocaleDateString(i18n.language)}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); navigate(`/app/relatorios/${report.id}`); }}>
                                  <FileText className="h-4 w-4 mr-2" />{t('reports.actions.view')}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={(e) => e.stopPropagation()}><Share2 className="mr-2 h-4 w-4" />{t('reports.actions.share')}</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default FolderDetail;
