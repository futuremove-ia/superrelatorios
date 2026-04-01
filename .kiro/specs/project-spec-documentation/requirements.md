# Documento de Requisitos — SuperRelatórios

## Introdução

SuperRelatórios é uma plataforma SaaS de analytics estratégico voltada para Pequenas e Médias Empresas (PMEs). A plataforma funciona como um "GPS Estratégico" que transforma dados brutos em decisões inteligentes por meio de inteligência artificial, detecção automática de desafios de negócio e recomendações acionáveis.

O sistema é composto por um monorepo com duas aplicações principais:

- **apps/web**: Frontend React + TypeScript + Vite, hospedado na Vercel
- **apps/api**: Backend com domínios de negócio (HR, Supply Chain, Tax), integrado ao Supabase (PostgreSQL + Auth + Storage + Edge Functions)

A plataforma suporta três idiomas nativamente (PT-BR, EN, ES) e segue princípios de Clean Architecture, Domain-Driven Design (DDD) e Privacy by Design.

---

## Glossário

- **Sistema**: A plataforma SuperRelatórios como um todo
- **Plataforma**: Sinônimo de Sistema
- **Frontend**: Aplicação web React em apps/web
- **API**: Camada de serviços em apps/api e Supabase Edge Functions
- **Supabase**: Backend-as-a-Service (PostgreSQL + Auth + Storage + Realtime)
- **PME**: Pequena e Média Empresa — público-alvo principal
- **Organização**: Entidade que representa uma empresa cadastrada na plataforma
- **Usuário**: Pessoa autenticada com acesso à plataforma
- **KPI**: Key Performance Indicator — indicador-chave de desempenho
- **Threshold**: Conjunto de valores crítico/alerta/bom para um KPI
- **Benchmark**: Valor de referência para comparação de KPIs
- **Desafio**: Problema de negócio detectado automaticamente pelo motor estratégico
- **Alavanca**: Ação estratégica recomendada para resolver um desafio
- **Radar**: Sistema de monitoramento contínuo que detecta e exibe alertas de negócio
- **Radar_Item**: Alerta individual gerado pelo Radar
- **Action_Item**: Tarefa criada a partir de um Radar_Item para execução no Plano de Ação
- **Motor_Estratégico**: Componente de IA que detecta desafios e gera recomendações
- **Modo_Demo**: Estado da aplicação com dados fictícios, sem necessidade de credenciais reais
- **RBAC**: Role-Based Access Control — controle de acesso baseado em papéis
- **i18n**: Internacionalização — suporte a múltiplos idiomas
- **LGPD**: Lei Geral de Proteção de Dados (Brasil)
- **GDPR**: General Data Protection Regulation (Europa)
- **PII**: Personally Identifiable Information — informação pessoal identificável
- **Edge_Function**: Função serverless executada na borda da rede (Vercel/Supabase)
- **AI_Proxy**: Camada intermediária que protege chaves de API de modelos de linguagem
- **Gemini**: Modelo de linguagem do Google utilizado para análises de IA
- **Runway**: KPI que indica quantos meses a empresa sobrevive sem nova receita
- **Burn_Rate**: KPI que indica a velocidade de consumo de caixa mensal
- **CAC**: Custo de Aquisição de Cliente
- **LTV**: Lifetime Value — valor total gerado por um cliente ao longo do relacionamento
- **Churn_Rate**: Taxa de cancelamento de clientes
- **Confidence_Score**: Pontuação de confiança da IA na detecção de um desafio (0.0–1.0)
- **Severity**: Nível de severidade de um alerta (critical, high, medium, low, info)
- **Domain**: Área de negócio (finance, sales, marketing, operations, people, strategy)
- **Período**: Intervalo de tempo para análise de KPIs (ex: "2024-03")
- **Slug**: Identificador textual único de uma organização em formato URL-friendly
- **Unstructured**: Serviço de extração de conteúdo de documentos não estruturados (PDFs, imagens, DOCX)
- **Parser_Semântico**: Componente de IA (Gemini) que interpreta o conteúdo extraído e mapeia entidades para campos de KPIs
- **Document_Pipeline**: Fluxo sequencial de processamento de documentos: queued → extracting → parsing → mapping → completed/failed
- **Data_Source**: Conexão configurada com uma fonte de dados externa (Google Drive, OneDrive, ERP, CRM, upload direto)
- **Knowledge_Base**: Repositório imutável (append-only) do histórico completo de inteligência estratégica gerada pela plataforma
- **Knowledge_Snapshot**: Registro periódico do estado completo da inteligência estratégica de uma organização em um dado período
- **Company_Blueprint**: Cadastro mestre com o DNA completo da empresa — identidade, mercado, operação, produtos, objetivos e contexto financeiro
- **Blueprint_Completeness_Score**: Pontuação (0–100%) que indica o grau de preenchimento do Company Blueprint
- **AI_Narrative**: Resumo executivo em linguagem natural gerado pelo Gemini para um Knowledge Snapshot
- **Extraction_Confidence**: Score (0–100%) que indica a confiança do parser semântico na extração de dados de um documento
- **Source_Document_Id**: Referência rastreável ao documento de origem de um valor de KPI extraído automaticamente

---

## Requisitos

### Requisito 1: Autenticação e Gestão de Sessão

**User Story:** Como usuário de uma PME, quero me autenticar de forma segura na plataforma, para que meus dados e os da minha empresa estejam protegidos.

#### Critérios de Aceitação

1. WHEN um usuário fornece credenciais válidas de e-mail e senha, THE Sistema SHALL autenticar o usuário e iniciar uma sessão com token JWT válido.
2. WHEN um usuário fornece credenciais inválidas, THEN THE Sistema SHALL retornar mensagem de erro sem revelar qual campo está incorreto e registrar a tentativa falha.
3. WHEN um token JWT expira, THE Sistema SHALL redirecionar o usuário para a tela de login sem perda de contexto de navegação.
4. WHEN um usuário solicita logout, THE Sistema SHALL invalidar o token de sessão e redirecionar para a tela de login.
5. THE Sistema SHALL suportar autenticação via Supabase Auth com suporte a OAuth (Google) como provedor externo.
6. WHILE uma sessão está ativa, THE Sistema SHALL renovar automaticamente o token antes da expiração sem interromper a experiência do usuário.
7. IF múltiplas tentativas de login falham consecutivamente para o mesmo e-mail, THEN THE Sistema SHALL aplicar bloqueio temporário e notificar o usuário.
8. THE Sistema SHALL persistir a sessão entre recarregamentos de página usando armazenamento seguro no cliente.

---

### Requisito 2: Gestão de Organizações

**User Story:** Como administrador de uma PME, quero gerenciar minha organização na plataforma, para que minha empresa tenha um espaço isolado e configurado corretamente.

#### Critérios de Aceitação

1. THE Sistema SHALL associar cada usuário a exatamente uma organização no modelo 1-usuário:1-organização para o escopo de PMEs.
2. WHEN um novo usuário se cadastra, THE Sistema SHALL criar automaticamente um perfil vinculado à organização correspondente via tabela `profiles`.
3. THE Sistema SHALL expor os dados da organização ativa (id, name, slug, createdAt) via hook `useCurrentOrganization` para todos os componentes que necessitem de contexto organizacional.
4. WHILE o usuário está em Modo_Demo, THE Sistema SHALL retornar uma organização fictícia com id `demo-org-id` sem realizar chamadas ao banco de dados.
5. IF a organização de um usuário não for encontrada no banco de dados, THEN THE Sistema SHALL retornar `null` e exibir estado de erro adequado na interface.
6. THE Sistema SHALL garantir isolamento total de dados entre organizações distintas por meio de Row Level Security (RLS) no Supabase.
7. WHEN uma organização é criada, THE Sistema SHALL gerar automaticamente um `slug` único em formato URL-friendly a partir do nome da organização.

---

### Requisito 3: Controle de Acesso Baseado em Papéis (RBAC)

**User Story:** Como administrador, quero definir papéis e permissões para os membros da minha equipe, para que cada pessoa acesse apenas o que é necessário para sua função.

#### Critérios de Aceitação

