# Encontrar PostgreSQL e executar script
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

Read-Host "Pressione qualquer tecla para continuar..."
