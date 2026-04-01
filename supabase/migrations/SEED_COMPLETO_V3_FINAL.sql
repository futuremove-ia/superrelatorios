-- =====================================================
-- SEED COMPLETO V3 - FINAL
-- Sem dependências de auth.users
-- Executar no Supabase SQL Editor
-- =====================================================

-- 1. BIBLIOTECA DE KPIs (29 KPIs)
INSERT INTO library_kpis (code, title, title_en, description, calculation_formula, unit, domain, benchmark_excellent, benchmark_good, benchmark_average, benchmark_warning, benchmark_critical, trend_direction, input_type, is_core) VALUES
('RECEITA_MENSAL', 'Receita Mensal', 'Monthly Revenue', 'Total de receita gerada no mês', 'SUM(vendas * preco)', 'BRL', 'finance', 100000, 75000, 50000, 25000, 10000, 'higher_is_better', 'non_cumulative', true),
('MARGEM_LIQUIDA', 'Margem Líquida', 'Net Margin', 'Percentual de lucro líquido sobre receita', '(lucro_liquido / receita_total) * 100', '%', 'finance', 20, 15, 10, 5, 0, 'higher_is_better', 'non_cumulative', true),
('CUSTO_AQUISICAO', 'Custo de Aquisição (CAC)', 'Customer Acquisition Cost', 'Custo médio para adquirir um novo cliente', 'gastos_marketing / novos_clientes', 'BRL', 'finance', 50, 100, 150, 200, 300, 'lower_is_better', 'non_cumulative', true),
('LTV', 'Valor do Tempo de Vida (LTV)', 'Lifetime Value', 'Receita total esperada de um cliente', 'ticket_medio * frequencia_compra * tempo_vida', 'BRL', 'finance', 5000, 3000, 1500, 800, 400, 'higher_is_better', 'non_cumulative', true),
('FLUXO_CAIXA', 'Fluxo de Caixa Livre', 'Free Cash Flow', 'Dinheiro disponível após despesas operacionais', 'receita_operacional - despesas_operacionais - capex', 'BRL', 'finance', 50000, 30000, 15000, 5000, 0, 'higher_is_better', 'non_cumulative', true),
('INADIMPLENCIA', 'Taxa de Inadimplência', 'Default Rate', 'Percentual de pagamentos atrasados', '(valor_atrasado / valor_total) * 100', '%', 'finance', 1, 3, 5, 8, 10, 'lower_is_better', 'non_cumulative', true),
('GIRO_ESTOQUE', 'Giro de Estoque', 'Inventory Turnover', 'Quantas vezes o estoque é renovado no período', 'custo_vendas / estoque_medio', 'x', 'finance', 12, 8, 6, 4, 2, 'higher_is_better', 'non_cumulative', false),
('TICKET_MEDIO', 'Ticket Médio', 'Average Ticket', 'Valor médio por venda', 'receita_total / quantidade_vendas', 'BRL', 'commercial', 500, 350, 200, 100, 50, 'higher_is_better', 'non_cumulative', true),
('TAXA_CONVERSAO', 'Taxa de Conversão', 'Conversion Rate', 'Percentual de leads que viram clientes', '(clientes / leads) * 100', '%', 'commercial', 10, 7, 5, 3, 1, 'higher_is_better', 'non_cumulative', true),
('NOVOS_CLIENTES', 'Novos Clientes', 'New Customers', 'Quantidade de novos clientes no período', 'COUNT(DISTINCT cliente)', 'unidade', 'commercial', 50, 35, 20, 10, 5, 'higher_is_better', 'non_cumulative', true),
('TAXA_RETENCAO', 'Taxa de Retenção', 'Retention Rate', 'Percentual de clientes que continuam ativos', '(clientes_ativos / clientes_iniciais) * 100', '%', 'commercial', 95, 90, 85, 75, 60, 'higher_is_better', 'non_cumulative', true),
('CHURN', 'Taxa de Churn', 'Churn Rate', 'Percentual de clientes perdidos no período', '(clientes_perdidos / clientes_iniciais) * 100', '%', 'commercial', 1, 3, 5, 8, 10, 'lower_is_better', 'non_cumulative', true),
('CICLO_VENDAS', 'Ciclo de Vendas', 'Sales Cycle', 'Tempo médio para fechar uma venda', 'AVG(data_fechamento - data_primeiro_contato)', 'dias', 'commercial', 7, 14, 21, 30, 45, 'lower_is_better', 'non_cumulative', false),
('RECEITA_RECORRENTE', 'Receita Recorrente Mensal (MRR)', 'Monthly Recurring Revenue', 'Receita previsível e recorrente mensal', 'SUM(valor_contrato / duracao_meses)', 'BRL', 'commercial', 80000, 50000, 30000, 15000, 5000, 'higher_is_better', 'non_cumulative', true),
('ROAS', 'Retorno sobre Gastos em Ads', 'Return on Ad Spend', 'Receita gerada por real investido em anúncios', 'receita_ads / gastos_ads', 'x', 'marketing', 5, 4, 3, 2, 1, 'higher_is_better', 'non_cumulative', true),
('CUSTO_LEAD', 'Custo por Lead', 'Cost per Lead', 'Custo médio para gerar um lead', 'gastos_marketing / leads_gerados', 'BRL', 'marketing', 10, 20, 35, 50, 75, 'lower_is_better', 'non_cumulative', true),
('TRAFFO_ORGANICO', 'Tráfego Orgânico', 'Organic Traffic', 'Visitantes vindos de busca orgânica', 'COUNT(sessoes WHERE fonte = organic)', 'visitas', 'marketing', 10000, 7000, 5000, 2000, 500, 'higher_is_better', 'cumulative', false),
('ENGAGEMENT', 'Taxa de Engajamento', 'Engagement Rate', 'Interações sobre total de seguidores', '(likes + comentarios + shares) / seguidores * 100', '%', 'marketing', 5, 3, 2, 1, 0.5, 'higher_is_better', 'non_cumulative', false),
('NPS', 'Net Promoter Score', 'Net Promoter Score', 'Índice de satisfação e recomendação', '%promotores - %detratores', 'pontos', 'marketing', 75, 50, 30, 10, -10, 'higher_is_better', 'non_cumulative', true),
('OTIF', 'Entregas no Prazo e Completas', 'On-Time In-Full', 'Percentual de entregas perfeitas', '(entregas_perfeitas / total_entregas) * 100', '%', 'operations', 98, 95, 90, 85, 75, 'higher_is_better', 'non_cumulative', true),
('LEAD_TIME', 'Tempo de Entrega', 'Lead Time', 'Tempo médio do pedido à entrega', 'AVG(data_entrega - data_pedido)', 'dias', 'operations', 2, 3, 5, 7, 10, 'lower_is_better', 'non_cumulative', true),
('CUSTO_OPERACIONAL', 'Custo Operacional', 'Operating Cost', 'Total de custos operacionais do período', 'SUM(custos_operacionais)', 'BRL', 'operations', 30000, 45000, 60000, 80000, 100000, 'lower_is_better', 'cumulative', true),
('PRODUTIVIDADE', 'Produtividade por Colaborador', 'Productivity per Employee', 'Receita dividida pelo número de colaboradores', 'receita_total / numero_colaboradores', 'BRL', 'operations', 50000, 35000, 25000, 15000, 8000, 'higher_is_better', 'non_cumulative', false),
('TAXA_ERRO', 'Taxa de Erro', 'Error Rate', 'Percentual de pedidos com erro', '(pedidos_erro / total_pedidos) * 100', '%', 'operations', 0.5, 1, 2, 4, 6, 'lower_is_better', 'non_cumulative', true),
('TURNOVER', 'Taxa de Rotatividade', 'Turnover Rate', 'Percentual de colaboradores que saíram', '(saidas / media_colaboradores) * 100', '%', 'people', 3, 5, 8, 12, 15, 'lower_is_better', 'non_cumulative', true),
('ENPS', 'Employee Net Promoter Score', 'Employee NPS', 'Satisfação dos colaboradores com a empresa', '%promotores - %detratores', 'pontos', 'people', 60, 40, 20, 0, -20, 'higher_is_better', 'non_cumulative', true),
('ABSENTEISMO', 'Taxa de Absenteísmo', 'Absenteeism Rate', 'Percentual de faltas injustificadas', '(dias_faltas / dias_uteis_totais) * 100', '%', 'people', 1, 2, 3, 5, 7, 'lower_is_better', 'non_cumulative', false),
('TEMPO_CONTRATACAO', 'Tempo de Contratação', 'Time to Hire', 'Dias médios para preencher uma vaga', 'AVG(data_admissao - data_abertura_vaga)', 'dias', 'people', 15, 21, 30, 45, 60, 'lower_is_better', 'non_cumulative', false),
('SATISFAO_EQUIPE', 'Satisfação da Equipe', 'Team Satisfaction', 'Nota média de satisfação em pesquisas internas', 'AVG(nota_pesquisa)', 'pontos', 'people', 8.5, 7.5, 6.5, 5.5, 4, 'higher_is_better', 'non_cumulative', false)
ON CONFLICT (code) DO NOTHING;

