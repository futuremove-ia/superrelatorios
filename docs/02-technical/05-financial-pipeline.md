# 🔗 Pipeline de Dados Financeiros

## Visão Geral

Este documento descreve a arquitetura do pipeline de upload e processamento de dados financeiros do SuperRelatórios.

## Arquitetura do Pipeline

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐     ┌────────────┐
│   Arquivo   │────▶│  Unstructured │────▶│ Financial Parser │────▶│    KPIs    │
│ (PDF/XLSX)  │     │     API       │     │   (TypeScript)   │     │ (Database) │
└─────────────┘     └──────────────┘     └─────────────────┘     └────────────┘
```

## Fluxo de Dados

### 1. Upload (FinancialDocumentPipeline)

- Arquivo é carregado para Supabase Storage
- URL signed é gerada para acesso seguro

### 2. Extração (UnstructuredService)

- Chama Unstructured API com strategy: auto/hi_res/fast
- Extrai elementos: Table, NarrativeText, Title, etc.
- Detecta tabelas via `metadata.table_as_json`

### 3. Parsing (FinancialDataParserService)

- Detecta tipo de documento: bank_statement, dre, cash_flow, balance_sheet
- Mapeia colunas para KPIs automaticamente
- Processa datas e valores (R$, negativos)

### 4. Persistência (user_metrics)

- KPIs são salvos na tabela user_metrics
- Período, organização e confiança são registrados

## Componentes

### Services

| Serviço                         | Responsabilidade                     |
| ------------------------------- | ------------------------------------ |
| `unstructuredService.ts`        | Extrai elementos de documentos       |
| `financialDataParserService.ts` | Parse dados tabulares para KPIs      |
| `financialDocumentPipeline.ts`  | Orquestra o fluxo completo           |
| `fileParserService.ts`          | Parser básico (CSV, XLSX, PDF, DOCX) |

### Hooks

| Hook                            | Uso                            |
| ------------------------------- | ------------------------------ |
| `useFinancialDataUpload.ts`     | Upload de dados tabulares      |
| `useFinancialDocumentUpload.ts` | Upload de documentos completos |

### Types

| Tipo                  | Descrição                                  |
| --------------------- | ------------------------------------------ |
| `financial-parser.ts` | FinancialDocumentType, ParsingResult, etc. |

## Tipos de Arquivo Suportados

| Categoria     | Extensões                | OCR | Tabelas |
| ------------- | ------------------------ | --- | ------- |
| Documentos    | .pdf, .doc, .docx, .txt  | ✅  | ✅      |
| Planilhas     | .xls, .xlsx, .csv        | ❌  | ✅      |
| Apresentações | .ppt, .pptx              | ❌  | ✅      |
| E-mails       | .eml, .msg               | ❌  | ❌      |
| Web           | .html, .json             | ❌  | ✅      |
| Imagens       | .png, .jpg, .jpeg, .tiff | ✅  | ❌      |

## Detecção de Tipo de Documento

O parser detecta automaticamente:

1. **bank_statement** - Extrato bancário
   - Colunas: Data, Descrição, Valor, Saldo
   - Padrões: "extrato", "conta", valores negativos

2. **dre** - Demonstração de Resultados
   - Colunas: Período, Receita, Despesa, Lucro
   - Padrões: "receita", "despesa", "dre", "lucro"

3. **cash_flow** - Fluxo de Caixa
   - Colunas: Data, Entrada, Saída, Saldo
   - Padrões: "caixa", "fluxo", "entrada", "saída"

4. **balance_sheet** - Balanço Patrimonial
   - Colunas: Ativo, Passivo, Patrimônio
   - Padrões: "ativo", "passivo", "balanço"

## Testes

### Executar Testes

```bash
npm test -- --run src/services/__tests__/financialDataParserService.test.ts
npm test -- --run src/services/__tests__/financialDocumentPipeline.test.ts
```

### Cobertura

| Arquivo                       | Testes | Cobertura Alvo |
| ----------------------------- | ------ | -------------- |
| financialDataParserService.ts | 18     | > 80%          |
| financialDocumentPipeline.ts  | 9      | > 70%          |

## Variáveis de Ambiente

```env
UNSTRUCTURED_API_KEY=...
UNSTRUCTURED_API_URL=https://api.unstructuredapp.io/general/v0/general
```

## Referências

- [Unstructured API Docs](https://docs.unstructured.io/)
- [TEST_PLAN_FINANCIAL_UPLOAD.md](./TEST_PLAN_FINANCIAL_UPLOAD.md)

---

**Última atualização:** 03/04/2026  
**Mantenedor:** Development Team
