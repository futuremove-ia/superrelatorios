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
      { name: t('nav.overview', { defaultValue: 'Visão Geral' }), href: '/pt-BR/app', icon: LayoutDashboard },
      { name: t('nav.metrics', { defaultValue: 'Indicadores' }), href: '/pt-BR/app/metricas', icon: BarChart3 },
      { name: t('nav.decision_panel', { defaultValue: 'Painel de Decisão' }), href: '/pt-BR/app/painel-decisao', icon: Brain },
      { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/pt-BR/app/analytics', icon: PieChart },
      { name: t('nav.consolidated', { defaultValue: 'Consolidado' }), href: '/pt-BR/app/consolidado', icon: TrendingUp },
      { name: t('nav.priorities', { defaultValue: 'Prioridades' }), href: '/pt-BR/app/prioridades', icon: Target },
      { name: t('nav.action_plan', { defaultValue: 'Plano de Ação' }), href: '/pt-BR/app/plano-acao', icon: ListChecks },
      { name: t('nav.reports', { defaultValue: 'Relatórios' }), href: '/pt-BR/app/relatorios', icon: FileText },
      { name: t('nav.data', { defaultValue: 'Meus Dados' }), href: '/pt-BR/app/dados', icon: Folder },
    ],
    'en-US': [
      { name: t('nav.overview', { defaultValue: 'Overview' }), href: '/en-US/app', icon: LayoutDashboard },
      { name: t('nav.metrics', { defaultValue: 'Metrics' }), href: '/en-US/app/metrics', icon: BarChart3 },
      { name: t('nav.decision_panel', { defaultValue: 'Decision Panel' }), href: '/en-US/app/decision-panel', icon: Brain },
      { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/en-US/app/analytics', icon: PieChart },
      { name: t('nav.consolidated', { defaultValue: 'Consolidated' }), href: '/en-US/app/consolidated', icon: TrendingUp },
      { name: t('nav.priorities', { defaultValue: 'Priorities' }), href: '/en-US/app/priorities', icon: Target },
      { name: t('nav.action_plan', { defaultValue: 'Action Plan' }), href: '/en-US/app/action-plan', icon: ListChecks },
      { name: t('nav.reports', { defaultValue: 'Reports' }), href: '/en-US/app/reports', icon: FileText },
      { name: t('nav.data', { defaultValue: 'My Data' }), href: '/en-US/app/folders', icon: Folder },
    ],
    'es-ES': [
      { name: t('nav.overview', { defaultValue: 'Visión General' }), href: '/es-ES/app', icon: LayoutDashboard },
      { name: t('nav.metrics', { defaultValue: 'Métricas' }), href: '/es-ES/app/metricas', icon: BarChart3 },
      { name: t('nav.decision_panel', { defaultValue: 'Panel de Decisión' }), href: '/es-ES/app/panel-decision', icon: Brain },
      { name: t('nav.analytics', { defaultValue: 'Analytics' }), href: '/es-ES/app/analytics', icon: PieChart },
      { name: t('nav.consolidated', { defaultValue: 'Consolidado' }), href: '/es-ES/app/consolidado', icon: TrendingUp },
      { name: t('nav.priorities', { defaultValue: 'Prioridades' }), href: '/es-ES/app/prioridades', icon: Target },
      { name: t('nav.action_plan', { defaultValue: 'Plan de Acción' }), href: '/es-ES/app/plan-accion', icon: ListChecks },
      { name: t('nav.reports', { defaultValue: 'Informes' }), href: '/es-ES/app/informes', icon: FileText },
      { name: t('nav.data', { defaultValue: 'Mis Datos' }), href: '/es-ES/app/carpetas', icon: Folder },
    ],
  };

  const navigation = navigationMap[currentLanguage as keyof typeof navigationMap] || navigationMap['pt-BR'];

  const isActive = (href: string) => {
    if (href.endsWith('/app')) {
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
