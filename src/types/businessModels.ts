export interface BusinessModel {
  id: string;
  code: string;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  example: string;
  examples: string[];
  relevantKPIs: string[];
  kpisWithDescriptions: Record<string, KPIDescription>;
}

export interface KPIDescription {
  code: string;
  name: string;
  explanation: string;
  whatIsIt: string;
  whyItMatters: string;
  howToImprove: string;
  formula?: string;
}

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    id: "b2b",
    code: "B2B",
    label: "Vende para Empresas",
    labelEn: "Business to Business",
    description: "Sua empresa vende produtos ou serviços para outras empresas.",
    descriptionEn:
      "Your company sells products or services to other companies.",
    example:
      "Uma fábrica vende para lojas. Uma agência vende para outras empresas.",
    examples: [
      "Fornecedor de insumos para indústrias",
      "Agência de marketing para empresas",
      "Fabricante que vende para distribuidores",
      "Empresa de software para outras empresas",
      "Consultoria empresarial",
    ],
    relevantKPIs: [
      "CAC",
      "LTV",
      "WIN_RATE",
      "SALES_CYCLE",
      "MRR",
      "LEAD_VELOCITY",
      "PIPELINE",
      "ARPU",
    ],
    kpisWithDescriptions: {
      CAC: {
        code: "CAC",
        name: "Custo de Aquisição de Cliente",
        explanation:
          "Quanto você gasta para ganhar um novo cliente empresarial",
        whatIsIt:
          "Soma de todos os custos de vendas e marketing dividida pelo número de novos clientes conquistados",
        whyItMatters:
          "Se o CAC for maior que o LTV, você está perdendo dinheiro a cada cliente",
        howToImprove:
          "Automação de marketing,Inbound,referências,otimizar processo de vendas",
        formula: "(Despesas de Vendas + Marketing) / Novos Clientes",
      },
      LTV: {
        code: "LTV",
        name: "Valor do Tempo de Vida",
        explanation:
          "Receita total que um cliente gera durante todo o tempo que fica com você",
        whatIsIt:
          "Ticket médio × frequência de compra × tempo de vida do cliente",
        whyItMatters:
          "Clientes B2B geram mais receita por mais tempo, mas têm ciclos longos",
        howToImprove:
          "Upsell,cross-sell,contratos de longo prazo,excelente suporte",
        formula: "Ticket Médio × Compras/Ano × Anos como Cliente",
      },
      WIN_RATE: {
        code: "WIN_RATE",
        name: "Taxa de Fechamento",
        explanation: "Quantas propostas viram clientes efetivamente",
        whatIsIt: "Percentual de oportunidades convertidas em clientes",
        whyItMatters: "Mostra a eficácia do seu processo de vendas",
        howToImprove:
          "Qualificação melhor,propostas personalizadas,follow-up consistente",
        formula: "(Clientes Fechados / Propostas Enviadas) × 100",
      },
      SALES_CYCLE: {
        code: "SALES_CYCLE",
        name: "Ciclo de Vendas",
        explanation: "Tempo médio desde o primeiro contato até o fechamento",
        whatIsIt: "Dias entre primeiro contato e contrato assinado",
        whyItMatters:
          "Ciclos longos afetam o fluxo de caixa e precisam de pipeline maior",
        howToImprove:
          "Qualificação prévia,proppostas rápidas,objeções resolvidas",
        formula: "Média de dias entre lead qualificado e fechamento",
      },
    },
  },
  {
    id: "b2c",
    code: "B2C",
    label: "Vende para Pessoas",
    labelEn: "Business to Consumer",
    description:
      "Sua empresa vende produtos ou serviços diretamente para consumidores finais.",
    descriptionEn:
      "Your company sells products or services directly to end consumers.",
    example: "Uma loja de roupas. Um restaurante. Um salão de beleza.",
    examples: [
      "Loja de roupas ou acessórios",
      "Restaurante ou lanchonete",
      "Salão de beleza ou estética",
      "E-commerce de produtos",
      "Academia ou studio de fitness",
    ],
    relevantKPIs: [
      "AOV",
      "CONVERSION",
      "FOOT_TRAFFIC",
      "REPEAT_PURCHASE",
      "NPS",
      "BASKET_SIZE",
      "STORE_TRAFFIC",
      "GMV",
    ],
    kpisWithDescriptions: {
      AOV: {
        code: "AOV",
        name: "Ticket Médio",
        explanation: "Valor médio gasto por cliente em cada compra",
        whatIsIt: "Receita total dividida pelo número de transações",
        whyItMatters: "Ticket maior = menos custo por transação e mais receita",
        howToImprove: "Bundles,promoções por quantidade,sugestão de produtos",
        formula: "Receita Total / Número de Transações",
      },
      CONVERSION: {
        code: "CONVERSION",
        name: "Taxa de Conversão",
        explanation: "Quantos visitantes viram clientes",
        whatIsIt: "Percentual de pessoas que compram após visitar",
        whyItMatters:
          "Conversão alta significa produto atrativo e boa experiência",
        howToImprove: "UX melhor,prova social,urgência,produtos relevantes",
        formula: "(Clientes / Visitantes) × 100",
      },
      FOOT_TRAFFIC: {
        code: "FOOT_TRAFFIC",
        name: "Movimentação",
        explanation: "Quantas pessoas passam pela sua loja",
        whatIsIt: "Contagem de visitantes no período",
        whyItMatters: "Mais movimento = mais chances de venda",
        howToImprove: "Vitrine atraente,promoções,localização,marketing local",
        formula: "Total de visitantes no período",
      },
      REPEAT_PURCHASE: {
        code: "REPEAT_PURCHASE",
        name: "Taxa de Recompra",
        explanation: "Clientes que voltaram a comprar",
        whatIsIt: "Percentual de clientes que compram mais de uma vez",
        whyItMatters:
          "Clientes recorrentes são mais baratos de manter e geram mais receita",
        howToImprove:
          "Programa de fidelidade,excelente produto,atendimento,comunicação",
        formula: "(Clientes com 2+ compras / Total Clientes) × 100",
      },
      NPS: {
        code: "NPS",
        name: "Net Promoter Score",
        explanation: "O quanto seus clientes recomendam você",
        whatIsIt: "Nota de 0 a 10 sobre likelihood de recomendar",
        whyItMatters: "Recomendação é o marketing mais efetivo",
        howToImprove:
          "Suporte excelente,entregar além do esperado,resolver problemas rápido",
        formula: "% Promotores (9-10) - % Detratores (0-6)",
      },
    },
  },
  {
    id: "b2b2c",
    code: "B2B2C",
    label: "Vende para Empresas que Vendem para Pessoas",
    labelEn: "Business to Business to Consumer",
    description:
      "Sua empresa fornece para negócios que vendem ao consumidor final.",
    descriptionEn:
      "Your company supplies to businesses that sell to end consumers.",
    example: "Uma fábrica que vende para varejistas. Um atacadista.",
    examples: [
      "Fabricante que vende para lojas",
      "Atacadista para varejo",
      "Fornecedor para redes de loja",
      "Distribuidor para pequenos varejistas",
      "Fabricante para marketplaces",
    ],
    relevantKPIs: [
      "GMV",
      "TAKE_RATE",
      "SELLER_COUNT",
      "BUYER_COUNT",
      "MATCH_RATE",
      "DISTRIBUTOR_MARGIN",
    ],
    kpisWithDescriptions: {
      GMV: {
        code: "GMV",
        name: "Volume Bruto de Vendas",
        explanation:
          "Valor total de vendas feitas pelos seus clientes usando seu produto",
        whatIsIt: "Vendas totais no ecossistema (não sua receita direta)",
        whyItMatters: "Mostra o tamanho do ecossistema que você alimenta",
        howToImprove:
          "Mais sellers, melhores tools, mais buyers,marketing para ecossistema",
        formula: "Soma de todas as vendas pelos clientes",
      },
      TAKE_RATE: {
        code: "TAKE_RATE",
        name: "Taxa de Comissão",
        explanation: "Percentual que você ganha em cada venda",
        whatIsIt: "Sua receita dividida pelo GMV",
        whyItMatters: "Determina sua margem no modelo",
        howToImprove: "Negociar melhor taxa,volume,valor agregado",
        formula: "(Sua Receita / GMV) × 100",
      },
      SELLER_COUNT: {
        code: "SELLER_COUNT",
        name: "Fornecedores/Vendedores Ativos",
        explanation:
          "Número de empresas que vendem usando sua plataforma/produto",
        whatIsIt: "Quantidade de sellers no ecossistema",
        whyItMatters: "Mais sellers = mais oferta = mais buyers",
        howToImprove:
          "Onboarding fácil,ferramentas,suporte,marketing para sellers",
        formula: "Contagem de sellers ativos",
      },
    },
  },
  {
    id: "marketplace",
    code: "MARKETPLACE",
    label: "Marketplace / Plataforma",
    labelEn: "Marketplace",
    description: "Sua plataforma conecta vendedores e compradores.",
    descriptionEn: "Your platform connects sellers and buyers.",
    example: " marketplaces, apps de entrega, plataformas de serviços.",
    examples: [
      "E-commerce marketplace",
      "App de delivery",
      "Plataforma de freelancers",
      "Agregador de serviços",
      "Plataforma de classificados",
    ],
    relevantKPIs: [
      "GMV",
      "TAKE_RATE",
      "MATCH_RATE",
      "CAC",
      "LTV",
      "SELLER_CHURN",
      "BUYER_CHURN",
      "FILL_RATE",
    ],
    kpisWithDescriptions: {
      MATCH_RATE: {
        code: "MATCH_RATE",
        name: "Taxa de Match",
        explanation: "Quantas buscas viram transações",
        whatIsIt: "Percentual de match entre oferta e demanda",
        whyItMatters: "Core do marketplace - quanto mais matches, mais valor",
        howToImprove: "Melhorar search,precificação,semântica,recomendações",
        formula: "(Transações / Buscas) × 100",
      },
      FILL_RATE: {
        code: "FILL_RATE",
        name: "Taxa de Preenchimento",
        explanation: "Pedidos atendidos versus solicitados",
        whatIsIt: "Percentual de demanda atendida",
        whyItMatters: "Se não preenche, perde cliente",
        howToImprove: "Mais inventory,melhor forecasting,parceiros",
        formula: "(Pedidos Atendidos / Pedidos Solicitados) × 100",
      },
    },
  },
  {
    id: "saas",
    code: "SAAS",
    label: "Software como Serviço",
    labelEn: "Software as a Service",
    description: "Sua empresa oferece software por assinatura.",
    descriptionEn: "Your company offers software as a subscription.",
    example: "ERP online, CRM na nuvem, ferramentas SaaS.",
    examples: [
      "ERP/SaaS empresarial",
      "Ferramenta de produtividade",
      "CRM SaaS",
      "Ferramenta de marketing digital",
      "Plataforma de educação online",
    ],
    relevantKPIs: [
      "MRR",
      "ARR",
      "CHURN",
      "CAC",
      "LTV",
      "BURN_RATE",
      "NRR",
      "ARPU",
      "TRIAL_CONVERSION",
      "NET_DOLLAR_RETENTION",
    ],
    kpisWithDescriptions: {
      MRR: {
        code: "MRR",
        name: "Receita Recorrente Mensal",
        explanation: "Sua receita mensal garantida por assinaturas",
        whatIsIt: "Soma de todas as assinaturas ativas do mês",
        whyItMatters: "Core metric de SaaS - mostra saúde do negócio",
        howToImprove: "Mais clientes, menos churn, upgrades, expansão",
        formula: "Soma de todas as assinaturas mensais",
      },
      ARR: {
        code: "ARR",
        name: "Receita Recorrente Anual",
        explanation: "Sua receita anual projetada",
        whatIsIt: "MRR × 12",
        whyItMatters: "Usado para valuation e métricas de crescimento",
        howToImprove: "Crescimento do MRR",
        formula: "MRR × 12",
      },
      CHURN: {
        code: "CHURN",
        name: "Taxa de Cancelamento",
        explanation: "Clientes que cancelam a assinatura",
        whatIsIt: "Percentual de clientes que saem por mês/ano",
        whyItMatters: "Churn alto destrói valor. 5% mensal = 46% anual",
        howToImprove:
          "Onboarding excelente,suporte,rastrear dissatisfaction,cancelamento mais difícil",
        formula: "(Clientes Perdidos / Clientes Início) × 100",
      },
      NRR: {
        code: "NRR",
        name: "Net Revenue Retention",
        explanation: "Receita retida + expansão - contração - churn",
        whatIsIt: "Mede se você está crescendo com base de clientes atual",
        whyItMatters: "NRR > 100% = crecimiento sem novos clientes",
        howToImprove: "Upsell,cross-sell,novos features,reduzir churn",
        formula: "(MRR Final / MRR Início) × 100",
      },
    },
  },
  {
    id: "services",
    code: "SERVICES",
    label: "Prestação de Serviços",
    labelEn: "Services",
    description: "Sua empresa oferece serviços personalizados.",
    descriptionEn: "Your company offers personalized services.",
    example: "Consultoria, arquitetura, advocacia, fisioterapia.",
    examples: [
      "Consultoria empresarial",
      "Serviços profissionais (advogado, contador)",
      "Arquitetura e design",
      "Saúde (fisioterapia, clínica)",
      "Serviços de beleza",
    ],
    relevantKPIs: [
      "UTILIZATION",
      "BILLABLE_HOURS",
      "PROJECT_MARGIN",
      "CLIENT_SATISFACTION",
      "AVG_PROJECT_VALUE",
      "PROJECT_PROFIT",
    ],
    kpisWithDescriptions: {
      UTILIZATION: {
        code: "UTILIZATION",
        name: "Taxa de Utilização",
        explanation: "Quanto do seu tempo/projeto é pago pelo cliente",
        whatIsIt: "Percentual de horas/tempo que são faturáveis",
        whyItMatters: "Baixa utilização = receita perdida",
        howToImprove: "Melhor gestão de agenda,propostas melhores,retainers",
        formula: "(Horas Faturáveis / Horas Totais) × 100",
      },
      BILLABLE_HOURS: {
        code: "BILLABLE_HOURS",
        name: "Horas Faturáveis",
        explanation: "Total de horas que você cobra dos clientes",
        whatIsIt: "Soma de horas trabalhadas em projetos pagos",
        whyItMatters: "Main revenue driver para serviços",
        howToImprove: "Mais clientes, projetos maiores,retainers",
        formula: "Soma de horas em projetos pagos",
      },
      PROJECT_MARGIN: {
        code: "PROJECT_MARGIN",
        name: "Margem do Projeto",
        explanation: "Lucro em cada projeto prestado",
        whatIsIt: "Receita do projeto menos custos diretos",
        whyItMatters: "Projetos devem dar lucro, não só cobrir custos",
        howToImprove: "Precificar melhor,escopo claro,gestão de escopo",
        formula: "(Receita Projeto - Custos Projeto) / Receita Projeto × 100",
      },
    },
  },
];

export const getBusinessModel = (code: string): BusinessModel | undefined => {
  return BUSINESS_MODELS.find((m) => m.code === code);
};

export const getKPIDescription = (
  modelCode: string,
  kpiCode: string,
): KPIDescription | undefined => {
  const model = getBusinessModel(modelCode);
  return model?.kpisWithDescriptions[kpiCode];
};