-- 2. CHALLENGES (10)
INSERT INTO library_challenges (code, title, title_en, description, domain, severity_default, related_kpi_codes, symptom_codes, is_active) VALUES
('CHURN_ALTO', 'Churn Elevado', 'High Churn', 'Clientes estão cancelando em ritmo acima do saudável', 'commercial', 4, ARRAY['CHURN', 'TAXA_RETENCAO', 'LTV'], ARRAY['queda_receita', 'reclamacoes'], true),
('MARGEM_BAIXA', 'Margem de Lucro Baixa', 'Low Profit Margin', 'Margem líquida abaixo do benchmark do setor', 'finance', 4, ARRAY['MARGEM_LIQUIDA', 'CUSTO_OPERACIONAL'], ARRAY['custos_altos', 'preco_baixo'], true),
('CAC_ELEVADO', 'Custo de Aquisição Alto', 'High CAC', 'Custo para adquirir clientes está subindo', 'commercial', 3, ARRAY['CUSTO_AQUISICAO', 'ROAS'], ARRAY['leads_caros', 'conversao_baixa'], true),
('CONVERSAO_BAIXA', 'Conversão de Vendas Baixa', 'Low Sales Conversion', 'Poucos leads estão virando clientes', 'commercial', 3, ARRAY['TAXA_CONVERSAO', 'CICLO_VENDAS'], ARRAY['leads_nao_qualificados', 'followup_fraco'], true),
('INADIMPLENCIA_ALTA', 'Inadimplência Elevada', 'High Default Rate', 'Muitos clientes não estão pagando em dia', 'finance', 4, ARRAY['INADIMPLENCIA', 'FLUXO_CAIXA'], ARRAY['atrasos_pagamento', 'cobranca_fraca'], true),
('ENTREGA_ATRASADA', 'Entregas Atrasadas', 'Late Deliveries', 'Percentual de entregas no prazo está caindo', 'operations', 3, ARRAY['OTIF', 'LEAD_TIME'], ARRAY['reclamacoes_entrega', 'logistica'], true),
('ROTATIVIDADE_ALTA', 'Alta Rotatividade', 'High Turnover', 'Muitos colaboradores estão saindo da empresa', 'people', 3, ARRAY['TURNOVER', 'ENPS', 'TEMPO_CONTRATACAO'], ARRAY['clima_ruim', 'salarios_baixos'], true),
('ROAS_BAIXO', 'ROAS Insatisfatório', 'Low ROAS', 'Retorno sobre investimento em marketing está baixo', 'marketing', 3, ARRAY['ROAS', 'CUSTO_LEAD'], ARRAY['anuncios_ineficazes', 'publico_errado'], true),
('FLUXO_CAIXA_NEGATIVO', 'Fluxo de Caixa Negativo', 'Negative Cash Flow', 'Despesas superando receitas no curto prazo', 'finance', 5, ARRAY['FLUXO_CAIXA', 'RECEITA_MENSAL'], ARRAY['contas_pagar', 'recebimentos_atrasados'], true),
('TICKET_BAIXO', 'Ticket Médio Baixo', 'Low Average Ticket', 'Valor médio das vendas está abaixo do esperado', 'commercial', 2, ARRAY['TICKET_MEDIO', 'RECEITA_MENSAL'], ARRAY['vendas_simples', 'sem_upsell'], true)
ON CONFLICT (code) DO NOTHING;

