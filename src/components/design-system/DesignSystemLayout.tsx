import React, { useState } from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Palette,
  Type,
  Layout,
  Component,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Eye,
  Grid3x3,
  Layers,
  Monitor,
  Accessibility,
  ArrowLeft,
  Home
} from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: 'Visão Geral',
    href: '/design-system',
    icon: Home,
  },
  {
    title: 'Princípios',
    href: '/design-system/principles',
    icon: Sparkles,
  },
  {
    title: 'Identidade Visual',
    href: '/design-system/identity',
    icon: Eye,
    children: [
      { title: 'Logo', href: '/design-system/identity/logo', icon: Layers },
      { title: 'Cores', href: '/design-system/identity/colors', icon: Palette },
      { title: 'Tipografia', href: '/design-system/identity/typography', icon: Type },
    ],
  },
  {
    title: 'Componentes',
    href: '/design-system/components',
    icon: Component,
    children: [
      { title: 'UI Components', href: '/design-system/components/ui', icon: Layers },
      { title: 'Layout System', href: '/design-system/components/layout', icon: Grid3x3 },
    ],
  },
  {
    title: 'Diretrizes',
    href: '/design-system/guidelines',
    icon: BookOpen,
    children: [
      { title: 'Hierarquia Visual', href: '/design-system/guidelines/hierarchy', icon: Layout },
      { title: 'Responsivo', href: '/design-system/guidelines/responsive', icon: Monitor },
      { title: 'Acessibilidade', href: '/design-system/guidelines/a11y', icon: Accessibility },
    ],
  },
  {
    title: 'Melhores Práticas',
    href: '/design-system/best-practices',
    icon: CheckCircle2,
  },
];

function NavItemComponent({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const location = useLocation();
  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className={cn("space-y-1", depth > 0 && "ml-4")}>
      <NavLink
        to={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <item.icon className="h-4 w-4" />
        <span>{item.title}</span>
      </NavLink>
      {hasChildren && (
        <div className="space-y-1">
          {item.children?.map((child) => (
            <NavItemComponent key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function Sidebar() {
  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Palette className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold">Design System</span>
        </div>
      </div>
      <ScrollArea className="flex-1 py-4 px-3">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItemComponent key={item.href} item={item} />
          ))}
        </nav>
        <div className="mt-8 pt-4 border-t">
          <NavLink
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao App</span>
          </NavLink>
        </div>
      </ScrollArea>
    </div>
  );
}

function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export function DesignSystemLayout() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[280px] fixed inset-y-0 left-0 z-30 bg-background">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-[280px] min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden flex h-16 items-center gap-4 border-b bg-background px-4 sticky top-0 z-20">
          <MobileSidebar />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold">Design System</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DesignSystemLayout;
