import { useState } from 'react';
import { User, Settings as SettingsIcon, Shield, Bell, Palette, Zap, HelpCircle, LogOut } from 'lucide-react';
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

const Settings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      reports: true,
      marketing: false
    },
    appearance: {
      theme: 'light',
      language: 'pt-BR'
    },
    privacy: {
      twoFactor: false,
      analytics: true
    }
  });

  const handleSave = (section: string) => {
    toast({
      title: "Configurações salvas",
      description: `As configurações de ${section} foram atualizadas com sucesso.`,
    });
  };

  const sections = [
    { 
      id: 'profile', 
      title: 'Perfil', 
      icon: User, 
      description: 'Informações pessoais e conta' 
    },
    { 
      id: 'notifications', 
      title: 'Notificações', 
      icon: Bell, 
      description: 'Preferências de comunicação' 
    },
    { 
      id: 'appearance', 
      title: 'Aparência', 
      icon: Palette, 
      description: 'Tema e idioma' 
    },
    { 
      id: 'security', 
      title: 'Segurança', 
      icon: Shield, 
      description: 'Senha e autenticação' 
    },
    { 
      id: 'plan', 
      title: 'Plano', 
      icon: Zap, 
      description: 'Assinatura e faturamento' 
    },
  ];

  const [activeSection, setActiveSection] = useState('profile');

  const renderProfile = () => (
    <div className="space-y-6">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Informações Pessoais
          </CardTitle>
          <CardDescription>
            Atualize suas informações de perfil
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-lg">UD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Foto do Perfil</h3>
              <p className="text-sm text-muted-foreground">
                JPG, PNG ou GIF. Máximo 2MB.
              </p>
              <Button variant="outline" size="sm">
                Alterar Foto
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome</Label>
              <Input id="firstName" defaultValue="Usuário" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Sobrenome</Label>
              <Input id="lastName" defaultValue="Demo" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="usuario@exemplo.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input id="company" defaultValue="SuperRelatórios Inc." />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Cargo</Label>
            <Input id="role" defaultValue="Gerente de Operações" />
          </div>
          
          <Button onClick={() => handleSave('perfil')} className="card-hover">
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Preferências de Notificação
          </CardTitle>
          <CardDescription>
            Configure como e quando você quer ser notificado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receba atualizações importantes por email
                </p>
              </div>
              <Switch 
                checked={settings.notifications.email}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({
                    ...prev,
                    notifications: { ...prev.notifications, email: checked }
                  }))
                }
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações Push</Label>
                <p className="text-sm text-muted-foreground">
                  Notificações instantâneas no navegador
                </p>
              </div>
              <Switch 
                checked={settings.notifications.push}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({
                    ...prev,
                    notifications: { ...prev.notifications, push: checked }
                  }))
                }
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Relatórios Concluídos</Label>
                <p className="text-sm text-muted-foreground">
                  Quando seus relatórios estiverem prontos
                </p>
              </div>
              <Switch 
                checked={settings.notifications.reports}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({
                    ...prev,
                    notifications: { ...prev.notifications, reports: checked }
                  }))
                }
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing e Dicas</Label>
                <p className="text-sm text-muted-foreground">
                  Novidades, dicas e ofertas especiais
                </p>
              </div>
              <Switch 
                checked={settings.notifications.marketing}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({
                    ...prev,
                    notifications: { ...prev.notifications, marketing: checked }
                  }))
                }
              />
            </div>
          </div>
          
          <Button onClick={() => handleSave('notificações')} className="card-hover">
            Salvar Preferências
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-6">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Aparência e Idioma
          </CardTitle>
          <CardDescription>
            Personalize a interface do SuperRelatórios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Tema</Label>
              <Select value={settings.appearance.theme} onValueChange={(value) => 
                setSettings(prev => ({
                  ...prev,
                  appearance: { ...prev.appearance, theme: value }
                }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Escuro</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="language">Idioma</Label>
              <Select value={settings.appearance.language} onValueChange={(value) => 
                setSettings(prev => ({
                  ...prev,
                  appearance: { ...prev.appearance, language: value }
                }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="es-ES">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button onClick={() => handleSave('aparência')} className="card-hover">
            Salvar Configurações
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Segurança da Conta
          </CardTitle>
          <CardDescription>
            Mantenha sua conta segura
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Alterar Senha</Label>
              <p className="text-sm text-muted-foreground">
                Última alteração: há 3 meses
              </p>
              <Button variant="outline" size="sm">
                Alterar Senha
              </Button>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticação de Dois Fatores</Label>
                <p className="text-sm text-muted-foreground">
                  Adicione uma camada extra de segurança
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={settings.privacy.twoFactor ? "default" : "secondary"}>
                  {settings.privacy.twoFactor ? "Ativo" : "Inativo"}
                </Badge>
                <Switch 
                  checked={settings.privacy.twoFactor}
                  onCheckedChange={(checked) => 
                    setSettings(prev => ({
                      ...prev,
                      privacy: { ...prev.privacy, twoFactor: checked }
                    }))
                  }
                />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label>Sessões Ativas</Label>
              <p className="text-sm text-muted-foreground">
                Gerencie dispositivos conectados à sua conta
              </p>
              <Button variant="outline" size="sm">
                Ver Sessões
              </Button>
            </div>
          </div>
          
          <Button onClick={() => handleSave('segurança')} className="card-hover">
            Salvar Configurações
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderPlan = () => (
    <div className="space-y-6">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Plano e Faturamento
          </CardTitle>
          <CardDescription>
            Gerencie sua assinatura
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground">Plano Profissional</h3>
                <p className="text-sm text-muted-foreground">Ativo desde Janeiro 2024</p>
              </div>
              <Badge className="bg-primary text-primary-foreground">Ativo</Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Relatórios criados este mês</span>
                <span className="font-medium">23 / ilimitado</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Armazenamento usado</span>
                <span className="font-medium">2.3 GB / 100 GB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Próxima cobrança</span>
                <span className="font-medium">15 de Fevereiro</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Alterar Plano
            </Button>
            <Button variant="outline" className="flex-1">
              Ver Faturas
            </Button>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Label className="text-destructive">Zona de Perigo</Label>
            <p className="text-sm text-muted-foreground">
              Cancelar sua assinatura removerá o acesso a recursos premium
            </p>
            <Button variant="destructive" size="sm">
              Cancelar Assinatura
            </Button>
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
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 p-6">
          <div className="sticky top-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <SettingsIcon className="h-5 w-5 text-primary" />
              Configurações
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
                  <section.icon className="h-4 w-4" />
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs opacity-70">{section.description}</div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Section Selector */}
        <div className="lg:hidden w-full p-4">
          <Card className="mb-6">
            <CardContent className="pt-6">
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
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="animate-fade-in">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;