-- =====================================================
-- SEED DATA: 11 ALAVANCAS ESTRATÉGICAS + 15 AÇÕES TÁTICAS
-- Popula library_levers e library_actions
-- Ciclo: Challenge → Goal → Lever → Action → KPI
-- =====================================================

-- =====================================================
-- 1. INSERIR 11 ALAVANCAS ESTRATÉGICAS (library_levers)
-- =====================================================

INSERT INTO library_levers (code, title, description, category, target_kpi_code, impact_level, implementation_complexity, typical_timeframe_days, expected_impact_description, is_active) VALUES

-- FINANCEIRAS (4 alavancas)
('LEV_PRICE', 
 'Revisão de Precificação', 
 'Ajustar preços dos produtos/serviços para otimizar margem de contribuição. Envolve análise de custos, concorrência e elasticidade de preço.',
 'financeiro',
 'NET_MARGIN',
 'high',
 'medium',
 30,
 'Aumento de 3-8 pontos percentuais na margem líquida',
 true),

('LEV_FIXED_COST', 
 'Otimização de Despesas Fixas', 
 'Reduzir custos operacionais sem afetar a qualidade da entrega. Foco em eliminar desperdícios e negociar contratos.',
 'financeiro',
 'FIXED_COSTS',
 'medium',
 'low',
 21,
 'Redução de 10-15% nos custos fixos mensais',
 true),

('LEV_CASH_CYCLE', 
 'Aceleração do Ciclo de Caixa', 
 'Reduzir o tempo entre venda e recebimento, acelerando a conversão de vendas em dinheiro disponível.',
 'financeiro',
 'RECEIVABLES_DAYS',
 'high',
 'low',
 14,
 'Redução de 10-20 dias no prazo médio de recebimento',
 true),

('LEV_DEBT_RECON', 
 'Saneamento de Dívidas', 
 'Restruturar dívidas caras (cheque especial, cartão) para linhas de crédito mais baratas ou capital de giro.',
 'financeiro',
 'CASH_FLOW',
 'high',
 'medium',
 45,
 'Economia de 30-50% nos custos de dívidas',
 true),

-- VENDAS (3 alavancas)
('LEV_CONVERSION', 
 'Eficiência Comercial', 
 'Melhorar a taxa de conversão de orçamentos em vendas através de técnicas de vendas e follow-up.',
 'vendas',
 'SALES_CONVERSION',
 'high',
 'medium',
 30,
 'Aumento de 20-40% na taxa de conversão',
 true),

('LEV_UPSELL', 
 'Aumento de Ticket Médio', 
 'Aumentar o valor médio de cada venda através de cross-sell, up-sell e bundling de produtos.',
 'vendas',
 'AVG_TICKET',
 'medium',
 'low',
 21,
 'Aumento de 15-25% no ticket médio',
 true),

('LEV_ACQ_EFF', 
 'Otimização de Verba de Marketing', 
 'Melhorar a eficiência do investimento em marketing para reduzir o custo de aquisição de clientes.',
 'vendas',
 'CUSTOMER_ACQ_COST',
 'medium',
 'medium',
 30,
 'Redução de 20-40% no CAC',
 true),

-- OPERAÇÕES (2 alavancas)
('LEV_WASTE', 
 'Combate ao Desperdício', 
 'Eliminar retrabalho, desperdício de materiais e ineficiências no processo produtivo.',
 'operacoes',
 'CONTRIB_MARGIN',
 'medium',
 'medium',
 45,
 'Aumento de 2-5% na margem de contribuição',
 true),

('LEV_STOCK_TURN', 
 'Giro de Ativos (Estoque)', 
 'Acelerar a rotação de estoque para liberar capital de giro e reduzir obsolescência.',
 'operacoes',
 'INVENTORY_TURNOVER',
 'medium',
 'low',
 60,
 'Aumento de 30-50% na rotatividade de estoque',
 true),

-- PESSOAS (1 alavanca)
('LEV_TEAM_PROD', 
 'Produtividade da Equipe', 
 'Aumentar a produção por colaborador através de metas claras, treinamento e eliminação de gargalos.',
 'pessoas',
 'REVENUE_PER_EMP',
 'high',
 'high',
 90,
 'Aumento de 20-35% na receita por funcionário',
 true),

