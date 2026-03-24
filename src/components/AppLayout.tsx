import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
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
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import BrandName from "@/components/BrandName";
import LogoIcon from "@/components/LogoIcon";
import { useAuth } from "@/contexts/AuthContext";
import {
  LocalizedNavigation,
  LanguageSwitcher,
  LocalizedBreadcrumbs,
} from "./navigation";
import { I18nSEO } from "./SEO/I18nSEO";
import DemoModeBanner from "@/components/onboarding/DemoModeBanner";
import { useTranslation } from "react-i18next";
import { useI18nRouter } from "@/hooks/useI18nRouter";

const AppLayout = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentLanguage } = useI18nRouter();

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-6 py-4 border-b">
        <LogoIcon size="sm" />
        <BrandName variant="header" />
      </div>

      <nav
        className="flex-1 px-4 py-6 space-y-2"
        aria-label={t("nav.main_navigation")}
      >
        <LocalizedNavigation className="space-y-2" />
      </nav>

      <div className="border-t p-4">
        <div className="space-y-2">
          <Link
            to={`/${currentLanguage}/app/configuracoes`}
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Settings className="h-5 w-5" />
            {t("nav.settings")}
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
              aria-label={t("nav.open_menu")}
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Search */}
            <div className="flex-1 max-w-md hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={t("search.placeholder")}
                  className="pl-10 bg-muted/50 border-muted focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center gap-2">
                <LanguageSwitcher
                  variant="ghost"
                  size="sm"
                  className="relative hover-scale"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative hover-scale"
                  aria-label={t("nav.notifications")}
                >
                  <Bell className="h-5 w-5" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-9 w-9 rounded-full"
                      aria-label={t("nav.user_menu")}
                    >
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>
                          {user?.email?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">
                          {user?.user_metadata?.full_name || "Usuário"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to={`/${currentLanguage}/app/perfil`}>
                        <User className="mr-2 h-4 w-4" />
                        {t("nav.profile")}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`/${currentLanguage}/app/configuracoes`}>
                        <Settings className="mr-2 h-4 w-4" />
                        {t("nav.settings")}
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => signOut()}
                      className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t("nav.logout")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)] pb-20 lg:pb-0 animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="mb-6">
              <LocalizedBreadcrumbs />
            </div>
          </div>
          <DemoModeBanner />
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50">
          <LocalizedNavigation isMobile={true} />
        </nav>
      </div>
    </div>
  );
};

export default AppLayout;
