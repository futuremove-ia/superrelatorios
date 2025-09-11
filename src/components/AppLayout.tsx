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
  Folder
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import BrandName from '@/components/BrandName';
import LogoIcon from '@/components/LogoIcon';

const AppLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
    { name: 'Relatórios', href: '/app/relatorios', icon: FileText },
    { name: 'Pastas', href: '/app/pastas', icon: Folder },
    { name: 'Novo Relatório', href: '/app/novo-relatorio', icon: Plus },
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
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
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
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Settings className="h-5 w-5" />
            Configurações
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
          <div className="flex h-16 items-center gap-4 px-4 sm:px-6">
            {/* Mobile Menu Button */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            </Sheet>

            {/* Search */}
            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar relatórios..."
                  className="pl-10 bg-muted/50 border-muted focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Mobile Search */}
              <Button variant="ghost" size="sm" className="sm:hidden">
                <Search className="h-5 w-5" />
              </Button>
              
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative hover-scale">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs text-destructive-foreground flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">Usuário Demo</p>
                      <p className="text-xs text-muted-foreground">usuario@exemplo.com</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/app/perfil">
                      <User className="mr-2 h-4 w-4" />
                      Perfil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/app/configuracoes">
                      <Settings className="mr-2 h-4 w-4" />
                      Configurações
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/">
                      Sair
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)] animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;