-- 3. LEVERS (12)
INSERT INTO library_levers (code, title, title_en, description, category, target_kpi_code, impact_level, is_active) VALUES
('UPSELL_CROSS', 'Upsell e Cross-sell', 'Upsell and Cross-sell', 'Oferecer produtos complementares e upgrades para base existente', 'commercial', 'TICKET_MEDIO', 'high', true),
('PROGRAMA_FIDELIDADE', 'Programa de Fidelidade', 'Loyalty Program', 'Criar programa de recompensas para retenção de clientes', 'commercial', 'TAXA_RETENCAO', 'high', true),
('AUTOMACAO_MARKETING', 'Automação de Marketing', 'Marketing Automation', 'Implementar fluxos automáticos de nutrição e conversão', 'marketing', 'TAXA_CONVERSAO', 'high', true),
('OTIMIZACAO_PRECO', 'Otimização de Preços', 'Price Optimization', 'Revisar tabela de preços com base em elasticidade e concorrência', 'finance', 'MARGEM_LIQUIDA', 'high', true),
('REDUCAO_CUSTOS', 'Redução de Custos Operacionais', 'Cost Reduction', 'Identificar e eliminar desperdícios operacionais', 'operations', 'CUSTO_OPERACIONAL', 'high', true),
('NEGOCIACAO_FORNECEDORES', 'Negociação com Fornecedores', 'Supplier Negotiation', 'Renegociar prazos, preços e condições com fornecedores', 'finance', 'FLUXO_CAIXA', 'medium', true),
('TREINAMENTO_VENDAS', 'Treinamento de Vendas', 'Sales Training', 'Capacitar equipe de vendas em técnicas de fechamento', 'commercial', 'TAXA_CONVERSAO', 'medium', true),
('MELHORIA_ONBOARDING', 'Melhoria no Onboarding', 'Onboarding Improvement', 'Otimizar experiência inicial do novo cliente', 'commercial', 'CHURN', 'high', true),
('SEGMENTACAO_CLIENTES', 'Segmentação de Clientes', 'Customer Segmentation', 'Dividir base em grupos para ações personalizadas', 'commercial', 'CAC', 'medium', true),
('CULTURA_FEEDBACK', 'Cultura de Feedback', 'Feedback Culture', 'Implementar ciclos regulares de feedback com equipe', 'people', 'ENPS', 'medium', true),
('PLANO_CARREIRA', 'Plano de Carreira', 'Career Path', 'Criar trilha de crescimento profissional clara', 'people', 'TURNOVER', 'high', true),
('ANALISE_CONCORRENCIA', 'Análise de Concorrência', 'Competitor Analysis', 'Mapear preços, ofertas e posicionamento dos concorrentes', 'marketing', 'ROAS', 'medium', true)
ON CONFLICT (code) DO NOTHING;

