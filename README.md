# 🚀 SuperRelatórios

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3%2B-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4%2B-orange)](https://vitejs.dev/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com/)

> 📊 **Plataforma moderna de geração de relatórios inteligentes para PMEs**

## 🌐 Demonstração

**Acesse imediatamente em modo demo:**
```
https://superrelatorios.vercel.app
```

🧪 **Modo Demo:** Funciona sem configuração prévia, com dados mock para demonstração completa.

## ✨ Funcionalidades Principais

### 📊 Dashboards Inteligentes
- **Dashboard Principal** com KPICards e métricas em tempo real
- **Painel de Indicadores** separado por domínios (Financeiro, Comercial, Operacional)
- **Dashboard Consolidado** com visão unificada de todos os setores
- **Painel de Decisão** com análise inteligente e recomendações

### 🧠 Analytics Avançados
- **Análise de Correlações** cruzadas entre métricas
- **Previsões e Tendências** com confiança estatística
- **Detecção de Anomalias** e alertas automáticos
- **Insights Inteligentes** com linguagem acionável

### ⚙️ Gestão de Métricas
- **Configuração Avançada** de métricas e KPIs
- **CRUD Completo** para gerenciamento
- **Fórmulas Personalizadas** de cálculo
- **Importação/Exportação** em lote

### 🎨 Design System
- **Interface Moderna** com shadcn/ui
- **Componentes Reutilizáveis** e acessíveis
- **Design Responsivo** para todos os dispositivos
- **Tema Consistente** e profissional

## 🚀 Começo Rápido

### 🧪 Modo Demo (Imediato)

1. **Acesse:** https://superrelatorios.vercel.app
2. **Explore:** Todas as funcionalidades disponíveis
3. **Teste:** Interface completa sem configuração

### 🔧 Setup Local

```bash
# Clonar repositório
git clone https://github.com/futuremove-ia/superrelatorios.git
cd superrelatorios

# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run dev
```

Acesse `http://localhost:8080` para desenvolvimento local.

### 📋 Pré-requisitos

- **Node.js** 20.x ou superior
- **npm** ou **yarn**
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)

## 🏗️ Arquitetura

### 📱 Frontend
- **React 18.3+** com TypeScript
- **Vite 5.4+** para build rápido
- **React Router** para navegação
- **TanStack Query** para cache de dados
- **i18next** para internacionalização

### 🎨 UI/UX
- **shadcn/ui** components
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **Radix UI** para acessibilidade

### 🔧 Backend
- **Supabase** para banco de dados e autenticação
- **Gemini API** para funcionalidades de IA
- **RESTful API** design pattern

## 📚 Documentação

### 📋 Guiias Essenciais
- **[Setup Guide](./docs/SETUP.md)** - Configuração completa
- **[Development Guide](./docs/DEVELOPMENT.md)** - Guia de desenvolvimento
- **[User Guide](./docs/USER_GUIDE.md)** - Manual do usuário
- **[API Documentation](./docs/API_DOCUMENTATION.md)** - Referência da API

### 🏗️ Arquitetura
- **[Architecture Overview](./docs/unified-architecture.md)** - Visão geral
- **[Technical Specs](./docs/02-technical/)** - Especificações técnicas
- **[Performance](./docs/PERFORMANCE_MONITORING.md)** - Monitoramento

### 🚀 Operações
- **[Deployment Guide](./docs/DEPLOYMENT_GUIDE.md)** - Deploy em produção
- **[Global Expansion](./docs/GLOBAL_EXPANSION.md)** - Expansão global

## 🔄 Fluxo de Trabalho

### 📋 Desenvolvimento
```bash
# Criar feature branch
git checkout -b feature/nova-funcionalidade

# Desenvolver e testar
npm run dev

# Fazer commit
git add .
git commit -m "feat: adicionar nova funcionalidade"

# Push e criar PR
git push origin feature/nova-funcionalidade
```

### 🚀 Deploy
- **Branch `develop`**: Deploy preview automático
- **Branch `main`**: Deploy produção automático
- **Pull Requests**: Deploy preview para revisão

### 🧪 Testes
```bash
# Testes unitários
npm run test

# Lint e formatação
npm run lint

# Build de produção
npm run build
```

## 🌍 Internacionalização

### 📝 Idiomas Suportados
- 🇧🇷 **Português (Brasil)** - Principal
- 🇺🇸 **Inglês** - Suporte completo
- 🇪🇸 **Espanhol** - Suporte completo

### 🔧 Configuração
```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
const title = t('dashboard.title');
```

## 🎯 Features Detalhadas

### 📊 Dashboards
| Dashboard | Funcionalidades | Status |
|-----------|----------------|--------|
| Principal | KPICards, tabs, métricas | ✅ Completo |
| Indicadores | Domínios, filtros, busca | ✅ Completo |
| Consolidado | Visão unificada, trends | ✅ Completo |
| Decisão | Análise inteligente, IA | ✅ Completo |

### 🔧 Ferramentas
- **Analytics** avançados com correlações
- **Configuração** de métricas
- **Relatórios** personalizados
- **Exportação** em múltiplos formatos

## 🛣️ Roadmap

### 🚀 Versão 1.0 (Atual)
- ✅ Dashboards completos
- ✅ Design System implementado
- ✅ Modo demo funcional
- ✅ CI/CD automatizado

### 🎯 Versão 1.1 (Próxima)
- 🔄 Integração com Supabase real
- 🔄 Autenticação completa
- 🔄 Relatórios personalizados
- 🔄 Exportação avançada

### 🌟 Versão 2.0 (Futura)
- 📋 Machine Learning integrado
- 📋 API pública
- 📋 Multi-tenant
- 📋 White-label

## 🤝 Contribuição

### 📋 Como Contribuir
1. **Fork** o repositório
2. **Criar** branch para sua feature
3. **Implementar** com testes
4. **Documentar** mudanças
5. **Abrir** Pull Request

### 📝 Convenções
- **Commits:** [Conventional Commits](https://conventionalcommits.org/)
- **Code Style:** ESLint + Prettier
- **Tests:** Vitest + Testing Library
- **Docs:** Markdown padrão

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

### 📋 Canais de Suporte
- 📋 **Issues GitHub:** [Reportar problemas](https://github.com/futuremove-ia/superrelatorios/issues)
- 📋 **Discussions:** [Dúvidas e discussões](https://github.com/futuremove-ia/superrelatorios/discussions)
- 📋 **Documentation:** [Documentação completa](./docs/)

### 🚀 Status do Projeto
- 🟢 **Produção:** Funcionando em modo demo
- 🟡 **Beta:** Configuração Supabase em progresso
- 🔵 **Roadmap:** Planejamento ativo

## 🏆 Badges

![GitHub stars](https://img.shields.io/github/stars/futuremove-ia/superrelatorios?style=social)
![GitHub forks](https://img.shields.io/github/forks/futuremove-ia/superrelatorios?style=social)
![GitHub issues](https://img.shields.io/github/issues/futuremove-ia/superrelatorios)
![GitHub pull requests](https://img.shields.io/github/issues-pr/futuremove-ia/superrelatorios)
![GitHub license](https://img.shields.io/github/license/futuremove-ia/superrelatorios)

---

**🚀 [Acesse agora o SuperRelatórios](https://superrelatorios.vercel.app)**

**⭐ Se este projeto te ajudou, deixe uma estrela!**
