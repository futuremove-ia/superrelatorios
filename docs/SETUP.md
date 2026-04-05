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
# A GEMINI_API_KEY NÃO DEVE SER COLOCADA AQUI EM DESENVOLVIMENTO/PRODUÇÃO
```

#### Produção (Vercel)

1. Acesse [vercel.com](https://vercel.com)
2. Vá para o projeto `superrelatorios`
3. Settings → Environment Variables
4. Adicione as mesmas variáveis

### 3. Executar Scripts SQL

Execute os scripts SQL na pasta `supabase/migrations/` usando o Supabase SQL Editor ou a CLI:

```bash
# Se usar a CLI
supabase db push
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

### Gemini API (Segurança)

Para funcionalidades de IA, a chave é configurada apenas como variável de ambiente no servidor (Vercel):

1. Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crie uma API key
3. Configure `GEMINI_API_KEY` apenas na Vercel (ou no painel da Edge Function). Não use o prefixo `VITE_` para esta chave.

### Environment Variables

#### Base (Obligatoire)

| Variable                 | Description              | Obligatoire     |
| ------------------------ | ------------------------ | --------------- |
| `VITE_SUPABASE_URL`      | URL du projet Supabase   | Non (mode demo) |
| `VITE_SUPABASE_ANON_KEY` | Clé anonime Supabase     | Non (mode demo) |
| `GEMINI_API_KEY`         | Clé API Gemini (Serveur) | Non (optionnel) |

#### Cloud Storage OAuth (Optionnel)

Pour Google Drive et OneDrive, configurez ces variables dans Vercel :

| Variable                 | Description                   |
| ------------------------ | ----------------------------- |
| `GOOGLE_CLIENT_ID`       | Client ID Google OAuth        |
| `GOOGLE_CLIENT_SECRET`   | Client Secret Google OAuth    |
| `GOOGLE_REDIRECT_URI`    | URI de callback Google        |
| `ONEDRIVE_CLIENT_ID`     | Client ID Microsoft OAuth     |
| `ONEDRIVE_CLIENT_SECRET` | Client Secret Microsoft OAuth |
| `ONEDRIVE_REDIRECT_URI`  | URI de callback Microsoft     |

**Note:** Ne pas utiliser le préfixe `VITE_` pour ces variables car elles sont utilisées par les Edge Functions côté serveur.

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
