SELECT 
  COUNT(*) as total_kpis,
  COUNT(DISTINCT sector) as sectors,
  COUNT(DISTINCT domain) as domains
FROM library_kpis 
WHERE is_active = true;
