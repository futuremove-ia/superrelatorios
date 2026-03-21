# Plano de Implementação: SEO, GEO e Analytics

## Objetivo
Preparar o frontend do SuperRelatórios com práticas definitivas de mercado para Otimização de Buscadores (SEO), Otimização para Inteligências Artificiais Generativas (GEO - Generative Engine Optimization) e rastreabilidade robusta de conversões empresariais (Analytics).

## User Review Required
> [!IMPORTANT]
> Precisamos definir sua ferramenta de Web Analytics de preferência. O plano atual pressupõe a instalação do **Google Tag Manager (GTM)**, pois ele atua como um "coringa" onde você poderá plugar Google Analytics 4 (GA4), Meta Pixel ou Hotjar por conta própria no futuro sem precisarmos tocar no código-fonte novamente. Você aprova essa abordagem via GTM?

## Proposed Changes

### 1. SEO Dinâmico (Search Engine Optimization)
Atualmente o projeto tem apenas _meta tags_ genéricas (e links do Lovable) chumbados no `index.html`. Em um SPA (React), precisamos injetar tags dinamicamente por página.
- **Ferramenta:** `react-helmet-async`
#### [NEW] `src/components/SEO.tsx`
- Componente modular de cabeçalho.
- Receberá props como `title`, `description`, `canonical` para injetar em cada rota.
#### [MODIFY] `src/pages/Index.tsx` e Páginas Públicas
- Adotar o `<SEO />` reescrevendo `title` e `meta description` focando em palavras-chave (Ex: "SuperRelatórios | Gerador Automático de Relatórios").
- Remoção no `index.html` das referências padrão do mantenedor original (`lovable.dev`).

### 2. GEO (Generative Engine Optimization)
Buscadores como ChatGPT Search, Perplexity e Gemini não leem apenas "palavras-chave", eles leem contextos estruturados semânticos (JSON-LD).
#### [NEW] `src/components/StructuredData.tsx`
- Injeção de marcação de esquema oficial (Schema.org) formato `SoftwareApplication` e `Organization` escondido no `<head>` do produto usando o Helmet. Isso "ensina" diretamente as IAs sobre o que é o "SuperRelatórios", seu modelo de preço e finalidade, aumentando a chance da sua marca ser citada por robôs.

### 3. Analytics Enterprise (GTM + GA4)
Preparar o projeto para medição de conversões de visitantes.
- **Ferramenta:** `react-gtm-module`
#### [MODIFY] `src/App.tsx` (ou core da inicialização)
- Inserir inicialização global da "camada de dados" (DataLayer) do Google Tag Manager.
- Configurar ambiente para disparar eventos ao carregar as rotas do React (já que ele é um aplicativo de página única e o visualizador tradicional do Google às vezes se perde nas trocas de tela sem um "history listener").

## Verification Plan

### Automated/Tool Verification
- Inspecionar a árvore DOM do React nas rotas raiz e validar se as Tags do React Helmet estão substituindo ativamente o `<head>`.
- Copiar o JSON-LD gerado e rodar no *Validador de Esquema Rich Results* (pós-deploy do usuário).

### Manual Verification
- Clicar pelo sistema para testar se o objeto `window.dataLayer` está sendo alimentado durante a navegação das sessões, pronto para o GTM consumir.
