-- =====================================================
-- SEED_LEVERS_STANDALONE.sql
-- Popula as tabelas standalone sem dependências de FK externas
-- Usa challenge_code e goal_code em vez de UUIDs
-- =====================================================

-- =====================================================
-- 1. INSERIR 11 ALAVANCAS ESTRATÉGICAS
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
-- 2. INSERIR 15 AÇÕES TÁTICAS
-- =====================================================

-- Para LEV_PRICE
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_AUDIT_MARGIN', id, 'Auditoria de Margem por Item',
'Listar todos os produtos/serviços, calcular margem real de cada um e identificar "ítens mico" que dão prejuízo.',
'["1. Exportar lista completa de produtos/serviços do sistema","2. Coletar custo real de cada item","3. Calcular margem bruta de cada item","4. Identificar itens com margem < 10%","5. Marcar itens mico para corte","6. Priorizar os 20% que geram 80% da receita"]'::jsonb,
8, 'Planilha Excel, acesso ao ERP, lista de custos',
'Lista de itens classificados por margem, identificação de itens mico',
1, false, true FROM library_levers WHERE code = 'LEV_PRICE';

-- Para LEV_FIXED_COST - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_CUT_GHOST_SUBSCRIPTIONS', id, 'Corte de "Assinaturas Fantasma"',
'Revisar extratos bancários e cancelar softwares, serviços e assinaturas não utilizados.',
'["1. Baixar extratos dos últimos 90 dias","2. Listar despesas recorrentes automáticas","3. Cruzar com softwares realmente utilizados","4. Identificar assinaturas de ex-funcionários","5. Cancelar serviços não utilizados (> 30 dias)","6. Negociar desconto para assinaturas essenciais","7. Criar processo de aprovação para novas assinaturas"]'::jsonb,
4, 'Extratos bancários, acesso às contas de assinatura',
'Economia mensal identificada e realizada',
1, true, true FROM library_levers WHERE code = 'LEV_FIXED_COST';

-- Para LEV_CASH_CYCLE - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_CASH_PAYMENT_INCENTIVE', id, 'Incentivo ao Pagamento à Vista',
'Criar política de desconto agressivo para recebimento antecipado.',
'["1. Analisar ticket médio e margem","2. Criar proposta: 5% à vista, 3% para 7 dias","3. Atualizar propostas com nova política","4. Treinar equipe comercial","5. Implementar desconto automático","6. Monitorar taxa de adesão","7. Ajustar conforme resultados"]'::jsonb,
6, 'Análise de margem, templates de proposta',
'% de vendas com desconto à vista, redução do prazo de recebimento',
1, true, true FROM library_levers WHERE code = 'LEV_CASH_CYCLE';

-- Para LEV_DEBT_RECON
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_DEBT_SWAP', id, 'Troca de Dívida Cara por Barata',
'Quitar dívidas de alto custo com linhas de crédito mais baratas.',
'["1. Listar dívidas atuais: valor, taxa, prazo","2. Identificar dívidas com juros > 3% ao mês","3. Pesquisar alternativas: capital de giro, factoring","4. Simular economia: custo atual vs. nova proposta","5. Solicitar aprovação em 2-3 instituições","6. Usar recurso mais barato para quitar dívidas caras","7. Consolidar dívidas fragmentadas","8. Estabelecer novo fluxo de caixa"]'::jsonb,
12, 'Relatório de dívidas, propostas de crédito',
'Taxa média de juros antes/depois, economia mensal',
1, false, true FROM library_levers WHERE code = 'LEV_DEBT_RECON';

-- Para LEV_CONVERSION
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_OBJECTION_SCRIPT', id, 'Script de Quebra de Objeção',
'Treinar vendedores para focar em "Valor entregue" em vez de "Preço baixo".',
'["1. Mapear as 5 objeções mais comuns","2. Criar roteiro de resposta (foco em valor)","3. Desenvolver cases de sucesso","4. Criar material de apoio com ROI","5. Treinar equipe com role-playing","6. Gravar ligações para feedback","7. Ranking de conversão semanal","8. Revisar script mensalmente"]'::jsonb,
16, 'Gravação de calls, CRM, tempo de gestão',
'Taxa de conversão antes/depois, tempo de ciclo de vendas',
1, false, true FROM library_levers WHERE code = 'LEV_CONVERSION';

-- Para LEV_UPSELL
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_CROSS_SELL_OFFER', id, 'Oferta Complementar (Cross-sell)',
'Oferecer produto adicional no momento do fechamento.',
'["1. Analisar histórico: produtos comprados juntos","2. Definir 3 bundles naturais","3. Criar preço especial para bundle (10-15% off)","4. Treinar frase: 90% dos clientes também levam...","5. Material visual: solução completa vs. parcial","6. Comissão extra para up-sell","7. Sugestão automática no sistema","8. Monitorar taxa de aceitação"]'::jsonb,
10, 'Análise de vendas, criação de bundles',
'% de vendas com cross-sell, ticket médio com/sem up-sell',
1, false, true FROM library_levers WHERE code = 'LEV_UPSELL';

