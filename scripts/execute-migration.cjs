const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jmekjpytugnetkzphxno.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4';

const supabase = createClient(supabaseUrl, supabaseKey);

async function executeSQL(sql) {
  const { data, error } = await supabase.rpc('exec_sql', { query: sql });
  if (error) {
    console.error('Error:', error.message);
    return false;
  }
  console.log('Success:', data);
  return true;
}

async function main() {
  console.log('=== Executing EXPAND_KPIS_WITH_SECTORS.sql ===\n');
  
  // Add columns
  await executeSQL(`
    ALTER TABLE library_kpis 
    ADD COLUMN IF NOT EXISTS sector VARCHAR(50),
    ADD COLUMN IF NOT EXISTS business_model VARCHAR(50),
    ADD COLUMN IF NOT EXISTS niche VARCHAR(100);
  `);
  
  // Create indexes
  await executeSQL(`
    CREATE INDEX IF NOT EXISTS idx_library_kpis_sector ON library_kpis(sector);
    CREATE INDEX IF NOT EXISTS idx_library_kpis_niche ON library_kpis(niche);
    CREATE INDEX IF NOT EXISTS idx_library_kpis_business_model ON library_kpis(business_model);
  `);
  
  console.log('\n=== Creating agent_memory table ===\n');
  
  await executeSQL(`
    CREATE TABLE IF NOT EXISTS agent_memory (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      session_id VARCHAR(255) NOT NULL,
      memory_type VARCHAR(50) NOT NULL CHECK (memory_type IN ('knowledge', 'skill', 'task', 'user_model')),
      content JSONB NOT NULL,
      relevance_score DECIMAL(3,2) DEFAULT 0.5,
      tags TEXT[] DEFAULT '{}',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      access_count INTEGER DEFAULT 0,
      metadata JSONB DEFAULT '{}'
    );
  `);
  
  await executeSQL(`
    CREATE INDEX IF NOT EXISTS idx_agent_memory_session ON agent_memory(session_id);
    CREATE INDEX IF NOT EXISTS idx_agent_memory_type ON agent_memory(memory_type);
    CREATE INDEX IF NOT EXISTS idx_agent_memory_tags ON agent_memory USING GIN(tags);
  `);
  
  console.log('\n=== Verifying tables ===\n');
  
  const { data: kpiCount } = await supabase
    .from('library_kpis')
    .select('*', { count: 'exact', head: true });
  console.log(`Total KPIs in library_kpis: ${kpiCount}`);
  
  const { data: agentMemCount } = await supabase
    .from('agent_memory')
    .select('*', { count: 'exact', head: true });
  console.log(`Total rows in agent_memory: ${agentMemCount}`);
  
  console.log('\n=== Done! ===');
}

main().catch(console.error);
