import React from 'react';
import { cn } from '@/lib/utils';
import { Domain, DomainConfig } from '@/types/business';
import { 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Target, 
  Megaphone 
} from 'lucide-react';

// Configuração dos domínios
export const DOMAINS: Record<Domain, DomainConfig> = {
  finance: {
    id: 'finance',
    label: 'Financeiro',
    labelEn: 'Finance',
    labelEs: 'Finanzas',
    color: 'emerald',
    icon: 'DollarSign'
  },
  commercial: {
    id: 'commercial',
    label: 'Comercial',
    labelEn: 'Commercial',
    labelEs: 'Comercial',
    color: 'blue',
    icon: 'TrendingUp'
  },
  operations: {
    id: 'operations',
    label: 'Operacional',
    labelEn: 'Operations',
    labelEs: 'Operaciones',
    color: 'amber',
    icon: 'Settings'
  },
  strategy: {
    id: 'strategy',
    label: 'Estratégia',
    labelEn: 'Strategy',
    labelEs: 'Estrategia',
    color: 'purple',
    icon: 'Target'
  },
  marketing: {
    id: 'marketing',
    label: 'Marketing',
    labelEn: 'Marketing',
    labelEs: 'Marketing',
    color: 'pink',
    icon: 'Megaphone'
  }
};

// Mapeamento de ícones
const ICON_MAP = {
  DollarSign,
  TrendingUp,
  Settings,
  Target,
  Megaphone
};

interface DomainTagProps {
  domain: Domain;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  showIcon?: boolean;
  className?: string;
}

export const DomainTag: React.FC<DomainTagProps> = ({ 
  domain, 
  size = 'md',
  variant = 'default',
  showIcon = true,
  className
}) => {
  const config = DOMAINS[domain];
  const Icon = ICON_MAP[config.icon as keyof typeof ICON_MAP];

  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5 gap-1',
    md: 'text-xs px-2 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  };

  const variantClasses = {
    default: `bg-${config.color}-50 text-${config.color}-700 border-${config.color}-200`,
    outline: `bg-transparent text-${config.color}-700 border-${config.color}-300`,
    filled: `bg-${config.color}-500 text-white border-transparent`
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4'
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center font-medium border rounded-full transition-colors',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {showIcon && Icon && <Icon className={iconSizes[size]} />}
      <span>{config.label}</span>
    </span>
  );
};

// Componente para filtro de domínios
interface DomainFilterProps {
  selected: Domain[];
  onChange: (domains: Domain[]) => void;
  className?: string;
}

export const DomainFilter: React.FC<DomainFilterProps> = ({ 
  selected, 
  onChange,
  className 
}) => {
  const domains = Object.keys(DOMAINS) as Domain[];

  const toggleDomain = (domain: Domain) => {
    if (selected.includes(domain)) {
      onChange(selected.filter(d => d !== domain));
    } else {
      onChange([...selected, domain]);
    }
  };

  const selectAll = () => {
    onChange(domains);
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <span className="text-sm text-muted-foreground mr-2">Filtrar por:</span>
      
      {domains.map((domain) => (
        <button
          key={domain}
          onClick={() => toggleDomain(domain)}
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium',
            'transition-all duration-200 border',
            selected.includes(domain)
              ? `bg-${DOMAINS[domain].color}-500 text-white border-${DOMAINS[domain].color}-500`
              : `bg-white text-${DOMAINS[domain].color}-700 border-${DOMAINS[domain].color}-200 hover:bg-${DOMAINS[domain].color}-50`
          )}
        >
          {(() => {
            const Icon = ICON_MAP[DOMAINS[domain].icon as keyof typeof ICON_MAP];
            return Icon ? <Icon className="h-4 w-4" /> : null;
          })()}
          {DOMAINS[domain].label}
        </button>
      ))}
      
      <div className="ml-auto flex gap-2">
        <button 
          onClick={selectAll}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Todos
        </button>
        <span className="text-muted-foreground">|</span>
        <button 
          onClick={clearAll}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};

export default DomainTag;
