import { useState } from 'react';
import { User, Settings as SettingsIcon, Shield, Bell, Palette, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

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

  const sections = [
    { id: 'profile', title: t('settings.sections.profile'), icon: User, description: t('settings.profile.desc') },
    { id: 'notifications', title: t('settings.sections.notifications'), icon: Bell, description: t('settings.notifications.desc') },
    { id: 'appearance', title: t('settings.sections.appearance'), icon: Palette, description: t('settings.appearance.description') },
    { id: 'security', title: t('settings.sections.security'), icon: Shield, description: t('settings.security.desc') },
    { id: 'plan', title: t('settings.sections.plan'), icon: Zap, description: t('settings.plan.desc') },
  ];


  const [activeSection, setActiveSection] = useState('profile');

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

  const renderNotifications = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            {t('settings.notifications.title')}
          </CardTitle>
          <CardDescription>{t('settings.notifications.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

          {[
            { key: 'email', label: t('settings.notifications.email'), desc: t('settings.notifications.email_desc') },
            { key: 'push', label: t('settings.notifications.push'), desc: t('settings.notifications.push_desc') },
            { key: 'reports', label: t('settings.notifications.reports'), desc: t('settings.notifications.reports_desc') },
            { key: 'marketing', label: t('settings.notifications.marketing'), desc: t('settings.notifications.marketing_desc') },
          ].map((item, i) => (
            <div key={item.key}>
              {i > 0 && <Separator className="mb-4" />}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1 mr-4">
                  <Label>{item.label}</Label>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Switch 
                  checked={settings.notifications[item.key as keyof typeof settings.notifications]}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      notifications: { ...prev.notifications, [item.key]: checked }
                    }))
                  }
                />
              </div>
            </div>
          ))}
          <Button onClick={() => handleSave(t('settings.sections.notifications'))}>{t('settings.notifications.save_button')}</Button>

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

  const renderSection = () => {
    switch (activeSection) {
      case 'profile': return renderProfile();
      case 'notifications': return renderNotifications();
      case 'appearance': return renderAppearance();
      case 'security': return renderSecurity();
      case 'plan': return renderPlan();
      default: return renderProfile();
    }
  };

  return (
    <div className="bg-gradient-subtle min-h-full">
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* Mobile Section Selector */}
        <div className="lg:hidden mb-6">
          <Select value={activeSection} onValueChange={setActiveSection}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sections.map((section) => (
                <SelectItem key={section.id} value={section.id}>
                  {section.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <SettingsIcon className="h-5 w-5 text-primary" />
                {t('settings.title')}
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
                      activeSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <section.icon className="h-4 w-4 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{section.title}</div>
                      <div className="text-xs opacity-70 truncate">{section.description}</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