-- RELACIONAMENTO (1 alavanca)
('LEV_RETENTION', 
 'Blindagem de Carteira', 
 'Reduzir churn e aumentar a recorrência de compra através de programas de fidelidade e reativação.',
 'relacionamento',
 'EMPLOYEE_TURNOVER',
 'high',
 'medium',
 45,
 'Redução de 30-50% na taxa de churn',
 true);

-- =====================================================
-- 2. INSERIR 15 AÇÕES TÁTICAS (library_actions)
-- Mapeadas para cada alavanca (1-2 ações por alavanca)
-- =====================================================

-- Para LEV_PRICE (Revisão de Precificação)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_AUDIT_MARGIN',
    id,
    'Auditoria de Margem por Item',
    'Listar todos os produtos/serviços, calcular margem real de cada um e identificar "ítens mico" que dão prejuízo.',
    '[
        "1. Exportar lista completa de produtos/serviços do sistema",
        "2. Coletar custo real de cada item (fornecedor + mão de obra + overhead)",
        "3. Calcular margem bruta e margem de contribuição de cada item",
        "4. Identificar itens com margem negativa ou < 10%",
        "5. Marcar itens mico para corte ou reposicionamento de preço",
        "6. Priorizar os 20% de itens que geram 80% da receita para ajuste imediato"
    ]'::jsonb,
    8,
    'Planilha Excel, acesso ao sistema de ERP/contabilidade, lista de custos de fornecedores',
    'Lista de itens classificados por margem, identificação de itens mico, proposta de ajuste de preços',
    1,
    false,
    true
FROM library_levers WHERE code = 'LEV_PRICE';

-- Para LEV_FIXED_COST (Otimização de Despesas Fixas) - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_CUT_GHOST_SUBSCRIPTIONS',
    id,
    'Corte de "Assinaturas Fantasma"',
    'Revisar extratos bancários dos últimos 3 meses e cancelar softwares, serviços e assinaturas não utilizados.',
    '[
        "1. Baixar extratos bancários dos últimos 90 dias",
        "2. Listar todas as despesas recorrentes automáticas",
        "3. Cruzar com lista de softwares/serviços realmente utilizados pela equipe",
        "4. Identificar assinaturas de ex-funcionários ou projetos encerrados",
        "5. Cancelar imediatamente serviços não utilizados (> 30 dias sem uso)",
        "6. Negociar desconto para assinaturas essenciais (pague anual vs mensal)",
        "7. Criar processo de aprovação para novas assinaturas"
    ]'::jsonb,
    4,
    'Extratos bancários, acesso às contas de assinatura, lista de ferramentas utilizadas pela equipe',
    'Economia mensal identificada e realizada em R$, lista de serviços cancelados',
    1,
    true,
    true
FROM library_levers WHERE code = 'LEV_FIXED_COST';

-- Para LEV_CASH_CYCLE (Aceleração do Ciclo de Caixa) - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_CASH_PAYMENT_INCENTIVE',
    id,
    'Incentivo ao Pagamento à Vista',
    'Criar política de desconto agressivo para recebimento antecipado e reduzir opções de parcelamento longo.',
    '[
        "1. Analisar ticket médio e margem para definir % de desconto viável",
        "2. Criar proposta: 5% para pagamento à vista, 3% para 7 dias, 0% para 30+ dias",
        "3. Atualizar propostas/orçamentos com nova política de desconto",
        "4. Treinar equipe comercial para oferecer desconto à vista no fechamento",
        "5. Implementar no sistema: desconto automático para boleto à vista",
        "6. Monitorar taxa de adesão ao desconto semanalmente",
        "7. Ajustar percentual conforme resultados (teste A/B)"
    ]'::jsonb,
    6,
    'Análise de margem, atualização de templates de proposta, treinamento da equipe comercial',
    '% de vendas com desconto à vista, redução do prazo médio de recebimento, impacto na margem',
    1,
    true,
    true
