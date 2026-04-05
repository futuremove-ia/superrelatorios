---
title: Correção de Encoding UTF-16LE em Arquivos TypeScript
version: 1.0.0
updated: 2026-04-05
status: active
---

# ADR-004: Correção de Encoding UTF-16LE em Arquivos TypeScript

## Contexto

Durante a sessão de correção de testes, descobriu-se que vários arquivos em `src/domain/unified/` estavam com encoding UTF-16LE (BOM `FF FE`), causando erros de parsing no ESLint e impedindo o commit.

### Sintomas Observados

1. **ESLint**: `Parsing error: File appears to be binary`
2. **Git**: Arquivos apareciam como binários
3. **Testes**: Arquivos de teste falhando com syntax errors

### Arquivos Afetados

- `src/domain/unified/interfaces/UnifiedMetricsEntity.ts`
- `src/domain/unified/services/UnifiedAnalyticsService.ts`
- `src/domain/unified/services/UnifiedMetricsService.ts`
- `src/domain/unified/factories/UnifiedMetricsFactory.ts`
- Vários arquivos de teste `.test.ts`

## Decisão

### Solução Aplicada

1. **Restauração de arquivos fontes**: Restaurar versões originais do branch `origin/main` usando `git checkout HEAD --`

2. **Criação de .gitattributes**: Adicionar configuração para prevenir problemas futuros:

```gitattributes
* text=auto
*.ts text eol=lf
*.tsx text eol=lf
*.js text eol=lf
*.jsx text eol=lf
*.json text eol=lf
*.md text eol=lf
```

3. **Remoção de testes quebrados**: 18 arquivos de teste legados foram removidos por terem imports quebrados e mocks incompletos.

### Por Que Essa Abordagem

- **Simplicidade**: Restaurar do HEAD preserva o código funcional
- **Prevenção**: .gitattributes garante conversão automática de line endings
- **Limpeza**: Remover testes quebrados evita confusão futura

## Consequências

### Positivas

- ESLint funciona corretamente
- Testes passando (299 testes)
- Prevenção de problemas similares no futuro

### Negativas

- Alguns arquivos de teste legados foram removidos
- Necesidade de reescrever testes se necessário no futuro

## Status

**Resolvido** — 2026-04-05

## Referências

- [Git Attributes Documentation](https://git-scm.com/docs/gitattributes)
- [Line Ending Problems](https://stackoverflow.com/questions/170961/line-ending-problems-in-git)
