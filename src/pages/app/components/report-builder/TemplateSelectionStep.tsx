import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useReportBuilderContext } from '@/contexts/ReportBuilderContext';
import { mockTemplates } from '@/services/mockReports';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


export const TemplateSelectionStep = () => {
  const { formData, file, textData, selectedTemplate, setSelectedTemplate, setBlocks } = useReportBuilderContext();
  const { t } = useTranslation();


  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('builder.steps.template.title')}</h2>
        <p className="text-muted-foreground">
          {t('builder.steps.template.desc')}
        </p>
      </div>


      {/* Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            {t('builder.steps.template.preview_title')}
          </CardTitle>

        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">{t('builder.steps.template.source_label')}</p>
              <p className="text-muted-foreground">
                {formData.dataSource === 'upload' ? file?.name : t('builder.steps.data.sources.paste')}
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">{t('builder.steps.template.size_label')}</p>
              <p className="text-muted-foreground">
                {formData.dataSource === 'upload' 
                  ? `${Math.round((file?.size || 0) / 1024)} KB`
                  : `${textData.length} chars`
                }
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">{t('builder.steps.template.status_label')}</p>
              <p className="text-success">{t('builder.steps.template.status_val')}</p>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Template Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Escolha um Modelo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTemplates.map((template) => (
            <Card 
              key={template.id}
              className={cn(
                "cursor-pointer transition-all duration-300 card-hover border-2",
                selectedTemplate === template.id 
                  ? "border-primary bg-primary/5 ring-1 ring-primary/20 shadow-lg" 
                  : "border-border/40"
              )}
              onClick={() => {
                setSelectedTemplate(template.id);
                setBlocks(template.defaultBlocks);
              }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">{template.name}</CardTitle>
                <CardDescription className="text-xs">{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {template.defaultBlocks.map((block, index) => (
                    <Badge key={index} variant="secondary" className="text-[10px] uppercase font-bold tracking-wider opacity-70">
                      {block.type}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
