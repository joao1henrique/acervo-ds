import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O trabalho pede o App.js; por isso os componentes ficam em arquivos .js
// e o Vite é avisado de que esses arquivos têm JSX.
export default defineConfig({
  plugins: [react({ include: /\.(js|jsx)$/ })],
  esbuild: { loader: 'jsx', include: /src\/.*\.js$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
});
