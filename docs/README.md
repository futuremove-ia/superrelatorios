# 📚 Documentação SuperRelatórios

> **Índice Central** — Este é o ponto de entrada para toda a documentação do projeto.

---

## Visão Geral

**SuperRelatórios** — GPS Estratégico para PMEs que transforma dados em decisões inteligentes através de IA e analytics avançado.

| 属性   | Valor                                          |
| ------ | ---------------------------------------------- |
| Versão | 1.0.9-alpha                                    |
| Stack  | React 18, Vite 5, TypeScript, Supabase, Vercel |
| Status | 🟢 Produção                                    |

---

## 🎯 Comece Aqui

| Você é...             | Vá para...                                        |
| --------------------- | ------------------------------------------------- |
| Novo no projeto       | [Getting Started](./getting-started.md)           |
| Desenvolvedor         | [Contributor Guide](./contribute/contributing.md) |
| Usuário da plataforma | [User Guide](./user-guides/dashboard.md)          |
| Ops/DevOps            | [Deployment Guide](./deployment/vercel.md)        |

---

## 📁 Estrutura de Documentação

### 🌐 **docs/** — Documentação Pública

Para usuários externos, clientes, parceiros.

```
docs/
├── getting-started.md       # Primeiros passos
├── quick-start.md           # Setup rápido
├── concepts/                # Conceitos fundamentais
│   ├── architecture-overview.md
│   ├── domain-model.md
│   └── terminology.md
├── api/                     # Referência de API
├── user-guides/             # Guias de uso
├── integrations/            # Integrações
├── deployment/               # Deploy guides
└── contribute/              # Como contribuir
```

### 💡 **knowledge/** — Base de Conhecimento

Para equipe interna e agentes.

```
knowledge/
├── README.md               # ← Você está aqui
├── project-memory.md        # Single source of truth
├── architecture/            # Arquitetura técnica
├── decisions/               # ADR (Architecture Decision Records)
├── runbooks/                # Operações
├── onboarding/              # Onboarding devs
├── changelog.md             # Histórico de mudanças
└── ARCHIVED/                # 📦 Docs obsoletas (leitura apenas)
    ├── specs/
    ├── audits/
    ├── plans/
    └── legacy/
```

---

## 📖 Documentos Principais

### Conceitos Fundamentais

| Documento                                                    | Descrição                                                              |
| ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [Architecture Overview](./concepts/architecture-overview.md) | Visão geral da arquitetura Clean Architecture + DDD                    |
| [Domain Model](./concepts/domain-model.md)                   | Domínios: Finance, Commercial, Marketing, Operations, People, Strategy |
| [Terminology](./concepts/terminology.md)                     | Glossário de termos técnicos                                           |

### Referência Técnica

| Documento                                                    | Descrição                  |
| ------------------------------------------------------------ | -------------------------- |
| [Software Architecture](./concepts/architecture-overview.md) | Arquitetura detalhada      |
| [API Reference](./api/)                                      | Endpoints e autenticação   |
| [Tech Stack](./architecture/tech-stack.md)                   | Stack tecnológica completa |

### Operações

| Documento                                                        | Descrição                  |
| ---------------------------------------------------------------- | -------------------------- |
| [Deployment Guide](./deployment/vercel.md)                       | Deploy na Vercel           |
| [Performance Monitoring](./operations/performance-monitoring.md) | Monitoramento              |
| [Runbooks](./runbooks/)                                          | Procedimentos operacionais |

---

## 🏷️ Legenda de Status

| Badge             | Significado                  |
| ----------------- | ---------------------------- |
| 🟢 **Active**     | Válido, usar como referência |
| 🟡 **Update**     | Precisa de atualização       |
| 🔴 **Deprecated** | Obsoleto, evitar uso         |
| ⚪ **Archived**   | Histórico, apenas referência |

---

## 🔗 Links Úteis

- **Repositório:** https://github.com/futuremove/superrelatorios
- **Deploy:** https://superrelatorios.com.br
- **Docs Antigas (legado):** [knowledge/ARCHIVED/](./ARCHIVED/)

---

## ✍️ Contribuindo

1. Siga os [Padrões de Documentação](./contribute/contributing.md)
2. Use nomenclatura `kebab-case` para arquivos
3. Adicione frontmatter com `status` e `version`
4. Atualize este índice após mudanças significativas

---

_Última atualização: 2026-04-04 | Versão: 1.0_