1. THE Sistema SHALL suportar quatro papéis de usuário: `admin`, `manager`, `analyst` e `viewer`, com hierarquia de permissões crescente.
2. THE Sistema SHALL garantir que usuários com papel `viewer` possam apenas visualizar dashboards e relatórios, sem criar, editar ou excluir recursos.
3. THE Sistema SHALL garantir que usuários com papel `analyst` possam criar e editar relatórios e KPIs, mas não gerenciar usuários.
4. THE Sistema SHALL garantir que usuários com papel `manager` possam gerenciar dados e relatórios do seu departamento e visualizar dados de equipes subordinadas.
5. THE Sistema SHALL garantir que usuários com papel `admin` tenham acesso total a todas as funcionalidades, incluindo gestão de usuários, configurações do sistema e auditoria.
6. WHEN um usuário tenta acessar um recurso sem permissão suficiente, THEN THE Sistema SHALL retornar HTTP 403 com mensagem padronizada e registrar a tentativa.
7. THE Sistema SHALL verificar permissões em cada requisição à API, não apenas no carregamento inicial da interface.
8. WHERE a funcionalidade de auditoria está habilitada, THE Sistema SHALL registrar todas as ações de criação, edição e exclusão com identificação do usuário, timestamp e recurso afetado.

---

### Requisito 4: Biblioteca de KPIs

**User Story:** Como gestor de PME, quero acessar uma biblioteca de KPIs pré-configurados relevantes para o meu negócio, para que eu não precise criar indicadores do zero.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar uma biblioteca com no mínimo 13 KPIs essenciais para PMEs, organizados nos domínios: financeiro, marketing, vendas e operacional.
2. THE Sistema SHALL armazenar para cada KPI: código único, título, descrição, fórmula de cálculo, unidade de medida, domínio e direção de tendência (`higher_is_better` ou `lower_is_better`).
3. THE Sistema SHALL garantir que todo KPI com Threshold tenha os valores na ordem `critical < warning < good`.
4. WHEN um KPI é consultado por código, THE Sistema SHALL retornar todos os seus metadados incluindo fórmula de cálculo e thresholds padrão.
5. THE Sistema SHALL suportar os seguintes KPIs financeiros: `NET_PROFIT_MARGIN`, `CONTRIBUTION_MARGIN`, `BURN_RATE`, `RUNWAY`, `BREAK_EVEN`.
6. THE Sistema SHALL suportar os seguintes KPIs de marketing: `CAC`, `LTV_CAC_RATIO`, `CHURN_RATE`, `CUSTOMER_LTV`.
7. THE Sistema SHALL suportar os seguintes KPIs de vendas: `SALES_CYCLE_DAYS`, `PIPELINE_COVERAGE`.
8. THE Sistema SHALL suportar os seguintes KPIs operacionais: `PRODUCTIVITY_PER_EMPLOYEE`, `DAYS_TO_RECEIVE`.
9. WHERE a funcionalidade de KPIs personalizados está habilitada, THE Sistema SHALL permitir que administradores criem KPIs customizados com código, título, fórmula e thresholds próprios.
10. FOR ALL KPIs na biblioteca, THE Sistema SHALL garantir que serializar e deserializar os dados do KPI produza um objeto equivalente ao original (propriedade round-trip).

---

### Requisito 5: Registro e Histórico de KPIs da Organização

**User Story:** Como gestor, quero registrar os valores dos KPIs da minha empresa por período, para que eu possa acompanhar a evolução dos indicadores ao longo do tempo.

#### Critérios de Aceitação

1. WHEN um usuário registra um valor de KPI para um período, THE Sistema SHALL armazenar: `kpi_id`, `organization_id`, `period_start`, `period_end`, `period_key`, `value`, `currency`, `data_source` e `is_verified`.
2. THE Sistema SHALL aceitar os seguintes tipos de fonte de dados (`data_source`): `manual_input`, `csv_import`, `api_integration`, `erp_sync`.
3. WHEN um KPI é consultado com filtro de período, THE Sistema SHALL retornar apenas os registros dentro do intervalo especificado.
4. THE Sistema SHALL calcular e retornar a tendência de um KPI comparando o valor atual com o valor do período anterior.
5. WHEN o histórico de um KPI é solicitado, THE Sistema SHALL retornar os registros ordenados cronologicamente com no máximo 12 períodos por padrão.
6. IF um valor de KPI é registrado com `value` nulo ou não numérico, THEN THE Sistema SHALL rejeitar o registro com mensagem de erro descritiva.
7. THE Sistema SHALL garantir que para qualquer conjunto de registros de KPI de uma organização, filtrar por `period_key` retorne um subconjunto do total (propriedade metamórfica).
8. WHEN um registro de KPI é atualizado, THE Sistema SHALL preservar o histórico de versões anteriores para fins de auditoria.

---

### Requisito 6: Sistema de Benchmarks

**User Story:** Como gestor, quero comparar os KPIs da minha empresa com benchmarks internos e de mercado, para que eu saiba se meu desempenho está acima ou abaixo da média do setor.

#### Critérios de Aceitação

1. THE Sistema SHALL suportar dois tipos de benchmark: `internal` (baseado no histórico da própria organização) e `market` (baseado em dados setoriais externos).
2. THE Sistema SHALL armazenar para cada benchmark: `kpi_id`, `organization_id`, `period_reference`, `value_target`, `value_excellent`, `value_good`, `value_warning`, `value_critical`.
3. THE Sistema SHALL garantir que benchmarks internos tenham `relevance_score` igual a 100, indicando máxima relevância.
4. WHEN um benchmark de mercado é consultado, THE Sistema SHALL permitir filtrar por `industry_sector` e `company_size`.
5. THE Sistema SHALL calcular o `gap_percentage` entre o valor atual do KPI e o benchmark de referência usando a fórmula: `((actual - target) / target) * 100`.
6. WHEN a análise de benchmark é solicitada para múltiplos KPIs, THE Sistema SHALL retornar para cada KPI: valor atual, benchmark mais relevante, performance (`excellent`, `good`, `warning`, `critical`) e gap percentual.
7. THE Sistema SHALL priorizar benchmarks internos sobre benchmarks de mercado quando ambos estiverem disponíveis para o mesmo KPI.
8. IF nenhum benchmark estiver disponível para um KPI, THEN THE Sistema SHALL retornar `null` para o campo benchmark sem gerar erro.
9. FOR ALL benchmarks, THE Sistema SHALL garantir que `value_critical < value_warning < value_good < value_excellent` (invariante de ordenação).

---

### Requisito 7: Motor de Cálculo de KPIs

**User Story:** Como gestor, quero que a plataforma calcule automaticamente KPIs derivados a partir dos dados que insiro, para que eu não precise fazer cálculos manuais.

#### Critérios de Aceitação

1. THE Motor_Estratégico SHALL calcular `RUNWAY` usando a fórmula: `saldo_caixa / burn_rate_mensal`, retornando o resultado com 1 casa decimal.
2. THE Motor_Estratégico SHALL calcular `LTV_CAC_RATIO` usando a fórmula: `ltv / cac`, retornando o resultado com 2 casas decimais.
3. THE Motor_Estratégico SHALL calcular `CHURN_RATE` usando a fórmula: `(clientes_perdidos / total_clientes) * 100`, retornando o resultado com 2 casas decimais.
4. THE Motor_Estratégico SHALL calcular `NET_PROFIT_MARGIN` usando a fórmula: `(lucro_liquido / receita) * 100`, retornando o resultado com 2 casas decimais.
5. THE Motor_Estratégico SHALL calcular `CONTRIBUTION_MARGIN` usando a fórmula: `((receita - custos_variaveis) / receita) * 100`, retornando o resultado com 2 casas decimais.
6. IF `burn_rate` for zero ou negativo ao calcular `RUNWAY`, THEN THE Motor_Estratégico SHALL retornar erro descritivo sem realizar a divisão.
7. IF `cac` for zero ou negativo ao calcular `LTV_CAC_RATIO`, THEN THE Motor_Estratégico SHALL retornar erro descritivo.
8. IF `total_clientes` for zero ou negativo ao calcular `CHURN_RATE`, THEN THE Motor_Estratégico SHALL retornar erro descritivo.
9. IF `receita` for zero ou negativa ao calcular margens, THEN THE Motor_Estratégico SHALL retornar erro descritivo.
10. FOR ALL cálculos de KPI, THE Motor_Estratégico SHALL produzir resultados determinísticos: os mesmos inputs devem sempre gerar o mesmo output (propriedade de idempotência).
11. FOR ALL cálculos de KPI, THE Motor_Estratégico SHALL produzir resultados equivalentes aos de uma implementação de referência simples (propriedade de model-based testing).

