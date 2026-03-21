@echo off
echo Executando script de criacao da hierarquia organizacional...
"C:\Program Files\PostgreSQL\16\bin\psql.exe" -h localhost -U postgres -d superrelatorios -f CREATE_ORGANIZATION_HIERARCHY.sql

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
