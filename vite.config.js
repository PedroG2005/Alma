// vite.config.js

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // 🔑 CORREÇÃO: Para a Vercel, o base path deve ser sempre a raiz.
    base: '/', 
    
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
    // Garante que o build use a pasta correta (ajustada para Laravel)
    build: {
        outDir: 'public/build' 
    }
});