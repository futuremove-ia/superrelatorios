import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Download, Edit, MoreHorizontal, Eye, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Paper } from '@/components/ui/paper';
import { reportsService, Report } from '@/services/mockReports';
import { useToast } from '@/hooks/use-toast';
import BrandName from '@/components/BrandName';

const ReportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReport = async () => {
      if (!id) return;
      
      try {
        const data = await reportsService.getReportById(id);
        if (!data) {
          navigate('/app/relatorios');
          return;
        }
        setReport(data);
      } catch (error) {
        console.error('Error loading report:', error);
        toast({
          title: "Erro ao carregar relatório",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [id, navigate, toast]);

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

  const handleShare = () => {
    toast({
      title: "Link copiado!",
      description: "O link do relatório foi copiado para a área de transferência."
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download iniciado",
      description: "O relatório está sendo baixado em PDF."
    });
  };

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded w-64"></div>
          </div>
          <div className="h-96 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <Card>
          <CardContent className="text-center py-12">
            <h3 className="text-lg font-medium text-foreground mb-2">
              Relatório não encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              O relatório que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/app/relatorios">Voltar aos Relatórios</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/app/relatorios">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{report.title}</h1>
            {report.subtitle && (
              <p className="text-muted-foreground">{report.subtitle}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(report.status)}>
            {getStatusText(report.status)}
          </Badge>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  Modo Apresentação
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Report Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="h-4 w-4" />
              <span>Categoria</span>
            </div>
            <p className="font-medium">{report.category}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Criado em</span>
            </div>
            <p className="font-medium">{new Date(report.createdAt).toLocaleDateString('pt-BR')}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Atualizado em</span>
            </div>
            <p className="font-medium">{new Date(report.updatedAt).toLocaleDateString('pt-BR')}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>Visualizações</span>
            </div>
            <p className="font-medium">24</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Paper orientation="portrait" padding="lg">
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BrandName />
                </div>
                <h1 className="text-2xl font-bold text-foreground">{report.title}</h1>
                {report.subtitle && (
                  <p className="text-muted-foreground">{report.subtitle}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Gerado em {new Date(report.createdAt).toLocaleDateString('pt-BR')}
                </p>
              </div>

              {/* Resumo Executivo */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-primary">Resumo Executivo</h2>
                <p className="text-foreground leading-relaxed">
                  {report.description || 'Este relatório apresenta uma análise detalhada dos principais indicadores e métricas de performance, fornecendo insights valiosos para a tomada de decisão estratégica.'}
                </p>
              </section>

              {/* Destaques */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-primary">Principais Destaques</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(report.data).map(([key, value]) => (
                    <div key={key} className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-medium text-foreground capitalize">{key}</h3>
                      <p className="text-2xl font-bold text-primary">{typeof value === 'number' ? value.toLocaleString() : String(value)}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Análise */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-primary">Análise Detalhada</h2>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    Os dados apresentados indicam uma performance consistente com as expectativas estabelecidas. 
                    As métricas principais demonstram uma tendência positiva, sugerindo eficácia nas estratégias implementadas.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">💡 Insight da IA</h4>
                    <p className="text-blue-800 text-sm">
                      Com base nos dados fornecidos, recomenda-se manter o foco nas áreas de maior performance 
                      e considerar estratégias de otimização para os indicadores com maior potencial de crescimento.
                    </p>
                  </div>
                </div>
              </section>

              {/* Próximos Passos */}
              <section>
                <h2 className="text-xl font-semibold mb-3 text-primary">Próximos Passos</h2>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                    <p className="text-foreground">Aprofundar análise das métricas com melhor performance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                    <p className="text-foreground">Implementar ações corretivas para indicadores em declínio</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                    <p className="text-foreground">Estabelecer cronograma para reavaliação em 30 dias</p>
                  </div>
                </div>
              </section>
            </div>
          </Paper>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Relatório</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Template Utilizado</p>
                <p className="font-medium">{report.template}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Descrição</p>
                <p className="text-sm">{report.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Edit className="mr-2 h-4 w-4" />
                Editar Relatório
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Exportar PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;