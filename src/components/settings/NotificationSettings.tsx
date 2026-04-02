import { useState } from 'react';
import { Bell, Mail, Smartphone, MessageSquare, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface NotificationPreferences {
  email: {
    enabled: boolean;
    frequency: string;
    reports: boolean;
    metrics: boolean;
    actions: boolean;
    marketing: boolean;
  };
  push: {
    enabled: boolean;
    reports: boolean;
    alerts: boolean;
  };
  inApp: {
    enabled: boolean;
    reports: boolean;
    actions: boolean;
    comments: boolean;
  };
}

const NotificationSettings = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    email: {
      enabled: true,
      frequency: 'daily',
      reports: true,
      metrics: true,
      actions: true,
      marketing: false
    },
    push: {
      enabled: true,
      reports: true,
      alerts: true
    },
    inApp: {
      enabled: true,
      reports: true,
      actions: true,
      comments: true
    }
  });

  const handleSave = () => {
    toast({
      title: 'Preferências salvas',
      description: 'Suas preferências de notificação foram atualizadas.',
    });
  };

  const updatePreference = (category: keyof NotificationPreferences, key: string, value: boolean | string) => {
    setPreferences(prev => ({
      ...prev,
      [category]: { ...prev[category], [key]: value }
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Notificações por Email
          </CardTitle>
          <CardDescription>
            Configure como você recebe emails do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Ativar emails</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações importantes por email
              </p>
            </div>
            <Switch
              checked={preferences.email.enabled}
              onCheckedChange={(checked) => updatePreference('email', 'enabled', checked)}
            />
          </div>

          {preferences.email.enabled && (
            <>
              <Separator />
              
              <div className="space-y-2">
                <Label>Frequência</Label>
                <Select
                  value={preferences.email.frequency}
                  onValueChange={(value) => updatePreference('email', 'frequency', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Tempo real</SelectItem>
                    <SelectItem value="daily">Diário</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="never">Nunca</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label className="text-base">Tipos de notificação</Label>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Relatórios</Label>
                    <p className="text-sm text-muted-foreground">
                      Quando um relatório for criado ou compartilhado
                    </p>
                  </div>
                  <Switch
                    checked={preferences.email.reports}
                    onCheckedChange={(checked) => updatePreference('email', 'reports', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Métricas</Label>
                    <p className="text-sm text-muted-foreground">
                      Alertas de métricas e metas
                    </p>
                  </div>
                  <Switch
                    checked={preferences.email.metrics}
                    onCheckedChange={(checked) => updatePreference('email', 'metrics', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Ações</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificações sobre ações assignadas
                    </p>
                  </div>
                  <Switch
                    checked={preferences.email.actions}
                    onCheckedChange={(checked) => updatePreference('email', 'actions', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing</Label>
                    <p className="text-sm text-muted-foreground">
                      Novidades e atualizações do produto
                    </p>
                  </div>
                  <Switch
                    checked={preferences.email.marketing}
                    onCheckedChange={(checked) => updatePreference('email', 'marketing', checked)}
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Notificações Push
          </CardTitle>
          <CardDescription>
            Notificações no seu dispositivo móvel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Ativar push</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações push no seu dispositivo
              </p>
            </div>
            <Switch
              checked={preferences.push.enabled}
              onCheckedChange={(checked) => updatePreference('push', 'enabled', checked)}
            />
          </div>

          {preferences.push.enabled && (
            <>
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Relatórios</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificações sobre relatórios
                    </p>
                  </div>
                  <Switch
                    checked={preferences.push.reports}
                    onCheckedChange={(checked) => updatePreference('push', 'reports', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Alertas</Label>
                    <p className="text-sm text-muted-foreground">
                      Alertas importantes e urgências
                    </p>
                  </div>
                  <Switch
                    checked={preferences.push.alerts}
                    onCheckedChange={(checked) => updatePreference('push', 'alerts', checked)}
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notificações no Aplicativo
          </CardTitle>
          <CardDescription>
            Configure notificações dentro do aplicativo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Ativar notificações in-app</Label>
              <p className="text-sm text-muted-foreground">
                Mostrar notificações no painel
              </p>
            </div>
            <Switch
              checked={preferences.inApp.enabled}
              onCheckedChange={(checked) => updatePreference('inApp', 'enabled', checked)}
            />
          </div>

          {preferences.inApp.enabled && (
            <>
              <Separator />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Relatórios</Label>
                    <p className="text-sm text-muted-foreground">
                      Novidade sobre relatórios
                    </p>
                  </div>
                  <Switch
                    checked={preferences.inApp.reports}
                    onCheckedChange={(checked) => updatePreference('inApp', 'reports', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Ações</Label>
                    <p className="text-sm text-muted-foreground">
                      Atualizações sobre ações
                    </p>
                  </div>
                  <Switch
                    checked={preferences.inApp.actions}
                    onCheckedChange={(checked) => updatePreference('inApp', 'actions', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Comentários</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificações de comentários
                    </p>
                  </div>
                  <Switch
                    checked={preferences.inApp.comments}
                    onCheckedChange={(checked) => updatePreference('inApp', 'comments', checked)}
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Salvar preferências
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettings;
