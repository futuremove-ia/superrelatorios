import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Plus, 
  Settings, 
  User, 
  Menu,
  Bell,
  Search,
  Folder,
  LogOut,
  Target,
  ListChecks,
  Database,
  BarChart3,
  Brain,
  TrendingUp,
  PieChart,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import BrandName from '@/components/BrandName';
import LogoIcon from '@/components/LogoIcon';
import { useAuth } from '@/contexts/AuthContext';
import DemoBanner from '@/components/DemoBanner';
import { useTranslation } from 'react-i18next';


const AppLayout = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const navigation = [
    { name: t('nav.overview', { defaultValue: 'Visão Geral' }), href: '/app', icon: LayoutDashboard },
    { name: t('nav.metrics', { defaultValue: 'Indicadores' }), href: '/app/metrics', icon: BarChart3 },
    { name: t('nav.decision_panel', { defaultValue: 'Painel de Decisão' }), href: '/app/decision-panel', icon: Brain },
    { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/app/analytics', icon: PieChart },
    { name: t('nav.consolidated', { defaultValue: 'Consolidado' }), href: '/app/consolidated', icon: TrendingUp },
    { name: t('nav.priorities', { defaultValue: 'Prioridades' }), href: '/app/prioridades', icon: Target },
    { name: t('nav.action_plan', { defaultValue: 'Plano de Ação' }), href: '/app/action-plan', icon: ListChecks },
    { name: t('nav.reports', { defaultValue: 'Relatórios' }), href: '/app/reports', icon: FileText },
    { name: t('nav.data', { defaultValue: 'Meus Dados' }), href: '/app/folders', icon: Database },
  ];

  const mobileNav = [
    { name: t('nav.overview', { defaultValue: 'Visão Geral' }), href: '/app', icon: LayoutDashboard },
    { name: t('nav.metrics', { defaultValue: 'Indicadores' }), href: '/app/metrics', icon: BarChart3 },
    { name: t('nav.decision_panel', { defaultValue: 'Painel de Decisão' }), href: '/app/decision-panel', icon: Brain },
    { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/app/analytics', icon: PieChart },
    { name: t('nav.consolidated', { defaultValue: 'Consolidado' }), href: '/app/consolidated', icon: TrendingUp },
    { name: t('nav.priorities', { defaultValue: 'Prioridades' }), href: '/app/prioridades', icon: Target },
    { name: t('nav.action_plan', { defaultValue: 'Plano' }), href: '/app/action-plan', icon: ListChecks },
    { name: t('nav.reports', { defaultValue: 'Relatórios' }), href: '/app/reports', icon: FileText },
    { name: t('nav.data', { defaultValue: 'Dados' }), href: '/app/folders', icon: Database },
  ];


  const isActive = (href: string) => {
    if (href === '/app') {
      return location.pathname === '/app';
    }
    return location.pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-6 py-4 border-b">
        <LogoIcon size="sm" />
        <BrandName variant="header" />
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2" aria-label={t('nav.main_navigation')}>
        {navigation.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }
              `}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <div className="space-y-2">
          <Link
            to="/app/configuracoes"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Settings className="h-5 w-5" />
            {t('nav.settings')}
          </Link>
        </div>

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-gradient-subtle shadow-lg">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
          <div className="flex h-14 sm:h-16 items-center gap-4 px-4 sm:px-6">
            {/* Mobile Menu Button */}
            {/* Mobile Menu Button - Reuse the toggle since Sheet is already declared via SidebarContent for simplicity or keep one central Sheet */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden touch-target" 
              onClick={() => setSidebarOpen(true)}
              aria-label={t('nav.open_menu')}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search */}
            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={t('search.placeholder')}
                  className="pl-10 bg-muted/50 border-muted focus:border-primary transition-colors"
                />
              </div>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="relative hover-scale" aria-label={t('nav.notifications')}>
                  <Bell className="h-5 w-5" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 rounded-full" aria-label={t('nav.user_menu')}>
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>
                          {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user?.user_metadata?.full_name || 'Usuário'}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/app/perfil">
                        <User className="mr-2 h-4 w-4" />
                        {t('nav.profile')}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/app/configuracoes">
                        <Settings className="mr-2 h-4 w-4" />
                        {t('nav.settings')}
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => signOut()} 
                      className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t('nav.logout')}
                    </DropdownMenuItem>

                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)] pb-20 lg:pb-0 animate-fade-in">
          <DemoBanner />
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50">
          <div className="flex items-center justify-around h-14">
            {mobileNav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${item.name === 'Novo' ? 'text-primary' : ''}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AppLayout;
