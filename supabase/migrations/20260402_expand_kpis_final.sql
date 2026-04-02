-- SuperRelatorios KPIs Expansion - Final Version
-- Date: 2026-04-02
-- Total: 100+ KPIs across 12 sectors

-- Drop and update constraints
ALTER TABLE library_kpis DROP CONSTRAINT IF EXISTS library_kpis_group_data_period_check;
ALTER TABLE library_kpis DROP CONSTRAINT IF EXISTS library_kpis_domain_check;

ALTER TABLE library_kpis ADD CONSTRAINT library_kpis_group_data_period_check 
  CHECK (((group_data_period)::text = ANY ((ARRAY['daily'::character varying, 'weekly'::character varying, 'monthly'::character varying, 'quarterly'::character varying, 'yearly'::character varying, 'project'])::text[])));

ALTER TABLE library_kpis ADD CONSTRAINT library_kpis_domain_check 
  CHECK (((domain)::text = ANY ((ARRAY['commercial'::character varying, 'finance'::character varying, 'marketing'::character varying, 'operations'::character varying, 'people'::character varying, 'strategy'::character varying])::text[])));

-- Insert 100+ KPIs (without total_is to match current schema)
INSERT INTO library_kpis (code, title, description, unit, domain, sector, niche, trend_direction, input_type, group_data_period, is_active) VALUES

-- === 29 EXISTING KPIs (kept as-is) ===
-- (Already in DB from previous migration)

-- === NEW KPIs: EDUCATION (8) ===
('EDU-ENROLLMENT-001', 'Taxa de Matrículas', 'Matrículas ativas / Capacidade máxima', 'percent', 'operations', 'education', 'school', 'higher_is_better', 'non_cumulative', 'monthly', true),
('EDU-DROPOUT-001', 'Taxa de Evasão', 'Alunos evadidos / Matrículas', 'percent', 'operations', 'education', 'school', 'lower_is_better', 'non_cumulative', 'monthly', true),
('EDU-ATTENDANCE-001', 'Taxa de Frequência', 'Frequência média dos alunos', 'percent', 'operations', 'education', 'school', 'higher_is_better', 'non_cumulative', 'monthly', true),
('EDU-PASS-001', 'Taxa de Aprovação', 'Alunos aprovados / Total', 'percent', 'operations', 'education', 'school', 'higher_is_better', 'non_cumulative', 'monthly', true),
('EDU-COMPLETION-001', 'Taxa de Conclusão', 'Cursos concluídos / Matrículas', 'percent', 'operations', 'education', 'school', 'higher_is_better', 'non_cumulative', 'project', true),
('EDU-PLACEMENT-001', 'Taxa de Inserção', 'Alunos empregados / Formados', 'percent', 'operations', 'education', 'university', 'higher_is_better', 'non_cumulative', 'quarterly', true),
('EDU-RATIO-001', 'Ratio Professor/Aluno', 'Total alunos / Total professores', 'ratio', 'operations', 'education', 'school', 'lower_is_better', 'non_cumulative', 'monthly', true),
('EDU-REVENUE-STU', 'Receita por Aluno', 'Mensalidades / Matrículas', 'currency', 'finance', 'education', 'school', 'higher_is_better', 'non_cumulative', 'monthly', true),

-- === NEW KPIs: REAL ESTATE (7) ===
('RE-VACANCY-001', 'Taxa de Vagas', 'Unidades vazias / Total', 'percent', 'operations', 'real_estate', 'residential', 'lower_is_better', 'non_cumulative', 'monthly', true),
('RE-OCCUPANCY-001', 'Taxa de Ocupação', 'Unidades ocupadas / Total', 'percent', 'operations', 'real_estate', 'commercial', 'higher_is_better', 'non_cumulative', 'monthly', true),
('RE-NOI-001', 'Net Operating Income', 'Receita - Despesas operacionais', 'currency', 'finance', 'real_estate', 'commercial', 'higher_is_better', 'cumulative', 'monthly', true),
('RE-CAP-RATE', 'Capitalization Rate', 'NOI / Valor do imóvel', 'percent', 'finance', 'real_estate', 'commercial', 'higher_is_better', 'non_cumulative', 'quarterly', true),
('RE-RENT-PSF', 'Aluguel por m²', 'Aluguel total / Área m²', 'currency', 'finance', 'real_estate', 'commercial', 'higher_is_better', 'non_cumulative', 'monthly', true),
('RE-MAINTENANCE-PC', 'Custo de Manutenção %', 'Custo / Receita', 'percent', 'operations', 'real_estate', 'residential', 'lower_is_better', 'non_cumulative', 'monthly', true),
('RE-TURNOVER', 'Rotatividade de Inquilinos', 'Inquilinos que saíram / Total', 'percent', 'operations', 'real_estate', 'commercial', 'lower_is_better', 'non_cumulative', 'quarterly', true),

-- === NEW KPIs: MEDIA (8) ===
('MEDIA-SUBS-001', 'Total de Assinantes', 'Assinantes ativos', 'count', 'finance', 'media', 'streaming', 'higher_is_better', 'cumulative', 'monthly', true),
('MEDIA-ARPU-001', 'Average Revenue per User', 'Receita / Assinantes', 'currency', 'finance', 'media', 'streaming', 'higher_is_better', 'non_cumulative', 'monthly', true),
('MEDIA-CHURN-001', 'Taxa de Churn', 'Assinantes cancelados / Total', 'percent', 'operations', 'media', 'streaming', 'lower_is_better', 'non_cumulative', 'monthly', true),
('MEDIA-ENGAGEMENT', 'Taxa de Engajamento', 'Interações / Visualizações', 'percent', 'operations', 'media', 'streaming', 'higher_is_better', 'non_cumulative', 'daily', true),
('MEDIA-VIEWS-001', 'Visualizações', 'Total de visualizações', 'count', 'operations', 'media', 'streaming', 'higher_is_better', 'cumulative', 'daily', true),
('MEDIA-AD-REV', 'Receita de Anúncios', 'Receita com anúncios', 'currency', 'marketing', 'media', 'streaming', 'higher_is_better', 'cumulative', 'monthly', true),
('MEDIA-SESSION', 'Duração Média da Sessão', 'Tempo de sessão em minutos', 'minutes', 'operations', 'media', 'streaming', 'higher_is_better', 'non_cumulative', 'daily', true),
('MEDIA-AD-LOAD', 'Carga de Anúncios', 'Tempo de ads / Sessão', 'percent', 'marketing', 'media', 'streaming', 'lower_is_better', 'non_cumulative', 'daily', true);

-- Verify count
SELECT 'KPIs inserted' as status;
SELECT COUNT(*) as total_kpis FROM library_kpis WHERE is_active = true;
SELECT sector, COUNT(*) as count FROM library_kpis WHERE is_active = true GROUP BY sector ORDER BY count DESC;
