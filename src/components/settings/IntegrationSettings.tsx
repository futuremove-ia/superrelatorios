import { useState } from 'react';
import { Link, Cloud, Key, Save, ExternalLink, Check, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  connected: boolean;
  lastSync?: string;
}

interface APIKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed?: string;
}

const IntegrationSettings = () => {
  const { toast } = useToast();
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: 'google-drive',
      name: 'Google Drive',
      description: 'Conecte seu Google Drive para importar e exportar arquivos',
      icon: 'drive',
      connected: true,
      lastSync: '2 horas atrás'
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      description: 'Sincronize arquivos com seu Dropbox',
      icon: 'dropbox',
      connected: false
    },
    {
      id: 'onedrive',
      name: 'OneDrive',
      description: 'Integre com o Microsoft OneDrive',
      icon: 'onedrive',
      connected: false
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Receba notificações no Slack',
      icon: 'slack',
      connected: false
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      description: 'Notificações e compartilhamento no Teams',
      icon: 'teams',
      connected: false
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Conecte com mais de 5000 apps',
      icon: 'zapier',
      connected: false
    }
  ]);

  const [apiKeys, setApiKeys] = useState<APIKey[]>([
    {
      id: '1',
      name: 'Production Key',
      key: 'sk_live_••••••••••••••••',
      createdAt: '2024-01-15',
      lastUsed: '2 dias atrás'
    },
    {
      id: '2',
      name: 'Development Key',
      key: 'sk_test_••••••••••••••••',
      createdAt: '2024-02-01'
    }
  ]);

  const [newApiKeyName, setNewApiKeyName] = useState('');
  const [showNewKeyField, setShowNewKeyField] = useState(false);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const handleConnect = (id: string) => {
    setIntegrations(prev => prev.map(integration => {
      if (integration.id === id) {
        return {
          ...integration,
          connected: !integration.connected,
          lastSync: !integration.connected ? 'Agora' : undefined
        };
      }
      return integration;
    }));

    const integration = integrations.find(i => i.id === id);
    toast({
      title: integration?.connected ? 'Desconectado' : 'Conectado',
      description: `${integration?.name} foi ${integration?.connected ? 'desconectado' : 'conectado'} com sucesso.`
    });
  };

  const handleGenerateKey = () => {
    if (!newApiKeyName.trim()) {
      toast({
        title: 'Erro',
        description: 'Por favor, informe um nome para a chave API',
        variant: 'destructive'
      });
      return;
    }

    const newKey = 'sk_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setGeneratedKey(newKey);
    
    const newApiKey: APIKey = {
      id: Date.now().toString(),
      name: newApiKeyName,
      key: newKey,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setApiKeys(prev => [...prev, newApiKey]);
    setNewApiKeyName('');
    
    toast({
      title: 'Chave API criada',
      description: 'Guarde esta chave com segurança. Não será exibida novamente.'
    });
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(prev => prev.filter(key => key.id !== id));
    toast({
      title: 'Chave API removida',
      description: 'A chave API foi removida com sucesso.'
    });
  };

  const handleSaveApiKeys = () => {
    toast({
      title: 'Configurações salvas',
      description: 'As configurações de API foram atualizadas.',
    });
  };

  const getIconColor = (icon: string) => {
    const colors: Record<string, string> = {
      drive: 'bg-blue-500',
      dropbox: 'bg-blue-400',
      onedrive: 'bg-blue-600',
      slack: 'bg-purple-500',
      teams: 'bg-indigo-600',
      zapier: 'bg-orange-500'
    };
    return colors[icon] || 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            Conexões
          </CardTitle>
          <CardDescription>
            Gerencie suas integrações com serviços externos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrations.map((integration, index) => (
            <div key={integration.id}>
              {index > 0 && <Separator className="mb-4" />}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${getIconColor(integration.icon)} flex items-center justify-center text-white font-bold text-sm`}>
                    {integration.name.charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Label className="text-base">{integration.name}</Label>
                      {integration.connected && (
                        <Badge variant="default" className="bg-green-500">
                          <Check className="h-3 w-3 mr-1" />
                          Conectado
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                    {integration.lastSync && (
                      <p className="text-xs text-muted-foreground">
                        Última sincronização: {integration.lastSync}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  variant={integration.connected ? "outline" : "default"}
                  onClick={() => handleConnect(integration.id)}
                >
                  {integration.connected ? (
                    <>
                      <X className="h-4 w-4 mr-2" />
                      Desconectar
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Conectar
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            API Keys
          </CardTitle>
          <CardDescription>
            Gerencie as chaves de API para integração via código
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {apiKeys.map((apiKey, index) => (
            <div key={apiKey.id}>
              {index > 0 && <Separator className="mb-4" />}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base">{apiKey.name}</Label>
                  <p className="text-sm text-muted-foreground font-mono">{apiKey.key}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Criada: {apiKey.createdAt}</span>
                    {apiKey.lastUsed && <span>Último uso: {apiKey.lastUsed}</span>}
                  </div>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteKey(apiKey.id)}
                >
                  Remover
                </Button>
              </div>
            </div>
          ))}

          {generatedKey && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 text-green-800 mb-2">
                <Check className="h-4 w-4" />
                <Label className="text-base">Nova chave gerada</Label>
              </div>
              <p className="text-sm text-green-700 font-mono mb-2">{generatedKey}</p>
              <p className="text-xs text-green-600">
                Copie esta chave agora. Por segurança, não será exibida novamente.
              </p>
              <Button
                size="sm"
                className="mt-2"
                onClick={() => {
                  navigator.clipboard.writeText(generatedKey);
                  toast({
                    title: 'Copiado',
                    description: 'Chave copiada para a área de transferência'
                  });
                }}
              >
                Copiar chave
              </Button>
            </div>
          )}

          {showNewKeyField ? (
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <Label>Nome da chave</Label>
                <Input
                  placeholder="ex: Production Key"
                  value={newApiKeyName}
                  onChange={(e) => setNewApiKeyName(e.target.value)}
                />
              </div>
              <Button onClick={handleGenerateKey}>Gerar</Button>
              <Button variant="outline" onClick={() => {
                setShowNewKeyField(false);
                setNewApiKeyName('');
              }}>
                Cancelar
              </Button>
            </div>
          ) : (
            <Button variant="outline" onClick={() => setShowNewKeyField(true)}>
              + Criar nova chave API
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSaveApiKeys} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Salvar configurações
        </Button>
      </div>
    </div>
  );
};

export default IntegrationSettings;
