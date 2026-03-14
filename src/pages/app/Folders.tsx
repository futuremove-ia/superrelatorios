import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Folder, Plus, MoreHorizontal, Search, FileText, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FloatingButton } from '@/components/ui/floating-button';
import { AISidebar } from '@/components/ai/AISidebar';

interface FolderData {
  id: string;
  name: string;
  icon: string;
  color: string;
  reportCount: number;
  lastModified: string;
  description?: string;
}

const Folders = () => {
  const navigate = useNavigate();
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [filteredFolders, setFilteredFolders] = useState<FolderData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock data
  useEffect(() => {
    const mockFolders: FolderData[] = [
      {
        id: '1',
        name: 'Relatórios Financeiros',
        icon: '💰',
        color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        reportCount: 12,
        lastModified: '2024-01-15',
        description: 'Análises financeiras e orçamentárias'
      },
      {
        id: '2',
        name: 'Vendas & Marketing',
        icon: '📈',
        color: 'bg-blue-100 text-blue-700 border-blue-200',
        reportCount: 8,
        lastModified: '2024-01-14',
        description: 'Performance de vendas e campanhas'
      },
      {
        id: '3',
        name: 'Operacional',
        icon: '⚙️',
        color: 'bg-purple-100 text-purple-700 border-purple-200',
        reportCount: 5,
        lastModified: '2024-01-13',
        description: 'Processos e eficiência operacional'
      },
      {
        id: '4',
        name: 'Recursos Humanos',
        icon: '👥',
        color: 'bg-orange-100 text-orange-700 border-orange-200',
        reportCount: 3,
        lastModified: '2024-01-12',
        description: 'Gestão de pessoas e talentos'
      },
      {
        id: '5',
        name: 'Projetos Estratégicos',
        icon: '🎯',
        color: 'bg-red-100 text-red-700 border-red-200',
        reportCount: 7,
        lastModified: '2024-01-11',
        description: 'Acompanhamento de projetos especiais'
      },
      {
        id: '6',
        name: 'Compliance & Auditoria',
        icon: '🔍',
        color: 'bg-gray-100 text-gray-700 border-gray-200',
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
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                <Folder className="h-7 w-7 text-primary" />
                Pastas
              </h1>
              <p className="text-muted-foreground mt-1 sm:mt-2">
                Organize seus relatórios de forma inteligente
              </p>
            </div>
            <Button size="lg" className="self-start sm:self-auto card-hover" onClick={() => navigate('/app/novo-relatorio')}>
                <Plus className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">Nova Pasta</span>
                <span className="sm:hidden">Nova</span>
            </Button>
          </div>

          {/* Search */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar pastas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm text-muted-foreground">
              {filteredFolders.length} pasta{filteredFolders.length !== 1 ? 's' : ''} encontrada{filteredFolders.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Folders Grid */}
          {filteredFolders.length === 0 ? (
            <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <Folder className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {searchTerm ? 'Nenhuma pasta encontrada' : 'Nenhuma pasta criada'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm 
                      ? 'Tente ajustar o termo de busca.'
                      : 'Organize seus relatórios criando pastas temáticas.'
                    }
                  </p>
                  {!searchTerm && (
                    <Button asChild>
                      <Link to="/app/pastas/nova">
                        <Plus className="mr-2 h-4 w-4" />
                        Criar Primeira Pasta
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredFolders.map((folder, index) => (
                <Card 
                  key={folder.id} 
                  className="card-hover group cursor-pointer animate-fade-in" 
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border ${folder.color}`}>
                          {folder.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                            {folder.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              <FileText className="h-3 w-3 mr-1" />
                              {folder.reportCount}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Renomear
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {folder.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {folder.description}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Modificado em</span>
                        <span>{new Date(folder.lastModified).toLocaleDateString('pt-BR')}</span>
                      </div>

                      <Button variant="outline" size="sm" asChild className="w-full hover-scale">
                        <Link to={`/app/pastas/${folder.id}`}>
                          Abrir Pasta
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* AI Sidebar */}
        <div className="hidden xl:block w-80 p-6">
          <AISidebar context="reports" />
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingButton 
        onClick={() => window.location.href = '/app/pastas/nova'}
        icon={<Plus className="h-6 w-6" />}
        className="lg:hidden"
      >
        Nova Pasta
      </FloatingButton>
    </div>
  );
};

export default Folders;