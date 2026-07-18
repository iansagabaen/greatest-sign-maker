import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load shared .env from project root, then project-specific .env.local
    const sharedEnv = loadEnv(mode, '../../', '');
    const projectEnv = loadEnv(mode, '.', '');
    const env = { ...sharedEnv, ...projectEnv }; // Project .env.local overrides shared .env
    return {
      server: {
        port: parseInt(process.env.PORT || '3000', 10),
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.POSTHOG_KEY': JSON.stringify(env.POSTHOG_KEY),
        'process.env.POSTHOG_HOST': JSON.stringify(env.POSTHOG_HOST),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
