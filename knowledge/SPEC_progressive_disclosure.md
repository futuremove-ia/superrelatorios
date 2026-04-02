# Revelação Progressiva de Complexidade — SuperRelatórios

**Data:** 2026-04-02
**Versão:** 1.0

---

## Princípio Central

O sistema revela complexidade em 4 camadas progressivas, evitando sobrecarga cognitiva. Cada camada adiciona objetos de interface conforme a maturidade e necessidade do usuário.

---

## GPS Estratégico — 4 Conceitos que o Usuário Aprende

O usuário precisa dominar apenas 4 conceitos para navegar no sistema:

| Conceito      | Componentes    | Propósito                                                      |
| ------------- | -------------- | -------------------------------------------------------------- |
| **PAINEL**    | KPICard[]      | "Onde estou agora" — indicadores atuais do negócio             |
| **ALERTAS**   | RadarCard[]    | "O que precisa de atenção" — riscos e oportunidades detectados |
| **AÇÕES**     | ActionCard[]   | "O que fazer" — plano de ação imediato                         |
| **HISTÓRICO** | SnapshotCard[] | "De onde vim" — evolução temporal                              |

---

## As 4 Camadas

### Camada 1 — Núcleo (sempre visível)

Componentes obrigatórios disponíveis para todo usuário:

- **KPICard** — indicadores de desempenho com tendência e status
- **RadarCard** — alertas de riscos e oportunidades
- **ActionCard** — plano de ação imediato

**Regra:** Usuário que entra no sistema pela primeira vez vê apenas estes 3 componentes.

---

### Camada 2 — Contexto (ao clicar)

Elementos revelados quando o usuário interage:

- **RadarSideDrawer** — ao clicar em RadarCard: diagnóstico completo, impacto estimado, alavancas sugeridas
- **Histórico do KPI** — ao clicar em KPICard: evolução temporal, benchmarks, metas
- **Detalhes da Ação** — ao clicar em ActionCard: subtarefas, responsável, prazo

**Regra:** Nunca expor dados da Camada 2 na tela inicial. Usuário deve explorar.

---

### Camada 3 — Módulos Opcionais

Módulos ativados conforme contexto (setor, tamanho, maturidade):

| Módulo           | Ativado por                                     | Componentes              |
| ---------------- | ----------------------------------------------- | ------------------------ |
| **Riscos**       | Empresas com +20 funcionários ou setor regulado | RiskCard[], Matriz 10x10 |
| **Fornecedores** | Setor industrial, +50 fornecedores              | SupplierCard[]           |
| **Clientes**     | B2B ou +100 clientes ativos                     | ClientCard[]             |
| **RH / Custos**  | +10 funcionários                                | EmployeeCard[]           |
| **Previsões**    | Maturidade de dados alta (6+ meses)             | ForecastCard[]           |
| **SWOT**         | Planejamento estratégico ativo                  | SwotCard[]               |

---

### Camada 4 — Configuração

Acessível apenas para administradores e owners:

- **Blueprint** — wizard de estratégia empresarial
- **Hierarquia** — departamentos, equipes, membros
- **Fontes de Dados** — conexões, documentos, extração
- **Permissões** — RBAC, logs de auditoria

**Regra:** Não expor na navegação principal. Acessar via configurações.

---

## Mapeamento de Modos

Controlado por `organization_ui_preferences.display_mode`:

| Modo           | Camadas Visíveis                      | Perfil                                 |
| -------------- | ------------------------------------- | -------------------------------------- |
| **simples**    | 1 (Núcleo)                            | Usuário básico, primeiro acesso        |
| **completo**   | 1 + 2 + 3 (Núcleo, Contexto, Módulos) | Usuário operacional, gestor            |
| **enterprise** | 1 + 2 + 3 + 4 (todas)                 | Admin, owner, planejamento estratégico |

---

## Ativação por Contexto

### Por Setor Industrial

| Setor             | Módulos Ativados                 |
| ----------------- | -------------------------------- |
| Industrial/Fabril | Fornecedores, RH, Custos, Riscos |
| Vendas/Varejo     | Clientes, Previsões, RH          |
| Tecnologia        | Clientes, RH, Previsões          |
| Serviços          | Clientes, RH, SWOT               |
| Saúde             | Riscos, RH, Fornecedores         |

### Por Tamanho

| Funcionários | Complexidade                                 |
| ------------ | -------------------------------------------- |
| 1-10         | modo simples, 1-3 KPIs                       |
| 11-50        | modo completo, 5-10 KPIs                     |
| 51-200       | modo completo, todos KPIs, módulos opcionais |
| 200+         | modo enterprise, todos módulos               |

### Por Maturidade de Dados

| Métricas  | Exibição                                        |
| --------- | ----------------------------------------------- |
| < 3 meses | Tendências desabilitadas, comparações limitadas |
| 3-6 meses | Tendências básicas, benchmark interno           |
| 6+ meses  | Previsões, benchmarks avançados, cenários       |

---

## Fluxo de Ativação

```
Usuário entra → Modo simples (Camada 1)
    │
    ├─→ Clica em RadarCard → Drawer abre (Camada 2)
    │
    ├─→ Configura setor → Módulos relevantes (Camada 3)
    │
    └─→ Torna-se admin → Configurações (Camada 4)
```

---

## Campos em organization_ui_preferences

| Campo             | Tipo    | Padrão    | Descrição                                          |
| ----------------- | ------- | --------- | -------------------------------------------------- |
| display_mode      | text    | 'simples' | Modo de operação (simples/completo/enterprise)     |
| ui_language       | text    | 'pt-BR'   | Idioma da interface                                |
| glossary_level    | text    | 'tecnico' | Nível do glossário (simples/intermediario/tecnico) |
| show_radar        | boolean | true      | Exibir radar de alertas                            |
| show_risks        | boolean | false     | Exibir gestão de riscos                            |
| show_suppliers    | boolean | false     | Exibir módulo de fornecedores                      |
| show_clients      | boolean | false     | Exibir módulo de clientes                          |
| show_hr           | boolean | false     | Exibir módulo de RH                                |
| show_forecasts    | boolean | false     | Exibir módulo de previsões                         |
| show_swot         | boolean | false     | Exibir análise SWOT                                |
| show_knowledge    | boolean | false     | Exibir base de conhecimento                        |
| show_data_sources | boolean | false     | Exibir fontes de dados                             |
| show_hierarchy    | boolean | false     | Exibir hierarquia organizacional                   |
| notify_critical   | boolean | true      | Notificar alertas críticos                         |
| notify_high       | boolean | true      | Notificar alertas altos                            |
| notify_medium     | boolean | false     | Notificar alertas médios                           |
| notify_weekly     | boolean | false     | Notificar resumo semanal                           |
| notify_monthly    | boolean | false     | Notificar relatório mensal                         |

---

## Regras de Interface

1. **Sem duplicatas:** Componentes da Camada 1 nunca se repetem em Camada 3
2. **Navegação progressiva:** Camada 3 só aparece na sidebar após ativação
3. **Transições suaves:** Animações de 200ms entre camadas
4. **Override manual:** Usuário pode forçar modo superior nas configurações
5. **Sem termos em inglês:** Toda interface em PT-BR puro
6. **Glossário adaptável:** Conforme glossary_level, substituir termos técnicos por equivalentes acessíveis

---

_Documento atualizado: 2026-04-02_
_Baseado em: SPEC_ui_entity_model.md, requirements.md_
