import { useState } from 'react';
import { User, Mail, Building, Briefcase, Camera, Shield, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t('settings.appearance.save_success_title'),
        description: t('settings.profile.save_button'),
      });
    }, 1000);
  };

  return (
    <div className="bg-gradient-subtle min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('profile.title')}</h1>
          <p className="text-muted-foreground mt-2">{t('profile.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Avatar Card */}
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="pt-8 text-center space-y-4">
              <Avatar className="h-32 w-32 mx-auto ring-4 ring-primary/10">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback className="text-3xl bg-primary/5 text-primary">
                  {user?.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h2 className="text-xl font-bold">{user?.user_metadata?.full_name || 'Usuário'}</h2>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <Camera className="h-4 w-4 mr-2" />
                {t('settings.profile.change_photo')}
              </Button>
            </CardContent>
          </Card>

          {/* Details Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t('settings.profile.title')}</CardTitle>
              <CardDescription>{t('profile.subtitle')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    {t('settings.profile.first_name')}
                  </Label>
                  <Input id="firstName" defaultValue={user?.user_metadata?.full_name?.split(' ')[0] || ''} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t('settings.profile.last_name')}</Label>
                  <Input id="lastName" defaultValue={user?.user_metadata?.full_name?.split(' ').slice(1).join(' ') || ''} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {t('settings.profile.email')}
                </Label>
                <Input id="email" type="email" defaultValue={user?.email || ''} disabled />
                <p className="text-xs text-muted-foreground italic">{t('profile.fields.email_hint')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    {t('settings.profile.company')}
                  </Label>
                  <Input id="company" placeholder="Nome da empresa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    {t('settings.profile.role')}
                  </Label>
                  <Input id="role" placeholder="Seu cargo" />
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button className="flex-1" onClick={handleSave} disabled={loading}>
                  {loading ? t('common.processing') : t('common.save')}
                </Button>
                <Button variant="outline" className="flex-1">
                  Reverter Mudanças
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Summary Widget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Card className="hover-scale cursor-pointer bg-muted/30">
             <CardContent className="p-6 flex items-center gap-4">
               <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                 <Shield className="h-5 w-5 text-blue-600" />
               </div>
               <div>
                 <h4 className="font-medium">Segurança da Conta</h4>
                 <p className="text-xs text-muted-foreground text-xs">Proteção em duas etapas está desativada.</p>
               </div>
             </CardContent>
           </Card>
           <Card className="hover-scale cursor-pointer bg-muted/30">
             <CardContent className="p-6 flex items-center gap-4">
               <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                 <Bell className="h-5 w-5 text-amber-600" />
               </div>
               <div>
                 <h4 className="font-medium">Notificações</h4>
                 <p className="text-xs text-muted-foreground">Você tem 4 avisos recentes não lidos.</p>
               </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
