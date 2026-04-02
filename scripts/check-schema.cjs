const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jmekjpytugnetkzphxno.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzczNjg0MCwiZXhwIjoyMDg5MzEyODQwLCJyb2xlIjoic2VydmljZV9yb2xlIn0.BJccM6VZCpJhyz4JZ5mTdp2I6p3WzVbGKfFjTqZjLI';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

async function executeSQL(sql) {
  try {
    const { data, error } = await supabase.rpc('exec_sql', { query: sql });
    if (error) {
      console.log('RPC Error (expected - function may not exist):', error.message);
      return false;
    }
    console.log('Success:', data);
    return true;
  } catch (e) {
    console.log('Exception:', e.message);
    return false;
  }
}

async function createTableWithAPI() {
  console.log('\n=== Trying direct table creation via API ===\n');
  
  // First check if tables exist
  const { data: tables, error: listError } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public')
    .in('table_name', ['library_kpis', 'agent_memory']);
  
  if (listError) {
    console.log('Error listing tables:', listError.message);
    return;
  }
  
  console.log('Existing tables:', tables?.map(t => t.table_name) || []);
  
  // Check library_kpis structure
  const { data: kpiColumns } = await supabase
    .from('information_schema.columns')
    .select('column_name, data_type')
    .eq('table_name', 'library_kpis');
  
  console.log('\nlibrary_kpis columns:', kpiColumns?.map(c => c.column_name) || []);
  
  // Check if sector column exists
  const hasSector = kpiColumns?.some(c => c.column_name === 'sector');
  console.log('Has sector column:', hasSector);
  
  if (!hasSector) {
    console.log('\nNeed to add columns...');
  }
}

async function main() {
  console.log('=== Checking Supabase Schema ===\n');
  
  try {
    await createTableWithAPI();
    
    // Try to count KPIs
    const { count, error } = await supabase
      .from('library_kpis')
      .select('*', { count: 'exact', head: true });
    
    console.log('\n=== library_kpis count:', count, '===');
    
    if (count && count > 50) {
      console.log('KPIs already expanded!');
    } else {
      console.log('KPIs need expansion');
    }
    
  } catch (e) {
    console.error('Error:', e.message);
  }
}

main();
