import React, { useState } from 'react';
import { 
  Database, 
  FileText, 
  Link as LinkIcon, 
  Type, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Download, 
  ExternalLink, 
  Trash2, 
  Folder,
  Filter,
  ArrowUpDown,
  FileSpreadsheet,
  FileJson,
  FileCode,
  Globe,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockDataSources } from '@/services/mockDataHub';
import { DataSource, SourceType } from '@/types/dataHub';
import { useTranslation } from 'react-i18next';
import { formatBytes } from '@/lib/utils'; // Assuming formatBytes helper exists or we can mock it

const DataHub = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sources, setSources] = useState<DataSource[]>(mockDataSources); // Restaurando mocks

  const getSourceIcon = (type: SourceType, extension?: string) => {
    if (type === 'url') return <Globe className="h-5 w-5 text-blue-500" />;
    if (type === 'raw_text') return <Type className="h-5 w-5 text-amber-500" />;
    
    // File icons by extension
    if (extension === 'xlsx' || extension === 'csv') return <FileSpreadsheet className="h-5 w-5 text-green-600" />;
    if (extension === 'json') return <FileJson className="h-5 w-5 text-amber-600" />;
    if (extension === 'pdf') return <FileText className="h-5 w-5 text-red-500" />;
    
    return <FileCode className="h-5 w-5 text-slate-500" />;
  };

  const filteredSources = sources.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalStorage = sources.reduce((acc, s) => acc + (s.metadata.size || 0), 0);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b pb-6">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Database className="h-8 w-8 text-primary" />
            </div>
            {t('data_hub.title')}
          </h1>
          <p className="text-muted-foreground font-medium">
            {t('data_hub.subtitle')}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="lg" className="gap-2 font-bold shadow-sm">
            <Plus className="h-5 w-5" />
            {t('data_hub.add_source')}
          </Button>
          <Button size="lg" className="gap-2 font-bold shadow-md bg-primary hover:bg-primary/90">
            <Database className="h-5 w-5" />
            {t('data_hub.new_analysis')}
          </Button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg"><FileText className="h-5 w-5 text-blue-600" /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('data_hub.stats.files')}</p>
              <p className="text-xl font-black">{sources.filter(s => s.type === 'file').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-amber-100 rounded-lg"><LinkIcon className="h-5 w-5 text-amber-600" /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('data_hub.stats.urls')}</p>
              <p className="text-xl font-black">{sources.filter(s => s.type === 'url').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-green-100 rounded-lg"><Type className="h-5 w-5 text-green-600" /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('data_hub.stats.text')}</p>
              <p className="text-xl font-black">{sources.filter(s => s.type === 'raw_text').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-muted/30 border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-2 bg-slate-100 rounded-lg"><Database className="h-5 w-5 text-slate-600" /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('data_hub.stats.storage')}</p>
              <p className="text-xl font-black">{(totalStorage / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <Tabs defaultValue="all" className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="all" className="font-bold text-xs uppercase tracking-widest">{t('data_hub.tabs.all')}</TabsTrigger>
            <TabsTrigger value="files" className="font-bold text-xs uppercase tracking-widest">{t('data_hub.tabs.files')}</TabsTrigger>
            <TabsTrigger value="urls" className="font-bold text-xs uppercase tracking-widest">{t('data_hub.tabs.urls')}</TabsTrigger>
            <TabsTrigger value="text" className="font-bold text-xs uppercase tracking-widest">{t('data_hub.tabs.text')}</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder={t('data_hub.search_placeholder')} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-9" 
              />
            </div>
            <Button variant="outline" size="sm" className="h-9 gap-2">
              <Filter className="h-4 w-4" />
              {t('priorities.filter')}
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="animate-in fade-in-50 duration-300">
          {filteredSources.length === 0 ? (
            <EmptyState 
              icon={Database}
              title={t('data_hub.empty.title')}
              description={t('data_hub.empty.description')}
              actionLabel={t('data_hub.empty.cta')}
              onAction={() => {/* Abrir modal de upload */}}
            />
          ) : (
            <Card className="border-none shadow-xl">
              <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b bg-muted/20">
                    <tr>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t('data_hub.table.source')}</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground hidden sm:table-cell">{t('data_hub.table.type')}</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground hidden md:table-cell">{t('data_hub.table.reports')}</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground hidden lg:table-cell">{t('data_hub.table.date')}</th>
                      <th className="p-4 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {filteredSources.map((source) => (
                      <tr key={source.id} className="group hover:bg-primary/[0.02] transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-background rounded-lg border shadow-sm group-hover:scale-110 transition-transform">
                              {getSourceIcon(source.type, source.metadata.extension)}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-sm sm:text-base truncate max-w-[200px] sm:max-w-xs">{source.name}</p>
                              {source.contentUrl && source.type === 'url' && (
                                <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">{source.contentUrl}</p>
                              )}
                              {source.type === 'file' && source.metadata.size && (
                                <p className="text-[10px] text-muted-foreground">{(source.metadata.size / 1024).toFixed(0)} KB • {source.metadata.extension?.toUpperCase()}</p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 hidden sm:table-cell">
                          <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-widest bg-muted/50 border-none">
                            {source.type.replace('_', ' ')}
                          </Badge>
                        </td>
                        <td className="p-4 hidden md:table-cell">
                          <div className="flex items-center gap-1.5">
                            <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-xs font-bold">{source.linkedReportIds.length}</span>
                          </div>
                        </td>
                        <td className="p-4 hidden lg:table-cell">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {new Date(source.createdAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {source.type === 'file' && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title={t('data_hub.actions.download')}>
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                            {source.type === 'url' && (
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title={t('data_hub.actions.open_link')}>
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem className="gap-2">
                                  <Database className="h-4 w-4" /> {t('data_hub.actions.generate')}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2">
                                  <Folder className="h-4 w-4" /> {t('data_hub.actions.move')}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                                  <Trash2 className="h-4 w-4" /> {t('data_hub.actions.delete')}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataHub;
