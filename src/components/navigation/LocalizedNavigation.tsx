import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useI18nRouter } from '../../hooks/useI18nRouter';
import { 
  LayoutDashboard, 
  FileText, 
  Plus, 
  Settings, 
  User, 
  Folder,
  Target,
  ListChecks,
  BarChart3,
  Brain,
  TrendingUp,
  PieChart,
  Zap
} from 'lucide-react';

interface LocalizedNavigationProps {
  className?: string;
  isMobile?: boolean;
}

export const LocalizedNavigation: React.FC<LocalizedNavigationProps> = ({ 
  className = '',
  isMobile = false 
}) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { navigateLocalized, currentLanguage } = useI18nRouter();

  // Mapeamento de navegação por idioma
  const navigationMap = {
    'pt-BR': [
      { name: t('nav.overview', { defaultValue: 'Visão Geral' }), href: '/app', icon: LayoutDashboard },
      { name: t('nav.metrics', { defaultValue: 'Indicadores' }), href: '/app/metricas', icon: BarChart3 },
      { name: t('nav.decision_panel', { defaultValue: 'Painel de Decisão' }), href: '/app/decision-panel', icon: Brain },
      { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/app/analytics', icon: PieChart },
      { name: t('nav.consolidated', { defaultValue: 'Consolidado' }), href: '/app/consolidado', icon: TrendingUp },
      { name: t('nav.priorities', { defaultValue: 'Prioridades' }), href: '/app/prioridades', icon: Target },
      { name: t('nav.action_plan', { defaultValue: 'Plano de Ação' }), href: '/app/plano-acao', icon: ListChecks },
      { name: t('nav.reports', { defaultValue: 'Relatórios' }), href: '/app/relatorios', icon: FileText },
      { name: t('nav.data', { defaultValue: 'Meus Dados' }), href: '/app/dados', icon: Folder },
    ],
    'en-US': [
      { name: t('nav.overview', { defaultValue: 'Overview' }), href: '/app', icon: LayoutDashboard },
      { name: t('nav.metrics', { defaultValue: 'Metrics' }), href: '/app/metrics', icon: BarChart3 },
      { name: t('nav.decision_panel', { defaultValue: 'Decision Panel' }), href: '/app/decision-panel', icon: Brain },
      { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/app/analytics', icon: PieChart },
      { name: t('nav.consolidated', { defaultValue: 'Consolidated' }), href: '/app/consolidated', icon: TrendingUp },
      { name: t('nav.priorities', { defaultValue: 'Priorities' }), href: '/app/priorities', icon: Target },
      { name: t('nav.action_plan', { defaultValue: 'Action Plan' }), href: '/app/action-plan', icon: ListChecks },
      { name: t('nav.reports', { defaultValue: 'Reports' }), href: '/app/reports', icon: FileText },
      { name: t('nav.data', { defaultValue: 'My Data' }), href: '/app/folders', icon: Folder },
    ],
    'es-ES': [
      { name: t('nav.overview', { defaultValue: 'Visión General' }), href: '/app', icon: LayoutDashboard },
      { name: t('nav.metrics', { defaultValue: 'Métricas' }), href: '/app/metricas', icon: BarChart3 },
      { name: t('nav.decision_panel', { defaultValue: 'Panel de Decisión' }), href: '/app/panel-decision', icon: Brain },
      { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/app/analytics', icon: PieChart },
      { name: t('nav.consolidated', { defaultValue: 'Consolidado' }), href: '/app/consolidado', icon: TrendingUp },
      { name: t('nav.priorities', { defaultValue: 'Prioridades' }), href: '/app/prioridades', icon: Target },
      { name: t('nav.action_plan', { defaultValue: 'Plan de Acción' }), href: '/app/plan-accion', icon: ListChecks },
      { name: t('nav.reports', { defaultValue: 'Informes' }), href: '/app/informes', icon: FileText },
      { name: t('nav.data', { defaultValue: 'Mis Datos' }), href: '/app/carpetas', icon: Folder },
    ],
  };

  const navigation = navigationMap[currentLanguage as keyof typeof navigationMap] || navigationMap['pt-BR'];

  const isActive = (href: string) => {
    if (href === '/app') {
      return location.pathname === href || location.pathname.startsWith(href + '/');
    }
    return location.pathname === href;
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateLocalized(href);
  };

  if (isMobile) {
    return (
      <nav className={`grid grid-cols-5 gap-1 p-2 ${className}`}>
        {navigation.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="h-4 w-4 mb-1" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className={`space-y-2 ${className}`}>
      {navigation.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default LocalizedNavigation;
