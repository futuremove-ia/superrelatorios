import { Upload, FileSpreadsheet, Copy, CheckCircle, Globe, FileText, Link } from 'lucide-react';
import { TemplateMatching } from '@/components/templates/TemplateMatching';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useReportBuilderContext } from '@/contexts/ReportBuilderContext';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { parseFile } from '@/services/fileParserService';


export const DataInputStep = () => {
  const { 
    formData, setFormData, 
    file, setFile, 
    textData, setTextData, 
    urlData, setUrlData,
    parsedData,
    setParsedData,
    setLoading
  } = useReportBuilderContext();
  const { toast } = useToast();
  const { t } = useTranslation();


  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setLoading(true);
      
      try {
        const parsed = await parseFile(uploadedFile);
        setParsedData(parsed);
        
        toast({
          title: t('builder.toasts.file_uploaded_title'),
          description: t('builder.toasts.file_uploaded_desc', { name: uploadedFile.name })
        });
      } catch (error: any) {
        toast({
          title: t('common.error_title'),
          description: error.message || t('builder.errors.ia_unknown'),
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('builder.steps.data.title')}</h2>
        <p className="text-muted-foreground">
          {t('builder.steps.data.desc')}
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          className={`cursor-pointer transition-all card-hover ${
            formData.dataSource === 'upload' ? 'ring-2 ring-primary bg-primary/5' : ''
          }`}
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'upload' }))}
        >
          <CardHeader className="text-center">
            <Upload className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">{t('builder.steps.data.sources.upload')}</CardTitle>
            <CardDescription>
              {t('builder.steps.data.sources.upload_desc')}
            </CardDescription>
          </CardHeader>

        </Card>
        
        <Card 
          className={`cursor-pointer transition-all card-hover ${
            formData.dataSource === 'text' ? 'ring-2 ring-primary bg-primary/5' : ''
          }`}
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'text' }))}
        >
          <CardHeader className="text-center">
            <Copy className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">{t('builder.steps.data.sources.paste')}</CardTitle>
            <CardDescription>
              {t('builder.steps.data.sources.paste_desc')}
            </CardDescription>
          </CardHeader>

        </Card>

        <Card 
          className={`cursor-pointer transition-all card-hover ${
            formData.dataSource === 'url' ? 'ring-2 ring-primary bg-primary/5' : ''
          }`}
          onClick={() => setFormData(prev => ({ ...prev, dataSource: 'url' }))}
        >
          <CardHeader className="text-center">
            <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">{t('builder.steps.data.sources.url')}</CardTitle>
            <CardDescription>
              {t('builder.steps.data.sources.url_desc')}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {formData.dataSource === 'upload' && (
        <Card>
          <CardContent className="p-6">
            <div className="border-2 border-dashed border-muted rounded-xl p-8 text-center">
              <FileSpreadsheet className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <div className="space-y-2">
                <p className="text-sm font-medium">
                  {t('builder.steps.data.dropzone.title')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('builder.steps.data.dropzone.hint')}
                </p>
                <button 
                  type="button"
                  onClick={() => toast({ title: t('builder.toasts.model_downloaded_title'), description: t('builder.toasts.model_downloaded_desc') })}
                  className="mt-2 text-xs text-primary hover:underline font-medium flex items-center justify-center gap-1 mx-auto"
                >
                  <FileSpreadsheet className="w-3 h-3" />
                  {t('builder.steps.data.example')}
                </button>
              </div>


              <Input
                type="file"
                className="mt-4 cursor-pointer"
                accept=".xlsx,.xls,.csv,.pdf,.docx"
                onChange={handleFileUpload}
              />
            </div>
            {file && (
              <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <p className="text-sm font-medium text-success">
                    {t('builder.steps.data.dropzone.success')}: {file.name}
                  </p>
                </div>
              </div>
            )}
            
            {/* Template Matching */}
            {file && parsedData && (
              <div className="mt-6">
                <TemplateMatching
                  fileData={{
                    headers: parsedData.headers,
                    rows: parsedData.rows as any[],
                    fileName: file.name,
                    fileType: file.name.split('.').pop()?.toLowerCase() || 'csv'
                  }}
                  onTemplateSelected={(template) => {
                    // Template selecionado - poderia pré-preencher campos
                    console.log('Template selecionado:', template);
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {formData.dataSource === 'text' && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Label htmlFor="textData">{t('builder.steps.data.labels.paste_area')}</Label>
              <Textarea
                id="textData"
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
                placeholder={t('builder.steps.data.labels.paste_placeholder')}
                rows={12}
                className="resize-none"
              />
              {textData && (
                <p className="text-xs text-muted-foreground">
                  {textData.length} {t('builder.steps.data.labels.chars')}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {formData.dataSource === 'url' && (
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Label htmlFor="urlData">{t('builder.steps.data.labels.url_input')}</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="urlData"
                  type="url"
                  value={urlData}
                  onChange={(e) => setUrlData(e.target.value)}
                  placeholder={t('builder.steps.data.labels.url_placeholder')}
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Dica: Certifique-se de que o link é público para que nossa IA possa ler o conteúdo.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
