import React from 'react';
import { cn } from '@/lib/utils';
import { Lever, LeverType } from '@/types/business';
import { 
  DollarSign, 
  Package, 
  Scale, 
  Clock, 
  Award, 
  Settings 
} from 'lucide-react';

// Configuração das alavancas
export const LEVER_CONFIG: Record<LeverType, { 
  label: string; 
  color: string; 
  icon: React.ElementType;
  description: string;
}> = {
  price: {
    label: 'Preço',
    color: 'rose',
    icon: DollarSign,
    description: 'Ponto de pressão no valor cobrado'
  },
  cost: {
    label: 'Custo',
    color: 'orange',
    icon: Package,
    description: 'Ponto de pressão nos gastos operacionais'
  },
  volume: {
    label: 'Volume',
    color: 'blue',
    icon: Scale,
    description: 'Ponto de pressão na quantidade vendida'
  },
  time: {
    label: 'Prazo',
    color: 'amber',
    icon: Clock,
    description: 'Ponto de pressão no tempo de entrega'
  },
  quality: {
    label: 'Qualidade',
    color: 'purple',
    icon: Award,
    description: 'Ponto de pressão no padrão do produto'
  },
  process: {
    label: 'Processo',
    color: 'slate',
    icon: Settings,
    description: 'Ponto de pressão no fluxo operacional'
  }
};

interface LeverTagProps {
  lever: LeverType;
  showImpact?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  className?: string;
}

export const LeverTag: React.FC<LeverTagProps> = ({ 
  lever, 
  showImpact = true,
  size = 'md',
  variant = 'default',
  className
}) => {
  const config = LEVER_CONFIG[lever];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  };

  const variantClasses = {
    default: `bg-${config.color}-100 text-${config.color}-800 border-${config.color}-200`,
    outline: `bg-transparent text-${config.color}-700 border-${config.color}-300`,
    filled: `bg-${config.color}-500 text-white border-transparent`
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4'
  };

  const impactConfig = {
    high: { label: 'Alto Impacto', color: 'text-red-600', dot: 'bg-red-500' },
    medium: { label: 'Médio Impacto', color: 'text-amber-600', dot: 'bg-amber-500' },
    low: { label: 'Baixo Impacto', color: 'text-blue-600', dot: 'bg-blue-500' }
  };

  return (
    <span 
      className={cn(
        'inline-flex items-center font-medium border rounded-md transition-colors',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      title={config.description}
    >
      <Icon className={iconSizes[size]} />
      <span className="font-semibold">#{config.label}</span>
      {showImpact && (
        <span className={cn('ml-1 text-[10px] opacity-75', impactConfig[config.color as keyof typeof impactConfig]?.color || 'text-muted-foreground')}>
          ●
        </span>
      )}
    </span>
  );
};

// Componente para mostrar múltiplas alavancas
interface LeverGroupProps {
  levers: Lever[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LeverGroup: React.FC<LeverGroupProps> = ({ 
  levers, 
  size = 'md',
  className 
}) => {
  if (!levers || levers.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <span className="text-xs text-muted-foreground mr-1">Alavancas:</span>
      {levers.map((lever, index) => (
        <LeverTag 
          key={`${lever.type}-${index}`}
          lever={lever.type}
          size={size}
          showImpact={true}
        />
      ))}
    </div>
  );
};

export default LeverTag;
