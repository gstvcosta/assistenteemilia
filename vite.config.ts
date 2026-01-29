import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { Plugin } from 'vite';


// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const devHost = env.VITE_DEV_HOST || '::';
  const devPort = Number(env.VITE_DEV_PORT || 8080);

  // Plugin customizado para injetar variáveis do .env no HTML
  const htmlPlugin = (): Plugin => ({
    name: 'html-transform',
    transformIndexHtml(html) {
      return html
        .replace(/<%- title %>/g, env.VITE_SEO_TITLE || 'Poupe Já - Controle Financeiro Inteligente')
        .replace(/<%- description %>/g, env.VITE_SEO_DESCRIPTION || 'Transforme sua vida financeira com o aplicativo mais completo e intuitivo do mercado. Controle total das suas finanças na palma da sua mão.')
        .replace(/<%- keywords %>/g, env.VITE_SEO_KEYWORDS || 'controle financeiro, app financeiro, economia, orçamento pessoal, finanças')
        .replace(/<%- author %>/g, env.VITE_SEO_AUTHOR || 'Poupe Já')
        .replace(/<%- appUrl %>/g, env.VITE_APP_URL || 'https://demo-app.poupeja.com')
        .replace(/<%- logoUrl %>/g, env.VITE_LOGO_URL || '/images/logo.png');
    },
  });

  return {
    server: {
      host: devHost,
      port: devPort,
    },
    plugins: [
      react(),
      htmlPlugin(),
    ],
    define: {
      // Expõe variáveis não-VITE para o cliente quando necessário
      // Mantemos apenas VITE_FACEBOOK_PIXEL_ID disponível no client
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});