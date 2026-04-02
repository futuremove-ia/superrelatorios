import { useState } from 'react';
import { Settings as SettingsIcon, Building, Bell, Link, User, Palette, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import CompanySettings from '@/components/settings/CompanySettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import IntegrationSettings from '@/components/settings/IntegrationSettings';

const Settings = () => {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  
  const [settings, setSettings] = useState({
    notifications: { email: true, push: false, reports: true, marketing: false },
    appearance: { theme: 'light', language: i18n.language || 'pt-BR' },
    privacy: { twoFactor: false, analytics: true }
  });

  const handleSave = (section: string) => {
    toast({
      title: "Configurações salvas",
      description: `As configurações de ${section} foram atualizadas com sucesso.`,
    });
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            {t('settings.profile.title')}
          </CardTitle>
          <CardDescription>{t('settings.profile.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-lg">UD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">{t('settings.profile.photo')}</h3>
              <p className="text-sm text-muted-foreground">{t('settings.profile.photo_desc')}</p>
              <Button variant="outline" size="sm">{t('settings.profile.change_photo')}</Button>
            </div>

          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t('settings.profile.first_name')}</Label>
              <Input id="firstName" defaultValue="Usuário" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t('settings.profile.last_name')}</Label>
              <Input id="lastName" defaultValue="Demo" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">{t('settings.profile.email')}</Label>
            <Input id="email" type="email" defaultValue="usuario@exemplo.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">{t('settings.profile.company')}</Label>
            <Input id="company" defaultValue="SuperRelatórios Inc." />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">{t('settings.profile.role')}</Label>
            <Input id="role" defaultValue="Gerente de Operações" />
          </div>
          
          <Button onClick={() => handleSave(t('settings.sections.profile'))}>{t('settings.profile.save_button')}</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            {t('settings.appearance.title')}
          </CardTitle>
          <CardDescription>{t('settings.appearance.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>{t('settings.appearance.theme')}</Label>
            <Select value={settings.appearance.theme} onValueChange={(value) => 
              setSettings(prev => ({ ...prev, appearance: { ...prev.appearance, theme: value } }))
            }>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="light">{t('settings.appearance.theme_light')}</SelectItem>
                <SelectItem value="dark">{t('settings.appearance.theme_dark')}</SelectItem>
                <SelectItem value="system">{t('settings.appearance.theme_system')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>{t('settings.appearance.language')}</Label>
            <Select value={settings.appearance.language} onValueChange={(value) => {
              setSettings(prev => ({ ...prev, appearance: { ...prev.appearance, language: value } }));
              i18n.changeLanguage(value);
            }}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pt-BR">{t('settings.language.pt')}</SelectItem>
                <SelectItem value="en-US">{t('settings.language.en')}</SelectItem>
                <SelectItem value="es-ES">{t('settings.language.es')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={() => {
            toast({
              title: t('settings.appearance.save_success_title'),
              description: t('settings.appearance.save_success_desc'),
            });
          }}>{t('settings.appearance.save_button')}</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            {t('settings.security.title')}
          </CardTitle>
          <CardDescription>{t('settings.security.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

          <div className="space-y-2">
            <Label>{t('settings.security.change_password')}</Label>
            <p className="text-sm text-muted-foreground">{t('settings.security.last_changeCode', { date: 'há 3 meses' })}</p>
            <Button variant="outline" size="sm">{t('settings.security.change_password')}</Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex-1 mr-4">
              <Label>{t('settings.security.two_factor')}</Label>
              <p className="text-sm text-muted-foreground">{t('settings.security.two_factor_desc')}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={settings.privacy.twoFactor ? "default" : "secondary"}>
                {settings.privacy.twoFactor ? t('common.active') : t('common.inactive')}
              </Badge>
              <Switch 
                checked={settings.privacy.twoFactor}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, privacy: { ...prev.privacy, twoFactor: checked } }))
                }
              />
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label>{t('settings.security.active_sessions')}</Label>
            <p className="text-sm text-muted-foreground">{t('settings.security.active_sessions_desc')}</p>
            <Button variant="outline" size="sm">{t('settings.security.view_sessions')}</Button>
          </div>
          <Button onClick={() => handleSave(t('settings.sections.security'))}>{t('settings.security.save_button')}</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderPlan = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            {t('settings.plan.title')}
          </CardTitle>
          <CardDescription>{t('settings.plan.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="font-semibold text-foreground">{t('settings.plan.professional')}</h3>
                <p className="text-sm text-muted-foreground">{t('settings.plan.active_since', { date: 'Janeiro 2024' })}</p>
              </div>
              <Badge className="bg-primary text-primary-foreground self-start">{t('common.active')}</Badge>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>{t('settings.plan.usage.reports')}</span><span className="font-medium">23 / {t('common.unlimited')}</span></div>
              <div className="flex justify-between"><span>{t('settings.plan.usage.storage')}</span><span className="font-medium">2.3 GB / 100 GB</span></div>
              <div className="flex justify-between"><span>{t('settings.plan.usage.next_billing')}</span><span className="font-medium">15 de Fevereiro</span></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="flex-1">{t('settings.plan.change_plan')}</Button>
            <Button variant="outline" className="flex-1">{t('settings.plan.view_invoices')}</Button>
          </div>

          <Separator />
          <div className="space-y-2">
            <Label className="text-destructive">{t('settings.plan.danger_zone')}</Label>
            <p className="text-sm text-muted-foreground">{t('settings.plan.danger_desc')}</p>
            <Button variant="destructive" size="sm">{t('settings.plan.cancel_button')}</Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="bg-gradient-subtle min-h-full">
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <SettingsIcon className="h-6 w-6 text-primary" />
            {t('settings.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('settings.subtitle') || 'Gerencie suas configurações e preferências'}</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.tabs.general') || 'Geral'}</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.tabs.company') || 'Empresa'}</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.tabs.notifications') || 'Notificações'}</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              <span className="hidden sm:inline">{t('settings.tabs.integrations') || 'Integrações'}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="space-y-6">
              {renderProfile()}
              {renderAppearance()}
              {renderSecurity()}
              {renderPlan()}
            </div>
          </TabsContent>

          <TabsContent value="company">
            <CompanySettings />
          </TabsContent>

          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>

          <TabsContent value="integrations">
            <IntegrationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