---

### Requisito 8: Detecção Automática de Desafios de Negócio

**User Story:** Como gestor de PME, quero que a plataforma identifique automaticamente os principais desafios do meu negócio com base nos KPIs, para que eu possa agir proativamente antes que os problemas se agravem.

#### Critérios de Aceitação

1. THE Motor_Estratégico SHALL detectar o desafio `CASH_FLOW_CRUNCH` quando `RUNWAY < 6 meses` E `BURN_RATE > limiar crítico`, com confidence_score proporcional à gravidade.
2. THE Motor_Estratégico SHALL detectar o desafio `INEFFICIENT_SALES_MACHINE` quando `SALES_CYCLE_DAYS > 60` E `CAC` estiver acima do threshold de alerta.
3. THE Motor_Estratégico SHALL detectar o desafio `COMMODITY_TRAP` quando `NET_PROFIT_MARGIN` E `CONTRIBUTION_MARGIN` estiverem abaixo dos thresholds de alerta.
4. THE Motor_Estratégico SHALL calcular um `confidence_score` entre 0.0 e 1.0 para cada desafio detectado, baseado na proporção de KPIs relacionados que estão em estado crítico.
5. WHEN múltiplos desafios são detectados, THE Motor_Estratégico SHALL ordená-los por severidade (critical > warning > info) e depois por confidence_score decrescente.
6. THE Motor_Estratégico SHALL retornar para cada desafio detectado: código, título, severidade, confidence_score, lista de KPIs relacionados, sintomas e top 3 recomendações.
7. FOR ALL desafios detectados, THE Motor_Estratégico SHALL garantir que `confidence_score` esteja sempre no intervalo [0.0, 1.0] (invariante de domínio).
8. THE Motor_Estratégico SHALL garantir que a detecção de desafios seja idempotente: executar a detecção duas vezes com os mesmos dados deve produzir o mesmo resultado.
9. WHEN nenhum KPI está em estado crítico ou de alerta, THE Motor_Estratégico SHALL retornar lista vazia de desafios sem gerar erro.

---

### Requisito 9: Biblioteca Estratégica e Recomendações

**User Story:** Como gestor, quero receber recomendações acionáveis e templates estratégicos para resolver os desafios detectados, para que eu saiba exatamente quais passos tomar.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar uma biblioteca de templates estratégicos associados a desafios específicos, com título, descrição, categoria, prioridade, complexidade e tempo estimado.
2. THE Sistema SHALL disponibilizar alavancas de ação (`ActionLever`) para cada template, com passos detalhados, recursos necessários e impacto esperado.
3. WHEN recomendações são geradas para um desafio, THE Sistema SHALL retornar no máximo 3 recomendações priorizadas por score de prioridade decrescente.
4. THE Sistema SHALL suportar os três objetivos estratégicos: `PROFIT_MAXIMIZER`, `CASH_SAFETY_NET` e `SCALABLE_GROWTH`, cada um com métricas de sucesso e timeline definidos.
5. WHEN um template estratégico é aplicado a uma organização, THE Sistema SHALL personalizar os passos de ação considerando o tamanho da empresa e os recursos disponíveis.
6. THE Sistema SHALL disponibilizar alavancas nas categorias: `financial`, `operational`, `marketing`, `sales` e `strategic`.
7. THE Sistema SHALL classificar a complexidade de cada alavanca como `low`, `medium` ou `high`.
8. WHEN um template é consultado por desafio, THE Sistema SHALL retornar apenas templates relevantes para aquele código de desafio específico.

---

### Requisito 10: Gestão de Riscos

**User Story:** Como gestor, quero registrar, avaliar e acompanhar os riscos do meu negócio, para que eu possa tomar medidas preventivas antes que os riscos se materializem.

#### Critérios de Aceitação

1. THE Sistema SHALL permitir criar riscos com: título, descrição, tipo de origem (`internal` ou `external`), categoria, probabilidade (`likelihood` de 1 a 10), impacto (`impact` de 1 a 10) e KPI relacionado.
2. THE Sistema SHALL calcular automaticamente o `risk_score` de cada risco usando a fórmula: `likelihood * impact`, resultando em valor entre 1 e 100.
3. THE Sistema SHALL suportar as seguintes categorias de risco: `strategic`, `operational`, `compliance`, `financial`, `regulatory`, `economical`, `demand`, `sociopolitical`, `environmental`.
4. THE Sistema SHALL suportar os seguintes status de risco: `identified`, `active`, `mitigated`, `occurred`, `archived`.
5. WHEN o status de um risco é atualizado para `mitigated`, THE Sistema SHALL registrar a data de mitigação e o plano de mitigação associado.
6. THE Sistema SHALL gerar uma matriz de riscos 10x10 agrupando riscos por `likelihood` (eixo Y) e `impact` (eixo X), com coloração por nível de risco.
7. THE Sistema SHALL classificar riscos como: `high` (score ≥ 50), `medium` (score 20–49) e `low` (score < 20).
8. WHEN riscos são filtrados por status ou categoria, THE Sistema SHALL retornar um subconjunto do total de riscos da organização (propriedade metamórfica).
9. FOR ALL riscos, THE Sistema SHALL garantir que `risk_score = likelihood * impact` (invariante de cálculo).
10. THE Sistema SHALL disponibilizar um dashboard de riscos com: total de riscos, distribuição por status, distribuição por categoria, riscos de alta prioridade e prazos próximos de mitigação.

---

### Requisito 11: Planos de Mitigação de Riscos

**User Story:** Como gestor, quero criar e acompanhar planos de mitigação para os riscos identificados, para que minha equipe saiba o que fazer e quando fazer.

#### Critérios de Aceitação

1. THE Sistema SHALL permitir criar planos de mitigação vinculados a um risco, com: título, plano de ação detalhado, responsável, prazo (`deadline`), status e custo estimado.
2. THE Sistema SHALL suportar os seguintes status de mitigação: `pending`, `in_progress`, `completed`, `cancelled`.
3. WHEN o prazo de um plano de mitigação está a 7 dias ou menos, THE Sistema SHALL incluir o plano na lista de `upcomingDeadlines` do dashboard de riscos.
4. WHEN um plano de mitigação é marcado como `completed`, THE Sistema SHALL atualizar automaticamente o status do risco associado para `mitigated`.
5. THE Sistema SHALL permitir múltiplos planos de mitigação para um mesmo risco.
6. IF um plano de mitigação é criado sem `deadline`, THEN THE Sistema SHALL aceitar o registro mas sinalizar a ausência de prazo na interface.

---

### Requisito 12: Radar de Alertas Estratégicos

**User Story:** Como gestor, quero visualizar um radar de alertas que monitora continuamente meu negócio, para que eu seja notificado proativamente sobre oportunidades e ameaças.

#### Critérios de Aceitação

1. THE Sistema SHALL exibir Radar_Items com: título, tipo, severidade, domínio, status, diagnóstico (causa raiz, efeito no negócio, por quê acontece), impacto estimado e alavancas sugeridas.
2. THE Sistema SHALL suportar os seguintes status de Radar_Item: `detected`, `in_progress`, `acknowledged`, `dismissed`, `resolved`.
3. THE Sistema SHALL exibir no radar ativo apenas Radar_Items com status `detected` ou `in_progress`.
4. THE Sistema SHALL exibir no histórico do radar Radar_Items com status `acknowledged`, `dismissed` ou `resolved`.
5. WHEN um usuário adiciona um Radar_Item ao Plano de Ação, THE Sistema SHALL atualizar o status do item para `in_progress` e criar um Action_Item correspondente na tabela `action_items`.
6. WHEN um usuário dispensa um Radar_Item, THE Sistema SHALL atualizar o status para `dismissed` e registrar nota de dispensa.
7. WHEN um usuário reativa um Radar_Item do histórico, THE Sistema SHALL atualizar o status para `detected`.
8. THE Sistema SHALL exibir o `aiConfidenceScore` de cada Radar_Item como percentual (0–100%) com indicação do modelo de IA utilizado.
9. THE Sistema SHALL suportar alavancas recomendadas por código: `price`, `cost`, `volume`, `time`, `quality`, `process`, `people`, `technology`, `marketing`, `sales`.
10. FOR ALL Radar_Items, THE Sistema SHALL garantir que dispensar um item já dispensado não altere seu estado (propriedade de idempotência).
11. THE Sistema SHALL exibir o Radar_Item em um painel lateral (Sheet) com gradiente visual baseado no domínio do item.

