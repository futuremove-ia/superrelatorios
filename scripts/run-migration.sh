#!/bin/bash
# Execute SQL via Supabase RPC or direct query

echo "=== Executing KPI expansion SQL ==="
echo ""

# Set supabase access token
export SUPABASE_ACCESS_TOKEN="sbp_2655bc5f39ec723b7635bc2d8aa7904d23de63ce"

# Execute SQL via supabase db query
echo "Running SQL file..."
npx supabase@latest db query -f supabase/migrations/20260402_expand_kpis_additional.sql --linked --output table

echo ""
echo "=== Verification ==="
npx supabase@latest db query "SELECT sector, COUNT(*) as count FROM library_kpis WHERE is_active = true GROUP BY sector ORDER BY count DESC" --linked --output table

echo ""
echo "=== Total KPIs ==="
npx supabase@latest db query "SELECT COUNT(*) as total FROM library_kpis WHERE is_active = true" --linked --output table
