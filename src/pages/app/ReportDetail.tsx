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
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
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
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
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
    <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
            <Link to="/app/relatorios">
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          </Button>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">{report.title}</h1>
            {report.subtitle && (
              <p className="text-muted-foreground text-sm truncate">{report.subtitle}</p>
            )}
          </div>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <Badge className={getStatusColor(report.status)}>
            {getStatusText(report.status)}
          </Badge>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
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

        {/* Mobile Status Badge */}
        <div className="sm:hidden flex items-center gap-2">
          <Badge className={getStatusColor(report.status)}>
            {getStatusText(report.status)}
          </Badge>
        </div>
      </div>

      {/* Report Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="h-4 w-4 flex-shrink-0" />
              <span>Categoria</span>
            </div>
            <p className="font-medium text-sm sm:text-base truncate">{report.category}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>Criado em</span>
            </div>
            <p className="font-medium text-sm sm:text-base">{new Date(report.createdAt).toLocaleDateString('pt-BR')}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>Atualizado</span>
            </div>
            <p className="font-medium text-sm sm:text-base">{new Date(report.updatedAt).toLocaleDateString('pt-BR')}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4 flex-shrink-0" />
              <span>Visualizações</span>
            </div>
            <p className="font-medium text-sm sm:text-base">24</p>
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
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">{report.title}</h1>
                {report.subtitle && (
                  <p className="text-muted-foreground text-sm sm:text-base">{report.subtitle}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Gerado em {new Date(report.createdAt).toLocaleDateString('pt-BR')}
                </p>
              </div>

              {/* Resumo Executivo */}
              <section>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Resumo Executivo</h2>
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  {report.description || 'Este relatório apresenta uma análise detalhada dos principais indicadores e métricas de performance, fornecendo insights valiosos para a tomada de decisão estratégica.'}
                </p>
              </section>

              {/* Destaques */}
              <section>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Principais Destaques</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(report.data).map(([key, value]) => (
                    <div key={key} className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                      <h3 className="font-medium text-foreground capitalize text-sm">{key}</h3>
                      <p className="text-xl sm:text-2xl font-bold text-primary">{typeof value === 'number' ? value.toLocaleString() : String(value)}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Análise */}
              <section>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Análise Detalhada</h2>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed text-sm sm:text-base">
                    Os dados apresentados indicam uma performance consistente com as expectativas estabelecidas. 
                    As métricas principais demonstram uma tendência positiva, sugerindo eficácia nas estratégias implementadas.
                  </p>
                  <div className="bg-info/5 p-4 rounded-lg border border-info/20">
                    <h4 className="font-medium text-foreground mb-2">💡 Insight da IA</h4>
                    <p className="text-muted-foreground text-sm">
                      Com base nos dados fornecidos, recomenda-se manter o foco nas áreas de maior performance 
                      e considerar estratégias de otimização para os indicadores com maior potencial de crescimento.
                    </p>
                  </div>
                </div>
              </section>

              {/* Próximos Passos */}
              <section>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Próximos Passos</h2>
                <div className="space-y-2">
                  {['Aprofundar análise das métricas com melhor performance', 'Implementar ações corretivas para indicadores em declínio', 'Estabelecer cronograma para reavaliação em 30 dias'].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">{i + 1}</span>
                      <p className="text-foreground text-sm sm:text-base">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Paper>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Informações do Relatório</CardTitle>
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
              <CardTitle className="text-base sm:text-lg">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Edit className="mr-2 h-4 w-4" />
                Editar Relatório
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Exportar PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-14 left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-3 z-40 flex gap-2" style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}>
        <Button variant="outline" className="flex-1" onClick={handleShare}>
          <Share2 className="h-4 w-4 mr-2" />
          Compartilhar
        </Button>
        <Button className="flex-1" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default ReportDetail;