-- Para LEV_ACQ_EFF - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_MARKETING_AUDIT', id, 'Auditoria de Canais de Marketing',
'Desligar canais de aquisição que não geram retorno (ROAS < 2).',
'["1. Extrair gastos por canal dos últimos 90 dias","2. Calcular CAC por canal","3. Identificar canais com ROAS < 2","4. Pausar campanhas deficitárias","5. Redistribuir verba para melhores canais","6. Implementar rastreamento UTM","7. Dashboard semanal de ROAS","8. Regra: pausar se ROAS < 2 por 7 dias"]'::jsonb,
8, 'Acesso às contas de ads, Google Analytics',
'ROAS por canal, CAC reduzido, economia de verba',
1, true, true FROM library_levers WHERE code = 'LEV_ACQ_EFF';

-- Para LEV_WASTE
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_REWORK_MAP', id, 'Mapeamento de Retrabalho',
'Identificar onde o processo trava e os erros que obrigam a refazer.',
'["1. Listar projetos/ordens dos últimos 30 dias","2. Identificar com retrabalho ou erro","3. Classificar erros por tipo","4. Calcular custo do retrabalho","5. Identificar 3 gargalos principais","6. Criar checklist de prevenção","7. Aprovação antes de executar","8. Treinar equipe","9. Monitorar taxa semanalmente"]'::jsonb,
12, 'Acesso a projetos, entrevistas com equipe',
'Taxa de retrabalho (%), custo em R$, tempo de entrega',
1, false, true FROM library_levers WHERE code = 'LEV_WASTE';

-- Para LEV_STOCK_TURN - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_DEAD_STOCK_LIQUIDATION', id, 'Liquidação de Itens Parados',
'Fazer promoção agressiva para transformar estoque antigo em dinheiro.',
'["1. Relatório de estoque por idade","2. Identificar itens > 90 dias (dead stock)","3. Calcular valor imobilizado","4. Política de desconto: 90d=20%, 180d=40%, 365d=60%","5. Campanha de Liquidação com urgência","6. Notificar clientes de itens similares","7. Oferecer a revendedores em preço de custo","8. Doar/descartar itens > 1 ano","9. Reinvestir em estoque de giro"]'::jsonb,
8, 'Relatório de estoque, CRM, logística',
'Valor liquidado, dinheiro liberado, redução do dead stock %',
1, true, true FROM library_levers WHERE code = 'LEV_STOCK_TURN';

-- Para LEV_TEAM_PROD
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_INDIVIDUAL_TARGETS', id, 'Definição de Metas Individuais',
'Deixar claro para cada colaborador seu indicador de entrega semanal.',
'["1. Mapear entregáveis de cada função","2. Definir KPI individual (máx 3)","3. Meta semanal realista baseada em histórico","4. Dashboard individual visível","5. Reunião semanal de 15 min","6. Sistema de reconhecimento: bônus por meta","7. Identificar treinamentos necessários","8. Documentar melhores práticas","9. Ajuste de carga se necessário"]'::jsonb,
16, 'Definição de processos, ferramenta de acompanhamento',
'Produtividade por colaborador, % de metas atingidas',
1, false, true FROM library_levers WHERE code = 'LEV_TEAM_PROD';

-- Para LEV_RETENTION - Quick Win
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_REACTIVATION_CAMPAIGN', id, 'Campanha de Reativação',
'Contatar clientes que não compram há > 60 dias com oferta especial.',
'["1. Lista de clientes sem compra > 60 dias","2. Segmentar: VIP (>1k), Regular (300-1k), Baixo (<300)","3. Oferta personalizada por segmento","4. Canal: WhatsApp (preferencial), email","5. Script: Sentimos sua falta...","6. Contato em 3 ondas: dia 0, 7, 14","7. Pesquisa: O que faria você voltar?","8. Registrar feedback","9. Calcular taxa de reativação e ROI"]'::jsonb,
6, 'Lista de clientes inativos, ferramenta de envio',
'Taxa de reativação (%), valor recuperado',
1, true, true FROM library_levers WHERE code = 'LEV_RETENTION';

-- Para LEV_RETENTION (ação adicional)
INSERT INTO library_actions (code, lever_id, title, description, step_by_step, estimated_effort_hours, required_resources, success_metrics, priority_score, quick_win, is_active)
SELECT 'ACT_LOYALTY_PROGRAM', id, 'Programa de Fidelidade Simples',
'Criar sistema de pontos ou cashback para incentivar compras recorrentes.',
'["1. Regra: a cada R$ 100 = R$ 5 de crédito","2. Escolher mecanismo: cartão físico, app, ou crédito","3. Comunicação visual no PDV: Compre mais, pague menos","4. Treinar equipe para oferecer a cada compra","5. Registro de pontos (pode ser planilha)","6. Mensagem mensal: Você tem R$ X de crédito","7. Ofertas exclusivas para membros","8. Monitorar taxa de adesão"]'::jsonb,
10, 'Definição de regras, material de comunicação',
'% de clientes no programa, frequência de compra',
2, false, true FROM library_levers WHERE code = 'LEV_RETENTION';