-- 4. DIAGNÓSTICOS (6)
INSERT INTO library_diagnoses (code, technical_term, technical_term_en, cause, cause_en, effect, effect_en, why, why_en, challenge_code, domain, severity_default, is_active) VALUES
('DIAG_CHURN_RETENCAO', 'Deficiência em Retenção', 'Retention Deficiency', 'Falta de programa estruturado de retenção e acompanhamento pós-venda', 'Lack of structured retention program and post-sale follow-up', 'Perda de receita recorrente e aumento do CAC para reposição', 'Loss of recurring revenue and increased CAC for replacement', 'Empresa foca em aquisição mas negligencia a base existente', 'Company focuses on acquisition but neglects existing base', 'CHURN_ALTO', 'commercial', 'high', true),
('DIAG_MARGEM_CUSTOS', 'Compressão de Margem', 'Margin Compression', 'Custos operacionais crescendo acima da receita', 'Operating costs growing faster than revenue', 'Redução do lucro líquido e capacidade de investimento', 'Reduced net profit and investment capacity', 'Falta de controle de custos e precificação inadequada', 'Lack of cost control and inadequate pricing', 'MARGEM_BAIXA', 'finance', 'high', true),
('DIAG_CAC_INEFICIENCIA', 'Ineficiência em Aquisição', 'Acquisition Inefficiency', 'Canais de aquisição não otimizados e público mal segmentado', 'Unoptimized acquisition channels and poorly segmented audience', 'Custo elevado por cliente novo e ROI baixo', 'High cost per new customer and low ROI', 'Investimento em marketing sem análise de performance', 'Marketing investment without performance analysis', 'CAC_ELEVADO', 'commercial', 'medium', true),
('DIAG_INADIMPLENCIA_COBRANCA', 'Falha em Cobrança', 'Collection Failure', 'Processo de cobrança fraco e falta de política de crédito', 'Weak collection process and lack of credit policy', 'Fluxo de caixa comprometido e aumento de perdas', 'Compromised cash flow and increased losses', 'Empresa não prioriza gestão de recebíveis', 'Company does not prioritize receivables management', 'INADIMPLENCIA_ALTA', 'finance', 'high', true),
('DIAG_LOGISTICA', 'Ineficiência Logística', 'Logistics Inefficiency', 'Processos de entrega não otimizados e falta de tracking', 'Unoptimized delivery processes and lack of tracking', 'Insatisfação do cliente e custos extras com devoluções', 'Customer dissatisfaction and extra return costs', 'Logística tratada como custo, não como diferencial', 'Logistics treated as cost, not as differentiator', 'ENTREGA_ATRASADA', 'operations', 'medium', true),
('DIAG_CLIMA_ORGANIZACIONAL', 'Clima Organizacional', 'Organizational Climate Issues', 'Falta de comunicação transparente e oportunidades de crescimento', 'Lack of transparent communication and growth opportunities', 'Perda de talentos e queda de produtividade', 'Talent loss and productivity drop', 'Gestão não investe em desenvolvimento de pessoas', 'Management does not invest in people development', 'ROTATIVIDADE_ALTA', 'people', 'medium', true)
ON CONFLICT (code) DO NOTHING;