---

### Requisito 13: Plano de Ação

**User Story:** Como gestor, quero gerenciar um plano de ação com tarefas derivadas dos alertas do radar, para que minha equipe execute as melhorias identificadas de forma organizada.

#### Critérios de Aceitação

1. THE Sistema SHALL criar Action_Items com: `organization_id`, `radar_item_id`, `title`, `status`, `priority` e `notes`.
2. THE Sistema SHALL definir a prioridade do Action_Item automaticamente com base na severidade do Radar_Item de origem: `critical` → prioridade 5, `high` → prioridade 4, demais → prioridade 3.
3. THE Sistema SHALL suportar os seguintes status de Action_Item: `pending`, `in_progress`, `completed`, `cancelled`.
4. WHEN um Action_Item é criado a partir de um Radar_Item, THE Sistema SHALL incluir nas notas o diagnóstico do item de radar (termo diagnóstico e causa).
5. THE Sistema SHALL garantir que todo Action_Item tenha um `radar_item_id` válido referenciando um Radar_Item existente (invariante de integridade referencial).
6. WHEN um Action_Item é marcado como `completed`, THE Sistema SHALL registrar a data de conclusão.

---

### Requisito 14: Dashboard e Visualizações

**User Story:** Como gestor, quero visualizar dashboards com os principais KPIs e métricas do meu negócio em tempo real, para que eu tenha uma visão 360° da saúde da empresa.

#### Critérios de Aceitação

1. THE Sistema SHALL exibir um dashboard principal com KPI cards organizados por domínio (financeiro, marketing, vendas, operacional).
2. THE Sistema SHALL exibir em cada KPI card: valor atual, unidade, tendência (up/down/stable), variação percentual em relação ao período anterior e status de saúde (critical/warning/good).
3. THE Sistema SHALL disponibilizar as seguintes telas de dashboard: Dashboard Principal (`/app`), Painel de Indicadores (`/app/metrics`), Painel de Decisão (`/app/decision-panel`), Analytics Avançados (`/app/analytics`) e Dashboard Consolidado (`/app/consolidated`).
4. THE Sistema SHALL calcular o `overallHealth` da organização como: `critical` se houver KPIs críticos, `warning` se mais de 30% dos KPIs estiverem em alerta, `good` se mais de 70% estiverem bons, `moderate` nos demais casos.
5. WHILE o usuário está em Modo_Demo, THE Sistema SHALL exibir dados fictícios representativos com banner informativo indicando o modo demo.
6. THE Sistema SHALL suportar visualizações de gráficos: linha, barra, pizza e área, utilizando a biblioteca Recharts.
7. WHEN dados de KPI são atualizados, THE Sistema SHALL refletir as mudanças no dashboard sem necessidade de recarregamento manual da página.
8. THE Sistema SHALL exibir o dashboard de forma responsiva em dispositivos móveis, tablets e desktops.

---

### Requisito 15: Relatórios e Exportação

**User Story:** Como gestor, quero criar relatórios personalizados e exportá-los em diferentes formatos, para que eu possa compartilhar insights com stakeholders e tomar decisões baseadas em dados.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar um construtor de relatórios (`ReportBuilder`) com fluxo em etapas: upload de dados, seleção de template, edição de blocos e visualização final.
2. THE Sistema SHALL suportar upload de arquivos nos formatos CSV e Excel com validação de tipo e tamanho máximo de 10MB.
3. THE Sistema SHALL exibir preview dos dados carregados com no mínimo 5 linhas de amostra antes da geração do relatório.
4. THE Sistema SHALL permitir que o usuário ative/desative blocos de conteúdo do relatório e reordene as seções.
5. THE Sistema SHALL suportar exportação de relatórios em formato PDF.
6. THE Sistema SHALL permitir compartilhamento de relatórios via link, WhatsApp e e-mail.
7. THE Sistema SHALL organizar relatórios em pastas com nome, ícone e descrição configuráveis.
8. WHEN um relatório é salvo, THE Sistema SHALL associá-lo a uma pasta e registrar nome, data de criação e organização.
9. THE Sistema SHALL disponibilizar templates de relatório pré-configurados por categoria de análise.
10. WHERE a funcionalidade de agendamento está habilitada, THE Sistema SHALL suportar envio automático de relatórios em frequências: diária, semanal, mensal e trimestral.

---

### Requisito 16: Internacionalização (i18n)

**User Story:** Como usuário de qualquer país, quero usar a plataforma no meu idioma nativo, para que a experiência seja natural e sem barreiras linguísticas.

#### Critérios de Aceitação

1. THE Sistema SHALL suportar três idiomas: Português do Brasil (pt-BR), Inglês (en-US) e Espanhol (es-ES), com cobertura de 100% das strings de interface em cada idioma.
2. THE Sistema SHALL detectar automaticamente o idioma preferido do usuário a partir do navegador e redirecionar para a URL localizada correspondente.
3. THE Sistema SHALL disponibilizar URLs localizadas para cada rota da aplicação (ex: `/pt-BR/app/painel`, `/en-US/app/dashboard`, `/es-ES/app/panel`).
4. WHEN o usuário troca de idioma, THE Sistema SHALL redirecionar para a rota equivalente no novo idioma preservando o contexto de navegação.
5. THE Sistema SHALL incluir tags `hreflang` nas páginas para cada idioma suportado, garantindo SEO multilíngue correto.
6. THE Sistema SHALL atualizar o atributo `lang` do elemento HTML raiz ao mudar de idioma.
7. THE Sistema SHALL garantir que nenhuma string de interface seja hard-coded nos componentes — todas devem usar o sistema de tradução via `i18next`.
8. THE Sistema SHALL usar linguagem de UX Writing otimizada para cada idioma, evitando traduções literais que comprometam a naturalidade do texto.
9. FOR ALL strings de interface, THE Sistema SHALL garantir que mudar o idioma e voltar ao idioma original produza as mesmas traduções (propriedade round-trip de i18n).
10. THE Sistema SHALL suportar formatação localizada de números, datas e moedas de acordo com o idioma ativo.
11. WHEN o idioma é pt-BR, THE Sistema SHALL formatar valores monetários em Reais (R$) com separador decimal vírgula e separador de milhar ponto.

---

### Requisito 17: Segurança da API e Rate Limiting

**User Story:** Como operador da plataforma, quero que a API seja protegida contra abusos e acessos não autorizados, para que os dados dos clientes estejam seguros e o serviço permaneça disponível.

#### Critérios de Aceitação

