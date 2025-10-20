// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// Detecta se o build está rodando no ambiente da Vercel
const isVercel = process.env.VERCEL === '1';

// Configuração base que serve para ambos os ambientes
const baseConfig = {
  base: '/',
  build: {
    outDir: 'public/build'
  }
};

// Exporta a configuração correta baseada no ambiente
export default defineConfig(() => {
  if (isVercel) {
    // --- CONFIGURAÇÃO PARA VERCEL (BUILD ESTÁTICO) ---
    // Usa o index.html como ponto de entrada e apenas o plugin do React.
    return {
      ...baseConfig,
      plugins: [react()],
    };
  } else {
    // --- CONFIGURAÇÃO PARA LOCALHOST (LARAVEL) ---
    // Usa o plugin do Laravel para integrar com o Blade.
    return {
      ...baseConfig,
      plugins: [
        laravel({
          input: ['resources/js/app.jsx'],
          refresh: true,
        }),
        react(),
      ],
      server: {
        host: '0.0.0.0',
        hmr: {
          host: 'localhost',
        },
      },
    };
  }
});