-- 5. ORGANIZAÇÃO DEMO
INSERT INTO organizations (id, name, slug, cnpj, city, state, email, subscription_tier, is_active)
SELECT '00000000-0000-0000-0000-000000000001', 'Tech PME Ltda', 'tech-pme', '12.345.678/0001-90', 'São Paulo', 'SP', 'contato@techpme.com.br', 'pro', true
WHERE NOT EXISTS (SELECT 1 FROM organizations WHERE id = '00000000-0000-0000-0000-000000000001');

-- 6. RADAR ITEMS (7: 4 riscos + 3 oportunidades)
INSERT INTO radar_items (id, organization_id, type, title, diagnosis_code, severity, domain, status, detected_at, ai_confidence_score, custom_notes) VALUES
('00000000-0000-0000-0000-000000000020', '00000000-0000-0000-0000-000000000001', 'risk', 'Churn de Clientes Premium', 'DIAG_CHURN_RETENCAO', 'high', 'commercial', 'detected', NOW() - INTERVAL '3 days', 0.85, '5 clientes premium não renovaram nos últimos 30 dias'),
('00000000-0000-0000-0000-000000000021', '00000000-0000-0000-0000-000000000001', 'risk', 'Margem Comprimida por Custos', 'DIAG_MARGEM_CUSTOS', 'high', 'finance', 'detected', NOW() - INTERVAL '5 days', 0.92, 'Custos operacionais subiram 15% sem aumento proporcional de receita'),
('00000000-0000-0000-0000-000000000022', '00000000-0000-0000-0000-000000000001', 'risk', 'Inadimplência em Alta', 'DIAG_INADIMPLENCIA_COBRANCA', 'critical', 'finance', 'acknowledged', NOW() - INTERVAL '7 days', 0.95, 'Inadimplência atingiu 8.5%, acima do limite de 5%'),
('00000000-0000-0000-0000-000000000023', '00000000-0000-0000-0000-000000000001', 'risk', 'Rotatividade de Desenvolvedores', 'DIAG_CLIMA_ORGANIZACIONAL', 'medium', 'people', 'detected', NOW() - INTERVAL '10 days', 0.78, '2 desenvolvedores seniores saíram no último trimestre'),
('00000000-0000-0000-0000-000000000030', '00000000-0000-0000-0000-000000000001', 'opportunity', 'Upsell para Base Existente', null, 'medium', 'commercial', 'detected', NOW() - INTERVAL '2 days', 0.82, '60% dos clientes usam apenas 1 serviço - potencial para cross-sell'),
('00000000-0000-0000-0000-000000000031', '00000000-0000-0000-0000-000000000001', 'opportunity', 'Otimização de Preços', null, 'high', 'finance', 'acknowledged', NOW() - INTERVAL '4 days', 0.88, 'Análise mostra que preços estão 12% abaixo da concorrência'),
('00000000-0000-0000-0000-000000000032', '00000000-0000-0000-0000-000000000001', 'opportunity', 'Automação de Marketing', null, 'medium', 'marketing', 'detected', NOW() - INTERVAL '1 day', 0.75, 'Implementar fluxos de nutrição pode aumentar conversão em 25%')
ON CONFLICT (id) DO NOTHING;