FROM library_levers WHERE code = 'LEV_CASH_CYCLE';

-- Para LEV_DEBT_RECON (Saneamento de Dívidas)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_DEBT_SWAP',
    id,
    'Troca de Dívida Cara por Barata',
    'Quitar dívidas de alto custo (cheque especial, cartão, CDC) com linhas de crédito mais baratas.',
    '[
        "1. Listar todas as dívidas atuais: valor, taxa de juros, prazo, instituição",
        "2. Identificar dívidas com juros > 3% ao mês (prioridade #1)",
        "3. Pesquisar alternativas: capital de giro bancário, factoring, Fomento Mercantil",
        "4. Simular economia: comparar custo total da dívida atual vs. nova proposta",
        "5. Solicitar aprovação de crédito em 2-3 instituições diferentes",
        "6. Utilizar recurso mais barato para quitar dívidas mais caras",
        "7. Consolidar dívidas fragmentadas em única obrigação menor",
        "8. Estabelecer novo fluxo de caixa para evitar recaída em dívidas caras"
    ]'::jsonb,
    12,
    'Relatório de dívidas atual, propostas de crédito, simulação de cenários',
    'Taxa média de juros antes/depois, economia mensal em R$, simplificação do fluxo de pagamentos',
    1,
    false,
    true
FROM library_levers WHERE code = 'LEV_DEBT_RECON';

-- Para LEV_CONVERSION (Eficiência Comercial)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_OBJECTION_SCRIPT',
    id,
    'Script de Quebra de Objeção',
    'Treinar vendedores para focar em "Valor entregue" em vez de "Preço baixo" quando o cliente resistir.',
    '[
        "1. Mapear as 5 objeções mais comuns ouvidas pela equipe de vendas",
        "2. Criar roteiro de resposta para cada objeção (foco em valor, não preço)",
        "3. Desenvolver cases de sucesso de clientes similares",
        "4. Criar material de apoio (one-pager) com ROI do produto/serviço",
        "5. Treinar equipe com role-playing (mínimo 2 horas por vendedor)",
        "6. Gravar ligações de vendas para feedback e ajuste do script",
        "7. Estabelecer competição saudável: ranking de conversão semanal",
        "8. Revisar e refinar script mensalmente baseado no que funciona"
    ]'::jsonb,
    16,
    'Gravação de calls, ferramenta de CRM, tempo de gestão para coaching',
    'Taxa de conversão antes/depois, tempo médio de ciclo de vendas, valor médio de negócio fechado',
    1,
    false,
    true
FROM library_levers WHERE code = 'LEV_CONVERSION';

-- Para LEV_UPSELL (Aumento de Ticket Médio)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_CROSS_SELL_OFFER',
    id,
    'Oferta Complementar (Cross-sell)',
    'Oferecer produto/serviço adicional no momento do fechamento da venda principal.',
    '[
        "1. Analisar histórico de vendas: identificar produtos frequentemente comprados juntos",
        "2. Definir 3 bundles naturais: produto principal + complemento + serviço de instalação",
        "3. Criar preço especial para bundle vs. compra separada (economia de 10-15%)",
        "4. Treinar frase de oferta: '90% dos nossos clientes também levam...'",
        "5. Criar material visual mostrando solução completa vs. parcial",
        "6. Estabelecer comissão extra para vendedor em vendas com up-sell",
        "7. Implementar no sistema: sugestão automática de complemento",
        "8. Monitorar taxa de aceitação do cross-sell semanalmente"
    ]'::jsonb,
    10,
    'Análise de vendas, criação de bundles, treinamento comercial',
    '% de vendas com cross-sell, ticket médio com/sem up-sell, margem dos bundles',
    1,
    false,
    true
FROM library_levers WHERE code = 'LEV_UPSELL';

