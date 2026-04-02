SELECT code, title, unit FROM library_kpis 
WHERE is_active = true 
AND (code LIKE 'TECH%' OR code LIKE 'RET%' OR code LIKE 'SERV%')
ORDER BY code;
