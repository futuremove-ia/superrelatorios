# Seed Executado - 2026-04-01

## Status: ✅ SUCESSO

## Dados Carregados

- 37 KPIs (finance, commercial, marketing, operations, people)
- 15 Challenges (problemas comuns de PMEs)
- 19 Diagnoses (6 riscos + 3 oportunidades + 10 existentes)
- 21 Levers (alavancas estratégicas)
- 1 Organização demo (Tech PME Ltda)
- 7 Radar Items (4 riscos + 3 oportunidades)
- 6 Action Items (vinculados aos radar items)
- 36 Organization KPIs (12 KPIs × 3 meses: Jan-Mar 2026)

## Scripts

- `supabase/migrations/SEED_COMPLETO_V4_FINAL.sql` - Script completo em 3 partes
- Executado em 3 scripts sequenciais para evitar erros de FK

## Lições Aprendidas (Constraints do Banco)

1. `library_kpis.code` - unique constraint
2. `profiles.user_id` - FK para auth.users (não inserir manualmente)
3. `reports.user_id` - FK para auth.users (não inserir manualmente)
4. `radar_items.priority_score` - coluna gerada (não inserir)
5. `radar_items.impact_code` - FK para library_impacts (usar códigos existentes)
6. `radar_items.timeframe_code` - FK para library_timeframes (usar códigos existentes)
7. `radar_items.complexity_code` - FK para library_complexities (usar códigos existentes)
8. `radar_items.diagnosis_code` - NOT NULL (até oportunidades precisam)
9. `organization_kpis.kpi_id` - UUID (usar subselect para resolver code → id)

## Códigos de Referência Existentes no Banco

### library_impacts

- AUMENTO_10_RECEITA, AUMENTO_15_CONVERSAO, AUMENTO_15_NPS, AUMENTO_20_TICKET
- AUMENTO_25_RECEITA, AUMENTO_30_CONVERSAO, AUMENTO_30_ENGAJAMENTO
- AUMENTO_40_TICKET, AUMENTO_50_CONVERSAO, AUMENTO_50_RECEITA
- MELHORA_20_FLUXO_CAIXA, REDUCAO_20_CAC, REDUCAO_25_CHURN
- REDUCAO_30_INADIMPLENCIA, REDUCAO_35_CAC, REDUCAO_50_CHURN, REDUCAO_50_ENTREGA

### library_timeframes

- CURTO_15, CURTO_30, IMEDIATO, MEDIO_60, MEDIO_90, LONGO_180, LONGO_365

### library_complexities

- BAIXA, MEDIA, ALTA