-- Para LEV_ACQ_EFF (Otimização de Verba de Marketing) - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_MARKETING_AUDIT',
    id,
    'Auditoria de Canais de Marketing',
    'Desligar imediatamente canais de aquisição que não estão gerando retorno (ROAS < 2).',
    '[
        "1. Extrair relatório de gastos por canal dos últimos 90 dias",
        "2. Calcular CAC por canal: Google Ads, Facebook, Insta, Indicação, etc.",
        "3. Identificar canais com ROAS < 2 ou CAC > ticket médio",
        "4. Pausar imediatamente campanhas em canais deficitários",
        "5. Redistribuir verba para canais com melhor ROAS",
        "6. Implementar rastreamento de UTM em todas as campanhas",
        "7. Criar dashboard de acompanhamento semanal de ROAS por canal",
        "8. Estabelecer regra: pausar automaticamente se ROAS < 2 por 7 dias"
    ]'::jsonb,
    8,
    'Acesso às contas de ads, Google Analytics, ferramenta de atribuição',
    'ROAS por canal antes/depois, CAC reduzido, economia de verba de marketing',
    1,
    true,
    true
FROM library_levers WHERE code = 'LEV_ACQ_EFF';

-- Para LEV_WASTE (Combate ao Desperdício)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_REWORK_MAP',
    id,
    'Mapeamento de Retrabalho',
    'Identificar onde o processo trava e os erros que obrigam a refazer o serviço ou produto.',
    '[
        "1. Listar todos os projetos/ordens dos últimos 30 dias",
        "2. Identificar quais tiveram retrabalho, erro ou devolução",
        "3. Classificar erros por tipo: falta de especificação, comunicação, qualidade",
        "4. Calcular custo do retrabalho: horas extras, material, insatisfação do cliente",
        "5. Identificar os 3 gargalos principais que causam 80% dos retrabalhos",
        "6. Criar checklist de prevenção para cada tipo de erro recorrente",
        "7. Implementar sistema de aprovação antes de executar (para itens críticos)",
        "8. Treinar equipe nos novos procedimentos de prevenção",
        "9. Monitorar taxa de retrabalho semanalmente"
    ]'::jsonb,
    12,
    'Acesso a projetos/ordens, entrevistas com equipe operacional, análise de custos',
    'Taxa de retrabalho (%), custo do retrabalho em R$, tempo médio de entrega',
    1,
    false,
    true
FROM library_levers WHERE code = 'LEV_WASTE';

-- Para LEV_STOCK_TURN (Giro de Ativos) - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_DEAD_STOCK_LIQUIDATION',
    id,
    'Liquidação de Itens Parados',
    'Fazer promoção agressiva para transformar estoque antigo (> 90 dias) em dinheiro no caixa.',
    '[
        "1. Gerar relatório de estoque por idade: < 30d, 30-90d, > 90d, > 180d",
        "2. Identificar itens parados há mais de 90 dias (dead stock)",
        "3. Calcular valor imobilizado e custo de oportunidade",
        "4. Definir política de desconto por faixa de idade: 90d=20%, 180d=40%, 365d=60%",
        "5. Criar campanha de "Liquidação de Estoque" com urgência (estoque limitado)",
        "6. Notificar clientes que compraram itens similares no passado",
        "7. Oferecer para revendedores/parceiros em preço de custo",
        "8. Doar ou descartar itens > 1 ano (evitar custo de armazenamento)",
        "9. Reinvestir dinheiro liberado em estoque de giro rápido"
    ]'::jsonb,
    8,
    'Relatório de estoque, sistema de CRM para notificação, logística de distribuição',
    'Valor de estoque parado liquidado, dinheiro liberado para caixa, redução do dead stock %',
    1,
    true,
    true
FROM library_levers WHERE code = 'LEV_STOCK_TURN';

-- Para LEV_TEAM_PROD (Produtividade da Equipe)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_INDIVIDUAL_TARGETS',
    id,
    'Definição de Metas Individuais',
    'Deixar claro para cada colaborador qual é seu indicador de entrega semanal.',
    '[
        "1. Mapear processo produtivo e identificar entregáveis de cada função",
        "2. Definir KPI individual para cada colaborador (máximo 3 indicadores)",
        "3. Estabelecer meta semanal/quinzenal realista baseada em histórico",
        "4. Criar dashboard individual visível para o próprio colaborador",
        "5. Implementar reunião semanal de 15 min: revisão de metas e impedimentos",
        "6. Estabelecer sistema de reconhecimento: bônus por meta superada",
        "7. Identificar treinamentos necessários para quem não atinge meta",
        "8. Documentar melhores práticas dos top performers e replicar",
        "9. Fazer ajuste de carga: redistribuir trabalho se alguém está sobrecarregado"
    ]'::jsonb,
    16,
    'Definição de processos, ferramenta de acompanhamento, tempo de gestão',
    'Produtividade por colaborador, % de metas atingidas, turnover voluntário',
    1,
    false,
    true
