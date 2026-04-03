# 💡 Base de Conhecimento — SuperRelatórios

> **Índice interno** — Documentação para equipe e agentes.

---

## Propósito

Este é o repositório de conhecimento interno do projeto. Contém informações técnicas, decisões arquiteturais, e documentação operacional que não é destinada ao público externo.

---

## 📁 Estrutura

```
knowledge/
├── project-memory.md         # Single source of truth
├── architecture/             # Arquitetura técnica
│   ├── tech-stack.md
│   └── clean-architecture.md
├── decisions/                # ADR - Architecture Decision Records
├── runbooks/                 # Procedimentos operacionais
├── onboarding/               # Onboarding de desenvolvedores
├── changelog.md             # Histórico de mudanças
└── ARCHIVED/                # 📦 Documentos obsoletos
```

---

## 📄 Arquivos Ativos

| Arquivo             | Descrição                                           |
| ------------------- | --------------------------------------------------- |
| `project-memory.md` | Visão geral: identidade, stack, entidades, domínios |
| `CHANGELOG.md`      | Histórico de versões e mudanças                     |
| `CONTRIBUTING.md`   | Guia de contribuição                                |

---

## 🏷️ Status de Documentos

Todos os documentos devem ter frontmatter:

```yaml
---
title: Nome do Documento
version: 1.0.0
updated: 2026-04-04
status: active | deprecated | archived
---
```

---

## 🔧 Para Desenvolvedores

### Onboarding

Ver [onboarding/dev-onboarding.md](./onboarding/) para setup de ambiente.

### Decisões Arquiteturais

Ver [decisions/](./decisions/) para entender o porquê das decisões técnicas.

### Runbooks

Ver [runbooks/](./runbooks/) para procedimentos operacionais.

---

## 📦 Arquivo (Leitura Apenas)

Documentos obsoletos foram movidos para [ARCHIVED/](./ARCHIVED/).

Não delete arquivos do ARCHIVED — eles servem como histórico e referência.

---

## ✍️ Atualizando Documentação

1. Use nomenclatura `kebab-case` (ex: `my-document.md`)
2. Adicione frontmatter com metadados
3. Atualize este índice após mudanças
4. Para ADRs, siga o formato em `decisions/`

---

_Última atualização: 2026-04-04_
