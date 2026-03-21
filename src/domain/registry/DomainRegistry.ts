import { DomainRegistry, DomainMetadata } from '../core/BusinessDomain';

// Register all domains with their metadata
export function initializeDomains(): void {
  // Core Domains
  DomainRegistry.register({
    type: 'financial',
    priority: 'core',
    name: 'Financeiro e Contábil',
    description: 'Gestão financeira, contábil e indicadores econômicos',
    version: '1.0.0',
  });

  DomainRegistry.register({
    type: 'commercial',
    priority: 'core',
    name: 'Comercial e Marketing',
    description: 'Vendas, marketing, aquisição e retenção de clientes',
    version: '1.0.0',
  });

  DomainRegistry.register({
    type: 'operations',
    priority: 'core',
    name: 'Operações e Produção',
    description: 'Processos operacionais, produção e eficiência',
    version: '1.0.0',
  });

  DomainRegistry.register({
    type: 'strategy',
    priority: 'core',
    name: 'Gestão e Estratégia',
    description: 'Planejamento estratégico, OKRs e execução',
    version: '1.0.0',
  });

  // Support Domains
  DomainRegistry.register({
    type: 'human-resources',
    priority: 'support',
    name: 'Recursos Humanos',
    description: 'Gestão de pessoas, produtividade e cultura',
    version: '1.0.0',
  });

  DomainRegistry.register({
    type: 'customer-support',
    priority: 'support',
    name: 'Atendimento e Suporte',
    description: 'Suporte ao cliente, satisfação e experiência',
    version: '1.0.0',
  });

  // Context Domains
  DomainRegistry.register({
    type: 'logistics',
    priority: 'context',
    name: 'Logística e Entrega',
    description: 'Gestão de logística, entregas e distribuição',
    version: '1.0.0',
  });
}

// Initialize domains when module is loaded
initializeDomains();
