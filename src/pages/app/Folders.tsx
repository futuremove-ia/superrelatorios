import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Folder, Plus, MoreHorizontal, Search, FileText, Edit, Trash2, CircleDollarSign, TrendingUp, Settings2, Users, Target, SearchCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FloatingButton } from '@/components/ui/floating-button';
import { AISidebar } from '@/components/ai/AISidebar';
import { Grid, List } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { folderDetailPath, newReportPath } from '@/lib/appPaths';


interface FolderData {
  id: string;
  name: string;
  icon: any;
  color: string;
  reportCount: number;
  lastModified: string;
  description?: string;
}

const Folders = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [folders, setFolders] = useState<FolderData[]>([]);

  const [filteredFolders, setFilteredFolders] = useState<FolderData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [loading, setLoading] = useState(true);

  // Mock data
  useEffect(() => {
    const mockFolders: FolderData[] = [
      {
        id: '1',
        name: 'Relatórios Financeiros',
        icon: CircleDollarSign,
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        reportCount: 12,
        lastModified: '2024-01-15',
        description: 'Análises financeiras e orçamentárias'
      },
      {
        id: '2',
        name: 'Vendas & Marketing',
        icon: TrendingUp,
        color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        reportCount: 8,
        lastModified: '2024-01-14',
        description: 'Performance de vendas e campanhas'
      },
      {
        id: '3',
        name: 'Operacional',
        icon: Settings2,
        color: 'bg-slate-50 text-slate-600 border-slate-100',
        reportCount: 5,
        lastModified: '2024-01-13',
        description: 'Processos e eficiência operacional'
      },
      {
        id: '4',
        name: 'Recursos Humanos',
        icon: Users,
        color: 'bg-orange-50 text-orange-600 border-orange-100',
        reportCount: 3,
        lastModified: '2024-01-12',
        description: 'Gestão de pessoas e talentos'
      },
      {
        id: '5',
        name: 'Projetos Estratégicos',
        icon: Target,
        color: 'bg-rose-50 text-rose-600 border-rose-100',
        reportCount: 7,
        lastModified: '2024-01-11',
        description: 'Acompanhamento de projetos especiais'
      },
      {
        id: '6',
        name: 'Compliance & Auditoria',
        icon: SearchCode,
        color: 'bg-zinc-50 text-zinc-600 border-zinc-100',
        reportCount: 4,
        lastModified: '2024-01-10',
        description: 'Conformidade e auditorias internas'
      }
    ];

    setTimeout(() => {
      setFolders(mockFolders);
      setFilteredFolders(mockFolders);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredFolders(folders.filter(folder => 
        folder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        folder.description?.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredFolders(folders);
    }
  }, [folders, searchTerm]);

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 bg-muted rounded w-48"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
          <div className="h-10 bg-muted rounded w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-40 bg-muted rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle w-full">
      <div className="flex w-full overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 min-w-0 p-4 sm:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                <Folder className="h-7 w-7 text-primary" />
                {t('folders.title')}
              </h1>
              <p className="text-muted-foreground mt-1 sm:mt-2">
                {t('folders.subtitle')}
              </p>

            </div>
            <Button size="lg" className="self-start sm:self-auto card-hover" onClick={() => navigate(newReportPath(lang))}>
                <Plus className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">{t('folders.new_folder_button')}</span>
                <span className="sm:hidden">{t('common.next')}</span>
            </Button>

          </div>

          {/* Search */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder={t('folders.search_placeholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="touch-target"
                      aria-label={t('reports.view_grid')}
                      title={t('reports.view_grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="touch-target"
                      aria-label={t('reports.view_list')}
                      title={t('reports.view_list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm text-muted-foreground">
              {t('folders.counter', { count: filteredFolders.length })}
            </p>
          </div>

          {/* Folders Grid */}
          {filteredFolders.length === 0 ? (
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <Folder className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {searchTerm ? t('folders.empty.title_search') : t('folders.empty.title')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm 
                      ? t('folders.empty.desc_search')
                      : t('folders.empty.desc')
                    }
                  </p>
                  {!searchTerm && (
                    <Button asChild>
                      <Link to={newReportPath(lang)}>
                        <Plus className="mr-2 h-4 w-4" />
                        {t('folders.empty.cta')}
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredFolders.map((folder, index) => (
                  <Card 
                    key={folder.id} 
                    className="card-hover group cursor-pointer animate-fade-in overflow-hidden border-border/40" 
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    onClick={() => navigate(folderDetailPath(lang, folder.id))}
                  >
                    <div className={`h-1.5 w-full ${folder.color.split(' ')[0]}`} />
                    <CardHeader className="pb-3 px-5 pt-5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${folder.color} shrink-0`}>
                            <folder.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl text-foreground line-clamp-1 group-hover:text-primary transition-colors font-bold tracking-tight">
                              {folder.name}
                            </CardTitle>
                            <Badge variant="secondary" className="mt-1.5 bg-secondary/50 text-secondary-foreground border-transparent px-2 font-medium">
                              {t('folders.meta.items', { count: folder.reportCount })}
                            </Badge>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={(e) => { e.stopPropagation(); /* rename */ }}>
                              <Edit className="mr-2 h-4 w-4" />
                              {t('folders.actions.rename')}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive" onClick={(e) => { e.stopPropagation(); /* delete */ }}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              {t('folders.actions.delete')}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="px-5 pb-5 pt-0">
                      <div className="space-y-4">
                        {folder.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10">
                            {folder.description}
                          </p>
                        )}
                        
                        <div className="pt-4 border-t border-border/30 flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/70">
                          <div className="flex flex-col">
                            <span>{t('folders.meta.modified')}</span>
                            <span className="text-foreground/80 mt-0.5">{new Date(folder.lastModified).toLocaleDateString(i18n.language)}</span>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="animate-fade-in overflow-hidden border-border/40">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left" aria-label={t('folders.table_desc', { defaultValue: 'Lista de pastas' })}>
                      <thead>
                        <tr className="border-b border-border/50 bg-muted/30">
                          <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">{t('folders.actions.open')}</th>
                          <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">{t('folders.meta.items', { count: 0 }).split(' ')[1]}</th>
                          <th className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell">{t('folders.meta.modified')}</th>
                          <th className="py-3 px-4 w-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFolders.map((folder) => (
                          <tr 
                            key={folder.id} 
                            className="group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                            onClick={() => navigate(folderDetailPath(lang, folder.id))}
                          >
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shadow-sm ${folder.color} shrink-0`}>
                                  <folder.icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">{folder.name}</p>
                                  <p className="text-xs text-muted-foreground hidden sm:block">{folder.description}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Badge variant="outline" className="font-medium">
                                {folder.reportCount}
                              </Badge>
                            </td>
                            <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">
                              {new Date(folder.lastModified).toLocaleDateString(i18n.language)}
                            </td>
                            <td className="py-4 px-4">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={(e) => { e.stopPropagation(); /* rename */ }}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    {t('folders.actions.rename')}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive" onClick={(e) => { e.stopPropagation(); /* delete */ }}>
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    {t('folders.actions.delete')}
                                  </DropdownMenuItem>
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
            )
          )}
        </div>

        {/* AI Sidebar */}
        <AISidebar context="reports" className="hidden xl:block" />
      </div>

      {/* Floating Action Button */}
      <FloatingButton 
        onClick={() => navigate(newReportPath(lang))}
        icon={<Plus className="h-6 w-6" />}
        className="lg:hidden"
      >
        {t('folders.new_folder_button')}
      </FloatingButton>
    </div>
  );
};

export default Folders;