1. THE Sistema SHALL aplicar rate limiting de 100 requisições por janela de 15 minutos por cliente (identificado por IP + User-Agent).
2. WHEN o limite de requisições é excedido, THEN THE Sistema SHALL retornar HTTP 429 com header `Retry-After` indicando quando o cliente pode tentar novamente.
3. THE Sistema SHALL validar o token JWT em cada requisição autenticada, rejeitando tokens expirados ou com assinatura inválida com HTTP 401.
4. THE Sistema SHALL incluir os seguintes headers de segurança em todas as respostas: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`, `Strict-Transport-Security` e `Content-Security-Policy`.
5. THE Sistema SHALL configurar CORS para aceitar apenas origens autorizadas definidas via variável de ambiente `ALLOWED_ORIGINS`.
6. THE Sistema SHALL validar e sanitizar todos os inputs recebidos pela API para prevenir XSS e SQL injection.
7. THE Sistema SHALL registrar todas as tentativas de autenticação falhas com timestamp, IP e user-agent para fins de auditoria.
8. THE AI_Proxy SHALL intermediar toda comunicação com o modelo Gemini, garantindo que a chave de API nunca seja exposta ao navegador do cliente.
9. THE Sistema SHALL garantir que a taxa de sucesso de autenticação seja superior a 99.5% para usuários com credenciais válidas.

---

### Requisito 18: Proteção de Dados e Privacidade (LGPD/GDPR)

**User Story:** Como usuário, quero que meus dados pessoais sejam tratados com segurança e transparência, para que eu tenha controle sobre minhas informações e a empresa esteja em conformidade com a lei.

#### Critérios de Aceitação

1. THE Sistema SHALL detectar automaticamente a presença de PII nos dados processados, incluindo: CPF, CNPJ, RG, e-mail, telefone brasileiro e número de cartão de crédito.
2. WHEN PII é detectado em dados a serem armazenados, THE Sistema SHALL criptografar os dados usando AES-256 antes do armazenamento.
3. THE Sistema SHALL criptografar todos os dados em trânsito usando HTTPS/TLS.
4. THE Sistema SHALL implementar gestão granular de consentimento, permitindo que usuários concedam ou retirem consentimento por finalidade específica.
5. WHEN um usuário retira consentimento para uma finalidade, THE Sistema SHALL agendar a exclusão dos dados coletados para aquela finalidade dentro de 30 dias.
6. THE Sistema SHALL aplicar minimização de dados, coletando apenas os campos estritamente necessários para cada finalidade declarada.
7. THE Sistema SHALL manter registros de consentimento com: userId, finalidade, decisão, timestamp, IP e user-agent.
8. THE Sistema SHALL implementar políticas de retenção de dados: dados de usuário por 7 anos, dados de analytics por 2 anos, registros de consentimento por 1 ano, logs de acesso por 3 anos.
9. THE Sistema SHALL disponibilizar ao usuário a funcionalidade de exportar todos os seus dados pessoais (direito de portabilidade — LGPD Art. 18).
10. THE Sistema SHALL disponibilizar ao usuário a funcionalidade de solicitar exclusão de todos os seus dados pessoais (direito ao esquecimento — LGPD Art. 18).
11. THE Sistema SHALL rodar chaves de criptografia automaticamente a cada 90 dias.

---

### Requisito 19: Performance e Disponibilidade

**User Story:** Como usuário, quero que a plataforma seja rápida e esteja sempre disponível, para que eu possa acessar meus dados e tomar decisões sem interrupções.

#### Critérios de Aceitação

1. THE Sistema SHALL responder a requisições de API em menos de 200ms no percentil 95 em condições normais de carga.
2. THE Sistema SHALL atingir First Contentful Paint (FCP) inferior a 1.8 segundos em conexões de banda larga.
3. THE Sistema SHALL atingir Largest Contentful Paint (LCP) inferior a 2.5 segundos.
4. THE Sistema SHALL atingir Time to Interactive (TTI) inferior a 3.0 segundos.
5. THE Sistema SHALL manter Cumulative Layout Shift (CLS) inferior a 0.1.
6. THE Sistema SHALL atingir score Lighthouse superior a 90 nas categorias Performance, Acessibilidade e Melhores Práticas.
7. THE Sistema SHALL manter disponibilidade (uptime) superior a 99.9% medida mensalmente.
8. THE Sistema SHALL implementar code splitting por rota para manter o bundle inicial abaixo de 600KB gzipped.
9. THE Sistema SHALL implementar lazy loading para componentes pesados e gráficos complexos.
10. THE Sistema SHALL utilizar cache de dados via TanStack Query com `staleTime` de 5 minutos para dados de KPIs e 10 minutos para dados de organização.
11. THE Sistema SHALL utilizar CDN global para distribuição de assets estáticos via Vercel.

---

### Requisito 20: Modo Demo

**User Story:** Como potencial cliente, quero experimentar a plataforma sem precisar configurar credenciais, para que eu possa avaliar o produto antes de me comprometer com uma assinatura.

#### Critérios de Aceitação

1. THE Sistema SHALL funcionar em Modo_Demo automaticamente quando as variáveis de ambiente `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` não estiverem configuradas.
2. WHILE em Modo_Demo, THE Sistema SHALL exibir dados fictícios representativos em todos os dashboards, KPIs e relatórios.
3. WHILE em Modo_Demo, THE Sistema SHALL exibir um banner informativo persistente indicando que o usuário está visualizando dados de demonstração.
4. WHILE em Modo_Demo, THE Sistema SHALL retornar uma organização fictícia com id `demo-org-id` e nome "Empresa Demo" sem realizar chamadas ao banco de dados.
5. WHILE em Modo_Demo, THE Sistema SHALL autenticar o usuário com id `demo-user-id` sem validação de credenciais reais.
6. THE Sistema SHALL permitir transição suave do Modo_Demo para o modo real mediante configuração das credenciais Supabase sem necessidade de rebuild.
7. WHILE em Modo_Demo, THE Sistema SHALL silenciar avisos de console relacionados a variáveis de ambiente opcionais não configuradas.

---

### Requisito 21: API Pública e Integrações

**User Story:** Como desenvolvedor parceiro, quero integrar meus sistemas com a plataforma SuperRelatórios via API, para que eu possa automatizar o envio de dados e consumir insights programaticamente.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar uma API RESTful com endpoints para: KPIs da biblioteca, KPIs da organização, benchmarks, riscos, planos de mitigação e templates estratégicos.
2. THE Sistema SHALL autenticar requisições à API via Bearer Token no header `Authorization`.
3. THE Sistema SHALL aplicar os seguintes limites de rate limiting por plano: Standard (1.000 req/hora), Premium (10.000 req/hora), Enterprise (ilimitado).
4. THE Sistema SHALL incluir headers de rate limiting em todas as respostas: `X-RateLimit-Limit`, `X-RateLimit-Remaining` e `X-RateLimit-Reset`.
5. THE Sistema SHALL retornar erros em formato padronizado com campos: `error.code`, `error.message` e `error.details`.
6. THE Sistema SHALL suportar paginação em endpoints de listagem com parâmetros `page` e `limit`, retornando metadados de paginação na resposta.
7. THE Sistema SHALL disponibilizar webhooks para os eventos: `kpi.created`, `kpi.updated`, `risk.identified`, `risk.status_changed`, `benchmark.updated` e `mitigation.completed`.
8. FOR ALL endpoints da API, THE Sistema SHALL garantir que criar um recurso e depois buscá-lo retorne dados equivalentes (propriedade round-trip).
9. FOR ALL respostas de erro da API, THE Sistema SHALL garantir que o campo `error.code` esteja sempre presente (invariante de formato de erro).
10. THE Sistema SHALL disponibilizar endpoint de health check (`GET /health`) retornando status dos serviços dependentes (banco de dados, cache, fila).
11. THE Sistema SHALL disponibilizar SDKs oficiais para JavaScript/TypeScript e Python.

---

### Requisito 22: Integrações com Fontes de Dados Externas

**User Story:** Como gestor, quero conectar meus sistemas existentes à plataforma, para que os dados sejam importados automaticamente sem necessidade de entrada manual.

#### Critérios de Aceitação

1. THE Sistema SHALL suportar importação de dados via upload de arquivos nos formatos: CSV, Excel (.xlsx) e Google Sheets.
2. THE Sistema SHALL suportar integração com ERPs: SAP, Oracle NetSuite e Totvs via API REST.
3. THE Sistema SHALL suportar integração com CRMs: Salesforce, HubSpot e Pipedrive via API REST.
4. THE Sistema SHALL suportar integração com sistemas financeiros: QuickBooks e Xero via API REST.
5. WHEN um arquivo é importado, THE Sistema SHALL validar o tipo e tamanho (máximo 10MB) antes de processar.
6. WHEN dados são importados de uma fonte externa, THE Sistema SHALL registrar `data_source` com o identificador da fonte de origem.
7. THE Sistema SHALL exibir preview dos dados importados com no mínimo 5 linhas de amostra para validação pelo usuário antes da confirmação.
8. IF um arquivo importado contém dados inválidos ou corrompidos, THEN THE Sistema SHALL retornar relatório de erros detalhado indicando as linhas e campos problemáticos.

---

### Requisito 23: Notificações e Alertas

**User Story:** Como gestor, quero receber notificações proativas sobre KPIs críticos e eventos importantes, para que eu possa agir rapidamente sem precisar verificar o dashboard manualmente.

#### Critérios de Aceitação

1. THE Sistema SHALL gerar alertas automáticos quando um KPI ultrapassa o threshold crítico.
2. THE Sistema SHALL exibir notificações na interface com badge dinâmico indicando o número de notificações não lidas.
3. THE Sistema SHALL suportar os seguintes tipos de notificação: relatório concluído, compartilhamento recebido, KPI em estado crítico e prazo de mitigação próximo.
4. THE Sistema SHALL permitir que o usuário marque todas as notificações como lidas com uma única ação.
5. WHERE push notifications estão habilitadas, THE Sistema SHALL enviar notificações push para dispositivos móveis sobre alertas críticos.
6. THE Sistema SHALL disponibilizar digest semanal com resumo dos principais KPIs e alertas da semana.
7. WHEN um Radar_Item de severidade `critical` é detectado, THE Sistema SHALL gerar alerta imediato na interface sem aguardar o próximo ciclo de verificação.

---

### Requisito 24: Configurações e Personalização

**User Story:** Como administrador, quero configurar a plataforma de acordo com as necessidades da minha empresa, para que a experiência seja personalizada e relevante para o meu contexto.

#### Critérios de Aceitação

1. THE Sistema SHALL permitir que o administrador gerencie usuários da organização: convidar, editar papel e desativar.
2. THE Sistema SHALL permitir que o usuário altere sua senha via dialog com campos: senha atual, nova senha e confirmação.
3. THE Sistema SHALL permitir que o administrador visualize e encerre sessões ativas em outros dispositivos.
4. THE Sistema SHALL disponibilizar gestão de planos de assinatura com opções: Free, Pro e Enterprise.
5. THE Sistema SHALL disponibilizar histórico de faturas para planos pagos.
6. THE Sistema SHALL permitir que o administrador configure alertas personalizados por KPI com thresholds customizados.
7. THE Sistema SHALL persistir as preferências de idioma do usuário entre sessões.
8. THE Sistema SHALL permitir que o administrador configure a hierarquia organizacional com departamentos e equipes.

---

### Requisito 25: SEO e Analytics

**User Story:** Como responsável pelo produto, quero que a plataforma seja otimizada para mecanismos de busca e tenha rastreamento de uso, para que possamos atrair novos usuários e entender como a plataforma é utilizada.

#### Critérios de Aceitação

1. THE Sistema SHALL gerar meta tags dinâmicas (`title`, `description`, `og:title`, `og:description`) para cada página, localizadas no idioma ativo.
2. THE Sistema SHALL incluir dados estruturados (JSON-LD Schema.org) nas páginas públicas.
3. THE Sistema SHALL gerar URLs canônicas para cada página com tags `hreflang` para todos os idiomas suportados.
4. THE Sistema SHALL integrar com Vercel Analytics para monitoramento de performance e Core Web Vitals em produção.
5. THE Sistema SHALL disponibilizar landing page pública com seções: hero, funcionalidades, como funciona, preços, FAQ e CTA.
6. THE Sistema SHALL implementar smooth scroll para navegação entre seções da landing page via links do header.
7. THE Sistema SHALL exibir active state no header da landing page baseado na seção visível usando IntersectionObserver.

---

### Requisito 26: CI/CD e Qualidade de Código

**User Story:** Como desenvolvedor, quero que o processo de entrega de código seja automatizado e com garantias de qualidade, para que mudanças cheguem à produção de forma segura e rápida.

#### Critérios de Aceitação

1. THE Sistema SHALL executar automaticamente lint, type-check e testes unitários em cada Pull Request via GitHub Actions.
2. THE Sistema SHALL bloquear merge de Pull Requests que falhem em qualquer quality gate (lint, tipos, testes).
3. THE Sistema SHALL gerar deploy preview automático para cada Pull Request na Vercel.
4. THE Sistema SHALL realizar deploy automático para produção após merge na branch principal.
5. THE Sistema SHALL executar auditoria de segurança de dependências (`npm audit`) como parte do pipeline de CI.
6. THE Sistema SHALL utilizar Husky com pre-commit hooks para executar lint-staged antes de cada commit.
7. THE Sistema SHALL manter cobertura de testes unitários superior a 80% para hooks e serviços críticos.
8. THE Sistema SHALL utilizar Playwright para testes E2E dos fluxos críticos: autenticação, criação de KPI e geração de relatório.
9. THE Sistema SHALL seguir Conventional Commits para padronização de mensagens de commit.

---

### Requisito 27: Domínios de Negócio da API (HR, Supply Chain, Tax)

**User Story:** Como desenvolvedor, quero que a API tenha domínios de negócio bem definidos para RH, cadeia de suprimentos e fiscal, para que a plataforma possa expandir para análises especializadas nessas áreas.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar domínio `hr` na API com suporte a KPIs de recursos humanos: produtividade por funcionário, turnover, satisfação de equipe e custo por contratação.
2. THE Sistema SHALL disponibilizar domínio `supply_chain` na API com suporte a KPIs de cadeia de suprimentos: giro de estoque, prazo de entrega, taxa de ruptura e custo de armazenagem.
3. THE Sistema SHALL disponibilizar domínio `tax` na API com suporte a KPIs fiscais: carga tributária efetiva, compliance fiscal e provisões tributárias.
4. THE Sistema SHALL garantir que os domínios `hr`, `supply_chain` e `tax` sigam a mesma arquitetura de Clean Architecture e DDD dos demais domínios.
5. WHEN KPIs de domínios especializados são consultados, THE Sistema SHALL aplicar as mesmas regras de RBAC e isolamento por organização dos demais domínios.

---

### Requisito 28: Busca Global

**User Story:** Como usuário, quero buscar relatórios, KPIs e conteúdo da plataforma de forma rápida, para que eu encontre o que preciso sem navegar por múltiplas telas.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar busca global acessível pelo header da aplicação em todas as telas autenticadas.
2. WHEN o usuário digita na busca global, THE Sistema SHALL filtrar relatórios por título, descrição e categoria em tempo real.
3. THE Sistema SHALL exibir resultados da busca em dropdown com links diretos para os recursos encontrados.
4. WHEN acessado em dispositivo móvel, THE Sistema SHALL exibir a busca como overlay de tela cheia ao clicar no ícone de busca.
5. WHEN a busca não retorna resultados, THE Sistema SHALL exibir estado vazio com sugestões de ação.

---

### Requisito 29: Acessibilidade

**User Story:** Como usuário com necessidades especiais, quero que a plataforma seja acessível com tecnologias assistivas, para que eu possa usar todos os recursos sem barreiras.

#### Critérios de Aceitação

1. THE Sistema SHALL garantir que todos os componentes interativos sejam navegáveis via teclado (Tab, Enter, Escape, setas direcionais).
2. THE Sistema SHALL incluir atributos ARIA (`aria-label`, `aria-describedby`, `role`) em todos os componentes interativos que não possuam texto visível descritivo.
3. THE Sistema SHALL garantir contraste mínimo de 4.5:1 entre texto e fundo para texto normal e 3:1 para texto grande, conforme WCAG 2.1 AA.
4. THE Sistema SHALL exibir indicadores de foco visíveis em todos os elementos interativos ao navegar via teclado.
5. THE Sistema SHALL garantir que modais e drawers (Sheet) capturem o foco ao abrir e o devolvam ao elemento de origem ao fechar.
6. THE Sistema SHALL utilizar componentes Radix UI como base para garantir acessibilidade nativa em elementos complexos como dropdowns, dialogs e tabs.

---

### Requisito 30: Documentação Contínua

**User Story:** Como desenvolvedor do projeto, quero que a documentação seja mantida atualizada automaticamente a cada mudança significativa, para que o conhecimento do projeto esteja sempre acessível e preciso.

#### Critérios de Aceitação

1. THE Sistema SHALL manter documentação atualizada na pasta `docs/` com as subpastas obrigatórias: `01-strategy/`, `02-technical/`, `03-development/`, `03-operations/`, `04-api/`, `05-user-guides/`, `06-compliance/`, `07-knowledge/`.
2. THE Sistema SHALL atualizar o `CHANGELOG.md` para cada release significativo seguindo o formato Keep a Changelog com Semantic Versioning.
3. THE Sistema SHALL manter o `README.md` raiz sempre atualizado com o estado atual do projeto, instruções de setup e links para documentação.
4. WHEN uma nova feature de impacto médio ou grande é implementada, THE Sistema SHALL incluir documentação correspondente na pasta `docs/` antes do merge.
5. WHEN uma decisão arquitetural significativa é tomada, THE Sistema SHALL registrar um ADR (Architecture Decision Record) no arquivo `docs/07-knowledge/DECISION_LOG.md`.
6. THE Sistema SHALL manter o arquivo `docs/07-knowledge/TECHNICAL_DEBT.md` atualizado com itens de dívida técnica identificados, priorizados por impacto e esforço.
7. THE Sistema SHALL manter o arquivo `docs/07-knowledge/ROADMAP.md` atualizado com o planejamento de features por trimestre.

---

### Requisito 31: Pipeline de Ingestão de Documentos

**User Story:** Como gestor, quero carregar documentos da minha empresa (PDFs, planilhas, contratos, relatórios financeiros) ou conectar minhas pastas do Google Drive e OneDrive, para que a plataforma extraia automaticamente os dados relevantes e os utilize para calcular indicadores sem entrada manual.

#### Critérios de Aceitação

1. THE Sistema SHALL suportar upload direto de arquivos nos formatos: PDF, DOCX, XLSX, CSV, TXT, PNG e JPEG, com tamanho máximo de 50MB por arquivo e 500MB por lote.
2. THE Sistema SHALL suportar conexão com Google Drive via OAuth 2.0, permitindo que o usuário selecione pastas ou arquivos individuais para sincronização.
3. THE Sistema SHALL suportar conexão com Microsoft OneDrive via OAuth 2.0 (Microsoft Identity Platform), permitindo que o usuário selecione pastas ou arquivos individuais para sincronização.
4. WHEN um documento é recebido (upload ou sincronização de nuvem), THE Sistema SHALL enfileirar o documento para processamento assíncrono e retornar imediatamente um `document_id` com status `queued`.
5. THE Sistema SHALL processar documentos através do pipeline sequencial: `queued` → `extracting` (Unstructured) → `parsing` (parser semântico) → `mapping` (mapeamento para KPIs) → `completed` ou `failed`.
6. THE Sistema SHALL utilizar a API Unstructured para extração de conteúdo bruto de documentos não estruturados (PDFs, imagens, DOCX), preservando estrutura de tabelas, cabeçalhos e metadados.
7. AFTER extração pelo Unstructured, THE Sistema SHALL aplicar um parser semântico (via Gemini) para identificar entidades financeiras, operacionais e estratégicas no texto extraído e mapeá-las para campos de KPIs conhecidos.
8. WHEN o parser semântico identifica valores mapeáveis para KPIs, THE Sistema SHALL criar automaticamente registros em `organization_kpi_values` com `data_source = 'document_import'` e `source_document_id` referenciando o documento de origem.
9. THE Sistema SHALL exibir o status de processamento em tempo real via Supabase Realtime, atualizando a interface sem necessidade de polling manual.
10. WHEN o processamento falha em qualquer etapa, THE Sistema SHALL registrar o erro detalhado, manter o documento com status `failed` e permitir reprocessamento manual.
11. THE Sistema SHALL exibir um relatório de extração para cada documento processado, indicando: campos extraídos, KPIs mapeados, campos não reconhecidos e confiança da extração (0–100%).
12. THE Sistema SHALL suportar sincronização periódica automática de pastas conectadas (Google Drive / OneDrive) com frequência configurável: manual, diária ou semanal.
13. WHEN um documento já processado é atualizado na fonte (Drive/OneDrive), THE Sistema SHALL detectar a mudança via webhook ou polling e reprocessar automaticamente, preservando o histórico da versão anterior.
14. FOR ALL documentos processados, THE Sistema SHALL garantir que o `source_document_id` nos registros de KPI seja sempre rastreável ao documento de origem (invariante de rastreabilidade).
15. THE Sistema SHALL suportar processamento em lote de até 50 documentos simultaneamente por organização.

---

### Requisito 32: Gestão de Data Sources e Histórico de Documentos

**User Story:** Como gestor, quero visualizar e gerenciar todas as fontes de dados conectadas e o histórico completo de documentos processados, para que eu tenha rastreabilidade total sobre a origem de cada dado utilizado nos indicadores.

#### Critérios de Aceitação

1. THE Sistema SHALL armazenar cada documento processado com: `id`, `organization_id`, `name`, `original_filename`, `file_type`, `file_size_bytes`, `storage_path`, `source_type` (`upload`, `google_drive`, `onedrive`), `source_external_id`, `source_url`, `processing_status`, `processing_started_at`, `processing_completed_at`, `extraction_confidence`, `kpis_extracted_count`, `error_message` e `created_by`.
2. THE Sistema SHALL armazenar cada conexão de fonte de dados com: `id`, `organization_id`, `provider` (`google_drive`, `onedrive`, `csv_upload`, `erp_api`, `crm_api`), `display_name`, `credentials_encrypted`, `sync_config` (frequência, pastas selecionadas), `last_sync_at`, `status` (`active`, `paused`, `error`, `revoked`) e `created_at`.
3. THE Sistema SHALL disponibilizar uma tela de gestão de Data Sources (`/app/data-sources`) com: lista de conexões ativas, status de cada conexão, última sincronização, documentos processados por fonte e ações (sincronizar agora, pausar, revogar).
4. THE Sistema SHALL disponibilizar uma tela de histórico de documentos (`/app/data-sources/documents`) com: lista paginada de todos os documentos, filtros por status, tipo, fonte e período, e ações (visualizar extração, reprocessar, excluir).
5. WHEN um documento é excluído, THE Sistema SHALL manter os registros de KPI derivados desse documento, mas marcar `source_document_id` como `[documento excluído]` para preservar rastreabilidade histórica.
6. THE Sistema SHALL exibir para cada documento processado: preview do conteúdo extraído, lista de KPIs mapeados com valores e períodos, e score de confiança da extração.
7. THE Sistema SHALL permitir que o usuário corrija manualmente valores extraídos incorretamente, registrando a correção com `is_verified = true` e `verified_by`.
8. THE Sistema SHALL calcular e exibir estatísticas de qualidade por fonte de dados: taxa de sucesso de processamento, média de confiança de extração e número de KPIs extraídos por documento.
9. WHEN uma conexão com Google Drive ou OneDrive é revogada, THE Sistema SHALL revogar os tokens OAuth armazenados e marcar a conexão como `revoked` sem excluir o histórico de documentos já processados.
10. FOR ALL data sources, THE Sistema SHALL garantir que credenciais OAuth e tokens de acesso sejam armazenados criptografados com AES-256 e nunca expostos em logs ou respostas de API.
11. THE Sistema SHALL disponibilizar webhooks para os eventos: `document.queued`, `document.completed`, `document.failed` e `datasource.sync_completed`.
12. THE Sistema SHALL suportar reprocessamento em lote de documentos com status `failed` com um único clique.

---

### Requisito 33: Base de Conhecimento Estratégica (Knowledge Base)

**User Story:** Como gestor, quero que a plataforma mantenha um histórico completo e imutável de toda a inteligência gerada — indicadores, análises, diagnósticos, radar, objetivos, desafios, alavancas e planos de ação — organizado por data e período, para que eu possa consultar a evolução estratégica da empresa ao longo do tempo e usar esse histórico como contexto para novas análises de IA.

#### Critérios de Aceitação

1. THE Sistema SHALL registrar automaticamente um `knowledge_snapshot` ao final de cada período de análise (mensal por padrão), capturando o estado completo da inteligência gerada: KPIs calculados, desafios detectados, radar items ativos, objetivos em andamento, alavancas recomendadas e planos de ação.
2. THE Sistema SHALL armazenar cada `knowledge_snapshot` com: `id`, `organization_id`, `period_key`, `period_start`, `period_end`, `snapshot_type` (`periodic`, `manual`, `triggered`), `kpi_summary` (JSONB), `challenges_detected` (JSONB), `radar_items_active` (JSONB), `objectives_status` (JSONB), `action_plans_status` (JSONB), `overall_health`, `ai_narrative` e `created_at`.
3. THE Sistema SHALL garantir que `knowledge_snapshots` sejam imutáveis após criação — nenhum snapshot pode ser editado ou excluído, apenas novos snapshots podem ser criados (append-only ledger).
4. THE Sistema SHALL disponibilizar uma linha do tempo estratégica (`/app/knowledge`) que exibe os snapshots em ordem cronológica, permitindo comparação entre períodos.
5. WHEN o usuário seleciona dois períodos na linha do tempo, THE Sistema SHALL gerar uma análise comparativa automática via IA destacando: KPIs que melhoraram, KPIs que pioraram, desafios resolvidos, novos desafios emergentes e evolução dos planos de ação.
6. THE Sistema SHALL armazenar o histórico completo de cada entidade estratégica com versionamento temporal:
   - `kpi_history`: todos os valores de KPI por período com rastreabilidade de fonte
   - `challenge_history`: todos os desafios detectados com data de detecção, resolução e confidence score
   - `radar_item_history`: ciclo de vida completo de cada radar item (detected → in_progress → resolved)
   - `objective_history`: evolução de cada objetivo com métricas de progresso por período
   - `action_plan_history`: histórico de execução de cada plano de ação com datas e responsáveis
7. THE Sistema SHALL utilizar o histórico da Knowledge Base como contexto enriquecido para análises de IA, permitindo que o Gemini responda perguntas como "Como evoluiu minha margem de contribuição nos últimos 6 meses?" com base nos dados históricos reais da empresa.
8. THE Sistema SHALL disponibilizar uma interface de consulta à Knowledge Base (`/app/knowledge/query`) onde o usuário pode fazer perguntas em linguagem natural sobre o histórico estratégico da empresa.
9. WHEN uma consulta em linguagem natural é submetida, THE Sistema SHALL recuperar os snapshots e registros históricos relevantes, enviá-los como contexto ao Gemini via AI Proxy e retornar uma resposta narrativa com referências aos dados históricos utilizados.
10. THE Sistema SHALL indexar a Knowledge Base para busca semântica, permitindo recuperação eficiente de snapshots e registros por similaridade de conteúdo.
11. THE Sistema SHALL disponibilizar exportação da Knowledge Base em formato JSON estruturado para fins de auditoria, backup ou migração.
12. FOR ALL knowledge_snapshots, THE Sistema SHALL garantir que o campo `period_key` seja único por organização (invariante de unicidade de período).
13. THE Sistema SHALL gerar automaticamente um `ai_narrative` para cada snapshot — um resumo executivo em linguagem natural da situação estratégica da empresa naquele período, gerado pelo Gemini com base nos dados do snapshot.
14. THE Sistema SHALL disponibilizar um painel de evolução histórica de KPIs com gráficos de linha mostrando a trajetória de cada indicador ao longo de todos os períodos registrados na Knowledge Base.

---

### Requisito 34: Company Blueprint (DNA da Empresa)

**User Story:** Como administrador, quero cadastrar e manter um perfil completo da minha empresa — seu DNA estratégico, operacional e de mercado — para que a plataforma use essas informações como contexto permanente em todas as análises de IA, tornando os diagnósticos, recomendações e benchmarks muito mais precisos e relevantes para a realidade do meu negócio.

#### Critérios de Aceitação

1. THE Sistema SHALL disponibilizar um módulo de Company Blueprint (`/app/blueprint`) com formulário estruturado em seções para cadastro completo do DNA da empresa.
2. THE Sistema SHALL armazenar as seguintes seções do Blueprint:

   **Identidade e Posicionamento:**
   - `legal_name`: razão social
   - `trade_name`: nome fantasia
   - `cnpj`: CNPJ (criptografado como PII)
   - `founding_year`: ano de fundação
   - `company_stage`: estágio (`pre_revenue`, `early_stage`, `growth`, `scale_up`, `mature`, `turnaround`)
   - `business_model`: modelo de negócio (`b2b`, `b2c`, `b2b2c`, `marketplace`, `saas`, `services`, `product`, `hybrid`)
   - `value_proposition`: proposta de valor (texto livre, até 500 chars)
   - `mission`: missão
   - `vision`: visão
   - `core_values`: valores (array de strings)

   **Mercado e Competição:**
   - `industry_sector`: setor de atuação (lista padronizada)
   - `industry_subsector`: subsetor
   - `target_market`: mercado-alvo (B2B/B2C, segmentos)
   - `geographic_coverage`: cobertura geográfica (`local`, `regional`, `national`, `latam`, `global`)
   - `main_competitors`: principais concorrentes (array)
   - `competitive_advantages`: diferenciais competitivos (array)
   - `market_position`: posição de mercado (`leader`, `challenger`, `follower`, `niche`)

   **Estrutura Operacional:**
   - `employee_count_range`: faixa de funcionários (`1-10`, `11-50`, `51-200`, `201-500`, `500+`)
   - `annual_revenue_range`: faixa de receita anual (em R$)
   - `departments`: departamentos existentes (array)
   - `key_processes`: processos-chave do negócio (array)
   - `technology_stack`: principais tecnologias utilizadas (array)
   - `operational_maturity`: maturidade operacional (1–5)

   **Produtos e Serviços:**
   - `products_services`: lista de produtos/serviços com nome, descrição, categoria e receita estimada (%)
   - `main_revenue_streams`: principais fontes de receita
   - `pricing_model`: modelo de precificação (`subscription`, `transactional`, `project`, `retainer`, `freemium`, `hybrid`)
   - `average_ticket`: ticket médio estimado

   **Objetivos Estratégicos:**
   - `strategic_objectives`: objetivos estratégicos de longo prazo (array com título, prazo e KPI de sucesso)
   - `current_priorities`: prioridades atuais (array, máximo 5)
   - `known_challenges`: desafios conhecidos declarados pelo gestor (array)
   - `growth_target_yoy`: meta de crescimento anual (%)

   **Contexto Financeiro:**
   - `funding_stage`: estágio de funding (`bootstrapped`, `pre_seed`, `seed`, `series_a`, `series_b`, `series_c_plus`, `ipo`, `profitable`)
   - `has_external_investors`: possui investidores externos (boolean)
   - `fiscal_year_start_month`: mês de início do ano fiscal (1–12)
   - `reporting_currency`: moeda de reporte (`BRL`, `USD`, `EUR`)

3. WHEN o Blueprint é preenchido pela primeira vez, THE Sistema SHALL calcular um `blueprint_completeness_score` (0–100%) baseado na proporção de campos preenchidos, exibindo sugestões de campos faltantes que aumentariam a precisão das análises.
4. THE Sistema SHALL utilizar os dados do Blueprint como contexto permanente em todas as chamadas ao Gemini, incluindo automaticamente as informações relevantes do DNA da empresa no prompt de cada análise.
5. WHEN o Motor Estratégico detecta desafios, THE Sistema SHALL cruzar os desafios detectados com os `known_challenges` declarados no Blueprint para validar e enriquecer o diagnóstico.
6. WHEN benchmarks de mercado são calculados, THE Sistema SHALL filtrar automaticamente benchmarks pelo `industry_sector`, `company_size` e `business_model` do Blueprint, sem necessidade de configuração manual.
7. THE Sistema SHALL versionar o Blueprint, mantendo histórico de todas as alterações com `changed_by`, `changed_at` e `diff` das mudanças realizadas.
8. WHEN o Blueprint é atualizado em campos estratégicos (company_stage, strategic_objectives, known_challenges), THE Sistema SHALL disparar uma reanálise automática do Motor Estratégico para recalcular desafios e recomendações com o novo contexto.
9. THE Sistema SHALL exibir um indicador visual de completude do Blueprint em todas as telas de análise, incentivando o preenchimento completo para melhorar a qualidade das recomendações.
10. THE Sistema SHALL disponibilizar um assistente de preenchimento do Blueprint via IA, onde o usuário pode descrever sua empresa em linguagem natural e o sistema extrai e preenche automaticamente os campos estruturados.
11. FOR ALL campos do Blueprint marcados como PII (`cnpj`, `legal_name`), THE Sistema SHALL aplicar criptografia AES-256 em repouso.
12. THE Sistema SHALL garantir que o Blueprint tenha exatamente um registro por organização (invariante de unicidade 1:1 com organizations).
13. WHEN o Blueprint está incompleto (completeness_score < 60%), THE Sistema SHALL exibir aviso contextual nas telas de análise indicando que as recomendações podem ser menos precisas.
14. THE Sistema SHALL disponibilizar uma visualização do Blueprint em formato de "cartão de identidade da empresa" — um resumo visual compacto com os principais atributos do DNA da empresa.
