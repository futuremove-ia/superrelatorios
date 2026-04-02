#!/bin/bash
# Execute migrations using Supabase CLI
# Requires: SUPABASE_ACCESS_TOKEN environment variable

echo "=== Supabase Migration Runner ==="
echo ""

# Check if token is set
if [ -z "$SUPABASE_ACCESS_TOKEN" ]; then
    echo "Error: SUPABASE_ACCESS_TOKEN not set"
    echo ""
    echo "To set up:"
    echo "1. Go to https://supabase.com/dashboard/account/tokens"
    echo "2. Create a new personal access token"
    echo "3. Run: export SUPABASE_ACCESS_TOKEN='your_token_here'"
    echo "4. Run this script again"
    exit 1
fi

# Link to project (if not already linked)
echo "Project ID: jmekjpytugnetkzphxno"

# Execute migrations
echo ""
echo "Executing EXPAND_KPIS_WITH_SECTORS.sql..."
npx supabase db push --db-url "postgresql://postgres:[YOUR-PASSWORD]@db.jmekjpytugnetkzphxno.supabase.co:5432/postgres" --sql-file supabase/migrations/EXPAND_KPIS_WITH_SECTORS.sql

echo ""
echo "Executing CREATE_AGENT_MEMORY.sql..."
npx supabase db push --db-url "postgresql://postgres:[YOUR-PASSWORD]@db.jmekjpytugnetkzphxno.supabase.co:5432/postgres" --sql-file supabase/migrations/CREATE_AGENT_MEMORY.sql

echo ""
echo "=== Done ==="
