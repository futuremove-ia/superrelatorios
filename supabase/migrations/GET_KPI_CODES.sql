SELECT code, title, unit, domain, sector FROM library_kpis 
WHERE is_active = true 
ORDER BY sector, code 
LIMIT 50;
