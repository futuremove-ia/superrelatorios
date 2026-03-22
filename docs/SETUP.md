# 🚀 Guia de Configuração

## 📋 Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn
- Conta Supabase (opcional, para modo real)

## 🧪 Modo Demo (Imediato)

O SuperRelatórios funciona imediatamente em modo demo, sem necessidade de configuração:

### Acesso
```
https://superrelatorios.vercel.app
```

### Funcionalidades
- ✅ Todas as telas funcionais
- ✅ Design System completo
- ✅ Navegação intuitiva
- ✅ Dados mock para demonstração
- ✅ Banner informativo de modo demo

## 🔧 Configuração Completa (Opcional)

Para usar dados reais, configure o Supabase:

### 1. Criar Projeto Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova organização
3. Crie um novo projeto
4. Anote as credenciais

### 2. Configurar Variáveis de Ambiente

#### Local (Desenvolvimento)
```bash
# Criar arquivo .env.local
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_GEMINI_API_KEY=your-gemini-api-key-here
```

#### Produção (Vercel)
1. Acesse [vercel.com](https://vercel.com)
2. Vá para o projeto `superrelatorios`
3. Settings → Environment Variables
4. Adicione as mesmas variáveis

### 3. Executar Scripts SQL

Execute os scripts SQL no Supabase SQL Editor:

```sql
-- Script principal
SCRIPT_DEFINITIVO_SUPABASE.sql
```

### 4. Reiniciar Aplicação

```bash
npm run dev
# ou
npm run build && npm run preview
```

## 🌐 Deploy Automático

O deploy é automático via GitHub Actions:

- **Branch `develop`**: Deploy preview
- **Branch `main`**: Deploy produção
- **Pull Requests**: Deploy preview automático

## 🔧 Configuração Adicional

### Gemini API (Opcional)
Para funcionalidades de IA:

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crie uma API key
3. Configure `VITE_GEMINI_API_KEY`

### Environment Variables

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `VITE_SUPABASE_URL` | URL do projeto Supabase | Não (modo demo) |
| `VITE_SUPABASE_ANON_KEY` | Chave anônima Supabase | Não (modo demo) |
| `VITE_GEMINI_API_KEY` | API key Gemini | Não (opcional) |

## 🚀 Testes

### Testar Localmente
```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Testar em Produção
```bash
# Deploy para produção
npx vercel --prod

# Verificar logs
npx vercel logs
```

## 🔍 Troubleshooting

### Tela Branca
- Verifique se as variáveis de ambiente estão configuradas
- Em modo demo, a aplicação deve funcionar sem Supabase
- Limpe o cache do navegador

### Erros de Build
```bash
# Limpar cache
npm run build -- --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Problemas de Autenticação
- Verifique as credenciais do Supabase
- Confirme se o projeto está ativo
- Teste a conexão com o Supabase

## 📱 Acesso Rápido

### Demo
```
🌐 https://superrelatorios.vercel.app
📧 demo@superrelatorios.com
🔑 Modo demo automático
```

### Desenvolvimento
```
🏠 http://localhost:8080
📋 npm run dev
🔧 Configurar .env.local
```

## 🎯 Próximos Passos

1. **Teste o modo demo** - Funciona imediatamente
2. **Configure Supabase** - Para dados reais (opcional)
3. **Personalize** - Adapte para seu negócio
4. **Implante** - Use com sua equipe

---

## 📞 Suporte

- 📋 [Issues GitHub](https://github.com/futuremove-ia/superrelatorios/issues)
- 📖 [Documentação](./DEVELOPMENT.md)
- 🚀 [Guia de Desenvolvimento](./DEVELOPMENT.md)