-- =====================================================
-- 3. MAPEAMENTOS: Desafio → Alavancas
-- =====================================================

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'LOW_PROFITABILITY', id, 1, true, 0.90 FROM library_levers WHERE code = 'LEV_PRICE';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'LOW_PROFITABILITY', id, 2, false, 0.75 FROM library_levers WHERE code = 'LEV_FIXED_COST';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'LOW_PROFITABILITY', id, 3, false, 0.70 FROM library_levers WHERE code = 'LEV_WASTE';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'CASH_SHORTAGE', id, 1, true, 0.95 FROM library_levers WHERE code = 'LEV_CASH_CYCLE';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'CASH_SHORTAGE', id, 2, false, 0.85 FROM library_levers WHERE code = 'LEV_DEBT_RECON';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'HIGH_FIXED_COSTS', id, 1, true, 0.90 FROM library_levers WHERE code = 'LEV_FIXED_COST';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'LATE_RECEIVABLES', id, 1, true, 0.85 FROM library_levers WHERE code = 'LEV_CASH_CYCLE';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'CUSTOMER_LOSS', id, 1, true, 0.90 FROM library_levers WHERE code = 'LEV_RETENTION';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'LOW_SALES_CONVERSION', id, 1, true, 0.90 FROM library_levers WHERE code = 'LEV_CONVERSION';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'LOW_SALES_CONVERSION', id, 2, false, 0.70 FROM library_levers WHERE code = 'LEV_ACQ_EFF';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'HIGH_ACQUISITION_COST', id, 1, true, 0.85 FROM library_levers WHERE code = 'LEV_ACQ_EFF';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'HIGH_ACQUISITION_COST', id, 2, false, 0.75 FROM library_levers WHERE code = 'LEV_CONVERSION';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'STOCK_STAGNATION', id, 1, true, 0.90 FROM library_levers WHERE code = 'LEV_STOCK_TURN';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'DELIVERY_DELAY', id, 1, true, 0.85 FROM library_levers WHERE code = 'LEV_WASTE';

INSERT INTO library_challenge_lever_mapping (challenge_code, lever_id, priority, is_primary, confidence_score)
SELECT 'DELIVERY_DELAY', id, 2, false, 0.80 FROM library_levers WHERE code = 'LEV_TEAM_PROD';

-- =====================================================
-- 4. MAPEAMENTOS: Objetivo → Alavancas
-- =====================================================

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'INCREASE_PROFIT', id, 1, 0.90 FROM library_levers WHERE code = 'LEV_PRICE';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'INCREASE_PROFIT', id, 2, 0.75 FROM library_levers WHERE code = 'LEV_FIXED_COST';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'BALANCE_CASH_FLOW', id, 1, 0.95 FROM library_levers WHERE code = 'LEV_CASH_CYCLE';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'BALANCE_CASH_FLOW', id, 2, 0.80 FROM library_levers WHERE code = 'LEV_DEBT_RECON';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'REDUCE_EXPENSES', id, 1, 0.90 FROM library_levers WHERE code = 'LEV_FIXED_COST';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'ACCELERATE_RECEIPTS', id, 1, 0.95 FROM library_levers WHERE code = 'LEV_CASH_CYCLE';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'IMPROVE_CONVERSION', id, 1, 0.90 FROM library_levers WHERE code = 'LEV_CONVERSION';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'IMPROVE_CONVERSION', id, 2, 0.70 FROM library_levers WHERE code = 'LEV_UPSELL';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'RETAIN_CUSTOMERS', id, 1, 0.95 FROM library_levers WHERE code = 'LEV_RETENTION';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'OPTIMIZE_STOCK', id, 1, 0.90 FROM library_levers WHERE code = 'LEV_STOCK_TURN';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'OPTIMIZE_STOCK', id, 2, 0.70 FROM library_levers WHERE code = 'LEV_WASTE';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'FAST_OPERATION', id, 1, 0.85 FROM library_levers WHERE code = 'LEV_WASTE';

INSERT INTO library_goal_lever_mapping (goal_code, lever_id, priority, effectiveness_score)
SELECT 'FAST_OPERATION', id, 2, 0.80 FROM library_levers WHERE code = 'LEV_TEAM_PROD';

-- =====================================================
-- VALIDAÇÃO
-- =====================================================

SELECT 
    'BIBLIOTECA STANDALONE V3.0 CRIADA' as status,
    (SELECT COUNT(*) FROM library_levers) as total_levers,
    (SELECT COUNT(*) FROM library_actions) as total_actions,
    (SELECT COUNT(*) FROM library_challenge_lever_mapping) as challenge_mappings,
    (SELECT COUNT(*) FROM library_goal_lever_mapping) as goal_mappings;

/*
RESULTADO ESPERADO:
- Alavancas: 11
- Ações: 15
- Mapeamentos Desafio→Alavanca: 15
- Mapeamentos Objetivo→Alavanca: 13
*/
