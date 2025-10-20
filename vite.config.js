import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// 1. O nome do seu repositório
const REPO_NAME = 'Alma'; 

// 2. Define o caminho base de forma condicional.
// Se VITE_APP_GH_PAGES for true (no deploy), usa /Alma/.
// Caso contrário, usa a raiz / (para localhost/Laravel).
const base_path = process.env.VITE_APP_GH_PAGES 
    ? `/${REPO_NAME}/` 
    : '/'; 

export default defineConfig({
    // 🔑 Aplica o caminho base condicional
    base: base_path, 
    
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
    // Garante que o build use a pasta correta
    build: {
        outDir: 'public/build' 
    }
});