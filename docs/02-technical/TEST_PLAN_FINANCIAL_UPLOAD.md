# 🧪 Plano de Testes - Sistema de Upload Financeiro

## Visão Geral

Este documento define a estratégia de testes TDD pragmático para o pipeline de upload de dados financeiros.

## Stack de Testes

- **Framework:** Vitest (configurado em `package.json`)
- **Mocks:** vitest/mocks
- **Cobertura:** Vitest UI (`npm run test:ui`)

## Arquitetura de Testes

### 1. Unit Tests (src/services/**tests**/)

| Arquivo                              | Cobertura                   |
| ------------------------------------ | --------------------------- |
| `financialDataParserService.test.ts` | Parser de dados financeiros |
| `financialDocumentPipeline.test.ts`  | Pipeline completo           |

### 2. Testes do Parser (financialDataParserService.test.ts)

#### Detecção de Tipo de Documento

- ✅ `should detect bank_statement from bank extract format`
- ✅ `should detect dre (Demonstração de Resultados)`
- ✅ `should detect cash_flow`
- ✅ `should return unknown for unrecognized format`

#### Parsing de Valores

- ✅ `should parse Brazilian currency format (R$ 1.000,00)`
- ✅ `should handle negative values in parentheses (100)`
- ✅ `should handle plain numbers`

#### Parsing de Datas

- ✅ `should parse DD/MM/YYYY format`
- ✅ `should parse YYYY-MM-DD format`

#### Mapeamento de KPIs

- ✅ `should map receita columns to revenue KPIs`
- ✅ `should map saldo_caixa to cash_balance`

#### Edge Cases

- ✅ `should handle empty file`
- ✅ `should handle file with only headers`
- ✅ `should add warning for low confidence columns`
- ✅ `should handle special characters in headers`

#### Text Input

- ✅ `should parse CSV text input`
- ✅ `should handle tab-delimited text`

### 3. Testes do Pipeline (financialDocumentPipeline.test.ts)

#### Processamento de Arquivos

- ✅ `should process a CSV file successfully`
- ✅ `should handle errors when upload fails`

#### Processamento de Storage

- ✅ `should process a file from storage successfully`
- ✅ `should handle empty elements from Unstructured`

#### Progress Tracking

- ✅ `should call onProgress callback during processing`

#### Error Handling

- ✅ `should handle Unstructured API errors gracefully`
- ✅ `should add warnings when no tables are detected`

#### Validação de Tipos de Arquivo

- ✅ `should validate PDF files`
- ✅ `should validate Excel files`
- ✅ `should reject unsupported file types`
- ✅ `should reject files larger than 50MB`

## Estrutura TDD Pragático

### Red → Green → Refactor

1. **Red:** Escreva o teste primeiro (falhando)
2. **Green:** Implemente o código mínima para passar
3. **Refactor:** Mejore o código mantendo testes passando

### Quando NÃO escrever testes:

- Scripts únicos
- Configurações simples
- Código de UI sem lógica de negócio

### Quando ESCREVER testes:

- **Lógica de negócio:** Parsers, validadores, transformers
- **Serviços:** APIs externas, Supabase, Unstructured
- **Hooks:** Estados complexos, side effects
- **Edge cases:** Nulos, vazios, formatos inválidos

## Executando os Testes

```bash
# Executar todos os testes
npm test

# Executar com UI
npm run test:ui

# Executar em modo watch
npm test -- --watch

# Executar arquivo específico
npm test -- financialDataParserService

# Coverage
npm test -- --coverage
```

## Métricas de Cobertura Alvo

| Componente                     | Meta  |
| ------------------------------ | ----- |
| financialDataParserService     | > 80% |
| financialDocumentPipeline      | > 70% |
| Hooks (useFinancialDataUpload) | > 60% |

## Próximos Testes (Backlog)

1. Testes de integração com Supabase real
2. Testes E2E do fluxo de upload
3. Testes de performance (arquivos grandes)
4. Testes de segurança (validação de input)

---

**Última atualização:** 03/04/2026  
**Mantenedor:** QA / Desenvolvimento