-- 7. ACTION ITEMS (6)
INSERT INTO action_items (id, organization_id, radar_item_id, title, status, priority, notes, created_at, updated_at, due_date) VALUES
('00000000-0000-0000-0000-000000000040', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000020', 'Criar programa de fidelidade para clientes premium', 'in_progress', 1, 'Desenvolver programa com benefícios exclusivos', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day', NOW() + INTERVAL '30 days'),
('00000000-0000-0000-0000-000000000041', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000020', 'Implementar pesquisa de satisfação NPS', 'pending', 2, 'Enviar pesquisa para todos os clientes ativos', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day', NOW() + INTERVAL '14 days'),
('00000000-0000-0000-0000-000000000042', '00000000-0000-0000-0000-000000000021', 'Revisar tabela de preços com base em custos', 'in_progress', 1, 'Analisar custos por produto e ajustar margens', NOW() - INTERVAL '4 days', NOW() - INTERVAL '2 days', NOW() + INTERVAL '21 days'),
('00000000-0000-0000-0000-000000000043', '00000000-0000-0000-0000-000000000022', 'Implementar política de cobrança automática', 'pending', 1, 'Configurar lembretes automáticos de vencimento', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days', NOW() + INTERVAL '7 days'),
('00000000-0000-0000-0000-000000000044', '00000000-0000-0000-0000-000000000030', 'Criar campanha de cross-sell para base ativa', 'pending', 2, 'Oferecer serviço complementar para clientes existentes', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day', NOW() + INTERVAL '45 days'),
('00000000-0000-0000-0000-000000000045', '00000000-0000-0000-0000-000000000031', 'Benchmark de preços com 5 concorrentes', 'completed', 3, 'Pesquisa de preços da concorrência concluída', NOW() - INTERVAL '10 days', NOW() - INTERVAL '1 day', NOW() - INTERVAL '2 days')
ON CONFLICT (id) DO NOTHING;

-- 8. ORGANIZATION KPIs (12 KPIs × 3 meses = 36)
INSERT INTO organization_kpis (kpi_id, organization_id, period_start, period_end, period_key, value, currency, data_source, is_verified, created_at, updated_at) VALUES
('RECEITA_MENSAL', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 72000, 'BRL', 'manual_input', true, NOW(), NOW()),
('MARGEM_LIQUIDA', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 14.5, 'BRL', 'manual_input', true, NOW(), NOW()),
('TICKET_MEDIO', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 185, 'BRL', 'manual_input', true, NOW(), NOW()),
('TAXA_CONVERSAO', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 4.2, '%', 'manual_input', true, NOW(), NOW()),
('CHURN', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 6.8, '%', 'manual_input', true, NOW(), NOW()),
('CUSTO_AQUISICAO', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 145, 'BRL', 'manual_input', true, NOW(), NOW()),
('NOVOS_CLIENTES', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 28, 'unidade', 'manual_input', true, NOW(), NOW()),
('INADIMPLENCIA', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 5.2, '%', 'manual_input', true, NOW(), NOW()),
('OTIF', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 91, '%', 'manual_input', true, NOW(), NOW()),
('TURNOVER', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 4.5, '%', 'manual_input', true, NOW(), NOW()),
('ROAS', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 2.8, 'x', 'manual_input', true, NOW(), NOW()),
('NPS', '00000000-0000-0000-0000-000000000001', '2026-01-01', '2026-01-31', '2026-01', 42, 'pontos', 'manual_input', true, NOW(), NOW()),
('RECEITA_MENSAL', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 78000, 'BRL', 'manual_input', true, NOW(), NOW()),
('MARGEM_LIQUIDA', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 15.2, 'BRL', 'manual_input', true, NOW(), NOW()),
('TICKET_MEDIO', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 195, 'BRL', 'manual_input', true, NOW(), NOW()),
('TAXA_CONVERSAO', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 4.8, '%', 'manual_input', true, NOW(), NOW()),
('CHURN', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 5.9, '%', 'manual_input', true, NOW(), NOW()),
('CUSTO_AQUISICAO', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 138, 'BRL', 'manual_input', true, NOW(), NOW()),
('NOVOS_CLIENTES', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 35, 'unidade', 'manual_input', true, NOW(), NOW()),
('INADIMPLENCIA', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 6.1, '%', 'manual_input', true, NOW(), NOW()),
('OTIF', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 89, '%', 'manual_input', true, NOW(), NOW()),
('TURNOVER', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 5.2, '%', 'manual_input', true, NOW(), NOW()),
('ROAS', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 3.1, 'x', 'manual_input', true, NOW(), NOW()),
('NPS', '00000000-0000-0000-0000-000000000001', '2026-02-01', '2026-02-28', '2026-02', 45, 'pontos', 'manual_input', true, NOW(), NOW()),
('RECEITA_MENSAL', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 85000, 'BRL', 'manual_input', true, NOW(), NOW()),
('MARGEM_LIQUIDA', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 16.8, 'BRL', 'manual_input', true, NOW(), NOW()),
('TICKET_MEDIO', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 210, 'BRL', 'manual_input', true, NOW(), NOW()),
('TAXA_CONVERSAO', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 5.5, '%', 'manual_input', true, NOW(), NOW()),
('CHURN', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 5.1, '%', 'manual_input', true, NOW(), NOW()),
('CUSTO_AQUISICAO', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 125, 'BRL', 'manual_input', true, NOW(), NOW()),
('NOVOS_CLIENTES', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 42, 'unidade', 'manual_input', true, NOW(), NOW()),
('INADIMPLENCIA', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 8.5, '%', 'manual_input', true, NOW(), NOW()),
('OTIF', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 87, '%', 'manual_input', true, NOW(), NOW()),
('TURNOVER', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 6.8, '%', 'manual_input', true, NOW(), NOW()),
('ROAS', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 3.4, 'x', 'manual_input', true, NOW(), NOW()),
('NPS', '00000000-0000-0000-0000-000000000001', '2026-03-01', '2026-03-31', '2026-03', 48, 'pontos', 'manual_input', true, NOW(), NOW())
ON CONFLICT DO NOTHING;

-- VERIFICAR
SELECT '=== SEED COMPLETO - RESUMO ===' as status;
SELECT 'library_kpis' as tabela, COUNT(*) as total FROM library_kpis
UNION ALL SELECT 'library_challenges', COUNT(*) FROM library_challenges
UNION ALL SELECT 'library_diagnoses', COUNT(*) FROM library_diagnoses
UNION ALL SELECT 'library_levers', COUNT(*) FROM library_levers
UNION ALL SELECT 'organizations', COUNT(*) FROM organizations
UNION ALL SELECT 'radar_items', COUNT(*) FROM radar_items
UNION ALL SELECT 'action_items', COUNT(*) FROM action_items
UNION ALL SELECT 'organization_kpis', COUNT(*) FROM organization_kpis
ORDER BY tabela;
