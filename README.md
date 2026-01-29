# Landing Page Standalone - Poupeja

Uma landing page independente e estática para o aplicativo Poupeja.

## 🚀 Características

- **Landing page estática** com configurações fixas
- **Responsiva** e otimizada para todos os dispositivos
- **SEO otimizado** com meta tags
- **Animações suaves** com Framer Motion
- **Performance otimizada** com Vite
- **TypeScript** para maior segurança de tipos

## 📦 Instalação

1. Clone ou baixe este projeto
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção

## 📁 Estrutura do Projeto

```
landing-page-standalone/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── LandingHeader.tsx
│   │   ├── LandingHero.tsx
│   │   ├── LandingPricing.tsx
│   │   ├── LandingBenefits.tsx
│   │   └── LandingCTA.tsx
│   ├── hooks/
│   │   ├── useBrandingConfig.ts
│   │   └── usePlanConfig.ts
│   ├── contexts/
│   │   └── BrandingProvider.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── LandingPage.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── index.html
```

## 🎨 Personalização

### Cores e Tema
As cores podem ser personalizadas no arquivo `tailwind.config.ts` e `src/styles/globals.css`.

### Componentes
Todos os componentes estão na pasta `src/components/` e podem ser facilmente customizados.

### Conteúdo
O conteúdo está configurado diretamente nos componentes e pode ser alterado editando os arquivos correspondentes.

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Deploy em Serviços
- **Vercel**: Conecte o repositório
- **Netlify**: Faça upload da pasta `dist` ou conecte o repositório
- **GitHub Pages**: Use o workflow de deploy automático

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔧 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📈 Facebook Pixel

Esta landing suporta integração com Facebook Pixel usando variável de ambiente.

- Defina `VITE_FACEBOOK_PIXEL_ID` no arquivo `.env` com o ID do seu Pixel.
- A inicialização ocorre no `App.tsx` via utilitário `src/lib/facebookPixel.ts`.
- O utilitário carrega `fbevents.js`, chama `fbq('init', ID)` e `fbq('track', 'PageView')`.
- Logs de status são expostos em `window.__PIXEL_STATUS__` para monitoramento básico.

### Debug em localhost
Este projeto não utiliza mais flag de debug dedicada para o Pixel.

### Verificação rápida
- Abra a aplicação (`npm run dev`) e verifique no console:
  - Mensagem `[Pixel] Inicializado com ID ...`.
  - `window.fbq` definido e `window.__PIXEL_STATUS__` com `initialized: true`.
- Envie um evento de teste no console:
  ```js
  window.fbq && window.fbq('trackCustom', 'PixelInitTest', { source: 'manual' })
  ```

### Observações
- Em ambientes sem o ID, será logado um aviso e o Pixel não inicializa.
- Alguns bloqueadores/anti-tracking podem impedir o carregamento de `fbevents.js`.
  - Teste em janela anônima sem extensões, ou desative temporariamente ad-blockers.
  - Verifique no Network se `https://connect.facebook.net/en_US/fbevents.js` carrega.

## 📄 Licença

Este projeto é propriedade da Poupeja. Todos os direitos reservados.