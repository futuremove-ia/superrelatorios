import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useReportBuilderContext } from '@/contexts/ReportBuilderContext';
import { useTranslation } from 'react-i18next';


export const GenerationStep = () => {
  const { formData, setFormData } = useReportBuilderContext();
  const { t } = useTranslation();


  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{t('builder.steps.generation.title')}</h2>
        <p className="text-muted-foreground">
          {t('builder.steps.generation.desc')}
        </p>
      </div>


      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">{t('builder.steps.generation.form.title_label')} *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder={t('builder.steps.generation.form.title_placeholder')}
              />
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">{t('builder.steps.template.status_label')}</p>
              <p className="text-success">{t('builder.steps.template.status_val')}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">{t('builder.steps.generation.form.cat_label')}</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('builder.steps.generation.form.cat_placeholder')} />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Executivo">{t('reports.categories.executive')}</SelectItem>
                  <SelectItem value="Vendas">{t('reports.categories.sales')}</SelectItem>
                  <SelectItem value="Financeiro">{t('reports.categories.financial')}</SelectItem>
                  <SelectItem value="Marketing">{t('reports.categories.marketing')}</SelectItem>
                  <SelectItem value="Operacional">{t('reports.categories.operational')}</SelectItem>
                  <SelectItem value="RH">{t('reports.categories.rh')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">{t('builder.steps.generation.form.desc_label')}</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder={t('builder.steps.generation.form.desc_placeholder')}
              rows={3}
            />
          </div>

        </CardContent>
      </Card>

    </div>
  );
};
