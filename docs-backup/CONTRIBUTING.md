# Contribuindo para o SuperRelatórios

Obrigado pelo seu interesse em contribuir para o SuperRelatórios! Este guia irá ajudar você a começar.

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git
- Conta no GitHub (para PRs)

### Setup do Ambiente

1. **Fork o repositório**
   ```bash
   # Fork no GitHub e clone localmente
   git clone https://github.com/SEU_USERNAME/superrelatorios.git
   cd superrelatorios
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Edite .env com suas chaves de API
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Verifique os testes**
   ```bash
   npm test
   ```

## 📋 Processo de Desenvolvimento

### 1. Crie uma Branch

```bash
git checkout -b feature/sua-feature
# ou
git checkout -b fix/bug-correction
```

### 2. Desenvolva

- Siga as convenções de código do projeto
- Escreva testes para novas funcionalidades
- Mantenha os testes existentes passando
- Use TypeScript estrito

### 3. Testes

```bash
# Execute todos os testes
npm test

# Execute com coverage
npm run test:coverage

# Execute linting
npm run lint

# Execute type checking
npm run type-check
```

### 4. Commit

Use mensagens de commit claras e descritivas:

```
feat: adicionar nova funcionalidade de exportação
fix: corrigir bug de validação de formulário
docs: atualizar README com instruções de setup
test: adicionar testes para o serviço de IA
refactor: otimizar performance do dashboard
```

### 5. Pull Request

- Abra um PR contra a branch `main`
- Descreva claramente as mudanças
- Inclua screenshots se aplicável
- Aguarde o code review

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios

```
src/
├── components/       # Componentes de UI
│   ├── ui/         # Componentes reutilizáveis (shadcn/ui)
│   ├── reports/    # Componentes específicos de relatórios
│   └── layout/     # Componentes de layout
├── pages/          # Páginas da aplicação
├── services/       # Lógica de negócio e APIs
├── hooks/          # Hooks customizados
├── contexts/       # Contextos React
├── types/          # Definições de tipos TypeScript
├── lib/            # Utilitários e configurações
└── test/           # Testes e configuração
```

### Clean Architecture

- **UI Layer**: `src/components/`, `src/pages/`
- **Application Layer**: `src/services/`, `src/hooks/`
- **Domain Layer**: `src/types/`
- **Infrastructure Layer**: `src/lib/`

## 🧪 Guia de Testes

### Tipos de Testes

1. **Unit Tests**: Testam funções isoladas
   ```typescript
   // src/services/fileParserService.test.ts
   describe('parseFile', () => {
     it('should parse CSV correctly', async () => {
       const result = await parseFile(mockCsvFile);
       expect(result.fileType).toBe('csv');
     });
   });
   ```

2. **Integration Tests**: Testam múltiplos componentes juntos
   ```typescript
   // src/contexts/ReportBuilderContext.test.tsx
   it('should update state and run AI analysis', async () => {
     // Testa integração entre context e serviços
   });
   ```

3. **E2E Tests**: Testam fluxos completos do usuário
   ```typescript
   // e2e/landing.spec.ts
   test('user can create a report', async ({ page }) => {
     await page.goto('/');
     // Fluxo completo de criação
   });
   ```

### Melhores Práticas

- Use `describe` para agrupar testes relacionados
- Use `it` com descrições claras do que está sendo testado
- Mock dependências externas (APIs, serviços)
- Use `vi.waitFor` para operações assíncronas
- Mantenha testes rápidos e focados

## 🎨 Guia de Estilo

### TypeScript

- Use tipagem estrita (`strict: true`)
- Evite `any` - prefira `unknown` ou tipos específicos
- Defina interfaces para objetos complexos
- Use tipos union quando apropriado

### React

- Use componentes funcionais com hooks
- Prefira `const` sobre `function` para componentes
- Use `React.memo` para performance quando necessário
- Mantenha componentes pequenos e focados

### CSS/Estilização

- Use Tailwind CSS classes
- Siga o sistema de design definido
- Mantenha consistência visual
- Use design responsivo

## 📝 Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (`ReportBuilder`)
- **Funções/Hooks**: camelCase (`useReports`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Arquivos**: kebab-case (`report-builder.tsx`)

### Imports

```typescript
// 1. React e bibliotecas externas
import React from 'react';
import { QueryClient } from '@tanstack/react-query';

// 2. Componentes internos (alias @)
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

// 3. Tipos e interfaces
import type { Report } from '@/types/reports';
```

### Estrutura de Componente

```typescript
interface ComponentProps {
  // Props tipadas
}

export const Component: React.FC<ComponentProps> = ({ prop }) => {
  // Lógica do componente
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default Component;
```

## 🐛 Reportando Bugs

### Bug Report Template

```markdown
## Descrição do Bug
Breve descrição do problema

## Passos para Reproduzir
1. Ir para '...'
2. Clicar em '....'
3. Ver erro

## Comportamento Esperado
O que deveria acontecer

## Comportamento Atual
O que realmente acontece

## Screenshots
Se aplicável, adicione screenshots

## Ambiente
- OS: [Windows/Mac/Linux]
- Navegador: [Chrome/Firefox/Safari]
- Versão: [x.x.x]
```

## 💡 Sugestões de Features

### Feature Request Template

```markdown
## Título da Feature
Breve descrição

## Problema que Resolve
Qual problema esta feature resolve?

## Solução Proposta
Como você imagina a solução?

## Alternativas Consideradas
Outras abordagens que você considerou

## Contexto Adicional
Informações adicionais relevantes
```

## 📋 Checklist de Contribuição

- [ ] Li e entendi o guia de contribuição
- [ ] Criei uma branch para minha contribuição
- [ ] Testes passando localmente
- [ ] Linting sem erros
- [ ] TypeScript sem erros
- [ ] Adicionei testes para novas funcionalidades
- [ ] Atualizei documentação se necessário
- [ ] PR descrito claramente

## 🤝 Código de Conduta

Por favor, seja respeitoso, inclusivo e profissional. Harassment, linguagem ofensiva ou comportamento inadequado não serão tolerados.

## 📞 Precisa de Ajuda?

- **Discord**: [Link do Discord]
- **Issues**: [GitHub Issues](https://github.com/projeto/superrelatorios/issues)
- **Email**: [email@projeto.com]

## 🙏 Agradecimentos

Obrigado por contribuir para o SuperRelatórios! Sua ajuda é fundamental para o sucesso do projeto.
