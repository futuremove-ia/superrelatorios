# Script para executar hierarquia organizacional

## Como executar:

### Via PowerShell (Recomendado):
```powershell
# Encontrar PostgreSQL
$psqlPath = Get-ChildItem -Path "C:\Program Files\PostgreSQL*" -Recurse -Filter "psql.exe" -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName

if ($psqlPath) {
    Write-Host "Executando script com PostgreSQL em: $psqlPath"
    & $psqlPath -h localhost -U postgres -d superrelatorios -f CREATE_ORGANIZATION_HIERARCHY.sql
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "===================================="
        Write-Host "Script executado com sucesso!"
        Write-Host "Hierarquia organizacional criada."
        Write-Host "===================================="
    } else {
        Write-Host "===================================="
        Write-Host "ERRO: Falha na execucao do script"
        Write-Host "Verifique o log acima."
        Write-Host "===================================="
    }
} else {
    Write-Host "ERRO: PostgreSQL não encontrado!"
    Write-Host "Verifique se PostgreSQL está instalado."
}
```

### Via CMD:
```cmd
@echo off
REM Tentar encontrar PostgreSQL no PATH
where psql >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo PostgreSQL nao encontrado no PATH.
    echo Por favor, instale PostgreSQL ou adicione ao PATH.
    pause
    exit /b 1
)

psql -h localhost -U postgres -d superrelatorios -f CREATE_ORGANIZATION_HIERARCHY.sql

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================
    echo Script executado com sucesso!
    echo Hierarquia organizacional criada.
    echo ====================================
) else (
    echo.
    echo ====================================
    echo ERRO: Falha na execucao do script
    echo Verifique o log acima.
    echo ====================================
)

pause
```

## Antes de executar:
1. Verifique se PostgreSQL está instalado
2. Verifique se o serviço está rodando
3. Verifique as credenciais (usuário: postgres, senha: configurada)

## Após executar:
1. Verifique se as tabelas foram criadas:
   ```sql
   \dt business_units
   \dt departments
   \dt teams
   \dt memberships
   \dt roles_permissions
   \dt audit_logs
   ```

2. Verifique se as RLS policies foram criadas:
   ```sql
   SELECT schemaname, tablename, policyname 
   FROM pg_policies 
   WHERE schemaname = 'public';
   ```