FROM library_levers WHERE code = 'LEV_TEAM_PROD';

-- Para LEV_RETENTION (Blindagem de Carteira) - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_REACTIVATION_CAMPAIGN',
    id,
    'Campanha de Reativação',
    'Contatar clientes que não compram há mais de 60 dias com oferta especial de retorno.',
    '[
        "1. Gerar lista de clientes sem compra nos últimos 60 dias (mínimo 2 compras antes)",
        "2. Segmentar por valor histórico: VIP (> 1k), Regular (300-1k), Baixo (< 300)",
        "3. Criar oferta personalizada por segmento: desconto, brinde, condição especial",
        "4. Escolher canal de contato: WhatsApp (preferencial), email, ligação",
        "5. Preparar script de abordagem: "Sentimos sua falta...", não "Compre agora!"",
        "6. Executar contato em 3 ondas: dia 0, dia 7, dia 14 (para quem não respondeu)",
        "7. Oferecer pesquisa rápida: "O que faria você voltar a comprar?"",
        "8. Registrar feedback e ajustar oferta para próxima campanha",
        "9. Calcular taxa de reativação e ROI da campanha"
    ]'::jsonb,
    6,
    'Lista de clientes inativos, ferramenta de envio em massa (WhatsApp/email), oferta de desconto',
    'Taxa de reativação (%), valor recuperado, NPS dos clientes reativados',
    1,
    true,
    true
FROM library_levers WHERE code = 'LEV_RETENTION';

-- Ação adicional para LEV_RETENTION
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 
    'ACT_LOYALTY_PROGRAM',
    id,
    'Programa de Fidelidade Simples',
    'Criar sistema de pontos ou cashback para incentivar compras recorrentes.',
    '[
        "1. Definir regra simples: a cada R$ 100 em compras = R$ 5 de crédito",
        "2. Escolher mecanismo: cartão físico, app próprio, ou crédito em conta",
        "3. Criar comunicação visual clara no ponto de venda: "Compre mais, pague menos"",
        "4. Treinar equipe de atendimento para oferecer programa a cada compra",
        "5. Implementar sistema de registro de pontos (pode ser planilha inicial)",
        "6. Enviar mensagem mensal: "Você tem R$ X de crédito para usar"",
        "7. Criar ofertas exclusivas para membros do programa (antecipação de saldão)",
        "8. Monitorar taxa de adesão e frequência de compra dos participantes"
    ]'::jsonb,
    10,
    'Definição de regras, material de comunicação, sistema de registro de pontos',
    '% de clientes no programa, frequência de compra dos participantes vs. não participantes',
    2,
    false,
    true
FROM library_levers WHERE code = 'LEV_RETENTION';

-- =====================================================
-- 3. CRIAR MAPEAMENTOS: Desafio → Alavancas
-- Cada desafio mapeia para 1-3 alavancas principais
-- =====================================================

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id as challenge_id,
    ll.id as lever_id,
    1 as priority,
    true as is_primary,
    0.90 as confidence_score
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'LOW_PROFITABILITY' AND ll.code = 'LEV_PRICE';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    2,
    false,
    0.75
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'LOW_PROFITABILITY' AND ll.code = 'LEV_FIXED_COST';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    3,
    false,
    0.70
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'LOW_PROFITABILITY' AND ll.code = 'LEV_WASTE';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.95
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'CASH_SHORTAGE' AND ll.code = 'LEV_CASH_CYCLE';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    2,
    false,
    0.85
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'CASH_SHORTAGE' AND ll.code = 'LEV_DEBT_RECON';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.90
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'HIGH_FIXED_COSTS' AND ll.code = 'LEV_FIXED_COST';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.85
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'LATE_RECEIVABLES' AND ll.code = 'LEV_CASH_CYCLE';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.90
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'CUSTOMER_LOSS' AND ll.code = 'LEV_RETENTION';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.90
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'LOW_SALES_CONVERSION' AND ll.code = 'LEV_CONVERSION';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    2,
    false,
    0.70
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'LOW_SALES_CONVERSION' AND ll.code = 'LEV_ACQ_EFF';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.85
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'HIGH_ACQUISITION_COST' AND ll.code = 'LEV_ACQ_EFF';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    2,
    false,
    0.75
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'HIGH_ACQUISITION_COST' AND ll.code = 'LEV_CONVERSION';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.90
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'STOCK_STAGNATION' AND ll.code = 'LEV_STOCK_TURN';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    1,
    true,
    0.85
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'DELIVERY_DELAY' AND ll.code = 'LEV_WASTE';

INSERT INTO lever_challenge_mapping (challenge_id, lever_id, priority, is_primary, confidence_score)
SELECT 
    lc.id,
    ll.id,
    2,
    false,
    0.80
FROM library_challenges lc
CROSS JOIN library_levers ll
WHERE lc.code = 'DELIVERY_DELAY' AND ll.code = 'LEV_TEAM_PROD';

-- =====================================================
-- 4. CRIAR MAPEAMENTOS: Objetivo → Alavancas
-- Cada objetivo mapeia para 2-4 alavancas
-- =====================================================

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.90,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'INCREASE_PROFIT' AND ll.code = 'LEV_PRICE';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    2,
    0.75,
    2
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'INCREASE_PROFIT' AND ll.code = 'LEV_FIXED_COST';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.95,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'BALANCE_CASH_FLOW' AND ll.code = 'LEV_CASH_CYCLE';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    2,
    0.80,
    2
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'BALANCE_CASH_FLOW' AND ll.code = 'LEV_DEBT_RECON';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.90,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'REDUCE_EXPENSES' AND ll.code = 'LEV_FIXED_COST';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.95,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'ACCELERATE_RECEIPTS' AND ll.code = 'LEV_CASH_CYCLE';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.90,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'IMPROVE_CONVERSION' AND ll.code = 'LEV_CONVERSION';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    2,
    0.70,
    2
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'IMPROVE_CONVERSION' AND ll.code = 'LEV_UPSELL';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.95,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'RETAIN_CUSTOMERS' AND ll.code = 'LEV_RETENTION';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.90,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'OPTIMIZE_STOCK' AND ll.code = 'LEV_STOCK_TURN';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    2,
    0.70,
    2
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'OPTIMIZE_STOCK' AND ll.code = 'LEV_WASTE';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    1,
    0.85,
    1
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'FAST_OPERATION' AND ll.code = 'LEV_WASTE';

INSERT INTO lever_goal_mapping (goal_id, lever_id, priority, effectiveness_score, typical_sequence_order)
SELECT 
    lg.id,
    ll.id,
    2,
    0.80,
    2
FROM library_goals lg
CROSS JOIN library_levers ll
WHERE lg.code = 'FAST_OPERATION' AND ll.code = 'LEV_TEAM_PROD';

-- =====================================================
-- 5. VALIDAÇÃO: Contar registros criados
-- =====================================================

SELECT 
    'BIBLIOTECA V3.0 CRIADA COM SUCESSO' as status,
    (SELECT COUNT(*) FROM library_levers) as total_levers,
    (SELECT COUNT(*) FROM library_actions) as total_actions,
    (SELECT COUNT(*) FROM lever_challenge_mapping) as challenge_mappings,
    (SELECT COUNT(*) FROM lever_goal_mapping) as goal_mappings;

/*
RESULTADO ESPERADO:
- Alavancas: 11
- Ações: 15
- Mapeamentos Desafio→Alavanca: 15
- Mapeamentos Objetivo→Alavanca: 13

✅ CICLO COMPLETO PRONTO:
Challenge → Goal → Lever → Action → KPI
*/
